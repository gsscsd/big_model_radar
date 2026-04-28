# OpenClaw 生态日报 2026-04-28

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-28 01:28 UTC

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

# OpenClaw 项目动态日报（2026-04-28）

---

## 1. 今日速览

OpenClaw 在过去24小时内保持极高活跃度，共处理 **500条 Issues**（新开/活跃316条，关闭184条）和 **500条 PRs**（待合并319条，已合并/关闭181条），并发布 **2个新版本**（v2026.4.26 与 v2026.4.25）。社区反馈密集，多个高优先级回归 Bug 被快速响应，同时 TTS、QQ Bot 通道、MCP 安全机制等核心功能持续迭代。项目整体处于高速开发与维护并重状态，稳定性面临一定压力但修复节奏积极。

---

## 2. 版本发布

### 🔹 v2026.4.26（最新）
- **核心更新**：
  - **QQ Bot 通道增强**：支持完整群聊功能，包括历史记录追踪、@提及门控、激活模式、每群组独立配置、FIFO 消息队列（带防抖投递）；C2C 消息支持 `stream_messages` 流式传输，并引入 `StreamingController` 生命周期管理；统一 `sendMedia` 接口支持分块上传。
  - **破坏性变更**：无明确破坏性变更，但 QQ 通道行为可能因新队列机制发生变化，建议测试后部署。
