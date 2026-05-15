# OpenClaw 生态日报 2026-05-15

> Issues: 500 | PRs: 500 | 覆盖项目: 15 个 | 生成时间: 2026-05-15 02:38 UTC

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

# OpenClaw 项目日报  
**日期：2026‑05‑15**  

---

## 1. 今日速览  
- **活跃度评估**：今日共有 16 条 Pull Request（PR）在仓库中保持 Open 状态，涵盖 **Feishu、Gateway、Agents、Memory‑LanceDB、Runtime、TUI、Exec‑Approvals** 等多个子系统。  
- **重要动向**：出现 3 条 **XL** 规模 PR（#80922、#38897、#81864），表明项目正面向 **权限规划、运行时可视化、插件审批体验** 进行系统性升级。  
- **Bug 修复**：5 条 **S/XS** 规模的 bug‑fix PR 已提交审查，主要聚焦 **@mention 检测、Heartbeat 路径提示、Gateway 启动守卫、TUI 会话刷新** 等直接影响用户体验的问题。  
- **整体健康度**：项目在保持功能迭代的同时，已将若干关键回归问题纳入快速响应通道，代码库保持 **“稳健推进、功能丰富”** 的状态。  

---

## 2. 版本发布  
> **暂无新版本发布**。所有变更仍处于 Pull Request 阶段，待合并后将随下一Release统一发布。  

---

## 3. 项目进展（合并/关闭情况）  
截至本报告时间（2026‑05‑15），**尚无 PR 完成合并**。以下 PR 已进入 **Review /待合并** 阶段，值得关注：

| PR 编号 | 标题 | 规模 | 状态 | 链接 |
|--------|------|------|------|------|
| #80922 | Route allow‑always through command authorization planner | **XL** | Review | https://github.com/openclaw/openclaw/pull/80922 |
| #38897 | Surface tool runtime, execution queue, and autonomy posture | **XL** | Review | https://github.com/openclaw/openclaw/pull/38897 |
| #81864 | feat(approvals): add plain‑language plugin approvals | **XL** | Review | https://github.com/openclaw/openclaw/pull/81864 |
| #40472 | fix(tui): refresh on external session reset and clear stale run state | **S** | Review | https://github.com/openclaw/openclaw/pull/40472 |
| #40481 | exec‑approvals: pre‑fill /approve commands in chat notifications | **XS** | Review | https://github.com/openclaw/openclaw/pull/40481 |
| #40782 | fix(feishu): use union_id as fallback for @mention detection in multi‑bot groups | **S** | Review | https://github.com/openclaw/openclaw/pull/40782 |
| #40756 | fix(heartbeat): do not append workspace path hint to user‑configured prompts | **S** | Review | https://github.com/openclaw/openclaw/pull/40756 |
| #40703 | gateway: fail fast on startup when default model auth is missing | **S** | Review | https://github.com/openclaw/openclaw/pull/40703 |
| #40522 | fix(gateway): redirect / to control UI basePath | **XS** | Review | https://github.com/openclaw/openclaw/pull/40522 |
| #40423 | feat(runtime): expose agent and session env markers | **M** | Review | https://github.com/openclaw/openclaw/pull/40423 |
| #41991 | Google: show detailed Gemini CLI OAuth extraction failures | **S** | Review | https://github.com/openclaw/openclaw/pull/41991 |
| #39245 | fix(agents): normalize mangled tool names and IDs from OpenAI‑compatible… | **M** | Review | https://github.com/openclaw/openclaw/pull/39245 |
| #38932 | docs(gateway): add Windows no‑Docker hardening fallback guide | **XS** | Review | https://github.com/openclaw/openclaw/pull/38932 |
| #40578 | Feature(memory‑lancedb): Agent Scoping | **S** | Review | https://github.com/openclaw/openclaw/pull/40578 |
| #40618 | docs: Add configurable outputDir for session‑memory hook | **S** | Review | https://github.com/openclaw/openclaw/pull/40618 |
| #40747 | feat(feishu): support index parameter for doc insert action | **S** | Review | https://github.com/openclaw/openclaw/pull/40747 |

> **注**：上述 PR 大多数在 2026‑05‑15 当天收到更新（标记为 “Updated: 2026-05-15”），表明维护者正在积极审查。

---

## 4. 社区热点（讨论最活跃/关注度最高）

| PR 编号 | 标题 | 热点原因 | 链接 |
|--------|------|----------|------|
| #80922 | Route allow‑always through command authorization planner | 规模最大（XL）+ **maintainer** 标记，涉及 POSIX 权限规划的系统重构，预计会引发大量代码审查与安全讨论。 | https://github.com/openclaw/openclaw/pull/80922 |
| #38897 | Surface tool runtime, execution queue, and autonomy posture | 同样为 **XL**，聚焦 Mission Control 可视化，带来 **“运行时感知”** 的全新交互方式，社区对此期待度高。 | https://github.com/openclaw/openclaw/pull/38897 |
| #81864 | feat(approvals): add plain‑language plugin approvals | **XL** + **proof** 标记，改进插件审批的用户体验（从调试输出改为自然语言），是 exec‑approval 工作流的关键改进。 | https://github.com/openclaw/openclaw/pull/81864 |
| #40481 | exec‑approvals: pre‑fill /approve commands in chat notifications | 直接解决 **移动端/群聊** 用户的操作痛点（手动复制 UUID、粘贴指令），投票数较高。 | https://github.com/openclaw/openclaw/pull/40481 |
| #40782 | fix(feishu): use union_id as fallback for @mention detection | 解决 **多 Bot 群组** 中 @mention 失效的根本问题，反馈显示此问题在实际业务中频繁出现。 | https://github.com/openclaw/openclaw/pull/40782 |
| #40423 | feat(runtime): expose agent and session env markers | 为 **子进程/脚本** 提供确定性环境变量（OPENCLAW_AGENT_ID、OPENCLAW_SESSION_KEY），对 **CI/CD、插件系统** 有重要价值。 | https://github.com/openclaw/openclaw/pull

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期：2026-05-15**
**数据来源：GitHub 各项目日报**

---

## 1. 生态全景

2026年5月中旬，个人AI助手与自主智能体开源生态呈现**“一超多强、梯度分化”**的格局。hermes-agent 以单日500条PR更新的超高流量领跑全场，反映出大型社区的蓬勃活力；Zeroclaw、IronClaw、librefang 等项目处于 Reborn 架构、RL训练基础设施等核心技术重构期，多线并行推进；LobsterAI、QwenPaw 等项目则聚焦终端用户体验优化，以密集修复和稳定发布为主。整体生态正从“功能堆砌期”向“架构升级期”过渡，**安全性（MCP协议、权限管控）、可观测性（OTel追踪）、多模态协作（Agent间通信）** 成为跨项目共识的技术方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新增/活跃) | PRs (新增/待合并) | PRs 合并/关闭 | 版本发布 | 健康度评估 |
|------|-------------------|-------------------|---------------|----------|-----------|
| **hermes-agent** | 211 | 314 | 186 | 0 | 🔥 极高活跃，快速迭代 |
| **Zeroclaw** | 19 | 47 | 3 | 0 | 🟡 快速迭代，P1 Bug承压 |
| **IronClaw** | 48 | 38 | 12 | v0.28.2 | 🟢 架构重构期，稳健 |
| **librefang** | 6 新增 | 11 | ~10 | 0 | 🟢 高活跃，功能推进中 |
| **NanoBot** | 9 | 15 | 8 | 0 | 🟡 中高活跃，合并率34.8% |
| **LobsterAI** | 0 | 1 | 28 | v2026.5.13 | 🟢 发布活跃，质量导向 |
| **QwenPaw** | 未披露 | 1 审查 | 18 | 0 | 🟢 批量修复，快速迭代 |
| **NanoClaw** | 1 | 11 | 13 | 0 | 🟢 高合并率，技能生态扩展 |
| **PicoClaw** | 5 | 15 | 7 | v0.2.8-nightly | 🟡 稳健，文档迁移中 |
| **OpenClaw** | 未披露 | 16 | 0 | 0 | 🟡 审查积压，代码审查期 |
| **openfang** | 1 | 6 | 0 | 0 | 🟡 平稳，MCP协议推进 |
| **Moltis** | 2 | 0 | 0 | 0 | ⚠️ 低活跃，待维护响应 |
| **TinyClaw** | 0 | 0 | 0 | 0 | ⚠️ 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | ⚠️ 无活动 |
| **EasyClaw** | 0 | 0 | 0 | 0 | ⚠️ 无活动 |

> **注**：活跃度数据为过去24小时统计，部分项目（如TinyClaw）已处于休眠状态。

---

## 3. OpenClaw 在生态中的定位

### 技术路线差异

| 维度 | OpenClaw | 竞品特征 |
|------|----------|----------|
| **架构理念** | 核心平台，模块化子系统（Gateway、Runtime、TUI） | NanoBot/Zeroclaw偏插件化 |
| **PR审查节奏** | 16条待合并积压，今日0合并，审查期长 | hermes-agent日均合并186条 |
| **功能深度** | XL规模PR聚焦权限规划（#80922）、运行时可视化（#38897） | 多项目侧重渠道集成 |
| **社区规模** | 适中，PR规模大但数量少 | hermes-agent流量10倍于OpenClaw |

### 相对优势

- **系统级设计**：OpenClaw的XL规模PR体现顶层架构思维，#80922涉及POSIX权限规划的系统重构，安全设计优于多数竞品
- **功能完整性**：覆盖Feishu、Telegram、Gateway、Memory-LanceDB等多维度生态集成
- **稳定性优先**：保持"稳健推进、功能丰富"状态，无P1级新Bug报告

### 相对劣势

- **审查吞吐**：相比hermes-agent日合并186条PR，OpenClaw的审查效率存在瓶颈
- **版本节奏**：今日无合并无发布，社区期待感可能受挫
- **社区声量**：Issues/PR互动频次低于头部项目

---

## 4. 共同关注的技术方向

### 跨项目共性需求分析

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **MCP协议深化** | OpenClaw、NanoBot、LobsterAI、openfang | MCP原生支持（#1980 LobsterAI）、MCP推送通知（#1203 openfang）、MCP工具链集成 |
| **Telegram集成增强** | Zeroclaw、PicoClaw、hermes-agent、NanoBot、librefang | 论坛Topic支持、语音消息处理、Cron输出路由（#6647 Zeroclaw）、流式进度显示 |
| **上下文压缩与记忆** | OpenClaw、NanoBot、QwenPaw、Zeroclaw | reasoning_content保留（#6269 Zeroclaw）、会话历史竞态修复（#2721 PicoClaw）、KV memory持久化（librefang #4923） |
| **多Agent架构** | OpenClaw、NanoClaw、PicoClaw | 子Agent角色隔离（#2775 PicoClaw）、ACP会话持久化（#6649 Zeroclaw）、Plan工具（#3791 NanoBot） |
| **安全性加固** | OpenClaw、NanoClaw、hermes-agent、QwenPaw | 权限规划（OpenClaw #80922）、admin审批强化（NanoClaw #2478）、公开绑定强阻（QwenPaw #4369）、OAuth认证修复（hermes-agent #15080） |
| **可观测性** | Zeroclaw、hermes-agent、librefang、IronClaw | OTel trace关联（#6641 Zeroclaw）、运行时可视化（OpenClaw #38897）、Turn级追踪（librefang #5053） |
| **CLI工具链完善** | NanoBot、NanoClaw、QwenPaw | doctor诊断（NanoBot #3773）、session管理、/export命令 |

### 根因分析

这些共性需求折射出行业正处于 **“从单Agent玩具向多Agent生产系统”** 的关键转型期，需要解决：
1. **通信协议标准化**：MCP从单向工具调用向双向推送演进
2. **状态一致性**：多渠道、多会话、多Agent场景下的上下文保持
3. **安全边界**：企业部署对权限、审计、合规的刚性需求

---

## 5. 差异化定位分析

### 功能侧重

| 项目 | 核心定位 | 主攻方向 |
|------|----------|----------|
| **hermes-agent** | 超大规模开发者平台 | CLI/TUI体验、Discord集成、自改进Agent治理 |
| **IronClaw** | 企业级Agent基础设施 | Reborn架构、策略trait体系、Capability Host |
| **Zeroclaw** | 多渠道集成枢纽 | Telegram/Matrix/Cron集成、Provider抽象 |
| **LobsterAI** | 终端用户产品 | Artifacts渲染（Excel/PPTX）、上下文压缩、插件管理 |
| **QwenPaw** | 多模态消费应用 | Whisper离线模型、音频处理、路由前缀支持 |
| **NanoClaw** | 技能生态系统 | 技能本地化、LinkedIn/Reddit等垂直场景 |
| **librefang** | RL训练基础设施 | RL Export（W&B/Tinker/Atropos）、Workflow引擎 |

### 目标用户分层

```
┌─────────────────────────────────────────────────────────────┐
│                    用户分层与项目对应                         │
├─────────────────────────────────────────────────────────────┤
│  企业自托管 / 开发者平台    →  IronClaw, hermes-agent        │
│  多渠道运营者              →  Zeroclaw, PicoClaw, NanoBot   │
│  垂直场景开发者            →  NanoClaw (营销/社交), LobsterAI │
│  终端消费者 / 企业用户      →  LobsterAI, QwenPaw             │
│  研究者 / RL工程师         →  librefang                     │
└─────────────────────────────────────────────────────────────┘
```

### 技术架构关键差异

| 维度 | Rust生态（Zeroclaw/librefang/IronClaw） | Python生态（NanoBot/LobsterAI） | TypeScript生态（hermes-agent/QwenPaw） |
|------|----------------------------------------|----------------------------------|----------------------------------------|
| **性能** | 启动快、内存占用低，适合服务器 | 开发效率高，生态丰富 | 前端集成便利，TypeScript类型安全 |
| **部署** | 单一二进制，Docker友好 | 依赖Python环境 | npm生态，Electron支持 |
| **扩展性** | 底层能力强，二次开发门槛高 | 脚本灵活，但GIL限制 | npm包丰富，运行时灵活 |
| **典型场景** | 高并发、多租户网关 | 快速原型、渠道集成 | Web聊天、CLI工具 |

---

## 6. 社区热度与成熟度

### 活跃度分层

```
🔥 第一梯队（超高流量）
├── hermes-agent：日均500+ PR活动，267 Issues
└── Zeroclaw：50 PRs + 24 Issues

🟢 第二梯队（高活跃）
├── IronClaw：50 PRs + 功能发布，Reborn架构冲刺
├── librefang：43 PRs，RL基础设施完善
├── NanoBot：23 PRs + 21 Issues，多渠道集成
└── LobsterAI：29 PRs + 版本发布，终端产品打磨

🟡 第三梯队（稳健维护）
├── NanoClaw：25 工件更新，技能生态扩展
├── PicoClaw：22 PRs，文档迁移期
├── OpenClaw：16 PRs审查积压，架构稳定
└── QwenPaw：19 PRs，批量修复模式

⚠️ 第四梯队（低活跃/休眠）
├── openfang：6 PRs，MCP协议推进
├── Moltis：2 Issues待响应
└── TinyClaw / ZeptoClaw / EasyClaw：无活动
```

### 成熟度评估

| 阶段 | 项目 | 特征 |
|------|------|------|
| **快速迭代期** | hermes-agent, Zeroclaw, librefang | 大量PR吞吐，架构频繁重构 |
| **质量巩固期** | LobsterAI, QwenPaw | 发布节奏稳定，密集Bug修复 |
| **架构重组期** | IronClaw | Reborn战略级重构，功能断代 |
| **功能探索期** | NanoClaw, openfang | 技能生态/MCP协议拓展 |
| **稳定维护期** | OpenClaw, PicoClaw | PR积压，审查为主 |
| **休眠期** | TinyClaw等 | 无活动，需社区激活 |

---

## 7. 值得关注的趋势信号

### 行业趋势提炼

#### 1. **Agent间协议从“工具调用”向“会话协商”演进**
- OpenClaw #80922（权限规划）、NanoClaw #2478（admin审批强化）、Zeroclaw #6649（ACP会话持久化）共同指向：Agent需要细粒度的身份认证和状态协商机制
- **对开发者的意义**：未来Agent集成将更依赖标准化协议（如A2A、ACP），而非硬编码渠道适配

#### 2. **Context管理成为核心竞争力**
- 跨项目爆发reasoning_content保留（Zeroclaw #6269）、会话历史竞态（PicoClaw #2721）、上下文压缩（LobsterAI）问题
- **对开发者的意义**：长对话、多轮工具调用的上下文一致性仍是未解决的工程难题，记忆系统的可靠性决定产品体验天花板

#### 3. **MCP协议从“单向工具箱”向“双向事件流”升级**
- openfang #1203（推送通知）、LobsterAI #1980（原生MCP Client）代表MCP 2.0方向
- **对开发者的意义**：MCP Server主动推送将解锁实时AI工作流，如数据库变更推送、监控系统告警等场景

#### 4. **企业级安全需求井喷**
- QwenPaw #4369（公开绑定强阻）、NanoClaw #2477（网络访问管控钩子）、hermes-agent #21574（用户隔离权限系统）
- **对开发者的意义**：自托管部署的安全基线正在被重新定义，"安全默认"将成为开源项目的标配

#### 5. **垂直场景Agent生态崛起**
- NanoClaw专注LinkedIn/Reddit营销场景，librefang聚焦RL训练数据导出
- **对开发者的意义**：通用Agent框架竞争趋于白热，垂直领域定制化是差异化突围路径

