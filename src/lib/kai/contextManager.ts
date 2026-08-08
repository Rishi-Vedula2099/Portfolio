export type KaiMascotState =
  | "idle"
  | "sleeping"
  | "hover"
  | "wave"
  | "listening"
  | "thinking"
  | "talking"
  | "celebrating";

export interface KaiMessage {
  id: string;
  sender: "kai" | "user";
  text: string;
  timestamp: number;
  navTarget?: string;
  suggestedFollowups?: string[];
}

export interface KaiContextState {
  currentSection: string;
  scrollPercent: number;
  idleTimeSeconds: number;
  activeProject: string | null;
  mascotState: KaiMascotState;
  isMuted: boolean;
  isVoiceActive: boolean;
  isChatOpen: boolean;
  messages: KaiMessage[];
  guidedTourStep: number | null;
  highlightedSection: string | null;
  hasUserInteracted: boolean;
}

type Listener = (state: KaiContextState) => void;

class KaiContextManager {
  private state: KaiContextState = {
    currentSection: "hero",
    scrollPercent: 0,
    idleTimeSeconds: 0,
    activeProject: null,
    mascotState: "idle",
    isMuted: false,
    isVoiceActive: false,
    isChatOpen: false,
    messages: [
      {
        id: "init_1",
        sender: "kai",
        text: "Welcome. I'm KAI. I'll guide you through Rishi's engineering journey. You can ask me anything—or simply explore, and I'll explain what you're seeing.",
        timestamp: Date.now(),
        suggestedFollowups: ["Take a Guided Tour", "Show AI Projects", "View Technical Stack", "Download Resume"],
      },
    ],
    guidedTourStep: null,
    highlightedSection: null,
    hasUserInteracted: false,
  };

  private listeners: Set<Listener> = new Set();
  private idleInterval: NodeJS.Timeout | null = null;
  private lastActivityTimestamp: number = Date.now();
  private isTrackingInitialized: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      this.initActivityTracking();
    }
  }

  public getState(): KaiContextState {
    return this.state;
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener(this.state);
      } catch (e) {
        console.warn("Context listener error:", e);
      }
    });
  }

  public updateState(partialState: Partial<KaiContextState>) {
    this.state = { ...this.state, ...partialState };
    this.notify();
  }

  public setMascotState(mascotState: KaiMascotState) {
    if (this.state.mascotState !== mascotState) {
      this.updateState({ mascotState });
    }
  }

  public setSection(section: string) {
    if (this.state.currentSection !== section) {
      this.updateState({ currentSection: section });
    }
  }

  public setScrollPercent(scrollPercent: number) {
    this.updateState({ scrollPercent });
  }

  public setActiveProject(projectName: string | null) {
    if (this.state.activeProject !== projectName) {
      this.updateState({ activeProject: projectName });
    }
  }

  public setHighlightedSection(sectionId: string | null) {
    this.updateState({ highlightedSection: sectionId });
  }

  public toggleMute() {
    this.updateState({ isMuted: !this.state.isMuted });
  }

  public toggleChat() {
    this.updateState({ isChatOpen: !this.state.isChatOpen });
  }

  public addMessage(
    sender: "kai" | "user",
    text: string,
    navTarget?: string,
    suggestedFollowups?: string[]
  ) {
    const msg: KaiMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 5)}`,
      sender,
      text,
      timestamp: Date.now(),
      navTarget,
      suggestedFollowups,
    };
    this.updateState({
      messages: [...this.state.messages, msg],
    });
    return msg;
  }

  public resetIdleTimer() {
    this.lastActivityTimestamp = Date.now();
    const updates: Partial<KaiContextState> = {};
    if (!this.state.hasUserInteracted) {
      updates.hasUserInteracted = true;
    }
    if (this.state.idleTimeSeconds !== 0) {
      updates.idleTimeSeconds = 0;
    }
    if (this.state.mascotState === "sleeping") {
      updates.mascotState = "idle";
    }
    if (Object.keys(updates).length > 0) {
      this.updateState(updates);
    }
  }

  private initActivityTracking() {
    if (this.isTrackingInitialized) return;
    this.isTrackingInitialized = true;

    const onUserActivity = () => this.resetIdleTimer();
    window.addEventListener("mousemove", onUserActivity, { passive: true });
    window.addEventListener("keydown", onUserActivity, { passive: true });
    window.addEventListener("scroll", onUserActivity, { passive: true });
    window.addEventListener("touchstart", onUserActivity, { passive: true });
    window.addEventListener("click", onUserActivity, { passive: true });

    this.idleInterval = setInterval(() => {
      try {
        const idleSecs = Math.floor((Date.now() - this.lastActivityTimestamp) / 1000);
        if (idleSecs !== this.state.idleTimeSeconds) {
          const updates: Partial<KaiContextState> = { idleTimeSeconds: idleSecs };
          if (idleSecs > 45 && this.state.mascotState === "idle") {
            updates.mascotState = "sleeping";
          }
          this.updateState(updates);
        }
      } catch (e) {
        console.warn("Idle tracking interval error:", e);
      }
    }, 1000);
  }
}

export const contextManager = new KaiContextManager();