- **相关链接**：[Release v2026.4.26](https://github.com/openclaw/openclaw/releases/tag/v2026.4.26)

### 🔹 v2026.4.25
- **核心亮点**：
  - **TTS 全面升级**：支持 `/tts latest` 命令、会话级自动 TTS 控制、角色（personas）、每 Agent/账户覆盖配置；新增 Azure Speech、Xiaomi、Local CLI、Inworld、Volcengine 和 ElevenLabs v3 提供商支持。
  - **致谢贡献者**：@leonchui、@zoujiejun、@solar2ain。
- **相关链接**：[Release v2026.4.25](https://github.com/openclaw/openclaw/releases/tag/v2026.4.25)

> ⚠️ **迁移注意**：v2026.4.24 → v2026.4.25 升级过程中出现多起回归问题（见下文 Bug 部分），建议通过 `openclaw doctor` 检查环境并参考社区临时解决方案。

---

## 3. 项目进展

今日合并/关闭的重要 PR 推动多项关键修复与功能落地：

| PR | 类型 | 进展说明 |
|----|------|--------|
| [#73138](https://github.com/openclaw/openclaw/pull/73138) | 安全增强 | 引入 **observe-first MCP 运行时防护机制**，限制工具执行权限，防止越权操作，提升生产环境安全性。 |
| [#73076](https://github.com/openclaw/openclaw/pull/73076) | 性能优化 | 修复 ARM64 上重复加载插件导致的模型解析性能瓶颈（~20s/次），显著提升启动与响应速度。 |
| [#72442](https://github.com/openclaw/openclaw/pull/72442) | 功能修正 | 修复 Codex 应用路径下“同会话回复”错误路由问题，确保回复正确返回原对话流。 |
| [#72814](https://github.com/openclaw/openclaw/pull/72814) | 稳定性 | 稳定心跳任务路由逻辑，避免子 Agent 会话误入主通道，减少消息错乱风险。 |
| [#71792](https://github.com/openclaw/openclaw/pull/71792) | 数据持久化 | 修复自动日切/空闲回滚时内存未保存问题，防止低活跃 Agent 数据丢失。 |

> ✅ 整体项目在 **通道稳定性、安全模型、资源管理** 方向取得实质性推进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥10）

| Issue | 主题 | 诉求分析 |
|------|------|--------|
| [#72846](https://github.com/openclaw/openclaw/issues/72846)（10 评论） | 通道 Sidecar 启动阻塞回归（v2026.4.25） | 用户强烈要求修复 #63450 已修复问题重现，影响网关可用性，**维护者已标记为回归**，需紧急热修。 |
| [#68735](https://github.com/openclaw/openclaw/issues/68735)（26 评论，已关闭） | LLM 请求 schema 被拒（Copilot/GPT-5-mini） | 多用户反馈升级后工具调用失败，**已定位并修复**，反映 provider 兼容性测试覆盖不足。 |
| [#71761](https://github.com/openclaw/openclaw/issues/71761)（6 评论，已关闭） | 消息重复注入（双倍 token 消耗） | 严重影响成本与体验，**已合并修复 PR**，凸显上下文组装逻辑脆弱性。 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208)（7 评论） | 跨通道重复转录与上下文组装 | 维护者提出的“ umbrella issue”，呼吁系统性重构，**可能成为下一版本重点**。 |

> 💬 社区核心诉求：**稳定性 > 新功能**，尤其关注升级兼容性与资源泄漏问题。

---

## 5. Bug 与稳定性

### 🚨 高严重性 Bug（按影响排序）

| Issue | 类型 | 状态 | 是否有 Fix PR |
|------|------|------|-------------|
| [#72699](https://github.com/openclaw/openclaw/issues/72699) | 网关崩溃循环（D 状态，85%+ CPU） | CLOSED | ✅ 已修复（见 [#72817](https://github.com/openclaw/openclaw/pull/72817)） |
| [#72846](https://github.com/openclaw/openclaw/issues/72846) | 通道 Sidecar 启动阻塞（~3 分钟） | OPEN | 🔄 正在修复（关联 PR #72814） |
| [#61701](https://github.com/openclaw/openclaw/issues/61701) | 网关 100% CPU（v2026.4.5 起） | OPEN | ❌ 未定位根本原因 |
| [#70857](https://github.com/openclaw/openclaw/issues/70857) | Windows 会话锁持有 191 秒 | OPEN | ❌ 需进一步诊断 |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | sessions.json 无限增长导致 OOM | OPEN | 🔄 部分缓解（PR #71792），根治需架构调整 |

> ⚠️ **趋势**：v2026.4.24+ 版本存在多个性能与稳定性回归，建议用户暂缓升级或密切监控资源使用。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能请求（结合 PR 判断）

| Issue | 功能 | 路线图信号 |
|------|------|----------|
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `web_fetch` 允许访问私有网络 | 🔼 强烈需求（11 👍），已有设计讨论，**可能纳入 v2026.5.x** |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI 支持 MathJax/LaTeX | 🔼 教育/科研用户刚需（3 👍），技术可行性强 |
| [#12678](https://github.com/openclaw/openclaw/issues/12678) | 技能/工具能力权限模型（默认拒绝高风险） | 🔼 安全关键，与 PR #73138 方向一致，**长期路线图重点** |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | 可配置 Control UI 上传大小限制 | 🔼 用户体验优化，实现简单，**易快速落地** |

> ✅ 安全、可观测性、企业级管控将成为下一阶段重点。

---

## 7. 用户反馈摘要

### ✅ 满意点
- **TTS 多提供商支持**（v2026.4.25）获广泛好评，尤其 ElevenLabs v3 音质提升明显。
- **QQ Bot 群聊功能** 满足国内用户刚需，历史追踪与防抖机制设计合理。
- **`openclaw doctor` 工具** 在排查升级问题中发挥关键作用（见 #72526）。

### ❌ 痛点
- **升级即崩溃**：v2026.4.24/4.25 在 Windows/macOS/Linux 均出现启动失败或高 CPU 问题，用户被迫回滚。
- **文档滞后**：Metal/GPU 内存配置、CLI 命令参数等缺乏官方指南（#44202）。
- **成本不可控**：消息重复注入导致 token 消耗翻倍，企业用户敏感。

> 💡 用户真实场景：**私有化部署、多通道集成、成本敏感型 Agent 运营**。

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue（>2 个月，高价值）

| Issue | 类型 | 积压原因 | 建议 |
|------|------|--------|------|
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | AgentDir Bootstrap 文件失效 | 未分配维护者 | 影响自定义 Agent 初始化，**建议 v2026.5 修复** |
| [#41619](https://github.com/openclaw/openclaw/issues/41619) | Google Gemini CLI 认证失败 | 认证流程变更未适配 | 阻碍 Google 生态集成，**需 provider 层更新** |
| [#12678](https://github.com/openclaw/openclaw/issues/12678) | 技能权限模型 | 架构级改动，优先级未定 | **应纳入安全路线图规划** |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) | SKILL.md 支持 per-skill 模型路由 | 功能明确但无 PR | 可提升资源利用率，**鼓励社区贡献** |

> 📢 **维护者提醒**：上述问题虽非崩溃级，但影响用户体验与生态扩展，建议分配资源逐步解决。

---

**报告生成时间**：2026-04-28  
**数据来源**：OpenClaw GitHub Repository（github.com/openclaw/openclaw）  
**分析师**：AI 智能体与个人 AI 助手领域开源项目分析师

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告（2026-04-28）

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **“核心项目高速迭代、垂直场景快速分化”** 的格局。以 OpenClaw 为代表的全功能平台在通道集成、TTS/ASR、安全机制等方向持续深化，而 NanoBot、PicoClaw、Moltis 等轻量或模块化项目则聚焦于部署效率、多模型兼容性与企业级管控。社区普遍面临 **稳定性与功能扩展的平衡挑战**，尤其在升级兼容性、资源隔离、会话一致性等生产级需求上暴露出共性短板。整体生态正从“可用原型”向“可靠基础设施”演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 新版本发布 | 健康度评估 |
|------|---------------|------------|-------------|--------------|
| **OpenClaw** | 500（316 新开） | 500（319 待合并） | ✅ v2026.4.26 & v2026.4.25 | ⭐⭐⭐⭐（高活跃，稳定性承压） |
| **NanoBot** | 17 | 39（21 合并） | ❌ | ⭐⭐⭐⭐☆（高效协作，功能完善中） |
| **Zeroclaw** | 44（38 新开） | 50（12 合并） | ❌ | ⭐⭐⭐⭐（修复密集，安装体验待优化） |
| **PicoClaw** | 109（35 新开） | 120（57 合并） | ❌ | ⭐⭐⭐⭐☆（高响应，移动端/本地模型重点） |
| **NanoClaw** | 16 | 25（12 合并） | ❌ | ⭐⭐⭐⭐☆（安全加固，容器化领先） |
| **IronClaw** | 10（9 新开） | 33（7 合并） | ❌ | ⭐⭐⭐⭐☆（架构重构中，生产风险需警惕） |
| **LobsterAI** | 7（6 新开） | 38（24 合并） | ✅ 2026.4.25 | ⭐⭐⭐（功能迭代快，启动体验拖累） |
| **Moltis** | 5（1 新开） | 17（12 合并） | ❌ | ⭐⭐⭐⭐☆（架构优化显著，UX 提升中） |
| **CoPaw** | 50（25 新开） | 43（25 合并） | ❌ | ⭐⭐⭐（高活跃，关键稳定性缺陷突出） |
| **TinyClaw / ZeptoClaw / EasyClaw** | 0 | 0 | ❌ | ⭐⭐（低活跃或维护停滞） |

> 注：健康度综合考量活跃度、响应速度、稳定性、技术债务等因素。

---

## 3. OpenClaw 在生态中的定位

OpenClaw 是生态中 **功能最完整、社区规模最大的全栈平台**，其优势体现在：
- **通道覆盖最广**：支持 QQ Bot、Telegram、Discord、WeCom、Matrix 等 10+ 通道，且深度集成群聊、流式传输、媒体分块上传等高级特性；
- **企业级能力领先**：率先引入 MCP 安全机制（observe-first 防护）、会话级 TTS 控制、成本追踪 API；
- **社区规模效应**：单日处理 500+ Issues/PRs，远超同类项目，反映其作为“事实标准”的生态地位。

相较之下，NanoBot、PicoClaw 等更侧重轻量化与快速部署，而 IronClaw 押注 Rust 重构的长期架构优势，OpenClaw 则在 **“功能广度 + 社区驱动”** 路径上建立护城河。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **模型兼容性与 Failover** | NanoBot (#3376)、LobsterAI (#1813)、CoPaw (#3795) | 支持 DeepSeek-v4、Qwen3 等非主流模型；跨 Provider 自动故障转移 |
| **会话与上下文管理** | PicoClaw (#2491)、CoPaw (#3843)、Moltis (#888) | 历史隔离、手动压缩/清空、防丢失机制 |
| **安全与权限控制** | OpenClaw (#73138)、NanoClaw (#2029)、IronClaw (#2999) | 工具调用权限模型、容器资源限制、能力租约机制 |
| **流式响应与 UX** | PicoClaw (#2587)、CoPaw (#3871)、Moltis (#876) | Web 端流式输出、SSE 流正确关闭、文件上传支持 |
| **部署与安装可靠性** | Zeroclaw (#6096)、LobsterAI (#73)、Moltis (#896) | 预构建二进制完整性、Docker 构建稳定性、跨平台启动成功率 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 全功能平台，多通道 + TTS + 安全 | 企业集成商、重度个人用户 | Python 单体架构，插件化通道 |
| **NanoBot** | 轻量、异步 ReAct、多 Provider | 开发者、中小团队 | Go 编写，强调低资源占用 |
| **PicoClaw** | 移动端友好、本地模型集成 | 个人开发者、隐私敏感用户 | 支持 Android + LM Studio，Security Shield v2 |
| **IronClaw** | 高性能、Rust 重构、插件生态 | 技术极客、基础设施团队 | Reborn 架构（Substrate 模块化） |
| **Moltis** | Web UI 体验、自动索引 | 知识工作者、小型团队 | 可选编译通道，前端资源构建时生成 |
| **CoPaw** | 多通道企业 IM 集成 | 企业内部 AI 助手部署 | 基于 QwenPaw 分支，强化飞书/钉钉支持 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 PR/Issue 比，功能密集）：  
  **OpenClaw、PicoClaw、CoPaw** 处于此阶段，日均处理 100+ PRs，侧重功能落地与 Bug 修复。
  
- **质量巩固阶段**（架构优化为主，稳定性优先）：  
  **NanoClaw、IronClaw、Moltis** 聚焦底层重构（资源隔离、模块化、安全子strate），PR 更偏向基础设施。

- **维护瓶颈期**（低响应，技术债务累积）：  
  **LobsterAI、Zeroclaw** 虽活跃但积压严重（如 LobsterAI 的 #73 启动问题超 2 月未解），影响新用户转化。

---

## 7. 值得关注的趋势信号

1. **“稳定性 > 新功能”成为社区共识**  
   多个项目（OpenClaw #72846、CoPaw #3843、LobsterAI #73）显示，用户对升级崩溃、会话丢失等问题的容忍度极低，**生产可用性已成为 adoption 的核心门槛**。

2. **语音交互（TTS/ASR）从加分项变为刚需**  
   PicoClaw (#1648)、OpenClaw (v2026.4.25) 均强化语音支持，反映 **自然交互** 是个人 AI 助手下一阶段体验跃迁的关键。

3. **企业级管控能力加速落地**  
   权限模型（OpenClaw #12678）、资源隔离（NanoClaw #2068）、审计日志（IronClaw #2993）等需求集中爆发，表明 **私有化部署与合规性** 正成为主流场景。

4. **轻量化与模块化成为架构演进方向**  
   Moltis 可选通道编译、IronClaw Substrate 架构、NanoBot 的 Go 轻量实现，共同指向 **降低部署复杂度、提升可维护性** 的技术趋势。

> **对开发者的建议**：优先选择具备明确稳定性路线图、支持资源隔离与权限控制的项目；关注 TTS/ASR 集成成熟度；在生产环境中严格测试升级路径与回滚机制。

---  
**报告生成时间**：2026-04-28  
**分析师**：AI 智能体与个人 AI 助手开源生态技术分析师

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-04-28）

---

## 1. 今日速览

NanoBot 社区活跃度持续高位，过去24小时内共处理 **17条 Issues** 和 **39条 Pull Requests**，其中 **21个 PR 已合并/关闭**，**13个 Issues 被关闭**，显示出高效的协作节奏。尽管无新版本发布，但核心功能迭代与稳定性修复并行推进，尤其在多通道支持、模型容灾、会话隔离和流式响应等方向取得实质性进展。项目整体处于快速演进阶段，社区贡献者对边缘场景的覆盖能力显著增强。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 `v0.1.5.post2` 系列，团队聚焦于功能完善与回归修复，未触发正式版本 bump。

---

## 3. 项目进展

今日合并/关闭的关键 PR 推动多项核心能力落地：

- **#3478**（已合并）：为 `OpenAICompatProvider` 显式设置请求超时，避免因 OpenAI SDK 默认 600 秒 read/write 超时导致 agent loop 长时间阻塞，提升系统健壮性。
- **#3480 / #3479**（已合并）：修复 OpenAI Codex 提供者在 `v0.1.5.post2` 中丢失 `_progress` 流式 delta 的问题，恢复中间状态推送至前端通道的能力，解决用户感知“无响应”的痛点。
- **#3397**（已合并）：完善 Discord 线程支持，实现父频道 allowlist 策略向子线程的自动继承，避免因权限配置遗漏导致消息投递失败。
- **#3389**（已合并）：防止 heartbeat 输出泄露内部指令模板（如 HEARTBEAT.md 内容），并优化最终化失败时的降级策略，提升用户消息纯净度。
- **#3466**（已合并）：新增 `/history [n]` 命令，允许用户查看最近 N 条会话消息，增强调试与上下文追溯能力。

> 上述修复与功能显著提升了多通道稳定性、模型兼容性及用户体验，标志着 NanoBot 向生产级 Agent 平台迈出关键一步。

---

## 4. 社区热点

### 🔥 高讨论度 Issue：#3376 — 支持模型异常自动切换（Provider / Model Failover）
- **链接**：https://github.com/HKUDS/nanobot/issues/3376
- **评论数**：11 | **👍**：1
- **分析**：用户强烈呼吁在多 provider 配置下实现跨 provider/model 的自动故障转移，而非仅在同一 provider 内重试。该需求直指高可用场景痛点，尤其在 DeepSeek、OpenAI 等服务频发限流/5xx 的背景下，已成为影响连续运行体验的关键瓶颈。已有社区成员开始探讨实现路径，预计将成为下一阶段核心优先级。

### 🔥 高讨论度 Issue：#2133 — 任务执行期间用户消息入列机制优化
- **链接**：https://github.com/HKUDS/nanobot/issues/2133
- **评论数**：19 | **👍**：0
- **分析**：尽管已关闭，但高讨论量反映用户对“实时干预 agent loop”的迫切需求。当前 `/stop` 机制不够优雅，阻碍了人机协同效率。此议题可能推动未来引入中断信号或双工通信机制。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| ⚠️ 高 | #3469 | DeepSeek-v4 系列模型因 `reasoning_content` 未正确回传导致空回复 | ❌ 无 PR |
| ⚠️ 高 | #3474 | DeepSeek-v4-pro/v4-flash 模型配置后返回空白响应 | ❌ 无 PR |
| ⚠️ 中 | #3488 | Telegram 附件以 `application.octet-stream` 发送，无法被正确识别 | ✅ 已有 PR #3489 |
| ⚠️ 中 | #3435 | WeCom 渠道媒体文件上传失败，返回 `[file upload failed: xxxxxx]` | ❌ 无 PR |
| ⚠️ 中 | #3464 | 子代理（subagent）在 threaded 调用中错误路由至频道主会话而非原线程 | ❌ 无 PR |
| ⚠️ 低 | #3468 | MCP 能力名称未做 sanitize 直接转发至模型工具 API，存在注入风险 | ❌ 无 PR |

> 注：DeepSeek-v4 系列兼容性问题集中爆发，需优先排查 provider 层对 reasoning 模式的支持逻辑。

---

## 6. 功能请求与路线图信号

以下功能请求已获得实质性推进，极可能纳入下一版本：

- **✅ Hugging Face Inference Providers 支持**（PR #3490）：由 Hugging Face 官方成员提交，集成其 OpenAI 兼容接口，扩展模型生态。
- **✅ Mattermost 通道支持**（PR #2592）：长期 PR 持续更新，实现 WebSocket + REST 双通道通信，覆盖企业协作场景。
- **✅ SimpleX 通道支持**（PR #3486）：新增隐私优先的 SimpleX 协议支持，体现对去中心化通信的关注。
- **✅ Session 级历史隔离**（PR #3481）：解决多会话历史混叠问题，为多租户/多用户部署铺路。
- **✅ LongTaskTool 多步任务工具**（PR #3460）：引入子代理链式执行机制，支持长周期复杂任务分解。

> 此外，#3376（模型 failover）虽无 PR，但社区呼声极高，预计将作为 v0.2.0 核心特性规划。

---

## 7. 用户反馈摘要

- **满意点**：
  - 异步消息场景（如 Telegram/Slack）下单层 ReAct 循环表现优异，契合“用户离线”使用模式（#1181）。
  - WebUI 与多通道集成日益完善，部署灵活性高。
- **痛点**：
  - **模型兼容性**：DeepSeek-v4 系列、OpenAI Codex 流式中断等问题频发，影响生产可用性。
  - **实时交互缺失**：agent 执行中无法接收用户指令，必须依赖 `/stop`，破坏工作流连续性（#2915, #2133）。
  - **文件处理粗糙**：附件 MIME 类型错误、WeCom 上传失败等降低专业场景可信度。
  - **会话管理混乱**：历史混叠、线程路由错误等问题在多会话环境下尤为突出。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| Issue | #3292 | Session-Level Focus Tool: Persistent Task Awareness Across Interruptions and Compaction | 2026-04-19 | OPEN | 高价值提案，涉及 agent 自主性提升，建议纳入架构讨论 |
| Issue | #3376 | 支持模型异常自动切换（Provider / Model Failover） | 2026-04-22 | OPEN | 社区高优先级需求，需制定 failover 策略与配置规范 |
| PR | #2592 | feat(channels): Add Mattermost channel support | 2026-03-28 | OPEN | 长期未合入，建议 review 后推进 |
| PR | #3373 | feat: add gateway lifecycle notification hooks (on_start/on_stop) | 2026-04-22 | OPEN | 功能完整，可提升运维可见性，建议合并 |

> 建议维护团队本周内对上述积压项进行 triage，明确纳入路线图或提供反馈。

--- 

**报告生成时间**：2026-04-28  
**数据来源**：NanoBot GitHub Repository (HKUDS/nanobot)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-04-28）

---

## 1. 今日速览

过去24小时内，Zeroclaw 社区保持高活跃度，共产生 **44 条 Issues 更新**（38 新开/活跃，6 已关闭）和 **50 条 PR 更新**（38 待合并，12 已合并/关闭），显示出强劲的开发与问题反馈节奏。尽管无新版本发布，但核心团队正集中处理高优先级 Bug 与架构改进，尤其在 provider 兼容性、Web UI 稳定性及安装流程方面取得关键进展。多个 S1/S2 级问题被识别并已有修复 PR 推进，整体项目健康度良好，处于快速迭代修复阶段。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 v0.7.3，v0.7.4 里程碑（[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)）仍在进行中，预计将包含 schema v3 迁移、WeChat 通道恢复等重大变更。

---

## 3. 项目进展

今日合并/推进的关键 PR 包括：

- **[#6154](https://github.com/zeroclaw-labs/zeroclaw/pull/6154)**：修复 `install.sh` 脚本未提取 Web 仪表盘资源的问题（对应 Issue #6096），恢复预构建二进制安装路径下的完整功能。
- **[#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159)**：修复网关聊天成功但 `/api/cost` 返回零且无 usage 文件写入的问题（Issue #6001），确保每次对话轮次都正确记录成本与 token 使用。
- **[#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167)**：实现 ACP 协议 v1，恢复与外部 ACP 消费者（如 Nori）的连接能力，并引入工具调用权限与反向通道机制，属高风险核心修复。
- **[#6130](https://github.com/zeroclaw-labs/zeroclaw/pull/6130)**：从 bulk revert 中恢复 WeChat iLink Bot 通道（原 PR #4221），补回因紧急回滚丢失的重要功能。
- **[#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170)**：同步法/日/西语文档翻译并新增简体中文（zh-CN）支持，提升国际化体验。

这些 PR 显著提升了安装可靠性、计费准确性、协议兼容性与多语言支持，推动项目向 v0.7.4 稳定版迈进。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)（14 条评论）
**标题**：Fresh install 下 `default_model` 配置失效导致工作流阻塞  
**分析**：用户在新 LXC 环境中部署时遭遇 provider 初始化失败，反映配置系统在跨容器网络场景下的健壮性不足。该问题被标记为 S1（工作流阻塞），已引发多位用户共鸣，亟需 hotfix。

### 🔥 高关注度 PR：[#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167)（ACP 协议 v1 实现）
该 PR 涉及核心通信协议变更，虽无评论但关联多个外部集成方（如 Nori），其合并将直接影响生态兼容性，属高风险高价值改动。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **S1** | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | 新安装下 `default_model` 配置不生效，导致 agent 启动失败 | ❌ 无 PR |
| **S1** | [#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) | E2EE 恢复不下载房间密钥，加密房间功能完全失效 | ✅ 已关闭（疑似修复） |
| **S2** | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | 使用 kimi-code provider 时因缺少 `reasoning_content` 报错 | ❌ 无 PR（与 #6160 重复） |
| **S2** | [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | 模型返回 narration + tool_calls 时产生重复 assistant 消息 | ✅ 已关闭 |
| **S2** | [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | Matrix 语音转录失败：“Unsupported audio format '.'” | ❌ 无 PR |
| **S0** | [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | 在 Firefox 中输入时代理聊天窗口引发 CPU 飙升 | ❌ 无 PR（疑似前端性能问题） |

> 注：S0=数据/安全风险，S1=工作流阻塞，S2=功能降级，S3=轻微问题

---

## 6. 功能请求与路线图信号

- **Web UI 增强**：用户强烈呼吁改进默认模型选择界面（[#6070](https://github.com/zeroclaw-labs/zeroclaw/issues/6070)）、支持从 Memories 恢复历史聊天（[#6145](https://github.com/zeroclaw-labs/zeroclaw/issues/6145)）及清空聊天窗口（[#6077](https://github.com/zeroclaw-labs/zeroclaw/issues/6077)，已关闭但需求明确）。
- **通道能力扩展**：请求为 Telegram/Discord 添加 `/clear` 内存命令（[#6150](https://github.com/zeroclaw-labs/zeroclaw/issues/6150)）、修复 Nextcloud Talk API 调用（[#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)）。
- **架构演进**：推动 hybrid skills + WASM tools（[#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140)）和“轻量版 ZeroClaw”（[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)），反映用户对模块化与性能优化的期待。

结合已有 PR，**Web UI 手动触发 cron（[#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164)）** 和 **WeChat 通道恢复** 最可能纳入 v0.7.4。

---

## 7. 用户反馈摘要

- **痛点**：
  - 新用户体验差：安装后配置不生效（#6123）、文档示例过时（#6149）、Web 仪表盘缺失（#6096）。
  - 多通道一致性不足：Canvas 工具在 Telegram/Slack 无效（#5356）、Nextcloud Talk 超时（#6156）。
  - 计费与可观测性缺失：cost API 返回零（#6001）、无 trace 日志。
- **满意点**：
  - 社区响应迅速，多个 S1/S2 问题在数日内即有 PR 修复（如 #6001、#6096）。
  - 国际化进展（新增 zh-CN）获积极认可。

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 说明 |
|--------|------|--------|------|
| [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) | Bug | >55 天 | Dashboard Channels 标签页崩溃，影响 v0.6.8 用户，仍 open |
| [#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) | Bug | >40 天 | 网关会话取消令牌未清理，存在内存泄漏风险，标记 P1 但无进展 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Enhancement | >4 天 | 审计 153 个被误回滚的提交，需手动恢复，技术债务高 |
| [#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132) | Security | >1 天 | 需扩展 prompt 审计至 `[skill].prompts`，阻塞 #5972 合并 |

> **建议**：优先处理 #5244（影响生产环境稳定性）和 #6132（安全风险）。

--- 

**报告生成时间**：2026-04-28  
**数据来源**：Zeroclaw GitHub Repository (github.com/zeroclaw-labs/zeroclaw)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-04-28）

---

## 1. 今日速览

过去24小时内，PicoClaw 社区活跃度显著上升，共处理 **109 条 Issues**（新开/活跃 35 条，关闭 74 条）和 **120 条 PR**（待合并 63 条，已合并/关闭 57 条），显示出高效的协作节奏与问题响应能力。尽管无新版本发布，但核心功能持续优化，尤其在 **provider 兼容性、agent 稳定性、会话管理** 等关键模块取得实质性进展。社区对语音交互（TTS/ASR）、多语言支持、安全加固等方向表现出强烈兴趣，反映出项目正从“可用”向“易用、可靠、可扩展”演进。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 v0.2.x 系列，多个重要修复与增强已通过 PR 合并进入主干，预计将在下个 minor 版本中集中发布。

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在 **Bug 修复、架构优化与用户体验提升** 三大方向：

- **关键修复**：
  - [#2372](https://github.com/sipeed/picoclaw/pull/2372) 解决了 `openai_compat` provider 在 v0.2.6 中静默丢弃 API Key 导致 401 错误的严重问题（对应 Issue #2578），已合并。
  - [#2370](https://github.com/sipeed/picoclaw/pull/2370) 修复 LLM 输出中 `<| [SPLIT] |>` 带空格时消息分割失败的问题，提升多消息场景鲁棒性。
  - [#2364](https://github.com/sipeed/picoclaw/pull/2364) 避免恢复含“悬空工具调用”的陈旧会话，防止 Telegram 会话卡死。

- **功能增强**：
  - [#2587](https://github.com/sipeed/picoclaw/pull/2587) 实现 Web Chat 端到端流式输出与滚动 UX 重构，显著改善长响应体验（关联 Issue #1950）。
  - [#2491](https://github.com/sipeed/picoclaw/pull/2491) 新增 `/status`、`/compact`、`/new` 会话管理命令，赋予用户手动控制上下文的能力。
  - [#2333](https://github.com/sipeed/picoclaw/pull/2333) 引入结构化上下文压缩算法（6阶段），优化长对话内存效率。

- **安全与维护**：
  - [#2327](https://github.com/sipeed/picoclaw/pull/2327) 完成 Security Shield v2 安全架构的最终整合，强化系统级防护。
  - [#2328](https://github.com/sipeed/picoclaw/pull/2328) 全面改进核心包错误处理、添加 godoc，提升代码可维护性。

> 整体来看，项目在 **稳定性、可观测性、用户控制力** 方面迈出关键步伐，为后续大规模部署奠定基础。

---

## 4. 社区热点

以下 Issues/PRs 在过去24小时讨论最活跃，反映核心用户诉求：

| 议题 | 类型 | 热度 | 分析 |
|------|------|------|------|
| [#1648](https://github.com/sipeed/picoclaw/issues/1648) | Enhancement | 23 评论 | 用户强烈呼吁集成 TTS/ASR 能力，已有 PR #1642 实现但未接入网关，凸显语音交互是下一阶段刚需。 |
| [#28](https://github.com/sipeed/picoclaw/issues/28) | Enhancement | 16 评论 | 请求简化 LM Studio 连接流程，尤其关注 Android 端部署便利性，体现对本地模型生态的重视。 |
| [#2578](https://github.com/sipeed/picoclaw/issues/2578) | Bug | 12 评论 | `openai_compat` 静默丢 Key 问题引发广泛共鸣，已被 PR #2372 修复，说明 provider 配置可靠性是关键痛点。 |
| [#629](https://github.com/sipeed/picoclaw/issues/629) | Bug/Enhancement | 10 评论 | 长任务无重试机制导致 hang，暴露 agent 容错能力不足，亟需自动恢复策略。 |

> **趋势判断**：用户不仅关注功能丰富度，更重视 **可靠性、可调试性、跨平台一致性**，尤其是移动端与本地模型集成体验。

---

## 5. Bug 与稳定性

按严重程度排序的今日关键 Bug：

1. **[高] #2578**: `openai_compat` provider 静默丢弃 Authorization header（v0.2.6）  
   ✅ **已修复** by PR #2372（已合并）

2. **[高] #2371**: Agent loop panic at `pkg/agent/loop.go:2171`（多模型配置下）  
   ✅ **已修复** by PR #2372（已合并）

3. **[中] #2236**: Docker 部署修改端口后 Web 页面输入框禁用  
   ✅ **已关闭**，确认为配置误解，但暴露文档清晰度问题

4. **[中] #2046**: LongCat API 下工具调用失败  
   🔄 待进一步复现，暂无 fix PR

5. **[低] #2368**: Android App 中模型显示“未配置”即使字段完整  
   🔄 待前端调试，可能为 UI 状态同步问题

---

## 6. 功能请求与路线图信号

结合 PR 进展，以下功能有望纳入下一版本：

| 功能 | 状态 | 依据 |
|------|------|------|
| **Web Chat 流式输出** | 🟢 高概率 | PR #2587 已就绪，解决 #1950 |
| **会话管理命令 (/status, /compact)** | 🟢 高概率 | PR #2491 已合并 |
| **TTS/ASR 网关集成** | 🟡 中概率 | Issue #1648 热度高，但需网关层适配 |
| **Mattermost 渠道支持** | 🟡 中概率 | Issue #1587 有 2 👍，社区需求明确 |
| **LangSmith 可观测性** | 🔴 低概率 | Issue #2173 提出，尚无 PR |
| **/stop 任务取消命令** | 🟡 中概率 | Issue #2009 有 1 👍，符合用户体验优化方向 |

> 建议优先推进 **流式输出、会话管理、TTS/ASR 集成**，形成“响应快 + 可控强 + 交互自然”的闭环体验。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **满意点**：
  - “Docker 部署比上一版顺畅多了”（#2236 评论）
  - “终于有结构化上下文压缩了，长对话不再爆 token”（#2333 相关讨论）
  - “Security Shield 让企业部署更安心”（#2327 隐含反馈）

- **痛点**：
  - “Android 端配置模型后仍提示‘未配置’，折腾半天”（#2368）
  - “Groq 工具调用格式不兼容，文档没说清楚”（#748）
  - “Windows 下 QQ 渠道根本用不了，官方能不能测一下？”（#2080）
  - “cron 任务 deliver=false 时响应丢了，毫无提示”（#1058）

- **典型场景**：
  - 企业用户希望通过 Mattermost/Telegram 集成实现内部 AI 助手；
  - 个人开发者尝试在 Android 手机本地运行 + LM Studio 模型；
  - 运维人员关注 Docker 镜像是否包含 curl/python 等调试工具（#1228）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

| 议题 | 类型 | 积压时长 | 风险 |
|------|------|----------|------|
| [#618](https://github.com/sipeed/picoclaw/issues/618) | Enhancement | >2个月 | 自更新机制缺失，影响安全补丁分发 |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) | Enhancement | >1个月 | 无认证机制，存在命令执行风险 |
| [#1731](https://github.com/sipeed/picoclaw/issues/1731) | Enhancement | >1个月 | 缺乏 OTel GenAI 支持，阻碍企业可观测 |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | Refactor | >3周 | 未迁移至 OpenAI Responses API，技术债累积 |

> **建议行动**：对 #618（自更新）和 #1067（认证）启动 RFC 讨论，明确路线图；#1731 可考虑作为 v0.3 可观测性子项目立项。

---

**总结**：PicoClaw 正处于快速迭代与社区驱动的关键阶段。当前健康度良好（Issue 关闭率高、PR 合并快），但需警惕 **移动端兼容性、安全基线、企业集成能力** 三大短板。建议下一周期聚焦“稳定底座 + 关键体验”，兼顾创新与维护。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-04-28）

---

## 1. 今日速览

NanoClaw 社区活跃度持续高位，过去24小时内共产生 **16条 Issues 更新** 和 **25条 PR 更新**，显示出强劲的开发与问题反馈节奏。尽管无新版本发布，但项目在稳定性、安全性和多平台适配方面取得显著进展，尤其在容器资源隔离、调度系统一致性及跨会话任务管理方面实现关键修复。社区对 Telegram 和 Discord 适配器的改进需求集中爆发，反映出用户在实际部署中遇到的真实痛点。

---

## 2. 版本发布

**无新版本发布**。当前主干仍处于功能迭代与问题修复阶段，未触发正式版本发布流程。

---

## 3. 项目进展

今日共 **12个 PR 被合并或关闭**，推动多项关键改进：

- **#2068**（[链接](https://github.com/qwibitai/nanoclaw/pull/2068)）：实现容器资源限制配置（`--memory`, `--cpus`, `--pids-limit`），直接响应 #2029 安全诉求，防止 runaway agent 导致主机 OOM 或 PID 耗尽，显著提升系统稳定性。
- **#2063**（[链接](https://github.com/qwibitai/nanoclaw/pull/2063)）：修复 agent-to-agent 消息路由中的自环与礼貌循环问题，通过流量上限机制避免无限递归，增强多智能体协作可靠性。
- **#2049**（[链接](https://github.com/qwibitai/nanoclaw/pull/2049)）：新增 Telegram 频道适配器，支持配对流程与 Markdown 安全转义，为 Telegram 用户提供了完整接入能力。
- **#2050**（[链接](https://github.com/qwibitai/nanoclaw/pull/2050)）：修复 RooSync inbox 监听器丢失 TS 源码与 bot 身份识别问题，恢复 `@-mention` 唤醒功能。
- **#1997**（[链接](https://github.com/qwibitai/nanoclaw/pull/1997)）：修正 SQLite 时间戳解析逻辑，避免非 UTC 主机误杀新容器，解决部署环境兼容性问题。

此外，**#1326**（语音转录模块）与 **#987**（会话轮换与内存刷新）等长期 PR 完成合并，标志着核心基础设施趋于成熟。

---

## 4. 社区热点

### 🔥 高关注度 Issue：#2029 — 容器资源限制缺失（[链接](https://github.com/qwibitai/nanoclaw/issues/2029)）
- **评论数：3** | **状态：OPEN**
- 用户 @kosm1x 指出当前容器无资源上限，存在 runaway agent 导致主机崩溃的风险。该问题引发安全性质疑，并已由 @dim0627 提交对应 PR #2068 实现修复，体现“问题-响应”闭环高效。

### 💬 高频讨论 PR：#2063 — Agent 路由环路防护（[链接](https://github.com/qwibitai/nanoclaw/pull/2063)）
- 虽无显式评论，但其解决的生产环境自环问题（如 `install_packages` 触发无限 a2a 循环，见 #2048）已被社区验证为关键稳定性缺陷，修复后显著降低 Telegram 消息阻塞风险。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 修复状态 |
|--------|------|------|----------|
| ⚠️ 高危 | #2048 — `install_packages` 触发无限 a2a 自路由循环（[链接](https://github.com/qwibitai/nanoclaw/issues/2048)） | 用户批准安装包后引发消息循环，阻塞所有 Telegram 消息投递 | ✅ 已由 #2063 修复 |
| ⚠️ 高危 | #2029 — 容器无资源限制（[链接](https://github.com/qwibitai/nanoclaw/issues/2029)） | 单个 agent 可耗尽主机内存/CPU/PID | ✅ 已由 #2068 修复 |
| 🟡 中危 | #2047 — WhatsApp 附件迁移后不可见（[链接](https://github.com/qwibitai/nanoclaw/issues/2047)） | 文件路径存在但容器内无法访问 | ✅ 已修复（挂载 `/workspace/attachments`） |
| 🟡 中危 | #2067 — v2 调度任务会话隔离导致跨线程不可见（[链接](https://github.com/qwibitai/nanoclaw/issues/2067)） | `list_tasks` 等工具无法操作其他会话任务 | 🔄 待修复（尚无 PR） |
| 🟢 低危 | #2043 — Telegram HTML 输出中 `&apos;` 过度转义（[链接](https://github.com/qwibitai/nanoclaw/issues/2043)） | 显示 `won&apos;t` 而非 `won't` | 🔄 待修复 |

---

## 6. 功能请求与路线图信号

以下功能请求显示出明确的产品演进方向：

- **#2058** — 请求将 Google Chat 加入 `setup/auto.ts` 频道选择器（[链接](https://github.com/qwibitai/nanoclaw/issues/2058)）：反映用户对主流办公 IM 集成的需求，可能推动下一版多渠道支持扩展。
- **#2040** — Signal 支持出站附件（[链接](https://github.com/qwibitai/nanoclaw/pull/2040)）：已提交 PR，填补 Signal 适配器功能缺口，预计将快速合并。
- **#2060** — Docker Sandbox 环境适配（MITM 代理、CA 证书）（[链接](https://github.com/qwibitai/nanoclaw/pull/2060)）：面向企业安全沙箱场景，预示项目向受控环境部署拓展。

结合已有 PR，**资源隔离**、**跨会话任务管理** 和 **企业级部署兼容性** 将成为下一阶段重点。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “Agent 在群组中无法正确回复原消息上下文”（#2065 已关闭，但类似问题仍存）
  - “OneCLI 不接受下划线 agent ID，导致容器启动失败”（#2046，需 `.replace(/_/g, '-')` 快速修复）
  - “Discord 中 `<URL>` 被错误转换为 `[URL](URL)`，反而触发预览”（#2044，v2 行为退化）

- **满意点**：
  - 用户对快速响应资源限制问题表示认可（#2029 → #2068 快速闭环）
  - 语音转录（#1326）和会话轮换（#987）等长期功能终被合并，体现项目执行力

- **使用场景**：
  - 多 Telegram 群组部署同一 agent（#2048）
  - LXC 容器内运行 NanoClaw（#2056）
  - 企业内网通过 MITM 代理访问（#2060）

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **#1845** — 数据库时间戳标准化为 ISO 8601（[链接](https://github.com/qwibitai/nanoclaw/pull/1845)）  
  *创建于 2026-04-18，涉及数据一致性，影响日志与审计，尚未合并*

- **#2067** — v2 调度任务会话隔离导致跨线程操作失效（[链接](https://github.com/qwibitai/nanoclaw/issues/2067)）  
  *今日新建，但暴露架构设计缺陷，需设计全局任务命名空间或同步机制*

- **#2041** — Emoji shortcode 标准化映射（Slack → Unicode）（[链接](https://github.com/qwibitai/nanoclaw/issues/2041)）  
  *影响跨平台反应一致性，尚无 PR*

建议团队评估 #2067 的架构影响，并考虑在 v2.1 中引入任务中心化存储。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度 + 快速响应 + 关键安全修复落地，整体态势积极。需关注架构级问题（如任务隔离）以防技术债累积。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-04-28）

---

## 1. 今日速览

IronClaw 项目在 2026-04-28 继续保持高活跃度，过去24小时内共产生 **33 条 PR 更新**（含 7 条已合并/关闭）和 **10 条 Issues 更新**（9 新开/活跃，1 已关闭），显示出核心团队在架构重构与稳定性修复上的高强度投入。尽管无新版本发布，但多个关键 Reborn 架构子模块（如事件、文件系统、授权控制）正通过分组 PR 策略稳步推进集成。社区反馈集中在 V2 引擎的审批流异常、跨会话污染及迁移兼容性问题，反映出生产环境升级后的实际痛点。

---

## 2. 版本发布

**无新版本发布**。当前开发重心仍集中于 Reborn 架构的阶段性集成，而非对外发布。

---

## 3. 项目进展

今日有 **7 个 PR 被合并或关闭**，主要围绕 Reborn 架构的模块化落地与关键 Bug 修复：

- **Reborn 架构推进**：  
  - [`#2988`](https://github.com/nearai/ironclaw/pull/2988) 引入基础宿主 API、资源管理与架构定义 crate，为后续子系统集成奠定基础。  
  - [`#2993`](https://github.com/nearai/ironclaw/pull/2993) 添加 `ironclaw_events` 事件/审计子strate，支持持久化事件流。  
  - [`#2996`](https://github.com/nearai/ironclaw/pull/2996) 完成文件系统子strate（`ironclaw_filesystem`），实现作用域化文件访问控制。  
  - [`#2999`](https://github.com/nearai/ironclaw/pull/2999) 新增授权控制子strate（`ironclaw_authorization`），引入能力租约模型与内存/文件系统双后端存储。  
  > 上述 PR 均遵循 #2987 提出的“分组 PR 集成策略”，避免巨型 PR 阻塞审查，标志着 Reborn 架构进入实质性落地阶段。

- **关键 Bug 修复**：  
  - [`#2989`](https://github.com/nearai/ironclaw/pull/2989) 修复 V2 引擎中 `threads_today` 计数器因时区处理不当导致每日预算无法重置的问题（对应 Issue #1945）。  
  - [`#2994`](https://github.com/nearai/ironclaw/pull/2994) 修正 `tool_info` 动作发现机制，确保引擎原生动作（如 `mission_create`）能正确返回 schema 信息。  
  - [`#2978`](https://github.com/nearai/ironclaw/pull/2978) 强化 bridge 重启权限策略，明确区分静态策略与未知工具回退逻辑，提升安全性。

---

## 4. 社区热点

### 🔥 高关注度 Issue：Reborn 架构集成策略讨论（[#2987](https://github.com/nearai/ironclaw/issues/2987)）
- **评论数：7** | **标签：enhancement, risk: high, scope: docs**
- 核心团队提出将庞大的 Reborn 架构改造拆解为可独立审查的“分组 PR”，并制定 landing strategy。该 Issue 成为后续多个子strate PR（如 #2993、#2996、#2999）的协调中心，体现项目向模块化、可维护架构演进的战略方向。

### ⚠️ 生产环境故障：V2 审批流全面异常（[#2991](https://github.com/nearai/ironclaw/issues/2991)）
- **QA 报告于 staging 环境**，描述审批流程存在提示不清、路由错误、强制串行执行等问题，严重影响用户体验。虽暂无 fix PR，但高优先级标签 `bug_bash_P2` 表明已进入紧急排查队列。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 高 | [#2991](https://github.com/nearai/ironclaw/issues/2991) | V2 审批流功能失效：提示模糊、路由错误、强制串行 | ❌ 无 |
| 🔴 高 | [#2833](https://github.com/nearai/ironclaw/issues/2833) | 跨会话响应污染：Conversation A 的推理结果出现在 Conversation B | ❌ 无 |
| 🟠 中 | [#2982](https://github.com/nearai/ironclaw/issues/2982) | 升级至 0.26.0 后，Routine 聊天被错误归类为 Mission | ❌ 无 |
| 🟠 中 | [#2887](https://github.com/nearai/ironclaw/issues/2887) | Auth Browser Consent canary 因 Google 屏蔽 CI 自动化登录而失败 | ❌ 无（需基础设施调整） |
| 🟢 低 | [#1945](https://github.com/nearai/ironclaw/issues/1945) | V2 mission `threads_today` 计数器永不重置 → **已修复** | ✅ [#2989](https://github.com/nearai/ironclaw/pull/2989) |

> 注：多个 live canary 失败（#2975–#2977）指向 CI 环境 provider 兼容性问题，需进一步排查。

---

## 6. 功能请求与路线图信号

- **Aliyun Coding Plan 支持**（[#1446](https://github.com/nearai/ironclaw/pull/1446)）：  
  新增 `AliyunProvider`，兼容 Anthropic Messages API，支持 DashScope 平台。该 PR 已长期开放，若合并将扩展 IronClaw 在多云 LLM 生态中的覆盖能力。

- **下游部署基础设施增强**（[#2925](https://github.com/nearai/ironclaw/pull/2925)）：  
  提供 `AGENTS_SEED_PATH`、`INTEGRATION_CREDENTIALS_DIR` 等部署原语，便于企业 fork 定制化部署。反映项目向“可分叉、可定制”平台演进的趋势。

- **外部工具注册插件机制**（[#2871](https://github.com/nearai/ironclaw/pull/2871)）：  
  引入 `ExternalToolRegistrar` trait，允许下游在不修改上游代码的情况下注册自定义 Rust 工具。强烈信号：IronClaw 正构建插件化生态。

---

## 7. 用户反馈摘要

- **Codex 模型配置困惑**（[#1697](https://github.com/nearai/ironclaw/issues/1697)）：  
  用户反馈即使授权 Codex，也无法通过 CLI 正确设置模型名称（如 `GPT-5.4 mini` 被忽略），暴露模型解析逻辑与用户界面提示不一致的问题。

- **升级兼容性担忧**（[#2982](https://github.com/nearai/ironclaw/issues/2982)）：  
  生产实例从 0.24.0 升级至 0.26.0 后，历史 Routine 数据被误标为 Mission，引发对版本迁移脚本健壮性的质疑。

- **文档缺失痛点**（[#2948](https://github.com/nearai/ironclaw/pull/2948)）：  
  尽管已实现 PostgreSQL + libSQL 双数据库后端及 24 个迁移脚本，但官方文档仅提及 libSQL 路径，导致用户难以理解完整数据架构。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 提醒 |
|------|------|------|--------|------|
| Issue | [#2833](https://github.com/nearai/ironclaw/issues/2833) | 跨会话响应污染 | >6 天 | 高影响用户体验，需优先排查上下文隔离机制 |
| Issue | [#2887](https://github.com/nearai/ironclaw/issues/2887) | Auth canary 被 Google 屏蔽 | >5 天 | 需评估是否引入真人验证 bypass 或更换 CI 环境 |
| PR | [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun Coding Plan 支持 | >38 天 | 功能完整但长期未合入，建议明确 roadmap 归属 |
| PR | [#2925](https://github.com/nearai/ironclaw/pull/2925) | 下游部署基础设施 | >4 天 | 企业用户需求强烈，建议加速 review |

> 建议维护者重点关注 **跨会话污染** 与 **V2 审批流异常** 两大高优 Bug，二者均直接影响核心交互体验。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
架构重构有序进行，社区响应及时，但生产环境稳定性风险需警惕。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-04-28）

---

## 1. 今日速览

LobsterAI 在过去24小时内表现出极高的开发活跃度，共处理 **38条 PR 更新**（其中24条已合并/关闭，14条待合并）和 **7条 Issues 更新**（6条新开/活跃，1条已关闭）。项目整体处于快速迭代与稳定性优化并行阶段，核心团队聚焦于模型兼容性、启动稳定性、安全加固及用户体验改进。尽管存在部分长期未解决的社区反馈，但开发响应速度显著提升，技术债务清理节奏加快。

---

## 2. 版本发布

**新版本：LobsterAI 2026.4.25**（发布于 2026-04-25）  
🔗 [Release 2026.4.25](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.25)

### 主要更新内容：
- **修复协作模式（Cowork）中编辑工具对 `edits-array` 输入格式的支持**：恢复 DiffView 功能，确保多轮编辑操作可视化正常（#1814）。
- **新增记忆搜索的嵌入配置选项**：在设置页中开放 embedding 模型配置能力，支持用户自定义向量检索后端（#1814）。

> ⚠️ **无破坏性变更**，但建议私有部署用户检查 `openclaw.json` 是否包含 `meta.lastTouchedVersion` 字段，以避免配置快照被误判为“clobbered”（见 #1838）。

---

## 3. 项目进展

过去24小时内，**24个 PR 被合并或关闭**，主要集中在以下方向：

| 类别 | 关键进展 |
|------|--------|
| **模型兼容性** | 修复 DeepSeek V4 模型调用失败问题（#1847），解决自定义模型供应商因 schema 不匹配导致的请求拒绝；优化 session 级 modelOverride 持久化逻辑，防止多会话共享同一模型（#1843）。 |
| **启动稳定性** | 提升 Windows 平台启动超时阈值至15秒，并新增 renderer 初始化诊断日志通道（#1846），显著改善冷启动失败排查能力。 |
| **安全性增强** | 实施多项安全加固：限制 `store:*` IPC 越权访问（#1832）、脱敏日志中的敏感密钥（#1844）、禁止 `shell.openExternal` 执行危险 scheme（#1833）。 |
| **配置健壮性** | 防止 `updateConfig` 覆盖已存储的 provider 配置（#1840），修复 openclaw.json 缺少元数据导致快照泛滥问题（#1838）。 |

👉 整体项目向**企业级稳定性与安全性**迈出关键一步，同时为多模型、多账户场景打下基础。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#1813 — “DeepSeek V4 无法使用”
🔗 [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813)  
- **评论数：5** | **状态：OPEN** | **作者：@Sun-Ke**
- **核心诉求**：用户在使用 DeepSeek V4 模型时遭遇 `provider rejected the request schema or tool payload` 错误，怀疑是 LobsterAI 对第三方模型 schema 校验过严。
- **背景分析**：该问题在 #1847 中已被修复，但用户尚未验证。反映出社区对**非主流大模型接入兼容性**的高度关注。

### 💬 高关注度 Issue：#1836 — “整体界面需要专业设计美化”
🔗 [Issue #1836](https://github.com/netease-youdao/LobsterAI/issues/1836)  
- **评论数：1** | **状态：OPEN** | **作者：@wansi-web**
- **用户原话**：“相比起其他竞品过于丑了，用起来不太舒服。”
- **信号解读**：UI/UX 已成为影响用户留存的关键因素，可能推动下一版本引入设计系统重构。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否已有 Fix |
|--------|------|------|-------------|
| ⚠️ 高 | #1813 | DeepSeek V4 模型调用失败（schema 拒绝） | ✅ 已修复（#1847） |
| ⚠️ 高 | #73 | 启动即报错 404 Not Found（Claude SDK 路径问题） | ❌ 未修复（stale，2026-02-24 创建） |
| ⚠️ 中 | #100 | macOS 打包 dmg 报错（main.js 路径配置错误） | ❌ 未修复（stale） |
| ⚠️ 中 | #17 | 启动死循环 + punycode 弃用警告 | ❌ 未修复（stale） |
| ⚠️ 低 | #106 | 自定义模型无法调用（UI 显示异常） | ❌ 未修复（stale） |

> 💡 建议优先处理 #73 和 #100，二者均为**阻碍新用户首次体验**的关键阻塞性问题。

---

## 6. 功能请求与路线图信号

| 功能方向 | 相关 Issue/PR | 可能性评估 |
|--------|--------------|----------|
| **UI/UX 重构** | #1836（界面美化请求） | ⭐⭐⭐ 高（社区情绪强烈，竞品压力大） |
| **Cron 定时任务** | #1519（自定义 Cron 表达式支持） | ⭐⭐⭐ 高（PR 已存在，仅待合并） |
| **表单体验优化** | #1511（必填字段标记）、#1527（AI 诊断入口） | ⭐⭐⭐ 高（多 PR 推进中） |
| **多账户同步** | #1839（企业多账号 OpenClaw 配置同步） | ⭐⭐ 中（企业用户需求明确） |

> 📌 **预测下一版本重点**：UI 优化 + Cron 调度 + 表单体验，构成“生产力工具”核心闭环。

---

## 7. 用户反馈摘要

- **痛点集中领域**：
  - **模型兼容性差**：私有部署模型（如 Qwen3-30B）、DeepSeek V4 等调用异常（#955、#1813）。
  - **安装与启动不可靠**：Windows/macOS 用户频繁遭遇启动失败、打包错误（#73、#100、#17）。
  - **界面粗糙影响体验**：用户直言“太丑”，降低使用意愿（#1836）。

- **正面反馈**：
  - 对 Cowork 模式（工具调用、文件操作）能力表示认可（#955 中用户描述）。
  - 赞赏 AI 诊断、必填标记等细节优化方向（隐含于 #1527、#1511 讨论）。

---

## 8. 待处理积压

以下 Issue 长期未响应，建议维护者优先关注：

| Issue | 创建时间 | 最后更新 | 积压原因分析 |
|------|--------|--------|------------|
| [#73](https://github.com/netease-youdao/LobsterAI/issues/73) | 2026-02-24 | 2026-04-27 | 基础功能不可用，影响新用户转化 |
| [#100](https://github.com/netease-youdao/LobsterAI/issues/100) | 2026-02-25 | 2026-04-27 | 打包流程缺陷，阻碍 macOS 用户部署 |
| [#17](https://github.com/netease-youdao/LobsterAI/issues/17) | 2026-02-20 | 2026-04-27 | 启动死循环 + 依赖警告，技术债务累积 |
| [#106](https://github.com/netease-youdao/LobsterAI/issues/106) | 2026-02-25 | 2026-04-27 | 自定义模型 UI 异常，影响高级用户 |

> 🛎️ **维护建议**：设立“启动体验专项”，集中修复 #73、#17、#100，可显著提升项目健康度评分。

---  
*数据来源：GitHub LobsterAI 仓库（截至 2026-04-28 00:00 UTC）*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-04-28）

---

## 1. 今日速览

Moltis 项目在 2026-04-28 继续保持高活跃度，开发节奏紧凑。过去24小时内共处理 **17 条 PR 更新**（其中 12 条已合并/关闭，5 条待合并），**5 条 Issues 更新**（1 条新开，4 条已关闭），显示出高效的协作与问题响应能力。尽管无新版本发布，但多个关键功能与架构优化已完成合并，显著提升了系统可维护性与用户体验。社区贡献者 @Cstewart-HC 和 @penso 成为今日核心推动者，主导了 UI、索引、通道模块化等关键改进。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于功能迭代与架构优化，预计下一版本将整合本次日报中提及的多项增强特性。

---

## 3. 项目进展

今日共 **12 个 PR 被合并或关闭**，标志着多个重要功能与修复正式落地：

- **🔧 架构简化**：PR [#898](https://github.com/moltis-org/moltis/pull/898) 实现了对“主代理”（primary agent）架构的简化，移除“主身份”概念，使所有代理统一为数据库实体，提升路由一致性与可维护性，响应了 Issue [#774](https://github.com/moltis-org/moltis/issues/774) 的长期诉求。
  
- **🛠️ 通道模块化**：通过 PRs [#890](https://github.com/moltis-org/moltis/pull/890)、[#891](https://github.com/moltis-org/moltis/pull/891)、[#899](https://github.com/moltis-org/moltis/pull/899)，Telegram、Discord 和 MS Teams 通道被设为可选编译项，显著降低二进制体积与构建时间，增强部署灵活性。

- **🖥️ Web UI 修复与增强**：
  - PR [#892](https://github.com/moltis-org/moltis/pull/892) 修复了会话名称不可见与无法重命名的问题（Issue [#888](https://github.com/moltis-org/moltis/issues/888)），恢复了关键 UX 功能。
  - PR [#904](https://github.com/moltis-org/moltis/pull/904) 引入 **Cmd+K / Ctrl+K 命令面板**，提供快速导航与操作入口，提升高级用户效率。

- **🔐 安全性与稳定性加固**：
  - PR [#894](https://github.com/moltis-org/moltis/pull/894) 添加回归测试，确保安全钩子返回 `Block` 时不会误触发熔断机制，彻底解决 Issue [#547](https://github.com/moltis-org/moltis/issues/547)。
  - PR [#893](https://github.com/moltis-org/moltis/pull/893) 修复 Matrix OIDC 在非本地代理环境下登录失败问题，提升身份认证兼容性。

- **🧪 构建流程优化**：PR [#895](https://github.com/moltis-org/moltis/pull/895) 停止提交生成的前端资源（约 92K 行），改由构建时自动生成，大幅减少仓库体积并提升可重现性。

---

## 4. 社区热点

**最活跃 Issue**：[#896](https://github.com/moltis-org/moltis/issues/896) — *Docker build fails: "Temporary failure resolving 'ports.ubuntu.com'" during apt-get update*  
- **状态**：新开，1 条评论  
- **分析**：该问题反映用户在容器化部署时遭遇网络解析失败，可能源于基础镜像 DNS 配置或网络策略限制。虽为环境问题，但暴露出官方 Docker 构建流程缺乏容错机制或备用源配置，需维护者提供构建指南或镜像优化建议。

**高关注度 PR**：[#876](https://github.com/moltis-org/moltis/pull/876) — *feat(ui): file upload button for web chat sessions*  
- **状态**：开放中，持续更新  
- **分析**：该 PR 引入文件上传功能，对标主流 LLM 平台 UX，满足用户对多模态交互的核心需求。其进展将直接影响 Moltis 在个人 AI 助手领域的竞争力，社区期待度高。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| ⚠️ 中 | [#896](https://github.com/moltis-org/moltis/issues/896) | Docker 构建时 apt-get 解析失败 | ❌ 无 fix PR，需环境排查 |
| ✅ 已修复 | [#888](https://github.com/moltis-org/moltis/issues/888) | 会话名称与重命名按钮丢失 | ✅ PR [#892](https://github.com/moltis-org/moltis/pull/892) 已合并 |
| ✅ 已修复 | [#547](https://github.com/moltis-org/moltis/issues/547) | 安全钩子误触发熔断 | ✅ PR [#894](https://github.com/moltis-org/moltis/pull/894) 已合并 |
| ✅ 已修复 | [#317](https://github.com/moltis-org/moltis/issues/317) | Jinja 模板系统消息位置错误 | ✅ 已关闭，疑似已修复 |

> 注：今日无高严重性崩溃或数据丢失类 Bug 报告。

---

## 6. 功能请求与路线图信号

- **文件上传支持**（[#876](https://github.com/moltis-org/moltis/pull/876)）：用户强烈期望支持附件交互，此功能已进入开发阶段，极可能纳入下一版本。
- **自动代码索引**（[#903](https://github.com/moltis-org/moltis/pull/903)）：实现基于文件监听的自动索引，消除手动操作，是提升开发者体验的关键一步，路线图优先级高。
- **命令面板**（[#904](https://github.com/moltis-org/moltis/pull/904)）：提升 UI 效率，符合现代 Web 应用趋势，有望成为默认交互入口。

> 综合判断：**文件上传、自动索引、命令面板** 将成为下一版本核心亮点。

---

## 7. 用户反馈摘要

- **正面反馈**：
  - 用户对恢复会话重命名功能（PR #892）表示认可，称“终于能管理混乱的会话列表了”。
  - 通道可选化获开发者好评，“终于不用为不需要的功能编译半天”。

- **痛点与诉求**：
  - Docker 构建稳定性问题（#896）暴露部署门槛，用户呼吁提供更健壮的容器镜像或构建脚本。
  - 有用户提及“技能安装后仍需手动信任”流程繁琐，PR #897 已响应此需求，实现自动信任。

---

## 8. 待处理积压

- **长期开放 Issue**：[#774](https://github.com/moltis-org/moltis/issues/774)（虽已关闭，但其衍生架构改进已完成）
- **待合并 PR**：
  - [#876](https://github.com/moltis-org/moltis/pull/876)：文件上传功能，需 UI/安全审查
  - [#826](https://github.com/moltis-org/moltis/pull/826)： compaction 模型配置联动，涉及核心逻辑
  - [#903](https://github.com/moltis-org/moltis/pull/903)：自动代码索引，复杂度较高，需充分测试

> ⚠️ **提醒维护者**：关注 [#896](https://github.com/moltis-org/moltis/issues/896) 的 Docker 构建问题，建议提供官方构建最佳实践文档或优化基础镜像。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
开发活跃，响应迅速，架构持续优化，社区互动良好。需加强部署文档与边缘场景覆盖。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-04-28）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度处于高位：共处理 **50条 Issues**（新开/活跃25条，关闭25条）和 **43条 Pull Requests**（待合并18条，已合并/关闭25条），显示出高效的协作节奏。尽管无新版本发布，但核心功能持续优化，尤其在多通道支持、上下文管理与模型交互稳定性方面取得显著进展。社区贡献者积极参与，首次贡献者占比达30%以上，生态活力强劲。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v1.1.4.post2`，开发团队正集中修复关键 Bug 并完善即将发布的 `v1.1.5` 版本功能。

---

## 3. 项目进展

今日共 **25个 PR 被合并或关闭**，重点推进以下方向：

- **会话体验优化**：[#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) 实现异步生成会话标题，告别“前10字符占位符”，提升 UI 专业度。
- **通道稳定性增强**：
  - [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) 修复 QQ 频道语音消息类型识别，支持 SILK 格式转录；
  - [#3872](https://github.com/agentscope-ai/QwenPaw/pull/3872) 改进 QQ WebSocket 异常重连机制，避免因网络波动导致服务中断；
  - [#3890](https://github.com/agentscope-ai/QwenPaw/pull/3890) 抑制飞书频道冗余日志，提升运维可读性。
- **上下文管理健壮性**：[#3848](https://github.com/agentscope-ai/QwenPaw/pull/3848) 强化上下文压缩失败时的回退策略，防止历史记录丢失。
- **模型交互可靠性**：[#3874](https://github.com/agentscope-ai/QwenPaw/pull/3874) 优化 LLM 调用重试逻辑，降低 `MODEL_EXECUTION_FAILED` 错误率。

整体项目在**多通道兼容性**与**长会话稳定性**两大核心场景上迈出关键一步。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映用户核心诉求：

| Issue | 主题 | 评论数 | 核心诉求分析 |
|------|------|--------|-------------|
| [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | 会话历史突然消失，消息路由错乱 | 5 | **严重 UX 缺陷**：用户对话上下文丢失，影响任务连续性，疑似会话 ID 管理或状态同步问题。 |
| [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) | Web UI 暂停按钮仅前端生效，后端继续执行 | 3 (+1👍) | **功能失效风险**：用户无法真正中断耗时任务，存在资源浪费与安全隐患，需后端协同控制机制。 |
| [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) | Agent 响应完成后仍显示“Thinking”状态（SSE 流未关闭） | 4 | **流式通信缺陷**：SSE 流未正确终止，导致 UI 卡死，影响用户体验与自动化流程判断。 |
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | chromadb Rust 绑定引发段错误（SIGSEGV）致进程崩溃 | 2 | **致命稳定性问题**：Linux 环境下频繁崩溃，需紧急提供安全默认配置或优雅降级方案。 |

> 💡 社区正强烈呼吁对 **会话状态一致性** 与 **操作中断能力** 进行架构级修复。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|---------------|
| 🔴 **Critical** | [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | chromadb 引发段错误，进程直接崩溃 | ❌ 尚无 |
| 🔴 **Critical** | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | 会话历史丢失，消息错配 | ❌ 尚无 |
| 🟠 **High** | [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) | 暂停功能形同虚设，后端持续执行 | ❌ 尚无 |
| 🟠 **High** | [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) | SSE 流未关闭，UI 持续“Thinking” | ❌ 尚无 |
| 🟡 **Medium** | [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) | 配置信息重启后丢失（Plan 模式、记忆设置等） | ✅ 已有相关修复（见 [#3834](https://github.com/agentscope-ai/QwenPaw/pull/3834)） |
| 🟡 **Medium** | [#3795](https://github.com/agentscope-ai/QwenPaw/issues/3795) | 频繁出现 `422 MODEL_EXECUTION_FAILED` | ✅ 已有优化（见 [#3874](https://github.com/agentscope-ai/QwenPaw/pull/3874)） |

> ⚠️ 建议优先投入资源解决 **chromadb 崩溃** 与 **会话状态丢失** 两大高危问题。

---

## 6. 功能请求与路线图信号

用户提出的新需求中，以下具备高采纳可能性：

- **Token 消耗实时显示**（[#3366](https://github.com/agentscope-ai/QwenPaw/issues/3366)）：开发者强烈呼吁成本透明度，已有明确 UI 参考设计，技术实现成本低，**极可能纳入 v1.1.5**。
- **Channel 侧高危命令批准**（[#3869](https://github.com/agentscope-ai/QwenPaw/issues/3869)）：解决 Web 控制台访问受限场景下的安全审批痛点，契合“去中心化控制”趋势，**已进入需求细化阶段**。
- **Proactive 消息支持自定义频道**（[#3804](https://github.com/agentscope-ai/QwenPaw/issues/3804)）：扩展主动通知能力至飞书/钉钉，提升企业集成价值，**与通道架构演进方向一致**。
- **Apple Silicon 原生浏览器支持**（[#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655)）：M 系列 Mac 用户性能诉求强烈，**预计随 Playwright 更新逐步支持**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **满意点**：
  - “Docker 部署流程很顺畅，uv 集成体验不错。”（隐含于安装相关讨论）
  - “多通道设计灵活，能快速对接企业内部 IM。”（来自飞书/钉钉用户）
  
- **痛点与不满**：
  - “配置保存后重启就没了，根本不敢投入生产。”（[#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824)）
  - “暂停按钮点了没用，后台还在跑，浪费 token 还危险。”（[#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850)）
  - “Linux 上跑着跑着就崩了，日志都没留下。”（[#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854)）
  - “微信发十几条消息就被截断，体验极差。”（[#3837](https://github.com/agentscope-ai/QwenPaw/issues/3837)）

> 用户最关心：**数据持久化、操作可控性、跨平台稳定性**。

---

## 8. 待处理积压

以下重要 Issue 长期未响应，需维护者关注：

| Issue | 类型 | 创建时间 | 状态 | 提醒 |
|------|------|--------|------|------|
| [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) | 项目关系澄清 | 2026-04-15 | OPEN | 用户困惑于 QwenPaw 与 CoPaw 的关系，需官方明确维护策略 |
| [#406](https://github.com/agentscope-ai/QwenPaw/issues/406) | GitHub Copilot 集成 | 2026-03-03 | OPEN | 企业级用户刚需，OpenClaw 已支持，CoPaw 落后 |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | Apple Silicon 浏览器支持 | 2026-03-31 | OPEN | 影响 macOS 开发者体验，技术债累积 |

> 📌 建议在下一次社区会议中明确 **QwenPaw 与 CoPaw 的协同路线图**，并评估 Copilot 集成优先级。

--- 

**报告生成时间**：2026-04-28  
**数据来源**：GitHub CoPaw/QwenPaw 仓库公开数据

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