"use client";

import { useState } from "react";
import { SOCIALS } from "@/data";
import Wipe from "@/components/ui/Wipe";
import ToriiDivider from "@/components/ui/ToriiDivider";
import SocialLink from "@/components/ui/SocialLink";

export default function Contact({ dark }: { dark: boolean }) {
    const [formSent, setFormSent] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleDispatch = () => {
        const mailto = `mailto:rishivedula93@gmail.com?subject=${encodeURIComponent(
            subject || "Alliance Proposal"
        )}&body=${encodeURIComponent(
            message
                ? `From: ${name} (${email})\n\n${message}`
                : "Greetings Rishi, I visited your portfolio and would like to connect."
        )}`;
        window.location.href = mailto;
        setFormSent(true);
    };

    const c = {
        paper: dark ? "#e8e0d0" : "#1a1208",
        muted: dark ? "rgba(240,232,218,0.82)" : "#6b1404",
        faint: dark ? "rgba(220,210,195,0.65)" : "#5c1002",
        line: dark ? "rgba(201,168,76,0.07)" : "rgba(26,18,8,0.12)",
        sub: dark ? "rgba(235,225,210,0.72)" : "#0f0a04",
        border: dark ? "rgba(201,168,76,0.07)" : "rgba(26,18,8,0.14)",
    };

    return (
        <section
            id="contact"
            style={{
                borderTop: `1px solid ${c.border}`,
                padding: "80px 0",
                background: dark ? "rgba(20, 15, 10, 0.2)" : "rgba(255, 250, 240, 0.2)",
                backdropFilter: "blur(4px)",
            }}
        >
            <div style={{ maxWidth: 660, margin: "0 auto", padding: "0 48px" }}>
                <ToriiDivider label="書状 · WAR MISSIVE" dark={dark} />
                <Wipe style={{ textAlign: "center", marginBottom: 52 }}>
                    <div style={{ marginBottom: 18 }}>
                        <svg
                            viewBox="0 0 60 60"
                            width="52"
                            height="52"
                            style={{ opacity: 0.22 }}
                        >
                            <circle
                                cx="30"
                                cy="30"
                                r="27"
                                fill="none"
                                stroke="#c9a84c"
                                strokeWidth="1.2"
                            />
                            <circle
                                cx="30"
                                cy="30"
                                r="20"
                                fill="none"
                                stroke="#c9a84c"
                                strokeWidth="0.6"
                                strokeDasharray="3 5"
                            />
                            {[0, 60, 120, 180, 240, 300].map((a) => {
                                const r = ((a - 90) * Math.PI) / 180;
                                return (
                                    <line
                                        key={a}
                                        x1={30 + 20 * Math.cos(r)}
                                        y1={30 + 20 * Math.sin(r)}
                                        x2={30 + 27 * Math.cos(r)}
                                        y2={30 + 27 * Math.sin(r)}
                                        stroke="#c9a84c"
                                        strokeWidth="1.4"
                                    />
                                );
                            })}
                            <text
                                x="30"
                                y="35"
                                textAnchor="middle"
                                fontFamily="Noto Serif JP"
                                fontSize="16"
                                fontWeight="700"
                                fill="#c9a84c"
                            >
                                文
                            </text>
                        </svg>
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Cormorant Garamond'",
                            fontWeight: 300,
                            fontSize: "clamp(26px,3.8vw,42px)",
                            color: c.paper,
                            lineHeight: 1.1,
                            marginBottom: 14,
                        }}
                    >
                        Unfurl Your
                        <br />
                        <em style={{ fontStyle: "italic", fontWeight: 600 }}>
                            War Scroll.
                        </em>
                    </h2>
                    <p
                        style={{
                            fontFamily: "'Cormorant Garamond'",
                            fontSize: 16,
                            fontStyle: "italic",
                            color: c.sub,
                            lineHeight: 1.9,
                            maxWidth: 420,
                            margin: "0 auto",
                        }}
                    >
                        In the age of Sengoku, alliances were forged by ink and seal.
                        <br />
                        Set your terms upon parchment — I await your summons.
                    </p>
                    <div
                        style={{
                            fontFamily: "'Noto Serif JP'",
                            fontWeight: 200,
                            fontSize: 11,
                            color: dark
                                ? "rgba(201,168,76,0.35)"
                                : "rgba(165,30,8,0.38)",
                            letterSpacing: 8,
                            marginTop: 16,
                        }}
                    >
                        戦国時代の書状
                    </div>
                </Wipe>
                {!formSent ? (
                    <Wipe
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 22,
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 20,
                            }}
                        >
                            <input
                                suppressHydrationWarning
                                className="jinput"
                                placeholder="Your Name · 氏名"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                suppressHydrationWarning
                                className="jinput"
                                placeholder="Email Address · 書状の宛先"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <input
                            suppressHydrationWarning
                            className="jinput"
                            placeholder="Mission / Alliance Proposal · 件名"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <textarea
                            suppressHydrationWarning
                            className="jinput"
                            rows={5}
                            placeholder="Lay out your terms in full. A warrior speaks plainly..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            style={{
                                background: "#c0392b",
                                color: "#f0e8d8",
                                border: "none",
                                padding: "15px 34px",
                                fontFamily: "'DM Mono'",
                                fontSize: 11,
                                letterSpacing: 4,
                                cursor: "none",
                                transition: "background 0.3s,box-shadow 0.3s",
                                width: "100%",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.background = "#a02820";
                                el.style.boxShadow = "0 8px 30px rgba(192,57,43,0.4)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.background = "#c0392b";
                                el.style.boxShadow = "none";
                            }}
                            onClick={handleDispatch}
                        >
                            刀 SEAL &amp; DISPATCH THE SCROLL
                        </button>
                    </Wipe>
                ) : (
                    <Wipe style={{ textAlign: "center", padding: "48px 0" }}>
                        <div
                            style={{
                                fontFamily: "'Noto Serif JP'",
                                fontWeight: 200,
                                fontSize: 40,
                                color: "#c0392b",
                                marginBottom: 16,
                                animation:
                                    "inkSplash 0.6s cubic-bezier(0.34,1.56,0.64,1) both",
                            }}
                        >
                            印
                        </div>
                        <div
                            style={{
                                fontFamily: "'Cormorant Garamond'",
                                fontSize: 22,
                                fontStyle: "italic",
                                color: c.sub,
                                marginBottom: 6,
                            }}
                        >
                            Your war scroll has been sealed.
                        </div>
                        <div
                            style={{
                                fontFamily: "'Cormorant Garamond'",
                                fontSize: 15,
                                fontStyle: "italic",
                                color: c.faint,
                            }}
                        >
                            The courier rides at dawn.
                        </div>
                        <div
                            style={{
                                fontFamily: "'DM Mono'",
                                fontSize: 10,
                                letterSpacing: 3,
                                color: dark
                                    ? "rgba(240,232,218,0.65)"
                                    : "rgba(165,30,8,0.7)",
                                marginTop: 12,
                            }}
                        >
                            返答は夜明けに · RESPONSE BEFORE DAWN
                        </div>
                    </Wipe>
                )}
                <Wipe
                    style={{
                        marginTop: 52,
                        paddingTop: 42,
                        borderTop: `1px solid ${c.border}`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {/* Section Heading */}
                    <div
                        style={{
                            fontFamily: "'Cormorant Garamond'",
                            fontSize: 22,
                            fontWeight: 600,
                            color: c.paper,
                            marginBottom: 28,
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                        }}
                    >
                        <span style={{ fontSize: 18, color: "#c0392b" }}>⚔</span>
                        Or Connect Directly
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: 16,
                        }}
                    >
                        {SOCIALS.map((social) => (
                            <SocialLink key={social.label} social={social} dark={dark} />
                        ))}
                    </div>
                </Wipe>
            </div>
        </section>
    );
}
