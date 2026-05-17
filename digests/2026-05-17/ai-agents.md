# OpenClaw 生态日报 2026-05-17

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-17 02:35 UTC

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

# OpenClaw 项目动态日报

**报告日期：** 2026-05-17  
**项目仓库：** github.com/openclaw/openclaw

---

## 1. 今日速览

过去24小时内，OpenClaw 项目保持极高活跃度，共处理 **500 条 Issues** 和 **500 条 PRs**。项目发布了两个 beta 版本（v2026.5.16-beta.2 和 v2026.5.16-beta.3），核心更新聚焦于 **xAI Grok OAuth 登录支持**和 **CLI cron 命令增强**。社区共提交 409 个新 Issue，关闭 91 个；411 个 PR 待合并，89 个已合并。今日讨论热度最高的议题包括 Linux/Windows 桌面端应用缺失（104条评论）、Android APK 预构建需求，以及多个高优先级 Bug 修复。整体而言，项目在多 agent 编排、记忆管理、信号处理等关键领域持续迭代，但部分 P1 级问题（如 Discord 内部日志泄露、TUI 输入中断失效）仍需关注。

---

## 2. 版本发布

### 🆕 v2026.5.16-beta.3 / v2026.5.16-beta.2

**发布时间：** 2026-05-16  
**发布类型：** Beta 测试版

#### 核心更新内容

| 功能 | 描述 |
|------|------|
| **xAI Grok OAuth 登录** | 为 SuperGrok 订阅用户新增 xAI Grok OAuth 认证方式，`xai/*` 模型和 xAI 媒体/工具提供商可在无 `XAI_API_KEY` 环境下完成身份验证 |
| **CLI cron 增强** | 新增 `openclaw cron run --wait` 命令，支持超时和轮询间隔控制；新增精确的 `cron.runs --run-id` 过滤能力 |

#### 破坏性变更  
无明显破坏性变更。

#### 迁移注意事项  
- 若使用 xAI Grok 的 SuperGrok 订阅用户，可改用 OAuth 方式替代 API Key，配置方式需参考 `Providers/xAI` 相关文档
- `cron run` 命令的行为略有调整，原有超时配置可能需要重新评估

---

## 3. 项目进展

过去24小时已合并/关闭的重要 PR：

