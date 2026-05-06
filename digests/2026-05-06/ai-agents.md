# OpenClaw 生态日报 2026-05-06

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-06 05:25 UTC

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

**报告日期**: 2026-05-06  
**数据来源**: github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 今日保持极高的社区活跃度，共处理 **500 条 Issues 更新**（162 新开/活跃，338 关闭）和 **500 条 PR 更新**（351 待合并，149 已合并/关闭）。项目发布了 **v2026.5.4 稳定版及 beta.3 测试版**，重点改进了 Google Meet/Voice Call 与 Twilio 实时语音桥接的集成体验。社区讨论聚焦于 Discord 网关稳定性、内存刷新可靠性及长输出截断等回归问题，同时多个跨平台（Linux/Windows/Android）功能请求持续引发关注。

---

## 2. 版本发布

### 🎉 v2026.5.4 正式发布

**发布说明**: 2026-05-06  
**仓库**: https://github.com/openclaw/openclaw/releases/tag/v2026.5.4

**核心改进**:
- **Google Meet/Voice Call 实时语音增强**: Twilio 拨号接入现在通过实时 Gemini 语音桥接传输，引入 paced audio streaming、backpressure-aware buffering、barge-in queue clearing 等优化，移除了实时语音场景下的 TwiML fallback，显著提升 Meet 参与者的响应速度

**迁移注意事项**:
- 此次更新对语音处理流程有较大改动，建议在非生产环境验证后再升级
- 使用 Twilio 拨号功能的用户需确认 `channels.discord` 配置兼容性

### 🔄 v2026.5.4-beta.3

**仓库**: https://github.com/openclaw/openclaw/releases/tag/v2026.5.4-beta.3

与正式版共享相同的 Google Meet/Voice Call 改进，预计为下一稳定版的前置测试版本。

---

## 3. 项目进展

今日多个重要 PR 取得进展或已合并，推动项目功能完善：

