import { contextManager } from "./contextManager";

export const GUIDED_TOUR_STEPS = [
  {
    sectionId: "hero",
    title: "1. Welcome & Introduction",
    speech: "Welcome to Rishi Vedula's Engineering Portfolio. Rishi is an AI Software Engineer & Full-Stack Architect crafting production AI ecosystems.",
    text: "Welcome to Rishi's Portfolio. He builds production AI systems, distributed platforms, and high-performance Web apps.",
  },
  {
    sectionId: "works",
    title: "2. Featured Works & Production AI",
    speech: "Here in the Works section, you can explore Rishi's flagship projects: AgriGuard AI, LectureLens Video RAG, Helios Vehicle IoT, and OwnAI Agent Platform.",
    text: "Featured Works: Production AI systems across AgriTech, Video RAG search, Vehicle IoT, and Agentic AI platforms.",
  },
  {
    sectionId: "skills",
    title: "3. Technical Stack & Azure Cloud",
    speech: "This is Rishi's technical stack: Next.js 16, React 19, TypeScript, Python, FastAPI, PyTorch, OpenAI, and Microsoft Azure Cloud AI Services.",
    text: "Technical Stack: Modern frontend, high-speed Python microservices, AI vector databases, and Microsoft Azure Cloud.",
  },
  {
    sectionId: "insights",
    title: "4. Architectural Insights",
    speech: "Rishi publishes deep architectural insights on low-latency web engineering, vector retrieval optimization, and canvas physics.",
    text: "Engineering Insights: Technical write-ups on AI system design, low-latency streaming, and web UI motion.",
  },
  {
    sectionId: "about",
    title: "5. Engineering Background & Resume",
    speech: "In the About section, you can review Rishi's engineering journey, philosophy, and professional highlights.",
    text: "About Rishi: Bio, engineering history, system design philosophy, and career highlights.",
  },
  {
    sectionId: "contact",
    title: "6. Collaboration & Contact",
    speech: "Finally, here are Rishi's professional contact methods. You can reach out via Email, GitHub, LinkedIn, or X.",
    text: "Contact & Connect: Reach out for AI engineering roles, high-impact consulting, or collaborative projects.",
  },
];

class KaiNavigationEngine {
  private activeTourStepIndex: number | null = null;

  public executeCommand(input: string) {
    const text = input.toLowerCase().trim();

    // 1. Guided Tour Command
    if (
      text.includes("guided tour") ||
      text.includes("take a tour") ||
      text.includes("start tour") ||
      text.includes("tour")
    ) {
      this.startGuidedTour();
      return;
    }

    // 2. Navigation Actions
    if (
      text.includes("take me to projects") ||
      text.includes("show projects") ||
      text.includes("open works") ||
      text.includes("show works") ||
      text.includes("works")
    ) {
      this.navigateToSection("works", "Certainly. Navigating to the Works section, featuring Rishi's production AI systems.");
      return;
    }

    if (
      text.includes("show certifications") ||
      text.includes("open certifications") ||
      text.includes("certifications")
    ) {
      this.navigateToSection("skills", "Here are Rishi's technical credentials and Microsoft Azure AI certifications.");
      return;
    }

    if (
      text.includes("show ai projects") ||
      text.includes("ai projects") ||
      text.includes("show ai")
    ) {
      this.navigateToSection("works", "Filtering Rishi's AI projects: AgriGuard, LectureLens, Helios, and OwnAI.");
      return;
    }

    if (
      text.includes("show azure") ||
      text.includes("azure")
    ) {
      this.navigateToSection("skills", "Displaying Rishi's Azure Cloud AI capabilities and enterprise integration skills.");
      return;
    }

    if (
      text.includes("tell me about yourself") ||
      text.includes("about") ||
      text.includes("who is rishi")
    ) {
      this.navigateToSection("about", "Navigating to About Rishi—his engineering philosophy and journey.");
      return;
    }

    if (
      text.includes("show contact") ||
      text.includes("contact") ||
      text.includes("reach out")
    ) {
      this.navigateToSection("contact", "Navigating to Contact. You can reach out directly via Email, LinkedIn, or GitHub.");
      return;
    }

    if (
      text.includes("open skills") ||
      text.includes("skills") ||
      text.includes("tech stack")
    ) {
      this.navigateToSection("skills", "Showing Rishi's technical stack across Next.js 16, React 19, Python, FastAPI, and PyTorch.");
      return;
    }

    if (
      text.includes("resume") ||
      text.includes("cv") ||
      text.includes("download resume")
    ) {
      this.handleResumeRequest();
      return;
    }

    if (
      text.includes("github") ||
      text.includes("open github")
    ) {
      window.open("https://github.com/Rishi-Vedula2099", "_blank");
      this.speakAndLog("Opening Rishi's GitHub profile in a new tab.", "hero");
      return;
    }

    if (
      text.includes("linkedin") ||
      text.includes("open linkedin")
    ) {
      window.open("https://www.linkedin.com/in/rishi-vedula-b7b527252/", "_blank");
      this.speakAndLog("Opening Rishi's LinkedIn profile in a new tab.", "hero");
      return;
    }

    if (
      text.includes("scroll top") ||
      text.includes("top") ||
      text.includes("hero")
    ) {
      this.navigateToSection("hero", "Scrolling back to the top of the portfolio.");
      return;
    }

    if (
      text.includes("scroll down") ||
      text.includes("next section")
    ) {
      this.scrollNext();
      return;
    }

    // Default: Run Semantic Search in Knowledge Engine
    const { searchKnowledge } = require("./knowledgeEngine");
    const result = searchKnowledge(input);
    
    if (result.navTarget) {
      this.highlightAndScroll(result.navTarget);
    }

    this.speakAndLog(result.responseMessage, result.navTarget, result.suggestedFollowups, result.voiceMessage);
  }

