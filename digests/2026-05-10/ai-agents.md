# OpenClaw 生态日报 2026-05-10

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-10 02:28 UTC

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

# OpenClaw 项目日报 | 2026-05-10

---

## 1. 今日速览

过去 24 小时，OpenClaw 社区保持极高的活跃度：共产生 **500 条 Issues 更新**（452 新开/活跃，48 关闭）和 **500 条 PR 更新**（328 待合并，172 已合并/关闭），项目整体呈高速推进态势。今日发布了 **v2026.5.9-beta.1** 正式版本，包含 Chat 命令增强与依赖刷新两项关键变更。最引人注目的是两个 size:XL 级别的 stacked PR（#80056 Policy 扩展 + #80055 Doctor 工具）正在审查中，预示着配置验证与运行时守卫机制的重大架构演进。此外，**SQLite 数据库优先运行时重构**（#78595）已获持续关注并进入第 4 天审查，多项 follow-up PR 正在配套推进。整体项目健康度评级：**优秀** 🟢，无阻塞性 P0 级 Bug，但存在若干回归问题待修。

---

## 2. 版本发布

### ✅ v2026.5.9-beta.1 已发布

**发布时间**：2026-05-10  
**发布类型**：Beta 预发布

#### 核心变更

| 类别 | 变更内容 | 关联 PR | 贡献者 |
|------|----------|---------|--------|
| **Chat 命令增强** | 新增 `/think default` 和 `/fast default` 两条命令，用于清除会话覆盖层并继承配置/Provider 默认值 | [#79385](https://github.com/openclaw/openclaw/pull/79385) | @VACInc |
| **依赖刷新** | 更新 workspace 依赖 pins 与 lockfile，包括 `@openai/codex` → `0.130.0`、`acpx` → `0.7.0`、AWS SDK → `3.1044.0` | — | — |

#### 迁移注意事项
- 本次为纯功能增量更新，**无破坏性变更**，向后兼容 v2026.5.x 系列。
- 建议在正式环境部署前，通过 `openclaw doctor` 验证依赖一致性。

---

## 3. 项目进展

### 🔀 今日合并/关闭的重要 Pull Requests

#### 已合并

| PR | 标题 | 类型 | 状态 |
|----|------|------|------|
| [#80052](https://github.com/openclaw/openclaw/pull/80052) | Fix fallback timeout response delivery | Bug Fix | ✅ Merged (Maintainer) |
| [#79966](https://github.com/openclaw/openclaw/pull/79966) | fix: restore current iOS simulator builds | Bug Fix | ✅ Merged |
| [#80009](https://github.com/openclaw/openclaw/pull/80009) | Fix fallback timeout response delivery | Bug Fix | ✅ Merged |
| [#77473](https://github.com/openclaw/openclaw/pull/77473) | fix(browser): extend existing-session status probe | Bug Fix | ✅ Merged |
| [#78620](https://github.com/openclaw/openclaw/pull/78620) | Telegram/streaming: default to off instead of partial | Config Change | ✅ Merged |
| [#79878](https://github.com/openclaw/openclaw/pull/79878) | Deduplicate repeated Telegram intake | Bug Fix | ✅ Merged |
| [#76951](https://github.com/openclaw/openclaw/pull/76951) | resolve telegram topic bottleneck | Performance | ✅ Merged |

#### 重点 PR 摘要

**1. #80052/#80009 — Fallback 超时响应交付修复**  
解决了模型降级过程中首个候选超时生命周期错误被错误标记为终止状态的问题，确保同 Run 恢复机制能正常交付答案。该修复由 @TurboTheTurtle 提交，经由 maintainer @steipete land 至维护者分支，标志 fallback 机制在边缘场景下更加健壮。

**2. #79966 — iOS Simulator 构建恢复**  
修复了 Gateway protocol errors 从 dictionary payloads 变为 generated `ErrorShape` values 后导致的 iOS simulator 构建失败问题，同时导入了共享 deep-link helper 并优化了 onboarding 和 settings 视图的 Swift 6.2 类型检查。

**3. #78595 — SQLite 数据库优先运行时重构**（持续推进）  
这是 OpenClaw 架构史上最大规模的重构之一，将项目从分散的 JSON/JSONL/SQLite 混用状态迁移至统一的类型化 SQLite 存储模型。PR 标签覆盖 40+ channels、20+ extensions，表明该重构波及全栈。今日又有 #79971（tighten SQLite runtime truth）和 #79934（transcript projections）作为配套 PR 提交。项目正稳步推进此 XL 级重构。

**4. #80056 + #80055 — Policy 与 Doctor 工具栈**（审查中）  
两个 stacked PR 由 @giodl73-repo 提交，旨在引入 `policy` 扩展和 `doctor` 健康检测体系。Policy 扩展负责 config 验证、`policy.jsonc` 生成与运行时工具调用决策；Doctor 工具则提供可复用的检测/修复/验证契约，支持 `doctor --fix` 自动修复能力。这是今日最重量级的新增功能提案。

---

## 4. 社区热点

### 🔥 今日评论数最多的 Issues/PRs

| 排名 | 编号 | 类型 | 标题 | 评论数 | 核心诉求 |
|------|------|------|------|--------|----------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) | Enhancement | Linux/Windows Clawdbot Apps | 104 | 跨平台 App 支持 |
| 2 | [#14593](https://github.com/openclaw/openclaw/issues/14593) | Bug | Skill install fails in Docker: `brew not installed` | 29 | Docker 环境兼容 |
| 3 | [#9443](https://github.com/openclaw/openclaw/issues/9443) | Enhancement | Request: Prebuilt Android APK releases | 24 | Android 预编译包 |
| 4 | [#22438](https://github.com/openclaw/openclaw/issues/22438) | Feature | Tiered bootstrap file loading for progressive context control | 16 | 上下文窗口优化 |
| 5 | [#32473](https://github.com/openclaw/openclaw/issues/32473) | Regression | control ui requires device identity (use HTTPS or localhost secure context) | 15 | 安全上下文回归 |

#### 深度分析

**① #75 Linux/Windows 桌面端 App 需求持续高涨**  
该 Issue 自 2026-01-01 创建，7 个月内积累 104 条评论和 74 个 👍，是社区最关注的功能缺口。用户 @steipete 明确指出 macOS/iOS/Android 端已有对应 App，唯 Linux/Windows 缺失，期望功能集与 macOS 版持平。这是典型的跨平台覆盖不均衡问题，建议维护者评估纳入正式路线图。

**② Docker + brew 兼容性问题集中爆发**  
#14593 反映在官方 Docker 容器内运行 `openclaw onboard` 并选择 `brew`-based skill 时直接报 `brew not installed`。这指向 Docker 镜像未预装 Homebrew 的基础设施问题，在容器化部署场景中具有普遍性。今日 #31331 也报告了 Docker sandbox workspaceAccess 问题，两者共同说明 Docker 部署路径需要系统性审视。

**③ 上下文窗口优化成为性能热点**  
#22438 提出的 bootstrap 文件分层层级加载方案（tiered loading）旨在减少大型 workspace 对 LLM 上下文窗口的浪费。#14785 则直接量化了工具 schema 的 token 开销（~3,500 tok/session），两者均指向**成本控制**这一核心痛点——随着 OpenClaw 被用于更复杂的企业场景，上下文预算管理将成为高频需求。

**④ SQLite 重构引发 Companion 开发者生态关注**  
#79902 和 #79904 连续两日提交，分别请求 SQLite transcript/seam API 和游标式读取 API。@100yenadmin 作为核心贡献者正在围绕 #78595 构建 companion-friendly 接口层，表明 SQLite 重构不仅是内部架构升级，更在积极构建外部扩展生态。

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug（按严重程度排列）

#### 🔴 高优先级（回归/Breaking）

| 编号 | 类型 | 标题 | 严重度 | 已有 Fix PR？ |
|------|------|------|--------|---------------|
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | Regression | control ui requires device identity (use HTTPS or localhost secure context) | 🔴 Regression | ❌ 无 |
| [#39038](https://github.com/openclaw/openclaw/issues/39038) | Crash | Windows 11 24H2 启动后卡在 PATH 信息，无法连接 Gateway | 🔴 Crash | ❌ 无 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | Regression | "Cannot convert undefined or null to object" in 2026.3.2 with Gemini 3.1 | 🔴 Regression | ❌ 无 |
| [#38439](https://github.com/openclaw/openclaw/issues/38439) | Regression | Webchat avatar endpoint `/avatar/{agentId}` returns 404 | 🔴 Regression | ❌ 无 |

#### 🟡 中优先级（行为异常）

| 编号 | 类型 | 标题 | 严重度 | 已有 Fix PR？ |
|------|------|------|--------|---------------|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | Bug | Docker 内 skill install 报 `brew not installed` | 🟡 | ❌ 无 |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | Bug | Docker + Sandbox 无法使用 workspaceAccess | 🟡 | ❌ 无 |
| [#79531](https://github.com/openclaw/openclaw/issues/79531) | Bug | Telegram 论坛主题会话间歇性停止响应 | 🟡 | ❌ 无 |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | Bug | sandbox workspaceAccess none 时 workspace 仍为只读 | 🟡 | ❌ 无 |
| [#39223](https://github.com/openclaw/openclaw/issues/39223) | Bug | Configure wizard 在 Gateway selection 步骤挂起 | 🟡 | ❌ 无 |

#### 🟢 已修复

| 编号 | 关联 Fix PR | 修复内容 |
|------|-------------|----------|
| [#80009](https://github.com/openclaw/openclaw/pull/80009) | ✅ Merged | Fallback 超时响应交付 |
| [#77473](https://github.com/openclaw/openclaw/pull/77473) | ✅ Merged | Chrome MCP existing-session 状态探测 |
| [#79878](https://github.com/openclaw/openclaw/pull/79878) | ✅ Merged | Telegram 重复消息去重（60秒内同 chat/topic） |

#### 📊 Bug 趋势分析

今日共报告 **4 个回归问题**，主要集中在：
1. **安全上下文/设备身份** — #32473 回归影响了 HTTPS/安全上下文配置
2. **Windows 平台** — #39038 涉及 Windows 11 24H2 系统兼容
3. **Docker 部署** — #14593 和 #31331 共同指向容器化场景的基础设施缺陷

**建议维护者重点关注**：回归类 Bug（#32473、#38327）已有较长的讨论历史（分别创建于 3 月初），需评估是否与近期 v2026.3.x 版本的特定提交相关。

---

## 6. 功能请求与路线图信号

### 🚀 高价值功能请求（结合已有 PR 判断实现可能性）

| 功能 | Issue | 可能性 | 关联 PR/进展 |
|------|-------|--------|--------------|
| **Policy 扩展 + Doctor 健康检测** | — | ⭐⭐⭐⭐⭐ 已实现 | #80056、#80055 审查中 |
| **SQLite 数据库优先运行时** | #78595 | ⭐⭐⭐⭐⭐ 已实现 | #78595 审查中，#79971 配套 |
| **Companion SQLite 接口层** | #79902、#79904 | ⭐⭐⭐⭐ 即将实现 | 配套 PR 已提交 |
| **Linux/Windows 桌面端 App** | #75 | ⭐⭐⭐ 长期需求 | 尚无对应 PR |
| **Prebuilt Android APK** | #9443 | ⭐⭐⭐ 待评估 | 尚无对应 PR |
| **Masked Secrets（API Key 掩码）** | #10659 | ⭐⭐⭐ 安全性重要 | 尚无对应 PR |
| **Bootstrap 分层加载** | #22438 | ⭐⭐ 需架构变更 | 尚无对应 PR |
| **Tool Schema Token 优化** | #14785 | ⭐⭐ 需权衡 | 尚无对应 PR |

#### 路线图信号解读

**强信号**：安全与可观测性正在成为核心优先级。#80056 Policy 扩展 + #8719 Security Profile v1.1（数据中心化安全模型）预示着下一版本将在安全性上做出重大投入。#80055 Doctor 工具则补全了运维侧的检测能力，形成"配置验证 → 运行时守卫 → 健康检测"的完整闭环。

**弱信号**：跨平台 App（#75）和 Android APK（#9443）虽社区呼声高，但无对应实现路径，可能需要外部贡献者主导。上下文优化相关需求（#22438、#14785）属性能优化范畴，优先级低于功能性重构。

---

## 7. 用户反馈摘要

### 💬 从 Issues 评论中提炼的用户声音

#### 🟢 满意点

1. **SQLite 重构获积极反馈**  
   用户 @100yenadmin 连续两日提交 Companion API 提案，表明对 #78595 重构方向的认可，认为新运行时模型为外部扩展开发提供了稳定的底层基础。

2. **Telegram 体验改进**  
   #78620（streaming 默认关闭）和 #79878（重复消息去重）均已合并，用户不再被碎片化的中间消息打扰，Telegram 频道体验显著提升。

3. **Fallback 机制健壮性提升**  
   #80009 修复了超时场景下的响应丢失问题，用户报告降级过程更加平滑，不再出现"静默失败"。

#### 🔴 痛点

1. **Docker 部署体验割裂**  
   #14593 和 #31331 的多位用户反映，在 Docker 环境中运行 OpenClaw 面临 brew 依赖缺失、workspace 挂载失败等基础设施问题，与本地安装体验差距明显。

2. **回归 Bug 影响生产**  
   #32473 和 #38327 的用户明确表示问题"worked before, now fails"，部分用户在生产环境中遭遇 Control UI 无法访问、Gemini 模型直接报错等阻塞性故障。

3. **Windows 平台被忽视**  
   #39038 报告 Windows 11 24H2 启动卡死，社区评论指出 Windows 节点程序长期缺乏自动化测试覆盖，版本兼容性依赖手动验证。

4. **秘密管理安全性不足**  
   #10659 的用户担忧 `.env` 文件中的明文 API Key 存在泄露风险，呼吁引入掩码机制防止 Prompt Injection 攻击窃取凭证。

5. **Memory/Embedding 配置缺失引导**  
   #16670 用户反映 onboarding wizard 未引导配置 Memory/Embedding，导致 `memory_search` 功能形同虚设，记忆持久化能力被削弱。

#### 🟡 中性反馈

- **多渠道集成需求多元**：Slack Block Kit（#12602）、Telegram Business（#20786）、WhatsApp Sticker（#7476）等细分场景功能请求涌现，显示 OpenClaw 的渠道覆盖已足够广泛，但细节体验仍有深耕空间。

---

## 8. 待处理积压

### ⚠️ 长期未响应的重点 Issue（>30 天无维护者回复）

| 编号 | 创建时间 | 类型 | 标题 | 优先级 | 最后更新 |
|------|----------|------|------|--------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | Enhancement | Linux/Windows Clawdbot Apps | ⭐⭐⭐⭐ | 2026-05-10 |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 2026-02-05 | Enhancement | Prebuilt Android APK releases | ⭐⭐ | 2026-05-10 |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | 2026-02-02 | Enhancement | safe/unsafe ClawdBot | ⭐⭐ | 2026-05-10 |
| [#8295](https://github.com/openclaw/openclaw/issues/8295) | 2026-02-03 | Enhancement | Add allowBots support for Telegram groups | ⭐⭐ | 2026-05-10 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 2026-02-06 | Enhancement | Masked Secrets | ⭐⭐⭐ | 2026-05

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-05-10  
**覆盖项目**：15 个开源 AI Agent 项目

---

## 1. 生态全景

2026 年中期，个人 AI 助手/自主智能体开源生态呈现**两极分化与多极演进并行的格局**。以 OpenClaw 和 Hermes Agent 为代表的头部项目保持每日 500 条以上 PR/Issue 更新的超高吞吐规模，技术路线正从单代理命令执行向 SQLite 数据库优先运行时、多模态原生化和 Policy/安全架构演进；中间梯队（NanoBot、QwenPaw、IronClaw、librefang）则聚焦状态机重构、Workflow 持久化、Gateway 平台适配等差异化能力建设；大量尾部项目（TinyClaw、EasyClaw、ZeptoClaw）处于低活跃甚至停滞状态。值得关注的是，**跨平台的容器化部署缺陷**（OpenClaw Docker 兼容问题、NanoClaw WhatsApp 挂载缺失）、**Provider 兼容性问题**（空 tool_calls 数组导致 DeepSeek/NVIDIA NIM 返回 400）和**上下文预算管理**（token 开销优化、bootstrap 分层加载）成为多个项目共同面临的工程挑战，表明行业正从功能驱动转向**可靠性与成本控制驱动**的深水区迭代。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 待合并 PR | 版本发布 | 活跃度评级 | 关键风险 |
|------|:------------:|:----------:|:---------:|:--------:|:---------:|---------|
| **OpenClaw** | 500（452 活跃） | 500（328 待合） | 高 | ✅ v2026.5.9-beta.1 | 🟢 极高 | PR 审查积压较重；4 个回归 Bug |
| **Hermes Agent** | 248（170 活跃） | 500（283 待合） | 高 | ❌ 无 | 🟢 极高 | P1 Bug（CLI fallback、Matrix 解密）；Token 开销高达 73% |
| **NanoBot** | 13（4 活跃） | 136（106 待合） | **高** | ❌ 无 | 🟢 高 | PR 积压 106 条，审查压力大 |
| **QwenPaw** | 39（20 新） | 29（8 待合） | 中 | ✅ v1.1.6 + beta.2 | 🟢 高 | WebUI 性能回归；模型配置兼容性问题 |
| **librefang** | 19（14 新） | 50（3 待合） | 低 | ❌ 无 | 🟢 高 | CI Quality 失败；DeepSeek reasoning 处理缺失 |
| **IronClaw** | 19（18 活跃） | 36（23 待合） | 高 | ✅ 0.28.0（破坏性） | 🟢 高 | DeepSeek thinking mode API 400；i18n 回归 |
| **Zeroclaw** | 50（47 活跃） | 40（31 待合） | 高 | ❌ 无（Homebrew 阻塞） | 🟡 中高 | 空 tool_calls S1 Bug；Matrix SDK 编译失败 |
| **PicoClaw** | 13（? 活跃） | 25（? 待合） | 中 | ✅ nightly build | 🟡 中高 | 安全漏洞 PR 待审（#2836）；Codex OAuth 空响应 |
| **NanoClaw** | 5（新） | 17（10 合并） | 低 | ❌ 无 | 🟡 中 | WhatsApp 附件挂载缺失；Setup 脚本数据安全风险 |
| **openfang** | 4（3 新） | 2（0 合并） | 低 | ❌ 无 | 🟡 中 | WebSocket 重连 Bug；依赖 PR 合并顺序 |
| **LobsterAI** | 0 | 13（4 待合） | 低 | ✅ 2026.5.9 | 🟢 健康 | React 19 升级回归风险；批量删除 Bug |
| **Moltis** | 0 | 3（1 待合） | 低 | ❌ 无 | 🟡 低 | PR 审查延误（Astro 文档迁移 2 天未合） |
| **ZeptoClaw** | 0 | 1（1 待合） | 低 | ❌ 无 | 🟡 低 | 外部反馈缺失 |
| **TinyClaw** | 0 | 0 | — | — | ⚫ 无活动 | — |
| **EasyClaw** | 0 | 0 | — | — | ⚫ 无活动 | — |

**数据注记**：
- 活跃度评级综合考量 Issue/PR 吞吐量、版本发布频率、Bug 修复速度和 PR 积压比。
- "极高"表示日均 PR/Issue 更新 >100 条；"高"表示 20–100 条；"中"表示 5–20 条；"低"表示 <5 条；"无活动"表示零更新。
- OpenClaw 与 Hermes Agent 的 "500 条 PR/Issue 更新" 可能包含大规模自动化脚本或 CI 触发的状态变更，不代表纯人工审查负担。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模领先，审查瓶颈明显

OpenClaw 以 **500 条 Issue/PR 更新/24h** 与 Hermes Agent 并列生态第一，日均 172 条 PR 合并/关闭的速度在绝对值上领先所有项目。然而，328 条待合并 PR 的积压规模（对应 48 条 Issue 关闭）表明其审查吞吐已成为瓶颈——相比之下，QwenPaw（21 合并/8 待合，合并率 72%）和 LobsterAI（9/4，合并率 69%）的 PR 处理效率反而更健康。

### 3.2 技术路线的独特性

| 维度 | OpenClaw | 典型竞品 |
|------|---------|---------|
| **运行时模型** | SQLite 数据库优先（#78595），统一类型化存储 | Hermes（内存/Holographic RRF 检索），IronClaw（Reborn 多租户架构） |
| **配置验证** | Policy 扩展 + Doctor 健康检测（#80056/#80055）形成完整闭环 | Zeroclaw（分散配置），NanoBot（集中化 AgentLoop） |
| **工具调用** | 依赖 OpenAI Codex 生态（@openai/codex 0.130.0） | PicoClaw/ZeroClaw 自建 provider 抽象层 |
| **平台覆盖** | macOS/iOS/Android 桌面端成熟，Linux/Windows 缺失 | QwenPaw（Tauri 2.x 桌面化），PicoClaw（多 provider 覆盖） |
| **安全架构** | Policy + Doctor 安全验证体系，Security Profile v1.1 | librefang（capability-aware FallbackChain），openfang（per-agent file_policy） |

OpenClaw 是生态中**最早系统性构建配置验证与运行时守卫闭环**的项目，Policy 扩展与 Doctor 工具的组合（当前 #80056/#80055 审查中）代表了"零配置错误"的生产部署理念，相比之下多数竞品仍依赖运行时错误反馈。

### 3.3 社区规模的差异化

OpenClaw 的 Issue #75（Linux/Windows 桌面端）在 7 个月内积累 104 条评论和 74 个 👍，是所有 15 个项目中**单一功能请求社区参与度最高**的条目，凸显其用户基数与跨平台需求张力。与之对比，Zeroclaw 的 Discord 频道白名单（#6378，5 评论）和 PicoClaw 的邮件渠道需求（#2421，5 评论）均为同级别诉求但规模显著更小。

### 3.4 核心劣势

- **Docker 部署基础设施缺口**：#14593 和 #31331 指向官方 Docker 镜像未预装 Homebrew 和 workspace 挂载机制不完善，这是企业容器化部署的直接障碍。
- **Windows 平台自动化测试覆盖缺失**：#39038（Windows 11 24H2 卡死）长期未解决，社区评论明确指出 Windows 节点程序缺乏 CI 覆盖。
- **回归 Bug 收敛速度慢**：#32473（安全上下文回归）和 #38327（Gemini 3.1 空对象错误）自 3 月初创建至今逾 2 个月仍未修复，影响面覆盖 HTTPS 配置和主流模型。

---

## 4. 共同关注的技术方向

### 4.1 Provider 兼容性与空 tool_calls 问题（严重且广泛）

| 项目 | 具体表现 | 严重度 |
|------|---------|:------:|
| **Zeroclaw** | 空 `tool_calls: []` 导致 DeepSeek/NVIDIA NIM 返回 400（#6298） | S1 |
| **librefang** | DeepSeek v4 flash 缺少 `reasoning_content` 多轮处理（#4842） | 🔴 高 |
| **Hermes Agent** | DeepSeek Anthropic-compatible API 400：thinking blocks 被 strip（#22313） | P2 |
| **IronClaw** | DeepSeek thinking mode API 400：`reasoning_content must be passed back`（#3436） | 🔴 高 |
| **OpenClaw** | Fallback 超时响应交付修复（#80009 已合并），相对健壮 | ✅ |

**共同根因**：各项目均在快速适配 DeepSeek、Kimi 等国内模型的过程中，遇到 thinking/reasoning 模式与 OpenAI 兼容层之间的 API 合约不一致问题——尤其是 thinking blocks 的传回机制和空 tool_calls 的处理策略尚无统一标准。

**行业影响**：这反映出 OpenAI tool-calling 规范向 thinking-native 模型扩展时存在架构缺口，预计 2026 年下半年各项目将普遍面临 provider 合约标准化压力。

### 4.2 容器化与沙箱部署体验（OpenClaw、NanoClaw、librefang）

| 项目 | 问题 |
|------|------|
| **OpenClaw** | Docker 内 skill install 报 `brew not installed`（#14593）；Sandbox workspaceAccess 失效（#31331） |
| **NanoClaw** | WhatsApp 附件下载到 host 但未 mount 进 Agent 容器（#2370） |
| **librefang** | GCP Free Tier 插件安装失败（#4686）、MCP 服务器未连接（#4836） |

**共同诉求**：构建可靠的容器化部署路径，包括预装依赖管理、网络穿透配置、文件系统挂载机制和云平台资源限制适配。

### 4.3 上下文窗口与 Token 成本优化（OpenClaw、NanoBot、Hermes Agent、QwenPaw）

| 项目 | 方案 | 状态 |
|------|------|:----:|
| **OpenClaw** | Bootstrap 分层加载（#22438）；Tool schema token 优化（#14785，~3,500 tok/session） | 需求阶段 |
| **Hermes Agent** | Lazy Tool Schema Loading（#6839，两阶段注入）；系统提示压缩至 ~500 tokens（#14319） | 进行中 |
| **NanoBot** | 状态机七阶段重构（#3715），减少冗余处理 | ✅ 已合并 |
| **QwenPaw** | 语义技能路由（#3117）；超长对话（200+ 轮）前端性能问题（#3350） | PR 进行中 |

**共同信号**：随着 Agent 被用于更复杂的工程级场景，上下文预算管理已从"nice-to-have"演变为**生产环境的核心需求**。

### 4.4 多模态视觉能力原生化（Hermes Agent 引领，多项目跟进）

- **Hermes Agent**（#13065、#15288、#16862）：多个 Issue 聚焦主模型原生视觉输入，替代强制经由辅助 vision pipeline 的架构。
- **NanoBot**（#3723）：本地 faster-whisper 语音转写 PR，扩展多模态输入通道。
- **PicoClaw**（#2260）：xAI Provider 合并，丰富多模态 provider 生态。

**趋势解读**：多模态输入的"原生化 vs 管道化"路线选择正在成为项目架构决策的分水岭，原生化路线可显著降低 token 开销但需要更复杂的模型适配。

### 4.5 Workflow/Cron 任务持久化与可靠性（IronClaw、librefang、NanoBot）

| 项目 | 进展 |
|------|------|
| **librefang** | Workflow runs 持久化到 SQLite（#4838，待合并）；优雅关闭时 drain in-flight runs（#4716 ✅） |
| **IronClaw** | Reborn 架构中的 durable secret store（#3414）和 resource governor（#3427）均已合并 |
| **NanoBot** | Cron 任务 stream_id 修复（#3720，高优先级 Bug 修复） |
| **OpenClaw** | SQLite 数据库优先运行时重构（#78595）配套推进 |

**共同方向**：后端持久化层建设正在从"纯内存"向"SQLite-first"收敛，各项目均认识到 daemon 重启时的状态恢复是生产部署的硬需求。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心能力标签 | 最强能力 | 最弱短板 |
|------|------------|---------|---------|
| **OpenClaw** | 全平台、多渠道、安全验证 | 跨平台桌面端成熟度、Policy/Doctor 闭环 | Docker 部署体验、Windows 测试覆盖 |
| **Hermes Agent** | 多模态、Token 优化、平台扩展 | Token 开销分析（73% 固定开销量化）、Cron 任务自动化注入 | 视觉原生化、Ollama 原生端点支持 |
| **NanoBot** | 轻量、状态机重构、WebUI | CLI 现代化、AgentLoop 集中化 | 独立 WebUI 缺失；上下文丢失 |
| **QwenPaw** | 多渠道集成（Discord/Matrix/WeCom）、本地模型 | 渠道覆盖广度、Windows 诊断工具 | 超长对话性能、WebUI 卡顿 |
| **IronClaw** | Reborn 架构、多租户隔离 | 持久化资源治理、跨租户 SSE/WS 隔离（安全） | DeepSeek thinking mode 兼容、i18n 回归 |
| **librefang** | Kernel 稳定性、Workflow 持久化 | FallbackChain capability-aware 路由、优雅关闭 | GCP Free Tier 兼容性、WeCom 测试缺失 |
| **PicoClaw** | Multi-agent、steering-chain UX | Multi-agent 发现机制、xAI Provider | 邮件渠道、OAuth 2.1 |
| **Zeroclaw** | 多渠道安全、SOP 引擎 | Discord 频道白名单、SopEngine 修复 | Matrix SDK 编译、空 tool

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-10

---

## 1. 今日速览

**NanoBot 今日保持极高开发活跃度。** 过去24小时内共产生 **136 条 PR 更新**，其中 30 条已合并/关闭，106 条待审查，显示项目维护者正在积极推进大量改动；Issues 侧共计 13 条更新（4 条新开/活跃，9 条关闭）。项目呈现快速迭代态势，核心架构重构（状态机重写、AgentLoop 集中化）与功能增强（模型预设、WebUI）并行推进，整体保持健康度。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR：

| PR | 状态 | 说明 |
|---|---|---|
| [#3719](https://github.com/HKUDS/nanobot/pull/3719) | ✅ Merged | **修复无效列表切片导致的死代码** (`helpers.py::find_legal_message_start`)，修复 [#3716](https://github.com/HKUDS/nanobot/issues/3716) |
| [#3708](https://github.com/HKUDS/nanobot/pull/3708) | ✅ Merged | **引入 `AgentLoop.from_config()` 集中化循环组装**，消除 CLI 命令间的重复初始化逻辑 |
| [#3715](https://github.com/HKUDS/nanobot/pull/3715) | ✅ Merged | **将 `_process_message` 重构为显式函数式状态机**，提取 `RESTORE → COMPACT → COMMAND → BUILD → RUN → SAVE → RESPOND` 七阶段处理器 |
| [#3705](https://github.com/HKUDS/nanobot/pull/3705) | ✅ Merged | **修复交互式 CLI 中重试消息导致的终端输出损坏** |
| [#3709](https://github.com/HKUDS/nanobot/pull/3709) | ✅ Merged | **WebUI BYOK 设置新增 Web Search 凭据配置**（Apple 风格分段控件切换 LLM/Web Search） |
| [#3680](https://github.com/HKUDS/nanobot/pull/3680) | ✅ Merged | **修复会话文件损坏问题**（`last_consolidated` 超出消息数时重置为 0） |
| [#3710](https://github.com/HKUDS/nanobot/pull/3710) | ✅ Closed | **回滚** `#3685`（`_last_summary` 持久化修复），可能因引入回归问题 |
| [#3685](https://github.com/HKUDS/nanobot/pull/3685) | ✅ Closed | 已被回滚的 `_last_summary` 跨重启持久化增强 |

---

## 4. 社区热点

### 🔥 热度最高的讨论

**Issue #2949 - 是否应该为 NanoBot 开发独立的 WebUI？**
- 作者：@JackLuguibin | 评论 10 条 | 👍 13
- 链接：https://github.com/HKUDS/nanobot/issues/2949
- 要点：社区强烈呼吁独立 WebUI，目前仅通过 `webui/websocket-debug` 调试，用户主要依赖 CLI 或聊天渠道

**Issue #1922 - 社区项目 nanobot-webui 推介**
- 作者：@Good0007 | 评论 9 条 | 👍 10
- 链接：https://github.com/HKUDS/nanobot/issues/1922
- 要点：社区成员已自建功能完整的 Web 管理面板，支持仪表盘、实时聊天、配置编辑、多用户

**PR #3723 - 本地 Whisper 语音转写**
- 作者：@dilidin2 | 创建于 2026-05-10
- 链接：https://github.com/HKUDS/nanobot/pull/3723
- 要点：引入 faster-whisper 实现离线语音转写，无需 API Key，适合隐私敏感场景

**PR #3564 - HookCenter 类型化事件钩子系统**
- 作者：@aiguozhi123456 | 更新于 2026-05-09
- 链接：https://github.com/HKUDS/nanobot/pull/3564
- 要点：重构 AgentHook 方法重写模式，支持 `observe/transform/guard` 三种 handler 模式，外部开发者可通过 `entry_points` 分发插件

---

## 5. Bug 与稳定性

### 🔴 高优先级

**#3718 [OPEN] - Cron 提醒消息缺少 stream_id**
- 严重度：高
- 描述：服务器流式输出 cron 提醒消息时未携带 `stream_id`
- 影响：WebSocket 客户端无法关联流式片段
- Fix PR：[#3720](https://github.com/HKUDS/nanobot/pull/3720)（已开）

**#3689 [OPEN] - 中断会话丢失上一轮聊天记录**
- 严重度：高
- 描述：用户打断 AI 执行后，AI 丢失上下文，无法回忆之前任务
- 影响：长任务场景下用户体验严重下降

### 🟡 中优先级

**#3674 [CLOSED] - WebSocket 媒体附件被静默丢弃**
- 描述：`_dispatch_envelope` 忽略入站消息的 `media` 字段
- 状态：已关闭

### 🟢 低优先级（已修复）

- **#3716 [CLOSED]** - `helpers.py` 存在不可达死代码（已合并 [#3719](https://github.com/HKUDS/nanobot/pull/3719) 修复）
- **#510 [CLOSED]** - Gateway 未绑定 18790 端口

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 描述 | 预估纳入可能性 |
|---|---|---|---|
| [#3723](https://github.com/HKUDS/nanobot/pull/3723) | PR | **本地 Whisper 语音转写**（faster-whisper） | 高 |
| [#3692](https://github.com/HKUDS/nanobot/issues/3692) | Feature | **飞书群 topic 隔离可配置开关** | 中 |
| [#1012](https://github.com/HKUDS/nanobot/issues/1012) | Feature | **子代理配置（差异化工具/技能）** | 低-中（长期需求） |
| [#2389](https://github.com/HKUDS/nanobot/issues/2389) | Feature | **OpenWebUI 作为官方渠道** | 待确认 |
| [#2949](https://github.com/HKUDS/nanobot/issues/2949) | Feature | **独立 WebUI**（社区高呼） | 中（已有第三方实现） |

**架构层面增强**（已有 PR）：
- **模型预设系统**：[#3714](https://github.com/HKUDS/nanobot/pull/3714) 引入 `ModelPresetConfig` + 运行时预设切换
- **钩子系统重构**：[#3564](https://github.com/HKUDS/nanobot/pull/3564) HookCenter 类型化事件系统
- **状态机重构**：[#3715](https://github.com/HKUDS/nanobot/pull/3715) 已完成

---

## 7. 用户反馈摘要

### 用户痛点

1. **上下文丢失问题**：多用户在中断 AI 任务后遭遇上下文重置，期望保留对话历史和执行步骤状态（[#3689](https://github.com/HKUDS/nanobot/issues/3689)）
2. **飞书 topic 隔离过于激进**：用户反馈同时发送多个文件时每个被隔离为独立 topic，无法满足批量处理需求（[#3692](https://github.com/HKUDS/nanobot/issues/3692)）
3. **长任务流式报错**：WeCom 渠道出现 "Streaming is required for operations that may take longer than 10 minutes" 错误（[#2709](https://github.com/HKUDS/nanobot/issues/2709)）

### 用户诉求

1. **独立 WebUI**：社区对可视化界面呼声极高，已有第三方实现 [nanobot-webui](https://github.com/Good0007/nanobot-webui)
2. **本地语音转写**：隐私敏感用户需要离线 Whisper 方案，无需 API Key（[#3723](https://github.com/HKUDS/nanobot/pull/3723)）
3. **CLI 更新命令**：用户希望 `nanobot update` 一键更新而非手动执行 pip upgrade（[#3421](https://github.com/HKUDS/nanobot/issues/3421)）

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 状态 | 说明 |
|---|---|---|---|
| [#1012](https://github.com/HKUDS/nanobot/issues/1012) | 2026-02-22 | OPEN | 子代理差异化配置需求（3 个月未响应） |

### 高价值 PR 待审查

| PR | 创建时间 | 说明 | 审查优先级 |
|---|---|---|---|
| [#3723](https://github.com/HKUDS/nanobot/pull/3723) | 2026-05-10 | 本地 Whisper 语音转写 | 🔴 高 |
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) | 2026-04-30 | HookCenter 类型化事件系统 | 🔴 高 |
| [#3714](https://github.com/HKUDS/nanobot/pull/3714) | 2026-05-09 | 模型预设配置 | 🟡 中 |
| [#3711](https://github.com/HKUDS/nanobot/pull/3711) | 2026-05-09 | 归档摘要移至系统提示符 | 🟡 中 |
| [#3720](https://github.com/HKUDS/nanobot/pull/3720) | 2026-05-09 | Cron stream_id 修复 | 🔴 高（关联 Bug） |

---

## 📊 健康度评分

| 指标 | 评估 |
|---|---|
| **活跃度** | 🟢 极高（136 PRs / 24h） |
| **问题响应** | 🟢 良好（9/13 Issues 已关闭） |
| **Bug 修复速度** | 🟢 快速（死代码、终端损坏等问题当日修复） |
| **PR 积压** | 🔴 较高（106 条待审查，建议优先处理） |
| **架构演进** | 🟢 健康（状态机重构、集中化配置系统并行推进） |
| **社区参与** | 🟢 活跃（WebUI、语音转写等功能由社区驱动） |

---

*报告生成时间：2026-05-10 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 | 2026-05-10

## 1. 今日速览

过去 24 小时内，Zeroclaw 项目保持**高度活跃**状态：共处理 **50 条 Issue 更新**（47 新开/活跃 + 3 关闭）和 **40 条 PR 更新**（31 待合并 + 9 已合并/关闭）。值得注意的是，今日合并了 2 个关键修复（#6541、#6534），同时多项 P1/P2 高优先级特性正在推进中，包括多智能体运行时（#6545）和上下文压缩修复（#6362）。社区反馈活跃，Discord 频道限制和工具调用空数组问题是当前讨论焦点。

---

## 2. 版本发布

**无新版本发布。** 社区反映 Homebrew 合并失败，0.7.5 版本尚未进入 Homebrew 核心仓库（#6547）。

---

## 3. 项目进展

### 合并的 Pull Requests

| PR | 描述 | 贡献者 | 状态 |
|----|------|--------|------|
| [#6541](https://github.com/zeroclaw-labs/zeroclaw/pull/6541) | 修复：使用发送者派生的通道会话键来限定 `TOOL_LOOP_SESSION_KEY`，使 `sessions_current` 可识别活动通道会话 | @Audacity88 | ✅ 已合并 |
| [#6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) | 修复：在两处调用 `SopEngine` 构造函数后调用 `reload()`（此前 SOP 从未被加载） | @Yyukan | ✅ 已合并 |

### 重要 Open PRs

| PR | 描述 | 优先级 | 状态 |
|----|------|--------|------|
| [#6545](https://github.com/zeroclaw-labs/zeroclaw/pull/6545) | 多智能体运行时 - 模式原语、跨引用验证器、per-backend agents 表 | 🔴 P1 | Open |
| [#6539](https://github.com/zeroclaw-labs/zeroclaw/pull/6539) | 修复：直接会话中要求 shell 审批 | 🔴 高 | Open |
| [#6362](https://github.com/zeroclaw-labs/zeroclaw/pull/6362) | 修复：在上下文压缩边界保留纯文本助手消息 | 🔴 高 | Open |
| [#6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) | 修复：在代理和工具历史中规范化图像标记 | 🔴 高 | Open |

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)** — Discord 机器人仅在特定频道响应（5 评论）
   - 诉求：在 Discord 频道中添加 `allowed_channels` 配置字段，与 Matrix 和 Nextcloud Talk 的 `allowed_rooms` 模式保持一致
   - 标签：`enhancement`, `priority:p2`, `status:accepted`

2. **[#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530)** — matrix-sdk v0.16.0 构建失败（3 评论）
   - 问题：递归限制溢出，启用 channel-matrix 功能时编译失败
   - 状态：`blocked`，需要维护者审查

3. **[#6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298)** — 空 `tool_calls` 数组导致 DeepSeek/NVIDIA NIM 返回 400（3 评论）
   - 问题：启用原生工具时，无工具调用的响应生成 `"tool_calls": []`
   - 影响：严格验证的提供商被拒绝，S1 级别工作流阻塞

4. **[#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272)** — 多智能体运行时：每个别名的工作区、权限和共享资源（2 评论）
   - V3 特性：每个 `[agents.<alias>]` 块成为完全隔离的单元
   - 与 PR #6545 协同推进

---

## 5. Bug 与稳定性

### 🔴 严重 Bug（S1/S0）

| Issue | 描述 | 严重度 | 状态 | 是否有 Fix PR |
|-------|------|--------|------|---------------|
| [#6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298) | 空 tool_calls 导致 400 错误（DeepSeek、NVIDIA NIM） | S1 | accepted | ❌ |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | context_compression 为 MiniMax 等丢弃 tool_calls/result，导致工具循环 | S1 | in-progress | ✅ #6362 |
| [#6039](https://github.com/zeroclaw-labs/zeroclaw/issues/6039) | Copilot 提供商无法处理 Discord 上传的图片 | S1 | in-progress | ❌ |
| [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) | 非前置 system 消息被发送到 OpenAI 兼容提供商 | S1 | - | ❌ |
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | WorkspaceManager 启动时无法加载 profiles | S0 | accepted | ❌ |
| [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) | 无法信任系统 CA 证书 | S2 | needs-maintainer-review | ❌ |

### 🟡 中等 Bug（S2）

| Issue | 描述 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) | Matrix SDK v0.16.0 构建递归溢出 | blocked | ❌ |
| [#6433](https://github.com/zeroclaw-labs/zeroclaw/issues/6433) | Matrix 通道心跳不工作 | in-progress | ❌ |
| [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) | Gemini CLI 提供商因过时参数语法崩溃 | accepted | ❌ |
| [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) | Discord 媒体发送/接收损坏（入站图片未处理） | - | ❌ |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

1. **[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)** — Discord 频道白名单
   - 对标 Matrix/Nextcloud Talk 的 `allowed_rooms` 模式
   - 已有社区贡献者参与

2. **[#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345)** — Per-channel 回复间隔节流
   - 解决配对身份通道（WhatsApp 等）的消息风暴问题
   - 状态：`in-progress`

3. **[#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522)** — Web 聊天监督模式工具审批 UI
   - 后端已实现，前端需跟进
   - `priority:p1`

4. **[#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833)** — 破坏性操作的会话所有权模型
   - 安全修复，防止跨代理重置/删除会话
   - `status:blocked`，需要维护者审查

5. **[#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)** — 技能支持与 UX 改进（v0.7.6 主题）
   - 协调追踪跨 CLI、加载器、审计、安装路径、沙箱的技能改进

### v0.8.0 路线图信号

| Issue | 描述 | 关联 PR |
|-------|------|---------|
| [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) | 协调运行时模型切换与提供商结构 | #6545 |
| [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) | 多智能体运行时隔离单元 | #6545 |
| [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | macOS 桌面应用通用二进制（arm64 + x86_64） | - |

---

## 7. 用户反馈摘要

### 用户痛点

- **工具调用兼容性**：DeepSeek 和 NVIDIA NIM 等严格验证的提供商收到空 `tool_calls: []` 时返回 400 错误，影响生产环境使用（#6298）
- **Discord 媒体处理**：入站图像从未到达代理，媒体类型被静默丢弃，用户体验受损（#6556）
- **构建稳定性**：matrix-sdk v0.16.0 构建失败阻止部分用户使用 Matrix 通道（#6530）

### 功能满意度与期望

- **多智能体运行时**：社区对 V3 版本的多代理隔离模型呼声高，期待每个别名独立的工作区和权限（#6272）
- **技能系统**：用户反馈 `zeroclaw skills` 体验需要改进（#6253），社区欢迎输入
- **OpenAI 兼容提供商**：Kimi K2.5 等需要非标准变通方案，呼吁一等支持（#6518）

### 回归问题

- SopEngine 构造函数后从未调用 `reload()`，导致 SOP 从未被加载（#6534 已修复）
- GitHub Actions 即将弃用 Node 20，部分 CI 可能受影响（#6447 已提交）

---

## 8. 待处理积压

### 长期未响应的 P1/P2 Issues

| Issue | 创建时间 | 状态 | 风险 |
|-------|---------|------|------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 2026-04-24 | in-progress | 审计追踪 153 个丢失的提交用于恢复 |
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | 2026-04-17 | blocked | 安全风险 - 会话所有权未隔离 |
| [#6039](https://github.com/zeroclaw-labs/zeroclaw/issues/6039) | 2026-04-23 | in-progress | Copilot Discord 图片处理 |

### 需要维护者审查的 Issues

| Issue | 标签 | 紧迫性 |
|-------|------|--------|
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | needs-maintainer-review | 🔴 高 |
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | needs-maintainer-review | 🔴 高 |
| [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518) | needs-maintainer-review | 🟡 中 |

---

## 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| 活跃 Issues（过去 7 天） | 50 | ↗️ |
| 待合并 PRs | 31 | ↗️ |
| P1 优先级 Issues | 6 | → |
| 本日关闭 Issues/PRs | 12 | ↗️ |
| 新 Release | 0 | → |

---

*报告生成时间：2026-05-10 | 数据来源：github.com/zeroclaw-labs/zeroclaw*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**报告日期**：2026-05-10  
**项目仓库**：https://github.com/sipeed/picoclaw  
**数据周期**：过去 24 小时

---

## 1. 今日速览

PicoClaw 今日保持高度活跃，共处理 **38 条社区交互**（13 Issues + 25 PRs）。核心贡献者 @bogdanovich 主导了大量 steering-chain（引导链）相关的 UX 改进，涉及最终回复渲染、消息发送策略等多个维度。今日发布了一个 nightly build（v0.2.8-nightly.20260510），合并了 7 个 PR，新开 10 个 Issue。项目整体保持快速迭代节奏，multi-agent、OAuth 2.1、Streamable HTTP 等能力正在稳步推进。

---

## 2. 版本发布

### ✅ Nightly Build 发布

| 版本 | 标签 | Commit |
|------|------|--------|
| **v0.2.8-nightly.20260510.6e6293e5** | nightly | `6e6293e5` |

**说明**：此为自动化构建版本，可能不稳定，建议谨慎使用。  
**完整变更日志**：https://github.com/sipeed/picoclaw/compare/v0.2.8...main

---

## 3. 项目进展

今日共有 **7 个 PR 合并/关闭**，推进了多个关键能力：

| PR | 作者 | 类型 | 摘要 |
|----|------|------|------|
| [#2842](https://github.com/sipeed/picoclaw/pull/2842) | @bogdanovich | Feature | 从 action log 合成的 steering-chain 最终回复功能 |
| [#2823](https://github.com/sipeed/picoclaw/pull/2823) | @bogdanovich | Bug Fix | outbound 跳过时清除工具反馈 |
| [#2828](https://github.com/sipeed/picoclaw/pull/2828) | @bogdanovich | Bug Fix | 排队语音 follow-up 的转录修复 |
| [#2793](https://github.com/sipeed/picoclaw/pull/2793) | @bogdanovich | Bug Fix | 修复 subagent 工具注册表中隐藏工具提升问题 |
| [#2790](https://github.com/sipeed/picoclaw/pull/2790) | @bogdanovich | Bug Fix | 修复 spawn 工具路由到目标 agent |
| [#2630](https://github.com/sipeed/picoclaw/pull/2630) | @2023478 | Bug Fix | Web UI 显示完整回复时间戳 |
| [#2158](https://github.com/sipeed/picoclaw/pull/2158) | @afjcjsbx | Feature | **Multi-agent 发现提示词**（Layer 1 能力） |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | @badgerbees | Feature | **xAI 兼容性支持** |
| [#2163](https://github.com/sipeed/picoclaw/pull/2163) | @andressg79 | Bug Fix | 修复 Google Antigravity token 刷新后 OAuth scopes 丢失 |

### 🚀 重点推进

**Multi-agent 发现机制**（#2158）已合并，这是 Layer 1 的核心能力，将 agent 注册表轻量注入到 system prompt，实现多 agent 协作的基础架构。

**xAI Provider**（#2260）正式支持，丰富了 provider 生态。

---

## 4. 社区热点

今日讨论最活跃的 Issues：

| Issue | 作者 | 类型 | 评论数 | 摘要 |
|-------|------|------|--------|------|
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) | @aquaratixc | Enhancement | **5** | **邮件作为原生渠道** - 企业/科学/保守环境中用户依赖邮件 |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | @rameshnetsys | Enhancement | **4** | **OAuth 2.1 + PKCE 支持** - MCP 服务器可从仪表盘添加 |
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | @geekgonecrazy | Bug | **2** | Codex OAuth 响应流通过 `response.output_item.done` 时返回空内容 |
| [#2665](https://github.com/sipeed/picoclaw/issues/2665) | @gatorbrain | Bug | **2** | Anthropic 模型 ID 格式错误（用点号而非短横线） ✅ 已修复 |

**热点分析**：

- **邮件渠道**（#2421）收到 5 条评论，核心诉求是企业用户需要 email 作为可靠的通知通道，社区对多渠道支持的呼声很高。
- **OAuth 2.1/PKCE**（#2546）关注的是零技术门槛添加 MCP 服务器，Claude.ai 已实现类似 UX，PicoClaw 正在跟进。

---

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

| 严重度 | Issue | 问题描述 | Fix 状态 |
|--------|-------|----------|----------|
| 🔴 高 | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth + ChatGPT 后端时返回空响应 | 开放中 |
| 🟡 中 | [#2839](https://github.com/sipeed/picoclaw/issues/2839) | steering-chain 最终回复被错误编辑为工具反馈占位符 | [PR #2840](https://github.com/sipeed/picoclaw/pull/2840) 已提 |
| 🟡 中 | [#2745](https://github.com/sipeed/picoclaw/issues/2745) | OpenRouter reasoning 模型推理内容泄露到 assistant 消息 | 开放中（stale 标记） |
| 🟡 中 | [#2836](https://github.com/sipeed/picoclaw/pull/2836) | PowerShell 编码绕过安全漏洞 (sec/deny) | PR 已提待审 |
| 🟢 低 | [#2665](https://github.com/sipeed/picoclaw/issues/2665) | Anthropic 模型 ID 格式错误 | ✅ 已修复 |

**安全注意**：[#2836](https://github.com/sipeed/picoclaw/pull/2836) 涉及 PowerShell 编码绕过，建议优先审查。

---

## 6. 功能请求与路线图信号

| 功能 | Issue/PR | 线索 | 纳入可能性 |
|------|----------|------|------------|
| **邮件渠道** | [#2421](https://github.com/sipeed/picoclaw/issues/2421) | 讨论中，1 👍 | 🔵 中 |
| **OAuth 2.1 + PKCE** | [#2546](https://github.com/sipeed/picoclaw/issues/2546) | 讨论中，4 评论 | 🔵 中 |
| **Streamable HTTP (MCP)** | [#2782](https://github.com/sipeed/picoclaw/issues/2782) | 1 评论，协议标准化趋势 | 🔵 中 |
| **GitHub Device Code** | [#1347](https://github.com/sipeed/picoclaw/issues/1347) | ✅ 已关闭（实现） | ✅ 已完成 |
| **Multi-agent 发现** | [#2158](https://github.com/sipeed/picoclaw/pull/2158) | ✅ 已合并 | ✅ 已完成 |
| **xAI 支持** | [#2260](https://github.com/sipeed/picoclaw/pull/2260) | ✅ 已合并 | ✅ 已完成 |

**路线图信号**：
- **steering-chain UX** 成为近期重点（#2839, #2841, #2842, #2843），系统正在优化引导-heavy 场景下的最终回复质量
- **AGENT.md 前端工具策略**（#2837, #2838）正在推进，支持 allow/deny/glob 过滤
- **异步 spawn 结果传递策略**（#2829, #2830）正在规范

---

## 7. 用户反馈摘要

| 场景 | 来源 | 核心诉求 |
|------|------|----------|
| 企业邮件需求 | [#2421](https://github.com/sipeed/picoclaw/issues/2421) | 不使用聊天平台的用户需要 email 通知 |
| 零技术门槛 MCP | [#2546](https://github.com/sipeed/picoclaw/issues/2546) | 普通用户希望粘贴 URL 即可添加 MCP 服务器 |
| 升级教程缺失 | [#2834](https://github.com/sipeed/picoclaw/issues/2834) | 用户不知道如何从源码升级，希望有教程 |
| Telegram 相册处理 | [#2758](https://github.com/sipeed/picoclaw/pull/2758) | 用户发送多图消息时希望作为一条消息处理 |

**正面反馈**：
- Multi-agent 发现能力（#2158）获得积极推进
- Web UI 时间戳修复（#2630）提升了聊天记录可读性

---

## 8. 待处理积压

以下 Issue 长期未响应或已标记 stale，建议关注：

| Issue | 创建时间 | 状态 | 摘要 | 建议 |
|-------|----------|------|------|------|
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | 2026-04-16 | stale | OAuth 2.1 + PKCE 功能请求 | 🔵 高优先，考虑实现 |
| [#2745](https://github.com/sipeed/picoclaw/issues/2745) | 2026-05-02 | stale | OpenRouter reasoning 泄露 | 🟡 中优先 |
| [#2782](https://github.com/sipeed/picoclaw/issues/2782) | 2026-05-06 | stale | MCP Streamable HTTP 支持 | 🟡 中优先 |

---

## 总结

PicoClaw 今日保持 **高活跃状态**，核心贡献者 @bogdanovich 持续推进 steering-chain UX 优化。Multi-agent 基础能力和 xAI provider 已正式合并，功能矩阵持续扩展。邮件渠道、OAuth 2.1、Streamable HTTP 等功能请求反映了企业级和标准化协议的需求趋势。

**关注项**：
- 🔴 优先审查安全相关 PR #2836
- 🔴 跟进 Codex OAuth 空响应问题 #2674
- 🟡 清理 stale issues，提升社区响应率

---

*报告生成时间：2026-05-10 | 数据来源：GitHub Issues & PRs*

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# 🔬 Hermes Agent 项目动态日报

**报告日期：** 2026-05-10  
**项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

2026-05-10 是项目极其活跃的一天。GitHub 活动量创下近期新高：24小时内产生 **248 条 Issue 更新**（170 新开/活跃，78 关闭）和 **500 条 PR 更新**（283 待合并，217 已合并/关闭）。值得注意的是，项目尚未发布新版本（0 个 Release），但社区开发热情持续高涨。重点方向集中在：**多模态视觉能力原生化**、**Token 开销优化**、**Gateway 平台适配（Teams/DingTalk/Discord）**以及**CLI 稳定性修复**。整体项目处于功能迭代与缺陷修复并行推进的健康状态。

---

## 2. 版本发布

**本日无新版本发布。**

> ⚠️ 项目最近一次版本发布信息暂无记录，建议关注 [Releases 页面](https://github.com/NousResearch/hermes-agent/releases) 获取版本动态。

---

## 3. 项目进展

### 3.1 合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 贡献者 | 概述 |
|------|------|------|--------|------|
| [#14319](https://github.com/NousResearch/hermes-agent/pull/14319) | feat(skills): compact system prompt index with usage-driven pinned skills | **CLOSED** | @sontianye | 将技能系统提示从 ~2500 tokens 压缩至 ~500 tokens，新增 `query` 参数支持关键字搜索，根据使用频率固定常用技能 |
| [#21031](https://github.com/NousResearch/hermes-agent/pull/21031) | fix: validate cron no-agent update invariants | **OPEN** | @sgtworkman | 强化 Cron 任务数据层校验，拒绝在 `no_agent=True` 时清空脚本，防止无代理任务回退至空代理模式 |
| [#22928](https://github.com/NousResearch/hermes-agent/pull/22928) | feat: add --no-gui flag and fix win32 console crash | **OPEN** | @AlexFoxD | 新增 Headless Mode（`--no-gui` 或 `-y` 参数），解决 Windows 非交互环境下 `NoConsoleScreenBufferError` 崩溃问题 |
| [#22935](https://github.com/NousResearch/hermes-agent/pull/22935) | fix(feishu): handle quote field for quoted reply messages | **OPEN** | @sicnuyudidi | 飞书适配器新增 `quote` 字段解析，提取 `reply_to_message_id` 和 `reply_to_text`，支持线程外引用回复 |
| [#22933](https://github.com/NousResearch/hermes-agent/pull/22933) | fix(kanban): reject toolset names in task skills | **OPEN** | @LeonSGP43 | Kanban 任务创建时校验技能名称，拒绝 `web`、`browser` 等 toolset 名称，改为返回明确错误信息 |
| [#22919](https://github.com/NousResearch/hermes-agent/pull/22919) | feat(holographic): 4-channel RRF retrieval + sqlite-vec dense vector | **OPEN** | @zym-6666 | 实现四路 RRF 检索融合（FTS5 + Jaccard + HRR + sqlite-vec），提升记忆检索精度 |
| [#22650](https://github.com/NousResearch/hermes-agent/pull/22650) | fix: honor active repo and dashboard chat theme | **OPEN** | @sgtworkman | CLI 更新检查作用域限定为当前 Hermes 仓库克隆，解决 dashboard 聊天主题在 React 构建中丢失的问题 |
| [#22920](https://github.com/NousResearch/hermes-agent/pull/22920) | docs(user-stories): expand to 407 entries | **OPEN** | @teknium1 | 用户故事文档扩展至 407 条目，覆盖 15 个分类和 11 个来源（Reddit/HN 等） |
| [#22918](https://github.com/NousResearch/hermes-agent/pull/22918) | docs: Engineering Cybernetics × AI Agent architecture analysis | **OPEN** | @Gangbeng-Y | 首次系统应用钱学森工程控制论分析 AI Agent 架构，包含 15 机制映射矩阵 |
| [#22892](https://github.com/NousResearch/hermes-agent/pull/22892) | fix(memory): preserve file permissions during atomic write | **OPEN** | @liuhao1024 | `MemoryStore._write_file()` 原子写入时保留原有文件权限（0600），避免权限降级 |

### 3.2 其他值得关注的 Open PRs

| PR # | 标题 | 贡献者 | 看点 |
|------|------|--------|------|
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | Add Hermes desktop app | @OutThisLife | JavaScript 实现桌面应用，TUI/Web 截图显示已完成 |
| [#22509](https://github.com/NousResearch/hermes-agent/pull/22509) | feat(daimon): Multi-user Discord bot | @alt-glitch | Discord Gateway 双层访问控制：admin 完整权限，user 受限沙箱 |
| [#19963](https://github.com/NousResearch/hermes-agent/pull/19963) | fix(dingtalk): support voice ASR, file attachments, longText | @sctale | 钉钉适配器支持语音转文字、文件附件、长文本消息 |
| [#22915](https://github.com/NousResearch/hermes-agent/pull/22915) | fix(web): add Bearer auth header for Tavily /crawl | @McClean | 修复 Tavily 爬虫认证头问题（从 body 改为 header） |
| [#22914](https://github.com/NousResearch/hermes-agent/pull/22914) | feat(i18n): localize /model command output | @teknium1 | `/model` 命令静态标签（Provider/Context 等）支持多语言本地化 |

---

## 4. 社区热点

### 4.1 评论数最多的 Issues（Top 10）

| Issue # | 标题 | 评论数 | 状态 | 核心诉求 |
|---------|------|--------|------|----------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Error: Response truncated due to output length limit | **18** | CLOSED | CLI/Gateway 场景下长回复被截断（@zznner-dot） |
| [#4505](https://github.com/NousResearch/hermes-agent/issues/4505) | Optimize Ollama Integration: Native /api/chat vs OpenAI-Compatible | **10** | OPEN | 建议使用 Ollama 原生端点替代 OpenAI 兼容层以获得真流式输出（@declan2010） |
| [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) | Feature: First-class native vision support for vision-capable main models | **10** | CLOSED | 主模型原生支持视觉能力而非强制经由辅助 vision model（@kaishi00） |
| [#9514](https://github.com/NousResearch/hermes-agent/issues/9514) | Feature: Single-Daemon Multi-Agent with Per-Topic Workspace & Memory Isolation | **9** | OPEN | 单进程多代理架构，每个主题独立工作区和记忆隔离（@willy-scr） |
| [#15895](https://github.com/NousResearch/hermes-agent/issues/15895) | google-gemini-cli causing 429 but gquota ok | **8** | OPEN | Gemini CLI OAuth 认证导致 429 限流（@herbalizer404） |
| [#5712](https://github.com/NousResearch/hermes-agent/issues/5712) | Feature: True Autonomy - Automatically Inject Cron Results into Live Gateway Chat Sessions | **7** | OPEN | Cron 任务结果自动注入到活跃 Gateway 会话（@juice-digital） |
| [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) | Token overhead analysis: 73% of each API call is fixed overhead (~13.9K tokens) | **7** | OPEN | 性能分析：73% API 调用开销为固定开销约 13.9K tokens（@Bichev） |
| [#6147](https://github.com/NousResearch/hermes-agent/issues/6147) | Installer stuck at "Install ripgrep / ffmpeg [Y/n]" - no keyboard input detected | **6** | OPEN | 安装程序在 ripgrep/ffmpeg 提示处卡死，无法接收键盘输入（@mustfasahin） |
| [#14637](https://github.com/NousResearch/hermes-agent/issues/14637) | Openrouter - API call failed: AuthenticationError [HTTP 401] | **6** | CLOSED | OpenRouter API 认证失败 401（@sachins-eng） |

### 4.2 热点分析

**🔴 输出截断问题（#7237）** 是社区最关注的问题，引发 18 条评论。该 Bug 影响 CLI/Telegram/Discord/Slack 等所有 Gateway 场景，当模型生成较长回复时会直接抛出 `Response truncated due to output length limit` 错误，导致输出中断。

**🟡 多模态架构争议（#13065 已关闭 → #15288/#16862/#7641）** 呈现多个 Issue 聚焦同一主题：当前 Hermes 强制将所有图片经由辅助 vision model（如 qwen3-vl）处理，即使主模型（如 gpt-4o、glm-5v-turbo）已具备原生多模态能力。社区强烈呼吁原生多模态输入，已有多个相关 PR 正在推进。

**🟡 Token 开销问题（#4379）** 通过数据仪表盘量化了性能问题：73% 的 API 调用 token 消耗来自固定系统提示开销（约 13.9K tokens），这为 #6839 的 Lazy Tool Schema Loading 提案提供了数据支撑。

---

## 5. Bug 与稳定性

### 5.1 P1 严重问题（需立即关注）

| Issue # | 标题 | 状态 | 严重性 | 说明 |
|---------|------|------|--------|------|
| [#20465](https://github.com/NousResearch/hermes-agent/issues/20465) | Interactive CLI session does not auto-fallback on Codex 429 'usage_limit_reached' | **OPEN** | P1 | CLI 交互会话在 Codex 返回 429 时不会自动回退，而 Cron 任务相同回退链可正常工作（@ddoKx） |
| [#13891](https://github.com/NousResearch/hermes-agent/issues/13891) | Matrix gateway unable to decrypt message | **CLOSED** | P1 | Matrix 网关运行一段时间后出现 "Unable to decrypt message" 错误，需重建房间（@yyong-brs） |
| [#21937](https://github.com/NousResearch/hermes-agent/issues/21937) | _priority_key raises ValueError: not enough values to unpack (expected 5, got 2) | **CLOSED** | P1 | `_execute_tool_calls_concurrent()` 中结构体解包错误导致间歇性 ValueError（@fnlearner） |
| [#17666](https://github.com/NousResearch/hermes-agent/issues/17666) | CLI: long pasted multi-line messages silently dropped / never delivered | **CLOSED** | P1 | CLI 粘贴长多行文本时消息静默丢失，终端显示但未送达模型（@aommi） |

### 5.2 P2 问题（高优先级）

| Issue # | 标题 | 状态 | 类别 | 说明 |
|---------|------|------|------|------|
| [#21867](https://github.com/NousResearch/hermes-agent/issues/21867) | Cron doesn't work! | **OPEN** | Cron | `cronjob` 工具 `action='run'` 参数无法触发立即执行（@HemantMishraAI） |
| [#22313](https://github.com/NousResearch/hermes-agent/issues/22313) | DeepSeek Anthropic-compatible API — HTTP 400: thinking blocks stripped | **CLOSED** | Provider | DeepSeek API 返回 400 错误，thinking blocks 未正确回传（@guocongcongcong） |
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | OpenAI-Codex credential pool can drop newly added credential | **OPEN** | Auth | 凭证池在 auth.json 重写时可能丢失新添加的凭证（@arsitekberotot） |
| [#22864](https://github.com/NousResearch/hermes-agent/issues/22864) | Dashboard /chat PTY WebSocket can time out before HTTP 101 response | **OPEN** | TUI | WebSocket 建立超时，HTTP 101 响应未及时刷新（@fsantiago07044） |
| [#21801](https://github.com/NousResearch/hermes-agent/issues/21801) | hermes dashboard --tui shows [session ended] after v0.13.0 update | **OPEN** | TUI | v0.13.0 更新后 dashboard --tui 打开 Web UI 但 Chat 页立即显示 session ended（@yigithurulas） |
| [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) | Frequent RemoteProtocolError / Connection drops with MiniMax provider | **OPEN** | Provider | 从 OpenClaw 切换到 Hermes 后 MiniMax 提供商频繁断连（@gaokevin93-creator） |

### 5.3 P3 问题（常规）

| Issue # | 标题 | 状态 | 类别 |
|---------|------|------|------|
| [#6147](https://github.com/NousResearch/hermes-agent/issues/6147) | Installer stuck at "Install ripgrep / ffmpeg [Y/n]" | OPEN | Installer |
| [#15895](https://github.com/NousResearch/hermes-agent/issues/15895) | google-gemini-cli causing 429 | OPEN | Provider |
| [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) | Token overhead analysis | OPEN | Performance |
| [#7266](https://github.com/NousResearch/hermes-agent/issues/7266) | 阿里云 DashScope 端点模型验证警告问题 | OPEN | Config |

### 5.4 Bug 修复 PR 对照

| Bug Issue | 对应 Fix PR | 状态 |
|-----------|-------------|------|
| #21867 (Cron 不工作) | #21031 | OPEN |
| #21801 (TUI session ended) | #22650 | OPEN |
| #22864 (WebSocket timeout) | - | 待修复 |
| #22901 (待确认) | #22917 (mac multiline LF fallback) | OPEN |
| 权限问题 | #22892 (preserve file permissions) | OPEN |

---

## 6. 功能请求与路线图信号

### 6.1 高呼声功能请求（按 👍 数排序）

| Issue # | 标题 | 👍 | 状态 | 预计影响 |
|---------|------|-----|------|----------|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema Loading — Two-Pass Tool Injection | **8** | OPEN | 降低 3500-5000 tokens/调用开销 |
| [#5712](https://github.com/NousResearch/hermes-agent/issues/5712) | True Autonomy - Inject Cron Results into Live Sessions | **7** | OPEN | 增强后台任务与前端会话联动 |
| [#5151](https://github.com/NousResearch/hermes-agent/issues/5151) | UX: streaming retry status messages accumulate in chat | **8** | OPEN | 改善重试时用户体验 |
| [#9514](https://github.com/NousResearch/hermes-agent/issues/9514) | Single-Daemon Multi-Agent with Per-Topic Workspace | **3** | OPEN | 架构级改动，降低资源占用 |
| [#1855](https://github.com/NousResearch/hermes-agent/issues/1855) | Multi-backend terminal — local + N named remotes | **4** | OPEN | 支持多终端后端并行 |
| [#9512](https://github.com/NousResearch/hermes-agent/issues/9512) | Microsoft Teams gateway support | **0** | OPEN | 扩展平台覆盖 |
| [#4319](https://github.com/NousResearch/hermes-agent/issues/4319) | KV cache invalidation hurts local MoE models | **2** | OPEN | 优化本地 MoE 模型性能 |

### 6.2 功能演进趋势分析

**多模态能力原生化** 是当前最明确的技术方向，#13065、#15288、#16862、#7641 四个 Issue 聚焦同一目标：让原生支持视觉的主模型直接接收图片输入，而非强制经由辅助 vision pipeline。这与 #6839 的 Token 优化形成互补——减少不必要的中间处理层。

**多平台 Gateway 扩展** 持续推进：Teams（#9512）、DingTalk（#19963 已 PR）、Discord 多用户控制（#225

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 🦞 NanoClaw 项目动态日报
## 2026-05-10

> **数据窗口**：2026-05-09 00:00 → 2026-05-10 00:00（UTC）  
> **数据来源**：github.com/nanocoai/nanoclaw

---

## 1. 今日速览

过去 24 小时 NanoClaw 保持了极高的开发吞吐：**10 个 PR 被合并/关闭，7 个新 PR 打开**，Issue 层面 5 个新开、1 个已解决。合并内容涵盖了容器配置持久化、持久记忆技能、AWS CLI 集成等核心功能，表明项目正处于批量功能交付阶段。同时，有 **2 个中等严重度的 Bug**（WhatsApp 附件挂载缺失 + 脚本误删配置）需要关注尚未有对应 fix PR。整体活跃度评分 **🔴 高**（PR 吞吐量 > 1 条/小时）。

---

## 2. 版本发布

**本日无新版本标签（Release）发布**。

> ⚠️ 注意：尽管没有正式 Release，但多个已合并 PR（见下节）对容器运行时行为有实质性改变（如 `container.json` 从文件系统迁移至 DB），建议维护团队考虑在近期打一个版本快照。

---

## 3. 项目进展

以下为今日合并/关闭的 **10 个 PR**，按影响范围排序：

| # | PR | 类型 | 概要 | 链接 |
|---|----|------|------|------|
| 1 | **#2351** | feat/db | 容器配置从 `groups/<folder>/container.json` 文件系统迁移至中央 DB 的 `container_configs` 表，文件降级为只读物化视图 | [#2351](https://github.com/nanocoai/nanoclaw/pull/2351) |
| 2 | **#2318** | feat(skills) | 新增 `/add-mnemon` 技能，为 Agent 容器安装 mnemon 持久记忆 CLI，支持按类别/重要性/实体标签的语义知识图查询 | [#2318](https://github.com/nanocoai/nanoclaw/pull/2318) |
| 3 | **#2319** | feat(add-aws) | 新增 `/add-aws` 技能：安装 awscli、挂载 OneCLI CA 证书包、注入 AWS 凭证，解决 TLS 代理穿透问题 | [#2319](https://github.com/nanocoai/nanoclaw/pull/2319) |
| 4 | **#2233** | feat(container-config) | 支持在 `container.json` 中为各 Agent Group 单独配置 model 和 effort 参数覆盖 | [#2233](https://github.com/nanocoai/nanoclaw/pull/2233) |
| 5 | **#2280** | fix(claude-provider) | 改用 `[1m]` 模型 tag 替代 `--betas` 标志来声明 1M 上下文，消除 API 层行为歧义 | [#2280](https://github.com/nanocoai/nanoclaw/pull/2280) |
| 6 | **#2364** | chore(container) | claude-code 从 2.1.116 升级至 2.1.128（12 个 patch），含 `${CLAUDE_EFFORT}` 替换等行为变更 | [#2364](https://github.com/nanocoai/nanoclaw/pull/2364) |
| 7 | **#2352** | fix(container-runner) | `install_packages` 构建超时从 5 分钟提升至 15 分钟，解决慢网络环境下的 ETIMEDOUT | [#2352](https://github.com/nanocoai/nanoclaw/pull/2352) |
| 8 | **#2372** | fix | COO brief 准确性修复（骨架模板锁定、NPS 源过滤器修正、ALICE 窗口、时间戳） | [#2372](https://github.com/nanocoai/nanoclaw/pull/2372) |
| 9 | **#2371** | fix | 同上 PR #2372，为重复提交或需合并的同题修复 | [#2371](https://github.com/nanocoai/nanoclaw/pull/2371) |
| 10 | **#2320** | docs(skills) | 更新 6 个技能的 SKILL.md（debug、init-onecli、add-gmail-tool、add-opencode、add-signal、add-vercel） | [#2320](https://github.com/nanocoai/nanoclaw/pull/2320) |

**合并进度摘要**：10/17 PR 已关闭，**核心推进方向**为容器配置中心化、技能生态扩充（记忆 + AWS）、多组模型差异化配置。

---

## 4. 社区热点

### 🔥 最高关注度 Issue / PR（按评论数）

**Issue #2369** —— 多工具场景下代理不发送 `<message to=>` 而改为叙述式委托
- 📌 **核心诉求**：当 Agent 组包含 2+ 目的端且加载 ~32+ MCP 工具时，代理行为不符合 Destinations-addendum 规范，在用户可见消息中"叙述"了委托过程而非标准 `<message to="...">` 标签
- 🔗 [查看 Issue](https://github.com/nanocoai/nanoclaw/issues/2369) | 作者：@glifocat | 2026-05-09 创建

**Issue #1669** —— Credential Proxy 是否会触发 Anthropic 账户风控
- 📌 **核心诉求**：Anthropic 明确禁止 OAuth 反向代理，从技术实现角度当前 Credential Proxy 是否存在被反欺诈系统标记的风险
- 🔗 [查看 Issue](https://github.com/nanocoai/nanoclaw/issues/1669) | 作者：@LCJD99 | 2026-04-06 创建（**长期未解决**）

**PR #2368** —— Agent 自主插件安装/卸载 + 拒绝缓存
- 📌 **功能亮点**：Agent 可主动请求启用/禁用插件，经管理员审批后执行，附带通用拒绝缓存防止重复骚扰审批者
- 🔗 [查看 PR](https://github.com/nanocoai/nanoclaw/pull/2368) | 作者：@yaniv-golan

**PR #2363** —— OAuth Token 主动刷新
- 📌 **功能亮点**：Credential Proxy 主动监控即将过期的 Anthropic OAuth 令牌并提前刷新，消除 token 失效导致的请求中断
- 🔗 [查看 PR](https://github.com/nanocoai/nanoclaw/pull/2363) | 作者：@chiptoe-svg

**热点分析**：社区近期明显聚焦于 **多代理协作的可靠性**（委托协议合规、WhatsApp 路由）和 **安全合规边界**（Anthropic OAuth 使用规范），反映出项目正在从单代理向多代理生产部署演进的实际需求。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 高优先级 —— 尚未有 Fix PR

**Issue #2370** —— WhatsApp 附件未挂载进 Agent 容器 ⭐⭐⭐
> 描述：WhatsApp 适配器将图片/视频/音频/文档下载到 `<project>/data/attachments/`，但该目录 **未以 mount 方式传入 Agent 容器**，导致容器内格式化器引用 `/workspace/<localPath>` 时无法找到文件。
> - 状态：[OPEN]
> - 影响范围：所有 WhatsApp 附件接收场景
> - 🔗 [Issue #2370](https://github.com/nanocoai/nanoclaw/issues/2370) | 作者：@participo

**Issue #2194** —— WhatsApp LID→phone JID 映射在重启后丢失 ⭐⭐
> 描述：WhatsApp LID 到手机号 JID 的映射存储在内存缓存中（通过 `chats.phoneNumberShare` 事件和 Baileys `signalRepository.lidMapping` 填充），服务重启后缓存清空，LID 发送者路由失败。
> - 状态：[OPEN] | 创建：2026-05-02
> - 影响范围：使用 LID 作为发件人的 WhatsApp 场景
> - 🔗 [Issue #2194](https://github.com/nanocoai/nanoclaw/issues/2194) | 作者：@mshirel

**Issue #2360** —— Setup 脚本静默删除用户自定义配置 ⭐⭐
> 描述：运行 `bash nanoclaw.sh` 在重新克隆仓库时会**静默删除** `groups/*/CLAUDE.md` 等用户自定义代理配置文件，无警告、无备份、无日志记录，直接导致用户数日的心智配置成果丢失。
> - 状态：[OPEN] | **用户数据安全风险**
> - 🔗 [Issue #2360](https://github.com/nanocoai/nanoclaw/issues/2360) | 作者：@alexli-77

### 🟡 中优先级 —— 已解决

**Issue #2196** —— host-sweep 写入只读数据库崩溃 ✅ **已关闭**
> 描述：`deleteOrphanProcessingClaims(outDb)` 中的 `outDb` 以 `{ readonly: true }` 打开，导致删除操作抛出 `SqliteError: attempt to write a readonly database`，host-sweep 进程崩溃，停滞会话无法清理。
> - 状态：[CLOSED]
> - 🔗 [Issue #2196](https://github.com/nanocoai/nanoclaw/issues/2196) | 作者：@mshirel

---

## 6. 功能请求与路线图信号

以下 Issue/PR 反映的功能方向值得关注，可能进入下一版本路线图：

| 方向 | 条目 | 说明 | 纳入可能性 |
|------|------|------|-----------|
| **多代理自组织** | PR #2368 | Agent 自主请求插件安装/卸载 + 拒绝缓存 | 🔴 高 |
| **技能数据持久化** | PR #2366 | `/workspace/skill-data` 持久化挂载点，解决技能状态跨容器重启丢失 | 🔴 高 |
| **插件生态** | PR #2365 | 通过 `container.json` 配置 `extraKnownMarketplaces` + `enabledPlugins` | 🔴 高 |
| **市场运营技能** | PR #2367 | 7 个操作员技能用于插件/市场管理 | 🟡 中 |
| **Codex 契约对齐** | PR #2361 | 收紧 Codex provider 合约，移除过时 40K/手动压缩指南 | 🟡 中 |
| **安全合规** | Issue #1669 | Credential Proxy 合规性审查（Anthropic OAuth 风险） | 🟡 中 |
| **委托协议** | Issue #2369 | 复杂多工具场景下 Destinations-addendum 规范合规 | 🟡 中 |
| **Watchdog 工具** | PR #2362 | 新增 watchdog 工具类技能 | 🟢 待评估 |

**路线图信号总结**：当前项目重心正在从 **"能用"** 向 **"好用且可扩展"** 迁移——容器配置中心化（#2351）、持久化技能状态（#2366）、插件系统（#2365/#2367/#2368）构成了下一阶段的核心叙事。

---

## 7. 用户反馈摘要

从今日 Issue 评论与描述中提炼真实用户痛点：

| 场景 | 痛点 | 来源 |
|------|------|------|
| **企业 WhatsApp 运营** | LID→phone JID 映射丢失导致消息路由静默失败，用户感知不到但业务中断 | @mshirel |
| **多工具 Agent 组** | 加载 32+ MCP 工具后代理行为异常，不发送标准 `<message to=>` 而"自言自语"，用户困惑 | @glifocat |
| **开发者初始配置** | `bash nanoclaw.sh` 重运行时未警告直接删除用户自定义 CLAUDE.md，挫败感强烈 | @alexli-77 |
| **生产附件场景** | WhatsApp 附件下载后容器内访问不到，集成流程断裂 | @participo |
| **合规担忧** | 使用 Credential Proxy 代理 OAuth 时担心触发平台风控，影响企业采购决策 | @LCJD99 |
| **慢网络部署** | `install_packages` 构建 5 分钟超时过短，实际生产网络环境中频繁超时 | PR #2352 修复场景 |

> **社区情绪倾向**：正面（合并 PR 多、功能完善），但 WhatsApp 相关问题（3 个）和数据安全风险（#2360）需尽快处理以维护用户信任。

---

## 8. 待处理积压

以下条目创建时间较早或长期无响应，需维护者重点关注：

### 📌 长期 Open Issue（>30 天未解决）

**Issue #1669** —— Credential Proxy 合规风险评估
- 创建于 2026-04-06，距今 **34 天**，1 条评论
- 问题本质是合规性非功能性缺陷，维护团队需给出明确的技术风险评估或文档澄清
- 🔗 [Issue #1669](https://github.com/nanocoai/nanoclaw/issues/1669)

### 📌 中期 Open Issue（7-14 天无更新）

**Issue #2194** —— WhatsApp LID 映射持久化（8 天无更新）
- 创建于 2026-05-02，距今 8 天，影响生产可用性
- 🔗 [Issue #2194](https://github.com/nanocoai/nanoclaw/issues/2194)

### 📌 新兴 Open Issue（今日创建，需快速响应）

**Issue #2370** —— WhatsApp 附件未挂载进容器
- 创建于 2026-05-09，用户影响面广，无 fix PR
- 🔗 [Issue #2370](https://github.com/nanocoai/nanoclaw/issues/2370)

**Issue #2360** —— Setup 静默删除用户配置
- 创建于 2026-05-09，数据安全/用户体验问题
- 🔗 [Issue #2360](https://github.com/nanocoai/nanoclaw/issues/2360)

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 今日新开 Issue | 5 | ↗️ |
| 今日关闭 Issue | 1 | → |
| 今日新开 PR | 7 | ↗️ |
| 今日合并/关闭 PR | 10 | ↗️↗️ |
| PR 合并率 | 58.8%（10/17） | ✅ 健康 |
| 严重 Bug（无 fix） | 3 | ⚠️ |
| Release 发布 | 0 | — |

---

> **报告说明**：本日报基于 GitHub Issues/PR 公开数据自动生成。如需进一步分析特定模块或趋势，请回复具体需求。  
> **数据截止**：2026-05-10 00:00 UTC

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-05-10

---

## 1. 今日速览

IronClaw 项目在 2026-05-09 当日保持极高活跃度：共处理 19 条 Issues（18 个新开/活跃）和 36 条 PRs（23 条待合并），核心工作围绕 **Reborn 架构落地**（Epic #2987）展开——当日合并了 6 个 Reborn 相关 PR（secret store、resource governor、capability catalog、loop prompt 等），另有 7 个 Reborn PR 处于 XL/L size 待合并状态。同时出现了两个需优先处理的生产 Bug：DeepSeek thinking mode API 400 报错和 i18n 回归导致翻译 key 裸显。整体而言，项目在大幅推进 Reborn 重构进度的同时，稳定性存在一定压力。

---

## 2. 版本发布

> **注**：根据 PR #3388（`chore: release`）的元数据，IronClaw 于近两日（2026-05-08/09）发布了 0.28.0 大版本。以下为基于该 PR 的变更摘要。

| Crate | 版本变更 | 兼容性 |
|---|---|---|
| `ironclaw_common` | 0.4.1 → **0.4.2** | ✅ API 兼容 |
| `ironclaw` | 0.24.0 → **0.28.0** | ⚠️ 破坏性变更 |

**主要变更内容（基于 PR #3388）：**
- `ironclaw_common` 小版本修复了内部错误处理路径
- `ironclaw` 主版本跨越 4 个小版本（0.24→0.28），表明近阶段包含较多破坏性接口变更，主要与 Reborn 架构落地相关
- 从 changelog 结构推测包含：provider facade 重构（PR #3416）、transport adapter contract（PR #3099）、跨租户 SSE/WS 隔离修复（PR #3390）

> 📦 [PR #3388 `chore: release`](https://github.com/nearai/ironclaw/pull/3388) — 发布协调

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PRs（9 个）

| PR | 作者 | 描述 | 关联 Issue |
|---|---|---|---|
| [#3427](https://github.com/nearai/ironclaw/pull/3427) | @serrrfirat | **feat(reborn): add durable resource governor** — 为 Reborn 添加持久化资源治理，包含 JSON-file/libSQL/PostgreSQL 三种后端实现，更新生产 wiring 覆盖 | — |
| [#3426](https://github.com/nearai/ironclaw/pull/3426) | @serrrfirat | **Implement Reborn visible capability catalog** — 实现 `ToolSurfaceService`/`CapabilityCatalog`，按 ExecutionContext/信任策略/审批可见性过滤可见工具 | #3090 |
| [#3414](https://github.com/nearai/ironclaw/pull/3414) | @serrrfirat | **feat(reborn): add durable encrypted secret store** — 为 Reborn 添加 libSQL/Postgres `SecretsStore` 实现，复用 v1 `SecretsCrypto` 语义持久化加密密钥 | — |
| [#3411](https://github.com/nearai/ironclaw/pull/3411) | @serrrfirat | **feat(reborn): add loop prompt bundle port** — 添加 `LoopPromptPort` 和 prompt bundle DTOs，支持 host-owned 提示词实例化 | — |
| [#3398](https://github.com/nearai/ironclaw/pull/3398) | @serrrfirat | **Compose Reborn text-only loop host ports** — 组合 thread-backed context/model/transcript 端口，添加集成覆盖测试 | — |
| [#3445](https://github.com/nearai/ironclaw/pull/3445) | @serrrfirat | **fix(reborn): close secret store review gaps** — 修复 secret store 审查发现的问题，保留 durable secret 元数据，支持跨 secret rotation 保持活跃租约 | — |
| [#3440](https://github.com/nearai/ironclaw/pull/3440) | @serrrfirat | **fix(resources): close durable governor review gaps** — 修复 resource governor 审查缺口，在替换 governor 时重建 lifecycle store | — |
| [#3430](https://github.com/nearai/ironclaw/pull/3430) | @serrrfirat | **Fix E2E auth and approval coverage** — 为 inline engine-v2 auth gate 发射 `AuthRequired` status，修复 REPL 认证覆盖 | — |
| [#3437](https://github.com/nearai/ironclaw/pull/3437) | @serrrfirat | **Avoid REPL auth retry race in E2E** — 修复 `test_repl_http_auth_prompt_accepts_token_and_retries` 中的竞态条件 | — |

**进展评估**：Reborn 架构核心组件（secret store、resource governor、capability catalog、loop prompt）在当日密集合并，标志着 Epic #2987 进入 **beta-level 功能完整性阶段**。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| # | 标题 | 评论数 | 类型 | 热度分析 |
|---|---|---|---|---|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | **[EPIC] Track Reborn architecture landing strategy** | 44 | enhancement | 最高热度，是全项目最重要的架构追踪 issue，当日更新了 landing shape（PR0 contract freeze ✅，grouped PRs ✅） |
| [#84](https://github.com/nearai/ironclaw/issues/84) | **feat: Agent system advanced features** | 4 | feature request | 长期 issue，涉及 multi-agent routing、global sessions、streaming、thinking modes 等高级特性 |
| [#2949](https://github.com/nearai/ironclaw/issues/2949) | **ERROR: there isn't a download for your platform x86_64-unknown-linux-gnu** | 4 | bug | 用户安装报错，持续跟踪中（自 4月24日起） |
| [#3107](https://github.com/nearai/ironclaw/issues/3107) | **[Reborn] Define AgentLoopDriver and run-class profile contract** | 3 | enhancement | Reborn 架构核心合同定义，parent of many sub-issues |

**热点洞察**：Epic #2987 是全项目焦点，维护团队在通过 grouped PR 策略降低单一 massive PR 的 review 压力。当日前后新开了 **9 个 Reborn 子 issue**（#3419, #3420, #3423, #3424, #3429, #3431–3435），反映出架构拆分精细化进入实施阶段。

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug（按严重程度）

| 严重度 | # | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 **High** | [#3436](https://github.com/nearai/ironclaw/issues/3436) | **DeepSeek API 400 报错** — 使用 `deepseek-v4-flash` 开启 thinking mode 时 API 返回 400，错误信息：`reasoning_content must be passed back in thinking mode` | 🆕 今日新开 | ❌ 无 |
| 🔴 **High** | [#3425](https://github.com/nearai/ironclaw/issues/3425) | **i18n 回归** — 生产环境下 UI 渲染原始翻译 key（`auth.title`、`tab.chat` 等）而非本地化字符串 | 🆕 今日新开 | ❌ 无 |
| 🟡 **Medium** | [#3415](https://github.com/nearai/ironclaw/issues/3415) | **Mission 结果发错会话** — 每日天气 mission 的结果被推送到错误的 conversation，而非 mission 创建时的 conversation | 🆕 今日新开 | ❌ 无 |
| 🟡 **Medium** | [#3323](https://github.com/nearai/ironclaw/issues/3323) | **Nightly E2E 测试失败** — Web regression job 失败 | ✅ 已关闭（2026-05-09） | [#3437](https://github.com/nearai/ironclaw/pull/3437) |
| 🟡 **Medium** | [#2949](https://github.com/nearai/ironclaw/issues/2949) | **Linux x86_64 下载缺失** — 用户无法通过官方安装脚本安装，报平台不支持 | ⚠️ 长期未解决（自 4月24日）| ❌ 无 |

**稳定性评估**：当日新报 **3 个生产级别 Bug**，且当日合并的 PR 多为 Reborn 新功能（而非稳定性补丁），建议维护团队优先响应 DeepSeek API Bug（影响 reasoning mode 使用）和 i18n Bug（影响最终用户体验）。

---

## 6. 功能请求与路线图信号

### 🚀 核心功能 PRs（判断可能被纳入下一版本）

| # | 功能 | PR 描述 | 成熟度 | 纳入可能性 |
|---|---|---|---|---|
| [#3438](https://github.com/nearai/ironclaw/pull/3438) | Reborn turn run scheduler | 添加 `TurnRunScheduler` + `SchedulerTurnRunWakeNotifier`，关闭 #3435 | 🟡 刚开（XL size）| 高（直接对应 Epic #2987） |
| [#3416](https://github.com/nearai/ironclaw/pull/3416) | Provider auth/model/embeddings facade | 将 provider-specific 实现隐藏在 facade 后，消除 4 个后端知识泄露点 | 🟡 开发中 | 高（破坏性重构，进入 release） |
| [#3446](https://github.com/nearai/ironclaw/pull/3446) | Trusted LoopExitApplier wiring | 添加受信任的 Reborn `LoopExitApplier`，验证 `AgentLoopDriver` 的退出声明 | 🟡 刚开（XL size）| 高（Epic #2987 子任务） |
| [#3439](https://github.com/nearai/ironclaw/pull/3439) | Text-only loop driver host factory | 添加 Reborn text-only `AgentLoopDriverHost` factory | 🟡 刚开（XL size）| 高（Epic #2987 子任务） |
| [#3390](https://github.com/nearai/ironclaw/pull/3390) | Cross-tenant SSE/WS isolation | 修复多租户场景下 status events 的跨租户泄露 | 🟡 开发中 | 高（安全相关，已在 release 0.28.0） |
| [#84](https://github.com/nearai/ironclaw/issues/84) | Agent system advanced features | multi-agent routing、streaming、thinking modes、elevated mode | 📋 长期需求 | 中（Feature Parity 路线图） |

**路线图信号**：项目明显处于 **Reborn v2 架构落地冲刺期**，短期内合并重点仍将围绕 Epic #2987 的子任务展开。Agent 高级功能（#84）虽为长期需求，但在当前架构重构完成后才可能进入实现阶段。

---

## 7. 用户反馈摘要

### 👤 用户报告的真实痛点

| 来源 | 痛点描述 |
|---|---|
| **#2949** 用户 @gittyhubert | Linux x86_64 用户无法通过官方安装脚本安装 IronClaw，报平台不匹配。用户提供 release page 存在对应下载，但安装脚本未识别。**影响**：阻塞新用户安装 |
| **#3436** 用户 @Serhioromano | DeepSeek API 在 thinking mode 下返回 400 错误，`reasoning_content` 必须传回。**影响**：使用 DeepSeek 进行复杂推理的用户无法正常工作 |
| **#3415** 用户 @sunglow666 | 每日 NYC 天气 mission 的结果被发到错误的会话。**影响**：自动化任务的可靠性，用户对"AI 替你完成任务"失去信任 |
| **#3425** 用户 @sunglow666 | 生产环境 i18n 回归，翻译 key 直接显示在 UI 上（`auth.title`、`tab.chat` 等）。**影响**：生产用户体验极差，品牌形象受损 |

**总结**：用户反馈集中在 **平台兼容性**、**API 集成正确性**、**自动化任务可靠性** 三个维度，均为生产环境高频场景。

---

## 8. 待处理积压

### ⚠️ 需维护者关注的重要 Issue/PR

| 类型 | # | 标题 | 创建日期 | 未响应时长 | 风险 |
|---|---|---|---|---|---|
| ⚠️ Bug | [#2949](https://github.com/nearai/ironclaw/issues/2949) | Linux x86_64 下载缺失 | 2026-04-24 | **~16 天** | 阻塞新用户安装，影响 Growth |
| ⚠️ Feature | [#84](https://github.com/nearai/ironclaw/issues/84) | Agent system advanced features | 2026-02-14 | **~86 天** | 长期未推进，P2-P3 需求搁置 |
| ⚠️ Bug | [#2949](https://github.com/nearai/ironclaw/issues/2949) | 同上，重复提醒 | — | — | 跨版本仍未解决 |
| 💡 Arch | [#3419](https://github.com/nearai/ironclaw/issues/3419) | Define shared Reborn storage substrate | 2026-05-09 | 当日新开 | 高优先级，storage 碎片化风险 |

> **建议**：#2949 已积压 16 天，建议优先定位安装脚本的平台检测逻辑并修复。同时 #84 作为 P2-P3 级别的 Feature Parity 需求，虽非紧急但长期搁置可能影响用户对产品能力边界的认知。

---

*报告生成时间：2026-05-10 | 数据来源：github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报

**报告日期**：2026-05-10  
**数据来源**：GitHub LobsterAI Repository  
**报告周期**：过去 24 小时

---

## 1. 今日速览

LobsterAI 今日保持高度活跃，共处理 **13 条 PR** 更新，其中 **9 条已合并/关闭**，4 条待合并。项目于 2026-05-09 发布新版本 2026.5.9，涵盖 Agent 工作目录隔离、Artifact 预览增强及分页加载三项核心功能。今日无新增 Issue，但存在 4 个依赖升级 PR 待合并（包括 React 19 升级），建议尽快处理以保持依赖安全性。项目整体健康度良好，代码贡献持续稳定。

---

## 2. 版本发布

### 🚀 LobsterAI 2026.5.9

**发布于**：2026-05-09  
**发布类型**：功能更新  
**GitHub 链接**：[Release 页面](https://github.com/netease-youdao/LobsterAI/releases)

#### 主要变更

| 功能 | 描述 | PR |
|------|------|-----|
| **Agent 独立工作目录** | 每个 Agent 支持配置独立的工作目录，实现任务环境隔离 | [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) |
| **Artifact 功能** | 新增 Artifact 预览能力，支持更丰富的文件展示 | [#1906](https://github.com/netease-youdao/LobsterAI/pull/1906) |
| **分页加载** | 会话列表与消息历史支持分页加载，优化大数据量场景性能 | [#btc69m97](https://github.com/netease-youdao/LobsterAI/pull/924) |

#### 迁移注意事项

- **无破坏性变更**：本次更新为功能增强，不涉及 API 变更或数据迁移
- **建议**：建议用户更新客户端以体验分页加载功能

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR（9 条）

| PR # | 类型 | 标题 | 贡献者 |
|------|------|------|--------|
| [#1938](https://github.com/netease-youdao/LobsterAI/pull/1938) | Release | release(2026.05.08): artifacts preview, cowork pagination & cron tasks | @fisherdaddy |
| [#1937](https://github.com/netease-youdao/LobsterAI/pull/1937) | Chore | optimize main UI | @fisherdaddy |
| [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) | Fix | fixed the issue of incorrect time in IM channel chat history | @fisherdaddy |
| [#1935](https://github.com/netease-youdao/LobsterAI/pull/1935) | Chore | update default empty history title style | @fisherdaddy |
| [#1934](https://github.com/netease-youdao/LobsterAI/pull/1934) | Chore | update agent avatar | @fisherdaddy |
| [#1933](https://github.com/netease-youdao/LobsterAI/pull/1933) | Fix | 预览模块刷新按钮、HTML预览bugfix、文件列表搜索排序、文件去重、Markdown深色模式 | @liugang519 |
| [#1932](https://github.com/netease-youdao/LobsterAI/pull/1932) | Fix | hide agent name in message metadata | @liuzhq1986 |
| [#1931](https://github.com/netease-youdao/LobsterAI/pull/1931) | Feat | 更新文件列表icon | @liugang519 |
| [#1930](https://github.com/netease-youdao/LobsterAI/pull/1930) | Feat | upgrade penclaw-weixin version to 2.4.3 | @liuzhq1986 |

#### 今日亮点

- **UI/UX 持续优化**：@fisherdaddy 主导完成主 UI 优化、空状态样式更新、Agent 头像刷新
- **预览功能增强**：@liugang519 修复多项预览模块问题，包括文件搜索、排序、去重、深色模式支持
- **即时通讯修复**：修复 IM 频道聊天历史时间显示错误问题

---

## 4. 社区热点

### 🔥 待合并的活跃 PR

| PR # | 类型 | 标题 | 状态 | 贡献者 |
|------|------|------|------|--------|
| [#1939](https://github.com/netease-youdao/LobsterAI/pull/1939) | Fix | 修复批量删除任务不生效的问题 | ⏳ Open | @fisherdaddy |
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) | Chore | bump @headlessui/react from 1.7.19 to 2.2.10 | ⏳ Open | @dependabot[bot] |
| [#1766](https://github.com/netease-youdao/LobsterAI/pull/1766) | Chore | bump vite from 5.4.21 to 8.0.11 | ⏳ Open | @dependabot[bot] |
| [#1764](https://github.com/netease-youdao/LobsterAI/pull/1764) | Chore | bump react-dom from 18.3.1 to 19.2.6 | ⏳ Open | @dependabot[bot] |

#### 热点分析

1. **#1939 - 批量删除功能修复**
   - **诉求**：用户报告批量删除任务操作无效，需立即处理
   - **建议**：优先级高，建议尽快 Review 并合并

2. **依赖升级（#1764/#1765/#1766）**
   - React 19 升级是重大变更，涉及 18.3.1 → 19.2.6
   - HeadlessUI 和 Vite 同步升级，整体依赖栈现代化
   - 建议进行完整回归测试后再合并

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug

| Bug 描述 | 严重程度 | 对应 PR | 状态 |
|----------|----------|---------|------|
| 批量删除任务不生效 | ⚠️ 中 | [#1939](https://github.com/netease-youdao/LobsterAI/pull/1939) | ⏳ 待修复 |

### 🔧 今日已修复的 Bug

| Bug 描述 | 修复 PR |
|----------|---------|
| IM 频道聊天历史时间显示错误 | [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) |
| HTML 预览功能异常 | [#1933](https://github.com/netease-youdao/LobsterAI/pull/1933) |
| 预览文件重复/无效文件 | [#1933](https://github.com/netease-youdao/LobsterAI/pull/1933) |
| 消息元数据显示 Agent 名称冗余 | [#1932](https://github.com/netease-youdao/LobsterAI/pull/1932) |

#### 稳定性评估

✅ **良好** - 今日已修复多项 UI/UX 问题，无崩溃或严重回归报告

---

## 6. 功能请求与路线图信号

### 🎯 从 PR 判断的潜在路线图方向

| 方向 | 证据 | 推测 |
|------|------|------|
| **Preview 增强** | #1931, #1933 | 文件预览功能持续完善，包括 Office/PDF 预览、搜索、排序 |
| **UI/UX 打磨** | #1934, #1935, #1937 | 界面细节优化将成为近期重点 |
| **依赖现代化** | #1764, #1765, #1766 | React 19、Vite 8 升级计划进行中 |
| **Agent 能力增强** | #1904 (Release) | Agent 工作目录隔离是重要功能演进方向 |

---

## 7. 用户反馈摘要

### 📊 今日 Issues 情况

- **新增 Issue**：0 条
- **活跃 Issue**：0 条
- **关闭 Issue**：0 条

> 注：今日无用户提交 Issue，无法获取直接用户反馈。建议关注待合并的 #1939 PR，该 PR 暗示存在批量删除功能的使用场景。

---

## 8. 待处理积压

### ⏰ 需要关注的项目

| 类别 | 内容 | 持续时间 | 建议 |
|------|------|----------|------|
| **Bug Fix** | #1939 批量删除任务不生效 | < 1 天 | 🔴 高优先级 |
| **依赖升级** | #1764 React 19 升级 | ~20 天 | 🟡 中优先级，建议测试后合并 |
| **依赖升级** | #1765 HeadlessUI 升级 | ~20 天 | 🟢 常规维护 |
| **依赖升级** | #1766 Vite 8 升级 | ~20 天 | 🟢 常规维护 |

---

## 📈 项目健康度指标

| 指标 | 数值 | 评估 |
|------|------|------|
| PR 处理量 | 13 条/24h | 🟢 优秀 |
| 合并率 | 69% (9/13) | 🟢 健康 |
| Bug 修复效率 | 高 | 🟢 良好 |
| 活跃 Issue 数 | 0 | 🟢 无积压 |
| 依赖维护 | 3 个 Dependabot PR 待处理 | 🟡 需关注 |

---

**报告生成时间**：2026-05-10  
**分析工具**：GitHub API + AI 辅助分析  
**免责声明**：本报告基于公开 GitHub 数据生成，仅供参考

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**日期**: 2026-05-10  
**项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 项目在 2026-05-10 呈现**低活跃度**状态。过去 24 小时内无新增 Issues，项目团队主要聚焦于代码合并与文档基础设施改进。共处理 3 个 Pull Requests，其中 2 个已成功合并/关闭，1 个处于待合并状态。今日无版本发布，但有文档站点重构的重要提案正在推进中。总体而言，项目保持稳健维护节奏，无重大阻塞性问题。

---

## 2. 项目进展

### PR #985 ✅ [CLOSED] Refresh web chat composer
**链接**: https://github.com/moltis-org/moltis/pull/985  
**作者**: @penso | **时间**: 2026-05-08 创建 → 2026-05-09 关闭

**核心变更**:
- 重设计聊天输入界面为**居中圆角 composer 组件**，提升视觉一致性
- 底部控制栏集成模型选择、推理开关、附件上传、语音输入、发送按钮
- 令牌/上下文状态信息移入 composer 底部，支持自动换行而非截断
- 新增独立附件选择器，保留队列消息的空白状态处理

> 该 PR 已顺利合并，Web 端聊天体验得到显著改善，用户界面更加现代化且功能完整。

---

### PR #986 ✅ [CLOSED] Update and improve zh-TW Traditional Chinese locale
**链接**: https://github.com/moltis-org/moltis/pull/986  
**作者**: @PeterDaveHello | **时间**: 2026-05-08 创建 → 2026-05-09 关闭

**核心变更**:
- 系统性更新繁体中文（zh-TW）UI 翻译，提升清晰度与准确性
- 标准化 "AI 助理"、"Moltis" 及相关技术术语的译法
- 统一多个模块的措辞，增强产品本地化一致性

> 该 PR 已合并，亚太地区用户体验得到优化，翻译质量显著提升。

---

## 3. 社区热点

### 🔥 待合并提案：PR #987 Replace docs deployment with Astro site
**链接**: https://github.com/moltis-org/moltis/pull/987  
**作者**: @penso | **状态**: OPEN（待合并）

**提案摘要**:
该 PR 提议将文档部署从 mdBook 迁移至 **Astro 生成的静态站点**，核心目标：

| 改进维度 | 具体措施 |
|---------|---------|
| **URL 兼容性** | 保留现有 Markdown 源文件与 `.html` URL 结构 |
| **导航体验** | 定制侧边栏导航、页面目录（TOC）、代码复制按钮 |
| **搜索能力** | 集成标题搜索功能 |
| **响应式设计** | 支持移动端汉堡菜单导航 |
| **主题切换** | 提供浅色/深色/自动三种主题模式 |

> ⚠️ 这是今日唯一处于 OPEN 状态的 PR，社区反馈较少（0 👍），建议维护者尽快 Review 并给出反馈。

---

## 4. 功能请求与路线图信号

基于今日 PR 活动，以下功能方向可能进入下一版本路线图：

| 功能方向 | 来源依据 | 可信度 |
|---------|---------|--------|
| **AI Composer UI 重构** | PR #985 已合并 | ✅ 已实现 |
| **多语言本地化深化** | PR #986 完善 zh-TW | ✅ 进行中 |
| **文档站点现代化** | PR #987 Astro 迁移提案 | 🔄 待合并 |

> 建议关注 PR #987 的进展，该提案若通过将显著提升文档可维护性与用户体验。

---

## 5. 待处理积压

| 编号 | 类型 | 标题 | 状态 | 等待时间 | 备注 |
|-----|-----|-----|------|---------|-----|
| #987 | PR | Replace docs deployment with Astro site | **OPEN** | ~2 天 | 建议优先 Review |

> **提醒维护者**：PR #987 已开放 2 天但尚未合并，建议尽快安排 Review，避免提案者热情消退。

---

## 6. 总结

Moltis 项目在 2026-05-10 整体状态**健康**，无重大 Bug 报告或阻塞性问题。团队效率较高（2/3 PR 已合并），重点投入 UI 现代化与国际化工作。建议关注 **PR #987 文档站点迁移** 的进展，该功能对项目文档质量有长远影响。

---

*本报告由 AI 自动生成 | 数据来源: GitHub moltis-org/moltis*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目日报 | 2026-05-10

---

## 1. 今日速览

QwenPaw 今日保持极高活跃度，共处理 **39 条 Issues** 和 **29 条 PRs**，并发布了 **v1.1.6 正式版及 v1.1.6-beta.2** 两个版本。项目整体向前推进顺利，社区参与度显著提升。今日焦点集中在：**Windows 环境诊断工具上线**、**MCP 子进程泄漏问题修复**、以及多个渠道（Discord、Matrix、WeCom）的功能增强。稳定性方面，超长对话场景下的性能问题仍是社区关注重点。

---

## 2. 版本发布

### v1.1.6 正式版

| 变更类型 | 内容描述 |
|---------|---------|
| ✨ 新增 | **Windows 诊断工具**：`qwenpaw doctor` 现可检查 Windows 特定环境问题（长路径支持、PowerShell 语言模式、工作目录路径长度）|
| ✨ 新增 | **Agent Status API**：提供智能体状态查询接口 |

📎 Release Notes: https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.6

### v1.1.6-beta.2

| PR | 作者 | 描述 |
|----|------|------|
| [#4134](https://github.com/agentscope-ai/QwenPaw/pull/4134) | @zhijianma | fix(runner): 命令分发时将 channel 变量重命名为 channel_name |
| [#4130](https://github.com/agentscope-ai/QwenPaw/pull/4130) | @YingchaoX | perf(console): 非方向键时跳过聊天历史查找 |

📎 Release Notes: https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.6-beta.2

---

## 3. 项目进展

### 已合并的重要 PRs

| PR | 描述 | 状态 |
|----|------|------|
| [#4152](https://github.com/agentscope-ai/QwenPaw/pull/4152) | **fix(mcp): 修复 stateful clients 的 lifecycle-task 泄漏** - 解决了 MCP 子进程在 `qwenpaw app` 守护进程下累积的问题（#4105），避免内存泄漏 | ✅ 已合并 |
| [#4157](https://github.com/agentscope-ai/QwenPaw/pull/4157) | **fix(agent-config): 保存时保留完整配置，防止嵌套配置丢失** - 对应 #4145（智能体配置无法持久保存）| ✅ 已合并 |
| [#4163](https://github.com/agentscope-ai/QwenPaw/pull/4163) | **chore(release): 更新 v1.1.6 发布说明** | ✅ 已合并 |
| [#4168](https://github.com/agentscope-ai/QwenPaw/pull/4168) | **docs(release-notes): 为 v1.1.6 添加新贡献者板块** | ✅ 已合并 |
| [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) | **feat(channel): 将用户显示名传播到 agent 环境上下文** - 飞书渠道现已支持将发送者昵称传递给 agent | ✅ 已合并 |
| [#4112](https://github.com/agentscope-ai/QwenPaw/pull/4112) | **feat(WeCom): 工具守卫交互审批卡片** - 企业微信渠道支持通过按钮审批/拒绝风险工具调用 | ✅ 已合并 |
| [#4074](https://github.com/agentscope-ai/QwenPaw/pull/4074) | **feat(provider): 允许在 Console UI 中选择 DashScope base URL** | ✅ 已合并 |
| [#3149](https://github.com/agentscope-ai/QwenPaw/pull/3149) | **feat(mcp): 支持列出 MCP 工具** | ✅ 已合并 |
| [#3928](https://github.com/agentscope-ai/QwenPaw/pull/3928) | **fix(agent-tools): 为 delegate_external_agent 添加安全默认超时** | ✅ 已合并 |

### 正在 Review 的重要 PRs

| PR | 描述 | 状态 |
|----|------|------|
| [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) | **feat(console): 增强 Matrix E2EE 验证步骤，防止"未加密/设备未验证"图标** | 🔍 Under Review |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | **feat(cli-desktop): 系统托盘启动项功能**（当前仅支持 Win32）| 🔍 Under Review |
| [#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139) | **feat(tool): browser_use 添加批量操作支持**（支持 13 种子操作）| 🔍 Under Review |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | **feat: 添加 Tauri 2.x 桌面应用支持**（替代 Electron）| 🔍 Under Review |
| [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | **feat(cron): 在 agent 调度前创建 Discord 线程** | 🔍 Under Review |

**项目健康度评估**：今日合并 21 条 PR，待合并 8 条，代码吞吐量健康。关键 Bug 修复（MCP 泄漏、配置保存）已及时合并。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| # | 标题 | 评论数 | 链接 |
|---|------|--------|------|
| 1 | **[Question] 页面进行超多轮对话后页面滚动变得特别卡** | 11 | [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) |
| 2 | **[Question] 升级到 v1.1.5.post2 后，opencode 模型提供商不能正常使用** | 10 | [#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) |
| 3 | **qwenpan v1.1.6 的 Volcano Engine 火山引擎模型配置有问题** | 8 | [#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165) |
| 4 | **[Bug] 存在多个智能体时，智能体的运行配置无法持久保存** | 8 | [#4145](https://github.com/agentscope-ai/QwenPaw/issues/4145) |
| 5 | **[Question] 有考虑在内置提示词加入中文提示词吗？** | 7 | [#4164](https://github.com/agentscope-ai/QwenPaw/issues/4164) |

### 热点分析

**🔥 超长对话性能问题（#3350）**  
用户在使用项目/工程级代码迭代场景时，超过 200 轮对话后页面滚动严重卡顿。这是由于保持完整上下文导致的性能瓶颈。社区呼吁：
- 提供场景化优化指导
- 考虑前端虚拟滚动等优化方案

**🔥 模型兼容性回退（#4133, #4165）**  
v1.1.5.post2 升级后出现 opencode provider 和火山引擎模型配置失败问题，需关注版本兼容性测试。

**💡 中文 Prompt 需求（#4164）**  
用户建议对 DeepSeek、GLM 等支持中文思维链的模型使用内置中文提示词，减少翻译层级以提升准确性。

---

## 5. Bug 与稳定性

### 高优先级 Bug（影响核心功能）

| # | 标题 | 严重程度 | 状态 | Fix PR |
|---|------|----------|------|--------|
| **#4133** | 升级后 opencode provider 无法使用 | 🔴 高 | OPEN | - |
| **#4165** | Volcano Engine 模型配置失败 | 🔴 高 | OPEN | - |
| **#4108** | 新版本 WebUI 响应时电脑卡顿严重 | 🔴 高 | OPEN | - |
| **#4159** | DashScope provider api_key 未被读取，返回 401 | 🔴 高 | OPEN | - |

### 中优先级 Bug（影响用户体验）

| # | 标题 | 状态 | Fix PR |
|---|------|------|--------|
| #4017 | 开启 HEARTBEAT.md 时网络中断后无法重连 | CLOSED | - |
| #4147 | 配置 LM Studio 作为本地模型时报 Internal Server Error | CLOSED | - |
| #4100 | MCP streamable_http 断开后无法自动恢复 | CLOSED | - |
| #4105 | MCP 子进程累积导致内存泄漏（~18GB/1.5天） | CLOSED | [#4152](https://github.com/agentscope-ai/QwenPaw/pull/4152) ✅ |
| #4145 | 多智能体配置无法持久保存 | CLOSED | [#4157](https://github.com/agentscope-ai/QwenPaw/pull/4157) ✅ |

**稳定性小结**：今日报告的高优先级 Bug 多与模型提供商配置和 WebUI 性能相关，需重点关注。已修复的 MCP 泄漏问题是长期困扰用户的痛点。

---

## 6. 功能请求与路线图信号

### 用户强烈诉求的功能

| # | 功能描述 | 相关 PR | 纳入可能性 |
|---|----------|---------|------------|
| #3663 | **梦境日志输出**：在记忆整合时记录模型"梦境" | - | ⭐⭐⭐ 中 |
| #2307 | **ADBPG 长期记忆管理器**：支持 AnalyticDB PostgreSQL 持久化记忆 | [#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) | ⭐⭐⭐ 高 |
| #4155 | **browser_use 复用已有 Chrome 浏览器**：通过 CDP 连接已打开的浏览器 | - | ⭐⭐ 中 |
| #4160 | **单渠道端点多智能体路由**：从单一渠道端点路由消息到不同 agent | - | ⭐⭐⭐ 中 |
| #3117 | **语义技能路由**：基于嵌入检索过滤技能，减少上下文 token 消耗 | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | ⭐⭐⭐ 高 |
| #4138 | **browser_use 批量操作支持**：批量执行 13 种浏览器子操作 | [#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139) | ⭐⭐⭐ 高 |
| #4166 | **在 pre_reply 中自动注入时间戳**：增强 Agent 时间感知能力 | - | ⭐⭐ 中 |

### 路线图观察

1. **桌面应用新架构**：Tauri 2.x 支持（#3813）正在开发，将替代 Electron
2. **多渠道能力增强**：Discord 线程创建、Matrix E2EE、WeCom 交互卡片等
3. **记忆系统升级**：ADBPG 长期记忆 + 语义路由，可大幅提升大型技能库场景下的性能

---

## 7. 用户反馈摘要

### 正面反馈

- 🎉 **v1.1.6 Windows 诊断工具**获好评，解决了长期困扰 Windows 用户的路径问题
- ✅ **MCP 子进程泄漏修复**（#4105 → #4152）解决了用户 18GB/1.5天 的内存泄漏痛点
- 💬 **企业微信工具守卫**（#4112）让用户无需输入命令即可审批风险操作

### 痛点与不满

| 场景 | 问题描述 |
|------|----------|
| **长对话性能** | 200+轮对话时页面滚动卡顿，无法正常多线程工作 |
| **升级兼容性** | 跨版本升级后模型提供商配置失效 |
| **WebUI 响应** | 新版本生成回复时电脑卡顿严重（鼠标掉帧） |
| **启动速度** | 客户端形式启动需等待半分钟 |
| **中文支持** | 中文思维链模型仍需使用英文 Prompt |

### 典型用户场景

1. **工程级代码迭代**：从零构建项目 V1、V2，需保持上下文不遗漏
2. **多环境同步**：测试/生产环境 skill 同步后前端不刷新
3. **本地模型部署**：LM Studio、Ollama 等本地服务集成

---

## 8. 待处理积压

### 长期未解决的高影响 Issue

| # | 标题 | 创建时间 | 状态 | 建议 |
|---|------|----------|------|------|
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | 超多轮对话后页面滚动卡顿 | 2026-04-14 | OPEN | 需前端性能优化方案 |
| [#3840](https://github.com/agentscope-ai/QwenPaw/issues/3840) | 小艺渠道无法发送回复 | 2026-04-26 | OPEN | 协议兼容性问题 |
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | DeepSeek think 内容解析问题 | 2026-05-06 | OPEN | 需确认是模型还是平台问题 |

### 建议维护者关注

1. **#4133 / #4165**：模型提供商配置问题影响用户日常使用，需尽快定位
2. **#4108**：WebUI 性能回归问题，用户反映严重影响使用体验
3. **#3117 / #2308**：两个高价值功能 PR 需推进 review

---

## 数据统计

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 20 |
| Issues 已关闭 | 19 |
| PRs 待合并 | 8 |
| PRs 已合并/关闭 | 21 |
| 新版本发布 | 2 |

---

*报告生成时间：2026-05-10 | 数据来源：GitHub agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# 📊 ZeptoClaw 项目日报 | 2026-05-10

---

## 1. 今日速览

ZeptoClaw 项目在 2026-05-10 当日保持**低活跃度**状态。过去24小时内无新增 Issue 报告，PR 层面有 1 个待合并的功能改进提案（#571）。该项目正处于功能迭代阶段，维护者持续推进 `longterm_memory` 工具描述的规范化工作。整体来看，项目无紧急问题或阻塞项，保持健康平稳运行。

---

## 2. 版本发布

**本日无新版本发布。**

---

## 3. 项目进展

### 🔧 待合并 PR

| PR # | 标题 | 状态 | 作者 | 创建时间 |
|------|------|------|------|----------|
| [#571](https://github.com/qhkm/zeptoclaw/pull/571) | feat(tools): trigger-phrase nudges in longterm_memory description | OPEN | @qhkm | 2026-05-03 |

**PR #571 详情：**

该 PR 聚焦于 `longterm_memory` 工具的描述优化：

- **重构 `description()` 方法**：为 `longterm_memory` 工具的描述函数新增 "Use when" / "Do NOT use when" 触发短语枚举，使工具使用指南更清晰明确
- **引入 doc-test 机制**：添加 `test_tool_description_has_trigger_phrases` 测试用例，确保触发短语块在未来修改中不被遗漏
- **对标成熟实现**：参照 Hermes Agent 的 `memory_tool.py` 模式进行改造，提升工具描述的一致性和规范性

**推进方向**：该 PR 改善了工具的可发现性和使用指导性，降低用户误用 `longterm_memory` 工具的概率，属于**开发者体验（DX）改进**。

---

## 4. 社区热点

**今日唯一活跃事项：**

| 类型 | 链接 | 作者 | 更新时间 | 反应 |
|------|------|------|----------|------|
| PR #571 | [feat(tools): trigger-phrase nudges...](https://github.com/qhkm/zeptoclaw/pull/571) | @qhkm | 2026-05-09 | 👍 0 |

**分析**：PR #571 由项目维护者 @qhkm 提出，主要目的是规范 `longterm_memory` 工具的元数据描述。该改动体现了维护者对代码质量的一贯追求——通过结构化的触发短语引导，帮助 Agent 在执行时更准确地判断何时使用/避免使用该工具。缺乏评论和反应可能表明：(1) 改动较为边缘，(2) 仍处于内部评审阶段。

---

## 5. Bug 与稳定性

**本日无 Bug 报告。**

| 严重程度 | 问题描述 | 状态 | 关联 PR |
|----------|----------|------|---------|
| - | 无报告 | - | - |

---

## 6. 功能请求与路线图信号

**本日无新增功能请求 Issue。**

基于 PR #571 的改动可以推断项目的近期方向：

- **工具元数据规范化**：对各工具的 `description()` 进行结构化改造，增加明确的触发条件说明
- **可测试性增强**：为工具描述添加 doc-test，防止未来回归

此类改进暗示项目正在从功能扩展阶段向**质量打磨阶段**过渡。

---

## 7. 用户反馈摘要

**有效反馈数据：0 条**

| 来源 | 反馈类型 | 内容摘要 |
|------|----------|----------|
| - | - | 过去24小时内无用户评论记录 |

---

## 8. 待处理积压

| 类别 | 编号 | 标题 | 创建时间 | 当前状态 | 积压时长 | 备注 |
|------|------|------|----------|----------|----------|------|
| PR | #571 | trigger-phrase nudges in longterm_memory description | 2026-05-03 | OPEN | 7 天 | 建议尽快 review 并决定是否合并 |

**⚠️ 提醒维护者关注：**

PR #571 已打开 7 天，目前处于 Open 状态，建议优先进行 code review。根据数据，该 PR 尚无外部反馈，维护者可考虑主动在社区群组或相关频道通知协作者参与评审，以加速决策流程。

---

## 📈 健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | 🟡 中低 | 1 个待处理 PR，无新 Issue |
| 响应速度 | 🟢 良好 | PR 最近一次更新为 2026-05-09 |
| 社区参与 | ⚪ 低 | 无外部评论/反馈 |
| 稳定性 | 🟢 良好 | 无 Bug 报告 |

**综合评价**：项目当前处于稳定维护状态，建议关注 PR #571 的合并进度。

---

*报告生成时间：2026-05-10 | 数据来源：GitHub ZeptoClaw 仓库*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>librefang</strong> — <a href="https://github.com/librefang/librefang">librefang/librefang</a></summary>

# 📊 librefang 项目动态日报 — 2026-05-10

## 1. 今日速览

过去 24 小时内，librefang 项目保持极高活跃度：共处理 **19 条 Issues**（5 关闭）和 **50 条 PRs**（3 待合并，47 合并/关闭）。核心进展集中在 **kernel 稳定性**（workflow 持久化、token 预算防护、指数退避重试）和 **channels 功能增强**（Email 多协议凭证分离、文件下载到磁盘）。特别值得注意的是，**大量历史遗留 bug 被集中清理**（涉及 build errors、clippy warnings、UTF-8 panic、streaming leak 等），反映出项目在发布前加快了代码质量收敛。CI 出现一次 Quality job 失败（PR #4816），当前正在修复中。总体项目健康度良好，核心功能模块迭代稳步推进。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 🔧 关键 PRs（合并/关闭）

| PR | 描述 | 意义 |
|----|------|------|
| [#4710](https://github.com/librefang/librefang/pull/4710) ❌ | feat(kernel,memory): migrate workflow persistence to SQLite | 因冲突关闭，已被 #4838 替代 |
| [#4838](https://github.com/librefang/librefang/pull/4838) 🆕 | feat(kernel,memory): persist workflow runs to SQLite | 解决 #4715：工作流运行写入 SQLite，在 daemon 重启后恢复 |
| [#4716](https://github.com/librefang/librefang/pull/4716) ✅ | fix(kernel): drain in-flight workflow runs on graceful shutdown | 优雅关闭时将 Running/Pending 工作流转为 Paused 并持久化 |
| [#4750](https://github.com/librefang/librefang/pull/4750) ✅ | fix(kernel): add exponential backoff to workflow retry on QuotaExceeded | 修复 #4747：重试循环加入指数退避，避免在 60s 滑动窗口内全部失败 |
| [#4801](https://github.com/librefang/librefang/pull/4801) ✅ | fix(kernel): pre-dispatch provider budget gate prevents streaming token leak | 修复 #4800：在 `send_message_full_with_upstream` 和 `send_message_ephemeral` 前置检查供应商预算，防止流式泄漏 |
| [#2765](https://github.com/librefang/librefang/pull/2765) ✅ | feat(channels): download channel files to disk for agent access | Telegram 等渠道的文件现在下载到 `/tmp/librefang_uploads/`，供 LLM 访问 |
| [#2977](https://github.com/librefang/librefang/pull/2977) ✅ | fix(llm-drivers): tolerate trailing chars in tool call arguments | 修复 DeepSeek-R1、Qwen 3.5 等思维模型流式输出中 JSON 后的残留 token |
| [#2289](https://github.com/librefang/librefang/pull/2289) ✅ | fix(channels): prevent UTF-8 panic in split_message for non-ASCII text | 修复多字节 UTF-8 字符（emoji、CJK、阿拉伯文等）在消息分块时 panic 的问题 |
| [#4133](https://github.com/librefang/librefang/pull/4133) ✅ | fix(kernel): remove duplicate warn_missed_fires in cron.rs | 清理遗留的重复方法定义 |
| [#4809](https://github.com/librefang/librefang/issues/4809) ✅ | feat(dashboard): replace TagInput with multi-select picker for agent skills and MCP servers | Agent 编辑表单的 skills/MCP servers 字段改为多选下拉框 |
| [#4702](https://github.com/librefang/librefang/issues/4702) ✅ | feat(llm-driver): LlmDriver capability metadata + capability-aware FallbackChain routing | FallbackChain 现在根据驱动能力路由（vision/image_file），避免不支持的驱动接收到它无法处理的请求 |
| [#2524](https://github.com/librefang/librefang/pull/2524) ✅ | fix(api): use is_some_and instead of map_or | 消除 clippy 警告（Rust 1.94 升级后 `unnecessary_map_or` 为硬错误） |
| [#2385](https://github.com/librefang/librefang/pull/2385) ✅ | fix(runtime): tolerate tool_call_id collisions across turns in session_repair | 修复跨轮次 tool_call_id 冲突导致的 session_repair 错误配对问题 |

### 📋 待合并 PRs

| PR | 描述 | 关联 Issue |
|----|------|-----------|
| [#4841](https://github.com/librefang/librefang/pull/4841) | feat(channels): separate IMAP and SMTP credentials in EmailConfig | #4840 |
| [#4839](https://github.com/librefang/librefang/pull/4839) | feat(dashboard): render per-parameter form fields for workflow runs | #4835 |
| [#4838](https://github.com/librefang/librefang/pull/4838) | feat(kernel,memory): persist workflow runs to SQLite | #4715 |

---

## 4. 社区热点

### 🔥 最活跃 Issues（按评论数排序）

1. **[#4686](https://github.com/librefang/librefang/issues/4686)** — `Plugins throwing error while installing on GCP (Free Tier)` — 🔴 已关闭 | 6 条评论
   - **诉求**：用户在 GCP Free Tier 部署时安装插件报错，附截图
   - **背景**：同时报告的还有 #4684（Hands 页面为空）、#4836（MCP 服务器未连接），均为 GCP Free Tier 环境下的安装/运行问题

2. **[#4684](https://github.com/librefang/librefang/issues/4684)** — `Hands page showing empty and 0 hands active` — 🔴 已关闭 | 5 条评论
   - **诉求**：GCP Free Tier 用户按官方部署指南安装后，Hands 功能完全不可用

3. **[#4834](https://github.com/librefang/librefang/issues/4834)** — `feat(workflows): allow steps to reference existing registry agents` — 🟡 开放 | 2 条评论
   - **诉求**：当前 workflow steps 只能通过父级 orchestrator 派生出短暂的子 agent，无法使用已配置好的、带有特定 skills/MCP servers/budget 的注册 agent
   - **影响**：限制 workflow 的灵活性和资源复用

4. **[#4837](https://github.com/librefang/librefang/issues/4837)** — `feat(dashboard): support adding multiple channel instances from the UI` — 🟡 开放 | 1 条评论
   - **诉求**：kernel 已支持 `[[channels.telegram]]` 多实例配置（TOML 数组），但 dashboard 没有 UI 来添加和管理这些多实例

5. **[#4818](https://github.com/librefang/librefang/issues/4818)** — `[main red] CI failure on PR #4816` — 🔴 已关闭 | 1 条评论
   - **诉求**：Quality CI job 失败，commit `dd7791c` 相关，需关注 CI 健康度

---

## 5. Bug 与稳定性

### 🔴 高优先级（已有 fix PR）

| Issue | 描述 | Fix PR | 状态 |
|-------|------|--------|------|
| [#4747](https://github.com/librefang/librefang/issues/4747) | 工作流重试循环在 burst 窗口内同步重试，必在 QuotaExceeded 失败 | [#4750](https://github.com/librefang/librefang/pull/4750) ✅ 已合并 | 需关注 |
| [#4800](https://github.com/librefang/librefang/issues/4800) | 流式响应在供应商预算耗尽后仍继续泄漏 tokens | [#4801](https://github.com/librefang/librefang/pull/4801) ✅ 已合并 | 已修复 |
| [#4825](https://github.com/librefang/librefang/issues/4825) | 流式路径中 prompt-leak 检测在文本已发送后才运行 | — | 需跟进 |
| [#4842](https://github.com/librefang/librefang/issues/4842) | deepseek-v4-flash 缺少 `reasoning_content` 多轮处理，工具调用后失败 | — | 新报告 |

### 🟡 中优先级

| Issue | 描述 | Fix PR | 状态 |
|-------|------|--------|------|
| [#4686](https://github.com/librefang/librefang/issues/4686) | GCP Free Tier 插件安装报错 | — | 已关闭（用户问题?） |
| [#4684](https://github.com/librefang/librefang/issues/4684) | GCP Free Tier Hands 页面为空 | — | 已关闭 |
| [#4836](https://github.com/librefang/librefang/issues/4836) | MCP 服务器（filesystem, puppeteer）安装但未连接（GCP Free Tier） | — | 新报告 |
| [#4826](https://github.com/librefang/librefang/issues/4826) | WeCom 集成测试缺失 | — | 需跟进 |

---

## 6. 功能请求与路线图信号

以下 Issue 具备明确的 feature description 并有对应 PR 或高优先级标记，预计将进入下一版本：

| Issue | 功能 | PR | 预期影响 |
|-------|------|-----|---------|
| [#4838](https://github.com/librefang/librefang/pull/4838) | workflow runs 持久化到 SQLite | 🟢 待合并 | 核心稳定性，解决 daemon 重启丢失工作流问题 |
| [#4834](https://github.com/librefang/librefang/issues/4834) | workflow steps 可引用已注册的 agent 而非派生临时子 agent | — | workflow 灵活性提升 |
| [#4837](https://github.com/librefang/librefang/issues/4837) | Dashboard UI 支持多 channel 实例管理 | — | 改善用户体验 |
| [#4835](https://github.com/librefang/librefang/issues/4835) | 工作流运行页面渲染参数表单而非自由文本 | [#4839](https://github.com/librefang/librefang/pull/4839) 🟢 | Dashboard UX 改进 |
| [#4833](https://github.com/librefang/librefang/issues/4833) | Agent 详情页支持编辑 skills、MCP servers、budget | — | 缺失的管理能力 |
| [#4840](https://github.com/librefang/librefang/issues/4840) | Email channel 支持 IMAP 和 SMTP 独立凭证 | [#4841](https://github.com/librefang/librefang/pull/4841) 🟢 | 适配更多邮箱提供商 |
| [#4748](https://github.com/librefang/librefang/issues/4748) | per-agent token burst ratio 可配置 | — | 精细化资源配额管理 |
| [#4824](https://github.com/librefang/librefang/issues/4824) | channel_send 出站消息回写到会话上下文 | — | 跨 agent 上下文传递 |

**路线图信号**：当前迭代以 **kernel 稳定性** 和 **Dashboard 功能完善** 为主线，预计下一个 milestone 将聚焦工作流系统的健壮化和用户体验提升。

---

## 7. 用户反馈摘要

从 Issues 评论和使用场景中提取的典型用户声音：

### 痛点
- **GCP Free Tier 兼容性问题**：多位用户（@AIHunter83 等）在 GCP Free Tier 环境下遇到插件安装失败、MCP 服务器无法连接、Hands 功能不可用等问题。这可能与 Free Tier 的资源限制（无持久磁盘、内存约束）相关，官方部署文档可能需要补充相关说明。
- **Workflow 不可靠**：`drain_on_shutdown` 缺失导致 daemon 重启时工作流永久丢失，用户对任务连续性有强烈诉求。
- **流式 token 泄漏**：供应商预算耗尽后仍在计费，这是生产环境的成本风险。

### 诉求
- **开箱即用的 Dashboard 管理能力**：用户希望在 UI 中管理 agent 的 skills/MCP servers/budget，以及配置多个 channel 实例，而不是手动编辑 TOML 文件。
- **多渠道文件处理**：希望 bot 能直接访问通过 Telegram 等渠道收到的文件（如 PDF、文档），而非只能通过临时 URL。
- **更好的 error feedback**：DeepSeek v4 flash 等模型的 reasoning_content 未被正确处理时，错误信息不够清晰。

### 满意点
- **内核能力**：FallbackChain 的 capability-aware 路由、LlmDriver 元数据等底层设计获得认可。
- **多协议邮件支持**：分离 IMAP/SMTP 凭证的需求反映了用户使用企业邮箱/安全邮箱的实际场景。

---

## 8. 待处理积压

以下 Issue 已开放超过 48 小时，尚未分配或进入 PR，建议维护者关注：

| Issue | 描述 | 开放时间 | 优先级 | 备注 |
|-------|------|---------|--------|------|
| [#4842](https://github.com/librefang/librefang/issues/4842) | deepseek-v4-flash reasoning_content 处理缺失 | 2026-05-09 | 🔴 高 | 新报告，需确认是否 regression |
| [#4833](https://github.com/librefang/librefang/issues/4833) | Agent 配置面板缺失 skills/MCP/budget 编辑 | 2026-05-09 | 🟡 中 | 明确需求，已有设计讨论 |
| [#4836](https://github.com/librefang/librefang/issues/4836) | MCP 服务器 GCP Free Tier 连接失败 | 2026-05-09 | 🔴 高 | 与 #4686/#4684 同类问题聚集 |
| [#4825](https://github.com/librefang/librefang/issues/4825) | 流式 prompt-leak 检测时机问题 | 2026-05-09 | 🟡 中 | 安全相关，需 review |
| [#4826](https://github.com/librefang/librefang/issues/4826) | WeCom 集成测试缺失 | 2026-05-09 | 🟢 低 | 技术债务，跟进即可 |
| [#4824](https://github.com/librefang/librefang/issues/4824) | channel_send 出站消息回写会话 | 2026-05-

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# openfang 项目动态日报

**日期**：2026-05-10  
**项目**：RightNow-AI/openfang  
**数据周期**：过去24小时

---

## 1. 今日速览

过去24小时内，openfang 项目保持较高活跃度，共产生 **4 条 Issue 更新** 和 **2 条 Pull Request**。整体健康度良好，Issue 关闭率保持 25%。今日社区重点聚焦于**安全架构增强**和** Claude Code 集成能力**，核心贡献者 @benhoverter 提交了两个相互依赖的大型功能 PR（#1182、#1183），旨在为 agent 运行时引入 MCP 桥接能力和细粒度文件访问控制策略。暂未产生新版本发布。

---

## 2. 版本发布

**无新版本发布。** 最近一个已关闭的 Issue #1065 涉及 v0.5.9 版本中 agent 创建任务的功能缺陷，该问题已于 2026-05-09 关闭标记。

---

## 3. 项目进展

今日有 **2 个新 PR 处于开放状态**，尚未合并：

| PR | 标题 | 作者 | 状态 | 关联 Issue |
|----|------|------|------|------------|
| [#1182](https://github.com/RightNow-AI/openfang/pull/1182) | MCP bridge for CC subprocesses + shell pre-gate uplift + approval push surface | @benhoverter | OPEN | Closes #1180 |
| [#1183](https://github.com/RightNow-AI/openfang/pull/1183) | Per-agent file_policy with deny/prompt/read/write tiers | @benhoverter | OPEN | Closes #1181 |

**关键进展解读**：

- **#1182** 引入了 `openfang-mcp-bridge` 组件，实现了 stdio MCP 服务器功能，通过 Unix socket IPC 通道将 Claude Code 子进程中的工具调用请求转发至 daemon 工具调度器，使 Claude Code 可访问 `file_read`、`file_list`、`agent_list`、`channel_send` 等完整工具面。同时包含 shell pre-gate 提升和审批推送界面组件。

- **#1183** 在 #1182 基础上构建，为所有读/写工具站点实现 deny/prompt/read/write 四级权限体系，这是对当前粗糙的 `validate_path` 机制的实质性改进。

> ⚠️ **注意**：#1183 依赖 #1182 的合并，在 #1182 落地前 PR 会呈现包含双方提交的混合状态，建议优先审查 #1182。

---

## 4. 社区热点

**热度最高的 Issues/PRs**（按讨论活跃度排序）：

| 类型 | 编号 | 标题 | 评论数 | 热度分析 |
|------|------|------|--------|----------|
| Issue | [#1179](https://github.com/RightNow-AI/openfang/issues/1179) | WebSocket Does Not Reconnect to Active Session After Page Refresh | 1 | ⭐ 用户核心体验问题 |
| Issue | [#1180](https://github.com/RightNow-AI/openfang/issues/1180) | MCP bridge for Claude Code subprocesses | 0 | 🚀 功能蓝图讨论 |
| Issue | [#1181](https://github.com/RightNow-AI/openfang/issues/1181) | Per-agent file_policy tier system | 0 | 🔒 安全架构升级 |

**热点深度分析**：

- **#1179** 涉及长时间运行 agent 任务时页面刷新导致 WebSocket 无法重连至活跃会话的问题，直接影响用户体验的实时性感知。该问题已有 1 条评论，表明正在积极讨论解决方案。

- **#1180 / #1181** 虽然暂无评论，但对应 PR 已提交，社区正在通过 PR 而非 Issue 驱动推进这些功能，表明核心开发者已有较成熟的实现方案。

---

## 5. Bug 与稳定性

**今日报告的 Bug**：

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|----------|-------|------|------|--------|
| 🟡 中等 | [#1179](https://github.com/RightNow-AI/openfang/issues/1179) | WebSocket 刷新后不重连活跃会话，导致实时输出丢失或出现孤儿任务 | OPEN | 无 |

**详细说明**：

**Issue #1179** - "WebSocket Does Not Reconnect to Active Session After Page Refresh"

- **影响**：长时运行的 agent 任务在页面刷新后无法接收实时更新，用户无法看到任务输出
- **根因推测**：WebSocket 连接未正确携带会话标识进行重连，或服务端 session 状态管理存在问题
- **建议优先级**：中高 — 直接影响核心使用体验
- **当前状态**：待社区响应，建议维护者关注

---

## 6. 功能请求与路线图信号

**今日收到的功能请求**：

| Issue | 请求内容 | 关联 PR | 评估 |
|-------|---------|---------|------|
| [#1180](https://github.com/RightNow-AI/openfang/issues/1180) | Claude Code 子进程访问 OpenFang 工具面 | [#1182](https://github.com/RightNow-AI/openfang/pull/1182) | ✅ 已有实现方案 |
| [#1181](https://github.com/RightNow-AI/openfang/issues/1181) | Agent 级文件访问权限分级控制 | [#1183](https://github.com/RightNow-AI/openfang/pull/1183) | ✅ 已有实现方案 |

**路线图信号解读**：

从 #1180 和 #1181 的设计来看，openfang 正在向**多租户安全隔离**和**模型无关集成**两个方向演进：

1. **安全架构升级**：从当前粗粒度的 workspace-root 锁和 `validate_path` 过滤，升级为 per-agent 的 deny/prompt/read/write 四级权限体系
2. **MCP 生态集成**：通过 MCP bridge 使 Claude Code 能以子进程形式使用 OpenFang 工具面，扩展工具调用灵活性

---

## 7. 用户反馈摘要

**从 Issue #1065 提取的用户痛点**（v0.5.9 版本）：

> 用户报告 agent 在创建任务时"不知道如何处理"，任务结果未出现在聊天中。

**痛点归纳**：
- ❌ Agent 任务创建能力缺失
- ❌ 任务执行结果反馈不透明
- ⚠️ 重要性标注为"very important"

**该问题已于 2026-05-09 关闭**，推测已修复或用户放弃追踪。

---

## 8. 待处理积压

**需要维护者关注的长期待处理项**：

| 编号 | 标题 | 创建时间 | 当前状态 | 等待时间 | 建议 |
|------|------|----------|----------|----------|------|
| [#1179](https://github.com/RightNow-AI/openfang/issues/1179) | WebSocket 刷新重连 Bug | 2026-05-09 | OPEN | 1 天 | ⏳ 建议尽快分配审查 |
| [#1182](https://github.com/RightNow-AI/openfang/pull/1182) | MCP bridge 功能 | 2026-05-09 | OPEN | 1 天 | ⏳ 依赖方 #1183 已提交，建议优先合并 |
| [#1183](https://github.com/RightNow-AI/openfang/pull/1183) | file_policy 权限系统 | 2026-05-09 | OPEN | 1 天 | ⏳ 需 #1182 合并后处理 |

**积压评估**：整体积压压力较低，所有活跃项均为当日新增。核心问题是 #1179 的 WebSocket Bug 需要响应，以及 #1182/#1183 两个大型功能 PR 需要代码审查。

---

## 指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issues | 3 | ↗️ 活跃 |
| 关闭 Issues | 1 | ↗️ 健康 |
| 新增 PRs | 2 | ↗️ 高产 |
| 版本发布 | 0 | ➖ |
| 平均处理时长 | 当日新增，暂无数据 | — |

---

*报告生成时间：2026-05-10 | 数据来源：GitHub API | 下一更新：2026-05-11*

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*