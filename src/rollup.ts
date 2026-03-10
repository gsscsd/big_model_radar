/**
 * Weekly and monthly rollup report generator.
 * Reads existing daily digest files — no GitHub API calls needed.
 */

import fs from "node:fs";
import path from "node:path";
import { callLlm, saveFile, autoGenFooter } from "./report.ts";
import { buildWeeklyPrompt, buildMonthlyPrompt } from "./prompts.ts";
import { createGitHubIssue } from "./github.ts";

const DIGESTS_DIR = "digests";
const MAX_CHARS_PER_REPORT = 2500;

// Source report types to read for rollups (in priority order)
const ROLLUP_SOURCES = ["ai-cli", "ai-agents", "ai-trending", "ai-hn", "ai-web"];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getDateDirs(): string[] {
  if (!fs.existsSync(DIGESTS_DIR)) return [];
  return fs
    .readdirSync(DIGESTS_DIR)
    .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && fs.statSync(path.join(DIGESTS_DIR, d)).isDirectory())
    .sort()
    .reverse();
}

/** Read and truncate a daily digest file. Returns null if not found. */
function readDailyDigest(date: string): string | null {
  for (const type of ROLLUP_SOURCES) {
    const p = path.join(DIGESTS_DIR, date, `${type}.md`);
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, "utf-8");
      const truncated = content.slice(0, MAX_CHARS_PER_REPORT);
      return truncated.length < content.length ? truncated + "\n...[摘要截断]" : truncated;
    }
  }
  return null;
}

/** Read a weekly report file. Returns null if not found. */
function readWeeklyDigest(date: string): string | null {
  const p = path.join(DIGESTS_DIR, date, "ai-weekly.md");
  if (!fs.existsSync(p)) return null;
  const content = fs.readFileSync(p, "utf-8");
  return content.slice(0, 3000) + (content.length > 3000 ? "\n...[截断]" : "");
}

/** Format a date as ISO week string, e.g. "2026-W10". */
function toWeekStr(date: Date): string {
  // ISO week: week containing the first Thursday of the year
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// Weekly rollup
// ---------------------------------------------------------------------------

export async function runWeeklyRollup(): Promise<void> {
  const now = new Date();
  // Use CST date (UTC+8)
  const cstDate = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  const dateStr = cstDate.toISOString().slice(0, 10);
  const utcStr = now.toISOString().slice(0, 16).replace("T", " ");
  const weekStr = toWeekStr(cstDate);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  const langs = (process.env["REPORT_LANGS"] ?? "zh")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s === "zh" || s === "en");
  const enabledLangs = langs.length > 0 ? langs : ["zh"];
  const genZh = enabledLangs.includes("zh");
  const genEn = enabledLangs.includes("en");

  console.log(`[weekly] Generating rollup for ${weekStr} (date: ${dateStr})`);
  console.log(`[weekly] Languages: ${enabledLangs.join(", ")}`);

  // Collect last 7 days of daily digests
  const allDates = getDateDirs();
  const last7 = allDates.slice(0, 7);

  const dailyDigests: Record<string, string> = {};
  for (const date of last7) {
    const content = readDailyDigest(date);
    if (content) dailyDigests[date] = content;
  }

  if (Object.keys(dailyDigests).length === 0) {
    console.log("[weekly] No daily digests found, skipping.");
    return;
  }

  console.log(
    `[weekly] Found ${Object.keys(dailyDigests).length} daily digests: ${Object.keys(dailyDigests).join(", ")}`,
  );

  const footer = autoGenFooter("zh");
  const enFooter = autoGenFooter("en");

  if (genZh) {
    console.log("[weekly] Calling LLM for ZH weekly report...");
    const zhSummary = await callLlm(buildWeeklyPrompt(dailyDigests, weekStr, "zh"), 8192);
    const zhContent =
      `# AI 工具生态周报 ${weekStr}\n\n` +
      `> 覆盖日期: ${last7[last7.length - 1]} ~ ${last7[0]} | 生成时间: ${utcStr} UTC\n\n` +
      `---\n\n` +
      zhSummary +
      footer;
    console.log(`  Saved ${saveFile(zhContent, dateStr, "ai-weekly.md")}`);
    if (digestRepo) {
      const url = await createGitHubIssue(`📅 AI 工具生态周报 ${weekStr}`, zhContent, "weekly");
      console.log(`  Created weekly issue: ${url}`);
    }
  }

  if (genEn) {
    console.log("[weekly] Calling LLM for EN weekly report...");
    const enSummary = await callLlm(buildWeeklyPrompt(dailyDigests, weekStr, "en"), 8192);
    const enContent =
      `# AI Tools Ecosystem Weekly Report ${weekStr}\n\n` +
      `> Coverage: ${last7[last7.length - 1]} ~ ${last7[0]} | Generated: ${utcStr} UTC\n\n` +
      `---\n\n` +
      enSummary +
      enFooter;
    console.log(`  Saved ${saveFile(enContent, dateStr, "ai-weekly-en.md")}`);
  }

  console.log("[weekly] Done!");
}

