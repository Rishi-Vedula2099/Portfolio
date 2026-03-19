"use client";

import { useState, useEffect } from "react";

export default function ScrollCloseOutro({ onDone }: { onDone: () => void }) {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 80);
        const t2 = setTimeout(() => setPhase(2), 900);
        const t3 = setTimeout(() => setPhase(3), 1800);
        return () => [t1, t2, t3].forEach(clearTimeout);
    }, []);

    useEffect(() => {
        if (phase === 3 && onDone) onDone();
    }, [phase, onDone]);

    if (phase === 3) return null;

    const rodStyle: React.CSSProperties = {
        width: 17,
        height: 148,
        flexShrink: 0,
        zIndex: 2,
        background:
            "linear-gradient(180deg,#6a4a0a,#c9a84c 35%,#e8d080 50%,#c9a84c 65%,#6a4a0a)",
        borderRadius: 8,
        boxShadow:
            "0 4px 24px rgba(201,168,76,0.3),inset 0 1px 2px rgba(255,255,255,0.2)",
    };

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 3500,
                background: "#07060c",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            {phase >= 2 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 12,
                        background: "#07060c",
                        animation:
                            "inkSeal 0.9s cubic-bezier(0.4,0,0.2,1) forwards",
                    }}
                />
            )}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 5,
                    background: "#07060c",
                    opacity: 0,
                    animation:
                        phase >= 1
                            ? "closeFadeIn 2s ease forwards"
                            : "none",
                }}
            />
            <svg
                viewBox="0 0 160 70"
                width="130"
                height="56"
                fill="none"
                style={{
                    marginBottom: 28,
                    opacity: 0.28,
                    position: "relative",
                    zIndex: 3,
                }}
            >
                <rect x="12" y="0" width="10" height="70" fill="#e8e0d0" />
                <rect x="138" y="0" width="10" height="70" fill="#e8e0d0" />
                <rect x="0" y="12" width="160" height="9" rx="2" fill="#c0392b" />
                <rect x="12" y="24" width="136" height="5" rx="2" fill="#e8e0d0" />
                <rect x="22" y="0" width="5" height="16" fill="#e8e0d0" />
                <rect x="133" y="0" width="5" height="16" fill="#e8e0d0" />
            </svg>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: 160,
                    position: "relative",
                    zIndex: 4,
                }}
            >
                <div
                    style={{
                        ...rodStyle,
                        animation:
                            phase >= 2
                                ? "rodOutL 0.65s cubic-bezier(0.55,0,1,0.45) forwards"
                                : "none",
                    }}
                />
                <div
                    style={{
                        height: 118,
                        overflow: "hidden",
                        background:
                            "linear-gradient(90deg,#cdc2ab,#ece4d4 8%,#e8e0d0 50%,#ece4d4 92%,#cdc2ab)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 50px rgba(0,0,0,0.7)",
                        position: "relative",
                        maxWidth: phase >= 1 ? "0px" : "420px",
                        transition:
                            phase >= 1
                                ? "max-width 0.75s cubic-bezier(0.55,0,1,0.45)"
                                : "none",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            inset: 7,
                            border: "1px solid rgba(26,18,8,0.09)",
                            pointerEvents: "none",
                        }}
                    />
                    <div
                        style={{
                            fontFamily:
                                "'Zen Old Mincho','Noto Serif JP',serif",
                            fontWeight: 700,
                            fontSize: 26,
                            color: "#1a1208",
                            whiteSpace: "nowrap",
                            letterSpacing: "0.22em",
                            position: "relative",
                            zIndex: 2,
                            opacity: phase >= 1 ? 0 : 1,
                            transition: "opacity 0.25s ease",
                        }}
                    >
                        リシ・ヴェドゥラ
                    </div>
                    <div
                        style={{
                            fontFamily:
                                "'Shippori Mincho B1','Noto Serif JP',serif",
                            fontWeight: 500,
                            fontSize: 11,
                            color: "rgba(26,18,8,0.4)",
                            whiteSpace: "nowrap",
                            marginTop: 8,
                            letterSpacing: "0.28em",
                            opacity: phase >= 1 ? 0 : 1,
                            transition: "opacity 0.18s ease",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        RISHI VEDULA · PORTFOLIO · 武士道
                    </div>
                </div>
                <div
                    style={{
                        ...rodStyle,
                        animation:
                            phase >= 2
                                ? "rodOutR 0.65s cubic-bezier(0.55,0,1,0.45) forwards"
                                : "none",
                    }}
                />
            </div>
            <div
                style={{
                    fontFamily: "'DM Mono'",
                    fontSize: 9,
                    letterSpacing: 4,
                    color:
                        phase >= 1
                            ? "rgba(240,232,218,0)"
                            : "rgba(240,232,218,0.55)",
                    marginTop: 20,
                    position: "relative",
                    zIndex: 4,
                    transition: "color 0.3s ease",
                }}
            >
                巻物を閉じる · SCROLL CLOSES
            </div>
        </div>
    );
}
