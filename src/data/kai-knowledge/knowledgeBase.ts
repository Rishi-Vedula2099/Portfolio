export interface KnowledgeDoc {
  id: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  content: string;
  voiceSummary: string;
  navTarget?: string;
  suggestedFollowups?: string[];
}

export const KAI_KNOWLEDGE_BASE: Record<string, KnowledgeDoc> = {
  about: {
    id: "about",
    title: "About Rishi Vedula",
    category: "Bio",
    tags: ["bio", "about", "philosophy", "background", "rishi", "who are you", "tell me about yourself"],
    summary: "Rishi Vedula is an AI Software Engineer & Full-Stack Architect specializing in high-performance Web Apps, Distributed Systems, and Production AI Platform Engineering.",
    voiceSummary: "Rishi Vedula is an AI Software Engineer and Full-Stack Architect with a passion for production-grade AI platforms, distributed systems, and minimalist UI engineering.",
    navTarget: "about",
    suggestedFollowups: ["What are his top skills?", "Show his AI projects", "Download resume"],
    content: `
# Rishi Vedula — AI Software Engineer & Full-Stack Architect

Rishi Vedula is an innovative AI Software Engineer and Full-Stack Systems Architect. He crafts high-performance web applications, distributed AI ecosystems, autonomous agent workflows, and reactive micro-interaction design systems.

### Core Philosophy
- **Precision Engineering**: Production-ready code with deep algorithmic optimization and zero fluff.
- **Architectural Harmony**: Seamless integration between edge clients, distributed backend microservices, and modern generative AI models.
- **User-Centric Motion**: Crafting memorable, fluid web experiences inspired by Japanese minimalist aesthetics.

### Key Focus Areas
- Full-Stack AI Ecosystems (Next.js 16, React 19, FastAPI, PyTorch, Ollama, OpenAI)
- Computer Vision, Multilingual RAG, and Video Processing Pipelines
- Cloud Infrastructure & Distributed IoT Monitoring (Azure, Docker, Kubernetes, Kafka)
    `
  },

  experience: {
    id: "experience",
    title: "Professional Experience & Engineering Depth",
    category: "Experience",
    tags: ["experience", "background", "work", "history", "career", "jobs", "engineering"],
    summary: "Proven track record in architecting full-stack AI platforms, real-time video transcript RAG pipelines, distributed IoT platforms, and custom LLM agent systems.",
    voiceSummary: "Rishi has engineered multiple production AI systems, including AgriGuard's full-stack agricultural AI platform, LectureLens video RAG system, and Helios distributed vehicle IoT platform.",
    navTarget: "about",
    suggestedFollowups: ["Tell me about AgriGuard", "Explain LectureLens", "View certifications"],
    content: `
# Engineering Experience & Key Highlights

- **Lead Full-Stack AI Architect**: Designed end-to-end architectures combining Next.js 16 App Router, Python FastAPI microservices, and custom vector search databases.
- **AI Agent Systems Developer**: Engineered autonomous agent orchestration pipelines (OwnAI) featuring Celery task queues, Redis message brokers, and FAISS vector indices.
- **Distributed Vehicle IoT & AI Specialist**: Built Helios, a multi-tier IoT and AI telemetry platform supporting real-time vehicle monitoring, OTA updates, and video analytics.
- **Computer Vision & RAG Pipeline Engineer**: Designed multi-modal agricultural disease detection algorithms and video transcript indexing systems.
    `
  },

  projects: {
    id: "projects",
    title: "Featured Works & AI Projects",
    category: "Works",
    tags: ["projects", "works", "portfolio", "agriguard", "lecturelens", "helios", "ownai", "show projects", "latest project"],
    summary: "Rishi's portfolio showcases production AI systems: AgriGuard (AI AgriTech), LectureLens (Video RAG), Helios (Vehicle IoT AI), and OwnAI (Custom Agent Platform).",
    voiceSummary: "Rishi has built four flagship AI projects: AgriGuard for AI AgriTech, LectureLens for video-to-knowledge transformation, Helios for distributed vehicle IoT, and OwnAI for custom AI agent creation.",
    navTarget: "works",
    suggestedFollowups: ["Tell me more about LectureLens", "Explain AgriGuard", "Show AI projects"],
    content: `
# Featured Projects

1. **AgriGuard** (AgriTech AI Ecosystem)
   - *Tech*: Next.js, FastAPI, PostgreSQL, Google Gemini 1.5 Pro & Flash.
   - *Features*: Real-time crop disease recognition, farmer advisory AI, and student learning hub.

2. **LectureLens** (Video-to-Knowledge Transformation)
   - *Tech*: Next.js 14+, FastAPI, OpenAI (GPT-4o, Whisper-1, TTS-1), ChromaDB.
   - *Features*: Claymorphism UI, video audio transcription, vector store RAG, interactive quiz generation.

3. **Helios** (Vehicle IoT & Distributed AI)
   - *Tech*: Next.js 16, FastAPI, InfluxDB, Kafka, PyTorch, YOLO, Docker, Kubernetes.
   - *Features*: Telemetry monitoring, OTA software deployments, computer vision object detection.

4. **OwnAI** (Custom AI Agent Platform)
   - *Tech*: Next.js 16, FastAPI, FAISS, Ollama/OpenAI, Celery, WebSockets.
   - *Features*: Full-stack platform for deploying and chatting with autonomous AI agents.
    `
  },

  skills: {
    id: "skills",
    title: "Technical Stack & Proficiency",
    category: "Skills",
    tags: ["skills", "tech stack", "languages", "frameworks", "python", "typescript", "react", "nextjs", "open skills"],
    summary: "Expertise across Next.js 16, React 19, TypeScript, Python, FastAPI, PyTorch, OpenAI, Azure AI, Docker, PostgreSQL, and Canvas Physics.",
    voiceSummary: "Rishi's technical stack spans Next.js 16, React 19, TypeScript, Python, FastAPI, PyTorch, OpenAI, Azure AI, Kafka, Docker, and Canvas API.",
    navTarget: "skills",
    suggestedFollowups: ["Show Azure capabilities", "What are his AI skills?", "View architecture"],
    content: `
# Rishi's Technical Stack

- **Frontend & UI**: Next.js 16, React 19, TypeScript, Custom Vanilla CSS, HTML5 Canvas API, Web Speech API, Motion Systems.
- **Backend & Microservices**: Python, FastAPI, Node.js, Express, REST APIs, WebSockets, Celery, Redis.
- **AI & Data Engineering**: OpenAI API (GPT-4o, Whisper, TTS), Google Gemini 1.5, PyTorch, YOLO, LangChain, FAISS, ChromaDB.
- **Databases & DevOps**: PostgreSQL, InfluxDB, MongoDB, Redis, Docker, Kubernetes, Kafka, Git, Linux.
    `
  },

  azure: {
    id: "azure",
    title: "Azure Cloud & AI Services",
    category: "Cloud",
    tags: ["azure", "cloud", "azure speech", "azure openai", "microsoft", "certifications", "show azure"],
    summary: "Rishi is skilled in Microsoft Azure AI Services, Azure OpenAI, Azure Speech SDK, Container Apps, and Cloud Architecture.",
    voiceSummary: "Rishi leverages Azure Cloud & AI services, including Azure OpenAI, Speech SDK, Container Apps, and enterprise AI solution patterns.",
    navTarget: "skills",
    suggestedFollowups: ["Show certifications", "What AI architectures does he build?", "Contact Rishi"],
    content: `
# Microsoft Azure Ecosystem Mastery

- **Azure AI Services**: Integration of Azure Speech SDK (TTS & Speech-to-Text), Azure Computer Vision, and Language Services.
- **Azure OpenAI Service**: Secure deployment of enterprise LLM endpoints, prompt engineering, and hybrid cloud RAG architecture.
- **Cloud Infrastructure**: Azure App Service, Azure Container Instances/Apps, CosmosDB, Blob Storage, and Key Vault.
    `
  },

  ai: {
    id: "ai",
    title: "Artificial Intelligence & Agentic Engineering",
    category: "AI",
    tags: ["ai", "artificial intelligence", "agents", "llm", "rag", "pytorch", "yolo", "vision", "ai projects"],
    summary: "Specialized in autonomous multi-agent orchestration, RAG vector retrieval, speech synthesis, and real-time computer vision.",
    voiceSummary: "Rishi specializes in agentic AI architecture, multi-modal RAG systems, voice AI integration, and real-time computer vision.",
    navTarget: "works",
    suggestedFollowups: ["Show AI projects", "Explain OwnAI platform", "What is LectureLens?"],
    content: `
# AI Engineering Expertise

- **Agentic AI**: Multi-agent collaboration loops, tool execution, memory state persistence, and function calling.
- **RAG & Vector Retrieval**: Embedding generation, hybrid vector-keyword search with ChromaDB and FAISS.
- **Speech & Audio AI**: Low-latency voice pipelines with Web Speech API, OpenAI Whisper transcription, and TTS-1 synthesis.
- **Computer Vision**: Agricultural leaf disease detection models, vehicle tracking with YOLO and PyTorch.
    `
  },

  architecture: {
    id: "architecture",
    title: "System Architecture & UI Physics",
    category: "Architecture",
    tags: ["architecture", "design system", "zen", "canvas", "performance", "samurai", "system design"],
    summary: "Architectural focus on zero-dependency custom physics engines, glassmorphism UI, event-driven state pipelines, and high-fps canvas visuals.",
    voiceSummary: "Rishi builds custom zero-dependency physics engines, low-latency UI pipelines, and Japanese minimalist design systems.",
    navTarget: "approach",
    suggestedFollowups: ["Tell me about the Samurai theme", "Show skills", "Contact Rishi"],
    content: `
# Portfolio & System Architecture

- **Minimalist Zen Design System**: "Midnight Glass" dark theme with crimson accents, gold trim, and Japanese typography.
- **Zero-Dependency Canvas Physics**: Custom \`requestAnimationFrame\` animation loops for Sakura petals, snowfall, particle wisps, and reticles.
- **State & Event Pipeline**: Reactive context hooks without unnecessary heavy framework dependencies.
    `
  },

  resume: {
    id: "resume",
    title: "Resume & Professional Summary",
    category: "Resume",
    tags: ["resume", "cv", "experience summary", "download resume", "download", "education"],
    summary: "Rishi's resume highlights full-stack AI engineering, Next.js architecture, Python backend design, cloud deployments, and AI platform accomplishments.",
    voiceSummary: "Rishi's resume covers his full-stack AI engineering background, Next.js architecture, Python backend development, and cloud deployments. Would you like a brief summary or to view his contact info?",
    navTarget: "about",
    suggestedFollowups: ["Contact Rishi", "What are his top projects?", "Show GitHub"],
    content: `
# Rishi Vedula — Resume Highlights

- **Role**: AI Software Engineer & Full-Stack Architect
- **Specialities**: Production AI Platforms, RAG Vector Search, Next.js 16, FastAPI, Microsoft Azure.
- **Highlights**: Built AgriGuard, LectureLens, Helios, and OwnAI. Certified Microsoft Cloud Specialist.
    `
  },

  contact: {
    id: "contact",
    title: "Contact & Collaboration Methods",
    category: "Contact",
    tags: ["contact", "email", "github", "linkedin", "twitter", "reach out", "collaborate", "show contact"],
    summary: "Connect with Rishi for AI platform engineering, full-stack consulting, research collaborations, or software architecture roles.",
    voiceSummary: "You can connect with Rishi via Email, GitHub, LinkedIn, or Twitter. The Contact section at the bottom of the page has direct access to all professional channels.",
    navTarget: "contact",
    suggestedFollowups: ["Open GitHub", "Open LinkedIn", "Start Guided Tour"],
    content: `
# Professional Contact Methods

- **GitHub**: [github.com/Rishi-Vedula2099](https://github.com/Rishi-Vedula2099)
- **LinkedIn**: [Rishi Vedula Profile](https://www.linkedin.com/in/rishi-vedula-b7b527252/)
- **X / Twitter**: [@Abyss_Knight12](https://x.com/Abyss_Knight12)
- **Inquiries**: Open for AI engineering roles, high-impact consulting, and open-source collaboration.
    `
  },

  certifications: {
    id: "certifications",
    title: "Certifications & Professional Credentials",
    category: "Certifications",
    tags: ["certifications", "credentials", "microsoft", "azure certified", "show certifications"],
    summary: "Holds credentials in Microsoft Azure AI Engineering, Cloud Architecture, and Machine Learning Systems.",
    voiceSummary: "Rishi holds cloud and AI credentials including Microsoft Azure AI engineering patterns, distributed cloud architecture, and full-stack system design.",
    navTarget: "skills",
    suggestedFollowups: ["Show Azure", "Show Skills", "Show Projects"],
    content: `
# Key Certifications & Credentials

- **Microsoft Azure Cloud & AI Engineering**: Specialized in Azure AI Services, Cognitive Services, Speech SDK, and enterprise deployment.
- **Full-Stack AI Architecture**: Advanced mastery in Next.js, Python FastAPI microservices, and vector DB implementations.
    `
  },

  blogs: {
    id: "blogs",
    title: "Engineering Insights & Articles",
    category: "Insights",
    tags: ["blogs", "articles", "insights", "writing", "thoughts", "insights section"],
    summary: "Rishi writes about AI system design, vector retrieval optimization, real-time audio streaming, and high-performance Web APIs.",
    voiceSummary: "Rishi publishes engineering insights on AI system design, vector retrieval, and low-latency frontend architecture.",
    navTarget: "insights",
    suggestedFollowups: ["Show Approach", "Show Projects", "Contact Rishi"],
    content: `
# Engineering Insights & Thoughts

- **Building Low-Latency AI Apps**: How to combine Next.js 16 with FastAPI and streaming WebSockets.
- **Vector Retrieval in Practice**: Comparing FAISS and ChromaDB for real-world video transcription RAG.
- **Minimalist Web Motion**: Zero-dependency canvas animation loops for modern web portfolios.
    `
  },

  timeline: {
    id: "timeline",
    title: "Career Milestones & Journey",
    category: "Timeline",
    tags: ["timeline", "journey", "milestones", "history", "evolution"],
    summary: "A timeline tracking Rishi's journey from full-stack web development to lead AI platform architect.",
    voiceSummary: "Rishi's journey spans from full-stack web engineering to building production-grade AI platforms, distributed IoT, and custom agent systems.",
    navTarget: "about",
    suggestedFollowups: ["Tell me about yourself", "Show projects", "Contact Rishi"],
    content: `
# Career Trajectory & Milestones

- **2024**: Scaled Web & System Architecture skills across TypeScript, Python, and React.
- **2025**: Deep dive into LLMs, RAG, PyTorch, and Azure Cloud AI infrastructure.
- **2026**: Launched AgriGuard, LectureLens, Helios, and OwnAI flagship projects; built KAI companion.
    `
  }
};