| PR 编号 | 标题 | 类型 | 优先级 | 状态 |
|---------|------|------|--------|------|
| [#82778](https://github.com/openclaw/openclaw/pull/82778) | fix(gateway): refresh usage caches in background | gateway 性能优化 | - | ✅ 已合并 |
| [#82341](https://github.com/openclaw/openclaw/pull/82341) | fix(memory): catch up stale sessions on startup | 记忆管理修复 | P1 | ✅ 已合并 |
| [#82794](https://github.com/openclaw/openclaw/pull/82794) | fix(telegram): preserve implicit default account with named accounts | Telegram 频道修复 | P1 | ✅ 已合并 |
| [#82774](https://github.com/openclaw/openclaw/pull/82774) | fix(tui): preserve draft while chat is busy | TUI 交互修复 | P1 | ✅ 已合并 |
| [#82778](https://github.com/openclaw/openclaw/pull/82778) | fix(gateway): refresh usage caches in background | 后台缓存刷新优化 | - | ✅ 已合并 |
| [#82810](https://github.com/openclaw/openclaw/pull/82810) | [codex] Add Control UI sidebar session shortcuts | UI 功能增强 | P2 | 🟡 待合并 |
| [#81864](https://github.com/openclaw/openclaw/pull/81864) | feat(approvals): add plain-language plugin approvals | 安全/审批功能 | P1 | 🟡 待合并 |
| [#82825](https://github.com/openclaw/openclaw/pull/82825) | [codex] Bind exec approval trust to realpaths | 安全加固 | P1 | 🟡 待合并 |

**推进的关键功能/修复：**
- **记忆管理：** 修复启动时 stale sessions 的追赶扫描问题（#82341），解决 `MemoryIndexManager` 初始化后的同步延迟
- **Telegram 频道：** 修复命名账户存在时隐式默认账户丢失的问题
- **TUI：** 在聊天忙时保留草稿，防止用户输入丢失
- **Gateway：** 后台刷新 usage 缓存，提升性能

---

## 4. 社区热点

今日讨论最活跃的 Issues（按评论数排序）：

### 🔥 Issue #75 — Linux/Windows Clawdbot Apps（104 条评论）
**链接：** https://github.com/openclaw/openclaw/issues/75  
**作者：** @steipete | **状态：** OPEN  
**标签：** enhancement, help wanted, P2  

**摘要：** 用户强烈请求为 Linux 和 Windows 平台开发 OpenClaw 桌面客户端应用。目前已有 macOS、iOS 和 Android 版本，Linux/Windows 仍为空白。社区对跨平台支持呼声极高。

---

### 🔥 Issue #9443 — Request: Prebuilt Android APK releases（24 条评论）
**链接：** https://github.com/openclaw/openclaw/issues/9443  
**作者：** @AstridQing-AI | **状态：** OPEN  
**标签：** enhancement, P2  

**摘要：** 用户（由 AI 助手 QING 代为提交）请求在 GitHub Releases 中提供预编译的 Android APK 下载。当前仓库虽包含 `apps/android` 源码，但无预构建产物，用户需自行编译。

---

### 🔥 Issue #48183 — Feishu monitor state cleanup incomplete（17 条评论）
**链接：** https://github.com/openclaw/openclaw/issues/48183  
**作者：** @ai-nurmamat | **状态：** OPEN  
**标签：** Bug, P2  

**摘要：** Feishu 插件的 monitor 状态清理存在潜在内存泄漏。停止 monitor 时，`httpServers` Map 条目被立即删除，未等待服务器完全关闭，可能导致资源未正确释放。

---

### 🔥 Issue #45740 — gh-issues skill untrusted injection（12 条评论）
**链接：** https://github.com/openclaw/openclaw/issues/45740  
**作者：** @zients | **状态：** OPEN  
**标签：** 安全, P2  

**摘要：** `gh-issues` skill 将未消毒的 GitHub Issue 正文和评论直接注入子 agent 提示词，存在 prompt injection 安全风险。漏洞位置包括 `skills/gh-issues/SKILL.md` 第369行等。

---

### 🔥 Issue #6731 — Safe/unsafe ClawdBot（12 条评论）
**链接：** https://github.com/openclaw/openclaw/issues/6731  
**作者：** @ChrisX101010 | **状态:** OPEN  
**标签：** enhancement, P2  

**摘要：** 建议引入类似 Rust 的 safe/unsafe 模式，ClawdBot 可在沙箱环境中安全运行，或完全用 Rust 重写项目以提升内存安全性和稳定性。

---

**热点分析：** 社区讨论核心诉求集中在 **跨平台覆盖**（桌面端缺口）、**安全加固**（prompt injection、OAuth 安全认证）、**用户体验**（预构建产物降低使用门槛）三大方向。

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### 🚨 P1 - 高优先级（需紧急处理）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | Discord leaks internal tool-call traces to channel | OPEN | ❌ |
| [#45326](https://github.com/openclaw/openclaw/issues/45326) | TUI: Input typed during model generation is swallowed | OPEN | ❌ |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable | OPEN | ❌ |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | Session hangs when compaction times out | OPEN | ❌ |
| [#81114](https://github.com/openclaw/openclaw/issues/81114) | Codex app-server timeout during near-window turns | OPEN | ❌ |
| [#49055](https://github.com/openclaw/openclaw/issues/49055) | Silent delivery drop after overloaded_error recovery | OPEN | ❌ |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | Repeated hard resets despite high reserveTokensFloor | OPEN | ❌ |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost | OPEN | ❌ |

### ⚠️ P2 - 中优先级（需关注）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#48183](https://github.com/openclaw/openclaw/issues/48183) | Feishu monitor memory leak in httpServers Map | OPEN | ❌ |
| [#48573](https://github.com/openclaw/openclaw/issues/48573) | Embedded-run session state leak - zombie agents | OPEN | ❌ |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | Safeguard compaction ignores compaction.model config | OPEN | ❌ |
| [#44993](https://github.com/openclaw/openclaw/issues/44993) | Heartbeat/Cron "Current time" timestamp stale | OPEN | ❌ |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | Memory management inconsistency | OPEN | ❌ |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) | OPENCLAW_HOME nested directory bug | OPEN | ❌ |
| [#44599](https://github.com/openclaw/openclaw/issues/44599) | OPENCLAW_CONFIG_DIR cannot contain whitespace | OPEN | ❌ |
| [#45269](https://github.com/openclaw/openclaw/issues/45269) | apply_patch treated as plugin-only tool | OPEN | ❌ |

### ✅ 已关闭修复

| Issue | 标题 | 状态 |
|-------|------|------|
| [#78461](https://github.com/openclaw/openclaw/issues/78461) | Gateway re-scans plugin metadata during model normalization | ✅ CLOSED |
| [#43795](https://github.com/openclaw/openclaw/issues/43795) | 500 v.content is not iterable | ✅ CLOSED |
| [#45706](https://github.com/openclaw/openclaw/issues/45706) | HTTP 422: "Check open ai req parameter error" | ✅ CLOSED |
| [#48623](https://github.com/openclaw/openclaw/issues/48623) | Auth profile failover bugs | ✅ CLOSED |

---

## 6. 功能请求与路线图信号

从今日 Issues 和 PRs 中可预判的下一版本方向：

| 功能 | Issue/PR | 状态 | 预估纳入版本 |
|------|----------|------|-------------|
| **xAI Grok OAuth 登录** | v2026.5.16-beta.2/3 | ✅ 已发布 | 2026.5.16 |
| **Control UI 侧边栏会话快捷方式** | [#82810](https://github.com/openclaw/openclaw/pull/82810) | 🟡 待合并 | 可能下个版本 |
| **自然语言插件审批** | [#81864](https://github.com/openclaw/openclaw/pull/81864) | 🟡 待合并 | 可能下个版本 |
| **exec approval 信任路径绑定到 realpath** | [#82825](https://github.com/openclaw/openclaw/pull/82825) | 🟡 待合并 | 可能下个版本 |
| **SKILL.md frontmatter 支持 model 字段** | [#43260](https://github.com/openclaw/openclaw/issues/43260) | 🔵 规划中 | 路线图待定 |
| **支持 YAML 配置文件** | [#45758](https://github.com/openclaw/openclaw/issues/45758) | 🔵 规划中 | 路线图待定 |
| **MathJax/LaTeX 支持** | [#42840](https://github.com/openclaw/openclaw/issues/42840) | 🔵 规划中 | 路线图待定 |
| **内置技能安装安全扫描** | [#45031](https://github.com/openclaw/openclaw/issues/45031) | 🔵 规划中 | 安全特性路线图 |
| **WhatsApp 贴纸发送** | [#7476](https://github.com/openclaw/openclaw/issues/7476) | 🔵 规划中 | 路线图待定 |
| **Filesystem Sandboxing Config** | [#7722](https://github.com/openclaw/openclaw/issues/7722) | 🔵 规划中 | 路线图待定 |

**路线图信号分析：**
- **安全优先：** 多个安全相关 PR 处于 P1 优先级（exec approval、skill 安装扫描、OAuth 信任路径）
- **UX 增强：** Control UI 改进、TUI 无障碍支持（禁用 emoji/unicode）受到关注
- **跨平台扩展：** Linux/Windows 桌面端呼声极高，可能成为下个 major 版本重点

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与使用场景：

### ✅ 用户满意点
- **xAI Grok OAuth 登录**获积极反响，SuperGrok 订阅用户无需管理 API Key
- 新增的 `cron run --wait` 命令提升了 cron 作业的可观测性

### ⚠️ 用户痛点

| 痛点 | 影响场景 | 相关 Issue |
|------|----------|-----------|
| **跨平台缺失** | Linux/Windows 用户无桌面客户端 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **Android 需自行编译** | 移动端用户安装门槛高 | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| **多 agent 编排不稳定** | 并发任务失败率高 | [#43367](https://github.com/openclaw/openclaw/issues/43367) |
| **记忆管理不一致** | 不同用户行为差异大 | [#43747](https://github.com/openclaw/openclaw/issues/43747) |
| **TUI 输入中断失效** | 无法紧急停止 AI 生成 | [#45326](https://github.com/openclaw/openclaw/issues/45326) |
| **配置目录空格问题** | Docker 安装场景失败 | [#44599](https://github.com/openclaw/openclaw/issues/44599) |
| **Discord 日志泄露** | 安全风险，用户可见内部信息 | [#44905](https://github.com/openclaw/openclaw/issues/44905) |
| **子 agent 结果静默丢失** | 自动化任务可靠性低 | [#44925](https://github.com/openclaw/openclaw/issues/44925) |

### 💡 典型使用场景

1. **企业 Telegram Bot：** 用户配置 Telegram forum 模式进行团队协作，依赖 OpenClaw 进行 AI 辅助对话
2. **自动化 cron 任务：** 通过 OpenClaw 运行定时 AI 任务，但 API 长时间不可用时超时机制不健壮
3. **本地开发环境：** 开发者使用 Docker 部署，希望配置文件路径支持特殊字符
4. **安全敏感环境：** 用户期望 skill 安装时自动安全扫描，防止恶意代码

---

## 8. 待处理积压

长期未响应或高优先级但尚未解决的事项，提醒维护者关注：

### 🔴 长期未解决 P1 问题

| Issue | 创建日期 | 距今天数 | 问题描述 |
|-------|----------|---------|----------|
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | 2026-03-13 | **65 天** | Discord 泄露内部工具调用日志 |
| [#45326](https://github.com/openclaw/openclaw/issues/45326) | 2026-03-13 | **65 天** | TUI 输入中断失效 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 2026-03-11 | **67 天** | 多 agent 编排不稳定 |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | 2026-03-12 | **66 天** | Compaction 超时导致会话挂起 |
| [#43015](https://github.com/openclaw/openclaw/issues/43015) | 2026-03-11 | **67 天** | message.send schema 过度暴露导致 GPT 自动填充问题 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 2026-03-13 | **65 天** | 子 agent 完成结果静默丢失 |

### 🟡 高影响力需求积压

| Issue | 创建日期 | 评论数 | 问题描述 |
|-------|----------|--------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | **104** | Linux/Windows 桌面客户端 |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 2026-02-05 | **24** | Android 预编译 APK |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | 2026-02-02 | **12** | Safe/unsafe ClawdBot 模式 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | 2026-03-14 | **12** | gh-issues skill prompt injection |

### ⚠️ PR 积压提醒

| PR | 标签 | 状态 | 关注点 |
|----|------|------|--------|
| [#82810](https://github.com/openclaw/openclaw/pull/82810) | size: XL, P2 | 待合并 | Codex UI 侧边栏重构，涉及较大代码变更 |
| [#81864](https://github.com/openclaw/openclaw/pull/81864) | size: XL, P1

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比报告

**报告日期：** 2026-05-17  
**分析范围：** 15 个相关开源项目（其中 3 个零活动）

---

## 1. 生态全景

2026年5月中旬的个人 AI 助手开源生态呈现**高度分化格局**：头部项目（OpenClaw、hermes-agent）保持日均 500+ 条 GitHub 事务的超级活跃度，中部项目（Zeroclaw、NanoBot、librefang）以功能迭代和安全修复为主线稳健推进，而近半数项目（TinyClaw、ZeptoClaw、EasyClaw）处于休眠或维护状态。整体生态的核心议题正从“功能丰富度”向“安全可靠性”迁移——**多项目在同日集中披露并修复 critical 级别安全漏洞**（hermes-agent 的 API Key 脱敏、librefang 的 OIDC session 混淆与 SSRF 防护、OpenClaw 的 prompt injection），这标志着该领域正从野蛮生长进入工程化成熟阶段。跨项目共同需求清晰指向三大方向：**多 Agent 编排稳定性、跨平台覆盖、以及记忆/上下文管理**。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 版本发布 | 合并率 | 健康度评分 |
|------|:------------:|:----------:|----------|:------:|:----------:|
| **OpenClaw** | 500（含409新开） | 500（含411待合并） | v2026.5.16-beta.2/3 | 22%（89/411待合并） | ⭐⭐⭐⭐ |
| **hermes-agent** | 224（139新/85关闭） | 500（301待/199合并） | v2026.5.16（v0.14.0） | 40%（199/500） | ⭐⭐⭐⭐ |
| **Zeroclaw** | 50（45新/5关闭） | 50（40待/10合并） | 无（v0.8.0 Beta 冲刺中） | 25%（10/40待合并） | ⭐⭐⭐ |
| **NanoBot** | 33（7新/活跃） | 26（10待/16合并） | v0.2.0 正式发布 | 62%（16/26） | ⭐⭐⭐⭐ |
| **librefang** | 50 | 50（18待/27关闭） | 无 | 54%（27/50） | ⭐⭐⭐ |
| **QwenPaw** | 14 | 14（10待/4合并） | 无 | 29%（4/14） | ⭐⭐⭐ |
| **IronClaw** | 15（14新/1关闭） | 39（24待/15合并） | 无 | 38%（15/39） | ⭐⭐⭐ |
| **LobsterAI** | ~1 | 22（12待/10合并） | 2026.5.16 合并发布 | 45%（10/22） | ⭐⭐⭐ |
| **NanoClaw** | 5 | 9（7待/2合并） | 无（v2.0.63） | 22%（2/9） | ⭐⭐⭐ |
| **Moltis** | 1 | 3（2待/1合并） | 无 | 33%（1/3） | ⭐⭐ |
| **PicoClaw** | 5 | 4（3待/1合并） | v0.2.8-nightly 构建 | 25%（1/4） | ⭐⭐ |
| **openfang** | 1 | 0 | 无 | — | ⭐ |
| **TinyClaw** | 0 | 0 | 无 | — | — |
| **ZeptoClaw** | 0 | 0 | 无 | — | — |
| **EasyClaw** | 0 | 0 | 无 | — | — |

> **数据注记：** OpenClaw 与 hermes-agent 的 Issue/PR 统计口径包含“活跃”状态项（评论更新、状态变更），与其他项目以“新增”为口径不同，实际增量规模可能存在差异。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模与影响力

OpenClaw 以 **500 条/24h GitHub 事务**位居第一梯队，与 hermes-agent 并列为生态中规模最大的两个项目。与同类对比：

| 维度 | OpenClaw | hermes-agent | Zeroclaw | NanoBot |
|------|----------|-------------|----------|---------|
| **团队规模** | 社区驱动，极高活跃 | NousResearch 背书，215 贡献者 | 独立团队，专注企业 | 学术背景（HKUDS） |
| **Issue 总量** | 极高 | 极高 | 高 | 中 |
| **PR 合并效率** | 中（22%待合并积压） | 高（40%合并率） | 中（25%合并率） | 优（62%合并率） |

### 3.2 技术路线差异

OpenClaw 的差异化体现在：

- **xAI Grok 原生集成**：率先实现 OAuth 认证方式（v2026.5.16-beta.2），在模型提供商支持上领先多数竞品
- **CLI 深度**：cron 命令、TUI 交互、Signal 工具链等命令行场景覆盖完善，面向开发者友好
- **Bug 积压风险**：8 个 P1 Bug 超过 60 天未解决（Discord 日志泄露、TUI 输入中断、多 Agent 编排不稳定），与高速迭代形成张力

相比之下，hermes-agent 以 **v0.14.0 "The Foundation Release"** 强调架构基石稳固性；Zeroclaw 正以 v0.8.0 Multi-Agent Runtime 推进重大架构升级；NanoBot 则以轻量级 BM25 skill 路由和 goal 模式走出差异化路线。

---

## 4. 共同关注的技术方向

### 4.1 多 Agent 编排稳定性（跨 5+ 项目）

这是生态中最高频的共性挑战，且均为未解决状态：

| 项目 | 对应 Issue/PR | 核心问题 |
|------|-------------|---------|
| **OpenClaw** | #43367 | Multi-agent orchestration unstable（67 天未解决） |
| **NanoBot** | #3728 LoopDetectHook | Agent 自我修正与循环检测 |
| **NanoClaw** | #2497 agent network | 多 agent 通信与协调能力 |
| **QwenPaw** | #4449 | Rate-Limit → zero-downtime reload 导致消息队列清空 |
| **IronClaw** | #3616/#3698 | Reborn 产品级实时路径尚未切换 |

**共同诉求：** 跨项目均面临“子 Agent 结果丢失”“编排不稳定”“长任务父会话阻塞”等问题，尚未形成统一的解决范式。

### 4.2 安全加固（跨 4 项目集中行动）

2026-05-17 成为事实上的“安全修复日”：

| 项目 | 安全问题 | 严重度 | 状态 |
|------|---------|--------|------|
| **hermes-agent** | Linear/Airtable API Key 未脱敏 | P1 | PR #27225 待合并 |
| **hermes-agent** | Shell hook 绕过（message/reason 缺失时错误放行） | P1 | PR #27231 待合并 |
| **librefang** | OIDC sub 碰撞导致 session 串台 | Critical | PR #5157 已合并 |
| **librefang** | MCP SSRF 防护不充分（substring → 白名单） | Critical | PR #5156/#5159 已合并/待合 |
| **librefang** | 内存键前缀注入（peer: key collision） | Critical | PR #5161 待合并 |
| **OpenClaw** | gh-issues skill prompt injection | P2 | Issue #45740 |

**信号意义：** 安全问题数量之多、严重度之高、跨项目之广，表明该领域已进入安全工程化的拐点。

### 4.3 记忆与上下文管理（跨 4 项目）

| 项目 | 进展 | 说明 |
|------|------|------|
| **OpenClaw** | PR #82341 修复 stale sessions 追赶扫描 | 记忆管理持续迭代 |
| **NanoBot** | v0.2.0 `/goal` 指令支持长期任务持久化 | 穿越上下文压缩 |
| **hermes-agent** | Issue #6323 external memory (mempalace) | 26 赞，结构化长期记忆需求强烈 |
| **librefang** | PR #5163 修复 agent 删除 DB 错误吞掉问题 | 数据一致性 |

### 4.4 跨平台与渠道扩展（跨 6+ 项目）

桌面端覆盖是最高频的功能请求：

- **OpenClaw** Issue #75：Linux/Windows 桌面客户端（104 条评论，生态最高）
- **PicoClaw** Issue #2421：Email 原生渠道（6 条评论，stale 39 天）
- **OpenClaw** Issue #9443：Android 预编译 APK
- **NanoBot** PR #3852：Signal 频道支持
- **NanoClaw** PR #2515：Telegram 内联键盘按钮
- **librefang** Issue #4977：human-in-the-loop 工作流（Telegram/email 渠道集成）

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构特点 | 主要优势 |
|------|---------|---------|---------|---------|
| **OpenClaw** | 全功能 Agent 平台 | 开发者、DevOps | 模块化插件 + 多 Provider | 最多 Provider、CLI 深度、OAuth 集成 |
| **hermes-agent** | 企业级基础平台 | 企业用户、多租户 | 安全导向、高可用 | 安全修复密度、OAuth/Nous 生态 |
| **Zeroclaw** | 企业级编排引擎 | 企业运营者 | Multi-Agent Runtime + Schema V3 | v0.8.0 架构升级、Webhook 生态 |
| **NanoBot** | 轻量级对话 Agent | 个人用户、小团队 | 极简部署、BM25 路由 | 低 token 开销、goal 模式 |
| **NanoClaw** | 生产级多渠道 Agent | 企业部署团队 | 容器化优先、健康监控 | macOS Keychain 集成、静默失败检测 |
| **IronClaw** | Rust 重构新范式 | 追求性能的开发者 | Reborn 架构、Rust 生态 | 配置即代码、产品级实时路径 |
| **librefang** | 安全审计平台 | 安全敏感企业 | Rust 后端、全链路安全 | OIDC/SSRF 防护、per-agent 权限 |
| **QwenPaw** | 中文生态优化 | 中文社区用户 | QQ/微信优先、国产模型 | MiMo、阿里百炼、QQ 即时确认 |
| **LobsterAI** | IM 集成增强 | 网易系用户 | Cowork/OpenClaw 融合 | Artifacts UX、Keyfrom 归属 |

**技术架构分化：**
- **Rust 派系**（IronClaw、librefang）：强调内存安全、高并发，面向企业基础设施
- **Python 派系**（NanoBot、QwenPaw、PicoClaw）：强调快速迭代、插件灵活性，面向个人开发者
- **混合派系**（OpenClaw、hermes-agent）：多语言组件，平衡功能与性能

---

## 6. 社区热度与成熟度分层

### 第一梯队：超高速迭代期

| 项目 | 日事务量 | 特征 | 成熟度信号 |
|------|---------|------|-----------|
| **OpenClaw** | 1000 | Issue 吞吐量极高，PR 积压显著 | ⚠️ P1 Bug 积压超 60 天，需质量治理 |
| **hermes-agent** | 724 | 安全修复密集，贡献者生态庞大 | 215 贡献者，v0.14.0 里程碑，架构已稳固 |

### 第二梯队：功能驱动成长期

| 项目 | 状态 | 特征 |
|------|------|------|
| **Zeroclaw** | v0.8.0 Beta 冲刺 | 重大架构变更期，PR #6398 阻塞发布 |
| **NanoBot** | v0.2.0 刚发布 | 合并率 62% 全场最优，功能迭代有序 |
| **librefang** | 安全专项修复 | Critical Bug 集中披露后趋于稳定 |

### 第三梯队：质量巩固期

| 项目 | 问题 | 建议 |
|------|------|------|
| **IronClaw** | Nightly E2E 持续失败 6 天 | CI 质量门禁需优先修复 |
| **QwenPaw** | 消息队列清空、聊天无回应（P0 Bug） | 稳定性修复优先于功能扩展 |
| **NanoClaw** | P0 消息静默丢失、数据库一致性 | 生产可观测性需系统性加固 |

### 第四梯队：低活跃/维护状态

| 项目 | 状态 | 说明 |
|------|------|------|
| **Moltis** | 功能明确但社区冷启动 | PR 审查周期长 |
| **PicoClaw** | v0.2.8 网关 Bug 高优先级 | 稳定性问题影响核心体验 |
| **openfang** | 极低活跃 | 飞书扩展需求待响应 |
| **TinyClaw / ZeptoClaw / EasyClaw** | 零活动 | 可能已停止维护或仅供特殊用途 |

---

## 7. 值得关注的趋势信号

### 7.1 安全工程化拐点已至

当日 6+ 个 Critical/Security P1 Bug 跨项目集中出现绝非偶然——这是开源 Agent 框架在快速功能迭代后必然经历的**安全债务清算期**。对开发者的启示：

- **不要再假设“开源即安全”**：API Key 脱敏、SSRF 防护、session 隔离等企业级安全需求已下沉到开源框架的 P1 议程
- **依赖维护频率将成为选择重要指标**：hermes-agent 的 Dependabot 活跃度、librefang 的 CVE 响应速度值得重点关注

### 7.2 多 Agent 协作可靠性是最大瓶颈

无论项目大小，所有涉及多 Agent 的项目均报告了“结果丢失”“静默失败”“编排不稳定”问题。这不是某个项目的实现缺陷，而是**当前 Agent 架构范式的共性挑战**——缺乏统一的状态传播、错误恢复和超时机制。对 AI 智能体开发者的直接建议：**在生产环境中使用多 Agent 功能时，必须实现外部补偿逻辑（重试队列、死信队列）**，而非依赖框架自带的编排能力。

### 7.3 跨平台覆盖从“加分项”变为“刚需”

OpenClaw 的 Linux/Windows 桌面端需求（104 条评论）和 PicoClaw 的 Email 渠道需求（企业刚需）表明，**生态丰富度正在从“有多少渠道”向“目标平台是否覆盖”转移**。趋势判断：

- 有桌面端覆盖的项目将在个人开发者市场占据优势
- 企业市场对 Email、Telegram 等办公渠道的原生支持将成为差异化因素
- Android APK 预编译需求的涌现说明移动端分发门槛正在降低——预计未来 1-2 个版本会有更多项目跟进

### 7.4 配置即代码（Configuration-as-Code）成为架构演进方向

IronClaw（Epic #3036）、librefang（per-agent channel allowlist）、hermes-agent（权限系统）均不约而同地推进声明式配置能力。这反映出 Agent 框架正在从“命令行工具”向“基础设施平台”演进：**operator 需要可版本控制、可审计、可自动化的配置管理**，而非手工编辑混合配置文件。

### 7.5 健康监控与自愈能力从可选变为默认

NanoClaw 三连 PR 构建 health-monitor 链路（故障

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**日期**：2026-05-17  
**仓库**：github.com/HKUDS/nanobot  
**数据时间范围**：过去 24 小时（2026-05-16 ~ 2026-05-17）

---

## 1. 今日速览

NanoBot 项目在过去 24 小时保持极高活跃度，共产生 **33 次更新**（7 条 Issues + 26 条 PRs），其中 **16 个 PR 已合并/关闭**。今日正式发布 **v0.2.0**，里程碑包含 105 个 PR 合并和 20 位新贡献者，新增 `/goal` 指令支持长期任务管理。代码重构与功能迭代并行推进，整体项目处于稳健发展期，暂无阻塞性风险。

---

## 2. 版本发布

### 🎉 v0.2.0 正式发布

| 项目 | 详情 |
|------|------|
| **版本号** | v0.2.0 |
| **发布时间** | 2026-05-16 |
| **PR 合并数** | 105 |
| **新贡献者** | 20 |

**核心更新**：

- **`/goal` 命令上线**：支持通过 `long_task` 将对话线程标记为持续性目标（sustained objective），活动目标将在每轮对话中固定展示于 Runtime Context，**穿越上下文压缩和长工具调用**。
- 详见 Release：[github.com/HKUDS/nanobot/releases/tag/v0.2.0](https://github.com/HKUDS/nanobot/releases/tag/v0.2.0)

**迁移注意事项**：v0.2.0 为功能性大版本，建议查阅 CHANGELOG 确认breaking changes（本次数据未提供详细变更日志）。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，按类别分组：

### 🛠️ Bug 修复

| PR | 作者 | 摘要 | 状态 |
|----|------|------|------|
| [#3851](https://github.com/HKUDS/nanobot/pull/3851) | @olgagaga | 修复 MiMo thinking control 通过 gateway providers（如 OpenRouter）不生效的问题 | ✅ Closed |
| [#3859](https://github.com/HKUDS/nanobot/pull/3859) | @chengyongru | 移除 mid-turn drain 中重复的 runtime context 注入，节省 token 开销 | ✅ Closed |
| [#3864](https://github.com/HKUDS/nanobot/pull/3864) | @chengyongru | 将中文限流标记 `访问量过大` 识别为 transient error，自动重试 | ✅ Merged |
| [#3867](https://github.com/HKUDS/nanobot/pull/3867) | @olgagaga | 为 OpenRouter 推理模型注入 `reasoning.effort`（#3851 后续修复） | ✅ Merged |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | @DreamShepherd2006 | DeepSeek 消息硬化：清理 null/空内容，避免 400 错误 | ✅ Open |
| [#3853](https://github.com/HKUDS/nanobot/pull/3853) | @Endeavour-Yuan | 修复 `format` 关键字误拦 URL 参数（如 `?format=json`）的问题 | ✅ Closed |

### ✨ 新功能

| PR | 作者 | 摘要 | 状态 |
|----|------|------|------|
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) | @zayfod | 新增 **Signal 频道支持**，集成 signal-cli daemon，支持 DMs、群聊、附件 | ✅ Open |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | @chengyongru | 多代理邮箱 channel plugin：基于文件系统的进程间通信 | ✅ Closed |
| [#3854](https://github.com/HKUDS/nanobot/pull/3854) | @DreamShepherd2006 | WebUI bootstrap 端点暴露 peer roster，支持多实例编排 | ✅ Open |
| [#3728](https://github.com/HKUDS/nanobot/pull/3728) | @MuataSr | 新增 `LoopDetectHook` 和 `ReflectRetryHook`，支持 agent 自我修正 | ✅ Open |
| [#3223](https://github.com/HKUDS/nanobot/pull/3223) | @MuataSr | 新增 `spawn_status`、`spawn_cancel` 工具及 spawn 参数管理 | ✅ Closed |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) | @Krislu1221 | **BM25-lite skill 路由**：按需加载 Top-5 相关技能，系统提示减少约 60% tokens | ✅ Open |

### 🔧 性能与优化

| PR | 作者 | 摘要 | 状态 |
|----|------|------|------|
| [#3861](https://github.com/HKUDS/nanobot/pull/3861) | @chengyongru | goal 状态变更时重新计算 LLM timeout，避免长任务超时 | ✅ Closed |
| [#3858](https://github.com/HKUDS/nanobot/pull/3858) | @chengyongru | 提取 `ContextBuilder.build_user_content()` 为公共方法 | ✅ Closed |
| [#3856](https://github.com/HKUDS/nanobot/pull/3856) | @chengyongru | 从 `loop.py` 拆分 `checkpoint.py` 和 `turn_writer.py`，提升可维护性 | ✅ Closed |
| [#3516](https://github.com/HKUDS/nanobot/pull/3516) | @Zozi96 | Session 自动清理：支持配置空闲会话过期时间 | ✅ Closed |

### 📚 文档与配置

| PR | 作者 | 摘要 | 状态 |
|----|------|------|------|
| [#3866](https://github.com/HKUDS/nanobot/pull/3866) | @olgagaga | 扩展 secrets 配置文档，增加更多环境变量示例（承接 #2172） | ✅ Open |
| [#3860](https://github.com/HKUDS/nanobot/pull/3860) | @chengyongru | 更新 CLAUDE.md，同步最新支持的 Channels 和 Providers | ✅ Closed |

### 🐳 基础设施

| PR | 作者 | 摘要 | 状态 |
|----|------|------|------|
| [#3870](https://github.com/HKUDS/nanobot/pull/3870) | @ariedov | 修复 Docker 构建 `hatch_build.py not found` 问题 | ✅ Open |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 摘要 |
|-------|--------|------|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | 12 | **WebUI 会话打印内容显示错乱**（Bug）<br>用户反馈 v0.1.5.post3.2026.05.13 版本 WebUI 会话内容显示异常，需刷新页面恢复。社区已有多轮讨论，疑似渲染逻辑问题。 |
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) | 5 | **支持 secret 引用替代明文存储**（功能请求，已关闭）<br>安全性诉求：配置文件中直接存储 secrets 不安全，期望支持从文件或命令（如 1Password）读取。#3866 已跟进文档。 |

**热点分析**：#3790 引发最多讨论（12 条评论），反映 WebUI 在特定版本存在渲染 bug，建议优先排查。#2172 作为 good first issue 引导了 secrets 安全改进的长期讨论。

### 📈 PR 关注度（按字数/复杂度判断）

| PR | 关注点 |
|----|--------|
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) | Signal 频道支持（新增通信渠道，功能完整度高） |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) | BM25-lite skill 路由（性能优化显著，社区关注） |
| [#3728](https://github.com/HKUDS/nanobot/pull/3728) | LoopDetectHook + ReflectRetryHook（agent 自修正能力） |

---

## 5. Bug 与稳定性

### 🐛 待处理 Bug（按严重程度）

| 严重度 | Issue | 摘要 | Fix PR | 状态 |
|--------|-------|------|--------|------|
| ⚠️ 高 | [#3857](https://github.com/HKUDS/nanobot/issues/3857) | **Bootstrap HTTP 500**：`nanobot gateway` 运行中但 WebUI 访问时报 500 错误 | — | Open |
| ⚠️ 高 | [#3863](https://github.com/HKUDS/nanobot/issues/3863) | **微信无法 Login**：扫码后提示微信版本过低无法使用 | — | Open |
| ⚡ 中 | [#3790](https://github.com/HKUDS/nanobot/issues/3790) | **WebUI 会话内容显示错乱**：渲染 bug，需刷新恢复 | — | Open（12 条评论） |
| ⚡ 中 | [#3869](https://github.com/HKUDS/nanobot/pull/3869) | DeepSeek API 400 错误（null 内容） | #3869 | Open（已提 Fix） |

### ✅ 已修复 Bug

| Issue | 摘要 | Fix PR |
|-------|------|--------|
| [#3845](https://github.com/HKUDS/nanobot/issues/3845) | MiMo thinking control 通过 OpenRouter 不生效 | [#3851](https://github.com/HKUDS/nanobot/pull/3851) |
| [#3849](https://github.com/HKUDS/nanobot/issues/3849) | CONTRIBUTING.md 中 `ruff format` 导致 ~80 文件无关 diff | 关联 PR 已合并 |

**稳定性评估**：当前有 3 个 Open Bug（#3857、#3863、#3790），其中 #3790 讨论活跃需优先处理。整体缺陷密度正常，维护者响应及时。

---

## 6. 功能请求与路线图信号

### 🎯 高价值功能请求

| Issue/PR | 摘要 | 预估纳入可能性 |
|----------|------|----------------|
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) | **多轮对话中保持 skill 内容**：改进 skill.md 加载方式，避免每轮重新读取 | 中（功能明确，已有相关优化 PR #3865） |
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) | **Secret 引用支持**：从文件/命令/1Password 读取 secrets | 高（文档已跟进 #3866） |

### 🔮 路线图信号

基于今日 PR 合并情况，可推断下一版本可能聚焦：

1. **Agent 可靠性增强**：LoopDetectHook、ReflectRetryHook、spawn 生命周期管理
2. **多渠道扩展**：Signal 频道、多实例 peer 发现
3. **性能优化**：BM25 skill 路由（减少 60% tokens）、session 清理
4. **安全性**：secret 引用配置规范

---

## 7. 用户反馈摘要

### 😤 痛点

| 反馈 | 来源 |
|------|------|
| WebUI 会话内容显示错乱，需手动刷新 | [#3790](https://github.com/HKUDS/nanobot/issues/3790) |
| 微信 Login 失败（版本兼容问题） | [#3863](https://github.com/HKUDS/nanobot/issues/3863) |
| DeepSeek API 因 null 内容返回 400 | [#3869](https://github.com/HKUDS/nanobot/pull/3869)（自报告） |
| MiMo 通过 OpenRouter 无法关闭思考 | [#3845](https://github.com/HKUDS/nanobot/issues/3845)（已修复） |

### ✨ 正向反馈

| 反馈 | 来源 |
|------|------|
| v0.2.0 发布，goal 功能获得社区认可 | Release Note |
| 20 位新贡献者加入，社区活跃度提升 | Release Note |

### 💡 典型使用场景

- **多轮对话/长期任务**：用户期望 skill 定义在多轮对话中保持，避免重复加载（#3846）
- **多实例编排**：HF Spaces 等场景需要 peer 发现和跨 agent 通信（#3854）
- **安全合规**：企业用户需要 secret 引用而非明文配置（#2172）

---

## 8. 待处理积压

### ⏳ 长期未响应的 Issues（>7 天无维护者回复）

| Issue | 创建时间 | 摘要 | 紧急度 |
|-------|----------|------|--------|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | 2026-05-14（3 天前） | WebUI 渲染 bug，12 条评论待确认 | ⚠️ 高 |
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) | 2026-05-16 | 微信 Login 失败，无评论 | ⚡ 中 |
| [#3857](https://github.com/HKUDS/nanobot/issues/3857) | 2026-05-16 | Bootstrap 500，无评论 | ⚠️ 高 |

### 📋 建议关注

| 类别 | 建议 |
|------|------|
| **Bug** | #3857、#3863、#3790 需维护者介入确认复现步骤 |
| **功能** | #3846（skill 持久化）与 #3865（BM25 路由）存在协同优化空间 |
| **Open PRs** | 10 个 PR 待合并，建议按优先级排序审查 |

---

## 📊 健康度指标

| 指标 | 数值 | 评估 |
|------|------|------|
| 今日 Issues 更新 | 7（4 Open / 3 Closed） | 正常 |
| 今日 PRs 更新 | 26（10 Open / 16 Closed/Merged） | 非常活跃 |
| Bug 修复效率 | 4+ Bug PRs 合并 | 优秀 |
| 新功能推进 | Signal 频道、BM25 路由、LoopDetectHook 等 | 稳健 |
| 贡献者增长 | 20 位新贡献者（v0.2.0） | 良好 |

**综合评价**：NanoBot 项目今日处于高活跃度状态，v0.2.0 里程碑顺利交付，功能迭代与 bug 修复并行推进。社区参与度高，贡献者生态健康。建议关注 3 个 Open Bug 的进展。

---

*报告生成时间：2026-05-17 | 数据来源：github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**日期**: 2026-05-17  
**数据来源**: github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

过去24小时内，Zeroclaw 项目保持极高活跃度，共产生 **50条 Issues 更新**（45条新开/活跃，5条关闭）和 **50条 PR 更新**（40条待合并，10条已合并/关闭）。项目整体处于 v0.8.0 Beta 发布前的关键冲刺阶段，大型多代理运行时重构（#6398）正寻求批准。今日社区讨论热度集中在 provider API 兼容性、skill 权限模型、以及 webhook/gateway 安全加固三大方向。值得注意的是，今日未产生新版本发布，但有多个功能完善类 PR 接近合并状态。

---

## 2. 版本发布

**今日无新版本发布**

当前版本状态参考：
- 近期关注版本：**v0.8.0 Multi-Agent Runtime and Schema V3**（PR #6398，正在 Beta 评审中）

---

## 3. 项目进展

过去24小时已合并/关闭的 PR：

| PR # | 类型 | 描述 | 贡献者 |
|------|------|------|--------|
| [#6728](https://github.com/zeroclaw-labs/zeroclaw/pull/6728) | 增强 | Web Dashboard M5.0 — Overview 页面 + 共享 SectionNav | @Stealinglight |
| [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) | Bug修复 | `skill_manage` patch action 强制执行 cooldown 限制 | @JordanTheJet |

**关键进展解读**：

- **#6728** 完成了 Dashboard Overview 页面的开发，新增 Memory/Crons/Integrations/Skills 四个只读摘要卡片，为 v0.8.0 的管理界面打下基础。

- **#6684** 修复了 skill_manage 补丁可能无限制执行的问题，将 `SkillImprover::should_improve_skill` 谓词正确接入生产路径。

---

## 4. 社区热点

### 评论最多的 Issues（Top 5）

| Issue # | 标题 | 评论数 | 状态 | 核心诉求 |
|---------|------|--------|------|----------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | Bug: default_model issue on fresh install | 18 | ✅ 已关闭 | 新安装环境下的模型配置问题，影响 LXC 容器部署 |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Bug: kimi-code provider streaming 调用工具时 API 报错 | 8 | 🔵 进行中 | reasoning_content 缺失导致流式调用失败 |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Feature: Webhook transforms | 5 | 🔵 进行中 | 支持自定义 Webhook 路径和 payload 转换 |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | Feature: 为 Ollama Cloud/Zhipu/Kimi/MiniMax 添加 OAuth 支持 | 5 | 🔵 进行中 | 无需手动管理 API Key 的原生订阅认证 |
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | Context compressor 丢弃 reasoning_content | 4 | 🔵 进行中 | 长对话压缩时丢失推理内容，影响 DeepSeek 等模型 |

### 热点分析

**Provider 兼容性成焦点**：#5600 和 #6269 均涉及 reasoning_content 处理，反映出项目在支持国产大模型（如 kimi、DeepSeek）时遇到 API 兼容性问题。社区对多 Provider 生态的需求强烈。

**安全与权限模型受关注**：#6127（silent-fallback 加固追踪）、#5775（per-skill 安全权限）、#5842（extra_args 白名单验证）等 Issue 表明项目正在强化安全基线。

---

## 5. Bug 与稳定性

### 新报告的 Bug（按严重程度）

| Issue # | 标题 | 严重度 | 状态 | 是否有 Fix PR |
|---------|------|--------|------|---------------|
| [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) | Native OpenAI provider 硬编码 120s 超时，忽略 `timeout_secs` 配置 | 🔴 高 | 🆕 新开 | 无 |
| [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) | `tool_search` 不在 `default_auto_approve` 中，导致 webhook 模式静默挂起 120s 后自动拒绝 | 🔴 高 | 🆕 新开 | 无 |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | 所有 channel 配置 `enabled=false` 时 supervisor 崩溃循环 | 🔴 高 | 🆕 新开 | 无 |
| [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) | `skill_manage patch` 忽略 cooldown，导致无限制补丁执行 | 🟡 中 | 🔵 进行中 | ✅ #6684/#6725 |

### 稳定性预警

**今日高优先级回归风险**：v0.8.0 大型重构（#6398）处于 Beta 评审阶段，包含 Multi-Agent Runtime 和 Schema V3 变更，建议在正式发布前完成以下 Bug 修复：
- `model_switch` 工具跨 turn 持久化问题（#6173）
- ACP 会话持久化（#6649 正在审查）

---

## 6. 功能请求与路线图信号

### 高优先级 Feature Requests

| Issue # | 标题 | 优先级 | 相关 PR | 纳入版本可能性 |
|---------|------|--------|---------|----------------|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | v0.8.0 Multi-Agent Runtime and Schema V3 | P1 | — | ⭐ 即将发布（Beta） |
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | ACP 会话持久化 | P1 | #6649 | ⭐ 高 |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | 为更多 Provider 添加原生 OAuth 支持 | P2 | 无 | 🟡 中（需贡献者） |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Webhook transforms 自定义 payload 处理 | P2 | 无 | 🟡 中 |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | Cron/SOP 触发器 pre-hook 跳过门控 | P2 | 无 | 🟢 长期路线图 |
| [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) | 按模型配置 reasoning 参数 | P2 | 无 | 🟢 长期路线图 |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | LSP 支持 | P2 | 无 | 🟢 长期路线图 |

### 路线图信号解读

**v0.8.0 将是重大版本**：Multi-Agent Runtime 和 Schema V3 的引入意味着架构层面的重大演进，涵盖多 agent 协作、session 持久化、skill 权限细化等核心能力。社区对 skill 系统的完善（#6253、#6667、#6165）显示出对可扩展性的强烈需求。

---

## 7. 用户反馈摘要

### 核心痛点

1. **部署配置复杂**（#6123）
   > 用户在 LXC 容器新安装环境下遇到 `default_model` 配置问题，导致工作流阻塞。反映出 onboarding 体验和配置验证存在改进空间。

2. **Provider 兼容性问题**（#5600）
   > 使用 kimi-code provider 进行流式调用时，`reasoning_content` 缺失导致 API 返回 400 错误。用户期待与主流国产模型的无缝集成。

3. **Webhook 灵活性不足**（#2467）
   > 当前 Webhook 系统无法处理任意 payload（如 GitHub Webhook），用户希望支持自定义路径和 payload 转换。

4. **Skill 安全隔离缺失**（#5775）
   > `allow_scripts` 和 `allowed_commands` 是全局配置，安装一个需要 Python 的 skill 会向所有 skill 开放权限，存在安全风险。

5. **超时配置不生效**（#6723）
   > Native OpenAI provider 硬编码 120s 超时，用户配置的 `timeout_secs` 被忽略，影响长任务场景。

### 用户满意/正向反馈

- **Dashboard 改进**（#6728）：Overview 页面获得正面反响，摘要卡片设计获得认可。
- **Skill 改进工具**（#6667/#6684）：社区对 skill_manage 工具的 cooldown 修复表示关注，问题解决路径清晰。

---

## 8. 待处理积压

以下 Issue 长期无维护者响应，建议优先关注：

| Issue # | 标题 | 创建时间 | 状态 | 关注原因 |
|---------|------|----------|------|----------|
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Webhook transforms | 2026-03-02 | 🔵 进行中 | 2个月+，高需求功能 |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | Provider OAuth 支持 | 2026-04-10 | 🔵 进行中 | 1个月+，需维护者指导 |
| [#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604) | Mattermost 私聊支持 | 2026-04-10 | 🔵 进行中 | 1个月+ |
| [#5573](https://github.com/zeroclaw-labs/zeroclaw/issues/5573) | SMTP Email Channel | 2026-04-10 | 🔵 进行中 | 1个月+ |
| [#5731](https://github.com/zeroclaw-labs/zeroclaw/issues/5731) | Manifest Provider | 2026-04-14 | 🔵 进行中 | 1个月+ |
| [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | Per-skill 安全权限 | 2026-04-15 | 🔵 进行中 | 1个月+，安全相关 |

### PR 积压（待审查）

| PR # | 标题 | 创建时间 | 状态 | 建议 |
|------|------|----------|------|------|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | v0.8.0 Multi-Agent Runtime | 2026-05-05 | 🔵 寻求批准 | 优先审查，发布阻断 |
| [#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) | ACP 会话持久化 | 2026-05-14 | 🔵 进行中 | 关联 v0.8.0 功能 |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) | Anthropic/Bedrock 原生扩展推理 | 2026-04-11 | 🔵 进行中 | 1个月+，建议跟进 |

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐⭐ | 24h 100条更新，10 PRs 合并 |
| Bug 处理 | ⭐⭐⭐ | 4个高优 Bug 新报，维护者响应及时 |
| 功能推进 | ⭐⭐⭐⭐ | v0.8.0 Beta 阶段，核心功能稳定推进 |
| 社区响应 | ⭐⭐⭐ | 部分 Issue 积压超1个月，需加强 |
| 安全性 | ⭐⭐⭐⭐ | 多项安全增强 PR 在推进（权限模型、超时处理） |

**综合评价**: 项目处于高速迭代期，v0.8.0 发布在即。建议优先解决今日报告的 3 个高危 Bug（#6721/#6723/#6724），并加快 #6398 审查进度。

---

*本报告由 AI 自动生成，数据截至 2026-05-17 24:00 UTC*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**: 2026-05-17  
**项目**: PicoClaw (sipeed/picoclaw)  
**报告时间范围**: 过去 24 小时

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时保持较高活跃度，共产生 9 次更新操作。Issue 方面有 4 个处于活跃状态、1 个已关闭；PR 方面 3 个待合并、1 个已合并。值得注意的动态包括：微信多账号配置功能已完成合并（#2881），这是一个重要的渠道功能增强；同时 v0.2.8 版本的网关渠道启动问题（#2742）引发讨论，表明存在潜在的稳定性问题。今日发布了一个 nightly 构建版本，显示项目仍在积极迭代中。

---

## 2. 版本发布

### Nightly Build 已发布

**版本号**: `v0.2.8-nightly.20260517.0df050ff`

| 属性 | 说明 |
|------|------|
| 类型 | 自动构建的每日版本 |
| 稳定性 | ⚠️ 可能不稳定，请谨慎使用 |
| 变更范围 | 相比 v0.2.8 正式版的所有提交 |

**变更日志**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> **提示**: 如遇问题，建议回退至最新正式版 v0.2.8。

---

## 3. 项目进展

### ✅ 已合并 PR

| PR | 标题 | 合并时间 | 影响 |
|----|------|----------|------|
| #2881 | feat: 支持微信多账号配置 | 2026-05-16 | ✅ 重要 |

**#2881 详情**（已合并）  
实现微信多账号配置功能，包括：

- 后端 API 支持多账号 CRUD 操作和状态管理
- 前端新增账号列表展示、新增、编辑和删除界面
- 优化微信媒体处理以兼容多账号场景
- 测试覆盖：页面加载、新增/编辑/删除账号、多账号状态显示
- **确认现有单账号模式不受影响**

---

### 📋 待合并 PR

| PR | 作者 | 标题 | 类别 |
|----|------|------|------|
| #2835 | @bogdanovich | fix(agent): always publish final reply after interim message | Bug Fix |
| #2882 | @lc6464 | feat(chat): add independent code block copy and collapse controls | Feature |
| #2883 | @jiegehere | feat: 支持微信多账号配置 | Feature |

**#2835 分析**：修复代理在发送临时消息后最终回复被抑制的问题，提升交互体验质量。

**#2882 分析**：为 Web UI 代码块添加复制和折叠控制，改善用户体验。

**#2883 注意**：此 PR 与已合并的 #2881 功能重复（均实现微信多账号），可能需要确认是否存在冲突或版本差异。

---

## 4. 社区热点

### 🔥 热点 Issue #2421 - 邮箱渠道功能请求

| 属性 | 值 |
|------|-----|
| 状态 | OPEN |
| 作者 | @aquaratixc |
| 创建时间 | 2026-04-08 |
| 评论数 | 6 ⭐ |
| 点赞数 | 1 👍 |

**诉求摘要**：  
用户请求将 **email（电子邮件）** 添加为 PicoClaw 的原生渠道。典型使用场景包括：

- 企业环境用户依赖邮件作为唯一通信渠道
- 科学或保守环境中邮件是标准通信方式
- 需要与传统邮件系统集成的业务场景

**链接**: https://github.com/sipeed/picoclaw/issues/2421

> 💡 **分析**：该功能请求已沉淀超过一个月，获得 6 条评论，表明有一定社区需求。但目前标记为 `stale`，需维护者关注是否纳入路线图。

---

### 📈 高互动 Issue #2742 - v0.2.8 网关启动 Bug

| 属性 | 值 |
|------|-----|
| 状态 | OPEN |
| 作者 | @keys4words |
| 评论数 | 4 ⭐ |

**问题描述**：  
在 v0.2.8 版本中，gateway 启动时报告 "no channels" 错误，即使配置文件中 Telegram 渠道已启用。

**环境信息**：
- PicoClaw v0.2.8
- Go 1.25.9
- 操作系统: Ubuntu 22.04
- AI 模型: openrouter/tencent/hy3-preview:free

**链接**: https://github.com/sipeed/picoclaw/issues/2742

---

## 5. Bug 与稳定性

### 🐛 今日 Bug 报告（按严重程度）

| 优先级 | Issue | 标题 | 状态 | Fix PR |
|--------|-------|------|------|--------|
| 🔴 高 | #2742 | [BUG] gateway starts with no channels in v0.2.8 | OPEN | ❌ |
| 🟡 中 | #2880 | [BUG] Android 权限错误导致服务启动失败 | OPEN | ❌ |

**#2742**（高优先级）：v0.2.8 版本的渠道初始化问题，影响网关正常运行，建议优先排查。

**#2880**（中优先级）：Android 设备在获取存储权限后仍无法创建 `Downloads/picoclaw` 目录，疑似 Android 10+ 沙盒限制问题。设备：Xiaomi Pocophone F1，系统：Android 10 MIUI 12。

---

## 6. 功能请求与路线图信号

### 📝 待处理功能请求

| Issue | 功能 | 状态 | 相关 PR | 纳入可能性 |
|-------|------|------|---------|-------------|
| #2421 | 邮箱原生渠道 | OPEN (stale) | 无 | ⭐⭐ |
| #2834 | 从源码升级教程 | OPEN (stale) | 无 | ⭐⭐⭐ |
| #2782 | MCP Streamable HTTP 传输支持 | CLOSED | 无 | ✅ 已解决 |

**#2834 分析**：用户明确请求升级教程，这是一个低技术门槛但高用户体验价值的功能。建议补充文档。

**路线图信号**：
- **渠道多样化**：微信多账号已合并，邮箱渠道在讨论中
- **传输协议扩展**：MCP Streamable HTTP 支持已完成
- **用户体验改进**：代码块交互功能（复制/折叠）在 PR #2882 中

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的用户痛点与场景：

### 🔍 核心痛点

| 痛点 | 来源 | 场景描述 |
|------|------|----------|
| **渠道兼容性不足** | #2421 | 企业/科学环境用户需要邮件渠道，现有方案不支持 |
| **版本升级困难** | #2834 | 用户不清楚如何从旧版本升级至新版本 |
| **权限管理问题** | #2880 | Android 设备权限授予后仍无法正常工作 |
| **稳定性回归** | #2742 | v0.2.8 引入渠道初始化问题，影响核心功能 |

### 💬 正面反馈

- #2881 微信多账号功能经过充分测试，用户界面完善
- 功能实现覆盖了新增、编辑、删除、状态管理等全生命周期

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Issue（>14天未更新）

| Issue | 创建时间 | 距今天数 | 标题 | 优先级 |
|-------|----------|----------|------|--------|
| #2421 | 2026-04-08 | 39 天 | [Feature] Add email as native channel | 高 |
| #2742 | 2026-05-01 | 16 天 | [BUG] gateway starts with no channels | 🔴 高 |
| #2834 | 2026-05-09 | 8 天 | [Feature] Update from source | 中 |

> **建议维护者关注**：
> - #2421 虽有评论互动但标记为 stale，需明确是否在路线图中
> - #2742 作为 v0.2.8 版本的严重 Bug，建议优先响应

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issue 总数（过去24h） | 5 | 活跃 |
| PR 总数（过去24h） | 4 | 活跃 |
| 合并率 | 25% (1/4) | 正常 |
| 开放 Bug 数 | 2 | ⚠️ 需关注 |
| Stale 标记 | 3 | 需清理 |

---

**日报生成时间**: 2026-05-17  
**数据来源**: GitHub PicoClaw Repository (sipeed/picoclaw)

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# hermes-agent 项目日报 | 2026-05-17

---

## 1. 今日速览

2026年5月17日，hermes-agent 保持极高的开发活跃度。过去24小时内共处理 **224 条 Issue 更新**（139 新开/活跃，85 关闭）和 **500 条 PR 更新**（301 待合并，199 已合并/关闭），延续了 v0.14.0 大版本发布后的持续迭代节奏。社区贡献势头强劲，共建者从上一版本的记录中已有 **215 位社区贡献者** 参与进来。今日无新的正式版本发布，但维护者在安全修复、平台兼容性和用户体验优化方向上有大量合并动作。整体项目处于**健康推进状态**，Bug 修复和安全补丁优先级较高，建议持续关注 P1 级别问题的跟进速度。

---

## 2. 版本发布

**📦 v2026.5.16: Hermes Agent v0.14.0**  
Release Date: May 16, 2026  
[Release 页面](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.16)

| 维度 | 数据 |
|------|------|
| Commits | 808 |
| Merged PRs | 633 |
| Files Changed | 1,393 |
| Insertions | 165,061 |
| Issues Closed | 545（含 12 P0、50 P1） |
| Contributors | 215（含联名作者） |

**里程碑意义**：v0.14.0 被标注为 **"The Foundation Release"**，意味着该版本在架构层面奠定了长期演进的基石，涵盖记忆系统重构、插件生态扩展、多平台网关增强等核心能力的系统性升级。自 v0.13.0 以来的 808 次提交和 633 个合并 PR 表明这是一个高强度的冲刺周期。

**破坏性变更提示**：当前日报数据中未直接提供 breaking changes 明细，建议用户查阅 Release Notes 完整变更日志以确认是否有配置格式或 API 变更需要迁移。

---

## 3. 项目进展

### 3.1 今日合并/关闭的重要 PR

以下为按影响力和修复范围筛选的代表性合并项：

| PR | 类型 | 组件 | 摘要 | 状态 |
|----|------|------|------|------|
| [#27225](https://github.com/NousResearch/hermes-agent/pull/27225) | Security | Agent | **修复日志中 Linear 和 Airtable API Key 未脱敏问题**，将 `lin_api_<38chars>` 等格式纳入 `agent/redact.py` 脱敏列表 | OPEN ⚠️ P1 |
| [#27224](https://github.com/NousResearch/hermes-agent/pull/27224) | Refactor | CLI | 为 `install.ps1` 新增 bootstrap 协议，支持外部程序解释和控制安装流程 | OPEN ⚠️ P2 |
| [#27231](https://github.com/NousResearch/hermes-agent/pull/27231) | Security | Agent | **修复 shell hook 在 message/reason 缺失时错误放行工具调用的问题**——即使无 message/reason 字段，hook 的 `pre_tool_call` 阻塞指令也必须被尊重 | OPEN ⚠️ P1 |
| [#27222](https://github.com/NousResearch/hermes-agent/pull/27222) | Feature | Gateway/WhatsApp | 为 WhatsApp 桥接新增**已读回执**功能，调用 `sock.readMessages()` 替代原来的单灰勾状态 | OPEN ⚠️ P3 |
| [#27223](https://github.com/NousResearch/hermes-agent/pull/27223) | Feature | Gateway/WhatsApp | 新增 `WHATSAPP_DM_ONLY` 环境变量，允许用户**静默丢弃群聊消息**仅处理私信 | CLOSED ✅ |
| [#42](https://github.com/NousResearch/hermes-agent/pull/42) | Fix | Gateway | **修复网关硬编码 OpenRouter 为 LLM Provider 的问题**，现在正确读取 `config.yaml` 中的 provider 配置并匹配 Nous OAuth 凭证 | CLOSED ✅ |
| [#27213](https://github.com/NousResearch/hermes-agent/pull/27213) | Bug Fix | Tool/Skills | 修复 Linear skill 中 `--label` 和 `--assignee` 参数**静默失效**的 Bug（参数被接受但未实际应用） | CLOSED ✅ |
| [#27203](https://github.com/NousResearch/hermes-agent/pull/27203) | Bug Fix | CLI | 修复 `--resume` 空会话时误导性 "Starting fresh" 提示信息，现在正确反映实际行为并提供 `hermes sessions delete` 补救指引 | OPEN ⚠️ P3 |
| [#27219](https://github.com/NousResearch/hermes-agent/pull/27219) | Bug Fix | Agent/xAI | 修复 xAI /responses 端点拒绝 pattern/format 字段的问题，自动在调用前剥离Responses格式工具 schema 中的冗余元数据 | OPEN ⚠️ P2 |
| [#27220](https://github.com/NousResearch/hermes-agent/pull/27220) | Feature | TUI | 新增 `HERMES_TUI_CLASSIC_SKIN` 环境变量，启用经典输入框分隔符样式 | OPEN ⚠️ P3 |
| [#26982](https://github.com/NousResearch/hermes-agent/pull/26982) | Bug Fix | Achievements | 修复成就系统将 `memory_write_events` 计数错误绑定到工具名称而非实际操作参数的问题 | OPEN ⚠️ P3 |
| [#22598](https://github.com/NousResearch/hermes-agent/pull/22598) | Bug Fix | TUI | 修复历史消息滚动显示时被截断至 ~800 字符的问题，现在渲染完整 Assistant Markdown | OPEN ⚠️ P2 |
| [#23243](https://github.com/NousResearch/hermes-agent/pull/23243) | Feature | TUI | 为 Dashboard 及内嵌 TUI 添加**完整中文（zh）国际化**支持 | OPEN ⚠️ P3 |
| [#26055](https://github.com/NousResearch/hermes-agent/pull/26055) | Feature | Gateway/Discord | Hermes 在 Discord 中执行工具时显示的"正在处理"气泡消息现在**自动清理**，避免刷屏 | OPEN ⚠️ P3 |

**进展亮点**：
- **安全修复密度高**：今日有至少 2 个 Security 相关 PR（P1 级别），涵盖 API Key 脱敏和 shell hook 绕过问题，说明项目对安全问题的响应速度积极。
- **平台兼容性持续完善**：WhatsApp（已读回执、DM-only）、Discord（消息气泡清理）、Feishu（凭证构建修复）等多平台 gateway 均有更新，生态覆盖范围扩展。
- **国际化和 UX 优化**：中文本地化 PR 和 TUI 样式增强反映了产品化方向的努力。

---

## 4. 社区热点

### 4.1 评论数最多的 Issues（Top 10）

| Issue | 标题 | 评论 | 点赞 | 状态 | 类型 |
|-------|------|------|------|------|------|
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) | Add mempalace for external memory support | 18 | 26 | CLOSED | Feature |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | Receipts for self-improving agents: proving which skill version produced which output | 11 | 0 | OPEN | Feature |
| [#73](https://github.com/NousResearch/hermes-agent/issues/73) | Matrix Protocol Support for Messaging Gateway | 10 | 10 | CLOSED | Feature |
| [#346](https://github.com/NousResearch/hermes-agent/issues/346) | Structured Memory System — Typed Nodes, Graph Edges, and Hybrid Search | 8 | 2 | CLOSED | Feature |
| [#10575](https://github.com/NousResearch/hermes-agent/issues/10575) | [Bug] Anthropic OAuth/Claude Max proxy path misclassifies full Hermes system prompt as extra-usage exhausted | 7 | 0 | CLOSED | Bug |
| [#10695](https://github.com/NousResearch/hermes-agent/issues/10695) | Python dependency CVEs: aiohttp, cryptography, curl-cffi need minimum version bumps | 7 | 0 | CLOSED | Security |
| [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | RFC: Per-user agent isolation and identity-based permission system | 6 | 0 | OPEN | Feature |
| [#3000](https://github.com/NousResearch/hermes-agent/issues/3000) | [Bug]: install.sh silently aborts on macOS when uv-managed Python path contains spaces | 6 | 0 | CLOSED | Bug |
| [#24360](https://github.com/NousResearch/hermes-agent/issues/24360) | [Feature]: No build-in skills in Homebrew-installed Hermes agent | 6 | 0 | OPEN | Bug |
| [#359](https://github.com/NousResearch/hermes-agent/issues/359) | Enhanced Extension System with Tool Interception & Lifecycle Events | 6 | 3 | CLOSED | Feature |

### 4.2 热点分析

**🔴 Issue #6323 — External Memory Support (mempalace)**
- **诉求本质**：用户希望在 Hermes 中引入结构化外部记忆模块（mempalace），以突破上下文窗口限制，实现跨会话的长期记忆和长时域任务能力。
- **社区反响**：26 个 👍，18 条评论，是今日互动量最高的 Issue，已于 2026-05-16 关闭。暗示可能已被纳入 v0.14.0 或相关 PR 中。
- **链接**：[#6323](https://github.com/NousResearch/hermes-agent/issues/6323)

**🟡 Issue #11692 — Self-Improving Agent 的溯源问题**
- **诉求本质**：社区成员 Tom Farley 提出 Hermes 的自修改特性带来了**出处（provenance）问题**——当 agent 自己改进技能时，如何证明哪个版本的技能产生了哪个输出？这涉及治理和审计能力。
- **讨论价值**：这是一个高级架构层面的讨论，可能影响未来的 Skill 版本管理和可解释性设计方向。
- **链接**：[#11692](https://github.com/NousResearch/hermes-agent/issues/11692)

**🟡 Issue #21574 — Per-user Agent Isolation**
- **诉求本质**：用户 LouisYang841 在 Telegram 网关测试中被女朋友通过 prompt injection "扮演"了自己的身份，引发了对多用户场景下 agent 隔离机制的广泛讨论。
- **核心诉求**：需要实现基于用户身份的权限系统，防止跨用户污染。
- **链接**：[#21574](https://github.com/NousResearch/hermes-agent/issues/21574)

**🟢 Issue #73 — Matrix Protocol 支持**
- **诉求本质**：社区呼吁支持去中心化、自托管的 Matrix 消息协议，增强隐私保护。
- **现状**：已关闭，可能已实现或规划入后续版本。
- **链接**：[#73](https://github.com/NousResearch/hermes-agent/issues/73)

---

## 5. Bug 与稳定性

### 5.1 按严重程度排序的 Bug Issues

#### 🔴 P1（Critical — 需立即处理）

| Issue | 描述 | 评论 | 状态 | Fix PR |
|-------|------|------|------|--------|
| [#20465](https://github.com/NousResearch/hermes-agent/issues/20465) | **CLI 交互会话在 Codex 429 `usage_limit_reached` 时不自动回退**，而 cron jobs 相同 fallback chain 正常工作 | 4 | CLOSED | — |
| [#10695](https://github.com/NousResearch/hermes-agent/issues/10695) | **Python 依赖 CVE**：aiohttp、cryptography、curl-cffi 需提升最低版本 | 7 | CLOSED | — |
| [#14521](https://github.com/NousResearch/hermes-agent/issues/14521) | **Context Compaction 导致历史消息被重新注入为新用户输入**（第3次出现） | 4 | CLOSED | — |
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | **Memory persistence 问题**：session replay 浪费 token、state.db 损坏、环境幻觉（Heavy production field report） | 4 | OPEN | — |
| [#24698](https://github.com/NousResearch/hermes-agent/issues/24698) | **Docker 镜像中缺少 python-telegram-bot 依赖**，Telegram 网关无法启动 | 5 | OPEN | — |
| [#15272](https://github.com/NousResearch/hermes-agent/issues/15272) | **Nix CI 在 main 分支上全部 PR 阻塞**：`npmDepsHash` 过期 | 5 | CLOSED | — |
| [#10575](https://github.com/NousResearch/hermes-agent/issues/10575) | **Anthropic OAuth/Claude Max 路径误判**：将完整 Hermes system prompt 分类为 extra-usage exhausted | 7 | CLOSED | — |

**评估**：#20465（CLI fallback bug）和 #10695（Python CVE）已被标记为 P1 但今日状态仍为 OPEN，需确认是否已有对应 Fix PR 合并。今日 #27231（shell hook 绕过）和 #27225（API Key 脱敏）均为 Security P1 PR，建议优先合并。

#### 🟠 P2（High — 应尽快处理）

| Issue | 描述 | 评论 | 状态 | Fix PR |
|-------|------|------|------|--------|
| [#24443](https://github.com/NousResearch/hermes-agent/issues/24443) | **MiMo reasoning 模型**因 `reasoning_content` 未在 chat history 中保留而在多轮对话失败 | 4 | OPEN | — |
| [#14980](https://github.com/NousResearch/hermes-agent/issues/14980) | **WhatsApp bridge npm install 超时设置过短**（硬编码 60s），在 NAS/慢速系统上容器启动失败 | 5 | OPEN | — |
| [#9916](https://github.com/NousResearch/hermes-agent/issues/9916) | **Feishu Bot 回复泄漏**：P2P 话题线程内的回复错误出现在主聊天窗口 | 5 | CLOSED | — |
| [#3000](https://github.com/NousResearch/hermes-agent/issues/3000) | **install.sh 在 macOS uv 路径含空格时静默中止** | 6 | CLOSED | — |
| [#24360](https://github.com/NousResearch/hermes-agent/issues/24360) | **Homebrew 安装后 skills 目录为空** | 6 | OPEN | — |
| [#22598](https://github.com/NousResearch/hermes-agent/pull/22598) | TUI 历史消息滚动时被截断至 ~800 字符 | — | OPEN | Yes → |

**评估**：P2 中 #22598 已有 Fix PR [#22598](https://github.com/NousResearch/hermes-agent/pull/22598)；#14980（WhatsApp npm 超时）和 #24443（MiMo reasoning）仍需关注。

#### 🟡 P3（Medium — 计划处理）

| Issue | 描述 | 评论 | 状态 |
|-------|------|------|------|
| [#26580](https://github.com/NousResearch/hermes-agent/issues/26580) | Telegram 突然停止工作，用户情绪激烈（每日使用体验恶化） | 5 | OPEN |
| [#27103](https://github.com/NousResearch/hermes-agent/issues/27103) | Agent 创建冗余技能 + 切换模型时行为剧变 | 3 | OPEN |
| [#27197](https://github.com/NousResearch/hermes-agent/issues/27197) | xAI Grok 在 Responses API 模式下返回 HTTP 400 | 3 | OPEN |
| [#26563](https://github.com/NousResearch/hermes-agent/issues/26563) | Supergrok auth 在 headless 模式下无法工作 | 3 | OPEN |

**稳定性小结**：今日共报告/更新 **约 15+ 个 Bug**，其中 P1 占比显著。维护者对安全类 Bug 响应积极（已有多个 P1 Security PR），但 CLI fallback (#

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报｜2026-05-17

## 📊 今日速览

截至 2026-05-17，NanoClaw 项目在过去 24 小时内保持高度活跃，共新增 **5 条 Issues** 和 **9 条 Pull Requests**，其中 **2 条 PR 已合并**。项目整体呈现稳健向前的态势：健康监控模块持续迭代（health-monitor 系列 PR 已占 3 席），Telegram 集成完成内联键盘按钮功能并已合并，展现出渠道扩展能力。同时，今日报告了 **5 个 Bug**，涵盖消息去重、数据库稳定性、容器网络通信等核心链路，说明随着用户场景复杂度提升，系统稳定性挑战正在增加。**无新版本发布**，当前版本仍为 v2.0.63。

---

## 📦 版本发布

**无新版本发布**。当前稳定版本维持 v2.0.63，CHANGELOG 对齐文档（#2509）已合并，预计近期将正式发布说明文档修订。

---

## 🚀 项目进展

### ✅ 已合并 Pull Requests

| PR | 类型 | 贡献者 | 摘要 |
|----|------|--------|------|
| **#2515** | Feature（渠道） | @mkeizer | **feat(telegram): add inline keyboard buttons support** — 为 Telegram 渠道新增 `InlineButton` 与 `SendMessageOptions` 类型，支持通过 `send_message` MCP 工具的 `buttons` 参数传递内联键盘按钮，构建 Grammy `InlineKeyboard` 管道，打通从 UI 到消息分发全链路。这是 Telegram 交互能力的重要升级，提升 Bot 用户体验。[🔗](https://github.com/nanocoai/nanoclaw/pull/2515) |
| **#2509** | Docs | @glifocat | **docs(changelog): align v2.0.63 rollup line with RELEASING.md voice** — 将 v2.0.63 的变更日志措辞与 RELEASING.md 规范对齐，确保版本发布文档的一致性与专业性。[🔗](https://github.com/nanocoai/nanoclaw/pull/2509) |

### 🔄 进行中 Pull Requests（7 条 Open）

| PR | 类型 | 贡献者 | 摘要 |
|----|------|--------|------|
| **#2508** | Feature | @alexli-77 | **feat(health-monitor): token status table + sweep all groups every 5 min** — 扩展 health-monitor 模块，新增 OAuth token 状态持久化记录表，并实现每 5 分钟对所有 agent group 的主动巡检，解决原有单次告警刷新机制的盲区问题。[🔗](https://github.com/nanocoai/nanoclaw/pull/2508) |
| **#2505** | Feature | @alexli-77 | **Feat/health monitor token refresh** — 为 health-monitor 添加 OAuth token 自动刷新能力，从 macOS Keychain 预获取 token，强化容器生命周期管理中的认证连续性。[🔗](https://github.com/nanocoai/nanoclaw/pull/2505) |
| **#2498** | Feature | @alexli-77 | **feat(health-monitor): host-side silent-fail detection and operator alerting** — 新增 `src/modules/health-monitor/` 模块，5 分钟定时器检测静默任务失败并向 Discord 推送告警；同时在 `buildMounts()` 中实现 macOS Keychain OAuth token 预刷新，解决"容器 Hung 但未被检测"的边缘场景。[🔗](https://github.com/nanocoai/nanoclaw/pull/2498) |
| **#2497** | Feature Skill | @kky | **Feature/agent network** — 新增 agent 网络功能 Skill，扩展 NanoClaw 在多 agent 协作场景下的通信与协调能力。[🔗](https://github.com/nanocoai/nanoclaw/pull/2497) |
| **#2510** | Bug Fix（CLI） | @glifocat | **fix(cli): hydrate receiver inbound.db on approval-path destinations add** — 修复 CLI 在审批路径目的地上添加时未正确初始化 receiver 的 `inbound.db` 问题，确保数据一致性。[🔗](https://github.com/nanocoai/nanoclaw/pull/2510) |
| **#2507** | Bug Fix（Skills） | @meeech | **fix(skills): skip skill branches on a different major version** — 修复 v2 分支下 `/update-skills` 误将 v1.x 分支纳入候选列表的问题，通过对比 `package.json` 中的 major 版本过滤不兼容分支，避免 v1 符号引用（`GroupQueue`、`loadSenderAllowlist` 等）污染 v2 代码库。[🔗](https://github.com/nanocoai/nanoclaw/pull/2507) |
| **#2469** | Bug Fix（WhatsApp） | @dwudwu | **fix(whatsapp): correct recovery guidance for decrypt failures and 401 logout** — 修复 WhatsApp 适配器两处失败场景的操作指引：① 解密失败告警从 `launchctl kickstart` 改为正确的 NanoClaw 恢复路径；② 401 登出后正确引导用户重新认证。[🔗](https://github.com/nanocoai/nanoclaw/pull/2469) |

---

## 🔥 社区热点

### 最活跃 Issue 分析

| Issue | 标题 | 评论数 | 热度分析 |
|-------|------|--------|----------|
| **#2506** | bug: send_message dedup silently drops responses when turns complete within 60 seconds of each other | 1 | **高优先级** — 涉及核心消息处理逻辑，Agent 响应被静默丢弃导致客户端超时，影响生产稳定性。[🔗](https://github.com/nanocoai/nanoclaw/issues/2506) |

**其他 Issues 热度相对均衡**，均无评论，但均标注了明确的复现场景与根因分析（特别是 #2516），说明贡献者具备较强的技术背景。

**热点 PR：** `#2515` Telegram 内联键盘功能合并后，可能引发更多渠道交互能力的需求讨论；health-monitor 三连 PR（#2498, #2505, #2508）形成功能集群，预计将成为下一迭代的重点合并目标。

---

## 🐛 Bug 与稳定性

> **按严重程度排序**

| 优先级 | Issue | 问题描述 | 影响范围 | 状态 |
|--------|-------|----------|----------|------|
| 🔴 **P0** | **#2506** | 消息去重逻辑在 60 秒内连续回合或流式响应过程中静默丢弃 agent 回复，客户端超时 | 生产环境核心消息链路，用户感知为"消息发出去没反应" | Open，1 条评论，根因已定位 |
| 🟠 **P1** | **#2512** | Ubuntu 默认安装后 OneCLI 与 PostgreSQL 容器间通信失败（hostname 解析问题） | 容器化部署场景，特别是 Docker bridge 网络配置 | Open，无评论 |
| 🟠 **P1** | **#2516** | 容器被 SIGKILL（exit 137）后遗留 `outbound.db-journal` 文件，导致主机投递轮询以只读模式打开数据库失败 | 强制终止或资源上限触发的容器回收场景 | Open，无评论，根因已分析 |
| 🟡 **P2** | **#2513** | Colima 运行时 CA 证书 bind-mount 静默变成空目录，容器内所有 HTTPS 请求失败（Self-signed certificate） | macOS + Colima 用户群体 | Open，无评论 |
| 🟡 **P2** | **#2514** | Setup 流程卡在 `needrestart whiptail` 对话框，长时间无响应 | Linux 部署初始化流程 | Open，无评论 |

**稳定性风险评估：** 今日 Bug 报告集中在 **容器网络通信（#2512, #2513）** 和 **消息可靠性（#2506）** 两大领域，说明项目在从开发环境向生产多环境部署扩展时，基础设施依赖层的兼容性测试存在盲区。建议优先处理 #2506（消息静默丢失是用户信任杀手）和 #2516（数据库文件一致性）。

**已有 Fix PR：** `#2507`（版本过滤）、`#2510`（inbound.db hydrate）、`#2469`（WhatsApp 恢复指引）正在审查中，修复方向清晰。

---

## 💡 功能请求与路线图信号

### 新功能提案分析

| PR | 类型 | 贡献者 | 需求解读 | 纳入版本可能性 |
|----|------|--------|----------|----------------|
| **#2497** | Feature Skill | @kky | **Agent 网络**：扩展多 agent 协作通信能力，契合复杂工作流场景需求 | 🟢 高 — Skill 类型，侵入性小 |
| **#2498 / #2505 / #2508** | Feature（健康监控） | @alexli-77 | **系统可靠性增强**：健康监控→Token 刷新→全局巡检，形成完整的自愈能力链路 | 🟢 高 — 三 PR 形成功能集群，代码质量高，方向明确 |

**路线图信号推断：** 从 health-monitor 三连 PR 可看出维护者正在强化 NanoClaw 的**生产可观测性**与**自动恢复能力**，预计 v2.1.x 可能将健康监控模块作为默认功能集成。同时 Telegram 交互能力的完善（#2515）暗示项目正在向多渠道深度集成方向演进。

---

## 👥 用户反馈摘要

### 核心痛点提炼

1. **部署复杂性带来的挫折感**
   - Ubuntu 默认安装后网络不通（#2512），PostgreSQL hostname 无法解析
   - Colima + macOS 环境 CA 证书挂载失效（#2513），HTTPS 全链路崩溃
   - Setup 卡在交互式对话框无法自动化（#2514）

2. **消息可靠性焦虑**
   - Agent 响应静默丢失（#2506），用户无法判断是发送失败还是等待超时
   - "Silent fail" 问题被反复提及，说明透明的可观测性是核心诉求

3. **容器生命周期管理薄弱**
   - SIGKILL 后数据库状态不一致（#2516）
   - Docker 网络隔离导致的服务发现失效

### 使用场景推断

从 Issue 描述来看，用户群体正在从**单容器开发测试**向**多容器生产部署**迁移，典型场景包括：
- macOS 开发者本地环境（Colima）
- Ubuntu 服务器生产部署
- 跨容器服务通信（OneCLI ↔ PostgreSQL）
- 长时间运行 Agent（需要健康监控与自我恢复）

---

## 📋 待处理积压

> **长期未响应（>3 天无更新）或高价值未合并的 Items**

| Item | 类型 | 年龄 | 状态 | 紧迫性 | 说明 |
|------|------|------|------|--------|------|
| **#2497** | PR | 2 天 | Open | 🟡 中 | Feature/agent network — 新功能 Skill，建议尽快评审 |
| **#2469** | PR | 3 天 | Open | 🟡 中 | WhatsApp 修复 — 小而明确，建议优先合并 |
| **#2506** | Issue | 1 天 | Open | 🔴 高 | 消息静默丢弃 — P0 Bug，需要维护者介入定位根因 |
| **#2516** | Issue | 1 天 | Open | 🟠 中 | SIGKILL 后数据库状态 — 根因已清晰，建议发布修复方案 |

---

## 📈 项目健康度指标

| 维度 | 数据 | 评估 |
|------|------|------|
| **活跃度** | 5 Issues + 9 PRs / 24h | 🟢 极高 — 社区参与度强 |
| **合并率** | 2 / 9 PRs 合并 | 🟡 中 — 审查周期适中，需关注 7 条 Open PR 进展 |
| **Bug 密度** | 5 个新 Bug（含 1 个 P0） | 🔴 偏高 — 需快速响应消息丢失问题 |
| **版本节奏** | 无新版本发布 | 🟡 中 — v2.0.63 稳定，建议保持 1-2 周发布节奏 |
| **功能演进** | health-monitor 集群、Telegram 交互增强 | 🟢 健康 — 功能迭代有序，方向明确 |

---

> **报告生成时间**：2026-05-17 | **数据来源**：GitHub NanoClaw Repository | **分析周期**：过去 24 小时

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-05-17

## 1. 今日速览

IronClaw 项目在过去 24 小时内保持高度活跃，整体开发势头强劲。共产生 **15 条 Issues 更新**（新开/激活 14 条，关闭 1 条）和 **39 条 PR 更新**（待合并 24 条，已合并/关闭 15 条）。核心主线围绕 **Reborn 架构升级**持续推进，包括产品级实时工作流（product-live）集成、运行时组件模块化、以及配置文件体系的重新设计。社区对日志下载工具的需求已得到解决（#3534 关闭），但 nightly E2E 测试仍存在失败问题需要注意。

---

## 2. 版本发布

**无新版本发布**。

最近一次版本记录缺失（数据中未提供最新 Releases 信息），当前版本稳定性依赖持续测试覆盖。

---

## 3. 项目进展

### 合并/关闭的关键 PRs

| PR | 标题 | 贡献者 | 状态 | 说明 |
|---|---|---|---|---|
| [#3710](https://github.com/nearai/ironclaw/pull/3710) | test(reborn): add product-live planned AgentLoop harness | @serrrfirat | ✅ 已关闭 | 证明了 Reborn 产品级路径可通过 planned AgentLoop runtime 驱动生产级入站消息工作流 |
| [#3688](https://github.com/nearai/ironclaw/pull/3688) | refactor(reborn): project ProductAdapter from single ExtensionManifestV2 | @serrrfirat | ✅ 已关闭 | 用 Extension Manifest v2 机制替代旧的 TOML 格式，统一产品适配器声明 |
| [#3679](https://github.com/nearai/ironclaw/pull/3679) | feat(reborn): apply universal FS dispatch across consumer crates | @ilblackdragon | 🔄 待合并 | 13 commits，+15,214 / -929 LOC，61 个文件，应用通用文件系统分发结构（取代 #3666/#3670/#3671/#3672/#3678） |
| [#3704](https://github.com/nearai/ironclaw/pull/3704) | feat(reborn): boot TOML + provider catalog | @serrrfirat | 🔄 待合并 | 落地 `config.toml` + `providers.json` 启动配置文件，复刻 v1 分裂结构 |

### 核心推进领域

**Reborn 产品线稳步落地**（14 个相关 PR）：
- 产品级实时能力 IO 适配器（#3715）、运行时测试框架（#3710/#3711/#3713）已完成阶段验证
- HTTP 出口工具（#3681）、BeforeInboundPolicy 策略边界（#3632）等关键能力已入栈待合并

**配置与组成根重构**（#3695 + #3703）：
- `ironclaw_reborn_composition` 正式晋升为 Reborn 组合根
- `RebornRuntimeInput` / `RebornRuntime` 面向配置即代码（#3036）做前瞻性准备

**安全依赖更新**（#3719）：
- 修复 RustSec-2026-0104 / RUSTSEC-2026-0098 等可达性 DoS 及名称约束 CVEs

---

## 4. 社区热点

### 评论数最多的 Issues

| # | 标题 | 评论数 | 热度分析 |
|---|---|---|---|
| [#3692](https://github.com/nearai/ironclaw/issues/3692) | Reborn: add policy-gated personal identity and heartbeat prompt context | 4 | PR #3649 的后续延伸，围绕 WS-15 稳定身份文件上下文与额外身份表面的设计边界展开讨论 |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | [EPIC] Configuration-as-Code for IronClaw Reborn | 4 | 项目级重大 Epic，运营商希望声明式配置 IronClaw 而非手工编辑混合配置文件 |
| [#3616](https://github.com/nearai/ironclaw/issues/3616) | Reborn: wire production app/gateway/channel ingress to product live workflow | 4 | WS17 已证明手动组合可行，但生产路径尚未切换到 Reborn 产品实时循环 |

### 讨论主题分析

- **身份与上下文政策**：社区高度关注 Reborn 中 personal identity 的 gated 控制（#3692、#3721）
- **配置即代码**：Epic #3036 成为热点，开发者呼吁统一的 schema、diff、audit trail
- **产品级实时路径**：#3616/#3698/#3700 系列说明团队正系统性推进生产入口的 Reborn 迁移

---

## 5. Bug 与稳定性

### 报告的 Bug（按严重程度）

| # | 标题 | 严重度 | 状态 | 说明 |
|---|---|---|---|---|
| 🔴 **高** [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failed | — | 🔄 进行中 | 由 @github-actions[bot] 报告，`E2E (features)` job 失败，影响夜间构建质量门禁 |
| 🟡 **中** [#3701](https://github.com/nearai/ironclaw/issues/3701) | v0.28.2 macOS prebuilt: gateway never binds despite config + doctor reporting it enabled | — | 🆕 新开 | macOS 预构建版本 gateway 无法绑定，doctor 工具却报告已启用，存在配置/检测不一致 |

> ⚠️ **Nightly E2E 失败**需优先处理，建议追踪 CI 根因，避免回归扩散。

### 稳定性观察

- 依赖安全告警（#3719）已通过 bump 处理
- macOS 版 gateway 绑定问题需关注，可能涉及环境检测或路径配置逻辑

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| # | 标题 | 提议者 | 信号解读 |
|---|---|---|---|
| 💡 [#3036](https://github.com/nearai/ironclaw/issues/3036) | [EPIC] Configuration-as-Code for IronClaw Reborn | @ilblackdragon | 配置即代码 Epic，关联 PR #3703 已在做 Runtime 层面前瞻适配，预计纳入近期路线 |
| 💡 [#3681](https://github.com/nearai/ironclaw/pull/3681) | feat: Add first-party HTTP egress tool | @serrrfirat | 内置 `builtin.http` 工具，丰富 Reborn 能力生态 |
| 💡 [#3698](https://github.com/nearai/ironclaw/issues/3698) | Reborn: build test/dry-run product-live runtime harness | @henrypark133 | 产品实时运行时测试框架首个可交付切片 |

### 路线图信号

- **产品实时路径**（#3616 → #3698 → #3700 → #3699）：逐步将 Web/CLI/Telegram 迁移到 Reborn 工作流
- **工具调用转换**（#3620）：生产模型网关路径从纯文本完成 API 升级为支持 `FinishReason::ToolCalls`
- **二元 E2E 测试框架**（#3702）：对标 88 个 `tests/*.rs` 文件的 Rust 集成测试体系

---

## 7. 用户反馈摘要

从 Issues 评论中提炼：

**✅ 已解决痛点**
- 日志下载调试工具需求 → #3534 已关闭，社区诉求得到满足

**🔍 持续关注场景**
- 运营商需要声明式配置能力（.env / workspace docs / settings JSON / extension installs / runtime flags 混合手工编辑模式不可扩展）
- WS17 证明手动组合产品可行，但生产入口切换未完成，社区期待完整路径

**⚠️ 用户痛点**
- macOS 用户遭遇 gateway 配置与实际行为不一致
- 当前缺乏 schema/diff/audit trail，配置变更无法追溯

---

## 8. 待处理积压

### 需要维护者关注的项目

| # | 标题 | 积压时间 | 说明 |
|---|---|---|---|
| ⏳ [#3026](https://github.com/nearai/ironclaw/issues/3026) | Reborn cutover blocker: add config-driven production composition root | 自 2026-04-28 | 配置驱动的生产组合根是 Reborn 切换阻塞项，关联 #2987 |
| ⏳ [#3036](https://github.com/nearai/ironclaw/issues/3036) | [EPIC] Configuration-as-Code | 自 2026-04-28 | 持续活跃（5 月 16 日更新），Epic 粒度大，需分阶段追踪 |
| ⚠️ [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failed | 自 2026-05-10 | 自动报告，6 天未解决，CI 质量风险 |
| 🆕 [#3701](https://github.com/nearai/ironclaw/issues/3701) | macOS gateway binding issue | 自 2026-05-16 | 需确认根因，是否影响 v0.28.2 稳定性 |

### 长期未响应风险

- `Nightly E2E` 失败已累计 6 天，建议优先定位失败 job（`E2E (features)`）根因
- Epic #3036 涉及大规模架构变更，需拆解为可验收的里程碑

---

## 📊 数据摘要

| 指标 | 数值 |
|---|---|
| Issues 总计 | 15 |
| PR 总计 | 39 |
| 新版本发布 | 0 |
| 待合并 PR | 24 |
| 已合并/关闭 PR | 15 |
| 活跃 Reborn 相关 Issue | 11 |
| 安全修复 PR | 1 (#3719) |
| 阻塞性 Issue | 1 (#3026) |

---

> 本报告基于 2026-05-17 GitHub 数据生成。如需进一步分析特定模块或贡献者活动，请告知。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-05-17

---

## 📊 今日速览

LobsterAI 项目今日活跃度**极高**，共处理 **22 条 PR 更新**。核心事件是 **Release/2026.5.15** 分支合并至 main（版本 2026.5.16），集成了产品修复、Keyfrom 构建、Artifacts UX、IM onboarding 以及 Cowork/OpenClaw 相关功能。开发团队在一天内合并了 **10 条 PR**，另有 **12 条待合并**，体现了高效的迭代节奏。依赖维护方面，Dependabot 推进了 Vite 从 5.4.21 升级至 8.0.13 的安全更新。社区方面有 1 条新 Issue 报告 AI 引擎连接问题，需关注。

---

## 🏷️ 版本发布

**今日无独立新版本发布**，但通过 PR #1998 完成了一个重要里程碑：

**PR #1998: Release/2026.5.15 → main (版本 2026.5.16)**  
- 来源：[github.com/netease-youdao/LobsterAI/pull/1998](https://github.com/netease-youdao/LobsterAI/pull/1998)  
- 合并时间：2026-05-16  
- 更新摘要：  
  - **Artifacts**: 右侧预览支持多选/全选  
  - **Keyfrom/Channel**: 构建和归属工作  
  - **IM**: onboarding 流程优化  
  - **Cowork/OpenClaw**: 相关功能迭代  
- 建议：建议用户更新至 **2026.5.16** 以获取最新功能与修复

---

## 📈 项目进展

今日共 **合并/关闭 10 条 PR**，项目整体持续快速推进：

| PR | 状态 | 领域 | 摘要 |
|---|---|---|---|
| [#1998](https://github.com/netease-youdao/LobsterAI/pull/1998) | **MERGED** | 多模块 | Release/2026.5.15 合并至 main，版本 2026.5.16 |
| [#1997](https://github.com/netease-youdao/LobsterAI/pull/1997) | **MERGED** | renderer | 更新 providers 默认模型 |
| [#1996](https://github.com/netease-youdao/LobsterAI/pull/1996) | **MERGED** | renderer, cowork | Dream UI 优化 |
| [#1995](https://github.com/netease-youdao/LobsterAI/pull/1995) | **MERGED** | renderer, main, openclaw, cowork | Dream UI 优化 |
| [#1994](https://github.com/netease-youdao/LobsterAI/pull/1994) | **MERGED** | 多模块 | 修复 mimo 模型 reasoning content 问题 |
| [#1992](https://github.com/netease-youdao/LobsterAI/pull/1992) | **MERGED** | renderer, docs | 修复模型列表中默认模型选项重复显示的 Bug |
| [#1999](https://github.com/netease-youdao/LobsterAI/pull/1999) | **MERGED** | docs | 修复多轮会话中 mimo 模型 reasoning_content 返回问题 |
| [#813](https://github.com/netease-youdao/LobsterAI/pull/813) | **CLOSED** | config | 小米渠道新增 MiMo V2 Pro 和 MiMo V2 Omni 模型 |

**主要推进方向**：
- 🌟 **UI/UX 优化**：Dream UI 多轮优化，Artifacts 多选功能
- 🔧 **模型支持**：MiMo V2 新模型上线，默认模型配置更新
- 🐛 **Bug 修复**：mimo 模型 reasoning content 问题、模型列表显示问题

---

## 🔥 社区热点

**PR #1766: Vite 依赖升级**  
- 来源：[github.com/netease-youdao/LobsterAI/pull/1766](https://github.com/netease-youdao/LobsterAI/pull/1766)  
- 作者：@dependabot[bot]  
- 热度：高（待合并）  
- 摘要：将 Vite 从 **5.4.21** 升级至 **8.0.13**，包含多版本 release notes  
- 分析：依赖安全更新，获得社区重点关注，预计即将合并

---

## 🐛 Bug 与稳定性

| Issue/PR | 严重度 | 状态 | 摘要 |
|---|---|---|---|
| [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) | 🔴 中高 | **OPEN** | AI 引擎连接丢失问题 |

**详情**：  
用户 @Shun-Calvin 报告桌面应用持续出现 "AI engine connection lost. Please retry." 错误，但使用 IM Bot 时连接稳定。已收到 1 条评论讨论，可能与渲染进程网络配置有关。**建议优先调查渲染层与 IM Bot 连接逻辑差异。**

---

## ✨ 功能请求与路线图信号

根据今日 PR 活动，以下方向可能进入下一版本规划：

| 功能 | 来源 | 分析 |
|---|---|---|
| 会话导出能力 | [#789](https://github.com/netease-youdao/LobsterAI/pull/789) | 长期未合并，新增 Markdown/PDF 导出入口与弹窗，用户需求明确 |
| 禁用技能生效 | [#793](https://github.com/netease-youdao/LobsterAI/pull/793) | P0 bug 修复，Gateway 层需重启以应用配置变更 |
| API 密钥导出安全 | [#790](https://github.com/netease-youdao/LobsterAI/pull/790) | 安全修复，移除硬编码密码，改为用户输入 |
| URL 白名单安全 | [#794](https://github.com/netease-youdao/LobsterAI/pull/794) | shell.openExternal 安全加固 |

---

## 💬 用户反馈摘要

**Issue #1993 核心痛点**：  
> "AI engine connection lost. Please retry. If the issue persists, try restarting the app. I am using the desktop application directly, and it always show AI engine connection lost. If I use IM Bot, the connection is stable."

- **使用场景**：桌面端用户直接使用 AI 引擎
- **痛点**：连接不稳定，无法正常使用
- **对比**：IM Bot 环境下连接稳定，说明问题可能出在渲染进程网络配置
- **影响**：桌面端用户体验显著下降

---

## ⏳ 待处理积压

以下 **12 条 PR** 处于待合并/活跃状态，其中部分长期未推进（stale）：

### 高优先级待合并
| PR | 年龄 | 摘要 |
|---|---|---|
| [#1766](https://github.com/netease-youdao/LobsterAI/pull/1766) | ~27天 | chore(deps-dev): Vite 升级 5.4.21 → 8.0.13 |

### 长期积压（stale）需处理
| PR | 创建时间 | 摘要 |
|---|---|---|
| [#789](https://github.com/netease-youdao/LobsterAI/pull/789) | 2026-03-25 | feat(cowork): 新增会话导出能力 |
| [#790](https://github.com/netease-youdao/LobsterAI/pull/790) | 2026-03-25 | fix(settings): 移除硬编码导出密码 |
| [#793](https://github.com/netease-youdao/LobsterAI/pull/793) | 2026-03-25 | fix(skills): 防止禁用技能被调用 |
| [#794](https://github.com/netease-youdao/LobsterAI/pull/794) | 2026-03-25 | fix(security): URL scheme 白名单 |
| [#798](https://github.com/netease-youdao/LobsterAI/pull/798) | 2026-03-25 | fix(openclaw): 阿里百炼 API 密钥 401 |
| [#799](https://github.com/netease-youdao/LobsterAI/pull/799) | 2026-03-25 | fix(renderer): continue 会话时立即设置 streaming |
| [#800](https://github.com/netease-youdao/LobsterAI/pull/800) | 2026-03-25 | feat: 添加测试用例 |
| [#801](https://github.com/netease-youdao/LobsterAI/pull/801) | 2026-03-25 | Skills 禁用开关不生效 |
| [#803](https://github.com/netease-youdao/LobsterAI/pull/803) | 2026-03-25 | refactor(cowork): 删除重复 updateSession |
| [#804](https://github.com/netease-youdao/LobsterAI/pull/804) | 2026-03-25 | fix(cowork): 添加重复提交保护 |
| [#805](https://github.com/netease-youdao/LobsterAI/pull/805) | 2026-03-25 | fix(cowork): 删除会话时 abort 后台 run |

**建议**：维护团队对超过 50 天的 stale PR 进行评估，对无需合并的 PR 进行关闭，释放仓库清理压力。

---

## 📋 健康度评估

| 指标 | 状态 | 说明 |
|---|---|---|
| PR 处理速度 | ✅ 优秀 | 24小时内合并10条，待合并12条 |
| 版本迭代 | ✅ 正常 | 2026.5.16 已合并发布 |
| Issue 响应 | ⚠️ 需关注 | 1条新Issue待定位 |
| 技术债务 | ⚠️ 待清理 | 11条stale PR长期积压 |
| 依赖更新 | ✅ 进行中 | Dependabot 推进 Vite 升级 |

**综合评分：8/10** - 项目活跃度高，迭代节奏良好，建议关注积压 PR 清理与 Issue #1993 定位。

---

*数据截至：2026-05-17 | 来源：github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期：** 2026-05-17  
**数据来源：** GitHub.com/molts-org/molts

---

## 1. 今日速览

过去 24 小时内，Moltis 项目保持平稳活跃状态。共产生 1 条 Issue 和 3 条 Pull Request，其中 1 个 PR（`#1003` 智能体系统构建器技能）已合并关闭，另外 2 个 PR（远程访问增强和 Codex 推理粒度控制）处于待合并状态，整体开发推进节奏良好。无新版本发布，亦无 Bug 或崩溃报告提交，项目核心功能保持稳定。今日社区主要聚焦于 **智能体并发能力** 与 **远程连接基础设施** 两个方向。

---

## 2. 版本发布

> **本日期区间无新版本发布。**

---

## 3. 项目进展

### ✅ 已合并/关闭 PR

| # | 标题 | 作者 | 状态 |
|---|------|------|------|
| [#1003](https://github.com/molts-org/molts/pull/1003) | feat(skills): add agent system builder skill | @kyungw00k | ✅ 已合并 |

**推进内容：**
- 新增捆绑式 `build-agent-systems` 技能，用于设计多用户、多频道、分布式智能体系统
- 沉淀了 Moltis 衍生智能体模式，提供了智能体系统蓝图模板和技能编写模板
- 更新了 README 功能列表，进一步完善了项目的入门指引体系

> 该 PR 的合并标志着 Moltis 在**智能体系统工程化**方面迈出了实质性一步，开发者可借助新技能快速搭建复杂多智能体架构。

### ⏳ 待合并 PR

| # | 标题 | 作者 | 状态 |
|---|------|------|------|
| [#1002](https://github.com/molts-org/molts/pull/1002) | feat(remote-access): add NetBird and Cloudflare Tunnel support | @penso | ⏳ 待合并 |
| [#1005](https://github.com/molts-org/molts/pull/1005) | feat(openai-codex): add reasoning effort support | @PeterDaveHello | ⏳ 待合并 |

**预期影响：**
- `#1002` — 将为项目引入 NetBird 私有 mesh 网络和 Cloudflare Tunnel 两种远程访问方案，显著提升部署灵活性
- `#1005` — 为 Codex provider 添加 `reasoning_effort` 参数控制，使开发者能够精细调节 GPT-5 Codex 的推理深度

---

## 4. 社区热点

### 💬 今日最受关注的讨论

| # | 类型 | 标题 | 作者 | 评论数 | 👍 |
|---|------|------|------|--------|-----|
| [#1004](https://github.com/molts-org/molts/issues/1004) | Issue | [Feature]: Non-blocking spawn_agent — parent session stays responsive during long sub-agent runs | @dmitriikeler | 0 | 0 |
| [#1002](https://github.com/molts-org/molts/pull/1002) | PR | feat(remote-access): add NetBird and Cloudflare Tunnel support | @penso | — | 0 |
| [#1005](https://github.com/molts-org/molts/pull/1005) | PR | feat(openai-codex): add reasoning effort support | @PeterDaveHello | — | 0 |

**分析：** Issue #1004 提出的是**父智能体并发阻塞**问题——当前 `spawn_agent` 在子智能体长时间运行时会导致父智能体 LLM 轮次完全阻塞。这是一个涉及核心调度机制的功能请求，社区虽暂无评论反馈，但需求本身指向了生产环境中常见的高并发场景。若该功能落地，将大幅提升 Moltis 在长时任务处理上的可用性。

---

## 5. Bug 与稳定性

> **本日期区间无 Bug 或崩溃报告提交。** 项目基础功能稳定，未见回归问题。

---

## 6. 功能请求与路线图信号

### 🎯 核心功能请求

**[#1004](https://github.com/molts-org/molts/issues/1004)** — **Non-blocking spawn_agent**
- **请求者：** @dmitriikeler
- **诉求：** 将 `spawn_agent` 改造为非阻塞模式，使父智能体在子智能体执行期间保持响应
- **影响领域：** 智能体并发调度
- **与现有 PR 关联性：** 该功能请求与 `#1003`（智能体系统构建器技能）形成互补——系统构建器需要能够并发调度多个子智能体
- **纳入路线图可能性：** 🟡 中等。需求清晰且符合工程实践，预计会在审查后出现对应的实现 PR

---

## 7. 用户反馈摘要

> **注：** 今日提交的所有 Issue 和 PR 均暂无社区评论（`评论: 0` 或 `undefined`），无法提取真实的用户痛点与使用场景。建议维护者在后续推进 `#1002`、`#1005` 待合并 PR 时主动征集社区意见，同时跟进 `#1004` 功能请求的讨论。

---

## 8. 待处理积压

| # | 类型 | 标题 | 作者 | 创建日期 | 等待时长 | 备注 |
|---|------|------|------|----------|----------|------|
| [#1004](https://github.com/molts-org/molts/issues/1004) | Issue | Non-blocking spawn_agent | @dmitriikeler | 2026-05-16 | ~1 天 | 0 条评论，建议维护者评估可行性并与提议者互动 |

> ⚠️ **积压提醒：** Issue #1004 虽仅等待 1 天，但其核心涉及并发调度架构调整，属于高影响力功能变更。建议维护者优先评估并给出技术方向性回复，以保持社区信任度。

---

## 📊 关键指标一览（2026-05-17）

| 指标 | 数值 | 健康度评估 |
|------|------|-----------|
| 新增 Issue | 1 | 🟢 正常 |
| 新增 PR | 3 | 🟢 活跃 |
| PR 合并率 | 33%（1/3） | 🟢 良好 |
| Bug 报告 | 0 | 🟢 稳定 |
| 待处理高优先级 Issue | 1 | 🟡 需关注 |

---

*报告生成时间：2026-05-17 | 数据覆盖：2026-05-16 00:00 ~ 2026-05-17 00:00 (UTC)*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**报告日期：** 2026-05-17  
**数据来源：** github.com/agentscope-ai/QwenPaw

---

## 1. 今日速览

QwenPaw 项目今日保持高度活跃，共产生 **28 项更新**（14 Issues + 14 PRs）。社区参与度较昨日显著提升：Issue 活跃度增长约 40%，PR 提交量与昨日持平。今日的核心议题集中在 **稳定性修复**（Context compaction 错误、Rate-Limit 导致消息队列清空）和 **用户体验增强**（审批命令、Telegram/QQ 交互按钮）。4 个 PR 已成功合并，另有 10 个 PR 处于待合并状态，项目整体向前推进稳健。

---

## 2. 版本发布

**今日无新版本发布**（Latest Release: 无相关记录）

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR（4 项）

| PR 编号 | 标题 | 状态 | 贡献者 |
|---------|------|------|--------|
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) | refactor(wechat): centralize legacy weixin → wechat data migrations on workspace startup | ✅ 已合并 | @celestialhorse51D |
| [#1669](https://github.com/agentscope-ai/QwenPaw/pull/1669) | fix(Workspace): handle path separators correctly in workspace path | ✅ 已合并 | @saltapp |
| [#1661](https://github.com/agentscope-ai/QwenPaw/pull/1661) | fix(workspace): fix memory files not being fetched by agent ID | ✅ 已合并 | @saltapp |
| [#3246](https://github.com/agentscope-ai/QwenPaw/pull/3246) | feat(qq): add configurable instant acknowledgment message | ✅ 已合并 | @daliu858 |

**重点 PR 摘要：**

- **#3605**（WeChat 数据迁移重构）：将遗留的 weixin → wechat 数据迁移从惰性模式迁移为 workspace 启动时的统一 eager 步骤，提升迁移一致性和可靠性。
- **#1669**（Workspace 路径分隔符修复）：解决 Windows 等系统下 workspace 路径显示 "loading..." 无限加载的问题，修正了路径分隔符检测逻辑。
- **#1661**（Memory 文件按 Agent ID 获取）：修复 daily memory 文件无法按特定 agent/bot 文件夹获取的 bug（之前使用全局 memory API）。
- **#3246**（QQ 即时确认消息）：为 QQ 频道添加可配置的即时确认消息功能（因 QQ API 不支持 typing indicator）。

### 🔄 待合并的重要 PR（10 项）

| PR 编号 | 标题 | 状态 | 贡献者 |
|---------|------|------|--------|
| [#4446](https://github.com/agentscope-ai/QwenPaw/pull/4446) | fix: keep runner package imports lightweight | 🔄 Open | @suntp |
| [#4444](https://github.com/agentscope-ai/QwenPaw/pull/4444) | feat(providers): add xAI OAuth + Grok provider + image/video tool plugins | 🔄 Open | @joe2643 |
| [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) | feat: add lightweight goal mode | 🔄 Open | @suntp |
| [#4303](https://github.com/agentscope-ai/QwenPaw/pull/4303) | fix(cron): isolate non-shared runs | 🔄 Open | @aqilaziz |
| [#4084](https://github.com/agentscope-ai/QwenPaw/pull/4084) | fix(crons): eliminate concurrency state leaks in CronManager | 🔄 Open | @celestialhorse51D |
| [#4223](https://github.com/agentscope-ai/QwenPaw/pull/4223) | fix(cron): implement soft delete to prevent zombie session resurrection | 🔄 Open | @CA-mambo |
| [#4438](https://github.com/agentscope-ai/QwenPaw/pull/4438) | feat(browser): add url and title to tabs action response | 🔄 Open | @weixizi |
| [#4434](https://github.com/agentscope-ai/QwenPaw/pull/4434) | feat(cron): add option to clear context before running agent tasks | 🔄 Open | @weixizi |
| [#4173](https://github.com/agentscope-ai/QwenPaw/pull/4173) | fix(shell): Unix 平台下用临时文件重定向避免 execute_shell_command 超时挂起 | 🔄 Open | @Lin928rain |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | feat(cli-desktop): The system tray startup item function (win32 only) | 🔄 Open | @wfeng007 |

**值得关注的 PR：**
- **#4444**（xAI OAuth + Grok 集成）：引入 xAI OAuth 认证流程和 Grok 模型提供商，支持 image/video 工具插件，是重要的第三方集成扩展。
- **#4446**（Runner 包轻量化导入）：通过 lazy `__getattr__` 机制解耦导入依赖，改善部分安装环境下的开发/测试体验。
- **#4173**（Shell 命令超时修复）：修复 Unix 平台下后台进程导致 `execute_shell_command` 挂起超时的问题，使用临时文件重定向替代 pipe。

---

## 4. 社区热点

### 🔥 今日讨论最活跃的 Issues

| Issue 编号 | 类型 | 标题 | 评论数 | 点赞数 |
|-----------|------|------|--------|--------|
| [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) | 🔴 Bug | 聊天窗口聊天无回应 | 2 | 1 |
| [#4452](https://github.com/agentscope-ai/QwenPaw/issues/4452) | 🟢 Test | 工具调用测试 - 不应合并 | 2 | 0 |
| [#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) | 🔴 Bug | Context compaction 经常失败 | 2 | 0 |
| [#4450](https://github.com/agentscope-ai/QwenPaw/issues/4450) | 🟢 Feature | 简化审批命令：短别名 + session/always 作用域 | 1 | 0 |
| [#4451](https://github.com/agentscope-ai/QwenPaw/issues/4451) | 🟢 Feature | Telegram/QQ 频道交互审批按钮 | 1 | 0 |

**热点分析：**

1. **#4453（聊天窗口无回应）** 是今日最受关注的 Issue。用户报告在多个模型上均出现"发送消息后一直是三个点在跳动"的卡死问题，后端日志显示 `wechat channel stopped RuntimeError: Event loop stopped before Future completed`。这表明可能是异步事件循环管理的潜在问题，影响用户体验。

2. **#4448 / #4447（Context compaction 错误）** 是重复报告的 Bug，同一用户在同一时间报告了两次，凸显此问题的频繁性和用户困扰程度。错误 `invalid format (missing ## header)` 表明上下文压缩功能的格式校验逻辑存在缺陷。

3. **#4450 / #4451** 是由 @xielevi 提出的连续功能增强提案，旨在完善工具审批流程的用户体验。这些提案与 WebUI 已有的审批按钮（#3436）形成呼应，显示出社区对统一跨渠道交互体验的期待。

---

## 5. Bug 与稳定性

### 🔴 高严重度

| Issue 编号 | Bug 描述 | 组件 | 是否有 Fix PR |
|-----------|---------|------|--------------|
| [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) | 聊天窗口无回应，Event loop stopped before Future completed | WeChat Channel | ❌ 无 |
| [#4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) | Model 429 Rate-Limit → zero-downtime reload 永久清空消息队列，Agent "冻结" | Core / Backend | ❌ 无 |

**#4449 深度分析：**
此 bug 涉及 `MODEL_EXECUTION_FAILED` → `multi_agent_manager.zero_downtime_reload` 路径下的消息队列清理逻辑。当模型遭遇 TPM 限流（HTTP 429）连续失败时，`UnifiedQueueManager.stop()` 会销毁旧运行时实例并清空所有 pending 消息，导致新实例启动后无任何上下文，用户体验即"永远在等待，无回复"。由于队列被清空，切换模型也无法恢复。

### 🟡 中等严重度

| Issue 编号 | Bug 描述 | 组件 | 是否有 Fix PR |
|-----------|---------|------|--------------|
| [#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) | Context compaction 经常失败: "missing ## header" | Core / Backend | ❌ 无 |
| [#4447](https://github.com/agentscope-ai/QwenPaw/issues/4447) | 同上（重复报告） | Core / Backend | ❌ 无 |

**注：** #4448 和 #4447 为同一用户重复报告，可能是双开或强调问题严重性。Issue #4445 提出的解耦 runner 包导入改进可能间接缓解部分导入相关问题。

---

## 6. 功能请求与路线图信号

### 📋 用户提出的新功能需求

| Issue 编号 | 功能描述 | 涉及组件 | 相关 PR |
|-----------|---------|----------|---------|
| [#4450](https://github.com/agentscope-ai/QwenPaw/issues/4450) | 简化审批命令：增加 /session、/always、/reset 命令及作用域支持 | Console / Core | — |
| [#4451](https://github.com/agentscope-ai/QwenPaw/issues/4451) | Telegram/QQ 频道添加交互式审批按钮 | Telegram/QQ Channel | — |
| [#4444](https://github.com/agentscope-ai/QwenPaw/pull/4444) | xAI OAuth + Grok provider + image/video 工具（**已有 PR**） | Providers | ✅ #4444 |
| [#4442](https://github.com/agentscope-ai/QwenPaw/issues/4442) | 轻量级 /goal 模式用于会话目标 | Core / CLI | — |
| [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) | 添加轻量级 goal mode（**已有 PR**） | Core / CLI | ✅ #4438 |
| [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) | 一键配置 opencode go | Console / Config | — |
| [#4439](https://github.com/agentscope-ai/QwenPaw/issues/4439) | 插件形式集成外部记忆系统（如 hindsight） | Core / Skills | — |
| [#4437](https://github.com/agentscope-ai/QwenPaw/issues/4437) | 支持删除会话中的一条或多条对话 | Console | — |
| [#4435](https://github.com/agentscope-ai/QwenPaw/issues/4435) | 显示对话轮数计数帮助管理上下文长度 | Console | — |
| [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | 支持将部分对话转移至新会话（会话拆分） | Console | — |

**路线图信号分析：**

1. **xAI/Grok 集成**（#4444）：已有 PR 实现端到端 Grok 集成，包括 OAuth 认证流程。这是项目扩展模型提供商生态的重要一步，预计近期可能合并。

2. **轻量级 /goal 模式**（#4442/#4443）：已有 PR，与现有的 /mission 命令形成互补，定位于轻量级会话目标管理。

3. **审批体验统一**（#4450/#4451）：社区对跨渠道审批体验一致性有明确需求，结合 WebUI 已有按钮（#3436），Telegram Inline Keyboard 和 QQ 卡片消息的审批按钮可能成为下一版本的重点。

4. **上下文管理增强**（#4435/#4436/#4437）：三个 Issue 均聚焦于会话上下文管理，显示出用户对长对话 token 成本和会话组织的关注。这些功能的组合将显著提升用户体验。

---

## 7. 用户反馈摘要

### 💬 从 Issues 评论中提炼的关键反馈

**痛点 1：消息丢失与 Agent "冻结"（#4449）**
- **场景：** 当模型遭遇限流时，用户消息不会退避重试，而是通过 zero-downtime reload 路径销毁旧运行时实例，导致 pending 消息全部丢失。
- **用户困扰：** 新实例启动后无上下文，用户"永远在等待，无回复"，且切换模型也无法恢复。
- **期望：** 优雅的错误处理和消息保留机制。

**痛点 2：上下文压缩不可靠（#4448/#4447）**
- **场景：** 长对话中 Context compaction 功能频繁失败，错误信息 `invalid format (missing ## header)`。
- **用户困扰：** 无法正常使用上下文压缩功能，影响长对话场景的可用性。
- **影响版本：** v1.1.7。

**痛点 3：聊天无回应（#4453）**
- **场景：** 聊天窗口发送消息后持续显示 loading 状态（三个点跳动），重启 Docker 和回退版本均无法解决。
- **用户尝试：** 切换模型、重启 Docker、回退版本均无效。
- **错误日志：** `wechat channel stopped RuntimeError: Event loop stopped before Future completed`。

**功能需求：审批命令可见性（#4450）**
- **用户发现：** `/approve` 和 `/deny` 短命令已在 v1.1.7 实现，但帮助文本未提及，用户不知道可以使用这些命令。
- **期望：** 完善帮助文本，增加 `/session`、`/always`、`/reset` 命令及作用域提示。

**功能需求：第三方记忆系统集成（#4439）**
- **用户期待：** 以插件形式集成外部记忆系统（如 hindsight），提升 Agent 的长期记忆能力。
- **场景：** 需要更高级的记忆管理功能的用户。

**功能需求：模型配置简化（#4441）**
- **用户期待：** 一键配置 opencode go 模型，降低配置门槛。

---

## 8. 待处理积压

### ⚠️ 长期未响应或需要关注的问题

| Issue 编号 | 类型 | 标题 | 创建时间 | 等待时长 | 状态 |
|-----------|------|------|----------|----------|------|
| [#4435](https://github.com/agentscope-ai/QwenPaw/issues/4435) | Feature | 显示对话轮数计数 | 2026-05-16 | 1 天 | Open |
| [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | Feature | 支持将部分对话转移至新会话 | 2026-05-16 | 1 天 | Open |
| [#4437](https://github.com/agentscope-ai/QwenPaw/issues/4437) | Feature | 支持删除会话中的一条或多条对话 | 2026-05-16 | 1 天 | Open |
| [#4439](https://github.com/agentscope-ai/QwenPaw/issues/4439) | Question | 插件形式集成外部记忆系统 | 2026-05-16 | 1 天 | Open |
| [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) | Enhancement | 一键配置 opencode go | 2026-05-16 | 1 天 | Open |
| [#4442](https://github.com/agentscope-ai/QwenPaw/issues/4442) | Feature | 轻量级 /goal mode | 2026-05-16 | 1 天 | Open |

**积压分析：**

今日的 13 个 Open Issues 均创建于 2026-05-16，距今约 1 天，尚处于新鲜期，建议维护者在接下来 24-48 小时内进行分类和初步响应。

**优先级建议：**

1. **🔴 高优先级：** #4449（消息队列清空）和 #4453（聊天无回应）均为影响用户基本使用的严重 Bug，应优先调查和定位。
2. **🟡 中优先级：** #4448/#4447（Context compaction 错误）影响长对话场景，需修复格式校验逻辑。
3. **🟢 常规优先级：** 各类 Feature Request 可按路线图规划逐步实现。

**PR 积压提醒：**
- 6 个功能增强 PR 处于 Open 状态，建议按依赖关系和功能完整性逐步 review 和合并。

---

## 📊 数据总览

| 类别 | 数量

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>librefang</strong> — <a href="https://github.com/librefang/librefang">librefang/librefang</a></summary>

# 📊 librefang 项目动态日报 — 2026-05-17

---

## 1. 今日速览

过去 24 小时，librefang 社区保持高度活跃：共处理 **100 条 GitHub 事务**（Issues + PRs 各 50 条），其中 **18 个 PR 待合并**、**27 个 Issues 保持开放**，但 **未产出新版本**。今日最显著特征是**安全类 bug 集中披露与修复**：3 个 critical 级别安全漏洞（内存键冲突、OIDC sub 碰撞、MCP SSRF 检查不充分）已合并 fix PR；另有 4 个 high 级别 bug 正在修复中。同时出现了两个有价值的 enhancement 提案（人机交互工作流、按代理渠道白名单），有望成为下一版本亮点功能。

---

## 2. 版本发布

**无新版本发布。** 最新 release 信息为空。

---

## 3. 项目进展

### 3.1 已合并/关闭的重要 PR（11 条）

| PR | 标题 | 状态 | 领域 | 说明 |
|----|------|------|------|------|
| [#5170](https://github.com/librefang/librefang/pull/5170) | fix(api,dashboard/workflows): bind named params at run time | ✅ CLOSED | API/Dashboard | **修复参数绑定 bug**：解决 workflow 模板中 `{{challenge}}` 占位符无法在运行时解析的问题，dashboard 参数表单终于能正确驱动工作流执行 |
| [#5157](https://github.com/librefang/librefang/pull/5157) | fix(oauth): require non-empty sub claim on IdTokenClaims (#5128) | ✅ CLOSED | OAuth/Security | **修复 OIDC session 混淆漏洞**：JWT 缺 `sub` 字段时默认空字符串，导致 TOKEN_STORE 键冲突、用户 session 串台 |
| [#5156](https://github.com/librefang/librefang/pull/5156) | fix(mcp): replace SSRF substring stub with parsed-URL allowlist | ✅ CLOSED | MCP/Security | **强化 MCP SSRF 防护**：从简单 substring 匹配升级为完整 URL 解析 + 白名单机制，阻断 loopback/RFC1918/IMDS 内网访问 |
| [#5155](https://github.com/librefang/librefang/pull/5155) | fix(workflow): clamp negative age in stale-run recovery to survive NTP backstep | ✅ CLOSED | Kernel | **修复时间回跳导致的 stale run 检测失效**：NTP 校准后 `age` 可能为负数导致恢复逻辑失效 |
| [#5151](https://github.com/librefang/librefang/pull/5151) | fix(api): deny unknown fields in request DTOs to catch body typos (#5131) | ✅ CLOSED | API | **API 类型安全加固**：所有请求 DTO 添加 `#[serde(deny_unknown_fields)]`，防止 body 拼写错误被静默接受 |
| [#5116](https://github.com/librefang/librefang/pull/5116) | api/providers: PATCH default model clobbers config.toml on transient read error | ✅ CLOSED | API/Security | 修复 PATCH 操作在读文件失败时以空内容覆盖 config.toml 的破坏性行为 |
| [#5127](https://github.com/librefang/librefang/pull/5127) | cron: per-fire reqwest::Client construction churns TLS/HTTP/2 pools | ✅ CLOSED | Cron/Performance | 修复 cron 每触发一次都重建 reqwest::Client 导致 TLS/HTTP2 连接池磨损的性能问题 |
| [#5130](https://github.com/librefang/librefang/pull/5130) | config: most sections + repeated tables lack deny_unknown_fields | ✅ CLOSED | Config | 修复 config.toml 中重复表格（`[[channels.telegram]]` 等）拼写错误无法被检测的问题 |
| [#5124](https://github.com/librefang/librefang/pull/5124) | MCP: HTTP transport SSRF check is a substring stub | ✅ CLOSED | MCP/Security | 阻断通过 MCP HTTP transport 的 SSRF 内网探测 |
| [#5128](https://github.com/librefang/librefang/pull/5128) | OIDC: IdTokenClaims.sub defaults to empty string | ✅ CLOSED | Security | 修复 JWT sub 缺失导致的 session 串台问题（对应 #5128） |
| [#5131](https://github.com/librefang/librefang/pull/5131) | api: request DTOs accept unknown fields | ✅ CLOSED | API | 修复 API body 拼写错误被静默接受的问题 |

### 3.2 待合并的 PR（8 条值得关注）

| PR | 标题 | 状态 | 领域 | 说明 |
|----|------|------|------|------|
| [#5161](https://github.com/librefang/librefang/pull/5161) | fix(memory): reject peer: key prefix and colon-bearing peer_id at substrate boundary | 🔄 OPEN, has-conflicts | Memory/Security | **成对修复内存键注入漏洞**（#5119 + #5120），对 peer_id 中含冒号的场景做边界校验 |
| [#5160](https://github.com/librefang/librefang/pull/5160) | fix(cron): validate expression at insert and auto-disable on repeated fallback | 🔄 OPEN, has-conflicts | Cron | cron 表达式在插入时做预验证，无效表达式（如 2 月 30 日）直接拒绝而非静默每小时重试 |
| [#5162](https://github.com/librefang/librefang/pull/5162) | fix(triggers): unwedge cooldown on wall-clock backstep | 🔄 OPEN, ready-for-review | Triggers | 修复 wall-clock 回跳时 cooldown 计算错误导致触发器永久卡死的问题 |
| [#5163](https://github.com/librefang/librefang/pull/5163) | fix(kernel): propagate DB error from agent deletion (#5117) | 🔄 OPEN, ready-for-review | Kernel/DB | agent 删除时不再用 `let _ =` 吞掉 DB 错误，operator 终于能收到真实的 500 而非虚假的 200 |
| [#5159](https://github.com/librefang/librefang/pull/5159) | fix(mcp): block Azure IMDS alternative 192.0.0.192 in MCP SSRF helper | 🔄 OPEN, ready-for-review | MCP/Security | 补拦 Azure 遗留 IMDS 端点 `192.0.0.192`（#5156 后续） |
| [#5158](https://github.com/librefang/librefang/pull/5158) | fix(hooks): refuse to run hook when concurrency semaphore is closed | 🔄 OPEN, ready-for-review | Hooks | 修复 semaphore closed 时 `.ok()` 导致并发限制被绕过的 bug |
| [#5166](https://github.com/librefang/librefang/pull/5166) | fix(channels): non-blocking retry on Telegram bridge startup failure | 🔄 OPEN, ready-for-review | Channels/Telegram | Telegram 启动失败时 3 次重试（15s）+ 非阻塞启动，不再因为网络抖动卡死整个服务 |
| [#5167](https://github.com/librefang/librefang/pull/5167) | fix(kernel): respect per-agent fallback_models override | 🔄 OPEN, ready-for-review | LLM Drivers | 修复 `fallback_models = []` 无法真正禁用全局 fallback_providers 的配置问题 |
| [#4961](https://github.com/librefang/librefang/pull/4961) | feat(types,kernel,api): per-agent channel allowlist | 🔄 OPEN, ready-for-review | Channels | 为 AgentManifest 添加 `channels: Vec<String>` 字段，实现按代理渠道白名单控制 |
| [#4963](https://github.com/librefang/librefang/pull/4963) | feat(dashboard): agent detail tabs for Skills, MCP, Channels, Schedule | 🔄 OPEN, ready-for-review | Dashboard | 综合 agent 详情页改造：Skills/MCP/Channels/Schedule 分 tab + 显式 Save 按钮 |

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

| Issue | 标题 | 评论数 | 类型 | 链接 |
|-------|------|--------|------|------|
| #5165 | CI failure on PR #5151 | 2 | main-red | [链接](https://github.com/librefang/librefang/issues/5165) |
| #5164 | CI failure on PR #5148 | 2 | main-red | [链接](https://github.com/librefang/librefang/issues/5164) |
| #5132 | CI failure on PR #5109 | 2 | main-red | [链接](https://github.com/librefang/librefang/issues/5132) |
| #5106 | CI failure on PR #5102 | 2 | main-red | [链接](https://github.com/librefang/librefang/issues/5106) |
| #4977 | feat(workflows): human-in-the-loop steps — operator interaction via channels | 2 | enhancement | [链接](https://github.com/librefang/librefang/issues/4977) |

**分析：**
- **CI 失败持续高发**：#5165/#5164/#5132/#5106 四条 CI 报告均为 `main-red` 状态，其中 #5106 出现 **9 个失败的 jobs**（Unit 测试），说明 PR 合并过程中存在较为严重的回归风险。值得注意的是这些 CI 失败的 PR 多数是 security/bug fix 类型，高修复频率反而带来了更高的回归风险，建议维护者考虑收紧 CI 的 revert 策略。
- **Feature 提案值得追踪**：[#4977](https://github.com/librefang/librefang/issues/4977) 提出工作流中引入 human-in-the-loop 机制（操作员审批、输入、artifact 查看），结合 #4961 和 #4963 的 channel allowlist 与 dashboard 改造，三者构成"多租户操作体验升级"的路线图信号，预计在后续版本合并。

---

## 5. Bug 与稳定性

### 5.1 今日报告的 Bug（按严重程度）

**🔴 Critical（3 个）**

| # | 标题 | 领域 | 状态 | 已有 Fix PR |
|---|------|------|------|-------------|
| #5120 | memory_store accepts attacker-controlled peer: key prefix | Security/Memory | OPEN | #5161 |
| #5119 | peer_scoped_key is non-injective, causes cross-peer key collisions | Security/Memory | OPEN | #5161 |
| #5128 | OIDC IdTokenClaims.sub defaults to empty string, collides every JWT | Security/OIDC | CLOSED | #5157 ✅ |

**🟠 High（5 个）**

| # | 标题 | 领域 | 状态 | 已有 Fix PR |
|---|------|------|------|-------------|
| #5114 | Workflow recover_stale_running_runs uses wall-clock, breaks under NTP correction | Kernel | CLOSED | #5155 ✅ |
| #5117 | Kernel agent delete silently leaves DB row when remove_agent fails | Kernel/DB | OPEN | #5163 |
| #5115 | Triggers cooldown wedges all triggers on wall-clock backstep | Triggers | OPEN | #5162 |
| #5113 | Cron: invalid expression falls back to hourly retry, no validation | Cron | OPEN | #5160 |
| #4835 | Workflow run should present parameter form or auto-extract from free text | Dashboard/Kernel | CLOSED | #5170 ✅ |

**🟡 Medium/Awaiting（3 个）**

| # | 标题 | 领域 | 状态 |
|---|------|------|------|
| #5118 | Hooks HOOK_CONCURRENCY semaphore bypassed by .ok() on acquire | Hooks | OPEN | #5158 待合并 |
| #5130 | Config most sections lack deny_unknown_fields, typos silently dropped | Config | CLOSED | #5130 ✅ |
| #5127 | Cron per-fire reqwest::Client construction churns TLS/HTTP/2 pools | Cron/Performance | CLOSED | #5127 ✅ |

### 5.2 新兴 Bug（今日新建）

| # | 标题 | 严重度 | 说明 |
|---|------|--------|------|
| [#5168](https://github.com/librefang/librefang/issues/5168) | rate-limited agent_send hands enter infinite retry loop with no max attempts | 🔴 高 | agent 收到 429 后无限重试，持续消耗 API quota，可能产生 zombie session |
| [#5169](https://github.com/librefang/librefang/issues/5169) | AuxClient ignores agent fallback chain — uses bare default_model without fallback | 🔴 高 | AuxClient（compaction、auto_memorize、title generation 等场景）不使用 agent 配置的 fallback chain，直接降级到 bare default_model，导致 fallback 配置形同虚设 |

---

## 6. 功能请求与路线图信号

### 6.1 新功能提案

| Issue | 标题 | 领域 | 链接 | 分析 |
|-------|------|------|------|------|
| **#4977** | feat(workflows): human-in-the-loop steps — operator interaction via channels | Workflows/UX | [链接](https://github.com/librefang/librefang/issues/4977) | 核心诉求：工作流能在特定节点暂停并等待人工审批/输入，所有交互通过已有渠道（Telegram、email）完成。这是一个**较重的架构级提案**，涉及工作流状态机 + 渠道集成 + artifact 可视化。当前有 2 条评论，社区有讨论热度，预计需要较长的 review 周期 |
| **#4961** | feat(types,kernel,api): per-agent channel allowlist | Channels | [链接](https://github.com/librefang/librefang/pull/4961) | PR 已 open，ready-for-review 状态。为 `AgentManifest` 添加 `channels: Vec<String>` 字段，是多租户场景的基础能力 |
| **#4963** | feat(dashboard): agent detail tabs for Skills, MCP, Channels, Schedule | Dashboard | [链接](https://github.com/librefang/librefang/pull/4963) | PR 已 open，ready-for-review 状态。综合 dashboard 改造，解决了 5 个相关的 UI enhancement issues |

### 6.2 路线图信号

从今日 PR 和 Issue 分布来看，项目正在推进以下几条主线：

1. **安全加固**（本周重点）：内存键隔离、OIDC session 安全、SSRF 防护、API 类型安全 — 集中修复了一批 critical 级别的安全漏洞
2. **稳定性修复**：wall-clock 时间回跳导致的各类 subsystem（workflow/stale-run、triggers/cooldown）失效问题
3. **多租户/权限隔离**：`fallback_models = []` 按代理覆盖、per-agent channel allowlist — 面向更复杂的部署场景
4. **Dashboard 体验**：workflow 参数表单、agent 详情页分 tab 改造

---

## 7. 用户反馈摘要

从今日 Issues 评论和功能提案中提炼出的用户痛点：

| 痛点 | 来源 | 描述 |
|------|------|------|
| **工作流参数表单不可用** | #4835 | 用户从 dashboard 触发 workflow 时，UI 显示自由文本框而非结构化参数表单；输入自然语言后 agent 声称"没有 challenge"无法运行。这是 **UX 断链问题**，参数声明存在但未被利用 |
| **Telegram 断连不恢复** | #5111 | 用户报告 Telegram bridge 在网络抖动后彻底死掉，必须手动重启服务。实际部署中这是高频问题 |
| **模型 fallback 配置无效** | #5112 | 用户配置了 `fallback_models = []` 想禁用 fallback，但 global `fallback_providers` 仍被注入，导致不必要的 API 调用和 quota 消耗 |
| **agent 删了但 DB 记录还在** | #5117 | operator 执行删除操作收到成功响应，但数据库 row 仍存在，下次创建同名 agent 报错。长期积累会导致数据不一致 |
| **human-in-the-loop 缺失** | #4977 | 用户的实际工作流需要人工审批环节（如：生成报告 → 操作员审核 → 发布），但当前没有声明式机制，需要外部编排 |

---

## 8. 待处理积压

以下 Issues/PRs 长期未响应或需要维护者关注：

| # | 类型 | 标题 | 创建时间 | 状态 | 说明 |
|---|------|------|----------|------|------|
| **#4977** | Issue | feat(workflows): human

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# openfang 项目动态日报

**报告日期：** 2026-05-17

---

## 1. 今日速览

2026-05-17 期间，openfang 项目保持低活跃状态。无代码合并或版本发布，仅有 1 条新建 Issue 请求飞书通道扩展功能。项目整体处于维护性状态，建议关注 Issue #1197 中的用户需求以规划下一阶段开发方向。

---

## 2. 版本发布

**本周期无版本发布。**

---

## 3. 项目进展

**本周期无 PR 合并或关闭。**

---

## 4. 社区热点

### Issue #1197 - 关于飞书通道更多特性的支持

| 属性 | 内容 |
|------|------|
| 状态 | 🟢 OPEN |
| 作者 | @saint8708 |
| 创建时间 | 2026-05-14 |
| 最后更新 | 2026-05-16 |
| 评论数 | 0 |
| 👍 数 | 0 |

**诉求摘要：**
> 希望能够为飞书通道增加 card 格式的输出，增加文件的收发。

**分析：** 该 Issue 由用户在 3 天前发起，涉及飞书（Lark）集成能力扩展。当前 openfang 的飞书通道功能较为基础，用户期望增加：
- **Card 消息格式**：支持更丰富的卡片式消息呈现
- **文件收发能力**：支持文件的上传与接收

此需求反映了企业用户在即时通讯场景下对文件共享和富文本展示的刚需，与当前主流 IM 平台功能对齐。

🔗 **链接：** https://github.com/RightNow-AI/openfang/issues/1197

---

## 5. Bug 与稳定性

**本周期无 Bug 报告。** 项目在最近 24 小时内未收到崩溃、回归或稳定性问题的反馈。

---

## 6. 功能请求与路线图信号

### 飞书通道增强需求

基于 Issue #1197 的请求，以下功能可纳入路线图评估：

| 功能 | 优先级评估 | 说明 |
|------|------------|------|
| Card 消息输出 | 🟡 中 | 飞书平台标准消息类型，提升用户体验 |
| 文件发送 | 🟡 中 | 企业场景刚需，文档、图片等传输 |
| 文件接收 | 🟡 中 | 需配合文件存储与解析模块 |

当前无对应 PR，建议维护者评估实现复杂度后纳入迭代计划。

---

## 7. 用户反馈摘要

| 维度 | 反馈内容 |
|------|----------|
| **使用场景** | 企业级即时通讯集成，需要在 openfang 中使用飞书作为消息通道 |
| **痛点** | 当前飞书通道功能单一，不支持 card 消息格式和文件传输，限制了实际应用范围 |
| **诉求** | 扩展飞书通道能力，向主流 IM 平台功能看齐 |

**提炼：** 用户将 openfang 定位为多渠道消息中枢，对飞书集成的深度和广度有明确期待，需求合理且具备通用性。

---

## 8. 待处理积压

| Issue | 状态 | 创建时间 | 未响应时长 | 建议 |
|-------|------|----------|------------|------|
| #1197 | 🟢 OPEN | 2026-05-14 | 约 3 天 | 建议维护者评估可行性并回复用户 |

---

**日报生成时间：** 2026-05-17  
**数据来源：** GitHub (RightNow-AI/openfang)  
**健康度评级：** 🟡 维护状态（低活跃，无负面信号）

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*