  public navigateToSection(
    sectionId: string,
    messageText: string,
    followups?: string[],
    voiceOverride?: string
  ) {
    this.highlightAndScroll(sectionId);
    this.speakAndLog(messageText, sectionId, followups, voiceOverride || messageText);
  }

  public highlightAndScroll(sectionId: string) {
    contextManager.setHighlightedSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Remove highlight after 4.5s
    setTimeout(() => {
      if (contextManager.getState().highlightedSection === sectionId) {
        contextManager.setHighlightedSection(null);
      }
    }, 4500);
  }

  private handleResumeRequest() {
    this.navigateToSection(
      "about",
      "Rishi's resume covers his full-stack AI engineering background, Next.js architecture, Python backend development, and cloud deployments. Would you like to view his GitHub or LinkedIn?",
      ["Open GitHub", "Open LinkedIn", "Contact Rishi"]
    );
  }

  public startGuidedTour() {
    this.activeTourStepIndex = 0;
    contextManager.updateState({ guidedTourStep: 0 });
    this.executeTourStep(0);
  }

  public nextGuidedTourStep() {
    if (this.activeTourStepIndex === null) return;
    const nextIdx = this.activeTourStepIndex + 1;
    if (nextIdx < GUIDED_TOUR_STEPS.length) {
      this.activeTourStepIndex = nextIdx;
      contextManager.updateState({ guidedTourStep: nextIdx });
      this.executeTourStep(nextIdx);
    } else {
      this.endGuidedTour();
    }
  }

  public endGuidedTour() {
    this.activeTourStepIndex = null;
    contextManager.updateState({ guidedTourStep: null });
    this.speakAndLog(
      "That concludes our guided tour! Feel free to ask me any questions or click on individual sections to dive deeper.",
      "hero",
      ["Show AI Projects", "Show Skills", "Contact Rishi"]
    );
  }

  private executeTourStep(stepIdx: number) {
    const step = GUIDED_TOUR_STEPS[stepIdx];
    this.highlightAndScroll(step.sectionId);

    const followups =
      stepIdx < GUIDED_TOUR_STEPS.length - 1
        ? ["Next Tour Step →", "End Tour"]
        : ["Finish Tour ✓", "Contact Rishi"];

    this.speakAndLog(
      `[Tour ${step.title}] ${step.text}`,
      step.sectionId,
      followups,
      step.speech
    );
  }

  private scrollNext() {
    const sections = ["hero", "works", "skills", "insights", "approach", "about", "contact"];
    const current = contextManager.getState().currentSection;
    const idx = sections.indexOf(current);
    const nextSec = idx >= 0 && idx < sections.length - 1 ? sections[idx + 1] : sections[0];
    this.navigateToSection(nextSec, `Scrolling to ${nextSec} section.`);
  }

  private speakAndLog(
    text: string,
    navTarget?: string,
    suggestedFollowups?: string[],
    voiceText?: string
  ) {
    contextManager.addMessage("kai", text, navTarget, suggestedFollowups);
    const { voiceEngine } = require("./voiceEngine");
    voiceEngine.speak(voiceText || text);
  }
}

export const navigationEngine = new KaiNavigationEngine();

if (typeof window !== "undefined") {
  (window as any).__kaiExecuteCommand = (cmd: string) => {
    contextManager.addMessage("user", cmd);
    navigationEngine.executeCommand(cmd);
  };
}
