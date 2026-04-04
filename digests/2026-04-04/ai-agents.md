# OpenClaw 生态日报 2026-04-04

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-04 01:02 UTC

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

# OpenClaw 项目动态日报（2026-04-04）

---

## 1. 今日速览

过去24小时内，OpenClaw 社区保持高度活跃，共产生 **500条 Issues 更新**（新开/活跃 378 条，关闭 122 条）和 **500条 PR 更新**（待合并 312 条，已合并/关闭 188 条），显示出强劲的开发与问题反馈节奏。尽管无新版本发布，但多个关键回归 Bug 和安全相关修复被快速响应，社区对国际化、插件兼容性及多平台支持的需求持续升温。整体项目健康度良好，维护团队对高优先级问题响应及时。

---

## 2. 版本发布

**无新版本发布**。最近一次稳定版本仍为 `v2026.4.1`，但多个修复已提交至主干，预计将在近期热修复版本中集成。

---

## 3. 项目进展

今日有 **188 个 PR 被合并或关闭**，其中多个关键修复显著提升了系统稳定性与安全性：

- **#60619**：修复 WebChat 中 `<tool_call>` XML 标签泄漏至用户可见聊天气泡的问题（[链接](https://github.com/openclaw/openclaw/pull/60619)）
- **#60616**：清理模型输出的特殊 token（如 Kimi 的 `<|tool_call_begin|>`），防止污染用户消息（[链接](https://github.com/openclaw/openclaw/pull/60616)）
- **#60615**：修复重启后中断的周期性 cron 任务未自动重试的问题（[链接](https://github.com/openclaw/openclaw/pull/60615)）
- **#60517**：增强 ClawHub 插件安装安全性，增加 SHA-256 存档完整性校验（[链接](https://github.com/openclaw/openclaw/pull/60517)）
- **#60170**：引入网关崩溃循环断路器，防止配置错误导致无限重启（[链接](https://github.com/openclaw/openclaw/pull/60170)）

此外，**#58955**（分离内部执行提示与用户可见输出）和 **#57422**（改进 Telegram 网络中断恢复机制）等大型重构持续推进，为长期可维护性奠定基础。

---

## 4. 社区热点

以下 Issues 引发广泛讨论，反映核心用户诉求：

- **#3460**：[国际化 (i18n) 与本地化支持](https://github.com/openclaw/openclaw/issues/3460)（118 评论）  
  社区强烈呼吁多语言支持，但维护者表示“暂无资源实现”，建议通过插件或外部工具过渡。

- **#75**：[Linux/Windows Clawdbot 应用缺失](https://github.com/openclaw/openclaw/issues/75)（67 评论，66 👍）  
  用户期望跨平台桌面客户端，目前仅有 macOS/iOS/Android 版本，Linux 和 Windows 支持成为最大缺口。

- **#49971**：[原生 Agent 身份与信任验证机制提案](https://github.com/openclaw/openclaw/issues/49971)（62 评论）  
  基于 W3C DID 和 VC 标准构建去中心化身份体系，技术前瞻性强，可能影响未来架构方向。

- **#52885**：[微信插件与 OpenClaw 2026.3.22+ 不兼容](https://github.com/openclaw/openclaw/issues/52885)（44 评论）  
  插件因 ESM 模块路径变更失效，暴露第三方插件生态维护滞后问题。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 严重性 | Issue | 描述 | 状态 |
|--------|------|------|------|
| 🔴 高 | #59827 | 升级至 v2026.4.1 后工具调用失效，仅显示为纯文本 | ✅ 已有 fix PR #60619/#60616 |
| 🔴 高 | #53959 | `openai-codex/gpt-5.3-codex` 更新后完全不执行任何工具 | 🔄 调查中，疑似与 scaffolding 剥离逻辑相关 |
| 🔴 高 | #40082 | 代理接受任务但不执行，返回占位回复 | 🔄 高优先级回归，影响核心体验 |
| 🟠 中 | #59098 | 嵌入式代理使用 Ollama 模型时超时，直连正常 | 🔄 网络层或上下文传递问题 |
| 🟠 中 | #59678 | v2026.4.1 中 cron 任务忽略 `timeoutSeconds` 配置 | 🔄 配置解析回归 |
| 🟡 低 | #59850 | `grammy` 模块未安装导致所有用户 ERR_MODULE_NOT_FOUND | ✅ 已有修复方向（条件导入） |

> 注：多个回归问题集中在 **v2026.3.22–v2026.4.1** 版本区间，建议用户谨慎升级。

---

## 6. 功能请求与路线图信号

以下功能请求获得高关注度，且已有相关 PR 推进，**极可能被纳入下一版本**：

- **MCP 客户端原生支持**（#29053，13 评论，15 👍）  
  社区推动对接行业标准 Model Context Protocol，已有技术讨论，但尚无正式 PR。
  
- **简化 exec 审批流程**（#59510，9 评论）  
  当前逐条审批机制遭诟病，维护者已注意到此 UX 缺陷，可能结合 #50207（预审批钩子）一并优化。

- **Gmail hook 增加系统提示支持**（#57791）  
  轻量模型处理邮件时缺乏上下文指导，需求明确，实现难度低。

- **Feishu 交互式 exec 审批卡片**（#60328，XL PR 进行中）  
  对标 Discord/Telegram 的一键审批体验，已进入开发阶段。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “升级后工具调用全变文本，根本没法用”（#59827）
  - “cron 任务突然超时，日志却说是配置问题，明明没改过”（#59678）
  - “微信插件坏了半个月没人修，官方插件都这样？”（#52885）

- **满意点**：
  - “WebChat 移动端终于能正常打字了！”（#60220 相关反馈）
  - “安全扫描脚本救了我的生产环境”（#60605 用户致谢）

- **使用场景**：
  - 企业用户依赖 Feishu/Discord 集成进行内部自动化（#60328, #53189）
  - 开发者尝试在 RISC-V 架构部署（#54253），反映边缘计算兴趣增长

---

## 8. 待处理积压

以下重要 Issue 长期未获官方响应，需维护者关注：

- **#29387**：[agentDir 下的 bootstrap 文件被静默忽略](https://github.com/openclaw/openclaw/issues/29387)（2026-02-28 创建，8 评论）  
  影响自定义代理配置，违反文档承诺，标记为 `stale` 但仍未修复。

- **#22676**：[Signal 守护进程 SIGUSR1 重启时产生孤儿进程](https://github.com/openclaw/openclaw/issues/22676)（2026-02-21 创建，7 评论）  
  资源泄漏风险，可能影响长期运行实例稳定性。

- **#29053**：[MCP 客户端原生支持](https://github.com/openclaw/openclaw/issues/29053)（2026-02-27 创建，13 评论，15 👍）  
  虽为热门需求，但无官方路线图确认，社区贡献者等待信号。

> 建议维护团队在下次路线图会议中评估上述积压项的优先级。

--- 

**报告生成时间**：2026-04-04  
**数据来源**：OpenClaw GitHub 仓库公开数据

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告  
**报告时间：2026-04-04**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现 **高活跃度、强竞争、快速迭代** 的态势。主流项目日均处理 Issues 与 PR 总量超 1,500 条，反映出开发者社区对 Agent 框架的强烈需求与技术投入。安全加固、多通道集成、模型兼容性与用户体验优化成为共性焦点，而 Web UI 管理、插件生态扩展和合规适配正成为差异化竞争的关键维度。整体生态从“功能堆叠”向“稳定可用+生态开放”演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新数 | PR 更新数 | 新版本发布 | 健康度评估（⭐/5） |
|------|---------------|-----------|-------------|------------------|
| **OpenClaw** | 500 | 500 | ❌ | ⭐⭐⭐⭐☆（4.5） |
| **NanoBot** | 14 | 111 | ❌ | ⭐⭐⭐⭐（4.0） |
| **Zeroclaw** | 23 | 37 | ❌ | ⭐⭐⭐☆（3.5） |
| **PicoClaw** | 32 | 58 | ✅（v0.2.5） | ⭐⭐⭐⭐（4.0） |
| **NanoClaw** | 6 | 27 | ❌ | ⭐⭐⭐⭐（4.0） |
| **IronClaw** | 31 | 50 | ❌ | ⭐⭐⭐⭐（4.0） |
| **LobsterAI** | 38 | 50 | ✅（3版） | ⭐⭐⭐⭐（4.0） |
| **CoPaw** | 50 | 32 | ✅（v1.0.1） | ⭐⭐⭐⭐（4.0） |
| **ZeptoClaw** | 2 | 12 | ❌ | ⭐⭐⭐⭐（4.0） |
| **Moltis** | 6 | 3 | ❌ | ⭐⭐⭐（3.0） |
| **EasyClaw** | 1 | 0 | ❌ | ⭐⭐（2.0） |
| **TinyClaw** | 0 | 0 | ❌ | ⭐（1.0） |

> 注：健康度综合考量开发节奏、问题响应、稳定性与社区互动。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是生态中的核心参照项目**，具备以下特征：
- **规模最大**：单日 Issues/PR 均达 500 条，远超同类（第二为 CoPaw 的 50/32）；
- **社区最广**：长期积累大量企业用户与插件开发者，#3460（i18n）、#75（跨平台客户端）等 Issue 反映广泛用户基础；
- **技术路线稳健**：聚焦生产级稳定性，近期修复集中于安全（SHA-256 校验）、工具调用可靠性（#60619/#60616）与系统健壮性（cron 重试、网关断路器）；
- **生态依赖性强**：LobsterAI、CoPaw 等项目明确依赖 OpenClaw 作为底层引擎，其版本升级直接影响下游生态。

