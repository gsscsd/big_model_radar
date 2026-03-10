# OpenClaw 生态日报 2026-03-10

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-10 04:23 UTC

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

# OpenClaw 项目动态日报（2026-03-10）

---

## 1. 今日速览

OpenClaw 在过去24小时内保持极高活跃度，共处理 **500条 Issues**（新开/活跃216条，关闭284条）和 **500条 PRs**（待合并334条，已合并/关闭166条），显示出社区参与度与核心团队响应效率均处于高位。项目发布两个新版本（`v2026.3.8` 和 `v2026.3.8-beta.1`），重点增强了本地备份能力与 macOS 引导流程。尽管存在多个回归性 Bug 报告，但修复节奏紧凑，整体项目健康度良好。

---

## 2. 版本发布

### 🔖 v2026.3.8（正式版）
- **核心更新**：
  - 新增 CLI 命令 `openclaw backup create` 与 `openclaw backup verify`，支持创建和验证本地状态归档。
  - 支持细粒度备份选项：`--only-config`（仅配置）、`--no-include-workspace`（排除工作区）。
  - 实现备份 manifest 与 payload 的完整性校验，并在破坏性操作前提供备份引导提示。
  - macOS 资产复用自 `v2026.3.8-beta.1` 的测试构建。
- **意义**：提升用户数据安全性与灾难恢复能力，为后续“一键恢复”功能铺路。

### 🔖 v2026.3.8-beta.1（测试版）
- 包含上述备份功能完整实现（#40163），由社区贡献者 @shichangs 主导开发。
- 新增 macOS 引导流程中的远程网关验证机制（remote gate），增强安装可靠性。

> ✅ 无破坏性变更，建议所有用户升级至 `v2026.3.8` 以获取最新稳定性修复。

---

## 3. 项目进展

今日合并/关闭的关键 PR 显示项目在 **稳定性加固、插件扩展性、用户体验优化** 三方面同步推进：

| 类别 | 进展摘要 | 链接 |
|------|--------|------|
| **备份生态完善** | 新增备份恢复工作流设计（#41274），补全备份生命周期闭环 | [PR #41274](https://github.com/openclaw/openclaw/pull/41274) |
| **Windows 稳定性** | 修复 `gateway stop` 无法终止 node 进程问题（#41697） | [PR #41697](https://github.com/openclaw/openclaw/pull/41697) |
| **UI 体验优化** | 修复 Web UI 中编辑 WebSocket URL 时 token 被清空的问题（#41701） | [PR #41701](https://github.com/openclaw/openclaw/pull/41701) |
| **代码质量** | 修复 Markdown 渲染导致 WebChat 卡顿问题（#11890 关联修复进行中） | — |
| **插件架构** | 引入可插拔 Session Store Adapter 接口（#41724），为多租户/云存储做准备 | [PR #41724](https://github.com/openclaw/openclaw/pull/41724) |
| **安全修复** | 紧急修复 HIGH 级漏洞 V-001（#41725） | [PR #41725](https://github.com/openclaw/openclaw/pull/41725) |

> 📌 项目整体向“企业级可靠性”迈出关键一步，尤其在数据持久化与跨平台稳定性方面显著增强。

---

## 4. 社区热点

