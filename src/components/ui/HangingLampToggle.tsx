"use client";

import { useState } from "react";

export default function HangingLampToggle({
    dark,
    onToggleAction,
}: {
    dark: boolean;
    onToggleAction: () => void;
}) {
    const [swinging, setSwinging] = useState(false);

    // Initial load swing or click swing
    const handleClick = () => {
        if (!swinging) {
            setSwinging(true);
            setTimeout(() => setSwinging(false), 2500); // Animation duration match
        }
        onToggleAction();
    };

    const c = {
        wood: dark ? "#3a2518" : "#2a1508", // Darker wood in light mode? Or keep consistent. Ancient wood is dark.
        paper: dark ? "#f4e4c1" : "#e0d0b0",
        frame: dark ? "#1a1005" : "#0d0500",
        glow: dark ? "rgba(235, 140, 50, 0.8)" : "transparent",
        fire: dark ? "#ff6b1a" : "transparent",
        kanji: dark ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.8)",
    };

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "none",
                transformOrigin: "top center",
                animation: swinging ? "lampSwing 2.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
                transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            onClick={handleClick}
            onMouseEnter={(e) => {
                if (!swinging) {
                    e.currentTarget.style.transform = "rotate(3deg)";
                }
            }}
            onMouseLeave={(e) => {
                if (!swinging) {
                    e.currentTarget.style.transform = "rotate(0deg)";
                }
            }}
        >
            {/* Hanging rope/chain */}
            <div
                style={{
                    width: 2,
                    height: 35,
                    background: "linear-gradient(to bottom, #111, #3a2518)",
                    boxShadow: "1px 0px 2px rgba(0,0,0,0.5)",
                }}
            />

            {/* Lamp Handle/Top */}
            <svg width="40" height="15" viewBox="0 0 40 15" style={{ zIndex: 2 }}>
                <path d="M 5 15 Q 20 -5 35 15" fill="none" stroke={c.wood} strokeWidth="4" />
                <rect x="0" y="10" width="40" height="5" fill={c.frame} rx="2" />
            </svg>

            {/* Main Lamp Body */}
            <div
                style={{
                    width: 38,
                    height: 50,
                    position: "relative",
                    background: c.paper,
                    borderLeft: `4px solid ${c.wood}`,
                    borderRight: `4px solid ${c.wood}`,
                    boxShadow: dark
                        ? `0 0 25px ${c.glow}, inset 0 0 15px rgba(255,100,0,0.3)`
                        : "inset 0 0 10px rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.5s ease",
                    zIndex: 1,
                    overflow: "hidden",
                }}
            >
                {/* Horizontal frame grid */}
                <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 3, background: c.wood, transform: "translateY(-50%)" }} />

                {/* Vertical frame grid */}
                <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 3, background: c.wood, transform: "translateX(-50%)" }} />

                {/* Inner Glow / Fire blob */}
                {dark && (
                    <div
                        style={{
                            position: "absolute",
                            bottom: 5,
                            width: 15,
                            height: 20,
                            background: `radial-gradient(ellipse, ${c.fire} 0%, transparent 70%)`,
                            filter: "blur(2px)",
                            animation: "candleFlicker 0.15s infinite alternate",
                            zIndex: 0,
                        }}
                    />
                )}

                {/* Decorative Kanji on the paper */}
                <div
                    style={{
                        position: "relative",
                        fontFamily: "'Noto Serif JP'",
                        fontSize: 14,
                        fontWeight: 900,
                        color: c.kanji,
                        zIndex: 2,
                        textShadow: dark ? `0 0 5px rgba(255,200,100,0.5)` : "none",
                        marginTop: -2, // Optical alignment
                    }}
                >
                    {dark ? "明" : "暗"} {/* Light/Dark Kanji */}
                </div>
            </div>

            {/* Lamp base */}
            <svg width="40" height="8" viewBox="0 0 40 8" style={{ zIndex: 2 }}>
                <rect x="0" y="0" width="40" height="4" fill={c.frame} rx="1" />
                <polygon points="4,4 36,4 32,8 8,8" fill={c.wood} />
            </svg>

            {/* Base tassel (optional, adds to elegance) */}
            <div style={{ width: 4, height: 12, background: "#8b0000", marginTop: 1, borderRadius: "2px 2px 0 0" }} />
            <div style={{ width: 8, height: 15, background: "repeating-linear-gradient(90deg, #8b0000 0px, #8b0000 1px, #600000 1px, #600000 2px)", clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }} />
        </div>
    );
}
