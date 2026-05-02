# OpenClaw 生态日报 2026-05-02

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-05-02 01:23 UTC

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

# OpenClaw 项目动态日报（2026-05-02）

---

## 1. 今日速览

过去24小时内，OpenClaw 社区活跃度处于高位：共产生 **500条 Issues 更新**（新开/活跃 457 条，关闭 43 条）和 **500条 PR 更新**（待合并 463 条，已合并/关闭 37 条），反映出高强度的问题反馈与开发响应节奏。尽管无新版本发布，但多个关键回归问题被识别并推动修复，尤其在网关稳定性、插件性能和 Windows 平台兼容性方面。社区对近期版本（v2026.4.24–v2026.4.29）的运行时退化问题高度关注，形成集中讨论热点。

---

## 2. 版本发布

**无新版本发布**。  
当前主线仍为 `v2026.4.29`，但多个已关闭 Issue（如 #75412、#75650）表明该版本存在显著性能回归，建议用户暂缓升级或等待热修复。

---

## 3. 项目进展

今日有 **37个 PR 被合并或关闭**，重点推进方向包括：

- **网关稳定性修复**：  
  - #73884 提升 Telegram 轮询停滞阈值至 60s，避免因 grammY 长轮询窗口（30s）误触发重启（[链接](https://github.com/openclaw/openclaw/pull/73884)）  
  - #73888 修复 systemctl user bus 环境变量丢失问题，确保 Linux 用户级服务命令可靠执行（[链接](https://github.com/openclaw/openclaw/pull/73888)）

- **安全与配置审计对齐**：  
  - #73948 对齐技能加载器与审计探针的符号链接边界检查逻辑，减少误报（[链接](https://github.com/openclaw/openclaw/pull/73948)）

- **内存与嵌入优化**：  
  - #73938 统一远程嵌入批处理超时预算，防止多阶段请求超时不一致（[链接](https://github.com/openclaw/openclaw/pull/73938)）

- **Windows 平台修复**：  
  - #68819 解决 Windows 下 `.cmd` 脚本无法解析为 `.exe` 导致 Claude CLI 启动失败的问题（[链接](https://github.com/openclaw/openclaw/pull/68819)）

整体来看，项目正集中修复 v2026.4.x 系列引入的运行时退化问题，向稳定性恢复迈出关键步伐。

---

## 4. 社区热点

以下 Issue 引发高度关注：

