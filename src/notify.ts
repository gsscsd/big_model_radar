/**
 * Telegram notification — reads manifest.json and sends a message
 * with links to the latest reports. Skips silently if secrets are not set.
 *
 * Required env vars:
 *   TELEGRAM_BOT_TOKEN  — bot token from @BotFather
 *   TELEGRAM_CHAT_ID    — channel/group/user chat ID
 * Optional:
 *   PAGES_URL           — GitHub Pages base URL; derived from repo slug when omitted
 */

import fs from "node:fs";

const BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"] ?? "";
const CHAT_ID = process.env["TELEGRAM_CHAT_ID"] ?? "";

function resolvePagesUrl(): string {
  const explicit = process.env["PAGES_URL"] ?? process.env["SITE_URL"];
  if (explicit) return explicit.replace(/\/$/, "");

  const repo = process.env["DIGEST_REPO"] ?? process.env["GITHUB_REPOSITORY"];
  if (repo) {
    const [owner, name] = repo.split("/");
    if (owner && name) return `https://${owner}.github.io/${name}`;
  }

  throw new Error("Missing PAGES_URL/SITE_URL and unable to derive from repository.");
}

const PAGES_URL = resolvePagesUrl();

const ZH_LABELS: Record<string, string> = {
  "ai-cli": "AI CLI 工具",
  "ai-agents": "AI Agents 生态",
  "ai-web": "官网动态",
  "ai-trending": "GitHub 趋势",
  "ai-hn": "HN 社区动态",
  "ai-weekly": "AI 工具生态周报",
  "ai-monthly": "AI 工具生态月报",
};

const EN_LABELS: Record<string, string> = {
  "ai-cli": "AI CLI Tools",
  "ai-agents": "AI Agents Ecosystem",
  "ai-web": "Official Updates",
  "ai-trending": "GitHub Trends",
  "ai-hn": "HN Community",
  "ai-weekly": "AI Tools Weekly",
  "ai-monthly": "AI Tools Monthly",
};

async function sendTelegram(text: string): Promise<void> {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Telegram API ${res.status}: ${body}`);
  }
}

function buildMessage(date: string, reports: string[]): string {
  const baseReports = reports.filter((r) => !r.endsWith("-en"));
  const isWeekly = baseReports.includes("ai-weekly");
  const isMonthly = baseReports.includes("ai-monthly");

  const icon = isMonthly ? "📆" : isWeekly ? "📅" : "📡";
  const suffix = isMonthly ? " 月报" : isWeekly ? " 周报" : "";
  const lines: string[] = [`${icon} <b>Big Model Radar${suffix} · ${date}</b>\n`];

  // Daily reports first, then rollups
  const ordered = [
    ...baseReports.filter((r) => !r.includes("weekly") && !r.includes("monthly")),
    ...baseReports.filter((r) => r.includes("weekly") || r.includes("monthly")),
  ];

  for (const r of ordered) {
    const zhLabel = ZH_LABELS[r] ?? r;
    const zhUrl = `${PAGES_URL}/#${date}/${r}`;
    const enKey = `${r}-en`;
    if (reports.includes(enKey)) {
      const enLabel = EN_LABELS[r] ?? "EN";
      const enUrl = `${PAGES_URL}/#${date}/${enKey}`;
      lines.push(`• <a href="${zhUrl}">${zhLabel}</a>  ·  <a href="${enUrl}">${enLabel}</a>`);
    } else {
      lines.push(`• <a href="${zhUrl}">${zhLabel}</a>`);
    }
  }

  lines.push(`\n<a href="${PAGES_URL}">🌐 Web UI</a>  ·  <a href="${PAGES_URL}/feed.xml">⊕ RSS</a>`);
  return lines.join("\n");
}

async function main(): Promise<void> {
  if (!BOT_TOKEN) {
    console.log("[notify] TELEGRAM_BOT_TOKEN not set — skipping.");
    return;
  }
  if (!CHAT_ID) {
    console.log("[notify] TELEGRAM_CHAT_ID not set — skipping.");
    return;
  }

  if (!fs.existsSync("manifest.json")) {
    console.log("[notify] manifest.json not found — skipping.");
    return;
  }

  const { dates } = JSON.parse(fs.readFileSync("manifest.json", "utf-8")) as {
    dates: { date: string; reports: string[] }[];
  };

  const latest = dates?.[0];
  if (!latest) {
    console.log("[notify] manifest is empty — skipping.");
    return;
  }
  const { date, reports } = latest;
  const text = buildMessage(date, reports);

  console.log(`[notify] Sending Telegram message for ${date} (${reports.length} reports)…`);
  await sendTelegram(text);
  console.log("[notify] Done!");
}

main().catch((e: unknown) => {
  console.error("[notify]", e instanceof Error ? e.message : e);
  process.exit(1);
});
