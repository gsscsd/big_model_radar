# OpenClaw 生态日报 2026-03-13

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-13 00:58 UTC

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

# OpenClaw 项目动态日报（2026-03-13）

---

## 1. 今日速览

OpenClaw 社区在24小时内保持极高活跃度，共处理 **500条 Issues** 和 **500条 PRs**，显示出强劲的开发与用户参与势头。项目发布两个新版本（`v2026.3.11` 和 `v2026.3.11-beta.1`），重点修复了 WebSocket 安全漏洞。尽管存在多个回归性 Bug 报告（如 cron 任务失效、文件写入异常等），但核心团队响应迅速，已有多个修复 PR 进入合并流程。整体项目健康度良好，安全加固与稳定性优化是当前重点。

---

## 2. 版本发布

### 🔐 OpenClaw v2026.3.11（正式） & v2026.3.11-beta.1（测试）
- **安全修复**：强制对所有浏览器发起的 WebSocket 连接实施源（Origin）验证，无论是否启用代理头（`X-Forwarded-*`），彻底关闭 `trusted-proxy` 模式下的跨站 WebSocket 劫持路径，防止未授权源获取 `operator.admin` 权限。
- **影响范围**：所有使用 `trusted-proxy` 模式的部署环境（尤其是通过 Nginx 反向代理的多节点生产环境）。
- **迁移建议**：建议所有用户立即升级至 `v2026.3.11`；若使用 Nginx 作为前端代理，需确保配置中包含正确的 `X-Forwarded-For` 和 `X-Real-IP` 头，否则可能触发认证失败（见 Issue #43561）。
- **相关链接**：
  - [v2026.3.11 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.3.11)
  - [v2026.3.11-beta.1 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.3.11-beta.1)

> ⚠️ 此修复直接响应高危安全漏洞（GHSA-5wcw-8...），属于关键更新。

---

## 3. 项目进展

今日多个重要 PR 被合并或推进，显著提升系统稳定性与可观测性：

- **#44481**（已开）：修复 `tool_use_id` 不匹配导致的无限重试循环，避免 agent 陷入死循环（关联 Issue #44473）。
- **#44363**（进行中）：增强 cron 任务执行可靠性，添加诊断日志与超时监控，应对近期集中报告的 cron 失效问题（#42883、#40868、#44257）。
- **#44356**（进行中）：引入 agent 运行时生命周期监控与看门狗机制，提升长任务可观测性。
- **#43941**（已合并）：修复沙箱清理（prune）后遗留工作目录导致的磁盘泄漏问题。
- **#41510**（已合并）：修复 macOS 上 `gateway restart` 后 LaunchAgent 无法自启的回归问题（#40905）。
- **#44421**（进行中）：集成 Cortex 本地记忆系统，为 agent 提供结构化上下文记忆能力，属重大功能扩展。

> ✅ 项目在稳定性、安全性和功能扩展三方面同步推进，维护节奏健康。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（附链接）

