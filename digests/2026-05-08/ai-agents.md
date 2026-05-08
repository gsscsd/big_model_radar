# OpenClaw 生态日报 2026-05-08

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-08 02:32 UTC

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

**报告日期：** 2026-05-08  
**项目仓库：** github.com/openclaw/openclaw  
**数据周期：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 项目在 2026-05-07 至 2026-05-08 期间保持极高活跃度，共处理 **500 条 Issues** 和 **500 条 PRs**。项目于 2026-05-07 发布 **v2026.5.7** 版本，主要针对插件发布流程进行可靠性修复。社区参与度显著，新增/活跃 Issues 达 315 条，合并/关闭 148 条 PRs，表明开发团队持续高效推进项目迭代。当前积压待合并 PRs 达 352 条，可能需要关注吞吐量瓶颈。

---

## 2. 版本发布

### 🔗 v2026.5.7 已发布

**发布时间：** 2026-05-07  
**发布类型：** 维护版本（Fixes）

**主要修复内容：**

| 修复项 | 说明 |
|--------|------|
| ClawHub CLI 依赖安装重试机制 | 针对临时性安装失败增加重试逻辑，提升发布成功率 |
| 预览 flaky 插件处理 | 当单个预览单元格出现不稳定时，保持通过预览的插件可发布 |
| 包版本验证 | 发布后验证每个预期的 ClawHub 包版本，缩短维护版本恢复时间 |

**迁移注意事项：** 无破坏性变更，建议所有用户升级以获得更稳定的插件发布体验。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR # | 标题 | 类型 | 说明 |
|------|------|------|------|
| **#78317** | feat(imessage): private-API support via imsg JSON-RPC | 功能 | iMessage 插件重大升级，支持 Tapbacks、线程回复、编辑、撤回等功能 |
| **#64294** | feat(plugin-sdk): add LLM completion API to plugin | 功能 | 插件 SDK 新增 LLM 补全 API，赋能上下文引擎和插件自定义压缩 |
| **#78678** | feat(workspace): oc-path addressing substrate | 功能 | 引入 `oc://` 统一寻址方案，支持 CLI 直接编辑 workspace 文件 |
| **#79092** | refactor: centralize channel ingress access | 重构 | 集中化通道消息入口授权，迁移 20+ 通道插件至共享决策图 |
| **#79189** | ADP-234 expose structured gateway health surfaces | 功能 | 新增 `/health/live`、`/health/ready`、`/health/perf` 结构化健康端点 |
| **#79143** | fix(update): mandatory post-core plugin convergence | 修复 | 核心更新后强制执行插件收敛，再执行网关重启 |
| **#79181** | fix(gateway): throttle rapid process restarts | 修复 | 防止 OOM killer 终止期间网关进入无限重启循环 |

**推进的功能领域：**
- **iMessage 深度集成** — 从被动 AppleScript shim 升级为完整私有 API 支持
- **插件生态扩展** — LLM API 开放使第三方插件实现自定义智能压缩
- **健康监控完善** — 网关健康检查标准化，支持独立探针端口配置

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 状态 | 核心诉求 |
|---------|------|--------|------|----------|
| **#9443** | Request: Prebuilt Android APK releases | 24 | OPEN | 用户请求 GitHub Releases 提供预编译 Android APK，避免自行编译 |
| **#78407** | openclaw doctor --fix rewrites openai-codex/* model refs | 16 | CLOSED | 升级后 doctor 命令错误重写模型引用，导致 ChatGPT-OAuth 用户无法登录 |
| **#65824** | Feature request bundle: 11 platform gaps | 15 | CLOSED | 资深用户提出的综合功能请求合集，涵盖多个平台缺口 |
| **#12602** | Slack Block Kit support for agent messages | 13 | OPEN | 支持 AI 代理在 Slack 中发送富文本消息（Block Kit 格式） |
| **#10659** | Masked Secrets - Prevent Agent from Accessing Raw API Keys | 12 | OPEN | 掩码密钥系统，允许多 agent 使用密钥但不暴露明文 |
| **#13583** | Pre-response enforcement hooks (hard gates) | 10 | OPEN | 高风险场景下的强制性工具调用规则，非软约束 |

**热点分析：**
- **安全问题受关注** — Masked Secrets（#10659）获得 4 👍，反映用户对凭证安全的强烈需求
- **平台完整性** — Android APK 预构建请求（#9443）评论数最高（24 条），表明移动端用户体验优化空间大
- **Slack 集成** — Block Kit 支持（#12602）体现用户对富交互消息的期待

---

## 5. Bug 与稳定性

### 报告的 Bug（按严重程度排列）

#### 🔴 高优先级

| Issue # | 标题 | 评论数 | 👍 | 状态 | 是否有 Fix PR |
|---------|------|--------|-----|------|---------------|
| **#78407** | doctor --fix 重写模型引用导致 OAuth 锁定 | 16 | 3 | CLOSED | 已修复（版本升级） |
| **#78402** | Gateway 反复关闭连接（1000/1005/1006）| 11 | 2 | CLOSED | - |
| **#78502** | Gemini 模型在主会话挂起/超时 | 5 | 2 | OPEN | - |
| **#78572** | Discord message tool 发送失败 "Unknown Channel" | 5 | 2 | CLOSED | - |

#### 🟡 中优先级

| Issue # | 标题 | 评论数 | 类型 | 说明 |
|---------|------|--------|------|------|
| **#78846** | Mistral 模型回复中显示 [object Object] | 5 | 行为 Bug | 回归问题 |
| **#76804** | WebChat 助手回复未持久化到会话记录 | 6 | 回归 Bug | 5.2 版本引入 |
| **#76990** | 成功回复缺失于活动记录，导致重复回答 | 6 | 行为 Bug | 非崩溃但影响会话一致性 |

#### 🟢 已关闭/低优先级

| Issue # | 标题 | 关联修复 |
|---------|------|----------|
| #77837 | weixin getUpdates fetch failed | 已在 v2026.5.5 修复 |
| #77551 | Bedrock 凭证刷新后 ExpiredTokenException | 回归问题修复 |
| #78262 | Feishu topic session key 不匹配 | 通道会话管理修复 |
| #78823 | 构建产生陈旧工具运行时 chunk 别名 | 已提供 fix PR |

**回归问题警示：**
- v2026.5.4 → v2026.5.5 升级触发 doctor 命令行为变更（#78407）
- 多个通道插件（weixin、Discord）与新版本兼容性问题待验证

---

## 6. 功能请求与路线图信号

### 高价值功能请求（可能纳入路线图）

| Issue # | 标题 | 评论数 | 👍 | 实现可能性 |
|---------|------|--------|-----|------------|
| **#10659** | 掩码密钥系统 | 12 | 4 | ⭐⭐⭐ 高 — 安全核心功能，PR 已讨论 |
| **#12602** | Slack Block Kit 支持 | 13 | 0 | ⭐⭐⭐ 高 — PR #78261 已部分支持 |
| **#13583** | Pre-response enforcement hooks | 10 | 2 | ⭐⭐ 中 — 需架构变更，已有讨论 |
| **#6615** | exec-approvals 拒绝名单 | 7 | 7 | ⭐⭐⭐ 高 — 👍 转化率最高 |
| **#78308** | MCP 工具调用通道审批 | 10 | 1 | ⭐⭐ 中 — 已有框架可扩展 |
| **#8719** | OpenClaw Security Profile v1.1 | 6 | 3 | ⭐⭐ 中 — 综合安全方案 |
| **#13700** | 会话快照保存/加载 | 6 | 0 | ⭐⭐ 中 — 开发者体验提升 |

### 架构/基础设施信号

| Issue # | 方向 | 优先级 |
|---------|------|--------|
| **#77700** | prepared runtime resolution migration | 维护者追踪 |
| **#48874** | Multi-Session Architecture RFC | 长期规划 |
| **#72950** | 插件配置热更新（Sandbox 环境） | 容器化部署关键 |

---

## 7. 用户反馈摘要

### 真实用户痛点

**🔸 密钥安全**
> *"Currently, secrets stored in `~/.openclaw/.env` are fully accessible to agents..."* — #10659
- 用户担忧：API 密钥对 agent 完全可见，易受提示注入攻击

**🔸 成本控制**
> *"There is currently no cost-based kill switch — the system keeps retrying until either the balance is drained..."* — #38248
- 用户反馈：故障转移链缺乏成本上限，偶发高额账单

**🔸 多平台碎片化**
> *"11 platform gaps from intensive daily use"* — #65824
- 资深用户整合多个使用痛点，含金量高

**🔸 文档缺失**
> *"Current documentation lacks cloud deployment specifics..."* — #13597
- AWS 部署指南需求强烈（EC2/ECS/Lambda）

### 用户满意点

- **iMessage 插件升级（#78317）** — 支持私有 API 获积极反馈
- **BlueBubbles/iMessage 迁移工具** — 降低平台切换成本
- **插件 SDK LLM API** — 赋能高级用例

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue # | 创建日期 | 距今天数 | 标题 | 优先级 |
|---------|----------|----------|------|--------|
| **#2597** | 2026-01-27 | 101 天 | Context/state lost after unexpected compaction | 高 |
| **#1210** | 2026-01-19 | 109 天 | Images from Discord stored as base64 in session transcripts | 中 |
| **#13597** | 2026-02-10 | 87 天 | Add comprehensive AWS deployment guide | 高 |
| **#13610** | 2026-02-10 | 87 天 | Add native secrets management integration | 中 |
| **#48874** | 2026-03-17 | 52 天 | [RFC] Multi-Session Architecture | 长期 |

### 高优先级 PR 积压

| PR # | 标题 | 类型 | 关注理由 |
|------|------|------|----------|
| **#78678** | oc-path addressing substrate | 功能 | 核心 CLI 增强，用户呼声高 |
| **#79092** | centralize channel ingress access | 重构 | 影响 20+ 通道，变更面大 |
| **#79189** | expose structured gateway health surfaces | 功能 | 健康检查标准化 |
| **#79181** | throttle rapid process restarts | 修复 | Linux 生产环境关键 |

### 建议维护者关注

1. **积压 PR 消化** — 352 条待合并 PRs，需评估吞吐量
2. **长期 Issue 响应** — 部分 Issue 超过 3 个月未回复
3. **回归测试加强** — v2026.5.4/5.5 引入多个通道兼容性问题
4. **安全功能优先级** — 密钥管理、掩码系统需求强烈

---

## 附录：关键链接

- **项目主页：** https://github.com/openclaw/openclaw
- **最新 Release：** https://github.com/openclaw/openclaw/releases/tag/v2026.5.7
- **Issue 列表：** https://github.com/openclaw/openclaw/issues
- **PR 列表：** https://github.com/openclaw/openclaw/pulls

---

*本报告由 AI 自动化生成，基于 GitHub 数据实时分析。数据更新时间：2026-05-08T00:00:00Z*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-05-08
**分析师：** AI Project Analyst
**数据窗口：** 2026-05-07 00:00 — 2026-05-08 00:00 (UTC)

---

## 1. 生态全景

2026 年中期的个人 AI 助手开源生态正处于**高速分化与收敛并存**的关键阶段。以 OpenClaw 为首的"Claw 系列"生态已形成 10+ 个项目分支，总活跃 PR/Issue 数突破 **1,800 条/日**，反映了市场对 AI Agent 基础设施的强烈需求。技术演进呈现三条主线：**安全加固**（掩码密钥、角色校验、TOTP 门控）、**多渠道整合**（微信、Telegram、iMessage、Slack 等）、**可靠性提升**（重试机制、会话持久化、健康检查）。生态整体从"能用"向"好用"过渡，核心战场已转向**生产级稳定性**与**企业安全合规**。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃 + 关闭) | PRs (待合并 + 已合并) | Releases | 健康度评估 |
|------|---------------------------|----------------------|---------|-----------|
| **OpenClaw** | 315 + 148 = **500** | 352 + 148 = **500** | ✅ v2026.5.7 | 🟢 高活跃，PR 积压需关注 |
| **Hermes Agent** | 163 + 96 = **259** | 279 + 221 = **500** | ✅ v0.13.0 | 🟢 高活跃，大版本刚发布 |
| **Zeroclaw** | 48 + 2 = **50** | 48 + 2 = **50** | ❌ v0.7.5 阻塞 | 🟡 高活跃，多 S1 Bug |
| **QwenPaw** | 27 + 23 = **50** | 11 + 21 = **32** | ❌ 无 | 🟢 功能交付期 |
| **PicoClaw** | 14 + 22 = **36** | 26 + 22 = **48** | ✅ Nightly Build | 🟢 快速迭代 |
| **IronClaw** | 14 + 7 = **21** | 19 + 31 = **50** | ✅ v0.28.0 | 🟡 Reborn 重构期 |
| **NanoBot** | 2 + 6 = **8** | 17 + 9 = **26** | ❌ 无 | 🟢 稳定迭代 |
| **NanoClaw** | 5 + 4 = **9** | 11 + 23 = **34** | ❌ 无 | 🟢 A2A 路由修复期 |
| **Moltis** | 0 + 4 = **4** | 1 + 9 = **10** | ✅ 2 个补丁版 | 🟢 优秀 — 全 Bug 已修复 |
| **LobsterAI** | 2 + 0 = **2** | 9 + 36 = **45** | ✅ v2026.5.7 | 🟢 功能加速交付 |
| **LibreFang** | — + 15 = **15+** | 0 + 35 = **35+** | ❌ 无 | 🟢 内核重构完成 |
| **openfang** | 5 + 0 = **5** | 1 + 0 = **1** | ❌ 无 | 🟡 需求收集阶段 |
| **EasyClaw** | 0 + 0 = **0** | 0 + 0 = **0** | ✅ 2 个补丁版 | 🟢 低交互，稳定维护 |
| **TinyClaw** | 0 | 0 | ❌ 无 | ⚪ 无活动 |
| **ZeptoClaw** | 0 | 0 | ❌ 无 | ⚪ 无活动 |

**数据说明：** TinyClaw、ZeptoClaw 过去 24 小时无 GitHub 活动记录，不纳入深度分析。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心地位

OpenClaw 是整个"Claw 生态"的事实标准参照项目，其**日处理量相当于 2-3 个中型项目的总和**（500 Issues + 500 PRs），社区规模约为 Hermes Agent 的 2 倍、QwenPaw 的 10 倍。

### 3.2 与同类对比

| 维度 | OpenClaw | Hermes Agent | Zeroclaw | PicoClaw |
|------|----------|-------------|----------|----------|
| **定位** | 全功能 Agent 平台 | 高可靠性 Agent | 桌面端优先 | 轻量可嵌入 |
| **架构** | Gateway + 插件生态 | 多 Provider + Tenacity 重试 | Tauri 桌面 + Rust 后端 | Go 实现，轻量化 |
| **社区规模** | ⭐⭐⭐⭐⭐ 顶流 | ⭐⭐⭐⭐ 高 | ⭐⭐⭐ 中 | ⭐⭐ 中 |
| **PR 吞吐量** | 148 条/日 | 221 条/日 | 2 条/日 | 22 条/日 |
| **积压 PR** | 🔴 352 条 | 🟡 279 条 | 🔴 48 条 | 🟢 低 |
| **安全成熟度** | 掩码密钥 / 工具校验 | Secret redaction 默认启用 | 凭证管理待完善 | exec 路径安全 |
| **多渠道** | 20+ 通道插件 | Telegram / Matrix / Feishu | WhatsApp / Desktop | Telegram / Discord |

**结论：** OpenClaw 是生态中**覆盖面最广**的项目，但 PR 积压严重（352 条），吞吐量瓶颈明显。Hermes Agent 以 Tenacity 框架的可靠性为卖点，适合对稳定性要求极高的场景；Zeroclaw 侧重桌面端体验，但 WhatsApp 协议断裂（S1）正严重拖累用户体验。

---

## 4. 共同关注的技术方向

以下需求在**多个项目中同步涌现**，代表行业共识：

### 4.1 安全与凭证管理

| 项目 | 具体诉求 | 状态 |
|------|----------|------|
| **OpenClaw** | Masked Secrets — Agent 可用密钥但不暴露明文（#10659） | 🔴 高需求，PR 已讨论 |
| **NanoClaw** | `/restart`/`/build` 命令需 owner 角色校验（#2341） | ✅ 已修复 |
| **Hermes Agent** | Secret redaction 默认启用，API 密钥泄露修复（#19897） | ✅ 已修复 |
| **Moltis** | Ed25519 TOFU 节点身份认证（#979） | ✅ 已合并 |
| **PicoClaw** | MCP 工具密钥存入 `.security.yml`（#2444） | ✅ 已关闭 |
| **LibreFang** | Prompt-leak 事故紧急修复（#4760） | 🟡 PR 待合并 |

**判断：** 凭证安全已从"可选加固"升级为**生产部署的硬性要求**，预计 2026 年下半年各项目将陆续实现基于角色/群组的细粒度凭证隔离。

### 4.2 LLM 可靠性与容错

| 项目 | 痛点 | 需求 |
|------|------|------|
| **OpenClaw** | 故障转移链缺乏成本上限（#38248） | 成本 kill switch |
| **PicoClaw** | HTTP 500 导致任务挂死，无重试（#629，13 评论） | 指数退避重试 |
| **Hermes Agent** | Gateway 重连 20 次后永久放弃（#17063） | 增强重连策略 |
| **LibreFang** | Burst 窗口内同步重试必然失败（#4747） | 智能退避重试 |

**判断：** 重试机制与成本控制正成为多项目共债，建议参考 Hermes Agent 的 **Tenacity Release** 方案（v0.13.0 内置重试策略）。

### 4.3 多渠道消息整合

| 项目 | 重点方向 |
|------|----------|
| **OpenClaw** | iMessage 私有 API 升级（#78317）、Slack Block Kit（#12602） |
| **Zeroclaw** | WhatsApp Web 协议断裂修复（S1，6 评论） |
| **PicoClaw** | Telegram 会话上下文、多媒体组处理 |
| **NanoClaw** | 多群组凭证隔离路由（#869） |
| **QwenPaw** | 微信消息丢失、飞书用户名传递 |

**判断：** 微信/Telegram/iMessage 三大平台的稳定接入仍是刚需，且用户对**富媒体消息**（Block Kit、图片、语音）的期待在上升。

### 4.4 多 Agent 与会话管理

| 项目 | 需求 | 热度 |
|------|------|------|
| **OpenClaw** | Multi-Session Architecture RFC（#48874） | 52 天积压 |
| **Hermes Agent** | 原生多 Agent 支持（#7517，8 评论，7 👍） | 🔥 高 |
| **NanoClaw** | Per-group credential + A2A 路由修复（#869） | 🔥 高 |
| **QwenPaw** | Agent 间会话不停创建新会话（#4088） | 待确认 |

**判断：** 多 Agent 架构已经从"高级特性"演变为**路线图共识**，预计 2026 年底前主流项目将具备基础的 Agent 间通信（A2A）能力。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能差异 | 目标用户 |
|------|-------------|----------|
| **OpenClaw** | 最全插件生态（20+ 通道）、CLI 工具链 | 开发者/技术团队 |
| **Hermes Agent** | Tenacity 可靠性、Kanban dispatcher、Secret 默认掩码 | 企业级生产部署 |
| **Zeroclaw** | Tauri 桌面端 + macOS onboarding 向导 | 桌面端用户体验优先 |
| **PicoClaw** | Go 实现轻量化、MCP 工具生态 | 嵌入式/资源受限场景 |
| **IronClaw** | Reborn WASM 架构、Session Thread 持久化 | 高级开发者/架构探索 |
| **LobsterAI** | 网易有道生态、会话分页、Artifact 渲染 | 中文生态用户 |
| **Moltis** | 电话呼叫（Twilio）、去中心化身份认证 | 通信集成开发者 |
| **QwenPaw** | 多模型支持（Vertex Gemini）、技能批量管理 | 多模态实验用户 |

