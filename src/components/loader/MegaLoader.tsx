"use client";

import { useState, useEffect } from "react";

export default function MegaLoader({ onDone }: { onDone: () => void }) {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 900);
        const t2 = setTimeout(() => setPhase(2), 2500);
        const t3 = setTimeout(() => setPhase(3), 3300);
        const t4 = setTimeout(() => {
            setPhase(4);
            onDone();
        }, 4000);
        return () => [t1, t2, t3, t4].forEach(clearTimeout);
    }, [onDone]);

    if (phase === 4) return null;

    const ToriiIcon = () => (
        <svg
            viewBox="0 0 160 70"
            width="130"
            height="56"
            fill="none"
            style={{ marginBottom: 28, animation: "toriiRise 0.7s 0.1s ease both" }}
        >
            <rect x="12" y="0" width="10" height="70" fill="#e8e0d0" />
            <rect x="138" y="0" width="10" height="70" fill="#e8e0d0" />
            <rect x="0" y="12" width="160" height="9" rx="2" fill="#c0392b" />
            <rect x="12" y="24" width="136" height="5" rx="2" fill="#e8e0d0" />
            <rect x="22" y="0" width="5" height="16" fill="#e8e0d0" />
            <rect x="133" y="0" width="5" height="16" fill="#e8e0d0" />
        </svg>
    );

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
                zIndex: 3000,
                background: "#07060c",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                ...(phase === 3
                    ? { animation: "loaderOut 0.55s 0.05s ease forwards" }
                    : {}),
            }}
        >
            {phase === 3 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 10,
                        background: "#07060c",
                        animation: "inkBleed 0.6s ease forwards",
                        animationDirection: "reverse",
                    }}
                />
            )}
            {phase === 2 && (
                <>
                    <div
                        style={{
                            position: "fixed",
                            top: "38%",
                            left: 0,
                            right: 0,
                            height: 3,
                            background:
                                "linear-gradient(90deg,transparent,rgba(192,57,43,0.2) 15%,#c0392b 40%,#ff9977 50%,#c0392b 60%,rgba(192,57,43,0.2) 85%,transparent)",
                            boxShadow: "0 0 22px #c0392b",
                            transform: "scaleX(0) translateY(-50%) rotate(-3deg)",
                            animation: "slashDiag1 0.38s ease forwards",
                            zIndex: 20,
                        }}
                    />
                    <div
                        style={{
                            position: "fixed",
                            top: "62%",
                            left: 0,
                            right: 0,
                            height: 2,
                            background:
                                "linear-gradient(90deg,transparent,rgba(192,57,43,0.3) 20%,#ff9977 50%,rgba(192,57,43,0.3) 80%,transparent)",
                            boxShadow: "0 0 18px #c0392b",
                            transform: "scaleX(0) translateY(-50%) rotate(2deg)",
                            animation: "slashDiag2 0.38s 0.08s ease forwards",
                            zIndex: 20,
                        }}
                    />
                    <div
                        style={{
                            position: "fixed",
                            top: "50%",
                            left: 0,
                            right: 0,
                            height: 2,
                            background:
                                "linear-gradient(90deg,transparent,rgba(255,200,180,0.4) 30%,#ffffff 50%,rgba(255,200,180,0.4) 70%,transparent)",
                            boxShadow:
                                "0 0 30px rgba(255,255,255,0.6),0 0 60px #c0392b",
                            transform: "scaleX(0) translateY(-50%)",
                            animation: "slashCenter 0.32s 0.12s ease forwards",
                            zIndex: 21,
                        }}
                    />
                    <div
                        style={{
                            position: "fixed",
                            left: "50%",
                            top: 0,
                            bottom: 0,
                            width: 2,
                            marginLeft: -1,
                            background:
                                "linear-gradient(to bottom,transparent,#c0392b,#ff9977,#c0392b,transparent)",
                            boxShadow: "0 0 18px #c0392b",
                            transform: "scaleY(0)",
                            animation: "slashVert 0.3s 0.16s ease forwards",
                            zIndex: 21,
                        }}
                    />
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "50%",
                            background: "#07060c",
                            animation:
                                "screenSplit 0.4s 0.22s cubic-bezier(0.22,1,0.36,1) forwards",
                            zIndex: 15,
                        }}
                    />
                    <div
                        style={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "50%",
                            background: "#07060c",
                            animation:
                                "screenSplitB 0.4s 0.22s cubic-bezier(0.22,1,0.36,1) forwards",
                            zIndex: 15,
                        }}
                    />
                </>
            )}
            <ToriiIcon />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: 160,
                    position: "relative",
                }}
            >
                <div
                    style={{
                        ...rodStyle,
                        animation:
                            "rodInL 0.75s 0.05s cubic-bezier(0.34,1.56,0.64,1) both",
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
                        maxWidth: 0,
                        animation:
                            phase >= 1
                                ? "scrollUnroll 1.2s 0.1s cubic-bezier(0.22,1,0.36,1) forwards"
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
                            fontFamily: "'Zen Old Mincho','Noto Serif JP',serif",
                            fontWeight: 700,
                            fontSize: 26,
                            color: "#1a1208",
                            whiteSpace: "nowrap",
                            letterSpacing: "0.22em",
                            animation:
                                phase >= 1
                                    ? "scrollFadeIn 0.7s 1.15s cubic-bezier(0.22,1,0.36,1) both"
                                    : "none",
                            opacity: 0,
                            position: "relative",
                            zIndex: 2,
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
                            animation:
                                phase >= 1
                                    ? "subFadeIn 0.5s 1.6s ease both"
                                    : "none",
                            opacity: 0,
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        RISHI VEDULA · PORTFOLIO · 武士道
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            bottom: 10,
                            right: 14,
                            fontFamily: "'Noto Serif JP'",
                            fontSize: 11,
                            color: "#c0392b",
                            border: "1.5px solid #c0392b",
                            padding: "2px 5px",
                            opacity: 0,
                            animation:
                                phase >= 1
                                    ? "subFadeIn 0.4s 1.9s ease both"
                                    : "none",
                        }}
                    >
                        印
                    </div>
                </div>
                <div
                    style={{
                        ...rodStyle,
                        animation:
                            "rodInR 0.75s 0.05s cubic-bezier(0.34,1.56,0.64,1) both",
                    }}
                />
            </div>
            <div
                style={{
                    fontFamily: "'DM Mono'",
                    fontSize: 9,
                    letterSpacing: 4,
                    color: "rgba(240,232,218,0.55)",
                    marginTop: 20,
                    animation:
                        phase >= 1 ? "subFadeIn 0.5s 1.8s ease both" : "none",
                    opacity: 0,
                    textShadow:
                        "0 0 12px rgba(240,232,218,0.5),0 0 28px rgba(240,232,218,0.2)",
                }}
            >
                LOADING · 読み込み中
            </div>
        </div>
    );
}
