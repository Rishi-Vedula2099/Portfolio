"use client";

import { SKILLS } from "@/data";
import SwordDrawButton from "@/components/ui/SwordDrawButton";

interface HeroProps {
    dark: boolean;
    loaded: boolean;
}

export default function Hero({ dark, loaded }: HeroProps) {
    const c = {
        paper: dark ? "#e8e0d0" : "#1a1208",
        muted: dark ? "rgba(240,232,218,0.82)" : "#6b1404",
        faint: dark ? "rgba(220,210,195,0.65)" : "#5c1002",
        line: dark ? "rgba(201,168,76,0.07)" : "rgba(26,18,8,0.12)",
        sub: dark ? "rgba(235,225,210,0.72)" : "#0f0a04",
        border: dark ? "rgba(201,168,76,0.07)" : "rgba(26,18,8,0.14)",
    };

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="hero"
            style={{
                minHeight: "94vh",
                display: "grid",
                gridTemplateColumns: "1fr 270px",
                alignItems: "center",
                maxWidth: 1100,
                margin: "0 auto",
                padding: "100px 48px 80px",
                position: "relative",
                zIndex: 10,
                gap: 0,
            }}
        >
            <div
                style={{
                    animation: loaded ? "inkDrop 1s 0.2s ease both" : "none",
                    opacity: loaded ? undefined : 0,
                }}
            >
                <div
                    style={{
                        writingMode: "vertical-rl",
                        fontFamily: "'Noto Serif JP'",
                        fontWeight: 200,
                        fontSize: 11,
                        color: c.faint,
                        letterSpacing: 10,
                        marginBottom: 30,
                        display: "inline-block",
                        animation: loaded ? "brushIn 1.4s 0.5s ease both" : "none",
                    }}
                >
                    ソフトウェアエンジニア · 武士道
                </div>
                <h1
                    style={{
                        fontFamily:
                            "'Zen Old Mincho','Shippori Mincho B1','Noto Serif JP',serif",
                        fontWeight: 400,
                        fontSize: "clamp(54px,7.2vw,90px)",
                        lineHeight: 0.93,
                        letterSpacing: "0.02em",
                        color: c.paper,
                        marginBottom: 8,
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Zen Old Mincho','Shippori Mincho B1',serif",
                            fontWeight: 400,
                            letterSpacing: "0.04em",
                        }}
                    >
                        Rishi
                    </span>
                    <br />
                    <span className={dark ? "gold-dark" : "gold-light"}>Vedula.</span>
                </h1>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "16px 0 24px",
                        animation: loaded ? "inkDrop 0.5s 1s ease both" : "none",
                        opacity: loaded ? undefined : 0,
                    }}
                >
                    <div
                        style={{
                            width: 13,
                            height: 13,
                            borderRadius: "50%",
                            flexShrink: 0,
                            background: "radial-gradient(circle,#c9a84c,#7a5a10)",
                            boxShadow: "0 0 14px rgba(201,168,76,0.4)",
                        }}
                    />
                    <div
                        style={{
                            height: 2,
                            background:
                                "linear-gradient(90deg,#c9a84c,rgba(201,168,76,0.28) 70%,transparent)",
                            animation: loaded
                                ? "katanaDraw 1.1s 1.2s cubic-bezier(0.22,1,0.36,1) both"
                                : "none",
                            width: 0,
                        }}
                    />
                </div>
                <p
                    style={{
                        fontFamily: "'Cormorant Garamond'",
                        fontSize: 18,
                        fontStyle: "italic",
                        lineHeight: 1.9,
                        color: c.sub,
                        maxWidth: 440,
                        marginBottom: 42,
                        animation: loaded ? "inkDrop 0.8s 0.75s ease both" : "none",
                        opacity: loaded ? undefined : 0,
                    }}
                >
                    Full-stack engineer and systems thinker. I build software with the same
                    care a craftsperson gives their work — precise, considered, enduring.
                </p>
                <div
                    style={{
                        display: "flex",
                        gap: 18,
                        alignItems: "center",
                        animation: loaded ? "inkDrop 0.7s 1s ease both" : "none",
                        opacity: loaded ? undefined : 0,
                    }}
                >
                    <SwordDrawButton
                        label="VIEW WORKS"
                        confirmedLabel="ENTERING DOJO →"
                        dark={dark}
                        color={dark ? "#c9a84c" : "#b89030"}
                        onClick={() => scrollTo("works")}
                    />
                    <SwordDrawButton
                        label="DOWNLOAD CV"
                        confirmedLabel="SCROLL ACQUIRED ✓"
                        dark={dark}
                        color="#5BBF8E"
                        onClick={() => {
                            // Dummy dl or link
                        }}
                    />
                </div>
            </div>

            {/* Skills sidebar */}
            <div
                style={{
                    borderLeft: `1px solid ${c.border}`,
                    paddingLeft: 36,
                    paddingTop: 4,
                    animation: loaded ? "inkDrop 1s 0.4s ease both" : "none",
                    opacity: loaded ? undefined : 0,
                }}
            >
                <div
                    style={{
                        fontFamily: "'DM Mono'",
                        fontSize: 9,
                        letterSpacing: 4,
                        color: c.faint,
                        marginBottom: 20,
                    }}
                >
                    道具 · TOOLS
                </div>
                {SKILLS.map((s, i) => (
                    <div
                        key={s.name}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "11px 8px",
                            borderBottom: `1px solid ${c.line}`,
                            animation: loaded
                                ? `slideR 0.5s ${0.22 + i * 0.09}s ease both`
                                : "none",
                            opacity: loaded ? undefined : 0,
                            cursor: "none",
                            transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = dark
                                ? "rgba(201,168,76,0.04)"
                                : "rgba(26,18,8,0.04)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                        }}
                    >
                        <div
                            style={{
                                fontFamily: "'Noto Serif JP'",
                                fontWeight: 300,
                                fontSize: 24,
                                color: `${s.color}66`,
                                width: 34,
                                textAlign: "center",
                                transition: "color 0.3s,transform 0.35s",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = s.color;
                                (e.currentTarget as HTMLElement).style.transform =
                                    "scale(1.2) rotate(-6deg)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = `${s.color}66`;
                                (e.currentTarget as HTMLElement).style.transform =
                                    "scale(1) rotate(0)";
                            }}
                        >
                            {s.jp}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div
                                style={{
                                    fontFamily: "'DM Mono'",
                                    fontSize: 10,
                                    letterSpacing: 2,
                                    color: c.muted,
                                    marginBottom: 4,
                                }}
                            >
                                {s.name}
                            </div>
                            <div
                                style={{
                                    height: 2,
                                    background: dark
                                        ? "rgba(255,255,255,0.06)"
                                        : "rgba(26,18,8,0.07)",
                                    borderRadius: 1,
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        height: "100%",
                                        width: loaded ? `${s.val}%` : "0%",
                                        background: `linear-gradient(90deg,${s.color},${s.color}88)`,
                                        boxShadow: `0 0 5px ${s.color}55`,
                                        transition: `width 1.3s cubic-bezier(0.34,1.56,0.64,1) ${0.55 + i * 0.1
                                            }s`,
                                        borderRadius: 1,
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                fontFamily: "'DM Mono'",
                                fontSize: 9,
                                color: s.color,
                                letterSpacing: 1,
                                minWidth: 28,
                                textAlign: "right",
                            }}
                        >
                            {s.val}%
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        marginTop: 24,
                        padding: "14px",
                        border: "1px solid rgba(192,57,43,0.2)",
                        background: "rgba(192,57,43,0.04)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 8,
                        }}
                    >
                        <div
                            style={{
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: "#c0392b",
                                animation: "pulseDot 2s ease-in-out infinite",
                            }}
                        />
                        <div
                            style={{
                                fontFamily: "'DM Mono'",
                                fontSize: 10,
                                letterSpacing: 3,
                                color: "#c0392b",
                                textShadow: "0 0 12px rgba(192,57,43,0.7)",
                            }}
                        >
                            AVAILABLE
                        </div>
                    </div>
                    <div
                        style={{
                            fontFamily: "'Cormorant Garamond'",
                            fontSize: 14,
                            fontStyle: "italic",
                            color: c.sub,
                            lineHeight: 1.65,
                        }}
                    >
                        Open to new projects and full-time roles.
                    </div>
                </div>
            </div>
        </section>
    );
}
