# OpenClaw 生态日报 2026-04-30

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-30 01:29 UTC

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

# OpenClaw 项目动态日报（2026-04-30）

---

## 1. 今日速览

OpenClaw 社区活跃度持续高位运行，过去24小时内共产生 **500条 Issues 更新**（新开/活跃 486 条，关闭 14 条）和 **500条 PR 更新**（待合并 468 条，已合并/关闭 32 条），显示出强烈的开发参与和问题反馈意愿。项目整体处于高迭代节奏，但 Issue 关闭率偏低（仅2.8%），表明存在响应延迟或修复周期较长的问题。同日发布新版本 **v2026.4.27**，重点增强 Codex Computer Use 能力并扩展 DeepInfra 支持。

---

## 2. 版本发布

### 🔖 v2026.4.27: openclaw 2026.4.27

**核心亮点：**
- **Codex Computer Use 增强**：默认集成 `status`/`install` 命令、市场发现机制，以及针对 Codex 模式桌面控制的“fail-closed”MCP 安全检查（[@pash-openai](https://github.com/openclaw/openclaw/pull/74716)）。
- **DeepInfra 正式加入捆绑 Provider 集**：支持模型发现、媒体生成/编辑、TTS 及嵌入服务，提升多模态能力覆盖。

> ⚠️ **注意**：本次更新未报告破坏性变更，但从 Issues 反馈看，部分用户遭遇 Ollama `think` 参数被强制设为 `false` 的回归问题（#73366），建议升级前确认本地模型配置兼容性。

[查看完整 Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.4.27)

---

## 3. 项目进展

今日共 **32 个 PR 被合并或关闭**，关键进展包括：

| PR | 类型 | 说明 |
|----|------|------|
| [#74716](https://github.com/openclaw/openclaw/pull/74716) | 🔧 基础设施 | 为原生 Mac 计算机使用计划添加节点托管 MCP 会话管道，奠定本地计算机控制基础 |
| [#74134](https://github.com/openclaw/openclaw/pull/74134) | ✨ 功能 | 新增捆绑插件 `file-transfer`，支持 agent 在节点上执行二进制文件读写（`file_fetch`, `dir_list`, `file_write` 等） |
| [#73668](https://github.com/openclaw/openclaw/pull/73668) | 🛡️ 隐私 | 引入隐私安全的本地 profile 导出/导入功能，便于跨设备迁移个性化配置 |
| [#74700](https://github.com/openclaw/openclaw/pull/74700) | 🧹 清理 | 自动清理已完成 ACP 子会话，防止内存泄漏和主会话卡死 |
| [#74713](https://github.com/openclaw/openclaw/pull/74713) | 🔧 修复 | 修复配置 Provider 运行时依赖解析，避免启动失败 |

整体来看，项目正向 **本地计算能力扩展**（MCP、文件操作）和 **用户体验稳定性**（会话清理、配置迁移）两个方向推进。

---

## 4. 社区热点

以下 Issues 在过去24小时引发高度关注：

| Issue | 评论数 | 类型 | 核心诉求 |
|-------|--------|------|----------|
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | 20 | 🐛 回归 Bug | 升级后 agent 无法通过 `session_send` 联系其他 agent，会话发现机制失效 |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | 19 | 🐛 可靠性 Bug | `memoryFlush` 仅每两次 compaction 执行一次，导致内存管理异常 |
| [#72338](https://github.com/openclaw/openclaw/issues/72338) | 17 | 🚨 性能 Bug | Gateway CPU 占用过高导致 Telegram 回复停滞，需重启恢复 |
| [#45438](https://github.com/openclaw/openclaw/issues/45438) | 8 (+3👍) | 💥 内存泄漏 | `structuredClone` 在 session store 中引发 ~1GB/min 原生内存泄漏 |

**分析**：用户普遍关注 **会话通信可靠性** 和 **内存/性能稳定性**，反映出生产环境中对长期运行能力的强依赖。Telegram 和 Discord 渠道的异常尤为突出。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| Issue | 严重性 | 状态 | 备注 |
|-------|--------|------|------|
| [#45438](https://github.com/openclaw/openclaw/issues/45438) | 🔴 严重（内存泄漏） | 🟡 未修复 | 每分钟泄漏 ~1GB 原生内存，V8 堆外无法回收 |
| [#72338](https://github.com/openclaw/openclaw/issues/72338) | 🔴 严重（服务不可用） | 🟡 未修复 | Gateway CPU 自旋导致 Telegram 回复完全停滞 |
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | 🟠 高（功能失效） | 🟡 未修复 | 多 agent 协作中断，影响核心架构 |
| [#73366](https://github.com/openclaw/openclaw/issues/73366) | 🟠 高（回归） | ✅ 已关闭 | Ollama `think` 参数被强制设为 `false`，已由用户确认修复 |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | 🟠 高（行为不一致） | 🟡 未修复 | 不同用户内存存储行为差异巨大，缺乏统一策略 |

> 💡 建议优先处理 #45438 和 #72338，二者均可能导致服务不可用或资源耗尽。

---

## 6. 功能请求与路线图信号

用户强烈需求的功能中，部分已有对应 PR 推进：

| 功能请求 | Issue | 状态 | 关联 PR |
|--------|-------|------|--------|
| 分层引导文件加载（节省上下文） | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 🟢 活跃开发 | [#22439](https://github.com/openclaw/openclaw/pull/22439) 已提交 |
| 节点间文件传输 | [#41716](https://github.com/openclaw/openclaw/issues/41716) | 🟢 已实现 | [#74134](https://github.com/openclaw/openclaw/pull/74134) 合并 |
| 敏感数据脱敏 | [#64046](https://github.com/openclaw/openclaw/issues/64046) | 🟡 未响应 | 无 PR，但安全需求迫切 |
| 技能优先级配置 | [#50199](https://github.com/openclaw/openclaw/issues/50199) | 🟡 未响应 | 多技能冲突场景下的关键需求 |
| 备份/恢复工具 | [#13616](https://github.com/openclaw/openclaw/issues/13616) | 🟡 未响应 | 生产部署刚需 |

**预测**：分层引导加载（#22439）有望在下一版本落地，因其 PR 已存在且解决核心痛点。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “升级后我的主 agent 完全无法与其他 agent 通信，所有协作流程中断。”（#52875）
  - “Gateway 每隔几小时就卡死，必须手动重启，严重影响自动化任务。”（#72338）
  - “日志里全是 API key，根本不敢分享调试信息。”（#64046）

- **满意点**：
  - “DeepInfra 集成后，图像生成速度明显提升。”（Release 反馈）
  - “Control UI 的 webchat 终于支持 quoted replies 了，Signal 体验大幅改善。”（#49145）

- **使用场景**：
  - 多 agent 协作（客服+CRM+数据库查询）
  - 长期运行 cron 任务（日报、监控告警）
  - 跨平台部署（Docker + WSL2 + macOS）

---

## 8. 待处理积压

以下重要 Issue 长期未响应，需维护者关注：

| Issue | 创建时间 | 类型 | 积压原因 |
|-------|----------|------|--------|
| [#12590](https://github.com/openclaw/openclaw/issues/12590) | 2026-02-09 | 🐛 内存管理 Bug | 超过 80 天未修复，影响稳定性 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 2026-02-21 | ✨ 性能优化 | 虽有关联 PR，但尚未合并 |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) | 2026-02-10 | 🛠️ 运维工具 | 备份需求普遍，但无官方方案 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 2026-03-13 | 🐛 子任务丢失 | 静默失败，影响任务可靠性 |

> 📌 **建议**：对超过 60 天未响应的高影响 Issue 建立 SLA 机制，避免社区信任流失。

---

**报告生成时间**：2026-04-30  
**数据来源**：[OpenClaw GitHub Repository](https://github.com/openclaw/openclaw)

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告（2026-04-30）

---

## 1. 生态全景

2026年Q2，个人 AI 助手与自主智能体开源生态呈现**高活跃度、强迭代、多架构并存**的态势。主流项目普遍聚焦于**多模态集成、本地计算能力扩展、会话稳定性治理**三大方向，反映出从“原型验证”向“生产可用”的关键转型。OpenClaw 作为生态核心参照，其高 Issue/PR 密度（500+/500+）表明社区参与深度，而 NanoBot、IronClaw 等项目则在特定场景（如飞书线程化、WASM 安全沙箱）实现差异化突破。整体生态正从单一对话代理向**可编排、可部署、可审计的分布式智能体平台**演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 新版本发布 | 健康度评估 |
|------|-------------|---------|------------|------------|
| **OpenClaw** | 500（486 新开/活跃） | 500（32 合并） | ✅ v2026.4.27 | ⭐⭐⭐☆☆（高活跃，但 Issue 关闭率仅 2.8%） |
| **NanoBot** | 12（8 关闭） | 38（26 合并） | ✅ v0.1.5.post3 | ⭐⭐⭐⭐☆（高效协作，响应迅速） |
| **Zeroclaw** | 50（30 新开） | 50（1 合并） | ❌ | ⭐⭐☆☆☆（开发密集但合并审慎，积压严重） |
| **PicoClaw** | 13（12 新开） | 20（5 合并） | ✅ Nightly Build | ⭐⭐⭐☆☆（功能迭代快，稳定性风险存） |
| **NanoClaw** | 3（2 开放） | 50（22 合并） | ❌ | ⭐⭐⭐⭐☆（高合并率，架构演进稳健） |
| **IronClaw** | 26（1 关闭） | 50（32 合并） | ✅ v0.27.0 | ⭐⭐⭐⭐☆（Reborn 重构关键期，底层投入大） |
| **LobsterAI** | 1（新开） | 28（4 合并） | ✅ v2026.4.29 | ⭐⭐⭐☆☆（版本稳定，但 stale PR 积压） |
| **Moltis** | 6（4 新开） | 8（3 合并） | ✅ 2 版本连发 | ⭐⭐⭐⭐☆（安全修复及时，多模态拓展） |
| **CoPaw** | 29（15 新开） | 21（10 合并） | ✅ v1.1.5 | ⭐⭐⭐☆☆（前端优化显著，隔离机制待解） |
| **TinyClaw / ZeptoClaw / EasyClaw** | 0 | 0 | ❌ | ⭐☆☆☆☆（无近期活动） |

> 注：健康度综合考量活跃度、响应速度、稳定性、积压处理。

---

## 3. OpenClaw 在生态中的定位

**优势**：  
- **规模最大**：单日 500+ Issues/PRs，远超同类（次高为 NanoClaw 的 50 PRs），体现社区广度。  
- **能力最全**：率先集成 Codex Computer Use、DeepInfra 多模态、MCP 本地控制，覆盖“云-边-端”全栈。  
- **生态中枢地位**：被 LobsterAI、CoPaw 等项目作为底层架构参考（如 #866 直指 OpenClaw 短板）。

**技术路线差异**：  
- 相比 IronClaw 的 WASM 安全沙箱、NanoBot 的轻量级通道抽象，OpenClaw 采用**混合架构**（Node.js + Python 技能），强调灵活性与兼容性，但牺牲部分隔离性（见 #45438 内存泄漏）。  
- 与 Zeroclaw 的 ACP 协议标准化相比，OpenClaw 更侧重**快速功能集成**，协议层演进较慢。

**社区规模**：  
- GitHub Stars 预估 >15k（基于 Issue 密度与 PR 贡献者数），显著领先 NanoBot（~3k）、PicoClaw（~2k）等。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|--------|--------|--------|
| **多智能体会话隔离** | OpenClaw (#52875)、CoPaw (#3936, #3957)、Zeroclaw (#5550) | 防止跨 agent 上下文污染，支持 per-agent workspace |
| **内存/性能稳定性** | OpenClaw (#45438)、Zeroclaw (#12590)、PicoClaw (#2720) | 解决内存泄漏、CPU 自旋、会话卡死等长期运行问题 |
| **本地模型与推理优化** | NanoClaw (#2109)、PicoClaw (#2718)、LobsterAI (#866) | 支持 DeepSeek 推理模式、Opus 长上下文、技能 Token 压缩 |
| **通道级细粒度控制** | NanoBot (#3487)、CoPaw (#3947)、Moltis (#927) | 按平台配置回复行为、认证策略、消息格式 |
| **安全边界强化** | IronClaw (WASM 沙箱)、Moltis (#924)、NanoClaw (OneCLI 凭证注入) | 防止沙箱逃逸、敏感数据泄露、未授权主机访问 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|--------|--------|--------------|
| **OpenClaw** | 全能型自主代理 | 开发者/极客 | 混合运行时，强扩展性，弱隔离 |
| **NanoBot** | 轻量级多通道 Bot | 企业运营者 | 通道抽象层，飞书/微信优先 |
| **IronClaw** | 安全优先的企业级代理 | 安全敏感组织 | WASM 组件模型，策略中心化 |
| **NanoClaw** | 个人助理 + MCP 集成 | 个体开发者 | OneCLI 安全凭证，远程 MCP |
| **Moltis** | 多模态交互（语音/电话） | 客服/外呼场景 | Twilio 集成，语音人设 |
| **CoPaw** | 多智能体协作工作台 | 团队用户 | CJK 记忆优化，前端体验驱动 |

---

## 6. 社区热度与成熟度

- **快速迭代阶段**（功能扩张期）：  
  **OpenClaw**（高 Issue 密度）、**IronClaw**（Reborn 重构）、**PicoClaw**（nightly 构建）—— 适合前沿开发者，但稳定性风险高。

- **质量巩固阶段**（生产优化期）：  
  **NanoBot**（高 PR 合并率）、**NanoClaw**（22/50 PR 合并）、**Moltis**（安全补丁连发）—— 适合企业部署，注重可靠性。

- **生态整合阶段**（平台化）：  
  **LobsterAI**（多模型支持）、**CoPaw**（Tauri 桌面端）—— 向独立应用演进，降低使用门槛。

---

## 7. 值得关注的趋势信号

1. **从“单代理”到“可编排工作流”**：  
   Moltis（子代理配置 #906）、CoPaw（多智能体隔离 #3936）、IronClaw（能力主机）均指向**代理即服务（Agent-as-a-Service）**架构，开发者需关注工作流引擎设计。

2. **安全成为核心竞争壁垒**：  
   OneCLI 凭证注入（NanoClaw）、WASM 沙箱（IronClaw）、沙箱逃逸修复（Moltis）表明，**生产级部署必须内置零信任机制**。

3. **本土化模型集成加速**：  
   LobsterAI（小米/百度）、NanoBot（小米模型 #3518）反映**国产大模型生态正深度融入开源栈**，开发者应预留多 provider 扩展点。

4. **用户体验精细化倒逼前端重构**：  
   CoPaw（Tauri 2.x）、Moltis（语音人设）、NanoBot（线程化回复）显示，**终端用户体验已成为留存关键**，CLI-only 项目将边缘化。

> **对开发者的建议**：优先选择具备**明确安全边界**（如 IronClaw/NanoClaw）或**强通道抽象**（如 NanoBot）的项目作为基础架构；若追求功能广度，可基于 OpenClaw 二次开发，但需自建稳定性监控。

---  
**报告生成时间**：2026-04-30  
**数据来源**：各项目 GitHub 仓库公开动态

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-04-30）

---

## 1. 今日速览

NanoBot 社区活跃度持续高位运行，过去24小时内共处理 **38条 PR**（26条已合并/关闭，12条待合并）和 **12条 Issues**（8条关闭，4条新开），显示出高效的协作节奏与快速响应能力。项目于今日发布 **v0.1.5.post3** 版本，标志着对话线程支持成为平台一等公民，尤其在飞书（Feishu）群组中实现会话隔离。核心功能迭代、多账户支持、安全加固与工作流增强成为本轮开发重点，整体项目健康度优秀。

---

## 2. 版本发布

### 🐈 **nanobot v0.1.5.post3** 正式发布 🎉

本次发布合并了 **57个 PR**，引入 **12位新贡献者**，核心聚焦于**对话线程化（threaded conversations）** 的深度支持：

- **飞书群组话题隔离**：每个群组话题现在拥有独立会话上下文，避免跨话题污染。
- **回复行为一致性**：修复了在群组中强制启用 `reply_in_thread` 而忽略 `replyToMessage` 配置的问题（#3533）。
- **流式卡片与工具提示对齐**：确保 streaming card、tool-hint 等消息类型也遵循线程回复逻辑（#3543）。

> ⚠️ **迁移注意**：若您依赖旧版群组消息的平铺回复行为，请检查 `replyToMessage` 配置是否按预期生效；建议测试飞书通道的线程交互逻辑。

🔗 [Release v0.1.5.post3](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post3)

---

## 3. 项目进展

今日合并/关闭的关键 PR 推动多项核心能力落地：

| 功能领域 | PR | 说明 |
|--------|----|------|
| **通道增强** | [#3543](https://github.com/HKUDS/nanobot/pull/3543) | 修复飞书群组中 streaming card 和 tool-hint 无视 `replyToMessage` 的问题，统一线程回复逻辑 |
| | [#3542](https://github.com/HKUDS/nanobot/pull/3542) | 微信个人号通道支持**多账户同时运行**，保持向后兼容 |
| | [#3487](https://github.com/HKUDS/nanobot/pull/3487) | 实现 `sendProgress`/`sendToolHints` 的**按通道独立配置**，提升灵活性 |
| **代理架构** | [#3532](https://github.com/HKUDS/nanobot/pull/3532) | 子代理（subagent）现继承父代理的 `max_iterations` 配置，避免硬编码限制 |
| | [#3508](https://github.com/HKUDS/nanobot/pull/3508) | 内存历史文件（`history.jsonl`）写入改为**原子操作**，防止崩溃导致数据损坏 |
| **工具与技能** | [#3505](https://github.com/HKUDS/nanobot/pull/3505) | 新增 Olostep 作为 Web 搜索后端 provider |
| | [#3457](https://github.com/HKUDS/nanobot/pull/3457) | 内置 `create-instance` 技能，支持通过对话创建新 bot 实例 |
| **安全加固** | [#3529](https://github.com/HKUDS/nanobot/pull/3529) | 增强工具调用安全防护，修复路径遍历检测与敏感参数脱敏逻辑 |

> ✅ 整体项目在**多通道支持、代理可控性、数据可靠性、安全边界**四个维度取得实质性进展。

---

## 4. 社区热点

### 🔥 高关注度 Issue：飞书群组线程回复行为异常（#3533）

- **作者**：@CashSoldier  
- **评论数**：0（但触发紧急修复 PR #3543）  
- **核心诉求**：在飞书群组中，即使配置了 `replyToMessage`，系统仍强制启用 `reply_in_thread=True`，导致每条回复都创建新话题，破坏对话连贯性。  
- **影响范围**：所有使用飞书群组且希望控制回复层级的用户。  
- **响应速度**：问题提出后24小时内即被定位并提交修复 PR，体现团队对关键通道问题的高度重视。

🔗 [Issue #3533](https://github.com/HKUDS/nanobot/issues/3533)

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| ⚠️ 高 | [#3533](https://github.com/HKUDS/nanobot/issues/3533) | 飞书群组忽略 `replyToMessage` 配置，强制线程回复 | ✅ 已修复（PR #3543） |
| ⚠️ 高 | [#3517](https://github.com/HKUDS/nanobot/issues/3517) | 微信定时任务因缺失 `context_token` 静默丢消息 | ✅ 已修复（PR #3517） |
| ⚠️ 中 | [#2590](https://github.com/HKUDS/nanobot/issues/2590) | v0.1.4.post6 后内置 Minimax provider 失效 | 🟡 仍开放，需进一步排查 API 兼容性 |
| ⚠️ 中 | [#1068](https://github.com/HKUDS/nanobot/issues/1068) | 本地模型出现“幻觉”行为，疑似配置或代码问题 | 🟡 长期未闭环，需更多用户复现信息 |

> 💡 建议维护者优先跟进 #2590（Minimax provider 回归）和 #1068（本地模型稳定性），二者均为跨版本持续性痛点。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 潜在路线图信号 |
|--------|-------|----------------|
| 支持小米模型 | [#3518](https://github.com/HKUDS/nanobot/issues/3518) | 用户明确呼吁扩展国产大模型支持，可能纳入下一版本 provider 扩展计划 |
| 按渠道配置进度提示 | [#3452](https://github.com/HKUDS/nanobot/issues/3452) | ✅ 已被 PR #3487 实现，反映用户对**细粒度通道控制**的强烈需求 |
| SwarmScore 集成 | [#3512](https://github.com/HKUDS/nanobot/issues/3512) | 第三方提出 AI 代理信誉评分系统对接，属生态扩展方向，可评估优先级 |

> 📌 下一版本可能重点：**多模型 provider 扩展**（小米、更多国产 API）、**AI 辅助开发流程**（如 CLAUDE.md 引导）、**工作流引擎标准化**（六阶段结构已初步实现）。

---

## 7. 用户反馈摘要

- **满意点**：
  - 线程化对话在飞书场景下显著提升多话题管理体验（v0.1.5.post3 发布说明）。
  - 多微信账户支持解决了个人用户多 bot 运营痛点（#3542）。
  - 原子化历史写入避免数据丢失，增强生产环境可靠性（#3508）。

- **痛点与诉求**：
  - **配置灵活性不足**：用户多次呼吁将全局参数（如 `sendProgress`）下放至通道级别（#3452 → 已解决）。
  - **第三方 provider 兼容性**：Minimax、Anthropic 非标准端点等配置问题频发（#2590, #3095），需完善文档与错误提示。
  - **本地模型稳定性**：用户反馈“初期正常，后期 hallucinate”，怀疑内存或上下文管理缺陷（#1068），亟需可复现案例。

---

## 8. 待处理积压

| Issue/PR | 创建日期 | 状态 | 提醒 |
|---------|----------|------|------|
| [#2590](https://github.com/HKUDS/nanobot/issues/2590) | 2026-03-28 | OPEN | Minimax provider 在 post6 版本失效，影响生产用户，建议优先排查 API 变更或认证逻辑 |
| [#1068](https://github.com/HKUDS/nanobot/issues/1068) | 2026-02-23 | OPEN | “Local hallucinating” 问题长期未解，需收集日志或提供调试指南 |
| [#877](https://github.com/HKUDS/nanobot/issues/877) | 2026-02-20 | OPEN | 用户对 unreleased 版本体验负面（“too many questions and incapable”），反映 nightly 分支质量管控需加强 |

> 🛎️ **维护者行动建议**：对 #2590 和 #1068 主动联系作者获取更多上下文；考虑在文档中增加“本地模型调优指南”以减少误报。

--- 

**报告生成时间**：2026-04-30  
**数据来源**：GitHub HKUDS/nanobot 仓库公开数据

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-04-30）

---

## 1. 今日速览

过去24小时内，Zeroclaw 社区保持高活跃度，共产生 **50条 Issues 更新**（新开/活跃30条，关闭20条）和 **50条 PR 更新**（仅1条合并，49条待合并），反映出开发节奏密集但合并审慎。尽管无新版本发布，核心功能持续优化，尤其在配置管理、通道稳定性与安全策略方面取得实质性进展。社区对默认模型配置、Telegram语音支持及内存会话一致性问题高度关注，显示出对生产可用性的强烈诉求。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版本仍为 v0.6.9，团队正集中修复关键缺陷并为下一版本（预计 v0.7.0）积累功能改进。

---

## 3. 项目进展

今日仅 **1个 PR 被合并**，但多个高价值 PR 进入活跃审查阶段，推动关键能力落地：

- **#6035（已合并）**：修复 ACP 通道中工具调用输出格式化错误，提升外部系统集成可靠性（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6035)）。
- **#6179（XL 规模，待合并）**：实现 Web 配置界面与 CLI 的 CRUD 接口统一，解决配置漂移问题，是迈向配置一致性的重要一步（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6179)）。
- **#6167（XL 规模，待合并）**：完成 ACP 协议 v1 实现，恢复与 Nori 等外部消费者的兼容性，增强生态互操作性（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6167)）。
- **#6228（新提交）**：修复会话键 sanitization 导致的历史记录断裂问题，直接影响多通道会话连续性（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6228)）。

整体来看，项目在**配置治理、通道协议标准化、会话一致性**三大方向稳步推进。

---

## 4. 社区热点

以下 Issues/PRs 引发最多讨论，反映核心用户痛点：

- **#6123（15 评论）**：[Bug] 全新安装后 `default_model` 配置失效，阻塞工作流（S1 严重性）。用户报告 LXC 环境下无法连接远程 Ollama，暴露配置初始化路径缺陷（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)）。
- **#5146（6 评论，👍1）**：[Feature] 通过技能编译减少 Token 消耗。用户指出每次调用天气技能都发送 400+ 行 SKILL.md 内容，效率极低，呼吁预编译或缓存机制（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)）。
- **#5550（6 评论）**：[Bug] 自动保存的对话记忆因 `session_id` 不匹配而无法召回，导致上下文丢失（S2 严重性），影响多轮对话体验（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5550)）。
- **#6210（2 评论）**：SkillForge 自动生成 TOML 时注入非 schema 字段（如 `source`, `owner`），可能引发解析冲突，需与 #6128 协同修复（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6210)）。

这些讨论凸显用户对**安装体验、资源效率、记忆可靠性**的高度敏感。

---

## 5. Bug 与稳定性

按严重程度排序的关键问题：

| 严重性 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| **S0** | #5518 | `forbidden_path_argument` 误判 `/dev/null` 等安全重定向为目标路径，阻断合法命令 | ✅ 已有 PR #5939 修复 |
| **S0** | #5415 | 聊天上下文泄露至定时任务，存在数据隔离风险 | 🔄 需复现，状态 blocked |
| **S1** | #6123 | 新安装后 `default_model` 不生效，工作流完全阻塞 | 🔄 开放中，高优先级 |
| **S1** | #5475 | Copilot + Telegram 组合触发 "Invalid parameter" 错误 | 🔄 需复现，状态 blocked |
| **S2** | #5550 | 自动保存记忆因 `session_id` 不一致无法召回 | 🔄 开放中，影响 UX |
| **S2** | #6153 | Matrix 语音转录失败："Unsupported audio format '.'" | 🔄 开放中，通道功能降级 |

> 注：S0=数据/安全风险，S1=工作流阻塞，S2=功能降级

---

## 6. 功能请求与路线图信号

用户明确提出且已有对应 PR 的功能需求，极可能纳入 v0.7.0：

- **✅ 高概率纳入**：
  - **Web 配置增强**：#6179（配置 CRUD 接口）、#6218（标记免费模型）、#6217（记忆行跳转聊天）、#6220（聊天运行状态 UI）—— 构成完整配置与交互体验升级。
  - **Telegram 智能截断**：#6225 提出按 Markdown 结构拆分长消息，解决代码块截断丑陋问题。
  - **技能元数据校验**：#6128 添加 `deny_unknown_fields` 防止静默丢弃 typo 字段，提升开发体验。

- **中长期候选**：
  - **技能编译优化**（#5146）：虽无直接 PR，但 Token 效率问题已被核心开发者认可，可能作为 v0.8 重点。
  - **语音唤醒支持**：#5861 报告编译失败，#5978 正重构语音管道，有望在 v0.7 恢复功能。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **痛点**：
  - “全新安装就报错，根本跑不起来”（#6123）—— 安装体验差，阻碍新用户入门。
  - “每次问天气都要等 8 秒，明明 HTTP 请求只要 0.1 秒”（#5146）—— LLM 过度推理导致延迟不可接受。
  - “Docker 里跑不了绝对路径脚本，文档没说清楚”（#5905 相关）—— 沙箱权限设计缺乏透明度。

- **满意点**：
  - “ACP 协议修复后终于能和我们的监控系统对接了”（#6035 评论隐含）。
  - “Web UI 的内存管理比 v0.6.7 清晰多了”（#6073 关闭后反馈）。

- **典型场景**：
  - 多 LXC 容器部署（Ollama 与 ZeroClaw 分离）。
  - 企业内通过 Telegram/Matrix 集成自动化运维。
  - 使用 Codex CLI 进行本地代码生成。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先处理：

- **#5289（P1，2026-04-04 提交）**：Bedrock 提供程序错误使用 `x-api-key` 而非 AWS SigV4，导致 403 错误。已有 2 评论，状态 `in-progress` 但无更新（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5289)）。
- **#5360（P1，2026-04-05 提交）**：`codex_cli` 工具传递废弃 `-q` 标志，已有修复 PR #5361 但 24 天未合并（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5360)）。
- **#5470（P2，2026-04-07 提交）**：多通道运行时出现内存重复保存、消息乱序等“诡异问题”，状态 `blocked` 需复现，影响稳定性信心（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5470)）。

> 建议：对 P1 级安全问题（#5289, #5360）尽快合并修复，避免生产环境事故。

--- 

**报告生成时间**：2026-04-30  
**数据来源**：GitHub Zeroclaw 仓库公开数据

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-04-30）

---

## 1. 今日速览

PicoClaw 在 2026-04-30 继续保持高活跃度，24 小时内产生 **13 条 Issues 更新**（12 新开/活跃，1 关闭）和 **20 条 PR 更新**（15 待合并，5 已合并/关闭），并发布了一个 nightly 构建版本。社区对多模态支持、通道稳定性及 DeepSeek 推理模型兼容性等问题高度关注。整体开发节奏紧凑，核心功能持续迭代，但部分关键 Bug 尚未闭环，需警惕稳定性风险。

---

## 2. 版本发布

✅ **Nightly Build v0.2.7-nightly.20260430.a36472b5 已发布**  
此为自动化构建版本，可能包含未稳定功能，建议仅用于测试环境。  
🔗 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)  
> ⚠️ 注意：该版本未标记为正式 Release，生产环境请谨慎使用。

---

## 3. 项目进展

今日有 **5 个 PR 被合并或关闭**，推动多项关键改进：

- **#2700**（已合并）：修复 Docker 构建流程，恢复 `make docker-build` 功能，修正 Go 版本与构建指令缺失问题 → 提升 CI/CD 可靠性。  
- **#2710 / #2711 / #2709 / #2712**（部分合并/关闭）：统一修复前端在非安全上下文（HTTP）下复制按钮的 Clipboard API 异常，增强 WebUI 兼容性。  
- **#2714 → #2715**（重构后重提）：将多用户群聊中消息按发送者归属历史上下文，解决共享会话导致的角色混淆问题（#2702），已拆分为细粒度提交便于审查。

这些合并在 **通道稳定性、多用户支持、部署体验** 方面显著推进项目成熟度。

---

## 4. 社区热点

🔥 **最活跃 Issue：#2171**（9 条评论）  
> 【Refactor】建议将所有 OpenAI 兼容端点迁移至 OpenAI Responses API  
作者 @kunalk16 指出当前使用 Chat Completions API 不符合 OpenAI 官方推荐，长期存在维护风险。社区正评估迁移成本与收益。  
🔗 https://github.com/sipeed/picoclaw/issues/2171

💬 **高关注度讨论：#2208**（8 👍，已关闭）  
关于“弃用 TUI 并迁移核心功能至 CLI”的 RFC 引发广泛共鸣，反映用户对轻量化、可脚本化接口的强烈需求，可能影响未来架构方向。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重性 | Issue | 描述 | 是否有 Fix PR |
|--------|------|------|---------------|
| 🔴 高 | #2720 | Gateway 启动时因 PID 文件被无关进程复用导致崩溃循环（Singleton 检查未验证进程身份） | ❌ 无 |
| 🔴 高 | #2704 | 钉钉 SDK 并发 Bug 导致 Gateway panic 停止（`dingtalk-stream-sdk-go` 竞态条件） | ❌ 无（上游依赖问题） |
| 🟠 中 | #2718 | DeepSeek 等非多模态模型收到图片历史时返回 `400 unknown variant image_url` | ✅ 有（#2717 已提交检测逻辑） |
| 🟠 中 | #2716 | Telegram 发送 SVG 文件失败（`inferMediaType` 错误映射为 `SendPhoto`） | ❌ 无 |
| 🟡 低 | #1042 | `exec` 工具 `guardCommand` 误判非路径命令为越权访问（如 `curl wttr.in/Beijing`） | ❌ 长期未修复（自 2026-03-04） |

> ⚠️ 建议优先处理 #2720 和 #2704，二者均可能导致服务不可用。

---

## 6. 功能请求与路线图信号

以下功能请求具备高实现可能性，已有对应 PR 或明确技术路径：

- **Slack Webhook 输出通道**（#2719）：支持通过 Incoming Webhook 推送消息，含 Block Kit 格式化 → 已提交 PR，待审。
- **MQTT 通道支持**（#2705）：新增物联网场景通信能力 → PR 已开，Go 实现中。
- **OpenVINO 本地推理支持**（#2703）：集成 Intel NPU/GPU 加速 → 面向边缘部署，战略价值高。
- **.env 文件支持自定义技能配置**（#2623）：用户呼吁环境变量注入机制 → 尚未有 PR，但需求清晰。
- **WhatsApp 编译构建支持**（#2625）：Raspberry Pi 用户痛点 → 需调整构建脚本，优先级较低。

预计 **Slack Webhook、MQTT、OpenVINO** 有望纳入 v0.2.8 或 v0.3.0。

---

## 7. 用户反馈摘要

从 Issues 评论提炼真实声音：

- **满意点**：  
  - WebUI 进展迅速，逐步替代 TUI（#2208 获 8 👍）  
  - Docker 构建修复及时（#2700 获社区认可）

- **痛点与不满**：  
  - “在树莓派 Zero 2 上无法更新带 WhatsApp 支持的版本，每次都要手动编译”（#2625）  
  - “DeepSeek thinking mode 用不了，只能关掉推理，体验大打折扣”（#2706）  
  - “群聊里所有人混在一个会话，完全分不清谁说了什么”（#2702 → #2715）  
  - “钉钉用着用着就崩了，日志全是 panic，根本没法生产用”（#2704）

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，需维护者关注：

- **#1042**（2026-03-04 开启）：`exec` 工具安全守卫误报，影响天气等技能正常使用 → **超 55 天无进展**  
- **#2171**（2026-03-30 开启）：OpenAI Responses API 迁移提案 → **超 30 天，9 条评论未决**  
- **#2548**（2026-04-16 开启）：多认证凭据冲突错误 → **14 天无维护者回应**  
- **#2624**（2026-04-22 开启）：OpenAI 兼容嵌入支持 → **8 天未审，可能阻塞 vLLM 用户**

> 📌 建议：设立“陈旧 Issue 清理日”，对超 30 天无响应的 enhancement/bug 主动跟进或标记 `needs-info`。

--- 

**项目健康度评估**：⭐⭐⭐⭐☆（4/5）  
活跃开发中，功能迭代积极，但关键稳定性问题与积压 Issue 需加强治理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-04-30）

---

## 1. 今日速览

NanoClaw 在 2026-04-30 继续保持高活跃度，社区贡献与核心开发并行推进。过去24小时内共处理 **50 条 PR**（22 条已合并/关闭，28 条待合并），显示出强劲的代码迭代节奏；同时新增 **3 条 Issues**，其中 2 条为开放状态，反映用户持续反馈使用中遇到的问题。尽管无新版本发布，但多项关键功能（如 Google Gemini 支持、MCP 远程服务、上下文压缩优化）已进入合并或待审阶段，项目整体处于快速演进期。

---

## 2. 版本发布

**无新版本发布**。当前开发重点集中在功能增强与稳定性修复，预计下一版本将整合今日合并的多项核心改进。

---

## 3. 项目进展

今日共 **22 条 PR 被合并或关闭**，显著推进了以下方向：

- **多模型支持扩展**：  
  ✅ 合并了多个 Google Gemini 提供程序实现（#2135、#2137），为用户引入 Claude 之外的 LLM 选项，增强平台灵活性。  
  🔗 [PR #2135](https://github.com/qwibitai/nanoclaw/pull/2135)

- **OneCLI 安全集成标准化**：  
  ✅ 新增 Gmail（#1961）与 Google Calendar（#1964）MCP 工具，严格遵循 v2 不变量——容器不接收原始 API 密钥，全部通过 OneCLI 注入凭证，提升安全性与可审计性。  
  🔗 [PR #1961](https://github.com/qwibitai/nanoclaw/pull/1961) | [PR #1964](https://github.com/qwibitai/nanoclaw/pull/1964)

- **上下文管理与性能优化**：  
  ✅ 修复 Opus 4.7 下 `thinking.display` 默认行为变更导致思维链不可见问题（#2132）；✅ 实现 `AGENT_AUTO_COMPACT_WINDOW` 环境变量向容器传递（#2138），解决用户无法自定义压缩阈值痛点（呼应 Issue #2109）。  
  🔗 [PR #2132](https://github.com/qwibitai/nanoclaw/pull/2132) | [PR #2138](https://github.com/qwibitai/nanoclaw/pull/2138)

- **MCP 架构增强**：  
  ✅ 支持远程 HTTP/SSE 类型的 MCP 服务器配置（#2131），打破仅本地 stdio 限制，为分布式部署铺路。  
  🔗 [PR #2131](https://github.com/qwibitai/nanoclaw/pull/2131)

> 项目整体向“多模型、安全集成、可扩展 MCP”三大目标迈出关键步伐。

---

## 4. 社区热点

**最活跃 Issue**：  
[#2139 API Error: 400 - invalid_request_error - Could not process image](https://github.com/qwibitai/nanoclaw/issues/2139)  
- **作者**：@omniscient  
- **场景**：用户在会计软件中上传手机图片处理，首次成功，第二次（由他人发送）后 bot 完全失效。  
- **诉求分析**：暴露了图像上传流程中的会话状态管理或权限隔离缺陷，可能涉及多用户并发、文件所有权或临时资源清理问题。该问题直接影响核心文档处理能力，需优先排查。

**高关注度 PR 集群**：  
由 @andrebrov 主导的 **11 条 PR**（#2123–#2133）集中解决 SDK 会话管理、消息投递、数据库并发等底层稳定性问题，虽单条评论数不高，但 collectively 构成今日最大技术投入，表明团队正系统性加固运行时可靠性。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 关联 PR |
|--------|--------|------|--------|
| ⚠️ 高 | 图像上传后 bot 完全停止工作（#2139） | 🟡 未修复 | — |
| ⚠️ 高 | Opus 4.7 上下文压缩过早（200k vs 支持 1M），用户无法有效利用长上下文（#2109） | ✅ 已修复 | [#2138](https://github.com/qwibitai/nanoclaw/pull/2138) |
| ⚠️ 中 | 容器无条件覆盖 `CLAUDE_CODE_AUTO_COMPACT_WINDOW`，阻碍实验调优（#1820） | ✅ 已关闭（推断已修复） | — |
| ⚠️ 中 | 大尺寸手机图片直接存入 inbox，导致存储与传输开销过大 | ✅ 已修复 | [#2124](https://github.com/qwibitai/nanoclaw/pull/2124) |
| ⚠️ 低 | `send_message` 导致用户回复重复显示 | ✅ 已修复 | [#2123](https://github.com/qwibitai/nanoclaw/pull/2123) |

> 注：#1820 虽无显式 fix PR，但其描述问题与 #2138 高度相关，且已被关闭，视为已解决。

---

## 6. 功能请求与路线图信号

- **Google Gemini 原生支持**：已通过多轮 PR（#2135–#2137）实现，预计将作为下一版本亮点功能发布，满足用户对非 Claude 模型的需求。
- **知识库/wiki 功能雏形**：[#2133](https://github.com/qwibitai/nanoclaw/pull/2133) 引入 `knowledge/raw/` 目录，为后续结构化知识编译打下基础，暗示项目正从“任务执行”向“持续学习”演进。
- **远程 MCP 服务器支持**（#2131）和 **Apple Silicon + Colima 启动优化**（#2134）表明项目正加强跨平台与云原生部署能力，响应开发者多样化环境需求。

---

## 7. 用户反馈摘要

- **正面反馈**：用户对 NanoClaw 的“趣味性”和集成便捷性表示认可（#2139 提及“having lots of fun”），尤其在个人助理工作流中 Gmail/Calendar 集成价值明确（#1961/#1964）。
- **核心痛点**：
  - **上下文长度限制误配**：Opus 4.7 用户抱怨压缩阈值远低于模型能力（#2109），影响长文档处理体验。
  - **多用户/会话隔离不足**：图像上传失败可能源于会话状态污染或权限混淆（#2139），需加强资源隔离机制。
  - **Headless 环境体验差**：Linux 无图形界面下登录提示误导用户（#2128），已被修复，反映边缘场景覆盖不足。

---

## 8. 待处理积压

- **长期未响应 Issue**：  
  暂无超过 30 天未响应的高优先级 Issue。#1820 已关闭，#2109 和 #2139 均在 24 小时内获得社区或开发者响应，响应效率良好。

- **待合并 PR 积压**：  
  当前 **28 条开放 PR** 中，#2136（Gemini 支持）、#2134（Apple Silicon 支持）、#2133（知识库）等功能性 PR 待审，建议维护者优先 review 以加速功能落地。

> 项目健康度评估：⭐⭐⭐⭐☆（4.5/5）  
> 高活跃度、快速响应、架构持续演进，仅需关注图像上传等关键路径稳定性问题。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-04-30）

---

## 1. 今日速览

IronClaw 项目在 Reborn 架构重构的关键阶段持续高强度推进，过去24小时表现出极高的开发活跃度：共处理 **50 条 PR 更新**（32 条已合并/关闭，18 条待合并）和 **26 条 Issues 更新**（仅 1 条关闭），并发布新版本 `v0.27.0`。核心团队聚焦于 Reborn 子系统的模块化落地，包括能力主机、WASM 运行时、HTTP 出口、密钥管理等关键基础设施。尽管功能迭代迅猛，但 staging 环境暴露出多个 P2 级 UI/UX Bug，需警惕用户体验回归风险。

---

## 2. 版本发布

### 🔖 [ironclaw-v0.27.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.27.0)（2026-04-29）

**主要更新：**
- **engine-v2**: 引入 v2 运行时合约的**标准能力状态词汇表**（[#2825](https://github.com/nearai/ironclaw/pull/2825)），统一能力生命周期语义。
- **engine-v2**: 在 prompt、runtime、bridge projection 和 tool surface 之间**集中化 action-vs-capability 策略控制面**，提升安全边界一致性。

> ⚠️ **无破坏性变更说明**，但作为 Reborn 架构过渡版本，建议开发者关注后续 `ironclaw-reborn` 独立二进制发布计划（见 [#3069](https://github.com/nearai/ironclaw/issues/3069)）。

---

## 3. 项目进展

今日共 **32 条 PR 被合并或关闭**，核心进展集中在 Reborn 架构的底层服务构建：

- ✅ **能力系统基础**：`ironclaw_capabilities` crate 完成初步集成（[#3071](https://github.com/nearai/ironclaw/pull/3071)），提供 `CapabilityHost` 调用入口与授权拦截机制。
- ✅ **WASM 运行时重构**：基于 WIT/component-model 的新 WASM 工具运行时（[#3097](https://github.com/nearai/ironclaw/pull/3097)）替代旧 JSON-ABI 实现，提升类型安全与跨语言兼容性。
- ✅ **网络与密钥边界**：`ironclaw_network` 与 `ironclaw_secrets` 完成底层抽象（[#3077](https://github.com/nearai/ironclaw/pull/3077)），支持 DNS/SSRF 防护与一次性密钥租赁。
- ✅ **共享 HTTP 出口**：统一 WASM、Script、MCP 的 HTTP 外联通道（[#3098](https://github.com/nearai/ironclaw/pull/3098)），集中策略检查与资源计量。
- ✅ **内存与存储子系统**：`ironclaw_memory` 完成文档存储边界定义（[#3078](https://github.com/nearai/ironclaw/pull/3078)）及搜索插件接口（[#3079](https://github.com/nearai/ironclaw/pull/3079)）。

> 📌 整体来看，Reborn 架构已从“合约设计”进入“服务实现”阶段，预计未来两周将完成核心服务图组装（见 [#3087](https://github.com/nearai/ironclaw/issues/3087)）。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#2987](https://github.com/nearai/ironclaw/issues/2987) — *Track Reborn architecture landing strategy and grouped PR plan*  
- **评论数：38** | **标签：enhancement, risk: high, reborn, EPIC**
- **分析**：该 Issue 是 Reborn 架构落地的总纲，明确采用“分组 PR + staging 分支集成”策略避免巨型 PR。社区高度关注其执行节奏与依赖管理，尤其是 PR1b（信任类策略引擎）被提升为 PR3 的前置依赖（[#3012](https://github.com/nearai/ironclaw/issues/3012) 已关闭，任务完成）。

### 🔥 高价值功能提案：[#3045](https://github.com/nearai/ironclaw/issues/3045) — *Add runtime presets and effective runtime policy*  
- **评论数：3** | **标签：enhancement, reborn**
- **分析**：用户呼吁提供“开箱即用”的运行时预设（如开发模式、生产模式），避免手动配置数十项低层策略。此需求直指 Reborn 的易用性痛点，已被纳入路线图，预计通过 `RuntimePolicy` 配置层实现。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|--------|------|------|------|
| **P2** | [#3082](https://github.com/nearai/ironclaw/issues/3082) | 启用工具自动审批后，系统卡在“Restarting IronClaw”界面 | ❌ 无 fix PR |
| **P2** | [#3083](https://github.com/nearai/ironclaw/issues/3083) | 用户管理允许重复创建用户（缺少加载状态与防抖） | ❌ 无 fix PR |
| **P2** | [#3081](https://github.com/nearai/ironclaw/issues/3081) | Portfolio 扩展显示误导性“Configure”按钮（实际无需配置） | ❌ 无 fix PR |
| **Canary 失败** | [#3075](https://github.com/nearai/ironclaw/issues/3075) / [#3074](https://github.com/nearai/ironclaw/issues/3074) | `public-smoke` 与 `persona-rotating` 自动化测试失败（Anthropic 提供方） | ⚠️ 需排查模型接口变更 |

> 💡 所有 P2 Bug 均出现在 staging 环境（v0.27.0），建议优先修复重启流程阻塞问题，避免影响用户启用关键功能。

---

## 6. 功能请求与路线图信号

- **非图像附件支持**（[#1341](https://github.com/nearai/ironclaw/issues/1341)）：长期悬而未决的 Web 网关功能请求，当前仅支持图片上传。随着 Reborn 传输层抽象完成（[#3099](https://github.com/nearai/ironclaw/pull/3099)），该需求技术路径已清晰，**有望在 v0.28 纳入**。
- **本地开发者运行时配置**（[#3044](https://github.com/nearai/ironclaw/issues/3044)）：简化本地编码代理启动流程，与 `ironclaw-reborn` 二进制发布（[#3069](https://github.com/nearai/ironclaw/issues/3069)）强相关，**已列入 Reborn 开发者体验优化清单**。
- **垂直切片集成测试**（[#3067](https://github.com/nearai/ironclaw/issues/3067)）：推动 Reborn 端到端验证，Phase 1 测试已随 [#3076](https://github.com/nearai/ironclaw/pull/3076) 落地，**后续将扩展至完整工作流**。

---

## 7. 用户反馈摘要

从 Issues 评论提炼关键用户声音：

- **正面反馈**：Reborn 的模块化设计获得核心贡献者认可，“分组 PR 策略显著降低 review 负担”（@serrrfirat 在 #2987 中确认）。
- **痛点反馈**：
  - “当前手动配置 grants/mounts/network policy 太复杂，新手根本无法启动本地代理”（#3044 隐含诉求）。
  - “自动审批重启卡死让我们不敢在生产环境启用该功能”（#3082 用户报告）。
  - “PDF/文档附件是基本需求，现在只能截图上传，体验极差”（#1341 长期诉求）。

---

## 8. 待处理积压

| Issue/PR | 标题 | 积压天数 | 提醒 |
|---------|------|--------|------|
| [#1341](https://github.com/nearai/ironclaw/issues/1341) | Support non-image file attachments in web gateway | 43+ 天 | **高优先级用户体验缺陷**，建议 v0.28 解决 |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) | Ship Reborn as a separate ironclaw-reborn binary | 1 天 | 需明确 CLI 分发策略与构建流水线改造 |
| [#3068](https://github.com/nearai/ironclaw/issues/3068) | Preserve brokered HTTP credential injection | 1 天 | **Cutover 阻塞项**，必须确保 V1 功能不退化 |

> 🔔 维护者请注意：Reborn 架构虽进展迅速，但 **用户可见功能回归**（如附件支持、UI 稳定性）可能影响社区信心，建议平衡底层重构与上层体验投入。

---  
*数据来源：GitHub IronClaw 仓库（2026-04-29 至 2026-04-30）*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-04-30）

---

## 1. 今日速览

LobsterAI 在 2026-04-29 至 2026-04-30 期间表现出**高活跃度**，共产生 28 条 PR 更新（含 4 条已合并/关闭）和 1 条新 Issue，并发布了一个正式版本。项目整体处于**快速迭代与功能增强阶段**，重点聚焦于认证体系扩展、文档优化及协作会话体验改进。尽管存在部分长期未合并的 PR（标记为 stale），但核心团队对主干分支的维护响应迅速，版本发布节奏稳定。

---

## 2. 版本发布

### 🔖 LobsterAI v2026.4.29 正式发布  
**发布时间**：2026-04-29  
**主要变更**：
- **修复**：更新火山引擎（Volcengine）与通义千问（Qwen）的默认模型配置（[#1828](https://github.com/netease-youdao/LobsterAI/pull/1828)）
- **修复**：移除安装状态中不准确的“自动重启”提示信息（[#1](https://github.com/netease-youdao/LobsterAI/pull/1)）

> ⚠️ **无破坏性变更**，建议所有用户升级以获取更稳定的第三方模型兼容性与更清晰的用户引导。

---

## 3. 项目进展

今日共 **4 个 PR 被合并/关闭**，推动多项关键能力落地：

| PR | 类型 | 关键贡献 |
|----|------|--------|
| [#1876](https://github.com/netease-youdao/LobsterAI/pull/1876) | 功能发布 | 集成 ChatGPT OAuth 登录、新增小米 Mimo / 百度千帆 Coding Plan 支持、升级有道云笔记技能、优化 Spec 文档结构 |
| [#1875](https://github.com/netease-youdao/LobsterAI/pull/1875) | 文档增强 | 在 `specs` 目录下添加 README，提升开发者对接口规范的理解效率 |
| [#1874](https://github.com/netease-youdao/LobsterAI/pull/1874) | 文档优化 | 重构 spec 文档结构，提升可读性与维护性 |
| [#1873](https://github.com/netease-youdao/LobsterAI/pull/1873) | UI 体验 | 调整协作启动页文本域高度自适应，改善 Windows 平台下的界面布局 |

> ✅ 项目在**多平台认证支持**、**第三方服务集成**和**开发者体验**方面取得显著进展。

---

## 4. 社区热点

### 🔥 高关注度 PR（虽为 stale，但持续活跃）

- **[#853] Markdown/JSON/JSONL 会话导出格式支持**（[@kayo5994](https://github.com/kayo5994)）  
  → 用户强烈需求结构化导出能力，便于二次处理与知识沉淀。该 PR 提出将“分享”按钮升级为“导出”面板，支持多种文本格式，**实用性高，社区呼声强烈**。

- **[#866] 实现上下文管理机制缓解“迷失中间”问题**（[@Aoxiang-001](https://github.com/Aoxiang-001)）  
  → 针对长对话中 AI 遗忘早期上下文的核心痛点，提出基于 LLM 研究论文的解决方案。**直击 OpenClaw 架构短板**，具备高优先级落地价值。

- **[#880] 消息勾选分享 + 图片品牌化功能**（[@hzshenguoshi](https://github.com/hzshenguoshi)）  
  → 增强协作会话的社交传播能力，支持选择性分享与品牌定制，**契合企业用户对外输出需求**。

> 💬 尽管这些 PR 标记为 `stale`，但其在过去 24 小时内仍有更新，表明作者仍在维护，**极有可能在下一版本中被重新评估合并**。

---

## 5. Bug 与稳定性

### 🐛 今日报告 Bug（1 条）

- **[#1877] OpenAI 认证失败（HTTP 403 - unsupported_country_region_territory）**（[@AK-blank](https://github.com/AK-blank)）  
  → **严重程度：中**  
  用户本地 Codex 可用，但 ChatGPT 登录因地域限制失败。  
  🔍 **根因**：OpenAI API 对特定国家/地区实施访问封锁，非客户端代码问题。  
  ✅ **已有缓解方案**：建议用户使用合规网络环境或切换至支持的模型提供商（如 Qwen、MiniMax 等，已在 v2026.4.29 中优化配置）。

> ❗ 虽无直接 fix PR，但项目已通过多模型支持降低对单一供应商依赖，**系统性风险可控**。

---

## 6. 功能请求与路线图信号

基于近期 PR 与 Issue，以下功能**极可能纳入下一版本路线图**：

| 功能方向 | 相关 PR | 可能性 |
|--------|--------|--------|
| **多格式会话导出**（Markdown/JSON/JSONL） | [#853](https://github.com/netease-youdao/LobsterAI/pull/853) | ⭐⭐⭐⭐☆ |
| **上下文记忆优化**（防“迷失中间”） | [#866](https://github.com/netease-youdao/LobsterAI/pull/866) | ⭐⭐⭐⭐⭐ |
| **自定义主题与品牌化分享** | [#862](https://github.com/netease-youdao/LobsterAI/pull/862), [#880](https://github.com/netease-youdao/LobsterAI/pull/880) | ⭐⭐⭐☆☆ |
| **数据库写入原子性与外键约束修复** | [#863](https://github.com/netease-youdao/LobsterAI/pull/863), [#881](https://github.com/netease-youdao/LobsterAI/pull/881) | ⭐⭐⭐⭐☆（稳定性刚需） |

> 📌 维护者可优先推进 **上下文管理** 与 **数据导出** 功能，二者均解决高频用户痛点。

---

## 7. 用户反馈摘要

从 Issue 与 PR 评论中提炼关键用户声音：

- **痛点**：
  - “ChatGPT 登录因地区限制完全不可用，希望官方提供替代方案”（[#1877](https://github.com/netease-youdao/LobsterAI/issues/1877)）
  - “长对话中 AI 经常忘记之前说过的话，重复操作” → 指向 [#866] 上下文管理需求
  - “无法导出结构化对话记录，影响工作复盘” → 指向 [#853]

- **满意点**：
  - 对新增小米、百度等国内模型支持表示欢迎（见 [#1876] 发布说明）
  - 赞赏 OAuth 登录简化流程，提升安全性

> 💡 用户明显倾向于**本土化服务集成**与**数据可移植性**，建议加强这两方面投入。

---

## 8. 待处理积压

以下重要 PR 长期未合并，需维护者重点关注：

| PR | 类型 | 积压时长 | 建议动作 |
|----|------|--------|--------|
| [#853] 多格式会话导出 | 功能增强 | >1 个月 | 高优先级，用户刚需 |
| [#866] 上下文管理 | 核心体验优化 | >1 个月 | 架构级改进，建议成立专项 |
| [#863] 数据库原子写入 | 稳定性修复 | >1 个月 | 防止数据损坏，应尽快合并 |
| [#881] 外键约束修复 | 数据一致性 | >1 个月 | 与 [#863] 同属数据层加固 |

> ⚠️ **提醒**：超过 30 天未处理的 `stale` PR 中，**4 项涉及数据安全与核心体验**，建议在下个 sprint 中集中评审。

---

**报告生成时间**：2026-04-30  
**数据来源**：[LobsterAI GitHub Repository](https://github.com/netease-youdao/LobsterAI)  
**分析师备注**：项目整体健康度良好，活跃度上升，建议加强 stale PR 清理机制以提升社区信心。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-04-30）

---

## 1. 今日速览

Moltis 项目在 2026-04-29 继续保持高活跃度，社区与核心团队协同推进多项关键功能与安全修复。过去24小时内共产生 **6 条 Issues 更新**（4 新开，2 关闭）和 **8 条 PR 更新**（5 待合并，3 已合并/关闭），并发布 **2 个新版本**（`20260429.01` 与 `20260429.02`）。整体开发节奏紧凑，重点聚焦于 **安全加固、UI 体验优化、多模态交互扩展**（如语音、电话）以及 **代码智能索引自动化**。项目健康度良好，响应迅速，Bug 修复与功能迭代并行推进。

---

## 2. 版本发布

### 🔖 Release `20260429.02` & `20260429.01`
- **发布时间**：2026-04-29（连续发布两个版本，表明紧急修复或分阶段部署）
- **关键内容推测**（基于关联 PR）：
  - ✅ **安全修复**：包含对沙箱逃逸漏洞的紧急修补（见 PR #924，已合并至主干）
  - ✅ **UI 回归修复**：修复聊天界面滚动异常问题（PR #925 针对 Issue #922）
  - ✅ **语音功能增强**：引入确定性 TTS 语音人设（Voice Personas，PR #916）
  - ✅ **导入功能扩展**：支持从 Claude Code 与 Hermes 导入配置（PR #917）
- **破坏性变更**：无明确破坏性变更，但建议用户升级以获取安全补丁。
- **迁移注意**：若使用 Docker 部署，需确认 Telegram 集成在 `v20260428.03` 后已修复（Issue #918 已关闭）。

> 📌 建议所有用户升级至 `20260429.02` 以获得最新稳定性与安全性保障。

---

## 3. 项目进展

今日合并/关闭的 PR 显著推进了项目核心能力：

| PR | 类型 | 进展说明 |
|----|------|--------|
| [#924](https://github.com/moltis-org/moltis/pull/924) | 🔒 安全修复 | 修复沙箱逃逸漏洞，强化 `RestrictedHostSandbox` 与 `FailoverSandbox` 的隔离机制，防止未授权主机访问 |
| [#916](https://github.com/moltis-org/moltis/pull/916) | 🎙️ 功能增强 | 引入“语音人设”（Voice Personas），实现 TTS 输出的身份一致性，提升多轮对话体验 |
| [#917](https://github.com/moltis-org/moltis/pull/917) | 🔄 集成扩展 | 在 Web UI 中集成 Claude Code 与 Hermes 配置导入功能，丰富生态兼容性 |

> ✅ 项目整体向前迈出关键一步：**安全性、可迁移性、语音交互成熟度**均得到实质性提升。

---

## 4. 社区热点

### 🔥 最活跃 Issue：[#922 — Chat scrolling isn't working](https://github.com/moltis-org/moltis/issues/922)
- **评论数**：3 条 | **👍 反应**：0 | **状态**：OPEN
- **背景**：用户反馈聊天界面无法正常滚动，疑似由自动滚动逻辑 hijack 用户操作导致。
- **社区诉求**：期望恢复手动滚动控制权，避免智能滚动干扰阅读历史消息。
- **响应速度**：✅ 已快速响应 —— 开发者 @Cstewart-HC 提交修复 PR #925，移除 `ResizeObserver` 滚动劫持逻辑。

> 💬 该问题反映 **UI/UX 精细化体验** 成为用户关注重点，团队响应及时，体现高优先级处理机制。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重性 | 状态 | 是否有 Fix PR |
|------|--------|------|---------------|
| [#923 — Sandboxed commands able to run on host environment](https://github.com/moltis-org/moltis/issues/923) | 🔴 高危（安全） | CLOSED | ✅ 已修复（PR #924） |
| [#918 — Telegram broken in Docker in v20260428.03](https://github.com/moltis-org/moltis/issues/918) | 🟠 中危（功能失效） | CLOSED | ✅ 已修复（版本更新） |
| [#922 — Chat scrolling isn't working](https://github.com/moltis-org/moltis/issues/922) | 🟡 低危（体验） | OPEN | ✅ 修复中（PR #925 待合并） |
| [#927 — MCP page missing re-authenticate button](https://github.com/moltis-org/moltis/issues/927) | 🟡 中危（可用性） | OPEN | ❌ 暂无 PR |
| [#919 — Model discovery fails after 30 sec](https://github.com/moltis-org/moltis/issues/919) | 🟡 中危（性能/超时） | OPEN | ❌ 暂无 PR |

> ⚠️ 建议优先处理 **#927（OAuth 重认证缺失）** 与 **#919（模型发现超时）**，二者影响核心工作流稳定性。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力功能请求：
- **[#906 — Make sub-agents configurable in WebUI](https://github.com/moltis-org/moltis/issues/906)**  
  **类型**：Enhancement | **状态**：OPEN | **作者**：@bsarkisov  
  **分析**：该请求提出在 Web UI 中可视化配置子代理（sub-agents），符合 Moltis 向“可编排 AI 工作流”演进的方向。结合近期 PR #926（新增 `/steer`、`/queue` 等控制命令），**子代理管理能力极可能纳入下一版本路线图**。

- **语音与电话集成已成趋势**：  
  PR #920（Twilio 电话支持）与 PR #916（语音人设）表明项目正积极拓展 **多模态交互边界**，未来可能形成“语音-文本-电话”统一通道架构。

> 📌 预测：**子代理配置 UI + 语音工作流自动化** 将成为下一阶段核心亮点。

---

## 7. 用户反馈摘要

从 Issues 评论与描述中提炼真实声音：

- **满意点**：
  - “语音输出终于有稳定人设了，不像以前每句话语气都变。”（隐含于 PR #916 背景）
  - “Docker 部署后 Telegram 能用了，之前版本完全不可用。”（Issue #918 关闭反馈）

- **痛点与诉求**：
  - “聊天时想回看历史消息，但一有响应就自动跳到底部，根本没法读。” → 推动 PR #925
  - “OAuth token 过期后没有重登按钮，只能手动删配置。” → Issue #927 核心诉求
  - “模型加载经常卡在 30 秒超时，不知道是网络还是配置问题。” → Issue #919 反映发现机制健壮性不足

> 💡 用户最关心：**可控性（UI）、稳定性（连接/认证）、一致性（语音/行为）**

---

## 8. 待处理积压

以下 Issue 虽非今日新开，但长期未获响应，需维护者关注：

| Issue | 类型 | 创建日期 | 状态 | 提醒 |
|------|------|----------|------|------|
| [#906 — Make sub-agents configurable in WebUI](https://github.com/moltis-org/moltis/issues/906) | Enhancement | 2026-04-28 | OPEN | 已超 24h 无评论，但技术方向明确，建议纳入规划 |
| [#919 — Model discovery fails after 30 sec](https://github.com/moltis-org/moltis/issues/919) | Bug | 2026-04-29 | OPEN | 新报但影响核心功能，需排查超时根因 |
| [#927 — MCP page missing re-authenticate button](https://github.com/moltis-org/moltis/issues/927) | Bug | 2026-04-29 | OPEN | 认证流程断裂，影响用户体验闭环 |

> 🔔 **建议行动**：为 #906 分配设计资源，为 #919 和 #927 启动技术排查。

---

**总结**：Moltis 正处于快速迭代期，安全、体验、多模态为三大支柱。团队响应高效，社区反馈驱动明确改进。建议持续关注 **子代理配置化** 与 **认证流程健壮性** 的后续进展。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-04-30）

---

## 1. 今日速览

CoPaw 项目在 2026-04-30 继续保持高活跃度，过去24小时内共处理 **29 条 Issues**（新开/活跃 15 条，关闭 14 条）和 **21 条 PR**（待合并 11 条，已合并/关闭 10 条），并发布 **v1.1.5 新版本**。社区反馈集中在前端交互体验、多智能体隔离机制、企业微信/飞书通道稳定性等核心场景。整体项目处于快速迭代与问题修复并重阶段，开发者响应积极，功能演进方向清晰。

---

## 2. 版本发布

### 🔖 v1.1.5 正式发布

**核心更新内容：**
- ✨ **CJK-Aware Memory Search**：针对中日韩（CJK）文本优化记忆搜索，实现字符级分词，同时保留拉丁字母与数字的连续片段处理，提升多语言上下文检索准确性 ([#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811))。
- ⚙️ **Context Compaction Fallback 机制**：当 LLM 驱动的上下文压缩失败或被禁用时，系统自动回退至轻量级压缩策略，避免任务中断。

**影响范围：**  
无破坏性变更，向后兼容。建议所有用户升级以获取更稳定的长对话处理能力。

> 📌 发布说明 PR: [#3918](https://github.com/agentscope-ai/QwenPaw/pull/3918)

---

## 3. 项目进展

今日共 **10 个 PR 被合并或关闭**，重点推进以下方向：

| 类型 | 进展摘要 | 链接 |
|------|--------|------|
| ✅ **前端体验优化** | 修复聊天历史面板无法输入中文、会话列表样式错乱、多标签页智能体选择串扰等问题，显著提升 Console 稳定性 | [#3934](https://github.com/agentscope-ai/QwenPaw/pull/3934), [#3943](https://github.com/agentscope-ai/QwenPaw/pull/3943), [#3927](https://github.com/agentscope-ai/QwenPaw/issues/3927) |
| ✅ **通道稳定性增强** | 修复企业微信“Thinking...”卡死问题（通过保持 placeholder stream 活跃）、统一微信/Weixin 标识符，解决消息丢失与连接中断 | [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950), [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) |
| ✅ **工作区初始化逻辑修复** | 避免在已初始化工作区重复生成 `BOOTSTRAP.md`，解决用户无法永久删除该文件的困扰 | [#3954](https://github.com/agentscope-ai/QwenPaw/pull/3954) |
| ✅ **QQ 语音消息支持** | 区分语音消息（.amr/.silk）与普通音频文件，正确映射为语音气泡并支持平台 ASR 回退 | [#3887](https://github.com/agentscope-ai/QwenPaw/pull/3887), [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) |

> 项目整体在 **多通道兼容性** 和 **前端健壮性** 方面迈出关键一步。

---

## 4. 社区热点

### 🔥 高讨论度 Issues（评论数 ≥ 6）

| Issue | 主题 | 诉求分析 |
|------|------|--------|
| [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) | 智能体间是否可完全隔离 | 用户强烈要求支持 **按智能体隔离 workspace**，当前全局文件防护（仅黑名单）无法满足细粒度权限控制，亟需白名单机制或 per-agent 配置 |
| [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) | 企业微信频繁断连需手动重配 | 反映通道状态管理缺陷，心跳机制未有效维持长连接，影响生产环境可靠性 |
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | 跨智能体消息导致 workspace 错误切换 | 严重身份混淆问题：主控 Agent 收到其他 Agent 推送消息后误切 workspace，暴露路由逻辑漏洞 |
| [#3919](https://github.com/agentscope-ai/QwenPaw/issues/3919) | 切换 Agent 后 session 丢失 | 前端 `lastChatIdByAgent` 功能未实现，导致对话上下文无法恢复，属功能缺失 |

> 💡 社区核心诉求：**多智能体隔离架构** 与 **会话状态持久化** 是下一阶段重点。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug（按优先级排序）

| 问题 | 严重性 | 状态 | Fix PR |
|------|--------|------|--------|
| [Agent workspace 错误切换](https://github.com/agentscope-ai/QwenPaw/issues/3957) | 🔴 高（身份混淆） | Open | — |
| [read_file_safe 导致 MemoryError](https://github.com/agentscope-ai/QwenPaw/issues/3932) | 🔴 高（低内存系统崩溃） | Open | — |
| [Context Sync 竞态条件致无限循环](https://github.com/agentscope-ai/QwenPaw/issues/3893) | 🔴 高（任务卡死） | Closed | — |
| [企微 filter_thinking 致回复丢失](https://github.com/agentscope-ai/QwenPaw/issues/3947) | 🟠 中（功能失效） | Open | — |
| [DeepSeek reasoning_content 未传递](https://github.com/agentscope-ai/QwenPaw/issues/3949) | 🟠 中（模型兼容） | Closed | — |

> ❗ 两个高危 Bug（#3957、#3932）尚无对应 Fix PR，需紧急关注。

---

## 6. 功能请求与路线图信号

### 🚀 高潜力新功能（已有相关 PR 或强烈需求）

| 功能 | 需求来源 | 进展 |
|------|--------|------|
| **多模态支持（音视频）** | [#3942](https://github.com/agentscope-ai/QwenPaw/issues/3942) | 已有基础多媒体 PR [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509)，可扩展 |
| **独立视觉模型路由** | [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) | 用户痛点明确，可结合模型切换机制实现 |
| **Auto-Memory 排除系统任务** | [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | 高赞需求（👍1），逻辑清晰，易实现 |
| **LLM 模型自动切换机制** | [#3956](https://github.com/agentscope-ai/QwenPaw/issues/3956) | 解决调用超限中断问题，已有构思 |
| **Tauri 2.x 桌面端支持** | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | 进行中，替代旧 Electron 方案 |

> 📌 预计 v1.2.0 将聚焦 **多智能体隔离**、**多模态输入** 与 **模型弹性调度**。

---

## 7. 用户反馈摘要

### 💬 真实用户声音

- **满意点**：
  - “v1.1.5 的 CJK 记忆搜索终于能正确处理中文了！”（来自 #3811 评论）
  - “飞书按钮审批比输入 `/approve` 直观多了”（呼应 #2720 已关闭）

- **痛点**：
  - “企业微信每隔几小时就断，必须进配置页点保存才能恢复”（#2757）
  - “两个 Agent 共用一个 workspace，敏感文件互相可见，很不安全”（#3936）
  - “上传图片后还得手动切模型，体验割裂”（#3940）

- **使用场景**：
  - 政企用户关注 **离线部署** 与 **数据隔离**（#893）
  - 开发者希望集成 **GitHub Copilot** 等第三方模型（#3846）

---

## 8. 待处理积压

### ⏳ 长期未响应重要事项

| 事项 | 类型 | 创建时间 | 状态 | 提醒 |
|------|------|--------|------|------|
| [Plan and Task Monitoring for continual tasks](https://github.com/agentscope-ai/QwenPaw/issues/600) | Issue | 2026-03-04 | Open | 超 55 天未响应，涉及核心任务执行能力 |
| [Support GitHub Copilot model provider](https://github.com/agentscope-ai/QwenPaw/pull/3846) | PR | 2026-04-26 | Under Review | 首次贡献者 PR，需维护者 review |
| [Tauri 2.x desktop app support](https://github.com/agentscope-ai/QwenPaw/pull/3813) | PR | 2026-04-24 | Under Review | 架构级变更，需优先评估 |

> 🔔 建议维护团队本周内对上述积压项做出响应，避免贡献者流失。

---

**报告生成时间：2026-04-30**  
**数据来源：** [CoPaw GitHub Repository](https://github.com/agentscope-ai/CoPaw)

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