# OpenClaw 生态日报 2026-05-13

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-13 02:37 UTC

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

# OpenClaw 项目日报 | 2026-05-13

## 1. 今日速览

OpenClaw 项目在过去 24 小时内保持极高活跃度，共产生 **500 条 Issues 更新**（429 新开/活跃，71 关闭）和 **500 条 PR 更新**（469 待合并，31 已合并/关闭）。项目发布了 **3 个 beta 版本**（v2026.5.12-beta.1/2/3），主要修复了 Codex harness 认证、WhatsApp pnpm 11 兼容性和 memory-wiki 权限问题。社区讨论热度持续攀升，Slack 连接丢失（16 评论）、QA 工具套件设计（14 评论）等议题引发广泛关注。当前项目整体状态健康，版本迭代节奏稳定向好。

---

## 2. 版本发布

### 🆕 v2026.5.12-beta.1 / beta.2 / beta.3

**发布类型**：Beta 测试版本（连续发布，快速迭代）

#### 主要修复内容

| 类别 | 修复项 | 说明 |
|------|--------|------|
| **Codex** | auth-profile-backed media tools | 当 OpenAI 认证存储在 agent 的 auth-profile 而非环境变量时，保持 `image_generate` 等媒体工具可用 |
| **WhatsApp** | pnpm 11 兼容性 | 允许 Baileys 的 pinned libsignal git 子依赖在 pnpm 11 下进行源码安装 |
| **memory-wiki** | 权限范围修复 | 对 ingest 操作要求 admin scope，对 Obsidian 搜索要求 write scope (#80897, #80904) |
| **Build** | 插件元数据处理 | 对已排除构建条目的打包插件，跳过复制的元数据，防止 update/status 异常 |

**迁移注意事项**：无破坏性变更，beta 版本面向测试用户，建议生产环境暂缓升级。

---

## 3. 项目进展

### ✅ 今日已合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 影响力 |
|------|------|------|--------|
| #80777 | 修复 config-audit.jsonl 中明文 token 永不清理问题 | ✅ CLOSED | 🔴 高 - 安全修复 |
| #80437 | Discord native-slash-command-deploy 回归修复 | ✅ CLOSED | 🟡 中 - 功能修复 |
| #70856 | WhatsApp listener 断开/停滞回归修复 | ✅ CLOSED | 🟡 中 - 稳定性修复 |
| #72867 | Telegram 会话回复失败修复 | ✅ CLOSED | 🟡 中 - 渠道修复 |
| #64384 | 预压缩快速路径 token 阈值门控 | 🔄 OPEN | 🟡 中 - 性能优化 |
| #64375 | cron/every 调度删除逻辑修复 | 🔄 OPEN | 🟢 低 - 行为修正 |
| #64316 | Bundle MCP 运行时中便会话重置释放 | 🔄 OPEN | 🟡 中 - 资源管理 |
| #64234 | PII 脱敏与 AES-256-GCM 静态加密 | 🔄 OPEN | 🔴 高 - 隐私安全 |

**重点推进方向**：
- **隐私安全**：`#64234` 正在推进 PII 检测与加密功能，覆盖 6 类敏感数据（邮箱、电话、SSN、信用卡、IP、UUID）
- **多渠道稳定性**：Slack、WhatsApp、Telegram 三大主要渠道均有修复进入合并阶段
- **权限模型完善**：memory-wiki 的 scope 层级现已明确分离

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

#### 1. **Slack 连接静默丢失** 
📌 [#72808](https://github.com/openclaw/openclaw/issues/72808) | 16 评论 | 2 👍 | 🔴 高优先级

**核心诉求**：用户报告 Slack 连接在正常使用数天后突然无响应，无任何错误日志。需要调查连接保持机制。

---

#### 2. **QA 工具默认套件设计争议**
📌 [#80319](https://github.com/openclaw/openclaw/issues/80319) | 14 评论 | 1 👍

**核心诉求**：Codex 原生工具与 OpenClaw 动态工具同质化问题引发讨论，社区澄清了架构设计：Codex 保持 `read/write/edit/apply_patch` 等原生能力，OpenClaw 提供运行时兼容层。

---

#### 3. **SQLite 会话/转录本接口需求**
📌 [#79902](https://github.com/openclaw/openclaw/issues/79902) | 12 评论 | 2 👍 | ⭐ 路线图信号

**核心诉求**：要求在数据库优先的新运行时之上提供 SQLite 格式的转录本/会话导出，让高级用户能基于规范数据构建外部工具，打破对内部 blob 格式的依赖。

---

#### 4. **Codex vs Pi 运行时一致性追踪**
📌 [#80171](https://github.com/openclaw/openclaw/issues/80171) | 11 评论 | 1 👍

**核心诉求**：OpenClaw 正转向 Codex 作为默认运行时，维护者正在建立 QA 框架追踪 Pi 工具与 Codex 工具的覆盖差异。

---

#### 5. **Control UI 回复重复渲染**
📌 [#72341](https://github.com/openclaw/openclaw/issues/72341) | 4 评论 | 2 👍

**核心诉求**：WebChat 中工具调用之间的助手文本被累积渲染为重复卡片而非刷新内容。

---

## 5. Bug 与稳定性

### 🔴 严重 Bug（高影响/崩溃/回归）

| Issue # | 标题 | 严重度 | 状态 | Fix PR |
|---------|------|--------|------|--------|
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | Slack 连接静默丢失 | 🔴 高 | OPEN | - |
| [#73303](https://github.com/openclaw/openclaw/issues/73303) | Gateway 重启挂起 3-4 分钟 | 🔴 高 | CLOSED | - |
| [#73874](https://github.com/openclaw/openclaw/issues/73874) | Windows+Docker HTTP/WS 死锁 | 🔴 高 | OPEN | - |
| [#81214](https://github.com/openclaw/openclaw/issues/81214) | 2026.5.7 子代理回归（Ollama） | 🔴 高 | OPEN | - |
| [#80777](https://github.com/openclaw/openclaw/issues/80777) | 明文 token 永不清理 | 🔴 高(安全) | CLOSED | ✅ |
| [#78435](https://github.com/openclaw/openclaw/issues/78435) | Slack start-account 阻塞事件循环 5+ 分钟 | 🔴 高 | OPEN | - |

### 🟡 中等 Bug（功能异常/回归）

| Issue # | 标题 | 严重度 | 状态 | Fix PR |
|---------|------|--------|------|--------|
| [#72879](https://github.com/openclaw/openclaw/issues/72879) | thought_signature 400 回归 | 🟡 中 | OPEN | - |
| [#80437](https://github.com/openclaw/openclaw/issues/80437) | Discord slash-command 部署失败 | 🟡 中 | CLOSED | ✅ |
| [#73148](https://github.com/openclaw/openclaw/issues/73148) | Image tool sharp 缺失报错不明确 | 🟡 中 | OPEN | - |
| [#71127](https://github.com/openclaw/openclaw/issues/71127) | 卡住会话检测但不中止 | 🟡 中 | OPEN | - |
| [#71178](https://github.com/openclaw/openclaw/issues/71178) | 更新时消息丢失（Telegram/Discord） | 🟡 中 | OPEN | - |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) | Chrome 扩展中继移除（跨机器） | 🟡 中 | OPEN | - |

### 🟢 低优先级（体验/边缘）

| Issue # | 标题 | 状态 |
|---------|------|------|
| [#71992](https://github.com/openclaw/openclaw/issues/71992) | Control UI 回复重复 | OPEN |
| [#71412](https://github.com/openclaw/openclaw/issues/71412) | stopChannel 超时留下僵尸任务 | OPEN |
| [#71417](https://github.com/openclaw/openclaw/issues/71417) | agent 默认 resume 最近会话无提示 | OPEN |

---

## 6. 功能请求与路线图信号

### 🚀 高价值功能请求（有望纳入下一版本）

#### 1. **SQLite 转录本/会话导出接口**
📌 [#79902](https://github.com/openclaw/openclaw/issues/79902) | 12 评论 | 2 👍

**判断依据**：与数据库优先的新运行时战略契合，已有明确实现思路，可能在近期版本中推进。

---

#### 2. **模型定价 API 暴露给插件**
📌 [#64436](https://github.com/openclaw/openclaw/pull/64436) | 🔄 OPEN

**判断依据**：PR 状态，添加 `runtime.usage` 命名空间，让上下文引擎插件能基于真实定价计算成本，而非硬编码估算。

---

#### 3. **多 Azure/Teams Bot 支持**
📌 [#71058](https://github.com/openclaw/openclaw/issues/71058) | 4 评论 | 1 👍

**判断依据**：企业场景强需求，当前架构限制了多租户场景。

---

#### 4. **macOS Talk Mode OpenAI Realtime 支持**
📌 [#71195](https://github.com/openclaw/openclaw/issues/71195) | 5 评论 | 1 👍

**判断依据**：对标 voice-call 插件的语音体验，要求亚秒级延迟。

---

#### 5. **AWS 统一插件（Polly TTS + Transcribe STT + Nova Sonic）**
📌 [#64318](https://github.com/openclaw/openclaw/pull/64318) | 🔄 OPEN

**判断依据**：PR 阶段，功能完整，覆盖 AWS 语音全家桶。

---

#### 6. **会话车道并发可配置**
📌 [#63864](https://github.com/openclaw/openclaw/pull/63864) | 🔄 OPEN

**判断依据**：PR 阶段，解决 Telegram 等高频渠道的感知延迟问题。

---

#### 7. **PII 脱敏与加密**
📌 [#64234](https://github.com/openclaw/openclaw/pull/64234) | 🔄 OPEN

**判断依据**：安全功能大势所趋，覆盖工具输出、用户消息、TTS 文本等全链路。

---

## 7. 用户反馈摘要

### 💬 用户痛点提炼

| 场景 | 反馈 | 来源 |
|------|------|------|
| **Slack 生产环境** | 连接数天后静默断开，demo 时无法恢复，严重影响用户信任 | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| **Windows Server** | Gateway 不稳定、GUI/CLI 响应缓慢 | [#72922](https://github.com/openclaw/openclaw/issues/72922) |
| **Claude 推理成本** | 默认推理开启导致 Anthropic 账单翻倍 | [#73182](https://github.com/openclaw/openclaw/issues/73182) |
| **插件配置** | policy-locked sandbox 中插件配置无法热更新，需重建镜像 | [#72950](https://github.com/openclaw/openclaw/issues/72950) |
| **活跃内存插件** | 多代理网关下阻塞回复、QMD 启动过载 | [#72015](https://github.com/openclaw/openclaw/issues/72015) |
| **WhatsApp 群组** | 自动回复生成但从不投递 | [#80669](https://github.com/openclaw/openclaw/issues/80669) |

### ✅ 用户正面反馈

| 方面 | 反馈 |
|------|------|
| **功能完整性** | 对 Codex 工具表面与 Pi 工具的兼容性框架表示认可 |
| **社区响应** | 多位贡献者（@pgondhi987, @YB0y 等）的 fix 获得快速 merge |

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue（超过 2 周无维护者回复）

| Issue # | 标题 | 创建时间 | 关注度 | 建议 |
|---------|------|----------|--------|------|
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | sandbox workspaceAccess=none 时仍为只读 | 2026-03-06 | 4 👍 | 高优先，破坏隔离预期 |
| [#37487](https://github.com/openclaw/openclaw/issues/37487) | 多隔离浏览器实例+代理支持 | 2026-03-06 | 4 👍 | 复杂功能，需路线图确认 |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | 会话车道饥饿，20-30 分钟阻塞 | 2026-03-25 | 0 👍 | 🔴 高影响 |
| [#58730](https://github.com/openclaw/openclaw/issues/58730) | exec() 沙箱隔离模型（Claude Code 泄露分析） | 2026-04-01 | 4 👍 | 安全相关 |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | Safeguard compaction 忽略配置模型 | 2026-03-30 | 0 👍 | 账单影响 |

### 📋 建议优先处理

1. **稳定性优先**：Slack 连接丢失 (#72808)、Gateway 死锁 (#73874)、子代理回归 (#81214)
2. **安全优先**：明文 token 清理 (#80777) 已关闭需确认合入；exec 沙箱 (#58730)
3. **性能优先**：会话车道饥饿 (#54488)、活跃内存过载 (#72015)

---

## 📊 数据一览

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃数 | 500 条/24h | ➡️ 持平 |
| PRs 活跃数 | 500 条/24h | ➡️ 持平 |
| 新版本 | 3 个 beta | ⬆️ 加速迭代 |
| 关键 Bug 存量 | ~15 个 OPEN | ➡️ 持平 |
| 高价值 PR | ~10 个 OPEN | ⬆️ 稳步推进 |

---

*报告生成时间：2026-05-13 | 数据来源：GitHub OpenClaw 仓库*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-05-13**

---

## 1. 生态全景

2026年5月中旬，个人 AI 助手/自主智能体开源生态呈现**极度活跃但高度分化**的态势。生态内项目在数量上已形成完整层级——从日均 500+ PR 的头部项目（OpenClaw、hermes-agent）到近乎静默的边缘项目（TinyClaw、EasyClaw），跨越两个数量级的活跃度差距揭示了生态内部资源分配的高度不均衡。**技术演进方向趋于收敛**：多模型容灾（fallback chain）、上下文压缩优化、安全沙箱强化、渠道适配层标准化是跨项目的共同焦点，反映出行业正在从"功能堆砌期"向"工程成熟期"过渡。值得关注的是，同一领域出现了多个 fork 或独立实现（如 OpenClaw/NanoClaw/IronClaw/Zeroclaw/PicoClaw 系列），这些项目虽共享相似的核心理念，但在安全模型、渠道策略、记忆系统等关键模块上已出现显著路线分歧，生态内部的竞争与整合信号值得持续追踪。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 待合并 PR | Release (今日) | 综合健康度 | 所处阶段 |
|------|-------------|----------|-----------|--------------|-----------|---------|
| **OpenClaw** | 500 | 500 | ~469 | 3 个 beta | 🟢 优秀 | 快速迭代 + 质量巩固并进 |
| **hermes-agent** | 196 | 500 | ~319 | 无 | 🟡 承压 | 高活跃但 P1 Bug 积压严重 |
| **openfang** | 50 | 41 | ~7 | 5 个 patch (v0.6.5–v0.6.9) | 🟢 优秀 | 安全修复 + 企业功能冲刺 |
| **Zeroclaw** | 10 | 50 | ~32 | 无（v0.8.0 draft） | 🟡 中 | Schema v3 迁移高压期 |
| **IronClaw** | 29 | 50 | ~24 | 无 | 🟡 中 | Reborn 架构收尾 + P1 Bug 需处理 |
| **QwenPaw** | 28 | 39 | ~12 | 1 个 beta (v1.1.7-beta.1) | 🟢 良好 | 功能完善 + Bug 修复并行 |
| **NanoBot** | 6 | 18 | ~9 | 无 | 🟢 良好 | 稳定迭代，合并率 50% |
| **NanoClaw** | 4 | 20 | ~15 | 无 | 🟡 中 | 功能推进为主，安全修复待审 |
| **LobsterAI** | 0 | 26 | ~1 | 无 | 🟢 优秀 | UI/UX 完善期，零未关闭 Bug |
| **PicoClaw** | 17 | 15 | ~12 | 1 个 Nightly | 🟡 中 | 安全漏洞需优先合并 |
| **LibreFang** | 37 | 37 | ~12 | 1 个 beta (v2026.5.12-beta.11) | 🟡 承压 | 高吞吐但 CI 不稳定，Bug 较多 |
| **Moltis** | 1 | 0 | 0 | 无 | 🔴 低 | 近乎停滞，1 个 UI Bug 待修 |
| **ZeptoClaw** | 0 | 3 | 2 | 无 | 🟢 低维护 | 纯依赖维护，无功能开发 |
| **TinyClaw** | 0 | 0 | 0 | 无 | ⚫ 静默 | 过去 24 小时零活动 |
| **EasyClaw** | 0 | 0 | 0 | 无 | ⚫ 静默 | 过去 24 小时零活动 |

> **活跃度分级**：🟢 高活跃（Issues+PRs ≥ 40/日 或 Issue ≥ 100 且 PR ≥ 200）| 🟡 中活跃（10–40/日）| 🔴 低活跃（1–10/日）| ⚫ 静默（0）

---

## 3. OpenClaw 在生态中的定位

### 3.1 绝对规模优势

OpenClaw 以 **500 Issues + 500 PRs / 24h** 的吞吐量稳居生态第一梯队，其日均 PR 量与 hermes-agent 并列第一，是第三名 openfang（41 PRs）的 **12 倍**。这种规模优势使其在社区影响力、功能覆盖广度上构成事实上的行业参照系——几乎所有其他 Claw 系列项目（NanoClaw、IronClaw、Zeroclaw、PicoClaw）在架构设计、功能命名、Issue 讨论中均以 OpenClaw 为基准点。

### 3.2 技术路线差异

| 维度 | OpenClaw | 竞品代表 |
|------|----------|---------|
| **默认运行时** | 转向 Codex 作为默认 | NanoClaw 保持 Pi + Claude Code 双轨 |
| **安全模型** | auth-profile 体系成熟，PII 脱敏推进中（#64234） | Zeroclaw 重度依赖 approval supervised 模式 |
| **渠道策略** | 全渠道覆盖（Slack/WhatsApp/Telegram/Discord） | LobsterAI 专注 IM 集成；IronClaw 侧重 Telegram v2 |
| **记忆系统** | memory-wiki scope 层级明确分离 | LobsterAI 推进 Dreaming 记忆整合 |
| **压缩策略** | 预压缩快速路径 + token 阈值门控（#64384） | LibreFang 推行 dual-layer compression + 结构化摘要 |
| **发布节奏** | beta 连续快速迭代（3版/日） | 大部分项目以正式 release 为主 |

### 3.3 社区规模对比

OpenClaw 的社区规模优势体现在多个维度：Slack 连接丢失问题单条 Issue 获得 **16 条评论**，多渠道 QA 工具讨论 **14 条评论**，均显著高于同类项目平均讨论量。这表明 OpenClaw 不仅贡献者众多，最终用户基数也更大——这是 fork 项目难以复制护城河的核心所在。

---

## 4. 共同关注的技术方向

以下技术方向在**至少 3 个以上项目**中同步出现明确的 Issue 或 PR，反映出行业共识性需求：

### 🔴 高优先级共性需求

| 技术方向 | 涉及项目 | 具体诉求 | 对应 Issue/PR |
|---------|---------|---------|--------------|
| **多模型容灾 / Fallback Chain** | OpenClaw、NanoBot、QwenPaw | 主模型故障时自动切换 fallback models，避免生产环境单点失效 | OpenClaw #64384、NanoBot #3756、QwenPaw #4256 |
| **上下文压缩优化** | hermes-agent、NanoBot、LibreFang、OpenClaw | 现有压缩策略过于激进导致上下文灾难性丢失，需 per-model 可配置阈值 | hermes #22944、LibreFang #4972、OpenClaw #64384 |
| **PII / 敏感数据安全处理** | OpenClaw、NanoClaw、IronClaw、hermes-agent | 全链路 PII 检测、脱敏与加密，覆盖 6 类敏感数据 | OpenClaw #64234、NanoClaw #2434（OneCLI 安全暴露）、hermes #24725（SQL 注入修复）|
| **WebSocket/SSE 连接稳定性** | OpenClaw、Zeroclaw、openfang | 连接静默丢失（Slack）、断线重连失败（Dashboard）、心跳机制缺失 | OpenClaw #72808、openfang #1179 |
| **模型能力自动探测** | NanoBot、hermes-agent、LibreFang | 自动识别模型是否支持 thinking/reasoning 模式，避免注入不兼容参数 | NanoBot #3753/3760、hermes #24119、LibreFang #4968 |

### 🟡 中等优先级共性需求

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **LDAP/SSO 企业认证** | openfang、IronClaw | 企业多租户场景下的目录认证需求 |
| **SearXNG 隐私搜索** | hermes-agent、Zeroclaw、NanoBot | DuckDuckGo 缺少 CAPTCHA 检测，需隐私导向替代方案 |
| **记忆系统架构演进** | OpenClaw、LobsterAI、hermes-agent、IronClaw | 从扁平文本存储向认知记忆（矛盾检测、置信度感知检索）演进 |
| **工具审批 / Human-in-the-loop** | Zeroclaw、OpenClaw、LibreFang | supervised 模式工具执行确认、审批超时延长 |
| **多渠道统一路由** | openfang、OpenClaw、Zeroclaw | 基于 thread_id / bot_id 的多租户路由体系 |
| **容器 / 沙箱安全** | PicoClaw、NanoClaw、OpenClaw | 工作区沙箱绕过（`find /` 枚举文件系统）、权限边界修复 |

---

## 5. 差异化定位分析

### 5.1 功能侧重差异

| 项目 | 核心差异化功能 | 技术亮点 |
|------|--------------|---------|
| **OpenClaw** | Codex 原生工具 + 动态工具兼容层 | Codex runtime 迁移、auth-profile 体系、多渠道覆盖 |
| **NanoBot** | 飞书话题隔离开关、VolcEngine/Bedrock provider | 工具插件自描述架构（ToolLoader 自动发现） |
| **Zeroclaw** | ACP 会话持久化（SQLite）、Schema v3 迁移 | 速率限制统一守卫模式、RunPod ComfyUI 集成 |
| **hermes-agent** | 上下文窗口验证、认知记忆系统 | TOCTOU 竞态修复批量提交、Electron 桌面应用原型 |
| **LibreFang** | Workflow Engine GA、多租户支持 | `web_fetch_to_file`、provider-aware token budget |
| **openfang** | RUST 安全修复、多 Bot 路由 | 2657 tests 通过、zero clippy 警告、per-agent file_policy |
| **LobsterAI** | Dreaming 记忆整合、多 Agent 独立工作目录 | macOS 语音输入多层 fallback、中文路径兼容 |
| **QwenPaw** | ACP SDK 集成、浏览器 idle 看门狗 | MCP OAuth 2.1 PKCE、Shell 命令可观测性面板 |
| **PicoClaw** | Agent 自进化配置、Intel OpenVINO 本地推理 | Nightly 构建节奏、沙箱绕过安全修复 |

### 5.2 目标用户分层

| 用户类型 | 推荐项目 | 理由 |
|---------|---------|------|
| **企业级多租户部署** | openfang（LDAP认证）、IronClaw（WeChat/Telegram v2） | 安全合规、企业认证、多渠道支持成熟 |
| **多模态/语音交互** | LobsterAI（macOS 语音）、QwenPaw（Telegram 流式） | 跨平台兼容、UX 细节打磨 |
| **本地部署/隐私优先** | PicoClaw（OpenVINO）、NanoBot（自托管） | 本地推理、工具插件化扩展 |
| **快速原型 / 开发者友好** | NanoClaw（pnpm run dev）、OpenClaw（生态最全） | 轻量启动、文档完善、社区活跃 |
| **工作流自动化** | LibreFang（Workflow Engine GA） | 多步骤工作流原生支持、human-in-the-loop |

### 5.3 技术架构关键差异

```
OpenClaw        → Codex-first runtime + 全渠道适配 + auth-profile 安全体系
hermes-agent    → 上下文验证优先 + 认知记忆路线图 + Electron 桌面扩展
openfang        → Rust 实现 + 2657 测试保障 + per-agent file_policy 分层
LibreFang       → Workflow Engine 原生 + 多租户 kernel 设计
IronClaw        → Reborn 架构重构 + Telegram v2 ProductAdapter
NanoBot         → 工具插件自描述 + 多 provider 抽象层
LobsterAI       → Electron 桌面 + 多 Agent 独立工作目录
QwenPaw         → ACP 协作框架 + 浏览器工具链稳定化
PicoClaw        → 轻量二进制 + 自进化配置 + 本地推理
Zeroclaw        → ACP 会话持久化 + Schema v3 迁移高压期
```

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|------|------|------|---------|
| **🔴 超级活跃** | OpenClaw, hermes-agent | 日均 500+ PR/Issue，吞吐量远超维护能力，存在 PR 积压 | **快速迭代期**（风险：质量管控可能滞后）|
| **🟠 高度活跃** | openfang, Zeroclaw, IronClaw, QwenPaw, LibreFang | 日均 20–100 PR/Issue，功能推进与稳定性修复并行 | **快速迭代期**（openfang 已进入质量巩固信号）|
| **🟡 中等活跃** | NanoBot, NanoClaw, PicoClaw, LobsterAI | 日均 5–30 PR/Issue，合并率稳定，路线图清晰 | **稳定迭代期** |
| **🔵 低活跃 / 维护态** | Moltis, ZeptoClaw | 几乎无新功能开发，以依赖维护为主 | **维护态** |
| **⚫ 静默** | TinyClaw, EasyClaw | 零活动，可能已停止维护 | **已停止或休眠** |

### 6.2 成熟度信号

**进入质量巩固阶段的项目**（表现出明确的稳定性优先信号）：

- **openfang**：2657 tests + zero clippy warnings，紧急安全修复当日完成（v0.6.8→v0.6.9）
- **LobsterAI**：今日所有 Bug 均已提供 fix，无未关闭回归问题
- **QwenPaw**：v1.1.7-beta.1 发布，Bug fix 与功能 PR 比例健康

**仍处于功能堆砌期的项目**（稳定性问题显著积压）：

- **hermes-agent**：5 个 P1 Bug 开放，上下文压缩破坏任务连续性（P1）
- **LibreFang**：v2026.5.12-beta.11 引入安全回归（approval 通知广播），CI 稳定性问题突出
- **NanoClaw**：OneCLI 安全暴露高优先级待审，容器挂载静默损坏
- **PicoClaw**：沙箱绕过漏洞 fix PR（#2693）悬空超过 2 周未合并

---

## 7. 值得关注的趋势信号

### 🔮 行业趋势提炼

**趋势 1：多模型容灾从"可选"走向"必选"**
至少 4 个项目（OpenClaw、NanoBot、QwenPaw、LibreFang）同步推进 fallback chain / failover 机制。结合 OpenClaw 的 Slack 连接静默丢失（#72808）和 NanoBot 的 DeepSeek V4 Flash 兼容性问题，"单一模型依赖"的生产风险已被社区广泛认知。预计未来 1–2 个版本，容灾将成为所有主流项目的标配功能。

**趋势 2：安全模型从"外围防线"向"全链路内嵌"演进**
OpenClaw PII 脱敏（#64234）、NanoClaw OneCLI API 暴露（#2434）、hermes-agent SQL 注入正则绕过（#24725）、PicoClaw 沙箱绕过（#2688/#2693）——安全问题从传统的输入验证扩展到会话管理、工具调用、模型输出全链路。这意味着 AI Agent 安全将从"安全插件"向"内核级安全架构"升级。

**趋势 3：Context Window 管理成为新的

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期：** 2026-05-13  
**项目仓库：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
**报告生成时间：** 2026-05-13 08:00 (UTC+8)

---

## 1. 今日速览

过去24小时，NanoBot 项目保持高度活跃态势：共新增 **6 条 Issues**（3 开 3 闭）和 **18 条 PRs**（9 待合并 9 已关闭），整体开发节奏紧凑。今日社区焦点集中在 **DeepSeek V4 Flash 模型兼容性问题**（reasoning_content 字段处理与文件读取）和 **飞书群组话题隔离开关** 功能落地。同时，Runner 层的 Model Failover 能力和 CLI 推理内容展示等重要功能 PR 正在 review 中，预计将为下一版本带来显著的稳定性与用户体验提升。

**核心指标一览：**

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issues | 6 | ↑ 持平 |
| 新增 PRs | 18 | ↑ 上升 |
| 合并率 | 50% (9/18) | → 稳定 |
| 活跃贡献者 | ~12 人 | ↑ 增加 |

---

## 2. 版本发布

**无新版本发布**

今日项目未发布新的 Release。最近一个版本为 [v0.1.5.post3](https://github.com/HKUDS/nanobot/releases)（2026-05 早期），建议用户关注待合并 PR 中涉及的重大功能（如 #3756 Model Failover、#3714 运行时预设切换），这些能力可能在即将到来的版本中释出。

---

## 3. 项目进展

以下为过去24小时内 **已合并/关闭** 的重要 PR，展现项目在配置系统、工具架构、渠道体验等维度的推进：

### ✅ 已关闭 PR（按重要性排序）

| PR # | 类型 | 标题 | 贡献者 | 合并日期 | 亮点 |
|------|------|------|--------|----------|------|
| **#3714** | ✨ feat | ModelPresetConfig 与运行时预设切换 | @chengyongru | 2026-05-12 | 引入命名模型预设机制，支持原子级运行时切换，为多模型场景提供标准化配置基座 |
| **#3729** | 🔧 refactor | 工具系统的插件架构重构 | @chengyongru | 2026-05-12 | 将硬编码的 `_register_default_tools()` (~50行) 重构为自描述插件模式 (~25行)，`ToolLoader` 实现自动发现，降低工具扩展门槛 |
| **#3747** | ✨ feat | 飞书 topic_isolation 配置开关 | @yorkhellen | 2026-05-12 | **社区高频诉求落地**：允许用户选择话题隔离（默认On）或统一会话（Off），解决多文件场景下的对话割裂问题 |
| **#3757** | ♻️ refactor | 移除 ask_user tool 及异常控制流 | @chengyongru | 2026-05-12 | 简化 Agent 控制流，模型以自然语言询问替代专用工具，通过会话历史保持连续性 |
| **#3738** | 🐛 fix | 为 VolcEngine providers 设置 supports_max_completion_tokens | @AlbertWang688 | 2026-05-12 | 修复火山引擎网关同时接受 max_tokens 与 max_completion_tokens 导致请求被拒的问题 |
| **#3635** | 🐛 fix | 软化 SSRF guard 恢复机制 | @Re-bin | 2026-05-12 | 保持私有/内部 URL 的硬边界阻断，但返回非重试工具错误而非中止运行时轮次，提升错误可恢复性 |
| **#3758** | 🐛 fix | 为 Bedrock 保留 history 中的 tool config | @Re-bin | 2026-05-12 | 当对话历史包含 toolUse/toolResult 但当前轮次无活跃工具时，保留 toolConfig 避免 Bedrock Converse 拒绝请求 |
| **#3759** | 🐛 fix | WebUI 加载默认新对话并保留滚动位置 | @XJPeng12 | 2026-05-12 | 改善 WebUI 导航体验，加载时默认进入空白新对话页面，返回设置时恢复滚动位置 |
| **#3755** | 🔧 chore | 清理死代码 (vulture + coverage 验证) | @chengyongru | 2026-05-12 | 通过三阶段验证流程（静态扫描→动态引用确认→覆盖率交叉验证）移除 5 项死代码（103行） |

**本周合并 PR 数量累计：23 条**（截至 2026-05-13），项目迭代速度保持在较高水平。

---

## 4. 社区热点

### 🔥 今日最活跃讨论

**1. DeepSeek V4 Flash 模型兼容性问题集中爆发**

同一用户 **@renyizhongguo** 在两日内连续提交 **3 个 Issue**，均围绕 DeepSeek V4 Flash 模型展开，成为今日最大热点：

| Issue # | 类型 | 标题 | 评论数 | 状态 |
|---------|------|------|--------|------|
| [#3760](https://github.com/HKUDS/nanobot/issues/3760) | 🐛 bug | `reasoning_content` 导致 400 错误 (invalid_request_error) | 1 | 🟡 OPEN |
| [#3753](https://github.com/HKUDS/nanobot/issues/3753) | 🐛 bug | reasoning_content 必传但未回传 | 1 | 🟢 CLOSED |
| [#3754](https://github.com/HKUDS/nanobot/issues/3754) | 🐛 bug | 模型忽略外部文件内容 | 1 | 🟡 OPEN |

**问题本质：** v0.1.5.post3 对所有模型自动注入 `reasoning_content` 字段，但 DeepSeek V4 Flash 在 thinking 模式下要求该字段必须由模型生成并回传，导致第一轮对话即报 400 错误。用户已找到临时方案（切换到 deepseek-chat 或禁用 thinking_style），但期望自动检测模型能力。

**社区诉求：** 期望 NanoBot 具备模型能力自动探测机制，避免向不支持 thinking 模式的模型注入不兼容参数。

---

**2. 飞书群组话题隔离开关讨论**

Issue [#3692](https://github.com/HKUDS/nanobot/issues/3692) 由 @sonicrang 于 5月8日 提出，描述多文件场景下飞书群组强制话题隔离导致的体验割裂问题。该 Issue 已通过 PR #3747 解决，今日正式合并。评论数 1 👍1。

---

**3. 会话中断上下文丢失问题**

Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689)（@lyh161）提出：当用户打断 NanoBot 的循环执行并让其重新开始时，模型会丢失上一轮对话的上下文，无法定位"测试"任务的当前进度。该 Issue 获得 **5 条评论**，是今日评论最多的讨论，体现了用户对 Agent 状态保持能力的强需求。

**链接：** https://github.com/HKUDS/nanobot/issues/3689

---

### 📈 热度 PRs（待合并）

| PR # | 类型 | 标题 | 热度指标 | 预计影响 |
|------|------|------|----------|----------|
| [#3756](https://github.com/HKUDS/nanobot/pull/3756) | ✨ feat | Runner 层 model failover 与 fallback_models | ⭐ 高 | **关键特性**：当主模型返回非瞬态错误且未开始流式输出时，自动切换 fallback chain，大幅提升生产环境稳定性 |
| [#3643](https://github.com/HKUDS/nanobot/pull/3643) | ✨ feat | 新增七牛云 (Qiniu) Provider 支持 | ⭐ 中 | 扩展国内云服务商覆盖，完善多厂商模型调度能力 |
| [#3761](https://github.com/HKUDS/nanobot/pull/3761) | ✨ feat | WhatsApp 打字指示器与表情回应 | ⭐ 中 | 提升 WhatsApp 渠道的交互体验，与 Telegram 保持一致的 UX 标准 |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | ✨ feat | LongTaskTool 多步骤 Agent 任务支持 | ⭐ 高 | 引入元 ReAct 循环，将长任务分解为顺序子步骤，每个子步骤独立运行并保留进度上下文 |

---

## 5. Bug 与稳定性

### 🐛 今日 Bug 报告（按严重程度）

**🔴 高优先级**

| Issue # | 标题 | 严重程度 | 环境 | 状态 | 是否有 Fix PR |
|---------|------|----------|------|------|---------------|
| [#3760](https://github.com/HKUDS/nanobot/issues/3760) | DeepSeek V4 Flash `reasoning_content` 导致 400 错误 | **高** | v0.1.5.post3 + DeepSeek V4 Flash + 腾讯云 Ubuntu 22.04 | 🟡 OPEN | ❌ 待修复 |
| [#3754](https://github.com/HKUDS/nanobot/issues/3754) | 模型忽略外部指定文件内容，自行编造知识 | **高** | v0.1.5.post3 + DeepSeek V4 Flash | 🟡 OPEN | ❌ 待分析 |

> **⚠️ 稳定性预警：** DeepSeek V4 Flash 的两类问题（reasoning_content 字段不兼容 + 文件读取跳过）可能影响大量国内用户。Issue [#3753](https://github.com/HKUDS/nanobot/issues/3753) 已标记 CLOSED，但 [#3760](https://github.com/HKUDS/nanobot/issues/3760) 仍 OPEN，疑似同一问题的不同报告入口，建议维护者合并追踪。

**🟡 中优先级**

| Issue # | 标题 | 严重程度 | 状态 | 备注 |
|---------|------|----------|------|------|
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) | 中断会话丢失上下文 | **中** | 🟡 OPEN | 多轮对话状态保持问题 |

### ✅ 已修复的 Bug

| PR # | 标题 | 修复内容 | 合并日期 |
|------|------|----------|----------|
| [#3738](https://github.com/HKUDS/nanobot/pull/3738) | VolcEngine providers max_completion_tokens 冲突 | 移除冗余参数，解决火山引擎网关拒绝请求 | 2026-05-12 |
| [#3758](https://github.com/HKUDS/nanobot/pull/3758) | Bedrock history tool config 丢失 | 保留 toolConfig 以兼容历史 toolUse/toolResult | 2026-05-12 |
| [#3635](https://github.com/HKUDS/nanobot/pull/3635) | SSRF guard 导致运行时中止 | 返回可恢复错误而非中止轮次 | 2026-05-12 |

---

## 6. 功能请求与路线图信号

### ✨ 今日新功能请求

**1. `/model` 斜杠命令支持**
- **Issue:** [#3742](https://github.com/HKUDS/nanobot/issues/3742) | 🟢 CLOSED
- **诉求：** 支持 `/model` 命令动态切换 Provider 和 Model，当主模型（如 Codex GPT-5.5）在大陆地区不稳定时快速切换
- **状态：** 已关闭，可能已合并或由其他方式覆盖（建议维护者确认）
- **关联 PR：** [#3714](https://github.com/HKUDS/nanobot/pull/3714)（ModelPresetConfig）可能为运行时模型切换提供基础

**2. DeepSeek V4 Flash 能力自动检测**
- **Issue:** [#3753](https://github.com/HKUDS/nanobot/issues/3753) | 🟢 CLOSED
- **诉求：** 自动识别模型是否支持 thinking 模式，避免注入不兼容参数
- **路线图信号：** 当前强制注入 `reasoning_content` 的设计假设所有模型均支持 thinking 模式，建议增加 provider 级别的 capability 声明

**3. 七牛云 Provider 支持**
- **PR:** [#3643](https://github.com/HKUDS/nanobot/pull/3643) | 🟡 OPEN
- **进展：** 新增 Qiniu AI（七牛云）作为模型 Provider，提供 OpenAI-compatible 接口
- **预计合并：** 高可能性（测试覆盖完整）

**4. Atomic Chat 本地 LLM Provider**
- **PR:** [#3750](https://github.com/HKUDS/nanobot/pull/3750) | 🟡 OPEN
- **诉求：** 支持 Atomic Chat 作为本地 OpenAI-compatible 后端（类 LM Studio / Ollama）
- **进展：** 提供 default_api_base: `http://localhost:1337/v1`

**5. Model Reasoning 内容流式展示**
- **PR:** [#3655](https://github.com/HKUDS/nanobot/pull/3655) | 🟡 OPEN
- **功能：** 新增 `show_reasoning` 配置项，在流式输出时显示模型推理/思考过程
- **亮点：** 通过 `emit_reasoning` hook 与 AgentHook 集成，同时修复 TUI 内容重复渲染问题

### 🔮 路线图信号分析

从今日 PR 活动可观察到项目在以下方向的持续投入：

| 方向 | 证据 | 战略意义 |
|------|------|----------|
| **多模型容灾** | #3756 fallback_models, #3762 retry blank Codex | 提升生产环境可靠性 |
| **工具插件化** | #3729 self-describing tools | 降低生态扩展门槛 |
| **模型能力抽象** | #3714 ModelPresetConfig, #3643 Qiniu, #3750 Atomic Chat | 支持多元化模型生态 |
| **渠道 UX 提升** | #3761 WhatsApp typing indicator, #3752 media_paths cleanup | 缩小与商业 Bot 平台体验差距 |
| **Agent 长期任务** | #3460 LongTaskTool | 向复杂 Agent 工作流演进 |

---

## 7. 用户反馈摘要

### 🎯 真实用户痛点

**痛点 1：模型切换不够灵活**  
> _"I'm using codex gpt-5.5 model, but sometimes it's not stable in China Mainland, like request timeout/error etc."_  
> — @futurist (Issue #3742)

国内用户在跨境调用模型时面临显著的网络不稳定问题，期望能够在不重启服务的情况下快速切换 Provider 和 Model。#3714（ModelPresetConfig）+ #3756（fallback_models）的组合有望系统性解决此问题。

---

**痛点 2：飞书多文件场景下话题隔离过于激进**  
> _"当我发多个文件到群里时，每个文件被隔离成了不同的topic，而我的目的是对这多个文件做处理。"_  
> — @sonicrang (Issue #3692)

用户并非不需要话题隔离，而是需要控制权。该功能已通过 #3747 解决，用户可选择 Off 模式将群组消息合并为统一会话。

---

**痛点 3：Agent 中断后上下文丢失**  
> _"我发消息打断它，让它重新开始测试。它会回复说：让我看看最近的任务和会话，找一下你提到的'

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-05-13

## 📊 今日速览

过去 24 小时内，Zeroclaw 项目保持极高活跃度：**50 条 PR 更新**（其中 18 条已合并/关闭）配合 **10 条 Issues 动态**，整体呈现出功能迭代与稳定性修复并行的良好态势。今日亮点包括工具审批 UI、ACP 会话持久化等新功能推进，同时修复了 SSE 日志流、Discord 媒体处理等多个高风险 Bug。v0.8.0 集成分支仍在 draft 阶段，Schema v3 迁移是下一版本的重大主题。项目代码审查流程顺畅，无新增版本发布。

---

## 📦 版本发布

**无新版本发布。** 上一个正式版本信息请参阅历史记录。v0.8.0 集成分支（PR #6398）正在积极筹备中，预计包含 Schema v3 迁移等重大变更。

---

## 🚀 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 描述 | 贡献领域 |
|----|------|------|---------|
| [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) | @FTDGRT | 添加 agent turn 生命周期运行时追踪与 SSE 广播；已合并 | observability |
| [#5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772) | @yijunyu | 重构搜索工具，委托速率限制给 RateLimitedTool 包装器 | tool |
| [#4947](https://github.com/zeroclaw-labs/zeroclaw/pull/4947) | @yijunyu | 对 GlobSearchTool/ContentSearchTool 应用 RateLimitedTool+PathGuardedTool | tool |
| [#4954](https://github.com/zeroclaw-labs/zeroclaw/pull/4954) | @yijunyu | 对 BrowserTool/HttpRequestTool 等网络工具应用速率限制委托 | tool, skills |

**进展摘要**：今日合并集中在工具层重构与可观测性增强。@yijunyu 连续合并 3 个 PR 完成搜索和网络工具的速率限制模式统一，消除了各工具内的重复守卫代码。@FTDGRT 的运行时追踪 PR 改善了调试能力，其部分功能已被 #6553 整合继承。

### 值得关注的待合并 PR

| PR | 作者 | 描述 | 风险/规模 |
|----|------|------|-----------|
| [#6603](https://github.com/zeroclaw-labs/zeroclaw/pull/6603) | @NiuBlibing | Web 端工具审批 UI，支持 supervised 模式工具执行确认 | 新功能 |
| [#6602](https://github.com/zeroclaw-labs/zeroclaw/pull/6602) | @tidux | ACP 会话持久化（SQLite），支持断线重连与历史回放 | 新功能 |
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | @singlerider | **Integration/v0.8.0**：Schema v3 迁移（migrate_v2_to_v3），超大规模集成分支 | XL, 高风险 |
| [#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555) | @HSchmale16 | RunPod ComfyUI 图片生成provider支持 | M, 高风险 |
| [#6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553) | @WareWolf-MoonWall | 修复 SSE /logs 流 + 添加 Docker 远程部署的健康脉冲 | L, 高风险 |
| [#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464) | @theonlyhennygod | Home Assistant REST API 工具 | L, 高风险 |

---

## 🔥 社区热点

### 活跃讨论的 Issues

**1. [Issue #3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) — Wecom (企业微信) 渠道支持**
- 标签：`enhancement`, `help wanted`, `priority:p2`
- 状态：OPEN（创建于 2026-03-10，已讨论 4 条）
- 诉求：为零 claw 添加企业微信 WebSocket 模式和 webhook 模式支持，对标 OpenClaw 已有扩展
- 亮点：标记 `help wanted`，欢迎社区贡献

**2. [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — 审计：追踪批量回滚中丢失的 153 个提交**
- 标签：`enhancement`, `risk:high`, `priority:p2`
- 状态：in-progress（4 月 24 日创建，讨论 2 条）
- 核心问题：3 月 28 日 commit c3ff635 回滚了 153 个 commits，移除了已审查合并的修复和功能，需建立恢复机制

**3. [Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) — SearXNG 搜索支持 + Web 搜索健壮性改进**
- 标签：`enhancement`, `risk:high`, `needs-maintainer-review`, `priority:p2`
- 状态：OPEN（4 月 5 日创建，讨论 3 条）
- 诉求：引入隐私导向的 SearXNG provider，并为 DuckDuckGo 添加 CAPTCHA 检测提升可靠性

**4. [Issue #6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) — Comfy Cloud / ComfyUI 作为共享媒体 provider**
- 标签：`enhancement`, `risk:high`, `needs-maintainer-review`, `priority:p2`
- 状态：NO-STALE（5 月 10 日创建，1 条评论）
- 诉求：将 ComfyUI 兼容后端（含官方 Comfy Cloud）作为一流媒体生成 provider，并为其后 `gen_video` 工具铺路

---

## 🐛 Bug 与稳定性

### 已关闭/修复的 Bug

| Issue | 严重度 | 状态 | 问题简述 |
|-------|--------|------|---------|
| [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) | S2 | ✅ 已关闭 | Skill 生成的图片使用本地路径，导致 API 模型无法读取 |
| [#6422](https://github.com/zeroclaw-labs/zeroclaw/issues/6422) | S2 | ✅ 已关闭 | cron_add 对纯字符串 schedule 参数的错误提示不够友好 |
| [#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415) | S2 | ✅ 已关闭 | stream_mode="partial" 时 TTS 语音回复静默禁用 |
| [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) | S2 | ✅ 已关闭 | WebSocket /ws/chat 不处理 `[IMAGE:]` 多模态标记 |
| [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) | S2 | ✅ 已关闭 | Discord 渠道媒体收发故障（入站图片为空，非图片类型被丢弃，标记泄露）|

> **好消息**：今日关闭的 5 个 Issues 全部为 S2 级别（降级行为），表明项目在关键渠道稳定性上取得进展。Discord 媒体处理和 WebSocket 图像标记问题此前困扰较多用户。

### 仍需关注的 Bug

| Issue | 严重度 | 标签 | 问题简述 |
|-------|--------|------|---------|
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | **S1** 🔴 | `priority:p1` | Onboarding 选择 OpenAI Codex 时错误使用 OpenAI API key |
| [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) 相关 | 高风险 | `security` | Discord 安全相关媒体处理问题仍在处理中 |

---

## ✨ 功能请求与路线图信号

从今日 Issue 和 PR 活动来看，以下功能可能进入下一版本：

| 功能 | 来源 | 证据 | 可能性 |
|------|------|------|--------|
| **Schema v3 迁移** | PR #6398 | 集成分支正在推进 | 🔴 高 |
| **企业微信渠道** | Issue #3090 | 有 `help wanted` 标签 | 🟡 中 |
| **ComfyUI/Comfy Cloud 媒体 provider** | Issue #6563 | 新功能提案 | 🟡 中 |
| **SearXNG 搜索 provider** | Issue #5316 | 有 `needs-maintainer-review` | 🟡 中 |
| **Home Assistant 工具** | PR #6464 | 进行中 | 🟢 可能进入 |
| **ACP 会话持久化** | PR #6602 | 新提交 | 🟢 可能进入 |
| **工具审批 UI** | PR #6603 | 新提交 | 🟢 可能进入 |
| **RunPod ComfyUI 图片生成** | PR #6555 | 进行中 | 🟢 可能进入 |

---

## 💬 用户反馈摘要

从 Issue 评论和描述中提炼的核心痛点：

1. **Discord 媒体管道故障严重**：用户反映入站图片永远无法到达 agent，非图片类型被静默丢弃，outbound 标记泄露到最终用户。这是一个影响核心体验的 S2 问题。

2. **Onboarding 流程引导错误**：用户报告在使用 Codex 订阅时，onboarding 工具错误配置了 OpenAI API key，导致工作流阻塞（S1）。

3. **本地图片路径不可被 API 模型读取**：Skill 生成的图片存储在本地路径，但通过 API 调用时模型无法访问。这是一个架构性问题，需要方案层面的思考。

4. **cron 调度参数错误提示不友好**：LLM 传递纯字符串格式的 cron 表达式时，错误信息只显示 `invalid type: string, expected internally tagged enum`，对开发者调试帮助有限。

5. **搜索工具可靠性不足**：DuckDuckGo 缺少 CAPTCHA 检测，导致自动化 agent 在生产环境中频繁失败。用户请求引入 SearXNG 作为隐私导向替代方案。

6. **批量回滚导致的功能丢失恐慌**：3 月的 153 commits 回滚虽然必要，但社区担心失去已审查合并的功能，呼吁建立审计和恢复机制。

---

## 📋 待处理积压

以下 Issues 或 PR 长期未得到响应或维护者关注，需要优先处理：

| 编号 | 状态 | 年龄 | 严重度 | 描述 | 行动建议 |
|------|------|------|--------|------|---------|
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | OPEN | 38 天 | 高风险 | SearXNG + Web 搜索健壮性 | `needs-maintainer-review` 标签已挂起，优先评审 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | in-progress | 19 天 | 高风险 | 153 commits 审计追踪 | 持续跟进，确保有进展更新 |
| [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | OPEN | 64 天 | 中风险 | 企业微信渠道支持 | 标记 `help wanted`，可考虑移交社区 |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | OPEN | 3 天 | 高风险 | Comfy Cloud 媒体 provider | 新功能，需维护者评审方向 |

---

## 📈 项目健康度评估

| 维度 | 评分 | 观察 |
|------|------|------|
| **开发活跃度** | ⭐⭐⭐⭐⭐ | 24h 50 PR 更新，极高吞吐量 |
| **Bug 修复效率** | ⭐⭐⭐⭐ | 5/5 今日 Issues 已关闭，S1 级待处理 |
| **社区参与度** | ⭐⭐⭐ | 多名外部贡献者（@NiuBlibing, @HSchmale16, @theonlyhennygod 等）活跃 |
| **版本稳定性** | ⭐⭐⭐⭐ | v0.8.0 仍在 draft，大规模迁移需谨慎测试 |
| **技术债** | ⚠️ | 153 commits 回滚审计、Schema v3 迁移是当前最大技术债 |

**综合评价**：项目处于快速迭代期，功能推进与稳定性修复并行。建议维护者关注 S1 级 Onboarding bug 和 v0.8.0 的 Schema v3 迁移测试进度。

---

*报告生成时间：2026-05-13 | 数据来源：GitHub zeroclaw-labs/zeroclaw*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-05-13

## 📋 数据概览
| 指标 | 数值 |
|------|------|
| Issues 更新 | 17 条（新开/活跃: 11，已关闭: 6）|
| PR 更新 | 15 条（待合并: 12，已合并/关闭: 3）|
| 新版本 | 1 个 (Nightly Build) |

---

## 1️⃣ 今日速览

PicoClaw 项目今日保持 **高度活跃** 状态，共产生 32 次社区交互（Issues + PRs）。Security 相关议题成为焦点——沙箱绕过漏洞（#2688）已有对应 fix PR（#2693）提交，项目方响应迅速。多个功能增强类 PR 正在 review 中，包括 Gemini Web Search provider（#2763）、Xiaomi MIMO 多模态支持（#2755）、以及 Intel OpenVINO 本地推理支持（#2703），预示 v0.2.8 将带来显著的功能扩展。整体来看，项目在保持快速迭代的同时，安全性与稳定性议题得到优先处理。

---

## 2️⃣ 版本发布

### 🆕 Nightly Build 发布

**版本**: `v0.2.8-nightly.20260513.223ebdf0`

> ⚠️ **警告**: 此为自动化构建，可能不稳定，请谨慎使用。

**完整变更日志**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

本次为 v0.2.8 正式发布前的夜间构建预览，近期正式版本可能即将释出。

---

## 3️⃣ 项目进展

今日共 **3 个 PR 合并/关闭**，推进了以下工作：

| PR | 标题 | 状态 | 意义 |
|----|------|------|------|
| #2505 | CLI: Improve the embedding process of workspace files | ✅ Closed | 修复二进制嵌入 workspace 文件残留问题，提升启动可靠性 |
| #2490 | CLI: Fix onboard advisory about configuration files | ✅ Closed | 修正 v0.2.5+ 版本的配置引导错误，改善新用户体验 |
| #2852 | docs: add evolution config controls | ✅ Closed | 完善 Agent 自进化功能的文档与 Web UI 配置说明 |

### 🔍 重点 PR 进展

**#2852** — Agent 自进化配置文档补全
- 新增 `evolution` 配置块的官方文档
- Web UI 支持可视化配置自进化参数
- 合并时间：2026-05-12

**#2505** — Workspace 文件嵌入优化
- 确保 `picoclaw` 二进制仅嵌入最新 `workspace` 目录内容
- 修复历史残留文件导致的潜在问题

---

## 4️⃣ 社区热点

以下 Issues/PRs 今日讨论最活跃：

### 🔥 Issue #2513 — Gateway 启动异常 [已关闭]
- **链接**: https://github.com/sipeed/picoclaw/issues/2513
- **作者**: @darrkz | 评论: 9 条
- **问题**: 使用 `picoclaw-launcher -public -no-browser` 启动时 gateway 进程异常
- **环境**: PicoClaw v0.2.6, Debian 13, glm4.7 模型
- **分析**: 高优先级 bug，获得社区较多关注，最终已关闭

### 🔥 Issue #2859 — Xiaomi MIMO 多轮对话问题 [新开]
- **链接**: https://github.com/sipeed/picoclaw/issues/2859
- **作者**: @KeysPAN0114 | 创建: 2026-05-13
- **问题**: 接入 Xiaomi mimo-2.5 模型后，WeChat 渠道多轮对话约 2-3 轮后出现 400 错误
- **热度**: 👍 1（今日新建，暂无评论）

### 🔥 PR #2763 — Gemini Web Search Provider
- **链接**: https://github.com/sipeed/picoclaw/pull/2763
- **作者**: @bogdanovich
- **功能**: 为 `web_search` 工具新增 Google Gemini 作为搜索提供者，支持 grounding citations
- **状态**: 活跃 review 中

### 🔥 PR #2781 — 降低 Skill Catalog Token 消耗
- **链接**: https://github.com/sipeed/picoclaw/pull/2781
- **作者**: @cstroie
- **优化**: 技能目录 XML 仅在首次注入，后续轮次复用，大幅降低 token 消耗
- **影响**: 对长对话场景成本优化显著

---

## 5️⃣ Bug 与稳定性

按严重程度排列的 Bug 列表：

### 🔴 高优先级

**#2720** — Singleton PID 检查存在安全漏洞 [待 fix]
- **链接**: https://github.com/sipeed/picoclaw/issues/2720
- **问题**: PID 文件中的旧 PID 被其他进程（如 systemd-resolved）复用时，gateway 无法启动，进入崩溃循环
- **已有 Fix PR**: #2813（待合并）— `fix(pid): verify gateway identity before blocking startup on stale PID`
- **状态**: 高危，已提交修复

**#2688** — 安全：find / 命令绕过工作区沙箱 [已有 fix]
- **链接**: https://github.com/sipeed/picoclaw/issues/2688
- **问题**: 安全防护仅阻止 `cat`、`ls` 等直接文件读取，但 `find /` 仍可枚举整个文件系统
- **已有 Fix PR**: #2693 — `fix: block find / from bypassing workspace sandbox`
- **状态**: 修复已提交，等待 review

**#2742** — v0.2.8 Gateway 无渠道启动 [待解决]
- **链接**: https://github.com/sipeed/picoclaw/issues/2742
- **问题**: v0.2.8 版本下 gateway 启动后显示 "no channels"，Telegram 配置无效
- **状态**: 活跃讨论中

### 🟡 中优先级

**#2513** — Gateway 启动异常 [已关闭]
- **链接**: https://github.com/sipeed/picoclaw/issues/2513
- **评论**: 9 条 | 已关闭

**#1757** — Cron 定时任务触发渠道错误
- **链接**: https://github.com/sipeed/picoclaw/issues/1757
- **问题**: 每小时定时任务执行时出现 channel error，v0.2.3 + ollama glm-4.7-flash
- **状态**: 持续讨论中

**#2694** — ADB Shell 证书验证失败
- **链接**: https://github.com/sipeed/picoclaw/issues/2694
- **问题**: Android ADB 环境下 Dashscope/Qwen 模型调用失败（x509 证书错误）
- **状态**: 已关闭

**#2859** — Xiaomi MIMO 多轮对话 400 错误
- **链接**: https://github.com/sipeed/picoclaw/issues/2859
- **问题**: WeChat 渠道接入后 2-3 轮对话触发 "Param Incorrect" 错误
- **状态**: 今日新建，需跟进

---

## 6️⃣ 功能请求与路线图信号

以下功能请求可能进入下一版本：

| Issue/PR | 功能 | 可能性 | 说明 |
|----------|------|--------|------|
| #2763 | Gemini Web Search Provider | ⭐⭐⭐ 高 | PR 已 open，功能完整 |
| #2703 | Intel OpenVINO 本地推理支持 | ⭐⭐ 高 | PR 已 open，覆盖 CPU/GPU/NPU |
| #2755 | Xiaomi MIMO 流式推理 + 视频支持 | ⭐⭐ 中高 | PR 已 open，多模态能力扩展 |
| #1950 | Web Chat 流式输出 | ⭐⭐ 中 | Issue 讨论中，功能明确 |
| #2404 | 配置Streaming HTTP请求 | ⭐⭐ 中 | Issue 活跃讨论，对标 OpenAI client |
| #2771 | 配置可靠性与迁移体验 | ⭐⭐ 中 | 配置系统 UX 优化 |
| #2491 | 会话管理命令 (/status, /compact, /new) | ⭐ 中 | PR open，功能清晰 |
| #2781 | 技能目录 Token 优化 | ⭐⭐⭐ 高 | PR 已 open，直接降低使用成本 |
| #2625 | WhatsApp 预编译版本 | ⭐ 低 | Raspberry Pi Zero 2 用户需求 |

### 🚀 热门方向分析

1. **多模态能力扩展**: Xiaomi MIMO 视频理解、音频理解已在 PR #2755 中实现
2. **本地推理支持**: Intel OpenVINO PR #2703 将支持本地 LLM 部署
3. **安全加固**: 沙箱绕过修复（#2693）优先级高
4. **成本优化**: Token 消耗优化（#2781）提升长对话经济性

---

## 7️⃣ 用户反馈摘要

### 💬 真实痛点

**1. 资源受限设备体验待优化**
- @duckida: Raspberry Pi Zero 2 使用默认 arm64 构建，WhatsApp 支持未包含，需自行编译
- @guettli: 从源码构建后缺少 `picoclaw-launcher` 可执行文件

**2. 配置迁移体验割裂**
- @SiYue-ZO: 配置系统从 V0→V3 有增量迁移链，但示例配置仍为 V2 格式；`.security.yml` 无法存储 MCP server 环境变量 secrets

**3. 安全与稳定性问题影响生产使用**
- @weissfl: PID 重用导致 gateway 崩溃循环，生产环境风险
- @islobodan: `find /` 可枚举整个文件系统，敏感信息泄露风险

**4. 多渠道稳定性**
- 多用户报告 Telegram 渠道在特定场景下出错（#1757, #2742）
- @darrkz: WeChat 渠道多轮对话出现 API 错误

### ✨ 用户满意方向

- **硬件兼容性验证**: @skrimby1 在 NXP i.MX93 EVK 上成功运行 PicoClaw
- **Mission Control 需求**: @doko89 希望将 Mission Control 从 OpenClaw 移植到 PicoClaw
- **多模态能力期待**: @BeaconCat 推动 Xiaomi MIMO 流式推理 + 视频支持

---

## 8️⃣ 待处理积压

以下 Issue/PR 长期未响应或已标记 stale，需维护者关注：

### 📌 超过 30 天未响应的 Issues

| Issue | 标题 | 创建时间 | 状态 | 优先级 |
|-------|------|----------|------|--------|
| #1950 | Streaming Output for Web Chat | 2026-03-24 | Open | 低 |
| #1757 | Cron 任务触发渠道错误 | 2026-03-18 | Open | 中 |
| #2625 | WhatsApp 预编译版本 | 2026-04-22 | Open | 低 |

### 📌 超过 30 天未响应的 PRs

| PR | 标题 | 创建时间 | 状态 |
|----|------|----------|------|
| #2491 | 会话管理命令 | 2026-04-12 | Open |
| #2703 | Intel OpenVINO 支持 | 2026-04-28 | Open |
| #2693 | 沙箱绕过修复 | 2026-04-27 | Open |

### ⚠️ 建议关注

1. **Security fix PR #2693** — 已提交超过 2 周，需优先 review 合并
2. **PID 检查修复 PR #2813** — 解决生产环境崩溃循环问题
3. **#2688 安全漏洞** — 已有 fix，建议评估是否需要发布 hotfix

---

## 📊 总结

| 维度 | 状态 | 评估 |
|------|------|------|
| 活跃度 | 🟢 高 | 32 次交互，维持强劲社区参与 |
| 安全性 | 🟡 待提升 | 沙箱绕过漏洞已有 fix，需尽快合并 |
| 稳定性 | 🟡 待提升 | 存在 2 个高优先级 bug 需修复 |
| 功能推进 | 🟢 良好 | 多个功能 PR 在 review 中，路线图清晰 |
| 积压处理 | 🟡 需关注 | 存在 3 个 stale issues/PRs 需清理 |

---

*报告生成时间: 2026-05-13 | 数据来源: GitHub PicoClaw Repository*

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# hermes-agent 项目日报 | 2026-05-13

---

## 1. 今日速览

hermes-agent 今日保持极高活跃度，GitHub 产生 **196 条 Issues 更新**（其中 168 条为新开/活跃）和 **500 条 PR 更新**（319 条待合并）。项目整体呈现快速迭代态势，未发布新版本。核心问题集中在**上下文窗口验证逻辑**（多个模型被错误拒绝）和**并发竞态条件修复**（多个 TOCTOU 问题被提交 PR）。社区对 Telegram/Discord 等平台集成的功能请求持续增长，同时安全性修复（#24725）在当日完成合并。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR | 作者 | 描述 | 状态 |
|----|------|------|------|
| [#24725](https://github.com/NousResearch/hermes-agent/pull/24725) | @teknium1 | **Security Fix (P1)**: 修复 approval.py 中 `DOTALL+IGNORECASE` 正则导致的多行 SQL 注入绕过漏洞 | ✅ CLOSED |
| [#23856](https://github.com/NousResearch/hermes-agent/pull/23856) | @02356abc | 修复 WeCom WebSocket 重连后连接状态未更新的问题 | ✅ CLOSED |
| [#22971](https://github.com/NousResearch/hermes-agent/pull/22971) | @crayfish-ai | 修复 MiniMax 自定义端点失败后未回退到命名 provider 的问题 | ✅ CLOSED |
| [#24749](https://github.com/NousResearch/hermes-agent/pull/24749) | @han0gu | Slack cron 报告线程化 + profile 模板同步功能 | ✅ CLOSED |
| [#24739](https://github.com/NousResearch/hermes-agent/pull/24739) | @jrhager84 | 修复自定义 YAML 主题导致的面板首屏闪烁 | 🔄 OPEN |

### 进行中的重要 PRs

| PR | 作者 | 描述 | 优先级 |
|----|------|------|--------|
| [#22944](https://github.com/NousResearch/hermes-agent/pull/22944) | @crayfish-ai | 防止上下文重复压缩导致 `## Active Task` 字段损坏 | P1 |
| [#24704](https://github.com/NousResearch/hermes-agent/pull/24704) | @fredzhuzz | 支持固定 token 阈值和 per-model 压缩配置 | P3 |
| [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) | @OutThisLife | Electron/Vite 桌面应用原型（聊天、作曲器、面板、预览、设置） | P3 |

**当日并发/竞态修复 PRs 集中提交**，反映出项目对多线程稳定性的重视：
- [#24752](https://github.com/NousResearch/hermes-agent/pull/24752) - `_get_claude_code_version()` TOCTOU 修复
- [#24741](https://github.com/NousResearch/hermes-agent/pull/24741) - `web_tools.py` 三个 singleton 的竞态条件修复
- [#24742](https://github.com/NousResearch/hermes-agent/pull/24742) - `gateway/run.py` `progress_callback` 状态同步
- [#24746](https://github.com/NousResearch/hermes-agent/pull/24746) - `tui_gateway/server.py` 数据库初始化竞态
- [#24750](https://github.com/NousResearch/hermes-agent/pull/24750) - `signal_rate_limit` 调度器初始化竞态

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#7237](https://github.com/NousResearch/hermes-agent/issues/7237)** — Bug: Response truncated due to output length limit (24 comments, 已关闭)
   - **诉求**: CLI 和 Telegram/Discord 网关在生成长文本时频繁触发输出截断错误
   - **根因**: 输出长度限制逻辑存在缺陷，导致流式输出中途断开
   - **状态**: 已关闭但社区反馈持续

2. **[#15311](https://github.com/NousResearch/hermes-agent/issues/15311)** — Feature: Add generic action buttons / inline keyboard support (10 comments)
   - **诉求**: 希望为 Telegram 等消息平台添加通用的交互式按钮支持，而非针对单一功能硬编码
   - **意义**: 平台无关的操作按钮设计将大幅提升多平台一致性

3. **[#5941](https://github.com/NousResearch/hermes-agent/issues/5941)** — Feature: Add Searxng as a default web search provider (4 comments, 👍 28)
   - **高支持率功能请求**，用户期待将 Searxng 纳入 `web_tools.py` 默认搜索提供方

4. **[#509](https://github.com/NousResearch/hermes-agent/issues/509)** — Feature: Cognitive Memory Operations (6 comments)
   - **雄心勃勃的长期路线图提案**，借鉴 CrewAI 的记忆编码、整合、自适应检索机制
   - 当前系统仅支持扁平文本存储，缺乏矛盾检测和置信度感知检索

---

## 5. Bug 与稳定性

### P1 Critical（阻断性）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#24140](https://github.com/NousResearch/hermes-agent/issues/24140) | **所有模型在 Telegram 上被拒绝** — 错误信息：context window below minimum 64,000 tokens。影响 MiniMax-M2.7（实际 32K）等模型 | 🔴 开放 |
| [#22958](https://github.com/NousResearch/hermes-agent/issues/22958) | **CLI 确认提示无法响应** — `/clear`, `/new`, `/reset`, `/undo` 的确认输入被泄漏到聊天编辑器而非触发确认逻辑 | 🔴 开放 |
| [#11914](https://github.com/NousResearch/hermes-agent/issues/11914) | **上下文压缩导致任务永久丢失** — 压缩触发后模型完全遗忘当前任务上下文 | 🔴 开放 |
| [#24119](https://github.com/NousResearch/hermes-agent/issues/24119) | **`get_model_context_length()` 误查 OpenRouter 元数据** — 即使非 OpenRouter 用户也强制查询，导致错误拒绝 | 🔴 开放（已有相关修复 PR #24704 推进中）|
| [#24268](https://github.com/NousResearch/hermes-agent/issues/24268) | **kimi-k2.6 上下文长度错误** — OpenRouter 返回 32K 但实际支持 256K | 🔴 开放 |

### P2 High（严重影响功能）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#24072](https://github.com/NousResearch/hermes-agent/issues/24072) | **`model.context_length` 在 provider 切换后未重新解析** | 🟡 开放 |
| [#21341](https://github.com/NousResearch/hermes-agent/issues/21341) | **NixOS 模块将文件安装到错误路径** — `documents` 选项安装到 `workingDirectory` 而非 `$HERMES_HOME` | 🟡 开放 |
| [#23799](https://github.com/NousResearch/hermes-agent/issues/23799) | **OpenClaw MCP fleet 每次调用都重新启动** + 会话结束后孤儿进程残留 | 🟡 开放 |
| [#17244](https://github.com/NousResearch/hermes-agent/issues/17244) | **高德地图 MCP 服务器连接失败** — SSE 发现机制不受支持 | 🟡 开放 |
| [#19798](https://github.com/NousResearch/hermes-agent/issues/19798) | **`read_file` 返回带行号内容，写回时被持久化** — 静默损坏配置文件和 `.env` | 🟡 开放 |

### 安全相关（已修复）

| PR | 描述 | 状态 |
|----|------|------|
| [#24725](https://github.com/NousResearch/hermes-agent/pull/24725) | **approval.py 正则绕过** — `DOTALL+IGNORECASE` 允许 WHERE 出现在后续行时绕过 SQL 注入检测 | ✅ 已合并 |

---

## 6. 功能请求与路线图信号

### 高价值功能请求（有望纳入）

| Issue/PR | 功能 | 优先级 | 依据 |
|----------|------|--------|------|
| [#24704](https://github.com/NousResearch/hermes-agent/pull/24704) | Per-model 压缩阈值配置 + 固定 token 阈值 | P3 | PR 已开放，支持向后兼容 |
| [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) | 通用操作按钮/内联键盘支持 | P3 | 平台团队诉求强烈 |
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | Searxng 作为默认网页搜索提供方 | P3 | 社区高票支持（👍28） |

### 中长期路线图信号

- **[#509](https://github.com/NousResearch/hermes-agent/issues/509)** — 认知记忆操作（LLM 驱动的编码、整合、自适应检索）代表了架构层面的演进方向
- **[#21303](https://github.com/NousResearch/hermes-agent/issues/21303)** — 持久化专业子 agent + 私有技能生命周期，是缓解主 agent 经验漂移的关键提案
- **[#20059](https://github.com/NousResearch/hermes-agent/pull/20059)** — 桌面应用原型进入评审阶段，Electron/Vite 实现已提交

---

## 7. 用户反馈摘要

### 痛点

1. **上下文窗口验证过于激进** — 多个用户反映即使使用支持 256K 的模型（如 kimi-k2.6、MiniMax-M2.7），仍被错误拒绝，根因指向 `get_model_context_length()` 的 OpenRouter 元数据强制查询逻辑

2. **上下文压缩破坏任务连续性** — 社区多次报告压缩后模型"失忆"，忘记当前任务进展，这是生产环境的严重稳定性风险

3. **Skills 系统缺乏生命周期管理** — 用户安装 89+ skills 后面临无追踪、过期检测缺失、无自动清理的困境（#11425）

4. **NixOS 集成路径错误** — Nix 模块用户发现配置文件被安装到错误路径，文档与实际读取路径不一致

### 满意点

- Telegram/Discord 等多平台网关集成获得积极反馈
- Skills 系统灵活性被部分用户认可（但需改进生命周期管理）
- MCP 工具集成能力受到好评

### 场景反馈

- **生产部署**: 多企业用户使用 Matrix 网关构建运维助手（#22714）
- **多 Agent 协作**: Discord 频道多 agent 协作场景提出（#14853），当前各 agent 无消息可见性
- **本地部署**: 本地 oMLX 部署场景出现（#24640），context window 识别错误

---

## 8. 待处理积压

### 长期未响应的 P1/P2 Issues

| Issue | 创建日期 | 天数 | 描述 |
|-------|----------|------|------|
| [#11914](https://github.com/NousResearch/hermes-agent/issues/11914) | 2026-04-18 | ~25 天 | 上下文压缩导致任务丢失（P1）|
| [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | 2026-05-09 | ~4 天 | Matrix 网关 downstream dispatcher 问题（P1）|
| [#22958](https://github.com/NousResearch/hermes-agent/issues/22958) | 2026-05-10 | ~3 天 | CLI 确认提示无法交互（P1）|
| [#24140](https://github.com/NousResearch/hermes-agent/issues/24140) | 2026-05-12 | ~1 天 | 所有模型被拒绝（Telegram 完全宕机）（P1）|
| [#24119](https://github.com/NousResearch/hermes-agent/issues/24119) | 2026-05-12 | ~1 天 | OpenRouter 元数据误查询（P1）|

### 高支持率但未关闭的功能请求

| Issue | 创建日期 | 👍 | 描述 |
|-------|----------|----|------|
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | 2026-04-07 | 28 | Searxng 搜索提供方 |
| [#509](https://github.com/NousResearch/hermes-agent/issues/509) | 2026-03-06 | 2 | 认知记忆操作 |

---

## 指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues (24h) | 196 | ▲ 高活跃 |
| PRs (24h) | 500 | ▲ 极高活跃 |
| 待合并 PRs | 319 | ████████░░ |
| 新发布版本 | 0 | — |
| 合并 PRs | ~10 | ██░░░░░░░░ |
| P1 Bugs (开放) | 5 | ⚠️ 需紧急处理 |
| Security Fixes | 1 | ✅ 已合并 |

---

*报告生成时间: 2026-05-13 | 数据来源: GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-05-13

---

## 1. 今日速览

过去 24 小时，NanoClaw 保持高度活跃，共产生 **4 条 Issues** 和 **20 条 PR 更新**。PR 方面呈净合并态势（5 条已关闭/合并），另有 15 条待审，整体开发节奏紧凑。多个热区同时推进：OneCLI 安全加固（2 条 PR）、Webhook 通道（1 PR + 1 Issue）、Discord 附件问题（1 PR 关联 1 Issue）、容器挂载修复（1 PR）。未见新版本发布，项目处于功能迭代与问题修复并行的状态。

---

## 2. 版本发布

**今日无新版本发布。** 最近可见版本更新为 2026-05-12 的容器依赖刷新（#2425），含 `@anthropic-ai/claude-code` 2.1.119→2.1.139 等包升级。

---

## 3. 项目进展

| PR 编号 | 标题 | 状态 | 贡献者 | 概要 |
|---------|------|------|--------|------|
| [#2439](https://github.com/nanocoai/nanoclaw/pull/2439) | feat(webhook): webhook channel type — push-based inbound from Supabase/GitHub Actions | CLOSED | @jesolsen | 新增 `webhook` 通道类型，暴露 `POST /v1/inbound/webhook/:mgId` 端点，支持 bearer 认证，直连 `routeInbound()` 绕过 Chat SDK 适配层 |
| [#2422](https://github.com/nanocoai/nanoclaw/pull/2422) | feat(skills): add /add-google-auth foundation skill + diagnostic MCP tools | CLOSED | @TriKro | 添加 Google OAuth 基础 skill，提供 `check_google_auth` 和 `list_google` 诊断工具，支撑 Gmail/Calendar/GDrive 集成体系 |
| [#1631](https://github.com/nanocoai/nanoclaw/pull/1631) | skill/sentry: add Sentry IPC integration | CLOSED | @TriKro | 接入 Sentry IPC，提供错误追踪能力 |
| [#2425](https://github.com/nanocoai/nanoclaw/pull/2425) | chore(container): bump pinned CLI versions to latest | CLOSED | @davekim917 | 容器依赖例行刷新（Vercel major bump 52→53 暂缓） |
| [#1912](https://github.com/nanocoai/nanoclaw/pull/1912) | fix: handle empty container stdout with clear error in fallback parser | CLOSED | @boskodev790 | 修复容器无输出时的兜底解析器，表面清晰错误而非静默失败 |
| [#2435](https://github.com/nanocoai/nanoclaw/pull/2435) | fix(webhook): make webhook server port configurable via WEBHOOK_PORT | OPEN | @evenisse | 修复 webhook server 端口硬编码为 3000 的问题，支持环境变量覆盖 |
| [#2438](https://github.com/nanocoai/nanoclaw/pull/2438) | fix(chat-sdk-bridge): fetch attachment URL when adapter lacks fetchData | OPEN | @joedanz | 修复 Discord CDN 等无需认证的附件 URL 在桥接层无法下载的问题 |
| [#2434](https://github.com/nanocoai/nanoclaw/pull/2434) | fix(setup/onecli): restrict admin API and postgres to loopback after OneCLI install | OPEN | @glifocat | 高优先级修复：将 OneCLI 管理 API (`:10254`) 和 Postgres (`:5432`) 绑定从 docker0 桥接 IP 限制到 loopback，提升安全性 |
| [#2430](https://github.com/nanocoai/nanoclaw/pull/2430) | feat(skill): add /add-gdrive-tool — Google Drive MCP via OneCLI | OPEN | @abarbaccia | 新增 Google Drive skill，与 Gmail/GCalendar skill 形成 Google 工具矩阵 |
| [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) | Conditional thread policy for Slack adapter (DM=top-level, channels=threaded) | OPEN | @jumprope-jesse | Slack DM 取消线程化，频道消息保持线程，提升 DM 场景可用性 |
| [#2432](https://github.com/nanocoai/nanoclaw/pull/2432) | Add ncl groups config add-mount / remove-mount | OPEN | @jumprope-jesse | CLI 新增挂载管理动词，支持通过标准审批流而非直接修改 container.json 来管理 bind mount |
| [#2429](https://github.com/nanocoai/nanoclaw/pull/2429) | fix(whatsapp): route inbound media through shared session inbox | OPEN | @IamAdamJowett | 修复 WhatsApp 媒体文件被写入 host 路径而容器无法访问的问题 |
| [#2427](https://github.com/nanocoai/nanoclaw/pull/2427) | fix: attachment issues | OPEN | @b1ek | 关闭 #2426，修复 LLM 无法识别 Discord 图片内容问题 |
| [#1545](https://github.com/nanocoai/nanoclaw/pull/1545) | feat: add /add-model-config skill — per-invocation model, effort, and thinking config | OPEN | @farooqu | 新增 per-invocation 模型配置 skill |
| [#1845](https://github.com/nanocoai/nanoclaw/pull/1845) | v2: fix(db): normalize auto-generated timestamps to ISO 8601 | OPEN | @evenisse | 修复 SQLite datetime('now') 产生非标准时间戳的问题，统一为 ISO 8601 |
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | fix(formatter): treat unknown slash commands as normal chat | OPEN | @SidhayaPravda618 | 修复未知斜杠命令被归类为 passthrough 导致响应被静默丢弃的问题 |
| [#1917](https://github.com/nanocoai/nanoclaw/pull/1917) | fix: rename @Andy trigger references in runtime group registration | OPEN | @boskodev790 | 修复 ASSISTANT_NAME 非默认时 CLAUDE.md 中 `@Andy` 引用未被替换的问题 |
| [#1916](https://github.com/nanocoai/nanoclaw/pull/1916) | fix: guard numeric config env vars against NaN and non-positive values | OPEN | @boskodev790 | 补充 CONTAINER_TIMEOUT 等数值配置项的 NaN/非正数校验 |
| [#1913](https://github.com/nanocoai/nanoclaw/pull/1913) | fix: rename @Andy trigger references when assistant name changes | OPEN | @boskodev790 | 相关修复：ASSISTANT_NAME 变更时同步替换 `@Andy` 触发词引用 |

---

## 4. 社区热点

### 讨论最活跃的议题

**#2437 — "Any appetite for removing/improving the OneCLI dependency?"**  
作者: @carderne | 创建于 2026-05-12

> NanoClaw 标榜自己是轻量级、合理的 OpenClaw 替代品，可以通过 `pnpm run dev` 部署。但对 OneCLI 的依赖明显削弱了这一定位——实际部署过程中 OneCLI 安装繁琐，管理 API 和 Postgres 绑定在 bare-metal Linux 上默认暴露到 docker0 桥接网络，带来安全风险。

**#2433 — "fix(setup/onecli): restrict OneCLI admin API and Postgres to loopback after install"**（对应 PR #2434）  
作者: @glifocat | 高优先级

> 在 bare-metal Linux 上，OneCLI 安装程序自动检测 docker0 桥接 IP 并将管理 API (`:10254`) 和 Postgres (`:5432`) 绑定到该地址，而不仅仅是代理网关 (`:10255`)。NanoClaw 也在同一桥接上运行 agent 容器，存在横向攻击面。

**#2424 — "Container survives daemon restart with partial mount config"**  
作者: @jumprope-jesse | 创建于 2026-05-12

> host 文件夹重命名后经历 launchd unload/load 周期，容器重启时 `/workspace/agent` 组挂载丢失，仅保留顶层 `/workspace`。无任何错误提示，属于静默配置损坏。

### 热点分析

社区近期核心关切集中在 **OneCLI 安全暴露** 与 **容器挂载可靠性** 两个维度。前者已有高优先级 PR #2434 在审，后者对应 PR #2432 提供 CLI 层面的修复方案。OneCLI 依赖问题被正式提出（#2437），可能推动未来架构决策。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 修复状态 |
|--------|----------|------|----------|
| 🔴 高 | [#2426](https://github.com/nanocoai/nanoclaw/issues/2426) / [#2427](https://github.com/nanocoai/nanoclaw/pull/2427) | Discord 发送图片时 LLM 只看到 `[image: file.png]` 而无法识别内容 | PR 已开 |
| 🔴 高 | [#2434](https://github.com/nanocoai/nanoclaw/pull/2434) | OneCLI 管理 API (`:10254`) 和 Postgres (`:5432`) 暴露至 docker0 桥接，容器内可直接访问，存在安全风险 | PR 在审，高优先级 |
| 🟡 中 | [#2424](https://github.com/nanocoai/nanoclaw/issues/2424) / [#2432](https://github.com/nanocoai/nanoclaw/pull/2432) | 守护进程重启后挂载配置部分丢失，`/workspace/agent` 静默缺失 | PR 在审 |
| 🟡 中 | [#2435](https://github.com/nanocoai/nanoclaw/pull/2435) | webhook server 端口硬编码 3000，冲突时 fatal crash 且无 override | PR 在审 |
| 🟡 中 | [#2429](https://github.com/nanocoai/nanoclaw/pull/2429) | WhatsApp 媒体写入 host 路径，容器无法访问，运行时静默失败 | PR 在审 |
| 🟡 中 | [#2438](https://github.com/nanocoai/nanoclaw/pull/2438) | chat-sdk-bridge 对无需认证的附件 URL 无法下载（Discord CDN 等） | PR 在审 |
| 🟢 低 | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | 未知斜杠命令被误归类为 passthrough，导致响应静默丢弃 | PR 在审 |

---

## 6. 功能请求与路线图信号

### 近期可纳入的功能

| 请求 | 来源 | 对应 PR | 可行性评估 |
|------|------|---------|-----------|
| **Webhook 通道类型** | 社区需求 | #2439 ✅ 已合并 | 高——解决了 Supabase/GitHub Actions 等推送场景 |
| **Google Drive MCP 集成** | 自然延伸 | #2430 | 高——复用 Gmail/GCalendar skill 的 OneCLI stub-credential 模式 |
| **/add-google-auth 基础 skill** | 支撑体系 | #2422 ✅ 已合并 | 高——为整个 Google 工具矩阵提供 OAuth 基础 |
| **Slack DM/频道差异化线程策略** | 用户体验优化 | #2431 | 高——逻辑清晰，覆盖真实使用差异 |
| **CLI 挂载管理** | 运维需求 | #2432 | 高——解决了直接编辑 container.json 的痛点 |
| **per-invocation 模型配置** | 灵活性需求 | #1545 | 中——涉及 skill 设计模式，需审 |
| **Sentry IPC 集成** | 可观测性需求 | #1631 ✅ 已合并 | 高——错误追踪覆盖 |

### 路线图信号

**#2437 的讨论**（@carderne 提出）表明社区对 OneCLI 依赖的长期存在性存疑。若 #2434/#2433 的安全修复被接受，可能在下一里程碑中重新评估 OneCLI 的边界与职责。

---

## 7. 用户反馈摘要

- **部署体验矛盾**：用户认可 NanoClaw "轻量级、可用 `pnpm run dev` 启动"的定位，但 OneCLI 安装过程复杂、安全默认配置不当，削弱了轻量化承诺（#2437）
- **Discord 图片场景需求明确**：至少一个用户通过 NanoClaw + Discord 集成处理图片内容，发现 LLM 无法识别（#2426），已有修复但验证中
- **运维可靠性关切**：容器守护进程重启后挂载静默丢失且无错误提示，暴露了生产环境部署的潜在风险（#2424）
- **多渠道适配不均衡**：Slack DM 线程化体验不佳（#2431），WhatsApp 媒体路径问题（#2429）均指向通道适配层仍需打磨

---

## 8. 待处理积压

### 长期未响应的 Issues

| Issue | 创建时间 | 状态 | 摘要 |
|-------|---------|------|------|
| [#2437](https://github.com/nanocoai/nanoclaw/issues/2437) | 2026-05-12 | OPEN | OneCLI 依赖移除/改进讨论 — 涉及架构决策，需维护者表态 |
| [#2426](https://github.com/nanocoai/nanoclaw/issues/2426) | 2026-05-12 | OPEN | Discord 图片 LLM 无法识别 — 已有 PR #2427 |

### 长期未合并的 PRs（>14 天）

| PR | 创建时间 | 贡献者 | 摘要 |
|----|---------|--------|------|
| [#1845](https://github.com/nanocoai/nanoclaw/pull/1845) | 2026-04-18 | @evenisse | 时间戳 ISO 8601 规范化 — 长期未处理 |
| [#1912](https://github.com/nanocoai/nanoclaw/pull/1912) | 2026-04-22 | @boskodev790 | 空容器输出处理 — 已合并 ✅ |
| [#1913](https://github.com/nanocoai/nanoclaw/pull/1913) | 2026-04-22 | @boskodev790 | @Andy 触发词重命名 — 悬空 21 天 |
| [#1916](https://github.com/nanocoai/nanoclaw/pull/1916) | 2026-04-22 | @boskodev790 | 数值配置校验 — 悬空 21 天 |
| [#1917](https://github.com/nanocoai/nanoclaw/pull/1917) | 2026-04-22 | @boskodev790 | 运行时组注册重命名 — 悬空 21 天 |
| [#1545](https://github.com/nanocoai/nanoclaw/pull/1545) | 2026-03-30 | @farooqu | /add-model-config skill — 悬空 44 天 |

### 积压分析

@boskodev790 连续提交了 4 个相关修复（#1913/#1916/#1917/#1912），其中 #1912 已合并，剩余 3 个悬空 21 天。建议维护者优先 review，减少贡献者等待成本。

---

*数据来源：[NanoClaw GitHub](https://github.com/nanocoai/nanoclaw) | 生成时间：2026-05-13*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：** 2026-05-13  
**项目仓库：** github.com/nearai/ironclaw  
**数据区间：** 过去 24 小时

---

## 1. 今日速览

IronClaw 过去 24 小时保持了极高的开发活跃度：共处理 **29 条 Issues**（16 新开/活跃 + 13 关闭）和 **50 条 PRs**（24 待合并 + 26 已合并/关闭），版本发布数为 0。今日的核心亮点是 **Reborn 项目多条关键基础设施 PR 持续推进**，包括 TurnRunner 组合、MemoryPromptContextService、SkillContextService、数据库操作等核心模块的完成，显示出 Reborn 架构正在快速收敛。与此同时，**多个 P1/Bug Bash 级别的用户可见 Bug 被报告**，涉及 Gmail 认证失败、Telegram 配对、Web UI 时间戳错误等问题，需要重点关注。整体而言，项目在功能完善与稳定性保障之间呈现"双线并进"的态势。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

过去 24 小时，项目共 **合并/关闭 26 条 PRs**，以下为最重要的进展：

### 3.1 Reborn 核心架构 PRs（持续推进）

| PR 编号 | 标题 | 状态 | 重要性 | 说明 |
|---------|------|------|--------|------|
| [#3476](https://github.com/nearai/ironclaw/pull/3476) | [Reborn] Wire SkillContextService into loop prompt path | **CLOSED** | 🔴 高 | 将 HostSkillContextSource 和基于解析器的快照构建器接入 ironclaw_loop_support，完成技能上下文的服务化集成 |
| [#3355](https://github.com/nearai/ironclaw/pull/3355) | feat(reborn): add telegram v2 product adapter tracer bullet | **CLOSED** | 🔴 高 | Telegram v2 ProductAdapter 实现完成，出站渲染及约束出口机制就绪 |
| [#3493](https://github.com/nearai/ironclaw/pull/3493) | Fix Reborn memory error redaction and SQL replay cursors | **CLOSED** | 🟡 中 | 修复内存后端错误脱敏问题，SQL 事件存储重放游标逻辑修正 |
| [#3546](https://github.com/nearai/ironclaw/pull/3546) | feat: payroll v2 sidecar — credential injection + SSE hardening | **CLOSED** | 🔴 高 | 新增 `inject_t3n_delegation_credential` 注入 MCP 工具调用凭证，Unix 传输增加断管重连机制 |

### 3.2 其他重要 PRs

| PR 编号 | 标题 | 状态 | 重要性 | 说明 |
|---------|------|------|--------|------|
| [#3256](https://github.com/nearai/ironclaw/pull/3256) | feat(wasm): credential signers for HMAC, EIP-712, NEP-413, Solana | **OPEN** | 🔴 高 | 新增四种凭据签名变体，支持工具声明特定于场所的签名方案 |
| [#3510](https://github.com/nearai/ironclaw/pull/3510) | fix(setup): make local web UI discoverable during onboarding | **OPEN** | 🔴 高 | 修复本地安装时 Web UI 无法发现的问题（关联 #3500） |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) | Add DISABLE_TOOLS_LIST flag and security regression test | **OPEN** | 🔴 高 | 新增启动时禁用特定工具的配置标志，包含安全回归测试 |
| [#3528](https://github.com/nearai/ironclaw/pull/3528) | feat(reborn-cli): add inspection command surfaces | **OPEN** | 🟡 中 | Reborn CLI 新增 `profile list`、`channels list`、`hooks list`、`skills list` 等只读检查命令 |

---

## 4. 社区热点

### 4.1 评论最多的 Issues

| Issue 编号 | 标题 | 评论数 | 状态 | 热度分析 |
|-----------|------|--------|------|----------|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | [QA] Google Sheets OAuth blocked: Error 400 invalid_request | 11 | CLOSED | **已关闭** - Google Sheets OAuth 在 Telegram 触发时报 400 错误，涉及 hosted-staging 环境，QA 测试日期 2026-04-09 |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | Ship Reborn as a separate ironclaw-reborn binary | 4 | CLOSED | **已关闭** - 要求将 Reborn 作为独立可执行文件发布，建立产品边界 |
| [#3092](https://github.com/nearai/ironclaw/issues/3092) | [Reborn] Add reference AgentLoop implementations | 2 | OPEN | **活跃** - 要求添加 `DefaultChatLoop`（纯文本）和工具化版本的参考实现 |

### 4.2 今日新开 Issues 中最具影响力

| Issue 编号 | 标题 | 严重度 | 链接 |
|-----------|------|--------|------|
| [#3547](https://github.com/nearai/ironclaw/issues/3547) | [Reborn] Complete skill-context trust enforcement: dispatcher attenuation + identity_messages population | P1 | [链接](https://github.com/nearai/ironclaw/issues/3547) |
| [#3535](https://github.com/nearai/ironclaw/issues/3535) | [QA] UI Timestamps are incorrect for conversations | P1 | [链接](https://github.com/nearai/ironclaw/issues/3535) |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | [QA] Telegram in v 0.28.1 does not automatically setup from UI | P1 | [链接](https://github.com/nearai/ironclaw/issues/3533) |

**社区诉求分析：** 今日社区讨论主要围绕三类主题：① **Gmail/Telegram 认证链路问题**（#3319, #3320, #2229, #3128）——用户在高优先级场景下遇到认证失败后的对话无法恢复问题；② **Reborn 架构完善**——技能上下文信任强化、内存服务化、循环钩子框架等基础设施建设进入深水区；③ **用户体验细节**——Web UI 文件上传缺失、时间戳错误、本地安装引导问题等被 QA 测试捕获。

---

## 5. Bug 与稳定性

### 5.1 今日报告的 Bug（按严重程度排列）

#### 🔴 P1 - 阻塞性问题（需立即处理）

| Issue 编号 | 标题 | 环境 | 状态 | 是否有 Fix PR |
|-----------|------|------|------|---------------|
| [#3319](https://github.com/nearai/ironclaw/issues/3319) | Gmail Authentication fails (400) when started from Telegram | hosted-staging (crab shack) | OPEN | ❌ |
| [#3320](https://github.com/nearai/ironclaw/issues/3320) | IronClaw in telegram cannot continue if gmail auth failed | hosted-staging | OPEN | ❌ |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | [QA] Telegram in v 0.28.1 does not automatically setup from UI | 0.28.1 | OPEN | ❌ |
| [#3535](https://github.com/nearai/ironclaw/issues/3535) | [QA] UI Timestamps are incorrect for conversations | 0.28.1 | OPEN | ❌ |
| [#2752](https://github.com/nearai/ironclaw/issues/2752) | [QA] command onboard throws db error on provider step | local (cloned) | OPEN | ❌ |

#### 🟡 P2/P3 - 功能性问题

| Issue 编号 | 标题 | 环境 | 状态 | 是否有 Fix PR |
|-----------|------|------|------|---------------|
| [#2283](https://github.com/nearai/ironclaw/issues/2283) | [QA] Web UI does not support file uploads — no way to send files to bot | hosted-staging | OPEN | ❌ |
| [#2991](https://github.com/nearai/ironclaw/issues/2991) | V2 approval flow is broken: unclear prompts, wrong routing, forces sequential execution | hosted-staging (V2 engine) | OPEN | ❌ |
| [#2902](https://github.com/nearai/ironclaw/issues/2902) | Telegram is not working for NEAR Foundation instance | V2 engine | OPEN | ❌ |

### 5.2 今日已关闭的 Bug

| Issue 编号 | 标题 | 关闭时间 | 说明 |
|-----------|------|----------|------|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | Google Sheets OAuth blocked: Error 400 | 2026-05-12 | 已关闭（可能随 #3319 相关认证修复一并处理） |
| [#3128](https://github.com/nearai/ironclaw/issues/3128) | Connecting to Gmail gives 502 | 2026-05-12 | 已关闭 |
| [#3034](https://github.com/nearai/ironclaw/issues/3034) | V2 engine: HTTP tool disabled by default with no onboarding | 2026-05-12 | 已关闭 |

### 5.3 CI/CD 稳定性

| Issue 编号 | 标题 | 严重度 | 说明 |
|-----------|------|--------|------|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failed | 🔴 高 | Full E2E / E2E (v2-engine) 测试失败，commit: cfeae9e678f8c19930d227ad52ef22b0226e9a30 |

---

## 6. 功能请求与路线图信号

### 6.1 新功能请求（今日活跃）

| Issue 编号 | 标题 | 作用域 | 分析 |
|-----------|------|--------|------|
| [#3537](https://github.com/nearai/ironclaw/issues/3537) | Reborn: model memory as a userland capability package | reborn, memory | **重要路线图信号** - 提议将 `ironclaw_memory` 从内核/主机运行时层重构为用户空间的可插拔能力包，支持原生内存、Honcho、mem0 等多种实现 |
| [#3524](https://github.com/nearai/ironclaw/issues/3524) | Reborn: first-class loop hooks roadmap | reborn, hooks | 提议为 Reborn 添加第一优先级钩子支持，支持内联钩子和拦截器两种路径 |
| [#3534](https://github.com/nearai/ironclaw/issues/3534) | Create a tool that downloads logs for debugging | tooling | 用户请求新增日志下载工具用于调试 |
| [#3515](https://github.com/nearai/ironclaw/issues/3515) | docs: wechat channel | docs | 文档补全请求 - WeChat 渠道文档（v0.28.1 已支持） |

### 6.2 路线图关联 PRs

| PR 编号 | 标题 | 与路线图关联 |
|---------|------|-------------|
| [#3544](https://github.com/nearai/ironclaw/pull/3544) | docs(reborn): agent loop skeleton framework spec + 9 workstream briefs | AgentLoop 框架架构规范 |
| [#3521](https://github.com/nearai/ironclaw/pull/3521) | feat(reborn): add substrate composition root | Reborn 组成根 |
| [#3356](https://github.com/nearai/ironclaw/pull/3356) | feat(reborn): add telegram v2 default-off config guard | Telegram v2 配置隔离 |

---

## 7. 用户反馈摘要

### 7.1 真实用户痛点（从评论/Issue 内容提炼）

| 场景 | 痛点描述 | 相关 Issue |
|------|----------|------------|
| **Telegram 场景下的 Gmail 认证** | 用户通过 Telegram 触发 Gmail 添加流程时遭遇 400 认证失败，失败后对话完全卡死，即使执行 `/clear` 也无法恢复 | #3319, #3320 |
| **Web UI 可用性问题** | 本地安装 IronClaw 后，用户完全不知道有 Web UI（localhost:3000），快速上手流程没有引导 | #3500 |
| **文件上传缺失** | 用户通过 Web UI 尝试发送文件给机器人时被阻塞，影响发票处理等需要文件输入的场景 | #2283 |
| **V2 Engine 审批流问题** | 用户反映 V2 审批流程提示不清晰、路由错误、强制顺序执行，体验不佳 | #2991 |
| **时间戳显示错误** | 用户发现对话消息的时间戳不准确，无法作为有效记录参考 | #3535 |

### 7.2 正面反馈信号

- **WeChat 渠道正式上线**：v0.28.1 已支持 WeChat，社区请求补充文档（#3515），表明新渠道功能已就绪
- **Reborn 架构快速成熟**：多个核心基础设施 PR（TurnRunner、MemoryPromptContextService、SkillContextService、数据库操作等）在一天内集中合并，显示 Reborn 重构进入收尾阶段

---

## 8. 待处理积压

### 8.1 长期未响应的 Issues（>7 天无更新）

| Issue 编号 | 标题 | 创建时间 | 最后更新 | 积压天数 | 严重度 | 说明 |
|-----------|------|----------|----------|---------|--------|------|
| [#906](https://github.com/nearai/ironclaw/issues/906) | Register Slack app that will be shared across all hosted IronClaw instances | 2026-03-11 | 2026-05-12 | ~62 天 | 中 | Slack 应用注册需求，创建于 3 月中旬，评论数 0，需评估是否仍需处理 |
| [#1494](https://github.com/nearai/ironclaw/issues/1494) | Add email/password as a signup option | 2026-03-20 | 2026-05-12 | ~53 天 | 中 | 邮箱/密码注册选项需求，评论数 0 |

### 8.2 高优先级待处理事项提醒

| 类别 | 事项 | 建议 |
|------|------|------|
| **P1 Bug** | Gmail/Telegram 认证链路问题（#3319, #3320） | 已有多个关联 Issue，建议统一排查认证回调流程 |
| **P1 Bug** | Telegram v0.28.1 UI 配对引导问题（#3533） | 新版本发布当天即出现引导问题，需快速响应 |
| **CI/CD** | Nightly E2E 失败（#3447） | 需确认失败原因及修复计划 |
| **用户体验** | Web UI 文件上传缺失（#2283） | 长期开放，建议评估实现优先级 |
| **文档** | WeChat 渠道文档（#3515） | 功能已上线，文档待补充 |

---

## 附录：关键链接汇总

| 类型 | 链接 |
|------|------|
| 项目主页 | https://github.com/nearai/ironclaw |
| Issues 列表 | https://github.com/nearai/ironclaw/issues |
| PRs 列表 | https://github.com/nearai/ironclaw/pulls |
| Actions | https://github.com/nearai/ironclaw/actions |
| Reborn Epic | #2987 |

---

*报告生成时间：2026-05-13 | 数据来源：GitHub API | 分析周期：过去 24 小时*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期**：2026-05-13  
**数据来源**：GitHub (netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 项目在过去24小时内保持**高度活跃**状态，共完成 **26 条 PR 更新**，其中 **25 条已合并/关闭**，另有 1 条依赖更新 PR 待合并。今日无新 Issue 报告也无版本发布，但项目在 UI 交互、跨平台兼容性（macOS 语音输入、中文路径支持）和多 Agent 功能方面取得显著进展。值得关注的是维护者 **@fisherdaddy** 贡献了大量 UI 优化和功能增强 PR，显示项目正进入功能完善和用户体验提升阶段。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

过去24小时共合并/关闭 **25 条 PR**，按影响范围分类如下：

### 🚀 重大功能更新

| PR 编号 | 标题 | 作者 | 合并时间 |
|---------|------|------|----------|
| [#1961](https://github.com/netease-youdao/LobsterAI/pull/1961) | Release/2026.5.11 | @liuzhq1986 | 2026-05-12 |
| [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) | 每个 Agent 支持独立的工作目录 | @fisherdaddy | 2026-05-12 |

**PR #1961** 摘要：
- 新增 **Dreaming 记忆整合**功能：支持后台记忆整合，提供开关、CRON 调度、时区和模型覆盖选项
- 重构记忆设置为标签页布局，新增 Dreaming 状态和日记展示
- 升级 **Youdao Note Skill** 至 v1.0.9

---

### 🐛 关键 Bug 修复

| PR 编号 | 标题 | 作者 | 合并时间 |
|---------|------|------|----------|
| [#1960](https://github.com/netease-youdao/LobsterAI/pull/1960) | 修复多 Agent 切换时 IM 不工作的问题 | @fisherdaddy | 2026-05-12 |
| [#1958](https://github.com/netease-youdao/LobsterAI/pull/1958) | 支持复制 PNG/JPEG 图片，修复 Mermaid 缩放 | @liugang519 | 2026-05-12 |
| [#1956](https://github.com/netease-youdao/LobsterAI/pull/1956) | macOS 语音输入权限修复 | @liuzhq1986 | 2026-05-12 |
| [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955) | 修复中文路径下"在浏览器中打开"无反应 | @btc69m979y-dotcom | 2026-05-12 |
| [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) | macOS 语音输入权限拒绝后显示 toast 提示 | @btc69m979y-dotcom | 2026-05-12 |
| [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) | 修复 IM 频道聊天历史时间显示错误 | @fisherdaddy | 2026-05-12 |
| [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) | 修复重启后默认模型不是最后一次选择的模型 | @fisherdaddy | 2026-05-12 |

---

### 🎨 UI/UX 优化

| PR 编号 | 标题 | 作者 |
|---------|------|------|
| [#1959](https://github.com/netease-youdao/LobsterAI/pull/1959) | 优化 UI |
| [#1954](https://github.com/netease-youdao/LobsterAI/pull/1954) | 更新模型选择、输入 UI 和选中技能 UI |
| [#1937](https://github.com/netease-youdao/LobsterAI/pull/1937) | 优化主 UI |
| [#1935](https://github.com/netease-youdao/LobsterAI/pull/1935) | 更新默认空历史标题样式 |
| [#1924](https://github.com/netease-youdao/LobsterAI/pull/1924) | 优化 Agent 布局 |
| [#1911](https://github.com/netease-youdao/LobsterAI/pull/1911) | 优化 Agent UI |

---

## 4. 社区热点

**今日无新 Issue 讨论**。在 PR 层面，以下变更值得关注：

### 热门 PR 话题

**1. 多 Agent 工作目录支持**（#1904）
- 实现了每个 Agent 拥有独立工作目录的功能，大幅提升多任务场景下的隔离性
- [PR 链接](https://github.com/netease-youdao/LobsterAI/pull/1904)

**2. macOS 语音输入权限处理**（#1952, #1956）
- 针对 macOS 辅助功能权限拒绝场景，增加 toast 提示引导用户前往系统设置开启权限
- 实现三层级 Fallback 机制：Edit 菜单 → 键码 96 → Fn+Fn
- [PR 链接](https://github.com/netease-youdao/LobsterAI/pull/1952)

**3. 中文路径兼容性修复**（#1955）
- 解决 Windows 系统下中文路径导致文件无法打开的问题
- 改用 `shell.openPath()` 替代 `shell.openExternal()`
- [PR 链接](https://github.com/netease-youdao/LobsterAI/pull/1955)

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 相关 PR |
|---------|---------|------|---------|
| 🟡 **中等** | macOS 语音输入权限拒绝后无反馈 | **已修复** | [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) |
| 🟡 **中等** | 多 Agent 切换时 IM 功能失效 | **已修复** | [#1960](https://github.com/netease-youdao/LobsterAI/pull/1960) |
| 🟡 **中等** | Windows 中文路径下无法打开文件 | **已修复** | [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955) |
| 🟢 **低** | IM 频道聊天历史时间显示错误 | **已修复** | [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) |
| 🟢 **低** | 重启后默认模型不正确 | **已修复** | [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) |

**稳定性评估**：今日所有报告的 Bug 均已提供修复 PR，无未关闭的回归问题。项目稳定性良好。

---

## 6. 功能请求与路线图信号

### 待处理 PR

**1. 依赖更新**（#1277）
- **状态**：OPEN，待合并
- **内容**：Bump electron group，包含 electron 40.2.1 → 42.0.1 和 electron-builder 更新
- **影响范围**：1 个目录
- **建议**：建议维护者尽快审核合并，以获得安全补丁和性能改进
- [PR 链接](https://github.com/netease-youdao/LobsterAI/pull/1277)

### 路线图信号分析

基于今日 PR 合并情况，项目下一版本可能包含以下功能方向：

1. **Dreaming 记忆系统**：可配置的 AI 记忆整合机制
2. **多 Agent 增强**：独立工作目录、头像自定义
3. **跨平台体验统一**：重点修复 macOS/Windows 平台差异
4. **UI/UX 现代化**：统一的模型选择器、输入框和技能展示组件

---

## 7. 用户反馈摘要

**今日无新 Issue 评论**，无法提取直接用户反馈。

从今日合并的 PR 可推断以下用户痛点已得到解决：

| 痛点 | 对应修复 |
|------|----------|
| macOS 上语音输入无权限提示 | PR #1952 |
| 中文项目路径下无法预览文件 | PR #1955 |
| 切换 Agent 后聊天记录丢失 | PR #1960 |
| 每次重启需重新选择模型 | PR #1905 |

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 | 积压时长 | 建议 |
|------|------|------|------|----------|------|
| PR | #1277 | Dependabot electron group 更新 | **OPEN** | ~41 天 | 建议尽快合并以获取安全更新 |

**积压统计**：1 条待合并 PR，无长期未响应的 Issue。

---

## 📊 项目健康度指标

| 指标 | 数值 | 评估 |
|------|------|------|
| 今日 PR 合并数 | 25 | 🟢 非常活跃 |
| 今日 Issue 新增 | 0 | 🟢 无负面反馈 |
| Bug 修复效率 | 100% | 🟢 所有已知 Bug 均有 fix |
| 积压 PR | 1 | 🟢 低积压 |

---

*报告生成时间：2026-05-13*  
*数据截至：2026-05-12 23:59 UTC*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报  
**日期：2026‑05‑13**  

---

## 1. 今日速览  
过去 24 小时，Moltis 项目整体活跃度偏低。代码库保持原样，未有 PR 合并或新版本发布。仅收到 **1 条新 Issue**（#994）——一个关于聊天界面出现横向滚动的回归 Bug，且截至目前尚未获得评论或点赞。项目的健康度仍处于“稳定‑待修复”状态，需尽快定位并修复该 Bug 以免影响用户体验。  

| 项目指标 | 数值 |
|----------|------|
| 新增 Issues（活跃） | 1 |
| 关闭 Issues | 0 |
| 新增 PR | 0 |
| 合并/关闭 PR | 0 |
| 新 Releases | 0 |

---

## 2. 版本发布  
**无新版本发布**。目前项目仍在使用最新正式版，建议使用者如未遇到 #994 所述横向滚动问题，可继续正常使用。  

---

## 3. 项目进展  
过去 24 小时内 **无任何 PR 合并或关闭**，代码库未产生新提交。项目进度在此期间基本停滞，说明维护团队正处于 Bug 排查与修复的准备阶段。  

---

## 4. 社区热点  
- **Issue #994 – “chat has horizontal scrolling again”**  
  - 链接：https://github.com/moltis-org/moltis/issues/994  
  - 状态：**OPEN**  
  - 作者：@vvuk  
  - 创建时间：2026‑05‑13  
  - 评论数：0 | 👍：0  

> **热点分析**：该 Issue 是今日唯一被打开的讨论，且已标记为 `[bug]`，表明用户在实际使用聊天功能时遭遇了 UI 渲染问题。缺乏评论与反应可能意味着问题相对局部，但在后续若出现类似报告，可能会形成累计热点。建议维护者及时确认复现场景并提供临时修复方案（如 CSS overflow 控制），以防问题扩散。  

---

## 5. Bug 与稳定性  
| 编号 | 标题 | 严重程度* | 状态 | 是否有 Fix PR |
|------|------|------------|------|---------------|
| #994 | chat has horizontal scrolling again | **中** | OPEN | 无 |

> **说明**：  
> - **严重程度**基于常见 UI Bug 对用户体验的影响（横向滚动会导致阅读困难）且已有回归标记（暗示之前已修复），因此定位为 **中**。  
> - 目前社区尚未出现明确的 Fix PR，维护者需主动排查最近 UI/CSS 变更或布局框架更新。  
> - 若后续确认是样式冲突，可通过调整 `overflow-x: hidden` 或限制 `max-width` 进行快速止血。  

---

## 6. 功能请求与路线图信号  
**今日未收到新功能请求（Feature Requests）**。由于项目活跃度偏低，未出现用户对下一步特性的明确诉求。若后续在 Issue 讨论中出现用户对“聊天滚动行为”或“UI 交互”的改进建议，需结合已有代码评审情况评估是否纳入路线图。  

---

## 7. 用户反馈摘要  
- **反馈来源**：Issue #994（@vvuk）  
- **核心诉求**：聊天界面出现横向滚动，影响正常阅读。用户已在预检清单中勾选了“已搜索现有 Issue”，说明此问题可能为回归，且在最新版本仍未得到解决。  
- **使用场景**：聊天会话时出现横向滚动，暗示可能涉及消息容器宽度、表情/媒体嵌入或窗口缩放时的布局异常。  

> **洞察**：  
> 1. **回归风险**：该 Bug 曾在先前版本中修复，用户再次报告暗示可能的代码回滚或 CSS/布局库升级导致的新冲突。  
> 2. **用户期望**：快速止血（临时修复）+后续根本性排查，以避免再次出现相同问题。  

---

## 8. 待处理积压  
| 编号 | 标题 | 打开时间 | 备注 |
|------|------|----------|------|
| #994 | chat has horizontal scrolling again | 2026‑05‑13 | 当前唯一活跃 Issue，需优先定位并修复。 |

> **建议**：  
> - **优先级**：将 #994 标记为 `high priority`（如果项目使用标签体系），并分配给负责 UI/前端模块的维护者。  
> - **快速响应**：在 Issue 中请求作者提供浏览器版本、窗口尺寸、是否有自定义主题等信息，以加速复现。  
> - **长期视角**：若后续出现更多类似 UI 回归，建议在 CI 流水线中加入视觉回归测试（如 `percy`、`chromatic`）以提前捕获。  

---

**报告结束**  
如需进一步分析或对特定 Issue/PR 进行深入调研，请随时告知。祝项目健康推进！ 🚀

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

**报告日期：2026-05-13**

---

## 1. 今日速览

QwenPaw 项目今日保持高度活跃，共处理 **28 条 Issues**（新开/活跃 18，关闭 10）和 **39 条 PRs**（待合并 12，已合并/关闭 27）。发布 **v1.1.7-beta.1** 版本，修复了火山引擎 Provider 模型配置问题。社区重点关注 MCP 认证缺陷、浏览器稳定性、多 Agent 协作循环等问题。整体代码合并节奏稳健，功能迭代与 Bug 修复并行推进。

---

## 2. 版本发布

### v1.1.7-beta.1 已发布

| 项目 | 详情 |
|------|------|
| 版本号 | v1.1.7-beta.1 |
| 发布类型 | Beta 预发布 |
| 变更数量 | 2 项 |

**主要变更：**

1. **Fix(provider):** 修复火山引擎（VOLCENGINE）Provider 中模型配置问题
   - PR #4169 by @Nioolek
2. **Fix(console):** 改善 Plan Pa...（文本对比度优化，前端 UI 改进）
   - PR #4196 by @xieyxclack

> 📎 链接：https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.7-beta.1

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR # | 标题 | 贡献者 | 状态 | 意义 |
|------|------|--------|------|------|
| **#4242** | Protect backup routes when auth is disabled | @jinglinpeng | ✅ Closed | 增强备份 API 安全性，确保无认证主机无法访问敏感操作 |
| **#4248** | Add Qwen-Image, Wan 2.7 plugins | @rayrayraykk | ✅ Closed | 新增两个 DashScope 图像生成工具插件（GPT-Image2 重构 + Wan 2.7）|
| **#4250** | Streamline session file handling | @zhijianma | ✅ Closed | 重构会话文件处理，移除冗余代码 |
| **#2843** | Browser idle watchdog self cancel | @x1n95c | ✅ Closed | 修复浏览器空闲超时后进程不退出的 Bug |
| **#4197** | Async execution for delegate_external_agent | @x1n95c | ✅ Closed | 提升外部 Agent 委托的异步执行能力 |
| **#3589** | Adopt official ACP SDK | @x1n95c | ✅ Closed | ACP 集成层全面升级，官方 SDK 适配 |
| **#3859** | ACP agent rename/delete in WebUI | @x1n95c | ✅ Closed | Console 端 ACP Agent 重命名与删除功能 |

**里程碑评估：** 本次合并涵盖安全强化、图像插件生态扩展、ACP 协作框架完善、浏览器工具链稳定性修复四大方向，项目核心能力持续稳步提升。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 类型 | 评论数 | 热度分析 |
|---------|------|------|--------|----------|
| **#4159** | DashScope provider API Key 配置正确但运行时空值，触发 401 | 🐛 Bug | 6 | Provider 配置加载链路疑存缺陷，影响所有 DashScope 用户 |
| **#3499** | 访问页面慢（调用接口时快时慢） | 🐛 Bug | 6 | 性能问题，社区持续关注，已标记 Closed 但根本原因待确认 |
| **#4220** | auto_memory_interval 不同步向量索引 | 🐛 Bug | 4 | 记忆系统核心缺陷，`memory_search` 功能失效 |
| **#4251** | Team Leader ack mirror loop | 🐛 Bug | 3 | 多 Agent 协作运行时生命周期守卫缺失 |
| **#3969** | FunctionCallOutput validation error | 🐛 Bug | 4 | 严重逻辑 Bug，`call_id` 为空导致 ValidationError |
| **#4185** | Malformed empty tool_use 阻止聊天打开 | 🐛 Bug | 4 | 会话持久化数据损坏场景下的健壮性问题 |
| **#4259** | 增加预制 Agent 模板 | ✨ Feature | 2 | 用户强烈需求，降低非技术用户门槛 |

> 📎 热点 Issues 合集：https://github.com/agentscope-ai/QwenPaw/issues?q=is%3Aissue+updated%3A%3E%3D2026-05-12

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue # | 问题描述 | 状态 | 是否有 Fix PR |
|---------|----------|------|---------------|
| **#4227** | MCP `stream_http` 模式返回 401 时整个调用阻塞直至超时（PR #4256 正在修复 MCP OAuth 认证）| 🟠 Open | 🔄 #4256 |
| **#4220** | `auto_memory_interval` 写入记忆文件但不同步向量索引 | 🟠 Open | ❌ 无 |
| **#3969** | `FunctionCallOutput` 当 `call_id` 为 None 时抛出 ValidationError | ✅ Closed | 已关闭，可能已修复 |
| **#4185** | 会话历史包含畸形 empty tool_use 导致聊天无法打开 | ✅ Closed | 已关闭 |

### 严重程度：中 🟡

| Issue # | 问题描述 | 状态 | 是否有 Fix PR |
|---------|----------|------|---------------|
| **#4244** | `shell_evasion_checks.newlines=True` 静默阻止多行命令 | 🟡 Open | ❌ 无 |
| **#4227** | MCP 401 错误阻塞（见上）| 🟠 Open | 🔄 #4256 |
| **#4257** | 浏览器空闲超时过早触发，无自愈机制 | 🟡 Open | 🔄 #4254 |
| **#3816** | macOS Desktop `file://` 协议链接无法打开本地文件 | 🟡 Open | ❌ 无 |
| **#4239** | 桌面客户端外部链接无法打开系统浏览器 | 🟡 Open | ❌ 无 |

### 严重程度：低 🟢

| Issue # | 问题描述 | 状态 | 备注 |
|---------|----------|------|------|
| **#4260** | Console 文件消息标题空白、UI 尺寸异常 | 🟢 Open | UI 细节问题 |
| **#4243** | 浏览器无法下载文件 | 🟢 Open | 文件处理链路问题 |

> 📎 所有 Open Bugs：https://github.com/agentscope-ai/QwenPaw/issues?q=is%3Aissue+label%3ABug+is%3Aopen

---

## 6. 功能请求与路线图信号

### 新功能提案（按社区呼声排序）

| Issue # | 提案 | 贡献者 | 已有相关 PR | 纳入版本可能性 |
|---------|------|--------|------------|----------------|
| **#4259** | 增加预制 Agent 模板，降低非技术用户门槛 | @xlg1024 | ❌ 无 | ⭐⭐ 中 |
| **#4247** | Telegram 等频道流式传输支持 | @xuhao0080 | ❌ 无 | ⭐⭐ 中 |
| **#4258** | 回滚按钮和合作日记模块 | @qiuqiukof-oss | ❌ 无 | ⭐ 低 |
| **#4249** | 会话生命周期钩子（session.create 等） | @ljl3937 | ❌ 无 | ⭐⭐⭐ 高（开发者工具类）|
| **#4237** | 聊天内 Shell 命令可观测性面板（查看/终止/延期） | @ekzhu | ❌ 无 | ⭐⭐⭐ 高（运维友好）|
| **#4211** | 对齐 `multi_agent_collaboration` skill 与内置 Agent 间工具 | @suntp | ❌ 无 | ⭐⭐⭐ 高（文档/体验）|

### 已进入 Review 的功能 PRs

| PR # | 功能 | 状态 | 预计版本 |
|------|------|------|----------|
| **#4254** | 浏览器活动追踪、崩溃监控、生命周期管理 | 🔄 Open | 可能进入 v1.1.7 |
| **#4210** | Cron & Inbox 定时任务与收件箱 | 🔄 Open | ⭐ 核心功能 |
| **#4256** | MCP 远程服务器的 OAuth 2.1 PKCE 支持 | 🔄 Open | ⭐⭐ 安全相关 |
| **#4255** | 插件注册 FastAPI APIRouter | 🔄 Open | ⭐⭐ 扩展性 |
| **#3813** | Tauri 2.x 桌面应用支持 | 🔄 Review | ⭐⭐⭐ 桌面生态 |
| **#4120** | Matrix E2EE 验证步骤增强 | 🔄 Review | ⭐⭐ 安全 |

---

## 7. 用户反馈摘要

### 核心痛点

1. **Provider 配置加载失败**  
   - DashScope 用户配置正确但 API Key 未被读取，导致 401 错误  
   - 火山引擎用户无法按官方参数关闭 thinking 模式

2. **浏览器稳定性问题**  
   - 空闲超时过早触发（#4257）  
   - 崩溃后无自愈机制  
   - macOS/Desktop 客户端文件链接、浏览器链接无法正常工作

3. **Shell 执行环境受限**  
   - 硬编码 `/bin/sh` 导致 bash 特性不可用（#3767）  
   - Windows 用户无法选择系统已安装 shell（#4103）  
   - 多行命令被静默阻止（#4244）

### 用户场景

- **非技术用户**：期望预制 Agent 模板，减少配置复杂度（#4259）  
- **企业协作场景**：Matrix Team Room 多 Agent 协作存在 ack 循环（#4251）  
- **深度用户**：需要 Telegram 流式推送避免长时间等待（#4247）  
- **开发者用户**：需要会话生命周期钩子进行定制化初始化（#4249）

### 满意度信号

- **正面**：ACP 相关功能迭代受好评（多个 PR 合并），新插件生态扩展（Qwen-Image、Wan 2.7）  
- **待改进**：桌面客户端打包后启动失败（#4230）、Web 端大 token 会话卡顿（#4213）

---

## 8. 待处理积压

### 长期未响应的 Issue（>7 天无维护者回复）

| Issue # | 问题 | 创建时间 | 最后更新 | 优先级 |
|---------|------|----------|----------|--------|
| **#3816** | macOS Desktop `file://` 链接无法打开 | 2026-04-24 | 2026-05-12 | 🟡 中 |
| **#2986** | Windows 上使用 POSIX 工具 | 2026-04-06 | 2026-05-12 | 🟢 低 |

### 高影响 Open Issue 无对应 Fix PR

| Issue # | 问题 | 严重程度 | 建议行动 |
|---------|------|----------|----------|
| **#4220** | auto_memory 不同步向量索引 | 🔴 高 | 需维护者确认并分配 |
| **#4244** | 多行 shell 命令被静默阻止 | 🟡 中 | 需安全与功能权衡决策 |
| **#3816** | macOS 文件链接失效 | 🟡 中 | 桌面客户端专项 |
| **#4239** | 外部链接无法打开浏览器 | 🟡 中 | 桌面客户端专项 |

### 建议关注

- **#4251** 已 Closed，但根因是运行时缺少 lifecycle guard，可能需要后续系统性改进  
- **#4259** 预制模板需求代表用户群体扩展方向，建议产品路线图纳入

---

## 附录：完整数据链接

| 资源 | 链接 |
|------|------|
| 今日所有 Issues | https://github.com/agentscope-ai/QwenPaw/issues?q=updated%3A%3E%3D2026-05-12 |
| 今日所有 PRs | https://github.com/agentscope-ai/QwenPaw/pulls?q=updated%3A%3E%3D2026-05-12 |
| Open Bugs | https://github.com/agentscope-ai/QwenPaw/issues?q=is%3Aissue+label%3ABug+is%3Aopen |
| Open Features | https://github.com/agentscope-ai/QwenPaw/issues?q=is%3Aissue+label%3Aenhancement+is%3Aopen |
| Release 页面 | https://github.com/agentscope-ai/QwenPaw/releases |

---

*报告生成时间：2026-05-13 | 数据来源：GitHub agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**报告日期**：2026-05-13  
**项目**：qhkm/zeptoclaw  
**数据来源**：GitHub API

---

## 1. 今日速览

2026年5月12日，ZeptoClaw 项目保持低活跃度运行。全天无新增 Issue 报告，亦无新版本发布。Pull Request 层面，依赖维护工作持续推进，共处理 3 条 PR（1 条已合并，2 条待处理）。所有 PR 均来自 Dependabot 自动依赖更新请求，覆盖 GitHub Actions 与 Docker 基础镜像两个层面。项目当前处于常规维护状态，无重大功能推进或阻塞性问题。

---

## 2. 版本发布

**无新版本发布。**

项目最近一次发布信息请参考 GitHub Releases 页面：https://github.com/qhkm/zeptoclaw/releases

---

## 3. 项目进展

### ✅ 已合并 Pull Request

| PR 编号 | 标题 | 类型 | 合并时间 |
|---------|------|------|----------|
| [#574](https://github.com/qhkm/zeptoclaw/pull/574) | chore(deps): bump taiki-e/install-action from 2.75.17 to 2.75.22 | dependencies, github_actions | 2026-05-12 |

**详情**：该 PR 由 Dependabot 自动创建于 2026-05-05，经过 7 天审查周期后于 2026-05-12 合并。将 GitHub Actions 生态中的 `taiki-e/install-action` 从 v2.75.17 升级至 v2.75.22，确保项目使用最新版本的操作工具，消除潜在安全风险与兼容性问题。

### ⏳ 待处理 Pull Request

| PR 编号 | 标题 | 状态 | 创建时间 |
|---------|------|------|----------|
| [#586](https://github.com/qhkm/zeptoclaw/pull/586) | chore(deps): bump taiki-e/install-action from 2.75.17 to 2.75.29 | OPEN | 2026-05-12 |
| [#585](https://github.com/qhkm/zeptoclaw/pull/585) | chore(deps): bump debian from `cedb1ef` to `109e2c6` | OPEN | 2026-05-12 |

**分析**：今日有两条依赖更新 PR 处于待合并状态，建议维护者尽快审阅。其中 PR #586 将 `taiki-e/install-action` 进一步升级至 v2.75.29，与刚合并的 #574 形成连续追赶；PR #585 更新 Docker 基础镜像至 Debian trixie-slim 最新提交。

---

## 4. 社区热点

**今日无活跃讨论。**  
过去 24 小时内无新增 Issue，亦无热门讨论线程。社区互动记录显示用户参与度处于较低水平，项目当前以自动化依赖维护为主。

---

## 5. Bug 与稳定性

**今日无 Bug 报告。**  
未监测到崩溃、回归或稳定性问题。项目状态平稳。

---

## 6. 功能请求与路线图信号

**今日无新功能请求。**  
过去 24 小时内未收到功能提案或路线图讨论请求。

---

## 7. 用户反馈摘要

**今日无用户反馈记录。**  
未发现来自 Issue 评论区的真实用户痛点、使用场景或满意度反馈。

---

## 8. 待处理积压

### 建议关注

| 类型 | 编号 | 摘要 | 创建日期 | 积压时长 |
|------|------|------|----------|----------|
| PR | [#585](https://github.com/qhkm/zeptoclaw/pull/585) | bump debian base image to `109e2c6` (trixie-slim) | 2026-05-12 | 1 天 |
| PR | [#586](https://github.com/qhkm/zeptoclaw/pull/586) | bump taiki-e/install-action to v2.75.29 | 2026-05-12 | 1 天 |

**提醒维护者**：上述两条依赖更新 PR 已处于 Open 状态 1 天，建议按项目节奏审阅合并，以保持依赖版本时效性。

---

## 📊 关键指标速览

| 指标 | 数值 | 趋势 |
|------|------|------|
| 今日新增 Issues | 0 | 持平 |
| 今日新增 PRs | 3 | ↑ 较前日增加 |
| 今日合并 PRs | 1 | - |
| 待处理 PRs | 2 | 待处理 |
| 新版本发布 | 0 | 持平 |

---

*报告生成时间：2026-05-13 | 数据截止：2026-05-12 23:59 UTC*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>librefang</strong> — <a href="https://github.com/librefang/librefang">librefang/librefang</a></summary>

# LibreFang 项目动态日报

**报告日期**: 2026-05-13  
**项目**: librefang/librefang  
**数据来源**: GitHub Activity (过去24小时)

---

## 1. 今日速览

LibreFang 今日保持了极高的开发活跃度，共产生 74 条 Issue/PR 更新（37 Issues + 37 PRs）。项目正式发布 **v2026.5.12-beta.11**，一次性合并了 **95 个 PRs**，标志着 Workflow Engine 核心功能（workflow_start/cancel/list/status）正式落地。虽然有 3 个 CI 任务被报告失败或取消，但整体健康度良好，12 个 PR 待合并，Pipeline 处于正常迭代节奏中。当前热点集中在运行时优化（压缩、缓存、去重）和 Dashboard 增强两个方向。

---

## 2. 版本发布

### 🎉 v2026.5.12-beta.11 正式发布

| 项目 | 详情 |
|------|------|
| **版本号** | v2026.5.12-beta.11 |
| **发布时间** | 2026-05-12 |
| **贡献者** | 5 位 |
| **PR 数量** | 自 v2026.5.8-beta.10 以来合并 95 个 |
| **Commit** | [PR #4966](https://github.com/librefang/librefang/pull/4966) |

### 核心亮点：Workflow Engine GA

```
✨ 新增 4 个原生工具：
  • workflow_start  — 启动多步骤工作流
  • workflow_cancel — 取消运行中的工作流
  • workflow_list   — 列出工作流定义
  • workflow_status — 查询执行状态
```

**关键特性**：
- Agents 现在可以原生启动、取消和监控多步骤工作流
- 工作流运行历史持久化
- 跨工作流和委托的异步任务追踪框架已建立

> ⚠️ 注意：本次发布同时引入了一个回归问题 — Issue [#4985](https://github.com/librefang/librefang/issues/4985) 报告 approval 通知会广播给所有渠道适配器，不再按 `approval.agent_id` 过滤。

---

## 3. 项目进展

### ✅ 已合并的重要 PRs

| PR | 作者 | 描述 | 关联 Issue |
|----|------|------|-----------|
| [#4966](https://github.com/librefang/librefang/pull/4966) | @houko | **Release v2026.5.12-beta.11** | - |
| [#4964](https://github.com/librefang/librefang/pull/4964) | @houko | feat(runtime): `web_fetch_to_file` — 直接下载 URL 到磁盘 | - |
| [#4957](https://github.com/librefang/librefang/pull/4957) | @houko | fix(metering,dashboard): 排除 cache-read 命中从 burst limit；排序 agent-detail skills | #4943 |
| [#4932](https://github.com/librefang/librefang/pull/4932) | @houko | feat(runtime,kernel): mirror channel_send into inbound-routing session | #4824 |
| [#4967](https://github.com/librefang/librefang/pull/4967) | @f-liva | fix(claude-code): 保留 ANTHROPIC_API_KEY 在子进程环境 | - |
| [#4955](https://github.com/librefang/librefang/pull/4955) | @houko | fix(runtime/tests): Session literal 添加缺失的 model_override | - |
| [#4950](https://github.com/librefang/librefang/pull/4950) | @dependabot | chore(deps): bump r2d2_sqlite 0.33.0 → 0.34.0 | - |

### 🔄 待合并的 PRs (12 个)

| PR | 作者 | 描述 | 优先级 |
|----|------|------|--------|
| [#4986](https://github.com/librefang/librefang/pull/4986) | @DaBlitzStein | fix(api,kernel): 修复 PATCH partial update path 中忽略 schedule 字段 | 🔴 高 |
| [#4963](https://github.com/librefang/librefang/pull/4963) | @DaBlitzStein | feat(dashboard): Agent 详情页 Skills/MCP/Channels/Schedule 分页 | 🔴 高 |
| [#4961](https://github.com/librefang/librefang/pull/4961) | @DaBlitzStein | feat(types,kernel,api): per-agent channel allowlist | 🟡 中 |
| [#4922](https://github.com/librefang/librefang/pull/4922) | @DaBlitzStein | feat(kernel): provider-aware token budget with pre-dispatch gating | 🟡 中 |
| [#4987](https://github.com/librefang/librefang/pull/4987) | @DaBlitzStein | fix(llm-drivers): 重试瞬态 HTTP/timeout 错误再降级 | 🟡 中 |
| [#4760](https://github.com/librefang/librefang/pull/4760) | @f-liva | fix(runtime): 关闭 prompt-leak + sentinel-regurgitation 向量 | 🟡 中 |

### 🔧 CI/依赖更新 PRs

| PR | 描述 |
|----|------|
| [#4990](https://github.com/librefang/librefang/pull/4990) | bump actions/setup-python 5 → 6 |
| [#4988](https://github.com/librefang/librefang/pull/4988) | bump pnpm/action-setup, actions/labeler, sigstore/cosign-installer, Apple-Actions/upload-testflight-build |
| [#4989](https://github.com/librefang/librefang/pull/4989) | bump apple-actions/import-codesign-certs |

---

## 4. 社区热点

### 📊 今日评论数 TOP Issues

| # | 标题 | 评论 | 状态 | 链接 |
|---|------|------|------|------|
| 1 | CI failure on PR #4947 (opentelemetry bump) | 9 | 🔴 CLOSED | [#4956](https://github.com/librefang/librefang/issues/4956) |
| 2 | CI cancelled on PR #4930 (mcp_disabled field) | 2 | 🔴 CLOSED | [#4954](https://github.com/librefang/librefang/issues/4954) |
| 3 | fix(dashboard): sort skills, MCP servers alphabetically | 1 | 🟢 OPEN | [#4940](https://github.com/librefang/librefang/issues/4940) |

### 🔥 核心讨论主题

**1. CI Pipeline 稳定性 (Issue #4956)**
- 涉及 9 条评论，是今日最活跃讨论
- 根因：`opentelemetry` 从 0.31.0 升级到 0.32.0 导致 Windows 测试失败
- 影响多个 PR 的合并节奏
- **信号**：项目对依赖升级的 CI 覆盖需要加强

**2. Dashboard UX 改进诉求 (Issue #4940)**
- 用户要求 Skills/MCP/Channels 分页按字母排序
- 已有对应 PR #4963 在 review 中
- **信号**：Dashboard 是当前用户满意度的主要瓶颈

---

## 5. Bug 与稳定性

### 🔴 严重 Bug

| Issue | 描述 | 来源 | Fix PR |
|-------|------|------|--------|
| [#4985](https://github.com/librefang/librefang/issues/4985) | **Approval 通知回归** — v2026.5.12-beta.11 (PR #4881) 后，所有 approval 请求广播给所有渠道适配器，不再按 `approval.agent_id` 过滤。安全回归！ | @nevgenov | - |
| [#4984](https://github.com/librefang/librefang/issues/4984) | PATCH /api/agents/{id} 忽略 schedule 字段 — Schedule 分页无法切换连续/手动模式 | @DaBlitzStein | [#4986](https://github.com/librefang/librefang/pull/4986) |
| [#4958](https://github.com/librefang/librefang/issues/4958) | TokenUsage.input_tokens 有 provider-specific 语义，estimate_cost_from_rates 和 burst_tokens 在 Anthropic 上静默少算 | @houko | - |

### 🟡 中等 Bug

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#4959](https://github.com/librefang/librefang/issues/4959) | channel_send 到 Telegram 时，audio/ogg 使用 sendDocument 而非 sendVoice | - |
| [#4981](https://github.com/librefang/librefang/issues/4981) | media_transcribe 拒绝读取 kernel 下载的入站媒体（workspace sandbox vs kernel staging dir） | - |
| [#4978](https://github.com/librefang/librefang/issues/4978) | 工作流编辑器无法删除连接箭头 | - |
| [#4918](https://github.com/librefang/librefang/issues/4918) | MCP 分页在 'all' 模式下隐藏服务器列表，错误的 '+' 目标 | - |

### 🟢 已修复

| Issue | 修复 PR | 描述 |
|-------|---------|------|
| [#4942](https://github.com/librefang/librefang/issues/4942) | 已合并 | fix(compaction): 默认 max_summary_tokens=1024 导致上下文灾难性丢失 |
| [#4941](https://github.com/librefang/librefang/issues/4941) | 已合并 | fix(dashboard/channels): 实例别名 + 显示所有可配置字段 |
| [#4943](https://github.com/librefang/librefang/issues/4943) | [#4957](https://github.com/librefang/librefang/pull/4957) | fix(metering): cached/prompt-cache tokens 不应计入 burst limit |
| [#4923](https://github.com/librefang/librefang/issues/4923) | 已合并 | KV memory 未写入数据库 + 文档缺失 |

---

## 6. 功能请求与路线图信号

### 🚀 高优先级 Enhancement（已有关联 PR）

| Issue | 描述 | 关联 PR |
|-------|------|--------|
| [#4983](https://github.com/librefang/librefang/issues/4983) | feat(kernel,runtime): async task tracker — 通过 kernel event injection 实现非阻塞工作流/委托结果 | - |
| [#4982](https://github.com/librefang/librefang/issues/4982) | feat(runtime,workflows): 富工作流调用 — 参数发现、文件/图片输入、结构化结果 | - |
| [#4980](https://github.com/librefang/librefang/issues/4980) | feat(workflows): 非 Agent 操作节点 — wait, gate, approval, transform, branch | - |
| [#4977](https://github.com/librefang/librefang/issues/4977) | feat(workflows): human-in-the-loop 步骤 — 通过渠道进行审批、审查、动态输入 | - |
| [#4979](https://github.com/librefang/librefang/issues/4979) | feat(dashboard/workflows): 工作流运行视图中内联显示生成的图片 | - |
| [#4976](https://github.com/librefang/librefang/issues/4976) | feat(types,runtime): agent.toml 中的 per-agent 压缩设置 | - |

### 💡 运行时优化方向（多个 Issue 聚焦）

| Issue | 描述 |
|-------|------|
| [#4972](https://github.com/librefang/librefang/issues/4972) | feat(runtime): dual-layer compression — 在 agent loop 前的网关安全网 |
| [#4971](https://github.com/librefang/librefang/issues/4971) | feat(runtime): file read deduplication — 阻止未变更文件的重复读取 |
| [#4970](https://github.com/librefang/librefang/issues/4970) | feat(runtime): Anthropic 及兼容 providers 的 prompt caching 策略 |
| [#4968](https://github.com/librefang/librefang/issues/4968) | feat(runtime): 结构化摘要类别 + 迭代更新用于上下文压缩 |
| [#4969](https://github.com/librefang/librefang/issues/4969) | feat(runtime): LLM summarization 前零成本工具结果剪枝 |
| [#4965](https://github.com/librefang/librefang/issues/4965) | feat(kernel): credential pools — 每 provider 多 key 轮换及可配置策略 |

### 📈 路线图信号

1. **工作流系统成熟化**：从核心引擎 (beta.11) 向 human-in-the-loop 和非 Agent 操作节点扩展
2. **运行时效率优先**：多个 Issue 同时聚焦 token 优化（压缩、缓存、去重），预计下个版本会有系统性改进
3. **Dashboard 完善**：Skills/MCP/Channels/Schedule 分页即将完成，用户体验进入新阶段

---

## 7. 用户反馈摘要

### 🔍 从 Issue 评论提炼的痛点

**1. 上下文丢失问题 (Issue #4942)**
> "Default `max_summary_tokens = 1024` means when the compactor summarizes old messages, the summary is ~4 sentences. All prior context, decisions, and conversation history is lost."

- **场景**：用户在使用 Telegram 聊天时，经过约 5 轮对话后 agent 开始"失忆"
- **根因**：压缩设置过于激进，默认值不适合多轮对话场景
- **状态**：已合并修复

**2. KV Memory 未持久化 (Issue #4923)**
> "The problem appears in the form of all new agents asking the user for name, they do not read the shared information about the user and when they attempt to write using the memory store, the data is not added to the database."

- **场景**：新创建的 Agent 无法读取共享用户信息，写入 memory store 后数据未进入数据库
- **根因**：数据库写入链路断路
- **状态**：已修复

**3. MCP 服务器可见性问题 (Issue #4918)**
- 用户在 MCP 分页选择 "All" 模式时，看不到可用的服务器列表，只有泛泛的提示
- **需求**：需要透明展示可用资源

**4. Channel 实例难以区分 (Issue #4941)**
> "Multiple instances of the same type (e.g. two Telegram bots) are indistinguishable"

- **场景**：运行多个同一类型的 Channel 实例时，无法通过名称区分
- **需求**：实例别名 + 完整配置字段展示

---

## 8. 待处理积压

### ⏰ 需要维护者关注的长期待处理项

| Issue/PR | 创建时间 | 状态 | 描述 |
|----------|----------|------|------|
| [#4760](https://github.com/librefang/librefang/pull/4760) | 2026-05-07 | 🔴 needs-changes, has-conflicts | fix(runtime): close prompt-leak + sentinel-regurgitation vectors — 已 6 天，需解决冲突 |
| [#4922](https://github.com/librefang/librefang/pull/4922) | 2026-05-11 | 🔴 needs-changes, has-conflicts | feat(kernel): provider-aware token budget — 已 2 天，需 review |
| [#4985](https://github.com/librefang/librefang/issues/4985) | 2026-05-12 | 🔴 OPEN | **安全回归**：Approval 通知广播给所有渠道 — 需紧急处理 |
| [#4975](https://github.com/librefang/librefang/issues/4975) | 2026-05-12 | 🔴 OPEN | Kernel audio_transcription 未连接到 Telegram 入站 — process_attachments 无调用者 |
| [#4981](https://github.com/librefang/librefang/issues/4981) | 2026-05-12 | 🟡 OPEN | media_transcribe 沙盒路径问题 |

### ⚠️ CI 健康度提醒

3 个 CI 任务在 24 小时内被取消或失败：
- [PR #4947](https://github.com/librefang/librefang/issues/4956) — Windows 测试失败
- [PR #4930](https://github.com/librefang/librefang/issues/4954) — CI cancelled
- [PR #4966](https://github.com/librefang/librefang/issues/4973) — Unit (lib+bin) 测试失败

---

## 📊 健康度指标

| 指标 | 数值 | 评估 |
|------|------|------|
| Issue 活跃度 | 37 条/24h | 🟢 非常高 |
| PR 吞吐量 | 37 条/24h | 🟢 非常高 |
| 版本发布频率 | 1 个/日 | 🟢 稳定节奏 |
| 待合并 PR | 12 个 | 🟡 中等积压 |
| Open Issues | 22 个 | 🟡 中等积压 |
| Bug 报告 | 4 个严重 | 🔴 需关注 |
| CI 状态 | 3 个失败 | 🔴 需修复 |

---

*报告生成时间: 2026-05-13 00:00 UTC*  
*数据来源: GitHub librefang/librefang repository*  
*格式: JSON 日报 | 语言: 中文*

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# openfang 项目动态日报 — 2026-05-13

---

## 1. 今日速览

过去24小时，openfang 社区保持**高度活跃**状态：共处理 **91 条议题更新**（50 Issues + 41 PRs），发布了 **5 个补丁版本**（v0.6.5 → v0.6.9），合并了 **34 个 PR**。最新版本聚焦安全修复（3个 RUSTSEC 漏洞）、WebSocket 重连机制、vLLM 0.19+ 推理字段支持等关键改进。当前代码库保持 **2657 tests 通过，零 clippy 警告，零回归** 的高质量状态。项目整体处于快速迭代期，核心维护者对安全漏洞响应迅速，同时持续推进多租户、多渠道、Agent 工具链等企业级功能。

---

## 2. 版本发布

### v0.6.9 — Security Patches（2026-05-12）
🔴 **重要安全更新**，修复了3个 RUSTSEC 漏洞：

| 依赖升级 | 漏洞编号 | 描述 |
|---------|---------|------|
| `rustls-webpki` 0.103.10 → 0.103.13 | RUSTSEC-2026-0104 | CRL 解析中的可达恐慌 |
| | RUSTSEC-2026-0098 | URI 名称的名称约束错误接受 |
| | RUSTSEC-2026-0099 | 错误接受通配符名称约束 |

> ⚠️ v0.6.8 的 CI 因上述安全问题被破坏，v0.6.9 为紧急修复版本。建议所有用户立即升级。

---

### v0.6.8 — Workspace State Fixes
- **#1097** workspace `state_dir` 分离：私有状态保留在 `~/.openfang/` 下，用户 workspace 不再被污染
- **#1085** Dashboard WebSocket 认证与 HTTP 中间件对齐
- **#1038** 新增 `skill_list` / `skill_describe` / `skill_execute` Agent 工具（替代旧的文件系统兜底逻辑）
- **#1170** `require_signed` 功能已接入

---

### v0.6.7 — Channels & TTS Enhancements
解决了 **7 个社区问题**：
- 重连机制优化
- 卸载功能
- Stop 命令
- Shell 环境变量传递
- TTS URL 配置

---

### v0.6.6 — Discord + vLLM 0.19
解决了 **11 个社区问题**，合并了 **7 个 PR**，覆盖 drivers、channels、dashboard：

- **#1157** vLLM 0.19+ `reasoning` 字段支持（兼容 `reasoning_content` 遗留字段）
- Discord 图片支持
- `create_directory` 工具
- 新增 Bindings 支持

---

### v0.6.5 — Agent Wakeup & Clone
解决了 **8 个社区问题**，合并了 **3 个来自可信贡献者的 PR**：
- **#890** 新增 `agent_activate` 工具和 `POST /api/agents/{id}/activate` 端点，支持编排型 Agent 唤醒挂起或崩溃的对等节点（幂等操作）

---

## 3. 项目进展

过去24小时合并/关闭的重要 PR：

| PR # | 标题 | 贡献者 | 状态 | 意义 |
|------|------|--------|------|------|
| **#1183** | feat(runtime): per-agent file_policy（deny/prompt/read/write 分层）| @benhoverter | 🔴 Closed | 重大安全特性，关闭 #1181，依赖 #1182 |
| **#1054** | feat(discord): smart auto-thread mode (true/false/smart) | @Hypn0sis | ✅ Closed | Discord 频道智能自动线程 |
| **#1162** | feat(channels/discord): 出站文件/图片附件 + image_cache 加固 | @benhoverter | ✅ Closed | 27 commits, +4,141/-64 |
| **#1100** | channels/telegram: 传播发送失败 + 缓存终端反应错误 | @Streamweaver | ✅ Closed | 修复 Telegram 适配器隐藏真实失败的问题 |
| **#1095** | fix(runtime): 跨平台传递 HOME/TMP/TEMP 给 stdio MCP 服务器 | @Streamweaver | ✅ Closed | 修复 Linux/macOS 下 npm/npx 无法工作的问题 |
| **#1193** | Fix: 删除工作流时同步删除文件 | @nimitbhardwaj | 🔄 Open | 修复删除工作流后文件残留导致重启复现的 Bug |
| **#1191** | Add Directory Authentication and Role Mapping | @sempervictus | 🔄 Open | LDAP/LDAPS 外部认证 + RBAC 映射 |
| **#1176** | fix(chat): Shift+Enter 多行输入 + 换行正确显示 | @nimitbhardwaj | ✅ Closed | 关闭 #1141 |
| **#1055** | fix(metering): 本地模型默认定价设为 $0 | @AL-ZiLLA | ✅ Closed | 修复未收录模型错误计费问题 |
| **#1185** | Add feedback_capture and feedback_complete tools | @dinopollece | ✅ Closed | DoVi 反馈循环工具 |
| **#1166** | Add 'native-tls' feature to reqwest | @crust3780 | ✅ Closed | 关闭 #1160 |
| **#1044** | fix: 多模态 Agent 循环中正确保留文本消息 | @LupoGrigi0 | ✅ Closed | 修复图片附件时丢失用户文本的 Bug，关闭 #1043 |
| **#1059** | Update install script | @Myshketski | ✅ Closed | 安装脚本更新 |

### 🔍 重点 PR 分析

**#1183（per-agent file_policy）** 是当前最重要的安全特性，将文件系统访问权限细分为 deny/prompt/read/write 四层，覆盖所有读写工具站点。这意味着企业部署可以针对不同 Agent 设置差异化文件策略，解决 workspace root 锁和 `validate_path` 过于粗糙的问题。

**#1191（LDAP 目录认证）** 面向企业多租户场景，支持 Active Directory / OpenLDAP 认证和基于组的 RBAC 映射，是 #712 多租户支持的必要基础设施。

---

## 4. 社区热点

按评论数排序的最活跃讨论：

### 🔥 Issue #691 — 审核请求通知（8条评论）
📌 [https://github.com/RightNow-AI/openfang/issues/691](https://github.com/RightNow-AI/openfang/issues/691)  
👤 @AL-Mint | 2026-03-17 创建

> **核心诉求**：Agent 运行过程中遇到需要权限审核的请求时，用户无法及时获知，希望能弹出通知窗口。

📈 **热度解读**：审核/审批流程是 Agent 自主性的核心矛盾点。此问题与 #1139（将审批面板移入聊天、延长超时）形成呼应，社区正在推动从"被动审批"向"主动通知"的范式转变。

---

### 🔥 Issue #586 — 多 Bot 路由多 Agent（4条评论）
📌 [https://github.com/RightNow-AI/openfang/issues/586](https://github.com/RightNow-AI/openfang/issues/586)  
👤 @lessthink | 2026-03-13 创建

> **核心诉求**：每个 Bot（如 TG_BOT_01）映射到专属 Agent（agent_01），实现 1:1 对应关系。

📈 **热度解读**：与 #780（基于 thread_id 的 Telegram 路由）、#795（单 Agent 并行会话执行）共同构成多租户/多渠道路由体系。已有 #1191 LDAP 认证和 #1097 workspace 分离为基础能力铺垫。

---

### 🔥 Issue #679 — OAuth Token 迁移与生命周期管理（4条评论）
📌 [https://github.com/RightNow-AI/openfang/issues/679](https://github.com/RightNow-AI/openfang/issues/679)  
👤 @SWSAmor | 2026-03-16 创建

> **核心诉求**：在 `openfang migrate` 中支持 OAuth token 迁移，解决从 OpenClaw 迁移时 auth-profiles 被跳过的问题。

📈 **热度解读**：OAuth 支持与 #1021（订阅认证）、#1180（Capability gate）形成企业级认证体系需求链。

---

### 🔥 Issue #712 — 多租户支持（4条评论）
📌 [https://github.com/RightNow-AI/openfang/issues/712](https://github.com/RightNow-AI/openfang/issues/712)  
👤 @coder-nguoi-tay | 2026-03-18 创建

> **核心诉求**：面向 10,000+ 租户的 SaaS 平台，每个租户自带 LLM API Key、自选模型、独立数据隔离。

📈 **热度解读**：这是目前企业场景中最重要的 Epic Issue。结合 #1191（LDAP认证）、#1181（per-agent file_policy）、#795（并行会话执行），构成了完整的多租户架构路线图。

---

### 🔥 Issue #1083 — Llama.cpp Provider 缺失（4条评论）✅ 已关闭
📌 [https://github.com/RightNow-AI/openfang/issues/1083](https://github.com/RightNow-AI/openfang/issues/1083)  
👤 @Isabel-EasyIA | 2026-04-19 创建 | 2026-05-12 关闭

> **核心问题**：安装后没有 Llama.cpp provider，OpenAI-compatible provider 也无法使用。严重影响 AMD Vulkan 用户。

---

### 🔥 Issue #1179 — WebSocket 重连 Bug（3条评论）✅ 已关闭
📌 [https://github.com/RightNow-AI/openfang/issues/1179](https://github.com/RightNow-AI/openfang/issues/1179)  
👤 @nimitbhardwaj | 2026-05-09 创建 | 2026-05-12 关闭

> **核心问题**：页面刷新后 WebSocket 无法重连至活跃 session，实时输出丢失。

✅ **已解决**（v0.6.7 中的 WebSocket 重连改进）：localStorage 持久化 agent id，init 恢复，history 从 `/api/agents/{id}/session` 水合。

---

## 5. Bug 与稳定性

### 🟡 中等优先级

| Bug 描述 | Issue | 来源 | 状态 | Fix PR |
|---------|-------|------|------|--------|
| 工作流删除后文件残留，重启后复现 | #1193 | @nimitbhardwaj | 🔄 Open | — |
| 多模态 Agent 循环中图片附件时丢失用户文本 | #1043 → #1044 | @LupoGrigi0 | ✅ Fixed | #1044 merged |
| Telegram 发送失败被静默标记为成功 | #1100 | @Streamweaver | ✅ Fixed | #1100 merged |
| stdio MCP 服务器在 Linux/macOS 下 HOME/TMP 未传递 | #1095 | @Streamweaver | ✅ Fixed | #1095 merged |
| 未收录模型错误计费（本地模型被当收费云模型） | #1055 | @AL-ZiLLA | ✅ Fixed | #1055 merged |
| Shift+Enter 无法换行 | #1141 → #1176 | @nimitbhardwaj | ✅ Fixed | #1176 merged |
| Dashboard WebSocket 无法重连 | #1179 | @nimitbhardwaj | ✅ Fixed | v0.6.7 |
| Llama.cpp provider 缺失 | #1083 | @Isabel-EasyIA | ✅ Closed | — |

---

## 6. 功能请求与路线图信号

### 🚀 高优先级功能请求（对应已有 Open PR）

| 功能 | Issue | PR | 贡献者 | 预计版本 |
|------|-------|-----|--------|---------|
| LDAP 目录认证 + RBAC | #712, #679 | #1191 | @sempervictus | 待 review |
| Per-agent file_policy 分层 | #1181 | #1183 | @benhoverter | 待 #1182 |
| MCP 服务器推送通知 | #1096 | — | @Streamweaver | 规划中 |
| 火山引擎 Provider | — | #1093 | @Maaannnn | 待 review |
| Gemini 原生 Embedding | — | #997 | @chethanuk | 待 review |
| 企业微信 WebSocket 长连接 | — | #946 | @felix307253927 | 待 review |
| Agent 会话级 API | — | #943 | @miguelangarano | 待 review |
| OpenAI Responses API 迁移 | #1149 | — | @racedale | 需要设计 |

### 🗺️ 路线图信号

从 Issues 聚类分析，社区正在形成以下**功能集群**：

1. **企业级多租户**（#712, #586, #795, #780, #679）→ 需要认证、路由、隔离三位一体
2. **安全与沙箱**（#1181, #754, #1078, #1171）→ 文件策略、执行前授权、污点传播
3. **渠道扩展**（#978 QQ, #946 企业微信）→ 中国市场特定渠道
4. **Agent 协作**（#890 已实现, #891, #1194）→ Agent 间通信、PR Reviewer Hand

---

## 7. 用户反馈摘要

### ✅ 用户满意的方面
- **Agent 工具链丰富**：skill_list/skill_describe/skill_execute 替代文件系统兜底，使用体验提升
- **测试覆盖率**：2657 tests 通过，零 clippy 警告，用户对质量控制有信心
- **WebSocket 重连**：v0.6.7 的改进解决了页面刷新丢状态的核心痛点

### ⚠️ 用户痛点

| 痛点 | 来源 Issue | 严重程度 |
|------|-----------|---------|
| 审核请求无通知，需主动查看审批面板 | #691, #1139 | ⭐⭐⭐ |
| Workspace 被 openfang 污染（外部目录创建 Agent 目录） | #1097 | ⭐⭐⭐ |
| 审批超时太短，用户来不及响应 | #1139 | ⭐⭐ |
| 多渠道缺乏统一路由机制 | #586, #780 | ⭐⭐ |
| 报告/文档无法直接下载为文件 | #1070 | ⭐⭐ |
| 系统资源利用率无 UI 展示 | #1012 | ⭐ |
| Skills Hub 连接慢，URL 无法自定义 | #883 | ⭐ |

---

## 8. 待处理积压

以下 Issues 长期未解决或缺乏维护者响应，需要关注：

| Issue | 年龄 | 评论数 | 类型 | 优先级 |
|-------|------|--------|------|--------|
| **#691** 审核请求通知 | ~57 天 | 8 | enhancement | 🔴 高 |
| **#586** 多 Bot 路由 | ~61 天 | 4 | enhancement | 🔴 高 |
| **#679** OAuth token 迁移 | ~58 天 | 4 | enhancement | 🟡 中 |
| **#712** 多租户支持 | ~56 天 | 4 | enhancement | 🔴 高 |
| **#1139** 审批移入聊天 | ~13 天 | 3 | enhancement | 🟡 中 |
| **#883** Skills Hub 自定义 URL | ~46 天 | 3 | enhancement | 🟡 中 |
| **#780** Telegram thread_id 路由 | ~53 天 | 2 | enhancement | 🟡 中 |
| **#978** 腾讯 QQ 渠道 | ~40 天 | 2 | enhancement | 🟢 待定 |
| **#795** Agent 并行会话执行 | ~51 天 | 1 | enhancement | 🟡 中 |

---

## 总结

openfang 当前处于**健康快速迭代期**，核心团队对安全漏洞响应极快（v0.6.8→v0.6.9 在发现问题当日完成修复），代码质量保持高水平。多租户、企业认证、Agent 安全策略是当前社区最强烈的需求方向，已有多位贡献者提交了基础设施 PR（#1183, #1191）。主要风险在于部分 Issue 响应延迟较长，可能影响社区活跃度。建议优先 review #1191（LDAP认证）和 #1193（工作流文件清理 Bug）。

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*