### 🔥 最活跃 Issue：国际化支持需求持续升温
- **#3460 [enhancement] Internationalization (i18n) & Localization Support**  
  - 评论数：95 | 👍：1 | 最后更新：2026-03-10  
  - 社区强烈呼吁支持多语言界面与提示，尤其中文、西班牙语用户群体增长明显。  
  - 维护者回应：“暂无带宽支持”，但已收到多个 PR 提案（如 #41727 修复中文链接）。  
  🔗 [查看 Issue](https://github.com/openclaw/openclaw/issues/3460)

### ⚠️ 高频 Bug：API 限流误报引发广泛焦虑
- **#32828 [Bug]: False 'API rate limit reached' on all models**  
  - 评论数：47 | 👍：6  
  - 用户反馈即使 API 正常，OpenClaw 仍全局报错，严重影响生产使用。  
  - 疑似与网关层速率检测逻辑误判有关，尚无官方修复时间表。  
  🔗 [查看 Issue](https://github.com/openclaw/openclaw/issues/32828)

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 状态 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 **Critical** | #34810：文件系统工具突然失效（无法读写/执行） | CLOSED | ✅ 已修复（关联 PR 未明示） |
| 🔴 **Critical** | #6413：网关进程虚拟内存泄漏（22GB+） | CLOSED | ✅ 已修复 |
| 🟠 **High** | #32828：全局误报 API 限流 | OPEN | ❌ 无 |
| 🟠 **High** | #40911：配置验证失败（“Unrecognized key”） | OPEN | ❌ 无 |
| 🟠 **High** | #41266：Linux 手动 cron 任务不执行 | OPEN | ❌ 无 |
| 🟡 **Medium** | #11890：WebChat 大会话卡顿（主线程阻塞） | OPEN | 🔄 优化中（#41684 性能 PR） |

> 💡 建议优先处理 #32828 与 #40911，二者均属回归性问题且影响面广。

---

## 6. 功能请求与路线图信号

| 功能方向 | 用户诉求 | 已有 PR 支持 | 纳入下一版可能性 |
|--------|--------|------------|----------------|
| **备份恢复** | 完整备份生命周期管理 | #41274（恢复工作流） | ⭐⭐⭐⭐☆ |
| **国际化** | 多语言界面支持 | #41727（中文链接修复） | ⭐⭐☆☆☆（需资源投入） |
| **Feishu 增强** | 话题绑定、图片预览 | #39765（ACP 话题）、#22608（图片预览） | ⭐⭐⭐☆☆ |
| **TTS 扩展** | 更多语音供应商 | #41252（MiniMax TTS） | ⭐⭐⭐⭐☆ |
| **Agent Apps** | 原生应用托管能力 | #41719（OpenClaw X 集成） | ⭐⭐⭐⭐⭐（战略级） |

> 📌 **OpenClaw X Agent Apps** 可能成为下一大版本核心亮点，标志着从“助手”向“平台”演进。

---

## 7. 用户反馈摘要

- **满意点**：
  - 备份功能上线获好评：“终于可以安心升级了”（#40163 评论）。
  - Feishu/钉钉集成体验流畅，企业用户增长显著。
- **痛点**：
  - Windows 用户频繁遭遇 PATH 继承问题（#39081）与 npm 升级失败（#6318）。
  - 新手引导不完善：“onboarding 后 agent 无法写文件”（#33225）。
  - 中文用户反馈文档翻译滞后，影响 adoption（#41727）。
- **典型场景**：
  > “我用 OpenClaw 管理跨团队代码审查，但最近 cron 任务不跑了，差点耽误发布。” —— @mgonto（#41266）

---

## 8. 待处理积压

| Issue/PR | 类型 | 积压时长 | 重要性 | 建议行动 |
|--------|------|--------|------|--------|
| #3460 | Issue | 41天 | High | 分配 i18n 专项负责人 |
| #22608 | Issue | 17天 | Medium | 联合飞书团队排查媒体协议 |
| #4156 | Issue | 102天 | Low | 评估 Opus 编码成本 |
| #26178 | PR | 13天 | Medium | 审核 memory flush 逻辑 |
| #32938 | PR | 6天 | High | 加速 sub2api 兼容性合并 |

> ⚠️ 特别关注 **#3460（i18n）** 与 **#22608（Feishu 图片）**，二者代表最大用户群体的核心体验瓶颈。

---

**报告生成时间**：2026-03-10  
**数据来源**：OpenClaw GitHub Repository（github.com/openclaw/openclaw）  
**分析师备注**：项目处于高速迭代期，建议加强回归测试自动化以应对频繁发布带来的稳定性风险。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-03-10）

---

## 1. 生态全景

2026年3月，个人 AI 助手开源生态呈现**高速迭代、功能趋同、企业级能力下沉**的态势。以 OpenClaw 为核心参照，多个项目（如 PicoClaw、CoPaw、Moltis）在通道集成、工具调用、备份恢复等基础能力上快速对齐，同时向多模态、自学习、分布式部署等方向差异化演进。社区普遍关注**稳定性、安全策略灵活性、跨平台兼容性**，反映出用户从“尝鲜试用”向“生产可用”迁移的核心诉求。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | PRs（待合并/已合并） | 新版本发布 | 健康度评估 |
|------|---------------------|------------------------|------------|------------|
| **OpenClaw** | 216 / 500 | 334 / 166 | ✅ v2026.3.8 & beta | ⭐⭐⭐⭐☆（4.5/5） |
| **NanoBot** | 24 | 57 / 12 | ❌ | ⭐⭐⭐⭐（4/5） |
| **Zeroclaw** | 21 / 26 | 41 / 9 | ❌ | ⭐⭐⭐⭐☆（4.5/5） |
| **PicoClaw** | 17 / 21 | 38 / 40 | ✅ v0.2.1 & nightly | ⭐⭐⭐⭐（4/5） |
| **NanoClaw** | 29 / 33 | 47 / 3 | ❌ | ⭐⭐⭐☆（3.5/5） |
| **IronClaw** | 31 / 43 | 48 / 2 | ❌ | ⭐⭐⭐☆（3.5/5） |
| **LobsterAI** | 12 | — / 3 | ❌ | ⭐⭐⭐（3/5） |
| **TinyClaw** | 2 | 7 / 19 | ❌ | ⭐⭐⭐⭐（4/5） |
| **Moltis** | 12 | — / 7 | ✅ v0.10.18 | ⭐⭐⭐⭐（4/5） |
| **CoPaw** | 38 / 50 | 24 / 26 | ✅ v0.0.6 & post1 | ⭐⭐⭐⭐（4/5） |
| **ZeptoClaw** | 2 | 3 / 0 | ❌ | ⭐⭐⭐（3/5） |
| **EasyClaw** | 1 / 3 | 0 / 0 | ✅ v1.6.3 | ⭐⭐⭐☆（3.5/5） |

> 注：健康度综合 Issue/PR 响应速度、Bug 修复节奏、版本发布频率及用户反馈稳定性评估。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **社区规模最大**（日处理 500+ Issues/PRs），响应效率最高，具备企业级可靠性（如备份系统、安全漏洞快速修复）；  
- **功能生态最完整**：率先实现备份生命周期管理、多通道（Feishu/钉钉/QQ/Telegram）、MCP 工具继承、Agent Apps 平台化演进；  
- **技术路线明确**：以“数据持久化 + 跨平台稳定性 + 企业集成”为核心，区别于轻量级或实验性项目。

**对比**：  
- 相较 NanoBot（<4k 行代码）、TinyClaw（模块化 monorepo）等轻量项目，OpenClaw 更重但更稳定；  
- 相较 CoPaw、PicoClaw 等后起之秀，OpenClaw 在**回归测试自动化**和**安全策略精细化**（如 `allowed_roots` 修复中）方面领先。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **备份与恢复机制** | OpenClaw、CoPaw、Moltis | 完整备份工作流、灾难恢复、配置持久化（#372 in CoPaw） |
| **多通道企业通信集成** | 所有项目 | Feishu/Lark（命名混乱 in Zeroclaw）、企业微信（PicoClaw #1210）、Matrix/Slack（Zeroclaw #3086）、Discord（TinyClaw #141） |
| **MCP 工具生态扩展** | OpenClaw、NanoBot、CoPaw、ZeptoClaw | 官方 MCP 支持、工具继承（#1803）、HTTP/SSE 传输（LobsterAI #351） |
| **安全与权限控制** | Zeroclaw、NanoClaw、IronClaw | `allowed_roots` 误判、凭证泄露（#880）、OAuth 令牌刷新（#730） |
| **跨平台兼容性** | 所有项目 | Windows 中文编码（CoPaw #1103）、macOS Gatekeeper（EasyClaw v1.6.3）、GLIBC 依赖（Zeroclaw #3070） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|--------|--------|----------------|
| **OpenClaw** | 企业级可靠性、备份恢复、多通道 | 企业团队、DevOps | 强状态管理、CLI-first、插件化 Session Store |
| **NanoBot** | 极简架构、内存安全、测试覆盖 | 开发者、研究者 | <4k 行 Python，原子化写入，敏感信息脱敏 |
| **PicoClaw** | 快速迭代、Telegram Forum Topics、夜间构建 | 极客用户、社区驱动 | Go 语言，自动化发布流水线，TUI 集成 |
| **CoPaw** | 桌面端体验、Docker 化、Mattermost 集成 | 非技术用户、中小企业 | Conda-pack 便携环境，Windows/macOS 安装包 |
| **Moltis** | 多模态（语音/TTS）、推理强度配置、OAuth 设备流 | 高级用户、远程办公者 | Rust 后端，动态提示词优化，Tailscale 支持 |
| **TinyClaw** | 多智能体协作、自定义 Provider、monorepo | 研究者、本地部署用户 | npm workspaces，Agent-to-Agent 通信，SGLang/Ollama 原生支持 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（高 Issue/PR 量，功能密集发布）：  
  **OpenClaw、CoPaw、PicoClaw、IronClaw** —— 日均处理 30+ Issues，周均发布新版本，适合前沿功能探索。
  
- **质量巩固阶段**（低 Issue 量，聚焦稳定性）：  
  **Moltis、TinyClaw、EasyClaw** —— 发布热修复版本（如 Moltis v0.10.18、EasyClaw v1.6.3），修复路径明确，适合生产环境采用。

- **早期探索阶段**（架构重构中，合并滞后）：  
  **NanoClaw、ZeptoClaw** —— 社区活跃但核心团队响应慢，存在技术债，适合技术调研。

---

## 7. 值得关注的趋势信号

1. **从“单代理”到“多代理协作”**：  
   TinyClaw（#163）、PicoClaw（#1278）、NanoClaw（#907 Epic）均推进子代理工具继承与 IPC 通信，预示**团队化 AI 工作流**将成为下一代标准。

2. **企业级部署成为刚需**：  
   容器化（Moltis #102）、离线依赖打包（LobsterAI #345）、桌面安装包（CoPaw v0.0.6）等需求集中爆发，**降低部署门槛**是 adoption 关键。

3. **安全策略需平衡灵活性与防护力**：  
   Zeroclaw #1478 暴露“过度安全导致功能不可用”矛盾，未来需**可配置策略引擎**（如基于路径/命令/上下文的动态授权）。

4. **MCP 协议扩展至 HTTP/SSE 传输**：  
   LobsterAI #351、CoPaw #676 显示 stdio 已不足，**远程 MCP 服务发现与鉴权**将成为生态互联核心。

> **对开发者的建议**：优先关注具备**稳定发布节奏 + 明确企业集成路径**的项目（如 OpenClaw、Moltis、CoPaw）；若追求轻量可控，可评估 TinyClaw 的 monorepo 架构或 NanoBot 的内存安全设计。

---  
**报告生成时间**：2026-03-10  
**数据来源**：各项目 GitHub 仓库公开动态

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-03-10）

---

## 1. 今日速览

NanoBot 社区活跃度持续高涨，过去24小时内共产生 **24条 Issues 更新** 和 **69条 PR 更新**，其中 PR 合并/关闭率达17.4%（12/69），显示出较高的开发响应效率。尽管无新版本发布，但核心功能迭代稳步推进，尤其在多通道支持、内存安全、测试覆盖和架构解耦方面取得实质性进展。社区对国际化文档、OAuth 认证和 MCP 工具集成的呼声显著上升，反映出项目正从“可用”向“易用”与“企业级”演进。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 `v0.1.4.post4`，源码级更新需通过 `pip install -e .` 手动升级（部分用户反馈升级失效问题见下文 Bug 部分）。

---

## 3. 项目进展

今日有 **12个 PR 被合并或关闭**，重点推进以下方向：

- **网关配置修复**：[#1785](https://github.com/HKUDS/nanobot/pull/1785) 和 [#1797](https://github.com/HKUDS/nanobot/pull/1797) 解决了 `nanobot gateway` 命令忽略 `config.gateway.port` 的问题，确保多实例部署时端口配置一致性（修复 #1736）。
- **内存安全增强**：[#1812](https://github.com/HKUDS/nanobot/pull/1812) 引入敏感信息脱敏机制，防止密钥等机密数据写入 `HISTORY.md`；[#1810](https://github.com/HKUDS/nanobot/pull/1810) 和 [#1805](https://github.com/HKUDS/nanobot/pull/1805) 分别强化了 `save_memory` 输入验证与原子化写入，提升长期记忆可靠性。
- **测试覆盖补全**：[#1808](https://github.com/HKUDS/nanobot/pull/1808) 为 Discord 通道添加 **37个新测试**，实现100%测试通过率，填补关键功能无测试的历史空白（对应 #1804）。
- **子代理工具继承**：[#1803](https://github.com/HKUDS/nanobot/pull/1803) 实现子代理自动继承父代理工具集，打破硬编码限制，支持 MCP 工具跨层级调用。

整体来看，项目在**稳定性、安全性和可扩展性**三大维度均有显著提升。

---

## 4. 社区热点

### 🔥 高讨论度 Issues

| Issue | 主题 | 评论数 | 点赞 | 分析 |
|------|------|--------|------|------|
| [#1617](https://github.com/HKUDS/nanobot/issues/1617) | 缺乏中文文档 | 6 | 1 | 用户明确指出“很多国外项目都有中文 README”，反映出海用户增长及本地化需求迫切，语气略带不满，需优先响应。 |
| [#140](https://github.com/HKUDS/nanobot/issues/140) | 支持 GitHub Copilot 提供商 | 9 | 4 | 开发者关注与主流 AI 编码工具集成，可能推动 OAuth 和模型路由架构升级。 |
| [#359](https://github.com/HKUDS/nanobot/issues/359) | 官方 MCP 工具支持 | 3 | 8 | **高点赞低评论**，表明社区对 Model Context Protocol 标准化集成有强烈期待，已有相关 PR（如 #1803）铺垫。 |

> 💡 **趋势判断**：国际化（i18n）、OAuth 认证、MCP 生态集成将成为下一阶段社区驱动的核心方向。

---

## 5. Bug 与稳定性

按严重程度排序：

| 问题 | 严重性 | 状态 | 关联 PR |
|------|--------|------|--------|
| [#1762](https://github.com/HKUDS/nanobot/issues/1762)：Bot 执行任务时无法中断 | 高 | 已关闭 | 无（需设计交互中断机制） |
| [#1781](https://github.com/HKUDS/nanobot/issues/1781)：全局锁 `_processing_lock` 阻塞 cron 任务 | 高 | 开放 | 无 |
| [#1777](https://github.com/HKUDS/nanobot/issues/1777)：v0.1.4.post3 请求 Render 接口报 403 | 中高 | 开放 | 疑似系统提示词触发反爬，需优化 |
| [#1765](https://github.com/HKUDS/nanobot/issues/1765)：源码升级后版本未更新 | 中 | 开放 | 可能为缓存或构建流程问题 |
| [#1692](https://github.com/HKUDS/nanobot/issues/1692)：Telegram Bot 回复两次 | 中 | 开放 | 用户附截图，Markdown 渲染逻辑冲突 |
| [#1396](https://github.com/HKUDS/nanobot/issues/1396)：QQ 通道偶发异常 | 中 | 开放 | 日志显示处理中断，稳定性待优化 |

> ⚠️ 注意：`_processing_lock` 导致的 cron 阻塞可能影响自动化场景，建议高优处理。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 已有 PR 支持？ | 纳入可能性 |
|--------|-----------|----------------|----------|
| Discord 通道支持 | [#123](https://github.com/HKUDS/nanobot/issues/123) | ✅ 已实现（#24），缺测试 | 高（测试已补） |
| MCP 工具官方支持 | [#359](https://github.com/HKUDS/nanobot/issues/359) | ✅ #1803 实现工具继承 | 极高 |
| 多模型聚合平台 + OAuth | [#397](https://github.com/HKUDS/nanobot/issues/397) | ❌ | 中（需架构扩展） |
| 中文文档 | [#1617](https://github.com/HKUDS/nanobot/issues/1617) | ❌ | 高（社区压力明显） |
| 长期记忆 SQLite 化 | [#1774](https://github.com/HKUDS/nanobot/issues/1774) | ❌ | 中（文本记忆确存混乱风险） |

> 📌 **预测**：下一版本（v0.1.5）很可能包含 **MCP 工具继承优化**、**中文 README** 和 **OAuth 登录增强**（见 #1799）。

---

## 7. 用户反馈摘要

- **满意点**：
  - 架构轻量（<4k 行代码）获开发者认可（#97 评论）；
  - Discord/Telegram/QQ 多通道支持逐步完善；
  - 内存管理改进（如原子写入）提升数据可靠性。

- **痛点**：
  - **文档缺失**：中文用户强烈要求本地化文档；
  - **升级体验差**：源码升级后版本未更新（#1765）；
  - **交互不人性化**：任务执行中无法中断（#1762）；
  - **第三方集成不稳定**：Render 接口 403、QQ 偶发崩溃。

- **典型场景**：
  > “我用 Render 部署自定义 AI 接口，升级后一直 403，删掉系统提示词才正常” —— @mzl980425  
  > “希望像人类一样能随时打断 Bot” —— @NGC13009

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|----------|------|------|
| Issue | [#97](https://github.com/HKUDS/nanobot/issues/97) | RFC: 核心架构改进（内存、安全、测试） | 2026-02-04 | 开放 | **超35天未响应**，含关键架构建议，需维护者 review |
| Issue | [#123](https://github.com/HKUDS/nanobot/issues/123) | Discord 通道支持 | 2026-02-04 | 开放 | 功能已实现但 Issue 未关闭，易造成混淆 |
| Issue | [#397](https://github.com/HKUDS/nanobot/issues/397) | 多模型平台 + OAuth 支持 | 2026-02-09 | 开放 | 企业级需求，长期未响应 |
| PR | [#1359](https://github.com/HKUDS/nanobot/pull/1359) | 修复 heartbeat 细节丢失 | 2026-03-01 | 开放 | **超8天未合并**，影响任务连续性 |

> 🔔 **维护者注意**：建议本周内关闭已实现功能的 Issue（如 #123），并评估 #97 架构提案的可行性。

---

**报告生成时间**：2026-03-10  
**数据来源**：[NanoBot GitHub Repository](https://github.com/HKUDS/nanobot)  
**分析师备注**：项目健康度良好（Issue/PR 响应快），但需加强文档建设与长期架构规划以支撑社区增长。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-03-10）

---

## 1. 今日速览

Zeroclaw 项目在2026年3月10日继续保持高活跃度，过去24小时内共产生 **26条 Issues 更新**（新开/活跃21条，关闭5条）和 **50条 PR 更新**（待合并41条，已合并/关闭9条），显示出社区贡献与核心开发团队的高效协作。尽管无新版本发布，但多个关键功能模块（如安全策略、多通道支持、工具集成）正通过活跃 PR 快速推进。用户反馈集中反映安全策略过于严格、GLIBC 兼容性、以及部分通道功能缺失等问题，凸显项目在“安全性”与“可用性”之间的平衡挑战。

---

## 2. 版本发布

**无新版本发布**。  
当前最新稳定版本仍为 v0.1.9（发布于2026-03-05），下一版本预计将包含大量安全修复、通道增强与新工具集成，已进入密集测试阶段。

---

## 3. 项目进展

今日有 **9个 PR 被合并或关闭**，重点进展包括：

- ✅ **#869（已关闭）**：重构 AWS Bedrock 提供程序，从 OpenAI 兼容模式切换为原生 SigV4 认证，解决长期无法使用 Bedrock 模型的问题（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/869)）。
- ✅ **#3089（已关闭）**：新增 `node-run` CLI 命令，支持 ZeroClaw 作为 OpenClaw 节点持久运行，并修复重连与协议解析问题，提升边缘部署能力（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/3089)）。
- ✅ **#2396 / #2399（已关闭）**：修复 OpenAI Codex 多模态配置忽略问题，以及 Telegram 回复中斜杠命令丢失问题，提升用户体验一致性（[链接1](https://github.com/zeroclaw-labs/zeroclaw/pull/2396) | [链接2](https://github.com/zeroclaw-labs/zeroclaw/pull/2399)）。
- ✅ **#2976（已关闭）**：标准化 GitHub 工作流配置，更新 `.gitignore`、`CODEOWNERS` 和 Dependabot 设置，统一贡献规范（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/2976)）。

此外，**#3085（开放中）** 正修复 `allowed_roots` 安全策略对绝对路径的误判问题，有望在下一版本解决用户文件访问受限痛点。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#1478（已关闭，32条评论）
> “你们很安全，安全到这个 bot 只能当个聊天机器人，其余一概拒绝执行！”  
> —— @lenson-git

该 Issue 集中反映了 **安全策略过度限制导致功能不可用** 的核心矛盾。尽管已关闭，但暴露出配置灵活性不足的问题，推动团队重新评估默认策略粒度。相关讨论促使 #3094（命令重定向被拒）和 #3082（`allowed_roots` 失效）等新 Issue 提出，形成连锁反馈。

### 📌 高关注度新 Issue：
- **#3070（GLIBC_2.39 缺失）**：影响老旧 Linux 发行版用户运行二进制文件，属 S0 级阻塞问题（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)）。
- **#3012（Feishu/Lark 通道命名混乱）**：核心集成未默认启用且文档缺失，阻碍企业用户接入（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3012)）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| **S0** | #3070 | 运行时依赖 GLIBC_2.39，导致旧系统无法启动 | ❌ 无（需构建系统调整） |
| **S1** | #2487 | `channel_ack_config` 函数 schema 无效，导致 LLM 调用失败 | ❌ 无 |
| **S1** | #2905 | 编译时 matrix-sdk 引发 Rust 查询溢出 | ❌ 无（依赖升级中） |
| **S1** | #3063 | Docker 构建失败，缺少 `data/` 目录拷贝 | ✅ #3085 相关修复中 |
| **S2** | #3088 | 通道模式下 token 成本统计失效 | ❌ 无 |
| **S2** | #3064 | 输出守卫误判 URL 路径为高熵令牌，错误脱敏 | ❌ 无 |

> 注：S0=数据丢失/安全风险，S1=工作流阻塞，S2=功能降级

---

## 6. 功能请求与路线图信号

以下功能请求已获得实质性开发响应，**极可能纳入下一版本**：

- **企业通信集成**：  
  - Wecom（企业微信）通道支持（#3090）  
  - Matrix 密码登录与 E2EE 恢复密钥（#2916）  
  - Slack 文件处理与线程回复修复（#3086）
- **工具生态扩展**：  
  - Microsoft 365 Graph API 集成（#3042）  
  - Google Workspace CLI 工具（#2987）  
  - MCSS 安全运维工具（#3027）
- **部署与兼容性**：  
  - Raspberry Pi Model B 支持（#3043）  
  - aarch64-musl 交叉编译支持（#3077）

此外，**动态节点发现**（#3093）和 **多语言文档**（#3087）表明项目正从“单机助手”向“分布式智能体网络”演进。

---

## 7. 用户反馈摘要

### 😠 主要不满：
- **安全策略僵化**：即使全开配置仍拒绝执行基础命令（如 `echo > file`），用户质疑“为何选择 ZeroClaw 而非手动操作”（#1478, #3094）。
- **兼容性差**：GLIBC 版本要求过高，Raspberry Pi 等边缘设备无法运行（#3070, #3043）。
- **文档与命名混乱**：Feishu 通道名为 `channel-lark` 且未默认启用，增加接入门槛（#3012）。

### ✅ 积极反馈：
- 多通道支持（Telegram、Slack、Matrix）稳定性获认可。
- Web 仪表盘新增 RTL 与多语言支持（#3076）受到国际化用户欢迎。
- Ollama + Qwen 工具调用回归问题被快速识别并上报（#3079），体现社区响应效率。

---

## 8. 待处理积压

以下重要 Issue 长期未获官方响应，建议维护者优先处理：

- **#1406（安全策略通配符失效）**：自2026-02-22提出，涉及核心安全模块，影响用户自定义策略（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/1406)）。
- **#2929（master vs main 分支混淆）**：文档与实际分支策略不一致，导致贡献者误操作（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2929)）。
- **#2964（Slack 通道发现与线程回复问题）**：v0.1.9 引入的回归，影响生产环境使用（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2964)）。

> 建议：建立 SLA 响应机制，对 S1+ 级 Issue 在 72 小时内标记或分配负责人。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4.5/5）  
高活跃度与丰富功能开发并存，但需加强稳定性保障与用户沟通透明度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-03-10）

---

## 1. 今日速览

PicoClaw 在 2026-03-10 继续保持高活跃度，社区贡献与开发节奏显著加快。过去24小时内共产生 **21 条 Issues 更新**（17 新开/活跃，4 已关闭）和 **78 条 PR 更新**（38 待合并，40 已合并/关闭），显示出强劲的开发动能。项目发布了 **3 个新版本**，包括稳定版 `v0.2.1` 和夜间构建 `v0.2.1-nightly.20260310.b89f6445`，标志着功能迭代进入成熟阶段。核心功能如多通道支持、工具调用稳定性、代理协作架构持续优化，社区对 Telegram Forum Topics、企业微信长链接、MCP 工具集成等需求响应积极。

---

## 2. 版本发布

### ✅ v0.2.1（稳定版）
- **发布日期**：2026-03-10  
- **关键更新**：
  - 新增 PicoClaw 与 PicoClaw-Launcher-TUI 的统一风格横幅（#1008）
  - 集成 Minimax 提供商支持（#1273）
  - 更新 `CONTRIBUTING.md` 提升贡献者体验
- **无破坏性变更**，建议所有用户升级以获得最新功能与文档改进。  
🔗 [Release v0.2.1](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1)

### 🌙 v0.2.1-nightly.20260310.b89f6445（夜间构建）
- 同步 GoRelease 流程并优化发布说明生成（#1285）
- 合并关键修复：禁止读取二进制文件的安全增强（#1107）
- ⚠️ 注意：此为自动化构建，可能存在不稳定行为，仅建议测试环境使用。  
🔗 [Nightly Release](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260310.b89f6445)

---

## 3. 项目进展

今日多个重要 PR 被合并或推进，显著提升系统能力：

- **#1255（已合并）**：修复 QQ 频道群组消息发送错误，改用 `PostGroupMessage` API，解决长期存在的 @提及无响应问题（#1221）。  
  🔗 [PR #1255](https://github.com/sipeed/picoclaw/pull/1255)

- **#1286（已合并）**：引入 `reaction` 工具支持 Telegram 表情回应，并清理占位消息与打字状态，改善交互体验。  
  🔗 [PR #1286](https://github.com/sipeed/picoclaw/pull/1286)

- **#1292（待合并）**：修复 OpenAI 兼容模式下工具调用参数解析失败问题（#1287），支持 JSON 对象格式参数，提升工具调用稳定性。  
  🔗 [PR #1292](https://github.com/sipeed/picoclaw/pull/1292)

- **#1291（新提交）**：为 Telegram 实现 Forum Topics 支持，实现话题级会话隔离，直接响应 #1270 高优先级需求。  
  🔗 [PR #1291](https://github.com/sipeed/picoclaw/pull/1291)

> 项目在多通道适配、工具系统健壮性、用户体验层面迈出关键步伐。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#1210 — 企业微信智能机器人配置咨询
- **评论数**：10 | **类型**：文档/问题  
- 用户 `@lslove10010` 询问如何配置企业微信 AI Bot，反映官方示例文档不够清晰。  
- **背后诉求**：企业用户急需开箱即用的私有化部署方案，尤其关注内网集成与身份验证流程。  
🔗 [Issue #1210](https://github.com/sipeed/picoclaw/issues/1210)

### 🚀 高关注度 PR：#1291 — Telegram Forum Topics 支持
- 直接回应 #1270（高优先级增强请求），实现话题级上下文隔离，对标 OpenClaw 功能。  
- 社区期待已久，有望成为下一个稳定版亮点。  
🔗 [PR #1291](https://github.com/sipeed/picoclaw/pull/1291)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|--------|------|------|------|
| 🔴 高 | #1287 | 工具调用失败：JSON 参数解析错误（`cannot unmarshal object into string`） | ✅ 已有修复 PR #1292 |
| 🔴 高 | #1221 | QQ 群组消息无法发送（错误使用 C2C API） | ✅ 已修复（PR #1255 合并） |
| 🟠 中 | #1281 | 飞书频道缺失 @用户与发送者 user_id | 🔄 待分析 |
| 🟠 中 | #1290 | Web Backend 启动网关时路径解析失败（`executable not found`） | 🔄 新报告，需排查 |
| 🟡 低 | #1269 | 天气技能返回错误数据 | 🔄 需验证数据源 |

> 工具调用与通道通信类 Bug 是当前稳定性焦点，核心问题已有修复路径。

---

## 6. 功能请求与路线图信号

以下功能请求已获得开发响应，极可能纳入下一版本：

- **Telegram Forum Topics 支持**（#1270 → PR #1291）：高优先级，开发已完成，待测试合并。
- **企业微信长链接模式**（#1276）：用户 `@williambao` 提出 WebSocket 对接需求，契合内网部署趋势，需评估开发资源。
- **Subagent 工具继承机制**（#1278）：多代理协作架构关键一步，与 #976/#915 团队功能形成互补。
- **Kimi Coding Provider 支持**（#1293）：扩展 Kimi 生态支持，填补 Code Plan 专用端点空白。

> 项目正从“单代理+基础通道”向“多代理+企业级通道+高级交互”演进。

---

## 7. 用户反馈摘要

- **满意点**：
  - 多通道支持（Telegram、QQ、飞书）覆盖主流场景，部署灵活。
  - 工具系统（如 `read_file`、`web_search`）功能强大，适合自动化任务。
  - 夜间构建提供快速功能体验通道。

- **痛点与不满**：
  - **文档不足**：企业微信、IRC 等高级配置缺乏中文指引（#1210、#1280）。
  - **二进制文件处理缺陷**：`read_file` 读取 PDF 产生乱码，需默认拦截（#1049）。
  - **OAuth 缓存问题**：凭证过期后无法重认证，影响 Kimi Code 等依赖服务（#1277 已关闭，但需验证修复）。
  - **会话隔离缺失**：Telegram 群组中不同话题混用上下文，影响专业性（#1270 即将解决）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

- **#41（Signal 通道集成）**：创建于 2026-02-11，隐私敏感用户强烈需求（👍 5），但无开发进展。  
  🔗 [Issue #41](https://github.com/sipeed/picoclaw/issues/41)

- **#63（会话内 Cronjob 管理）**：用户希望在 Telegram/Discord 中直接管理定时任务，提升交互闭环体验。  
  🔗 [Issue #63](https://github.com/sipeed/picoclaw/issues/63)

- **#699（AgentLoop 重构）**：代码质量与可维护性关键 PR，已开放超两周，需 review 推进。  
  🔗 [PR #699](https://github.com/sipeed/picoclaw/pull/699)

- **#1169（JSONL 会话持久化集成）**：性能优化重要一步，但尚未接入代理循环，存在技术债务。  
  🔗 [Issue #1169](https://github.com/sipeed/picoclaw/issues/1169)

> 建议设立“企业集成”与“架构优化”专项，集中处理积压高价值需求。

---

**总结**：PicoClaw 正处于快速成长期，社区驱动特征明显，功能迭代与稳定性修复并行推进。若能加强文档建设与长期架构规划，有望成为开源 AI 助手领域的标杆项目。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-03-10）

---

## 1. 今日速览

NanoClaw 在过去24小时内表现出极高的社区活跃度，共产生 **33条 Issues 更新** 和 **50条 PR 更新**，其中 Issues 新开/活跃29条、关闭4条，PR 待合并47条、仅3条完成合并或关闭，反映出大量功能开发与问题反馈集中涌现，但核心维护团队合并节奏相对滞后。项目整体处于快速迭代与功能扩展阶段，尤其在自学习系统、多运行时支持和安全加固方向形成明显技术动量。尽管无新版本发布，但底层架构演进活跃，社区贡献者参与度显著提升。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为持续开发状态，未触发正式版本标记。

---

## 3. 项目进展

过去24小时内仅有 **3个 PR 被合并或关闭**，进展有限，但反映出维护者正聚焦于关键路径清理：

- **#880（已关闭）**：修复了代理在终端输出中泄露密钥的严重安全问题，尽管原 Issue 被关闭，但未明确是否通过代码修复实现，需后续验证补丁落地情况。
- **#889（已关闭）**：解决了 Bash 工具输出中的孤立 Unicode 代理字符导致 JSONL 转录损坏并引发 HTTP 400 的问题，该修复对会话稳定性至关重要。
- **#859（已关闭）**：应维护者要求删除了特定 PR 及关联 Issue，属内部清理操作。

> 总体来看，核心团队合并节奏缓慢，大量高价值 PR（如 Podman 支持、Windows 兼容性、技能自创建等）仍处于“Blocked”状态，可能受限于测试覆盖或架构评审流程。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#80 — 支持除 Claude 外的其他 AI 运行时（OpenCode、Gemini 等）
- **评论数：21 | 👍：37**
- **链接**：https://github.com/qwibitai/nanoclaw/issues/80
- **分析**：用户强烈担忧 Anthropic 对第三方工具（如 OpenClaw）的封禁政策，呼吁 NanoClaw 实现运行时抽象层以支持 OpenCode、Codex、Gemini 等替代后端。此需求代表**平台可持续性**与**用户自主权**的核心诉求，已有多个衍生讨论指向插件化架构设计。

### 🚀 新兴技术动量：#907 — “nanoclaw-learning-system” Epic
- **链接**：https://github.com/qwibitai/nanoclaw/issues/907
- **分析**：由 @matt-carvalho 发起的系统级增强提案，包含四大自学习能力：
  - FTS5 会话搜索（#908）
  - 结构化记忆（USER.md/MEMORY.md，#910）
  - 技能自创建 IPC 机制（#911–#912）
  - 显式记忆命令
  该 Epic 及其子任务在一天内集中创建，表明社区正推动 NanoClaw 从“被动执行”向“主动学习”演进，是项目长期竞争力的关键信号。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| **Critical** | #880 | 代理明文输出密钥与凭证，违反安全策略 | ❌ 未确认修复 |
| **High** | #730 | `CLAUDE_CODE_OAUTH_TOKEN` 隔夜过期导致容器 401 失败 | ❌ 无 PR |
| **High** | #905 | 容器 runner 源码挂载仅在首次复制，后续更新失效 | ❌ 无 PR |
| **Medium** | #783 | `schedule_task` 缺乏幂等性，导致任务重复累积 | ❌ 无 PR |
| **Medium** | #889 | Unicode 代理字符污染 JSONL 引发 API 错误 | ✅ 已关闭（疑似修复） |
| **Medium** | #897–#898, #892–#896 | 多个技能分支 merge-forward 失败（涉及 `skill/compact`, `skill/ollama-tool`, `skill/apple-container`） | ❌ 需手动解决 |

> ⚠️ 多个高优先级 Bug 缺乏对应修复 PR，尤其是认证令牌刷新机制与任务幂等性问题，直接影响生产可用性。

---

## 6. 功能请求与路线图信号

以下功能请求具备高采纳潜力，且已有对应 PR 或明确技术路径：

| 功能 | Issue | 对应 PR | 状态 |
|------|------|--------|------|
| **Podman 容器支持** | — | #332 | Blocked，但需求明确 |
| **Windows 平台支持** | — | #415, #431 | 多 PR 推进中 |
| **技能自创建能力** | #911–#912 | #363（元技能） | 架构对齐中 |
| **结构化记忆系统** | #910 | — | 新提出，无 PR |
| **Gmail 安全管道** | #891 | — | 已关闭，但理念可复用 |
| **@提及支持（WhatsApp）** | — | #385 | Blocked |

> 📌 路线图信号清晰：**跨平台兼容性**（Windows/Linux/Podman）、**代理自主性**（学习+技能生成）、**多后端运行时**将成为下一阶段重点。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **安全焦虑突出**：多名用户报告凭证泄露（#880）、网络隔离不足（#460），要求默认启用最小权限原则。
- **运维痛点明显**：Oauth Token 过期（#730）、任务重复调度（#783）、容器挂载不更新（#905）等影响长期运行稳定性。
- **多平台需求强烈**：Windows/WSL2 用户多次反馈 setup 脚本兼容性问题（#407, #415, #445），阻碍 adoption。
- **开发者体验待提升**：技能分支 merge-forward 频繁失败（#897等）暴露 CI/CD 流程脆弱性，影响贡献者体验。

> 用户普遍认可 NanoClaw 的架构灵活性，但对“生产就绪度”存疑，尤其在安全、稳定性和跨平台支持方面。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先处理：

| 类型 | 编号 | 标题 | 创建时间 | 状态 |
|------|------|------|--------|------|
| Issue | #80 | 支持非 Claude 运行时 | 2026-02-04 | OPEN，高热度 |
| PR | #332 | Podman 支持 | 2026-02-20 | Blocked |
| PR | #363 | `/create-skill` 元技能 | 2026-02-21 | Blocked |
| Issue | #730 | OAuth Token 过期问题 | 2026-03-05 | OPEN，High Priority |
| Issue | #375 | WhatsApp 群组文件夹命名错误 | 2026-02-22 | OPEN，Low Priority但影响 UX |

> 🔔 建议：对 #80 启动架构设计讨论，对 #730 提供临时缓解方案（如 token 刷新提示），并评估 #332/#363 的合并路径以释放社区贡献价值。

--- 

**项目健康度评估**：⭐⭐⭐☆（3.5/5）  
**优势**：社区活跃、功能创新密集、架构扩展性强  
**风险**：合并瓶颈、安全漏洞未闭环、跨平台支持滞后  
**建议**：建立 PR 优先级机制，加强安全审计，推动学习系统 MVP 落地。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-03-10）

---

## 1. 今日速览

IronClaw 项目在 2026-03-10 继续保持高活跃度，过去24小时内共产生 **43 条 Issue 更新**（新开/活跃 31 条，关闭 12 条）和 **50 条 PR 更新**（待合并 48 条，仅 2 条已合并/关闭），反映出社区贡献热情高涨但核心团队合并节奏审慎。值得注意的是，**Staging CI 自动化流水线触发了两次主分支晋升尝试**（#807、#820），但因高严重性 Bug 被拦截，暴露出近期代码变更引入的稳定性风险。整体项目处于快速迭代与架构重构并行阶段，技术债清理与用户体验优化成为当前焦点。

---

## 2. 版本发布

**无新版本发布**。最近一次 Release 仍为历史版本，团队当前聚焦于 staging 分支的稳定性验证与关键缺陷修复，尚未推进正式版本上线。

---

## 3. 项目进展

今日仅有 **2 个 PR 被合并或关闭**，进展相对克制，体现团队对质量把控的重视：

- **#785 [CLOSED] Fix/lightweight action tool**  
  修复了轻量级动作无法执行工具调用、仅输出原始 XML 的问题（关联 Issue #696），提升了 Routines 功能的可用性。
- **#808 [CLOSED] Update OpenClaw feature parity March 9**  
  同步 OpenClaw 功能对标文档，为后续跨项目协同提供依据。

尽管合并数量少，但多个大型重构 PR（如 #800、#778、#758）仍在 review 中，预示下一阶段将迎来架构统一与模块化升级。

---

## 4. 社区热点

以下 Issues 引发高度关注，反映用户核心痛点：

- **[#674] UX: Setup Performance & Complexity Improvements**（3 评论）  
  用户指出当前 9 步交互式向导耗时约 10 分钟，严重阻碍新用户体验。此问题直指产品易用性瓶颈，亟需优化。
- **[#728] Compatibility with kimi-k2.5 model: Temperature limits & Missing reasoning_content**（3 评论，2 👍）  
  第三方模型兼容性问题凸显 IronClaw 对非标准 LLM 接口适配不足，影响多模型生态扩展。
- **[#602] No Telegram in default install**（4 评论，1 👍）  
  默认安装包缺失 Telegram 支持，暴露构建流程与分发机制不一致问题，损害开箱即用体验。

> 链接：[#674](https://github.com/nearai/ironclaw/issues/674) | [#728](https://github.com/nearai/ironclaw/issues/728) | [#602](https://github.com/nearai/ironclaw/issues/602)

---

## 5. Bug 与稳定性

今日 Staging CI 自动化检测出 **7 个 HIGH/CRITICAL 级 Bug**，全部关联 PR #807 的晋升尝试，表明近期代码变更存在重大风险：

| 严重程度 | Issue | 描述 | 是否已有 Fix |
|--------|------|------|-------------|
| **CRITICAL** | [#811] Error handling block unreachable | `.await?` 导致错误提前传播，使 `Err(msg)` 无法捕获 | ❌ 无 |
| **CRITICAL** | [#812] TOCTOU race in job status update | 无事务保护下 `get_job()` 与 `update_job_status()` 存在竞态 | ❌ 无 |
| **CRITICAL** | [#813] Non-transactional context updates | 元数据与 DB 更新非原子操作，可能引发状态不一致 | ❌ 无 |
| **HIGH** | [#814] Token budget not persisted to DB | `max_tokens` 未落库，预算控制失效 | ❌ 无 |
| **HIGH** | [#815] User metadata bypasses token budget | 用户可通过 job metadata 注入绕过限制 | ❌ 无 |
| **HIGH** | [#816] `select_tools()` LLM calls bypass tracking | 部分 LLM 调用未计入 token 预算 | ❌ 无 |
| **HIGH** | [#817] Unsafe env var mutation in wizard | 使用 `unsafe` 修改环境变量且无同步 | ❌ 无 |

此外，常规 Bug 如 [#738]（隧道端口绑定错误致 webhook 404）已有修复 PR #768 待合并。

> 链接：[#811](https://github.com/nearai/ironclaw/issues/811) | [#812](https://github.com/nearai/ironclaw/issues/812) | [#813](https://github.com/nearai/ironclaw/issues/813) | [#814](https://github.com/nearai/ironclaw/issues/814) | [#815](https://github.com/nearai/ironclaw/issues/815) | [#816](https://github.com/nearai/ironclaw/issues/816) | [#817](https://github.com/nearai/ironclaw/issues/817) | [#738](https://github.com/nearai/ironclaw/issues/738)

---

## 6. 功能请求与路线图信号

用户明确提出以下新功能需求，部分已有对应 PR 推进：

- **多模态支持**：[#766] 请求为 Chat API 添加图像+文本输入能力，契合主流 AI 助手趋势。
- **技能共享机制**：[#770] 提出“跨代理共享技能”需求，指向企业级协作场景，尚处早期讨论。
- **Slack 审批按钮**：[#796] 已实现 DM 中工具执行的 Approve/Deny 按钮，提升安全性与交互体验。
- **OpenClaw 改进采纳**：[#806] 维护者主动梳理 OpenClaw 近期改进，计划选择性集成，体现生态协同策略。

> 链接：[#766](https://github.com/nearai/ironclaw/issues/766) | [#770](https://github.com/nearai/ironclaw/issues/770) | [#796](https://github.com/nearai/ironclaw/pull/796) | [#806](https://github.com/nearai/ironclaw/issues/806)

---

## 7. 用户反馈摘要

从 Issue 评论提炼真实用户声音：

- **不满点**：
  - 安装流程复杂且文档与实际不符（#602、#674）；
  - 定价显示不一致（#780）：UI 显示 $3.77 vs 实际 $0.62，损害信任；
  - 移动端体验差：聊天输入框在移动浏览器中隐藏（#781）；
  - 缺乏撤销机制：误操作 `tool_remove` 导致数据永久丢失（#701）。

- **满意点**：
  - 对自动化 Staging CI 检测能力表示认可（#819 等），认为其有效拦截高风险变更；
  - 赞赏 Slack 审批按钮设计（#796），认为“显著提升安全边界”。

---

## 8. 待处理积压

以下重要 Issue 长期未获响应，建议维护者优先处理：

- **[#439] Registry update workflow fails, preventing WASM channel/tool installation**（自 2026-03-01 起，2 评论）  
  影响 WASM 扩展安装的核心工作流故障，阻碍生态扩展。
- **[#602] No Telegram in default install**（自 2026-03-06 起，4 评论）  
  基础功能缺失，损害新用户第一印象。
- **[#674] UX: Setup Performance & Complexity Improvements**（自 2026-03-07 起，3 评论）  
  用户体验瓶颈，直接影响转化率。

> 链接：[#439](https://github.com/nearai/ironclaw/issues/439) | [#602](https://github.com/nearai/ironclaw/issues/602) | [#674](https://github.com/nearai/ironclaw/issues/674)

---

**项目健康度评估**：  
✅ 社区活跃，贡献者多样（含新贡献者）  
⚠️ 合并节奏缓慢，存在显著技术债与稳定性风险  
🔧 架构重构进行中，长期利好可维护性  
🎯 用户体验与安全性成为当前核心优化方向

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-03-10）

---

## 1. 今日速览

LobsterAI 在过去24小时内社区活跃度显著上升，共产生 **12条新 Issue** 和 **3条已合并 PR**，无新版本发布。用户反馈集中暴露了 Bash 执行性能、字符串处理异常、IM 适配器功能缺失等关键体验问题，反映出当前版本在稳定性和跨平台兼容性方面存在明显短板。开发团队响应迅速，合并了多项优化 PR，尤其在 QQ 机器人消息展示和 OpenClaw 插件预装系统方面取得进展。整体项目处于高反馈、快迭代的修复优化阶段。

---

## 2. 版本发布

**无新版本发布**。  
当前最新 Release 仍为历史版本，建议用户关注后续热修复或 v1.1 版本更新以获取今日合并的改进。

---

## 3. 项目进展

今日共 **合并/关闭 3 个 Pull Request**，推动多项关键功能优化：

- **#346 [CLOSED]**：引入 OpenClaw 插件预安装系统，支持在 `package.json` 中声明插件依赖并实现开发/生产环境自动下载与打包；同时完成钉钉、飞书、QQ、企业微信四大官方 IM 通道配置的自动同步机制。  
  🔗 [PR #346](https://github.com/netease-youdao/LobsterAI/pull/346)  
  ✅ 意义：提升插件管理可维护性，降低多通道部署复杂度。

- **#355 [CLOSED]**：为聊天界面添加对话轮次上下翻页功能，改善长对话场景下的用户体验。  
  🔗 [PR #355](https://github.com/netease-youdao/LobsterAI/pull/355)  
  ✅ 意义：增强交互可用性，尤其适用于高频对话用户。

- **#348 [CLOSED]**：修复 QQ 机器人相关问题，包括关闭 SDK debug 日志输出（减少干扰）、优化图片消息解析逻辑、实现媒体文件本地下载与友好展示。  
  🔗 [PR #348](https://github.com/netease-youdao/LobsterAI/pull/348)  
  ✅ 意义：显著提升 QQ 适配器的稳定性和消息可读性。

> 📌 综合评估：今日合并 PR 聚焦于 **IM 集成优化** 与 **基础交互体验提升**，为后续多通道扩展打下架构基础。

---

## 4. 社区热点

以下 Issue 引发较高关注，反映核心用户痛点：

- **#344 [OPEN]**：用户强烈反馈 LobsterAI 在“中文+数字”字符串中**自动插入空格**，且无法通过提示纠正，严重影响文本输出准确性，称其“阻碍替代 OpenClaw”。  
  🔗 [Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344)（4 条评论）  
  💬 诉求：紧急修复文本后处理逻辑，避免非预期格式化。

- **#70 & #350 [OPEN]**：多名用户（macOS M4 环境）报告 **Bash 命令执行极慢**，甚至出现 `zsh:pwd:1: too many arguments` 错误，而相同命令在终端瞬时完成。  
  🔗 [Issue #70](https://github.com/netease-youdao/LobsterAI/issues/70) | [Issue #350](https://github.com/netease-youdao/LobsterAI/issues/350)  
  💬 诉求：优化命令执行调度机制，避免阻塞或参数解析错误。

- **#353 [OPEN]**：用户对比竞品（OpenClaw、Claude Agent），指出 LobsterAI **执行速度慢、环境依赖强**，建议聚焦“速度即体验”。  
  🔗 [Issue #353](https://github.com/netease-youdao/LobsterAI/issues/353)（1 👍）  
  💬 诉求：性能优化与轻量化设计。

> ⚠️ 上述问题已成为阻碍用户迁移的关键障碍，需优先处理。

---

## 5. Bug 与稳定性

按严重程度排序如下：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|-------------|
| 🔴 高 | #344 | 字符串中“中文+数字”自动加空格，无法禁用 | ❌ 无 |
| 🔴 高 | #70 / #350 | Bash 命令执行缓慢 + zsh 参数错误（macOS M4） | ❌ 无 |
| 🟠 中 | #352 | Claude Code 进程异常退出（Exit code 1） | ❌ 无 |
| 🟠 中 | #354 | 任务卡死在循环中，无法清除记忆上下文 | ❌ 无 |
| 🟡 低 | #347 | QQ 适配器无法回复文件/图片（已由 #348 部分修复） | ✅ 部分修复 |

> ❗ 建议维护者尽快对高优先级 Bug（#344、#70/#350）进行根因分析并发布热修。

---

## 6. 功能请求与路线图信号

用户提出以下新功能需求，部分已有技术铺垫：

- **自定义系统提示词与 SubAgent 编排**（#349）：允许用户定义主/子 Agent 的工作流与技能开关。  
  🔗 [Issue #349](https://github.com/netease-youdao/LobsterAI/issues/349)  
  📌 信号：迈向可定制化多 Agent 架构，符合 Agent 平台发展趋势。

- **远程 HTTP MCP 服务器支持（SSE 传输）**（#351）：当前无法加载 streamable_http 类型的 MCP 服务。  
  🔗 [Issue #351](https://github.com/netease-youdao/LobsterAI/issues/351)  
  📌 信号：需扩展 MCP 协议支持，提升生态兼容性。

- **本地依赖库预置（离线支持）**（#345）：离线环境下因缺少 Python/Node.js 依赖导致 Skill 不可用。  
  🔗 [Issue #345](https://github.com/netease-youdao/LobsterAI/issues/345)  
  📌 信号：需构建自包含运行时或提供依赖打包工具。

> ✅ 其中，**SubAgent 功能** 与今日合并的插件系统（#346）存在架构协同潜力，有望纳入下一版本规划。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼真实用户声音：

- **不满点**：
  - “执行速度比 OpenClaw 慢太多，体验差”（#353）
  - “字符串加空格这个 Bug 太致命了，根本没法用”（#344）
  - “Bash 命令卡几分钟，还不如我自己敲”（#350）
  - “离线环境迁移困难，很多 Skill 用不了”（#345）

- **满意点**：
  - “QQ 图片终于能正常显示了，感谢修复！”（隐含于 #348 上下文）
  - “翻页功能很实用，长对话不用一直滚屏”（#355 相关反馈）

- **典型使用场景**：
  - 开发者通过 Bash 执行本地脚本（期望低延迟）
  - 企业用户通过钉钉/飞书接收定时通知（需精准指定会话）
  - 多 Agent 协作任务（如“龙虾军团”构想，#320）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者优先关注：

- **#70 [OPEN]**（创建于 2026-02-24，距今 14 天）：Bash 执行性能问题，影响核心功能体验，已有复现案例。  
  🔗 [Issue #70](https://github.com/netease-youdao/LobsterAI/issues/70)

- **#260 [OPEN]**（创建于 2026-03-04，距今 6 天）：定时任务无法指定具体 IM 对话框，限制企业自动化流程精度。  
  🔗 [Issue #260](https://github.com/netease-youdao/LobsterAI/issues/260)

- **#320 [OPEN]**（创建于 2026-03-06，距今 4 天）：“龙虾军团”多 Agent 本地运行需求，代表高级用户扩展诉求。  
  🔗 [Issue #320](https://github.com/netease-youdao/LobsterAI/issues/320)

> 🛎️ **维护者提醒**：上述积压问题涉及核心功能稳定性与高级用例支持，建议纳入本周开发排期。

--- 

**报告生成时间**：2026-03-10  
**数据来源**：LobsterAI GitHub Repository（netease-youdao/LobsterAI）

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报（2026-03-10）

---

## 1. 今日速览

TinyClaw 在过去24小时内展现出极高的开发活跃度，共处理 **26条 Pull Requests**（其中19条已合并/关闭，7条待合并）和 **2条 Issues**（全部已关闭），无新版本发布。核心贡献者 @jlia0 主导了多项架构重构与用户体验优化，包括 monorepo 迁移、CLI 现代化、任务自动触发等关键改进。项目整体处于快速迭代阶段，技术债务清理与功能增强并行推进，社区响应效率高，问题闭环迅速。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 v0.0.9，但多个重大重构（如 monorepo 结构、SQLite 队列替换 Redis）已在 PR 中完成，预计将在下一个 minor 版本中集中发布。

---

## 3. 项目进展

今日合并/关闭的 PR 显著推进了项目架构现代化与核心功能增强：

- **#186 [OPEN]**: 将单体代码库重构为基于 npm workspaces 的 monorepo，拆分为 `@tinyclaw/core`、`@tinyclaw/teams` 等5个独立包，提升模块化与可维护性（[链接](https://github.com/TinyAGI/tinyclaw/pull/186)）
- **#178 [CLOSED]**: 新增自定义 AI 提供商支持（兼容 OpenAI/Anthropic API），并内置 auth token 存储，消除对外部 CLI 认证的依赖（[链接](https://github.com/TinyAGI/tinyclaw/pull/178)）
- **#163 [CLOSED]**: 实现真正的多智能体团队协作——支持并行处理、Agent-to-Agent 通信与请求追踪，彻底改变“轮流响应”为“协同工作”模式（[链接](https://github.com/TinyAGI/tinyclaw/pull/163)）
- **#177 [CLOSED]**: 新增聊天室 REST API 与实时 CLI 查看器，用户可直接查看和发送团队消息（[链接](https://github.com/TinyAGI/tinyclaw/pull/177)）
- **#179 [CLOSED]**: 修复 macOS 上 `tinyclaw start` 进程立即退出的问题，通过增加 tmux pane 初始化延迟解决 shell 启动竞争条件（[链接](https://github.com/TinyAGI/tinyclaw/pull/179)）

> 项目整体向“模块化、可扩展、生产就绪”迈出关键一步，技术栈趋于稳定。

---

## 4. 社区热点

尽管多数 PR 评论数为0（符合开源项目常态），但以下 PR 体现了社区对核心能力的强烈关注：

- **#141 [OPEN] feat: Discord guild channels, slash commands, and agent handoff**  
  该 PR 提出深度集成 Discord 服务器频道绑定与斜杠命令支持，允许消息自动路由至指定 Agent，无需 `@` 提及。这反映了用户对 **多平台无缝接入** 和 **企业级聊天集成** 的迫切需求（[链接](https://github.com/TinyAGI/tinyclaw/pull/141)）

- **#182 [OPEN] Auto-trigger agent when task moves to in progress**  
  用户期望更流畅的 Kanban 工作流体验，此 PR 消除手动“Send”按钮步骤，实现拖拽即触发，体现对 **自动化与 UX 简化** 的高度关注（[链接](https://github.com/TinyAGI/tinyclaw/pull/182)）

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|--------|--------|------|------|
| 高 | #156 [CLOSED] | macOS 上 `tinyclaw start` 后所有进程立即退出（zsh 初始化竞争） | ✅ 已修复（#179） |
| 中 | #164 [CLOSED] | v0.0.9 安装脚本错误安装 v0.0.8 | ✅ 已关闭（未提修复 PR，可能为文档/脚本同步问题） |

> 关键稳定性问题已闭环，macOS 兼容性显著提升。

---

## 6. 功能请求与路线图信号

结合用户 Issues 与活跃 PR，以下功能极可能被纳入下一版本：

- **多通道统一抽象层**：#172 提出模块化通道设计并引入 TUI 示例，预示未来将支持更多通信协议（如 Slack、Matrix）（[链接](https://github.com/TinyAGI/tinyclaw/pull/172)）
- **自托管模型原生支持**：#166 已实现 custom provider 对接 SGLang/Ollama/vLLM，满足隐私敏感用户本地部署需求（[链接](https://github.com/TinyAGI/tinyclaw/pull/166)）
- **浏览器自动化增强**：#36 添加 Chrome 配置选项，为后续网页抓取、RPA 场景铺路（[链接](https://github.com/TinyAGI/tinyclaw/pull/36)）

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **痛点**：  
  - macOS 用户遭遇启动即崩溃（#156），影响基础可用性  
  - 安装脚本版本不一致（#164）导致升级困惑  

- **满意点**：  
  - 多智能体协作能力（#163）被社区称为“game-changer”，实现真正团队化 AI 工作流  
  - 自定义提供商支持（#178/#166）获开发者好评，“终于能跑本地 Qwen 了”

- **使用场景**：  
  - 企业用户尝试通过 Discord/Telegram 集成构建客服机器人  
  - 研究者利用 custom provider 在 AMD MI300X 上部署 SGLang 推理服务

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 提醒 |
|------|------|------|--------|------|------|
| PR | #141 | Discord guild channels, slash commands... | 2026-02-26 | OPEN | 高价值集成，建议优先 review |
| PR | #172 | Modularized channels and TUI example | 2026-03-09 | OPEN | 架构演进关键一步，需评估兼容性 |
| PR | #186 | refactor: split monolith into npm workspaces... | 2026-03-09 | OPEN | 重大重构，需协调依赖与 CI 适配 |

> 建议维护团队本周内对上述3个 OPEN PR 进行技术评审，避免长期悬置影响贡献者积极性。

---  
**报告生成时间**: 2026-03-10  
**数据来源**: GitHub TinyAGI/tinyclaw 公开仓库

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-03-10）

---

## 1. 今日速览

Moltis 项目在过去24小时内保持高活跃度，共处理 **12条 Issues** 和 **9条 Pull Requests**，并完成 **1个新版本发布（v0.10.18）**。社区贡献者积极提交 Bug 报告与功能增强建议，核心团队响应迅速，7个 PR 被合并或关闭，涵盖模型支持、OAuth 流程、UI 修复等关键模块。整体项目健康度良好，开发节奏稳健，用户反馈驱动的问题修复占比显著。

---

## 2. 版本发布

### 🔖 v0.10.18 正式发布

本次发布聚焦于 **稳定性修复与用户体验优化**，未引入破坏性变更，建议所有用户升级。

**主要更新内容：**
- ✅ 修复 Telegram 语音消息在 TTS 禁用时重复回复问题（#371 → #373）
- ✅ 解决通过 Tailscale 访问时的无限重定向循环（#350 → #356）
- ✅ 支持删除 cron 定时会话（#342 → #357）
- ✅ 增强 OpenAI Codex 模型发现机制，恢复对 `gpt-5.4` 等新版模型的支持（#354 → #359）
- ✅ 为支持“扩展思考”的模型（如 Claude Opus 4.5）添加推理强度配置选项（#347 → #363）
- ✅ 优化运行时提示词：当沙箱或节点不可用时，自动剔除相关误导性信息（#360 → #362）
- ✅ 改进 OAuth 流程，支持手动粘贴回调 URL 作为设备流备用方案（#365）

> 📌 **迁移说明**：无需额外操作，配置文件兼容。若使用 GitHub Copilot 企业版，系统将自动通过代理端点路由 API 请求（#358）。

[查看 Release v0.10.18](https://github.com/moltis-org/moltis/releases/tag/v0.10.18)

---

## 3. 项目进展

今日共 **7个 PR 被合并/关闭**，推动多项关键功能落地：

| PR | 类型 | 进展摘要 |
|----|------|--------|
| [#373](https://github.com/moltis-org/moltis/pull/373) | 🐛 Bug Fix | 修复 Telegram 语音输入+TTS关闭导致的双重回复问题 |
| [#356](https://github.com/moltis-org/moltis/pull/356) | 🌐 Web Fix | 打破 Tailscale 环境下的重定向死循环 |
| [#357](https://github.com/moltis-org/moltis/pull/357) | 🗑️ UI Enhancement | 允许从侧边栏删除 cron 会话 |
| [#363](https://github.com/moltis-org/moltis/pull/363) | 🚀 Feature | 为支持扩展思考的模型添加“推理强度”选择（高/中/低） |
| [#362](https://github.com/moltis-org/moltis/pull/362) | 🧠 Prompt Optimization | 动态精简运行时提示词，避免 LLM 幻觉 |
| [#359](https://github.com/moltis-org/moltis/pull/359) | 🔌 Provider Fix | 修复 Codex 模型发现不全问题，提升兼容性 |
| [#365](https://github.com/moltis-org/moltis/pull/365) | 🔐 Auth Enhancement | 支持手动输入 OAuth 回调 URL，提升设备流容错性 |

> 项目整体向 **更稳定、更智能、更易用** 的方向迈进，尤其在多模态交互（语音/TTS）、远程访问体验和模型管理能力上取得实质性进展。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#102 Docker-in-Docker 沙箱挂载路径错误](https://github.com/moltis-org/moltis/issues/102)（👍 4 反应，2 评论）

**核心诉求**：当 Moltis 运行在 Docker 容器内并启用 Docker-in-Docker 沙箱时，工作区挂载使用的是容器内部路径而非宿主机路径，导致沙箱内工作区为空，严重影响开发/测试场景下的文件持久化能力。

**背景分析**：该问题暴露了容器化部署环境下路径映射逻辑的缺陷，影响 DevOps 和 CI/CD 集成用户。尽管已存在近一个月，但尚未有对应 PR，可能涉及底层 `crates/tools/src/sandbox.rs` 的重构，技术复杂度较高。

> 💡 建议维护者优先评估此问题，因其直接影响容器化用户的可用性。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重性 | 状态 | 关联 PR |
|------|--------|------|--------|
| [#274 WhatsApp 账户重启后 sled 存储反序列化失败](https://github.com/moltis-org/moltis/issues/274) | ⚠️ 高（数据损坏风险） | 🟡 未修复 | — |
| [#376 Settings UI 将主代理身份写入错误路径](https://github.com/moltis-org/moltis/issues/376) | ⚠️ 中（配置丢失） | 🟡 未修复 | — |
| [#375 Google 模型函数调用缺失 thought_signature](https://github.com/moltis-org/moltis/issues/375) | ⚠️ 中（功能异常） | 🟡 未修复 | — |
| [#371 Telegram 语音消息重复回复（TTS 关闭）](https://github.com/moltis-org/moltis/issues/371) | 🟢 低（UI 体验） | ✅ 已修复 | #373 |
| [#350 Tailscale 下无限重定向](https://github.com/moltis-org/moltis/issues/350) | 🟢 低（访问阻断） | ✅ 已修复 | #356 |

> ⚠️ 需重点关注 **#274**：sled 数据库反序列化错误可能导致用户数据无法恢复，建议尽快排查存储层兼容性。

---

## 6. 功能请求与路线图信号

### 近期可能被纳入的功能：

| Issue | 类型 | 可能性 | 依据 |
|------|------|--------|------|
| [#252 添加 Podman 作为容器运行时支持](https://github.com/moltis-org/moltis/issues/252) | 🚀 基础设施 | ⭐⭐⭐ | 社区明确需求，Docker 替代方案趋势明显，已有5条评论讨论 |
| [#345 集成 SearXNG 实现 Web 搜索](https://github.com/moltis-org/moltis/issues/345) | 🌐 能力扩展 | ⭐⭐ | 符合 AI 助手“联网检索”方向，但需评估性能与隐私影响 |
| [#377 为 cron 任务添加 delay_ms 相对时间支持](https://github.com/moltis-org/moltis/pull/377) | ⏱️ 调度优化 | ⭐⭐⭐⭐ | PR 已提交，解决 LLM 时间计算偏差痛点，逻辑清晰 |

> 📌 **预测**：`Podman 支持` 和 `cron delay_ms` 极有可能在 v0.11 中实现，体现项目对 **部署灵活性** 和 **调度可靠性** 的重视。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼关键用户声音：

- **满意点**：
  - “终于可以删掉那些卡住的 cron 会话了！” —— 用户对 #357 修复表示高度认可
  - “Tailscale 访问现在正常了，远程办公体验大幅提升” —— 反映 #356 的实际价值

- **痛点**：
  - “WhatsApp 重启后就崩了，丢了整个对话历史” —— #274 用户强调数据持久化重要性
  - “在 Docker 里跑的时候，沙箱根本没法用，文件全丢了” —— #102 用户呼吁容器化支持改进
  - “Google 模型调用函数时总报错，怀疑是签名问题” —— #375 暗示多模型兼容性仍需打磨

- **使用场景**：
  - 企业用户通过 Tailscale 远程访问 Moltis 进行日常协作
  - 开发者使用 Docker 部署 Moltis 并依赖沙箱执行代码
  - 高级用户配置 cron 任务实现自动化提醒与报告生成

---

## 8. 待处理积压

以下重要 Issue 长期未响应，建议维护者介入：

| Issue | 创建时间 | 类型 | 积压原因分析 |
|------|--------|------|------------|
| [#102 Docker-in-Docker 沙箱路径错误](https://github.com/moltis-org/moltis/issues/102) | 2026-02-13 | 🐛 Bug | 涉及底层沙箱架构，需跨模块协作，技术难度高 |
| [#274 WhatsApp sled 反序列化错误](https://github.com/moltis-org/moltis/issues/274) | 2026-03-01 | 💥 数据损坏 | 存储层问题敏感，需谨慎测试，暂无 assignee |

> 🔔 **行动建议**：为 #102 和 #274 分配负责人，或发起社区讨论征集解决方案，避免关键问题长期悬置影响项目声誉。

--- 

📊 **总结**：Moltis 在 v0.10.18 中展现了强大的迭代能力，成功修复了多个高影响问题。未来应重点关注 **容器化支持** 与 **数据存储稳定性**，以巩固其在个人 AI 助手领域的竞争力。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-03-10）

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度显著上升：共处理 **50条 Issues**（新开/活跃38条，关闭12条）和 **50条 PRs**（合并/关闭26条，待合并24条），并发布 **2个新版本**（v0.0.6 与 v0.0.6.post1）。项目整体处于高速迭代状态，核心功能持续完善，桌面端支持、MCP集成、多通道稳定性成为当前焦点。社区贡献者积极参与，首次贡献者（first-time-contributor）占比高，生态扩展势头强劲。

---

## 2. 版本发布

### 🔹 v0.0.6.post1（热修复版本）
- **更新内容**：
  - 版本号升级至 `0.0.6.post1`（[#1067](https://github.com/agentscope-ai/CoPaw/pull/1067)）
  - 更新官网路线图文档，明确与 OpenClaw 的对比定位（[#1062](https://github.com/agentscope-ai/CoPaw/pull/1062)）
  - 新增基于 Docker 的 CI 流程支持（[#1068](https://github.com/agentscope-ai/CoPaw/pull/1068)）
- **影响范围**：无破坏性变更，主要为文档与构建流程优化。

### 🔹 v0.0.6（功能增强版本）
- **核心新增**：
  - **原生桌面安装包支持**：提供 Windows 一键安装程序与 macOS 独立 `.app` 包，基于 `conda-pack` 实现便携式 Python 环境，并通过 GitHub Actions 自动化发布流程（[#843](https://github.com/agentscope-ai/CoPaw/pull/843)）
- **意义**：极大降低非技术用户使用门槛，推动 CoPaw 向“开箱即用”产品演进。

---

## 3. 项目进展

今日共 **合并/关闭 26 个 PR**，重点进展包括：

| 类别 | 关键 PR | 说明 |
|------|--------|------|
| **功能增强** | [#1112](https://github.com/agentscope-ai/CoPaw/pull/1112) | 工具管理界面支持“全部启用/禁用”功能，提升操作效率 |
| | [#1109](https://github.com/agentscope-ai/CoPaw/pull/1109) | 新增 OpenRouter 提供商支持，自动注入 `HTTP-Referer` 与 `X-Title` 头 |
| | [#1071](https://github.com/agentscope-ai/CoPaw/pull/1071) | 引入 Mattermost 频道集成，扩展企业通信场景 |
| **Bug 修复** | [#1033](https://github.com/agentscope-ai/CoPaw/pull/1033) | 修复新会话中用户消息因竞态条件消失的问题 |
| | [#1039](https://github.com/agentscope-ai/CoPaw/pull/1039) | 钉钉鉴权失败时优雅关闭通道，避免持续报错（Fixes #1027） |
| | [#1103](https://github.com/agentscope-ai/CoPaw/pull/1103) | 补全 Windows 下 `execute_shell_command` 中文编码修复 |
| **架构优化** | [#1024](https://github.com/agentscope-ai/CoPaw/pull/1024) | 控制台设置页导航时保留聊天状态，防止对话中断 |
| | [#935](https://github.com/agentscope-ai/CoPaw/pull/935) | 重构前端构建流程，消除手动复制步骤 |

> 项目整体向 **多平台支持、企业级集成、用户体验一致性** 迈出关键步伐。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥ 5）

| Issue | 主题 | 诉求分析 |
|------|------|--------|
| [#679](https://github.com/agentscope-ai/CoPaw/issues/679) | 本地部署后 input token 超限报错 | 用户期望动态截断或分块机制，而非硬性中断 |
| [#1022](https://github.com/agentscope-ai/CoPaw/issues/1022) | OpenAI-compatible 模型 JSON 反序列化失败 | `content` 字段为 list 而非 string，需兼容 OpenAI 多模态格式 |
| [#805](https://github.com/agentscope-ai/CoPaw/issues/805) | `write_file` 工具调用失败 | 参数传递异常，疑似技能注册或调用链路缺陷 |
| [#372](https://github.com/agentscope-ai/CoPaw/issues/372) | 配置被自动重写导致 LLM 访问失败 | 配置文件持久化机制存在竞态或覆盖逻辑错误 |
| [#768](https://github.com/agentscope-ai/CoPaw/issues/768) | API Key 经常丢失 | 用户强烈不满配置不持久，影响生产环境使用 |

> **核心诉求**：提升配置稳定性、增强对 OpenAI 多模态消息格式的兼容性、优化长上下文处理能力。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|-------------|
| ⚠️ 高 | [#372](https://github.com/agentscope-ai/CoPaw/issues/372) | 配置自动重写导致 LLM 不可用 | ❌ 无 |
| ⚠️ 高 | [#768](https://github.com/agentscope-ai/CoPaw/issues/768) | API Key 无故丢失 | ❌ 无（已有加密 PR #984，但未解决持久化） |
| ⚠️ 中 | [#805](https://github.com/agentscope-ai/CoPaw/issues/805) | `write_file` 工具参数缺失 | ❌ 无 |
| ⚠️ 中 | [#1100](https://github.com/agentscope-ai/CoPaw/issues/1100) | 飞书频道重复消息 | ❌ 无 |
| ⚠️ 中 | [#1095](https://github.com/agentscope-ai/CoPaw/issues/1095) | QQ 魔法命令无响应 | ❌ 无 |
| ✅ 已修复 | [#875](https://github.com/agentscope-ai/CoPaw/issues/875) | Windows 下 shell 命令中文乱码 | ✅ #1103 |

> 建议优先处理 **配置持久化** 与 **工具调用稳定性** 问题，二者直接影响用户信任度。

---

## 6. 功能请求与路线图信号

| 用户请求 | 相关 Issue | 已有 PR 支持？ | 纳入下一版可能性 |
|--------|-----------|--------------|----------------|
| RAG 支持 | [#1107](https://github.com/agentscope-ai/CoPaw/issues/1107) | ❌ 无 | 中（企业知识场景需求明确） |
| GitLab 技能导入 | [#1104](https://github.com/agentscope-ai/CoPaw/issues/1104) | ❌ 无 | 低（ niche 需求） |
| Docker 镜像瘦身 | [#1041](https://github.com/agentscope-ai/CoPaw/issues/1041) | ❌ 无 | 高（部署成本敏感） |
| MCP HTTP 支持 | [#676](https://github.com/agentscope-ai/CoPaw/issues/676) | ❌ 无（仅 stdio） | 高（扩展 MCP 生态） |
| OAuth 2.1 自动发现 | [#1012](https://github.com/agentscope-ai/CoPaw/pull/1012) | ✅ 已有 PR | 极高（安全合规刚需） |

> **明确信号**：MCP 安全授权、RAG 集成、镜像优化将成为 v0.0.7 重点方向。

---

## 7. 用户反馈摘要

- **满意点**：
  - 桌面安装包极大简化部署（v0.0.6 用户好评）
  - 多通道支持（飞书、钉钉、QQ）覆盖主流办公场景
  - 活跃的社区响应与快速修复（如 #1033、#1039）

- **痛点**：
  - “API Key 配置后第二天就没了，根本不敢用于生产”（#768）
  - “飞书里表格显示不出来，只能看网页 dashboard”（#961）
  - “Docker 镜像 3GB 太夸张，OpenClaw 才 2.3GB”（#1041）
  - “本地模型加载失败，日志也不清楚”（#823、#1011）

- **典型场景**：
  - 企业内部知识问答（需 RAG）
  - 跨团队自动化通知（Mattermost/Discord 集成）
  - 本地轻量化部署（GGUF 模型 + 低资源环境）

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 建议行动 |
|------|------|------|--------|--------|
| Issue | [#372](https://github.com/agentscope-ai/CoPaw/issues/372) | CoPaw auto rewrites config, blocking llm access | 8天 | 高优排查配置写入逻辑 |
| Issue | [#768](https://github.com/agentscope-ai/CoPaw/issues/768) | 配置的 API Key 经常莫名其妙丢失 | 4天 | 结合 #984 加密 PR 统一解决 |
| PR | [#181](https://github.com/agentscope-ai/CoPaw/pull/181) | feat(auth): add token authentication system | 9天 | 审查后合并，提升安全基线 |
| PR | [#419](https://github.com/agentscope-ai/CoPaw/pull/419) | OpenAI-compatible provider 自定义头支持 | 7天 | 关键兼容性功能，应优先合入 |

> ⚠️ 维护者需重点关注 **配置系统可靠性** 与 **认证体系完善**，二者为项目迈向企业级的关键瓶颈。

--- 

📌 **总结**：CoPaw 正处于从“原型工具”向“生产级 AI 助手平台”转型的关键阶段。当前需平衡 **功能扩展速度** 与 **核心稳定性**，尤其在配置管理、多模态兼容、资源效率方面亟需加固。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-03-10）

---

## 1. 今日速览

过去24小时内，ZeptoClaw 社区活跃度保持稳定，共产生 **2个新 Issue** 和 **3个新 Pull Request**，无新版本发布。开发重点集中在身份认证增强与外部服务集成优化上，核心维护者 @qhkm 主导了 Claude CLI 凭证自动导入功能的实现。尽管暂无合并操作，但所有 PR 均处于活跃开发状态，显示出项目在提升用户体验和开发者协作效率方面的持续推进。整体项目健康度良好，功能演进方向明确。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 被合并或关闭，但以下三项 PR 已进入实质开发阶段，标志着关键功能的前置推进：

- **#290 feat(auth): auto-import Claude CLI credentials as fallback**  
  实现从 macOS Keychain 或 `~/.claude.json` 自动读取 Claude CLI OAuth 令牌作为 Anthropic API Key 的备用方案，提升零配置场景下的可用性。该 PR 直接响应 Issue #289，是认证模块的重要扩展。  
  🔗 [PR #290](https://github.com/qhkm/zeptoclaw/pull/290)

- **#287 chore: Dev tools for consistent pre-PR state**  
  引入统一的开发工具链配置，确保 `cargo test` 与 `cargo clippy` 在不同开发者环境中行为一致，强化 PR 提交前的质量门禁，有助于降低集成风险。  
  🔗 [PR #287](https://github.com/qhkm/zeptoclaw/pull/287)

- **#286 feat: add SKILL.md presence check in GitHub skill search**  
  增强 GitHub 技能搜索功能，支持通过 `SKILL.md` 文件存在性进行深度扫描与质量评分，提升技能发现的相关性与文档完整性识别能力。  
  🔗 [PR #286](https://github.com/qhkm/zeptoclaw/pull/286)

> 虽未合并，但上述 PR 均处于活跃更新状态，预计将在近期进入 review 或合并流程，推动项目在认证鲁棒性、开发规范化和技能发现精度三方面取得进展。

---

## 4. 社区热点

今日最活跃的讨论集中于 **WhatsApp Web 原生支持** 的缺失问题：

- **#288 feat: Native WhatsApp Web support (replace whatsmeow-bridge stub)**  
  由社区成员 @deorozindo 提出，指出当前 WhatsApp 通道依赖一个**未发布二进制文件**的外部桥接服务（`whatsmeow-bridge`），导致功能不可用。该 Issue 揭示了项目在第三方依赖管理上的关键缺口，引发对通信通道可靠性的关注。  
  🔗 [Issue #288](https://github.com/qhkm/zeptoclaw/issues/288)

尽管暂无评论，但该 Issue 直指核心功能可用性，可能成为下一阶段集成优先级最高的任务之一。

---

## 5. Bug 与稳定性

今日未报告明确 Bug 或崩溃问题。所有 Issues 均为功能请求或架构改进，系统稳定性未受新问题冲击。

---

## 6. 功能请求与路线图信号

基于今日 Issues 与 PR 的对应关系，可识别出以下高优先级功能方向：

| 功能请求 | 关联 PR | 状态 | 路线图信号 |
|--------|--------|------|----------|
| 自动导入 Claude CLI 凭证作为 fallback | #290 | 开发中 | ✅ 高优先级，已编码实现，预计纳入下一版本 |
| 替换 WhatsApp Web 的 stub 实现为原生支持 | 无 | 仅 Issue | ⚠️ 关键阻塞点，需评估是否自建协议实现或寻找替代方案 |
| GitHub 技能搜索支持 SKILL.md 深度检测 | #286 | 开发中 | ✅ 中等优先级，提升搜索质量，可能随技能系统迭代发布 |

> 建议维护者优先推动 #290 合并以解决用户认证痛点，同时将 #288 纳入技术债评估，制定 WhatsApp 通道重构计划。

---

## 7. 用户反馈摘要

当前 Issues 中未包含大量用户评论，但从 Issue 描述可提炼出以下真实使用场景与痛点：

- **认证配置繁琐**：用户希望在未显式配置 Anthropic API Key 时，系统能智能利用已安装的 Claude CLI 凭证（如通过 `claude code login` 获取的 OAuth 令牌），减少手动配置负担（#289）。
- **通信通道不可用**：WhatsApp 功能因依赖未发布的二进制桥接服务而“形同虚设”，用户无法实际使用该通道，暴露出文档与实现不一致的问题（#288）。
- **技能发现质量参差**：部分 GitHub 仓库虽声明为“AI 技能”，但缺乏标准化文档（如 `SKILL.md`），导致搜索结果可信度低，用户呼吁更智能的筛选机制（#286 背景）。

> 整体反馈指向“开箱即用”体验的优化需求，尤其在认证自动化与通道可靠性方面。

---

## 8. 待处理积压

以下为长期未响应或需维护者关注的重要事项：

- **#288 WhatsApp Web 原生支持缺失**  
  创建已超24小时，尚无维护者回应或分配。该 Issue 涉及核心通信功能可用性，建议尽快评估技术路径（如基于 Web API 自研或切换至官方 SDK）。  
  🔗 [Issue #288](https://github.com/qhkm/zeptoclaw/issues/288)

- **PR #286、#287、#290 均处于 OPEN 状态且无 review 评论**  
  尽管由活跃贡献者提交，但缺乏维护者初步反馈，可能影响社区贡献积极性。建议 @qhkm 或其他维护者尽快进行技术评审或提供合并意向。

> 提醒：及时处理高价值 PR 与阻塞性 Issue 是维持项目健康度的关键。

---  
*数据来源：GitHub 仓库 qhkm/zeptoclaw，统计周期：2026-03-09 至 2026-03-10*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-03-10）**

---

### 1. 今日速览  
过去24小时内，EasyClaw 项目整体活跃度中等偏低：共处理 3 条 Issues（1 新开、2 关闭），无 Pull Request 提交或合并，但发布了一个新版本 v1.6.3。社区互动集中于用户支持与功能反馈，未出现高优先级技术阻塞问题。项目维护节奏稳定，以版本迭代和用户答疑为主。

---

### 2. 版本发布  
**v1.6.3 正式发布**  
本次发布主要聚焦于 macOS 平台用户体验优化，重点解决 Gatekeeper 安全机制误报问题。  
- **关键更新**：提供详细的安装指引，明确说明“应用已损坏”提示为系统误判，非文件损坏，并给出终端绕过方案（`xattr -cr` 命令）。  
- **影响范围**：仅涉及 macOS 用户安装流程，无功能变更或 API 调整。  
- **迁移建议**：现有用户无需升级，新用户建议参考新版安装说明以避免启动失败。  
> 🔗 [Release v1.6.3](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.3)

---

### 3. 项目进展  
今日无 Pull Request 合并或关闭，核心开发活动暂缓。项目推进主要依赖版本发布与社区问题响应，未涉及功能开发或架构调整。

---

### 4. 社区热点  
**Issue #13：图片上传后模型未接收图像内容（[链接](https://github.com/gaoyangz77/easyclaw/issues/13)）**  
- **讨论热度**：2 条评论，附两张对比截图（Codex 正常 vs EasyClaw 异常）  
- **核心诉求**：用户期望在多模态对话中实现图片输入功能，当前行为与竞品（如 Codex）不一致，影响使用体验。  
- **潜在影响**：若未及时响应，可能削弱项目在 AI 助手领域的竞争力。建议优先排查前端图像传递链路或后端模型接口兼容性。

---

### 5. Bug 与稳定性  
**高优先级待修复问题**：  
- **#13 图片输入失效**：用户明确报告在对话中选择图片后，模型未接收到图像数据（附证据截图）。该问题直接影响多模态交互核心功能，**尚无 fix PR**，需紧急排查前端上传逻辑或后端解析模块。  
> 🔗 [Issue #13](https://github.com/gaoyangz77/easyclaw/issues/13)

> 注：其余 Issues 均为非技术性咨询，已妥善关闭。

---

### 6. 功能请求与路线图信号  
- **多模态支持强化**：Issue #13 强烈暗示用户对图像输入功能的依赖，结合“Codex 可正常读取”的对比，表明该功能已成为用户评估产品的关键指标。建议将“稳定支持图片上传与模型解析”纳入 v1.7.0 路线图。  
- **社区建设需求**：Issue #12 提出建立技术交流群，反映用户希望增强协作与反馈渠道，可考虑在 README 或官网添加 Discord/QQ 群链接以提升留存。

---

### 7. 用户反馈摘要  
- **正面反馈**：用户认可项目架构设计（“非常符合我预期的架构” — @Geekbruce），体现技术选型获得开发者群体认同。  
- **痛点集中**：  
  - macOS 安装障碍虽已文档化，但仍需手动终端操作，普通用户门槛较高；  
  - 多模态功能缺失或不可靠，导致与主流 AI 工具体验脱节。  
- **使用场景**：主要用于本地部署的 AI 助手交互，涉及代码辅助（Codex 类比）与日常对话。

---

### 8. 待处理积压  
- **#13 图片输入失效（Open, 2026-03-09）**：高影响功能缺陷，创建超24小时未响应，建议维护者 @gaoyangz77 优先分配资源排查。  
> 🔗 [Issue #13](https://github.com/gaoyangz77/easyclaw/issues/13)

> 当前无长期积压 PR，Issue 响应总体及时（除上述关键 Bug 外均已闭环）。

---  
**健康度评估**：⭐⭐⭐☆（3.5/5）  
版本发布积极，社区互动良好，但关键功能 Bug 响应滞后，需加强核心体验维护。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*