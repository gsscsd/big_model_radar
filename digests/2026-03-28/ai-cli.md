# AI CLI 工具社区动态日报 2026-03-28

> 生成时间: 2026-03-28 01:01 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告（2026-03-28）

---

## 1. 生态全景

当前主流 AI CLI 工具正经历从“代码补全助手”向“全生命周期开发代理”的范式跃迁。各平台普遍强化 **MCP（Model Context Protocol）工具链集成**、**会话状态持久化** 与 **安全权限控制**，同时面临跨平台兼容性、资源泄漏与用户体验一致性的严峻挑战。回归问题频发（如 Plan Mode 失效、焦点劫持）暴露出快速迭代下的质量管控压力，而文档补全与插件生态建设成为提升开发者信任度的关键抓手。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues 数 | 今日 PR 数 | 最新 Release | 发布状态 |
|------|----------------|------------|---------------|----------|
| **Claude Code** | 10 | 10 | v2.1.86 | 正式版 |
| **OpenAI Codex** | 9 | 10 | rust-v0.118.0-alpha.3 | Alpha 预览 |
| **Gemini CLI** | 10 | 10 | v0.36.0-preview.5 | Preview |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.13-1 | 正式版（热修） |
| **Kimi Code CLI** | 10 | 10 | v1.27.0 | 正式版 |
| **OpenCode** | 10 | 10 | — | 无新版本 |
| **Qwen Code** | 10 | 10 | v0.14.0-preview.1 | Preview |

> 注：Issues 与 PR 数量基于日报中列出的“社区热点”与“重要 PR”统计，反映核心讨论密度。

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|--------|--------|--------|
| **MCP 工具链增强** | 全部 | 动态重载、OAuth 支持、认证稳定性（#39271）、Playwright 集成优化 |
| **会话与状态管理** | Claude Code、Gemini、Copilot、Kimi | 持久化会话、Plan Mode 安全隔离、历史回滚（`/rewind`）、任务追踪（Tracker） |
| **权限与安全控制** | Qwen、OpenCode、Claude Code | “始终允许”失效、子代理越权（#6527）、路径逃逸防护 |
| **跨平台兼容性** | 全部 | Windows 沙箱权限、WSL2 挂起、macOS 白屏、CRLF/LF 换行符处理 |
| **UI/UX 降噪与稳定性** | Gemini、Copilot、OpenCode | 减少冗余输出、修复布局闪烁、禁用 alt-screen 模式、支持文本选择 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|--------|--------|-------------|
| **Claude Code** | 代理协作、VCS 集成、企业级安全 | 企业开发者、DevOps | 强会话追踪、多 VCS 支持、MCP 扩展优先 |
| **OpenAI Codex** | 沙箱执行、TUI 协作、Telemetry 架构 | 高级用户、AI 研究员 | Rust 重构、沙箱策略精细化、实时协作优化 |
| **Gemini CLI** | SDD 工作流、任务 DAG 化、内存路由 | 架构师、复杂项目团队 | Tracker 系统为核心、Spec-to-Execution 桥接 |
| **GitHub Copilot CLI** | IDE 深度集成、组织策略同步 | GitHub 企业用户 | 与 GitHub 生态强绑定、BYOM/BYOK 支持 |
| **Kimi Code CLI** | Web 工作区、流式 UI、Figma 集成 | 全栈开发者、设计协作团队 | 前端体验优先、MCP 生态开放 |
| **OpenCode** | 多模型兼容、本地部署、移动端优化 | 私有化部署用户、自由开发者 | Effect 架构迁移、Docker 服务端支持 |
| **Qwen Code** | 本地模型支持、IDE 插件稳定性 | 中文开发者、Ollama 用户 | 聚焦 VS Code/Zed 集成、权限流对齐 |

---

## 5. 社区热度与成熟度

- **高活跃度 & 快速迭代**：  
  **Gemini CLI** 与 **OpenCode** 社区讨论最密集（日均 10+ Issues/PR），且 PR 多涉及架构级重构（如 Effect 迁移、Docker 支持），处于技术激进期。  
  **OpenAI Codex** 虽 Issue 数量相当，但集中于 Alpha 版本反馈，成熟度较低。

- **稳定生产导向**：  
  **GitHub Copilot CLI** 与 **Claude Code** 发布频繁热修版本（v1.0.13-1、v2.1.86），Issue 多围绕企业策略误报与权限同步，体现高成熟度下的精细化运维。

- **新兴生态探索**：  
  **Kimi Code CLI** 与 **Qwen Code** 在 MCP 扩展（Figma、Telegram）和本地模型适配上积极试错，社区反馈驱动功能演进，适合前沿技术尝鲜者。

---

## 6. 值得关注的趋势信号

1. **MCP 成为事实标准**：  
   所有工具均将 MCP 作为核心扩展协议，企业用户强烈要求 OAuth、白名单、超时控制等生产级特性。**开发者应优先评估 MCP 兼容性与安全策略**。

2. **“Plan Mode”安全危机倒逼架构升级**：  
   Claude Code、Gemini、OpenCode 均曝出只读模式绕过漏洞，预示下一代权限系统需支持**子代理隔离**与**动态策略继承**。

3. **终端 UX 回归原生体验**：  
   alt-screen 模式遭广泛抵制（Copilot CLI #2334），开发者呼吁保留 Ctrl+F 查找、鼠标选择等原生能力。**CLI 设计需平衡沉浸感与终端习惯**。

4. **本地模型与私有化部署崛起**：  
   Qwen Code 对 Ollama/GLM 的支持、OpenCode 的 Docker 镜像、Kimi 的 Web 工作区，反映**脱离云端依赖**的趋势。企业开发者应关注离线能力与数据合规。

> **行动建议**：短期关注 v2.1.86（Claude）与 v1.0.13-1（Copilot）的安全修复；中长期布局 MCP 工具开发与本地模型集成，以应对去中心化 AI 开发范式迁移。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告（截至 2026-03-28）**

---

### 1. 热门 Skills 排行（按社区关注度）