// ---------------------------------------------------------------------------
// Monthly rollup
// ---------------------------------------------------------------------------

export async function runMonthlyRollup(): Promise<void> {
  const now = new Date();
  const cstDate = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  // Monthly report covers the PREVIOUS month
  const prevMonth = new Date(Date.UTC(cstDate.getUTCFullYear(), cstDate.getUTCMonth() - 1, 1));
  const monthStr = prevMonth.toISOString().slice(0, 7); // "2026-02"
  const dateStr = cstDate.toISOString().slice(0, 10);
  const utcStr = now.toISOString().slice(0, 16).replace("T", " ");
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  const langs = (process.env["REPORT_LANGS"] ?? "zh")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s === "zh" || s === "en");
  const enabledLangs = langs.length > 0 ? langs : ["zh"];
  const genZh = enabledLangs.includes("zh");
  const genEn = enabledLangs.includes("en");

  console.log(`[monthly] Generating rollup for ${monthStr} (date: ${dateStr})`);
  console.log(`[monthly] Languages: ${enabledLangs.join(", ")}`);

  const allDates = getDateDirs();

  // Prefer weekly reports from the target month
  const monthDates = allDates.filter((d) => d.startsWith(monthStr));
  const weeklyDates = monthDates.filter((d) => fs.existsSync(path.join(DIGESTS_DIR, d, "ai-weekly.md")));

  let sourceDigests: Record<string, string>;
  let sourceLabel: { zh: string; en: string };

  if (weeklyDates.length >= 2) {
    // Use weekly reports
    sourceLabel = {
      zh: `${weeklyDates.length} 份周报`,
      en: `${weeklyDates.length} weekly reports`,
    };
    sourceDigests = {};
    for (const date of weeklyDates) {
      const content = readWeeklyDigest(date);
      if (content) sourceDigests[date] = content;
    }
  } else {
    // Sample daily reports: every 4th day, max 10
    const sampled = monthDates.filter((_, i) => i % 4 === 0).slice(0, 10);
    sourceLabel = {
      zh: `${sampled.length} 份日报（每4日采样）`,
      en: `${sampled.length} daily reports (sampled every 4 days)`,
    };
    sourceDigests = {};
    for (const date of sampled) {
      const content = readDailyDigest(date);
      if (content) sourceDigests[date] = content;
    }
  }

  if (Object.keys(sourceDigests).length === 0) {
    console.log(`[monthly] No source digests found for ${monthStr}, skipping.`);
    return;
  }

  console.log(`[monthly] Source: ${sourceLabel.zh}`);

  const footer = autoGenFooter("zh");
  const enFooter = autoGenFooter("en");

  if (genZh) {
    console.log("[monthly] Calling LLM for ZH monthly report...");
    const zhSummary = await callLlm(buildMonthlyPrompt(sourceDigests, monthStr, "zh"), 8192);
    const zhContent =
      `# AI 工具生态月报 ${monthStr}\n\n` +
      `> 数据来源: ${sourceLabel.zh} | 生成时间: ${utcStr} UTC\n\n` +
      `---\n\n` +
      zhSummary +
      footer;
    console.log(`  Saved ${saveFile(zhContent, dateStr, "ai-monthly.md")}`);
    if (digestRepo) {
      const url = await createGitHubIssue(`📆 AI 工具生态月报 ${monthStr}`, zhContent, "monthly");
      console.log(`  Created monthly issue: ${url}`);
    }
  }

  if (genEn) {
    console.log("[monthly] Calling LLM for EN monthly report...");
    const enSummary = await callLlm(buildMonthlyPrompt(sourceDigests, monthStr, "en"), 8192);
    const enContent =
      `# AI Tools Ecosystem Monthly Report ${monthStr}\n\n` +
      `> Sources: ${sourceLabel.en} | Generated: ${utcStr} UTC\n\n` +
      `---\n\n` +
      enSummary +
      enFooter;
    console.log(`  Saved ${saveFile(enContent, dateStr, "ai-monthly-en.md")}`);
  }

  console.log("[monthly] Done!");
}
