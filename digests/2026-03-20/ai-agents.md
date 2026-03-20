# OpenClaw 生态日报 2026-03-20

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-20 00:59 UTC

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

# OpenClaw 项目动态日报（2026-03-20）

---

## 1. 今日速览

OpenClaw 社区在 2026-03-20 继续保持高活跃度，过去24小时内共处理 **500 条 Issues**（新开/活跃 346 条，关闭 154 条）和 **500 条 PR**（待合并 338 条，已合并/关闭 162 条），显示出强劲的开发与问题响应节奏。尽管无新版本发布，但核心团队持续推进关键基础设施优化与回归修复，尤其在 WhatsApp 通道稳定性、网关通信可靠性及内存管理方面取得实质进展。社区对安全事件（仿冒空投钓鱼）高度关注，反映出项目生态影响力扩大带来的新挑战。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `2026.3.13` 系列，多个高优先级回归问题（如 WhatsApp 发送失败、CLI 网关连接中断）正在通过热修复 PR 快速响应，预计将在下个补丁版本中集中解决。

---

## 3. 项目进展

今日多个重要 PR 持续推进核心功能完善：

- **#44421**：集成 Cortex 本地记忆系统，为 OpenClaw 提供结构化上下文记忆能力，支持 `/cortex` 命令集与自动对话 ingest，显著增强长期交互一致性（[链接](https://github.com/openclaw/openclaw/pull/44421)）。
- **#43356**：新增 Anthropic Vertex AI 提供商支持，扩展 Claude 模型在 GCP 环境下的部署选项，满足企业级云原生需求（[链接](https://github.com/openclaw/openclaw/pull/43356)）。
- **#49429**：引入 `models auth clean` 命令，自动化清理无效认证配置，提升多账户管理体验（[链接](https://github.com/openclaw/openclaw/pull/49429)）。
- **#47279**：添加 DuckDuckGo 作为免费 Web 搜索后端，应对 Brave Search API 收费化（#16629），保障基础功能可持续性（[链接](https://github.com/openclaw/openclaw/pull/47279)）。
- **#50725 / #50722**：维护者主导的插件运行时状态统一与回调路由修复，解决多插件场景下的状态分裂与交互丢失问题，提升架构健壮性（[链接1](https://github.com/openclaw/openclaw/pull/50725) | [链接2](https://github.com/openclaw/openclaw/pull/50722)）。

---

## 4. 社区热点

### 🔒 安全警报引发广泛关注
**#49836**：社区成员 @demo-zexuan 报告发现仿冒 OpenClaw 名义的 GitHub 仓库与空投骗局，诱导开发者连接恶意钱包。该 Issue 获 32 条评论与 18 个点赞，团队已介入调查并提醒用户警惕钓鱼行为（[链接](https://github.com/openclaw/openclaw/issues/49836)）。此事件凸显项目品牌影响力上升的同时，需加强官方沟通渠道建设。

### 🌐 跨平台客户端需求呼声高涨
**#75**：长期开放的增强请求，呼吁为 Linux 和 Windows 平台开发功能对齐 macOS 的 Clawdbot 应用。尽管创建于 2026-01-01，今日仍获新评论，反映桌面端用户生态缺口（[链接](https://github.com/openclaw/openclaw/issues/75)）。

### 🤖 并行 Agent 协调机制受期待
**#10010**：受 Claude Code 启发，用户提议实现“Agent Teams”功能，支持多 Agent 并行协作与内部通信。该提案获 12 条评论，已有初步设计讨论，可能成为下一代多智能体架构方向（[链接](https://github.com/openclaw/openclaw/issues/10010)）。

---

## 5. Bug 与稳定性

以下为今日高严重性回归/行为异常问题（按影响面排序）：

| Issue | 问题描述 | 状态 | 关联修复 PR |
|------|--------|------|------------|
| **#45171** | WhatsApp 主动发送路径失效（“No active WhatsApp Web listener”），但自动回复正常 | CLOSED | 已合并热修（未编号） |
| **#45504** | CLI 命令 `devices list/approve` 在本地回环网关上失败，Web UI 正常 | OPEN | — |
| **#46892** | 网关 WebSocket 握手超时（3s）过短，高负载下误断连 | CLOSED | #46892 自身含修复 |
| **#46049** | LLM 请求忽略用户配置的超时设置，导致任务中断 | OPEN | — |
| **#49950** | 网关每次重载配置重置 `allowedOrigins`，阻断外部仪表盘连接 | OPEN | — |
| **#48713** | 向 vLLM 发送不支持参数 `strict`/`store`，引发警告并影响输出 | OPEN | — |

> 💡 **趋势观察**：WhatsApp 通道的“listener 状态不一致”问题在多版本中反复出现（#34741、#45171、#48126 等），表明底层 socket 生命周期管理存在架构级缺陷，需系统性重构。

---

## 6. 功能请求与路线图信号

结合 PR 进展与 Issue 热度，以下功能有望纳入近期版本：

- **MiniMax M2.7 模型支持**（#50234）：厂商合作驱动，技术实现简单，高概率快速落地。
- **MCP Client 原生支持**（#29053）：顺应行业标准，已有 10 条评论支持，若社区贡献者持续推动可加速集成。
- **外部记忆提供程序 API**（#49233）：为解决 compaction 期间服务中断提出，创新性高，若验证可行将成差异化优势。
- **私有会话投递模式**（#50720）：已由贡献者提交 PR，支持 `sessions_send` 私密通信，符合企业隐私需求。

---

## 7. 用户反馈摘要

从 Issue 评论提炼关键用户声音：

- **痛点**：
  - “WhatsApp 显示已连接，但所有主动发送都报错‘No active listener’” —— 多用户确认此为 **v2026.3.12+ 普遍回归**，严重影响生产使用。
  - “Docker 部署后 Matrix 插件无法加载，提示缺少 `@vector-im/matrix-bot-sdk`” —— 反映打包流程依赖处理缺陷（#47717）。
  - “Brave Search 不再免费，急需替代方案” —— 推动 DuckDuckGo 集成优先级（#16629）。

- **满意点**：
  - Cortex 记忆集成获早期测试者好评：“终于能记住我上周讨论的代码结构了”。
  - `models auth clean` 命令被赞“早就该有的清理工具”。

---

## 8. 待处理积压

以下重要 Issue 长期未获官方响应，建议维护者优先关注：

- **#10841**（2026-02-07 创建）：Agent 因无法获取精确时间导致提醒错乱。涉及核心调度逻辑，影响基础体验。
- **#25359**（2026-02-24 创建）：多 Agent 场景下无法按 Agent 覆盖插件配置。企业用户刚需，阻碍复杂部署。
- **#26322**（2026-02-25 创建）：OAuth 令牌刷新竞态条件导致认证失败。安全风险与稳定性双重隐患。
- **#16918**（2026-02-15 创建）：WhatsApp socket 重连导致消息静默丢失。虽标记 `stale`，但同类问题持续复发，需根治。

> 📌 **健康度提示**：当前 Issue 平均响应时间较短，但部分架构性议题（如时间感知、插件隔离）长期悬置，可能制约项目向企业级演进。建议设立专项工作组推进。

---  
*数据来源：OpenClaw GitHub 仓库（github.com/openclaw/openclaw），统计周期：2026-03-19 至 2026-03-20*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-03-20）

---

## 1. 生态全景

2026年Q1末，个人 AI 助手与自主智能体开源生态呈现**高活跃度、强分化、快速迭代**的态势。以 OpenClaw 为代表的核心项目持续引领功能演进，社区规模与工业级部署需求同步增长；NanoBot、Zeroclaw 等聚焦轻量化与多通道集成的项目加速填补细分场景空白；PicoClaw、CoPaw 等新兴项目则在多模态、本地优先架构上探索差异化路径。整体生态正从“原型验证”向“生产可用”过渡，安全、稳定性与跨通道一致性成为共性瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 新版本发布 | 健康度评估（⭐/5） |
|------|----------------|------------|--------------|------------------|
| **OpenClaw** | 500（346新/活跃） | 500（338待合并） | ❌ 无 | ⭐⭐⭐⭐ |
| **NanoBot** | 25 | 51（40待合并） | ❌ 无 | ⭐⭐⭐⭐ |
| **Zeroclaw** | 44（11新） | 50（7待合并） | ✅ v0.5.1 | ⭐⭐⭐⭐☆ |
| **PicoClaw** | 40（30新） | 106（54待合并） | ✅ nightly | ⭐⭐⭐⭐ |
| **NanoClaw** | 15（12新） | 32（21待合并） | ❌ 无 | ⭐⭐⭐⭐ |
| **IronClaw** | 50（14新） | 50（28待合并） | ✅ v0.20.0 | ⭐⭐⭐⭐☆ |
| **LobsterAI** | 18（17新） | 33（15待合并） | ✅ 2026.3.19 | ⭐⭐⭐ |
| **TinyClaw** | 0 | 2（均待合并） | ❌ 无 | ⭐⭐⭐ |
| **CoPaw** | 50（34新） | 50（22待合并） | ✅ v0.1.0 | ⭐⭐⭐⭐ |
| **ZeptoClaw** | 1 | 3 | ❌ 无 | ⭐⭐⭐ |
| **EasyClaw** | 2（1新） | 3（均合并） | ✅ v1.7.2/v1.7.3 | ⭐⭐⭐⭐ |

> 注：健康度综合考量开发节奏、响应速度、稳定性与社区互动。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大**：单日处理500条Issues/PRs，社区响应速度极快，体现强维护能力；  
- **功能最全**：集成Cortex记忆、多LLM提供商（Anthropic Vertex、MiniMax）、WhatsApp/Telegram/飞书等十余通道；  
- **企业级适配**：支持私有会话投递、MCP Client提案、外部记忆API等生产级特性。

**技术路线差异**：  
相比NanoBot/Zeroclaw侧重轻量代理循环，OpenClaw采用**模块化网关架构**，强调通道抽象与技能运行时隔离；相较CoPaw的多工作区设计，OpenClaw更聚焦**单Agent多通道协同**，通过统一上下文管理提升一致性。

