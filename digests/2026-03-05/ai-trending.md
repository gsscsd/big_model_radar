# AI 开源趋势日报 2026-03-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-05 00:08 UTC

---

# AI 开源趋势日报 | 2026-03-05

---

## 今日速览

今日 AI 开源领域呈现**智能体基础设施爆发**态势：安全沙盒平台 OpenSandbox 和记忆管理工具 ReMe 获得高度关注，反映社区对 Agent 可靠性和长期记忆能力的迫切需求。Claude Code 生态持续火热，多个配套工具（Zero-Config Code Flow、Claude 记忆插件）登榜。同时，**AI 安全与自主执行**成为新焦点，Shannon 自主渗透测试 Agent 以 96%+ 成功率引发关注。Rust 语言在 AI 基础设施中的占比显著提升，从向量数据库到 LLM 应用框架均有覆盖。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | 5,959 | +788 | 阿里开源的通用 AI 沙盒平台，支持 Coding Agents、GUI Agents、RL 训练等多场景，提供统一 API 和 K8s 运行时 |
| [CodebuffAI/codebuff](https://github.com/CodebuffAI/codebuff) | - | +337 | 终端代码生成工具，主打"从命令行直接生成代码"的极简体验 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,262 | - | Rust 模块化 LLM 应用框架，强调可扩展性和类型安全 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 3,875 | - | Apple Silicon 上的 LLM 推理服务课程项目，实现类 vLLM + Qwen 的精简版 |
| [ollama/ollama](https://github.com/ollama/ollama) | 164,093 | - | 本地大模型运行标杆，今日新增支持 Kimi-K2.5、GLM-5、MiniMax 等国产模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 71,987 | - | 高吞吐 LLM 推理引擎，生产环境部署首选 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | - | **+1,854** | **全自主 AI 渗透测试 Agent**，在 XBOW 基准测试达 96.15% 成功率，无需人工提示 |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | - | **+2,209** | **今日增速冠军**——完整 AI 代理团队，含前端、社区运营、创意注入等专业化角色 |
| [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe) | - | +345 | Agent 记忆管理工具包，解决长期记忆存储、检索与精炼问题 |
| [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | - | +427 | 可视化、可理解的 Agent 构建平台，强调可解释性 |
| [trycua/cua](https://github.com/trycua/cua) | 12,841 | - | 开源 Computer-Use Agent 基础设施，支持 macOS/Linux/Windows 桌面控制 |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | 11,120 | - | 企业级 Agent 安全沙盒，提供真实工具环境 |
| [crestalnetwork/intentkit](https://github.com/crestalnetwork/intentkit) | 6,488 | - | 自托管云 Agent 集群，管理协作式 AI 代理团队 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 50,055 | +145 | 可视化 AI Agent 构建工具，低代码工作流编排 |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | - | **+1,454** | **自托管 Grok 伴侣**，支持实时语音、Minecraft/Factorio 游戏交互，追求 Neuro-sama 级别的 AI 人格化 |
| [ItzCrazyKns/Perplexica](https://github.com/ItzCrazyKns/Perplexica) | - | **+1,090** | AI 驱动的问答引擎，开源 Perplexity 替代方案 |
| [K-Dense-AI/claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) | - | +940 | 面向科研、工程、金融的 Claude Agent 技能库，即插即用 |
| [waoowaooAI/waoowaoo](https://github.com/waoowaooAI/waoowaoo) | 7,891 | - | 工业级 AI 影视生产平台，支持从短片到真人电影的好莱坞标准工作流 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 125,745 | - | 用户友好的 AI 界面，支持 Ollama 和 OpenAI API |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 79,593 | - | 让网站对 AI Agent 可访问，自动化在线任务 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 67,877 | - | 100+ LLM/VLM 统一高效微调框架（ACL 2024） |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 87,075 | - | 从零实现 ChatGPT 式 LLM 的权威教程 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 68,553 | - | AI 驱动软件开发平台，代码生成与编辑 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 60,355 | - | Claude Code 性能优化系统，含技能、记忆、安全等模块 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 6,715 | - | 主流 LLM 评测平台，支持 100+ 数据集 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| [langgenius/dify](https://github.com/langgenius/dify) | 131,198 | - | 生产级 Agentic 工作流开发平台 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 74,167 | - | 融合 RAG 与 Agent 能力的开源引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 48,714 | - | AI Agent 通用记忆层 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 12,919 | - | 6 行代码实现的 AI Agent 记忆知识引擎 |
| [memvid/memvid](https://github.com/memvid/memvid) | 13,267 | - | 无服务器、单文件 Agent 记忆层，替代复杂 RAG 管道 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 32,917 | - | Claude Code 会话记忆自动捕获与压缩插件 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 29,276 | - | 高性能云原生向量数据库 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,128 | - | 云原生向量 ANN 搜索数据库 |

---

## 趋势信号分析

**智能体基础设施进入"可靠性攻坚"阶段**。今日热榜中，OpenSandbox（安全执行环境）、ReMe（记忆管理）、E2B（企业级沙盒）同时出现，表明社区已从"让 Agent 跑起来"转向"让 Agent 稳定、安全、可记忆地长期运行"。这与近期 Claude 3.7 Sonnet、Grok 3 等大模型的工具调用能力升级直接相关——更强的基座模型催生了更复杂的 Agent 应用，进而暴露了执行环境隔离、长期记忆管理等基础设施短板。

**Claude Code 生态形成飞轮效应**。从 agency-agents 到 claude-scientific-skills、claude-mem、Zero-Config Code Flow，围绕 Anthropic 编程工具的二次开发工具链快速成熟，反映开发者对"AI 原生开发环境"的强烈需求。

**AI 安全测试成为新兴垂直**。Shannon 以 96%+ 成功率在渗透测试基准上取得突破，标志着 AI Agent 开始从"辅助工具"向"自主执行者"演进，同时也引发对 AI 安全能力的重新评估。

---

## 社区关注热点

- **🔥 Shannon（自主 AI 黑客）** — 首个在真实安全测试基准上达到人类专家水平的自主 Agent，可能重塑网络安全行业的人机协作模式

- **🔥 agency-agents（AI 代理团队）** — 多 Agent 协作框架的实用化尝试，将"AI 员工"概念从演示推向可交付的生产环境

- **🔥 OpenSandbox（阿里开源）** — 国内大厂首次在 AI Agent 基础设施层面推出通用平台，支持从 Coding 到 RL 训练的全场景，值得密切关注其生态发展

- **🔥 ReMe / memvid / cognee（记忆层三剑客）** — Agent 记忆问题出现多种技术路线竞争：结构化记忆、向量记忆、知识图谱记忆，开发者需根据场景选择

- **🔥 airi（AI 伴侣人格化）** — 实时语音 + 游戏交互 + 多平台支持，代表消费级 AI 应用向"数字生命"体验的探索方向

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*