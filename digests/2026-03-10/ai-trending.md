# AI 开源趋势日报 2026-03-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-10 04:23 UTC

---

# AI 开源趋势日报（2026-03-10）

## 1. 今日速览

今日 GitHub AI 热榜呈现“智能体爆发”与“向量数据库成熟化”双主线：OpenClaw 生态项目（`openclaw/openclaw`、`claude-skills`）单日获近万 stars，标志个人 AI 助手进入“可插拔技能”时代；同时，向量数据库阵营（Milvus、Qdrant、Chroma 等）持续活跃，反映 RAG 架构在企业级应用中加速落地。值得注意的是，Google NotebookLM 的非官方 API 项目 `notebooklm-py` 快速升温，揭示 AI 原生知识管理工具正成为开发者新焦点。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
- [**ollama/ollama**](https://github.com/ollama/ollama) ⭐164,688 — 本地大模型运行时标杆，支持 Kimi-K2.5、GLM-5 等最新模型一键部署。
- [**vllm-project/vllm**](https://github.com/vllm-project/vllm) ⭐72,647 — 高性能 LLM 推理引擎，吞吐量领先，被多家云厂商集成。
- [**firecrawl/firecrawl**](https://github.com/firecrawl/firecrawl) ⭐90,361 — 将任意网站转为 LLM 友好结构化数据，解决 Agent 网络感知瓶颈。

### 🤖 AI 智能体/工作流
- [**openclaw/openclaw**](https://github.com/openclaw/openclaw) ⭐0 (+9,164 today) — “龙虾哲学”个人 AI 助手，跨平台、无配置，集成技能市场。
- [**msitarzewski/agency-agents**](https://github.com/msitarzewski/agency-agents) ⭐0 (+4,415 today) — 完整 AI 代理机构套件，含前端 wizard、Reddit 社区忍者等角色化 Agent。
- [**CopilotKit/CopilotKit**](https://github.com/CopilotKit/CopilotKit) ⭐29,255 — 前端生成式 UI 框架，让 Web 应用无缝接入 Agent 能力。
- [**trycua/cua**](https://github.com/trycua/cua) ⭐12,958 — 计算机使用 Agent 基础设施，支持 macOS/Linux/Windows 桌面控制。

### 📦 AI 应用
- [**teng-lin/notebooklm-py**](https://github.com/teng-lin/notebooklm-py) ⭐0 (+457 today) — Google NotebookLM 的非官方 Python API，解锁程序化知识洞察能力。
- [**pbakaus/impeccable**](https://github.com/pbakaus/impeccable) ⭐0 (+1,288 today) — AI 设计语言系统，提升 AI 工具界面的人机交互体验。
- [**666ghj/BettaFish**](https://github.com/666ghj/BettaFish) ⭐0 (+514 today) — 多 Agent 舆情分析助手，零框架依赖，支持未来走向预测。

### 🧠 大模型/训练
- [**huggingface/transformers**](https://github.com/huggingface/transformers) ⭐157,671 — 仍是 LLM 开发事实标准，覆盖文本、视觉、音频多模态。
- [**hiyouga/LlamaFactory**](https://github.com/hiyouga/LlamaFactory) ⭐68,122 — 统一高效微调 100+ LLM/VLM，ACL 2024 推荐方案。
- [**The-Pocket/PocketFlow**](https://github.com/The-Pocket/PocketFlow) ⭐10,167 — 仅 100 行代码的极简 LLM 框架，支持“Agent 构建 Agent”。

### 🔍 RAG/知识库
- [**milvus-io/milvus**](https://github.com/milvus-io/milvus) ⭐43,279 — 云原生向量数据库领军者，支撑大规模 ANN 搜索。
- [**qdrant/qdrant**](https://github.com/qdrant/qdrant) ⭐29,449 — 高性能向量搜索引擎，提供托管云服务。
- [**chroma-core/chroma**](https://github.com/chroma-core/chroma) ⭐26,529 — 轻量级嵌入式向量数据库，适合快速原型开发。
- [**VectifyAI/PageIndex**](https://github.com/VectifyAI/PageIndex) ⭐21,014 — 无向量 RAG 方案，基于推理而非嵌入，挑战传统范式。

---

## 3. 趋势信号分析

今日热榜凸显两大趋势：其一，**个人 AI 助手正从“聊天机器人”向“可组合技能平台”演进**。OpenClaw 及其插件生态（如 `claude-skills` 提供 169 个生产级技能）单日获超 9k stars，表明开发者渴望构建“即插即用”的个性化 AI 代理，而非重复造轮子。其二，**RAG 技术栈持续分化**，既有 Milvus、Qdrant 等高性能向量库巩固地位，也有 PageIndex 提出“无向量 RAG”新路径，反映社区对成本、隐私与准确性的多维权衡。此外，NotebookLM 相关工具兴起，暗示 AI 原生知识管理将成为继代码生成后的下一个高价值场景。

---

## 4. 社区关注热点

- **OpenClaw 生态**：个人 AI 助手新范式，技能市场机制可能重塑 Agent 分发模式。
- **无向量 RAG（PageIndex）**：挑战嵌入依赖，或推动轻量化、推理驱动的知识检索发展。
- **NotebookLM 程序化接口**：填补官方 API 空白，助力构建私有知识洞察管道。
- **计算机使用 Agent（CUA）基础设施**：`trycua/cua` 提供跨平台沙箱与评估基准，降低桌面自动化门槛。
- **角色化多 Agent 系统**：`agency-agents` 展示“专家团队”架构可行性，适用于复杂企业工作流。

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*