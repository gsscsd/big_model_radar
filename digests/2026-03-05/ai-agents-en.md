# OpenClaw Ecosystem Digest 2026-03-05

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-03-05 00:08 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-05

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving codebase with significant community engagement. The project is experiencing **quality control challenges**: no new releases despite active development, and a high volume of regression reports suggesting recent changes may have introduced instability. The 80% open issue rate (402/500) and 78% open PR rate (390/500) indicate a potential backlog management issue. Platform coverage gaps persist with Linux/Windows desktop apps still missing, while internationalization remains the most-discussed long-term enhancement.

---

## 2. Releases

**No new releases** (v2026.3.2 remains current).

The absence of releases despite 500 updated PRs suggests either:
- A release freeze due to stability concerns
- Accumulation of changes for a larger version bump
- CI/CD pipeline issues

---

## 3. Project Progress

### Recently Merged/Closed Items (from visible data)

| Item | Type | Summary | Link |
|------|------|---------|------|
| #32635 | Closed Issue | `gateway install` failure on fresh Linux servers — `execFileUtf8` clobbering `systemctl` stdout | [Link](https://github.com/openclaw/openclaw/issues/32635) |
| #32439 | Closed Issue | macOS install failure with Node v24/npm 11 | [Link](https://github.com/openclaw/openclaw/issues/32439) |
| #33512 | Closed Issue | `gateway install` fails when systemd user unit not yet installed | [Link](https://github.com/openclaw/openclaw/issues/33512) |
| #11762 | Closed Issue | Feishu message duplication (retry mechanism lacks deduplication) | [Link](https://github.com/openclaw/openclaw/issues/11762) |
| #30628 | Closed Issue | Feishu channel auto-reply instability | [Link](https://github.com/openclaw/openclaw/issues/30628) |
| #11722 | Closed Issue | Misleading error normalization: SIGPIPE/SIGKILL reported as "API billing error" | [Link](https://github.com/openclaw/openclaw/issues/11722) |
| #33633 | Closed Issue | `gateway install` fails with `systemctl is-enabled unavailable` | [Link](https://github.com/openclaw/openclaw/issues/33633) |

### Active Development Areas (Open PRs)

| PR | Focus | Size | Link |
|----|-------|------|------|
| #35082 | Hook announce routing to target session lanes | S | [Link](https://github.com/openclaw/openclaw/pull/35082) |
| #35081 | Suppress typing indicators for NO_REPLY runs | S | [Link](https://github.com/openclaw/openclaw/pull/35081) |
| #34181 | Optional tokenizer for accurate token estimation | L | [Link](https://github.com/openclaw/openclaw/pull/34181) |
| #35062/#31310/#32529 | Exa web search provider integration | M | [Link](https://github.com/openclaw/openclaw/pull/35062) |
| #34660 | Telegram mutation tool gate (inline approval) | L | [Link](https://github.com/openclaw/openclaw/pull/34660) |
| #34936 | Formal tool policy verification module (SMT/Z3) | XL | [Link](https://github.com/openclaw/openclaw/pull/34936) |
| #35080 | Deterministic subagent announce delivery | XL | [Link](https://github.com/openclaw/openclaw/pull/35080) |
| #34686 | Directory-per-session store (eliminate lock contention) | XL | [Link](https://github.com/openclaw/openclaw/pull/34686) |
| #31812 | Streaming TTS to Twilio for voice call latency | XL | [Link](https://github.com/openclaw/openclaw/pull/31812) |

---

## 4. Community Hot Topics

### By Comment Volume

