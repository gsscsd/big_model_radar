# AI 开源趋势日报 2026-05-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-15 02:38 UTC

---

# 🤖 AI 开源趋势日报 | 2026-05-15

---

## 第一步：AI 相关性过滤

从 Trending 15 个仓库中筛除与非 AI 无关的项目：

| 仓库 | 排除原因 |
|---|---|
| `influxdata/telegraf` | 通用数据采集/监控 agent，无 AI 属性 |
| `Genymobile/scrcpy` | Android 投屏控制工具，无 AI 属性 |
| `CloakHQ/CloakBrowser` | 反爬/浏览器指纹工具，蹭 AI 热度的非 AI 项目 |
| `github/spec-kit` | GitHub 内部规范开发工具，非 AI 相关 |

**有效 Trending AI 项目：11 个**，全部进入分析池。

Topic 搜索的 80 个仓库标签均为 `ml / rag / llm / vector-db / llm-model / ai-agent`，全部保留。

---

## 第二步：分类映射

| 项目 | 主要类别 | 次要类别 |
|---|---|---|
| `tinyhumansai/openhuman` | 🤖 AI 智能体 | 📦 AI 应用 |
| `mattpocock/skills` | 🤖 AI 智能体 | 🔧 AI 基础工具 |
| `garrytan/gstack` | 🤖 AI 智能体 | — |
| `rohitg00/agentmemory` | 🤖 AI 智能体 | 🔧 AI 基础工具 |
| `obra/superpowers` | 🤖 AI 智能体 | — |
| `K-Dense-AI/scientific-agent-skills` | 🤖 AI 智能体 | 📦 AI 应用 |
| `ruvnet/RuView` | 📦 AI 应用 | — |
| `supertone-inc/supertonic` | 📦 AI 应用 | 🔧 AI 基础工具 |
| `shiyu-coder/Kronos` | 🧠 大模型/训练 | 📦 AI 应用 |
| `roboflow/supervision` | 🔧 AI 基础工具 | — |
| `NVIDIA-AI-Blueprints/video-search` | 📦 AI 应用 | 🤖 AI 智能体 |
| `langgenius/dify` | 🤖 AI 智能体 | 📦 AI 应用 |
| `open-webui/open-webui` | 📦 AI 应用 | — |
| `langchain-ai/langchain` | 🤖 AI 智能体 | 🔧 AI 基础工具 |
| `llama_index` | 🔍 RAG/知识库 | 🤖 AI 智能体 |
| `milvus-io/milvus` | 🔍 RAG/知识库 | 🔧 AI 基础工具 |
| `ollama/ollama` | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| `vllm-project/vllm` | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| `autogpt/autogpt` | 🤖 AI 智能体 | — |
| `firecrawl/firecrawl` | 🔧 AI 基础工具 | 📦 AI 应用 |
| `tensorflow/tensorflow` | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| `huggingface/transformers` | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| `pytorch/pytorch` | 🔧 AI 基础工具 | 🧠 大模型/训练 |

---

## 第三步：结构化报告

---

### 1. 📰 今日速览

今日 GitHub AI 生态呈现**「智能体基础设施大爆发」**的核心特征：来自 Rust/TypeScript 生态的多个 AI Agent 框架密集登榜，**`openhuman` 单日斩获 3329 ⭐**，远超其他项目，反映社区对「开箱即用的个人 AI 助手」的强烈需求。值得注意的是，**CLI 工具链正成为 Agent 落地的核心入口**——`mattpocock/skills`（2987 ⭐）、`garrytan/gstack`（915 ⭐）等项目均瞄准开发者本地的 Claude Code / Claude 配置生态，而非传统的网页/云端产品。金融 AI 领域出现新面孔 **Kronos**（363 ⭐），结合大模型与时序金融数据，开辟垂直赛道。传统 ML 框架（TensorFlow、PyTorch）稳居 topic 热度前五，但今日流量被新兴 Agent 框架大量分流。

---