#### 6. **CLI工具链成为开发者体验关键**
- NanoBot doctor命令、QwenPaw反向代理路径支持、OpenClaw TUI增强
- **对开发者的意义**：从"能用"到"好用"的体验差距决定开发者留存，CLI/TUI的健壮性是技术选型重要考量

### 高价值关注点

| 优先级 | 信号 | 来源项目 | 建议动作 |
|--------|------|----------|----------|
| ⭐⭐⭐ | **会话状态一致性**（P1级跨项目问题） | PicoClaw #2721, Zeroclaw #6269 | 关注会话管理库或方案的选型 |
| ⭐⭐⭐ | **MCP推送通知能力**（协议升级方向） | openfang #1203, LobsterAI #1980 | 评估MCP Server主动推送场景需求 |
| ⭐⭐ | **Telegram集成深度**（5+项目共需） | Zeroclaw #6647, PicoClaw #2776, librefang #5036 | 关注跨平台的统一会话模型设计 |
| ⭐⭐ | **RL训练基础设施**（librefang领跑） | #3331 RL Export体系 | 研究者关注W&B/Tinker/Atropos集成 |
| ⭐⭐ | **企业安全基线**（合规需求） | QwenPaw #4369, NanoClaw #2477/2478 | 评估自托管场景的权限管控方案 |

---

## 结论

2026年5月的AI智能体开源生态呈现**“头部高速迭代、中部聚焦体验、尾部亟待激活”**的格局。OpenClaw作为核心平台级项目，需在保持架构稳健的同时提升PR审查吞吐，以应对hermes-agent等竞品的高速迭代压力。行业共性需求集中在MCP协议深化、上下文一致性、Telegram集成和企业安全四大方向，多项目并行探索为技术选型提供了丰富的参考样本。建议技术决策者重点关注会话状态管理方案和MCP 2.0事件推送机制，这两者将成为下一阶段Agent平台的核心差异化战场。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

## 📅 日期：2026-05-15

---

## 1. 今日速览

NanoBot 项目今日保持高度活跃，共产生 **21 条 Issues** 和 **23 条 PRs**，社区参与度维持高位。今日共 **8 个 PR 成功合并**，主要集中在安全修复（飞书文件名限制、Telegram 配置透传、企业代理 SSL）、CLI 工具增强（doctor 诊断、session 管理、/export 命令）及 agent 上下文持久化修复。WebUI 显示错乱问题被多个用户报告，需重点关注。无新版本发布，但多条功能增强路线正在推进中。

---

## 2. 版本发布

**无新版本发布。**

> 距离上次发布已过一段时间，建议关注 nightly 分支动向。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PRs

