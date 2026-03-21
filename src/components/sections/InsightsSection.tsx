"use client";

import { useState, useEffect, useRef } from "react";
import Wipe from "@/components/ui/Wipe";
import ToriiDivider from "@/components/ui/ToriiDivider";
import { INSIGHTS } from "@/data/insights";

function InsightCard({ ins, idx, dark }: { ins: any; idx: number; dark: boolean }) {
    const [hov, setHov] = useState(false);
    const [vis, setVis] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.unobserve(e.target); }
        }, { threshold: 0.15 });

        if (currentRef) obs.observe(currentRef);
        return () => {
            if (currentRef) obs.unobserve(currentRef);
            obs.disconnect();
        };
    }, []);

    return (
        <div ref={ref} className="insight-card"
            style={{
                "--ic": ins.color,
                "--ig": ins.glow,
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0) scale(1)" : `translateY(40px) scale(0.95)`,
                transition: `all 0.7s ${idx * 0.12}s cubic-bezier(0.22,1,0.36,1)`,
                background: dark ? "rgba(20, 15, 10, 0.4)" : "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${dark ? `${ins.color}33` : `${ins.color}44`}`,
                boxShadow: hov
                    ? `0 0 0 1px ${ins.color}66 inset, 0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${ins.glow}`
                    : `0 8px 30px rgba(0,0,0,0.25)`,
            } as React.CSSProperties}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}>

            {/* Matrix texture overlay */}
            <div style={{
                position: "absolute", inset: 0,
                background: `repeating-linear-gradient(0deg,transparent 0px,transparent 3px,${ins.color}04 3px,${ins.color}04 4px),repeating-linear-gradient(90deg,transparent 0px,transparent 3px,${ins.color}03 3px,${ins.color}03 4px)`,
                opacity: hov ? 1 : 0.4,
                transition: "opacity 0.5s",
                pointerEvents: "none",
            }} />

            {/* Glow halo on hover */}
            <div style={{
                position: "absolute", inset: 0,
                background: `radial-gradient(ellipse at 50% 20%, ${ins.glow} 0%, transparent 65%)`,
                opacity: hov ? 0.18 : 0,
                transition: "opacity 0.6s",
                pointerEvents: "none",
            }} />

            {/* Kanji watermark */}
            <div style={{
                position: "absolute", right: 14, bottom: 14,
                fontFamily: "'Noto Serif JP'", fontWeight: 900, fontSize: 80,
                color: ins.color, opacity: hov ? 0.12 : 0.06,
                lineHeight: 1, userSelect: "none",
                transition: "opacity 0.5s,transform 0.5s",
                transform: hov ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
            }}>{ins.jp}</div>

            <div style={{ position: "relative", zIndex: 2, padding: "28px 26px 24px" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                    <div>
                        <div style={{
                            fontFamily: "'DM Mono'", fontSize: 8, letterSpacing: 4,
                            color: ins.color, marginBottom: 5,
                            textShadow: `0 0 14px ${ins.glow}`,
                        }}>{ins.en}</div>
                        <div style={{
                            fontFamily: "'Cormorant Garamond'", fontSize: 20, fontWeight: 600,
                            color: dark ? "#e8e0d0" : "#0f0a04", lineHeight: 1.2,
                        }}>{ins.category}</div>
                    </div>
                    {/* Animated seal */}
                    <svg width="38" height="38" viewBox="0 0 38 38" style={{ flexShrink: 0, marginTop: 2 }}>
                        <circle cx="19" cy="19" r="16" fill="none" stroke={ins.color} strokeWidth="0.8"
                            strokeDasharray="5 4" opacity="0.45"
                            style={{ animation: hov ? "sealSpin 6s linear infinite" : "none", transformOrigin: "19px 19px" }} />
                        <circle cx="19" cy="19" r="10" fill={`${ins.color}18`} stroke={ins.color} strokeWidth="1.2" opacity="0.7" />
                        <text x="19" y="23" textAnchor="middle" fontFamily="Noto Serif JP" fontWeight="700"
                            fontSize="11" fill={ins.color}>{ins.jp}</text>
                    </svg>
                </div>

                {/* Brush stroke separator */}
                <div style={{
                    height: 1.5, marginBottom: 16, borderRadius: 2,
                    background: `linear-gradient(90deg,${ins.color},${ins.color}44,transparent)`,
                    width: hov ? "100%" : "55%",
                    transition: "width 0.6s cubic-bezier(0.22,1,0.36,1)",
                }} />

                {/* Scroll wisdom */}
                <div style={{
                    fontFamily: "'Cormorant Garamond'", fontSize: 13, fontStyle: "italic",
                    color: ins.color, lineHeight: 1.7, marginBottom: 14, opacity: 0.85,
                    borderLeft: `2px solid ${ins.color}55`, paddingLeft: 10,
                }}>"{ins.scroll}"</div>

                {/* Main insight */}
                <div style={{
                    fontFamily: "'Cormorant Garamond'", fontSize: 14, fontStyle: "italic",
                    color: dark ? "rgba(220,208,188,0.78)" : "#0f0a04",
                    lineHeight: 1.85, marginBottom: 18,
                }}>{ins.insight}</div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {ins.tags.map((t: string, i: number) => (
                        <span key={t} style={{
                            fontFamily: "'DM Mono'", fontSize: 8, letterSpacing: 1.5,
                            padding: "3px 8px",
                            border: `1px solid ${ins.color}${hov ? "55" : "33"}`,
                            color: hov ? ins.color : (dark ? "rgba(220,208,188,0.6)" : "#5c1002"),
                            transition: `all 0.3s ${i * 0.04}s`,
                            background: `${ins.color}${hov ? "0D" : "06"}`,
                        }}>{t}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function InsightsSection({ dark }: { dark: boolean }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(true);

    const updateArrows = () => {
        const el = scrollRef.current; if (!el) return;
        setCanLeft(el.scrollLeft > 10);
        setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    };

    const scroll = (dir: number) => {
        scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
    };

    const btnBg = dark ? "rgba(201,168,76,0.12)" : "rgba(192,57,43,0.09)";
    const btnBd = dark ? "rgba(201,168,76,0.28)" : "rgba(192,57,43,0.28)";
    const btnC = dark ? "#c9a84c" : "#c0392b";

    return (
        <section id="insights" style={{ padding: "80px 0", position: "relative", zIndex: 10 }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>
                <ToriiDivider label="心法 · CORE INSIGHTS" dark={dark} />

                {/* subtitle */}
                <Wipe style={{ textAlign: "center", marginBottom: 42 }}>
                    <div style={{
                        fontFamily: "'Cormorant Garamond'", fontSize: 17, fontStyle: "italic",
                        color: dark ? "rgba(220,208,188,0.62)" : "#5c1002",
                        lineHeight: 1.8, maxWidth: 560, margin: "0 auto",
                    }}>
                        Field notes forged in real projects. Each discipline carries a lesson learned under pressure — not theory, but scar tissue.
                    </div>
                    <div style={{ fontFamily: "'Noto Serif JP'", fontWeight: 200, fontSize: 11, color: dark ? "rgba(201,168,76,0.35)" : "rgba(165,30,8,0.4)", letterSpacing: 7, marginTop: 12 }}>
                        実戦の知恵 · Wisdom of the Field
                    </div>
                </Wipe>
            </div>

            {/* Carousel container */}
            <div style={{ position: "relative" }}>
                {/* Left fade */}
                <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 5, pointerEvents: "none",
                    background: `linear-gradient(to right, ${dark ? "rgba(7,6,12,0.8)" : "rgba(240,232,216,0.8)"}, transparent)`,
                    opacity: canLeft ? 1 : 0, transition: "opacity 0.3s",
                }} />
                {/* Right fade */}
                <div style={{
                    position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 5, pointerEvents: "none",
                    background: `linear-gradient(to left, ${dark ? "rgba(7,6,12,0.8)" : "rgba(240,232,216,0.8)"}, transparent)`,
                    opacity: canRight ? 1 : 0, transition: "opacity 0.3s",
                }} />

                {/* Scroll track */}
                <div ref={scrollRef} onScroll={updateArrows} style={{
                    display: "flex", gap: 22,
                    overflowX: "auto", overflowY: "visible",
                    padding: "16px 48px 28px",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}>
                    {INSIGHTS.map((ins, i) => (
                        <InsightCard key={ins.en} ins={ins} idx={i} dark={dark} />
                    ))}
                    {/* Spacer at end */}
                    <div style={{ width: 24, flexShrink: 0 }} />
                </div>

                {/* Navigation arrows */}
                <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 16, padding: "0 48px" }}>
                    {["←", "→"].map((arrow, i) => (
                        <button key={arrow} onClick={() => scroll(i === 0 ? -1 : 1)} style={{
                            width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center",
                            background: btnBg, border: `1px solid ${btnBd}`,
                            color: i === 0 ? (canLeft ? btnC : "rgba(120,100,80,0.3)") : (canRight ? btnC : "rgba(120,100,80,0.3)"),
                            fontFamily: "'Cormorant Garamond'", fontSize: 18, cursor: "none",
                            transition: "all 0.3s",
                            opacity: i === 0 ? (canLeft ? 1 : 0.3) : (canRight ? 1 : 0.3),
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = dark ? "rgba(201,168,76,0.22)" : "rgba(192,57,43,0.16)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = btnBg; }}>{arrow}</button>
                    ))}
                </div>
            </div>
        </section>
    );
}
