# OpenClaw 生态日报 2026-05-14

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-14 02:37 UTC

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

# OpenClaw 项目日报 | 2026-05-14

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共产生 **500 条 Issues 更新**（452 条新开/活跃，48 条关闭）和 **500 条 PR 更新**（473 条待合并，27 条已合并/关闭），同时发布了 3 个 beta 版本（v2026.5.12-beta.4/5/6）。社区聚焦于多代理会话可靠性、Codex 迁移稳定性、Gateway 性能优化三大主题，安全研究员披露了一个 CVSS 9.5 分的 macOS TLS 证书信任漏洞（#50642）。整体来看，项目处于快速迭代期，Beta 发布节奏密集（每周多个 beta），建议用户关注 release notes 中的 Breaking Changes。

---

## 2. 版本发布

### 🔗 v2026.5.12-beta.6
**发布日期**: 2026-05-14  
**发布频率**: 连续第 3 个 beta 版本

**修复内容**:
| 模块 | 修复说明 | 关联 Issue |
|------|---------|-----------|
| iMessage | 停止为纯图片发送显示可见的 `<media:image>` 占位符文本，同时保留内部 echo key 防止自重复回复 | [#81209](https://github.com/openclaw/openclaw/issues/81209) |
| Agents/sessions | 在首次 `sessio` 之前创建配置的 agent 主会话（摘要截断，详见完整 changelog） | — |

**迁移提示**: 无破坏性变更，但 iMessage 用户若配置了自定义媒体预览逻辑可能需要调整。

---

### 🔗 v2026.5.12-beta.5
**发布日期**: 2026-05-14

**修复内容**:
| 模块 | 修复说明 | 关联 Issue |
|------|---------|-----------|
| Gateway | 传递 Talk session scope 给 resolver [AI] | [#81379](https://github.com/openclaw/openclaw/issues/81379) |
| Gateway 协议 | 要求 v4 客户端，显式流式传输 chat `deltaText`/`replace` 帧，使 SDK 客户端无需本地 diff 即可消费 assistant 更新 | [#80725](https://github.com/openclaw/openclaw/issues/80725) |

---

### 🔗 v2026.5.12-beta.4
**发布日期**: 2026-05-14

**修复内容**:
| 模块 | 修复说明 | 关联 Issue |
|------|---------|-----------|
| Codex runtime | 允许官方安装的 `@openclaw/codex` 包使用其私有 task-runtime SDK helper，修复迁移 OpenAI/Codex beta 运行时的 `MODULE_NOT_FOUND` 错误 | — |
| Codex 迁移 | 使 Enter 键在继续前先激活高亮复选框行，修复 `Skip for now` 交互问题 | — |

**迁移提示**: Codex 用户建议升级至此版本以解决运行时依赖问题。

---

## 3. 项目进展

今日合并/关闭的 **27 条 PRs** 中，以下值得关注：

### 🚀 高影响力 PRs

| PR # | 标题 | 领域 | 状态 |
|------|------|------|------|
| [#76322](https://github.com/openclaw/openclaw/pull/76322) | 安全: Bootstrap token 路径暴露 mutex-stall DoS — 无速率限制 | 安全 | OPEN |
| [#81586](https://github.com/openclaw/openclaw/pull/81586) | Route Codex message tool replies back to WebChat and TUI | Codex | OPEN |
| [#81317](https://github.com/openclaw/openclaw/pull/81317) | Treat ambient group chatter as room events (Telegram) | Telegram | OPEN |
| [#80257](https://github.com/openclaw/openclaw/pull/80257) | 修复: 防止版本升级期间配置数据丢失 | 配置管理 | OPEN |
| [#81451](https://github.com/openclaw/openclaw/pull/81451) | perf: 缓存 resolvedSkills 并跳过 ensureSkillSnapshot 中的冗余文件系统扫描 | 性能 | OPEN |
| [#76342](https://github.com/openclaw/openclaw/pull/76342) | fix(memory-core): 将 dreaming narrative timeout 提高到 240s 并允许环境变量覆盖 | 内存/梦 | OPEN |
| [#76279](https://github.com/openclaw/openclaw/pull/76279) | fix(agents): 将 CLI turns 摄入 context engine | Agents | OPEN |

**项目推进评估**: 473 条 PR 待合并表明 review 吞吐存在瓶颈；安全 PR #76322 披露 DoS 漏洞，需优先处理。

---

## 4. 社区热点

### 🔥 评论数最多的 Issues（Top 5）

| Issue # | 标题 | 评论数 | 点赞 | 核心诉求 |
|---------|------|--------|------|---------|
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | [Bug]: Silently lost connection to Slack | 16 | 2 | Slack 连接静默断开，需 demo 时发现无法使用 |
| [#68449](https://github.com/openclaw/openclaw/issues/68449) | Dreaming plugin: stopword list 太窄且无 cron 触发会话过滤 | 10 | 2 | dreaming 生成质量下降，tokenization artifacts 污染主题 |
| [#72879](https://github.com/openclaw/openclaw/issues/72879) | thought_signature 400 regression in 2026.4.25 | 8 | 0 | Google Generative AI API 错误回归 |
| [#71736](https://github.com/openclaw/openclaw/issues/71736) | [RFC] Control UI plugin contribution slots | 8 | 0 | 插件系统扩展性设计讨论 |
| [#75739](https://github.com/openclaw/openclaw/issues/75739) | Codex harness migration: agentRuntime.fallback="none" 配置问题 | 7 | 3 | Codex 迁移路径存在运行时路由 bug |

### 💬 热点分析

**Slack 连接问题 (#72808)** 引发最多讨论（16 条评论），用户 `tleyden` 报告生产环境中 Slack 连接在数天后静默断开，demo 时才发现问题。这是一个**可靠性信任**问题，对商业用户影响严重。社区在讨论根因排查和监控方案。

**Dreaming 插件质量 (#68449)** 的讨论集中在 stopword 列表不完整导致 tokenization artifacts（如 "assistant" 出现 2754 次）污染主题，反映用户对 AI 生成内容后处理质量的期待。

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug（按严重程度）

#### 🔴 Critical（影响生产 / 安全）

| Issue # | 标题 | 严重程度 | 状态 | 是否有 Fix PR |
|---------|------|---------|------|--------------|
| [#50642](https://github.com/openclaw/openclaw/issues/50642) | macOS node auto-trusts first TLS certificate and accepts rogue gateway control | **CVSS 9.5** | OPEN | ❌ |
| [#76322](https://github.com/openclaw/openclaw/pull/76322) | Bootstrap token path exposes mutex-stall DoS — 无速率限制 | 安全漏洞 | OPEN | ⚠️ PR 已开 |
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | Slack silently lost connection | Critical | OPEN | ❌ |

#### 🟠 High（功能受损 / 显著回归）

| Issue # | 标题 | 回归 | 状态 | 是否有 Fix PR |
|---------|------|------|------|--------------|
| [#72879](https://github.com/openclaw/openclaw/issues/72879) | thought_signature 400 regression | ⚠️ 回归 | OPEN | ❌ |
| [#74907](https://github.com/openclaw/openclaw/issues/74907) | Multi-tool turn replay produces orphan tool_use blocks after session compaction | ⚠️ 回归 | OPEN | ❌ |
| [#74377](https://github.com/openclaw/openclaw/issues/74377) | tools array empty at Anthropic provider (Telegram) | ⚠️ 回归 | OPEN | ❌ |
| [#76171](https://github.com/openclaw/openclaw/issues/76171) | High host load & slow responses caused by stale worker process accumulation | — | OPEN | ❌ |
| [#75621](https://github.com/openclaw/openclaw/issues/75621) | Gateway lazy-spawns duplicate stdio MCP children (memory + CPU leak) | — | OPEN | ❌ |

#### 🟡 Medium（行为异常 / 性能下降）

| Issue # | 标题 | 摘要 |
|---------|------|------|
| [#75839](https://github.com/openclaw/openclaw/issues/75839) | sessions.list latency ~10s, pi-trajectory-flush 固定 10s 超时 |
| [#75502](https://github.com/openclaw/openclaw/issues/75502) | Downgrading 失败 due to stale file-transfer entry |
| [#75670](https://github.com/openclaw/openclaw/issues/75670) | Matrix thread session key case-normalizes event IDs, causing duplicate stuck sessions |
| [#80714](https://github.com/openclaw/openclaw/issues/80714) | Gemini 3.1 Pro Preview intermittent 0-token stall |

**稳定性评估**: 今日报告 **3 个回归问题**，全部涉及长会话/上下文压缩场景，暗示 v2026.4.x 系列在会话生命周期管理上存在技术债。macOS TLS 漏洞 (#50642) 需紧急评估。

---

## 6. 功能请求与路线图信号

### ✨ 高价值功能请求

| Issue # | 标题 | 类型 | 潜在纳入版本 | 社区支持 |
|---------|------|------|-------------|---------|
| [#71736](https://github.com/openclaw/openclaw/issues/71736) | Control UI plugin contribution slots | RFC/SDK | 待定 | 8 评论 |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) | feat(Talk/macOS): Add OpenAI Realtime (speech-to-speech) path | Enhancement | v2026.6? | 5 👍 |
| [#75074](https://github.com/openclaw/openclaw/issues/75074) | /v1/responses drops built-in tool calls — add opt-in flag | Feature | 待定 | 4 👍 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | Add TTL/Expiry for Delivery Queue Messages | Feature | 待定 | 4 👍 |
| [#81618](https://github.com/openclaw/openclaw/pull/81618) | feat: Slack add optional speaker labels for group threads | Feature | PR 已开 | — |

### 🗺️ 路线图信号分析

**Codex 集成深化**: #81586 和 #75739 均指向 Codex harness 的完善，预计下个版本重点打磨。**多渠道消息路由**: Slack (#81618)、Telegram (#81317)、WhatsApp (#76314) 均有 PR 在审，room-event 语义统一是明确方向。**性能优化**: #81451 (skill snapshot 缓存)、#76348 (runtime bootstrap 缓存) 表明团队已意识到冷启动延迟问题。

---

## 7. 用户反馈摘要

### 😊 用户满意点

- **Beta 质量提升**: `tomwingard3-rgb` 在 #80714 中感谢团队快速响应，提到 #79947 和 #80078 两个修复直接帮助了他们的部署。
- **文档改善**: #76479 新增 macOS 设置说明，减少新贡献者上手阻力。
- **CLI 稳定性**: #80257 修复版本升级配置丢失问题，用户报告升级后不再丢失 channel accounts 和 credentials。

### 😞 用户痛点

| 痛点 | 典型场景 | 影响范围 |
|------|---------|---------|
| **Slack 连接静默失败** | 长时间运行后断开，demo 时才发现 | 商业展示用户 |
| **会话卡住无法恢复** | Stuck Session Recovery 双重失效，systemd 超时强杀 | 长时间任务用户 |
| **子代理列表为空** | v2026.4.29 仍存在，#71495 的修复未完全生效 | 多代理用户 |
| **配置不可变** | 策略锁定沙箱中插件配置无法运行时修改，需重建镜像 | 企业/云部署用户 |

### 📊 用户场景分布

从 Issues 标签推断：
- **多代理编排**: ~25% 问题涉及 subagent/sessions_spawn
- **特定渠道**: Slack (最多)、Telegram、Discord、Matrix、Feishu 均有报告
- **安全/合规**: TLS 证书、SSRF guard、scope 隔离话题活跃

---

## 8. 待处理积压

### ⚠️ 高优先级积压

| Issue # | 标题 | 创建日期 | 状态 | 积压天数 | 备注 |
|---------|------|----------|------|---------|------|
| [#50642](https://github.com/openclaw/openclaw/issues/50642) | macOS TLS 证书安全漏洞 | 2026-03-19 | OPEN | **56 天** | CVSS 9.5，未分配 CVE |
| [#43015](https://github.com/openclaw/openclaw/issues/43015) | message.send schema overexposes poll/components/modal | 2026-03-11 | OPEN | **64 天** | 影响 GPT 模型自动填充 |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | Write/exec tool parameters silently dropped after long conversations | 2026-03-24 | OPEN | **51 天** | 长对话用户受影响 |
| [#69118](https://github.com/openclaw/openclaw/issues/69118) | Claude CLI sessions reset on every turn in group channels | 2026-04-19 | OPEN | **25 天** | groupIntro drift 问题 |
| [#68209](https://github.com/openclaw/openclaw/issues/68209) | Switching from openai-codex/gpt-5.4 to codex/gpt-5.4 triggers runaway context growth | 2026-04-17 | OPEN | **27 天** | Codex 迁移风险 |
| [#40165](https://github.com/openclaw/openclaw/issues/40165) | feat(gateway): Strip NO_REPLY from both prefix AND suffix positions | 2026-03-08 | OPEN | **67 天** | 长期未解决的稳健性问题 |

### 📋 PR Review 积压

473 条 PR 待合并，建议维护者关注：
- 早期 beta 版本（~763xx 系列）积压较多，可能存在冲突或需要 rebase
- 安全类 PR (#76322) 应优先 review

---

## 📌 行动项建议

| 优先级 | 行动项 | 负责人类型 |
|--------|--------|----------|
| 🔴 P0 | 评估并修复 macOS TLS 证书漏洞 (#50642) | 安全团队 |
| 🔴 P0 | Review 安全 DoS PR #76322 | 安全/核心维护者 |
| 🟠 P1 | 排查 Slack 连接静默断开根因 (#72808) | 渠道团队 |
| 🟠 P1 | 验证 #71495 的修复完整性，确认子代理列表问题 | Agents 团队 |
| 🟡 P2 | 清理 56 天+ 未响应的 Issues，降低积压 | Triage 团队 |
| 🟡 P2 | 提高 Beta 发布质量门禁，减少回归 (#72879, #74907, #74377) | CI/Release 团队 |

---

*本报告基于 2026-05-14 00:00 至 23:59 UTC 的 GitHub 活动数据生成。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-05-14  
**数据基础**：12 个开源项目当日 GitHub 活动数据（2 个项目数据缺失）

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现**"一超多强、快速迭代"**的整体态势。OpenClaw 以单日 1000 条更新的绝对体量占据生态核心位置，其 3 个 beta 版本同步发布的节奏反映出核心项目仍处于功能高速构建期。hermes-agent 在 NousResearch 品牌加持下活跃度紧随其后，多 Agent MVP 已完成合并。生态中游项目（NanoBot、Zeroclaw、QwenPaw、LibreFang）保持每日 30-80 条更新的健康节奏，功能迭代与稳定性修复并行。部分项目（ZeptoClaw、EasyClaw）进入维护状态，聚焦安全审计或特定平台深化。值得关注的是，**多渠道集成（Telegram/Slack/Discord/QQ）、多租户安全隔离、上下文压缩与成本控制**三大方向在多个项目中同步涌现，预示行业正在形成共同的技术演进路径。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 合并率 | 健康度 |
|------|-------------|----------|---------|--------|--------|
| **OpenClaw** | 500 (452↑/48↓) | 500 (473待/27合) | 3 个 beta | ~5% | 🟡 快速迭代 |
| **hermes-agent** | 272 (259↑/13↓) | 500 (344待/156合) | 无 | ~31% | 🟢 高活跃 |
| **Zeroclaw** | 37 (22↑/15↓) | 50 (33待/17合) | 无 | ~34% | 🟡 中高活跃 |
| **LibreFang** | 26 (18↑/8↓) | 38 (22待/16合) | 无 (Beta.11) | ~42% | 🟢 良好 |
| **QwenPaw** | 36 (17↑/19↓) | 50 (34待/16合) | v1.1.7-beta.2 | ~32% | 🟢 良好 |
| **NanoBot** | 17 (4↑/13↓) | 14 (6待/8合) | 无 | 57% | 🟢 良好 |
| **NanoClaw** | 8 | 25 (5待/20合) | 无 | ~80% | 🟢 良好 |
| **LobsterAI** | 2 | 23 (1待/22合) | v2026.5.12 | 96% | 🟢 稳定 |
| **OpenFang** | 2 | 1 (待合并) | 无 | 0% | 🟠 低活跃 |
| **ZeptoClaw** | 4 (均关闭) | 0 | 无 | — | 🔴 静默 |
| **EasyClaw** | 0 | 0 | v1.8.13 | — | 🔴 静默 |
| **PicoClaw/IronClaw** | 数据缺失 | — | — | — | ⚠️ 未知 |

**关键数据**：

- 活跃项目 9 个，静默项目 3 个（ZeptoClaw、EasyClaw、TinyClaw/Moltis）
- OpenClaw + hermes-agent 合计贡献了当日生态 65% 以上的更新量
- LobsterAI 的 96% PR 合并率反映其处于高质量巩固阶段
- NanoClaw 以 80% 合并率领跑中型项目，代码质量把控良好

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心地位确认

OpenClaw 以**单日 1000 条 GitHub 更新**的绝对体量确立了生态核心地位，这一数字是第二名 hermes-agent 的 2 倍，更是中游项目的 15-30 倍。其 3 个 beta 版本同日发布（v2026.5.12-beta.4/5/6）的节奏表明项目仍处于**功能密集构建期**，尚未进入稳定发布阶段。

### 3.2 技术路线差异

| 维度 | OpenClaw | 同类对比 |
|------|---------|---------|
| **架构哲学** | 全功能平台，内置 Codex runtime、多渠道支持 | NanoBot/NanoClaw 采用轻量化技能扩展 |
| **发布节奏** | 每周 3+ beta，快速迭代 | LobsterAI 追求稳定迭代（v2026.5.12） |
| **安全响应** | CVSS 9.5 漏洞积压 56 天未修复 | LibreFang/ZeptoClaw 专设安全维护流程 |
| **社区规模** | 473 条 PR 待合并，review 瓶颈明显 | QwenPaw/PR 积压相对可控 |
| **功能广度** | 涵盖 dreaming、codex、sessions、gateway | hermes-agent 聚焦多 Agent + 记忆系统 |

### 3.3 核心差距与风险

OpenClaw 的 **473 条 PR 积压**构成严重 review 瓶颈，安全 PR #76322（DoS 漏洞）已 OPEN 但未合并。相较之下，LibreFang 以 38 条 PR、42% 合并率实现了更健康的代码吞吐。建议 OpenClaw 引入分级 review 机制，将安全类 PR 提升至 P0 处理通道。

---

## 4. 共同关注的技术方向

以下技术方向在**至少 3 个项目**中同步出现，代表行业共识性需求：

### 4.1 多渠道消息路由统一

| 项目 | 具体诉求 | 进展 |
|------|---------|------|
| **OpenClaw** | Room event 语义统一（Telegram #81317） | PR OPEN |
| **hermes-agent** | Slack `!cmd` 前缀支持 #25355 | ✅ 已合并 |
| **NanoClaw** | Slack/Teams 文件权限修复 #2457、#2461 | ✅ 已合并 |
| **LibreFang** | Channel 级代理配置 #5019 | PR OPEN |
| **OpenFang** | QQ 频道集成请求 #978 | 长期 OPEN |

**信号解读**：各平台差异化适配逻辑正在向统一抽象层收敛，Channel 配置规范亟待标准化。

### 4.2 上下文压缩与成本控制

| 项目 | 具体方案 | 进展 |
|------|---------|------|
| **OpenClaw** | Codex migration、session compaction | 多 PR 进行中 |
| **LibreFang** | Prompt Caching (#5021)、双层压缩 (#5022) | PR OPEN |
| **NanoBot** | 会话消息保留 #3765 | PR OPEN |
| **QwenPaw** | 上下文使用量显示 #4290 | ✅ 已合并 |

**信号解读**：长会话 Token 成本已成为生产部署的核心关切，预计 2026 Q3 前主流项目均将内置压缩策略。

### 4.3 安全与多租户隔离

| 项目 | 具体诉求 | 进展 |
|------|---------|------|
| **OpenClaw** | macOS TLS 证书信任漏洞 CVSS 9.5 | 积压 56 天 |
| **NanoClaw** | 按组凭证管理 #869 | 积压 66 天 |
| **LibreFang** | Approval 通知作用域泄漏 #5002 | PR OPEN |
| **QwenPaw** | MCP 401 错误阻塞 #4227 | 未修复 |

**信号解读**：安全功能存在普遍性技术债，建议行业共享安全漏洞响应 SLA 标准。

### 4.4 多 Agent 协作与记忆系统

| 项目 | 方案 | 里程碑 |
|------|------|--------|
| **hermes-agent** | 单网关多 Agent + Dreaming 记忆整合 | ✅ MVP 已合并 |
| **Zeroclaw** | v0.8.0 Multi-Agent Runtime | PR #6398 审查中 |
| **OpenClaw** | Subagent sessions_spawn | 25% Issues 相关 |
| **NanoBot** | 模型容灾切换 | ✅ 已合并 |

**信号解读**：多 Agent 架构正在从 POC 阶段向生产可用演进，Agent 间通信协议尚未统一。

---

## 5. 差异化定位分析

### 5.1 功能侧重差异

| 项目 | 核心定位 | 特色功能 |
|------|---------|---------|
| **OpenClaw** | 全功能 AI 平台 | Codex runtime、Dreaming、多渠道 |
| **hermes-agent** | 多 Agent 协作框架 | 单网关多 Agent、Dreaming 记忆整合 |
| **NanoBot** | 轻量化个人助手 | 模型容灾切换、reasoning 展示 |
| **NanoClaw** | 营销/运营工具集 | 社交媒体技能矩阵、LinkedIn/Reddit 运营 |
| **LobsterAI** | 协作工作台 | 插件管理、工件预览、上下文压缩 |
| **QwenPaw** | 多渠道集成 | 钉钉/微信/QQ 覆盖、Tauri 桌面 |
| **LibreFang** | 企业级 Agent 平台 | Dashboard、可观测性、Workflow |
| **Zeroclaw** | 开发者工具链 | Workspace profiles、skills 系统 |
| **OpenFang** | 运维指令框架 | RULES.md 全局配置 |

### 5.2 目标用户分层

```
企业级部署
    ├── LibreFang (Dashboard、OTel、RBAC)
    ├── OpenClaw (全渠道、生产级)
    └── Zeroclaw (开发者友好、技能系统)
    
团队协作
    ├── hermes-agent (多 Agent 协作)
    ├── LobsterAI (Cowork 工作流)
    └── NanoClaw (多租户凭证)

个人/开发者
    ├── NanoBot (轻量、模型容灾)
    ├── QwenPaw (多渠道、个人助手)
    └── OpenFang (运维指令、规则驱动)

垂直场景
    ├── NanoClaw (社交媒体运营)
    ├── ZeptoClaw (安全审计)
    └── EasyClaw (创作者协作)
```

### 5.3 技术架构关键差异

| 架构维度 | 代表项目 | 特点 |
|---------|---------|------|
| **Agent 定义** | OpenClaw/Zeroclaw | TOML 配置、独立技能池 |
| **记忆系统** | hermes-agent | Dreaming 3 阶段记忆巩固 |
| **渠道抽象** | LobsterAI | 插件化 Channel 架构 |
| **运行时** | NanoBot | 轻量 runner、fallback_models |
| **部署形态** | QwenPaw | Tauri 2.x 桌面应用 |
| **可观测性** | NanoClaw | LangFuse 集成 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
🔥 超级活跃（每日 400+ 更新）
└── OpenClaw、hermes-agent
    → 处于功能高速构建期，PR 积压严重，需要引入治理机制

🟢 高活跃（每日 30-100 更新）
├── Zeroclaw、LibreFang、QwenPaw
└── → 功能迭代与稳定性并重，review 效率需提升

🟡 中活跃（每日 10-30 更新）
├── NanoBot、NanoClaw、LobsterAI
└── → 代码质量把控良好，合并率 57-80%

🔴 低/静默（每日 <10 更新或无更新）
├── OpenFang、ZeptoClaw、EasyClaw
└── → 维护状态或聚焦特定方向，OpenFang 需激活社区
```

### 6.2 成熟度评估

| 项目 | 阶段 | 证据 |
|------|------|------|
| **LobsterAI** | 质量巩固期 | 96% PR 合并率，v2026.5.12 稳定发布 |
| **NanoBot** | 成长稳定期 | 57% 合并率，核心功能已交付 |
| **NanoClaw** | 高速迭代期 | 80% 合并率，单日 20 PR 合并 |
| **OpenClaw** | 规模扩张期 | 功能密集构建，稳定性需加强 |
| **hermes-agent** | 架构演进期 | 多 Agent MVP 刚合并，技术债清理中 |
| **QwenPaw** | 功能完善期 | 多渠道集成优化，安全问题待解 |

### 6.3 PR 积压风险矩阵

| 项目 | 待合并 PR | 积压等级 | 风险评估 |
|------|----------|---------|---------|
| **OpenClaw** | 473 | 🔴 极高 | Review 吞吐量严重不足 |
| **hermes-agent** | 344 | 🔴 高 | 安全类 PR 需优先处理 |
| **Zeroclaw** | 33 | 🟡 中 | v0.8.0 巨型 PR 阻塞 |
| **QwenPaw** | 34 | 🟡 中 | Tauri 桌面应用 PR 待审 |
| **LibreFang** | 22 | 🟢 低 | 积压可控 |

---

## 7. 值得关注的趋势信号

### 7.1 平台化向模块化收敛

**信号**：OpenClaw 的全功能平台路线正被 NanoBot（轻量 runner）、NanoClaw（技能即插即用）、LobsterAI（插件系统）分化。行业似乎在探索**"核心运行时 + 能力扩展"**的分层架构，而非继续堆叠单体功能。

**对开发者的建议**：若计划自建 AI 助手，优先采用 NanoBot/NanoClaw 的轻量内核，通过标准化技能接口扩展能力；若需要全功能平台，OpenClaw 仍是当前最成熟选择，但需接受快速迭代带来的不稳定。

### 7.2 企业级需求加速涌现

**信号**：按组凭证管理（NanoClaw #869，66 天积压）、Per-channel 代理配置（LibreFang #4795）、RBAC 权限控制（hermes-agent #527）、多租户隔离等企业需求在多个项目中同步出现，但响应普遍滞后。

**对开发者的建议**：2026 下半年企业级功能将成为差异化竞争点，Zeroclaw 的 skills 系统 + LibreFang 的 Dashboard 路径值得参考。

### 7.3 安全债务触达红线

**信号**：OpenClaw CVSS 9.5 漏洞积压 56 天、LibreFang macOS vault 锁定导致用户数据风险、QwenPaw MCP 401 阻塞等安全问题频发，反映安全开发流程在快速迭代压力下被边缘化。

**对开发者的建议**：选择生产部署项目时，优先考察其安全响应 SLA。ZeptoClaw 的 AI 漏洞审计自动化路线值得行业借鉴。

### 7.4 多 Agent 架构从 POC 走向生产

**信号**：hermes-agent 单网关多 Agent MVP 已合并，Zeroclaw v0.8.0 Multi-Agent Runtime 进入 review，OpenClaw 25% Issues 涉及 subagent

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**: 2026-05-14  
**项目**: HKUDS/nanobot  
**数据来源**: GitHub Issues & Pull Requests

---

## 1. 今日速览

NanoBot 今日保持高活跃度，共处理 **31 条** 更新（Issues 17 条 + PRs 14 条）。值得关注的是，**模型容灾切换**功能（#3756）已成功合并，解决了社区长期呼吁的多 Provider 故障自动切换需求；Telegram 频道的安全访问控制功能也在快速推进中（#3770）。整体项目健康度良好，代码合并率较高（8/14 PR 已关闭），但仍有 4 个 Open Issues 和 6 个 Open PR 等待处理。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并的重要 PR

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#3756](https://github.com/HKUDS/nanobot/pull/3756) | feat(runner): model failover with fallback_models | ✅ Merged | **核心功能** - 新增 `fallback_models` 配置，支持多模型链式容灾 |
| [#3740](https://github.com/HKUDS/nanobot/pull/3740) | fix(mcp): probe HTTP port before connecting | ✅ Merged | **稳定性** - 修复 MCP 服务不可达时事件循环崩溃问题 |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) | feat(reason): display model reasoning content during streaming | ✅ Merged | **功能增强** - 新增 `show_reasoning` 配置选项 |
| [#1923](https://github.com/HKUDS/nanobot/pull/1923) | feat: add exec output truncation config | ✅ Merged | **用户体验** - 支持配置 exec 输出截断行为 |
| [#3766](https://github.com/HKUDS/nanobot/pull/3766) | test(agent): expand coverage and refactor test structure | ✅ Merged | **工程质量** - 新增 121 个测试用例 |

### 🚧 推进中的 Open PRs

| PR | 标题 | 状态 | 进度 |
|---|---|---|---|
| [#3770](https://github.com/HKUDS/nanobot/pull/3770) | feat(telegram): add per-chat access rules | Open | 新增 Telegram 按聊天授权功能 |
| [#3771](https://github.com/HKUDS/nanobot/pull/3771) | feat(telegram): add polling healthcheck | Open | Telegram 轮询健康检查 |
| [#3765](https://github.com/HKUDS/nanobot/pull/3765) | fix: preserve session messages during auto-compact | Open | 修复自动压缩时消息丢失问题 |
| [#3693](https://github.com/HKUDS/nanobot/pull/3693) | fix(agent): centralize LLM concurrency gate | Open | 集中管控后台任务并发 |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**#235** - Telegram 机器人无响应问题（已关闭）
- 📊 评论 15 条 | 👍 9
- 🔗 https://github.com/HKUDS/nanobot/issues/235
- 📝 **摘要**: 用户使用 Telegram + DeepSeek 时，运行一段时间后机器人仅返回 "I've completed processing but have no response to give."，无错误日志。

**#3376** - 模型异常自动切换（已关闭 → 对应 PR #3756 已合并）
- 📊 评论 13 条 | 👍 1
- 🔗 https://github.com/HKUDS/nanobot/issues/3376
- 📝 **摘要**: 社区呼吁支持多 Provider/Model 故障时自动切换，提升服务可用性。**已通过 PR #3756 解决**。

**#3768** - 安全增强：DM 策略白名单（Open）
- 📊 评论 1 条 | 👍 0
- 🔗 https://github.com/HKUDS/nanobot/issues/3768
- 📝 **摘要**: 建议在处理 DM 前增加发送方身份校验，防止 API 配额滥用和 Prompt 注入攻击。

---

## 5. Bug 与稳定性

### ⚠️ 今日报告的 Bug（按严重程度）

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| **高** | [#3772](https://github.com/HKUDS/nanobot/issues/3772) | 飞书群聊中被其他机器人@时出错，processor not found | 🆕 Open | 无 |
| **高** | [#3726](https://github.com/HKUDS/nanobot/issues/3726) | 上下文压缩 Bug 导致系统无法运行 | ✅ Closed | 无（需关注） |
| **中** | [#3739](https://github.com/HKUDS/nanobot/issues/3739) | MCP 服务未启动时 nanobot agent 报错 | ✅ Closed | 无 |
| **中** | [#3746](https://github.com/HKUDS/nanobot/issues/3746) | WebUI 预加载 >1MB 代码高亮 chunk | 🔄 Open | 无 |

### ✅ 已修复问题

- **#1640** - GLM-4.7 云模型会话卡死 Bug → Closed
- **#1777** - v0.1.4.post3 版本请求 onrender.com 报 403 → Closed
- **#3740** (PR) - MCP 连接前端口探测，修复事件循环崩溃 → ✅ Merged

---

## 6. 功能请求与路线图信号

### 🚀 高价值功能请求

| Issue | 需求 | 关联 PR | 纳入可能性 |
|---|---|---|---|
| [#3768](https://github.com/HKUDS/nanobot/issues/3768) | **安全**：DM 策略白名单机制 | #3770 (Telegram per-chat rules) | ⭐⭐⭐ 高 |
| [#3769](https://github.com/HKUDS/nanobot/issues/3769) | **工具**：`nanobot doctor` 诊断命令 | 无 | ⭐⭐ 中 |
| [#1860](https://github.com/HKUDS/nanobot/issues/1860) | 流式输出支持 | 无 | ⭐⭐ 中 |
| [#1685](https://github.com/HKUDS/nanobot/issues/1685) | WebSocket 频道支持 | 有 fork 在开发 | ⭐⭐ 中 |

### 📈 已纳入路线图的功能

- ✅ **模型容灾切换** (#3376 → #3756) - 已合并
- ✅ **执行输出截断配置** (#1871 → #1923) - 已合并
- ✅ **模型推理过程展示** (#3655) - 已合并
- 🔄 **LongTaskTool 多步任务工具** (#3460) - Open PR

---

## 7. 用户反馈摘要

### 正面反馈
- 社区对 **模型容灾切换** 功能呼声强烈，#3376 获得较高关注度
- Telegram 频道使用广泛，出现多个安全增强需求

### 痛点与问题
1. **多 Provider 场景下的单点故障** - 用户配置了多个模型但无法自动切换
2. **飞书集成兼容性问题** - 机器人被其他 Bot @ 时处理异常
3. **WebUI 资源占用** - 预加载过大的代码高亮文件
4. **长对话内存管理** - 上下文压缩导致系统崩溃（#3726）

### 典型使用场景
- Telegram 机器人本地部署
- 飞书群聊多 Bot 协作
- 本地 Ollama/vLLM 端点调用
- 多 Agent 工作区配置

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Issues（>30 天无更新）

| Issue | 创建时间 | 类型 | 摘要 |
|---|---|---|---|
| [#941](https://github.com/HKUDS/nanobot/issues/941) | 2026-02-21 | 疑问 | 为什么只支持 Brave 搜索工具？ |
| [#1135](https://github.com/HKUDS/nanobot/pull/1135) | 2026-02-24 | 修复 | README 大小写修正（已合并） |

### 🔴 需要维护者关注的 Open Issues

| Issue | 创建时间 | 优先级 | 说明 |
|---|---|---|---|
| [#3768](https://github.com/HKUDS/nanobot/issues/3768) | 2026-05-13 | 安全 | 安全策略白名单机制 - 涉及安全 |
| [#3772](https://github.com/HKUDS/nanobot/issues/3772) | 2026-05-14 | Bug | 飞书集成崩溃 - 今日新报告 |
| [#3769](https://github.com/HKUDS/nanobot/issues/3769) | 2026-05-13 | 工具 | doctor 诊断命令 - 用户工具诉求 |
| [#3746](https://github.com/HKUDS/nanobot/issues/3746) | 2026-05-11 | 性能 | WebUI 资源优化 |

---

## 📊 统计概览

```
┌─────────────────────────────────────────────────────┐
│  NanoBot 2026-05-14 项目健康度                       │
├─────────────────────┬───────────────────────────────┤
│ Issues (24h)        │ 17 条 (新开 4, 关闭 13)        │
│ PRs (24h)           │ 14 条 (待合并 6, 已合并 8)      │
│ Releases            │ 0                             │
├─────────────────────┼───────────────────────────────┤
│ 合并率               │ 57% (8/14)                    │
│ Open Issues 积压     │ 4                             │
│ Open PRs 积压        │ 6                             │
│ 社区活跃度           │ 🟢 高                         │
└─────────────────────┴───────────────────────────────┘
```

---

*报告生成时间: 2026-05-14 | 数据截止: 2026-05-14 23:59*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**报告日期**: 2026-05-14  
**数据来源**: GitHub (zeroclaw-labs/zeroclaw)  
**数据范围**: 过去 24 小时

---

## 1. 今日速览

Zeroclaw 项目在过去 24 小时保持极高活跃度，共产生 **37 条 Issues 更新**（新开/活跃 22 条，关闭 15 条）和 **50 条 PR 更新**（待合并 33 条，已合并/关闭 17 条）。今日未发布新版本，但多个 P1 级 Bug 在近期被关闭或正在修复中，显示出维护团队对关键问题的响应速度。重点关注：4 个全新的 P1 Bug 于今日提交（cron、skill、webhook 相关），v0.8.0 大版本（PR #6398）仍在积极推进中，已进入增量 review 阶段，社区对 Multi-Agent 支持呼声极高。

---

## 2. 版本发布

**今日无新版本发布。**

> 最新正式版本信息请参阅 [Releases 页面](https://github.com/zeroclaw-labs/zeroclaw/releases)。

---

## 3. 项目进展

### 3.1 合并/关闭的重要 PR

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#6605](https://github.com/zeroclaw-labs/zeroclaw/pull/6605) | fix(runtime): load workspace profiles before tool registration | OPEN | 关闭 #6419，修复 WorkspaceManager 启动时无法加载 profiles 的问题 |
| [#6635](https://github.com/zeroclaw-labs/zeroclaw/pull/6635) | fix(cron,channels): carry thread_id through cron announce delivery | OPEN | 修复 cron 调度 webhook 回调丢失 thread_id 的关键问题 |
| [#6607](https://github.com/zeroclaw-labs/zeroclaw/pull/6607) | fix(providers): respect explicit provider kind | OPEN | 修复 provider kind 选择逻辑，尊重显式配置 |
| [#6620](https://github.com/zeroclaw-labs/zeroclaw/pull/6620) | fix(tool-call-parser): omit assistant history when no parsed tool calls | OPEN | 修复空 tool_calls 时仍发送空 assistant 消息的问题 |
| [#6631](https://github.com/zeroclaw-labs/zeroclaw/pull/6631) | fix(provider): restrict compatible reasoning effort models | OPEN | 限制 compatible provider 的 reasoning_effort 请求范围 |
| [#6629](https://github.com/zeroclaw-labs/zeroclaw/pull/6629) | fix(providers): stop replaying stale tool-result images | OPEN | 修复多模态 provider 重复发送过期 tool-result 图片的问题 |
| [#6580](https://github.com/zeroclaw-labs/zeroclaw/pull/6580) | fix(provider): honor LM Studio compatible runtime options | OPEN | 修复 LM Studio 不识别 base_url 和 merge_system_into_user 配置 |
| [#6598](https://github.com/zeroclaw-labs/zeroclaw/pull/6598) | fix(providers): defensively omit Anthropic temperature for Opus 4.7 | OPEN | 修复 Opus 4.7 模型拒绝 temperature 参数的问题 |
| [#6639](https://github.com/zeroclaw-labs/zeroclaw/pull/6639) | Fix macos runtime config dirs | OPEN | 修复 Homebrew 安装后配置目录解析错误 |
| [#6640](https://github.com/zeroclaw-labs/zeroclaw/pull/6640) | docs: add repo-summary.md with full project overview | OPEN | 新增项目全局概述文档 |
| [#6602](https://github.com/zeroclaw-labs/zeroclaw/pull/6602) | feat(channels/acp): persist ACP sessions | CLOSED | 合并到 integration/v0.8.0 分支，ACP 会话持久化完成 |
| [#6591](https://github.com/zeroclaw-labs/zeroclaw/pull/6591) | fix(provider): omit Anthropic opus temperature | CLOSED | 修复 #6147，Anthropic Opus 模型 temperature 处理 |

### 3.2 重大功能 PR 进展

| PR 编号 | 标题 | 阶段 | 说明 |
|---------|------|------|------|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | v0.8.0: Multi-Agent Runtime and Schema V3 | 增量 review | 巨型 PR（XL），涉及全部模块，作者 @singlerider 呼吁使用大上下文模型审查 |
| [#6594](https://github.com/zeroclaw-labs/zeroclaw/pull/6594) | feat(skills): background review fork + skill_manage tool | OPEN | Hermès 风格后置审查 fork，激活 SkillImprover 运行时效果 |
| [#6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553) | fix(observability): restore broken SSE /logs stream | OPEN | 修复 /logs 流，恢复 version + health pulse 支持 Docker 部署 |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) | feat(provider): add native extended thinking for Anthropic and Bedrock | OPEN | 为 Anthropic 和 Bedrock 添加原生扩展思考能力 |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | feat(obs): enrich OTel tool spans with gen_ai.tool.* | OPEN | OTel 可观测性增强，等待作者响应反馈 |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) | feat(channels): expose poll-vote / interactive-reply events | OPEN | 暴露 WhatsApp/Signal 的交互式回复事件，扩展 Channel::send_choice |
| [#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) | feat(channels/acp): persist ACP sessions | OPEN | 新 PR，在 master 分支上实现 ACP 会话持久化 |

---

## 4. 社区热点

### 4.1 今日热门 Issues（按评论数排序）

1. **[#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419)** — WorkspaceManager 启动时无法加载 profiles（已关闭，2 评论）
2. **[#6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156)** — Nextcloud Talk 模型请求约 5 秒后被取消（已关闭，2 评论）
3. **[#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520)** — Gemini CLI provider 因参数语法错误崩溃（已关闭，2 评论）
4. **[#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140)** — 混合技能 + WASM tools 插件架构讨论（进行中，2 评论）
5. **[#6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309)** — model_routing_config 破坏 schema_version=2 配置（进行中，2 评论）
6. **[#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)** — Onboarding 流程误将 OpenAI Codex 当作 OpenAI API Key（进行中，2 评论）

### 4.2 热点 PR

- **[#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)** — v0.8.0 Multi-Agent Runtime：社区关注度极高，巨型 PR（XL）横跨几乎所有模块，评论未定义但持续活跃。
- **[#6604](https://github.com/zeroclaw-labs/zeroclaw/issues/6604)** — Multi-Agent Support 功能请求被标记为 duplicate（1 评论），但诉求强烈，实质上已被 #6398 覆盖。
- **[#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613)** — 配对码安全增强请求（今日新增，1 评论），要求默认 32 字符字母数字配对码。

### 4.3 热点诉求分析

| 诉求类型 | 代表 Issue | 背景分析 |
|----------|-----------|----------|
| **Multi-Agent 能力** | #6604, #6398 | 用户需要多智能体协作、角色分工、隔离工具/技能池，OpenClaw 对标呼声高 |
| **可观测性增强** | #6642, #6641, #6553 | 社区成员已在下游实现并愿意上游贡献，OTel 集成日趋成熟 |
| **技能系统完善** | #6645, #6644, #6594 | SkillImprover 缺少调用方、skill_manage 工具新增、manifest.toml 支持缺口 |
| **安全性加固** | #6613, #6528, #5266 | 配对码强度、CA 证书信任、端口变更时配对码显示等问题 |

---

## 5. Bug 与稳定性

### 5.1 今日新增 Bug（P1 为最高优先级）

| 优先级 | Issue 编号 | 标题 | 影响范围 | 是否有 Fix PR |
|--------|-----------|------|----------|--------------|
| **P1** | [#6648](https://github.com/zeroclaw-labs/zeroclaw/issues/6648) | cron session_target=main 仍在隔离会话中运行 | runtime/cron | 无 |
| **P1** | [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | Cron 任务输出未路由到配置渠道（Telegram） | runtime/cron | 无 |
| **P1** | [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) | Telegram 渠道下 web_search_tool 和 web_fetch 不触发 | runtime/channel | 无 |
| **P2** | [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) | GLM-5.1 模型 Thoughts 混入最终回复 | provider | 无 |
| **P2** | [#6634](https://github.com/zeroclaw-labs/zeroclaw/issues/6634) | Cron 调度的 webhook 回调丢失 thread_id | channel/webhook + cron | 有 (#6635) |
| — | [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) | SkillImprover/skill_manage 仅处理 SKILL.toml | skills | 无 |
| — | [#6644](https://github.com/zeroclaw-labs/zeroclaw/issues/6644) | Skill review fork 摘要解析器遗漏 tool receipts | skills | 无 |

### 5.2 近期关闭的 Bug

| Issue 编号 | 标题 | 关闭日期 | 关联 Fix |
|-----------|------|----------|---------|
| [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) | WorkspaceManager 启动时加载 profiles 失败 | 2026-05-13 | PR #6605 |
| [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) | Provider 请求未信任系统 CA 证书 | 2026-05-13 | 无（需维护者审查） |
| [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) | google_workspace 工具在 Windows 上找不到 gws | 2026-05-13 | 无（需维护者审查） |
| [#5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) | 备用端口启动时网关未显示配对码 | 2026-05-13 | 无 |
| [#6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500) | Docker 镜像 zeroclawlabs/tool-runner 不存在 | 2026-05-13 | 无（需维护者审查） |
| [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589) | RouterProvider::supports_vision() 使用 .any() 导致静默绕过 | 2026-05-13 | 无（进行中） |
| [#6609](https://github.com/zeroclaw-labs/zeroclaw/issues/6609) | Matrix 出站附件缺少 size 元数据 | 2026-05-13 | 无（进行中） |
| [#6514](https://github.com/zeroclaw-labs/zeroclaw/issues/6514) | WebSocket 连接断开后网关可能陷入自旋 | 2026-05-13 | 无 |
| [#6526](https://github.com/zeroclaw-labs/zeroclaw/issues/6526) | /api/events SSE 丢弃 tool-call 事件 | 2026-05-13 | 无（进行中） |
| [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) | 非首个 system 消息被发送到 OpenAI 兼容 provider | 2026-05-13 | 无（进行中） |

### 5.3 稳定性评估

**当前风险点：**
- 今日新增 **3 个 P1 Bug** 均涉及核心功能阻断（cron、webhook、Telegram 渠道），需优先处理
- 仍有 **多个 P1 Issue 尚未关闭** 且无关联 Fix PR（#5266, #6410, #6500, #6514）
- v0.8.0 巨型 PR 仍在 review 中，合并前需确保回归测试充分

---

## 6. 功能请求与路线图信号

### 6.1 今日新增功能请求

| Issue 编号 | 标题 | 背景 | 纳入版本可能性 |
|-----------|------|------|--------------|
| [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) | SkillImprover + skill_manage 应同时支持 manifest.toml | 现有内置技能使用 manifest.toml | 高（已有 PR #6594 在修） |
| [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) | 通过 gen_ai.input/output.messages 捕获完整 prompt/completion | 下游已有实现 | 高（PR #6009 在修） |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Turn 级 OTel trace 关联 | PR #6009 后续跟进 | 高 |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | 配对码默认改为 32 字符字母数字 | 安全加固请求 | 中 |
| [#6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574) | 无 vision 能力时图片消息行为

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# hermes-agent 项目日报

**报告日期**: 2026-05-14  
**数据来源**: GitHub NousResearch/hermes-agent  
**数据范围**: 过去 24 小时

---

## 1. 今日速览

hermes-agent 项目在过去 24 小时呈现**极高活跃度**：共产生 272 条 Issue 更新（259 新开/活跃，13 关闭）和 500 条 PR 更新（156 已合并/关闭）。项目维持快速迭代节奏，今日合并了 **multi-agent MVP** 等重要功能，同时处理了 **P1 级 gateway 内存泄漏**等关键修复。社区讨论集中在 CLI 输出截断、Docker 部署问题和多平台网关集成方面，话题覆盖面广泛但总体向好。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 重大合并

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#25008](https://github.com/NousResearch/hermes-agent/pull/25008) | feat: single gateway, multiple agents (multi-agent MVP) | ✅ 已合并 | 实现单网关多 Agent 路由，支持从单一网关进程运行多个隔离 AI Agent，各 Agent 拥有独立模型、人格、记忆、技能和会话 |
| [#25314](https://github.com/NousResearch/hermes-agent/pull/25314) | feat(dreaming): add background memory consolidation plugin | ✅ 已合并 | 新增"梦境"后台记忆整合插件，模拟生物睡眠周期的 3 阶段记忆巩固系统 |
| [#25355](https://github.com/NousResearch/hermes-agent/pull/25355) | feat(slack): support !cmd as alternate prefix | ✅ 已合并 | Slack 线程内现支持 `!cmd` 前缀执行命令（如 `!queue`, `!stop`, `!model`） |
| [#29](https://github.com/NousResearch/hermes-agent/pull/29) | feat: add CI/CD pipeline, linting, type checking | ✅ 已合并 | 为项目添加完整的 CI/CD 流水线、代码检查和格式化基础设施 |
| [#1677](https://github.com/NousResearch/hermes-agent/pull/1677) | revert: revert SMS (Telnyx) platform adapter | ✅ 已合并 | 撤回未经充分 review 的 SMS 平台适配器，将重新提交审核 |

### 重要待合并 PR

| PR # | 标题 | 优先级 | 说明 |
|------|------|--------|------|
| [#25332](https://github.com/NousResearch/hermes-agent/pull/25332) | fix: stop gateway memory leak on cached agent | **P1** | 修复由缓存/会话生命周期路径引入的长期内存泄漏，确保 `_evict_cached_agent()` 在 `/new`, `/model` 等重置路径正确清理状态 |
| [#25370](https://github.com/NousResearch/hermes-agent/pull/25370) | fix(context): retry summary transport failures | - | 上下文摘要传输失败时使用缩减 prompt 重试一次 |
| [#25369](https://github.com/NousResearch/hermes-agent/pull/25369) | fix: do not inherit api_mode when delegating | - | 修复跨 provider 委托（如 MiniMax → DeepSeek）因 api_mode 继承导致的 404 错误 |
| [#25353](https://github.com/NousResearch/hermes-agent/pull/25353) | feat(gateway): add Feishu slash confirm buttons | P2 | 为飞书添加交互卡片支持的通用斜杠确认按钮 |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue # | 标题 | 评论 | 点赞 | 状态 |
|---------|------|------|------|------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | [Bug]: Error: Response truncated due to output length limit | 25 | 4 | 🔴 已关闭 |
| [#5884](https://github.com/NousResearch/hermes-agent/issues/5884) | [Setup]: OSError: [Errno 22] Invalid argument (prompt_toolkit crash) | 12 | 1 | 🟡 打开 |
| [#10980](https://github.com/NousResearch/hermes-agent/issues/10980) | [Setup]: Copilot API call failed (attempt 1/3): APIConnectionError | 12 | 0 | 🟡 打开 |
| [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) | Add generic action buttons / inline keyboard support | 12 | 4 | 🟢 功能请求 |
| [#20249](https://github.com/NousResearch/hermes-agent/issues/20249) | Model Presets: per-turn expert-on-demand model escalation | 10 | 0 | 🟢 功能请求 |
| [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | Matrix gateway: no in-band channel for per-message LLM orchestration | 8 | 0 | 🟡 打开 |

**热点分析**：

1. **#7237 输出截断问题（已关闭）**：这是过去 24 小时评论最多的 Issue，25 条评论反映用户在使用 CLI chat 或 Telegram/Discord/Slack 网关时频繁遇到输出被截断的错误。核心诉求是提升长文本生成能力或提供更优雅的流式处理方案。

2. **#5884 / #10980 配置问题**：prompt_toolkit 崩溃和 Copilot API 连接失败问题各获 12 条评论，表明用户在本地安装和配置阶段遇到较多障碍。

3. **#15311 交互按钮支持**：用户强烈希望 Hermes 在各消息平台（尤其 Telegram）支持内联键盘等富交互组件，目前仅有 Discord 的危险命令审批 UI 使用了按钮。

4. **#20249 模型动态切换**：用户提出按需升级模型的能力（如简单查询用快速模型，复杂推理自动切换到强力模型），反映对成本与性能平衡的需求。

---

## 5. Bug 与稳定性

### P1 严重 Bug（需立即处理）

| Issue # | 标题 | 平台/组件 | 状态 | 是否有 Fix |
|---------|------|----------|------|------------|
| [#24698](https://github.com/NousResearch/hermes-agent/issues/24698) | python-telegram-bot not installed in latest Docker image (v0.13.0) | Telegram, Docker | 🆕 新报告 | 暂无 |
| [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | Matrix gateway: no in-band channel for LLM orchestration | Matrix | 打开 | 暂无 |
| [#13125](https://github.com/NousResearch/hermes-agent/issues/13125) | Hindsight local_embedded causes infinite crash loop when running as root | Memory, Docker | 打开 | 暂无 |

### P2 重要 Bug

| Issue # | 标题 | 平台/组件 | 状态 | 是否有 Fix |
|---------|------|----------|------|------------|
| [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) | Persistent `[Errno 13] Permission denied` on Docker NAS | Docker | 打开 | 暂无 |
| [#23811](https://github.com/NousResearch/hermes-agent/issues/23811) | ContextCompressor inflates small sessions causing re-compression loops | Agent | 打开 | 暂无 |
| [#24360](https://github.com/NousResearch/hermes-agent/issues/24360) | No built-in skills in Homebrew-installed Hermes | CLI | 🆕 新报告 | 暂无 |
| [#24443](https://github.com/NousResearch/hermes-agent/issues/24443) | MiMo reasoning models fail due to reasoning_content not preserved | Xiaomi | 打开 | PR [#25358](https://github.com/NousResearch/hermes-agent/pull/25358) 修复中 |

### 其他值得关注的 Bug

| Issue # | 标题 | 状态 | 备注 |
|---------|------|------|------|
| [#22930](https://github.com/NousResearch/hermes-agent/issues/22930) | 离线运行小模型时计算资源不足问题 | 打开 | 社区求助型 |
| [#24699](https://github.com/NousResearch/hermes-agent/issues/24699) | Kanban 任务处理异常：任务挂起后重执行丢失上下文 | 🆕 新报告 | P3 |
| [#24278](https://github.com/NousResearch/hermes-agent/issues/24278) | TUI 界面符号/图标显示为问号 | 打开 | 编码问题 |

**稳定性评估**：今日报告了 2 个 P1 新 Bug，其中 **Docker 镜像缺少 python-telegram-bot** 属于阻断性问题，影响 Telegram 网关用户。已有 PR #25332 正在修复 gateway 内存泄漏问题，预计将显著改善长期运行稳定性。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue # | 标题 | 评论 | 诉求分析 |
|---------|------|------|----------|
| [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) | 通用操作按钮/内联键盘支持 | 12 | 统一各平台交互体验，与 PR #25353 飞书确认按钮形成呼应 |
| [#20249](https://github.com/NousResearch/hermes-agent/issues/20249) | 模型预设：按需升级模型 | 10 | 智能路由需求，平衡成本与性能 |
| [#503](https://github.com/NousResearch/hermes-agent/issues/503) | 平台原生富交互（内联键盘、执行计划、结构化 UI） | 5 | 长期路线图方向 |
| [#527](https://github.com/NousResearch/hermes-agent/issues/527) | 网关权限层级 - RBAC | 5 | 企业级功能需求 |

### 功能请求与现有 PR 对照

| 功能方向 | 相关 Issue | 进展状态 |
|----------|-----------|----------|
| 多 Agent 支持 | - | ✅ **已合并** (PR #25008) |
| 富交互按钮 | #15311, #503 | 🟡 PR #25353 (飞书) 进行中 |
| 平台原生 UI | #503 | 🟡 规划中 |
| 模型动态切换 | #20249 | 🟡 功能请求阶段 |
| RBAC 权限控制 | #527 | 🟡 功能请求阶段 |
| 记忆整合 | - | ✅ **已合并** (PR #25314 "Dreaming") |

**路线图信号**：从 Issue 和 PR 分布来看，项目近期重点方向为：
1. **多平台集成深化**（飞书、Slack、QQBot 等）
2. **Agent 能力扩展**（多 Agent、记忆系统）
3. **部署体验优化**（Docker Homebrew 安装包）

---

## 7. 用户反馈摘要

### 积极反馈

- **Dashboard TUI 改进需求**：Issue #18080（15 点赞）反映用户对主题系统的认可，但建议优化字体和对比度以提升可读性
- **Slack 线程命令支持**：PR #25355 合并获社区好评，解决了 Slack 线程内无法使用斜杠命令的痛点
- **CI/CD 建设**：PR #29 的合并标志着项目工程化水平提升，降低了贡献门槛

### 痛点与不满

| 场景 | 问题描述 | 影响范围 |
|------|----------|----------|
| **安装配置** | Homebrew 安装缺少 skills，Docker 镜像缺少依赖 | 新用户上手体验 |
| **输出限制** | 长文本生成频繁截断 | CLI 和网关用户 |
| **离线场景** | 小模型资源不足无法运行 | 本地部署用户 |
| **内存管理** | Gateway 长期运行内存泄漏 | 服务器部署用户 |
| **交互能力** | 各平台富交互支持不一致 | 多平台用户 |

### 典型使用场景

1. **企业运维**：Matrix 网关连接私域 Synapse 服务器，多人协作场景
2. **NAS 部署**：在 UGreen 等 NAS 设备上 Docker 部署，用于私有化 AI 助手
3. **编程辅助**：通过 Copilot 集成或 Nous Portal 进行代码生成
4. **任务管理**：Kanban 任务创建与追踪

---

## 8. 待处理积压

以下 Issues 值得关注但尚未得到明确响应或修复：

### 长期未解决（P2 及以上）

| Issue # | 标题 | 创建时间 | 优先级 | 逾期天数 |
|---------|------|----------|--------|----------|
| [#5884](https://github.com/NousResearch/hermes-agent/issues/5884) | prompt_toolkit crash | 2026-04-07 | P1 | ~37 天 |
| [#10980](https://github.com/NousResearch/hermes-agent/issues/10980) | Copilot API connection error | 2026-04-16 | P2 | ~28 天 |
| [#9077](https://github.com/NousResearch/hermes-agent/issues/9077) | vision_analyze 无法读取本地/URL 图片 | 2026-04-13 | P2 | ~31 天 |
| [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) | Docker NAS 权限问题 | 2026-04-24 | P2 | ~20 天 |
| [#23811](https://github.com/NousResearch/hermes-agent/issues/23811) | ContextCompressor 膨胀问题 | 2026-05-11 | P2 | ~3 天 |
| [#13125](https://github.com/NousResearch/hermes-agent/issues/13125) | Hindsight root 权限死循环 | 2026-04-20 | P1 | ~24 天 |

### 建议维护者关注的 Issue

1. **#13125** - Hindsight 在 root 权限下无限崩溃，严重影响 NAS/Docker 部署场景
2. **#9077** - vision_analyze 工具完全失效，影响多模态使用场景
3. **#23811** - ContextCompressor 的恶性循环问题影响会话稳定性

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 259 |
| Issues 关闭 | 13 |
| PR 待合并 | 344 |
| PR 已合并/关闭 | 156 |
| 新版本发布 | 0 |
| 评论最多的 Issue | #7237 (25 条) |
| 点赞最多的 Issue | #18080 (15 👍) |

---

*报告生成时间：2026-05-14 | 数据截止：2026-05-14 23:59 UTC*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**: 2026-05-14  
**项目**: [NanoClaw](https://github.com/nanocoai/nanoclaw)  
**数据来源**: 过去 24 小时 GitHub 活动

---

## 1. 今日速览

过去 24 小时内，NanoClaw 社区活跃度**极高**。项目共产生 **33 条更新**（8 Issues + 25 PRs），其中 **20 个 PR 已合并**，另有 **5 个 PR 待合并**，另有 **1 个 Issue 已修复关闭**。项目未发布新版本，但整体功能推进稳健。今日新增技能（Skills）覆盖社交媒体运营、搜索研究、网站审计等多个垂直场景，代码贡献呈现多元化趋势。值得注意的是，团队对 Slack/Teams 平台文件权限相关的 Bug 响应迅速（#2457 → #2460），体现了对用户体验的重视。

---

## 2. 版本发布

**今日无新版本发布。**

最近一个版本发布记录为空，项目可能处于功能迭代密集期，暂无版本标签发布计划。

---

## 3. 项目进展

过去 24 小时共合并/关闭 **20 个 PR**，以下是**值得关注的重点合并项**：

| PR | 作者 | 类型 | 摘要 | 状态 |
|---|---|---|---|---|
| [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) | @mtichikawa | 技能-Feature | 添加 `/add-discord-voice-transcription` 技能，支持本地 whisper.cpp 离线语音转写 | 🟡 Open |
| [#2458](https://github.com/nanocoai/nanoclaw/pull/2458) | @mtichikawa | 功能-Channel | Chat SDK 桥接层语音转写钩子，配置 `WHISPER_BIN` 即可启用 | ✅ Merged |
| [#2456](https://github.com/nanocoai/nanoclaw/pull/2456) | @dustinlucien | 功能-Observability | 为 Claude Provider 添加 LangFuse 可观测性追踪（延迟、API错误、Token统计等） | ✅ Merged |
| [#2450](https://github.com/nanocoai/nanoclaw/pull/2450) | @fresholdidea | 技能-Feature | 新增 `/linkedin-ads` 技能，包含 4 个子命令（Performance/Creative/Targeting/Audit） | ✅ Merged |
| [#2449](https://github.com/nanocoai/nanoclaw/pull/2449) | @fresholdidea | 技能-Feature | 新增 `/linkedin-community` 技能，基于 agent-browser 实现 LinkedIn 社区运营 | ✅ Merged |
| [#2448](https://github.com/nanocoai/nanoclaw/pull/2448) | @fresholdidea | 技能-Feature | 新增 `/social-listening` 技能，跨 Serper/Reddit/Parallel/Brave/RSS 多源并行搜索 | ✅ Merged |
| [#2447](https://github.com/nanocoai/nanoclaw/pull/2447) | @fresholdidea | 技能-Feature | 新增 `/reddit-research` 技能，提供 ICP语言挖掘、竞品痛点发现等 4 个剧本 | ✅ Merged |
| [#2445](https://github.com/nanocoai/nanoclaw/pull/2445) | @fresholdidea | 技能-Feature | 新增 `/serper-search` 技能及 Serper MCP 环境变量透传 | ✅ Merged |
| [#2446](https://github.com/nanocoai/nanoclaw/pull/2446) | @fresholdidea | 技能-Feature | 新增 `/firecrawl` 技能及 Firecrawl MCP 集成 | ✅ Merged |
| [#2455](https://github.com/nanocoai/nanoclaw/pull/2455) | @fresholdidea | 技能-Feature | 替换 squirrelscan 审计技能为 Lighthouse + axe + linkinator 本地复合栈 | ✅ Merged |
| [#2454](https://github.com/nanocoai/nanoclaw/pull/2454) | @fresholdidea | 文档 | 新增 `docs/onecli-secrets.md` vault 密钥参考文档（20行表格） | ✅ Merged |
| [#2452](https://github.com/nanocoai/nanoclaw/pull/2452) | @fresholdidea | 功能-Container | Dockerfile 中固定 Lighthouse 13.3.0，复用已有 Chromium | ✅ Merged |
| [#2451](https://github.com/nanocoai/nanoclaw/pull/2451) | @fresholdidea | 技能-Feature | 本地化 `audit-website` 技能，避免上游删除导致中断 | ✅ Merged |
| [#2453](https://github.com/nanocoai/nanoclaw/pull/2453) | @fresholdidea | 技能-Feature | 本地化 `copy-grader` 技能（Ogilvy营销文案评分器） | ✅ Merged |
| [#2460](https://github.com/nanocoai/nanoclaw/pull/2460) | @madevizslove183 | 修复 | 为 Slack scope 清单补充 `files:read` 和 `files:write` 权限 | ✅ Merged |
| [#2443](https://github.com/nanocoai/nanoclaw/pull/2443) | @flusterff | 修复 | Slack AI-to-AI 出站消息自动前缀 peer mention，`SLACK_PEER_MENTIONS` 配置 | ✅ Merged |
| [#2442](https://github.com/nanocoai/nanoclaw/pull/2442) | @Koshkoshinsk | 修复 | 单目标 Agent 强制消息包裹格式 `<message to="...">`，修复静默丢弃响应问题 | ✅ Merged |
| [#974](https://github.com/nanocoai/nanoclaw/pull/974) | @mtichikawa | 功能-Discord | Discord 图片视觉和语音转写（分支技能架构） | ✅ Closed |

**进度评估**: 项目在可观测性、社交媒体运营、搜索研究等方向全面推进，@fresholdidea 和 @mtichikawa 为核心贡献者。技能本地化策略（防止上游删除风险）体现了项目对稳定性的重视。

---

## 4. 社区热点

**讨论最活跃的 Issues**：

| Issue | 类型/优先级 | 评论数 | 摘要 |
|---|---|---|---|
| [#869](https://github.com/nanocoai/nanoclaw/issues/869) | Enhancement / High | 3 | **按组凭证管理**：当前所有群组共享单一 Claude 凭证池，无法为特定群组分配独立 API 配额和认证身份。用户请求 `per-group credential management` 和交互式重新认证功能。 |
| [#1787](https://github.com/nanocoai/nanoclaw/issues/1787) | Bug | 2 | **Apple Container 分支合并冲突**：在 macOS 上合并 `skill/apple-container` 到 `v2` 分支产生 6 个合并冲突，首次 `/setup` 运行失败。 |

**分析**：
- **#869** 是**已存在 2 个月的长期议题**，反映出多租户场景下凭证隔离的强需求。高优先级标注 + 持续讨论表明这是企业级用户的关键诉求，路线图信号明确。
- **#1787** 是关于分支合并工作流的问题，可能影响新用户上手体验，需要关注是否与 Git 操作或 Node 版本相关。

---

## 5. Bug 与稳定性

今日共报告 **6 个 Bug**，按严重程度排列：

| # | 标题 | 严重度 | 组件 | 状态 | 备注 |
|---|---|---|---|---|---|
| [#2465](https://github.com/nanocoai/nanoclaw/issues/2465) | `ncl destinations add` 审批后未填充接收者 `inbound.db` | 🔴 High | CLI | Open | 接收者无法解析新目的地，重启无法恢复 |
| [#2464](https://github.com/nanocoai/nanoclaw/issues/2464) | CLI 群组作用域下显式传参被静默覆盖无警告 | 🟡 Medium | CLI | Open | 无 stderr 无退出码，用户无法察觉 |
| [#2462](https://github.com/nanocoai/nanoclaw/issues/2462) | `install-node.sh` 在非 Debian 系统（Fedora/RHEL等）直接失败 | 🟡 Medium | Setup | Open | NodeSource 安装脚本不支持导致无回退 |
| [#2461](https://github.com/nanocoai/nanoclaw/issues/2461) | Teams 设置硬编码 `supportsFiles: false`，机器人附件静默失败 | 🟡 Medium | Setup | Open | 与 #2457 同类问题（Slack版已修复） |
| [#2461](https://github.com/nanocoai/nanoclaw/issues/2461) | [同 #2461，Teams 平台文件附件问题] | 🟡 Medium | Setup | Open | 等待维护者跟进 |
| [#2457](https://github.com/nanocoai/nanoclaw/issues/2457) | Slack 设置缺少 `files:read` scope → 文件附件静默失败 | 🟡 Medium | Setup | ✅ **Fixed** | 已合并 #2460 修复 |

**稳定性评估**：
- **CLI 模块问题突出**（#2465、#2464），涉及状态持久化和参数处理，需优先处理。
- **跨平台安装脚本**（#2462）是长期技术债，限制了项目在非 Debian 发行版的部署。
- **平台差异问题**（#2461 vs #2457）表明多渠道集成测试覆盖不足，建议建立渠道配置文件规范。

---

## 6. 功能请求与路线图信号

**新功能请求**：

| Issue | 请求内容 | 优先级 | 潜在纳入 |
|---|---|---|---|
| [#869](https://github.com/nanocoai/nanoclaw/issues/869) | 按群组凭证管理 + 交互式重新认证通道 | High | 可能性高（2个月讨论+企业需求） |
| [#2463](https://github.com/nanocoai/nanoclaw/issues/2463) | 文档澄清 `--agent-group-id` 在群组作用域下是被**锁定**而非仅默认值 | Low | 可能纳入（文档 PR 即可解决） |

**功能趋势分析**：
1. **多租户隔离**：凭证管理是强烈需求，可能影响架构设计。
2. **离线/隐私优先**：语音转写本地化（whisper.cpp）表明用户对云端依赖的担忧。
3. **渠道一致性**：Slack/Teams 文件权限问题（#2457、#2461）提示需要统一的渠道配置框架。
4. **运维能力**：LangFuse 可观测性集成（#2456 已合并）表明项目正在向生产就绪演进。

---

## 7. 用户反馈摘要

从 Issue 评论和描述中提炼的**用户痛点与场景**：

| 痛点 | 来源 | 场景描述 |
|---|---|---|
| **凭证共享导致配额竞争** | #869 | 多群组共用同一 Claude 凭证，群组间 API 配额无法隔离，影响 SLA |
| **macOS 分支合并失败** | #1787 | 新用户首次 fork 后运行 `/setup` 选 Apple Container 失败，上手体验差 |
| **文件附件静默失败** | #2457、#2461 | Slack/Teams 用户配置后无法接收文件，但系统无报错，难以排查 |
| **参数被静默覆盖** | #2464 | 运维人员传了 `--agent-group-id` 但被系统忽略，任务发送到错误群组才发现 |
| **安装脚本平台限制** | #2462 | 开发者使用 Fedora/RHEL 环境，Node 安装脚本直接报错，无回退方案 |

**用户满意/正向信号**：
- 社区贡献活跃：@fresholdidea 单日提交 10+ PR，覆盖多个技能领域。
- Bug 修复响应快：#2457（Slack 权限）当天报告当天修复（#2460）。

---

## 8. 待处理积压

以下是**长期未解决或低优先级积压**，提醒维护者关注：

| Issue/PR | 创建时间 | 状态 | 积压时长 | 优先级 | 备注 |
|---|---|---|---|---|---|
| [#869](https://github.com/nanocoai/nanoclaw/issues/869) | 2026-03-09 | Open | **~66 天** | High | 按组凭证管理，2个月内持续讨论，无 PR |
| [#1787](https://github.com/nanocoai/nanoclaw/issues/1787) | 2026-04-15 | Open | **~29 天** | Medium | macOS 分支合并问题，影响新用户 |
| [#2187](https://github.com/nanocoai/nanoclaw/pull/2187) | 2026-05-02 | Open | **~12 天** | Fix | CLI 平台 ID 命名空间修复，关联 #2186 |
| [#2411](https://github.com/nanocoai/nanoclaw/pull/2411) | 2026-05-11 | Open | **~3 天** | Fix | 定时任务静默跳过问题 |

**积压分析**：
- **#869** 是项目最老的 Open 高优先级 Issue，涉及架构层面的凭证隔离，需维护者明确是否在近期路线图中。
- **#2187** 和 **#2411** 是 Fix PR，虽开放时间较短但应尽快评审合并，防止问题扩散。

---

## 关键指标摘要

| 指标 | 数值 | 趋势 |
|---|---|---|
| 活跃 Issues | 7 (Open) + 1 (Closed) | 正常 |
| 活跃 PRs | 5 (Pending) + 20 (Merged/Closed) | 🔥 极高 |
| 新技能上线 | 11 个（社交/搜索/审计） | 显著增长 |
| Bug 修复 | 1 个已修复，6 个待处理 | 需关注 |
| 版本发布 | 0 | — |

**整体健康度**: 🟢 良好（高贡献活跃度，快速 Bug 响应，技能矩阵快速扩展）

---

*报告生成时间: 2026-05-14 | 数据区间: 2026-05-13 00:00 ~ 2026-05-14 00:00 (UTC)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-05-14

---

## 1. 今日速览

LobsterAI 项目在过去 24 小时内保持极高活跃度，共处理 **23 条 PR**（其中 22 条已合并/关闭）、**2 条 Issues** 新开，另有 **1 个版本发布**（2026.5.12）。合并的 PR 中包含多个重要功能（插件管理、工件应用选择、上下文压缩优化）和安全修复（URL 协议白名单、IPC 桥接限制）。当前项目处于稳定迭代阶段，功能推进与稳定性修复并行。2 条 open issues 中包含 1 条高优 Bug（滚动异常），建议优先处理。

---

## 2. 版本发布

### 🎉 LobsterAI 2026.5.12

**发布时间**：2026-05-12

**主要变更**：

| PR | 作者 | 变更内容 |
|----|------|----------|
| [#1943](https://github.com/netease-youdao/LobsterAI/pull/1943) | @btc69m979y-dotcom | feat: memory settings tab refactor + Dreaming content display |
| [#1946](https://github.com/netease-youdao/LobsterAI/pull/1946) | @fisherdaddy | feat: update UI |

> **说明**：本次为常规功能版本发布，主要涉及 Memory 设置面板重构及 Dreaming 内容展示优化，建议用户升级以获得更好的内存管理和 UI 体验。

---

## 3. 项目进展

### 合并/关闭的 Pull Requests（共 22 条）

#### 🏗️ 功能开发（6 条）

| PR | 标题 | 领域 | 状态 |
|----|------|------|------|
| [#1969](https://github.com/netease-youdao/LobsterAI/pull/1969) | feat(cowork): improve OpenClaw context compaction handling | cowork/openclaw | ✅ 已合并 |
| [#1968](https://github.com/netease-youdao/LobsterAI/pull/1968) | feat(artifacts): 新增「选择应用打开」并将预览限定为文件类工件 | artifacts/main | ✅ 已合并 |
| [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963) | feat(plugins): add plugin management with advanced config | plugins | ✅ 已合并 |
| [#1964](https://github.com/netease-youdao/LobsterAI/pull/1964) | Feat/show session i dfor dev mode | cowork/main | ✅ 已合并 |
| [#880](https://github.com/netease-youdao/LobsterAI/pull/880) | feat(cowork): 新增消息勾选分享，分享图片预览、一键复制、图片品牌化支持等功能 | cowork | ✅ 已合并 |
| [#901](https://github.com/netease-youdao/LobsterAI/pull/901) | feat(speech): add standalone speech input flow | speech | ✅ 已合并 |

**亮点功能说明**：

- **#1963 插件管理系统**：支持从 npm/clawhub/git/本地安装插件，提供高级配置 UI，基于 `openclaw.plugin.json` 的 `configSchema` + `uiHints` 动态渲染表单。
- **#1968 工件预览增强**：新增「选择应用打开」功能，跨平台枚举系统可打开文件的应用（macOS NSWorkspace + JXA、Windows 注册表 PowerShell、Linux mimeinfo.cache）。
- **#1969 上下文压缩优化**：在 Cowork 聊天中新增上下文使用指示器和手动压缩入口，同步历史会话的上下文/checkpoint 元数据，处理 OpenClaw memory flush、silent `NO_REPLY` 和压缩/重试流程。

#### 🔒 安全修复（6 条）

| PR | 标题 | 问题 |
|----|------|------|
| [#877](https://github.com/netease-youdao/LobsterAI/pull/877) | fix(security): add URL scheme whitelist to shell.openExternal calls | 阻止 `file://`、`cmd:`、`powershell:`、`javascript:` 等危险协议 |
| [#889](https://github.com/netease-youdao/LobsterAI/pull/889) | fix(security): validate URL protocol in shell:openExternal IPC handler | URL 协议校验，仅允许 `https:`、`http:`、`mailto:` |
| [#890](https://github.com/netease-youdao/LobsterAI/pull/890) | fix(security): restrict open IPC bridge with channel allowlists | IPC 桥接频道白名单限制，防止任意 channel 滥用 |

> **安全评级**：本次安全修复覆盖了潜在的攻击面，建议所有用户尽快部署包含这些修复的版本。

#### 🐛 Bug 修复（7 条）

| PR | 标题 | 修复内容 |
|----|------|----------|
| [#874](https://github.com/netease-youdao/LobsterAI/pull/874) | fix: 修复并发刷新 token 竞态导致积分显示为 0 的问题 | 解决 3 处独立 token 刷新实现互相无互斥导致的积分显示异常 |
| [#881](https://github.com/netease-youdao/LobsterAI/pull/881) | fix(sqlite): 启用外键约束，修复删除 session 不级联删除 messages 导致数据库膨胀 | 修复 sql.js 默认关闭外键约束导致的级联删除失效 |
| [#891](https://github.com/netease-youdao/LobsterAI/pull/891) | fix: use nullish check in store.getItem to preserve falsy values | 防止 `0`、`false`、`""` 等合法值被误判为 null |
| [#892](https://github.com/netease-youdao/LobsterAI/pull/892) | fix: remove mutable module-level export from modelSlice | 修复 Redux reducer 中的状态可变性违规 |
| [#1966](https://github.com/netease-youdao/LobsterAI/pull/1966) | fix(im): improve POPO channel session title display | POPO 渠道会话标题智能解析，替代 12 字符硬截断 |
| [#1965](https://github.com/netease-youdao/LobsterAI/pull/1965) | Liuzhq/fix UI 2026.5.13 | 修复低分辨率显示打开图标清晰度、移除技能描述悬停提示 |

#### 📝 文档更新（3 条）

| PR | 标题 |
|----|------|
| [#1970](https://github.com/netease-youdao/LobsterAI/pull/1970) | docs(cowork): clarify temporary compaction window override |
| [#1967](https://github.com/netease-youdao/LobsterAI/pull/1967) | Fix/remove legacy urls and docs |

---

## 4. 社区热点

### 📢 Open Issues（2 条）

| # | 标题 | 创建者 | 创建时间 | 评论数 | 优先级 |
|---|------|--------|----------|--------|--------|
| [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) | 【Bug】会话页面向上滚动异常，无法滚动或滚动异常 | @atdow | 2026-05-13 | 0 | 🔴 高 |
| [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问时会出现无限NO_REPLY或者输出几个文字就直接不输出了 | @atdow | 2026-04-28 | 2 | 🟡 中 |

### 🔥 热点分析

**#1971 会话页面滚动异常（高优）**

- **问题描述**：当会话中存在超长元素（如 Mermaid 图表）时，首次从底部滚动到顶部正常，但后续从底部向上滚动时会出现无法滚动或滚动异常。
- **根因分析**：会话页面使用虚拟滚动，高度超大元素重复销毁渲染导致列表高度变化剧烈，触发滚动事件无限重渲染。
- **建议**：该问题影响用户体验，建议尽快定位到虚拟滚动实现处进行优化。

**#1849 追问 NO_REPLY 问题**

- **问题描述**：用户追问时出现无限 `NO_REPLY` 或输出几个字符后停止。
- **根因分析**：任务被提前 `complete`，但模型仍在输出，导致页面无数据响应。
- **进度**：已有 2 条评论，社区正在追踪。

---

## 5. Bug 与稳定性

### 🐛 今日报告 Bug

| 优先级 | Issue | 描述 | 状态 | 是否有 Fix PR |
|--------|-------|------|------|---------------|
| 🔴 高 | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) | 会话页面滚动异常（虚拟滚动高度计算问题） | Open | 无 |
| 🟡 中 | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问时无限 NO_REPLY 或提前停止输出 | Open | 无 |

### ✅ 已修复（今日合并的 Bug Fix PR）

| PR | 修复内容 |
|----|----------|
| #874 | 并发刷新 token 竞态导致积分显示为 0 |
| #881 | 外键约束未启用导致级联删除失效 |
| #891 | store.getItem 误删 falsy 值 |
| #892 | modelSlice 可变导出导致 Redux 违规 |
| #1966 | POPO 会话标题硬截断问题 |

---

## 6. 功能请求与路线图信号

### 📋 功能请求

| PR/Issue | 请求内容 | 来源 | 可行性分析 |
|----------|----------|------|------------|
| [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963) | 插件管理系统（安装/卸载/启用/禁用/高级配置） | 内部开发 | ✅ 已实现，2026.5.12 合并 |
| [#1968](https://github.com/netease-youdao/LobsterAI/pull/1968) | 工件文件「选择应用打开」 | 内部开发 | ✅ 已实现，2026.5.12 合并 |
| [#880](https://github.com/netease-youdao/LobsterAI/pull/880) | 消息勾选分享、图片预览、一键复制、图片品牌化 | 内部开发 | ✅ 已实现 |
| [#901](https://github.com/netease-youdao/LobsterAI/pull/901) | 独立语音输入流程 | 内部开发 | ✅ 已实现 |
| [#903](https://github.com/netease-youdao/LobsterAI/pull/903) | 收藏夹功能与对话导航优化 | 内部开发 | ✅ 已实现 |

**路线图信号**：从近期 PR 来看，项目重点在：
1. **Cowork 功能增强**：上下文压缩、收藏夹、消息分享
2. **平台能力扩展**：插件系统、语音输入
3. **用户体验优化**：UI 细节修复、滚动性能优化

---

## 7. 用户反馈摘要

> 注：今日 Open Issues 均由 @atdow 报告，结合 PR 内容分析用户痛点：

| 场景 | 痛点 | 影响 |
|------|------|------|
| 会话交互 | 追问时出现无限 NO_REPLY 或提前停止输出 | 用户无法正常对话，需刷新页面 |
| 会话浏览 | 超长元素（如 Mermaid）时滚动异常 | 长对话无法正常浏览 |
| POPO 集成 | 会话标题被硬截断为 12 字符 | 群聊/频道名称显示不完整 |

---

## 8. 待处理积压

### ⏰ 需要关注的老旧 PR/Issue

| 类型 | 编号 | 创建时间 | 标题 | 备注 |
|------|------|----------|------|------|
| Issue | #1849 | 2026-04-28 | 追问时无限 NO_REPLY | 持续追踪中，建议优先调查 |

### 📊 积压统计

| 类别 | 数量 | 备注 |
|------|------|------|
| Open Issues | 2 | 1 高优、1 中优 |
| 待合并 PR | 1 | 需 Review |

---

## 9. 总结建议

| 优先级 | 行动项 | 负责人 |
|--------|--------|--------|
| 🔴 高 | 调查 #1971 虚拟滚动导致的滚动异常问题 | 前端团队 |
| 🟡 中 | 跟进 #1849 NO_REPLY 问题根因分析 | 模型/前端联调 |
| 🟢 低 | 整理历史 PR，关闭已合并的 stale PR 标题党 | 文档/维护者 |

---

> **数据来源**：GitHub LobsterAI 仓库 | 报告生成时间：2026-05-14

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目动态日报

## 日期：2026-05-14

---

## 1. 今日速览

QwenPaw 项目今日保持高度活跃，共产生 **86 条更新**（Issues 36 条 + PRs 50 条）。新版本 **v1.1.7-beta.2** 正式发布，带来了插件 FastAPI 路由注册和 keyring 超时等实用功能。社区反馈聚焦于多渠道集成稳定性（钉钉/微信/QQ）、内存管理缺陷和安全机制副作用。开发者响应积极，共有 **16 个 PR 成功合并**，多个高优先级 Bug 已提交修复方案。

---

## 2. 版本发布

### 🎉 v1.1.7-beta.2 已发布

| 项目 | 详情 |
|------|------|
| **版本号** | v1.1.7-beta.2 |
| **发布类型** | Beta 预发布 |

**主要变更：**

| 类型 | 功能 | 贡献者 | PR 链接 |
|------|------|--------|---------|
| ✨ 新功能 | **插件系统增强**：支持通过插件注册 FastAPI APIRouter 实例 | @Osier-Yi | [#4255](https://github.com/agentscope-ai/QwenPaw/pull/4255) |
| ✨ 新功能 | **Keyring 超时机制**：为 keyring 操作添加超时配置 | @rayrayraykk | [#4263](https://github.com/agentscope-ai/QwenPaw/pull/4263) |
| 🐛 Bug 修复 | **Console TokenUsage 修复** | @zha | — |

---

## 3. 项目进展

### 合并/关闭的重要 PR（按重要性排序）

| PR 编号 | 类型 | 标题 | 状态 | 说明 |
|---------|------|------|------|------|
| [#4229](https://github.com/agentscope-ai/QwenPaw/pull/4229) | perf | 优化 async depends 修复线程池阻塞 | ✅ 已合并 | 提升 API 响应性能 |
| [#4302](https://github.com/agentscope-ai/QwenPaw/pull/4302) | fix | 修复重复控制台流回放 | ✅ 已合并 | 解决 #4300 Agent 回复重复问题 |
| [#4301](https://github.com/agentscope-ai/QwenPaw/pull/4301) | fix | 修复格式错误的工具原始输入 | ✅ 已合并 | 提升工具调用健壮性 |
| [#4290](https://github.com/agentscope-ai/QwenPaw/pull/4290) | feat | 在聊天中显示上下文使用量 | ✅ 已合并 | 增强可观测性 |
| [#4294](https://github.com/agentscope-ai/QwenPaw/pull/4294) | fix | 在用户边界保持压缩历史 | ✅ 已合并 | 修复 #3984 对话历史丢失 |
| [#4293](https://github.com/agentscope-ai/QwenPaw/pull/4293) | fix | 规范化 OpenAI reasoning 内容扩展 | ✅ 已合并 | 修复 #4006 reasoning 显示异常 |
| [#4288](https://github.com/agentscope-ai/QwenPaw/pull/4288) | fix | 改进助手文件预览 | ✅ 已合并 | 修复 #4260 文件标题空白问题 |

### 待合并的重要 PR

| PR 编号 | 类型 | 标题 | 状态 | 关联 Issue |
|---------|------|------|------|------------|
| [#4304](https://github.com/agentscope-ai/QwenPaw/pull/4304) | fix | 序列化共享会话 cron jobs | 🔄 Review | Fixes #4217 |
| [#4303](https://github.com/agentscope-ai/QwenPaw/pull/4303) | fix | 隔离非共享会话运行 | 🔄 Review | Fixes #4162 |
| [#4305](https://github.com/agentscope-ai/QwenPaw/pull/4305) | refactor | Inbox 重构 | 🔄 Review | — |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | feat | 新增 Tauri 2.x 桌面应用支持 | 🔄 Under Review | 重大新功能 |
| [#4292](https://github.com/agentscope-ai/QwenPaw/pull/4292) | feat | MCP 支持可配置超时 | 🔄 Review | Fixes #3997 |
| [#4291](https://github.com/agentscope-ai/QwenPaw/pull/4291) | feat | MCP 支持自定义 TLS 验证 | 🔄 Review | Fixes #4175 |
| [#4295](https://github.com/agentscope-ai/QwenPaw/pull/4295) | feat | Provider 支持自定义 HTTP 头 | 🔄 Review | — |
| [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) | feat | 增强 Matrix E2EE 验证步骤 | 🔄 Under Review | — |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 评论数 | 状态 | 标题 | 热度分析 |
|------------|--------|------|------|----------|
| [#2642](https://github.com/agentscope-ai/QwenPaw/issues/2642) | 15 | 🔴 已关闭 | 接入钉钉/QQ/微信后 PPT 文件导致机器人报错 | ⚠️ **高优先级** - 影响所有渠道集成 |
| [#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165) | 9 | 🔴 已关闭 | v1.1.6 Volcano Engine 模型配置问题 | 🔧 已修复 |
| [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | 8 | 🔴 已关闭 | DashScope provider 配置正确但读取不到 | 🔧 已修复 |
| [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) | 6 | 🔴 已关闭 | read_file_safe 传递 1GB 导致 MemoryError | 🔧 已修复 |
| [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | 5 | 🟡 打开 | MCP 调用 401 错误导致堵塞超时 | ⚠️ **待修复** |

### 🔥 核心热点分析

**1. 多渠道集成稳定性问题（#2642, #4165, #4159）**
- **诉求**：用户反馈接入钉钉、企业微信、QQ 等渠道时，在处理 PPT/文件任务时频繁报错
- **根本原因**：API 参数类型校验问题 (`messages.content.type`) 和 Provider 配置加载逻辑缺陷
- **社区反应**：这是长期存在的集成痛点，涉及所有主流渠道

**2. 安全机制副作用（#4244）**
- **问题**：`shell_evasion_checks.newlines=True` 默认启用时，多行 shell 命令被静默阻止
- **影响**：导致 Agent 思维链混乱，用户感知为"命令不执行"
- **建议**：考虑改为警告而非静默阻止

---

## 5. Bug 与稳定性

### 🔴 严重 Bug（已开启 Fix PR 或需紧急处理）

| Issue | 严重度 | 描述 | 状态 | Fix PR |
|-------|--------|------|------|--------|
| [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) | P0 | 读取对话日志触发循环压缩 → 内存耗尽 → 系统卡死 | 🆕 新报告 | — |
| [#4300](https://github.com/agentscope-ai/QwenPaw/issues/4300) | P0 | Agent 回复内容重复两次（包括思考过程） | 🆕 新报告 | [#4302](https://github.com/agentscope-ai/QwenPaw/pull/4302) ✅ |
| [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | P0 | MCP 调用 401/错误码时堵塞直到超时 | ⚠️ 待处理 | — |
| [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) | P1 | write_file() 死循环报错（输出内容较长时） | 🆕 新报告 | — |

### 🟡 中等 Bug

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#4217](https://github.com/agentscope-ai/QwenPaw/issues/4217) | 并发 cron 任务共享 session 导致空回复 | 🔄 修复中 | [#4304](https://github.com/agentscope-ai/QwenPaw/pull/4304) |
| [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) | 删除会话后定时任务仍用旧上下文 | 🔄 修复中 | [#4303](https://github.com/agentscope-ai/QwenPaw/pull/4303) |
| [#4260](https://github.com/agentscope-ai/QwenPaw/issues/4260) | Console 发送文件时标题空白、预览过小 | 🔄 修复中 | [#4288](https://github.com/agentscope-ai/QwenPaw/pull/4288) ✅ |
| [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | shell_evasion_checks 多行命令静默阻止 | ⚠️ 待处理 | — |

### 🟢 已修复/已关闭 Bug

| Issue | 描述 | 修复方式 |
|-------|------|----------|
| [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | DashScope api_key 读取失败 | 已关闭（配置问题） |
| [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) | 1GB 文件读取导致 MemoryError | 已关闭（代码修复） |
| [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056) | 微信频道偶发消息丢失 | 已关闭 |

---

## 6. 功能请求与路线图信号

### 🌟 高期待功能（已有对应 PR）

| PR | 功能 | 状态 | 重要性 |
|----|------|------|--------|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | **Tauri 2.x 桌面应用支持** | 🔄 Under Review | ⭐⭐⭐⭐⭐ |
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | 聊天内运行 shell 命令可视化面板 | 🆕 Open | ⭐⭐⭐⭐ |
| [#4295](https://github.com/agentscope-ai/QwenPaw/pull/4295) | Provider 自定义 HTTP Headers | 🔄 Review | ⭐⭐⭐⭐ |
| [#4292](https://github.com/agentscope-ai/QwenPaw/pull/4292) | MCP 可配置超时 | 🔄 Review | ⭐⭐⭐⭐ |
| [#4291](https://github.com/agentscope-ai/QwenPaw/pull/4291) | MCP 自定义 TLS 验证 | 🔄 Review | ⭐⭐⭐ |
| [#4287](https://github.com/agentscope-ai/QwenPaw/pull/4287) | 印尼语 Agent 支持 | 🔄 Review | ⭐⭐⭐ |

### 📝 新功能提案

| Issue | 功能 | 来源 | 分析 |
|-------|------|------|------|
| [#4090](https://github.com/agentscope-ai/QwenPaw/issues/4090) | 对话中展示模型报错信息 | @Gmgge | 提升可观测性，合理需求 |
| [#3767](https://github.com/agentscope-ai/QwenPaw/issues/3767) | execute_shell_command 尊重用户 shell 环境 | @codelast | 企业用户痛点 |

---

## 7. 用户反馈摘要

### 痛点分析

| 场景 | 反馈 | 情绪 |
|------|------|------|
| **多渠道集成** | "接入钉钉、微信、QQ 后，只要处理文件就会报错，机器人直接挂掉" | 😡 沮丧 |
| **企业微信** | "配置单会话后还是多个问题同时回答，不知道怎么配置" | 😕 困惑 |
| **内存问题** | "叫 AI 读对话记录，结果触发循环压缩，SSH 都进不去了" | 😱 恐慌 |
| **定时任务** | "修改了技能文件，定时任务还是用旧上下文，必须删除重建" | 😤 无奈 |

### 满意点

| 功能 | 反馈 |
|------|------|
| **新版本功能** | v1.1.7-beta.2 的 FastAPI 插件注册功能受到好评（@Osier-Yi） |
| **文档改进** | 自定义 provider 模型发现文档澄清获得认可 |

### 长期反馈

- **安全性**：shell 命令执行采用硬编码 `/bin/sh`（dash）导致 bash 特性不可用
- **可观测性**：微信对话与浏览器操作不同步，用户无法看到 Agent 执行过程

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Issues（超过 7 天无回复）

| Issue | 创建时间 | 天数 | 描述 | 优先级 |
|-------|----------|------|------|--------|
| [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) | 2026-03-25 | ~50 天 | 代理思考后无反馈直接结束对话 | 🟡 中 |
| [#1499](https://github.com/agentscope-ai/QwenPaw/issues/1499) | 2026-03-14 | ~61 天 | QQ 接入报错 "No active model configured" | 🟡 中 |
| [#3690](https://github.com/agentscope-ai/QwenPaw/issues/3690) | 2026-04-22 | ~22 天 | 钉钉艾特是纯文字不生效 | 🟢 低 |

### 📌 维护者关注提醒

| 类型 | 项目 | 建议 |
|------|------|------|
| **Bug** | [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) MCP 401 堵塞 | 高优先级，建议分配资源 |
| **Bug** | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) 内存耗尽 | 紧急，可能影响生产环境 |
| **Bug** | [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) write_file 死循环 | 新报告，需确认根因 |
| **Feature** | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 桌面应用 | 高期待值，建议优先 Review |

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 17 |
| Issues 已关闭 | 19 |
| PR 新开 | 34 |
| PR 已合并/关闭 | 16 |
| 新版本

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 | 2026-05-14

---

## 1. 今日速览

**项目活跃度：低-中** 📊

ZeptoClaw 今日社区活跃度较低，共处理 **4 条 Issues**（全部已关闭），但均为维护性/文档类任务，无新功能开发或 bug 修复。所有 closed Issues 均为计划内的安全审计和 CVE 文档工作，未产生新的功能进展或用户反馈。今日 **无 PR 合并**、**无版本发布**，项目处于常规维护状态。安全团队持续推进 `ai-vulns` 自动化漏洞审计流程。

---

## 2. 版本发布

**无新版本发布** 🚫

过去 24 小时内无 release 活动。如需跟踪版本历史，请访问：[Releases 页面](https://github.com/qhkm/zeptoclaw/releases)

---

## 3. 项目进展

**今日无 PR 合并** ℹ️

虽然有 4 条 Issues 被关闭，但均为 **Issue-only 工作项**（文档/追踪用途），未涉及代码层面的合并。所有关闭的 Issues 均属于以下两类工作流：

| Issue | 类型 | 状态 | 意义 |
|-------|------|------|------|
| [#590](https://github.com/qhkm/zeptoclaw/issues/590) | docs(cve) | ✅ Closed | 推进 CVE 补丁文件提取标准化 |
| [#589](https://github.com/qhkm/zeptoclaw/issues/589) | docs(cve) | ✅ Closed | 完善官方 CVE 库元数据收集 |
| [#588](https://github.com/qhkm/zeptoclaw/issues/588) | chore(security) | ✅ Closed | 第二轮 AI 漏洞验证 |
| [#587](https://github.com/qhkm/zeptoclaw/issues/587) | chore(security) | ✅ Closed | 启动 web/control-plane 安全审计 |

**项目整体评估**：代码库保持稳定，无回归风险；安全审计流程持续迭代。

---

## 4. 社区热点

**讨论最活跃的 Issues** 🔥

| Issue | 评论数 | 链接 |
|-------|--------|------|
| #590 docs(cve): extract advisory patch files | 1 | [查看](https://github.com/qhkm/zeptoclaw/issues/590) |
| #589 docs(cve): collect published ZeptoClaw advisories | 1 | [查看](https://github.com/qhkm/zeptoclaw/issues/589) |
| #588 chore(security): continue deep ai-vulns verification | 1 | [查看](https://github.com/qhkm/zeptoclaw/issues/588) |
| #587 chore(security): deep ai-vulns audit | 1 | [查看](https://github.com/qhkm/zeptoclaw/issues/587) |

**热点分析**：
- 今日所有 Issues 评论数均为 **1 条**，说明社区参与度较低
- 讨论焦点集中在 **安全审计和 CVE 文档管理**（`llm-enhance/official-cve` 仓库）
- 主要贡献者：`@YLChen-007`（文档/CVE相关）、`@liey1`（安全审计）
- 尚未观察到来自最终用户的 feature request 或 bug 反馈

---

## 5. Bug 与稳定性

**今日无 Bug 报告** ✅

过去 24 小时内无新 bug、崩溃或回归问题的报告。项目在无重大代码变更的情况下保持稳定运行。

**建议**：如用户遇到稳定性问题，鼓励通过 [Issue Tracker](https://github.com/qhkm/zeptoclaw/issues) 反馈。

---

## 6. 功能请求与路线图信号

**今日无功能请求** ℹ️

未观察到来自社区的新功能建议。所有 Issues 均为维护性任务：
- **CVE 管理**：`#589`、`#590` → 规范化安全漏洞文档流程
- **安全审计**：`#587`、`#588` → 推进 `ai-vulns` 自动化审计覆盖

**路线图信号**：
- 项目当前重心在 **安全合规**（CVE 记录、AI 漏洞审计）
- 暂无公开的功能路线图文档

---

## 7. 用户反馈摘要

**无直接用户反馈** ℹ️

今日所有 Issues 均由维护团队内部创建，未收到外部用户反馈。

从 Issue 内容可推断项目当前关注点：
- 📋 **安全透明度**：建立正式的 CVE/GHSA 记录体系
- 🔒 **代码安全**：通过 AI 辅助工具强化代码审计覆盖面

---

## 8. 待处理积压

**积压提醒** ⚠️

| 类型 | 数量 | 说明 |
|------|------|------|
| Open Issues | 0 | 今日无新开 Issues |
| 待合并 PRs | 0 | 无积压 |
| 长期未响应 | 0 | 维护响应及时 |

**状态**：✅ 项目积压清理良好，无长期悬而未决的问题。

---

## 📌 总结

| 维度 | 今日状态 |
|------|----------|
| 代码活跃度 | ⬛ 低（无 PR） |
| 社区活跃度 | ⬛ 低（无用户反馈） |
| 安全维护 | 🟢 活跃（CVE/审计推进） |
| Bug 情况 | ✅ 无新增 |
| 版本发布 | 🚫 无 |
| 积压清理 | ✅ 及时 |

---

*📅 日报生成时间：2026-05-14 | 数据来源：GitHub qhkm/zeptoclaw*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报

**报告日期**：2026-05-14  
**项目名称**：EasyClaw (gaoyangz77/easyclaw)  
**分析师**：MiniMax-M2.1 AI 助手

---

## 1. 今日速览

今日（2026-05-14）EasyClaw 项目整体活跃度处于**极低水平**。过去24小时内未产生任何 Issue 或 Pull Request 交互记录，社区讨论窗口基本处于静默状态。唯一亮点是 **v1.8.13 版本正式发布**，为 RivonClaw 桌面应用引入了合作工作流增强和系统稳定性优化。鉴于缺乏用户反馈和社区讨论数据，建议持续观察明日活跃度趋势，以判断是短期波动还是长期放缓信号。

---

## 2. 版本发布

### ✅ v1.8.13 — RivonClaw v1.8.13

**发布时间**：2026-05-14  
**发布类型**：常规功能迭代（非破坏性更新）  
**GitHub Release 链接**：https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.13

#### 主要更新内容

| 类别 | 更新项 | 说明 |
|------|--------|------|
| **功能增强** | 合作方管理与提案审核工作流 | 新增 affiliate management 和 proposal review 功能，支持在桌面应用中直接处理创作者协作任务，降低跨平台操作成本 |
| **稳定性优化** | 认证恢复机制 | 改进云服务认证失败后的自动恢复逻辑，提升断网/弱网场景下的服务连续性 |
| **稳定性优化** | 设备分配校验 | 强化 device assignment checks，确保多设备环境下资源分配的准确性 |
| **稳定性优化** | 重启/配置行为安全性 | 优化重启和配置变更流程，降低误操作导致的服务中断风险 |

#### 迁移注意事项

- **兼容性**：无重大 API 变更，无需迁移配置
- **升级建议**：建议所有用户升级以获得更好的云服务稳定性

#### 健康度评估

> 该版本聚焦于**桌面应用协作效率**与**后端服务韧性**的双重提升，体现了项目从功能驱动向稳定性优先的成熟度演进。

---

## 3. 项目进展

过去24小时内 **无 Pull Request 合并或关闭记录**。

| 指标 | 数值 | 趋势 |
|------|------|------|
| 待合并 PR | 0 | → 持平 |
| 已合并/关闭 PR | 0 | → 持平 |

**分析**：PR 活动归零可能与版本发布后的代码冻结（code freeze）有关，需确认维护者是否处于发布周期中的休整阶段。

---

## 4. 社区热点

**今日无活跃讨论记录**。无高评论量 Issue、无高反应数 PR。

> ⚠️ **建议**：如项目有发布公告或功能调研需求，建议主动在 Discussion 区发起话题，激活社区参与度。

---

## 5. Bug 与稳定性

**今日无 Bug 报告记录**。

| 严重程度 | 数量 | 开放 Fix PR |
|----------|------|-------------|
| Critical | 0 | — |
| High | 0 | — |
| Medium | 0 | — |
| Low | 0 | — |

---

## 6. 功能请求与路线图信号

**今日无新功能请求记录**。

结合近期版本发布节奏（v1.8.13 聚焦协作与管理功能），下一版本可能延续以下方向：
- **协作工作流深化**：如审核通知、多人实时编辑支持
- **移动端对齐**：目前更新聚焦桌面应用，移动端功能补齐或为下阶段重点

---

## 7. 用户反馈摘要

**今日无用户反馈记录**。

近期 v1.8.13 的更新方向（协作管理、云服务稳定性）暗示用户核心诉求为：
- ✅ 降低创作者协作的跨平台操作成本
- ✅ 提升云服务在异常网络环境下的可用性

> 如需获取真实用户反馈，建议查阅 v1.8.13 Release 页面的用户评论。

---

## 8. 待处理积压

**今日无积压项更新**。

| 类型 | Issue/PR 标题 | 最后更新时间 | 等待时长 |
|------|---------------|--------------|----------|
| — | 无待处理积压记录 | — | — |

---

## 📊 项目健康度仪表盘

| 维度 | 评分 | 说明 |
|------|------|------|
| **代码活跃度** | 🟡 中低 | 仅版本发布，无代码贡献活动 |
| **社区活跃度** | 🔴 低 | 无 Issue/PR 互动，无讨论 |
| **版本节奏** | 🟢 正常 | 保持稳定迭代 |
| **Bug 控制** | 🟢 健康 | 无新增问题报告 |

---

**报告生成时间**：2026-05-14  
**数据来源**：GitHub API (gaoyangz77/easyclaw)  
**下期预告**：建议关注 v1.8.13 发布后 48-72 小时内的用户反馈与 Issue 创建情况。

</details>

<details>
<summary><strong>librefang</strong> — <a href="https://github.com/librefang/librefang">librefang/librefang</a></summary>

# LibreFang 项目动态日报

**报告日期：** 2026-05-14  
**项目仓库：** github.com/librefang/librefang  
**数据周期：** 过去 24 小时

---

## 一、今日速览

过去 24 小时内，LibreFang 项目保持极高的开发活跃度：共处理 **38 条 PR 更新**（其中 22 条待合并、16 条已合并/关闭）和 **26 条 Issue 更新**（18 条新开/活跃、8 条关闭）。项目当前处于多线并行开发的冲刺阶段，主要聚焦于 **Dashboard UI 增强**、**运行时性能优化**（Prompt Caching、双层压缩、文件去重）和 **Channel 适配器安全修复**。CI 状态显示主分支存在 Windows 测试回归问题，需关注。整体项目健康度良好，功能迭代节奏紧凑。

---

## 二、版本发布

**无新版本发布。** 项目当前版本为 v2026.5.12-beta.11，仍处于快速迭代的 Beta 阶段。

---

## 三、项目进展

今日合并/关闭的重要 PRs：

| PR 编号 | 状态 | 领域 | 摘要 | 链接 |
|---------|------|------|------|------|
| #5026 | CLOSED | CI/测试 | 修复 macOS `diagnose_stdin` 测试稳定性问题 | [#5026](https://github.com/librefang/librefang/pull/5026) |
| #5024 | CLOSED | CI/测试 | 解除 Windows 测试车道的阻塞（7 个断言/平台差异） | [#5024](https://github.com/librefang/librefang/pull/5024) |
| #4962 | CLOSED | Kernel/计量 | 修复令牌突发限制中缓存令牌重复计数问题（修复 #4943） | [#4962](https://github.com/librefang/librefang/pull/4962) |
| #5019 | OPEN | Channels | 实现 Telegram/Discord/Slack/Mattermost 的通道级代理配置 | [#5019](https://github.com/librefang/librefang/pull/5019) |
| #5021 | OPEN | Runtime | 为 Anthropic 及兼容 Provider 添加显式 Prompt Cache 断点策略 | [#5021](https://github.com/librefang/librefang/pull/5021) |
| #5022 | OPEN | Runtime | 实现双层压缩——Agent 循环前的网关安全网 | [#5022](https://github.com/librefang/librefang/pull/5022) |
| #5020 | OPEN | Runtime/Types | 支持 `agent.toml` 中每个 Agent 的独立压缩配置（修复 #4976） | [#5020](https://github.com/librefang/librefang/pull/5020) |
| #5016 | OPEN | Runtime | 实现文件读取去重——对未修改文件返回存根而非重新读取 | [#5016](https://github.com/librefang/librefang/pull/5016) |
| #5023 | OPEN | Kernel/Workflows | 支持工作流步骤引用已有的注册 Agent 而非生成临时子 Agent | [#5023](https://github.com/librefang/librefang/pull/5023) |
| #5007 | OPEN | Dashboard | 修复工作流节点右键删除缺失 pushHistory 和边缘级联问题 | [#5007](https://github.com/librefang/librefang/pull/5007) |
| #5013 | OPEN | Dashboard | Agent 详情页 Skills 标签显示技能描述（修复 #4925） | [#5013](https://github.com/librefang/librefang/pull/5013) |
| #5015 | OPEN | Dashboard | 工作流运行视图内联显示生成的图片 | [#5015](https://github.com/librefang/librefang/pull/5015) |

**今日核心推进方向：**
- 🚀 **运行时性能优化**：Prompt Caching、双层压缩、文件读取去重三大优化均已进入 PR 阶段，预计可显著降低 Token 消耗和上下文膨胀
- 🔧 **Dashboard 体验升级**：Agent 详情页多标签重构（Skills/MCP/Channels/Schedule）、工作流编辑器和运行视图多项改进
- 🛡️ **安全修复延续**：Channel 适配器中 `account_id()` 重写问题（#5009）修复 Approval 通知作用域泄漏

---

## 四、社区热点

按评论数排序的热门讨论：

**1. CI 持续故障问题** [#5018](https://github.com/librefang/librefang/issues/5018) | 评论 6 条  
- **问题**：PR #4999（音频自动转录功能）在 Windows 平台 CI 失败  
- **背景**：关联 PR #5024 已尝试修复部分 Windows 测试问题，但 #5018 指出仍存在失败任务  
- **诉求**：维护跨平台 CI 稳定性

**2. 工作流 Agent 引用增强** [#4834](https://github.com/librefang/librefang/issues/4834) | 评论 2 条  
- **问题**：工作流步骤目前生成临时子 Agent，无法利用已配置的注册 Agent 的 MCP Server、技能和预算  
- **进展**：对应 PR #5023 已提交，功能接近完成  
- **诉求**：让工作流执行真正遵循 Agent 配置的权限边界

**3. CI 取消事件** [#4973](https://github.com/librefang/librefang/issues/4973) | 评论 2 条  
- **问题**：版本更新 PR #4966 的 CI 被取消  
- **影响**：已解决，无需后续行动

**零评论但高优先级的 Feature Request：**
- [Per-channel 代理配置](#4795) — 社区强烈需求，Telegram 单独代理配置
- [Prompt Caching 策略](#4970) — Token 成本优化核心功能
- [双层压缩](#4972) — 解决长时间会话上下文膨胀
- [Per-agent 压缩配置](#4976) — 不同 Agent 类型需要差异化压缩策略

---

## 五、Bug 与稳定性

**严重程度：高 🔴**

| Issue | 问题 | 影响 | 状态 | Fix PR |
|-------|------|------|------|--------|
| [#5025](https://github.com/librefang/librefang/issues/5025) | **macOS launchd 环境下 vault 锁定**：`ioreg` 命令路径问题导致 v3 keyring 推导静默失败 | 使用 launchd 启动的 macOS 用户所有 vault 密钥丢失，需紧急修复 | OPEN，需修复 | 无 |
| [#5018](https://github.com/librefang/librefang/issues/5018) | **Windows CI 回归**：PR #4999 导致 Test / Windows 失败 | 主分支不可靠，影响所有 PR 的审查 | OPEN，关联 #5024 修复中 | 待合并 |
| [#5006](https://github.com/librefang/librefang/issues/5006) | **ANTHROPIC_AUTH_TOKEN 被剥离**：Gateway/代理用户 Claude Code CLI 无法使用认证 Token | 使用代理的企业用户受影响 | OPEN，已有 fix PR | #5006 自身 |

**严重程度：中 🟡**

| Issue | 问题 | 影响 | 状态 | Fix PR |
|-------|------|------|------|--------|
| [#5005](https://github.com/librefang/librefang/issues/5005) | **Telegram sendVoice MIME 类型问题**：OGG Vorbis 被误判为 Opus，导致 Bad Request | Telegram 语音消息发送失败 | OPEN，has-pr | #5005 自身 |
| [#5004](https://github.com/librefang/librefang/issues/5004) | **出站音频魔数嗅探**：依赖 MIME/文件名判断不准确 | 语音消息误路由 | OPEN，has-pr | #5004 自身 |
| [#5002](https://github.com/librefang/librefang/issues/5002) | **Approval 通知作用域泄漏**：default_agent=None 的适配器静默丢弃 Approval | 安全回归（beta.11） | OPEN，has-pr | #5002 自身 |
| [#5003](https://github.com/librefang/librefang/issues/5003) | **非 Telegram 多 Bot 适配器缺少 account_id() 重写** | 审批通知路由错误 | OPEN，has-pr | #5009 |

**严重程度：低 🟢**

| Issue | 问题 | 影响 | 状态 | Fix PR |
|-------|------|------|------|--------|
| [#4981](https://github.com/librefang/librefang/issues/4981) | **media_transcribe 拒绝读取 Kernel 下载的入站媒体** | Telegram 语音转录功能失效 | CLOSED，已修复 | #4975 |
| [#4975](https://github.com/librefang/librefang/issues/4975) | **Kernel 音频转录管道未连接到 Telegram 入站路径** | 自动转录功能未激活 | CLOSED，已修复 | #4975 |
| [#4991](https://github.com/librefang/librefang/issues/4991) | **Agent 重建返回 500 错误** | 重新创建已删除 Agent 失败 | CLOSED，已修复 | 相关 PR 已合并 |

**回归风险提示：** Issue #4985 揭示的 Approval 通知广播问题在 beta.11 中引入，已有多条关联 Fix PR 待合并，建议优先处理。

---

## 六、功能请求与路线图信号

以下功能需求已存在对应 PR，预计进入下一版本：

| 功能 | Issue | PR | 预计影响版本 | 链接 |
|------|-------|-----|------------|------|
| **Per-agent 通道白名单** | — | #4961 | Beta.12 | [PR #4961](https://github.com/librefang/librefang/pull/4961) |
| **Dashboard Agent 详情页重构**（Skills/MCP/Channels/Schedule 标签） | 多条 | #4963 | Beta.12 | [PR #4963](https://github.com/librefang/librefang/pull/4963) |
| **Prompt Cache 断点策略** | #4970 | #5021 | Beta.12 | [PR #5021](https://github.com/librefang/librefang/pull/5021) |
| **双层压缩安全网** | #4972 | #5022 | Beta.12 | [PR #5022](https://github.com/librefang/librefang/pull/5022) |
| **Per-agent 压缩配置** | #4976 | #5020 | Beta.12 | [PR #5020](https://github.com/librefang/librefang/pull/5020) |
| **文件读取去重** | #4971 | #5016 | Beta.12 | [PR #5016](https://github.com/librefang/librefang/pull/5016) |
| **工作流引用注册 Agent** | #4834 | #5023 | Beta.12 | [PR #5023](https://github.com/librefang/librefang/pull/5023) |
| **通道级代理配置** | #4795 | #5019 | Beta.12 | [PR #5019](https://github.com/librefang/librefang/pull/5019) |

**路线图信号分析：**
1. **性能优化是当前主线**：3 个独立 PR 聚焦 Token 成本和上下文管理，指向大规模部署场景下的成本控制需求
2. **Dashboard UX 全面升级**：Agent 管理和工作流编辑器的多项改进预示 UI 优先的开发策略
3. **多租户/企业功能萌芽**：通道代理配置、Per-agent 白名单反映企业级部署需求

**纯 Issue 阶段的需求**（尚未实现）：
- [#5025](https://github.com/librefang/librefang/issues/5025) macOS launchd PATH 修复（高优先级）
- [#5017](https://github.com/librefang/librefang/issues/5017) Agent 创建默认生成 TOML 文件
- [#5014](https://github.com/librefang/librefang/issues/5014) `agent.toml` 中声明式 `[[triggers]]`

---

## 七、用户反馈摘要

**来自 Issue 评论的真实反馈：**

**痛点 1：Agent 重建失败** ([#4991](https://github.com/librefang/librefang/issues/4991))  
> 用户 szdebian 反馈：`fresh installed by cargo, librefang v2026.5.12-beta.11` 重建已删除的 Agent 时返回 500 错误，日志显示 `Invalid workspace path`。影响新用户初次体验。

**痛点 2：Context 膨胀影响长期会话** ([#4972](https://github.com/librefang/librefang/issues/4972))  
> 用户反馈：隔夜 Telegram 消息累积、cron 任务输出堆积导致上下文窗口被提前耗尽。现有压缩机制在 Agent 循环内部，无法覆盖两次交互之间的膨胀。

**痛点 3：Channel 代理配置缺失** ([#4795](https://github.com/librefang/librefang/issues/4795))  
> 用户 myg133：需要为 Telegram 单独配置代理，以满足特定地区的合规或网络需求。目前只能设置全局代理，无法精细控制。

**痛点 4：Approval 通知泄露** ([#4985](https://github.com/librefang/librefang/issues/4985))  
> 用户 nevgenov 报告：自从 beta.11 引入 ApprovalRequested 事件后，审批请求被广播到所有通道适配器和所有通知接收者，没有按 `approval.agent_id` 过滤。安全敏感场景存在数据泄露风险。

**用户场景补充：**
- Telegram 语音消息处理存在 API 兼容性差异（#4959 已修复，#5005/5004 为后续修复）
- 使用 Claude Code CLI 的企业用户因代理环境变量问题无法正常工作（#5006）

---

## 八、待处理积压

以下 Issue 已开放超过 3 天且未分配或长时间无更新：

| Issue | 创建日期 | 类型 | 摘要 | 状态 | 备注 |
|-------|----------|------|------|------|------|
| [#4834](https://github.com/librefang/librefang/issues/4834) | 2026-05-09 | Enhancement | 工作流引用注册 Agent | OPEN，有 PR | PR #5023 已提交，待 Review |
| [#4795](https://github.com/librefang/librefang/issues/4795) | 2026-05-08 | Enhancement | 通道级代理配置 | OPEN，有 PR | PR #5019 已提交，待 Review |
| [#5005](https://github.com/librefang/librefang/issues/5005) | 2026-05-13 | Bug | Telegram OGG Opus/Vorbis 区分 | OPEN | Telegram API 兼容性修复 |
| [#5004](https://github.com/librefang/librefang/issues/5004) | 2026-05-13 | Bug | 音频出站魔数嗅探 | OPEN | 补充 #5005 |
| [#5002](https://github.com/librefang/librefang/issues/5002) | 2026-05-13 | Bug/Security | Approval 作用域泄漏 | OPEN | 关联 #4985 安全修复 |
| [#5003](https://github.com/librefang/librefang/issues/5003) | 2026-05-13 | Bug/Security | account_id() 重写缺失 | OPEN | 多 Bot 适配器支持 |
| [#5006](https://github.com/librefang/librefang/issues/5006) | 2026-05-13 | Bug | ANTHROPIC_AUTH_TOKEN 剥离 | OPEN | 代理用户受影响 |
| [#5017](https://github.com/librefang/librefang/issues/5017) | 2026-05-13 | Feature | Agent 创建生成 TOML 文件 | OPEN | 需分配处理 |
| [#5014](https://github.com/librefang/librefang/issues/5014) | 2026-05-13 | Feature | `[[triggers]]` 声明式配置 | OPEN | 需分配处理 |
| [#5025](https://github.com/librefang/librefang/issues/5025) | 2026-05-13 | Bug | macOS vault 锁定 | OPEN，needs-triage | **高优先级**，用户数据风险 |

**建议维护者关注：**
1. 🔴 **#5025** — macOS launchd 用户数据风险，应优先响应
2. 🔴 **#5002/#5003/#5006** — 安全相关 Fix PR 等待合并
3. 🟡 **#4834/#4795** — 功能已完成 PR，需及时 Review 合并

---

## 附：完整 Issue 和 PR 索引

| 类型 | 总数 | 新开/活跃 | 已关闭 |
|------|------|----------|--------|
| Issues | 26 | 18 | 8 |
| PRs | 38 | 22 待合并 | 16 已合并/关闭 |

**Dependabot 更新：**
- [#5028](https://github.com/librefang/librefang/pull/5028) — Web 依赖更新（7 个包）
- [#5027](https://github.com/librefang/librefang/pull/5027) — Dashboard 依赖更新（9 个包）

---

*报告生成时间：2026-05-

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# 📊 OpenFang 项目日报 | 2026-05-14

---

## 1. 今日速览

在过去24小时内，OpenFang 项目保持低至中等活跃度，共新增 **2 条 Issues**（均为新开启）和 **1 条待合并 PR**。值得注意的是，今日未产生任何版本发布或 Issue 闭环，项目的代码贡献管道略显停滞。今日的 Issue 活动涵盖了一个重要的 Bug 报告（模型 ID 前缀丢失问题）和一个长期维护的功能请求（QQ 频道集成）。PR #1196 引入了一个实用特性（RULES.md 全局配置），值得优先关注。总体来看，项目处于功能迭代阶段，建议维护者及时响应 Bug 报告以保障用户体验。

---

## 2. 版本发布

> **本日无新版本发布。**

---

## 3. 项目进展

### 🛠️ 待合并 PR

| PR 编号 | 标题 | 作者 | 状态 | 链接 |
|---------|------|------|------|------|
| **#1196** | `feat: tail-load global RULES.md into per-turn prompt` | @benhoverter | 待合并 | [🔗](https://github.com/RightNow-AI/openfang/pull/1196) |

**详细说明：**

该 PR 为 OpenFang 添加了一个实用的全局配置功能：支持在 `~/.openfang/RULES.md` 中定义工作区级别的指令规范，这些内容会被追加到每次 Agent 对话的 prompt 末尾（位置 14.5，恰好在召回记忆之前）。该功能允许运维人员统一设置输出格式、安全规则、格式化约定等，而无需在每次对话中手动配置或修改各 Agent 模板。

**预期价值：**
- ✅ 提升多 Agent 协作场景的一致性
- ✅ 降低运维人员的管理成本
- ✅ 为企业级部署提供更灵活的默认行为控制

**建议：** 该 PR 设计合理，功能边界清晰，建议维护者尽快审查合并。

---

## 4. 社区热点

### 🔥 活跃 Issue #978：Tencent QQ 频道功能请求

| 属性 | 详情 |
|------|------|
| **编号** | #978 |
| **类型** | Feature Request（功能请求） |
| **状态** | OPEN（已开启超过40天） |
| **作者** | @lightnings-lab |
| **创建日期** | 2026-04-03 |
| **最近更新** | 2026-05-13 |
| **评论数** | 3 |
| **👍 数** | 0 |
| **链接** | [🔗](https://github.com/RightNow-AI/openfang/issues/978) |

**摘要：**
该 Issue 请求为 OpenFang 添加腾讯 QQ 频道（QQ Bot）的集成支持。QQ 是中国最早的社交平台之一，至今仍拥有 **5.34 亿月活用户**，尤其在 Z 世代和游戏玩家群体中保持高活跃度。提案者提供了 QQ 官方 Bot API v2 文档链接，显示出一定的技术准备度。

**分析：**
- 该请求具有明确的用户基础支撑（中国市场）
- 3 条评论表明有一定讨论热度，但 👍 数为 0 显示社区反馈不积极
- 已持续开放 40+ 天，维护者尚未给出官方回应
- 若实现，将显著扩大 OpenFang 在中文用户群中的影响力

**诉求解读：** 用户希望 OpenFang 支持更多中国本土化通信平台，而不仅限于 Discord、Slack 等海外平台。

---

## 5. Bug 与稳定性

### 🐛 今日 Bug 报告

| 严重程度 | 编号 | 标题 | 状态 | 已有 Fix PR |
|---------|------|------|------|-------------|
| **高** ⚠️ | #1195 | OpenAI-compatible custom base_url strips `openai/` from Featherless model IDs | OPEN | ❌ 无 |

**Bug #1195 详情：**

**问题描述：**
当配置 Featherless 作为 OpenAI 兼容提供者时，OpenFang 在发送请求时会将用户配置的完整模型 ID `openai/gpt-oss-120b` 中的命名空间前缀 `openai/` 剥离，仅发送 `gpt-oss-120b` 给下游 API。而 Featherless 要求使用完整带命名空间的模型 ID，导致请求失败。

**影响范围：**
- 所有使用 OpenAI-compatible 自定义 base_url 的用户
- 依赖特定模型 ID 格式的下游服务提供商

**复现步骤：**
1. 配置 Featherless 作为 OpenAI-compatible provider
2. 设置模型 ID 为 `openai/gpt-oss-120b`
3. 发起请求
4. 观察到实际发送的模型名为 `gpt-oss-120b` 而非 `openai/gpt-oss-120b`

**错误示例：**
```
Error: Model...
```

**建议行动：**
1. 优先确认是哪个模块负责模型 ID 的解析和传递
2. 检查是否在传递过程中错误地执行了命名空间剥离逻辑
3. 添加相关单元测试防止回归

---

## 6. 功能请求与路线图信号

### 📋 今日功能请求汇总

| 编号 | 类型 | 标题 | 状态 | 链接 | 纳入路线图可能性 |
|------|------|------|------|------|-----------------|
| #978 | Enhancement | Add Tencent QQ Channel | OPEN | [🔗](https://github.com/RightNow-AI/openfang/issues/978) | 中等（需官方确认） |

**分析：**

QQ 频道集成请求具有以下考量：

| 因素 | 评估 |
|------|------|
| **用户价值** | 高（中国市场5.34亿月活） |
| **实现复杂度** | 中等（需对接QQ Bot API v2） |
| **与现有架构兼容性** | 良好（遵循现有 Channel 框架） |
| **维护成本** | 待评估（QQ API变更频率未知） |
| **社区支持** | 偏低（0 👍，仅3条评论） |

**路线图建议：**
- 若团队有中国业务拓展计划，建议标记为高优先级
- 可考虑作为社区贡献项目（由请求者主导实现）
- 需要评估 QQ 官方 API 的稳定性和合规要求

---

## 7. 用户反馈摘要

从今日活跃的 Issues 中，我们可以提炼出以下用户反馈：

### 用户痛点

1. **第三方 API 兼容性问题**
   - 用户在使用 Featherless 等 OpenAI-compatible 提供商时遇到模型 ID 解析问题
   - 问题直接影响生产环境使用

2. **平台覆盖不足**
   - 用户（特别是中文用户群体）期望更多本土化平台支持
   - 现有平台覆盖（推测以 Discord、Slack 等为主）无法满足所有用户需求

### 使用场景

- **AI Agent 部署**：用户试图将 OpenFang 与自托管或第三方 AI 服务集成
- **多渠道消息管理**：用户希望统一管理来自不同平台（QQ等）的消息

### 满意/不满意点

| 维度 | 用户反馈 |
|------|---------|
| **灵活性** | ✅ 赞赏 OpenFang 的模块化架构，便于扩展 |
| **文档质量** | ⚠️ Issue 中提供了详尽的背景信息，说明用户具备一定技术理解能力 |
| **响应时效** | ❌ Bug #1195 刚提出即当日，维护者尚未响应 |

---

## 8. 待处理积压

### ⏰ 长期未响应的 Issues

| 编号 | 类型 | 标题 | 创建日期 | 距今天数 | 评论数 | 链接 | 优先级建议 |
|------|------|------|----------|----------|--------|------|-----------|
| **#978** | Feature Request | Add Tencent QQ Channel | 2026-04-03 | **41 天** | 3 | [🔗](https://github.com/RightNow-AI/openfang/issues/978) | 中 |

**问题分析：**

Issue #978 自 2026 年 4 月 3 日创建以来，已开放超过 40 天，仍处于 OPEN 状态且无官方回应。这可能导致：
- 潜在贡献者因缺乏维护者反馈而放弃
- 其他有类似需求的用户无法了解项目立场
- 社区活跃度下降

**建议维护者行动：**
1. ✅ 对 Issue #978 给出官方回复（即使是"暂不计划"也比无响应好）
2. ✅ 若接受该功能请求，可标记为 `help wanted` 或 `enhancement`
3. ✅ 鼓励社区成员提交 RFC（Request for Comments）文档

---

## 📈 数据一览

| 指标 | 数值 |
|------|------|
| 过去24小时新增 Issues | 2 |
| 过去24小时关闭 Issues | 0 |
| 过去24小时新增 PRs | 1 |
| 过去24小时合并 PRs | 0 |
| 新版本发布 | 0 |
| 最活跃 Issue | #978 (3条评论) |
| 待处理高优先级 Bug | 1 (#1195) |

---

## 🎯 行动建议

| 序号 | 行动项 | 负责方 | 紧急程度 |
|------|--------|--------|----------|
| 1 | 审查并合并 PR #1196（RULES.md 功能） | 维护者 | 🟡 中 |
| 2 | 调查并修复 Bug #1195（模型 ID 前缀丢失） | 维护者/贡献者 | 🔴 高 |
| 3 | 回复 Issue #978（QQ 频道请求）表明立场 | 维护者 | 🟡 中 |
| 4 | 评估是否需要为 OpenAI-compatible provider 添加更多测试覆盖 | 维护者 | 🟡 中 |

---

> 📅 报告生成时间：2026-05-14  
> 📊 数据来源：GitHub (github.com/RightNow-AI/openfang)  
> ⚠️ 注意：报告中部分信息（如评论数、👍 数）基于提供数据，可能存在实时变动。

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*