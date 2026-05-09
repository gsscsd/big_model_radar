# OpenClaw 生态日报 2026-05-09

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-09 02:25 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [hermesagent](https://github.com/NousResearch/hermes-agent)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [librefang](https://github.com/librefang/librefang)
- [openfang](https://github.com/RightNow-AI/openfang)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报

**报告日期**：2026-05-09  
**项目**：openclaw/openclaw  
**数据范围**：过去 24 小时

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共产生 500 条 Issues 更新（285 新开/活跃，215 关闭）和 500 条 PR 更新（352 待合并，148 已合并）。社区聚焦于三方面核心问题：Docker 容器内 Skill 安装失败、Discord Gateway 连接稳定性、以及 ACP 运行时的一系列回归问题。今日最值得注意的是一个 **超大规模 SQLite 重构 PR**（#78595）已进入审查阶段，标志着项目存储架构的重要演进。整体健康度良好，但存在若干阻塞用户体验的回归问题需优先处理。

---

## 2. 版本发布

**今日无新版本发布**（Latest Release: 未提供）

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR 编号 | 标题 | 分类 | 状态 |
|---------|------|------|------|
| [#78595](https://github.com/openclaw/openclaw/pull/78595) | Refactor runtime state into SQLite | 核心架构 | 审查中 |
| [#79319](https://github.com/openclaw/openclaw/pull/79319) | fix(sessions): recover store from backup and tmp artifacts | 会话管理 | 审查中 |
| [#79519](https://github.com/openclaw/openclaw/pull/79519) | [codex] Support provider wildcard model visibility | 模型配置 | 审查中 |
| [#77991](https://github.com/openclaw/openclaw/pull/77991) | Subagents: preserve task under systemPromptOverride | 子代理 | 审查中 |
| [#79198](https://github.com/openclaw/openclaw/pull/79198) | refactor(plugins): expose loaded runtime metadata | 插件系统 | 审查中 |
| [#74235](https://github.com/openclaw/openclaw/pull/74235) | fix(googlechat): preserve thread reply target | Google Chat | 审查中 |
| [#79403](https://github.com/openclaw/openclaw/pull/79403) | fix(memory): isolate abort signal for preflight compaction | 内存管理 | 审查中 |
| [#79549](https://github.com/openclaw/openclaw/pull/79549) | fix(config): preserve absent keys on partial writes | 配置管理 | 审查中 |

**重大进展：SQLite 架构重构**

PR #78595 是一个 **XL 级别** 的大型重构，旨在将 OpenClaw 从分散的 JSON/JSONL/SQLite 混合存储模式迁移到统一类型化的 SQLite 存储模型。这是 #78096 路线图的核心组成部分，预计将显著改善：
- 状态一致性
- 数据持久化可靠性
- 会话恢复能力

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 状态 |
|------------|------|--------|-----|------|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | Bug: Skill install fails in Docker: `brew not installed` | 29 | 17 | OPEN |
| [#34810](https://github.com/openclaw/openclaw/issues/34810) | OpenClaw 突然丢失文件系统工具 | 29 | 9 | CLOSED |
| [#77668](https://github.com/openclaw/openclaw/issues/77668) | Discord gateway hang at 'awaiting gateway readiness' | 21 | 2 | CLOSED |
| [#78407](https://github.com/openclaw/openclaw/issues/78407) | openclaw doctor --fix rewrites openai-codex/* model refs | 19 | 3 | CLOSED |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | `memoryFlush` does not fire reliably | 19 | 0 | CLOSED |
| [#73655](https://github.com/openclaw/openclaw/issues/73655) | Gateway leak triad on plugin restart | 17 | 1 | CLOSED |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | feat: Tiered bootstrap file loading for progressive context | 16 | 0 | OPEN |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon stop() race condition on SIGUSR1 | 16 | 0 | OPEN |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) | feat: Direct Exec Mode for Cron Jobs | 10 | 9 | OPEN |

### 热点分析

**热点 #1：Docker 环境兼容性问题**  
[#14593](https://github.com/openclaw/openclaw/issues/14593) 报告在官方 Docker 容器内安装 `brew` 基础 Skill 时失败。这是容器化部署场景下的典型兼容性问题，涉及 17 个 👍，表明有一定用户基数受影响。

**热点 #2：Discord Gateway 稳定性**  
[#77668](https://github.com/openclaw/openclaw/issues/77668) 揭示 macOS 上 Discord 插件在重启后卡在 `awaiting gateway readiness` 状态。社区已定位到 Carbon Client 生命周期的原始 WebSocket 测试能隔离此问题。

**热点 #3：模型配置迁移破坏性**  
[#78407](https://github.com/openclaw/openclaw/issues/78407) 及相关 [#79461](https://github.com/openclaw/openclaw/issues/79461) 表明 `openclaw doctor --fix` 在更新后会自动将 `openai-codex/*` 模型引用重写为 `openai/*`，导致使用 Codex OAuth 的用户被锁定。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### 🔴 高严重度（影响核心功能）

| Issue 编号 | 标题 | 严重性 | 状态 | Fix PR |
|------------|------|--------|------|--------|
| [#34810](https://github.com/openclaw/openclaw/issues/34810) | OpenClaw 突然丢失文件系统工具 | 回归 | CLOSED | - |
| [#78601](https://github.com/openclaw/openclaw/issues/78601) | Gateway liveness watchdog restarting gateway | 回归 | CLOSED | - |
| [#78508](https://github.com/openclaw/openclaw/issues/78508) | missing scope: operator.read | 回归 | OPEN | - |
| [#78801](https://github.com/openclaw/openclaw/issues/78801) | ACP runtime session token null | 回归 | OPEN | [#79540](https://github.com/openclaw/openclaw/pull/79540) |

#### 🟠 中严重度（影响特定渠道/功能）

| Issue 编号 | 标题 | 渠道 | 状态 |
|------------|------|------|------|
| [#79455](https://github.com/openclaw/openclaw/issues/79455) | Telegram DM topics require direct_messages_topic_id | Telegram | OPEN |
| [#79408](https://github.com/openclaw/openclaw/issues/79408) | Telegram forum-topic replies vanish | Telegram | OPEN |
| [#77896](https://github.com/openclaw/openclaw/issues/77896) | Matrix channel missing matrix-js-sdk | Matrix | OPEN |
| [#76063](https://github.com/openclaw/openclaw/issues/76063) | MCP server tools missing from agent request body | MCP | OPEN |
| [#78572](https://github.com/openclaw/openclaw/issues/78572) | Discord message tool send fails with "Unknown Channel" | Discord | CLOSED |
| [#77908](https://github.com/openclaw/openclaw/issues/77908) | Non-main agent replies not delivered to Telegram/Discord | Telegram/Discord | CLOSED |

#### 🟡 功能性缺陷

| Issue 编号 | 标题 | 状态 | Fix PR |
|------------|------|------|--------|
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | memoryFlush does not fire reliably | CLOSED | [#79403](https://github.com/openclaw/openclaw/pull/79403) |
| [#72879](https://github.com/openclaw/openclaw/issues/72879) | thought_signature 400 regression | OPEN | - |
| [#78000](https://github.com/openclaw/openclaw/issues/78000) | model allowlist breaks cron jobs with claude-haiku | OPEN | - |

### 回归问题警示

**持续存在的回归问题**：
1. **ACP_TURN_FAILED** — [#76600](https://github.com/openclaw/openclaw/issues/76600), [#78546](https://github.com/openclaw/openclaw/issues/78546) 均报告 ACP 运行时在 `sessions_spawn` 时失败
2. **模型参数被忽略** — [#74837](https://github.com/openclaw/openclaw/issues/74837) 报告 `sessions_spawn(model=...)` 参数被静默忽略
3. **MCP 工具缺失** — [#76063](https://github.com/openclaw/openclaw/issues/76063) 在声称修复后仍然存在

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue 编号 | 标题 | 评论数 | 👍 | 可行性评估 |
|------------|------|--------|-----|------------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading for progressive context | 16 | 0 | 高（降低 token 消耗） |
| [#18160](https://github.com/openclaw/openclaw/issues/18160) | Direct Exec Mode for Cron Jobs | 10 | 9 | 高（有明确需求） |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | Reduce tool schema token overhead (~3,500 tok/session) | 6 | 0 | 高（性能优化） |
| [#12678](https://github.com/openclaw/openclaw/issues/12678) | Capability-based permissions for skills/tools | 5 | 0 | 中（安全增强） |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding Wizard should include Memory/Embedding setup | 8 | 1 | 高（用户体验） |

### 路线图信号分析

1. **上下文窗口优化** — 多个 Issue 指向 Token 消耗问题（#22438, #14785），社区对成本控制有强烈诉求
2. **Cron 作业可靠性** — Direct Exec Mode 请求（#18160）反映了当前 cron 实现不可靠的问题
3. **多渠道功能对齐** — Telegram Business 支持（#20786）、WhatsApp 消息删除（#14344）等请求表明用户期望渠道功能一致性
4. **安全/权限模型** — Capability-based permissions（#12678）暗示项目正在考虑更细粒度的安全控制

---

## 7. 用户反馈摘要

### 用户痛点

**Docker/容器化部署痛点**
> "When running `openclaw onboard` inside the official Docker container and selecting a `brew`-based skill (e.g. `openai-whisper`), the install immediately fails with `brew not installed`."

- Docker 容器内无法安装依赖 Homebrew 的 Skills
- 需要官方提供预装常用工具的容器镜像或替代方案

**稳定性质疑**
> "Around 4:00 AM ET the OpenClaw agent suddenly stopped executing any action involving filesystem or system commands."

- 核心功能（文件系统操作）在无预警情况下失效
- 用户对生产环境稳定性存在担忧

**模型配置迁移破坏性**
> "The doctor migration mutates `openclaw.json` and rewrites every `openai-codex/*` model reference to `openai/*`"

- 自动迁移导致配置不可逆损坏
- 需要更安全的迁移策略或回滚机制

### 用户正面反馈

从 Issue 讨论中观察到：
- **Cron 功能**（#18160）有 9 个 👍，说明核心调度需求被认可
- **子代理功能** 持续有关注（#77991 PR）
- **多渠道集成** 需求活跃（Telegram、Discord、Matrix 等）

---

## 8. 待处理积压

### 长期未响应的关键 Issue

| Issue 编号 | 标题 | 创建日期 | 状态 | 积压天数 |
|------------|------|----------|------|----------|
| [#8295](https://github.com/openclaw/openclaw/issues/8295) | Add allowBots support for Telegram groups | 2026-02-03 | OPEN | ~95 天 |
| [#6890](https://github.com/openclaw/openclaw/issues/6890) | Add Ralph Loop feature and max iteration | 2026-02-02 | OPEN | ~96 天 |
| [#13751](https://github.com/openclaw/openclaw/issues/13751) | Feishu plugin: remove dependency on contact permission | 2026-02-11 | OPEN | ~87 天 |
| [#14344](https://github.com/openclaw/openclaw/issues/14344) | Feature: message delete action for WhatsApp | 2026-02-12 | OPEN | ~86 天 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | Reduce tool schema token overhead | 2026-02-12 | OPEN | ~86 天 |

### 维护者关注提醒

**架构演进风险**：
- [#78595](https://github.com/openclaw/openclaw/pull/78595) SQLite 重构涉及面广，建议分阶段合并
- ACP 运行时系列问题（#76600, #78546）可能需要统一排查

**持续回归风险**：
- `openclaw doctor --fix` 的模型引用迁移问题（#78407, #79461）仍未彻底解决
- MCP 工具集成回归（#76063）声称修复但未解决

---

## 统计概览

| 指标 | 数值 |
|------|------|
| Issues 活跃度 | 500 条/24h |
| PR 活跃度 | 500 条/24h |
| 新开/活跃 Issues | 285 (57%) |
| 关闭 Issues | 215 (43%) |
| 待合并 PRs | 352 (70.4%) |
| 已合并/关闭 PRs | 148 (29.6%) |
| 新版本发布 | 0 |
| 最热门 Issue 评论数 | 29 |
| 回归问题数 | 8+ |

---

*报告生成时间：2026-05-09 | 数据来源：GitHub OpenClaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期**：2026-05-09  
**分析范围**：14 个活跃开源项目

---

## 1. 生态全景

2026 年 5 月的 AI 智能体开源生态呈现**多极繁荣、高速迭代**的格局。以 OpenClaw 为核心的 "Claw 系列"（Zeroclaw、PicoClaw、NanoClaw、IronClaw、ZeptoClaw）占据生态主体，贡献了超过 60% 的 Issue 和 PR 活动量。整体生态在过去 24 小时共产生 **~900 条 Issue 更新** 和 **~800 条 PR 更新**，但**版本发布仅 4 个**（librefang v2026.5.8-beta.10、Zeroclaw v0.7.5、PicoClaw nightly、QwenPaw v1.1.6-beta.1），表明行业仍处于**功能堆砌期**而非**稳定发布期**。核心痛点集中在三个方面：**容器化部署兼容性**、**多渠道功能一致性**、**长对话上下文管理**，这三个问题在至少 7 个以上的项目中重复出现，暗示存在共同的架构挑战。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新增/活跃) | Issues (关闭) | PRs (待合并) | PRs (已合并) | 版本发布 | 健康度 | 趋势 |
|------|-------------------|---------------|--------------|--------------|----------|--------|------|
| **OpenClaw** | 285 | 215 | 352 | 148 | 无 | 🟡 中 | 高活跃但回归问题多 |
| **HermesAgent** | 188 | 21 | 389 | 111 | 无 | 🟡 中 | 极高活跃，积压严重 |
| **librefang** | ~10 | ~10 | ~30 | ~20 | ✅ v2026.5.8-beta.10 | 🟢 良 | 功能密集但 CI 不稳定 |
| **Zeroclaw** | 13 | 5 | 31 | 13 | ✅ v0.7.5 | 🟢 良 | 安全问题需优先 |
| **PicoClaw** | 6 | 14 | 26 | 13 | ✅ nightly | 🟡 中 | 夜间构建稳定性待验证 |
| **QwenPaw** | 19 | 14 | 16 | 21 | ✅ v1.1.6-beta.1 | 🟢 良 | Beta 节奏健康 |
| **IronClaw** | 12 | - | 25 | 21 | ✅ v0.28.0 | 🟢 良 | Reborn 重构推进中 |
| **NanoBot** | 6 | 4 | 8 | 14 | 无 | 🟢 良 | 稳定迭代 |
| **NanoClaw** | 2 | - | 14 | 5 | 无 | 🟡 中 | >14天积压需清理 |
| **LobsterAI** | 2 | 0 | 2 | 27 | 无 | 🟢 优 | 响应效率极高 |
| **Moltis** | 0 | 0 | 3 | 2 | ✅ v20260508.01 | 🟢 优 | 积压极少 |
| **openfang** | 4 | - | 2 | 0 | 无 | 🟡 中 | Matrix 适配器存功能缺失 |
| **ZeptoClaw** | 0 | 0 | 1 | 0 | 无 | 🟡 平稳 | 维护窗口期 |
| **TinyClaw** | 0 | 0 | 0 | 0 | 无 | ⚫ 静默 | 无活动 |

**关键发现**：HermesAgent 和 OpenClaw 的 PR 积压比例最高（分别有 389 和 352 个待合并），维护者 review 压力极大。librefang 虽然发布节奏快，但 CI 健康度问题突出（当日 6 个 PR 触发 main-red 失败）。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心地位

OpenClaw 是整个 Claw 生态的**技术策源地**，其架构决策和功能演进直接影响 NanoClaw、ZeptoClaw 等衍生项目的走向。从今日数据看：

- **社区规模**：500 条 Issues + 500 条 PRs 的单日活动量，是第二名 HermesAgent 的 2.4 倍
- **影响力辐射**：QwenPaw 存在 Meta Issue（#578）专门追踪 OpenClaw 启发功能；NanoBot 的工具调用防护机制（#3701/#3702）可追溯到 OpenClaw 的最佳实践
- **技术路线**：SQLite 统一存储架构（PR #78595）领先竞品至少一个版本，是业内较早推进结构化状态持久化的项目

### 3.2 优势与差距

| 维度 | OpenClaw 优势 | 面临挑战 |
|------|--------------|---------|
| **多渠道覆盖** | Telegram/Discord/Matrix/飞书等 12+ 渠道 | 各渠道功能不一致（Telegram forum 问题未解决） |
| **社区活跃度** | 极高（远超同类） | 高活跃带来高积压，响应质量下降 |
| **架构演进** | SQLite 重构路线清晰 | 回归问题频发（8+ 持续存在） |
| **安全修复** | 有专门安全 PR（路径遍历、OAuth 竞态） | Doctor 迁移破坏性问题（#78407）影响用户信任 |

**对比 HermesAgent**：后者在安全问题修复速度上更快（#22173 安全修复当日合并），但 OpenClaw 在多渠道整合深度上更胜一筹。

---

## 4. 共同关注的技术方向

以下需求在**至少 3 个以上项目**中重复出现，代表行业共识性挑战：

### 4.1 容器化部署标准化

**涉及项目**：OpenClaw（#14593）、NanoClaw（#2354）、PicoClaw（exec 工具问题）

**核心诉求**：
- Docker 容器内 Skill 安装失败（Homebrew 依赖问题）
- Kubernetes 容器运行时支持请求（NanoClaw #2354）
- exec 工具路径安全与可用性平衡（PicoClaw #1042）

**行业影响**：反映出 AI Agent 正从 "本地开发玩具" 向 "生产级容器化部署" 转型，容器生态的标准化是关键瓶颈。

### 4.2 长对话上下文管理

**涉及项目**：HermesAgent（#14420 上下文丢失）、QwenPaw（#3350 超长对话卡顿）、librefang（50k tokens/调用问题）、OpenClaw（#22438 分层引导）

**核心诉求**：
- 按需工具 schema 加载（librefang #4805、OpenClaw #14785）
- 分层上下文加载策略（OpenClaw #22438）
- 视觉模型截图累积问题（QwenPaw #4102）

**行业影响**：Token 成本控制和上下文窗口优化是 2026 年最迫切的工程挑战，多个项目独立提出相似方案，暗示技术收敛点即将到来。

### 4.3 多渠道功能一致性

**涉及项目**：OpenClaw（Telegram/Discord）、IronClaw（多租户 SSE 泄漏）、openfang（Matrix E2EE）、QwenPaw（钉钉/Discord 线程支持）

**核心诉求**：
- 跨渠道的统一功能实现（如定时任务、线程隔离）
- 渠道特定的适配器完善（Matrix E2EE/refresh-token、WhatsApp 消息删除）
- 多租户隔离边界加固（IronClaw #3390 已修复）

**行业影响**：多渠道运营是商业化落地的前提，功能不一致会直接限制用户采用意愿。

### 4.4 记忆与持久化系统

**涉及项目**：OpenClaw（memoryFlush 不稳定）、NanoBot（会话中断丢失）、librefang（persistent sessions）、ZeptoClaw（longterm_memory 工具）

**核心诉求**：
- 可靠的记忆持久化与检索
- 跨会话上下文保持
- 记忆压缩与摘要策略

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术栈特点 | 竞争优势 |
|------|---------|---------|-----------|---------|
| **OpenClaw** | 全功能旗舰平台 | 企业级多渠道部署 | TypeScript/Node.js，SQLite 统一存储 | 渠道覆盖最广 |
| **HermesAgent** | 高性能推理引擎 | 需要精细控制的开发者 | Python，hono/agent 系统 | 安全修复快，DeepSeek 适配 |
| **librefang** | 成本敏感型企业方案 | 需要严格预算控制的用户 | Rust，kernel/runtime 分离 | Budget-aware 特性领先 |
| **Zeroclaw** | 浏览器优先方案 | Web 端用户 | Tauri/Web | 浏览器内引导体验 |
| **IronClaw** | 多租户 SaaS | 企业协作场景 | Rust，Reborn 重构进行中 | 多租户隔离成熟 |
| **QwenPaw** | 中文生态深度集成 | 阿里云/Qwen 用户 | Python | DashScope 原生集成 |
| **NanoBot** | 轻量级定制 | 需要灵活配置的开发者 | — | WebUI 现代化 |
| **LobsterAI** | 爬虫/自动化方向 | 数据采集场景 | — | Cron 可视化构建 |
| **openfang** | Matrix 生态专精 | Matrix 用户 | Rust | Matrix 协议深度适配 |

**关键洞察**：生态呈现明显的**垂直分化**趋势——OpenClaw 和 HermesAgent 走全功能平台路线，librefang 在成本控制上深耕，QwenPaw 押注中文生态，openfang 则专注 Matrix 单一渠道。这种分化有利于细分市场，但长期可能导致生态碎片化。

---

## 6. 社区热度与成熟度分层

### 6.1 活跃度分层（基于今日数据）

```
🔥 第一梯队（极高活跃，>300 PR/Issue 更新/日）
├── OpenClaw（500/500）
└── HermesAgent（500+ PR，209 Issues）

📈 第二梯队（高活跃，50-100 更新/日）
├── Zeroclaw（62 更新）
├── PicoClaw（59 更新）
├── librefang（70 更新）
├── QwenPaw（70 更新）
└── IronClaw（58 更新）

📊 第三梯队（中等活跃，10-30 更新/日）
├── NanoBot（32 更新）
├── LobsterAI（29 更新）
├── NanoClaw（19 更新）
└── openfang（6 更新）

📉 第四梯队（低活跃，<5 更新/日）
├── Moltis（5 更新）
├── ZeptoClaw（1 更新）
├── TinyClaw（0 更新）
└── EasyClaw（0 更新）
```

### 6.2 成熟度评估

| 阶段 | 项目特征 | 代表项目 |
|------|---------|---------|
| **快速迭代期** | 高 PR 量、高 Bug 报告、高版本发布频率 | HermesAgent、librefang、IronClaw |
| **质量巩固期** | PR 量下降、关注 Bug 修复、积压清理 | LobsterAI、Moltis |
| **战略重构期** | 大版本重构进行中、功能暂停交付 | IronClaw（Reborn）、OpenClaw（SQLite） |
| **平稳维护期** | 极低活动量、无紧急需求 | ZeptoClaw、openfang |
| **静默期** | 无活动记录 | TinyClaw、EasyClaw |

**预警信号**：TinyClaw 和 EasyClaw 连续两日无活动，可能已处于维护者缺失状态，建议有需求的用户关注 fork 或替代方案。

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

**趋势 1：存储架构从 "文件 + 内存" 向 "结构化数据库" 演进**

OpenClaw（SQLite）、NanoClaw（DB 列配置）、IronClaw（checkpoint staging store）均在推进存储结构化。这将带来：
- 更可靠的状态一致性
- 更好的多实例并发支持
- 但也引入数据库迁移、版本兼容等新挑战

**趋势 2：安全加固从 "可选" 变为 "必选"**

多个项目在同一天合并安全修复：
- HermesAgent：OAuth 竞态条件（#22172）、路径遍历绕过（#22173）、PYTHONPATH 泄漏（#22195）
- Zeroclaw：Matrix 消息重复投递（#6306）
- librefang：prompt 泄漏修复（#4760）

这反映出随着 AI Agent 进入生产环境，攻击面正在扩大，安全需求已从 "nice to have" 变为 "must have"。

**趋势 3：多 Agent 协作从概念走向实现**

- OpenClaw：子代理功能（#77991）
- HermesAgent：`delegate_task` 参数请求（#5012）、多 Agent 董事会共识协议提案（#22135）
- Zeroclaw：per-alias 工作区隔离（#6272）
- QwenPaw：项目组多角色协作（#4131）

**趋势 4：渠道集成进入 "深度适配" 阶段**

早期集成仅解决 "能否连接"，现在则聚焦：
- Telegram forum/topic 隔离（OpenClaw #79408、PicoClaw #2785）
- Matrix E2EE 支持（openfang #1177）
- Discord 线程隔离（QwenPaw #3525）
- 飞书表格渲染（HermesAgent #9549）

### 7.2 对 AI 智能体开发者的参考建议

1. **如果选择生产级平台**：优先考虑 OpenClaw（渠道最全）或 HermesAgent（安全更新快），但需接受较高的回归风险
2. **如果关注成本控制**：librefang 的 Budget-aware 特性具有差异化优势，但 CI 稳定性需关注
3. **如果聚焦中文生态**：QwenPaw 的 DashScope 集成是唯一官方支持的选项
4. **如果需要 Matrix 协议深度集成**：openfang 虽有功能缺失，但方向正确；建议评估是否能接受当前限制
5. **避免使用静默项目**：TinyClaw 和 EasyClaw 缺乏维护，依赖风险高

### 7.3 关键技术节点预测

| 时间窗口 | 可能突破的方向 | 依据 |
|---------|--------------|------|
| **1-2 个月内** | SQLite 统一存储在 OpenClaw 完成合并 | PR #78595 已进入审查 |
| **3-6 个月** | Budget-aware fallback 在 librefang 成熟并被其他项目借鉴 | Issue #4807 已确认需求 |
| **6-12 个月** | 多 Agent 协作协议出现事实标准 | OpenClaw/HermesAgent/Zeroclaw 独立探索 |
| **持续演进** | Matrix E2EE 支持成为标配 | openfang/QwenPaw 均在推进 |

---

## 附录：关键数据汇总

```
┌─────────────────────────────────────────────────────────────┐
│                    生态核心指标（2026-05-09）                 │
├─────────────────────────────────────────────────────────────┤
│  活跃项目数：14 个                                           │
│  静默项目数：2 个（TinyClaw、EasyClaw）                      │
│  总 Issue 活动：~900 条                                      │
│  总 PR 活动：~800 条                                         │
│  新版本发布：4 个                                            │
│  安全修复（已合并）：5+ 个                                   │
│  高优先级 Bug：20+ 个                                        │
│  功能请求（>10 评论）：8 个                                  │
├─────────────────────────────────────────────────────────────┤
│  热度最高的单点问题：                                         │
│  1. OpenClaw Docker Skill 安装失败（29 评论）                 │
│  2. OpenClaw 文件系统工具丢失（29 评论）                      │
│  3. PicoClaw LM Studio 集成请求（18 评论）                   │
│  4. HermesAgent 响应截断问题（17 评论）                      │
│  5. OpenClaw Discord Gateway 稳定性（21 评论）                │
└─────────────────────────────────────────────────────────────┘
```

---

**报告说明**：本报告基于 2026-05-09 各项目 GitHub 公开数据自动汇总，原始数据以各项目 GitHub 页面为准。部分指标（如健康度评分）为主观评估，仅供参考。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**: 2026-05-09  
**项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
**数据来源**: GitHub 过去 24 小时活动

---

## 1. 今日速览

过去 24 小时内，NanoBot 项目保持高度活跃状态，共产生 **32 次更新操作**（Issues + PRs）。项目关闭了 4 个 Issues 并合并了 **14 个 Pull Requests**，显示出持续的开发动力。今日的亮点包括**重复工具调用防护机制**的完善（PR #3701、#3702），以及**飞书消息路由 Bug** 的修复（PR #3704）。整体而言，项目在稳定性和功能丰富度方面均有显著推进，无新增版本发布，所有变更向后兼容。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并的 Pull Requests（14 个）

| PR # | 标题 | 贡献者 | 影响领域 |
|------|------|--------|----------|
| [#3704](https://github.com/HKUDS/nanobot/pull/3704) | fix(feishu): send all messages to topic when in thread | yorkhellen | 飞书频道 |
| [#3701](https://github.com/HKUDS/nanobot/pull/3701) | Guard repeated identical local tool calls in a single turn | andrew-ellis-engineering | Agent 核心 |
| [#3702](https://github.com/HKUDS/nanobot/pull/3702) | Add configurable escalation for repeated tool-call loops | andrew-ellis-engineering | Agent 核心 |
| [#3703](https://github.com/HKUDS/nanobot/pull/3703) | feat(webui): redesign settings and BYOK configuration | Re-bin | WebUI |
| [#3697](https://github.com/HKUDS/nanobot/pull/3697) | fix(cli): sanitize surrogate code points before entering message bus | chengyongru | CLI |
| [#3695](https://github.com/HKUDS/nanobot/pull/3695) | feat: add image generation tool and WebUI mode | Re-bin | 新功能 |
| [#3687](https://github.com/HKUDS/nanobot/pull/3687) | fix(memory): consolidate history hidden by replay window | Re-bin | 记忆系统 |
| [#3664](https://github.com/HKUDS/nanobot/pull/3664) | fix: log errors in silent exception handlers (matrix + weixin) | vystartasv | Matrix/微信 |
| [#3691](https://github.com/HKUDS/nanobot/pull/3691) | fix(onboard): allow empty strings and falsy values | chengyongru | 引导向导 |
| [#3690](https://github.com/HKUDS/nanobot/pull/3690) | fix(onboard): allow empty strings and falsy values | chengyongru | 引导向导 |
| [#3587](https://github.com/HKUDS/nanobot/pull/3587) | fix: honor null reasoning effort disable | boogieLing | 配置系统 |
| [#3358](https://github.com/HKUDS/nanobot/pull/3358) | feat(config): add model presets for quick model switching | chengyongru | 配置系统 |

**重点合并分析**:

- **Agent 稳定性提升**: PR #3701、#3702 共同构建了重复工具调用的防护与升级机制，解决了本地工具（read_file、list_dir、glob、grep）可能导致的无限循环问题。
- **飞书体验优化**: PR #3704 修复了群 topic 中多消息发送时只第一条留在 topic 的 Bug（关联 Issue #3694）。
- **跨平台错误可见性**: PR #3664 修复了 Matrix 和微信频道中静默吞噬异常的 Anti-Pattern，提升调试能力。
- **CLI 兼容性**: PR #3697 解决了 Windows 上 emoji 输入导致的代理代码点崩溃问题。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 状态 | 评论数 | 核心诉求 |
|---------|------|------|--------|----------|
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | Configure bot name and icon | OPEN | 3 | 自定义机器人名称和图标 |
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) | Can Dream be disabled? | CLOSED | 3 | 禁用 Dream 功能 |
| [#3699](https://github.com/HKUDS/nanobot/issues/3699) | Repeated identical local tool calls... | CLOSED | 2 | 阻止重复本地调用 |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | Transcription Provider Configuration Is Not Transparent | OPEN | 2 | 转录配置透明度 |
| [#1412](https://github.com/HKUDS/nanobot/issues/1412) | processing from another bot? | OPEN | 2 | 跨机器人消息处理 |

**热点分析**:

1. **机器人个性化需求突出**: Issue #3650 获得"good first issue"标签，开发者 mraad 请求在 Agent 模式下支持自定义机器人名称和图标，而非默认显示"nanobot is thinking..."。这反映了用户对品牌定制化的期待。

2. **Dream 功能控制**: Issue #3652 已关闭（可能通过 PR #3591 间接满足），表明用户希望对自动后台行为有更多控制权。

3. **长期未解的跨平台问题**: Issue #1412 自 3 月 2 日提出，涉及从另一个 Home Assistant 通知机器人转发消息的场景，至今仍 OPEN，暗示跨 Bot 通信存在技术限制。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| 严重度 | Issue # | 描述 | 状态 | Fix PR |
|--------|---------|------|------|--------|
| 🟡 中 | [#3694](https://github.com/HKUDS/nanobot/issues/3694) | 飞书群 topic 中多文件发送时，文件错发到 group 而非 topic | **CLOSED** | [#3704](https://github.com/HKUDS/nanobot/pull/3704) ✅ |
| 🟢 低 | [#3637](https://github.com/HKUDS/nanobot/issues/3637) | Groq 转录配置不透明，易产生无效配置 | OPEN | - |
| 🟢 低 | [#3689](https://github.com/HKUDS/nanobot/issues/3689) | 中断会话后丢失聊天记录 | OPEN | - |

**稳定性评估**: 
- **已修复**: 飞书消息路由 Bug 已通过 PR #3704 修复，项目响应速度良好。
- **待修复**: 转录配置和会话中断问题是新报告，预计将进入开发队列。
- **回归风险**: 近期大量 PR 涉及 Agent 核心逻辑（工具调用防护），建议关注自动化测试覆盖。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue/PR # | 请求内容 | 关联 PR | 纳入可能性 |
|------------|----------|---------|------------|
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | 配置文件自定义机器人名称和图标 | - | ⭐⭐⭐ 高 |
| [#3698](https://github.com/HKUDS/nanobot/issues/3698) | API server streaming 注入 tool 事件 | - | ⭐⭐⭐ 高 |
| [#3591](https://github.com/HKUDS/nanobot/pull/3591) | Dream 更新范围控制 | OPEN | ⭐⭐⭐ 高 |
| [#3590](https://github.com/HKUDS/nanobot/pull/3590) | Heartbeat 手动触发命令 | OPEN | ⭐⭐ 中 |
| [#3696](https://github.com/HKUDS/nanobot/pull/3696) | 模型预设快速切换 | OPEN | ⭐⭐⭐ 高 |
| [#3695](https://github.com/HKUDS/nanobot/pull/3695) | 图片生成工具 | **MERGED** | ✅ 已采纳 |
| [#3684](https://github.com/HKUDS/nanobot/pull/3684) | 微信静默消息丢失防护 | OPEN | ⭐⭐ 中 |

**路线图信号解读**:

1. **Agent 可控性增强**: 多个 PR 聚焦于 Agent 行为的细粒度控制（Dream 范围、手动 Heartbeat、模型预设），表明下一版本将强化用户对自动化行为的定制能力。

2. **API 扩展性**: Issue #3698 请求在 streaming 中注入 tool 事件，与 hermes-agent 实现对齐，这将提升 API 可玩性和集成体验。

3. **多模态探索**: PR #3695 已合并，图片生成功能进入正式支持阶段。

---

## 7. 用户反馈摘要

### 真实痛点与场景

| 来源 | 反馈内容 | 痛点类型 |
|------|----------|----------|
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) @lyh161 | 中断会话后机器人"失忆"，需要重新描述任务 | 上下文丢失 |
| [#1412](https://github.com/HKUDS/nanobot/issues/1412) @jsapede | 从其他机器人转发消息无法触发 Nanobot | 跨平台集成限制 |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) @mraad | 希望看到"mybot is thinking..."而非默认名称 | 个性化需求 |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) @sandr1x | Groq 转录配置容易出错，缺乏引导 | 配置复杂度 |

**用户满意度洞察**:
- **正面**: 飞书 topic 隔离功能（v0.1.5.post3）受到认可，用户期望更灵活的控制（Issue #3692）。
- **负面**: 自动化行为（Dream、Heartbeat）缺乏可见性和控制；错误处理不够透明，导致问题难以排查。

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue # | 创建日期 | 距今天数 | 标题 | 优先级建议 |
|---------|----------|----------|------|------------|
| [#1412](https://github.com/HKUDS/nanobot/issues/1412) | 2026-03-02 | **68 天** | processing from another bot? | ⚠️ 高 - 涉及跨 Bot 通信核心逻辑 |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) | 2026-05-06 | 3 天 | Transcription Provider Configuration Is Not Transparent | 中 |

**积压分析**:
- **Issue #1412** 已在 [GitHub Issue #1412](https://github.com/HKUDS/nanobot/issues/1412) 上沉寂 68 天，用户期待能够从其他机器人（如 Home Assistant 通知 Bot）转发消息，这是多 Bot 协作场景的关键需求，建议维护者评估实现可行性或给出技术说明。

---

## 附录：关键指标一览

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 新开/活跃 | 6 | - |
| Issues 已关闭 | 4 | - |
| PRs 新开 | 8 | 待合并 |
| PRs 已合并 | 14 | 📈 高于昨日 |
| 合并率 | 63.6% (14/22) | 健康 |
| 热门 PR 评论数最高 | #3514 (WhatsApp JID) | - |

---

*报告生成时间: 2026-05-09 | 数据窗口: 过去 24 小时 | 由 AI 自动化生成*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报
## 2026-05-09

---

## 1. 今日速览

Zeroclaw 项目在过去 24 小时内保持高度活跃，共产生 18 条 Issue 更新（5 已关闭）和 44 条 PR 更新（13 已合并/关闭）。项目刚刚发布了 **v0.7.5**，带来了浏览器内引导配置、多租户网关 CRUD 等重要功能。当前存在 **4 个 P1 优先级问题**，其中 #6207（WebSocket 审批绕过）和 #6516（工作区路径锁定）均为 S1 级别工作流阻塞问题，需要尽快处理。社区贡献持续增长，多个安全和稳定性修复已合并至 master 分支。

---

## 2. 版本发布

### 🎉 v0.7.5 正式发布

**发布时间**：2026-05-09  
**变更范围**：v0.7.4 → v0.7.5

**核心更新亮点**：

| 功能领域 | 更新内容 |
|---------|---------|
| **引导流程** | 浏览器内 `/onboard` 流程，基于 OpenAPI 3.1 schema 驱动 |
| **网关管理** | per-property gateway CRUD 界面，配套类型化 CLI |
| **人格编辑器** | 三端统一（CLI / TUI / Web）的人格配置界面 |
| **CI 修复** | 解决了 v0.7.5 初始构建失败问题（`web` job 找不到 `./api-generated` 模块） |

> ⚠️ 如需从旧版本升级，请参考发布说明中的迁移指南。

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR（13 条）

| PR | 类型 | 摘要 | 贡献者 |
|----|------|------|--------|
| [#6473](https://github.com/zeroclaw-labs/zeroclaw/pull/6473) | docs | 明确 PR 工作流和 AI 归属指南 | @Audacity88 |
| [#6319](https://github.com/zeroclaw-labs/zeroclaw/pull/6319) | refactor | 提取 `MEMORY_CONTEXT_OPEN/CLOSE` 常量，统一内存上下文标记 | @Audacity88 |
| [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) | fix | 解锁 v0.7.5 发布：修复 gen-api 执行顺序，添加本地开发脚本 | @singlerider |
| [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) | fix | Matrix channel 避免重复入站回复——sync loop 返回时移除事件处理器 | @patrickzzz |
| [#5121](https://github.com/zeroclaw-labs/zeroclaw/pull/5121) | fix | 强制 Mistral 兼容的 `tool_call.id` 序列化格式 | @Alix-007 |
| [#5077](https://github.com/zeroclaw-labs/zeroclaw/pull/5077) | docs | 澄清 Codex 设置和服务日志文档 | @Alix-007 |

**关键推进领域**：
- **Matrix 稳定性**：#6306 修复了 listener 重启导致消息重复投递的回归问题
- **Provider 互操作性**：#5121 解决了 Mistral 工具调用的 ID 格式不兼容问题
- **文档完善**：持续改进贡献指南和配置文档

### 🔄 待合并的活跃 PR（重点关注）

| PR | 类型 | 摘要 | 状态 |
|----|------|------|------|
| [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) | feature | ⚠️ **破坏性变更**：V0.8.0 schema-mirror env-var 语法，重构所有 legacy override | `integration/v0.8.0` |
| [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) | enhancement | 运行时追踪和 SSE 广播，观察 agent turn 生命周期 | needs-author-action |
| [#6432](https://github.com/zeroclaw-labs/zeroclaw/pull/6432) | fix | 容忍并发 SQLite schema 迁移，解决多进程启动竞争问题 | review |
| [#6178](https://github.com/zeroclaw-labs/zeroclaw/pull/6178) | feature | Ollama provider 支持 `num_ctx`/`num_predict`/`temperature` 调优 | review |
| [#6068](https://github.com/zeroclaw-labs/zeroclaw/pull/6068) | enhancement | Channel 可配置 reply-intent 预检模型和超时 | review |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**#5937** — Provider 架构统一重构 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)]
- **状态**：OPEN（blocked）
- **活跃度**：8 条评论
- **核心诉求**：当前 `providers` 模块中 `reqwest` 和模型构建参数使用不一致，大量代码重复导致配置碎片化
- **影响范围**：所有 provider（high risk），需统一架构设计
- **建议**：这是架构层面的重大重构，需维护者介入评审后推进

**#6153** — Matrix 语音转录失败 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6153)]
- **状态**：CLOSED（2026-05-08）
- **活跃度**：7 条评论
- **问题**：Element Web/Android 客户端的语音转录返回 "Unsupported audio format '.'" 错误
- **处置**：已关闭（可能随 v0.7.5 修复或已另有处理）

**#6399** — 自定义 provider 发送本地路径而非 data URLs [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6399)]
- **状态**：OPEN
- **活跃度**：4 条评论
- **场景**：树莓派 + vLLM 远程服务器 + Gemma-4-26b，多模态请求因路径格式错误失败
- **严重性**：P1/S1

### 💬 PR 评论亮点

**#6523**（V0.8.0 schema-mirror）引发关于环境变量契约的讨论  
**#6532**（Llama.cpp + ACP 路径修复）关联 #6516 的 sandbox 漏洞

---

## 5. Bug 与稳定性

### 🚨 P1 级别（工作流阻塞）

| Issue | 摘要 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) | ACP `cwd` 变更可导致 agent 无法读取自身 skill 文件（sandbox 误判） | OPEN | [#6532](https://github.com/zeroclaw-labs/zeroclaw/pull/6532) ✅ |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | WebSocket `/ws/chat` 绕过 ApprovalManager，监督模式工具审批不显示 | OPEN + in-progress | — |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | 自定义 remote provider 发送本地路径破坏多模态请求 | OPEN | — |

### ⚠️ P2 级别（降级行为）

| Issue | 摘要 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6526](https://github.com/zeroclaw-labs/zeroclaw/issues/6526) | `/api/events` SSE 静默丢弃 tool-call 事件（BroadcastObserver 被绕过） | OPEN | [#6527](https://github.com/zeroclaw-labs/zeroclaw/pull/6527) |
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) | matrix-sdk v0.16.0 导致编译时递归限制溢出 | OPEN | — |
| [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) | 并发启动时 SQLite 内存 schema 初始化失败 | OPEN + in-progress | [#6432](https://github.com/zeroclaw-labs/zeroclaw/pull/6432) |
| [#6524](https://github.com/zeroclaw-labs/zeroclaw/issues/6524) | Matrix 根时间线消息错误创建线程会话 | OPEN | — |
| [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) | 不信任系统 CA，导致自签名证书 provider 无法连接 | OPEN | — |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | 上下文溢出导致幻觉/话题漂移 | OPEN | — |

### 📌 今日已修复

| Issue | PR | 修复内容 |
|-------|-----|---------|
| #5117 Mistral 工具调用 ID 格式 | [#5121](https://github.com/zeroclaw-labs/zeroclaw/pull/5121) | 强制 9 字符 ASCII 格式 |
| #6376 Matrix 消息重复投递 | [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) | sync loop 返回时移除事件处理器 |

---

## 6. 功能请求与路线图信号

### 🌟 高价值功能提案

**#6272** — 多 agent 运行时：per-alias 工作区、权限和共享资源
- **优先级**：P1
- **摘要**：V3 引入单工作区身份模型后，每个 `[agents.<alias>]` 块应成为完全隔离的单元（独立工作区、内存、身份文件、声明的对等体、可继承的 Hands）
- **路线图关联**：这是 v0.8.0+ 架构演进的核心方向

**#6499** — macOS UI 控制能力（截图、点击、键鼠、AX、AppleScript）
- **优先级**：P2
- **状态**：in-progress
- **范围**：Desktop 模块 / Tauri

**#6522** — Web 聊天监督模式工具审批 UI
- **优先级**：高
- **背景**：后端已实现 `approval_request`/`approval_response` 帧协议，前端 UI 缺失
- **关联**：[#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) 的配套修复

**#5986** — 运行时追踪和 SSE 广播（agent turn 生命周期）
- **优先级**：高
- **价值**：提升可观测性，便于调试和监控
- **状态**：needs-author-action

### 📊 PR 中的新功能

| PR | 功能 | 预计版本 |
|----|------|---------|
| [#6178](https://github.com/zeroclaw-labs/zeroclaw/pull/6178) | Ollama `num_ctx`/`num_predict`/`temperature` 调优 | v0.7.6+ |
| [#6068](https://github.com/zeroclaw-labs/zeroclaw/pull/6068) | Channel reply-intent 预检模型可配置 | v0.7.6+ |
| [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) | Webhook 重试逻辑（指数退避 + jitter） | v0.7.6+ |

---

## 7. 用户反馈摘要

### 用户痛点

1. **多模态请求场景受限**
   - 用户 @vanbukin 在树莓派上使用 vLLM + Gemma-4，发现本地文件路径未转换为 data URLs 导致请求失败
   - 期望：远程 provider 应自动处理本地资源 URL 化

2. **安全性与沙箱边界模糊**
   - @tidux 报告 ACP session 中 `cwd` 设置为仓库外部时，skill 文件读取被 sandbox 误拦截
   - 期望：agent 应能访问其工作区内的所有 skill 文件，无论 session 当前路径

3. **企业证书信任缺失**
   - @crust3780 反馈：连接使用自签名证书的自定义 provider 失败
   - 期望：应信任系统 CA 证书池

### 用户满意点

- **v0.7.5 发布**：用户对浏览器内引导和多租户网关功能反馈积极
- **文档改进**：#6473 和 #5077 的合并提升了贡献者体验

### 典型使用场景

| 场景 | 用户 | 配置 |
|------|------|------|
| 边缘部署 | @vanbukin | Raspberry Pi 4B + Ubuntu 26.04 + vLLM (RTX 5090) |
| 企业内部 | @crust3780 | 自签名证书 + 私有 LLM |
| 协作平台 | @freeekanayaka | Matrix + Element Web/Android |

---

## 8. 待处理积压

### ⏳ 长期未响应的 P1/P2 问题

| Issue | 创建日期 | 积压天数 | 摘要 | 建议 |
|-------|----------|---------|------|------|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | 2026-04-20 | 19 天 | Provider 架构统一重构（blocked，需维护者介入） | 高优先级架构评审 |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | 2026-05-05 | 4 天 | 多模态路径问题（P1） | 建议尽快分配 |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | 2026-04-29 | 10 天 | 审批 UI 绕过（P1，in-progress） | 推进 #6522 配套修复 |
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) | 2026-05-08 | 1 天 | matrix-sdk v0.16.0 兼容性 | 检查依赖升级影响 |

### 🔧 需要维护者关注的 PR

| PR | 状态 | 阻塞/等待原因 |
|----|------|--------------|
| [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) | needs-author-action | 等待作者响应 review 意见 |
| [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) | review | V0.8.0 破坏性变更，需明确发布时间线 |

---

## 附录：数据统计

```
📊 今日汇总（2026-05-09）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Issues:  18 条（13 OPEN / 5 CLOSED）
PRs:    44 条（31 OPEN / 13 CLOSED）
Releases: 1 个（v0.7.5）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
高优先级待办: 4 个 P1
已在修复中:   3 个（有关联 Fix PR）
```

---

*报告生成时间：2026-05-09 | 数据来源

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：** 2026-05-09  
**项目：** PicoClaw (github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 项目在 2026-05-09 呈现高度活跃状态，过去 24 小时内共产生 **59 次更新操作**（Issues + PRs），其中 **39 个 PR** 的更新量创下近期新高，显示开发节奏显著加快。整体活跃度评估为 **HIGH**——项目处于功能迭代密集期，13 个 PR 已合并/关闭，多项 bug 修复已提交待审。社区参与度较高，热点 Issue 累计获得 29 条评论，5 个讨论主题涉及核心功能体验（如 exec 工具安全机制、OAuth 认证、WhatsApp 集成等）。发布方面，今日推送了 v0.2.8-nightly.20260509.8508f806 夜间构建，建议观望稳定性测试结果。

---

## 2. 版本发布

### 📦 Nightly Build 发布

| 版本号 | 构建时间 | 变更集 |
|--------|----------|--------|
| `v0.2.8-nightly.20260509.8508f806` | 2026-05-09 | Compare: v0.2.8...main |

**说明：**  
- 此为自动化构建版本，可能不稳定，请谨慎使用  
- 建议生产环境暂不升级，持续关注后续 nightly 稳定性报告

🔗 **Full Changelog：** https://github.com/sipeed/picoclaw/compare/v0.2.8...main

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR（共 13 个）

| PR | 类型 | 描述 | 状态 |
|----|------|------|------|
| [#2655](https://github.com/sipeed/picoclaw/pull/2655) | fix | 恢复统一内核运行时不变量（securebus 单次执行、敏感数据脱敏、会话连续性等） | CLOSED |
| [#2522](https://github.com/sipeed/picoclaw/pull/2522) | fix | OpenAI兼容 provider 支持流式 usage 字段 | CLOSED |
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) | fix | 修复工具参数 JSON Schema 验证问题（解决与 LM Studio 等严格 API 的兼容性） | CLOSED |
| [#2681](https://github.com/sipeed/picoclaw/pull/2681) | fix | 清理 MCP 工具 schema 以支持 Gemini 函数调用 | CLOSED |

**推进的关键能力：**
- **内核稳定性**：统一内核基线恢复，确保 securebus、会话管理、回退安全等核心机制可靠
- **多模态兼容性**：Gemini + MCP 工具链修复，为复杂工具生态铺路
- **流式输出完善**：OpenAI 兼容端点 usage 字段支持，流式体验更完整

---

## 4. 社区热点

### 🔥 评论最多的 Issues

| Issue | 主题 | 评论数 | 👍 | 热度分析 |
|-------|------|--------|-----|----------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | Feat Request: LM Studio Easy Connect | 18 | 2 | 用户强烈呼吁简化第三方推理引擎集成，反映开源社区对本地部署模型的兴趣 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具 guardCommand 路径判断过严 | 10 | 2 | 高价值 bug report，附详细复现步骤，触发路径安全与可用性的设计讨论 |

### 💬 PR 讨论焦点

| PR | 主题 | 热度 |
|----|------|------|
| [#2826](https://github.com/sipeed/picoclaw/pull/2826) | 修复 exec 工具相对路径解析问题 | 高（关联 #1042） |
| [#2828](https://github.com/sipeed/picoclaw/pull/2828) | 转录排队的语音后续消息 | 中 |
| [#2763](https://github.com/sipeed/picoclaw/pull/2763) | 新增 Gemini 网络搜索 provider | 中 |

**热点分析：**  
社区最关注两个方向：
1. **工具安全性与可用性平衡** — exec 工具路径限制过严导致误拦截，影响用户体验
2. **多渠道集成深度** — WhatsApp LID 迁移、飞书优化、Telegram 主题上下文保持等需求密集

---

## 5. Bug 与稳定性

### 🐛 今日报告/跟踪的 Bug（按严重程度）

| 严重度 | Issue | 描述 | 已有 Fix？ |
|--------|-------|------|-----------|
| 🔴 高 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具 `guardCommand` 方法将查询参数误判为路径（如 `Beijing?T` → `../../Beijing?T`），导致天气查询等合法命令被拦截 | ✅ [#2826](https://github.com/sipeed/picoclaw/pull/2826) 已提 PR |
| 🔴 高 | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth + ChatGPT 后端流式响应返回空内容 | ⚠️ 待关注 |
| 🔴 高 | [#2602](https://github.com/sipeed/picoclaw/issues/2602) | OAuth 认证对 OpenAI 和 Antigravity 均失败 | 已关闭（可能需跟进） |
| 🟡 中 | [#2738](https://github.com/sipeed/picoclaw/issues/2738) | v0.2.8 升级后图片识别功能失效 | 已关闭（可能需跟进） |
| 🟡 中 | [#2744](https://github.com/sipeed/picoclaw/issues/2744) | Android v0.2.8 无法访问标签页数据 | 待确认 |
| 🟡 中 | [#2785](https://github.com/sipeed/picoclaw/issues/2785) | 飞书通知仅显示首个工具调用消息 | 待修复 |
| 🟢 低 | [#2540](https://github.com/sipeed/picoclaw/issues/2540) | WhatsApp LID 迁移账户消息静默丢弃 | ✅ [#2541](https://github.com/sipeed/picoclaw/issues/2541) 复合缺陷已定位 |
| 🟢 低 | [#2784](https://github.com/sipeed/picoclaw/issues/2784) | README 百度搜索免费额度描述错误 | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

### ✨ 新功能需求（结合已有 PR 判断优先级）

| 需求 | 来源 | 相关 PR | 纳入可能性 |
|------|------|---------|------------|
| **LM Studio 简易连接** | 社区高呼 | — | ⭐⭐⭐（需求明确，评论最多） |
| **串口工具支持** | [#2649](https://github.com/sipeed/picoclaw/issues/2649) | — | ⭐⭐（IoT 场景硬需求） |
| **GitHub Copilot 集成** | [#2652](https://github.com/sipeed/picoclaw/issues/2652) | — | ⭐ |
| **飞书插件优化**（流式输出、状态显示） | [#2580](https://github.com/sipeed/picoclaw/issues/2580) | — | ⭐⭐（中国用户基数大） |
| **记忆系统集成**（mem0/Supermemory/HydraDB） | [#2515](https://github.com/sipeed/picoclaw/issues/2515) | — | ⭐⭐⭐（长期路线图相关） |
| **WhatsApp 编译版** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | — | ⭐⭐（Raspberry Pi Zero 2 用户刚需） |

**路线图信号：**
- **多模态深化**：`#2626` PR 推进原生音频输入，Gemini 1.5+ 能力释放中
- **流式体验统一**：`#2587` PR 正在构建端到端 Web 聊天流式传输
- **Bedrock 支持**：`#2645` PR 实现 AWS Real-time token streaming

---

## 7. 用户反馈摘要

### 😤 用户痛点

| 场景 | 反馈内容 | 影响范围 |
|------|----------|----------|
| **exec 工具误拦截** | "查询北京天气被安全机制拦截，命令根本不涉及文件路径" | 所有使用 `restrict_to_workspace=true` 的用户 |
| **OAuth 认证失败** | "OpenAI 和 Antigravity 均出现 Authorization Error，无法正常登录" | OAuth 用户 |
| **Android 数据访问** | "v0.2.8 标签页完全无法访问任何数据" | Android 端用户 |
| **WhatsApp LID 迁移** | "WhatsApp 账号迁移到 LID 格式后，所有消息被静默丢弃" | WhatsApp 用户 |
| **飞书体验割裂** | "飞书官方插件有流式输出和状态显示，Picoclaw 只有纯文本" | 飞书用户 |

### 😊 用户满意度点

| 功能 | 正面反馈 |
|------|----------|
| **多渠道覆盖** | "Picoclaw 支持的平台真多" |
| **轻量化设计** | "项目一直保持简洁，这点很好" |

---

## 8. 待处理积压

### ⚠️ 长期未响应的议题（>7 天无维护者回复）

| Issue | 主题 | 创建时间 | 状态 | 建议动作 |
|-------|------|----------|------|----------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | LM Studio Easy Connect | 2026-02-11 | OPEN，18 评论 | **优先处理**，社区呼声高 |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) | WhatsApp 编译版需求 | 2026-04-22 | OPEN，priority: low | 考虑指派或标记 roadmap |
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth 空响应 | 2026-04-26 | OPEN | 高优先级 bug，需确认复现 |

### 📋 PR 待审队列（按更新时间排序）

| PR | 主题 | 待审天数 | 阻塞性 |
|----|------|----------|--------|
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) | Web 聊天流式传输 + 滚动 UX | ~10 天 | 核心体验改进 |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | 多模态 LLM 原生音频输入 | ~7 天 | 功能增强 |
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | Bedrock StreamingProvider | ~6 天 | AWS 用户刚需 |

---

## 📊 今日数据总览

| 指标 | 数值 |
|------|------|
| Issues 更新 | 20 条（新开/活跃 6，已关闭 14） |
| PR 更新 | 39 条（待合并 26，已合并/关闭 13） |
| 新版本 | 1 个（nightly build） |
| 热门 Issue 评论数 | 29 条（Top 2） |
| 整体活跃度 | **HIGH** |

---

*报告生成时间：2026-05-09 | 数据来源：GitHub PicoClaw 仓库*

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# 🔬 Hermes Agent 项目动态日报

**报告日期**：2026-05-09  
**数据来源**：GitHub NousResearch/hermes-agent  
**数据周期**：过去 24 小时

---

## 1. 今日速览

过去 24 小时，Hermes Agent 项目保持极高活跃度：共处理 **209 条 Issues 更新**（新开/活跃 188 条）和 **500 条 PR 更新**（待合并 389 条），社区参与度显著提升。令人担忧的是，今日出现了 **2 个 P1 级别紧急 Bug**（CLI 崩溃、Telegram 死锁），其中 CLI 问题在数小时内已关闭，可能已通过回滚或热修复处理。项目整体呈现 **功能迭代加速 + 稳定性承压** 的态势，建议优先关注积压的高优先级 Bug。

---

## 2. 版本发布

**今日无新版本发布**。

---

## 3. 项目进展

过去 24 小时共 **合并/关闭 111 个 PR**，以下是具有代表性的进展：

| PR | 作者 | 类型 | 说明 |
|---|---|---|---|
| [#22147](https://github.com/NousResearch/hermes-agent/pull/22147) | @teknium1 | perf | **性能优化**：将 Honcho 后端慢速时的退出等待时间从 ~28s 降至 ~6s，解决了长时间 session 后 quit 卡顿问题 |
| [#22053](https://github.com/NousResearch/hermes-agent/pull/22053) | @leehack | bugfix | **Telegram 修复**：解决 Hermes 创建的私信主题通道中回复路由失败问题（`Message thread not found`） |
| [#22172](https://github.com/NousResearch/hermes-agent/pull/22172) | @amathxbt | bugfix | **OAuth 安全**：修复并发 OAuth 流程因共享 `_oauth_port` 全局变量互相覆盖的竞态条件 |
| [#22173](https://github.com/NousResearch/hermes-agent/pull/22173) | @amathxbt | security | **安全修复**：修复 `validate_within_dir` 对 URL 编码路径遍历和空字节的校验缺失（`%2e%2e%2fetc%2fpasswd` 可绕过检查） |
| [#22195](https://github.com/NousResearch/hermes-agent/pull/22195) | @29206394 | security | **沙箱加固**：修复 `execute_code` 沙箱意外暴露 Hermes 内部模块的 PYTHONPATH 泄漏问题 |
| [#22200](https://github.com/NousResearch/hermes-agent/pull/22200) | @hitken | bugfix | **ACP 适配器**：修复 ACP 会话中未传递 `fallback_providers` 导致 VS Code/Zed/JetBrains 客户端无法自动切换降级模型 |
| [#21639](https://github.com/NousResearch/hermes-agent/pull/21639) | @loongfay | i18n | **国际化**：为 `run_agent.py` 中的硬编码状态消息添加国际化支持，提升多语言用户体验 |

**项目整体推进评估**：今日合并节奏稳健，尤其在安全（2 个安全 PR）和性能（Honcho 退出优化）方面有实质性推进。389 个 PR 待合并表明 contributor 活跃，但维护者 Review 压力较大。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues（按评论数排序）

1. **#7237** 🔥 [CLOSED] Response truncated error — **17 条评论**  
   长回复场景下频繁触发 `Error: Response truncated due to output length limit`，影响 CLI/Telegram/Discord/Slack 多平台用户。已关闭但根因可能未彻底解决。  
   👉 https://github.com/NousResearch/hermes-agent/issues/7237

2. **#14420** 🔥 [CLOSED] 上下文记忆丢失 — **13 条评论**  
   用户反馈 agent 无法基于历史上下文准确回答，中文场景（"记住我叫小明"）下问题尤为突出。  
   👉 https://github.com/NousResearch/hermes-agent/issues/14420

3. **#15717** 🔥 [CLOSED] DeepSeek thinking mode API 错误 — **11 条评论**  
   DeepSeek 思考模式要求回传 `reasoning_content`，但 Hermes 未实现导致 400 错误。  
   👉 https://github.com/NousResearch/hermes-agent/issues/15717

4. **#20249** 💡 [OPEN] Model Presets 动态模型升级 — **7 条评论**  
   建议支持按需将对话从轻量模型（Gemini Flash）升级到高级模型（Opus）处理复杂任务。  
   👉 https://github.com/NousResearch/hermes-agent/issues/20249

5. **#5012** 💡 [OPEN] delegate_task 参数支持 — **6 条评论**  
   `delegate_task` 工具声明了 `provider/model` 参数但实现中被忽略，用户期望能指定子任务的模型。  
   👉 https://github.com/NousResearch/hermes-agent/issues/5012

6. **#5346** ✅ [CLOSED] Shift+Enter 多行输入 — **5 评论，15 👍**  
   高票功能请求，已关闭（可能已实现）。用户对 Alt+Enter/Ctrl+J 不够直观有强烈反馈。  
   👉 https://github.com/NousResearch/hermes-agent/issues/5346

### 4.2 热点分析

**核心诉求洞察**：
- **可靠性**：多条 P1/P2 Bug 涉及 API 错误、上下文丢失，表明核心 Agent 稳定性仍需加强
- **平台适配**：Feishu 表格渲染、Telegram 主题 DM、Slack 会话隔离等平台差异化问题突出
- **交互体验**：多行输入、流式重试状态积累、TUI 导航等 UX 优化需求旺盛
- **模型灵活性**：用户希望更精细地控制模型选择和降级策略

---

## 5. Bug 与稳定性

### 🔴 P1 - 紧急（需立即处理）

| Issue | 标题 | 严重性 | 状态 | Fix PR |
|---|---|---|---|---|
| [#22151](https://github.com/NousResearch/hermes-agent/issues/22151) | 最新更新导致系统完全崩溃 | P1 | CLOSED | 待确认 |
| [#12146](https://github.com/NousResearch/hermes-agent/issues/12146) | Agent 错误回退到 OpenRouter（忽略 custom provider 配置） | P1 | OPEN | - |
| [#21981](https://github.com/NousResearch/hermes-agent/issues/21981) | Telegram 主题 DM 显示 typing 但不返回响应 | P1 | CLOSED | [#22053](https://github.com/NousResearch/hermes-agent/pull/22053) |
| [#19760](https://github.com/NousResearch/hermes-agent/issues/19760) | Nix 构建失败：`npmDepsHash` 过时 | P1 | CLOSED | - |
| [#13951](https://github.com/NousResearch/hermes-agent/issues/13951) | CLI 审批提示被后台输出淹没导致无响应 | P1 | OPEN | - |

### 🟠 P2 - 高优先级

| Issue | 标题 | 状态 | 备注 |
|---|---|---|---|
| [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) | 上下文记忆丢失 | CLOSED | 需验证修复 |
| [#15717](https://github.com/NousResearch/hermes-agent/issues/15717) | DeepSeek thinking mode API 400 | CLOSED | - |
| [#16520](https://github.com/NousResearch/hermes-agent/issues/16520) | 终端工具截断长行导致模型误判文件损坏 | OPEN | - |
| [#19280](https://github.com/NousResearch/hermes-agent/issues/19280) | macOS 终端调整大小导致状态栏重复 | OPEN | - |
| [#15421](https://github.com/NousResearch/hermes-agent/issues/15421) | Slack 顶级消息创建孤立 session | OPEN | - |
| [#15886](https://github.com/NousResearch/hermes-agent/issues/15886) | 长文档写入触发流停滞错误 | OPEN | - |
| [#15524](https://github.com/NousResearch/hermes-agent/issues/15524) | patch 工具条件参数被系统省略 | CLOSED | - |

**稳定性小结**：今日共报告 **5 个 P1** 和 **7 个 P2** Bug，合计 12 个高优先级问题待处理，维护团队压力较大。建议优先解决 [#12146](https://github.com/NousResearch/hermes-agent/issues/12146)（provider 回退）和 [#13951](https://github.com/NousResearch/hermes-agent/issues/13951)（CLI 冻结）。

---

## 6. 功能请求与路线图信号

### 6.1 高价值功能请求

| Issue | 标题 | 优先级 | 社区支持 | 评估 |
|---|---|---|---|---|
| [#20249](https://github.com/NousResearch/hermes-agent/issues/20249) | Model Presets：按需模型升级 | P3 | 0 👍 | 设计新颖，与已有 fallback 机制互补，可行性高 |
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | 自动记忆整合（Auto Dream） | P3 | 1 👍 | 灵感来自 Claude Code，需求真实，但实现复杂度较高 |
| [#19324](https://github.com/NousResearch/hermes-agent/issues/19324) | 自改进过程中的写操作审批策略 | P3 | 0 👍 | 安全相关，建议纳入 |
| [#22135](https://github.com/NousResearch/hermes-agent/issues/22135) | 多 Agent "董事会" 共识协议 | P3 | 0 👍 | 雄心勃勃，可作为长期路线图探索 |
| [#503](https://github.com/NousResearch/hermes-agent/issues/503) | 平台原生富交互（Inline Keyboards 等） | - | 0 👍 | 长期需求，跨平台实现工作量较大 |
| [#11347](https://github.com/NousResearch/hermes-agent/issues/11347) | /detach 后台运行命令 | P3 | 2 👍 | 实用功能，实现难度适中 |

### 6.2 进行中的功能 PR

- **#22051** `/handoff` 系列命令（会话交接）：已提交，功能完整
- **#21639** 国际化状态消息：已提交
- **#18976** Email IMAP IDLE 接收模式：已提交

**路线图建议**：短期聚焦 CLI 稳定性（P1 Bug）和平台适配（P2 Bug）；中期推进 Model Presets 和 Auto Memory Consolidation；长期探索 Multi-Agent 共识机制。

---

## 7. 用户反馈摘要

### 7.1 痛点提炼

| 场景 | 问题描述 | 代表 Issue |
|---|---|---|
| **长对话** | Agent 无法记住用户信息（如中文名"小明"），上下文丢失 | #14420 |
| **长输出** | 生成稍长的回复即被截断，体验差 | #7237 |
| **复杂推理** | 轻量模型处理复杂任务时能力不足，缺少按需升级机制 | #20249 |
| **平台差异** | Feishu 表格不渲染、Telegram 主题 DM 无响应、Slack 会话隔离 | #9549, #21981, #15421 |
| **文件操作** | 长行文件被截断导致模型误判损坏 | #16520 |
| **更新风险** | 用户反映更新后"系统完全崩溃"，对版本更新产生恐惧 | #22151 |
| **Git 安全** | Agent 擅自执行 git add/commit/push，用户担忧 AI 生成内容被强推 | #19324 |

### 7.2 用户满意度信号

- **正面**：`delegate_task` 参数请求表明用户对子任务控制有需求；Shift+Enter 多行输入获 15 👍，表明现有快捷键不够直观
- **负面**：更新引发崩溃（#22151）严重影响信任；上下文丢失（#14420）是最常见投诉
- **期待**：模型按需升级、自动记忆整理、平台富交互等需求反映用户希望 Hermes 更智能、更自主

---

## 8. 待处理积压

以下 Issue/PR 超过 7 天未响应或处理，建议维护者关注：

### 8.1 Issue 积压（按创建时间 + 优先级）

| Issue | 创建日期 | 天数 | 标题 | 优先级 |
|---|---|---|---|---|
| [#5012](https://github.com/NousResearch/hermes-agent/issues/5012) | 2026-04-04 | 35 天 | delegate_task 参数被忽略 | - |
| [#5151](https://github.com/NousResearch/hermes-agent/issues/5151) | 2026-04-05 | 34 天 | 流式重试状态消息积累 | P3 |
| [#5346](https://github.com/NousResearch/hermes-agent/issues/5346) | 2026-04-05 | 34 天 | Shift+Enter 多行支持 | P3 |
| [#6237](https://github.com/NousResearch/hermes-agent/issues/6237) | 2026-04-08 | 31 天 | 文档硬编码路径问题 | P3 |
| [#8430](https://github.com/NousResearch/hermes-agent/issues/8430) | 2026-04-12 | 27 天 | context_length 配置被忽略 | - |
| [#8993](https://github.com/NousResearch/hermes-agent/issues/8993) | 2026-04-13 | 26 天 | 工具调用不稳定/幻觉 | - |
| [#9549](https://github.com/NousResearch/hermes-agent/issues/9549) | 2026-04-14 | 25 天 | Feishu 表格渲染 | P2 |
| [#11347](https://github.com/NousResearch/hermes-agent/issues/11347) | 2026-04-17 | 22 天 | /detach 后台运行 | P3 |

### 8.2 长期未处理 PR

| PR | 创建日期 | 天数 | 标题 | 状态 |
|---|---|---|---|---|
| [#11279](https://github.com/NousResearch/hermes-agent/pull/11279) | 2026-04-16 | 23 天 | fix(delegate): preserve explicit empty child toolsets | OPEN |
| [#11302](https://github.com/NousResearch/hermes-agent/pull/11302) | 2026-04-17 | 22 天 | fix(custom): apply compat User-Agent | OPEN |
| [#11338](https://github.com/NousResearch/hermes-agent/pull/11338) | 2026-04-17 | 22 天 | fix: tighten hermes doctor issue summary | OPEN |
| [#18188](https://github.com/NousResearch/hermes-agent/pull/18188) | 2026-05-01 | 8 天 | feat(gateway): extend runtime footer metadata | OPEN |
| [#18131](https://github.com/NousResearch/hermes-agent/pull/18131) | 2026-05-01 | 8 天 | fix: build Feishu tool client from env credentials | OPEN |

---

## 📊 健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 500 PR + 209 Issues，极其活跃 |
| **Bug 压力** |

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期：** 2026-05-09  
**项目：** qwibitai/nanoclaw  
**数据来源：** GitHub Activity (过去24小时)

---

## 1. 今日速览

今日项目活跃度**极高**，PR 更新量达 19 条（含 5 条已合并），远超日常均值。核心进展集中在**稳定性修复**（SIGTERM 处理、session 管理）和**CLI 能力扩展**（ncl admin CLI 正式发布）。社区提交了 2 个新 Issue，其中 Kubernetes 容器运行时需求具有战略意义，但当前实现仍依赖 Docker。二级维护者参与度显著，14 个 PR 处于待审状态，部分积压超过两周。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次发布记录未在数据中体现，建议关注项目 Releases 页面。

---

## 3. 项目进展

### 已合并 PR（5 条）

| PR 编号 | 标题 | 贡献者 | 影响力评估 |
|---------|------|--------|-----------|
| [#2359](https://github.com/qwibitai/nanoclaw/pull/2359) | fix(shutdown): drain in-flight dispatchResponse on SIGTERM | @Joi | ⭐⭐⭐ 关键修复，防止信号处理竞态 |
| [#2358](https://github.com/qwibitai/nanoclaw/pull/2358) | fix(shutdown): drain in-flight routeInbound before exit | @Joi | ⭐⭐⭐ 关键修复，防止重启丢回复 |
| [#2357](https://github.com/qwibitai/nanoclaw/pull/2357) | feat(intake): replace env-var allowlist with DB column + /intake command | @Joi | ⭐⭐ 功能增强，简化接入配置 |
| [#2350](https://github.com/qwibitai/nanoclaw/pull/2350) | feat(cli): add ncl admin CLI | @gavrielc | ⭐⭐⭐ 高价值工具，增强运维能力 |
| [#2300](https://github.com/qwibitai/nanoclaw/pull/2300) | setup: correct Slack member-ID card directions | @alipgoldberg | ⭐ 文档修正 |

**关键进展解读：**
- SIGTERM 修复系列（#2358/#2359）是本月最重要的稳定性工作，解决了容器升级/部署时的消息丢失问题。
- `ncl admin CLI` 的合并标志项目运维能力进入新阶段，支持 DB 查询和组/会话管理。
- intake 模块从环境变量配置迁移到数据库列，为多渠道管理提供可编程接口。

---

## 4. 社区热点

### 最值得关注的新 Issue

| Issue | 标题 | 热度指标 |
|-------|------|---------|
| [#2354](https://github.com/qwibitai/nanoclaw/issues/2354) | Kubernetes container runtime for agent spawning | 🆕 功能需求，K8s 集群支持 |
| [#2355](https://github.com/qwibitai/nanoclaw/issues/2355) | `ncl` not added to PATH for installs upgrading past 2.0.45 | 🐛 用户可复现 Bug |

**#2354 分析：** 用户请求将容器运行时从 Docker 扩展到 Kubernetes，实现 per-session pod 隔离。当前代码硬编码 `docker run`，该请求需重构 `container-runtime.ts` 接口定义。这是一个**架构级提议**，如实现将大幅提升大规模部署场景的适用性，但短期内复杂度较高。

---

## 5. Bug 与稳定性

### 新报告 Bug

| Issue/PR | 描述 | 严重程度 | Fix 状态 |
|----------|------|---------|---------|
| [#2355](https://github.com/qwibitai/nanoclaw/issues/2355) | 升级至 2.0.45+ 后 `ncl` 命令不在 PATH 中 | 🟡 中等 | [#2356](https://github.com/qwibitai/nanoclaw/pull/2356) 已提交 |
| [#2353](https://github.com/qwibitai/nanoclaw/pull/2353) | root 用户 + 网络文件系统的 session 目录权限问题 | 🟡 中等 | 已有 PR，待审 |
| [#2352](https://github.com/qwibitai/nanoclaw/pull/2352) | install_packages 构建超时从 5min 提升至 15min | 🟢 低 | 已有 PR，待审 |

**稳定性评估：** 今日合并的 #2358/#2359 修复了此前未被充分测试的 SIGTERM 边界情况，建议在下一版本说明中加入相关测试用例覆盖说明。

---

## 6. 功能请求与路线图信号

### 值得关注的功能 PR

| PR | 标题 | 路线图相关性 | 评估 |
|----|------|-------------|------|
| [#2351](https://github.com/qwibitai/nanoclaw/pull/2351) | feat(db): move container config from filesystem to DB | 🔴 核心架构 | 高价值，降低状态复杂度 |
| [#2356](https://github.com/qwibitai/nanoclaw/pull/2356) | fix(update-nanoclaw): install ~/.local/bin/ncl symlink on upgrade | 🟢 运维体验 | 快速修复，应优先合并 |
| [#2330](https://github.com/qwibitai/nanoclaw/pull/2330) | fix(container): make axios MCP servers work through OneCLI's proxy | 🟡 兼容性 | 解决企业代理场景 |
| [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) | fix(formatter): treat unknown slash commands as normal chat | 🟡 UX 修复 | 提升聊天容错能力 |

**路线图信号：** #2351 将容器配置迁移至数据库是重大架构改进，与 #2350 (admin CLI) 形成配套，表明项目正在构建更规范的运维基础设施。K8s 支持请求（#2354）虽尚未有实现 PR，但与项目向多运行时架构演进的方向一致。

---

## 7. 用户反馈摘要

> "Users who reach 2.0.45+ via `/update-nanoclaw` (or `/migrate-from-v1`) end up with `bin/ncl` and the systemd service correctly exposing the CLI socket, but no `~/.local/bin/ncl` symlink — so `ncl` isn't on PATH"

**核心痛点：** 版本升级路径存在 CLI 可访问性断裂，用户需手动解决 PATH 问题。

> "Linux installs that run NanoClaw as root with the data directory on a network filesystem hit an unrecoverable container spawn loop."

**使用场景：** 企业级 Linux 部署（root 权限 + NFS 存储）中存在权限边界问题，导致容器循环启动失败。

---

## 8. 待处理积压

### 长期未响应的 PR（>14 天）

| PR | 标题 | 创建日期 | 状态 | 建议 |
|----|------|---------|------|------|
| [#1917](https://github.com/qwibitai/nanoclaw/pull/1917) | fix: rename @Andy trigger references in runtime group registration | 2026-04-22 | OPEN | 🔴 需评审 |
| [#1916](https://github.com/qwibitai/nanoclaw/pull/1916) | fix: guard numeric config env vars against NaN and non-positive values | 2026-04-22 | OPEN | 🔴 需评审 |
| [#1913](https://github.com/qwibitai/nanoclaw/pull/1913) | fix: rename @Andy trigger references when assistant name changes | 2026-04-22 | OPEN | 🔴 需评审 |
| [#1912](https://github.com/qwibitai/nanoclaw/pull/1912) | fix: handle empty container stdout with clear error in fallback parser | 2026-04-22 | OPEN | 🔴 需评审 |
| [#2339](https://github.com/qwibitai/nanoclaw/pull/2339) | fix(test): add missing in_reply_to to A2A test objects | 2026-05-07 | OPEN | 🟡 影响构建 |

**积压分析：** #1912-#1917 由同一贡献者（@boskodev790）于 4 月 22 日提交，已 17 天未获反馈。其中 #1916 (#1912) 涉及配置校验和错误处理，属于稳定性相关修复，建议维护者优先处理以维护社区信任。

---

## 📊 健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | 🟢 高 | 24h 19 PR 更新，贡献者广泛 |
| 响应速度 | 🟡 中 | 存在 >14 天积压 PR |
| 质量控制 | 🟢 良 | 关键修复已合并，测试覆盖逐步完善 |
| 社区参与 | 🟢 优 | 多位维护者（@Joi, @gavrielc）持续贡献 |
| **综合** | **🟢 8/10** | 项目处于健康迭代期，建议加强老旧 PR 清理 |

---

*报告生成时间：2026-05-09 | 数据区间：2026-05-08 ~ 2026-05-09*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期**: 2026-05-09  
**数据来源**: github.com/nearai/ironclaw

---

## 1. 今日速览

IronClaw 项目今日保持高度活跃，共处理 **46 条 PR 更新**（25 待合并，21 已合并/关闭）和 **12 条 Issues 动态**。核心工作仍围绕 **Reborn 重构 epic (#2987)** 展开，多个子系统（loop driver、secrets store、prompt port）正并行推进。今日成功发布 **ironclaw v0.28.0** 大版本更新，同时修复了 Gateway 多租户事件泄漏的安全隐患。值得注意的是夜间 E2E 测试出现失败，需关注。整体项目健康度良好，但 Reborn 集成工作仍处于攻坚阶段。

---

## 2. 版本发布

### ✅ ironclaw v0.28.0 / ironclaw_common v0.4.2 发布

| 范围 | 版本变化 | 变更类型 |
|------|---------|---------|
| `ironclaw` | 0.24.0 → **0.28.0** | 功能迭代 |
| `ironclaw_common` | 0.4.1 → **0.4.2** | API 兼容 |

**详细变更**:
- 本次发布基于多个 Reborn 基础设施 PR 的合并，包括 loop support MVP、durable credential stores、loop driver registry 等核心组件
- API 保持向下兼容，现有用户可平滑升级

📎 链接: [PR #3388](https://github.com/nearai/ironclaw/pull/3388)

---

## 3. 项目进展

### 🔗 今日合并/关闭的重要 PRs

| PR # | 标题 | 影响范围 | 状态 |
|------|------|---------|------|
| **#3401** | feat(reborn): add durable credential stores | secrets, reborn | ✅ 已合并 |
| **#3403** | Add Reborn production loop model gateway | reborn, llm | ✅ 已合并 |
| **#3405** | feat(reborn): add loop driver registry readiness | reborn | ✅ 已合并 |
| **#3408** | fix(reborn): encrypt durable credential payloads | reborn, security | ✅ 已合并 |
| **#3413** | Add checkpoint state staging store | reborn | ✅ 已合并 |
| **#3397** | Emit Reborn loop support model and transcript milestones | reborn | ✅ 已合并 |
| **#3391** | Add Reborn loop support MVP | reborn | ✅ 已合并 |
| **#3366** | fix(missions): auto-resume paused missions after gate resolution | missions, gateway | ✅ 已合并 |
| **#3335** | feat(reborn): port encrypted secrets store and add credential account sessions | reborn, secrets | ✅ 已合并 |

**重点进展解读**:

1. **Reborn Secrets 子系统完成**: 连续多个 PR 完成了 durable credential stores 的构建、加密和持久化，确保 Reborn epic 关键依赖就绪

2. **Loop Driver 基础设施就绪**: `#3405` 实现了 loop driver registry 和 readiness validation，为 TurnRunner 执行模型奠定基础

3. **Missions 自动恢复修复**: `#3366` 解决了暂停任务在 OAuth 或 approval gate 解决后无法自动恢复的问题，显著改善用户体验

📎 链接: [PR #3401](https://github.com/nearai/ironclaw/pull/3401) | [PR #3405](https://github.com/nearai/ironclaw/pull/3405) | [PR #3366](https://github.com/nearai/ironclaw/pull/3366)

---

## 4. 社区热点

### 💬 今日讨论最活跃的 Issues/PRs

| Issue/PR # | 标题 | 评论数 | 类型 |
|------------|------|--------|------|
| **#3067** | [TEST] Reborn: Add vertical-slice integration test suite | 32 | Issue |
| **#3016** | [Reborn] Reborn cutover blocker: add reference AgentLoopHost facade | 11 | Issue |
| **#3193** | [Reborn] Define conversation binding and session thread contracts | 5 | Issue |
| **#3107** | [Reborn] Define AgentLoopDriver and run-class profile contract | 3 | Issue |

**热点分析**:

🔴 **#3067 - Reborn 集成测试套件**（讨论最热，32 条评论）
- **核心诉求**: 需要通过公共入口点（而非仅 crate 本地测试）验证 Reborn substrate 的集成测试
- **进展**: 已在 `origin/reborn-integration` 分支实现了语义切片
- **重要性**: 这是 Reborn 功能可交付性的关键验证，直接影响 cutover 决策

🔴 **#3016 - AgentLoopHost facade**（11 条评论）
- **核心诉求**: 定义 Reborn cutover 的关键阻塞项，需要引用型 AgentLoopHost 门面
- **依赖链**: 受 #2987、#3031 追踪，是多个子系统的前置依赖

📎 链接: [Issue #3067](https://github.com/nearai/ironclaw/issues/3067) | [Issue #3016](https://github.com/nearai/ironclaw/issues/3016) | [Issue #3193](https://github.com/nearai/ironclaw/issues/3193)

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug / 回归问题

| Issue # | 标题 | 严重程度 | 状态 | 备注 |
|----------|------|---------|------|------|
| **#3323** | Nightly E2E failed | ⚠️ **高** | 🔴 OPEN | v2-engine E2E 测试失败 |
| **#3385** | Conversation titles are not auto-generated | 🟡 中 | 🔴 OPEN | 标题直接使用首条用户消息 |
| **#3390** | fix(web): isolate cross-tenant SSE/WS status events | ✅ 已修复 | 🟢 OPEN | 多租户事件泄漏安全问题 |

**详细说明**:

1. **#3323 - 夜间 E2E 测试失败** (高优先级)
   - 失败任务: `E2E (v2-engine)`
   - 提交: `3fab297c05a8e056f0e36b3b418c0d54db1afa08`
   - 影响: v2 engine 生产路径验证受阻
   - **需维护者紧急排查**

2. **#3385 - 对话标题未自动生成** (中等)
   - 问题: Web 聊天侧边栏的对话标题直接使用首条用户消息，而非生成摘要标题
   - 用户感知影响: 高，影响对话管理可用性

3. **#3390 - 多租户 SSE/WS 事件隔离** (已修复，待合并)
   - 修复内容: 隔离 GatewayChannel::send_status 中的跨租户状态事件泄漏
   - 涉及场景: heartbeat、routines、sandbox jobs、WASM/Slack OAuth completion
   - **风险等级**: 中，推荐优先合并

📎 链接: [Issue #3323](https://github.com/nearai/ironclaw/issues/3323) | [Issue #3385](https://github.com/nearai/ironclaw/issues/3385) | [PR #3390](https://github.com/nearai/ironclaw/pull/3390)

---

## 6. 功能请求与路线图信号

### 🚀 今日新开启的功能 Issue

| Issue # | 标题 | 优先级 | 预计规模 |
|----------|------|--------|---------|
| **#3410** | [Reborn] Add v2 engine driver model adapter | 高 | XL |
| **#3409** | [Reborn] Add host-owned loop prompt bundle port | 高 | - |
| **#3407** | [Reborn] Add text-only AgentLoopDriverHost factory | 高 | - |
| **#3406** | [Reborn] Add loop checkpoint state staging store | 中 | - |
| **#3404** | [Reborn] Add concrete TurnRunner worker composition | 高 | - |
| **#3402** | [Reborn] Add loop driver registry and readiness validation | 高 | - |

**路线图信号解读**:

🔴 **Reborn Loop Driver 系统快速扩张**
- 今日集中新开 6 个 Reborn 相关 Issue，均为 #3107 (AgentLoopDriver) 的子任务
- 表明 `TurnRunner` 执行模型和 loop driver 集成进入实现快车道
- `#3402` driver registry 已合并（见进展部分），说明工程实现正在跟上设计节奏

🟡 **v2 Engine 集成前瞻**
- `#3410` 明确规划 v2 engine driver model adapter
- 结合 E2E 测试失败 (#3323)，v2 engine 集成仍需稳定化

📎 链接: [Issue #3410](https://github.com/nearai/ironclaw/issues/3410) | [Issue #3409](https://github.com/nearai/ironclaw/issues/3409) | [Issue #3404](https://github.com/nearai/ironclaw/issues/3404)

---

## 7. 用户反馈摘要

### 💭 从 Issues 评论中提炼的反馈

**开发者/贡献者反馈**:

| 反馈点 | 来源 | 频次 | 解读 |
|--------|------|------|------|
| 需要端到端集成测试验证 Reborn substrate | #3067 评论区 | 高 | 开发者对 Reborn 可测试性有明确诉求，担心仅靠单元测试无法保证交付质量 |
| 多租户 SSE/WS 事件泄漏风险 | #3390 | 高 | 安全问题需优先修复 |
| Missions 在 Gate 解决后应自动恢复 | #3366 合并修复 | 中 | 用户体验改进诉求已解决 |

**最终用户反馈**:

| 反馈点 | 来源 | 严重程度 |
|--------|------|---------|
| 对话标题直接使用首条用户消息，不够友好 | #3385 | 🟡 中 |
| MCP 服务器启动时授权失败导致激活延迟 | PR #3006 | 中 |

📎 链接: [Issue #3385](https://github.com/nearai/ironclaw/issues/3385)

---

## 8. 待处理积压

### ⚠️ 长期未解决的重要 Issue（超过 7 天无更新或无 PR）

| Issue # | 标题 | 创建日期 | 状态 | 风险 |
|----------|------|---------|------|------|
| **#3016** | AgentLoopHost facade (cutover blocker) | 2026-04-28 | 🔴 OPEN | ⚠️ 高 |
| **#3004** | add dedicated image tool configuration | 2026-04-28 | 🔴 OPEN | 中 |
| **#3006** | retry startup MCP activation after auth failures | 2026-04-28 | 🔴 OPEN | 中 |
| **#3065** | persist inline image artifacts | 2026-04-29 | 🔴 OPEN | 中 |
| **#3067** | Reborn integration test suite | 2026-04-29 | 🔴 OPEN | ⚠️ 高 |
| **#3107** | AgentLoopDriver contract | 2026-04-30 | 🔴 OPEN | ⚠️ 高 |

**积压分析**:

1. **高优先级阻塞项**:
   - `#3016` 和 `#3067` 均为 Reborn cutover 的关键依赖项，需优先推进
   - `#3107` 作为 AgentLoopDriver 父任务，下辖多个子 Issue 已开始实现

2. **功能增强类积压**:
   - `#3004` (图像工具配置)、`#3006` (MCP 重试)、`#3065` (图像持久化) 均为用户体验增强类
   - 建议根据资源情况评估纳入近期迭代

📎 链接: [Issue #3016](https://github.com/nearai/ironclaw/issues/3016) | [Issue #3067](https://github.com/nearai/ironclaw/issues/3067) | [Issue #3107](https://github.com/nearai/ironclaw/issues/3107)

---

## 📊 关键指标一览

| 指标 | 数值 | 趋势 |
|------|------|------|
| PR 吞吐量 (24h) | 46 条更新 | 📈 活跃 |
| Issue 新增 (24h) | 12 条 | 📈 活跃 |
| 版本发布 | 1 个 (v0.28.0) | ✅ |
| Bug 报告 (24h) | 2 条 | 🟡 需关注 |
| 合并 PRs | 21 条 | ✅ 高效 |
| 待合并 PRs | 25 条 | 📋 有一定积压 |

---

**报告生成时间**: 2026-05-09  
**数据截止**: 2026-05-08 23:59 UTC  
**维护者关注项**: E2E 测试失败 (#3323) 需紧急排查；Reborn cutover 阻塞项 (#3016, #3067) 需推进

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报

**报告日期：** 2026-05-09  
**数据来源：** GitHub (netease-youdao/LobsterAI)  
**统计周期：** 过去 24 小时

---

## 1. 今日速览

昨日 LobsterAI 项目保持极高活跃度，共处理 **29 条 PR 更新**（合并/关闭 27 条），Issue 层面新开 2 条 UI 优化类反馈。多个大型功能 PR 集中完成合并，包括 CodeMirror 6 代码块重构、收藏功能、必填字段标记等，同时有一个关键 Bug Fix（#1923/#1756 停止会话后爬虫任务仍执行）进入 release 分支。项目整体代码合并节奏紧凑，用户反馈的 UI 一致性问题正在被系统性修复，代码库健康度良好。

---

## 2. 版本发布

> **无新版本发布**

过去 24 小时无 Release 记录，但多个重要功能的 cherry-pick 已合并至 `release/2026.05.08` 分支，预计近期会有版本发布。

---

## 3. 项目进展

### 🔥 重大合并（按影响力排序）

| PR # | 类型 | 标题 | 合并日期 | 贡献者 |
|------|------|------|----------|--------|
| [#1923](https://github.com/netease-youdao/LobsterAI/pull/1923) | Bug Fix | 修复停止会话后爬虫任务仍继续执行的问题（cherry-pick #1756） | 05-08 | @btc69m979y-dotcom |
| [#1922](https://github.com/netease-youdao/LobsterAI/pull/1922) | Feature | CodeMirror 6 替换语法高亮（cherry-pick #1306） | 05-08 | @btc69m979y-dotcom |
| [#1919](https://github.com/netease-youdao/LobsterAI/pull/1919) | Feature | 全局表单必填字段红色标记（cherry-pick #1511） | 05-08 | @btc69m979y-dotcom |
| [#1917](https://github.com/netease-youdao/LobsterAI/pull/1917) | Feature | Cron 调度类型与可视化构建器（cherry-pick #1519） | 05-08 | @btc69m979y-dotcom |
| [#1918](https://github.com/netease-youdao/LobsterAI/pull/1918) | Bug Fix | 修复会话中出现 NO_REPLY 及其前缀的问题 | 05-08 | @liugang519 |
| [#1929](https://github.com/netease-youdao/LobsterAI/pull/1929) | Chore | override local agent avatar | 05-08 | @fisherdaddy |
| [#1928](https://github.com/netease-youdao/LobsterAI/pull/1928) | Optimize | 侧边栏 UI 优化 | 05-08 | @fisherdaddy |
| [#1924](https://github.com/netease-youdao/LobsterAI/pull/1924) | Optimize | agents 布局优化 | 05-08 | @fisherdaddy |

### ⏳ 待合并 PR（2 条）

| PR # | 类型 | 标题 | 状态 | 贡献者 |
|------|------|------|------|--------|
| [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) | Feature | 增强 Skills/TaskRunHistory 空状态图标与副标题 | OPEN | @xiaoye5200 |
| [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) | Feature | Cowork 初始化骨架屏加载动画 | OPEN | @xiaoye5200 |

### 📦 功能亮点

**CodeMirror 6 代码块重写 (#1922/#1306)**
- 引擎：`react-syntax-highlighter` → `CodeMirror 6`
- 新增能力：50+ 语言语法高亮、行号、代码折叠、搜索、全屏放大、字数统计
- 覆盖文件：`src/renderer/components/CodeBlock.tsx`、`MarkdownContent.tsx`

**收藏功能完成合并 (#1664)**
- 在用户/AI 消息上添加星标按钮
- 新增侧边栏「收藏」入口与独立 BookmarksView 页面
- 支持一键跳转至原始会话位置并高亮闪烁

**Cron 调度类型 (#1917/#1519)**
- 新增自定义 Cron 表达式选项（5段式：分 时 日 月 周）
- 可视化 Builder 模式 + 原始表达式模式

---

## 4. 社区热点

### 今日新开 Issues（2 条，均来自 @xiaoye5200）

**[#1920](https://github.com/netease-youdao/LobsterAI/issues/1920)** `[UI] Cowork 初始化显示空白加载文本而非骨架屏`
- 状态：OPEN | 评论：1
- 诉求：Loading 状态应使用骨架屏（Skeleton Shimmer）替代纯文本 "Loading..."，与项目其他区域风格保持一致
- 对应 PR：[#1769](https://github.com/netease-youdao/LobsterAI/pull/1769)（待合并）

**[#1921](https://github.com/netease-youdao/LobsterAI/issues/1921)** `[UI] Skills Manager 和 TaskRunHistory 空状态缺少图标和描述性副标题`
- 状态：OPEN | 评论：0
- 诉求：空状态应添加 PuzzleIcon 图标和描述性副标题，对标 CoworkSessionList 的空状态设计
- 对应 PR：[#1770](https://github.com/netease-youdao/LobsterAI/pull/1770)（待合并）

> 📌 热点分析：两个 Issue 均来自同一贡献者 @xiaoye5200，聚焦 UI 一致性体验改善，说明项目在快速迭代中 UI 设计规范需持续对齐。

---

## 5. Bug 与稳定性

### 🔴 高优先级

**[#1756/#1923](https://github.com/netease-youdao/LobsterAI/pull/1756)** `停止会话后爬虫任务仍继续执行`
- **严重程度：** 高（功能缺陷）
- **根因：** `handleApprovalRequested()` 中非删除命令的 auto-approve 在 stop cooldown 检查之前执行
- **修复：** 调整检查顺序：`isSessionInStopCooldown()` → `manuallyStoppedSessions` → auto-approve
- **状态：** ✅ 已合并至 main 并 cherry-pick 至 release 分支

### 🟡 已修复问题（合并至 release）

| PR | 问题描述 |
|----|----------|
| [#1918](https://github.com/netease-youdao/LobsterAI/pull/1918) | 会话中出现 NO_REPLY 及其前缀文本 |
| [#1927](https://github.com/netease-youdao/LobsterAI/pull/1927) | Cowork 缓存读取显示零值时未隐藏 |
| [#1925](https://github.com/netease-youdao/LobsterAI/pull/1925) | 预览文件重复和有效性问题 |
| [#1161](https://github.com/netease-youdao/LobsterAI/pull/1161) | IMAP/SMTP 连接失败时错误信息显示为 "}" |

---

## 6. 功能请求与路线图信号

### 来自 Issues 的需求

- **#1920/#1921**：UI 一致性增强（骨架屏 + 空状态图标化） → PR #1769/#1770 已实现
- 趋势判断：项目进入「UI 精细化」阶段，从功能完备向体验优化过渡

### 已进入 Release 的新特性

| 特性 | PR | 分支来源 |
|------|-----|----------|
| CodeMirror 6 代码块 | #1922 | cherry-pick #1306 |
| 全局必填字段标记 | #1919 | cherry-pick #1511 |
| Cron 定时任务调度 | #1917 | cherry-pick #1519 |
| 收藏/书签功能 | #1664 | main |
| 消息时间戳展示 | #1147 | main |

> 🔮 **路线图信号：** 下一版本将聚焦 UI 体验提升（骨架屏、空状态、一致性）和代码块渲染能力升级。

---

## 7. 用户反馈摘要

### 从 PR/Issue 评论中提取

| 来源 | 内容 | 洞察 |
|------|------|------|
| #1923 PR | 「停止后爬虫仍执行」问题描述 | 用户遇到任务控制失效的体验断裂 |
| #1920 Issue | 「Loading... 文本体验断裂」 | 用户对加载状态的视觉期望被打破 |
| #1921 Issue | 「空状态感觉未完成」 | 缺少引导性 UI 让用户困惑下一步操作 |

### 核心痛点归纳

1. **任务控制失效**：停止操作未完全生效，用户失去对 AI 行为的掌控感
2. **加载体验断层**：静态文本加载 vs 骨架屏动画，视觉反馈不足
3. **空状态引导缺失**：用户不知道某功能是「空的」还是「加载失败」

---

## 8. 待处理积压

> ⚠️ 以下为长期未响应或需关注的事项

| 项目 | 类型 | 创建时间 | 状态 | 说明 |
|------|------|----------|------|------|
| #1920 | Issue | 05-08 | OPEN | 需 review 并合并对应 PR #1769 |
| #1921 | Issue | 05-08 | OPEN | 需 review 并合并对应 PR #1770 |

**备注：** 积压量极低（仅 2 条 open issues），且均已有对应 PR，说明项目响应效率极高。

---

## 📊 数据摘要

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新开 Issue | 2 | → |
| 关闭 Issue | 0 | → |
| PR 更新 | 29 | ↑ 高于近期均值 |
| 待合并 PR | 2 | → |
| 新版本发布 | 0 | → |

**综合评估：** 🟢 项目健康度良好，代码合并节奏正常，UI 体验优化正在系统性推进，建议关注 PR #1769/#1770 的 review 进度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**项目**: Moltis (github.com/moltis-org/moltis)  
**日期**: 2026-05-09  
**编制**: AI 项目分析师

---

## 1. 今日速览

2026-05-09 期间，Moltis 项目保持较高活跃度，共处理 **5 个 PR**（其中 2 个已合并/关闭，3 个待合并）。项目于 05-08 发布新版本 **v20260508.01**，标志着上一迭代功能的正式固化。今日核心进展集中在 **UI/UX 现代化**（聊天组件重新设计、文档站点迁移至 Astro）、**国际化完善**（繁体中文翻译优化）以及 **语音模型支持增强** 三大方向。Issues 层面暂无新增报告，项目整体稳定性良好，积压待处理 PR 均在合理生命周期内。

---

## 2. 版本发布

### 🎉 新版本: v20260508.01

| 项目 | 详情 |
|------|------|
| **版本号** | 20260508.01 |
| **发布日期** | 2026-05-08 |
| **类型** | 常规迭代版本 |
| **破坏性变更** | 暂无报告 |
| **迁移注意事项** | 无特殊迁移需求 |

> 📦 [Release 页面](https://github.com/moltis-org/moltis/releases/tag/20260508.01)

---

## 3. 项目进展

### ✅ 已关闭/合并的 Pull Requests

| PR # | 标题 | 贡献者 | 状态 | 影响 |
|------|------|--------|------|------|
| **#986** | Update and improve zh-TW Traditional Chinese locale | @PeterDaveHello | CLOSED | **国际化完善** - 统一"AI 助理"、"Moltis"等术语翻译，提升繁体中文用户界面清晰度与一致性 |
| **#984** | feat(voice): surface OpenAI realtime model guidance | @penso | CLOSED | **语音功能增强** - 新增 `whisper` 模型设置（支持 `gpt-4o-transcribe` 系列）、在语音设置中展示 Realtime 模型 ID 指引、添加 Playwright 覆盖测试 |

### 🔄 待合并的 Pull Requests

| PR # | 标题 | 贡献者 | 状态 | 核心价值 |
|------|------|--------|------|----------|
| **#566** | feat(external-agents): add persistent agent sessions | @penso | OPEN | **跨会话持久化** - 为 ACP/Codex CLI 外部 agent 会话添加持久化支持，实现 Moltis 聊天与外部 agent 对话的跨轮次绑定、解绑、状态查询及 live-session 管理 |
| **#985** | Refresh web chat composer | @penso | OPEN | **UI 现代化** - 重新设计聊天输入框为居中圆角 composer，底部增加模型/推理/附件/语音/发送控件；token 状态改为底部展示并支持换行；增加独立附件选择器 |
| **#987** | Replace docs deployment with Astro site | @penso | OPEN | **文档站点重构** - 将 mdBook 迁移至 Astro 生成站点，保留现有 Markdown 源文件及 `.html` URL 结构，新增侧边栏导航、页面目录、复制按钮、标题搜索、响应式汉堡菜单及亮/暗/自动主题切换 |

---

## 4. 社区热点

今日无新增 Issues，但 PR 层面呈现 **多点开花** 态势：

### 🔥 高优先级 PR 信号

| PR # | 热度指标 | 热点解读 |
|------|----------|----------|
| **#566** | 持续活跃（2026-04-06 创建，05-08 更新） | **外部 agent 生态整合** 的核心功能请求，表明用户对 MCP/Codex CLI 深度集成的强烈需求 |
| **#985** | 当日新建 | **聊天体验优化** 直击用户日常使用痛点，重新设计的 composer 有望显著提升交互效率 |
| **#987** | 当日新建 | **文档体验重构** 反映开发者对项目可维护性及用户文档检索体验的重视 |

> 📌 **趋势洞察**: 当前 PR 矩阵显示项目正从"功能堆砌"向"体验精细化"转型，UI/UX 投入占比显著提升。

---

## 5. Bug 与稳定性

**✅ 今日无新增 Bug 报告**  
过去 24 小时 Issues 面板平静，未检测到崩溃、回归或阻塞性问题。项目在快速迭代期保持了良好的稳定性水位。

---

## 6. 功能请求与路线图信号

### 🔮 从 Open PR 推断的下一版本方向

| PR # | 功能方向 | 纳入可能性 | 判断依据 |
|------|----------|------------|----------|
| **#566** | 外部 Agent 持久化会话 | ⭐⭐⭐ 高 | 生命周期较长，作者持续更新，核心 API 已接入 gateway |
| **#985** | 聊天 Composer 重新设计 | ⭐⭐⭐ 高 | 当日提交，UI 改动明确，与 v20260508.01 迭代节奏吻合 |
| **#987** | Astro 文档站点 | ⭐⭐ 中 | 基础设施改进，通常作为次要迭代交付 |
| **#984** | OpenAI Realtime 语音引导 | ⭐⭐⭐ 高 | 已合并发布，功能闭环完整 |

### 💡 潜在路线图信号

- **Agent 生态整合**: #566 暗示 Moltis 正寻求与 MCP、Codex CLI 等外部 agent 框架的深度绑定能力
- **语音交互深化**: #984 已迈出第一步，预计后续版本将完善 Realtime 模型的实际调用支持
- **国际化加速**: #986 显示社区对多语言支持的关注，预计其他语言（尤其东亚语言）将持续优化

---

## 7. 用户反馈摘要

基于今日 PR 活动推断的用户诉求：

| 场景 | 诉求 | 对应功能 |
|------|------|----------|
| **多轮对话连续性** | 用户期望聊天会话能与外部 AI agent 保持状态关联 | #566 persistent agent sessions |
| **移动端/触控交互** | 现有 composer 在移动端体验欠佳，需响应式布局 | #985 重新设计 |
| **文档检索效率** | mdBook 站点导航能力不足，搜索功能缺失 | #987 Astro 迁移 |
| **非英语用户** | 繁体中文翻译不一致，影响本地用户体验 | #986 zh-TW 优化 |

> **满意度观察**: 项目在功能丰富度上获认可，但 UI 细节与文档体验仍有优化空间，与当前 PR 方向高度一致。

---

## 8. 待处理积压

### ⚠️ 长期未响应项提醒

| 类型 | # | 标题 | 创建时间 | 状态 | 建议处理 |
|------|---|------|---------|----------|------|----------|
| **PR** | #566 | feat(external-agents): add persistent agent sessions | 2026-04-06 | OPEN | **优先级**: 高。建议维护者尽快 review，该功能涉及核心会话架构改动，积压时间较长（>30 天） |

> 📋 **积压分析**: #566 是当前唯一积压超过两周的 Open PR，距创建已近 1 个月。建议优先完成技术方案评审，避免阻塞依赖该 API 的后续功能（如 #985 中的会话绑定逻辑）。

---

## 📊 数据总览

| 指标 | 数值 |
|------|------|
| 📂 新增 Issues | 0 |
| 🔧 新增 PRs | 5 |
| ✅ 已合并/关闭 | 2 |
| ⏳ 待合并 | 3 |
| 🏷️ 新版本 | 1 (v20260508.01) |
| 🐛 Bug 报告 | 0 |

---

**报告生成时间**: 2026-05-09  
**数据来源**: GitHub Moltis Org (github.com/moltis-org/moltis)  
**分析师备注**: 项目当前处于健康迭代期，建议关注 #566 积压问题，同时把握 UI 现代化的窗口期推进 #985/#987 合并。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**报告日期**: 2026-05-09  
**数据来源**: GitHub (agentscope-ai/QwenPaw)

---

## 1. 今日速览

QwenPaw 项目今日保持高度活跃，共处理 **33 条 Issues 更新**（新开/活跃 19 条，关闭 14 条）和 **37 条 PR 更新**（待合并 16 条，已合并/关闭 21 条）。项目发布了 **v1.1.6-beta.1** 首个测试版本，涵盖 2 个 PR 的变更。今日社区讨论聚焦于 WebUI 性能问题（多轮对话卡顿、新版 UI 卡顿）、平台兼容性问题（Windows 控制台窗口闪烁、本地模型 GPU 调用）以及渠道功能增强（钉钉、DingTalk、Discord 线程支持）。整体项目健康度良好，维护响应及时，多个 Bug 修复已进入 Review 阶段。

---

## 2. 版本发布

### 🆕 v1.1.6-beta.1 发布

**发布时间**: 2026-05-09  
**发布类型**: Beta 预发布版本

**更新内容** (共 2 个 PR):

| PR | 作者 | 内容描述 |
|---|---|---|
| [#4082](https://github.com/agentscope-ai/QwenPaw/pull/4082) | @zhijianma | 版本号更新至 1.1.6b1 |
| [#4081](https://github.com/agentscope-ai/QwenPaw/pull/4081) | @yutai78786 | 集成测试：新增应用启动和设置/envs 冒烟测试 |

**破坏性变更**: 无

**迁移注意事项**: 无

**关联 Issue**:
- [#4081](https://github.com/agentscope-ai/QwenPaw/pull/4081) - 修复控制台 SSE 崩溃问题

---

## 3. 项目进展

### ✅ 今日已合并/关闭的重要 PRs

| PR | 状态 | 类型 | 说明 |
|---|---|---|---|
| [#4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) | ✅ 已合并 | fix(pack) | 修复 Windows conda 打包失败问题，恢复 conda-pack 前置工具 |
| [#4122](https://github.com/agentscope-ai/QwenPaw/pull/4122) | ✅ 已合并 | feat(provider) | 新增阿里云 token plan 作为内置 provider |
| [#4064](https://github.com/agentscope-ai/QwenPaw/pull/4064) | ✅ 已合并 | fix(reload) | 通过 reload_agent 路由 AgentConfigWatcher，实现优雅任务排空 |
| [#4032](https://github.com/agentscope-ai/QwenPaw/pull/4032) | ✅ 已合并 | feat(doctor) | 新增 Windows 环境诊断功能 |
| [#4076](https://github.com/agentscope-ai/QwenPaw/pull/4076) | ✅ 已合并 | fix(log) | 全平台使用 RotatingFileHandler 实现日志轮转 |
| [#4121](https://github.com/agentscope-ai/QwenPaw/pull/4121) | ✅ 已合并 | fix(console) | 修复控制台测试 |
| [#2315](https://github.com/agentscope-ai/QwenPaw/pull/2315) | ✅ 已合并 | fix(mcp) | 为不安全 stdio 客户端禁用热重载 |
| [#3238](https://github.com/agentscope-ai/QwenPaw/pull/3238) | ✅ 已合并 | feat | 新增 PlanNotebook 实验性支持 |
| [#308](https://github.com/agentscope-ai/QwenPaw/pull/308) | ✅ 已合并 | fix(channels) | 修复渲染器中 dict 类型工具参数的崩溃 |

### 🔄 今日待合并的活跃 PRs

| PR | 状态 | 类型 | 说明 | 优先级 |
|---|---|---|---|---|
| [#4134](https://github.com/agentscope-ai/QwenPaw/pull/4134) | 🟢 Ready for Merge | fix(runner) | 命令分发中重命名 channel 变量为 channel_name | 🔴 高 |
| [#4126](https://github.com/agentscope-ai/QwenPaw/pull/4126) | 🔵 Open | fix(tool_schema) | 添加工具函数 schema 清理 | 🔴 高 |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | 🟡 Under Review | feat(cron) | Discord 定时任务前创建线程隔离输出 | 🟡 中 |
| [#4074](https://github.com/agentscope-ai/QwenPaw/pull/4074) | 🟡 Under Review | feat(provider) | 控制台 UI 支持 DashScope base URL 选择 | 🟡 中 |
| [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) | 🟡 Under Review | feat(console) | 增强 Matrix E2EE 验证步骤 | 🟡 中 |

---

## 4. 社区热点

### 🔥 今日讨论最活跃的 Issues

| Issue | 类型 | 评论数 | 标题 | 热度分析 |
|---|---|---|---|---|
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | Question | 10 | 页面进行超多轮对话后页面滚动变得特别卡 | 长期未解决的老问题，用户场景为工程级代码迭代，200+轮对话导致滚动卡顿 |
| [#2382](https://github.com/agentscope-ai/QwenPaw/issues/2382) | Question | 10 | 每次更新后venv会重置？所有skill相关的依赖都会失效 | venv 持久化问题，用户抱怨更新破坏自定义环境 |
| [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) | Enhancement | 7 | OpenClaw 启发的功能：提升 Agent 价值的复合效应 | Meta Issue，追踪 OpenClaw 架构启发的系列功能需求 |
| [#4099](https://github.com/agentscope-ai/QwenPaw/issues/4099) | Bug | 4 | agent name "Friday" 被硬编码，应从 agent.json 配置读取 | 配置不生效问题，影响 Auto-Memory 等依赖 |
| [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) | Question | 4 | 为什么新版本的webui这么卡 | WebUI 性能回归问题，用户报告 1.5.1.post2 版本鼠标掉帧 |
| [#2725](https://github.com/agentscope-ai/QwenPaw/issues/2725) | Bug | 4 | CoPaw Local 本地模型无法调用GPU | 本地模型 GPU 加速支持问题，RTX 3060 用户反馈 |

**热点分析**: 性能问题（WebUI 卡顿、超多轮对话卡顿）是今日社区最关注的议题，合计获得 18 条评论。同时，配置管理（venv 重置、agent name 硬编码）也是用户痛点集中区。

---

## 5. Bug 与稳定性

### 🔴 高优先级 Bug

| Issue | 严重度 | 状态 | 描述 | Fix PR |
|---|---|---|---|---|
| [#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) | 🔴 高 | 🆕 新报 | v1.1.5.post2 升级后 opencode provider 无法使用 | 无 |
| [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) | 🔴 高 | 🆕 新报 | 新版本 WebUI 回复时电脑巨卡，鼠标掉帧 | 无 |
| [#4100](https://github.com/agentscope-ai/QwenPaw/issues/4100) | 🔴 高 | 🟡 进行中 | MCP streamable_http 断开后无法自动恢复 | 无 |
| [#4102](https://github.com/agentscope-ai/QwenPaw/issues/4102) | 🔴 高 | 🟢 已确认 | 截图持续累积在上下文中，消耗大量 token | 无 |

### 🟡 中优先级 Bug

| Issue | 严重度 | 状态 | 描述 | Fix PR |
|---|---|---|---|---|
| [#4128](https://github.com/agentscope-ai/QwenPaw/issues/4128) | 🟡 中 | 🆕 新报 | MiMo-V2.5/V2.5Pro、DeepSeek-V4-Pro 重复响应问题 | 无 |
| [#4135](https://github.com/agentscope-ai/QwenPaw/issues/4135) | 🟡 中 | 🆕 新报 | 本地 Ollama 连接错误信息过于笼统 | 无 |
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | 🟡 中 | 🆕 新报 | Windows execute_shell_command 每次调用闪烁控制台窗口 | 无 |
| [#4115](https://github.com/agentscope-ai/QwenPaw/issues/4115) | 🟡 中 | 🆕 新报 | DeepSeek 无法使用 - 工具 schema 兼容性问题 | [#4126](https://github.com/agentscope-ai/QwenPaw/pull/4126) 🔧 |

### 🟢 已修复/已关闭的 Bug

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) | ✅ 已关闭 | DingTalk 频道最终结果通知失败 - 事件循环生命周期竞态条件 | [#4064](https://github.com/agentscope-ai/QwenPaw/pull/4064) |
| [#3010](https://github.com/agentscope-ai/QwenPaw/issues/3010) | ✅ 已关闭 | 微信频道接收不完整 | - |
| [#2964](https://github.com/agentscope-ai/QwenPaw/issues/2964) | ✅ 已关闭 | 个人微信无法接收定时任务消息推送 | - |
| [#3783](https://github.com/agentscope-ai/QwenPaw/issues/3783) | ✅ 已关闭 | 定时任务 dispatch 到错误 channel | [#4134](https://github.com/agentscope-ai/QwenPaw/pull/4134) 🔧 |

---

## 6. 功能请求与路线图信号

### ✨ 今日新增 Feature Requests

| Issue | 优先级信号 | 类型 | 描述 | 关联 PR/进度 |
|---|---|---|---|---|
| [#4131](https://github.com/agentscope-ai/QwenPaw/issues/4131) | ⭐⭐⭐ | Feature | 构建项目组，每个项目一个群，多角色入群，支持项目共享 memory | 无 |
| [#4129](https://github.com/agentscope-ai/QwenPaw/issues/4129) | ⭐⭐ | Feature | Rewind 功能，类 Claude Code /rewind，支持回退文件、修复错误 | 无 |
| [#4109](https://github.com/agentscope-ai/QwenPaw/issues/4109) | ⭐⭐ | Feature | 消息操作栏（重试/编辑/复制/删除） | 无 |
| [#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124) | ⭐⭐ | Feature | 支持 OpenAI/Codex OAuth 登录 | 无 |

### 📋 已有相关 PR 的功能

| 功能方向 | PR | 状态 | 说明 |
|---|---|---|---|
| Discord 线程隔离 | [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | Under Review | 定时任务输出到独立线程，避免混入主频道 |
| DashScope URL 可选 | [#4074](https://github.com/agentscope-ai/QwenPaw/pull/4074) | Under Review | 解锁区域端点访问 |
| 定时任务新会话 | [#3255](https://github.com/agentscope-ai/QwenPaw/pull/3255) | Under Review | 支持新鲜执行会话，避免上下文累积 |
| 系统托盘启动 | [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | Under Review | Windows 系统托盘常驻与自启动（仅 win32） |

**路线图信号**: 
- **多 Agent 协作**: [#4131](https://github.com/agentscope-ai/QwenPaw/issues/4131) 提出项目组概念，是 OpenClaw 功能追踪 [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) 的具体落地场景
- **定时任务增强**: 多个 PR 聚焦定时任务隔离、上下文管理，预计下版本重点优化
- **企业集成**: OAuth 登录、企业微信配置等需求持续增长

---

## 7. 用户反馈摘要

### 😰 用户痛点

| 痛点类别 | 代表 Issue | 用户描述 |
|---|---|---|
| **性能卡顿** | [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) | "新版本 webui 巨卡，鼠标移动掉帧、切换窗口缓慢，只有回复完成后才正常" |
| **超长对话卡顿** | [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | "超多轮对话（200+）导致页面滚动特别卡，无法正常操作" |
| **环境被重置** | [#2382](https://github.com/agentscope-ai/QwenPaw/issues/2382) | "每次更新后 venv 会重置，所有 skill 相关依赖都失效" |
| **本地 GPU 不用** | [#2725](https://github.com/agentscope-ai/QwenPaw/issues/2725) | "本地模型明明下载了，运行时用的是 CPU 而不是 GPU" |
| **截图累积** | [#4102](https://github.com/agentscope-ai/QwenPaw/issues/4102) | "截图一直在上下文中不断压缩，不断消耗 token，怎么才能关掉" |

### 😊 用户满意点

- 定时任务功能持续改进（定时任务 dispatch bug 已修复）
- 新增阿里云 token plan 作为内置 provider，用户配置更便捷
- Windows 环境诊断和日志轮转功能得到认可

### 💡 用户建议

- **上下文管理**: 希望定时任务可清空/归档会话 ([#3111](https://github.com/agentscope-ai/QwenPaw/issues/3111))
- **视觉模型优化**: 截图应做 OCR 或直接让视觉模型读取，而非累积压缩 ([#4102](https://github.com/agentscope-ai/QwenPaw/issues/4102))
- **工具 schema 兼容性**: DeepSeek 等模型工具 schema 不兼容问题需要标准化 ([#4115](https://github.com/agentscope-ai/QwenPaw/issues/4115))

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Issues (>7 天无维护者回复)

| Issue | 创建日期 | 天数 | 类型 | 描述 | 建议 |
|---|---|---|---|---|---|
| [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) | 2026-03-04 | 66 天 | Meta | OpenClaw 启发的功能路线图 | 需维护者确认方向 |
| [#2382](https://github.com/agentscope-ai/QwenPaw/issues/2382) | 2026-03-27 | 43 天 | Question | venv 更新后依赖失效 | 需文档或配置方案 |
| [#2165](https://github.com/agentscope-ai/QwenPaw/issues/2165) | 2026-03-24 | 46 天 | Bug | 切换模型后 APIError | 需复现信息 |
| [#1312](https://github.com/agentscope-ai/QwenPaw/issues/1312) | 2026-03-12 | 58 天 | Question | Ollama 远程模型跳过证书验证 | 需功能支持 |
| [#1105](https://github.com/agentscope-ai/QwenPaw/issues/1105) | 2026-03-10 | 60 天 | Question | 删除定时任务需指定 host/port | 需体验优化 |

### 🔄 长期未合并的 PRs (>14 天无合并)

| PR | 创建日期 | 天数 | 状态 | 类型 | 说明 |
|---|---|---|---|---|---|
| [#3238](https://github.com/agentscope-ai/QwenPaw/pull/3238) | 2026-04-10 | 29 天 | ✅ 已合并 | feat | PlanNotebook 实验支持 |
| [#3255](https://github.com/agentscope-ai/QwenPaw/pull/3255) | 2026-04-10 | 29 天 | 🔵 Open | feat | 定时任务新鲜会话 |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | 2026-04-17 | 22 天 | 🔵 Open | feat | Discord 线程隔离 |

---

## 📊 今日数据总览

| 指标 | 数值 | 环比趋势 |
|---|---|---|
| Issues 更新总数 | 33 | 📈 +12 |
| 新开/活跃 Issues | 19 | 📈 +8 |
| 已关闭 Issues | 14 | 📈 +4 |
| PRs 更新总数 | 37 | 📈 +15 |
| 待合并 PRs | 16 | 📈 +3 |
| 已合并/关闭 PRs | 21 |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**📅 日期**: 2026-05-09  
**🏷️ 项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
**🔗 链接**: https://github.com/qhkm/zeptoclaw

---

## 1. 今日速览

ZeptoClaw 项目在 2026-05-09 的活跃度处于**低水位**。过去24小时内无新增 Issue 报告，项目社区保持相对静默。仓库中有 **1 个待合并的 Pull Request**（#571），该 PR 完善了 `longterm_memory` 工具的描述文档，预计可在近期合并。整体而言，项目目前处于平稳维护状态，无紧急问题积压，无新版本发布计划可见。

---

## 2. 版本发布

> **暂无新版本发布**

过去 24 小时内项目无新版本 tag，建议关注 [Releases 页面](https://github.com/qhkm/zeptoclaw/releases) 以追踪发布动态。

---

## 3. 项目进展

| PR 编号 | 状态 | 标题 | 推进内容 | 链接 |
|---------|------|------|----------|------|
| **#571** | 🟡 OPEN（待合并） | feat(tools): trigger-phrase nudges in longterm_memory description | 重构 `longterm_memory` 工具的 `description()` 方法，新增 "Use when" / "Do NOT use when" 触发短语枚举；同时引入 doc-test（`test_tool_description_has_trigger_phrases`）以守卫触发块，防止未来编辑导致的退化 | [🔗 PR #571](https://github.com/qhkm/zeptoclaw/pull/571) |

**评估**：PR #571 属于**质量加固类改动**，不涉及破坏性变更，可作为补丁版本（e.g., v.x.y）合并。该 PR 借鉴了 Hermes Agent `memory_tool.py` 的最佳实践，有助于提升工具描述的一致性和可维护性。

---

## 4. 社区热点

> **过去 24 小时无热点讨论**

近期（参考范围内）无高评论、高反应的 Issues 或 PRs。建议后续定期扫描 [Issues 列表](https://github.com/qhkm/zeptoclaw/issues) 和 [PRs 列表](https://github.com/qhkm/zeptoclaw/pulls) 以捕捉社区动向。

---

## 5. Bug 与稳定性

> **过去 24 小时无 Bug 报告**

项目当前未报告崩溃、回归或严重缺陷，稳定性状态：**🟢 健康**。

---

## 6. 功能请求与路线图信号

**相关 PR**：[#571 - trigger-phrase 文档规范](https://github.com/qhkm/zeptoclaw/pull/571)

- **信号**：PR #571 体现了项目对**工具描述标准化**的重视。若该 PR 合并，可预期维护者计划将 "Use when / Do NOT use when" 模式推广至其他工具描述，建议关注后续是否有统一改造类 Issue。
- **路线图推测**：当前未见明确的路线图 Issue，但从 PR 模式判断，下一步可能在 **Agent 记忆管理工具链** 方向持续深耕。

---

## 7. 用户反馈摘要

> **过去 24 小时无 Issue 评论数据**  
> 今日无用户通过 Issues 提交反馈，建议关注 [Discussion 板块](https://github.com/qhkm/zeptoclaw/discussions)（若启用）以获取更丰富的用户声音。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 | 链接 | 备注 |
|------|------|------|------|------|------|
| PR | #571 | feat(tools): trigger-phrase nudges in longterm_memory description | 🟡 OPEN | [🔗](https://github.com/qhkm/zeptoclaw/pull/571) | 2026-05-03 创建，待合并（截至 2026-05-09 已 6 天） |

**维护者提醒**：PR #571 已开放 6 天，作者 @qhkm 于 2026-05-08 有更新记录，建议近期评审合并以避免积压。

---

## 📊 项目健康度评分（今日）

| 指标 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐ (2/5) | 仅1个待合并PR，无新Issue，无版本发布 |
| Bug 压力 | ⭐⭐⭐⭐⭐ (5/5) | 零Bug报告 |
| PR 吞吐 | ⭐⭐⭐ (3/5) | 待合并队列不拥堵，整体流程健康 |
| 社区参与 | ⭐ (1/5) | 无讨论热点，用户反馈缺失 |

**综合评级**：🟡 **平稳维护期** —— 项目无紧急事项，建议维护者利用此窗口期处理积压 PR 并推进 #571 合并。

---

*📌 本日报由 AI 自动生成，数据来源为 GitHub API。如有出入，请以 GitHub 原始数据为准。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>librefang</strong> — <a href="https://github.com/librefang/librefang">librefang/librefang</a></summary>

# librefang 项目动态日报

**报告日期**：2026-05-09  
**数据来源**：GitHub librefang/librefang 仓库

---

## 1. 今日速览

2026-05-09 是 librefang 项目一个**高强度活跃日**。v2026.5.8-beta.10 正式发布（68 PRs、5 位贡献者），新版本带来了全新仪表盘和 159+ UI/可访问性修复。项目在过去 24 小时内处理了 20 条 Issue 和 50 条 PR，合并了大量 channel、runtime 和 kernel 层面的改进。**CI 健康状况仍需关注**：当日有 6 个 PR 触发了 `main-red` CI 失败（集中于 macOS/Windows 测试和 OpenAPI drift），不过核心功能 PR 均已通过 review 并合并。整体来看，项目功能迭代快速、提交密度高，但 CI 稳定性有待进一步加固。

---

## 2. 版本发布

### v2026.5.8-beta.10 已发布

**发布时间**：2026-05-08  
**贡献者**：5 位  
**PR 数量**：68 个（自 v2026.5.6-beta.9 以来）

#### 亮点功能

| 模块 | 变更内容 |
|------|----------|
| **Dashboard** | 全新的专属仪表盘上线 |
| **UI/可访问性** | 修复 159+ UI bug 和可访问性缺口 |
| **持久会话压缩** | 修复 persistent agent sessions 的 summarize-and-trim 行为 |
| **Ollama 驱动** | 切换到原生 `/api/chat`（NDJSON streaming），修复 #4810 引起的 panic |
| **CI/CD** | 修复 `channel=current` 使用 main HEAD 而非 tag 冻结提交；移除过时的 `release-sdks.yml` |

#### 破坏性变更与迁移注意事项

- **Ollama provider 路径变更**：已配置的 Ollama 类型 provider 将自动切换到原生 API，无须人工迁移，但建议验证现有连接。
- OpenAPI 规范存在轻微 drift（见 CI 失败），预计在后续 patch 中修复。

🔗 [Release PR #4802](https://github.com/librefang/librefang/pull/4802) | [版本标签](https://github.com/librefang/librefang/releases/tag/v2026.5.8-beta.10)

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，按领域分组：

### 核心功能

| PR | 描述 | 状态 |
|----|------|------|
| [#4814](https://github.com/librefang/librefang/pull/4814) | **fix(llm-drivers): switch ollama provider to native Ollama API** — 用 `ApiFormat::Ollama` 替换 OpenAI 兼容 shim，靶向 `/api/chat` NDJSON 流式输出，正式关闭 #4810 | ✅ Merged |
| [#4801](https://github.com/librefang/librefang/pull/4801) | **fix(kernel): pre-dispatch provider budget gate prevents streaming token leak** — 在 `send_message_full_with_upstream` 和 `send_message_ephemeral` 的预分发阶段增加 `check_provider_budget()`，防止预算耗尽后继续泄漏流式 token，关闭 #4800 | ✅ Merged |
| [#4813](https://github.com/librefang/librefang/pull/4813) | **fix(release): channel=current uses main HEAD, not the tag's frozen commit** — 修复热修复流程，hotfix 后可重新发布 channel=current | ✅ Merged |
| [#4458](https://github.com/librefang/librefang/pull/4458) | **refactor(api): extract hooks + commands handlers from system.rs** — API 重构 4/N，提取 webhook 和 chat-command 子域 | ✅ Merged |
| [#4477](https://github.com/librefang/librefang/pull/4477) | **refactor(api): extract tool-profile handlers from system.rs** — API 重构 11/N | ✅ Merged |

### Channel 层改进

| PR | 描述 | 状态 |
|----|------|------|
| [#4751](https://github.com/librefang/librefang/pull/4751) | **fix(wecom): cache response_url per user** — 解决企业微信回调模式无法按消息回复的问题 | 🟡 Open（需审查） |
| [#4752](https://github.com/librefang/librefang/pull/4752) | **fix(runtime): mark cron/autonomous fires with [Scheduled trigger] prefix** — 区分定时任务触发的消息与人工输入 | 🟡 Open |
| [#4754](https://github.com/librefang/librefang/pull/4754) | **feat(channels,runtime): defer rate-limit failures + claim verifier** — 速率限制失败不再一锤子失败，支持重试 | 🟡 Open |
| [#4759](https://github.com/librefang/librefang/pull/4759) | **fix(whatsapp-gateway): resilience pass** — 心跳看门狗、去重、冷启动安全、清理竞态修复 | 🟡 Open |
| [#4755](https://github.com/librefang/librefang/pull/4755) | **feat(channels): buffer text-only group messages skipped at gating** — 保留被门控跳过的群消息上下文 | 🟡 Open |
| [#4760](https://github.com/librefang/librefang/pull/4760) | **fix(runtime): close prompt-leak + sentinel-regurgitation vectors** — 修复系统 prompt 泄漏和模型输出系统内容问题 | 🟡 Open |

### 修复与测试

| PR | 描述 | 状态 |
|----|------|------|
| [#4798](https://github.com/librefang/librefang/pull/4798) | **fix(runtime): expose ModelCatalog::from_entries outside cfg(test)** — 修复 main 分支构建 | ✅ Merged |
| [#4796](https://github.com/librefang/librefang/pull/4796) | **fix(testing): add deterministic catalog seed for mock kernel** — 修复 capability_override 测试不稳定 | ✅ Merged |
| [#4793](https://github.com/librefang/librefang/pull/4793) | **fix(vault): lazy-init vault.enc on first set()** — 修复 install_integration 静默成功问题 | ✅ Merged |
| [#4811](https://github.com/librefang/librefang/pull/4811) | **fix(release): unblock musl + mobile builds** — 解除跨编译目标上的 `-D warnings` 回归 | ✅ Merged |
| [#4815](https://github.com/librefang/librefang/pull/4815) | **chore(claude): clarify AI agent rules** — 清理 CLAUDE.md 和钩子规则 | ✅ Merged |

---

## 4. 社区热点

以下 Issues 和 PR 获得了最多的评论或互动：

### 讨论最活跃的 Issues

**1. #4800 — bug(kernel): provider budget checked post-call only — streaming leaks tokens past exhausted budgets**  
👥 0 👍 | 📝 0 评论  
严重性：高 — 影响生产费用控制  
核心诉求：在 provider 预算耗尽后，流式调用仍继续消耗 token，缺少预检查。已有 fix PR [#4801](https://github.com/librefang/librefang/pull/4801)（已合并）。

**2. #4806 — bug(cli): daemon startup checks hardcoded port 4545, ignoring api_listen**  
👥 0 👍 | 📝 1 评论  
核心诉求：多实例部署时，daemon 硬编码检查 4545 端口，导致无法在同一主机上启动多个不同端口的实例。**已关闭（可能已在 v2026.5.8-beta.10 中修复）**。

**3. #4807 — feat(kernel): budget-aware fallback chain — skip exhausted providers, try next in chain**  
👥 0 👍 | 📝 0 评论  
核心诉求：当前 provider 预算耗尽后整个调用被阻止，期望 fallback 链自动跳过已耗尽的 provider。属于 #4800 的延伸功能需求。

**4. #4797 — `Budget` config bug block use of paid model**  
👥 0 👍 | 📝 0 评论  
核心诉求：hourly/daily/monthly budget 配置在 `config.toml` 和 Web UI 中均不生效，导致无法使用付费模型。这是影响核心可用性的严重 Bug，需优先处理。

**5. #4795 — proxy for each channel config（代理配置按 channel 独立设置）**  
👥 0 👍 | 📝 0 评论  
核心诉求：用户希望能对不同 channel（如 Telegram）设置独立的代理，满足特定 channel 的网络需求。

---

## 5. Bug 与稳定性

### 严重性：高（已影响生产）

| Issue | 描述 | 已有 Fix PR？ |
|-------|------|-------------|
| [#4800](https://github.com/librefang/librefang/issues/4800) | Provider 预算仅在调用后检查，流式 token 泄漏 | ✅ [#4801](https://github.com/librefang/librefang/pull/4801) Merged |
| [#4810](https://github.com/librefang/librefang/issues/4810) | Ollama 驱动错误使用 `/v1/chat/completions` 导致 panic | ✅ [#4814](https://github.com/librefang/librefang/pull/4814) Merged |
| [#4806](https://github.com/librefang/librefang/issues/4806) | CLI daemon 硬编码 4545 端口，多实例不可行 | ⚠️ 未知 |
| [#4797](https://github.com/librefang/librefang/issues/4797) | Budget 配置完全不生效 | ❌ 暂无 PR |
| [#4803](https://github.com/librefang/librefang/issues/4803) | Provider config 页面"remove key"按钮失效 | ❌ 暂无 PR |

### 严重性：中（回归或功能破损）

| Issue | 描述 | 已有 Fix PR？ |
|-------|------|-------------|
| [#4760](https://github.com/librefang/librefang/issues/4760) | 系统 prompt 泄漏，模型输出内存转储和系统内容 | ✅ [#4760](https://github.com/librefang/librefang/pull/4760) Open |
| [#4793](https://github.com/librefang/librefang/issues/4793) | Vault lazy-init 导致 install_integration 静默成功 | ✅ [#4793](https://github.com/librefang/librefang/pull/4793) Merged |

### CI 健康状况

当日有 **6 个 PR** 触发 `main-red` CI 失败，涉及 PR #4791、#4766、#4781、#4786、#4783、#4802，失败job集中在 macOS 测试、Windows 测试、OpenAPI Drift 检测。虽已关闭相关 Issue，但 CI 稳定性是当前项目的技术债务热点。

---

## 6. 功能请求与路线图信号

以下功能请求已伴随实现 PR，极有可能进入下一版本：

| Issue | 功能 | PR | 状态 |
|-------|------|----|------|
| [#4807](https://github.com/librefang/librefang/issues/4807) | **Budget-aware fallback chain** — 预算耗尽时跳过 provider，尝试下一个 | — | 🟡 需求确认中 |
| [#4809](https://github.com/librefang/librefang/issues/4809) | **替换 TagInput 为多选器**（skills 和 MCP servers 字段） | — | 🟡 需求确认中 |
| [#4808](https://github.com/librefang/librefang/issues/4808) | **新增 mcp_disabled 字段**（类比 skills_disabled） | — | 🟡 需求确认中 |
| [#4805](https://github.com/librefang/librefang/issues/4805) | **按需加载 tool/skill schema**（减少每次调用的 token 消耗，约 167 个定义 ~50k tokens） | — | 🟡 需求确认中 |
| [#4795](https://github.com/librefang/librefang/issues/4795) | **按 channel 独立配置代理** | — | 🟡 需求确认中 |
| [#4745](https://github.com/librefang/librefang/issues/4745) | **手动编辑模型能力**（覆盖 provider 声明） | ✅ 已合并 | ✅ Done |

**路线图信号解读**：从 Issue 分布看，下一版本重点方向可能包括：
1. **成本控制增强**（预算感知 fallback、预算预检查）
2. **工具加载优化**（按需 schema 加载，降低 token 消耗）
3. **多实例/多租户支持**（代理按 channel 配置、独立实例端口）
4. **UI/表单改进**（TagInput → 多选器）

---

## 7. 用户反馈摘要

### 用户痛点

- **多实例部署受阻**（#4806）：用户在同一机器上运行多个 LibreFang 实例时，daemon 强制检查 4545 端口，导致非该端口的实例也无法启动。
- **预算配置形同虚设**（#4797）：用户配置了 hourly/daily/monthly 限额后，Web UI 始终显示 `-`，付费模型无法正常使用。
- **企业微信回调无法回复**（#4751）：每条消息的 `response_url` 被丢弃，导致所有出站消息走 webhook 路径，无法实现按消息回复。

### 用户场景

- **合规/审计需求**：Slack MCP server 需要跨域 OAuth（#4665 已修复），Telegram DM 需要暴露发送者身份（#4666 已修复）。
- **精细化权限控制**：用户期望 `mcp_servers = []` 有别于"无限制"，需要显式的 `mcp_disabled` 字段。
- **成本优化**：典型实例加载 167 个 tool 定义（约 50k tokens/调用），用户期望按需加载以节省费用。

### 满意度观察

- v2026.5.8-beta.10 的 Dashboard 新功能和 159+ UI 修复获得正面反馈（从 Release PR 的合并频率可见）。
- Ollama 原生 API 支持（#4810 fix）解决了长期痛点，Slack/Telegram 集成改进也回应了社区诉求。

---

## 8. 待处理积压

以下 Issue 尚未得到响应或 fix，需要维护者关注：

| Issue | 年龄 | 优先级 | 描述 |
|-------|------|--------|------|
| [#4797](https://github.com/librefang/librefang/issues/4797) | 1 天 | 🔴 高 | Budget 配置完全不生效，影响核心付费功能 |
| [#4803](https://github.com/librefang/librefang/issues/4803) | 1 天 | 🟡 中 | Provider config UI 的 remove key 按钮不工作 |
| [#4805](https://github.com/librefang/librefang/issues/4805) | 1 天 | 🟡 中 | 按需工具加载（50k tokens/调用优化） |
| [#4807](https://github.com/librefang/librefang/issues/4807) | 1 天 | 🟡 中 | Budget-aware fallback chain |
| [#4809](https://github.com/librefang/librefang/issues/4809) | 1 天 | 🟢 低 | TagInput → 多选器 |
| [#4795](https://github.com/librefang/librefang/issues/4795) | 1 天 | 🟢 低 | 按 channel 代理配置 |

> ⚠️ **注意**：所有列出的 Issue 均于 2026-05-08 创建，距今仅约 1 天，部分可能正在处理中。CI 相关的 `main-red` Issue（#4794、#4774、#4785、#4792、#4790、#4804）均已关闭，但根本的 CI 稳定性治理需纳入技术债务管理。

---

*本报告由 AI 基于 GitHub 数据自动生成，如有数据误差请以 GitHub 原始数据为准。*

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# openfang 项目动态日报

**报告日期：** 2026-05-09  
**项目：** RightNow-AI/openfang  
**数据来源：** GitHub 过去24小时活动

---

## 1. 今日速览

过去24小时内，openfang 项目保持中等活跃度，共产生4条 Issues 更新和2条待合并 PR，未有新版本发布。社区重点关注两个方向：**Chat 输入体验改进**（Shift+Enter 多行支持）以及 **Matrix 适配器功能完善**（E2EE 和 refresh-token 支持）。值得注意的是，针对 #1084 换行问题的修复 PR #1176 已提交，预计短期内可合并。整体项目处于稳步迭代阶段，无重大阻塞性问题。

---

## 2. 版本发布

**无新版本发布。**  
项目最近一个版本为 v0.5.10（2026-04-19），距今约20天。当前版本仍存在 Shift+Enter 换行功能缺失的问题，社区已通过 #1176 提交修复方案。

---

## 3. 项目进展

### 待合并 PR

| PR 编号 | 标题 | 作者 | 更新日期 | 状态 |
|---------|------|------|----------|------|
| [#1176](https://github.com/RightNow-AI/openfang/pull/1176) | fix(chat): 支持 Shift+Enter 多行输入及换行显示 | @nimitbhardwaj | 2026-05-08 | 待合并 |
| [#1168](https://github.com/RightNow-AI/openfang/pull/1168) | fix: 在聊天消息中渲染 LaTeX 数学公式 | @nimitbhardwaj | 2026-05-08 | 待合并 |

**分析：** 两个 PR 均来自同一贡献者 @nimitbhardwaj，聚焦于 **Chat 模块体验优化**：

- **#1176** 直接呼应社区热点需求（见 #1084、#1141），修改了 `textarea` 的 `@keydown.enter` 事件处理逻辑，并更新了 `escapeHtml` 函数以支持 `\n` 换行符渲染。修复完成后，v0.5.10 的换行功能缺陷将得到解决。
- **#1168** 通过 CSP 白名单放行 `cdn.jsdelivr.net`，并在 `chat.js` 中引入 MutationObserver 监听新消息气泡，自动触发 `renderLatex()` 渲染 LaTeX 数学公式。

**项目整体向前推进：****功能性 Bug 修复进度明显**（Chat 输入问题），**LaTeX 渲染功能补齐**。如两 PR 顺利合并，可视为 v0.5.11 的候选变更。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 作者 | 评论数 | 点赞数 | 状态 |
|------------|------|------|--------|--------|------|
| [#1084](https://github.com/RightNow-AI/openfang/issues/1084) | OpenFang v0.5.10 聊天框不支持 Shift+Enter 换行 | @Isabel-EasyIA | 2 | 3 | **已关闭** |
| [#1141](https://github.com/RightNow-AI/openfang/issues/1141) | [bug] Add Shift+Enter to insert new line in chat input | @maratosis | 1 | 0 | **待处理** |

**热度分析：**  
**#1084** 是过去24小时讨论热度最高的 Issue，虽然状态已标记为 CLOSED，但其高点赞数（3 👍）和2条评论表明该问题在社区中有广泛共鸣。Issue 自4月19日创建，历经约20天后在5月8日关闭，期间由 @nimitbhardwaj 提交了对应修复 PR #1176。**#1141** 作为独立报告的功能请求，与 #1084 诉求完全一致，提供了更结构化的复现步骤和预期行为描述。两个 Issue 的合并处理反映了维护者对同一类问题的归类处理策略。

**背后的核心诉求：** 用户期望 Chat 输入框支持 **类 Slack/Discord 的标准交互模式** —— Enter 发送消息，Shift+Enter 插入换行符。这是现代即时通讯工具的事实标准，用户体验落差明显。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度）

| 严重程度 | Issue 编号 | 描述 | 是否有 Fix PR |
|----------|------------|------|---------------|
| ⚠️ 中等 | [#1178](https://github.com/RightNow-AI/openfang/issues/1178) | Matrix 适配器：refresh-token (MSC2918) 流程未实现，约24小时后出现 `M_UNKNOWN_TOKEN` 错误 | ❌ 无 |
| ⚠️ 中等 | [#1177](https://github.com/RightNow-AI/openfang/issues/1177) | Matrix 适配器：无 E2EE 支持（olm/megolm），加密房间无法访问 | ❌ 无 |
| ✅ 已修复 | [#1084](https://github.com/RightNow-AI/openfang/issues/1084) | Chat 框 Shift+Enter 无法换行 | ✅ #1176 |

**详细分析：**

1. **#1178 Matrix Refresh-Token 问题**（中等严重度）  
   描述指出 `crates/openfang-channels/src/matrix.rs` 未实现 Matrix 1.3+ 规范的 refresh-token 流程（MSC2918）。这会导致使用短生命周期 access token 的 homeserver（如 matrix.org）在 token 过期后（约24小时）返回 `M_UNKNOWN_TOKEN` 错误，**adapter 整体不可用**。问题由 @dancingclaw 于5月8日报告，目前无 Fix PR，属于 **阻塞性功能缺失**。

2. **#1177 Matrix E2EE 支持缺失**（中等严重度）  
   Matrix 适配器目前为纯 plaintext 模式，不支持端到端加密。报告指出大多数生产级 Matrix 部署（如 Element 默认配置）使用加密房间，导致 **openfang adapter 实际无法连接主流 Matrix 网络**。问题与 #1178 同日报告，均来自 @dancingclaw，同样无 Fix PR。

3. **#1084 Chat 换行 Bug**（低严重度，已修复）  
   v0.5.10 版本引入的输入体验问题，修复 PR #1176 已提交待合并。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue 编号 | 请求内容 | 作者 | 关联 PR |
|------------|----------|------|---------|
| [#1141](https://github.com/RightNow-AI/openfang/issues/1141) | Chat 输入框支持 Shift+Enter 多行输入 | @maratosis | #1176 |
| [#1178](https://github.com/RightNow-AI/openfang/issues/1178) | Matrix 适配器实现 MSC2918 refresh-token 流程 | @dancingclaw | — |
| [#1177](https://github.com/RightNow-AI/openfang/issues/1177) | Matrix 适配器支持 E2EE（olm/megolm）| @dancingclaw | — |

**路线图信号分析：**

1. **Chat 输入体验优化** 已进入开发尾声，#1176 合并后将完成。下一个潜在方向可能是 **桌面通知集成**、**消息编辑/撤回** 等进阶 IM 功能。

2. **Matrix 适配器功能补齐** 是目前最大的路线图空白。两个 Issue（#1178、#1177）均指向适配器在生产环境中的 **可用性瓶颈**，维护者可能需要考虑：
   - 短期：优先实现 refresh-token 流程（相对独立）
   - 中期：引入 E2EE 支持（工程量较大，可考虑外部 crate 如 `matrix-sdk`）

3. **LaTeX 渲染**（#1168）属于 **内容展示增强**，属于低优先级但提升特定用户群体（如学术/技术社区）体验的改进。

---

## 7. 用户反馈摘要

从 Issues 评论和内容中提炼的真实用户声音：

### 痛点

- **Chat 输入限制**（#1084, @Isabel-EasyIA）  
  > *"OpenFang v0.5.10 does not allow line breaks 'Shift + Enter' in the Chat. When you type in the chat, 'Shift + Enter' doesn't work to add a line break and continue typing... currently everything is typed on the same line."*  
  **场景：** 需要输入多行文本（如代码片段、长消息）的用户被迫单行输入，严重影响可用性。

- **Matrix 生产环境不可用**（#1177, @dancingclaw）  
  > *"Most production Matrix deployments use encrypted rooms by default (Element creates DMs and most new rooms encrypted), so the adapter is effectively unusable."*  
  **场景：** 希望将 openfang 作为 Matrix 消息接收/发送入口的开发者或终端用户，因加密房间无法访问而被阻塞。

- **Token 过期后 Adapter 崩溃**（#1178, @dancingclaw）  
  > *"On homeservers that enforce short-lived access tokens, the adapter becomes unusable after ~24h."*  
  **场景：** 使用 matrix.org 等公共 homeserver 的用户发现应用在一天后停止工作，需要手动重启或重新认证。

### 满意/正向信号

- **社区响应积极**：#1084 从报告到修复 PR #1176 的闭环时间约20天，维护者保持了合理的响应节奏。
- **贡献者活跃**：@nimitbhardwaj 连续提交两个质量较高的修复 PR，展现了良好的社区参与度。

---

## 8. 待处理积压

以下 Issues/PRs 需要维护者关注：

| 类型 | 编号 | 标题 | 创建日期 | 距今天数 | 备注 |
|------|------|------|----------|----------|------|
| Issue | [#1177](https://github.com/RightNow-AI/openfang/issues/1177) | Matrix 适配器无 E2EE 支持 | 2026-05-08 | 1天 | 高优先级，功能性缺失 |
| Issue | [#1178](https://github.com/RightNow-AI/openfang/issues/1178) | Matrix 适配器 refresh-token 未实现 | 2026-05-08 | 1天 | 高优先级，功能性缺失 |
| Issue | [#1141](https://github.com/RightNow-AI/openfang/issues/1141) | Shift+Enter 多行输入 | 2026-04-30 | 9天 | 已有 Fix PR #1176 待合并 |
| PR | [#1168](https://github.com/RightNow-AI/openfang/pull/1168) | LaTeX 渲染修复 | 2026-05-06 | 3天 | 等待 review |

**重点提醒：**

1. **#1177 和 #1178 均为 Matrix 适配器的生产可用性阻塞问题**，建议优先评估修复优先级或与报告人 @dancingclaw 沟通开发计划。

2. **#1176** 修复完成后应尽快 review 并合并，同时关闭关联的 #1084 和 #1141，避免 Issue 积压。

3. **#1168** LaTeX 渲染 PR 已提交3天，建议尽快进行代码 review，保持贡献者活跃度。

---

*报告生成时间：2026-05-09 | 数据截止：2026-05-08 23:59:59 UTC*

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*