"use client";

import React, { useState, useEffect } from "react";

interface SwordDrawButtonProps {
    label: string;
    confirmedLabel: string;
    dark?: boolean;
    color?: string;
    onClick?: () => void;
}

export default function SwordDrawButton({
    label,
    confirmedLabel,
    dark = true,
    color = "#c9a84c", // default gold
    onClick,
}: SwordDrawButtonProps) {
    const [pressed, setPressed] = useState(false);
    const [shudder, setShudder] = useState(false);

    // Auto-reset after 2.5s
    useEffect(() => {
        if (pressed) {
            const timer = setTimeout(() => {
                setPressed(false);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [pressed]);

    const handlePress = () => {
        if (pressed) return;
        setShudder(true);
        setTimeout(() => setShudder(false), 200); // Shudder duration
        setTimeout(() => {
            setPressed(true);
            if (onClick) onClick();
        }, 150);
    };

    const bg = dark ? "rgba(26,18,8,0.8)" : "rgba(240,232,218,0.8)";
    const border = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
    const textCol = dark ? "#f0e8d8" : "#1a1208";

    return (
        <div
            onClick={handlePress}
            onMouseEnter={(e) => {
                if (!pressed) {
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.boxShadow = `0 8px 30px ${color}33`;
                }
            }}
            onMouseLeave={(e) => {
                if (!pressed) {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                }
            }}
            style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                height: 48,
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: 2,
                cursor: "none",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
                transform: shudder ? "translateX(-2px) rotate(1deg)" : "translateX(0)",
                minWidth: 200,
            }}
        >
            {/* The Grip (Tsuka) */}
            <div
                style={{
                    height: "100%",
                    padding: "0 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: color,
                    color: dark ? "#1a1208" : "#fff",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 2,
                    zIndex: 2,
                    borderRight: `2px solid ${dark ? "#fff" : "#000"}`,
                    transition: "width 0.3s",
                }}
            >
                <div
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "rgba(0,0,0,0.3)",
                        marginRight: 8,
                    }}
                />
                {pressed ? "抜" : "刀"}
            </div>

            {/* The Blade / Label Area */}
            <div
                style={{
                    flex: 1,
                    padding: "0 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                    position: "relative",
                }}
            >
                {/* Blade Extension Animation */}
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        height: 2,
                        width: pressed ? "100%" : "0%",
                        background: `linear-gradient(90deg, ${color}, transparent)`,
                        boxShadow: `0 0 10px ${color}`,
                        transition: "width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        opacity: pressed ? 1 : 0,
                    }}
                />

                {/* Labels */}
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: 20,
                    }}
                >
                    <span
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'DM Mono', monospace",
                            fontSize: 11,
                            letterSpacing: 3,
                            color: textCol,
                            opacity: pressed ? 0 : 1,
                            transform: pressed ? "translateY(10px)" : "translateY(0)",
                            transition: "all 0.3s",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {label}
                    </span>
                    <span
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'DM Mono', monospace",
                            fontSize: 11,
                            letterSpacing: 2,
                            color: color,
                            opacity: pressed ? 1 : 0,
                            transform: pressed ? "translateY(0)" : "translateY(-10px)",
                            transition: "all 0.3s",
                            whiteSpace: "nowrap",
                            textShadow: `0 0 8px ${color}66`,
                        }}
                    >
                        {confirmedLabel}
                    </span>
                </div>
            </div>

            {/* Sparks */}
            {pressed && (
                <div
                    style={{
                        position: "absolute",
                        left: 50,
                        top: "50%",
                        width: 100,
                        height: 20,
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        zIndex: 3,
                    }}
                >
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                width: 2,
                                height: 2,
                                background: "#fff",
                                borderRadius: "50%",
                                boxShadow: `0 0 6px ${color}`,
                                top: "50%",
                                left: 0,
                                // We would use keyframes for a real particle system, but inline animation works too
                                animation: `sparkAnim ${0.3 + Math.random() * 0.3}s forwards`,
                                animationDelay: `${Math.random() * 0.1}s`,
                            }}
                        />
                    ))}
                    <style>{`
            @keyframes sparkAnim {
              0% { transform: translate(0, 0) scale(1); opacity: 1; }
              100% { transform: translate(${50 + Math.random() * 50}px, ${(Math.random() - 0.5) * 40}px) scale(0); opacity: 0; }
            }
          `}</style>
                </div>
            )}
        </div>
    );
}