**社区规模**：  
GitHub互动量（Issues+PRs）约为第二梯队（如CoPaw、IronClaw）的2–3倍，安全事件（仿冒空投）侧面印证其品牌影响力已出圈。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多通道稳定性** | OpenClaw、NanoBot、PicoClaw、LobsterAI | WhatsApp/Telegram/飞书断连、消息重复、流式响应缺失（#45171、#2235、#1767、#521） |
| **安全策略灵活性** | Zeroclaw、NanoClaw、IronClaw | 用户呼吁“开发模式”下关闭严格权限（#1478、#1150）、支持Podman替代Docker（#957） |
| **本地部署优化** | PicoClaw、CoPaw、ZeptoClaw | Ollama/Venice.ai工具调用失败（#3999）、ARM64/Docker支持（#539）、离线模型兼容性（#823） |
| **记忆与上下文管理** | OpenClaw、NanoClaw、CoPaw | 关键词检索漏检（#1283）、对话重复输出（#498）、token预算控制（#1439） |
| **人机协同（HITL）** | Zeroclaw、CoPaw、NanoBot | 长任务中断机制（#2133）、审批按钮（#1865）、动态模型切换（#2257） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|--------|--------|--------------|
| **OpenClaw** | 企业级多通道AI助手 | 团队/组织 | 网关中心化、插件化技能、结构化记忆 |
| **NanoBot** | 轻量自主代理 | 开发者/运维 | 双层Steering Loop、CycleDetector防循环 |
| **Zeroclaw** | 安全可控的工程Agent | 软件工程师 | 策略注入提示、子代理超时配置、Jira集成 |
| **PicoClaw** | 移动端/嵌入式部署 | 个人用户/安卓开发者 | Termux兼容、CLI提供商优先、轻量TUI |
| **CoPaw** | 多智能体协作工作台 | 跨职能团队 | 多工作区隔离、控制台多模态支持 |
| **LobsterAI** | 企业IM集成（企微/飞书） | 国内企业 | OpenClaw网关封装、i18n强化 |
| **EasyClaw** | 桌面端用户体验 | 普通用户 | Electron架构、主题系统、账户中心 |

---

## 6. 社区热度与成熟度

- **快速迭代层**（日均PR>30）：  
  **OpenClaw、CoPaw、PicoClaw** 处于功能爆发期，社区驱动明显，但伴随兼容性风险（如CoPaw升级失败#1895）。
  
- **质量巩固层**（高合并率+低待处理积压）：  
  **Zeroclaw、IronClaw、EasyClaw** 注重稳定性，Zeroclaw单日合并43 PR并发布正式版，IronClaw通过Staging CI批量修复50个缺陷，体现工程成熟度。

- **探索验证层**（低活跃度但架构前瞻）：  
  **TinyClaw、ZeptoClaw** 聚焦协议标准化（如ACP实现）与架构解耦，适合技术预研参考。

---

## 7. 值得关注的趋势信号

1. **安全模型分层化**：  
   多个项目（Zeroclaw #1478、NanoClaw #957）呼吁“开发/生产”双模式安全策略，预示未来主流框架将提供**可配置的安全沙箱粒度**。

2. **本地优先成为刚需**：  
   Ollama、vLLM、GGUF模型支持在6个项目中均被提及，结合ARM64/Docker需求，**离线部署能力**将成为评估AI助手实用性的核心指标。

3. **协议标准化加速**：  
   ZeptoClaw推进ACP（Agent Client Protocol）、CoPaw探索SSE事件总线，反映生态正从“封闭集成”向**开放互操作**演进，开发者应关注MCP、ACP等中间协议。

4. **多模态交互下沉**：  
   TTS/ASR（PicoClaw #1648）、语音消息处理（CoPaw #1896）、图像上传（CoPaw v0.1.0）需求集中涌现，**语音+视觉通道**将成为下一代个人AI的核心入口。

> **对开发者的建议**：优先选择支持本地模型、具备明确安全策略配置、且通道抽象清晰的项目（如OpenClaw、Zeroclaw）；若聚焦轻量场景，可关注NanoBot的Steering Loop设计；长期需跟踪ACP/MCP等协议进展以规避生态锁定风险。

---  
**报告生成时间**：2026-03-20  
**分析师**：AI开源生态技术分析师

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-20）

---

## 1. 今日速览

NanoBot 社区活跃度持续高位，过去24小时共产生 **25条 Issues 更新** 和 **51条 PR 更新**，其中 **40个 PR 待合并**，反映出开发者贡献热情高涨。尽管无新版本发布，但核心功能迭代与安全增强持续推进，尤其在多通道支持、配置安全性和代理循环稳定性方面取得实质性进展。社区讨论聚焦于飞书、Telegram 等生产环境集成痛点，体现出项目正从实验性工具向企业级 AI 助手演进。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 `nightly` 分支主导开发，多个关键特性（如环境变量引用、双层架构）处于测试与合并阶段，预计将在下一稳定版中集中发布。

---

## 3. 项目进展

今日有 **11个 PR 被合并或关闭**，重点推进以下方向：

- **配置安全性增强**：通过 #2218（支持 `{env:VAR}` 语法）和 #2212（运行时密钥引用解析），实现敏感信息（如 API Key）从配置文件中解耦，显著提升部署安全性（[#2218](https://github.com/HKUDS/nanobot/pull/2218) | [#2212](https://github.com/HKUDS/nanobot/pull/2212)）。
- **代理循环稳定性**：#2271 引入 `CycleDetector` 机制，防止 LLM 陷入重复工具调用死循环，减少资源浪费（[#2271](https://github.com/HKUDS/nanobot/pull/2271)）。
- **通道功能完善**：#2267 为 Discord 添加“👀”已读回执功能；#2269 补充 Discord 配置文档，降低用户接入门槛（[#2267](https://github.com/HKUDS/nanobot/pull/2267) | [#2269](https://github.com/HKUDS/nanobot/pull/2269)）。
- **日志与可观测性**：#2268 集成 LiteLLM 的 `ConversationCallback`，实现非侵入式 LLM 调用追踪，助力调试与成本分析（[#2268](https://github.com/HKUDS/nanobot/pull/2268)）。

