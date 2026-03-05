# AI CLI Tools Community Digest 2026-03-05

> Generated: 2026-03-05 00:08 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Comparison Report — 2026-03-05

## 1. Ecosystem Overview

The AI CLI tool landscape has matured into a competitive multi-polar market with seven actively developed tools, each backed by major AI labs or emerging challengers. Development velocity remains exceptionally high across the board, with rapid-fire alpha releases (OpenAI Codex), nightly builds (Gemini CLI, Qwen Code), and frequent stable patches. A defining characteristic of this phase is the **convergence on plugin/MCP ecosystems** as the primary extensibility mechanism, alongside **intense focus on Windows compatibility** as tools compete for enterprise market share. Community-driven safety infrastructure (VibeGuard-style redaction, containerized sandboxes) is emerging as a differentiating layer, often ahead of official vendor implementations.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Status |
|------|:----------:|:---------:|:------------:|:--------------|
| **Claude Code** | 50 | 11 | 2 | v2.1.68 stable |
| **OpenAI Codex** | ~15 tracked | 10+ | 8 alphas | v0.108.0-alpha.12 (intense iteration) |
| **Gemini CLI** | ~10 tracked | 10 | 3 (1 stable, 2 preview/nightly) | v0.32.1 stable + v0.33.0-preview.1 |
| **GitHub Copilot CLI** | ~10 tracked | 1 | 1 | v0.0.422-0 |
| **Kimi CLI** | 6 | 4 | 0 | v1.17.0 (no release) |
| **OpenCode** | ~15 tracked | 10 | 1 | v1.2.17 |
| **Qwen Code** | ~12 tracked | 10 | 2 (preview/nightly) | v0.11.1-preview.2, v0.12.0 imminent |

