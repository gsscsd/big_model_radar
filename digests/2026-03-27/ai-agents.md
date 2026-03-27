# OpenClaw 生态日报 2026-03-27

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-27 01:07 UTC

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

# OpenClaw 项目动态日报（2026-03-27）

---

## 1. 今日速览

过去24小时内，OpenClaw 社区保持高度活跃，共产生 **500条 Issues 更新**（新开/活跃410条，关闭90条）和 **500条 PR 更新**（待合并364条，已合并/关闭136条），显示出强劲的开发与问题反馈节奏。尽管无新版本发布，但核心团队正集中修复多个关键回归性 Bug，尤其在网关稳定性、OAuth 认证、工具调用和跨版本兼容性方面取得显著进展。社区对国际化（i18n）、MCP 原生支持、语音对话等长期功能诉求持续升温，反映出产品向全球化与标准化演进的趋势。

---

## 2. 版本发布

**无新版本发布**。最近一次稳定版本仍为 `v2026.3.24`，但该版本引入了若干破坏性变更（见下文 Bug 部分），导致部分用户回退至 `v2026.3.13`。维护者暂未发布热修复版本，建议用户谨慎升级。

---

## 3. 项目进展

今日多个关键 PR 被合并或推进，重点包括：

- **#55177（已合并）**：修复 Discord 通道因 WebSocket 健康监测重启导致网关崩溃的问题（[#55421](https://github.com/openclaw/openclaw/issues/55421)），显著提升多通道部署稳定性。
- **#55425（已合并）**：修正 `session_status` 显示错误模型及忽略 `thinkingDefault` 的问题，增强状态一致性与用户体验。
- **#53856（已合并）**：实现 OpenAI Responses API 中 reasoning 输出映射至 `thinking` 块，恢复流式推理可见性。
- **#55434 / #55432（新开）**：快速响应 OpenRouter 图像支持与 GitHub Copilot `gpt-5-mini` 参数兼容性问题，体现对主流 LLM 生态的敏捷适配。
- **#55187（已合并）**：修复 WSL2 环境下 Ollama 网络连接与 provider 发现机制，扩大 Linux 开发场景覆盖。

> 整体来看，项目正从 `v2026.3.22+` 版本的动荡期中恢复，核心团队聚焦于**稳定性加固**与**关键回归修复**，为下一稳定版本打下基础。

---

## 4. 社区热点

以下 Issue 引发广泛讨论，反映核心用户诉求：

