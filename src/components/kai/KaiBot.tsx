"use client";

import { useEffect, useState, useRef } from "react";
import KaiMascotCanvas from "./KaiMascotCanvas";
import { contextManager, KaiContextState, KaiMessage } from "@/lib/kai/contextManager";
import { voiceEngine } from "@/lib/kai/voiceEngine";
import { navigationEngine } from "@/lib/kai/navigationEngine";
import { triggerSystem } from "@/lib/kai/triggerSystem";

export default function KaiBot({ dark }: { dark: boolean }) {
  const [ctxState, setCtxState] = useState<KaiContextState>(contextManager.getState());
  const [audioAmp, setAudioAmp] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");
  const [showSpeechBubble, setShowSpeechBubble] = useState<boolean>(true);
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Init trigger system proactive observers
    triggerSystem.init();

    // Subscribe to context manager
    const unsubscribeContext = contextManager.subscribe((newState) => {
      setCtxState(newState);
    });

    // Subscribe to voice amplitude for mascot equalizer bars
    const unsubscribeAmp = voiceEngine.subscribeAmplitude((amp) => {
      setAudioAmp(amp);
    });

    return () => {
      unsubscribeContext();
      unsubscribeAmp();
    };
  }, []);

  useEffect(() => {
    if (chatBottomRef.current && ctxState.isChatOpen) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ctxState.messages, ctxState.isChatOpen]);

  const latestKaiMessage: KaiMessage | undefined = [...ctxState.messages]
    .reverse()
    .find((m) => m.sender === "kai");

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const query = inputText.trim();
    setInputText("");

    contextManager.addMessage("user", query);
    navigationEngine.executeCommand(query);
  };

  const handlePillClick = (promptText: string) => {
    contextManager.addMessage("user", promptText);
    navigationEngine.executeCommand(promptText);
  };

  const handleMascotClick = () => {
    contextManager.setMascotState("wave");
    contextManager.toggleChat();
    setTimeout(() => {
      if (contextManager.getState().mascotState === "wave") {
        contextManager.setMascotState("idle");
      }
    }, 1800);
  };

  return (
    <aside
      aria-label="KAI Digital Companion"
      style={{
        position: "fixed",
        bottom: 24,
        left: 24,
        zIndex: 900,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {/* ── 1. EXPANDABLE CHAT PANEL ── */}
      {ctxState.isChatOpen && (
        <div
          style={{
            width: 360,
            maxHeight: 520,
            marginBottom: 16,
            background: dark ? "rgba(14, 14, 18, 0.94)" : "rgba(250, 246, 238, 0.95)",
            backdropFilter: "blur(20px)",
            border: dark ? "1px solid rgba(201, 168, 76, 0.25)" : "1px solid rgba(192, 57, 43, 0.2)",
            borderRadius: 16,
            boxShadow: dark
              ? "0 20px 50px rgba(0,0,0,0.7), 0 0 20px rgba(0, 240, 255, 0.12)"
              : "0 20px 50px rgba(0,0,0,0.15), 0 0 20px rgba(192, 57, 43, 0.08)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "kaiPanelSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          <style>{`
            @keyframes kaiPanelSlideUp {
              from { opacity: 0; transform: translateY(20px) scale(0.96); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>

          {/* Panel Header */}
          <div
            style={{
              padding: "14px 18px",
              borderBottom: dark ? "1px solid rgba(201, 168, 76, 0.12)" : "1px solid rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: dark ? "rgba(20, 20, 26, 0.6)" : "rgba(240, 235, 224, 0.6)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background:
                    ctxState.mascotState === "listening"
                      ? "#00FF88"
                      : ctxState.mascotState === "thinking"
                      ? "#FF9900"
                      : ctxState.mascotState === "talking"
                      ? "#00F0FF"
                      : "#C9A84C",
                  boxShadow: "0 0 8px currentColor",
                }}
              />
              <span
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: dark ? "#e8e0d0" : "#1a1208",
                }}
              >
                KAI ENGINE
              </span>
              <span
                style={{
                  fontSize: 9,
                  letterSpacing: "0.15em",
                  padding: "2px 6px",
                  borderRadius: 4,
                  background: "rgba(0, 240, 255, 0.1)",
                  color: "#00F0FF",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                  textTransform: "uppercase",
                }}
              >
                {ctxState.mascotState}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* Mute Button */}
              <button
                type="button"
                onClick={() => contextManager.toggleMute()}
                title={ctxState.isMuted ? "Unmute Voice" : "Mute Voice"}
                style={{
                  background: "none",
                  border: "none",
                  color: ctxState.isMuted ? "#E63946" : dark ? "rgba(232, 224, 208, 0.7)" : "#1a1208",
                  cursor: "pointer",
                  fontSize: 14,
                  padding: 4,
                }}
              >
                {ctxState.isMuted ? "🔇" : "🔊"}
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => contextManager.toggleChat()}
                style={{
                  background: "none",
                  border: "none",
                  color: dark ? "rgba(232, 224, 208, 0.6)" : "#1a1208",
                  cursor: "pointer",
                  fontSize: 16,
                  padding: 4,
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Transcript History */}
          <div
            style={{
              padding: "16px 18px",
              flex: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxHeight: 320,
            }}
          >
            {ctxState.messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                }}
              >
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: msg.sender === "user" ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
                    background:
                      msg.sender === "user"
                        ? dark
                          ? "rgba(192, 57, 43, 0.25)"
                          : "rgba(192, 57, 43, 0.15)"
                        : dark
                        ? "rgba(255, 255, 255, 0.06)"
                        : "rgba(0, 0, 0, 0.05)",
                    border:
                      msg.sender === "user"
                        ? "1px solid rgba(192, 57, 43, 0.4)"
                        : dark
                        ? "1px solid rgba(201, 168, 76, 0.15)"
                        : "1px solid rgba(0, 0, 0, 0.1)",
                    color: dark ? "#e8e0d0" : "#1a1208",
                    fontSize: 12,
                    lineHeight: 1.5,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {msg.text}
                </div>

                {/* Suggested Followups */}
                {msg.sender === "kai" && msg.suggestedFollowups && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginTop: 8,
                    }}
                  >
                    {msg.suggestedFollowups.map((pill) => (
                      <button
                        key={pill}
                        type="button"
                        onClick={() => handlePillClick(pill)}
                        style={{
                          background: dark ? "rgba(0, 240, 255, 0.08)" : "rgba(0, 240, 255, 0.12)",
                          border: "1px solid rgba(0, 240, 255, 0.3)",
                          color: "#00F0FF",
                          borderRadius: 20,
                          padding: "4px 10px",
                          fontSize: 10,
                          letterSpacing: "0.05em",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        {pill}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={chatBottomRef} />
          </div>

          {/* Chat Controls & Input */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "12px 16px",
              borderTop: dark ? "1px solid rgba(201, 168, 76, 0.12)" : "1px solid rgba(0,0,0,0.08)",
              background: dark ? "rgba(10, 10, 14, 0.8)" : "rgba(240, 235, 224, 0.8)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {/* Mic Toggle Button */}
            <button
              type="button"
              onClick={() => voiceEngine.toggleListening()}
              title="Voice Input (SpeechRecognition)"
              style={{
                background: ctxState.isVoiceActive ? "#00FF88" : dark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
                border: ctxState.isVoiceActive ? "1px solid #00FF88" : "1px solid transparent",
                color: ctxState.isVoiceActive ? "#0a0a0f" : dark ? "#e8e0d0" : "#1a1208",
                borderRadius: 8,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              🎤
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask KAI or type 'Guided Tour'..."
              style={{
                flex: 1,
                background: dark ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.8)",
                border: dark ? "1px solid rgba(201, 168, 76, 0.2)" : "1px solid rgba(0, 0, 0, 0.15)",
                borderRadius: 8,
                padding: "8px 12px",
                color: dark ? "#e8e0d0" : "#1a1208",
                fontSize: 12,
                outline: "none",
              }}
            />

            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #c0392b, #962d22)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 14px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* ── 2. FLOATING SPEECH BUBBLE (WHEN CLOSED OR NEW MSG) ── */}
      {!ctxState.isChatOpen && showSpeechBubble && latestKaiMessage && (
        <div
          onClick={() => contextManager.toggleChat()}
          style={{
            marginBottom: 12,
            maxWidth: 280,
            padding: "10px 14px",
            background: dark ? "rgba(14, 14, 18, 0.92)" : "rgba(250, 246, 238, 0.94)",
            backdropFilter: "blur(12px)",
            border: "1px solid #00F0FF",
            borderRadius: 12,
            boxShadow: "0 8px 30px rgba(0, 240, 255, 0.2)",
            color: dark ? "#e8e0d0" : "#1a1208",
            fontSize: 12,
            lineHeight: 1.45,
            cursor: "pointer",
            position: "relative",
            animation: "kaiBubblePop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
          }}
        >
          <style>{`
            @keyframes kaiBubblePop {
              from { opacity: 0; transform: scale(0.8) translateY(10px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
          
          <div style={{ fontWeight: 700, fontSize: 10, color: "#00F0FF", marginBottom: 3, letterSpacing: "0.1em" }}>
            KAI ASSISTANT
          </div>
          {latestKaiMessage.text.length > 110
            ? `${latestKaiMessage.text.substring(0, 110)}...`
            : latestKaiMessage.text}
            
          <div
            style={{
              position: "absolute",
              bottom: -6,
              left: 30,
              width: 10,
              height: 10,
              background: dark ? "rgba(14, 14, 18, 0.92)" : "rgba(250, 246, 238, 0.94)",
              borderRight: "1px solid #00F0FF",
              borderBottom: "1px solid #00F0FF",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      )}

      {/* ── 3. FLOATING MASCOT BUTTON ── */}
      <div
        onClick={handleMascotClick}
        title="Click to interact with KAI Companion"
        style={{
          cursor: "pointer",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <KaiMascotCanvas
          mascotState={ctxState.mascotState}
          audioAmplitude={audioAmp}
          width={150}
          height={165}
        />

        {/* Mascot State Label Badge */}
        <div
          style={{
            position: "absolute",
            bottom: 2,
            background: "rgba(10, 10, 14, 0.85)",
            border: "1px solid rgba(201, 168, 76, 0.3)",
            color: dark ? "#e8e0d0" : "#fff",
            fontSize: 9,
            padding: "2px 8px",
            borderRadius: 10,
            letterSpacing: "0.1em",
            pointerEvents: "none",
          }}
        >
          KAI · {ctxState.mascotState.toUpperCase()}
        </div>
      </div>
    </aside>
  );
}