相较之下，NanoBot、PicoClaw 等更侧重轻量化与快速迭代，而 OpenClaw 承担“工业级基座”角色。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **安全加固** | OpenClaw、PicoClaw、Zeroclaw、CoPaw | Web UI 认证漏洞修复（#2307）、HMAC 工具收据（#5168）、沙箱权限控制（LobsterAI #1189） |
| **多通道集成** | 所有项目 | Telegram/WhatsApp/飞书/Discord 支持优化，尤以微信插件兼容性（OpenClaw #52885）、Matrix 通道（Moltis #500）为痛点 |
| **模型兼容性与推理支持** | NanoBot、IronClaw、CoPaw | 支持 `reasoning_content`（#2770）、DeepSeek-R1/MiMo 集成、跨 Provider 回退链修复 |
| **Web UI 与可视化运维** | NanoBot（#1922）、PicoClaw（#2317）、Zeroclaw（#4866） | 官方或社区驱动的管理面板需求强烈，降低配置门槛 |
| **内存与稳定性优化** | Zeroclaw（#4916）、CoPaw（#2888）、PicoClaw（#2310） | 防止内存泄漏、会话丢失、CPU 占用异常等生产环境问题 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 |
|------|--------|--------|-------------|
| **OpenClaw** | 企业级稳定性、插件生态、多平台支持 | 企业开发者、系统集成商 | 模块化插件系统，强向后兼容 |
| **NanoBot** | 轻量部署、多模型兼容、通道健壮性 | 个人开发者、中小团队 | 配置驱动，强调“开箱即用” |
| **PicoClaw** | 安全隔离、多租户、CLI 工具链 | DevOps、安全敏感场景 | “Agent Shield”安全套件，Tauri 桌面集成 |
| **CoPaw** | 多模态（视频）、技能管理、企业级 UI | 企业知识工作者 | 基于 AgentScope，强前端体验 |
| **IronClaw** | V2 引擎、TUI 优化、权限模型 | 终端用户、CLI 爱好者 | 集中式所有权模型，类型化身份 |
| **ZeptoClaw** | 并发架构、浏览器自动化 | 高级用户、研究型开发者 | 探索非阻塞设计，Landlock 沙箱 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 比，功能密集）：  
  **NanoBot、PicoClaw、CoPaw、IronClaw** —— 日均 PR >30，新功能持续落地，适合尝鲜开发者。
  
- **质量巩固阶段**（高 Issues 响应，修复主导）：  
  **OpenClaw、Zeroclaw、LobsterAI** —— 聚焦回归 Bug 修复与稳定性提升，适合生产环境用户。

- **生态扩展阶段**（插件/通道建设）：  
  **Moltis、ZeptoClaw** —— 探索 WASM 插件、浏览器自动化等新边界，技术前瞻性强。

- **维护期/低活跃**：  
  **EasyClaw、TinyClaw** —— 需警惕社区流失风险。

---

## 7. 值得关注的趋势信号

1. **安全成为第一优先级**：  
   多个项目（PicoClaw #2307、Zeroclaw #5168、LobsterAI #1189）紧急修复认证与执行漏洞，表明 **AI Agent 的安全边界** 已成为用户采纳的核心门槛。

2. **从“单 Agent”向“多智能体协作”演进**：  
   CoPaw（#2883）、IronClaw（#1894）均提出多 Agent 协同架构需求，预示 **Agent Orchestration** 将成为下一阶段技术焦点。

3. **Web UI 管理面板成为标配**：  
   NanoBot（#1922）、PicoClaw（#2317）、Zeroclaw（#4866）共同反映 **降低运维门槛** 的迫切需求，CLI-only 模式难以为继。

4. **模型推理透明化需求上升**：  
   NanoBot（#2770）、IronClaw（#1952）对 `reasoning_content` 的支持，显示开发者要求 **可解释的推理过程**，而非黑箱输出。

5. **合规与成本意识增强**：  
   NanoClaw（#1224 TOS 合规）、LobsterAI（#582 Token 统计）表明用户关注 **法律风险与用量控制**，框架需提供审计与计量能力。

> **对开发者的建议**：优先选择具备活跃安全响应机制、多通道支持完善、并提供可视化运维路径的项目；若面向企业场景，应重点关注 OpenClaw 生态或 CoPaw 等成熟方案。

---  
**分析师备注**：生态整体健康，但需警惕“功能膨胀 vs 稳定性”的平衡。建议开发者根据自身场景（个人/企业、CLI/Web、安全等级）选择适配框架，并积极参与社区反馈以影响路线图。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-04-04）

---

## 1. 今日速览

