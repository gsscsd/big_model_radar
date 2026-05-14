# AI 开源趋势日报 2026-05-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-14 02:37 UTC

---

# 🤖 AI 开源趋势日报

**日期**：2026-05-14

---

## 第一步：AI 相关性过滤结果

从 Trending 榜单 19 个仓库中筛选出 **10 个 AI 相关项目**，排除 Telegraf（监控）、React Doctor（前端）、CloakBrowser（反爬虫）、GTweak（系统工具）、How-To-Secure-A-Linux-Server（安全配置）、Spec-Kit（开发方法论）等非 AI 项目。

---

## 第二步：分类整理

### 🔧 AI 基础工具

### 🤖 AI 智能体/工作流

### 📦 AI 应用

### 🧠 大模型/训练

### 🔍 RAG/知识库

---

## 第三步：报告正文

### 1. 今日速览

- **Agent 框架井喷**：今日 Trending 中 Agent 相关项目占据 5 席，OpenHuman、SuperPowers、AgentMemory 等新项目单日 Stars 均破千，社区对"AI Agent 操作系统"类基础设施的探索热情高涨。
- **Rust 在 AI 工具链崛起**：OpenHuman、Rust 版 LLM 推理框架 Rig 等 Rust 项目登榜，Rust 在 AI 推理、On-Device 部署场景的性能优势正被开发者认可。
- **On-Device/本地化趋势加速**：SuperTonic 实现 Swift 原生 ONNX 推理、Ollama 支持本地模型管理，加上向量数据库的嵌入式部署，隐私优先与本地化 AI 方案持续升温。
- **垂直场景 AI 应用涌现**：AiToEarn（AI 变现）、Scientific-Agent-Skills（科研自动化）、TradingAgents（金融交易）等将 LLM 能力落地具体场景，而非仅停留在 Chat 形态。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|----------|------------|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 94,502 | +821 | 从零实现 ChatGPT 级别 LLM，是目前最系统的 LLM 教学项目，适合深入理解大模型原理 |
| [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) | — | +859 | Swift 原生 ONNX TTS 引擎，支持多语言设备端语音合成，填补 Apple 生态高性能语音 AI 空白 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,267 | — | Rust 实现的模块化 LLM 应用框架，利用 Rust 内存安全与并发优势构建可扩展 AI 服务 |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 25,244 | — | 基于 LLM 的 Python 爬虫框架，用自然语言描述即可生成网页/文档抓取流程，降低 AI 数据采集门槛 |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|----------|------------|
| [mattpocock/skills](https://github.com/mattpocock/skills) | — | +3392 | Claude Code 的 Skills 目录工程化实践，将 AI Agent 的能力模块化封装，今日增长最为迅猛 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | — | +1696 | 定位"个人 AI 超智能体"，主打私有化部署与极简体验，探索 AI Agent 的消费级产品形态 |
| [obra/superpowers](https://github.com/obra/superpowers) | — | +1401 | Agentic Skills 框架与软件工程方法论融合，提供让 AI Agent 系统化工作的开发范式 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | — | +1379 | AI 编程智能体的持久化记忆方案，基于真实评测基准构建，解决 Agent 跨会话上下文丢失痛点 |
| [trycua/cua](https://github.com/trycua/cua) | — | +245 | 跨平台（macOS/Linux/Windows）计算机控制 Agent 的开源基础设施，含沙箱、SDK 与评测基准 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | — | +99 | 面向科研/工程/金融场景的即用型 Agent Skills 库，涵盖研究助理、代码生成、数据分析等能力 |

#### 📦 AI 应用

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|----------|------------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 148,823 | — | "与用户共同成长的 Agent"，Hermes 系列在开源 Agent 领域积累深厚，社区影响力持续领先 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 31,374 | — | React/Angular 的 AI Agent 前端开发栈，包含 AG-UI 协议，推动生成式 UI 成为前端新范式 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 119,503 | — | AI 友好的网页搜索与抓取 API，为 RAG 和 Agent 提供结构化互联网数据采集能力 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 93,800 | — | 让 AI Agent 操作网页的自动化框架，将网站访问能力赋能各类 AI 应用场景 |
| [Zh ayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,418 | — | 多渠道接入的企业级 AI 助理框架，支持微信/飞书/钉钉等，集成 MCP 协议与多模型路由 |
| [Yikart/AiToEarn](https://github.com/yikart/AiToEarn) | — | +981 | 探索 AI 变现路径的项目集合，将 LLM 能力与实际收益场景结合 |

#### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|----------|------------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 195,108 | — | 依然是机器学习框架的基准级项目，持续更新支持最新 AI 范式 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 160,582 | — | Hugging Face 核心库，提供 SOTA 模型统一 API，是 NLP/CV/多模态模型使用的事实标准 |
| [ollama/ollama](https://github.com/ollama/ollama) | 171,352 | — | 本地大模型运行引擎，支持 Qwen/DeepSeek/Gemma 等主流开源模型，一键部署零门槛 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 79,932 | — | 高吞吐量 LLM 推理与服务引擎，PagedAttention 技术大幅降低显存占用，生产环境首选 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 136,956 | — | Ollama/WebUI 的用户友好前端界面，支持多模型管理与 RAG，是本地 AI 的热门入口 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 99,887 | — | 动态图深度学习框架，AI 研究首选平台，生态覆盖预训练、推理、分布式训练全链路 |

#### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 一句话说明 |
|------|-------|----------|------------|
| [langgenius/dify](https://github.com/langgenius/dify) | 141,279 | — | 生产级 Agentic 工作流开发平台，内置 RAG、Agent、流程编排能力，开源界的"AI 应用工厂" |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 136,664 | — | Agent 工程框架，提供工具调用、记忆链、RAG 组件，是 AI 应用开发的基础设施层 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 110,186 | — | 100+ 可直接运行的 LLM+RAG 应用合集，覆盖聊天机器人、文档理解、数据分析等场景 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 80,450 | — | 融合 RAG 与 Agent 能力的高质量上下文生成引擎，提升 LLM 回答准确性 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 49,388 | — | 文档 Agent 与 OCR 平台，专注结构化知识抽取与索引构建 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,274 | — | 云原生向量数据库，支持海量 ANN 检索，是 AI 应用向量存储的事实标准 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 55,629 | — | AI Agent 的通用记忆层，跨会话持久化上下文，解决 Agent 长期记忆缺失问题 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 57,548 | — | 闪电级搜索引擎，支持 AI 混合检索，是轻量级 RAG 知识库的优选后端 |
| [mintplex-labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 60,003 | — | 全合一 AI 生产力工具，支持本地部署与隐私优先，开箱即用的私人知识库方案 |

---

### 3. 趋势信号分析

从今日数据来看，**AI Agent 基础设施**是最大热点。Trending 榜单中 Agent 相关项目占据 5 席，且增长速率远超其他类别——Matt Pocock 的 Skills 项目单日 +3392 Stars，反映出开发者对"将 AI 能力模块化、标准化"的需求极为迫切。OpenHuman、SuperPowers、CUA 等新项目虽尚未积累足够 total stars，但以日增数百至千的速度攀升，显示出 Agent 框架赛道的激烈竞争。

**Rust 在 AI 领域的渗透**值得关注。OpenHuman、Rig 等 Rust 项目同日登榜，Rust 的内存安全与零成本抽象在 AI 推理引擎、On-Device 部署场景具有天然优势，这一技术栈的 AI 应用正在从底层向上蔓延。

**垂直场景 AI 应用**持续分化。AiToEarn、Scientific-Agent-Skills、TradingAgents 等将 LLM 能力与具体行业场景（变现、科研、金融）深度绑定，而非停留在通用聊天，说明 AI 开源正从"工具"向"解决方案"演进。

---

### 4. 社区关注热点

- **🤖 [mattpocock/skills](https://github.com/mattpocock/skills)** — 今日增长最猛项目，代表了 AI Agent Skills 模块化、工程化的最新实践，建议持续跟踪其设计理念

- **🧠 [mem0ai/mem0](https://github.com/mem0ai/mem0)** — AI Agent 的长期记忆缺失是落地瓶颈，Mem0 作为统一记忆层有望成为 Agent 框架标配

- **⚡ [vllm-project/vllm](https://github.com/vllm-project/vllm)** — 大模型生产级推理引擎，结合 Ollama 本地部署需求，是开发者构建 AI 服务的技术栈组合

- **📱 [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic)** — Swift ONNX TTS 填补 Apple 生态高性能语音 AI 空白，对 iOS/macOS AI 应用开发有重要参考价值

- **🔗 [trycua/cua](https://github.com/trycua/cua)** — 跨平台计算机控制 Agent 的开源基础设施，若成熟将大幅降低"AI 操作电脑"类应用的开发门槛

---
*本日报由 [Big Model Radar](https://github.com/ivanweng2077/big_model_radar) 自动生成。*