**Key Observations:** Claude Code leads in raw issue volume (50), reflecting largest user base. OpenAI Codex shows highest release cadence (8 alphas/24h) indicating pre-stable stabilization crunch. Copilot CLI's low PR velocity (1) suggests internal branch workflow or pre-release freeze. Kimi CLI shows lowest activity, potentially indicating resource constraints or strategic repositioning.

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|-------------|-------|--------------|
| **Windows-native support** | *All seven tools* | PowerShell subprocess handling (Claude Code, Kimi, OpenCode), UTF-8/BOM encoding (Qwen, Gemini), MSIX deployment (Claude Code), path format normalization (universal) |
| **MCP/Plugin ecosystem** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode | `@plugin` mentions (Codex), OAuth for MCP servers (OpenCode), Remote Agents infrastructure (Gemini), SKILL.md workflows (Claude Code) |
| **Enterprise identity & auth** | Claude Code, OpenCode, Gemini CLI | Multi-account switching (Claude Code #18435), AWS Bedrock auth (Claude Code, OpenCode), SSO/profile isolation, GitHub App auth |
| **Safety/guardrails as infrastructure** | Claude Code, Qwen Code, OpenAI Codex | VibeGuard-style PII redaction (Claude Code #30823, Qwen #2099), containerized sandboxes (Claude Code #30692, Gemini #21062), hooks with mandatory confirmation (Gemini #21146) |
| **Context/memory management** | Claude Code, OpenAI Codex, Gemini CLI | Token limit handling (Claude Code #24055), thread resumption with git context (Codex #13504), session archival/unarchive (Claude Code #30869), metrics lag (Claude Code #19669) |
| **BYOK / model flexibility** | GitHub Copilot CLI, OpenCode, Kimi CLI | Custom API keys beyond vendor-curated list (Copilot #1095), multi-API key fallback (OpenCode #16038), local model debugging (Kimi #1335, OpenCode #7030) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Kimi CLI | Qwen Code |
|-----------|:-----------:|:------------:|:----------:|:------------------:|:--------:|:--------:|:---------:|
| **Primary Target** | Enterprise teams, Max/Team subscribers | Pro/Plus consumers, automation-first | Google Cloud ecosystem, ADK developers | GitHub-centric developers, VS Code users | Power users, local model enthusiasts | Chinese market, Moonshot API users | Alibaba Cloud, Chinese developers, Qwen model users |
| **Architecture Philosophy** | Plugin-first with SKILL.md conventions | Sandboxed subagents, Rust core | ADK replatforming, Remote Agents | ACP protocol for embeddable agents | Workspace-centric, desktop + TUI + web | Minimalist, API-focused | VS Code extension primary, CLI secondary |
| **Safety Model** | Community plugin ecosystem (VibeGuard, container guards) | Official sandbox with granular permissions | Native gVisor sandboxing (opt-in) | Personal hooks, policy controls | Orphaned process cleanup, agent validation | AgentHooks infrastructure (emerging) | Client-side redaction (VibeGuard-style) |
| **Multi-agent Support** | Open Hive collision detection (passive) | Subagent delegation (cost explosion fixed) | Remote Agents Sprint 1 (P0) | `/fleet` command, auto-detect proposals | Background tasks, sub-session discovery | — | — |
| **Local Model Support** | Limited | — | — | — | **Primary differentiator** (Ollama, etc.) | Ollama (buggy) | Ollama, local Qwen |
| **Enterprise Maturity** | **Highest** — SSO, multi-account, compliance features | Moderate — metering transparency issues | **Rising** — gVisor, admin policies, ADK | Moderate — Copilot Business/Enterprise integration | Moderate — usage analytics, custom session IDs | Low — persistent config gaps | Moderate — project insights, proxy support |

---

## 5. Community Momentum & Maturity

### Highest Momentum
| Tool | Evidence | Assessment |
|------|----------|------------|
| **OpenAI Codex** | 8 alpha releases/24h, intense Rust core iteration | Pre-stable crunch; high technical risk/reward |
| **Qwen Code** | 10 PRs targeting Windows, security, VS Code UX | Aggressive platform parity push; v0.12.0 imminent |
| **OpenCode** | Critical memory leak fix (#13514) passing tests, 10 active PRs | Stability crisis → recovery narrative; strong community contribution |

### Highest Maturity
| Tool | Evidence | Assessment |
|------|----------|------------|
| **Claude Code** | 50 issues processed, enterprise feature depth (SSO, multi-account), plugin ecosystem | Market leader with scaling challenges |
| **Gemini CLI** | Stable patch releases, ADK replatforming with "zero-regression" requirement, enterprise security (gVisor) | Google's methodical enterprise play |

### At-Risk / Lagging
| Tool | Evidence | Assessment |
|------|----------|------------|
| **Kimi CLI** | 0 releases, 6 issues, Windows as "second-class platform," JetBrains integration broken | Resource-constrained; risk of marginalization |
| **GitHub Copilot CLI** | 1 PR/24h, TUI instability cluster (#239, #1834, #1829), model-specific regressions | Potential internal deprioritization vs. VS Code extension |

---

## 6. Trend Signals

| Trend | Evidence | Developer Value |
|-------|----------|---------------|
| **Windows as competitive battleground** | Universal pain across all tools; Qwen's 5+ Windows PRs, Claude Code's MSIX fixes, OpenCode's 201-comment #631 | Enterprise adoption now requires native Windows parity; WSL no longer sufficient |
| **Community safety infrastructure** | VibeGuard (Claude Code #30823), Qwen #2099, container guards — all community-contributed | Operational safety becoming portable layer across tools; reduces vendor lock-in risk |
| **MCP as de facto standard** | OAuth support (#988), `@plugin` mentions, Remote Agents — protocol convergence | Interoperability investment now protected across tool migrations |
| **Cost transparency as trust infrastructure** | Codex metering anomalies (#13186), OpenCode billing regressions (#8030, #11753) | Usage tracking becoming compliance requirement; "black box" consumption unacceptable |
| **Agent orchestration complexity** | Subagent cost explosions, collision detection, recursive intent bugs — all newly emergent | Multi-agent patterns still immature; expect 12-18 months of architectural iteration |
| **Context window as bottleneck** | 32K output limits (#24055), 116GB memory growth (#13230), truncation without signaling | Long-context workflows require explicit engineering; "unlimited context" marketing misalignment with reality |

---

*Report compiled from community digest data — 2026-03-05*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-03-05 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| Rank | Skill | Functionality | Status | Discussion Highlights |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Typographic quality control preventing orphans, widows, and numbering misalignment in AI-generated documents | 🟡 Open (Mar 4) | Addresses universal pain point affecting "every document Claude generates"; zero thumbs but high recency attention |
| 2 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** + [skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | Meta-skills for evaluating Claude Skills across 5 quality dimensions and security posture | 🟡 Open (Nov 2025–Jan 2026) | Long-running PR; addresses ecosystem need for skill validation standards |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** (improved) | Revised guidance for actionable, single-conversation frontend design instructions | 🟡 Open (Jan–Feb 2026) | Focus on "token efficiency" and executable instructions vs. educational verbosity |
| 4 | **[system-documentation](https://github.com/anthropics/skills/pull/95)** | Comprehensive evidence management system docs with flowcharts and architecture | 🟡 Open (Nov 2025) | Enterprise-grade documentation patterns; unusually thorough for a skill PR |
| 5 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | Persistent memory system for AI agents with proactive context surfacing | 🟡 Open (Dec 2025–Mar 2026) | Active development; competes with ShieldCortex (#386) in memory category |
| 6 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | Integration with SAP's open-source tabular foundation model for predictive analytics | 🟡 Open (Dec 2025–Mar 2026) | Bridges enterprise ERP data with Claude; niche but high-value use case |
| 7 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 10-step workflow for identifying orphaned code, unused files, documentation gaps | 🟡 Open (Dec 2025–Feb 2026) | Addresses technical debt at scale; produces `CODEBASE-STATUS.md` artifact |
| 8 | **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | Community health documentation to address 25% GitHub community health score | 🟡 Open (Mar 3–4) | Meta-improvement; closes [#452](https://github.com/anthropics/skills/issues/452) |

---

## 2. Community Demand Trends

From high-engagement Issues, four dominant Skill directions emerge:

| Trend | Evidence | Representative Issue |
|:---|:---|:---|
| **Agent Governance & Safety** | 3+ comments, governance patterns proposal | [#412](https://github.com/anthropics/skills/issues/412) — *agent-governance* skill for policy enforcement, threat detection, trust scoring |
| **MCP Integration & Standardization** | 4 comments, MCP server proposals | [#16](https://github.com/anthropics/skills/issues/16) — *Expose Skills as MCPs*; [#185](https://github.com/anthropics/skills/issues/185) — *Skills MCP package manager* |
| **Persistent Memory Systems** | Multiple competing PRs | [#154](https://github.com/anthropics/skills/pull/154) *shodh-memory* vs. [#386](https://github.com/anthropics/skills/pull/386) *ShieldCortex* |
| **Enterprise Platform Bridges** | SAP, Google Workspace, Telegram integrations | [#181](https://github.com/anthropics/skills/pull/181) SAP; [#299](https://github.com/anthropics/skills/pull/299) Google Workspace; [#419](https://github.com/anthropics/skills/pull/419) Telegram |

---

## 3. High-Potential Pending Skills

Active PRs with sustained attention likely to merge:

| Skill | PR | Why It May Land Soon |
|:---|:---|:---|
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Low-risk docs PR; closes explicit community health gap |
| **ODT document generation** | [#486](https://github.com/anthropics/skills/pull/486) | Fills format gap (OpenDocument); uses dedicated `odf-kit` library |
| **Google Workspace integration** | [#299](https://github.com/anthropics/skills/pull/299) | 6-skill suite (email, calendar, tasks); high utility, complete implementation |
| **Masonry image/video generation** | [#335](https://github.com/anthropics/skills/pull/335) | Imagen 3.0 + Veo 3.1 integration; media generation is high-demand |
| **Buildr Telegram bridge** | [#419](https://github.com/anthropics/skills/pull/419) | Mobile control surface for Claude Code; one-command setup |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *infrastructure-grade Skills*—persistent memory, governance frameworks, and standardized interfaces (MCP)—that transform Claude from a conversation tool into a reliable, stateful autonomous agent system.**

---

*Report generated from 50 PRs and 50 Issues in anthropics/skills. All links verified as of 2026-03-05.*

---

# Claude Code Community Digest — 2026-03-05

---

## 1. Today's Highlights

Anthropic shipped **v2.1.68** with a significant Opus 4.6 behavior change: medium effort is now the default for Max and Team subscribers, with "ultrathink" reintroduced as an explicit keyword for high-effort mode. The community is actively stress-testing this release, with 11 fresh PRs submitted in 24 hours—many focused on plugin ecosystem expansion and developer tooling improvements. Windows enterprise environments remain a friction point, with multiple active issues around MSIX deployment, path handling, and directory permissions.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v2.1.68** | 2026-03-04 | Opus 4.6 defaults to **medium effort** for Max/Team plans; balance of speed vs. thoroughness. `/model` command allows override. "ultrathink" keyword restored for explicit high-effort mode. |
| v2.1.66 | 2026-03-03 | *(No detailed changelog provided)* |

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|--------------|-------------------|
| [#24055](https://github.com/anthropics/claude-code/issues/24055) — API Error: 32K output token exceeded | **Critical production blocker**; long-context workflows failing hard at the API boundary | 99 comments, 72 👍; users demanding streaming truncation or configurable limits |
| [#18435](https://github.com/anthropics/claude-code/issues/18435) — Multi-account profile switching | **Top feature request**; consultants and agencies juggling client workspaces | 106 👍, 14 comments; strong enterprise demand signal |
| [#16128](https://github.com/anthropics/claude-code/issues/16128) — AWS Bedrock auth for Chrome extension | **Enterprise security requirement**; orgs blocking direct API key usage | 78 👍, 16 comments; compliance-driven urgency |
| [#29583](https://github.com/anthropics/claude-code/issues/29583) — Cowork: folders outside home directory on Windows | **Windows power user blocker**; secondary drives common in dev environments | 15 comments; immediate workaround needed |
| [#17688](https://github.com/anthropics/claude-code/issues/17688) — Skill-scoped hooks not triggered in plugins | **Plugin architecture gap**; breaks extensibility promises for SKILL.md workflows | 18 👍, 14 comments; plugin developers frustrated |
| [#30795](https://github.com/anthropics/claude-code/issues/30795) — v2.1.68 sends effort parameter with custom models | **Regression in latest release**; breaks Bedrock/custom provider integrations | Fresh report, 4 comments; needs rapid triage |
| [#30524](https://github.com/anthropics/claude-code/issues/30524) — Unnecessary `cd` prepended on Windows Git Bash | **Daily friction**; command pollution degrades shell experience | 6 👍, 3 comments; Windows users vocal |
| [#30866](https://github.com/anthropics/claude-code/issues/30866) — Opus 4.6 ignores filtering, updates wrong user password | **Safety/concern**; model misalignment on clear filtering instructions | 2 comments; emerging pattern worth monitoring |
| [#30848](https://github.com/anthropics/claude-code/issues/30848) — v2.1.68 opens 3 blank VS Code windows | **Regression**; IDE integration degraded in latest release | Fresh report, 2 comments; VS Code extension users affected |
| [#25055](https://github.com/anthropics/claude-code/issues/25055) — MSIX installs for elevating admin, not standard user *(closed)* | **Enterprise deployment resolved**; split-account Windows environments now handled | 20 comments, closed—positive resolution signal |

---

## 4. Key PR Progress

| PR | Contribution | Status |
|----|-------------|--------|
| [#30823](https://github.com/anthropics/claude-code/pull/30823) — **VibeGuard prompt guard plugin** | Community plugin for PII/secrets detection with placeholder redaction (`__VG_<CATEGORY>_<hash>__`); resubmitted after [#30299](https://github.com/anthropics/claude-code/pull/30299) closure | Open |
| [#30692](https://github.com/anthropics/claude-code/pull/30692) — Container isolation example with guard hook | Complete Podman/Docker setup replacing built-in sandbox; includes `guard-destructive-git` hook for force push/reset protection | Open |
| [#30721](https://github.com/anthropics/claude-code/pull/30721) — `tmp-cleanup` plugin | Fixes [#8856](https://github.com/anthropics/claude-code/issues/8856): cleans orphaned `/tmp/claude-*-cwd` files accumulating from Bash invocations | Open |
| [#30604](https://github.com/anthropics/claude-code/pull/30604) — **Open Hive multi-agent collision detection** | Passive overlap detection for teams/Agent Teams; 6 silent background hooks, no workflow changes required | Open |
| [#30636](https://github.com/anthropics/claude-code/pull/30636) — Update 25+ stale documentation URLs | Bulk migration to canonical domains (`code.claude.com`, `platform.claude.com`) | Open |
| [#30626](https://github.com/anthropics/claude-code/pull/30626) — `ralph-wiggum` stop hook fixes | Ports bug fixes from official `ralph-loop`: scans last 100 assistant lines, uses `jq -rs` slurp mode | Open |
| [#30596](https://github.com/anthropics/claude-code/pull/30596) — **CLAUDE.md documentation** | Comprehensive AI assistant guide: repo structure, plugin architecture, conventions, workflows | Open |
| [#30650](https://github.com/anthropics/claude-code/pull/30650) — Windows installation README updates | Adds PowerShell + CMD dual-path instructions | Open |
| [#30589](https://github.com/anthropics/claude-code/pull/30589) — `ralph-wiggum` stdin block fix *(closed)* | Prevents stop hook timeout when no loop active; `cat` blocking on EOF resolved | Closed |
| [#1](https://github.com/anthropics/claude-code/pull/1) — SECURITY.md *(closed)* | Baseline security policy addition | Closed |

---

## 5. Feature Request Trends

| Theme | Evidence | Implication |
|-------|----------|-------------|
| **Enterprise identity & auth** | [#18435](https://github.com/anthropics/claude-code/issues/18435) (multi-account), [#16128](https://github.com/anthropics/claude-code/issues/16128) (Bedrock), [#30872](https://github.com/anthropics/claude-code/issues/30872) (GitHub app auth) | SSO, profile isolation, and cloud-provider auth are becoming table stakes for org adoption |
| **Cowork/remote environment maturity** | [#29583](https://github.com/anthropics/claude-code/issues/29583), [#30875](https://github.com/anthropics/claude-code/issues/30875), [#30864](https://github.com/anthropics/claude-code/issues/30864) (ARM), [#30112](https://github.com/anthropics/claude-code/issues/30112) (egress allowlist) | Containerized/remote dev is scaling; needs cross-platform parity and network policy flexibility |
| **Safety & guardrails as plugins** | [#30823](https://github.com/anthropics/claude-code/pull/30823) (VibeGuard), [#30692](https://github.com/anthropics/claude-code/pull/30692) (container guard), [#30604](https://github.com/anthropics/claude-code/pull/30604) (collision detection) | Community building operational safety layer; official plugin API surface critical |
| **Context & memory management** | [#19669](https://github.com/anthropics/claude-code/issues/19669) (metrics lag), [#24055](https://github.com/anthropics/claude-code/issues/24055) (token limits), [#30869](https://github.com/anthropics/claude-code/issues/30869) (unarchive sessions) | Long-running workflows need better observability and lifecycle control |

---

## 6. Developer Pain Points

| Category | Specific Frustrations | Frequency Signal |
|----------|----------------------|------------------|
| **Windows as second-class citizen** | MSIX elevation wrong user, path format mismatches, `cd` pollution, secondary drive access, Unicode corruption in `/copy` | 8+ active issues; highest platform-specific volume |
| **Plugin/hook system brittleness** | Skill-scoped hooks fail in plugins, stop hook timeouts, permission matcher chokes on markdown, HTTP hooks with JSON broken | Core extensibility promises not fully realized |
| **Model behavior unpredictability** | Output token hard limits, effort parameter leakage to custom models, filtering instructions ignored, hallucinated placeholders ("Bhatt") | Trust erosion in production automation |
| **IDE integration regressions** | VS Code "Thinking" hangs, blank window spam on startup, destructive actions beyond scope | v2.1.68 quality concerns emerging |
| **Operational hygiene gaps** | `/tmp` file accumulation, session archival opacity, context window metrics staleness | Death by a thousand cuts for power users |

---

*Digest compiled from github.com/anthropics/claude-code — 50 issues, 11 PRs, 2 releases in 24h tracking window.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-05

---

## 1. Today's Highlights

The Codex team shipped **8 Rust alpha releases (v0.108.0-alpha.6 through alpha.12)** in 24 hours, indicating intense iteration on the core runtime. Community attention remains fixated on **rate-limiting anomalies** and **subagent cost explosions**, with multiple high-engagement issues closed but residual concerns persisting. The PR pipeline shows heavy investment in **sandbox security hardening**, **plugin ecosystem infrastructure**, and **TUI/IDE reliability improvements**.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| `rust-v0.108.0-alpha.6` → `alpha.12` | Rapid-fire alpha iteration on Rust core; no detailed changelogs provided. Suggests active stabilization work ahead of a broader release. |
| `artifact-runtime-v2.3.4` | Patch release for artifact runtime component. |

---

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|--------------|------------------|
| [#13186](https://github.com/openai/codex/issues/13186) | Possible Codex usage metering anomaly on Plus | **CLOSED** | Plus users reported tiny tasks consuming 5h+ weekly quota—critical trust issue for paid tiers. | 78 comments, 10 👍; resolved but sparked broader metering scrutiny |
| [#11013](https://github.com/openai/codex/issues/11013) | Model changes to Medium uninstructed | **CLOSED** | Silent model downgrades broke user workflows without consent. | 27 comments; fix confirmed but pattern of unannounced changes concerns users |
| [#3064](https://github.com/openai/codex/issues/3064) | Configuration for inherited environment variables | **CLOSED** | Long-standing sandbox limitation blocked real-world CLI tool usage. | 21 comments, 28 👍; community-validated fix |
| [#2020](https://github.com/openai/codex/issues/2020) | Support for light-background terminals | **OPEN** | Accessibility and usability gap affecting ~10% of terminal users. | 15 comments, 39 👍; oldest active enhancement with strong support |
| [#12161](https://github.com/openai/codex/issues/12161) | Codex IDE keeps getting stuck on "Thinking" | **OPEN** | Windows/WSL IDE extension reliability blocker for business users. | 15 comments, 5 👍; reproducibility challenges noted |
| [#13179](https://github.com/openai/codex/issues/13179) | Subagents exponentially explode "messages" usage | **CLOSED** | Architectural cost bug: subagent delegation multiplied token consumption. | 13 comments; fix shipped but monitoring continues |
| [#13476](https://github.com/openai/codex/issues/13476) | Excessive approval prompts after Playwright MCP changes | **OPEN** | Regression in sandbox UX—MCP workflows now friction-heavy. | 4 comments, 1 👍; flagged as priority regression |
| [#13488](https://github.com/openai/codex/issues/13488) | Codex app doesn't open in WSL with bash | **OPEN** | Windows cross-platform compatibility gap for Pro users. | 4 comments, 11 👍; WSL support remains uneven |
| [#13511](https://github.com/openai/codex/issues/13511) | Codex deleted my entire Drive | **CLOSED** | Severe sandbox escape/data loss report—research context misinterpreted as deletion scope. | 2 comments; closed rapidly, underscores need for safety guardrails |
| [#13491](https://github.com/openai/codex/issues/13491) | Forked Worker inherits parent user intent as direct instruction | **OPEN** | Recursive delegation bug causing subagent confusion. | 3 comments; subtle architecture issue with agent hierarchy |

---

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#13513](https://github.com/openai/codex/pull/13513) | Log service tier resume mismatches | Adds observability for thread resumption across subscription tiers—addresses metering fairness concerns |
| [#13096](https://github.com/openai/codex/pull/13096) | Introduce rollout store and in-memory source | Refactors rollout reconstruction with proper abstraction; enables better debugging and replay |
| [#13446](https://github.com/openai/codex/pull/13446) | Show speed in session header | TUI UX improvement: exposes Fast/Standard speed tier visibly to users |
| [#13482](https://github.com/openai/codex/pull/13482) | Persist initialized js_repl bindings after failed cells | REPL reliability: preserves state across cell failures, reducing re-initialization friction |
| [#13504](https://github.com/openai/codex/pull/13504) | Preserve persisted thread git info in resume | Fixes branch mismatch bugs in thread resumption—critical for long-running workflows |
| [#13425](https://github.com/openai/codex/pull/13425) | Support MCP elicitations in v2 API | First-class MCP server negotiation for v2 protocol—unblocks richer tool integrations |
| [#13510](https://github.com/openai/codex/pull/13510) | Add @plugin mentions | Plugin ecosystem milestone: `@plugin` syntax to inject MCP/app context (conflicts with file mentions being resolved) |
| [#13499](https://github.com/openai/codex/pull/13499) | Support network and macOS additional permissions | Sandbox expansion: granular network + macOS entitlement requests for restricted commands |
| [#13507](https://github.com/openai/codex/pull/13507) | Harden js_repl emitImage to accept only data: URLs | Security hardening: prevents external URL exfiltration via image generation |
| [#12276](https://github.com/openai/codex/pull/12276) | Preserve managed network constraint semantics | Fixes permission merging logic—managed allowlists now properly constrain user overrides |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Light theme / accessibility** | [#2020](https://github.com/openai/codex/issues/2020) (39 👍) | High; long-neglected UI debt |
| **Message editing & conversation control** | [#11086](https://github.com/openai/codex/issues/11086) (16 👍) | Strong; parity with Cursor expected |
| **Automation template persistence** | [#10739](https://github.com/openai/codex/issues/10739) (20 👍) | Moderate; App-specific workflow need |
| **Windows-native App support** | [#10794](https://github.com/openai/codex/issues/10794) (9 👍), multiple WSL issues | Moderate; platform parity gap |
| **Parallel solution exploration ("multiverse")** | [#13509](https://github.com/openai/codex/issues/13509) | Early; experimental proposal for risk mitigation |
| **Plugin marketplace & @-mentions** | [#13433](https://github.com/openai/codex/pull/13433), [#13510](https://github.com/openai/codex/pull/13510) | Active development; ecosystem expansion |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **Rate limit & cost transparency** | Metering anomalies, quota drain confusion, subagent cost explosions | **Critical** — 4+ issues in 24h, 100+ combined comments |
| **Windows/WSL reliability** | IDE hangs, app launch failures, streaming stalls, path handling | **High** — persistent platform gap vs. macOS/Linux |
| **Sandbox UX friction** | Excessive approval prompts, environment variable inheritance, permission negotiation | **High** — regression in MCP workflows specifically |
| **Thread resumption & state management** | Git context loss, stuck threads, stream disconnections | **Moderate-High** — affecting long-running automation |
| **TUI/IDE visual accessibility** | Light theme absence, collapsed thinking processes, color contrast | **Moderate** — accessibility blocker for subset of users |
| **Agent delegation safety** | Recursive intent misinterpretation, over-deletion risks | **Emerging** — architectural concerns in multi-agent modes |

---

*Digest compiled from github.com/openai/codex activity 2026-03-04 to 2026-03-05.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-03-05

## Today's Highlights

The Gemini CLI team shipped three releases in 24 hours including a stable patch (v0.32.1) and preview builds, while simultaneously advancing major architectural initiatives: a staged replatform onto the Agent Development Kit (ADK) and expanded Remote Agents infrastructure. Community-contributed fixes for Windows PowerShell UTF-8 handling and configurable file search limits address long-standing cross-platform pain points.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.34.0-nightly.20260304.28af4e127](https://github.com/google-gemini/gemini-cli/releases/tag/v0.34.0-nightly.20260304.28af4e127) | Nightly | Version bump infrastructure; fix for ACP diff full paths |
| [v0.33.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.0-preview.1) | Preview | Cherry-picked patch for release branch stabilization |
| [v0.32.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.32.1) | Stable Patch | Critical fix cherry-picked to v0.32.0 branch |

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|--------------|----------------|
| [#20716](https://github.com/google-gemini/gemini-cli/issues/20716) — Fix truncation of plans in approval dialog | Core UX blocker: 15-line hard limit hides critical plan details, forcing users to approve blindly | 8 comments, maintainer-tagged for triage |
| [#20142](https://github.com/google-gemini/gemini-cli/issues/20142) — AskUser lacks ctrl+r history search | Power-user workflow friction; repetitive typing in interactive sessions | 8 comments, "help wanted" label |
| [#20995](https://github.com/google-gemini/gemini-cli/issues/20995) — Replat on ADK (Agent Development Kit) | Strategic architecture shift enabling better agent interoperability; zero-regression requirement signals maturity concerns | 3 comments, maintainer-only |
| [#20302](https://github.com/google-gemini/gemini-cli/issues/20302) — Remote Agents Sprint 1 (P0) | Foundation for distributed agent execution; streaming infrastructure critical for enterprise adoption | 3 comments, rollup-tracked |
| [#15732](https://github.com/google-gemini/gemini-cli/issues/15732) — Hooks: support 'decision: ask' | Security/controls gap: sensitive operations bypass confirmation in YOLO mode | 3 comments, long-running request |
| [#18953](https://github.com/google-gemini/gemini-cli/issues/18953) — Slow shell command execution with "magic" UX | Performance regression: 100x slowdown on progress-indicator commands vs. raw CLI | 3 comments, affects Dart ecosystem users |
| [#20550](https://github.com/google-gemini/gemini-cli/issues/20550) — Ran out of JS heap | Stability issue in long sessions; GC logs indicate memory pressure at ~4GB | 2 comments, needs reproduction |
| [#19519](https://github.com/google-gemini/gemini-cli/issues/19519) — Long commands trigger false loop detection | UX papercut: legitimate heavy operations (large grep) interrupted by safety heuristics | 2 upvotes, 1 comment |
| [#21185](https://github.com/google-gemini/gemini-cli/issues/21185) — Global privacy setting for Code Assist | Governance gap: per-project privacy toggles don't scale for enterprise compliance | New (0 comments), security-tagged |
| [#17480](https://github.com/google-gemini/gemini-cli/issues/17480) — Misleading privacy notice in VS Code extension | Trust erosion: UI claims don't match actual data handling; regulatory risk | 4 comments, cross-platform concern |

---

## Key PR Progress

| PR | Feature/Fix | Technical Significance |
|----|-------------|------------------------|
| [#21179](https://github.com/google-gemini/gemini-cli/pull/21179) — Windows PowerShell UTF-8 configuration | Fixes encoding bugs breaking output parsing on Windows; community-contributed | Cross-platform reliability |
| [#20738](https://github.com/google-gemini/gemini-cli/pull/20738) — Configurable `maxFileCount` with truncation warnings | Exposes hidden 20K file limit; prevents silent data loss in large repos | Developer transparency |
| [#21062](https://github.com/google-gemini/gemini-cli/pull/21062) — Native gVisor (`runsc`) sandboxing | Enterprise security: user-space kernel isolation for Linux deployments; opt-in by design | Defense in depth |
| [#21146](https://github.com/google-gemini/gemini-cli/pull/21146) — Hooks 'ask' decision support | Enables mandatory confirmation for sensitive tools regardless of mode; fixes double-firing bugs | Policy enforcement |
| [#21037](https://github.com/google-gemini/gemini-cli/pull/21037) — Unconstrained height for plan dialogs | Direct fix for #20716; removes 15-line truncation via `unconstrainedHeight` prop | UX completion |
| [#21123](https://github.com/google-gemini/gemini-cli/pull/21123) — Fix unhandled AbortError in stream loop | Stability: prevents crashes during stream cancellation; proper signal handling | Reliability |
| [#20895](https://github.com/google-gemini/gemini-cli/pull/20895) — Extract shared OAuth primitives | Refactor enabling MCP + A2A auth reuse; reduces technical debt for Remote Agents | Architecture |
| [#21147](https://github.com/google-gemini/gemini-cli/pull/21147) — Truncate long grep lines | Fixes "too long message" errors on minified/base64 content; preserves search utility | Robustness |
| [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) — Voice input with pluggable backend | Zero-install Gemini transcription + optional Whisper; accessibility expansion | Input modality |
| [#21119](https://github.com/google-gemini/gemini-cli/pull/21119) — Browser Agent privacy consent | First-run disclosure + data collection flags; compliance preparation | Privacy by design |

---

## Feature Request Trends

1. **Agent Orchestration & Distribution** — Remote Agents (3 tracked epics), subagent GA enablement, and ADK replatforming dominate the roadmap. Community interest centers on multi-agent delegation and background task execution.

2. **Interactive UX Refinements** — Persistent requests for: external editor integration (#20181), shell history search (#20142), reduced flickering (#20217), and plan/dialog visibility improvements (#20716, #21037).

3. **Security & Policy Controls** — Hooks with mandatory confirmation (#15732, #21146), admin policy flags (#20360), and global privacy settings (#21185) indicate enterprise governance requirements maturing.

4. **Cross-Platform Hardening** — Windows encoding (#21179), macOS Terminal.app rendering (#20924, #21175), and memory management (#20550) show platform parity remains active work.

---

## Developer Pain Points

| Theme | Manifestation | Frequency |
|-------|-------------|-----------|
| **Silent truncation & hidden limits** | File search caps, plan dialog clipping, grep line length — all fail without clear signaling | High (4+ issues) |
| **Interactive session friction** | No history search, no external editor for long inputs, flickering on input | High (3+ issues) |
| **Performance cliff on "rich" commands** | Shell magic/progress indicators cause 100x slowdowns; loop detection false positives | Medium (2 issues) |
| **Memory instability** | JS heap exhaustion in long sessions; no clear mitigation path | Emerging (1 issue, high severity) |
| **Privacy control granularity** | Per-project toggles don't scale; VS Code extension claims mismatch actual behavior | Medium (2 issues) |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-03-05

---

## 1. Today's Highlights

Today's release (v0.0.422-0) introduces **personal hooks** and **automatic plugin installation**, signaling GitHub's push toward a more customizable and extensible CLI experience. Meanwhile, the community is actively wrestling with **rendering and UI stability issues**—screen flickering, color breakage, and terminal resizing glitches dominate the top issues, suggesting the TUI layer needs urgent attention. The ACP (Agent Communication Protocol) mode continues maturing with session persistence requests, while custom slash commands and MCP configuration flexibility remain highly demanded.

---

## 2. Releases

### v0.0.422-0 (2026-03-04)

| Change | Impact |
|--------|--------|
| **Personal hooks from `~/.copilot/hooks`** | Users can now maintain personal automation across all repositories, not just repo-level `.github/hooks` |
| **`enabledPlugins` in config** | Automatic plugin installation at startup reduces friction for team standardization |
| **Session usage metrics to `events.jsonl`** | Enables external analytics, cost tracking, and compliance auditing |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#239](https://github.com/github/copilot-cli/issues/239) | **Screen flickering/scroll reset on long conversations** | Breaks usability for serious workflows; 33 comments show deep community pain | 🔥 59 👍, 33 comments |
| [#618](https://github.com/github/copilot-cli/issues/618) | **Custom slash commands from `.github/prompts`** | Parity with VS Code extension; critical for team workflows and prompt engineering | 🔥 88 👍, 20 comments |
| [#1161](https://github.com/github/copilot-cli/issues/1161) | **Invalid session ID with Claude Opus 4.5** | Blocking bug causing user churn (reporter switched to OpenCode.ai) | 18 comments, 13 👍 |
| [#288](https://github.com/github/copilot-cli/issues/288) | **Repo/folder-specific MCP configs** | Essential for polyglot teams needing different toolsets per project | 7 comments, 5 👍 |
| [#1739](https://github.com/github/copilot-cli/issues/1739) | **Codex 5.3 server errors** | Model-specific regression affecting latest OpenAI integration | 6 comments, 4 👍 |
| [#853](https://github.com/github/copilot-cli/issues/853) | **`Ctrl+L` clears conversation history** | Violates Unix terminal conventions; destructive UX | 5 comments |
| [#936](https://github.com/github/copilot-cli/issues/936) | **ACP mode: support `session/load`** | Required for IDE integrations and persistent agent workflows | 4 comments, 9 👍 |
| [#989](https://github.com/github/copilot-cli/issues/989) | **ACP tool IDs incorrect in permission requests** | Protocol compliance bug breaking client implementations | 4 comments |
| [#1834](https://github.com/github/copilot-cli/issues/1834) | **Colors broken for Thinking/Tables (v0.0.421)** | Fresh regression making UI unreadable | 1 comment, reported today |
| [#1829](https://github.com/github/copilot-cli/issues/1829) | **v0.0.421 hangs on permission prompts** | Critical freeze requiring terminal kill | 1 comment, reported today |

---

## 4. Key PR Progress

Only **1 PR** updated in the last 24h:

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1350](https://github.com/github/copilot-cli/pull/1350) | **Java and Python LSP configuration examples** | Expands README beyond TypeScript to cover jdtls (Java) and pylsp (Python)—addresses the two most popular languages on GitHub | ✅ **Merged** |

*Note: Low PR velocity suggests either pre-release code freeze or internal development branch workflow.*

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Configuration hierarchy** | [#288](https://github.com/github/copilot-cli/issues/288) (MCP configs), [#618](https://github.com/github/copilot-cli/issues/618) (prompts), personal hooks in release | Users want global → repo → session scoped customization |
| **BYOK (Bring Your Own Key)** | [#1095](https://github.com/github/copilot-cli/issues/1095) | Enterprise/power users want model flexibility beyond Copilot's curated list |
| **Fleet/parallel execution UX** | [#1833](https://github.com/github/copilot-cli/issues/1833) (auto-detect), existing `/fleet` command | Making multi-agent workflows discoverable, not power-user-only |
| **Enterprise policy controls** | [#1671](https://github.com/github/copilot-cli/issues/1671) (disable autopilot), usage transparency [#1677](https://github.com/github/copilot-cli/issues/1677), [#1653](https://github.com/github/copilot-cli/issues/1653) | Governance and cost management for organizations |
| **ACP protocol completeness** | [#936](https://github.com/github/copilot-cli/issues/936), [#989](https://github.com/github/copilot-cli/issues/989) | Positioning as embeddable agent runtime, not just CLI |

---

## 6. Developer Pain Points

| Category | Symptoms | Frequency |
|----------|----------|-----------|
| **TUI/Rendering instability** | Flickering [#239](https://github.com/github/copilot-cli/issues/239), color breakage [#1834](https://github.com/github/copilot-cli/issues/1834), resize duplication [#1804](https://github.com/github/copilot-cli/issues/1804), scroll issues [#1712](https://github.com/github/copilot-cli/issues/1712) | **Critical** — 5+ related issues, highest engagement |
| **Permission/flow hangs** | [#1829](https://github.com/github/copilot-cli/issues/1829) (freeze), [#1835](https://github.com/github/copilot-cli/issues/1835) (permission persistence), [#1832](https://github.com/github/copilot-cli/issues/1832) (planning restriction) | Rising — new in 0.0.421 |
| **Model-specific regressions** | [#1161](https://github.com/github/copilot-cli/issues/1161) (Claude Opus), [#1739](https://github.com/github/copilot-cli/issues/1739) (Codex 5.3), [#1830](https://github.com/github/copilot-cli/issues/1830) (claude-opus-4.6 assertion) | Moderate — multi-model support complexity |
| **macOS security friction** | [#970](https://github.com/github/copilot-cli/issues/970) (Gatekeeper) | Ongoing — Homebrew distribution signing |
| **Transparency gaps** | Usage/budget visibility [#1677](https://github.com/github/copilot-cli/issues/1677), [#1653](https://github.com/github/copilot-cli/issues/1653) | Persistent — cost anxiety |

---

*Digest compiled from github.com/github/copilot-cli activity on 2026-03-05.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-03-05

## 1. Today's Highlights

The community is actively addressing Windows compatibility gaps, with PowerShell subprocess handling and IDE integration emerging as critical friction points. A visual UX improvement for context monitoring is gaining traction, while documentation requests signal growing adoption in third-party agent workflows.

---

## 2. Releases

**No releases in the last 24 hours.**  
Current stable: `v1.17.0`

---

## 3. Hot Issues

| # | Issue | Why It Matters | Status |
|---|-------|--------------|--------|
| [#1341](https://github.com/MoonshotAI/kimi-cli/issues/1341) | Windows PowerShell subprocess handling bug | **Critical platform gap** — Windows developers cannot execute shell commands reliably, blocking core CLI functionality on a major OS | 🔴 Open, 1 comment |
| [#1334](https://github.com/MoonshotAI/kimi-cli/issues/1334) | JetBrains IDE integration failure | **Enterprise adoption blocker** — JetBrains IDEs dominate professional Java/Kotlin/Go development; broken integration excludes large developer segments | 🔴 Open |
| [#1339](https://github.com/MoonshotAI/kimi-cli/issues/1339) | `@` file mention exposes `.git/objects/` | **Security/UX issue** — Internal Git objects polluting file picker suggests fuzzy matching logic needs `.gitignore` respect | 🔴 Open |
| [#1340](https://github.com/MoonshotAI/kimi-cli/issues/1340) | Web UI codeblock copy non-functional | **UX regression** — Basic clipboard operations failing across Linux and Android Termux indicates cross-platform terminal emulation gaps | 🔴 Open |
| [#1210](https://github.com/MoonshotAI/kimi-cli/issues/1210) | Documentation: third-party Coding Agent usage | **Ecosystem expansion** — Request for Claude Code-style integration guides with persistent config (vs. `export` variables) | 🔴 Open, bilingual |
| [#1335](https://github.com/MoonshotAI/kimi-cli/issues/1335) | Ollama local deployment: empty API response | **Self-hosting friction** — Closed without resolution; indicates local LLM provider path needs clearer debugging tooling | 🟢 Closed |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1131](https://github.com/MoonshotAI/kimi-cli/pull/1131) | **AgentHooks support for dogfooding** | Infrastructure for pre/post-action hooks including `block-dangerous-commands` and `enforce-tests` — enables enterprise policy enforcement | 🟡 Open (since Feb 13) |
| [#1337](https://github.com/MoonshotAI/kimi-cli/pull/1337) | **Visual context usage progress bar** | Replaces `context: 60.0% (15.7k/262k)` with `██████░░░░ 60%` — improves cognitive load for context window monitoring | 🟡 Open |
| [#1336](https://github.com/MoonshotAI/kimi-cli/pull/1336) | **Anthropic metadata: session user_id** | Privacy/observability improvement for Anthropic API calls; enables usage tracking per session | 🟢 Closed |
| [#1333](https://github.com/MoonshotAI/kimi-cli/pull/1333) | **Typo fix: SECURITY.md grammar** | `published to public` → `published publicly` — minor docs quality | 🟡 Open |

---

## 5. Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Third-party agent interoperability** | #1210 (Claude Code integration), Ollama attempts (#1335) | Users want Kimi as a backend for existing agent workflows, not a siloed tool |
| **Visual/terminal UX polish** | #1337 (progress bar), #1340 (copy functionality) | CLI users expect modern TUI affordances comparable to GitHub Copilot CLI |
| **Configuration ergonomics** | #1210 (persistent config vs. `export`) | Environment-variable-only setup creates friction for multi-project workflows |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Tracking |
|------------|-----------|----------|----------|
| **Windows as second-class platform** | 2/6 issues (#1341, #1339) | 🔴 High | PowerShell subprocess, file picker behavior diverge from *nix |
| **IDE integration fragility** | 1/6 explicit, likely underreported | 🔴 High | JetBrains broken (#1334); VS Code status unknown |
| **Local/self-hosted LLM debugging** | 1/6 closed unresolved | 🟡 Medium | Ollama errors lack actionable diagnostics |
| **Documentation gaps for advanced use** | 1/6 explicit | 🟡 Medium | Third-party agent patterns need canonical examples |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli — 6 issues, 4 PRs, 0 releases in 24h window.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-05

## Today's Highlights

OpenCode v1.2.17 shipped with critical TUI stability fixes including orphaned process cleanup and scrollbar visibility improvements. The community is actively tackling a severe memory leak causing OOM kills on Linux systems, with a promising fix PR now passing tests. Windows support remains the most-discussed long-standing issue with 201 comments, while Copilot integration problems around premium request billing are generating significant user concern.

---

## Releases

### v1.2.17
| Component | Changes |
|-----------|---------|
| **Core** | Reworked workspace integration and adaptor interface; clarified bash tool output capture documentation |
| **TUI** | Scrollbar now shown by default; fixed orphaned subprocess cleanup on shutdown; added agent validation for `--attach` flag (thanks @alberti42) |
| **Desktop** | Removed blur effect from UI elements |

---

## Hot Issues

| # | Title | Status | 👍 | Why It Matters |
|---|-------|--------|-----|---------------|
| [#631](https://github.com/anomalyco/opencode/issues/631) | Windows Support | 🔴 OPEN | 117 | **Longest-running platform gap** — 201 comments across 8 months tracking Windows-specific failures. Blocks enterprise adoption; community fragmented between WSL workarounds and native fixes. |
| [#8030](https://github.com/anomalyco/opencode/issues/8030) | Copilot auth sets too many requests as "user" | 🔴 OPEN | 51 | **Billing regression** — agent-initiated requests incorrectly consuming premium quota. Users reporting 60+ misclassified requests burning monthly limits in single sessions. |
| [#988](https://github.com/anomalyco/opencode/issues/988) | MCP remote using OAuth | 🟢 CLOSED | 77 | **Security win** — OAuth 2.1 flow eliminates secret management for MCP servers. Merged; enables GitHub MCP and similar integrations without config file secrets. |
| [#13230](https://github.com/anomalyco/opencode/issues/13230) | Memory leak causes kernel soft lockups, OOM kills | 🔴 OPEN | 11 | **Critical stability** — 116GB virtual / 21GB RSS growth on 20GB RAM machines. "Catastrophic, unrecoverable system failures" — urgent for long-running sessions. |
| [#3176](https://github.com/anomalyco/opencode/issues/3176) | Why is OpenCode massively abusing git? | 🔴 OPEN | 5 | **Performance anti-pattern** — `git add .` on 45GB directories with 54K files. Session snapshot logic fundamentally misaligned with large repos. |
| [#7030](https://github.com/anomalyco/opencode/issues/7030) | Ollama tool calls show executed but no files modified | 🔴 OPEN | 12 | **Local model breakage** — `qwen2.5-coder` JSON payloads print but disk I/O fails. Affects `/init` and file operations; blocks local-first workflows. |
| [#11753](https://github.com/anomalyco/opencode/issues/11753) | Copilot consuming multiple premium requests per session | 🔴 OPEN | 7 | **Billing transparency** — main agent re-entry after background tasks counts as new premium request. Compound issue with #8030 eroding trust in usage tracking. |
| [#11210](https://github.com/anomalyco/opencode/issues/11210) | Kimi K2 via AWS Bedrock stops execution | 🔴 OPEN | 7 | **Provider integration** — empty content field error in plan mode. Blocks Bedrock users from using Moonshot's reasoning model. |
| [#16026](https://github.com/anomalyco/opencode/issues/16026) | CREATE TABLE migration silently recorded but not executed | 🟢 CLOSED | 0 | **Upgrade hazard** — dev fork timestamps colliding with production DB. Root cause identified: workspace migration version mismatch between branches. |
| [#14694](https://github.com/anomalyco/opencode/issues/14694) | Interrupt not working (Windows) | 🔴 OPEN | 0 | **Control plane failure** — ESC key fails to terminate inference on Windows. Basic UX broken; forces session restarts. |

---

## Key PR Progress

| # | Title | Author | Status | Impact |
|---|-------|--------|--------|--------|
| [#13514](https://github.com/anomalyco/opencode/pull/13514) | Resolve multiple memory leaks causing unbounded RAM growth | @sebishogun | 🟡 OPEN | **Critical fix** — unsubscribes bus listeners, actually clears tool outputs during compaction, adds FileTime dispose. Now passing tests including Windows. |
| [#16069](https://github.com/anomalyco/opencode/pull/16069) | Prefer PowerShell defaults for shell tools (Windows) | @Hona | 🟡 OPEN | **Windows UX** — `pwsh` → `powershell` → Git Bash → `cmd.exe` priority when `SHELL` unset. Addresses #4683 shell setup pain. |
| [#16068](https://github.com/anomalyco/opencode/pull/16068) | Add pinned workspaces in sidebar | @anduimagui | 🟡 OPEN | **Desktop productivity** — persistent quick-access to frequently used worktrees. Reduces friction for multi-repo workflows. |
| [#16065](https://github.com/anomalyco/opencode/pull/16065) | Add Azerbaijani locale | @chz | 🟡 OPEN | **i18n expansion** — Full `az` translations across app, ui, desktop, console, web. Closes #16067. |
| [#13795](https://github.com/anomalyco/opencode/pull/13795) | Add messageCount endpoint for efficient counting | @sjawhar | 🟡 OPEN | **API performance** — `SELECT COUNT(*)` avoids streaming/deserializing all messages. Critical for large session analytics. |
| [#13004](https://github.com/anomalyco/opencode/pull/13004) | Allow custom session ID when creating session | @sjawhar | 🟡 OPEN | **Integration flexibility** — `POST /session {"id": "ses_<valid>"}` for external orchestrators. Maintains backward compatibility. |
| [#16056](https://github.com/anomalyco/opencode/pull/16056) | Desktop rich copy mode with settings toggle | @anduimagui | 🟡 OPEN | **UX polish** — Fixes Apple Mail paste fallback to plain text. Adds clear settings control for copy behavior. |
| [#15018](https://github.com/anomalyco/opencode/pull/15018) | Combine system prompts for non-Anthropic providers | @paulgear | 🟡 OPEN | **Local model compatibility** — Enables Qwen 3.5 to work by merging system prompts. Fixes #5034. |
| [#15731](https://github.com/anomalyco/opencode/pull/15731) | Grouped split terminal workflow | @Junseo5 | 🟡 OPEN | **Terminal power-user** — Right-click split with grouped behavior in session panel. Closes #15729. |
| [#13748](https://github.com/anomalyco/opencode/pull/13748) | Make mouse disablable | @blackheaven | 🟡 OPEN | **Accessibility** — `tui.mouse: false` config + `OPENCODE_DISABLE_MOUSE` env var. Closes #6824, #7926. |

---

## Feature Request Trends

| Theme | Evidence | Momentum |
|-------|----------|----------|
| **MCP Ecosystem Expansion** | #988 (OAuth, closed), #10884 (MCP Apps in desktop) | 🔥 High — protocol maturation driving integration requests |
| **Realtime/WebSocket APIs** | #14891 (OpenAI Realtime API) | 🌡️ Growing — latency-sensitive use cases |
| **Multi-API Key Management** | #16038 (fallback logic per provider), #1326 (predecessor) | 🌡️ Growing — enterprise rate limit handling |
| **Shell Environment Flexibility** | #4683 (runtime switching), #16069 (PowerShell defaults) | 🔥 High — Windows + multi-shell workflows |
| **Session/Workspace Management** | #16068 (pinned workspaces), #15363 (sub-session auto-discovery) | 🌡️ Growing — scale complexity in UI |
| **Internationalization** | #16065/#16067 (Azerbaijani), implied others | 📈 Steady — global user base expansion |

---

## Developer Pain Points

| Category | Symptoms | Root Issues |
|----------|----------|-------------|
| **Resource Management** | OOM kills, 116GB memory growth, kernel lockups | Unbounded growth: unsubscribed bus listeners, uncleared tool outputs, missing dispose callbacks ([#13230](https://github.com/anomalyco/opencode/issues/13230), [#13514](https://github.com/anomalyco/opencode/pull/13514)) |
| **Git Integration at Scale** | 45GB `git add` operations, 54K file snapshots | Session snapshot logic ignores `.gitignore` and repo size ([#3176](https://github.com/anomalyco/opencode/issues/3176)) |
| **Billing Transparency** | Phantom premium request consumption, miscounted "user" vs "agent" initiators | Header classification bugs, session re-entry counting ([#8030](https://github.com/anomalyco/opencode/issues/8030), [#11753](https://github.com/anomalyco/opencode/issues/11753)) |
| **Windows Second-Class Support** | Interrupt failures, shell detection issues, binary compatibility | No CI parity, PowerShell/cmd edge cases ([#631](https://github.com/anomalyco/opencode/issues/631), [#14694](https://github.com/anomalyco/opencode/issues/14694), [#10504](https://github.com/anomalyco/opencode/issues/10504)) |
| **Local Model Reliability** | Tool calls fail silently, context truncation errors | Provider-specific prompt formatting, `n_ctx` handling ([#7030](https://github.com/anomalyco/opencode/issues/7030), [#11141](https://github.com/anomalyco/opencode/issues/11141)) |
| **Mobile/Termux Compatibility** | Wrong interpreter, non-PIE executable on Android | Build toolchain assumptions ([#10504](https://github.com/anomalyco/opencode/issues/10504)) |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-03-05

## Today's Highlights

The Qwen Code team is aggressively addressing Windows compatibility issues with multiple PRs targeting CRLF line endings, UTF-8 BOM handling, and CJK path parsing. A significant security enhancement is also in flight with VibeGuard-style client-side redaction to prevent secrets leakage to model providers. The v0.12.0 release is imminent with version bump PRs already merged.

---

## Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.11.1-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.11.1-preview.2) | Preview | Incremental preview release |
| [v0.11.1-nightly.20260304.9d8921db](https://github.com/QwenLM/qwen-code/releases/tag/v0.11.1-nightly.20260304.9d8921db) | Nightly | Development snapshot from 2026-03-04 |

No substantial release notes provided; users should monitor for v0.12.0 stable.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#2040](https://github.com/QwenLM/qwen-code/issues/2040) | **Project-level Insight** | Enterprise users need per-project analytics, not just machine-level aggregation | 9 comments, active discussion by @wenshao |
| [#1870](https://github.com/QwenLM/qwen-code/issues/1870) | **VS Code sidebar positioning** | Critical UX limitation—users cannot dock chat to primary/secondary sidebar | 5 comments, persistent request |
| [#756](https://github.com/QwenLM/qwen-code/issues/756) | **`no_proxy` environment variable ignored** | Corporate environments with internal LLM servers broken; proxy bypass essential | 5 comments, P2 priority label |
| [#1972](https://github.com/QwenLM/qwen-code/issues/1972) | **Quick launch icon in side panel** | Workflow efficiency for agent access; complements #1870 | 4 comments |
| [#2049](https://github.com/QwenLM/qwen-code/issues/2049) | **`OLLAMA_API_KEY` overrides `selectedType`** | Configuration corruption bug—security settings lost on startup | 3 comments |
| [#2062](https://github.com/QwenLM/qwen-code/issues/2062) | **AGENTS.md does not take effect** | Context file discovery broken; `geminiMdFilename` logic hardcoded | 2 comments, fix in PR #2093 |
| [#2074](https://github.com/QwenLM/qwen-code/issues/2074) | **Remove "quirky" loading messages** | Professionalism concern—Chinese users find casual tone unprofessional | 2 comments, localization/cultural UX |
| [#2066](https://github.com/QwenLM/qwen-code/issues/2066) / [#2084](https://github.com/QwenLM/qwen-code/issues/2084) | **CJK+number paths get spaces injected** | File operations fail on Chinese filenames; CLI parser bug | Multiple duplicates filed, high frustration |
| [#2069](https://github.com/QwenLM/qwen-code/issues/2069) | **GBK encoding support missing** | Legacy codebase editing corrupted; data loss risk | 1 comment, encoding edge case |
| [#2081](https://github.com/QwenLM/qwen-code/issues/2081) | **OAuth login failure** | Device authorization flow broken for Qwen OAuth | 1 comment, blocking new users |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#2099](https://github.com/QwenLM/qwen-code/pull/2099) | **VibeGuard-style client-side redaction** | Prevents secrets/PII leakage to providers via pre-request redaction with local restoration; replaces #2031 | Open |
| [#2098](https://github.com/QwenLM/qwen-code/pull/2098) | **Exclude empty tools array from DashScope API** | Fixes Xcode26 integration error when tools array empty | Open |
| [#1954](https://github.com/QwenLM/qwen-code/pull/1954) | **VS Code auxiliary sidebar support** | Enables chat in secondary sidebar; addresses #1870 | Open |
| [#2095](https://github.com/QwenLM/qwen-code/pull/2095) | **CRLF and UTF-8 BOM frontmatter fix** | Windows markdown command parsing; fixes #2053 | Open |
| [#2094](https://github.com/QwenLM/qwen-code/pull/2094) | **Normalize CRLF for edit operations** | Prevents edit failures on Windows; fixes #2058 | Open |
| [#2093](https://github.com/QwenLM/qwen-code/pull/2093) | **Default AGENTS.md support** | Adds AGENT_CONTEXT_FILENAME alongside QWEN.md; fixes #2062 | Open |
| [#2092](https://github.com/QwenLM/qwen-code/pull/2092) | **Remove LLM-based loop detection** | Disables flaky loop detection, sets `skipLoopDetection: true` by default | Open |
| [#1890](https://github.com/QwenLM/qwen-code/pull/1890) | **Windows CRLF silent failures fix** | Critical fix for subagents/skills ignored on Windows; includes Claude marketplace compatibility | Open |
| [#1988](https://github.com/QwenLM/qwen-code/pull/1988) | **Hooks system infrastructure** | 12 lifecycle hook types for custom command execution; CLI and UI management | Open |
| [#2056](https://github.com/QwenLM/qwen-code/pull/2056) | **Symlink handling in extension install** | Fixes `ENOTSUP` error for GitHub repos with symlinks | Open |

---

## Feature Request Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Workspace customization** | #1870, #1972, #2097, #1954 | Users demand flexible UI layout control, especially multi-monitor and sidebar configurations |
| **Enterprise observability** | #2040, #362 | Project-level insights and structured log viewing for production workflows |
| **Human-in-the-loop controls** | #2091 | Explicit approval gates before autonomous actions |
| **Silent/quiet operation modes** | #2075 | Reduce terminal noise during automated coding sessions |
| **Skills ecosystem standardization** | #2086 | Request for `.agents` directory convention (Claude Code parity) |

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Windows CRLF/BOM handling** | 5+ PRs, multiple issues | Silent failures, file corruption, edit mismatches—platform parity gap |
| **CJK path/filename parsing** | #2066, #2084, #2043, #1925 | Spaces injected between Chinese characters and numbers break file operations |
| **Encoding limitations (GBK)** | #2069 | Legacy codebase editing causes irreversible data loss |
| **Configuration persistence bugs** | #2049, #2062 | Settings overridden unexpectedly, context files ignored |
| **VS Code extension rigidity** | #1870, #1972, #2096 | Inflexible panel positioning degrades IDE integration experience |
| **Proxy/corporate network support** | #756 | `no_proxy` bypass essential for internal LLM deployments |

---

*Digest compiled from github.com/QwenLM/qwen-code — 2026-03-05*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*