| PR # | 标题 | 贡献者 | 说明 |
|------|------|--------|------|
| [#3779](https://github.com/HKUDS/nanobot/pull/3779) | fix(agent): persist shortcut commands without polluting LLM context | @chengyongru | **高优先级修复**：快捷命令（如 `/help`、`/pairing`）跳过了 BUILD/SAVE 状态，导致 WebUI 历史记录为空。现已修复并持久化用户消息和助手响应。 |
| [#3775](https://github.com/HKUDS/nanobot/pull/3775) | fix(feishu): register no-op handlers for bot member events | @chengyongru | 飞书 WebSocket 模式下，机器人被添加/移除事件无处理程序导致 "processor not found" 错误。已注册 no-op 处理器静默处理。 |
| [#3783](https://github.com/HKUDS/nanobot/pull/3783) | fix(web): add ssl_verify config for corporate proxy SSL verification | @HengWeiBin | 企业代理使用自签名 CA 时，所有 web 工具操作失败。新增 `ssl_verify` 配置项解决 SSL MITM 拦截问题。 |
| [#3786](https://github.com/HKUDS/nanobot/pull/3786) | fix(telegram): wire transcription config fields through to the channel | @liflovs | Telegram 语音消息转录配置字段（`transcription_provider` 等）未透传到 channel，导致语音消息无法转录。修复后配置生效。 |
| [#2848](https://github.com/HKUDS/nanobot/pull/2848) | Fix config compatibility for plugin channels | @Psinary | 修复插件 channel 使用 dict 配置时 `is_allowed` 方法兼容性问题。 |
| [#3483](https://github.com/HKUDS/nanobot/pull/3483) | docs: add OpenCode Go provider entries to configuration docs | @flyzstu | 文档更新：新增 OpenCode Go provider 及 Anthropic 兼容模式说明。 |
| [#3773](https://github.com/HKUDS/nanobot/pull/3773) | feat(cli): add doctor command, session management, and /export slash command | @shen-baise | **CLI 工具三合一**：新增 `nanobot doctor` 诊断命令（10 项检查）、session 管理（list/export/delete）及 `/export` 斜杠命令。 |

### 🚧 值得关注的新开 PRs（待合并）

| PR # | 标题 | 贡献者 | 说明 |
|------|------|--------|------|
| [#3792](https://github.com/HKUDS/nanobot/pull/3792) | feat: add gateway lifecycle notification hooks (on_start/on_stop) | @JiajunBernoulli | 网关启动/停止时发送通知，支持自定义消息配置到非内部 channel。关闭 #3279。 |
| [#3791](https://github.com/HKUDS/nanobot/pull/3791) | feat(agent): add plan tool for task decomposition and progress tracking | @chengyongru | 新增 `plan` 工具，支持复杂多步骤任务分解和进度跟踪，跨越上下文压缩持久化。 |
| [#3788](https://github.com/HKUDS/nanobot/pull/3788) | feat(goal): goal_state streaming, long_task, WebUI composer and history | @Re-bin | 端到端实现 chat 作用域的持续目标状态（session → Runtime Context → WebSocket → WebUI）。 |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | feat(long-task): add LongTaskTool for multi-step agent tasks | @chengyongru | 元 ReAct 循环工具，将长任务分解为顺序子步骤，每步从原始目标 + 上一步进度重新开始。 |
| [#3785](https://github.com/HKUDS/nanobot/pull/3785) | feat(providers): add OpenCode Go gateway support | @flyzstu | 新增 OpenCode Go 网关支持，聚合 GLM、Kimi、DeepSeek、MiMo、Qwen、MiniMax 模型。 |
| [#3774](https://github.com/HKUDS/nanobot/pull/3774) | feat(pairing): chat-native DM sender approval | @chengyongru | 私有助手部署场景下的聊天原生配对流程，替换文件编辑引导。依赖 #3779（已合并）。 |

---

## 4. 社区热点

### 🔥 Issues 中评论最多的（按评论数排序）

| Issue # | 标题 | 评论数 | 热度分析 |
|---------|------|--------|----------|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) | **[BUG] 无论发什么消息都回复报错** | 17 | 🔴 **高优先级 Bug**：用户反映 nanobot agent 可正常回复，但通用模式（推测为其他 channel）发任何消息都报错，卸载重装清缓存均无效。附带截图。维护者需排查通用处理流程差异。 |
| [#3402](https://github.com/HKUDS/nanobot/issues/3402) | Replace JSON with TOML for configuration files | 9 | 💡 **配置格式迁移讨论**：提议将 `config.json` 迁移到 TOML，提升人类可编辑性。**已于 2026-05-15 关闭**，可能是拒绝或延期，需确认关闭原因。 |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) | 中断会话丢失上一轮会话的聊天记录 | 5 | ⚠️ **体验问题**：用户打断 nanobot 执行任务时，对话上下文和执行步骤丢失。建议打断时保留对话历史。**已于 2026-05-14 关闭**。 |
| [#3780](https://github.com/HKUDS/nanobot/issues/3780) | 支持更安全的文件访问控制与脚本审查（Windows 无沙箱场景） | 3 | 🏢 **企业需求**：Windows 服务器无法启用沙箱，需更精细的文件访问控制，区分读取外部文件权限与限制工作区。当前 `restrictWorkspace` 过于粗暴。 |
| [#3070](https://github.com/HKUDS/nanobot/issues/3070) | 可以做一个模型路由，类似于 openrouter | 3 | 💰 **成本优化需求**：希望自建模型库，简单任务路由到性价比高的模型，节省 token 成本。 |

### 📌 PRs 中需重点关注

- **#3774** (chat-native DM sender approval)：重构配对流程，提升私有助手部署体验
- **#3791** (plan tool)：任务分解工具，有望成为 agent 能力扩展里程碑

---

## 5. Bug 与稳定性

### 🔴 高优先级 Bug

| Issue # | 描述 | 状态 | 修复情况 |
|---------|------|------|----------|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) | 通用模式（agent vs 非 agent）发任何消息都报错 | **OPEN** | 无 Fix PR，需维护者介入 |
| [#3760](https://github.com/HKUDS/nanobot/issues/3760) | deepseek-v4-flash + post3: `reasoning_content` 导致 400 错误 | **CLOSED** | 需确认是否有对应 Fix PR |
| [#3754](https://github.com/HKUDS/nanobot/issues/3754) | deepseek-v4-flash 模型忽略外部文件内容，自己编造 | **CLOSED** | — |
| [#2898](https://github.com/HKUDS/nanobot/issues/2898) | 调用时报错（截图未显示错误详情） | **CLOSED** | — |

### 🟡 中等优先级 Bug

| Issue # | 描述 | 状态 | 修复情况 |
|---------|------|------|----------|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | WebUI 会话内容打印错乱，需刷新页面恢复 | **OPEN** | 无 Fix PR，版本 v0.1.5.post3.2026.05.13 |
| [#3718](https://github.com/HKUDS/nanobot/issues/3718) | 服务器流式输出 cron 提醒消息缺少 streamid | **OPEN** | 无 Fix PR |
| [#3670](https://github.com/HKUDS/nanobot/issues/3670) | Runtime context prompt scaffolding 泄漏到持久化聊天历史 | **CLOSED** | — |
| [#2920](https://github.com/HKUDS/nanobot/issues/2920) | MS Teams 硬编码 fallback 字符串可能导致消息误解析 | **CLOSED** | — |

### ✅ 已修复问题

| Issue # | 描述 | 对应 PR |
|---------|------|---------|
| #3772 | 飞书群聊被其他机器人 @ 时报错 | [#3775](https://github.com/HKUDS/nanobot/pull/3775) ✅ 已合并 |
| #3787 | 飞书机器人 @ 提及功能请求（同上问题根因） | [#3775](https://github.com/HKUDS/nanobot/pull/3775) ✅ 已合并 |

---

## 6. 功能请求与路线图信号

### ✨ 今日新增 Feature Requests

| Issue # | 标题 | 需求类型 | 纳入可能性 |
|---------|------|----------|------------|
| [#3647](https://github.com/HKUDS/nanobot/issues/3647) | 使用本地 tokenizer 估算 prompt tokens | enhancement | 🔵 中：减少网络依赖，提升离线可用性 |
| [#3698](https://github.com/HKUDS/nanobot/issues/3698) | API server streaming 中注入 tool 事件 | enhancement | 🔵 中：与 hermes-agent 行为对齐 |
| [#3731](https://github.com/HKUDS/nanobot/issues/3731) | `/insights` 命令：历史 token 使用量追踪 | feature request | 🟢 高：已有对应 PR #3776 CLI 工具链覆盖 |
| [#3741](https://github.com/HKUDS/nanobot/issues/3741) | 支持 provider-hosted web search tools 及本地 fallback | enhancement | 🟢 高：PR #3785 已覆盖 provider 扩展 |
| [#3769](https://github.com/HKUDS/nanobot/issues/3769) | `nanobot doctor` CLI 诊断命令 | CLI | 🟢 高：PR #3776 已实现 |

### 🔮 路线图信号

1. **Agent 能力增强**：plan tool (#3791)、LongTaskTool (#3460)、goal_state streaming (#3788) 三条 PR 并行推进，指向更复杂任务处理能力
2. **CLI 工具链完善**：doctor 诊断、session 管理、/export 命令三位一体，提升开发者体验
3. **多 Provider 支持**：OpenCode Go 网关 (#3785) 新增对国产模型的统一聚合访问
4. **安全加固**：飞书文件名限制 (#3789)、企业代理 SSL 验证 (#3783) 反映企业场景安全需求

---

## 7. 用户反馈摘要

### 😟 用户痛点

| 场景 | 问题 | 来源 |
|------|------|------|
| **Windows 企业部署** | 无法启用沙箱，文件访问控制粒度不足，误操作风险高 | #3780 |
| **上下文丢失** | 中断会话后丢失聊天记录和执行步骤 | #3689 |
| **WebUI 体验** | 会话内容显示错乱，需手动刷新 | #3790 |
| **模型兼容性** | coder 类模型（如 glm5、qwen3.5）报错 | #1998 |
| **离线/网络受限环境** | tiktoken 依赖网络，调用时卡顿数秒 | #3647 |

### 💬 用户诉求

- **成本敏感**：希望模型路由支持简单任务自动切换到低价模型（#3070）
- **配置简化**：TOML 格式替代 JSON，提升人类可编辑性（#3402）
- **企业级安全**：Windows 无沙箱场景下的精细化权限控制（#3780）
- **消费级透明**：历史 token 使用量追踪，便于成本核算（#3731）

### 🙏 用户满意点

- nanobot agent 模式运行正常（#2880 中 agent vs 非 agent 对比）
- MS Teams channel 基本可用（#2920 仅涉及 fallback 字符串问题）

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Issues（>14 天无更新）

| Issue # | 标题 | 创建时间 | 最后更新 | 状态 | 建议 |
|---------|------|----------|----------|------|------|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) | **[BUG] 无论发什么消息都回复报错** | 2026-04-07 | 2026-05-14 | OPEN | 🔴 高优：评论数 17，用户反馈强烈，需确认复现路径 |
| [#2898](https://github.com/HKUDS/nanobot/issues/2898) | 调用时报错 | 2026-04-07 | 2026-05-14 | CLOSED | ✅ 已关闭 |

### 📋 需维护者决策的事项

1. **#3402** (JSON → TOML)：已关闭，需确认是拒绝还是延期到未来版本
2. **#2880** (通用模式报错)：高评论数，建议优先定位 agent vs 非 agent 代码路径差异
3. **#3790** (WebUI 显示错乱)：多个用户报告，建议确认是否 regressed in recent commits

---

## 📊 数据摘要

| 指标 | 数值 |
|------|------|
| Issues 今日新增/活跃 | 9 |
| Issues 今日关闭 | 12 |
| PRs 今日新增 | 23 |
| PRs 待合并 | 15 |
| PRs 已合并/关闭 | 8 |
| 新版本发布 | 0 |
| 合并率（PRs） | 34.8% (8/23) |
| 关注度最高 Issue | #2880 (17 条评论) |

---

*报告生成时间：2026-05-15 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报

**报告日期：** 2026-05-15  
**项目：** zeroclaw-labs/zeroclaw  
**数据区间：** 过去 24 小时

---

## 1. 今日速览

Zeroclaw 今日保持高度活跃，共处理 **24 条 Issues 更新**（新开/活跃 19 条，关闭 5 条）和 **50 条 PR 更新**（待合并 47 条，已合并/关闭 3 条）。项目整体处于快速迭代状态，代码贡献量显著。然而，今日暴露出 **多个 P1 级别 Bug**，涉及 Telegram 频道集成、Cron 任务路由、Web 抓取工具等功能，需要维护团队优先关注。安全方面，GitHub Actions 机器人自动报告了依赖安全漏洞（RUSTSEC-2026-0141），相关修复 PR 已合并。

---

## 2. 版本发布

**今日无新版本发布。**

最近版本为 v0.7.5（根据 Issue #6646 用户反馈推断），社区正在积极修复 v0.7.5 中发现的问题。

---

## 3. 项目进展

### 已合并/关闭的 PR（共 3 条）

| PR 编号 | 标题 | 类型 | 状态 |
|---------|------|------|------|
| [#6662](https://github.com/zeroclaw-labs/zeroclaw/pull/6662) | fix(deps): update lettre for RUSTSEC-2026-0141 | Bugfix | ✅ **已合并** |
| [#6655](https://github.com/zeroclaw-labs/zeroclaw/pull/6655) | fix(cron): keep read-only access off schema init path | Bugfix | ✅ **已合并** |
| [#6627](https://github.com/zeroclaw-labs/zeroclaw/pull/6627) | Stale tool-result images replay across later provider turns | Bugfix | ✅ **已关闭** |

### 重点 PR 详情

**① #6662 - 安全依赖更新（已合并）**
- **范围：** 修复 RUSTSEC-2026-0141 漏洞（TLS 主机名验证在使用 Boring TLS 后端时被禁用）
- **变更：** 将 `lettre` 依赖从 0.11.21 升级至 0.11.22
- **影响：** 提升邮件发送安全性
- 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/6662

**② #6655 - Cron 只读路径优化（已合并）**
- **范围：** 修复 Cron store 只读操作仍触发 schema 初始化的问题
- **变更：** 将只读操作与写入操作分离，避免创建不必要的 `workspace/cron/` 或 `jobs.db`
- **意义：** 提升冷启动性能和资源利用率
- 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/6655

### 待合并的高价值 PR（共 47 条）

以下为今日讨论热度较高的待合并 PR：

| PR 编号 | 标题 | 规模 | 风险 | 优先级 |
|---------|------|------|------|--------|
| [#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) | feat(channels/acp): persist ACP sessions | XL | High | - |
| [#6611](https://github.com/zeroclaw-labs/zeroclaw/pull/6611) | feat(file-rotation): add zeroclaw-file-rotation crate | XL | High | - |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) | feat(provider): add native extended thinking | L | Medium | P1 |
| [#6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553) | fix(observability): restore broken SSE /logs stream | L | High | - |
| [#6606](https://github.com/zeroclaw-labs/zeroclaw/pull/6606) | fix(providers): preserve compatible reasoning field | M | High | P1 |
| [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) | feat(channels/webhook): add retry logic | M | Medium | - |

**亮点 PR #6649 - ACP 会话持久化**
- 实现 `AcpSessionStore`，通过 SQLite 持久化 ACP 会话元数据和对话历史
- 确保 ACP 会话在断线重连后保持上下文连续性
- 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/6649

**亮点 PR #5652 - 原生扩展思考支持**
- 为 Anthropic 和 Bedrock 提供商添加原生扩展思考功能
- 解决当前仅基于 prompt 的思考系统导致的浅层推理链问题
- 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/5652

---

## 4. 社区热点

### 评论最多的 Issues（共 5 条）

| 编号 | 标题 | 评论数 | 类型 | 热度分析 |
|------|------|--------|------|----------|
| [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | Cron job output not routed to configured channels | 4 | Bug | **最热** |
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | Context compressor drops reasoning_content | 4 | Bug | **最热** |
| [#6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547) | homebrew merge fail | 4 | Bug | 已关闭 |
| [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) | No API for pushing notifications into gateway session | 3 | Bug | **热** |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Agent doesn't have context of the cron job | 2 | Bug | - |

### 热点 Issue 深度分析

**① #6647 - Cron 任务输出未路由到配置频道（评论 4，状态：已接受）**
- **核心问题：** Agent Cron 任务结果仅显示在 Web Dashboard 的 Scheduled Jobs 标签页，不向配置的 Telegram 频道推送
- **用户场景：** 期望定时任务完成后能像普通消息一样推送到 Telegram
- **严重程度：** S1 - 工作流受阻
- **标签：** `risk:high`, `priority:p1`, `channel:telegram`, `tool:cron_add`
- 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6647

**② #6269 - Context 压缩丢失 reasoning_content（评论 4，状态：进行中）**
- **核心问题：** 当对话历史触发上下文压缩时，`reasoning_content` 被丢弃
- **影响范围：** 所有依赖 `reasoning_content` 的提供商（如支持深度推理的模型）
- **严重程度：** S2 - 降级行为
- **标签：** `risk:high`, `priority:p1`, `provider:deepseek`
- 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6269

**③ #6659 - 网关会话推送通知 API 缺失（评论 3，状态：需要维护者审查）**
- **核心问题：** 后端进程无法主动向操作者的网关会话推送通知
- **用户场景：** `klodi-zeroclaw-daemon` 后端需要在特定事件发生时向用户推送消息
- **标签：** `risk:high`, `gateway:api`, `gateway:ws`, `priority:p1`
- 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6659

---

## 5. Bug 与稳定性

### 按严重程度排列的活跃 Bug（共 14 条）

#### 🔴 P1 - 关键（4 条）

| 编号 | 标题 | 组件 | 状态 | 是否有 Fix PR |
|------|------|------|------|---------------|
| [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | Cron job output 未路由到 Telegram | cron, runtime | accepted | ❌ |
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | Context compressor 丢失 reasoning_content | runtime | in-progress | ❌ |
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | web_fetch allowed_private_hosts 对域名无效 | tool | no-stale | ❌ |
| [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) | web_search_tool 和 web_fetch 在 v0.7.5 Telegram 频道不触发 | runtime, channel | accepted | ❌ |

#### 🟠 P2 - 高（6 条）

| 编号 | 标题 | 组件 | 状态 | 是否有 Fix PR |
|------|------|------|------|---------------|
| [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) | 无 API 向网关会话推送通知 | gateway | needs-review | ❌ |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Agent 没有 Cron 任务的上下文 | runtime | blocked | ❌ |
| [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) | SkillImprover 只处理 SKILL.toml，不处理 manifest.toml | skills | accepted | ❌ |
| [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) | (同上 P1) | - | - | - |
| [#6624](https://github.com/zeroclaw-labs/zeroclaw/pull/6624) | normalize image markers at provider boundary | provider | open (PR) | ✅ |
| [#6654](https://github.com/zeroclaw-labs/zeroclaw/issues/6654) | Cron 只读查询仍命中 schema init 路径 | cron:store | in-progress | ✅ #6655 |

#### 🟡 P3 - 中低（4 条）

| 编号 | 标题 | 组件 | 状态 | 备注 |
|------|------|------|------|------|
| [#6648](https://github.com/zeroclaw-labs/zeroclaw/issues/6648) | cron session_target=main 仍在隔离会话运行 | cron:scheduler | accepted | - |
| [#6651](https://github.com/zeroclaw-labs/zeroclaw/issues/6651) | matrix 频道每次 /admin/reload 泄漏 ~1MB | channel:matrix | blocked | 上游 SDK 问题 |
| [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) | 定义模拟安装的主机架构策略 | core | needs-review | 政策讨论 |
| [#6658](https://github.com/zeroclaw-labs/zeroclaw/issues/6658) | 安装脚本支持 musl aarch64 linux | scripts | accepted | - |

### 安全漏洞

| 编号 | 标题 | CVE | 状态 | 修复情况 |
|------|------|-----|------|----------|
| RUSTSEC-2026-0141 | TLS hostname verification disabled (lettre 0.11.21) | - | **已修复** | PR #6662 已合并 |

### 稳定性总结

今日项目稳定性承压，主要问题集中在：
1. **Telegram 集成缺陷** - 多个 P1 Bug 影响 Telegram 频道的 Cron 任务和 Web 工具调用
2. **Provider 层问题** - Context 压缩和 reasoning_content 处理存在风险
3. **已缓解风险** - 安全漏洞 RUSTSEC-2026-0141 已通过 #6662 修复

---

## 6. 功能请求与路线图信号

### 新功能请求（共 8 条）

| 编号 | 标题 | 优先级 | 状态 | 路线图信号 |
|------|------|--------|------|------------|
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Track: zeroclaw skills 支持与 UX 改进 (v0.7.6) | P1 | accepted | **v0.7.6 主题** |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Turn 级 OTel trace 关联 | P2 | blocked | 观测性增强 |
| [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) | 捕获 llm.call span 的完整 prompt/completion | P2 | blocked | 观测性增强 |
| [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | Telegram 流式工具调用进度显示 | P2 | accepted | UX 改进 |
| [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) | 定义模拟安装的主机架构策略 | P3 | needs-review | 架构决策 |
| [#6658](https://github.com/zeroclaw-labs/zeroclaw/issues/6658) | 安装脚本支持 musl aarch64 | P2 | accepted | 平台扩展 |
| [#6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) | WebSocket 转向期间保留已提交流式输出 | High | open | 架构改进 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 审计：追踪 c3ff635 回滚中丢失的 153 个提交 | P2 | in-progress | 代码审计 |

### 路线图信号分析

**① v0.7.6 主题明确 - Skills 支持增强**
- Issue #6253 作为协调追踪器，明确将 `zeroclaw skills` 支持和 UX 改进列为 v0.7.6 发布主题
- 涵盖范围：CLI、loader、audit、install paths、sandbox、test harness、skill authoring tools
- 相关 PR #6667 已实现 background review fork 和 skill_manage tool
- 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6253

**② 观测性（Observability）成为热点**
- #6641 和 #6642 聚焦 OTel trace 增强，均被 #6009 和 #6190 的讨论所启发
- PR #6606 (preserve compatible reasoning field) 可能为这些增强铺路

**③ WebSocket/网关功能持续完善**
- #6659 请求网关会话通知推送 API
- #6661 请求 WebSocket 转向期间的输出完整性

---

## 7. 用户反馈摘要

### 真实用户痛点

**痛点 1：Telegram 集成不完整**
> "Agent cron job results only appear in web dashboard... No output is delivered to configured channels (Telegram)." — @icemann521
- **场景：** 用户配置了 Telegram 频道，期望 Cron 任务结果能推送到 Telegram
- **影响：** 定时任务无法主动通知用户，工作流受阻

**痛点 2：Homebrew 安装失败**
> "There is no version 0.7.5" — @luckByte
- **场景：** macOS 用户通过 Homebrew 安装时报错
- **状态：** 已通过 #6547 追踪，但需 Homebrew 侧合并

**痛点 3：Skill 管理工具文件识别问题**
> "SkillImprover + skill_manage only handle `SKILL.toml`, not `manifest.toml`" — @JordanTheJet
- **场景：** 使用 bundled skills（git-assistant, code-reviewer 等）的用户发现管理工具不兼容
- **影响：** Skill 改进功能对内置 skills 无效

**痛点 4：Provider reasoning 字段丢失**
> "After #6183, image markers in tool-result history can be normalized... But the reasoning field is not preserved." — @Audacity88
- **场景：** OpenAI 兼容提供商返回的 reasoning/reasoning_content 字段在多轮对话中丢失
- **状态：** PR #6606 已提交修复

### 用户满意度观察

- **满意度较高：** Telegram 部分功能（如 partial streaming draft messages）用户体验良好
- **不满点：** Cron 任务、Provider reasoning、Homebrew 安装等核心功能存在问题

---

## 8. 待处理积压

### 长期未响应的 Issues（>14

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**: 2026-05-15  
**项目**: sipeed/picoclaw  
**数据区间**: 过去 24 小时

---

## 1. 今日速览

PicoClaw 过去24小时保持高度活跃，共处理 **9 条 Issues** 和 **22 条 PRs**。版本迭代推进至 **v0.2.8-nightly.20260515**，多个依赖库完成安全更新和功能升级。今日社区重点聚焦于 **会话历史竞态条件** 和 **多 Agent 架构下的角色继承问题**，同时 Telegram 相关的功能增强 PR 持续推进。项目整体呈现稳健发展态势，依赖维护规范，文档同步 V3 配置格式的 PR 正在进行中。

---

## 2. 版本发布

### Nightly Build 发布

**版本**: `v0.2.8-nightly.20260515.794eb04f`  
**类型**: 自动化夜间构建  
**稳定性**: ⚠️ 可能不稳定，请谨慎使用

| 信息 | 详情 |
|------|------|
| Commit | `794eb04f` |
| 比较基准 | `v0.2.8...main` |
| 构建类型 | Automated nightly build |

**完整变更日志**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

---

## 3. 项目进展

### 已合并/关闭的 PRs（7 条）

| PR # | 类型 | 描述 | 状态 |
|------|------|------|------|
| [#2868](https://github.com/sipeed/picoclaw/pull/2868) | dependencies | bump `gronx` 1.19.6 → 1.19.7 | ✅ 已合并 |
| [#2867](https://github.com/sipeed/picoclaw/pull/2867) | dependencies | bump `golang.org/x/net` 0.53.0 → 0.54.0 | ✅ 已合并 |
| [#2866](https://github.com/sipeed/picoclaw/pull/2866) | dependencies | bump `telego` 1.8.0 → 1.9.0 | ✅ 已合并 |
| [#2865](https://github.com/sipeed/picoclaw/pull/2865) | dependencies | bump `vite` 8.0.10 → 8.0.13 | ✅ 已合并 |
| [#2864](https://github.com/sipeed/picoclaw/pull/2864) | dependencies | bump `larksuite/oapi-sdk-go` 3.6.1 → 3.7.5 | ✅ 已合并 |
| [#2863](https://github.com/sipeed/picoclaw/pull/2863) | dependencies | bump `sqlite` 1.48.2 → 1.50.1 | ✅ 已合并 |
| [#2832](https://github.com/sipeed/picoclaw/pull/2832) | feat | **Web/API: fetch models and saved catalog support** | ✅ 已合并 |

### 重点 PR 详情

**#2832 - Web/API 模型获取与目录支持** (by @SiYue-ZO)

这是一项重要的后端功能增强，拆自 #2752，包含：
- `POST /api/models/fetch` — 从上游 providers 获取可用模型
- `GET /api/models` — 模型列表接口

---

### 待合并的重要 PRs（15 条）

| PR # | 类型 | 描述 | 状态 |
|------|------|------|------|
| [#2836](https://github.com/sipeed/picoclaw/pull/2836) | fix | **PowerShell 安全修复**: 阻止通过 iex 注入的编码绕过 | 🔄 待合并 |
| [#2872](https://github.com/sipeed/picoclaw/pull/2872) | dependencies | bump `tailwindcss` 4.2.4 → 4.3.0 | 🔄 待合并 |
| [#2871](https://github.com/sipeed/picoclaw/pull/2871) | dependencies | bump `typescript-eslint` 8.59.1 → 8.59.3 | 🔄 待合并 |
| [#2870](https://github.com/sipeed/picoclaw/pull/2870) | dependencies | bump `prettier-plugin-tailwindcss` 0.7.2 → 0.8.0 | 🔄 待合并 |
| [#2812](https://github.com/sipeed/picoclaw/pull/2812) | feat | **添加根目录 Dockerfile** | 🔄 待合并 |
| [#2779](https://github.com/sipeed/picoclaw/pull/2779) | feat | **Telegram topic group trigger overrides** | 🔄 待合并 |
| [#2778](https://github.com/sipeed/picoclaw/pull/2778) | feat | **Agent working summary tool feedback** | 🔄 待合并 |
| [#2777](https://github.com/sipeed/picoclaw/pull/2777) | fix | **Cron 任务静默反馈** | 🔄 待合并 |
| [#2776](https://github.com/sipeed/picoclaw/pull/2776) | fix | **Telegram topic replies 停止打字状态** | 🔄 待合并 |
| [#2772](https://github.com/sipeed/picoclaw/pull/2772) | fix | **保留 Telegram forum topic 用于消息工具发送** | 🔄 待合并 |
| [#2766](https://github.com/sipeed/picoclaw/pull/2766) | docs | **文档同步至 V3 配置格式** (26个文件) | 🔄 待合并 |
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) | feat | **Web 聊天流式传输与滚动 UX** | 🔄 待合并 |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | refactor | **标准化渠道识别，解耦名称与 provider 类型** | 🔄 待合并 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 状态 | 热度 |
|---------|------|--------|------|------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | **[BUG] LLM 调用失败时未重试** | 14 | OPEN | 🔥🔥🔥 |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | **[Refactor] 考虑迁移至 OpenAI Responses API** | 11 | CLOSED | 🔥🔥 |
| [#2702](https://github.com/sipeed/picoclaw/issues/2702) | **多用户群组会话历史缺少发送者归属** | 3 | OPEN | 🔥 |
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | **子 Agent 继承根 Agent 的 AGENT.md 导致角色混淆** | 2 | OPEN | 🔥 |

### 热点 Issue 分析

**#629 - LLM 调用失败重试机制缺失** 🔥🔥🔥
- **问题本质**: 长任务执行中遇到 HTTP 500 时，任务挂起且不重试
- **影响范围**: OpenRouter provider 用户
- **社区诉求**: 生产环境可靠性保障
- **建议**: 关注 #2721 的会话竞态修复，可能关联同一重试逻辑层

**#2171 - OpenAI Responses API 迁移** 🔥🔥
- **进度**: 已 CLOSED
- **结论**: 团队已完成评估，确定迁移路径

**#2702 - 多用户群组会话历史归属问题** 🔥
- **问题本质**: Discord 等群组渠道使用默认 `chat` 维度时，所有用户共享同一会话，但历史消息缺少发送者标记
- **影响**: 无法追踪群聊中具体用户的发言上下文

**#2775 - 子 Agent 角色继承混淆** 🔥
- **问题本质**: Planner、Builder、Auditor 等子 Agent 都继承了根工作区的 AGENT.md，导致角色身份识别混乱
- **期望**: 每个子 Agent 应加载各自角色的系统提示

---

## 5. Bug 与稳定性

### 今日新报告/活跃的 Bug（按严重程度）

| 优先级 | Issue # | 描述 | 状态 | Fix PR |
|--------|---------|------|------|--------|
| 🔴 HIGH | [#2721](https://github.com/sipeed/picoclaw/issues/2721) | **会话历史竞态条件仍可复现** (`tool_use_id` 400 from Anthropic) | REOPENED | ❌ 无 |
| 🟡 MED | [#2795](https://github.com/sipeed/picoclaw/issues/2795) | **对话历史只能看到最后一条用户消息** | OPEN | ❌ 无 |
| 🟡 MED | [#2798](https://github.com/sipeed/picoclaw/issues/2798) | **Telegram Bot PDF 流数据错误** | OPEN | ❌ 无 |
| 🟡 MED | [#2787](https://github.com/sipeed/picoclaw/issues/2787) | **会话消息缺少时间戳** (统一使用 session.updated) | OPEN | ❌ 无 |
| 🟡 MED | [#2859](https://github.com/sipeed/picoclaw/issues/2859) | **小米 MIMO 多轮对话集成报错** (Param Incorrect) | OPEN | ❌ 无 |
| 🟢 LOW | [#629](https://github.com/sipeed/picoclaw/issues/629) | **LLM 调用失败不重试** | OPEN | ❌ 无 |

### 稳定性评估

⚠️ **关注事项**: 
- **#2721 会话竞态条件** 在 v0.2.5 仍可复现，表明存在未解决的回归风险
- **#2795 历史消息缺失** 影响用户体验和审计追溯
- 建议优先处理会话状态管理的并发问题

---

## 6. 功能请求与路线图信号

### 新功能需求

| Issue # | 功能描述 | 相关 PR | 纳入可能性 |
|---------|----------|---------|------------|
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | 子 Agent 角色隔离加载 | - | ⭐⭐ 中等 |
| [#2702](https://github.com/sipeed/picoclaw/issues/2702) | 多用户群组会话归属标记 | - | ⭐⭐ 中等 |
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) | Web 聊天流式传输 | #2587 | ⭐⭐⭐ 高 (已PR) |
| [#2766](https://github.com/sipeed/picoclaw/pull/2766) | V3 配置文档同步 | #2766 | ⭐⭐⭐ 高 (已PR) |
| [#2812](https://github.com/sipeed/picoclaw/pull/2812) | 根目录 Dockerfile | #2812 | ⭐⭐⭐ 高 (已PR) |

### 路线图信号分析

1. **Telegram 深度集成**: 多个 PR (#2779, #2776, #2772, #2777) 聚焦 Telegram forum topics 优化，暗示下一版本可能强化 Telegram 生态
2. **多 Agent 架构完善**: #2775 暴露的问题可能推动子 Agent 上下文隔离机制
3. **Web 前端体验**: #2587 流式传输是用户体验的重要提升

---

## 7. 用户反馈摘要

### 真实使用场景与痛点

| 场景 | 痛点 | 来源 |
|------|------|------|
| **生产环境长任务** | HTTP 500 导致任务挂起，无重试 | #629 |
| **Discord 群聊** | 多用户共享会话无法区分发言者 | #2702 |
| **多 Agent 工作流** | 子 Agent 角色混淆，行为不符合预期 | #2775 |
| **文档回顾** | 只能看到最后一条消息，审计困难 | #2795 |
| **Telegram 文件交互** | PDF 附件导致会话流断裂 | #2798 |
| **时间追溯** | 消息缺少独立时间戳 | #2787 |
| **微信多轮对话** | 小米 MIMO 模型集成不稳定 | #2859 |

### 用户满意度信号

- **负面**: 会话管理、文件处理、多 Agent 场景问题频发
- **正面**: 团队积极响应依赖更新和安全修复，版本迭代有序

---

## 8. 待处理积压

### 需要维护者关注的事项

| 类别 | Issue/PR # | 标题 | 状态 | 积压时长 | 建议 |
|------|------------|------|------|----------|------|
| 🔴 HIGH | [#2721](https://github.com/sipeed/picoclaw/issues/2721) | 会话历史竞态条件 (v0.2.5 仍复现) | REOPENED | ~15天 | **优先修复** |
| 🟡 MED | [#629](https://github.com/sipeed/picoclaw/issues/629) | LLM 调用失败不重试 | OPEN | ~82天 | 影响生产稳定性 |
| 🟡 MED | [#2795](https://github.com/sipeed/picoclaw/issues/2795) | 对话历史只显示最后消息 | OPEN | ~8天 | 影响审计 |
| 🟡 MED | [#2702](https://github.com/sipeed/picoclaw/issues/2702) | 群组会话缺少发送者归属 | OPEN | ~17天 | 影响多用户场景 |
| 🟢 LOW | [#2775](https://github.com/sipeed/picoclaw/issues/2775) | 子 Agent 角色继承混淆 | OPEN | ~10天 | 影响多 Agent 架构可靠性 |

### 积压趋势

⚠️ 存在 **5 个 stale 标记的 Issues**，其中 #629 自 2 月持续至今，核心可靠性问题需要系统性解决。

---

## 总结

**今日项目健康度**: 🟡 **良好，存在待修复的关键问题**

- **亮点**: 依赖更新规范，文档 V3 迁移有序推进，Telegram 功能增强丰富
- **风险**: 会话竞态条件持续影响生产环境，多用户场景和消息历史管理需要改进
- **建议**: 优先处理 #2721 和 #629，评估 #2775 对多 Agent 架构的影响

---

*报告生成时间: 2026-05-15 | 数据来源: GitHub PicoClaw 仓库*

</details>

<details>
<summary><strong>hermesagent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# hermes-agent 项目动态日报

**报告日期：** 2026-05-15  
**项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
**数据周期：** 过去 24 小时

---

## 1. 今日速览

2026-05-15，hermes-agent 项目保持**极高活跃度**：共产生 267 条 Issue 更新（211 新开/活跃 + 56 关闭）和 500 条 PR 更新（186 已合并/关闭 + 314 待合并），整体代码流动十分健康。今日共合并 5 个重要 PR，涵盖 Gemini 流式解析、P1 传输层错误修复、Discord 工具气泡清理等核心功能。社区围绕 CLI 渲染、Docker 部署、认证鉴权等问题展开热烈讨论，未发现新版本发布。建议维护团队优先处理 #25495（Docker P1 阻断）、#15080（Anthropic API 认证）、#19471（Telegram 网关崩溃）三个高优先级 Issue。

---

## 2. 版本发布

**今日无新版本发布。**

最近一次发布信息请查阅 [Releases 页面](https://github.com/NousResearch/hermes-agent/releases)。

---

## 3. 项目进展

以下为今日已合并/关闭的重要 PR，推进了关键功能或修复：

| PR # | 标题 | 状态 | 影响范围 |
|------|------|------|----------|
| [#26053](https://github.com/NousResearch/hermes-agent/pull/26053) | fix(run_agent): recover first object from concatenated tool_call args | **CLOSED** | 修复 Gemini-3-Flash-Preview 流式输出合并解析问题，P1 |
| [#26054](https://github.com/NousResearch/hermes-agent/pull/26054) | fix(transport): strip internal scaffolding keys + classify 5xx validation errors as non-retryable | **CLOSED** | 修复严格 OpenAI 兼容网关的确定性错误重试风暴，P1 |
| [#18306](https://github.com/NousResearch/hermes-agent/pull/18306) | feat(gateway): Discord tool progress bubbles auto-delete when job is done | **CLOSED** | Discord 进度气泡完成自动清理，提升用户体验 |
| [#25322](https://github.com/NousResearch/hermes-agent/pull/25322) | fix(agent): Background AIAgent generates differing system prompt busting prompt cache | **CLOSED** | 修复后台自我改进流程导致的提示缓存失效，P2 |
| [#22951](https://github.com/NousResearch/hermes-agent/pull/22951) | fix(cli): /sessions unknown command in classic REPL mode | **CLOSED** | 修复 /sessions 命令在经典 REPL 模式无法识别问题，P2 |
| [#24412](https://github.com/NousResearch/hermes-agent/pull/24412) | fix(cli): add /sessions handler to process_command | **CLOSED** | 为 /sessions 命令添加执行处理器 |
| [#23289](https://github.com/NousResearch/hermes-agent/pull/23289) | fix(cli): wire sessions and indicator slash commands | **CLOSED** | 将已注册的斜杠命令接入经典 CLI 调度器 |
| [#26048](https://github.com/NousResearch/hermes-agent/pull/26048) | test: unblock post-25957 shared CI | **CLOSED** | 修复 #25957 后的共享 CI 隔离问题 |

**项目整体向前推进评估：** 今日代码合并量较大（186 条 PR 关闭），重点修复了传输层、P1 优先级问题和 CLI 交互缺陷。CLI 命令体系（/sessions、/whoami）趋于完善，Discord 平台体验优化持续推进。

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最活跃、评论最多：

### 热点 Issue 讨论

**1. #15080 - Anthropic API HTTP 400 认证错误**（12 条评论，P1）
🔗 https://github.com/NousResearch/hermes-agent/issues/15080  
> 摘要：Claude Max 20x 订阅用户使用有效 OAuth 访问令牌访问 Anthropic 原生 API 时，所有请求被拒绝并返回 HTTP 400。  
> **诉求分析：** 认证流程与新版订阅模型的兼容性问题，用户期望明确的手动/API Key 认证路径。

**2. #4505 - Ollama 集成优化：原生 /api/chat vs OpenAI 兼容端点**（11 条评论）
🔗 https://github.com/NousResearch/hermes-agent/issues/4505  
> 摘要：建议使用 Ollama 原生 `/api/chat` 端点替代 OpenAI 兼容端点，以获得真正的 Delta 流式传输。  
> **诉求分析：** 用户对流式响应质量有较高期待，期望更好的实时的流式体验。

**3. #18080 - Dashboard 主题改进**（10 条评论，17 👍）
🔗 https://github.com/NousResearch/hermes-agent/issues/18080  
> 摘要：当前主题（Midnight、Ember、Mono、Cyberpunk、Rose）仅改变配色，字体选择不标准且对比度低，可读性差。  
> **诉求分析：** UI/UX 体验优化需求强烈，17 个点赞表明这是广泛的用户痛点。

**4. #11692 - 自改进代理的收据机制**（9 条评论）
🔗 https://github.com/NousResearch/hermes-agent/issues/11692  
> 摘要：提出 Hermes 自修改属性的治理问题——如何证明哪个技能版本产生了哪个输出（溯源性）。  
> **诉求分析：** 高端用户对 AI 代理治理、可审计性有深层需求，触及 Hermes 差异化核心。

### 热点 PR 动态

**#26055 - Discord 工具进度气泡自动删除功能**（OPEN）
🔗 https://github.com/NousResearch/hermes-agent/pull/26055  
> 新增 Discord 进度气泡（💻🐍📖等图标消息）在任务完成后自动清理功能，避免频道积累孤立气泡。

**#26056 - CLI 状态栏显示解析后的模型/提供商/上下文**（OPEN）
🔗 https://github.com/NousResearch/hermes-agent/pull/26056  
> 解决 OpenRouter/Codex 等解析后模型名与配置别名不一致的问题，提升用户可观测性。

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### 🔴 P1（阻断/崩溃，需立即处理）

| Issue # | 标题 | 状态 | 已有 Fix PR? |
|---------|------|------|-------------|
| [#25495](https://github.com/NousResearch/hermes-agent/issues/25495) | Matrix/synapse Docker 镜像损坏，启动停在 "fixing ownership" | **OPEN** | ❌ |
| [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) | Claude Max 订阅 OAuth 令牌导致所有请求 HTTP 400 | **OPEN** | ❌ |
| [#19471](https://github.com/NousResearch/hermes-agent/issues/19471) | Telegram 网关 --profile 进入崩溃循环，事件循环丢失 | **OPEN** | ❌ |
| [#25333](https://github.com/NousResearch/hermes-agent/issues/25333) | Gemini-3-Flash-Preview 并行工具调用解析失败 | **OPEN** | ✅ [#26053](https://github.com/NousResearch/hermes-agent/pull/26053) |

### 🟠 P2（功能受损，影响使用）

| Issue # | 标题 | 状态 | 已有 Fix PR? |
|---------|------|------|-------------|
| [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) | NAS Docker 持久化配置时 `[Errno 13] Permission denied` | **OPEN** | ❌ |
| [#9792](https://github.com/NousResearch/hermes-agent/issues/9792) | 虚拟环境迁移后 hermes 命令在外部 shell 中找不到 | **OPEN** | ❌ |
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | OpenAI-Codex 凭证池在新凭证轮换时丢失 | **OPEN** | ❌ |
| [#9721](https://github.com/NousResearch/hermes-agent/issues/9721) | 自定义 providers 无法设置 HTTP headers，Cloudflare 403 | **OPEN** | ❌ |
| [#7443](https://github.com/NousResearch/hermes-agent/issues/7443) | CLI TUI 中文输入重叠/光标偏移/删除异常 | **OPEN** | ❌ |
| [#19280](https://github.com/NousResearch/hermes-agent/issues/19280) | macOS 终端调整大小导致状态栏重复和空行泛滥 | **CLOSED** | ✅ |
| [#17975](https://github.com/NousResearch/hermes-agent/issues/17975) | 终端调整大小时 CLI TUI 渲染额外空行 | **CLOSED** | ✅ |

### 🟡 P3（体验问题，低优先级）

| Issue # | 标题 | 状态 | 备注 |
|---------|------|------|------|
| [#25551](https://github.com/NousResearch/hermes-agent/issues/25551) | Windows 全新安装失败 | **OPEN** | 安装脚本兼容性问题 |
| [#25594](https://github.com/NousResearch/hermes-agent/issues/25594) | 自定义 provider 视觉模型检测缺失导致 HTTP 400 | **OPEN** | 模型注册机制问题 |
| [#15886](https://github.com/NousResearch/hermes-agent/issues/15886) | 长文档写入频繁触发 'Stream stalled mid tool-call' | **OPEN** | 流式响应超时 |

**稳定性小结：** 今日 4 个 P1 Issue 中 1 个已有 Fix，3 个仍待处理。Docker 镜像损坏 (#25495) 和 Telegram 网关崩溃 (#19471) 属于生产阻断，建议优先响应。P2 层面问题较多（8 个未关闭），主要集中在认证、CLI 渲染和多平台部署场景。

---

## 6. 功能请求与路线图信号

以下功能请求具有代表性，可能进入下一版本：

| Issue/PR # | 标题 | 评估 | 进入版本可能性 |
|------------|------|------|----------------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Dashboard 主题系统全面改进（配色+字体+对比度） | 高用户需求（17 👍），属 UI 现代化诉求 | 🟡 中 |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | 自改进代理的输出溯源/收据机制 | 触及 Hermes 差异化核心，符合治理趋势 | 🟢 高 |
| [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | 用户隔离和基于身份的权限系统 | 安全需求，防护提示注入攻击 | 🟢 高 |
| [#22620](https://github.com/NousResearch/hermes-agent/issues/22620) | 技能列表膨胀导致上下文窗口膨胀——需要向量路由或懒加载 | 规模化场景下的性能优化 | 🟡 中 |
| [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) | 自创建技能缺少机制级正确性保证 | 与 #11692 相关，扩展治理边界 | 🟡 中 |
| [#9596](https://github.com/NousResearch/hermes-agent/pull/9596) | OTel 可观测性集成（Tracing + Grafana/Prometheus） | 长期开放，正在推进 | 🟢 高 |
| [#25216](https://github.com/NousResearch/hermes-agent/pull/25216) | 新增 Auriko 作为内置 provider 插件 | 平台扩展，今日 OPEN | 🟢 高（已 PR） |

**路线图信号总结：** 安全/治理（用户隔离、溯源机制）和可观测性（OTel）是当前最高优先级的功能方向；UI 现代化（主题系统）有较强社区呼声；provider 生态持续扩展（新增 Auriko）。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的关键用户痛点与场景：

### 痛点聚合

1. **Docker 部署体验不佳**
   - NAS 用户（UGreen DX4600/UGOS Pro）遇到持久化配置权限问题
   - Matrix/Synapse 容器启动阻塞，无法正常使用
   - 多用户场景下路径挂载和权限继承存在隐患

2. **认证/凭证管理复杂**
   - OAuth 认证与 API Key 认证路径混淆
   - 凭证池轮换时存在竞态条件，导致新凭证丢失
   - 自定义 providers 的 HTTP headers 无法配置，Cloudflare 拦截

3. **CLI/TUI 跨平台渲染问题**
   - macOS 终端 resize 导致 UI 乱码/重复
   - 中文输入光标错位、删除行为异常
   - OSC-8 超链接转义序列在 /clear 等命令后泄露

4. **流式响应可靠性**
   - Gemini 流式输出格式不规范（`}{` 分隔）导致解析失败
   - 长文档写入时流式超时频繁
   - 远程 Ollama 实例连接仅支持 localhost

### 正面反馈信号

- Discord 进度气泡清理功能得到积极响应（#18306 合并）
- /sessions、/whoami 命令的完善提升了 CLI 可用性
- 社区活跃度高（单日 211 条新 Issue/PR），表明项目关注度持续上升

---

## 8. 待处理积压

以下 Issue 长期未响应或高优先级但无 Fix PR，需维护团队关注：

### 超 30 天未响应的 P1/P2 Issue

| Issue # | 标题 | 创建日期 | 当前状态 |
|---------|------|----------|----------|
| [#4505](https://github.com/NousResearch/hermes-agent/issues/4505) | Ollama 集成优化：原生 vs OpenAI 兼容端点 | 2026-04-01 | **OPEN**（45 天） |
| [#7494](https://github.com/NousResearch/hermes-agent/issues/7494) | 远程 Ollama 端点仅支持 localhost | 2026-04-11 | **OPEN**（35 天） |
| [#9792](https://github.com/NousResearch/hermes-agent/issues/9792) | 虚拟环境迁移后 hermes 命令找不到 | 2026-04-14 | **OPEN**（32 天） |
| [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) |

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**报告日期：** 2026-05-15  
**项目：** qwibitai/nanoclaw  
**数据来源：** github.com/nanocoai/nanoclaw

---

## 1. 今日速览

NanoClaw 项目今日展现出极高的开发活跃度。过去24小时内共处理 **25 项工件更新**（1个 Issue + 24个 PR），其中 **13个 PR 已合并/关闭**，另有 **11个 PR 待合并**。值得注意的是，今日未发布新版本，维护者将主要精力投入在功能迭代与安全加固上。合并的 PR 以技能（skill）本地化、平台集成（MCP 工具链）和基础设施改进为主，整体项目健康度良好，无重大阻塞性问题。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，展现了项目的关键推进方向：

### 3.1 技能本地化与自主可控

| PR | 标题 | 说明 |
|---|---|---|
| [#2453](https://github.com/nanocoai/nanoclaw/pull/2453) | feat(copy-grader): localize copy-grader skill | 从上游本地化营销文案评分技能，增强安装后可编辑性 |
| [#2451](https://github.com/nanocoai/nanoclaw/pull/2451) | feat(audit-website): localize audit-website skill | 将 squirrelscan/skills 技能本地化，避免上游删除导致功能丢失 |
| [#2448](https://github.com/nanocoai/nanoclaw/pull/2448) | feat(social-listening): add composite social-listening skill | 新增社交聆听技能，整合多搜索源并行抓取、去重并输出结构化报告 |
| [#2449](https://github.com/nanocoai/nanoclaw/pull/2449) | feat(linkedin-community): add agent-browser-based LinkedIn 社区管理技能 | 新增 LinkedIn 有机运营能力（发布、评论互动、指标拉取） |
| [#2447](https://github.com/nanocoai/nanoclaw/pull/2447) | feat(reddit): add read-only Reddit MCP + /reddit-research skill | 新增 Reddit 只读访问及研究技能，覆盖 ICP 语言挖掘、竞品痛点发现等场景 |

> **评估：** 连续多个 PR 由同一作者 @fresholdidea 贡献，说明项目正系统性地将外部依赖的技能本地化，提升自托管灵活性。

### 3.2 审计工具链升级

| PR | 标题 | 说明 |
|---|---|
| [#2455](https://github.com/nanocoai/nanoclaw/pull/2455) | feat(audit-website): composite local audit stack (Lighthouse + axe + linkinator) | 替换 squirrelscan 方案为自托管技术栈，解决 Cloudflare AI 防护导致的容器环境兼容问题 |
| [#2452](https://github.com/nanocoai/nanoclaw/pull/2452) | feat(container): add lighthouse CLI for site audits | 在容器中引入 Lighthouse 13.3.0，复用 agent-browser 的 Chromium 依赖 |

> **评估：** 审计能力从外部服务依赖转向自托管，显著提升了容器化部署的健壮性。

### 3.3 MCP 工具生态扩展

| PR | 标题 | 说明 |
|---|---|
| [#2446](https://github.com/nanocoai/nanoclaw/pull/2446) | feat(firecrawl): add Firecrawl MCP + /firecrawl skill | 集成 Firecrawl 结构化提取与爬取能力 |
| [#2445](https://github.com/nanocoai/nanoclaw/pull/2445) | feat(serper): add Serper MCP + /serper-search skill | 集成 Serper.dev 搜索服务，完善环境变量透传机制 |
| [#2450](https://github.com/nanocoai/nanoclaw/pull/2450) | feat(linkedin-ads): add LinkedIn Ads playbook skills | 新增 LinkedIn Ads 广告运营技能 |

### 3.4 缺陷修复

| PR | 标题 | 说明 |
|---|---|
| [#2473](https://github.com/nanocoai/nanoclaw/pull/2473) | fix(destinations): remove misleading scratchpad clause | 移除 `<internal>` 标签描述中与系统设计矛盾的"外部内容视为草稿"条款 |

---

## 4. 社区热点

以下为当前开放、讨论最活跃或最受关注的 PR：

### 4.1 安全强化 — 审批路径权限加固

**PR #2478** — `[security] fix(approlations): require admin for approval responses`  
作者：@Hinotoi-agent | 2026-05-15

此 PR 加固了 approval 响应路径，要求除持有有效 `questionId` 外，响应者还需是所有者/全局管理员或对应 agent group 的管理员，才能分发 OneCLI  approvals 或注册模块的 approval 处理器。这填补了仅凭 `questionId` 即可解决待处理审批的安全漏洞。

📎 **链接：** https://github.com/nanocoai/nanoclaw/pull/2478

### 4.2 网络访问治理 — 技能级互联网管控

**PR #2477** — `feat(network): hooks to allow skills to regulate agents' internet access`  
作者：@kky | 2026-05-15

新增网络钩子机制，允许技能对 agent 的互联网访问进行细粒度调控。这是企业级部署中高度需求的能力，支持合规审计与数据泄露防护。

📎 **链接：** https://github.com/nanocoai/nanoclaw/pull/2477

### 4.3 多 provider 统一体验

**PR #2475** — `feat(codex): surface skills + persona to codex agents`  
作者：@chiptoe-svg | 2026-05-14

目标是让 Codex agent 与 Claude Code agent 看到相同的 persona 和技能目录，将 provider 切换简化为配置变更而非内容重写。

📎 **链接：** https://github.com/nanocoai/nanoclaw/pull/2475

**PR #2474** — `feat(setup): AI-coding-CLI picker`  
作者：@chiptoe-svg | 2026-05-14

在 setup 流程中新增 CLI picker，支持在 Claude Code / OpenAI Codex / Aider / Gemini-CLI 等工具间切换。

📎 **链接：** https://github.com/nanocoai/nanoclaw/pull/2474

### 4.4 Slack 线程模型改进

**PR #2472** + **#2471** — Slack per-thread 会话增强  
作者：@luisfontes | 2026-05-14

- #2472：为 per-thread 会话中的顶层 DM 创建独立 session，bot 回复投递到对应 thread
- #2471：新增 router 钩子，解决 Slack DMs 中 SDK 将所有顶层消息分配相同 threadId 的平台兼容问题

📎 **链接：** https://github.com/nanocoai/nanoclaw/pull/2472 | [#2471](https://github.com/nanocoai/nanoclaw/pull/2471)

### 4.5 CLI 模式替代 Agent SDK

**PR #2470** — `feat(cli-mode): CLI 模式替代 Agent SDK，走交互式配额`  
作者：@tier2tech-tian | 2026-05-14

为 agent-runner 新增 `runCliQuery()` 路径，通过 `claude --print --resume` 替代 Agent SDK `query()`，走交互式配额。配套 40 个单元测试，覆盖 `useCliMode` 字段及环境变量清理逻辑。

📎 **链接：** https://github.com/nanocoai/nanoclaw/pull/2470

---

## 5. Bug 与稳定性

### 5.1 新报告 Bug

**🔴 Issue #2466** — `Duplicate container spawn race on wakeContainer when script and host sweep run concurrently`  
类型：Bug | 优先级：Low | 标签：hardening  
作者：@glifocat | 创建于 2026-05-14

**复现场景（2026-05-14 ~10:15 UTC）：** 在运行 `scripts/inject-gamma-brief.ts`（向 gamma-expert inbound 写入 A2A 消息并调用 `wakeContainer`）的同时，host 服务也在执行，导致约 10 秒间隔内生成了两个 `nanoclaw-v2-gamma-expert-*` 容器。两个容器独立处理了同一份 brief。

**影响：** 重复处理、资源浪费、潜在状态不一致。  
**当前状态：** 已开放，1 条评论，0 个 👍  
**Fix PR：** 暂无

📎 **链接：** https://github.com/nanocoai/nanoclaw/issues/2466

### 5.2 稳定性小结

| 类别 | 数量 | 说明 |
|---|---|---|
| 新报告 Bug | 1 | 容器重复创建竞争条件 |
| 安全相关 Fix | 1 | 已在 #2478 修复（待合并） |
| 文档/配置修复 | 1 | #2473 scratchpad 描述修正 |

---

## 6. 功能请求与路线图信号

基于今日开放 PR 与 Issue，可推断项目近期路线图方向：

| 方向 | 证据 | 评估 |
|---|---|---|
| **安全与合规加固** | #2478 (admin 权限强化)、#2477 (网络访问管控钩子) | 高优先级，预计下一版本纳入 |
| **多 provider 统一抽象** | #2475 (Codex 技能对齐)、#2474 (CLI picker) | 中高优先级，降低 provider 切换成本 |
| **消息路由与平台适配** | #2472/#2471 (Slack per-thread)、#2470 (CLI mode) | 中优先级，改善特定场景可用性 |
| **技能生态扩展** | #2450 (LinkedIn Ads)、#2449 (LinkedIn 社区)、#2447 (Reddit)、#2446 (Firecrawl) | 持续迭代，本地化 + 自托管为主线 |

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的核心诉求：

**@glifocat 的复现报告揭示了以下痛点：**

- **并发场景下的容器生命周期管理缺陷：** 当脚本注入和 host sweep 并发执行 `wakeContainer` 时，系统未实现幂等性保护或分布式锁机制，导致容器被重复创建
- **建议的修复思路：** 在 `wakeContainer` 中引入幂等检查（已存在容器则跳过）或基于事件去重

> 暂无其他用户在今日 Issue 中发表评论。

---

## 8. 待处理积压

以下为长期未响应或值得维护者关注的项目：

| # | 标题 | 类型 | 状态 | 积压时长 | 备注 |
|---|---|---|---|---|---|
| [#2466](https://github.com/nanocoai/nanoclaw/issues/2466) | Duplicate container spawn race | Bug | OPEN | 1 天 | 虽优先级标注为 Low，但涉及容器重复创建，可能影响生产环境资源计费与状态一致性，建议尽快评估 |
| [#2476](https://github.com/nanocoai/nanoclaw/pull/2476) | Restart no nanoclaw | feat | OPEN | 1 天 | 缺少描述摘要，reviewer 应跟进了解功能意图 |
| [#2470](https://github.com/nanocoai/nanoclaw/pull/2470) | CLI mode alternative | feat | OPEN | 1 天 | 附带40个单元测试，ready for review |

---

## 附录：关键指标一览

```
┌─────────────────────────────────────────────────────────┐
│  NanoClaw 2026-05-15 关键指标                            │
├──────────────────┬──────────────────────────────────────┤
│  Issues (24h)   │  新开/活跃: 1  │  已关闭: 0            │
│  PRs (24h)       │  待合并: 11   │  已合并/关闭: 13      │
│  Releases        │  0 个                                 │
│  开放安全 PR     │  1 (#2478) — 待合并                   │
│  开放功能 PR     │  8 个                                 │
│  Bug 报告        │  1 (#2466 竞争条件)                  │
│  活跃贡献者      │  ≥5 人                               │
└──────────────────┴──────────────────────────────────────┘
```

---

*本报告由 NanoClaw 项目数据分析自动生成 | 报告时间：2026-05-15*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：** 2026-05-15  
**项目仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)  
**数据来源：** GitHub 过去 24 小时活动统计

---

## 1. 今日速览

IronClaw 项目今日保持极高的开发活跃度，共处理 **50 条 Issues 更新**（48 条新开/活跃，2 条关闭）和 **50 条 PR 更新**（38 条待合并，12 条已合并/关闭）。项目重心仍围绕 **Reborn 架构落地** 展开，多个工作流并行推进，包括 WebUI Beta、Channel 迁移、Hook 框架及文件系统统一抽象层。今日成功发布补丁版本 **v0.28.2**，修复了文档和依赖问题。整体项目健康度良好，开发节奏稳健。

---

## 2. 版本发布

### ✅ 已发布：v0.28.2

| 项目 | 版本变更 | 发布时间 |
|------|---------|---------|
| ironclaw | 0.28.1 → **0.28.2** | 2026-05-14 |

**变更类型：** 手动版本 bump（遵循 PR #3388 模式）

**主要修复：**
- 文档修复（具体内容见 Changelog）
- 依赖项更新

**PR 链接：** [#3674](https://github.com/nearai/ironclaw/pull/3674)  
**贡献者：** @nickpismenkov

> ⚠️ **迁移提示：** 此次为补丁版本，API 保持兼容，无需特殊迁移操作。

---

## 3. 项目进展

### 🚀 今日合并/关闭的重要 PR

#### 架构重构类

| PR 编号 | 标题 | 状态 | 重要性 | 说明 |
|--------|------|------|--------|------|
| [#3554](https://github.com/nearai/ironclaw/pull/3554) | arch(level1-merged): integrate ws-1 + ws-2 + ws-3 + ws-3.5 | ✅ CLOSED | ⭐⭐⭐ | 合并 WS1-3.5 四层策略 trait，为下游 planner 提供统一基座 |
| [#3643](https://github.com/nearai/ironclaw/pull/3643) | arch(ws-3.5): add loop family registry | ✅ CLOSED | ⭐⭐ | 引入 Family 抽象，支持 Profile 解析到具体策略族 |
| [#3556](https://github.com/nearai/ironclaw/pull/3556) | arch(ws-5): default strategies - Default* impls | ✅ CLOSED | ⭐⭐ | 为 9 个 trait 实现默认策略，奠定 canonical executor 基准行为 |
| [#3551](https://github.com/nearai/ironclaw/pull/3551) | arch(ws-1): strategy traits alpha | ✅ CLOSED | ⭐⭐ | 请求塑形策略：prompt shape、capability filter、model preference |
| [#3552](https://github.com/nearai/ironclaw/pull/3552) | arch(ws-2): strategy traits beta | ✅ CLOSED | ⭐⭐ | 批处理、Gate 处理、错误恢复策略 |
| [#3553](https://github.com/nearai/ironclaw/pull/3553) | arch(ws-3): strategy traits gamma | ✅ CLOSED | ⭐⭐ | 循环终止、输入排空、迭代/时钟预算策略 |

#### 核心功能类

| PR 编号 | 标题 | 状态 | 说明 |
|--------|------|------|------|
| [#3670](https://github.com/nearai/ironclaw/pull/3670) | feat(outbound): FilesystemOutboundStateStore | 🟡 OPEN | 新增文件系统持久化 Outbound 元数据，叠加于 #3666 |
| [#3671](https://github.com/nearai/ironclaw/pull/3671) | feat(authorization): FilesystemCapabilityLeaseStore unified put/get | 🟡 OPEN | 授权存储迁移至统一文件系统抽象 |
| [#3666](https://github.com/nearai/ironclaw/pull/3666) | feat(processes): FilesystemProcessStore unified put/get | 🟡 OPEN | 进程存储首批消费者迁移 |
| [#3661](https://github.com/nearai/ironclaw/pull/3661) | feat(filesystem): native query + ensure_index | 🟡 OPEN | LibSQL/Postgres 双后端支持精确/前缀索引，Record/Index/CAS 三件套完成 |
| [#3644](https://github.com/nearai/ironclaw/pull/3644) | arch(ws-9): wire capability host port | 🟡 OPEN | Capability Host 接线，将 skeleton 替换为 host-runtime 支持 |
| [#3573](https://github.com/nearai/ironclaw/pull/3573) | feat(reborn): add ironclaw_hooks framework foundation | 🟡 OPEN | **重大里程碑**：Hooks 框架 v1 完整实现，包含信任原语、密封决策类型、调度器、中间件等 |
| [#3640](https://github.com/nearai/ironclaw/pull/3640) | feat(hooks): event-triggered hooks Phase 5 | 🟡 OPEN | EventTriggered Hook 扩展，支持订阅 RuntimeEvent 异步响应 |
| [#3590](https://github.com/nearai/ironclaw/pull/3590) | feat(reborn): Telegram v2 inbound tracer | 🟡 OPEN | Reborn ProductAdapter Webhook → Ledger → Binding 追踪链路（回执路径暂存根） |
| [#3572](https://github.com/nearai/ironclaw/pull/3572) | Structure Reborn ProductAdapters as WASM components | 🟡 OPEN | 探索 WASM 组件化架构 |

---

## 4. 社区热点

### 🔥 今日评论量最高的 Issues

| 排名 | Issue | 评论数 | 主题 | 热度分析 |
|-----|-------|--------|------|---------|
| 1 | [#2987](https://github.com/nearai/ironclaw/issues/2987) | **44** | [EPIC] Track Reborn architecture landing strategy | 🔥 核心指挥官议题，追踪 Reborn 架构落地整体进度 |
| 2 | [#3022](https://github.com/nearai/ironclaw/issues/3022) | **9** | Reborn cutover blocker: event substrate integration tests | 跨服务集成测试定义，Cutover 前置条件 |
| 3 | [#3087](https://github.com/nearai/ironclaw/issues/3087) | **4** | [Reborn] Compose ironclaw_host_runtime services | Host Runtime 服务组合设计 |
| 4 | [#3036](https://github.com/nearai/ironclaw/issues/3036) | **3** | [EPIC] Configuration-as-Code | 租户蓝图和用例 harness 声明式配置 |
| 5 | [#3266](https://github.com/nearai/ironclaw/issues/3266) | **3** | Define outbound egress and subscription policy | 出站策略定义 |

### 📊 热点议题深度分析

#### #2987 — Reborn 架构落地 Epic（评论数：44）

**核心诉求：** 追踪 IronClaw Reborn 架构落地进度，避免评审者面对单一巨型堆叠 PR。

**当前进度（截至 2026-05-09）：**
- ✅ PR0 合约冻结完成（#2983）
- ✅ 分组实现 PR → 集成完成
- 🔄 进行中：lo...（摘要截断）

**战略意义：** 此 Epic 是 Reborn 项目的总纲，所有子模块（ProductAdapter、TurnCoordinator、Event Projection 等）均围绕此展开。44 条评论表明社区对此项目走向高度关注。

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug

#### P0 级（紧急）

> 暂无 P0 级新报告。

#### P1 级（高优先级）

> 暂无 P1 级新报告。

#### P2 级及以下

| Issue | 标题 | 严重程度 | 状态 | 说明 |
|-------|------|---------|------|------|
| [#3673](https://github.com/nearai/ironclaw/issues/3673) | openai_compatible provider drops reasoning_content | suggested_P0 | 🆕 OPEN | **QA 测试发现**：DeepSeek v4-pro 多轮工具调用场景下，`reasoning_content` 被丢弃，影响 thinking-mode 功能 |
| [#2902](https://github.com/nearai/ironclaw/issues/2902) | Telegram is not working for NEAR Foundation instance | suggested_P2 | 🟡 OPEN | Telegram 频道在 NEAR Foundation 实例上无法工作（已存在 15 天） |

**#3673 详情：**
- **影响版本：** IronClaw 0.28.1
- **测试环境：** local (cloned ironclaw)
- **问题位置：** `crates/ironclaw_llm/src/nearai_chat.rs`
- **复现步骤：** 使用 generic openai_compatible 后端 → DeepSeek thinking-mode 多轮工具调用
- **修复状态：** 暂无 Fix PR

---

## 6. 功能请求与路线图信号

### 📋 今日新增的重要 Feature Requests

| Issue | 标题 | 优先级 | 关联模块 | 纳入可能性 |
|-------|------|--------|---------|-----------|
| [#3623](https://github.com/nearai/ironclaw/issues/3623) | [Reborn WebUI Beta] Add BeforeInboundPolicy seam | P0 | M2-inbound-workflow | ⭐⭐⭐ 高 |
| [#3612](https://github.com/nearai/ironclaw/issues/3612) | [Reborn WebUI Beta] Add WebUI-facing RebornServices facade | P0 | M2-inbound-workflow | ⭐⭐⭐ 高 |
| [#3607](https://github.com/nearai/ironclaw/issues/3607) | [Reborn WebUI Beta] Owner-module tracker | P1 | docs | ⭐⭐⭐ 高 |
| [#3630](https://github.com/nearai/ironclaw/issues/3630) | [Reborn WebUI Beta] Define gate, cancel, resume DTO lifecycle | P1 | M2-inbound-workflow | ⭐⭐⭐ 高 |
| [#3524](https://github.com/nearai/ironclaw/issues/3524) | Reborn: first-class loop hooks roadmap | P2 | agent, hooks | ⭐⭐ 已启动 |
| [#3118](https://github.com/nearai/ironclaw/issues/3118) | Build native Reborn memory storage/search service | P1 | M4-host-kernel | ⭐⭐ 进行中 |
| [#3572](https://github.com/nearai/ironclaw/issues/3572) | Structure Reborn ProductAdapters as WASM components | P2 | reborn | ⭐ 探索中 |

### 🗺️ 路线图信号分析

**WebUI Beta 冲刺明确：**
- Issue #3607 作为 WebUI Beta 的 Owner-Module Tracker，明确 Beta 产品面为 **WebUI / WebChat v2**
- 相关子任务（#3623, #3612, #3630, #3629）均标记 P0/P1，优先级极高
- PR #3590（Telegram v2 inbound tracer）已作为 WebUI Beta 基础设施先行交付

**Channel 迁移大规模展开：**
- #3577 追踪所有 v1 Channel 迁移至 Reborn ProductAdapter
- 子任务覆盖：Telegram(#3581)、WeChat(#3582)、Slack(#3579)
- 迁移指南已发布：`docs/reborn/how-to-port-channel-to-reborn.md`

---

## 7. 用户反馈摘要

### 💬 社区讨论反映的核心痛点

#### 痛点 1：配置管理碎片化
**来源：** [#3036](https://github.com/nearai/ironclaw/issues/3036)

> 运营商目前需要手动编辑 `.env`、`.system/...` 下的 workspace docs、settings JSON、extension installs 和 runtime flags 的混合体——没有 schema、没有 diff、没有审计追踪、无法 sour...

**诉求：** Configuration-as-Code，支持租户蓝图和用例 harness 的声明式配置。

#### 痛点 2：Telegram 集成问题
**来源：** [#2902](https://github.com/nearai/ironclaw/issues/2902)

> Telegram 频道在 NEAR Foundation 实例上完全无法工作（附带截图）。

**诉求：** 修复 Telegram 集成问题，确保跨实例一致性。

#### 痛点 3：LLM Provider 兼容性
**来源：** [#3673](https://github.com/nearai/ironclaw/issues/3673)

> openai_compatible provider 在多轮工具调用场景下丢失 `reasoning_content`，破坏 DeepSeek thinking-mode 功能。

**诉求：** 完整保留 reasoning_content 字段，支持新兴模型特性。

### 👍 社区正面反馈

- **#3036** 获得 1 个 👍，表明 Configuration-as-Code 需求得到社区认可
- Issue #2987 持续活跃，44 条评论显示社区对 Reborn 架构落地的强烈关注和参与

---

## 8. 待处理积压

### ⚠️ 长期未解决的重要 Issues

| Issue | 创建时间 | 距今天数 | 优先级 | 标题 | 风险提示 |
|-------|---------|---------|--------|------|---------|
| [#2902](https://github.com/nearai/ironclaw/issues/2902) | 2026-04-23 | **22 天** | P2 | Telegram is not working for NEAR Foundation instance | 用户报告生产问题，长时间未解决 |
| [#3022](https://github.com/nearai/ironclaw/issues/3022) | 2026-04-28 | **17 天** | P1 | Reborn cutover blocker: event substrate integration tests | Reborn Cutover 前置条件 |

### 🔧 需要维护者关注的 PR

| PR | 创建时间 | 距今天数 | 状态 | 标题 | 阻塞情况 |
|----|---------|---------|------|------|---------|
| [#3670](https://github.com/near

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目日报

**报告日期**：2026-05-15  
**项目**：netease-youdao/LobsterAI  
**数据来源**：GitHub Activity (过去24小时)

---

## 1. 今日速览

2026-05-15 项目保持高度活跃态势。24小时内共处理 **29 条 PR 更新**（含1个新版本发布），合并/关闭28个，已接近单日 PR 处理天花板水平。版本 **v2026.5.13** 刚刚发布，聚焦 OpenClaw 上下文压缩、插件管理和工件预览三大核心功能的增强与稳定性修复。今日无新开 Issues，社区维护状态稳健。**整体评估：高度活跃 🎯**

---

## 2. 版本发布

### 🎉 LobsterAI v2026.5.13 已发布

**发布时间**：2026-05-14  
**发布 PR**：[#1984](https://github.com/netease-youdao/LobsterAI/pull/1984)  
**发布者**：@fisherdaddy

**本次更新亮点**：

| 领域 | 变更内容 |
|------|---------|
| **Context Compaction** | 新增会话入口实时上下文使用量指示器；支持 OpenClaw 上下文压缩维护模式 |
| **Plugin Management** | 新增插件管理功能及高级配置选项 |
| **Artifacts** | 工件渲染多项增强，支持 Excel/PPTX 本地 HTTP 预览 |
| **Bug Fixes** | 修复 mid-turn artifact 误识别、中文 Windows 应用名乱码、macOS npm 插件安装失败等 |

**迁移注意事项**：
- macOS 用户插件目录从 `vendor/openclaw-runtime/` 迁移至 `userData` 路径，升级后需重新确认插件状态
- MCP 支持已迁移至 OpenClaw 原生实现，自建 mcp-bridge 中转层已废弃

---

## 3. 项目进展

### 合并/关闭的代表性 PR（共28个）

#### 🔥 高影响力 PR

| PR # | 类型 | 标题 | 贡献者 | 合并日期 |
|------|------|------|--------|----------|
| [#1980](https://github.com/netease-youdao/LobsterAI/pull/1980) | 重构 | **refactor(mcp): 迁移到 OpenClaw 原生 MCP 支持** | @btc69m979y-dotcom | 2026-05-14 |
| [#1983](https://github.com/netease-youdao/LobsterAI/pull/1983) | 功能 | **feat(artifacts): 本地 HTTP 服务器预览 Excel/PPTX 渲染增强** | @liugang519 | 2026-05-14 |
| [#1977](https://github.com/netease-youdao/LobsterAI/pull/1977) | 功能 | **feat(artifacts): HTML 工件预览改用本地 HTTP 服务器** | @liugang519 | 2026-05-14 |
| [#1981](https://github.com/netease-youdao/LobsterAI/pull/1981) | 修复 | **fix(plugin): macOS 插件 npm 安装失败** | @btc69m979y-dotcom | 2026-05-14 |

**详细说明**：

1. **#1980 - MCP 重构**：移除自建 mcp-bridge 中转层，全面迁移至 OpenClaw 原生 MCP Client 模式（支持 stdio/sse/streamable-http 三种传输类型），并修复 Windows 环境下 MCP SDK 环境变量继承问题。

2. **#1977/#1983 - 工件预览架构升级**：将 HTML/Excel/PPTX 预览从内联方式迁移至本地 HTTP 服务器（127.0.0.1），修复深色主题下标题行文字不可见、路径含空格截断、外部 CSS/JS 加载 403 等问题。

3. **#1981 - macOS 兼容性修复**：参照 skillManager.ts 的 `resolveNpmCliJs` 模式，优先使用内置 npm-cli.js，修复从 Dock/Launchpad 启动时 npm 路径缺失导致的 ENOENT 错误。

#### 🛠️ 稳定性改进

| PR # | 标题 | 贡献者 | 合并日期 |
|------|------|--------|----------|
| [#1978](https://github.com/netease-youdao/LobsterAI/pull/1978) | fix(heartbeat): 优化心跳 token 消耗 | @btc69m979y-dotcom | 2026-05-14 |
| [#1982](https://github.com/netease-youdao/LobsterAI/pull/1982) | fix(cowork): 收窄 mid-turn artifact 检测 | @btc69m979y-dotcom | 2026-05-14 |
| [#1979](https://github.com/netease-youdao/LobsterAI/pull/1979) | fix(plugins): 插件管理图标调整及用户插件持久化 | @btc69m979y-dotcom | 2026-05-14 |
| [#1973](https://github.com/netease-youdao/LobsterAI/pull/1973) | fix(artifacts): 修复中文 Windows 应用名乱码 | @btc69m979y-dotcom | 2026-05-14 |

#### 🔧 技术债务清理（Stale PR 批量关闭）

以下 5 个长期积压的 stale PR 于今日统一处理：

| PR # | 类型 | 标题 |
|------|------|------|
| [#825](https://github.com/netease-youdao/LobsterAI/pull/825) | fix(skill) | 添加本地 skill 上传重复检测 |
| [#841](https://github.com/netease-youdao/LobsterAI/pull/841) | fix(polling) | 防止运行时轮询周期重叠 |
| [#842](https://github.com/netease-youdao/LobsterAI/pull/842) | feat(security) | 安全环境扫描功能 |
| [#847](https://github.com/netease-youdao/LobsterAI/pull/847) | fix(markdown) | 保留单波浪号范围渲染 |
| [#848](https://github.com/netease-youdao/LobsterAI/pull/848) | fix(cowork) | 批量配置写入事务 |
| [#852](https://github.com/netease-youdao/LobsterAI/pull/852) | fix(main) | 窗口销毁后 event.sender 调用崩溃 |
| [#853](https://github.com/netease-youdao/LobsterAI/pull/853) | feat(cowork) | Markdown/JSON/JSONL 会话导出格式 |

---

## 4. 社区热点

### 🔔 待合并 PR

| PR # | 类型 | 标题 | 状态 |
|------|------|------|------|
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) | chore(deps) | bump @headlessui/react from 1.7.19 to 2.2.10 | ⏳ **待合并** |

**分析**：该 PR 由 dependabot 自动创建，将 Headless UI React 从 1.7.19 升级至 2.2.10，主要为依赖版本跟进，预期无破坏性变更。已通过自动测试，建议尽快合并以保持依赖安全。

---

## 5. Bug 与稳定性

### 🐛 今日修复的 Bug

| 严重程度 | PR # | 问题描述 | 修复状态 |
|----------|------|----------|----------|
| **高** | [#1981](https://github.com/netease-youdao/LobsterAI/pull/1981) | macOS 插件 npm 安装失败（PATH 缺失导致 ENOENT） | ✅ 已修复 |
| **高** | [#1982](https://github.com/netease-youdao/LobsterAI/pull/1982) | 工具输出裸路径被误识别为 artifact；路径含空格时正则截断 | ✅ 已修复 |
| **中** | [#1973](https://github.com/netease-youdao/LobsterAI/pull/1973) | 中文 Windows "打开方式" 下拉菜单应用名乱码 | ✅ 已修复 |
| **中** | [#1977](https://github.com/netease-youdao/LobsterAI/pull/1977) | HTML 工件外部 CSS/JS 加载 403；Excel 深色主题标题不可见 | ✅ 已修复 |
| **低** | [#1979](https://github.com/netease-youdao/LobsterAI/pull/1979) | 升级后用户插件丢失（目录迁移问题） | ✅ 已修复 |

**稳定性评估**：今日修复的 Bug 集中在跨平台兼容性和数据持久化两类，无新增崩溃报告，项目稳定性良好。

---

## 6. 功能请求与路线图信号

### 📋 今日合并的功能性 PR

| PR # | 功能领域 | 描述 | 路线图价值 |
|------|----------|------|------------|
| [#1977](https://github.com/netease-youdao/LobsterAI/pull/1977) | Artifacts | HTML 工件本地 HTTP 服务器预览 | ⭐⭐⭐ 核心功能增强 |
| [#1983](https://github.com/netease-youdao/LobsterAI/pull/1983) | Artifacts | Excel/PPTX 渲染增强 | ⭐⭐⭐ 核心功能增强 |
| [#1980](https://github.com/netease-youdao/LobsterAI/pull/1980) | MCP | OpenClaw 原生 MCP 支持 | ⭐⭐⭐ 架构升级 |
| [#853](https://github.com/netease-youdao/LobsterAI/pull/853) | Cowork | Markdown/JSON/JSONL 会话导出 | ⭐⭐ 增强功能 |

**路线图信号分析**：
- **Artifact 系统**正在成为核心投入方向（HTTP 预览架构、Excel/PPTX 支持）
- **OpenClaw 集成**持续深化（MCP 原生支持、上下文压缩）
- **跨平台稳定性**持续改进（macOS/Windows 特定问题修复）

---

## 7. 用户反馈摘要

> 今日无新开 Issues，用户反馈从 PR 讨论中提炼。

### 正面反馈信号
- v2026.5.13 发布的插件管理功能获得积极关注
- 本地 HTTP 预览架构解决了外部资源加载 403 的长期痛点

### 已知用户痛点（从 Issue 中提炼）
- **Skill 重复上传**（#825 已修复）：用户频繁遇到同名 skill 多次出现的问题
- **插件升级丢失**（#1979 已修复）：升级应用后自定义插件消失
- **中文 Windows 兼容性**（#1973 已修复）：PowerShell 输出编码问题影响体验

---

## 8. 待处理积压

### ⚠️ 需关注项

| 类型 | #1765 | 状态 | 建议 |
|------|-------|------|------|
| **依赖升级** | @headlessui/react bump | ⏳ 待合并 | 建议 48h 内合并，保持依赖安全 |

### 📊 积压统计

| 类别 | 数量 | 备注 |
|------|------|------|
| 待合并 PR | **1** | #1765 依赖升级 |
| 长期未响应 Issue | **0** | 无新增积压 |
| Stale PR 已清理 | **7** | 今日统一处理完毕 |

---

## 📈 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| PR 合并/关闭 | 28 | ↑ 高于日均 |
| 新版本发布 | 1 | ↑ v2026.5.13 |
| 新开 Issues | 0 | ➖ 无新增 |
| 待合并 PR | 1 | ➖ 低积压 |
| Bug 修复 | 5 | ↑ 聚焦跨平台 |

---

**报告生成时间**：2026-05-15 09:00 UTC  
**数据覆盖**：2026-05-14 09:00 ~ 2026-05-15 09:00

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**: 2026-05-15  
**项目**: moltis-org/moltis  
**数据来源**: GitHub Metrics (过去24小时)

---

## 1. 今日速览

今日 Moltis 项目社区活跃度**较低**，共产生 2 条新 Issues，但无任何 Pull Request 活动。开发节奏相对停滞，未见新代码合并或版本发布。两个新 Issue 均来自独立贡献者，分别涉及 **TLS 证书功能缺陷**（Bug）和 **安全通信增强**（Feature Request），反映出用户对生产环境安全性和网络可靠性的持续关注。整体项目健康度维持在稳定状态，但由于缺乏 PR 合并，需关注维护者响应速度。

---

## 2. 版本发布

**无新版本发布**

昨日无 Release 活动，项目当前最新版本信息请参阅 [ Releases 页面](https://github.com/moltis-org/moltis/releases)。

---

## 3. 项目进展

**无 PR 合并/关闭**

过去 24 小时内项目未收到任何 Pull Request，表明：

- 核心贡献者活动较低
- 无待处理 PR 进入审查流程
- 项目处于功能迭代的静默期

> 如需查看全部待处理 PR，请访问：[Open Pull Requests](https://github.com/moltis-org/moltis/pulls)

---

## 4. 社区热点

### 🔥 重点 Issue

| Issue | 类型 | 热度 | 链接 |
|-------|------|------|------|
| #995 `portal-tunnel` 集成请求 | 增强功能 | 高 | [查看详情](https://github.com/moltis-org/moltis/issues/995) |

**#995 分析**：用户 `@gg582` 提出将 `portal-tunnel` 集成为可信中继通道的功能请求。该需求反映了用户对 **去中心化安全通信** 的诉求，可能涉及：

- 绕过严格防火墙限制
- 构建多层安全隧道
- 支持无信任中继架构

此类功能若实现，将显著扩展 Moltis 在企业级网络场景的适用性，建议维护者评估技术可行性。

---

## 5. Bug 与稳定性

### 🐛 新报告 Bug

| Issue | 严重度 | 状态 | 链接 |
|-------|--------|------|------|
| #996 TLS 证书仅适用于 localhost | 高 | Open | [查看详情](https://github.com/moltis-org/moltis/issues/996) |

**#996 详情**：

- **报告人**: @IlyaBizyaev
- **问题描述**: 生成的 TLS 证书功能与文档描述不符，实际仅支持 `localhost`，无法覆盖其他域名
- **影响范围**: 所有依赖 TLS 证书进行安全通信的生产环境用户
- **优先级建议**: 高 ⚠️
- **修复状态**: ❌ 尚无 Fix PR

> **维护者注意**: 此 Bug 可能影响用户对项目的信任度，建议优先响应并确认复现步骤。

---

## 6. 功能请求与路线图信号

### ✨ Feature Requests

| Issue | 类型 | 开发者 | 链接 |
|-------|------|--------|------|
| #995 `portal-tunnel` 集成 | 功能增强 | @gg582 | [查看详情](https://github.com/moltis-org/moltis/issues/995) |

**路线图信号分析**：

#995 的 `portal-tunnel` 集成请求暗示以下产品方向：

1. **安全通信层增强** — 用户希望在不依赖中心化服务器的情况下实现安全中继
2. **网络穿透能力** — 可能涉及 NAT 穿透、端口转发等高级网络功能
3. **去中心化架构** — 符合现代隐私优先（Privacy-First）软件设计趋势

当前无相关 PR，建议维护者：

- 评估技术复杂度和维护成本
- 考虑是否与现有 `portal` 子项目路线图冲突
- 回复贡献者，告知是否在规划中

---

## 7. 用户反馈摘要

从今日 Issue 交互中提炼的关键用户声音：

| 反馈维度 | 内容 | 来源 |
|----------|------|------|
| **功能期望** | 需要支持非 localhost 域名的 TLS 证书生成 | @IlyaBizyaev (#996) |
| **安全诉求** | 期望提供无信任中继通道以增强通信隐私 | @gg582 (#995) |
| **文档准确性** | 现有文档与实现存在偏差，需要同步更新 | @IlyaBizyaev (#996) |

**用户痛点总结**：

- 🔴 **TLS 功能缺陷**：文档承诺的能力与实际不符，影响生产部署
- 🟡 **扩展性需求**：用户希望在安全通信层有更多选择和控制权

---

## 8. 待处理积压

### ⚠️ 长期未响应 Issue

| Issue | 创建时间 | 类型 | 等待天数 | 链接 |
|-------|----------|------|----------|------|
| #996 TLS 证书 Bug | 2026-05-14 | Bug | **1 天** | [查看](https://github.com/moltis-org/moltis/issues/996) |
| #995 portal-tunnel 功能请求 | 2026-05-14 | Enhancement | **1 天** | [查看](https://github.com/moltis-org/moltis/issues/995) |

**积压状态**: 当前两项 Issues 均处于 **Open 状态**，尚无维护者响应或评论。

> **建议**: 尽快对 #996 (Bug) 给予初步反馈，确认是否可复现；对于 #995，可在 48 小时内表达初步态度（考虑中 / 计划纳入 / 超出范围），维护社区信任。

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issues | 2 | ➡️ 持平 |
| 新增 PRs | 0 | ⬇️ 下降 |
| 合并 PRs | 0 | ➡️ 持平 |
| 版本发布 | 0 | ➡️ 持平 |
| 维护者响应率 | 0% | ⚠️ 待提升 |

---

**报告生成时间**: 2026-05-15 08:00 UTC  
**数据截止**: 2026-05-14 08:00 UTC 至 2026-05-15 08:00 UTC

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目日报

**项目名称**: QwenPaw  
**报告日期**: 2026-05-15  
**数据来源**: GitHub Pull Requests (2026-05-14 ~ 2026-05-15)

---

## 1. 今日速览

QwenPaw 今日继续保持极高的开发活跃度，共合并/关闭 **19 个 Pull Requests**（18 个已关闭 + 1 个开放审查中），涵盖 audio、console、cli、agent、providers、utils、envs、security、memory、deploy、onebot 等 11 个子模块。从 PR 标签分布来看，今日工作重心集中在 **console 体验打磨**（4 个 PR）、**稳定性与安全加固**（auth 绑定、端口检查、会话持久化）以及 **模型兼容层完善**（Anthropic 文件块转换、Whisper 离线模型支持）。整体项目健康度评估为 **"快速迭代期"**，修复密集度高，尚未观察到破坏性变更，适合稳定用户跟进最新 main 分支。

---

## 2. 版本发布

> 本日无正式版本标签发布记录。

---

## 3. 项目进展

| PR 编号 | 标签 | 变更类型 | 概述 | 链接 |
|---------|------|----------|------|------|
| #4378 | `fix(console)` | 体验增强 | 新增 `QWENPAW_BASE_PATH` / `COPAW_BASE_PATH` 环境变量支持，实现反向代理路径前缀自动剥离，确保 /\<prefix\>/api、静态资源和 SPA fallback 路由一致解析。 | [#4378](https://github.com/agentscope-ai/QwenPaw/pull/4378) |
| #4379 | `fix(console)` | Bug 修复 | 修复 Markdown 表格内 `<br>` 标签在渲染时被吞掉的问题，统一在流式响应、历史加载和预览三个入口进行换行符归一化。 | [#4379](https://github.com/agentscope-ai/QwenPaw/pull/4379) |
| #4380 | `fix(console)` | 可靠性修复 | 为临时会话 ID → 后端 UUID 的解析增加有界重试机制，同时在删除前先完成时间戳会话解析，避免删除操作被跳过。 | [#4380](https://github.com/agentscope-ai/QwenPaw/pull/4380) |
| #4384 | `fix(console)` | 体验增强 | 将聊天列表排序从「创建时间」改为「最近活动时间」，在抽屉 UI 中展示 `updatedAt`，同时保留置顶会话优先级。 | [#4384](https://github.com/agentscope-ai/QwenPaw/pull/4384) |
| #4366 | `fix(audio)` | 可靠性修复 | 本地 Whisper 模型配置化和离线模型可发现性改进；通过 `model_available` / `offline_available` 暴露模型缓存状态；将模型加载/缓存失败以结构化 `/workspace/transcribe` 错误形式返回。 | [#4366](https://github.com/agentscope-ai/QwenPaw/pull/4366) |
| #4383 | `fix(audio)` | 兼容性修复 | 接受顶层 `data` 字段（无 `source` 字典）的音频块；将本地路径和 `file://` / HTTP(S) 引用映射为带媒体类型的 URL 源。 | [#4383](https://github.com/agentscope-ai/QwenPaw/pull/4383) |
| #4368 | `fix(deploy)` | 基础设施 | Docker 默认构建改为 Node.js 22 LTS；新增针对 Node 25 / zod 导入失败的 Tavily 故障排查文档。 | [#4368](https://github.com/agentscope-ai/QwenPaw/pull/4368) |
| #4369 | `fix(cli)` | 安全加固 | 在内置认证禁用时禁止 `qwenpaw app` 绑定非 loopback 主机；提供 `--allow-unauth-public` / `QWENPAW_TRUST_PROXY_AUTH=1` 显式放行；Docker supervisor 部署默认开启 `QWENPAW_AUTH_REQUIRED=1`。 | [#4369](https://github.com/agentscope-ai/QwenPaw/pull/4369) |
| #4381 | `fix(cli)` | 可靠性修复 | `qwenpaw app` 启动时**先检查端口占用**再启动 uvicorn，避免启动失败时输出误导性 shutdown 日志。 | [#4381](https://github.com/agentscope-ai/QwenPaw/pull/4381) |
| #4370 | `fix(agent)` | 行为修复 | 仅有 thinking/reasoning 块无可见文本时自动注入 continue hint；重试产生可见文本后替换原始 thinking-only 回复；保留 text-only 重试的原有行为避免重复回答。 | [#4370](https://github.com/agentscope-ai/QwenPaw/pull/4370) |
| #4372 | `fix(providers)` | 兼容性修复 | 将 QwenPaw 文件块转为 Anthropic 兼容的 text 块而非丢弃；复用同一转换逻辑处理 `tool_result` 内嵌文件块。 | [#4372](https://github.com/agentscope-ai/QwenPaw/pull/4372) |
| #4375 | `fix(app)` | 功能增强 | 中间件层将 `X-Root-Session-Id` 持久化到 `request.state.request_context`；路由层在 Header 存在时更新 root session 上下文变量。 | [#4375](https://github.com/agentscope-ai/QwenPaw/pull/4375) |
| #4377 | `fix(memory)` | 行为修复 | `MEMORY_STORE_BACKEND=auto` 默认解析为纯 Python local 后端，保留显式 `chroma` 等覆盖；修复 #3854。 | [#4377](https://github.com/agentscope-ai/QwenPaw/pull/4377) |
| #4382 | `fix(onebot)` | 功能增强 | OneBot cron 调度目标中 group 编码的 session id 正确路由至 `group:<group_id>`；保留显式 `group:<group_id>` 处理路径。 | [#4382](https://github.com/agentscope-ai/QwenPaw/pull/4382) |
| #4373 | `test(utils)` | 测试覆盖 | 为遥测辅助函数补充版本历史标记、迁移标记、退出保留和失败上传标记的回归测试；覆盖 Linux/macOS Apple Silicon/Windows GPU 检测降级逻辑。 | [#4373](https://github.com/agentscope-ai/QwenPaw/pull/4373) |
| #4374 | `test(envs)` | 测试覆盖 | 补充 env store 加密持久化、os.environ 同步/删除行为和 bootstrap 保护运行时环境变量的单元测试。 | [#4374](https://github.com/agentscope-ai/QwenPaw/pull/4374) |
| #4376 | `test(security)` | 测试覆盖 | 为工具守卫的 guarded/denied/auto-denied 解析优先级添加单元测试；验证默认 guarded 工具集包含高危文件和 shell 操作；覆盖结构化 finding 日志严重性路由。 | [#4376](https://github.com/agentscope-ai/QwenPaw/pull/4376) |

**小结**：本日以 bug 修复和体验优化为主（15 个 fix），辅以 3 个新增测试覆盖。所有 PR 均为向后兼容变更，未发现 Breaking Changes。

---

## 4. 社区热点

| 类型 | 编号 | 讨论热度 | 概述 | 链接 |
|------|------|----------|------|------|
| **PR (Open)** | #4224 | ⭐⭐⭐ 审查中 | `fix(memory)`: 升级 `reme-ai` 0.3.1.8 → 0.3.1.9，移除 QwenPaw 侧显式索引刷新变通方案，采用上游 watcher 生命周期修复。关联 #4220 和 ReMe#233。 | [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) |

**分析**：当前开放的唯一待审查 PR 聚焦于 **记忆模块索引刷新机制**，该变更依赖上游 ReMe 库升级，预计合并后将简化记忆子系统的维护成本。其余 18 个 PR 均已于 2026-05-15 统一标记为 `CLOSED [Close-and-review-later]`，说明维护团队采用批量合并策略。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 关联 PR / Issue | 状态 |
|----------|----------|-----------------|------|
| 🔴 **高** | 端口占用时启动假象 — `qwenpaw app` 启动失败但输出误导性 shutdown 日志 | [#4381](https://github.com/agentscope-ai/QwenPaw/pull/4381) | ✅ 已修复 |
| 🔴 **高** | 非 loopback 绑定 + 认证禁用 = 公开暴露未认证应用 | [#4369](https://github.com/agentscope-ai/QwenPaw/pull/4369) | ✅ 已修复 |
| 🟡 **中** | thinking-only 回复导致对话卡死，用户无法获得可见输出 | [#4370](https://github.com/agentscope-ai/QwenPaw/pull/4370) | ✅ 已修复 |
| 🟡 **中** | 反向代理下路由前缀未剥离，SPA fallback 和 API 路径失效 | [#4378](https://github.com/agentscope-ai/QwenPaw/pull/4378) | ✅ 已修复 |
| 🟡 **中** | 本地 Whisper 模型缓存状态不透明，加载失败静默降级 | [#4366](https://github.com/agentscope-ai/QwenPaw/pull/4366) | ✅ 已修复 |
| 🟢 **低** | 表格内换行符渲染异常（`<br>` 被吞） | [#4379](https://github.com/agentscope-ai/QwenPaw/pull/4379) | ✅ 已修复 |
| 🟢 **低** | 临时会话 ID 解析不稳定导致聊天删除失败 | [#4380](https://github.com/agentscope-ai/QwenPaw/pull/4380) | ✅ 已修复 |

**回归风险提示**：本日修复的端口检查（#4381）和认证绑定（#4369）属于安全相关逻辑，建议在下个版本发布后重点关注相关告警日志。

---

## 6. 功能请求与路线图信号

从本日 PR 变更方向可以推断出下一版本的潜在路线图方向：

| 信号 | 证据 | 可能的下一版本特性 |
|------|------|-------------------|
| **部署标准化** | Node.js 22 LTS 强制、chroma/chroma 差异化支持 | 规范化 Docker 部署最佳实践文档 |
| **多模态兼容** | Anthropic 文件块转换（#4372）、音频顶层 data 接受（#4383） | 统一消息格式规范，降低 provider 切换成本 |
| **企业级安全** | 公开绑定强阻、tool guard 工具集明确化 | 高风险操作显式确认机制 |
| **长对话体验** | 按最近活动排序、root session 持久化 | 改进多会话管理 UI |

---

## 7. 用户反馈摘要

从本日 PR 描述中可提炼的潜在用户痛点：

| 痛点类别 | 具体场景 | 响应方式 |
|----------|----------|----------|
| **部署困惑** | 反向代理环境下应用无法正常加载，报 404 | 提供 `QWENPAW_BASE_PATH` 支持 |
| **推理卡死** | Agent 回复仅包含 thinking，用户等待无果 | 自动注入 continue hint，重试可见文本 |
| **端口冲突** | 启动失败但日志显示正常关闭，用户不知所措 | 启动前预检查，fail-fast |
| **音频格式** | Telegram 语音等本地音频无法被 Whisper 识别 | 扩展顶层 `data` 字段支持 |
| **记忆后端选择** | `auto` 模式行为不稳定，chroma 配置被忽略 | 明确 auto → local 默认，保留显式覆盖 |

---

## 8. 待处理积压

| 项目 | 编号 | 等待时长 | 优先级 | 备注 |
|------|------|----------|--------|------|
| 记忆模块索引刷新机制重构 | [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) | ~4 天 | ⭐⭐⭐ 高 | 依赖上游 ReMe 0.3.1.9 发布，当前处于 `Under Review`，建议尽快完成审查 |
| ReMe 依赖升级 | #4220 | ~4 天 | ⭐⭐⭐ 高 | 被 #4224 关联，是本次 memory 清理的前提 |
| Tavily Node 25 兼容问题 | #2906 | 未明确 | ⭐⭐ 低 | #4368 已添加文档，但根本兼容性问题尚未解决 |

---

*报告生成时间: 2026-05-15 | 数据覆盖范围: 2026-05-14 00:00 ~ 2026-05-15 23:59 (UTC)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>librefang</strong> — <a href="https://github.com/librefang/librefang">librefang/librefang</a></summary>

# librefang 项目动态日报 | 2026-05-15

---

## 一、今日速览

librefang 今日保持极高的开发活跃度，共处理 **43 条 PR 更新**（含 11 条待合并）和 **34 条 Issues 更新**（含 6 条新开）。项目在 **workflows** 和 **async task tracker** 领域取得显著进展，连续关闭多个大型功能 PR（#5034/5042/5043/5035 等）。然而 CI 稳定性仍存隐忧，今日新增 **4 条 CI 失败 Issue**，主要集中在 Windows 和 Security 测试阶段，建议优先排查以避免阻塞上游合并节奏。整体而言，项目功能迭代顺畅，社区参与度高。

---

## 二、版本发布

**今日无新版本发布。** 距离上一次发布（未见记录于本次数据）已有一段时间，建议关注近期已完成的功能 PR 是否已达到发布阈值。

---

## 三、项目进展

### 3.1 重大功能 PR 已合并（按合并时间排序）

| PR | 标题 | 领域 | 贡献者 |
|----|------|------|--------|
| [#5032](https://github.com/librefang/librefang/pull/5032) | docs(architecture): trajectory format RFC | RL Export | @houko |
| [#5042](https://github.com/librefang/librefang/pull/5042) | feat(rl-export): tinker exporter (#3331 step 2/3) | RL Export | @houko |
| [#5043](https://github.com/librefang/librefang/pull/5043) | feat(rl-export): atropos exporter (#3331 step 3/3) | RL Export | @houko |
| [#5044](https://github.com/librefang/librefang/pull/5044) | feat(workflows): wire gate operator executor | Workflows | @houko |
| [#5045](https://github.com/librefang/librefang/pull/5045) | feat(kernel,runtime): async task tracker kernel registry + event injection | Kernel/Runtime | @houko |
| [#5046](https://github.com/librefang/librefang/pull/5046) | feat(workflows): wire transform operator with tera | Workflows | @houko |
| [#5047](https://github.com/librefang/librefang/pull/5047) | feat(workflows): wire branch operator | Workflows | @houko |
| [#5048](https://github.com/librefang/librefang/pull/5048) | feat(runtime,kernel,types): async task tracker wake-idle + config | Runtime | @houko |

**亮点解读：**

- **RL Export 体系完工**：经过 3 个 PR 的分步骤实现，librefang-rl-export crate 现已支持 **W&B、Tinker、Atropos** 三个导出目标，为长期 RL rollout 场景奠定了数据导出基础设施（#3331）。
- **Workflows 操作符全面接线**：Gate、Transform、Branch 三大非 Agent 操作符已完成 Tera 模板渲染和条件分支逻辑，workflow 引擎表达能力大幅增强。
- **Async Task Tracker 三部曲收官**：kernel 端注册表、事件注入、runtime 唤醒三条链路全部打通，agents 现可非阻塞式发起 `workflow_start` 等异步操作。

### 3.2 待合并的高优先级 PR

| PR | 标题 | 领域 | Size | 状态 |
|----|------|------|------|------|
| [#5053](https://github.com/librefang/librefang/pull/5053) | refactor(runtime): split tool_runner + agent_loop god-files | Runtime | XL | Open |
| [#5055](https://github.com/librefang/librefang/pull/5055) | chore(merge): upstream 2026-05-15 + BossFang preservation | CI | XL | Open |
| [#4963](https://github.com/librefang/librefang/pull/4963) | feat(dashboard): agent detail tabs for Skills, MCP, Channels, Schedule | Dashboard | L | Ready-for-Review |
| [#5033](https://github.com/librefang/librefang/pull/5033) | feat(types,kernel,runtime): async task tracker kernel registry | Kernel | XL | Open |
| [#5034](https://github.com/librefang/librefang/pull/5034) | feat(rl-export): new crate + W&B + Tinker + Atropos exporters | RL Export | XL | Open |
| [#5035](https://github.com/librefang/librefang/pull/5035) | feat(workflows): non-agent operator nodes — Wait, Gate, Transform, Branch | Workflows | XL | Open |
| [#4961](https://github.com/librefang/librefang/pull/4961) | feat(types,kernel,api): per-agent channel allowlist | Kernel | M | Open |
| [#5036](https://github.com/librefang/librefang/pull/5036) | fix(api,kernel): schedule field PATCH + actual_provider wiring | API/Kernel | M | Ready-for-Review |
| [#4922](https://github.com/librefang/librefang/pull/4922) | feat(kernel): provider-aware token budget with pre-dispatch gating | Kernel | L | Needs-Changes |

**预计进入下一版本的重点功能：**
- **Agent 详情页改造**（#4963）：Skills/MCP/Channels/Schedule 四大 Tab + Save 按钮，解决长期困扰的 Agent 配置只读问题
- **Per-agent Channel Allowlist**（#4961）：细粒度控制 Agent 可使用的渠道
- **Telegram Voice Bugfix**（#5036 包含）：修复 OGG Vorbis vs Opus 混淆导致的 Bad Request

---

## 四、社区热点

### 4.1 评论最活跃的 Issues

| Issue | 标题 | 评论数 | 状态 |
|-------|------|--------|------|
| [#5037](https://github.com/librefang/librefang/issues/5037) | [main-red] CI failure on PR #5011 | 11 | Closed |
| [#5018](https://github.com/librefang/librefang/issues/5018) | [main-red] CI failure on PR #4999 | 7 | Closed |
| [#5041](https://github.com/librefang/librefang/issues/5041) | [main-red] CI failure on PR #5021 | 3 | Closed |
| [#3331](https://github.com/librefang/librefang/issues/3331) | Long-horizon RL rollout entry point (W&B / Tinker / Atropos) | 2 | Open |
| [#4923](https://github.com/librefang/librefang/issues/4923) | KV memory not written to database + documentation gap | 2 | Closed |
| [#5017](https://github.com/librefang/librefang/issues/5017) | [Feature] Default agent creation to TOML-canonical | 2 | Closed |
| [#3576](https://github.com/librefang/librefang/issues/3576) | arch: inconsistent error contracts | 2 | Open |
| [#3330](https://github.com/librefang/librefang/issues/3330) | Trajectory dataset export pipeline | 2 | Open |
| [#4913](https://github.com/librefang/librefang/issues/4913) | Allow Media Generation to use OpenRouter | 2 | Closed |
| [#4977](https://github.com/librefang/librefang/issues/4977) | feat(workflows): human-in-the-loop steps | 1 | Open |

**热点分析：**

1. **CI 失败问题引发集中讨论**（#5037/5018/5041/5054）
   - 累计评论超过 20 条，反映社区对 CI 稳定性高度关注
   - 主要失败类型：Windows 测试、安全扫描、Unit 测试
   - 建议：CI 配置变更应同步 review，避免多 PR 并行时相互干扰

2. **RL 训练基础设施持续受关注**（#3331/3330）
   - 尽管相关 PR 已合并，社区仍在讨论 W&B/Tinker/Atropos 集成的边界场景
   - 体现用户对长期 Agent 训练数据的强需求

3. **Agent 配置 UX 改善诉求**（#5017/4923/4913）
   - TOML 可写性、KV memory 文档、OpenRouter 媒体生成等用户侧体验问题
   - 说明 Dashboard 和 CLI 的用户体验仍有较大优化空间

---

## 五、Bug 与稳定性

### 5.1 今日新增 Bug（按严重程度）

| Issue | 标题 | 严重度 | 影响范围 | Fix PR |
|-------|------|--------|----------|--------|
| [#5054](https://github.com/librefang/librefang/issues/5054) | [main-red] CI failure on PR #5012 — Telegram OGG Vorbis downgrade | 高 | Telegram Voice 消息发送 | 关联 #5012 |
| [#5050](https://github.com/librefang/librefang/issues/5050) | (推测存在) Telegram Voice MIME 混淆 | 高 | Voice 消息被 Telegram 拒绝 | 见 #5036 |

**已关闭的重要 Bug Fix：**

| Issue/PR | 标题 | 贡献者 | 说明 |
|----------|------|--------|------|
| [#5005](https://github.com/librefang/librefang/issues/5005) | fix(channels/telegram): distinguish OGG Opus from OGG Vorbis | @houko | 区分 Telegram Voice 的编解码器 |
| [#5004](https://github.com/librefang/librefang/issues/5004) | fix(channels/telegram): magic-byte sniff for audio/ogg | @houko | 修正 OGG 文件类型嗅探 |
| [#5003](https://github.com/librefang/librefang/issues/5003) | fix(channels): override account_id() in non-Telegram adapters | @houko | 修复多 Bot 适配器的渠道作用域 |
| [#5025](https://github.com/librefang/librefang/issues/5025) | macOS: vault locked at daemon startup (launchd PATH issue) | @nevgenov | macOS 守护进程启动时的 keyring 故障 |
| [#5006](https://github.com/librefang/librefang/issues/5006) | fix(claude-code): ANTHROPIC_AUTH_TOKEN stripped from CLI env | @houko | 修复 Gateway 用户环境变量泄漏 |
| [#5038](https://github.com/librefang/librefang/pull/5038) | fix: retry streaming on subprocess crash | @f-liva | Claude Code 流式输出的稳定性修复 |

**CI 稳定性警报：**

今日共产生 **5 条 CI 失败 Issue**（#5037/5018/5041/5030/5054），涉及 PR 范围从 #4999 到 #5012。建议：
- 优先修复 Security 测试失败（#5041），避免敏感扫描阻断合并
- Windows 测试多次失败，需排查 `ioreg` 等平台特定依赖

---

## 六、功能请求与路线图信号

### 6.1 高价值功能请求

| Issue | 标题 | 标签 | 预期版本信号 |
|-------|------|------|-------------|
| [#3331](https://github.com/librefang/librefang/issues/3331) | Long-horizon RL rollout entry point | `severity/critical`, `difficulty/hard` | 已在 #5034 实现 |
| [#4977](https://github.com/librefang/librefang/issues/4977) | feat(workflows): human-in-the-loop steps | 待纳入 | 依赖 #5033 (Task Tracker) |
| [#5049](https://github.com/librefang/librefang/issues/5049) | feat(dashboard): Add finder/helper for skills in agent creation | `area/skills`, `area/api` | 预计在 Dashboard 大改版中实现 |
| [#4913](https://github.com/librefang/librefang/issues/4913) | Allow Media Generation to use OpenRouter | `enhancement` | 用户明确需求，已有社区投票 |

### 6.2 架构改进建议

| Issue | 标题 | 痛点 | 建议方向 |
|-------|------|------|----------|
| [#3576](https://github.com/librefang/librefang/issues/3576) | Error contracts inconsistent: String / anyhow / LibreFangError / LlmError | 多层错误类型不统一 | 建立统一的 `LibreFangError` 体系 |
| [#3330](https://github.com/librefang/librefang/issues/3330) | Trajectory dataset export pipeline | 无训练数据导出能力 | 已在 #5042/5043 完成 |

**路线图预测（基于已合并 PR 推断）：**

1. **v0.x.y 短期**：Agent Dashboard 详情页改造、Per-agent Channel Allowlist、Telegram Voice 稳定性
2. **v0.x.z 中期**：RL Export 正式版（文档完善）、Async Task Tracker 生产就绪
3. **v0.x.w 长期**：Human-in-the-loop Workflow、错误处理统一、长时 RL Rollout 集成

---

## 七、用户反馈摘要

### 7.1 真实用户痛点（从 Issues 评论提炼）

| 来源 | 场景 | 痛点描述 |
|------|------|----------|
| #4923 | KV Memory | "所有新 Agent 都要求用户输入姓名，不读取已有用户信息；内存写入数据库后数据未实际保存" |
| #5025 | macOS 启动 | "launchd 启动时 `ioreg` 路径问题导致 vault 锁定，守护进程所有 vault 密钥静默丢失" |
| #5049 | Agent 创建 | "创建 Agent 时必须手动输入 skills/tools，需要对照文档查找名称，体验割裂" |
| #4913 | 媒体生成 | "OpenRouter 聚合了多个支持媒体生成的模型，希望能统一使用而非逐个配置 API Key" |

### 7.2 用户满意度观察

**满意方向：**
- Workflow 的 DAG 执行、多模态步骤、暂停/恢复能力获得正面反馈（#4834 相关讨论）
- Dashboard Skills/MCP/Channels 标签页的排序和显示问题被快速响应修复

**不满意方向：**
- Agent 创建后配置只读，需修改代码才能调整 skills（#4833）
- KV Memory 文档缺失（#4923）
- 多渠道代理配置无法针对单个 channel 设置（#4795）

---

## 八、待处理积压

### 8.1 长期未响应的关键 Issue

| Issue | 创建时间 | 距今天数 | 优先级 | 状态 |
|-------|----------|----------|--------|------|
| [#3331](https://github.com/librefang/librefang/issues/3331) | 2026-04-27 | 18天 | Critical | 已实现，注释待更新 |
| [#3576](https://github.com/librefang/librefang/issues/3576) | 2026-04-27 | 18天 | High | `awaiting-response` |
| [#3330](https://github.com/librefang/librefang/issues/3330) | 2026-04-27 | 18天 | High | 已实现，注释待更新 |
| [#4977](https://github.com/librefang/librefang/issues/4977) | 2026-05-12 | 3天 | Medium | `awaiting-response` |

### 8.2 阻塞性 PR

| PR | 阻塞原因 | 建议 |
|----|----------|------|
| [#4922](https://github.com/librefang/librefang/pull/4922) | `needs-changes` | 需解决 provider-aware token budget 的变更请求 |
| [#5053](https://github.com/librefang/librefang/pull/5053) | size/XL, Open | Runtime god-file 重构影响面广，建议拆分或增加 CI 覆盖 |

### 8.3 行动建议

1. **【紧急】** 修复 #5054 CI 失败，解锁 Telegram Voice 修复
2. **【高优】** 推进

</details>

<details>
<summary><strong>openfang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# 📊 openfang 项目动态日报 — 2026-05-15

## 1. 今日速览

过去 24 小时内，openfang 项目整体保持平稳活跃。项目共产生 2 条 Issues 更新（新开/活跃各 1 条）和 6 条 PR 更新（全部为依赖更新或功能 PR，尚未合并），整体处于**功能开发推进期**。核心亮点在于 MCP 协议推送通知功能的 PR #1203 已提交，这是对 Issue #1096 的直接响应；此外项目依赖链正处于一轮集中更新中（涉及 libc、tauri-build、axum 等多个关键依赖）。无新版本发布，无 Bug 回归报告，项目健康度良好。

---

## 2. 版本发布

**暂无新版本发布。** 最近一次版本信息未在数据中体现，建议关注项目 Releases 页面以获取历史版本记录。

---

## 3. 项目进展

### 功能性 PR 推进

| PR 编号 | 标题 | 作者 | 状态 | 摘要 |
|---------|------|------|------|------|
| [#1203](https://github.com/RightNow-AI/openfang/pull/1203) | feat(mcp): support push notifications | @Streamweaver | 🔍 待审核 | 新增 MCP 资源推送通知支持，覆盖类型层、运行时层和内核层，支持订阅 MCP 资源、接收服务端通知、桥接到内核事件，并在 MCP 重连后恢复订阅。与 Issue #1096 关联。 |

> **评估**：该 PR 标志着项目在 MCP 协议支持上迈出重要一步，实现了服务端→客户端的推送能力，扩展了实时事件交互的场景覆盖，是本次周期内最具战略价值的进展。

### 依赖更新 PR（均待合并）

| PR 编号 | 依赖项 | 版本变化 | 风险 |
|---------|--------|----------|------|
| [#1198](https://github.com/RightNow-AI/openfang/pull/1198) | axum | 0.8.8 → 0.8.9 | 低（补丁更新，含 WebSocketUpgrade 增强） |
| [#1199](https://github.com/RightNow-AI/openfang/pull/1199) | rmcp | 1.3.0 → 1.7.0 | 🟡 中（主版本更新，可能含 API 变化） |
| [#1200](https://github.com/RightNow-AI/openfang/pull/1200) | tauri-plugin-updater | 2.10.0 → 2.10.1 | 低（补丁更新） |
| [#1201](https://github.com/RightNow-AI/openfang/pull/1201) | tauri-build | 2.5.6 → 2.6.1 | 中低（次版本更新） |
| [#1202](https://github.com/RightNow-AI/openfang/pull/1202) | libc | 0.2.185 → 0.2.186 | 低（补丁更新，Apple 新增 kevent flags） |

> **评估**：依赖更新全部由 @dependabot[bot] 自动发起，建议优先合并安全类补丁（libc、tauri-plugin-updater）；rmcp 跨三个次版本升级（1.3.0 → 1.7.0）需确认无破坏性变更，建议 CI 通过后再合并。

---

## 4. 社区热点

### 🔥 最活跃 Issue：#1096 — MCP 推送通知需求

- **标题**：[OPEN] Handle MCP server-initiated notifications so hosted MCP servers can push events to agents in real time
- **作者**：@Streamweaver | 创建于 2026-04-20 | 最新更新：2026-05-15
- **评论数**：2 条 | 👍 点赞：0
- **链接**：https://github.com/RightNow-AI/openfang/issues/1096

**需求解析**：该 Issue 聚焦于 MCP（Model Context Protocol）协议中服务端向客户端推送通知的能力。涉及的通知类型包括：
- `notifications/resources/updated`（依赖 `resources/subscribe`）
- `notifications/resources/list_changed`
- `notifications/tools/list_changed`
- `notifications/prompts/list_changed`

**背后诉求**：支持 MCP 托管服务器向代理（agents）实时推送事件，打通"被动接收"的能力闭环。这是构建实时 AI 工作流的关键基础设施需求。

**已有跟进**：@Streamweaver 本人已提交关联 PR #1203，需求与实现同步推进，进展健康。

---

## 5. Bug 与稳定性

**本次周期无 Bug 报告。** 项目稳定性维持在正常水平，未出现崩溃、回归或严重问题报告。

---

## 6. 功能请求与路线图信号

### 📌 Issue #1197 — 飞书（Feishu）通道增强需求

- **作者**：@saint8708 | 创建于 2026-05-14 | 评论：1 条 | 👍：0
- **链接**：https://github.com/RightNow-AI/openfang/issues/1197

**需求摘要**：为飞书通道增加以下能力——
1. **Card 格式输出**：支持富文本卡片消息
2. **文件收发**：支持文件的上传和接收

**路线图信号评估**：
- 该需求明确且具体，对接企业 IM 场景的实际使用痛点
- 当前 openfang 已有飞书通道基础集成，增强卡片和文件能力属于合理的功能深化方向
- 尚未有对应 PR，建议维护者评估优先级并与提交者沟通技术可行性

**潜在纳入信号**：⭐⭐（需求合理但暂无开发资源确认）

---

## 7. 用户反馈摘要

从本次更新的 Issues 评论中提炼：

| 反馈维度 | 内容 | 来源 |
|----------|------|------|
| **功能完整性** | MCP 协议支持尚缺服务端推送能力（server-initiated notifications），影响实时场景 | Issue #1096 |
| **场景扩展** | 企业 IM（飞书）通道的文件和富文本消息支持不足 | Issue #1197 |
| **技术期望** | 期望 openfang 支持 MCP 重连后的订阅恢复机制 | Issue #1096 / PR #1203 |

> **用户画像**：主要关注 openfang 作为 AI Agent 托管平台的能力边界，特别是在 MCP 生态中的互操作性和实时性表现。

---

## 8. 待处理积压

### 长期未响应 Issue 提醒

| Issue 编号 | 创建时间 | 距今天数 | 标题摘要 | 建议 |
|------------|----------|----------|----------|------|
| [#1096](https://github.com/RightNow-AI/openfang/issues/1096) | 2026-04-20 | ~25 天 | MCP 推送通知支持 | ⚠️ **已有 PR #1203 跟进，建议优先审核** |

> **维护者提示**：Issue #1096 虽然创建于约25天前，但 @Streamweaver 已主动提交 PR #1203 响应，建议维护者尽快审核该 PR 以完成需求闭环，避免重复沟通成本。

---

## 📋 行动建议

1. **优先审核** PR #1203（MCP 推送通知），这是项目能力的关键扩展
2. **审慎合并** PR #1199（rmcp 1.3.0→1.7.0），确认无破坏性 API 变更后再合并
3. **跟进** Issue #1197（飞书通道增强），评估是否有社区开发者愿意承接
4. **持续推进** 依赖更新 PR 的合并节奏，保持依赖链的安全性

---

*报告生成时间：2026-05-15 | 数据来源：GitHub openfang 仓库 | 覆盖范围：过去 24 小时*

</details>

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*