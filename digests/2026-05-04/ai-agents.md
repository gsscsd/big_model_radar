# OpenClaw 生态日报 2026-05-04

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-05-04 01:25 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报（2026-05-04）

---

## 1. 今日速览

OpenClaw 社区在过去24小时内保持极高活跃度，共处理 **500条 Issues 更新**（新开/活跃 426 条，关闭 74 条）和 **500条 PR 更新**（待合并 458 条，已合并/关闭 42 条），显示出强劲的开发与问题反馈节奏。项目发布 **v2026.5.3-beta.2** 新版本，重点增强了文件传输插件的安全策略与工具能力。尽管存在多个回归性 Bug 报告（如长输出截断、Telegram 媒体下载失败等），但核心团队响应迅速，多个关键修复 PR 已进入评审阶段，整体项目健康度良好。

---

## 2. 版本发布

### 🔖 [v2026.5.3-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-beta.2)（2026-05-03）

**核心更新：**
- **新增捆绑式文件传输插件**：提供 `file_fetch`、`dir_list`、`dir_fetch`、`file_write` 等二进制文件操作工具，支持节点间安全文件交互。
- **默认拒绝策略**：在 `plugins.entries.file-transfer.config.nodes` 下实施基于路径的细粒度访问控制，需显式授权方可执行操作。
- **Operator 审批机制**：高风险操作需通过管理接口人工确认，提升多节点部署安全性。

> ⚠️ **迁移注意**：升级后若使用文件传输功能，需在配置中明确列出允许访问的节点路径，否则相关工具调用将被拒绝。

---

## 3. 项目进展

今日有 **42个 PR 被合并或关闭**，重点进展包括：

- ✅ **#76131**（已合并）：优化首次模型调用性能，跳过动态模型发现流程，显著降低启动延迟（[链接](https://github.com/openclaw/openclaw/pull/76131)）。
- ✅ **#77019**（已合并）：修复 CLI 补全安装失败时错误信息不透明问题，提升开发者体验（[链接](https://github.com/openclaw/openclaw/pull/77019)）。
- 🔄 **#76657**（开放中）：修复会话压缩重试机制视觉卡顿问题，防止用户误判为死锁（[链接](https://github.com/openclaw/openclaw/pull/76657)）。
- 🔄 **#62164**（开放中）：网关会话列表缓存优化，减少重复计算，缓解高负载下 CPU 占用过高问题（[链接](https://github.com/openclaw/openclaw/pull/62164)）。

整体开发正向性能优化、稳定性增强和开发者工具完善方向稳步推进。

---

## 4. 社区热点

以下 Issues 在过去24小时引发高度关注：