| PR 链接 | 描述 | 状态 | 领域 |
|---------|------|------|------|
| [#78235](https://github.com/openclaw/openclaw/pull/78235) | Fix Discord gateway heartbeat ACK timing - 修复心跳确认时序问题 | **已合并** | Discord |
| [#78290](https://github.com/openclaw/openclaw/pull/78290) | Add per-agent model allowlists - 支持按 Agent 配置模型白名单 | **已合并** | Agents |
| [#78272](https://github.com/openclaw/openclaw/pull/78272) | fix(cron): repair stale future next-run slots - 修复时区感知定时任务的过期运行槽问题 | OPEN | Cron |
| [#78286](https://github.com/openclaw/openclaw/pull/78286) | fix(cron): allow read-only self-introspection in scoped runs - 允许定时任务中的只读自检操作 | OPEN | Cron |
| [#78164](https://github.com/openclaw/openclaw/pull/78164) | Experiment with agent worker runtime isolation - 实验性 Node worker 运行时隔离 | OPEN | Agents |
| [#78291](https://github.com/openclaw/openclaw/pull/78291) | fix(plugins): repair managed npm openclaw peers - 修复 npm 插件依赖问题 | OPEN | Plugins |
| [#78278](https://github.com/openclaw/openclaw/pull/78278) | Show current thinking level in Telegram picker - Telegram 界面显示当前思考级别 | OPEN | Telegram |
| [#73476](https://github.com/openclaw/openclaw/pull/73476) | feat(agents): add directReply flag to tool results - 支持工具结果直接回复，跳过 LLM 推理 | OPEN | Agents |

**今日合并率**: 约 29.8%（149/500），项目迭代节奏稳健。

---

## 4. 社区热点

### 💬 讨论最活跃的 Issues

1. **#75 [OPEN]** Linux/Windows Clawdbot Apps 跨平台需求
   - 评论: 104 | 👍: 74
   - 链接: https://github.com/openclaw/openclaw/issues/75
   - 要点: 用户强烈请求为 Linux 和 Windows 开发与 macOS 功能对等的桌面客户端应用，反映出跨平台覆盖的社区呼声

2. **#25592 [OPEN]** 工具调用间的文本泄漏到消息频道
   - 评论: 25 | 👍: 0
   - 链接: https://github.com/openclaw/openclaw/issues/25592
   - 要点: Agent 内部处理文本意外暴露给用户，造成 UX 问题

3. **#9443 [OPEN]** Android 预编译 APK 发布请求
   - 评论: 24 | 👍: 1
   - 链接: https://github.com/openclaw/openclaw/issues/9443
   - 要点: 用户希望获得可直接安装的 Android APK 而非仅源代码

4. **#77598 [OPEN]** 开发者 Agent 行为追踪
   - 评论: 22 | 👍: 1
   - 链接: https://github.com/openclaw/openclaw/issues/77598
   - 要点: 维护者公开观察日志，记录 AI 开发代理的行为轨迹

### 🔥 PR 热度

- **#78278**: Telegram picker 显示思考级别 - 社区对此功能讨论积极
- **#78290**: Per-agent model allowlists 已合并 - 解决多 Agent 模型权限管理需求
- **#78235**: Discord 心跳修复已合并 - 响应了多个 Discord 相关 issue

---

## 5. Bug 与稳定性

### 🚨 高优先级（已确认回归/影响核心功能）

| Issue | 描述 | 状态 | 严重度 |
|-------|------|------|--------|
| [#78232](https://github.com/openclaw/openclaw/issues/78232) | openclaw-weixin plugin 2.4.1 与 v2026.5.4 不兼容，channelRuntime API 变更导致入站消息处理失败 | **OPEN** (今日新) | 🔴 高 |
| [#77668](https://github.com/openclaw/openclaw/issues/77668) | Discord gateway 在 macOS 上挂起于"awaiting gateway readiness"，6个重复问题均指向 Carbon Client 生命周期 | **CLOSED** | 🔴 高 |
| [#76307](https://github.com/openclaw/openclaw/issues/76307) | 长输出 Agent 回复在 ~25-80 字符处截断，跨 Discord/Telegram 复现 | **CLOSED** | 🟠 中高 |
| [#75707](https://github.com/openclaw/openclaw/issues/75707) | Gateway CPU 持续 100%，根因已定位，与 #75688 同版本同症状 | **CLOSED** | 🟠 中高 |
| [#76382](https://github.com/openclaw/openclaw/issues/76382) | Gateway 变慢，CPU 100%（v4.24-5.2）| **CLOSED** | 🟠 中高 |

### ⚠️ 中等优先级（行为异常/部分功能受损）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent 回复到上一条消息而非当前消息，会话上下文混淆 | **OPEN** |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | memoryFlush 仅在每隔一次自动压缩周期触发，存在去重逻辑缺陷 | **OPEN** |
| [#76295](https://github.com/openclaw/openclaw/issues/76295) | core-plugin-tools 准备阶段延迟从 ~1500ms 增至 ~8300ms | **CLOSED** |
| [#77260](https://github.com/openclaw/openclaw/issues/77260) | 群聊中 visibleReplies=message_tool 时命令回复被静默丢弃 | **OPEN** |
| [#77532](https://github.com/openclaw/openclaw/issues/77532) | Agent 启动每轮需 3+ 分钟，core-plugin-tools/system-prompt/stream-setup 各占 45-75s | **OPEN** |

### ✅ 已修复/关闭的 Bug

- **#77668** Discord gateway hang - PR #78235 已合并修复
- **#76307** 长输出截断
- **#76371** Discord SecretRef token 解析失败
- **#74209** 捆绑插件阻止网关启动
- **#76373** Brave 插件安装失败

---

## 6. 功能请求与路线图信号

### 🌟 高呼声功能请求

| Issue | 请求 | 评论 | 潜在价值 |
|-------|------|------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 桌面客户端应用 | 104 | 🔥 跨平台战略 |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | Android 预编译 APK | 24 | 降低入门门槛 |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | 抑制子 Agent 公告的配置选项 | 6 | UX 优化 |
| [#6946](https://github.com/openclaw/openclaw/issues/6946) | Telegram 处理指示器（发送 ⌛️ 思考提示） | 4 | 体验增强 |
| [#12855](https://github.com/openclaw/openclaw/issues/12855) | 内置自动更新（定时/确认/通知） | 5 | 运维便利 |

### 🔮 可能的路线图信号

从今日 PR 活动判断，以下方向可能有进展：

1. **运行时隔离**: PR #78164 引入实验性 Node worker 运行时隔离
2. **多租户模型管理**: PR #78290 已合并 per-agent model allowlists
3. **工具直接回复**: PR #73476 添加 directReply 标志，跳过 LLM 推理
4. **Cron 稳定性**: PR #78272/#78286 修复定时任务调度问题
5. **插件依赖管理**: PR #78291 修复 npm 插件对等依赖

---

## 7. 用户反馈摘要

### 正面反馈
- Telegram 流式响应优化需求明确，用户期望更平滑的打字效果
- Discord voice join 功能在特定场景下仍有需求

### 痛点汇总

1. **跨平台覆盖不足**: Linux/Windows 用户强烈要求桌面客户端，与 macOS/iOS/Android 持平的功能集
2. **Android 分发困难**: 仅有源码，用户期望可直接安装的 APK
3. **性能回归**: 多个版本出现启动延迟、CPU 占用、输出截断等回归问题
4. **插件兼容性问题**: 升级后部分插件（如 WeChat、Brave）失效
5. **会话管理混乱**: DM 作用域切换后遗留陈旧会话
6. **内存管理不可靠**: active-memory 影响响应速度，memoryFlush 触发不稳定

### 典型用户场景

```
- 多 Agent 网关部署，active-memory 导致响应变慢
- WSL 环境下的 skill 路径问题
- Telegram 论坛主题消息送达失败
- Discord 群组命令回复被静默丢弃
```

---

## 8. 待处理积压

### ⏳ 长期未响应的 Issues（超过 30 天无维护者回复）

| Issue | 创建日期 | 主题 | 关注度 |
|-------|----------|------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | Linux/Windows 桌面应用 | 🔥 104评论 |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | 2026-02-03 | 抑制子 Agent 公告 | 中 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | 2026-02-08 | Webhook hook 会话复用 | 中 |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 2026-02-05 | Android APK 发布 | 24评论 |
| [#41140](https://github.com/openclaw/openclaw/issues/41140) | 2026-03-09 | exec 审批内容模式匹配 | 中 |

### 🎯 建议优先处理

1. **#32296** - Agent 回复上下文混淆（长期 OPEN，影响核心对话体验）
2. **#12590** - memoryFlush 可靠性问题（内存管理核心缺陷）
3. **#77532** - 每次启动耗时 3+ 分钟（用户体验严重受损）
4. **#78232** - WeChat 插件不兼容（今日新，阻塞特定用户群）

### 📋 PR 积压

- **351 个 PR 待合并**，其中包含多个实验性功能（worker runtime isolation）和性能优化（qmd export、cron index）
- 建议维护者评估长期未合并的 PR 是否需要归档或重新评估优先级

---

## 指标总览

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 总活跃 | 500 | 📊 |
| PR 总活跃 | 500 | 📊 |
| 今日新版本 | 2 | ⬆️ |
| 合并率（PR） | 29.8% | ➡️ |
| 高评论 Issue | 50+ | 🔥 |
| 回归 Bug（OPEN）| ~8 | ⚠️ |

---

*报告生成时间: 2026-05-06*  
*数据覆盖: 2026-05-05 00:00 - 2026-05-06 00:00 (UTC)*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比报告

**报告日期**: 2026-05-06 | **数据周期**: 过去 24 小时

---

## 1. 生态全景

2026年5月初，个人 AI 助手/自主智能体开源生态呈现**高度分化与快速迭代并存**的格局。以 OpenClaw 为首的头部项目日均处理 500 条 Issues/PR，吞吐量堪比中型商业开源项目；中等规模项目（NanoBot、Zeroclaw、hermes-agent）保持 11-50 条活跃更新的稳健节奏；新锐项目（LibreFang）以 88.9% 的 PR 合并率展现出极强的代码消化能力。生态整体正从**功能堆砌期**向**工程化巩固期**过渡：多项目同步出现安全漏洞修复（skill_manage 覆盖漏洞、SSRF 守卫加固、路径穿越修复）、稳定性回归问题排查、以及跨平台一致性优化三大主线。值得关注的是，Windows/Linux 桌面客户端、记忆/内存系统、多渠道集成已成为跨项目共识性需求，而非单一项目的差异化卖点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 活跃 | PR 活跃 | 今日 Release | PR 合并率 | 健康度 | 核心动向 |
|------|------------|---------|-------------|----------|--------|----------|
| **OpenClaw** | 500 | 500 | 2 (v2026.5.4 + beta.3) | ~29.8% | 🟢 极佳 | Google Meet 语音桥接升级、Discord 心跳修复 |
| **hermes-agent** | 189 | 500 | 0 | ~51.2% | 🟢 极佳 | 安全漏洞双 PR 修复（skill_manage）、CLI 崩溃 P0 |
| **Zeroclaw** | 50 | 48 | 0 | ~20.8% | 🟡 正常 | v0.8.0 配置重构、WhatsApp Web 安全加固 |
| **LibreFang** | 45 | 45 | 1 (v2026.5.6-beta.9) | **88.9%** | 🟢 良好 | KernelHandle 重构、上下文预算机制完成 |
| **NanoBot** | 11 | 15 | 0 | 60% | 🟢 健康 | 内存游标修复、SSRF 守卫加固、并发子代理限制 |
| **QwenPaw** | 25 | 11 | 0 | ~18.2% | 🟡 正常 | DeepSeek 推理模型兼容、安全规则自动拒绝 |
| **OpenFang** | 6 | 1 | 0 | 0% | 🟡 待观察 | Discord 附件功能、Agent 状态管理 |
| **NanoClaw** | 9 | 49 | 0 | ~63.3% | 🟢 良好 | OneCLI 网关 CA 信任修复、安装体验 UX 优化 |
| **IronClaw** | 17 | 38 | 0 | ~52.6% | 🟡 待关注 | Reborn 架构迁移（TurnCoordinator 等） |
| **LobsterAI** | 0 | 17 | 0 | **94.1%** | 🟢 极佳 | 安全漏洞报告、ChatGPT OAuth 修复 |
| **ZeptoClaw** | 0 | 11 | 0 | 0% | 🟢 维护中 | 纯 Dependabot 依赖更新，无人工 PR |
| **Moltis** | 1 | 1 | 0 | 0% | 🟢 低活跃 | 日常维护，Rust 依赖更新 |
| **PicoClaw** | — | — | — | — | ⚠️ 数据缺失 | 摘要生成失败 |
| **TinyClaw** | — | — | — | — | ⚠️ 无活动 | 过去 24 小时无活动 |
| **EasyClaw** | — | — | — | — | ⚠️ 无活动 | 过去 24 小时无活动 |

**关键数据洞察**:
- **吞吐量分层明显**: OpenClaw/hermes-agent 占据第一梯队（500 条/天），是第三梯队的 10 倍以上
- **LibreFang/LobsterAI 合并效率突出**: 均超过 88%，反映核心团队代码质量高或 PR 规模小
- **ZeptoClaw 完全自动化**: 11 条 PR 全部来自 Dependabot，无人工干预，依赖维护高度自动化

---

## 3. OpenClaw 在生态中的定位

### 规模优势

OpenClaw 今日处理 **1000 条活跃操作**（500 Issues + 500 PRs），在所有追踪项目中占据压倒性规模。与之最接近的是 hermes-agent（同样 500 PRs），但 OpenClaw 的 Issues 吞吐量（500）远超 hermes-agent（189），表明其拥有更大的用户基数和更活跃的问题反馈生态。

### 技术路线差异

| 维度 | OpenClaw | Zeroclaw | hermes-agent | NanoBot |
|------|----------|----------|---------------|---------|
| **核心架构** | Agent 网关 + 多渠道适配层 | 配置驱动型 Agent | CLI 优先 + ACP 后端抽象 | SDK 驱动 + 渠道集成 |
| **版本节奏** | 稳定版 + beta 双轨（~每周一次） | milestone 驱动（v0.7.5/0.8.0） | 无固定节奏 | 无固定节奏 |
| **升级策略** | 大版本内高频迭代（~2-3天/版本） | 功能冻结后合并大版本 | 按需发布 | 按需发布 |
| **技术栈** | 多端覆盖（Node 为主） | Go 生态（轻量、部署友好） | Python/CLI | Python/TypeScript |

### 社区规模对比

OpenClaw 的 Linux/Windows 桌面客户端需求（Issue #75）已积累 **104 条评论 + 74 👍**，远超其他项目中评论最多的 Issue（Zeroclaw #6123 的 17 条），反映出更广泛的用户触达和更强的社区动员能力。

### 相对不足

- **积压压力**: 351 个 PR 待合并，维护者负载显著高于多数同类项目
- **回归问题**: 今日报告多个回归 Bug（内存刷新、长输出截断、启动延迟 3+ 分钟），迭代速度与质量稳定性之间的权衡较为突出
- **插件生态脆弱性**: openclaw-weixin 插件与核心版本不兼容，暴露了插件版本管理机制的不足

---

## 4. 共同关注的技术方向

以下需求在**至少 3 个以上项目**中同步出现，代表当前生态的共识性技术挑战：

### 🔐 安全加固（OpenClaw / hermes-agent / NanoBot / LobsterAI / Zeroclaw）

| 项目 | 具体问题 |
|------|----------|
| hermes-agent | `skill_manage` 可覆盖内置/hub 技能（P0 安全漏洞，#19379 + #20560 双 PR 修复中） |
| LobsterAI | 邮箱 SKILL 路径穿越漏洞（`downloadAttachments` 未过滤文件名） |
| NanoBot | SSRF 守卫恢复逻辑加固、Telegram 未授权用户静默过滤 |
| Zeroclaw | WhatsApp Web 自身消息误处理为入站提示、HMAC tool receipts 重激活 |
| OpenClaw | 插件兼容性问题导致安全边界失效 |

**生态信号**: 安全问题的多样性（注入漏洞、权限绕过、协议伪造）表明 AI Agent 作为系统入口的安全攻击面正在扩大，各项目正从"功能优先"向"安全内建"转变。

### 🧠 记忆/内存系统（OpenClaw / hermes-agent / NanoBot / QwenPaw）

| 项目 | 具体诉求 |
|------|----------|
| OpenClaw | `memoryFlush` 触发不稳定（#12590）、active-memory 影响响应速度（#77532） |
| hermes-agent | Agent 无法记住对话上下文（#14420，多用户反馈） |
| NanoBot | 梦游记忆游标静默丢失（#3631 已修复）、会话级焦点工具需求（#3292） |
| QwenPaw | ReMe 记忆机制正面反馈，但多智能体场景下共享记忆有改进空间 |

**生态信号**: 记忆系统是当前最大的用户体验痛点。现有实现普遍存在"语义漂移"（上下文丢失）和"持久性不足"（跨会话无法回忆）两个极端。

### 🪟 跨平台一致性（OpenClaw / Zeroclaw / QwenPaw / OpenFang / NanoClaw）

| 项目 | 具体问题 |
|------|----------|
| OpenClaw | Linux/Windows 桌面客户端需求极度强烈（#75，104 评论）；Android APK 缺失（#9443） |
| Zeroclaw | LXC 容器部署 default_model 问题（#6123，S1）；Docker bind mount 覆盖预构建 Web 界面 |
| QwenPaw | Windows 启动缓慢（高优先级）；网络中断后不自动重连（#4017） |
| NanoClaw | macOS Docker Desktop → Podman 迁移崩溃（#2293）；Apple Silicon PATH 问题 |
| OpenFang | macOS 自签名证书 TLS 握手失败（#1160） |

**生态信号**: macOS 是当前跨平台体验的"黄金标准"，Linux 和 Windows 用户强烈要求对等功能集。部署环境的异质性（容器类型、操作系统版本、云平台）带来的兼容性问题正在集中爆发。

### 📡 多渠道集成稳定性（OpenClaw / hermes-agent / Zeroclaw / QwenPaw / NanoClaw）

- **Telegram**: QwenPaw（网络重连失败 #4017）、NanoBot（长轮询静默挂起 #3626）、hermes-agent（论坛主题路由 #18913）
- **WhatsApp**: Zeroclaw（协议更新后消息流中断 #6246）、NanoClaw（Baileys 版本未同步导致迁移卡死）
- **Discord**: OpenClaw（心跳 ACK 时序 #78235 已修复）、Zeroclaw（多字节 UTF-8 panic #5280 已修复）
- **飞书/钉钉**: NanoBot（飞书媒体路径问题）、QwenPaw（钉钉事件循环竞态 #4042）、hermes-agent（DingTalk 文件消息无法到达 #16964）

**生态信号**: 渠道适配是"脏活累活"集中区。IM 平台的协议变更、边缘消息类型、身份识别差异都需要逐一适配，且极难通过自动化测试覆盖。

### ⏰ 定时任务与调度（OpenClaw / Zeroclaw / LibreFang）

| 项目 | 具体问题 |
|------|----------|
| OpenClaw | cron 过期运行槽修复（#78272）、定时任务中只读自检操作（#78286） |
| Zeroclaw | 内存会话 autosave 因 session_id 不匹配 recall 失败（#5550 已关闭） |
| LibreFang | Persistent sessions 压缩模式优化（#4683 待合并） |

---

## 5. 差异化定位分析

### 按目标用户分层

| 层级 | 项目 | 目标用户画像 |
|------|------|-------------|
| **企业/高级用户** | IronClaw、LibreFang | 需要多租户、RBAC、企业 SSO 的 B 端部署；Reborn 架构表明其面向复杂组织场景 |
| **开发者/自托管用户** | OpenClaw、hermes-agent、Zeroclaw | 需要深度定制、灵活插件系统、多渠道接入的技术用户 |
| **中小企业/团队** | NanoBot、QwenPaw | 倾向于开箱即用，关注飞书/钉钉/Telegram 等国内/亚洲渠道集成 |
| **个人极客** | ZeptoClaw、Moltis | 轻量级 CLI 工具，Rust/Go 生态偏好，低维护负担 |
| **商业化探索** | LobsterAI（网易有道）、NanoClaw | 面向特定商业场景（企业 IM 集成），可能有商业支持路径 |

### 技术架构关键差异

| 维度 | OpenClaw | Zeroclaw | hermes-agent | IronClaw |
|------|----------|----------|--------------|----------|
| **核心语言** | TypeScript/Node | Go | Python/CLI | Rust |
| **内存模型** | active-memory 机制 | 内存会话 autosave | 外部 memory-layer 抽象 | 原生隔离 guardrails |
| **插件系统** | npm 生态 + 插件白名单 | 内置 providers | skills 目录 + MCP | Rust crate 生态 |
| **部署复杂度** | 中（Node 运行时依赖） | 低（单二进制 + Docker） | 低（pip install） | 高（Rust 编译 + wasmtime） |
| **可观测性** | 多渠道 gateway 日志 | runtime-trace.jsonl | LangSmith 集成中 | 事件投影服务 |

### 功能侧重的分化

- **OpenClaw**: 语音实时集成（Google Meet/Twilio）是独家能力，竞品中未见同等深度的实时语音桥接
- **hermes-agent**: Kanban 面板工具（#20568）、OpenCode ACP 后端支持、claude-memory-layer 预取方案，代表"开发者工作流 Agent"定位
- **Zeroclaw**: 安装程序重构（--preset、--with/--without-gateway）体现对部署便捷性的极致追求；v0.8.0 配置类型家族拆分是生态中最激进的配置现代化尝试
- **LibreFang**: schema drift 检查、外部 tip-anchor 审计验证、上下文预算机制，在"AI Agent 安全审计"方向上独树一帜
- **QwenPaw**: 基于 AgentScope 框架，CoPaw Agent Teams 概念最激进（自然语言驱动的自进化多智能体团队），语义技能路由可减少 50+ 技能场景下的 token 浪费

---

## 6. 社区热度与成熟度

### 活跃度分层

```
┌─────────────────────────────────────────────────────────────────────┐
│  第一梯队：日均 500+ 活跃操作                                         │
│  OpenClaw、hermes-agent                                             │
│  特征：吞吐量极高、回援问题多、版本节奏快、生态影响力大                  │
├─────────────────────────────────────────────────────────────────────┤
│  第二梯队：日均 10-50 活跃操作                                        │
│  Zeroclaw、LibreFang、NanoClaw、IronClaw、NanoBot、QwenPaw           │
│  特征：功能迭代有序、有明确的版本路线图、社区贡献稳定                     │
├─────────────────────────────────────────────────────────────────────┤
│  第三梯队：日均 <10 活跃操作                                          │
│  LobsterAI、OpenFang、ZeptoClaw、Moltis                              │
│  特征：功能相对稳定、以维护和 bug 修复为主、或纯自动化依赖更新             │
├─────────────────────────────────────────────────────────────────────┤
│  沉寂项目：过去 24 小时零活动                                         │
│  PicoClaw、TinyClaw、EasyClaw                                       │
│  特征：可能已停止维护或进入低活动期                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 成熟度评估

| 阶段 | 项目 | 评估依据 |
|------|------|----------|
| **快速迭代期** | OpenClaw、hermes-agent、Zeroclaw、QwenPaw | 版本发布频繁、大量 open PR/Issue、架构尚未稳定 |
| **质量巩固期** | LibreFang、NanoBot、IronClaw | PR 合并率极高（>60%）、开始系统性重构（KernelHandle、Reborn）、API 规范化问题被重点关注 |
| **稳定维护期** | LobsterAI、OpenFang、ZeptoClaw、Moltis | 活跃度低、功能相对完整、以依赖更新和小修小补为主 |
| **可能停滞** | PicoClaw、TinyClaw、EasyClaw | 连续两期报告无活动，数据缺失 |

### 社区治理质量信号

- **OpenClaw**: 高吞吐量伴随高积压（351 PR 待合并），长期未响应 Issue（#75 创建于 2026-01-01）反映维护者负载过重
- **LibreFang**: CI 失败问题响应极快（4 个 CI failure issues 均已关闭），但 CI 稳定性本身是痛点
- **NanoClaw**: 社区贡献质量高（@alipgoldberg 连续 7 个 UX 改进 PR 均被快速合并），体现了小型活跃社区的健康循环
- **hermes-agent**: 安全漏洞双 PR 并行修复（#19379 和 #20560），表明维护者对安全问题的重视程度

---

## 7. 值得关注的趋势信号

### 🔴 立即行动：安全审计需求爆发

过去 24 小时内，**至少 4 个项目**涉及安全漏洞或加固需求（hermes-agent P0 安全漏洞、LobsterAI 路径穿越、NanoBot SSRF 守卫、Zeroclaw WhatsApp 安全边界）。AI Agent 作为系统入口的攻击面正在快速扩大：

- **工具执行注入**: `skill_manage` 可覆盖内置技能是最直接的代码执行威胁
- **协议层伪造**: WhatsApp 自身消息被误识别为入站，暴露了渠道消息来源验证的缺失
- **协议兼容性退化**: WhatsApp 2026-04-24 协议更新导致 Zeroclaw 消息流中断，说明 IM 平台的强制更新会直接影响 Bot 可用性

**对开发者的建议**: 将渠道消息来源验证、工具执行权限最小化、配置文件完整性检查纳入 CI 流水线。

### 🧠 记忆系统成为下一代竞品分水岭

4 个项目同步报告记忆/内存问题，且修复方案各异（NanoBot 的游标推进逻辑、hermes-agent 的 memory-layer 预取、NanoClaw 的 Postgres secrets 保护）。这预示：

- **记忆持久化**: 从"能记住"向"可靠记住、可控遗忘"演进
- **多 Agent 共享记忆**: QwenPaw 的 ReMe 机制获得正面反馈，跨 Agent 记忆一致性将是下一个技术难点
- **会话焦点感知**: NanoBot #3292 提出的"任务看板"概念（Agent 被中断后能返回主任务）是高级使用场景的核心需求

### 🪟 跨平台体验进入"追赶期"

OpenClaw #75（Linux/Windows 桌面客户端，104 评论）是全生态评论最多的 Issue，比第二名高出 6 倍。这释放了明确信号：

- **桌面客户端不再是小众需求**: 大量用户期望 AI Agent 与传统桌面应用拥有同等的安装和使用体验
- **移动端分发是入门门槛**: OpenClaw #9443 对 Android APK 的需求表明，Google Play/App Store 之外的安装方式仍是用户痛点
- **容器化部署质量参差不齐**: Zeroclaw LXC 问题（#612

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**报告日期**: 2026-05-06  
**项目**: HKUDS/nanobot  
**数据时间窗口**: 过去 24 小时

---

## 1. 今日速览

NanoBot 今日保持高度活跃，共处理 **11 条 Issues**（5 条新开/活跃，6 条已关闭）和 **15 条 PRs**（6 条待合并，9 条已合并/关闭）。项目整体向前稳步推进，合并了多个关键修复：梦游记忆游标丢失问题、并发子代理限制、SSRF 安全守卫加固等。值得注意的是，今日出现了多个高优先级的稳定性 Bug（CPU 泄漏、Telegram 静默挂起），建议优先处理。功能层面.SimpleX 渠道集成进入待合并阶段，LangSmith 完整追踪功能仍在开发中。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日共合并 **9 条 PRs**，推进了多项关键修复和功能增强：

| PR | 状态 | 类别 | 概要 |
|----|------|------|------|
| [#3631](https://github.com/HKUDS/nanobot/pull/3631) | ✅ 已合并 | Bug Fix | 仅在完成批次时推进 `dream_cursor`，防止记忆条目静默丢失（关闭 #3630） |
| [#3634](https://github.com/HKUDS/nanobot/pull/3634) | ✅ 已合并 | Enhancement | 新增 `maxConcurrentSubagents` 配置限制，防止本地 LLM 服务器 OOM（关闭 #3611） |
| [#3624](https://github.com/HKUDS/nanobot/pull/3624) | ✅ 已合并 | AI Guard | 新增可选的幻觉工具调用守卫，检测模型谎报执行副作用的情况 |
| [#3635](https://github.com/HKUDS/nanobot/pull/3635) | ✅ 已合并 | Security | 软化 SSRF 守卫恢复逻辑，阻止重试但返回明确错误 |
| [#3620](https://github.com/HKUDS/nanobot/pull/3620) | ✅ 已合并 | SDK | 修复 `RunResult.tools_used` 和 `RunResult.messages` 空值问题 |
| [#3629](https://github.com/HKUDS/nanobot/pull/3629) | ✅ 已合并 | Security | Telegram 未授权用户静默过滤，防止信息泄露 |
| [#3632](https://github.com/HKUDS/nanobot/pull/3632) | ✅ 已合并 | Fix | 飞书媒体下载返回绝对路径，修复转录功能路径缺失问题 |
| [#3552](https://github.com/HKUDS/nanobot/pull/3552) | ✅ 已合并 | Feishu | 飞书消息携带发送者身份信息，模型可区分群聊用户 |
| [#3615](https://github.com/HKUDS/nanobot/pull/3615) | ✅ 已合并 | Enhancement | 并发子代理限制的另一实现版本 |

**进展亮点**：
- 🔒 **安全性提升**：SSRF 守卫逻辑优化 + Telegram 权限控制加强
- 📊 **可观测性**：SDK 返回值修复，支持下游消费者获取完整调用链路
- 🧠 **内存管理**：梦游记忆游标推进逻辑修正，避免静默数据丢失
- ⚡ **资源控制**：子代理并发限制，防止消费级硬件 OOM

---

## 4. 社区热点

### 最活跃的 Issues

**🔥 #3618** - GLM-5.1 模型区域不可用 (403 错误)
- 📊 评论: 11 条 | 状态: 已关闭
- 🔗 [链接](https://github.com/HKUDS/nanobot/issues/3618)
- 摘要: 用户遭遇模型地区限制错误，作者通过备份恢复并重新安装解决。这是讨论最活跃的 Issue，反映出模型可用性是用户高频痛点。

**🔥 #3292** - 会话级焦点工具：跨中断和压缩的持久任务感知
- 📊 评论: 9 条 | 状态: 开放中
- 🔗 [链接](https://github.com/HKUDS/nanobot/issues/3292)
- 摘要: 用户提议新增类似"任务看板"的焦点工具，让 LLM Agent 能在外围问题中断后返回主任务。该功能触及 Agent 长期记忆和任务连续性的核心需求。

### 热门功能 PRs

**💡 #3623** - 新增 `toolHintMaxLength` 可配置参数
- 🔗 [链接](https://github.com/HKUDS/nanobot/pull/3623)
- 摘要: 将工具提示截断长度从硬编码 40 字符改为可配置，改善长命令在 Telegram 等渠道的可读性。

**💡 #3621** - HuggingFace Spaces 多角色 Agent 编排方案
- 🔗 [链接](https://github.com/HKUDS/nanobot/pull/3621)
- 摘要: 针对 HF Spaces 优化的多角色 Agent（Neo、Trinity、Sentinel）生产级部署方案。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高优先级

**#3638** - MCP `streamable_http_client` 取消作用域错配导致 100% CPU 泄漏
- 🔗 [链接](https://github.com/HKUDS/nanobot/issues/3638)
- 状态: 开放中 | 标签: `bug`, `good first issue`
- 说明: 每次调用 `AgentLoop.close_mcp()` 无法干净销毁 MCP 连接，导致孤立 anyio 任务组堆积，CPU 100% 占用
- 关联 PR: #3610（屏蔽 aclose 防止事件循环旋转）待合并

**#3626** - Telegram 长轮询静默挂起
- 🔗 [链接](https://github.com/HKUDS/nanobot/issues/3626)
- 状态: 开放中
- 说明: 网络问题导致轮询断开，Bot 进程存活但无法接收消息，用户感知为"Bot 无响应"

### 🟡 中优先级

**#3637** - 转录提供商配置不透明
- 🔗 [链接](https://github.com/HKUDS/nanobot/issues/3637)
- 状态: 开放中 | 标签: `bug`, `documentation`
- 说明: Groq 转录配置易导致无效设置，缺少清晰的错误提示

**#3633** - GPT-5.5 模型 "Duplicate item found with id" 错误
- 🔗 [链接](https://github.com/HKUDS/nanobot/issues/3633)
- 状态: 开放中 | 标签: `bug`, `good first issue`
- 说明: Codex 使用 GPT-5.5 模型时遇到 400 错误，无法恢复

### 🟢 已修复

| Issue | 修复 PR |
|-------|---------|
| DeepSeek API `reasoning_content` 错误 | #3584 (已关闭) |
| 工作区根目录访问混乱 | #3597 (已关闭) |
| 安全守卫中止静默丢弃轮次 | #3605 (已关闭) |

---

## 6. 功能请求与路线图信号

### 高呼声功能

**#3292** - 会话级焦点工具 (9 条评论)
- 诉求: 让 LLM Agent 在被外围问题中断后能"锚定"主任务，类似人类的任务看板
- 当前状态: 开放讨论中，尚无 PR

**#3140** - 恢复完整的 LangSmith 集成
- 🔗 [链接](https://github.com/HKUDS/nanobot/pull/3140)
- 诉求: v0.1.5 中断的 LiteLLM 追踪已废弃，恢复完整管道可观测性
- 当前状态: 待合并

**#3486** - SimpleX 渠道集成
- 🔗 [链接](https://github.com/HKUDS/nanobot/pull/3486)
- 诉求: 新增去中心化 messaging 渠道支持
- 当前状态: 待合并

### 已实现功能

| 功能 | PR |
|------|-----|
| 工具提示长度可配置 | #3623 (待合并) |
| 幻觉工具调用守卫 | #3624 (已合并) |
| 并发子代理限制 | #3634/#3615 (已合并) |
| HF Spaces 多角色部署 | #3621 (待合并) |

---

## 7. 用户反馈摘要

### 核心痛点

1. **模型可用性焦虑**
   - #3618: "还好我有备份的习惯" — 用户对区域限制错误的无奈，凸显模型切换体验的脆弱性

2. **资源限制导致崩溃**
   - #3611: 本地 LLM 服务器（如 Ollama）同时运行多个子代理导致 OOM → 已通过 #3634 解决

3. **安全守卫静默失败**
   - #3605: 安全检查中止后用户收不到错误消息，体验断崖式下降

4. **Telegram Bot "假死"**
   - #3626: 长轮询断开后 Bot 进程看似健康但实际无响应，用户无法感知问题

### 用户满意点

- DeepSeek 推理模型问题已定位并提供补丁（#3584）
- 飞书渠道发送者身份识别增强（#3552）提升了多用户群聊体验
- 子代理并发限制后本地部署稳定性提升

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或需要维护者关注：

| 编号 | 类型 | 标题 | 创建时间 | 备注 |
|------|------|------|----------|------|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Issue | 会话级焦点工具 | 2026-04-19 | 19天无 PR，建议评估实现可行性 |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) | PR | LangSmith 完整集成 | 2026-04-14 | 22天待审，追踪可观测性重要功能 |
| [#3626](https://github.com/HKUDS/nanobot/issues/3626) | Issue | Telegram 长轮询挂起 | 2026-05-05 | 高优先级稳定性 Bug |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) | PR | SimpleX 渠道 | 2026-04-27 | 9天待审，社区呼声较高 |

---

## 📊 健康度评估

| 指标 | 今日数据 | 趋势 |
|------|----------|------|
| Issues 关闭率 | 6/11 (55%) | ✅ 健康 |
| PR 合并率 | 9/15 (60%) | ✅ 健康 |
| 新开 Issue 响应 | 5 条活跃 | ⚠️ 需关注 #3638 CPU 泄漏 |
| Bug 修复效率 | 3/11 已修复 | ✅ 及时 |
| 安全相关 PR | 3 条已合并 | ✅ 高优先级处理 |

---

*报告生成时间: 2026-05-06 | 数据来源: GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**📅 日期：** 2026-05-06  
**🔗 仓库：** github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

过去 24 小时内，Zeroclaw 项目保持极高活跃度：共更新 **50 条 Issues**（46 新开/活跃，4 已关闭）和 **48 条 PRs**（38 待合并，10 已合并/关闭）。今日无新版本发布，但社区围绕 v0.8.0 集成工作正在进行中（#6398），多个高优先级 Bug 正在修复中，包括 WhatsApp Web 安全问题、内存会话缺陷和 Docker 部署问题。整体项目健康度良好，代码合并节奏稳健，建议关注积压的 38 个待合并 PR 以评估维护者负载。

---

## 2. 版本发布

**⚠️ 今日无新版本发布**

当前版本发布状态参考：
- **v0.7.5** 里程碑正在跟踪中（#5878），主题为 Release Automation，项目正在推进自动化发布流程
- **v0.8.0** 集成分支（#6398）正在进行中，预计将包含配置重构、provider 类型拆分等重大变更

---

## 3. 项目进展

今日共 **10 个 PRs 合并/关闭**，关键进展如下：

| PR | 状态 | 类型 | 说明 |
|---|---|---|---|
| [#5280](https://github.com/zeroclaw-labs/zeroclaw/pull/5280) | ✅ CLOSED | Bug Fix | 修复 Discord/Matrix 通道中多字节 UTF-8 字符导致的 panic 问题 |
| [#5273](https://github.com/zeroclaw-labs/zeroclaw/pull/5273) | ✅ CLOSED | Enhancement | 安全增强：`auto_approve` 支持前缀通配符 |
| [#5317](https://github.com/zeroclaw-labs/zeroclaw/pull/5317) | ✅ CLOSED | Enhancement | 为 WebSearchConfig 添加 SearXNG 配置字段 |
| [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) | 🔄 OPEN | Bug Fix | Matrix 通道：避免重复入站回复，sync loop 返回时移除事件处理器 |
| [#6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) | 🔄 OPEN | Bug Fix | WhatsApp Web：修复个人模式下自身消息被误处理为入站提示的问题 |
| [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) | 🔄 OPEN | Feature | 将 llama.cpp 拆分为独立 provider 类型 |

**📈 推进的功能/修复：**
- Discord/Matrix 多语言消息处理稳定性提升
- Web 搜索配置能力增强
- Matrix 通道事件处理去重
- WhatsApp Web 安全边界加固

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 类型 | 链接 |
|---|---|---|---|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | 17 | Bug | default_model issue on fresh install（S1 级，LXC 容器部署问题） |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | 9 | Feature | 为 Zeroclaw 设计更好的 LOGO |
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) | 6 | Release | v0.7.5 Release Automation 里程碑跟踪 |
| [#5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) | 6 | Bug | 内存会话 autosave 因 session_id 不匹配导致 recall 失败（已关闭） |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | 3 | Bug | Gateway chat 成功但 /api/cost 返回零，无 usage 日志写入 |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | 3 | Feature | Discord 通道支持按频道 ID 限制响应范围 |
| [#6394](https://github.com/zeroclaw-labs/zeroclaw/issues/6394) | 3 | Feature | GitHub Action 检查 PR 标题格式 |

**📊 热点分析：**
- **#6123**（17 评论）：大量用户在 LXC 容器环境中遇到 default_model 配置问题，集中在 onboard 流程后的模型加载失败，这是当前社区最紧迫的 pain point
- **#4710**（9 评论 + 2 👍）：品牌形象是长期关注点，社区参与度高
- **#5550** 已关闭，内存会话 recall 缺陷已修复，提升了 agent 记忆功能可靠性

### 讨论最活跃的 PRs

| PR | 状态 | 类型 | 说明 |
|---|---|---|---|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | 🔄 OPEN | Integration | v0.8.0 集成分支（占位 PR） |
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | 🔄 OPEN | Feature | 配置/ providers 的类型家族拆分（XL size，重大重构） |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | 🔄 OPEN | Feature | Gateway/Web 节点仪表板 + 设备识别 |
| [#6385](https://github.com/zeroclaw-labs/zeroclaw/pull/6385) | 🔄 OPEN | Feature | 安装程序重构：--preset、--with/--without-gateway |

---

## 5. Bug 与稳定性

### 🔴 高严重度 Bug（需立即关注）

| Issue | 严重度 | 通道/组件 | 状态 | Fix PR |
|---|---|---|---|---|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | S1 | onboard, provider | OPEN | - |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | S1 | provider:minimax | OPEN，in-progress | - |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | S1 | provider | OPEN | - |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | S1 | onboard | OPEN，accepted | - |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | S2 | gateway, Docker | OPEN | - |
| [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | S1 | gateway, observability | OPEN | - |

**🔥 关键问题摘要：**

1. **#6123 - default_model on fresh install**  
   LXC 容器全新安装后，onboarding 设置完成但在运行 `zeroclaw agent` 时报 default_model 错误。17 条评论表明这是影响多个用户的广泛问题。

2. **#6361 - context_compression drops tool_calls**  
   OpenAI 兼容 providers（如 MiniMax）的 context_compression 完全丢弃 assistant(tool_calls) 和 tool(result)，导致工具循环和无效消息角色错误。

3. **#6351 / #6350 - WhatsApp Web 安全问题**  
   个人模式下，自身消息被误处理为入站提示，可能向操作员的联系人发送不必要回复；allowed-numbers 过滤被 LID 联系人绕过。

### 🟡 中等严重度 Bug

| Issue | 严重度 | 通道/组件 | 状态 | Fix PR |
|---|---|---|---|---|
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | S1 | channel:whatsapp | OPEN | - |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | S2 | channel:cli | OPEN | - |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | S2 | channel:telegram | OPEN | - |
| [#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393) | S3 | docs | OPEN | - |

**⚠️ 注意：** PR [#6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) 已提交修复 WhatsApp Web 自身消息处理问题，建议优先审查。

---

## 6. 功能请求与路线图信号

### 🚀 值得纳入下一版本的功能

| Issue | 类型 | 说明 | 相关 PR |
|---|---|---|---|
| [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) | Release | v0.7.5 Release Automation | - |
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | Integration | v0.8.0 集成（配置类型家族拆分） | #6403 |
| [#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) | Enhancement | model/TTS providers 类型家族拆分 | #6403 |
| [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Feature | Discord 通道按频道 ID 过滤 | - |
| [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) | Feature | 节点仪表板 + 设备识别 | - |
| [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | Feature | Per-channel reply-min-interval-secs（限流） | #6389 |
| [#6385](https://github.com/zeroclaw-labs/zeroclaw/pull/6385) | Feature | 安装程序 --preset 参数增强 | - |
| [#6394](https://github.com/zeroclaw-labs/zeroclaw/issues/6394) | CI | PR 标题格式检查 GitHub Action | #6396 |

**📌 路线图趋势分析：**
- **配置现代化**：#6403 类型家族拆分是 v0.8.0 核心重构，将统一 provider 配置结构
- **安全加固**：HMAC tool receipts 重激活（#6182）、WhatsApp allowed-numbers 修复
- **DevOps 完善**：PR 标题格式检查、MUSL 静态二进制恢复、CHANGELOG 自动化
- **多通道增强**：Discord 频道过滤、Telegram 限流、Matrix 事件处理优化

---

## 7. 用户反馈摘要

### 😣 用户痛点

1. **部署兼容性**  
   - LXC 容器环境部署时 default_model 配置困难（#6123，17 评论）  
   - Docker bind mount 会遮盖预构建 Web 仪表板（#6400）  
   - 树莓派 4B + 远程 vLLM 服务器场景下图片路径问题（#6399）

2. **跨平台通道一致性问题**  
   - Telegram 下 prompt caching 不工作（#6360）  
   - WhatsApp Web 2026-04-24 协议更新后消息流中断（#6246）

3. **成本追踪缺失**  
   Gateway chat 成功但 /api/cost 返回零，无 runtime-trace.jsonl 写入（#6001）

### 😊 用户满意点

1. **社区活跃**：大量 PR 贡献者（20+ PRs 今日活跃），包括 @singlerider、@theonlyhennygod、@Audacity88 等核心贡献者
2. **安全问题响应迅速**：WhatsApp Web 安全问题有多个 PR 在修复中（#6414）
3. **文档需求明确**：用户请求 skills 文档（#5863），表明对可扩展性功能的兴趣

### 💡 功能期望

1. **更灵活的安装选项**：--preset、--with/--without-gateway 需求强烈（#6385）
2. **跨通道安全策略**：Discord/WhatsApp 等通道的细粒度访问控制
3. **节点可观测性**：daemon 节点心跳追踪、在线/陈旧/离线状态（#6391）

---

## 8. 待处理积压

### ⚠️ 高优先级长期未关闭 Issues

| Issue | 创建时间 | 评论数 | 严重度 | 状态 | 风险 |
|---|---|---|---|---|---|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | 2026-04-26 | 17 | S1 | OPEN | onboarding 流程阻塞，影响新用户体验 |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | 2026-04-22 | 1 | S1 | in-progress | 工具循环导致生产环境不稳定 |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | 2026-04-26 | 1 | S1 | accepted | OpenAI Codex 订阅配置错误 |

### 📋 维护者负载提醒

- **38 个待合并 PRs**：当前积压较多，建议按类型/优先级分批审查
- **待审查 PR 关键项**：
  - #6403（XL size，配置重构）
  - #6392（节点仪表板）
  - #6398（v0.8.0 集成）
- **needs-maintainer-review 标记**：#6123、#6361、#6375、#6400、#6399 等多条 Issue 需维护者介入

---

## 📊 健康度指标

| 指标 | 数值 | 评估 |
|---|---|---|
| Issues 活跃度 | 50 条/24h | 🟢 极高 |
| PR 合并率 | 10/48 (20.8%) | 🟡 正常，待合并积压较多 |
| 高严重度 Bug | 6 个 S1/S2 | 🔴 需关注 |
| 新版本发布 | 0 | 🟡 无版本发布，v0.8.0 集成中 |
| 社区参与 | 17+ 评论 on #6123 | 🟢 活跃 |

---

**📝 本报告生成时间：** 2026-05-06  
**🤖 由 AI 项目分析师生成 | Zeroclaw 项目动态追踪

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# hermes-agent 项目动态日报

**报告日期**: 2026-05-06  
**项目**: NousResearch/hermes-agent  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

过去 24 小时 hermes-agent 项目保持极高的社区活跃度，共产生 **189 条 Issues 更新**（146 开/活跃 + 43 关闭）和 **500 条 PR 更新**（244 待合并 + 256 已合并/关闭），整体向前推进力度强劲。今日重点关注：**安全漏洞修复**（skill_manage 可覆盖内置技能）、**P0 级 CLI 崩溃**（Shift 修饰符不支持）以及 **Docker 容器清理机制改进**。值得注意的是，OpenRouter HTTP 400 问题仍困扰大量用户，内存功能缺失反馈持续增加。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日合并/关闭的重要 PR 如下：

| # | PR 描述 | 状态 | 贡献者 |
|---|---------|------|--------|
| [#5784](https://github.com/NousResearch/hermes-agent/pull/5784) | fix(skills): 按 dir_name 分类内置技能，解决 frontmatter 名称不一致问题 | CLOSED | @r266-tech |
| [#20570](https://github.com/NousResearch/hermes-agent/pull/20570) | feat(acp): 新增 OpenCode 后端支持 via HERMES_ACP_BACKEND=opencode | OPEN | @maisonnat |
| [#19159](https://github.com/NousResearch/hermes-agent/pull/19159) | fix(gateway): 支持 macOS 系统 LaunchDaemons，完善服务管理 | OPEN | @nocturnum91 |
| [#18913](https://github.com/NousResearch/hermes-agent/pull/18913) | fix(telegram): 规范化论坛主题和机器人命令提及，修复 P1 级消息路由问题 | OPEN | @nocturnum91 |
| [#19172](https://github.com/NousResearch/hermes-agent/pull/19172) | fix(mcp-oauth): 跨重启持久化元数据 | OPEN | @nocturnum91 |
| [#20569](https://github.com/NousResearch/hermes-agent/pull/20569) | fix(docker): 为 /stop 命令添加 wait 参数，解决容器累积问题 | OPEN | @liuhao1024 |
| [#20568](https://github.com/NousResearch/hermes-agent/pull/20568) | feat(kanban): 新增编排器面板工具（list/assign/unblock/archive） | OPEN | @kallidean |
| [#20567](https://github.com/NousResearch/hermes-agent/pull/20567) | feat(skills): 新增 firecrawl、tavily、exa-search 研究技能 | OPEN | @Ayush-Mahadik |
| [#20505](https://github.com/NousResearch/hermes-agent/pull/20505) | feat: 添加 claude-memory-layer 预取内存提供程序 | OPEN | @justinbuzzni |
| [#20566](https://github.com/NousResearch/hermes-agent/pull/20566) | feat: 添加韩语仪表板本地化 | CLOSED | @hongmono |
| [#20565](https://github.com/NousResearch/hermes-agent/pull/20565) | fix(docker): 确保终端清理可靠移除容器 | OPEN | @LeonSGP43 |
| [#20512](https://github.com/NousResearch/hermes-agent/pull/20512) | fix: 按活动项目上下文门控持久写入，修复内存/skills 权限问题 | CLOSED | @ik-svc-oc |
| [#15485](https://github.com/NousResearch/hermes-agent/pull/15485) | fix: 为 Codex 辅助调用展平工具消息 | CLOSED | @stefan-mcf |
| [#20564](https://github.com/NousResearch/hermes-agent/pull/20564) | feat(api-server): 添加本地 WebSocket 桥接供 agent 客户端使用 | OPEN | @umair-a11y |
| [#20563](https://github.com/NousResearch/hermes-agent/pull/20563) | 修复混合 API 表面的委托系统双重 bug，增强 delegate_task 工具 | OPEN | @brycehamrick |
| [#20562](https://github.com/NousResearch/hermes-agent/pull/20562) | fix(feishu): 避免普通回复线程化 | OPEN | @LeonSGP43 |
| [#19379](https://github.com/NousResearch/hermes-agent/pull/19379) | **fix(security): 添加代码级防护阻止通过 skill_manage 修改内置/hub 技能 (P0)** | OPEN | @memosr |
| [#20560](https://github:///github.com/NousResearch/hermes-agent/pull/20560) | fix(security): 防护内置/hub 技能免受 skill_manage 写入 | OPEN | @steezkelly |

**今日亮点**：
- 安全修复双管齐下：两个 PR（#19379, #20560）针对 skill_manage 漏洞提供不同防护方案
- 平台适配持续推进：macOS LaunchDaemons、Telegram 论坛、Feishu 线程化等平台特定问题得到系统性修复
- 工具链扩展：新增研究类技能（firecrawl/tavily/exa）、Kanban 面板工具、OpenCode 后端支持

---

## 4. 社区热点

**评论最活跃的 Issues**（按评论数排列）：

| # | 标题 | 评论 | 点赞 | 类型 |
|---|------|------|------|------|
| [#5884](https://github.com/NousResearch/hermes-agent/issues/5884) | [Setup]: OSError: [Errno 22] Invalid argument (prompt_toolkit crash) | 11 | 1 | Bug, P1 |
| [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) | Agent 无法基于先前上下文准确回答（记忆功能失效） | 9 | 0 | Bug, P2 |
| [#8270](https://github.com/NousResearch/hermes-agent/issues/8270) | OpenRouter 所有模型返回 HTTP 400（curl 正常） | 9 | 4 | Bug, P1 |
| [#19903](https://github.com/NousResearch/hermes-agent/issues/19903) | CLI 启动崩溃：Invalid key 'c-S-c' — prompt_toolkit 不支持 Shift 修饰符 | 8 | 5 | Bug, P0 |
| [#8118](https://github.com/NousResearch/hermes-agent/issues/8118) | 🚀 WebUI Dashboard 功能请求 | 6 | 0 | Feature |
| [#7475](https://github.com/NousResearch/hermes-agent/issues/7475) | 选择 GLM-4.7 模型报错"模型不存在" | 6 | 0 | Bug |
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | 请求支持原生 Google/Vertex AI Provider（绕过 OpenRouter 402 错误） | 6 | 4 | Feature |
| [#12703](https://github.com/NousResearch/hermes-agent/issues/12703) | Ollama 云提供商错误 | 5 | 0 | Bug |

**热点分析**：
1. **OpenRouter HTTP 400 问题**（#8270, 9条评论，4👍）：大量用户受影响，curl 测试正常但 hermes 返回错误，怀疑 API 参数构造有差异
2. **记忆功能缺失**（#14420, 9条评论）：多名用户反馈 agent 无法"记住"对话信息，即使明确要求也无效
3. **WebUI Dashboard 请求**（#8118）：用户强烈希望拥有 Web 界面管理能力，表明 CLI 工具链已成熟但 UX 需求在进化
4. **原生 Vertex AI 支持**（#12639）：用户受够了 OpenRouter 的 402 错误和速率限制，期待官方 Google Cloud 路径

---

## 5. Bug 与稳定性

**按严重程度排列的未修复 Bug**：

### P0 - 阻断级

| # | 问题 | 创建日期 | 状态 | 是否有 Fix PR |
|---|------|----------|------|---------------|
| [#19903](https://github.com/NousResearch/hermes-agent/issues/19903) | CLI 启动崩溃：Invalid key 'c-S-c' — prompt_toolkit 不支持 Shift 修饰符 | 2026-05-04 | OPEN | ❌ |
| [#20273](https://github.com/NousResearch/hermes-agent/issues/20273) | skill_manage 可覆盖内置/hub 技能（安全漏洞） | 2026-05-05 | OPEN | ✅ #19379, #20560 |

### P1 - 高优先级

| # | 问题 | 创建日期 | 状态 | 是否有 Fix PR |
|---|------|----------|------|---------------|
| [#5884](https://github.com/NousResearch/hermes-agent/issues/5884) | Setup 时 prompt_toolkit 崩溃 | 2026-04-07 | OPEN | ❌ |
| [#8270](https://github.com/NousResearch/hermes-agent/issues/8270) | OpenRouter 所有模型返回 HTTP 400 | 2026-04-12 | OPEN | ❌ |
| [#16938](https://github.com/NousResearch/hermes-agent/issues/16938) | API server 会话连续性在上下文压缩后丢失 | 2026-04-28 | CLOSED | ✅ |
| [#18913](https://github.com/NousResearch/hermes-agent/pull/18913) | Telegram 论坛主题规范化 | 2026-05-02 | OPEN (PR) | ✅ |

### P2 - 中优先级

| # | 问题 | 创建日期 | 组件 | 是否有 Fix PR |
|---|------|----------|------|---------------|
| [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) | Agent 无法基于上下文回答（记忆失效） | 2026-04-23 | agent/memory | ❌ |
| [#7475](https://github.com/NousResearch/hermes-agent/issues/7475) | GLM-4.7 模型报错"不存在" | 2026-04-11 | provider/glm | ❌ |
| [#17244](https://github.com/NousResearch/hermes-agent/issues/17244) | MCP 高德地图 SSE 发现机制不支持 | 2026-04-29 | tool/mcp | ❌ |
| [#15697](https://github.com/NousResearch/hermes-agent/issues/15697) | Docker 镜像中 Chrome 未找到导致自动启动失败 | 2026-04-25 | tool/browser | ❌ |
| [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) | MiniMax 提供商频繁连接断开 | 2026-04-09 | provider/minimax | ❌ |
| [#18529](https://github.com/NousResearch/hermes-agent/issues/18529) | title_generator 直接读取内容而非提取 `<thinking>` 标签 | 2026-05-01 | agent | ❌ |
| [#20128](https://github.com/NousResearch/hermes-agent/issues/20128) | Telegram .webp 图片文档被错误拒绝 | 2026-05-05 | platform/telegram | ❌ |
| [#20143](https://github.com/NousResearch/hermes-agent/issues/20143) | WhatsApp 自聊模式静默丢弃用户群消息 | 2026-05-05 | platform/whatsapp | ❌ |
| [#16964](https://github.com/NousResearch/hermes-agent/issues/16964) | DingTalk 文件/文档消息无法到达入站调度器 | 2026-04-28 | platform/dingtalk | ❌ |

**稳定性风险提示**：
- **Docker 容器清理问题**：多个 PR（#20569, #20565）尝试解决 /stop 命令后容器残留问题
- **记忆功能**：连续多个 Issue 反映内存功能不可用，需重点排查
- **平台适配**：DingTalk、WhatsApp、Telegram 均有边缘案例未覆盖

---

## 6. 功能请求与路线图信号

**高价值功能请求**（已有 PR 或明确社区诉求）：

| # | 功能 | 请求者 | 状态 | 纳入可能性 |
|---|------|--------|------|----------|
| [#20570](https://github.com/NousResearch/hermes-agent/pull/20570) | **OpenCode ACP 后端支持** | @maisonnat | Open PR | 🟢 高 |
| [#8118](https://github.com/NousResearch/hermes-agent/issues/8118) | **WebUI Dashboard** | @Stalinh | Issue | 🟡 中 |
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | **原生 Google/Vertex AI Provider** | @claubetosilva | Issue | 🟡 中 |
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | **Google Cloud Vertex AI 原生认证** | @prasadus92 | Issue | 🟡 中 |
| [#20249](https://github.com/NousResearch/hermes-agent/issues/20249) | **按轮次专家按需模型升级** | @apoapostolov | Issue | 🟡 中 |
| [#16084](https://github.com/NousResearch/hermes-agent/issues/16084) | **Feishu CardKit 流式卡片替代编辑消息** | @xiangyizengdev | Issue | 🟡 中 |
| [#15153](https://github.com/NousResearch/hermes-agent/issues/15153) | **持久规范角色会话与治理技能策略** | @stefanpieter | Issue | 🟢 高（工程复杂） |
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | **Dashboard 主题改进** | @ogermer | Issue | 🟢 高 |
| [#12954](https://github.com/NousResearch/hermes-agent/issues/12954) | **中文（简体/繁体）本地化** | @shadowmoon23 | CLOSED | ⚠️ 已关闭（未实现） |
| [#20567](https://github.com/NousResearch/hermes-agent/pull/20567) | **研究类技能扩展（firecrawl/tavily/exa）** | @Ayush-Mahadik | Open PR | 🟢 极高 |

**路线图信号**：
1. **安全加固优先**：skill_manage 漏洞修复正在推进
2. **平台多模态适配**：Telegram/WhatsApp/DingTalk/Feishu 边缘案例持续清理
3. **记忆系统重构**：#20505 claude-memory-layer 预取方案可能是下一代记忆系统基础
4. **Web/API 能力扩展**：WebSocket 桥接（#20564）预示 API server 能力将增强

---

## 7. 用户反馈摘要

**真实用户痛点**：

1. **OpenRouter 集成失败**
   > "OpenRouter API key works with curl but hermes returns HTTP 400 for all models"
   - 影响大量 WSL2 用户，怀疑参数构造差异

2. **记忆功能形同虚设**
   > "Ive tried for hours to fix this, no joy. The agent has ZERO memory... Agent: Nice to meet you, i have stored this. Me: (5 seconds later) Hermes what is my name? Agent: I dont have my personal information unless you tell me abou..."
   - 用户多次尝试失败，体验极差

3. **CLI 界面可读性问题**
   > "Hermes CLI is completely unreadable on terminals with light or cream backgrounds. All built-in skins use light-colored text designed for dark backgrounds."
   - 9 个点赞，说明影响面广

4. **Docker 体验碎片化**
   > "After pulling the latest official docker image... Chrome not found error"
   - 新用户入门体验受阻

5. **平台消息路由不一致**

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**📅 日期：** 2026-05-06  
**🔗 仓库：** [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

过去 24 小时 NanoClaw 保持极高活跃度，共处理 **49 条 PR 更新**（31 已合并/关闭）、**9 条 Issues 更新**（5 已关闭）。社区贡献集中在**基础设施修复**（OneCLI 网关 CA 信任、migrate-v2.sh 探针路径）和**安装体验优化**（渠道选择回退导航、Signal 依赖自动安装）。无新版本发布，但存在 3 个高优先级 Bug 待修复，其中 1 个安全相关（#2286 Postgres 密钥失效风险）。整体项目健康度良好，维护者响应及时，PR 合并节奏紧凑。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

过去 24 小时合并/关闭 **31 条 PR**，以下是关键里程碑：

### 🔧 基础设施修复

| PR | 描述 | 贡献者 | 状态 |
|---|---|---|---|
| [#2287](https://github.com/qwibitai/nanoclaw/pull/2287) | **fix(migrate-v2): probe correct OneCLI health endpoint** — 将 `/health` 探针更正为 `/api/health`，解决迁移脚本始终误判并重复安装 OneCLI 的问题 | @glifocat | ✅ Closed |
| [#2284](https://github.com/qwibitai/nanoclaw/pull/2284) | **fix(setup): pin Baileys to 7.0.0-rc.9 in install-whatsapp scripts** — 同步 WhatsApp 依赖版本，修复 v2 迁移卡在 `2c-install-whatsapp` 的 TypeScript 构建错误 | @glifocat | ✅ Closed |
| [#2288](https://github.com/qwibitai/nanoclaw/pull/2288) | **fix(host-sweep): parse SQLite timestamps as UTC, not local time** — 修复时区解析歧义，防止宿主清理任务在跨时区环境中误判清理时机 | @glifocat | ✅ Closed |
| [#2290](https://github.com/qwibitai/nanoclaw/pull/2290) | **fix(manage-channels): include canonical SQL queries in SKILL.md** — 在 SKILL.md 中补充权威 SQL 查询示例，解决 agent 生成的查询因列名错误（`assistant_name` vs `name`）导致 SQL 失败 | @glifocat | ✅ Closed |
| [#2209](https://github.com/qwibitai/nanoclaw/pull/2209) | **fix(host-sweep): orphan-claim delete missed in tests (regression from #2183)** — 修复测试遗漏的孤立 claim 清理逻辑 | @cfis | ✅ Closed |

### 🎨 安装体验 UX 改进

| PR | 描述 | 贡献者 | 状态 |
|---|---|---|---|
| [#2269](https://github.com/qwibitai/nanoclaw/pull/2269) | **setup: add ← Back option to Discord, WhatsApp, iMessage channel flows** — 渠道选择增加回退导航，避免选错后被迫完成 OAuth 或授予磁盘权限才能退出 | @alipgoldberg | ✅ Closed |
| [#2271](https://github.com/qwibitai/nanoclaw/pull/2271) | 同上：Telegram | @alipgoldberg | ✅ Closed |
| [#2272](https://github.com/qwibitai/nanoclaw/pull/2272) | 同上：Slack | @alipgoldberg | ✅ Closed |
| [#2273](https://github.com/qwibitai/nanoclaw/pull/2273) | 同上：Teams | @alipgoldberg | ✅ Closed |
| [#2274](https://github.com/qwibitai/nanoclaw/pull/2274) | 同上：Signal | @alipgoldberg | ✅ Closed |
| [#2281](https://github.com/qwibitai/nanoclaw/pull/2281) | **setup: auto-install signal-cli when missing** — Signal 渠道依赖缺失时自动拉取安装，替代直接甩给用户 GitHub Releases 页面的体验断点 | @alipgoldberg | ✅ Closed |
| [#2275](https://github.com/qwibitai/nanoclaw/pull/2275) | **setup: update WhatsApp link instructions to "You / Settings"** — iOS/Android 菜单文案统一，解决 iOS 用户找不到"Settings"的困惑 | @alipgoldberg | ✅ Closed |
| [#2249](https://github.com/qwibitai/nanoclaw/pull/2249) | **feat(setup): clearer "Open Telegram" card with mobile fallback** — Telegram Bot 打开提示增加移动端兜底方案，修复纯 SSH 环境下无法打开本地 Telegram 的问题 | @alipgoldberg | ✅ Closed |

### 🌟 新功能贡献

| PR | 描述 | 贡献者 | 状态 |
|---|---|---|---|
| [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) | **feat(mcp): /add-ffmpeg - ffmpeg/ffprobe MCP server for media transformation** — 新增 ffmpeg MCP 工具，支持音视频格式转换、缩略图生成等媒体处理能力 | @CrAzyScreamx | 🟡 Open |

---

## 4. 社区热点

### 🔥 最活跃的 Open Issues

**Issue #1906** — Ollama MCP stdio server fails behind OneCLI gateway  
📌 [https://github.com/qwibitai/nanoclaw/issues/1906](https://github.com/qwibitai/nanoclaw/issues/1906)  
👤 @0reo | 🗓️ 2026-04-21 创建 | 🔄 2026-05-05 更新 | 💬 1 评论 | 👍 1  
**摘要：** 当容器同时使用 OneCLI 网关注入凭证 + 应用 `/add-ollama-tool` 技能时，`ollama_list_models` / `ollama_generate` MCP 工具在 LLM Provider 非 Ollama 本身时（Anthropic、MiniMax 等）全部报 `fetch failed`。Plain-HTTP 代理路径拒绝了所有请求。  
**诉求解读：** OneCLI 网关的 MITM CA 证书未在 Agent 容器内信任，导致 Ollama MCP stdio 服务无法完成 TLS 握手。这是一个典型的**网络安全配置断层**，需要容器运行时层面注入网关 CA。

---

**Issue #2048** — `install_packages` approval triggers infinite a2a self-routing loop  
📌 [https://github.com/qwibitai/nanoclaw/issues/2048](https://github.com/qwibitai/nanoclaw/issues/2048)  
👤 @luis-agm | 🗓️ 2026-04-27 创建 | 🔄 2026-05-05 更新 | 💬 1 评论 | 👍 1  
**摘要：** 用户请求 Agent 安装包时，approval 流程触发了 A2A 协议的无限自路由循环，导致所有 Telegram 消息投递被永久阻塞。  
**诉求解读：** 权限审批流程与消息路由层存在循环依赖，是一个**高危稳定性 Bug**，影响所有渠道的消息投递。

---

**Issue #2286** — onecli_app-data wipe silently invalidates Postgres secrets (🔴 High Priority)  
📌 [https://github.com/qwibitai/nanoclaw/issues/2286](https://github.com/qwibitai/nanoclaw/issues/2286)  
👤 @glifocat | 🗓️ 2026-05-05 创建 | 🔄 2026-05-05 更新 | 💬 0 评论 | 👍 0  
**摘要：** OneCLI `app-data` Docker volume 包含两个关键数据：`secret-encryption-key`（45 字节主密钥，加密 Postgres `secrets` 表所有内容）和 `gateway/ca.key` + `gateway/ca.pem`（MITM CA）。重新安装时这些数据未受保护也未记录，导致 Postgres secrets 全部永久失效，且 CA 重建后与既有客户端证书链断裂。  
**诉求解读：** 这是一个**数据安全 + 运维文档**双重问题。需要文档化这些数据的角色，并在 reinstall 路径上增加保护或警告。

---

### 🔥 最多评论的 Open PRs（待合并）

| PR | 描述 | 贡献者 | 状态 |
|---|---|---|---|
| [#2291](https://github.com/qwibitai/nanoclaw/pull/2291) | **fix(container): trust OneCLI gateway CA inside agent container** — 解决 Issue #1906 的根因修复：容器启动时调用 `onecli.applyContainerConfig()` 后将网关 CA 证书注入容器信任链 | @meeech | 🟡 Open |
| [#2292](https://github.com/qwibitai/nanoclaw/pull/2292) | **feat(skills): add /convert-to-podman skill (macOS)** — macOS 从 Docker Desktop 迁移到 Podman 的自动化技能，解决 Homebrew 安装 Docker CLI 后启动崩溃问题（Issue #2293） | @meeech | 🟡 Open |
| [#2293](https://github.com/qwibitai/nanoclaw/pull/2293) | **fix(setup): add /opt/homebrew/bin to launchd plist PATH** — Apple Silicon Mac + Homebrew 安装 docker 时启动崩溃的修复（`/bin/sh: docker: command not found`） | @meeech | 🟡 Open |

---

## 5. Bug 与稳定性

### 🔴 高优先级（未修复）

| Issue | 描述 | 严重程度 | Fix PR | 状态 |
|---|---|---|---|---|
| [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) | `install_packages` 触发无限 A2A 自路由循环，Telegram 投递永久阻塞 | 🔴 High | — | 🚨 Open |
| [#2286](https://github.com/qwibitai/nanoclaw/issues/2286) | onecli_app-data 清除后 Postgres secrets 和 CA 密钥静默失效，无文档/无保护 | 🔴 High | — | 🚨 Open |
| [#1906](https://github.com/qwibitai/nanoclaw/issues/1906) | OneCLI 网关后 Ollama MCP stdio 请求全部失败（fetch failed） | 🔴 High | [#2291](https://github.com/qwibitai/nanoclaw/pull/2291) | 🟡 Open |

### 🟡 中低优先级（已修复或关闭）

| Issue | 描述 | 严重程度 | Fix PR | 状态 |
|---|---|---|---|---|
| [#2285](https://github.com/qwibitai/nanoclaw/issues/2285) | migrate-v2.sh 探针错误健康端点（`/health` → 404） | 🟡 High | [#2287](https://github.com/qwibitai/nanoclaw/pull/2287) | ✅ Fixed |
| [#2283](https://github.com/qwibitai/nanoclaw/issues/2283) | migrate-v2.sh 卡在 WhatsApp 安装（Baileys 版本未同步） | 🟡 High | [#2284](https://github.com/qwibitai/nanoclaw/pull/2284) | ✅ Fixed |
| [#2263](https://github.com/qwibitai/nanoclaw/issues/2263) | `send_card` MCP tool 在 Chat SDK 所有渠道静默无操作 | 🟡 Medium | — | ✅ Closed |
| [#2264](https://github.com/qwibitai/nanoclaw/issues/2264) | 新安装 Discord 卡片重复（skills 锁定 `@chat-adapter/*@4.26.0`） | 🟡 Medium | — | ✅ Closed |
| [#2289](https://github.com/qwibitai/nanoclaw/issues/2289) | manage-channels skill SKILL.md 未链接 `--assistant-name` CLI 参数与 SQL 列名 | 🟢 Low | [#2290](https://github.com/qwibitai/nanoclaw/pull/2290) | ✅ Fixed |

---

## 6. 功能请求与路线图信号

### 📋 已提 PR 的功能请求

| PR | 描述 | 预计纳入 |
|---|---|---|
| [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) | **/add-ffmpeg** — ffmpeg/ffprobe MCP server，支持媒体格式转换、缩略图生成 | 待 Review |
| [#2292](https://github.com/qwibitai/nanoclaw/pull/2292) | **/convert-to-podman** — macOS Docker Desktop → Podman 自动化迁移 skill | 待 Review |
| [#2208](https://github.com/qwibitai/nanoclaw/pull/2208) | **MCP HTTP/SSE 传输支持** — 除 stdio 外支持 HTTP 和 SSE 两种 MCP 服务端传输协议 | 待 Review |
| [#2230](https://github.com/qwibitai/nanoclaw/pull/2230) | **container-runner: rootless podman 保持用户 ID 映射** — 解决容器内文件权限问题 | 待 Review |
| [#2184](https://github.com/qwibitai/nanoclaw/pull/2184) | **poll-loop: 会话失效时立即重试而非投递错误** — 避免用户看到原始错误消息 | 待 Review |

### 🔮 架构层面需求

**Issue #2279** — Architectural scheduled IPC delivery tracking  
📌 [https://github.com/qwibitai/nanoclaw/issues/2279](https://github.com/qwibitai/nanoclaw/issues/2279)  
👤 @lazer-maker | 🗓️ 2026-05-05 创建 | 🔄 2026-05-05 更新  
**摘要：** 实现架构级别的计划任务 IPC 投递追踪。当计划任务已经通过 IPC 发送了实质性内容时，调度器不应再转发最终的 SDK 结果；但若 IPC 消息仅为 "On it." 之类的状态闲聊，则不应拦截 SDK 输出。  
**解读：** 这是一个精细化的调度器行为优化请求，需要在 IPC 消息类型（实质性 vs 状态闲聊）和 SDK 结果抑制之间建立判断逻辑。

---

## 7. 用户反馈摘要

从 Issues 评论和描述中提炼：

### 😣 痛点

1. **安装流程缺乏容错性**（@alipgoldberg 连续提交 7 个 PR 修复）：
   - 选错渠道后无法回退，必须完成 OAuth 或授予权限才能退出
   - Signal 依赖缺失时直接甩给用户 GitHub Releases 页面，非技术用户完全无法操作
   - Apple Silicon Mac 通过 Homebrew 安装 docker 后启动崩溃，无法诊断

2. **迁移脚本路径存在隐性假设**：
   - migrate-v2.sh 假设 OneCLI 健康端点是 `/health`，实际是 `/api/health`
   - Baileys 版本依赖未同步导致 TypeScript 构建失败
   - 重装时未预警 `secret-encryption-key` 和 CA 密钥丢失的灾难性后果

3. **MCP 工具在特定拓扑下失效**：
   - 组合 OneCLI 网关 + Ollama 技能时，MCP stdio 请求全部失败
   - `send_card` 在 Chat SDK 所有渠道静默无操作，用户无任何反馈

### 😊 满意之处

- 社区响应积极，@alipgoldberg 的多批次 UX 改进均被快速 Review 并合并
- @glifocat 和 @cfis 持续输出高质量基础设施修复 PR
- `host-sweep` 清理逻辑趋于完善（SQLite 时区解析、orphan-claim 清理测试覆盖）

---

## 8. 待处理积压

### 🚨 长期未响应的 Issue（>7 天无更新）

| Issue | 描述 | 创建时间 | 最后更新 | 危险信号 |
|---|---|---|---|---|
| [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) | A2A 自路由无限循环，Telegram 阻塞 | 2026-04-27 | 2026-05-05 | 高优先级 Bug，10 天无 fix PR |
| [#1906](https://github.com/qwibitai/nanoclaw/issues/1906) | OneCLI 网关后 Ollama MCP 失败 | 2026-04-21 | 2026-05-05 |

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：** 2026-05-06　|　**仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)　|　**数据窗口：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时 IronClaw 保持极高活跃度：共产生 **17 条 Issues 更新**（含 1 个 Bug 报告）和 **38 条 PR 更新**（20 条已合并/关闭）。项目核心工作集中在 **Reborn 架构迁移**上，多个子系统（TurnCoordinator、SessionThreadService、EventProjectionService 等）均有关联的规划 Issue 处于 Open 状态，整体推进有序。值得注意的负面信号是 **crates.io 发布滞后**——GitHub 已有 v0.27.0 tag，但 crates.io 最高仅到 0.24.0，下游用户被强制锁定在旧版本。此外，今日出现 1 个 UI Bug（图片附件预览异常），暂无 fix。CI 工作流也在积极优化中，新增了夜间深度检查并精简了合流检查。

---

## 2. 版本发布

> **无新版本发布。** 本日 GitHub Releases 无更新。

⚠️ **发布链路风险提示：**
- Issue [#3259 - Publish 0.25.0–0.27.0 to crates.io](https://github.com/nearai/ironclaw/issues/3259) 报告 GitHub 已有 v0.25.0~v0.27.0 tag（最后为 Apr 29, 2026），但 crates.io 最高仅到 **0.24.0**（Mar 31, 2026）。原因是 wasmtime 28.x CVEs 导致下游 pinned 到 0.24.0。需要维护者确认发布流程是否受阻。

---

## 3. 项目进展

以下为过去 24 小时已合并/关闭的重要 PR，说明了推进的功能方向：

| PR | 状态 | 主要内容 | 贡献者 |
|---|---|---|---|
| [#3257](https://github.com/nearai/ironclaw/pull/3257) | ✅ CLOSED | **feat(reborn): add turn persistence contracts** — 新增 turns/runs/active locks/checkpoints/idempotency 的契约级持久化记录，完善内存 Turn store 元数据，协调同键提交幂等性 | @serrrfirat |
| [#3260](https://github.com/nearai/ironclaw/pull/3260) | ✅ CLOSED | **docs: salvage Docker Hub image name fix** — 将 Docker 文档中的镜像引用从 `nearai/ironclaw` 修正为 `nearaidev/ironclaw`（解决 #2963） | @serrrfirat |
| [#3267](https://github.com/nearai/ironclaw/pull/3267) | ✅ CLOSED | **test: salvage Admin and Responses API E2E coverage** — 将 #2174 的端到端测试覆盖 salvaged 到 current main，含 Admin API 用户 CRUD 和 Responses API 多场景 | @serrrfirat |
| [#3265](https://github.com/nearai/ironclaw/pull/3265) | ✅ CLOSED | **skills: salvage Linear credential bootstrap fix** — 修复 Linear API 凭证注入（`Authorization: <key>` 而非 `Bearer` 前缀） | @serrrfirat |
| [#3258](https://github.com/nearai/ironclaw/pull/3258) | ✅ CLOSED | **docs: salvage database and configuration docs navigation** — 将 Database 和 Configuration 文档页面从 drafts 提升到正式导航 | @serrrfirat |
| [#3271](https://github.com/nearai/ironclaw/pull/3271) | ✅ CLOSED | **remove hardcoded urls** — 移除硬编码 URL（size S，风险中） | @zetyquickly |
| [#3270](https://github.com/nearai/ironclaw/pull/3270) | ✅ CLOSED | **Demo/abound update copy 1** — 更新 Abound demo 相关文案的 greeting/graph/wait flow | @zetyquickly |

### 进行中的大型 PR（待合并）

| PR | 规模 | 摘要 |
|---|---|---|
| [#3243](https://github.com/nearai/ironclaw/pull/3243) | XL | **feat(runtime-policy): runtime presets + effective policy (PRs 1-7 of #3045)** — 实现运行时策略预设，模型可见性过滤器已在生产路径激活 |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | XL | **feat(routing): per-channel MCP and built-in tool filtering** — 多渠道部署场景下按渠道过滤 MCP 服务和内置工具（自 Mar 18 持续推进中） |
| [#3099](https://github.com/nearai/ironclaw/pull/3099) | XL | **Add Reborn transport adapter contract** — 新增 `ironclaw_transport` 契约 crate，含路由、ingress/egress、注册生命周期、健康检查等 |
| [#3180](https://github.com/nearai/ironclaw/pull/3180) | XL | **refactor(reborn-memory): native-isolated guardrails + lib.rs module split** — Reborn 内存子系统的原生隔离 guardrails 和模块拆分 |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | XL | **feat: Abound demo — Responses API, credential injection, skills, guardrails** — Abound v2 架构集成，含 Responses API 修复和 forex timing skill |

---

## 4. 社区热点

### 最活跃的 Issues（评论数排名）

1. **[#3016](https://github.com/nearai/ironclaw/issues/3016)** — `[reborn] Reborn cutover blocker: add reference AgentLoopHost facade`（4 条评论）
   - **诉求：** 定义 Reborn `AgentLoopHost` 门面接口，是 TurnCoordinator 体系的核心依赖之一。追踪多个子 Issue 的父级关联。
   - 关联追踪：[#2987](https://github.com/nearai/ironclaw/issues/2987) 父架构、[#3013](https://github.com/nearai/ironclaw/issues/3013) TurnCoordinator、[#3107](https://github.com/nearai/ironclaw/issues/3107) AgentLoopDriver 合约

2. **[#3013](https://github.com/nearai/ironclaw/issues/3013)** — `[reborn] Reborn cutover blocker: add kernel TurnCoordinator`（4 条评论）
   - **诉求：** 定义 Reborn 主机层的 `TurnCoordinator`，拥有线程/轮次准入和单活跃运行强制能力。是 Reborn 迁移的关键阻塞项。

3. **[#3031](https://github.com/nearai/ironclaw/issues/3031)** — `[EPIC] Reborn product surface migration`（3 条评论）
   - **诉求：** Epic 级追踪 Reborn 产品表面迁移，含完整 DAG 和多个阻塞门（compatibility gate #3020、readiness gates #3022/#3032/#3039/#3067）。

4. **[#3107](https://github.com/nearai/ironclaw/issues/3107)** — `[Reborn] Define AgentLoopDriver and run-class profile contract`（2 条评论）
   - 定义 `AgentLoopDriver` 和运行类配置文件的契约，支撑 TurnCoordinator 和 Loop 的交互。

5. **[#3093](https://github.com/nearai/ironclaw/issues/3093)** — `[Reborn] Add EventProjectionService`（2 条评论）
   - **诉求：** 为 Reborn 高层提供事件投影服务，是持久事件/审计存储（#3162）和预算/资源投影（#3141）的前置依赖。

> 🔥 **社区热点分析：** 当前社区讨论高度集中在 **Reborn 架构重构**，反映了团队正在推进 IronClaw 从 v1 向 v2 架构的系统性迁移。热点 Issue 均以 `[reborn]` 标签标记，由核心维护者 @serrrfirat 主导，遵循"一个功能一个追踪 Issue + 多个子任务"的分层管理模式，体现了良好的项目治理结构。

---

## 5. Bug 与稳定性

### 今日新报告 Bug

| Issue | 严重程度 | 描述 | Fix PR |
|---|---|---|---|
| **[#3272](https://github.com/nearai/ironclaw/issues/3272)** | ⚠️ 中 | **Bug: Uploaded Attachments Lose Preview After Refresh, Duplicate Images Appear, and Pasted Image Preview Is Excessively Large** — 上传图片预览刷新后消失、出现重复图片、粘贴图片预览过大，涉及聊天 UI 多个附件相关问题 | ❌ 暂无 |

> **Bug 分析：** 该问题影响用户核心交互体验（聊天中图片预览），涉及文件持久化和前端渲染两个维度，建议尽快指派前端/UI 相关维护者介入。

### 已关闭的相关 Bug

| Issue | 结果 | 描述 |
|---|---|---|
| **[#2963](https://github.com/nearai/ironclaw/issues/2963)** | ✅ 已修复 | **Docker Hub image missing** — `nearai/ironclaw:latest` 镜像不存在，实际为 `nearaidev/ironclaw`。已在 #3217/#3260 中修复文档。 |

---

## 6. 功能请求与路线图信号

### 用户提出的功能需求

1. **[#3259](https://github.com/nearai/ironclaw/issues/3259)** — **将 0.25.0–0.27.0 发布到 crates.io**（功能性阻塞）
   - 不仅是功能请求，更是一个**发布流程阻塞**。下游通过 crates.io 引用的用户无法获得最新功能和安全修复。

### 路线图信号（从 Reborn 追踪 Issue 推断）

以下 Issue 均标记 `[reborn]`，代表团队明确的下一阶段路线图方向：

| Issue | 方向 | 里程碑意义 |
|---|---|---|
| [#3013](https://github.com/nearai/ironclaw/issues/3013) | TurnCoordinator 内核 | Reborn 迁移的第一个 cutover 阻塞项 |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | AgentLoopHost 门面 | 统一 Loop 入口抽象 |
| [#3099](https://github.com/nearai/ironclaw/pull/3099)（PR） | Transport Adapter 契约 | 多渠道 transport 解耦 |
| [#3180](https://github.com/nearai/ironclaw/pull/3180)（PR） | 原生隔离内存 guardrails | 安全隔离能力 |
| [#3243](https://github.com/nearai/ironclaw/pull/3243)（PR） | 运行时策略预设 | 策略管理自动化 |
| [#3257](https://github.com/nearai/ironclaw/pull/3257)（PR） | Turn 持久化契约 | 幂等性和状态恢复基础 |
| [#3264](https://github.com/nearai/ironclaw/issues/3264) | 多租户轮次准入策略 | 多租户场景支持 |
| [#3266](https://github.com/nearai/ironclaw/issues/3266) | 出站出口和订阅策略 | 消息路由能力 |

---

## 7. 用户反馈摘要

### 真实用户痛点（从 Issue 内容提炼）

| 用户 | 场景 | 痛点 |
|---|---|---|
| @magnusviri | Docker 安装 | **镜像不存在** — 按官方文档 pull `nearai/ironclaw:latest` 失败，导致安装流程中断 |
| @sunglow666 | 聊天 UI 附件 | **图片预览异常** — 上传后刷新预览消失、出现重复图片、粘贴图片预览过大，影响日常使用体验 |
| 下游 crates.io 用户（#3259） | 依赖管理 | **发布链路断裂** — GitHub 已有 v0.27.0 但 crates.io 停滞在 0.24.0，被迫使用旧版本，失去最新功能和安全更新 |

### 正面反馈信号
- Abound demo 集成（#1764）推进中，涉及 Responses API 修复、凭证注入和 forex skill，表明多集成场景有实际需求。
- 数据库和配置文档已正式纳入导航（#2948/#3258），降低了新用户的上手门槛。

---

## 8. 待处理积压

以下 Issue 持续 Open 且长时间无 fix，建议维护者关注：

| Issue | 积压时长 | 重要性 | 建议行动 |
|---|---|---|---|
| **[#1378](https://github.com/nearai/ironclaw/issues/1378)**（PR） | ~7 周（自 Mar 18） | ⭐⭐⭐ 高 | 规模 XL，风险中，多渠道路由是实际需求，建议优先推进 review |
| **[#1764](https://github.com/nearai/ironclaw/pull/1764)**（PR） | ~5 周（自 Mar 30） | ⭐⭐⭐ 高 | Abound demo 集成，Responses API 修复，建议尽快纳入目标版本 |
| **[#3272](https://github.com/nearai/ironclaw/issues/3272)** | 今日新报 | ⭐⭐ 中 | 需指派前端维护者，确认影响范围并启动 fix |
| **[#3259](https://github.com/nearai/ironclaw/issues/3259)** | 1 天 | ⭐⭐ 高 | 发布流程问题，阻断下游获取安全修复，需确认发布阻塞原因 |

---

## 📊 健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | 🟢 极高 | 17 Issues + 38 PRs，24 小时内产出密度高 |
| 架构推进 | 🟢 良好 | Reborn 体系各子系统 Issue 完备，核心 PR 已合流 |
| Bug 管理 | 🟡 待关注 | 1 个新 Bug（#3272）无 fix，依赖 UI 团队响应 |
| 发布质量 | 🔴 风险 | crates.io 发布滞后约 3 个版本，需尽快处理 #3259 |
| 社区响应 | 🟢 良好 | 核心维护者 @serrrfirat 活跃，多个 salvage PR 体现维护质量 |

---

*本日报由 AI 基于 GitHub 数据自动生成，如有数据出入请以 GitHub 原页面为准。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：2026-05-06**

---

## 1. 今日速览

2026年5月6日，LobsterAI 项目保持高度活跃。社区贡献者共提交 17 条 PR 更新，其中 16 条已完成合并或关闭，仅 1 条待合并（#1886），合并率达 94%。今日主要围绕代码重构（移除废弃引擎分支逻辑）、POPO 多机器人架构支持、以及多项 UI/UX 修复展开。值得注意的是，今日新增 1 条 **[安全漏洞报告](#bug-与稳定性)**（路径穿越），需重点关注。项目整体健康度良好，无版本发布但功能迭代稳步推进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日共合并/关闭 **16 条 PR**，推进了多个重要功能与修复：

| PR | 标题 | 领域 | 状态 |
|---|---|---|---|
| [#1886](https://github.com/netease-youdao/LobsterAI/pull/1886) | fix: 修复由 ChatGPT oauth 引起的 /models 命令结果展示不全 | main, openclaw | 🟡 待合并 |
| [#1884](https://github.com/netease-youdao/LobsterAI/pull/1884) | refactor: remove dead engine-branching code | 多领域 | ✅ 已合并 |
| [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) | feat: POPO 多机器人实例支持 | 多领域 | ✅ 已合并 |
| [#1876](https://github.com/netease-youdao/LobsterAI/pull/1876) | chore(release): merge release/2026.04.27 into main | 多领域 | ✅ 已合并 |
| [#1858](https://github.com/netease-youdao/LobsterAI/pull/1858) | fix: raise EngineStartupOverlay z-index above Settings modal | renderer, cowork | ✅ 已合并 |
| [#1856](https://github.com/netease-youdao/LobsterAI/pull/1856) | fix: strip IM media metadata from user message display | renderer, cowork | ✅ 已合并 |
| [#1848](https://github.com/netease-youdao/LobsterAI/pull/1848) | fix(dingtalk): patch file:// URL for Windows image inbound | openclaw | ✅ 已合并 |
| [#1844](https://github.com/netease-youdao/LobsterAI/pull/1844) | fix: redact sensitive keys in logs and extract sanitizeForLog utility | main, openclaw | ✅ 已合并 |
| [#1838](https://github.com/netease-youdao/LobsterAI/pull/1838) | fix: stamp meta on openclaw.json to prevent clobbered snapshots | main, openclaw | ✅ 已合并 |
| [#1834](https://github.com/netease-youdao/LobsterAI/pull/1834) | fix: upgrade openclaw-weixin to 2.1.10 and add openclaw patches | - | ✅ 已合并 |
| [#1828](https://github.com/netease-youdao/LobsterAI/pull/1828) | fix: update default model configs for Volcengine and Qwen | - | ✅ 已合并 |
| [#1826](https://github.com/netease-youdao/LobsterAI/pull/1826) | Release/2026.04.24 | 多领域 | ✅ 已合并 |
| [#1815](https://github.com/netease-youdao/LobsterAI/pull/1815) | fix(skills): remove ~/.claude/skills from discovery roots | main, skills | ✅ 已合并 |
| [#1810](https://github.com/netease-youdao/LobsterAI/pull/1810) | feat(settings): add embedding configuration for memory search | 多领域 | ✅ 已合并 |
| [#1814](https://github.com/netease-youdao/LobsterAI/pull/1814) | fix(cowork): restore DiffView for edit tool's edits-array input format | renderer, cowork | ✅ 已合并 |
| [#1865](https://github.com/netease-youdao/LobsterAI/pull/1865) | fix(cowork): per-agent model selection in header ModelSelector | renderer, cowork | ✅ 已合并 |
| [#1860](https://github.com/netease-youdao/LobsterAI/pull/1860) | fix(cowork): use header-selected model for supportsImage on home page | renderer, cowork | ✅ 已合并 |

**重点推进内容**：

- **架构重构**（#1884）：移除已废弃的 `yd_cowork` 引擎分支逻辑，统一为 `openclaw` 单引擎路径，净减少 65 行代码，涉及 11 个文件
- **POPO 多机器人支持**（#1883）：升级 moltbot-popo 插件至 2.1.1，接入多实例架构，补充相关类型定义
- **日志安全增强**（#1844）：新增 `serializeForLog()` 自动脱敏 API 密钥、Authorization 等敏感字段，密钥日志从暴露前 12 字符缩短为 `前3***尾2` 格式
- **配置健康监控**（#1838）：修复 OpenClaw 配置元数据缺失导致频繁生成 `.clobbered` 快照文件的问题

---

## 4. 社区热点

今日无新增评论/讨论活跃的 Issues 或 PRs。大部分 PRs 来自核心贡献者 @btc69m979y-dotcom 和 @liuzhq1986，社区参与度一般。

**建议关注**：待合并的 #1886（ChatGPT OAuth 相关问题修复）可能在合并后引发后续讨论。

---

## 5. Bug 与稳定性

### 🔴 高优先级（安全漏洞）

| Issue | 描述 | 严重程度 | 状态 |
|---|---|---|---|
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) | **邮箱 SKILL 路径穿越漏洞** - `imap-smtp-email` 的 `downloadAttachments` 实现未对附件名称进行过滤，直接拼接后下载 | 🔴 **严重** | 🟡 已报告，待确认 |

> **详情**：漏洞位于 `LobsterAI\resources\SKILLs\imap-smtp-email\scripts\imap.js` 的 `downloadAttachments` 函数，攻击者可通过构造包含路径遍历序列（如 `../`）的附件文件名实现任意文件写入。

### 🟡 中优先级（待修复）

| PR | 描述 | 领域 | 状态 |
|---|---|---|---|
| [#1886](https://github.com/netease-youdao/LobsterAI/pull/1886) | ChatGPT OAuth 登录后导致 `/models` 命令结果展示不全 | main, openclaw | 🟡 待合并 |

---

## 6. 功能请求与路线图信号

**无新增功能请求**。今日主要工作是完善已规划功能：

- **多机器人架构扩展**（POPO 支持已完成）：验证多实例配置管理模式，后续可能扩展至其他 IM 平台
- **内存检索增强**（Embedding 配置已完成）：支持远程 Embedding 提供商（OpenAI、Gemini 等），优化 CJK 语言搜索

---

## 7. 用户反馈摘要

今日 Issue 反馈：

- **安全研究员 @Arashimu** 报告了邮箱 SKILL 的路径穿越漏洞，表明用户对安全性的关注度提升。该漏洞可能影响使用邮箱功能的企业用户。

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| 编号 | 描述 | 优先级 | 建议 |
|---|---|---|---|
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) | 邮箱 SKILL 路径穿越漏洞 | 🔴 高 | 建议尽快安排安全 review 并发布 patch |
| [#1886](https://github.com/netease-youdao/LobsterAI/pull/1886) | ChatGPT OAuth 相关问题 | 🟡 中 | 建议合并前完成 review |

**长期积压**：无明显长期未响应的 Issue 或 PR。

---

## 总结

LobsterAI 项目今日保持高效率运转，16 条 PR 完成合并，代码库持续优化。今日最大风险点为邮箱 SKILL 的安全漏洞，建议维护团队优先处理。POPO 多机器人实例支持的完成标志着 IM 平台能力进一步成熟。项目健康度：**良好**（合并率 94%，无阻塞问题）。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# 🔧 Moltis 项目日报 | 2026-05-06

---

## 1. 今日速览

今日 Moltis 项目活跃度 **较低**，共记录 **1 条新 Issue** 和 **1 条待合并 PR**，无版本发布与合并记录。

- **Issue 层面**：社区有 1 个 Bug 报告正在等待跟进（Login failure），目前零评论零反应，社区响应尚待激活
- **依赖维护**：Dependabot 自动发起了 Rust 依赖组更新 PR（`gix` 0.78.0 → 0.83.0），预计近期合入
- **整体评估**：项目处于日常维护节奏，无重大阻断问题，建议维护者关注 Bug 进度

---

## 2. 版本发布

> **今日无新版本发布。**

---

## 3. 项目进展

| 类型 | 数量 | 详情 |
|------|------|------|
| 待合并 PR | 1 | [#967 Dependabot Rust 依赖更新](#967) |

### PR #967 — Rust 依赖批量更新
**状态**：🟡 Open（待审查合并）  
**作者**：@dependabot[bot]  
**目录**：根目录（`/`）  
**更新内容**：

| 依赖 | 旧版本 | 新版本 |
|------|--------|--------|
| `gix` | 0.78.0 | 0.83.0 |

> `gix` 是 GitoxideLabs 的核心 Git 操作库，此次升级预计带来更好的 Git 互操作性与性能改进。
>
> ⚠️ **建议**：维护者应在合入前确认 `gix` 更新未破坏 Moltis 的核心 Git 功能（repo 初始化、克隆等），建议跑通 CI 全量测试。

📎 链接：https://github.com/moltis-org/moltis/pull/967

---

## 4. 社区热点

> 今日暂无高互动 Issue/PR。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 已有 Fix PR? |
|----------|-------|------|--------------|
| 🟡 中 | [#968 Bug: Login failure](#968) | Open | ❌ 无 |

### Issue #968 — [Bug] Login failure
**严重程度**：🟡 中等（功能阻断）  
**报告者**：@BrandonStudio  
**创建时间**：2026-05-06  
**评论数**：0 | 👍：0

**摘要**：用户在使用 Moltis 时遭遇登录失败，已确认排除了以下可能性：
- ✅ 非重复 Bug
- ✅ 使用最新版本
- ✅ 提供了完整 Session 上下文

> **评估**：报告者提供了规范模板，信息完整度较高，但缺乏具体错误日志。维护者应尽快跟进，索要错误堆栈/日志以定位根因。

📎 链接：https://github.com/moltis-org/moltis/issues/968

---

## 6. 功能请求与路线图信号

> 今日无新功能请求。

---

## 7. 用户反馈摘要

| 反馈来源 | 类型 | 内容要点 |
|----------|------|----------|
| Issue #968 | Bug 反馈 | 用户在生产环境中遭遇 **登录失败**，使用受阻，期望快速修复 |

> 当前用户反馈量极少，社区活跃度有提升空间。建议维护者在修复 #968 后主动在 issue 下回复，增加用户粘性。

---

## 8. 待处理积压

| 类型 | 编号 | 状态 | 积压时长 | 优先级 |
|------|------|------|----------|--------|
| Bug | #968 | Open | 1 天 | 🟡 中 |

### Issue #968 — Login failure
> 该 Bug 报告已积压 **1 天**，建议优先定位并确认根因，今日内给出初步响应以安抚用户。

---

## 📊 指标摘要

| 指标 | 数值 |
|------|------|
| 🆕 新 Issue（24h） | 1 |
| 🔒 已关闭 Issue（24h） | 0 |
| 📥 待合并 PR（24h） | 1 |
| ✅ 已合并 PR（24h） | 0 |
| 🏷️ 新版本发布 | 0 |
| 🏥 Bug（含新报告） | 1 |

---

*报告生成时间：2026-05-06 | 数据来源：github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目日报 | 2026-05-06

---

## 1. 今日速览

QwenPaw 项目在 2026-05-06 保持高度活跃，共产生 **25 条 Issues 更新**（18 条新开/活跃，7 条关闭）和 **11 条 PR 更新**（9 条待合并，2 条已合并/关闭）。未发布新版本。项目今日呈现以下特征：**功能增强需求旺盛**（多智能体协作、语义技能路由、层级子代理等），**Windows 平台稳定性问题突出**（启动缓慢、网络重连失败、文件链接过期），以及**多渠道集成 bug 收敛**（Telegram、钉钉、飞书均有反馈）。社区贡献热情高涨，5 个 PR 来自首次贡献者，涵盖国际化、CLI 工具、安全增强等领域。

---

## 2. 版本发布

**今日无新版本发布**。最新 Release 信息请参阅官方仓库 Release 页面。

---

## 3. 项目进展

### ✅ 已合并/关闭 PR

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#4021](https://github.com/agentscope-ai/QwenPaw/pull/4021) | fix(message_processing): return resolved path for file:// URL audio blocks | ❌ Closed | 修复本地文件路径被 `download_file_from_url()` 覆盖导致 `file://` URL 媒体块失效的问题，贡献者：@karls0r |
| [#3922](https://github.com/agentscope-ai/QwenPaw/pull/3922) | Add plan mode docs | ❌ Closed | 新增 Plan Mode 文档，完善用户指引 |

### 🔄 待审查 PR

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) | feat(chat): replace Web Speech API with Whisper transcription | 🔍 Under Review | 语音输入能力升级，支持非 Web Speech API 浏览器（如豆包），新增 `Ctrl+Shift+M` 快捷键 |
| [#4046](https://github.com/agentscope-ai/QwenPaw/pull/4046) | feat(security): add rule level auto deny | 🔍 Under Review | Tool Guard 增加按规则 ID 自动拒绝能力，增强安全管控粒度 |
| [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) | feat(skills): add cli skill test command | 🔍 Under Review | 新增 `qwenpaw skills test` CLI 命令，支持技能验证 |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | feat(i18n): add Brazilian Portuguese (pt-BR) locale support | 🔍 Under Review | Console 和 Website 新增巴西葡萄牙语支持 |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | Feat/semantic skill routing | 🔍 Under Review, Need Discussions | 基于 Embedding 的语义技能路由，减少大技能池的上下文 token 消耗 |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | feat(cli-desktop): system tray startup item (win32 only) | 🔍 Open | Windows 系统托盘启动功能，支持后台常驻和自启动 |
| [#4039](https://github.com/agentscope-ai/QwenPaw/pull/4039) | fix(channel): telegram network retry | 🔍 Open | 优化 Telegram Channel 网络错误重试逻辑，区分 polling error 与 conflict |
| [#4038](https://github.com/agentscope-ai/QwenPaw/pull/4038) | feat(cli): refuse non-loopback bind when QWENPAW_AUTH_ENABLED is unset | 🔍 Open | 安全加固：未启用认证时拒绝非本地回环绑定，防止意外公网暴露 |
| [#4048](https://github.com/agentscope-ai/QwenPaw/pull/4048) | fix(utils): remove redundant codes | 🔍 Open | 代码清理，移除冗余逻辑 |

**今日项目推进亮点**：安全能力增强（规则级自动拒绝、非本地绑定防护）、CLI 工具链完善（技能测试命令）、国际化扩展（葡萄牙语支持）、Windows 平台体验优化（系统托盘）——项目在稳健推进功能矩阵的同时，安全性与跨平台体验成为本周重点方向。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

1. **[#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) CoPaw Agent Teams — 自然语言驱动的自进化多智能体协作团队**
   - 类型：enhancement | 评论：5
   - **诉求核心**：用户希望从"手动挡"创建多智能体升级为自然语言驱动的自进化团队，智能体可动态协作、分工、共享记忆
   - **背后需求**：复杂任务场景下的多智能体编排自动化，降低使用门槛

2. **[#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) 输入框卡顿非常厉害**
   - 类型：question | 评论：4
   - **诉求核心**：用户反馈 CoPaw Desktop 输入框响应迟缓，影响对话体验
   - **背后需求**：桌面端性能优化，交互流畅度是核心体验指标

3. **[#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) 支持自定义 Agent 名称和头像**
   - 类型：enhancement | 评论：3
   - **诉求核心**：用户希望在对话界面展示自定义 Agent 名称，并支持通过 URL 配置头像
   - **背后需求**：品牌定制化、多 Agent 场景下的身份辨识需求

4. **[#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) 开启 HEARTBEAT.md 后网络中断无法自动重连**
   - 类型：bug | 评论：3
   - **诉求核心**：启用 HEARTBEAT.md 后网络恢复不会自动重连，必须手动重启
   - **背后需求**：后台长运行场景的健壮性要求，网络波动不应中断服务

5. **[#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) DeepSeek reasoning_content 导致 HTTP 500**
   - 类型：bug | 评论：2
   - **诉求核心**：多轮工具调用后 DeepSeek 推理模型触发 HTTP 500，reasoning_content 未正确回传
   - **背后需求**：主流推理模型（如 DeepSeek-V4-Pro）的生产级稳定性

### 💡 热门功能请求趋势

- **多智能体协作智能化**（#3224）：Agent Teams 概念引发热议，反映用户对"AI 原生协作"的期待
- **大技能池管理**（#3091）：50+ 技能场景下的上下文溢出问题催生语义路由需求
- **层级子代理架构**（#4044）：继承父上下文、身份、偏好的层级子代理，扩展多智能体边界

---

## 5. Bug 与稳定性

### 🔴 严重 Bug（影响核心功能）

| Issue | 描述 | 严重程度 | Fix PR | 状态 |
|-------|------|----------|--------|------|
| [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) | DeepSeek reasoning_content 多轮对话 HTTP 500 | 🔴 Critical | - | Open |
| [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | HEARTBEAT.md 导致网络中断后无法自动重连 | 🔴 Critical | - | Open |
| [#4047](https://github.com/agentscope-ai/QwenPaw/issues/4047) | 聊天记录文件/图片链接 24 小时后过期 | 🔴 Critical | - | Open |
| [#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) | 流式模型（MiMo/DeepSeek）触发 ReAct 循环重复调用 | 🔴 Critical | - | Open |

### 🟠 高优先级 Bug

| Issue | 描述 | 严重程度 | Fix PR | 状态 |
|-------|------|----------|--------|------|
| [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) | 钉钉渠道最终结果通知失败 — 事件循环生命周期竞态 | 🟠 High | - | Open |
| [#4040](https://github.com/agentscope-ai/QwenPaw/issues/4040) | AnthropicChatModel 硬编码 max_tokens=2048，截断长响应 | 🟠 High | - | Open |
| [#4033](https://github.com/agentscope-ai/QwenPaw/issues/4033) | MCP tool 超时硬编码 30s，无法自定义 | 🟠 High | - | Open |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | 添加模型步骤过多（Good First Issue） | 🟠 High | - | Open |

### 🟡 中低优先级 Bug

| Issue | 描述 | 状态 |
|-------|------|------|
| [#2859](https://github.com/agentscope-ai/QwenPaw/issues/2859) | Telegram 语音消息无法被本地 Whisper 识别 | ✅ Closed |
| [#3089](https://github.com/agentscope-ai/QwenPaw/issues/3089) | 技能池上传下载应显示差值而非全集 | ✅ Closed |
| [#3861](https://github.com/agentscope-ai/QwenPaw/issues/3861) | Console 页面对话多次中断 | ✅ Closed |
| [#3401](https://github.com/agentscope-ai/QwenPaw/issues/3401) | OpenCode 免费模型测试连接异常 | ✅ Closed |
| [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) | Windows 系统托盘功能（已由 #4041 部分实现） | ✅ Closed |

**稳定性总结**：今日共报告 13 条 Bug，其中 4 条已关闭（修复效率约 31%）。**DeepSeek 推理模型兼容性问题**和**网络重连健壮性**是当前最高优先级的稳定性风险，建议优先响应。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能（已有 PR，可能进入下一版本）

| Feature | Issue/PR | 状态 | 预期价值 |
|---------|----------|------|----------|
| 语义技能路由 | [#3091](https://github.com/agentscope-ai/QwenPaw/issues/3091) / [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | PR Under Review | 解决 50+ 技能场景下的上下文溢出和 token 浪费 |
| 自定义 Agent 名称/头像 | [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | Open | 多 Agent 场景下的身份辨识和品牌定制 |
| 层级子代理架构 | [#4044](https://github.com/agentscope-ai/QwenPaw/issues/4044) | Open | 扩展多智能体协作模式，支持父子上下文继承 |
| CoPaw Agent Teams | [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | Open | 自动化多智能体团队编排，降低使用门槛 |
| shell 命令自适应执行 | [#4044](https://github.com/agentscope-ai/QwenPaw/issues/4045) | Open | 智能区分同步/异步命令，优化执行效率 |
| 巴西葡萄牙语国际化 | [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | PR Under Review | 拓展南美市场，提升地区可用性 |

### 📊 功能请求分布

| 类别 | 数量 | 占比 |
|------|------|------|
| Multi-Agent 协作增强 | 4 | 22% |
| 技能/工具管理 | 3 | 17% |
| 平台稳定性（Windows/Mac） | 3 | 17% |
| 模型兼容（DeepSeek/Anthropic） | 3 | 17% |
| 渠道集成（Telegram/钉钉/飞书） | 3 | 17% |
| 其他 | 2 | 10% |

**路线图信号**：下一版本将重点关注 **技能管理效率**（语义路由、CLI 测试工具）、**国际化扩展**（葡萄牙语）、**Windows 平台体验**（系统托盘、启动速度）、以及 **推理模型稳定性**（DeepSeek reasoning_content）。

---

## 7. 用户反馈摘要

### ✅ 用户满意点

- **多智能体基础设施成熟**：CoPaw 1.0 的并行运行、独立配置、异步通信能力获得认可，为复杂任务奠定基础
- **ReMe 记忆机制**：多智能体共享记忆的能力被多次提及，评价积极
- **AgentScope 框架集成**：基于 AgentScope 的设计被用户视为项目优势

### ⚠️ 用户痛点

| 痛点 | 影响场景 | 频次 |
|------|----------|------|
| **添加模型步骤繁琐** | 首次配置体验 | 高 |
| **Windows 启动缓慢** | 日常使用 | 高 |
| **网络波动后不自动重连** | 后台长运行 | 高 |
| **文件/图片链接 24h 过期** | 聊天记录回溯 | 中 |
| **技能池管理效率低** | 大技能池用户 | 中 |
| **DeepSeek 推理模型不稳定** | 生产环境使用 | 中 |

### 💬 典型用户场景

1. **企业客服场景**：Telegram 语音消息识别失败，影响自动化客服流程
2. **开发者工作流**：50+ 技能 + 多 MCP Server 导致上下文溢出，被迫手动精简
3. **长时运行 Agent**：开启 HEARTBEAT.md 后网络中断无法恢复，必须人工介入
4. **跨渠道集成**：钉钉、飞书平台的消息渠道偶发性故障，影响业务连续性

---

## 8. 待处理积压

### ⏰ 长期未响应 Issue（>7 天无维护者回复）

| Issue | 类型 | 创建时间 | 最后更新 | 评论数 | 优先级 |
|-------|------|----------|----------|--------|--------|
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) CoPaw Agent Teams | enhancement | 2026-04-10 | 2026-05-05 | 5 | 🔴 High |
| [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) 自定义 Agent 名称/头像 | enhancement | 2026-04-03 | 202

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**报告日期：2026-05-06**  
**项目仓库：** [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. 今日速览

2026-05-06 期间，ZeptoClaw 项目保持平稳运行。**共产生 11 条 PR 更新**，全部为 Dependabot 自动生成的依赖更新请求，主要涉及 Rust 生态（tokio、axum、rustls 等）和 JavaScript 生态（astro、@astrojs/starlight）的版本迭代。**Issues 保持零更新**，无用户报告问题或功能讨论。项目依赖维护工作活跃，自动化程度高，整体健康度评级为 **优秀**。

---

## 2. 项目进展

> 本日无新版本发布（详细说明省略）

---

## 3. 项目进展

本日共 **11 条 PR 处于待合并状态**，全部来自 Dependabot 自动化依赖更新，整体推进了项目的依赖现代化与安全修复：

### Rust 生态依赖更新（5 条）

| PR 编号 | 依赖项 | 更新版本 | 重要性 |
|---------|--------|----------|--------|
| [#581](https://github.com/qhkm/zeptoclaw/pull/581) | `rustyline` | 17.0.2 → **18.0.0** | ⭐⭐⭐ 主版本更新 |
| [#579](https://github.com/qhkm/zeptoclaw/pull/579) | `rustls` | 0.23.37 → 0.23.39 | ⭐⭐ 安全修复 |
| [#577](https://github.com/qhkm/zeptoclaw/pull/577) | `libc` | 0.2.185 → 0.2.186 | ⭐ 补丁更新 |
| [#575](https://github.com/qhkm/zeptoclaw/pull/575) | `axum` | 0.8.8 → 0.8.9 | ⭐⭐ 补丁更新 |
| [#573](https://github.com/qhkm/zeptoclaw/pull/573) | `tokio` | 1.51.1 → 1.52.1 | ⭐⭐ 补丁更新 |

**注：** `rustyline` 升级至 18.0.0 为主版本迭代，建议关注是否引入破坏性变更。

### JavaScript 生态依赖更新（5 条）

| PR 编号 | 依赖项 | 更新范围 |
|---------|--------|----------|
| [#582](https://github.com/qhkm/zeptoclaw/pull/582) | `globals` | 17.3.0 → 17.5.0 |
| [#580](https://github.com/qhkm/zeptoclaw/pull/580) | `@astrojs/starlight` | 0.38.3 → 0.38.4 (zeptoclaw/docs) |
| [#578](https://github.com/qhkm/zeptoclaw/pull/578) | `astro` | 6.1.6 → 6.1.9 (zeptoclaw/docs) |
| [#576](https://github.com/qhkm/zeptoclaw/pull/576) | `astro` | 6.1.6 → 6.1.9 (r8r/docs) |
| [#572](https://github.com/qhkm/zeptoclaw/pull/572) | `@astrojs/starlight` | 0.38.3 → 0.38.4 (r8r/docs) |

### GitHub Actions 更新（1 条）

| PR 编号 | 依赖项 | 更新版本 |
|---------|--------|----------|
| [#574](https://github.com/qhkm/zeptoclaw/pull/574) | `taiki-e/install-action` | 2.75.17 → 2.75.22 |

---

## 4. 社区热点

**本日无活跃讨论记录。** 11 条 PR 均为自动化生成，无人工交互评论。Issues 模块零活动，建议维护者考虑在项目 README 或讨论区发起用户互动（如功能投票、版本规划讨论等）。

---

## 5. Bug 与稳定性

**本日无 Bug 报告。** 项目未收到任何崩溃、回归或稳定性问题反馈。

---

## 6. 功能请求与路线图信号

**本日无功能请求记录。** 缺乏用户功能提议可能意味着：(1) 当前版本满足用户需求，或 (2) 用户反馈渠道需优化。建议维护者主动通过 GitHub Discussions 收集路线图意见。

---

## 7. 用户反馈摘要

**本日无用户反馈。** 项目暂无来自 Issues 评论区的真实用户痛点、使用场景或满意度数据。

---

## 8. 待处理积压

| 类型 | 数量 | 状态说明 |
|------|------|----------|
| Issues | 0 条 | 无积压 |
| 待合并 PR | **11 条** | 全部为 Dependabot 依赖更新，建议维护者尽快审核合并 |

### ⚠️ 重点提醒

- **PR #581 (`rustyline` 18.0.0)：** 主版本升级，需验证 API 兼容性。
- **PR #579 (`rustls` 0.23.39)：** 涉及 TLS 安全库，建议优先合并。
- **PR #573 (`tokio` 1.52.1)：** 异步运行时补丁，建议确认无回归后合并。

---

**报告生成时间：** 2026-05-06  
**数据来源：** GitHub API | [ZeptoClaw Repository](https://github.com/qhkm/zeptoclaw)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>librefang</strong> — <a href="https://github.com/librefang/librefang">librefang/librefang</a></summary>

# LibreFang 项目动态日报

**报告日期**：2026-05-06  
**项目仓库**：github.com/librefang/librefang  
**数据周期**：过去 24 小时

---

## 1. 今日速览

LibreFang 项目今日保持高度活跃，共计 **45 条 Issues 更新**（新开/活跃 11 条，关闭 34 条）和 **45 条 PR 更新**（待合并 5 条，已合并/关闭 40 条），合并率高达 **88.9%**。项目发布了 **v2026.5.6-beta.9** 版本（310 PRs from 3 contributors），新增了 schema drift 检查、外部 tip-anchor 状态暴露等安全相关功能。今日社区焦点集中在 CI 持续失败问题（4 个 CI failure issues 已关闭）、GCP Free Tier 部署兼容性 bug（3 个相关 issues 新开）以及多项架构重构 PR 推进中。整体项目健康度评分：**7.5/10**（CI 稳定性有待提升，但功能交付节奏稳健）。

---

## 2. 版本发布

### 🎉 v2026.5.6-beta.9 发布

| 项目 | 详情 |
|------|------|
| **版本号** | v2026.5.6-beta.9 |
| **发布时间** | 2026-05-06 |
| **PR 链接** | [#4688](https://github.com/librefang/librefang/pull/4688) |
| **累计贡献** | 310 PRs from 3 contributors since v2026.5.2-beta8 |

**新增功能（Added）**：

| 功能 | PR | 贡献者 |
|------|-----|--------|
| Add schema drift check with sha256 baselines | [#4367](https://github.com/librefang/librefang/pull/4367) | @houko |
| Surface external tip-anchor status in /api/audit/verify | [#4388](https://github.com/librefang/librefang/pull/4388) | @houko |
| Announce health-status flips via aria-live | [#4405](https://github.com/librefang/librefang/pull/4405) | @houko |
| *(其他功能条目截断，详见 Release Notes)* | - | - |

**迁移注意事项**：
- 本次为 beta 版本，建议在非生产环境测试
- schema drift 检查可能影响现有测试套件，建议检查 sha256 baselines 配置

---

## 3. 项目进展

### 合并/关闭的重要 PR（按影响力排序）

| PR 编号 | 标题 | 状态 | 面积 | 影响力 |
|----------|------|------|------|--------|
| [#4660](https://github.com/librefang/librefang/pull/4660) | feat(runtime): close out tool-result context budget umbrella (#3347) | CLOSED | area/runtime/kernel | 🔥 完成上下文预算机制，关闭 #3347 |
| [#4661](https://github.com/librefang/librefang/pull/4661) | refactor(api): full KernelHandle widening — close LibreFangKernel leaks (#3744 N/N) | CLOSED | area/kernel | 🔥 完成核心架构重构，消除 88+ 处内部类型泄露 |
| [#4662](https://github.com/librefang/librefang/pull/4662) | feat(api): incognito chat mode (#4073) | CLOSED | area/runtime | ✨ 新增隐私模式，支持 `--incognito` flag |
| [#4677](https://github.com/librefang/librefang/pull/4677) | feat(runtime): tool-exec backend trait + SSH and Daytona impls (#3332) | OPEN | area/runtime/kernel | 🔥 工具执行后端抽象，支持 SSH/Daytona |
| [#4685](https://github.com/librefang/librefang/pull/4685) | refactor(memory): replace Arc<Mutex<Connection>> with r2d2 connection pool (#3378 part 2) | OPEN | area/runtime/kernel | ⚡ 数据库连接池重构，性能优化 |
| [#4682](https://github.com/librefang/librefang/pull/4682) | fix(dashboard/config): expose every KernelConfig section in single-page UI | OPEN | area/kernel | 🐛 修复配置页面导航问题 |
| [#4681](https://github.com/librefang/librefang/pull/4681) | fix: terminal page reconnect loop on container hosts (#4675) | OPEN | - | 🐛 修复 GCP 容器环境终端重连问题 |
| [#4672](https://github.com/librefang/librefang/pull/4672) | feat(dashboard): collapse chat tool calls into a per-message popup | CLOSED | no-rust-required | ✨ UI 优化，工具调用折叠展示 |
| [#4673](https://github.com/librefang/librefang/pull/4673) | fix(test): kill wall-clock flake in registry concurrent-register-and-remove test | CLOSED | area/kernel | 🧪 修复测试时序依赖问题 |
| [#4671](https://github.com/librefang/librefang/pull/4671) | fix(ci): isolate Live Integration Smoke from default dashboard credentials | CLOSED | area/ci | 🔧 CI 环境隔离修复 |
| [#4670](https://github.com/librefang/librefang/pull/4670) | fix(api): align 5 missed assertions with dual-shape error envelope | CLOSED | area/docs | 🐛 修复 30+ commits 的集成测试失败 |
| [#4679](https://github.com/librefang/librefang/pull/4679) | fix(test): bump test_sidecar_adapter_spawn_echo timeout for Windows cold-start (#4676) | CLOSED | area/channels | 🧪 Windows 测试超时修复 |
| [#4683](https://github.com/librefang/librefang/pull/4683) | fix(cron): summarize-and-trim compaction mode for Persistent sessions (#3693) | OPEN | area/docs/runtime/kernel | ✨ 持久会话压缩模式优化 |
| [#4663](https://github.com/librefang/librefang/pull/4663) | fix(api): DELETE /api/agents/{id} idempotent on nonexistent (refs #4614) | CLOSED | area/docs | 🐛 API 幂等性修复 |
| [#4658](https://github.com/librefang/librefang/pull/4658) | feat(llm-drivers): trace identifiers via env vars on CLI-style drivers (#4637 3/N) | CLOSED | area/docs | ✨ LLM 驱动追踪增强 |

**今日合并率**：40/45 = **88.9%**

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 状态 | 类型 | 摘要 |
|-------|--------|------|------|------|
| [#4652](https://github.com/librefang/librefang/issues/4652) | 11 | CLOSED | CI Failure | Main CI failure on commit 27a82e8 |
| [#4659](https://github.com/librefang/librefang/issues/4659) | 8 | CLOSED | CI Failure | Main CI failure on commit 6d4ba91 |
| [#4648](https://github.com/librefang/librefang/issues/4648) | 4 | CLOSED | CI Failure | Main CI failure on commit 4237eb1 |
| [#4634](https://github.com/librefang/librefang/issues/4634) | 4 | CLOSED | CI Failure | Main CI failure on commit 9e58257 |
| [#3711](https://github.com/librefang/librefang/issues/3711) | 3 | CLOSED | Enhancement | 21 Error enums collapse to String at trait boundaries |
| [#3304](https://github.com/librefang/librefang/issues/3304) | 3 | CLOSED | Enhancement | Split monolithic release.yml into per-target workflows |
| [#3302](https://github.com/librefang/librefang/issues/3302) | 3 | CLOSED | Enhancement | Standardize discriminated unions in API responses |
| [#3637](https://github.com/librefang/librefang/issues/3637) | 3 | CLOSED | Enhancement | No Idempotency-Key support on POST endpoints |
| [#3748](https://github.com/librefang/librefang/issues/3748) | 3 | CLOSED | Bug | /api/agents route table mixes verb/path conventions |
| [#3853](https://github.com/librefang/librefang/issues/3853) | 3 | CLOSED | Enhancement | Dashboard pages have ~3% test coverage |

### 热点分析

1. **CI 失败问题突出**：前 4 个讨论最活跃的 issues 全部是 CI failure，累计 27 条评论，反映出当前 CI 流水线存在稳定性问题。值得注意的是这 4 个 issues 已全部 CLOSED，说明维护者已快速响应。

2. **架构重构受关注**：[#3711](https://github.com/librefang/librefang/issues/3711) 关于错误枚举字符串化的 issue 获得 3 条评论，这是一个 High severity 的架构问题，影响 21 个 Error 类型。

3. **API 规范化持续推进**：多个围绕 API 设计规范的 issues（#3302, #3637, #3748）均已关闭，表明团队在清理技术债务方面取得进展。

---

## 5. Bug 与稳定性

### 今日新报告 Bug

| Issue | 严重程度 | 状态 | 描述 | 是否有 Fix PR |
|-------|----------|------|------|--------------|
| [#4684](https://github.com/librefang/librefang/issues/4684) | Medium | OPEN | Hands page showing empty on GCP Free Tier | ❌ 无 |
| [#4686](https://github.com/librefang/librefang/issues/4686) | Medium | OPEN | Plugins throwing error while installing on GCP Free Tier | ❌ 无 |
| [#4674](https://github.com/librefang/librefang/issues/4674) | Medium | OPEN | Configuration changes not saved | ❌ 无 |
| [#4675](https://github.com/librefang/librefang/issues/4675) | Medium | OPEN | Terminal page reconnect loop on GCP Free Tier | ✅ [#4681](https://github.com/librefang/librefang/pull/4681) |
| [#4664](https://github.com/librefang/librefang/issues/4664) | Medium | OPEN | Websearch config missing in GUI + SearXNG not working | ❌ 无 |

### GCP Free Tier 集群问题

**影响评估**：3 个相关 bugs（#4684, #4686, #4675）均指向 GCP Free Tier 部署场景，疑似存在共同根因（如资源限制、网络配置）。

```
问题模式：
├── Hands 页面为空 → 可能是资源不足或 API 连接问题
├── Plugin 安装报错 → 可能是权限或存储限制
└── Terminal 重连循环 → 已确认是容器环境 WS 握手问题
```

### 已修复的 Bug

| PR | 修复内容 |
|----|----------|
| [#4681](https://github.com/librefang/librefang/pull/4681) | Terminal page reconnect loop on container hosts |
| [#4670](https://github.com/librefang/librefang/pull/4670) | 5 missed assertions with dual-shape error envelope（30+ commits 测试失败） |
| [#4673](https://github.com/librefang/librefang/pull/4673) | Wall-clock flake in registry concurrent test |
| [#4679](https://github.com/librefang/librefang/pull/4679) | Windows cold-start test timeout |
| [#4663](https://github.com/librefang/librefang/pull/4663) | DELETE /api/agents/{id} idempotency regression |

---

## 6. 功能请求与路线图信号

### 高价值功能请求（按 severity 排列）

| Issue | Severity | 标签 | 描述 | 相关 PR |
|-------|----------|------|------|--------|
| [#3711](https://github.com/librefang/librefang/issues/3711) | High | enhancement, area/runtime, area/kernel | 21 Error enums collapse to String — restore structured errors | ⚠️ 待跟进 |
| [#3304](https://github.com/librefang/librefang/issues/3304) | High | enhancement, area/ci | Split monolithic release.yml into per-target workflows | ⚠️ 待跟进 |
| [#3302](https://github.com/librefang/librefang/issues/3302) | High | enhancement, area/api | Standardize discriminated unions in API responses | ⚠️ 待跟进 |
| [#3853](https://github.com/librefang/librefang/issues/3853) | High | enhancement, area/security, area/api | Dashboard pages have ~3% test coverage | ⚠️ 待跟进 |
| [#3541](https://github.com/librefang/librefang/issues/3541) | High | area/kernel | KernelHandle trait uses Result<_, String> for ~40 methods | ⚠️ 待跟进 |
| [#3637](https://github.com/librefang/librefang/issues/3637) | Medium | enhancement, area/channels, area/api | No Idempotency-Key support on POST endpoints | ⚠️ 待跟进 |
| [#3384](https://github.com/librefang/librefang/issues/3384) | Medium | enhancement, performance, area/kernel | model_catalog RwLock acquired 5+ times per send_message_full | ⚠️ 待跟进 |
| [#3396](https://github.com/librefang/librefang/issues/3396) | High | documentation, area/api, area/sdk | openapi.json ships with 297 empty schema blobs | ⚠️ 待跟进 |

### 路线图信号分析

1. **API 规范化进入深水区**：多个 High severity API issues 聚焦于错误处理、响应格式、SDK 类型安全，表明项目正从功能开发转向质量加固。

2. **安全测试覆盖率是痛点**：#3853 指出 Dashboard 安全关键页面（TOTP/approval/budget）测试覆盖率为零，这是生产部署的重大隐患。

3. **性能优化待推进**：#3384 提出的 RwLock 竞争问题若属实，可能影响高并发场景下的吞吐量。

---

## 7. 用户反馈摘要

### 真实用户痛点（来自 Issues 评论）

| 来源 | 场景 | 反馈内容 |
|------|------|----------|
| [#4684](https://github.com/librefang/librefang/issues/4684) @AIHunter83 | GCP Free Tier 部署 | "Hands page showing empty and 0 hands active" — 用户按照官方 GCP 部署指南安装，但 Hands 功能完全不可用 |
| [#4686](https://github.com/librefang/librefang/issues/4686) @AIHunter83 | GCP Free Tier 插件安装 | "Plugins throwing error while installing" — 插件安装流程在 Free Tier 环境下失败 |
| [#4674](https://github.com/librefang/librefang/issues/4674) @AIHunter83 | 配置管理 | "any change in configuration page not saved with error" — UI 配置保存功能损坏 |
| [#4675](https://github.com/librefang/librefang/issues/4675) @AIHunter83 | GCP 终端访问 | "terminal page always trying to reconnect with no luck" — WebSocket 连接在容器环境无法建立 |
| [#4664](https://github.com/librefang/librefang/issues/4664) @fbnielsen1959 | Web Search 配置 | "Websearch config missing in GUI" + "SearXNG still not working" — 配置 UI 缺失且 TOML 配置导致 Dashboard 无法加载 |

### 关键洞察

- **GCP Free Tier 是高风险场景**：用户 @AIHunter83 在同一天提交了 4 个 bugs，全部指向 GCP Free Tier 部署。这可能是一个需要专门测试矩阵覆盖的场景。
- **配置管理是用户痛点**：配置页面的 save 功能、Web Search UI 缺失，反映出 Dashboard 功能完整性有待提升。
- **部署文档与实际行为存在差距**：用户严格按照文档操作但仍遇到问题，暗示文档需要更新或代码需要更友好的错误提示。

---

## 8. 待处理积压

### 长期未响应的重要 Issues（按创建日期和 severity 排序）

| Issue | 创建日期 | Severity | 状态 | 标签 | 待响应时间 |
|-------|----------|----------|------|------|------------|
| [#3296](https://github.com/librefang/librefang/issues/3296) | 2026-04-27 | Critical | CLOSED | enhancement, area/ci | ✅ 已关闭 |
| [#3297](https://github.com/librefang/librefang/issues/3297) | 2026-04-27 | Critical | CLOSED | enhancement, area/docs | ✅ 已关闭 |
| [#3302](https://github.com/librefang/librefang

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# OpenFang 项目动态日报

**报告日期：** 2026-05-06  
**项目：** RightNow-AI/openfang  
**数据来源：** GitHub Activity (过去24小时)

---

## 1. 今日速览

OpenFang 项目今日保持较高活跃度，共产生 6 条 Issues 更新（新开/活跃）和 1 条待合并 PR。社区反馈集中在用户体验优化（Agent 交互、文件管理）以及 Discord 频道功能增强。目前无新版本发布，项目整体处于功能迭代阶段，代码贡献者持续推进 Discord 附件功能等基础设施改进。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 待合并 PR

| PR 编号 | 标题 | 作者 | 状态 |
|---------|------|------|------|
| [#1162](https://github.com/RightNow-AI/openfang/pull/1162) | feat(channels/discord): Outbound file/image attachments + image_cache hardening | @benhoverter | 待合并 |

**详情：**
- **分支：** `feat/outbound-file-attach` → `upstream/main`
- **规模：** 27 commits，+4,141 / -64 行代码变更
- **影响范围：** channels、runtime、types
- **功能描述：** 实现 Discord 频道的出站文件/图片附件功能，并加强 image_cache 安全性
- **独立性：** 独立于 PR-A (#1143)，可任意顺序合并

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 状态 |
|------------|------|--------|-----|------|
| [#1139](https://github.com/RightNow-AI/openfang/issues/1139) | Move agent action approvals into chat & remove/extend timeout | 2 | 0 | OPEN |
| [#1160](https://github.com/RightNow-AI/openfang/issues/1160) | MacOS custom certificate | 1 | 0 | OPEN |
| [#1159](https://github.com/RightNow-AI/openfang/issues/1159) | How to install it on the server? | 1 | 0 | OPEN |

**热点分析：**

**#1139 - Agent 操作审批体验优化**  
用户 @maratosis 反映当前审批请求显示在独立的 "Approvals" 面板中，强制用户频繁切换窗口，体验割裂。同时审批超时设置过短，用户来不及响应即过期。此诉求反映出现有 Agent 交互流程存在 UX 设计缺陷，需将审批流程集成至主聊天界面并优化超时机制。

**#1159 - 服务器部署指导需求**  
用户 @coder-nguoi-tay 寻求在 VPS 上部署 OpenFang 作为 API 服务的教程，说明项目文档在自托管部署场景存在缺口。

---

## 5. Bug 与稳定性

### 新报告的 Bug

| Issue 编号 | 标题 | 严重程度 | 状态 |
|------------|------|----------|------|
| [#1160](https://github.com/RightNow-AI/openfang/issues/1160) | MacOS custom certificate | 中 | OPEN |
| [#1164](https://github.com/RightNow-AI/openfang/issues/1164) | Agent Stop button leaves hand Active, blocks re-activation | 高 | OPEN |

**Bug 详情：**

**#1164 - Agent 停止按钮状态残留问题（高优先级）**  
用户 @drzow 报告点击 Agent 窗口中的 "Stop" 按钮后，Agent 循环虽停止，但 hand 实例未解除激活状态。在 `/api/hands/active` 中仍显示为 `Active`，导致通过设置向导重新激活时报错 `400 "Hand already active: <hand_id>"`。期望行为：`Stop` 和 `Deactivate` 应协同工作，确保状态一致性。

**#1160 - MacOS 自签名证书兼容性问题（中优先级）**  
用户 @crust3780 反馈使用自签名证书的自定义 OpenAI 兼容 Provider 时，OpenFang 无法建立 TLS 连接，请求被立即终止。虽然 MacOS Keychain 已信任该 CA，但 OpenFang 未调用 MacOS 原生 TLS 存储。

---

## 6. 功能请求与路线图信号

### 功能增强请求

| Issue 编号 | 标题 | 期望特性 | 潜在价值 |
|------------|------|----------|----------|
| [#1165](https://github.com/RightNow-AI/openfang/issues/1165) | Feature to send the File on Chat | 文件下载功能 | 高 |
| [#1163](https://github.com/RightNow-AI/openfang/issues/1163) | Feature to uninstall an Agent from chat | Agent 卸载功能 | 中 |
| [#1139](https://github.com/RightNow-AI/openfang/issues/1139) | Move agent action approvals into chat | 审批流程集成 | 高 |

**需求解读：**

**#1165 - 聊天窗口文件发送**  
用户 @nimitbhardwaj 指出 Agent 生成的文件（如 markdown 资产）无法从 OpenFang Web 界面下载，UI 报错 "unable to serve the file"。建议在聊天界面直接提供文件发送/下载入口，提升工作流连贯性。

**#1163 - Agent 卸载功能**  
同一用户 @nimitbhardwaj 提出当前可启动/停止 Agent，但无法彻底卸载（移除工作区文件）。建议增加卸载操作，清理 Agent 相关文件和资源。

**路线图信号：** 社区需求高度集中在 Agent 生命周期管理和交互体验优化，文件管理和 UI 集成可能是下一版本重点方向。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 痛点描述 | 来源 |
|------|----------|------|
| Agent 审批流程 | 审批面板与聊天分离，超时设置不合理 | #1139 |
| MacOS 部署 | 自签名证书导致 TLS 握手失败 | #1160 |
| 服务器部署 | 缺少 VPS 部署文档 | #1159 |
| Agent 状态管理 | Stop 按钮不释放 hand 状态 | #1164 |
| 文件生命周期 | Agent 产出文件无法下载，卸载时文件残留 | #1165, #1163 |

**正向反馈：** Discord 频道功能开发活跃（#1162 PR），社区贡献者持续投入基础设施改进。

---

## 8. 待处理积压

### 长期未关闭 Issues

| Issue 编号 | 标题 | 创建日期 | 未响应天数 | 备注 |
|------------|------|----------|------------|------|
| [#1139](https://github.com/RightNow-AI/openfang/issues/1139) | Move agent action approvals into chat & remove/extend timeout | 2026-04-30 | ~6天 | 已有2条评论，等待维护者响应 |

### 建议关注

1. **#1139** - 创建已6天，评论活跃但未分配 milestone，需维护者评估优先级并安排实现
2. **#1164** - 高优先级 Bug，影响 Agent 重新激活，需尽快确认复现并发布 fix
3. **#1160** - MacOS TLS 问题影响特定用户群体，如项目支持 MacOS 部署应优先处理

---

## 附录：活跃度指标

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 6 |
| Issues 已关闭 | 0 |
| PRs 待合并 | 1 |
| PRs 已合并 | 0 |
| 新版本发布 | 0 |
| 总评论数 | 4 |

**健康度评估：** 项目今日活跃度中等偏高，Issue 讨论和 PR 开发均有进展，但无版本产出。Bug 处理（特别是 #1164）应作为短期优先项，功能增强请求（#1165, #1163）可纳入路线图规划。

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*