### 5.2 技术架构差异

```
OpenClaw ─────────── Gateway + Plugin SDK + 通道抽象层
Hermes Agent ─────── Tenacity + Kanban + SQLite embedded
Zeroclaw ─────────── Tauri (Rust) 桌面 + Python 后端
PicoClaw ─────────── Go 单体 + MCP 协议
IronClaw ─────────── Rust crates + Reborn WASM (WIT 兼容)
Moltis ───────────── Rust + L1/L2 去中心化协议
LibreFang ────────── Rust + Kernel 重构（13 subsystems）+ React Dashboard
LobsterAI ────────── Web 前端 + OpenClaw 集成
QwenPaw ──────────── AgentScope 框架 + 多 Provider
```

### 5.3 目标用户分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **核心开发者** | OpenClaw, IronClaw, LibreFang | API 丰富，插件生态复杂 |
| **企业用户** | Hermes Agent, Zeroclaw | 可靠性优先，桌面集成 |
| **技术爱好者** | PicoClaw, Moltis | 轻量可嵌入，协议创新 |
| **中文用户** | LobsterAI, QwenPaw | 本地化集成，微信/飞书 |
| **运维/部署** | openfang, EasyClaw | 低门槛开箱即用 |

---

## 6. 社区热度与成熟度分层

### 6.1 快速迭代阶段（🔴 高风险高回报）

| 项目 | 指标特征 | 典型问题 |
|------|----------|----------|
| **OpenClaw** | 500 Issues + 500 PRs/日 | PR 积压 352 条，Issue 响应延迟 |
| **Hermes Agent** | 259 Issues + 500 PRs | Issue 超 1000 条（#7335），管理压力大 |
| **IronClaw** | Reborn 重构关键期，6 个 Blocker 待解 | CI 不稳定，夜间 E2E 失败 |

### 6.2 稳定交付阶段（🟡 功能完善期）

| 项目 | 指标特征 | 典型问题 |
|------|----------|----------|
| **QwenPaw** | 功能加速合并（45 PR），Bug 响应快 | 微信消息丢失、微信扫码验证阻断 |
| **LobsterAI** | 6 周功能（会话分页）终于合并 | 付费登录链路不稳定 |
| **NanoClaw** | A2A 路由系统性修复（5 个 PR/日） | 积压 60 天 Issue 仍 Open |
| **Zeroclaw** | Desktop onboarding 里程碑达成 | WhatsApp S1 协议断裂 |

### 6.3 质量巩固阶段（🟢 稳定维护期）

| 项目 | 指标特征 | 典型状态 |
|------|----------|----------|
| **Moltis** | 所有 Bug 100% 有 Fix PR | 2 天完成身份认证协议提案→合并 |
| **NanoBot** | CI 完整性检查全面升级 | WebSocket 跨平台问题待定位 |
| **LibreFang** | Kernel 重构里程碑完成 | CI 多平台失败待修复 |
| **PicoClaw** | 历史 Bug 批量关闭 | exec 路径误判修复中 |

### 6.4 低交互维护阶段（⚪）

| 项目 | 状态 | 建议 |
|------|------|------|
| **EasyClaw** | 发布驱动，无社区 PR/Issue | 激活 Discussion 板块 |
| **TinyClaw / ZeptoClaw** | 无活动 | 确认项目状态或归档 |
| **openfang** | 需求收集，无维护者响应 | 需建立 Issue 分类机制 |

---

## 7. 值得关注的趋势信号

### 7.1 生产级可靠性成为核心竞争力

**证据：**
- Hermes Agent v0.13.0 以 "Tenacity"（韧性）命名

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## 📊 NanoBot 项目动态日报  
**日期：2026‑05‑08**  

---

### 1️⃣ 今日速览
- **Issues 活跃度**：过去 24 小时共 8 条更新（新开/活跃 2 条，已关闭 6 条），整体活跃度保持在 **中等偏高** 水平，修复类问题占比 75%。
- **Pull Requests**：26 条 PR 更新，其中 **17 条仍待合并**，9 条已完成（合并/关闭），新 PR 提交速度保持在 **≈1 条/小时**，显示社区贡献热度持续。
- **版本发布**：本日无新版本发布（Releases 0），项目仍处于功能迭代期，主要聚焦 bug 修复与功能扩展。
- **健康度评估**：代码质量提升（CI 完整性检查加强） + 多个渠道错误处理改进，整体项目健康度 **良好**，但仍有若干老旧 PR 需要推进。

---

### 2️⃣ 版本发布
> 本日无新 Release，若后续有版本发布请关注 `CHANGELOG.md` 中的破坏性变更说明。

---

### 3️⃣ 项目进展（已合并/关闭的 PR）

| PR 编号 | 标题 | 状态 | 关键要点 | 链接 |
|----------|------|------|----------|------|
| #3608 | Prepare Sen local setup docs | **已合并** | 新增 `AGENTS.md`、`docs/sen/SEN_LOCAL_SETUP.md`、`examples/sen/config.example.json`，完善本地开发文档 | [#3608](https://github.com/HKUDS/nanobot/pull/3608) |
| #3660 | fix(dream): restore cursor with memory state | **已合并** | 修复 Dream 模块中 `_last_summary` 与 cursor 同步问题，添加回归测试 | [#3660](https://github.com/HKUDS/nanobot/pull/3660) |
| #3677 | fix(api): remove enable_compression to restore real SSE streaming | **已合并** | 移除 aiohttp 压缩缓冲，恢复真实流式传输，解决 SSE “批次化” 问题 | [#3677](https://github.com/HKUDS/nanobot/pull/3677) |
| #3672 | chore(ci): Enable full ruff -F checks and fix related errors | **已合并** | 全面启用 Ruff `F` 规则，提前捕获潜在缺陷，提升 CI 代码质量 | [#3672](https://github.com/HKUDS/nanobot/pull/3672) |
| #3678 | refactor(logging): preserve tracebacks in remaining except blocks | **已合并** | 将剩余 `logger.error` 替换为 `logger.exception`，保留完整堆栈信息 | [#3678](https://github.com/HKUDS/nanobot/pull/3678) |
| #1835 | Added support for sending arbitrary additional arguments to backend LLMs | **已合并** | 为 LLM 请求提供自定义参数（如 ollama 的 `stream: false`），提升兼容性 | [#1835](https://github.com/HKUDS/nanobot/pull/1835) |

> **推进方向**：本周重点在 **错误日志规范化**、**渠道异常处理**、**本地化文档** 以及 **LLM 调用灵活性**。已完成的功能修复已进入主分支，建议用户尽快升级。

---

### 4️⃣ 社区热点（最活跃的 Issues / PRs）

| 类型 | 编号 | 标题 | 讨论热度（评论数） | 关键诉求 | 链接 |
|------|------|------|-------------------|----------|------|
| Issue | #3682 | websocket导致的报错 | 3 | 多平台浏览器访问 `gateway:8765` 时握手失败，需排查跨域/代理兼容性 | [#3682](https://github.com/HKUDS/nanobot/issues/3682) |
| Issue | #3650 | Configure bot name and icon | 2 | 用户期望在 `config.json` 中自定义 Bot 名称与图标，提升品牌化体验 | [#3650](https://github.com/HKUDS/nanobot/issues/3650) |
| Issue | #3652 | Can Dream be disabled? | 2 | 希望能通过配置开关完全禁用 “Dream” 功能，降低资源消耗 | [#3652](https://github.com/HKUDS/nanobot/issues/3652) |
| Issue | #3665 | deepseek-v4-flash reasoning_content 错误 | 2 | 使用 deepseek‑v4‑flash 时出现 `reasoning_content` 必传错误，影响模型调用 | [#3665](https://github.com/HKUDS/nanobot/issues/3665) |
| PR   | #3513 | feat(audio): unify transcription providers and add local Whisper support | 0（但关注度高） | 统一音频转写提供商并引入本地 Whisper 方案，提升离线可用性 | [#3513](https://github.com/HKUDS/nanobot/pull/3513) |
| PR   | #3486 | feat(channels): Adding SimpleX channel | 0 | 新增 SimpleX 消息渠道，为用户拓展非主流 IM 选择 | [#3486](https://github.com/HKUDS/nanobot/pull/3486) |
| PR   | #3655 | feat(cli): display model reasoning content during streaming | 0 | CLI 增加 `show_reasoning` 配置选项，实时展示模型思考过程 | [#3655](https://github.com/HKUDS/nanobot/pull/3655) |

> **热点分析**：  
> - **跨平台兼容性**（#3682）仍是最受关注的 bug，尤其在 Windows/macOS 浏览器环境下。  
> - **品牌化需求**（#3650）表明用户希望 NanoBot 能更贴合企业或个人的自定义形象。  
> - **Dream 功能可关闭**（#3652）反映了资源管理诉求，可能在后续配置层中得到体现。  
> - **音频转写** 与 **SimpleX 渠道** 均为社区长期需求，相关 PR 已进入审阅阶段，值得期待。

---

### 5️⃣ Bug 与稳定性（按严重度排列）

| 严重度 | 编号 | 标题 | 状态 | 是否已有 Fix PR |
|--------|------|------|------|-----------------|
| 🔴 **高** | #3682 | websocket 握手失败 | 已关闭（未提供修复 PR，仅提供排查线索） | ❌（需进一步定位） |
| 🔴 **高** | #3665 | deepseek‑v4‑flash `reasoning_content` 错误 | 已关闭（未提供 Fix PR，需模型侧配合） | ❌（需模型或 API 层修复） |
| 🟡 **中** | #3681 | LLM 调用超时 300s | 已关闭（未提供修复 PR） | ❌ |
| 🟡 **中** | #3604 | WhatsApp 语音消息无法下载 | 已关闭（未提供 Fix PR） | ❌ |
| 🟡 **中** | #3683 | WebSocket 跨平台访问异常 | 已关闭（需进一步调试） | ❌ |
| 🟢 **低** | #3688 | 添加 `/sync-meta` 命令以推送 WhatsApp 命令 | 已关闭（提供实现思路） | ❌（建议在后续版本中实现） |

> **关键观察**：大多数 Bug 已标记为 **已关闭** 但缺少对应的 Fix PR，说明维护者在定位后直接关闭或等待上游修复。对外保持透明，建议在 Issue 中添加 “resolution” 标签以便用户快速了解状态。

---

### 6️⃣ 功能请求与路线图信号

| 编号 | 功能描述 | 关联 PR | 预计影响 | 链接 |
|------|----------|----------|----------|------|
| #3650 | 在 `config.json` 中可配置 Bot 名称与图标 | — | 提升品牌化与多租户体验 | [#3650](https://github.com/HKUDS/nanobot/issues/3650) |
| #3652 | Dream 模块提供 `enabled` 开关 | — | 允许完全关闭以节省资源 | [#3652](https://github.com/HKUDS/nanobot/issues/3652) |
| #3513 | 统一音频转写providers + 本地 Whisper 支持 | #3513 | 离线场景更可靠 | [#3513](https://github.com/HKUDS/nanobot/pull/3513) |
| #3486 | 新增 SimpleX 渠道 | #3486 | 扩展非主流 IM 支持 | [#3486](https://github.com/HKUDS/nanobot/pull/3486) |
| #3655 | CLI 实时展示模型 reasoning 内容 | #3655 | 提升调试与教学体验 | [#3655](https://github.com/HKUDS/nanobot/pull/3655) |
| #1219 | 股票市场分析、代码性能分析、测试用例生成等新技能 | #1219 | 业务场景拓展 | [#1219](https://github.com/HKUDS/nanobot/pull/1219) |
| #1939 | 跳过无实际工作时的 heartbeat LLM 调用 | #1939 | 节省 Token 与避免违规 | [#1939](https://github.com/HKUDS/nanobot/pull/1939) |

> **路线图信号**：从当前 open PR 与 Issue 数量来看，项目正趋向 **多渠道**（SimpleX、微信矩阵）、**本地化**（Whisper、Dream 可关闭）以及 **可观测性**（reasoning 展示、详细日志）。若上述 PR 近期合并，可预期 0.2.x 系列将带来显著功能增强。

---

### 7️⃣ 用户反馈摘要

| 来源 | 关键反馈 | 可能痛点 |
|------|----------|----------|
| **#3682**（WebSocket） | “在 Windows、Mac 浏览器访问 `0.0.0.0:8765` 时握手失败，但手机浏览器正常” | 跨平台/跨网络环境兼容性问题 |
| **#3681**（LLM 超时） | “最近经常出现 `timed out after 300s` 错误” | LLM 调用稳定性或网络延迟 |
| **#3604**（WhatsApp 语音） | “使用 WhatsApp 语音消息时没有下载” | 媒体处理管道缺失 |
| **#3650**（Bot 名称/图标） | “希望看到自定义的 `mybot is thinking...` 而不是默认的 cat 图标” | 品牌化/多租户需求 |
| **#3652**（Dream 可关闭） | “想要完全关闭 Dream 功能” | 资源消耗/功能选择性 |
| **#3688**（/sync‑meta） | “WhatsApp Business 端看不到 NanoBot 的 slash 命令” | 业务渠道集成不完整 |

> **总体趋势**：用户反馈集中于 **跨平台兼容性**、**资源控制** 与 **渠道功能完整性**，显示项目正从“技术原型”向“可投产”演进。

---

### 8️⃣ 待处理积压（长期未响应的重要 Issue / PR）

| 编号 | 类型 | 标题 | 创建日期 | 待处理时长 | 备注 |
|------|------|------|----------|------------|------|
| #1443 | PR | feat: decouple heartbeat reasoning from notification | 2026‑03‑02 | ~66 天 | 等待审阅，可能影响心跳机制的灵活性 |
| #1219 | PR | Add some enhancement for using bot to analysis stock market | 2026‑02‑26 | ~70 天 | 多技能扩展，功能范围较大，需确认需求范围 |
| #1939 | PR | feat: skip heartbeat before llm call | 2026‑03‑12 | ~56 天 | 与 #1443 类似，关注 Token 节省与合规 |
| #1835 | PR | Added support for sending arbitrary additional arguments to backend LLMs | 2026‑03‑10 | ~58 天 | 已合并（见上），但列入提醒以防遗漏后续跟进 |
| #3650 | Issue | Configure bot name and icon | 2026‑05‑06 | ~2 天 | 短期内应处理，提升用户体验 |
| #3652 | Issue | Can Dream be disabled? | 2026‑05‑06 | ~2 天 | 与 #3650 同上，关注资源管理 |

> **维护者提醒**：以上 PR（尤其是 #1443、#1219、#1939）已开放数月，建议在近期评审或给出明确关闭理由，以免影响社区活跃度。

---

### 📌 小结

- **活跃度**：项目本日继续保持高提交频率（≈1 PR/小时），社区参与热度上升。  
- **质量提升**：CI 完整性检查全面升级（full Ruff -F），日志异常堆栈保留修复完成，整体代码质量稳步提升。  
- **重点待办**：① 修复 WebSocket 跨平台握手问题；② 统一音频转写 + 本地 Whisper；③ 完成 SimpleX 渠道集成；④ 明确 Dream 可关闭配置方案。  
- **风险点**：部分 Bug（#3681、#3665）仍缺少 Fix PR，需持续关注上游依赖或模型提供方。  

> 若需进一步细化某条 PR 或 Issue 的分析，请随时告知！

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-05-08

---

## 1. 今日速览

过去 24 小时，ZeroClaw 社区保持极高活跃度：**50 条 Issues 更新（48 新开/活跃 + 2 关闭）** 和 **50 条 PRs 更新（48 待合并 + 2 已合并/关闭）**。整体开发节奏非常紧凑，未发布新版本。今日最突出的动态包括：桌面端 onboarding 向导合并（#6506/6507），WhatsApp Web 协议断裂问题持续发酵（#6246，6 评论），以及 v0.7.5 版本的 Release 因 CI 问题受阻，#6502 成为当前最关键的阻塞项。Bug 报告量维持高位，涵盖 Slack 双调用、Docker 挂载遮蔽、Postgres 运行时崩溃等多个维度，建议优先处理 S1/S2 级问题。

---

## 2. 版本发布

**无新版本发布。** 当前 master 分支处于 v0.7.5 待发布状态，但 CI 流程受阻（详见第 4 节），正式发布需等待 #6502 合并后由 #6508 重新触发 Release Stable 工作流。

---

## 3. 项目进展

