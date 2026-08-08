import { contextManager } from "./contextManager";

export type AudioAmplitudeCallback = (amplitude: number) => void;

class VoiceEngine {
  private synth: SpeechSynthesis | null = null;
  private recognition: any = null;
  private isSpeaking: boolean = false;
  private isListening: boolean = false;
  private amplitudeListeners: Set<AudioAmplitudeCallback> = new Set();
  private animFrameId: number | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      this.initSynth();
      this.initRecognition();
    }
  }

  private initSynth() {
    if ("speechSynthesis" in window) {
      this.synth = window.speechSynthesis;
    }
  }

  private initRecognition() {
    if (typeof window === "undefined") return;
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = "en-US";

      this.recognition.onstart = () => {
        this.isListening = true;
        contextManager.updateState({ isVoiceActive: true });
        contextManager.setMascotState("listening");
      };

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.stopListening();
        if (transcript && (window as any).__kaiExecuteCommand) {
          (window as any).__kaiExecuteCommand(transcript);
        }
      };

      this.recognition.onerror = (err: any) => {
        console.warn("KAI Speech Recognition error:", err);
        this.stopListening();
      };

      this.recognition.onend = () => {
        this.isListening = false;
        contextManager.updateState({ isVoiceActive: false });
        if (contextManager.getState().mascotState === "listening") {
          contextManager.setMascotState("idle");
        }
      };
    }
  }

  public subscribeAmplitude(cb: AudioAmplitudeCallback): () => void {
    this.amplitudeListeners.add(cb);
    return () => this.amplitudeListeners.delete(cb);
  }

  private notifyAmplitude(amp: number) {
    this.amplitudeListeners.forEach((cb) => cb(amp));
  }

  public speak(text: string, onEnd?: () => void) {
    if (typeof window === "undefined" || !this.synth) {
      if (onEnd) onEnd();
      return;
    }

    const state = contextManager.getState();
    if (state.isMuted) {
      if (onEnd) onEnd();
      return;
    }

    // Proactive auto-speech must be blocked if user hasn't interacted with page
    if (!state.hasUserInteracted) {
      if (onEnd) onEnd();
      return;
    }

    try {
      this.synth.cancel();
      this.stopListening();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95; // Calm, professional cadence
      utterance.pitch = 1.0;

      // Pick best English voice if available
      let voices: SpeechSynthesisVoice[] = [];
      try {
        voices = this.synth.getVoices() || [];
      } catch (e) {
        // Safe fallback
      }

      if (voices.length > 0) {
        const preferredVoice = voices.find(
          (v) =>
            v.lang &&
            v.lang.startsWith("en") &&
            (v.name.includes("Google") ||
              v.name.includes("Natural") ||
              v.name.includes("Microsoft") ||
              v.name.includes("Samantha") ||
              v.name.includes("Daniel"))
        );
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
        contextManager.setMascotState("talking");
        this.startAmplitudeSimulation();
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        this.stopAmplitudeSimulation();
        contextManager.setMascotState("idle");
        if (onEnd) onEnd();
      };

      utterance.onerror = (err) => {
        console.warn("SpeechSynthesis error:", err);
        this.isSpeaking = false;
        this.stopAmplitudeSimulation();
        contextManager.setMascotState("idle");
        if (onEnd) onEnd();
      };

      this.synth.speak(utterance);
    } catch (err) {
      console.warn("Voice Engine speak exception:", err);
      this.isSpeaking = false;
      this.stopAmplitudeSimulation();
      contextManager.setMascotState("idle");
      if (onEnd) onEnd();
    }
  }

  public stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.stopAmplitudeSimulation();
  }

  public startListening() {
    if (this.isSpeaking) {
      this.stopSpeaking();
    }

    if (this.recognition) {
      try {
        this.recognition.start();
      } catch (e) {
        console.warn("Recognition already active", e);
      }
    } else {
      contextManager.addMessage(
        "kai",
        "Speech recognition is not supported in this browser. Please type your message in the chat input!"
      );
    }
  }

  public stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }
    this.isListening = false;
    contextManager.updateState({ isVoiceActive: false });
  }

  public toggleListening() {
    if (this.isListening) {
      this.stopListening();
    } else {
      this.startListening();
    }
  }

  private startAmplitudeSimulation() {
    const animate = () => {
      if (!this.isSpeaking) return;
      const fakeAmp = Math.random() * 0.7 + 0.3;
      this.notifyAmplitude(fakeAmp);
      this.animFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  private stopAmplitudeSimulation() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    this.notifyAmplitude(0);
  }
}

export const voiceEngine = new VoiceEngine();
