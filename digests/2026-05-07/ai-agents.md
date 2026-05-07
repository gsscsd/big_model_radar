# OpenClaw 生态日报 2026-05-07

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-07 02:24 UTC

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

**报告日期：** 2026-05-07  
**项目仓库：** github.com/openclaw/openclaw  
**数据周期：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 **500 条 Issues 更新**（新开/活跃 308，已关闭 192）和 **500 条 PR 更新**（待合并 354，已合并/关闭 146）。项目发布了 **v2026.5.6 热修复版本**，紧急修复了 v2026.5.5 中 `doctor --fix` 错误重写 `openai-codex/*` OAuth 路由的严重问题。今日社区讨论焦点集中在跨平台客户端需求（Linux/Windows，104 条评论）、Gateway 运行时稳定性、以及多个渠道插件的 API 兼容性回归问题。整体项目处于高迭代状态，建议用户谨慎升级并关注最新稳定版本。

---

## 2. 版本发布

### v2026.5.6（2026-05-06）

**类型：** 热修复版本（Hotfix）

| 组件 | 更新内容 |
|------|----------|
| **Doctor / OpenAI Codex** | 回滚 v2026.5.5 中 `doctor --fix` 的修复逻辑。该修复将有效的 `openai-codex/*` ChatGPT/Codex OAuth 路由错误重写为 `openai/*`，可能导致仅使用 OAuth 的 GPT-5.5 配置被破坏，或意外使用 OpenAI API-key 路由。已在 5.5 版本升级的用户如遇此问题，请升级至 5.6。 |

**迁移注意事项：**
- 若您当前使用 `openai-codex/*` 系列模型配合 ChatGPT/Codex OAuth 认证，请立即升级至 v2026.5.6
- v2026.5.5 升级后运行过 `doctor --fix` 的用户需检查 `openclaw.json` 中 `agents.defaults.modelOverrides` 配置是否被错误修改

