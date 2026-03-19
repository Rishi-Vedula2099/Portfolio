"use client";

import Wipe from "@/components/ui/Wipe";
import ToriiDivider from "@/components/ui/ToriiDivider";
import { useState } from "react";

function XpCard({ children, dark, plain = false }: { children: (hov: boolean) => React.ReactNode, dark: boolean, plain?: boolean }) {
    const [hov, setHov] = useState(false);
    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                transform: hov ? "translateY(-6px)" : "translateY(0)",
                padding: plain ? "20px" : "24px 20px",
                border: plain ? `1px solid ${hov ? (dark ? "rgba(201,168,76,0.15)" : "rgba(192,57,43,0.15)") : "transparent"}` : `1px solid ${hov ? (dark ? "rgba(201,168,76,0.3)" : "rgba(192,57,43,0.3)") : (dark ? "rgba(255,255,255,0.05)" : "rgba(26,18,8,0.09)")}`,
                background: plain ? (hov ? (dark ? "rgba(201,168,76,0.08)" : "rgba(192,57,43,0.06)") : "transparent") : (hov ? (dark ? "rgba(20, 15, 10, 0.45)" : "rgba(255, 255, 255, 0.45)") : (dark ? "rgba(20, 15, 10, 0.25)" : "rgba(255, 255, 255, 0.25)")),
                backdropFilter: plain ? "none" : "blur(12px)",
                boxShadow: hov && !plain ? `0 12px 30px ${dark ? "rgba(0,0,0,0.4)" : "rgba(192,57,43,0.15)"}` : "none",
                position: "relative",
                overflow: "hidden",
                cursor: "none",
                borderRadius: plain ? 4 : 0,
            }}
        >
            {children(hov)}
        </div>
    );
}

