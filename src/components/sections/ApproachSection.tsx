"use client";

import { useState, useRef, useEffect } from "react";
import Wipe from "@/components/ui/Wipe";
import ToriiDivider from "@/components/ui/ToriiDivider";
import { APPROACHES } from "@/data/insights";

function MatrixTexture({ color, active }: { color: string; active: boolean }) {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ道剣武侍龍";
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cols = useRef(Array.from({ length: 10 }, (_, i) => ({
        id: i, x: `${i * 10 + 2}%`, delay: `${Math.random() * 4}s`,
        dur: `${3 + Math.random() * 5}s`, chars: Array.from({ length: 18 }, () => chars[Math.floor(Math.random() * chars.length)])
    }))).current;

    if (!active || !mounted) return null;
    return (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
            {cols.map(col => (
                <div key={col.id} style={{
                    position: "absolute", left: col.x, top: 0,
                    fontFamily: "'Noto Serif JP'", fontSize: 9,
                    color: color, lineHeight: 1.4,
                    opacity: 0,
                    animation: `matrixRain ${col.dur} ${col.delay} ease-in-out infinite`,
                    textShadow: `0 0 6px ${color}`,
                    whiteSpace: "nowrap",
                }}>
                    {col.chars.map((c, i) => (
                        <div key={i} style={{ opacity: Math.max(0.1, (18 - i) / 18) * 0.7 }}>{c}</div>
                    ))}
                </div>
            ))}
        </div>
    );
}