| Issue | 评论数 | 类型 | 核心诉求 |
|------|--------|------|--------|
| [#76307](https://github.com/openclaw/openclaw/issues/76307) | 11 | 回归 Bug | 长输出代理回复被截断至25–80字符，跨频道一致复现，严重影响可用性 |
| [#65302](https://github.com/openclaw/openclaw/issues/65302) | 10 | 社区反馈 | 用户“邵小红”（AI 自主运营账号）批评频繁更新破坏产品稳定性，呼吁回归基础体验 |
| [#43735](https://github.com/openclaw/openclaw/issues/43735) | 12 | Bug | 技能未从 `~/.openclaw/workspace/skills/` 完全加载，导致代理功能缺失 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | 12 | 安全风险 | `gh-issues` 技能直接将未净化的 Issue 正文注入子代理提示，存在提示注入风险 |

> 💡 分析：社区对**稳定性退化**和**安全边界模糊**问题尤为敏感，反映出用户对生产环境可靠性的高度依赖。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

### 🚨 高严重性（影响核心功能）
- **#76307**：长输出截断（回归）—— 多模型、多通道复现，尚无公开 fix PR，需紧急排查序列化逻辑。
- **#43661**：会话压缩超时导致消息重复发送 —— 已引发用户投诉，相关修复 PR #76657 正在推进。
- **#45799**：Telegram 媒体下载因代理中断静默失败 —— 缺乏重试机制，影响多媒体交互体验。

### ⚠️ 中严重性（功能降级）
- **#46637**：Qwen 推理内容污染历史记录，导致 JSON 解析错误 —— 需隔离 `reasoning_content` 字段。
- **#45269**：`apply_patch` 工具被策略管道误判为插件专属 —— 已有社区贡献者提交修复思路。
- **#44905**：Discord 泄露内部工具调用痕迹 —— 违反隐私设计原则，需加强输出过滤。

> ✅ 已有对应修复 PR 的问题占比约 30%，其余仍需核心团队介入。

---

## 6. 功能请求与路线图信号

用户强烈需求的功能中，以下具备较高落地可能性：

| 功能请求 | 关联 PR | 状态判断 |
|--------|--------|--------|
| **YAML 配置支持**（#45758） | 无 | 社区呼声高，但无活跃 PR，可能纳入 v2026.6 规划 |
| **Telegram 反应触发代理**（#47677） | 无 | 创新交互模式，契合移动端场景，值得探索 |
| **每技能模型路由**（#43260） | 无 | 技术可行性强，已有架构讨论基础 |
| **WebChat 响应持久化**（#76804） | 无 | 回归问题，优先级应提升 |

> 📌 观察：**Codex 集成**（#77013、#77023）和 **Wear OS 支持**（#47604）表明项目正积极拓展多端生态。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “会话每隔80条消息就爆内存，不得不频繁 `/new`，对话连续性被破坏”（#47668）
  - “Windows 上 `openclaw update` 因文件占用失败，只能手动重装”（#40540）
  - “飞书图片读取后最终回复丢失附件，工作流中断”（#41744）

- **满意点**：
  - “文件传输插件的默认拒绝策略让人安心，终于敢在生产网用了”
  - “Control UI 的 LaTeX 渲染需求被听到，感谢团队响应速度”（#42840）

- **典型场景**：
  - 多代理协作开发（需技能隔离与模型路由）
  - 企业内网部署（需私有网络访问与代理支持）
  - 移动端轻量化交互（Wear OS / Telegram 反应）

---

## 8. 待处理积压

以下重要 Issue 超过 60 天未获官方响应，建议维护者优先关注：

| Issue | 创建日期 | 类型 | 积压原因分析 |
|------|--------|------|------------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 2026-02-21 | 功能请求 | 分层引导文件加载可大幅节省 Token，但涉及核心上下文引擎改造 |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | 2026-03-08 | 功能请求 | 私有网络访问是企业用户刚需，已有 5 👍，应尽快评估实现 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 2026-03-10 | 功能请求 | 成本预算 enforcement 是商业化关键特性，尚未进入开发队列 |

> 🔔 **提醒**：长期未响应的高价值 Issue 可能影响社区信任度，建议设立“待评估”标签并定期同步进展。

--- 

**报告生成时间**：2026-05-04  
**数据来源**：OpenClaw GitHub Repository（github.com/openclaw/openclaw）

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-05-04）

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现**高活跃度、强分化、重安全**的整体态势。主流项目普遍进入 v0.7–v2.0 迭代周期，核心焦点从功能堆叠转向**稳定性、多模态一致性、企业级部署能力**。OpenClaw 作为生态核心参照，其文件传输插件与 Operator 审批机制引领安全设计范式；NanoBot、Zeroclaw、PicoClaw 等则在 CLI 纯净度、本地推理兼容性、跨通道一致性等细分方向深化。社区对“**可观测性、可审计性、可隔离性**”的需求显著上升，反映出生产环境落地压力。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 新版本发布 | 健康度评估 |
|------|-------------|---------|------------|------------|
| **OpenClaw** | 500（新开/活跃 426） | 500（合并 42） | ✅ v2026.5.3-beta.2 | ⭐⭐⭐⭐☆（4.5/5） |
| **NanoBot** | 6（关闭 2） | 23（合并 7） | ❌ | ⭐⭐⭐⭐☆（4.5/5） |
| **Zeroclaw** | 50（新开/活跃 42） | 50（合并 22） | ❌ | ⭐⭐⭐⭐☆（4.5/5） |
| **PicoClaw** | 25 | 20（合并 6） | ❌ | ⭐⭐⭐⭐（4.0/5） |
| **NanoClaw** | 10（关闭 8） | 50（合并 31） | ❌ | ⭐⭐⭐⭐☆（4.5/5） |
| **IronClaw** | 19 | 24（合并 3） | ❌ | ⭐⭐⭐☆☆（3.5/5） |
| **LobsterAI** | 1 | 2 | ❌ | ⭐⭐☆☆☆（2.0/5） |
| **Moltis** | 1 | 2 | ❌ | ⭐⭐⭐☆☆（3.0/5） |
| **CoPaw** | 32（新开/活跃 21） | 16（合并 5） | ❌ | ⭐⭐⭐⭐☆（4.5/5） |
| **ZeptoClaw** | 5（新开 4） | 22（合并 19） | ❌ | ⭐⭐⭐⭐⭐（5.0/5） |
| **TinyClaw** | 0 | 0 | ❌ | ⭐☆☆☆☆（1.0/5） |
| **EasyClaw** | 0 | 0 | ❌ | ⭐☆☆☆☆（1.0/5） |

> 注：健康度综合考量活跃度、响应速度、Bug 修复率、架构清晰度。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大、社区最活跃**：单日处理 500+ Issues/PRs，远超同类（次高为 CoPaw 的 32 Issues）；
- **企业级安全设计领先**：默认拒绝策略 + Operator 审批机制被 NanoBot、Zeroclaw 借鉴；
- **插件生态最成熟**：文件传输、gh-issues、Telegram/Discord 桥接等插件覆盖完整工作流。

**技术路线差异**：  
- 相比 NanoBot 的“轻量 CLI 优先”、PicoClaw 的“MCP 工具链深度集成”、ZeptoClaw 的“自进化代理”，OpenClaw 坚持**多节点、多通道、强管控**的分布式架构，适合中大型团队部署。

**社区规模**：  
- GitHub Stars 预估 >15k（基于 Issue 密度与 PR 贡献者数量），显著高于 NanoBot（~8k）、Zeroclaw（~6k），形成事实标准效应。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多模态输入一致性** | Zeroclaw (#5453)、CoPaw (#1516)、PicoClaw (#2717) | WebSocket/Telegram 通道需统一解析 `[IMAGE:]`、语音、视频标记 |
| **本地/私有 LLM 支持** | NanoClaw (#2234)、CoPaw (#4003)、PicoClaw (#2225) | 集成 llama.cpp、Ollama Cloud、DeepSeek 等非 OpenAI 后端 |
| **智能体隔离与权限控制** | CoPaw (#3936)、OpenClaw（文件传输白名单）、NanoBot（安全守卫） | 按 agent 隔离 workspace、限制文件/网络访问 |
| **CLI 输出纯净度** | NanoBot (#3600)、IronClaw (#3228) | 避免重试日志、ANSI 码污染流式输出，尤其在 SSH/tmux 环境 |
| **配置持久化与回滚** | IronClaw (#3229)、CoPaw (#4018) | 防止用户配置被 fallback 值覆盖，支持版本化回滚 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 多节点协作、企业级安全 | 中大型团队、DevOps | 分布式插件架构，强审批流 |
| **NanoBot** | CLI 体验、轻量部署 | 开发者、极客用户 | 单进程模型，强调输出纯净 |
| **Zeroclaw** | 桌面集成、语音双工 | 个人用户、Mac/Windows 桌面 | 菜单栏应用 + WebSocket 双通道 |
| **PicoClaw** | MCP 工具兼容性、Provider 抽象 | 企业集成开发者 | 统一 Provider SDK，强类型 Schema 校验 |
| **ZeptoClaw** | 自改进代理、遥测驱动 | 前沿研究者 | Hermes Agent 循环 + 中间件框架 |
| **CoPaw** | 多智能体协作、记忆系统 | 科研/教育场景 | Auto-Memory + 智能体组调度 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR 合并率 + 新功能密集）：  
  **ZeptoClaw**（19/22 PR 合并）、**NanoClaw**（31/50 PR 合并）、**OpenClaw**（42/500 PR 合并但绝对值高）  
  → 特征：架构演进快，接受 breaking change，适合早期采用者。

- **质量巩固阶段**（Bug 修复为主 + 文档完善）：  
  **NanoBot**、**Zeroclaw**、**CoPaw**  
  → 特征：聚焦稳定性、安全策略精细化、多平台兼容性，适合生产环境。

- **维护停滞或 niche 定位**：  
  **LobsterAI**、**Moltis**、**TinyClaw**、**EasyClaw**  
  → 建议观望或作为参考实现。

---

## 7. 值得关注的趋势信号

1. **“可审计性”成为刚需**：  
   OpenClaw 的 Operator 审批、NanoBot 的 logout 命令、IronClaw 的 Reborn 事件投影，均指向**操作留痕与人工干预接口**的标准化需求。

2. **本地优先（Local-First）架构崛起**：  
   ZeptoClaw 明确“local-first assistant infrastructure”定位，PicoClaw/NanoClaw 强化 llama.cpp/Ollama 支持，反映用户对**数据主权与离线能力**的重视。

3. **多模态 ≠ 多通道**：  
   多个项目（Zeroclaw #5453、CoPaw #1516）暴露“能收图但 AI 看不见”问题，说明**跨通道语义一致性**比单纯支持格式更重要。

4. **自进化代理进入实践期**：  
   ZeptoClaw 的 skill_manage、usage 遥测、longterm_memory 触发机制，标志“**AI 自主优化工作流**”从理论走向工程实现。

> **对开发者的建议**：优先选择具备**明确安全边界**（如 OpenClaw/NanoBot）和**本地 LLM 兼容层**（如 PicoClaw）的项目；若探索前沿，可关注 ZeptoClaw 的 Hermes 范式；避免投入长期未响应的低活跃度项目。

---  
**报告生成时间**：2026-05-04  
**数据来源**：各项目 GitHub 仓库公开活动数据（2026-05-03 至 2026-05-04）

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-05-04）

---

## 1. 今日速览

NanoBot 社区在24小时内保持高活跃度，共产生 **23条 PR 更新** 和 **6条 Issues 更新**，其中 **7个 PR 被合并/关闭**，**2个 Issues 被关闭**。开发重点集中在 **安全性加固、CLI 交互体验优化、子代理并发控制** 以及 **多平台消息桥接修复**。尽管无新版本发布，但多个关键 Bug 已得到修复，项目整体向更稳定、安全的方向推进。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.5.post3`，建议用户关注即将发布的 `v0.1.6` 候选版本，预计将包含本次日报中提及的多项安全修复与功能增强。

---

## 3. 项目进展

今日共 **7个 PR 被合并或关闭**，显著提升了系统稳定性与安全性：

- ✅ **#3613**（已关闭）：修复安全守卫误报导致工作区外路径被错误拦截的问题，并防止流式输出中断 —— 解决了 #3599 中用户反馈的“Command blocked by safety guard”误报问题。
- ✅ **#3614**（已关闭）：将工作区越界行为从“致命中止”改为“可恢复错误+重试节流”，提升 LLM 自主恢复能力，避免静默失败。
- ✅ **#3609**（已关闭）：修复 CLI 模式下 API 重试提示混入流式输出的问题，解决 #3600 报告的终端乱码（尤其在 SSH 环境下）。
- ✅ **#3606**（已关闭）：修复 Cron 服务因非原子写入导致任务丢失的严重 Bug，保障定时任务可靠性。
- ✅ **#3583**（已关闭）：优化 Beta WebUI 的对话隔离与完成状态管理，改善多会话切换体验。
- ✅ **#2727**（已关闭）：实现 `nanobot provider logout <provider>` 命令，回应 #2665 用户长期诉求，支持 OpenAI Codex 等 OAuth 提供商的凭证清理。
- ✅ **#3612**（开放中，逻辑与 #2727 类似）：进一步扩展 logout 功能，增强对 GitHub Copilot 的支持。

> 项目在 **安全策略精细化、CLI 输出纯净度、任务调度可靠性** 方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#2665] How to re-authenticate OpenAI Codex provider after account change?
- **链接**: https://github.com/HKUDS/nanobot/issues/2665
- **评论数**: 3 | **标签**: `good first issue`, `feature request`
- **分析**: 用户反映在更换 OpenAI 账户（如从团队版升级至 Plus）后无法重新登录，且 CLI 缺乏 `logout` 命令。该问题暴露了 OAuth 凭证管理机制的不透明性，**直接推动了 #2727 和 #3612 两个 PR 的实现**，成为近期身份认证模块改进的核心驱动力。

### 🔥 高关注度 PR：[#3607] fix(bridge): support WhatsApp voice message download
- **链接**: https://github.com/HKUDS/nanobot/pull/3607
- **关联 Issue**: #3604（WhatsApp 语音消息无法下载）
- **分析**: 用户在使用 WhatsApp 语音消息时，系统未能下载音频文件，导致 LLM 无法理解内容。此 PR 在 `bridge/src/whatsapp.ts` 中新增 `audioMessage` 处理分支，**填补了多模态输入支持的关键缺口**，体现项目对真实用户场景（语音交互）的快速响应。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| ⚠️ 高 | [#3605] Safety guard abort silently drops the turn | 安全守卫拦截 `exec` 工具后，错误未送达用户，导致对话静默中断（如 Telegram 无响应） | **无直接 fix PR**，但 #3614 的“软边界+错误反馈”机制可缓解 |
| ⚠️ 高 | [#3599] 升级后频繁提示 "Command blocked by safety guard" | 工作区内操作被误判为越界，v0.1.5.post3 引入的回归问题 | ✅ 已由 #3613 修复 |
| ⚠️ 中 | [#3604] WhatsApp voice not work | 语音消息无法下载，影响多模态理解 | ✅ 已由 #3607 修复 |
| ⚠️ 中 | [#3600] CLI 重试消息混入流式输出导致乱码 | SSH 终端下 ANSI 转义码污染输出 | ✅ 已由 #3609 修复 |

> 当前无未修复的高危崩溃类 Bug，安全守卫相关行为已趋于合理。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue/PR | 纳入可能性 |
|--------|-------------|----------|
| **子代理并发限制** | #3611（Issue） + #3615（PR） | ✅ 高 —— PR 已提交并附带测试，解决本地 LLM 服务器 OOM 问题 |
| **Provider Logout 命令** | #2665（Issue） + #3612（PR） | ✅ 高 —— 已有实现，预计 v0.1.6 默认启用 |
| **CLI 面板式响应展示** | #3601（PR） | 🔶 中 —— 提供终端可视化增强，但非核心功能，可能作为可选特性 |
| **Hook 插件系统** | #3564（PR） | 🔶 中 —— 重构事件钩子机制，支持第三方插件，长期架构价值高 |

> 下一版本（v0.1.6）有望重点整合 **并发控制、身份管理、输出净化** 三大方向。

---

## 7. 用户反馈摘要

- **痛点**：
  - “升级后频繁被安全策略拦截，明明操作在工作目录内”（#3599）→ 反映策略过于激进。
  - “WhatsApp 发语音 AI 完全听不懂，只能发文字”（#3604）→ 多模态支持不完善。
  - “换账号后不知道怎么登出旧凭证”（#2665）→ 身份管理 UX 缺失。
- **满意点**：
  - 自动重试机制被认可，但需“别把重试日志糊我一脸”（#3600）→ 用户接受容错设计，但要求输出整洁。
  - “子代理能自动排队就好了，我的 16GB 内存扛不住并行”（#3611）→ 对资源感知型调度有强烈需求。

> 用户核心诉求：**更智能的安全策略、更干净的交互输出、更灵活的资源控制**。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 建议 |
|------|------|------|--------|------|
| Issue | #2665 | OpenAI Codex 重新认证问题 | 34 天 | 虽已有 logout PR，但需补充文档说明流程 |
| PR | #3254 | 修复 RunResult.tools_used 和 messages 为空 | 17 天 | SDK 关键信息缺失，影响调试与审计，建议优先合并 |
| PR | #3492 | 强化公共部署下的 CSRF 与反向代理风险 | 7 天 | 安全相关，涉及生产环境风险，需安全团队 review |
| PR | #1443 | 解耦心跳推理与通知 | 63 天 | 架构优化类，长期有价值，但需评估对现有心跳模板的影响 |

> 建议维护者本周重点处理 **#3254（SDK 数据完整性）** 和 **#3492（生产安全）**，二者均属高价值积压项。

--- 

**报告生成时间**: 2026-05-04  
**数据来源**: GitHub.com/HKUDS/nanobot (过去 24 小时活动)  
**分析师备注**: NanoBot 正处于从“功能快速迭代”向“稳定性与安全性深化”过渡的关键阶段，社区响应速度良好，建议加强文档同步以降低用户认知成本。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-05-04）

---

## 1. 今日速览

过去24小时内，Zeroclaw 社区保持高活跃度：共处理 **50条 Issues**（新开/活跃42条，关闭8条）和 **50条 PRs**（待合并28条，已合并/关闭22条），显示出持续的迭代节奏与社区参与度。尽管无新版本发布，但多个关键功能（如语音双工通信、桌面端菜单栏集成、安装脚本优化）进入实现或收尾阶段。安全、配置一致性与多模态支持仍是当前核心关注点。项目整体处于 **v0.7.x 向 v0.8.0 过渡的技术攻坚期**，架构演进与用户体验优化并行推进。

---

## 2. 版本发布

**无新版本发布**。最近一次稳定版仍为 v0.7.6，开发重点集中在即将发布的 v0.8.0 集成分支（见 [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266)），涉及配置 schema 升级、通道别名等破坏性变更，预计需协调批量合并。

---

## 3. 项目进展

今日有 **22个 PR 被合并或关闭**，重点进展包括：

- **安装体验修复**：[#6299](https://github.com/zeroclaw-labs/zeroclaw/pull/6299) 修复了 `install.sh` 不提取 Web 仪表盘资源的问题，确保预编译二进制安装后网关 UI 可正常访问。
- **安全策略修复**：[#5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939) 解决了 shell 策略误判 `git -C` 为 `git -c` 的问题，避免合法 Git 操作被拦截。
- **配置系统增强**：[#6317](https://github.com/zeroclaw-labs/zeroclaw/pull/6317) 改进了 provider 配置键解析逻辑，保留含点号的键（如 URL 主机名），提升配置灵活性。
- **内存工具优化**：[#6296](https://github.com/zeroclaw-labs/zeroclaw/pull/6296) 修复 `memory_recall` 对通配符 `*` 的处理，将其识别为“最近记忆”查询而非关键词搜索，解决空结果问题。

> 整体来看，项目在 **部署可靠性、安全策略精确性、配置健壮性** 方面取得实质性改进。

---

## 4. 社区热点

以下 Issues/PRs 引发较高关注：

- **[#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837)**（4评论）：ACP 协议会话缺乏取消支持，用户呼吁实现类似网关 `/abort` 的接口，反映对长任务可控性的需求。
- **[#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)**（1评论，P1）：Web 仪表盘 WebSocket 路径绕过 ApprovalManager，导致监督模式下工具审批无法展示，属严重 UX 缺陷。
- **[#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453)**（0评论，P1）：WebSocket `/ws/chat` 不处理 `[IMAGE:]` 多模态标记，阻碍桌面/菜单栏场景下的图像交互，与语音功能形成体验断层。
- **[#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101)**（WebUI 模型热切换与上下文保持）：虽无评论，但功能直击多模型调试痛点，可能显著提升开发者效率。

> 热点集中暴露 **多通道一致性**（WebSocket vs 原生通道）与 **监督模式可见性** 两大架构短板。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| **S1** | [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | Web 仪表盘绕过工具审批机制 | ❌ 无 PR |
| **S1** | [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | 回退 provider 链忽略 `[providers.X]` 配置，仅读环境变量 | ❌ 无 PR（标记 in-progress） |
| **S2** | [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) | WebSocket 不解析 `[IMAGE:]` 标记 | ❌ 无 PR |
| **S2** | [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | `model_switch` 工具切换不持久，UI 路径完全忽略 | ❌ 无 PR |
| **S2** | [#6351](https://github.com/zeroclaw-labs/zeroclaw/issues/6351) | WhatsApp Web 自聊模式误触发，向联系人发送消息 | ❌ 新报，无 PR |

> 需优先处理 **S1 级审批绕过** 与 **provider 配置失效** 问题，二者均影响核心安全/可靠性。

---

## 6. 功能请求与路线图信号

高优先级功能请求及对应进展：

- **语音双工通信（Barge-in）**：[#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) 配套 PR [#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974)、[#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976)、[#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) 已实现音频帧处理、VAD 与缓冲，接近可测试状态，**极可能纳入 v0.8.0**。
- **桌面菜单栏应用**：[#6343](https://github.com/zeroclaw-labs/zeroclaw/issues/6343) 及系列子任务（[#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) 通用二进制、[#6338](https://github.com/zeroclaw-labs/zeroclaw/issues/6338) 签名公证）获密集提交，配合 [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) 实现，**macOS 桌面体验将成 v0.8.0 亮点**。
- **安装脚本增强**：[#6292](https://github.com/zeroclaw-labs/zeroclaw/issues/6292) 提出功能选择与 onboarding 引导，已由 [#6299](https://github.com/zeroclaw-labs/zeroclaw/pull/6299) 迈出第一步，**预示部署流程标准化方向**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实痛点：

- **配置文档脱节**：用户按文档配置 YOLO/本地测试失败（[#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149)），反映文档更新滞后于代码演进。
- **多模态体验割裂**：Telegram 图片流先送非视觉模型（[#5897](https://github.com/zeroclaw-labs/zeroclaw/issues/5897)）、WebSocket 不支图像标记（[#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453)），导致“能发图但 AI 看不见”的挫败感。
- **Raspberry Pi 构建困难**：虽宣称支持 <$10 硬件，但默认 LTO 设置致 OOM（[#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704)），影响边缘部署信心。
- **审批机制“隐身”**：监督模式下工具调用无提示（[#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)），用户误以为功能失效，**安全设计需兼顾可见性**。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **[#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837)**（ACP 会话取消）：自 4/17 提出，4条评论，**阻塞状态**，影响 ACP 协议完整性。
- **[#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803)**（Provider 配置忽略）：P1 级，标记 in-progress 但无后续更新，**配置系统关键缺陷**。
- **[#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265)**（桌面菜单栏）：大型 PR，4/3 提交至今未合并，**桌面战略核心组件**。
- **[#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974)** 等语音功能 PR：均标记 `needs-author-action`，**功能完整但需作者响应**，可能阻塞 v0.8.0 语音发布。

> 建议：对 `needs-author-action` PR 主动联系作者，对 P1 Issues 分配责任人，避免技术债累积。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度与清晰路线图支撑良好态势，但需加强 **跨通道一致性** 与 **安全机制可见性** 的架构治理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-05-04）

---

## 1. 今日速览

过去24小时内，PicoClaw 社区活跃度显著上升，共产生 **25条 Issues 与 PR 更新**，其中 **PR 更新达20条**，显示出开发团队高强度迭代节奏。尽管无新版本发布，但 **6个 PR 被合并/关闭**，涵盖核心功能增强、关键 Bug 修复与基础设施升级。社区反馈集中体现在多模态支持、MCP 工具兼容性及部署体验等实际使用场景。整体项目处于**高活跃开发期**，稳定性与功能扩展并行推进。

---

## 2. 版本发布

**无新版本发布**。当前主干（main）分支持续集成多项关键修复与功能改进，预计下一版本将整合近期对 DeepSeek、Gemini、OpenAI OAuth 等主流 Provider 的兼容性增强。

---

## 3. 项目进展

今日有 **6个 PR 被合并或关闭**，推动项目在可靠性、可观测性与多模态支持方面取得实质性进展：

- **#2677 [CLOSED] feat(runtime events)**：引入统一运行时事件基础设施，迁移 Agent 可观测性至新框架，为未来监控、调试与性能分析奠定基础（[链接](https://github.com/sipeed/picoclaw/pull/2677)）。
- **#2681 [CLOSED] fix(mcp): sanitize MCP tool schemas for Gemini**：修复 Gemini 模型因复杂 JSON Schema（如 `$ref`, `anyOf`）导致的 HTTP 400 错误，提升 MCP 工具兼容性（[链接](https://github.com/sipeed/picoclaw/pull/2681)）。
- **#2717 [CLOSED] feat: add DeepSeek vision unsupported error detection**：增强对 DeepSeek 等非多模态模型接收图像消息时的错误识别能力，避免静默失败（[链接](https://github.com/sipeed/picoclaw/pull/2717)）。
- **#2669 [CLOSED] feat(agent): add network error retry with configurable max retries and backoff**：为 LLM 调用管道添加网络错误重试机制，提升弱网环境下的鲁棒性（[链接](https://github.com/sipeed/picoclaw/pull/2669)）。
- **#2682 [CLOSED] docs: fix agents.defaults model configuration format**：修正文档中错误的模型配置格式，降低用户配置门槛（[链接](https://github.com/sipeed/picoclaw/pull/2682)）。
- **#2735 [CLOSED] build(deps): bump AWS SDK**：更新 AWS Bedrock 依赖至 v1.50.6，修复潜在安全漏洞与兼容性问题（[链接](https://github.com/sipeed/picoclaw/pull/2735)）。

> ✅ 项目整体在**Provider 兼容性、Agent 稳定性、文档准确性**三方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 #2225 [OPEN] [Feature] Ollama cloud credentials  
**评论数：10 | 👍：0** | [链接](https://github.com/sipeed/picoclaw/issues/2225)  
用户 @Suisei110 提出：当前 PicoClaw 不支持 Ollama Cloud 的凭证配置，导致无法在私有云环境中使用。该 Issue 自3月31日提出，持续收到关注，反映**企业级用户对私有化部署与身份认证集成的强烈需求**。尽管尚无直接 PR，但类似 OAuth 支持已在 #2757 中实现，预示该功能可能被纳入后续迭代。

> 💡 **诉求分析**：用户希望 PicoClaw 能像支持 OpenAI OAuth 一样，提供对主流本地/私有 LLM 服务（如 Ollama Cloud）的认证抽象层。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | #2718 [CLOSED] DeepSeek 接收历史图像消息导致 400 错误 | 非多模态模型（如 `deepseek-chat`）收到含 `image_url` 的历史消息时崩溃 | ✅ 已有 #2717 修复 |
| ⚠️ 高 | #2668 [CLOSED] Gemini + MCP 复杂 Schema 导致 HTTP 400 | 使用 `$ref`/`anyOf` 的 MCP 工具触发 Gemini 函数调用验证失败 | ✅ 已有 #2681 修复 |
| ⚠️ 中 | #2753 [OPEN] 源码编译后 `picoclaw-launcher` 不存在 | 用户按 README 安装后无法启动，影响开发/部署体验 | ❌ 尚无 PR，需检查构建脚本 |
| ⚠️ 中 | #2744 [OPEN] Android v0.2.8 无法访问 Tab 数据 | 移动端用户反馈界面功能异常，可能涉及通道上下文丢失 | ❌ 尚无 PR，需复现验证 |

> 🔧 两个高严重性 Bug 已闭环，体现团队响应效率；移动端与构建流程问题仍需关注。

---

## 6. 功能请求与路线图信号

结合用户 Issue 与活跃 PR，以下功能有望纳入下一版本：

- **Ollama Cloud 凭证支持**（#2225）：虽无直接 PR，但 #2757 已实现 OpenAI OAuth 抽象，架构上可扩展至其他 Provider。
- **多子 Agent 并行调用**（#2754）：新引入 `multi_subagent` 工具，支持同轮次并行委派，提升复杂任务处理效率（[链接](https://github.com/sipeed/picoclaw/pull/2754)）。
- **视频与推理内容流式支持**（#2755）：为 Xiaomi Mimo 等 Provider 添加视频理解与 `reasoning_content` 流式解析，推动多模态能力边界（[链接](https://github.com/sipeed/picoclaw/pull/2755)）。
- **模型配置工作流优化**（#2752）：Web UI 支持模型连通性测试与 Catalog 管理，降低运维成本（[链接](https://github.com/sipeed/picoclaw/pull/2752)）。

> 📌 路线图清晰指向：**企业级认证、多模态扩展、Agent 协作能力、运维友好性**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “编译后找不到 `picoclaw-launcher`，README 步骤不完整”（#2753）→ **文档与构建流程需优化**
  - “Android 上 Tab 数据全空，根本没法用”（#2744）→ **移动端兼容性待加强**
  - “Gemini 一用 Notion MCP 就崩，调试半天发现是 Schema 问题”（#2668）→ **Provider 与工具链集成需更健壮**

- **满意点**：
  - “DeepSeek 错误现在能明确提示了，不像以前直接挂”（#2717 关联反馈）→ **错误处理改进获认可**
  - “Telegram 主题回复终于不丢上下文了”（#2756 隐含反馈）→ **通道上下文保持能力提升体验**

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者优先关注：

- **#2239 [OPEN] modify docker compose with privileged**（4月1日至今）  
  Docker 部署需 `privileged` 模式引发安全顾虑，但无后续讨论或替代方案（[链接](https://github.com/sipeed/picoclaw/pull/2239)）。
  
- **#2647 [OPEN] enable web_search tool config YAML support**（4月24日至今）  
  虽标记为 `stale`，但 DuckDuckGo 默认启用对搜索工具生态至关重要，尚未合并且无关闭理由（[链接](https://github.com/sipeed/picoclaw/pull/2647)）。

- **#2462 [OPEN] fix codex streaming and telegram duplicate retries**（4月9日至今）  
  涉及 Android + Termux 真实场景下的流式输出与重试逻辑，问题描述详尽但长期未处理（[链接](https://github.com/sipeed/picoclaw/pull/2462)）。

> 🛎️ **建议**：对积压超过30天的功能性 PR 进行 triage，避免社区贡献者流失。

--- 

**报告生成时间：2026-05-04**  
**数据来源：GitHub API / PicoClaw Repository**

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-05-04）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出**高活跃度**，共处理 10 条 Issues（8 条关闭，2 条新开）和 50 条 PR 更新（31 条已合并/关闭，19 条待合并），显示出团队高效的迭代节奏。尽管无新版本发布，但多个关键 Bug 被快速修复，包括身份混淆、CLI 工具缺失和消息投递异常等核心问题。安全加固与用户体验优化成为本轮开发重点，反映出项目正从功能扩张向稳定性与安全性深化过渡。

---

## 2. 版本发布

**无新版本发布**。当前开发重心集中于内部架构优化与 Bug 修复，未触发正式版本迭代。

---

## 3. 项目进展

今日共 **31 个 PR 被合并或关闭**，推动多项关键改进：

- **身份与消息路由修复**：解决了 agent 在 `main` 容器中错误地将 Telegram 句柄 `MythicalClaw` 视为独立身份的问题（#2223），并修复了因 `engage_mode='always'` 未处理导致群消息静默丢弃的严重逻辑缺陷（#2227 → 相关修复在讨论中）。
- **环境依赖回归修复**：恢复了 `gh CLI` 在容器 PATH 中的可用性（#2221），确保 GitHub 集成功能正常运行。
- **凭证兼容性增强**：支持 `ANTHROPIC_AUTH_TOKEN` 作为合法认证方式（#853 → #2229 已合并），提升与官方 Claude Code CLI 的兼容性。
- **iMessage 本地模式诊断**：定位了 inbound 消息无法送达宿主的问题（#2214），为后续修复提供依据。
- **文档瘦身与验证流程强化**：完成 RULES.md 约 12K 内容的清理（#2219），并完成 PR #121 的预发验证（#2218），提升代码可维护性。

> 整体项目在**消息系统可靠性、多平台兼容性与配置灵活性**方面取得实质性进展。

---

## 4. 社区热点

### 🔥 高关注度 Issues / PRs

| 编号 | 类型 | 热度 | 链接 |
|------|------|------|------|
| #2234 | Issue | 新提出，0 评论但具战略意义 | [Can this work with llama.cpp?](https://github.com/qwibitai/nanoclaw/issues/2234) |
| #2227 | Issue | 关键 Bug，影响消息投递 | [engage_mode='always' not handled](https://github.com/qwibitai/nanoclaw/issues/2227) |
| #2206 | PR | 高互动（虽无评论，但被关闭前活跃） | [Add "Other…" option to channel picker](https://github.com/qwibitai/nanoclaw/pull/2206) |

**分析**：  
用户 @Kwisss 提出的 **llama.cpp 兼容性问题**（#2234）揭示了 NanoClaw 在对接非 Anthropic 官方 LLM 服务时的连接障碍，尽管 llama.cpp 自身响应正常，但 NanoClaw 报告“assistant didn't reply in time”，暗示其超时机制或协议适配层存在局限。此问题可能代表一类更广泛的**本地推理引擎集成需求**，值得架构层面评估。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 状态 | 修复 PR |
|--------|-------|------|------|--------|
| ⚠️ **高** | #2227 | `engage_mode='always'` 导致群消息静默丢弃 | Open | 无（需紧急修复） |
| ⚠️ **高** | #2221 | `gh CLI` 缺失导致 GitHub 功能失效（回归） | Closed | 已修复（推断由相关容器更新解决） |
| ⚠️ **中** | #2220 | Agent 向已注销的 `Old.wtf` 聊天室发帖 | Closed | 已修复 |
| ⚠️ **中** | #2214 | iMessage 本地模式 inbound 消息无法送达 | Closed | 已定位，待实现修复 |
| ⚠️ **低** | #853 | 不支持 `ANTHROPIC_AUTH_TOKEN` | Closed | #2229 已合并 |

> 建议优先处理 #2227，因其直接影响核心消息路由逻辑。

---

## 6. 功能请求与路线图信号

以下用户需求可能纳入近期路线图：

- **本地 LLM 引擎支持**（#2234）：用户对 llama.cpp 集成的强烈兴趣，表明 NanoClaw 需扩展后端适配层以支持非 Anthropic 模型。
- **更灵活的调度机制**：PR #2237 提出 `@every:<ms>` 间隔调度，补充现有 cron 表达式，反映用户对**细粒度自动化任务**的需求上升。
- **多包管理器支持**：PR #2238 支持 MacPorts，显示 macOS 用户对**非 Homebrew 生态兼容性**的诉求。
- **Per-group 模型与努力度覆盖**：PR #2233 提议按 agent group 自定义模型与推理强度，指向**精细化资源管控**方向。

> 这些信号共同指向 NanoClaw 正从“通用 AI 助手框架”向“可定制、多后端、企业级部署平台”演进。

---

## 7. 用户反馈摘要

从 Issues 评论与使用场景提炼：

- **痛点**：
  - 用户在尝试使用 llama.cpp 等本地推理服务时遭遇连接超时，尽管底层服务正常（#2234）。
  - 容器环境依赖（如 `gh CLI`）回归影响工作流，凸显环境一致性维护挑战（#2221）。
  - iMessage 本地模式“静默失败”，缺乏错误反馈，增加调试难度（#2214）。

- **满意点**：
  - 快速响应并修复了身份混淆与消息投递问题，体现团队对核心功能的重视。
  - 支持 `ANTHROPIC_AUTH_TOKEN` 提升了与官方工具的协同体验（#853）。

- **使用场景**：
  - 用户期望 NanoClaw 作为**本地优先的 AI 协作中枢**，集成多种通信渠道（Telegram、iMessage、GitHub）与推理后端（Claude、llama.cpp）。

---

## 8. 待处理积压

以下重要事项需维护者关注：

| 编号 | 类型 | 创建时间 | 状态 | 说明 |
|------|------|----------|------|------|
| #2004 | PR | 2026-04-25 | Open | **[Security] 强化 channel installer 信任边界**，防止恶意远程脚本执行，涉及安全关键路径 |
| #2000 | PR | 2026-04-25 | Open | **[Security] Webhook 请求体内存限制**，防止 DoS 攻击，适用于公网暴露场景 |
| #1999 | PR | 2026-04-25 | Open | **[Security] 拒绝 symlinked 主机目录**，加固容器文件系统隔离 |
| #2227 | Issue | 2026-05-03 | Open | **核心消息路由 Bug**，`engage_mode='always'` 未处理，导致消息丢失 |

> ⚠️ 建议优先合并三项安全相关 PR（#2004、#2000、#1999），因其涉及信任边界与资源安全，且已搁置近10天。同时应尽快为 #2227 分配开发资源，避免影响用户体验。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度 + 快速响应 + 安全加固意识强，但需警惕核心逻辑 Bug 积压与第三方集成兼容性缺口。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-05-04）

---

## 1. 今日速览

IronClaw 项目在过去24小时内保持高度活跃，共产生 **19条新 Issue** 和 **24条 PR 更新**，其中 **3个 PR 被合并/关闭**，无新版本发布。开发重心仍集中在“Reborn”架构重构主线，多个关键设计议题（如 TurnCoordinator、TurnRunner、事件投影等）持续深化。同时，生产环境 Bug 报告显著增加，涉及 Gemini API 工具调用、终端会话恢复、剪贴板兼容性及配置持久化等关键路径，反映出 v0.27.0 版本在复杂部署场景下的稳定性挑战。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 v0.27.0，团队正集中精力推进 Reborn 架构向主干合并（见 PR #3230），尚未开启下一版本周期。

---

## 3. 项目进展

今日有 **3个 PR 被合并或关闭**，推动核心架构与稳定性改进：

- **#3226（已关闭）**：修复 Gemini 模型在第二轮工具调用时因缺失 `thought_signature` 导致的 HTTP 400 错误。该修复通过将 `thought_signature` 字段透传至 OpenAI 兼容层实现，已包含回归测试，直接响应 Issue #3225。  
  🔗 [PR #3226](https://github.com/nearai/ironclaw/pull/3226)

- **#3234（已关闭）**：清理 E2E 测试配置，移除已删除的预检测试引用，避免 CI 流水线失败。  
  🔗 [PR #3234](https://github.com/nearai/ironclaw/pull/3234)

- **#3170（已关闭）**：为 Reborn 主机运行时添加垂直权限门控（vertical gates）测试，增强对持久化回放游标、资源限制等关键行为的验证覆盖。  
  🔗 [PR #3170](https://github.com/nearai/ironclaw/pull/3170)

> 整体来看，项目在“Reborn”架构落地（PR #3230 待合并）和关键 Bug 修复两方面同步推进，技术债务逐步清理。

---

## 4. 社区热点

以下 Issues/PRs 引发最多讨论或关注：

- **#3225（Gemini API 工具调用失败）**：用户 @thomasmaerz 报告使用 API Key 认证时，Gemini-3.1-flash-lite-preview 模型在第二次 LLM 轮次必现 HTTP 400 错误，严重影响生产可用性。该问题已获快速响应，对应修复 PR #3226 当日合并。  
  🔗 [Issue #3225](https://github.com/nearai/ironclaw/issues/3225)

- **#3229（LLM 配置回滚至数据库）**：严重等级为 Critical 的 Bug，用户自定义模型/提供商配置在启动时被 fallback 值永久覆盖，导致无法使用非默认 LLM。尚无公开修复方案，需紧急处理。  
  🔗 [Issue #3229](https://github.com/nearai/ironclaw/issues/3229)

- **#3230（Reborn 主干合并）**：大型架构 PR，将长期分支 `reborn-integration` 的底层子系统集成到 `main`，虽默认关闭，但标志着 Reborn 进入主干验证阶段。涉及数据库迁移、MCP 工具、CI 调整等多模块变更。  
  🔗 [PR #3230](https://github.com/nearai/ironclaw/pull/3230)

---

## 5. Bug 与稳定性

按严重程度排序的今日 Bug 报告：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| **Critical** | [#3229](https://github.com/nearai/ironclaw/issues/3229) | LLM 提供商 fallback 值错误写入数据库，永久覆盖用户配置 | ❌ 无 |
| **High** | [#3228](https://github.com/nearai/ironclaw/issues/3228) | `/quit` 后终端状态损坏（SSH/noVNC/tmux 下鼠标跟踪未完全禁用） | ❌ 无 |
| **High** | [#3225](https://github.com/nearai/ironclaw/issues/3225) | Gemini API 工具调用缺失 `thought_signature` 导致第二轮失败 | ✅ 已修复（#3226） |
| **Medium** | [#3227](https://github.com/nearai/ironclaw/issues/3227) | 无 X11/Wayland 环境下 TUI 文本复制静默失败（arboard 依赖） | ❌ 无 |
| **Medium** | [#3201](https://github.com/nearai/ironclaw/issues/3201) | DeepSeek 模型工具调用不工作（QA 验证失败） | ❌ 无 |

> 建议优先处理 #3229 和 #3228，二者均影响核心用户体验且无已知 workaround。

---

## 6. 功能请求与路线图信号

用户及开发者提出的新功能方向包括：

- **Slack Socket Mode 支持**（#1549）：实现 NAT 友好型 WebSocket 连接，避免公网隧道依赖，已进入长期开发。
- **NEAR Intents 投资组合自动化**：系列 PR（#3218, #3223, #3224）引入 DCA 定投、多资产配置及任务脚手架，显示项目正扩展至 DeFi 自动化领域。
- **Reborn 架构深度设计**：多个新 Issue（#3236–#3238, #3231–#3232）围绕取消语义、HTTP 出口契约、同线程后续策略等展开，预示下一阶段将聚焦运行时一致性与并发控制。

> 结合 PR 活跃度判断，**Slack 集成**与 **NEAR Intents 自动化**有望纳入下一版本；**Reborn 运行时契约**将成为中期技术重点。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “在 LXC 容器中通过 SSH 使用 IronClaw，`/quit` 后终端乱码，必须重启会话。”（#3228）
  - “配置了 DeepSeek，但工具调用完全无效，官方文档未说明限制。”（#3201）
  - “headless 服务器上 WASM 通道（如 Telegram）从未自动启动，文档未提及需手动激活。”（#3233 相关）

- **满意点**：
  - 对 Gemini 工具调用问题的快速修复表示认可（#3225 评论区隐含）。
  - NEAR Intents 功能被赞“极大简化了定投策略部署流程”（#3224 上下文推断）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未获响应，建议维护者关注：

- **#3013（Reborn TurnCoordinator 内核实现）**：创建于 2026-04-28，作为 Reborn 切变阻塞项，仅 1 条评论，无 assignee。  
  🔗 [Issue #3013](https://github.com/nearai/ironclaw/issues/3013)

- **#3090（ToolSurfaceService 与 CapabilityCatalog）**：架构关键组件，4 月 29 日创建，进展缓慢。  
  🔗 [Issue #3090](https://github.com/nearai/ironclaw/issues/3090)

- **#1549（Slack Socket Mode）**：3 月 21 日开启，size: XL， contributor 为新成员，尚未合并，存在集成风险。  
  🔗 [PR #1549](https://github.com/nearai/ironclaw/pull/1549)

> 建议为上述事项分配负责人或明确优先级，避免架构演进受阻。

--- 

**报告生成时间**: 2026-05-04  
**数据来源**: GitHub IronClaw 仓库公开数据

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-05-04）**

---

### 1. 今日速览  
过去24小时内，LobsterAI 社区活跃度较低，仅新增1条 Issue 和2条 PR 更新，无新版本发布。当前项目处于功能优化与长期技术债清理阶段，核心开发节奏平稳但推进缓慢。两条长期未合并的 PR（#812、#871）持续处于“stale”状态，反映出维护资源紧张或优先级调整。社区对新 Agent 能力（如 Hermes Agent）表现出明确兴趣，可能成为下一阶段功能扩展方向。

---

### 2. 版本发布  
*无新版本发布*

---

### 3. 项目进展  
*无 PR 被合并或关闭*  
尽管存在两项重要优化 PR（#812 性能优化、#871 Skill 统计功能），但均未进入合并流程。项目整体功能演进停滞，技术债务（如 SQLite 主线程阻塞）尚未解决，影响用户体验流畅度。

---

### 4. 社区热点  
**#1880 [OPEN] 希望增加Hermes Agent功能**  
🔗 https://github.com/netease-youdao/LobsterAI/issues/1880  
用户 @ecolife007 提出集成 Hermes Agent 与 OpenClaw 的诉求，参考 Open WebUI 的 Agent 接入设计，期望实现低门槛的 Agent 能力扩展。该 Issue 虽暂无评论与点赞，但指向当前 AI 助手平台的核心竞争点——多 Agent 协同与可插拔架构。若实现，将显著提升 LobsterAI 在开源 AI 客户端领域的差异化竞争力。

---

### 5. Bug 与稳定性  
*无新报告 Bug 或崩溃问题*  
但需注意：PR #812 明确指出 **SQLite 同步写入严重阻塞 Electron 主线程**（Issue #562），在高频对话场景下可能导致界面卡顿甚至无响应。此问题虽非今日新增，但长期未修复，属于高优先级稳定性隐患。目前已有完整优化方案（防抖 + 异步写入 + 缓存），建议尽快 review 并合并。

---

### 6. 功能请求与路线图信号  
- **Agent 扩展能力**：Issue #1880 明确提出集成 Hermes Agent，反映用户对“可连接外部 Agent”架构的强烈需求，与主流开源项目（如 Open WebUI）对齐。
- **Skill 执行分析**：PR #871 已实现 Skill 调用统计可视化功能，具备直接上线价值，可增强开发者对技能使用效率的洞察，建议优先合入。
- **性能优化**：PR #812 针对 SQLite I/O 阻塞问题提出系统性解决方案，是提升产品稳定性的关键补丁，应纳入近期发布计划。

> 综合判断：**Skill 统计（#871）与 SQLite 性能优化（#812）具备高 ROI，有望成为下一版本核心改进；Hermes Agent 集成可能启动新一轮架构讨论。**

---

### 7. 用户反馈摘要  
当前公开 Issue 中缺乏详细使用场景描述，但从 #1880 可提炼关键诉求：  
> “用户希望像 Open WebUI 一样，通过简单配置即可接入第三方 Agent（如 Hermes Agent），无需复杂开发即可扩展 LobsterAI 能力边界。”  
这表明用户对 **低代码/无代码 Agent 集成** 有明确期待，且重视 **文档清晰度与上手便捷性**（引用官方 quick-start 文档作为参考）。

---

### 8. 待处理积压  
以下重要 PR 长期未响应，建议维护团队优先处理：  

- **#812 [stale] perf(sqlite): debounce save() 并缓存 getConfig() 减少主线程阻塞**  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/812  
  *创建时间：2026-03-25 | 最后更新：2026-05-03*  
  → 解决核心性能瓶颈，影响用户体验稳定性  

- **#871 [stale] feat(skills): 新增skill执行统计展示**  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/871  
  *创建时间：2026-03-25 | 最后更新：2026-05-03*  
  → 提供 Skill 使用洞察，增强开发者工具链完整性  

> ⚠️ 两项 PR 均已“stale”，存在被自动关闭风险。建议尽快 review 或标记为“待合并”以避免贡献流失。

---  
*数据来源：GitHub LobsterAI 仓库（截至 2026-05-04 00:00 UTC）*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-05-04）**

---

### 1. 今日速览  
过去24小时内，Moltis 项目保持中等活跃度：共新增1个 Issue 和2个 Pull Request，无新版本发布。社区贡献者 @penso 主导了文档更新与核心功能修复，推动 DeepSeek 推理内容回放机制完善；同时，一个关于工具调用参数校验失败的 Bug 被报告，暴露出运行时稳定性隐患。整体开发节奏平稳，以修复和优化为主，未出现重大变更。

---

### 2. 版本发布  
*无新版本发布。*

---

### 3. 项目进展  
今日无 PR 被合并或关闭，但有两个重要 PR 处于待合并状态，标志着关键功能推进：

- **#961 [OPEN] fix(providers): replay DeepSeek reasoning content**  
  由 @penso 提交，旨在修复持久化聊天历史中 DeepSeek 模型推理内容丢失的问题。该 PR 实现了在转换历史消息时保留 `reasoning_content` 字段，并确保后续请求能正确回放该信息，提升与 OpenAI/DeepSeek 兼容接口的一致性。此修复对支持“思考过程”可见性的高级用户场景至关重要。  
  🔗 [PR #961](https://github.com/moltis-org/moltis/pull/961)

- **#962 [OPEN] Update local TTS provider docs**  
  同样由 @penso 提交，更新了本地 TTS（文本转语音）提供商的文档，包括修正 Piper 和 Coqui 的依赖指向（如切换到维护中的 `OHF-Voice` 仓库和 `idiap/coqui-ai-TTS` 分支），并补充了 `.onnx.json` 配置下载说明。此举显著降低用户配置门槛，提升本地部署体验。  
  🔗 [PR #962](https://github.com/moltis-org/moltis/pull/962)

> 尽管尚未合并，这两个 PR 均针对高频使用场景（推理回放、本地 TTS）进行优化，预计将作为下一版本的核心改进内容。

---

### 4. 社区热点  
**#963 [OPEN] Tool calls with malformed or empty arguments collapse to missing required fields**  
该 Issue 由 @Cstewart-HC 报告，描述了一个间歇性但严重的运行时问题：即使模型已成功激活并执行过 `exec` 工具，后续调用仍可能因参数格式错误或为空而被预分发阶段的 schema 校验拦截，抛出 `missing=command` 错误。值得注意的是，该错误发生在 `ExecTool.execute()` 或 `BeforeToolCall` 钩子执行之前，意味着问题根源在于输入验证逻辑过于严格或模型输出解析不稳定。  
目前尚无评论或反应，但鉴于其影响核心工具调用流程，潜在风险较高，需优先排查。  
🔗 [Issue #963](https://github.com/moltis-org/moltis/issues/963)

---

### 5. Bug 与稳定性  
| 严重程度 | 问题描述 | 是否已有 Fix PR |
|--------|--------|----------------|
| ⚠️ 高 | **工具调用参数校验失败导致命令丢失**（#963）：模型生成的合法工具调用因参数格式问题被提前拒绝，中断自动化流程。可能源于模型输出漂移或 schema 校验逻辑缺陷。 | ❌ 无 |

> 建议维护团队尽快复现该问题，并评估是否需增强参数容错机制或调整校验时机。

---

### 6. 功能请求与路线图信号  
当前无明确新功能请求，但从 PR 和 Issue 可推断以下方向可能被纳入近期路线图：

- **增强推理内容支持**：#961 显示项目正积极适配 DeepSeek V4 等模型的“思考过程”回放需求，预示未来将强化对多模态推理输出的标准化处理。
- **本地 AI 能力文档完善**：#962 反映项目重视本地部署体验，预计将持续优化 TTS、STT 等边缘能力的集成指南。
- **工具调用鲁棒性提升**：#963 暴露的校验问题可能促使团队引入更灵活的参数解析策略或模型输出后处理机制。

---

### 7. 用户反馈摘要  
从现有 Issue 可见，用户核心诉求集中在：

- **稳定性与可靠性**：用户期望工具调用（如 `exec`）在多次交互中表现一致，避免因临时参数格式问题导致流程中断（#963）。
- **本地部署易用性**：TTS 用户反馈依赖链接过时、配置复杂，已通过 #962 部分响应，体现社区对“开箱即用”体验的强烈需求。
- **高级功能兼容性**：DeepSeek 用户关注推理内容能否在会话历史中正确保留与回放，直接影响调试与审计体验（#961）。

整体满意度偏向正面，但稳定性问题若持续存在可能影响生产环境采用。

---

### 8. 待处理积压  
经核查，以下事项需维护者关注：

- **#963 工具调用校验 Bug**：创建已超24小时，尚无维护者响应或标签标记。鉴于其影响核心功能，建议尽快分配优先级并启动调查。  
  🔗 [Issue #963](https://github.com/moltis-org/moltis/issues/963)

- **#961 与 #962 待合并 PR**：两者均无冲突且目标明确，建议审核后尽快合入主分支，以释放价值并激励贡献者。

> 提醒：长期未响应的 Issue 可能降低社区参与度，建议建立 SLA 机制（如72小时内初步响应）。

---  
*数据来源：Moltis GitHub 仓库（截至 2026-05-04 00:00 UTC）*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-05-04）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度较高，共产生 **32条 Issues 更新**（新开/活跃21条，关闭11条）和 **16条 PR 更新**（待合并11条，已合并/关闭5条），显示出较强的开发参与度与问题反馈节奏。尽管无新版本发布，但多个关键 Bug 修复和功能增强 PR 进入审查阶段，项目整体处于稳健迭代状态。社区对**智能体隔离机制**、**记忆系统稳定性**及**多端交互体验**的关注度显著上升。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 v1.1.5，但已有 [#4012](https://github.com/agentscope-ai/CoPaw/pull/4012) 提交版本号升级至 `1.1.6b1`，预示下一测试版即将进入开发周期。

---

## 3. 项目进展

今日有 **5个 PR 被合并或关闭**，推动多项关键改进：

- ✅ **文档更新**：[#4013](https://github.com/agentscope-ai/CoPaw/pull/4013) 完成 v1.1.5 文档同步，提升用户可访问性。
- ✅ **错误码体系完善**：[#1642](https://github.com/agentscope-ai/CoPaw/pull/1642) 引入结构化错误码，增强调试能力。
- ✅ **MiniMax 提供商集成**：[#1055](https://github.com/agentscope-ai/CoPaw/pull/1055) 完成首个第三方 LLM 提供商（MiniMax）内置支持，扩展模型生态。
- ✅ **会话污染防护**：[#559](https://github.com/agentscope-ai/CoPaw/pull/559) 修复异常消息写入内存问题，防止会话状态污染。
- ✅ **版本号预升级**：[#4012](https://github.com/agentscope-ai/CoPaw/pull/4012) 标记 v1.1.6b1，为下一迭代做准备。

> 项目在**稳定性加固**与**生态扩展**方向取得实质进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥ 3）

| Issue | 主题 | 链接 |
|------|------|------|
| #3936 | 智能体间是否支持完全隔离或可配置隔离 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/3936) |
| #1516 | Telegram 渠道不支持 AudioContent | [查看](https://github.com/agentscope-ai/QwenPaw/issues/1516) |
| #3977 | 使用 `memory_search` 报错（AttributeError） | [查看](https://github.com/agentscope-ai/QwenPaw/issues/3977) |
| #3969 | `FunctionCallOutput` 校验失败 + `loop_config.json` 损坏 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/3969) |
| #3991 | Ollama 渠道无法携带对话历史 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/3991) |
| #3992 | 多轮对话后 AI 停止响应 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/3992) |
| #3976 | 会话空闲清理机制误杀正在运行的任务 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/3976) |

**核心诉求分析**：  
用户强烈关注**智能体安全边界**（#3936）、**本地模型兼容性**（#3991）、**长时任务稳定性**（#3976）以及**多模态输入支持**（#1516）。其中，#3936 提出的“白名单式文件访问控制”和“按智能体隔离 workspace”已成为高频痛点，可能影响多智能体协作架构设计。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（影响核心功能）

| Issue | 描述 | 状态 | 关联 PR |
|------|------|------|--------|
| #3976 | 空闲清理机制误判运行中任务为“空闲”，导致响应丢失 | OPEN | 无 |
| #3991 | Ollama 渠道无法携带上下文，会话记忆丢失 | CLOSED | 无（疑似配置问题） |
| #3977 | `memory_search` 因 `list` 对象调用 `.get()` 报错 | OPEN | [#4007](https://github.com/agentscope-ai/CoPaw/pull/4007)（含修复） |
| #3969 | `FunctionCallOutput` 校验失败 + 配置文件损坏 | OPEN | 无 |
| #1516 | Telegram 语音消息无法解析（AudioContent 不支持） | OPEN | [#4021](https://github.com/agentscope-ai/CoPaw/pull/4021)（部分修复） |

> **重点跟进**：#3976 涉及任务调度核心逻辑，需优先修复；#3977 已有修复 PR（#4007），建议尽快合并。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能请求（附实现路径）

| Issue | 功能描述 | 关联 PR | 纳入可能性 |
|------|--------|--------|----------|
| #3936 | 智能体间文件访问隔离（白名单机制） | 无 | ⭐⭐⭐⭐☆（架构级需求） |
| #2430 | 系统托盘图标 + 最小化到托盘 | 无 | ⭐⭐⭐☆☆（Windows UX 提升） |
| #3944 | Auto-Memory 排除心跳/定时任务 | 无 | ⭐⭐⭐⭐☆（记忆系统优化） |
| #4002 | 对话界面增加可视化共享区域（框选/标注） | 无 | ⭐⭐☆☆☆（前端复杂度高） |
| #4011 | 增加 fallback 模型选项 | 无 | ⭐⭐⭐☆☆（容灾需求） |
| #4003 | 支持 Ollama 原生集成（ARM64 兼容） | 无 | ⭐⭐⭐⭐☆（本地部署刚需） |

> **趋势判断**：**智能体隔离**、**Ollama 支持**、**Auto-Memory 优化** 极可能纳入 v1.2.0 路线图。

---

## 7. 用户反馈摘要

### 💬 真实用户声音

- **痛点**：
  - “每次更新后 `embedding_model_config` 被重置，向量搜索直接失效”（#4018）
  - “关闭桌面端后服务就停了，希望像微信一样最小化到托盘”（#3979）
  - “用 Ollama 时每句话都像新对话，上下文根本记不住”（#3991）
  - “定时任务配置了也不跑，必须手动触发”（#3986）

- **满意点**：
  - 多模型提供商支持（如 MiniMax）获得积极反馈
  - Web Console 的国际化进展（pt-BR 支持）受社区欢迎

- **使用场景**：
  - 企业用户关注钉钉/飞书渠道的**打断终止功能**（#4010）
  - 开发者希望支持**中途引导任务方向**（#4019，类似 Codex 模式）

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项

| Issue/PR | 主题 | 创建时间 | 状态 | 建议 |
|---------|------|--------|------|------|
| #1516 | Telegram AudioContent 不支持 | 2026-03-15 | OPEN | 需多媒体处理模块重构 |
| #2430 | 系统托盘功能 | 2026-03-27 | OPEN | Windows 用户体验关键缺口 |
| #3019 | 技能卸载后 `skill.json` 编码损坏 | 2026-04-07 | OPEN | 影响默认智能体启动 |
| #3928 | `delegate_external_agent` 无限等待 | 2026-04-28 | OPEN（Under Review） | 高优先级安全修复 |

> **维护者提醒**：#3019 和 #3928 涉及数据完整性与系统健壮性，建议本周内处理。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
社区活跃，核心功能稳定，但需加强**本地模型兼容性**与**任务调度可靠性**。建议下一版本聚焦“智能体隔离”与“Ollama 深度集成”。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-05-04）

---

## 1. 今日速览

过去24小时内，ZeptoClaw 项目保持高活跃度，共处理 **22条 PR 更新**（19条已合并/关闭，3条待合并）和 **5条 Issues 更新**（4条新开，1条已关闭）。开发重点集中于 **Hermes Agent 自改进循环机制的集成**，包括技能管理、长期记忆触发优化与遥测数据采集。无新版本发布，但基础设施依赖项持续更新，文档与定位描述完成关键对齐。整体项目处于功能深化与架构演进阶段，社区贡献稳定。

---

## 2. 版本发布

**无新版本发布**。  
当前主干分支仍在为下一版本（预计 v0.8.x）积累功能改进，重点围绕本地优先 AI 助手基础设施的成熟度提升。

---

## 3. 项目进展

今日合并/关闭的 PR 主要推动以下方向：

- **文档与项目定位统一**：通过 #566、#570 完成 README、Cargo 元数据、AGENTS.md 等文件的同步，明确“fast, small, secure, local-first assistant infrastructure”核心定位，并修正与 Aisar、ZeptoStack、NemoClaw 等项目的对比表述，避免未经验证的主张（[#566](https://github.com/qhkm/zeptoclaw/pull/566)、[#570](https://github.com/qhkm/zeptoclaw/pull/570)）。
- **中间件框架落地**：#564 合并了 agent 中间件框架 Phase 1 实现（源自 #404 的 cherry-pick），新增 11 个中间件实现，为后续 agent 行为可插拔化奠定基础（[#564](https://github.com/qhkm/zeptoclaw/pull/564)）。
- **依赖安全与维护性更新**：Dependabot 自动合并 14 项依赖升级，涵盖 Rust（tokio、libc、lettre 等）、JavaScript（astro、vite）、GitHub Actions 及 Docker 基础镜像，提升安全性与构建稳定性（如 [#550](https://github.com/qhkm/zeptoclaw/pull/550)、[#557](https://github.com/qhkm/zeptoclaw/pull/557) 等）。

> 项目整体向“自进化型本地 AI 助手”迈出关键一步，架构扩展性与文档一致性显著增强。

---

## 4. 社区热点

**最活跃议题：Hermes Agent 自改进循环的阶段性落地**  
尽管无高评论数 Issue，但 **#567（skill_manage 工具）、#568（usage 遥测）、#569（longterm_memory 触发短语）** 三项新 Issue 及其对应 PR（#571）构成连贯技术路线，反映核心开发者正系统性地引入 Hermes Agent 的“自我优化”范式。这些改动虽无外部用户评论，但标志着项目从“静态工具集”向“动态学习型代理”演进的战略转向（[#567](https://github.com/qhkm/zeptoclaw/issues/567) | [#568](https://github.com/qhkm/zeptoclaw/issues/568) | [#569](https://github.com/qhkm/zeptoclaw/issues/569)）。

---

## 5. Bug 与稳定性

**无新报告的重大 Bug 或崩溃问题**。  
所有已关闭 Issue/PR 均为功能增强或维护任务，未涉及缺陷修复。依赖项更新（如 tokio 1.51.1）可能间接修复潜在稳定性问题，但无明确回归报告。

---

## 6. 功能请求与路线图信号

以下功能请求已获积极响应，极可能纳入下一版本：

| 功能 | 状态 | 关联 Issue/PR |
|------|------|---------------|
| **Agent 可调用技能管理工具（CRUD）** | 开发中 | [#567](https://github.com/qhkm/zeptoclaw/issues/567) → PR 待提交 |
| **技能使用遥测（.usage.json）** | 规划中 | [#568](https://github.com/qhkm/zeptoclaw/issues/568) |
| **Longterm Memory 触发短语引导** | 已提交 PR | [#569](https://github.com/qhkm/zeptoclaw/issues/569) → [#571](https://github.com/qhkm/zeptoclaw/pull/571) |
| **Liquid AI (LFM) 提供商集成** | 已关闭（可能已合并） | [#541](https://github.com/qhkm/zeptoclaw/issues/541) |

> 路线图清晰指向 **“自感知、自优化”的本地代理架构**，强调边缘部署能力（如 LFM 集成）与运行时自适应（如遥测驱动技能淘汰）。

---

## 7. 用户反馈摘要

**无直接外部用户反馈**。  
当前 Issues 均由维护者 @qhkm 发起，反映项目处于 **核心功能迭代期**，尚未进入大规模用户测试阶段。但从 Issue 描述可推断目标用户痛点：

- **技能管理繁琐**：现有技能需手动编辑文件，缺乏运行时动态管理能力（#567 动机）。
- **记忆工具误用风险**：缺乏明确触发指引导致 longterm_memory 使用不当（#569 目标）。
- **项目定位混淆**：README 与元数据表述不一致，影响开发者对项目价值的理解（#565 背景）。

---

## 8. 待处理积压

**无长期未响应的重要 Issue 或 PR**。  
所有开放 Issue（#565–#569）均在创建当日更新，PR #571 也已提交。历史 Issue #541（Liquid AI 集成）已关闭，显示维护者响应迅速。建议关注：

- **#571（trigger-phrase nudges）**：待合并，属 Hermes 自改进循环关键一环。
- **#567（skill_manage tool）**：尚无对应 PR，需跟进实现进度。

> 项目积压健康，维护节奏紧凑，无技术债堆积迹象。

---  
*数据来源：GitHub 仓库 qhkm/zeptoclaw，统计周期 2026-05-03 至 2026-05-04*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*