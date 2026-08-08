import { contextManager } from "./contextManager";
import { voiceEngine } from "./voiceEngine";

class KaiTriggerSystem {
  private triggeredEvents: Set<string> = new Set();
  private lastTriggerTimestamp: number = Date.now();
  private cooldownMs: number = 20000; // 20s cooldown between proactive auto-speeches
  private initialized: boolean = false;
  private idleIntervalId: NodeJS.Timeout | null = null;

  public init() {
    if (typeof window === "undefined" || this.initialized) return;
    this.initialized = true;

    // Observe scroll position and active sections
    window.addEventListener("scroll", () => this.evaluateScrollTriggers(), { passive: true });
    
    // Periodically check idle triggers safely
    this.idleIntervalId = setInterval(() => {
      try {
        this.evaluateIdleTriggers();
      } catch (e) {
        console.warn("Idle evaluation error:", e);
      }
    }, 3000);
  }

  public triggerProjectHover(projectName: string, projectDesc: string) {
    const key = `project_hover_${projectName}`;
    contextManager.setActiveProject(projectName);

    if (this.triggeredEvents.has(key)) return;
    if (Date.now() - this.lastTriggerTimestamp < 12000) return;

    this.triggeredEvents.add(key);
    this.lastTriggerTimestamp = Date.now();

    const text = `Viewing ${projectName}: ${projectDesc}`;
    const voiceText = `This is ${projectName}. ${projectDesc.substring(0, 120)}`;

    contextManager.setMascotState("wave");
    contextManager.addMessage("kai", text, "works", [
      "Tell me more about " + projectName,
      "Show AI Skills",
      "Next Project",
    ]);
    voiceEngine.speak(voiceText);
  }

  public triggerResumeHover() {
    const key = "resume_hover";
    if (this.triggeredEvents.has(key)) return;
    if (Date.now() - this.lastTriggerTimestamp < 12000) return;

    this.triggeredEvents.add(key);
    this.lastTriggerTimestamp = Date.now();

    const text = "Before downloading Rishi's resume, would you like a brief summary of his engineering experience or technical stack?";
    contextManager.addMessage("kai", text, "about", [
      "Summarize Experience",
      "Show AI Stack",
      "Contact Rishi",
    ]);
    voiceEngine.speak(text);
  }

  private evaluateScrollTriggers() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPct = docHeight > 0 ? Math.min(100, Math.round((scrollY / docHeight) * 100)) : 0;
    
    contextManager.setScrollPercent(scrollPct);

    // Identify current section by element bounding boxes
    const sections = ["hero", "works", "skills", "insights", "approach", "about", "contact"];
    for (const secId of sections) {
      const el = document.getElementById(secId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
          contextManager.setSection(secId);
          this.handleSectionEnter(secId);
          break;
        }
      }
    }
  }

  private handleSectionEnter(sectionId: string) {
    const key = `sec_enter_${sectionId}`;
    if (this.triggeredEvents.has(key)) return;
    if (Date.now() - this.lastTriggerTimestamp < this.cooldownMs) return;

    if (sectionId === "skills") {
      this.triggeredEvents.add(key);
      this.lastTriggerTimestamp = Date.now();
      const text = "You're viewing Rishi's technical stack. Would you like an explanation of his AI architecture or Azure Cloud integrations?";
      contextManager.addMessage("kai", text, "skills", [
        "Explain AI Architecture",
        "Show Azure Skills",
        "View Certifications",
      ]);
      voiceEngine.speak(text);
    } else if (sectionId === "contact") {
      this.triggeredEvents.add(key);
      this.lastTriggerTimestamp = Date.now();
      const text = "If you'd like to collaborate or discuss engineering opportunities, this section contains all of Rishi's professional contact channels.";
      contextManager.addMessage("kai", text, "contact", [
        "Open GitHub",
        "Open LinkedIn",
        "Take Guided Tour",
      ]);
      voiceEngine.speak(text);
    }
  }

  private evaluateIdleTriggers() {
    const state = contextManager.getState();
    const key = "idle_15s_works";

    if (state.idleTimeSeconds >= 15 && state.idleTimeSeconds < 20) {
      if (!this.triggeredEvents.has(key) && Date.now() - this.lastTriggerTimestamp > 25000) {
        this.triggeredEvents.add(key);
        this.lastTriggerTimestamp = Date.now();
        const text = "Looking for featured projects? The Works section contains production-grade AI systems including AgriGuard, LectureLens, Helios, and OwnAI.";
        contextManager.setMascotState("wave");
        contextManager.addMessage("kai", text, "works", [
          "Take me to Projects",
          "Start Guided Tour",
          "Show Skills",
        ]);
        voiceEngine.speak(text);
      }
    }
  }
}

export const triggerSystem = new KaiTriggerSystem();
