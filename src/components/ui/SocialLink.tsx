"use client";

import { useState } from "react";
import type { Social } from "@/types";

export default function SocialLink({ social, dark }: { social: Social; dark: boolean }) {
    const [hov, setHov] = useState(false);

    return (
        <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            onFocus={() => setHov(true)}
            onBlur={() => setHov(false)}
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: "16px 24px",
                cursor: "none",
                textDecoration: "none",
                background: "transparent",
                border: "none",
                outline: "none",
                opacity: hov ? 1 : 0.7,
                transform: hov ? "translateY(-2px) scale(1.05)" : "translateY(0) scale(1)",
                transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
        >
            {/* Soft Focus/Glow Ring */}
            <div style={{
                position: "absolute",
                inset: -6,
                borderRadius: 8,
                background: hov ? (dark ? "rgba(201,168,76,0.06)" : "rgba(192,57,43,0.04)") : "transparent",
                boxShadow: hov ? (dark ? "0 0 15px rgba(201,168,76,0.15)" : "0 0 15px rgba(192,57,43,0.15)") : "none",
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                zIndex: 0,
            }} />

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    fontSize: 22,
                    color: hov ? (dark ? "#c9a84c" : "#c0392b") : (dark ? "rgba(240,232,218,0.82)" : "rgba(180,35,10,0.9)"),
                    transition: "color 0.25s",
                    textShadow: hov ? (dark ? "0 0 12px rgba(201,168,76,0.4)" : "0 0 12px rgba(192,57,43,0.3)") : "none",
                }}
            >
                {social.icon}
            </div>

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    fontFamily: "'DM Mono'",
                    fontSize: 10,
                    letterSpacing: 2.5,
                    color: hov ? (dark ? "#e8e0d0" : "#1a1208") : (dark ? "rgba(220,210,195,0.65)" : "rgba(155,30,8,0.75)"),
                    transition: "color 0.25s",
                }}
            >
                {social.label.toUpperCase()}
            </div>

            {/* Tooltip */}
            <div
                style={{
                    position: "absolute",
                    bottom: -32,
                    background: dark ? "rgba(201,168,76,0.1)" : "rgba(192,57,43,0.08)",
                    border: `1px solid ${dark ? "rgba(201,168,76,0.2)" : "rgba(192,57,43,0.2)"}`,
                    color: dark ? "#c9a84c" : "#c0392b",
                    padding: "6px 10px",
                    borderRadius: 4,
                    fontFamily: "'DM Mono'",
                    fontSize: 10,
                    letterSpacing: 1,
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    opacity: hov ? 1 : 0,
                    transform: hov ? "none" : "translateY(5px)",
                    transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
                    zIndex: 10,
                    backdropFilter: "blur(4px)",
                    boxShadow: dark ? "0 4px 12px rgba(0,0,0,0.4)" : "0 4px 12px rgba(192,57,43,0.1)",
                }}
            >
                {social.tooltip}
            </div>
        </a>
    );
}
