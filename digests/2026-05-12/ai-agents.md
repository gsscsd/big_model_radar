# OpenClaw 生态日报 2026-05-12

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-12 02:30 UTC

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
## 2026-05-12

---

## 1. 今日速览

OpenClaw 项目在过去 24 小时内保持极高活跃度，共产生 **500 条 Issues 更新**（445 新开/活跃 + 55 关闭）和 **500 条 PRs 更新**（442 待合并 + 58 已合并/关闭）。项目连续发布三个 beta 版本（v2026.5.10-beta.3/4/5），主要聚焦于 CI 流程优化、Vitest 严格规则启用及 TypeScript 编译器检查加强。社区热度持续高涨，涌现大量关于 Agent 行为回归、Gateway 性能瓶颈及多渠道集成 Bug 的讨论。安全相关工作（敏感数据脱敏、CVE 修复）稳步推进，整体项目健康度评级为 **活跃迭代期**。

---

## 2. 版本发布

### v2026.5.10-beta.5
📦 **发布时间**: 2026-05-12  
🔗 **链接**: https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.5

| 变更类型 | 描述 |
|---------|------|
| CI | 新增非阻塞 `plugin-inspector-advisory` artifact 至 Plugin Prerelease，使发布运行可捕获捆绑插件兼容性分类，而不改变阻塞门控 |
| Runtime/Fly | 通过运行时环境变量检测 Fly Machines 为容器环境，以便 gateway 绑定 |

---

### v2026.5.10-beta.4
📦 **发布时间**: 2026-05-12  
🔗 **链接**: https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.4

| 变更类型 | 描述 |
|---------|------|
| CI | 新增非阻塞 `plugin-inspector-advisory` artifact 至 Plugin Prerelease |
| Runtime/Fly | 通过运行时环境变量检测 Fly Machines 为容器环境 |

---

### v2026.5.10-beta.3
📦 **发布时间**: 2026-05-12  
🔗 **链接**: https://github.com/openclaw/openclaw/releases/tag/v2026.5.10-beta.3

| 变更类型 | 描述 |
|---------|------|
| Build | 启用更严格的 Vitest lint 规则，覆盖 focused、disabled、conditional、hook、matcher 及 expectation 风险项 |
| Build | 在共享格式化配置中固定显式 oxfmt 默认值，确保跨版本升级时格式化行为稳定 |
| TypeScript | 启用更严格的编译器检查 |

---

## 3. 项目进展

过去 24 小时内合并/关闭的重要 PRs：

