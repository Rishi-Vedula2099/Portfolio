"use client";

import { useState } from "react";
import type { Work } from "@/types";
import { WORKS } from "@/data";
import Wipe from "@/components/ui/Wipe";
import ToriiDivider from "@/components/ui/ToriiDivider";

function WorkRow({ w, i, dark }: { w: Work; i: number; dark: boolean }) {
    const [hov, setHov] = useState(false);
    const [slashing, setSlashing] = useState(false);
    const c = dark
        ? {
            muted: "rgba(240,232,218,0.78)",
            text: "#e8e0d0",
            sub: "rgba(235,225,210,0.82)",
        }
        : {
            muted: "#6b1404",
            text: "#0f0a04",
            sub: "#0f0a04",
        };
    const enter = () => {
        setHov(true);
        setSlashing(true);
        setTimeout(() => setSlashing(false), 500);
    };

    return (
        <Wipe delay={i * 0.1}>
            <div
                className="wrow"
                onMouseEnter={enter}
                onMouseLeave={() => setHov(false)}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(90deg,rgba(192,57,43,0.05),transparent 70%)",
                        transform: hov ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition:
                            "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
                        pointerEvents: "none",
                    }}
                />
                {slashing && (
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            right: 0,
                            height: 1.5,
                            pointerEvents: "none",
                            zIndex: 5,
                            background:
                                "linear-gradient(90deg,transparent,rgba(192,57,43,0.85),#ffccaa,rgba(192,57,43,0.85),transparent)",
                            boxShadow: "0 0 12px rgba(192,57,43,0.5)",
                            animation: "rowSlash 0.45s ease forwards",
                        }}
                    />
                )}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRight: `1px solid ${dark
                            ? "rgba(201,168,76,0.06)"
                            : "rgba(26,18,8,0.07)"
                            }`,
                        padding: "32px 0",
                    }}
                >
                    <div
                        style={{
                            fontFamily: "'Noto Serif JP'",
                            fontWeight: 300,
                            fontSize: 28,
                            color: hov
                                ? "#c0392b"
                                : dark
                                    ? "rgba(201,168,76,0.18)"
                                    : "rgba(26,18,8,0.28)",
                            transition: "color 0.35s,transform 0.4s",
                            transform: hov ? "scale(1.18)" : "scale(1)",
                        }}
                    >
                        {w.no}
                    </div>
                    <div
                        style={{
                            fontFamily: "'DM Mono'",
                            fontSize: 9,
                            letterSpacing: 2,
                            color: c.muted,
                            marginTop: 4,
                        }}
                    >
                        {w.en}
                    </div>
                </div>
                <div style={{ padding: "32px 36px" }}>
                    <div
                        style={{
                            fontFamily: "'DM Mono'",
                            fontSize: 9,
                            letterSpacing: 4,
                            color: c.muted,
                            marginBottom: 8,
                        }}
                    >
                        {w.sub} · {w.year}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: 12,
                            marginBottom: 8,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'Cormorant Garamond'",
                                fontSize: 30,
                                fontWeight: 600,
                                letterSpacing: -0.5,
                                color: c.text,
                            }}
                        >
                            {w.title}
                        </span>
                        <span
                            style={{
                                fontFamily: "'Noto Serif JP'",
                                fontWeight: 200,
                                fontSize: 18,
                                color: hov
                                    ? "rgba(192,57,43,0.5)"
                                    : dark
                                        ? "rgba(201,168,76,0.13)"
                                        : "rgba(26,18,8,0.28)",
                                transition: "color 0.4s",
                            }}
                        >
                            {w.kanji}
                        </span>
                    </div>
                    <div
                        style={{
                            fontFamily: "'Cormorant Garamond'",
                            fontSize: 15,
                            fontStyle: "italic",
                            color: c.sub,
                            lineHeight: 1.8,
                            maxWidth: 480,
                            marginBottom: 14,
                        }}
                    >
                        {w.desc}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 7,
                            flexWrap: "wrap",
                        }}
                    >
                        {w.tags.map((t) => (
                            <span
                                key={t}
                                className="stag"
                                style={
                                    hov
                                        ? {
                                            borderColor: "rgba(192,57,43,0.28)",
                                            color: "rgba(192,57,43,0.7)",
                                        }
                                        : {}
                                }
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        padding: "32px 36px",
                        borderLeft: `1px solid ${dark
                            ? "rgba(201,168,76,0.06)"
                            : "rgba(26,18,8,0.07)"
                            }`,
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Cormorant Garamond'",
                            fontSize: 22,
                            color: hov
                                ? "#c0392b"
                                : dark
                                    ? "rgba(201,168,76,0.18)"
                                    : "rgba(26,18,8,0.15)",
                            transition: "all 0.35s",
                            transform: hov ? "translateX(8px)" : "translateX(0)",
                            display: "block",
                        }}
                    >
                        →
                    </span>
                </div>
            </div>
        </Wipe>
    );
}

export default function Works({ dark }: { dark: boolean }) {
    return (
        <section
            id="works"
            style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "0 48px 90px",
                position: "relative",
                zIndex: 10,
            }}
        >
            <ToriiDivider label="作品集 · SELECTED WORKS" dark={dark} />
            {WORKS.map((w, i) => (
                <WorkRow key={w.no} w={w} i={i} dark={dark} />
            ))}
        </section>
    );
}