NanoBot 在过去24小时内表现出极高的开发活跃度，共产生 **111 条 PR 更新** 和 **14 条 Issue 更新**，其中 **93 个 PR 仍处于待合并状态**，反映出社区贡献热情高涨但核心维护团队面临较大的代码审查压力。尽管无新版本发布，但多个关键功能（如 Jinja2 模板支持、TTS 集成、内存系统重构）已进入实现阶段。用户反馈整体积极，尤其在稳定性方面获得显著认可，但部分模型兼容性与工具调用问题仍需重点关注。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.4.post6`，建议用户关注即将发布的 `v0.1.5` 候选版本，预计将包含本次日报中提及的多项重要修复与增强。

---

## 3. 项目进展

今日共有 **18 个 PR 被合并或关闭**，推动项目在多个方向取得实质性进展：

- **模板引擎集成**：[#2779](https://github.com/HKUDS/nanobot/pull/2779) 引入 Jinja2 模板支持，用于 agent 响应、记忆 consolidation 和平台策略管理，提升输出可控性与可定制性。
- **工具链增强**：
  - [#2784](https://github.com/HKUDS/nanobot/pull/2784) 为 `exec` 工具添加 `allowInternalUrls` 配置选项，增强安全性与灵活性。
  - [#2767](https://github.com/HKUDS/nanobot/pull/2767) 将 ExecTool、ReadFileTool 等关键资源限制参数从硬编码改为配置文件可调，提升部署适应性。
- **通道优化**：
  - [#2646](https://github.com/HKUDS/nanobot/pull/2646) 恢复微信通道的 typing 指示器功能，改善交互体验。
  - [#2769](https://github.com/HKUDS/nanobot/pull/2769) 增强 Telegram 和 QQ 通道，支持群组中带 bot 用户名的命令解析。
- **LLM 支持扩展**：
  - [#2770](https://github.com/HKUDS/nanobot/pull/2770) 在 OpenAI 兼容 provider 中支持 `reasoning_content`，实现对 MiMo、DeepSeek-R1 等推理模型的完整展示。
  - [#2495](https://github.com/HKUDS/nanobot/pull/2495) 正式集成小米 MiMo 大模型支持。
- **用户体验改进**：
  - [#2776](https://github.com/HKUDS/nanobot/pull/2776) 实现消息处理完成后自动移除 reaction 表情，清理状态指示。
  - [#2745](https://github.com/HKUDS/nanobot/pull/2745) 统一重启通知机制，确保仅在目标通道就绪后发送完成提示。

> 项目整体向更稳定、可扩展、多模型兼容的方向稳步迈进，尤其在工具安全性和通道健壮性方面显著提升。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#1922](https://github.com/HKUDS/nanobot/issues/1922) — *nanobot-webui* 自托管管理面板
- **评论数：8** | **点赞：6**
- 社区成员 @Good0007 开发了一款功能完整的 Web 管理界面，支持实时聊天、多用户、MCP 服务器配置等。
- **诉求分析**：用户强烈希望 NanoBot 提供官方或半官方的图形化管理工具，降低运维门槛。该 Issue 获得高关注度，表明项目生态正从“纯 CLI/配置文件”向“可视化运维”演进。

### 💬 高互动反馈：[#2774](https://github.com/HKUDS/nanobot/issues/2774) — 用户实测对比 openclaw
- **评论数：4**
- 用户 @bigsinger 在 Windows 环境下长期使用，称 NanoBot “非常稳定，完爆 openclaw”，并提到 openclaw 频繁崩溃、中毒等问题。
- **信号价值**：此反馈强化了 NanoBot 在**稳定性与可靠性**方面的竞争优势，可作为项目宣传亮点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | [#2737](https://github.com/HKUDS/nanobot/issues/2737) | 升级至 `0.1.4.post6` 后，使用 MiniMax 模型时因 LLM 未调用 `save_memory` 导致 fatal 错误 | ❌ 无 |
| ⚠️ 高 | [#2185](https://github.com/HKUDS/nanobot/issues/2185) | 从 `0.1.4` 升级至 `0.1.4post5` 后，`gemini-3-flash-preview` 模型无法使用（回归问题） | ❌ 无 |
| ⚠️ 中 | [#2450](https://github.com/HKUDS/nanobot/issues/2450) | 使用 `minimax-m2.7:cloud` 时，首次请求成功，后续请求均失败（Ollama Cloud 内部错误） | ❌ 无 |
| ⚠️ 中 | [#2744](https://github.com/HKUDS/nanobot/issues/2744) | 所有 LLM 请求被拦截，其他客户端正常（疑似请求头或签名问题） | ✅ [#2761](https://github.com/HKUDS/nanobot/pull/2761)（已合并，修复 Retry-After 处理逻辑） |
| ⚠️ 中 | [#2777](https://github.com/HKUDS/nanobot/issues/2777) | 使用 Kimi-for-Coding 模型时，`reasoning_content` 在思考阶段被错误输出 | ✅ [#2770](https://github.com/HKUDS/nanobot/pull/2770)（已合并） |

> 建议优先处理 MiniMax 和 Gemini 模型的回归问题，避免影响核心用户群。

---

## 6. 功能请求与路线图信号

以下功能请求已获得社区关注，并已有对应 PR 推进，**极有可能纳入下一版本（v0.1.5）**：

- ✅ **Jinja2 模板系统**（[#2779](https://github.com/HKUDS/nanobot/pull/2779)）：提升响应可定制性，满足企业级个性化需求。
- ✅ **TTS 语音输出支持**（[#2771](https://github.com/HKUDS/nanobot/pull/2771)）：基于 GPT-SoVITS 实现语音交互，拓展无障碍与多模态场景。
- ✅ **两阶段记忆系统（Dream Consolidation）**（[#2717](https://github.com/HKUDS/nanobot/pull/2717)）：解决长期记忆效率问题，提升上下文管理能力。
- ✅ **Web 管理面板生态整合**（[#1922](https://github.com/HKUDS/nanobot/issues/1922)）：虽非官方开发，但社区已提供成熟方案，可能推动官方文档或插件体系支持。

此外，[#2782](https://github.com/HKUDS/nanobot/issues/2782) 请求将 NanoBot 加入 Agent Skills 官方客户端列表，有助于提升项目在标准化生态中的可见度。

---

## 7. 用户反馈摘要

### ✅ 满意点：
- **稳定性卓越**：多位用户（如 @bigsinger）强调 NanoBot 在 Windows 下长期运行无崩溃，显著优于竞品。
- **多通道支持完善**：微信、飞书、钉钉、Telegram 等通道功能持续优化，用户体验流畅。
- **工具调用能力强**：`exec`、`web_search` 等工具被频繁使用，且安全性逐步加强。

### ❌ 痛点与不满：
- **模型兼容性不一致**：部分云模型（如 MiniMax、Gemini）存在回归或连接问题，影响高级用户迁移。
- **工具输出格式混乱**：如 [#2749](https://github.com/HKUDS/nanobot/issues/2749) 中，美团 LongCat 模型返回原始 JSON 而非自然语言，暴露 parser 健壮性不足。
- **缺乏可视化配置**：大量用户依赖手动编辑 `config.json`，易出错且学习成本高（[#1922](https://github.com/HKUDS/nanobot/issues/1922) 即为回应此需求）。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者优先关注：

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 建议 |
|------|------|------|--------|------|------|
| [#2613](https://github.com/HKUDS/nanobot/issues/2613) | Issue | Agent loop crashes with `NoneType` error during streaming | 2026-03-28 | OPEN | 已有 PR [#2631](https://github.com/HKUDS/nanobot/pull/2631) 待合并，应尽快 review |
| [#2331](https://github.com/HKUDS/nanobot/pull/2331) | PR | Strip bot mentions from Discord messages | 2026-03-21 | OPEN | 简单但重要的 UX 修复，适合快速合并 |
| [#2750](https://github.com/HKUDS/nanobot/issues/2750) | Issue | Add done emoji in Feishu after task completion | 2026-04-02 | OPEN | 小功能，但反映用户对状态反馈的精细化需求 |

> 建议建立“good first issue”标签机制，引导新贡献者处理低风险任务，缓解维护压力。

---

**总结**：NanoBot 正处于高速发展期，社区贡献活跃，功能迭代迅速。当前重点应放在**稳定核心 LLM 通路**、**提升工具链健壮性**以及**降低用户配置门槛**上。若能有效处理积压问题并推进模板化与可视化建设，项目有望在 Agent 框架竞争中占据更有利位置。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-04-04）

---

## 1. 今日速览

过去24小时内，Zeroclaw 社区活跃度显著上升，共产生 **23条 Issues 更新** 和 **37条 PR 更新**，其中 **7个 PR 被合并或关闭**，表明开发节奏紧凑。尽管无新版本发布，但核心功能持续演进，尤其在代理会话完整性、工具执行验证和桌面端集成方面取得关键进展。社区对内存泄漏、Web 仪表盘不可用及多架构支持等问题的关注度较高，反映出用户对稳定性和跨平台兼容性的迫切需求。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 v0.6.8（基于 Docker 镜像 `ghcr.io/zeroclaw-labs/zeroclaw:debian`），但多个修复已合并至主干，预计将在下个版本中集中发布。

---

## 3. 项目进展

今日有 **7个 PR 被合并或关闭**，推动多项关键改进：

- **#5199**（已关闭）：修复 Web 仪表盘 Sessions 页面崩溃问题，解决了会话类型定义错误导致的 UI 不可用问题（[#4856](https://github.com/zeroclaw-labs/zeroclaw/issues/4856)）。
- **#3939**（已关闭）：避免 Python shebang 文件被误判为 Shell 脚本，提升技能文件识别准确性。
- **#4920 / #4943**（已关闭）：实现加密配置字段管理 CLI（`zeroclaw secret set/list`）和 HMAC 工具执行收据机制，增强安全性与防幻觉能力。
- **#4922**（已关闭）：修复 MultiMessage 流式输出截断前两个字符的严重 Bug，影响 WhatsApp 等通道的消息完整性。

这些合并显著提升了系统稳定性、安全性和用户体验，为即将发布的版本奠定基础。

---

## 4. 社区热点

以下 Issues/PRs 引发高度关注：

- **[#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)**（6评论，👍2）：`auto_save` 与 `memory_recall` 联用导致内存递归膨胀，属高危内存泄漏问题，开发者正评估修复方案。
- **[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)**（5评论）：Web 仪表盘长期不可用（“Build it with...” 错误），影响桌面 App 和 Web UI 使用，S1 级阻塞问题，亟待解决。
- **[#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231)**（WASM 插件系统）：引入安全沙箱化插件架构，支持用户扩展自定义工具，被视为生态扩展的关键一步。
- **[#5168](https://github.com/zeroclaw-labs/zeroclaw/pull/5168)**（HMAC 收据实现）：提供工具执行真实性验证，回应 #4830 功能请求，获社区积极讨论。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|----------------|
| **S0** | [#5220](https://github.com/zeroclaw-labs/zeroclaw/issues/5220) | 定时任务使用 UTC 而非系统时区，可能导致数据错乱或安全风险 | ❌ 无 |
| **S0** | [#5255](https://github.com/zeroclaw-labs/zeroclaw/issues/5255) | Windows 上“Access is denied”错误，阻碍工作空间初始化 | ❌ 无 |
| **S1** | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web 仪表盘完全不可用，跨版本持续存在 | ❌ 无（但 #5199 部分缓解） |
| **S1** | [#5232](https://github.com/zeroclaw-labs/zeroclaw/issues/5232) | systemd 服务配置错误导致进程重复 | ❌ 无 |
| **S1** | [#5171](https://github.com/zeroclaw-labs/zeroclaw/issues/5171) | Firejail 沙箱无法传递环境变量 | ❌ 已关闭但未明确修复 |
| **S2** | [#5229](https://github.com/zeroclaw-labs/zeroclaw/issues/5229) | NVIDIA API 自定义提供商模型切换失败 | ❌ 无 |
| **S2** | [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) | v0.6.8 仪表盘 Channels 标签页崩溃 | ✅ #5207 可能相关修复 |
| **S3** | [#5258](https://github.com/zeroclaw-labs/zeroclaw/issues/5258) | Windows 上 fsync 目录元数据失败 | ❌ 无 |

> 注：S0=数据丢失/安全风险，S1=工作流阻塞，S2=功能降级，S3=轻微问题

---

## 6. 功能请求与路线图信号

用户强烈需求的功能中，以下已有对应 PR，有望纳入下一版本：

- **HMAC 工具执行收据**（#4830 → #5168）：用于检测 LLM 工具调用幻觉，已进入实现阶段。
- **CLI 配置管理**（#4669 → #5165）：提供 `zeroclaw props` 命令管理配置属性，解决手动编辑痛点。
- **WASM 插件系统**（#5231）：支持第三方工具扩展，是生态开放的重要里程碑。
- **Tauri 桌面应用**（#5265）：集成 macOS 自动化能力，推动桌面端体验升级。
- **musl 构建支持**（#5253）：满足 Alpine Docker 用户需求，CI 扩展中。

此外，**WeChat iLink 通道恢复**（#5259）和 **多 Shell 支持**（#5246）也获得关注，可能作为次要特性跟进。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “Web 仪表盘从 v0.6.0 开始就一直是‘not available’，根本没法用。”（#4866）
  - “在树莓派上 `zeroclaw update` 总是下载 x86_64 二进制，ARM64 用户被忽视。”（#4842）
  - “定时任务按 UTC 跑，我设的北京时间全乱了，差点误事。”（#5220）
  - “WhatsApp 收不到回复，日志显示处理了但消息没发出去。”（#5260）

- **满意点**：
  - “HMAC 收据想法很棒，终于能区分真工具调用和幻觉了。”（#4830 讨论）
  - “WASM 插件让企业集成变得可行，不用再 fork 代码了。”（#5231 评论）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先处理：

- **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)**（2026-03-02 创建，6评论）：用户无法找到 Napcat/OneBot 通道选项，影响 QQ 生态集成，超 30 天未回应。
- **[#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832)**（2026-03-27 创建）：高熵令牌误判导致合法文件名被遮蔽，涉及安全模块误报，需配置开关。
- **[#4669](https://github.com/zeroclaw-labs/zeroclaw/issues/4669)**（2026-03-25 创建）：缺乏配置 CLI 工具，虽已有 PR #5165，但原 Issue 未标记进展。

> 建议：对超过 7 天无维护者回复的 S1+ 级 Issue 设置自动提醒，提升社区信任度。

--- 

**报告生成时间**：2026-04-04  
**数据来源**：GitHub Zeroclaw 仓库公开数据

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-04-04）

---

## 1. 今日速览

PicoClaw 在 2026-04-04 继续保持高活跃度，过去24小时内共处理 **32 条 Issues**（新开/活跃 21 条，关闭 11 条）和 **58 条 Pull Requests**（待合并 19 条，已合并/关闭 39 条），显示出社区贡献与开发节奏高度同步。项目发布两个新版本（`v0.2.5` 和 `nightly` 构建），涵盖关键功能增强与安全修复。整体项目健康度良好，核心功能持续演进，同时安全性和多用户支持成为当前重点方向。

---

## 2. 版本发布

### 🔹 [v0.2.5](https://github.com/sipeed/picoclaw/releases/tag/v0.2.5)（正式版）
- **主要更新**：
  - 支持从 `TZ` 和 `ZONEINFO` 环境变量加载时区信息（#2279）
  - 实现按行读取文件的工具功能（#1981）
  - 对齐 Matrix 平台的 CommonMark 渲染规范
- **影响范围**：无破坏性变更，建议所有用户升级以获取稳定性与兼容性提升。

### 🔹 [nightly v0.2.5-nightly.20260404.84e42d69](https://github.com/sipeed/picoclaw/releases/tag/v0.2.5-nightly.20260404.84e42d69)
- 自动化构建版本，包含最新主干提交，适用于测试前沿功能，**不建议生产环境使用**。

---

## 3. 项目进展

今日合并/关闭的 PR 显著推进了以下方向：

| 类别 | 进展摘要 | 链接 |
|------|--------|------|
| **安全加固** | 引入标准 HTTP 登录流程替代 token-in-logs 认证机制，提升 Web UI 安全性（#2317, #2318） | [PR#2317](https://github.com/sipeed/picoclaw/pull/2317), [PR#2318](https://github.com/sipeed/picoclaw/pull/2318) |
| **多租户与隔离** | 集成“Agent Shield”安全套件，支持技能白名单、多用户隔离与权限控制（#2313, #2138） | [PR#2313](https://github.com/sipeed/picoclaw/pull/2313), [PR#2138](https://github.com/sipeed/picoclaw/pull/2138) |
| **Provider 稳定性** | 修复跨 Provider 回退链错误使用主模型 API 配置的问题（#2143）；修复 Anthropic 协议误用 OpenAI 格式问题（#2259） | [PR#2143](https://github.com/sipeed/picoclaw/pull/2143), [PR#2259](https://github.com/sipeed/picoclaw/pull/2259) |
| **CLI 工具健壮性** | 改进 CLI 工具调用解析逻辑，支持混合响应与格式化 JSON（#1813, #1812） | [PR#1813](https://github.com/sipeed/picoclaw/pull/1813), [PR#1812](https://github.com/sipeed/picoclaw/pull/1812) |
| **Docker 部署优化** | 修复 Docker 日志输出与网络绑定问题，提升容器化体验（#2314） | [PR#2314](https://github.com/sipeed/picoclaw/pull/2314) |

> ✅ 项目整体向更安全、稳定、易用的方向迈出关键步伐，尤其在认证机制与多用户架构上取得实质性突破。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 分析 |
|------|------|--------|------|
| [#295](https://github.com/sipeed/picoclaw/issues/295) | 智能模型路由（成本与性能优化） | 9 | 用户强烈关注资源效率，希望根据任务复杂度动态选择模型，避免大模型处理简单请求造成浪费。此为长期路线图核心需求。 |
| [#639](https://github.com/sipeed/picoclaw/issues/639) | Discord 图片发送失败 | 9 | 已关闭，但反映跨平台兼容性痛点。用户期望与 OpenClaw 行为一致，凸显对主流 IM 通道功能完整性的高要求。 |
| [#350](https://github.com/sipeed/picoclaw/issues/350) | 零配置 CLI 向导 | 8 | 非技术用户部署门槛高，亟需交互式引导。此需求与近期 Web UI 登录流程改进形成呼应，体现“降低使用门槛”为当前社区共识。 |
| [#293](https://github.com/sipeed/picoclaw/issues/293) | 自主浏览器操作 | 6（👍6） | 高赞功能请求，扩展 AI 到 Web 自动化场景，符合 Agent 能力边界拓展趋势。 |

> 💡 社区核心诉求：**降低部署复杂度**、**提升多通道兼容性**、**实现智能资源调度**。

---

## 5. Bug 与稳定性

### ⚠️ 今日报告 Bug（按严重程度排序）

| Issue | 描述 | 严重性 | 是否有 Fix PR |
|------|------|--------|----------------|
| [#2307](https://github.com/sipeed/picoclaw/issues/2307) | Web Launcher 存在 RCE 漏洞：未认证修改 config + 重启网关执行任意命令 | 🔴 高危 | ❌ 无（需紧急响应） |
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) | 会话历史记录丢失，仅保留最后1-2条 | 🟠 中危 | ❌ 无 |
| [#2236](https://github.com/sipeed/picoclaw/issues/2236) | Docker 修改端口后 Web 输入框禁用 | 🟠 中危 | ✅ 已有修复方向（见 #2314） |
| [#2302](https://github.com/sipeed/picoclaw/issues/2302) | Web UI 频繁要求重新认证（PERMISSION_DENIED） | 🟡 低危 | ❌ 无 |

> ❗ **安全警报**：#2307 为严重安全漏洞，建议维护者优先审查并发布补丁。

---

## 6. 功能请求与路线图信号

结合 Issues 与 PR，以下功能有望纳入下一版本：

| 功能 | 状态 | 依据 |
|------|------|------|
| **标准 Web 登录流程** | 🚀 即将完成 | #2317/#2318 已提交，解决认证体验问题 |
| **多用户与技能白名单** | 🚀 开发中 | #2313 引入 Agent Shield，响应安全与隔离需求 |
| **短时记忆引擎（LCM）** | 🚀 实验性实现 | #2285 基于 SQLite 实现上下文压缩，回应 #1919 |
| **Mattermost 通道支持** | ✅ 已合并 | #1586 长期 PR 接近完成 |
| **Grafana Alertmanager 集成** | 🔄 进行中 | #2251 新增告警通道，拓展运维场景 |

> 📌 路线图趋势：**安全 > 多用户 > 记忆能力 > 通道扩展**

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **满意点**：
  - “终于可以不用从日志里找 token 登录了！”（呼应 #2317）
  - “Docker 日志现在能正常看了，感谢修复。”（#2314）
  - “回退链终于能跨 Provider 工作了，之前一直卡死。”（#2143）

- **痛点**：
  - “飞书在安卓 Termux 上根本跑不起来，OpenClaw 都能支持。”（#1675）
  - “对话记录丢得厉害，做演示都没法用。”（#2310）
  - “免费模型配额满了就无限加载，毫无提示。”（#2303）
  - “每次重启都要重新输密码，太烦了。”（#2302）

> 💬 用户核心诉求：**稳定性 > 易用性 > 透明度**

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

| 编号 | 类型 | 标题 | 创建时间 | 状态 |
|------|------|------|----------|------|
| [#772](https://github.com/sipeed/picoclaw/issues/772) | Issue | Agent 系统重构（1200+ LOC 单体问题） | 2026-02-25 | 🟡 开放，无进展 |
| [#286](https://github.com/sipeed/picoclaw/issues/286) | Issue | Android Termux 部署指南 | 2026-02-16 | 🟡 开放，无文档更新 |
| [#346](https://github.com/sipeed/picoclaw/issues/346) | Issue | 防止内存膨胀（目标 64MB RAM 设备） | 2026-02-17 | 🟡 开放，无优化措施 |
| [#1586](https://github.com/sipeed/picoclaw/pull/1586) | PR | Mattermost 通道支持 | 2026-03-15 | 🟡 开放，未合并 |

> 🔔 **提醒**：#772（Agent 重构）为架构级债务，影响长期可维护性，建议纳入 Q2 技术规划。

---

**报告生成时间**：2026-04-04  
**数据来源**：[PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw)  
**分析师备注**：项目处于快速迭代期，安全加固与用户体验优化是当前双主线，建议加强漏洞响应机制与文档同步。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-04-04）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出**高活跃度**，共产生 6 条 Issues 更新与 27 条 PR 更新，其中 17 个 PR 被合并或关闭，显示出高效的代码集成节奏。社区对认证机制、多通道集成及 Apple Container 兼容性持续关注，反映出项目在跨平台部署与用户体验优化上的关键挑战。尽管无新版本发布，但底层架构改进（如路径解析、任务调度、安全加固）持续推进，项目整体处于**稳健演进阶段**。

---

## 2. 版本发布

**无新版本发布**。  
当前开发重心集中于功能完善与稳定性修复，未触发正式版本迭代。

---

## 3. 项目进展

今日共 **17 个 PR 被合并或关闭**，涵盖功能增强、安全修复与文档更新，显著推进项目成熟度：

- **认证与凭证管理升级**：  
  [#1611](https://github.com/qwibitai/nanoclaw/pull/1611) 实现**按群组独立配置模型与凭证**，支持三层回退策略（群组 → 全局 → OneCLI），提升多租户场景下的灵活性与隔离性。  
  [#1614](https://github.com/qwibitai/nanoclaw/pull/1614) 将 `containerConfig` 与 `mountAllowlist` 暴露至 SDK API，降低外部集成对本地配置文件的依赖。

- **Apple Container 网络稳定性修复**：  
  多个 PR（[#1523](https://github.com/qwibitai/nanoclaw/pull/1523)、[#1609](https://github.com/qwibitai/nanoclaw/pull/1609)、[#1323](https://github.com/qwibitai/nanoclaw/pull/1323)）解决了冷启动时网关检测失败、代理绑定异常及挂载兼容性问题，显著改善 macOS 用户首次安装体验。

- **任务调度逻辑优化**：  
  [#1617](https://github.com/qwibitai/nanoclaw/pull/1617) 修复任务队列占用错误问题，确保调度基于目标群组 JID 而非 `chat_jid`，避免误阻塞。

- **多通道集成扩展**：  
  [#1613](https://github.com/qwibitai/nanoclaw/pull/1613) 引入 Telegram 机器人池与 Gmail 通道支持，增强异步通信能力；[#1615](https://github.com/qwibitai/nanoclaw/pull/1615) 合并 WhatsApp/Slack 通道并添加表情反应功能。

- **安全加固**：  
  [#1231](https://github.com/qwibitai/nanoclaw/pull/1231) 修复命令注入漏洞，替换 `exec()` 为 `execFile()`，强化容器运行时安全性。

---

## 4. 社区热点

### 🔥 高关注度 Issues

- **[#1608](https://github.com/qwibitai/nanoclaw/issues/1608)**：用户反馈 **Claude OAuth 设置流程混乱且缺乏文档**，指出 OneCLI 自动注入 `ANTHROPIC_API_KEY=placeholder` 导致凭证冲突。此问题直接影响新用户上手体验，亟需官方澄清与文档补全。

- **[#1224](https://github.com/qwibitai/nanoclaw/issues/1224)**（👍6）：呼吁**重新评估 TOS 合规性**，建议用 Claude Code CLI 替代 Agent SDK，反映社区对长期法律风险的担忧。该议题已持续数周，需维护者明确立场。

- **[#1620](https://github.com/qwibitai/nanoclaw/issues/1620)**：Anthropic 新规下，**OAuth 认证将消耗“额外用量”而非订阅额度**，NanoClaw 用户若沿用旧配置将面临意外计费。此变更要求项目方紧急更新文档并推荐 API Key 方案。

> 分析：社区核心诉求集中于**认证机制透明化、合规性保障与成本可控性**，反映出项目在商业化集成中的关键瓶颈。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 |
|--------|--------|------|
| ⚠️ 高 | Apple Container 冷启动时 credential proxy 绑定失败（`EADDRNOTAVAIL`） | ✅ 已修复（[#1609](https://github.com/qwibitai/nanoclaw/pull/1609)） |
| ⚠️ 高 | 任务调度器误用 `chat_jid` 导致群组队列阻塞 | ✅ 已修复（[#1617](https://github.com/qwibitai/nanoclaw/pull/1617)） |
| ⚠️ 中 | `process.cwd()` 路径解析不可靠，影响容器启动 | ✅ 已修复（[#1612](https://github.com/qwibitai/nanoclaw/pull/1612)） |
| ⚠️ 中 | `/dev/null` 文件挂载导致 Apple Container 启动失败 | ✅ 已修复（[#1323](https://github.com/qwibitai/nanoclaw/pull/1323)） |

> 所有高优先级 Bug 均已通过 PR 修复并合并，稳定性显著提升。

---

## 6. 功能请求与路线图信号

- **按群组凭证管理**（[#869](https://github.com/qwibitai/nanoclaw/issues/869)）已被实现（[#1611](https://github.com/qwibitai/nanoclaw/pull/1611)），表明多租户支持已成为核心方向。
- **插件系统类比通道机制**（[#1387](https://github.com/qwibitai/nanoclaw/pull/1387)）仍处于开放状态，反映社区对可扩展架构的强烈兴趣，可能成为下一阶段重点。
- **官方 Agent Skills 客户端列表收录**（[#1618](https://github.com/qwibitai/nanoclaw/issues/1618)）为品牌曝光机会，维护者可考虑主动对接。

> 路线图信号：**多通道集成、SDK 抽象化、合规性适配**将成为近期演进主线。

---

## 7. 用户反馈摘要

- **痛点**：  
  - OAuth 配置流程“反直觉”，缺乏清晰指引（[#1608](https://github.com/qwibitai/nanoclaw/issues/1608)）  
  - 使用 `claw cli` 时仍提示 `/login`，与 onecli 行为不一致（[#1599](https://github.com/qwibitai/nanoclaw/issues/1599)）  
  - Apple Container 首次设置失败率高，文档未覆盖边缘场景  

- **满意点**：  
  - 多通道支持（WhatsApp/Slack/Telegram/Gmail）获积极反馈  
  - 安全审计响应迅速，命令注入等问题及时修复  

- **使用场景**：  
  用户主要在**跨平台群组协作**（Discord/WhatsApp/Telegram）、**自动化邮件处理**及**本地开发环境**中部署 NanoClaw，强调低延迟与凭证隔离需求。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 最后更新时间 | 状态 |
|------|------|------|-------------|------|
| Issue | [#1224](https://github.com/qwibitai/nanoclaw/issues/1224) | Revisiting TOS Compliance: Replacing Agent SDK with Claude Code CLI | 2026-04-03 | 🔴 长期未决，需维护者公开回应合规策略 |
| PR | [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) | Feature create new session | 2026-04-03 | 🟡 开放超10天，未获 review |
| PR | [#1387](https://github.com/qwibitai/nanoclaw/pull/1387) | Feature add plugin system analogous to channels | 2026-04-03 | 🟡 开放超10天，架构级提案需评估 |

> **建议**：优先处理 [#1224] 合规性讨论，避免社区信任流失；对插件系统 PR 启动技术可行性评估。

---  
*数据来源：NanoClaw GitHub 仓库（2026-04-03 24:00 UTC）*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-04-04）

---

## 1. 今日速览

IronClaw 项目在 2026-04-03 继续保持高活跃度，社区与开发团队协同推进多项关键修复与架构演进。过去24小时内共产生 **31 条 Issues 更新**（28 新开/活跃，3 已关闭）和 **50 条 PR 更新**（37 待合并，13 已合并/关闭），显示出强烈的开发迭代节奏。核心团队聚焦于 **V2 引擎稳定性、TUI 体验优化、权限模型重构及第三方集成修复**，同时积极响应用户反馈的 OAuth、Slack/Telegram 通道异常等生产环境问题。无新版本发布，但 staging 分支持续集成多项高风险 PR，为下一版本奠定基础。

---

## 2. 版本发布

**无新版本发布**。当前主干仍处于功能密集集成阶段，预计近期将基于 `staging-promote` 分支推进候选版本。

---

## 3. 项目进展

今日合并/关闭的重要 PR 显著提升了系统健壮性与用户体验：

- **[#1986](https://github.com/nearai/ironclaw/pull/1986)（已合并）**：修复经典线程中 pending approval 状态在用户发送 follow-up 消息时无法重新触发的缺陷，增强 TUI 交互一致性。
- **[#1984](https://github.com/nearai/ironclaw/pull/1984)（已合并）**：解决 TUI 在恢复历史对话时丢失 pending approval 模态框的问题，提升终端用户操作连续性。
- **[#1952](https://github.com/nearai/ironclaw/pull/1952)（已合并）**：反转 LLM 推理标签默认策略，未知模型（如 `auto`）不再强制注入 `<think>/<final>` 标签，避免 API 错误。
- **[#1951](https://github.com/nearai/ironclaw/pull/1951)（已合并）**：修正 Web 聊天界面中 turn cost 显示逻辑，实现每轮独立计费统计，提升用量透明度。
- **[#1898](https://github.com/nearai/ironclaw/pull/1898)（已合并）**：完成集中式所有权模型重构，引入类型化身份、数据库驱动配对与缓存机制，统一多租户与单租户部署逻辑。

> 整体项目在 **权限治理、LLM 适配、UI 一致性** 三大方向取得实质性进展。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映用户核心痛点：

- **[#1992](https://github.com/nearai/ironclaw/issues/1992)**：Google OAuth 返回 400 “Access blocked” 错误，影响 Gmail/Calendar 集成。用户指出应用未通过 Google 安全策略审核，需紧急合规调整。
- **[#1998](https://github.com/nearai/ironclaw/issues/1998) & [#1997](https://github.com/nearai/ironclaw/issues/1997)**：Slack 通道配置流程断裂，用户自建 App 后仍无法通信，且缺乏官方 Slack App 支持，导致集成体验差。
- **[#1996](https://github.com/nearai/ironclaw/issues/1996)**：PROD 环境例行任务因“工具被禁用”而失败，暴露 routine 执行上下文权限隔离缺陷。
- **[#1945](https://github.com/nearai/ironclaw/issues/1945)**：V2 引擎 mission 的 `threads_today` 计数器永不重置，导致每日预算耗尽后永久阻塞，属严重逻辑漏洞。

> 社区诉求集中于 **第三方集成稳定性、生产环境可靠性、权限与调度机制正确性**。

---

## 5. Bug 与稳定性

按严重程度排序的关键 Bug：

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| 🔴 高 | [#1945](https://github.com/nearai/ironclaw/issues/1945) | Mission 每日线程计数器不重置，永久耗尽预算 | ❌ 无 PR |
| 🔴 高 | [#1944](https://github.com/nearai/ironclaw/issues/1944) | Cron 调度失效，`next_fire_at` 从未计算 | ❌ 无 PR |
| 🔴 高 | [#1992](https://github.com/nearai/ironclaw/issues/1992) | Google OAuth 被拒，违反安全策略 | ❌ 无 PR |
| 🟠 中 | [#1996](https://github.com/nearai/ironclaw/issues/1996) | 例行任务中工具被禁用 | ❌ 无 PR |
| 🟠 中 | [#1950](https://github.com/nearai/ironclaw/issues/1950) | V2 LLM 适配器中孤立 tool_result 导致 Anthropic API 报错 | ✅ [#1981](https://github.com/nearai/ironclaw/pull/1981) 已开 |
| 🟢 低 | [#1949](https://github.com/nearai/ironclaw/issues/1949) | Shell 工具工作目录不存在时报错不友好 | ✅ [#1989](https://github.com/nearai/ironclaw/pull/1989) 已开 |

---

## 6. 功能请求与路线图信号

用户提出的新功能中，以下具备较高采纳可能性：

- **[#2002](https://github.com/nearai/ironclaw/issues/2002)**：请求在 preflight 阶段支持外部 HTTP 回调钩子，用于自定义策略拦截。契合当前安全增强趋势（见 [#1956](https://github.com/nearai/ironclaw/issues/1956) 安全日志需求），可能被纳入下一版策略引擎。
- **[#1894](https://github.com/nearai/ironclaw/issues/1894)**：统一工作区 VFS 抽象，整合文件系统、DB 与远程存储。已有架构讨论基础，且与多租户部署强相关，属中长期路线图候选。
- **[#1980](https://github.com/nearai/ironclaw/issues/1980)**：在 Agent Skills 官方客户端列表展示 IronClaw Logo。低风险品牌曝光机会，维护者已关注。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “飞书通道配置正确但仍报 `app_id not configured`”（#1633）→ 配置同步机制存疑。
  - “Gmail OAuth 链接第一次不生成，要催两次”（#2001）→ 流程容错性差。
  - “例行任务发出去的是 raw JSON 文件，不是总结消息”（#1995）→ 输出格式化缺失。
  - “502 错误后重开会话，AI 谎称任务完成”（#1993）→ 状态一致性严重缺陷。

- **满意点**：
  - 用户对 TUI 审批流程改进（#1983/#1985）表示认可，认为“终于能看见 pending 状态了”。
  - 对 `CLAWHUB_ENABLED` 开关（#1594）设计点赞，“终于可以禁用公共技能库了”。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先处理：

- **[#846](https://github.com/nearai/ironclaw/issues/846)**（2026-03-10 创建）：`ironclaw onboard` 数据库保存失败但主程序仍可启动，存在配置不一致风险，**24 天未更新**。
- **[#1446](https://github.com/nearai/ironclaw/pull/1446)**（2026-03-20 创建）：Aliyun Coding Plan 支持 PR，规模 XL，**15 天未 review**，可能影响国内用户接入。
- **[#1759](https://github.com/nearai/ironclaw/pull/1759)**（2026-03-30 创建）：WalletConnect 异步交易审批集成，高风险高价值，**5 天未 merge**，需安全审计。

> 建议建立 SLA 机制，对超过 7 天未响应的 PR/Issue 自动标记并分配负责人。

--- 

**报告生成时间：2026-04-04 UTC**  
**数据来源：** [IronClaw GitHub Repository](https://github.com/nearai/ironclaw)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-04-04）

---

## 1. 今日速览

LobsterAI 在 2026-04-03 继续保持高活跃度，社区与开发团队互动频繁。过去24小时内共产生 **38 条 Issues 更新**（28 新开/活跃，10 已关闭）和 **50 条 PR 更新**（19 待合并，31 已合并/关闭），显示出强劲的开发节奏与问题响应能力。项目于当日发布 **3 个新版本**（2026.4.3、2026.4.1、2026.3.31），涵盖功能增强、稳定性修复与多语言优化。尽管存在部分用户反馈的严重启动故障（#1400），但团队已通过热修复和配置调整积极应对，整体项目健康度良好。

---

## 2. 版本发布

### 🔹 LobsterAI 2026.4.3（最新）
- **核心功能**：
  - 支持将会话记录导出为 Markdown/JSON 格式，便于二次编辑或程序化处理（[#718](https://github.com/netease-youdao/LobsterAI/pull/718)）
  - 新增多机器人（multi-bots）支持能力（[#1204](https://github.com/netease-youdao/LobsterAI/pull/1204)）
  - 修复 IM 模块在上下文溢出时因 400 错误导致的崩溃问题，通过重建会话恢复连接
- **影响范围**：IM 用户、需导出对话数据的开发者用户

### 🔹 LobsterAI 2026.4.1
- **关键修复**：
  - 限制 OpenClaw 沙箱模式仅限企业版配置启用（[#1189](https://github.com/netease-youdao/LobsterAI/pull/1189)）
  - 默认关闭自动执行模式下的沙箱功能，避免非授权环境误触发（[#1203](https://github.com/netease-youdao/LobsterAI/pull/1203)）
- **安全提示**：此版本强化了沙箱权限控制，普通用户若依赖沙箱执行需确认订阅等级。

### 🔹 LobsterAI 2026.3.31
- **重大功能**：
  - 支持同时接入多个自定义模型供应商（multi-custom-providers），提升模型灵活性（[#1109](https://github.com/netease-youdao/LobsterAI/pull/1109)、[#1094](https://github.com/netease-youdao/LobsterAI/pull/1094)）
  - 引入 12 套主题系统，基于 CSS 变量架构实现动态换肤
- **迁移注意**：多供应商配置需手动迁移旧配置，建议备份 `config.json`。

---

## 3. 项目进展

今日共 **31 个 PR 被合并或关闭**，重点推进方向包括：

- **技能系统优化**：修复技能重复导入无校验问题（[#1445](https://github.com/netease-youdao/LobsterAI/pull/1445)）、新增技能 Hover Tooltip 展示完整描述（[#1459](https://github.com/netease-youdao/LobsterAI/pull/1459)）
- **定时任务稳定性**：修复飞书多机器人投递失败（[#1458](https://github.com/netease-youdao/LobsterAI/pull/1458)）、不重复任务清空日期后无响应（[#1454](https://github.com/netease-youdao/LobsterAI/pull/1454)）
- **国际化与 UI 一致性**：修复语言切换后布局错乱（[#1168](https://github.com/netease-youdao/LobsterAI/pull/1168)）、通知消息未随语言更新（[#529](https://github.com/netease-youdao/LobsterAI/pull/529)）
- **防抖与交互安全**：为 `handleContinueSession` 添加重复提交保护（[#759](https://github.com/netease-youdao/LobsterAI/pull/759)）、修复快捷键重复设置无校验（[#1456](https://github.com/netease-youdao/LobsterAI/pull/1456)）

> 项目整体在 **用户体验一致性、系统稳定性、多平台兼容性** 方面取得显著进展。

---

## 4. 社区热点

### 🔥 高关注度 Issues

| Issue | 标题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) | 4.1版本严重bug，网关反复启动失败 | 5 | 用户从 v3.30 升级至 v4.1 后遭遇无限重启循环，且自定义 LLM（qwen3.5-plus）无法调用，怀疑与自动配置冲突 |
| [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) | Ubuntu 构建启动失败（白屏） | 4 | 按文档构建 deb 包后应用无法启动，疑似 Electron 或依赖兼容性问题 |
| [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | 有计划支持新版本的 openclaw 吗？ | 1 | 用户升级 openclaw v2026.3.24 后因 breaking change 报错，询问官方适配计划 |

> **分析**：用户最关心 **版本升级稳定性** 与 **第三方集成兼容性**。#1400 反映的版本回退风险可能影响用户信任，需优先处理。

---

## 5. Bug 与稳定性

### ⚠️ 严重问题（需紧急关注）

| Issue | 描述 | 状态 | 关联 Fix PR |
|------|------|------|-------------|
| [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) | v4.1 网关无限重启 + 自定义 LLM 调用失败 | OPEN | 无（需排查 OpenClaw 配置同步逻辑） |
| [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) | Ubuntu 构建后白屏 | OPEN | 无（可能需 Electron 版本回退或依赖检查） |

### 🐛 一般性 Bug（已有修复）

| Issue | 描述 | 状态 | 关联 Fix PR |
|------|------|------|-------------|
| [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) | 定时任务“不重复”清空日期后无响应 | CLOSED | [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454) |
| [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) | 快捷键重复设置无校验 | OPEN | [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456)（已提 PR） |
| [#1416](https://github.com/netease-youdao/LobsterAI/issues/1416) | 英文界面下额度数值重叠 | OPEN | 无（UI 自适应问题） |

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 Issue | 是否已有 PR | 纳入可能性 |
|--------|-----------|------------|----------|
| 技能 Hover 展示完整描述 | [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) | ✅ 已提交 | 高（提升 UX） |
| 代码块支持语法高亮与搜索 | [#1306](https://github.com/netease-youdao/LobsterAI/pull/1306) | ✅ 进行中 | 高（开发者刚需） |
| 各模型 Token 用量统计 | [#582](https://github.com/netease-youdao/LobsterAI/issues/582) | ❌ 无 | 中（成本监控需求强烈） |
| 支持新版 OpenClaw | [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | ❌ 无 | 高（影响集成用户） |

> **预测**：Token 统计与 OpenClaw 适配将成为下一版本重点。

---

## 7. 用户反馈摘要

- **痛点**：
  - 版本升级后稳定性下降（“彻底瘫痪”、“反复重启”）
  - 多语言界面不一致（中文环境下显示英文提示、布局错乱）
  - 技能管理体验差（无成功提示、重复添加、描述截断）
  - 定时任务逻辑混乱（执行后自动删除、无历史记录）

- **满意点**：
  - 多模型供应商支持极大提升灵活性
  - 会话导出功能受开发者欢迎
  - 主题系统获得视觉体验好评

- **典型场景**：
  > “我需要监控每个模型的 Token 消耗来控制 API 成本，但现在只能去各家后台查，非常割裂。” —— @noransu（#582）

---

## 8. 待处理积压

| Issue/PR | 标题 | 创建时间 | 状态 | 提醒 |
|--------|------|--------|------|------|
| [#582](https://github.com/netease-youdao/LobsterAI/issues/582) | 增加各模型 Token 用量统计与查看功能 | 2026-03-20 | OPEN | 高价值功能，建议排期 |
| [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | 有计划支持新版本的 openclaw 吗？ | 2026-04-03 | OPEN | 影响集成用户，需明确 roadmap |
| [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) | 4.1版本严重bug，网关反复启动失败 | 2026-04-03 | OPEN | 紧急，建议提供降级指南或 hotfix |

> **建议**：对 #1400 提供临时解决方案（如回滚脚本），并发布稳定性公告。

---

**报告生成时间**：2026-04-04  
**数据来源**：[LobsterAI GitHub 仓库](https://github.com/netease-youdao/LobsterAI)  
**分析师备注**：项目处于快速迭代期，需加强版本发布前的回归测试与多环境验证，以平衡功能创新与稳定性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报**  
📅 日期：2026-04-04  
🔍 数据来源：GitHub（moltis-org/moltis）  
📊 分析维度：Issues、PRs、Releases、社区互动

---

### 1. 今日速览

过去24小时内，Moltis 项目保持中等活跃度，共产生 **6 条新 Issue 更新** 和 **3 条 PR 更新**，无新版本发布。社区对功能扩展（如飞书集成、代理支持）和稳定性问题（OAuth 流程异常、安全钩子中断）的关注度上升。开发侧持续推进浏览器交互 UI 和 Matrix 通道集成等核心功能，但 Bug 类 Issue 暂未见修复 PR，需关注响应时效。整体项目处于功能迭代与问题暴露并行的阶段。

---

### 2. 版本发布

❌ 无新版本发布。

---

### 3. 项目进展

✅ **已合并/关闭 PR 进展**：

- **#541 [CLOSED] feat(tools): add Firecrawl integration for web scraping and search**  
  🔗 https://github.com/moltis-org/moltis/pull/541  
  该 PR 已关闭（推测为合并），为 Moltis 添加了基于 Firecrawl 的网页抓取与搜索能力，支持 JS 密集型页面的高质量 Markdown 提取，并作为 `web_search` 提供程序集成。此功能增强了 AI 助手的外部信息获取能力，是工具链扩展的重要一步。

> 💡 尽管状态为“CLOSED”，但未明确标注“merged”，建议维护者确认是否已合入主分支。

---

### 4. 社区热点

🔥 **最活跃 Issue：#383 [OPEN] Support Lark/Feishu**  
🔗 https://github.com/moltis-org/moltis/issues/383  
- 评论数：3 | 👍 反应数：6（最高）  
- 创建者：@memwey | 最后更新：2026-04-03  

该 Issue 提出对飞书（Lark/Feishu）平台的原生支持，反映中文开发者与企业用户对国内主流协作平台集成的强烈需求。尽管创建于3月10日，但在过去24小时内获得显著互动，表明社区对该功能的期待持续升温。结合已有 Matrix 通道 PR（#500），可见 Moltis 正积极拓展多平台消息通道生态。

---

### 5. Bug 与稳定性

⚠️ **新报告 Bug（按严重性排序）**：

1. **#549 [OPEN] MacOS Desktop App doesn't do oauth flow for Codex**  
   🔗 https://github.com/moltis-org/moltis/issues/549  
   - 平台特异性问题，影响 macOS 桌面端用户使用 Codex 身份验证流程。  
   - 严重性：高（阻碍核心功能使用）  
   - ✅ 无关联修复 PR，需优先排查 OAuth 实现兼容性。

2. **#547 [OPEN] Hook circuit breaker may disable security hooks via intentional exit 1 blocks**  
   🔗 https://github.com/moltis-org/moltis/issues/547  
   - 安全相关逻辑缺陷：断路器机制可能误判“故意退出码 1”为故障，导致安全钩子被错误禁用。  
   - 严重性：中高（潜在安全风险）  
   - ✅ 无修复 PR，建议安全团队介入审查。

> 📌 当前无 Bug 类 Issue 被关闭或标记为已修复，维护者需加强响应。

---

### 6. 功能请求与路线图信号

📌 **高潜力功能请求**：

- **#548 [OPEN] Application and/or channel level proxy support**  
  🔗 https://github.com/moltis-org/moltis/issues/548  
  提出在应用层或通道层支持代理配置，适用于企业内网或受限网络环境。此需求具有广泛适用性，可能成为下一版本网络模块优化的重点。

- **#546 [OPEN] Rate-Aware Execution & Optional "Wait Instead of Fallback" Mode**  
  🔗 https://github.com/moltis-org/moltis/issues/546  
  请求在执行逻辑中引入速率感知机制，并提供“等待而非降级”模式，提升高负载下的用户体验一致性。该功能与 API 调用稳定性密切相关，具备纳入 v0.5+ 路线图的潜力。

- **#545 [OPEN] 多久更新一个版本？**  
  🔗 https://github.com/moltis-org/moltis/issues/545  
  用户直接询问发布周期，反映对项目迭代节奏的关注。建议维护团队明确发布策略（如月度小版本、季度大版本），增强社区信心。

> ✅ 已有相关开发动向：  
> - Matrix 通道支持（#500）正在进行，预示多平台通信架构正在构建。  
> - 浏览器交互 UI（#531）持续推进，强化本地执行与可视化能力。

---

### 7. 用户反馈摘要

🗣️ 从 Issues 评论与描述中提炼关键用户声音：

- **痛点**：  
  - macOS 桌面端 OAuth 流程失效，导致无法正常使用 Codex 功能（#549）。  
  - 安全机制存在误判风险，可能意外禁用关键钩子（#547）。  
  - 缺乏对飞书等本土平台的支持，限制企业用户 adoption（#383）。

- **使用场景**：  
  - 企业内网环境需代理支持以连接外部 AI 服务（#548）。  
  - 用户希望在高频调用时系统能“等待”而非直接降级，避免任务中断（#546）。

- **满意度信号**：  
  - 对 Firecrawl 集成（#541）和浏览器 UI（#531）等新功能开发表示关注，隐含对技术路线的认可。

---

### 8. 待处理积压

⏳ **长期未响应重要事项提醒**：

- **#383 Support Lark/Feishu**（创建于 2026-03-10，距今已 25 天）  
  虽非新 Issue，但近期互动活跃，且无维护者回应或标签更新。建议评估可行性并给出 roadmap 反馈。

- **#500 feat(channels): add Matrix channel integration**（创建于 2026-03-28，Open 状态超 7 天）  
  🔗 https://github.com/moltis-org/moltis/pull/500  
  重要功能 PR，涉及核心通信模块扩展，但无评论或 review 记录。建议优先安排代码审查，避免阻塞集成进度。

> 🛎️ 维护者行动建议：  
> 1. 对 #549 和 #547 启动 Bug 排查，评估是否需 hotfix。  
> 2. 明确 #383 和 #548 的功能优先级，发布初步回应。  
> 3. 推动 #500 和 #531 的 PR review，加速功能落地。

---

📌 **项目健康度评估**：  
✅ 功能开发持续推进，社区参与积极  
⚠️ Bug 响应滞后，安全风险需警惕  
🔮 下一阶段重点：提升稳定性 + 扩展平台兼容性

---  
*报告生成：AI 开源项目分析师 | 数据截止：2026-04-04 23:59 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-04-04）

---

## 1. 今日速览

CoPaw 项目在 2026 年 4 月 3 日继续保持高活跃度，社区贡献与问题反馈密集。过去 24 小时内共产生 **50 条 Issues 更新**（37 条新开/活跃，13 条关闭）和 **32 条 PR 更新**（15 条待合并，17 条已合并/关闭），并发布 **2 个新版本**（v1.0.1 正式版与 v1.0.1-beta.2）。整体开发节奏稳健，核心功能持续增强，但高优先级 Bug（如 CPU 占用异常、会话数据丢失）引发用户强烈关注，需紧急响应。

---

## 2. 版本发布

### ✅ v1.0.1 正式发布
- **新增功能**：
  - 内置支持 **Zhipu AI 模型提供商**（[#2858](https://github.com/agentscope-ai/CoPaw/pull/2858)）
  - 扩展多模态能力，支持 **视频文件自动提取与分析**
- **影响范围**：所有使用多模态模型或计划接入智谱 AI 的用户
- **迁移建议**：无破坏性变更，可直接升级；视频分析功能需确保本地环境具备 FFmpeg 等依赖

### 🔧 v1.0.1-beta.2（预发布）
- 主要修复与优化：
  - 控制台会话列表中将“首选聊天会话”置顶（[#2864](https://github.com/agentscope-ai/CoPaw/pull/2864)）
  - 修复 `browser_use` 工具空闲时看门狗自取消问题（[#2843](https://github.com/agentscope-ai/CoPaw/pull/2843)）
  - 初步集成 Zhipu 提供商支持（未完成全部测试）

> 注：beta 版本不建议生产环境使用，正式版 v1.0.1 已包含更完整实现。

---

## 3. 项目进展

今日共 **17 个 PR 被合并或关闭**，重点推进方向包括：

| 类别 | 关键进展 | 链接 |
|------|--------|------|
| **模型与提供商** | 支持自定义生成参数（`generate_kwargs`）、修复 MiniMax OAuth 认证流程 | [#2892](https://github.com/agentscope-ai/CoPaw/pull/2892), [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) |
| **前端体验** | 修复会话标题重命名持久化问题、本地化连接测试提示 | [#2847](https://github.com/agentscope-ai/CoPaw/pull/2847), [#2913](https://github.com/agentscope-ai/CoPaw/pull/2913) |
| **工具与安全** | 增强工具执行防护机制（Tool Guard）、修复 Windows 浏览器启动失败 | [#2917](https://github.com/agentscope-ai/CoPaw/pull/2917), [#2861](https://github.com/agentscope-ai/CoPaw/pull/2861) |
| **渠道扩展** | 新增 OneBot v11 协议支持（兼容 NapCat/QQ）、飞书流式卡片输出 | [#2870](https://github.com/agentscope-ai/CoPaw/pull/2870), [#2862](https://github.com/agentscope-ai/CoPaw/pull/2862) |
| **技能系统** | 技能池支持分类/标签/Emoji 元数据，提升管理效率 | [#2837](https://github.com/agentscope-ai/CoPaw/pull/2837), [#2901](https://github.com/agentscope-ai/CoPaw/pull/2901) |

> 项目整体向 **多模态、多平台、企业级稳定性** 迈出关键一步。

---

## 4. 社区热点

### 🔥 最热议 Issue：用户目录被清空（#2884）
- **评论数：27** | [查看 Issue](https://github.com/agentscope-ai/CoPaw/issues/2884)
- **用户描述**：Ubuntu 22.04 系统安装 CoPaw 后，个人目录内容几乎被清空，怀疑软件漏洞或权限问题。
- **社区反应**：高度紧张，多位用户表示担忧数据安全，要求官方紧急排查是否存在高危漏洞。
- **维护者响应**：尚未正式回复，但已触发内部安全审查流程（见 PR #2917 安全增强）。

### ⚠️ 高 CPU 占用问题（#2888）
- **评论数：6** | [查看 Issue](https://github.com/agentscope-ai/CoPaw/issues/2888)
- **技术根因**：AnyIO 事件循环陷入忙轮询（busy loop），空闲时 CPU 占用达 100%。
- **影响**：严重影响用户体验与设备续航，尤其在笔记本/Mac 上显著。

### 💬 多智能体会话上下文缺失（#2814）
- **评论数：6** | [查看 Issue](https://github.com/agentscope-ai/CoPaw/issues/2814)
- **问题**：多 Agent 聊天中，运行中的 Agent 页面显示空历史记录，打断协作流。

> 上述问题反映出 **稳定性、资源管理与多智能体协同** 是当前用户体验的核心痛点。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 相关 PR |
|--------|--------|------|--------|
| 🔴 **高危** | 用户主目录内容被清空（可能权限/路径错误） | 🟡 调查中 | — |
| 🔴 **高危** | 空闲时 CPU 占用 100%（AnyIO 忙轮询） | 🟡 复现中 | — |
| 🟠 **中危** | 修改 SKILL.md 后删除技能目录下其他文件（#2887） | ✅ 已关闭 | — |
| 🟠 **中危** | 聊天标题重命名不持久（#2838） | ✅ 已修复 | [#2847](https://github.com/agentscope-ai/CoPaw/pull/2847) |
| 🟠 **中危** | 本地模型调用频繁中断（OpenAI API 解析错误） | ✅ 已关闭 | [#2889](https://github.com/agentscope-ai/CoPaw/pull/2889) |
| 🟡 **低危** | 会话切换按钮在正常宽度下不可见（#2871） | 🟡 待处理 | — |

> 建议优先解决 **#2884（数据丢失）** 和 **#2888（CPU 占用）**，二者均可能影响用户信任与产品可用性。

---

## 6. 功能请求与路线图信号

| 用户需求 | 是否已有 PR | 可能性评估 |
|--------|------------|----------|
| 多智能体“专家召唤”能力（非切换，而是协同） | ❌ 无 | ⭐⭐⭐ 高（#2883 提出，契合 AgentScope 理念） |
| 技能调用稳定性：允许用户指定调用顺序/优先级 | ✅ 部分（#2902 提出，#2837 提供元数据基础） | ⭐⭐⭐ 高 |
| 主题与自定义颜色支持 | ❌ 无 | ⭐⭐ 中（#2869，UI 个性化需求） |
| 附件上传大小限制提升至 >10MB | ❌ 无 | ⭐⭐ 中（#2880，影响电子书等场景） |
| LSP 支持、模型回退、Telegram 模型切换 | ❌ 无 | ⭐⭐⭐ 高（#2912，开发者体验关键） |
| 任务队列与状态查询 API | ❌ 无 | ⭐⭐⭐ 高（#2894，企业级需求） |

> 下一版本（v1.1.0）有望聚焦 **多智能体协作架构** 与 **任务生命周期管理**。

---

## 7. 用户反馈摘要

### 😠 不满意点
- “中午回来电脑文件全没了，差点崩溃！”（#2884）
- “CPU 一直跑满，风扇狂转，根本没法用”（#2888）
- “技能调用太随机，同样任务每次结果不一样”（#2902）
- “群聊引用文件无法分析，私聊却可以，逻辑不一致”（#2852）

### ✅ 满意点
- “飞书流式卡片效果很棒，像真人在打字”（#2862 相关反馈）
- “终于支持 QQ 了，NapCat 集成很丝滑”（#2870）
- “技能分类标签让管理方便多了”（#2837）

### 💡 使用场景
- 企业微信/飞书群聊中处理文档分析
- 本地部署 Qwen3.5 模型进行代码辅助
- 多 Agent 协作完成复杂任务规划（期待中）

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压天数 | 建议 |
|------|------|------|--------|------|
| Issue | #2216 | 内置技能执行追踪（成功率、耗时等） | 10 天 | 高价值监控功能，建议纳入 v1.1 |
| Issue | #160 | 多智能体配置与编排支持 | 33 天 | 核心路线图项目，需架构设计 |
| PR | #1192 | OpenRouter 提供商增强（含模型过滤） | 25 天 | 重要第三方集成，建议 review |
| PR | #2448 | MiniMax OAuth 认证 | 6 天 | 关键身份验证功能，需测试验证 |

> 建议维护团队本周内对 **#2216、#160、#1192** 进行优先级评估与资源分配。

---

**报告生成时间**：2026-04-04  
**数据来源**：GitHub CoPaw 仓库公开数据  
**分析师备注**：项目处于快速迭代期，需加强 **稳定性保障** 与 **用户沟通透明度**，尤其在数据安全类问题上应及时发布公告。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-04-04）

---

## 1. 今日速览

过去24小时内，ZeptoClaw 社区活跃度显著提升，共处理 **12条 PR 更新**（7条已合并/关闭，5条待合并）和 **2条 Issues 更新**（1新开，1关闭）。核心贡献者 @stuartbowness 主导了多项关键修复与功能开发，涵盖 Telegram 消息处理、上下文压缩、浏览器工具集成等关键模块。尽管无新版本发布，但项目在稳定性与用户体验方面取得实质性进展，技术债持续清理中。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于功能完善与 Bug 修复，预计下一版本将整合多个待合并 PR（如 #459、#460）后发布。

---

## 3. 项目进展

以下重要 PR 已于过去24小时内合并或关闭，推动项目关键能力升级：

- **#463 [CLOSED] fix(runtime): wire up Landlock workspace access**  
  修复了启用 Landlock 沙箱时工作区目录无法访问的问题，确保安全策略与功能可用性兼容。  
  🔗 [PR #463](https://github.com/qhkm/zeptoclaw/pull/463)

- **#470–#475 [CLOSED] 依赖项更新（Dependabot）**  
  包括 `action-gh-release`、`@astrojs/starlight`、`@vitejs/plugin-react`、`typescript-eslint` 和 `tailwindcss` 的版本升级，提升构建安全性与前端工具链稳定性。  
  🔗 示例：[PR #470](https://github.com/qhkm/zeptoclaw/pull/470)

> ✅ 项目整体向前迈进：安全沙箱可用性修复 + 前端工具链现代化，为后续功能扩展打下基础。

---

## 4. 社区热点

**#486 [OPEN] feat: true concurrent/non blocking design**  
由 @superhero75 提出，呼吁实现真正的并发/非阻塞架构，解决“长任务阻塞用户响应”的核心痛点。  
- **诉求分析**：用户期望代理在执行耗时操作（如研究、爬虫）时仍能即时响应用户消息，避免“沉默失联”体验。  
- **影响范围**：标记为“Large”，需重构子系统，可能参考 [spacebot](https://github.com/spacedriveapp/spacebot) 设计。  
- **社区信号**：虽无评论，但直击当前架构瓶颈，是未来路线图高优先级候选。  
🔗 [Issue #486](https://github.com/qhkm/zeptoclaw/issues/486)

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|--------|--------|------|------|
| ⚠️ 高 | #456 [CLOSED] bug(telegram): no message chunking + errors not sent back to user | Telegram 消息超4096字符限制导致发送失败，且错误未反馈给用户，造成“静默失败” | ✅ 已有修复 PR #462 |
| ⚠️ 中 | #462 [OPEN] fix(telegram): prevent silent message failures with chunking and plaintext fallback | 实现消息分块发送与纯文本降级策略，解决长回复丢失问题 | 🔄 待合并 |
| ⚠️ 中 | #468 [OPEN] fix(providers): route vendor-prefixed models to OpenRouter | 修复带厂商前缀模型（如 `google/gemini-...`）路由错误，避免网关拒绝请求 | 🔄 待合并 |

> 📌 关键修复已开发完成，待代码审查后合并，将显著提升 Telegram 通道可靠性。

---

## 6. 功能请求与路线图信号

以下功能请求具备高实现可能性，已有对应 PR 推进：

- **浏览器自动化支持**：#459 引入 `agent-browser` + Lightpanda + Chrome 降级方案，支持 SSRF 防护与智能引擎管理，响应“复杂网页交互”需求。  
  🔗 [PR #459](https://github.com/qhkm/zeptoclaw/pull/459)

- **上下文压缩优化**：#460 提出多层级上下文压缩策略，防止长对话 token 溢出崩溃，解决用户反馈的“对话越长越卡”问题。  
  🔗 [PR #460](https://github.com/qhkm/zeptoclaw/pull/460)

- **自定义工具增强**：#467 新增 `raw_string` 参数类型，支持 Shell 参数灵活传递，提升工具扩展性。  
  🔗 [PR #467](https://github.com/qhkm/zeptoclaw/pull/467)

> ✅ 上述功能均处于活跃开发阶段，极可能纳入下一版本发布。

---

## 7. 用户反馈摘要

从 Issues 与 PR 描述中提炼真实用户痛点：

- **“静默失败”体验差**：用户通过 Telegram 发起复杂任务后无响应，误以为系统宕机（#456、#462）。
- **长对话稳定性不足**：多轮交互后出现 token 溢出错误，导致会话中断（#460）。
- **模型路由不透明**：使用 OpenRouter 时，带前缀模型无法正确调用，缺乏明确错误提示（#468）。
- **工具调用灵活性不足**：自定义工具难以传递未转义参数，限制 Shell 脚本集成（#467）。

> 💬 用户核心诉求：**可预测的响应行为 + 透明的错误反馈 + 高稳定性长会话支持**。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **#486 [OPEN] 并发架构重构**（创建于 2026-04-03）  
  虽为新 Issue，但直指系统级瓶颈，需评估技术方案与资源投入。  
  🔗 [Issue #486](https://github.com/qhkm/zeptoclaw/issues/486)

- **#459、#460、#462、#467、#468 [OPEN] 关键功能/修复 PR**  
  均由 @stuartbowness 开发完成，技术方案成熟，建议加速代码审查与合并流程，避免开发成果积压。

> ⚠️ 提醒：5个高价值 PR 待合并，可能影响下一版本发布节奏。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃开发中，Bug 响应迅速，功能迭代清晰，社区需求对齐度高。需关注架构级改进（如并发模型）的长期规划。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-04-04）**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度较低，仅新增1条 Issue，无 Pull Request 提交或版本发布。社区互动趋于平稳，开发节奏进入维护期。当前项目处于低活跃状态，需关注用户反馈以维持生态健康。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 项目进展  
今日无合并或关闭的 Pull Request，无功能更新或代码变更记录。项目在功能迭代方面暂无明显推进。

---

### 4. 社区热点  
**Issue #31：更新后每次都弹出更新日志，且无法识别日志归属系统**  
- 链接：https://github.com/gaoyangz77/easyclaw/issues/31  
- 作者：@reshabar  
- 状态：新开，0条评论，0点赞  

该 Issue 反映了用户在软件更新后遭遇频繁弹窗干扰，且弹窗内容未明确标注来源系统（如操作系统、EasyClaw 自身或第三方组件），导致用户体验困惑。尽管当前互动较少，但此类问题可能影响用户留存，尤其在自动更新机制普及的背景下，属于典型的“静默痛点”。建议维护者优先优化更新日志的上下文提示机制。

---

### 5. Bug 与稳定性  
**已报告 Bug（1条，中等级别）**  
- **问题描述**：更新后每次启动均强制弹出更新日志窗口，且日志内容未标明所属系统，用户无法判断其相关性。  
- 严重程度：中（影响用户体验，非崩溃但具干扰性）  
- 是否有修复 PR：否  
- 关联 Issue：#31（https://github.com/gaoyangz77/easyclaw/issues/31）  

该问题可能源于更新日志触发逻辑未做去重或上下文隔离，需检查更新通知模块的实现逻辑。

---

### 6. 功能请求与路线图信号  
今日无明确功能请求提出。但从 Issue #31 可间接推断用户期望：  
- 更新日志应具备**系统来源标识**（如“EasyClaw v1.2.0 更新日志” vs “Windows 安全更新”）  
- 支持**用户自定义弹窗频率**（如“仅首次显示”或“关闭后不再提醒”）  

若后续有相关 PR 提交，此类优化有望纳入下一版本的 UX 改进计划。

---

### 7. 用户反馈摘要  
来自 Issue #31 的用户反馈显示：  
- **痛点**：频繁且无上下文的更新日志弹窗干扰正常使用流程  
- **使用场景**：用户完成系统或应用更新后，启动 EasyClaw 即遭遇弹窗，无法快速判断是否需关注  
- **满意度**：对自动更新机制无异议，但对信息透明度和交互设计表示不满  

该反馈揭示了产品在“通知友好性”与“信息清晰度”方面的改进空间。

---

### 8. 待处理积压  
经核查，项目当前无长期未响应的重要 Issue 或 PR。所有开放 Issue（共1条）均为2026-04-03新建，尚在合理响应窗口内。建议维护者在未来72小时内对 Issue #31 作出初步回应，以维持社区信任度。

---  
**报告生成时间：2026-04-04**  
**数据来源：GitHub Repository gaoyangz77/easyclaw**

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*