function ApproachCard({ ap, active, onClick, dark }: { ap: any; active: boolean; onClick: () => void; dark: boolean }) {
    const isActive = active;

    return (
        <div className={`approach-card${isActive ? " expanded" : ""}`}
            onClick={onClick}
            style={{
                minHeight: 480,
                background: isActive
                    ? `linear-gradient(160deg, ${dark ? "rgba(15, 14, 28, 0.4)" : "rgba(248, 242, 232, 0.4)"} 0%, ${dark ? "rgba(8, 7, 22, 0.6)" : "rgba(240, 232, 212, 0.6)"} 100%)`
                    : dark ? "rgba(9, 8, 15, 0.3)" : "rgba(237, 229, 212, 0.3)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${isActive ? ap.color + "66" : (dark ? "rgba(255,255,255,0.06)" : "rgba(26,18,8,0.1)")}`,
                boxShadow: isActive ? `0 0 60px ${ap.glow}, inset 0 0 30px ${ap.color}0A` : "none",
                transition: "all 0.7s cubic-bezier(0.34,1.2,0.64,1)",
            }}>

            {/* Corner marks (like screenshots) */}
            {["tl", "tr", "bl", "br"].map(pos => (
                <div key={pos} className={`corner-mark ${pos}`} style={{ borderColor: isActive ? ap.color : (dark ? "rgba(255,255,255,0.2)" : "rgba(26,18,8,0.2)") }} />
            ))}

            {/* Matrix rain — only on active */}
            <MatrixTexture color={ap.color} active={isActive} />

            {/* Scan line */}
            {isActive && (
                <div style={{
                    position: "absolute", left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg,transparent,${ap.color}66,transparent)`,
                    zIndex: 2, pointerEvents: "none",
                    animation: "stScanline 5s linear infinite",
                }} />
            )}

            <div style={{ position: "relative", zIndex: 3, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "36px 24px", textAlign: "center" }}>

                {/* Phase badge */}
                <div style={{
                    fontFamily: "'Noto Serif JP'", fontWeight: 200, fontSize: 11,
                    letterSpacing: 5, marginBottom: 14,
                    color: isActive ? ap.color : (dark ? "rgba(255,255,255,0.25)" : "rgba(26,18,8,0.35)"),
                    transition: "color 0.5s",
                    textShadow: isActive ? `0 0 18px ${ap.glow}` : "none",
                }}>{ap.en} · {ap.phase}</div>

                {/* Central kanji circle */}
                <div style={{
                    width: 68, height: 68, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: isActive ? `radial-gradient(circle,${ap.color}22,${ap.color}08)` : dark ? "rgba(255,255,255,0.03)" : "rgba(26,18,8,0.04)",
                    border: `${isActive ? "2px" : "1px"} solid ${isActive ? ap.color : (dark ? "rgba(255,255,255,0.1)" : "rgba(26,18,8,0.14)")}`,
                    boxShadow: isActive ? `0 0 30px ${ap.glow}, 0 0 60px ${ap.color}22` : "none",
                    marginBottom: 18,
                    transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                }}>
                    <span style={{
                        fontFamily: "'Noto Serif JP'", fontWeight: 700, fontSize: 24,
                        color: isActive ? ap.color : (dark ? "rgba(255,255,255,0.22)" : "rgba(26,18,8,0.28)"),
                        transition: "color 0.5s",
                        textShadow: isActive ? `0 0 20px ${ap.glow}` : "none",
                    }}>{ap.jp}</span>
                </div>

                {/* Title */}
                <div style={{
                    fontFamily: "'Cormorant Garamond'", fontSize: isActive ? 22 : 18, fontWeight: 600,
                    color: isActive ? (dark ? "#e8e0d0" : "#0f0a04") : (dark ? "rgba(255,255,255,0.35)" : "#5c1002"),
                    lineHeight: 1.2, marginBottom: 6,
                    transition: "font-size 0.5s,color 0.5s",
                    textAlign: "center",
                }}>{ap.title}</div>
                <div style={{
                    fontFamily: "'DM Mono'", fontSize: 8, letterSpacing: 3,
                    color: isActive ? ap.color : (dark ? "rgba(255,255,255,0.18)" : "rgba(26,18,8,0.28)"),
                    marginBottom: isActive ? 20 : 0,
                    transition: "all 0.5s",
                    textShadow: isActive ? `0 0 12px ${ap.glow}` : "none",
                }}>{ap.sub}</div>

                {/* Expanded content */}
                {isActive && (<>
                    {/* Separator */}
                    <div style={{
                        width: "70%", height: 1, marginBottom: 18,
                        background: `linear-gradient(90deg,transparent,${ap.color},transparent)`,
                        animation: "brushLine 0.8s ease both",
                    }} />

                    {/* Discipline label */}
                    <div style={{
                        fontFamily: "'Noto Serif JP'", fontWeight: 300, fontSize: 10,
                        letterSpacing: 3, color: ap.color, marginBottom: 16, opacity: 0.85,
                        animation: "principleSlide 0.5s 0.15s ease both",
                        animationFillMode: "forwards",
                    }}>{ap.discipline}</div>

                    {/* Description */}
                    <div style={{
                        fontFamily: "'Cormorant Garamond'", fontSize: 14, fontStyle: "italic",
                        color: dark ? "rgba(220,208,188,0.82)" : "#0f0a04",
                        lineHeight: 1.9, marginBottom: 20, maxWidth: 320, textAlign: "center",
                        animation: "inkWash 0.6s 0.2s ease both",
                        animationFillMode: "forwards",
                    }}>{ap.desc}</div>

                    {/* Ancient principle */}
                    <div style={{
                        borderTop: `1px solid ${ap.color}33`, paddingTop: 14,
                        fontFamily: "'Cormorant Garamond'", fontSize: 12, fontStyle: "italic",
                        color: dark ? "rgba(201,168,76,0.7)" : "#6b1404",
                        letterSpacing: 0.5, lineHeight: 1.7, maxWidth: 280, textAlign: "center",
                        animation: "principleSlide 0.5s 0.35s ease both",
                        animationFillMode: "forwards",
                    }}>{ap.principle}</div>
                </>)}

                {/* Collapsed hint */}
                {!isActive && (
                    <div style={{
                        marginTop: 18,
                        fontFamily: "'DM Mono'", fontSize: 7, letterSpacing: 2,
                        color: dark ? "rgba(255,255,255,0.15)" : "rgba(26,18,8,0.2)",
                    }}>[ click to reveal ]</div>
                )}
            </div>
        </div>
    );
}

export default function ApproachSection({ dark }: { dark: boolean }) {
    const [active, setActive] = useState(1); // default Phase II expanded

    return (
        <section id="approach" style={{
            background: dark ? "rgba(201,168,76,0.02)" : "rgba(26,18,8,0.02)",
            borderTop: `1px solid ${dark ? "rgba(201,168,76,0.07)" : "rgba(26,18,8,0.07)"}`,
            borderBottom: `1px solid ${dark ? "rgba(201,168,76,0.07)" : "rgba(26,18,8,0.07)"}`,
            padding: "80px 0",
            backdropFilter: "blur(4px)",
        }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>
                <ToriiDivider label="武士の道 · MY APPROACH" dark={dark} />

                {/* Intro */}
                <Wipe style={{ textAlign: "center", marginBottom: 52 }}>
                    <h2 style={{
                        fontFamily: "'Cormorant Garamond'", fontWeight: 300,
                        fontSize: "clamp(26px,3.4vw,38px)",
                        color: dark ? "#e8e0d0" : "#0f0a04", lineHeight: 1.15, marginBottom: 14,
                    }}>
                        Three disciplines.<br /><em style={{ fontStyle: "italic", fontWeight: 600 }}>One warrior&apos;s code.</em>
                    </h2>
                    <div style={{
                        fontFamily: "'Cormorant Garamond'", fontSize: 16, fontStyle: "italic",
                        color: dark ? "rgba(220,208,188,0.6)" : "#5c1002",
                        maxWidth: 500, margin: "0 auto", lineHeight: 1.8,
                    }}>
                        In Sengoku Japan, a general&apos;s victory began before the first blade was drawn. Strategy, practice, and mastery — the three pillars of every project I undertake.
                    </div>
                    <div style={{
                        fontFamily: "'Noto Serif JP'", fontWeight: 200, fontSize: 11,
                        color: dark ? "rgba(201,168,76,0.38)" : "rgba(165,30,8,0.42)",
                        letterSpacing: 7, marginTop: 14,
                    }}>観察 · 実践 · 極意</div>
                </Wipe>

                {/* Phase cards */}
                <Wipe>
                    <div style={{ display: "flex", gap: 16, alignItems: "stretch", minHeight: 480 }}>
                        {APPROACHES.map((ap, i) => (
                            <ApproachCard
                                key={ap.phase}
                                ap={ap}
                                active={active === i}
                                onClick={() => setActive(active === i ? -1 : i)}
                                dark={dark}
                            />
                        ))}
                    </div>
                </Wipe>

                {/* Phase indicator dots */}
                <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 28 }}>
                    {APPROACHES.map((ap, i) => (
                        <button key={i} onClick={() => setActive(i)} style={{
                            width: active === i ? 28 : 8,
                            height: 8, borderRadius: 4,
                            background: active === i ? ap.color : (dark ? "rgba(255,255,255,0.12)" : "rgba(26,18,8,0.15)"),
                            border: "none", cursor: "none",
                            transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                            boxShadow: active === i ? `0 0 12px ${ap.glow}` : "none",
                        }} />
                    ))}
                </div>
            </div>
        </section>
    );
}