### 2. 🔍 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| **[ollama/ollama](https://github.com/ollama/ollama)** | 171,412 | — | 本地 LLM 推理运行时，支持 Kimi-K2.5、GLM-5、MiniMax、DeepSeek 等数十个模型，成为本地部署的首选 runtime |
| **[vllm-project/vllm](https://github.com/vllm-project/vllm)** | 80,029 | — | 高吞吐 LLM 推理服务引擎，PagedAttention + continuous batching 为生产环境提供性价比最高的推理底座 |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** | 119,912 | — | AI 友好的网页爬取 API，同时完成抓取→清洗→结构化，是 RAG 数据pipeline的入口工具 |
| **[supertone-inc/supertonic](https://github.com/supertone-inc/supertonic)** | — | +1,128 | 原生 ONNX 加速的多语言 TTS 引擎，支持设备端推理，为语音 Agent 提供低延迟语音合成能力 |
| **[roboflow/supervision](https://github.com/roboflow/supervision)** | — | +83 | CV 领域复用度最高的工具库，封装检测/追踪/可视化等常用算子，大幅降低视觉 Agent 开发门槛 |

#### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| **[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)** | — | **+3,329** ⭐ | 今日绝对热度冠军，定位于「私人 AI 超智能体」，强调隐私与本地化，无需云端即可运行 |
| **[mattpocock/skills](https://github.com/mattpocock/skills)** | — | **+2,987** ⭐ | 从 `.claude` 目录提炼的工程师技能集，汇集可复用的 Agent prompt 模板与工作流配置 |
| **[rohitg00/agentmemory](https://github.com/rohitg00/agentmemory)** | — | +1,879 | 首个基于真实基准测试的 AI 编程智能体持久记忆方案，解决 Agent 跨会话上下文丢失问题 |
| **[obra/superpowers](https://github.com/obra/superpowers)** | — | +1,780 | Agentic Skills 框架，提供软件开发的技能抽象与编排方法论，强调 Agent 的可组合性 |
| **[garrytan/gstack](https://github.com/garrytan/gstack)** | — | +915 | 复刻 Garry Tan 的 Claude Code 完整配置栈，23 个工具角色（CEO、Designer、QA 等）一键部署 |
| **[langgenius/dify](https://github.com/langgenius/dify)** | 141,403 | — | 生产级 Agentic 工作流开发平台，支持可视化编排、RAG、工具调用，中小企业落地首选 |
| **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** | 73,560 | — | 微软开源的 AI 驱动开发平台，侧重代码生成与自动化测试，对标 Devin 路线 |
| **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** | 31,410 | — | 前端 Agent 开发框架，定义 AG-UI 协议，使 GenAI UI 能与 Agent 状态深度联动 |

#### 📦 AI 应用

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| **[ruvnet/RuView](https://github.com/ruvnet/RuView)** | — | +1,715 | WiFi 信号替代摄像头实现空间感知/生命体征监测，无需视觉数据的隐私感知新范式 |
| **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** | — | +654 | 科研/工程/金融场景的即用型 Agent 技能集，覆盖数据分析、报告生成、公式推导 |
| **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** | — | +363 | 金融市场语言基础模型，定位为金融 NLP 的专用大模型，填补时序金融数据理解空白 |
| **[NVIDIA-AI-Blueprints/video-search](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization)** | — | +62 | 英伟达出品的视频检索与摘要蓝图，含 RAG 视觉 Agent 参考架构，适合视频理解场景快速落地 |
| **[open-webui/open-webui](https://github.com/open-webui/open-webui)** | 137,110 | — | 对标 OpenAI WebUI 的本地化 AI 界面，支持 Ollama / OpenAI API，用户量最大的开源 AI UI |
| **[open-compass/opencompass](https://github.com/open-compass/opencompass)** | 6,992 | — | 覆盖 100+ 数据集的 LLM 评测平台，支持 Llama3、Mistral、Qwen、GPT-4 等主流模型基准对比 |

#### 🧠 大模型 / 训练

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | 160,623 | — | Hugging Face 核心库，提供文本/视觉/音频/多模态模型定义与训练能力，生态无可撼动 |
| **[pytorch/pytorch)** | 99,914 | — | 动态计算图深度学习框架，GPU 加速的事实标准，Transformer 时代训练首选 |
| **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** | 195,117 | — | 全品类 ML 框架之最，产业端部署量仍居首位，Keras 集成后易用性持续改善 |
| **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** | 94,774 | — | 从零实现类 ChatGPT LLM 的教程仓库，理论 + 代码结合，是大模型学习者必读资源 |
| **[open-compass/opencompass](https://github.com/open-compass/opencompass)** | 6,992 | — | 开源 LLM 评测标杆，100+ 数据集 + 多维度评测，是大模型迭代的重要反馈环 |

#### 🔍 RAG / 知识库

| 项目 | Stars | 今日新增 | 一句话说明 |
|---|---|---|---|
| **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** | 136,755 | — | Agent 工程平台，提供 RAG、工具调用、记忆管理的统一抽象，是 AI 应用开发的事实标准 |
| **[milvus-io/milvus](https://github.com/milvus-io/milvus)** | 44,296 | — | 云原生高性能向量数据库，支持十亿级 ANN 检索，是 RAG 系统存储层的工业级选择 |
| **[llama_index](https://github.com/run-llama/llama_index)** | 49,422 | — | 文档智能体 + OCR 平台，专注文档解析→向量化→检索的全流程，RAG 应用开发主流框架 |
| **[qdrant/qdrant](https://github.com/qdrant/qdrant)** | 31,320 | — | Rust 实现的高性能向量数据库，提供混合搜索（向量 + 标量过滤），近期云服务增长迅猛 |
| **[mem0ai/mem0](https://github.com/mem0ai/mem0)** | 55,733 | — | AI Agent 通用记忆层，跨会话压缩与注入上下文，降低 Agent 开发中的记忆管理复杂度 |
| **[safishamsi/graphify](https://github.com/safishamsi/graphify)** | 48,034 | — | 将代码库/SQL/文档/视频转换为可查询知识图谱的工具，为 RAG 提供结构化知识增强 |

---

### 3. 📈 趋势信号分析

**智能体基础设施进入「工程化量产」阶段。** 今日 Trending 前六名中，有五个是 Agent 框架或工具链（`openhuman`、`mattpocock/skills`、`agentmemory`、`superpowers`、`gstack`），总新增超过 **10,000 ⭐**。这与 2025 年 Agent 概念刚兴起时的「Demo 驱动」不同——当前项目普遍提供**持久记忆**（agentmemory）、**技能复用**（mattpocock/skills）、**本地化部署**（openhuman）等工程特性，说明 Agent 正从探索走向生产。

**TypeScript/Rust 正在挑战 Python 在 AI 工具链的主导地位。** `openhuman`（Rust）、`gstack`（TypeScript）、`ruflo`（TypeScript）、`Qdrant`（Rust）的崛起表明：在推理性能敏感（Rust）或前端/CLI 集成场景（TypeScript）中，AI 开发者正在摆脱 Python-only 的路径依赖，AI 基础设施的**多语言化**趋势正在加速。

**垂直领域 AI 出现差异化机会。** 金融领域同时出现 `Kronos`（基础模型）和 `TradingAgents`（多 Agent 交易框架），说明金融 AI 从通用 LLM 调用转向**领域定制模型 + 专用 Agent 编排**的深度定制路线。类似的垂直化趋势也出现在科研（`scientific-agent-skills`）、开发者工具（`skills` 系列）和视频理解（`NVIDIA-AI-Blueprints`）方向。

---

### 4. 🗣️ 社区关注热点

- 🔥 **`tinyhumansai/openhuman`** — Rust 实现本地 AI 超智能体，3329 ⭐的单日增速极具说服力，隐私优先 + 零依赖特性切中企业敏感场景需求，建议持续追踪正式版发布

- 🔥 **`mattpocock/skills`** — 从真实 `.claude` 配置提炼的工程师技能库，代表了「Agent 配置即产品」的新范式，对 CLI/本地开发场景有直接价值

- 🔥 **`rohitg00/agentmemory`** — 解决 AI 编程 Agent 跨会话记忆丢失的痛点，与 OpenHands / Claude Code 生态高度契合，是提升 Agent 实用性的关键基础设施

- 💡 **`Kronos`** — 首个专注「金融市场语言」的基础模型，若与 `TradingAgents` 联动，可能形成「领域基础模型 → 垂直 Agent → 交易执行」的完整闭环，值得金融 AI 开发者提前布局

- 💡 **RAG + Graph 双路径并行** — `langchain` 主导的向量检索路线与 `graphify` 主导的知识图谱路线并行演进，开发者可根据精度 vs. 可解释性需求选择，当前两者均保持高活跃度

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*