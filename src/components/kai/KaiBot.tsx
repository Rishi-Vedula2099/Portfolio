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
        bottom: 16,
        left: 16,
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
            width: 310,
            maxHeight: 430,
            marginBottom: 12,
            background: dark ? "rgba(14, 14, 18, 0.94)" : "rgba(250, 246, 238, 0.95)",
            backdropFilter: "blur(20px)",
            border: dark ? "1px solid rgba(201, 168, 76, 0.25)" : "1px solid rgba(192, 57, 43, 0.2)",
            borderRadius: 14,
            boxShadow: dark
              ? "0 16px 40px rgba(0,0,0,0.7), 0 0 20px rgba(0, 240, 255, 0.12)"
              : "0 16px 40px rgba(0,0,0,0.15), 0 0 20px rgba(192, 57, 43, 0.08)",
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
              padding: "10px 14px",
              borderBottom: dark ? "1px solid rgba(201, 168, 76, 0.12)" : "1px solid rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: dark ? "rgba(20, 20, 26, 0.6)" : "rgba(240, 235, 224, 0.6)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background:
                    ctxState.mascotState === "listening"
                      ? "#00FF88"
                      : ctxState.mascotState === "thinking"
                      ? "#FF9900"
                      : ctxState.mascotState === "talking"
                      ? "#00F0FF"
                      : "#C9A84C",
                  boxShadow: "0 0 6px currentColor",
                }}
              />
              <span
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: dark ? "#e8e0d0" : "#1a1208",
                }}
              >
                KAI ENGINE
              </span>
              <span
                style={{
                  fontSize: 8,
                  letterSpacing: "0.12em",
                  padding: "1px 5px",
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

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
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
                  fontSize: 12,
                  padding: 2,
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
                  fontSize: 14,
                  padding: 2,
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Transcript History */}
          <div
            style={{
              padding: "12px 14px",
              flex: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              maxHeight: 250,
            }}
          >
            {ctxState.messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "90%",
                }}
              >
                <div
                  style={{
                    padding: "8px 11px",
                    borderRadius: msg.sender === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
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
                    fontSize: 11,
                    lineHeight: 1.45,
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
                      gap: 5,
                      marginTop: 6,
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
                          borderRadius: 16,
                          padding: "3px 8px",
                          fontSize: 9,
                          letterSpacing: "0.04em",
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
              padding: "10px 12px",
              borderTop: dark ? "1px solid rgba(201, 168, 76, 0.12)" : "1px solid rgba(0,0,0,0.08)",
              background: dark ? "rgba(10, 10, 14, 0.8)" : "rgba(240, 235, 224, 0.8)",
              display: "flex",
              alignItems: "center",
              gap: 6,
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
                borderRadius: 6,
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
                fontSize: 12,
              }}
            >
              🎤
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask KAI or 'Guided Tour'..."
              style={{
                flex: 1,
                background: dark ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.8)",
                border: dark ? "1px solid rgba(201, 168, 76, 0.2)" : "1px solid rgba(0, 0, 0, 0.15)",
                borderRadius: 6,
                padding: "6px 10px",
                color: dark ? "#e8e0d0" : "#1a1208",
                fontSize: 11,
                outline: "none",
              }}
            />

            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #c0392b, #962d22)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "6px 11px",
                fontSize: 11,
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
          style={{
            marginBottom: 8,
            maxWidth: 215,
            padding: "7px 10px",
            background: dark ? "rgba(14, 14, 18, 0.94)" : "rgba(250, 246, 238, 0.96)",
            backdropFilter: "blur(12px)",
            border: "1px solid #00F0FF",
            borderRadius: 10,
            boxShadow: "0 6px 20px rgba(0, 240, 255, 0.18)",
            color: dark ? "#e8e0d0" : "#1a1208",
            fontSize: 10.5,
            lineHeight: 1.35,
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
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
            <span style={{ fontWeight: 700, fontSize: 9, color: "#00F0FF", letterSpacing: "0.08em" }}>
              KAI ASSISTANT
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowSpeechBubble(false);
              }}
              title="Dismiss"
              style={{
                background: "none",
                border: "none",
                color: dark ? "rgba(232, 224, 208, 0.5)" : "rgba(0,0,0,0.4)",
                cursor: "pointer",
                fontSize: 10,
                padding: "0 2px",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          <div onClick={() => contextManager.toggleChat()}>
            {latestKaiMessage.text.length > 65
              ? `${latestKaiMessage.text.substring(0, 65)}...`
              : latestKaiMessage.text}
          </div>
            
          <div
            style={{
              position: "absolute",
              bottom: -5,
              left: 24,
              width: 8,
              height: 8,
              background: dark ? "rgba(14, 14, 18, 0.94)" : "rgba(250, 246, 238, 0.96)",
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
          width={125}
          height={140}
        />

        {/* Mascot State Label Badge */}
        <div
          style={{
            position: "absolute",
            bottom: 2,
            background: "rgba(10, 10, 14, 0.85)",
            border: "1px solid rgba(201, 168, 76, 0.3)",
            color: dark ? "#e8e0d0" : "#fff",
            fontSize: 8,
            padding: "1px 6px",
            borderRadius: 8,
            letterSpacing: "0.08em",
            pointerEvents: "none",
          }}
        >
          KAI · {ctxState.mascotState.toUpperCase()}
        </div>
      </div>
    </aside>
  );
}