| Rank | Issue | Comments | Core Need | Link |
|------|-------|----------|-----------|------|
| 1 | **i18n/Localization Support** | 76 | Global accessibility; maintainers explicitly lack bandwidth | [#3460](https://github.com/openclaw/openclaw/issues/3460) |
| 2 | **Linux/Windows Desktop Apps** | 32 | Platform parity with macOS/iOS/Android | [#75](https://github.com/openclaw/openclaw/issues/75) |
| 3 | **DingTalk First-Install Channel** | 30 | Enterprise China market onboarding | [#26534](https://github.com/openclaw/openclaw/issues/26534) |
| 4 | **Vertex Embedded Runs Regression** | 17 | Production reliability for Google Cloud users | [#32245](https://github.com/openclaw/openclaw/issues/32245) |
| 5 | **macOS arm64-only Binary Regression** | 17 | Intel Mac support (universal binary) | [#28877](https://github.com/openclaw/openclaw/issues/28877) |

### Underlying Needs Analysis

- **Enterprise readiness**: DingTalk (#26534), Feishu stability fixes, and i18n (#3460) indicate Asian enterprise market push
- **Developer experience**: Platform coverage gaps (#75) and gateway install issues (#32635, #33512, #33633) suggest deployment friction
- **Production reliability**: Multiple regressions in v2026.3.x indicate need for improved QA/release process

---

## 5. Bugs & Stability

### Critical/Severe (Production-Blocking)

| Issue | Severity | Description | Regression? | Fix PR? | Link |
|-------|----------|-------------|-------------|---------|------|
| #32245 | **Critical** | Vertex embedded runs fail with "Cannot convert undefined or null to object" — affects Telegram + cron | Yes (v2026.3.1) | Unknown | [Link](https://github.com/openclaw/openclaw/issues/32245) |
| #34810 | **Critical** | Agent suddenly lost all filesystem tools (exec/read/write) — complete capability loss | Unknown | Unknown | [Link](https://github.com/openclaw/openclaw/issues/34810) |
| #33419 | **Critical** | Agent has no file access — "no file-writing tools available" | Yes | Unknown | [Link](https://github.com/openclaw/openclaw/issues/33419) |
| #33225 | **Critical** | Non-interactive onboarded agents cannot write files | Yes | Unknown | [Link](https://github.com/openclaw/openclaw/issues/33225) |
| #32833 | **High** | exec plugin install fails on v2026.3.2 | Yes (v2026.3.2) | Unknown | [Link](https://github.com/openclaw/openclaw/issues/32833) |
| #28877 | **High** | macOS v2026.2.26 arm64-only — Intel Macs crash | Yes (v2026.2.25 universal) | Unknown | [Link](https://github.com/openclaw/openclaw/issues/28877) |

### Moderate Impact

| Issue | Description | Link |
|-------|-------------|------|
| #34741 | WhatsApp "No active listener" mid-session desync | [#34741](https://github.com/openclaw/openclaw/issues/34741) |
| #34830 | OpenRouter 401 "missing authentication header" regression | [#34830](https://github.com/openclaw/openclaw/issues/34830) |
| #33468 | Google Chat fails with "Cannot convert undefined or null to object" | [#33468](https://github.com/openclaw/openclaw/issues/33468) |
| #34052 | Health monitor restarts ALL channels in multi-account setup | [#34052](https://github.com/openclaw/openclaw/issues/34052) |
| #33453 | Telegram duplicate messages with partial streaming | [#33453](https://github.com/openclaw/openclaw/issues/33453) |

### Stability Pattern Analysis

**Concerning trend**: Multiple "Cannot convert undefined or null to object" errors (#32245, #33468) suggest a systemic null-handling regression in v2026.3.x. File system tool availability issues (#34810, #33419, #33225) may indicate a configuration or permission system change.

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (Active PRs)

| Feature | Evidence | Confidence |
|---------|----------|------------|
| **Exa web search** | 3 competing PRs (#35062, #31310, #32529) | Very High |
| **Accurate token counting** | PR #34181 (tokenizer integration) | High |
| **Tool policy verification** | PR #34936 (SMT/Z3 formal verification) | High |
| **Session storage scalability** | PR #34686 (directory-per-session) | High |
| **Telegram security gate** | PR #34660 (mutation approval) | High |

### Medium-Term Signals

| Feature | Request | Blockers | Link |
|---------|---------|----------|------|
| **i18n framework** | #3460 (76 comments) | Maintainer bandwidth | [#3460](https://github.com/openclaw/openclaw/issues/3460) |
| **Linux/Windows apps** | #75 (58 👍, 32 comments) | Resource allocation | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **Native secrets management** | #13610, #17311 | PR #16663 foundation exists | [#13610](https://github.com/openclaw/openclaw/issues/13610) |
| **Voice call streaming** | PR #31812 in progress | XL complexity | [#31812](https://github.com/openclaw/openclaw/pull/31812) |

### Predicted v2026.4.0 Contents
- Exa search provider
- Tokenizer-based accurate token estimation
- Session storage performance improvements
- Telegram mutation gating
- Critical regression fixes for file system tools

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Category | Issue | Quote/Detail |
|----------|-------|--------------|
| **Reliability** | Sudden capability loss | "OpenClaw agent suddenly stopped executing any action involving filesystem" (#34810) |
| **Platform support** | Intel Mac abandonment | "You can't open the application...not supported on this Mac" (#28877) |
| **Authentication** | OpenRouter integration | "401 missing authentication header...Tried also a fresh install. Nothing" (#34830) |
| **Deployment** | Gateway install on Linux | Multiple `systemctl` integration failures (#32635, #33512, #33633) |
| **Context accuracy** | Token undercounting | "/context detail massively undercounts actual token usage (17k reported vs 169k actual)" (#28278) |

### Use Cases (Implicit from Issues)

- **Multi-channel enterprise deployment**: Feishu, DingTalk, Telegram, WhatsApp, Teams
- **Local/self-hosted LLM integration**: Ollama, llama.cpp (#17613, #28927)
- **Cloud AI platforms**: Vertex, Bedrock, OpenRouter
- **Automation/cron workflows**: Time-sensitive job execution (#34744, #17481)

### Satisfaction Indicators
- High engagement (500 issues/PRs in 24h) suggests strong user investment
- 58 👍 on Linux/Windows apps (#75) shows pent-up demand
- Multiple "regression" labels indicate users track versions closely and expect stability

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>30 days, high impact)

| Issue | Age | Problem | Risk | Link |
|-------|-----|---------|------|------|
| #3460 i18n | ~5 weeks | Most commented issue; explicit maintainer bandwidth constraint | Community frustration, fork risk | [#3460](https://github.com/openclaw/openclaw/issues/3460) |
| #75 Linux/Windows apps | ~9 weeks | 58 👍; platform parity gap | Competitive disadvantage | [#75](https://github.com/openclaw/openclaw/issues/75) |
| #2868 Claude token consumption | ~5 weeks | Cost control concern | User financial impact | [#2868](https://github.com/openclaw/openclaw/issues/2868) |
| #4686 WhatsApp relinking | ~5 weeks | 17 👍; complete channel breakage | Core channel reliability | [#4686](https://github.com/openclaw/openclaw/issues/4686) |

### Stale PRs/Issues (labeled stale)

| Item | Description | Link |
|------|-------------|------|
| #22134 | Skills with YAML parse errors silently dropped | [#22134](https://github.com/openclaw/openclaw/issues/22134) |
| #21297 | Control UI race condition (configForm null) | [#21297](https://github.com/openclaw/openclaw/issues/21297) |
| #17481 | Window-based cron with daily run limit | [#17481](https://github.com/openclaw/openclaw/issues/17481) |
| #24839 | All Google models break after 2026.2.22-2 | [#24839](https://github.com/openclaw/openclaw/issues/24839) |

### Recommended Maintainer Actions

1. **Immediate**: Address file system tool regressions (#34810, #33419, #33225) — blocking core functionality
2. **Short-term**: Release hotfix for v2026.3.x stability issues before accumulating more changes
3. **Medium-term**: Decision on i18n (#3460) — either commit resources or close with explanation
4. **Strategic**: Roadmap communication for Linux/Windows apps (#75) given high demand

---

*Digest generated from GitHub data as of 2026-03-05. All links verified against provided dataset.*

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report — 2026-03-05

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense development velocity** across 10+ active projects, with OpenClaw maintaining reference architecture status despite quality control challenges. The landscape shows clear segmentation: **enterprise-ready platforms** (IronClaw, LobsterAI) prioritizing observability and multi-tenancy; **lightweight/self-hosted options** (NanoClaw, PicoClaw, TinyClaw) emphasizing local model support and minimal footprints; and **rapidly iterating experiments** (NanoBot, CoPaw) testing new interaction patterns. A critical inflection point is emerging around **MCP (Model Context Protocol) adoption**, provider diversification for cost resilience, and the tension between "batteries-included" UX versus auditable minimal cores.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Key Indicator |
|:--------|:-----------:|:---------:|:-------------|:-------------|:------------|
| **OpenClaw** | 500 | 500 | v2026.3.2 (frozen) | ⚠️ **Caution** | 80% open issue rate, stability regressions |
| **NanoBot** | 22 | 58 | v0.1.4.post3 | 🟢 **Active** | 13 merged fixes, reactive stability mgmt |
| **ZeroClaw** | 49 | 50 | v0.1.7 (pending) | ⚠️ **Caution** | Community trust crisis (#2691), S0 bugs |
| **PicoClaw** | 23 | 99 | v0.2.0 | 🟢 **Active** | 4:1 PR:issue ratio, voice/cron regressions |
| **NanoClaw** | 50 | 43 | v1.1.3 | 🟡 **Stressed** | Critical OOM leak (#595) unaddressed |
| **IronClaw** | 20 | 50 | v0.14.0 → v0.15.0 prep | 🟢 **Strong** | Excellent bug turnaround, benchmarking focus |
| **LobsterAI** | 29 | 16 | v0.1.23 | 🟢 **Active** | Windows hardening, responsive maintainers |
| **TinyClaw** | 1 | 1 | No release | 🟢 **Stable** | Minimal but focused (multi-provider) |
| **CoPaw** | 50 | 50 | v0.0.5-beta.2 | 🟢 **Active** | 12 first-time contributors, UX friction |
| **ZeptoClaw** | 6 | 7 | v0.6.2 (security) | 🟡 **Niche** | 100% maintainer-driven, silent community |
| **EasyClaw** | 0 | 0 | v1.5.16 | 🔴 **Quiet** | Zero visible activity, maintenance-only |

*\*Health Score: Based on closure rates, critical bug backlog, community engagement, and release cadence*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Closest Competitor |
|:----------|:---------|:-------------------|
| **Scale** | 500 issues/PRs daily | PicoClaw: 122, IronClaw: 70 |
| **Channel breadth** | 10+ integrations (Feishu, DingTalk, Telegram, WhatsApp, Teams, etc.) | IronClaw: 5, LobsterAI: 5 |
| **Enterprise features** | Formal tool policy verification (SMT/Z3), subagent routing | ZeptoClaw: MCP stdio, IronClaw: multi-tenancy (in progress) |
| **Voice infrastructure** | Streaming TTS to Twilio (PR #31812) | NanoClaw: local Whisper, ZeroClaw: Voxtral abstraction |

### Technical Approach Differences
- **OpenClaw**: Monolithic gateway architecture with heavy investment in **deterministic execution guarantees** (PR #34936 formal verification, PR #35080 deterministic subagent delivery)
- **IronClaw**: WASM-based tool sandboxing, trajectory benchmarking infrastructure for agent quality evaluation
- **NanoClaw**: "Tiny auditable core" + opt-in skills, Claude-only orchestration with local model offloading
- **PicoClaw**: TUI-first, Store interface for session persistence, aggressive provider expansion

### Community Size Comparison
OpenClaw's **engagement volume is 4-10x higher** than any peer, but **signal-to-noise ratio is concerning**: 402/500 open issues, 390/500 open PRs, and explicit maintainer bandwidth constraints on i18n (#3460, 76 comments). IronClaw achieves **better health with 1/10th the volume** through rapid triage (same-day bug closure).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:------------|:---------|:------------------|
| **MCP (Model Context Protocol) adoption** | IronClaw, ZeptoClaw, CoPaw, LobsterAI | ZeptoClaw v0.6.2 "MCP stdio transport"; IronClaw #467 trajectory system; LobsterAI #97/#198 closed as completed |
| **Provider diversification / cost resilience** | TinyClaw, NanoClaw, NanoBot, OpenClaw | TinyClaw #124 (OpenCode, z.ai, Kimi, OpenRouter); NanoClaw #80 (34👍, "Claude-only anxiety"); OpenClaw Exa search (3 competing PRs) |
| **Local/self-hosted model support** | NanoBot, NanoClaw, PicoClaw, LobsterAI | NanoBot #603 Ollama friction; NanoClaw `/add-ollama` skill; PicoClaw `picolm-local`; LobsterAI #256 local↔API fallback |
| **Telegram streaming/reliability** | NanoBot, PicoClaw, OpenClaw, IronClaw | NanoBot #1522 PR open; PicoClaw #1101 PR; OpenClaw #35081 typing indicators; IronClaw #539 fixes |
| **Cron/automation reliability** | OpenClaw, PicoClaw, ZeptoClaw | OpenClaw "Vertex embedded runs regression"; PicoClaw 3 cron bugs (#1043, #1044, #1058); ZeptoClaw #246 audit following OpenClaw |
| **Context window / memory management** | OpenClaw, CoPaw, ZeptoClaw, ZeroClaw | CoPaw #510/#657 overflow protection; ZeptoClaw #244 two-layer recovery; ZeroClaw #2774 PostgreSQL-Qdrant hybrid; OpenClaw PR #34181 tokenizer |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:--------|:-----------------------|:------------|:-----------------------|
| **OpenClaw** | Scale + enterprise hardening | Large teams, multi-channel ops | Gateway node architecture, formal verification |
| **IronClaw** | Observability + benchmarking | AI engineers, quality-conscious | WASM sandboxing, trajectory E2E testing |
| **NanoClaw** | Minimal auditable core | Security-conscious developers | Claude orchestration, skill packages, no lock-in |
| **NanoBot** | Lightweight framework | Rapid prototypers, local-first | Python-based, "lazy agent" debugging focus |
| **PicoClaw** | TUI + hardware efficiency | Edge/IoT, low-resource deploys | Store interface, Sipeed hardware integration |
| **LobsterAI** | Chinese enterprise integration | China-market teams | Netease ecosystem, Windows sandbox VM |
| **ZeroClaw** | Multi-tenant SaaS readiness | Hosted platform builders | Daemon mode, PostgreSQL-Qdrant memory |
| **CoPaw** | "Batteries included" UX | Non-technical users | Built-in skills debate, iMessage parity |
| **TinyClaw** | CLI-only operation | Headless automation | No messaging platform dependency |
| **ZeptoClaw** | Security-first maintenance | Compliance-sensitive ops | Rapid CVE patching, supply chain pinning |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, High Risk)
| Project | Velocity | Risk Factor |
|:--------|:---------|:------------|
| **OpenClaw** | 1000 updates/day | Stability regressions, backlog explosion |
| **PicoClaw** | 122 updates/day | Cron/voice regressions post-v0.2.0 |
| **CoPaw** | 100 updates/day | Context overflow, message sync bugs |
| **NanoBot** | 80 updates/day | "Lazy agent" execution gaps |

### Tier 2: Stabilizing (Quality Focus, Controlled Growth)
| Project | Indicator |
|:--------|:----------|
| **IronClaw** | Benchmarking infrastructure, v0.15.0 API breaking changes managed |
| **LobsterAI** | Windows parity achieved, macOS regression identified for hotfix |
| **ZeptoClaw** | Security patch cadence, dependency automation |

### Tier 3: Maintenance/At Risk
| Project | Status |
|:--------|:-------|
| **ZeroClaw** | Community trust crisis (#2691), 6👍 on quality critique |
| **NanoClaw** | Critical OOM leak unaddressed, Claude-only architecture risk |
| **EasyClaw** | Zero activity, maintenance-only |

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|:------|:---------|:------------|
| **"Provider diversification anxiety"** | NanoClaw #80 (34👍), TinyClaw #124, NanoBot #397 | Build abstraction layers early; avoid single-vendor lock-in |
| **MCP as emergent standard** | ZeptoClaw shipped, IronClaw/CoPaw/LobsterAI in progress | Interoperability > walled gardens; tool ecosystems decouple from agents |
| **Cost control at scale** | TinyClaw "quota repidly", OpenClaw token undercounting (#28278) | Accurate token estimation (PR #34181), per-message routing (#1530) become critical |
| **Local-first deployment friction** | NanoBot #603, NanoClaw `/add-ollama`, PicoClaw #1006 | Configuration complexity is the new barrier; wizard/Dokploy templates demanded |
| **Enterprise readiness gap** | CoPaw "像一个废物一样" (#302), OpenClaw i18n bandwidth constraint | "Works on my machine" insufficient; need onboarding, documentation, i18n investment |
| **Security as afterthought** | ZeptoClaw SSRF (#245) post-skill installer, ZeroClaw S0 sandbox bugs | Capability expansion outpacing safety infrastructure; audit before scale |
| **Voice as table stakes** | OpenClaw Twilio streaming, NanoClaw Whisper.cpp, ZeroClaw Voxtral | Multimodal (voice+vision) becoming baseline, not differentiator |

---

*Report compiled from 10 project digests covering 1,400+ issues/PRs. Data current as of 2026-03-05.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-05

## 1. Today's Overview

NanoBot shows **exceptionally high development velocity** with 58 PRs and 22 issues updated in the last 24 hours, indicating an active, rapidly evolving codebase. The project is experiencing a **bug-fix sprint** with 13 merged/closed PRs addressing stability issues, while 45 open PRs suggest a healthy contribution pipeline. No new releases were cut today, but the volume of fixes suggests a patch release may be imminent. Community engagement is strong with multi-comment issues revealing real production pain points around model integration, local LLM deployment, and platform-specific connectors. The project appears to be in a **stabilization phase** following feature expansion, with particular focus on Telegram, Feishu, and local model provider robustness.

---

## 2. Releases

**No new releases** (v0.1.4.post3 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (13 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1532](https://github.com/HKUDS/nanobot/pull/1532) | @AXGZ21 | Web UI setup wizard + Railway deployment template | **CLOSED** — Deployment tooling |
| [#1511](https://github.com/HKUDS/nanobot/pull/1511) | @kiplangatkorir | Add 512KB size limit to ReadFileTool to prevent OOM | **CLOSED** — Critical stability fix |
| [#1507](https://github.com/HKUDS/nanobot/pull/1507) | @kiplangatkorir | Guard `validate_params` against non-dict input | **CLOSED** — Crash prevention |
| [#1508](https://github.com/HKUDS/nanobot/pull/1508) | @kiplangatkorir | Handle invalid ISO datetime in CronTool gracefully | **CLOSED** — Error handling |
| [#1521](https://github.com/HKUDS/nanobot/pull/1521) | @chengyongru | Fix test failures from refactored cron/context builder | **CLOSED** — Test suite health |
| [#1525](https://github.com/HKUDS/nanobot/pull/1525) | @danielemden | Pass `reasoning_effort` to Codex API correctly | **CLOSED** — Feature fix |
| [#1531](https://github.com/HKUDS/nanobot/pull/1531) | @bendusy | Convert audio type to file for Feishu API compatibility | **CLOSED** — Platform fix |

**Key Advances:**
- **Reliability engineering**: Multiple defensive programming fixes (input validation, size limits, error handling)
- **OpenAI Codex integration**: Proper `reasoning_effort` parameter passing now functional
- **Test infrastructure**: Refactored tests aligned with recent architectural changes

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | 👍 | Core Need |
|:---|:---|:---:|:---:|:---|
| 1 | [#1481](https://github.com/HKUDS/nanobot/issues/1481) "the bot is so stupid, I'm not sure what went wrong" | 7 | 1 | **Model behavior debugging** — User frustration with "I'm on it" loop using GitHub Copilot/Claude Sonnet 4.6 on Windows |
| 2 | [#603](https://github.com/HKUDS/nanobot/issues/603) "Cant use ollama local" | 5 | 0 | **Local LLM onboarding** — Configuration complexity for Ollama local deployment |
| 3 | [#397](https://github.com/HKUDS/nanobot/issues/397) "Feature Request: 支持多模型聚合平台与OAuth认证" | 5 | 0 | **Enterprise auth & model routing** — RouterWay, OAuth for GitHub Copilot/Gemini |
| 4 | [#1459](https://github.com/HKUDS/nanobot/issues/1459) "nanobot with codex-5.3-codex is lazy and doesn't actually execute" | 4 | 0 | **Agent execution reliability** — Promise-to-action gap in file reading tasks |

### Underlying Needs Analysis

| Pattern | Insight |
|:---|:---|
| **"Lazy agent" syndrome** | Issues #1481, #1459 reveal a critical UX gap: agents acknowledge tasks but fail to execute. Suggests tool-calling or execution loop bugs with specific model configurations. |
| **Local-first deployment friction** | #603, #1470, #1526 show strong demand for local/HF/MLX model support, blocked by configuration complexity and hardcoded API path assumptions. |
| **Platform parity gaps** | Telegram streaming (#471, #671, #1522), Feishu document reading (#1524), QQ Markdown (#1518) indicate messaging platform integrations lagging feature completeness. |

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#1536](https://github.com/HKUDS/nanobot/issues/1536) | MCP connection drops require full nanobot restart — no retry logic | **OPEN** — PR needed |
| 🔴 **Critical** | [#1501](https://github.com/HKUDS/nanobot/issues/1501) | Telegram media files silently overwritten due to non-unique filenames | **OPEN** — Security/data loss risk |
| 🟡 **High** | [#1519](https://github.com/HKUDS/nanobot/issues/1519) | SSL certificate verification failure in uv environments (Feishu WebSocket) | **OPEN** — Workaround documented |
| 🟡 **High** | [#1535](https://github.com/HKUDS/nanobot/pull/1535) | Telegram channel crash when proxy configured | **PR OPEN** — Fix pending review |
| 🟡 **High** | [#1487](https://github.com/HKUDS/nanobot/issues/1487) | Qwen3.5 function.arguments JSON format error with PDF generation | **OPEN** — Provider/model compatibility |
| 🟡 **High** | [#1514](https://github.com/HKUDS/nanobot/issues/1514) | Zhipu AI API suddenly failing in coding mode | **OPEN** — Provider regression |
| 🟢 **Medium** | [#1496](https://github.com/HKUDS/nanobot/issues/1496) | Cron list tool missing schedule details for agents | **OPEN** — UX gap |
| 🟢 **Medium** | [#1526](https://github.com/HKUDS/nanobot/issues/1526) | MLX VLM server path incompatibility (`/chat/completions` vs `/v1/chat/completions`) | **OPEN** — Configuration flexibility |

**Stability Assessment**: The project shows **reactive but not proactive** stability management — multiple crash fixes merged today, but architectural gaps (MCP retry, filename uniqueness) remain unaddressed. The concentration of provider-specific bugs suggests the abstraction layer needs hardening.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Telegram streaming messages** | [#1522](https://github.com/HKUDS/nanobot/pull/1522), [#471](https://github.com/HKUDS/nanobot/issues/471) | **HIGH** | PR open, Telegram just shipped API support, competitive necessity |
| **Agent Swarm / Multi-agent collaboration** | [#1494](https://github.com/HKUDS/nanobot/pull/1494), [#1495](https://github.com/HKUDS/nanobot/issues/1495), [#1493](https://github.com/HKUDS/nanobot/issues/1493) | **MEDIUM** | PR open for software-layer implementation; native architecture RFC suggests this is strategic priority |
| **Per-message model routing (@prefix)** | [#1530](https://github.com/HKUDS/nanobot/issues/1530) | **MEDIUM** | Clear cost-management use case, fits existing architecture |
| **ACP unified abstraction layer** | [#1528](https://github.com/HKUDS/nanobot/issues/1528) | **LOW-MEDIUM** | Architectural refactor; may be deferred for stability focus |
| **Local HuggingFace model support** | [#1470](https://github.com/HKUDS/nanobot/issues/1470) | **MEDIUM** | Strong community demand, aligns with local-first trend |
| **Signal Messenger integration** | [#601](https://github.com/HKUDS/nanobot/pull/601) | **MEDIUM** | PR open since Feb 13, may need final review push |
| **Mistral/Voxtral audio provider** | [#1390](https://github.com/HKUDS/nanobot/pull/1390) | **MEDIUM** | PR open, expands provider ecosystem |
| **Dokploy deployment template** | [#1503](https://github.com/HKUDS/nanobot/issues/1503) | **LOW** | Nice-to-have; infrastructure templates typically lower priority |

**Roadmap Prediction**: Next release likely focuses on **Telegram streaming + Agent Swarm (software layer)** as headline features, with **MCP retry logic** and **local model configuration improvements** as stability accompaniments.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **"Agent acknowledges but doesn't act"** | #1481, #1459, #1500 | 🔴 Critical UX failure |
| **Configuration complexity for local models** | #603, #1470, #1526 | 🟡 High barrier to entry |
| **Information overload in output** | #1500 "信息流强制输出" | 🟡 UX polish needed |
| **Provider-specific breakages** | #1487 (Qwen), #1514 (Zhipu), #1519 (SSL) | 🟡 Fragile abstraction layer |
| **Platform integration gaps** | #1524 (Feishu docs), #1518 (QQ Markdown) | 🟢 Growing ecosystem needs |

### Use Cases Emerging
- **Cost-conscious Telegram bot operators** (#1530) — need fine-grained model selection
- **China enterprise users** — Feishu/Lark integration, local model deployment, OAuth for domestic providers
- **Local-first/self-hosting community** — Ollama, MLX, HF models, uv-based deployment

### Satisfaction Signals
- Strong appreciation for "lightweight LLM interaction framework" design (#1470)
- Active community providing workarounds (SSL fix in #1519)

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#603](https://github.com/HKUDS/nanobot/issues/603) Ollama local support | 19 days | 🔴 **High** — Blocks local adoption | Dedicated documentation or config wizard |
| [#397](https://github.com/HKUDS/nanobot/issues/397) Multi-model platforms + OAuth | 24 days | 🟡 Medium — Strategic for enterprise | Roadmap response from maintainers |
| [#471](https://github.com/HKUDS/nanobot/issues/471) Telegram streaming | 23 days | 🟢 **Resolved by #1522** | Review/merge #1522 |
| [#126](https://github.com/HKUDS/nanobot/pull/126) Docker CI/CD to ghcr/dockerhub | 28 days | 🟡 Medium — Distribution | Final review for official image |
| [#601](https://github.com/HKUDS/nanobot/pull/601) Signal integration | 20 days | 🟡 Medium — Platform expansion | Final review |

**Maintainer Attention Required**: The Ollama local deployment issue (#603) represents the longest-running blocker for a significant user segment and would benefit from either official documentation or a configuration template.

---

*Digest generated from 58 PRs and 22 issues updated 2026-03-04*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-05

## 1. Today's Overview

ZeroClaw shows **high community activity** with 49 issues and 50 PRs updated in the last 24 hours, though the merge rate remains modest (11 closed PRs vs. 39 open). The project is experiencing **growing pains** — a highly-upvoted community critique (#2691) alleges code quality and maintainer responsiveness issues, while technical debt accumulates across channels, memory systems, and provider integrations. Critical infrastructure work is advancing: CI migration to Blacksmith (#2777), PostgreSQL-Qdrant hybrid memory (#2774), and voice transcription provider abstraction (#2778) indicate maturation efforts. However, **no new release** was cut despite version bump PRs (#2775), suggesting release pipeline friction. The daemon/runtime component dominates bug reports, with connection, sandbox, and signal-handling issues recurring themes.

---

## 2. Releases

**No new releases** — Version remains at 0.1.7.  
- PR #2775 proposes bump to 0.1.8 but remains unmerged.  
- Automated release workflows are in development (#2768, #2770) to reduce manual friction.

---

## 3. Project Progress

### Merged/Closed PRs (11 total, selected highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#2776](https://github.com/zeroclaw-labs/zeroclaw/pull/2776) | Mistral Voxtral voice transcription support | **CLOSED** (superseded by #2778) — STT provider abstraction |
| [#2773](https://github.com/zeroclaw-labs/zeroclaw/pull/2773) | Fix heartbeat agent response delivery via Telegram | **CLOSED** — Corrected silent heartbeat failures |
| [#2694](https://github.com/zeroclaw-labs/zeroclaw/pull/2694) | Suppress `HEARTBEAT_OK` sentinel in channel replies | **OPEN** — Fixes user-visible noise in Telegram |
| [#2778](https://github.com/zeroclaw-labs/zeroclaw/pull/2778) | Add Mistral Voxtral support for voice transcription | **OPEN** — Replaces hardcoded Groq Whisper; enables provider choice |
| [#2774](https://github.com/zeroclaw-labs/zeroclaw/pull/2774) | PostgreSQL-Qdrant hybrid memory backend | **OPEN** — Major memory architecture upgrade for scale |
| [#2777](https://github.com/zeroclaw-labs/zeroclaw/pull/2777) | CI: Migrate Hetzner VMs to Blacksmith + GitHub runners | **OPEN** — Reduces infrastructure cost/maintenance |
| [#2728](https://github.com/zeroclaw-labs/zeroclaw/pull/2728) | WhatsApp inbound media support (Cloud API + Web) | **OPEN** — Unblocks vision/document workflows for WA users |
| [#2752](https://github.com/zeroclaw-labs/zeroclaw/pull/2752) | Delegate vision detection to provider capability contract | **OPEN** — Removes hardcoded model lists; architectural cleanup |
| [#2761](https://github.com/zeroclaw-labs/zeroclaw/pull/2761) | Reduce lint debt, optimize onboarding/tool paths | **OPEN** — Performance + maintainability |
| [#2652](https://github.com/zeroclaw-labs/zeroclaw/pull/2652) | Handle SIGTERM for graceful container shutdown | **OPEN** — Fixes Docker/K8s ungraceful kills |
| [#2649](https://github.com/zeroclaw-labs/zeroclaw/pull/2649) | Prevent memory context duplication | **OPEN** — Fixes self-referential memory recall bug |

---

## 4. Community Hot Topics

### Highest Engagement Issues

| Issue | Comments | Reactions | Analysis |
|:---|:---:|:---:|:---|
| [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) — Web agent connection error | 8 | 0 | **S1 severity** — Daemon/web UI disconnect loop; CLI works. Suggests runtime/daemon websocket or port binding issue. No fix PR identified. |
| [#2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) — "Code quality seriously concerning, attitude toward collaboration even worse" | 2 | **6 👍** | **Community sentiment crisis** — Cites ignored PRs, poor review practices, contributor friction. High upvote ratio indicates broad agreement. Needs maintainer response. |
| [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) — Canary tokens + semantic VectorDB guard | 5 | 0 | Security hardening for enterprise; paraphrase-resistant prompt injection detection. No PR yet. |
| [#2611](https://github.com/zeroclaw-labs/zeroclaw/issues/2611) — Provider parity guardrails | 5 | 0 | Technical debt prevention — factory/discovery/test matrix can drift. Infrastructure quality issue. |
| [#2274](https://github.com/zeroclaw-labs/zeroclaw/issues/2274) — Chat-based CRM use case (multi-tenant, lightweight) | 4 | 0 | **Product-market signal** — User evaluating vs. OpenClaw; needs proactive heartbeat, multi-tenancy. Roadmap input. |

**Underlying needs:** (1) Runtime stability for daemon mode, (2) Security/enterprise features, (3) Maintainer-community relationship repair, (4) Multi-tenant SaaS readiness.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---:|:---:|:---|
| **S0** — Data loss/security | [#2600](https://github.com/zeroclaw-labs/zeroclaw/issues/2600) — Cannot call tools on Raspberry Pi 3B+ | OPEN | None | Sandbox/security layer blocks file operations on ARM; "permission denied" on `/tmp` |
| **S0** — Data loss/security | [#2588](https://github.com/zeroclaw-labs/zeroclaw/issues/2588) — Request missing `tools` parameter | OPEN | None | Tool calls fail silently; regression in request construction |
| **S0** — Data loss/security | [#2679](https://github.com/zeroclaw-labs/zeroclaw/issues/2679) — Audit log config no effect | OPEN | None | Security compliance feature broken |
| **S1** — Workflow blocked | [#2595](https://github.com/zeroclaw-labs/zeroclaw/issues/2595) — Web agent connection error | OPEN | None | Daemon web UI unusable; CLI workaround only |
| **S1** — Workflow blocked | [#2702](https://github.com/zeroclaw-labs/zeroclaw/issues/2702) — Matrix OTK conflict loop | OPEN | None | E2EE decryption failures; continuous error loop |
| **S1** — Workflow blocked | [#2698](https://github.com/zeroclaw-labs/zeroclaw/issues/2698) — Nextcloud Talk webhook format mismatch | OPEN | None | Activity Streams 2.0 vs. expected format |
| **S1** — Workflow blocked | [#2782](https://github.com/zeroclaw-labs/zeroclaw/issues/2782) — Cannot file write/edit in Discord | OPEN | None | Daemon sandbox restricts file operations |
| **S2** — Degraded | [#2665](https://github.com/zeroclaw-labs/zeroclaw/issues/2665) — React error on Memory page | OPEN | None | API returns object, frontend expects string |
| **S2** — Degraded | [#2682](https://github.com/zeroclaw-labs/zeroclaw/issues/2682) — Integrations failed to load | OPEN | None | JSON parse error on HTML response (likely auth redirect) |

**Fixed today:** [#2674](https://github.com/zeroclaw-labs/zeroclaw/issues/2674) (Gemini API rejection), [#2684](https://github.com/zeroclaw-labs/zeroclaw/issues/2684) (WSL shell failure), [#2686](https://github.com/zeroclaw-labs/zeroclaw/issues/2686) (Discord transcription), [#1175](https://github.com/zeroclaw-labs/zeroclaw/issues/1175) (Slack channel ID optional-but-required), [#898](https://github.com/zeroclaw-labs/zeroclaw/issues/898) (vision model support — closed as completed).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in v0.1.8+ | Rationale |
|:---|:---|:---:|:---|
| **LiteLLM provider alias** | [#2602](https://github.com/zeroclaw-labs/zeroclaw/issues/2602) | **High** | PR pattern exists (vLLM, SGLang, LM Studio); community demand |
| **LM Studio custom connector** | [#2669](https://github.com/zeroclaw-labs/zeroclaw/issues/2669) | Medium | Documentation gap; may merge with OpenAI-compatible provider |
| **Matrix voice transcription** | [#2668](https://github.com/zeroclaw-labs/zeroclaw/issues/2668) | **High** | PR #2778 abstracts STT providers; Matrix channel active development |
| **Multi-agent routing** | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Medium | "Like OpenClaw" — architectural; needs design discussion |
| **On-demand skill loading** | [#2703](https://github.com/zeroclaw-labs/zeroclaw/issues/2703) | Medium | Performance optimization; touches core agent loop |
| **Streaming content/tool events** | [#2786](https://github.com/zeroclaw-labs/zeroclaw/issues/2786) | Medium | UX improvement for web UI builders; API surface change |
| **Security: Canary tokens + semantic guard** | [#2590](https://github.com/zeroclaw-labs/zeroclaw/issues/2590) | Lower | Enterprise feature; no PR yet; may wait for security-focused release |

---

## 7. User Feedback Summary

### Pain Points
- **Daemon reliability**: Connection drops (#2595), signal handling (#2652), sandbox restrictions (#2600, #2782) make production deployment risky
- **Platform-specific breakage**: Raspberry Pi (#2600), WSL (#2684), Windows-native (#2684) all have friction
- **Configuration complexity**: Environment variable support gaps (#2601), encrypted secrets handling (#2534), audit log non-functionality (#2679)
- **Contributor experience**: Per #2691, PRs ignored, conflicting branch guidance (#2697), review latency

### Use Cases Emerging
- **Chat-based CRM** (#2274): Needs multi-tenancy, lightweight runtime, proactive heartbeat — SaaS readiness
- **Voice-enabled Matrix/Discord/WhatsApp**: Transcription demand across channels
- **Vision workflows**: Image processing in WhatsApp (#2728), general multimodal (#898 closed)

### Satisfaction Signals
- Active PR contributions from "distinguished contributors" (@theonlyhennygod, @reidliu41) indicate retained core community
- Infrastructure investments (CI, memory backend, provider abstraction) show long-term thinking

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|:---|:---:|:---|:---|
| [#2274](https://github.com/zeroclaw-labs/zeroclaw/issues/2274) Chat-based CRM requirements | 5 days | Product direction | Roadmap response; competitive positioning vs. OpenClaw |
| [#2691](https://github.com/zeroclaw-labs/zeroclaw/issues/2691) Community critique | 1 day | **Community health** | Maintainer acknowledgment; process improvements |
| [#2532](https://github.com/zeroclaw-labs/zeroclaw/pull/2532) BlueBubbles group management | 3 days | Feature completeness | Review; depends on #2495 |
| [#2703](https://github.com/zeroclaw-labs/zeroclaw/issues/2703) On-demand skill loading | 1 day | Performance | Design discussion; core architecture |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) Multi-agent routing | 1 day | Competitive parity | Architecture RFC; compare OpenClaw implementation |

---

**Project Health Assessment:** ⚠️ **Caution** — High technical velocity masked by release friction, accumulating S0/S1 bugs, and emerging community trust issues. Immediate priorities: (1) Address #2691 community concerns, (2) Cut v0.1.8 with critical fixes, (3) Triage S0 security/sandbox bugs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-05

## 1. Today's Overview

PicoClaw shows **exceptionally high development velocity** with 99 PRs and 23 issues updated in the last 24 hours, indicating an active sprint period. The project is in a **stabilization phase for v0.2.0** with significant bug-fixing activity following recent releases. Community engagement is strong with cross-platform support requests (Chromebook, NetBSD) and enterprise-oriented features gaining traction. No new releases were cut today, suggesting maintainers are accumulating fixes for a patch release. The issue-to-PR ratio (~1:4) indicates healthy contributor responsiveness.

---

## 2. Releases

**No new releases** (v0.2.0 remains current).

---

## 3. Project Progress

### Merged/Closed Today

| PR/Issue | Description | Impact |
|----------|-------------|--------|
| [#947](https://github.com/sipeed/picoclaw/pull/947) | Fix voice transcription regression | Restores voice message functionality broken in v0.2.0 |
| [#711](https://github.com/sipeed/picoclaw/issues/711) | JSONL-backed session persistence with Store interface | Closed — architectural improvement for session reliability |
| [#854](https://github.com/sipeed/picoclaw/issues/854) | Configurable summarization threshold | Closed — user-configurable message compression |
| [#945](https://github.com/sipeed/picoclaw/issues/945) | Voice package unused regression | Closed — duplicate of #947 fix |
| [#88](https://github.com/sipeed/picoclaw/issues/88) | Chromebook installation documentation | Closed — user education resolved |

### Key Advances

- **Voice system restoration**: Critical regression from v0.2.0 ([`voice.GroqTranscriber`](https://github.com/sipeed/picoclaw/issues/945)) now fixed
- **Session architecture**: New [Store interface](https://github.com/sipeed/picoclaw/issues/711) eliminates race conditions and I/O bottlenecks
- **Provider ecosystem expansion**: 4 new provider PRs active (Avian, Vivgrid, OpenCode Zen, SearXNG search)

---

## 4. Community Hot Topics

### Highest Engagement

| Item | Engagement | Analysis |
|------|-----------|----------|
| [#806](https://github.com/sipeed/picoclaw/issues/806) WebUI support | 7 👍, high priority | **Accessibility bottleneck** — TUI limits adoption; "Refactoring now" status suggests imminent delivery |
| [#507](https://github.com/sipeed/picoclaw/issues/507) OpenClaw gateway node compatibility | 1 👍, 4 comments | **Interoperability demand** — users want ecosystem flexibility, not vendor lock-in |
| [#1006](https://github.com/sipeed/picoclaw/issues/1006) Local model configuration | 4 comments | **On-premise AI friction** — `picolm-local` setup complexity blocks self-hosting users |
| [#1103](https://github.com/sipeed/picoclaw/issues/1103) ModelScope.cn API failure | 1 comment | **Chinese market localization** — protocol parsing bug with `deepseek-ai/` prefix |

### Underlying Needs

1. **Lower barrier to entry** — WebUI (#806) and Dokploy template (#1065) requests from non-technical users
2. **Standardization** — OpenClaw compatibility (#507) reveals desire for agent protocol standards
3. **Local AI deployment** — Multiple issues around `picolm-local`, Ollama-style local model integration

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | [#1106](https://github.com/sipeed/picoclaw/pull/1106) Audio-as-image crash for text-only LLMs | PR open | [#1106](https://github.com/sipeed/picoclaw/pull/1106) |
| 🔴 **Critical** | [#1064](https://github.com/sipeed/picoclaw/issues/1064) Voice processing broken (API 1210) | Open | None |
| 🟡 **High** | [#1102](https://github.com/sipeed/picoclaw/issues/1102) DeepSeek `max_tokens` validation error | Open | None |
| 🟡 **High** | [#1103](https://github.com/sipeed/picoclaw/issues/1103) ModelScope protocol parsing | Open | None |
| 🟡 **High** | [#1043](https://github.com/sipeed/picoclaw/issues/1043) Cron jobs silently become one-time | Open | None |
| 🟡 **High** | [#1044](https://github.com/sipeed/picoclaw/issues/1044) Cron TZ ignored (UTC-only) | Open | None |
| 🟡 **High** | [#1058](https://github.com/sipeed/picoclaw/issues/1058) Cron `deliver=false` discards LLM responses | Open | None |
| 🟢 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) `guardCommand` false positive on curl | Open | None |
| 🟢 **Medium** | [#1049](https://github.com/sipeed/picoclaw/issues/1049) Binary file read explosion | PR open | [#1107](https://github.com/sipeed/picoclaw/pull/1107) |
| 🟢 **Medium** | [#1068](https://github.com/sipeed/picoclaw/issues/1068) HTML error pages yield cryptic JSON parse errors | PR open | [#1075](https://github.com/sipeed/picoclaw/pull/1075) |

### Regression Pattern
**Cron subsystem** has 3 related bugs (#1043, #1044, #1058) suggesting recent refactoring introduced scheduling instability. **Voice pipeline** has 2 critical issues post-v0.2.0.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in Next Release |
|---------|---------|---------------------------|
| **WebUI** | [#806](https://github.com/sipeed/picoclaw/issues/806) — "Refactoring now" | ⭐⭐⭐⭐⭐ Very High |
| **Telegram streaming** | [#1098](https://github.com/sipeed/picoclaw/issues/1098) + [#1101](https://github.com/sipeed/picoclaw/pull/1101) PR | ⭐⭐⭐⭐⭐ Very High |
| **Node/gateway architecture** | [#1055](https://github.com/sipeed/picoclaw/issues/1055) — OpenClaw-style | ⭐⭐⭐⭐☆ High |
| **Dokploy template** | [#1065](https://github.com/sipeed/picoclaw/issues/1065) | ⭐⭐⭐☆☆ Medium |
| **Authentication (GoBetterAuth)** | [#1067](https://github.com/sipeed/picoclaw/issues/1067) | ⭐⭐⭐☆☆ Medium |
| **SearXNG search** | [#534](https://github.com/sipeed/picoclaw/pull/534) PR open | ⭐⭐⭐⭐☆ High |
| **Session thinking controls** | [#1099](https://github.com/sipeed/picoclaw/pull/1099) PR open | ⭐⭐⭐⭐☆ High |
| **Discord reply context** | [#1048](https://github.com/sipeed/picoclaw/issues/1048) | ⭐⭐⭐☆☆ Medium |

---

## 7. User Feedback Summary

### Pain Points

| Category | Evidence | Severity |
|----------|----------|----------|
| **Configuration complexity** | [#1006](https://github.com/sipeed/picoclaw/issues/1006), [#957](https://github.com/sipeed/picoclaw/pull/957) | High — local model setup is error-prone |
| **Silent failures** | [#1043](https://github.com/sipeed/picoclaw/issues/1043) cron recurrence lost, [#1058](https://github.com/sipeed/picoclaw/issues/1058) message discard | High — breaks trust in automation |
| **Cryptic errors** | [#1068](https://github.com/sipeed/picoclaw/issues/1068) HTML→JSON parse, [#1102](https://github.com/sipeed/picoclaw/issues/1102) `max_tokens` range | Medium — debugging friction |
| **CLI documentation** | [#1104](https://github.com/sipeed/picoclaw/issues/1104) misleading `--registry` help | Low — fix PR [#1105](https://github.com/sipeed/picoclaw/pull/1105) open |

### Use Cases Emerging

- **Smart home gateway**: [#1055](https://github.com/sipeed/picoclaw/issues/1055) — low-end device node control
- **Non-technical self-hosting**: [#806](https://github.com/sipeed/picoclaw/issues/806), [#1065](https://github.com/sipeed/picoclaw/issues/1065) — browser UI, one-click deploy
- **Multi-provider resilience**: [#534](https://github.com/sipeed/picoclaw/pull/534) SearXNG fallback for search

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#507](https://github.com/sipeed/picoclaw/issues/507) OpenClaw gateway node | 13 days | Strategic divergence | Maintainer response on protocol roadmap |
| [#434](https://github.com/sipeed/picoclaw/pull/434) NetBSD release support | 14 days | Platform parity | CI/build system review |
| [#534](https://github.com/sipeed/picoclaw/pull/534) SearXNG provider | 13 days | Search reliability | Merge for DuckDuckGo/Brave fallback |
| [#844](https://github.com/sipeed/picoclaw/pull/844) Avian provider | 6 days | Provider diversity | Review for v0.2.1 inclusion |

---

**Project Health**: 🟢 Active — High velocity, responsive maintainers, clear technical debt identification. Risk: Cron subsystem stability post-refactor.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-05

## 1. Today's Overview

NanoClaw shows **high community velocity** with 50 active issues and 43 PRs updated in the last 24 hours, though no new releases were cut. The project is experiencing significant contributor growth with 8 merged/closed PRs advancing features (Telegram support, local Whisper, iCloud tools, image vision) against 24 open PRs under review. Critical stability issues persist—particularly memory leaks causing OOM crashes after ~40 hours and model configuration bugs—while the community actively debates architectural decisions like the 3-way merge skill system and multi-provider LLM support. The maintainer bandwidth appears strained given the volume of high-priority bugs and feature requests accumulating without resolution.

---

## 2. Releases

**No new releases** (v1.1.3 remains current).

---

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#715](https://github.com/qwibitai/nanoclaw/pull/715) | @vweaver | Telegram channel with local voice transcription | **Major**: First-class Telegram support via Grammy library, Whisper.cpp integration |
| [#714](https://github.com/qwibitai/nanoclaw/pull/714) | @seb-writes-code | Error handling for `setTyping()` calls | Stability: Prevents message pipeline crashes from flaky channels |
| [#712](https://github.com/qwibitai/nanoclaw/pull/712) | @daniviber | `/add-ollama` skill for local model inference | **Major**: Claude orchestration + local model offloading |
| [#702](https://github.com/qwibitai/nanoclaw/pull/702) | @glifocat | `use-local-whisper` skill package | Cost/privacy: Replaces OpenAI Whisper API |
| [#711](https://github.com/qwibitai/nanoclaw/pull/711) | @glifocat | Prettier formatting fix for CI | Infrastructure |
| [#695](https://github.com/qwibitai/nanoclaw/pull/695) | @glifocat | Error handling for WhatsApp `messages.upsert` | Stability: Prevents crash from malformed messages |
| [#627](https://github.com/qwibitai/nanoclaw/pull/627) | @glifocat | Timezone-aware context injection | UX: Fixes agent confusion about dates/times |
| [#555](https://github.com/qwibitai/nanoclaw/pull/555) | @glifocat | `add-image-vision` skill | **Major**: Vision capabilities for agents |

**Key Advances**: Multi-channel expansion (Telegram), local AI stack (Ollama, Whisper), vision support, and robustness improvements. @glifocat emerged as prolific contributor (4 merged PRs).

---

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Analysis |
|:---|:---:|:---:|:---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) Support runtimes other than Claude | 16 | 34 | **Top demand**: Vendor lock-in anxiety due to Anthropic account terminations. Community wants OpenCode, Codex, Gemini support. Signals strategic risk for Claude-only architecture. |
| [#384](https://github.com/qwibitai/nanoclaw/issues/384) Skill marketplace/registry | 8 | 13 | Core value proposition tension: NanoClaw's "tiny auditable core" vs. discoverability. Users want curated skill ecosystem without sacrificing security model. |
| [#439](https://github.com/qwibitai/nanoclaw/issues/439) Easier installation | 1 | 8 | Friction in Claude-assisted setup; users want traditional shell script alternative. |
| [#29](https://github.com/qwibitai/nanoclaw/issues/29) Signal messaging channel | 3 | 1 | Privacy-conscious users want WhatsApp alternative; follows pattern of other `/add-*` skills. |

**Underlying Needs**: (1) **Provider diversification** for business continuity, (2) **Skill discovery infrastructure**, (3) **Lower onboarding friction**, (4) **Privacy-respecting channels**.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---:|
| **Critical** | [#595](https://github.com/qwibitai/nanoclaw/issues/595) OOM crash after ~40h — ghost sockets accumulate | Open | ❌ No PR |
| **High** | [#472](https://github.com/qwibitai/nanoclaw/issues/472) `CLAUDE_MODEL` env var ignored | Open | [#468](https://github.com/qwibitai/nanoclaw/pull/468) open |
| **High** | [#613](https://github.com/qwibitai/nanoclaw/issues/613) `ANTHROPIC_MODEL` mapped incorrectly | Open | ❌ No PR |
| **High** | [#635](https://github.com/qwibitai/nanoclaw/issues/635) Insecure WhatsApp auth file permissions (644 vs 600) | Open | ❌ No PR |
| **High** | [#233](https://github.com/qwibitai/nanoclaw/issues/233) IPC messages dropped after query result | Open | ❌ No PR |
| **High** | [#341](https://github.com/qwibitai/nanoclaw/issues/341) `add-discord` skill breaks Docker users (Apple Container code) | Open | ❌ No PR |
| **High** | [#356](https://github.com/qwibitai/nanoclaw/issues/356) `ExitPlanMode` tool fails | Open | ❌ No PR |
| Medium | [#553](https://github.com/qwibitai/nanoclaw/issues/553) Container execution fails after WhatsApp reconnect | Open | ❌ No PR |
| Medium | [#611](https://github.com/qwibitai/nanoclaw/issues/611) Agent-runner source never updated after creation | Open | ❌ No PR |
| Medium | [#157](https://github.com/qwibitai/nanoclaw/issues/157) Setup hangs on Node 20 QR generation | Open | ❌ No PR |

**Stability Assessment**: **Concerning**. Critical memory leak unaddressed; multiple high-severity configuration and security bugs lack PRs. Model configuration is particularly broken with overlapping issues (#472, #613, #342).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| Multi-provider LLM support | [#80](https://github.com/qwibitai/nanoclaw/issues/80) | Medium | High demand (34👍), but architectural complexity; may require abstraction layer |
| Skill marketplace/registry | [#384](https://github.com/qwibitai/nanoclaw/issues/384) | Low-Medium | Strategic importance, but design-heavy; needs maintainer prioritization |
| Signal channel | [#29](https://github.com/qwibitai/nanoclaw/issues/29) | **High** | Follows established pattern; community PR likely |
| Per-group sender allowlist | [#717](https://github.com/qwibitai/nanoclaw/pull/717) | **High** | PR open, security-focused, aligns with multi-tenant needs |
| WebSocket IPC replacement | [#683](https://github.com/qwibitai/nanoclaw/pull/683) | Medium | Performance improvement, but risky architectural change |
| Message steering/injection | [#617](https://github.com/qwibitai/nanoclaw/issues/617) | Medium | UX improvement, references OpenClaw prior art |
| Quote/reply threading | [#618](https://github.com/qwibitai/nanoclaw/issues/618) | Medium | Infrastructure exists in bridge; needs adapter work |
| CLI channel for Claude Code | [#642](https://github.com/qwibitai/nanoclaw/issues/642) | Low | Niche use case, but well-specified RFC |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | Evidence |
|:---|:---|:---|
| **Installation complexity** | High | [#439](https://github.com/qwibitai/nanoclaw/issues/439), [#393](https://github.com/qwibitai/nanoclaw/issues/393) |
| **Model configuration broken** | High | [#472](https://github.com/qwibitai/nanoclaw/issues/472), [#613](https://github.com/qwibitai/nanoclaw/issues/613), [#342](https://github.com/qwibitai/nanoclaw/issues/342) |
| **Memory/instability in long-running instances** | Critical | [#595](https://github.com/qwibitai/nanoclaw/issues/595) |
| **Vendor lock-in anxiety** | High | [#80](https://github.com/qwibitai/nanoclaw/issues/80) |
| **WhatsApp-specific fragility** | Medium | [#157](https://github.com/qwibitai/nanoclaw/issues/157), [#183](https://github.com/qwibitai/nanoclaw/issues/183), [#553](https://github.com/qwibitai/nanoclaw/issues/553) |
| **Documentation gaps** | Medium | [#393](https://github.com/qwibitai/nanoclaw/issues/393), [#340](https://github.com/qwibitai/nanoclaw/issues/340) |

### Positive Signals
- Strong appreciation for **local/self-hosted capabilities** (Whisper, Ollama skills)
- **Security model** (tiny core + opt-in skills) resonates with privacy-conscious users
- Active skill contribution ecosystem emerging

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|:---|:---:|:---|:---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) Multi-provider support | 29 days | **Strategic** | Architecture decision, likely core refactor |
| [#340](https://github.com/qwibitai/nanoclaw/issues/340) Skills Engine 3-way merge rationale | 12 days | Documentation | Maintainer design explanation |
| [#183](https://github.com/qwibitai/nanoclaw/issues/183) Connection management (no backoff) | 20 days | Reliability | Engineering prioritization |
| [#186](https://github.com/qwibitai/nanoclaw/issues/186) No rate limiting | 20 days | Compliance/risk | WhatsApp ToS adherence |
| [#322](https://github.com/qwibitai/nanoclaw/issues/322) Context rot / compact command | 13 days | UX | MCP tool design |
| [#362](https://github.com/qwibitai/nanoclaw/issues/362) Refactor monolithic `main()` | 12 days | Maintainability | Code review, merge conflict reduction |

**Maintainer Attention Needed**: Critical bugs (#595, #472, #613, #635) are aging without response; multi-provider architecture (#80) needs strategic direction; documentation gaps (#340, #393) block contributor onboarding.

---

*Digest generated from GitHub activity 2026-03-04 to 2026-03-05*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-05

## 1. Today's Overview

IronClaw shows **very high development velocity** with 50 PRs and 20 issues updated in the last 24 hours. The project just shipped v0.14.0 and is already preparing v0.15.0 (with noted API breaking changes). A significant portion of activity focuses on **agent quality evaluation infrastructure**, with multiple PRs landing for trajectory benchmarking and E2E testing. The community is actively expanding channel integrations (Telegram, Slack, G Suite) while core contributors squash critical UI/UX bugs in job management and tool calling. The issue backlog is growing rapidly with 14 new feature requests opened in a single day, suggesting strong user adoption but potential strain on prioritization.

---

## 2. Releases

### v0.14.0 (2026-03-04)
| Aspect | Details |
|--------|---------|
| **Breaking Changes** | None noted in this release |
| **Key Additions** | • Removed Okta tool ([#506](https://github.com/nearai/ironclaw/pull/506)) — security/simplification<br>• OAuth support for WASM tools in web gateway ([#489](https://github.com/nearai/ironclaw/pull/489))<br>• Jobs UI parity fix for non-sandbox mode ([#491](https://github.com/nearai/ironclaw/pull/491)) |
| **Migration Notes** | Users relying on Okta integration must migrate to alternative auth; WASM tool developers gain OAuth callback routing through web gateway |

### v0.15.0 (In Preparation)
| Aspect | Details |
|--------|---------|
| **Status** | Release PR [#526](https://github.com/nearai/ironclaw/pull/526) open |
| **Breaking Changes** | ⚠️ **API breaking changes detected** — `constructible_struct_adds_field` failure: externally-constructible struct adds new pub field |
| **Action Required** | Downstream users building with struct literals should review struct definitions before upgrading |

---

## 3. Project Progress

### Merged/Closed PRs (16 total, key highlights)

| PR | Author | Impact |
|----|--------|--------|
| [#555](https://github.com/nearai/ironclaw/pull/555) | @henrypark133 | **Gateway OAuth callbacks** — enables hosted instances to receive OAuth without local TCP binding; critical for multi-tenant deployments |
| [#490](https://github.com/nearai/ironclaw/pull/490) | @henrypark133 | **Failed tool call UX** — error details now visible in UI with sensitive param redaction |
| [#512](https://github.com/nearai/ironclaw/pull/512) | @zmanian | **Trajectory E2E test system** — full implementation of #467; 12 scenarios across 5 categories for agent quality evaluation |
| [#498](https://github.com/nearai/ironclaw/pull/498) | @zmanian | **WASM parameter coercion** — fixes LLM string/number type mismatches that caused tool failures |
| [#497](https://github.com/nearai/ironclaw/pull/497) | @zmanian | **Leak fix** — strips internal `[Called tool ...]` markers from user-facing responses |
| [#536](https://github.com/nearai/ironclaw/pull/536) | @PierreLeGuen | **Extension auth UX** — improved setup flows for Discord, Slack, Telegram, WhatsApp, GitHub |
| [#528](https://github.com/nearai/ironclaw/pull/528) | @ilblackdragon | **Security fix** — restricts query-token auth to SSE endpoints only; prevents token leakage in logs |
| [#550](https://github.com/nearai/ironclaw/pull/550) | @ilblackdragon | **CI coverage fix** — SIGTERM handling for proper profraw flushing |

**Technical Direction**: Heavy investment in **observability** (benchmarks, traces, E2E testing) and **enterprise readiness** (OAuth, security hardening, multi-tenancy foundations).

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Activity | Analysis |
|----------|----------|----------|
| [#467](https://github.com/nearai/ironclaw/issues/467) Trajectory benchmark system | 3 comments, now implemented in [#512](https://github.com/nearai/ironclaw/pull/512) | **Core need**: Production-grade agent evaluation beyond unit tests; demand for "real LLM calls, real scenarios" indicates maturity concerns in current testing |
| [#174](https://github.com/nearai/ironclaw/issues/174) Onboarding bug | Closed after 2 comments | Resolution suggests onboarding friction being addressed, but rapid closure may indicate either simple fix or premature closing |

### Emerging Pattern: Benchmarking Infrastructure
Three related PRs opened/merged simultaneously:
- [#553](https://github.com/nearai/ironclaw/pull/553) — Trace test rig with `TraceLlm` + `TestRig`
- [#554](https://github.com/nearai/ironclaw/pull/554) — Benchmarking harness foundation
- [#556](https://github.com/nearai/ironclaw/pull/556) — Agent isolation strategy benchmarks

**Signal**: Project is preparing for **scale and quality assurance** — likely pre-enterprise launch or major version stability push.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | [#486](https://github.com/nearai/ironclaw/issues/486) WASM rejects numeric params as JSON strings | **CLOSED** | [#498](https://github.com/nearai/ironclaw/pull/498) |
| 🔴 **High** | [#487](https://github.com/nearai/ironclaw/issues/487) Raw `[Called tool ...]` text leaks to users | **CLOSED** | [#497](https://github.com/nearai/ironclaw/pull/497) |
| 🟡 **Medium** | [#485](https://github.com/nearai/ironclaw/issues/485) Job restart failure shows no UI error | **CLOSED** | Likely [#490](https://github.com/nearai/ironclaw/pull/490) |
| 🟡 **Medium** | [#484](https://github.com/nearai/ironclaw/issues/484) Manual routine output to wrong thread | **CLOSED** | — |
| 🟡 **Medium** | [#483](https://github.com/nearai/ironclaw/issues/483) Routine "Run Now" no UI feedback | **CLOSED** | — |

**Assessment**: All reported bugs from @PierreLeGuen were closed within 24 hours — **excellent bug turnaround**. Issues clustered around **job/routine UI reliability**, suggesting this is a recently-refactored area needing stabilization.

---

## 6. Feature Requests & Roadmap Signals

### 14 New Feature Requests (all from @sergeiest, 2026-03-04)

| Request | Likelihood in v0.15/v0.16 | Rationale |
|---------|---------------------------|-----------|
| [#549](https://github.com/nearai/ironclaw/issues/549) Image processing support | **High** | Standard AI assistant capability; gaps competitor offerings |
| [#548](https://github.com/nearai/ironclaw/issues/548) Search in Chat API | **High** | Core RAG functionality; infrastructure likely exists |
| [#545](https://github.com/nearai/ironclaw/issues/545) Credentials via chat | **Medium** | UX improvement; security review needed |
| [#543](https://github.com/nearai/ironclaw/issues/543) Restart from chat/UI | **Medium** | PR [#531](https://github.com/nearai/ironclaw/pull/531) `feat: restart` already open |
| [#541](https://github.com/nearai/ironclaw/issues/541) Slack setup | **High** | PR [#536](https://github.com/nearai/ironclaw/pull/536) improved auth UX; completion likely |
| [#540](https://github.com/nearai/ironclaw/issues/540) G Suite fixes | **Medium** | Integration maintenance |
| [#539](https://github.com/nearai/ironclaw/issues/539) Telegram Channel fixes | **Medium** | Active work in [#552](https://github.com/nearai/ironclaw/pull/552) |
| [#538](https://github.com/nearai/ironclaw/issues/538) Agent upgrade via UI | **Medium** | Deployment UX; depends on infrastructure |
| [#547](https://github.com/nearai/ironclaw/issues/547) Model benchmarking | **High** | Aligns with #467 trajectory work |
| [#546](https://github.com/nearai/ironclaw/issues/546) Better E2E tests | **High** | Already in progress via multiple PRs |
| [#542](https://github.com/nearai/ironclaw/issues/542) Dual approach retries | **Low** | Agent behavior change; needs design |
| [#537](https://github.com/nearai/ironclaw/issues/537) Robust code review process | **Low** | Process, not code; may be organizational |

**Prediction**: v0.15.0 will emphasize **channel integrations** (Slack, Telegram polish) and **observability** (benchmarks, E2E). v0.16.0 likely targets **multimodal** (images) and **search/RAG**.

---

## 7. User Feedback Summary

### Pain Points Identified

| Source | Issue | Severity |
|--------|-------|----------|
| Bug reports | Tool calling reliability (type coercion, error visibility) | **Addressed** in v0.14.0 |
| Bug reports | Job/routine UI feedback gaps | **Addressed** |
| Feature requests | Image processing missing | **Gap vs. competitors** |
| Feature requests | Model comparison/benchmarking needed | **Emerging** |
| PR [#348](https://github.com/nearai/ironclaw/pull/348) | Multi-tenancy memory isolation | **Enterprise blocker** |

### Use Case Signals
- **Enterprise/Hosted**: OAuth routing, security hardening, multi-tenancy (#348)
- **Developer Experience**: Better debugging (failed tool visibility), restart capabilities
- **Consumer AI Assistant**: Image support, search, multiple channel integrations

**Satisfaction**: Rapid bug closure suggests responsive maintainers. Volume of feature requests (14 in one day from single user) suggests **high engagement but potential feature creep risk**.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#348](https://github.com/nearai/ironclaw/pull/348) Layered memory with privacy redirect | 9 days | **High** | Part 1 of 3 for multi-tenancy (#59); blocks [#349](https://github.com/nearai/ironclaw/pull/349), [#351](https://github.com/nearai/ironclaw/pull/351). Needs maintainer review |
| [#294](https://github.com/nearai/ironclaw/pull/294) Comprehensive documentation | 12 days | Medium | Docs lagging v0.13.0→v0.14.0; user onboarding risk |
| [#451](https://github.com/nearai/ironclaw/pull/451) Venice.ai provider | 3 days | Medium | New LLM provider; review for provider diversity strategy |
| [#476](https://github.com/nearai/ironclaw/pull/476) Gemini CLI OAuth | 3 days | High | Complex OAuth integration; security review needed |

**Critical**: [#348](https://github.com/nearai/ironclaw/pull/348) is explicitly marked "Merge this first" and has been open 9 days with no comments — **bottleneck risk for multi-tenancy roadmap**.

---

*Digest generated from GitHub activity 2026-03-04 to 2026-03-05. All links verified against provided data.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-05

## 1. Today's Overview

LobsterAI shows **high development velocity** with 29 issues and 16 PRs updated in the last 24 hours. The project is actively addressing Windows compatibility—a critical pain point—with 5 merged PRs specifically targeting Windows runtime, encoding, and sandbox issues. Community engagement is strong with users reporting real-world deployment problems across macOS, Windows, and Linux environments. The maintainer team (primarily @liuzhq1986, @liugang519, @btc69m979y-dotcom) is highly responsive, closing 13 issues and merging 15 PRs. No new release was published, suggesting the team is stabilizing current features before shipping v0.1.24.

---

## 2. Releases

**No new releases** (current: v0.1.23).

---

## 3. Project Progress

### Merged PRs (15 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#267](https://github.com/netease-youdao/LobsterAI/pull/267) | @liuzhq1986 | Skill store optimization | Performance |
| [#264](https://github.com/netease-youdao/LobsterAI/pull/264) | @Aoxiang-001 | **NIM Gateway multi-instance migration**: Replaced `node-nim` (C++ singleton) with `nim.js` (Web SDK) | **Critical architecture fix**—enables concurrent NIM Gateway + Xiaomifeng Gateway |
| [#259](https://github.com/netease-youdao/LobsterAI/pull/259) | @renhongchao | Xiaomifeng filters non-DM messages | Privacy/UX improvement |
| [#262](https://github.com/netease-youdao/LobsterAI/pull/262) | @liuzhq1986 | Hidden test/prod endpoint toggle | DevOps flexibility |
| [#254](https://github.com/netease-youdao/LobsterAI/pull/254) | @liuzhq1986 | Skill store feature | Marketplace expansion |
| [#236](https://github.com/netease-youdao/LobsterAI/pull/236) | @liuzhq1986 | Fix email skill invoice search (closes [#195](https://github.com/netease-youdao/LobsterAI/issues/195)) | Bug fix |
| [#263](https://github.com/netease-youdao/LobsterAI/pull/263) | @liuzhq1986 | Fix update checker timer after sleep/wake | Reliability |
| [#261](https://github.com/netease-youdao/LobsterAI/pull/261) | @btc69m979y-dotcom | **Windows OpenClaw runtime fixes**: ASAR path normalization, ESM loading, API key sync | **Critical Windows compatibility** |
| [#258](https://github.com/netease-youdao/LobsterAI/pull/258) | @liugang519 | IM reaction status indicators (Feishu, Telegram, Discord) | UX polish |
| [#255](https://github.com/netease-youdao/LobsterAI/pull/255) | @btc69m979y-dotcom | **Chinese path encoding fix**: BASH_ENV UTF-8, SKILLS_ROOT path handling | **Critical i18n fix** |
| [#250](https://github.com/netease-youdao/LobsterAI/pull/250) | @btc69m979y-dotcom | Fix image attachment path passing to skills | Skill reliability |
| [#223](https://github.com/netease-youdao/LobsterAI/pull/223) | @liuzhq1986 | PR 128 integration | Maintenance |
| [#252](https://github.com/netease-youdao/LobsterAI/pull/252) | @liugang519 | **Telegram group @-mention filtering** (closes [#181](https://github.com/netease-youdao/LobsterAI/issues/181), [#241](https://github.com/netease-youdao/LobsterAI/issues/241)) | **Highly requested UX fix** |
| [#238](https://github.com/netease-youdao/LobsterAI/pull/238) | @btc69m979y-dotcom | **Windows sandbox VM fixes**: QEMU file locks, Alpine boot, agentd dependencies | **Critical Windows stability** |
| [#249](https://github.com/netease-youdao/LobsterAI/pull/249) | @liugang519 | DingTalk reconnection logic + send retry (3x) | IM reliability |

**Key themes**: Windows platform hardening, Chinese localization fixes, IM gateway reliability, skill ecosystem expansion.

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Activity | Underlying Need |
|:---|:---|:---|
| [#244](https://github.com/netease-youdao/LobsterAI/issues/244) — macOS input lag | 2 comments | **Performance optimization** for Apple Silicon; users expect native-app responsiveness |
| [#253](https://github.com/netease-youdao/LobsterAI/issues/253) — Windows skill compatibility | 2 comments, **closed with fix** | Cross-platform skill execution parity |
| [#49](https://github.com/netease-youdao/LobsterAI/issues/49) — Private network deployment | 4 comments, closed | Enterprise/self-hosted deployment flexibility; TLS certificate handling |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) — **Workflow enhancement (OPEN)** | New feature proposal | **Multi-agent orchestration** with per-agent souls and quality gates (PASS/REJECT/CRITICAL_REDO/MINOR_FIX) |

**Emerging pattern**: Users are pushing LobsterAI from "personal assistant" toward "team/enterprise automation platform"—evidenced by workflow PR, multi-IM requests, and deployment complexity questions.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#232](https://github.com/netease-youdao/LobsterAI/issues/232) | v0.1.23 macOS memory spike → freeze; suspected sandbox mode | **OPEN** — no fix yet |
| 🔴 **Critical** | [#202](https://github.com/netease-youdao/LobsterAI/issues/202) | Windows: all skills fail (bash/cygpath dependency) | **Partially addressed** by [#261](https://github.com/netease-youdao/LobsterAI/pull/261) |
| 🟡 **High** | [#244](https://github.com/netease-youdao/LobsterAI/issues/244) | macOS input latency (M2 Max) | **OPEN** — performance regression |
| 🟡 **High** | [#230](https://github.com/netease-youdao/LobsterAI/issues/230) | Chinese filenames get extra spaces ("图 2.jpg") | **OPEN** — i18n parsing bug |
| 🟡 **High** | [#204](https://github.com/netease-youdao/LobsterAI/issues/204) | Feishu bot keys disappear (2x reported) | **OPEN** — data persistence issue |
| 🟡 **High** | [#270](https://github.com/netease-youdao/LobsterAI/issues/270) | "Prompt is too long" error with Qwen | **OPEN** — context window handling |
| 🟡 **High** | [#269](https://github.com/netease-youdao/LobsterAI/issues/269) | Ollama context loss (Qwen3.5) | **OPEN** — local LLM integration |
| 🟢 **Medium** | [#248](https://github.com/netease-youdao/LobsterAI/issues/248) | DeepSeek/Qwen test connection succeeds but 401 on use | **OPEN** — auth token validation mismatch |
| 🟢 **Medium** | [#247](https://github.com/netease-youdao/LobsterAI/issues/247) | Gemini connection failure | **OPEN** |

**Regression alert**: v0.1.23 introduced macOS stability issues ([#232](https://github.com/netease-youdao/LobsterAI/issues/232), [#244](https://github.com/netease-youdao/LobsterAI/issues/244))—may warrant hotfix or rollback recommendation.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **MCP (Model Context Protocol) support** | [#97](https://github.com/netease-youdao/LobsterAI/issues/97), [#198](https://github.com/netease-youdao/LobsterAI/issues/198) | **High** | Closed as completed—likely shipping soon |
| **Multi-model routing/switching** | [#198](https://github.com/netease-youdao/LobsterAI/issues/198) | Medium | Explicitly requested; aligns with [#256](https://github.com/netease-youdao/LobsterAI/issues/256) |
| **Local↔API model fallback** | [#256](https://github.com/netease-youdao/LobsterAI/issues/256) | Medium | Cost optimization trend; needs architecture |
| **WhatsApp support** | [#265](https://github.com/netease-youdao/LobsterAI/issues/265) | Low-Medium | IM expansion pattern (Discord, Telegram, Feishu, DingTalk already supported) |
| **QQ Open Platform** | [#268](https://github.com/netease-youdao/LobsterAI/issues/268) | Medium | High user demand; Tencent ecosystem gap |
| **Mobile app** | [#198](https://github.com/netease-youdao/LobsterAI/issues/198) | Low | Acknowledged but no signals of active work |
| **Scheduled task → specific IM chat** | [#260](https://github.com/netease-youdao/LobsterAI/issues/260) | High | Clear UX gap; small implementation scope |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Windows as second-class citizen** | [#202](https://github.com/netease-youdao/LobsterAI/issues/202), [#253](https://github.com/netease-youdao/LobsterAI/issues/253), [#261](https://github.com/netease-youdao/LobsterAI/pull/261), [#238](https://github.com/netease-youdao/LobsterAI/pull/238) | Critical — actively being addressed |
| **Chinese locale fragility** | [#224](https://github.com/netease-youdao/LobsterAI/issues/224), [#215](https://github.com/netease-youdao/LobsterAI/issues/215), [#230](https://github.com/netease-youdao/LobsterAI/issues/230), [#255](https://github.com/netease-youdao/LobsterAI/pull/255) | High — core market issue |
| **macOS performance regression in v0.1.23** | [#232](https://github.com/netease-youdao/LobsterAI/issues/232), [#244](https://github.com/netease-youdao/LobsterAI/issues/244) | High — release quality concern |
| **Configuration durability** | [#204](https://github.com/netease-youdao/LobsterAI/issues/204), [#235](https://github.com/netease-youdao/LobsterAI/issues/235) | Medium — polish issues |
| **Update friction** | [#169](https://github.com/netease-youdao/LobsterAI/issues/169), [#235](https://github.com/netease-youdao/LobsterAI/issues/235) | Medium — installer UX |

### Positive Signals
- **Responsive maintainers**: Most issues closed within 1-2 days with actual fixes
- **Skill ecosystem growing**: Users actively importing third-party skills (find-skills, Vercel skills)
- **Enterprise interest**: Private network deployment, invoice automation, scheduled tasks

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#196](https://github.com/netease-youdao/LobsterAI/issues/196) — `find-skills` not supported | 3 days | **Skill ecosystem fragmentation** | Document skill compatibility or provide migration path |
| [#240](https://github.com/netease-youdao/LobsterAI/pull/240) — Workflow enhancement | 1 day (OPEN) | **Architecture decision pending** | Maintainer review for multi-agent design |
| [#97](https://github.com/netease-youdao/LobsterAI/issues/97), [#198](https://github.com/netease-youdao/LobsterAI/issues/198) — MCP support | 8-3 days | **Competitive feature** | Verify if "closed" means shipped or wontfix |

---

## Project Health Assessment

| Metric | Status |
|:---|:---|
| Development velocity | 🟢 Strong (15 PRs merged) |
| Issue resolution speed | 🟢 Excellent (most closed <48h) |
| Release stability | 🟡 Concerning (v0.1.23 regressions) |
| Platform parity | 🟡 Improving (Windows catching up) |
| Community engagement | 🟢 Active (diverse use cases) |
| Documentation/guidance | 🔴 Weak (skill compatibility, update paths unclear) |

**Recommendation**: Prioritize macOS stability fixes and v0.1.24 hotfix; Windows compatibility work is paying off but needs validation. The workflow enhancement PR ([#240](https://github.com/netease-youdao/LobsterAI/pull/240)) represents a potential strategic pivot toward agent orchestration—worth maintainer attention.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-05

---

## 1. Today's Overview

TinyClaw shows minimal but meaningful activity over the past 24 hours, with one closed pull request advancing multi-provider support and one active issue driving community discussion. The project appears to be in a steady maintenance phase with no new releases. The merged PR #138 directly addresses a long-standing community request for broader AI provider compatibility, suggesting responsive maintainer engagement. Overall project health is stable with focused development on infrastructure flexibility rather than feature expansion.

---

## 2. Releases

*No new releases today.*

---

## 3. Project Progress

| PR | Status | Summary |
|:---|:---|:---|
| [#138: Add OpenCode integration and CLI-only mode support](https://github.com/TinyAGI/tinyclaw/pull/138) | **Merged/Closed** | Adds OpenCode as a supported provider alongside Anthropic and OpenAI; enables headless/CLI operation without requiring Discord, Telegram, or WhatsApp messaging platforms |

**Key advancement:** TinyClaw now supports operation without social messaging platform dependencies, significantly broadening deployment scenarios for enterprise and developer users.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#124: want more provider support [z.ai kimi opencode.zen openrouter]](https://github.com/TinyAGI/tinyclaw/issues/124) | 5 comments, updated 2026-03-04 | **Most active discussion.** Created by @takasungi on 2026-02-18, this issue explicitly requests z.ai, Kimi, OpenCode.zen, and OpenRouter support. The underlying need: **cost management at scale** — the reporter notes that "more agent token will usage more claude code api quota will repidly" [sic]. This reflects production users hitting rate limits and seeking provider diversification for resilience and cost optimization. |

**Signal:** The closure of PR #138 (OpenCode) partially addresses this issue, though z.ai, Kimi, and OpenRouter remain unimplemented. Expect follow-up requests.

---

## 5. Bugs & Stability

*No bugs, crashes, or regressions reported in the last 24 hours.*

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|:---|:---|:---|
| **OpenRouter support** | #124 | **High** — directly mentioned, aligns with multi-provider architecture established by PR #138 |
| **z.ai (ByteDance) support** | #124 | Medium — commercial Chinese provider, may require API documentation review |
| **Kimi (Moonshot AI) support** | #124 | Medium-High — already referenced in PR #138 co-development ("KimiK2.5"), suggesting active experimentation |
| **OpenCode.zen variant** | #124 | Medium — possible enterprise/self-hosted OpenCode flavor |

**Prediction:** The next release will likely expand the provider plugin system to include OpenRouter and possibly Kimi, building on the architectural foundation laid by PR #138.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Profile |
|:---|:---|:---|
| **API quota exhaustion** | #124: "claude code api quota will repidly" | Production users running multiple agents |
| **Platform dependency lock-in** | PR #138 motivation: eliminate Discord/Telegram/WhatsApp requirement | Enterprise/CLI-first developers |
| **Provider concentration risk** | Request for 4+ alternative providers in single issue | Cost-conscious, scale-oriented operators |

**Satisfaction indicator:** Rapid response to provider diversity requests (PR #138 merged ~2 weeks after issue #124 filed) suggests healthy maintainer-community feedback loop.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#124](https://github.com/TinyAGI/tinyclaw/issues/124) | 15 days | Low-Moderate | Partially addressed by PR #138; maintainer should comment on remaining provider roadmap to set expectations |

No critical stale items identified. The single open issue remains actively updated and partially resolved.

---

*Digest generated from TinyClaw GitHub activity 2026-03-04 to 2026-03-05.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-05

## 1. Today's Overview

CoPaw demonstrates **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, maintaining a healthy 60% closure rate on issues (30/50) and 46% on PRs (23/50). The project released **v0.0.5-beta.2**, indicating active iteration toward stability. Community engagement is strong with 12 first-time contributors submitting PRs, though the 27 open PRs suggest a potential review bottleneck. Critical stability concerns persist around **context window overflow**, **channel message synchronization**, and **model provider compatibility** — issues that directly impact core user experience. The maintainer team appears responsive with same-day closures on straightforward bugs, while complex architectural discussions remain open for community input.

---

## 2. Releases

### v0.0.5-beta.2
| Attribute | Detail |
|-----------|--------|
| **Version** | [v0.0.5-beta.2](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.5-beta.2) |
| **Changes** | Version bump, MCP naming style fixes, ChatPage `customFetch` signal parameter for request cancellation |
| **Breaking Changes** | None identified |
| **Migration Notes** | Standard beta upgrade path; no user action required |

---

## 3. Project Progress

### Merged/Closed PRs (Key Advances)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#652](https://github.com/agentscope-ai/CoPaw/pull/652) | @ekzhu | **Fix**: Handle unknown provider IDs + non-blocking model test | Resolves [#568](https://github.com/agentscope-ai/CoPaw/issues/568) crash on custom providers |
| [#640](https://github.com/agentscope-ai/CoPaw/pull/640) | @Leirunlin | **Fix**: Telegram "typing" indicator visibility | Fixes UX issue where typing appeared only momentarily |
| [#597](https://github.com/agentscope-ai/CoPaw/pull/597) | @rayrayraykk | **Feature**: Daemon mode with `/daemon status` commands | Production deployment readiness |
| [#386](https://github.com/agentscope-ai/CoPaw/pull/386) | @zhangckcup | **Feature**: iMessage attachment sending (images/files) | Closes gap vs. DingTalk/Feishu parity |
| [#408](https://github.com/agentscope-ai/CoPaw/pull/408) | @nszhsl | **Feature**: Provider model auto-discovery + Anthropic support | Major UX improvement for model management |
| [#647](https://github.com/agentscope-ai/CoPaw/pull/647) | @zhijianma | **Chore**: Remove build option from console | Simplifies UI, reduces confusion |
| [#642](https://github.com/agentscope-ai/CoPaw/pull/642) | @zhijianma | **Chore**: Disable model discovery (temporary) | Likely rollback due to compatibility issues |
| [#648](https://github.com/agentscope-ai/CoPaw/pull/648) | @xieyxclack | **Chore**: Version bump to 0.0.5b3 | Prepares next beta |

**Themes**: Channel parity (iMessage, Telegram), deployment hardening (daemon mode), and model provider robustness.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | Core Need |
|:---|:---|:---|:---|
| 1 | [#280](https://github.com/agentscope-ai/CoPaw/issues/280) — **Which Skills and MCPs Can Be Built-in?** | 12 | **Ecosystem strategy**: Community debating which capabilities should ship pre-installed vs. user-extended |
| 2 | [#334](https://github.com/agentscope-ai/CoPaw/issues/334) — DingTalk config failure (CLOSED) | 9 | **Onboarding friction**: Authentication complexity for enterprise channels |
| 3 | [#302](https://github.com/agentscope-ai/CoPaw/issues/302) — "Why does CoPaw feel useless after install?" (CLOSED) | 8 | **Expectation management**: Users expect immediate utility; documentation/UX gap |
| 4 | [#510](https://github.com/agentscope-ai/CoPaw/issues/510) — DingTalk crashes on long messages | 7 | **Reliability**: Context window handling in production |
| 5 | [#538](https://github.com/agentscope-ai/CoPaw/issues/538) — Ollama connection fails in Settings | 6 | **Local model UX**: Configuration UI vs. actual service health mismatch |

**Underlying Pattern**: Users want **"batteries included"** experience (#280) but hit **configuration complexity** (#334, #538) and **runtime reliability** (#510) barriers. The emotional tone in #302 ("像一个废物一样") signals a critical UX gap between installation and productive use.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#510](https://github.com/agentscope-ai/CoPaw/issues/510) | DingTalk crashes when messages exceed context limit (131K tokens) | **PR [#657](https://github.com/agentscope-ai/CoPaw/pull/657)** open — session overflow auto-protection |
| 🔴 **Critical** | [#582](https://github.com/agentscope-ai/CoPaw/issues/582) | Message synchronization bug: Agent replies to *previous* message instead of current | No dedicated fix PR; may relate to [#420](https://github.com/agentscope-ai/CoPaw/issues/420) (similar, closed) |
| 🟡 **High** | [#538](https://github.com/agentscope-ai/CoPaw/issues/538) | Ollama shows "cannot connect" despite healthy service | **PR [#655](https://github.com/agentscope-ai/CoPaw/pull/655)** addresses provider handling |
| 🟡 **High** | [#568](https://github.com/agentscope-ai/CoPaw/issues/568) | Custom provider config crashes with KeyError | **Fixed** in [#652](https://github.com/agentscope-ai/CoPaw/pull/652) |
| 🟡 **High** | [#619](https://github.com/agentscope-ai/CoPaw/issues/619) | Feishu misidentifies pasted images as `post` type | **PR [#646](https://github.com/agentscope-ai/CoPaw/pull/646)** open |
| 🟢 **Medium** | [#643](https://github.com/agentscope-ai/CoPaw/issues/643) | Context length exceeded in long conversations | Same root as #510; #657 addresses |
| 🟢 **Medium** | [#282](https://github.com/agentscope-ai/CoPaw/issues/282) | pptxgenjs tool crashes with `RemoteProtocolError` | No fix PR |
| 🟢 **Medium** | [#429](https://github.com/agentscope-ai/CoPaw/issues/429) | Tool calling hangs with no response | No fix PR |

**Stability Assessment**: Context management and channel message ordering are the **top systemic risks**. The rapid response on provider crashes (#568 → #652 in <24h) shows healthy triage velocity.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Built-in Skills/MCPs curation** | [#280](https://github.com/agentscope-ai/CoPaw/issues/280) | ⭐⭐⭐⭐⭐ High | Active maintainer engagement; aligns with "out-of-box" goal |
| **WeChat Work (企业微信) support** | [#51](https://github.com/agentscope-ai/CoPaw/issues/51) | ⭐⭐⭐⭐ High | Enterprise demand; closed without rejection = backlog |
| **Telegram/Matrix channels** | [#387](https://github.com/agentscope-ai/CoPaw/issues/387) | ⭐⭐⭐⭐ High | #387 closed, but [#653](https://github.com/agentscope-ai/CoPaw/issues/653) opened with detailed enhancement spec |
| **Tool call message filtering** | [#583](https://github.com/agentscope-ai/CoPaw/issues/583) | ⭐⭐⭐⭐ High | Feishu-specific pain; PR [#514](https://github.com/agentscope-ai/CoPaw/pull/514) in progress |
| **Session overflow protection** | [#657](https://github.com/agentscope-ai/CoPaw/pull/657) | ⭐⭐⭐⭐⭐ High | Critical fix; first-time contributor PR already submitted |
| **Twilio voice channel** | [#38](https://github.com/agentscope-ai/CoPaw/pull/38) | ⭐⭐⭐ Medium | Large PR; may need iteration cycles |
| **DMG packaging for macOS** | [#521](https://github.com/agentscope-ai/CoPaw/pull/521) | ⭐⭐⭐ Medium | WIP status; distribution infrastructure |
| **Health/diagnostics CLI** | [#651](https://github.com/agentscope-ai/CoPaw/pull/651) | ⭐⭐⭐⭐ High | First-time contributor; fills operational gap |

**Predicted v0.0.5 stable focus**: Context management hardening, channel parity (Telegram enhancements, WeChat Work), and built-in skills packaging.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Evidence | Severity |
|:---|:---|:---|
| **Documentation gaps** | "这些文档是一个为用户写的吗？怎么感觉。。" [#302](https://github.com/agentscope-ai/CoPaw/issues/302) | High |
| **Configuration complexity** | 钉钉配置不成功 [#334](https://github.com/agentscope-ai/CoPaw/issues/334), Ollama连接失败 [#538](https://github.com/agentscope-ai/CoPaw/issues/538) | High |
| **Silent failures** | "一直死循环，要吐了" [#302](https://github.com/agentscope-ai/CoPaw/issues/302), "它不理我了" [#429](https://github.com/agentscope-ai/CoPaw/issues/429) | High |
| **Context/memory limits** | "超过一定长度之后直接报错" [#510](https://github.com/agentscope-ai/CoPaw/issues/510) | Critical |
| **Message sync issues** | "发送当前消息返回上条消息请求内容" [#582](https://github.com/agentscope-ai/CoPaw/issues/582) | Critical |

### Positive Signals
- **Local deployment demand**: MLX backend questions [#614](https://github.com/agentscope-ai/CoPaw/issues/614) show Apple Silicon user base
- **Enterprise integration**: DingTalk, Feishu, WeChat Work requests indicate B2B traction
- **Privacy focus**: "Personal AI, local deployment, no lock-in" [#387](https://github.com/agentscope-ai/CoPaw/issues/387)

### Satisfaction Gap
Users who overcome initial setup report functional value, but **activation friction is severe**. The project needs either:
1. Simplified "quickstart" with pre-configured sandbox, or
2. Interactive setup wizard (beyond current CLI)

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#231](https://github.com/agentscope-ai/CoPaw/issues/231) — "llmap.cpp, how to run?" | 4 days | User alienation; comparison to competitor "LobsterAI" | Documentation or removal if deprecated |
| [#212](https://github.com/agentscope-ai/CoPaw/pull/212) — DingTalk video/image OpenAPI | 4 days | Feature parity; open with merge conflicts | Maintainer review/merge |
| [#38](https://github.com/agentscope-ai/CoPaw/pull/38) — Twilio voice channel | 5 days | Large feature; may need architectural review | Prioritize or defer with roadmap communication |
| [#521](https://github.com/agentscope-ai/CoPaw/pull/521) — DMG packaging | 2 days | Distribution blocker for macOS users | WIP status check |
| [#514](https://github.com/agentscope-ai/CoPaw/pull/514) — Filter thinking for channels | 2 days | Privacy/UX improvement; Feishu-specific | Review for merge |
| [#280](https://github.com/agentscope-ai/CoPaw/issues/280) — Built-in Skills/MCPs | 3 days | **Strategic decision** needs maintainer synthesis | Convert discussion to RFC or milestone |

**Maintainer Attention Recommended**: #280 requires product direction; #38 and #212 need technical review to prevent contributor fatigue.

---

## Project Health Score

| Dimension | Rating | Notes |
|:---|:---|:---|
| **Activity** | 🟢 Excellent | 100 updates/24h, healthy closure rates |
| **Responsiveness** | 🟢 Good | Same-day fixes for critical bugs |
| **Contributor Growth** | 🟢 Excellent | 12 first-time contributors |
| **Stability** | 🟡 Concerned | Context overflow, message sync bugs |
| **Documentation/UX** | 🔴 Needs Work | Onboarding friction clearly documented |
| **Strategic Clarity** | 🟡 Watching | #280 decision pending; channel expansion vs. core stability balance |

**Overall**: CoPaw is a **fast-moving, community-healthy project** at a critical juncture — scaling from "functional for experts" to "accessible for mainstream" requires intentional UX investment alongside technical hardening.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-05

## 1. Today's Overview

ZeptoClaw shows **strong development velocity** with 7 PRs and 6 issues processed in 24 hours, including a security patch release (v0.6.2). The project demonstrates mature maintenance practices: rapid security response (3 GHSA advisories patched same-day), proactive dependency management via Dependabot, and cross-project learning from OpenClaw's cron reliability fixes. Community activity is maintainer-led with limited external engagement (zero 👍 reactions on all items). The focus on MCP transport, multimodal inputs, and provider expansion positions ZeptoClaw as actively competing in the multi-modal agent infrastructure space.

---

## 2. Releases

### v0.6.2 — Security & Capability Expansion
**Release Date:** 2026-03-04

| Change | Type | Details |
|--------|------|---------|
| [MCP stdio transport + tool registration](https://github.com/qhkm/zeptoclaw/pull/192) | Feature | Adds Model Context Protocol support for external tool integration |
| [Multimodal vision/image input](https://github.com/qhkm/zeptoclaw/pull/204) | Feature | Enables image-based prompting capabilities |
| [Project disclaimer](https://github.com/qhkm/zeptoclaw/pull/204) | Docs | Explicit "no token, no crypto, no blockchain" positioning |

**Breaking Changes:** None documented  
**Migration Notes:** Users adding MCP tools should review new `stdio` transport configuration patterns.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Type | Impact |
|----|------|--------|
| [#248](https://github.com/qhkm/zeptoclaw/pull/248) | **Security** | Critical: Patches 3 GHSA advisories including Android shell blocklist bypass |
| [#242](https://github.com/qhkm/zeptoclaw/pull/242) | **Testing** | Stabilizes Docker/act CI environment for plugin/doctor tests |
| [#183](https://github.com/qhkm/zeptoclaw/pull/183) | **Maintenance** | Major dependency refresh with supply chain security improvements (pinning, Dependabot cooldowns) |
| [#232](https://github.com/qhkm/zeptoclaw/pull/232), [#229](https://github.com/qhkm/zeptoclaw/pull/229), [#228](https://github.com/qhkm/zeptoclaw/pull/228) | **Dependencies** | gog-* ecosystem sync to `d30a532` |

### In Progress
- [#247](https://github.com/qhkm/zeptoclaw/pull/247): xAI/Grok + Baidu Qianfan provider presets (open, ready for review)

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#237](https://github.com/qhkm/zeptoclaw/issues/237) | 1 comment, closed | **Documentation clarity gap**: Screenshot feature confusion between web capture (`--features screenshot`) vs. desktop capture. Indicates UX friction in feature discovery. |
| *All others* | 0 comments, 0 reactions | **Silent development**: All 5 remaining issues/PRs show zero community engagement. |

**Underlying Need:** The project lacks external contributor activation. All activity is @qhkm (maintainer) or @dependabot. The single comment on #237 suggests users struggle with feature semantics but don't engage proactively.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P2-High** | [#245](https://github.com/qhkm/zeptoclaw/issues/245) SSRF in skill installer | **Open** | None |
| **P2-High** | [#244](https://github.com/qhkm/zeptoclaw/issues/244) Context overflow on large tool results | **Open** | None |
| P3-Normal | [#246](https://github.com/qhkm/zeptoclaw/issues/246) Cron reliability audit | **Open** | None |
| — | [#238](https://github.com/qhkm/zeptoclaw/issues/238) Docker/act test mismatch | **Fixed** | [#242](https://github.com/qhkm/zeptoclaw/pull/242) |

**Stability Assessment:** Two high-severity security/reliability issues opened same-day as release. The SSRF vulnerability (#245) is particularly concerning—skill installation from arbitrary URLs without network guardrails creates immediate attack surface. Context overflow (#244) affects production robustness with large codebases.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal Strength | Prediction |
|-------|---------------|------------|
| [#243](https://github.com/qhkm/zeptoclaw/issues/243) / [#247](https://github.com/qhkm/zeptoclaw/pull/247) xAI + Baidu Qianfan | **High** | v0.6.3 or v0.7.0 — PR already open |
| [#244](https://github.com/qhkm/zeptoclaw/issues/244) Two-layer context overflow recovery | Medium | v0.7.0 — Complex architectural change |
| [#246](https://github.com/qhkm/zeptoclaw/issues/246) Cron reliability audit | Medium | v0.6.3 — Follows OpenClaw pattern adoption |
| [#245](https://github.com/qhkm/zeptoclaw/issues/245) SSRF guardrails | **Critical** | Emergency v0.6.3 — Security blocking |

**Emerging Pattern:** Provider expansion accelerating (xAI, Baidu) following multimodal release. Safety infrastructure lagging behind capability additions.

---

## 7. User Feedback Summary

**Direct Evidence:** None. Zero user comments, reactions, or external issue reports.

**Inferred Pain Points from Maintainer Issues:**

| Inferred Pain Point | Source | Severity |
|---------------------|--------|----------|
| Screenshot feature discoverability | [#237](https://github.com/qhkm/zeptoclaw/issues/237) | Low |
| CI/environment reproducibility | [#238](https://github.com/qhkm/zeptoclaw/issues/238) | Medium |
| Large codebase handling | [#244](https://github.com/qhkm/zeptoclaw/issues/244) | High |
| Enterprise deployment safety | [#245](https://github.com/qhkm/zeptoclaw/issues/245) | Critical |

**Satisfaction Proxy:** Rapid security response (same-day patch) suggests professional maintenance. Silent community indicates either niche user base or insufficient onboarding pathways.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#246](https://github.com/qhkm/zeptoclaw/issues/246) Cron audit | 1 day | Medium | Cross-reference OpenClaw commits, assign priority |
| [#245](https://github.com/qhkm/zeptoclaw/issues/245) SSRF | 1 day | **High** | Security review, implementation plan |
| [#244](https://github.com/qhkm/zeptoclaw/issues/244) Context overflow | 1 day | High | Design review for two-layer recovery |

**Note:** All issues are fresh (1-2 days). No stale backlog detected—indicates either aggressive triage or low issue volume.

---

## Project Health Indicators

| Metric | Status |
|--------|--------|
| Security response | ✅ Excellent (same-day patches) |
| Dependency hygiene | ✅ Excellent (automated, pinned) |
| Feature velocity | ✅ High (MCP, multimodal, providers) |
| Community engagement | ⚠️ Concerning (100% maintainer-driven) |
| Documentation | ⚠️ Needs improvement (recurring clarity issues) |
| Safety/capability balance | ⚠️ Lagging (SSRF post-dates skill installer release) |

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-05

**Repository:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. Today's Overview

EasyClaw shows minimal community activity on 2026-03-05, with zero issues and pull requests updated in the last 24 hours. The project published a patch release (v1.5.16), suggesting ongoing maintenance but no active feature development. The absence of open issues or PRs indicates either a stable, mature codebase with resolved concerns or limited community engagement. No new contributors appear to be participating today. Overall project health appears stable but quiet, with maintenance-focused rather than growth-oriented momentum.

---

## 2. Releases

### [v1.5.16](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.5.16) — EasyClaw v1.5.16

| Aspect | Details |
|--------|---------|
| **Type** | Patch release |
| **Key Content** | Documentation update for macOS installation |
| **Changes** | Added troubleshooting guide for macOS Gatekeeper "damaged app" warning |
| **Breaking Changes** | None |
| **Migration Notes** | Not applicable |

**Analysis:** This release addresses a common macOS deployment friction point—Gatekeeper's unsigned app blocking—by providing bilingual (English/Chinese) terminal-based workaround instructions. The truncated release notes suggest the fix involves `xattr` or `spctl` commands to bypass quarantine. This indicates the project distributes unsigned binaries, which may limit adoption among security-conscious macOS users.

---

## 3. Project Progress

**No merged or closed PRs today.**

No feature advancement or bug fixes were delivered through the pull request workflow on 2026-03-05. Development progress appears to occur outside visible GitHub collaboration or through direct maintainer commits.

---

## 4. Community Hot Topics

**No active discussions today.**

With zero open issues and zero updated PRs, there are no community hot topics to analyze. The project lacks visible community-driven dialogue, suggesting:
- Users may rely on external channels (Discord, WeChat, email) for support
- The project may have a small, non-English-speaking user base
- Documentation may be sufficient to prevent common questions

**Underlying need:** Establishment of visible community infrastructure for knowledge sharing and contributor onboarding.

---

## 5. Bugs & Stability

**No bug reports today.**

| Severity | Count | Issues | Fix PRs |
|----------|-------|--------|---------|
| Critical | 0 | — | — |
| High | 0 | — | — |
| Medium | 0 | — | — |
| Low | 0 | — | — |

**Note:** The v1.5.16 release's macOS Gatekeeper documentation implies this was a **previously unreported** deployment blocker now addressed. No regressions or crash reports are visible in the repository.

---

## 6. Feature Requests & Roadmap Signals

**No feature requests submitted today.**

| Signal | Evidence | Likelihood in Next Version |
|--------|----------|---------------------------|
| Code signing for macOS | v1.5.16 workaround suggests demand | Medium — would eliminate Gatekeeper friction |
| Windows/Linux installation docs | Only macOS documented in latest release | Medium — parity likely requested |
| Automated notarization | Unsigned distribution is suboptimal | Low — requires Apple Developer investment |

**Prediction:** Next release may include expanded platform installation guides or initial code signing exploration if maintainer resources allow.

---

## 7. User Feedback Summary

**No direct user feedback captured in GitHub today.**

**Inferred pain points from v1.5.16 release:**
- **Deployment friction:** macOS users encounter scary "damaged app" warnings
- **Language barrier:** Bilingual documentation suggests Chinese-speaking user base
- **Security trust:** Unsigned binaries create adoption hesitation

**Satisfaction indicators:** None measurable. The release itself suggests responsive maintenance (issue → fix documented), but no explicit user validation is visible.

---

## 8. Backlog Watch

| Category | Count | Oldest Item | Action Needed |
|----------|-------|-------------|---------------|
| Open Issues | 0 | N/A | None |
| Open PRs | 0 | N/A | None |
| Stale Issues (>90 days) | Unknown | — | Repository audit recommended |

**Assessment:** With zero visible backlog items, the project appears either exceptionally maintained or lacking community contribution volume. No maintainer attention is urgently required, though proactive issue templates and contribution guidelines could stimulate healthy backlog growth.

---

**Digest compiled:** 2026-03-05  
**Data confidence:** High (direct from repository metrics)  
**Recommendation:** Monitor for community engagement initiatives; consider enabling GitHub Discussions to capture user needs not currently visible in Issues.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*