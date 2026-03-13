# AI 开源趋势日报 2026-03-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-13 00:58 UTC

---

# AI 开源趋势日报（2026-03-13）

## 1. 今日速览

今日 GitHub AI 开源生态呈现“智能体爆发、边缘推理加速、RAG 平台化”三大趋势。微软发布 1-bit LLM 推理框架 BitNet，推动超低比特模型落地；Google 推出 LiteRT 接替 TensorFlow Lite，强化端侧 GenAI 部署能力；多个人工智能体项目单日获星超千，反映开发者对全栈 Agent 开发范式的强烈需求。同时，RAG 工具链持续整合 Langflow、Docling 等组件，向一体化平台演进。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具
- **[microsoft/BitNet](https://github.com/microsoft/BitNet)** ⭐0 (+2149)  
  微软官方 1-bit LLM 推理框架，实现极端量化模型的高效部署，为边缘设备运行大模型提供新路径。
- **[google-ai-edge/LiteRT](https://github.com/google-ai-edge/LiteRT)** ⭐0 (+13)  
  Google 新一代端侧 ML 框架，取代 TensorFlow Lite，专为高性能 GenAI 边缘推理优化。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐72,955  
  高吞吐 LLM 推理引擎，持续领跑生产级部署工具链，支撑主流模型高效服务。

### 🤖 AI 智能体/工作流
- **[alibaba/page-agent](https://github.com/alibaba/page-agent)** ⭐0 (+1205)  
  基于自然语言控制网页 GUI 的 in-page 智能体，实现浏览器自动化新范式。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐0 (+1264)  
  可自我成长的通用 AI 智能体框架，强调长期记忆与持续演化能力。
- **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** ⭐0 (+4168)  
  完整 AI 代理机构套件，集成前端、社区运营、创意生成等多角色专家智能体。
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** ⭐68,996  
  AI 驱动的全栈开发智能体，支持代码生成、测试与部署全流程自动化。

### 📦 AI 应用
- **[fishaudio/fish-speech](https://github.com/fishaudio/fish-speech)** ⭐0 (+637)  
  开源 SOTA 语音合成系统，提供高质量 TTS 能力，适用于语音助手、内容创作等场景。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐80,531  
  让 AI 智能体自主操作浏览器的工具，实现网页任务自动化，如填写表单、抓取数据等。

### 🧠 大模型/训练
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐68,307  
  统一高效微调 100+ LLM/VLM 的框架，ACL 2024 成果，降低大模型定制门槛。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐87,844  
  从零实现 ChatGPT 类模型的教程项目，教育价值高，助力开发者深入理解 LLM 原理。

### 🔍 RAG/知识库
- **[langflow-ai/openrag](https://github.com/langflow-ai/openrag)** ⭐0 (+322)  
  基于 Langflow + Docling + OpenSearch 的一体化 RAG 平台，简化检索增强生成应用构建。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐74,882  
  融合 RAG 与 Agent 能力的开源引擎，提供上下文增强层，提升 LLM 应用准确性。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐49,590  
  AI 智能体的通用记忆层，支持长期记忆存储与检索，增强多轮交互连贯性。

---

## 3. 趋势信号分析

今日热榜显示，**AI 智能体开发正从实验原型迈向全栈生产工具**。多个 Agent 项目单日获星超千（如 agency-agents +4168，page-agent +1205），表明开发者亟需“开箱即用”的智能体构建套件。同时，**边缘侧 AI 推理迎来技术迭代**：微软 BitNet 推动 1-bit 模型实用化，Google LiteRT 重构端侧部署栈，反映行业对低成本、低延迟 GenAI 落地的迫切需求。此外，RAG 工具趋向平台化整合（如 openrag 融合 Langflow 与 Docling），说明复杂知识增强流程正被封装为标准化组件。这些动向与近期多模态 Agent、端侧大模型商用化趋势高度契合。

---

## 4. 社区关注热点

- **BitNet（微软）**：1-bit LLM 推理框架可能彻底改变边缘设备运行大模型的成本结构，值得密切关注其性能基准与生态适配。
- **agency-agents**：单日近 4200 stars 反映“AI 机构”概念爆发，其多角色协作架构或成新一代 Agent 设计范式。
- **page-agent（阿里）**：in-page GUI 控制能力 bridging 自然语言与网页操作，是浏览器自动化迈向通用智能体的关键一步。
- **openrag**：将 Langflow（可视化工作流）、Docling（文档解析）、OpenSearch（检索）整合为单一 RAG 平台，显著降低企业级应用开发复杂度。
- **LiteRT（Google）**：作为 TensorFlow Lite 继任者，其端侧 GenAI 优化策略将影响移动端 AI 应用的技术选型。

---
*本日报由 [Big Model Radar](https://github.com/gsscsd/big_model_radar) 自动生成。*