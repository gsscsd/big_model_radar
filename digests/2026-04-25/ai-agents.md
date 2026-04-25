# OpenClaw 生态日报 2026-04-25

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-25 01:11 UTC

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

# OpenClaw 项目动态日报（2026-04-25）

---

## 1. 今日速览

过去24小时内，OpenClaw 社区活跃度显著回升，共处理 **500条 Issues** 和 **500条 PRs**，其中 **476个 Issue 被关闭**、**350个 PR 被合并或关闭**，显示出高效的维护节奏。项目发布了 **4个新版本**（含稳定版与 Beta 版），主要集中在 OpenAI 和 OpenRouter 图像生成能力的集成优化。尽管存在大量回归性 Bug 报告（主要源于 2026.3.12 版本），但核心团队响应迅速，多数高优先级问题已闭环。整体项目健康度良好，处于快速迭代修复阶段。

---

## 2. 版本发布

### ✅ v2026.4.23（稳定版）及 Beta 系列（v2026.4.23-beta.4 ~ beta.6）
**核心更新内容：**
- **Providers/OpenAI**: 通过 Codex OAuth 支持图像生成与参考图像编辑功能，使 `openai/gpt-image-2` 可在无 `OPENAI_API_KEY` 环境下运行（[#70703](https://github.com/openclaw/openclaw/issues/70703)）。
- **Providers/OpenRouter**: 新增 `image_generate` 接口支持，实现对 OpenRouter 图像模式的原生调用。

**影响范围：**
- 此更新为非破坏性增强，但依赖 Codex OAuth 配置；未配置用户需确保使用有效 API Key 或完成 OAuth 绑定。
- 图像生成功能现可在更多提供商上启用，提升多模态交互能力。

> 📌 相关链接：[v2026.4.23 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.4.23)

---

## 3. 项目进展

今日合并/关闭的重要 PR 聚焦于 **稳定性修复、安全加固与多通道支持增强**：

| PR | 类型 | 关键贡献 |
|----|------|--------|
| [#71312](https://github.com/openclaw/openclaw/pull/71312)（已合并） | WebChat UI | 隐藏遗留运行时提示文本泄漏，提升会话隐私性 |
| [#70367](https://github.com/openclaw/openclaw/pull/70367)（已合并） | Cron 系统 | 修复缺失 `sessionTarget` 导致的网关崩溃问题 |
| [#71287](https://github.com/openclaw/openclaw/pull/71287)（已合并） | CLI 运行时 | 正确合并用户 MCP 服务器配置至 Claude-CLI 捆绑包 |
| [#71303](https://github.com/openclaw/openclaw/pull/71303)（已合并） | 诊断系统 | 强化 Discord 元数据抓取与敏感头信息脱敏 |
| [#69228](https://github.com/openclaw/openclaw/pull/69228)（已合并） | 浏览器控制 | 支持按配置文件覆盖 headless 模式 |

> 项目整体在 **错误恢复、配置安全、跨通道一致性** 方面取得实质性进展，为后续多模态与生产部署打下基础。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥10）

| Issue | 主题 | 社区诉求分析 |
|------|------|-------------|
| [#45504](https://github.com/openclaw/openclaw/issues/45504)（18 评论） | CLI 设备命令在本地回环网关失效 | 用户强烈要求修复 2026.3.12 引入的 CLI-Gateway 握手回归问题，影响自动化脚本与设备管理 |
| [#45046](https://github.com/openclaw/openclaw/issues/45046)（12 评论） | 工具调用被模拟而非真实执行 | 开发者反馈智能体“假装”调用工具（输出文本而非结构化 `tool_calls`），破坏工作流可靠性 |
| [#40868](https://github.com/openclaw/openclaw/issues/40868)（10 评论，未关闭） | 隔离会话 Cron 任务超时 | 长期未解问题，用户呼吁明确是否与资源隔离或上下文加载机制有关 |

> 社区核心诉求：**CLI 稳定性 > 工具调用正确性 > 多会话调度可靠性**，反映用户对“可预测行为”的高度依赖。

---

## 5. Bug 与稳定性

### ⚠️ 高严重性回归问题（2026.3.12+ 引入）

| Issue | 严重程度 | 状态 | 关联 Fix PR |
|------|--------|------|------------|
| [#44718](https://github.com/openclaw/openclaw/issues/44718) | 🚨 崩溃 | ✅ 已关闭 | 模型别名初始化顺序修复（隐含于近期合并） |
| [#45962](https://github.com/openclaw/openclaw/issues/45962) | 🚨 OOM 崩溃 | ✅ 已关闭 | 内存优化与懒加载策略调整 |
| [#45560](https://github.com/openclaw/openclaw/issues/45560) | 🔴 CLI 握手失败 | ✅ 已关闭 | 网关探针逻辑重构 |
| [#45287](https://github.com/openclaw/openclaw/issues/45287) | 🔴 升级回滚 | ✅ 已关闭 | `memory-core` 插件依赖修复 |
| [#45750](https://github.com/openclaw/openclaw/issues/45750) | 🟠 Cron RPC 失败 | ✅ 已关闭 | WebSocket 重连策略优化 |

> 所有高优先级回归均已修复，建议用户升级至 **v2026.4.23** 或更高版本。

---

## 6. 功能请求与路线图信号

### 🔮 潜在新功能方向（基于活跃 Issue/PR）

| 功能方向 | 支持证据 | 落地可能性 |
|--------|--------|----------|
| **多智能体 WebChat 切换** | [#45086](https://github.com/openclaw/openclaw/issues/45086)（7 评论，👍3） | ⭐⭐⭐⭐ 高（已有设计讨论） |
| **Scoped Mention 策略** | [#70864](https://github.com/openclaw/openclaw/pull/70864)（开放中） | ⭐⭐⭐⭐ 高（PR 已提交，跨通道统一） |
| **上下文压力感知续接** | [#38780](https://github.com/openclaw/openclaw/pull/38780)（开放中） | ⭐⭐⭐ 中（复杂度高，但需求明确） |
| **WhatsApp 语音笔记预转录** | [#64120](https://github.com/openclaw/openclaw/pull/64120)（开放中） | ⭐⭐⭐⭐ 高（解决实际 DM 体验痛点） |

> 下一版本可能重点推进 **多智能体 UI 支持** 与 **通道级消息策略统一**。

---

## 7. 用户反馈摘要

### 💬 真实用户声音（来自 Issue 评论）

- **满意点**：
  - “Codex OAuth 集成太棒了！终于不用手动管理 API Key 了。” —— 图像生成用户
  - “v2026.4.23 修复了 CLI 崩溃，现在 `devices list` 正常了。” —— 运维用户

- **痛点**：
  - “升级到 3.12 后，Control UI 被巨大感叹号挡住，完全无法聊天。”（#45617）
  - “Cron 任务在隔离会话中永远超时，手动运行却正常，这太反直觉了。”（#40868）
  - “工具调用写成文本而不是 JSON，我的自动化流程全断了。”（#45046）

- **使用场景**：
  - 企业用户依赖 Cron + 隔离会话进行定时报告生成；
  - 开发者通过 CLI 批量管理设备与网关状态；
  - 多通道用户期望 Discord/Telegram/WebChat 会话统一归并。

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项

| Issue/PR | 类型 | 积压时长 | 建议行动 |
|---------|------|--------|--------|
| [#40868](https://github.com/openclaw/openclaw/issues/40868) | Issue（Cron 隔离会话超时） | >7 天，10 评论 | 需明确根因：是资源限制、上下文加载还是调度器缺陷？ |
| [#38780](https://github.com/openclaw/openclaw/pull/38780) | PR（上下文续接功能） | >7 天，XL 规模 | 功能价值高，建议分配 reviewer 推进 |
| [#64120](https://github.com/openclaw/openclaw/pull/64120) | PR（WhatsApp 语音转录） | >15 天 | 通道关键体验修复，建议优先合并 |

> 🔔 **维护者提醒**：请关注 #40868 的根因分析，避免同类调度问题再次发生。

---

**报告生成时间**：2026-04-25  
**数据来源**：OpenClaw GitHub Repository（github.com/openclaw/openclaw）  
**分析师**：AI 开源项目观察员

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-04-25）

---

## 1. 生态全景

2026年4月下旬，个人 AI 助手与自主智能体开源生态呈现**高活跃度、强工程化、多模态融合**三大特征。主流项目普遍进入 v2 架构迭代或稳定版本维护阶段，核心焦点从“功能堆叠”转向**稳定性、安全隔离、多通道一致性**等生产级能力。OpenAI Codex OAuth、DeepSeek V4 系列、本地 LLM 集成成为新一轮技术采纳热点，反映出开发者对**去中心化部署**与**多 Provider 兼容**的迫切需求。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 新版本发布 | 健康度评估 |
|------|---------------|------------|-------------|--------------|
| **OpenClaw** | 500（476 关闭） | 500（350 合并） | ✅ 4 个（含稳定版） | ⭐⭐⭐⭐☆（快速迭代修复） |
| **NanoBot** | 16（6 关闭） | 42（34 合并） | ❌ | ⭐⭐⭐⭐（工程成熟） |
| **Zeroclaw** | 50（46 新开） | 50（26 合并） | ❌ | ⭐⭐⭐⭐☆（高强度开发） |
| **PicoClaw** | 12（8 新开） | 38（19 合并） | ✅ Nightly | ⭐⭐⭐⭐（功能增强中） |
| **NanoClaw** | 15（8 关闭） | 37（26 合并） | ❌ | ⭐⭐⭐⭐（v2 架构落地） |
| **IronClaw** | 16（14 新开） | 50（7 合并） | ❌ | ⭐⭐⭐⭐☆（架构深化） |
| **LobsterAI** | 3 | 42（全合并） | ✅ 2 个 | ⭐⭐⭐⭐⭐（高效交付） |
| **Moltis** | 10（7 关闭） | 30（28 合并） | ❌ | ⭐⭐⭐⭐（安全/配置升级） |
| **CoPaw** | 50（22 关闭） | 50（35 合并） | ✅ 2 个 | ⭐⭐⭐⭐（快速响应） |
| **ZeptoClaw** | 1 | 1（0 合并） | ❌ | ⭐⭐⭐（低活跃，探索期） |
| **EasyClaw** | 0 | 0 | ✅ v1.8.9（文档更新） | ⭐⭐⭐（维护模式） |
| **TinyClaw / Moltis** | 0 | 0 | ❌ | ⭐⭐（静默） |

> 注：健康度综合考量响应速度、Bug 修复效率、架构演进与社区互动。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中最具综合竞争力的核心参照项目**，其优势体现在：
- **社区规模最大**：单日处理 500+ Issues/PRs，远超同类（次高为 CoPaw/Zeroclaw 的 50 条）；
- **发布节奏最快**：24h 内发布 4 个版本，涵盖稳定版与 Beta，展现强大 CI/CD 能力；
- **多模态集成领先**：率先完成 OpenAI + OpenRouter 图像生成原生支持，并通过 Codex OAuth 实现无 Key 运行；
- **回归修复高效**：所有 S1 级 Bug（CLI 握手、OOM、Cron 崩溃）均已闭环，体现成熟运维体系。

相较之下，NanoBot、PicoClaw 更侧重轻量化与嵌入式场景，而 LobsterAI、CoPaw 虽发布频繁但社区规模较小。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多 Provider 容灾与 Failover** | NanoBot (#3376)、Zeroclaw (#5459)、IronClaw (#2951) | 跨模型/服务商自动切换，避免单点故障 |
| **本地 LLM 无缝集成** | NanoClaw (#1995)、LobsterAI (#1787)、CoPaw (#3797) | 支持 llama.cpp/vLLM/LM Studio 一键接入 |
| **工具调用可靠性** | OpenClaw (#45046)、Zeroclaw (#5584)、PicoClaw (#2648) | 确保 `tool_calls` 结构化输出，杜绝“模拟调用” |
| **配置安全与密钥管理** | Moltis (#867)、IronClaw (#2946) | 避免明文存储 API Key，支持环境变量/加密 |
| **移动端 UX 优化** | PicoClaw (#2376)、IronClaw (#1344) | 禁用 Enter 发送、改进导航与输入体验 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 |
|------|--------|--------|-------------|
| **OpenClaw** | 多模态交互、企业级通道集成 | 开发者/运维/企业用户 | 插件化 Provider + 多通道网关 |
| **NanoBot** | 轻量部署、多实例隔离 | 中小企业/个人开发者 | Python 微服务 + 懒加载 |
| **Zeroclaw** | 工具调用稳定性、Ollama 原生支持 | 本地私有化用户 | Rust + 沙箱化执行 |
| **PicoClaw** | 嵌入式/IoT 工具链 | 硬件开发者 | MCP 工具优先 + 串口支持 |
| **LobsterAI** | 多机器人 IM 中枢 | 企业消息自动化 | 统一技能系统 + 多平台 Bot |
| **Moltis** | 安全沙箱、子代理协作 | 安全敏感型组织 | Landlock + 分层配置 |
| **CoPaw** | 长期记忆、CJK 语言优化 | 东亚语言用户 | 向量记忆 + 自动摘要 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 量 + 频繁发布）：  
  **OpenClaw、CoPaw、LobsterAI** 处于功能爆发期，日均处理 50+ PRs，侧重 Bug 修复与新模型集成。
  
- **质量巩固阶段**（高合并率 + 架构优化）：  
  **NanoClaw、IronClaw、Moltis** 聚焦 v2 架构落地、安全加固与配置系统重构，发布节奏放缓但工程深度提升。

- **探索/维护阶段**（低活跃度）：  
  **ZeptoClaw、EasyClaw** 以兼容性修复和文档更新为主，适合特定 niche 用户。

---

## 7. 值得关注的趋势信号

1. **“无 Key 化”成为新标配**：Codex OAuth（OpenClaw）、本地模型直连（LobsterAI）降低使用门槛，预示未来主流项目将默认支持免 API Key 模式。
2. **工具调用标准化迫在眉睫**：多个项目报告“文本模拟调用”问题，亟需社区推动 `tool_calls` JSON Schema 统一规范。
3. **企业级通道需求激增**：飞书（ZeptoClaw）、钉钉（CoPaw）、Wecom（Zeroclaw）集成请求密集，反映 AI 助手正从个人工具向组织基础设施演进。
4. **安全隔离从可选变必选**：Landlock（Moltis）、shell 防护（CoPaw）、HMAC 收据（Zeroclaw）等特性被高频讨论，**可信执行环境**将成为下一轮竞争焦点。

> **对开发者的建议**：优先选择具备活跃社区、明确回归修复 SLA、支持多 Provider 的项目（如 OpenClaw、CoPaw）；若专注本地部署，可关注 Zeroclaw 或 PicoClaw 的 MCP 工具链生态。

---  
**报告生成时间**：2026-04-25  
**分析师**：AI 开源项目观察员

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-04-25）

---

## 1. 今日速览

NanoBot 项目在过去24小时内保持高活跃度，共处理 **42 条 PR 更新**（34 条已合并/关闭，8 条待合并）和 **16 条 Issues 更新**（6 条已关闭，10 条新开/活跃），显示出社区贡献与问题反馈的双向活跃。尽管无新版本发布，但核心功能持续优化，重点集中在 **稳定性修复、多通道支持增强与性能优化** 上。项目整体处于快速迭代与工程化成熟阶段，维护响应及时，技术债清理与用户体验改进并行推进。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.5.post2`，团队正集中修复该版本引入的回归问题（如内存占用、流式响应中断等），预计下一版本将包含多项关键修复。

---

## 3. 项目进展

今日共 **34 条 PR 被合并或关闭**，其中多项为高价值功能与关键修复：

- **🔧 稳定性与容错能力提升**  
  - [`#3428`](https://github.com/HKUDS/nanobot/pull/3428)：为 LLM 请求添加超时机制，防止因 API 挂起导致会话锁死（修复 #3424），显著提升 agent 响应可靠性。  
  - [`#3423`](https://github.com/HKUDS/nanobot/pull/3423)：实现文档解析库的懒加载（`pypdf`、`openpyxl` 等），降低启动内存约 25MB，解决 #3422 报告的性能问题。

- **📹 多媒体支持扩展**  
  - [`#3429`](https://github.com/HKUDS/nanobot/pull/3429)：Telegram 通道支持视频直传（`send_video`）与流媒体播放，替代原文件附件形式，提升用户体验。  
  - [`#3430`](https://github.com/HKUDS/nanobot/pull/3430)：WebUI 支持视频附件渲染，通过签名 URL 安全展示 bot 生成的视频内容。

- **🛡️ 安全与工程化改进**  
  - [`#1403`](https://github.com/HKUDS/nanobot/pull/1403)：默认拒绝未授权访问（`is_allowed` 拒绝-by-default 策略），防止通道配置遗漏导致的安全风险。  
  - [`#1272`](https://github.com/HKUDS/nanobot/pull/1272)：引入 Ruff + Pre-commit 自动化代码质量管控，提升长期可维护性。

- **🔄 多实例与部署优化**  
  - [`#1435`](https://github.com/HKUDS/nanobot/pull/1435)：支持多 workspace 隔离运行，允许同时部署多个 NanoBot 实例，满足企业级多租户需求。

> ✅ 项目整体在 **稳定性、安全性、可扩展性** 三个维度均有实质性推进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 讨论焦点 |
|------|------|--------|
| [`#3376`](https://github.com/HKUDS/nanobot/issues/3376) | 支持模型异常自动切换（Failover） | 用户强烈呼吁在多 Provider 配置下实现跨模型/服务商的自动容灾切换，而非仅单 Provider 内重试。反映生产环境对高可用的迫切需求。 |
| [`#3421`](https://github.com/HKUDS/nanobot/issues/3421) | 提议添加 `nanobot update` 命令 | 用户希望简化升级流程，避免手动执行 `pip install --upgrade`，体现对 CLI 体验一致性的期待。 |
| [`#3309`](https://github.com/HKUDS/nanobot/issues/3309) | Telegram 群组策略按聊天覆盖 | 用户需在不同群组设置不同响应策略（如公开 vs 仅提及），当前全局策略限制使用灵活性。 |

> 💡 社区核心诉求：**提升系统鲁棒性、降低运维成本、增强多场景适配能力**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 问题 | 严重性 | 状态 | 关联 PR |
|------|--------|------|--------|
| [`#3424`](https://github.com/HKUDS/nanobot/issues/3424)：LLM 调用挂起导致 agent 死锁 | ⚠️ 高（服务不可用） | ✅ 已修复 | [`#3428`](https://github.com/HKUDS/nanobot/pull/3428) |
| [`#3410`](https://github.com/HKUDS/nanobot/issues/3410)：v0.1.5.post2 内存占用激增（~600MB） | ⚠️ 高（资源消耗） | ✅ 已缓解 | [`#3423`](https://github.com/HKUDS/nanobot/pull/3423) |
| [`#3426`](https://github.com/HKUDS/nanobot/issues/3426)：OpenAI Codex 流式 `_progress` 中断（回归） | ⚠️ 中（体验降级） | 🔄 调查中 | 无 |
| [`#3417`](https://github.com/HKUDS/nanobot/issues/3417)：Anthropic Opus 4.7 因硬编码 `temperature` 报错 | ⚠️ 中（兼容性问题） | ✅ 已修复 | （隐含于 provider 更新） |
| [`#2568`](https://github.com/HKUDS/nanobot/issues/2568)：Telegram Markdown 渲染不稳定 | ⚠️ 中（UI 异常） | 🔄 未解决 | 无 |

> ✅ 关键阻塞性问题已基本闭环，剩余问题多为体验优化类。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳可能性，已有相关 PR 或技术铺垫：

- **模型 Failover 机制**（#3376）：虽无直接 PR，但近期稳定性修复（如超时控制）为其打下基础，预计纳入 v0.1.6 路线图。
- **CLI 自更新命令**（#3421）：轻量级增强，符合开发者体验优化趋势，易实现且风险低。
- **MSTeams 线程回复修复**（#3431）：已有 [`#3432`](https://github.com/HKUDS/nanobot/pull/3432) 针对性修复，即将合并。
- **会话历史 token 预算管理**（#162 衍生）：[`#3427`](https://github.com/HKUDS/nanobot/pull/3427) 已引入 token 感知的 replay 切片，为智能会话管理铺路。

> 📌 下一版本可能聚焦：**高可用架构、多通道一致性、资源效率优化**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “升级后内存涨了3倍，服务器成本受不了”（#3410）→ 对资源效率敏感。
  - “DingTalk 发文件要拆两条消息，根本传不进来”（#3344）→ 平台集成存在协议级障碍。
  - “Claude Opus 4.7 完全用不了，报 400 错误”（#3417）→ 新模型兼容性滞后。

- **满意点**：
  - “v0.1.4.post5 的 Telegram Markdown 很稳定”（#2568）→ 用户认可历史版本质量。
  - “多实例支持终于来了，可以部署生产环境了”（#1435 评论）→ 对企业级部署价值肯定。

- **使用场景**：
  - 企业内部知识问答（DingTalk/Teams 集成）
  - 多模型 fallback 的生产对话机器人
  - 长期运行的自动化任务（cron skills）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先关注：

| Issue | 创建时间 | 状态 | 建议行动 |
|------|--------|------|--------|
| [`#2772`](https://github.com/HKUDS/nanobot/issues/2772)：微信通道仅支持返回10条消息 | 2026-04-03 | OPEN | 需评估 context token 限制是否可配置或分页 |
| [`#3344`](https://github.com/HKUDS/nanobot/issues/3344)：DingTalk 文件上传分离问题 | 2026-04-21 | OPEN | 需与钉钉 API 团队协作或提供 workaround |
| [`#2568`](https://github.com/HKUDS/nanobot/issues/2568)：Telegram Markdown 渲染回归 | 2026-03-27 | OPEN | 需复现并定位 v0.1.4.post6 → v0.1.5.post2 变更点 |

> ⚠️ 上述问题涉及核心通道功能，延迟处理可能影响用户留存。

---

**报告生成时间**：2026-04-25  
**数据来源**：GitHub Repository `HKUDS/nanobot`  
**分析师备注**：项目健康度良好，建议加强跨平台集成测试与回归防护机制。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-04-25）

---

## 1. 今日速览

过去24小时内，Zeroclaw 社区活跃度显著上升，共产生 **50条 Issues 更新**（新开/活跃46条，关闭4条）和 **50条 PR 更新**（待合并24条，已合并/关闭26条），显示出高强度开发与问题反馈节奏。尽管无新版本发布，但核心功能修复与架构优化持续推进，尤其在 **provider 兼容性、工具调用稳定性、多通道支持** 等关键路径上取得实质进展。社区对 **Ollama 工具调用失效、WhatsApp Web 通道配置错误、shell 安全策略误判** 等 S1 级问题高度关注，推动多项热修复进入合并流程。

---

## 2. 版本发布

**无新版本发布**。当前开发重心集中于 v0.6.9 发布后的稳定性修复与功能完善，预计下一版本将整合近期多项 provider 和通道修复。

---

## 3. 项目进展

今日共 **26个 PR 被合并或关闭**，重点推进以下方向：

- **工具调用修复**：  
  - #6093 修复模型返回“叙述文本+工具调用”时产生重复 assistant 消息的问题（关联 Issue #5584），提升对话一致性。  
  - #6092 实现 fallback provider 从配置读取 `api_key`、`base_url` 和 `name`，解决硬编码依赖（关联 Issue #6000）。  
  - #6027（已关闭）尝试启用 MiniMax 原生工具调用，虽未合并但为后续兼容性提供参考。

- **通道与网关增强**：  
  - #6080 为 webhook 端点启用工具支持，统一网关行为。  
  - #6088 实现 Telegram 媒体组（media-group）合并为单条请求，避免重复处理（替代旧 PR #5525）。  
  - #6013 修复 ACP 通道初始化时 `defaultModel` 回退逻辑，避免硬编码模型名。

- **配置与部署优化**：  
  - #6085 将 `session_ttl_hours` 默认值设为 168h（7天），防止会话无限累积。  
  - #6025 在 Debian Docker 镜像中集成 Web 仪表盘，提升本地开发体验。

> 整体项目在 **可靠性、可配置性、多通道一致性** 方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（附链接）

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | llamacpp provider 忽略配置对象 | 9 | 用户升级至 schema v2 后，自定义模型参数失效，回退到默认值，**阻塞工作流（S1）** |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | Ollama provider 硬编码 `tool_count=0` | 3 | 所有 Ollama 模型无法使用原生工具调用，**完全破坏功能（S1）**，社区强烈要求热修 |
| [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) | WhatsApp-Web 通道因 feature flag 缺失崩溃 | 4 | 配置后无法启动，报错提示需启用 `whatsapp-web` 编译特性，**部署受阻（S1）** |
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC：多代理 UX 流设计 | 4 | 社区对多代理路由、工作区隔离、通道绑定等高级功能提出架构级需求，推动路线图演进 |

> 分析：用户集中反馈 **provider 配置失效** 和 **工具调用中断** 问题，反映近期 schema 升级引入兼容性断裂；同时，**多代理、多通道绑定** 成为高阶用户核心诉求。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| **S1 - 工作流阻塞** | [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | Ollama provider 硬编码 `tool_count=0`，导致所有工具调用失败 | ✅ 已有修复方向（见 #6092 相关逻辑） |
| | [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) | WhatsApp-Web 通道因未启用编译特性而崩溃 | ⚠️ 需文档或构建脚本修复，暂无 PR |
| | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) | Ollama 调用失败导致会话卡死 | ✅ 与 #5459 同源，待修复 |
| **S2 - 功能降级** | [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | 模型返回叙述+工具调用时产生重复消息 | ✅ 已修复（#6093 合并） |
| | [#5285](https://github.com/zeroclaw-labs/zeroclaw/issues/5285) | GLM-5 模型“思考内容”泄漏至最终消息 | ⚠️ 未修复，影响输出纯净度 |
| **S3 - 次要问题** | [#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) | 小模型 summarization 超时（60s）导致上下文丢失 | ⚠️ 需配置化超时（见 #5752 进行中） |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 关联 PR | 纳入可能性 |
|--------|-------|--------|----------|
| **多代理路由与工作区隔离** | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | #5891（tracker） | ⭐⭐⭐ 高（已有 RFC 设计阶段） |
| **Wecom/WxWork 通道支持** | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | 无 | ⭐⭐ 中（依赖企业用户需求） |
| **Napcat/OneBot 通道** | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | 无 | ⭐ 低（社区小众，标记 no-stale） |
| **HMAC 工具执行收据（防幻觉）** | [#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) | 无 | ⭐⭐ 中（安全增强，已关闭但未实现） |
| **流式模式下屏蔽思考内容** | [#5318](https://github.com/zeroclaw-labs/zeroclaw/issues/5318) | 无 | ⭐ 低（中文用户提出，优先级待评估） |

> 信号：**多代理架构** 已成为社区共识，预计将作为 v0.7+ 核心特性推进；**企业级通道（Wecom）** 可能随 FINOS 生态合作提上日程。

---

## 7. 用户反馈摘要

- **痛点**：  
  - “升级 schema v2 后，我的 llamacpp 配置全被忽略，只能回退旧版。”（#5815）  
  - “Ollama 连工具都调不了，官方文档还说支持 native tool calling！”（#5459）  
  - “WhatsApp Web 配置完直接 crash，日志提示要加 feature flag，但没人告诉我怎么加。”（#4846）

- **满意点**：  
  - “Telegram 图片组终于不重复处理了，感谢 #6088！”  
  - “session_ttl 默认7天很合理，之前会话堆积到几千条。”

- **使用场景**：  
  - 量化投资分析（InvestorClaw）、多账号客服机器人、本地私有化部署（Windows/Linux）、Telegram/WhatsApp 自动化。

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 状态 | 提醒 |
|---------|------|--------|------|------|
| [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Bug（S1） | 2026-04-14 | in-progress | shell sandbox 阻断 Python 技能，影响 FINOS 合规项目，需优先修复 |
| [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | Bug（S2，安全） | 2026-04-16 | in-progress | `git -C` 被误判为 `-c`，安全策略需精细化 |
| [#5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) | Bug（S1） | 2026-04-04 | in-progress | Bedrock provider 错误发送 `x-api-key`，应仅用 SigV4 |
| [#5117](https://github.com/zeroclaw-labs/zeroclaw/issues/5117) | Bug（S1） | 2026-03-29 | in-progress | Mistral tool_call.id 格式错误，需对齐 provider 规范 |
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) | PR（XL） | 2026-04-16 | open | i18n 与文档 overhaul，长期价值高但 review 负担重，建议分阶段合并 |

> 建议维护者优先处理 **#5722、#5289、#5117** 等 S1 级 provider 兼容性问题，避免用户流失。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
活跃开发，响应迅速，但需警惕 **provider 生态兼容性** 和 **安全策略误杀** 对用户体验的冲击。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-04-25）

---

## 1. 今日速览

PicoClaw 在 2026-04-24 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共产生 **38 条 PR 更新**（19 条已合并/关闭，19 条待合并）和 **12 条 Issues 更新**（8 条新开/活跃，4 条已关闭），显示出强劲的开发节奏与用户参与度。项目发布了一个新的 nightly 版本（`v0.2.7-nightly.20260425.8d51d306`），聚焦于修复关键 Bug 并增强工具链稳定性。整体项目健康度良好，Bug 修复与功能增强并重，尤其在 **MCP 工具集成、WebUI 体验优化、DeepSeek 推理兼容性** 等方面取得显著进展。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.7-nightly.20260425.8d51d306`
- **类型**：自动化 nightly 构建（非稳定版，谨慎使用）
- **主要更新内容**：
  - 修复 DeepSeek 模型在工具调用后推理内容顺序错误导致的 400 错误（#2648）
  - 优化 WebUI 中 agent reasoning 与用户回复的显示分离（#2448 已关闭）
  - 增强 MCP 工具调用时的空对象处理，避免 `null` 传递（#2666）
  - 改进配置保存反馈机制，提升用户操作感知（#2663）
  - 修复 Windows 启动时控制台窗口闪退问题（#2654）
- **破坏性变更**：无
- **迁移注意事项**：此为 nightly 版本，不建议生产环境使用；建议开发者用于测试即将发布的 v0.2.7 正式版功能。
- **完整变更日志**：[点击查看](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

---

## 3. 项目进展

今日共 **19 条 PR 被合并或关闭**，主要集中在 **Bug 修复、工具链稳定性提升与用户体验优化**：

| 类别 | 关键进展 |
|------|--------|
| **工具系统** | 修复 MCP 工具调用中 `null` 参数问题（#2666）、工具反馈 JSON 格式化（#2660）、HTTP/SSE 会话丢失重试机制（#2664） |
| **WebUI/Channel** | 新增“思维可见性”切换开关（#2661）、修复思维气泡折叠状态共享问题（#2659）、配置保存反馈增强（#2663） |
| **Agent 核心** | 引入 Prompt 分层机制（#2656）、修复 DeepSeek 推理历史持久化（#2657）、恢复统一内核基线（#2655） |
| **构建与部署** | 修复 Windows 构建流程（#2487 已合并）、隐藏 launcher 控制台闪屏（#2654） |
| **安全** | 加固 WebSocket CheckOrigin 防止 CSWSH 攻击（#2256 已合并） |

> ✅ 项目整体向 **v0.2.7 正式版** 迈出关键一步，尤其在多模型兼容性、工具调用可靠性、跨平台体验方面显著提升。

---

## 4. 社区热点

### 🔥 高关注度 Issues / PRs

| 编号 | 标题 | 类型 | 评论数 | 链接 |
|------|------|------|--------|------|
| #2376 | [Feature] Option to disable 'Enter' key from sending messages | 功能请求 | 3 | [查看](https://github.com/sipeed/picoclaw/issues/2376) |
| #2404 | Add in config to send streaming HTTP request | 功能请求 | 2 | [查看](https://github.com/sipeed/picoclaw/issues/2404) |
| #2651 | How to build on windows? | 构建问题 | 2 | [查看](https://github.com/sipeed/picoclaw/issues/2651) |
| #2663 | feat: improve config save and restart feedback | PR | 0（刚提交） | [查看](https://github.com/sipeed/picoclaw/pull/2663) |

#### 分析：
- **移动端输入体验**（#2376）成为焦点：Android 用户强烈呼吁支持“Enter 换行、独立发送按钮”，反映 WebUI 在移动设备上的交互缺陷。
- **流式请求支持**（#2404）被多次提及，用户希望像 OpenAI SDK 一样通过配置启用 `stream: true`，表明对低延迟响应的需求上升。
- **Windows 构建文档缺失**（#2651）暴露跨平台支持短板，需补充官方指南。

---

## 5. Bug 与稳定性

### ⚠️ 今日报告的关键 Bug（按严重性排序）

| 编号 | 问题描述 | 影响范围 | 是否有 Fix PR |
|------|--------|--------|--------------|
| #2648 | DeepSeek 工具调用后推理内容顺序错误导致 400 错误 | 高（阻断对话连续性） | ✅ 有（#2657） |
| #2650 | DeepSeek-V4-Flash 开启推理后调用工具报错 | 高（功能不可用） | ❌ 无（待分析） |
| #2665 | Anthropic 模型下拉框使用错误 ID（点号 vs 短横线） | 中（UI 误导） | ❌ 无 |
| #2616 | DuckDuckGo 未启用时 web_search 工具无法注册 | 中（国际用户无法搜索） | ✅ 已修复（#2573 已合并） |
| #2572 | Launcher UI 语言变更污染全局 web_search 路由 | 中（多用户干扰） | ✅ 已修复（#2573） |

> 🔍 建议优先处理 #2650 和 #2665，前者影响核心推理流程，后者易引发用户配置困惑。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能请求（可能纳入 v0.2.8 或 v0.3.0）

| 编号 | 功能 | 用户诉求 | 已有相关 PR |
|------|------|--------|------------|
| #2649 | 添加串口（UART）工具支持 | 嵌入式开发者刚需，补全 I2C/SPI 生态 | ❌ 无（可启动） |
| #2652 | 支持 GitHub Copilot 作为 Provider | 开发者工具集成需求上升 | ❌ 无 |
| #2653 | 添加 MQTT Channel 支持 | IoT 场景扩展 | ✅ 有（#2653 刚提交） |
| #2404 | 配置化启用流式 HTTP 请求 | 提升响应体验 | ❌ 无（需设计） |
| #2376 | 禁用 Enter 发送消息 | 移动端 UX 改进 | ❌ 无（前端可实现） |

> 💡 **路线图建议**：  
> - 短期（v0.2.8）：优先实现 #2376（移动端 UX）、#2653（MQTT）、#2404（流式请求）  
> - 中期（v0.3.0）：评估 #2649（串口工具）、#2652（Copilot 集成）

---

## 7. 用户反馈摘要

### 🗣️ 真实用户声音提炼

- **痛点**：
  - “在 Android 上按 Enter 就发消息，根本无法换行！”（#2376）
  - “DeepSeek 一用工具就崩，只能清空会话重来”（#2650）
  - “WebUI 显示 agent 的内心独白和回复混在一起，完全看不懂”（#2448）
  - “Windows 上 build 一堆错误，文档也没说清楚”（#2651）

- **满意点**：
  - “MCP CLI 工具太方便了，终于不用手动改 JSON 了！”（#2641）
  - “思维气泡可以折叠了，界面清爽多了”（#2659）
  - “配置保存后有明确提示，体验好很多”（#2663）

- **使用场景**：
  - 嵌入式开发（I2C/SPI/串口调试）
  - 多模型切换（DeepSeek、Anthropic、Google）
  - 跨设备协同（手机 WebUI + PC Launcher）

---

## 8. 待处理积压

### ⏳ 长期未响应的重要 Issue / PR

| 编号 | 标题 | 创建时间 | 状态 | 建议 |
|------|------|--------|------|------|
| #2531 | feat(tools): add delegate tool for cross-agent task handoff | 2026-04-15 | OPEN（9天） | 高价值功能，建议 review 并合并 |
| #1780 | Qq connection stability | 2026-03-19 | OPEN（36天） | 配置化重连参数，影响国内用户，需推进 |
| #2163 | fix: maintain OAuth scopes during Google Antigravity token refresh | 2026-03-29 | OPEN（26天） | 安全相关，建议优先处理 |
| #2499 | Secure third-party Pico WS access + versioned compatibility policy | 2026-04-13 | CLOSED（wontfix） | 虽关闭，但反映第三方集成需求强烈，建议重新评估 |

> 🛎️ **维护者提醒**：  
> - #2531（delegate tool）是 Phase 2 核心功能，应尽快 review  
> - #1780 和 #2163 涉及稳定性与安全，不宜长期搁置

---

**报告生成时间**：2026-04-25  
**数据来源**：[PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw)  
**分析师**：AI 开源项目观察员

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-04-25）

---

## 1. 今日速览

NanoClaw 在 v2 架构发布后进入高强度迭代阶段。过去24小时内，项目表现出极高的开发活跃度：共处理 **37 条 PR**（26 条已合并/关闭，11 条待合并）和 **15 条 Issues**（8 条关闭，7 条新开），反映出团队正集中修复 v2 迁移过程中的关键问题并推进新功能落地。社区反馈密集，主要集中在 v2 安装流程、自定义 LLM 端点支持及工具调用可观测性等方向。整体项目健康度良好，处于快速演进期。

---

## 2. 版本发布

**无新版本发布**。  
最新正式版本仍为 v2（发布于 2026-04-22），当前焦点集中于 v2 的稳定性修复与功能完善。

---

## 3. 项目进展

今日合并/关闭的 PR 主要围绕 **v2 架构的稳定性加固** 与 **可观测性增强**：

- **工具调用日志全面覆盖**：通过 [#1986](https://github.com/qwibitai/nanoclaw/pull/1986)、[#1990](https://github.com/qwibitai/nanoclaw/pull/1990) 等 PR，实现了对 CEO/ops 主机侧代理的工具调用事件捕获，填补了此前仅容器内 worker 代理可观测的空白，显著提升系统透明度。
- **自定义 OpenAI 兼容端点支持完善**：[#1994](https://github.com/qwibitai/nanoclaw/pull/1994) 和 [#1995](https://github.com/qwibitai/nanoclaw/pull/1995) 分别修复了 Codex 提供者的路由逻辑，并新增 `/add-local-llama` 技能，使本地部署的 llama.cpp、vLLM 等模型可无缝接入。
- **安装流程健壮性提升**：[#1987](https://github.com/qwibitai/nanoclaw/pull/1987) 在 `setup.sh` 中提前检测构建工具缺失，避免因 `better-sqlite3` 编译失败导致晦涩错误。
- **文档与架构清理**：[#1978](https://github.com/qwibitai/nanoclaw/pull/1978)、[#1979](https://github.com/qwibitai/nanoclaw/pull/1979) 等 PR 系统性清理了 pre-v2 架构残留文档，防止新用户混淆。

> 项目整体向“生产就绪的 v2”迈出关键一步，尤其在多代理可观测性和异构 LLM 支持方面取得实质性进展。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#1503 nanoclaw.dev has an invalid ssl cert right now](https://github.com/qwibitai/nanoclaw/issues/1503)（18 条评论）
尽管技术含量不高，但该 Issue 获得极高关注度，反映用户对官方文档站点可用性的强烈依赖。维护者需尽快修复证书问题以维持社区信任。

### 🚀 高价值功能讨论：[#1984 Provider support for custom/local OpenAI-compat endpoints](https://github.com/qwibitai/nanoclaw/issues/1984)
用户 @TeeJS 提出当前自定义端点支持存在实践障碍，尽管文档提及“BYO 端点”，但实际配置无法正确路由。此 Issue 直接催生了 [#1994](https://github.com/qwibitai/nanoclaw/pull/1994) 和 [#1995](https://github.com/qwibitai/nanoclaw/pull/1995) 两个关键 PR，体现社区驱动开发的高效性。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| ⚠️ 高 | [#1981 v2 setup: systemd misdetected as absent on headless Linux](https://github.com/qwibitai/nanoclaw/issues/1981) | SSH 会话中 systemd 被误判为缺失，导致服务启动失败 | ✅ 已有相关修复方向（见 [#1987](https://github.com/qwibitai/nanoclaw/pull/1987) 安装流程优化） |
| ⚠️ 高 | [#1982 V2 duplicate replies after pairing a second channel](https://github.com/qwibitai/nanoclaw/issues/1982) | Telegram 频道配对后消息重复回复，影响用户体验 | 🔄 调查中，尚无 fix PR |
| ⚠️ 中 | [#1973 v2 setup: register-claude-token.sh fails with "onecli not found"](https://github.com/qwibitai/nanoclaw/issues/1973) | PATH 未传递至 bash 子进程，导致 token 注册失败 | 🔄 可能与安装流程重构相关，待验证 |
| ⚠️ 中 | [#414 Linux: stale docker group detected but not remediated](https://github.com/qwibitai/nanoclaw/issues/414) | Docker 组更新后未重启会话，服务启动失败 | 📌 长期未修复，需维护者介入 |

> 注：多个“retracted” Issue（#1946–#1952）已安全关闭，无安全隐患。

---

## 6. 功能请求与路线图信号

- **本地 LLM 集成标准化**：用户强烈需求对 llama.cpp、vLLM 等本地推理引擎的一键接入。[#1995](https://github.com/qwibitai/nanoclaw/pull/1995) 新增 `/add-local-llama` 技能，预示该功能将成为 v2.1 核心特性。
- **每代理模型/提供者配置**：[#1968](https://github.com/qwibitai/nanoclaw/pull/1968) 实现端到端 per-agent 配置能力，允许不同代理使用不同模型（如 CEO 用 Claude，worker 用本地 Llama），标志架构向精细化控制演进。
- **实时活动监控面板**：工具调用日志系统（[#1986](https://github.com/qwibitai/nanoclaw/pull/1986)）为未来构建 `/activity` 命令和拓扑可视化打下基础，可能成为下一版本亮点。

---

## 7. 用户反馈摘要

- **痛点**：
  - v2 安装流程在 headless Linux 环境下存在 systemd 检测缺陷（[#1981](https://github.com/qwibitai/nanoclaw/issues/1981)）。
  - 多通道配对后消息重复（[#1982](https://github.com/qwibitai/nanoclaw/issues/1982)）严重影响生产使用。
  - 自定义 LLM 端点配置复杂，缺乏清晰指引（[#1984](https://github.com/qwibitai/nanoclaw/issues/1984)）。
- **满意点**：
  - 工具调用可观测性极大提升了调试效率（社区对 [#1986](https://github.com/qwibitai/nanoclaw/pull/1986) 反响积极）。
  - 文档清理工作（[#1978](https://github.com/qwibitai/nanoclaw/pull/1978) 等）被赞“终于不再混淆 v1/v2”。

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 说明 |
|---------|------|--------|------|
| [#414 Linux: stale docker group detected but not remediated](https://github.com/qwibitai/nanoclaw/issues/414) | Bug | >2个月 | 虽非高频问题，但影响 Linux 新用户首次体验，建议增加自动 remediation 提示 |
| [#1503 nanoclaw.dev SSL cert invalid](https://github.com/qwibitai/nanoclaw/issues/1503) | 运维 | >1个月 | 官方站点证书过期，损害项目专业形象，需立即处理 |

> 建议维护者优先处理 [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) 和 [#414](https://github.com/qwibitai/nanoclaw/issues/414)，以提升基础用户体验。

---  
**报告生成时间：2026-04-25**  
数据来源：NanoClaw GitHub 仓库（github.com/qwibitai/nanoclaw）

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-04-25）

---

## 1. 今日速览

IronClaw 项目在 2026-04-25 继续保持高活跃度，24 小时内产生 **16 条 Issues 更新**（14 新开，2 关闭）和 **50 条 PR 更新**（43 待合并，7 已合并/关闭），显示出核心团队与社区开发者对架构演进、Bug 修复和文档完善的高度投入。尽管无新版本发布，但多个关键功能（如 LLM 工具链解耦、Webhook 配置分离、Telegram 集成稳定性）正通过大型 PR 推进。项目整体处于 **工程深化与生产环境稳定性优化阶段**，技术债清理与用户体验改进并重。

---

## 2. 版本发布

**无新版本发布**。当前开发重心集中于 Engine V2 架构落地、多通道集成稳定性修复及配置系统重构，预计下一版本将包含这些重大变更。

---

## 3. 项目进展

今日有 **7 个 PR 被合并或关闭**，重点进展包括：

- **#2890（已合并）**：修复 NEAR AI 私有端点模型列表获取失败问题，支持区域子域名识别（如 `us.private-chat-stg.near.ai`），提升设置页模型加载可靠性。[链接](https://github.com/nearai/ironclaw/pull/2890)
- **#2463（已合并）**：统一 NEAR AI 工具 Schema 规范化逻辑，避免因 `oneOf`/`anyOf` 等结构导致 Provider 400 错误，增强 LLM 调用稳定性。[链接](https://github.com/nearai/ironclaw/pull/2463)
- **#1988（已合并）**：修复 CLI 中 MCP 工具描述截断时的 UTF-8 字符边界 panic 问题，提升多语言兼容性。[链接](https://github.com/nearai/ironclaw/pull/1988)
- **#2952（已关闭）**：调整响应结构，移除 `mission_id` 并增加金额范围校验，反映业务逻辑迭代。[链接](https://github.com/nearai/ironclaw/pull/2952)

此外，**#2951（XL 规模）** 正在审查中，旨在将 LLM 工具 Schema 处理拆分为“Provider 安全清理”与“严格可选字段重写”两个独立阶段，为多 Provider 支持奠定架构基础。[链接](https://github.com/nearai/ironclaw/pull/2951)

---

## 4. 社区热点

- **#2949（平台兼容性）**：用户报告 `x86_64-unknown-linux-gnu` 平台无预编译二进制，导致安装脚本失败。尽管 Release 页面存在对应资产，但自动化脚本未正确识别，暴露构建流水线与发布流程脱节。[链接](https://github.com/nearai/ironclaw/issues/2949)
- **#2946（配置优先级异常）**：用户反馈 `llm_backend` 在每次启动时被重置为 `nearai`，无视环境变量与配置文件设置，违背文档声明的 DB > env > file 优先级，影响本地开发与自定义部署。[链接](https://github.com/nearai/ironclaw/issues/2946)
- **#2934（配置解耦）**：提出将 Webhook 监听地址（`WEBHOOK_HOST/PORT`）与 HTTP 通道启用标志（`HTTP_ENABLED`）解耦，解决当前 `HTTP_HOST/PORT` 双重职责导致的配置混乱。已有对应 PR #2934 实现该功能。[链接](https://github.com/nearai/ironclaw/issues/2900) | [PR](https://github.com/nearai/ironclaw/pull/2934)

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|----------------|
| **高** | #2945 | 一次性登录链接创建后立即返回 "Unauthorized"，阻断新用户注册流程 | ❌ 无 |
| **高** | #2939 | TEE 升级后 Telegram Bot 停止响应，影响生产环境集成 | ❌ 无 |
| **中** | #2944 | Assistant 在提取/搜索失败后仍声称“创建成功”，误导用户 | ❌ 无 |
| **中** | #2943 | 工具调用后响应仅刷新后可见，破坏流式交互体验 | ❌ 无 |
| **中** | #2938 | TEE 升级后 Routines 标签页消失，功能不可见 | ❌ 无 |
| **低** | #2930 / #2929 | Canary 测试失败（openai-compatible / anthropic），可能反映 Provider 兼容性回归 | ⚠️ 需进一步排查 |

> 注：#2881（NEAR AI 模型列表为空）已通过 #2890 修复并合并。

---

## 6. 功能请求与路线图信号

- **移动端 UX 重构（#1344）**：长期悬而未决的移动端导航问题（侧边栏不可靠、无汉堡菜单）再次被提及，结合近期 Web 通道改进趋势，**有望纳入下一版本 UI 优化专项**。
- **Kernel/Extension 架构设计（#1741）**：核心开发者 @ilblackdragon 持续推动 OS 式最小内核 + DB 驱动扩展状态的设计，配套 PR #2953 提交架构反馈文档，**预示 Engine V2 将向模块化、可插拔方向深化**。
- **技能化替代 WASM 代理工具（#2904）**：用 SKILL.md 声明式技能替代 11 个 WASM HTTP 代理工具，简化集成流程，**代表“低代码集成”战略落地**，可能成为未来第三方服务接入标准路径。

---

## 7. 用户反馈摘要

- **痛点**：
  - 安装流程对 Linux 用户不友好，平台检测逻辑有缺陷（#2949）。
  - 配置系统行为与文档不符，`llm_backend` 重置问题严重影响自定义部署（#2946）。
  - Telegram 集成在升级后易失效，缺乏向后兼容性保障（#2939）。
  - 一次性登录链接失效阻碍新用户 onboarding（#2945）。
- **满意点**：
  - 本地开发环境中 NEAR AI 模型加载问题已修复（#2881 → #2890）。
  - 文档逐步完善，如数据库与配置页面即将上线（#2948）。
- **使用场景**：
  - 企业用户关注生产环境稳定性（TEE 升级影响）。
  - 开发者重视本地构建与配置灵活性（Rust 版本、自定义后端）。

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 说明 |
|---------|------|----------|------|
| **#1344** | Issue | >1 个月 | 移动端布局 redesign，P1 优先级但长期未分配 |
| **#1741** | Issue | >1 个月 | 内核/扩展架构设计，战略级议题需核心团队决策 |
| **#1764** | PR | >1 个月 | Abound 演示集成（XL 规模），涉及 Responses API 生产化，尚未合并 |
| **#1435** | PR | >1 个月 | PDF 提取库迁移至 `pdf_oxide`，性能优化但待 review |
| **#2335** | PR | >3 个月 | Cmd+K 命令面板（Omnisearch），前端增强功能长期 open |

> 建议维护者优先处理 #1344（用户体验）与 #1741（架构方向），并推动 #1764 进入合并流程以展示 Engine V2 能力。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度、积极的技术演进、部分生产环境 Bug 需紧急响应，整体处于稳健发展轨道。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-04-25）

---

## 1. 今日速览

LobsterAI 在 2026 年 4 月 24 日表现出极高的开发活跃度：**42 个 PR 全部合并/关闭，无待合并项**，表明团队高效推进功能迭代与问题修复；同时发布两个新版本（`2026.4.24` 和 `2026.4.23`），集成 DeepSeek V4 系列模型并优化多平台协作体验。社区反馈方面，共 3 条 Issue 更新，其中一条关于 DeepSeek V4 模型调用失败的 Bug 报告引发关注。整体项目处于**高速迭代、稳定交付**的健康状态。

---

## 2. 版本发布

### 🔹 LobsterAI `2026.4.24`（[Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.24)）
- **新增功能**：
  - 支持 `deepseek-v4-flash` 和 `deepseek-v4-pro` 模型（[#1812](https://github.com/netease-youdao/LobsterAI/pull/1812)）
  - 新增 `kimi-k2.6` 模型支持
- **体验优化**：
  - 搜索查询自动去除首尾空格并标准化输入（[#1811](https://github.com/netease-youdao/LobsterAI/pull/1811)）
  - 协作界面添加“清空”按钮，提升交互友好性

> ⚠️ **注意**：尽管已集成 DeepSeek V4 模型，但用户报告存在请求 schema 不兼容问题（见下文 Bug 部分），建议暂缓生产环境启用，等待热修复。

### 🔹 LobsterAI `2026.4.23`（[Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.23)）
- **修复与增强**：
  - 修复用户配置文件字段错误，并在更新检查请求中正确包含 `userId`（[#1784](https://github.com/netease-youdao/LobsterAI/pull/1784)）
  - 在更新请求中附加版本号，便于服务端灰度与回滚策略（[#1785](https://github.com/netease-youdao/LobsterAI/pull/1785)）

---

## 3. 项目进展

今日合并的 42 个 PR 覆盖多个核心模块，显著推进项目能力边界：

- **模型生态扩展**：新增 Kimi K2.6、DeepSeek V4 系列支持，强化多厂商 LLM 兼容能力。
- **协作体验优化**：
  - 统一协作界面操作按钮宽度与主页输入框对齐（[#1816](https://github.com/netease-youdao/LobsterAI/pull/1816)）
  - 恢复 DiffView 对 `edits-array` 格式的支持，确保代码编辑工具正常渲染（[#1814](https://github.com/netease-youdao/LobsterAI/pull/1814)）
  - 扩大内容区域最大宽度至 1024px，提升大屏用户体验（[#1799](https://github.com/netease-youdao/LobsterAI/pull/1799)）
- **技能系统修复**：移除无效的 `~/.claude/skills` 路径发现逻辑，避免 UI 显示与运行时路径不一致导致的“技能未找到”错误（[#1815](https://github.com/netease-youdao/LobsterAI/pull/1815)）
- **IM 与多机器人支持**：完成钉钉、Telegram、Discord 多机器人架构升级（[#1792](https://github.com/netease-youdao/LobsterAI/pull/1792), [#1794](https://github.com/netease-youdao/LobsterAI/pull/1794)）
- **稳定性提升**：将 `chat.send` RPC 超时从 30s 延长至 90s，缓解网关初始化延迟导致的通信失败（[#1803](https://github.com/netease-youdao/LobsterAI/pull/1803)）

> ✅ 项目整体向“多模型、多平台、高可用”方向稳步迈进。

---

## 4. 社区热点

### 🔥 Issue #1813：[DeepSeek V4 无法使用 LLM request failed](https://github.com/netease-youdao/LobsterAI/issues/1813)
- **作者**：@Sun-Ke  
- **状态**：Open，1 条评论  
- **问题描述**：用户尝试使用新集成的 DeepSeek V4 模型时，遭遇 `provider rejected the request schema or tool payload` 错误，附截图显示请求被拒绝。
- **分析**：该问题直接关联昨日发布的 `2026.4.24` 版本核心功能，可能源于模型 API schema 变更未同步适配，或工具调用 payload 格式不兼容。**需优先排查 provider 层适配逻辑**。
- **社区影响**：虽仅 1 条评论，但因涉及关键新功能，潜在影响面广，易引发用户流失。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 相关链接 | 是否有 Fix PR |
|--------|--------|--------|-------------|
| ⚠️ 高 | DeepSeek V4 模型请求被 provider 拒绝（schema/tool payload 不兼容） | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | ❌ 暂无 |
| ⚠️ 中 | Playwright skill 脚本使用 `playwright-mcp` 但文档写为 `playwright-cli`，导致配置困惑 | [#41](https://github.com/netease-youdao/LobsterAI/issues/41) | ❌ 长期未修复（stale） |
| ⚠️ 中 | 存在节省 tokens 和请求数量的优化需求，反映成本敏感型用户诉求 | [#38](https://github.com/netease-youdao/LobsterAI/issues/38) | ❌ 无具体实现 |

> 💡 建议：针对 DeepSeek V4 兼容性问题，应尽快发布 hotfix 或提供临时配置 workaround。

---

## 6. 功能请求与路线图信号

- **嵌入配置支持远程 provider**：PR [#1810](https://github.com/netease-youdao/LobsterAI/pull/1810) 已合并，允许用户在内存搜索中配置 OpenAI、Gemini 等远程 embedding 服务，**预示项目正加强 RAG 与长期记忆能力**，可能为后续“智能体记忆增强”功能铺路。
- **LM Studio 模型支持**：PR [#1787](https://github.com/netease-youdao/LobsterAI/pull/1787) 已合入，表明项目积极拥抱本地推理生态，**本地化部署能力持续增强**。
- **多机器人 IM 集成**：钉钉、Telegram、Discord 多机器人支持已完成，**企业级消息中枢定位愈发清晰**。

> 📌 下一版本可能聚焦：**模型兼容性修复、token 成本优化、本地 embedding 性能提升**。

---

## 7. 用户反馈摘要

- **痛点**：
  - 新用户面对复杂技能配置路径（如 `~/.claude/skills` vs `userData/SKILLs`）易混淆，导致技能无法加载（[#41](https://github.com/netease-youdao/LobsterAI/issues/41)）。
  - DeepSeek V4 虽已集成但无法使用，**功能发布与稳定性脱节**，影响信任度（[#1813](https://github.com/netease-youdao/LobsterAI/issues/1813)）。
  - 高频用户关注 token 消耗效率，希望内置压缩或缓存机制（[#38](https://github.com/netease-youdao/LobsterAI/issues/38)）。
- **满意点**：
  - 协作界面响应式改进（如宽度调整、清空按钮）获隐性好评（PR 评论区虽无显式反馈，但密集 UI 优化 PR 反映内部重视体验）。
  - 多平台 IM 支持满足企业用户跨渠道自动化需求。

---

## 8. 待处理积压

| Issue/PR | 标题 | 创建时间 | 状态 | 提醒 |
|--------|------|--------|------|------|
| [#38](https://github.com/netease-youdao/LobsterAI/issues/38) | 节省 tokens 和请求数量的方法 | 2026-02-22 | Open (stale) | **高优先级**：成本优化是商业化关键，建议纳入 Q2 路线图 |
| [#41](https://github.com/netease-youdao/LobsterAI/issues/41) | playwright skill 错误 | 2026-02-22 | Open (stale) | 文档与实现不一致，易导致用户挫败，需统一术语 |
| [#5](https://github.com/netease-youdao/LobsterAI/pull/5) | 配置 ESLint 规则并修复未使用变量 | 2026-02-19 | Closed（但标记 stale） | 虽已关闭，反映代码质量治理需求，建议定期 lint 巡检 |

> 🔔 **维护者注意**：两个 stale issue 已超 2 个月未响应，建议本周内评估并回复或标记为 `wontfix`，避免社区感知冷漠。

--- 

**报告生成时间**：2026-04-25  
**数据来源**：LobsterAI GitHub Repository（@netease-youdao/LobsterAI）

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-04-25）

---

## 1. 今日速览

Moltis 项目在 2026-04-24 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **30 条 PR**（其中 28 条已合并/关闭，仅 2 条待合并），显示出高效的代码集成节奏；同时 Issues 更新达 10 条，7 条已关闭，3 条新开，问题响应与修复效率较高。尽管无新版本发布，但多个关键功能（如 Landlock 沙箱隔离、Obscura 浏览器后端、分层配置系统）通过 PR 实现落地，标志着项目在安全、可观测性与用户体验方面取得实质性进展。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于功能迭代与稳定性优化，预计下一版本将整合近期合并的多个核心特性。

---

## 3. 项目进展

今日合并/关闭的 PR 推动多项关键能力落地：

- **安全增强**：[#866](https://github.com/moltis-org/moltis/pull/866) 实现基于 Linux Landlock 的细粒度文件系统隔离，提升沙箱安全性，支持优雅降级（[#818](https://github.com/moltis-org/moltis/issues/818) 关联）。
- **配置架构升级**：[#864](https://github.com/moltis-org/moltis/pull/864) 完成分层配置系统设计，引入 `defaults.toml` 与 override-only 用户配置，显著改善新用户体验与配置可维护性。
- **浏览器能力扩展**：[#869](https://github.com/moltis-org/moltis/pull/869) 新增 Obscura 作为轻量级浏览器后端，采用 sidecar 模式，零新增 Rust 依赖，增强自动化灵活性。
- **子代理生态建设**：[#844](https://github.com/moltis-org/moltis/pull/844) 内置 7 个默认子代理预设（research/coder/reviewer 等），降低多智能体协作门槛。
- **MCP 技能标准化**：[#840](https://github.com/moltis-org/moltis/pull/840) 提供 MCP 服务器管理技能与安装后配置模板，推动工具生态规范化。
- **文档自动化**：多批 AutoDoc PR（[#799](https://github.com/moltis-org/moltis/pull/799)、[#800](https://github.com/moltis-org/moltis/pull/800)、[#802](https://github.com/moltis-org/moltis/pull/802)）完成 44 份文档审计与修正，提升文档一致性。

> 整体项目在安全、配置、多模态交互与开发者体验四大方向同步推进，技术债持续清理。

---

## 4. 社区热点

- **#176 [CLOSED] Add datetime to system prompt context**  
  [链接](https://github.com/moltis-org/moltis/issues/176) | 18 条评论，1 👍  
  用户长期呼吁在系统提示中注入时间上下文以提升响应准确性，虽已关闭，但反映对**时间感知能力**的强烈需求。

- **#867 [OPEN] Voice provider API keys stored in plain text in moltis.toml**  
  [链接](https://github.com/moltis-org/moltis/issues/867) | 0 评论  
  新报告的安全隐患：语音服务密钥以明文存储于配置文件，可能违反企业安全策略，亟需加密或环境变量支持。

- **#868 [OPEN] Add Landlock access denial debug logging**  
  [链接](https://github.com/moltis-org/moltis/issues/868) | 0 评论  
  开发者提出增强 Landlock 拒绝访问的调试日志，便于排查沙箱权限问题，与今日合并的 [#866](https://github.com/moltis-org/moltis/pull/866) 形成互补。

---

## 5. Bug 与稳定性

按严重程度排序：

1. **#867 语音密钥明文存储（高危）**  
   [链接](https://github.com/moltis-org/moltis/issues/867)  
   安全风险：API 密钥直接写入 `moltis.toml`，易被泄露。**尚无 fix PR**，需优先处理。

2. **#858 心跳循环重触发（中危）**  
   [链接](https://github.com/moltis-org/moltis/issues/858)  
   代理在心跳周期执行 `exec` 导致无限循环。已由 [#863](https://github.com/moltis-org/moltis/pull/863) 修复，引入唤醒冷却机制。

3. **#848 Fireworks AI JSON Schema 枚举 null 错误（中危）**  
   [链接](https://github.com/moltis-org/moltis/issues/848)  
   Fireworks 拒绝 `null` 值于枚举数组。已由 [#862](https://github.com/moltis-org/moltis/pull/862) 修复，剥离 `null` 元素。

4. **#828 WSL2 Docker 沙箱缺失 `/sys/class/dmi`（低危）**  
   [链接](https://github.com/moltis-org/moltis/issues/828)  
   环境兼容性问题，已关闭，推测通过配置调整解决。

---

## 6. 功能请求与路线图信号

- **时间上下文支持**（#176）：虽已关闭，但高讨论量表明其为高频需求，可能纳入下一版系统提示模板。
- **Landlock 调试日志**（#868）：与刚合并的 Landlock 实现紧密相关，极可能作为 v0.5+ 的可观测性增强项。
- **语音密钥安全存储**（#867）：若社区反馈持续，或将推动配置系统支持加密字段或外部密钥管理集成。
- **Obscura 浏览器后端**（#869）：作为实验性功能开放，若反馈积极，可能成为默认备选方案。

---

## 7. 用户反馈摘要

- **正面反馈**：  
  用户对内置子代理预设（[#844](https://github.com/moltis-org/moltis/pull/844)）表示欢迎，认为“开箱即用”显著降低多智能体使用门槛。  
  Discord 频道模式过滤（[#865](https://github.com/moltis-org/moltis/pull/865)）获企业用户好评，满足精细化权限控制需求。

- **痛点与诉求**：  
  - 安全敏感用户强烈反对明文存储 API 密钥（#867），呼吁支持 `.env` 或密钥环集成。  
  - WSL2 用户遭遇沙箱兼容性问题（#828），反映跨平台支持仍需加强。  
  - 部分用户希望聊天界面滚动行为更智能（#824），避免误触自动跳转。

---

## 8. 待处理积压

- **#344 UX for vault is sealed is bad**  
  [链接](https://github.com/moltis-org/moltis/issues/344) | 创建于 2026-03-06，仅 1 条评论  
  长期未修复的 UX 问题：保险库密封状态提示不清晰，影响用户操作信心。建议评估是否纳入 UI 优化路线图。

- **#470 feat(witness): tool execution witness recording + zkperf-service integration**  
  [链接](https://github.com/moltis-org/moltis/pull/470) | 创建于 2026-03-23，已关闭但未合并  
  性能审计与可验证执行的重要功能，因架构调整被关闭。若项目重启可信计算方向，建议重新评估。

> 建议维护团队关注安全类 Issue（如 #867）并制定密钥管理方案，同时评估积压 UX 问题的优先级。

---  
**报告生成时间**：2026-04-25  
**数据来源**：[Moltis GitHub 仓库](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-04-25）

---

## 1. 今日速览

CoPaw 项目在 2026-04-25 继续保持高活跃度，过去24小时内共处理 **50 条 Issues**（新开/活跃 28 条，关闭 22 条）和 **50 条 Pull Requests**（合并/关闭 35 条，待合并 15 条），并发布 **2 个新版本**（v1.1.4 与 v1.1.4.post1）。社区贡献者积极参与功能开发与 Bug 修复，尤其在内存管理、多语言支持、安全模块和桌面端稳定性方面取得显著进展。整体项目处于快速迭代与问题响应的健康状态。

---

## 2. 版本发布

### 🔹 v1.1.4.post1（热修复版本）
- **核心更新**：
  - ✅ 新增 **CJK-aware 查询分词机制**（[#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811)）：针对中文、日文、韩文等非空格分隔语言优化长期记忆检索的 tokenization 逻辑，提升语义搜索准确性。
  - ⏪ 回滚 Vite 从 v6 升级至 v8 的构建变更（[#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812)）：因前端白屏问题临时回退，确保桌面端可用性。
- **影响范围**：主要影响使用东亚语言进行记忆检索的用户；前端构建流程暂时回退至稳定状态。
- **迁移建议**：无需额外操作，建议所有用户升级至此版本以修复潜在检索偏差。

### 🔹 v1.1.4（功能增强版）
- **核心特性**：
  - 🧠 **长期记忆模块重构**（[#3548](https://github.com/agentscope-ai/QwenPaw/issues/3548)）：引入可插拔后端、自动每 N 轮对话摘要、自动记忆检索及统一上下文管理接口。
  - 🛠️ 新增 DeepSeek v4 模型支持（[#3797](https://github.com/agentscope-ai/QwenPaw/pull/3797)）并修复 `reasoning_content` 传递错误（[#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794)）。
  - 🔐 安全增强：默认禁用 shell 入侵路径，支持 Windows 路径防护（[#3781](https://github.com/agentscope-ai/QwenPaw/pull/3781)）。
  - 📊 异步缓冲 token 使用量记录（[#3766](https://github.com/agentscope-ai/QwenPaw/pull/3766)）提升性能监控能力。
- **破坏性变更**：无。
- **迁移建议**：推荐升级，尤其适用于多轮对话、私有化部署及安全敏感场景。

---

## 3. 项目进展

今日共 **35 个 PR 被合并或关闭**，关键进展包括：

| 类别 | 进展摘要 | 链接 |
|------|--------|------|
| **内存系统** | 实现 CJK 分词优化，提升东亚语言记忆检索准确率 | [#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811) |
| **模型兼容** | 支持 DeepSeek v4 系列模型，修复推理内容传递逻辑 | [#3797](https://github.com/agentscope-ai/QwenPaw/pull/3797), [#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794) |
| **通道安全** | 钉钉通道移除本地文件路径暴露，防止隐私泄露 | [#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790) |
| **前端体验** | 修复 Windows 桌面端白屏问题（通过回滚 Vite 升级） | [#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812) |
| **技能系统** | 新增内置 `agent_audit` 技能，支持中英文审计流程 | [#3740](https://github.com/agentscope-ai/QwenPaw/pull/3740) |
| **CLI 安全** | 增强文件路径防护对 Windows 格式的支持 | [#3781](https://github.com/agentscope-ai/QwenPaw/pull/3781) |

> 项目整体向 **更稳定、更安全、更国际化** 的方向迈进，尤其在企业级部署与多语言场景下表现提升显著。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) — “Help Wanted: Open Tasks”
- **评论数：60** | 状态：Open | 标签：`enhancement`, `help wanted`
- **分析**：该项目维护者 @cuiyuebing 发布的“开放任务清单”持续吸引社区关注，涵盖 P0-P2 优先级任务，鼓励外部贡献者认领开发。反映社区对 **低门槛参与路径** 和 **明确 roadmap 指引** 的强烈需求。
- **诉求**：希望项目提供更清晰的任务分配机制与新人引导流程。

### 💬 高讨论 Issue：[#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753) — 火山 Coding Plan 默认支持
- **评论数：7** | 状态：Open | 标签：`question`
- **分析**：用户询问何时集成火山引擎 Coding Plan 作为默认代码生成方案，表明国内开发者对 **本土化 LLM 服务集成** 的高度期待。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | 问题描述 | 状态 | 修复 PR |
|--------|--------|------|--------|
| 🔴 **高** | Windows 桌面端启动后白屏（v1.1.4） | Closed | [#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812)（回滚 Vite） |
| 🔴 **高** | DeepSeek v4-pro 多轮对话因 `reasoning_content` 未传递报错 | Closed | [#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794) |
| 🟠 **中** | 钉钉发送文件时暴露完整本地路径，存在隐私风险 | Closed | [#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790) |
| 🟠 **中** | MCP 客户端导致 Agent 假死（无响应但不报错） | Open | — |
| 🟡 **低** | macOS Dock 图标在启用 MCP 后变为 Python 图标 | Open | — |

> 多数高优先级 Bug 已在本版本修复，但 **MCP 客户端稳定性问题**（[#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)）仍需深入排查。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 已有 PR？ | 纳入可能性 |
|--------|-----------|----------|----------|
| 用户消息 Markdown 渲染 | [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | 否 | ⭐⭐⭐（高，UI 一致性需求强） |
| 控制台添加时间戳标识 | [#3774](https://github.com/agentscope-ai/QwenPaw/issues/3774) | 否 | ⭐⭐（中，已有类似 PR [#3603](https://github.com/agentscope-ai/QwenPaw/pull/3603) 在审） |
| 工作区沙箱机制（类似 Claude Code） | [#3814](https://github.com/agentscope-ai/QwenPaw/issues/3814) | 否 | ⭐⭐⭐（高，安全模块自然延伸） |
| 右键上下文菜单支持 | [#3752](https://github.com/agentscope-ai/QwenPaw/issues/3752) | 否 | ⭐⭐（中，UX 改进类） |
| 异步并发 Agent 通信 | [#2225](https://github.com/agentscope-ai/QwenPaw/issues/2225) | 否 | ⭐（低，架构级改动） |

> 预计 **时间戳显示** 与 **沙箱机制** 将优先进入 v1.1.5 开发计划。

---

## 7. 用户反馈摘要

- **满意点**：
  - “v1.1.4 的记忆摘要功能极大提升了长对话连贯性。”（来自 [#3548](https://github.com/agentscope-ai/QwenPaw/issues/3548) 讨论）
  - “Docker 部署流程简洁，适合企业内网使用。”（[#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) 上下文）

- **痛点**：
  - “Windows 桌面版频繁白屏，严重影响工作流。”（[#3815](https://github.com/agentscope-ai/QwenPaw/issues/3815)）
  - “钉钉发文件丢失后缀名，手机无法打开。”（[#3760](https://github.com/agentscope-ai/QwenPaw/issues/3760)）
  - “每次重启容器，向量模型配置都被重置。”（[#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)）

- **典型场景**：
  - 企业用户通过钉钉/飞书接收 Agent 日报，依赖文件推送与定时任务（Cron）。
  - 开发者使用本地 MCP 工具（如 Tavily）进行联网搜索，关注图标与稳定性体验。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) | Windows 桌面端卡在 “Waiting for HTTP ready...” | 2026-03-18 | Open | 超 30 天未解决，影响 Windows 用户体验 |
| Issue | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | MCP 客户端导致 Agent 假死 | 2026-04-21 | Open | 高影响，需优先复现与定位 |
| PR | [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | Discord 定时任务支持线程隔离 | 2026-04-17 | Open | 社区贡献，Under Review 超 7 天 |
| PR | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | 语义技能路由（embedding 检索） | 2026-04-08 | Open | 功能重要，需核心团队评审 |

> 建议维护者尽快响应上述积压项，尤其 **Windows 启动阻塞问题** 和 **MCP 假死问题** 已影响核心功能可用性。

--- 

📌 **总结**：CoPaw 正处于快速演进阶段，社区活跃、修复及时，但在跨平台稳定性（尤其 Windows/macOS 桌面端）和高级功能（如沙箱、异步通信）上仍有提升空间。建议加强自动化测试覆盖与长期未响应 Issue 的 SLA 管理。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报（2026-04-25）**

---

### 1. 今日速览  
过去24小时内，ZeptoClaw 社区活跃度保持低位但具建设性：共新增1个 Issue 与1个 PR 更新，无新版本发布。项目整体处于功能探索与CI健壮性增强阶段，维护者正聚焦于扩展集成测试覆盖范围，同时社区提出对飞书（Feishu）原生长连接通道的架构演进需求。当前无紧急缺陷或回归报告，项目健康度稳定。

---

### 2. 版本发布  
*无新版本发布*

---

### 3. 项目进展  
今日无 PR 被合并或关闭，但 **PR #544**（[链接](https://github.com/qhkm/zeptoclaw/pull/544)）持续更新，旨在扩展 CI 对可选集成功能的编译与测试覆盖。该 PR 引入对 `channel-email`、`google`、`provider-vertex` 和 `whatsapp-web` 等模块的矩阵化构建验证，并附带两项兼容性修复，显著提升主干分支在复杂集成场景下的稳定性。此举为后续多通道支持的功能合并提供了更可靠的准入保障，是项目工程化成熟度的重要推进。

---

### 4. 社区热点  
**Issue #546**（[链接](https://github.com/qhkm/zeptoclaw/issues/546)）为今日唯一新开议题，聚焦于实现基于飞书（Lark/Feishu）原生长连接的 Nanodio 子进程 worker 架构。作者 @CangWolf17 提议将 Nanodio 从进程内嵌入模式解耦为独立 supervised 子进程，通过 `feishu=true` 配置启用本地主机路径转发消息。该设计意图提升系统隔离性与可维护性，避免主进程因第三方通道异常而崩溃。尽管暂无评论，但其技术方向契合现代 AI 助手架构中“插件化通道 + 进程隔离”的趋势，可能引发后续架构讨论。

---

### 5. Bug 与稳定性  
*过去24小时无新报告的 Bug、崩溃或回归问题。*

---

### 6. 功能请求与路线图信号  
**Issue #546** 明确提出对飞书原生长连接通道的架构级支持，属于高价值功能请求。结合 PR #544 对多通道集成测试的强化，可判断项目正系统性构建对主流企业通信平台（如飞书、Google、WhatsApp）的可插拔支持能力。该 Issue 若推进，可能成为 v0.5 或 v1.0 版本中“多通道运行时隔离”特性的关键组成部分。建议维护者优先评估其与现有 Nanodio 集成模式的兼容性路径。

---

### 7. 用户反馈摘要  
*当前 Issues 与 PR 中未包含显性用户评论或满意度反馈。*  
但从 Issue #546 的表述可推断，用户（或开发者）关注点集中于：  
- **部署灵活性**：希望避免将 Nanodio 嵌入主进程，以降低耦合风险；  
- **通道可靠性**：强调“supervised subprocess”机制，反映对服务可用性的高要求；  
- **配置简洁性**：期望通过 `feishu=true` 等布尔开关快速启用特定通道，体现对开发者体验的重视。

---

### 8. 待处理积压  
以下为长期未响应的重要事项，建议维护者关注：  
- **PR #544**（[链接](https://github.com/qhkm/zeptoclaw/pull/544)）：已开放超过48小时，涉及 CI 基础设施增强与兼容性修复，虽非紧急但影响后续功能合并效率，建议尽快 review 并合并；  
- **Issue #546**（[链接](https://github.com/qhkm/zeptoclaw/issues/546)）：新提出但具战略意义，建议明确是否纳入近期路线图，或标记为 `needs-discussion` 以引导社区参与设计。

---  
*数据来源：GitHub ZeptoClaw 仓库（截至 2026-04-25 00:00 UTC）*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-04-25）**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度较低：无新 Issue 提交、无 Pull Request 活动，社区互动趋于平稳。唯一显著动作为发布新版本 **v1.8.9**，主要聚焦于 macOS 平台安装体验优化。项目处于维护性更新阶段，核心功能稳定，开发节奏放缓。

---

### 2. 版本发布  
**RivonClaw v1.8.9 已正式发布**  
本次更新重点解决 macOS 用户因 Gatekeeper 安全机制导致的安装拦截问题。官方明确说明：“‘RivonClaw’ is damaged” 提示为误报，文件本身无损坏，系应用未签名所致。  
**解决方案**：引导用户通过终端执行 `xattr -cr /path/to/RivonClaw.app` 清除隔离属性，或手动在“系统设置 > 隐私与安全性”中授权运行。  
> ⚠️ 注意：此版本未引入功能变更或 API 调整，属于纯文档/说明优化，无破坏性变更，用户可直接升级。  
🔗 [Release v1.8.9](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.9)

---

### 3. 项目进展  
无 Pull Request 合并或关闭，今日无代码级功能推进。项目当前重心偏向用户体验优化与跨平台兼容性说明，而非新功能开发。

---

### 4. 社区热点  
过去24小时无新 Issue 或 PR 讨论，社区无显著热点议题。历史 Issue 中关于 macOS 安装问题的反馈已被本次 release 文档覆盖，潜在争议点得到主动回应。

---

### 5. Bug 与稳定性  
无新 Bug 报告。v1.8.9 发布间接表明团队对 macOS 安装兼容性这一长期用户痛点的重视，虽非代码修复，但通过清晰指引降低了用户误判风险，提升了产品可用性。

---

### 6. 功能请求与路线图信号  
无新功能请求提出。结合近期仅发布说明性更新来看，项目短期内可能聚焦于：  
- 完善多平台（尤其是 macOS）安装指引  
- 提升首次启动成功率  
- 探索代码签名方案以彻底规避 Gatekeeper 拦截  
尚无迹象表明将引入重大功能迭代。

---

### 7. 用户反馈摘要  
虽无新 Issue，但从 v1.8.9 发布说明可反推用户真实痛点：  
> “**‘RivonClaw’ is damaged and can't be opened**” 是 macOS 用户高频反馈问题，易导致用户误判软件安全性或放弃使用。  
团队此次主动在 release notes 中提供中英文解决方案，体现出对非技术用户友好度的重视，有助于降低支持成本并提升留存率。

---

### 8. 待处理积压  
经核查，项目当前无长期未响应的重要 Issue 或 PR。最近一次 Issue 活动距今已超过30天，整体 Issue 池保持清洁，维护状态健康。建议持续监控 macOS 安装问题是否因本次说明更新而显著减少。

---  
**项目健康度评估**：⭐⭐⭐⭐☆（4/5）  
- 优势：版本发布及时响应用户痛点，文档清晰，Issue 积压少  
- 关注点：长期缺乏功能迭代，需警惕社区活跃度持续走低

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*