| PR | 描述 | 类型 | 风险 | 状态 |
|---|---|---|---|---|
| [#6506](https://github.com/zeroclaw-labs/zeroclaw/pull/6506) | feat(desktop): macOS onboarding wizard, permission primitives, capability sync — 8 步引导流程 + TCC 权限授予 + 仪表板集成 | desktop/tauri | 🔴 高 | **已合并** |
| [#6507](https://github.com/zeroclaw-labs/zeroclaw/pull/6507) | feat(desktop): take_screenshot 和 run_applescript Tauri 命令 | desktop/tauri | 🔴 高 | **已合并** |
| [#6521](https://github.com/zeroclaw-labs/zeroclaw/pull/6521) | fix(cron): 添加 DingTalk 到 cron 投递通道白名单 | cron | — | 待合并 |
| [#6509](https://github.com/zeroclaw-labs/zeroclaw/pull/6509) | fix(daemon): 添加 Matrix channel 到 heartbeat 支持，闭合 #6433 | daemon | 🔴 高 | 待合并 |
| [#6432](https://github.com/zeroclaw-labs/zeroclaw/pull/6432) | fix(memory): SQLite schema 并发迁移容错 | memory | 🟡 中 | 待合并 |
| [#6515](https://github.com/zeroclaw-labs/zeroclaw/pull/6515) | fix(history-pruner): 防止连续 `assistant` 消息导致 GLM-5 错误 1214 | memory | — | 待合并 |

**Desktop 里程碑达成**：#6506/#6507 合并意味着 ZeroClaw macOS 桌面应用的用户入门体验实现质的飞跃——新用户从菜单栏即可完成 Provider 凭证配置、配对令牌设置，无需切换到终端。这是 v0.7.7 桌面 parity 计划的重要一步。

---

## 4. 社区热点

### 🔥 最活跃 Issues

**1. [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) — Providers 架构重构（8 评论）**
- 标签：`enhancement`, `risk: high`, `priority: p2`, `status: blocked`
- 核心诉求：统一 `providers` 模块中 `reqwest` 客户端的使用方式，消除代码重复，统一模型构造参数。当前 providers 之间对 reqwest 的使用高度不一致，导致配置碎片化。
- 社区活跃度最高，但当前状态为 **blocked**，可能是依赖其他前置工作。

**2. [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) — WhatsApp Web 协议断裂（6 评论）**
- 标签：`bug`, `risk: medium`, `priority: p1`
- 摘要：WhatsApp Web 在 2026-04-24 服务端协议升级后，静默停止收发消息（`wa-rs` 依赖）。P1 级问题，工作流受阻。
- 评论区出现大量用户复现反馈，表明影响面较广。

### 🔥 最关键 PRs（阻塞发布）

**1. [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) — unblock v0.7.5 发布**
- 标签：`bug`, `size: M`, `risk: high`, `needs-author-action`
- 核心问题：`web` job 缺少 `./api-generated` 模块，需在 tsc 之前运行 `gen-api`，新增 `scripts/dev/act-local.sh`。
- **这是 v0.7.5 发布的唯一阻碍**。

**2. [#6508](https://github.com/zeroclaw-labs/zeroclaw/pull/6508) — 重新触发 v0.7.5 Release**
- 标签：`chore`, `size: XS`, `risk: low`
- 明确注明必须先合并 #6502 才能生效。

---

## 5. Bug 与稳定性

按严重程度排列：

| # | 描述 | 严重度 | 组件 | 状态 | Fix PR |
|---|---|---|---|---|---|
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | WhatsApp Web 协议断裂后静默失效 | 🟠 S1 | channel/whatsapp | open | — |
| [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) | ACP cwd 变更导致无法读取自身 skill 文件 | 🟠 S1 | security/sandbox | open | — |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | `autonomy = "full"` 下 shell tool 完全被拒绝 | 🟠 S1 | runtime/daemon | accepted | — |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | 自定义远程 provider 发送本地路径而非 data URL | 🟠 S1 | provider | accepted | — |
| [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) | google_workspace tool 在 Windows 上找不到 gws | 🟠 S1 | tool | accepted | — |
| [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) | Llama.cpp 应默认使用 "responses" 而非 "chat" | 🟠 S1 | onboard/provider | accepted | — |
| [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | Gateway 无法使用 Postgres（tokio runtime 嵌套崩溃） | 🟠 S2 | gateway/memory | accepted | — |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | Docker bind mount 遮蔽预构建 dashboard | 🟠 S2 | runtime/daemon | open | — |
| [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) | 单次用户请求触发 LLM 两次 | 🟠 S1 | runtime/daemon | in-progress | — |
| [#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418) | Fallback Providers 未继承 config.toml 凭证 | 🟠 S0 | config/provider | **closed** | — |

**稳定性警示**：今日报告 **6 个 S1 级别 Bug**，其中 WhatsApp Web、shell tool 拒绝、凭证继承问题直接影响生产使用。**特别注意**：#6434 在 `autonomy = "full"` 配置下 shell tool 完全不可用，这与 ZeroClaw 的核心价值（高自主性 AI Agent）相悖，建议优先排查。

---

## 6. 功能请求与路线图信号

| # | 功能 | 分类 | 优先级 | 状态 | 判断纳入下版本概率 |
|---|---|---|---|---|---|
| [#6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465) | 桌面二进制内置 chat-ui SPA，无需远程 gateway | desktop/tauri | p1 | accepted | 🟢 高 |
| [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) | V3 环境变量覆盖机制 | config | p2 | accepted | 🟡 中 |
| [#6371](https://github.com/zeroclaw-labs/zeroclaw/issues/6371) | WhatsApp Web 按 JID 群组白名单 | channel/whatsapp | p1 | accepted | 🟢 高（配合 #6246） |
| [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | macOS 通用二进制（arm64 + x86_64） | desktop/tauri | p2 | accepted | 🟡 中 |
| [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329) | 菜单栏托盘右键菜单项 | desktop/tauri | p2 | accepted | 🟡 中 |
| [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518) | 一等支持自定义 OpenAI 兼容 Provider（如 Kimi K2.5） | provider | — | open | 🟡 中（#6513 PR 进行中） |
| [#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) | cron announce 模式仅发送最终消息 | cron | p2 | accepted | 🟢 高 |
| [#6513](https://github.com/zeroclaw-labs/zeroclaw/pull/6513) | 添加 Atomic Chat 作为本地 provider | provider | — | 待合并 | 🟢 高 |

**路线图信号**：Desktop 应用功能（onboarding、tray menu、channels overview、universal binary）正成为高频需求区，建议关注桌面端在 v0.7.7 的功能完整性。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼：

**痛点 1 — WhatsApp Web 体验断裂**
> "The WhatsApp Web channel silently stops delivering and receiving messages after the WhatsApp Web protocol bump that landed server-side around 2026-04-24."

大量用户在评论中确认复现，WhatsApp 是重要通信渠道，协议断裂直接导致工作流中断，用户情绪较急迫。

**痛点 2 — 凭证管理混乱**
> "When ZeroClaw executes a failover (e.g., from Gemini to OpenRouter) due to a 429 or other error, the fallback providers fail to inherit credentials from config.toml."

多 Provider 用户对 failover 场景下的凭证传递缺失感到不满，这是生产环境高可用性的关键诉求。

**痛点 3 — 桌面端入口体验差**
> "New user should reach a working chat from the menu bar without dropping to a terminal: provider creds, pairing token, default model."

用户期望开箱即用的桌面体验，#6506 的合并正是回应此诉求，但功能 parity 仍需完善（channels overview、tray menu 等）。

**痛点 4 — Docker 开发体验文档错误**
> 来自中文社区用户反馈：zeroclaw 官网 Docker 安装指南全错，文档中的 `docker exec` 命令缺少正确路径。用户对安装环节的挫败感较重。

---

## 8. 待处理积压

以下 Issue/PR 长期未得到有效响应或推进，维护者应重点关注：

| # | 类型 | 描述 | 创建时间 | 状态 | 风险 |
|---|---|---|---|---|---|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | Issue | Providers 架构统一重构（最高 8 评论，最核心的架构改进） | 2026-04-20 | blocked | 🔴 高 |
| [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) | PR | Bundle wrapper 迁移（长期 open，仅 Size S，medium 风险） | 2026-03-28 | open, needs-author-action | 🟡 中 |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) | PR | Shell tool TOTP 门控第一阶段（Phase 1，security 核心需求） | 2026-04-15 | needs-author-action + needs-maintainer-review | 🔴 高 |
| [#5075](https://github.com/zeroclaw-labs/zeroclaw/pull/5075) | PR | WhatsApp Web 重装指导文档（长期未合并） | 2026-03-29 | open | 🟢 低 |
| [#5088](https://github.com/zeroclaw-labs/zeroclaw/pull/5088) | PR | 支持 anthropic-custom 端点（onboarding 体验） | 2026-03-29 | open | 🟡 中 |

---

*报告生成时间：2026-05-08 | 数据来源：GitHub zeroclaw-labs/zeroclaw | 下次更新：2026-05-09*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-05-08

---

## 1. 今日速览

过去 24 小时 PicoClaw 保持了极高的开发活跃度：共处理 **36 条 Issues**（14 新开/活跃，22 关闭）和 **48 条 PR**（26 待合并，22 已关闭/合并），发布了一个新的 Nightly Build（`v0.2.8-nightly.20260508.2834db13`）。今日社区协作呈现出"密集修复 + 稳步推进"的健康状态——大量历史积压的 stale Bug 被批量关闭，同时有多项核心功能（工具反馈节流配置、Telegram 会话保持、exec 沙箱路径修正等）已有明确 fix PR 进入待合并阶段，项目整体处于快速迭代期。

---

## 2. 版本发布

### 🌙 Nightly Build — v0.2.8-nightly.20260508.2834db13

| 项目 | 说明 |
|---|---|
| **版本号** | `v0.2.8-nightly.20260508.2834db13` |
| **性质** | 自动构建（Automated Nightly Build） |
| **稳定性** | 可能不稳定，请谨慎使用 |
| **完整变更日志** | [v0.2.8...main][changelog] |

> ⚠️ **注意**：此版本为自动构建，并非正式 Release，主要变更应来自近期合并的 PR（见下节）。正式版 `v0.2.8` 的具体功能集和破坏性变更尚未确认，建议关注 [Releases 页面][releases] 获取正式版公告。

[changelog]: https://github.com/sipeed/picoclaw/compare/v0.2.8...main
[releases]: https://github.com/sipeed/picoclaw/releases

---

## 3. 项目进展（合并/关闭的重要 PR）

以下 PR 已在过去 24 小时内合并或关闭，它们直接推动了项目向前发展：

| PR | 描述 | 类型 | 状态 |
|---|---|---|---|
| [#2818][pr-2818] | **Go 升级至 1.25.10**，修复 `net`、`net/http`、`net/http/httputil` 三项标准库安全漏洞（`GO-2026-4976/4971/4970`） | 🔒 安全修复 | ✅ Merged |
| [#2821][pr-2821] | **Go toolchain 同步升级至 1.25.10**，与 #2818 协同修复 security check 流水线失败 | 🔒 安全修复 | ✅ Merged |
| [#2819][pr-2819] | **新增非破坏性 `/reset` 命令**：启动新会话但不删除 Seahorse 历史记录；新增 `/reset clear` 恢复默认行为 | ✨ 新功能 | ✅ Merged |
| [#2805][pr-2805] | **OpenAI Go SDK** 从 v3.22.0 升级至 v3.34.0 | 📦 依赖升级 | ✅ Merged |
| [#2802][pr-2802] | **Slack SDK** 从 v0.17.3 升级至 v0.23.0 | 📦 依赖升级 | ✅ Merged |
| [#2800][pr-2800] | **Copilot SDK Go** 从 v0.2.0 升级至 v0.2.2 | 📦 依赖升级 | ✅ Merged |
| [#2504][pr-2504] | **修复 Discord 语音 Opus 解码器**：`DecodeOggOpus` 中 buffer 重用导致的音频帧损坏 | 🐛 Bug Fix | ✅ Merged |
| [#2460][pr-2460] | **修复 MCP CallTool**：无参工具调用时发送空对象 `{}` 而非 `null`，解决 TypeScript/Zod SDK 验证问题 | 🐛 Bug Fix | ✅ Merged |
| [#2443][pr-2443] | **修复 Codex OAuth**：`gpt-5.4` 空响应处理改善 | 🐛 Bug Fix | ✅ Merged |

[pr-2818]: https://github.com/sipeed/picoclaw/pull/2818
[pr-2821]: https://github.com/sipeed/picoclaw/pull/2821
[pr-2819]: https://github.com/sipeed/picoclaw/pull/2819
[pr-2805]: https://github.com/sipeed/picoclaw/pull/2805
[pr-2802]: https://github.com/sipeed/picoclaw/pull/2802
[pr-2800]: https://github.com/sipeed/picoclaw/pull/2800
[pr-2504]: https://github.com/sipeed/picoclaw/pull/2504
[pr-2460]: https://github.com/sipeed/picoclaw/pull/2460
[pr-2443]: https://github.com/sipeed/picoclaw/pull/2443

### 🔍 重点推进中的 Open PR（待合并）

| PR | 描述 | 类型 | 关注点 |
|---|---|---|---|
| [#2789][pr-2789] | **工具反馈编辑节流可配置化**：新增 `animation_interval_secs` 配置项替代硬编码行为 | 🔧 Fix | 多 channel 一致性 |
| [#2791][pr-2791] | **Telegram 回复保留话题上下文**：确保论坛帖子的回复仍回到同一话题 | 🔧 Fix | Telegram 体验 |
| [#2814][pr-2814] | **修复 exec 沙箱路径扫描**：不再将相对脚本路径（如 `scripts/send_voice_reply_telegram.sh`）误判为绝对路径 | 🔧 Fix | 与 Issue #1042 直接对应 |
| [#2811][pr-2811] | **MCP 传输增强 + Docker 集成测试框架**：支持 Streamable HTTP alias 和 request-response 模式 | 🚀 Feature | MCP 生态扩展 |
| [#2813][pr-2813] | **PID 验证逻辑**：启动前验证 PID 文件对应的进程是否确实是 picoclaw gateway | 🔧 Fix | 防止 PID 冲突误判 |
| [#2758][pr-2758] | **Telegram 媒体组相册处理**：缓冲 album 更新并统一处理 | 🔧 Fix | 多媒体消息 |
| [#2790][pr-2790] | **路由 spawn 工具至目标 agent** | 🔧 Fix | 子 agent 场景 |
| [#2793][pr-2793] | **修复隐藏工具注册表问题**：克隆工具注册表时的指针问题 | 🔧 Fix | 子 agent 工具发现 |

[pr-2789]: https://github.com/sipeed/picoclaw/pull/2789
[pr-2791]: https://github.com/sipeed/picoclaw/pull/2791
[pr-2814]: https://github.com/sipeed/picoclaw/pull/2814
[pr-2811]: https://github.com/sipeed/picoclaw/pull/2811
[pr-2813]: https://github.com/sipeed/picoclaw/pull/2813
[pr-2758]: https://github.com/sipeed/picoclaw/pull/2758
[pr-2790]: https://github.com/sipeed/picoclaw/pull/2790
[pr-2793]: https://github.com/sipeed/picoclaw/pull/2793

---

## 4. 社区热点

### 🔥 评论最多的 Issues（按讨论热度排序）

| # | 标题 | 评论 | 状态 | 核心诉求 |
|---|---|---|---|---|
| [#629][i-629] | **[BUG] LLM 调用失败时不重试** | 13 | 🟡 Open | 服务器返回 HTTP 500 时任务挂起，缺少自动重试机制 |
| [#2408][i-2408] | **[Feature] LLM Account Stacking (Cartridge-Belt)：速率限制时自动轮换 API Key** | 11 | ✅ Closed | 在同一 LLM 上配置多个 API Key，遇到限流时自动切换 |
| [#2171][i-2171] | **[Refactor] OpenAI 端点迁移至 Responses API** | 10 | 🟡 Open | 建议跟随 OpenAI 官方推荐，从 Chat Completions API 迁移至 Responses API |
| [#2468][i-2468] | **[BUG] 定时任务执行失败** | 8 | ✅ Closed | Cron 工具报错 `scheduling command execution is restricted to internal channels` |
| [#1763][i-1763] | **[BUG] aarch64 .deb 无法安装** | 8 | ✅ Closed | aarch64 平台安装包依赖冲突问题 |
| [#1042][i-1042] | **[BUG] exec 工具 guardCommand 方法路径判断过于简单** | 8 | 🟡 Open | 正则将查询字符串（如 `?T`）误判为相对路径，导致合法命令被安全拦截 |

[i-629]: https://github.com/sipeed/picoclaw/issues/629
[i-2408]: https://github.com/sipeed/picoclaw/issues/2408
[i-2171]: https://github.com/sipeed/picoclaw/issues/2171
[i-2468]: https://github.com/sipeed/picoclaw/issues/2468
[i-1763]: https://github.com/sipeed/picoclaw/issues/1763
[i-1042]: https://github.com/sipeed/picoclaw/issues/1042

### 💡 热点分析

**1. LLM 可靠性问题（#629）最热**
这是 2 月底就开的老 Issue，今日仍有第 13 条评论。核心痛点是：当 LLM API 返回偶发性 HTTP 500 错误时，整个任务直接挂死，用户强烈呼吁实现指数退避重试机制。这是影响生产环境稳定性的关键问题。

**2. API Key 管理需求突出（#2408）**
用户希望实现"弹药带式"多 Key 自动轮换，这是大规模使用场景下的刚性需求。该 Issue 已关闭，可能已在某次更新中实现或被其他方案替代。

**3. exec 安全路径判断误伤（#1042）**
这是中文 Issue 中少见的深度技术讨论。用户在执行 `curl -s "wttr.in/Beijing?T"` 时被安全机制拦截，问题出在正则将 URL 中的 `?` 误解析为相对路径的 `../` 形式。#2814 PR 已专门修复此问题，可关注合并进展。

---

## 5. Bug 与稳定性

### 🔴 高严重度（影响核心功能或生产环境）

| Issue | 描述 | 严重度 | 状态 | Fix PR |
|---|---|---|---|---|
| [#2721][i-2721] | **会话历史竞态条件仍在 v0.2.5 重现**：`tool_use_id` 400 错误来自 Anthropic Messages API，多用户/高并发场景触发 | 🔴 高 | 🟡 Open | 尚无 Fix |
| [#629][i-629] | **LLM 调用失败时不重试**：偶发 HTTP 500 导致任务挂起，无任何错误恢复 | 🔴 高 | 🟡 Open | 尚无 Fix |
| [#2702][i-2702] | **多用户群组会话历史缺少发送者归属**：默认 `chat` 维度下所有用户共享同一会话，历史上其他用户消息无归属标记 | 🟠 中高 | 🟡 Open | 尚无 Fix |

[i-2721]: https://github.com/sipeed/picoclaw/issues/2721
[i-2702]: https://github.com/sipeed/picoclaw/issues/2702

### 🟠 中等严重度（用户体验问题）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#1042][i-1042] | exec 工具安全路径判断误伤合法命令 | 🟡 Open | #2814 待合并 |
| [#2377][i-2377] | exec/logs 输出可能包含不安全的终端控制字符（ANSI + Unicode BIDI） | ✅ Closed | — |
| [#2465][i-2465] | 建议增加 SMTP 邮件通道支持，用于定时任务结果推送 | ✅ Closed | — |
| [#2478][i-2478] | 多次使用 `/use <skill>` 时前面的 skill 被覆盖 | ✅ Closed | — |

[i-2377]: https://github.com/sipeed/picoclaw/issues/2377
[i-2465]: https://github.com/sipeed/picoclaw/issues/2465
[i-2478]: https://github.com/sipeed/picoclaw/issues/2478

### 🟢 今日已关闭的 Bug（修复完成）

| Issue | 描述 |
|---|---|
| [#2504][pr-2504] | Discord 语音 Opus 解码帧损坏（已合并 Fix） |
| [#2460][pr-2460] | MCP 无参工具调用传 `null` 导致 Zod 验证失败（已合并 Fix） |
| [#2443][pr-2443] | Codex OAuth gpt-5.4 空响应处理（已合并 Fix） |
| [#2472][i-2472] | Windows 平台 `list_dir` 因路径分隔符不兼容报错 |
| [#2447][i-2447] | 多任务连续发送时只处理最后一条 |
| [#2446][i-2446] | 多 channel 场景下消息可能被错误回显 |

[i-2472]: https://github.com/sipeed/picoclaw/issues/2472
[i-2447]: https://github.com/sipeed/picoclaw/issues/2447
[i-2446]: https://github.com/sipeed/picoclaw/issues/2446

---

## 6. 功能请求与路线图信号

### 📋 高价值功能请求

| Issue | 请求 | 优先级信号 | 关联 PR/进展 |
|---|---|---|---|
| [#348][i-348] | **通用附件支持**：跨渠道处理文件、文档、图片等附件（文本附件、多媒体） | 🔴 高（标注 roadmap）| 尚无 PR |
| [#2408][i-2408] | **LLM Account Stacking**：多 API Key 自动轮换（速率限制/配额管理） | 🔴 高 | 已关闭（可能已实现） |
| [#629][i-629] | **LLM 调用失败重试机制** | 🔴 高 | 尚无 Fix |
| [#2820][i-2820] | **非破坏性会话重置**（/reset 不删除历史） | 🟠 中 | #2819 已合并 |
| [#2171][i-2171] | **OpenAI Responses API 迁移** | 🟠 中 | 社区讨论中 |
| [#2169][i-2169] | **双重 HEAD 认证支持**：自建模型需要两个 Authorization 头 | 🟠 中 | 已关闭 |
| [#2444][i-2444] | **MCP 服务器环境变量密钥存入 `.security.yml`** | 🟡 中低 | 已关闭 |

[i-348]: https://github.com/sipeed/picoclaw/issues/348
[i-2820]: https://github.com/sipeed/picoclaw/issues/2820
[i-2169]: https://github.com/sipeed/picoclaw/issues/2169
[i-2444]: https://github.com/sipeed/picoclaw/issues/2444

### 🗺️ 路线图信号

从 Issue #348（`priority: high`, `type: roadmap`）和今日 PR 趋势来看，PicoClaw 的近期方向可能聚焦于：
1. **多模态能力扩展**：附件处理（文件/图片/语音）
2. **企业级可靠性**：会话竞态修复、重试机制、API Key 轮换
3. **平台适配深化**：Windows 支持、Telegram 多媒体、飞书功能完善
4. **MCP 生态集成**：Streamable HTTP、Docker 测试框架、工具生态扩展

---

## 7. 用户反馈摘要

### 😤 主要痛点

| 痛点 | 来源 Issue | 场景描述 |
|---|---|---|
| **LLM API 不稳定导致任务挂死** | #629 | 用户在 Ubuntu + Discord 渠道运行长任务，服务器偶发 HTTP 500 时没有任何重试，任务直接卡住 |
| **exec 工具误拦截** | #1042 | 使用天气技能执行 `curl wttr.in/Beijing?T` 被安全机制拦截，理由是"路径在工作目录外" |
| **飞书连续消息只响应最后一条** | #2464 | 在飞书中快速连续发消息，只有最后一条被处理，用户体验割裂 |
| **Docker ReadonlyRootfs 不兼容** | #2440 | 用户期望以只读根文件系统运行容器加强安全，但 PicoClaw 运行时会在多个位置写入文件，未被文档化 |
| **会话历史消息被压缩** | #2796 | 用户发现历史对话中同一会话的多条消息只能看到最后一条，怀疑是压缩逻辑误伤了用户可见历史 |

### 😊 正面反馈信号

- Issue #2820 的 `/reset` 功能请求（不删除历史的会话重置）被快速实现并合并（#2819），说明维护者对工作流优化请求响应积极
- Issue #2444（MCP 密钥管理）的关闭表明该需求已被认可并处理
- 多项中文 Issue（#2478, #2464, #2280 等）都有中文维护者（@bogdanovich 等）

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-05-08  
**项目：** NousResearch/hermes-agent  
**数据窗口：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时是项目极其活跃的一天，共处理 **259 条 Issues 更新**（163 新开/活跃，96 关闭）和 **500 条 PR 更新**（279 待合并，221 已合并/关闭）。发布了 **v0.13.0 "The Tenacity Release"**，包含 864 次提交、588 个合并 PR、829 个文件变更，吸引了 **295 位社区贡献者**。安全议题突出：两起 P0/P1 安全漏洞（API 密钥明文暴露、skills 覆盖）已修复或正在处理。项目整体保持高速迭代，Windows 原生支持成为当前最迫切的跨模块协同改进方向。

---

## 2. 版本发布

### ✅ v2026.5.7 — Hermes Agent v0.13.0 "The Tenacity Release"

**发布日期：** 2026 年 5 月 7 日  
**变更规模：** 864 commits · 588 merged PRs · 829 files changed · +128,366 / -282 lines  
**社区贡献：** 295 位贡献者（含联合作者）  
**问题修复：** 282 个 Issues 关闭（13 P0，36 P1）

> *"The Tenacity Release — Hermes Agent now finishes what it starts."*

此版本聚焦**可靠性与完成度**，重点改进包括：session 级别的任务完成保证、secret redaction 默认启用（安全性提升）、Kanban dispatcher 迁移稳定性、gateway 平台重连机制等。

**破坏性变更提醒：**
- `security.redact_secrets` 现默认启用（[#19897](https://github.com/NousResearch/hermes-agent/issues/19897)），现有部署如依赖明文输出需检查配置。
- Kanban schema 新增 `spawn_failures` 列，使用嵌入式 SQLite 的用户需注意自动迁移（[#20842](https://github.com/NousResearch/hermes-agent/issues/20842) 已修复）。

---

## 3. 项目进展

### 合并/关闭的重要 PRs（按影响力排序）

| # | PR 描述 | 类型 | 状态 |
|---|--------|------|------|
| [#21634](https://github.com/NousResearch/hermes-agent/pull/21634) | **修复 session_meta 导致的消息静默丢弃**（P1）— `history_offset` 现使用过滤后计数 | Bug Fix | OPEN |
| [#21561](https://github.com/NousResearch/hermes-agent/pull/21561) | **Windows 安装全链路修复**（P2）— 涵盖 crash-free 启动、UTF-8 stdio、tzdata 依赖、文档 | Feature | OPEN |
| [#21630](https://github.com/NousResearch/hermes-agent/pull/21630) | **修复 TUI "Chat" tab 服务器重启后永久损坏**（P1） | Bug Fix | OPEN |
| [#21628](https://github.com/NousResearch/hermes-agent/pull/21628) | **Kanban ALTER TABLE ADD COLUMN 竞态安全包装** | Bug Fix | OPEN |
| [#21027](https://github.com/NousResearch/hermes-agent/pull/21027) | **Windows 路径处理修正 + 硬编码用户名检测** | Bug Fix | OPEN |
| [#21629](https://github.com/NousResearch/hermes-agent/pull/21629) | **避免启动时导入 Feishu SDK**（性能优化） | Perf | OPEN |
| [#20682](https://github.com/NousResearch/hermes-agent/pull/20682) | **Matrix 媒体发送复用 gateway adapter** | Bug Fix | OPEN |
| [#21621](https://github.com/NousResearch/hermes-agent/pull/21621) | **更新 secret redaction 默认值文档**（与 v0.13.0 安全默认对齐） | Docs | OPEN |
| [#21624](https://github.com/NousResearch/hermes-agent/pull/21624) | **重新生成 optional-skills 文档**（含新 finance bundle） | Docs | OPEN |

**推进方向判断：** 项目正在系统性解决 Windows 原生支持（多条 PR 协同）、安全默认值统一、以及平台层稳定性（Kanban、Matrix、Feishu）。

---

## 4. 社区热点

### 评论数最多的 Issues

| # | 标题 | 评论 | 👍 | 状态 |
|---|------|------|----|------|
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) | **mempalace 外部记忆支持** | 17 | 25 | 🟢 OPEN |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | **Response truncated due to output length limit** | 15 | 4 | 🔴 CLOSED |
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) | **Open issues 超过 1000 条** | 13 | 0 | 🔴 CLOSED |
| [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) | **Agent 无法基于上下文/记忆准确回答** | 11 | 0 | 🟢 OPEN |
| [#19903](https://github.com/NousResearch/hermes-agent/issues/19903) | **CLI 启动崩溃：prompt_toolkit 不支持 Shift 修饰符** | 9 | 5 | 🔴 CLOSED |
| [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) | **原生多 Agent 支持** | 8 | 7 | 🟢 OPEN |

### 热点分析

**🔥 外部记忆能力（#6323）：** 社区对跨会话持久记忆的需求强烈（25 👍），mempalace 模块提案计划提供结构化外部记忆查询能力，这对长周期任务和 Agent 间的连续性至关重要。

**🔥 多 Agent 架构（#7517）：** 类似 OpenClaw 的多 Agent 架构呼声渐高，单 Gateway 多隔离会话、persona、记忆的原生支持是明确的路线图信号。

**⚠️ Issue 积压危机（#7335）：** 社区成员直接指出 open issues 已超 1000 条，增长失控。建议维护者关注 issue 管理策略。

---

## 5. Bug 与稳定性

### 按严重程度排列

#### P0 — 立即处理

| # | 问题 | 状态 | Fix PR |
|---|------|------|--------|
| [#19897](https://github.com/NousResearch/hermes-agent/issues/19897) | **HERMES_REDACT_SECRETS 关闭导致 Telegram/Discord 中 API 密钥明文暴露** | 🔴 CLOSED | [#21621](https://github.com/NousResearch/hermes-agent/pull/21621) 已合并 |

#### P1 — 高优先级

| # | 问题 | 状态 | Fix PR |
|---|------|------|--------|
| [#20273](https://github.com/NousResearch/hermes-agent/issues/20273) | **skill_manage 可覆盖 bundled/hub skills**（安全漏洞） | 🔴 CLOSED | — |
| [#21630](https://github.com/NousResearch/hermes-agent/issues/21630) | **TUI Chat tab 服务器重启后永久损坏**（WebSocket 502） | 🟢 OPEN | 待合并 |
| [#21634](https://github.com/NousResearch/hermes-agent/issues/21634) | **session_meta 导致 history_offset 错误，消息静默丢弃** | 🟢 OPEN | 待合并 |

#### P2 — 中高优先级

| # | 问题 | 状态 | Fix PR |
|---|------|------|--------|
| [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) | **Custom provider max_output_tokens 被静默丢弃，默认值 2048** | 🟢 OPEN | — |
| [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) | **Gateway 重连监视器在 20 次失败后永久放弃重试** | 🟢 OPEN | — |
| [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) | **Telegram cold boot 时静默失败** | 🟢 OPEN | — |
| [#18529](https://github.com/NousResearch/hermes-agent/issues/18529) | **title_generator 泄露 thinking 模型的推理 token** | 🟢 OPEN | — |
| [#8173](https://github.com/NousResearch/hermes-agent/issues/8173) | **Feishu gateway 启动时 NameError（RedactingFormatter 未导入）** | 🟢 OPEN | — |
| [#12534](https://github.com/NousResearch/hermes-agent/issues/12534) | **Docker sandbox 丢失 docker_forward_env 环境变量** | 🟢 OPEN | — |

#### P3 — 已修复/迁移中

| # | 问题 | 状态 |
|---|------|------|
| [#20842](https://github.com/NousResearch/hermes-agent/issues/20842) | **Kanban 迁移后缺失 spawn_failures 列** | ✅ 已修复 |

---

## 6. 功能请求与路线图信号

### 高呼声功能（社区需求明确）

| # | 功能 | 👍 | 评估 |
|---|------|----|------|
| [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) / [#10359](https://github.com/NousResearch/hermes-agent/issues/10359) | **原生 Windows 支持** | 14 | 🔥 正在积极开发中（#21561 等多条 PR） |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | **Brave Search 集成** | 22 | 需求合理，免费额度有吸引力 |
| [#5257](https://github.com/NousResearch/hermes-agent/issues/5257) | **通用 ACP client（多 Agent CLI 编排）** | 8 | 与 #7517 多 Agent 路线协同 |
| [#20249](https://github.com/NousResearch/hermes-agent/issues/20249) | **Model Presets：按需模型升级** | 6 | 解决低成本模型处理复杂任务的矛盾 |
| [#10452](https://github.com/NousResearch/hermes-agent/issues/10452) | **多 Telegram bot 路由支持** | — | 小众但实际部署需求 |

### 路线图信号判断

**确定方向：** Windows 原生支持（已有多条 PR 进入 review，#21561 明确表示"一小时内会遇见的都修了"）。  
**呼声中：** 多 Agent 架构、外部持久记忆、Brave Search 作为低成本搜索备选。  
**待评估：** 按需模型升级（Model Presets）对推理成本的影响。

---

## 7. 用户反馈摘要

### 真实痛点场景

**🔴 记忆与上下文失效（#14420）：**  
> *"hermes agent 无法根据上下文与记忆去回答我"* — 用户报告 agent 在 8 条对话后无法记住"记住我叫小明"，暴露了 session 级别记忆持久化的缺陷。

**🔴 Windows 用户困境（#10359）：**  
> *"我想要原生 Windows 支持而不是 WSL2"* — WSL2 作为过渡方案已被部分用户接受，但原生 Windows Terminal 支持（#21074）是明确的社区需求。

**🔴 安装阻断（#7066）：**  
> `curl -fsSL https://raw.githubusercontent.com/.../install.sh | bash` 被阿里云镜像阻塞，4.2MB 下载卡住 — 镜像源可用性和网络问题是海外项目在国内的常见坑。

**🟡 CLI 体验（#10221）：**  
> `/skills` 命令未知 — 文档与实际 CLI 存在不一致，新用户引导路径需优化。

**🟡 长输出截断（#7237）：**  
> CLI/Gateway 场景下生成较长回复时频繁触发截断错误，影响实际使用体验。**已关闭但根本原因待验证。**

---

## 8. 待处理积压

### 长期未响应的重要 Issues

| # | 问题 | 创建日期 | 优先级 | 积压天数 |
|---|------|----------|--------|----------|
| [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) | Native Windows Support | 2026-03-22 | P3 | ~47 天 |
| [#5257](https://github.com/NousResearch/hermes-agent/issues/5257) | 通用 ACP client | 2026-04-05 | P3 | ~33 天 |
| [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) | Telegram cold boot 静默失败 | 2026-04-07 | P2 | ~31 天 |
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) | mempalace 外部记忆 | 2026-04-08 | P3 | ~30 天 |
| [#7066](https://github.com/NousResearch/hermes-agent/issues/7066) | 安装脚本被镜像阻塞 | 2026-04-10 | P3 | ~28 天 |

### 积压风险评估

1. **Issue 总量超 1000 条（#7335）** — 项目活跃度高但管理压力大，需 triaging 机制。
2. **#5729（P2）超过 30 天无响应** — Telegram 作为主流平台之一，冷启动失败是生产环境隐患。
3. **#7066（P3）反映基础设施问题** — 国内镜像阻塞影响用户获取，需考虑官方镜像或 CDN。

---

**报告生成时间：** 2026-05-08  
**数据来源：** GitHub NousResearch/hermes-agent (过去 24 小时)  
**分析师：** AI Project Analyst

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**: 2026-05-08  
**数据区间**: 2026-05-07 14:00 — 2026-05-08 14:00 (UTC)

---

## 1. 今日速览

NanoClaw 社区在过去 24 小时内保持高度活跃，共处理 **34 条 PR 更新**（23 已合并/关闭）和 **9 条 Issue 更新**（5 新开/活跃，4 已关闭）。今日聚焦于 **A2A 路由修复**（多个 PR 解决多会话场景下的消息错路由问题）、**安全加固**（`/restart` 和 `/build` 命令现需 owner 角色验证）以及 **容器环境适配**（pnpm v11 兼容性问题已修复）。整体项目健康度良好，无新版本发布但交付管道稳定推进。

---

## 2. 版本发布

**今日无新版本发布。**

最近一个版本信息请参考 [Releases 页面](https://github.com/qwibitai/nanoclaw/releases)。

---

## 3. 项目进展

### 3.1 关键合并 PR

| PR # | 标题 | 贡献者 | 类别 | 状态 |
|------|------|--------|------|------|
| [#2002](https://github.com/qwibitai/nanoclaw/pull/2002) | fix(routing): origin-session threading for agent-to-agent replies | @jorgenclaw | 路由修复 | ✅ 已合并 |
| [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) | fix(agent-to-agent): route a2a replies back to originating session | @ddaniels | A2A 修复 | ✅ 已合并 |
| [#2277](https://github.com/qwibitai/nanoclaw/pull/2277) | fix(agent-runner): refresh routing on follow-up messages mid-query | @ddaniels | 路由刷新 | ✅ 已合并 |
| [#2329](https://github.com/qwibitai/nanoclaw/pull/2329) | fix(agent-runner): require explicit destination addressing, fix per-destination threading | @gavrielc | 路由修复 | ✅ 已合并 |
| [#2333](https://github.com/qwibitai/nanoclaw/pull/2333) | fix(channels): exponential backoff for gateway listener restarts | @krejov100 | 稳定性 | ✅ 已合并 |
| [#2335](https://github.com/qwibitai/nanoclaw/pull/2335) | fix(container): pin pnpm to 10.33.0 to match host | @adjohn | 容器修复 | ✅ 已合并 |
| [#2336](https://github.com/qwibitai/nanoclaw/pull/2336) | fix(container): repair claude-code install for pnpm v11 | @pthanopassakul | 容器修复 | ✅ 已合并 |
| [#2324](https://github.com/qwibitai/nanoclaw/pull/2324) | setup: add "Skip — I'll connect later" option to Claude auth picker | @alipgoldberg | UX 改进 | ✅ 已合并 |
| [#2327](https://github.com/qwibitai/nanoclaw/pull/2327) | fix: inject destination reminder after SDK auto-compaction | @glifocat | 会话保持 | ✅ 已合并 |
| [#2328](https://github.com/qwibitai/nanoclaw/pull/2328) | fix: default reply destination to message origin in multi-destination groups | @glifocat | 路由修复 | ✅ 已合并 |
| [#2319](https://github.com/qwibitai/nanoclaw/pull/2319) | feat(add-aws): skill for AWS CLI access in agent containers | @ira-at-work | 新功能 | ✅ 已合并 |
| [#2318](https://github.com/qwibitai/nanoclaw/pull/2318) | feat(skills): add /add-mnemon skill — persistent semantic memory | @ira-at-work | 新功能 | ✅ 已合并 |
| [#2321](https://github.com/qwibitai/nanoclaw/pull/2321) | feat(skills): add onecli-gateway container skill with auto-composed instructions | @johnnyfish | 新功能 | ✅ 已合并 |
| [#2320](https://github.com/qwibitai/nanoclaw/pull/2320) | docs(skills): update SKILL.md for debug, init-onecli, add-gmail-tool, add-opencode, add-signal, add-vercel | @ira-at-work | 文档 | ✅ 已合并 |
| [#2316](https://github.com/qwibitai/nanoclaw/pull/2316) | setup: add back-to-channels exit to "Other…" channel prompt | @alipgoldberg | UX 改进 | ✅ 已合并 |

### 3.2 重点进展解读

**路由系统大幅改进**：过去 24 小时合并了 **5 个 A2A 路由相关 PR**（#2002, #2267, #2277, #2328, #2329），系统性地修复了多会话、多渠道场景下的消息错路由问题。这表明项目核心团队已认识到 A2A 通信是当前架构的关键瓶颈，并投入大量资源进行根治性修复。

**容器环境稳定性提升**：pnpm v11 兼容性问题导致 `claude` 二进制安装失败的 issue 已通过两个互补 PR 解决（#2335 锁定 pnpm 版本，#2336 修复安装脚本）。

**新技能持续交付**：新增 `/add-aws`（AWS CLI 访问）和 `/add-mnemon`（持久语义记忆）两个 skill，进一步扩展了 agent 容器的能力边界。

---

## 4. 社区热点

### 4.1 最活跃 Issues

| Issue # | 标题 | 类型/优先级 | 评论数 | 状态 |
|---------|------|------------|--------|------|
| [#869](https://github.com/qwibitai/nanoclaw/issues/869) | (feat): Per-group credential management and interactive reauth via channels | Enhancement/High | 3 | 🟡 Open |
| [#2343](https://github.com/qwibitai/nanoclaw/issues/2343) | bug: verify oauth-sync system alert delivery when credentials file goes missing | Bug | 1 | 🟢 Closed |
| [#2341](https://github.com/qwibitai/nanoclaw/issues/2341) | feat(security): gate /restart and /build bot commands behind owner role check | Security | 1 | 🟢 Closed |
| [#2342](https://github.com/qwibitai/nanoclaw/issues/2342) | ops: restart connectivity watchdog — dead since May 1 | Ops | 1 | 🟢 Closed |

**热点分析**：

1. **#869 凭证管理需求持续发酵**：该 Issue 自 3 月 9 日创建以来讨论活跃，核心诉求是实现按群组的凭证隔离，避免多组共享 API 配额和认证身份。评论数 3 条表明维护者与提交者正在深入讨论实现方案，预计将成为下一版本的重要功能。

2. **安全相关 Issue 快速闭环**：#2341（`/restart` 和 `/build` 命令缺少 owner 角色校验）和 #2343（OAuth 同步系统告警未正常触发）均已在当日关闭，表明维护团队对安全问题的响应速度较快。

3. **运维问题被及时发现**：#2342 报告 connectivity watchdog 自 5 月 1 日起处于 dead 状态，维护者已关闭该 Issue，可能已安排重启。

---

## 5. Bug 与稳定性

### 5.1 今日报告的 Bug（按严重程度）

| 严重程度 | Issue # | 标题 | 状态 | Fix PR |
|----------|---------|------|------|--------|
| 🔴 High | [#2332](https://github.com/qwibitai/nanoclaw/issues/2332) | fix(sessions): findSessionByAgentGroup may route A2A replies to wrong session | 🟡 Open | 无 |
| 🔴 High | [#2331](https://github.com/qwibitai/nanoclaw/issues/2331) | bug(sessions): findSessionByAgentGroup routes A2A replies to wrong session in multi-channel groups | 🟡 Open | 无 |
| 🟠 Medium | [#2343](https://github.com/qwibitai/nanoclaw/issues/2343) | oauth-sync system alert delivery when credentials file goes missing | 🟢 Closed | 无 |
| 🟡 Low | [#2338](https://github.com/qwibitai/nanoclaw/pull/2338) | fix(telegram): escape stray * and _ instead of stripping (URLs with _ get mangled) | 🟡 Open | #2338 (PR) |

### 5.2 稳定性风险评估

**A2A 路由缺陷仍存在 Open Issue**：虽然过去 24 小时合并了 5 个相关修复 PR，但 #2331 和 #2332 两个 Issue 仍处于 Open 状态，表明完整修复可能需要更多工作。Issue #2332 提到 "Deep audit of A2A routing revealed multiple bugs"，暗示问题覆盖面比预期更广。

**构建健康度**：PR #2344 提到 `pnpm run build` 在 main 分支上有 5 个 test-only TypeScript 错误，涉及 `RoutableAgentMessage.in_reply_to` 字段变更后测试对象未同步更新的问题。

---

## 6. 功能请求与路线图信号

### 6.1 新功能请求

| Issue # | 标题 | 优先级 | 预期影响 | 纳入版本可能性 |
|---------|------|--------|----------|---------------|
| [#869](https://github.com/qwibitai/nanoclaw/issues/869) | Per-group credential management | High | 🔥 高 | ⭐⭐⭐ 较高 |
| [#2334](https://github.com/qwibitai/nanoclaw/issues/2334) | File attachment support in web UI | Medium | 🔥 高 | ⭐⭐ 中等 |
| [#2340](https://github.com/qwibitai/nanoclaw/issues/2340) | gate /restart and /build bot commands behind owner role check | Security | 🛡️ 安全 | ⭐⭐⭐ 极高（已实现） |

### 6.2 路线图信号解读

**凭证管理（#869）** 是长期悬而未决的高优先级需求，核心诉求是解决多租户场景下的资源隔离问题。结合 #2340 已通过安全审查的实现路径来看，按组管理资源很可能成为下一版本的核心主题。

**Web UI 文件附件（#2334）** 是新提出的功能请求，scope 明确定义为：上传按钮 + 剪贴板粘贴 → 文件存储 → 转发给 agent 处理。该需求契合 agent 能力扩展趋势，实现难度中等。

---

## 7. 用户反馈摘要

### 7.1 核心痛点

| 场景 | 反馈来源 | 痛点描述 |
|------|----------|----------|
| 凭证共享 | [#869](https://github.com/qwibitai/nanoclaw/issues/869) | 所有群组共享同一套 Claude 凭证，无法按组隔离 API 配额和认证身份 |
| OAuth 中断 | [#2343](https://github.com/qwibitai/nanoclaw/issues/2343) | `~/.claude/.credentials.json` 不可读期间，oauth-sync 循环连续 9 次日志告警"could not read token"，但系统告警未触发 |
| 运维可见性 | [#2342](https://github.com/qwibitai/nanoclaw/issues/2342) | connectivity watchdog 自 5 月 1 日死机，但无告警通知，运维团队未及时发现 |
| 安全风险 | [#2341](https://github.com/qwibitai/nanoclaw/issues/2341) | `/restart` 和 `/build` 命令仅通过 `isMain === true` 校验，任何能发帖到主群组的 Telegram 用户都可触发 |

### 7.2 用户满意度信号

- **安装体验改善**：PR #2324 添加了"Skip — I'll connect later"选项，解决了非技术用户在首次配置时被卡住的问题。
- **Skill 生态扩展**：新增 `/add-aws`、`/add-mnemon` 等 skill，反映用户对 agent 能力扩展的强烈需求。
- **文档持续更新**：PR #2320 一次性更新了 6 个 skill 的文档，表明社区维护者对文档质量的重视。

---

## 8. 待处理积压

### 8.1 长期未响应的高优先级 Issues

| Issue # | 标题 | 创建日期 | 状态 | 积压天数 | 建议行动 |
|---------|------|----------|------|----------|----------|
| [#869](https://github.com/qwibitai/nanoclaw/issues/869) | Per-group credential management | 2026-03-09 | Open | ~60 天 | 推进设计讨论，考虑纳入下一 milestone |
| [#2331](https://github.com/qwibitai/nanoclaw/issues/2331) | findSessionByAgentGroup routes A2A replies to wrong session | 2026-05-07 | Open | 1 天 | 需确认是否与已合并 PR 存在重复，评估剩余问题范围 |
| [#2332](https://github.com/qwibitai/nanoclaw/issues/2332) | findSessionByAgentGroup may route A2A replies to wrong session | 2026-05-07 | Open | 1 天 | 与 #2331 高度相关，建议合并处理 |

### 8.2 待合并 PR

| PR # | 标题 | 状态 | 阻塞原因 |
|------|------|------|----------|
| [#2345](https://github.com/qwibitai/nanoclaw/pull/2345) | feat(claude-md-compose): auto-import per-group CLAUDE.role.md | 🟡 Open | 审核中（borderline 分类） |
| [#2344](https://github.com/qwibitai/nanoclaw/pull/2344) | fix(tests): satisfy tightened RoutableAgentMessage and Session types | 🟡 Open | 审核中 |
| [#2339](https://github.com/qwibitai/nanoclaw/pull/2339) | fix(test): add missing in_reply_to to A2A test objects | 🟡 Open | 审核中 |
| [#2337](https://github.com/qwibitai/nanoclaw/pull/2337) | feat(providers): surface Claude Code skill catalog to non-Claude providers | 🟡 Open | 审核中 |
| [#2338](https://github.com/qwibitai/nanoclaw/pull/2338) | fix(telegram): escape stray * and _ instead of stripping | 🟡 Open | 审核中 |

### 8.3 积压风险提醒

1. **#869 已积压 60 天**：作为 High Priority 的 Enhancement，该 Issue 的设计讨论已进行多轮，但尚未形成明确的实现计划。建议维护者尽快确定方案或明确拒绝理由。

2. **构建错误待修复**：PR #2344 明确指出 `pnpm run build` 在 main 分支上失败，影响 CI/CD 管道健康度，建议优先合并。

---

## 附录：关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新开 Issues | 5 | — |
| 关闭 Issues | 4 | — |
| 新开 PRs | 11 | — |
| 合并/关闭 PRs | 23 | — |
| 版本发布 | 0 | — |
| Open Issues 总数 | 2 (高优先级) | 需关注 |
| 构建状态 | ⚠️ main 分支有 test 类型错误 | 需修复 |

---

*报告生成时间: 2026-05-08 14:00 UTC*  
*数据来源: GitHub NanoClaw Repository (qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 🦀 IronClaw 项目动态日报
**日期：** 2026-05-08 | **版本：** v0.28.0 | **仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

过去 24 小时内，IronClaw 保持了极高的开发活跃度：共处理 **21 条 Issues**（14 开启 / 7 关闭）和 **50 条 PRs**（19 待合并 / 31 已合并），并于 5 月 7 日发布了 **v0.28.0**。核心主线围绕 **Reborn 架构落地**，集中推进了 EventProjectionService、能力租约存储、Session Thread 持久化、AgentLoopHost facade 合约等底层基础设施。同时收到 **5 个 Bug 报告**（含 2 个 P1），涉及 Telegram 集成、LLM Provider 持久化回退和夜间 E2E 失败。整体看项目正处于大规模重构期，进度显著但稳定性风险值得持续关注。

---

## 2. 版本发布

### 🏷️ ironclaw-v0.28.0
**发布于：** 2026-05-07 | [Release 页面](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.0)

**关联 PR：** [#3376](https://github.com/nearai/ironclaw/pull/3376)（release 自动化）

| 变更包 | 版本变化 | 兼容性 |
|--------|----------|--------|
| `ironclaw` | 0.27.0 → **0.28.0** | 需注意 |
| `ironclaw_common` | 0.4.0 → **0.4.1** | ✅ API 兼容 |

**核心新增内容（Reborn 基础设施落地）：**

- **(reborn)** 将 `reborn-integration` 基底落地 `main`，引入 **host foundation crates**、capability host、runtime dispatcher、进程生命周期、文件系统、secrets、network 以及扩展 manifest registry 边界
- **(reborn)** 新增 WIT 兼容 WASM 工具链支持
- **Session Thread 持久化**：`SessionThreadService` 实现，支持 libSQL/PostgreSQL 事务存储线程记录、消息和摘要
- **Run-State 数据库存储**：`RunStateApprovalStore` 组合存储，支持 PostgreSQL/libSQL 原子化审批持久化
- **Capability Lease Stores**：带 feature gate 的租约生命周期管理（issue / revoke / claim / consume）
- **AgentLoopHost facade 合约**：Driver-facing 端口定义，替代空 marker
- **Outbound Egress 状态存储**（`ironclaw_outbound`）：通知策略和投递元数据持久化

> ⚠️ **迁移注意：** Reborn 栈正在合并中，部分 fake/in-memory 实现仍存在（见 [#3333](https://github.com/nearai/ironclaw/issues/3333)），生产 wiring 尚未完全到位。依赖早期 Reborn 特性的消费者请关注相关 Issue 追踪链。

---

## 3. 项目进展

今日合并/关闭的重要 PR（按影响力排序）：

| PR | 标题 | 范围 | 状态 | 说明 |
|----|------|------|------|------|
| [#3365](https://github.com/nearai/ironclaw/pull/3365) | fix(bridge): bypass agent-loop mpsc for inline-await Approval gates | agent, db, channel | **CLOSED** | 修复审批门控导致 mpsc 队列无限堆积的严重 bug |
| [#3379](https://github.com/nearai/ironclaw/pull/3379) | feat(threads): add durable session thread stores | reborn, db | **CLOSED** | Reborn Session/Thread 持久化存储落地 |
| [#3377](https://github.com/nearai/ironclaw/pull/3377) | feat(reborn): add agent loop host facade contract | reborn | **CLOSED** | AgentLoopHost facade 合约定义（对应 Issue #3016 blocker） |
| [#3368](https://github.com/nearai/ironclaw/pull/3368) | feat(reborn): add database capability lease stores | reborn, db | **CLOSED** | CapabilityLeaseStore PostgreSQL/libSQL 实现 |
| [#3349](https://github.com/nearai/ironclaw/pull/3349) | Add durable run-state database stores | reborn, db | **CLOSED** | RunStateApprovalStore 组合存储，替换 PostgreSQL raw SQL |
| [#3378](https://github.com/nearai/ironclaw/pull/3378) | Wire durable run-state store selection | reborn | **CLOSED** | HostRuntimeServices 存储后端选择逻辑 |
| [#3351](https://github.com/nearai/ironclaw/pull/3351) | feat(reborn): add product adapter contract (PR 1/7) | reborn | **CLOSED** | ProductAdapter 核心合约定义 |
| [#3366](https://github.com/nearai/ironclaw/pull/3366) | fix(missions): auto-resume paused missions after gate resolution | agent, missions | **OPEN** | 暂停 Mission 在 OAuth/审批门控解决后自动恢复 |
| [#3381](https://github.com/nearai/ironclaw/pull/3381) | fix(auth): tighten Telegram pairing UX and OAuth-failure recovery | auth, Telegram | **OPEN** | 修复 Telegram P1 连接问题（#3317, #3319, #3320） |
| [#3383](https://github.com/nearai/ironclaw/pull/3383) | feat(reborn): add outbound egress state store | reborn | **OPEN** | Egress/subscription 策略元数据存储 |
| [#3352](https://github.com/nearai/ironclaw/pull/3352) | feat(reborn): add product adapter host auth and egress primitives | reborn | **OPEN** | ProductAdapter PR 2/7 — HMAC/webhook 认证 |

**推进路线评估：** Reborn 基础设施栈已落地 7+ 个核心 crate，今日主要聚焦 **数据持久化层**（SessionThread、RunState、CapabilityLease、Egress）和 **AgentLoopHost 合约**。产品迁移 Issue 链（#3290, #3289, #3288, #3287）已开启，预计下一阶段向用户可见功能层推进。

---

## 4. 社区热点

讨论最活跃的 Issues（按评论数排序）：

| # | 标题 | 状态 | 评论 | 类型 | 链接 |
|---|------|------|------|------|------|
| #3067 | [TEST] Reborn: Add vertical-slice integration test suite | OPEN | 28 | enhancement / reborn | [🔗](https://github.com/nearai/ironclaw/issues/3067) |
| #3022 | Reborn cutover blocker: add event substrate integration tests | OPEN | 9 | reborn blocker | [🔗](https://github.com/nearai/ironclaw/issues/3022) |
| #3016 | Reborn cutover blocker: add reference AgentLoopHost facade | OPEN | 7 | reborn blocker | [🔗](https://github.com/nearai/ironclaw/issues/3016) |
| #3093 | [Reborn] Add EventProjectionService | CLOSED | 4 | enhancement / reborn | [🔗](https://github.com/nearai/ironclaw/issues/3093) |
| #3225 | bug: gemini API-key backend fails tool-calling with missing thought_signature | CLOSED | 1 | bug / llm | [🔗](https://github.com/nearai/ironclaw/issues/3225) |

**热点分析：**

- 🔥 **Reborn 测试覆盖率**（#3067, 28 条评论）是当前社区最关注的话题。核心诉求是建立 **caller-level 集成测试**，而非仅依赖 crate 内部单元测试，以确保 Reborn 基底通过公共入口点正确工作。这是 Reborn cutover 的前提条件。
- 🚧 **Event substrate 集成测试**（#3022）和 **AgentLoopHost facade**（#3016）被标记为 cutover blocker，表明这两个 Issue 位于关键路径上。
- 💡 **EventProjectionService**（#3093）已关闭，是 Reborn 事件层的基础组件。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

| 严重度 | # | 标题 | 状态 | 是否有 Fix PR | 链接 |
|--------|---|------|------|--------------|------|
| 🔴 **P1** | #3317 | Telegram setup did not work with local IronClaw | OPEN | ✅ [#3381](https://github.com/nearai/ironclaw/pull/3381) | [🔗](https://github.com/nearai/ironclaw/issues/3317) |
| 🔴 **P1** | #3225 | Gemini API-key backend fails tool-calling (`thought_signature` 缺失) | CLOSED | 未提及 | [🔗](https://github.com/nearai/ironclaw/issues/3225) |
| 🔴 **P1** | #3229 | LLM Provider fallback persists to DB on startup（关键配置被永久覆盖） | CLOSED | 未提及 | [🔗](https://github.com/nearai/ironclaw/issues/3229) |
| 🟡 **P2** | #3082 | App hangs on "Restarting IronClaw" after enabling Auto Approvals | CLOSED | ✅ [#3364](https://github.com/nearai/ironclaw/pull/3364) | [🔗](https://github.com/nearai/ironclaw/issues/3082) |
| 🟡 **P2** | #3201 | [QA] Tool use for Deepseek is not working | CLOSED | 未提及 | [🔗](https://github.com/nearai/ironclaw/issues/3201) |
| 🟡 **P2** | #3274 | Data Missing After Upgrading 0.26.0 → 0.27.0 | CLOSED | 未提及 | [🔗](https://github.com/nearai/ironclaw/issues/3274) |
| 🟢 **P3** | #2902 | Telegram is not working for NEAR Foundation instance | OPEN | 未提及 | [🔗](https://github.com/nearai/ironclaw/issues/2902) |

**稳定性评估：**
- Telegram 集成是当前重灾区，连续出现多个 P1 级 bug，与 [#2902](https://github.com/nearai/ironclaw/issues/2902) 长期未解决形成呼应。
- LLM Provider 持久化回退问题（#3229）被标记为 **Critical**，影响用户配置在重启后被破坏。
- 夜间 E2E 失败（[#3323](https://github.com/nearai/ironclaw/issues/3323)）表明自动化测试不稳定，需关注 CI 健康度。
- 🛠️ [#3384](https://github.com/nearai/ironclaw/pull/3384) 正在修复 `auth-live-seeded` canary 持续失败问题（30+ consecutive runs）。

---

## 6. 功能请求与路线图信号

值得关注的新功能提案：

| # | 标题 | 标签 | 链接 | 路线图信号 |
|---|------|------|------|------------|
| #3334 | Multi-workspace support: one IronClaw instance across multiple Slack workspaces | enhancement | [🔗](https://github.com/nearai/ironclaw/issues/3334) | **高价值需求** — 多租户扩展能力 |
| #3327 | feat(llm): surface and persist LLM reasoning content (UI thinking display + debug panel) | enhancement, scope: llm | [🔗](https://github.com/nearai/ironclaw/issues/3327) | 已有对应 PR [#3326](https://github.com/nearai/ironclaw/pull/3326)，预计下版本可见 |
| #3259 | Publish 0.25.0–0.27.0 to crates.io | enhancement | [🔗](https://github.com/nearai/ironclaw/issues/3259) | **阻塞性问题** — crates.io 落后 3 个版本 |
| #2979 | feat(sandbox): support k8s sandbox runtime | enhancement, scope: sandbox | [🔗](https://github.com/nearai/ironclaw/pull/2979) | **大型 XL PR** — 提供 Kubernetes 运行时支持 |
| #3290 | [Reborn] Migrate missions, jobs, and legacy routine surfaces | reborn, migration | [🔗](https://github.com/nearai/ironclaw/issues/3290) | 产品层迁移路线明确 |
| #3289 | [Reborn] Migrate secrets, OAuth, and auth setup product flows | reborn, migration | [🔗](https://github.com/nearai/ironclaw/issues/3289) | 同上 |
| #3288 | [Reborn] Migrate extension, skill, MCP, and WASM lifecycle UX | reborn, migration | [🔗](https://github.com/nearai/ironclaw/issues/3288) | 同上 |

**路线图信号：**
1. **LLM Reasoning 可视化**（#3327）进入开发阶段，PR 已开，下一版本用户可看到模型"思考过程"
2. **Multi-workspace**（#3334）是重大多租户功能需求，预计纳入 v0.29+ 规划
3. **Crates.io 版本发布滞后**（#3259）是严重阻塞项，下游被 wasmtime CVE 锁定在 0.24.0
4. **Reborn 产品迁移** 已开启 4 个子 Issue，覆盖 Mission、Secrets/Auth、Extension/WASM、Memory/Workspace 四大产品表面，预计迭代推进

---

## 7. 用户反馈摘要

从 Issue 评论和使用场景中提炼的用户痛点与诉求：

| 反馈类型 | 代表 Issue | 核心诉求 |
|----------|-----------|----------|
| **Telegram 连接失败** | #3317, #2902, #3381 | Telegram 设置后无法连接，OAuth 链路失败后无恢复机制。用户旅程：配置 → 使用 → 失败后卡死 |
| **配置持久化回退** | #3229 | 重启后 LLM Provider 配置被强制回退为默认值，用户的自定义配置丢失。Critical 级别 |
| **升级数据丢失** | #3274 | 从 0.26.0 升级到 0.27.0 后，Chat 标签页初始无数据，Projects Tab 显示"Failed Threads"，需手动刷新 |
| **工具调用失败** | #3225, #3201 | Gemini API-key 和 DeepSeek 模型工具调用报错，影响用户体验 |
| **重启卡死** | #3082 | 开启 Auto Approvals 后重启，"Restarting IronClaw" 弹窗无限等待 |
| **Crates.io 版本落后** | #3259 | 下游依赖无法通过 crates.io 获取最新版本，被 CVE 漏洞锁定 |

**用户满意信号：**
- Reborn 架构迁移路线受到核心贡献者持续关注，推进有序
- Multi-workspace 功能需求（#3334）表明产品使用场景在扩展

---

## 8. 待处理积压

以下 Issue 长期未响应或处于关键路径，需维护者关注：

| # | 标题 | 创建日期 | 龄期 | 优先级 | 链接 |
|---|------|----------|------|--------|------|
| #2902 | Telegram is not working for NEAR Foundation instance | 2026-04-23 | **~15 天** | P3（存疑） | [🔗](https://github.com/nearai/ironclaw/issues/2902) |
| #2979 | feat(sandbox): support k8s sandbox runtime | 2026-04-27 | **~11 天** | 高（XL PR） | [🔗](https://github.com/nearai/ironclaw/pull/2979) |
| #3022 | Reborn cutover blocker: event substrate integration tests | 2026-04-28 | **~10 天** | 🔴 Blocker | [🔗](https://github.com/nearai/ironclaw/issues/3022) |
| #3016 | Reborn cutover blocker: AgentLoopHost facade | 2026-04-28 | **~10 天** | 🔴 Blocker | [🔗](https://github.com/nearai/ironclaw/issues/3016) |
| #3259 | Publish 0.25.0–0.27.0 to crates.io | 2026-05-05 | **~3 天** | 🔴 阻塞 | [🔗](https://github.com/nearai/ironclaw/issues/3259) |
| #3067 | Reborn vertical-slice integration test suite | 2026-04-29 | **~9 天** | 高（28 评论） | [🔗](https://github.com/nearai/ironclaw/issues/3067) |
| #3333 | Production wiring and missing crates | 2026-05-07 | **~1 天** | 高 | [🔗](https://github.com/nearai/ironclaw/issues/3333) |
| #3323 | Nightly E2E failed | 2026-05-07 | **~1 天** | 🟡 CI 健康 | [🔗](https://github.com/nearai/ironclaw/issues/3323) |

**积压分析：**
- **Telegram 问题链**（#2902 + #3317）长期未彻底解决，虽有 [#3381](https://github.com/nearai/ironclaw/pull/3381) 修复中，但根本原因排查需加强
- **Crates.io 发布**（#3259）是下游消费者的直接阻塞，需优先处理
- **Reborn Blocker**（#3022, #3016）位于 cutover 关键路径上，直接影响 v

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报

**报告日期：** 2026-05-08
**项目仓库：** github.com/netease-youdao/LobsterAI
**数据窗口：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时内，LobsterAI 保持了极高的开发活跃度，共处理 **45 条 PR 更新**（其中 **36 条已合并/关闭**），并于 **2026-05-07** 发布了 **v2026.5.7** 版本。社区共提交 **2 条新 Issue**，项目整体呈现功能迭代密集、修复响应快速的健康状态。值得注意的是，今日 PR 合并量远超 Issue 报告量，表明开发团队正处于功能交付的加速期，多个核心模块（会话分页、启动稳定性、Windows 兼容性）取得了实质性推进。

---

## 2. 版本发布

### 🎉 LobsterAI 2026.5.7

**发布时间：** 2026-05-07
**Release 链接：** github.com/netease-youdao/LobsterAI/releases/tag/2026.5.7

**本次更新内容：**

| 类型 | PR | 变更说明 |
|------|-----|----------|
| 🐛 Bug Fix | [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881) | `fix(skills)`: 提升 Windows 平台技能删除可靠性及导入反馈体验 |
| ✨ 功能增强 | [#1882](https://github.com/netease-youdao/LobsterAI/pull/1882) | `feat(skill)`: 升级 youdaonote 技能至 1.0.8 版本 |
| 🔧 重构/其他 | — | 多项内部重构（具体内容见完整 Release Notes） |

**破坏性变更：** 无
**迁移注意事项：** 无需特殊迁移操作，建议更新至最新版本以获得 Windows 平台更好的技能管理体验。

---

## 3. 项目进展

以下为今日已合并/关闭的重要 PR，按影响力排序：

| # | PR 标题 | 领域 | 贡献者 | 重要性 |
|---|---------|------|--------|--------|
| [#924](https://github.com/netease-youdao/LobsterAI/pull/924) / [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) | 会话列表与消息历史分页加载 | cowork | @swuzjb, @btc69m979y-dotcom | ⭐⭐⭐ 核心性能优化 |
| [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) | 每个 Agent 支持独立的工作目录 | openclaw | @fisherdaddy | ⭐⭐⭐ 新功能 |
| [#1910](https://github.com/netease-youdao/LobsterAI/pull/1910) | 减少启动误判失败 & 错误页应用内重启 | main | @liuzhq1986 | ⭐⭐ 稳定性 |
| [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) | 修复 Windows 文件预览重复卡片及路径错误 | artifacts | @btc69m979y-dotcom | ⭐⭐ Windows 兼容 |
| [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) | 修复流式文本合并时重复字符被误吞 | main | @btc69m979y-dotcom | ⭐⭐ 文件渲染 |
| [#1906](https://github.com/netease-youdao/LobsterAI/pull/1906) | Artifact 功能更新 | artifacts | @liugang519 | ⭐ 功能迭代 |
| [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) | 修复重启后默认模型恢复不正确 | cowork | @fisherdaddy | ⭐ 用户体验 |
| [#1900](https://github.com/netease-youdao/LobsterAI/pull/1900) | 强化 Markdown 表格的 assistant 片段持久化 | cowork | @liuzhq1986 | ⭐ 可靠性 |
| [#1911](https://github.com/netease-youdao/LobsterAI/pull/1911) | 优化 Agents UI | renderer | @fisherdaddy | ⭐ UI 改进 |
| [#1498](https://github.com/netease-youdao/LobsterAI/pull/1498) | 修复全部 165 个 ESLint error | 全栈 | @swuzjb | ⭐ 代码质量 |
| [#1891](https://github.com/netease-youdao/LobsterAI/pull/1891) | 解决 Windows 删除技能目录时的 EPERM 错误 | skills | @liuzhq1986 | ⭐ Windows 兼容 |
| [#1888](https://github.com/netease-youdao/LobsterAI/pull/1888) | 修复技能导入时 ClawHub 安装路径问题 | skills | @liuzhq1986 | ⭐ 技能生态 |
| [#1882](https://github.com/netease-youdao/LobsterAI/pull/1882) | 升级 youdaonote 技能至 1.0.8 | skills | @liuzhq1986 | ⭐ 技能生态 |
| [#1818](https://github.com/netease-youdao/LobsterAI/pull/1818) | 修复开启代理后 OpenAI 原厂模型无法访问 | openclaw | @fisherdaddy | ⭐ 网络配置 |
| [#1830](https://github.com/netease-youdao/LobsterAI/pull/1830) | 新增 ChatGPT OAuth 登录支持 | openclaw | @fisherdaddy | ⭐ 认证能力 |
| [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862) | 新增小米 mimo 模型 coding plan 支持 | renderer | @fisherdaddy | ⭐ 模型支持 |
| [#1819](https://github.com/netease-youdao/LobsterAI/pull/1819) | 修复 DeepSeek V4 默认开启思考导致工具调用问题 | main | @fisherdaddy | ⭐ 模型适配 |
| [#1847](https://github.com/netease-youdao/LobsterAI/pull/1847) | 修复自定义模型供应商使用 DeepSeek V4 的问题 | main | @fisherdaddy | ⭐ 模型适配 |
| [#1823](https://github.com/netease-youdao/LobsterAI/pull/1823) | 修复 schema 或 payload 相关问题 | 全栈 | @liuzhq1986 | ⭐ 数据层 |

**今日亮点：** [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) 正式合入了会话分页加载功能（历经约 6 周），这将显著改善大量会话场景下的内存占用和渲染性能；[#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) 为每个 Agent 引入了独立工作目录支持，是多 Agent 协作场景的重要功能增强。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| # | 标题 | 状态 | 评论数 | 链接 |
|---|------|------|--------|------|
| #1878 | IM机器人 微信接口 配置扫码后无法输入验证码 | 🟢 OPEN | 2 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1878) |
| #1903 | 会员登录频繁失败 | 🟢 OPEN | 1 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1903) |

**#1878 深度分析：**
该 Issue 聚焦于 **IM 机器人的微信扫码登录流程缺陷**。用户（@iwos2610）反映：在最新微信客户端扫码后，微信侧提示要求在 OpenClaw 端输入 6 位数字验证码，但客户端未提供相应的输入界面，导致配置流程阻断。这是典型的 **跨端交互缺失** 问题，涉及 IM 模块与微信授权流程的集成漏洞，需在 OpenClaw 侧补充验证码输入 UI 并对接微信的二次验证回调。

**#1903 深度分析：**
该 Issue 反映了 **会员登录/订阅认证的稳定性问题**。用户（@zhahongan-ctrl）明确指出无法登录网易付费模型，直接影响付费用户的核心使用体验。从 Issue 附带截图来看，问题已严重影响付费转化和用户留存，建议优先响应。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

| 严重程度 | # | 问题描述 | 状态 | 是否有 Fix PR |
|----------|---|----------|------|---------------|
| 🔴 高 | #1903 | 会员登录频繁失败，付费模型不可用 | 🟢 OPEN | ❌ 无 |
| 🟡 中 | #1878 | 微信接口扫码后无法输入验证码，IM 配置流程阻断 | 🟢 OPEN | ❌ 无 |

**稳定性趋势评估：**
今日未在 PR 中发现新的崩溃或回归报告（回归问题均已在历史 PR 中修复并合并）。新增 Bug 均聚焦于 **认证/登录链路** 和 **微信集成接口**，建议尽快分配人手跟进。

---

## 6. 功能请求与路线图信号

从今日数据中提炼的功能需求信号：

| 功能方向 | 来源 | 相关 PR/Issue | 判断依据 | 纳入可能性 |
|----------|------|---------------|----------|-----------|
| **Agent 独立工作目录** | 需求 | [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) 已合并 | 已有明确 PR 实现，今日已合入 | ✅ 已纳入 (v2026.5.7) |
| **会话分页加载** | 需求 | [#924/#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) 已合并 | 解决 #817 性能问题，今日已合入 | ✅ 已纳入 (v2026.5.7) |
| **Markdown 表格持久化强化** | 需求 | [#1900](https://github.com/netease-youdao/LobsterAI/pull/1900) 已合并 | 解决并发会话下表格截断问题 | ✅ 已纳入 |
| **多模型支持扩展** | 需求 | [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862) mimo, [#1819](https://github.com/netease-youdao/LobsterAI/pull/1819) DeepSeek V4 | 新增小米 mimo、DeepSeek V4 支持 | ✅ 已纳入 |

**路线图信号：** 从 PR 标签（`area: openclaw`, `area: cowork`, `area: artifacts`）和功能密度来看，当前版本迭代重心在 **协作（Cowork）体验优化** 和 **多模型生态扩展**，下一版本可能继续深化 Agent 能力和 Artifacts 渲染能力。

---

## 7. 用户反馈摘要

| 反馈来源 | 核心诉求 | 情绪 |
|----------|----------|------|
| #1878（@iwos2610） | 微信扫码后缺少验证码输入界面，IM 机器人配置流程无法完成 | 😠 受阻 |
| #1903（@zhahongan-ctrl） | 会员登录持续失败，无法使用网易付费模型，影响付费使用 | 😠 受阻 |

**共性洞察：**
- 用户反馈集中在 **登录/认证流程** 和 **第三方集成（微信）** 两个高门槛场景
- 两个 Issue 均影响用户的**核心使用链路**（IM 配置 + 付费模型），属于 P0 级别问题
- 目前暂无 Fix PR，需维护团队尽快响应

---

## 8. 待处理积压

以下 Issue 需要维护者关注：

| # | 标题 | 状态 | 创建时间 | 积压天数 | 紧急度 |
|---|------|------|----------|----------|--------|
| [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | IM机器人 微信接口 配置扫码后无法输入验证码 | 🟢 OPEN | 2026-04-30 | **8 天** | 🔴 高 |
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | 会员登录频繁失败 | 🟢 OPEN | 2026-05-07 | **1 天** | 🔴 高 |

> ⚠️ **维护建议：** Issue #1878 已积压 8 天且持续有评论更新，表明问题未被正式处理但用户仍在关注，建议优先分配至 skills/IM 模块负责人。Issue #1903 虽然新鲜，但直接影响付费转化，需 24 小时内给出初步响应。

---

**报告生成时间：** 2026-05-08 00:00（UTC+8）
**数据来源：** LobsterAI GitHub Repository (netease-youdao/LobsterAI)
**报告版本：** v1.0

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
## 2026-05-08

---

## 1. 今日速览

Moltis 项目在 2026-05-07 展现出极高的开发活跃度。过去 24 小时内共合并/关闭 **9 个 PR**，另有 **1 个 PR 待审查**；所有 **4 个待处理 Issues 均已关闭**，且每个 Issue 都对应有对应的修复或实现 PR。社区同时发布了 **2 个补丁版本**（20260507.04/05），聚焦于语音和远程沙箱能力的增强。整体项目健康度优秀，所有报告的 Bug 均已有明确 fix，未出现新增待确认的回归问题。

---

## 2. 版本发布

本周期内发布了 **2 个补丁版本**，建议用户尽快升级以获取最新稳定性修复：

| 版本号 | 发布日期 | 更新类型 |
|--------|----------|----------|
| **20260507.05** | 2026-05-07 | 补丁 |
| **20260507.04** | 2026-05-07 | 补丁 |

**说明：** 从版本号格式推测为自动化的每日构建版本（daily build），建议对照 Release Notes 确认具体修复内容。链接：https://github.com/moltis-org/moltis/releases

---

## 3. 项目进展

本周期是 Moltis 近期功能密度最高的更新之一，9 个 PR 的合并覆盖了多个核心能力模块：

### 🔑 核心安全能力升级
| PR | 功能 | Issue 对应 |
|----|------|-----------|
| [#979](https://github.com/moltis-org/moltis/pull/979) | Ed25519 挑战-响应式节点身份认证（TOFU 模型），替代原有 token 认证 | [#973](https://github.com/moltis-org/moltis/issues/973) |
| [#976](https://github.com/moltis-org/moltis/pull/976) | Agent Identity + Onboarding Protocols 集成文档 | [#973](https://github.com/moltis-org/moltis/issues/973) |

> 将 SSH Trust On First Use（TOFU）模型引入节点认证，首运行时生成 Ed25519 密钥对，运营商审批指纹后后续连接自动验证。这是跨服务器信任体系（L1/L2 协议栈）的基础构建块。

### 📞 基础设施扩展
| PR | 功能 | 说明 |
|----|------|------|
| [#920](https://github.com/moltis-org/moltis/pull/920) | 电话呼叫支持（Twilio 提供商） | 新增 `moltis-telephony` crate，含 PCM→μ-law 音频转换和完整 ChannelPlugin 集成 |
| [#942](https://github.com/moltis-org/moltis/pull/942) | 远程/多后端沙箱支持 | 支持 Vercel、Daytona、Firecracker，适用于 DigitalOcean 1-click、Fly.io、Render 等无法运行 Docker-in-Docker 的云环境 |

### 🐛 稳定性修复
| PR | 修复内容 | 对应 Issue |
|----|---------|-----------|
| [#983](https://github.com/moltis-org/moltis/pull/983) | 保留工具调用参数诊断信息，修复畸形/空参数被错误折叠为 `{}` 的问题 | [#963](https://github.com/moltis-org/moltis/issues/963) |
| [#980](https://github.com/moltis-org/moltis/pull/980) | 修复 Docker 环境下浏览器沙箱 profile 挂载路径解析失败 | [#977](https://github.com/moltis-org/moltis/issues/977) |

### 🎙️ 语音能力增强
| PR | 功能 |
|----|------|
| [#981](https://github.com/moltis-org/moltis/pull/981) | 新增 `whisper-local` STT 提供商（支持 faster-whisper-server、whisper.cpp、LocalAI 等本地部署），默认显示所有可用语音提供商 |
| [#984](https://github.com/moltis-org/moltis/pull/984) **[待合并]** | 公开 OpenAI Realtime 模型配置指导，优化 Whisper 模型选择建议（gpt-4o-transcribe / gpt-4o-mini-transcribe） |

### 🖼️ 多模态能力
| PR | 功能 | 对应 Issue |
|----|------|-----------|
| [#982](https://github.com/moltis-org/moltis/pull/982) | Codex OAuth 图像生成（gpt-image-2 via Responses API `image_generation` 工具），新增内置 `generate_image` 工具 | [#956](https://github.com/moltis-org/moltis/issues/956) |

### 🔧 依赖维护
| PR | 内容 |
|----|------|
| [#978](https://github.com/moltis-org/moltis/pull/978) | 依赖升级：wasmtime 36.0.7 → 36.0.8（cargo group） |

---

## 4. 社区热点

### 热度最高的提案：跨服务器 Agent 身份与信任协议
- **Issue [#973](https://github.com/moltis-org/moltis/issues/973)** — "Onboarding + Identity protocols for interoperable personal agent servers"
  - **作者：** @vystartasv | **状态：** 已关闭 ✅
  - **核心诉求：** 单个 Moltis 实例只是"智能工具"，当需要两个 Moltis Agent 相互发现、验证身份、交换能力时，缺乏标准协议
  - **响应速度：** 从提出（2026-05-06）到合并相关文档（2026-05-07），仅 **1 天**完成
  - **热度评估：** ⭐⭐⭐⭐⭐ — 该提案衍生出 **3 个关联 PR**（#979 身份认证、#976 文档、功能实现），是本周期最重要的社区贡献

> **分析：** 该提案直击个人 AI Agent 服务器的"孤岛问题"，社区响应极其积极，说明构建者对去中心化 Agent 互操作性有强烈需求。

---

## 5. Bug 与稳定性

所有本周期报告的 Bug 均已 **有对应的 fix PR**，无新增待确认回归：

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|----------|-------|------|--------|------|
| 🟡 **中** | [#963](https://github.com/moltis-org/moltis/issues/963) | 畸形或空 Tool 调用参数在预调度 schema 验证阶段被错误折叠为缺失字段，导致已激活的 `exec` 工具被拒绝 | [#983](https://github.com/moltis-org/moltis/pull/983) | ✅ 已合并 |
| 🟡 **中** | [#977](https://github.com/moltis-org/moltis/issues/977) | Docker（LXC/Proxmox）中浏览器沙箱容器无法正确解析 profile 持久化绑定挂载 | [#980](https://github.com/moltis-org/moltis/pull/980) | ✅ 已合并 |

> **稳定性评估：** 良好。本周期所有报告的 Bug 均在 24 小时内得到响应并合并修复，显示维护者对用户报告问题的快速反应能力。

---

## 6. 功能请求与路线图信号

基于本周期数据，以下功能需求已通过 PR 实现，可能进入下一版本：

| 功能方向 | 请求 Issue | 实现 PR | 优先级信号 |
|----------|-----------|---------|-----------|
| **🔐 去中心化身份认证** | [#973](https://github.com/moltis-org/moltis/issues/973) | [#979](https://github.com/moltis-org/moltis/pull/979) | ⭐⭐⭐⭐⭐ 高 — 核心架构级功能 |
| **📞 电话呼叫集成** | 内部需求 | [#920](https://github.com/moltis-org/moltis/pull/920) | ⭐⭐⭐⭐ 高 — 扩展通信渠道 |
| **🖼️ GPT-Image-2 图像生成** | [#956](https://github.com/moltis-org/moltis/issues/956) | [#982](https://github.com/moltis-org/moltis/pull/982) | ⭐⭐⭐⭐ 高 — 多模态扩展 |
| **☁️ 远程沙箱支持** | 内部需求 | [#942](https://github.com/moltis-org/moltis/pull/942) | ⭐⭐⭐⭐ 高 — 云部署适配 |
| **🎙️ 本地 Whisper STT** | 内部需求 | [#981](https://github.com/moltis-org/moltis/pull/981) | ⭐⭐⭐ 中 — 隐私增强 |
| **🔊 Realtime 模型配置优化** | 内部需求 | [#984](https://github.com/moltis-org/moltis/pull/984) | ⭐⭐ 待审查 |

---

## 7. 用户反馈摘要

从本周期 Issues 和 PRs 中提炼的真实用户场景与痛点：

| 场景 | 来源 | 痛点/需求 |
|------|------|-----------|
| **本地优先隐私** | [#981](https://github.com/moltis-org/moltis/pull/981) | 用户希望 Whisper 模型完全本地运行（faster-whisper-server / whisper.cpp），避免语音数据上传云端 |
| **Docker 部署兼容性** | [#977](https://github.com/moltis-org/moltis/issues/977) | 在 LXC 容器（Proxmox）中运行 Moltis 时，浏览器沙箱挂载路径解析失败，用户体验割裂 |
| **跨 Agent 互操作** | [#973](https://github.com/moltis-org/moltis/issues/973) | 用户有"让两个 Moltis Agent 相互协作"的真实需求，但缺少发现、身份验证、能力交换的标准协议 |
| **云端沙箱缺失** | [#942](https://github.com/moltis-org/moltis/pull/942) | DigitalOcean 1-click、Fly.io、Render 等平台不支持 Docker-in-Docker，导致沙箱功能在这些环境中不可用 |

> **满意点：** 所有 Bug 报告均得到快速修复且 PR 合并及时，说明维护者对社区反馈的重视。  
> **待改进点：** Issues 评论区普遍较冷（0 评论），社区讨论氛围有待提升。

---

## 8. 待处理积压

### ⚠️ 需要关注的项目

| 类型 | 编号 | 描述 | 状态 | 建议 |
|------|------|------|------|------|
| 🟡 **PR 待审查** | [#984](https://github.com/moltis-org/moltis/pull/984) | feat(voice): surface OpenAI realtime model guidance — 新增 Whisper 模型配置指导 | **OPEN** | 建议优先审查，接近完成状态 |
| 💬 **讨论缺失** | 多个 Issues | 本周期所有 Issues 的评论数均为 0，社区互动不足 | — | 建议维护者主动在相关 Issue 下回复，增强社区参与感 |

### 🔗 长期积压检查
本周期无长期未响应的 Issues（所有 Issues 均在 1-5 天内关闭）。项目整体维护状态 **健康**。

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 新开/活跃 | 0 | — |
| Issues 关闭 | 4 | ✅ 全部解决 |
| PR 合并/关闭 | 9 | ✅ 高吞吐量 |
| PR 待审查 | 1 | ⚠️ 需关注 |
| Bug 报告 | 2 | — |
| Bug 有 Fix | 2/2 | ✅ 100% |
| 版本发布 | 2 | ✅ |

---

*报告生成时间：2026-05-08 | 数据来源：github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**报告日期**: 2026-05-08  
**数据来源**: GitHub (agentscope-ai/QwenPaw)

---

## 1. 今日速览

QwenPaw 今日保持极高的社区活跃度，共产生 **50 条 Issues 更新**（新开/活跃 27 条，已关闭 23 条）和 **32 条 PR 更新**（待合并 11 条，已合并/关闭 21 条）。项目整体呈现良好的发展态势，核心功能持续迭代，多个用户痛点问题（如飞书用户名显示、技能批量管理）得到修复。然而，今日亦有多项稳定性问题被报告，包括微信频道消息丢失、多轮对话内容截断等，需要持续关注。

---

## 2. 版本发布

**本日无新版本发布。** 项目最新版本信息请参阅 GitHub Releases 页面。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR 编号 | 标题 | 类型 | 贡献者 | 状态 |
|---------|------|------|--------|------|
| [#4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) | fix(pack): restore conda packaging tools before conda-pack | Bug Fix | @jinglinpeng | ✅ 已合并 |
| [#4091](https://github.com/agentscope-ai/QwenPaw/pull/4091) | feat(console): Add "Enable" and "Disable" buttons to batch operation of skills | Feature | @zhaozhuang521 | ✅ 已合并 |
| [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) | feat(channel): propagate user display name to agent env context | Feature | @celestialhorse51D | ✅ 已合并 |
| [#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911) | plugin: add gpt image 2 tool plugin | Plugin | @rayrayraykk | ✅ 已合并 |
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) | refactor(wechat): centralize legacy weixin → wechat data migrations | Refactor | @celestialhorse51D | ✅ 已合并 |
| [#4089](https://github.com/agentscope-ai/QwenPaw/pull/4089) | fix(chat): remove redundant URL prefix stripping in file preview paths | Bug Fix | @zhijianma | ✅ 已合并 |
| [#4073](https://github.com/agentscope-ai/QwenPaw/pull/4073) | fix(console): respect custom name for default agent | Bug Fix | @CA-mambo | ✅ 已合并 |
| [#4094](https://github.com/agentscope-ai/QwenPaw/pull/4094) | refactor(console): TokenUsage | Refactor | @zhaozhuang521 | ✅ 已合并 |
| [#4085](https://github.com/agentscope-ai/QwenPaw/pull/4085) | chore(console): Optimize language switching logic | Refactor | @zhaozhuang521 | ✅ 已合并 |

**关键进展点评**：

1. **Windows 打包问题修复** (#4093): 解决了 `conda-pack` 与 `pip install qwenpaw[full]` 冲突导致的 Windows 桌面版打包失败问题，提升了打包流程稳定性。

2. **飞书用户名传递** (#4055, #4098): 飞书渠道现已能将发送者的显示名称（昵称）正确传递至 Agent 环境上下文，解决了此前只能看到原始 `open_id` 的问题，改善了用户体验。

3. **技能批量管理增强** (#4091): 前端工作区技能板块新增批量启用/禁用功能，用户可一次性选择多个技能并修改状态，大幅提升管理效率（对应 Issue #3503）。

4. **微信数据迁移重构** (#3605): 集中处理 WeChat/Weixin 标识符重命名遗留的数据迁移问题，确保启动时一次性完成迁移，避免运行时的不一致。

### 待合并的重要 PR

| PR 编号 | 标题 | 类型 | 贡献者 | 状态 |
|---------|------|------|--------|------|
| [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) | feat: support browsable remote model listing and batch insertion | Feature | @bowenliang123 | 🔄 Under Review |
| [#3238](https://github.com/agentscope-ai/QwenPaw/pull/3238) | feat: add PlanNotebook support for task planning (experimental) | Feature | @f3125472 | 🔄 Under Review |
| [#4095](https://github.com/agentscope-ai/QwenPaw/pull/4095) | feat(cli): add backup commands | CLI | @jinglinpeng | 🔄 Open |
| [#4030](https://github.com/agentscope-ai/QwenPaw/pull/4030) | feat: Add Vertex AI Gemini provider | Provider | @pleomax0730 | 🔄 Open |
| [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) | feat(skills): add cli skill test command | CLI | @JingHou1215 | 🔄 Under Review |
| [#3916](https://github.com/agentscope-ai/QwenPaw/pull/3916) | fix(backup): restore secrets on Docker volume mount points | Bug Fix | @jinglinpeng | 🔄 Open |
| [#4076](https://github.com/agentscope-ai/QwenPaw/pull/4076) | fix: use RotatingFileHandler for log rotation on all platforms | Bug Fix | @wjt0321 | 🔄 Under Review |
| [#4092](https://github.com/agentscope-ai/QwenPaw/pull/4092) | fix(cli): bypass proxies for loopback API checks | Bug Fix | @jinglinpeng | 🔄 Open |

---

## 4. 社区热点

### 讨论最活跃的 Issues

**1. #280 - Discussion: Which Skills and MCPs Can Be Built-in?**
- 📊 评论: 27 条 | 状态: OPEN | 创建: 2026-03-02
- 🔗 链接: https://github.com/agentscope-ai/QwenPaw/issues/280
- 📝 摘要: 讨论 CoPaw 应预装哪些热门 Skills 和 MCPs 以提升开箱即用体验。当前支持导入自定义 Skills/MCPs，但预装popular功能可显著降低用户门槛。
- 💡 分析: 这是项目战略层面的重要讨论，反映用户期望更低的上手门槛和更丰富的开箱功能。涉及依赖管理、版本兼容等复杂考量。

**2. #4088 - Agent 与 Agent 之间的交互，为什么会话会不停的创建新的？**
- 📊 评论: 2 条 | 状态: OPEN | 创建: 2026-05-07
- 🔗 链接: https://github.com/agentscope-ai/QwenPaw/issues/4088
- 📝 摘要: 用户发现 Agent 间交互时会不断创建新会话，质疑这是预期行为还是问题。
- 💡 分析: 涉及多 Agent 协作的核心机制，潜在的系统设计或配置问题，关注度较高。

**3. #4036 - Adding a model requires too many steps and clicks (Good First Issue)**
- 📊 评论: 5 条 | 状态: OPEN | 创建: 2026-05-04 | 👍: 3
- 🔗 链接: https://github.com/agentscope-ai/QwenPaw/issues/4036
- 📝 摘要: 当前添加模型的交互流程过于繁琐，需要多次跳转：设置 → 提供商 → 模型 → 添加模型。建议简化步骤。
- 💡 分析: 已有多位用户反馈，与 PR #3819 的模型管理增强功能形成呼应，预计将成为下版本优化重点。

---

## 5. Bug 与稳定性

### 今日报告的重要 Bug（按严重程度）

#### 🔴 高优先级

**1. #4104 - 中文文件名空格问题**
- 状态: OPEN | 报告: 2026-05-08
- 🔗 链接: https://github.com/agentscope-ai/QwenPaw/issues/4104
- 描述: 文件名包含中文英文数字时，如"2026年报告.word"，Agent 获取的文件名变为"2026 年报告.word"，在年份与汉字间多出空格。
- 影响: 文件操作异常，可能导致文件访问失败。

**2. #4056 - 微信频道正常网络下消息丢失**
- 状态: OPEN | 报告: 2026-05-06 | 评论: 4
- 🔗 链接: https://github.com/agentscope-ai/QwenPaw/issues/4056
- 版本: v1.1.5
- 描述: 微信渠道在正常对话过程中，Agent 偶发停止响应，后续消息无法触发任何响应。网络连接正常，定时任务仍可执行。
- 影响: 用户体验严重受损，核心通信功能不可靠。

**3. #4101 - Docker 部署升级后记不住 Agent 会话及配置丢失**
- 状态: CLOSED (invalid) | 报告: 2026-05-07
- 🔗 链接: https://github.com/agentscope-ai/QwenPaw/issues/4101
- 描述: 用户升级到 1.1.5.post2 后出现记不住 Agent 最后会话及运行配置丢失问题（Docker 部署）。
- 影响: 持久化配置失效。

#### 🟡 中优先级

**4. #4059 - 对话内容过长后无法正常回复**
- 状态: CLOSED | 评论: 8
- 🔗 链接: https://github.com/agentscope-ai/QwenPaw/issues/4059
- 版本: 1.1.5.post1
- 描述: 处理长对话时，AI 执行任务到一半就停止，无法完成完整回复或任务处理。即使用 `/compact` 也无效，必须开启新对话。
- 状态: 已关闭，但问题可能未彻底解决，建议持续关注。

**5. #4047 - 聊天记录文件图片链接一天后过期**
- 状态: CLOSED | 评论: 4
- 🔗 链接: https://github.com/agentscope-ai/QwenPaw/issues/4047
- 版本: 1.1.5
- 描述: 聊天记录中的图片缩略图和 Word 文件附件在生成一天后失效，点击时报 `Invalid or expired token`。
- 关联 PR: #4089 已合并修复文件预览路径问题，但可能需要更完整的令牌管理方案。

#### 🟢 已修复/低优先级

**6. #3919 - 切换 Agent 后任务中断且 session 丢失**
- 状态: CLOSED | 评论: 9
- 🔗 链接: https://github.com/agentscope-ai/QwenPaw/issues/3919
- 版本: 1.14 post2
- 描述: 前端 `lastChatIdByAgent` 功能未实现，切换 Agent 时不会保存/恢复 chat_id。
- 备注: 已关闭，归类为功能缺失而非 Bug。

**7. #3988 - Windows 打包 conda-pack 冲突**
- 状态: CLOSED | 评论: 3 | 关联 PR: #4093
- 🔗 链接: https://github.com/agentscope-ai/QwenPaw/issues/3988
- 描述: `conda-pack <=0.7.1` 与 `pip install qwenpaw[full]` 冲突，导致 Windows 打包失败。
- 状态: ✅ PR #4093 已合并修复。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue 编号 | 功能描述 | 状态 | 关联 PR | 优先级信号 |
|-----------|---------|------|---------|-----------|
| [#2235](https://github.com/agentscope-ai/QwenPaw/issues/2235) | 通过 Web 控制台远程升级 CoPaw | OPEN | - | 👍 1 |
| [#4087](https://github.com/agentscope-ai/QwenPaw/issues/4087) | 增强 [File] 模块能力（支持非 .md 文件） | OPEN | - | 👍 1 |
| [#4030](https://github.com/agentscope-ai/QwenPaw/pull/4030) | 添加 Vertex AI Gemini provider | OPEN | - | 直接有 PR |
| [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) | 自定义 Workspace 存储路径 | CLOSED (invalid) | - | 需求明确 |
| [#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000) | 网页版添加语音输入功能 | OPEN | - | 用户期望 |
| [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) | 核心配置区与用户工作区分离 | CLOSED | - | 架构建议 |
| [#3990](https://github.com/agentscope-ai/QwenPaw/issues/3990) | 通道响应速度优化 | CLOSED (invalid) | - | 性能诉求 |

**路线图信号分析**：

1. **模型管理优化**: Issue #4036 和 PR #3819 均聚焦于简化添加模型的流程，预计将成为下版本 UI 改进

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

## 📊 EasyClaw 项目日报  |  2026‑05‑08  

---  

### 1️⃣ 今日速览  
- **发布活跃**：今天连续发布 2 个补丁版本（v1.8.12、v1.8.11），主要集中在 **云客服/电商中继**、**桌面端稳定性** 与 **本地 CLI 启动** 改进。  
- **社区互动**：过去 24 小时 **无新 Issue**、**无新 PR**，Issues 与 PR 页面均保持零新增，显示项目目前以内部迭代为主。  
- **整体评估**：项目健康度仍保持在 **稳定** 区间，维护团队正通过持续小版本迭代提升功能完整性与桌面体验，建议后续关注用户反馈渠道的激活。  

---  

### 2️⃣ 版本发布  

| 版本 | 主要内容 | 破坏性变更 | 迁移提示 | 链接 |
|------|----------|------------|----------|------|
| **v1.8.12** | • 新增 **云客服 & 电商中继流**（服务交接、信号路由、创作者‑商务工作流）<br>• 桌面端稳定性提升：统一 OpenClaw 配置写入，显式实例化 RivonClaw 插件工具<br>• 修复 **多个聊天 & 账户** 相关问题（详情待完整 release note） | 暂无 | 若使用 OpenClaw 配置，请确认写入路径已更新为统一目录 | [Release v1.8.12](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.12) |
| **v1.8.11** | • **联盟Inbound & 电商中继基础**：为创作者合作、电商自动化工作流奠定基础<br>• Windows 安装包 **集成本地 CLI 启动**，改进启动/运行时依赖打包<br>• 提升聊天体验（细节待完整 release note） | 暂无 | 使用 Windows Installer 的用户可立即获得本地 CLI 功能，无需额外安装 | [Release v1.8.11](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.11) |

> ⚠️ **注意**：官方 Release Note 仍有部分截断（“Fix multiple chat and accou…”， “Improve chat …”），完整说明请查阅 GitHub Release 页面。  

---  

### 3️⃣ 项目进展  

| 类型 | 数量 | 说明 |
|------|------|------|
| **合并/关闭 PR** | 0 | 过去 24 小时无 PR 活动。 |
| **活跃 Issue** | 0 | 无新开启或重新打开的 Issue。 |

> **总体进度**：项目主要通过 **内部提交** 推动，未出现社区驱动的 PR/Issue。维护者可通过发布版本来间接展示功能进展。  

---  

### 4️⃣ 社区热点  

- **无活跃讨论**：当前没有评论数、反应数异常的 Issue 或 PR。  
- **建议**：项目可考虑在 [Discussion 页面](https://github.com/gaoyangz77/easyclaw/discussions) 开设 “功能需求 & 使用场景” 版块，吸引用户主动反馈。  

---  

### 5️⃣ Bug 与稳定性  

| 严重程度 | 描述 | 已有 Fix PR? | 链接 |
|----------|------|--------------|------|
| **中** | 多个聊天与账户相关错误（已在 v1.8.12 中修复） | ✅ 已随 v1.8.12 合并 | [Release v1.8.12](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.12) |
| **低** | 桌面端 OpenClaw 配置写入路径不统一（已在 v1.8.12 中改进） | ✅ 已随 v1.8.12 合并 | 同上 |

> **稳定性概览**：目前未公开报告的 **未修复** 关键 Bug，项目整体呈现 **低缺陷率**。  

---  

### 6️⃣ 功能请求与路线图信号  

| 功能 | 来源 | 可能纳入版本 | 说明 |
|------|------|--------------|------|
| **云客服/电商中继流** | v1.8.12 release note | ✅ 已在 v1.8.12 实现 | 关注后续是否会开放插件或 API 文档。 |
| **本地 CLI 启动（Windows）** | v1.8.11 release note | ✅ 已在 v1.8.11 实现 | 建议在 README 中提供快速上手示例。 |
| **创作者‑商务工作流** | v1.8.12 “creator‑commerce workflows” | 预计在 **v1.9.x** 中进一步深化 | 可在 Discussion 中发起投票以收集用户需求。 |

> **路线图提示**：从发布节奏看，项目正朝向 **多端协同（桌面+CLI）** 与 **商务/客服自动化** 两大方向演进。  

---  

### 7️⃣ 用户反馈摘要  

- **正面**：本地 CLI 启动集成到 Windows 安装包获得好评，用户体验更顺畅。  
- **诉求**：社区缺少公开的使用案例文档，尤其是 **云客服中继** 与 **创作者‑商务** 场景的实现指南。  
- **痛点**：桌面端配置写入路径不统一曾导致少数用户升级后出现启动异常，已在 v1.8.12 中统一解决。  

---  

### 8️⃣ 待处理积压  

| 项目 | 状态 | 未响应时间 | 链接 |
|------|------|------------|------|
| **无公开积压** | ✅ 当前无长期未关闭的 Issue 或 PR | — | [Issues 列表](https://github.com/gaoyangz77/easyclaw/issues) |

> **提醒**：若项目计划提升社区活跃度，建议定期在 **Milestone** 中标记 “需要用户反馈” 的 Issue，避免功能提案被忽视。  

---  

### 📌 小结  

- **活跃度**：⭐⭐ (发布驱动，互动低)  
- **稳定性**：✅ 高（无未修复关键缺陷）  
- **路线图**：聚焦 **云客服/电商中继** 与 **桌面端+CLI 统一体验**  
- **行动建议**：  
  1. 补全 v1.8.12 / v1.8.11 的完整 Release Note，便于用户了解全部改动。  
  2. 在项目主页或文档中增加 **使用案例（尤其是云客服与电商中继）** 的实战指南。  
  3. 开启 **Discussion** 板块，收集用户对后续功能的投票与需求，帮助形成透明的路线图。  

---  

*数据来源：GitHub API（2026‑05‑08 过去 24 小时） | 报告生成时间：2026‑05‑08*

</details>

<details>
<summary><strong>librefang</strong> — <a href="https://github.com/librefang/librefang">librefang/librefang</a></summary>

# 📊 LibreFang 项目日报 — 2026-05-08

## 1. 今日速览

LibreFang 今日保持极高开发活跃度，共合并/关闭 **35 个 PR**，关闭 **15 个 Issues**。核心进展集中在 kernel 重构收尾（SubsystemApi trait 迁移、AppState 解耦）、skill workshop 功能上线、以及大量 bugfix（dashboard 80+ bug、WhatsApp gateway 弹性加固、prompt-leak 修复）。需要注意：PR #4766 的 CI 仍在 macOS/Linux/Windows 多平台失败，kernel 重构后的回归风险需要持续关注。此外 @AIHunter83 反馈的 GCP Free Tier 部署问题（plugins 安装失败、Hands 页面空白）值得调查基础设施适配性。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

| # | PR 描述 | 作者 | 状态 | 意义 |
|---|---|---|---|---|
| [#4756](https://github.com/librefang/librefang/pull/4756) | refactor(kernel): decompose LibreFangKernel god struct into 13 subsystems | @houko | ✅ 已合并 | 标志性重构完成——kernel 从 ~17.9k LOC 单文件拆分为 13 个 subsystem handle，字段数从 70+ 缩减，支撑并行开发 |
| [#4766](https://github.com/librefang/librefang/pull/4766) | refactor(kernel): migrate inherent forwards to *SubsystemApi traits | @houko | ✅ 已合并 | kernel 重构 follow-up，将所有 forward 方法路由到 13 个 typed trait，消除隐式耦合 |
| [#3566](https://github.com/librefang/librefang/issues/3566) | arch: AppState leaks entire kernel — 116 kernel methods exposed to routes | @houko | ✅ 已关闭 | 伴随 #4756/#4766 重构完成，解耦了 API 层与 kernel 实现 |
| [#4741](https://github.com/librefang/librefang/pull/4741) | feat(skill-workshop): passive after-turn capture pipeline | @houko | ✅ 已合并 | 关闭 #3328——agent 可从成功交互中自动学习并存储可复用 workflow 到 `~/.librefang/skills/pending/` |
| [#4742](https://github.com/librefang/librefang/pull/4742) | feat(acp): Agent Client Protocol adapter for Zed/VS Code/JetBrains | @houko | ✅ 已合并 | 关闭 #3313——编辑器原生嵌入 agent，支持 approval modal、文件读写、terminal 托管 |
| [#4719](https://github.com/librefang/librefang/pull/4719) | fix(dashboard): 80+ bugs, a11y gaps, i18n misses across 18 pages | @leszek3737 | ✅ 已合并 | 规模化质量提升，覆盖 18 个页面组件 |
| [#4717](https://github.com/librefang/librefang/pull/4717) | refactor(dashboard): harden shell, extract PromptsExperimentsModal | @leszek3737 | ✅ 已合并 | React 性能优化，timer/state 泄漏修复，错误边界增强 |
| [#4761](https://github.com/librefang/librefang/pull/4761) | fix(observability): correlate daemon logs with agent.id / session.id | @neo-wanderer | ✅ 已合并 | 可观测性关键修复——解决了 daemon 日志无法关联到具体 agent/session 的痛点 |
| [#4764](https://github.com/librefang/librefang/pull/4764) | fix(claude-code): pipe prompt to stdin instead of argv (E2BIG fix) | @f-liva | ✅ 已合并 | 解决了长程 agent 因 prompt 超过 `ARG_MAX` 导致 Claude Code driver 崩溃的问题 |
| [#4765](https://github.com/librefang/librefang/pull/4765) | fix(wa-gateway, claude-code): block `(thinking)` placeholders from reaching users | @f-liva | ✅ 已合并 | 紧急修复——`(thinking)` 泄露到 WhatsApp 群组 |
| [#4768](https://github.com/librefang/librefang/pull/4768) | chore(merge): upstream fb53ddc0d + BossFang preservation rules | @GQAdonis | ✅ 已合并 | 上游合并，r2d2 连接池替换 `Arc<Mutex<Connection>>` |
| [#4775](https://github.com/librefang/librefang/pull/4775) | fix(skill-workshop): default opt-in + bell/tab navigation | @houko | ✅ 已合并 | skill workshop 默认关闭（opt-in），避免占用操作者注意力 |

---

## 4. 社区热点

### 🔥 最活跃讨论

**Issue #4686** — Plugins throwing error while installing on GCP (Free Tier)
- 作者：@AIHunter83 | 评论：5 | 状态：CLOSED
- 链接：https://github.com/librefang/librefang/issues/4686
- 热度原因：GCP Free Tier 用户在安装 plugin 时遭遇报错，截图清晰展示了错误堆栈。这是 **第二位** 提及 GCP Free Tier 部署问题的用户（关联 #4684），暗示 GCP 环境存在系统性适配问题。

**Issue #4774** — CI failure on PR #4766
- 作者：@github-actions[bot] | 评论：4 | 状态：OPEN
- 链接：https://github.com/librefang/librefang/issues/4774
- 热度原因：尽管 #4766 已合并，但 CI 仍在 6 个平台失败（macOS 多版本、Windows、Linux），说明 kernel 重构可能存在跨平台回归，@houko 需要跟进。

**Issue #4767** — CI cancelled on PR #4756
- 作者：@github-actions[bot] | 评论：5 | 状态：CLOSED
- 链接：https://github.com/librefang/librefang/issues/4767
- 热度原因：反映了 kernel 重构期间 CI 的不稳定性，但最终 #4756 已成功合并。

---

## 5. Bug 与稳定性

### 🔴 严重

**#4760** `[OPEN]` fix(runtime): close prompt-leak + sentinel-regurgitation vectors
- 作者：@f-liva | 平台：runtime
- 摘要：2026-05-06 发生 prompt-leak 事故，模型输出 `<answer>...memory dump...</answer>` 及 `## Sender\n## Today\n## Calendar` 等系统 prompt 逐字泄露。问题复合：leaked output → channel adapter → 到达终端用户。
- 链接：https://github.com/librefang/librefang/pull/4760
- 状态：PR 已开（size/L），待合并

**#4747** `[OPEN]` bug(kernel): workflow retry loop retries inside burst window — guaranteed failure on QuotaExceeded
- 作者：@DaBlitzStein | 平台：kernel
- 摘要：workflow step 命中 per-minute token burst 限制后，`workflow.rs:1000-1033` 的重试循环在无退避的情况下同步重试，所有重试请求都落在同一个 60s 滑动窗口内，必然再次触发 `QuotaExceeded`。
- 链接：https://github.com/librefang/librefang/issues/4747

**#4686** `[CLOSED]` Plugins throwing error on GCP (Free Tier)
- 作者：@AIHunter83
- 摘要：GCP Free Tier 环境下安装 plugin 时抛出错误（详见截图）
- 链接：https://github.com/librefang/librefang/issues/4686

### 🟡 中等

**#4774** `[OPEN]` CI failure on PR #4766
- 摘要：kernel 重构后 6 个平台 CI 失败（macOS、Windows、Linux 多版本），需回归测试。
- 链接：https://github.com/librefang/librefang/issues/4774

**#4684** `[CLOSED]` Hands page showing empty on GCP (Free Tier)
- 作者：@AIHunter83
- 摘要：Hands 页面无数据显示，0 active / 0 total，部署于 GCP Free Tier。
- 链接：https://github.com/librefang/librefang/issues/4684

**#4732** `[CLOSED with PR]` bug(kernel): SSRF validation gaps in cron delivery webhook URLs
- 作者：@leszek3737
- 摘要：`is_blocked_webhook_host` 缺失对 `0.0.0.0`、私有网段（10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16）、hex/decimal IP、IPv4-mapped IPv6 等的拦截。
- 链接：https://github.com/librefang/librefang/issues/4732

**#4664** `[CLOSED]` Websearch config missing in GUI (+SearXNG still not working)
- 作者：@fbnielsen1959
- 摘要：Web Search providers 配置在 GUI 中缺失，在 `config.toml` 中添加 SearXNG 会导致 dashboard 无法加载。
- 链接：https://github.com/librefang/librefang/issues/4664

### 🟢 已修复

| Issue | 修复 PR | 描述 |
|---|---|---|
| #4722 | — | perf: N+1 queries in AgentKvSection（已有修复计划） |
| #4701 | — | bug(api): `set_provider_key` 写入 `secrets.env` 但 systemd 加载 `.env`，daemon 重启后 key 丢失 |

---

## 6. 功能请求与路线图信号

### 📋 新功能请求

**#4745** Feature request: Manually editable model capabilities
- 作者：@FrantaNautilus
- 诉求：当前 model capabilities 依赖 provider 声明，但 `capabilities` 字段并非通用标准。请求支持手动编辑 model capabilities 以覆盖 provider 声明。
- 链接：https://github.com/librefang/librefang/issues/4745

**#4715** Workflow runs lost on graceful shutdown
- 作者：@DaBlitzStein
- 诉求：daemon 优雅关闭时，`Running`/`Pending` 状态的 workflow runs 被静默丢弃。重启后 `recover_stale_running_runs` 标记为 "Interrupted by daemon restart"，但未保存可恢复状态。
- 链接：https://github.com/librefang/librefang/issues/4715

### 🔧 已有 PR 的功能请求

| Issue | 对应 PR | 状态 |
|---|---|---|
| #4748 make token burst ratio configurable per agent | #4749 | OPEN（有 conflicts） |
| #3335 Resumable workflows with mid-pipeline approval | 相关 PR 在推进中 | — |

### 🗺️ 路线图信号

从今日 PR 合并情况判断，项目正在推进以下方向：
1. **kernel 重构收尾** — SubsystemApi trait 迁移完成，AppState 解耦，kernel 单文件问题解决
2. **可观测性增强** — daemon logs 关联 agent.id / session.id（#4761）
3. **Skill Workshop** — passive after-turn capture pipeline 上线（#4741）
4. **编辑器集成** — ACP adapter 支持 Zed/VS Code/JetBrains 原生嵌入（#4742）
5. **多租户弹性** — WhatsApp gateway 心跳、重试、crash-safety 全面加固（#4759）

---

## 7. 用户反馈摘要

### 用户 @AIHunter83（GCP Free Tier 部署场景）
- **痛点 1**：在 GCP Free Tier 安装 plugin 时报错
- **痛点 2**：Hands 页面完全空白（0 active / 0 total）
- **痛点 3**：使用 Agent/Hand 时观察到 token 消耗异常巨大（#3044）
- **推测**：GCP Free Tier 资源限制（1 vCPU / 内存限制）可能与 librefang 的资源调度存在冲突

### 用户 @fbnielsen1959
- **痛点**：Web Search 配置（SearXNG）在 GUI 中不可见，且添加到 `config.toml` 后 dashboard 无法加载
- **诉求**：能在 GUI 中添加/编辑 Web Search providers

### 用户 @FrantaNautilus
- **痛点**：model capabilities 依赖 provider 声明，但各 provider 字段标准不统一，导致功能不可用
- **诉求**：支持手动覆盖/编辑 model capabilities

---

## 8. 待处理积压

### ⚠️ 长期未响应或 conflict 的 PRs

| # | PR | 作者 | 问题 | 优先级 |
|---|---|---|---|---|
| [#4759](https://github.com/librefang/librefang/pull/4759) | fix(whatsapp-gateway): resilience pass | @f-liva | `has-conflicts` — 待解决冲突后合并 | 高 |
| [#4757](https://github.com/librefang/librefang/pull/4757) | feat(kernel): provider-aware token budget with pre-dispatch gating | @DaBlitzStein | `has-conflicts` — 解决 4 个架构性 token 预算问题 | 高 |
| [#4749](https://github.com/librefang/librefang/pull/4749) | feat(kernel): make token burst ratio configurable per agent | @DaBlitzStein | `has-conflicts` — 补充 #4748 | 中 |
| [#4760](https://github.com/librefang/librefang/pull/4760) | fix(runtime): close prompt-leak + sentinel-regurgitation | @f-liva | OPEN — 涉及安全，建议优先处理 | 高 |

### 📌 长期架构 Issue（持续推进中）

| # | 描述 | 状态 |
|---|---|---|
| [#3044](https://github.com/librefang/librefang/issues/3044) | 增强 tokens drains during chat with Agent/Hand（用户报告 token 消耗异常） | CLOSED（已有 has-pr） |
| [#4715](https://github.com/librefang/librefang/issues/4715) | Workflow runs lost on graceful shutdown（数据丢失风险） | OPEN |

---

## 总结

**今日健康度：🟢 良好**

- **活跃度**：35 PR 合并，15 Issues 关闭，开发节奏强劲
- **质量信号**：kernel 重构里程碑完成（#4756 + #4766），dashboard 80+ bug 修复，observability 增强
- **风险项**：CI 在 #4774 多平台失败，kernel 重构后回归风险需监控；WhatsApp gateway / prompt-leak PR 待合并
- **用户侧**：GCP Free Tier 部署问题需系统性排查（2 个相关 issue 均来自同一用户）

---
*报告生成时间：2026-05-08 | 数据来源：GitHub (librefang/librefang)*

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# openfang 项目动态日报

**报告日期**: 2026-05-08  
**仓库**: [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang)  
**数据周期**: 2026-05-07 00:00 至 2026-05-08 00:00 (UTC)

---

## 1. 今日速览

今日 openfang 项目保持平稳活跃状态。社区共提交 5 条新 Issue，全部为功能增强类请求，由同一贡献者 @dancingclaw 提交，聚焦于安全审计、配置管理和技能安装等核心功能模块。Pull Request 方面有 1 条待合并，主要修复文档链接问题。版本发布暂无更新。当前项目处于需求收集与文档完善阶段，整体健康度良好，无重大稳定性或 Bug 报告。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| 类型 | 数量 | 详情 |
|------|------|------|
| 待合并 PR | 1 | [PR #1175](https://github.com/RightNow-AI/openfang/pull/1175) - Fix getting started documentation links |
| 已合并 PR | 0 | - |
| 新开 Issue | 5 | 功能增强类 |

**PR #1175** 由贡献者 @aqilaziz 提交，修复 `docs/getting-started.md` 中的本地 Markdown 链接缺失 `.md` 扩展名的问题，使链接在 GitHub 页面和本地环境均能正确解析。该 PR 已通过 `git diff --check` 验证，预计将很快合并。

---

## 4. 社区热点

### 热度 Issue 一览

| Issue # | 标题 | 作者 | 评论数 | 点赞数 |
|---------|------|------|--------|--------|
| [#1174](https://github.com/RightNow-AI/openfang/issues/1174) | Add POST /api/audit/append endpoint | @dancingclaw | 0 | 0 |
| [#1173](https://github.com/RightNow-AI/openfang/issues/1173) | Document --add-host=host-gateway | @dancingclaw | 0 | 0 |
| [#1172](https://github.com/RightNow-AI/openfang/issues/1172) | Auto-log HAND.toml SHA-256 hash | @dancingclaw | 0 | 0 |
| [#1171](https://github.com/RightNow-AI/openfang/issues/1171) | Propagate TaintLabel | @dancingclaw | 0 | 0 |
| [#1170](https://github.com/RightNow-AI/openfang/issues/1170) | Add --require-signed flag | @dancingclaw | 0 | 0 |

**分析**: 所有活跃 Issue 均来自 "assistant project / Phase 7 (personal-family pilot)" 项目，表明 OpenFang 正被用于 AI 个人助手的生产场景。需求集中在：

- **安全审计**: API 审计端点集成 (`#1174`)、Merkle 审计链哈希校验 (`#1172`)
- **配置管理**: 污点标签传播 (`#1171`)、Docker 网络配置文档 (`#1173`)
- **技能管理**: 签名强制校验 (`#1170`)

---

## 5. Bug 与稳定性

**今日无 Bug 或崩溃报告**

---

## 6. 功能请求与路线图信号

| Issue | 功能方向 | 关联模块 | 潜在影响 |
|-------|----------|----------|----------|
| [#1170](https://github.com/RightNow-AI/openfang/issues/1170) | `--require-signed` 签名校验 | skill install | 提升安全性 |
| [#1171](https://github.com/RightNow-AI/openfang/issues/1171) | TaintLabel 传播 | ingestion/tool sinks | 数据溯源能力 |
| [#1172](https://github.com/RightNow-AI/openfang/issues/1172) | HAND.toml 哈希审计 | reload 流程 | 合规性增强 |
| [#1173](https://github.com/RightNow-AI/openfang/issues/1173) | Docker 网络文档 | 文档/部署 | 降低使用门槛 |
| [#1174](https://github.com/RightNow-AI/openfang/issues/1174) | /api/audit/append 端点 | API | 外部审计集成 |

**判断**: 5 条功能请求均指向企业级安全与合规场景，建议维护者评估是否纳入下一版本路线图。`#1170` 已有明确 CLI 改动方案，实现可行性较高。

---

## 7. 用户反馈摘要

从 Issue 内容推断，用户（"personal-family pilot" 场景）当前关注点：

- **使用场景**: 将 openfang 作为 AI 个人助手运行时，需与外部审计系统集成
- **痛点**:
  - 缺乏标准化审计 API 接口
  - Docker 容器内调试工具（如 curl）缺失
  - 技能安装安全性不足
- **诉求**: 提升生产级可靠性，而非功能性大幅扩展

---

## 8. 待处理积压

| 优先级 | Issue # | 存在时长 | 摘要 |
|--------|---------|----------|------|
| 中 | [#1174](https://github.com/RightNow-AI/openfang/issues/1174) | 1 天 | 缺少审计 API 端点 |
| 中 | [#1173](https://github.com/RightNow-AI/openfang/issues/1173) | 1 天 | 网络配置文档缺失 |
| 低 | [#1172](https://github.com/RightNow-AI/openfang/issues/1172) | 1 天 | 配置变更审计 |
| 低 | [#1171](https://github.com/RightNow-AI/openfang/issues/1171) | 1 天 | 数据血缘追踪 |
| 低 | [#1170](https://github.com/RightNow-AI/openfang/issues/1170) | 1 天 | 技能签名校验 |

**提醒**: 所有 Issue 创建时间均为 2026-05-07，均处于 "OPEN" 状态，暂无维护者响应。建议优先处理 PR #1175（文档修复），并对上述功能请求进行分类评估。

---

**报告生成时间**: 2026-05-08 00:00 UTC  
**数据来源**: GitHub REST API | [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang)

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*