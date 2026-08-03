"use client";

import { useEffect, useState } from "react";
import { contextManager } from "@/lib/kai/contextManager";

export default function KaiHighlightOverlay() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [rect, setRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  useEffect(() => {
    return contextManager.subscribe((state) => {
      setHighlightedId(state.highlightedSection);
    });
  }, []);

  useEffect(() => {
    if (!highlightedId) {
      setRect(null);
      return;
    }

    const updateBounds = () => {
      const el = document.getElementById(highlightedId);
      if (el) {
        const bounds = el.getBoundingClientRect();
        setRect({
          top: bounds.top + window.scrollY - 12,
          left: Math.max(8, bounds.left - 12),
          width: bounds.width + 24,
          height: bounds.height + 24,
        });
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    const timeout = setTimeout(updateBounds, 300);

    return () => {
      window.removeEventListener("resize", updateBounds);
      clearTimeout(timeout);
    };
  }, [highlightedId]);

  if (!highlightedId || !rect) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        pointerEvents: "none",
        zIndex: 400,
        borderRadius: 16,
        border: "2px solid #00F0FF",
        boxShadow: "0 0 35px rgba(0, 240, 255, 0.45), inset 0 0 25px rgba(0, 240, 255, 0.15)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        animation: "kaiReticlePulse 2s infinite alternate",
      }}
    >
      <style>{`
        @keyframes kaiReticlePulse {
          0% {
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.3), inset 0 0 15px rgba(0, 240, 255, 0.1);
            border-color: rgba(0, 240, 255, 0.7);
          }
          100% {
            box-shadow: 0 0 45px rgba(0, 240, 255, 0.65), inset 0 0 35px rgba(0, 240, 255, 0.25);
            border-color: rgba(201, 168, 76, 0.9);
          }
        }
      `}</style>
      
      {/* Reticle Corner Marks */}
      <div style={{ position: "absolute", top: -4, left: -4, width: 12, height: 12, borderTop: "3px solid #C9A84C", borderLeft: "3px solid #C9A84C" }} />
      <div style={{ position: "absolute", top: -4, right: -4, width: 12, height: 12, borderTop: "3px solid #C9A84C", borderRight: "3px solid #C9A84C" }} />
      <div style={{ position: "absolute", bottom: -4, left: -4, width: 12, height: 12, borderBottom: "3px solid #C9A84C", borderLeft: "3px solid #C9A84C" }} />
      <div style={{ position: "absolute", bottom: -4, right: -4, width: 12, height: 12, borderBottom: "3px solid #C9A84C", borderRight: "3px solid #C9A84C" }} />
      
      <div
        style={{
          position: "absolute",
          top: -30,
          left: 20,
          background: "rgba(10, 10, 16, 0.9)",
          border: "1px solid #00F0FF",
          color: "#00F0FF",
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.15em",
          padding: "4px 12px",
          borderRadius: 4,
          boxShadow: "0 0 10px rgba(0, 240, 255, 0.3)",
        }}
      >
        KAI TARGET: #{highlightedId.toUpperCase()}
      </div>
    </div>
  );
}
