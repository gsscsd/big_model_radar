# OpenClaw 生态日报 2026-05-16

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-16 02:28 UTC

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

**报告日期**: 2026-05-16  
**数据来源**: GitHub openclaw/openclaw

---

## 1. 今日速览

OpenClaw 项目在过去 24 小时内保持极高的社区活跃度，共产生 500 条 Issues 更新（新开/活跃 455 条）和 500 条 PR 更新。今日发布了两个 beta 版本（v2026.5.16-beta.1 和 v2026.5.14-beta.2），聚焦于工具调用审批管道扩展、SDK 规范化和 Agent 配置灵活性增强。社区讨论热度较高，Discord/Matrix 消息传递、Telegram 群组路由和 Codex 后端响应超时成为三大焦点问题。整体项目处于快速迭代期，建议关注即将合并的 XL size PR 对 Gateway 性能监控的重大改进。

---

## 2. 版本发布

### v2026.5.16-beta.1
**发布时间**: 2026-05-16

**核心变更**:
- **Maintainer tooling**: 将 Crabbox 技能默认路由通过 repo 代理的 AWS 配置，Blacksmith Testbox 改为显式 opt-in 而非默认启用
- **CLI/onboarding**: 本地化设置向导和捆绑渠道设置流程，支持英语和简体中文

### v2026.5.14-beta.2
**发布时间**: 2026-05-14

**核心变更**:
- **Channels/SDK**: 向渠道 turn 构建添加规范化命令 turn facts，为插件入站上下文暴露命令 turn 辅助函数
- **Agents/config**: 支持按 Agent 的 bootstrap profile 覆盖 `contextInjection`、`bootstrapMaxChars` 和 `bootstrapTotalMaxChars` 配置项

**迁移注意事项**: 无破坏性变更，建议测试 Agent 配置覆盖功能。

---

## 3. 项目进展

### 已合并/关闭的 PRs