| Skill | 功能简述 | 社区讨论热点 | 状态 |
|------|--------|------------|------|
| **[document-typography](https://github.com/anthropics/skills/pull/514)** | 自动修复 AI 生成文档中的排版问题（孤行、寡行、编号错位） | 用户普遍反馈 Claude 生成的文档存在基础排版缺陷，此 Skill 直击痛点，被赞“刚需级优化” | Open |
| **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 提升前端设计建议的可操作性与一致性 | 社区认为原技能描述过于抽象，修订后强调“单轮对话内可执行”，提升实用性 | Open |
| **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 为 AI 代理提供跨会话持久化记忆能力 | 解决上下文压缩导致历史信息丢失问题，被视为“长期对话体验的关键突破” | Open |
| **[session-memory](https://github.com/anthropics/skills/pull/629)** | 在上下文压缩和重启时保留关键技术事实 | 与 shodh-memory 类似但更轻量、零依赖，社区热议“记忆机制标准化” | Open |
| **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 自动化代码库清理与文档审计，生成状态报告 | 企业用户关注技术债管理，认为该 Skill 可集成至 CI/CD 流程 | Open |
| **[management-consulting](https://github.com/anthropics/skills/pull/384)** | 结构化商业问题分析、战略框架应用与高管沟通 | 非技术用户高度关注，填补“商业思维类 Skill”空白 | Open |
| **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** | 集成 SAP 开源表格预测模型进行业务数据分析 | 企业数据场景落地案例，引发对“垂直领域模型集成”的讨论 | Open |

> 注：所有热门 PR 均无评论数据（`undefined`），但基于 PR 摘要、👍 反应及关联 Issue 热度综合判断关注度。

---

### 2. 社区需求趋势（来自 Issues 提炼）

- **技能共享与协作机制**：#228 呼吁支持组织内技能一键共享，替代当前手动上传流程，反映企业用户对**团队级技能分发**的强烈需求。
- **信任与安全治理**：#492 警示社区技能冒用 `anthropic/` 命名空间的风险，推动**技能签名验证与权限隔离**机制讨论。
- **技能触发可靠性**：#556 揭示评估脚本中技能触发率 0% 的严重缺陷，暴露**技能匹配算法优化**的紧迫性。
- **插件去重与模块化**：#189 指出 `document-skills` 与 `example-skills` 内容重复，要求**插件职责清晰划分**。
- **企业集成障碍**：#532、#406、#403 集中反映 SSO/企业用户无法使用依赖 API Key 的技能工具，凸显**企业身份兼容**需求。

> 核心趋势：从“功能创新”转向“可用性、安全性与协作效率”的基础设施完善。

---

### 3. 高潜力待合并 Skills

以下 PR 具备高社区价值且近期活跃，有望快速合并：

- **[ODT skill](https://github.com/anthropics/skills/pull/486)**：支持 OpenDocument 格式创建/解析，填补 LibreOffice 生态集成空白（更新于 03-26）。
- **[8 new skills bundle](https://github.com/anthropics/skills/pull/288)**：一次性引入教程生成、无障碍审计、数据叙事等 8 个实用技能，覆盖文档、合规、培训场景（更新于 03-26）。
- **[windows-screenshot-paste](https://github.com/anthropics/skills/pull/646)**：解决 Windows 终端无法粘贴截图的痛点，提升 Claude Code 原生体验（新提交，问题明确）。

---

### 4. Skills 生态洞察

> **当前社区最集中的诉求是：构建可信、可协作、企业就绪的 Skills 基础设施，而非单纯增加新功能。**

用户已不再满足于孤立技能创新，而是强烈要求解决技能发现、安全分发、跨会话记忆、组织共享及企业身份兼容等系统性问题，标志着 Claude Code Skills 生态进入“工业化落地”阶段。

---

# Claude Code 社区动态日报（2026-03-28）

---

## 1. 今日速览

本周社区焦点集中在 **CLI 会话异常消耗、Plan Mode 安全绕过、Chrome 扩展焦点劫持** 等关键回归问题上，同时多个长期文档缺失问题被集中修复。Anthropic 发布 v2.1.86 版本，优化了代理请求追踪与 VCS 目录排除逻辑。

---

## 2. 版本发布

**v2.1.86** 已发布，主要更新包括：
- 新增 `X-Claude-Code-Session-Id` 请求头，便于代理服务器按会话聚合请求（[详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.86)）
- 将 `.jj`（Jujutsu）和 `.sl`（Sapling）加入 VCS 排除列表，避免 Grep 和文件补全误入元数据目录
- 修复 `--resume` 参数在特定场景下的失效问题

---

## 3. 社区热点 Issues

| 问题 | 重要性说明 | 社区反应 |
|------|-----------|--------|
| [#34229](https://github.com/anthropics/claude-code/issues/34229) 手机验证失败 | 大量用户无法完成账户验证，阻碍基础使用 | 608 条评论，675 👍，标记为 `invalid` 但未关闭，疑似平台级故障 |
| [#38335](https://github.com/anthropics/claude-code/issues/38335) Max 计划会话消耗异常 | 用户报告 CLI 使用下会话配额消耗速度远超预期 | 81 条评论，80 👍，可能涉及计费逻辑错误 |
| [#39713](https://github.com/anthropics/claude-code/issues/39713) Plan Mode 下仍可执行写操作 | 安全机制失效，模型在只读模式下仍能执行写入/执行 | 4 条评论，1 👍，标记为回归，影响安全合规 |
| [#39558](https://github.com/anthropics/claude-code/issues/39558) Chrome 扩展劫持键盘输入 | 并发 Cowork 任务中焦点被强制切换，打断用户工作流 | 10 条评论，17 👍，影响多任务协作体验 |
| [#39600](https://github.com/anthropics/claude-code/issues/39600) MCP 工具调用窃取标签页焦点 | 每次 MCP 操作（如截图）都会强制切到 Claude 标签页 | 4 条评论，标记为重复，与 #39558 同源 |
| [#36422](https://github.com/anthropics/claude-code/issues/36422) 更新至 1.1.7714 后无响应 | macOS 桌面端完全卡死，无法交互 | 13 条评论，0 👍，疑似版本兼容性问题 |
| [#39271](https://github.com/anthropics/claude-code/issues/39271) Bearer Token MCP 认证失败 | HTTP MCP 服务器在 v2.1.83+ 显示 “needs-auth” | 2 条评论，5 👍，影响远程工具集成 |
| [#39049](https://github.com/anthropics/claude-code/issues/39049) WSL2 下 CLI 静默挂起 | 所有 API 调用无响应，无错误输出 | 2 条评论，跨平台兼容性问题 |
| [#40052](https://github.com/anthropics/claude-code/issues/40052) 无 AVX 支持 CPU 上 VS Code 扩展崩溃 | Bun 运行时 panic，影响老旧硬件用户 | 2 条评论，1 👍，打包依赖问题 |
| [#7490](https://github.com/anthropics/claude-code/issues/7490) 自定义 Bash 工具 Shell | 用户无法指定或继承初始 Shell 环境 | 33 条评论，89 👍，长期未解决的功能需求 |

---

## 4. 重要 PR 进展

| PR | 内容摘要 | 状态 |
|----|--------|------|
| [#33224](https://github.com/anthropics/claude-code/pull/33224) | DevContainer 支持配置 Node.js 版本，默认升级至 Node 24（LTS） | Open |
| [#39977](https://github.com/anthropics/claude-code/pull/39977) | 新增 `tmp-cleanup` 插件，自动清理 `/tmp` 中 oversized 任务输出文件（防磁盘泄漏） | Open |
| [#32755](https://github.com/anthropics/claude-code/pull/32755) | 添加 `edit-verifier` 插件，Edit 工具执行后自动验证是否成功 | Open |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | 新增 `preserve-session` 插件，支持项目路径变更后保留会话历史 | Open |
| [#39872](https://github.com/anthropics/claude-code/pull/39872) | 将项目 Node.js 版本从 20 升级至 24 | Open |
| [#39855](https://github.com/anthropics/claude-code/pull/39855) | 使用 Bash 参数展开替代 `echo | tr` 实现小写转换，提升性能与安全性 | Open |
| [#37648](https://github.com/anthropics/claude-code/pull/37648) | 更新 skill-development SKILL.md，补充完整 frontmatter 字段说明 | Open |
| [#39043](https://github.com/anthropics/claude-code/pull/39043) | 移除前端设计技能中的“复古未来主义”推荐（社区争议性修改） | Open |
| [#39916](https://github.com/anthropics/claude-code/pull/39916) | 临时清理插件早期版本（已关闭，功能合并至 #39977） | Closed |
| [#39132](https://github.com/anthropics/claude-code/pull/39132) | 新增 `terminal-restore` 插件，修复 kitty 键盘协议退出残留问题 | Closed |

---

## 5. 功能需求趋势

- **MCP 工具链增强**：多个 Issue 和 PR 聚焦 MCP 服务器动态重载（#40059）、OAuth 支持完善（#36861）、认证稳定性（#39271），显示开发者对可扩展工具生态的高度关注。
- **会话与状态管理**：包括 Plan Mode 安全隔离（#39713）、会话持久化（#39148）、临时文件清理（#39977），反映对长期运行稳定性和资源控制的重视。
- **IDE/终端集成优化**：VS Code URI 协议支持（#32687）、终端窗口重命名（#40069）、Shell 环境继承（#7490）等需求凸显多实例开发与工作流整合痛点。
- **文档完整性**：超过 15 个 Docs 类 Issue 被关闭，涵盖命令、快捷键、环境变量、MCP 配置等，表明官方正系统性补全文档缺口。

---

## 6. 开发者关注点

- **回归问题频发**：v2.1.83+ 引入多个关键回归（Plan Mode 失效、MCP 焦点劫持、WSL2 挂起），严重影响生产环境信任度。
- **跨平台兼容性**：macOS、Windows（AVX）、WSL2、Linux 终端（kitty/Ghostty）均出现特定环境问题，需加强测试覆盖。
- **资源泄漏风险**：任务 `.output` 文件可膨胀至数十 GB，缺乏自动清理机制，威胁系统稳定性。
- **认证与会话管理混乱**：手机验证、Bearer Token 认证、会话配额计算等问题集中爆发，影响用户准入与计费透明度。

> 建议开发者关注 v2.1.86 升级，并评估是否启用 `tmp-cleanup` 插件缓解磁盘压力。同时留意 Plan Mode 相关安全公告。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-03-28）

---

## 1. 今日速览  
本周 Codex 社区聚焦于 **性能回归与稳定性修复**，多个高热度 Issue 指向 Windows 平台下的沙箱权限、TUI 会话管理及 WebSocket 连接异常问题。同时，团队正积极推进 **Telemetry 架构升级** 与 **MCP（Model Context Protocol）功能增强**，以提升多代理协作与上下文管理能力。

---

## 2. 版本发布  
- **rust-v0.118.0-alpha.3**：最新 Alpha 版本发布，主要包含内部构建优化与沙箱策略调整，尚未公开详细变更日志。  
  🔗 [Release 0.118.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.3)  
- **rust-v0.118.0-alpha.2**：前序 Alpha 版本，用于 CI 验证与早期测试。  
  🔗 [Release 0.118.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.2)

> 注：当前仍处于快速迭代阶段，建议开发者关注 nightly 构建而非生产部署。

---

## 3. 社区热点 Issues  

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| [#14593](https://github.com/openai/codex/issues/14593) | 高频率 token 消耗（疑似限流失效） | ⭐⭐⭐⭐⭐ | 307 条评论，102 👍，Business 用户集中反馈，影响付费体验 |
| [#13041](https://github.com/openai/codex/issues/13041) | WebSocket 升级成功后立即被关闭（1008 Policy） | ⭐⭐⭐⭐ | 54 条评论，109 👍，导致连接回退 HTTPS，影响实时性 |
| [#13574](https://github.com/openai/codex/issues/13574) | Windows 沙箱下 `apply_patch` 失败 | ⭐⭐⭐⭐ | 已关闭，但暴露 Windows 权限模型缺陷，25 👍 |
| [#3962](https://github.com/openai/codex/issues/3962) | 请求任务完成音效提示 | ⭐⭐⭐ | 34 条评论，124 👍，UX 增强需求，长期未实现 |
| [#9211](https://github.com/openai/codex/issues/9211) | 远程 compact 任务子进程退出超时 | ⭐⭐⭐ | 20 条评论，Linux 服务器环境常见问题 |
| [#13476](https://github.com/openai/codex/issues/13476) | Playwright MCP 过度弹出权限审批 | ⭐⭐⭐⭐ | 15 条评论，27 👍，影响自动化流程体验 |
| [#14675](https://github.com/openai/codex/issues/14675) | Windows 下嵌套文件 `apply_patch` 沙箱刷新失败 | ⭐⭐⭐⭐ | 12 条评论，与路径解析相关，亟待修复 |
| [#15330](https://github.com/openai/codex/issues/15330) | Diff 视图导致 CPU 占用过高 | ⭐⭐⭐ | macOS 用户反馈，性能瓶颈明显 |
| [#16049](https://github.com/openai/codex/issues/16049) | 升级至 0.117.0 后会话丢失 | ⭐⭐⭐⭐ | 新发回归问题，影响 Enterprise 用户 |
| [#15945](https://github.com/openai/codex/issues/15945) | Web 搜索返回 503 错误 | ⭐⭐⭐ | 全平台故障，疑似服务端问题 |

---

## 4. 重要 PR 进展  

| # | 标题 | 功能/修复内容 |
|---|------|----------------|
| [#15690](https://github.com/openai/codex/pull/15690) | [telemetry] thread events | 重构分析模块为 reducer/publish 架构，新增线程初始化、分叉、恢复事件追踪 |
| [#16057](https://github.com/openai/codex/pull/16057) | 复用 PowerShell 解析进程（Windows） | 显著提升 Windows 下命令安全检查性能，避免重复启动 PowerShell |
| [#16014](https://github.com/openai/codex/pull/16014) | 修复 TUI agent picker 状态误判 | 解决代理线程被错误标记为“已关闭”的 UI 回归问题 |
| [#15929](https://github.com/openai/codex/pull/15929) | 允许非工作区写入（兼容旧策略） | 扩展沙箱权限模型，支持 `:tmpdir` 等外部路径写入 |
| [#16050](https://github.com/openai/codex/pull/16050) | 修复 `resume <name>` 会话查找失败 | 修正名称索引与后端搜索不一致导致的会话恢复 bug |
| [#16026](https://github.com/openai/codex/pull/16026) | TUI 协作模式状态同步优化 | 确保模型切换时状态栏实时刷新 |
| [#16055](https://github.com/openai/codex/pull/16055) | 强制分叉代理继承父模型设置 | 避免上下文复用失效，提升推理经济性 |
| [#13678](https://github.com/openai/codex/pull/13678) | 添加 Watchdog 运行时与提示 | 支持长期运行任务的监控与自动恢复机制 |
| [#15981](https://github.com/openai/codex/pull/15981) | 修复符号链接写入根权限处理 | 解决 macOS/Linux 下 symlink 路径逃逸与 ACL 异常 |
| [#15134](https://github.com/openai/codex/pull/15134) | 远程决议后清理本地 TUI 请求 | 避免多客户端场景下 UI 残留与误导性取消提示 |

---

## 5. 功能需求趋势  

从近期 Issue 可提炼出三大核心方向：

1. **IDE 集成深度优化**  
   - VS Code 扩展中任务作用域隔离（[#3550](https://github.com/openai/codex/issues/3550)）、上下文菜单增强（[#7727](https://github.com/openai/codex/issues/7727)）、CPU 占用控制（[#15503](https://github.com/openai/codex/issues/15503)）成为高频诉求。
   
2. **MCP（Model Context Protocol）生态扩展**  
   - 项目级 MCP 配置（[#2628](https://github.com/openai/codex/issues/2628)）、自定义 compaction hook（[#11912](https://github.com/openai/codex/issues/11912)）、Playwright 集成稳定性（[#13476](https://github.com/openai/codex/issues/13476)）推动 MCP 向生产可用演进。

3. **跨平台稳定性与性能**  
   - Windows 沙箱权限（[#13574](https://github.com/openai/codex/issues/13574)、[#14675](https://github.com/openai/codex/issues/14675)）、WSL2 终端兼容性（[#13638](https://github.com/openai/codex/issues/13638)）、TUI 会话管理（[#16049](https://github.com/openai/codex/issues/16049)）是开发者最痛点的稳定性问题。

---

## 6. 开发者关注点  

- **权限与沙箱模型不一致**：Windows 与 Unix 系统间行为差异导致 `apply_patch` 失败频发，需统一抽象层。
- **会话状态同步缺陷**：CLI 与 App 间、多线程间状态不一致（如会话丢失、agent 状态误判）影响工作流连续性。
- **MCP 审批体验差**：自动化工具调用频繁弹窗打断流程，亟需细粒度权限控制或白名单机制。
- **性能回归敏感**：0.117.0 版本引入的 CPU 占用、启动延迟、WebSocket 回退等问题引发广泛回滚讨论。
- **可观测性不足**：缺乏机器可读状态输出（[#16037](https://github.com/openai/codex/issues/16037)），阻碍 CI/CD 与监控集成。

> 建议开发者优先测试 `0.118.0-alpha.3` 并反馈 Windows 沙箱与 TUI 会话问题，同时关注即将合并的 Telemetry 与 MCP 改进 PR。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-03-28）

---

## 1. 今日速览

今日 Gemini CLI 社区聚焦于 **任务追踪系统（Tracker）的深度集成与优化**，多个核心 Issue 和 PR 围绕 SDD（Spec-Driven Development）工作流展开，推动从 Markdown 规划向 DAG 式任务执行的演进。同时，安全沙箱、UI 稳定性及内存管理机制成为开发者重点讨论方向。

---

## 2. 版本发布

✅ **v0.36.0-preview.5 已发布**  
本次预览版主要包含内部架构优化与 Bug 修复，未披露具体用户可见功能变更。完整变更见：[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.36.0-preview.4...v0.36.0-preview.5)

---

## 3. 社区热点 Issues

| 编号 | 标题 | 重要性说明 | 社区反应 |
|------|------|-----------|---------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware 文件读取与代码映射影响评估 | 探索通过 AST 提升工具精度，减少误读与 token 噪声，是提升 Agent 智能性的关键路径 | 4 条评论，维护者主导讨论 |
| [#24059](https://github.com/google-gemini/gemini-cli/issues/24059) | 账户限流导致严重延迟 | 用户反馈 CLI 响应极慢，疑似平台层限流策略误判，影响实际使用体验 | 3 条评论，需平台团队介入排查 |
| [#23858](https://github.com/google-gemini/gemini-cli/issues/23858) | Plan 模式下文件被意外编辑 | 暴露 Agent 行为控制漏洞，可能违反用户预期，涉及安全与信任问题 | 3 条评论，标记为需信息补充 |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) | 支持向 `/plan` 传递 prompt 参数 | 提升交互效率，允许单命令启动规划，符合开发者快捷操作需求 | 2 点赞，高优先级功能请求 |
| [#23724](https://github.com/google-gemini/gemini-cli/issues/23724) | 实现持久化项目级任务追踪存储 | 推动 Tracker 从会话临时状态升级为可协作、可版本控制的持久化系统 | 1 评论，SDD 工作流核心依赖 |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | 子 Agent 需感知当前审批模式 | 解决子 Agent 行为与全局策略（如 Plan Mode）冲突问题，提升系统一致性 | 1 点赞，架构设计关键 |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | 实现全局 vs 项目级内存路由 | 区分用户偏好与项目上下文记忆，提升记忆工具精准度 | 1 点赞，内存管理重要演进 |
| [#24037](https://github.com/google-gemini/gemini-cli/issues/24037) | Tracker 应在重规划与执行中实时更新 | 增强任务状态可见性，避免“黑箱”执行，提升可调试性 | 1 点赞，用户体验优化 |
| [#23924](https://github.com/google-gemini/gemini-cli/issues/23924) | 隐藏 Tracker 工具调用显示以减少冗余 | 降低 UI 噪音，聚焦用户对话流，提升交互清晰度 | 1 点赞，UI/UX 改进 |
| [#23129](https://github.com/google-gemini/gemini-cli/issues/23129) | 模型应在每一步完成后更新任务状态 | 确保任务进度实时同步，避免批量更新导致状态滞后 | 1 点赞，Tracker 可靠性关键 |

---

## 4. 重要 PR 进展

| 编号 | 标题 | 功能/修复内容 |
|------|------|---------------|
| [#24072](https://github.com/google-gemini/gemini-cli/pull/24072) | 实现 Spec-to-Tracker 桥接与 Root Tracker ID 生成 | 为 SDD 扩展建立 Spec 与任务追踪的 1:1 映射，奠定 DAG 执行基础 |
| [#23961](https://github.com/google-gemini/gemini-cli/pull/23961) | 实现 ACP 结构化终端生命周期 | 增强终端工具结果元数据（exitCode/signal），提升执行可控性 |
| [#24057](https://github.com/google-gemini/gemini-cli/pull/24057) | 为 Windows 沙箱实现强制完整性控制 | 提升 Windows 平台安全隔离能力，限制网络带宽等资源 |
| [#24065](https://github.com/google-gemini/gemini-cli/pull/24065) | 修复 StatusRow 布局竞争与闪烁循环 | 解决 UI 严重 Bug，避免无限重渲染，提升稳定性 |
| [#24068](https://github.com/google-gemini/gemini-cli/pull/24068) | 优化 Shell 焦点提示 Toast 颜色与文本 | 统一交互反馈语义，提升 UX 一致性 |
| [#24070](https://github.com/google-gemini/gemini-cli/pull/24070) | 为 save_memory 添加 target 参数支持项目级路由 | 实现记忆按项目/子目录分类存储，增强上下文管理能力 |
| [#23150](https://github.com/google-gemini/gemini-cli/pull/23150) | 实现基于工具的语义主题分组（Chapters） | 替代文本叙述，提升长对话结构清晰度（实验性功能） |
| [#22740](https://github.com/google-gemini/gemini-cli/pull/22740) | 通用后台任务 UI 与 CompletionBehavior | 解耦后台任务 UI 与 Shell，支持多种执行类型 |
| [#20974](https://github.com/google-gemini/gemini-cli/pull/20974) | 实现紧凑工具输出模式 | 高信号密度渲染工具结果，减少视觉干扰（P0/P2 混合优先级） |
| [#24040](https://github.com/google-gemini/gemini-cli/pull/24040) | 修复 CLI 子命令自动补全 | 优化 `/` 命令输入体验，避免无效建议干扰 |

---

## 5. 功能需求趋势

- **任务追踪系统（Tracker）深度集成**：社区正系统性推动 Tracker 从临时状态向**持久化、项目级、DAG 驱动**的演进（#23724, #23320, #24072），目标是取代传统 Markdown 规划，实现可协作、可版本控制的开发工作流。
- **Agent 行为精细化控制**：包括子 Agent 对审批模式的感知（#23582）、内存路由策略（#22819）、以及 Plan 模式下的编辑约束（#23858），反映对**安全边界与用户意图对齐**的高度关注。
- **UI/UX 降噪与稳定性**：多个 PR 和 Issue 聚焦减少冗余输出（#23924）、修复布局闪烁（#24065）、优化提示样式（#24068），表明团队正致力于提升**终端交互的清晰度与可靠性**。
- **平台安全与兼容性**：Windows 沙箱强化（#24057）、符号链接测试支持（#19901）等 PR 显示对**跨平台稳定性与安全性**的持续投入。

---

## 6. 开发者关注点

- **任务状态实时性与可见性**：开发者强烈要求 Tracker 在重规划或执行中途更新状态（#24037, #23129），避免“一次性”反馈，提升调试效率。
- **记忆管理的上下文隔离**：用户希望记忆能按项目或全局区分存储（#22819, #24070），避免污染或丢失关键上下文。
- **CLI 响应延迟问题**：账户限流导致的性能下降（#24059）已成为实际使用障碍，需平台侧优化配额策略。
- **工具输出冗余与 UI 干扰**：Tracker UUID 暴露（#23803）、工具调用日志过多（#23924）等问题被多次提及，开发者呼吁更干净的交互流。

---  
*数据来源：github.com/google-gemini/gemini-cli | 生成时间：2026-03-28*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-03-28）

---

## 1. 今日速览  
GitHub Copilot CLI 在昨日迎来 v1.0.13 系列两个热修复版本发布，重点增强了 MCP 服务可靠性与交互体验；与此同时，社区对“替代屏幕”（alt-screen）模式的争议持续升温，多个高赞 Issue 呼吁恢复传统终端滚动行为。模型访问权限与组织策略误报问题仍是企业用户的核心痛点。

---

## 2. 版本发布  

### v1.0.13-1（最新）
- **新增**：`/rewind` 命令与双击 Esc 键现可打开完整对话时间轴选择器，支持回滚至任意历史快照（[详情](https://github.com/github/copilot-cli/releases/tag/v1.0.13-1)）
- **优化**：
  - MCP 注册表查询支持自动重试与请求超时机制，提升稳定性
  - 利用 V8 编译缓存显著加快 CLI 启动速度

### v1.0.13-0
- **新增**：MCP 服务器可通过用户审批的新提示机制请求 LLM 推理（sampling）能力
- **修复**：
  - 被组织策略屏蔽的 MCP 服务器不再显示于 `/mcp show`
  - BYOM（自带模型）提供商下“推理努力”设置生效异常问题已修复
  - 清理冗余输出逻辑（[详情](https://github.com/github/copilot-cli/releases/tag/v1.0.13-0)）

---

## 3. 社区热点 Issues  

| 编号 | 标题 | 重要性说明 | 社区反应 |
|------|------|-----------|--------|
| [#2236](https://github.com/github/copilot-cli/issues/2236) | MCP 服务器从组织注册表消失，误报“被组织禁用” | 企业用户关键功能失效，影响工作流连续性 | 👍 28，多用户确认复现 |
| [#1595](https://github.com/github/copilot-cli/issues/1595) | 无法访问任何模型（提示策略拒绝） | 即使订阅有效且额度充足仍无法使用 | 👍 8，16 条评论，长期未解 |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | 频繁 API 错误导致速率限制误触发 | 实际请求量低却频繁限流，疑似后端逻辑缺陷 | 👍 5，10 条评论 |
| [#1944](https://github.com/github/copilot-cli/issues/1944) | Windows 下鼠标滚轮无法滚动历史记录（回归问题） | 基础交互功能退化，严重影响阅读长响应 | 已关闭（修复中） |
| [#1842](https://github.com/github/copilot-cli/issues/1842) | Tmux 中无法滚动 Copilot 响应内容 | 终端复用器兼容性差，阻碍开发者使用场景 | 已关闭（修复中） |
| [#2334](https://github.com/github/copilot-cli/issues/2334) | 强烈要求恢复非 alt-screen 模式 | 新 UI 模式破坏终端原生操作习惯（如查找、复制） | 👍 7，开发者强烈不满 |
| [#1799](https://github.com/github/copilot-cli/issues/1799) | 如何关闭 alt-screen 视图？ | 用户寻求回退选项，反映默认行为变更引发不适 | 4 条评论讨论 |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | 交互式模式工具调用白名单功能请求 | 当前需手动批准所有工具调用，效率低下 | 👍 7，安全场景刚需 |
| [#1095](https://github.com/github/copilot-cli/issues/1095) | 支持通过 API Key 添加 BYOK 模型 | 扩展模型选择灵活性，满足高级用户需求 | 👍 8，企业集成关键 |
| [#1128](https://github.com/github/copilot-cli/issues/1128) | 添加 awaitingUserInput 钩子类型 | 插件开发者需感知 CLI 输入等待状态以实现自动化 | 👍 17，生态扩展需求 |

---

## 4. 重要 PR 进展  
*注：过去 24 小时内无新 Pull Request 提交。*

---

## 5. 功能需求趋势  

- **终端交互体验优化**：围绕 alt-screen 模式的争议集中爆发，用户普遍要求保留传统滚动、文本选择与历史查找能力（#1944, #1842, #2334）。
- **MCP 与企业策略集成**：组织级 MCP 服务器可见性与策略同步问题频发，需更精准的策略状态反馈机制（#2236, #1976）。
- **模型与密钥管理**：BYOM/BYOK 支持呼声高涨，尤其在 Claude、Grok 等第三方模型接入方面存在明确需求（#1095, #2045）。
- **插件与自动化扩展**：开发者期望更细粒度的生命周期钩子（如 awaitingUserInput）以构建复杂工作流（#1128）。
- **跨平台兼容性**：Windows、Tmux、IDE 集成（如 IDEA、VS Code）下的输入/输出行为一致性亟待改善（#1944, #2302, #39）。

---

## 6. 开发者关注点  

- **权限与策略误报**：企业环境中即使配置正确，仍频繁遭遇“access denied by Copilot policy”错误，怀疑策略同步延迟或缓存机制缺陷。
- **交互模式倒退**：alt-screen 默认启用导致无法使用终端原生功能（如 Ctrl+F 查找、鼠标拖选复制），被视为重大 UX 倒退。
- **MCP 超时控制缺失**：自定义 MCP 服务器若执行耗时操作会被强制终止，且无法通过配置文件调整超时阈值（#172）。
- **键盘布局兼容性**：非美式键盘（如德语 AltGr+Q 输入 @）存在输入失效问题，影响国际化用户体验（#1999）。
- **日志与调试支持不足**：400 错误频发但缺乏清晰错误上下文，开发者难以定位是客户端构造请求错误还是服务端验证逻辑问题（#1274）。

---  
*数据来源：github.com/github/copilot-cli | 生成时间：2026-03-28*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-03-28）

---

## 1. 今日速览

Kimi Code CLI 发布 **v1.27.0**，重点增强 UI 流式渲染、计划展示与 Shell 安全性；社区围绕 **会话管理、文件工具稳定性、Web 端白屏问题** 展开高频讨论，开发者对 **AGENTS.md 指令遵从性** 和 **MCP 生态集成** 提出新需求。

---

## 2. 版本发布

### 🔖 v1.27.0 正式发布  
**核心更新：**
- **UI 增强**：支持增量 Markdown 流式输出与更流畅的加载动画（[#1598](https://github.com/MoonshotAI/kimi-cli/pull/1598)）
- **计划可视化**：新增 `PlanDisplay` 协议类型，支持内联渲染多步执行计划（[#1601](https://github.com/MoonshotAI/kimi-cli/pull/1601)）
- **Web 工作区**：增加右侧文件面板，便于查看和下载生成文件（[#1573](https://github.com/MoonshotAI/kimi-cli/pull/1573)）
- **反馈机制**：实现异步 `/feedback` 命令，支持结构化用户反馈提交（[#1593](https://github.com/MoonshotAI/kimi-cli/pull/1593)）

> 完整变更见 [Release 1.27.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.27.0)

---

## 3. 社区热点 Issues

| Issue | 重要性 | 社区反应 |
|------|--------|----------|
| [#1355](https://github.com/MoonshotAI/kimi-cli/issues/1355) **ACP 会话初始化失败**（Windows + IDEA） | ⚠️ 高 | 多用户复现，影响 IDE 插件稳定性，4 条讨论未解决 |
| [#1602](https://github.com/MoonshotAI/kimi-cli/issues/1602) **Web 端访问白屏**（macOS） | ⚠️ 高 | 控制台报错提示资源加载异常，2 条讨论，疑似前端构建问题 |
| [#1607](https://github.com/MoonshotAI/kimi-cli/issues/1607) **write 工具卡死**（v1.26.0） | ⚠️ 中高 | 升级后高频出现，打断才能恢复，影响开发效率 |
| [#1615](https://github.com/MoonshotAI/kimi-cli/issues/1615) **GLM-5.1 模型无响应** | ⚠️ 中 | 工具调用成功但无反馈，可能为模型适配问题 |
| [#1610](https://github.com/MoonshotAI/kimi-cli/issues/1610) **@ 文件补全限制 1000 文件** | ⚠️ 中 | 大项目下体验差，需优化文件发现机制 |
| [#1599](https://github.com/MoonshotAI/kimi-cli/issues/1599) **API 429 限流错误** | ⚠️ 中 | 用户登录后仍触发限流，疑似凭证未生效 |
| [#1366](https://github.com/MoonshotAI/kimi-cli/issues/1366) **支持选择历史会话**（已关闭） | ✅ 已响应 | 社区提议被采纳，相关功能曾通过 PR #1376 实现后被回滚 |
| [#1604](https://github.com/MoonshotAI/kimi-cli/issues/1604) **请求支持 Figma MCP** | 💡 新功能 | 开发者希望接入 Figma 官方 MCP 目录，扩展设计协作能力 |
| [#1596](https://github.com/MoonshotAI/kimi-cli/issues/1596) **AGENTS.md 指令不遵从** | ⚠️ 高 | 项目级约束失效，违背“优先级指令”设计初衷，需紧急修复 |
| [#1608](https://github.com/MoonshotAI/kimi-cli/pull/1608) **回滚会话列表功能** | 🔄 配置争议 | 因行为变更引发讨论，团队快速回滚以稳定体验 |

---

## 4. 重要 PR 进展

| PR | 类型 | 说明 |
|----|------|------|
| [#1614](https://github.com/MoonshotAI/kimi-cli/pull/1614) | 🔐 安全增强 | 为 Shell 命令执行添加轻量级安全分析，提升用户审批透明度 |
| [#1587](https://github.com/MoonshotAI/kimi-cli/pull/1587) | 🛠️ Shell 改进 | Shell 模式输出注入上下文，`cd` 命令持久化，提升交互连贯性 |
| [#1588](https://github.com/MoonshotAI/kimi-cli/pull/1588) | ⚡ 性能优化 | 使用 `git ls-files` 替代 `os.walk`，解决大仓库 `@` 文件补全遗漏问题 |
| [#1612](https://github.com/MoonshotAI/kimi-cli/pull/1612) | 🎨 UI 增强 | 重构 diff 渲染，支持行内对比与语法高亮，提升代码审查体验 |
| [#1609](https://github.com/MoonshotAI/kimi-cli/pull/1609) | 🧩 工具修复 | 允许 Glob 工具访问技能目录（如 `~/.claude/skills/`），避免越界错误 |
| [#1611](https://github.com/MoonshotAI/kimi-cli/pull/1611) | 🐞 路径修复 | 修复 Glob 工具未展开 `~` 路径的问题，保持与其余文件工具一致 |
| [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512) | 🔐 认证重构 | 重写 ACP 认证流程，支持终端登录与 OAuth Device Flow，提升登录可靠性 |
| [#1603](https://github.com/MoonshotAI/kimi-cli/pull/1603) | 🧪 健壮性 | 引入结构化退出码，便于 CI/CD 和外部工具判断错误类型 |
| [#1600](https://github.com/MoonshotAI/kimi-cli/pull/1600) | 🎨 UI 优化 | 用户输入高亮为亮蓝色并添加分隔线，提升终端可读性 |
| [#1597](https://github.com/MoonshotAI/kimi-cli/pull/1597) | 🐍 兼容性 | 防护 Python 3.13 下 `trafilatura` 导入崩溃，避免工具链级联失败 |

---

## 5. 功能需求趋势

从近期 Issues 和 PR 可提炼出三大社区关注方向：

1. **会话与状态管理**  
   用户强烈需求更灵活的会话控制（如历史会话选择、持久化工作目录），反映 CLI 向“长期协作助手”演进的趋势。

2. **工具链稳定性与性能**  
   大项目下的文件操作（`@` 补全、`Glob`、`WriteFile`）成为瓶颈，社区呼吁采用 Git 原生接口或索引优化。

3. **生态集成扩展**  
   MCP（Model Context Protocol）成为新焦点，Figma、Web 工具等外部服务接入需求上升，推动 Kimi Code 向通用 AI 代理平台发展。

---

## 6. 开发者关注点

- **指令遵从性缺陷**：`AGENTS.md` 项目级约束被忽略（#1596），损害了“优先级指令”设计信任，需优先修复。
- **跨平台兼容性**：Windows（#1355）、macOS（#1602）、Python 3.13（#1597）均出现环境特异性问题，测试覆盖需加强。
- **模型适配碎片化**：GLM-5.1（#1615）等第三方模型反馈异常，暴露协议层兼容性问题。
- **用户体验一致性**：会话管理回滚（#1608）、技能目录行为变更（#1605/#1606）显示配置语义需更清晰定义。

> 建议团队加强 **项目级策略执行引擎** 和 **多模型协议适配层** 的投入，同时建立更稳定的配置变更评审机制。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-03-28）

---

## 今日速览

OpenCode 社区今日聚焦于 **Windows 平台交互体验优化** 与 **安全权限机制修复**，多个高热度 Issue 围绕 Ctrl+C 退出冲突、剪贴板图像粘贴、子代理权限绕过等核心问题展开讨论。同时，开发者积极贡献多项底层重构与功能增强 PR，包括 Effect 架构迁移、Docker 服务端支持及移动端触控优化。

---

## 版本发布

无新版本发布。

---

## 社区热点 Issues

| 编号 | 标题 | 重要性说明 | 社区反应 |
|------|------|-----------|---------|
| [#906](https://github.com/anomalyco/opencode/issues/906) | Feature request: Paste to attach image | 用户强烈希望支持从剪贴板直接粘贴图片（如 Excalidraw 导出），提升工作流效率 | 👍 18，评论 31，长期未解决，呼声高 |
| [#2999](https://github.com/anomalyco/opencode/issues/2999) | Provide means to disable Ctrl-C | Windows 下 Ctrl+C 导致程序崩溃，严重影响基础操作体验 | 👍 18，评论 28，多终端环境复现 |
| [#6527](https://github.com/anomalyco/opencode/issues/6527) | Plan mode restrictions bypassed when spawning sub-agents | **高危安全漏洞**：子代理无视父级只读限制，可越权编辑文件 | 👍 5，评论 13，标记为 CRITICAL，需紧急修复 |
| [#7957](https://github.com/anomalyco/opencode/issues/7957) | Ctrl+C should not exit OpenCode | 与系统级复制快捷键冲突，用户误操作频繁 | 👍 20，评论 10，UX 设计缺陷 |
| [#1429](https://github.com/anomalyco/opencode/issues/1429) | feat: support pasting images from the clipboard | 与 #906 呼应，强调“无需保存即可粘贴”的便捷性 | 👍 12，评论 15，已关闭但未实现 |
| [#11157](https://github.com/anomalyco/opencode/issues/11157) | Compaction fails with 400 Bad Request when using GitHub Copilot Enterprise | 企业用户在使用 Copilot + Claude 时对话摘要功能失效 | 👍 6，评论 11，影响高级功能可用性 |
| [#15212](https://github.com/anomalyco/opencode/issues/15212) | Cannot select text in chat messages (VSCode terminal) | TUI 鼠标事件捕获异常，阻碍内容复制与审查 | 👍 3，评论 8，开发调试场景关键障碍 |
| [#16126](https://github.com/anomalyco/opencode/issues/16126) | external_directory: "deny" not enforced in Git Bash on Windows | 权限控制失效，存在安全风险 | 👍 4，评论 6，Windows 路径解析逻辑缺陷 |
| [#18088](https://github.com/anomalyco/opencode/issues/18088) | CJK text hidden when pop-up occurs | 中日韩语言显示异常，影响非英语用户体验 | 👍 1，评论 8，国际化支持待加强 |
| [#15886](https://github.com/anomalyco/opencode/issues/15886) | Add Git Status Panel to Desktop App | 桌面端缺乏原生 Git 状态管理，需手动调用命令 | 👍 2，评论 3，IDE 集成需求凸显 |

---

## 重要 PR 进展

| 编号 | 标题 | 功能/修复内容 |
|------|------|--------------|
| [#19459](https://github.com/anomalyco/opencode/pull/19459) | refactor(session): effectify SessionCompaction service | 将会话压缩服务迁移至 Effect 架构，提升可测试性与依赖管理 |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | feat(app): Mobile Touch Optimization | 优化移动端触控体验，适配平板与手机设备 |
| [#19475](https://github.com/anomalyco/opencode/pull/19475) | feat(containers): add docker server image | 新增官方 Docker 镜像，支持 headless 服务端部署 |
| [#16069](https://github.com/anomalyco/opencode/pull/16069) | feat(windows): add first-class pwsh/powershell support | 增强 Windows 下 PowerShell 支持，替代 Git Bash 依赖 |
| [#15201](https://github.com/anomalyco/opencode/pull/15201) | feat(ci): sign Windows CLI and desktop builds | 实现 Windows 构建签名，提升安全可信度 |
| [#19468](https://github.com/anomalyco/opencode/pull/19468) | fix(tui): patch StdinParser to prevent garbled text | 修复鼠标序列解析错误导致的界面乱码问题 |
| [#19470](https://github.com/anomalyco/opencode/pull/19470) | feat(opencode): wire permission.ask plugin hook | 补全权限询问插件钩子，完善权限扩展机制 |
| [#18308](https://github.com/anomalyco/opencode/pull/18308) | refactor: replace BunProc with Npm module | 移除 Bun 依赖，改用 @npmcli/arborist 实现确定性 npm 安装 |
| [#19465](https://github.com/anomalyco/opencode/pull/19465) | feat: add opencode.local.jsonc for local config overrides | 支持本地配置文件覆盖，便于团队协作与环境隔离 |
| [#19350](https://github.com/anomalyco/opencode/pull/19350) | fix(copilot): use GitHub App token flow | 修复 Copilot 预览模型因 token 流程错误导致的不可用问题 |

---

## 功能需求趋势

1. **跨平台交互一致性**：Windows 用户对 Ctrl+C 行为、PowerShell 支持、Git Bash 兼容性等问题反馈集中，凸显跨平台 UX 统一的重要性。
2. **剪贴板与媒体支持**：图像粘贴（#906、#1429）成为高频需求，反映用户期望更自然的富媒体交互。
3. **安全与权限精细化**：子代理权限绕过（#6527）、external_directory 失效（#16126）等安全问题引发关注，推动权限系统重构。
4. **IDE/开发环境集成**：Git 状态面板（#15886）、VSCode 终端文本选择（#15212）等需求表明用户希望 OpenCode 深度融入开发工作流。
5. **企业级功能稳定性**：GitHub Copilot Enterprise 集成问题（#11157）显示企业用户对稳定、合规功能的高要求。

---

## 开发者关注点

- **快捷键冲突**：Ctrl+C 退出行为被广泛视为反直觉，亟需改为“复制优先，退出需确认”模式。
- **权限系统健壮性**：当前权限控制存在边界漏洞（如子代理、路径解析），需系统性审计与加固。
- **TUI 渲染稳定性**：鼠标事件捕获、CJK 文本显示、SSE 超时等问题影响核心交互体验。
- **配置管理灵活性**：单一 `opencode.json` 已无法满足复杂场景，`config.d/` 目录与本地覆盖文件（`.local.jsonc`）需求上升。
- **依赖与构建现代化**：Bun 到 npm 的迁移、Docker 支持、代码签名等 PR 反映底层架构向生产就绪演进。

--- 

> 报告基于 GitHub 数据自动生成，聚焦技术价值与社区共识。建议优先处理标记为 `CRITICAL` 的安全 Issue 及高赞 UX 缺陷。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-03-28）

---

## 1. 今日速览

今日 Qwen Code 社区聚焦于 **IDE 集成稳定性修复** 与 **权限系统优化**，多个关键 Bug 被识别并推进修复，尤其是涉及多工具调用、文件路径处理和换行符兼容性等问题。同时，v0.14.0-preview.1 发布，带来扩展安装与上下文管理增强。

---

## 2. 版本发布

### 🔹 v0.14.0-preview.1（[Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.0-preview.1)）
- 支持非 GitHub Git URL 的扩展安装（[#2539](https://github.com/QwenLM/qwen-code/pull/2539)）
- 修复 `/memory show --project` 和 `--global` 显示所有配置上下文文件的问题（[#23](https://github.com/QwenLM/qwen-code/pull/23)）

### 🔹 v0.13.1（[Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.1)）
- 包含多项权限流对齐、日志路径修复及 `@` 文件搜索失效问题的热修。

---

## 3. 社区热点 Issues

| 编号 | 标题 | 重要性 | 社区反应 |
|------|------|--------|----------|
| [#176](https://github.com/QwenLM/qwen-code/issues/176) | Tool calling 不适用于本地模型 qwen3-30b-a3b | ⭐⭐⭐⭐ | 高热度（23 评论，7 👍），反映本地 LLM 集成存在工具调用解析断层 |
| [#2709](https://github.com/QwenLM/qwen-code/issues/2709) | IDE diff 接受时 edit 工具参数膨胀，浪费大量 token | ⭐⭐⭐⭐⭐ | 关键性能问题，影响用户体验与成本，已引发核心开发者关注 |
| [#2700](https://github.com/QwenLM/qwen-code/issues/2700) | “始终允许”权限设置无效，反复弹窗 | ⭐⭐⭐⭐ | 高频反馈（多用户报告），严重影响自动化工作流 |
| [#2704](https://github.com/QwenLM/qwen-code/issues/2704) | Linux 下编辑自动将 CRLF 转为 LF | ⭐⭐⭐⭐ | 跨平台协作隐患，Git 差异污染问题突出 |
| [#2686](https://github.com/QwenLM/qwen-code/issues/2686) | 工具调用频繁遗漏参数（如 old_string/new_string） | ⭐⭐⭐⭐ | 反映模型输出稳定性不足，影响可靠性 |
| [#2723](https://github.com/QwenLM/qwen-code/issues/2723) | “Always Allow”权限未持久化 | ⭐⭐⭐⭐ | 与 #2700 同类问题，Windows/Linux 多平台复现 |
| [#2703](https://github.com/QwenLM/qwen-code/issues/2703) | 含数字的中文路径被错误插入空格 | ⭐⭐⭐ | 路径解析逻辑缺陷，影响中文用户 |
| [#2678](https://github.com/QwenLM/qwen-code/issues/2678) | 对话中断、消息不显示且无法终止 AI 思考 | ⭐⭐⭐ | VS Code 插件稳定性问题，需重启解决 |
| [#2722](https://github.com/QwenLM/qwen-code/issues/2722) | VSCode “Edit automatically” 模式下允许任意命令执行 | ⭐⭐⭐⭐ | 安全风险提示，权限控制粒度不足 |
| [#2655](https://github.com/QwenLM/qwen-code/issues/2655) | 多智能体模式展开时闪屏 | ⭐⭐ | UI/UX 问题，影响使用体验 |

---

## 4. 重要 PR 进展

| PR 编号 | 功能/修复 | 状态 | 说明 |
|--------|----------|------|------|
| [#2728](https://github.com/QwenLM/qwen-code/pull/2728) | 集中 IDE diff 交互逻辑至 CoreToolScheduler | Open | 解决 #2709 token 浪费问题，架构级优化 |
| [#2707](https://github.com/QwenLM/qwen-code/pull/2707) | 保留原始换行符（CRLF/LF） | Open | 修复 #2704，避免 Git 全文件变更 |
| [#2670](https://github.com/QwenLM/qwen-code/pull/2670) | 修复 Windows 权限持久化失败 | Open | 解决路径大小写敏感导致“始终允许”失效 |
| [#2694](https://github.com/QwenLM/qwen-code/pull/2694) | 修复选择 slash 命令后 `@` 文件搜索失效 | Closed | 合并至 v0.13.1，提升 CLI 交互连贯性 |
| [#2690](https://github.com/QwenLM/qwen-code/pull/2690) | 统一 ACP 权限流跨客户端行为 | Closed | 对齐 CLI 与 VS Code 权限策略 |
| [#2675](https://github.com/QwenLM/qwen-code/pull/2675) | 修复 ACP 模式 OpenAI logger 初始化失败 | Closed | 解决 Zed 等编辑器中日志目录创建错误 |
| [#2719](https://github.com/QwenLM/qwen-code/pull/2719) | 支持通过 npm registry 安装扩展 | Open | 增强企业私有部署能力 |
| [#2628](https://github.com/QwenLM/qwen-code/pull/2628) | 新增 Channels 平台（Telegram/WeChat/DingTalk） | Open | 扩展消息通道，支持多端交互 |
| [#2525](https://github.com/QwenLM/qwen-code/pull/2525) | 添加上下文感知的后续建议功能 | Open | 类似 Claude Code NES，提升任务连续性 |
| [#2623](https://github.com/QwenLM/qwen-code/pull/2623) | 内置 qc-helper 技能与 Claw 指南 | Open | 改善用户自助支持体验 |

---

## 5. 功能需求趋势

从近期 Issues 和 PR 可提炼出三大核心方向：

1. **IDE 集成深度优化**  
   - 多工具调用协同（如 edit/write）、diff 交互效率、权限弹窗一致性成为焦点。
   - 社区强烈关注 VS Code / JetBrains / Zed 等编辑器的行为对齐。

2. **权限与安全性精细化**  
   - “Always Allow”失效、自动执行命令风险、权限存储可靠性等问题频发，推动权限系统重构。

3. **跨平台与本地化兼容性**  
   - Windows 路径处理、CRLF/LF 换行符、中文文件名空格等问题凸显对多语言/多系统支持不足。

此外，**本地模型支持**（如 Ollama、GLM-5.1）和**企业级扩展分发**（npm registry）需求上升，反映用户向私有化部署迁移的趋势。

---

## 6. 开发者关注点

- **工具调用可靠性**：频繁出现参数缺失、token 浪费、多次编辑仅首次成功等问题，亟需稳定解析 pipeline。
- **权限系统健壮性**：“始终允许”形同虚设，严重影响自动化脚本与 CI/CD 集成。
- **路径与编码处理**：中文路径、数字路径、换行符等基础 I/O 行为不一致，导致跨平台协作障碍。
- **本地模型兼容性**：对接 Ollama、GLM、Qwen3 等本地部署模型时，工具调用与文件读取异常频发。
- **文档与配置透明度**：hooks、envKey、subagent 配置等缺乏清晰文档，增加上手成本。

> 建议优先推进 #2728（token 优化）、#2707（换行符）、#2670（权限持久化）等 PR 合并，以显著提升核心体验。

</details>

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*