| PR # | 标题 | 状态 | 关键内容 |
|------|------|------|---------|
| [#80760](https://github.com/openclaw/openclaw/issues/80760) | Codex context-engine projection caps LCM output | CLOSED | 修复 context-engine 输出被截断至 24k 字符的问题 |
| [#80777](https://github.com/openclaw/openclaw/issues/80777) | pre-`#75095` plaintext-token entries never scrubbed | OPEN | 修复历史配置审计日志中明文 token 未脱敏的安全问题 |
| [#80848](https://github.com/openclaw/openclaw/pull/80848) | Telegram: keep topic context after reset boundary | OPEN | Telegram 消息缓存选择器改进，保持 reset 边界后的 topic 上下文 |
| [#79691](https://github.com/openclaw/openclaw/pull/79691) | fix(diagnostics): populate inputMessages/outputMessages | OPEN | 诊断事件填充完整的输入/输出消息，支持 OTEL 后端导出 |
| [#80252](https://github.com/openclaw/openclaw/pull/80252) | fix(discord): proxy gateway metadata fetch | OPEN | Discord 网关元数据获取现在遵循配置的代理设置 |
| [#64720](https://github.com/openclaw/openclaw/pull/64720) | fix(security): apply external content protection | OPEN | 渠道消息体应用完整的外部内容保护机制 |

**安全相关 PR**：
- [#79645](https://github.com/openclaw/openclaw/pull/79645) - `appendSessionTranscriptMessage` 内联脱敏修复
- [#60147](https://github.com/openclaw/openclaw/pull/60147) - 更新 vendored A2UI 依赖以消除多个 CVE（CVE-2026-22610、CVE-2026-32635、CVE-2026-2327 等）

---

## 4. 社区热点

以下 Issues 获得最多社区关注和评论：

### 热度排行榜

| Issue # | 标题 | 评论数 | 👍 | 状态 |
|---------|------|--------|-----|------|
| [#76877](https://github.com/openclaw/openclaw/issues/76877) | 2026.5.2 Agents stop responding mid work | 14 | 4 | CLOSED |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent never completes anything (regression) | 12 | 1 | OPEN |
| [#80319](https://github.com/openclaw/openclaw/issues/80319) | QA tool-defaults suite conflates Codex-native tools | 12 | 1 | OPEN |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) | Agent can promise follow-up without starting action | 12 | 2 | OPEN |
| [#80320](https://github.com/openclaw/openclaw/issues/80320) | [QA harness] mock Pi provider id issue | 10 | 1 | CLOSED |
| [#80312](https://github.com/openclaw/openclaw/issues/80312) | [QA harness] fs.read failure fixture issue | 10 | 1 | CLOSED |
| [#76562](https://github.com/openclaw/openclaw/issues/76562) | High CPU & extreme control-plane RPC latency after upgrade | 10 | 4 | OPEN |

### 热点分析

**Agent 行为回归**（Issue #76877, #62505）：用户普遍反馈 2026.5.x 版本中 Agent 在工具调用后突然无响应，或持续输出模糊状态更新。这是目前社区最关切的 P0 问题，维护团队正在积极调查。

**QA 测试框架问题**（Issues #80319-80434）：大量 Issues 最初被报告为 Codex 运行时 bug，经深入审计后确认为 QA harness/mock fixture 的人工产物，表明测试基础设施正在经历系统性审视。

---

## 5. Bug 与稳定性

### 严重程度排序

#### 🔴 严重 (High Severity)

| Issue # | 描述 | 状态 | 是否有 Fix PR |
|---------|------|------|---------------|
| [#76877](https://github.com/openclaw/openclaw/issues/76877) | 2026.5.2 Agents 中途停止响应，工具调用后无任何输出 | CLOSED | - |
| [#76562](https://github.com/openclaw/openclaw/issues/76562) | 升级后 CPU 接近 100%，控制面 RPC 延迟极高 | OPEN | - |
| [#64267](https://github.com/openclaw/openclaw/issues/64267) | 2026.4.9 版本将 Agent 内部思考过程暴露给用户 | OPEN | - |

#### 🟠 中等 (Medium Severity)

| Issue # | 描述 | 状态 | 是否有 Fix PR |
|---------|------|------|---------------|
| [#61278](https://github.com/openclaw/openclaw/issues/61278) | Gateway 启动过慢（~4分钟），因 hook 初始化阻塞 | OPEN | - |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent 无法完成任何任务（回归） | OPEN | - |
| [#64500](https://github.com/openclaw/openclaw/issues/64500) | globalCircuitBreakerThreshold 按工具阻断而非按配对，导致 ping-pong 循环 | OPEN | - |
| [#63101](https://github.com/openclaw/openclaw/issues/63101) | Feishu 渠道配置验证在升级后失败 | OPEN | - |

#### 🟡 低等 (Low Severity)

| Issue # | 描述 | 状态 | 是否有 Fix PR |
|---------|------|------|---------------|
| [#80437](https://github.com/openclaw/openclaw/issues/80437) | Discord native-slash-command-deploy 失败（回归） | OPEN | - |
| [#62985](https://github.com/openclaw/openclaw/issues/62985) | Telegram 多账户配置错误（回归） | OPEN | - |
| [#64464](https://github.com/openclaw/openclaw/issues/64464) | 浏览器控制启动 Chrome 未设置 DISPLAY 环境变量 | OPEN | - |

### 回归问题汇总

共识别 **9 个标记为 regression 的 Bug**，主要分布在：
- Agent 行为：停止响应、无故中断
- 渠道集成：Discord slash commands、Telegram multi-account、Feishu 配置
- 性能：CPU 飙升、启动延迟

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue # | 请求内容 | 👍 | 预计影响 |
|---------|---------|-----|---------|
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | **敏感数据脱敏** - 配置文件、日志、UI 中的 API keys、tokens 应自动脱敏 | 0 | 安全增强 |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | **Per-agent memory-wiki vault** - 多 Agent 场景下各自独立的知识库配置 | 6 | 架构改进 |
| [#60127](https://github.com/openclaw/openclaw/issues/60127) | **多租户支持** - 单实例 RBAC + 资源隔离，而非多实例部署 | 0 | 企业特性 |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | **支持 Anthropic advisor tool** - 服务器端工具集成 | 0 | 功能扩展 |
| [#59413](https://github.com/openclaw/openclaw/issues/59413) | **Per-candidate retry count** - 模型降级时的重试配置 | 0 | 可靠性增强 |

### 已实现/接近实现的 PR

| PR # | 功能 | 状态 |
|------|------|------|
| [#78851](https://github.com/openclaw/openclaw/issues/78851) | HTTP 连接池化 - 解决每次 Agent 运行需 7-8 秒模型解析的问题 | OPEN |
| [#80661](https://github.com/openclaw/openclaw/pull/80661) | 可配置运行循环重试限制 | OPEN |
| [#64179](https://github.com/openclaw/openclaw/pull/64179) | Agent 工具摘要本地化（zh-CN, ko, ja） | OPEN |

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **版本升级风险高**
   > "Due to a lot of bugs, I could not run anything newer than version 2026.04-23" — Issue #76877
   - 大量用户被困在旧版本，不敢升级

2. **生产环境性能不稳定**
   > "CPU pinned near 100% (Node process) - control-plane RPC latency extremely high" — Issue #76562
   - 升级到 2026.4.29/2026.5.2 后出现严重性能回归

3. **敏感数据泄露担忧**
   > "openclaw.json etc. 中 apikey、token、secretkey 都是明文存储，日志中也未脱敏" — Issue #64046
   - 企业用户对数据安全高度关注

4. **渠道集成碎片化**
   - Discord: WebSocket 正常但 REST API 需代理
   - Feishu: 升级后配置验证失败
   - Telegram: 多账户配置回归
   - WhatsApp: k3s 嵌套容器入站消息丢失

### 用户满意度信号

- **正面**：`memory-wiki` 功能获 6 个 👍，表明知识管理方向正确
- **期待**：多租户、RBAC 功能请求表明企业采用意愿强

---

## 8. 待处理积压

以下 Issues 长期未解决或未获得维护者响应（>14 天无更新）：

| Issue # | 创建日期 | 积压天数 | 描述 | 优先级 |
|---------|----------|---------|------|--------|
| [#58450](https://github.com/openclaw/openclaw/issues/58450) | 2026-03-31 | 42+ 天 | Agent 承诺后续操作但未执行 | 中 |
| [#58479](https://github.com/openclaw/openclaw/issues/58479) | 2026-03-31 | 42+ 天 | 审批对话框成功但执行端未消费 | 高 |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) | 2026-03-29 | 44+ 天 | CLI 后端辅助路径仍绕过 CLI 调度 | 中 |
| [#51049](https://github.com/openclaw/openclaw/issues/51049) | 2026-03-20 | 53+ 天 | WhatsApp 入站消息在 k3s 嵌套容器中不接收 | 中 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 2026-03-16 | 57+ 天 | Steer 模式不在回合中注入消息 | 低 |

### 建议关注

- **Issue #58450**: Agent 承诺行为与实际执行不一致，可能影响用户体验信任度
- **Issue #58479**: 审批流未完成闭环，可能导致业务逻辑错误
- **PR #60147**: 安全 CVE 修复，建议尽快合并

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 总计 | 500 |
| PRs 总计 | 500 |
| 新 Release | 3 |
| 回归 Bug 数 | 9 |
| 安全相关 Issues/PRs | 4 |
| 功能请求 | 15+ |
| 积压未响应 (>14天) | 5+ |

---

*报告生成时间: 2026-05-12 | 数据来源: GitHub OpenClaw Repository*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**: 2026-05-12  
**分析范围**: 15 个开源项目 24 小时动态

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"一超多强、高速分化"**的格局。OpenClaw 以日均 500+ Issues/PRs 的绝对规模占据生态核心位置，而 Hermesagent（~728 条日活动）、librefang（~71 条）等项目形成第二梯队。整体生态处于快速扩张期，多数项目日均合并 10-30 个 PR，表明核心功能迭代旺盛。值得关注的是，**安全与稳定性问题成为全生态共性挑战**：回归 Bug（OpenClaw 9个）、安全漏洞修复（NanoBot CVE、librefang prompt-leak）、Gateway 认证绕过（Hermesagent）等问题的集中涌现，反映出在追求功能迭代速度的同时，技术债务正在累积。生态正向多渠道集成（Discord/Telegram/飞书/微信）、多租户架构、记忆系统强化三个方向快速收敛。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度 | 积压风险 |
|------|-------------|-----------|---------|--------|----------|
| **OpenClaw** | 500 (445新/55关) | 500 (442待/58合) | 3个 beta | 🔴 活跃迭代期 | ⚠️ 高（PR 积压 442） |
| **Hermesagent** | 228 (195新/33关) | 500 (394待/106合) | 1个 ad-hoc | 🔴 极高活跃 | ⚠️ 极高（PR 积压 394） |
| **QwenPaw** | 50 (28新/22关) | 40 (24待/16合) | 无 | 🟢 稳健 | 🟡 中 |
| **PicoClaw** | 12 (4新/8关) | 27 (17待/10合) | v0.2.8-nightly | 🟢 快速迭代 | 🟡 中 |
| **librefang** | 30 (19新/11关) | 41 (12待/29合) | 无 | 🟢 高活跃 | 🟡 中（CI阻塞） |
| **NanoBot** | 34 (11新/7关) | 23 (16待/7合) | 无 | 🟢 高活跃 | 🟡 中 |
| **Zeroclaw** | 19 | 50 (30待/20合) | 无 | 🟢 稳健 | 🟡 中 |
| **IronClaw** | 38 (23新/15关) | 50 (32待/18合) | v0.28.1 | 🟢 良好 | 🟡 中 |
| **NanoClaw** | 20 (4新) | 16 (7待/9合) | 无 | 🟢 优秀 | 🟢 低 |
| **LobsterAI** | 0 | 29 (1待/29合) | 无 | 🟢 高效合并 | 🟢 低 |
| **Moltis** | 4 (1新/3关) | 2 (2合) | 无 | 🟢 稳定维护 | 🟢 低 |
| **openfang** | 1 | 3 (2合/1待) | 无 | 🟡 中高 | 🟢 低 |
| **ZeptoClaw** | 1 (1关) | 0 | 无 | 🟡 低活跃 | 🟢 低 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 静默 | — |
| **EasyClaw** | 0 | 0 | 无 | ⚪ 静默 | — |

**关键数据**：
- 日活动量超 100 条的项目：**3 个**（OpenClaw、Hermesagent、librefang）
- PR 合并率低于 30% 的项目：**OpenClaw** (11.6%)、**Hermesagent** (21.2%)
- 处于静默/维护模式的项目：**3 个**（TinyClaw、EasyClaw、ZeptoClaw 部分）

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心地位

OpenClaw 是本轮分析的**绝对核心参照物**，具有以下标志性特征：

| 维度 | OpenClaw | 生态均值 |
|------|----------|----------|
| 日 PR 吞吐量 | 500 | ~70 |
| 安全相关 PRs | 4 个 (CVE修复、脱敏) | <1 |
| Beta 版本发布频率 | 连续3个/日 | 偶发 |
| 回归 Bug 数量 | 9 个 | <2 |

### 3.2 技术路线差异

| 特性 | OpenClaw | 竞品对比 |
|------|----------|----------|
| **CI 严格化** | Vitest 严格规则、TypeScript 编译器检查 | Hermesagent、NanoClaw 尚未强调 |
| **安全投入** | 脱敏工作流（Issue #64046）、CVE 批量修复 | ZeptoClaw 仅做审计，OpenClaw 深度治理 |
| **Provider 生态** | OpenAI、Anthropic、DeepSeek 覆盖 | librefang、NanoBot 各自扩展 |
| **多渠道集成** | Telegram/Discord/飞书/Feishu/WhatsApp 全覆盖 | PicoClaw 聚焦 Telegram，IronClaw 侧重 Slack |

### 3.3 社区规模对比

OpenClaw 的社区规模约为：
- **Hermesagent 的 2.2 倍**（500 vs 228 Issues）
- **QwenPaw 的 10 倍**（500 vs 50 Issues）
- **NanoBot 的 14.7 倍**（500 vs 34 Issues）

**但规模≠健康**：OpenClaw PR 合并率仅 11.6%，远低于 NanoClaw (56%) 和 LobsterAI (97%)，反映出高吞吐量下的质量瓶颈。

---

## 4. 共同关注的技术方向

以下需求在**多个项目**中同步涌现，表明行业正在形成共识：

### 4.1 多租户与用户隔离

| 项目 | 具体诉求 |
|------|----------|
| **NanoBot** | `~/.nanobot/users/<ulid>/` 多租户架构（#3749 已合并） |
| **NanoClaw** | per-group 记忆隔离（#2419 Hindsight MCP） |
| **librefang** | Channel N:M agent 绑定（#4926） |
| **Hermesagent** | 单实例 RBAC + 资源隔离（#60127） |

**核心诉求**：单一部署实例支持多用户/多 Agent，避免隔离失败导致的状态污染。

### 4.2 敏感数据安全治理

| 项目 | 安全痛点 |
|------|----------|
| **OpenClaw** | 明文 token 未脱敏（#64046、#79677） |
| **librefang** | Prompt-leak 检测失效（#4825）、at-rest token 明文存储（#4911 已修复） |
| **Hermesagent** | Gateway 认证绕过（#23778 P0） |
| **ZeptoClaw** | 主动推进安全审计流程（#584） |

**行业信号**：随着企业级采用加速，数据安全正从"可选加固"变为"必须功能"。

### 4.3 工具 Schema 优化与 Token 成本控制

| 项目 | 需求描述 | 👍 支持 |
|------|----------|--------|
| **Hermesagent** | 懒加载工具 Schema（#6839） | 8 |
| **Hermesagent** | 混合工具预选 RAG 风格（#13332） | 5 |
| **librefang** | Provider-aware token budget（#4922） | — |
| **OpenClaw** | 压缩阈值 per-model 覆盖（#19110） | — |

**背景**：本地模型部署用户对 token 开销极度敏感，50+ 工具全量注入单次调用消耗 3,500-5,000 tokens。

### 4.4 富媒体与多模态消息

| 项目 | 功能进展 |
|------|----------|
| **PicoClaw** | 消息工具媒体附件支持（#2856 待合并） |
| **PicoClaw** | Telegram 媒体组专辑处理（#2758 已合并） |
| **librefang** | Telegram 语音 MIME 识别修复（#4934） |
| **IronClaw** | 非图片附件 UI（#3331 待合并） |

### 4.5 记忆系统强化

| 项目 | 记忆方向 |
|------|----------|
| **NanoClaw** | Hindsight 长期记忆 MCP（#2419 已合并） |
| **Hermesagent** | 认知记忆操作 LLM 驱动（#509） |
| **QwenPaw** | auto_memory_interval 索引同步（#4224） |
| **librefang** | KV memory 持久化修复（#4936 进行中） |

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心能力 | 差异化优势 |
|------|----------|-----------|
| **OpenClaw** | 全渠道 Agent 网关 | 渠道覆盖最广（7+）、CVE 响应最快 |
| **Hermesagent** | 桌面应用 + 多 Agent 协作 | Electron GUI 里程碑临近（#20059）、A2A 协议布局 |
| **librefang** | Workflow/Trigger 系统 | Pausable workflow、event-driven 触发（#4911/#4909/#4910） |
| **IronClaw** | Reborn 架构重构 | AgentLoopDriver 契约、LoopCheckpointState 持久化 |
| **QwenPaw** | 企业集成 | 钉钉/飞书深度集成、印尼语国际化 |
| **NanoBot** | 多租户 WebUI | 美团 LongCat provider 支持 |
| **PicoClaw** | 嵌入式/硬件 | LicheeRV 文档、Raspberry Pi 支持、Yocto 部署 |
| **LobsterAI** | 有道生态集成 | POPO 多机器人、记忆 Tab 重构 |

### 5.2 目标用户

| 用户类型 | 推荐项目 | 理由 |
|----------|----------|------|
| 企业级多租户部署 | **OpenClaw** / **Hermesagent** | RBAC、资源隔离、审计日志 |
| 隐私敏感场景 | **librefang** | prompt-leak 检测、workspace 权限分层 |
| 开发者/极客 | **PicoClaw** | 硬件平台、嵌入式部署 |
| 中文企业用户 | **QwenPaw** / **LobsterAI** | 钉钉/飞书/POPO 深度集成 |
| 快速原型验证 | **NanoBot** / **NanoClaw** | 轻量、多渠道、低门槛 |

### 5.3 技术架构差异

| 维度 | OpenClaw | Hermesagent | librefang | IronClaw |
|------|----------|-------------|-----------|----------|
| **语言** | TypeScript | Python/JS | Python | Rust |
| **Agent 循环** | Gateway-centric | CLI/Desktop | Workflow-driven | Reborn 架构 |
| **沙箱** | 容器化 | Skills 系统 | Workspace RO/RW | WASM ProductAdapter |
| **多 Agent** | 单体多渠道 | MCP fleet | Workflow orchestration | 尚在设计 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────────┐
│                        生态活跃度分层                            │
├─────────────────────────────────────────────────────────────────┤
│  🔴 超高活跃（规模迭代期）                                      │
│     OpenClaw, Hermesagent                                        │
│     特征：PR 积压严重，质量门禁压力大                            │
│                                                                 │
│  🟠 高活跃（功能扩张期）                                        │
│     librefang, QwenPaw, PicoClaw, IronClaw                      │
│     特征：稳定合并节奏，部分功能 PR 待 Review                    │
│                                                                 │
│  🟢 中等活跃（稳定维护期）                                      │
│     NanoBot, Zeroclaw, NanoClaw, LobsterAI, Moltis              │
│     特征：PR 合并率健康，偶发 Bug 修复                           │
│                                                                 │
│  ⚪ 低活跃（维护/静默）                                          │
│     openfang, ZeptoClaw, TinyClaw, EasyClaw                    │
│     特征：低频更新，聚焦安全或特定功能                           │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 阶段 | 项目 | 典型特征 |
|------|------|----------|
| **快速增长期** | Hermesagent、OpenClaw | 版本高频（3个/日）、API 尚未稳定、文档滞后 |
| **功能收敛期** | librefang、IronClaw | 架构重构、核心契约定义、功能边界清晰化 |
| **稳定维护期** | LobsterAI、Moltis | Bug 修复为主、PR 合并率高、版本节奏规律 |
| **功能冻结期** | ZeptoClaw | 安全审计主导、无功能迭代 |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

**趋势 1：安全从"事后修复"转向"内生设计"**
- OpenClaw（脱敏工作流）、librefang（prompt-leak 检测）、ZeptoClaw（主动审计）均体现此转变
- 建议：开发者应将安全纳入设计初期，而非版本后期补丁

**趋势 2：多 Agent 协作从概念走向实现**
- Hermesagent A2A 协议支持（#514，67天未响应但需求明确）
- librefang workflow orchestration、NanoClaw Hindsight MCP
- 预计 6-12 个月内出现成熟的多 Agent 协作框架

**趋势 3：Token 成本优化成为核心竞争力**
- 懒加载工具 Schema（#6839，8 👍 最高）
- Provider-aware token budget、per-model 压缩阈值
- 本地模型用户（Ollama/Jan等）驱动此需求爆发

**趋势 4：桌面应用成为 Agent 产品化必争之地**
- Hermesagent Electron GUI 测试构建就绪
- IronClaw Reborn 二进制独立

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**: 2026-05-12  
**项目**: HKUDS/nanobot  
**数据来源**: GitHub Issues & Pull Requests

---

## 1. 今日速览

2026-05-12 是 NanoBot 项目的**高活跃度日**。过去24小时内共产生 **34 条更新**（11条 Issues + 23条 PRs），其中 **7个 Issues 已关闭**、**7个 PRs 已合并**。项目继续保持强劲的开发节奏，在多租户 WebUI、模型提供商扩展（新增 LongCat）、企业微信文件处理、WebSocket 媒体传输等关键领域均有实质性推进。今日未发布新版本，但积压的 PR 数量仍然较大（待合并16条），建议优先处理已通过验证的修复类 PR。

---

## 2. 版本发布

**无新版本发布**。项目最新 Release 信息请参阅 [Releases 页面](https://github.com/HKUDS/nanobot/releases)。

---

## 3. 项目进展

以下 PR 已于今日合并/关闭，项目整体功能得到显著完善：

| PR # | 标题 | 状态 | 关键进展 |
|------|------|------|----------|
| [#3751](https://github.com/HKUDS/nanobot/pull/3751) | fix(wecom): preserve real filename from SDK | ✅ CLOSED | 修复企业微信发送文件时文件名丢失为 "unknown" 的问题 |
| [#3749](https://github.com/HKUDS/nanobot/pull/3749) | feat(auth): multi-tenant WebUI accounts | ✅ CLOSED | 完成多租户 WebUI 认证架构，从单用户 `~/.nanobot/` 迁移到 `~/.nanobot/users/<ulid>/` |
| [#3673](https://github.com/HKUDS/nanobot/pull/3673) | fix(websocket): pass media through in _dispatch_envelope | ✅ CLOSED | 修复 WebSocket 消息中 media 字段被静默丢弃的问题 |
| [#3733](https://github.com/HKUDS/nanobot/pull/3733) | fix(webui): shim crypto.randomUUID for non-secure contexts | ✅ CLOSED | 解决 LAN 访问时 `crypto.randomUUID` 在非安全上下文未定义的问题 |
| [#3734](https://github.com/HKUDS/nanobot/pull/3734) | fix(providers): wire MiMo to thinking_type | ✅ CLOSED | 修复 Xiaomi MiMo 上 `reasoning_effort: null` 无法禁用思考模式的问题 |
| [#3736](https://github.com/HKUDS/nanobot/pull/3736) | feat: add LongCat (美团) provider support | ✅ CLOSED | 新增美团 LongCat 作为 OpenAI 兼容的 LLM 提供商 |

**亮点推进方向**：
- **多租户架构落地**：`#3749` 的合并标志着 NanoBot 从单用户向多用户支持迈出关键一步，WebUI 已支持 per-user 状态隔离
- **企业微信体验优化**：#3751 解决了长期困扰用户的文件名乱码问题
- **提供商生态扩展**：新增美团 LongCat provider（#3736），覆盖国内更多 LLM 服务

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最为活跃或获得较多社区关注：

### 🔥 热点 Issue

**[#3689](https://github.com/HKUDS/nanobot/issues/3689)** `[enhancement] 中断会话丢失上一轮会话的聊天记录`
- **作者**: @lyh161 | 评论: 2 | 状态: OPEN
- **核心诉求**: 用户中断 NanoBot 执行时，会话上下文和执行步骤丢失，期望打断后仍能记住对话历史
- **影响组件**: Channel (WeChat, Feishu, Telegram, etc.)
- **分析**: 这是典型的大模型 Agent 上下文管理问题，用户希望实现更平滑的中断恢复机制，可能需要引入 checkpoint 或状态持久化

**[#3744](https://github.com/HKUDS/nanobot/issues/3744)** `[enhancement] session级别MEMORY功能请求`
- **作者**: @IamWWT | 评论: 2 | 状态: OPEN
- **核心诉求**: 多个 IM 用户共用同一 agent 时，USER.md 和 MEMORY.md 机制如何隔离？
- **分析**: 与 #3749 多租户 PR 紧密相关，社区对多用户场景下的状态隔离有强烈需求

**[#3746](https://github.com/HKUDS/nanobot/issues/3746)** `[bug] WebUI: markdown renderer eagerly preloads a >1 MB code-highlighting chunk`
- **作者**: @Ygrowly | 状态: OPEN
- **问题描述**: WebUI 启动后预加载超过 1MB 的 markdown/code-highlighting 资源，即使会话从未渲染代码块
- **影响**: 首屏加载性能和生产环境带宽

### 🔥 热点 PR

**[#3714](https://github.com/HKUDS/nanobot/pull/3714)** `feat(config): add ModelPresetConfig and runtime preset switching`
- **作者**: @chengyongru | 状态: OPEN
- **亮点**: 引入命名模型预设和原子级运行时切换能力，支持动态调整 model、provider、max_tokens 等参数
- **社区价值**: 解决用户在 /model 切换（#3742）场景下的核心诉求

**[#3747](https://github.com/HKUDS/nanobot/pull/3747)** `feat(feishu): add topic_isolation config switch`
- **作者**: @yorkhellen | 状态: OPEN
- **亮点**: 飞书渠道新增 topic_isolation 配置开关，支持群聊中按主题隔离会话或共享统一会话

**[#3729](https://github.com/HKUDS/nanobot/pull/3729)** `refactor(tools): plugin architecture with self-describing tools`
- **作者**: @chengyongru | 状态: OPEN
- **亮点**: 将硬编码的 AgentLoop._register_default_tools() (~50行) 重构为自描述插件模式 (~25行)
- **架构价值**: 大幅提升工具系统的可扩展性

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

| 严重度 | Issue # | 问题描述 | 已有 Fix PR? |
|--------|---------|----------|-------------|
| 🔴 **高** | [#3739](https://github.com/HKUDS/nanobot/issues/3739) | MCP 服务未启动时启动 nanobot agent 报错 | ❌ 待处理 |
| 🟡 **中** | [#3746](https://github.com/HKUDS/nanobot/issues/3746) | WebUI markdown renderer 预加载 >1MB 资源 | ❌ 待处理 |
| 🟢 **低** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | DuckDuckGo 搜索导致整个系统挂起 | ✅ 已关闭（需确认 fix PR） |

**已修复 Bug**：
- ✅ 企业微信文件名称丢失（[#3737](https://github.com/HKUDS/nanobot/issues/3737) → [#3751](https://github.com/HKUDS/nanobot/pull/3751)）
- ✅ Xiaomi MiMo `reasoning_effort: null` 无法禁用思考（[#3585](https://github.com/HKUDS/nanobot/issues/3585) → [#3734](https://github.com/HKUDS/nanobot/pull/3734)）
- ✅ WebSocket media 字段被静默丢弃（[#3673](https://github.com/HKUDS/nanobot/pull/3673)）

**建议维护者关注**：
- [#3739](https://github.com/HKUDS/nanobot/issues/3739) 尚未有对应的 fix PR，MCP 服务异常处理逻辑需要加强

---

## 6. 功能请求与路线图信号

今日收到的功能请求，按实现可能性排序：

### 很可能纳入下一版本
| 请求 | Issue/PR | 关联已有 PR | 评估 |
|------|----------|------------|------|
| `/model` 斜杠命令切换模型 | [#3742](https://github.com/HKUDS/nanobot/issues/3742) | [#3714](https://github.com/HKUDS/nanobot/pull/3714) | 高概率，ModelPresetConfig 已实现运行时切换 |
| `/insights` 历史 token 使用统计 | [#3731](https://github.com/HKUDS/nanobot/issues/3731) | [#3735](https://github.com/HKUDS/nanobot/pull/3735) | 高概率，PR 已 open |
| 飞书 topic_isolation 开关 | — | [#3747](https://github.com/HKUDS/nanobot/pull/3747) | 高概率，PR 已 open |

### 值得考虑
| 请求 | Issue | 评估 |
|------|-------|------|
| 打断时保留上下文 | [#3689](https://github.com/HKUDS/nanobot/issues/3689) | 中等，需要 agent checkpoint 机制 |
| session 级别 MEMORY 多用户隔离 | [#3744](https://github.com/HKUDS/nanobot/issues/3744) | 与 #3749 多租户架构契合 |
| Provider-hosted web search 支持 | [#3741](https://github.com/HKUDS/nanobot/issues/3741) | [#3743](https://github.com/HKUDS/nanobot/pull/3743) PR 已 open |
| Bot 名称和图标自定义 | [#3650](https://github.com/HKUDS/nanobot/issues/3650) | 已有对应 issue，已 closed |

### 长期路线图信号
| 请求 | PR | 评估 |
|------|-----|------|
| MGP (Memory Governance Protocol) sidecar | [#3408](https://github.com/HKUDS/nanobot/pull/3408) | 跨会话治理记忆，架构意义重大 |
| Multi-role agent squad for HF Spaces | [#3621](https://github.com/HKUDS/nanobot/pull/3621) | 多 Agent 编排能力 |
| Atomic Chat 作为本地 LLM provider | [#3750](https://github.com/HKUDS/nanobot/pull/3750) | 扩展本地模型支持 |

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的用户痛点和使用场景：

### 🔧 用户痛点

1. **MCP 服务容错性不足**
   - 用户 @EurusZhang 报告：MCP 服务未启动时启动 nanobot agent 直接报错崩溃
   - 期望：优雅降级或友好提示

2. **企业微信文件体验差**
   - 用户 @MiV1N 反馈：企业微信发送的文件名显示为 "unknown"
   - 现状：已通过 #3751 修复

3. **模型思考内容无法查看**
   - 用户多次请求（见 #3655）：CLI 模式下希望能实时看到模型的 reasoning/thinking 内容
   - 现状：PR #3655 已实现 `show_reasoning` 配置项

4. **多用户场景下的状态管理困惑**
   - 用户 @IamWWT 提问：多个 IM 用户共用 agent 时，USER.md 和 MEMORY.md 如何隔离
   - 背景：随着 #3749 多租户架构合并，这类问题会逐步解决

### 💡 用户满意点

- **Bot 自定义能力**：用户 @mraad 希望自定义 bot 名称和图标（#3650），期望摆脱默认的 "nanobot is thinking..." 和猫图标
- **Token 使用透明度**：使用按量付费 provider（OpenRouter、DeepSeek）的用户强烈需要 `/insights` 功能追踪历史消费

---

## 8. 待处理积压

提醒维护者关注以下长期未响应或需要决策的重要 Issue：

| Issue # | 标题 | 创建日期 | 状态 | 等待时间 | 备注 |
|---------|------|----------|------|----------|------|
| [#3739](https://github.com/HKUDS/nanobot/issues/3739) | MCP 服务未启动报错 | 2026-05-11 | OPEN | 1天 | 🔴 需 fix PR |
| [#3746](https://github.com/HKUDS/nanobot/issues/3746) | WebUI >1MB 资源预加载 | 2026-05-11 | OPEN | 1天 | 🟡 性能问题 |
| [#3742](https://github.com/HKUDS/nanobot/issues/3742) | /model 斜杠命令 | 2026-05-11 | OPEN | 1天 | 已有 #3714 关联 |
| [#3741](https://github.com/HKUDS/nanobot/issues/3741) | Provider-hosted web search | 2026-05-11 | OPEN | 1天 | 已有 #3743 关联 |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) | 中断会话上下文丢失 | 2026-05-08 | OPEN | 4天 | 🟡 用户体验问题 |

### PR 积压统计

当前 **16 个 PR 处于 OPEN 状态**，建议按以下优先级处理：
1. **Bug fix 类**（已有明确问题）：#3740 (MCP port probe), #3738 (VolcEngine)
2. **用户高频需求**（评论/关注多）：#3714 (ModelPresetConfig), #3735 (/insights)
3. **架构重构**（降低长期维护成本）：#3729 (plugin architecture), #3728 (LoopDetectHook)

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues (24h) | 11 | ↑ 高于昨日 |
| PRs (24h) | 23 | ↑ 高于昨日 |
| Issues 关闭率 | 4/11 (36%) | ✅ 健康 |
| PR 合并率 | 7/23 (30%) | ✅ 健康 |
| 待合并 PR | 16 | ⚠️ 需关注 |
| 新增版本 | 0 | — |

---

**报告生成时间**: 2026-05-12  
**数据截止**: 2026-05-12 23:59:59 (UTC)  
**分析师**: AI Assistant (NanoBot Project Analyst)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**报告日期**: 2026-05-12  
**数据统计周期**: 过去 24 小时

---

## 1. 今日速览

Zeroclaw 项目在过去 24 小时内保持高度活跃，共处理 **19 条 Issues** 和 **50 条 PRs**，整体开发节奏稳健。值得关注的是，**v0.8.0 集成工作**（PR #6398）持续推进中，已进入 Draft 阶段并收集社区反馈；另有多个高优先级的 Bug 修复已合并，包括 Matrix 频道消息根识别问题、Discord 媒体传输优化等。当前项目处于功能迭代期，暂无新版本发布，维护团队正集中精力处理 v0.7.x 系列遗留问题，为 v0.8.0 的顺利发布铺路。

---

## 2. 版本发布

**暂无新版本发布**

过去 24 小时内无 Release 更新。社区正积极推进 v0.8.0 集成工作（PR #6398），该版本包含 Schema v3 迁移等重大变更，预计不久后将进入正式审核流程。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR 编号 | 标题 | 类型 | 状态 |
|---------|------|------|------|
| [#6247](https://github.com/zeroclaw-labs/zeroclaw/pull/6247) | Feat/sop webhook dispatch | 功能增强 | ✅ 已合并 |
| [#6585](https://github.com/zeroclaw-labs/zeroclaw/pull/6585) | fix(update): tighten release asset selection | Bug 修复 | ✅ 已合并 |
| [#6569](https://github.com/zeroclaw-labs/zeroclaw/pull/6569) | fix(vscode): remove duplicate --all-targets | CI 优化 | ✅ 已合并 |
| [#6568](https://github.com/zeroclaw-labs/zeroclaw/pull/6568) | fix(channels): gate telegram tests behind feature | 测试修复 | ✅ 已合并 |
| [#6567](https://github.com/zeroclaw-labs/zeroclaw/pull/6567) | fix(ci): add crate paths to labeler.yml | CI 增强 | ✅ 已合并 |
| [#6570](https://github.com/zeroclaw-labs/zeroclaw/pull/6570) | docs(container): correct image registry | 文档修复 | ✅ 已合并 |

**亮点进展**:
- **PR #6579** (Matrix 频道消息处理修复) 已提交，修复了根时间线消息被错误识别为线程根的问题
- **PR #6572** (Discord 媒体传输) 正在进行中，解决了附件重复下载和媒体类型覆盖问题
- **PR #6297** (WhatsApp 交互投票) 持续推进，为所有频道统一添加离散选择 API

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 严重程度 |
|------------|------|--------|-----|----------|
| [#4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083) | Web search tool 在频道模式下无法工作 | 5 | 0 | S1 - 工作流阻塞 |
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) | matrix-sdk v0.16.0 构建失败（递归溢出） | 5 | 0 | S2 - 性能降级 |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | 单轮/多轮对话丢失 user message | 4 | 0 | S1 - 工作流阻塞 |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | 提议支持 SearXNG 搜索并增强 Web Search 健壮性 | 2 | 0 | 功能建议 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 审计：追踪 c3ff635 批量回滚中丢失的 153 个提交 | 2 | 0 | 审计/恢复 |

**热点分析**:
- **Web Search 工具问题**（#4083）持续受到关注，用户反映在 Telegram 频道模式下无法使用 web_search 工具，但 Agent 模式下正常，表明存在平台特定的兼容性问题
- **消息丢失 Bug**（#6034）引发较多讨论，涉及自定义 HTTP provider 的 400 错误，可能与 v3 Schema 迁移有关
- **提交恢复审计**（#6074）反映了社区对代码库完整性的关注，153 个提交的批量回滚需要追踪和可能的恢复

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### 🔴 S1 - 工作流阻塞（Critical）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | 单轮/多轮对话中出现 user message 丢失 | 🟡 Open | 无 |
| [#4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083) | Web search tool 在 Telegram 频道模式下失效 | ✅ Closed | 无明确 Fix PR |

#### 🟠 S2 - 性能降级（High）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) | matrix-sdk v0.16.0 递归限制溢出 | ✅ Closed | 已修复 |
| [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589) | RouterProvider::supports_vision() 与 supports_native_tools() 不一致 | 🟡 Open | 无 |
| [#6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584) | OpenAI-Compatible provider 忽略 `reasoning` 字段 | 🟡 Open | [#6587](https://github.com/zeroclaw-labs/zeroclaw/pull/6587) 已提交 |
| [#6588](https://github.com/zeroclaw-labs/zeroclaw/pull/6588) | Telegram stream_mode=partial 下 TTS 静默禁用 | 🟡 Open | [#6588](https://github.com/zeroclaw-labs/zeroclaw/pull/6588) 已提交 |

#### 🟡 S3 - 次要问题（Medium/Low）

- **#5687**: rust-analyzer VSCode 插件报错
- **#6393**: Docker 安装文档错误
- **#6347**: Telegram 测试在默认 features 下失败
- **#6504**: Cron jobs 表格 UX 问题
- **#6561**: Gateway 非 loopback host 恢复提示安全问题

**稳定性评估**: 今日共处理 9 个 Bug 关闭，整体修复效率良好。仍有 2 个 S1 级别问题待解，建议优先跟进 #6034（消息丢失）和 #4083（Web Search 频道兼容）。

---

## 6. 功能请求与路线图信号

### 新功能提议（Open Issues）

| Issue | 功能描述 | 优先级 | 关联 PR |
|-------|----------|--------|---------|
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | 支持 SearXNG 隐私搜索 + 增强 DuckDuckGo CAPTCHA 检测 | P2 | 无 |
| [#6576](https://github.com/zeroclaw-labs/zeroclaw/issues/6576) | v0.7.6 Matrix live homeserver 冒烟测试 | P2 | 无 |
| [#6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574) | 无 vision 路径时图片消息的可配置行为 | - | 无 |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | Comfy Cloud/ComfyUI 作为共享媒体 provider | P2 | 无 |
| [#6565](https://github.com/zeroclaw-labs/zeroclaw/issues/6565) | Telegram inline-keyboard 点击后显示结果 | P2 | 无 |

### 已有相关 PR 的功能

| PR | 功能 | 进度 |
|----|------|------|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | v0.8.0 集成（Schema v3 迁移） | Draft，收集中 |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) | WhatsApp poll-vote + Channel::send_choice | 进行中 |
| [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) | 工具包装器重构（file/pdf/cron 等） | 进行中 |

**路线图信号**: 
- **v0.8.0** 将是重大更新，包含 Schema v3 迁移，社区应密切关注
- **多媒体能力**（ComfyUI 集成、视频生成）开始布局
- **多渠道增强**（WhatsApp 交互、Telegram UX、Discord 媒体）持续推进

---

## 7. 用户反馈摘要

### 核心痛点

1. **频道模式功能受限**  
   - 用户反馈 Telegram 等频道模式下无法使用 Web Search 工具，但 Agent 模式正常
   - 影响自主代理的完整功能体验

2. **Provider 兼容性问题**  
   - 自定义 HTTP provider (如 Qwen3.5-35B) 出现 400 错误导致消息丢失
   - OpenAI-Compatible providers 的 `reasoning` 字段未被正确处理

3. **文档与实际不一致**  
   - Docker 镜像地址错误（Docker Hub vs GHCR）
   - Homebrew 版本号未同步更新

### 用户场景

- **Telegram 频道用户**: 希望在聊天中直接触发 Web Search，无需切换模式
- **Matrix 用户**: 期待与 matrix-sdk 0.17 的完整兼容性
- **自托管用户**: 关注 Gateway 非本地部署的安全配置

### 积极反馈

- 多个 Bug 修复响应迅速（如 Discord 媒体传输优化）
- 文档纠错流程得到社区积极参与

---

## 8. 待处理积压

### 长期未响应的 Issues（>14 天无维护者回复）

| Issue | 创建时间 | 最后更新 | 状态 | 备注 |
|-------|----------|----------|------|------|
| [#4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083) | 2026-03-20 | 2026-05-11 | Closed | 约 52 天，已关闭但无明确修复 |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | 2026-04-05 | 2026-05-11 | Open | 37 天，功能建议待评估 |

### 高优先级 Open Issues 需要关注

| Issue | 严重程度 | 风险等级 | 说明 |
|-------|----------|----------|------|
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | S1 | High | 消息丢失，影响所有 provider |
| [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589) | S2 | Medium | 多模态路由静默失败 |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | P2 | High | ComfyUI 集成请求 |

### 积压 PRs 提醒

| PR | 类型 | 状态 | 建议 |
|----|------|------|------|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | 集成 | Draft | 建议尽快进入审核流程 |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) | 功能 | Open | 进行中 9 天，建议关注进度 |

---

## 📊 项目健康度指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| 24h Issues 活跃度 | 19 | 📈 +15% (vs 昨日) |
| 24h PRs 活跃度 | 50 | 📈 +23% (vs 昨日) |
| PR 合并率 | 40% (20/50) | ✅ 健康 |
| S1 Bug 待处理 | 2 | ⚠️ 需关注 |
| Open Issues 平均响应时间 | <24h | ✅ 良好 |

---

*本报告由 AI 自动生成，基于 2026-05-12 12:00 UTC 的 GitHub 数据快照。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 - 2026-05-12

## 1. 今日速览

PicoClaw 项目今日保持高度活跃，共处理 27 条 PR 更新（10 已合并/关闭，17 待合并）和 12 条 Issues 更新（4 新开/活跃，8 已关闭）。发布 v0.2.8-nightly.20260512，包含消息工具富媒体支持、WebSocket 实时流式传输等重要功能进展。项目整体处于快速迭代期，社区贡献活跃，多个功能 PR 待合并。

---

## 2. 版本发布

### v0.2.8-nightly.20260512 (2026-05-12)

**类型**: Nightly Build  
**Commit**: 777269b4  
**链接**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> ⚠️ 此为自动构建版本，可能不稳定，请谨慎使用。

本次 Nightly Build 主要承接近期合并的功能 PR，包括消息工具媒体附件支持、Telegram 媒体组处理修复、Bedrock StreamingProvider 实现等。

---

## 3. 项目进展

### ✅ 已合并 PR（10 条）

| PR | 作者 | 主题 | 贡献领域 |
|----|------|------|----------|
| [#2854](https://github.com/sipeed/picoclaw/pull/2854) | @lxowalle | 文档：添加 LicheeRV-Claw AliExpress 资讯 | 文档 |
| [#2758](https://github.com/sipeed/picoclaw/pull/2758) | @bogdanovich | Telegram 媒体组专辑处理修复 | Channel |
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | @loafoe | Bedrock StreamingProvider 实时 token 流 | Provider |
| [#2581](https://github.com/sipeed/picoclaw/pull/2581) | @astrada-c | 从流式事件恢复 Codex 输出 | Provider |
| [#2565](https://github.com/sipeed/picoclaw/pull/2565) | @stpwin | 修复 mention_only=false 配置被忽略问题 | Config |
| [#2831](https://github.com/sipeed/picoclaw/pull/2831) | @SiYue-ZO | Provider 选择与模型表单基础 | Web/API |
| [#2719](https://github.com/sipeed/picoclaw/pull/2719) | @loafoe | 新增 Slack Webhook 输出渠道 | Channel |

### 🔄 待合并 PR（17 条）- 重点关注

1. **[#2856](https://github.com/sipeed/picoclaw/pull/2856)** @bogdanovich - `feat(message): support media attachments and Telegram rich delivery`
   - 将 `message` 工具从纯文本扩展为支持媒体附件
   - 支持 Telegram 原生 text+media 单一逻辑消息
   - 关闭 [#2855](https://github.com/sipeed/picoclaw/issues/2855)

2. **[#2853](https://github.com/sipeed/picoclaw/pull/2853)** @loafoe - `feat(pico): add ChatStream support for real-time token streaming`
   - 为 Pico 渠道添加完整 ChatStream 支持
   - 实时 token 流式传输至 WebSocket 客户端

3. **[#2763](https://github.com/sipeed/picoclaw/pull/2763)** @bogdanovich - `feat(providers): add gemini web search provider`
   - 新增 Gemini Google Search provider
   - 配置方式: `tools.web.provider = "gemini"`

4. **[#2830](https://github.com/sipeed/picoclaw/pull/2830)** @bogdanovich - `fix(spawn): add explicit async delivery policy`
   - 解决子 agent 异步完成后重复注入父 agent 的问题
   - 关闭 [#2829](https://github.com/sipeed/picoclaw/issues/2829)

5. **[#2752](https://github.com/sipeed/picoclaw/pull/2752)** @SiYue-ZO - `feat: improve model configuration workflows`
   - 模型配置工作流改进，包含模型获取、保存目录、连接测试等功能

6. **[#2740](https://github.com/sipeed/picoclaw/pull/2740)** @cjkihl - `fix(deepseek): capture reasoning_content from streaming`
   - 修复 DeepSeek thinking-mode 流式解析丢失 reasoning_content 的问题

---

## 4. 社区热点

### 🔥 热门 Open Issues

| Issue | 主题 | 评论数 | 热度原因 |
|-------|------|--------|----------|
| [#2855](https://github.com/sipeed/picoclaw/issues/2855) | 消息工具扩展支持媒体附件 | 0 | 核心工具能力扩展需求 |
| [#2829](https://github.com/sipeed/picoclaw/issues/2829) | 异步工具结果传递策略提案 | 0 | 架构层面设计讨论 |
| [#2848](https://github.com/sipeed/picoclaw/issues/2848) | edit_file 工具显示 unified diff 预览 | 0 | UX 改进诉求 |

### 📊 今日关闭的 Issues 分析

**8 条 Issues 集中关闭**，涵盖多类问题：
- **Bug 修复**: Android 服务启动、Telegram 地址解析、配置重载破坏语音识别、Gateway 无 channels 问题
- **功能请求**: Serp API 集成、Raspberry Pi 支持、搜索 API Fallback 机制

---

## 5. Bug 与稳定性

### 🐛 今日关闭的 Bug Issues

| Issue | 严重程度 | 问题描述 | 状态 |
|-------|----------|----------|------|
| [#2690](https://github.com/sipeed/picoclaw/issues/2690) | ⚡ 高 | Gateway v0.2.7 启动时无 channels | ✅ 已关闭 |
| [#2684](https://github.com/sipeed/picoclaw/issues/2684) | 🔶 中 | 搜索第三方技能地址解析错误 | ✅ 已关闭 |
| [#2780](https://github.com/sipeed/picoclaw/issues/2780) | 🔶 中 | Reload config 破坏语音识别 | ✅ 已关闭 |
| [#2590](https://github.com/sipeed/picoclaw/issues/2590) | 🔶 中 | Android app 服务无法启动 | ✅ 已关闭 |

### ⚠️ 待处理 Open Bug

| Issue | 问题描述 | 优先级 |
|-------|----------|--------|
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 历史记录中只能查看对话最后一条用户消息 | 🔶 待确认 |

> 📌 提示: [#2796](https://github.com/sipeed/picoclaw/issues/2796) 涉及消息压缩逻辑，用户期望历史消息展示应完整保留，建议关注。

---

## 6. 功能请求与路线图信号

### 🚀 明确的路线图信号

| 功能方向 | 相关 Issue/PR | 状态 | 评估 |
|----------|---------------|------|------|
| **富媒体消息支持** | [#2855](https://github.com/sipeed/picoclaw/issues/2855) / [#2856](https://github.com/sipeed/picoclaw/pull/2856) | PR 待合并 | ⭐ 高概率纳入 |
| **WebSocket 实时流** | [#2853](https://github.com/sipeed/picoclaw/pull/2853) | PR 待合并 | ⭐ 高概率纳入 |
| **搜索 API Fallback** | [#2582](https://github.com/sipeed/picoclaw/issues/2582) | Issue 已关闭 | 🔶 暂缓，可能后续版本考虑 |
| **Edit File Diff 预览** | [#2848](https://github.com/sipeed/picoclaw/issues/2848) | Issue 待跟进 | 🔶 功能增强需求 |
| **Yocto/OpenEmbedded 部署** | [#2851](https://github.com/sipeed/picoclaw/pull/2851) | PR 待合并 | ⭐ 嵌入式部署支持 |

---

## 7. 用户反馈摘要

### 核心痛点

1. **搜索 API 稳定性不足** - 用户报告 Brave Search API 收费后缺乏替代方案，Serp API 请求强烈（[#2232](https://github.com/sipeed/picoclaw/issues/2232)）
2. **移动端体验问题** - Android 服务启动失败（[#2590](https://github.com/sipeed/picoclaw/issues/2590)）
3. **消息历史丢失** - 对话历史中只显示最后一条用户消息（[#2796](https://github.com/sipeed/picoclaw/issues/2796)）

### 场景需求

- **硬件平台扩展**: Raspberry Pi / Pi Zero 2W 支持请求（[#2675](https://github.com/sipeed/picoclaw/issues/2675)）
- **富媒体交互**: Telegram 用户期待消息+媒体一体化发送
- **专业部署**: Yocto/OpenEmbedded 嵌入式构建需求（[#2851](https://github.com/sipeed/picoclaw/pull/2851)）

---

## 8. 待处理积压

### ⚠️ 需要维护者关注的 Items

| 类型 | 编号 | 创建时间 | 状态 | 说明 |
|------|------|----------|------|------|
| Issue | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 2026-05-07 | 🔵 Open | 消息历史显示问题，需确认根因 |
| Issue | [#2855](https://github.com/sipeed/picoclaw/issues/2855) | 2026-05-11 | 🔵 Open | 富媒体功能，PR #2856 已关联 |
| Issue | [#2848](https://github.com/sipeed/picoclaw/issues/2848) | 2026-05-11 | 🔵 Open | Diff 预览功能，待评估 |
| Issue | [#2829](https://github.com/sipeed/picoclaw/issues/2829) | 2026-05-09 | 🔵 Open | 异步传递策略，PR #2830 已关联 |

### 📊 积压统计

- **Open Issues**: 4 条（均为近5日创建）
- **Pending PRs**: 17 条
- **已关闭 Issues**: 8 条（集中处理了一批遗留问题）

---

## 📈 项目健康度评估

| 指标 | 数值 | 评估 |
|------|------|------|
| 24h PR 活跃度 | 27 条 | 🟢 高活跃 |
| Issue 解决率 | 8/12 (67%) | 🟢 良好 |

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-05-12

---

## 1. 今日速览

**项目活跃度：极高（红色繁忙）** 🚨

过去 24 小时，hermes-agent 项目产生了 228 条 Issue 更新（新开/活跃 195 条）和 500 条 PR 更新（待合并 394 条），两项指标均处于极高水平，表明项目处于快速迭代期。今日共合并/关闭 139 条项目元素（33 Issues + 106 PRs），整体向前推进速度稳健。

**核心观察：**
- 桌面应用 PR #20059 提交了 ad-hoc 测试构建，跨平台安装包（macOS ARM64、Windows x64/arm64、Linux AppImage）已就绪，GUI 化里程碑临近。
- 安全类 Bug（#23778 Gateway 认证绕过）引发关注，需优先响应。
- Token 开销优化类功能请求持续高热（#6839 Lazy Loading、#13332 Hybrid Pre-Selection），反映出用户对本地模型部署成本的关切。

---

## 2. 版本发布

### 🆕 desktop-pr20059-installers (ad-hoc test build)
**类型：** 非签名测试版本  
**commit:** `bb/gui` @ `bff052d61`  
**用途：** PR #20059 的 GUI 安装包烟雾测试（Installer UX）

| 平台 | 架构 | 文件名 | SHA-256 |
|------|------|--------|---------|
| macOS | ARM64 | `Hermes-0.0.0-mac-arm64.dmg` | `a598cd3b88df7381a4c52e4c4c65d4c…` |
| Windows | x64 + ARM64 | NSIS 安装包 | — |
| Linux | x64 + ARM64 | AppImage | — |

> ⚠️ **注意：** 此版本为临时 ad-hoc 构建，不具备生产签名，不应作为稳定版本使用。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR（按影响力排序）

| PR # | 类型 | 描述 | 状态 |
|------|------|------|------|
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | Feature | **Hermes 桌面应用** — Electron 构建，跨平台 GUI（截图显示现代化 UI） | Open（测试构建已就绪） |
| [#24103](https://github.com/NousResearch/hermes-agent/pull/24103) | Docs | 修复 Voice & TTS 集成文档中的表格格式错误 | ✅ Closed |
| [#24096](https://github.com/NousResearch/hermes-agent/pull/24096) | Feature | Web Dashboard 聊天页面新增文件上传功能（转换为临时引用） | ✅ Closed |
| [#24120](https://github.com/NousResearch/hermes-agent/pull/24120) | Feature | Setup Wizard 新增 OpenRouter TTS 选项 + CLI trades 命令 + Discord Opus 修复 | Open |
| [#23861](https://github.com/NousResearch/hermes-agent/pull/23861) | Bug Fix | 飞书平台：将 GFM 表格和多行代码块路由至 CardKit 2.0，支持纯文本降级 | Open |
| [#24118](https://github.com/NousResearch/hermes-agent/pull/24118) | Bug Fix | Matrix 网关：移除不安全的成员数量 DM 检测逻辑，修复 2 人群组房间误判 | Open |
| [#19110](https://github.com/NousResearch/hermes-agent/pull/19110) | Feature | Agent 配置：支持 per-model / per-provider 压缩阈值覆盖 | Open |
| [#24099](https://github.com/NousResearch/hermes-agent/pull/24099) | Bug Fix | Docker 环境下的 Skills 文件回退机制修复 | Open |
| [#24104](https://github.com/NousResearch/hermes-agent/pull/24104) | Bug Fix | MCP 工具集：接受 `mcp:server` 和 `MCP server:tool` 格式的 enabled_toolsets | Open |

**今日合并率：** 106/500 ≈ **21.2%**（接近历史均值，积压可控）

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| Issue # | 主题 | 评论数 | 状态 | 热度分析 |
|---------|------|--------|------|----------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | **Bug：长响应被截断（Output length limit）** | 23 | ✅ Closed | CLI/Telegram/Discord 多场景复现，已关闭但可能存在回归风险 |
| [#514](https://github.com/NousResearch/hermes-agent/issues/514) | **Feature：A2A（Agent-to-Agent）协议支持** | 13 | 🟡 Open | 谷歌主导的开源协议（Apache 2.0），社区期待与 MCP 协同的互操作性 |
| [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) | **Bug：Claude Max 20x OAuth Token 每次请求返回 HTTP 400** | 10 | 🟡 Open | P1 高优先级，涉及官方订阅认证流程 |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | **Feature：懒加载工具 Schema（双遍注入）** | 8 | 🟡 Open | 8 👍 最高，聚焦 token 开销优化，本地模型用户强烈诉求 |
| [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) | **Bug：smart_model_routing 触发廉价模型压缩预检** | 5 | 🟡 Open | 模型路由与上下文压缩的边界条件 bug |

**热点趋势分析：**
1. **Token 成本优化** 是当前最集中的诉求（#6839、#13332），反映了用户从云端模型向本地/廉价模型迁移的趋势。
2. **A2A 协议**（#514）代表了对多 Agent 协作生态的前瞻性布局，与 MCP 形成互补。
3. **多平台网关集成**（Discord、飞书、Matrix、Signal）持续有功能请求，表明 Hermes 作为统一 Agent 网关的定位深入人心。

---

## 5. Bug 与稳定性

### 🔴 P0-P1 严重 Bug（需紧急处理）

| Issue # | 标题 | 组件 | 状态 | Fix PR |
|---------|------|------|------|--------|
| [#23778](https://github.com/NousResearch/hermes-agent/issues/23778) | **Gateway 认证绕过** — 未授权用户消息仍被处理 | Gateway / Telegram | 🟡 Open | ❌ 无 |
| [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) | smart_model_routing 触发廉价模型压缩预检 | Agent / CLI | 🟡 Open | ❌ 无 |
| [#7233](https://github.com/NousResearch/hermes-agent/issues/7233) | Telegram 会话恢复后内部 Reasoning 块泄露至聊天 | Gateway / Telegram | 🟡 Open | ❌ 无 |
| [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) | Claude Max 20x OAuth 订阅每请求返回 HTTP 400 | Provider / Anthropic | 🟡 Open | ❌ 无 |
| [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | Matrix 网关缺乏驱动下游调度器的带内通道 | Gateway / Matrix | 🟡 Open | ❌ 无 |
| [#21867](https://github.com/NousResearch/hermes-agent/issues/21867) | Cron 工具 `action='run'` 不触发即时执行 | Cron | 🟡 Open | ❌ 无 |

### 🟡 P2 中等 Bug

| Issue # | 标题 | 组件 | Fix PR |
|---------|------|------|--------|
| [#24072](https://github.com/NousResearch/hermes-agent/issues/24072) | `/model` 切换后 `model.context_length` 未重新解析 | Agent | 无（今日新建） |
| [#11020](https://github.com/NousResearch/hermes-agent/issues/11020) | 浏览器会话生命周期：每轮 cleanup 杀死有头/持久会话 | Agent / Browser | 无 |
| [#23799](https://github.com/NousResearch/hermes-agent/issues/23799) | OpenClaw MCP fleet 每次调用都重建，内存泄漏 | Gateway / MCP | 无 |
| [#23158](https://github.com/NousResearch/hermes-agent/issues/23158) | 无法识别英伟达 base URL 添加 API 提供商 | CLI / Provider | 无 |

### 🟢 今日已关闭的 Bug

| Issue # | 标题 | 备注 |
|---------|------|------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | 响应截断错误 | 23 条评论，疑已修复或延期 |
| [#14637](https://github.com/NousResearch/hermes-agent/issues/14637) | OpenRouter API 401 认证错误 | 7 条评论 |
| [#23949](https://github.com/NousResearch/hermes-agent/issues/23949) | Kimi-K2.6 on Ollama Cloud 被误判为 32K 上下文 | — |
| [#23920](https://github.com/NousResearch/hermes-agent/issues/23920) | `/new` 确认冻结会话 | — |
| [#13618](https://github.com/NousResearch/hermes-agent/issues/13618) | TUI 审批覆盖层冻结终端输入 | — |

---

## 6. 功能请求与路线图信号

### 📋 高价值功能请求（有望进入下一版本）

| Issue # | 功能 | 支持度 | 落地可能性 | 分析 |
|---------|------|--------|-----------|------|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | **懒加载工具 Schema（双遍注入）** | 8 👍 | ⭐⭐⭐ 高 | 社区强烈诉求，#19110 已实现部分压缩阈值覆盖，两者结合可显著降低 token 开销 |
| [#514](https://github.com/NousResearch/hermes-agent/issues/514) | **A2A Agent-to-Agent 协议支持** | 13 评论 | ⭐⭐ 中 | 外部标准化协议，需维护者明确路线图优先级 |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) | **混合工具预选（RAG 风格 Schema 注入）** | 5 👍 | ⭐⭐ 中 | 与 #6839 互补，两阶段方案可减少 LLM 往返 |
| [#509](https://github.com/NousResearch/hermes-agent/issues/509) | **认知记忆操作（LLM 驱动的编码/整合/自适应检索）** | 5 评论 | ⭐⭐ 中 | 灵感来自 CrewAI，有长期路线图价值 |
| [#17871](https://github.com/NousResearch/hermes-agent/pull/17871) | **CLI 模型选择器多选支持** | PR Open | ⭐⭐⭐ 高 | PR 已 Open，功能明确，实现路径清晰 |
| [#24120](https://github.com/NousResearch/hermes-agent/pull/24120) | **OpenRouter TTS 集成 + CLI trades 命令** | PR Open | ⭐⭐⭐ 高 | PR 已 Open，涵盖 TTS/Discord 语音/Signal 多平台 |
| [#20153](https://github.com/NousResearch/hermes-agent/pull/20153) | **Email 平台 SSL 验证跳过选项** | PR Open | ⭐⭐⭐ 高 | PR 已 Open，解决自签名证书痛点 |
| [#24047](https://github.com/NousResearch/hermes-agent/pull/24047) | **Signal 平台消息分类和长消息重组** | PR Open | ⭐⭐⭐ 高 | PR 已 Open，改善 Signal 适配质量 |

### 🛠 平台集成需求（Gateway 扩展）

| Issue # | 平台 | 功能需求 | 评论数 |
|---------|------|----------|--------|
| [#14853](https://github.com/NousResearch/hermes-agent/issues/14853) | Discord | 多 Agent 协作 + 历史注入 + 级联防止 | 6 |
| [#16084](https://github.com/NousResearch/hermes-agent/issues/16084) | 飞书 | CardKit 流式卡片替代 `im.v1.message.update` | 5 |
| [#12688](https://github.com/NousResearch/hermes-agent/issues/12688) | Matrix/Mattermost | 可配置命令前缀（避免与平台斜杠命令冲突） | 4 |
| [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) | Web Dashboard | 多 Profile 切换支持 | 4 |
| [#21827](https://github.com/NousResearch/hermes-agent/issues/21827) | Delegate | 主题感知子 Agent 路由（不同任务分配不同模型） | 4 |

---

## 7. 用户反馈摘要

### 💬 核心痛点（从 Issue 评论中提炼）

**1. Token 成本压力（高频）**
> *用户报告：默认配置下 50+ 工具的完整 Schema 每次调用消耗 3,500-5,000 tokens，无论任务是否需要这些工具。*
- 影响群体：本地模型用户、低带宽场景、对成本敏感的用户
- 期望：按需加载工具 Schema，减少 token 浪费

**2. 多 Agent 协作需求（新兴）**
> *用户场景：3 个专用 Hermes 实例部署在 Discord，需要共享频道可见性和协作能力。*
- 影响群体：运营团队、多角色部署场景
- 期望：Agent 间消息可见、任务协调、统一记忆

**3. 平台网关稳定性（持续）**
> *飞书用户：流式输出导致"已编辑"徽章和频率限制问题；Telegram：内部 Reasoning 块泄露；Matrix：2 人群组误判为 DM。*
- 影响群体：生产环境部署用户
- 期望：各平台适配质量提升

**4. 认证/订阅流程（偶发高影响）**
> *Claude Max 20x 订阅用户：OAuth token 有效但每次请求返回 400。*
- 影响群体：高付费用户（Claude Max）
- 期望：官方订阅集成稳定可靠

### 😊 满意度信号

- **桌面应用**（#20059）截图获得积极反响，Electron + 现代化 UI 设计受期待
- **Skills 系统** 被多个用户提及作为差异化能力（自我进化、跨会话记忆）
- **OpenRouter** 集成广受好评，支持模型广泛

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue（>7 天无维护者响应）

| Issue # | 标题 | 创建日期 | 未响应天数 | 优先级 | 建议 |
|---------|------|----------|-----------|--------|------|
| [#514](https://github.com/NousResearch/hermes-agent/issues/514) | A2A 协议支持 | 2026-03-06 | ~67 天 | 高 | 需维护者明确立场（支持/拒绝/延期） |
| [#509](https://github.com/NousResearch/hermes-agent/issues/509) | 认知记忆操作 | 2026-03-06 | ~67 天 | 中 | 长期路线图信号 |
| [#2919](https://github.com/NousResearch/hermes-agent/issues/2919) | 原生支付执行（x402/agentpay-mcp） | 2026-03-25 | ~48 天 | 中 | 创新功能，商业化探索 |
| [#6607](https://github.com/NousResearch/hermes-agent/issues/6607) | checkpoint_manager cwd 不存在 | 2026-04-09 | ~33 天 | P3 | 边缘场景 Bug |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | 输出截断 | 2026-04-10 | ~32 天 | 高 | 已关闭，建议确认修复版本 |

### 📊 积压健康度指标

| 指标 | 数值 | 评估 |
|------|------|------|
| 开放 Issues 总数（估算） | ~195 活跃 | 较高，需持续消化 |
| PR 积压 | 394 待合并 | 较高，需 Code Review 提速 |
| 今日合并率 | 21.2% | 正常范围

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期：** 2026-05-12  
**数据来源：** github.com/nanocoai/nanoclaw  
**日报类型：** 项目日常状态监控

---

## 1. 今日速览

2026-05-12，NanoClaw 项目保持**高度活跃**状态。过去24小时内共产生 **20 条社区动态**（4条 Issues + 16条 PRs），其中 **9 个 PR 已被合并/关闭**，**7 个 PR 待合并**，整体开发节奏稳健。今日亮点集中在三大方向：① agent-runner 新增 `fallbackModel` 支持（#2418 关联 #2417）；② CLI 修复 `ncl groups create` 导致的容器启动失败（#2416 关联 #2415）；③ Hindsight 长期记忆 MCP 集成（#2420/#2419）进入 Review 阶段。稳定性方面持续推进，修复了消息压缩、容器迁移等多个潜在问题。**项目整体健康度评估：优秀**，社区参与度高，代码合并节奏稳定。

---

## 2. 版本发布

**今日无新版本发布。** 最近一个 Release 信息不可用，建议关注官方 Release 页面以获取版本更新日志。

---

## 3. 项目进展

以下 PR 已于今日合并/关闭，项目功能得到实质性推进：

### 🔧 稳定性修复（已合并）

| PR # | 标题 | 贡献者 | 影响 |
|------|------|--------|------|
| **#2414** | fix(poll-loop): nudge agent when output lacks message wrapping | @gavrielc | **高** — 修复 agent 输出无消息包装时静默丢弃的问题，改为主动纠正 |
| **#2413** | fix(compact): place destination reminder at end of compaction summary | @gavrielc | **中** — 确保压缩摘要末尾保留路由信息 |
| **#2410** | fix(container): gracefully handle missing `on_wake` column | @gavrielc | **高** — 解决容器重启循环问题，支持向后兼容 |
| **#1785** | fix: isolate channel connect failures | @carstenf | **高** — 单个渠道认证失败不再导致整个服务崩溃 |
| **#2408** | chore: rename qwibitai → nanocoai references | @glifocat | **低** — 组织更名相关清理 |

### ⚠️ 回滚操作

| PR # | 标题 | 贡献者 | 说明 |
|------|------|--------|------|
| **#2412** | revert: remove compaction destination reminder (PR #2327) | @gavrielc | 撤销 #2327，因压缩后注入的 `[system]` 提醒导致 agent 发送非预期消息 |

### 🎯 功能集成（已合并）

| PR # | 标题 | 贡献者 | 影响 |
|------|------|--------|------|
| **#2419** | feat(skills): /add-hindsight — per-group long-term memory | @carstenf | 新增 Hindsight 长期记忆 MCP 集成，3个工具 |
| **#1662** | skill/sentry: add Sentry IPC integration | @TriKro | 新增 Sentry 监控集成 |
| **#63** | feat: add WhatsApp auth retry | @don7panic | 增强 WhatsApp 认证稳定性 |

---

## 4. 社区热点

### 🔥 最受关注的 Open PRs（待合并）

| PR # | 标题 | 贡献者 | 热度评估 |
|------|------|--------|----------|
| **#2422** | feat(skills): add /add-google-auth foundation skill + diagnostic MCP tools | @TriKro | ⭐⭐⭐ 新提交（今日） |
| **#2420** | feat(skills): /add-hindsight — bundled MCP wrapper | @carstenf | ⭐⭐⭐ 捆绑 MCP 封装器 |
| **#2418** | feat(agent-runner): support `fallbackModel` | @dvirarad | ⭐⭐⭐ 解决 #2417呼声，关联 Issue |
| **#2409** | skill(x-integration): port to v2 + Linux + 25 tools | @jorgenclaw | ⭐⭐ 功能大幅扩展（5→25工具） |
| **#2421** | Fedora podman support | @skalawag | ⭐⭐ 平台扩展 |

**热点分析：**
- **#2422 (@TriKro)**：今日新提交，添加 Google Auth 基础技能及诊断 MCP 工具，符合基金会层级集成标准
- **#2418 (@dvirarad)**：明确关联 Issue #2417，社区对模型回退功能有强需求，已实现检测逻辑
- **#2409 (@jorgenclaw)**：X (Twitter) 集成 v2 移植+Linux支持+25工具覆盖，野心勃勃的 PR

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug

| 优先级 | Issue # | 标题 | 状态 | 关联 Fix PR |
|--------|---------|------|------|-------------|
| **高** | [#2423](https://github.com/nanocoai/nanoclaw/issues/2423) | Outbound delivery failures are silently swallowed | 🆕 今日报告 | 无 |
| **高** | [#2415](https://github.com/nanocoai/nanoclaw/issues/2415) | `ncl groups create` skips `container_configs` row — first spawn fails | Open | [#2416](https://github.com/nanocoai/nanoclaw/pull/2416) 已提交 |
| **中** | [#1984](https://github.com/nanocoai/nanoclaw/issues/1984) | Provider support for custom/local OpenAI-compat endpoints | Open（讨论中） | 无 |

### 🔍 Bug 详情

**#2423 — 出站投递失败静默吞没**（今日新增，高优先级）
- **问题**：当出站消息投递失败（Telegram API 非2xx、限流、内容过滤、载荷过大），NanoClaw 在3次重试后记录 `status = 'failed'`，但**没有信号反馈给 agent**
- **影响**：Agent 已确认消息但实际未送达，导致对话状态不一致
- **建议**：优先处理，涉及核心可靠性

**#2415 — CLI 创建组时容器配置缺失**（高优先级）
- **问题**：`ncl groups create` 跳过 `container_configs` 表插入，导致首次消息触发容器时抛出 "Container config not found"
- **影响**：新用户体验严重受损
- **状态**：[Fix PR #2416](https://github.com/nanocoai/nanoclaw/pull/2416) 已提交待合并

---

## 6. 功能请求与路线图信号

### ✨ 新功能请求

| Issue # | 请求内容 | 诉求来源 | 关联 PR | 纳入可能性 |
|---------|----------|----------|---------|------------|
| **#2417** | agent-runner 支持 `fallbackModel` 配置选项 | @dvirarad | [#2418](https://github.com/nanocoai/nanoclaw/pull/2418) | ✅ 已实现，待合并 |
| **#1984** | 支持自定义/本地 OpenAI 兼容端点 (Codex + OpenCode) | @TeeJS | 无 | 🔄 讨论中 |
| **#2422** (PR) | Google Auth 基础技能 + 诊断 MCP 工具 | @TriKro | [#2422](https://github.com/nanocoai/nanoclaw/pull/2422) | ✅ 符合规范，待 Review |
| **#2420** (PR) | Hindsight 长期记忆 MCP 封装器 | @carstenf | [#2420](https://github.com/nanocoai/nanoclaw/pull/2420) | ✅ 已有 #2419 合并版 |
| **#2409** (PR) | X Integration v2 + Linux + 25 工具 | @jorgenclaw | [#2409](https://github.com/nanocoai/nanoclaw/pull/2409) | 🔄 大幅扩展，需 Review |

### 🗺️ 路线图信号分析

从 Issue 和 PR 分布可洞察项目当前优先级：

1. **Agent 可靠性**（高优先级）：`fallbackModel` 支持、投递失败反馈机制
2. **CLI 健壮性**（高优先级）：组创建完整性、容器配置一致性
3. **集成扩展**（中优先级）：Hindsight、Google Auth、Sentry、X (Twitter)
4. **平台扩展**（中优先级）：Fedora/Podman 支持、Linux 兼容性

---

## 7. 用户反馈摘要

### 📝 Issue 评论提炼

**#1984 — 自定义 OpenAI 端点支持**
- **用户痛点**：NanoClaw 文档允许 BYO OpenAI 兼容端点（Option C），但实际配置后无法正确路由
- **诉求**：希望 Codex 和 OpenCode provider 支持实验性端点配置
- **状态**：讨论中（4条评论），需维护者确认技术方案

**#2423 — 投递失败无感知**
- **用户场景**：当 Telegram 消息因限流/内容过滤失败时，agent 不知道消息未送达，继续对话
- **影响**：用户体验困惑（"我明明发了，你怎么不回？"）

### 💬 社区互动亮点

- **@dvirarad** 提出的 `fallbackModel` 需求得到快速响应，#2418 已实现
- **@glifocat** 连续发现并提交 CLI bug fix (#2416)，展现深度用户参与
- **@gavrielc** 主导多个稳定性修复，展现核心贡献者担当

---

## 8. 待处理积压

以下 Issue/PR 超过 **14 天**未响应或长期存在，需维护者关注：

### ⚠️ 长期未响应 Issues

| Issue # | 标题 | 创建时间 | 状态 | 积压原因 |
|---------|------|----------|------|----------|
| **#1984** | Provider support for custom/local OpenAI-compat endpoints | 2026-04-24 | Open | 讨论中但无明确进展，18天未推进 |
| **#1785** | Channel connect failures isolation | 已合并 | — | ✅ 已解决 |

### 📋 待 Review 的重要 PRs

| PR # | 标题 | 创建时间 | 状态 | 优先级 |
|------|------|----------|------|--------|
| **#2422** | Google Auth 技能 | 2026-05-12 | Open | 🔴 高 |
| **#2418** | fallbackModel 支持 | 2026-05-11 | Open | 🔴 高 |
| **#2409** | X Integration v2 + 25 tools | 2026-05-11 | Open | 🟡 中 |
| **#2421** | Fedora podman 支持 | 2026-05-11 | Open | 🟡 中 |
| **#2411** | 容器任务提示重新注入 | 2026-05-11 | Open | 🟡 中 |

### 🎯 建议维护者优先处理

1. **#2423** — 投递失败反馈机制（今日新增，影响核心可靠性）
2. **#2416** — CLI 容器配置修复（已有 fix，尽快合并）
3. **#2418** — fallbackModel（功能完整，等 Review）
4. **#1984** — 自定义端点（长期讨论，需明确技术方案）

---

## 📊 今日数据总览

```
┌─────────────────────────────────────────────────────┐
│  NanoClaw 2026-05-12 每日动态                        │
├─────────────────────────────────────────────────────┤
│  📥 新增 Issues:     4 条                            │
│  ✅ 关闭 Issues:     0 条                            │
│  📥 新增 PRs:        7 条 (待合并)                    │
│  ✅ 合并/关闭 PRs:   9 条                             │
│  🏷️ 新版本发布:      0 个                            │
├─────────────────────────────────────────────────────┤
│  活跃度评分:          ⭐⭐⭐⭐⭐ 极高                   │
│  代码合并节奏:        稳健                            │
│  Bug 响应速度:        良好                            │
│  社区参与度:          优秀                            │
└─────────────────────────────────────────────────────┘
```

---

**日报生成时间：** 2026-05-12  
**数据截止：** 2026-05-12 23:59 UTC  
**分析师：** AI Project Analyst  
**免责声明：** 本报告基于 GitHub 公开数据自动生成，仅供参考。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：** 2026-05-12  
**项目仓库：** github.com/nearai/ironclaw

---

## 1. 今日速览

过去 24 小时内，IronClaw 项目保持高度活跃：共处理 **38 条 Issues**（新开/活跃 23 条，关闭 15 条）和 **50 条 PRs**（待合并 32 条，已合并 18 条）。版本 **v0.28.1** 正式发布，主要新增了 Slack 的 `pairing_approve` 工具和微信集成元数据。核心进展集中在 **Reborn** 架构重构，多个关键子模块（AgentLoopDriver、LoopExit、TurnCoordinator）已完成定义并关闭，大量 ProductAdapter 相关 PR 进入评审阶段。整体项目健康度良好，合并率较高，但存在少量长期未解决的社区问题（如 Docker 镜像发布）需要关注。

---

## 2. 版本发布

### ✅ ironclaw-v0.28.1（2026-05-11）

**新增功能：**

| 功能模块 | 变更内容 | PR 链接 |
|---------|---------|---------|
| channels | 新增 `pairing_approve` 工具，支持 Slack 绑定审批流程 | [#3396](https://github.com/nearai/ironclaw/pull/3396) |
| channels | 新增微信 Registry 工件元数据支持 | [#3386](https://github.com/nearai/ironclaw/pull/3386) |
| common | 路径描述和平台相关信息（详情截断） | — |

**迁移注意事项：**  
- 本次为补丁版本，向后兼容，建议所有用户升级。

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 意义 |
|------|------|------|------|
| — | Reborn 多项架构定义 Issue 已全部关闭 | ✅ 已关闭 | 推进 Reborn Epic（#2987）核心模块落地 |

**Reborn 架构里程碑（近24小时完成）：**

1. **AgentLoopDriver 定义**（#3107）— 定义了 Run-class profile 契约，为文本模式循环提供基础  
   🔗 [Issue #3107](https://github.com/nearai/ironclaw/issues/3107)

2. **LoopExit 契约**（#3232）— 明确循环退出边界条件  
   🔗 [Issue #3232](https://github.com/nearai/ironclaw/issues/3232)

3. **LoopCheckpointState Staging Store**（#3406）— 为 Reborn 检查点持久化提供抽象  
   🔗 [Issue #3406](https://github.com/nearai/ironclaw/issues/3406)

4. **AgentLoopDriverHost 文本工厂**（#3407）— 完成首个完整的文本循环 Host 对象  
   🔗 [Issue #3407](https://github.com/nearai/ironclaw/issues/3407)

5. **Host-owned Prompt Bundle 端口**（#3409）— 为 CodeAct/v2 驱动提供更丰富的模型输入接口  
   🔗 [Issue #3409](https://github.com/nearai/ironclaw/issues/3409)

6. **System 运行时适配器**（#3478）— 新增 `RuntimeKind::System` 路径隔离内核能力  
   🔗 [Issue #3478](https://github.com/nearai/ironclaw/issues/3478)

7. **多租户 Turn 准入策略**（#3264）— 定义 Reborn 多租户安全边界  
   🔗 [Issue #3264](https://github.com/nearai/ironclaw/issues/3264)

### 待合并的 XL/L 级 PRs（共 7 个）

| PR # | 标题 | Size | 风险 | 说明 |
|------|------|------|------|------|
| #3352 | ProductAdapter Host Auth/Egress 原语 | XL | Medium | 新增 `ironclaw_wasm_product_adapters` crate，HMAC 验签 |
| #3355 | Telegram v2 ProductAdapter 原型 | XL | Low | Telegram v2 适配器 tracer bullet |
| #3354 | Telegram v2 Payload 标准化 | XL | Medium | 解析 Telegram 更新，重组外部事件引用 |
| #3353 | Native ProductAdapter Runner | XL | Low | 原生 ProductAdapter 运行器胶水代码 |
| #3503 | Loop 生产就绪门禁 | XL | Low | 新增 `production_readiness` 模块 |
| #3494 | 信任边界硬化基线文档 | XL | Low | 文档化信任边界硬化契约 |
| #3488 | Memory 重要事件审计 | XL | Low | 新增 `MemorySignificantEvent` 缝口 |
| #3461 | 移动端布局 UI | XL | Low | 汉堡抽屉式移动端导航（>768px 不变） |
| #3331 | 非图片附件 UI | XL | Medium | 完成附件上传 UI 和 Paperclip 交互优化 |
| #3004 | 独立图片工具配置 | XL | High | 拆分图片端点配置与聊天 LLM 路由 |
| #3065 | V2 引擎图片渲染修复 | XL | Medium | 修复 V2 图片生成/编辑结果不显示问题 |
| #3400 | Reborn 文本回复驱动 | L | Low | 新增 `TextOnlyModelReplyDriver` |

🔗 [全部待合并 PRs](https://github.com/nearai/ironclaw/pulls?q=is%3Aopen+is%3Apr+sort%3Aupdated-desc)

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 状态 | 热度分析 |
|---------|------|--------|------|---------|
| [#3193](https://github.com/nearai/ironclaw/issues/3193) | [Reborn] 定义会话绑定与会话线程契约 | **6** | ✅ 已关闭 | 核心架构追踪，重度讨论 |
| [#3204](https://github.com/nearai/ironclaw/issues/3204) | [Reborn] 定义转录/线程存储边界 | **5** | ✅ 已关闭 | 存储层设计讨论 |
| [#3107](https://github.com/nearai/ironclaw/issues/3107) | [Reborn] 定义 AgentLoopDriver 和运行类配置契约 | **4** | ✅ 已关闭 | 驱动层架构讨论 |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | 将 Reborn 作为独立 ironclaw-reborn 二进制发布 | **3** | 🟡 进行中 | 社区关注产品化路径 |
| [#3488](https://github.com/nearai/ironclaw/issues/3488) | Reborn Contributor Runway Epic | **0** | 🟡 进行中 | 即将成为并行贡献者入口 |

### 最受关注的 Open Issues

| Issue # | 标题 | 👍 反应 | 状态 | 说明 |
|---------|------|--------|------|------|
| [#748](https://github.com/nearai/ironclaw/issues/748) | 发布 ironclaw-worker Docker 镜像到公共仓库 | **6** | 🔴 长期未解决 | 自 2026-03-09 起，已有 2 个月 |
| [#3499](https://github.com/nearai/ironclaw/issues/3499) | Slack 发送原始 Markdown 而非 mrkdwn 格式 | **1** | 🟡 新增 | 用户体验 Bug |
| [#3490](https://github.com/nearai/ironclaw/issues/3490) | 管理员工具设置未传递给用户 | **0** | 🟡 新增 | 多租户权限 Bug |
| [#3500](https://github.com/nearai/ironclaw/issues/3500) | 本地 Web UI 在引导流程中不可发现 | **0** | 🟡 新增 | 新手体验问题 |

---

## 5. Bug 与稳定性

### 今日报告的 Bugs（按严重程度）

| 严重程度 | Issue # | 标题 | 状态 | 是否有 Fix PR |
|---------|---------|------|------|--------------|
| 🔴 P1 | [#2903](https://github.com/nearai/ironclaw/issues/2903) | Telegram 响应过长时静默失败 | ✅ 已关闭 | 未知（Issue 已关闭，未见关联 PR） |
| 🔴 P1 | [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agent 在 /home/agent 保存文件（托管环境下不可访问） | 🟡 进行中 | 无 |
| 🟠 P2 | [#3034](https://github.com/nearai/ironclaw/issues/3034) | V2 引擎 HTTP 工具默认禁用且无引导提示 | 🟡 进行中 | 无 |
| 🟡 P3 | [#3317](https://github.com/nearai/ironclaw/issues/3317) | Telegram 集成在本地 IronClaw 配置失败 | ✅ 已关闭 | 未知 |
| 🟡 P3 | [#3128](https://github.com/nearai/ironclaw/issues/3128) | Gmail 授权流程回调时 502 错误 | 🟡 进行中 | 无 |
| 🟡 P3 | [#3499](https://github.com/nearai/ironclaw/issues/3499) | Slack 发送原始 Markdown 而非 mrkdwn 格式 | 🟡 新增 | 无 |
| 🟡 P3 | [#3490](https://github.com/nearai/ironclaw/issues/3490) | 多租户场景下管理员禁用 shell 工具不生效 | 🟡 新增 | 无 |

**关键问题：**

> ⚠️ **#2905 - 文件系统路径问题**  
> Agent 在托管环境中将文件保存到 `/home/agent` 路径，用户无法访问。涉及生产环境安全性，建议优先处理。

> ⚠️ **#3128 - Gmail 集成 502 错误**  
> 通过聊天助手添加 Gmail 时，在回调链接处返回 502，通过设置页面安装则正常。可能是路由/认证流程问题。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue # | 标题 | 状态 | 预计影响 | 相关 PR |
|---------|------|------|----------|---------|
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | 将 Reborn 作为独立二进制发布 | 🟡 进行中 | 🔴 高（已有明确计划） | #3483 |
| [#3484](https://github.com/nearai/ironclaw/issues/3484) | **Epic:** Reborn Contributor Runway | 🟡 新增 | 🔴 高（多贡献者并行入口） | 待创建 |
| [#3004](https://github.com/nearai/ironclaw/pull/3004) | 独立图片工具配置 | 🔄 待合并 | 🟡 中 | #3004 |
| [#3006](https://github.com/nearai/ironclaw/pull/3006) | MCP 激活失败后重试机制 | 🔄 待合并 | 🟡 中 | #3006 |
| [#3500](https://github.com/nearai/ironclaw/issues/3500) | 本地 Web UI 新手引导优化 | 🟡 新增 | 🟢 低（体验改善） | 无 |

### 路线图信号

1. **Reborn 产品化加速**：#3483、#3503 等 PR 显示 Reborn 正从实验阶段向生产就绪迁移，预计 v0.29 或 v0.30 实现首个稳定 Reborn binary。
2. **ProductAdapter 体系成形**：7 个关联 PR（#3352-#3357）构建 Telegram v2 适配器框架，预示 Channels 模块重构即将完成。
3. **移动端 UI 改善**：#3461 移动端汉堡菜单设计即将落地，改善小屏用户体验。

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 问题描述 | 来源 |
|------|---------|------|
| **托管环境文件访问** | 用户无法访问 Agent 保存到 `/home/agent` 的文件 | #2905 |
| **Gmail 集成失败** | 通过聊天引导添加 Gmail 时 502 错误，影响用户首次体验 | #3128 |
| **本地新手体验** | 新用户运行 `cargo run --bin ironclaw` 后无法发现本地 Web UI 存在 | #3500 |
| **Slack 格式问题** | Slack 频道收到未转换的 Markdown，影响可读性 | #3499 |
| **Docker 沙箱不可用** | `ironclaw-worker` 镜像未发布到公共仓库，`auto_pull_image: true` 配置失效 | #748 |

### 用户满意度信号

- **正面**：Slack `pairing_approve` 工具（#3396）获积极反馈，WeChat 集成元数据完善（#3386）。
- **负面**：多租户权限管理（#3490）和 Telegram 长响应处理（#2903）问题持续影响生产用户。

---

## 8. 待处理积压

### 长期未解决的重要 Issues

| Issue # | 创建日期 | 天数 | 标题 | 严重程度 | 建议 |
|---------|----------|------|------|----------|------|
| [#748](https://github.com/nearai/ironclaw/issues/748) | 2026-03-09 | **63 天** | 发布 ironclaw-worker Docker 镜像 | 🔴 高 | 阻塞沙箱功能，建议优先排期 |
| [#2905](https://github.com/nearai/ironclaw/issues/2905) | 2026-04-23 | **19 天** | Agent 在 /home/agent 保存文件 | 🔴 P1 | 需安全路径重定向方案 |
| [#2903](https://github.com/nearai/ironclaw/issues/2903) | 2026-04-23 | **19 天** | Telegram 响应过长静默失败 | 🔴 P1 | Issue 关闭但未看到 Fix PR，需确认 |
| [#3034](https://github.com/nearai/ironclaw/issues/3034) | 2026-04-28 | **14 天** | V2 引擎 HTTP 工具默认禁用 | 🟠 P2 | 需要 onboarding 引导或默认开启 |
| [#3128](https://github.com/nearai/ironclaw/issues/3128) | 2026-04-30 | **12 天** | Gmail 授权 502 错误 | 🟡 P3 | 路由/回调问题排查 |

### 建议关注

1. **Docker 镜像发布（#748）**：2 个月未解决，社区呼声较高（6 👍），建议明确时间表或提供临时 workaround。
2. **Telegram Bug 追踪（#2903/#3317/#2903）**：多个 Telegram 相关问题，部分已关闭但未明确修复，建议统一回顾。
3. **MCP 重试机制（#3006）**：PR 存在但持续 Open，建议评估后尽快合并。

---

**报告生成时间：** 2026-05-12 08:00 UTC  
**数据来源：** GitHub nearai/ironclaw（2026-05-11

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目日报

**报告日期：** 2026-05-12  
**项目地址：** [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日继续保持高活跃度，共完成 **29 个 PR 的合并/关闭**，覆盖渲染层、IM 集成、Cowork 功能、Artifacts 预览等多个模块的修复与增强。唯一待合并的 PR 是 Dependabot 的 Electron 依赖更新（#1277）。项目整体向前推进显著，无新增 Issue 报告，版本 `release/2026.05.01` 已稳定合入 main 分支。建议关注明日可能发布的下一个版本。

---

## 2. 版本发布

**无新版本发布**

当前最新版本仍为 `release/2026.05.01`，已于今日通过 PR #1902 合入 main 分支。该版本聚焦 Markdown 渲染稳定性、Cowork/OpenClaw 改进、IM（含 POPO）配置修复及 Windows 技能管理优化。

---

## 3. 项目进展

### 核心功能推进

| PR | 标题 | 合并状态 | 影响模块 |
|:--:|------|:--------:|----------|
| [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) | feat: POPO 多机器人实例支持 | ✅ 已合并 | renderer, main, openclaw, im |
| [#1890](https://github.com/netease-youdao/LobsterAI/pull/1890) | feat: decouple main agent workspace from working directory | ✅ 已合并 | renderer, main, openclaw |
| [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) | feat(cowork): 会话列表与消息历史分页加载 | ✅ 已合并 | renderer, main, cowork |
| [#1943](https://github.com/netease-youdao/LobsterAI/pull/1943) | feat: memory settings tab refactor + Dreaming content display | ✅ 已合并 | renderer, docs, main, openclaw, cowork |

### 关键变更摘要

- **POPO 多机器人实例支持**（#1883）：升级 moltbot-popo 至 2.1.1，接入多机器人架构，新增 `PopoInstanceSettings` 组件适配配置管理
- **主 Agent 工作区解耦**（#1890）：将主 Agent 的 MEMORY.md、IDENTITY.md 等文件从用户可配置的 working directory 中独立出来，统一存放至 `{stateDir}/workspace-main/`
- **分页加载**（#1907）：基于 #924 合入 release/2026.05.08 分支，解决会话数量多或对话轮次长时的内存占用和渲染卡顿问题
- **记忆设置重构**（#1943）：将设置 > 记忆页面从平铺布局重构为 Tab 切换，新增 Dreaming 记忆整理功能

---

## 4. 社区热点

今日社区活跃度集中于 **PR 合并与功能迭代**，无新增 Issue 或讨论热度较高的讨论线程。

| 类型 | 链接 | 热度说明 |
|------|------|----------|
| POPO 多实例功能 | [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) | 涉及 11 个文件，净减少 65 行代码，属于架构级改动 |
| 分页加载功能 | [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) | 解决长列表性能痛点，预计提升大量会话用户的体验 |

---

## 5. Bug 与稳定性

### 今日已修复的 Bug

| 严重程度 | PR | 问题描述 | 涉及模块 |
|:--------:|:--:|----------|----------|
| 🟡 中 | [#1945](https://github.com/netease-youdao/LobsterAI/pull/1945) | 修复预览模块多个问题：Mermaid 文件无法在浏览器中打开、PPTX 预览脚本被阻止、Ctrl+滚轮缩放 passive event listener 报错、文件搜索无结果文案不准确 | artifacts, renderer, main |
| 🟡 中 | [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) | 修复 Windows 文件预览重复卡片及路径错误（`D:\D:\path` 双重路径问题） | renderer, cowork, artifacts |
| 🟡 中 | [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) | 修复流式文本合并时重复字符被误吞（如 `.pptx` → `.ptx`） | main |
| 🟢 轻微 | [#1944](https://github.com/netease-youdao/LobsterAI/pull/1944) | 修复代码块水平滚动时背景色不完整，blockquote 内容溢出 | renderer |
| 🟢 轻微 | [#1942](https://github.com/netease-youdao/LobsterAI/pull/1942) | 修复消息元数据行悬停行为及侧边栏图标清晰度 | renderer, cowork |
| 🟢 轻微 | [#1940](https://github.com/netease-youdao/LobsterAI/pull/1940) | 修复消息尾部 NO_REPLY 同步问题 | docs, main, openclaw |

### 待合并 Bug Fix

| PR | 问题描述 | 状态 |
|:--:|----------|------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot: electron 40.2.1 → 42.0.1 及 electron-builder 更新 | 🔄 待合并 |

---

## 6. 功能请求与路线图信号

基于今日 PR 活动，以下功能已完成实现，预计在下一版本中发布：

| 功能 | 来源 PR | 状态 |
|------|---------|------|
| POPO 多机器人实例配置 | [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) | ✅ 已合并 |
| 主 Agent 工作区独立管理 | [#1890](https://github.com/netease-youdao/LobsterAI/pull/1890) | ✅ 已合并 |
| 会话列表/消息历史分页加载 | [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) | ✅ 已合并 |
| 记忆设置 Tab 重构 + Dreaming 内容展示 | [#1943](https://github.com/netease-youdao/LobsterAI/pull/1943) | ✅ 已合并 |
| Mermaid 预览增强（缩放按钮） | [#1945](https://github.com/netease-youdao/LobsterAI/pull/1945) | ✅ 已合并 |
| AI 诊断入口（IMAP/SMTP 连接失败） | [#1916](https://github.com/netease-youdao/LobsterAI/pull/1916) | ✅ 已合并 |
| 有道云笔记 Skill 升级至 v1.0.9 | [#1941](https://github.com/netease-youdao/LobsterAI/pull/1941) | ✅ 已合并 |

---

## 7. 用户反馈摘要

今日 **无新增 Issue**，无法提取真实用户痛点反馈。结合近期 PR 修复内容，可推断用户关注点包括：

- **性能体验**：分页加载解决了长列表卡顿问题
- **预览功能**：Mermaid/PPTX/二进制文件预览稳定性
- **多 IM 平台**：POPO 多实例配置支持

---

## 8. 待处理积压

| 类型 | 编号 | 描述 | 状态 | 备注 |
|------|------|------|------|------|
| PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot Electron 依赖更新（已打开 39 天） | 🔄 待合并 | 建议尽快合并以保持安全更新 |

---

## 📊 关键指标

| 指标 | 数值 |
|------|------|
| 今日新增 Issues | 0 |
| 今日关闭 Issues | 0 |
| 今日新增 PRs | 0 |
| 今日合并 PRs | 29 |
| 今日待合并 PRs | 1 |
| 新版本发布 | 0 |

---

> **报告生成时间：** 2026-05-12  
> **数据来源：** GitHub LobsterAI 仓库实时数据  
> **分析人：** AI 项目分析助手

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-05-12

---

## 1. 今日速览

过去 24 小时内，Moltis 项目保持稳定的维护节奏。团队共处理 **4 条 Issues**（1 条新开，3 条已关闭）和 **2 条 Pull Requests**（均已合并/关闭），项目整体向前推进。无新版本发布，但修复了两个关键问题：**Proxmox Docker 沙箱提示失败** 和 **discrawl 模块路径变更导致的构建中断**。当前 Open Issue 仅剩 1 条，社区活跃度适中，维护响应速度良好。

---

## 2. 版本发布

**今日无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 Pull Requests

| PR # | 标题 | 状态 | 贡献者 | 链接 |
|------|------|------|--------|------|
| #992 | fix(install): avoid Proxmox Docker prompt failure | ✅ CLOSED | @penso | [🔗](https://github.com/moltis-org/moltis/pull/992) |
| #989 | fix(sandbox): update discrawl module path | ✅ CLOSED | @penso | [🔗](https://github.com/moltis-org/moltis/pull/989) |

#### PR #992 详情
- **修复内容**：解决 Proxmox LXC 安装路径下 Docker 沙箱提示在 `lxc-attach` 无交互式 stdin 时失败的问题
- **行为变更**：保留 TTY 可用时的交互行为，否则默认使用 `MOLTIS_INSTALL_DOCKER` 环境变量或回退至 `no`
- **影响范围**：Proxmox 部署场景的安装脚本稳定性

#### PR #989 详情
- **修复内容**：更新 discrawl Go 模块路径从 `github.com/steipete/discrawl` 迁移至 `github.com/openclaw/discrawl`
- **配套变更**：同步更新沙箱 skill 元数据，并添加 Dockerfile 回归断言防止路径回退
- **影响范围**：沙箱容器构建流程

> **评估**：两个 PR 均由 @penso 提交，修复了近期社区反馈的阻塞性问题，项目核心功能稳定性得到保障。

---

## 4. 社区热点

### 今日讨论最活跃的 Issues/PRs

| 类型 | # | 标题 | 评论数 | 链接 |
|------|---|------|--------|------|
| Issue | #990 | [Bug]: User defined agent modes doesn't work | 1 | [🔗](https://github.com/moltis-org/moltis/issues/990) |
| Issue | #993 | [Bug]: Proxmox script - LXC Creation fails on 91 | 0 | [🔗](https://github.com/moltis-org/moltis/issues/993) |
| Issue | #991 | [Bug]: Proxmox script - LXC Creation fails on Line 29 | 0 | [🔗](https://github.com/moltis-org/moltis/issues/991) |
| Issue | #988 | [Bug]: discrawl repo URL changes break sandbox container build | 0 | [🔗](https://github.com/moltis-org/moltis/issues/988) |

#### 热点分析

**#990 - User defined agent modes doesn't work** 是今日唯一有评论参与的 Issue，反映用户对自定义 Agent 模式功能的期待。该 Issue 已于创建当天关闭，表明维护团队快速响应并验证了问题。评论区可能包含问题复现步骤或解决方案讨论。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | # | 标题 | 状态 | 是否有 Fix PR | 链接 |
|----------|---|------|------|----------------|------|
| 🔴 高 | #993 | Proxmox script - LXC Creation fails on 91 | 🆕 OPEN | ❌ 无 | [🔗](https://github.com/moltis-org/moltis/issues/993) |
| 🟡 中 | #990 | User defined agent modes doesn't work | ✅ CLOSED | ❓ 不明确 | [🔗](https://github.com/moltis-org/moltis/issues/990) |
| 🟡 中 | #991 | Proxmox script - LXC Creation fails on Line 29 | ✅ CLOSED | ✅ #992 | [🔗](https://github.com/moltis-org/moltis/issues/991) |
| 🔴 高 | #988 | discrawl repo URL changes break sandbox container build | ✅ CLOSED | ✅ #989 | [🔗](https://github.com/moltis-org/moltis/issues/988) |

#### 关键问题

**🔴 待处理：Issue #993**
- **问题**：Proxmox 环境下 LXC 容器创建在第 91 行失败
- **影响**：Proxmox 用户无法正常完成 LXC 部署
- **建议**：维护者需尽快定位错误并提供修复

**✅ 已修复：Issues #988, #991**
- 通过 PR #989 和 #992 已彻底解决，模块路径和安装脚本稳定性得到提升

---

## 6. 功能请求与路线图信号

**今日无明确的功能请求（Feature Request）Issues。**

从现有数据看，社区反馈主要集中在**缺陷修复**和**环境适配**（如 Proxmox 部署场景），暂未出现新的功能扩展需求。这可能表明项目当前阶段处于**稳定维护期**，核心功能已相对成熟。

---

## 7. 用户反馈摘要

### 从 Issues 评论中提炼的用户痛点

#### 场景 1：Proxmox 部署失败
- **用户**：@Thndr
- **问题**：Proxmox 环境下 LXC 容器创建脚本在多行（Line 29、Line 91）执行失败
- **影响**：用户无法使用 Moltis 完成 Proxmox 虚拟化环境的容器化部署
- **状态**：Line 29 问题已通过 #992 修复，Line 91 问题（#993）待解决

#### 场景 2：沙箱构建中断
- **用户**：@holgzn
- **问题**：discrawl 仓库 URL 变更导致沙箱容器构建失败
- **影响**：依赖沙箱功能的用户构建流程被阻塞
- **状态**：已通过 #989 修复

#### 场景 3：Agent 模式配置
- **用户**：@bsarkisov
- **问题**：用户自定义的 Agent 模式无法正常工作
- **影响**：高级用户无法按需定制 Agent 行为
- **状态**：已关闭，但评论中可能有进一步信息

> **整体反馈**：用户对 Proxmox 部署场景的关注度较高，维护者需持续关注该环境下的兼容性测试。

---

## 8. 待处理积压

### 需要关注的重要 Open Items

| # | 标题 | 类型 | 创建日期 | 等待时长 | 链接 |
|---|------|------|----------|----------|------|
| #993 | Proxmox script - LXC Creation fails on 91 | Bug | 2026-05-11 | 1 天 | [🔗](https://github.com/moltis-org/moltis/issues/993) |

#### 积压分析

目前项目积压量较低，仅 **1 条 Open Bug**（#993）待处理。该问题与 #991（已修复）属于同类问题，建议维护者统一排查 Proxmox LXC 脚本在第 29 行之后的代码逻辑，防止遗漏潜在缺陷。

---

## 📊 关键指标一览

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issues | 4 | → 持平 |
| 关闭 Issues | 3 | ↑ 上升 |
| 新增 PRs | 2 | → 持平 |
| 合并 PRs | 2 | ↑ 上升 |
| Open Issues | 1 | ↓ 下降 |
| 版本发布 | 0 | → 持平 |

---

**报告生成时间**：2026-05-12  
**数据来源**：GitHub Moltis Organization (github.com/moltis-org/moltis)  
**维护建议**：优先处理 #993 Proxmox LXC 脚本问题，考虑添加 Proxmox 环境的 CI 回归测试。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**报告日期**：2026-05-12  
**项目**：QwenPaw (agentscope-ai/QwenPaw)  
**数据来源**：GitHub Activity - Last 24 Hours

---

## 1. 今日速览

2026-05-12，QwenPaw 项目保持高度活跃，社区共产生 50 条 Issue 更新（新开/活跃 28 条，已关闭 22 条）和 40 条 PR 更新（待合并 24 条，已合并/关闭 16 条）。项目今日未发布新版本，但多个功能性 PR 已进入 Review 阶段或已合并，包括控制台换行支持、移动端侧边栏优化、多语言国际化（印尼语）等特性。Bug 报告方面，存在若干影响用户体验的严重问题（如 MCP 调用堵塞、记忆索引不同步），社区正在积极修复。整体项目健康度良好，开发节奏稳健。

---

## 2. 版本发布

**今日无新版本发布**

项目最近无 Release 记录，建议关注官方渠道获取版本更新通知。

---

## 3. 项目进展

以下为今日合并/关闭的重要 Pull Requests：

| PR | 标题 | 状态 | 概述 |
|----|------|------|------|
| #4231 | feat(console): user message support newline | OPEN | 支持用户消息换行符，修复 #4216, #2712 |
| #4225 | fix(console): collapse sidebar on mobile | OPEN | 移动端视图自动折叠侧边栏，修复 #4221 |
| #4229 | perf(api): optimize async depends to fix thread pool blocking | OPEN | 优化异步依赖以修复线程池阻塞问题 |
| #4224 | fix(memory): refresh index after auto memory summary | OPEN | 自动摘要后刷新索引，修复 #4220 |
| #4223 | fix(cron): implement soft delete to prevent zombie session resurrection | OPEN | 实现软删除防止僵尸会话复活，修复 #4162 |
| #4219 | feat(console): add Indonesian language option | OPEN | 新增印尼语（id）语言选项 |
| #4215 | feat(shell): Add shell_command_executable configuration | OPEN | 添加 shell 可执行文件配置选项，支持用户自定义 shell |
| #4212 | fix(exception): fix ConfigurationException key passing | CLOSED | 修复 ConfigurationException 键传递问题 |
| #4209 | feat(DingTalk): process quoted messages for user-sent replies | CLOSED | 钉钉通道支持引用消息处理 |
| #4206 | feat(chat): enable multiple attachments support in chat page | CLOSED | 聊天页面支持多附件功能 |
| #4202 | feat(channels): support native voice bubble in Feishu channel | OPEN | 飞书通道支持原生语音气泡 |

**亮点 PR 分析**：
- **控制台体验优化**：#4231、#4225、#4219 等 PR 持续改进 UI/UX，体现项目对国际化和移动端体验的重视
- **稳定性修复**：#4229（线程池优化）、#4224（记忆索引同步）、#4223（僵尸会话问题）等 PR 直接回应社区反馈
- **渠道功能扩展**：#4202 飞书原生语音气泡支持、#4209 钉钉引用消息处理，体现多渠道覆盖的战略

---

## 4. 社区热点

今日讨论最活跃的 Issues 如下：

| Issue | 标题 | 评论数 | 状态 | 热点分析 |
|-------|------|--------|------|----------|
| [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) | Question: cron job with agent type 执行时收到中断消息 | 11 | CLOSED | 用户报告定时任务执行被意外中断，涉及 Agent 调度稳定性 |
| [#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) | 升级到 v1.1.5.post2 后 opencode 模型提供商不能用 | 10 | CLOSED | 升级回归问题，base_url 配置变化导致兼容性问题 |
| [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | Bug: Session history disappears and new messages are routed to a different session | 9 | CLOSED | 会话历史丢失，UI 显示空白但侧边栏标题仍存在，影响用户连续性体验 |
| [#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165) | qwenpan v1.1.6 Volcano Engine 火山引擎模型配置有问题 | 8 | CLOSED | API Key 测试所有模型均失败，配置验证逻辑可能存在问题 |
| [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) | Bug: 访问页面慢 | 6 | OPEN | API 响应时间不稳定，存在性能瓶颈 |

**热点诉求总结**：
1. **稳定性问题**（中断、崩溃、历史丢失） - 用户对生产环境可靠性的担忧
2. **升级兼容性** - 版本升级导致的配置/API 变更影响现有部署
3. **性能问题** - 页面加载慢、API 响应不稳定

---

## 5. Bug 与稳定性

按严重程度排列的今日 Bug 报告：

### 🔴 严重 Bug

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | MCP 调用返回 401 时堵塞直到超时 | OPEN | 无 |
| [#4170](https://github.com/agentscope-ai/QwenPaw/issues/4170) | Agent 动作信息只在所有动作完成后才显示 | OPEN | 无 |
| [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | DashScope provider 配置正确但 api_key 为空返回 401 | OPEN | 无 |

### 🟡 中等 Bug

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) | auto_memory_interval 不同步向量索引 | OPEN | [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) |
| [#4185](https://github.com/agentscope-ai/QwenPaw/issues/4185) | 畸形空 tool_use 导致聊天无法打开 | OPEN | 无 |
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | Windows execute_shell_command 闪烁控制台窗口 | OPEN | 无 |
| [#4213](https://github.com/agentscope-ai/QwenPaw/issues/4213) | 网页对话内容分片传输需求 | OPEN | 无 |

### 🟢 已修复/关闭的 Bug

- [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) - 会话历史消失问题 ✅ CLOSED
- [#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) - opencode provider 升级后不可用 ✅ CLOSED
- [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) - DeepSeek reasoning_content 多轮对话回传问题 ✅ CLOSED

**稳定性风险提示**：
- MCP 错误处理不当（#4227）可能导致长时间阻塞，建议优先处理
- Agent 动作反馈延迟（#4170）影响用户监控体验，需要异步流式输出方案

---

## 6. 功能请求与路线图信号

今日社区提出的功能请求及已有实现情况：

| Issue/PR | 功能请求 | 状态 | 预计纳入版本 |
|----------|----------|------|--------------|
| [#4192](https://github.com/agentscope-ai/QwenPaw/issues/4192) | 聊天多附件支持 | CLOSED | 已在 #4206 合并 |
| [#4138](https://github.com/agentscope-ai/QwenPaw/issues/4138) | browser_use 工具批量操作支持 | CLOSED | 已实现 |
| [#3767](https://github.com/agentscope-ai/QwenPaw/issues/3767) | 自定义 shell 可执行文件 | OPEN | 已有 #4215 实现中 |
| [#4215](https://github.com/agentscope-ai/QwenPaw/pull/4215) | shell_command_executable 配置 | OPEN | Review 阶段 |
| [#4228](https://github.com/agentscope-ai/QwenPaw/issues/4228) | 飞书通道大文件发送 | CLOSED | 需确认实现 |
| [#3747](https://github.com/agentscope-ai/QwenPaw/issues/3747) | 钉钉引用消息和文件处理 | CLOSED | 已在 #4209 实现 |
| [#4202](https://github.com/agentscope-ai/QwenPaw/pull/4202) | 飞书原生语音气泡支持 | OPEN | Review 阶段 |

**路线图信号**：
1. **控制台体验**：国际化（印尼语）、移动端适配、消息换行支持
2. **多渠道能力**：飞书语音气泡、钉钉引用消息、大文件传输
3. **Shell 灵活性**：用户自定义 shell 环境（#4215 解决 #3767）
4. **内存管理**：可插拔 memory manager（#2308）与记忆索引同步修复

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的典型用户痛点和使用场景：

### 用户痛点

| 场景 | 痛点描述 | 代表 Issue |
|------|----------|------------|
| **定时任务** | cron job 执行时收到意外中断消息，无法确认任务是否正常运行 | [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) |
| **网络环境** | 严重网络波动导致 Agent 工具调用成功率低于 70%，影响工作效率 | [#2435](https://github.com/agentscope-ai/QwenPaw/issues/2435) |
| **会话管理** | 对话历史突然消失，窗口变成空白会话，但标题仍存在 | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) |
| **文件传输** | 飞书通道无法发送大文件（30+ MB），小文件正常 | [#4228](https://github.com/agentscope-ai/QwenPaw/issues/4228) |
| **审批流程** | 工具审批超时不通知用户，一直等待 | [#2193](https://github.com/agentscope-ai/QwenPaw/issues/2193) |

### 用户满意点

- 多渠道覆盖（Telegram、钉钉、飞书等）获得用户认可
- 定时任务（Cron）和收件箱功能提升了自动化能力
- 社区响应速度较快，多个 Bug 在当天得到反馈

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或需要维护者关注：

| Issue/PR | 标题 | 创建时间 | 状态 | 优先级 |
|----------|------|----------|------|--------|
| [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) | Cron 僵尸会话复活问题 | 2026-05-09 | OPEN | 🔴 已有 #4223 修复中 |
| [#4103](https://github.com/agentscope-ai/QwenPaw/issues/4103) | Windows 系统 shell 无法选择 | 2026-05-07 | OPEN | 🟡 |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x 桌面应用支持 | 2026-04-24 | OPEN | 🟡 Review 阶段 |
| [#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) | ADBPG 可插拔内存管理器 | 2026-03-26 | OPEN | 🟡 |
| [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) | memory-distill 工具插件 | 2026-05-10 | OPEN | 🟢 |
| [#4084](https://github.com/agentscope-ai/QwenPaw/pull/4084) | CronManager 并发状态泄漏修复 | 2026-05-07 | OPEN | 🟡 |

**积压分析**：
- **桌面应用**：Tauri 2.x 支持（#3813）进行中，进度正常
- **内存管理**：ADBPG 长期内存（#2308）和 memory-distill 插件（#4171）代表项目在记忆系统上的持续投入
- **Cron 稳定性**：#4084 修复并发状态泄漏，建议优先 Review

---

## 总结

2026-05-12，QwenPaw 项目保持健康的开发节奏，社区活跃度较高。多个功能性 PR 进入 Review 阶段即将合并，但存在若干需要关注的稳定性问题（MCP 错误处理、Agent 动作反馈延迟、记忆索引同步）。建议维护者优先处理严重 Bug（#4227、#4170、#4159），同时推进 #4223、#4224、#4229 等已提交的稳定性修复 PR。

---

*本报告由自动化系统生成，数据截止至 2026-05-12 23:59 UTC*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**报告日期**: 2026-05-12  
**项目**: ZeptoClaw (qhkm/zeptoclaw)  
**数据来源**: GitHub Activity (过去24小时)

---

## 1. 今日速览

ZeptoClaw 项目在 2026-05-11 至 2026-05-12 期间保持**低活跃度**状态。今日共处理 **1 条 Issues**（已关闭），**0 条 PR 更新**，**0 个新版本发布**。整体项目处于维护模式，维护者重点关注安全审计工作。所有当前可见工作均聚焦于代码安全审计流程的规范化，暂未涉及功能性更新或 Bug 修复。

---

## 2. 版本发布

**无新版本发布**

过去 24 小时内无 Release 活动，项目当前最新版本信息请参阅 [Releases 页面](https://github.com/qhkm/zeptoclaw/releases)。

---

## 3. 项目进展

| 类型 | 数量 | 详情 |
|------|------|------|
| 已合并 PR | 0 | - |
| 已关闭 PR | 0 | - |
| 已关闭 Issues | 1 | [#584](#) |

**已关闭 Issues**:

- **#584** - `chore(security): single-repository deep ai-vulns audit`  
  状态: CLOSED | 作者: @liey1 | 评论: 2 | 👍: 0  
  [查看详情](https://github.com/qhkm/zeptoclaw/issues/584)

**推进内容**: 此 Issue 推动了项目安全审计流程的规范化，建立了一套基于 `role-orchestrator` 技能的单仓库深度漏洞审计工作流。审计结果将生成 `.codex-audit-work` 制品并写入共享内存，同时对已接受的发现项、负面边界和阻塞项进行追踪。这标志着 ZeptoClaw 在供应链安全和代码质量保障方面迈出了实质性一步。

---

## 4. 社区热点

**今日最活跃讨论**: Issue #584

该 Issue 由社区成员 @liey1 发起，旨在为 ZeptoClaw 仓库建立系统性的安全审计机制。讨论围绕以下核心诉求展开：

- **深度单仓库审计**: 不依赖外部工具，基于内部工作流执行完整漏洞扫描
- **证据驱动**: 所有发现必须附带可验证的证据
- **透明追踪**: 对已接受的风险和明确排除的边界项保持公开记录

**链接**: https://github.com/qhkm/zeptoclaw/issues/584

---

## 5. Bug 与稳定性

**今日无 Bug 报告**

过去 24 小时内未收到任何 Bug、崩溃或回归问题报告。项目稳定性维持良好状态。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**

过去 24 小时内无功能请求 Issue。从历史趋势看，ZeptoClaw 当前版本可能处于功能冻结期，重点转向安全加固和代码健康度提升。安全审计流程的完善（Issue #584）可能为后续版本的功能迭代奠定更安全的基础。

---

## 7. 用户反馈摘要

从 Issue #584 的讨论中可提炼以下社区信号：

| 反馈维度 | 内容 |
|----------|------|
| **核心诉求** | 对开源项目安全性的主动把控，而非被动响应 |
| **使用场景** | 开发者希望在集成外部依赖前，具备本地化的漏洞评估能力 |
| **满意点** | 项目方积极响应安全相关 Issue，展现维护责任感 |
| **痛点** | 社区成员建议审计流程应具备可复现性，避免一次性操作 |

**链接**: https://github.com/qhkm/zeptoclaw/issues/584

---

## 8. 待处理积压

| Issue/PR | 状态 | 积压时长 | 优先级 | 备注 |
|----------|------|----------|--------|------|
| 无可见积压 | - | - | - | 今日关闭 Issue #584 已解决 |

**维护者关注建议**:  
当前无长期未响应的 Issues 或 PR。建议维护者定期审查已关闭 Issues，确保相关 Action Items（如 `#584` 中的审计工件生成）已完整执行并归档至共享内存。

---

## 项目健康度评分

| 指标 | 评分 | 说明 |
|------|------|------|
| 活跃度 | 🟡 中低 | 仅1条 Issue 更新，无 PR 活动 |
| 响应效率 | 🟢 良好 | Issue #584 在创建当日即关闭 |
| 社区参与 | 🟡 低 | 仅1位贡献者，无用户反馈 |
| 稳定性 | 🟢 良好 | 无 Bug 报告 |
| 安全关注 | 🟢 积极 | 主动推进安全审计流程 |

**综合评价**: 项目当前处于**维护/安全加固阶段**，活跃度较低但维护响应及时，安全意识突出。

---

*本报告基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>librefang</strong> — <a href="https://github.com/librefang/librefang">librefang/librefang</a></summary>

# librefang 项目动态日报 — 2026-05-12

---

## 1. 今日速览

昨日项目保持极高开发活跃度，共处理 **30 条 Issues**（19 新开/活跃，11 关闭）和 **41 条 PR 更新**（12 待合并，29 已合并/关闭）。核心进展集中在 **workflow/trigger 系统完善**（#4911/#4909/#4910 批量合并）和 **runtime 稳定性修复**（prompt-leak 向量消除、cascading scaffolding 泄漏修复）。CI 层面仍有 3 起 PR 因 Quality/OpenAPI Drift 检查失败被阻塞。总体而言项目功能迭代快速推进中，但质量门禁需加强关注。

---

## 2. 版本发布

**无新版本发布**。过去 24 小时无 Release 记录。

---

## 3. 项目进展

昨日批量合并了 **workflow 系统** 核心功能包，显著推进了 #4844 大型路线图：

| PR | 作者 | 变更 | 意义 |
|---|---|---|---|
| [#4911](https://github.com/librefang/librefang/pull/4911) | @houko | 工作流运行时：at-rest token 哈希、typed errors、pause/resume HTTP endpoints、async POST /run | 填补 #4844 gap #3/#5，resume token 告别明文存储 |
| [#4909](https://github.com/librefang/librefang/pull/4909) | @houko | 事件触发器可直接 fire workflows（此前只有 cron 支持） | 填补 #4844 gap #6 另一半 |
| [#4910](https://github.com/librefang/librefang/pull/4910) | @houko | 新增 `workflow_start` 和 `workflow_cancel` native tools | 填补 #4844 section E write-side |
| [#4920](https://github.com/librefang/librefang/pull/4920) | @DaBlitzStein | 工作流**定义**注册时持久化到 `~/.librefang/workflows/` | 关闭 #4715 剩余缺口（之前只持久化了 runs） |
| [#4938](https://github.com/librefang/librefang/pull/4938) | @houko | 修复 #4907/#4909/#4910/#4920 批次遗留 4 个小问题 | 批次收尾 |
| [#4907](https://github.com/librefang/librefang/pull/4907) | @f-liva | 消除 agent 回复中的 cascade scaffolding 泄漏 | 根因三元组：session state 混乱 + reply_builder 污染 + 缺失验证 |
| [#4921](https://github.com/librefang/librefang/pull/4921) | @DaBlitzStein | 支持 per-agent `burst_ratio` 配置项 | 高优先级 agent 可拥有更多 token 缓冲 |
| [#4944](https://github.com/librefang/librefang/pull/4944) | @houko | 解除 Security audit CI 阻塞（Next.js + tanstack/history 补丁） | 主线 CI 恢复畅通 |

---

## 4. 社区热点

讨论最活跃的 Issues：

- **[#4715](https://github.com/librefang/librefang/issues/4715)** — Workflow runs 优雅关闭时丢失（已合并修复）：@DaBlitzStein 报告 daemon 重启时所有 Running/Pending runs 被静默丢弃，recover 时标记为 "Interrupted by daemon restart" 但数据从未持久化。引发 3 条讨论，关联 #4908 后续跟进验证。

- **[#4923](https://github.com/librefang/librefang/issues/4923)** — KV memory 写入 DB 失效 + 文档错误：@FrantaNautilus 报告新 agent 都要求用户重新输入姓名，不读取共享信息，内存写入也不落库。调查发现文档命令 `librefang memory store` 实际为 `set` 子命令。**已有 PR #4936 修复中**。

- **[#4898](https://github.com/librefang/librefang/issues/4898)** — Dashboard 模型选择器覆盖 agent 默认值：@neo-wanderer 发现会话级 UI 但写入 agent 级状态，导致跨会话污染。**已有 PR #4937 推进中（部分实现）**。

活跃待合并 PR 中评论最多的：

- **[#4922](https://github.com/librefang/librefang/pull/4922)** — Provider-aware token budget with pre-dispatch gating：@DaBlitzStein 实现各 LLM provider 独立 token 预算追踪，需求 `needs-changes` 阶段，预期替换 #4757。

- **[#4912](https://github.com/librefang/librefang/pull/4912)** — Dashboard inline per-agent skill & MCP assignment：**XL 规模**，回应 #4833 部分需求，修复 #4917/#4918，需持续关注评审进展。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

🔴 **Critical — 已有 fix PR**

1. **[#4943](https://github.com/librefang/librefang/issues/4943)** — `cached/prompt-cache tokens` 仍计入 burst limit：`max 240000/min` 把免费的缓存命中也计入，导致正常使用时误触发限流。**对应 fix 已由 @DaBlitzStein 提交**（待合入主分支）。

🔴 **High — 已有 fix PR**

2. **[#4825](https://github.com/librefang/librefang/issues/4825)** — Streaming 路径下 prompt-leak 检测晚于文本送达：streaming driver 在响应组装完成前已将 `StreamEvent::TextDelta` 发出，导致模型在 prompt-leak 被检测前已将系统提示泄漏至用户端。**PR #4931 修复中**。

3. **[#4903](https://github.com/librefang/librefang/issues/4903)** — `shell_exec` RO-workspace 门控误杀读命令：`cat /vaults-ro/x/foo.md`（纯读操作）被拒绝，RO 空间路径存在即阻塞，忽略实际意图。**PR #4935 修复中**。

4. **[#4927](https://github.com/librefang/librefang/issues/4927)** — Telegram 语音 MIME 识别为 `application/octet-stream`：STT pipeline 对非标准 MIME 类型沉默跳过。**PR #4934 修复中**（通过 magic bytes / filename 回退）。

🟡 **Medium — 报告待处理**

5. **[#4942](https://github.com/librefang/librefang/issues/4942)** — `max_summary_tokens=1024` 默认值导致灾难性上下文丢失：40 条消息历史被压缩成 4 句话，5 轮对话后上下文全失。

6. **[#4923](https://github.com/librefang/librefang/issues/4923)** — KV memory 写入不落库（同上社区热点）。

7. **[#4918](https://github.com/librefang/librefang/issues/4918)** — MCP tab "All" 模式隐藏服务器列表，"+" 按钮跳转错误。

8. **[#4917](https://github.com/librefang/librefang/issues/4917)** — Skills tab "All" 模式隐藏技能列表，同上问题模式。

⚠️ **CI 阻塞提醒**

昨日有 3 起 PR 因 CI Quality/OpenAPI Drift 检查失败被阻塞（#4919/#4892/#4863），需尽快修复以解除主线 red 状态。

---

## 6. 功能请求与路线图信号

新功能请求反映出用户对 **Dashboard 交互深度** 和 **多渠道灵活性** 的强烈需求：

**高频需求方向 — Dashboard 增强**
- [#4941](https://github.com/librefang/librefang/issues/4941) — Channel 实例别名/显示名 + 显示所有可配置字段（邮件的 IMAP/SMTP/TLS）
- [#4940](https://github.com/librefang/librefang/issues/4940) — Skills/MCP/Channels 列表字母排序或搜索过滤
- [#4925](https://github.com/librefang/librefang/issues/4925) — Skill/MCP 描述在分配 UI 中展示（解决只看名称不知功能的问题）
- [#4924](https://github.com/librefang/librefang/issues/4924) — Schedule tab 可编辑（创建/修改/删除 triggers、cron、continuous mode）

**架构层面需求**
- [#4926](https://github.com/librefang/librefang/issues/4926) — Channel 改为 N:M agent 绑定（当前 1:1 default_agent 不够用）
- [#4824](https://github.com/librefang/librefang/issues/4824) — `channel_send` 消息回写到 inbound-routing session（已有 PR #4932）
- [#4808](https://github.com/librefang/librefang/issues/4808) — AgentManifest 新增 `mcp_disabled` 字段（已有 PR #4930）

**第三方集成**
- [#4913](https://github.com/librefang/librefang/issues/4913) — Media Generation 支持 OpenRouter

**路线图关联度高的请求**：#4926（N:M routing）和 #4924（Schedule 可编辑）尚未对应 PR，属于明确的产品方向缺口，可考虑纳入近期迭代。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实使用场景与痛点：

**痛点 1：多租户 agent 配置复杂**
> 用户报告：当配置 restrictive per-agent allowlist 时，`mcp_servers = []` 意味着"全部 MCP 服务器"——没有任何方式表达"无 MCP"。`skills_disabled` 有等效关闭字段但 MCP 没有对应机制。 → 已通过 #4930 修复。

**痛点 2：邮件自签名证书阻塞**
> 企业内网邮件服务器常使用自签名或过期证书，当前 strict TLS 验证导致连接失败，没有 `tls_accept_invalid_certs` 选项绕行。 → 已有 #4877 修复。

**痛点 3：WeCom 集成缺集成测试覆盖**
> PR #4751 re-review 发现 WeCom inbound POST → response_url cache → send() 完整往返链路无测试保障，依赖手动验证。 → 已在 #4929 补充 E2E 测试。

**痛点 4：Telegram 语音消息静默失败**
> 用户发现语音消息完全不触发 STT（speech-to-text），排查发现 Telegram 返回错误 MIME 类型后 kernel 静默跳过，没有任何日志或提示。

**痛点 5：history_fold 性能问题**
> `fold_stale_tool_results` 文档声称每批一次辅助 LLM 调用，实际因 `group_consecutive` 产生 size-1 分组 + working-copy fold 未持久化，导致每轮 O(N) 调用且重复计算。 → 已有 #4866 修复。

---

## 8. 待处理积压

以下事项需维护者关注，避免长期搁置：

| # | 类型 | 标题 | 状态 | 积压时长 |
|---|---|---|---|---|
| [#4760](https://github.com/librefang/librefang/pull/4760) | PR (L) | 关闭 prompt-leak + sentinel-regurgitation 向量 | Open, `needs-changes`, `has-conflicts` | 5天+，存在冲突需 rebase |
| [#4922](https://github.com/librefang/librefang/pull/4922) | PR (L) | Provider-aware token budget with pre-dispatch gating | Open, `needs-changes` | 1天 |
| [#4912](https://github.com/librefang/librefang/pull/4912) | PR (XL) | Dashboard inline per-agent skill & MCP assignment | Open, `needs-changes` | 1天 |
| [#4937](https://github.com/librefang/librefang/pull/4937) | PR (L) | Per-session model override (partial) | Open | 1天（API routes 未完成） |
| [#4943](https://github.com/librefang/librefang/issues/4943) | Issue | Burst limit 计入缓存 token | Open, 无 PR | 1天 |
| [#4942](https://github.com/librefang/librefang/issues/4942) | Issue | max_summary_tokens=1024 默认值灾难性 | Open, 无 PR | 1天 |
| [#4940](https://github.com/librefang/librefang/issues/4940) | Issue | Dashboard 列表排序需求 | Open, 无 PR | 1天 |
| [#4926](https://github.com/librefang/librefang/issues/4926) | Issue | N:M agent-channel assignment | Open, 无 PR | 1天（架构层面） |
| [#4913](https://github.com/librefang/librefang/issues/4913) | Issue | Media Generation 支持 OpenRouter | Open, 无 PR | 1天 |

**重点关注**：`#4760` 因 conflicts 积压 5 天，该 PR 修复 prompt-leak 安全问题，建议优先 rebase 合入。

---

*报告生成时间：2026-05-12 | 数据来源：github.com/librefang/librefang*

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# OpenFang 项目动态日报

**报告日期**: 2026-05-12  
**项目**: RightNow-AI/openfang  
**数据来源**: GitHub

---

## 1. 今日速览

今日 OpenFang 项目保持稳健的开发节奏，24小时内共处理 3 条 Pull Request（其中 2 条已合并/关闭，1 条待合并）以及 1 条新开 Issue。项目核心运行时功能取得重要进展，**@benhoverter** 提交的 MCP bridge 及文件策略相关 PR 已成功合并，这意味着 OpenCaw 和 Hermes-agent 的底层能力得到显著增强。新功能请求聚焦于多语言支持方向，表明项目正在吸引更广泛的国际用户关注。整体活跃度评级：**中等偏高**，开发团队响应及时。

---

## 2. 版本发布

**今日无新版本发布**

---

## 3. 项目进展

### ✅ PR #1183 - 运行时文件策略分级管控 [已关闭/已合并]

| 属性 | 内容 |
|------|------|
| **链接** | https://github.com/RightNow-AI/openfang/pull/1183 |
| **作者** | @benhoverter |
| **合并时间** | 2026-05-12 |
| **依赖关系** | 依赖 #1182 |

**核心变更**：
- 实现基于 per-agent 的 `file_policy` 配置
- 支持 **deny / prompt / read / write** 四级权限分层
- 覆盖所有读写工具站点

**推进意义**：该项目建立在 #1182 的 `ApprovalManager` 推送接口之上，为 Claude Code 子进程提供了细粒度的文件访问控制能力，标志着 OpenFang 在安全沙箱化方向迈出关键一步。

---

### ✅ PR #1182 - MCP Bridge 与 Shell 前置门控 [已关闭/已合并]

| 属性 | 内容 |
|------|------|
| **链接** | https://github.com/RightNow-AI/openfang/pull/1182 |
| **作者** | @benhoverter |
| **合并时间** | 2026-05-12 |
| **关闭 Issue** | #1180 |

**核心变更**：
- 新增 `openfang-mcp-bridge` crate，作为 stdio MCP 服务器
- 通过 Unix-socket IPC 通道将 `tools/call` 请求转发至 daemon 工具调度器
- 支持 Claude Code 子进程访问 OpenFang 完整工具面（`file_read`, `file_list`, `agent_list` 等）
- 集成 shell 前置门控和审批推送接口

**推进意义**：打通了 Claude Code 与 OpenFang 的进程间通信壁垒，是 #1183 等下游 PR 的基础设施。

---

### ⏳ PR #1185 - DoVi 反馈循环工具集 [待合并]

| 属性 | 内容 |
|------|------|
| **链接** | https://github.com/RightNow-AI/openfang/pull/1185 |
| **作者** | @dinopollece |
| **创建时间** | 2026-05-10 |
| **状态** | Open（待审查） |

**计划变更**：
- 新增 `feedback_capture` 工具
- 新增 `feedback_complete` 工具
- 构建 DoVi（可能是 Do Vi?）反馈循环机制

**审查状态**：目前缺少完整的变更说明和测试结果，建议维护者跟进。

---

## 4. 社区热点

### 🔥 新 Issue #1186 - 多语言支持请求

| 属性 | 内容 |
|------|------|
| **链接** | https://github.com/RightNow-AI/openfang/issues/1186 |
| **作者** | @firstip-cpu |
| **类型** | enhancement（功能增强） |
| **活跃度** | 评论 0，👍 0 |

**诉求摘要**：
> Chinese users have driven the development of OpenCaw and Hermes-agent.

该 Issue 虽然描述简洁，但揭示了重要信号：**中国用户已成为 OpenCaw 和 Hermes-agent 项目的重要推动力量**。用户期望 OpenFang 本身也能提供多语言界面或文档支持，降低非英语用户的入门门槛。

**值得关注**：Issue 内容略显单薄（仅有描述，缺少 Alternatives 和 Additional Context），建议维护者主动引导作者补充细节，以便评估实现优先级。

---

## 5. Bug 与稳定性

**今日无 Bug 报告**

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 关联 PR | 纳入可能性 |
|------|------|---------|-----------|
| **多语言支持** | Issue #1186 | — | ⭐⭐ 中等 |
| **DoVi 反馈工具** | PR #1185 | — | ⭐⭐⭐ 高（已有实现） |
| **文件策略分级** | PR #1183 | 已合并 | ✅ 已完成 |

**路线图信号分析**：

从今日数据推断，OpenFang 下一阶段可能聚焦于：
1. **安全/权限强化** - #1182/#1183 已构建的 MCP bridge 和文件策略体系为更复杂的权限模型奠定基础
2. **用户体验闭环** - #1185 的 feedback 工具暗示项目正在完善人机交互反馈机制
3. **国际化** - 多语言支持请求的浮现值得纳入规划考虑

---

## 7. 用户反馈摘要

| 反馈类型 | 内容 | 来源 |
|----------|------|------|
| **社区贡献认可** | 中国用户已驱动 OpenCaw 和 Hermes-agent 的开发 | Issue #1186 |
| **功能期待** | 期望 OpenFang 支持多语言环境 | Issue #1186 |

**用户痛点**：
- 当前 OpenFang 可能在多语言支持方面存在缺口，影响非英语用户的体验
- 核心工具（OpenCaw/Hermes-agent）的国际用户基础正在向主项目迁移需求

**使用场景推断**：
- 中国开发者社区已深度参与相关项目开发
- 多语言场景可能涉及中文文档、错误提示、CLI 界面本地化等

---

## 8. 待处理积压

### ⚠️ 关注项

| Issue/PR | 状态 | 积压时长 | 关注原因 |
|----------|------|----------|----------|
| **#1185** | Open（待审查） | ~2 天 | PR 描述不完整，缺少变更说明和测试结果，需要维护者介入引导 |

**建议**：对于 #1185，维护者应主动在评论中询问作者补充以下信息：
- 具体的变更文件列表
- `feedback_capture` / `feedback_complete` 的接口设计
- 单元测试和集成测试结果

---

## 📊 健康度评估

| 指标 | 今日数据 | 趋势判断 |
|------|----------|----------|
| PR 吞吐量 | 2 合并 / 1 待审查 | ✅ 良好 |
| Issue 响应 | 新开 1 条，无积压 | ✅ 良好 |
| Bug 报告 | 0 条 | ✅ 健康 |
| 贡献者活跃 | @benhoverter（连续 2 PR），@dinopollece（新晋） | ✅ 多元 |

**综合评级**：🟢 **健康运行**

---

*报告生成时间：2026-05-12 | 数据截止：GitHub 实时状态*

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*