**关联问题：** [#78407](https://github.com/openclaw/openclaw/issues/78407)

---

### v2026.5.5（2026-05-05）

**类型：** 常规版本

| 组件 | 更新内容 |
|------|----------|
| **Feishu** | 修复话题会话初始化时缺少原生 `topicStarterThreadId` 的问题，确保首条消息和后续消息位于同一话题会话中（修复 #78262） |
| **LINE** | 增强配置验证，拒绝无通配符 `allowFrom` 的 `dmPolicy: "open"` 配置 |

**关联 PR：** [#78262](https://github.com/openclaw/openclaw/issues/78262)

---

## 3. 项目进展

今日共 **合并/关闭 146 条 PRs**，以下为关键进展：

### 🟢 已合并的重要 PRs

| PR # | 作者 | 范围 | 说明 |
|------|------|------|------|
| [#78709](https://github.com/openclaw/openclaw/pull/78709) | @cake11298 | memory-core | **新增 log-memory 子系统**，支持混合（余弦 + BM25）检索、情景→语义梦境整合、自动梦境周期 |
| [#78263](https://github.com/openclaw/openclaw/pull/78263) | @arniesaha | subagents | 子代理保留策略：`archiveAfterMinutes` 现在同时适用于会话模式和运行模式 |
| [#78060](https://github.com/openclaw/openclaw/pull/78060) | @100yenadmin | subagents | 子代理隔离：将隐式 `thread-bound` 原生 `sessions_spawn` 上下文从 `fork` 改为 `isolated` |
| [#71170](https://github.com/openclaw/openclaw/pull/71170) | @statxc | gateway | 当 `session.dmScope: "main"` 时，`/new` 命令原地重置而非创建并行子会话 |
| [#78554](https://github.com/openclaw/openclaw/pull/78554) | @donbowman | googlechat | 修复 gaxios 重构导致的 Google Chat `unsupported_grant_type` 错误 |
| [#78583](https://github.com/openclaw/openclaw/pull/78583) | @Guardiola31337 | 跨渠道 | **新增 World ID AgentKit HITL 审批**，支持人类验证保护敏感工具调用 |
| [#78719](https://github.com/openclaw/openclaw/pull/78719) | @hclsys | gateway | **🔒 安全修复**：修复 `trusted-operator` 插件路由中的权限提升漏洞 |
| [#78700](https://github.com/openclaw/openclaw/pull/78700) | @steipete | agents | 清理子代理后备脚手架，用 `<prompt-data>` 替代已废弃的标记符 |

### 📝 新提交待审查的 PRs

| PR # | 说明 | 范围 |
|------|------|------|
| [#78721](https://github.com/openclaw/openclaw/pull/78721) | 添加 **TinyFish** 作为捆绑的网络搜索和获取提供者 | webSearch/webFetch |
| [#78678](https://github.com/openclaw/openclaw/pull/78678) | **oc:// 路径寻址方案**，支持 md/jsonc/jsonl/yaml 等格式的读写 | workspace |
| [#78718](https://github.com/openclaw/openclaw/pull/78718) | 修复心跳回退逻辑，Agent 级别心跳正确回退至 defaults | heartbeat |
| [#78716](https://github.com/openclaw/openclaw/pull/78716) | 修复缓存插件工具包装器 bug，按运行时工具名匹配候选 | plugins |
| [#78701](https://github.com/openclaw/openclaw/pull/78701) | Cron 列表/详情 `--json` 输出新增 `status` 字段 | cli |
| [#67509](https://github.com/openclaw/openclaw/pull/67509) | **新增 root 用户防护**：禁止以 root 身份运行 CLI | security |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| # | 标题 | 评论 | 👍 | 状态 | 核心诉求 |
|---|------|------|-----|------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **[需求] Linux/Windows Clawdbot Apps** | 104 | 74 | 🟢 OPEN | macOS/iOS/Android 已有客户端，缺少 Linux 和 Windows 版本 |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | **[需求] 预构建 Android APK 发布** | 24 | 1 | 🟢 OPEN | 希望在 GitHub Releases 提供 APK 下载 |
| [#73655](https://github.com/openclaw/openclaw/issues/73655) | Gateway 泄漏三元组：插件重启时 EADDRINUSE 重试循环 | 16 | 1 | 🟢 OPEN | 升级后 Gateway WS 处理程序饥饿 |
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | Gateway 运行时降级：定价获取超时、Telegram 轮询停滞 | 16 | 1 | 🟢 OPEN | Windows 11 + Node 24 跨版本慢性问题 |
| [#78407](https://github.com/openclaw/openclaw/issues/78407) | doctor --fix 错误重写 openai-codex 路由 | 15 | 3 | 🟡 已修复 | 已在 v2026.5.6 修复 |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | **[需求] Safe/Unsafe ClawdBot** | 12 | 0 | 🟢 OPEN | 建议用 Rust 重写或提供沙箱模式 |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | Feishu 读取图片工具结果在最终出站载荷中丢失媒体 | 11 | 0 | 🟢 OPEN | 图片工具可读取但回复时丢失附件 |
| [#78232](https://github.com/openclaw/openclaw/issues/78232) | openclaw-weixin 插件与 2026.5.4 不兼容 | 10 | 1 | 🟢 OPEN | channelRuntime API 变更导致入站消息处理失败 |

### 🔥 热点趋势分析

**1. 跨平台客户端呼声高涨**  
Issue #75 自 2026-01-01 创建以来持续活跃，104 条评论远超其他议题。用户对 Linux/Windows 桌面客户端的需求强烈，尤其希望与 macOS 版本功能对标。Issue #9443 则聚焦 Android APK 预构建分发，降低非开发用户的使用门槛。

**2. Gateway 稳定性问题集中爆发**  
#73655、#73323、#76562 等多个 Issue 均反映升级后 Gateway 出现性能退化：CPU 满载、控制平面 RPC 延迟飙升、WebSocket 连接超时。社区已识别出 `pi-trajectory-flush` 10s 超时、定价获取 60s 超时、Telegram 轮询停滞等症状链。

**3. 渠道插件 API 兼容性回归**  
WeChat (#78232, #78434)、Discord (#77930)、Telegram (#62985) 等多个渠道插件在 2026.5.x 版本升级后出现不兼容问题，根源多为 `channelRuntime` API 或内部 HTTP 客户端变更。

---

## 5. Bug 与稳定性

### 🔴 高优先级 Bug（影响核心功能或大量用户）

| Issue # | 描述 | 严重程度 | 状态 | Fix PR |
|---------|------|----------|------|--------|
| [#78407](https://github.com/openclaw/openclaw/issues/78407) | doctor --fix 错误重写 openai-codex/* 路由锁定 OAuth 用户 | 🔴 Critical | ✅ 已修复 (v2026.5.6) | - |
| [#78604](https://github.com/openclaw/openclaw/issues/78604) | **Compaction 每约 5 分钟触发一次**（应为 ~30 分钟）| 🔴 Critical | 🟢 OPEN | 无 |
| [#78719](https://github.com/openclaw/openclaw/pull/78719) | 🔒 **权限提升漏洞**：shared-secret 调用者可在 trusted-operator 路由获取 admin 权限 | 🔴 Critical | ✅ 已修复 | #78719 |
| [#73655](https://github.com/openclaw/openclaw/issues/73655) | 插件重启后 Gateway 三重泄漏（EADDRINUSE/信号处理累积/同步 I/O 饥饿）| 🔴 Critical | 🟢 OPEN | 无 |
| [#73323](https://github.com/openclaw/openclaw/issues/73323) | 定价获取 60s 超时、Telegram 轮询停滞、RPC 减速（跨 4.23/4.25/4.26）| 🔴 Critical | 🟢 OPEN | 无 |

### 🟡 中优先级 Bug（功能受损但不阻断）

| Issue # | 描述 | 状态 | Fix PR |
|---------|------|------|--------|
| [#78232](https://github.com/openclaw/openclaw/issues/78232) | openclaw-weixin 2.4.1 与 OpenClaw 2026.5.4 channelRuntime API 不兼容 | 🟢 OPEN | 无 |
| [#67793](https://github.com/openclaw/openclaw/issues/67793) | queue.mode "collect" 未批量处理消息，debounce 无效 | 🟢 OPEN | 无 |
| [#50880](https://github.com/openclaw/openclaw/issues/50880) | Steer 模式静默降级为 followup，消息从未在工具调用边界注入 | 🟢 OPEN | 无 |
| [#77260](https://github.com/openclaw/openclaw/issues/77260) | visibleReplies=message_tool 时群聊指令回复被静默丢弃 | 🟢 OPEN | 无 |
| [#76562](https://github.com/openclaw/openclaw/issues/76562) | 升级后 CPU 100%、控制平面 RPC 极高延迟 | 🟢 OPEN | 无 |

### 🟢 低优先级 / 回归问题

| Issue # | 描述 | 状态 |
|---------|------|------|
| [#78262](https://github.com/openclaw/openclaw/issues/78262) | Feishu 话题会话键不匹配 | ✅ 已关闭 |
| [#78434](https://github.com/openclaw/openclaw/issues/78434) | WeChat getUpdates fetch failed | ✅ 已关闭 |
| [#67158](https://github.com/openclaw/openclaw/issues/67158) | openai-codex gpt-5.1/5.2/5.3 在 ChatGPT/Codex OAuth 被拒绝 | ✅ 已关闭 |

### ⚠️ 稳定性风险评估

```
当前稳定性评级：🟡 中等风险

风险因素：
├── 🔴 Gateway 运行时降级（多个 Issue 反馈 CPU 满载/RPC 超时）
├── 🔴 Compaction 循环 Bug（5.5/5.6 均未修复）
├── 🔴 渠道插件 API 兼容性回归（WeChat/Discord/Telegram）
└── 🟡 插件热重载导致泄漏

已缓解：
├── ✅ doctor --fix OAuth 路由重写 Bug（v2026.5.6）
└── ✅ trusted-operator 权限提升漏洞（PR #78719）
```

---

## 6. 功能请求与路线图信号

### 🚀 高价值功能请求

| Issue # | 功能描述 | 相关 PR | 纳入可能性 |
|---------|----------|---------|------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **Linux/Windows 桌面客户端** | - | ⭐⭐⭐ 高（社区呼声极高）|
| [#8724](https://github.com/openclaw/openclaw/issues/8724) | **按模型配置生成超时** | - | ⭐⭐ 中 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | **exec-approvals 拒绝列表** | - | ⭐⭐ 中 |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | **上下文长度超限时触发模型回退** | - | ⭐⭐ 中 |
| [#8295](https://github.com/openclaw/openclaw/issues/8295) | **Telegram 群组 allowBots 支持**（对标 Discord/Slack）| - | ⭐⭐ 中 |
| [#7476](https://github.com/openclaw/openclaw/issues/7476) | **WhatsApp 贴纸发送支持** | - | ⭐⭐ 中 |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | **MCP 工具调用渠道中介审批** | - | ⭐⭐ 中 |
| [#67440](https://github.com/openclaw/openclaw/issues/67440) | **exec 审批 TOTP 二次验证** | - | ⭐ 低 |
| [#8719](https://github.com/openclaw/openclaw/issues/8719) | **OpenClaw 安全配置 v1.1** | - | ⭐ 讨论中 |

### 📌 路线图信号解析

**1. 新增 Providers 已进入主干**
- **TinyFish**（PR #78721）：网络搜索 + 获取提供者，与 Tavily/Brave/Exa 并列
- **World ID AgentKit HITL**（PR #78583）：人类验证保护敏感操作

**2. 核心架构演进**
- **oc:// 路径方案**（PR #78678）：统一文件寻址，支持 md/jsonc/jsonl/yaml
- **log-memory 子系统**（PR #78709）：梦境整合 + 混合检索
- **运行时解析迁移**（Issue #77700）：减少热点路径的运行时重复发现开销

**3. 安全增强**
- Root 用户防护（PR #67509）
- MCP 工具审批信封（#78308）
- TOTP exec 审批（#67440）

---

## 7. 用户反馈摘要

### 👍 用户满意的方面

1. **跨渠道功能覆盖广泛**：Discord、Telegram、WeChat、Feishu、WhatsApp 等多渠道支持完善
2. **ChatGPT/Codex OAuth 集成**：OpenAI Codex 集成受到开发者好评
3. **子代理机制**：多会话管理、上下文继承功能被积极采用
4. **可扩展插件系统**：开放 API 受到插件开发者认可

### 👎 用户痛点

1. **升级导致的不兼容噩梦**
   > "升级后所有 cron jobs 的 claude-haiku-4-5 模型被拒绝" — [#78000](https://github.com/openclaw/openclaw/issues/78000)
   > "Discord channel 在 2026.5.4 完全不加载" — [#77930](https://github.com/openclaw/openclaw/issues/77930)

2. **Gateway 性能退化**
   > "升级后 CPU 接近

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-05-07 | 数据来源：GitHub 公开数据**

---

## 1. 生态全景

2026年5月的个人 AI 助手开源生态呈现**双轨并行**格局：头部项目（OpenClaw、hermesagent）以超大规模迭代（每日 500+ PR 更新）领跑生态基础设施构建，而中腰部项目（PicoClaw、Zeroclaw、NanoBot）则在细分场景深耕——跨平台客户端、MCP 协议、渠道集成成为竞争焦点。值得关注的是，**跨渠道一致性**与**安全性**成为全生态共识性挑战：路径穿越漏洞（#1885）、OAuth 路由重写（#78407）、权限提升（#78719）等安全问题密集爆发，反映出快速迭代与安全加固之间的张力尚未化解。架构层面，**Reborn 架构迁移**（IronClaw）与 **v2 大版本升级**（NanoClaw）预示着生态正进入大规模重构周期，短期稳定性风险上升。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新增/活跃） | PRs（待合并/已合并） | 版本发布 | 今日健康度 | 核心矛盾 |
|------|---------------------|----------------------|----------|------------|----------|
| **OpenClaw** | 308 / 500 | 354 / 146 | ✅ v2026.5.6 热修复 | 🟡 中等风险 | Gateway 稳定性 + 渠道兼容回归 |
| **hermesagent** | 152 / 175 | 377 / 123 | ❌ 无 | 🟡 中等 | Matrix/Discord 集成失效 + Claude 订阅偶发 |
| **IronClaw** | 32 / 41 | 21 / 26 | ❌ 无 | 🟡 架构迁移期 | Reborn cutover 阻塞 + Telegram/Gmail 认证链 |
| **PicoClaw** | 14 / 21 | 41 / 20 | ✅ nightly build | 🟡 待观察 | API key 认证失败（#2769 Critical）+ 积压较重 |
| **librefang** | 11 / 30 | 8 / 34 | ✅ v2026.5.6-beta.9 | 🟢 优秀 | Provider key 持久化 + SSRF 验证 |
| **Zeroclaw** | 45 / 50 | 41 / 9 | ❌ v0.7.5 筹备中 | 🟡 稳定迭代 | WhatsApp 协议升级 + 多实例状态污染 |
| **QwenPaw** | 23 / 41 | 15 / 15 | ✅ v1.1.5.post2 | 🟡 功能完善期 | 长对话截断（#4059）+ 文件链接过期 |
| **NanoBot** | 3 / 17 | 22 / 17 | ❌ 无 | 🟢 良好 | DeepSeek 兼容性 + 运行时上下文泄漏 |
| **LobsterAI** | 1 / 1 | 0 / 30 | ❌ RC 阶段 | 🟢 高效 | **路径穿越漏洞（#1885 Critical）需优先** |
| **NanoClaw** | 3 / 4 | 22 / 3 | ❌ 无 | 🟡 积压压力 | CLAUDE.md 删除 + v2 迁移脚本 |
| **Moltis** | 2 / 6 | 4 / 7 | ❌ 无 | 🟢 良好 | Docker 沙箱路径问题 + 远程沙箱提案 |
| **openfang** | 2 / 3 | 2 / 1 | ❌ 无 | 🟡 正常 | Docker 环境变量丢失（#1169）+ LaTeX 渲染 |
| **EasyClaw** | 0 | 0 | ✅ v1.8.11 | 🟢 稳定 | 电商自动化基础设施，无社区反馈 |
| **TinyClaw** | 0 | 0 | ❌ 无 | ⚪ 静默 | 无活动 |
| **ZeptoClaw** | 0 | 0 | ❌ 无 | ⚪ 静默 | 无活动 |

**活跃度分层**：
- **超活跃层（500+ PR/日）**：OpenClaw、hermesagent
- **高活跃层（30-100 PR/日）**：IronClaw、PicoClaw、librefang、Zeroclaw、QwenPaw
- **中活跃层（10-30 PR/日）**：NanoBot、LobsterAI、NanoClaw、Moltis
- **低活跃层（<10 PR/日）**：openfang、EasyClaw
- **静默层**：TinyClaw、ZeptoClaw

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 是本报告覆盖范围内**规模最大的项目**，其单日 PR 处理量（500 条）与 hermesagent 并列第一，相当于 PicoClaw（61 条）的 8 倍、librefang（42 条）的 12 倍。这种吞吐量优势使其在**渠道协议覆盖**（Feishu、Discord、Telegram、WeChat、WhatsApp、LINE）上形成壁垒，截至 2026-05-07 已支持 10+ 渠道，是 Zeroclaw（4 个新渠道提案）和 PicoClaw（微信增强）的标杆。

### 3.2 技术路线差异

| 维度 | OpenClaw | hermesagent | IronClaw | NanoClaw |
|------|----------|-------------|----------|----------|
| **核心架构** | 模块化插件 + Gateway | CLI-first + Honcho profiles | Reborn（Rust 重写）| v2 微服务 |
| **LLM 路由** | 多 provider 透明路由 | OpenRouter/Claude 为主 | Responses API 集成 | OpenAI 兼容 |
| **安全模型** | trusted-operator 权限体系 | skill 隔离 + MCP 审批 | AgentLoopHost 门面 | /claw skill 弃用中 |
| **发布节奏** | 每 1-2 天热修复 | 高频次小修复 | milestone 驱动 | 大版本升级 |

OpenClaw 的技术路线强调**向后兼容与热修复响应速度**，v2026.5.6 在 24 小时内修复 doctor --fix 问题，体现了应急响应能力。但这也带来**渠道插件 API 兼容性回归**的副作用——v2026.5.x 版本导致 WeChat（#78232）、Discord（#77930）、Telegram（#62985）多渠道不兼容。

### 3.3 社区规模对比

| 指标 | OpenClaw | hermesagent | PicoClaw | librefang |
|------|----------|-------------|----------|----------|
| **Issue 吞吐量** | 500/日 | 175/日 | 21/日 | 30/日 |
| **PR 吞吐量** | 500/日 | 500/日 | 61/日 | 42/日 |
| **功能覆盖** | 全渠道 + 多 Agent | CLI + 多渠道 | 轻量 + MCP | 工作流 + UI |
| **生态延伸** | 7 个 Claw 分支项目 | 独立发展 | SiPeed 硬件绑定 | v2 重构中 |

OpenClaw 的**生态辐射效应**最为显著：催生了 PicoClaw、NanoClaw、Zeroclaw、IronClaw、EasyClaw、TinyClaw、ZeptoClaw 等 7 个分支项目，形成"Claw 系"生态集群。这种分支模式一方面加速了功能探索（PicoClaw 的 MCP 支持、Zeroclaw 的多 provider），另一方面也带来**核心框架升级的协调成本**——NanoClaw 的 v2 迁移脚本问题（#2294）与 OpenClaw API 变更强相关。

---

## 4. 共同关注的技术方向

以下需求在多个项目中**同步涌现**，反映生态级技术趋势：

### 4.1 MCP（Model Context Protocol）协议扩展

| 项目 | 诉求 | 进展 |
|------|------|------|
| **PicoClaw** | MCP client 支持 Streamable HTTP transport（#2782）| ❌ 无 PR |
| **OpenClaw** | MCP 工具调用渠道中介审批（#78308）| ⭐⭐ 中优先级 |
| **hermesagent** | MCP 工具审批信封（提案中）| 讨论中 |
| **NanoBot** | /stop 保留上下文（#2526）与 MCP 协同 | 长期积压 |

**分析**：MCP 正从协议规范向**生产级集成**演进，Streamable HTTP 传输兼容性成为下一代 MCP 生态的门槛。OpenClaw 的 HITL（Human-In-The-Loop）审批提案若落地，将为敏感工具调用提供安全护栏。

### 4.2 跨渠道一致性与协议兼容

| 项目 | 典型问题 | 严重程度 |
|------|----------|----------|
| **OpenClaw** | v2026.5.x 升级导致 WeChat/Discord/Telegram 不兼容 | 🔴 Critical |
| **Zeroclaw** | WhatsApp Web 协议升级后消息流中断（#6246）| 🔴 P1 |
| **IronClaw** | Telegram v2 端到端验证（#3316）| 🟠 P1 |
| **NanoClaw** | Matrix/Discord 迁移后 env key 未更新（#2294）| 🟡 中 |

**分析**：渠道插件 API 变更引发的回归问题呈**生态级蔓延**态势。OpenClaw 作为"Claw 系"事实标准，其内部 API 变更直接冲击下游分支的稳定性。建议社区建立 **API 变更影响评估流程**，对 channelRuntime 等核心接口的修改进行强制兼容性标注。

### 4.3 安全性：从漏洞修复到主动防御

| 项目 | 安全事件 | 类型 |
|------|----------|------|
| **LobsterAI** | 路径穿越漏洞（#1885 Critical）| 任意文件写 |
| **OpenClaw** | trusted-operator 权限提升（#78719）| 权限绕过 |
| **librefang** | Provider key 持久化丢失（#4701）+ SSRF（#4732）| 密钥管理 + 请求走私 |
| **NanoBot** | Bearer Token 认证（#3649）| 中危漏洞 |
| **hermesagent** | .env 凭证循环引用展开（#20981）| 凭证泄露 |

**分析**：安全问题的**类型分布**从传统代码漏洞（路径穿越）向配置管理（env 展开、key 持久化）迁移。OpenClaw 的权限提升漏洞（#78719）在当日发现、当日修复，体现了安全响应速度优势。但 LobsterAI 的路径穿越漏洞（#1885）已 Open 超过 24 小时且无 Fix PR，需关注。

### 4.4 深度推理模型的 first-class 支持

| 项目 | 诉求 | 现状 |
|------|------|------|
| **PicoClaw** | DeepSeek v4 thinking mode（#2706）| `reasoning_content` 未保存 |
| **NanoBot** | DeepSeek v4 flash 推理内容错误（#3665）| 🆕 新报告 |
| **NanoClaw** | DeepSeek reasoning_content 回放（配套修复）| ✅ 已合并 |
| **QwenPaw** | DeepSeek think 内容解析问题（#4051）| 🟡 中优先级 |

**分析**：DeepSeek 的 `reasoning_content` 字段处理成为**跨项目一致性问题**。各项目的修复进度不一（NanoClaw 已合并 vs PicoClaw/NanoBot 新报告），建议形成统一的 DeepSeek 兼容层规范。

### 4.5 本地化与离线能力

| 项目 | 功能 | 进展 |
|------|------|------|
| **NanoBot** | 本地分词器（#3662）| PR #3662 已开 |
| **PicoClaw** | 本地模型配置失败（#2368）| 🟡 未修复 |
| **Moltis** | 远程沙箱多后端（#942）| PR 等待审查 |
| **OpenClaw** | Linux/Windows 桌面客户端（#75）| ⭐⭐⭐ 高需求 |

**分析**：本地推理与离线场景是**差异化竞争点**。OpenClaw 的跨平台客户端需求（104 条评论）反映用户对本地部署的强烈诉求，而 NanoBot 的本地分词器则解决了网络延迟痛点。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心定位 | 护城河功能 |
|------|----------|------------|
| **OpenClaw** | 全功能企业级 AI 助手 | 多渠道集成、多 Agent 架构、热修复响应 |
| **hermesagent** | CLI-first 开发者工具 | Honcho profiles、skill 系统、i18n |
| **IronClaw** | Rust 重构的新架构 | Reborn 架构、PostgreSQL 持久化、ProductAdapter 合同 |
| **PicoClaw** | 轻量级 + MCP 生态 | SiPeed 硬件绑定、Web UI、MCP 支持 |
| **librefang** | 工作流自动化 | SQLite 工作流持久化、Memory Wiki、Dashboard |
| **Zeroclaw** | Provider 扩展 | 7 个新模型提供商、typed-family 架构 |
| **NanoBot** | 记忆与梦境系统 | log-memory 子系统、Dream 恢复 |
| **NanoClaw** | 非技术用户友好 | Slack 设置向导、v2 架构 |
| **QwenPaw** | 中文生态 + 国际化 | pt-BR 支持、DashScope 集成、Skill CLI |
| **Moltis** | 沙箱与安全执行 | Docker 沙箱、Vault 集成、Ed25519 身份 |
| **EasyClaw** | 电商自动化 | Affiliate inbound、ecommerce relay |
| **LobsterAI** | 网易有道企业集成 | POPO 多实例、日志轮转、workspace 解耦 |

### 5.2 目标用户分层

```
┌─────────────────────────────────────────────────────────────┐
│                    OpenClaw / hermesagent                   │
│                  企业用户 + 开发者（全功能）                  │
├─────────────────────────────────────────────────────────────┤
│         IronClaw / librefang / Zeroclaw / PicoClaw          │
│               开发者 + 技术用户（垂直场景）                   │
├─────────────────────────────────────────────────────────────┤
│    NanoBot / Moltis / NanoClaw / QwenPaw / LobsterAI         │
│              技术用户 + 特定平台用户                         │
├─────────────────────────────────────────────────────────────┤
│                      EasyClaw                                │
│                   电商/创作者（非技术）                       │
└─────────────────────────────────────────────────────────────┘
```

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-05-07

## 📋 今日速览

NanoBot 项目今日保持高度活跃，共处理 **17 条 Issues** 和 **39 条 PRs**。社区聚焦于运行时上下文泄漏（Runtime Context）问题的系统性修复，夜间分支（nightly）已连续合并 4 个相关 PR 彻底根治该回归问题。安全方面新增 Bearer Token 认证机制修复中等风险漏洞。WebSocket 和 WebUI 频道持续改进，今日报告了 1 个新 Bug（媒体文件分发问题）并同步提 PR 修复。整体项目健康度良好，PR 合并效率高（17 个已关闭），待处理 PR 积压 22 个属正常迭代节奏。

---

## 📦 版本发布

**无新版本发布**

---

## 🚀 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 描述 | 关联 Issue |
|---|---|---|---|
| [#3666](https://github.com/HKUDS/nanobot/pull/3666) | @T3chC0wb0y | 修复 CLI 运行时上下文泄漏，将运行时元数据从用户消息内容移至系统提示 | #2132 |
| [#3668](https://github.com/HKUDS/nanobot/pull/3668) | @T3chC0wb0y | 修复 nightly 分支运行时上下文回归 | - |
| [#3669](https://github.com/HKUDS/nanobot/pull/3669) | @T3chC0wb0y | nightly 运行时上下文短暂修复（中间版本） | - |
| [#3671](https://github.com/HKUDS/nanobot/pull/3671) | @T3chC0wb0y | nightly 运行时上下文最终修复，保持提示缓存复用 | - |
| [#3660](https://github.com/HKUDS/nanobot/pull/3660) | @Jefsky | Dream 恢复时光标回滚修复，添加回归测试 | [#3657](https://github.com/HKUDS/nanobot/issues/3657) |
| [#3659](https://github.com/HKUDS/nanobot/pull/3659) | @chengyongru | 微信频道修复静默消息丢失，异常时正确抛出而非静默吞噬 | - |
| [#3658](https://github.com/HKUDS/nanobot/pull/3658) | @chengyongru | WebUI LAN 引导需 token_issue_secret 认证 | - |
| [#3661](https://github.com/HKUDS/nanobot/pull/3661) | @Re-bin | WebUI 聊天体验优化：侧边栏、搜索、标题生成 | - |
| [#3646](https://github.com/HKUDS/nanobot/pull/3646) | @chengyongru | Whisper 调用添加指数退避重试 | - |

### 待合并的热门 PR

| PR | 作者 | 描述 | 预计影响 |
|---|---|---|---|
| [#3649](https://github.com/HKUDS/nanobot/pull/3649) | @orbisai0security | API Bearer Token 认证 | 安全加固 |
| [#3664](https://github.com/HKUDS/nanobot/pull/3664) | @vystartasv | Matrix/微信异常日志记录 | 调试体验 |
| [#3673](https://github.com/HKUDS/nanobot/pull/3673) | @ivelin | WebSocket 媒体字段传递修复 | Bug 修复 |
| [#3672](https://github.com/HKUDS/nanobot/pull/3672) | @yorkhellen | 启用完整 Ruff F 规则检查 | 代码质量 |
| [#3662](https://github.com/HKUDS/nanobot/pull/3662) | @Jefsky | 本地分词器避免网络加载 | 离线稳定性 |

---

## 🔥 社区热点

### 1. 运行时上下文泄漏修复系列（已解决）

**连续 4 个 PR 彻底解决 nightly 分支回归问题**

- [#3666](https://github.com/HKUDS/nanobot/issues/2132) - 主分支 CLI 修复
- [#3668](https://github.com/HKUDS/nanobot/pull/3668) / [#3669](https://github.com/HKUDS/nanobot/pull/3669) / [#3671](https://github.com/HKUDS/nanobot/pull/3671) - nightly 迭代修复

**社区诉求**：运行时 `[Runtime Context ...]` 脚手架意外进入聊天历史，导致历史记录污染和提示缓存失效。@T3chC0wb0y 提交了系统性修复方案。

### 2. DeepSeek 模型兼容性问题（活跃）

- [#3665](https://github.com/HKUDS/nanobot/issues/3665) - `deepseek-v4-flash` 推理内容错误（今日新开）
- [#3584](https://github.com/HKUDS/nanobot/issues/3584) - DeepSeek API `reasoning_content` 验证错误（已关闭）

**社区诉求**：用户使用 DeepSeek 模型时遇到 API 兼容性问题和区域限制错误。

### 3. 安全修复提案

[#3649](https://github.com/HKUDS/nanobot/pull/3649) - API Bearer Token 认证

**社区诉求**：修复中危安全漏洞，API 服务器需可选 Bearer Token 认证保护。

---

## 🐛 Bug 与稳定性

### 严重程度：高（已报告未修复）

| Issue | 描述 | 状态 |
|---|---|---|
| [#3665](https://github.com/HKUDS/nanobot/issues/3665) | DeepSeek v4 flash `reasoning_content` 错误 | 🆕 OPEN |
| [#3674](https://github.com/HKUDS/nanobot/issues/3674) | WebSocket 频道静默丢弃媒体文件 | 🆕 OPEN |

### 严重程度：中（已有 Fix PR）

| Issue | 关联 PR | 状态 |
|---|---|---|
| [#3674](https://github.com/HKUDS/nanobot/issues/3674) 媒体丢弃 | [#3673](https://github.com/HKUDS/nanobot/pull/3673) | PR 已开 |
| [#3637](https://github.com/HKUDS/nanobot/issues/3637) 转录配置不透明 | [#3663](https://github.com/HKUDS/nanobot/pull/3663) | PR 已开 |
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) GPT 重复 ID 错误 | - | 调查中 |

### 已修复 Bug

| Issue | 修复内容 |
|---|---|
| [#3618](https://github.com/HKUDS/nanobot/issues/3618) | 模型区域不可用（403）→ 用户通过备份恢复 |
| [#3584](https://github.com/HKUDS/nanobot/issues/3584) | DeepSeek API 验证错误 → PR 已合并 |
| [#3638](https://github.com/HKUDS/nanobot/issues/3638) | MCP CPU 泄漏 → 需关注后续修复 |
| [#3597](https://github.com/HKUDS/nanobot/issues/3597) | 工作区根目录访问混乱 → 已关闭 |
| [#3605](https://github.com/HKUDS/nanobot/issues/3605) | 安全守卫静默终止轮次 → 已关闭 |
| [#3625](https://github.com/HKUDS/nanobot/issues/3625) | WhatsApp Token 发送问题 → 已关闭 |
| [#3657](https://github.com/HKUDS/nanobot/issues/3657) | Dream 光标未回滚 → [#3660](https://github.com/HKUDS/nanobot/pull/3660) 已合并 |

---

## 💡 功能请求与路线图信号

### 高优先级功能请求

| Issue | 功能 | 动机 | 关联 PR |
|---|---|---|---|
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) | 禁用 Dream 功能 | 用户需要完全关闭自动记忆整合 | [#3591](https://github.com/HKUDS/nanobot/pull/3591) |
| [#3650](https://github.com/HKUDS/nanobot/issues/3650) | 配置机器人名称和图标 | 自定义品牌展示 | - |
| [#3647](https://github.com/HKUDS/nanobot/issues/3647) | 本地分词器 | 离线环境避免网络延迟 | [#3662](https://github.com/HKUDS/nanobot/pull/3662) |

### 长期功能演进方向

| Issue | 方向 | 说明 |
|---|---|---|
| [#3639](https://github.com/HKUDS/nanobot/issues/3639) | 跨 Agent 信任协议 | Ed25519 身份验证 + 引导流程（已关闭，概念验证） |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | /stop 保留上下文 | 取消任务时保留用户消息和工具调用 |
| [#3467](https://github.com/HKUDS/nanobot/pull/3467) | /clear 命令 | 重置会话历史而不中断后台任务 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | 心跳推理解耦 | 默认静默推理，仅显式消息推送给用户 |

---

## 👥 用户反馈摘要

### 用户痛点

1. **模型可用性区域限制**（#3618）
   > "还好我有备份的习惯，用了之前的一个备份，然后载掉重新安装，修复好了"
   - 用户依赖本地备份机制应对区域限制问题
   - 4月25日至5月4日期间大量定时任务失败

2. **转录配置不透明**（#3637）
   > "Groq voice transcription configuration is not transparent enough and can easily lead to invalid setups"
   - 配置复杂度高，容易设置无效组合

3. **安全守卫静默失败**（#3605）
   > "the error message **does not actually reach the user**"
   - 用户不知道任务被中止，无重试机会

### 积极反馈信号

- 用户通过备份恢复机制成功自救，说明本地数据保护设计有效
- Dream 功能受欢迎，#3591 正在增强其可控性
- WebUI 体验优化（#3661）持续推进，用户界面友好度提升

---

## 📊 待处理积压

### 长期未响应的 Issue

| Issue | 创建时间 | 描述 | 建议 |
|---|---|---|---|
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) | 2026-05-05 | GPT 重复 ID 错误（Codex/gpt-5.5） | 需维护者确认是否需要 OpenAI API 端点修复 |
| [#3665](https://github.com/HKUDS/nanobot/issues/3665) | 2026-05-06 | DeepSeek reasoning_content 错误 | 新开，需关注 |

### 长期未合并的 PR

| PR | 创建时间 | 描述 | 状态 |
|---|---|---|---|
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | 2026-03-26 | /stop 保留用户消息上下文 | OPEN，58天 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | 2026-03-02 | 心跳推理解耦通知 | OPEN，67天 |
| [#3467](https://github.com/HKUDS/nanobot/pull/3467) | 2026-04-27 | /clear 命令 | OPEN，10天 |

---

## 📈 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 17 Issues + 39 PRs，单日高吞吐 |
| Bug 修复效率 | ⭐⭐⭐⭐ | 高优先级 Bug 均有 PR 覆盖 |
| 安全响应 | ⭐⭐⭐⭐⭐ | Bearer Token 认证及时修复 |
| PR 积压 | ⭐⭐⭐ | 22 个待合并，略高但属正常迭代 |
| 社区参与 | ⭐⭐⭐⭐ | 多位贡献者提交高质量修复 |

**综合评价：项目处于健康迭代状态，核心问题响应及时，建议关注 DeepSeek 模型兼容性和长期积压 PR 的推进。**

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**日期：** 2026-05-07
**项目：** zeroclaw-labs/zeroclaw
**数据区间：** 2026-05-06 12:00 ~ 2026-05-07 12:00 (UTC)

---

## 1. 今日速览

Zeroclaw 项目在过去 24 小时内保持高度活跃状态：共产生 **50 条 Issue 更新**（45 条新开/活跃，5 条关闭）和 **50 条 PR 更新**（41 条待合并，9 条已合并/关闭），但无新版本发布。技术层面，今日的重点工作集中在 v0.7.5 版本收尾（#6492 版本号更新）与 v0.8.0 重大架构变更的准备（#6403 typed-family split）；同时，新增 7 个 AI 模型提供商（覆盖 GitHub Models、Lambda AI、Inception Labs 等）与 4 个通信渠道（Mastodon、Rocket.Chat、Zulip、Twilio SMS）的提案进入 in-progress 状态。**稳定性方面**仍面临压力：WhatsApp Web 渠道因 2026-04-24 协议升级导致消息流中断（#6246），另有 2 个 P0/P1 级 Bug（Matrix 渠道状态污染 #6487、WorkspaceManager 启动失败 #6419）需要紧急关注。整体来看，项目处于功能扩展与基础设施重构并行的高强度开发期。

---

## 2. 版本发布

**今日无新版本发布。** 最近一个版本为 v0.7.4（v0.7.5 正在筹备中）。

| 版本 | 状态 | 关键工作 |
|------|------|----------|
| v0.7.5 | 筹备中 | 版本号已更新至 #6492，涵盖 release pipeline 自动化（#5871 已关闭） |

**v0.7.5 迁移提示（预计）：** 根据 #5878（milestone tracking）和 #5871（structured release pipeline），v0.7.5 的核心主题是**发布自动化**。如已在使用旧版 release workflow，请关注 CHANGELOG-next.md 的变更说明。

---

## 3. 项目进展

以下 PR 已在今日合并或进入待合并状态，体现了项目的关键推进方向：

### 核心功能与修复

| PR | 标题 | 尺寸 | 风险 | 状态 | 说明 |
|----|------|------|------|------|------|
| [#6492](https://github.com/zeroclaw-labs/zeroclaw/pull/6492) | chore: bump version to v0.7.5 | XS | Low | OPEN | v0.7.4 → v0.7.5 版本号全量更新 |
| [#6493](https://github.com/zeroclaw-labs/zeroclaw/pull/6493) | fix(gateway,channels): boot without configured model | S | Low | OPEN | 修复未配置模型时 Gateway 无法启动的问题，保持 /onboard 可访问 |
| [#6230](https://github.com/zeroclaw-labs/zeroclaw/pull/6230) | fix(cron): allow whatsapp as cron delivery channel | M | Medium | OPEN | **功能补全**：定时任务现已支持通过 WhatsApp 投递通知 |
| [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) | feat(providers): separate llama.cpp into dedicated provider kind | XL | High | OPEN | **架构变更**：将 llama.cpp 从通用 OpenAI provider 拆分为独立 LlamaCppProvider，改走 /v1/responses 端点 |

### 文档与国际化

| PR | 标题 | 尺寸 | 风险 | 状态 | 说明 |
|----|------|------|------|------|------|
| [#6486](https://github.com/zeroclaw-labs/zeroclaw/pull/6486) | fix(docs): generate lang switcher before mdbook sync | XS | Low | OPEN | 修复 mdbook sync 前置依赖，确保语言切换器正确生成 |
| [#6490](https://github.com/zeroclaw-labs/zeroclaw/pull/6490) | fix(web,runtime): human-readable integration category labels | - | - | OPEN | 将集成页面死去的分类标题（如 `PRODUCTIVITY`）替换为人类可读标签 |

### 用户体验改进

| PR | 标题 | 尺寸 | 风险 | 状态 | 说明 |
|----|------|------|------|------|------|
| [#6369](https://github.com/zeroclaw-labs/zeroclaw/pull/6369) | fix(web): agent tool button height | XS | Low | **CLOSED** | Agent tools 按钮悬停时背景覆盖完整高度 |
| [#6473](https://github.com/zeroclaw-labs/zeroclaw/pull/6473) | docs: clarify review and PR workflow guidance | S | Low | OPEN | 规范 PR 模板与贡献指南，明确 AI 辅助协作政策 |

### 新增提供商与渠道（提案阶段）

| PR | 标题 | 说明 |
|----|------|------|
| [#6491](https://github.com/zeroclaw-labs/zeroclaw/pull/6491) | feat: integrate Atomic Chat as local OpenAI-compatible runtime provider | 集成 Jan runtime (http://127.0.0.1:6767) |
| [#6463](https://github.com/zeroclaw-labs/zeroclaw/pull/6463) | feat(providers): add Inception Labs (Mercury) as a model provider | diffusion-based LLM |
| [#6462](https://github.com/zeroclaw-labs/zeroclaw/pull/6462) | feat(providers): add Lambda AI Inference as a model provider | OpenAI-compatible API |
| [#6461](https://github.com/zeroclaw-labs/zeroclaw/pull/6461) | feat(providers): add Arcee AI as a model provider | 小型专用模型 |
| [#6460](https://github.com/zeroclaw-labs/zeroclaw/pull/6460) | feat(providers): add Featherless AI as a model provider | HuggingFace 模型托管 |
| [#6459](https://github.com/zeroclaw-labs/zeroclaw/pull/6459) | feat(providers): add Upstage Solar as a model provider | 韩国基础模型 |
| [#6445](https://github.com/zeroclaw-labs/zeroclaw/pull/6445) | feat(providers): add GitHub Models as a model provider | GitHub 托管推理 |

### v0.8.0 基础设施准备

| PR | 标题 | 说明 |
|----|------|------|
| [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) | feat(config,providers): typed-family split for model + TTS providers | **重大架构变更**：将 model/TTS provider 重构为 typed-family 模式，target `integration/v0.8.0` 分支 |

---

## 4. 社区热点

以下 Issues 和 PRs 在今日获得了最多的社区关注（评论数最多）：

### 热点 Issue #1：[#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) — 更好的 Zeroclaw Logo（10 条评论）

**状态：** OPEN | 优先级：P2 | 风险：Low

**核心诉求：** 社区成员（@mastwet）提交了一个 Logo 重新设计提案，希望为 Zeroclaw 打造更专业的视觉形象。截至今日已获得 **10 条评论**和 2 个 👍，是过去 30 天内评论最活跃的 Issue 之一。

**分析：** Logo 设计看似小事，但对于开源项目而言，品牌形象的迭代往往标志着项目成熟度的提升。该 Issue 持续活跃也反映出社区对 Zeroclaw 商业化/发行版拓展的准备姿态。

---

### 热点 Issue #2：[#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) — v0.7.5 Release Automation Milestone（8 条评论）

**状态：** OPEN | 优先级：P1 | 风险：High（CI 相关）

**核心诉求：** @WareWolf-MoonWall 主导的 v0.7.5 发布自动化追踪 Issue，定义了从手动版本 bumps 向全自动发布流水线的过渡路径。该 Issue 是 #5871（Structured Release Pipeline）的姊妹篇，已于今日（05-07）关闭了对应的 CI PR。

**分析：** Release 自动化是基础设施 RFC（#5579）的第三阶段，标志着 Zeroclaw 工程实践的成熟化。预计 v0.7.5 将成为首个"全自动化发布"的里程碑版本。

---

### 热点 Issue #3：[#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) — WhatsApp Web 协议升级导致消息流中断（4 条评论）

**状态：** OPEN | 优先级：P1 | 风险：Medium | 渠道：WhatsApp

**核心诉求：** @alexandme 报告 WhatsApp Web 渠道在 2026-04-24 服务器端协议升级后静默停止收发消息，severity 标记为 **S1（workflow blocked）**。

**分析：** 这是今日最关键的**用户阻断性问题**。WhatsApp Web 是 Zerocaw 的核心渠道之一，协议兼容性修复需要尽快跟进。

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### 🔴 P0 — 阻断性 / 多实例状态污染

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|-------|------|----------|------|--------|
| [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) | Multi-alias channel instances silently clobber each other; shared Matrix state_dir corrupts sessions | S1 / P0 | OPEN | 无 |

**影响：** Matrix 渠道（或任何同类型多实例场景）下，两个 agent 的状态相互污染，会话数据损坏，且多 Agent 调度使用单一的 ChannelRuntimeContext。

---

### 🟠 P1 — 工作流阻断

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|-------|------|----------|------|--------|
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | WhatsApp Web 协议升级后消息流中断 | S1 | OPEN | 无 |
| [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | Gateway can not use postgres（runtime panic: Cannot start a runtime from within a runtime） | S2 | OPEN | 无 |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell tool calls refused at `[autonomy] level = "full"` | S1 | OPEN | 无 |
| [#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) | WhatsApp reacts to own-account outbound messages (is_from_me leak) | S1 | CLOSED | 无（已关闭但未提供 fix PR） |
| [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) | Slack provider: process 1 user request, invoking the LLM twice | S1 | OPEN | 无 |
| [#6433](https://github.com/zeroclaw-labs/zeroclaw/issues/6433) | Heartbeat not working with Matrix channel | S1 | OPEN | 无 |

---

### 🟡 P2 — 降级行为 / 体验问题

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|-------|------|----------|------|--------|
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | WorkspaceManager fails to load profiles at Runtime startup（S0 - data loss risk） | S0 | OPEN | 无 |
| [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) | SQLite memory schema init fails during concurrent startup | S2 | OPEN | 无 |
| [#6422](https://github.com/zeroclaw-labs/zeroclaw/issues/6422) | cron_add: unhelpful error for plain string schedule parameter | - | OPEN | 无 |

---

### 📌 已关闭的 Bug

| Issue | 标题 | 状态 | 说明 |
|-------|------|------|------|
| [#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) | WhatsApp is_from_me leak | CLOSED | 已关闭但无对应 fix PR，需确认修复来源 |
| [#6368](https://github.com/zeroclaw-labs/zeroclaw/issues/6368) | Agent tools button hover behavior | CLOSED | 对应 fix 已合并为 #6369 |

---

## 6. 功能请求与路线图信号

### 高优先级功能提案

| Issue | 标题 | 优先级 | 风险 | 有无 PR | 预计版本 |
|-------|------|--------|------|---------|----------|
| [#6151](https://github.com/zeroclaw-labs/zeroclaw/issues/6151) | Track: web interaction platform — onboarding, stability, chat UX | P1 | High | 无 | 待定 |
| [#6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365) |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：** 2026-05-07  
**项目地址：** https://github.com/sipeed/picoclaw

---

## 1. 今日速览

2026-05-07，PicoClaw 项目保持高活跃度。过去 24 小时内共更新 21 条 Issues（14 条新开/活跃，7 条关闭）和 61 条 PRs（41 条待合并，20 条已合并/关闭），同时发布了 **nightly build v0.2.8-nightly.20260507.788cda5c**。社区在会话时间戳、LLM 认证失败、工具反馈节流配置、MCP 支持等方向有显著进展，但仍有多个高优先级的长期未解决问题需要关注。整体来看，项目代码合并节奏稳健，但 Issue 积压（尤其是带 stale 标签的）仍然较重。

---

## 2. 版本发布

### ✅ Nightly Build 发布

| 项目 | 详情 |
|------|------|
| **版本号** | `v0.2.8-nightly.20260507.788cda5c` |
| **类型** | Nightly Build |
| **发布时间** | 2026-05-07 |
| **稳定性** | ⚠️ 此为自动化构建，可能不稳定，请谨慎使用 |
| **更新内容** | 详情见 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

> **说明：** 此次为每日自动化构建，未标记具体功能变更，建议用户参照 changelog 确认是否有影响自身使用场景的更新。

---

## 3. 项目进展

过去 24 小时已合并/关闭的重要 PR 如下：

| PR 编号 | 标题 | 状态 | 贡献者 | 说明 |
|---------|------|------|--------|------|
| [#2629](https://github.com/sipeed/picoclaw/pull/2629) | fix(tools): improve web search provider fallback | **CLOSED** ✅ | @wj-xiao | 集中化管理 web search provider 的就绪状态和选择逻辑，统一 runtime、backend API、tools UI 的搜索行为，并支持原生搜索模型优先使用内置搜索路径 |
| [#2624](https://github.com/sipeed/picoclaw/pull/2624) | feat(providers): add openai-compatible embeddings support | **CLOSED** ✅ | @badgerbees | 为 provider 层新增 OpenAI 兼容的 embeddings 支持，支持 vLLM 风格端点，本地截断向量维度 |
| [#2610](https://github.com/sipeed/picoclaw/pull/2610) | ci(release): support releasing from existing tag | **CLOSED** ✅ | @imguoguo | GitHub Actions release workflow 新增 `create_tag` 输入项，支持从已有 tag 发布而非每次在 HEAD 创建新 tag |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) | feat: enhance Weixin channel support and configuration | **CLOSED** ✅ | @dsus4wang | 增强微信渠道多实例支持，改善配置管理和错误处理 |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) | fix(provider): handle split SSE stream chunk parsing | **CLOSED** ✅ | @imalasong | 修复 SSE 分块解析时 JSON 不完整时的粘包问题，增加回归测试 |
| [#2345](https://github.com/sipeed/picoclaw/pull/2345) | docs: add Engram MCP memory server integration guide | **CLOSED** ✅ | @manaporkun | 新增 Engram MCP memory server 集成文档，含 Homebrew/Go 安装指南和 config.json 示例 |
| [#2192](https://github.com/sipeed/picoclaw/pull/2192) | fix(provider): anthropic_messages sends system as content blocks with cache_control | **CLOSED** ✅ | @whtiehack | 修复 `anthropic_messages` provider 未正确处理 `SystemParts` 的问题，现使用 content blocks 数组并为静态块添加 `cache_control: ephemeral`，匹配 Anthropic 最佳实践 |

---

## 4. 社区热点

### 🔥 今日评论最多的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 状态 | 关键讨论点 |
|------------|------|--------|-----|------|------------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | [BUG] Didn't retry if meet LLM call failed | 12 | 0 | OPEN | LLM 调用失败时未重试，导致长任务挂起；涉及 OpenRouter 环境下 HTTP 500 的处理 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | [BUG] exec工具的guardCommand方法问题 | 7 | 2 | OPEN | `guardCommand` 正则判断过于简单，`curl -s "wttr.in/Beijing?T"` 被误判为非法相对路径并被安全守卫拦截 |
| [#293](https://github.com/sipeed/picoclaw/issues/293) | Feature: Autonomous Browser Operations | 7 | 8 | OPEN | 高优先级路线图需求：希望 PicoClaw 支持浏览器自动化操作，与网站直接交互；社区倾向通过 Playwright 或 Browserbase 等方案实现 |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | [Error] Multiple authentication credentials received | 6 | 0 | CLOSED | 配置多 provider 时出现重复认证凭证错误，已解决 |
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) | [BUG] The title of the last screen in the app remains in Chinese when English is selected | 6 | 0 | CLOSED | Android app 语言切换后最后一个界面标题仍显示中文，已解决 |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) | [BUG] Android app. Model is not configured for local models | 5 | 0 | OPEN | Android app 添加模型后即使填写所有字段仍显示 "not configured"，无法在聊天中选择 |

### 📌 PR 热点（待合并队列中的重要提案）

| PR 编号 | 标题 | 方向 | 说明 |
|---------|------|------|------|
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) | feat(session): add per-message created_at timestamps | 会话 API | 为每条消息添加独立的时间戳，解决前端无法准确显示消息时间的问题（对应 Issue #2787） |
| [#2789](https://github.com/sipeed/picoclaw/pull/2789) | fix(channels): make tool feedback edit throttle configurable | 渠道配置 | 将工具反馈节流行为从硬编码改为可配置参数 `animation_interval_secs` |
| [#2778](https://github.com/sipeed/picoclaw/pull/2778) | feat(agents): add working summary tool feedback | 代理反馈 | 新增 `working_summary` 风格工具反馈，显示简洁的实时进度信息 |
| [#2770](https://github.com/sipeed/picoclaw/pull/2770) | Add MCP section to config web UI | 配置 UI | Web 配置界面新增 MCP 配置区块，支持 UI 管理 MCP 启用/发现和服务器 |
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | feat: attribute history messages per sender for multi-user group chats | 多用户群聊 | 为 Discord、Telegram 群组等多用户渠道按发送者区分历史消息 |
| [#2691](https://github.com/sipeed/picoclaw/pull/2691) | feat: add get_current_time tool | 工具新增 | 新增 `get_current_time` 工具，支持多时区多格式时间获取 |

---

## 5. Bug 与稳定性

### 🔴 高优先级 Bug

| Issue 编号 | 标题 | 严重性 | 状态 | 是否有 Fix PR |
|------------|------|--------|------|---------------|
| [#2769](https://github.com/sipeed/picoclaw/issues/2769) | PicoClaw authentication fails with valid API keys (401 across providers) | **Critical** | OPEN | ❌ 无 |
| #2704 | [BUG] DingTalk SDK 的 panic 导致 gateway 异常停止 | **High** | OPEN | ❌ 无 |
| #2780 | [BUG] Reload config broke voice recognition | **High** | OPEN | ❌ 无 |

- **#2769 详情**：在 stable 和 nightly 构建中均出现，多个 provider（Groq、OpenRouter、Nvidia）使用有效 API key 返回 401 Invalid API Key，但直接调用 API 验证 key 有效。影响所有渠道的认证流程。
- **#2704 详情**：钉钉 SDK 内部并发错误（向已关闭的 channel 发送数据）导致 panic，涉及 `dingtalk-stream-sdk-go` 的竞态条件 bug，PicoClaw 版本 0.2.7，Go 1.22.2。
- **#2780 详情**：重新加载配置后语音识别（groq-asr）功能损坏，涉及 Telegram 渠道，Go 1.25.9。

### 🟡 中等优先级 Bug

| Issue 编号 | 标题 | 领域 | 状态 | 是否有 Fix PR |
|------------|------|------|------|---------------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | LLM call failed 时未重试 | provider | OPEN | ❌ 无 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具 guardCommand 正则误判 | tool | OPEN | ❌ 无 |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) | Android app 本地模型配置失败 | config | OPEN | ❌ 无 |
| [#2785](https://github.com/sipeed/picoclaw/issues/2785) | separate_messages 导致飞书通知只显示第一条工具调用 | channel | OPEN | ❌ 无 |

### 🟢 已关闭 Bug（今日）

| Issue 编号 | 标题 | 状态 | 说明 |
|------------|------|------|------|
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | Multiple authentication credentials received | CLOSED ✅ | 配置问题，已解决 |
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) | App 标题语言切换后仍显示中文 | CLOSED ✅ | Android UI bug，已修复 |
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) | 对话历史记录显示不完整 | CLOSED ✅ | 已通过 PR #2311 修复（preserved archived chat history） |
| [#2621](https://github.com/sipeed/picoclaw/issues/2621) | Session context lost after API timeout | CLOSED ✅ | API 超时后会话上下文丢失并创建新 default session，已解决 |

---

## 6. 功能请求与路线图信号

### 🗺️ 高优先级路线图需求

| Issue 编号 | 标题 | 优先级 | 状态 | 分析 |
|------------|------|--------|------|------|
| [#293](https://github.com/sipeed/picoclaw/issues/293) | Feature: Autonomous Browser Operations | **High + Roadmap** | OPEN | 社区最强烈的需求之一（8 👍），希望实现浏览器自动化。项目方在考虑 Playwright 或 Browserbase 方案，这是向 Web 交互扩展的关键功能。 |

### ✨ 新功能请求（用户痛点驱动）

| Issue 编号 | 标题 | 诉求 | 是否有对应 PR |
|------------|------|------|---------------|
| [#2706](https://github.com/sipeed/picoclaw/issues/2706) | Deepseek v4 thinking model 支持 | DeepSeek 的 thinking mode 需要回传 `reasoning_content`，当前 provider 未保存该字段导致 400 错误 | ❌ 无，但需求明确 |
| [#2671](https://github.com/sipeed/picoclaw/issues/2671) | 模型提供商支持 opencode | 希望支持 opencode 的 zen 和 go 订阅 | ❌ 无 |
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | 子 Agent 继承根 Agent 的 AGENT.md 导致角色混淆 | 多 Agent 架构中子 Agent 应加载各自角色的系统提示，而非统一继承根 Agent 的 prompt | ❌ 无 |
| [#2782](https://github.com/sipeed/picoclaw/issues/2782) | MCP client 应支持 Streamable HTTP transport | 当前仅支持旧 SSE 传输，无法连接新版 MCP 服务器（如 mcp-go） | ❌ 无 |
| [#2787](https://github.com/sipeed/picoclaw/issues/2787) | Session 消息缺少独立时间戳 | API 需返回每条消息的时间戳而非仅 session 级别的 updated 时间 | ✅ PR #2788 已实现 |

### 📊 已在推进的功能

| PR 编号 | 标题 | 说明 |
|---------|------|------|
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) | add per-message created_at timestamps | 将修复 #2787 |
| [#2770](https://github.com/sipeed/picoclaw/pull/2770) | Add MCP section to config web UI | 改善 MCP 配置的用户体验 |
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | attribute history messages per sender for multi-user group chats | 增强多用户群聊场景 |
| [#2691](https://github.com/sipeed/picoclaw/pull/2691) | add get_current_time tool | 实用工具扩展 |

---

## 7. 用户反馈摘要

### 😣 用户痛点

1. **认证与配置复杂性**
   - 用户在配置多 provider 和本地模型时遇到困难（#2368, #2548, #2769）
   - API key 有效但仍返回 401 的问题影响多个渠道的用户体验
   - 配置重载后功能损坏（#2780）

2. **会话与历史管理**
   - 群组会话中历史消息未按用户区分，导致上下文混乱（#2715 正在解决）
   - API 超时后会话上下文丢失并创建新 session（#2621 已关闭）
   - 聊天记录截断后存档历史被压缩，无法追溯完整对话（#2310 已通过 #2311 修复）

3. **工具安全性**
   - exec 工具的 guardCommand 正则过于简单，将合法的 Web 请求误判为路径遍历攻击（#1042）

4. **多语言体验**
   - Android app 切换英文后部分界面仍显示中文（#2367 已关闭）

### 💡 用户期望

- **DeepSeek v4 thinking mode** 支持（#2706）：用户需要回传推理过程以保持模型连贯性
- **浏览器自动化**（#293）：希望 AI 能直接与网站交互，扩展到 Web 场景
- **MCP Streamable HTTP** 支持（#2782）：兼容新版 MCP 生态
- **Token 消耗仪表盘**（#2217 已关闭）：用户希望可视化 API 调用成本

### 🙂 满意反馈

- 项目响应速度快，今日有多个 issue 一天内关闭
- Web UI 的 MCP 配置功能受到期待（#2770）
- OpenAI embeddings 支持让 vLLM 用户受益（#2624 已关闭）

---

## 8. 待处理积压

以下 Issue 长期未解决或 PR 合并进展缓慢，建议维护者关注：

### ⏳ 长期 OPEN

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermès Agent 项目日报 | 2026-05-07

---

## 1. 今日速览

Hérmes Agent 今日保持极高活跃度：共新增/活跃 Issues 152 条，关闭 23 条；PR 提交 500 条，其中 377 条待合并，123 条已完成。社区讨论热烈，问题覆盖 Matrix 平台消息接收、TUI 语音模式崩溃、Discord 附件传递、Windows 原生支持等多个维度。今日出现 **3 个 P1 级别 Bug**，均已有对应 Fix PR。整体项目处于快速迭代阶段，贡献者覆盖面广（Gateway、Telegram、Feishu、Discord、CLI 等组件均有推进）。

---

## 2. 版本发布

**今日无新版本发布**。最新 Release 仍为空，项目正处于高强度 Bug Fix 阶段，预计近期将合并大量修复后统一发版。

---

## 3. 项目进展

以下为今日合并/关闭的重要 Pull Requests，项目整体向前推进：

| PR | 组件 | 类型 | 说明 |
|---|---|---|---|
| [#20231](https://github.com/NousResearch/hermes-agent/pull/20231) | CLI/Gateway/i18n | **功能** | 新增 `display.language` 配置项，支持 CLI 审批提示和部分网关回复本地化为中文、日语、德语、西班牙语 |
| [#20976](https://github.com/NousResearch/hermes-agent/pull/20976) | Tools/MCP | Bug Fix | 修复 xAI/Grok 等严格 JSON Schema 2020-12 验证器拒绝 tuple-form `items: [a,b]` 的问题，改为生成 `prefixItems` |
| [#20977](https://github.com/NousResearch/hermes-agent/pull/20977) | Gateway | 功能 | 新增 `/healthz` 端点，返回结构化 JSON 健康状态快照，便于监控/探活 |
| [#20979](https://github.com/NousResearch/hermes-agent/pull/20979) | Gateway/Telegram | Bug Fix (P1) | 修复 `/model` 命令从异步处理器同步调用阻塞 HTTP 导致 Telegram 网关事件循环卡顿问题 |
| [#20981](https://github.com/NousResearch/hermes-agent/pull/20981) | Auth | Bug Fix (P1) | 修复 `.env` 凭证中 `${VAR}` 引用未展开导致 API Token 泄露为占位符的问题，新增循环引用解析 |
| [#20722](https://github.com/NousResearch/hermes-agent/pull/20722) | Agent/OpenAI | Bug Fix (P1) | 修复 OpenAI 兼容端点（OpenRouter、自建网关）使用新版模型时 `max_tokens` 参数报错问题，统一改用 `max_completion_tokens` |
| [#20967](https://github.com/NousResearch/hermes-agent/pull/20967) | Tools | Bug Fix | 修复 session_search 在 LLM 总结期间无法响应用户中断导致 CLI 冻结 15-30 秒的问题 |
| [#20968](https://github.com/NousResearch/hermes-agent/pull/20968) | Gateway | Bug Fix | 修复 `/model` picker 提供商异常被吞没的问题，增加日志记录并保持降级到文本列表的兜底行为 |
| [#20969](https://github.com/NousResearch/hermes-agent/pull/20969) | Agent | Bug Fix | 修复 OpenRouter + Claude 在 OpenAI 兼容路径上错误声明 Anthropic Prompt Caching 的问题 |
| [#20978](https://github.com/NousResearch/hermes-agent/pull/20978) | Auxiliary | Bug Fix | 修复 Copilot 短效 Token 过期后 `provider:auto` 自动路由无法刷新凭证的问题 |
| [#20980](https://github.com/NousResearch/hermes-agent/pull/20980) | Gateway | Bug Fix | 修复 Gateway 模式下 `fallback_model` / `fallback_providers` 中 `${VAR}` 环境变量未展开的问题 |
| [#13375](https://github.com/NousResearch/hermes-agent/pull/13375) | Honcho/Memory | Bug Fix | 修复 Honcho profile 恢复和旧会话 memory 文件迁移问题 |
| [#17895](https://github.com/NousResearch/hermes-agent/pull/17895) | Gateway/Feishu | Bug Fix | 修复 Feishu 线程消息路由中根消息 ID 丢失问题 |
| [#17124](https://github.com/NousResearch/hermes-agent/pull/17124) | Honcho | Bug Fix | 修复 `honcho_profile(peer="user")` 在存在持久 peer card 时仍返回空的问题 |

**进度评估**：今日已合并/关闭 123 条 PR，涵盖 P1 Bug 3 个、功能增强 2 个、跨平台集成修复 9 个。项目整体向候选发布状态推进，多个长期阻塞问题（Token 刷新、Env 展开、Schema 验证）得到系统性修复。

---

## 4. 社区热点

以下为今日讨论最活跃的 Issues 和 PRs，按评论数排列：

### Issues 热议榜

| # | 标题 | 评论 | 状态 | 核心诉求 |
|---|---|---|---|---|
| [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | Anthropic Claude subscription auth 返回 'out of extra usage' | **30** | CLOSED | Claude 订阅认证偶发性失效，用户反复重启/重新登录仍无法恢复 |
| [#12614](https://github.com/NousResearch/hermes-agent/issues/12614) | Matrix Bot 收不到消息（同步挂起） | **17** | OPEN | 最新版本合并 #10860 后，Matrix Bot 能加入房间但不接收/处理任何消息 |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | 长回复被截断（Output length limit） | **14** | CLOSED | CLI 聊天或 Telegram/Discord 网关消息中，长格式回复频繁触发截断错误 |
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Dashboard 主题难以阅读 | **5** | OPEN | 现有主题（Midnight/Ember/Mono/Cyberpunk/Rose）字体选择不当，小号衬线字体低对比度问题 |
| [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) | Native Windows 支持 | **5** | OPEN | 请求添加 Windows 原生支持（非 WSL/WSL2），涉及大规模新模块或重构 |
| [#13248](https://github.com/NousResearch/hermes-agent/issues/13248) | Slack 群组线程空回复重试循环（P1） | **3** | OPEN | Claude-opus-4-7 在 Slack 群组讨论中不回复时，网关将空内容误解为生成失败并持续重试 |

### PR 热议榜

| PR | 标题 | 核心内容 |
|---|---|---|
| [#12794](https://github.com/NousResearch/hermes-agent/pull/12794) | delegate_task 支持子代理独立模型/提供商覆盖 + 模型可观测性插件 | 为 `delegate_task` 添加 `model`/`provider` 参数，允许调用方为每个子代理指定模型；新增模型可观测性插件 |
| [#18864](https://github.com/NousResearch/hermes-agent/pull/18864) | Discord 语音频道和 TTS 格式修复（5项） | 修复静音语音播放、不可见语音消息失败、缺失原生 Discord 语音消息等问题 |

**热点分析**：社区最关注三大方向：① **认证与 API 配额**（Claude 订阅问题评论数遥遥领先，说明影响面广）；② **跨平台可靠性**（Matrix/Discord/Slack 集成均有用户投诉）；③ **用户体验细节**（TUI 刷新、主题可读性、streaming 重试消息堆积）。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### P1 — 阻塞性问题（已有 Fix PR）

| Issue | 标题 | 说明 | Fix PR |
|---|---|---|---|
| [#13248](https://github.com/NousResearch/hermes-agent/issues/13248) | Slack 群组线程空回复重试循环 | Claude-opus-4-7 在非 @mention 讨论中不回复 → 网关误解为空生成失败 → 无限重试 | — |
| [#20293](https://github.com/NousResearch/hermes-agent/issues/20293) | Context Compaction + Session Split 导致压缩摘要被错误注入新会话 | 对话触发上下文压缩和会话拆分后，压缩摘要被当作有效历史注入新会话，而非仅作背景参考 | — |
| [#20465](https://github.com/NousResearch/hermes-agent/issues/20465) | 交互式 CLI 不回退 Codex 429 usage_limit_reached | 交互式 CLI 在 Codex 返回 429 时不触发自动回退，但相同配置的 cron 作业正常回退 | — |
| [#20273](https://github.com/NousResearch/hermes-agent/issues/20273) | skill_manage 可覆盖 bundled/hub skills | 背景审查代理和策展人可通过 `skill_manage` 自由覆盖打包/Hub 安装的 skills，绕过 `_pinned_guard` | — |

### P2 — 显著问题

| Issue | 标题 | 说明 | Fix PR |
|---|---|---|---|
| [#12614](https://github.com/NousResearch/hermes-agent/issues/12614) | Matrix Bot 无法接收消息 | 最新版本合并后 Matrix Bot 能加入房间但不处理任何消息，debug 模式无入站事件日志 | — |
| [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) | MiniMax 提供商频繁连接断开 | 从 OpenClaw 切换到 Hermes 后频繁出现 RemoteProtocolError / Connection drops | — |
| [#11860](https://github.com/NousResearch/hermes-agent/issues/11860) | Discord 附件不可靠传递到 Agent | 带 HTML 附件的 Discord 消息中，Agent 能回复文本但无法访问附件 | — |
| [#20966](https://github.com/NousResearch/hermes-agent/issues/20966) | /model picker 静默降级到文本列表 | Telegram/Discord 执行 `/model` 时异常被吞没，直接降级为文本列表而非显示交互式 picker | [#20968](https://github.com/NousResearch/hermes-agent/pull/20968) |

### P3 — 体验问题

| Issue | 标题 | 说明 |
|---|---|---|
| [#18390](https://github.com/NousResearch/hermes-agent/issues/18390) | Termux TUI 响应文本消失 | 关闭键盘/TUI 刷新/切换后台时，最新 AI 响应文本消失 |
| [#5151](https://github.com/NousResearch/hermes-agent/issues/5151) | streaming 重试状态消息累积 | 重试时发出的 ⚠️ 状态消息在重试成功后仍留在聊天线程中 |
| [#17009](https://github.com/NousResearch/hermes-agent/issues/17009) | Termux 环境文件系统交互失败 | Termux 下 `hermes doctor` 运行但无法与文件系统交互，命令执行无结果 |

**稳定性评估**：今日出现 4 个 P1 Bug，3 个已通过 PR 修复。仍需关注 Slack 空回复重试循环和 Context Compaction 会话注入问题——两者均可能造成生产环境用户体验严重退化或数据混淆。

---

## 6. 功能请求与路线图信号

以下功能请求具备较高社区认同度，可能进入下一版本：

| Issue | 功能 | 优先级 | 信号 |
|---|---|---|---|
| [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) | Native Windows 支持 | P3 | 长期 open，5 个评论，5 个 👍；涉及大规模重构，维护者尚未明确立场 |
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Dashboard 主题可读性改进 | P3 | 10 个 👍，明确指出字体/对比度问题，有改进空间 |
| [#5197](https://github.com/NousResearch/hermes-agent/issues/5197) | 自动运行 `npm audit` | P3 | 安全方向提议，建议在 PR 审查前和每日定时运行 |
| [#19324](https://github.com/NousResearch/hermes-agent/issues/19324) | self-improvement 写操作审批策略 | P3 | Agent 自行 git push 引发安全顾虑，请求添加写操作审批机制 |
| [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) | Web Dashboard 多 Profile 切换支持 | P3 | 多 Profile 用户强烈需求，已有分析/根因/推荐设计文档 |
| [#7640](https://github.com/NousResearch/hermes-agent/issues/7640) | CLI 支持删除粘贴的图片 | P3 | 交互习惯对齐需求，当前图片粘贴后无法撤回，用户体验摩擦 |
| [#4319](https://github.com/NousResearch/hermes-agent/issues/4319) | KV Cache 压缩时延迟不必要的系统提示重建 | 性能 | MoE 本地模型用户报告上下文压缩时性能严重下降，KV Cache 被频繁失效 |

**路线图判断**：`delegate_task` 子代理独立模型覆盖（#12794）已实现 PR，Windows 原生支持和中文化推进是长期方向，多 Profile 切换有清晰设计文档，优先级应为中短期。

---

## 7. 用户反馈摘要

从 Issues 评论和讨论中提炼的关键用户痛点：

### 满意度信号
- **安装体验**：curl 一键安装脚本广受好评（#3944）
- **多平台覆盖**：用户对 Telegram/Discord/Matrix/Feishu/Slack 均有使用场景
- **自改进能力**：部分用户认可 Agent 自我学习功能，但需要更细粒度控制

### 核心痛点

| 痛点 | 影响场景 | 严重度 |
|---|---|---|
| Claude 订阅偶发失效（#6475，30 条评论） | 所有使用 Anthropic API 的用户 | 🔴 高 |
| Matrix 新版本消息接收完全失效（#12614） | Matrix 平台用户 | 🔴 高 |
| 长回复截断（#7237） | CLI/Telegram/Discord 重度用户 | 🟡 中 |
| Termux 环境适配不完整（#18390, #17009） | Termux/Android 用户 | 🟡 中 |
| Discord 附件不可用（#11860） | Discord 文件分析场景 | 🟡 中 |
| streaming 重试消息污染对话（#5151） | 所有 streaming 用户 | 🟢 低 |

**用户画像**：当前用户以开发者为主，使用场景覆盖 CLI 本地开发、跨平台 IM 集成（Discord/Slack/Telegram/Matrix/Feishu）、语音 TUI、团队协作（Kanban/Honcho）。Windows 用户群体有需求但尚未得到官方支持。

---

## 8. 待处理积压

以下 Issue 已长期 open 或最近更新但尚未分配 Fix PR，需要维护者关注：

### 长期未解决（>30 天）

| Issue | 年龄 | 标题 | 优先级 | 说明 |
|---|---|---|---|---|
| [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) | ~45 天 | Native Windows 支持 | P3 | 长期悬而未决，5 个 👍，需维护者明确立场 |
| [#4319](https://github.com

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-05-07

---

## 1. 今日速览

NanoClaw 项目今日保持高度活跃，共产生 **25 条 PR 更新**（其中 3 条已合并/关闭，22 条待合并）和 **4 条 Issues 更新**（3 条新开/活跃，1 条已关闭）。项目整体处于快速迭代阶段，未发布新版本。

今日主要进展集中在三个方面：① SQLite3 CLI 依赖被替换为内嵌的 better-sqlite3，修复了 migrate-v2.sh 的兼容性问题；② WhatsApp 自聊消息过滤逻辑得到修正；③ Slack 设置向导体验全面优化，涵盖 8 个相关 PR。整体开发活跃度高，但积压待审 PR 数量较大（22 条），建议关注审查资源分配。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下 PR 已在今日合并/关闭，项目功能得到实质性推进：

| PR 编号 | 标题 | 作者 | 状态 | 说明 |
|---------|------|------|------|------|
| **#2309** | fix(skills): replace sqlite3 CLI with in-tree better-sqlite3 wrapper | @glifocat | ✅ 已关闭 | 将 migrate-v2.sh 中的外部 sqlite3 CLI 依赖替换为内置的 better-sqlite3，解决了「缺少 sqlite3 CLI 工具却误报 registered_groups 表缺失」的误导性错误 |
| **#2302** | fix(whatsapp): allow self-chat messages through fromMe filter | @Koshkoshinsk | ✅ 已关闭 | 修复 WhatsApp 自聊消息（给自己发消息）被错误过滤的问题。原逻辑 `if (fromMe) continue` 会丢弃所有来自关联设备的消息，现改为通过 `sentMessageCache` 区分机器人回显与用户消息 |
| **#2308** | fix(prompts): tighten approval-card flow + drop ghost tool ref | @SamBagetAI | ✅ 已关闭 | 审计修复：修正了 `baget_park_task` 描述中引用不存在的 `list_recent_batches` 工具的问题；优化了待审批文本的展示，减少冗余 |

🔗 相关链接：[#2309](https://github.com/qwibitai/nanoclaw/pull/2309) | [#2302](https://github.com/qwibitai/nanoclaw/pull/2302) | [#2308](https://github.com/qwibitai/nanoclaw/pull/2308)

---

## 4. 社区热点

今日讨论焦点集中在 **Slack 设置向导优化** 和 **v2 迁移脚本改进** 两个方向：

### Slack 设置体验全面翻新

**@alipgoldberg** 贡献了 8 个 PR，专注于降低非技术用户的上手门槛：

| PR | 改进内容 |
|----|---------|
| [#2305](https://github.com/qwibitai/nanoclaw/pull/2305) | Slack 安装后引导增加确认步骤，避免用户中途放弃 |
| [#2304](https://github.com/qwibitai/nanoclaw/pull/2304) | 安装向导第一步改用通俗语言，移除技术术语堆砌 |
| [#2303](https://github.com/qwibitai/nanoclaw/pull/2303) | 增加 Slack 成员 ID 查询的回退逻辑（workspace 中找不到时） |
| [#2300](https://github.com/qwibitai/nanoclaw/pull/2300) | 修正成员 ID 获取指引中按钮位置和图标的错误描述 |
| [#2299](https://github.com/qwibitai/nanoclaw/pull/2299) | 调整安装卡片顺序，与实际 token 粘贴时机匹配 |
| [#2297](https://github.com/qwibitai/nanoclaw/pull/2297) | 重构「创建 Slack App」卡片，优化链接可见性和 OAuth scope 展示 |
| [#2296](https://github.com/qwibitai/nanoclaw/pull/2296) | 将 Slack 设置流程的两步卡片标注为 Part 1 / Part 2 |
| [#2295](https://github.com/qwibitai/nanoclaw/pull/2295) | Slack 选项提示增加「需要公共 URL」的明确说明 |

**核心诉求**：项目定位为「技术+非技术用户均可使用」，但当前 Slack 引导文档泄露了大量内部术语（webhook、ngrok、Cloudflare Tunnel），导致非技术用户在完成 token 配置后仍遭遇「还需要公共 URL」的门槛而中断。

### GitHub 集成功能扩展

| PR | 说明 |
|----|------|
| [#2301](https://github.com/qwibitai/nanoclaw/pull/2301) | 新增 Mode B（轮询模式）：无需暴露入站端口，通过 REST API 每 30 秒轮询 GitHub；Mode A（Webhook）增加安全警告 |
| [#2004](https://github.com/qwibitai/nanoclaw/pull/2004) | 安全修复：channel installer 脚本的 git remote 必须是可信来源，防止供应链攻击 |

---

## 5. Bug 与稳定性

按严重程度排列今日报告的问题：

### 🔴 高优先级

**Issue #2312** — `groups/global/CLAUDE.md` 每次启动都被无条件删除
- **作者**：@mbernabeu
- **严重程度**：高（影响所有实例）
- **现象**：`migrateGroupsToClaudeLocal()` 函数在每次 NanoClaw 启动时都会删除 `groups/global/CLAUDE.md`，导致任何拉取代码并重启服务的实例都出现永久的 dirty working tree
- **当前状态**：OPEN，1 条评论
- **建议**：维护者应优先确认该文件是否应保留，或将删除逻辑改为「仅首次迁移时执行」

🔗 [查看 #2312](https://github.com/qwibitai/nanoclaw/issues/2312)

**Issue #2311** — `/claw` skill 与 v2 架构不兼容，建议弃用
- **作者**：@JayFarei
- **严重程度**：高（架构级问题）
- **现象**：`.claude/skills/claw/scripts/claw` 基于 v1 设计，其 DB schema、transport、container model、secret handling 每一层都与 v2 不兼容，无法通过补丁修复
- **当前状态**：OPEN，0 条评论
- **建议**：维护者需评估该 skill 的使用者范围，制定明确的弃用时间表和迁移路径

🔗 [查看 #2311](https://github.com/qwibitai/nanoclaw/issues/2311)

### 🟡 中优先级

**Issue #2294** — migrate-v2.sh 未暴露 Matrix 和 Discord 的重命名/新增 channel env keys
- **作者**：@glifocat
- **严重程度**：中
- **现象**：运行迁移脚本后，Matrix 和 Discord channel adapter 启动失败，但 `.env` 中凭证仍然存在。Matrix 会静默警告「credentials missing」后进入 dead state；Discord 则完全无法启动
- **根因**：v2 的环境变量 key 与 v1 不同（重命名或新增），迁移脚本未提示用户更新
- **当前状态**：OPEN，0 条评论

🔗 [查看 #2294](https://github.com/qwibitai/nanoclaw/issues/2294)

### 🟢 已修复

**Issue #2191** — migrate-v2.sh 在 sqlite3 CLI 未安装时给出误导性错误
- **作者**：@Omee11
- **状态**：✅ **CLOSED**（2026-05-06）
- **修复方式**：由 [#2309](https://github.com/qwibitai/nanoclaw/pull/2309) 用 better-sqlite3 内嵌 wrapper 替换外部 sqlite3 CLI 依赖，错误不再触发

🔗 [查看 #2191](https://github.com/qwibitai/nanoclaw/issues/2191)

---

## 6. 功能请求与路线图信号

以下 PR 可能在下一版本被纳入：

### 热门功能请求

| PR | 类型 | 作者 | 说明 | 纳入可能性 |
|----|------|------|------|-----------|
| [#2306](https://github.com/qwibitai/nanoclaw/pull/2306) | Feature Skill | @CrAzyScreamx | yt-dlp MCP server（内嵌）+ `/add-ytdlp` 安装命令，支持音视频下载 | ⭐⭐⭐ 高 |
| [#2211](https://github.com/qwibitai/nanoclaw/pull/2211) | Feature Skill | @robbyczgw-cla | tool-visibility skill：实时预览工具调用，提升调试体验 | ⭐⭐⭐ 高 |
| [#2298](https://github.com/qwibitai/nanoclaw/pull/2298) | Feature | @SamBagetAI | MCP Tier 1 工具集：6 个 baget 任务工具（运行/重试/审批/拒绝任务等） | ⭐⭐ 中 |
| [#2307](https://github.com/qwibitai/nanoclaw/pull/2307) | Chore | @romanbsd | 切换到 trixie 基础镜像、升级依赖、缩小镜像体积 | ⭐⭐ 中 |

### 长期功能愿望单

| PR | 类型 | 作者 | 说明 | 开启时间 |
|----|------|------|------|---------|
| [#2009](https://github.com/qwibitai/nanoclaw/pull/2009) | Feature Skill | @ira-at-work | 本地免费语音转录：支持 openai-whisper 和 whisper.cpp，包含 RHEL/Rocky 9 ffmpeg 兼容方案 | 2026-04-25（12天前） |
| [#2301](https://github.com/qwibitai/nanoclaw/pull/2301) | Feature | @ira-at-work | GitHub 轮询模式（Mode B），无需公共 URL，适合 NAT/防火墙后的用户 | 2026-05-06 |

---

## 7. 用户反馈摘要

从今日 Issues 和 PR 评论中提炼的真实用户痛点：

### 痛点 1：非技术用户被 Slack 设置流程劝退
> 「The Slack channel option is meant to work for both technical and non-technical users, but the post-install card is a wall that non-technical users don't see coming. They've spent 5+ minutes pasting tokens...」

**场景**：非技术用户选择 Slack 渠道 → 粘贴 bot token 和 signing secret → 完成前两步 → 遇到「需要暴露公共 URL」门槛 → 中断放弃

**用户诉求**：设置向导应从「技术术语」转向「通俗引导」，使用渐进式披露策略，让非技术用户有明确的预期。

---

### 痛点 2：迁移脚本给出误导性错误
> 「`migrate-v2.sh` aborts... 'v1 database missing registered_groups table'... even when the v1 database is healthy」

**场景**：用户运行 `migrate-v2.sh` 进行 v1→v2 升级，脚本突然中止并报错「缺少 registered_groups 表」，但用户确认数据库正常、该表存在、数据完整。

**根因**：脚本使用外部 `sqlite3` CLI 工具检测数据库，但该工具未安装，导致真正的「sqlite3 CLI 缺失」错误被误报为「表缺失」。

**用户诉求**：错误信息应准确指向真实问题，避免浪费用户排查时间。

---

### 痛点 3：自聊消息被错误过滤
> 「The blanket `if (fromMe) continue` echo filter drops **all** messages from the linked device, including user-typed messages in WhatsApp self-chat」

**场景**：用户在 WhatsApp 中给自己的号码发消息（即 self-chat），期望收到回复，但消息被 bot 的回显过滤器丢弃。

**用户诉求**：self-chat 应视为正常用户消息，不应被 echo filter 过滤。

---

## 8. 待处理积压

以下 Issue/PR 已开启较长时间但维护者响应较少，建议关注：

### 长期未响应 PR

| PR | 开启时间 | 距今 | 类型 | 说明 |
|----|---------|------|------|------|
| [#2009](https://github.com/qwibitai/nanoclaw/pull/2009) | 2026-04-25 | **12 天** | Feature Skill | 本地语音转录（whisper），含双 backend 支持 | 
| [#2004](https://github.com/qwibitai/nanoclaw/pull/2004) | 2026-04-25 | **12 天** | Security Fix | channel installer 的 git remote 信任边界加固 |
| [#2187](https://github.com/qwibitai/nanoclaw/pull/2187) | 2026-05-02 | **5 天** | Bug Fix | CLI 平台 ID 不应被 namespaced，关闭 #2186 |

### 重要未关闭 Issue

| Issue | 开启时间 | 距今 | 优先级 | 说明 |
|-------|---------|------|--------|------|
| [#2312](https://github.com/qwibitai/nanoclaw/issues/2312) | 2026-05-06 | **1 天** | 🔴 高 | CLAUDE.md 每次启动被删除，dirty working tree |
| [#2311](https://github.com/qwibitai/nanoclaw/issues/2311) | 2026-05-06 | **1 天** | 🔴 高 | `/claw` skill 与 v2 不兼容，架构级问题 |
| [#2294](https://github.com/qwibitai/nanoclaw/issues/2294) | 2026-05-06 | **1 天** | 🟡 中 | Matrix/Discord 迁移后 env key 未更新 |

---

## 项目健康度评估

| 维度 | 状态 | 说明 |
|------|------|------|
| **开发活跃度** | 🟢 非常活跃 | 25 条 PR 更新，8+ 个贡献者今日有动作 |
| **Bug 修复速度** | 🟡 良好 | 关键问题（如 sqlite3 误导）已合并 fix，但高优先级 Issue #2312/#2311 尚未响应 |
| **社区参与度** | 🟢 高 | Slack 设置体验有 8 个 PR 集中优化，用户反馈驱动的迭代明显 |
| **积压审查压力** | 🔴 较高 | 22 个待合并 PR，部分已开启 12 天，建议优先处理长期未响应者 |
| **版本稳定性** | 🟡 待观察 | v2 迁移脚本仍有 env key 问题待解（#2294），建议发布补丁或明确迁移注意事项 |

---

*报告生成时间：2026-05-07 | 数据来源：GitHub NanoClaw 仓库 | 项目：qwibitai/nanoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-05-07

---

## 1. 今日速览

IronClaw 项目在过去 24 小时内保持**极高活跃度**。共产生 **88 次更新**（41 条 Issues + 47 条 PRs），其中新开/活跃 Issues 32 条，待合并 PR 21 条、已合并/关闭 26 条。今日最核心的叙事仍是 **"Reborn" 架构迁移** 大规模推进，多个关键子系统的合同定义（如 TurnCoordinator、SessionThreadService、ProductAdapter 等）正在快速闭环。与此同步，社区用户报告了 **3 条 P1 级 Bug**（Telegram 集成认证与对话续接问题），需优先关注。版本发布方面暂无新 Release。

---

## 2. 版本发布

> 过去 24 小时无新版本发布。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，代表项目在各方向上的实质性推进：

| PR | 方向 | 规模 | 摘要 | 链接 |
|---|---|---|---|---|
| **#3157** | Engine / 脚本安全 | XL | 修复 CodeAct 脚本触发需审批工具时将 `GatePaused` 错误暴露给脚本而非暂停用户的问题；将 async tool-resolve 路径正确转换错误码。 | [#3157](https://github.com/nearai/ironclaw/pull/3157) |
| **#3312** | CI / E2E | M | 将定时 E2E 告警从可复用 workflow 中剥离为独立 `Nightly E2E` wrapper，解决主分支 `Run Tests` 在 workflow 启动阶段失败的问题。 | [#3312](https://github.com/nearai/ironclaw/pull/3312) |
| **#3311** | Reborn Turns | M | 在 `DefaultTurnCoordinator` 上新增 `TurnRunWakeNotifier` 接缝，在持久化提交/恢复成功后发出排队运行唤醒提示，标记为"尽力而为"。 | [#3311](https://github.com/nearai/ironclaw/pull/3311) |
| **#3307** | DB / PostgreSQL | XS | 将两个共享 `refinery_schema_history` 表的迁移修复集成测试序列化，避免并发 `CREATE TABLE IF NOT EXISTS` 导致 CI 竞态失败。 | [#3307](https://github.com/nearai/ironclaw/pull/3307) |
| **#3305** | Reborn Turns | L | 新增 `apply_loop_exit` 验证驱动 `LoopExit` 声明并调用可信转换端口方法；新增 `record_recovery_required` 处理不安全退出；扩展至内存/libSQL/PostgreSQL 后端。 | [#3305](https://github.com/nearai/ironclaw/pull/3305) |
| **#3197** | Bridge / 工具参数 | M | 修复 `mission_create` / `mission_update` 拒绝 `cooldown_secs="120"` 字符串参数的问题（Issue #3132）；统一 host tools 参数类型强制转换管道。 | [#3197](https://github.com/nearai/ironclaw/pull/3197) |
| **#3301** | CI / Docker | M | 恢复完整的 Docker Image workflow 行为（从 #3104 合并队列切换前恢复）：支持 `:staging` / `:sha-*` 标签、`runtime-staging` vs `runtime` 区分等。 | [#3301](https://github.com/nearai/ironclaw/pull/3301) |
| **#3310** | Docs | XS | 将"Last reviewed against OpenClaw"日期更新至 2026-05-02，覆盖 OpenClaw 2026.3.11 → 2026.4.30 发布窗口，新增基础设施（OpenAI 兼容 `/v1/models` 等）gap 记录。 | [#3310](https://github.com/nearai/ironclaw/pull/3310) |
| **#3180** | Reborn Memory | XL | 原 7-PR stack 重整为单 PR，包含原生隔离 guardrails + lib.rs 模块拆分（PR 1 of #3118），涵盖内存 substrate 完整实现。 | [#3180](https://github.com/nearai/ironclaw/pull/3180) |
| **#3253** | Multi-tenant / Slack | L | 实现 Slack 多租事 relay channel，支持按用户身份解析（`sender_id` → `UserId`）；未配对用户收到 OTP 配对码回复；支持 Workspace 级 OAuth 回调。 | [#3253](https://github.com/nearai/ironclaw/pull/3253) |

**当前打开的重量级 Reborn PR（待审查）：**
- **#3316**（XL）：新增 `ProductAdapter` 合同 + Telegram v2 端到端验证，为外部 channel 适配器迁移奠基。
- **#3314**（XL）：新增 `ironclaw_conversations` crate，定义 `ConversationBindingService`、`SessionThreadService`、`InboundTurnService` 合同。
- **#3315**（XL）：新增 `ironclaw_threads` crate，定义 canonical thread/transcript DTO 与内存语义实现。
- **#3122**（XL）：在 Responses API 中支持外部提供的工具，改用 Engine v2 原生工具调用机制。

---

## 4. 社区热点

以下 Issues 和 PR 在今日获得了最多讨论，是社区关注度的直接反映：

### Issues 讨论热度排行

| Issue | 评论数 | 主题 | 热度分析 |
|---|---|---|---|
| **#3013** | 7 | `[reborn]` Reborn cutover blocker: add kernel TurnCoordinator | 核心架构障碍，多个子系统依赖此服务定义，是 Reborn cutover 的第一条阻塞线 |
| **#3031** | 6 | `[reborn] [EPIC]` Reborn product surface migration | 最顶层 Epic，追踪整个产品表面迁移，关联 30+ 子 Issue |
| **#3198** | 5 | `[reborn]` Define TurnCoordinator public API shape | API 形状定义直接决定适配层兼容性，是 TurnCoordinator blockers 之一 |
| **#3016** | 5 | `[reborn]` Add reference AgentLoopHost facade | 主机层循环驱动门面，影响上层适配器接入方式 |
| **#3089** | 4 | `[reborn]` Add SessionThreadService | 线程/消息/里程碑持久化服务，核心依赖链 |
| **#3204** | 4 | `[reborn]` Define transcript and thread storage boundary | 定义转录/线程存储边界，影响数据隔离策略 |
| **#3202** | 4 | `[reborn]` Define turn persistence and active-lock schema | turn 持久化与活跃锁 schema 定义 |
| **#3093** | 4 | `[reborn]` Add EventProjectionService | 事件投影服务，高层 Reborn 层的消费依赖 |

> **趋势洞察**：讨论集中在 Reborn 架构的**服务边界定义**（哪些 crate 负责什么合同），反映出团队正在从"功能实现"转向"接口固化"阶段，这是大规模重构中风险最高的环节——边界不清晰将导致后续适配器集成出现大量返工。

### PR 讨论热度

| PR | 主题 | 热度分析 |
|---|---|---|
| **#3316** | feat(reborn): add ProductAdapter contracts + Telegram v2 tracer-bulle… | 首个 ProductAdapter 端到端验证，community 关注度高 |
| **#3314** | feat(reborn): add conversation binding contract slice | 合同定义 PR，预计是审查重点 |
| **#3315** | feat(reborn): add session thread transcript contract | 同上，配套合同定义 |
| **#3122** | feat(web): support externally-provided tools in Responses API | 外部工具注入是平台能力扩展的关键功能 |
| **#3308** | docs(reborn): add crate agent maps | 为每个 Reborn crate 添加 AGENTS.md，工具友好度提升 |

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 P1 — 关键用户阻断

| Issue | 问题描述 | 状态 | 修复进展 |
|---|---|---|---|
| **#3319** | Gmail Authentication 在 Telegram 启动时返回 400 错误，导致认证失败 | 🆕 新报告 | 尚未分配 Fix PR |
| **#3320** | Gmail 认证失败后（#3319），IronClaw 无法继续对话，即使执行 `/clear` 仍无法恢复 | 🆕 新报告 | 与 #3319 关联，同未修复 |
| **#3317** | Telegram 配置在本地 IronClaw 中无法正常工作（Screenshots 可见配置界面异常） | 🆕 新报告 | 尚未分配 Fix PR |

> **风险提示**：三条 P1 Bug 均来自同一用户 `@sergeiest`，全部涉及 **Telegram 集成 + Gmail 认证链**，属于用户关键场景。#3320 表明认证失败后存在**状态未清理**问题（持久化层残留脏状态），需检查 AuthState 持久化逻辑是否有 `clear` 兜底。

### ✅ 已修复的 Bug

| Issue→PR | 问题 | 修复链路 |
|---|---|---|
| **#3132 → #3197** | `cooldown_secs="120"` 字符串被错误拒绝（应为整数） | 已合并 `#3197`，类型强制转换管道统一 |
| **#3157 → #3157** | CodeAct 脚本内审批工具触发时错误暴露 `GatePaused` 而非暂停用户 | 已合并，async tool-resolve 路径错误转换修正 |

---

## 6. 功能请求与路线图信号

从今日 Issues 中提炼出的路线图信号：

| 类别 | 请求描述 | 对应 Issue | 实现可能性 |
|---|---|---|---|
| **外部工具支持** | Responses API 中支持调用方传入 `tools: [{type:"function"}]` | [#3122](https://github.com/nearai/ironclaw/pull/3122)（已打开 PR） | ✅ 高，即将合并 |
| **多租户 Slack** | Slack relay 支持按 workspace 的用户身份解析和 OAuth | [#3253](https://github.com/nearai/ironclaw/pull/3253)（已合并） | ✅ 已完成 |
| **持久化事件/审计** | Reborn 生产二进制需要独立 durable event/audit store | [#3162](https://github.com/nearai/ironclaw/issues/3162)（已关闭，in-progress） | ✅ 高，PR #3162 进行中 |
| **WebSocket/SSE 流** | `EventStreamManager` 将投影更新转为持久化、可回放的产品安全流 | [#3281](https://github.com/nearai/ironclaw/issues/3281)（已打开） | ✅ 高，Epic #3031 覆盖 |
| **外部 Channel 迁移** | Discord/Slack/Email 等 channel 适配器统一迁移到 ProductAdapter 合同 | [#3285](https://github.com/nearai/ironclaw/issues/3285) + [#3316](https://github.com/nearai/ironclaw/pull/3316)（PR 已打开） | ✅ 高，合同已落地 |
| **CLI/TUI 迁移** | 保留现有 CLI/TUI 命令名，同时迁移到类型化 Reborn 服务 | [#3284](https://github.com/nearai/ironclaw/issues/3284) | 🔶 中，取决于上游服务完成度 |
| **agent 命令保留** | 在 Reborn 循环和服务中保留现有 `/` 命令行为 | [#3286](https://github.com/nearai/ironclaw/issues/3286) | 🔶 中，需循环驱动完成 |

---

## 7. 用户反馈摘要

从今日 Issues 评论和描述中提炼：

### 用户痛点

- **认证状态泄露导致会话死锁**（#3320）："Gmail auth failed 之后，即使 `/clear` 也无法继续对话"——反映出错误处理路径缺少完整的状态回滚，用户被迫重启实例，体验断崖式下降。
- **Telegram 配置体验差**（#3317）：用户附上截图显示配置界面异常，说明 Telegram setup 页面在本地部署场景下存在 UI 或配置校验问题。
- **cooldown_secs 参数行为反直觉**（#3132，已修复）：用户传入 `"120"`（LLM 自然生成的字符串）被系统拒绝，要求整数，但 LLM 无法感知 schema——类型强制转换缺失导致工具调用链路断裂。

### 用户正面的信号

- 多租户 Slack 功能（#3253）解决了企业用户"workspace 隔离"的真实需求，是从配对码 OTP 到 OAuth 授权链的完整 UX 闭环。
- 外部工具支持（#3122）让用户可以在不修改 IronClaw 本身的情况下扩展工具集，平台开放性提升获得好评。

---

## 8. 待处理积压

以下为长期未响应或存在阻塞风险的重要 Issue，提醒维护者关注：

| Issue | 创建时间 | 状态 | 积压原因 | 建议动作 |
|---|---|---|---|---|
| **#3013** TurnCoordinator blocker | 2026-04-28（9天） | 🟡 OPEN | 核心 cutover 阻塞项，API 形状已定义（#3198 关闭），但实现未完成 | 加快实现节奏 |
| **#3031** Reborn Epic | 2026-04-28（9天） | 🟡 OPEN | 涵盖 30+ 子 Issue，Epic 层面缺少进度汇总 | 建议在 Epic 内置 checkboxes 更新完成度 |
| **#2987** 整体 Reborn 架构追踪 | 2026-04-27（10天+） | 🟡 OPEN | 父 Epic，多个 blocker 未闭环 | 监控 cutover 时间线 |
| **#3118** Reborn Memory substrate | 2026-04-30（7天） | 🟡 OPEN | PR #3180 已合并部分，但 Issue 本身未关闭 | 确认 scope 边界后关闭 |
| **#3020** Compatibility gate | — | 🟡 OPEN | 多个 Reborn 子 Issue 标记依赖此 gate | 确认 gate 的开放条件 |
| **#2593** Dependabot 批量依赖更新 | 2026-04-17（20天） | 🟡 OPEN | 14 个 GitHub Actions 依赖待合并，长期未处理有安全风险 | 优先审查合并或拒绝 |

> **积压风险提示**：`#2593` Dependabot PR 已打开 20 天，涉及 14 个 action 更新（包括 `actions/checkout`、`claude-code-action` 等），若不处理将持续产生安全警告，建议至少每月审查一次。

---

## 附：今日关键数据一览

| 指标 | 数值 |
|---|---|
| 新开 Issues | 32 |
| 关闭 Issues | 9 |
| 新开 PRs | 待统计（47 总） |
| 待合并 PRs | 21 |
| 已合并/关闭 PRs | 26 |
| P1 Bug 新增 | 3 |
| 版本发布 | 0 |
| 活跃贡献者（估算） | 8-10 人 |
| Reborn 相关 Issue 占比 | ~70%（29/41） |
| Reborn 相关 PR 占比 | ~60%（28/47） |

> **健康度评估**：项目当前处于高强度架构迁移期，Reborn 相关工作占主导。代码合并节奏稳健，PR 待审查队列合理（P1 Bug 需快速响应）。重点关注 Telegram/Gmail 认证链路的状态清理逻辑。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI 项目日报  |  2026‑05‑07

| 项目 | 链接 |
|------|------|
| **仓库** | https://github.com/netease-youdao/LobsterAI |
| **数据范围** | 2026‑05‑06 14:00 UTC ~ 2026‑05‑07 14:00 UTC |

---

### 1️⃣ 今日速览
- **活跃度**：过去 24 h 共产 **1 条新 Issue** 与 **30 条 PR（已全部合并/关闭）**，项目继续保持高速迭代。
- **安全问题**：唯一打开的 Issue #1885 为 **路径穿越（Path Traversal）漏洞**，位于邮箱 SKILL 的附件下载逻辑中，需尽快修复。
- **功能进展**：本天合并了 **workspace‑decoupling、POPO 多实例、日志滚动、Windows EPERM 修复等 10+ 项关键改动**，整体代码库向更稳定、模块化方向迈进。
- **健康度评估**：PR 合并率 100%（30/30）表明团队响应极快；但安全漏洞仍处于 “Open” 状态，建议在本日内提供 fix 或确认受影响的最低版本。

---

### 2️⃣ 版本发布
- **本日期无新正式 Release**。  
  已于 **2026‑05‑06** 合入 main 的 `release/2026.04.27`（#1876）仍在 RC 阶段，预计将在近期打标签发布。若需了解该版本的完整变更，请查阅 #1876 的变更摘要。

---

### 3️⃣ 项目进展（今日合并/关闭的重要 PR）

| PR 编号 | 标题 | 涉及领域 | 关键内容/意义 |
|--------|------|----------|--------------|
| [#1899](https://github.com/netease-youdao/LobsterAI/pull/1899) | fix: 修复 main Agent 的 md 迁移后工作目录不生效的问题 | `docs, main, openclaw` | 解决 main Agent 在迁移后工作目录未正确更新的 bug，提升用户体验。 |
| [#1890](https://github.com/netease-youdao/LobsterAI/pull/1890) | feat: decouple main agent workspace from working directory | `renderer, main, openclaw` | 将 main Agent 的持久化文件（MEMORY.md、IDENTITY.md 等）从用户可配置的 “工作目录” 中解耦，保证工作目录切换时状态不丢失。 |
| [#1894](https://github.com/netease-youdao/LobsterAI/pull/1894) | fix: reorder workspace migration to copy memory/ before MEMORY.md sync | `main, openclaw` | 修复 memory/ 目录在迁移过程中被空目录覆盖的问题，避免用户数据丢失。 |
| [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) | feat: POPO 多机器人实例支持 | `renderer, main, openclaw, im` | 升级 `moltbot-popo` 到 2.1.1，新增多实例管理 UI，支持企业用户在同一 IM 平台下运行多个机器人实例。 |
| [#1892](https://github.com/netease-youdao/LobsterAI/pull/1892) | feat(log): rotate gateway logs daily with 3‑day retention | `main, openclaw` | 引入日志每日轮转+3 天保留策略，帮助运维快速定位问题且避免磁盘膨胀。 |
| [#1891](https://github.com/netease-youdao/LobsterAI/pull/1891) | fix: resolve Windows EPERM when deleting skill directories | `main, skills` | 解决 Windows 环境下删除技能目录时偶发的权限错误，提升跨平台稳定性。 |
| [#1888](https://github.com/netease-youdao/LobsterAI/pull/1888) | fix: Ensure ClawHub installs run with a writable cwd and a valid HOME fallback | `main, skills` | 防止打包环境下因缺少 HOME 环境变量导致 `/.clawhub` 创建失败。 |
| [#1887](https://github.com/netease-youdao/LobsterAI/pull/1887) | fix: clean up lint warnings and disable no‑explicit‑any rule | `renderer, main, openclaw, im` | 统一代码质量规范，提升长期可维护性。 |
| [#1884](https://github.com/netease-youdao/LobsterAI/pull/1884) | refactor: remove dead engine‑branching code | `renderer, main, openclaw, cowork, im` | 删除已废弃的 `yd_cowork` 引擎分支，削减 65 行代码，简化架构。 |
| [#1895](https://github.com/netease-youdao/LobsterAI/pull/1895) | fix: 修复 markdown 表格偶尔渲染失败的问题 | `main` | 解决渲染器在极端表格结构下崩溃的回归。 |
| [#1896](https://github.com/netease-youdao/LobsterAI/pull/1896) | fix: 修复 IM 任务中修改模型不生效的问题 | `renderer, main, openclaw, im` | 修正在 IM 场景下切换模型后未实时生效的 bug。 |
| [#1897](https://github.com/netease-youdao/LobsterAI/pull/1897) | fix: 修复模型回复后不停止的问题 | `docs, main` | 解决模型生成结束后未正确停止流式输出的问题。 |
| [#1876](https://github.com/netease-youdao/LobsterAI/pull/1876) | chore(release): merge release/2026.04.27 into main | `renderer, docs, main, openclaw, skills, cowork, im` | 正式合入 4 月底发布的特性（ChatGPT OAuth、百度千帆、小米 mimo 等）以及大量 bugfix。 |
| [#1858](https://github.com/netease-youdao/LobsterAI/pull/1858) | fix: raise EngineStartupOverlay z‑index above Settings modal | `renderer, cowork` | 解决引擎启动遮罩层被设置弹窗遮住的 UI bug。 |
| [#1856](https://github.com/netease-youdao/LobsterAI/pull/1856) | fix: strip IM media metadata from user message display | `renderer, cowork` | 清理 IM 消息中冗余的媒体元数据，提升聊天界面可读性。 |
| [#1848](https://github.com/netease-youdao/LobsterAI/pull/1848) | fix(dingtalk): patch file:// URL for Windows image inbound | `openclaw` | 修复 Windows 下钉钉图片 URL 错误导致图片无法传递给模型的 bug。 |

> **说明**：表中仅列出在公开信息中提供了摘要的 PR；其余 14 条（均在 30 条总数中）同样已完成合并，因缺少摘要未单独列出。

---

### 4️⃣ 社区热点（讨论最活跃的 Issue / PR）

| 编号 | 类型 | 标题/摘要 | 活跃度（评论数/👍） | 链接 |
|------|------|----------|---------------------|------|
| #1885 | **Issue (Open)** | **[Security] 邮箱SKILL路径穿越漏洞** – 附件文件名未过滤导致路径穿越 | 0 条评论，0 👍（但安全影响高） | https://github.com/netease-youdao/LobsterAI/issues/1885 |
| #1883 | **PR (Merged)** | **POPO 多机器人实例支持** – 多实例 UI 与插件升级，引发团队内部讨论（预计将在下一版正式发布） | 0 条评论 | https://github.com/netease-youdao/LobsterAI/pull/1883 |
| #1890 | **PR (Merged)** | **decouple main agent workspace** – 解耦工作目录，对长期使用自定义目录的用户影响显著 | 0 条评论 | https://github.com/netease-youdao/LobsterAI/pull/1890 |
| #1876 | **PR (Merged)** | **release/2026.04.27 合入 main** – 包含 ChatGPT OAuth、百度千帆等新特性，发布后社区关注度高 | 0 条评论 | https://github.com/netease-youdao/LobsterAI/pull/1876 |

> **观察**：安全性 Issue #1885 目前没有评论，但鉴于其 **CVSS 影响面**（涉及文件系统的任意写入），社区可能正在私下协调修复。建议维护者在今日内给出 **确认/指派** 的进度更新，以提升信任感。

---

### 5️⃣ Bug 与稳定性（按严重程度划分）

| 严重度 | 编号 | 描述 | 影响范围 | 是否已有 Fix PR |
|--------|------|------|----------|----------------|
| **🔴 Critical** | #1885 | 路径穿越漏洞 – `downloadAttachments` 未对附件名过滤，可导致任意文件写 | 所有使用邮箱 SKILL 的用户（尤其是开放外部邮件插件的部署） | ❌ 暂无 Fix PR（建议立即指派安全团队） |
| **🟠 High** | #1899 | main Agent MD 迁移后工作目录失效 | 使用 main Agent 且切换工作目录的用户 | ✅ 已合并 |
| **🟠 High** | #1897 | 模型回复后流不停止，导致后台线程泄漏 | 所有模型交互会话 | ✅ 已合并 |
| **🟠 High** | #1896 | IM 任务中修改模型不生效 | IM 场景下的模型切换 | ✅ 已合并 |
| **🟡 Medium** | #1895 | Markdown 表格偶尔渲染失败 | 文档/聊天渲染 | ✅ 已合并 |
| **🟡 Medium** | #1886 | `/models` 命令结果因 ChatGPT OAuth 展示不全 | 使用 ChatGPT OAuth 的用户 | ✅ 已合并 |
| **🟡 Medium** | #1891 | Windows EPERM 删除 skill 目录 | Windows 环境用户 | ✅ 已合并 |
| **🟢 Low** | #1892 | 日志未滚动导致磁盘占用增长 | 长期运行的服务器实例 | ✅ 已合并（特性） |
| **🟢 Low** | #1884 | 废弃引擎分支代码冗余 | 代码可维护性 | ✅ 已合并（清理） |

> **注**：所有已列出的 High/Medium Bug 均已通过对应的 PR 完成修复。**Critical 安全漏洞** 仍在 Open 状态，建议在 **24 h 内** 发布补丁或临时禁用受影响功能。

---

### 6️⃣ 功能请求与路线图信号

| 方向 | 代表

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**: 2026-05-07
**仓库**: [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 项目在过去 24 小时内保持了极高的开发活跃度，共处理 **11 条 PR 更新**（合并/关闭 9 条）以及 **6 条 Issue 更新**（关闭 4 条）。项目团队展现出高效的 bug 修复能力，4 个已关闭 Issue 中有 3 个附带对应的 PR 修复，包括 DeepSeek reasoning_content 丢失、Docker 沙箱命名冲突、登录失败等关键问题。同时，社区正在推进两项重量级功能提案：远程多后端沙箱支持和身份/ onboarding 协议系统。目前无新版本发布。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

以下 PR 已于今日合并/关闭，项目整体向前迈进：

| PR | 类型 | 摘要 | 关联 Issue |
|---|---|---|---|
| [#971](https://github.com/moltis-org/moltis/pull/971) | fix(sandbox) | **序列化容器启动，修复并行沙箱冲突** — 解决多个工具调用同时初始化同一会话沙箱时的竞态条件 | [#964](https://github.com/moltis-org/moltis/issues/964) |
| [#961](https://github.com/moltis-org/moltis/pull/961) | fix(providers) | **回放 DeepSeek reasoning_content** — 持久化聊天历史中的推理内容，确保后续请求正确传递 | [#959](https://github.com/moltis-org/moltis/issues/959) |
| [#970](https://github.com/moltis-org/moltis/pull/970) | fix(auth) | **修复 Cookie Secure 属性逻辑** — 当 MOLTIS_BEHIND_PROXY=true 时正确检查 X-Forwarded-Proto，避免纯 HTTP 环境登录失败 | [#968](https://github.com/moltis-org/moltis/issues/968) |
| [#974](https://github.com/moltis-org/moltis/pull/974) | feat | **启动时自动从恢复密钥 unseal 保险库** — 新增 MOLTIS_VAULT_AUTO_UNSEAL_KEY_FILE / KEY 环境变量支持无人值守启动 | — |
| [#962](https://github.com/moltis-org/moltis/pull/962) | docs | **更新本地 TTS 提供商文档** — 修复指向已归档仓库的链接，指向维护中的 OHF-Voice 和 coqui-ai-TTS | [#958](https://github.com/moltis-org/moltis/issues/958) |
| [#957](https://github.com/moltis-org/moltis/pull/957) | fix(matrix) | **Matrix OIDC 注册添加调试日志并去重重定向规范化** — 帮助运营商诊断 invalid_redirect_uri 错误 | — |
| [#358](https://github.com/moltis-org/moltis/pull/358) | fix(providers) | **路由 Copilot 企业令牌经代理端点** — 解析 token exchange 响应中的 endpoints.api，解决企业账户 HTTP 421 错误 | — |
| [#975](https://github.com/moltis-org/moltis/pull/975) | deps(rust) | **openssl 0.10.78 → 0.10.79** | — |
| [#967](https://github.com/moltis-org/moltis/pull/967) | deps(rust) | **gix 0.78.0 → 0.83.0** (含 3 个更新) | — |

**关键进展摘要**：
- 🐛 **3 个 Bug 在 24 小时内全部修复并合并**，体现了高效的闭环能力
- 🔐 **Vault 安全增强**：支持恢复密钥自动 unseal，改善无人值守部署体验
- 📚 **文档质量维护**：及时更新指向归档仓库的外部链接
- 🔧 **依赖维护**：及时跟进 rust-openssl 和 gix 安全/功能更新

---

## 4. 社区热点

### 4.1 活跃的 Open PR（待合并）

| PR | 作者 | 摘要 | 热度 |
|---|---|---|---|
| [#942](https://github.com/moltis-org/moltis/pull/942) | @penso | **远程与多后端沙箱支持**（Vercel, Daytona, Firecracker）— 使 Docker-in-Docker 不可用的云部署可运行沙箱化命令执行 | ⭐⭐⭐ |
| [#976](https://github.com/moltis-org/moltis/pull/976) | @vystartasv | **Agent Identity + Onboarding Protocols 集成指南** — 文档化基于 Ed25519 密钥对的跨服务器信任建立机制 | ⭐⭐ |

> **#942 分析**：这是云原生部署的重要一步。若合并，DigitalOcean 一键部署、Fly.io、Render 等平台将获得完整沙箱支持，对扩大用户群体有重大意义。

### 4.2 值得关注的 Open Issue

| Issue | 作者 | 摘要 | 评论数 | 👍 |
|---|---|---|---|
| [#977](https://github.com/moltis-org/moltis/issues/977) | @TLA020 | **Docker 中浏览器沙箱失败** — 报告在 Proxmox LXC 容器中运行 Docker 时，沙箱启动路径 `/data/browse...` 不可写 | 0 | 0 |
| [#973](https://github.com/moltis-org/moltis/issues/973) | @vystartasv | **提案：个人 Agent 服务器的 Onboarding + Identity 协议** — 提出 L1/L2 协议层以实现跨实例发现与信任建立 | 0 | 0 |

> **#973 分析**：这是架构层面的重要提案。若被接受，将定义 Moltis 服务器之间互操作的开放标准，与 PR #976 形成配套文档。社区对跨服务器协作的需求正在浮现。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 摘要 | 状态 | 是否有 Fix |
|---|---|---|---|---|
| 🔴 高 | [#977](https://github.com/moltis-org/moltis/issues/977) | **Docker 容器中浏览器沙箱失败** — 路径 `/data/browse...` 创建失败，阻断沙箱功能 | 🆕 新报告 | ❌ 未分配 |
| 🟡 中 | [#959](https://github.com/moltis-org/moltis/issues/959) | DeepSeek 思维模式推理内容丢失 | ✅ 已修复 | ✅ [#961](https://github.com/moltis-org/moltis/pull/961) |
| 🟡 中 | [#964](https://github.com/moltis-org/moltis/issues/964) | 并行工具执行导致 Docker 沙箱命名冲突 | ✅ 已修复 | ✅ [#971](https://github.com/moltis-org/moltis/pull/971) |
| 🟡 中 | [#968](https://github.com/moltis-org/moltis/issues/968) | 登录失败（HTTP 代理后 Cookie Secure 属性错误） | ✅ 已修复 | ✅ [#970](https://github.com/moltis-org/moltis/pull/970) |

**稳定性评估**：高。过去 24 小时内报告的 3 个 Bug 均已在今日修复并合并。唯一未处理的新 Bug（#977）涉及 Docker 部署场景下的权限问题，需要维护者关注。

---

## 6. 功能请求与路线图信号

### 已提出且有配套 PR 的功能

| 功能 | PR | 进度 | 预期影响 |
|---|---|---|---|
| 远程多后端沙箱（Vercel/Daytona/Firecracker） | [#942](https://github.com/moltis-org/moltis/pull/942) | ⏳ 待审查 | 🔴 高 — 扩大云平台支持覆盖 |
| Agent Identity + Onboarding Protocols | [#976](https://github.com/moltis-org/moltis/pull/976) | ⏳ 待审查 | 🟡 中 — 文档先行，协议层初步建立 |

### Issue 中揭示的功能需求

- **#973** — 跨实例发现与身份验证的标准化需求，指向未来多 Agent 协作的互操作性标准
- **#977** — Docker 部署场景下沙箱路径可写性问题，指向需要更灵活的路径配置或容器权限设置

---

## 7. 用户反馈摘要

从 Issue 评论与内容中提炼的真实痛点：

| 场景 | 用户 | 问题/诉求 |
|---|---|---|
| Docker 部署 | @TLA020 | 在 LXC 容器中运行 Docker 时沙箱路径不可写，需要路径配置灵活性 |
| 云端沙箱 | @penso（实现者） | Vercel/Fly.io 等平台无法使用 Docker-in-Docker，需要远程沙箱后端支持 |
| 企业协作 | @vystartasv | 两个 Moltis 实例之间无法互相发现和建立信任，需要标准化协议 |
| 本地 TTS | @Thndr（文档反馈） | 文档指向的 Coqui/Piper 仓库已归档/不维护，影响用户自行部署 |
| 登录体验 | @BrandonStudio | 局域网内通过 HTTP 代理访问时无法登录（Cookie Secure 属性问题） |

**用户满意度信号**：从 Issue 快速闭环（4 个报告 → 3 个当日修复）来看，维护团队响应积极，用户反馈渠道畅通。

---

## 8. 待处理积压

以下项目需要维护者关注：

| 项目 | 类型 | 年龄 | 状态 | 建议 |
|---|---|---|---|---|
| [#977](https://github.com/moltis-org/moltis/issues/977) Bug: Docker 沙箱失败 | Issue | 🆕 1 天 | 无人认领 | ⚠️ 高优先级，需分配 |
| [#942](https://github.com/moltis-org/moltis/pull/942) 远程沙箱支持 | PR | 7 天 | 等待审查 | 💡 高价值，建议优先审查 |
| [#976](https://github.com/moltis-org/moltis/pull/976) 身份协议文档 | PR | 🆕 1 天 | 等待审查 | 📚 与 #973 配套，低风险 |
| [#973](https://github.com/moltis-org/moltis/issues/973) 身份/onboarding 协议提案 | Issue | 🆕 1 天 | 0 评论 | 💬 建议维护者参与讨论，明确立场 |

---

## 📊 健康度评分

| 指标 | 评分 | 趋势 |
|---|---|---|
| Bug 响应速度 | 🟢 优秀 | 3/3 近期 Bug 当日修复 |
| PR 吞吐量 | 🟢 高 | 9 PR 合并/关闭 |
| 社区参与 | 🟡 中等 | 2 新 Issue，2 新 PR，均为 1 人主导 |
| 版本发布节奏 | ⚪ 平稳 | 无新版本，近期以 bugfix 为主 |
| **综合健康度** | 🟢 **良好** | 高效修复文化，功能稳步推进 |

---

*报告生成时间: 2026-05-07 | 数据来源: GitHub API*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**报告日期：2026-05-07**

---

## 1. 今日速览

QwenPaw 项目今日保持高度活跃，共处理 **41 条 Issues**（23 新开/活跃，18 已关闭）和 **30 条 PRs**（15 待合并，15 已合并）。项目已发布 **v1.1.5.post2** 版本，主要包含异步生成会话标题的新功能及文档更新。今日社区聚焦于长对话场景下的回复截断问题、Windows 平台兼容性以及模型配置的交互体验优化。安全方面有一项 Windows 服务器文件遍历漏洞已被修复关闭。整体项目健康度良好，合并率与关闭率保持平衡。

---

## 2. 版本发布

### v1.1.5.post2 🆕

**发布时间：** 2026-05-06

**主要变更：**

| 类型 | PR | 说明 |
|------|-----|------|
| 📖 文档 | [#4013](https://github.com/agentscope-ai/QwenPaw/pull/4013) | 更新文档至 v1.1.5 |
| ✨ 功能 | [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) | 通过 LLM 异步生成会话标题 |
| 🐛 修复 | - | 消息处理相关修复 |

**迁移提示：** 无破坏性变更，建议用户更新以获得更好的会话标题自动生成体验。

---

## 3. 项目进展

今日合并/关闭的重要 PRs：

| PR | 状态 | 贡献者 | 说明 |
|----|------|--------|------|
| [#4071](https://github.com/agentscope-ai/QwenPaw/pull/4071) | ✅ Merged | @xieyxclack | 版本升至 1.1.5p2 |
| [#4053](https://github.com/agentscope-ai/QwenPaw/pull/4053) | ✅ Merged | @Leirunlin | **新增 Skill 安装/卸载 CLI**（关联 #2384）|
| [#4073](https://github.com/agentscope-ai/QwenPaw/pull/4073) | ✅ Merged | @CA-mambo | 修复默认 Agent 自定义名称被忽略的问题（#3465）|
| [#4014](https://github.com/agentscope-ai/QwenPaw/pull/4014) | ✅ Merged | @xieyxclack | 修复 `/approve` 命令忽略 request_id 参数的 Bug |
| [#4016](https://github.com/agentscope-ai/QwenPaw/pull/4016) | ✅ Merged | @Leirunlin | 增强技能加载容错性，处理迁移或损坏的技能条目 |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | ✅ Merged | @Jailtonfonseca | **新增巴西葡萄牙语（pt-BR）国际化支持** |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | 🔄 Review | @wfeng007 | 新增 Windows 系统托盘自启动功能 |
| [#4046](https://github.com/agentscope-ai/QwenPaw/pull/4046) | 🔄 Review | @gnipping | **新增 Tool Guard 规则级自动拒绝功能** |
| [#4074](https://github.com/agentscope-ai/QwenPaw/pull/4074) | 🔄 Review | @ekzhu | 允许用户在 Console UI 选择 DashScope Base URL |
| [#4080](https://github.com/agentscope-ai/QwenPaw/pull/4080) | 🔄 Review | @zhijianma | **新增 Token 使用量趋势图表**（关联 #3907）|

**今日亮点：** Skill 管理 CLI 的落地将极大改善 Agent 自动化安装技能的体验，巴西葡萄牙语支持标志着项目国际化的进一步扩展。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）：

| Issue | 评论 | 状态 | 主题 |
|-------|------|------|------|
| [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | 17 | 🔴 Closed | **[安全] Windows 服务器任意文件遍历漏洞** |
| [#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702) | 6 | 🟡 Closed | 技能池一直报错 |
| [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) | 6 | 🟡 Closed | 输入框卡顿严重 |
| [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) | 5 | 🔵 Open | **对话内容过长后无法正常回复** |

**热点分析：**

🔴 **安全问题 [#3955]**：用户报告 Windows 服务器存在任意文件遍历漏洞，引发 17 条讨论，该问题已被关闭，说明已处理或定为无效。

🔵 **长对话截断问题 [#4059]**：用户反馈当对话内容过长时，AI 只处理到一半就停止，执行的 `/compact` 命令也无法解决，必须开启新对话。这是影响核心体验的严重问题，5 条评论显示多位用户关注，建议优先处理。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 说明 | 状态 |
|----------|-------|------|------|
| 🔴 高 | [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) | 对话内容过长后无法正常回复，使用 `/compact` 也无效 | Open |
| 🔴 高 | [#4047](https://github.com/agentscope-ai/QwenPaw/issues/4047) | 聊天记录中的文件/图片链接一天后过期，提示 "Invalid or expired token" | Open |
| 🟡 中 | [#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043) | Windows 版本启动缓慢，多项 P0 问题（技能安装后未注册等）| Open |
| 🟡 中 | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | DeepSeek 模型的 think 内容解析问题导致无正常回复 | Open |
| 🟡 中 | [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042) | 钉钉频道最终结果通知失败，事件循环生命周期竞态条件 | Open |
| 🟡 中 | [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) | 开启 HEARTBEAT.md 后网络恢复无法自动重连 | Closed |
| 🟡 中 | [#4040](https://github.com/agentscope-ai/QwenPaw/issues/4040) | AnthropicChatModel 硬编码 max_tokens=2048 导致响应截断 | Closed |
| 🟢 低 | [#4049](https://github.com/agentscope-ai/QwenPaw/issues/4049) | 下载并启动 QwenPaw-Flash-9B-Q4_K_M 模型时 llama.cpp server 异常退出 | Open |

**关键问题：** 长对话截断和文件链接过期是今日最需关注的问题，建议维护者优先评估。

---

## 6. 功能请求与路线图信号

### 用户高频诉求

| 功能请求 | Issue | 期待值 | 关联 PR |
|----------|-------|--------|---------|
| 📦 **简化模型添加流程** | [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | 减少添加模型的操作步骤和点击次数 | - |
| 🎯 **DeepSeek 前缀缓存优化** | [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) | 提升 ~95% 缓存命中率，降低 5% 未命中带来的成本 | - |
| ⏰ **一次性定时任务** | [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) | 支持 `--at <iso-datetime>` 格式的单次提醒 | - |
| 📁 **自定义工作区存储路径** | [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) | 允许配置 workspaces 和 skills 的存储位置 | - |
| 🔧 **Shell 命令自适应执行** | [#4045](https://github.com/agentscope-ai/QwenPaw/issues/4045) | 快命令同步执行，长任务异步执行 | - |
| 🧠 **技能池语义路由** | [#3091](https://github.com/agentscope-ai/QwenPaw/issues/3091) | 大规模技能池（50+）下的智能选择 | - |

### 已在 Review 中的功能

| PR | 功能 | 进度 |
|----|------|------|
| [#4080](https://github.com/agentscope-ai/QwenPaw/pull/4080) | Token 使用量趋势图表 | 🔄 Under Review |
| [#4046](https://github.com/agentscope-ai/QwenPaw/pull/4046) | Tool Guard 规则级自动拒绝 | 🔄 Under Review |
| [#4074](https://github.com/agentscope-ai/QwenPaw/pull/4074) | DashScope Base URL 可选 | 🔄 Under Review |

---

## 7. 用户反馈摘要

### 核心痛点

1. **用户体验摩擦**：
   - 添加模型需多次往返操作（Settings → Provider → Models → Add Model → Save → Back）([#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036))
   - Skill 文件夹同步后前端界面不刷新，需手动操作 ([#4079](https://github.com/agentscope-ai/QwenPaw/issues/4079))
   - 技能选择器以纯文本列表输出，用户需复制粘贴技能名 ([#4078](https://github.com/agentscope-ai/QwenPaw/issues/4078))

2. **平台兼容性问题**：
   - Windows 版本启动缓慢，技能安装后未自动注册 ([#4043](https://github.com/agentscope-ai/QwenPaw/issues/4043))
   - MacBook M5 Pro 芯片上本地模型无法运行 ([#4015](https://github.com/agentscope-ai/QwenPaw/issues/4015))

3. **成本与效率**：
   - DeepSeek 前缀缓存命中率约 95%，仍有优化空间 ([#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891))
   - 聊天文件链接 24 小时过期导致历史记录无法访问 ([#4047](https://github.com/agentscope-ai/QwenPaw/issues/4047))

### 正面反馈

- 新增 Skill 安装/卸载 CLI 解决了 bot 安装技能的目录错放问题 ([#2384](https://github.com/agentscope-ai/QwenPaw/issues/2384))
- 异步生成会话标题功能获得好评 ([#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829))

---

## 8. 待处理积压

以下问题长期未解决或响应，需维护者关注：

| Issue | 创建时间 | 关注度 | 状态 | 说明 |
|-------|----------|--------|------|------|
| [#3091](https://github.com/agentscope-ai/QwenPaw/issues/3091) | 2026-04-08 | 2 条评论 | 🔵 Open | 技能池语义路由需求（50+ 技能场景），存在相关设计讨论 |
| [#2384](https://github.com/agentscope-ai/QwenPaw/issues/2384) | 2026-03-27 | 2 条评论 | ✅ Closed | CLI 封装已完成（#4053） |
| [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) | 2026-04-27 | 3 条评论 | 🔵 Open | DeepSeek 缓存命中率优化，涉及成本节省 |

**建议：** [#3091](https://github.com/agentscope-ai/QwenPaw/issues/3091) 技能池语义路由是长期讨论的功能需求，建议评估是否可纳入近期 Roadmap。

---

## 统计摘要

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 23 |
| Issues 已关闭 | 18 |
| PRs 待合并 | 15 |
| PRs 已合并/关闭 | 15 |
| 版本发布 | 1 (v1.1.5.post2) |
| Open Issues 关注度最高 | #3955 (安全漏洞, 17 条评论) |
| Open Bug 严重度最高 | #4059 (长对话截断) |

---

*本报告基于 2026-05-07 00:00 至 23:59 的 GitHub 数据自动生成*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报

**报告日期**：2026-05-07  
**项目仓库**：https://github.com/gaoyangz77/easyclaw

---

## 1. 今日速览

2026-05-07，EasyClaw 项目发布 **v1.8.11** 版本（RivonClaw v1.8.11），聚焦于**电商自动化基础设施**与**Windows 桌面端体验优化**。今日社区活跃度较低，无新 Issues 或 PR 动态，主要工作集中在版本发布与功能完善上。项目当前处于稳定迭代阶段，核心功能链（创作者协作 + 电商自动化）正在逐步夯实。

---

## 2. 版本发布

### 🔖 v1.8.11 - RivonClaw

**发布时间**：2026-05-07  
**发布类型**：常规功能更新  
**破坏性变更**：无  
**迁移注意事项**：无

#### 主要更新内容

| 类别 | 更新说明 |
|------|----------|
| 🛒 **电商自动化** | 新增 **affiliate inbound（联盟引流）和 ecommerce relay（电商中继）基础架构**，为后续创作者协作和电商自动化工作流铺路 |
| 💻 **Windows 桌面端** | 将 **本地 CLI 启动支持** 捆绑至 Windows 安装程序，优化启动/运行时依赖准备流程，提升桌面端开箱即用体验 |
| 💬 **聊天功能** | 改进聊天模块（详情待完整 Release Notes） |

#### 分析

v1.8.11 是连接**内容创作者生态**与**电商变现场景**的关键版本。联盟引流和电商中继功能的引入，暗示 EasyClaw 正在从单一的 AI 助手工具向**创作者经济平台**演进。Windows 安装程序的改进则降低了桌面端使用门槛，有助于扩大用户基数。

**Release 链接**：https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.11

---

## 3. 项目进展

由于过去 24 小时无 PR 更新（待合并/已合并均为 0），项目进展集中体现于版本发布本身。

**关键里程碑**：
- ✅ 完成电商 relay 基础架构搭建（v1.8.11）
- ✅ Windows CLI 启动支持集成至安装程序

---

## 4. 社区热点

过去 24 小时无新 Issues 或 PR 产生，无社区热点可分析。

> **历史参考**：建议关注项目 [Issues 页面](https://github.com/gaoyangz77/easyclaw/issues) 和 [PR 页面](https://github.com/gaoyangz77/easyclaw/pulls)，追踪历史讨论中的热门话题。

---

## 5. Bug 与稳定性

过去 24 小时无 Bug 报告。

> 当前版本无已知阻塞性问题，建议关注 [Security Advisories](https://github.com/gaoyangz77/easyclaw/security/advisories) 获取历史安全修复信息。

---

## 6. 功能请求与路线图信号

基于 v1.8.11 的更新方向，可推测项目路线图的以下信号：

| 方向 | 信号解读 |
|------|----------|
| 🎯 **创作者协作平台** | Affiliate inbound 功能的加入暗示未来可能支持创作者分佣、联盟营销等场景 |
| 🛒 **电商自动化** | Ecommerce relay 基础架构为订单同步、商品推送、物流跟踪等自动化流程奠定基础 |
| 💻 **跨平台体验** | Windows 安装程序优化是跨平台一致体验的一部分，预计 macOS/Linux 侧也有对应改进 |

> 暂无对应 Issue/PR 可验证，建议保持关注。

---

## 7. 用户反馈摘要

过去 24 小时无新 Issues 评论。

根据版本更新推测的潜在用户诉求：
- **Windows 用户**：期待开箱即用的桌面端体验 → v1.8.11 已部分满足
- **电商/创作者用户**：期待与电商平台、联盟网络的集成 → v1.8.11 基础设施已就位

---

## 8. 待处理积压

过去 24 小时无积压更新。

| 类型 | 状态 | 说明 |
|------|------|------|
| Issues | 0 条待处理 | 无积压 |
| PRs | 0 条待处理 | 无积压 |

> **提醒维护者**：若项目有长期未响应的 Issue 或功能建议，建议在 Release 公告或社区渠道主动同步进展，以维持社区信任度。

---

## 📊 项目健康度评分（2026-05-07）

| 指标 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐☆☆ | 版本发布驱动，无社区新讨论 |
| 版本迭代 | ⭐⭐⭐⭐⭐ | 按时发布功能版本 |
| 响应速度 | ⭐⭐⭐⭐⭐ | 无积压 |
| 功能进展 | ⭐⭐⭐⭐☆ | 电商自动化基础设施落地 |

---

*报告生成时间：2026-05-07 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>librefang</strong> — <a href="https://github.com/librefang/librefang">librefang/librefang</a></summary>

# 📊 librefang 项目动态日报

**报告日期**: 2026-05-07  
**数据时间范围**: 过去 24 小时

---

## 1. 今日速览

过去 24 小时内，librefang 项目保持极高活跃度：共处理 **30 条 Issues**（11 新开/活跃，19 已关闭）和 **42 条 PRs**（8 待合并，34 已合并/关闭），并发布 **v2026.5.6-beta.9** 测试版本。项目迎来重大架构改进——内核模块化（16 个 trait impls 提取）和 SQLite 工作流持久化迁移，同时 UI 侧完成大规模缺陷修复（单日合并 44+44+31 项 UI 修复）。CI 持续存在 Windows 测试不稳定问题，建议关注。整体项目健康度：**优秀**（高产出、低积压）。

---

## 2. 版本发布

### 🆕 v2026.5.6-beta.9

| 项目 | 详情 |
|------|------|
| **版本号** | v2026.5.6-beta.9 |
| **发布时间** | 2026-05-07 |
| **贡献者** | 3 人 |
| **PR 数量** | 310 PRs since v2026.5.2-beta8 |

#### 新增功能

| PR | 功能描述 | 作者 |
|----|---------|------|
| [#4367](https://github.com/librefang/librefang/pull/4367) | Add schema drift check with sha256 baselines | @houko |
| [#4388](https://github.com/librefang/librefang/pull/4388) | Surface external tip-anchor status in /api/audit/verify | @houko |
| [#4405](https://github.com/librefang/librefang/pull/4405) | Announce health-status flips via aria-live | @houko |

#### 破坏性变更提示
⚠️ 本版本包含数据库迁移 v35（workflow_runs 表结构变更），建议在升级前备份数据。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PRs，对项目具有里程碑意义：

### 🔥 核心架构重构

| PR | 标题 | 意义 | 状态 |
|----|------|------|------|
| [#4710](https://github.com/librefang/librefang/pull/4710) | feat(kernel,memory): migrate workflow persistence to SQLite | **关键** - 消除 daemon 重启导致 Running/Pending 工作流丢失的可靠性缺陷 | ✅ Merged |
| [#4712](https://github.com/librefang/librefang/pull/4712) | feat(memory-wiki): scaffold durable knowledge vault — isolated mode v1 | **功能里程碑** - 知识库模块支持 Obsidian 友好导出 | ✅ Merged |
| [#4726](https://github.com/librefang/librefang/pull/4726) | refactor(arch): KernelApi trait + Arc<dyn KernelApi> AppState | **架构** - 明确 HTTP API 层与 kernel 的契约，消除 116 个隐式耦合 | ✅ Open |
| [#4713](https://github.com/librefang/librefang/pull/4713) | refactor(kernel): extract 16 kernel_handle trait impls into kernel/handles | **可维护性** - 拆分 20K 行 god-file，降低代码审查难度 | ✅ Open |
| [#4685](https://github.com/librefang/librefang/pull/4685) | refactor(memory): replace Arc<Mutex<Connection>> with r2d2 connection pool | **性能** - 解决 SQLite I/O 串行化瓶颈（#3378 根因修复） | ✅ Merged |

### 🖥️ UI 质量提升

| PR | 标题 | 成果 | 状态 |
|----|------|------|------|
| [#4731](https://github.com/librefang/librefang/pull/4731) | fix(dashboard): resolve 44 confirmed UI bugs across 13 components | 单日最大规模 UI 修复 | ✅ Open |
| [#4734](https://github.com/librefang/librefang/pull/4734) | fix(dashboard): state-correctness and a11y bugs in UI primitives | 无障碍和状态管理修复 | ✅ Closed |
| [#4728](https://github.com/librefang/librefang/pull/4728) | fix(dashboard): harden 31 UI components — a11y, state correctness, SSRF, perf | 安全加固 + 性能优化 | ✅ Closed |
| [#4719](https://github.com/librefang/librefang/pull/4719) | fix(dashboard): resolve 80+ bugs, a11y gaps, and i18n misses across 18 pages | 累计 80+ Bug 修复 | ✅ Open |
| [#4727](https://github.com/librefang/librefang/pull/4727) | fix(dashboard/ui): DrawerPanel parent-close must check slot ownership | **P0 修复** - 配置窗口无法打开问题 | ✅ Merged |

### 🔒 安全与配置

| PR | 标题 | 意义 | 状态 |
|----|------|------|------|
| [#4711](https://github.com/librefang/librefang/pull/4711) | fix(kernel): reload_config must reject invalid TOML, not silently swap to defaults | 修复配置错误静默回退导致 Web Search 配置丢失问题（#4664 Part 2） | ✅ Merged |
| [#4725](https://github.com/librefang/librefang/pull/4725) | fix(kernel): drain in-flight workflow runs on graceful shutdown | 工作流优雅关闭，与 #4710 配套 | ✅ Open |
| [#4723](https://github.com/librefang/librefang/pull/4723) | fix(api): expose cron_session_compaction_* + tool_exec via ui_sections_overlay | 恢复 main CI green | ✅ Closed |

---

## 4. 社区热点

### 📌 评论最多的 Issues

| Issue | 标题 | 评论数 | 热度来源 |
|-------|------|--------|---------|
| [#4707](https://github.com/librefang/librefang/issues/4707) | CI failure on PR #4682 (Windows) | 3 | CI 阻塞问题，用户等待合入 |
| [#4684](https://github.com/librefang/librefang/issues/4684) | Hands page showing empty on GCP Free Tier | 3 | 多用户 GCP 部署问题复现 |
| [#4686](https://github.com/librefang/librefang/issues/4686) | Plugins throwing error while installing on GCP | 3 | GCP 插件安装失败系列问题 |
| [#4674](https://github.com/librefang/librefang/issues/4674) | any change in configuration page not saved | 2 | 配置保存失败阻断核心功能 |
| [#4664](https://github.com/librefang/librefang/issues/4664) | Websearch config missing in GUI | 2 | 新 UI 覆盖不全反馈 |

#### 热点分析

**GCP Free Tier 问题群** (#4684, #4686, #4674, #4675, #4680)：@AIHunter83 连续报告多个 GCP 免费层部署问题，涉及 Hands 页面为空、插件安装报错、终端重连、文件系统 MCP 连接失败等，可能指向部署文档或资源限制相关问题。

### 🔥 PR 评论活跃

| PR | 标题 | 状态 | 热度 |
|----|------|------|------|
| [#4717](https://github.com/librefang/librefang/pull/4717) | refactor(dashboard): harden shell, extract modal | Open, has-conflicts | 大量代码变更需 review |
| [#4719](https://github.com/librefang/librefang/pull/4719) | fix(dashboard): resolve 80+ bugs across 18 pages | Open | 超大变更规模 |

---

## 5. Bug 与稳定性

### 🔴 严重 Bug（需紧急处理）

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|-------|------|---------|------|--------|
| [#4701](https://github.com/librefang/librefang/issues/4701) | set_provider_key writes to secrets.env but systemd unit loads env (key lost on daemon restart) | **Critical** | Open | - |
| [#4732](https://github.com/librefang/librefang/issues/4732) | fix(kernel): SSRF validation gaps in cron delivery webhook URLs | **Critical** | Open | - |
| [#4715](https://github.com/librefang/librefang/issues/4715) | Workflow runs lost on graceful shutdown | **High** | Open | [#4716](https://github.com/librefang/librefang/pull/4716) ✅ |
| [#3378](https://github.com/librefang/librefang/issues/3378) | All SQLite I/O serialized through one Mutex (performance) | **Critical** | Closed | [#4685](https://github.com/librefang/librefang/pull/4685) ✅ |

### 🟡 中等 Bug（影响功能）

| Issue | 标题 | 影响 | Fix PR |
|-------|------|------|--------|
| [#4684](https://github.com/librefang/librefang/issues/4684) | Hands page empty on GCP Free Tier | 用户无法正常使用 | - |
| [#4686](https://github.com/librefang/librefang/issues/4686) | Plugins error on GCP Free Tier | 插件系统不可用 | - |
| [#4674](https://github.com/librefang/librefang/issues/4674) | Configuration changes not saved | 核心配置功能失效 | - |
| [#4693](https://github.com/librefang/librefang/issues/4693) | 'librefang restart' returns 401 Unauthorized | 重启失败 | [#4711](https://github.com/librefang/librefang/pull/4711) ✅ |

### ⚠️ CI 稳定性问题

| Issue | 模式 | 受影响 PRs | 原因 |
|-------|------|-----------|------|
| [#4707](https://github.com/librefang/librefang/issues/4707) | Windows 测试失败 | #4682 | 待分析 |
| [#4730](https://github.com/librefang/librefang/issues/4730) | Windows/macOS 测试失败 | #4718 | 待分析 |
| [#4736](https://github.com/librefang/librefang/issues/4736) | CI cancelled | #4712 | 超时或资源限制 |

---

## 6. 功能请求与路线图信号

### 🎯 高价值功能提案

| Issue | 标题 | 需求分析 | 对应 PR |
|-------|------|---------|---------|
| [#3335](https://github.com/librefang/librefang/issues/3335) | Resumable workflows with mid-pipeline approval | **路线图核心** - 支持长时间任务中断恢复，#4710/#4716 为前置依赖 | [#4725](https://github.com/librefang/librefang/pull/4725) |
| [#3329](https://github.com/librefang/librefang/issues/3329) | Memory wiki: durable knowledge vault | **已实现 v1** - Obsidian 导出，#4712 已合并 | ✅ Done |
| [#3332](https://github.com/librefang/librefang/issues/3332) | Remote/managed tool-execution backends (SSH, Modal, Daytona) | **中等优先级** - 多后端支持 | - |
| [#3566](https://github.com/librefang/librefang/issues/3566) | AppState leaks entire kernel surface | **架构重构** - #4726 已实现 trait 抽象 | [#4726](https://github.com/librefang/librefang/pull/4726) |
| [#4702](https://github.com/librefang/librefang/issues/4702) | LlmDriver capability metadata + capability-aware FallbackChain | **LLM 路由增强** - 避免不支持 vision 的模型处理图像请求 | - |
| [#4664](https://github.com/librefang/librefang/issues/4664) | Websearch config missing in GUI | **UI 功能补全** - #4711 已修复 TOML 验证问题 | [#4711](https://github.com/librefang/librefang/pull/4711) |

### 📈 功能采纳可能性评估

| 功能 | 可能性 | 依据 |
|------|--------|------|
| Workflow 断点续传 | ⭐⭐⭐⭐⭐ | #4710 已合并基础设施，#4725 进行中 |
| Memory Wiki | ⭐⭐⭐⭐⭐ | v1 已发布，持续迭代中 |
| KernelApi Trait 抽象 | ⭐⭐⭐⭐⭐ | #4726 进行中，解决架构债务 |
| 远程工具执行后端 | ⭐⭐⭐ | 需求明确但实现复杂 |
| Capability-aware LLM Fallback | ⭐⭐⭐ | 提升可靠性，建议跟进 |

---

## 7. 用户反馈摘要

### 👤 @AIHunter83（GCP Free Tier 用户，多日活跃反馈）

**痛点汇总**：
- 🚨 **部署可靠性**：GCP 免费层部署后出现多个功能异常（Hands 为空、插件报错、终端断开）
- 🚨 **配置保存失败**：无法通过 UI 保存配置
- 💡 **期望**：提供更健壮的 GCP 免费层部署指南或资源限制说明

**相关 Issues**: [#4684](https://github.com/librefang/librefang/issues/4684), [#4686](https://github.com/librefang/librefang/issues/4686), [#4674](https://github.com/librefang/librefang/issues/4674), [#4675](https://github.com/librefang/librefang/issues/4675), [#4680](https://github.com/librefang/librefang/issues/4680)

### 👤 @fbnielsen1959

**痛点**：
- 🔧 **Web Search 配置缺失**：新版 GUI 无法配置 SearXNG，影响搜索功能
- 🔧 **认证问题**：`librefang restart` 返回 401 Unauthorized

**已有回应**：#4711 已修复 restart 401 问题

### 👤 @DaBlitzStein（贡献者）

**发现的安全/可靠性问题**：
- 🔒 Provider API key 在 daemon 重启后丢失（#4701）
- 🔒 SSRF 验证漏洞（#4732）
- ⚡ N+1 查询性能问题（#4722）
- 🔄 工作流优雅关闭丢失（#4715 → #4716）

---

## 8. 待处理积压

以下 Issues/PRs 超过 48 小时无响应或需要维护者关注：

### ⏳ 需维护者响应

| Issue/PR | 标题 | 等待时间 | 优先级 | 备注 |
|----------|------|---------|--------|------|
| [#4684](https://github.com/librefang/librefang/issues/4684) | Hands page empty on GCP | 1 天 | High | 用户报告，需复现/定位 |
| [#4686](https://github.com/librefang/librefang/issues/4686) | Plugins error on GCP | 1 天 | High | 与 #4684 可能同根因 |
| [#4664](https://github.com/librefang/librefang/issues/4664) | Websearch config missing | 2 天 | Medium | Part 2 已修，Part 1 需确认 |
| [#4701](https://github.com/librefang/librefang/issues/4701) | Provider key lost on restart | <1 天 | Critical | 安全问题，需优先处理 |
| [#4732](https://github.com/librefang/librefang/issues/4732) | SSRF validation gaps | <1 天 | Critical | 安全问题，需优先处理 |

### 🔧 需合并的大 PR

| PR | 标题 | 状态 |

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# openfang 项目动态日报

**报告日期：** 2026-05-07  
**项目仓库：** [RightNow-AI/openfang](https://github.com/RightNow-AI/openfang)

---

## 1. 今日速览

2026-05-07，openfang 项目保持稳定活跃态势，共产生 **3 条 Issues** 和 **3 条 PRs** 更新。今日主要焦点集中在 Web 前端体验改进：LaTeX 数学公式渲染问题已由社区快速响应并提交修复 PR（#1168），同时 Docker 容器环境变量传递（#1169）作为严重级 Bug 被报告。整体项目健康度良好，PR 合并率为 33%（1/3），积压未关闭 PR 2 个，无新版本发布。

---

## 2. 版本发布

> 本日无新版本发布

---

## 3. 项目进展

### ✅ 已合并 PR

| PR 编号 | 标题 | 贡献者 | 关键变更 |
|---------|------|--------|----------|
| [#644](https://github.com/RightNow-AI/openfang/pull/644) | Fix GHCR package visibility for public pulls (v2) | @dgenio | 为 Dockerfile 添加 OCI 标准标签（source、description、licenses），解决 GitHub Container Registry 公私拉取权限问题 |

**点评：** #644 解决了长期影响用户从 GHCR 拉取镜像的可见性问题，使容器包能自动关联源码仓库，提升了开源分发的可发现性。

### 🔄 待合并 PR

| PR 编号 | 标题 | 贡献者 | 状态 |
|---------|------|--------|------|
| [#1168](https://github.com/RightNow-AI/openfang/pull/1168) | fix: render LaTeX math in chat messages | @nimitbhardwaj | OPEN |
| [#1166](https://github.com/RightNow-AI/openfang/pull/1166) | Add 'native-tls' feature to reqwest dependency | @crust3780 | OPEN |

**点评：** #1168 修复了前端 LaTeX 渲染问题，通过更新 CSP 策略引入 jsdelivr CDN 并添加 MutationObserver 实现动态渲染，社区响应迅速。#1166 为 reqwest 依赖启用 native-tls，提升 TLS 握手兼容性。

---

## 4. 社区热点

### 🔥 最活跃讨论

| 类型 | 编号 | 标题 | 评论数 | 关键诉求 |
|------|------|------|--------|----------|
| Issue | [#1167](https://github.com/RightNow-AI/openfang/issues/1167) | LaTeX/Mathematical Equations Not Rendering | 1 | 期望在 Web Dashboard 中正确渲染数学公式 |
| Issue | [#1165](https://github.com/RightNow-AI/openfang/issues/1165) | Feature to send the File on Chat | 0 | 请求在 Web 界面下载 Agent 生成的文件 |
| PR | [#1168](https://github.com/RightNow-AI/openfang/pull/1168) | fix: render LaTeX math in chat messages | - | 已同步提交修复方案 |

**热点分析：** 本日社区焦点集中在 **Web 前端交互体验**。LaTeX 渲染问题（#1167）引发关注，用户在 Markdown 场景下依赖数学公式进行知识输出，该 Bug 直接影响学术/技术场景使用。同期 #1168 PR 已提出修复，体现了社区快速闭环能力。

---

## 5. Bug 与稳定性

### 🐛 今日报告 Bug

| 严重度 | 编号 | 标题 | 已有 Fix PR? |
|--------|------|------|---------------|
| ⚠️ **高** | [#1169](https://github.com/RightNow-AI/openfang/issues/1169) | shell_exec 在 Docker 中环境变量丢失 | ❌ 无 |
| 🟡 **中** | [#1167](https://github.com/RightNow-AI/openfang/issues/1167) | LaTeX 数学公式不渲染 | ✅ #1168 |

**Bug 详情：**

- **#1169 高优先级：** Docker 环境下 `shell_exec` 子进程仅接收最小环境变量（HOME/PATH/PWD），尽管主进程拥有完整环境且配置了 passthrough allowlists。此问题可能导致依赖环境变量的 Agent 行为异常。**建议维护者优先关注**。

- **#1167 中优先级：** OpenFang Web 界面无法渲染 Markdown 中的 LaTeX 公式（`$...$` / `$$...$$`），显示为原始文本。#1168 PR 已提交修复，正在 review 中。

---

## 6. 功能请求与路线图信号

### 💡 新功能请求

| 编号 | 标题 | 诉求摘要 | 实现可能性 |
|------|------|----------|------------|
| [#1165](https://github.com/RightNow-AI/openfang/issues/1165) | Feature to send the File on Chat | Agent 生成的文件（如 markdown assets）无法从 Web 界面下载，UI 提示需从文件位置获取 | 🔄 已有明确需求，建议纳入下版本规划 |

**路线图信号分析：** 今日功能请求聚焦于 **文件下载/传输能力**，反映了用户对 Agent 生成物就地消费的诉求。结合 #1166（reqwest native-tls）PR，项目方正在强化网络请求层兼容性，可能为后续文件服务能力做铺垫。

---

## 7. 用户反馈摘要

### 用户痛点提取

| 来源 | 痛点描述 | 场景 |
|------|----------|------|
| [#1169](https://github.com/RightNow-AI/openfang/issues/1169) | Docker 运行时环境变量被剥离，导致依赖环境配置的 Agent 脚本失效 | 生产环境部署、科研计算任务 |
| [#1165](https://github.com/RightNow-AI/openfang/issues/1165) | 无法从 Web UI 下载 Agent 生成的文件，增加使用摩擦 | 文档处理、多步骤 Agent 工作流 |
| [#1167](https://github.com/RightNow-AI/openfang/issues/1167) | LaTeX 公式无法渲染影响知识输出质量 | 学术写作、技术文档编写 |

**用户情绪：** 用户反馈整体偏正面，LaTeX 问题从报告到 PR 修复用时不足 24 小时，体现了社区活跃度。Docker 环境变量问题引发担忧，用户期待稳定的环境隔离同时保留必要的配置传递能力。

---

## 8. 待处理积压

### ⏳ 需关注的长期待处理项

| 编号 | 类型 | 标题 | 创建时间 | 积压天数 | 状态 |
|------|------|------|----------|----------|------|
| [#1169](https://github.com/RightNow-AI/openfang/issues/1169) | Issue | shell_exec 环境变量丢失 Bug | 2026-05-07 | **今日新增** | OPEN，0 评论 |
| [#1166](https://github.com/RightNow-AI/openfang/pull/1166) | PR | Add 'native-tls' feature | 2026-05-06 | 1 天 | OPEN |

**积压提醒：**

- **#1169 需维护者快速响应**：该 Bug 影响生产部署，今日报告尚未有评论跟进，建议优先确认复现步骤并定位问题根因（subprocess env-clear 问题）。
- **#644 已合并**：长期积压的 GHCR 可见性问题已于今日解决归档，项目基础设施完善度提升。

---

## 📊 关键指标一览

| 指标 | 数值 | 趋势 |
|------|------|------|
| 今日新增 Issues | 3 | ↔️ 持平 |
| 今日新增 PRs | 3 | ↔️ 持平 |
| PR 合并率 | 33% (1/3) | 🟢 正常 |
| 未关闭高优先级 Bug | 1 | ⚠️ 需关注 |
| 待合并 PRs | 2 | 🔄 正常流转 |

---

**报告生成时间：** 2026-05-07 08:00 (UTC)  
**数据来源：** GitHub API + 项目首页  
**免责声明：** 本报告基于公开数据生成，分析结论仅供参考。

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*