"use client";

import Wipe from "@/components/ui/Wipe";

interface FooterProps {
    dark: boolean;
    onCloseScrollAction: () => void;
}

export default function Footer({ dark, onCloseScrollAction }: FooterProps) {
    const c = {
        sub: dark ? "rgba(235,225,210,0.72)" : "#0f0a04",
    };

    return (
        <footer
            style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "56px 48px 44px",
                position: "relative",
                zIndex: 10,
            }}
        >
            <Wipe style={{ textAlign: "center" }}>
                <svg
                    viewBox="0 0 220 14"
                    width="220"
                    height="14"
                    style={{ marginBottom: 24, opacity: 0.15 }}
                >
                    <path
                        d="M0 7 Q27 0 55 7 T110 7 T165 7 T220 7"
                        fill="none"
                        stroke="#c9a84c"
                        strokeWidth="1.5"
                        strokeDasharray="400"
                        strokeDashoffset="400"
                        style={{ animation: "brushIn 2.2s ease forwards" }}
                    />
                </svg>
                <div
                    style={{
                        fontFamily: "'Noto Serif JP'",
                        fontWeight: 200,
                        fontSize: 21,
                        color: dark
                            ? "rgba(201,168,76,0.16)"
                            : "rgba(26,18,8,0.18)",
                        letterSpacing: 14,
                        marginBottom: 12,
                    }}
                >
                    一期一会
                </div>
                <div
                    style={{
                        fontFamily: "'Cormorant Garamond'",
                        fontStyle: "italic",
                        fontSize: 14,
                        color: c.sub,
                        letterSpacing: 1.5,
                        marginBottom: 34,
                    }}
                >
                    &ldquo;One time, one meeting.&rdquo; — Every project is a unique
                    encounter.
                </div>
                <div
                    title="巻物を閉じる · Close the Scroll"
                    onClick={onCloseScrollAction}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        border: "2px solid rgba(192,57,43,0.2)",
                        fontFamily: "'Noto Serif JP'",
                        fontSize: 18,
                        color: "rgba(192,57,43,0.26)",
                        cursor: "none",
                        transition: "all 0.45s",
                        position: "relative",
                    }}
                    onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "rgba(192,57,43,0.62)";
                        el.style.color = "rgba(192,57,43,0.72)";
                        el.style.transform = "rotate(15deg) scale(1.12)";
                        el.style.boxShadow = "0 0 22px rgba(192,57,43,0.28)";
                    }}
                    onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "rgba(192,57,43,0.2)";
                        el.style.color = "rgba(192,57,43,0.26)";
                        el.style.transform = "rotate(0) scale(1)";
                        el.style.boxShadow = "none";
                    }}
                >
                    V
                </div>
                <div
                    style={{
                        fontFamily:
                            "'Shippori Mincho B1','Zen Old Mincho',serif",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: "0.28em",
                        color: dark
                            ? "rgba(240,232,218,0.55)"
                            : "#6b1404",
                        marginTop: 28,
                    }}
                >
                    © 二〇二四 · RISHI VEDULA · CRAFTED WITH PRECISION
                </div>
                <div
                    style={{
                        marginTop: 12,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 5,
                    }}
                >
                    <div
                        style={{
                            fontFamily: "'Noto Serif JP'",
                            fontWeight: 300,
                            fontSize: 13,
                            letterSpacing: 5,
                            background:
                                "linear-gradient(160deg,#c8a84b 0%,#f0d080 30%,#fff8d0 50%,#e0bb55 70%,#c8a84b 100%)",
                            backgroundSize: "300% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            animation: "shimmer 4s linear infinite",
                            filter: "drop-shadow(0 0 10px rgba(201,168,76,0.4))",
                        }}
                    >
                        技を磨き、道を刻む
                    </div>
                    <div
                        style={{
                            fontFamily: "'DM Mono'",
                            fontSize: 8,
                            letterSpacing: 3,
                            color: dark
                                ? "rgba(201,168,76,0.45)"
                                : "#5c1002",
                        }}
                    >
                        &ldquo;Hone the craft, carve the path&rdquo; · 職人の誓い
                    </div>
                </div>
            </Wipe>
        </footer>
    );
}