| PR # | 标题 | 类型 | 状态 |
|------|------|------|------|
| [#82298](https://github.com/openclaw/openclaw/pull/82298) | Fix Telegram stop lane and gateway session aborts | fix | CLOSED |
| [#82306](https://github.com/openclaw/openclaw/issues/82306) | Subagent completion errors silently swallowed | fix | CLOSED |
| [#82319](https://github.com/openclaw/openclaw/issues/82319) | Feature: mid-stream abort for active LLM generation | feature | CLOSED |
| [#82385](https://github.com/openclaw/openclaw/issues/82385) | Xiaomi MiMo provider replay fails | fix (crash) | CLOSED |

### 重要待合并 PRs

| PR # | 标题 | 规模 | 亮点 |
|------|------|------|------|
| [#82396](https://github.com/openclaw/openclaw/pull/82396) | Gateway restart benchmark and close-path trace instrumentation | XL | 新增重启性能基准测试和追踪工具 |
| [#82112](https://github.com/openclaw/openclaw/pull/82112) | Add named session resume command | XL | 支持 `/resume [session-label]` 命令 |
| [#78464](https://github.com/openclaw/openclaw/pull/78464) | Bundle zod subpath artifact | S | 修复 pnpm 全局安装 Zod 解析问题 |
| [#74509](https://github.com/openclaw/openclaw/pull/74509) | Matrix: honor MSC3967 and surface MAS reset URL | L | 改善 Matrix 跨签名引导 |

**项目进展评估**: 今日关闭 31 个 PR，主要聚焦于 Telegram 渠道稳定性修复和 subagent 错误处理。Gateway 重启基准测试和会话恢复命令的 XL PR 预计将显著提升运维体验。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 类型 | 链接 |
|---------|------|--------|------|------|
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | Channel-mediated approval for MCP tool calls | 10 | Feature | [查看](https://github.com/openclaw/openclaw/issues/78308) |
| [#78016](https://github.com/openclaw/openclaw/issues/78016) | Voice messages to agent don't work on Matrix | 9 | Bug | [查看](https://github.com/openclaw/openclaw/issues/78016) |
| [#81955](https://github.com/openclaw/openclaw/issues/81955) | Injections do not work on 2026.5.12 - agent using ollama loses persona | 7 | Regression | [查看](https://github.com/openclaw/openclaw/issues/81955) |
| [#78461](https://github.com/openclaw/openclaw/issues/78461) | Gateway re-scans plugin metadata during model normalization | 7 | Bug | [查看](https://github.com/openclaw/openclaw/issues/78461) |

### 热点分析

1. **MCP 工具调用审批管道扩展** (#78308): 社区强烈要求将 MCP 服务器接入现有的 `/approve <id>` 渠道审批流程，实现对 MCP 工具调用的统一权限控制。这反映出用户对安全性与便捷性兼顾的迫切需求。

2. **Matrix 语音消息失效** (#78016): 语音消息被正确接收但 Agent 无法"听到"，仅生成礼貌回复。这是渠道兼容性的典型问题，可能影响大量 Matrix 用户体验。

3. **回归问题集中爆发**: 5.x 版本更新后多个回归问题涌现，包括注入失效、Discord 频道加载失败等，显示快速迭代下的测试覆盖盲区。

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue # | 标题 | 状态 | 是否有 Fix PR |
|---------|------|------|---------------|
| [#82385](https://github.com/openclaw/openclaw/issues/82385) | Xiaomi MiMo provider replay fails with 400 "Param Incorrect" (crash) | CLOSED | ⚠️  需关注 |
| [#81412](https://github.com/openclaw/openclaw/issues/81412) | stopChannel abort-timeout leaves zombie task | OPEN | ❌ |
| [#77532](https://github.com/openclaw/openclaw/issues/77532) | Agent bootstrap takes 3+ minutes per turn | OPEN | ❌ |

### 严重程度：中 🟡

| Issue # | 标题 | 状态 | 回归问题 |
|---------|------|------|----------|
| [#81955](https://github.com/openclaw/openclaw/issues/81955) | Injections do not work - agent loses persona | CLOSED | ⚠️  |
| [#77930](https://github.com/openclaw/openclaw/issues/77930) | Discord channel not loaded in 2026.5.4 | OPEN | ⚠️  |
| [#82150](https://github.com/openclaw/openclaw/issues/82150) | DeepSeek V4 via OpenRouter returns 500 after tool calls | CLOSED | ⚠️  |
| [#79752](https://github.com/openclaw/openclaw/issues/79752) | Discord HTTP responses fail with gzip not decompressed under Node v26 | OPEN | ⚠️  |
| [#82343](https://github.com/openclaw/openclaw/issues/82343) | Codex app-server backend timeout - response never delivered | OPEN | ⚠️  |

### 严重程度：低 🟢

| Issue # | 标题 | 状态 |
|---------|------|------|
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | Telegram messages silently dropped |
| [#78885](https://github.com/openclaw/openclaw/issues/78885) | MEDIA directive causes duplicate message delivery in webchat |
| [#78785](https://github.com/openclaw/openclaw/issues/78785) | claude-cli backend: auto-invalidate session id after AbortError |

**稳定性评估**: 今日共报告 15+ 个 Bug，其中 5 个为回归问题。Codex 后端超时问题（#82343、#82274）影响面广，建议优先处理。Node v26 macOS 环境下的 gzip 解压缩问题需要关注环境兼容性测试。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue # | 标题 | 预期影响 | 相关 PR |
|---------|------|----------|---------|
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | MCP tool calls channel-mediated approval | 高 | - |
| [#79458](https://github.com/openclaw/openclaw/issues/79458) | i18n fields for slash command descriptions | 中 | - |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | Configurable upload size limit for Control UI | 中 | - |
| [#77202](https://github.com/openclaw/openclaw/issues/77202) | Signal channel: live tool-call progress | 中 | - |
| [#71301](https://github.com/openclaw/openclaw/issues/71301) | Ship version-matched bundled docs | 高 | - |
| [#82319](https://github.com/openclaw/openclaw/issues/82319) | Mid-stream abort for LLM generation | 高 | CLOSED |

### 路线图信号分析

1. **安全与审批**: MCP 工具调用审批管道扩展需求强烈，可能成为下个版本的优先功能
2. **多语言支持**: 简体中文本地化已在 onboarding 中实现，slash command 描述国际化是自然延伸
3. **可观测性**: Gateway restart benchmark 和 tracing 工具的 XL PR 表明性能监控将是近期重点

---

## 7. 用户反馈摘要

### 核心痛点

| 场景 | 问题 | 影响用户数 |
|------|------|----------|
| **Telegram 群组** | 回复路由到错误 chat_id | 多位用户 |
| **Codex 后端** | 响应超时但模型已完成 | 多位用户 |
| **Matrix 渠道** | 语音消息无法被 Agent 处理 | Frank 等 |
| **更新升级** | 5.5.x 后多个回归问题 | 大量用户 |
| **OAuth 刷新** | MiniMax Portal token 无法自动刷新 | 多位用户 |

### 正面反馈信号

- v2026.5.14-beta.2 的 Agent 配置覆盖功能受到好评（per-agent bootstrap profile overrides）
- Discord 直接 API 调用工作正常，问题在 OpenClaw 内部路由层

### 典型用户场景

> "When I send a voice message to my agent on Matrix, it doesn't work. The agent gets the audio but doesn't actually hear it — it just makes up a polite reply instead of answering my question." — @frankdierolf

> "Multiple critical failures after updating to 2026.5.12 on macOS (Gmail sending, Dropbox terminal access, PDF generation)" — @lshamash

---

## 8. 待处理积压

### 长期未响应的重要 Issues (>30 天未更新)

| Issue # | 标题 | 创建日期 | 状态 | 优先级 |
|---------|------|----------|------|--------|
| [#36614](https://github.com/openclaw/openclaw/issues/36614) | per-channel-peer updateLastRoute still contaminates main session | 2026-03-05 | OPEN | 中 |
| [#68209](https://github.com/openclaw/openclaw/issues/68209) | Switching openai-codex to codex triggers runaway context growth | 2026-04-17 | OPEN | 高 |
| [#68751](https://github.com/openclaw/openclaw/issues/68751) | session-memory replay causes autonomous re-execution | 2026-04-19 | OPEN | 中 |
| [#69492](https://github.com/openclaw/openclaw/issues/69492) | system-event-shape consumer-path leakage | 2026-04-20 | OPEN | 中 |

### 长期未响应的 PRs

| PR # | 标题 | 创建日期 | 状态 |
|------|------|----------|------|
| [#43565](https://github.com/openclaw/openclaw/pull/43565) | feat(tools): add allowedRoots config for fs tools | 2026-03-12 | OPEN |
| [#42497](https://github.com/openclaw/openclaw/pull/42497) | fix: route embedded tool calls through in-process dispatch | 2026-03-10 | OPEN |
| [#42425](https://github.com/openclaw/openclaw/pull/42425) | fix(hooks): load workspace hooks for non-default agents | 2026-03-10 | OPEN |

### 积压清理建议

1. **#43565 allowedRoots config** 存在 70+ 天，建议评审合并以增强安全边界
2. **#36614 per-channel-peer 污染问题** 存在 70+ 天，影响会话隔离正确性
3. **#68209 context growth** 涉及模型切换回归，建议优先回归测试覆盖

---

## 总结

OpenClaw 项目今日保持极高活跃度，两个新 beta 版本推进了 MCP 审批管道和 Agent 配置灵活性。社区聚焦于 Telegram/Discord 渠道稳定性、Codex 后端超时和回归问题修复。XL size 的 Gateway benchmark PR 预计将改善可观测性。长期积压的 fs tools allowedRoots 和会话隔离问题需要尽快处理。

**报告生成时间**: 2026-05-16  
**维护者建议**: 建议优先处理 Telegram 路由回归和 Codex 超时问题，同时评审 #43565 和 #36614 的长期积压。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-05-16  
**分析范围**：16 个开源项目生态

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态处于**高速迭代与架构分化并行期**。以 OpenClaw 和 hermes-agent 为代表的头部项目保持极高活跃度（单日 500+ 条事务更新），同时大量命名带有 "Claw" 后缀的衍生项目（NanoClaw、PicoClaw、Zeroclaw、IronClaw 等）正在从不同技术路径探索 Agent 框架的边界。生态整体呈现三大特征：**多渠道集成成为基础设施标配**（Telegram、Discord、Matrix、Signal 等）；**安全沙箱与权限控制从附加功能升级为核心竞争力**；**架构重构与模块化拆分成为提升可维护性的主旋律**，librefang 拆分 77k LOC god-crate、IronClaw 推进 Reborn 架构均为典型案例。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度 |
|------|-------------|-----------|---------|--------|
| **OpenClaw** | 500 (455 new/active) | 500 | 2 个 beta (v2026.5.16-beta.1, v2026.5.14-beta.2) | 🟡 快速迭代期 |
| **hermes-agent** | 324 (181 new/active) | 500 (369 pending) | 无 | 🟡 修复驱动 |
| **NanoBot** | 78 (57 Issues + 21 PRs) | 67 closed | 无 | 🟢 活跃稳定 |
| **Zeroclaw** | 22 (14 active, 8 closed) | 50 (47 pending, 3 merged) | 无 (v0.8.0 审查中) | 🟡 高活跃 |
| **NanoClaw** | 50 (5 new/active) | 50 (6 pending) | **v2.0.63** ✅ | 🟢 高活跃 |
| **IronClaw** | 16 (all new/active) | 50 (22 pending, 28 merged) | v0.28.2 | 🟢 稳健推进 |
| **QwenPaw** | 22 (11 active, 11 closed) | 39 (16 pending, 23 merged) | 无 | 🟢 高活跃 |
| **PicoClaw** | 11 | 29 (16 merged, 13 pending) | v0.2.8-nightly | 🟢 高活跃 |
| **LobsterAI** | - | 35 (32 merged, 3 pending) | 无 | 🟢 高活跃 |
| **librefang** | 16 (3 closed) | 30 (8 merged/closed) | 无 | 🟢 优秀 |
| **Moltis** | 4 (all closed) | 7 (1 pending) | 无 | 🟢 良好 |
| **openfang** | 0 | 1 (pending) | 无 | 🟡 低活跃 |
| **TinyClaw** | - | - | - | ⚫ 无活动 |
| **ZeptoClaw** | - | - | - | ⚫ 无活动 |
| **EasyClaw** | - | - | - | ⚫ 无活动 |

> **数据支撑**：OpenClaw 和 hermes-agent 构成第一梯队（日事务量 300-500 条），NanoBot、NanoClaw、Zeroclaw、QwenPaw 等构成第二梯队（20-80 条），TinyClaw/ZeptoClaw/EasyClaw 三项目处于静默状态，可能已停止维护或并入其他项目。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

OpenClaw 是本次统计中**社区规模最大、功能覆盖最广**的项目。500 条/24h 的事务流通量几乎是第二名 hermes-agent 的 1.6 倍，在 Issues 数量上更是占据绝对优势。其核心优势体现在：

- **渠道生态完整性**：已集成 Telegram、Discord、Matrix、Signal、飞书、QQ、WhatsApp 等 10+ 渠道，是本次统计中渠道覆盖最全面的项目
- **工具调用审批管道**：率先实现 MCP 工具调用的渠道级审批机制（Issue #78308），安全架构领先
- **多模型 Provider 矩阵**：支持 OpenAI、Anthropic、Gemini、DeepSeek、OpenRouter 等主流及中转 API，兼容小米 MiMo 等国产模型

### 3.2 技术路线差异

| 维度 | OpenClaw | 典型竞品 |
|------|----------|---------|
| **架构风格** | 插件化 Channels + SDK，Channel 与 Agent 解耦 | NanoClaw 侧重容器隔离执行；librefang 侧重 WASM 沙箱 |
| **安全模型** | 工具调用审批管道 + 渠道级权限控制 | IronClaw 推进 Reborn 架构（planned driver）；librefang 推进 per-agent memory isolation |
| **版本节奏** | Beta 快速迭代（双周 beta + RC） | NanoClaw 刚建立正式 Release 规范（v2.0.63） |
| **社区治理** | 高度开放，大量外部贡献者 | hermes-agent 同样开放，但 PR 积压较重（369 待合并） |

### 3.3 社区规模对比

OpenClaw 在 Issues 活跃度上远超竞品，但 PR 积压与维护者响应能力值得关注。今日 500 条 PR 更新中包含大量待合并 PR，而长期积压 Issue（如 #43565 allowedRoots 安全配置，70+ 天未处理）表明维护团队可能面临较大的 review 压力。相比之下，NanoBot（78 条事务，67 条关闭）和 Moltis（4 条 Issues 全部关闭）以更精简的规模实现了更高的单位处理效率。

---

## 4. 共同关注的技术方向

### 4.1 多渠道消息路由与兼容性

**涉及项目**：OpenClaw、NanoBot、NanoClaw、PicoClaw、QwenPaw、LobsterAI

多项目同步出现 Matrix 语音消息失效（OpenClaw #78016、PicoClaw #2817）、Telegram 路由错误（OpenClaw #82298）、飞书消息处理不一致（NanoBot #3789）等渠道层 Bug，表明**跨渠道统一抽象层**是当前生态的共性挑战。OpenClaw 的渠道 turn 构建规范化（turn facts 命令）和 NanoBot 的 Signal 渠道新增（PR #3852）均为解决该问题的技术路径。

### 4.2 Reasoning Model / Thinking Mode 支持

**涉及项目**：OpenClaw、NanoBot、PicoClaw、QwenPaw、hermes-agent、librefang

DeepSeek V4 和小米 MiMo 的 thinking mode 引发跨项目修复潮：
- OpenClaw 修复 Xiaomi MiMo provider replay（#82385）
- PicoClaw 修复 reasoning_content 流式解析（#2741）和 MiMo 多轮问题（#2862）
- QwenPaw 处理 MiMo thinking mode + 工具调用 400 错误（#4314）
- hermes-agent 修复 DeepSeek API thinking 参数（#15700）

核心问题集中在 **reasoning_content 的跨轮次传递和缓存键稳定性**，OpenClaw 的 prompt_cache_key 修复（NanoBot #3793）是典型解决方案。

### 4.3 安全沙箱与文件访问控制

**涉及项目**：OpenClaw、Zeroclaw、NanoClaw、PicoClaw、QwenPaw、librefang

安全相关 PR 占比显著提升：
- **NanoBot**：本地媒体附件隔离（#3842）、飞书文件名隔离（#3789）
- **PicoClaw**：Tirith pre-exec scanning（PR #2877）、PowerShell 编码绕过修复（#2836）
- **QwenPaw**：Shell 文件访问绕过防护（#4361）、备份恢复信任加固（#4409）
- **librefang**：vault 密钥统一解析（#5074）、per-agent memory isolation（#5071）
- **Zeroclaw**：allowed_path 逻辑缺陷（#5533 已关闭）

这反映出随着 Agent 获得文件系统访问和 shell 执行能力，**安全边界定义和路径遍历防护**已成为所有项目的核心工程议题。

### 4.4 工具按需加载与 Token 优化

**涉及项目**：librefang、NanoClaw、OpenClaw、NanoBot

librefang 按需工具/技能加载（PR #5073）可减少 ~50k tokens，NanoClaw 的 early-compact-nudge（PR #2500）和 NanoBot 的 skill_load 工具（#3847）均指向同一目标：**降低单次交互的上下文消耗**，在模型上下文窗口有限的前提下提升有效对话轮次。

### 4.5 可观测性与性能监控

**涉及项目**：OpenClaw、IronClaw、NanoClaw、NanoBot

OpenClaw 的 Gateway restart benchmark + tracing（XL PR #82396）和 NanoClaw 的 health-monitor 模块（PR #2498）反映了运维层面的共同需求——Agent 系统在后台长时间运行时，**静默失败检测和性能基准化**是生产部署的关键依赖。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 核心架构 |
|------|---------|---------|---------|
| **OpenClaw** | 全功能平台，渠道最全 | 跨平台重度用户、企业部署 | 插件化 Channels + SDK |
| **hermes-agent** | 治理与合规、宪法后端 | 需要 ACGS-Lite 治理框架的团队 | MultiStepLoop 内核 + typed governance |
| **IronClaw** | Reborn 架构重构、planned runtime | Near.ai 内部及深度定制用户 | Port/Adapter 架构，Reborn runtime |
| **librefang** | RL 训练数据导出、WASM 安全沙箱 | 强化学习研究社区 | god-crate → 5 独立 crates，WASM runtime |
| **NanoClaw** | 容器隔离、OAuth Token 管理 | Claude Code 重度用户，注重安全隔离 | Docker/容器 + Claude Code 集成 |
| **NanoBot** | 多模态推理、复杂任务分解 | 香港/亚太地区开发者 | LongTaskTool + Plan 工具 |
| **QwenPaw** | 阿里云集成、企业微信/钉钉 | 国内企业用户 | 云原生插件体系 |
| **PicoClaw** | 轻量嵌入式、多模态音频 | 边缘设备、物联网场景 | Go 实现，资源高效 |
| **Zeroclaw** | SOP 自动化、MQTT 集成 | 工业自动化、生产 SOP 用户 | SOP Engine + Rust 后端 |
| **Moltis** | 远程访问、TLS 证书管理 | 自托管用户 | Proxmox/容器部署优先 |

---

## 6. 社区热度与成熟度分层

### 快速迭代阶段（特征：事务量大、Bug 修复密集、版本节奏快）

| 项目 | 指标信号 |
|------|---------|
| **OpenClaw** | 2 个 beta/天，500 条事务/24h，多个回归问题涌现 |
| **hermes-agent** | 369 条 PR 待合并，P1/P2 问题修复驱动 |
| **librefang** | 多个 XL PR（5000+ 行重构）推进中，架构重大演进 |

### 质量巩固阶段（特征：功能趋于稳定，Bug 修复效率高，开始关注文档和 UX）

| 项目 | 指标信号 |
|------|---------|
| **NanoBot** | 78 条事务 67 条关闭，处理效率高；文档建设大规模推进（30+ 项） |
| **LobsterAI** | PR/Issue 比 35:1，安全和性能优化 PR 占比显著 |
| **Moltis** | 所有活跃 Issue 1-2 天内关闭；文档迁移至 Astro（PR #987） |
| **PicoClaw** | V3 配置格式文档同步（26 个文件），Nightly Build 测试中 |

### 功能探索阶段（特征：Issue 讨论活跃，功能请求多于 Bug，有明确的新功能方向）

| 项目 | 指标信号 |
|------|---------|
| **IronClaw** | Reborn WebUI Beta Issue 批量创建，多个 milestone 追踪中 |
| **NanoClaw** | #80 多运行时支持（60 👍，32 评论）是最热 Issue |
| **Zeroclaw** | SOP 模块多个隐性缺陷报告（#6685-6689），功能进入生产验证期 |

### 低活跃/停滞阶段

| 项目 | 状态 |
|------|------|
| **TinyClaw** | 24h 无活动 |
| **ZeptoClaw** | 24h 无活动 |
| **EasyClaw** | 24h 无活动 |
| **openfang** | 仅 1 条待合并 PR，无新 Issue |

---

## 7. 值得关注的趋势信号

### 7.1 厂商锁定风险催生多运行时架构需求

**信号来源**：NanoClaw Issue #80（60 👍，32 评论）、OpenClaw Anthropic API 依赖

Anthropic 开始封禁使用第三方工具的账户，这一事件直接推动了社区对多运行时支持的强烈诉求。NanoClaw 已在 PR #2490 推进 LiteLLM Provider 支持，OpenClaw 的 OpenRouter 中转兼容也在持续完善。**对 AI Agent 开发者而言，多 Provider 架构已从"nice-to-have"升级为"must-have"**。

### 7.2 安全从边界防护走向运行时治理

**信号来源**：OpenClaw MCP 工具审批管道、librefang per-agent memory isolation、QwenPaw Shell 防护系列修复

各项目不约而同地在**工具调用审批**（OpenClaw #78308）、**内存隔离**（librefang #5071）、**文件访问控制**（NanoBot #3842）和 **TOTP 分级 shell 访问**（Zeroclaw #5779）上投入资源。这表明 Agent 安全的关注点正从"能不能访问"向"访问后如何审计和限制"演进。

### 7.3 WebUI / Desktop App 成为下一个竞争维度

**信号来源**：hermes-agent PR #20059（Electron/Vite 桌面应用）、IronClaw Reborn WebUI Beta Issue 批量创建

当前大多数 Agent 项目仍以 CLI 或 Web 界面为主，但 hermes-agent 的桌面应用 PR 和 IronClaw 的原生 WebChat v2 路由（#3611）表明，**独立 GUI 客户端**即将成为差异化竞争点。对于非技术用户，GUI 体验可能是决定采用率的关键因素。

### 7.

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**: 2026-05-16
**项目**: HKUDS/nanobot
**数据来源**: GitHub

---

## 1. 今日速览

今日项目保持高度活跃，共处理 **78 条事务**（57 Issues + 21 PRs），其中 **67 条已完成关闭/合并**。项目今日呈现出"文档驱动"特征——52 个已关闭 Issue 中超过 30 个为文档、注释、图表类任务，表明 maintainer @xianqiangfu 正在系统性推进国际化文档建设。代码层面，Signal 消息渠道支持、Mimo reasoning 控制等多个功能 PR 已合并，标志着项目功能矩阵持续扩展。整体健康度评估：**活跃稳定**。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本信息请参考官方 Release 页面。

---

## 3. 项目进展

今日合并/关闭了 **17 个 Pull Requests**，以下为重要功能推进：

### 🔧 功能增强

| PR | 作者 | 概述 | 状态 |
|---|---|---|---|
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) | @zayfod | **新增 Signal 渠道支持**：集成 signal-cli daemon via HTTP JSON-RPC，支持 DM 和群聊、Markdown 转换、typing indicators、附件处理 | 待合并 |
| [#3847](https://github.com/HKUDS/nanobot/pull/3847) | @mkitsdts | **新增 skill_load 工具**：解决多轮对话中 skill.md 内容丢失问题 | 待合并 |
| [#3791](https://github.com/HKUDS/nanobot/pull/3791) | @chengyongru | **新增 plan 工具**：支持复杂任务分解与进度跟踪，自动注入 system prompt 并支持上下文压缩 | 待合并 |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | @chengyongru | **LongTaskTool 多步骤 Agent 任务**：元 ReAct 循环将长任务分解为顺序子步骤 | 已合并 |
| [#3788](https://github.com/HKUDS/nanobot/pull/3788) | @Re-bin | **/goal 命令与长任务**：端到端聊天作用域目标状态管理 | 已合并 |
| [#3373](https://github.com/HKUDS/nanobot/pull/3373) | @JiajunBernoulli | **Gateway 生命周期钩子**（on_start/on_stop）：启动/停止时发送通知 | 已合并 |

### 🐛 Bug 修复

| PR | 作者 | 概述 | 关联 Issue |
|---|---|---|---|
| [#3793](https://github.com/HKUDS/nanobot/pull/3793) | @boogieLing | **稳定 Codex prompt cache key**：修复每个对话轮次 key 变化问题 | #2440 |
| [#3840](https://github.com/HKUDS/nanobot/pull/3840) | @boogieLing | **Brave search 速率限制退避**：429 时重试一次 | #2560 |
| [#3845 → #3851](https://github.com/HKUDS/nanobot/pull/3851) | @olgagaga | **MiMo thinking 控制**：通过 Gateway 路由时正确传递 thinking_style | #3845 |
| [#3842](https://github.com/HKUDS/nanobot/pull/3842) | @Hinotoi-agent | **安全修复：本地媒体附件隔离**：workspace 限制启用时防止路径遍历 | — |
| [#3789](https://github.com/HKUDS/nanobot/pull/3789) | @Hinotoi-agent | **安全修复：飞书媒体文件名隔离**：防止路径注入 | — |
| [#3752](https://github.com/HKUDS/nanobot/pull/3752) | @tamvicky | **WhatsApp 语音转录后清理 media_paths**：防止 .ogg 文件被作为无效附件发送 | — |

### ⚡ 性能优化

| PR | 作者 | 概述 |
|---|---|---|
| [#3844](https://github.com/HKUDS/nanobot/pull/3844) | @chengyongru | **Runtime context 置后**：改善 KV 缓存命中率 |
| [#3782](https://github.com/HKUDS/nanobot/pull/3782) | @yorkhellen | **移除 WebUI 急切 markdown 预加载**：减少 1MB+ 不必要加载 |

### 🧹 重构与清理

| PR | 作者 | 概述 |
|---|---|---|
| [#3841](https://github.com/HKUDS/nanobot/pull/3841) | @chengyongru | 移除 GlobTool，GrepTool.glob 参数已覆盖功能 |
| [#3764](https://github.com/HKUDS/nanobot/pull/3764) | @JiajunBernoulli | Shell 工具支持 Windows UNC 路径 |
| [#3774](https://github.com/HKUDS/nanobot/pull/3774) | @chengyongru | 聊天原生 DM 发送者配对审批流程 |

---

## 4. 社区热点

### 🔥 最活跃 Issue

| Issue | 评论数 | 类型 | 概述 |
|---|---|---|---|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | **9** | Bug | WebUI 会话-打印内容显示错乱，需刷新页面才可恢复（版本 0.1.5.post3.2026.05.13） |
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) | **4** | Feature/Security | **希望支持密钥引用**（file/exec 方式），替代 config.json 明文存储，支持 1Password 等远程密钥服务 |

### 📊 热点分析

1. **#3790 WebUI 渲染 bug** 是今日最热问题，评论数远超其他 Issue。该 bug 出现在最新源码版本中，症状为会话打印内容错乱，提示可能涉及流式输出或前端状态管理问题。

2. **#2172 密钥安全请求** 持续受到关注（创建于 3 月 17 日），反映了用户对 secrets 管理安全性的诉求。已有 4 条评论讨论实现方案，预计将与安全相关 PR（如 #3842）结合推进。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Issue | 严重度 | 状态 | 说明 |
|---|---|---|---|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | 高 | 🟡 OPEN | WebUI 会话打印内容显示错乱，影响用户体验。已有 9 条评论讨论，暂无 fix PR |

### 🟡 中等优先级

| Issue | 状态 | 说明 |
|---|---|---|
| [#3848](https://github.com/HKUDS/nanobot/issues/3848) | ✅ CLOSED | webui render bug（@chengyongru 报告，可能已随其他 PR 修复） |

### 稳定性指标

- **已关闭的 Bug 相关 Issues**: 8 个（包括 #2440 Codex cache key, #2560 Brave rate limit, 多个安全修复）
- **持续交付的安全修复**：今日有 3 个 security-related PR 合并，显示项目对安全问题的快速响应能力

---

## 6. 功能请求与路线图信号

### 📌 用户明确需求

| Issue | 需求 | 潜在纳入版本 | 关联 PR |
|---|---|---|---|
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) | **密钥安全存储**：file/exec 方式读取 secrets | 未来版本 | 暂无直接关联 PR |
| [#3279](https://github.com/HKUDS/nanobot/issues/3279) | **Gateway 生命周期通知** | ✅ 已实现 | #3373, #3792 已合并 |

### 🚀 新功能方向信号

从今日 PR 活动分析，项目正在向以下方向演进：

1. **多渠道消息支持**：Signal 渠道（#3852 待合并）
2. **复杂任务处理**：LongTaskTool（#3460）+ Plan 工具（#3791）
3. **安全性强化**：媒体附件隔离、密钥管理
4. **性能优化**：缓存稳定性、渲染效率

---

## 7. 用户反馈摘要

### 用户痛点

| 场景 | 反馈 | 来源 |
|---|---|---|
| **多轮对话 skill 内容丢失** | "仅使用标准 read_file 工具时，skill.md 文件内容会丢失或被覆盖" | #3847 PR 描述 |
| **Gateway 后台运行无感知** | "Gateway 以 systemd 服务方式后台运行时，用户无法感知启动和停止状态" | #3279 Issue |
| **Codex 缓存键不稳定** | "每轮对话 prompt_cache_key 都变化，无法利用缓存优化" | #2440 Issue |
| **明文密钥不安全** | "config.json 直接存储所有 secrets，存在安全风险" | #2172 Issue |

### 用户满意度

- ✅ 多渠道支持：用户积极开发 Signal、Feishu 等渠道集成
- ✅ 安全意识提升：多个安全修复 PR 由社区贡献者主动提交
- ⚠️ WebUI 稳定性：近期源码版本出现渲染问题需关注

---

## 8. 待处理积压

### ⚠️ 长期未关闭 Issue

| Issue | 创建日期 | 关注点 | 建议 |
|---|---|---|---|
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) | 2026-03-17 | 密钥安全存储功能请求（2个月+） | 考虑分配开发者跟进，或提供明确的技术方案讨论 |
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | 2026-05-14 | WebUI 渲染 bug（2天） | 需优先定位根因 |

### 🟡 待合并 PR（贡献者期待）

| PR | 等待时长 | 说明 |
|---|---|---|
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) | 1 天 | Signal 渠道支持，功能完整 |
| [#3847](https://github.com/HKUDS/nanobot/pull/3847) | 1 天 | skill_load 工具，解决实际问题 |
| [#3791](https://github.com/HKUDS/nanobot/pull/3791) | 2 天 | Plan 工具，功能完整 |

---

## 总结

**2026-05-16 项目健康度：🟢 活跃稳定**

- 事务处理效率极高（78 条，67 条关闭）
- 文档/注释建设大规模推进（30+ 项）
- 安全修复持续输出（3 个 security PR）
- 新功能稳步开发（Signal 渠道、Plan 工具）

**需关注问题**：
1. 🔴 #3790 WebUI 渲染 bug 需快速响应
2. ⚠️ #2172 密钥安全功能长期未实现
3. 📈 PR 积压较少，项目迭代流畅

---

*本报告由 AI 基于 GitHub 数据自动生成，如有疑问请联系项目 maintainer。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报
**报告日期**：2026-05-16  
**项目**：zeroclaw-labs/zeroclaw  
**数据源**：GitHub 过去 24 小时活动

---

## 1. 今日速览

Zeroclaw 在过去 24 小时内保持了极高的社区活跃度，共产生 **22 条 Issues 更新**（新开/活跃 14 条，关闭 8 条）和 **50 条 PR 更新**（待合并 47 条，已合并 3 条），整体代码流通量处于高位。今日未发布新版本，但 v0.8.0 的 Multi-Agent Runtime 和 Schema V3 重大更新仍在持续审查中（#6398）。社区今日聚焦于 **SOP 模块的多个隐性缺陷**（#6685-6689 连续报告）、**技能系统的稳定性问题**（#6681 panic、#6678 API 拒绝）以及 **文件轮转新 crate** 的引入（#6611），表明项目在快速迭代的同时正面临复杂度的挑战。

---

## 2. 版本发布

**无新版本发布**

当前最新版本为 v0.7.6，相关追踪 Issue #6253 正在进行中，主题为改善 `zeroclaw skills` 的支持与 UX。v0.8.0 的 Multi-Agent Runtime 和 Schema V3 更新（#6398）正处于增量审查阶段，建议关注其破坏性变更说明。

---

## 3. 项目进展

### 已合并/关闭的 PRs（3 条）

| PR | 类型 | 摘要 |
|---|---|---|
| [#6525](https://github.com/zeroclaw-labs/zeroclaw/pull/6525) | Bug Fix | Matrix 频道修复，避免将根时间线消息自动thread化 |
| [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) | Enhancement | Nix 包新增 Rust 应用 + Web UI 分离构建 |
| [#6611](https://github.com/zeroclaw-labs/zeroclaw/pull/6611) | Enhancement | 新增 `zeroclaw-file-rotation` crate 及文件追踪 API |

### 重点推进的功能

**#6611 - zeroclaw-file-rotation crate**  
引入了全新的 `zeroclaw-file-rotation` 工作区成员 crate，暴露公共 API 供其他模块消费。这是项目架构演进的重要一步，将文件轮转逻辑从核心代码中解耦。

**#5987 - Nix 包分离构建**  
通过 `nix-gitignore` 改进源码过滤，Rust 和 Web 构建现在使用独立的 derivations，提升了 Nix 构建缓存效率。

**#6674 - 技能安装输出本地化**  
将 `zeroclaw skills install` 的进度字符串迁移至 Fluent 国际化系统，符合仓库本地化契约。

---

## 4. 社区热点

### 今日讨论最活跃的 Issues

**#6689 - SOP 审计静默失效**  
> "Production SOP audit is silently no-op: documented sop_run_*/sop_step_* Memory keys are never written"  
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6689  
📊 评论 0 | 👍 0

**核心诉求**：生产环境 SOP 审计功能文档声称会写入 Memory 后端，但实际代码从未执行写入操作，导致审计日志完全空白。用户发现后端根本不会将预期的 Memory keys 写入，质疑文档的准确性。

---

**#6687 - 双 SopEngine 实例问题**  
> "Two independent SopEngine instances per daemon: MQTT-started runs are invisible to agent sop_status"  
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6687  
📊 评论 0 | 👍 0

**核心诉求**：单个 ZeroClaw daemon 构造了两个独立的 `SopEngine` 实例（一个给 agent tool stack，一个给 MQTT listener），它们不共享状态。通过 MQTT 触发的 SOP 运行对 agent 的 `sop_status` 查询不可见，造成状态不一致。

---

**#6681 - skill 安装 panic**  
> "zeroclaw skills install clawhub:* panics — reqwest::blocking dropped inside #[tokio::main]"  
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6681  
📊 评论 0 | 👍 0 | 严重程度：S1 - 工作流阻塞

**核心诉求**：`zeroclaw skills install clawhub:<name>` 直接 panic 崩溃，技能无法下载安装。根因是 `reqwest::blocking::Client` 在 `#[tokio::main]` 上下文中被调用，导致 tokio 运行时冲突。

---

**#6678 - 技能工具被 Anthropic API 拒绝**  
> "Skill tools rejected by Anthropic API — format! produces names violating ^[a-zA-Z0-9_-]{1,128}$"  
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6678  
📊 评论 0 | 👍 0

**核心诉求**：当加载包含 `kind = "shell"` 或 `kind = "script"` 工具的自定义技能时，所有 agent-loop 请求均因 400 Bad Request 失败。问题出在 `format!("{}.{}", ...)` 生成的工具名包含非字母数字字符，违反了 Anthropic API 的命名规范。

---

### 今日讨论最活跃的 PRs

**#6398 - v0.8.0 Multi-Agent Runtime 和 Schema V3**  
> 包含所有 channel 标签的 XL size PR，正在进行增量审查  
🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/6398

**#6680 - WeCom AI Bot WebSocket 频道**  
> 新增 WeCom 专用 WebSocket 集成  
🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/6680

**#6671 - 发布会话通知修复**  
> 新增 `POST /api/sessions/{id}/messages` 端点，修复通知发布问题  
🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/6671

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### 🔴 S0-S1 级别（数据丢失 / 安全风险 / 工作流阻塞）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | Session keys 未按 agent 作用域隔离，任何注册了 SessionResetTool/DeleteTool 的 agent 可重置/删除其他 agent 的会话 | BLOCKED, needs-maintainer-review | 无 |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | reasoning_content 在 Xiaomi thinking mode 模型中未从前一个 LLM turn 传递到后续 turn | OPEN | 无 |
| [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) | allowed_Path 不遵守 contains 逻辑，`~/` 允许但 `~/dev` 无法访问 | CLOSED | 无 |
| [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | `clawhub:*` 安装 panic — reqwest::blocking 在 #[tokio::main] 中被 drop | OPEN | [#6682](https://github.com/zeroclaw-labs/zeroclaw/pull/6682) |

### 🟠 S2 级别（降级行为 / 工作流受阻）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) | 自定义技能工具因命名违规被 Anthropic API 拒绝（400 Bad Request） | OPEN | 无 |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | Bash 补全无限递归导致 SSH 会话崩溃 | CLOSED | 无 |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | Docker bind mount 覆盖 Dockerfile 中预建的 Web dashboard | CLOSED | 无 |
| [#6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679) | 旧 PR 可保留过期的 Green Quality Gate 结果 | CLOSED | 无 |

### 🟡 S3 级别（轻微问题）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#6654](https://github.com/zeroclaw-labs/zeroclaw/issues/6654) | Cron 只读查询仍触发可写 schema-ensure 路径 | CLOSED | 无 |
| [#6691](https://github.com/zeroclaw-labs/zeroclaw/issues/6691) | RUST_LOG 文档使用过期的 zeroclaw 目标过滤器 | OPEN | [#6692](https://github.com/zeroclaw-labs/zeroclaw/pull/6692) |

---

## 6. 功能请求与路线图信号

### 已提出并有望纳入的功能

**高优先级功能请求：**

1. **#5316 - SearXNG 搜索支持**  
   > 添加 SearXNG 作为隐私导向的搜索提供商，并增强 DuckDuckGo 的 CAPTCHA 检测  
   🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/5316  
   📊 评论 3 | 状态：needs-maintainer-review

2. **#6522 - Web 聊天工具审批 UI**  
   > 网关后端已实现 WebSocket supervised-mode 审批协议，但 Web 前端未处理 approval_request/approval_response 帧  
   🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6522  
   📊 评论 1 | 状态：accepted

3. **#5779 - Shell 工具 TOTP 分级_gate**  
   > 允许在一般 shell 访问中放行，同时仅对特定破坏性/admin 命令要求 TOTP（如 `sudo *`, `rm -rf *`）  
   🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/5779  
   📊 评论 undefined | 状态：needs-author-action, needs-maintainer-review

4. **#6253 - v0.7.6 技能 UX 追踪**  
   > 改善 `zeroclaw skills` 支持与 UX（CLI、loader、audit、安装路径、sandbox、测试工具链）  
   🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6253

### SOP 模块功能信号

今日连续报告了多个 SOP 相关缺陷，表明 SOP 功能正在进入生产验证阶段：

- **#6686** - Cron 触发器无生产调用方
- **#6685** - HTTP fan-in 已文档化但未连线
- **#6683** - skill_manage patch 忽略冷却机制（已由 [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) 修复）

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的用户痛点：

| 场景 | 用户声音 | 关联 Issue |
|---|---|---|
| **Docker 部署** | 用户发现 bind mount 覆盖了预建的 Web dashboard，导致无法通过浏览器访问 | [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) |
| **SOP 生产审计** | 用户按照文档配置 SOP 审计，但 Memory 后端从未收到预期的 sop_run_* keys，质疑文档准确性 | [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) |
| **SOP MQTT 集成** | 用户通过 MQTT 触发的 SOP 运行无法通过 `sop_status` 查询到，两个独立引擎造成状态割裂 | [#6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) |
| **文件访问控制** | 用户配置 `~/` 为允许路径，但 `~/dev` 仍无法访问，认为逻辑反直觉 | [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) |
| **CI 合并风险** | 维护者关注旧 PR 可能携带过期的绿色 CI 结果被合并，导致回归 | [#6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679) |

---

## 8. 待处理积压

提醒维护者关注的长期未响应或高优先级积压项：

### 高优先级未响应 Issues

| Issue | 优先级 | 积压时长 | 描述 |
|---|---|---|---|
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | P2, S0 | ~29 天（自 4/17） | Session 所有权模型安全缺陷，被标记 BLOCKED, needs-maintainer-review |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | P2, High Risk | ~41 天（自 4/5） | SearXNG 搜索支持提案，需 maintainer review |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | P2, High Risk | ~22 天（自 4/24） | 153 commits 批量回滚审计追踪，in-progress 但无明显进展 |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/issues/5779) | High Risk | ~31 天（自 4/15） | TOTP 分级 shell 访问，需 author + maintainer review |

### 大量标签的 XL PR 审查积压

**#6398 - v0.8.0 Multi-Agent Runtime 和 Schema V3**  
- 涉及 channel: 所有支持的 channel（cli, telegram, slack, discord, matrix 等）
- 涉及 provider: 所有支持的 provider（openai, anthropic, gemini, openrouter 等）
- 涉及 component: 所有核心模块
- **建议**：维护者应尽快分配时间进行增量审查，该 PR 预计产生重大破坏性变更

---

**报告生成时间**：2026-05-16  
**数据截止**：2026-05-16 23:59:59 (UTC)  
**分析师**：AI 项目动态分析助手

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-05-16

---

## 1. 今日速览

2026-05-16 项目保持高度活跃态势。过去 24 小时内共产生 **40 条内容更新**（11 Issues + 29 PRs），合并 **16 个 PR**，另有 **13 个 PR 待合并**。社区参与度高，评论集中在 Matrix 频道稳定性、exec 工具沙箱逻辑、多模型 reasoning 支持等方向。新版本 `v0.2.8-nightly.20260516.0df050ff` 已发布（Nightly Build），文档同步至 V3 配置格式的 PR 已合并，整体进度推进明显。Issue 积压问题略有缓解（2 个 Issue 已关闭），但仍有大量 stale 标记的议题等待维护者处理。

---

## 2. 版本发布

### 🔄 Nightly Build 发布

| 字段 | 内容 |
|------|------|
| **版本号** | `v0.2.8-nightly.20260516.0df050ff` |
| **类型** | Nightly Build（非正式 Release） |
| **说明** | 自动构建，可能不稳定，请谨慎使用 |
| **变更范围** | 自 `v0.2.8` 以来的所有提交，详见 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

> 💡 提示：Nightly Build 通常用于测试最新功能或接受早期反馈，生产环境建议使用正式 Release 版本。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR（16 条）

| # | PR 标题 | 贡献者 | 类型 | 说明 |
|---|---------|--------|------|------|
| **#2766** | docs: sync all documentation to V3 config format | SiYue-ZO | 文档 | 更新 26 个文件，统一配置格式（`api_key` → `api_keys`，`channels` → `channel_list`，版本 2 → 3） |
| **#2626** | feat(agent): support native audio input for multimodal LLMs | webhtb | 功能 | 为 Gemini 等多模态模型添加音频输入支持，新增 `Audio` 字段至 `protocoltypes.Message` |
| **#2811** | fix(mcp): support streamable HTTP alias, request-response mode | afjcjsbx | 修复 | MCP 传输配置增强 + 通用 Docker 集成测试框架 |
| **#2741** | fix(openai_compat): parse reasoning_content in streaming responses | lc6464 | 修复 | 修复 OpenAI 兼容流式响应中 reasoning 字段解析问题 |
| **#2862** | fix(openai_compat): align MiMo reasoning replay with DeepSeek | lc6464 | 修复 | 修复小米 MiMo 多轮 thinking-mode 问题，与 DeepSeek reasoning 规则对齐 |
| **#2874** | fix(pico): preserve image media across pico attachments | lxowalle | 修复 | 修复 Pico 频道图片附件在传输中丢失的问题 |
| **#2270** | fix(config): handle non-addressable SecureString values | loafoe | 修复 | 修复 `collectSensitive` 遍历 map 时的 panic 问题（Go reflection 问题） |
| **#2766** | docs: sync all documentation to V3 config format | SiYue-ZO | 文档 | 文档全面对齐 V3 配置格式 |

### 🔄 待合并的重要 PR（13 条）

| # | PR 标题 | 贡献者 | 类型 | 说明 |
|---|---------|--------|------|------|
| **#2879** | fix(config): make load_image configurable | afjcjsbx | 修复 | 修复 `load_image` 工具无法在配置文件中启用的 bug（与 Issue #2878 对应） |
| **#2877** | feat(security): add optional tirith pre-exec scanning | sheeki03 | 功能 | 引入 Tirith 本地终端安全扫描器，在 shell 执行前进行内容级威胁检测 |
| **#2836** | fix(powershell): windows security enhancement | sky5454 | 修复 | PowerShell 编码绕过安全增强，修复 iex 注入问题 |
| **#2814** | fix(tools): allow relative script paths in exec guard | bogdanovich | 修复 | 修复 exec 沙箱误判相对路径为绝对路径的问题（如 `scripts/send_voice_reply_telegram.sh`） |
| **#2827** | fix: skip canonical ID parsing for @-prefixed allow_from entries | Ashid332 | 修复 | 修复 Matrix 频道 `allow_from` 过滤器因 MXID 格式（`@user:matrix.org` 含冒号）导致的误判 |
| **#2833** | feat(web,api): test connection with real connectivity verification | SiYue-ZO | 功能 | API 连接测试增加真实连通性验证 |
| **#2662** | docs: Unify vendors table in providers documentation | milseg | 文档 | 简化 Provider 文档中的 vendors 表格，消除冗余信息 |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| # | 标题 | 评论数 | 点赞 | 状态 | 热度分析 |
|---|------|--------|------|------|----------|
| **#28** | [Feat Request] LM Studio Easy Connect | 19 | 2 | 🟡 OPEN | 长期未解决的功能请求，用户希望简化连接 LM Studio 的流程，触及本地模型集成痛点 |
| **#1042** | [BUG] exec工具的guardCommand方法问题 | 11 | 2 | 🟡 OPEN | exec 沙箱正则误判 URL 参数为路径，导致合法命令被拦截（如 `wttr.in/Beijing?T` 被误判为 `../../../../Beijing?T`），已有对应 PR #2814 |
| **#2706** | Deepseek v4 thinking model问题 | 4 | 1 | ✅ CLOSED | 已通过 PR #2741 和 #2862 解决 reasoning_content 传递问题，MiMo 模型同步修复 |
| **#2785** | ToolFeedbackAnimator: feishu 通知中心只显示第一条工具消息 | 2 | 0 | 🟡 OPEN | Feishu 频道消息聚合逻辑问题，separate_messages=false 时后续消息丢失 |

> 📌 **热点洞察**：社区对 **模型 reasoning 支持**（DeepSeek/MiMo）和 **exec 安全沙箱** 关注度最高，这两类问题已通过多个 PR 集中修复。LM Studio 请求虽讨论热烈但尚未有实现计划。

---

## 5. Bug 与稳定性

### 🚨 今日报告的 Bug（按严重程度）

| 严重度 | # | 问题描述 | 状态 | 是否有 Fix PR |
|--------|---|----------|------|---------------|
| ⚠️ **中** | **#1042** | exec 工具 `guardCommand` 方法误判 URL 参数为相对路径，导致天气查询等合法命令被安全沙箱拦截 | 🟡 OPEN | ✅ 有 PR #2814 |
| ⚠️ **中** | **#2878** | `load_image` 工具无法在 config.json 中配置，配置项被忽略 | 🟡 OPEN | ✅ 有 PR #2879（今日提交） |
| ⚠️ **中** | **#2815** | Matrix 频道 `allow_from` 过滤器无效，非空值会阻止所有消息 | 🟡 OPEN | ✅ 有 PR #2827 |
| ⚠️ **中** | **#2816** | Matrix 消息接收时 sender identity 未注入 agent context，Telegram 有 `chat_id` 但 Matrix 缺失 | 🟡 OPEN | ❌ 无 Fix PR |
| 🔴 **高** | **#2817** | Voice 语音转写成功后转写文本未传递给 LLM，模型收到 `[voice]` 而非实际内容 | 🟡 OPEN | ❌ 无 Fix PR |
| 🔴 **高** | **#2744** | Android v0.2.8 无法从 Tabs 访问任何数据，稳定性问题 | 🟡 OPEN | ❌ 无 Fix PR |
| 🟢 **低** | **#2859** | Xiaomi MiMo 多轮对话在 2-3 轮后触发 400 错误 | ✅ CLOSED | ✅ 已通过 PR #2862 修复 |

> 📌 **稳定性评估**：Matrix 频道存在多个关联 bug（#2815、#2816），建议优先处理。Voice 转写问题（#2817）和 Android 稳定性问题（#2744）尚未有修复计划，需要维护者关注。

---

## 6. 功能请求与路线图信号

### ✨ 重要功能请求

| # | 请求 | 需求分析 | 实现可能性 |
|---|------|----------|-----------|
| **#28** | LM Studio Easy Connect | 用户缺乏技术背景，希望一键连接本地 LM Studio，大幅降低使用门槛 | ⭐⭐（难度较高，需新贡献者） |
| **#2820** | Non-destructive fresh-session reset | 不删除 Seahorse 历史的前提下重置会话，保留上下文管理能力 | ⭐⭐⭐（已有 PR 思路，需 review） |
| **#2877** | Tirith pre-exec scanning | 可选的命令预扫描安全增强，引入外部安全库 | ⭐⭐⭐⭐（已提交 PR，等待 review） |
| **#2626** | Native audio input for multimodal LLMs | 已合并，支持 Gemini 等模型音频输入 | ✅ 已实现 |

> 📌 **路线图信号**：安全增强（exec 沙箱、Tirith 扫描）和多模态支持（音频输入）是当前开发重点。LM Studio 集成请求反映了用户对本地模型部署的兴趣，可作为未来版本的方向参考。

---

## 7. 用户反馈摘要

### 📝 从 Issues 评论中提炼的真实痛点

| 场景 | 用户反馈 | 来源 |
|------|----------|------|
| **本地模型集成** | "i'm posting this requesting someone who has better skills than my self to make an easy way to connect too LM Studio" | #28 @Franzferdinan51 |
| **Android 稳定性** | "Android v0.2.8, cannot access any data from tabs" — Tabs 页面完全不可用 | #2744 @stl3 |
| **多模态推理** | "DeepSeek 的 thinking mode 会返回 reasoning_content 后续请求必须把之前的 reasoning_content 回传给 API" — reasoning 内容未保存导致 400 错误 | #2706 @wowowowowowowowonojieba |
| **Matrix 配置困惑** | `allow_from` 过滤器文档与实际行为不符，非空值导致所有消息被阻止 | #2815 @adinapoli |
| **语音转写失败** | Groq Whisper 转写成功但文本未传递给 LLM，用户无法使用语音交互 | #2817 @aliksend |

> 💬 **用户画像**：当前用户群体以技术开发者为主（使用 Android Termux、Matrix 等），对多模态能力和跨平台支持有强烈需求，同时希望降低配置复杂度。

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要议题（建议维护者关注）

| # | 标题 | 创建时间 | 最后更新 | 状态 | 积压原因 |
|---|------|----------|----------|------|----------|
| **#28** | LM Studio Easy Connect | 2026-02-11 | 2026-05-15 | 🟡 OPEN | 需技术实现，讨论 19 条但无 PR |
| **#1042** | exec 工具 guardCommand 问题 | 2026-03-04 | 2026-05-15 | 🟡 OPEN | 有 PR #2814，待 review/合并 |
| **#2239** | modify docker compose with privileged | 2026-04-01 | 2026-05-15 | 🟡 OPEN | 提交者未跟进，PR 无评论 |
| **#2706** | DeepSeek v4 thinking model | 2026-04-29 | 2026-05-15 | ✅ CLOSED | 已解决 ✅ |
| **#2817** | Voice transcription | 2026-05-07 | 2026-05-15 | 🟡 OPEN | 无 Fix PR，需分配 |
| **#2816** | Matrix sender identity | 2026-05-07 | 2026-05-15 | 🟡 OPEN | 无 Fix PR，与 #2815 关联 |

> 📌 **积压清理建议**：
> - **#28** 建议关闭并引导用户关注相关替代方案或标记为 `help wanted`
> - **#2816**、**#2817**、**#2744** 建议优先分配人手处理
> - 多个 Matrix 相关 bug（#2815、#2816）可能存在关联，建议统一排查

---

## 📊 关键指标速览

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 11 条/24h | 📈 高于上周均值 |
| PR 活跃度 | 29 条/24h | 📈 高于上周均值 |
| PR 合并率 | 16/29 (55%) | ✅ 健康 |
| 严重 Bug（无 Fix） | 3 个 | ⚠️ 需关注 |
| stale 标记议题 | 13+ 个 | ⚠️ 积压中 |

---

> **日报说明**：本报告基于 GitHub 数据自动生成，数据采集时间 2026-05-16。如需进一步分析特定议题或 PR，请回复对应编号。

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# hermes-agent 项目日报 | 2026-05-16

---

## 1. 今日速览

**整体评估：高度活跃，修复驱动为主**

过去 24 小时，hermes-agent 项目保持极高的社区活跃度，共产生 **324 条 Issues 更新**（新开/活跃 181 条）和 **500 条 PR 更新**（待合并 369 条）。今日未发布新版本，项目重心集中在 Bug 修复和平台功能完善上。值得关注的是，多个 P1/P2 高优先级问题已被修复或正在处理，包括 DeepSeek API 兼容性、Matrix Docker 镜像问题、以及网关重连机制缺陷。今日整体趋势显示项目处于稳定迭代阶段，社区贡献覆盖面广，涵盖 TUI、Gateway、Agent 核心、工具系统及第三方平台集成等多个维度。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下是今日合并/关闭的重要 PR，标志着项目在多个方向取得实质进展：

### 核心功能增强

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#26706](https://github.com/NousResearch/hermes-agent/pull/26706) | feat | **持久化 per-session /model 选择**：用户在不同线程/会话中指定的模型偏好现存储于 SQLite（state.db），网关重启后可自动恢复，解决多模型路由场景下的配置丢失问题 | OPEN |
| [#26538](https://github.com/NousResearch/hermes-agent/pull/26538) | refactor | **MultiStepLoop 内核**：引入类型安全、故障封闭的运行时内核，集成 ACGS-Lite 宪法治理后端，所有受治理操作保证经过 typed → transition-validated → governance 链路 | OPEN |
| [#26694](https://github.com/NousResearch/hermes-agent/pull/26694) | feat | **pre_llm_call 钩子返回工具白名单**：实现 RFC #26524，允许插件在每个回合动态过滤可用工具集合 | OPEN |

### 平台与集成

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | feat | **Hermes 桌面应用**：基于 Electron/Vite 构建，支持聊天、编辑器、文件浏览器、语音控制等完整功能 | OPEN |
| [#26698](https://github.com/NousResearch/hermes-agent/pull/26698) | feat | **Grok Build CLI Provider**：新增 `grok-build` 一级 provider，封装本地 Grok CLI 为 OpenAI 兼容接口 | OPEN |
| [#25336](https://github.com/NousResearch/hermes-agent/pull/25336) | feat | **小米 MiMo TTS Provider**：集成小米 MiMo V2.5 TTS 服务，支持预设音色、声线设计和语音克隆采样编码 | OPEN |
| [#26701](https://github.com/NousResearch/hermes-agent/pull/26701) | fix | **QQ 平台 markdown_support 配置**：修复 `send_message` 工具硬编码纯文本格式问题，尊重平台配置 | OPEN |
| [#26703](https://github.com/NousResearch/hermes-agent/pull/26703) | fix | **profile export 跳过 SQLite sidecars**：导出配置时排除 .wal/.shm/.journal 文件，避免泄露临时数据 | OPEN |

### 稳定性与工具

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#26704](https://github.com/NousResearch/hermes-agent/pull/26704) | fix | **hermes doctor 静默失效直连密钥**：当 OAuth 路径健康时，不再将无效直连 API 密钥提升到最终报告，避免误导用户 | OPEN |
| [#26702](https://github.com/NousResearch/hermes-agent/pull/26702) | docs | **移除 pip 安装文档**：官方已弃用 pip 安装方式，清理文档以引导用户使用正确安装途径 | **CLOSED** |
| [#26700](https://github.com/NousResearch/hermes-agent/pull/26700) | feat | **Cron 路由器优先审查循环**：新增审查策略模块，读取 OpenClaw 路由决策并生成 ACK/ESCALATION_NOTICE 类型审查提示 | OPEN |
| [#26640](https://github.com/NousResearch/hermes-agent/pull/26640) | fix | **Gateway PATH 探测权限错误处理**：将 stat 错误视为目录缺失而非崩溃，避免 generate_systemd_unit/generate_launchd_plist 中断 | OPEN |
| [#23280](https://github.com/NousResearch/hermes-agent/pull/23280) | feat | **MemSearch MemoryProvider**：基于 Milvus 向量存储的语义长期记忆插件，支持混合搜索（dense + BM25 RRF）和渐进式披露 | OPEN |

---

## 4. 社区热点

以下 Issues 和 PRs 在今日引发最多讨论（按评论数排序）：

### 热门 Issues

**1. [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) — [CLOSED] Response truncated due to output length limit**  
   🔥 评论 29 | 👍 4 | 优先级: Bug  
   **核心诉求**：用户在使用 CLI Chat 或 Gateway 消息（Telegram/Discord/Slack）时，生成较长回复频繁被截断，报错 `Error: Response truncated due to output length limit`，严重影响使用体验。该 Issue 已关闭，可能已在代码库中修复。  

**2. [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) — [OPEN] Dashboard 主题改进需求**  
   🔥 评论 11 | 👍 17 | 优先级: P3  
   **核心诉求**：当前主题（Midnight、Ember、Mono、Cyberpunk、Rose）仅更换配色，字体选择不标准（小号细体衬线字 + 低对比度），可读性差。用户强烈希望改进视觉设计。  

**3. [Issue #11692](https://github.com/NousResearch/hermes-agent/issues/11692) — [OPEN] Self-improving agents 的溯源票据系统**  
   🔥 评论 10 | 👍 0 | 优先级: P3  
   **核心诉求**：提出者在讨论中详细阐述了 Hermes 的"自我修改属性"及其带来的治理挑战——如何证明某个技能版本产生了特定输出？这是一个关于代理可审计性和合规性的深度技术讨论。  

**4. [Issue #1955](https://github.com/NousResearch/hermes-agent/issues/1955) — [OPEN] Per-channel 模型和系统提示覆盖**  
   🔥 评论 8 | 👍 4 | 优先级: P3  
   **核心诉求**：在 Discord 服务器或 Telegram 群组中，不同频道需要使用不同模型（如 #daily 用廉价模型，#dev 用高能力模型）。用户希望实现通道级别的模型路由和系统提示覆盖。  

**5. [Issue #5143](https://github.com/NousResearch/hermes-agent/issues/5143) — [OPEN] Gateway Hooks 多角色自动路由**  
   🔥 评论 3 | 👍 11 | 优先级: P3  
   **核心诉求**：用户将 AI 代理视为跨领域统一助手（健康追踪、软件开发、财务规划、语言学习等），希望能根据用户意图自动路由到不同角色/专业模式，而非单一会话处理所有场景。  

### 热门 PRs

**1. [PR #20059](https://github.com/NousResearch/hermes-agent/pull/20059) — Hermes 桌面应用**  
   用户反馈热烈，期待 Electron/Vite 构建的独立桌面客户端，可摆脱终端依赖，获得更友好的 GUI 体验。  

**2. [PR #26694](https://github.com/NousResearch/hermes-agent/pull/26694) — pre_llm_call 工具白名单机制**  
   这是插件系统的重要扩展，允许在运行时动态控制 LLM 可调用工具集合，引发开发者对安全性和灵活性平衡的讨论。  

---

## 5. Bug 与稳定性

以下 Bug 按严重程度（P1 > P2 > P3）排列：

### P1 — 关键问题（已关闭或已有 Fix）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Response truncated 错误（CLI/Gateway 长回复截断） | **CLOSED** | 需确认 |
| [#5884](https://github.com/NousResearch/hermes-agent/issues/5884) | prompt_toolkit 崩溃 OSError: [Errno 22] | **CLOSED** | 需确认 |
| [#25495](https://github.com/NousResearch/hermes-agent/issues/25495) | Matrix/Synapse Docker 镜像启动卡住 | **OPEN** | 无 | 
| [#8038](https://github.com/NousResearch/hermes-agent/issues/8038) | _flush_messages_to_session_db 静默吞掉所有持久化错误 | **OPEN** | 无 |
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | 内存持久化问题、会话重放 token 浪费、state.db 损坏 | **OPEN** | 无 |
| [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) | Gateway 重连监视器在 20 次失败后永久停止可重试平台 | **CLOSED** | 需确认 |
| [#12922](https://github.com/NousResearch/hermes-agent/issues/12922) | post_tool_call 钩子对内置工具不触发 | **CLOSED** | 需确认 |

### P2 — 高优先级问题

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#25594](https://github.com/NousResearch/hermes-agent/issues/25594) | 自定义 provider 缺失视觉模型检测，HTTP 400 | **OPEN** | 无 |
| [#26042](https://github.com/NousResearch/hermes-agent/issues/26042) | Cron 会话中 MCP 服务器不可用（ECONNREFUSED） | **OPEN** | 无 |
| [#24537](https://github.com/NousResearch/hermes-agent/issues/24537) | Hermes UI 文件操作不一致且不可预测 | **OPEN** | 无 |
| [#14980](https://github.com/NousResearch/hermes-agent/issues/14980) | WhatsApp 桥接 npm install 超时（60s）在容器启动时过短 | **OPEN** | 无 |
| [#17212](https://github.com/NousResearch/hermes-agent/issues/17212) | DeepSeek 直接 API 多轮工具调用 400 错误 | **CLOSED** | 需确认 |
| [#15700](https://github.com/NousResearch/hermes-agent/issues/15700) | DeepSeek API 缺少 'thinking: disabled' 参数 | **CLOSED** | 需确认 |
| [#26174](https://github.com/NousResearch/hermes-agent/issues/26174) | Hermes 返回的 markdown 在飞书无法渲染 | **CLOSED** | 需确认 |
| [#26695](https://github.com/NousResearch/hermes-agent/pull/26695) | Legacy /v1/runs 端点保留多模态内容 | **OPEN** | PR 已开 |

### P3 — 中等优先级问题

| Issue | 描述 | 状态 |
|-------|------|------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Dashboard 主题可读性差 | OPEN |
| [#22930](https://github.com/NousResearch/hermes-agent/issues/22930) | 小参数模型离线运行资源不足问题 | OPEN |
| [#2747](https://github.com/NousResearch/hermes-agent/issues/2747) | 静默吞掉本地模型自动检测异常 | CLOSED |
| [#4064](https://github.com/NousResearch/hermes-agent/issues/4064) | TUI 鼠标支持需求 | OPEN |
| [#416](https://github.com/NousResearch/hermes-agent/issues/416) | 技能验证和 Linting 自动化质量检查 | OPEN |

---

## 6. 功能请求与路线图信号

从今日讨论中提炼出以下功能趋势，可能影响项目后续路线：

### 高呼声功能（👍 > 5）

| 请求 | Issue | 优先级 | 评估 |
|------|-------|--------|------|
| Dashboard 主题系统改进 | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | P3 | 用户基础广泛，UI 改进适合纳入 |
| 多角色自动路由（Gateway Hooks） | [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) | P3 | 👍11，需求明确，已有 PR 雏形 |
| 技能溯源票据系统 | [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | P3 | 深度技术讨论，与 Self-improving 功能对齐 |
| Per-channel 模型覆盖 | [#1955](https://github.com/NousResearch/hermes-agent/issues/1955) | P3 | 👍4，实现价值高，已有类似 PR |

### 新兴功能方向

1. **Desktop App 桌面化**：PR #20059 正在推进，Electron/Vite 桌面客户端获得社区高度期待
2. **多模态内容保留**：[PR #26695](https://github.com/NousResearch/hermes-agent/pull/26695) 修复 Legacy API 多模态处理，统一 `/v1/runs` 与其他端点行为
3. **Cron 审查循环**：[PR #26700](https://github.com/NousResearch/hermes-agent/pull/26700) 引入路由器优先的审查策略，扩展代理治理能力
4. **技能质量保障**：[Issue #416](https://github.com/NousResearch/hermes-agent/issues/416) 提出技能创建/编辑时的自动化质量检查（Linting）

---

## 7. 用户反馈摘要

### 核心痛点

1. **长回复截断问题**（Issue #7237，29 评论）  
   用户频繁遭遇 `Response truncated` 错误，尤其在 Telegram/Discord/Slack 等 Gateway 平台和 CLI 场景下，严重影响使用体验。这是今日讨论最热烈的问题，说明输出长度限制是高频痛点。

2. **Docker 部署稳定性**  
   - Matrix/Synapse Docker 镜像启动卡住（#25495）  
   - WhatsApp 桥接 npm install 超时（#14980）  
   用户反映容器化部署存在多处不稳定因素，配置和超时设置不够灵活。

3. **MCP 工具在 Cron 中不可用**（#26042）  
   定时任务使用 MCP 工具时遭遇连接拒绝，说明 Cron 与 Gateway 的 MCP 服务器生命周期管理存在隔离。

4. **Session 持久化可靠性**（#5563, #8038）  
   多位用户报告 state.db 损坏、会话重放 token 浪费、数据丢失等问题，尤其在强制退出后。这是影响生产环境稳定性的关键问题。

### 正面反馈

- Issue #5563 作者明确称赞："Hermes is an extraordinary piece of work. The skill system, persistent memory, session search, delegate_task subagents, the gateway architecture — it's the most capable CLI AI agent I've used."
- 用户对技能自创建循环（Self-improving agents）功能表示高度兴趣，尽管提出溯源和治理挑战，但整体认可其价值。

### 平台集成需求

1. **飞书（Feishu/Lark）**：markdown 渲染问题（#26174）、CardKit 流式卡片（#16084）、交互式卡片（#9978）
2. **QQ**：markdown_support 配置尊重（#26701 已修复）
3. **小米**：MiMo TTS 集成（#25336 PR 进行中）
4. **Grok**：本地 CLI provider（#26698 PR 进行中）

---

## 8. 待处理积压

以下 Issues 长期未得到响应或修复，需要维护者关注：

### 长期开放高优先级 Issues

| Issue | 创建时间 | 优先级 | 状态 | 提醒 |
|-------|----------|--------|------|------|
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | 2026-04-06 | P1 | OPEN | 内存持久化、Session 重放 token 浪费、state.db 损坏 — 生产级问题 |
| [#8038](https://github.com/NousResearch

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-05-16

---

## 1. 今日速览

2026-05-16 是 NanoClaw 项目**高度活跃**的一天。项目在 24 小时内处理了 **50 条 Issues**（新开/活跃 5 条）和 **50 条 PRs**（待合并 6 条），并正式发布了 **v2.0.63** —— 这是项目首个规范化的正式 Release，标志着版本管理进入正轨。社区讨论热度集中在多运行时支持、容器稳定性修复和技能系统增强三大方向，整体呈现 **功能快速迭代 + 大量积压 Issue 批量关闭** 的健康状态。

---

## 2. 版本发布

### ✅ v2.0.63 已发布

> **首个规范化正式 Release**

| 项目 | 详情 |
|------|------|
| **版本号** | `v2.0.63` |
| **发布时间** | 2026-05-16 |
| **发布说明** | 自 v2.0.54 以来的所有变更已汇总至 CHANGELOG.md，新增 `RELEASING.md` 文档明确后续发布政策 |

**核心变化：**
- 从 v2.0.63 起，**每一次 `package.json` 版本 bump 合并到 `main` 分支都将生成一个 GitHub Release**，由维护者手动 Cut
- 此前仅打 Tag，Release 偶发缺失 —— 现在规范化为稳定可追溯的发布流程

**关联 PR：**
- [#2502](https://github.com/nanocoai/nanoclaw/pull/2502) — docs: add v2.0.63 CHANGELOG entry and RELEASING.md（已合并）

---

## 3. 项目进展

今日合并/关闭的 **44 条 PRs** 中，以下几类推进了关键能力：

### 🔧 基础设施修复

| PR | 类型 | 描述 | 状态 |
|----|------|------|------|
| [#2496](https://github.com/nanocoai/nanoclaw/pull/2496) | **Bug Fix** | `writeOutboundDirect()` 以只读模式打开 DB 导致 SQLITE_READONLY，命令门控拒绝响应无法送达用户 | 🔴 待合并 |
| [#2494](https://github.com/nanocoai/nanoclaw/pull/2494) | Bug Fix | 修复 `setup/service.ts` 在 `su -` / `pct enter` / headless 容器场景下误判"无 systemd"的问题 | 🟡 待合并 |
| [#954](https://github.com/nanocoai/nanoclaw/pull/954) | Fix | 修复 OpenRouter 非 Anthropic 模型路由的 SDK 代理兼容性问题 | ✅ 已关闭 |
| [#967](https://github.com/nanocoai/nanoclaw/pull/967) | Fix | 改善会话恢复卡顿和 Runner 卡死场景的可靠性 | ✅ 已关闭 |
| [#2493](https://github.com/nanocoai/nanoclaw/pull/2493) | Fix | v2 迁移：服务名从 `com.nanoclaw` 改为按安装实例独立生成 | ✅ 已合并 |

### ✨ 新功能 / Skill

| PR | 类型 | 描述 | 状态 |
|----|------|------|------|
| [#2500](https://github.com/nanocoai/nanoclaw/pull/2500) | Feature Skill | 新增 `/add-early-compact-nudge` —— 当有效上下文超过自动压缩上限的可配置比例时，向活跃 SDK 查询注入 `<system-reminder>` | 🟡 待合并 |
| [#2490](https://github.com/nanocoai/nanoclaw/pull/2490) | Operational Skill | 新增 LiteLLM Provider 支持 | 🟡 待合并 |
| [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) | Feature Skill | Agent Network 功能 | 🟡 待合并 |
| [#2498](https://github.com/nanocoai/nanoclaw/pull/2498) | Feature | `health-monitor` 模块：5 分钟定时器检测静默任务失败并发送 Discord 告警；预热阶段从 macOS Keychain 刷新 OAuth Token | 🟡 待合并 |
| [#514](https://github.com/nanocoai/nanoclaw/pull/514) | Skill | 新增 `/add-image-recognition` Skill，支持 WhatsApp 图片识别 | ✅ 已关闭 |
| [#519](https://github.com/nanocoai/nanoclaw/pull/519) | Skill | 新增 `/compact` Skill，支持 Claude Agent SDK 压缩 API | ✅ 已关闭 |

### 🏗️ 重构

| PR | 类型 | 描述 |
|----|------|------|
| [#523](https://github.com/nanocoai/nanoclaw/pull/523) | Refactor | 将 `output-parser.ts` 从 `container-runner.ts` 提取为独立模块（~50 行） |
| [#524](https://github.com/nanocoai/nanoclaw/pull/524) | Refactor | 将 `snapshot-writer.ts` 从 `container-runner.ts` 提取为独立模块 |
| [#525](https://github.com/nanocoai/nanoclaw/pull/525) | Refactor | 将 `db.ts`（670 行）拆分为 `src/db/` 下的领域模块（chats/messages/tasks/sessions/groups/router-state） |

---

## 4. 社区热点

### 🔥 Issue #80 — 多运行时/Provider 支持请求
> 60 👍 | 32 评论 | **[Issue #80](https://github.com/nanocoai/nanocaw/issues/80)**（已关闭）

**核心诉求：** Anthropic 已开始封禁使用 OpenClaw 等第三方工具的账户，项目应提前支持 OpenCode、Codex、Gemini 等替代运行时

**社区热度最高**，反映了用户对 Anthropic 单点依赖风险的强烈担忧，以及对 NanoClaw 开放架构的期待。

---

### 💬 Issue #384 — Skill Marketplace/Registry 需求
> 16 👍 | 9 评论 | **[Issue #384](https://github.com/nanocoai/nanoclaw/issues/384)**（已关闭）

**核心诉求：** 建立官方 Skill 市场/注册中心

NanoClaw 的核心安全优势在于**按需扩展攻击面**（相比 OpenClaw 全部用户共享相同功能集），用户希望在安全可控的前提下更方便地发现和安装社区 Skill。

---

### 💬 Issue #957 — Podman 作为 Docker 替代方案
> 6 👍 | 8 评论 | **[Issue #957](https://github.com/nanocoai/nanoclaw/issues/957)**（已关闭）

**核心诉求：** 文档明确支持 Podman（尤其 macOS 和 Linux 用户）

社区认为 Podman 的 rootless 架构更安全，且避免了对 Docker daemon 的依赖。

---

## 5. Bug 与稳定性

按严重程度排序今日关闭的 Bug Issue：

| 严重性 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 🔴 **Critical** | [#595](https://github.com/nanocoai/nanoclaw/issues/595) | **OOM 崩溃（~40h）** — ghost sockets 在重连时累积，最终导致 JS 堆内存耗尽 | ❌ 已关闭（未注明 fix PR） |
| 🔴 **High** | [#730](https://github.com/nanocoai/nanoclaw/issues/730) | **OAuth Token 夜间过期** — `CLAUDE_CODE_OAUTH_TOKEN` 有效期仅数小时，后台服务无法自动刷新 | ❌ 已关闭 |
| 🔴 **High** | [#635](https://github.com/nanocoai/nanoclaw/issues/635) | **安全：WhatsApp 认证文件权限 644（应为 600）** — 多用户系统上泄露会话凭证 | ❌ 已关闭 |
| 🔴 **High** | [#233](https://github.com/nanocoai/nanoclaw/issues/233) | **IPC 消息在查询结果后被静默丢弃** — `for await` 循环退出前到达的消息无法送达容器 | ❌ 已关闭 |
| 🔴 **High** | [#356](https://github.com/nanocoai/nanoclaw/issues/356) | **ExitPlanMode 工具失效** — 返回错误信息而非真正退出计划模式 | ❌ 已关闭 |
| 🟠 **Medium** | [#413](https://github.com/nanocoai/nanoclaw/issues/413) | Linux systemd user session 回退逻辑跳过可修复场景，直接降级到 nohup | ❌ 已关闭 |
| 🟠 **Medium** | [#414](https://github.com/nanocoai/nanoclaw/issues/414) | Docker 组检测到 stale 但未修复，服务启动后失败 | ❌ 已关闭 |
| 🟠 **Medium** | [#553](https://github.com/nanocoai/nanoclaw/issues/553) | WhatsApp 连接恢复后容器执行失败 | ❌ 已关闭 |
| 🟠 **Medium** | [#611](https://github.com/nanocoai/nanoclaw/issues/611) | Agent-runner 源码目录在首次创建后永不更新 | ❌ 已关闭 |
| 🟠 **Medium** | [#341](https://github.com/nanocoai/nanoclaw/issues/341) | `add-discord` Skill 包含过时的 Apple Container 代码，破坏 Docker 用户体验 | ❌ 已关闭 |

> ⚠️ **注意：** 所有标记为 "Closed" 的 Bug Issue 未明确标注对应 fix PR，需后续确认是否真正解决。尤其是 Critical 级别的 #595（OOM）和 #730（Token 过期），建议维护者复查。

---

## 6. 功能请求与路线图信号

以下功能请求获得较多社区支持，可能进入下一版本迭代：

| 功能 | Issue | 优先级信号 | 相关进展 |
|------|-------|-----------|----------|
| **多运行时/Provider 支持** | [#80](https://github.com/nanocoai/nanoclaw/issues/80) | 高（60 👍，32 评论） | 大量讨论，暂无对应 PR |
| **Skill Marketplace** | [#384](https://github.com/nanocoai/nanoclaw/issues/384) | 中高（16 👍，9 评论） | 架构方向已明确 |
| **Podman 文档支持** | [#957](https://github.com/nanocoai/nanoclaw/issues/957) | 中（6 👍，8 评论） | Issue 已关闭，待文档 PR |
| **WebFetch/WebSearch 工具衰减** | [#398](https://github.com/nanocoai/nanoclaw/issues/398) | 中 | Issue 已关闭，待实现 |
| **消息引用/回复支持** | [#618](https://github.com/nanocoai/nanoclaw/issues/618) | 中 | Issue 已关闭，待实现 |
| **消息转向（Message Steering）** | [#617](https://github.com/nanocoai/nanoclaw/issues/617) | 中 | Issue 已关闭，待实现 |
| **LiteLLM Provider** | [#2490](https://github.com/nanocoai/nanoclaw/pull/2490) | 中 | 🟡 **PR 已 Open** |
| **Groq Whisper 云端回退** | [#2396](https://github.com/nanocoai/nanoclaw/issues/2396) | 低 | 🟡 **Issue Open** |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

| 场景 | 反馈来源 | 核心问题 |
|------|---------|---------|
| **安装体验** | [#439](https://github.com/nanocoai/nanoclaw/issues/439) | 当前安装依赖 Claude 本身过于复杂，用户呼吁提供简单的 Shell 脚本 + 少量问答式安装 |
| **安全焦虑** | [#80](https://github.com/nanocoai/nanoclaw/issues/80) | Anthropic 对第三方工具用户的封号行为让用户担忧单点依赖风险，强烈希望支持替代 LLM Provider |
| **长会话稳定性** | [#595](https://github.com/nanocoai/nanoclaw/issues/595) | 运行 ~40 小时后 OOM 崩溃，被 `launchd` 静默重启，难以察觉 |
| **OAuth Token 管理** | [#730](https://github.com/nanocoai/nanoclaw/issues/730) | 长时间后台运行场景下 Token 无法自动刷新，用户体验断崖 |
| **多 Agent 困惑** | [#664](https://github.com/nanocoai/nanoclaw/issues/664) | 用户不清楚 NanoClaw 与原生 Claude Code 在 Agent 能力（Agents.md、SOUL.md 等）上的区别 |
| **Skill 系统理解成本** | [#340](https://github.com/nanocoai/nanoclaw/issues/340) | 开发者对 Skills Engine 采用 3-way merge 修改源码而非运行时插件机制的设计存在疑问 |

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或需维护者特别关注：

### 🔴 长期未解决 Bug（建议优先处理）

| Issue | 创建时间 | 描述 | 现状 |
|-------|---------|------|------|
| [#595](https://github.com/nanocoai/nanoclaw/issues/595) | 2026-02-28 | OOM ~40h — ghost socket 累积 | ❌ 已关闭（未注明 fix） |
| [#730](https://github.com/nanocoai/nanoclaw/issues/730) | 2026-03-05 | OAuth Token 夜间过期 | ❌ 已关闭（未注明 fix） |
| [#635](https://github.com/nanocoai/nanoclaw/issues/635) | 2026-03-02 | WhatsApp 认证文件权限安全漏洞 | ❌ 已关闭（未注明 fix） |

> ⚠️ 以上三个高危/关键 Bug 均已关闭但**未提供 fix PR 链接**，需确认是否真正修复，避免安全风险遗漏。

### 🟡 高价值 Open Issues（超过 14 天未回应）

| Issue | 创建时间 | 描述 | 👍 |
|-------|---------|------|-----|
| [#2396](https://github.com/nanocoai/nanoclaw/issues/2396) | 2026-05-10 | Groq Whisper 云端回退 | 0 |

### 🟡 待合并 PRs（建议尽快 Review）

| PR | 提交时间 | 类型 | 描述 |
|----|---------|------|------|
| [#2498](https://github.com/nanocoai/nanoclaw/pull/2498) | 2026-05-15 | Feature | health-monitor 静默失败检测 + Discord 告警 |
| [#2500](https://github.com/nanocoai/nanoclaw/pull/2500) | 2026-05-15 | Feature Skill | early-compact-nudge 上下文压缩提醒 |
| [#2496](https://github.com/nanocoai/nanoclaw/pull/2496) | 2026-05-15 | Bug Fix | DB 写入权限修复（影响命令响应送达） |
| [#2494](https://github.com/nanocoai/nanoclaw/pull/2494) | 2026-05-15 | Bug Fix | systemd session 重新探测 |
| [#2490](https://github.com/nanocoai/nanoclaw/pull/2490) | 2026-05-15 | Operational Skill | LiteLLM Provider 支持 |
| [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) | 2026-05-15 | Feature Skill | Agent Network |

---

## 📊 健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| **活跃度** | 🟢 高 | 24h 内 50 Issues + 50 PRs 处理量 |
| **发布节奏** | 🟢 健康 | v2.0.63 正式建立规范化 Release 机制 |
| **Bug 关闭效率** | 🟡 中 | 大量 Bug 标记关闭但无 fix PR 关联，质量存疑 |
| **PR 积压** | 🟡 中 | 6 个 Open PRs 等待 Review |
| **社区参与** | 🟢 高 | 核心 Issue 讨论活跃（#80: 32 评论） |

---

*报告生成时间：2026-05-16 | 数据来源：GitHub NanoClaw 仓库 | 分析师：AI 开源项目分析助手*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-05-16

---

## 1. 今日速览

IronClaw 今日保持极高活跃度：过去 24 小时内共产生 **16 条 Issues**（全部为新开/活跃，0 关闭）和 **50 条 PR** 更新（其中 22 条待合并，28 条已合并/关闭），同时发布了 **ironclaw-v0.28.2** 补丁版本。开发主线高度聚焦于 **Reborn 架构的生产就绪（production readiness）** 工作，多个 workstream 分支已合并入集成分支 WS14-parent；新增了大量 WebUI/WebChat v2 的原生 Reborn 路由相关 Issue，表明 Reborn beta 交付进入冲刺阶段。整体项目推进速度稳健，无重大阻断性问题，但 **Nightly E2E 仍然失败** 需关注。

---

## 2. 版本发布

### ✅ ironclaw-v0.28.2 — 2026-05-14

| 类型 | 内容 |
|---|---|
| **修复** | *(extensions)* 恢复 chat 驱动的 `tool_install` 逻辑，修复双重调用（double-invoke）问题及一个自动审批相关 footgun — [PR #3559](https://github.com/nearai/ironclaw/pull/3559) |
| **变更** | *(llm)* 将 provider 专属的认证、模型拉取和 embeddings 配置统一封装到 facade 层 — [PR #3416](https://github.com/nearai/ironclaw/pull/3416) |

> ⚠️ **迁移注意事项**：此次变更将 LLM provider 配置后端重构为 facade 模式，依赖 provider 内部配置细节的外部代码可能受影响，建议在升级后运行完整的模型调用 smoke test。

---

## 3. 项目进展

### 合并/关闭的重要 PR

| PR | 标题 | 贡献者 | 状态 | 意义 |
|---|---|---|---|---|
| [#3650](https://github.com/nearai/ironclaw/pull/3650) | arch(ws-14-parent): integrate ws-9 + ws-10 + ws-11 + ws-12 + ws-13 + ws-15 | @henrypark133 | ✅ CLOSED | 集成了 6 个 host-port 分支（capability、checkpoint、input、progress、cancellation、identity-context），为 WS14 提供统一基线，Reborn 核心基础设施趋于完整 |
| [#3652](https://github.com/nearai/ironclaw/pull/3652) | arch(ws-16): wire live planned runtime composition | @henrypark133 | ✅ CLOSED | 将 planned driver、registry、resolver、coordinator、runner、host factory 及真实 host-port adapters 组合为生产级 runtime builder |
| [#3651](https://github.com/nearai/ironclaw/pull/3651) | arch(ws-14): register planned driver default path | @henrypark133 | ✅ CLOSED | 添加 registry/profile helpers，使 Reborn 能选择 planned 默认路径，同时保留生产切换的延迟权 |
| [#3685](https://github.com/nearai/ironclaw/pull/3685) | fix(ws-13): wire live cancellation into host | @serrrfirat | ✅ CLOSED | 引入 `RunCancellationFactory` 从持久化 run state 播种，在 Reborn text host 构造时接入 |
| [#3686](https://github.com/nearai/ironclaw/pull/3686) | fix(ws-13): ack drained inputs before cancel exit | @serrrfirat | ✅ CLOSED | 隔离输入 cursor ack 安全修复，与 live cancellation 接线解耦 |
| [#3684](https://github.com/nearai/ironclaw/pull/3684) | fix(ws-13): verify cancellation from turn state | @serrrfirat | ✅ CLOSED | `ThreadCheckpointLoopExitEvidencePort` 现从持久化 turn state 读取，仅接受 durable run 的 `LoopExit::Cancelled` |
| [#3665](https://github.com/nearai/ironclaw/pull/3665) | feat(engine): IRONCLAW_DISABLE_CODEACT flag | @zetyquickly | ✅ CLOSED | 新增环境变量开关，可在 CodeAct 与纯 structured-tools 模式间切换，零风险默认值 |
| [#3532](https://github.com/nearai/ironclaw/pull/3532) | Fix markdown_to_mrkdwn emphasis inside `<url\|text>` links | @ilblackdragon | ✅ CLOSED | 修复 Slack markdown 转换中链接内 emphasis 错误转换问题 |
| [#3669](https://github.com/nearai/ironclaw/pull/3669) | engine v2: expose channel-supplied thread/response ids to tools | @zetyquickly | 🔄 OPEN | 恢复 engine v1 契约，让每个 tool call 在 `JobContext.metadata` 中携带 `notify_thread_id` 和新增的 `notify_response_id` |
| [#3632](https://github.com/nearai/ironclaw/pull/3632) | feat(reborn): add before-inbound policy seam | @serrrfirat | 🔄 OPEN | 为 `ironclaw_product_workflow` 添加 `BeforeInboundPolicy` 边界，WebUI 消息可在 staged 前进行检查/重写/拒绝 |
| [#3681](https://github.com/nearai/ironclaw/pull/3681) | feat(extensions): Add first-party HTTP egress tool | @serrrfirat | 🔄 OPEN | 新增内置 `builtin.http` 工具，支持 method/URL/headers/body/timeout，委托现有 `RuntimeHttpEgress` 路径 |
| [#3679](https://github.com/nearai/ironclaw/pull/3679) | feat(reborn): apply universal FS dispatch across consumer crates | @ilblackdragon | 🔄 OPEN | **+15,214 / -929 LOC**（61 个文件），跨所有 consumer crate 应用通用 `RootFilesystem` 分发结构，整合了此前 5 个 stacked PR |
| [#3695](https://github.com/nearai/ironclaw/pull/3695) | arch(reborn): consolidate composition root, narrow public surface, ship live binary | @serrrfirat | 🔄 OPEN | 将 `ironclaw_reborn_composition` 提升为 Reborn 合成根，发版 live `ironclaw-reborn` 二进制，缩窄 `ironclaw_reborn` 公共表面 |
| [#3688](https://github.com/nearai/ironclaw/pull/3688) | refactor(reborn): project ProductAdapter from single ExtensionManifestV2 | @serrrfirat | 🔄 OPEN | 用单一 Extension Manifest v2 的 host-API section 机制替代旧的独立 TOML 格式，ProductAdapter 声明归一化 |

---

## 4. 社区热点

### 最活跃 Issues（按评论数排序）

**🔴 Issue [#3259](https://github.com/nearai/ironclaw/issues/3259) — 严重：crates.io 发布断层**
> Publish 0.25.0–0.27.0 to crates.io — downstream pinned to 0.24.0 by wasmtime 28.x CVEs

- **作者**：[dacoldest](https://github.com/dacoldest) | **评论：4** | 创建于 2026-05-05
- **核心诉求**：GitHub 已发布到 v0.27.0，但 crates.io 最高只有 0.24.0。wasmtime 28.x CVE 导致下游依赖 pinned 在旧版本，存在安全风险。
- **背景**：这是一个 **影响下游生产用户** 的关键发布流程问题，维护团队需优先处理。

**🟡 Issue [#3616](https://github.com/nearai/ironclaw/issues/3616) — 生产路径改造**
> Reborn: wire production app/gateway/channel ingress to product live workflow

- **作者**：[henrypark133](https://github.com/henrypark133) | **评论：2** | 创建于 2026-05-14
- **核心诉求**：WS17 验证了手动组合 Reborn product-live 循环可行，但生产 app/gateway/channel 入口路径尚未切换到该循环。需要将生产流量接入。

**🟡 Issue [#3602](https://github.com/nearai/ironclaw/issues/3602) — 高风险：启动合成缺失门控**
> [risk: high, scope: agent] Wire Reborn loop production readiness gate into startup composition

- **作者**：[zmanian](https://github.com/zmanian) | **评论：1** | 创建于 2026-05-14
- **核心诉求**：`RebornLoopProductionReport` 已实现为同步 fail-closed 验证器，但启动合成时无任何调用方调用 `report.is_ready()`，生产部署在报告本应拒绝的情况下仍然运行。

**🟢 多条 WebUI Beta 相关 Issues（#3611, #3625, #3626, #3627）— P0 优先级**
- 由 [serrrfirat](https://github.com/serrrfirat) 创建，parent tracker [#3607](https://github.com/nearai/ironclaw/issues/3607)
- 涵盖：原生 WebChat v2 路由集、幂等性保障、TurnScope 绑定、submit/cancel/resolve facade 方法
- **判断**：这些 Issue 共同构成 Reborn WebUI Beta 的交付蓝图，预计在下一个 Reborn milestone 中被 PR 承接。

---

## 5. Bug 与稳定性

### 新报告的 Bug（按严重程度）

| 严重度 | Issue | 描述 | 状态 | 已有 Fix? |
|---|---|---|---|---|
| 🔴 **高** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E 调度运行失败 — Full E2E / E2E (features) 任务失败 | 🆕 OPEN | ❌ 尚无 |
| 🟡 **中** | [#3690](https://github.com/nearai/ironclaw/issues/3690) | `EventTriggeredHookContext` 向 Installed-tier hooks 暴露完整 `RuntimeEvent`，包含不应暴露的内部字段（cro…） | 🆕 OPEN | PR 跟进中（来自 #3640） |
| 🟡 **中** | [#3689](https://github.com/nearai/ironclaw/issues/3689) | Installed-tier hooks 触发 `HookFailed` → 再次被观察 → 递归循环 DoS 风险 | 🆕 OPEN | PR 跟进中（来自 #3640） |
| 🟢 **低** | [#3675](https://github.com/nearai/ironclaw/issues/3675) | TUI 无法正确渲染 Markdown 表格，表格以纯文本形式显示 | 🆕 OPEN | ❌ 尚无 |

> **🔴 Nightly E2E 持续失败是稳定性关键指标**，建议优先调查。最近一次失败发生于 2026-05-15 04:36 UTC（commit: `faf2ed4465`），完整日志见 [Actions Run #25900097413](https://github.com/nearai/ironclaw/actions/runs/25900097413)。

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 需求分析 | 可能的纳入版本 |
|---|---|---|---|
| [#3620](https://github.com/nearai/ironclaw/issues/3620) | Reborn: convert provider tool calls into `ParentLoopOutput::CapabilityCalls` | 将生产 model gateway 路径从 text-only 扩展到支持 `FinishReason::ToolCalls`，对接 Reborn 已有 capability 层 | Reborn Beta |
| [#3622](https://github.com/nearai/ironclaw/issues/3622) | Reborn: verify product-visible tool-result completion evidence and result refs | 确保 tool call 完成时产生合规的 `result_refs`，WS17 目前只有 reply-only 完成路径 | Reborn Beta |
| [#3611](https://github.com/nearai/ironclaw/issues/3611) | [Reborn WebUI Beta] 实现原生 WebChat v2 路由 | 原生 WebUI 表面（非 WASM），包含 create-thread、send-message、get timeline/snapshot | Reborn Beta M1 |
| [#3625](https://github.com/nearai/ironclaw/issues/3625) | [Reborn WebUI Beta] 幂等性与 accepted-message ledger | 防止浏览器重复提交产生重复 turn/message | Reborn Beta M2 |
| [#3692](https://github.com/nearai/ironclaw/issues/3692) | Reborn: add policy-gated personal identity and heartbeat prompt context | PR #3649 延迟了 personal identity/heartbeat prompt context，需要额外 prompt shaping 和规则引擎 | 后续 milestone |
| [#1378](https://github.com/nearai/ironclaw/issues/1378) | feat(routing): per-channel MCP and built-in tool filtering | 多渠道部署下按 channel 过滤 MCP server 和内置工具 | 待排期 |

---

## 7. 用户反馈摘要

从今日 Issues 评论与讨论中提炼：

**🔴 下游用户的紧急诉求（Issue #3259）**
> *crates.io 上最高只有 0.24.0，但 GitHub 已到 0.27.0。wasmtime 28.x CVE 使得 pinned 在旧版本的消费者面临已知安全风险。*
- **痛点**：直接依赖 crates.io 的外部项目无法获取安全修复，发布流程存在断层。
- **诉求**：尽快将 0.25.0–0.27.0 推送到 crates.io，或给出明确的发布时间表。

**🟡 WebUI 用户体验问题（Issue #3675）**
> *工具输出中包含 Markdown 表格时，TUI 渲染为纯文本，失去可读性。*
- **痛点**：终端用户在查看结构化数据（如表格）时体验差，影响产品可用性印象。

**🟢 Reborn 架构演进（Issue #3602, #3616）**
> *生产部署绕过了 `RebornLoopProductionReport` 的就绪检查，理论上不达标的配置也会运行。*
- **诉求**：团队内部认识到 Reborn 生产就绪门控缺失是风险，正在积极修复（多个 WS13/WS14 相关 PR 已合并）。

---

## 8. 待处理积压

以下 Issue 长期未解决或缺少维护者响应，需要关注：

| Issue | 年龄 | 优先级 | 问题 | 建议 |
|---|---|---|---|---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | ~11 天 | 🔴 高 | crates.io 发布断层，下游安全风险 | **优先处理** — 发布流程阻塞，影响外部用户 |
| [#1378](https://github.com/nearai/ironclaw/issues/1378) | ~59 天 | 🟡 中 | per-channel MCP/工具过滤功能请求，PR #1378 持续开放 | 评估是否纳入当前 cycle 或给出明确的 scope 说明 |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | ~6 天 | 🔴 高 | Nightly E2E 持续失败 | **优先调查** — CI 稳定性是开发效率的基础保障 |
| [#3675](https://github.com/nearai/ironclaw/issues/3675) | ~1 天 | 🟢 低 | TUI Markdown 表格渲染 | 分配给 UI/终端渲染相关成员 |

---

## 📊 今日数据摘要

```
📅 日期：2026-05-16
📦 Issues：16 条（新开/活跃 16，关闭 0）
🔀 PRs：50 条（待合并 22，已合并/关闭 28）
🏷️ Releases：ironclaw-v0.28.2（2 项变更：1 修复 + 1 重构）
🔥 活跃 PRs（评论最多/top）：#3679（FS dispatch），#3548（DISABLE_TOOLS_LIST），#3695（composition root）
🎯 项目健康度评估：✅ 活跃度高，多线并行推进，无重大阻断；⚠️ E2E 失败和 crates.io 发布断层需优先处理
```

> 本报告基于 GitHub 公开数据自动生成。如需进一步分析特定 PR/Issue 或趋势预测，请告知。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目日报

**报告日期**：2026-05-16  
**数据周期**：过去24小时  
**项目地址**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日保持高度活跃状态，共计 **35 条 PR 更新**，其中 **32 条已合并/关闭**，另有 **3 条待合并**。代码产出效率出色，PR/Issue 比达到 35:1。项目在今日完成了大量技术债务清理，批量关闭了多个长期 stale 的安全修复和性能优化 PR。整体代码质量持续提升，安全性和性能优化类 PR 占比显著。⚠️ **需关注**：存在 1 个新开启的中高优先级 Issue（模型调用兼容性），建议维护者尽快响应。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### ✅ 已合并的重要 PR（共32条）

#### 🔧 [PR #1186](https://github.com/netease-youdao/LobsterAI/pull/1186) 流式响应渲染性能优化
- **作者**：@grayalone921
- **修复内容**：AI 流式响应期间每 90ms 内容更新触发整个消息列表全量重建，100 条消息会话中产生 6600+ 次全量遍历
- **解决方案**：引入 `createSelector` 稳定对象引用 + 为 `AssistantTurnBlock` 添加带自定义比较器的 `React.memo`
- **效果**：消除界面滚动卡顿、降低 CPU 占用

#### 🔧 [PR #1986](https://github.com/netease-youdao/LobsterAI/pull/1986) 修复 managed session 会话同步丢失重复字符
- **作者**：@liugang519
- **问题**：网关侧 `appendUniqueSuffix` 的 suffix-prefix overlap 检测错误吞掉重复字符（如 `file:/// → file://`、`.pptx → .ptx`）
- **方案**：改用 `chat.history` 中最后一个 assistant message 的原始文本直接替换，绕过可能损坏的前缀裁剪

#### ✨ [PR #1989](https://github.com/netease-youdao/LobsterAI/pull/1989) 支持右侧预览多标签页
- **作者**：@liugang519
- **功能**：将右侧预览改为多标签页模式，支持同时打开多个文件预览；标签移动到顶部栏
- **修复**：Word 预览页面左右空白不对称问题

#### ✨ [PR #1987](https://github.com/netease-youdao/LobsterAI/pull/1987) 为 Telegram/Discord/QQ/POPO 添加配对码输入框
- **作者**：@liugang519
- **功能**：复用 DingTalk/Feishu 的 `PairingSection` 组件，解决 `dmPolicy` 设置为 `pairing` 时四个平台缺少配对码输入区域的问题

#### 🔒 [PR #822](https://github.com/netease-youdao/LobsterAI/pull/822) 统一 Token 刷新锁
- **作者**：@gongcongrong
- **问题**：三个 token-refresh 路径各维护独立或无并发保护，多请求并发 401 时会竞态调用 refresh
- **修复**：统一 token 刷新锁，消除竞态条件

#### 🔒 [PR #828](https://github.com/netease-youdao/LobsterAI/pull/828) 修复 localfile:// 路径遍历漏洞
- **作者**：@Bucle

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-05-16

## 今日速览

Moltis 项目在过去24小时内保持高度活跃，共处理 **4 个 Issues** 和 **7 个 Pull Requests**。所有活跃 Issues 均已关闭，显示维护团队响应效率较高。代码库主要推进了 **TLS 证书管理优化**、**UI/UX 修复**、**文档站点重构** 和 **远程访问功能扩展** 四大方向。目前有 **1 个新 PR 处于待合并状态**（NetBird/Cloudflare Tunnel 支持），版本发布暂无更新。整体项目健康度良好，社区反馈渠道畅通。

---

## 版本发布

**无新版本发布。** 上一次版本发布信息未在本次数据中提供。

---

## 项目进展

### 已合并/关闭的重要 PR

| PR 编号 | 类型 | 标题 | 贡献者 | 状态 |
|---------|------|------|--------|------|
| [#1000](https://github.com/moltis-org/moltis/pull/1000) | feat | feat(tls): support public IP SAN for generated certs | @penso | ✅ Closed |
| [#998](https://github.com/moltis-org/moltis/pull/998) | fix | fix(web): prevent chat composer horizontal overflow | @penso | ✅ Closed |
| [#1001](https://github.com/moltis-org/moltis/pull/1001) | feat | feat(mcp): support OAuth client secrets | @penso | ✅ Closed |
| [#997](https://github.com/moltis-org/moltis/pull/997) | fix | fix(install): tolerate missing Proxmox CA cert | @penso | ✅ Closed |
| [#987](https://github.com/moltis-org/moltis/pull/987) | chore | Replace docs deployment with Astro site | @penso | ✅ Closed |
| [#999](https://github.com/moltis-org/moltis/pull/999) | chore | chore(deps): bump astro to 6.3.3 | dependabot[bot] | ✅ Closed |

**关键进展：**

1. **TLS 证书功能增强** — 新增 `tls.public_ip` 配置项，支持将公共 IP 地址作为 Subject Alternative Name (SAN) 包含在自动生成的 TLS 证书中，解决了原证书仅支持 localhost 的限制。

2. **Web UI 修复** — 修复了聊天区域水平滚动的问题（#994），添加了 Playwright 回归测试以防止未来再次出现。

3. **MCP OAuth 支持** — MCP (Model Context Protocol) 现支持配置 `client_secret`，完善了 OAuth 认证能力。

4. **文档站点重构** — 从 mdBook 迁移至 Astro 生成站点，新增侧边栏导航、页面目录、复制按钮、标题搜索、响应式导航及亮/暗/自动主题切换功能。

5. **Proxmox 安装容错** — 修复了 LXC 创建过程中 CA 证书缺失导致失败的问题，提升了安装脚本的健壮性。

---

### 待合并 PR

| PR 编号 | 类型 | 标题 | 贡献者 | 状态 |
|---------|------|------|--------|------|
| [#1002](https://github.com/moltis-org/moltis/pull/1002) | feat | feat(remote-access): add NetBird and Cloudflare Tunnel support | @penso | 🔄 Open |

**预期影响：** 该 PR 将为 Moltis 新增两大远程访问方案支持：
- **NetBird**：私有 mesh 网络支持，包含配置、CLI 命令、REST 路由、状态解析及 loopback 保留的 TCP 转发器
- **Cloudflare Tunnel**：支持配置、CLI 命令、REST 路由、运行时 `cloudflared` 控制器、WebAuthn 主机名更新和令牌处理

预计将显著扩展项目的网络接入灵活性。

---

## 社区热点

### 活跃讨论的 Issues/PRs

**热度最高的议题：** PR #1002（NetBird & Cloudflare Tunnel 支持）

该 PR 反映了用户对 **无公网 IP 远程访问** 的强烈需求。结合 Issue #995（portal-tunnel 集成请求），社区正在推动多种隧道/代理方案的整合，以降低部署门槛、提升网络可达性。

| 类型 | 编号 | 标题 | 链接 | 评论数 |
|------|------|------|------|--------|
| Issue | #995 | Integration of `portal-tunnel` as a trustless relay channel | [查看](https://github.com/moltis-org/moltis/issues/995) | 1 |
| PR | #1002 | feat(remote-access): add NetBird and Cloudflare Tunnel support | [查看](https://github.com/moltis-org/moltis/pull/1002) | - |

---

## Bug 与稳定性

### 已关闭的 Bug Issues

| 编号 | 标题 | 严重程度 | 修复 PR | 状态 |
|------|------|----------|----------|------|
| [#996](https://github.com/moltis-org/moltis/issues/996) | Generated TLS certificates only work for localhost, contrary to the docs | 🟡 中 | #1000 | ✅ 已修复 |
| [#994](https://github.com/moltis-org/moltis/issues/994) | chat has horizontal scrolling again | 🟢 低 | #998 | ✅ 已修复 |
| [#993](https://github.com/moltis-org/moltis/issues/993) | Proxmox script - LXC Creation fails on 91 | 🟡 中 | #997 | ✅ 已修复 |

**分析：**
- 所有 3 个 Bug 均在 1-2 天内完成修复并关闭，响应速度优秀
- TLS 证书问题（#996）是文档与实现不符的典型案例，已通过新增 `public_ip` 配置彻底解决
- Proxmox LXC 创建问题（#993）涉及安装脚本健壮性，现已容忍可选 CA 证书缺失

**回归风险：** 低。Playwright 测试已覆盖聊天 UI 问题。

---

## 功能请求与路线图信号

### 新增功能请求

| 编号 | 类型 | 标题 | 链接 | 状态 |
|------|------|------|------|------|
| #995 | enhancement | Integration of `portal-tunnel` as a trustless relay channel | [查看](https://github.com/moltis-org/moltis/issues/995) | ✅ Closed（已有相关 PR #1002） |

**路线图信号分析：**

1. **远程访问能力扩展** — Issue #995 与 PR #1002 形成呼应，表明维护者已规划将 `portal-tunnel` 类功能整合进核心功能集。NetBird 和 Cloudflare Tunnel 支持若合并，将覆盖大多数远程访问场景。

2. **TLS 证书管理** — 从用户反馈看，证书生成的灵活性（如支持公共 IP SAN）是实际部署中的刚需，已在本次迭代中解决。

3. **MCP 协议深度集成** — OAuth client secrets 支持表明项目正加强对 MCP 生态的兼容性。

---

## 用户反馈摘要

| 来源 | 场景/痛点 | 关键诉求 |
|------|-----------|----------|
| #996 | 用户部署时发现自动生成的 TLS 证书无法用于非 localhost 环境 | 期望证书能包含实际访问地址（IP/域名） |
| #994 | 聊天界面在输入长文本时出现水平滚动 | 期望 UI 自适应内容宽度，不破坏布局 |
| #993 | Proxmox 环境下 LXC 创建因 CA 证书缺失而失败 | 期望安装过程更健壮，允许可选配置 |
| #995 | 需要在不暴露公网 IP 的情况下实现远程访问 | 期望集成隧道/代理方案 |

**总体印象：** 用户群体关注 **部署便利性**、**生产环境可用性** 和 **网络灵活性**，与维护团队近期迭代方向高度一致。

---

## 待处理积压

### 需关注的长期未响应项

**无明显积压。** 本次统计的所有 Issues 已在创建后 1-4 天内关闭，显示维护团队响应及时。

| 类型 | 编号 | 标题 | 创建日期 | 当前状态 |
|------|------|------|----------|----------|
| - | - | - | - | - |

> ⚠️ **建议：** 持续关注 PR #1002 的审查进度，该功能涉及多个子系统集成，建议在合并前确保测试覆盖充分。

---

## 数据摘要

| 指标 | 数值 |
|------|------|
| Issues 新开 | 0 |
| Issues 关闭 | 4 |
| PR 新开 | 1 |
| PR 已合并 | 5 |
| PR 已关闭（未合并） | 1 |
| 版本发布 | 0 |
| 依赖更新 | 1 (Astro 5.18.1 → 6.3.3) |

---

*报告生成时间：2026-05-16 | 数据来源：GitHub Moltis Organization*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**报告日期：** 2026-05-16  
**数据来源：** GitHub (agentscope-ai/QwenPaw)

---

## 1. 今日速览

今日 QwenPaw 社区保持高度活跃，共处理 **22 条 Issues**（新开/活跃 11 条，已关闭 11 条）和 **39 条 PRs**（待合并 16 条，已合并/关闭 23 条）。项目进入功能迭代密集期，多项安全修复（Shell 文件访问防护、备份恢复信任加固）和用户体验优化（Token 用量统计、MCP 工具命名冲突解决）已合并。版本发布保持沉寂，今日无新版本 Tag。建议关注 `write_file()` 死循环和安全漏洞 #4421 的修复进展。

---

## 2. 版本发布

**今日无新版本发布。** 当前最新版本仍为 v1.1.7（用户报告显示存在 macOS 图标异常问题）。

> ℹ️ 用户 @shanghai-Jerry 在 #4430 询问升级 1.1.6 → 1.1.7 配置是否会丢失，建议维护者确认是否需要发布迁移指南。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 作者 | 内容 | 意义 |
|---|---|---|---|
| [#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387) | @ekzhu | **允许 Anthropic Provider 自定义 Base URL** | 用户可对接 Anthropic 兼容 API（如中转服务），突破官方端点限制 |
| [#4423](https://github.com/agentscope-ai/QwenPaw/pull/4423) | @xuanrui-L | **修复 CloudPaw 插件问题 & 增强阿里云 Skills 远程托管** | 提升云原生集成稳定性 |
| [#4427](https://github.com/agentscope-ai/QwenPaw/pull/4427) | @hongxicheng | **修复企业微信快速消息时重复显示 "Thinking..." 占位符** | 改善企业微信用户体验 |
| [#4413](https://github.com/agentscope-ai/QwenPaw/pull/4413) | @rayrayraykk | **Provider 设置新增自定义 HTTP Headers 和 Anthropic Auth Token** | 支持中转 API 认证场景 |
| [#4409](https://github.com/agentscope-ai/QwenPaw/pull/4409) | @jinglinpeng | **备份导入/恢复信任控制加固** | 安全修复 |
| [#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198) | @yuanxs21 | **修复 Plan Mode Gate Bypass** | 防止工具在用户确认前被提前执行 |
| [#3787](https://github.com/agentscope-ai/QwenPaw/pull/3787) | @yuanxs21 | **修复 Plan Panel 重新打开时状态丢失** | UI 稳定性修复 |

### 处于 Under Review 阶段的 PRs

| PR | 作者 | 内容 | 预期影响 |
|---|---|---|---|
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | @yuanxs21 | **对话内显示 Token 用量统计** | ⭐ 高需求功能，用户可直观查看消耗 |
| [#4428](https://github.com/agentscope-ai/QwenPaw/pull/4428) | @sunies | **MCP 工具名前缀客户端 Key 避免冲突** | 解决多 MCP Server 同名工具冲突问题 |
| [#4331](https://github.com/agentscope-ai/QwenPaw/pull/4331) | @aqilaziz | **Shell 子进程注入请求上下文环境变量** | 提升日志追溯和审计能力 |
| [#4303](https://github.com/agentscope-ai/QwenPaw/pull/4303) | @aqilaziz | **Cron 非共享运行隔离** | 解决定时任务会话状态残留问题 |
| [#4417](https://github.com/agentscope-ai/QwenPaw/pull/4417) | @qbc2016 | **ModelInfo 新增 max_tokens 和 max_input_length** | 模型参数配置更精细化 |
| [#4282](https://github.com/agentscope-ai/QwenPaw/pull/4282) | @Leirunlin | **新增 /make-skill 命令** | 便捷的 Skill 创作体验 |
| [#4407](https://github.com/agentscope-ai/QwenPaw/pull/4407) | @TheSh0e | **世界杯比赛助手 Skill** | 场景化 Skill 生态扩展 |
| [#4361](https://github.com/agentscope-ai/QwenPaw/pull/4361) | @suntp | **安全修复：Shell 文件访问绕过防护** | 防止通过 execute_shell_command 访问敏感文件 |

---

## 4. 社区热点

### 评论最多的 Issues（按评论数排序）

**#3957** [Agent workspace 切换错误导致身份混淆](https://github.com/agentscope-ai/QwenPaw/issues/3957) 🔴 高优先级
- **问题：** 主控 Agent 连接钉钉频道后，收到其他 Agent 推送消息时 workspace 被错误切换，身份混淆
- **评论数：** 8 条
- **状态：** 已关闭（可能已修复，需确认）

**#4051** [DeepSeek 模型 think 内容解析问题](https://github.com/agentscope-ai/QwenPaw/issues/4051) 🟡 中优先级
- **问题：** DeepSeek V4 Flash 的 think 标签内容解析异常，导致回复缺失
- **评论数：** 7 条
- **状态：** 已关闭

**#4299** [write_file() 死循环报错](https://github.com/agentscope-ai/QwenPaw/issues/4299) 🔴 高优先级
- **问题：** 输出内容较长时报错 "missing required positional argument"，疑似死循环
- **评论数：** 7 条
- **状态：** 开放中

**#1516** [Telegram 频道不支持 AudioContent](https://github.com/agentscope-ai/QwenPaw/issues/1516) 🟡 中优先级
- **问题：** Telegram 语音消息无法被 LLM 理解
- **评论数：** 7 条
- **状态：** 开放中

**#4314** [MiMo thinking mode + 工具调用返回 400](https://github.com/agentscope-ai/QwenPaw/issues/4314) 🔴 高优先级
- **问题：** 开启思考模式后，多轮对话中触发工具调用报 400 错误（缺少 reasoning_content）
- **评论数：** 7 条
- **状态：** 已关闭

**#2953** [copaw app 启动信息错误](https://github.com/agentscope-ai/QwenPaw/issues/2953) 🟢 低优先级
- **问题：** 启动后日志显示 "Workspace stopped" 误导信息
- **评论数：** 7 条
- **状态：** 已关闭

### 热点 PR（评论数最多）

**#4120** [Matrix E2EE 验证增强](https://github.com/agentscope-ai/QwenPaw/pull/4120) - @Morxi（首次贡献者）
- Access Token 改为可选、增强 E2EE 验证步骤

---

## 5. Bug 与稳定性

### 按严重程度排序

#### 🔴 严重（已影响生产/无 Workaround）

| Issue | 描述 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#4421](https://github.com/agentscope-ai/QwenPaw/issues/4421) | **安全漏洞：Channel 配置明文写入 Agent 可读目录** | 已关闭 | 需确认 |
| [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) | **write_file() 长内容死循环报错** | 开放 | 否 |
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | **Agent workspace 身份混淆** | 已关闭 | 需确认 |
| [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) | **MiMo thinking mode + 工具调用 400 错误** | 已关闭 | 否（已提供 workaround?） |

#### 🟡 中等（功能受损/部分用户受影响）

| Issue | 描述 | 状态 |
|---|---|---|
| [#4309](https://github.com/agentscope-ai/QwenPaw/issues/4309) | **browser_use CDP 超时导致 Agent 卡死 5 分钟** | 已关闭 |
| [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) | **Anthropic API 'file' 类型不被支持** | 开放 |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | **Telegram 语音消息无法处理** | 开放 |
| [#4410](https://github.com/agentscope-ai/QwenPaw/issues/4410) | **MCP 客户端连接 yuque-mcp 因 TTY 检测失败** | 已关闭 |
| [#4412](https://github.com/agentscope-ai/QwenPaw/issues/4412) | **macOS 15 下图标大小异常** | 开放 |

#### 🟢 轻微（UI/UX 问题）

| Issue | 描述 | 状态 |
|---|---|---|
| [#2982](https://github.com/agentscope-ai/QwenPaw/issues/2982) | **Web 界面切换 Agent 应跳转至上次聊天** | 已关闭 |
| [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) | **copaw app 启动显示 "Workspace stopped" 误导信息** | 已关闭 |

---

## 6. 功能请求与路线图信号

### 用户强烈需求的功能

| Issue/PR | 需求 | 状态 | 实现可能性 |
|---|---|---|---|
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | **对话内 Token 用量统计** | PR Under Review | ⭐⭐⭐ 高 |
| [#4406](https://github.com/agentscope-ai/QwenPaw/issues/4406) | **列出和安装内置插件**（类比内置 Skills） | 开放 | ⭐⭐ 中 |
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | **建议工作目录统一放到 .qwenpaw 文件夹** | 开放 | ⭐⭐ 中 |
| [#4432](https://github.com/agentscope-ai/QwenPaw/issues/4432) | **Cron 增加 "Clear Before Run" 开关** | 开放（PR #4303 相关） | ⭐⭐⭐ 高 |
| [#4431](https://github.com/agentscope-ai/QwenPaw/issues/4431) | **钉钉群聊不同人消息并行处理** | 开放 | ⭐ 低（需架构变更） |
| [#3109](https://github.com/agentscope-ai/QwenPaw/issues/3109) | **钉钉群聊读取引用消息** | 已关闭 | ⭐ 需确认是否实现 |
| [#3796](https://github.com/agentscope-ai/QwenPaw/issues/3796) | **Provider 支持自定义 HTTP Headers** | 已关闭 | ✅ 已通过 #4413 实现 |

### 路线图信号分析

从 PR 合并趋势看，项目近期重点方向：
1. **安全加固** - Shell 访问防护、备份恢复信任、Plan Mode Gate
2. **多渠道体验优化** - 企业微信、钉钉、Matrix
3. **开发者友好** - MCP 多服务器支持、Token 统计、内置插件管理
4. **自动化能力** - Cron 任务隔离、Skill 创作

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 用户反馈 | 相关 Issue |
|---|---|---|
| **中转 API 对接** | 企业微信/钉钉/Claude 等中转 API 无法正常调用，需要自定义 Headers 和 Base URL | #3796, #4387, #4413 |
| **定时任务状态残留** | 修改技能文件后定时任务仍使用旧上下文执行 | #4162, #4303 |
| **长对话场景** | 输出内容较长时 write_file() 报错死循环 | #4299 |
| **移动端体验** | Telegram 语音消息无法处理，影响移动端使用 | #1516 |
| **多 MCP Server 冲突** | 配置多个同类 MCP Server 时只有一台生效 | #4428 |
| **升级担忧** | 担心卸载重装导致配置丢失 | #4430 |

### 用户满意度/需求信号

- **满意点：** 内置 Skills 体验（#4406 希望插件也能有同样体验）、钉钉频道集成
- **改进建议：** 
  - 企业微信单会话配置（#4116）
  - 工作目录整洁度（#4408）
  - 多语言/国际化（从 Issues 涉及中英双语推测）

---

## 8. 待处理积压

### 长期未响应的 Issues（>14 天无更新）

| Issue | 描述 | 创建时间 | 优先级 |
|---|---|---|---|
| [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) | **Anthropic 'file' 类型不支持** | 2026-04-01 | 🟡 中 |
| [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) | **定时任务 sessionId 导致上下文残留** | 2026-05-09 | 🟡 中 |
| [#4367](https://github.com/agentscope-ai/QwenPaw/issues/4367) | **Console 只显示 "Thinking" 无回复** | 2026-05-14 | 🟡 中 |

### 需要维护者关注的 PRs

| PR | 作者 | 内容 | 建议 |
|---|---|---|---|
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | @yuanxs21 | Token 用量统计 | 高价值功能，建议优先 Review |
| [#4428](https://github.com/agentscope-ai/QwenPaw/pull/4428) | @sunies | MCP 工具名冲突 | 解决长期痛点，建议推进 |
| [#4361](https://github.com/agentscope-ai/QwenPaw/pull/4361) | @suntp | Shell 安全防护 | 建议确认已覆盖所有绕过路径 |

---

## 关键指标汇总

| 指标 | 数值 | 趋势 |
|---|---|---|
| Issues 新开/活跃 | 11 | - |
| Issues 已关闭 | 11 | - |
| PRs 待合并 | 16 | - |
| PRs 已合并/关闭 | 23 | - |
| 版本发布 | 0 | - |
| 安全相关 Issues | 2 | 需关注 #4421 |
| 高优先级未关闭 Issues | 2-3 | write_file 死循环、AudioContent |

---

*报告生成时间：2026-05-16 | 数据覆盖：过去 24 小时*

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

# librefang 项目动态日报

**报告日期：** 2026-05-16  
**项目仓库：** github.com/librefang/librefang

---

## 1. 今日速览

librefang 项目在 2026-05-15 至 16 日期间保持高度活跃。社区共提交 **16 条 Issues**（其中 3 条已关闭）和 **30 条 Pull Requests**（其中 8 条已合并/关闭），整体呈现快速发展态势。今日的核心主题围绕 **runtime 重构、异步任务追踪、内存隔离、vault 安全性以及 skill/工具按需加载** 等关键特性展开。值得注意的是，核心贡献者 @houko 在今日主导了多项 XL 级别大型 PR，推进了 RL 导出管道、工作流操作符、triggers 声明式配置等多个高价值功能，整体项目健康度评分：**优秀**。

---

## 2. 版本发布

**今日无新版本发布。** 最新 Releases 为空，建议关注近期合并的 PR 是否将在后续版本中统一发布。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，说明了推进的功能或修复：

### 3.1 已合并/关闭 PR

| PR # | 标题 | 贡献者 | 状态 | 关联 Issue |
|------|------|--------|------|------------|
| [#5039](https://github.com/librefang/librefang/pull/5039) | fix: map ElevenLabs voice names to voice_ids in text_to_speech tool | @f-liva | CLOSED | - |
| [#5076](https://github.com/librefang/librefang/pull/5076) | refactor(runtime-wasm): typed SandboxError replaces anyhow | @houko | CLOSED | #3576 |
| [#5072](https://github.com/librefang/librefang/pull/5072) | docs(architecture): error-contracts RFC | @houko | CLOSED | #3576 |
| [#5054](https://github.com/librefang/librefang/pull/5054) | [main red] CI failure on PR #5012 | @github-actions[bot] | CLOSED | - |

### 3.2 待合并重要 PR（Ready for Review）

| PR # | 标题 | 贡献者 | Size | 关联 Issue |
|------|------|--------|------|------------|
| [#5035](https://github.com/librefang/librefang/pull/5035) | feat(workflows): non-agent operator nodes — Wait, Gate, Transform, Branch | @houko | XL | #4980 |
| [#5033](https://github.com/librefang/librefang/pull/5033) | feat(types,kernel,runtime): async task tracker | @houko | XL | #4983 |
| [#5034](https://github.com/librefang/librefang/pull/5034) | feat(rl-export): new crate + W&B + Tinker + Atropos exporters | @houko | XL | #3330, #3331 |
| [#5053](https://github.com/librefang/librefang/pull/5053) | refactor(runtime): #3710 god-crate split — 5 standalone crates | @houko | XL | #3710 |
| [#5036](https://github.com/librefang/librefang/pull/5036) | fix(api,kernel): schedule field PATCH + actual_provider wiring | @houko | L | - |

### 3.3 今日新提交 PR

| PR # | 标题 | 贡献者 | Size | 摘要 |
|------|------|--------|------|------|
| [#5078](https://github.com/librefang/librefang/pull/5078) | feat(text_to_speech): document ElevenLabs | @houko | M | 文档化 ElevenLabs 并在驱动边界验证 voice_id |
| [#5074](https://github.com/librefang/librefang/pull/5074) | fix(vault): unify init() key resolution | @houko | L | 统一 vault init() 密钥解析，关闭 #5069 |
| [#5075](https://github.com/librefang/librefang/pull/5075) | feat(runtime,workflows): rich workflow invocation | @houko | XL | 丰富工作流调用，关闭 #4982 |
| [#5077](https://github.com/librefang/librefang/pull/5077) | refactor(runtime-wasm): typed SandboxError | @houko | M | WASM 沙箱错误类型化 |
| [#5073](https://github.com/librefang/librefang/pull/5073) | feat(runtime,skills): on-demand tool/skill loading | @houko | L | 按需工具/技能加载，关闭 #4805 |
| [#5071](https://github.com/librefang/librefang/pull/5071) | feat(memory): per-agent memory isolation | @leszek3737 | L | 每个 Agent 内存隔离，关闭 #5070 |
| [#5064](https://github.com/librefang/librefang/pull/5064) | fix(api): distinguish JoinError cancellation | @leszek3737 | S | 区分 JoinError 取消与 panic，关闭 #5058 |
| [#5065](https://github.com/librefang/librefang/pull/5065) | fix(extensions): prime LIBREFANG_VAULT_KEY from dotenv | @f-liva | M | 容器部署 vault 密钥加载修复 |
| [#5067](https://github.com/librefang/librefang/pull/5067) | feat(llm-driver): budget-aware fallback chain | @houko | XL | 预算感知回退链，关闭 #4807 |
| [#5068](https://github.com/librefang/librefang/pull/5068) | feat(types,kernel): declarative [[triggers]] | @houko | XL | agent.toml 声明式 triggers，关闭 #5014 |
| [#5066](https://github.com/librefang/librefang/pull/5066) | feat(dashboard): skill/tool finder | @houko | L | Dashboard 技能/工具查找器，关闭 #5049 |
| [#5063](https://github.com/librefang/librefang/pull/5063) | feat(kernel): credential pools | @Chukwuebuka-2003 | L | 多密钥轮换凭证池 |

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

1. **[#3330](https://github.com/librefang/librefang/issues/3330)** - Trajectory dataset export pipeline  
   **活跃度：** 2 条评论 | **严重性：** Critical  
   **诉求分析：** 社区迫切需要将 Agent 运行轨迹导出为训练数据集的完整管道，包括批处理运行器、压缩器和工具集分发功能。这是强化学习训练数据准备的关键基础设施需求。

2. **[#3331](https://github.com/librefang/librefang/issues/3331)** - Long-horizon RL rollout entry point  
   **活跃度：** 2 条评论 | **严重性：** Critical  
   **诉求分析：** 当前 CLI 子命令设计为交互式或短时工作模式，缺乏针对长期强化学习 rollout 的入口点和运行时模式。社区需要与 W&B/Tinker/Atropos 等主流 RL 工具的集成。

3. **[#4923](https://github.com/librefang/librefang/issues/4923)** - KV memory bug (已关闭)  
   **活跃度：** 3 条评论 | **关联 PR：** ✓  
   **诉求分析：** 新 Agent 无法读取用户共享信息，memory store 数据未写入数据库。影响新用户体验，需要完善文档和数据库操作逻辑。

### 4.2 热点 PR 分析

**RL 导出管道系列（#5034）** 是今日最大亮点，解决了 #3330 和 #3331 两个 Critical 级别 Issue。新的 `librefang-rl-export` crate 支持 W&B、Tinker、Atropos 三个导出目标，这将显著提升项目的强化学习生态集成能力。

**Runtime 重构（#5053）** 响应了 #3710，将 77k LOC 的 god-crate 拆分为 5 个独立 crate，每个文件控制在 2000 LOC 以内，这是项目长期可维护性的关键里程碑。

---

## 5. Bug 与稳定性

### 5.1 今日报告的 Bug（按严重程度排列）

| Issue # | 标题 | 严重程度 | 状态 | Fix PR | 备注 |
|---------|------|----------|------|--------|------|
| [#5069](https://github.com/librefang/librefang/issues/5069) | vault init() + unlock() 在守护进程中失败 | **高** | OPEN | [#5074](https://github.com/librefang/librefang/pull/5074) ✓ | 使用 `LIBREFANG_VAULT_KEY` 环境变量仍报错 |
| [#5070](https://github.com/librefang/librefang/issues/5070) | Agent memory 存储在共享命名空间 | **高** | OPEN | [#5071](https://github.com/librefang/librefang/pull/5071) ✓ | 每个 Agent 应有独立内存空间 |
| [#5058](https://github.com/librefang/librefang/issues/5058) | JoinError::is_cancelled() 误分类为 panic | **中** | OPEN | [#5064](https://github.com/librefang/librefang/pull/5064) ✓ | 导致日志噪声和错误用户消息 |
| [#5054](https://github.com/librefang/librefang/issues/5054) | CI failure on PR #5012 | **中** | CLOSED | - | Windows 测试失败，已由 PR 提交者修复 |

### 5.2 已关闭的 Bug

- **#4923** - KV memory 未写入数据库（关联 has-pr）
- **#5059** - proactive_memory extraction_provider 字段死代码（已关闭）

---

## 6. 功能请求与路线图信号

### 6.1 高价值功能请求（已有对应 PR）

| Issue # | 功能描述 | 关联 PR | 状态 | 预计版本影响 |
|---------|----------|---------|------|--------------|
| [#4982](https://github.com/librefang/librefang/issues/4982) | 丰富工作流调用（参数发现、文件/图片输入、结构化结果） | [#5075](https://github.com/librefang/librefang/pull/5075) | OPEN | 高 |
| [#4805](https://github.com/librefang/librefang/issues/4805) | 按需工具/技能加载（减少 ~50k tokens） | [#5073](https://github.com/librefang/librefang/pull/5073) | OPEN | 高 |
| [#4983](https://github.com/librefang/librefang/issues/4983) | 异步任务追踪器（非阻塞工作流/委托结果） | [#5033](https://github.com/librefang/librefang/pull/5033) | Ready for Review | 高 |
| [#4980](https://github.com/librefang/librefang/issues/4980) | 非代理操作节点（Wait/Gate/Transform/Branch/Approval） | [#5035](https://github.com/librefang/librefang/pull/5035) | Ready for Review | 高 |
| [#4807](https://github.com/librefang/librefang/issues/4807) | 预算感知回退链（跳过耗尽提供商） | [#5067](https://github.com/librefang/librefang/pull/5067) | OPEN | 高 |
| [#5014](https://github.com/librefang/librefang/issues/5014) | agent.toml 声明式 [[triggers]] | [#5068](https://github.com/librefang/librefang/pull/5068) | OPEN | 中 |
| [#5063](https://github.com/librefang/librefang/pull/5063) | 多密钥轮换凭证池 | [#5063](https://github.com/librefang/librefang/pull/5063) | OPEN | 中 |
| [#5049](https://github.com/librefang/librefang/issues/5049) | Dashboard 技能/工具查找器 | [#5066](https://github.com/librefang/librefang/pull/5066) | OPEN | 中 |

### 6.2 路线图信号

从今日数据判断，下一版本的优先方向包括：
1. **Runtime 可维护性**：god-crate 拆分（#5053）
2. **异步工作流能力**：任务追踪器 + 丰富调用（#5033 + #5075）
3. **记忆系统改进**：per-agent 内存隔离（#5071）
4. **LLM 可靠性**：预算感知回退链（#5067）
5. **安全性增强**：vault 密钥管理（#5074 + #5065）

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点和使用场景：

| 反馈来源 | 核心痛点 | 影响范围 |
|----------|----------|----------|
| **@FrantaNautilus** (#4923, #5070) | Agent 无法读取用户共享信息，内存写入错误命名空间 | 所有创建新 Agent 的用户体验 |
| **@f-liva** (#5069) | 容器部署 vault 密钥加载存在先有鸡还是先有蛋问题 | Docker/Kubernetes 部署场景 |
| **@DaBlitzStein** (#4983) | 代理被多分钟工作流阻塞，无法并发执行任务 | 复杂工作流用户 |
| **@houko** (#3330) | 缺乏 RL 训练数据导出管道，无法利用 Agent 轨迹 | 强化学习研究社区 |
| **社区** (#5049) | 创建 Agent 时需手动输入技能/工具标识符，缺乏辅助 | Dashboard 用户 |

**用户满意度观察：** 社区对 `skill/tool finder` 和 `按需加载` 功能反响积极，表明用户对减少 token 消耗和改善 UX 有强烈需求。

---

## 8. 待处理积压

以下 Issue 长期未响应或待维护者关注：

| Issue # | 标题 | 创建日期 | 状态 | 优先级 | 备注 |
|---------|------|----------|------|--------|------|
| [#3330](https://github.com/librefang/librefang/issues/3330) | Trajectory dataset export pipeline | 2026-04-27 | OPEN | **Critical** | 已有 PR #5034，Ready for Review |
| [#3331](https://github.com/librefang/librefang/issues/3331) | Long-horizon RL rollout entry point | 2026-04-27 | OPEN | **Critical** | 已有 PR #5034，Ready for Review |
| [#3710](https://github.com/librefang/librefang/issues/3710) | librefang-runtime god-crate | 2026-04-27 | OPEN | **High** | 已有 PR #5053，Ready for Review |
| [#4805](https://github.com/librefang/librefang/issues/4805) | On-demand tool loading | 2026-05-08 | OPEN | High | 已有 PR #5073，今日提交 |
| [#4807](https://github.com/librefang/librefang/issues/4807) | Budget-aware fallback chain | 2026-05-08 | OPEN | High | 已有 PR #5067，今日提交 |
| [#4982](https://github.com/librefang/librefang/issues/4982) | Rich workflow invocation | 2026-05-12 | OPEN | High | 已有 PR #5075，今日提交 |
| [#4983](https://github.com/librefang/librefang/issues/4983) | Async task tracker | 2026-05-12 | OPEN | High | 已有 PR #5033，Ready for Review |
| [#4980](https://github.com/librefang/librefang/issues/4980) | Non-agent operator nodes | 2026-05-12 | OPEN | High | 已有 PR #5035，Ready for Review |
| [#5069](

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# OpenFang 项目日报

**报告日期**: 2026-05-16  
**数据来源**: github.com/RightNow-AI/openfang  
**报告周期**: 过去 24 小时

---

## 1. 今日速览

过去 24 小时内，OpenFang 项目整体活跃度处于**低水平稳定状态**。项目未产生新的 Issue 报告，PR 提交流量为 1 条，功能开发工作持续推进中。今日唯一待处理事项为 PR #1203 的 MCP 推送通知功能，该 PR 由贡献者 @Streamweaver 于 2026-05-15 创建并提交审核，目前处于待合并状态，社区暂无反馈互动（0 评论、0 👍）。建议维护者关注该 PR 的代码审查进展，以推进 MCP 资源订阅功能的集成工作。

---

## 2. 版本发布

**无新版本发布**

过去 24 小时内项目未发布任何新版本或预发布版本。如有版本更新需求，请参考 [Releases 页面](https://github.com/RightNow-AI/openfang/releases)。

---

## 3. 项目进展

### 待合并 PR

| # | 标题 | 作者 | 创建时间 | 状态 |
|---|------|------|----------|------|
| [#1203](https://github.com/RightNow-AI/openfang/pull/1203) | feat(mcp): support push notifications | @Streamweaver | 2026-05-15 | 待合并 |

**PR #1203 详情摘要**：

该 PR 在类型层、运行时层和内核层全面实现了 MCP 资源推送通知支持，主要功能包括：

- 支持订阅 MCP 资源并接收服务端推送通知
- 将通知桥接至内核事件系统
- 实现 MCP 重连后的订阅重放机制

该功能引用了 Issue #1096，标志着 OpenFang 在 MCP (Model Context Protocol) 集成方面的重要扩展，为项目构建实时事件驱动架构奠定了基础。

---

## 4. 社区热点

**今日无活跃讨论**

过去 24 小时内无新增 Issue 评论或讨论。PR #1203 目前处于开放状态但尚未收到社区反馈（0 评论）。

> **建议**：如对该功能感兴趣，可前往 [PR #1203](https://github.com/RightNow-AI/openfang/pull/1203) 参与讨论或提供代码审查意见。

---

## 5. Bug 与稳定性

**今日无 Bug 报告**

过去 24 小时内项目未收到任何 Bug 报告、崩溃反馈或回归问题。项目整体稳定性维持良好状态。

---

## 6. 功能请求与路线图信号

### 今日新增功能请求

**MCP 推送通知支持** ([PR #1203](https://github.com/RightNow-AI/openfang/pull/1203))

该功能请求反映了用户对以下能力的诉求：

- **实时事件同步**：订阅 MCP 资源变更通知，无需轮询即可获取服务端更新
- **连接韧性**：MCP 服务端重连后自动恢复订阅状态
- **事件驱动架构**：将外部资源变化桥接为内核事件，支持更灵活的业务逻辑编排

**路线图信号分析**：结合 Issue #1096 的引用，该功能可能是 MCP 集成路线图中的关键里程碑。若成功合并，将为后续 MCP 服务发现、动态资源配置等功能奠定基础。

---

## 7. 用户反馈摘要

**今日无用户反馈**

过去 24 小时内未产生新的 Issue 评论或讨论。如需了解历史用户反馈，请查阅 [Issues 页面](https://github.com/RightNow-AI/openfang/issues)。

---

## 8. 待处理积压

### 长期未响应项目

| 类型 | 编号 | 摘要 | 状态 |
|------|------|------|------|
| PR | [#1203](https://github.com/RightNow-AI/openfang/pull/1203) | MCP 推送通知功能支持 | 待合并（2026-05-15 创建）|

**积压分析**：

- **PR #1203**：该 PR 已创建超过 24 小时，目前处于待合并状态。考虑到功能实现较为完整（涉及类型、运行时、内核三层改动），建议维护者尽快进行代码审查并给出反馈意见，以避免贡献者等待时间过长。

> ⚠️ **提醒维护者**：PR #1203 已提交超过 24 小时，请关注审核进度。

---

## 📊 项目健康度指标

| 指标 | 数值 | 评估 |
|------|------|------|
| 新 Issue 数量 | 0 | 🟢 正常 |
| 新 PR 数量 | 1 | 🟢 正常 |
| Bug 报告数 | 0 | 🟢 无异常 |
| 待处理 PR | 1 | 🟡 需关注 |
| 版本发布 | 0 | 🟢 正常 |

---

**报告生成时间**: 2026-05-16  
**数据截止时间**: 2026-05-15 23:59 UTC

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*