| Issue | 主题 | 评论数 | 核心诉求 |
|------|------|--------|--------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 国际化（i18n）支持 | 98 | 用户强烈呼吁多语言支持，尤其中文、西班牙语等，但维护者表示资源有限，暂无排期。 |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | 首次安装支持钉钉（DingTalk） | 60 | 钉钉已实现底层支持，但未集成进初始设置向导，影响用户体验一致性。 |
| [#75](https://github.com/openclaw/openclaw/issues/75) | 缺失 Linux/Windows 桌面端 App | 39 | 用户希望获得与 macOS 同等功能的原生桌面应用，提升离线使用体验。 |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | Agent 视觉能力缺失（图片识别） | 14 | 飞书等平台发送图片时，Agent 无法解析内容，仅能接收文本描述，限制多模态交互。 |
| [#42938](https://github.com/openclaw/openclaw/issues/42938) | “虾缘”AI 相亲平台推广 | 10 | 社区成员基于 OpenClaw 构建趣味项目，反映生态活跃度，但非核心功能诉求。 |

> 💡 社区对 **多模态支持** 和 **桌面端覆盖** 的需求持续高涨，可能成为下一阶段路线图重点。

---

## 5. Bug 与稳定性

### 🚨 严重 Bug（按优先级排序）

| Issue | 问题描述 | 状态 | 修复进展 |
|------|--------|------|--------|
| [#43858](https://github.com/openclaw/openclaw/issues/43858) | `Edit` 工具静默清空文件至 0 字节 | 🔴 高 | 疑似与沙箱 FS Bridge v3.11 原子写入机制有关，**#44122** 已定位根因，修复中。 |
| [#44257](https://github.com/openclaw/openclaw/issues/44257) | 隔离会话 cron 任务 enqueued 但不执行（v2026.3.11） | 🔴 高 | **#44363** 正在增强诊断与调度逻辑。 |
| [#41778](https://github.com/openclaw/openclaw/issues/41778) | `openclaw-message` OOM（4GB 服务器，v2026.3.7+） | 🔴 高 | 内存泄漏嫌疑，尚无直接修复，需性能剖析。 |
| [#44303](https://github.com/openclaw/openclaw/issues/44303) | 切换小上下文模型导致硬崩溃 | 🟠 中 | 缺乏优雅截断机制，需会话管理模块增强。 |
| [#43561](https://github.com/openclaw/openclaw/issues/43561) | `trusted-proxy` 模式与 Nginx 不兼容 | 🟠 中 | 安全修复引入的副作用，需文档澄清或配置适配。 |

> ⚠️ 文件操作类 Bug 影响数据完整性，属最高优先级；cron 失效影响自动化用户，需紧急修复。

---

## 6. 功能请求与路线图信号

### 📌 高潜力功能请求（已有 PR 或社区共识）

| 功能 | 关联 Issue/PR | 状态 | 可能性 |
|------|---------------|------|--------|
| **Cortex 本地记忆集成** | #44421 | PR 进行中 | ⭐⭐⭐⭐☆（高，已有实现） |
| **钉钉首次安装支持** | #26534 | Issue 开放 | ⭐⭐⭐☆☆（中，实现简单但需 UX 调整） |
| **Agent 视觉能力** | #28744 | Issue 开放 | ⭐⭐⭐⭐☆（高，多模态是趋势） |
| **Linux/Windows 桌面 App** | #75 | Issue 开放（help wanted） | ⭐⭐☆☆☆（低，资源密集型） |
| **SGLang 模型支持** | #42855 | PR 已关闭（未合并） | ⭐⭐☆☆☆（中，需评估优先级） |

> ✅ Cortex 记忆系统最可能纳入下一版本；视觉能力若获赞助可能加速。

---

## 7. 用户反馈摘要

### 🗣️ 真实用户声音（来自 Issue 评论）

- **痛点**：
  - “升级后 cron 任务全停了，我的日报机器人失效了”（#42883）
  - “Edit 工具把我重要配置文件清空了，差点丢数据”（#43858）
  - “飞书发图 Agent 看不见，只能靠我描述，太蠢了”（#28744）
  - “macOS 重启网关后服务就没了，得手动搞”（#40905）

- **满意点**：
  - “Telegram 回复线程终于不乱跳了，体验顺滑很多”（#40377 相关）
  - “安全更新很及时，生产环境放心了”
  - “中文文档链接终于不跳英文版了”（#43877 修复）

> 💬 用户对 **稳定性回归** 容忍度低，对 **安全更新** 和 **细节体验优化** 高度认可。

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项（提醒维护者）

| Issue/PR | 主题 | 创建时间 | 状态 | 建议 |
|---------|------|--------|------|------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 国际化（i18n） | 2026-01-28 | OPEN | 虽无资源，可考虑社区协作或插件化方案 |
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows App | 2026-01-01 | OPEN（help wanted） | 可发起专项众筹或招募贡献者 |
| [#17311](https://github.com/openclaw/openclaw/issues/17311) | SecretsProvider 扩展 | 2026-02-15 | OPEN | 已有基础，可结合 #16663 推进 |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) | 配置备份/恢复工具 | 2026-02-10 | OPEN | 灾难恢复刚需，建议纳入 v2026.4 规划 |

> 🔔 建议对 #3460 和 #13616 给出明确 roadmap 回应，避免社区失望。

---

**报告生成时间**：2026-03-13  
**数据来源**：OpenClaw GitHub 仓库（github.com/openclaw/openclaw）  
**分析师**：AI 开源项目观察员

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告（2026-03-13）

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现 **高活跃度、强安全导向、多通道融合** 的演进态势。主流项目普遍聚焦于 **稳定性修复、安全加固与多模态支持**，反映出从“功能验证”向“生产可用”的关键转型。WebSocket 安全、OAuth 流程一致性、沙箱隔离等成为跨项目共性痛点，而 Cortex 记忆系统、MCP 工具集成、Token 成本优化等正成为技术差异化核心。社区对 **即插即用体验** 和 **企业级部署能力** 的需求显著上升，推动项目向“通信中枢 + 智能代理平台”融合演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 新版本发布 | 健康度评估 |
|------|---------------|------------|-------------|-------------|
| **OpenClaw** | 500 | 500 | ✅ v2026.3.11（安全热修） | ⭐⭐⭐⭐☆（4.5/5） |
| **NanoBot** | 49 | 77 | ❌（最新 PyPI: 0.1.4.post2） | ⭐⭐⭐⭐（4/5） |
| **Zeroclaw** | 50 | 50 | ✅ v0.1.9a（CI/配置修复） | ⭐⭐⭐⭐☆（4.5/5） |
| **PicoClaw** | 23 | 101 | ✅ Nightly v0.2.2-nightly.20260313 | ⭐⭐⭐⭐（4/5） |
| **NanoClaw** | 22 | 32 | ❌ | ⭐⭐⭐⭐（4/5） |
| **IronClaw** | 50 | 50 | ❌（主干含高危修复） | ⭐⭐⭐⭐☆（4.5/5） |
| **LobsterAI** | 4 | 10 | ✅ v0.2.4（Bug 修复） | ⭐⭐⭐⭐（4/5） |
| **TinyClaw** | 4 | 11 | ✅ v0.0.11 & v0.0.12（架构升级） | ⭐⭐⭐⭐（4/5） |
| **Moltis** | 11 | 17 | ❌ | ⭐⭐⭐⭐（4/5） |
| **CoPaw** | 50 | 50 | ✅ v0.0.7（Tool Guard 安全层） | ⭐⭐⭐⭐☆（4.5/5） |
| **ZeptoClaw** | 11 | 6 | ❌ | ⭐⭐⭐⭐☆（4.5/5） |
| **EasyClaw** | 1 | 1 | ✅ v1.6.7（macOS 兼容性） | ⭐⭐⭐（3.5/5） |

> 注：健康度综合考量响应速度、Bug 修复效率、架构演进清晰度与社区信任度。

---

## 3. OpenClaw 在生态中的定位

**核心优势**：  
- **规模最大、响应最快**：单日处理 500+ Issues/PRs，体现成熟工程治理能力；  
- **安全领导力**：率先修复 WebSocket Origin 验证漏洞（GHSA-5wcw-8...），推动行业安全基线提升；  
- **企业级部署支持**：对 Nginx 反向代理、多节点环境的深度适配，优于多数竞品。

**技术路线差异**：  
- 相比 NanoBot/Zeroclaw 侧重“轻量代理”，OpenClaw 强调 **生产级稳定性与可观测性**（如 cron 诊断日志、看门狗机制）；  
- 相较 TinyClaw/Moltis 的“单二进制哲学”，OpenClaw 采用模块化网关架构，更适合复杂集成场景。

**社区规模**：  
- GitHub 互动量（Issues/PRs）为第二梯队（如 CoPaw、IronClaw）的 2–3 倍，生态影响力显著。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多模态支持（视觉/文件）** | OpenClaw (#28744)、NanoClaw (#917)、CoPaw (#981) | Agent 需解析图片、PDF、音视频，突破纯文本限制 |
| **安全沙箱与权限隔离** | NanoBot (#1873)、Moltis (#405)、CoPaw (v0.0.7 Tool Guard) | 防止工具执行越权、配置泄露，强化 exec 沙箱 |
| **长期记忆与上下文管理** | OpenClaw (#44421 Cortex)、NanoClaw (#979 LanceDB)、TinyClaw (#202 agent_messages) | 跨会话记忆、Token 压缩、结构化上下文 |
| **多通道状态一致性** | IronClaw (#995)、CoPaw (#1383)、Zeroclaw (#2907) | Web/Telegram/飞书间 routine/消息同步 |
| **部署简化与容器化** | Moltis (#401)、NanoClaw (#1004)、LobsterAI (#395) | Docker 环境变量配置、DooD 支持、启动性能优化 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 企业级多通道网关 | 中大型组织、DevOps 团队 | 模块化网关 + 插件化通道，强安全合规 |
| **NanoBot** | 轻量多模型路由 | 开发者、研究者 | Python 生态，强调模型兼容性与 CLI 体验 |
| **Zeroclaw** | MCP 工具生态集成 | 工具开发者、自动化工程师 | Rust 实现，原生 MCP 服务器支持，高性能 |
| **PicoClaw** | 边缘设备适配 | IoT/嵌入式开发者 | 轻量 Go 实现，OpenWrt 支持，低资源占用 |
| **TinyClaw** | 多 Agent 协作平台 | 团队协作场景 | TypeScript 全栈，TinyOffice 管理界面 |
| **CoPaw** | 安全优先的桌面助手 | 企业安全敏感用户 | 内置 Tool Guard，预执行审批机制 |
| **ZeptoClaw** | CLI 优先的智能终端 | 开发者、SRE | Rust CLI 工具链，强调交互体验与流式响应 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 Issues/PRs + 频繁发布）：  
  **OpenClaw、CoPaw、IronClaw、TinyClaw** —— 日均处理 50+ Issues，周级发布节奏，功能与修复并行。
  
- **质量巩固阶段**（中低活跃度 + 聚焦稳定性）：  
  **LobsterAI、EasyClaw、Moltis** —— 发布以 Bug 修复为主，社区讨论集中于兼容性、部署体验，技术债清理中。

- **新兴探索阶段**（高 PR 活跃度但用户基数小）：  
  **ZeptoClaw、PicoClaw** —— 核心团队驱动强，功能创新快（如 shimmer CLI、OpenWrt 适配），但社区反馈闭环尚待加强。

---

## 7. 值得关注的趋势信号

1. **安全成为第一优先级**：  
   WebSocket 劫持、OAuth 参数错误、exec 沙箱逃逸等高危漏洞被多项目（OpenClaw、NanoBot、CoPaw）同步响应，**安全设计已从“可选”变为“准入标准”**。

2. **从“单 Agent”到“协作平台”**：  
   TinyClaw 的 Projects/Chat Rooms、CoPaw 的多工作区架构、OpenClaw 的 Cortex 记忆共享，表明 **多智能体协同** 是下一阶段核心战场。

3. **Token 成本驱动架构革新**：  
   NanoClaw 的 Inline Compaction、IronClaw 的上下文压缩，反映 **长对话经济性** 已成为用户体验瓶颈，需系统级优化。

4. **桌面端体验追赶移动端**：  
   EasyClaw 修复 Dock 图标、LobsterAI 优化 Electron 启动速度，说明 **原生桌面集成** 是提升留存的关键。

> **对开发者的建议**：  
> - 优先评估项目的 **安全默认配置** 与 **沙箱成熟度**；  
> - 关注支持 **MCP 协议** 和 **结构化记忆** 的项目（如 Zeroclaw、OpenClaw）；  
> - 若面向企业用户，选择具备 **多通道状态同步** 和 **审计日志** 能力的平台（如 OpenClaw、CoPaw）。

---  
**报告生成时间**：2026-03-13  
**分析师**：AI 开源项目观察员

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-13）

---

## 1. 今日速览

NanoBot 社区活跃度持续高涨，过去24小时内共产生 **49条 Issues 更新**（新开/活跃28条，关闭21条）和 **77条 PR 更新**（待合并35条，已合并/关闭42条），显示出强劲的开发与用户参与势头。尽管无新版本发布，但多项关键功能增强与安全修复已通过 PR 合并落地，项目整体处于快速迭代与稳定性优化并行阶段。社区对多通道支持、模型兼容性及安全隔离的关注度显著上升。

---

## 2. 版本发布

**无新版本发布**。最新 PyPI 版本仍为 `0.1.4.post2`，但 GitHub 上已有多个重要修复与功能改进待发布（见下文进展）。

---

## 3. 项目进展

今日多项重要 PR 被合并或推进，显著提升系统稳定性与可扩展性：

- **#1856 [CLOSED]**：修复工作空间模板同步时误读隐藏文件（如 macOS `.` 开头文件）导致的 Unicode 解码错误，提升跨平台兼容性。[链接](https://github.com/HKUDS/nanobot/pull/1856)
- **#1944 [CLOSED]**：自动剔除推理模型（如 DeepSeek、QwQ）返回的 `reasoning_content` 和 `thinking_blocks`，避免其占用上下文 token 窗口，符合行业最佳实践。[链接](https://github.com/HKUDS/nanobot/pull/1944)
- **#1930 [CLOSED]**：修复 CLI 模式下异步子代理输出乱码问题（#1904），解决 `prompt_toolkit` 与 Rich 渲染冲突，改善终端交互体验。[链接](https://github.com/HKUDS/nanobot/pull/1930)
- **#1608 [CLOSED]**：新增对 VolcEngine 和 BytePlus（含 Coding Plan）AI 平台的支持，扩展国内云厂商生态集成能力。[链接](https://github.com/HKUDS/nanobot/pull/1608)

此外，**#137 [CLOSED]** 引入 Mem0 启发的自适应长期记忆系统，为 agent 提供持久化上下文能力，是架构层面的重要演进。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映核心用户需求：

- **#1873 [OPEN]**：[@kinchahoy] 提出安全漏洞 —— 当前 agent 可访问 `config.json` 导致密钥泄露风险，建议以非 root 用户运行核心循环。该问题已获 **PR #1940** 响应，通过 bubblewrap 沙箱隔离 `exec()` 调用。[链接](https://github.com/HKUDS/nanobot/issues/1873)
- **#1719 [OPEN]**：[@trashhalo] 指出 `web_search` 硬编码 Brave 搜索引擎，阻碍第三方集成（Tavily、DuckDuckGo 等），获 **10👍**，凸显插件化架构缺失痛点。[链接](https://github.com/HKUDS/nanobot/issues/1719)
- **#1922 [OPEN]**：[@Good0007] 发布第三方 WebUI 管理面板 [nanobot-webui]，支持多用户、实时配置与技能管理，获 **3👍**，表明用户对可视化运维工具的强烈需求。[链接](https://github.com/HKUDS/nanobot/issues/1922)
- **#1692 [OPEN]**：[@aiko929] 反馈 Telegram 频道重复回复（Markdown + 纯文本各一次），影响用户体验，获 **4👍**，需紧急排查消息渲染逻辑。[链接](https://github.com/HKUDS/nanobot/issues/1692)

---

## 5. Bug 与稳定性

按严重程度排序：

| 问题 | 严重性 | 状态 | 关联 PR |
|------|--------|------|--------|
| **Telegram 重复回复** (#1692) | 高 | 未修复 | — |
| **DashScope 不支持 `tool_choice="required"` 致记忆归档失败** (#1927) | 高 | 未修复 | — |
| **QQ 频道 Markdown 破坏旧客户端兼容性** (#1936) | 中 | **已有修复** | #1941 |
| **Matrix 频道启动失败** (#1300) | 中 | 未修复 | — |
| **OpenRouter StepFun 模型报 400 错误** (#1157) | 中 | 未修复 | — |
| **CLI 子代理输出乱码** (#1904) | 中 | **已修复** | #1930 |

> 注：#1936 已由 #1941 修复，恢复 QQ 纯文本回退机制。

---

## 6. 功能请求与路线图信号

用户明确提出且已有对应 PR 的功能需求，预示下一版本重点方向：

- **安全沙箱化执行**：#1873 + #1940 → 将 exec 调用隔离至 bubblewrap 沙箱，防止配置泄露。
- **技能可禁用机制**：#1932 + #1934 → 支持 `enabled: false` 字段，无需删除即可关闭技能。
- **多模型提供商扩展**：
  - Google Vertex AI 支持（#1943）
  - Mistral 转录服务通用化（#1680）
  - OpenRouter 原生模型 ID 保留（#1938）
- **消息通道增强**：
  - XMPP 协议支持（#1945）
  - DingTalk 文件/图片/富文本接收（#1925）
  - Telegram 回复消息内容读取（#1875，已关闭但未合并）

此外，**WebUI 生态**（#1922）和 **Bot Council 多代理协作**（#1928）可能成为未来高阶功能探索方向。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “飞书配置成功但 gateway 报 `No channels enabled`”（#176）→ 配置验证流程不清晰。
  - “Nvidia 模型不再支持”（#1822）→ 模型兼容性退化。
  - “文档无中文，显得你了？”（#1617）→ 国际化文档缺失引发负面情绪。
  - “commands 添加后不生效”（#1829）→ Docker 部署下技能加载机制存在缺陷。

- **满意点**：
  - 对 Mem0 式记忆系统（#137）、VolcEngine 支持（#1608）表示认可。
  - 赞赏社区响应速度，如 #1904 乱码问题当日修复。

- **使用场景**：
  - 企业内飞书/钉钉集成、个人 Telegram/QQ 助手、多模型路由（OpenRouter）、容器化部署（Docker）。

---

## 8. 待处理积压

以下长期未响应 Issue 需维护者重点关注：

- **#1059 [OPEN]**：PyPI 最新版未同步（0.1.4.post1 未发布），影响用户安装体验。[链接](https://github.com/HKUDS/nanobot/issues/1059)（自 2026-02-23 起）
- **#1300 [OPEN]**：Matrix 频道无法启动，日志显示配置解析异常，无官方回应。[链接](https://github.com/HKUDS/nanobot/issues/1300)（自 2026-02-27 起）
- **#100 [OPEN]**：Telegram “Message text is empty” 错误未优雅处理，可能导致服务崩溃。[链接](https://github.com/HKUDS/nanobot/issues/100)（自 2026-02-04 起）
- **#1719 [OPEN]**：web_search 插件化架构缺失，阻碍社区贡献，多次 PR 尝试未果。[链接](https://github.com/HKUDS/nanobot/issues/1719)（自 2026-03-08 起）

> 建议优先处理 #1059（发布流程）与 #1719（架构扩展性），二者对项目健康度影响深远。

---  
*数据来源：GitHub HKUDS/nanobot 仓库，截至 2026-03-13 00:00 UTC*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-13）

---

## 1. 今日速览

Zeroclaw 项目在24小时内保持高度活跃，共处理 **50条 Issues** 和 **50条 Pull Requests**，社区贡献与核心开发并行推进。项目发布新版本 **v0.1.9a**，修复了关键环境变量解析与CI发布流程问题。多个高优先级功能（如 Matrix 多房间支持、WeCom 通道、MCP 工具集成）进入实现阶段，同时一批长期积压的 Bug 被集中关闭，整体项目健康度显著提升。

---

## 2. 版本发布

### 🔖 v0.1.9a（2026-03-13）
- **修复内容**：
  - `fix(memory)`: 修复从 `embedding_provider` 环境变量而非默认 `default_provider` 解析 `api_key` 的问题（[#3184](https://github.com/zeroclaw-labs/zeroclaw/pull/3184)）
  - `fix(ci)`: 降级 `action-gh-release` 至 v2.4.2，解决自动发布流程中断问题（[#3184](https://github.com/zeroclaw-labs/zeroclaw/pull/3184)）
- **影响范围**：嵌入服务配置、CI/CD 发布稳定性
- **迁移说明**：无破坏性变更，用户无需调整配置。

> 📦 Release 链接：[v0.1.9a](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.9a)

---

## 3. 项目进展

今日合并/关闭的重要 PR 显示项目在多通道支持、工具链扩展和基础设施稳定性方面取得实质性进展：

- **通道系统增强**：
  - 合并 [#3224](https://github.com/zeroclaw-labs/zeroclaw/pull/3224)（Matrix 多房间支持）后，新增 [#3378](https://github.com/zeroclaw-labs/zeroclaw/pull/3378) 修复由此引入的消息路由回归问题，确保多房间场景下回复正确投递。
  - [#3305](https://github.com/zeroclaw-labs/zeroclaw/pull/3305) 实现 WeCom AI 机器人长连接支持，填补企业微信生态集成空白。
  - [#3371](https://github.com/zeroclaw-labs/zeroclaw/pull/3371) 为 Matrix 通道添加“已读标记”与“正在输入”通知，提升用户体验。

- **工具与代理能力扩展**：
  - [#2013](https://github.com/zeroclaw-labs/zeroclaw/pull/2013)（XL 规模）完成 MCP（Model Context Protocol）外部服务器支持，使 agent 可动态加载远程工具，标志架构向开放工具生态迈出关键一步。
  - [#3274](https://github.com/zeroclaw-labs/zeroclaw/pull/3274) 实现 JIT Tools RAG 注入机制，结合子代理发现与缓存，提升工具调用效率。

- **可观测性与部署优化**：
  - [#3374](https://github.com/zeroclaw-labs/zeroclaw/pull/3374) 支持通过配置启用 verbose 观测后端，便于调试。
  - [#3372](https://github.com/zeroclaw-labs/zeroclaw/pull/3372) 提供带 shell 的 Docker 镜像构建目标，解决 distroless 镜像无法执行命令行工具的问题。

> ✅ 项目整体向“多通道、强工具、易观测”方向稳步演进。

---

## 4. 社区热点

### 🔥 高互动 Issues/PRs

| 议题 | 类型 | 评论数 | 点赞 | 链接 |
|------|------|--------|------|------|
| #2922 📢 Community Update: Moving Forward Together | 社区公告 | 3 | 12 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) |
| #2907 Allow ZeroClaw to send messages to a channel | 功能请求 | 0 | 3 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2907) |
| #2884 WebSocket /ws/chat 401: token in query param vs header | Bug | 0 | 2 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2884) |

**分析**：
- **#2922** 获得最高点赞（12），反映社区对项目透明度和团队沟通的高度认可，维护者通过坦诚沟通重建信任。
- **#2907** 和 **#2884** 揭示用户对“主动消息推送”和“前端-后端认证一致性”的强烈需求，推动相关 PR（如 [#3367](https://github.com/zeroclaw-labs/zeroclaw/pull/3367) 实现 WebSocket 全代理循环）加速落地。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（S0/S1）

| Issue | 严重性 | 状态 | Fix PR | 链接 |
|-------|--------|------|--------|------|
| #2910 WebUI agent not work. v0.1.8 | S0（数据丢失/安全风险） | OPEN | — | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) |
| #2896 Discord websocket silently stops receiving events | S0 | CLOSED | — | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2896) |
| #2510 Console always prints activation warning when `initialized=false` | S1（工作流阻塞） | OPEN | — | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) |
| #3024 Panic in loop_.rs with Chinese characters | — | CLOSED | — | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/3024) |
| #2984 CLI agent crashes on Chinese input with spaces | — | CLOSED | — | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2984) |

**说明**：
- 中文字符处理相关的 panic 问题（#3024、#2984）已修复，体现对国际化输入的重视。
- Discord 连接静默中断（#2896）已关闭，可能已通过底层连接重试机制修复。
- **#2910（WebUI 连接错误）** 和 **#2510（误报激活警告）** 仍为开放状态，需优先排查。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能（已有对应 PR）

| 功能 | 相关 Issue | 实现 PR | 状态 |
|------|-----------|--------|------|
| Matrix 作为 cron 任务交付通道 | #3361 | [#3373](https://github.com/zeroclaw-labs/zeroclaw/pull/3373) | OPEN |
| WeCom 通道支持 | #3090 | [#3305](https://github.com/zeroclaw-labs/zeroclaw/pull/3305) | OPEN |
| MCP 工具支持 | #3153 | [#2013](https://github.com/zeroclaw-labs/zeroclaw/pull/2013) | OPEN |
| Azure OpenAI 提供商支持 | #3176 | — | CLOSED（未实现） |
| 可配置 LLM 请求超时 | #2926 | — | CLOSED（未实现） |

**判断**：
- **Matrix cron 交付**、**WeCom 支持**、**MCP 集成** 极可能纳入下一版本（v0.2.0），因已有活跃 PR 且解决明确用户痛点。
- Azure OpenAI 和超时配置虽被关闭，但需求真实存在，建议后续版本中重新评估。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：
  - “Debian 12 安装脚本返回 404”（#2914）→ 文档/发布流程需优化。
  - “Docker 镜像无 shell，无法执行 git 等工具”（#3359）→ 已响应，提供 shell 镜像构建方案。
  - “Telegram 频道无法接收机器人主动消息”（#2907）→ 推动通道双向通信能力建设。

- **满意点**：
  - 社区公告（#2922）获高度评价：“感谢团队的透明沟通，这让我们更愿意长期支持”。
  - MCP 支持（#3153）被赞“终于可以接入自定义工具了”。

- **使用场景**：
  - 企业微信自动化客服（#3090）
  - 本地 LLM + 浏览器自动化（#2963）
  - Raspberry Pi 边缘部署（#3261）

---

## 8. 待处理积压

### ⏳ 长期未响应重要议题

| Issue | 类型 | 创建日期 | 最后更新 | 状态 | 链接 |
|-------|------|----------|----------|------|------|
| #8 Gateway HTTP responses missing CORS and security headers | 安全 | 2026-02-14 | 2026-03-12 | OPEN | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/8) |
| #2442 code-quality: Formatting violations | 代码质量 | 2026-03-01 | 2026-03-12 | OPEN | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2442) |
| #2494 channels_config.feishu cannot start | Bug | 2026-03-02 | 2026-03-12 | OPEN | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) |

**建议**：
- **#8** 涉及安全风险（CWE-352），应优先修复。
- **#2442** 影响 CI 质量门禁，建议分配人力执行 `cargo fmt` 并合并。
- **#2494** 飞书通道启动失败，影响企业用户，需验证配置示例或修复连接逻辑。

---

> 📊 **项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
> 活跃度极高，核心功能持续迭代，社区信任重建成功，少量安全与体验问题待闭环。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-13）

---

## 1. 今日速览

PicoClaw 项目在 2026-03-13 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **23 条 Issues**（14 新开/活跃，9 已关闭）和 **101 条 PR**（71 待合并，30 已合并/关闭），显示出强劲的开发节奏和问题响应能力。项目发布了一个新的 nightly 版本（`v0.2.2-nightly.20260313.19835b2f`），聚焦于稳定性修复与多通道适配优化。整体项目健康度良好，Bug 修复与功能增强并重，社区参与度显著提升。

---

## 2. 版本发布

### 🔹 Nightly Build: `v0.2.2-nightly.20260313.19835b2f`
- **类型**：自动化 nightly 构建（非稳定版）
- **说明**：本次 nightly 版本基于 main 分支最新提交构建，包含过去数日合并的多个关键修复与功能增强，建议用于测试环境。
- **主要变更范围**（基于 Changelog）：
  - 修复 Telegram 长轮询断连后无法重连问题（#216）
  - 修复 QQ 渠道消息绑定元数据缺失问题（#1242）
  - 修复 OpenRouter 传输错误导致回退链中断问题（#1419）
  - 新增 Discord 频道名称注入动态上下文支持（#1451）
  - 修复 SVG MIME 类型错误（`image/svg` → `image/svg+xml`）
- **⚠️ 注意**：此为开发预览版，可能存在未发现的不稳定性，生产环境请谨慎使用。
- **完整变更日志**：[GitHub Compare v0.2.2...main](https://github.com/sipeed/picoclaw/compare/v0.2.2...main)

---

## 3. 项目进展

今日共 **30 个 PR 被合并或关闭**，重点推进了以下方向：

| 类别 | 进展摘要 | 代表 PR |
|------|--------|--------|
| **通道稳定性** | 修复 Telegram 断连重连机制、QQ 消息元数据绑定、Matrix/LINE 防 DoS 漏洞 | [#1455](https://github.com/sipeed/picoclaw/pull/1455), [#1456](https://github.com/sipeed/picoclaw/pull/1456), [#1405](https://github.com/sipeed/picoclaw/issues/1405) |
| **Agent 核心逻辑** | 实现临时 Provider 失败自动重试机制，提升容错能力 | [#1457](https://github.com/sipeed/picoclaw/pull/1457) |
| **上下文增强** | Discord 频道名称正式纳入 agent 动态上下文，提升多频道场景下的语义理解 | [#1452](https://github.com/sipeed/picoclaw/pull/1452) |
| **Provider 扩展** | 新增 ModelScope（魔搭）Provider 支持，响应中文社区需求 | [#1447](https://github.com/sipeed/picoclaw/pull/1447) |
| **配置与工具链** | 修复环境变量加载、Cron 时区识别、SVG MIME 类型等基础体验问题 | [#1445](https://github.com/sipeed/picoclaw/pull/1445), [#1444](https://github.com/sipeed/picoclaw/pull/1444), [#1443](https://github.com/sipeed/picoclaw/pull/1443) |

> ✅ 项目整体在 **多通道鲁棒性** 和 **Agent 上下文感知能力** 方面迈出关键步伐。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥ 3）

| Issue | 主题 | 评论数 | 分析 |
|------|------|--------|------|
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) | 如何正确配置本地 Ollama 模型？ | 16 | 用户普遍反映 agent 能启动但无响应，暴露 **本地 LLM 集成文档缺失** 和 **配置验证机制不足** 的问题，亟需官方配置模板或调试指南。 |
| [#1218](https://github.com/sipeed/picoclaw/issues/1218) | Agent 重构：定义 Agent 是什么 | 16 | 核心架构讨论，围绕 `SOUL.md` 与 `AGENT.md` 的设计展开，反映社区对 **Agent 抽象层标准化** 的高度关注，是未来可扩展性的关键。 |
| [#1439](https://github.com/sipeed/picoclaw/issues/1439) | Agent 重构：上下文管理边界与压缩策略 | 4 | 属于 #1216 路线图的一部分，讨论上下文窗口、token 预算、会话边界等高级功能，显示用户对 **长对话稳定性** 的迫切需求。 |

> 💡 社区正从“功能使用”向“架构设计”深化，表明项目已进入成熟发展阶段。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（已修复或存在 Fix PR）

| Issue | 描述 | 严重性 | 状态 |
|------|------|--------|------|
| [#1405](https://github.com/sipeed/picoclaw/issues/1405) | Matrix 通道下载媒体无大小限制 → 内存耗尽 DoS | 高危 | ✅ 已关闭，修复中 |
| [#1407](https://github.com/sipeed/picoclaw/issues/1407) | LINE webhook 读取无限请求体 → DoS 风险 | 高危 | ✅ 已关闭，修复中 |
| [#1419](https://github.com/sipeed/picoclaw/issues/1419) | OpenRouter 传输重置导致回退链中断 | 中危 | ✅ 已合并修复（#1453） |
| [#1212](https://github.com/sipeed/picoclaw/issues/1212) | Telegram 多消息后“正在输入…”状态不清除 | 中危 | ✅ 已关闭，疑似修复 |
| [#1410](https://github.com/sipeed/picoclaw/issues/1410) | SVG 文件 MIME 类型错误（`image/svg` 而非 `image/svg+xml`） | 低危 | ✅ 已合并修复（#1443） |

> 🔒 安全类 Bug 得到快速响应，体现项目对稳定性的重视。

---

## 6. 功能请求与路线图信号

### 📌 高潜力新功能（已有 PR 或强社区呼声）

| 功能 | 来源 | 状态 | 可能性 |
|------|------|------|--------|
| **ModelScope（魔搭）Provider 支持** | [#1438](https://github.com/sipeed/picoclaw/issues/1438) | ✅ PR #1447 已提交 | ⭐⭐⭐⭐☆（高，中文生态刚需） |
| **Azure OpenAI Provider 支持** | [#1424](https://github.com/sipeed/picoclaw/issues/1424) | 🔄 讨论中 | ⭐⭐⭐☆☆（企业用户需求明确） |
| **OpenWrt 系统适配** | [#1132](https://github.com/sipeed/picoclaw/issues/1132) | 💬 提议阶段 | ⭐⭐☆☆☆（ niche 但具战略意义） |
| **Telegram 原生反应（Reaction）支持** | [#1328](https://github.com/sipeed/picoclaw/issues/1328) | 💬 低优先级 | ⭐⭐⭐☆☆（提升交互体验） |
| **Agent 上下文压缩与 token 预算管理** | [#1439](https://github.com/sipeed/picoclaw/issues/1439) | 🔄 进行中 | ⭐⭐⭐⭐⭐（核心路线图） |

> 🚀 ModelScope 和 Agent 上下文管理最有可能纳入下一稳定版本。

---

## 7. 用户反馈摘要

### 🗣️ 真实用户声音提炼

- **痛点**：
  - “配置本地 Ollama 模型后 agent 无响应，日志无明确错误提示” → 缺乏调试工具与配置验证（#1161）
  - “手机热点下飞书消息间歇性丢失，WiFi 正常” → 网络环境敏感性高，连接稳定性待优化（#1437）
  - “Web 页面 JSON 编辑器在 Firefox 高度塌陷” → 前端兼容性需加强（#1364）

- **满意点**：
  - “Discord 频道名终于能显示了，多频道管理清晰多了！”（#1451）
  - “nightly 版本修复 Telegram 断连问题后稳定很多”

- **使用场景**：
  - 企业内网部署（飞书/QQ/Discord 多通道）
  - 本地私有化 LLM 集成（Ollama/OpenRouter）
  - 路由器等边缘设备运行（OpenWrt 适配呼声）

---

## 8. 待处理积压

### ⏳ 长期未响应重要 Issue（>7 天无维护者回复）

| Issue | 主题 | 创建日期 | 状态 | 建议 |
|------|------|----------|------|------|
| [#440](https://github.com/sipeed/picoclaw/issues/440) | 替换硬编码迭代限制为上下文窗口边界 | 2026-02-18 | OPEN | 🔔 属 Agent 重构核心议题，应与 #1216 协同推进 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具 guardCommand 路径判断逻辑缺陷 | 2026-03-04 | OPEN | ⚠️ 影响工具安全性，需审查正则逻辑 |
| [#1132](https://github.com/sipeed/picoclaw/issues/1132) | OpenWrt 系统适配提议 | 2026-03-05 | OPEN | 💡 可考虑作为边缘计算特色功能立项 |

> 📌 建议维护者优先评估 #440 与 #1042，二者均涉及核心安全与架构逻辑。

---

**报告生成时间**：2026-03-13  
**数据来源**：[PicoClaw GitHub Repository](https://github.com/sipeed/picoclaw)  
**分析师备注**：项目处于快速迭代期，建议加强文档建设（尤其本地 LLM 配置）以提升新手体验。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-13）

---

## 1. 今日速览

NanoClaw 在过去24小时内保持高活跃度，共产生 **22条 Issues 更新**（15条新开/活跃，7条关闭）和 **32条 PR 更新**（21条待合并，11条已合并/关闭），显示出社区贡献与核心维护团队的高效协作。项目聚焦于 **容器化安全、Token 成本优化、多平台兼容性** 三大方向，技术债务清理与功能扩展并行推进。尽管无新版本发布，但底层架构优化（如凭证代理扩展、内联压缩机制）为后续性能提升奠定基础。整体项目健康度良好，响应及时，但部分高优先级 Bug 仍需加速闭环。

---

## 2. 版本发布

**无新版本发布**。当前开发重心集中于功能迭代与稳定性修复，预计下一版本将整合 Token 优化机制与多通道支持增强。

---

## 3. 项目进展

今日共 **11个 PR 被合并或关闭**，关键进展包括：

- **凭证代理扩展**：通过 #999（[链接](https://github.com/qwibitai/nanoclaw/pull/999)）实现对 `GROQ_API_KEY` 和 `OPENAI_API_KEY` 的代理路由，延续 #798 的安全设计原则，防止敏感凭证进入容器环境。
- **Token 优化机制落地**：系列 Issue（#980、#981、#982）及配套 PR 完成设计闭环，提出 **Inline Compaction**（对话历史压缩）、**响应长度控制**、**CLAUDE.md 自动压缩** 三项零额外 Token 成本的优化策略，显著降低长期会话开销。
- **消息泄露修复**：#1005（[链接](https://github.com/qwibitai/nanoclaw/pull/1005)）阻止 `[SILENT]` 前缀的内部消息外泄至 Google Chat 等用户可见通道，提升系统行为一致性。
- **部署支持增强**：#1004（[链接](https://github.com/qwibitai/nanoclaw/pull/1004)）引入 Dokploy 与 Docker Compose 生产级部署方案，支持 Docker-out-of-Docker（DooD）模式，扩大运维灵活性。

> 项目整体在 **安全性、成本控制、可运维性** 三个维度取得实质性推进。

---

## 4. 社区热点

### 🔥 高关注度 Issues

- **#730**：[CLAUDE_CODE_OAUTH_TOKEN 过期导致容器每日 401 错误](https://github.com/qwibitai/nanoclaw/issues/730)  
  **诉求**：用户依赖 OAuth Token 作为默认认证方式，但缺乏自动刷新机制，导致后台服务中断。反映 **生产环境可用性痛点**，需引入 Token 刷新或 fallback 到 API Key 的机制。

- **#865**：[容器化 ≠ 安全：代理层过度信任容器内脚本](https://github.com/qwibitai/nanoclaw/issues/865)  
  **诉求**：安全研究者指出架构设计缺陷——部分脚本驻留 agent 层而非 host 层，存在权限逃逸风险。推动 **最小权限原则重构**，可能影响未来技能部署模型。

- **#989**：[Gemini Pro 容器延迟高达 3.5 分钟](https://github.com/qwibitai/nanoclaw/issues/989)  
  **诉求**：上下文膨胀（123K tokens）与多次 API 调用导致性能劣化。直接催生 Token 优化机制（#980–#986），体现 **性能问题驱动架构演进** 的典型路径。

### 💬 高互动 PR

- **#862**：[WhatsApp 文件收发支持](https://github.com/qwibitai/nanoclaw/pull/862)  
  实现端到端文件传输能力，覆盖图像、文档、音视频，满足用户对 **富媒体交互** 的核心需求。

- **#917**：[WhatsApp/Gmail 通道 + 语音转录 + 图像视觉 + PDF 摘要](https://github.com/qwibitai/nanoclaw/pull/917)  
  单 PR 集成多通道与多模态能力，展示社区对 **一体化通信中枢** 的强烈期待。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| 🔴 High | #730 | OAuth Token 过期致服务中断 | ❌ 无 PR |
| 🔴 High | #341 | add-discord 技能含过时 Apple Container 代码，破坏 Docker 兼容性 | ❌ 无 PR |
| 🔴 High | #827 | `FinishReason::ToolUse` 但无 tool calls 被误判为成功 | ✅ #1003 已提交修复 |
| 🔴 High | #830 | 定时任务在会话繁忙时静默丢弃 | ❌ 无 PR |
| 🟠 Medium | #829 | SOUL.md 缺乏防工具调用伪造规则 | ❌ 无 PR |
| 🟠 Medium | #973 | 安装过程极慢，质疑配置复杂度 | ❌ 无 PR |
| 🟠 Medium | #989 | Gemini Pro 高延迟（上下文膨胀） | ⚠️ 优化机制设计中（#980–#986） |

> 高优先级 Bug 中，仅 #827 有对应修复 PR，其余需维护者优先处理。

---

## 6. 功能请求与路线图信号

以下功能请求已获得实质性 PR 支持，**极可能纳入下一版本**：

- ✅ **多平台容器支持**：#957 提议支持 Podman，#1010 修复 Apple Container 挂载兼容性 → 推动跨平台部署标准化。
- ✅ **语义记忆能力**：#979 / #1013 引入 LanceDB + Gemini 嵌入，解决跨会话记忆缺失问题 → 提升 agent 连续性体验。
- ✅ **文件附件支持**：#1011 / #1012 实现容器 agent 发送文件 → 补全通信能力闭环。
- ✅ **Telegram 交互增强**：#1014 添加 inline keyboard 回调支持 → 提升交互丰富度。

> 路线图清晰指向 **“多通道、多模态、低成本、高安全”** 的智能体通信中枢。

---

## 7. 用户反馈摘要

- **痛点**：
  - “OAuth Token 每天失效，必须手动重启服务”（#730）→ **运维负担重**
  - “Docker 用户无法使用 add-discord 技能”（#341）→ **平台兼容性断裂**
  - “Gemini 响应太慢，简单任务也要等几分钟”（#989）→ **性能体验差**

- **满意点**：
  - “凭证代理设计很棒，真正隔离了密钥”（#878 评论）→ **安全架构获认可**
  - “LanceDB 记忆技能让 agent 终于能记住我了”（#979 预期反馈）→ **长期上下文价值凸显**

- **使用场景**：
  - 企业用户通过 Discord/Telegram 部署客服 bot（#862、#1014）
  - 研究人员利用 Gmail + 文件处理做自动化摘要（#917）
  - 开发者通过 GitHub MCP 实现代码协作（#976）

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 建议行动 |
|------|------|------|--------|--------|
| Issue | #341 | add-discord 技能破坏 Docker 兼容性 | 20 天 | 高优先级修复，影响广泛用户 |
| Issue | #730 | OAuth Token 过期问题 | 8 天 | 需设计自动刷新或告警机制 |
| Issue | #830 | 定时任务静默丢弃 | 5 天 | 应添加重试/延迟队列逻辑 |
| PR | #862 | WhatsApp 文件收发 | 4 天 | 功能完整，建议加速 review |
| PR | #917 | 多通道多模态集成 | 3 天 | 大规模变更，需充分测试 |

> 建议维护者优先处理 **#341 和 #730**，二者均属高影响、低修复成本问题，可显著提升用户满意度。

--- 

**报告生成时间**：2026-03-13  
**数据来源**：GitHub Repository `qwibitai/nanoclaw`

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-13）

---

## 1. 今日速览

IronClaw 项目在2026年3月12日至13日期间保持高度活跃，社区与核心团队协同推进多项关键修复与功能增强。过去24小时内共处理 **50条 Issues**（新开/活跃36条，关闭14条）和 **50条 Pull Requests**（待合并24条，已合并/关闭26条），显示出高效的迭代节奏。尽管无新版本发布，但通过两次 staging 到 main 的自动 promotion（#1032、#1065），多个高优先级 bug 和安全修复已进入主干。项目整体健康度良好，重点聚焦于稳定性提升、安全加固与跨通道一致性优化。

---

## 2. 版本发布

**无新版本发布**。  
最新代码变更通过 staging 分支自动 promotion 机制合并至 main 分支，未触发正式 release 流程。用户可通过 main 分支获取最新修复。

---

## 3. 项目进展

今日合并/关闭的重要 PR 显著提升了系统稳定性与安全性：

- **#1083**（[链接](https://github.com/nearai/ironclaw/pull/1083)）：批量修复11个关键问题，包括 webhook 认证绕过（#1033）、中继通道连续失败、无限递归及上下文无限增长等高危漏洞，显著增强生产环境安全性。
- **#1070**（[链接](https://github.com/nearai/ironclaw/pull/1070)）：全面修复扩展生命周期管理 bug，统一 OAuth 与 token 认证的 UX 流程，提升 WASM 工具与通道的可靠性。
- **#1086**（[链接](https://github.com/nearai/ironclaw/pull/1086)）：为 WASM 工具添加 `tool_info` 模式发现机制，解决提示词膨胀问题，改善 LLM 调用效率。
- **#1092**（[链接](https://github.com/nearai/ironclaw/pull/1092)）：跟进 #1086 的代码审查反馈，优化 schema hint 处理逻辑，避免字符串突变带来的维护风险。
- **#1013**（[链接](https://github.com/nearai/ironclaw/pull/1013)）：为 Linux 安装器添加 musl 目标支持，解决老旧 glibc 系统上的二进制兼容性问题。

此外，CI 流程持续优化（#1090、#1091），确保 staging promotion 工作流稳定运行。

---

## 4. 社区热点

以下 Issues 引发较高关注，反映用户核心痛点：

- **#1060**（[链接](https://github.com/nearai/ironclaw/issues/1060)）：用户报告扩展安装失败，因下载链接返回 HTTP 404。该问题指向 release asset 发布机制缺陷，可能影响新用户 onboarding。
- **#992**（[链接](https://github.com/nearai/ironclaw/issues/992)）：Telegram 通道中 Google OAuth URL 参数错误（`clientid` 而非 `client_id`），导致认证失败。此问题暴露跨平台 OAuth 实现不一致。
- **#995**（[链接](https://github.com/nearai/ironclaw/issues/995)）：Web 聊天创建的 routines 在 Telegram 中不可见，表明多通道状态同步存在断裂，影响用户体验一致性。

这些 Issue 均标记为 P1，已有相关修复在 #1070、#1083 中部分覆盖，但需进一步验证端到端行为。

---

## 5. Bug 与稳定性

按严重程度排序的高优先级 Bug：

| 严重程度 | Issue | 描述 | 修复状态 |
|--------|------|------|--------|
| **CRITICAL** | #1033（[链接](https://github.com/nearai/ironclaw/issues/1033)） | Webhook 认证绕过（secret 未配置时） | ✅ 已修复于 #1083 |
| **CRITICAL** | #823（[链接](https://github.com/nearai/ironclaw/issues/823)） | routine_engine 中 N+1 查询模式，可能导致性能雪崩 | ⚠️ 待修复（未关联 PR） |
| **CRITICAL** | #813（[链接](https://github.com/nearai/ironclaw/issues/813)） | 非事务性多步上下文更新，存在数据不一致风险 | ⚠️ 待修复（未关联 PR） |
| **P1** | #996（[链接](https://github.com/nearai/ironclaw/issues/996)） | 工具审批模态框需手动刷新才显示 | ✅ 已修复于 #1070 |
| **P1** | #999（[链接](https://github.com/nearai/ironclaw/issues/999)） | Google Sheets OAuth 成功后仍返回 403 PERMISSION_DENIED | ⚠️ 调查中（可能与权限范围或缓存有关） |
| **P1** | #1076（[链接](https://github.com/nearai/ironclaw/issues/1076)） | Web/CLI 修改 routine 后未刷新事件触发缓存 | ⚠️ 待修复（影响实时性） |

> 注：#823 和 #813 虽标记为 CRITICAL，但自 3月10日 提出后尚未有对应修复 PR，需核心团队优先关注。

---

## 6. 功能请求与路线图信号

用户提出的新功能中，以下具备较高落地可能性：

- **#169**（[链接](https://github.com/nearai/ironclaw/issues/169)）：请求使混合搜索（RRF）权重可配置。该需求已被核心成员 @ilblackdragon 关注，且与 Zeroclaw 的加权融合策略形成对比，有望纳入下一版本搜索模块优化。
- **#693**（[链接](https://github.com/nearai/ironclaw/pull/693)）：复用 Codex CLI OAuth 令牌以支持 ChatGPT 后端。此 PR 已开放数日，若测试通过可降低用户配置门槛，符合“无感认证”产品方向。
- **#1044**（[链接](https://github.com/nearai/ironclaw/issues/1044)）：提议使用 Claude Code + Chrome MCP 构建 e2e 测试。该想法具有前瞻性，若能实现将极大提升自动化测试覆盖率，尤其针对 bug bash 场景。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

- **痛点**：
  - 扩展安装流程脆弱，依赖特定 release asset 路径（#1060）。
  - 多通道（Web vs Telegram）状态不一致，导致“明明创建了 routine 却说没有”（#995）。
  - OAuth 流程在不同通道表现不一，Telegram 中参数错误频发（#992）。
  - “Error: Waiting for approval” 误导用户认为系统出错，而非正常等待状态（#997）。

- **满意点**：
  - 用户对工具审批机制本身表示认可，认为“安全设计合理”（#299 评论）。
  - 部分用户赞赏 staging CI 自动 promotion 机制，“让修复更快到达 main 分支”。

- **使用场景**：
  - 用户尝试通过 Browserbase MCP 实现浏览器自动化（#299），反映对高级工具集成的需求。
  - 多通道协同（如 Web 创建 routine，Telegram 接收通知）是典型使用模式，但当前实现存在断裂。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先处理：

- **#823**（[链接](https://github.com/nearai/ironclaw/issues/823)）：CRITICAL 级 N+1 查询问题，创建于 3月10日，影响 routine_engine 性能，尚无修复 PR。
- **#813**（[链接](https://github.com/nearai/ironclaw/issues/813)）：CRITICAL 级非事务性更新问题，同样创建于 3月10日，存在数据一致性风险。
- **#625**（[链接](https://github.com/nearai/ironclaw/pull/625)）：Programmatic Tool Calling (PTC) 功能 PR，自 3月6日 开放，尚未合并，可能涉及架构评审延迟。

> 建议：对 #823 和 #813 启动专项修复 sprint；对 #625 安排核心团队设计评审会议。

--- 

**报告生成时间**：2026-03-13  
**数据来源**：GitHub IronClaw 仓库公开数据

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-13）

---

## 1. 今日速览  
LobsterAI 在过去24小时内保持高活跃度，共处理 **10条 PR**（9条已合并/关闭，1条待合并）和 **4条新 Issues**，并发布 **v0.2.4 版本**。项目整体处于快速迭代与稳定性优化阶段，核心贡献者聚焦于性能提升与关键 Bug 修复。社区反馈集中于跨平台兼容性与用户体验细节，反映出产品在真实场景中的逐步渗透。

---

## 2. 版本发布  
### 🔖 v0.2.4 正式发布  
**发布时间**：2026-03-12  
**主要修复内容**：  
- ✅ 修复 IM 渠道连接性测试引发的运行时错误（[#393](https://github.com/netease-youdao/LobsterAI/pull/393)）  
- ✅ 解决应用启动时界面卡在“加载状态”的问题（[#396](https://github.com/netease-youdao/LobsterAI/pull/396)）  

> ⚠️ **无破坏性变更**，建议所有用户升级。本次更新为纯 Bug 修复版本，不涉及 API 或配置结构调整，无需迁移操作。  
[查看完整变更日志](https://github.com/netease-youdao/LobsterAI/compare/v0.2.3...v0.2.4)

---

## 3. 项目进展  
今日合并的 PR 显著提升了系统稳定性和性能：  
- **性能优化突破**：通过 esbuild 单文件打包 + 编译缓存 + 插件预编译，将 OpenClaw Gateway 在 Windows Electron 环境下的启动时间从 **>180秒降至 ~85秒（首次）/ ~15秒（后续）**（[#395](https://github.com/netease-youdao/LobsterAI/pull/395)），极大改善用户体验。  
- **跨平台构建修复**：解决了 macOS 代码签名失败问题，确保 Apple Silicon 设备可正常分发（[#387](https://github.com/netease-youdao/LobsterAI/pull/387)）。  
- **第三方集成增强**：支持 Markdown 中自定义 URI 协议（如 `obsidian://`, `vscode://`），拓展了与外部工具的联动能力（[#380](https://github.com/netease-youdao/LobsterAI/pull/380)）。  
- **模型服务配置更新**：修正 MiniMax 提供商的默认海外 Base URL 与模型列表，提升国际用户访问稳定性（[#388](https://github.com/netease-youdao/LobsterAI/pull/388)）。  

> 项目整体向“高性能、高可用、强集成”方向迈出关键一步。

---

## 4. 社区热点  
### 🔥 最活跃 Issue：#366 — Gateway 端口与服务状态异常  
- **链接**：[#366](https://github.com/netease-youdao/LobsterAI/issues/366)  
- **讨论焦点**：用户反馈 `openclaw gateway status` 命令失败，提示“Gateway service PATH is not set”，怀疑与 18789 端口配置或 LaunchAgent 加载机制有关。  
- **背后诉求**：反映部署文档或默认配置存在模糊性，需明确 gateway 服务启动依赖与路径设置规范。已有 2 条评论追问解决方案，维护者尚未回应。  

> 该问题可能影响生产环境部署，建议优先排查并补充运维指南。

---

## 5. Bug 与稳定性  
| 严重程度 | Issue | 描述 | 是否已有 Fix |
|--------|------|------|-------------|
| ⚠️ 中 | [#390](https://github.com/netease-youdao/LobsterAI/issues/390) | Apple Silicon (ARM64) v0.2.2 无法检测 v0.2.3 更新，提示“已是最新版本” | ❌ 未修复 |
| ⚠️ 中 | [#366](https://github.com/netease-youdao/LobsterAI/issues/366) | OpenClaw Gateway 服务状态检测失败，疑似 PATH 配置问题 | ❌ 未修复 |
| ✅ 已修复 | — | IM 渠道连接性测试 Bug（v0.2.4 已包含） | ✅ 已发布 |
| ✅ 已修复 | — | 应用启动卡加载状态（v0.2.4 已包含） | ✅ 已发布 |

> 当前无高严重性崩溃报告，但 ARM64 更新检测逻辑缺陷可能影响 macOS 用户升级体验。

---

## 6. 功能请求与路线图信号  
- **高优先级需求**：  
  - **提示词优化按钮**（[#391](https://github.com/netease-youdao/LobsterAI/issues/391)）：用户建议在 UI 中增加一键优化提示词功能，降低新手使用门槛。该需求契合“AI 助手平民化”趋势，已有明确截图定位，实现成本低，**极可能被纳入 v0.2.5**。  
  - **飞书插件记忆清除机制**（[#398](https://github.com/netease-youdao/LobsterAI/issues/398)）：用户期望通过 `/new`、`/reset` 等指令重置对话上下文，反映多轮对话管理需求。需评估是否扩展通用会话控制协议。  

> 结合近期 PR 方向（如 UI 增强、第三方集成），**用户体验优化类功能将成为下一版本重点**。

---

## 7. 用户反馈摘要  
- **满意点**：  
  - 性能优化效果显著（尤其 Windows 启动速度）；  
  - 支持 Obsidian/VSC 等 URI 协议，提升工作流整合体验。  
- **痛点与不满**：  
  - macOS ARM64 版本更新检测失效，导致用户误以为无新版本；  
  - 飞书插件缺乏显式记忆清除方式，影响长对话场景下的可控性；  
  - Gateway 服务配置文档不清晰，增加部署门槛。  

> 用户群体正从开发者向普通用户扩展，**易用性与自动化能力成为关键诉求**。

---

## 8. 待处理积压  
- **长期未响应 Issue**：  
  - [#366](https://github.com/netease-youdao/LobsterAI/issues/366)（创建于 2026-03-10，已更新但无官方回复）：涉及核心服务部署问题，影响运维信心。  
- **待合并 PR**：  
  - [#388](https://github.com/netease-youdao/LobsterAI/pull/388)（MiniMax 配置更新）：虽仅1条待合并，但涉及海外服务稳定性，建议尽快 review。  

> 建议维护团队在 v0.2.5 规划前集中处理积压问题，避免技术债累积。

---  
**报告生成时间**：2026-03-13  
**数据来源**：GitHub LobsterAI 仓库公开数据

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报（2026-03-13）

---

## 1. 今日速览

TinyClaw 在过去24小时内表现出极高的开发活跃度，共处理 **11条 PR**（9条已合并/关闭，2条待合并）和 **4条 Issues**（2条新开，2条关闭），并发布 **2个新版本**（v0.0.11 和 v0.0.12）。核心贡献者 @jlia0 主导了多项关键功能迭代与紧急修复，项目整体处于快速演进阶段。社区反馈响应迅速，多个高严重性 Bug 在当日即被定位并修复，体现出较强的工程响应能力。

---

## 2. 版本发布

### 🔖 v0.0.12（最新）
**发布日期**：2026-03-12  
**核心特性**：
- ✅ **Agent Message Persistence & Event Stream**（#202）：新增 `agent_messages` SQLite 表，持久化所有 Agent 对话历史；引入简化的 `agent_message` SSE 事件，替代复杂的 `chain_step` 生命周期监听，显著优化单 Agent 聊天场景的开发体验。
- ⚠️ **破坏性变更**：旧版依赖 `chain_step` 事件监听 Agent 响应的客户端需迁移至新 `agent_message` 事件。

> 📌 [Release v0.0.12](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12)

### 🔖 v0.0.11
**发布日期**：2026-03-12  
**修复内容**：
- 🛠️ 修复因旧版 `setup-wizard.sh` 脚本导入路径失效导致的安装崩溃问题（#197），确保首次安装流程正常。

> 📌 [Release v0.0.11](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.11)

---

## 3. 项目进展

今日合并的 PR 推动 TinyClaw 在 **用户体验、系统稳定性与架构现代化** 方面取得显著进展：

| PR | 进展摘要 | 链接 |
|----|--------|------|
| #202 | 实现 Agent 消息持久化与简化事件流，为 TinyOffice 提供可靠聊天历史支持 | [PR #202](https://github.com/TinyAGI/tinyclaw/pull/202) |
| #204 | 新增交互式初始配置向导，降低新用户上手门槛 | [PR #204](https://github.com/TinyAGI/tinyclaw/pull/204) |
| #199 / #203 | 在 TinyOffice 中引入 Slack 风格“聊天室”与“项目”管理功能，提升多 Agent 协作可视化能力 | [PR #199](https://github.com/TinyAGI/tinyclaw/pull/199) / [PR #203](https://github.com/TinyAGI/tinyclaw/pull/203) |
| #201 | 新增组织架构图页面（`/office/org-chart`），直观展示 Agent 与团队层级关系 | [PR #201](https://github.com/TinyAGI/tinyclaw/pull/201) |
| #206 | 将 CLI 模块从 CommonJS 迁移至 ESM，解决 `@clack/prompts` v1.x 兼容性问题 | [PR #206](https://github.com/TinyAGI/tinyclaw/pull/206) |
| #200 | 修复 Telegram 客户端网络断连后轮询卡死问题，增强连接鲁棒性 | [PR #200](https://github.com/TinyAGI/tinyclaw/pull/200) |

> 💡 整体来看，项目正从“基础功能搭建”向“企业级协作平台”演进，重点强化了配置友好性、实时交互与多 Agent 管理体验。

---

## 4. 社区热点

### 🔥 Issue #126：Telegram Bot Auto-Reconnect Failure（6 条评论）
- **状态**：Open（自 2026-02-19 提出，今日更新）
- **讨论焦点**：用户报告 Telegram 客户端在连接断开后无法自动重连，需手动重启服务。
- **背后诉求**：期望实现类似 WebSocket 的自动恢复机制，避免因网络波动导致 Bot 失联。
- **关联进展**：今日 PR #200 已部分缓解该问题（增加超时与轮询恢复逻辑），但尚未完全解决自动重连逻辑，社区仍在期待更彻底的解决方案。

> 📌 [Issue #126](https://github.com/TinyAGI/tinyclaw/issues/126)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否已修复 |
|--------|------|------|----------|
| 🔴 Critical | #197 | v0.0.10 安装包缺失 `setup-wizard.sh`，导致首次安装失败 | ✅ 已修复（PR #198） |
| 🟠 High | #205 | CLI 命令 `tinyclaw pairing approve` 因 `@clack/prompts` 导入失败崩溃 | ✅ 已修复（PR #206，ESM 迁移） |
| 🟡 Medium | #126 | Telegram Bot 断连后无法自动重连 | ⚠️ 部分缓解（PR #200），但未闭环 |

> 所有高严重性 Bug 均在当日完成修复，体现高效运维能力。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 是否已有对应 PR | 下一版本可能性 |
|--------|------|---------------|--------------|
| TinyOffice 首次运行 Web 引导流程 | #193 | ✅ PR #204（交互式设置向导）已合并 | 高（v0.0.13 候选） |
| 实时 Agent 执行进度流 | #196（PR 本身为功能提案） | ✅ PR #196 待合并 | 极高（核心体验升级） |
| 项目与聊天室管理 | #199/#203 | ✅ 已合并 | 已落地（v0.0.12） |
| 组织架构可视化 | #201 | ✅ 已合并 | 已落地（v0.0.12） |

> 📌 用户强烈期待的“开箱即用”体验正通过 #204 和 #196 快速实现，预计将成为下一版本主打特性。

---

## 7. 用户反馈摘要

- **痛点**：
  - 首次安装依赖 CLI 和手动编辑配置，学习曲线陡峭（#193、#197）。
  - Telegram 集成在网络不稳定时表现脆弱，影响生产环境可靠性（#126）。
  - 旧版 TypeScript 技能脚本因依赖缺失导致运行时崩溃（#195、#205）。

- **满意点**：
  - 新版 TinyOffice 的聊天室与项目管理界面获得积极评价，被认为“接近 Slack 体验”。
  - Agent 消息持久化极大简化了前端开发，开发者赞赏“终于不用监听一堆 chain_step 了”。

- **使用场景**：
  - 多 Agent 团队协作（通过 Projects + Chat Rooms）
  - 长期对话历史追溯（依赖 `agent_messages` 表）
  - 企业内部分级权限管理（通过 Org Chart 可视化）

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 建议行动 |
|------|------|------|--------|--------|
| Issue | #126 | Telegram Bot Auto-Reconnect Failure | 22 天 | 需设计完整重连策略，建议参考 WebSocket reconnect 模式 |
| PR | #191 | Rebrand TinyClaw → TinyAGI | 2 天 | 涉及全量更名，需评估迁移成本与文档同步，建议 v0.1.0 前决策 |
| PR | #196 | Stream agent execution progress in real-time | 1 天 | 高价值功能，建议优先合并以支持 TinyOffice 实时状态展示 |

> ⚠️ 提醒维护者：#126 虽非崩溃级 Bug，但影响核心通信通道稳定性，建议纳入 v0.0.13 重点优化。

--- 

**报告生成时间**：2026-03-13  
**数据来源**：[TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-03-13）

---

## 1. 今日速览

Moltis 项目在过去24小时内保持高活跃度，共处理 **11条 Issues**（4条新开，7条关闭）和 **17条 PR**（6条已合并/关闭，11条待合并），显示出社区与核心团队的高效协作。尽管无新版本发布，但多个关键 Bug 被修复，包括 Telegram 消息回退、Apple Container 沙箱启动失败、自定义嵌入端点失效等长期问题。开发重点集中在提升本地 LLM 支持、MCP 远程集成安全性、浏览器沙箱稳定性及用户体验优化。整体项目健康度良好，技术债持续清理中。

---

## 2. 版本发布

**无新版本发布**。当前开发周期聚焦于功能完善与稳定性修复，预计下一版本将整合近期合并的 MCP 安全增强、Vulkan 支持及工作流引擎等特性。

---

## 3. 项目进展

今日共 **6个 PR 被合并或关闭**，推动多项核心能力落地：

- ✅ **#404**：修复 Telegram 消息在 HTML 发送失败后回退为纯文本时仍携带原始 HTML 标签的问题，提升消息可读性（[链接](https://github.com/moltis-org/moltis/pull/404)）。
- ✅ **#405**：解决 Apple Container 沙箱因 `/home/sandbox` 目录缺失导致的启动失败问题，增强 macOS 平台兼容性（[链接](https://github.com/moltis-org/moltis/pull/405)）。
- ✅ **#401**：实现 Docker 镜像通过环境变量（`MOLTIS_PROVIDER`/`API_KEY`）自动配置 LLM 提供商，简化部署流程（[链接](https://github.com/moltis-org/moltis/pull/401)）。
- ✅ **#416**：支持远程 MCP 的 URL 查询参数与请求头作为机密配置项，防止敏感信息泄露，并增强 UI 安全展示（[链接](https://github.com/moltis-org/moltis/pull/416)）。
- ✅ **#400**：兼容旧版 `[memory]` 区块中的嵌入配置键（如 `embedding_provider`），避免用户升级时遭遇配置错误（[链接](https://github.com/moltis-org/moltis/pull/400)）。
- ✅ **#398**：根据用户测试反馈优化安装流程，修复 Tailscale 连接状态显示异常等问题，提升首次使用体验（[链接](https://github.com/moltis-org/moltis/pull/398)）。

> 项目在跨平台兼容性、安全配置、部署便利性方面取得实质性进展。

---

## 4. 社区热点

**最活跃 Issue：#176 “Add datetime to system prompt context”**  
- **评论数：13** | **👍：1** | [链接](https://github.com/moltis-org/moltis/issues/176)  
- **分析**：用户强烈呼吁在系统提示中注入当前日期时间，以提升 LLM 输出时效性（如“今天是2026年3月13日”）。该需求反映真实场景中对时间感知代理的迫切需求，尤其在日程管理、新闻摘要等任务中。尽管尚未有对应 PR，但高讨论度表明其可能成为下一版本优先级功能。

**高关注度新 Issue：#423 “docker moltis + docker sandbox issues”**  
- 用户报告 Docker-in-Docker 沙箱配置异常，可能影响容器化部署稳定性（[链接](https://github.com/moltis-org/moltis/issues/423)）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 修复 PR |
|--------|------|------|--------|
| 🔴 高 | #367 Trusted-network proxy 启动后立即退出 | ✅ 已关闭 | 未明确关联 PR，但相关网络模块近期有重构 |
| 🟠 中 | #420 `web_fetch` 在处理非 UTF-8 页面时 panic（“byte index is not a char boundary”） | 🟡 新开 | 尚无 fix PR，需紧急处理 |
| 🟠 中 | #159 Apple Container 沙箱因 WORKDIR 错误启动失败 | ✅ 已关闭 | #405 |
| 🟢 低 | #214 Telegram 回退消息显示原始 HTML 标签 | ✅ 已关闭 | #404 |

> 建议优先处理 #420，避免因网页编码问题导致工具链崩溃。

---

## 6. 功能请求与路线图信号

以下功能请求已获得开发响应，有望纳入近期版本：

- **#125 Docker 环境变量支持** → 已由 #401 实现，提升容器化部署体验。
- **#119 MCP HTTP/SSE 传输支持自定义请求头** → 已由 #416 扩展为更全面的机密头管理。
- **#140 支持带密钥的远程 MCP URL** → #416 已覆盖此场景，支持 OAuth 与查询参数隐藏。
- **#424 Termux Android 预编译二进制支持** → 新开请求，反映移动端用户需求，但尚无 PR，需评估资源投入。

> 核心方向：强化 MCP 生态集成、改善边缘环境（移动端/容器）支持。

---

## 7. 用户反馈摘要

- **正面反馈**：用户高度认可 Moltis 的“单二进制、多提供商、沙箱执行、MCP 支持”设计哲学（#125 评论）。
- **痛点场景**：
  - 家庭实验室（homelab）用户依赖 Docker 部署，亟需环境变量配置能力（#125）。
  - macOS 用户遭遇 Apple Container 沙箱启动失败，影响本地开发体验（#159）。
  - Telegram 自动化推送因 HTML 回退机制缺陷导致消息混乱（#214）。
- **改进认可**：Tailscale 连接状态修复、密码管理器兼容性优化获用户测试正面评价（#398）。

---

## 8. 待处理积压

| Issue/PR | 类型 | 创建时间 | 状态 | 提醒 |
|--------|------|--------|------|------|
| #176 | 功能请求 | 2026-02-17 | 🟡 开放中 | 高讨论度，建议评估排期 |
| #420 | Bug | 2026-03-12 | 🟡 新开 | 需紧急修复，避免工具链崩溃 |
| #423 | Bug | 2026-03-12 | 🟡 新开 | Docker 沙箱兼容性问题，影响部署 |
| #424 | 功能请求 | 2026-03-12 | 🟡 新开 | 移动端支持需求，需资源评估 |

> 建议维护者优先处理 #420 和 #423，二者均涉及核心功能稳定性；#176 可作为 v0.5+ 版本亮点功能规划。

---  
*数据截至：2026-03-13 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-13）

---

## 1. 今日速览

CoPaw 在 2026-03-12 至 2026-03-13 期间保持高活跃度，社区贡献与问题反馈密集：  
- 共处理 **50 条 Issues**（新开/活跃 32 条，关闭 18 条）和 **50 条 PRs**（待合并 27 条，已合并/关闭 23 条），显示项目处于快速迭代与用户深度参与阶段。  
- 发布新版本 **v0.0.7**，重点引入安全机制与多通道优化。  
- 社区对模型兼容性、UI 体验、部署稳定性提出集中反馈，反映出用户从“尝鲜试用”向“生产部署”过渡的趋势。

---

## 2. 版本发布：v0.0.7

**🔐 核心新增：Tool Guard 安全层**  
[v0.0.7 Release](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.0.7) 引入预执行安全检查机制，自动拦截高风险 shell 命令（如 `rm`、`mv`），需用户通过 `/approve` 显式授权方可执行，拒绝项永久加入黑名单。配套新增 **Security 设置页**，支持用户管理风险策略。

> ⚠️ **迁移注意**：此功能默认启用，可能影响依赖自动化脚本的现有工作流，建议测试环境先行验证。

---

## 3. 项目进展

今日合并/关闭的关键 PR 推动多项核心能力落地：

| PR | 贡献者 | 类型 | 说明 |
|----|--------|------|------|
| [#1389](https://github.com/agentscope-ai/CoPaw/pull/1389) | @Chiytako | 功能 | 为 Discord 通道添加流式响应与打字指示器，提升交互实时性 |
| [#1262](https://github.com/agentscope-ai/CoPaw/pull/1262) | @fancyboi999 | Bug 修复 | 修复定时任务执行时上下文（user_id/session_id）被覆盖问题 |
| [#1235](https://github.com/agentscope-ai/CoPaw/pull/1235) | @lllcy | 功能 | 技能卡片统一展示描述信息，提升 UX 可读性 |
| [#1369](https://github.com/agentscope-ai/CoPaw/pull/1369) | @lalaliat | Bug 修复 | 修复技能名含 `/` 时导入失败的问题 |

> ✅ 整体项目在**多通道支持**、**定时任务稳定性**、**前端体验**三方面取得实质性推进。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 评论数 | 核心诉求 |
|-------|--------|----------|
| [#280](https://github.com/agentscope-ai/CoPaw/issues/280) | 18 | 呼吁内置常用 Skills/MCPs（如浏览器控制、文件操作），降低开箱使用门槛 |
| [#1195](https://github.com/agentscope-ai/CoPaw/issues/1195) | 14 | 前端版本号未随 pip 升级更新，疑似缓存或构建流程问题 |
| [#981](https://github.com/agentscope-ai/CoPaw/issues/981) | 11 | 飞书/QQ 通道无法发送文件，影响企业协作场景可用性 |

> 💡 分析：用户强烈期望**降低配置成本**与**提升通道功能完整性**，反映出对“即插即用”体验的需求上升。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重性 | 状态 | 备注 |
|-------|--------|------|------|
| [#1277](https://github.com/agentscope-ai/CoPaw/issues/1277) | ⚠️ 高 | 未修复 | 对话频繁崩溃，错误码 `400`，疑似请求体超限（6MB） |
| [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222) | ⚠️ 高 | 未修复 | 消息压缩后数量不匹配导致 API 调用失败，影响长对话 |
| [#1383](https://github.com/agentscope-ai/CoPaw/issues/1383) | ⚠️ 中 | 未修复 | 飞书图片直传 LLM 致不支持 vision 的模型崩溃 |
| [#1370](https://github.com/agentscope-ai/CoPaw/issues/1370) | ⚠️ 中 | 未修复 | v0.0.7 技能列表重复显示（active/custom/venv 混合） |
| [#1374](https://github.com/agentscope-ai/CoPaw/issues/1374) | ⚠️ 低 | 未修复 | 工作区“刷新”按钮报错 `Failed to load file list` |

> ❗ 建议优先处理 #1277 与 #1222，二者直接影响核心对话功能稳定性。

---

## 6. 功能请求与路线图信号

| 功能方向 | 相关 Issue/PR | 可能性评估 |
|----------|----------------|------------|
| **多工作区/多智能体架构** | [#1375](https://github.com/agentscope-ai/CoPaw/pull/1375)（WIP） | ⭐⭐⭐⭐☆ 高（已有原型 PR） |
| **OpenRouter 支持** | [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) | ⭐⭐⭐⭐☆ 高（PR 待审） |
| **MiniMax 内置支持** | [#1376](https://github.com/agentscope-ai/CoPaw/pull/1376) | ⭐⭐⭐☆☆ 中（依赖上游合并） |
| **Webhook 支持** | [#338](https://github.com/agentscope-ai/CoPaw/issues/338) | ⭐⭐☆☆☆ 低（无活跃 PR） |
| **CDP 浏览器控制** | [#1348](https://github.com/agentscope-ai/CoPaw/issues/1348) | ⭐⭐⭐☆☆ 中（社区已提供 patch） |

> 📌 多工作区架构与 OpenRouter 集成最可能纳入下一版本，体现项目向**企业级多租户**与**模型生态扩展**演进。

---

## 7. 用户反馈摘要

- **痛点**：
  - 模型配置复杂，第三方服务（如硅基流动、火山引擎）连接失败频发（[#1292](https://github.com/agentscope-ai/CoPaw/issues/1292)、[#1355](https://github.com/agentscope-ai/CoPaw/issues/1355)）
  - 容器部署后配置丢失，缺乏持久化方案（[#1382](https://github.com/agentscope-ai/CoPaw/issues/1382)）
  - 前端 UI 交互缺陷（下拉菜单溢出、复制按钮失效）影响体验（[#1381](https://github.com/agentscope-ai/CoPaw/issues/1381)、[#1371](https://github.com/agentscope-ai/CoPaw/pull/1371)）

- **满意点**：
  - 安全机制（Tool Guard）获积极认可，符合企业安全合规需求
  - Discord 流式响应提升交互流畅度（[#1389](https://github.com/agentscope-ai/CoPaw/pull/1389)）

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 建议 |
|----------|------|----------|------|
| [#51](https://github.com/agentscope-ai/CoPaw/issues/51) | 功能请求 | 13 天 | 企业微信支持需求明确，可评估优先级 |
| [#944](https://github.com/agentscope-ai/CoPaw/issues/944) | 功能请求 | 5 天 | OpenAI-compatible 提供商仅支持 Responses API，需架构适配 |
| [#193](https://github.com/agentscope-ai/CoPaw/pull/193) | PR（WIP） | 11 天 | 多工作区管理长期未合入，需维护者 review |

> 🔔 提醒：#193 与 #1375 存在功能重叠，建议协调避免重复开发。

---

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度 + 快速响应 + 安全增强，但需加强**模型兼容性**与**部署稳定性**以支撑规模化应用。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-13）

---

## 1. 今日速览

ZeptoClaw 在 2026-03-12 表现出**高活跃度开发状态**，共产生 11 条 Issue 更新与 6 条 PR 更新，涵盖 CLI 体验优化、工具链增强、第三方集成改进等多个方向。项目维护者 @qhkm 主导了大部分核心功能开发，社区贡献者 @ceeray、@ilovethensa、@taqtiqa-mark 也积极参与功能提议与问题反馈。尽管无新版本发布，但多个高优先级功能（如流式响应默认开启、Zhipu API 验证）已通过 PR 实现并合并，标志着项目在用户体验与稳定性方面持续迭代。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中于功能增强与内部架构优化，预计下一版本将整合近期合并的 CLI UX 改进与工具链扩展。

---

## 3. 项目进展

今日共 **3 个 PR 被合并/关闭**，显著推进了核心功能落地：

- **[#337](https://github.com/qhkm/zeptoclaw/pull/337) feat: shimmer spinner + enhanced CLI UX for agent responses**  
  引入“Thinking...”渐变 shimmer 动画、工具执行步骤编号（✓/✗）、参数提示与响应分隔线，极大提升 CLI 等待状态的可视化反馈，改善多步代理执行体验。

- **[#343](https://github.com/qhkm/zeptoclaw/pull/343) feat: add ask_clarification tool with pause_for_input agent loop integration**  
  新增 `AskClarificationTool`，支持代理在执行中主动暂停并请求用户澄清，通过 `ToolOutput.pause_for_input` 机制实现交互中断，增强复杂任务下的鲁棒性。

- **[#344](https://github.com/qhkm/zeptoclaw/pull/344) feat: add deep-research skill with 4-phase methodology**  
  集成 `deep-research` 技能（基于 Markdown 教学），指导代理执行系统性四阶段研究流程（探索→深挖→验证→合成），融合记忆与时间感知能力，零二进制开销。

此外，[#335](https://github.com/qhkm/zeptoclaw/pull/335)（Zhipu API 验证）与 [#342](https://github.com/qhkm/zeptoclaw/pull/342)（流式默认+元数据页脚）仍处于开放状态，待进一步 review 或测试。

---

## 4. 社区热点

- **[#345](https://github.com/qhkm/zeptoclaw/issues/345) [bug] coder template LLM writes own tests instead of using existing ones**（P2-high）  
  用户报告代理在使用 `coder` 模板时，未复用现有测试用例，反而根据 buggy 行为编写错误断言的新测试，导致“自证正确”的幻觉问题。此 Issue 直指代理逻辑推理与测试理解能力的缺陷，可能影响开发者对自动化修复的信任度，需优先修复。

- **[#331](https://github.com/qhkm/zeptoclaw/issues/331) Improve Telegram support**  
  社区用户 @ilovethensa 提出 Telegram 消息格式混乱、缺乏 typing indicator，影响交互自然感。该反馈反映了多平台适配的重要性，尤其在即时通讯场景中用户体验敏感度高。

- **[#334](https://github.com/qhkm/zeptoclaw/issues/334) Add Zeptoclaw to Shelldex**  
  外部用户 @ceeray 提议将项目收录至 Shelldex（命令行工具目录），表明项目已获得一定社区可见度，具备生态扩展潜力。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 是否有 Fix PR |
|--------|------|------|-------------|
| **P2-high** | [#345](https://github.com/qhkm/zeptoclaw/issues/345) coder 模板代理误写测试 | Open | ❌ 无 |
| **Medium** | [#333](https://github.com/qhkm/zeptoclaw/issues/333) Dockerfile.dev podman cache mount 构建失败（podman 5.7） | Open | ❌ 无（但已有 OpenSpec 方案指引） |

> 注：[#332](https://github.com/qhkm/zeptoclaw/issues/332)（Zhipu API 验证）虽标记为 chore，但涉及关键 onboarding 流程，已通过 [#335](https://github.com/qhkm/zeptoclaw/pull/335) 实现，待合并。

---

## 6. 功能请求与路线图信号

以下功能请求显示出明确的产品演进方向，且已有对应 PR 支撑，**极可能纳入下一版本**：

- **CLI 默认流式响应 + 元数据页脚**（[#341](https://github.com/qhkm/zeptoclaw/issues/341) / [#342](https://github.com/qhkm/zeptoclaw/pull/342)）：显著提升感知性能，符合现代 AI 工具交互趋势。
- **编码基准测试套件**（[#340](https://github.com/qhkm/zeptoclaw/issues/340)）：为代理能力评估提供标准化基准，助力模型对比与性能优化。
- **Telegram 富文本与 typing 指示器支持**（[#331](https://github.com/qhkm/zeptoclaw/issues/331)）：扩展多平台能力，增强终端用户粘性。

此外，Shelldex 收录请求（[#334](https://github.com/qhkm/zeptoclaw/issues/334)）暗示项目正从“内部工具”向“社区认可的开源产品”过渡。

---

## 7. 用户反馈摘要

- **痛点**：  
  - Telegram 端消息渲染简陋，缺乏实时反馈（typing indicator），降低交互沉浸感（[#331](https://github.com/qhkm/zeptoclaw/issues/331)）。  
  - `coder` 模板代理存在“测试幻觉”问题，未能正确理解现有测试意图，反而强化错误逻辑（[#345](https://github.com/qhkm/zeptoclaw/issues/345)）。  
  - Podman 用户遭遇构建失败，阻碍本地开发流程（[#333](https://github.com/qhkm/zeptoclaw/issues/333)）。

- **满意点**：  
  - CLI 新增 shimmer 动画与步骤进度提示，显著改善等待体验（[#337](https://github.com/qhkm/zeptoclaw/pull/337) 相关讨论隐含正面反馈）。  
  - `ask_clarification` 工具被社区视为“智能中断”的关键能力，提升复杂任务可靠性。

---

## 8. 待处理积压

- **[#287](https://github.com/qhkm/zeptoclaw/pull/287) chore: Dev tools for consistent pre-PR state**（创建于 2026-03-09，已 3 天未更新）  
  该 PR 旨在统一开发者本地测试环境（cargo test/clippy 一致性），对贡献者体验至关重要，但长期未获 review 或合并，建议维护者优先处理以避免贡献流失。

- **[#185](https://github.com/qhkm/zeptoclaw/issues/185) chore: upgrade jsonwebtoken 9 → 10**（创建于 2026-02-26，已超 15 天）  
  尽管标记为 P3-normal，但涉及安全依赖升级与 breaking change，延迟处理可能积累技术债务。

> 建议：对 [#287] 安排 review，并评估 [#185] 的迁移成本，制定升级计划。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高开发活跃度，核心功能持续交付，社区参与积极；需关注关键 Bug 修复与长期积压项响应速度。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-03-13）**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度较低但保持稳定推进：共关闭1个 Issue，新增1个待合并 PR，并发布了一个新版本 v1.6.7。社区反馈集中于 macOS 平台兼容性问题，开发侧则聚焦于系统级体验优化（如 Dock 与托盘图标修复）。项目处于小步迭代、持续打磨用户体验的阶段，健康度良好。

---

### 2. 版本发布  
**v1.6.7 正式发布**  
本次发布主要面向 macOS 用户，重点解决 Gatekeeper 安全机制误报问题。  
- **更新内容**：提供详细的安装指引，明确说明“应用已损坏”提示实为系统拦截未签名应用，非文件损坏，并给出通过 Terminal 绕过验证的操作步骤。  
- **破坏性变更**：无。  
- **迁移注意事项**：用户需按文档指引手动授权应用运行（适用于 macOS 10.15+），建议升级后重新下载完整安装包以确保完整性。  
> 📌 发布链接：[v1.6.7 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.7)

---

### 3. 项目进展  
- **PR #15（OPEN）**：由 @mylinkedai 提交的“修复 macOS Dock 与系统托盘图标显示异常”已进入待合并状态。该修复提升了 macOS 用户在多任务场景下的视觉一致性与操作体验，是近期 UI/UX 优化的重要一环。若合并，将显著改善 macOS 平台的专业感与稳定性印象。  
> 🔗 PR 链接：[#15 fix: app icon in macos dock and system tray](https://github.com/gaoyangz77/easyclaw/pull/15)

> 注：虽未在24小时内合并，但已处于活跃 review 阶段，预计为下个热修复版本候选。

---

### 4. 社区热点  
- **Issue #16（CLOSED）**：用户 @westisc 报告 OpenAI OAuth 认证失败问题，附错误截图，影响便携版与安装版用户。尽管该 Issue 已关闭，但仅含1条评论且无明确解决方案说明，推测可能通过 v1.6.7 版本间接修复或确认为环境配置问题。  
  该问题反映出用户对第三方服务集成稳定性的高度敏感，尤其在身份验证环节。  
> 🔗 Issue 链接：[#16 OpenAI Oauth好像有问题](https://github.com/gaoyangz77/easyclaw/issues/16)

---

### 5. Bug 与稳定性  
| 问题描述 | 严重程度 | 是否有 Fix PR |
|--------|--------|-------------|
| OpenAI OAuth 认证失败（#16） | 中（影响核心功能可用性） | ❌ 无明确修复 PR，已关闭但未说明原因 |
| macOS Dock/托盘图标显示异常 | 低（UI 层面） | ✅ 有对应 PR #15 待合并 |

> 建议维护者补充 #16 关闭原因说明，避免用户困惑。

---

### 6. 功能请求与路线图信号  
当前无显式新功能请求，但从 Issue #16 可推断：  
- 用户对 **第三方服务（如 OpenAI）集成稳定性** 有强依赖，未来需加强 OAuth 流程的容错与错误提示。  
- PR #15 表明项目正逐步重视 **跨平台（尤其 macOS）系统级体验一致性**，此类优化可能成为 v1.7.x 版本的重点方向。

---

### 7. 用户反馈摘要  
- **痛点**：macOS 用户遭遇 Gatekeeper 拦截（v1.6.7 已回应）；OpenAI 登录流程报错且缺乏清晰指引（#16）。  
- **使用场景**：多用于需要调用 OpenAI API 的自动化或辅助工具场景，对认证流程稳定性要求高。  
- **满意度**：v1.6.7 主动提供解决方案获隐性认可；但对问题排查透明度仍有期待（如 #16 关闭无解释）。

---

### 8. 待处理积压  
- **PR #15**：已开放3天，虽更新频繁但尚未合并，建议维护者尽快 review 并合入，避免 macOS 用户体验问题长期悬置。  
- **Issue #16**：虽已关闭，但缺乏关闭理由说明，存在 reopened 风险，建议补充注释或关联修复 commit。

> 💡 维护建议：建立“关闭 Issue 必须附说明”的规范，提升社区信任度。

---  
*数据来源：GitHub EasyClaw 仓库（截至 2026-03-13 00:00 UTC）*

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*