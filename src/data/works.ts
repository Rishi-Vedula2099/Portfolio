import type { Work } from "@/types";

export const WORKS: Work[] = [
    {
        no: "壱", en: "01", title: "AgriGuard", sub: "AgriTech · AI Ecosystem", kanji: "農", year: "二〇二六",
        tags: ["Next.js", "FastAPI", "PostgreSQL", "Gemini 1.5 Pro/Flash", "JWT/BCrypt"],
        desc: "AgriGuard is a state-of-the-art, full-stack AI ecosystem designed to revolutionize agriculture. Built specifically for the modern agricultural landscape, it empowers Farmers with real-time disease detection and Students with a comprehensive learning marketplace, all driven by the power of Google Gemini 1.5 Pro & Flash.",
        href: "https://github.com/Rishi-Vedula2099/AgriGuard",
    },
    {
        no: "弐", en: "02", title: "LectureLens", sub: "Transform Any Video into Structured Knowledge", kanji: "講", year: "二〇二六",
        tags: ["Next.js 14+", "FastAPI", "OpenAI (GPT-4o, Whisper-1, TTS-1)", "ChromaDB (Transcripts/RAG)", "youtube-transcript-api + yt-dlp"],
        desc: "LectureLens is a state-of-the-art AI learning platform that converts passive video watching into an active, immersive, and structured learning experience. Driven by a sophisticated 'Claymorphism' design language, it bridges the gap between raw information and deep mastery.",
        href: "https://github.com/Rishi-Vedula2099/LectureLens",
    },
    {
        no: "参", en: "03", title: "Helios", sub: "Vehicle IoT · Distributed AI Ecosystem", kanji: "陽", year: "二〇二六",
        tags: ["Next.js 16", "FastAPI", "PostgreSQL / InfluxDB / MongoDB", "Kafka / Redis / MinIO", "PyTorch / YOLO", "Ollama / LangChain", "Docker / Kubernetes"],
        desc: "Distributed AI Platform for Vehicle Monitoring, OTA, Embedded Systems & Autonomous Analytics.",
        href: "https://github.com/Rishi-Vedula2099/Helios",
    },
    {
        no: "肆", en: "04", title: "OwnAI", sub: "Custom AI Agents · Full-Stack Platform", kanji: "己", year: "二〇二六",
        tags: ["Next.js 16", "FastAPI", "PostgreSQL / FAISS", "Ollama / OpenAI / Groq", "Celery / Redis", "WebSockets", "Docker"],
        desc: "A production-grade full-stack platform for creating, managing, and interacting with custom AI agents.",
        href: "https://github.com/Rishi-Vedula2099/OwnAI",
    },
];