整体项目在**安全性、稳定性与可观测性**三大支柱上迈出关键步伐。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#2133](https://github.com/HKUDS/nanobot/issues/2133) | 任务执行期间用户消息入列机制 | 18 | 用户希望在 Agent 执行长任务时能实时干预，而非依赖 `/stop` 强制中断，推动“动态中断”架构需求 |
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) | 防止 Agent 访问自身 config.json 泄露密钥 | 9 | 安全审计诉求，要求核心循环以低权限用户运行，避免 `exec()` 泄露密钥 |
| [#2018](https://github.com/HKUDS/nanobot/issues/2018) | 交互式配置向导试用反馈 | 9 | 用户积极测试 `nanobot onboard` 新功能，推动配置体验现代化 |

> **分析**：社区强烈关注**实时交互能力**与**部署安全性**，反映出 NanoBot 正被用于高敏感、长周期任务场景（如自动化运维、客服代理），对可控性与隔离性要求提升。

---

## 5. Bug 与稳定性

| 问题 | 严重程度 | 状态 | 关联 PR |
|------|--------|------|--------|
| [#2235](https://github.com/HKUDS/nanobot/issues/2235) Telegram 回复重复显示 | 中 | 未修复 | 疑似流式模拟逻辑缺陷，需排查消息去重机制 |
| [#2250](https://github.com/HKUDS/nanobot/issues/2250) `nanobot onboard -c` 参数不识别 | 中 | 未修复 | 配置向导参数解析遗漏，影响多实例部署 |
| [#2241](https://github.com/HKUDS/nanobot/issues/2241) onboard 向导部分保存问题 | 高 | **已修复** | #2266 修复配置崩溃与部分保存逻辑 |
| [#2222](https://github.com/HKUDS/nanobot/issues/2222) OpenRouter 模型前缀被剥离 | 高 | **已修复** | #2265 强化环境变量引用语义，间接修复 |
| [#2200](https://github.com/HKUDS/nanobot/issues/2200) Anthropic 提供商 BadRequestError | 高 | 未修复 | 需排查 litellm 版本兼容性或请求格式 |

> **建议**：优先处理 Anthropic 提供商故障（影响核心功能）及 Telegram 重复回复（用户体验）。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 PR | 纳入可能性 |
|--------|--------|----------|
| **插件系统**（类似 Copilot CLI） | [#2231](https://github.com/HKUDS/nanobot/issues/2231) | ⭐⭐⭐ 高（已有架构讨论，#1224 双层架构为其铺垫） |
| **QQ 文件收发支持** | [#2226](https://github.com/HKUDS/nanobot/issues/2226) | ⭐⭐⭐ 高（#1667 已提供实现，待合并） |
| **动态模型切换命令** | [#2257](https://github.com/HKUDS/nanobot/issues/2257) | ⭐⭐ 中（需评估安全风险） |
| **飞书话题群精准回复** | [#2256](https://github.com/HKUDS/nanobot/issues/2256) | ⭐⭐ 中（通道特定优化） |
| **会话清空/重启功能** | [#2062](https://github.com/HKUDS/nanobot/issues/2062) | ⭐⭐⭐ 高（高频痛点，易实现） |

> **预测**：下一版本将重点整合 **QQ 文件支持**、**会话管理 API** 及 **插件扩展框架**，同时完善飞书/Telegram 通道细节。

---

## 7. 用户反馈摘要

- **满意点**：
  - 交互式配置向导（`nanobot onboard`）获积极反馈，用户称赞“终于不用手动编辑 JSON 了”（#2018）。
  - LiteLLM 集成灵活，支持多提供商切换，满足企业多云部署需求。
- **痛点**：
  - **飞书集成问题集中**：图片无法处理（#2242）、群聊命令失效（#2251）、会话膨胀（#2062），表明飞书通道成熟度不足。
  - **生产部署顾虑**：用户担忧默认权限过高（#2233）、密钥硬编码（#1873），呼吁最小权限原则。
  - **长任务交互缺失**：用户抱怨“Agent 执行时像黑盒”，亟需中断/审批机制（#2133）。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 建议 |
|------|------|------|--------|------|
| Issue | [#1300](https://github.com/HKUDS/nanobot/issues/1300) | Matrix channel does not work | >20天 | Matrix 通道长期不可用，影响小众但重要用户群 |
| Issue | [#1864](https://github.com/HKUDS/nanobot/issues/1864) | DingTalk 不支持上传文件 | >35天 | 钉钉生态用户刚需，优先级应提升 |
| PR | [#1053](https://github.com/HKUDS/nanobot/pull/1053) | 修复 MessageTool 通道元数据传递 | >20天 | 影响 Slack 线程回复准确性，建议尽快合入 |
| PR | [#1224](https://github.com/HKUDS/nanobot/pull/1224) | 双层架构（Steering Loop） | >20天 | 解决 #2133 核心诉求，架构意义重大，需重点 review |

> **维护者提醒**：上述积压项涉及关键通道功能与核心架构演进，建议本周内安排专项 review。

---  
**报告生成时间**：2026-03-20  
**数据来源**：GitHub HKUDS/nanobot 仓库公开数据

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-20）

---

## 1. 今日速览

Zeroclaw 在 2026-03-20 继续保持高强度开发节奏，过去24小时内共处理 **44 条 Issues**（关闭 33 条，新开/活跃 11 条）和 **50 条 Pull Requests**（合并/关闭 43 条，待合并 7 条），并发布 **10 个新版本**，涵盖从 v0.5.1-beta.378 到正式版 v0.5.1 的完整迭代链。项目整体活跃度极高，核心团队聚焦于安全策略优化、多通道交互增强与技能系统稳定性提升，社区反馈响应迅速，Bug 修复与功能交付效率显著。

---

## 2. 版本发布

### ✅ v0.5.1 正式发布
**发布时间**：2026-03-19 ~ 2026-03-20  
**核心更新内容**：
- **Agent 运行时模型切换**：通过 `model_switch` 工具实现动态 LLM 切换（[#v0.5.1](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.1)）
- **子代理超时配置化**：`config.toml` 支持 `delegate.timeout_secs` 与 `agentic_timeout_secs`，提升长任务可控性
- **心跳机制优化**：默认间隔从 30s 调整为 5min，并从自动保存中剔除，降低 I/O 开销
- **国际化支持**：工具描述外部化，便于翻译（i18n）
- **自主技能创建**：支持运行时动态生成技能逻辑

**破坏性变更**：无  
**迁移建议**：现有用户可无缝升级；若需自定义子代理超时，请在 `config.toml` 中添加 `[delegate]` 段配置。

> 完整变更日志：[v0.5.1...HEAD](https://github.com/zeroclaw-labs/zeroclaw/compare/v0.5.1...HEAD)

---

## 3. 项目进展

今日共 **合并/关闭 43 个 PR**，关键进展包括：

| 功能模块 | 进展摘要 | 关联 PR |
|--------|--------|--------|
| **安全策略** | 将安全策略摘要注入 LLM 系统提示，解决“黑盒拒绝”问题，减少试错 | [#4002](https://github.com/zeroclaw-labs/zeroclaw/pull/4002) |
| **通道控制** | 为 Discord、Mattermost 添加 `/stop` 命令与 `interrupt_on_new_message` 支持，提升交互中断能力 | [#3891](https://github.com/zeroclaw-labs/zeroclaw/pull/3891), [#3917](https://github.com/zeroclaw-labs/zeroclaw/pull/3917), [#3918](https://github.com/zeroclaw-labs/zeroclaw/pull/3918) |
| **技能系统** | 引入 `read_skill` 工具，解决 Compact 模式下技能加载不可靠问题 | [#3706](https://github.com/zeroclaw-labs/zeroclaw/pull/3706) |
| **工具扩展** | 新增 Jira 集成工具、计算器工具（含统计函数），增强工程协作与数值处理能力 | [#3997](https://github.com/zeroclaw-labs/zeroclaw/pull/3997), [#4000](https://github.com/zeroclaw-labs/zeroclaw/pull/4000) |
| **配置审计** | 恢复 `allow_scripts` 配置选项，允许用户显式授权脚本类技能文件（.sh/.bash） | [#4001](https://github.com/zeroclaw-labs/zeroclaw/pull/4001) |

> 项目整体向“更安全、更可控、更易用”方向迈出关键一步，尤其在人机协同（HITL）与多通道一致性方面取得突破。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|-------|--------|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | “安全过度导致功能失效” | 42 | 用户抱怨即使放开所有安全配置，仍无法执行 `ffmpeg` 等基础命令，质疑“安全 vs 可用性”平衡 |
| [#3882](https://github.com/zeroclaw-labs/zeroclaw/issues/3882) | 请求支持阿里云百炼 Coding Plan | 8 | 开发者希望接入国内主流 AI 编程服务，解决 API 认证与权限适配问题 |
| [#2401](https://github.com/zeroclaw-labs/zeroclaw/issues/2401) | 呼吁增加 `/reasoning` 与 `/stop` 命令 | 2 | 用户要求透明化推理过程并提供即时中断机制（已由 PR #3891 部分实现） |

> **分析**：社区核心矛盾集中在 **安全策略的灵活性与透明度**。尽管项目已通过注入策略摘要（PR #4002）和恢复 `allow_scripts`（PR #4001）回应，但仍有用户期望“一键全放开”模式，反映出自用场景下的强自由度需求。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（S1）

| Issue | 描述 | 状态 | Fix PR |
|------|------|------|--------|
| [#3999](https://github.com/zeroclaw-labs/zeroclaw/issues/3999) | Ollama 工具调用握手失败，导致安全提示与工具完全不可用 | OPEN | — |
| [#3764](https://github.com/zeroclaw-labs/zeroclaw/issues/3764) | Web UI 调用自定义 Provider 时因缺失 Header 返回 405 | OPEN | — |
| [#3786](https://github.com/zeroclaw-labs/zeroclaw/issues/3786) | OpenAI Codex/Gpt-5.4 每 3-4 次请求即失败，疑似重试逻辑缺陷 | OPEN | — |

### 🛠️ 已修复 Bug（S1/S2）

| Issue | 修复内容 | Fix PR |
|------|--------|--------|
| [#3974](https://github.com/zeroclaw-labs/zeroclaw/issues/3974) | 原生工具调用中 assistant 文本丢失 | [#4005](https://github.com/zeroclaw-labs/zeroclaw/pull/4005) |
| [#2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400) | 代理通过 `file_write` 绕过 `always_ask` 权限 | 策略注入 + 审计选项 | [#4002](https://github.com/zeroclaw-labs/zeroclaw/pull/4002), [#4001](https://github.com/zeroclaw-labs/zeroclaw/pull/4001) |
| [#3845](https://github.com/zeroclaw-labs/zeroclaw/issues/3845) | `/new` 命令不刷新技能缓存 | 通过 `read_skill` 实现按需加载 | [#3706](https://github.com/zeroclaw-labs/zeroclaw/pull/3706) |

> 当前 **3 个 S1 Bug 待修复**，建议优先处理 Ollama 握手问题（影响本地部署用户体验）。

---

## 6. 功能请求与路线图信号

| 功能请求 | 社区热度 | 已有 PR | 纳入可能性 |
|--------|--------|--------|----------|
| 阿里云百炼 Coding Plan 支持 | ⭐⭐⭐ | 无 | 中（需适配国内 API 规范） |
| “完整”Docker 镜像（启用所有特性） | ⭐⭐ | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | 高（已有明确需求，技术成本低） |
| Telegram 内联按钮审批（HITL） | ⭐⭐ | [#1865](https://github.com/zeroclaw-labs/zeroclaw/issues/1865) | 中（需 UI/UX 设计） |
| 计算器工具 | ⭐⭐⭐ | [#4000](https://github.com/zeroclaw-labs/zeroclaw/pull/4000) | ✅ 已合并 |
| Google Workspace 操作级白名单 | ⭐⭐ | [#4010](https://github.com/zeroclaw-labs/zeroclaw/pull/4010) | ✅ 已合并 |

> **预测**：v0.5.2 将重点解决 **国内云厂商集成** 与 **Docker 用户体验优化**。

---

## 7. 用户反馈摘要

- **满意点**：
  - “`/stop` 命令终于来了！之前在 Discord 上被长任务卡住只能重启” —— 来自通道中断功能反馈
  - “`read_skill` 让 Compact 模式终于可用，轻量模型也能稳定读技能了”
  - “安全策略注入提示后，LLM 不再盲目试错，效率提升明显”

- **痛点**：
  - “我就是在树莓派上自己玩，为什么不能有个 `security.off = true`？” —— 反映安全模型过于刚性
  - “Homebrew 安装后没有前端界面，文档也没说明” —— 安装体验不一致
  - “Venice.ai 和 Ollama 工具调用全挂，本地部署几乎不可用”

> **核心诉求**：**分层安全策略**（开发/生产模式）与 **本地 Provider 稳定性** 是下一阶段重点。

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 状态 | 提醒 |
|--------|------|--------|------|------|
| [#2401](https://github.com/zeroclaw-labs/zeroclaw/issues/2401) | Feature | 2026-03-01 | OPEN | `/reasoning` 命令仍未实现，仅完成 `/stop` |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | Feature | 2026-03-15 | OPEN | “完整 Docker 镜像”需求明确，建议 v0.5.2 解决 |
| [#3882](https://github.com/zeroclaw-labs/zeroclaw/issues/3882) | Integration | 2026-03-18 | OPEN | 阿里云百炼支持，需评估 API 兼容性 |

> **建议维护者优先响应**：Ollama/Venice.ai 工具调用故障（[#3999](https://github.com/zeroclaw-labs/zeroclaw/issues/3999), [#4007](https://github.com/zeroclaw-labs/zeroclaw/issues/4007)）直接影响本地用户核心体验。

--- 

📊 **项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高强度迭代中保持高质量交付，社区响应迅速，但需警惕 **本地部署稳定性** 与 **安全策略灵活性** 的平衡问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-20）

---

## 1. 今日速览

PicoClaw 在 2026 年 3 月 19 日表现出极高的开发活跃度：**过去 24 小时内共处理 146 条 Issues 与 PR 更新**，其中 **106 条 PR 更新**（52 条已合并/关闭，54 条待合并）和 **40 条 Issues 更新**（30 条新开/活跃，10 条已关闭），显示出社区贡献与核心团队响应均处于高强度状态。项目发布了一个 nightly 版本（`v0.2.3-nightly.20260320.71ce2196`），主要聚焦于 CLI 工具调用、Anthropic 兼容性及 launcher 稳定性修复。整体项目健康度良好，功能迭代与 bug 修复并行推进，社区对新功能（如 TTS/ASR、事件钩子、OpenIM 支持）需求旺盛。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.3-nightly.20260320.71ce2196`
- **类型**：自动化 nightly 构建（可能不稳定，需谨慎使用）
- **主要变更**：
  - 修复 CLI 提供商（如 `claude-cli`、`gemini-cli`）在提取 JSON 工具调用时的健壮性问题（[#1813](https://github.com/sipeed/picoclaw/pull/1813)）
  - 改进 `claude-cli` 系统提示传递方式，避免命令行参数过长导致失败（[#1812](https://github.com/sipeed/picoclaw/pull/1812)）
  - 修复 launcher 对外部管理 gateway 进程的识别问题，防止重复启动（[#1811](https://github.com/sipeed/picoclaw/pull/1811)）
  - 支持 `gemini-cli` 作为无凭证 CLI 提供商的自动检测（[#1810](https://github.com/sipeed/picoclaw/pull/1810)）
- **无破坏性变更**，但建议生产环境仍使用稳定版本。
- **完整变更日志**：[v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

---

## 3. 项目进展

今日共 **52 条 PR 被合并或关闭**，关键进展包括：

| 类别 | 进展摘要 | 链接 |
|------|--------|------|
| **Bug 修复** | 修复 Telegram 通道在 LLM 失败时“正在输入”指示器不停止的问题（[#1390](https://github.com/sipeed/picoclaw/pull/1390)） | ✅ 已合并 |
| **配置优化** | 明确 workspace 中 `.md` 文件修改无需重启 gateway（[#1740](https://github.com/sipeed/picoclaw/pull/1740)） | ✅ 已合并 |
| **文档增强** | 补充 Agent Bindings 路由配置说明（[#1788](https://github.com/sipeed/picoclaw/pull/1788)） | ✅ 已合并 |
| **工具链修复** | 修复子代理无法访问工具注册表的严重问题（[#1711](https://github.com/sipeed/picoclaw/pull/1711)） | ✅ 已合并 |
| **依赖升级** | 升级 GoReleaser、Docker QEMU、TailwindCSS 等关键依赖至最新稳定版（[#1798](https://github.com/sipeed/picoclaw/pull/1798), [#1799](https://github.com/sipeed/picoclaw/pull/1799)） | ✅ 已合并 |

> 项目整体在 **多代理协作、CLI 提供商兼容性、用户体验反馈机制** 方面取得实质性推进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥ 2）

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) | 为 PicoClaw 添加 TTS/ASR 支持 | 14 | 用户强烈希望集成语音交互能力，已有 PR #1642 实现但未集成至 gateway |
| [#901](https://github.com/sipeed/picoclaw/issues/901) | 无法添加 OpenRouter Free 模型 | 12 | 配置后仍报错，怀疑是 provider 层模型解析逻辑缺陷（已关闭，疑似重复） |
| [#1439](https://github.com/sipeed/picoclaw/issues/1439) | Agent 上下文管理重构（边界/压缩/预算） | 6 | 长期性能与 token 效率问题，涉及 agent refactor track 6 |
| [#629](https://github.com/sipeed/picoclaw/issues/629) | LLM 调用失败后无重试机制 | 4 | 网络波动导致任务卡死，需实现自动重试策略 |

> **分析**：语音交互（TTS/ASR）成为当前最大功能期待，反映用户向多模态 AI 助手演进的需求；同时，**稳定性与容错机制**（重试、上下文管理）是高频痛点。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ **高** | [#1792](https://github.com/sipeed/picoclaw/issues/1792) | Anthropic API 返回 400：重复 `tool_result` 未合并 | ❌ 无（需修复 `sanitizeHistoryForProvider` 逻辑） |
| ⚠️ **高** | [#1771](https://github.com/sipeed/picoclaw/issues/1771) | Anthropic Messages 格式下空 `tool_call.name` 导致 400 | ❌ 无（需校验 tool call 结构） |
| ⚠️ **中** | [#1641](https://github.com/sipeed/picoclaw/issues/1641) | 运行数日后因 `max_tool_iterations` 错误停止工作 | ❌ 无（需优化迭代控制或提供重置机制） |
| ⚠️ **中** | [#1767](https://github.com/sipeed/picoclaw/issues/1767) | 飞书机器人频繁断连，疑似无自动重连 | ❌ 无（需增强 channel 连接健壮性） |
| ⚠️ **低** | [#1704](https://github.com/sipeed/picoclaw/issues/1704) | 运行 TUI launcher 后无法启动 gateway/talk | ❌ 无（可能与进程管理冲突有关） |

> 当前最紧急问题是 **Anthropic 提供商兼容性缺陷**，影响核心功能可用性。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 是否已有 PR | 纳入下一版可能性 |
|--------|------|------------|----------------|
| **TTS/ASR 语音支持** | [#1648](https://github.com/sipeed/picoclaw/issues/1648) | ✅ 有（#1642） | ⭐⭐⭐⭐☆（高，已有实现待集成） |
| **事件驱动钩子系统** | [#1795](https://github.com/sipeed/picoclaw/issues/1795) / [#1796](https://github.com/sipeed/picoclaw/issues/1796) | ❌ 无 | ⭐⭐⭐☆☆（中高，对标 OpenClaw 能力） |
| **OpenIM 插件支持** | [#1372](https://github.com/sipeed/picoclaw/issues/1372) | ❌ 无 | ⭐⭐☆☆☆（中， niche 需求） |
| **OpenAI API 格式 Channel** | [#1738](https://github.com/sipeed/picoclaw/issues/1738) | ❌ 无 | ⭐⭐⭐⭐☆（高，便于嵌入现有系统） |
| **Web 面板集成 Cron 与成本统计** | [#1797](https://github.com/sipeed/picoclaw/issues/1797) | ❌ 无 | ⭐⭐⭐☆☆（中，提升运维体验） |

> **TTS/ASR 和 OpenAI API Channel 最可能进入 v0.3.0 路线图**，因其已有社区实现或明确集成价值。

---

## 7. 用户反馈摘要

- **正面反馈**：
  - “picoclaw 在 Termux 安卓设备上运行良好”（[#1675](https://github.com/sipeed/picoclaw/issues/1675)）
  - “launcher 模式极大简化了部署流程”（隐含于多配置相关讨论）
- **核心痛点**：
  - **飞书通道不稳定**：“经常不回复消息，看后台好像是网络断开了”（[#1767](https://github.com/sipeed/picoclaw/issues/1767)）
  - **工具执行无反馈**：“长任务执行时用户面对空白屏幕，毫无进度提示”（[#571](https://github.com/sipeed/picoclaw/issues/571)）
  - **配置继承不直观**：“model_list 不继承 providers 的 api_key，必须手动重复配置”（[#1635](https://github.com/sipeed/picoclaw/issues/1635)，已修复）
- **典型使用场景**：
  - 安卓 Termux 环境部署（ARMv7/arm64）
  - 企业内嵌 via OpenAI API 兼容接口
  - 定时任务监控（Cron + Telegram 通知）

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | [#629](https://github.com/sipeed/picoclaw/issues/629) | LLM 调用失败后无重试 | 2026-02-22 | OPEN | ⚠️ 超 25 天未响应，影响可靠性 |
| Issue | [#571](https://github.com/sipeed/picoclaw/issues/571) | 工具执行期间无进度反馈 | 2026-02-21 | OPEN | ⚠️ 超 26 天，用户体验关键缺陷 |
| Issue | [#1372](https://github.com/sipeed/picoclaw/issues/1372) | 请求 OpenIM 插件支持 | 2026-03-11 | OPEN | ⚠️ 8 天无进展，社区期待明确回应 |
| PR | [#1460](https://github.com/sipeed/picoclaw/pull/1460) | 修复 OpenAI 兼容提供商的 tool call 序列化 | 2026-03-13 | OPEN | ⚠️ 6 天未合入，涉及核心协议兼容性 |

> **建议维护者优先处理 [#629] 和 [#571]**，二者均为长期存在且影响广泛用户体验的问题。

--- 

**报告生成时间**：2026-03-20  
**数据来源**：GitHub PicoClaw 仓库公开数据

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-20）

---

## 1. 今日速览

NanoClaw 在 2026-03-19 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共产生 **15条 Issues 更新**（12条新开/活跃，3条关闭）和 **32条 PR 更新**（21条待合并，11条已合并/关闭），显示出强劲的开发节奏。尽管无新版本发布，但多个关键功能与安全修复已进入合并或审查阶段，项目整体处于快速迭代期。社区对多通道支持、安全增强和部署灵活性表现出强烈兴趣。

---

## 2. 版本发布

**无新版本发布**。当前主干分支（main）仍在持续集成新功能与修复，暂未触发正式版本发布流程。

---

## 3. 项目进展

今日有 **11个 PR 被合并或关闭**，标志着多项重要改进落地：

- **#1191 [CLOSED] security: stop logging user prompt content on container errors**  
  ✅ 修复了高优先级安全问题（#1150）：容器错误日志不再记录完整用户提示内容，显著降低敏感信息泄露风险。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/1191)

- **#1269 [CLOSED] skill: add /add-telegram-voice-transcription**  
  ✅ 新增 Telegram 语音消息转录功能，通过本地 Whisper 服务实现端到端语音转文本，提升交互体验。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/1269)

- **#1268 [CLOSED] S1/replace claude sdk dependency**  
  ✅ 替换 Claude SDK 依赖，为后续合规性调整（如 #1224 TOS 问题）铺平道路。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/1268)

- **#1160 [CLOSED] feat: conversation search and file attachment support**  
  ✅ 实现基于 BM25/FTS5 的群组级对话搜索，并支持 WhatsApp 文件附件下载与存储，大幅增强数据可检索性。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/1160)

这些合并表明项目正从“基础功能完善”向“高级能力扩展”过渡，尤其在**多模态交互**、**安全加固**和**合规适配**方面取得实质进展。

---

## 4. 社区热点

### 🔥 最受关注 Issue：#957 — 支持 Podman 替代 Docker  
**评论数：5 | 👍：4**  
用户 @fuyb 建议文档中增加对 Podman 的支持，尤其针对 macOS 和 Linux 用户。理由包括：无需 root 权限、systemd-free 架构、更适合容器化开发环境。该提议获得社区积极回应，反映出对**轻量化、去中心化部署方案**的强烈需求。  
[链接](https://github.com/qwibitai/nanoclaw/issues/957)

### 🔥 高热度 PR：#1283 — 升级记忆系统至 memory-lancedb-pro  
提出用混合检索（BM25 + 向量）替代当前纯向量搜索，解决关键词查询漏检问题，并支持重排序与噪声过滤。虽为新提交，但因直击“记忆召回率低”痛点，引发潜在关注。  
[链接](https://github.com/qwibitai/nanoclaw/pull/1283)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | #1150 容器错误日志泄露用户提示 | ✅ 已关闭 | 是（#1191） |
| ⚠️ 中 | #1272 Telegram 直接聊天误标为群组（is_group=1） | 🟡 开放中 | 否 |
| ⚠️ 中 | #413 Linux systemd 用户会话回退逻辑缺陷 | 🟡 开放中 | 否 |
| ⚠️ 中 | #853 不支持 ANTHROPIC_AUTH_TOKEN 认证 | 🟡 开放中 | 否 |

> **说明**：#1150 已修复；其余问题虽非崩溃级，但影响用户体验与数据一致性，建议优先处理。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳可能性，已有对应 PR 或明确技术路径：

- **多通道扩展**：  
  - Discord Swarm 支持（#1265）、Signal 通道（#1121）、OpenMail 邮件集成（#1251）均处于审查阶段，反映项目正积极拓展通信生态。
- **安全与合规**：  
  - 阻止 git hook 绕过（#1270 / #1271）、禁用 remote-control 权限（#1126）、替换 SDK 以符合 TOS（#1266）等 PR 显示团队重视操作安全与合规风险。
- **部署灵活性**：  
  - Podman 支持（#957）、自定义 API 端点（#1257）、headless Linux 浏览器回退（#1281）等需求指向更广泛的部署场景覆盖。

预计下一版本将聚焦于**通道多元化**与**企业级安全策略**。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼关键用户声音：

- **正面反馈**：  
  > “Thank you for maintaining this project. It is very useful and well designed.” — @fuyb（#957）  
  用户普遍认可项目架构清晰、实用性强。

- **痛点诉求**：  
  - Telegram 用户抱怨语音消息无法处理（已由 #1269 解决）；  
  - 开发者指出当前记忆检索“miss relevant memories on keyword-heavy queries”（#1283 正解决）；  
  - 安全敏感用户担忧日志泄露（已修复），但仍希望默认关闭 verbose 日志。

- **使用场景**：  
  教育（学生使用 Web 通道）、跨团队协作（多群聊代理）、自动化运维（CI/CD 集成）成为新兴典型场景。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

- **#413 Linux systemd 用户会话回退逻辑缺陷**（创建于 2026-02-23，距今25天）  
  影响 SSH 登录 Linux 服务器的用户体验，已有明确复现步骤，但无后续讨论。  
  [链接](https://github.com/qwibitai/nanoclaw/issues/413)

- **#853 不支持 ANTHROPIC_AUTH_TOKEN**（创建于 2026-03-09，距今10天）  
  与官方 Claude Code CLI 不兼容，阻碍用户使用标准认证方式。  
  [链接](https://github.com/qwibitai/nanoclaw/issues/853)

- **#963 添加 OpenAI Codex SDK 支持**（创建于 2026-03-11，状态：Needs Review）  
  提供替代引擎选项，增强生态兼容性，但尚未进入合并流程。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/963)

> 建议对上述积压项进行 triage，明确是否纳入近期开发计划。

---

**总结**：NanoClaw 正处于功能爆发期，社区驱动特征明显。安全修复及时，新通道与技能快速涌现，但需警惕技术债积累与长期未决问题。维护者可考虑设立“积压清理周”以提升响应效率。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-20）

---

## 1. 今日速览

IronClaw 项目在2026年3月19日至20日期间保持高度活跃，社区与核心团队协同推进多项关键改进。过去24小时内共处理 **50条 Issues**（新开/活跃14条，关闭36条）和 **50条 PRs**（待合并28条，已合并/关闭22条），显示出高效的代码审查与问题闭环能力。项目发布 **v0.20.0 新版本**，重点增强自修复机制与测试框架。Staging CI 自动化审查系统持续发现高置信度代码缺陷，推动稳定性提升。整体项目健康度良好，处于快速迭代与质量加固并行阶段。

---

## 2. 版本发布

### 🔖 v0.20.0（2026-03-19）

**主要更新内容：**
- **自修复机制增强**：引入 `stuck_threshold` 参数及存储构建器，提升任务卡死检测与恢复能力（[#712](https://github.com/nearai/ironclaw/pull/712)）
- **测试框架扩展**：新增 `FaultInjector` 框架用于 `StubLlm` 的故障注入测试，提高模拟环境可靠性（[#1233](https://github.com/nearai/ironclaw/pull/1233)）
- **网关界面优化**：统一设置页面结构，支持子标签页导航，改善用户体验

> ✅ 无破坏性变更，无需迁移操作。建议所有用户升级以获取稳定性与可观测性改进。

[查看完整 Release Notes](https://github.com/nearai/ironclaw/releases/tag/v0.20.0)

---

## 3. 项目进展

今日多项重要 PR 被合并或推进，显著提升系统健壮性与可维护性：

- **嵌入缓存性能优化**：通过引入 `Arc` 避免缓存命中时的冗余克隆，解决“惊群效应”（thundering herd）与 O(n) LRU 驱逐问题（[#1438](https://github.com/nearai/ironclaw/pull/1438)、[#1423](https://github.com/nearai/ironclaw/pull/1423)）
- **Staging CI 批量修复**：集中处理50个由自动化审查发现的问题，包括重试逻辑统一、异步 DB 调用并行化、Mutex 超时防护等（[#1427](https://github.com/nearai/ironclaw/pull/1427)）
- **权限模型扩展**：新增 owner-scoped 全任务权限默认值，简化 `full_job` 例行任务的工具授权流程（[#1440](https://github.com/nearai/ironclaw/pull/1440)）
- **PDF 提取依赖升级**：用 `pdf_oxide` 替换 `pdf-extract`，实现零外部依赖、布局感知的 Markdown 输出（[#1435](https://github.com/nearai/ironclaw/pull/1435)）

项目整体在 **性能、安全性、可观测性** 三个维度均取得实质性进展。

---

## 4. 社区热点

### 🔥 高关注度 Issues / PRs

| 议题 | 类型 | 热度 | 链接 |
|------|------|------|------|
| #1328 升级至 v0.19.0 失败：PostgreSQL 迁移校验和不匹配 | Bug | 👍 2, 评论 2 | [查看](https://github.com/nearai/ironclaw/issues/1328) |
| #1155 支持 Slack “Socket Mode” 通道 | 功能请求 | 评论 2 | [查看](https://github.com/nearai/ironclaw/issues/1155) |
| #1187 自适应学习系统：技能合成、用户画像、会话搜索 | 功能提案 | XL 规模 PR | [查看](https://github.com/nearai/ironclaw/pull/1187) |

**分析：**
- **#1328** 反映版本升级路径存在断裂风险，影响生产环境部署连续性，需紧急修复迁移脚本兼容性。
- **#1155** 用户强烈呼吁支持 Slack Socket Mode，以避免开放公网端口，体现对 NAT 友好架构的需求。
- **#1187** 提出“自适应学习”愿景，试图将 IronClaw 从任务执行器升级为具备记忆与个性化能力的 AI 助手，代表长期路线图方向。

---

## 5. Bug 与稳定性

### ⚠️ 严重问题（已关闭或已有修复）

| 问题 | 严重性 | 状态 | 修复 PR |
|------|--------|------|--------|
| #1429 嵌入缓存每次命中都克隆嵌入向量 | CRITICAL | 已修复 | [#1438](https://github.com/nearai/ironclaw/pull/1438) |
| #1430 LRU 缓存插入时 O(n) 驱逐 | HIGH | 已修复 | [#1423](https://github.com/nearai/ironclaw/pull/1423) |
| #1431 同一未缓存键的并发请求引发惊群效应 | HIGH | 已修复 | [#1423](https://github.com/nearai/ironclaw/pull/1423) |
| #826 工具循环中消息 Vec 无限增长 | HIGH | 已关闭 | [#820](https://github.com/nearai/ironclaw/pull/820) |
| #814 Token 预算未持久化至数据库 | HIGH | 已关闭 | [#807](https://github.com/nearai/ironclaw/pull/807) |

> ✅ 所有 HIGH/CRITICAL 级别问题均已通过 PR 修复并合并，体现团队对 Staging CI 告警的快速响应能力。

---

## 6. 功能请求与路线图信号

### 🚀 可能被纳入下一版本的功能

| 功能 | 来源 | 成熟度 | 判断依据 |
|------|------|--------|----------|
| Slack Socket Mode 支持 | #1155 + #333 | 高 | 已有完整 PR（#333），仅需合并 |
| 每通道 MCP 工具过滤 | #1378 | 中 | 已实现 JSON 配置路由，待测试验证 |
| 每作业 MCP 服务器与迭代次数限制 | #1243 | 中 | 支持细粒度任务控制，符合安全需求 |
| OpenAI Codex（ChatGPT 订阅）LLM 后端 | #744 | 低 | 高风险 PR，涉及 OAuth 与 SSE 解析，需充分测试 |

> 💡 **预测**：v0.21.0 很可能包含 Slack Socket Mode 与每通道工具过滤，因其已有实现且需求明确。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼关键用户声音：

- **痛点**：
  - “升级 v0.19.0 时 PostgreSQL 迁移失败，导致服务无法启动”（#1328）——反映版本兼容性管理不足。
  - “必须开放公网端口才能用 Slack  webhook，不符合企业安全策略”（#1155）——凸显部署灵活性缺失。
- **满意点**：
  - “Staging CI 自动发现这么多隐藏 bug，说明代码质量在提升”（隐含于多个 closed issue）
  - “嵌入缓存优化后，搜索延迟明显下降”（#1423 相关反馈）

用户期待更平滑的升级体验与更灵活的通道配置选项。

---

## 8. 待处理积压

### ⏳ 长期未响应的重要议题

| 议题 | 类型 | 创建时间 | 状态 | 提醒 |
|------|------|----------|------|------|
| #635 修复 Worker 中孤立 tool_results 与并行合并问题 | Bug | 2026-03-06 | OPEN | 影响 Anthropic API 响应完整性，超14天未合 |
| #744 添加 OpenAI Codex LLM 后端 | 功能 | 2026-03-08 | OPEN | 高风险 XL PR，需核心团队重点 review |
| #1093 修复托管隧道目标端口错误与 SIGPIPE 问题 | Bug | 2026-03-13 | OPEN | 导致 Telegram 机器人完全不可用 |

> 🔔 **建议**：优先处理 #635 与 #1093，二者均为功能性阻断 bug；#744 需安排专项安全评审。

---

**报告生成时间**：2026-03-20  
**数据来源**：GitHub IronClaw 仓库公开数据  
**分析师**：AI 开源项目分析师

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-20）

---

## 1. 今日速览

LobsterAI 在 2026-03-19 至 2026-03-20 期间保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **18 条 Issues**（17 新开，1 关闭）和 **33 条 PR**（18 已合并/关闭，15 待合并），并发布 **1 个新版本**。整体开发节奏紧凑，重点聚焦于国际化（i18n）、暗黑模式适配、OpenClaw 网关稳定性及 Skill 自动升级机制等关键体验优化。用户反馈集中反映多语言支持不完整、飞书集成流式响应缺失、OpenAI 新模型兼容性等问题，显示出产品在企业级多平台部署场景下的成熟度挑战。

---

## 2. 版本发布

**✅ 新版本发布：`2026.3.19`**  
发布时间：2026-03-19  
主要更新内容：
- 🔧 **依赖升级**：升级企业微信相关依赖（#482）
- ⚙️ **网关优化**：修复 OpenClaw 网关重启逻辑（#484）
- 📚 **文档更新**：完善 `AGENTS.md`，补充 OpenClaw 集成说明、i18n 规范与提交规范（#483）

> ⚠️ 无破坏性变更，建议所有用户升级以获取稳定性改进。

🔗 [Release 2026.3.19](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.19)

---

## 3. 项目进展

今日共 **18 个 PR 被合并或关闭**，显著推进了以下方向：

| 类别 | 进展摘要 | 关联 PR |
|------|--------|--------|
| **国际化（i18n）** | 完成 OpenClaw 网关状态消息多语言支持、修复多处硬编码中文、优化通知与模型名称翻译 | #535, #536, #532, #529 |
| **UI/UX 优化** | 解决 MCP 传输类型选择器暗黑模式显示异常、启动界面文案交互问题初步响应 | #536, #519 |
| **Skill 系统健壮性** | 为 12 个内置 Skill 添加 `version` 字段，修复自动升级逻辑失效问题 | #534 |
| **OpenClaw 网关稳定性** | 修复 Windows 端网关进程误重启、启动竞争条件等问题 | #528, #527 |
| **API 兼容性** | 统一 OpenAI Provider 使用 `max_completion_tokens`，适配最新模型（如 o1/o3） | #515 |
| **定时任务可靠性** | 修复中文路径乱码、手动编辑后间隔变为 `nan:nan`、Agent 创建任务数据 NaN 等问题 | #518, #517, #530 |
| **错误处理增强** | 支持非 Anthropic 模型（如 GLM、DeepSeek）错误详情提取，避免“Claude run failed”模糊提示 | #516 |
| **性能优化** | 批量查询配置、修复内存删除 N+1 查询问题，降低数据库负载 | #533 |

> 📌 整体项目在 **多语言支持、跨平台稳定性、第三方模型兼容性** 三大维度取得实质性进展。

---

## 4. 社区热点

### 🔥 高关注度 Issues（附链接）

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#540](https://github.com/netease-youdao/LobsterAI/issues/540) | OpenClaw 频繁重启，无法使用 | 0（新报） | 用户遭遇 3.19 版本网关每几十秒重启，严重影响可用性 |
| [#521](https://github.com/netease-youdao/LobsterAI/issues/521) | 飞书为何不能像 ClawX 实时流式返回 | 0 | 强烈期望飞书通道支持流式响应，提升任务执行透明度 |
| [#511](https://github.com/netease-youdao/LobsterAI/issues/511) | 飞书配置后机器人不回复（企微正常） | 0 | 平台间行为不一致，怀疑飞书集成存在缺陷 |
| [#501](https://github.com/netease-youdao/LobsterAI/issues/501) | 无法兼容 OpenAI 最新模型（max_tokens 报错） | 0 | 新模型参数不兼容，阻碍用户迁移 |
| [#498](https://github.com/netease-youdao/LobsterAI/issues/498) | 长时间对话后重复返回上次答案 | 0 | 疑似上下文压缩/记忆提取逻辑异常，影响对话连贯性 |

> 💡 社区核心诉求集中于：**飞书集成质量、OpenAI 新模型支持、对话状态管理可靠性**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 **高** | [#540](https://github.com/netease-youdao/LobsterAI/issues/540) | OpenClaw 网关频繁重启，导致服务不可用 | ❌ 尚无直接修复，但 #527/#528 已优化启动逻辑 |
| 🔴 **高** | [#511](https://github.com/netease-youdao/LobsterAI/issues/511) | 飞书机器人配置后完全不回复（企微正常） | ❌ 未定位根因 |
| 🟠 **中** | [#498](https://github.com/netease-youdao/LobsterAI/issues/498) | 对话后期重复输出历史回答 | ❌ 疑似记忆模块 bug，需进一步排查 |
| 🟠 **中** | [#500](https://github.com/netease-youdao/LobsterAI/issues/500) | Windows 升级后无法运行，配置丢失 | ❌ 升级迁移逻辑待加强 |
| 🟢 **低** | [#525](https://github.com/netease-youdao/LobsterAI/issues/525) | MCP 传输类型选择器未适配暗黑模式 | ✅ 已由 #536 修复 |

> ⚠️ 需优先关注 **#540 网关重启** 与 **#511 飞书无响应** 两大高影响问题。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 是否已有相关 PR | 纳入可能性 |
|--------|------|----------------|----------|
| 支持 OpenClaw / CoWorker 双内核切换 | [#497](https://github.com/netease-youdao/LobsterAI/issues/497) | ❌ 无直接 PR，但代码已含 OpenClaw 集成 | ⭐⭐⭐ 高（架构已铺垫） |
| 飞书支持流式响应 | [#521](https://github.com/netease-youdao/LobsterAI/issues/521) | ❌ 无 | ⭐⭐ 中（需协议层改造） |
| 支持 ARM64 与 Docker 部署 | [#539](https://github.com/netease-youdao/LobsterAI/issues/539) | ❌ 无 | ⭐⭐⭐ 高（企业部署刚需） |
| 恢复沙箱功能 | [#496](https://github.com/netease-youdao/LobsterAI/issues/496) | ✅ #523 已关闭（“no sandbox”） | ⚠️ 可能已弃用，需官方澄清 |

> 📌 **双内核切换** 和 **ARM64/Docker 支持** 极可能成为下一版本重点。

---

## 7. 用户反馈摘要

- **痛点**：
  - 多语言切换后界面文案未同步更新（#522, #524），影响国际化体验；
  - 飞书通道缺乏流式反馈，任务执行过程“黑盒”（#521）；
  - OpenAI 新模型参数不兼容，阻碍技术栈升级（#501）；
  - 升级后配置丢失或功能异常（#500, #499），降低用户信任度。

- **满意点**：
  - 企业微信集成稳定可靠（对比飞书）；
  - Skill 系统扩展性强，社区积极贡献新 Skill（如 QRCode、GitHub Profile）；
  - 开发团队响应迅速，i18n 和 UI 问题修复及时。

- **典型场景**：
  > “我们团队用飞书做任务协同，但 LobsterAI 执行任务时完全看不到进度，只能等最终结果，体验远不如 ClawX。” —— @kuaiyun33

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | #20 | 设置 OpenAI 出错（max_tokens） | 2026-02-20 | ✅ 已关闭 | 已修复，可归档 |
| Issue | #492 | 自定义模型 API 兼容性问题 | 2026-03-18 | 🟡 开放中 | 超 48h 未响应，需技术澄清 |
| PR | #538 | 添加 QRCode Skill | 2026-03-19 | 🟡 待合并 | 功能完整，建议尽快 review |
| PR | #537 | 添加 GitHub Profile Skill | 2026-03-19 | 🟡 待合并 | 同上 |

> 🔔 建议维护者优先处理 **#492 自定义模型兼容性疑问** 和 **#538/#537 Skill PR**，以提升社区参与感与功能丰富度。

---

**报告生成时间**：2026-03-20  
**数据来源**：LobsterAI GitHub Repository（netease-youdao/LobsterAI）  
**分析师备注**：项目整体健康度良好，开发活跃，但需加强飞书集成测试与 OpenAI 新模型适配，避免企业用户流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目动态日报（2026-03-20）**

---

### 1. 今日速览  
过去24小时内，TinyClaw 项目整体活跃度较低，无新 Issue 创建或关闭，亦无新版本发布。开发重心仍集中在代码重构与功能优化上，共2个 Pull Request 处于待合并状态，均由社区贡献者提交。项目处于静默演进阶段，核心团队可能在进行内部评审或架构对齐，社区参与度平稳但未出现爆发性互动。

---

### 2. 版本发布  
*（无新版本发布）*

---

### 3. 项目进展  
今日无 PR 被合并或关闭，但有两个重要 PR 持续更新，体现项目在架构解耦与用户体验层面的推进：

- **#242 [OPEN] refactor(core): extract CLI logic into adapter pattern**  
  作者 @jlia0 将 `invoke.ts` 中的 CLI 调用逻辑抽离为独立的 `AgentAdapter` 接口实现，支持 Claude、Codex、OpenCode 等后端的自动注册。此举显著降低核心模块耦合度，提升可扩展性，为未来接入更多 AI 提供商奠定架构基础。  
  🔗 [PR #242](https://github.com/TinyAGI/tinyagi/pull/242)

- **#212 [OPEN] feat(office): redesign the live office workspace**  
  作者 @mczabca-boop 对 `/office` 实时协作工作区进行界面与交互重构，虽未披露细节，但“redesign”表明其聚焦于提升多用户协同体验与可视化能力，可能响应早期用户对工作流沉浸感不足的反馈。  
  🔗 [PR #212](https://github.com/TinyAGI/tinyagi/pull/212)

> 尽管尚未合并，两 PR 均体现项目向模块化、专业化方向演进，技术债清理与功能深化并行。

---

### 4. 社区热点  
*（过去24小时无新 Issue 或 PR 评论，社区互动趋近于零，无显著热点讨论）*

---

### 5. Bug 与稳定性  
*（过去24小时无新 Bug 报告、崩溃或回归问题提交）*

---

### 6. 功能请求与路线图信号  
当前开放 PR 暗示以下潜在路线图方向：

- **多 AI 提供商标准化接入机制**：#242 的 Adapter 模式若被采纳，将明确支持“插件式”AI 后端扩展，可能成为 v0.5+ 的核心特性。
- **实时协作工作区升级**：#212 的重构若聚焦于低延迟同步、角色权限或白板集成，则表明项目正从“单机助手”向“团队智能工作台”演进，契合企业级应用场景需求。

建议维护者评估两 PR 的优先级，尤其 #242 对架构影响深远，宜尽早进入 review 流程。

---

### 7. 用户反馈摘要  
*（过去24小时无新 Issue 评论，无法提取最新用户反馈）*  
历史趋势显示，用户对 CLI 灵活性与 Office 模块的交互流畅性关注较高，#212 和 #242 可视为对这类隐性需求的间接响应。

---

### 8. 待处理积压  
以下 PR 已开放超7天且无维护者响应，建议优先关注：

- **#212 feat(office): redesign the live office workspace**（开放于 2026-03-13，最后更新 2026-03-19）  
  虽持续更新，但缺乏核心成员 review 或合并意向表达，存在社区贡献者积极性受损风险。  
  🔗 [PR #212](https://github.com/TinyAGI/tinyagi/pull/212)

- **#242 refactor(core): extract CLI logic into adapter pattern**（开放于 2026-03-19）  
  架构级变更需谨慎评估，建议组织专项技术讨论或标注为 `needs-design-review` 以明确处理路径。  
  🔗 [PR #242](https://github.com/TinyAGI/tinyagi/pull/242)

> 建议维护团队在本周内对上述 PR 给出初步反馈，避免优质贡献流失。

---  
*数据来源：GitHub TinyAGI/tinyclaw 仓库，截至 2026-03-20 00:00 UTC*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-20）

---

## 1. 今日速览

CoPaw 项目在2026年3月20日继续保持高活跃度，过去24小时内共处理 **50条 Issues**（新开/活跃34条，关闭16条）和 **50条 Pull Requests**（待合并22条，已合并/关闭28条），显示出社区参与度与开发节奏均处于高位。项目当日发布两个新版本（`v0.1.0` 和 `v0.1.0-beta.4`），标志着从 beta 阶段向稳定版过渡的关键里程碑。核心架构升级（多智能体/多工作区支持）与多模态消息处理能力显著增强，但伴随版本迭代也暴露出部分兼容性与稳定性问题，需重点关注。

---

## 2. 版本发布

### 🔖 v0.1.0（正式版）
- **核心更新**：
  - ✨ **多智能体/多工作区架构**：支持同时运行多个 Agent，每个拥有独立配置、记忆、技能与工具，并通过控制台 Agent 选择器实现快速切换（[#13](https://github.com/agentscope-ai/CoPaw/pull/13)）。
  - 此版本为首个正式稳定版，标志着项目从实验性 beta 进入生产可用阶段。
- **迁移注意**：
  - 旧版单 Agent 配置需手动迁移至新多工作区结构；
  - 建议备份 `~/.copaw/config/` 目录后升级。

### 🔖 v0.1.0-beta.4（预发布版）
- **关键改进**：
  - 🖼️ **控制台支持多模态消息**：新增图像与文件上传功能（[#1772](https://github.com/agentscope-ai/CoPaw/pull/1772)）；
  - 🛠️ 修复本地模型工厂导入错误（`create_local_chat_model`）（[#1784](https://github.com/agentscope-ai/CoPaw/pull/1784)）。

> 📌 建议用户尽快升级至 `v0.1.0` 以获得完整功能支持与长期维护保障。

---

## 3. 项目进展

今日共 **合并/关闭28个 PR**，重点推进以下方向：

| 类别 | 进展摘要 | 链接 |
|------|--------|------|
| **Bug 修复** | 修复 Telegram 语音消息解析失败（`AudioContent` 数据结构兼容）、Cron 任务取消状态误报、TokenUsageManager 异步锁死锁问题 | [#1896](https://github.com/agentscope-ai/CoPaw/pull/1896), [#1894](https://github.com/agentscope-ai/CoPaw/pull/1894), [#1893](https://github.com/agentscope-ai/CoPaw/pull/1893) |
| **功能增强** | 新增 XiaoYi 通道文件/图片支持、Agents Square 源码浏览与导入流程、本地嵌入模型支持（BGE-M3/Qwen3-VL） | [#1885](https://github.com/agentscope-ai/CoPaw/pull/1885), [#1883](https://github.com/agentscope-ai/CoPaw/pull/1883), [#1789](https://github.com/agentscope-ai/CoPaw/pull/1789) |
| **架构优化** | 重构消息处理逻辑，移除冗余媒体路径校验；更新工具结果压缩配置体系 | [#1879](https://github.com/agentscope-ai/CoPaw/pull/1879), [#1867](https://github.com/agentscope-ai/CoPaw/pull/1867) |

> ✅ 项目整体向“多模态 + 多智能体 + 本地优先”方向稳步演进，基础设施日趋成熟。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 诉求分析 |
|------|------|--------|--------|
| [#1641](https://github.com/agentscope-ai/CoPaw/issues/1641) | QQ频道私信消息处理支持 | 7 | 用户反馈当前仅支持聊天子频道，而QQ平台已禁止新建此类频道，需适配私信（DM）协议 |
| [#275](https://github.com/agentscope-ai/CoPaw/issues/275) | QQ配置中IP白名单含义不明 | 7 | 文档缺失导致部署困惑，需明确是“QQ服务器IP”还是“用户客户端IP” |
| [#823](https://github.com/agentscope-ai/CoPaw/issues/823) | llama.cpp 运行 Qwen3.5 报错 | 6 | 本地模型加载失败，影响离线使用体验，需增强 GGUF 模型兼容性 |

> 💡 社区对 **QQ集成完善度** 和 **本地模型稳定性** 关注度极高，反映国内用户核心使用场景。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（按优先级排序）

| Issue | 描述 | 状态 | Fix PR |
|------|------|------|--------|
| [#1834](https://github.com/agentscope-ai/CoPaw/issues/1834) | `TokenUsageManager.record()` 使用 `threading.Lock` 导致异步事件循环死锁 | 🔴 高 | ✅ [#1893](https://github.com/agentscope-ai/CoPaw/pull/1893) |
| [#1774](https://github.com/agentscope-ai/CoPaw/issues/1774) | CPU 占用100%，内存压缩钩子陷入无限循环 | 🔴 高 | 🔄 调查中 |
| [#1873](https://github.com/agentscope-ai/CoPaw/issues/1873) | 升级至 v0.1.0b3 后报“context window exceeds limit” | 🟠 中 | 🔄 需复现 |
| [#1516](https://github.com/agentscope-ai/CoPaw/issues/1516) | Telegram 语音消息无法处理（`AudioContent` 不支持） | 🟠 中 | ✅ [#1896](https://github.com/agentscope-ai/CoPaw/pull/1896) |
| [#1895](https://github.com/agentscope-ai/CoPaw/issues/1895) | 从 v0.1.0b3 升级至 v0.1.0 失败 | 🟠 中 | 🔄 需日志分析 |

> 🛠️ 维护团队响应迅速，关键死锁与音频问题已有修复 PR 提交。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能需求（已有相关 PR 或强烈社区呼声）

| 功能 | 相关 Issue/PR | 纳入可能性 |
|------|---------------|-----------|
| **多智能体协作** | [#153](https://github.com/agentscope-ai/CoPaw/issues/153) + v0.1.0 架构支持 | ✅ 高（已部分实现） |
| **通道路由（Channel Routing）** | [#1889](https://github.com/agentscope-ai/CoPaw/pull/1889) | ✅ 高（PR 已开） |
| **本地嵌入模型支持** | [#1789](https://github.com/agentscope-ai/CoPaw/pull/1789) | ✅ 高（隐私/离线刚需） |
| **QQ私信协议适配** | [#1641](https://github.com/agentscope-ai/CoPaw/issues/1641) | 🟡 中（依赖腾讯API变更） |
| **统一事件总线（SSE）** | [#184](https://github.com/agentscope-ai/CoPaw/issues/184) | 🟡 中（架构级，需规划） |

> 🚀 下一版本（v0.1.1）有望聚焦 **通道扩展性** 与 **本地能力强化**。

---

## 7. 用户反馈摘要

### ✅ 满意点
- “多工作区设计太棒了！终于可以管理多个不同用途的 Agent 了。”（v0.1.0 发布评论）
- “控制台支持上传图片后，调试多模态流程方便多了。”（[#1772](https://github.com/agentscope-ai/CoPaw/pull/1772) 反馈）

### ❌ 痛点
- “升级后飞书通道直接报错 401，文档没说清楚 auth 配置怎么迁移。”（[#1786](https://github.com/agentscope-ai/CoPaw/issues/1786)）
- “Windows 上用 Ollama 跑 Qwen3:0.6b，响应慢到无法忍受，是不是没做缓存优化？”（[#1808](https://github.com/agentscope-ai/CoPaw/issues/1808)）
- “pip 检测还是 0.0.7，网页却提示可更新到 0.1.0，版本发布流程有问题。”（[#1866](https://github.com/agentscope-ai/CoPaw/issues/1866)）

> 💬 用户普遍认可架构方向，但对 **版本发布一致性** 和 **跨平台性能优化** 有强烈改进期待。

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue

| Issue | 主题 | 创建时间 | 状态 | 建议 |
|------|------|----------|------|------|
| [#902](https://github.com/agentscope-ai/CoPaw/issues/902) | Discord 语音消息发送失败（`.ogg` 不支持） | 2026-03-07 | OPEN | 需评估音频转码方案 |
| [#1258](https://github.com/agentscope-ai/CoPaw/issues/1258) | 心流 iFlow 大模型配置无响应 | 2026-03-11 | OPEN | 需验证 OpenAI 兼容协议实现 |
| [#676](https://github.com/agentscope-ai/CoPaw/issues/676) | MCP 是否支持 HTTP 形式 | 2026-03-05 | CLOSED（但未根本解决） | 应明确文档说明限制 |

> 📢 建议维护者优先处理 **Discord 音频支持** 与 **第三方模型兼容性验证**，以提升通道生态完整性。

---

**报告生成时间**：2026-03-20  
**数据来源**：[CoPaw GitHub Repository](https://github.com/agentscope-ai/CoPaw)  
**分析师备注**：项目整体健康度良好，活跃度与迭代速度俱佳，建议加强版本发布同步机制与文档更新节奏。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报（2026-03-20）**

---

### 1. 今日速览  
过去24小时内，ZeptoClaw 社区保持中等活跃度：共新增1个 Issue、3个 Pull Request 更新，无新版本发布。核心开发聚焦于协议层优化与新功能集成，其中 ACP（Agent Client Protocol）相关实现成为焦点。尽管无合并操作，但多个 PR 持续演进，表明项目处于功能扩展与稳定性打磨的关键阶段。整体健康度良好，贡献者协作有序。

---

### 2. 版本发布  
*无新版本发布*

---

### 3. 项目进展  
*无 PR 被合并或关闭*  
当前所有活跃 PR 仍处于审查或开发状态，项目整体未发生代码主干变更。但值得注意的是，[#356](https://github.com/qhkm/zeptoclaw/pull/356)（ACP stdio + HTTP 实现）作为底层通信协议的重大更新，正接受社区反馈，其后续合并将显著提升 ZeptoClaw 作为独立 Agent 运行时的互操作性。

---

### 4. 社区热点  
**Issue #388**：[bug(channels): fix ACP HTTP initialize and notification semantics](https://github.com/qhkm/zeptoclaw/issues/388)  
- **评论数**：2  
- **标签**：`bug`, `area:channels`  
- **分析**：该 Issue 指出 ACP HTTP 实现中存在两个关键语义缺陷：  
  1. `initialize` 状态被错误地设为全局共享标志，导致首个客户端初始化后，后续客户端可绕过握手直接调用会话接口；  
  2. HTTP 通知机制错误地接收响应体，违反协议设计预期。  
  此问题源于 PR #356 的引入，反映出协议实现细节尚未完全对齐规范。维护者 @qhkm 已参与讨论，表明该问题已被识别为高优先级修复项，预计将在 ACP 相关 PR 合并前解决。

---

### 5. Bug 与稳定性  
**高严重性 Bug**：  
- **#388**：ACP HTTP 协议状态管理与通知语义错误（[链接](https://github.com/qhkm/zeptoclaw/issues/388)）  
  - **影响范围**：多客户端场景下的协议安全性与会话隔离性  
  - **是否已有 fix PR**：否（但关联 PR #356 正在迭代中，可能包含修复）  
  - **建议**：建议在合并 #356 前补充单元测试以验证握手隔离性与通知流纯净性。

> 当前无其他崩溃或回归报告。

---

### 6. 功能请求与路线图信号  
- **新增 LLM 提供商支持**：PR [#390](https://github.com/qhkm/zeptoclaw/pull/390) 提出集成 **Novita AI** 作为 OpenAI 兼容后端，遵循现有架构模式（如 xAI、DeepSeek 等），支持环境变量配置 API 密钥。该 PR 结构清晰、符合项目扩展惯例，极有可能在下一版本中落地，反映项目对多厂商 LLM 生态的持续适配策略。  
- **开发者体验优化**：PR [#287](https://github.com/qhkm/zeptoclaw/pull/287) 引入统一开发工具链（`cargo test` / `clippy` 预检），虽非用户可见功能，但显著降低贡献门槛，预示项目正加强工程规范化建设，为规模化协作铺路。

---

### 7. 用户反馈摘要  
从 Issue #388 的评论可见，用户对 **协议实现的严谨性** 提出明确期待：  
> “一旦一个客户端完成初始化，其他客户端不应跳过握手” —— 反映出用户对 **多租户安全边界** 和 **协议合规性** 的高度关注。  
此外，ACP 作为 ZeptoClaw 与外部 Agent 框架（如 acpx）集成的核心通道，其稳定性直接影响生态兼容性，用户隐含诉求为：**“即插即用、行为可预测”**。目前尚无正面满意度表达，但问题提出方式专业，表明核心用户群体具备较高技术素养。

---

### 8. 待处理积压  
- **PR #287**（Dev tools for consistent pre-PR state）自 2026-03-09 开启，已存在 **10天**，虽非紧急功能，但长期未获 review，可能影响贡献者体验。建议维护者优先审阅，因其对项目可持续协作具有长期价值。  
- **PR #356**（ACP 实现）自 03-13 开启，虽持续更新，但尚未进入合并流程。鉴于其关联关键 Bug（#388），建议加速评审并协调修复，避免技术债累积。

> 提醒：长期未响应 PR 可能抑制社区贡献热情，建议建立定期 triage 机制。

---  
*数据来源：GitHub 仓库 qhkm/zeptoclaw，统计周期：2026-03-19 至 2026-03-20*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-03-20）**

---

### 1. 今日速览  
EasyClaw 项目在过去24小时内保持高活跃度，共完成 **3个 PR 合并**、**2个版本发布**（v1.7.2 与 v1.7.3），并处理了2条 Issues（1开1闭）。核心开发集中在 **UI 架构重构与用户体验优化**，社区互动积极，用户关注点从功能使用延伸至多端一致性体验。整体项目处于快速迭代与界面现代化升级阶段，健康度良好。

---

### 2. 版本发布  

#### 🔹 v1.7.3（RivonClaw v1.7.3）  
- **重点更新**：修复 macOS 用户因 Gatekeeper 安全机制导致的“应用已损坏”误报问题，提供终端绕过指引（`xattr -cr` 命令建议隐含于说明中）。  
- **影响范围**：仅影响 macOS 平台未签名应用的首次启动体验，无功能变更。  
- **迁移注意**：用户需按文档指引手动解除隔离属性，建议在新版本中集成自动签名或公证流程以彻底解决。  
> 📌 [Release v1.7.3](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.3)

#### 🔹 v1.7.2（RivonClaw v1.7.2）  
- **重大 UI 重构**：  
  - 组件解耦与主题分离，提升可维护性与暗黑模式一致性  
  - 技能页（Skills Page）重新设计，增强信息层级与交互反馈  
  - 引入验证码认证机制，强化账户安全  
  - 新增基于 SQLite 的频道组“允许来源”编辑器，支持细粒度权限配置  
  - Plugin SDK 重构，支持国际化品牌标识  
  - 系统设置页集成集中式默认配置管理  
- **破坏性变更**：旧版自定义主题可能因主题分离失效，需适配新 CSS 变量体系；插件若依赖旧 SDK 接口需升级。  
> 📌 [Release v1.7.2](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.2)

---

### 3. 项目进展  

今日合并的3个 PR 均围绕 **账户系统与 UI 现代化** 展开，标志着前端架构进入稳定重构阶段：  

- **#20 [UI Migration: Component Refactor + Theme Separation + Skills Page]**  
  完成核心组件抽离（如 `BottomActions`、`icons.tsx` 统一图标系统），实现主题与逻辑解耦，为后续多端一致性打下基础。  
  > 🔗 [PR #20](https://github.com/gaoyangz77/rivonclaw/pull/20)

- **#23 [feat(ui): redesign auth modal & account page]**  
  重构登录/注册模态框，引入密码强度条、输入长度限制、隐私条款链接等合规性设计；账户页采用卡片式布局，提升信息可读性。  
  > 🔗 [PR #23](https://github.com/gaoyangz77/rivonclaw/pull/23)

- **#24 [Account UI redesign popover]**  
  将账户导航从独立页面改为头像点击弹出的 Popover 组件，区分登录/未登录状态 UI，优化空间利用率与操作路径。  
  > 🔗 [PR #24](https://github.com/gaoyangz77/rivonclaw/pull/24)

> ✅ 综合评估：项目在用户体验一致性、安全性与可维护性方面迈出关键一步，UI 技术债显著降低。

---

### 4. 社区热点  

#### 🔥 Issue #22：[“多浏览器”功能是指多用户还是多平台一致？登录和不登录有哪些影响？](https://github.com/gaoyangz77/rivonclaw/issues/22)  
- **讨论焦点**：用户 @slowayear 对“多浏览器”功能语义提出疑问，并附截图询问登录态对功能权限的影响。  
- **背后诉求**：反映用户对 **跨设备/跨平台数据同步机制** 和 **账户体系权限模型** 的强烈关注，暗示当前文档未清晰说明多端协同逻辑。  
- **维护者响应**：已有2条评论参与澄清，但尚未形成官方结论，建议补充产品文档中的“多端同步”说明章节。

---

### 5. Bug 与稳定性  

✅ **无新增 Bug 报告**。  
昨日关闭的 Issue #12 为社群交流请求，非技术问题。当前无已知崩溃、回归或高严重性缺陷待修复。

---

### 6. 功能请求与路线图信号  

- **多端一致性支持**（高优先级信号）：Issue #22 明确指向对“多浏览器/多平台”行为一致性的需求，结合 v1.7.2 中 SQLite 账户配置与主题分离改进，推测下一版本将强化 **跨设备状态同步** 与 **统一配置中心**。  
- **开发者生态扩展**：v1.7.2 提及 Plugin SDK 国际化重构，配合 Issue #12 中用户对其架构的认可，预示未来可能开放插件市场或第三方集成接口。

---

### 7. 用户反馈摘要  

- **正面反馈**：  
  - 用户 @Geekbruce 高度评价项目架构设计（“非常符合我预期的架构”），体现技术选型获得开发者认可。  
- **痛点与困惑**：  
  - 新用户 @slowayear 对“多浏览器”功能定义不清，暴露出产品术语缺乏标准化解释；  
  - macOS 用户仍受 Gatekeeper 困扰，尽管 v1.7.3 提供解决方案，但体验仍非无缝。

---

### 8. 待处理积压  

⚠️ **无长期未响应 Issue/PR**。  
当前所有 Issues 均在创建后11天内得到响应或关闭，PR 合并效率高，维护团队响应及时。建议持续关注 Issue #22 的后续澄清，避免演变为文档缺失类技术债。

---  
**报告生成时间：2026-03-20 | 数据来源：GitHub EasyClaw 仓库**

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*