export default function About({ dark }: { dark: boolean }) {
    const c = {
        paper: dark ? "#e8e0d0" : "#1a1208",
        faint: dark ? "rgba(220,210,195,0.65)" : "#5c1002",
        sub: dark ? "rgba(235,225,210,0.72)" : "#0f0a04",
        border: dark ? "rgba(255,255,255,0.05)" : "rgba(26,18,8,0.14)",
        kanjiFill: dark ? "rgba(255,255,255,0.06)" : "rgba(26,18,8,0.18)",
        bg: dark ? "rgba(255,255,255,0.02)" : "rgba(26,18,8,0.025)"
    };

    return (
        <section
            id="about"
            style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "80px 48px",
                position: "relative",
                zIndex: 10,
            }}
        >
            <ToriiDivider label="経験 · EXPERIENCE" dark={dark} />
            <Wipe
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 70,
                    alignItems: "center",
                }}
            >
                <div>
                    <div
                        style={{
                            fontFamily: "'Noto Serif JP'",
                            fontWeight: 200,
                            fontSize: 42,
                            color: c.kanjiFill,
                            letterSpacing: 8,
                            marginBottom: 18,
                        }}
                    >
                        経験
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Cormorant Garamond'",
                            fontSize: "clamp(26px,3.8vw,38px)",
                            fontWeight: 300,
                            color: c.paper,
                            lineHeight: 1.18,
                            marginBottom: 18,
                        }}
                    >
                        Experience &
                        <br />
                        <em style={{ fontStyle: "italic", fontWeight: 600 }}>
                            Achievements.
                        </em>
                    </h2>
                    <div
                        style={{
                            height: 2,
                            width: 50,
                            background: "#c0392b",
                            marginBottom: 32,
                            animation: "brushLine 0.8s ease both",
                        }}
                    />

                    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                        <XpCard dark={dark} plain>
                            {(hov) => (
                                <div style={{ position: "relative", zIndex: 1 }}>
                                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
                                        <h3 style={{ fontFamily: "'Cormorant Garamond'", fontSize: 24, fontWeight: 600, color: hov ? (dark ? "#c9a84c" : "#c0392b") : c.paper, transition: "color 0.4s" }}>AI/ML Intern @ ForaSoftware</h3>
                                        <span style={{ fontFamily: "'DM Mono'", fontSize: 10, letterSpacing: 1, color: c.faint }}>SEP 2025 - MAR 2026</span>
                                    </div>
                                    <p style={{ fontFamily: "'Cormorant Garamond'", fontSize: 16, fontStyle: "italic", color: c.sub, lineHeight: 1.6 }}>
                                        Developing AI-driven platform • using Azure AI Foundry • RAG pipelines • FastAPI • React • Azure DevOps • CI/CD workflows
                                    </p>
                                    <div style={{
                                        position: "absolute", right: -5, bottom: "-20%",
                                        fontFamily: "'Noto Serif JP'", fontSize: 90,
                                        color: hov ? (dark ? "#c9a84c" : "#c0392b") : "#c0392b",
                                        opacity: hov ? 0.08 : 0.0, fontWeight: 900,
                                        transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                                        transform: hov ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
                                        pointerEvents: "none", zIndex: -1
                                    }}>知</div>
                                </div>
                            )}
                        </XpCard>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 42 }}>
                    <XpCard dark={dark}>
                        {(hov) => (
                            <div style={{ display: "flex", alignItems: "center", gap: 24, position: "relative", zIndex: 1, width: "100%" }}>
                                <div style={{ fontFamily: "'Noto Serif JP'", fontWeight: 200, fontSize: 17, width: 24, textAlign: "center", transition: "color 0.4s", color: hov ? (dark ? "#c9a84c" : "#c0392b") : c.faint }}>生</div>
                                <div>
                                    <div style={{ fontFamily: "'Cormorant Garamond'", fontSize: 26, fontWeight: 600, color: c.paper, lineHeight: 1.2 }}>BioTech Hackathon</div>
                                    <div style={{ fontFamily: "'DM Mono'", fontSize: 9, letterSpacing: 2, color: c.faint, marginTop: 6 }}>CONDUCTED BY MANIPAL UNIVERSITY</div>
                                </div>
                                <div style={{
                                    position: "absolute", right: 10, fontFamily: "'Noto Serif JP'", fontSize: 60,
                                    color: hov ? (dark ? "#c9a84c" : "#c0392b") : "#c0392b",
                                    opacity: hov ? 0.15 : 0.04, fontWeight: 200,
                                    transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                                    transform: hov ? "scale(1.2) rotate(-5deg)" : "scale(1) rotate(0deg)",
                                    pointerEvents: "none", zIndex: -1
                                }}>技</div>
                            </div>
                        )}
                    </XpCard>

                    <XpCard dark={dark}>
                        {(hov) => (
                            <div style={{ display: "flex", alignItems: "center", gap: 24, position: "relative", zIndex: 1, width: "100%" }}>
                                <div style={{ fontFamily: "'Noto Serif JP'", fontWeight: 200, fontSize: 17, width: 24, textAlign: "center", transition: "color 0.4s", color: hov ? (dark ? "#c9a84c" : "#c0392b") : c.faint }}>創</div>
                                <div>
                                    <div style={{ fontFamily: "'Cormorant Garamond'", fontSize: 26, fontWeight: 600, color: c.paper, lineHeight: 1.2 }}>Microsoft INNOVATE</div>
                                    <div style={{ fontFamily: "'DM Mono'", fontSize: 9, letterSpacing: 2, color: c.faint, marginTop: 6 }}>CONDUCTED BY BENNETT UNIVERSITY</div>
                                </div>
                                <div style={{
                                    position: "absolute", right: 10, fontFamily: "'Noto Serif JP'", fontSize: 60,
                                    color: hov ? (dark ? "#c9a84c" : "#c0392b") : "#c0392b",
                                    opacity: hov ? 0.15 : 0.04, fontWeight: 200,
                                    transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                                    transform: hov ? "scale(1.2) rotate(-5deg)" : "scale(1) rotate(0deg)",
                                    pointerEvents: "none", zIndex: -1
                                }}>新</div>
                            </div>
                        )}
                    </XpCard>

                    <XpCard dark={dark}>
                        {(hov) => (
                            <div style={{ display: "flex", alignItems: "center", gap: 24, position: "relative", zIndex: 1, width: "100%" }}>
                                <div style={{ fontFamily: "'Noto Serif JP'", fontWeight: 200, fontSize: 17, width: 24, textAlign: "center", transition: "color 0.4s", color: hov ? (dark ? "#c9a84c" : "#c0392b") : c.faint }}>仮</div>
                                <div>
                                    <div style={{ fontFamily: "'Cormorant Garamond'", fontSize: 26, fontWeight: 600, color: c.paper, lineHeight: 1.2 }}>Virtual IT Intern</div>
                                    <div style={{ fontFamily: "'DM Mono'", fontSize: 9, letterSpacing: 2, color: c.faint, marginTop: 6 }}>CODSOFT</div>
                                </div>
                                <div style={{
                                    position: "absolute", right: 10, top: "50%",
                                    fontFamily: "'Noto Serif JP'", fontSize: 60,
                                    color: hov ? (dark ? "#c9a84c" : "#c0392b") : "#c0392b",
                                    opacity: hov ? 0.15 : 0.04, fontWeight: 200,
                                    transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                                    transform: hov ? "translateY(-50%) scale(1.2) rotate(-5deg)" : "translateY(-50%) scale(1) rotate(0deg)",
                                    pointerEvents: "none", zIndex: -1
                                }}>想</div>
                            </div>
                        )}
                    </XpCard>
                </div>
            </Wipe>
        </section>
    );
}