| Issue | 热度 | 核心诉求 |
|------|------|--------|
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | 15 评论 | Windows + Node 24 环境下网关长期运行后出现多子系统退化（定价获取 60s 超时、Telegram 轮询停滞、RPC 延迟），跨多个版本复现，要求根本性修复 |
| [#73655](https://github.com/openclaw/openclaw/issues/73655) | 11 评论 | 插件重启引发三重泄漏（端口占用重试循环、信号处理器堆积、同步 I/O 阻塞 WS 握手），导致客户端连接超时，需资源管理优化 |
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | 11 评论 | Slack 连接静默丢失，无错误提示，影响生产环境演示，暴露连接健康监测盲区 |

这些 Issue 共同指向 **网关长期运行稳定性** 和 **跨平台一致性** 的深层架构问题，已成为社区最紧迫的技术债务。

---

## 5. Bug 与稳定性

按严重程度排序：

| 问题 | 严重性 | 状态 | 关联 PR |
|------|--------|------|--------|
| **网关 CPU 自旋导致 Telegram 回复停滞**（#72338） | 高 | ✅ 已关闭 | — |
| **Active Memory 插件每次运行超时（15s）**（#73306） | 高 | ✅ 已关闭 | — |
| **插件 manifest 重复读取 100+ 次致 60s 延迟**（#75591） | 高 | ✅ 已关闭 | — |
| **嵌入式 Agent 回复延迟 40–47s**（#75650） | 高 | ✅ 已关闭 | — |
| **TUI 进程空闲时 CPU 占用 89–99%**（#75137） | 中高 | 🔴 开放中 | — |
| **会话写锁泄漏致 >30min 死锁**（#49157） | 高 | 🔴 长期未解 | — |
| **多工具回合重放产生孤立 tool_use 块**（#74907） | 中 | 🔴 开放中 | — |

> 注：尽管多个高影响 Bug 已关闭，但其根本原因（如事件循环阻塞、资源泄漏）仍需系统性重构。

---

## 6. 功能请求与路线图信号

用户强烈需求的功能包括：

- **技能优先级配置**（#50199）：解决多技能重叠时选择策略不透明问题，已有初步设计讨论。
- **Control UI 贡献插槽机制**（#71736）：提议数据驱动扩展点，支持插件注入聊天模式、审批卡片等，预示 SDK 演进方向。
- **系统事件旁路队列模式**（#50739）：确保关键告警不被 LLM 请求积压阻塞，提升运维可靠性。
- **会话侧边栏与历史管理**（#50404）：改善 Web UI 多会话体验，需求明确且用户基数大。

结合 PR 动态，**技能优先级** 和 **Control UI 扩展性** 最可能纳入下一版本路线图，因已有架构讨论和原型设计。

---

## 7. 用户反馈摘要

从 Issue 评论提炼真实痛点：

- **性能退化普遍**：多个用户报告从 v2026.3.x 升级至 v2026.4.x 后，“简单回复需等待 40 秒以上”（#75650），“Active Memory 完全不可用”（#73306）。
- **Windows 体验割裂**：Node 版本兼容性（#73323）、CLI 命令挂起（#68944）、exec/read 工具参数污染（#48780）等问题频发，削弱跨平台信心。
- **运维成本高**：网关重启后消息丢失（#49692）、锁文件未清理（#49603）、临时文件堆积（#50442）等细节问题增加维护负担。
- **安全担忧浮现**：macOS 自动信任 TLS 证书（#50642）、Tailscale 无认证暴露（#50630）等高危漏洞被披露，需紧急响应。

用户普遍认可 OpenClaw 的功能丰富性，但对 **稳定性、可观测性、跨平台一致性** 的满意度显著下降。

---

## 8. 待处理积压

以下重要 Issue 长期未获响应，建议维护者优先处理：

| Issue | 创建时间 | 问题类型 | 积压原因 |
|------|----------|--------|--------|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 2026-03-11 | 多 Agent 编排不稳定 | 涉及并发控制与锁机制，复杂度较高 |
| [#49157](https://github.com/openclaw/openclaw/issues/49157) | 2026-03-17 | 会话写锁泄漏致死锁 | 核心状态管理缺陷，影响生产可用性 |
| [#50642](https://github.com/openclaw/openclaw/issues/50642) | 2026-03-19 | macOS 自动信任 rogue 网关 | CVSS 9.5 高危漏洞，安全风险紧迫 |
| [#50630](https://github.com/openclaw/openclaw/issues/50630) | 2026-03-19 | Tailscale 无认证暴露 | CVSS 9.3 高危，网络边界控制失效 |

> 建议：对安全类 Issue（#50642、#50630）立即启动 hotfix 流程；对锁泄漏问题（#49157）分配专项排查资源。

--- 

**报告生成时间：2026-05-02**  
**数据来源：OpenClaw GitHub 仓库公开数据**

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告  
**报告时间：2026-05-02**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **高活跃度、强工程导向、跨平台融合** 的态势。主流项目普遍聚焦于 **稳定性修复、多通道集成、安全隔离与长期运行可靠性**，反映出从“功能原型”向“生产可用”的关键转型。OpenClaw 作为生态核心参照，其 v2026.4.x 系列的性能回归问题引发广泛讨论，倒逼全行业对运行时退化、资源泄漏等深层架构问题的高度重视。与此同时，NanoBot、Zeroclaw、PicoClaw 等项目通过快速迭代修复关键 Bug，展现出更强的工程响应能力。整体生态正从“模型接入竞赛”转向 **系统鲁棒性、可观测性与运维友好性** 的综合能力建设。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 新版本发布 | 健康度评估（★/5） |
|------|---------------|------------|-------------|------------------|
| **OpenClaw** | 500（457 新开/活跃） | 500（37 合并） | ❌ | ★★★☆☆（高活跃但稳定性承压） |
| **NanoBot** | 10（8 关闭） | 31（24 合并） | ❌ | ★★★★☆（高效修复，生态开放） |
| **Zeroclaw** | 50（37 新开） | 50（5 合并） | ✅ v0.7.4 | ★★★★☆（功能迭代稳健） |
| **PicoClaw** | 11（10 新开） | 24（13 合并） | ✅ Nightly | ★★★★☆（安全架构领先） |
| **NanoClaw** | 10（6 新开） | 28（16 合并） | ❌ | ★★★★☆（迁移路径清晰） |
| **IronClaw** | 22（新开/活跃） | 50（19 合并） | ❌ | ★★★★☆（架构重构深水区） |
| **LobsterAI** | 0 | 0（6 PR 积压） | ❌ | ★★☆☆☆（静默开发，技术债累积） |
| **Moltis** | 6（5 关闭） | 11（9 合并） | ❌ | ★★★★★（响应极快，体验优化） |
| **CoPaw** | 7（新开） | 4（1 合并） | ❌ | ★★★☆☆（功能扩展中，性能待优化） |
| **TinyClaw / ZeptoClaw / EasyClaw** | 0 | 0 | ❌ | ★☆☆☆☆（无活动） |

> 注：健康度综合考量活跃度、响应速度、稳定性与社区互动。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大、生态最全**：支持超 20 种通道（Telegram/Slack/WeChat 等）、多模型路由、技能市场与 Control UI，功能覆盖度无出其右。  
- **社区基数大**：单日 500+ Issues/PRs 更新，反映广泛用户基础与真实场景压力测试。  

**技术路线差异**：  
- 采用 **中心化网关 + 插件化技能** 架构，强调“一站式部署”，但牺牲了部分隔离性（如 #49157 会话写锁泄漏影响全局）。  
- 相较之下，PicoClaw 推行“Agent Shield”会话级隔离，IronClaw 推进 Reborn 微内核架构，更注重安全边界。  

**社区规模对比**：  
OpenClaw 的 Issue 数量是第二活跃项目（Zeroclaw）的 **10 倍**，但 PR 合并效率（7.4%）远低于 NanoBot（77%）、Moltis（82%），表明其面临 **规模化协作瓶颈**。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **长期运行稳定性** | OpenClaw、NanoBot、PicoClaw、IronClaw | 解决内存泄漏、端口占用、死锁、通道断连等问题（如 #73323、#3571、#2742、#2949） |
| **多用户与上下文隔离** | PicoClaw、NanoClaw、Zeroclaw | 实现会话级沙箱、用户身份注入、跨会话数据防泄漏（#2313、#3549、#6070） |
| **安全边界强化** | PicoClaw、IronClaw、Zeroclaw | 技能白名单、沙箱策略细化、TLS/认证加固（#5722、#3146、#3492） |
| **跨平台一致性** | OpenClaw、NanoClaw、CoPaw | Windows/macOS/Linux 行为统一，CLI 工具兼容性（#68819、#2172、#3988） |
| **模型推理优化** | NanoBot、PicoClaw、CoPaw | DeepSeek reasoning_content 支持、流式中断修复、超时自适应（#3584、#2740、#3996） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|--------|--------|--------------|
| **OpenClaw** | 全功能集成平台 | 企业运维、多通道运营者 | 单体网关 + 插件系统，强功能弱隔离 |
| **NanoBot** | 轻量多通道代理 | 开发者、小团队 | 模块化通道适配器，强调 API 稳定性 |
| **Zeroclaw** | 配置驱动型助手 | DevOps、自动化爱好者 | Schema 版本化、Web onboarding、i18n |
| **PicoClaw** | 嵌入式/边缘部署 | 硬件开发者、隐私敏感用户 | 会话级沙箱、资源受限优化、NVIDIA/Azure 集成 |
| **IronClaw** | 可信执行环境 | 高安全场景用户 | Reborn 微内核、信任策略强制执行 |
| **Moltis** | 多模态交互中枢 | 终端用户、跨平台工作者 | 统一 UI、语音/文档/终端集成 |
| **CoPaw** | 记忆增强型代理 | 知识工作者、长期任务用户 | Markdown 记忆系统、火山引擎集成 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR 合并率 + 功能新增）：  
  **NanoBot（77%）、Moltis（82%）、PicoClaw（54%）** —— 聚焦用户体验与稳定性闭环。  
- **质量巩固阶段**（高 Issue 量 + 架构重构）：  
  **OpenClaw、IronClaw、Zeroclaw** —— 解决技术债，推进 schema 迁移与 Reborn 架构落地。  
- **静默维护阶段**：  
  **LobsterAI、TinyClaw 系列** —— 社区互动停滞，需警惕项目衰退风险。

---

## 7. 值得关注的趋势信号

1. **“生产可用性”成为核心指标**：  
   多个项目（OpenClaw #73323、PicoClaw #1757、IronClaw #2949）暴露 **长期运行退化** 问题，表明开发者不再满足于“能跑”，而是要求“7×24 可靠”。

2. **安全隔离从可选变为必需**：  
   PicoClaw 的“Agent Shield”、IronClaw 的“TrustDecision”机制、Zeroclaw 的沙箱策略争议，均指向 **默认安全（Secure by Default）** 将成为下一代智能体架构标配。

3. **多模态与边缘计算融合加速**：  
   PicoClaw 支持串口工具与音频输入，NanoClaw 集成 WhatsApp 媒体消息，反映 **AI 代理正从“聊天机器人”向“物理世界操作终端”演进**。

4. **迁移路径设计决定 adoption 速度**：  
   NanoClaw 的 V1→V2 自动化迁移、Zeroclaw 的 schema v3 批量迁移，表明 **平滑升级能力** 已成为用户选择平台的关键因素。

> **对开发者的建议**：优先选择具备明确隔离机制、活跃维护响应、并提供迁移工具链的项目；在自研系统中应内置资源监控、死锁检测与跨会话沙箱，以应对生产环境复杂性。

---  
**报告结束**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-05-02）

---

## 1. 今日速览

NanoBot 项目在过去24小时内保持高活跃度，共处理 **31条 PR 更新**（24条已合并/关闭，7条待合并）和 **10条 Issues 更新**（8条已关闭，2条新开）。社区贡献者集中修复了多个关键性 Bug，涵盖 API 流控、身份识别、内存管理、第三方平台集成等核心模块，显著提升了系统稳定性与多用户场景下的可用性。尽管无新版本发布，但底层架构优化（如 Hook 系统重构、工具调用防护机制）表明项目正迈向更健壮的长期演进路径。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于 Bug 修复与功能增强，为后续版本积累稳定性基础。

---

## 3. 项目进展

今日合并/关闭的 PR 在多个关键方向取得实质性进展：

- **API 流控修复**：[#3555](https://github.com/HKUDS/nanobot/pull/3555) 解决了 OpenAI 兼容接口在工具调用场景下 SSE 流过早关闭的问题，保障长对话连贯性。
- **用户身份识别增强**：[#3549](https://github.com/HKUDS/nanobot/pull/3549) 将 `sender_id` 注入 LLM 运行时上下文，使多用户群聊中实现个性化响应成为可能；[#3552](https://github.com/HKUDS/nanobot/pull/3552) 进一步在飞书通道中显式传递用户身份信息。
- **DeepSeek 推理支持优化**：[#3560](https://github.com/HKUDS/nanobot/pull/3560) 修正了 DeepSeek 模型推理模式检测逻辑，避免历史记录处理异常。
- **Anthropic 长请求容错**：[#3579](https://github.com/HKUDS/nanobot/pull/3579) 实现对 Anthropic SDK “Streaming required” 错误的自动降级重试，提升鲁棒性。
- **Matrix 通道稳定性**：[#3578](https://github.com/HKUDS/nanobot/pull/3578) 阻止因认证失败导致的无限重试循环，减少服务端 spam。
- **工具链健壮性**：[#3577](https://github.com/HKUDS/nanobot/pull/3577) 防止流式输出中泄露不完整思考标签；[#3528](https://github.com/HKUDS/nanobot/pull/3528) 清理 WebFetchTool 中的 Markdown 格式 URL，避免解析失败。

> 整体来看，项目在**多通道兼容性、API 稳定性、用户上下文感知**三大维度实现关键加固。

---

## 4. 社区热点

- **[#2072: Native Multi-Agent Routing 功能请求](https://github.com/HKUDS/nanobot/issues/2072)**（已关闭，8条评论）  
  用户希望原生支持类似 OpenClaw 的多智能体路由能力，避免手动部署多个网关实例。虽已关闭，但反映出对**复杂工作流编排**的强烈需求，可能推动未来架构升级。

- **[#3292: Session-Level Focus Tool 持久任务感知](https://github.com/HKUDS/nanobot/issues/3292)**（开放中，4条评论）  
  提出“跨中断任务锚定”机制，弥补当前 `my` 工具 scratchpad 的局限性。该需求直指 LLM 代理在**真实办公场景中的注意力管理短板**，具备较高产品价值。

- **[#3584: DeepSeek API 'reasoning_content' 错误](https://github.com/HKUDS/nanobot/issues/3584)**（开放中，0评论）  
  最新报告的问题，涉及 DeepSeek 模型升级后的 API 校验失败，维护者已识别根因并提供补丁，预计将快速修复。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| ⚠️ 高 | [#3551](https://github.com/HKUDS/nanobot/issues/3551) | OpenAI 兼容流接口在工具调用时提前终止 | ✅ 已修复 ([#3555](https://github.com/HKUDS/nanobot/pull/3555)) |
| ⚠️ 高 | [#3511](https://github.com/HKUDS/nanobot/issues/3511) | 群聊中无法识别用户身份 | ✅ 已修复 ([#3549](https://github.com/HKUDS/nanobot/pull/3549)) |
| ⚠️ 中 | [#3581](https://github.com/HKUDS/nanobot/issues/3581) | `estimate_prompt_tokens_chain` 中 `NameError` 崩溃 | ✅ 已修复 ([#3582](https://github.com/HKUDS/nanobot/pull/3582)) |
| ⚠️ 中 | [#1851](https://github.com/HKUDS/nanobot/issues/1851) | Matrix 认证错误导致服务端 spam | ✅ 已修复 ([#3578](https://github.com/HKUDS/nanobot/pull/3578)) |
| ⚠️ 中 | [#3571](https://github.com/HKUDS/nanobot/issues/3571) | ReadFileTool 跨会话缓存污染 | ✅ 已修复（隐含于相关 PR） |
| ⚠️ 低 | [#3553](https://github.com/HKUDS/nanobot/issues/3553) | Matrix 启动时重复读取旧消息 | ✅ 已修复 |

> 所有高/中危 Bug 均已闭环，体现团队高效的响应能力。

---

## 6. 功能请求与路线图信号

- **多智能体路由**（#2072）：虽无直接 PR，但结合 [#3580](https://github.com/HKUDS/nanobot/pull/3580)（工具调用防护）和 [#3561](https://github.com/HKUDS/nanobot/pull/3561)（子代理消息溯源），可视为向分布式代理架构铺垫。
- **会话级任务聚焦**（#3292）：尚未有对应 PR，但当前 `my` 工具增强（如内存持久化 [#2334](https://github.com/HKUDS/nanobot/pull/2334)）为其打下基础，**有望纳入 v0.2 路线图**。
- **模型预设配置**：[#3358](https://github.com/HKUDS/nanobot/pull/3358) 已提交，支持快速切换模型参数组合，**极可能成为下一版本亮点功能**。
- **Hook 插件系统**：[#3564](https://github.com/HKUDS/nanobot/pull/3564) 引入类型化事件钩子，为第三方扩展提供标准化入口，**标志生态开放化迈出关键一步**。

---

## 7. 用户反馈摘要

- **痛点**：
  - 多用户群聊中无法区分发送者（Discord/Feishu），导致个性化响应缺失（#3511）。
  - DeepSeek 模型升级后出现 API 校验错误，影响推理体验（#3584）。
  - 工具调用导致流式响应中断，破坏交互流畅性（#3551）。
- **满意点**：
  - NapCatQQ 通道支持图文群聊，突破官方 QQ 平台限制（#2337）。
  - 自动降级机制有效缓解 Anthropic 长请求报错（#2709 → #3579）。
- **使用场景**：
  - 家庭多成员共用 Discord 机器人、企业飞书群协作、DeepSeek 推理模型集成等真实场景驱动本次密集修复。

---

## 8. 待处理积压

- **[#1759: MCP 工具上下文懒加载与自动降级](https://github.com/HKUDS/nanobot/pull/1759)**（开放，2026-03-09 创建）  
  旨在降低工具上下文开销，提升大模型调用效率，**长期未合并且无评论**，建议维护者评估优先级。

- **[#3358: 模型预设配置](https://github.com/HKUDS/nanobot/pull/3358)**（开放，2026-04-21 创建）  
  功能完整且文档齐全，**仅缺最终 review**，建议尽快合并以响应用户对快速配置的需求。

- **[#3492: WebUI 安全加固](https://github.com/HKUDS/nanobot/pull/3492)**（开放，2026-04-28 创建）  
  涉及公网部署安全漏洞修复，**风险等级高**，建议优先处理。

> 维护者宜关注上述积压项，尤其是安全相关 PR，避免技术债累积。

---  
**报告生成时间：2026-05-02**  
数据来源：NanoBot GitHub 仓库（HKUDS/nanobot）

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-05-02）

---

## 1. 今日速览

Zeroclaw 项目在24小时内保持高活跃度，共处理 **50条 Issues**（新开/活跃37条，关闭13条）和 **50条 PRs**（待合并45条，已合并/关闭5条），并发布了一个重要补丁版本 **v0.7.4**。社区围绕配置迁移、多语言支持、Web 端 onboarding 和技能安全审计等核心模块展开密集讨论。整体开发节奏紧凑，技术债清理与功能演进并行推进，项目健康度良好。

---

## 2. 版本发布

### 🔖 v0.7.4 正式发布  
**链接**: [v0.7.4 Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.4)  
**核心更新内容**：
- ✅ **Matrix 协议重写**：采用 clean-room 实现，提升消息传递可靠性与扩展性；
- 🌐 **Mozilla Fluent i18n 国际化管道**：支持多语言文档与界面本地化；
- 🛠️ **CLI/TUI onboarding 流程重构**：优化首次安装用户体验；
- 📱 **恢复 WeChat iLink Bot 通道支持**：修复此前因协议变更导致的连接中断问题。

> ⚠️ **迁移注意**：此为 v0.7.x 工作空间基础上的首个补丁版本，建议所有用户升级以获取稳定性修复与新功能支持。无破坏性 API 变更，但建议检查自定义技能是否依赖旧版 Matrix 实现。

---

## 3. 项目进展

今日有 **5个 PR 被合并或关闭**，主要推进以下方向：

| PR | 类型 | 关键贡献 |
|----|------|--------|
| [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | 功能 | 实现 Web 端 onboarding 与 CLI 的 CRUD 接口对齐，支持浏览器内完成 provider 配置、模型选择等全流程 |
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | 功能 | 新增 `/api/cron/{id}/run` 接口，支持从 Web UI 手动触发定时任务（对应 Issue #5501） |
| [#6070](https://github.com/zeroclaw-labs/zeroclaw/pull/6070) | 体验优化 | 在模型选择下拉框中标识“免费”与“缺失”模型，提升 OpenRouter 用户决策效率 |
| [#5835](https://github.com/zeroclaw-labs/zeroclaw/pull/5835) | 安全/稳定性 | 修复 WebSocket 会话删除后 `cancel_tokens` 未清理导致的内存泄漏 |
| [#6073](https://github.com/zeroclaw-labs/zeroclaw/pull/6073) | Bug 修复 | 修复 Web UI 配置编辑器光标与输入位置错位问题 |

> 项目整体向 **v0.8.0 schema v3 迁移**迈出关键一步，多个配置系统 hardening 补丁落地。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥5）

| Issue | 主题 | 社区诉求分析 |
|------|------|-------------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | 新安装后 `default_model` 报错 | 用户反馈 LXC 容器部署时无法正确识别远程 Ollama 实例，暴露 **跨主机 provider 发现机制缺陷**，属 S1 级阻塞问题 |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | Agent 无法识别 `zeroclaw cron` 能力 | 反映 **工具自省机制不完善**，agent 未能动态感知已注册 cron 工具 |
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Shell 沙箱配置过于严格，阻碍 Python 技能运行 | 开发者（如 InvestorClaw 作者）指出当前策略 **误杀合法金融分析脚本**，需细化白名单规则 |
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | Multi-agent UX 设计 RFC | 核心团队已投票通过，即将进入文档化阶段，预示 **多智能体协作架构** 将成为下一阶段重点 |

> 社区强烈关注 **配置一致性**（#6051）、**技能安全边界**（#6132）与 **插件路径混乱**（#6254），反映用户对生产环境稳定性的高要求。

---

## 5. Bug 与稳定性

### 🚨 高优先级 Bug（P0/P1）

| Issue | 严重性 | 状态 | 关联 Fix PR |
|------|--------|------|------------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | S1（工作流阻塞） | OPEN | 无，需排查 provider 初始化逻辑 |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | P1 | OPEN | [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159)（已提交，待合并） |
| [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) | P0 | OPEN | 无，`install.sh` 未解压 Web 面板资产，影响 Docker 用户 |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | P1 | BLOCKED | 依赖 #6128 合并，涉及 SkillForge 自动生成 TOML 结构污染 |

### ⚠️ 中等级别问题
- [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244)：Dashboard Channels 标签页崩溃（v0.6.8），仍在修复中；
- [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254)：WASM 插件安装路径与运行时扫描路径不一致，导致插件“隐身”。

---

## 6. 功能请求与路线图信号

### 📌 高潜力新功能（已有 PR 或明确路线图）

| 功能 | 状态 | 关联 Issue/PR | 下一版本可能性 |
|------|------|---------------|----------------|
| Web Onboarding 完全体 | ✅ 已实现 | [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | v0.8.0 标配 |
| Schema v3 批量迁移 | 🔄 进行中 | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | v0.8.0 核心任务 |
| LM Studio 统一配置 | 💡 新提议 | [#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) | 高（解决多端配置割裂） |
| WhatsApp 通道支持 | ✅ 已提交 | [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) | 很可能进入 v0.7.5 |
| 技能审计范围文档化 | 📝 进行中 | [#5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956) | 提升开发者信任度 |

> 用户明显期待 **更灵活的通道集成** 与 **更透明的技能安全策略**。

---

## 7. 用户反馈摘要

### 💬 真实用户声音提炼

- **痛点**：
  - “新安装后连不上远程 Ollama，文档没说清楚怎么配 host！”（#6123）
  - “Web UI 编辑 config 时光标乱跳，根本没法用。”（#6073，已修复）
  - “插件装上了但 agent 看不到，浪费两小时 debug。”（#6254）

- **满意点**：
  - “v0.7.4 的 Fluent i18n 支持太棒了，终于能切中文了！”
  - “手动触发 cron 功能救了我，测试 prompt 再也不用等定时了。”（#5501）

- **使用场景**：
  - 金融量化分析（InvestorClaw）、跨容器部署、多通道消息分发（Telegram/WeChat/WhatsApp）、本地 LM Studio 集成。

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项（>7天无维护者互动）

| Issue/PR | 类型 | 积压原因 | 建议行动 |
|----------|------|--------|--------|
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Bug（高风险） | Shell 沙箱策略争议 | 需核心团队明确安全边界 |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | 功能（P2） | `.well-known` 技能安装 | 可分配给社区贡献者 |
| [#5530](https://github.com/zeroclaw-labs/zeroclaw/pull/5530) | Bug Fix | 子 agent 内存命名空间隔离 | 需作者回应 review 意见 |
| [#5303](https://github.com/zeroclaw-labs/zeroclaw/pull/5303) | Provider Fix | Bedrock API_KEY 覆盖问题 | 需 AWS 专家验证 |

> 建议维护者优先处理 **#5722** 与 **#6096**，二者均影响关键用户群体（开发者与运维）。

---  
**报告生成时间**: 2026-05-02  
**数据来源**: GitHub Zeroclaw 仓库公开数据

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-05-02）

---

## 1. 今日速览

PicoClaw 项目在 2026-05-01 至 2026-05-02 期间保持高活跃度，共处理 **24 条 PR 更新**（13 条已合并/关闭，11 条待合并）和 **11 条 Issues 更新**（10 条新开/活跃，1 条已关闭）。社区贡献者集中修复了 DeepSeek 推理内容解析、Telegram 表格渲染、OAuth 认证等关键问题，并推进了多用户隔离、安全加固等架构级增强。项目整体处于快速迭代与稳定性优化并行阶段，健康度良好。

---

## 2. 版本发布

✅ **Nightly Build v0.2.8-nightly.20260502.6e1fab80 已发布**  
此为自动化构建版本，基于 `main` 分支最新提交生成，包含近期所有安全加固与功能增强。  
⚠️ **注意**：该版本为开发预览版，可能存在不稳定行为，不建议用于生产环境。  
📌 完整变更日志：[v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

> 虽无正式稳定版发布，但 nightly 版本已集成多项关键修复（如 DeepSeek reasoning_content 支持、Telegram 表格兼容），建议开发者在测试环境中验证。

---

## 3. 项目进展

今日共 **13 条 PR 被合并或关闭**，主要聚焦于 **安全架构强化、多模态支持与核心协议修复**：

- 🔒 **安全隔离体系完成闭环**：通过 #2327、#2313、#2095 等 PR，实现了会话级工作空间隔离、技能白名单机制与跨会话数据防泄漏，标志着“Agent Shield”安全套件正式落地。
- 🌐 **新增 NVIDIA 与 Azure AI 提供商支持**（#2323）：扩展了企业级 LLM 接入能力，支持 Azure AI Foundry 和 NVIDIA 模型路由。
- ⚙️ **异步 /chat API 端点上线**（#2324）：为外部系统集成（如 Teams Bot、自定义前端）提供标准化 REST 接口。
- 🧠 **DeepSeek 推理模式兼容性修复**：#2740 修复流式响应中 `reasoning_content` 丢失问题；#2743 增强对第三方代理 DeepSeek 模型的识别能力。
- 📱 **Telegram 频道体验优化**：#2739 解决 Markdown 管道表格在 Telegram 中显示异常问题，提升消息可读性。

> 整体来看，项目在 **安全性、可扩展性与多平台兼容性** 方面取得显著进展，为 v0.3.0 正式版奠定基础。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#1757 — “每小时定时任务触发 channel error”
- **评论数：6** | **标签：bug, cron, channel**  
- **用户诉求**：在 Raspberry Pi Zero W 上使用 Telegram 频道时，周期性任务（每小时执行）频繁报错，怀疑与资源限制或通道状态管理有关。  
- **分析**：该问题涉及 **cron 调度器与通道生命周期协同**，可能暴露边缘设备上的内存/连接泄漏风险，需优先排查。  
🔗 [查看 Issue](https://github.com/sipeed/picoclaw/issues/1757)

### 💬 高关注度功能请求：#2376 — “禁用 Enter 键发送消息”
- **👍 1 赞同，4 条评论**  
- **场景**：Android 用户希望在输入框中按 Enter 换行而非直接发送，当前行为不符合移动端交互习惯。  
- **信号**：反映 **移动端 UX 设计短板**，已有开发者提议增加“发送按钮”选项，可能纳入下一轮 UI 优化。  
🔗 [查看 Issue](https://github.com/sipeed/picoclaw/issues/2376)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | #2738 图像识别失效（v0.2.8） | 升级后上传图片无法被识别，影响多模态功能 | ❌ 暂无 |
| ⚠️ 高 | #2742 Gateway 启动无通道 | v0.2.8 中 Telegram 通道未正确加载，导致通信中断 | ❌ 暂无 |
| ⚠️ 中 | #2744 Android 无法访问标签页数据 | Android 客户端数据隔离异常 | ❌ 暂无 |
| ✅ 已修复 | #1533 技能名称连字符转下划线导致“Tool not found” | 名称解析规则不一致 | ✅ 已关闭（社区确认修复） |

> 建议维护者优先调查 #2738 和 #2742，二者均影响核心功能且出现在最新 nightly 版本中，可能存在回归。

---

## 6. 功能请求与路线图信号

以下功能请求已获得社区关注，并有相关 PR 推进，**极可能纳入 v0.3.0 路线图**：

- 🛠️ **串口工具支持**（#2649）：补充 UART 通信能力，完善嵌入式开发工具链。
- 🎙️ **原生音频输入支持**（#2626）：已提交 PR，支持 Gemini 1.5 等模型的音频模态，增强多模态交互。
- 🔍 **Web 搜索工具默认启用 DuckDuckGo**（#2647）：提升开箱即用体验，减少配置门槛。
- 📄 **GitHub Copilot 集成**（#2652）：探索与代码助手生态对接，潜力大但尚未有实现。

> 其中 **音频输入** 和 **串口工具** 已有明确实现路径，预计将在下个里程碑中落地。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “在树莓派上跑定时任务总是断连，日志也没说清楚原因”（#1757）→ 资源受限设备稳定性不足。
  - “Android 上按回车就发消息，根本没法换行”（#2376）→ 移动端交互设计缺失。
  - “升级 v0.2.8 后图片全变‘无法识别’”（#2738）→ 版本兼容性风险。

- **满意点**：
  - “安全隔离做得越来越细，终于敢用在生产环境了”（#2313 评论）→ 对企业级部署信心提升。
  - “终于支持 Azure 和 NVIDIA 了，不用自己写适配器”（#2323 隐含反馈）→ 提供商生态扩展受认可。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者介入：

- ⏳ #2651 “如何在 Windows 上构建？”（2026-04-24 提出，3 条评论）  
  → 缺乏 Windows 构建文档，阻碍非 Linux 用户参与。
- ⏳ #2602 “OAuth 认证失败”（2026-04-20 提出，涉及 OpenAI/Antigravity）  
  → 影响主流提供商使用，需验证是否为配置或代码问题。
- ⏳ #2404 “支持流式 HTTP 请求配置”（2026-04-07 提出，1 赞同）  
  → 与 #2740 流式修复相关，可结合推进。

> 建议在下周发布前优先回应 #2651 和 #2602，降低新用户入门门槛。

---  
📊 **数据驱动结论**：PicoClaw 正处于从“功能快速迭代”向“企业级稳定与安全”转型的关键阶段。社区活跃度极高，但需警惕新版本引入的回归问题。维护者应加强 nightly 版本的质量门禁，并完善跨平台文档支持。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-05-02）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出**高活跃度**，共处理 **28 条 PR 更新**（16 条已合并/关闭，12 条待合并）和 **10 条 Issues 更新**（6 条新开，4 条已关闭）。项目核心聚焦于 **OpenCode 提供者的稳定性修复** 与 **V1→V2 迁移能力建设**，同时推进多通道集成（如 WhatsApp 媒体消息、WebChat 技能）。尽管无新版本发布，但多个高优先级 Bug 被快速响应并修复，体现出较强的工程响应能力。

---

## 2. 版本发布

**无新版本发布**。当前开发重心集中在底层架构优化与迁移路径完善，而非功能迭代发布。

---

## 3. 项目进展

今日共 **16 个 PR 被合并或关闭**，关键进展包括：

- ✅ **OpenCode 提供者关键修复**：  
  - 修复 `wrapPromptWithContext` 未解析 `@./...md` 包含指令的问题，确保 CLAUDE.md 片段正确注入 LLM 提示（[#2165](https://github.com/qwibitai/nanoclaw/pull/2165)、[#2153](https://github.com/qwibitai/nanoclaw/pull/2153)）  
  - 解决 `SIGKILL` 导致端口泄漏问题，改用进程组终止 + 可配置空闲超时（[#2152](https://github.com/qwibitai/nanoclaw/pull/2152)）  
  - 清理残留 `processing_ack` 行以防止重启死锁（[#2151](https://github.com/qwibitai/nanoclaw/pull/2151)）  

- ✅ **基础设施优化**：  
  - 预提交钩子从全局格式化切换为 `lint-staged`，提升开发效率（[#2171](https://github.com/qwibitai/nanoclaw/pull/2171)）  
  - 修复 macOS 文件系统大小写敏感导致的镜像 slug 不一致问题（[#2172](https://github.com/qwibitai/nanoclaw/issues/2172)，相关 PR 待跟进）  

- ✅ **新功能集成**：  
  - 新增 **Google Gemini 提供者支持**，扩展多模型后端能力（[#2136](https://github.com/qwibitai/nanoclaw/pull/2136)）  
  - 实现 **WhatsApp 双向媒体消息传输**（[#2170](https://github.com/qwibitai/nanoclaw/pull/2170)）  

> 项目整体向 **多模型兼容、高可用容器调度、平滑迁移路径** 迈出坚实步伐。

---

## 4. 社区热点

### 🔥 高关注度 Issue：#2150（已关闭）
> [OpenCode provider: wrapPromptWithContext sends literal @./...md lines](https://github.com/qwibitai/nanoclaw/issues/2150)  
**评论数：5** | **严重性：High**  
用户反馈 OpenCode 提供者未解析 CLAUDE.md 中的包含指令，导致代理“盲跑”。该问题被迅速定位并修复（见 PR #2165、#2153），反映社区对**上下文完整性**的高度敏感。

### 💬 活跃讨论 PR：#2178（Andy ops fixes）
> [Andy ops fixes: 10 issues (skills, Draft+Approve, briefings...)](https://github.com/qwibitai/nanoclaw/pull/2178)  
一次性修复 10 项运营问题（如 Maps 403、Twitter token 缺失、FB 自动审批失效等），体现维护者对**生产环境稳定性**的快速响应。虽无评论，但覆盖场景广泛，暗示企业用户对可靠性的强诉求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 修复 PR |
|--------|------|------|--------|
| 🔴 High | #2150: OpenCode 提示上下文丢失 | ✅ 已关闭 | #2165, #2153 |
| 🔴 High | #2148: SIGKILL 泄漏端口 4096 | ✅ 已关闭 | #2152 |
| 🔴 High | #2147: 残留 processing_ack 导致重启死锁 | ✅ 已关闭 | #2151 |
| 🟠 Medium | #2149: 硬编码 90s 超时影响本地模型 | ✅ 已关闭 | #2152（含可配置超时） |
| 🟡 Low | #2172: macOS 镜像 slug 大小写不一致 | 🟡 开放中 | — |

> 所有高优先级 Bug 均在 24 小时内闭环，**系统稳定性显著提升**。

---

## 6. 功能请求与路线图信号

- **V1 → V2 迁移自动化**：  
  Issue #2175 明确提出需保留 V1 的运营合约（权限、工具安全、诊断委托等），PR #1931 已实验性实现自动迁移流程，预计将成为 V2 正式发布的**核心前置条件**。

- **中断任务恢复机制**：  
  Issues #2173（B-01）与 #2174（B-02）提出“中断运行检测”与“重排队列”需求，指向**容错调度系统**建设，可能纳入下一阶段架构升级。

- **多通道上下文连续性**：  
  Issue #2176 指出 Gmail 新会话隔离破坏 SC 短时跟进，反映用户对**跨消息上下文保持**的强烈需求，或推动会话管理策略优化。

---

## 7. 用户反馈摘要

- **痛点**：  
  - OpenCode 提供者因未解析包含指令导致“代理无指令运行”（#2150）  
  - 本地模型因 90s 硬编码超时被误杀（#2149）  
  - macOS 开发环境因文件系统差异导致构建不一致（#2172）  

- **满意点**：  
  - 快速修复 WhatsApp 媒体消息支持（#2170）  
  - 自动化迁移工具减少手动配置负担（#1931）  
  - 运营问题批量修复提升生产可用性（#2178）  

> 用户普遍认可工程响应速度，但对**跨平台一致性**与**长时任务可靠性**仍有更高期待。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建日期 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | #2177 | Active-query push-mode 空结果后静默卡住 | 2026-05-01 | 🟡 开放 | 需复现并定位推送逻辑缺陷 |
| Issue | #2173 | B-01: 中断运行检测与可观测性 | 2026-05-01 | 🟡 开放 | 架构级需求，建议优先设计 |
| Issue | #2174 | B-02: 中断运行恢复与重排队列 | 2026-05-01 | 🟡 开放 | 依赖 B-01，需协同推进 |
| PR | #2069 | Skill/webchat v1 | 2026-04-28 | 🟡 开放（4 天未合） | 功能完整，建议 review 后合并 |
| PR | #1931 | V1→V2 迁移实验功能 | 2026-04-23 | 🟡 开放（9 天未合） | 关键路径，需加速验证 |

> 建议维护者优先处理 **B-01/B-02 中断恢复机制** 与 **WebChat 技能合并**，以增强系统鲁棒性与用户体验。

---  
**报告生成时间：2026-05-02**  
数据来源：NanoClaw GitHub 仓库公开活动日志

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-05-02）

---

## 1. 今日速览

IronClaw 项目在 Reborn 架构重构主线持续推进，社区活跃度处于高位：过去24小时新增/活跃 Issue 22 条、PR 更新达 50 条（含 19 条合并/关闭），核心团队聚焦于运行时服务组合、安全边界建设与垂直集成测试。尽管无新版本发布，但多个高风险的 Reborn 子模块（如 HTTP 出口、资源治理、审计日志）已完成关键 PR 合并，标志着架构迁移进入深水区。用户侧反馈集中在平台兼容性（Linux x86_64 安装失败）与 Docker 镜像缺失问题，亟待解决。

---

## 2. 版本发布

**无新版本发布**。当前开发重心仍集中在 `reborn-integration` 分支的架构重构，尚未触发正式版本迭代。

---

## 3. 项目进展

今日共 **19 个 PR 被合并或关闭**，重点推进以下方向：

- **Reborn 运行时服务组合完成关键闭环**：  
  - [`#3143`](https://github.com/nearai/ironclaw/issues/3143)（已关闭）：将内置义务处理器（`BuiltinObligationHandler`）接入生产级 HostRuntime 服务图，消除测试时代码手动接线依赖。  
  - [`#3146`](https://github.com/nearai/ironclaw/issues/3146)（已关闭）：在生产调度路径中前置 `TrustDecision` 评估，实现基于包身份/清单的信任策略强制执行。  
  - [`#3139`](https://github.com/nearai/ironclaw/issues/3139) / [`#3140`](https://github.com/nearai/ironclaw/issues/3140)（均已关闭）：分别完成网络策略与一次性密钥注入机制在运行时适配器中的落地，强化安全边界。

- **Bug 修复提升稳定性**：  
  - [`#3155`](https://github.com/nearai/ironclaw/pull/3155)（已合并）：修复任务创建时因 `mission_*` 工具不接受 `name` 参数导致的“5 consecutive code errors”问题（原 Issue [`#2583`](https://github.com/nearai/ironclaw/issues/2583)）。  
  - [`#3172`](https://github.com/nearai/ironclaw/pull/3172)（已合并）：升级 `cargo-dist` 至 0.31.0，修复命名空间标签（`ironclaw-v*`）下 Linux x86_64 安装器生成错误问题（关联 Issue [`#2818`](https://github.com/nearai/ironclaw/issues/2818)）。

> 整体评估：Reborn 架构核心控制平面已基本就位，下一步将转向数据平面（如事件存储、成本预算）与端到端验证。

---

## 4. 社区热点

### 🔥 最活跃 Issue：Reborn 架构交付策略跟踪 [`#2987`](https://github.com/nearai/ironclaw/issues/2987)（44 条评论）
该 Epic 持续主导讨论，聚焦如何分阶段、低风险地将 Reborn 架构落地，避免巨型 PR 阻塞审查。社区高度关注其子任务进展，包括：
- 垂直集成测试套件建设 [`#3067`](https://github.com/nearai/ironclaw/issues/3067)
- 共享 HTTP 出口机制 [`#3085`](https://github.com/nearai/ironclaw/issues/3085)
- 生产级 HostRuntime 服务组合 [`#3087`](https://github.com/nearai/ironclaw/issues/3087)

**诉求分析**：开发者强烈希望了解 Reborn 迁移路线图与风险控制措施，反映出对架构稳定性的高度敏感。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|--------|------|------|------|
| **高** | [`#2949`](https://github.com/nearai/ironclaw/issues/2949) | 官方安装脚本在 `x86_64-unknown-linux-gnu` 平台报错“无可用下载” | **部分修复**（[#3172](https://github.com/nearai/ironclaw/pull/3172) 已合并，待验证） |
| **高** | [`#2963`](https://github.com/nearai/ironclaw/issues/2963) | Docker Hub 镜像 `nearai/ironclaw:latest` 不存在，导致文档指引失效 | **未修复** |
| **中** | [`#3133`](https://github.com/nearai/ironclaw/issues/3133) | 邮件任务因 Gmail 认证失败中断，缺乏明确错误提示 | **调查中**（用户报告） |

> 注：[#2583](https://github.com/nearai/ironclaw/issues/2583) 已确认修复并合并。

---

## 6. 功能请求与路线图信号

- **ARM64 Docker 支持** [`#3168`](https://github.com/nearai/ironclaw/issues/3168)：用户明确请求为 Apple Silicon / ARM 服务器提供官方镜像。技术可行性高（Cranelift 已支持 aarch64），预计将纳入下一构建周期。
- **任务自动恢复机制** [`#3166`](https://github.com/nearai/ironclaw/issues/3166)：在 OAuth/审批门控解除后自动恢复暂停任务，属 [#3133](https://github.com/nearai/ironclaw/issues/3133) 后续需求，已有初步设计讨论。
- **CLI 增强工具**：包括快速备份 [`#3178`](https://github.com/nearai/ironclaw/pull/3178)、用量洞察 [`#3177`](https://github.com/nearai/ironclaw/pull/3177) 等 PR 显示产品正从核心引擎向用户体验层扩展。

---

## 7. 用户反馈摘要

- **痛点**：
  - 安装流程断裂：“按文档执行却找不到二进制文件”（[#2949](https://github.com/nearai/ironclaw/issues/2949)）
  - 容器化部署受阻：“Docker 镜像缺失让我们无法在 K8s 中测试”（[#2963](https://github.com/nearai/ironclaw/issues/2963)）
  - 错误信息模糊：“邮件发送失败只显示‘Status: None’”（[#3133](https://github.com/nearai/ironclaw/issues/3133)）

- **满意点**：
  - 对 Reborn 架构的模块化设计表示认可（[#2987](https://github.com/nearai/ironclaw/issues/2987) 评论区）
  - 赞赏 CLI 新增的备份与洞察功能（PR [#3178](https://github.com/nearai/ironclaw/pull/3178) / [#3177](https://github.com/nearai/ironclaw/pull/3177)）

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 说明 |
|--------|------|--------|------|
| [`#2818`](https://github.com/nearai/ironclaw/issues/2818) | Bug | 11 天 | Linux 安装器问题虽已有修复 PR，但需验证是否彻底解决 |
| [`#2963`](https://github.com/nearai/ironclaw/issues/2963) | Bug | 6 天 | Docker Hub 镜像缺失，影响容器化用户，无响应 |
| [`#3031`](https://github.com/nearai/ironclaw/issues/3031) | Epic | 4 天 | Reborn 产品面迁移路线图，需明确里程碑与兼容性承诺 |

> **建议**：优先解决 [#2963](https://github.com/nearai/ironclaw/issues/2963) 以维护文档可信度，并同步更新安装指南。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
架构重构进展稳健，社区响应及时，但基础设施（安装/镜像）短板需尽快补齐以降低用户入门门槛。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报**  
📅 日期：2026-05-02  
🔗 项目仓库：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

### 1. 今日速览  
过去24小时内，LobsterAI 项目整体活跃度**中等偏低**：无新 Issue 提交或关闭，亦无新版本发布，但存在 **6 个长期未合并的 Pull Request** 持续更新，表明核心开发团队仍在推进底层优化与关键修复。社区互动趋于沉寂，用户侧反馈通道未见新声，建议关注积压 PR 的合并节奏以维持项目健康度。

---

### 2. 版本发布  
❌ 无新版本发布。

---

### 3. 项目进展  
⚠️ **无 PR 被合并或关闭**。尽管有 6 个 PR 在过去24小时内被更新（均标记为 `[stale]`），但均处于“待合并”状态，未进入主干。这些 PR 涉及身份认证、技能管理、UI 性能、安装流程等关键模块，若能推进合并，将显著提升系统稳定性与用户体验。

---

### 4. 社区热点  
📉 **无活跃讨论的 Issues 或 PR**。所有 6 个待处理 PR 在过去24小时内均无新评论、点赞或代码审查互动，反映出当前社区参与度较低。值得注意的是，这些 PR 大多创建于 2026 年 3–4 月，已积压超过 30 天，存在“静默阻塞”风险。

> 示例：[#1186 性能优化 PR](https://github.com/netease-youdao/LobsterAI/pull/1186) 提出解决流式响应期间消息列表全量重渲染导致的卡顿问题，技术价值高，但缺乏维护者响应。

---

### 5. Bug 与稳定性  
🔧 以下关键 Bug 已有修复方案（PR 待合并），按影响程度排序：

| 严重程度 | 问题描述 | 修复 PR | 状态 |
|--------|--------|--------|------|
| ⚠️ 高 | Windows 卸载时应用未终止，导致用户误判进程残留 | [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190) | ✅ 有修复，待合并 |
| ⚠️ 高 | 多个并发请求触发重复 token 刷新，引发竞态条件 | [#822](https://github.com/netease-youdao/LobsterAI/pull/822) | ✅ 有修复，待合并 |
| ⚠️ 中 | 流式 AI 响应导致消息列表频繁重渲染，界面卡顿 | [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186) | ✅ 有修复，待合并 |
| ⚠️ 中 | 本地技能可重复上传，造成存储浪费与列表混乱 | [#825](https://github.com/netease-youdao/LobsterAI/pull/825) | ✅ 有修复，待合并 |

> 💡 建议优先合并 #1190 与 #822，二者直接影响系统可靠性与安全性。

---

### 6. 功能请求与路线图信号  
🚀 以下功能已通过 PR 实现，具备纳入下一版本的潜力：

- **技能管理增强**：为已导入技能添加“打开文件夹”按钮（[#1185](https://github.com/netease-youdao/LobsterAI/pull/1185)），提升开发者调试效率。
- **会话列表净化**：隐藏内部 OpenClaw 主代理会话，避免用户混淆（[#1181](https://github.com/netease-youdao/LobsterAI/pull/1181)）。
- **性能优化**：通过 `createSelector` 与 `React.memo` 优化流式响应渲染（[#1186](https://github.com/netease-youdao/LobsterAI/pull/1186)），显著降低 CPU 占用。

> ✅ 上述功能均已完成开发，仅需代码审查与合并即可发布。

---

### 7. 用户反馈摘要  
📭 **无新增用户反馈**。过去24小时无新 Issue 提交，表明当前版本在公开使用场景中未暴露紧急问题，但也可能反映用户参与渠道不畅或产品处于稳定使用期。

> 🔍 历史反馈线索（来自 PR 描述）：
> - 用户上传相同 `skill.zip` 多次导致混乱（#825）
> - 卸载后窗口仍运行引发困惑（#1190）
> - 流式对话时界面卡顿影响体验（#1186）

---

### 8. 待处理积压  
⏳ **6 个长期未合并 PR 需重点关注**，均已超过 30 天未处理，存在技术债累积风险：

| PR | 主题 | 创建日期 | 最后更新 | 链接 |
|----|------|--------|--------|------|
| #1181 | 隐藏内部会话 | 2026-04-01 | 2026-05-01 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1181) |
| #822 | Token 刷新竞态修复 | 2026-03-25 | 2026-05-01 | [查看](https://github.com/netease-youdao/LobsterAI/pull/822) |
| #825 | 技能重复上传检测 | 2026-03-25 | 2026-05-01 | [查看](https://github.com/netease-youdao/LobsterAI/pull/825) |
| #1185 | 技能文件夹快捷打开 | 2026-04-01 | 2026-05-01 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1185) |
| #1186 | 流式响应性能优化 | 2026-04-01 | 2026-05-01 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1186) |
| #1190 | Windows 卸载前终止进程 | 2026-04-01 | 2026-05-01 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1190) |

> 🛎️ **建议行动**：维护团队应尽快安排代码审查，优先处理 #822（安全）、#1190（稳定性）、#1186（性能）等高价值修复。

---

**总结**：LobsterAI 当前处于“静默开发期”，核心功能稳定但社区互动不足。积压的 6 个高质量 PR 若能及时合并，将显著提升产品健壮性与用户体验。建议加强维护响应机制，避免技术债进一步累积。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-05-02）

---

## 1. 今日速览

过去24小时内，Moltis 项目保持高活跃度，共处理 **6条 Issues**（5条已关闭，1条新开）和 **11条 Pull Requests**（9条已合并/关闭，2条待合并）。社区贡献者集中修复了多个关键 Bug，涵盖 Telegram、Discord、终端及 UI 布局等核心模块，同时推进了远程沙箱、电话支持等新功能开发。整体项目健康度良好，响应迅速，无新版本发布。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共 **9个 PR 被合并或关闭**，显著提升了系统稳定性与功能完整性：

- **#954**：升级 `teloxide` 至 0.17，彻底修复 Telegram 发送文档时因 `ThreadId` 序列化未实现导致的 panic 问题（[链接](https://github.com/moltis-org/moltis/pull/954)）。
- **#950**：修复 Discord Slash 命令参数丢失问题，支持 `/mode`、`/model` 等带参指令，并优化命令选项语义化展示（[链接](https://github.com/moltis-org/moltis/pull/950)）。
- **#952**：修复聊天界面水平溢出导致的滚动条异常，提升 Web UI 响应式体验（[链接](https://github.com/moltis-org/moltis/pull/952)）。
- **#953**：为聊天自动滚动功能添加 6 项端到端回归测试，防止 #946 类问题重现（[链接](https://github.com/moltis-org/moltis/pull/953)）。
- **#951**：新增 `moltis-portable` 模块，支持配置、数据库与会话的完整导入/导出，增强部署可移植性（[链接](https://github.com/moltis-org/moltis/pull/951)）。
- **#944**：集成 OpenCode Zen 多协议 AI 提供商，统一访问 GPT、Claude、Gemini 等模型（[链接](https://github.com/moltis-org/moltis/pull/944)）。
- **#943**：根据配置动态隐藏语音按钮，提升 UI 一致性（[链接](https://github.com/moltis-org/moltis/pull/943)）。
- **#955**：修复终端窗口创建时的“window does not exist”误报错误（[链接](https://github.com/moltis-org/moltis/pull/955)）。
- **#339**：完成繁体中文（zh-TW）本地化支持，覆盖 macOS 与 Web 端（[链接](https://github.com/moltis-org/moltis/pull/339)）。

> 项目在跨平台兼容性、第三方集成稳定性及用户体验方面取得实质性进展。

---

## 4. 社区热点

- **#947 [Telegram 文档上传崩溃]**：虽仅1条评论，但触发紧急修复（#954），反映生产环境中关键通信渠道的稳定性风险（[链接](https://github.com/moltis-org/moltis/issues/947)）。
- **#946 [聊天不自动滚动]**：获1个点赞，用户明确表达交互体验痛点，已配套修复与测试覆盖（[链接](https://github.com/moltis-org/moltis/issues/946)）。
- **#949 [子代理 provider 故障转移]**：唯一未关闭 Issue，提出子代理缺乏容错机制的问题，可能影响高可用场景下的可靠性（[链接](https://github.com/moltis-org/moltis/issues/949)）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 修复 PR |
|--------|------|------|--------|
| 高 | Telegram `send_document` 导致 panic（#947） | 已修复 | #954 |
| 中 | Discord Slash 命令忽略参数（#948） | 已修复 | #950 |
| 中 | 终端 tmux 报错“window does not exist”（#937） | 已修复 | #955 |
| 低 | 聊天布局过宽导致水平溢出（#945） | 已修复 | #952 |
| 低 | 聊天未自动滚动（#946） | 已修复 | #953（含测试） |

> 所有报告 Bug 均在24小时内闭环，体现高效维护能力。

---

## 6. 功能请求与路线图信号

- **#949 子代理 provider 故障转移**：用户明确提出对多模型冗余调用的需求，尤其在预设代理（如 `scout`、`analyst`）场景下。该需求尚未有对应 PR，但鉴于项目已支持多 provider（如 Zen），**极有可能纳入下一版本优先级开发**。
- **远程沙箱支持（#942）** 与 **电话支持（#920）**：两项长期 PR 仍在开放中，分别面向云原生部署与语音交互扩展，代表项目向多环境、多模态方向演进的战略信号。

---

## 7. 用户反馈摘要

- **痛点**：Telegram 文档上传崩溃严重影响工作流；Discord 命令无响应降低操作效率；聊天界面滚动异常破坏沉浸感。
- **满意点**：繁体中文支持获社区认可；配置驱动的 UI 显隐逻辑（如语音按钮）提升定制化体验。
- **使用场景**：用户依赖 Moltis 作为多平台 AI 代理中枢，涉及文件传输、语音交互、终端操作及跨模型调度，对稳定性与一致性要求高。

---

## 8. 待处理积压

- **#942 feat(sandbox): remote & multi-backend sandbox support**（开放中，2026-04-30 创建）：需评估 Vercel/Daytona/Firecracker 后端集成复杂度，建议分配资源推进以支持无 Docker 环境部署（[链接](https://github.com/moltis-org/moltis/pull/942)）。
- **#920 feat(telephony): add phone call support via Twilio**（开放中，2026-04-29 创建）：电话通道为重要扩展方向，建议明确 API 设计与安全边界后合并（[链接](https://github.com/moltis-org/moltis/pull/920)）。
- **#949 provider failover for sub-agents**：虽为新 Issue，但涉及核心代理架构健壮性，建议纳入近期技术讨论议程（[链接](https://github.com/moltis-org/moltis/issues/949)）。

--- 

**总结**：Moltis 在24小时内展现出极强的工程响应力与社区协作效率，关键 Bug 快速修复，功能持续扩展。建议关注长期积压项的技术债务与路线图对齐。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目动态日报（2026-05-02）**

---

### 1. 今日速览  
过去24小时内，CoPaw 社区活跃度保持稳定，共产生 **7条新 Issue** 和 **4条 PR 更新**，无新版本发布。开发重点集中在功能增强与多平台兼容性优化，社区对 DeepSeek V4 支持、记忆系统改进及通道性能问题关注度较高。整体项目处于持续迭代阶段，核心功能演进与用户体验优化并行推进。

---

### 2. 版本发布  
*无新版本发布。*

---

### 3. 项目进展  
今日 **1个 PR 被合并/关闭**，**3个 PR 处于待合并状态**，标志着部分功能已进入集成阶段：

- **#3989 [CLOSED]**：由首次贡献者 @suisrc 提交的“add knowledge”功能已关闭（可能为测试性提交或内部调整），虽未明确说明内容，但体现了社区对新知识注入机制的探索。  
  🔗 [PR #3989](https://github.com/agentscope-ai/QwenPaw/pull/3989)

- **#3994 [OPEN]**：新增火山引擎（VolcEngine）及其 Coding Plan Provider 支持，扩展了模型服务生态，为国产云厂商集成迈出关键一步。  
  🔗 [PR #3994](https://github.com/agentscope-ai/QwenPaw/pull/3994)

- **#3831 [OPEN]**：添加向量模型连接测试功能，有助于提升多模态与检索增强场景下的稳定性验证能力。  
  🔗 [PR #3831](https://github.com/agentscope-ai/QwenPaw/pull/3831)

- **#3525 [OPEN]**：针对 Discord 通道的定时任务输出隔离问题，提出“在代理调度前创建线程”的解决方案，改善消息混乱问题，目前仍在评审中。  
  🔗 [PR #3525](https://github.com/agentscope-ai/QwenPaw/pull/3525)

> 项目整体在**多通道适配**与**模型服务扩展**方向取得实质性进展。

---

### 4. 社区热点  
以下 Issues 引发较高关注，反映用户核心诉求：

- **#3996**：用户 @alvenstar 指出 DeepSeek V4 模型仅支持二元思维开关（on/off），缺失 `xhigh`/`max` 等精细控制级别，限制了高级推理场景的使用体验。  
  🔗 [Issue #3996](https://github.com/agentscope-ai/QwenPaw/issues/3996)  
  → *诉求：提升对先进模型 API 的完整支持，避免功能阉割。*

- **#3990**：@robin-human 反馈“通道响应速度太慢”，直接影响实时交互体验，可能涉及网络、缓存或通道实现层优化。  
  🔗 [Issue #3990](https://github.com/agentscope-ai/QwenPaw/issues/3990)  
  → *诉求：性能调优，尤其针对高延迟通道（如企业 IM）。*

- **#3995**：@1105623876 提出记忆系统缺乏生命周期管理与冲突检测机制，长期使用后文件臃肿、写入混乱，亟需自动化治理策略。  
  🔗 [Issue #3995](https://github.com/agentscope-ai/QwenPaw/issues/3995)  
  → *诉求：构建可持续、可靠的长期记忆架构。*

---

### 5. Bug 与稳定性  
今日报告 **2个关键 Bug**，均影响核心功能可用性：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ 高 | [#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992) | 多轮对话后代理停止响应，疑似状态机或上下文管理异常 | ❌ 无 |
| ⚠️ 中 | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | Windows 打包时 `conda-pack <=0.7.1` 与 `pip install qwenpaw[full]` 冲突，导致构建失败 | ❌ 无 |

> 建议优先排查 #3992，因其直接影响用户核心对话流程。

---

### 6. 功能请求与路线图信号  
结合 PR 与 Issue，以下功能有望纳入近期版本：

- ✅ **火山引擎 Provider 支持**（#3994）：已由 @Nioolek 实现，预计下一版本集成。
- 🔄 **OpenAI Responses API 与原生工具调用支持**（#3993）：@BLUE0818 提出，契合 OpenAI 最新标准，技术价值高，可能被优先评估。
- 📌 **记忆系统增强**（#3995）：包括自动归档、冲突检测、语义检索优化，属长期体验关键项，需设计专项方案。
- ⚙️ **DeepSeek V4 思维级别细粒度控制**（#3996）：若 DeepSeek 为战略模型，此需求将快速提上日程。

---

### 7. 用户反馈摘要  
从 Issue 评论提炼真实用户声音：

- **痛点**：
  - Ollama 通道无法携带对话历史（#3991），导致本地模型会话“失忆”，与在线 API 行为不一致。
  - Windows 打包流程脆弱，依赖冲突且错误信息不透明（#3988），阻碍部署。
  - 多轮对话中断（#3992）严重影响自动化代理可靠性。

- **满意点**：
  - 当前记忆系统基于 Markdown 文件的设计被认可为“简洁可靠”（#3995）。
  - 对 Discord 线程隔离（#3525）等细节优化表示期待。

- **使用场景**：
  - 企业 IM 集成（钉钉、飞书、Discord）用于日报推送与任务调度。
  - 本地 Ollama 模型部署用于隐私敏感场景。
  - 长期记忆用于个人知识管理与复盘。

---

### 8. 待处理积压  
以下 Issue 已存在较长时间，建议维护者关注：

- **#3525 [OPEN] feat(cron): create Discord thread before agent dispatch**  
  创建时间：2026-04-17，距今已超15天，涉及消息隔离这一高频使用场景，应尽快评审或反馈。  
  🔗 [PR #3525](https://github.com/agentscope-ai/QwenPaw/pull/3525)

> 建议建立 PR 响应 SLA，避免贡献者流失。

---

**总结**：CoPaw 正处于功能扩展与稳定性并重的关键阶段。社区对模型兼容性、通道性能与记忆系统有强烈改进期待。建议下一周期聚焦 **Bug 修复（#3992、#3988）** 与 **DeepSeek/OpenAI 新 API 适配**，同时推进火山引擎等云厂商集成，以增强生态竞争力。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*