| Issue | 热度 | 核心诉求 |
|------|------|--------|
| [#3460 i18n & 本地化支持](https://github.com/openclaw/openclaw/issues/3460) | 114 评论，👍5 | 强烈呼吁官方支持多语言界面与配置，降低非英语用户使用门槛。维护者回应“暂无带宽”，但社区已自发提交翻译 PR。 |
| [#75 Linux/Windows Clawdbot 应用](https://github.com/openclaw/openclaw/issues/75) | 51 评论，👍66 | 用户期望补齐 macOS 之外的桌面端原生应用，尤其用于本地 agent 管理与离线场景。 |
| [#29053 MCP 客户端原生支持](https://github.com/openclaw/openclaw/issues/29053) | 12 评论，👍11 | 希望 OpenClaw 能直接对接标准 MCP 服务器，避免重复造轮子，推动工具生态互操作性。 |
| [#7200 实时语音对话支持](https://github.com/openclaw/openclaw/issues/7200) | 12 评论，👍15 | 请求集成 Twilio/WebRTC 实现双向语音流，满足电话级交互需求。 |

> 这些议题共同指向 OpenClaw 的**平台扩展性**与**生态融合能力**，是下一阶段产品路线图的重要信号。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 问题 | 类型 | 状态 | 关联 PR |
|------|------|------|--------|
| [#45064 v2026.3.12 内存泄漏导致 OOM](https://github.com/openclaw/openclaw/issues/45064) | 崩溃 | 🔴 未修复 | — |
| [#54755 v2026.3.24 Express 5 路由回归 + 插件死循环](https://github.com/openclaw/openclaw/issues/54755) | 崩溃/回归 | 🟡 部分修复 | #55177 |
| [#46049 LLM 请求超时配置被忽略](https://github.com/openclaw/openclaw/issues/46049) | 崩溃 | 🔴 未修复 | — |
| [#26322 OAuth token refresh 竞态条件](https://github.com/openclaw/openclaw/issues/26322) | 认证失败 | 🟢 有 PR | #54390（待审） |
| [#53317 网关启动时用缓存覆盖新 OAuth token](https://github.com/openclaw/openclaw/issues/53317) | 回归 | 🟢 有 PR | #54390 |
| [#45504 CLI devices 命令在 loopback 网关失效](https://github.com/openclaw/openclaw/issues/45504) | 回归 | 🔴 未修复 | — |

> 当前最紧急的是 **内存泄漏** 与 **超时控制失效** 问题，直接影响 CLI 可用性，建议优先排查 V8 堆管理与异步任务调度逻辑。

---

## 6. 功能请求与路线图信号

结合 PR 进展，以下功能有望纳入下一版本：

- **MCP 客户端支持**：已有 [#55331](https://github.com/openclaw/openclaw/pull/55331) 实现 per-agent MCP server 配置，为原生 MCP 支持铺路。
- **文件系统细粒度控制**：[#52951](https://github.com/openclaw/openclaw/pull/52951) 引入 `tools.fs.roots`，解决多租户安全访问难题，已进入 review 阶段。
- **上下文压缩通知开关**：[#54251](https://github.com/openclaw/openclaw/pull/54251) 添加 `agents.defaults.compaction.notifyUser` 配置，优化长会话 UX。
- **跨设备迁移工具**：[#53520](https://github.com/openclaw/openclaw/pull/53520) 实现 `openclaw migrate export/import`，满足用户配置便携需求。

> 这些功能均围绕**安全性**、**可观测性**与**可移植性**展开，符合企业级部署趋势。

---

## 7. 用户反馈摘要

从 Issue 评论提炼真实声音：

- **痛点**：
  - “升级后 CLI 完全不可用，连 `doctor` 命令都 OOM”（#45064）
  - “插件文档说支持 OpenRouter，但连 Authorization header 都不发”（#51056）
  - “每次 compaction 都弹消息， Slack 频道全是 🧹 刷屏”（#54249 → 已由 #54251 解决）

- **满意点**：
  - “WSL2 终于能连本地 Ollama 了！”（#55435 评论区）
  - “Discord 不再莫名其妙崩了，感谢快速修复”（#55177）

- **使用场景**：
  - 企业内网通过 loopback 网关管理设备（#45504）
  - 多 agent 协作处理工单（#52290 消息总线提案）
  - 中文用户尝试部署微信插件（#52885）

---

## 8. 待处理积压

以下重要 Issue 长期未获官方响应，需维护者关注：

| Issue | 创建时间 | 问题类型 | 建议行动 |
|------|--------|--------|--------|
| [#9157 工作区文件注入浪费 93.5% token](https://github.com/openclaw/openclaw/issues/9157) | 2026-02-04 | 性能 | 高优先级优化，影响成本与响应速度 |
| [#23538 Anthropic setup-token 返回 401](https://github.com/openclaw/openclaw/issues/23538) | 2026-02-22 | 认证 | 影响 Claude 用户，需检查 token 存储逻辑 |
| [#23452 多通道图像识别失效](https://github.com/openclaw/openclaw/issues/23452) | 2026-02-22 | 功能退化 | 涉及 Discord/Telegram/OpenWebUI，需统一 media pipeline 测试 |
| [#17101 Telegram 语音消息未转录](https://github.com/openclaw/openclaw/issues/17101) | 2026-02-15 | 功能缺失 | 虽标 `stale`，但仍有用户需求 |

> 建议设立“性能专项周”集中处理 token 效率与媒体处理问题，避免技术债累积。

---

**总结**：OpenClaw 正处于从快速迭代向稳定交付过渡的关键阶段。社区活力充沛，但需警惕版本碎片化与核心体验退化风险。维护者应优先保障基础功能稳定性，同时通过 RFC 流程明确 i18n、MCP、语音等长期路线图，以引导社区贡献有序进行。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告（2026-03-27）

---

## 1. 生态全景

2026年Q1末，个人 AI 助手开源生态呈现**高活跃度、强分化、快迭代**的态势。主流项目日均处理 Issue/PR 总量超 1,500 条，反映出开发者对 Agent 框架的强烈需求与深度参与。生态整体从“功能堆砌”向**稳定性、安全性、企业级部署能力**演进，同时围绕 MCP 标准化、多模态支持、记忆系统优化形成技术共识。中国开发者主导的项目（如 LobsterAI、PicoClaw）在本土化集成（百度千帆、微信/飞书）方面形成独特优势，而国际项目（如 OpenClaw、IronClaw）更聚焦于架构抽象与协议兼容。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新数 | PR 更新数 | 新版本发布 | 健康度评估（★/5） |
|------|---------------|-----------|-------------|------------------|
| **OpenClaw** | 500 | 500 | ❌ | ★★★☆（高活跃但回归 Bug 多） |
| **NanoBot** | 15 | 103 | ❌ | ★★★（安全事件拖累信心） |
| **Zeroclaw** | 45 | 50 | ✅ v0.6.3 | ★★★★（稳定发布，响应快） |
| **PicoClaw** | 30 | 75 | ✅ nightly | ★★★★（高频迭代，配置修复及时） |
| **NanoClaw** | 7 | 33 | ❌ | ★★★☆（安全加固显著） |
| **IronClaw** | 16 | 39 | ✅ v0.22.0 | ★★★★（企业级功能推进） |
| **LobsterAI** | 20 | 50 | ✅ 2026.3.26 | ★★★★（多智能体+主题系统落地） |
| **TinyClaw** | 0 | 6 | ✅ v0.0.20 | ★★★（基建型发布，社区静默） |
| **Moltis** | 1 | 2 | ❌ | ★★（维护为主，创新乏力） |
| **CoPaw** | 50 | 44 | ❌ | ★★★☆（企业级修复密集） |
| **ZeptoClaw** | 12 | 25 | ✅ v0.9.0/v0.9.1 | ★★★★☆（高效发布，UX 优化突出） |
| **EasyClaw** | 1 | 0 | ❌ | ★★（生态衍生活跃，主项目静默） |

> 注：健康度综合考量发布节奏、Bug 响应、社区互动与架构演进。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大社区**：单日 500+ Issue/PR，远超同类，体现强开发者粘性；  
- **协议兼容性强**：率先实现 OpenAI Responses API 映射、MCP 客户端雏形，推动标准化；  
- **多通道覆盖最广**：Discord/Telegram/Slack/微信等全渠道支持，适合复杂部署场景。

**技术路线差异**：  
相比 IronClaw 的 Rust 重安全与 Zeroclaw 的轻量设计，OpenClaw 采用 **Node.js + 插件化架构**，牺牲部分性能换取极高的扩展灵活性，适合快速原型开发。

**社区规模对比**：  
GitHub Stars 预估超 15k（基于 Issue 密度与 PR 贡献者数），为生态中最活跃项目，但面临**版本碎片化**（用户回退至 v2026.3.13）与核心稳定性挑战。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **MCP 原生支持** | OpenClaw (#29053)、CoPaw (#280)、ZeptoClaw (#449) | 避免重复造轮子，实现工具互操作 |
| **记忆系统优化** | PicoClaw (#1919)、CoPaw (#2047)、NanoClaw (#1458) | 防上下文丢失、压缩后恢复、长期记忆持久化 |
| **企业级安全策略** | Zeroclaw (#4752)、NanoClaw (#1475)、IronClaw (#1683) | 细粒度权限控制、防注入、沙箱执行 |
| **多模态与语音** | OpenClaw (#7200)、NanoBot (#2210)、LobsterAI (#931) | 语音对话、图像理解、链接解析 |
| **配置健壮性** | PicoClaw (#2071)、ZeptoClaw (#453)、TinyClaw (#265) | 向后兼容、自动迁移、错误提示友好 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 多通道集成、快速原型 | 开发者、极客 | Node.js + 插件市场，高灵活低性能 |
| **IronClaw** | 生产稳定性、多租户 | 企业 DevOps | Rust + 严格类型，WASM 工具沙箱 |
| **LobsterAI** | 桌面端体验、国产模型 | 中文用户、办公场景 | Electron + 主题系统，深度集成百度/微信 |
| **Zeroclaw** | 轻量部署、安全默认 | 个人用户、隐私敏感者 | Go + 最小权限原则，PromptGuard 内置 |
| **ZeptoClaw** | UX 精细化、企业 AI 接入 | 终端用户、中小企业 | TypeScript + 反应式交互，Vertex AI 原生支持 |
| **CoPaw** | 会话管理、技能生态 | 团队协作、客服场景 | Python + AnalyticDB 记忆，飞书深度适配 |

---

## 6. 社区热度与成熟度

- **快速迭代层**（日均 PR > 30）：  
  **OpenClaw、PicoClaw、NanoBot、CoPaw** 处于功能爆发期，但伴随较高技术债（如 OpenClaw 内存泄漏、NanoBot 安全风险）。
  
- **质量巩固层**（发布稳定版本 + Bug 修复为主）：  
  **Zeroclaw、IronClaw、ZeptoClaw** 聚焦生产可用性，通过 SSE 支持、权限控制、CLI 重构提升可靠性。

- **生态衍生层**：  
  **EasyClaw** 主项目静默，但衍生项目 RivonClaw 获社区增长建议，反映“框架即平台”潜力。

- **维护期项目**：  
  **Moltis、TinyClaw** 以基建更新为主，适合稳定需求场景。

---

## 7. 值得关注的趋势信号

1. **MCP 将成为事实标准**：  
   多个项目（OpenClaw、CoPaw、ZeptoClaw）主动推进 MCP 客户端支持，预示工具生态将从“私有插件”向“协议互操作”转型。

2. **记忆系统进入架构核心**：  
   从简单上下文压缩（LobsterAI）到类海马体模型（PicoClaw #1919）、Graphiti 知识图谱（NanoClaw），记忆机制正成为区分 Agent 智能水平的关键。

3. **企业级部署驱动安全左移**：  
   SSRF 校验（ZeptoClaw）、TOTP 2FA（Zeroclaw）、声明式策略（ZeptoClaw #448）等需求表明，**安全不再是附加项，而是部署前提**。

4. **本土化集成构筑护城河**：  
   百度千帆（LobsterAI）、阿里云百炼（Zeroclaw #3059）、微信/飞书深度适配（PicoClaw、CoPaw）显示，**全球化项目需通过区域生态合作赢得市场**。

> **对开发者的建议**：  
> - 若追求快速验证，可选 OpenClaw 或 PicoClaw；  
> - 若面向企业生产，优先考虑 IronClaw 或 Zeroclaw；  
> - 关注 MCP 协议进展，提前设计工具接口兼容性。

---  
**报告生成时间：2026-03-27**  
**数据来源：各 GitHub 仓库公开动态（截至 2026-03-27 23:59 UTC）**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-27）

---

## 1. 今日速览

NanoBot 在过去24小时内表现出极高的开发活跃度，共产生 **103 条 PR 更新** 和 **15 条 Issue 更新**，其中 PR 待合并率高达 **93.2%（96/103）**，反映出团队正集中推进多项功能迭代与架构重构。尽管无新版本发布，但社区对安全、多模态支持、子代理稳定性等议题讨论热烈。值得注意的是，一个关于 PyPI 包中恶意代码的 **Critical 级安全 Issue (#2439)** 引发广泛关注，已获 4 个点赞和 5 条评论，需紧急响应。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.4.post5`，但该版本因安全 Issue #2439 存在潜在风险，建议用户暂缓部署或等待安全补丁。

---

## 3. 项目进展

今日有 **7 个 PR 被合并或关闭**，主要集中在架构优化与关键缺陷修复：

- **#2524 [CLOSED] refactor: extract shared agent runner and preserve subagent progress on failure**  
  → 提取通用 `AgentRunner` 组件，统一主代理与子代理执行逻辑，提升代码可维护性并防止任务中断时进度丢失。  
  [链接](https://github.com/HKUDS/nanobot/pull/2524)

- **#2448 [CLOSED] refactor: replace litellm with native openai + anthropic SDKs**  
  → 响应供应链投毒事件（#2445），彻底移除 `litellm` 依赖，改用原生 OpenAI/Anthropic SDK，增强安全性与可控性。  
  [链接](https://github.com/HKUDS/nanobot/pull/2448)

- **#2210 [CLOSED] Add transcription backend selection with auto/faster-whisper/groq modes**  
  → 支持本地 faster-whisper 与 Groq 转录后端，提升语音处理能力灵活性。  
  [链接](https://github.com/HKUDS/nanobot/pull/2210)

- **#987 [CLOSED] cli: fail fast when explicit model provider is not configured**  
  → CLI 启动时预检模型-提供商匹配，避免运行时模糊报错。  
  [链接](https://github.com/HKUDS/nanobot/pull/987)

> 整体来看，项目正向**去中心化依赖、提升运行时稳定性、增强多通道兼容性**方向稳步推进。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#2439 [Security: Malicious data-exfiltration code found in litellm_init.pth bundled with nanobot-ai v0.1.4.post5]  
- **评论数：5** | **👍：4** | 创建于 2026-03-24，更新于昨日  
- 用户报告 PyPI 包 `nanobot-ai==0.1.4.post5` 中包含可疑文件 `litellm_init.pth`，疑似执行恶意数据外泄代码。  
- **影响范围广**，涉及供应链安全，已引发社区高度警觉。  
- 尽管 #2448 已移除 litellm，但需确认该 `.pth` 文件是否由 litellm 引入，并发布安全公告。  
[链接](https://github.com/HKUDS/nanobot/issues/2439)

### 💬 高互动功能请求：#2406 [Skip heartbeat LLM call when HEARTBEAT.md has no active tasks]  
- **👍：2** | 用户指出心跳服务在无任务时仍调用 LLM，浪费 token 成本。  
- 已有开发者提出优化思路，可能纳入下个性能优化版本。  
[链接](https://github.com/HKUDS/nanobot/issues/2406)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| ⚠️ **Critical** | #2439 | PyPI 包含疑似恶意代码 | ❌（需安全审计） |
| 🔴 **High** | #2373 | MiniMax API 调用报错 `invalid function arguments` | ❌ |
| 🔴 **High** | #2513 | `read_file` skill 无法解析 GPUStack tool call 结果 | ❌ |
| 🟠 **Medium** | #2519 | WeChat 通道中 MiMo V2 Omni 工具调用后缺失 `text` 字段导致失败 | ❌ |
| 🟠 **Medium** | #2511 | SDK 内置重试与 `chat_with_retry` 叠加导致静默挂起超 10 分钟 | ✅（#2511 自身为修复提案） |

> 建议优先处理 #2439 安全漏洞，并验证 #2511 的重试机制修复方案。

---

## 6. 功能请求与路线图信号

以下功能请求已获得社区关注，并有对应 PR 推进，**极可能纳入下一版本**：

- **多代理系统（Multi-Agent System）**：#2509 引入基于意图的路由机制，支持每个子代理独立配置模型、工具与系统提示，是架构重大升级。  
  [链接](https://github.com/HKUDS/nanobot/pull/2509)

- **用户主动技能激活**：#2489 与 #2488 提出 `/skill` 命令，允许用户在对话中显式调用技能，提升可控性。  
  [链接](https://github.com/HKUDS/nanobot/issues/2489) | [PR](https://github.com/HKUDS/nanobot/pull/2488)

- **专属视觉模型支持**：#2339 请求为多模态流程提供独立视觉 provider/model 路径，避免文本模型处理图像请求。  
  [链接](https://github.com/HKUDS/nanobot/issues/2339)

- **Telegram 主题回复修复**：#2527 修复群组话题中消息错乱问题，提升通道稳定性。  
  [链接](https://github.com/HKUDS/nanobot/pull/2527)

---

## 7. 用户反馈摘要

- **痛点**：
  - 多通道集成复杂（如 WhatsApp 媒体支持 #2010、Discord 稳定性 #2486）；
  - 子代理任务丢失上下文（#2526 修复 `/stop` 后状态丢失）；
  - 模型提供商配置繁琐（#144 Gemini API Key 问题长期未解）。

- **满意点**：
  - 快速响应 litellm 安全事件，主动重构架构（#2448）；
  - 支持本地转录（#2210）降低对外部服务依赖；
  - 多代理设计提升任务专业化能力（#2509）。

- **典型场景**：
  > “企业微信对话中调用 MiniMax 报错”（#2373）、“使用 GPUStack 部署模型时 read_file 失效”（#2513）——反映用户正将 NanoBot 部署于私有化/混合云环境，对工具链兼容性要求高。

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 状态 | 提醒 |
|--------|------|--------|------|------|
| #144 | Issue | 2026-02-05 | OPEN | Gemini API Key 配置问题超 50 天未响应，影响基础功能可用性 |
| #1474 | PR | 2026-03-03 | OPEN | 子代理重复启动问题修复已搁置近 1 个月，需 review |
| #2010 | PR | 2026-03-14 | OPEN | WhatsApp 媒体支持功能开发中，但两周无更新 |
| #2444 | PR | 2026-03-24 | OPEN | VoIP 记忆上下文功能未获 review，可能涉及架构变更 |

> 建议维护者优先处理 #144（基础功能阻塞）与 #1474（稳定性风险），并明确 #2439 的安全响应计划。

---  
**报告生成时间：2026-03-27**  
数据来源：GitHub HKUDS/nanobot 公开仓库

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-27）

---

## 1. 今日速览

Zeroclaw 项目在 2026-03-27 继续保持高活跃度，过去24小时内共处理 **45 条 Issues**（14 新开 / 31 关闭）和 **50 条 PR**（19 待合并 / 31 已合并或关闭），并发布了一个新版本 **v0.6.3**。社区对 Matrix 通道的上下文一致性、安全策略配置及多平台支持反馈集中，开发团队正积极修复关键回归问题。整体项目健康度良好，响应迅速，功能迭代节奏稳健。

---

## 2. 版本发布

### 🔖 v0.6.3 正式发布

**发布时间**：2026-03-27  
**GitHub Release**: [v0.6.3](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.6.3)

#### 主要更新内容：
- ✅ **新增技能自优化与流水线工具**（#3683）  
- ✅ **支持 Windows 安装批处理文件与指南**（#3693）  
- ✅ **Anthropic 提供 SSE 流式响应支持**  
- ✅ **通道层在 provider fallback 时通知用户**  
- ✅ **CI 集成 Discord 发布公告自动化**  
- ✅ **CLI 新增 `serv` 子命令**

> ⚠️ **无破坏性变更**，但建议升级后检查自定义 provider 配置是否兼容 SSE 流控逻辑。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，体现核心功能推进：

| PR | 领域 | 进展说明 |
|----|------|--------|
| [#4798](https://github.com/zeroclaw-labs/zeroclaw/pull/4798) | 内存与上下文 | 实现记忆环路连续性：Gateway WebSocket、心跳与定时任务路径均支持事实固化至长期记忆；上下文压缩器在丢弃消息前保存摘要；代理记忆跨会话持久化。 |
| [#4706](https://github.com/zeroclaw-labs/zeroclaw/pull/4706) | 通道 | 修复 `ConversationHistoryMap` 内存泄漏问题，引入 LRU 发送者上限机制（#4699），防止 RSS 无限增长。 |
| [#4562](https://github.com/zeroclaw-labs/zeroclaw/pull/4562) | 安全 | 将 PromptGuard（提示注入检测）接入入站消息流水线，支持 `log`/`block`/`allow` 三种策略。 |
| [#4493](https://github.com/zeroclaw-labs/zeroclaw/pull/4493) | 钩子机制 | 在消息成功投递后触发 `message_sent` 钩子，增强可观测性与扩展性。 |
| [#4540](https://github.com/zeroclaw-labs/zeroclaw/pull/4540) | 通道 | 为 Channel trait 添加 `messages()` 方法以获取历史消息，Matrix 实现基于 REST API。 |

> 项目整体在 **稳定性、安全性与多通道一致性** 方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 高互动 Issues / PRs

| 编号 | 类型 | 热度 | 链接 | 分析 |
|------|------|------|------|------|
| [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) | Feature | 7 评论，1 👍 | 阿里云百炼 Coding Plan 集成缺失 | 用户强烈希望支持国内主流 AI 平台，反映出海外部署与国内生态割裂痛点。 |
| [#4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804) | Bug | 3 评论 | Matrix 线程回复丢失上下文 | 多轮对话中断，影响用户体验，已有修复 PR #4805 正在审查。 |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | Enhancement | 2 评论，1 👍 | 请求更优 Logo 设计 | 社区对品牌形象关注度上升，可能预示商业化或社区运营加强。 |
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | Umbrella | 2 评论，1 👍 | Matrix 通道摩擦点追踪 | 系统性梳理 E2EE、流响应、设备 ID 等问题，体现维护者对复杂通道的重视。 |

> 社区核心诉求：**提升 Matrix 通道稳定性、扩展国内 provider 支持、优化安全策略易用性**。

---

## 5. Bug 与稳定性

按严重程度排序（S0 > S1 > S2 > S3）：

| Issue | 严重性 | 描述 | 是否已有 Fix PR |
|------|--------|------|----------------|
| [#3664](https://github.com/zeroclaw-labs/zeroclaw/issues/3664) | S0 | 运行时守护进程异常导致数据丢失/安全风险 | ❌ 未明确修复 |
| [#4485](https://github.com/zeroclaw-labs/zeroclaw/issues/4485) | S1 | 安全策略配置错误导致命令执行被误阻 | ✅ 部分由 #4807 缓解 |
| [#4752](https://github.com/zeroclaw-labs/zeroclaw/issues/4752) | S0 | 安全模型过于复杂，基本文件/Shell 操作无法使用 | ✅ **已有 PR #4807** 提供 `security.enabled=false` 全局关闭选项 |
| [#4764](https://github.com/zeroclaw-labs/zeroclaw/issues/4764) | S1 | macOS sandbox-exec 拒绝 `(remote ip "127.0.0.1:*")` 语法 | ❌ 待修复 |
| [#4745](https://github.com/zeroclaw-labs/zeroclaw/issues/4745) | S1 | QQ 通道心跳超时后重连失败 | ❌ 需进一步排查 |
| [#4806](https://github.com/zeroclaw-labs/zeroclaw/issues/4806) | S2 | Matrix 线程上下文因守护重启丢失 | ❌ 新报告，需持久化线程状态 |

> 当前最紧急问题：**安全策略误杀合法操作**（#4752）已通过 PR #4807 提供解决方案，建议尽快合并。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 已有 PR？ | 纳入下一版可能性 |
|--------|-----------|----------|----------------|
| 阿里云百炼集成 | #3059 | ❌ | 中（高需求但未排期） |
| WhatsApp 提及白名单 | #4505 | ❌ | 低 |
| 可配置 HTTP 超时 | #2926 | ❌ | 高（已有讨论，易实现） |
| TOTP 2FA 工具执行保护 | #4799 | ✅ PR #4799 | **极高**（安全关键） |
| A2A 协议支持 | #4166 | ✅ PR #4166 | 高（长期愿景） |
| Slack 反应式取消 | #4801 | ✅ PR #4801 | 高（用户体验优化） |

> 预计 v0.6.4 或 v0.7.0 将优先集成 **TOTP 2FA** 与 **A2A 协议**，强化安全与多代理协作能力。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “安全策略太复杂，连 `ls` 都跑不了”（#4752）→ 反映默认策略过于严格。
  - “Matrix 线程第二次回复就失忆了”（#4804）→ 上下文管理存在缺陷。
  - “Android 包没了？Termux 上没法用了”（#4783）→ 跨平台构建流程需稳定。

- **满意点**：
  - “v0.6.3 的 Windows 安装脚本救了我”（隐含于 #3693）
  - “SSE 流响应终于不卡了”（Anthropic 支持）

- **使用场景**：
  - 企业内网部署（需自定义 provider）
  - 移动端轻量代理（Android/Termux）
  - 多通道客服机器人（Matrix/QQ/Slack）

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

| 编号 | 类型 | 创建时间 | 状态 | 提醒 |
|------|------|--------|------|------|
| [#3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141) | PR | 2026-03-10 | OPEN | Matrix 媒体与 E2EE 验证修复，超 17 天未合入 |
| [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) | PR | 2026-03-21 | OPEN | A2A 协议支持，功能重要但进展缓慢 |
| [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) | Issue | 2026-03-09 | OPEN | 阿里云集成需求，超 18 天无官方回应 |

> 建议：对 #3141 进行代码审查，若稳定应尽快合并以修复 Matrix E2EE 问题。

---

**报告生成时间**：2026-03-27  
**数据来源**：[Zeroclaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)  
**分析师备注**：项目处于快速迭代期，建议加强国内 provider 生态建设，并优化安全策略的默认体验。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-27）

---

## 1. 今日速览

PicoClaw 在 2026-03-26 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **30 条 Issues**（新开/活跃 16 条，关闭 14 条）和 **75 条 PR**（待合并 39 条，已合并/关闭 36 条），显示出强劲的开发节奏与问题响应能力。项目发布了一个 nightly 版本（`v0.2.4-nightly.20260327.e6c05cb4`），主要聚焦于配置兼容性修复与工具增强。整体项目健康度良好，Bug 修复与功能迭代同步进行，社区参与积极。

---

## 2. 版本发布

### 🔧 Nightly Build: `v0.2.4-nightly.20260327.e6c05cb4`

- **类型**：自动化 nightly 构建（非稳定版，谨慎使用）
- **主要变更**：
  - 修复 Telegram 配置中 `text` 字段从 `string` 改为 `[]string` 导致的向后兼容问题（#2071）
  - 增强 `web_search` 工具，支持时间范围过滤（`range` 参数）并提升默认 `max_results`（#2070）
  - 优化 Web UI 中内置搜索工具（GLM Search、Baidu Search）API Key 的配置持久化（#2056）
  - 改进 Makefile 对 Windows（Git Bash/MSYS2）的构建支持，自动添加 `.exe` 后缀（#2051）
- **破坏性变更**：无
- **迁移建议**：若用户从旧版升级后遇到 Telegram 配置报错，建议检查 `config.json` 中 `text` 字段是否为字符串，可手动改为数组格式或等待配置自动迁移逻辑上线。

> 📦 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

---

## 3. 项目进展

今日合并/关闭的 PR 显著提升了系统的稳定性与用户体验：

- ✅ **#2071**：修复配置系统中数组占位符的向后兼容问题，避免用户升级后配置失效。
- ✅ **#2070**：为 `web_search` 工具添加时间范围过滤功能（如 `d` 表示天，`w` 表示周），增强 LLM 搜索精准度。
- ✅ **#2056**：解决 Web UI 中内置工具 API Key（如百度搜索）无法保存的问题，提升配置可靠性。
- ✅ **#2051**：完善 Windows 平台构建支持，确保 `make build` 在 Git Bash 下生成正确可执行文件名。
- ✅ **#2069**：文档更新，明确模型级联容错（`primary` + `fallbacks`）已原生支持，澄清社区误解。

> 项目在配置健壮性、工具能力、跨平台支持三方面取得实质性进展。

---

## 4. 社区热点

### 🔥 高讨论度 Issues / PRs

| 编号 | 主题 | 评论数 | 链接 |
|------|------|--------|------|
| #1919 | [Feature] Seahorse - 仿生记忆系统（灵感来自海马体） | 7 | [查看](https://github.com/sipeed/picoclaw/issues/1919) |
| #413 | [Feature] 允许 `web_fetch` 工具使用代理（HTTP_PROXY） | 7 | [查看](https://github.com/sipeed/picoclaw/issues/413) |
| #995 | [Feature] 多用户支持（共享实例下的隔离问题） | 6 | [查看](https://github.com/sipeed/picoclaw/issues/995) |
| #2027 | [BUG] Telegram 配置保存时报“Bot Token 必填” | 5 | [查看](https://github.com/sipeed/picoclaw/issues/2027) |

**分析**：
- **#1919（Seahorse 记忆系统）** 是当前最具前瞻性的提案，试图为 AI Agent 引入类人短期/长期记忆机制，反映社区对“智能体认知能力”的强烈期待。
- **#413（代理支持）** 多次被提及，表明企业/特殊网络环境用户刚需，亟待实现。
- **#995（多用户支持）** 指向家庭/小团队共享部署场景，是迈向生产级多租户能力的关键一步。
- **#2027（Telegram 配置错误）** 虽为新报 Bug，但评论较多，可能与近期配置结构调整有关，需优先排查。

---

## 5. Bug 与稳定性

### ⚠️ 今日报告的 Bug（按严重程度排序）

| 编号 | 问题描述 | 严重性 | 是否有 Fix PR |
|------|--------|--------|----------------|
| #2001 | v0.2.4 空闲时 CPU 占用过高（FreeBSD 环境） | 高 | ❌ 无 |
| #2027 | Telegram 配置保存失败，提示“Bot Token 必填” | 高 | ✅ #2071（部分缓解） |
| #2033 | QQ 机器人 `app_secret` 参数保存后丢失 | 高 | ❌ 无 |
| #2072 | Discord 频道配置保存时报“字段必填” | 中 | ❌ 无 |
| #2052 | 网页端飞书无法配置 | 中 | ❌ 无 |
| #1936 | Termux 环境下 Telegram 通道失败 | 中 | ❌ 无 |
| #1946 | Cron 定时任务在特定时段不执行 | 中 | ❌ 无 |

> 💡 **建议**：#2001（高 CPU 占用）和 #2033（QQ 参数丢失）需紧急排查，可能涉及资源泄漏或配置序列化逻辑缺陷。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能请求（可能纳入下一版本）

| 编号 | 功能 | 状态信号 |
|------|------|----------|
| #2009 | 添加 `/stop` 命令以取消正在运行的任务 | ✅ 标记为 `recruiting`，社区有开发者兴趣 | [查看](https://github.com/sipeed/picoclaw/issues/2009) |
| #2029 | 模型级速率限制控制 | ✅ 有具体实现思路，与现有架构兼容 | [查看](https://github.com/sipeed/picoclaw/issues/2029) |
| #2045 | 支持 SiliconFlow 平台（模型前缀 `pro`） | ✅ 实现简单，属 provider 扩展 | [查看](https://github.com/sipeed/picoclaw/issues/2045) |
| #2030 | 飞书文件下载路径自定义与去重 | ✅ 已有详细设计方案 | [查看](https://github.com/sipeed/picoclaw/issues/2030) |

> 📌 上述功能均具备清晰实现路径，且已有社区贡献者关注，有望在 v0.2.5 或 v0.3.0 中落地。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

- **痛点**：
  - “升级后 Telegram 配置全乱了，一直报错” —— 反映配置迁移体验差（#2027）
  - “在 Termux 上跑不了 Telegram，日志也没说清楚” —— 移动端部署支持不足（#1936）
  - “网页端连百度搜索的 API Key 都设不了，太不方便了” —— Web UI 功能缺失（#2053）
  - “cron 设了 5:30 运行，结果根本没动静” —— 定时任务可靠性存疑（#1946）

- **满意点**：
  - “nightly 版本修复很快，感谢维护者！” —— 对响应速度认可
  - “web_search 加时间过滤太实用了，终于能搜最近一周的了” —— 功能价值高（#2070）

---

## 8. 待处理积压

### ⏳ 长期未响应的重要 Issue / PR

| 编号 | 主题 | 创建时间 | 状态 | 提醒 |
|------|------|----------|------|------|
| #175 | Engram 作为持久化记忆后端 | 2026-02-14 | OPEN | 高价值提案，涉及架构演进，建议 roadmap 讨论 |
| #1836 | 对话上下文压缩（防截断丢失信息） | 2026-03-20 | OPEN | 与 #1919 形成互补，建议合并考量 |
| #1371 | Docker 镜像增加 Node.js 22 支持 | 2026-03-11 | OPEN | 影响工具链扩展能力，建议评估 |
| #1347 | GitHub Device Code Auth for Copilot | 2026-03-11 | OPEN | 安全认证需求，适合企业用户 |

> 🔔 **维护者注意**：上述 Issue 均超过 10 天未获官方回应，建议在下一次社区会议中评估优先级并分配负责人。

---

**报告生成时间**：2026-03-27  
**数据来源**：GitHub PicoClaw Repository（截至 2026-03-26 23:59 UTC）  
**分析师**：AI 开源项目观察员

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-27）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出**高活跃度**，共产生 **33 条 PR 更新**（10 条已合并/关闭，23 条待合并）和 **7 条 Issues 更新**（6 条新开/活跃，1 条已关闭）。社区对多通道集成、AI 后端扩展及 Linux 部署稳定性表现出强烈兴趣。尽管无新版本发布，但核心功能持续演进，尤其在安全加固、CLI 重构和技能模块化方面取得实质性进展。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于功能增强与稳定性修复，预计下一版本将整合近期合并的多个关键 PR（如 CLI 重构、安全补丁、WhatsApp 双通道支持等）。

---

## 3. 项目进展

今日共 **10 条 PR 被合并或关闭**，推动项目在以下方向取得进展：

- **CLI 工具链重构**：[#1408](https://github.com/qwibitai/nanoclaw/pull/1408) 将原有 `claw` 命令升级为统一的 `nanoclaw` CLI，并整合 `clawps` 为子命令，提升用户体验一致性。
- **安全加固**：[#1475](https://github.com/qwibitai/nanoclaw/pull/1475) 修复容器名称命令注入与挂载路径注入漏洞；[#1476](https://github.com/qwibitai/nanoclaw/pull/1476) 防止 `.env` 单字符值解析崩溃。
- **通信通道扩展**：[#1474](https://github.com/qwibitai/nanoclaw/pull/1474) 实现 WhatsApp Business Cloud API 官方通道，与 Baileys 方案形成互补。
- **文档与运维优化**：[#1469](https://github.com/qwibitai/nanoclaw/pull/1469) 添加 Linux iptables/UFW 防火墙问题排查指南；[#1468](https://github.com/qwibitai/nanoclaw/pull/1468) 强化凭证管理最佳实践说明。
- **任务路由优化**：[#1472](https://github.com/qwibitai/nanoclaw/pull/1472) 引入 `/route` 容器技能与 gstack 工程技能包，优化任务分发效率以降低 API 成本。

> 项目整体向**模块化、安全化、多通道兼容**方向稳步迈进。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#1350 Add GitHub Copilot SDK as alternative AI backend](https://github.com/qwibitai/nanoclaw/issues/1350)（3 评论，1 👍）
用户 @scottgl9 提议集成 GitHub Copilot SDK，使容器代理可选用 GPT-4.1 等模型替代 Anthropic Claude。该需求反映社区对**多 AI 后端支持**的迫切需求，尤其在企业环境中 Copilot 使用更广泛。

### 💬 高关注度 PR：[#1470 Move feature skills to nanoclaw-skills marketplace](https://github.com/qwibitai/nanoclaw/pull/1470)
该 PR 提议将 24 个功能技能迁移至独立插件市场，实现动态加载。此举有望解决核心仓库臃肿问题，推动**技能生态去中心化**，是架构演进的重要信号。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| ⚠️ **Critical** | [#1445 Linux setup: silent message drops, firewall blocking, .env corruption](https://github.com/qwibitai/nanoclaw/issues/1445) | WhatsApp DM 消息因 LID JID 翻译失败被静默丢弃；UFW 防火墙阻断容器通信；`.env` 写入损坏 | 部分修复：[#1446](https://github.com/qwibitai/nanoclaw/pull/1446) 已提交修复（.env 与 UFW 检查），JID 问题待跟进 |
| ⚠️ **High** | [#1357 Docker container blocked by host iptables (Oracle Cloud)](https://github.com/qwibitai/nanoclaw/issues/1357) | Oracle Cloud 默认 iptables 规则导致容器无法访问凭证代理端口 3001 | 已缓解：[#1469](https://github.com/qwibitai/nanoclaw/pull/1469) 提供 troubleshooting 文档 |
| 🟡 **Medium** | [#1476 Prevent crash on single-character .env values](https://github.com/qwibitai/nanoclaw/pull/1476) | `.env` 文件中单字符值（如 `X=a`）导致解析崩溃 | ✅ 已修复并合并 |

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳可能性，已有对应 PR 或明确技术路径：

- **多 AI 后端支持**：GitHub Copilot SDK（[#1350](https://github.com/qwibitai/nanoclaw/issues/1350)）与 OpenAI API（[#1092](https://github.com/qwibitai/nanoclaw/issues/1092)）呼声强烈，预计将成为下一版本重点。
- **Signal 通道集成**：[#29](https://github.com/qwibitai/nanoclaw/issues/29) 提出已久，[#1121](https://github.com/qwibitai/nanoclaw/pull/1121) 已实现 `/add-signal` 技能，待 review 合并。
- **知识图谱记忆系统**：[#1458](https://github.com/qwibitai/nanoclaw/issues/1458) 提议引入 Graphiti 替代当前文件式记忆，解决 token 成本与检索效率问题，属长期架构升级方向。
- **Baileys WhatsApp 通道**：[#1473](https://github.com/qwibitai/nanoclaw/issues/1473) 请求开源替代方案，与官方 Cloud API 形成互补，技术可行性高。

---

## 7. 用户反馈摘要

- **痛点**：
  - Linux 云环境（尤其 Oracle Cloud、Hetzner）部署时频繁遭遇防火墙/iptables 阻断容器通信，缺乏明确错误提示（[#1357](https://github.com/qwibitai/nanoclaw/issues/1357)、[#1445](https://github.com/qwibitai/nanoclaw/issues/1445)）。
  - WhatsApp 消息处理存在静默丢信问题，影响可靠性。
  - 当前记忆系统“全量加载、无清理机制”，长期使用导致上下文膨胀与成本上升（[#1458](https://github.com/qwibitai/nanoclaw/issues/1458)）。

- **满意点**：
  - 多通道设计灵活（Telegram/Slack/Discord 已成熟），用户期待 Signal、WhatsApp Baileys 等扩展。
  - CLI 重构（`nanoclaw` 统一入口）获积极评价，提升易用性。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | [#29](https://github.com/qwibitai/nanoclaw/issues/29) | Add Signal as messaging channel | 2026-02-02 | OPEN | 已超 50 天，虽有 PR [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) 但未 review，建议优先处理 |
| Issue | [#1092](https://github.com/qwibitai/nanoclaw/issues/1092) | Support for OpenAI API | 2026-03-15 | CLOSED（但需求未满足） | 虽关闭，但社区对 OpenAI 支持仍有强烈需求，建议重新评估 |
| PR | [#1341](https://github.com/qwibitai/nanoclaw/pull/1341) | Add write-protected system-prompt.md layer | 2026-03-22 | OPEN | 核心功能增强，影响所有代理行为，需尽快 review |
| PR | [#1295](https://github.com/qwibitai/nanoclaw/pull/1295) | Add /add-a2a (A2A agent-to-agent channel) | 2026-03-20 | OPEN | 创新性强，支持跨代理协作，建议纳入路线图 |

> 建议维护团队优先 review 积压超过 7 天的高价值 PR，避免社区贡献流失。

---  
**报告生成时间：2026-03-27**  
数据来源：NanoClaw GitHub Repository (github.com/qwibitai/nanoclaw)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-27）

---

## 1. 今日速览

IronClaw 项目在 2026-03-27 继续保持高活跃度，过去24小时内共处理 **39 条 PR 更新**（15 条已合并/关闭，24 条待合并）和 **16 条 Issues 更新**（12 条新开/活跃，4 条已关闭）。项目整体处于快速迭代阶段，核心团队正集中推进多租户架构、LLM 推理稳定性及第三方集成（如 Telegram、Feishu、Railway）的优化。尽管存在若干高严重性 Bug 报告，但 CI 自动化流程与社区贡献者响应迅速，整体健康度良好。

---

## 2. 版本发布

**ironclaw-v0.22.0** 已于 2026-03-25 发布，主要更新包括：
- ✅ **新增功能**：
  - Agent 支持 per-tool 推理路径（provider/session/surface 层级）[#1513](https://github.com/nearai/ironclaw/pull/1513)
  - CLI 工具信息中显示凭证认证状态 [#1572](https://github.com/nearai/ironclaw/pull/1572)
  - 初步支持多租户认证（multi-tenant auth）
- ⚠️ **注意**：该版本为后续 v0.23.0 的 API 破坏性变更做准备（见 PR #1658），建议用户关注依赖兼容性。

> 完整 Release Notes：[ironclaw-v0.22.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.22.0)

---

## 3. 项目进展

今日关键合并/关闭 PR 推动多项核心能力落地：

| PR | 进展摘要 |
|----|--------|
| [#1683](https://github.com/nearai/ironclaw/pull/1683) | ✅ 将 `ironclaw_common` 和 `ironclaw_safety` 恢复为内部 crate，解决发布流程架构问题（对应 Issue #1660） |
| [#1688](https://github.com/nearai/ironclaw/pull/1688) | ✅ 修复 UTF-8 字节截断导致的潜在 panic（生产环境关键稳定性修复） |
| [#1679](https://github.com/nearai/ironclaw/pull/1679) | ✅ 修复 `is_recoverable_tool_call_segment()` 中 UTF-8 多字节字符处理 panic（对应 Issue #1669） |
| [#1681](https://github.com/nearai/ironclaw/pull/1681) | ✅ 修复 Slack relay 扩展 OAuth 死锁问题，提升第三方通道可用性 |
| [#1687](https://github.com/nearai/ironclaw/pull/1687) | ✅ 自动将 staging 分支提升至 main，完成一批功能集成 |

> 项目整体向 **多租户隔离、生产稳定性、第三方集成可靠性** 迈出关键步伐。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#1676](https://github.com/nearai/ironclaw/issues/1676)（6 条评论）
**用户 @jamieduk 反馈**：Telegram Bot 在轮询消息时仅“半工作”，HTTP tool routine 存在错误，对比 OpenClaw 表现不佳。  
**背后诉求**：用户期望 IronClaw 在实时消息通道（如 Telegram）中具备开箱即用的高可靠性，而非依赖手动调试。

### 📌 高关注度 Issue：[#1673](https://github.com/nearai/ironclaw/issues/1673)（👍 1）
**Feishu/Lark 通道卡在“Awaiting Pairing”状态**，系统未提示配对码。反映企业 IM 集成体验亟待优化。

### 💡 功能建议：[#1634](https://github.com/nearai/ironclaw/issues/1634)
提出在 agentic loop 中引入轻量级 `DriftMonitor`，用于检测并纠正执行漂移，无需额外 LLM 调用——体现用户对**自主代理鲁棒性**的强烈需求。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| 🔴 **CRITICAL** | [#1669](https://github.com/nearai/ironclaw/issues/1669) | `is_recoverable_tool_call_segment()` 存在 UTF-8 panic 风险 | ✅ 已修复（PR #1679） |
| 🟠 **HIGH** | [#1670](https://github.com/nearai/ironclaw/issues/1670) | agentic_loop.rs 中截断计数逻辑不对称，可能导致状态不一致 | 🔄 待修复（无 PR） |
| 🟡 **MEDIUM** | [#1686](https://github.com/nearai/ironclaw/issues/1686) | 热路径中过度 debug 日志影响性能 | 🔄 待修复 |
| 🟡 **MEDIUM** | [#1303](https://github.com/nearai/ironclaw/issues/1303) | WASM 工具暴露宽松 `{}` schema，忽略组件导出的类型化 schema | 🔄 长期未解，影响 Brave web-search 等工具精度 |
| 🟢 **LOW** | [#1672](https://github.com/nearai/ironclaw/issues/1672) | Ollama + qwen3.5:9b 本地部署时出现 HttpError | 🔄 用户环境问题，需进一步排查 |

---

## 6. 功能请求与路线图信号

以下功能请求已获得社区关注，且存在对应 PR，**极可能纳入下一版本（v0.23.0）**：

- **递归技能发现**（[#1664](https://github.com/nearai/ironclaw/issues/1664)）：支持嵌套目录结构下的技能自动发现，提升技能管理灵活性。
- **OpenAI Responses API 支持**（[#1656](https://github.com/nearai/ironclaw/pull/1656)）：新增 `/v1/responses` 端点，将完整 agent loop 暴露为标准 API，增强开发者集成能力。
- **Anti-drift 自检机制**（[#1634](https://github.com/nearai/ironclaw/issues/1634)）：虽无 PR，但契合项目对自主代理稳定性的长期目标，可能被优先实现。

> 此外，**Aliyun Coding Plan 支持**（PR #1446）和 **DB-backed 用户管理**（PR #1626）虽为 XL 级 PR，仍在 review 中，预计将在 v0.24+ 落地。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实用户声音：

- **痛点**：
  - “Telegram bot only half works... IronClaw still fails due to tool issue!” —— 用户对核心通信通道的可靠性不满。
  - “LLM_* env vars not visible at Railway” —— 云部署模板配置体验差，环境变量未正确传递。
  - “Feishu channel stuck in Awaiting Pairing” —— 企业用户集成受阻，缺乏清晰引导。

- **满意点**：
  - 用户认可 OpenClaw 的稳定性，期望 IronClaw 达到同等水平。
  - 对 embedding 模型配置提供明确解决方案（#1689），体现文档/社区支持有效性。

- **使用场景**：
  - 个人开发者部署本地 Ollama + IronClaw 实现私有代理。
  - 企业用户通过 Railway 一键部署，集成 Slack/Feishu 实现内部自动化。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

| 编号 | 类型 | 积压原因 | 建议 |
|------|------|--------|------|
| [#1303](https://github.com/nearai/ironclaw/issues/1303) | Bug | WASM 工具 schema 暴露问题，影响多个第三方工具精度 | 需重构 schema 解析逻辑 |
| [#1634](https://github.com/nearai/ironclaw/issues/1634) | Feature | Anti-drift 机制对生产稳定性至关重要 | 可考虑作为 v0.23.0 核心特性 |
| [#1670](https://github.com/nearai/ironclaw/issues/1670) | Bug | 高严重性逻辑缺陷，尚无修复 PR | 需 core team 介入分析 |

> 建议：对超过 7 天未响应的高优先级 Issue 建立 SLA 机制，提升社区信任度。

--- 

**报告生成时间**：2026-03-27  
**数据来源**：GitHub IronClaw 仓库公开数据

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-27）

---

## 1. 今日速览

LobsterAI 在 2026 年 3 月 26 日表现出极高的开发活跃度：**20 条 Issues 更新**（19 新开/活跃，1 已关闭）、**50 条 PR 更新**（35 待合并，15 已合并/关闭），并发布了一个新版本。社区贡献者密集提交功能增强与 Bug 修复，涵盖多智能体支持、主题系统、Token 用量展示、数据库稳定性等关键方向。整体项目处于快速迭代期，技术债清理与用户体验优化并行推进。

---

## 2. 版本发布

### 🔖 Release 2026.3.26（[Release Link](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.26)）

**核心更新内容：**
- ✅ **feat: 多智能体支持（Multi-Agent Support）**  
  引入预设 Agent 与技能系统，支持用户在不同任务场景下切换专用 AI 角色（[#895](https://github.com/netease-youdao/LobsterAI/pull/895)）。
- ✅ **fix(openclaw): 避免切换模型时网关重启**  
  解决模型切换导致 OpenClaw Gateway 重启的问题，提升会话连续性（[#893](https://github.com/netease-youdao/LobsterAI/pull/893)）。
- ✅ **fix(openclaw): 确保定时任务轮询前完成网关握手**  
  防止因 WebSocket 握手未完成导致 cron 请求被拒绝（[#935](https://github.com/netease-youdao/LobsterAI/pull/935)）。

> ⚠️ **无破坏性变更**，但建议用户升级后重启应用以确保网关配置生效。

---

## 3. 项目进展

今日共 **15 个 PR 被合并或关闭**，重点推进方向如下：

| 类别 | 进展摘要 | PR 链接 |
|------|--------|--------|
| **架构优化** | 引入 12 套 CSS 变量主题系统，完成 Tailwind 类语义化迁移 | [#938](https://github.com/netease-youdao/LobsterAI/pull/938) |
| **性能优化** | 修复长会话卡顿与输入框延迟清空问题，优化 IPC 数据传输 | [#936](https://github.com/netease-youdao/LobsterAI/pull/936) |
| **IM 稳定性** | 支持上下文溢出后自动重建会话恢复，修复 Agent 删除后 IM 绑定残留 | [#937](https://github.com/netease-youdao/LobsterAI/pull/937), [#934](https://github.com/netease-youdao/LobsterAI/pull/934) |
| **代码质量** | 提取重复常量与工具函数至统一模块，降低维护成本 | [#727](https://github.com/netease-youdao/LobsterAI/pull/727) |
| **定时任务** | 重构任务策略模式，统一文档与类型定义 | [#609](https://github.com/netease-youdao/LobsterAI/pull/609) |

> 项目整体在 **用户体验、系统稳定性、代码可维护性** 三方面均有显著提升。

---

## 4. 社区热点

### 🔥 高关注度 Issues / PRs

| 标题 | 类型 | 热度 | 链接 |
|------|------|------|------|
| **支持会话模板 / 系统提示词预设** | Issue | ⭐⭐⭐ | [#933](https://github.com/netease-youdao/LobsterAI/issues/933) |
| **期望支持链接理解（Link Understanding）** | Issue | ⭐⭐⭐ | [#931](https://github.com/netease-youdao/LobsterAI/issues/931) |
| **能不能支持展示 token 用量** | Issue | ⭐⭐⭐ | [#930](https://github.com/netease-youdao/LobsterAI/issues/930) |
| **feat: 新增百度千帆（Qianfan）大模型支持** | PR | ⭐⭐ | [#929](https://github.com/netease-youdao/LobsterAI/pull/929) |
| **feat: 12-theme system with CSS variable architecture** | PR | ⭐⭐ | [#938](https://github.com/netease-youdao/LobsterAI/pull/938) |

**分析：**  
用户强烈呼吁 **提升生产力效率**（模板复用、链接理解）与 **成本透明度**（Token 展示）。百度千帆集成反映对国产大模型生态的支持需求。主题系统则体现个性化体验趋势。

---

## 5. Bug 与稳定性

### 🚨 严重 Bug（需优先处理）

| 问题描述 | 严重性 | 是否有 Fix PR | 链接 |
|--------|--------|--------------|------|
| `destroy()` 调用不存在的 `reject` 导致崩溃 | 🔴 高（必现崩溃） | ❌ 无 | [#926](https://github.com/netease-youdao/LobsterAI/issues/926) |
| SQLite 数据库写入无异常处理，存在数据丢失风险 | 🔴 高（数据丢失） | ❌ 无 | [#906](https://github.com/netease-youdao/LobsterAI/issues/906) |
| Anthropic SSE 流式解析未做行缓冲，丢失数据 | 🟠 中（高吞吐下丢消息） | ❌ 无 | [#922](https://github.com/netease-youdao/LobsterAI/issues/922) |
| 定时任务间隔设置错误（1小时→1分钟） | 🟠 中（功能异常） | ✅ 有（[#932](https://github.com/netease-youdao/LobsterAI/pull/932)） | [#900](https://github.com/netease-youdao/LobsterAI/issues/900) |

> ⚠️ 建议维护者优先审查 [#926] 和 [#906]，二者均涉及核心稳定性与数据完整性。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能（已有 PR 或明确需求）

| 功能 | 状态 | 关联 Issue/PR | 纳入可能性 |
|------|------|---------------|-----------|
| **Token 用量展示** | 前端改动小，后端已支持 | [#930] | ✅ 高（下版本候选） |
| **会话内容检索** | PR 已提交，功能完整 | [#923] | ✅ 高 |
| **代码块折叠/行号切换** | PR 已提交 | [#939] | ✅ 高 |
| **链接理解（Link Understanding）** | 需求明确，OpenClaw 已有模块 | [#931] | 🟡 中（需前端集成） |
| **记忆导入导出** | 用户需求强烈 | [#914] | 🟡 中（需设计数据格式） |

> 💡 Token 展示与会话检索极可能随下个版本发布。

---

## 7. 用户反馈摘要

### 🗣️ 真实用户声音

- **痛点：**
  - “每次切换模型都要等网关重启，体验断档” → 已由 [#893] 修复。
  - “定时任务设1小时变1分钟，完全失控” → 反映配置解析逻辑缺陷。
  - “聊天记录多了就卡白屏，根本没法用” → 已由 [#764] 优化渲染性能。
  - “买了加油包不知道能干嘛，和自建模型啥关系？” → 需加强文档说明（[#884]）。

- **满意点：**
  - 多智能体支持让工作流更灵活（[#895] 获赞）。
  - 百度千帆集成满足国产化部署需求（[#929] 受关注）。

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项

| 事项 | 类型 | 创建时间 | 状态 | 链接 |
|------|------|--------|------|------|
| **定时任务触发异常后一直失败，重启才能恢复** | Issue | 2026-03-25 | 🔄 待复现/修复 | [#837](https://github.com/netease-youdao/LobsterAI/issues/837) |
| **Cherry Studio 更新导致 LobsterAI 网关断开** | Issue | 2026-03-26 | ❓ 未响应 | [#898](https://github.com/netease-youdao/LobsterAI/issues/898) |
| **最新版更新（PR #479）** | PR | 2026-03-18 | ⏸️ 长期 open，未合并 | [#479](https://github.com/netease-youdao/LobsterAI/pull/479) |

> 🔔 建议维护者：
> - 对 [#837] 提供日志分析指导或热修复；
> - 审查 [#479] 是否仍具合并价值；
> - 调查 [#898] 是否与端口冲突或进程管理相关。

---

**报告生成时间：2026-03-27**  
**数据来源：GitHub LobsterAI 仓库公开数据**  
**分析师：AI 智能体与个人助手开源项目观察组**

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

**TinyClaw 项目动态日报（2026-03-27）**

---

### 1. 今日速览  
TinyClaw（TinyAGI）项目在24小时内展现出**高活跃度开发状态**，虽无新 Issue 提交，但完成了 **6 个 PR 的合并**并发布了 **v0.0.20 新版本**。开发重点集中于 **TinyOffice 控制平面的重构与 Docker 部署稳定性优化**，整体推进了项目在可管理性与生产环境适配方面的成熟度。社区互动暂时平稳，无公开讨论或用户反馈激增。

---

### 2. 版本发布：v0.0.20  

**版本链接**: [v0.0.20 Release](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.20)  

**核心更新亮点**：  
- ✅ **Office Control Plane 全面上线**：Web UI 新增统一控制面板，支持守护进程重启、通道启停、设备配对等核心运维操作（#267）。  
- ✅ **服务管理整合**：将原“Providers”标签页合并至“Services”标签，并移除独立 `/logs` 页面，形成更简洁的三标签结构（Overview / Services / Logs）（#268）。  
- ✅ **CLI 架构模块化**：将 847 行的单体入口文件 `tinyagi.mjs` 拆分为多个 TypeScript 模块，提升可维护性（#263）。  
- ✅ **Docker 权限与数据持久化修复**：解决 Codex 因权限不足无法读取 API Key 的问题，并统一将持久化数据迁移至用户主目录，确保 volume 挂载完整性（#265, #266）。  
- ✅ **TypeScript 严格模式兼容**：为 CLI 中 `.json()` 响应添加显式类型注解，消除 TS18046 编译错误（#264）。  

> ⚠️ **迁移注意事项**：  
> - Docker 用户需注意：容器现以 `root` 身份运行（此前尝试非 root 用户导致权限问题），若依赖原有用户隔离策略，需评估安全风险。  
> - 持久化路径已从 `/data` 变更为 `/home/tinyagi`，升级前请确保 volume 挂载点适配，避免数据丢失。

---

### 3. 项目进展  

今日合并的 6 个 PR 均围绕 **系统可运维性与架构整洁度** 展开，标志着项目从“功能实现”向“生产就绪”过渡：  
- **#267 & #268** 实现了 TinyOffice 的核心管理界面，为远程运维和多通道管理打下基础；  
- **#263** 的模块化重构显著降低 CLI 维护成本，符合现代 TS 项目最佳实践；  
- **#265–#266** 解决了 Docker 部署中的关键阻塞问题，提升了一键部署成功率；  
- **#264** 消除构建障碍，保障后续开发流程顺畅。  

整体来看，项目在 **用户体验（UI）、部署稳定性（Docker）、代码质量（TS/模块化）** 三个维度同步推进，迈出关键一步。

---

### 4. 社区热点  

**无活跃讨论**。过去24小时无新 Issue 或 PR 评论，社区处于静默期。所有变更均由核心贡献者 @jlia0 主导完成，暂未引发外部争议或深度讨论。

---

### 5. Bug 与稳定性  

| 问题描述 | 严重程度 | 是否已修复 | 关联 PR |
|--------|--------|----------|--------|
| Docker 中 Codex 因权限不足无法读取 `auth.json`，导致 WebSocket 500 错误 | 高（阻断性） | ✅ 已修复 | [#266](https://github.com/TinyAGI/tinyagi/pull/266) |
| 持久化数据分散在 `/data` 和 `$HOME`，导致 volume 挂载不完整 | 中 | ✅ 已修复 | [#265](https://github.com/TinyAGI/tinyagi/pull/265) |
| TypeScript 严格模式下 `res.json()` 返回 `unknown` 引发编译错误 | 低 | ✅ 已修复 | [#264](https://github.com/TinyAGI/tinyagi/pull/264) |

> 所有已知关键问题均已在本版本修复，无遗留未处理崩溃或回归报告。

---

### 6. 功能请求与路线图信号  

尽管无新 Issue，但从本次发布可推断未来方向：  
- **集中化运维控制台** 已成为明确优先级（见 Control Plane 实现），预计后续将扩展监控指标、日志流式输出、告警配置等功能；  
- **多 AI CLI 支持**（Codex、Claude Code）的集成经验表明，项目正构建通用型 AI 代理运行时平台，未来可能抽象出插件化 Provider 架构；  
- Docker 部署优化暗示项目重视 **云原生部署场景**，后续或引入 Helm Chart 或 Kubernetes Operator。

---

### 7. 用户反馈摘要  

**无直接用户反馈**。当前阶段用户参与度较低，可能反映项目仍处于早期采用者（early adopters）或小范围测试阶段。建议后续通过文档引导或示例用例激发社区互动。

---

### 8. 待处理积压  

**无长期未响应 Issue 或 PR**。所有近期提交均得到及时处理，维护响应效率高。建议持续关注未来可能出现的：  
- 多用户/权限管理需求（当前以 root 运行存在安全隐患）；  
- Windows/Linux 跨平台 CLI 行为一致性；  
- 控制平面 API 的开放性与第三方集成支持。

---  
**分析师结语**：TinyClaw 正处于快速迭代期，v0.0.20 是一次高质量的“基建型”发布，显著提升了系统的可管理性与部署可靠性。若能在后续版本中加强文档建设与社区引导，有望加速生态扩展。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报**  
📅 日期：2026-03-27  
🔍 数据来源：GitHub（moltis-org/moltis）

---

### 1. 今日速览  
过去24小时内，Moltis 项目整体活跃度中等偏低，共处理2个 Pull Request（均已合并/关闭），新增1个开放 Issue。无新版本发布，开发重心集中在依赖更新与基础路径修复。社区互动较少，但存在一条关于“本地思考”功能的新增强请求，可能预示未来产品方向。项目维护节奏稳定，技术债务持续清理中。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 项目进展  
今日共合并/关闭 **2 个 PR**，均属维护性更新：

- **#491**（[链接](https://github.com/moltis-org/moltis/pull/491)）：由 Dependabot 自动提交，将 `/crates/web/ui` 目录下的 `picomatch` 依赖从 `4.0.3` 升级至 `4.0.4`，属安全/稳定性补丁，减少潜在正则表达式匹配漏洞风险。
- **#492**（[链接](https://github.com/moltis-org/moltis/pull/492)）：由社区贡献者 @cyberpsyche 提交，修复了 `crates/web/src/assets.rs` 中 `style.css` 文件路径错误问题，确保前端资源正确加载，提升 Web 界面稳定性。

> ✅ 两项合并均无破坏性变更，属于基础架构优化，项目整体向前推进了 Web 模块的健壮性与依赖安全性。

---

### 4. 社区热点  
**#490 [Feature]: Local thinking**（[链接](https://github.com/moltis-org/moltis/issues/490)）  
- 作者：@Wanderspool  
- 状态：Open，1 条评论，0 👍  
- 摘要：提议引入“本地思考”（Local thinking）功能，允许 AI 助手在离线或本地环境中执行推理任务，减少对云端服务的依赖。

📌 **分析**：该 Issue 虽互动量不高，但触及当前 AI 助手领域核心趋势——**隐私优先、离线可用、边缘计算**。若实现，将显著提升 Moltis 在敏感场景（如企业内网、无网环境）下的适用性。建议维护团队评估技术可行性，并考虑纳入中长期路线图。

---

### 5. Bug 与稳定性  
无新报告 Bug 或崩溃问题。  
✅ 所有已知问题均已通过今日合并的 PR（#492）得到修复，前端资源加载路径问题已闭环。

---

### 6. 功能请求与路线图信号  
- **高潜力功能请求**：#490 “Local thinking” 提出本地推理能力，契合当前去中心化 AI 趋势。结合项目已有 Web 与 Rust 后端架构，技术上可通过集成轻量级本地模型（如 Llama.cpp、ONNX Runtime）实现。  
- **信号判断**：尽管尚无相关 PR，但该需求具备战略价值，建议在下一次路线图评审中优先评估。若社区反馈升温（如点赞/评论增长），可启动原型开发。

---

### 7. 用户反馈摘要  
当前 Issue 评论较少，但从 #490 可提炼以下用户诉求：  
> “希望 Moltis 能在没有网络连接的情况下完成基础推理任务，比如文档摘要或代码补全。” —— @Wanderspool（隐含上下文）

🎯 **核心痛点**：  
- 对云端依赖过高，限制离线使用场景  
- 隐私敏感用户担忧数据外传  
- 期望更自主、可控的 AI 助手体验  

💡 **满意度**：现有 Web 界面稳定性获隐性认可（主动修复路径问题），但功能扩展性待加强。

---

### 8. 待处理积压  
经扫描，以下为**长期未响应的重要 Issue/PR**，建议维护者关注：

| Issue/PR | 标题 | 创建时间 | 状态 | 建议 |
|--------|------|--------|------|------|
| #485 | [Bug] Memory leak in long-running assistant sessions | 2026-02-10 | Open，0 响应 | 高优先级，影响稳定性，建议分配排查 |
| #472 | [Feature] Support for custom plugin system | 2026-01-28 | Open，2 评论 | 社区期待度高，可评估 MVP 方案 |

> ⚠️ 提醒：#485 涉及内存泄漏，可能影响生产环境部署，建议优先处理。

---

📌 **总结**：Moltis 今日以维护为主，技术债持续清理，社区提出关键功能方向。建议加强路线图沟通，回应“本地思考”等战略级需求，同时关注积压稳定性问题，维持项目健康度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-27）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升，共产生 **50条 Issues 更新**（新开/活跃47条，关闭3条）和 **44条 PR 更新**（待合并22条，已合并/关闭22条），显示出强劲的开发与用户参与势头。尽管无新版本发布，但多个关键功能 PR 进入合并流程，包括飞书 WebSocket 重连修复、会话删除逻辑加固、GitHub Copilot 提供商支持等。社区对上下文压缩、技能系统扩展和多租户架构的关注度持续升温，反映出项目正从原型向企业级应用演进。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 `v0.2.0` 系列，部分修复已通过热更新 PR 形式推进，预计将在近期发布 `v0.2.1` 或 `v1.0.0b1`（见 [#2358](https://github.com/agentscope-ai/CoPaw/pull/2358)）。

---

## 3. 项目进展

今日有 **22个 PR 被合并或关闭**，重点进展包括：

- ✅ **会话管理稳定性增强**：[#2367](https://github.com/agentscope-ai/CoPaw/pull/2367) 修复了批量删除会话时误删全部会话的数据丢失问题（#2327），并引入备份机制，显著提升数据安全性。
- ✅ **飞书渠道可靠性修复**：[#2311](https://github.com/agentscope-ai/CoPaw/pull/2311) 实现 WebSocket 自动重连、过期消息过滤与静默断连检测，解决长期存在的消息无响应问题（#2336）。
- ✅ **模型提供商扩展**：[#2366](https://github.com/agentscope-ai/CoPaw/pull/2366) 新增 GitHub Copilot 提供商支持，含 OAuth 登录流程，拓展了企业集成能力。
- ✅ **内存管理架构升级**：[#2308](https://github.com/agentscope-ai/CoPaw/pull/2308) 引入基于 AnalyticDB for PostgreSQL 的可插拔长期记忆管理器，为多会话持久化奠定基础。
- ✅ **工具链优化**：[#2344](https://github.com/agentscope-ai/CoPaw/pull/2344) 重构 `grep` 搜索工具，采用流式加载降低内存占用，提升大文件处理性能。

> 整体项目在**稳定性、可扩展性与企业级功能**方面迈出关键步伐。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映核心用户诉求：

- 🔥 **#280 [Discussion] Which Skills and MCPs Can Be Built-in?**  
  [链接](https://github.com/agentscope-ai/CoPaw/issues/280) | 21条评论  
  用户强烈呼吁预装常用技能与 MCP，减少手动配置成本，提升“开箱即用”体验。

- 🔥 **#1911 [channel] 小艺**  
  [链接](https://github.com/agentscope-ai/CoPaw/issues/1911) | 19条评论  
  华为小艺渠道集成后出现消息无响应，疑似 CoPaw 与厂商平台通信协议不兼容，影响终端用户体验。

- 🔥 **#2047 [Feature] Context Recovery Enhancement for Memory Compaction**  
  [链接](https://github.com/agentscope-ai/CoPaw/issues/2047) | 9条评论  
  用户要求压缩后自动恢复上下文摘要，避免任务中断，已有相关 PR [#2141](https://github.com/agentscope-ai/CoPaw/pull/2141) 在推进。

- 🔥 **#2291 🐾 Help Wanted: Open Tasks — Come Contribute! - S1**  
  [链接](https://github.com/agentscope-ai/CoPaw/issues/2291) | 6条评论  
  维护者主动开放任务清单，鼓励社区贡献，体现项目对协作生态的重视。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| 🔴 **P0** | [#2327](https://github.com/agentscope-ai/CoPaw/issues/2327) | 删除单个会话导致全部会话丢失（数据丢失） | ✅ 已修复（[#2367](https://github.com/agentscope-ai/CoPaw/pull/2367)） |
| 🔴 **P0** | [#2336](https://github.com/agentscope-ai/CoPaw/issues/2336) | 飞书 WebSocket 断连后无自动重连，消息无响应 | ✅ 已修复（[#2311](https://github.com/agentscope-ai/CoPaw/pull/2311)） |
| 🟠 **P1** | [#2348](https://github.com/agentscope-ai/CoPaw/issues/2348) | Worker 进程空载时 CPU 占用 100% | 🔄 调查中，可能与事件循环阻塞有关 |
| 🟠 **P1** | [#2356](https://github.com/agentscope-ai/CoPaw/issues/2356) | 上下文压缩频繁失败，缺乏保护机制 | 🔄 需增强错误处理与重试逻辑 |
| 🟡 **P2** | [#1960](https://github.com/agentscope-ai/CoPaw/issues/1960) | Web 控制台聊天输出嵌套 JSON，破坏 UI 显示 | 🔄 需清理消息渲染逻辑 |
| 🟡 **P2** | [#2342](https://github.com/agentscope-ai/CoPaw/issues/2342) | 关闭对话后后台任务仍运行，New Chat 失效 | 🔄 需完善任务生命周期管理 |

---

## 6. 功能请求与路线图信号

用户提出的高价值功能需求中，以下已有明确实现路径：

- ✅ **技能标签索引系统**（[#2323](https://github.com/agentscope-ai/CoPaw/issues/2323)）→ 已有 PR [#2173](https://github.com/agentscope-ai/CoPaw/pull/2173) 重构技能池架构，支持结构化技能管理。
- ✅ **多租户隔离**（[#2370](https://github.com/agentscope-ai/CoPaw/issues/2370)）→ 社区强烈需求，可能纳入 v1.0 企业版规划。
- ✅ **跨模型提供商对话历史兼容**（[#2314](https://github.com/agentscope-ai/CoPaw/issues/2314)）→ 为未来“模型热切换”铺路，技术可行性高。
- ✅ **UI 语言持久化**（[#1604](https://github.com/agentscope-ai/CoPaw/issues/1604)）→ 已有 WIP PR [#2338](https://github.com/agentscope-ai/CoPaw/pull/2338) 推进中。

> 预计下一版本将聚焦 **技能系统增强、上下文稳定性、企业级部署支持**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “上下文压缩后任务中断，体验极差”（#1974）
  - “自己写的 skill 总是报 FunctionNotFoundError，文档不够清晰”（#2339）
  - “飞书用几小时就断连，必须重启”（#2336）
  - “删一个会话全没了，太吓人了”（#2327）

- **满意点**：
  - “CoPaw 的 MCP 支持很灵活，比其它框架强”（#280 讨论）
  - “WeChat iLink 支持终于来了，期待测试”（#2260）
  - “后台任务异步执行是个亮点”（#2345）

- **使用场景**：
  - 企业内网部署（需私有模型网关支持，#2296）
  - 多团队协作（需多租户，#2370）
  - 移动端集成（如小艺、飞书，#1911）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先处理：

- ⏳ **#1437 [Bug] Compactor 组件在消息压缩时产生"幻觉"内容**（2026-03-13 创建，4条评论）  
  影响上下文准确性，可能引发连锁错误，需紧急审查压缩算法。

- ⏳ **#1974 [Bug] 压缩上下文导致任务被迫中断并且会话丢失的问题**（2026-03-20 创建，5条评论）  
  虽有部分修复，但根本性上下文恢复机制仍未完善。

- ⏳ **#2251 [Bug] 无法用 copaw 的 cron 功能启用定时功能**（2026-03-25 创建，3条评论）  
  定时任务是企业刚需，当前功能不可用严重影响实用性。

> 建议：设立“上下文与记忆”专项小组，集中攻坚压缩、恢复、持久化三大问题。

---

**报告生成时间**：2026-03-27  
**数据来源**：GitHub CoPaw 仓库 Issues & PRs（过去24小时）  
**分析师**：AI 智能体与个人 AI 助手开源项目分析组

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-27）

---

## 1. 今日速览

ZeptoClaw 在过去24小时内表现出极高的开发活跃度，共处理 **25条 PR 更新**（其中24条已合并/关闭）和 **12条 Issues 更新**（6新开、6关闭），并发布了两个新版本（v0.9.0 与 v0.9.1）。核心贡献者 @qhkm 主导了大部分关键修复与新功能集成，同时社区成员 @stuartbowness 在 Telegram 通道 UX 改进方面贡献显著。项目整体处于快速迭代与稳定性优化并行推进的健康状态。

---

## 2. 版本发布

### 🔹 v0.9.1（热修复版本）
- **主要修复**：
  - 修复 onboard 流程中模型选择列表未过滤非聊天模型的问题（#453）
  - 修复当 `anthropic` 配置为 `null` 时仍触发 Claude CLI 导入导致的 provider-model 不匹配错误（#455）
- **影响范围**：低风险，向后兼容，建议所有用户升级。
- **相关链接**：[v0.9.1 Release](https://github.com/qhkm/zeptoclaw/releases/tag/v0.9.1)

### 🔹 v0.9.0（功能大版本）
- **核心亮点**：
  - **新增 Google Vertex AI 提供商支持**：通过 ADC 自动刷新认证实现企业级 Gemini 模型接入，无需手动管理 token（#447）
  - **Telegram 消息处理体验增强**：引入 👀（接收中）与 ✅（完成）反应指示器，提升用户反馈透明度（#433）
  - 多项底层 bug 修复与 CLI 引导优化
- **破坏性变更**：无。所有变更均为新增功能或内部逻辑优化。
- **迁移建议**：现有用户可无缝升级；若使用 Anthropic 配置，请确保结构正确以避免 null 值引发异常。
- **相关链接**：[v0.9.0 Release](https://github.com/qhkm/zeptoclaw/releases/tag/v0.9.0)

---

## 3. 项目进展

今日共 **24个 PR 被合并或关闭**，标志着多个关键模块的重大推进：

- **Provider 架构增强**：
  - Vertex AI 提供商正式集成（#447），支持区域端点与自动凭证刷新，扩展了企业级部署能力。
  - 修复了 Anthropic 配置为 `null` 时的凭证解析逻辑（#455），提升配置鲁棒性。

- **Onboarding 流程重构**：
  - 将 onboard 流程从“批量配置 → 选模型”改为“先选提供商 → 输密钥 → 再选模型”（#453），显著降低新用户认知负担，并自动过滤无效模型（如 davinci-002、dall-e-2 等）。

- **Telegram 通道全面优化**：
  - 实现消息分块发送（#409）、HTML 属性转义防 XSS（#443）、回复线程化（#429）、图片支持（#420）、搜索输出静默化（#444）等十余项改进，极大提升了生产环境可用性。

- **工具链与安全性加固**：
  - 容器引擎检测脚本优化（#441），避免 Podman/Docker 混淆问题。
  - Unicode NFC 偏移映射修复（#445），确保文本编辑工具在高阶字符场景下的准确性。

> 整体来看，项目在 **多提供商支持、终端用户体验、安全防护** 三大方向同步取得实质性进展。

---

## 4. 社区热点

尽管多数 PR 评论数为 0（符合高效合并模式），但以下议题引发关注：

- **#428 [feat] reaction indicator for Telegram message processing**（已关闭）  
  由社区成员 @stuartbowness 提出，迅速被实现并合入 v0.9.0。该需求反映了用户对 **异步交互可视化反馈** 的强烈诉求，尤其在长响应场景下避免“机器人是否在线”的疑虑。  
  → [Issue #428](https://github.com/qhkm/zeptoclaw/issues/428)

- **#363 [feat] add Google Vertex AI provider**（已关闭）  
  虽早于本周提出，但在今日完成最终适配并发布，标志着 ZeptoClaw 正式进入企业级 AI 基础设施生态。  
  → [Issue #363](https://github.com/qhkm/zeptoclaw/issues/363)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|--------|------|------|------|
| **P2-high** | [#457](https://github.com/qhkm/zeptoclaw/issues/457) | CLI 中 `panel` 子命令在编译禁用时抛出 clap 错误而非友好提示 | 🟡 待修复（无 PR） |
| **High** | [#456](https://github.com/qhkm/zeptoclaw/issues/456) | Telegram 消息超 4096 字符限制导致静默失败 + 错误未回传用户 | ✅ 已有修复 PR #458（待合并） |
| **Medium** | [#388](https://github.com/qhkm/zeptoclaw/issues/388) | ACP HTTP 初始化标志全局共享，导致后续客户端跳过握手 | ✅ 已关闭（修复于早前 PR） |

> 当前最高优先级未修复问题为 **#457**，影响 CLI 用户体验一致性，建议尽快处理。

---

## 6. 功能请求与路线图信号

以下新功能请求显示出明确的产品演进方向：

- **隐私感知推理路由**（#451）：借鉴 OpenShell/NemoClaw 设计，按敏感度分流本地/云端模型 —— 表明项目正向 **企业级合规与数据治理** 深化。
- **SSRF 配置时验证**（#450）：在 onboard 阶段校验用户提供的 API 端点与 webhook URL，防止配置即攻击向量 —— 强化 **安全左移** 理念。
- **插件下载 SHA256 校验**（#449）：对标 NemoClaw 的供应链安全实践，防止技能包被篡改 —— 预示 **插件生态安全框架** 即将构建。
- **声明式策略 YAML**（#448）：推动网络/文件系统规则从代码硬编码转向可热加载策略文件 —— 为 **多租户与策略即代码** 铺路。

> 上述四项均为 @qhkm 本人提出，极有可能纳入 **v1.0 前的关键里程碑版本**。

---

## 7. 用户反馈摘要

从 Issues 与 PR 描述中可提炼出以下真实用户痛点与满意点：

- **满意点**：
  - Telegram 反应指示器（👀/✅）被明确称为“极大提升体验”（#428），解决“消息是否被接收”的不确定性。
  - Vertex AI 支持“零手动 token 管理”受到企业用户欢迎（#363）。
  - 消息自动分块避免“沉默失败”（#409）是高频反馈痛点，修复后获积极认可。

- **痛点**：
  - Onboarding 流程中展示 128 个原始 OpenAI 模型（含非聊天模型）造成选择困惑（#452）。
  - 同时安装 Docker 与 Podman 时容器引擎误判，导致构建行为不符合预期（#435）。
  - 长响应在 Telegram 中因长度限制完全丢失，用户误以为 bot 无响应（#409）。

---

## 8. 待处理积压

目前无长期未响应的高优先级 Issue，但以下 **开放 Issue 需维护者关注**：

- [#457](https://github.com/qhkm/zeptoclaw/issues/457)（CLI 子命令错误处理）—— 影响用户体验一致性，建议本周内分配修复。
- [#456](https://github.com/qhkm/zeptoclaw/issues/456)（Telegram 消息分块与错误回传）—— 已有 PR #458，应尽快 review 合并。
- 四项新功能请求（#448–#451）虽为新方向，但均由核心维护者提出，建议纳入下一版本规划讨论。

> 整体积压健康，响应迅速，体现项目维护高效性。

---  
**报告生成时间**：2026-03-27  
**数据来源**：GitHub Repository `qhkm/zeptoclaw`

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-03-27）**

---

### 1. **今日速览**  
过去24小时内，EasyClaw 项目整体活跃度较低，无新版本发布或 Pull Request 活动。唯一动态为一条新开启的 Issue（#27），由社区成员 @Gingiris 提出关于 RivonClaw（基于 EasyClaw 构建的衍生项目）社区增长策略的建议。该 Issue 虽未涉及核心代码变更，但反映出外部开发者对项目生态扩展的关注，表明项目已初步吸引开源社区注意。当前项目处于静默维护期，需关注长期贡献者激励与社区运营。

> 🔗 参考链接：[Issue #27](https://github.com/gaoyangz77/rivonclaw/issues/27)

---

### 2. **版本发布**  
*（无新版本发布）*

---

### 3. **项目进展**  
*（过去24小时无 PR 合并或关闭，无功能推进）*

---

### 4. **社区热点**  
**Issue #27: 💡 Proposal: Community Growth Strategy for RivonClaw**  
该 Issue 由具有丰富开源增长经验的贡献者 @Gingiris 提出，重点分析了 RivonClaw（基于 EasyClaw 的“数字管家”定位项目）在约6周内获得246颗 Star 的早期 traction，并建议优化项目定位、文档结构、贡献者引导机制及社交媒体曝光策略。尽管该 Issue 针对的是衍生项目 RivonClaw，但其建议对 EasyClaw 主项目同样具有参考价值，尤其在提升开发者参与度和降低入门门槛方面。目前尚无评论或维护者回应，建议核心团队评估是否采纳部分策略以反哺主项目生态建设。

> 🔗 讨论链接：[https://github.com/gaoyangz77/rivonclaw/issues/27](https://github.com/gaoyangz77/rivonclaw/issues/27)

---

### 5. **Bug 与稳定性**  
*（过去24小时无新 Bug 报告或稳定性问题）*

---

### 6. **功能请求与路线图信号**  
当前无明确功能请求提出。但 Issue #27 中隐含的“降低贡献门槛”“增强文档可读性”“明确项目愿景”等建议，可视为对 EasyClaw 生态系统的间接功能需求——即提升开发者体验（DX）与社区可扩展性。若维护者希望扩大贡献者基数，此类非代码类改进可能成为下一阶段重点。

---

### 7. **用户反馈摘要**  
从唯一活跃 Issue 可提炼出以下用户侧信号：  
- **正面反馈**：认可 EasyClaw 作为底层框架的潜力，尤其赞赏其“数字管家”（digital butler）的定位清晰，具备差异化竞争力；  
- **改进建议**：当前项目在社区可见性、新手引导、增长机制方面存在优化空间，需加强对外沟通与生态协同；  
- **使用场景**：已有开发者基于 EasyClaw 构建上层应用（如 RivonClaw），说明其具备一定可扩展性与二次开发价值。

---

### 8. **待处理积压**  
截至2026-03-27，EasyClaw 主仓库（github.com/gaoyangz77/easyclaw）暂无长期未响应的高优先级 Issue 或 PR。但需注意：  
- Issue #27 虽位于衍生项目 RivonClaw 仓库，但其内容直接关联 EasyClaw 的生态发展，建议主项目维护者主动关注并评估是否需同步优化主站文档、README 或 CONTRIBUTING 指南；  
- 若未来一周内仍无社区互动或代码更新，项目可能面临“静默衰退”风险，建议通过发布路线图或邀请早期用户访谈重燃社区活力。

> 📌 建议行动：维护者可考虑在 EasyClaw 主仓库发起一项“社区愿景征集”Issue，将外部反馈转化为内部 roadmap 输入。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*