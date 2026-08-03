import { KAI_KNOWLEDGE_BASE, KnowledgeDoc } from "@/data/kai-knowledge/knowledgeBase";
import { contextManager } from "./contextManager";

export interface KnowledgeResult {
  doc: KnowledgeDoc;
  responseMessage: string;
  voiceMessage: string;
  navTarget?: string;
  suggestedFollowups: string[];
}

export function searchKnowledge(query: string): KnowledgeResult {
  const cleanQuery = query.toLowerCase().trim();
  const currentCtx = contextManager.getState();

  // Contextual check for "tell me more" or "more details"
  if (
    cleanQuery.includes("tell me more") ||
    cleanQuery.includes("more details") ||
    cleanQuery.includes("explain this") ||
    cleanQuery.includes("what is this")
  ) {
    if (currentCtx.activeProject) {
      const pName = currentCtx.activeProject.toLowerCase();
      if (pName.includes("agriguard")) {
        const doc = KAI_KNOWLEDGE_BASE.projects;
        return {
          doc,
          responseMessage: "AgriGuard is a full-stack AI ecosystem for agriculture using Next.js, FastAPI, PostgreSQL, and Google Gemini 1.5. It provides real-time crop disease diagnosis and advisory services.",
          voiceMessage: "AgriGuard is an agricultural AI platform built with Next.js, FastAPI, and Google Gemini 1.5, offering real-time plant disease detection and student advisory tools.",
          navTarget: "works",
          suggestedFollowups: ["What about LectureLens?", "Show AI Skills", "Guided Tour"],
        };
      } else if (pName.includes("lecturelens")) {
        const doc = KAI_KNOWLEDGE_BASE.projects;
        return {
          doc,
          responseMessage: "LectureLens converts video content into interactive structured knowledge using Next.js 14, OpenAI GPT-4o, Whisper transcription, and ChromaDB vector RAG search.",
          voiceMessage: "LectureLens transforms video lectures into structured notes and quizzes using OpenAI GPT-4o, Whisper transcription, and ChromaDB vector retrieval.",
          navTarget: "works",
          suggestedFollowups: ["Explain OwnAI", "Show Azure", "Contact Rishi"],
        };
      } else if (pName.includes("helios")) {
        const doc = KAI_KNOWLEDGE_BASE.projects;
        return {
          doc,
          responseMessage: "Helios is a distributed Vehicle IoT AI ecosystem built with Next.js 16, Kafka, PyTorch, YOLO, and Docker for real-time fleet analytics and OTA updates.",
          voiceMessage: "Helios handles vehicle IoT analytics and OTA software updates using Next.js 16, PyTorch, YOLO object detection, and Kafka message streams.",
          navTarget: "works",
          suggestedFollowups: ["Tell me about OwnAI", "Show Skills", "Download Resume"],
        };
      } else if (pName.includes("ownai")) {
        const doc = KAI_KNOWLEDGE_BASE.projects;
        return {
          doc,
          responseMessage: "OwnAI is a production-grade full-stack platform for deploying and interacting with custom AI agents using Next.js 16, FastAPI, FAISS, Celery, and WebSockets.",
          voiceMessage: "OwnAI lets you build and deploy custom AI agents with Next.js 16, FastAPI, FAISS vector indexing, and real-time WebSockets.",
          navTarget: "works",
          suggestedFollowups: ["Show AI Architecture", "View Skills", "Guided Tour"],
        };
      }
    }

    // Default contextual fallback based on current section
    const activeSection = currentCtx.currentSection;
    if (activeSection === "works") {
      const doc = KAI_KNOWLEDGE_BASE.projects;
      return {
        doc,
        responseMessage: doc.content,
        voiceMessage: doc.voiceSummary,
        navTarget: "works",
        suggestedFollowups: doc.suggestedFollowups || [],
      };
    } else if (activeSection === "skills") {
      const doc = KAI_KNOWLEDGE_BASE.skills;
      return {
        doc,
        responseMessage: doc.content,
        voiceMessage: doc.voiceSummary,
        navTarget: "skills",
        suggestedFollowups: doc.suggestedFollowups || [],
      };
    } else if (activeSection === "about") {
      const doc = KAI_KNOWLEDGE_BASE.about;
      return {
        doc,
        responseMessage: doc.content,
        voiceMessage: doc.voiceSummary,
        navTarget: "about",
        suggestedFollowups: doc.suggestedFollowups || [],
      };
    }
  }

  // Keyword scoring matching algorithm
  let bestDoc: KnowledgeDoc = KAI_KNOWLEDGE_BASE.about;
  let highestScore = -1;

  Object.values(KAI_KNOWLEDGE_BASE).forEach((doc) => {
    let score = 0;
    doc.tags.forEach((tag) => {
      if (cleanQuery.includes(tag)) {
        score += 3;
      }
    });

    const titleWords = doc.title.toLowerCase().split(" ");
    titleWords.forEach((word) => {
      if (word.length > 3 && cleanQuery.includes(word)) {
        score += 1.5;
      }
    });

    if (score > highestScore) {
      highestScore = score;
      bestDoc = doc;
    }
  });

  if (highestScore > 0) {
    return {
      doc: bestDoc,
      responseMessage: bestDoc.summary,
      voiceMessage: bestDoc.voiceSummary,
      navTarget: bestDoc.navTarget,
      suggestedFollowups: bestDoc.suggestedFollowups || ["Take a Guided Tour", "Show Projects", "Contact Rishi"],
    };
  }

  // Fallback response if query doesn't match directly
  return {
    doc: KAI_KNOWLEDGE_BASE.about,
    responseMessage: `I understand you're asking about "${query}". Rishi specializes in AI Software Engineering, Next.js 16, Python FastAPI, and Azure Cloud Architecture. Feel free to ask about his projects, skills, or take a guided tour!`,
    voiceMessage: `Rishi specializes in AI software engineering, Next.js, and Azure cloud solutions. Let me know if you would like to explore his projects or take a guided tour.`,
    navTarget: "hero",
    suggestedFollowups: ["Take a Guided Tour", "Show AI Projects", "Show Skills", "Contact Rishi"],
  };
}
