"use client";

import type { TreeNode, Tree } from "@/types";

export default function STDetail({
    node,
    tree,
    onClose,
    dark,
}: {
    node: TreeNode;
    tree: Tree;
    onClose: () => void;
    dark: boolean;
}) {
    const { color, glow } = tree;

    return (
        <div
            style={{
                width: "260px",
                flexShrink: 0,
                position: "relative",
                zIndex: 10,
                background: dark
                    ? "linear-gradient(160deg,#0C0D1A 0%,#060710 100%)"
                    : "linear-gradient(160deg,rgba(235,225,208,0.97) 0%,rgba(245,238,224,0.97) 100%)",
                borderLeft: `1px solid ${color}44`,
                display: "flex",
                flexDirection: "column",
                animation: "stPanelIn 0.4s cubic-bezier(.4,0,.2,1) both",
            }}
        >
            <div
                style={{
                    height: "2px",
                    background: `linear-gradient(90deg,${color},${color}44,transparent)`,
                    flexShrink: 0,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 12,
                    right: 6,
                    fontFamily: "Noto Serif JP",
                    fontSize: "110px",
                    fontWeight: "700",
                    color: `${color}08`,
                    pointerEvents: "none",
                    lineHeight: 1,
                    userSelect: "none",
                }}
            >
                {node.jp}
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: "auto",
                    padding: "18px 18px 14px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 16,
                    }}
                >
                    <svg width="90" height="90" viewBox="-45 -45 90 90">
                        <defs>
                            <filter id="pGl">
                                <feGaussianBlur stdDeviation="4" result="b" />
                                <feMerge>
                                    <feMergeNode in="b" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {[0, 60, 120, 180, 240, 300].map((a) => {
                            const rad = (a * Math.PI) / 180,
                                r2 = 38;
                            return (
                                <polygon
                                    key={a}
                                    points={`${r2 * Math.cos(rad)},${r2 * Math.sin(rad) - 2.5} ${r2 * Math.cos(rad) + 2.5
                                        },${r2 * Math.sin(rad)} ${r2 * Math.cos(rad)},${r2 * Math.sin(rad) + 2.5
                                        } ${r2 * Math.cos(rad) - 2.5},${r2 * Math.sin(rad)}`}
                                    fill={color}
                                    opacity="0.45"
                                />
                            );
                        })}
                        <circle
                            r="32"
                            fill="none"
                            stroke={color}
                            strokeWidth="0.7"
                            strokeDasharray="4 6"
                            opacity="0.4"
                            style={{ animation: "stRotate 4s linear infinite" }}
                        />
                        <circle
                            r="24"
                            fill={color}
                            stroke={color}
                            strokeWidth="1.2"
                            style={{ filter: `drop-shadow(0 0 10px ${color})` }}
                        />
                        <text
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontFamily="Noto Serif JP"
                            fontWeight="700"
                            fontSize={node.jp.length > 1 ? 12 : 16}
                            fill="#050609"
                        >
                            {node.jp}
                        </text>
                    </svg>
                </div>
                <div style={{ textAlign: "center", marginBottom: 14 }}>
                    <div
                        style={{
                            fontFamily: "'Zen Old Mincho','Noto Serif JP',serif",
                            fontSize: 16,
                            fontWeight: 700,
                            letterSpacing: 2,
                            background: `linear-gradient(90deg,${color},#fff,${color}) 200% center / 200%`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            animation: "stShimmerNode 3s linear infinite",
                        }}
                    >
                        {node.label}
                    </div>
                    <div
                        style={{
                            fontFamily: "'DM Mono',monospace",
                            fontSize: 9,
                            color: dark
                                ? "rgba(255,255,255,0.3)"
                                : "rgba(26,18,8,0.4)",
                            marginTop: 4,
                            letterSpacing: 3,
                        }}
                    >
                        {node.jp} · TIER {node.tier}
                    </div>
                </div>
                <div
                    style={{
                        height: 1,
                        background: `linear-gradient(90deg,transparent,${color}55,transparent)`,
                        margin: "0 0 14px",
                    }}
                />
                <p
                    style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: 13,
                        fontStyle: "italic",
                        lineHeight: 1.9,
                        color: dark
                            ? "rgba(220,205,185,0.8)"
                            : "rgba(40,20,5,0.75)",
                        marginBottom: 18,
                    }}
                >
                    {node.desc}
                </p>
                <div style={{ marginBottom: 14 }}>
                    <div
                        style={{
                            fontFamily: "'DM Mono',monospace",
                            fontSize: 7.5,
                            letterSpacing: 2.5,
                            color: dark
                                ? "rgba(255,255,255,0.22)"
                                : "rgba(26,18,8,0.35)",
                            marginBottom: 7,
                        }}
                    >
                        MASTERY RANK
                    </div>
                    <div style={{ display: "flex", gap: 4 }}>
                        {["I", "II", "III", "IV"].map((r, i) => (
                            <div
                                key={r}
                                style={{
                                    flex: 1,
                                    borderTop: `2px solid ${i <= node.tier
                                            ? color
                                            : dark
                                                ? "rgba(255,255,255,0.07)"
                                                : "rgba(26,18,8,0.12)"
                                        }`,
                                    padding: "3px 0 0",
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "'DM Mono',monospace",
                                        fontSize: 6.5,
                                        textAlign: "center",
                                        color:
                                            i <= node.tier
                                                ? color
                                                : dark
                                                    ? "rgba(255,255,255,0.18)"
                                                    : "rgba(26,18,8,0.25)",
                                    }}
                                >
                                    {r}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    style={{
                        border: `1px solid ${color}44`,
                        padding: "9px 12px",
                        background: `${color}0D`,
                        display: "flex",
                        alignItems: "center",
                        gap: 9,
                    }}
                >
                    <div
                        style={
                            {
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: color,
                                flexShrink: 0,
                                boxShadow: `0 0 10px ${color}`,
                                animation: "stGoldPulse 2.2s ease-in-out infinite",
                                "--gc": glow,
                            } as React.CSSProperties
                        }
                    />
                    <div>
                        <div
                            style={{
                                fontFamily: "'DM Mono',monospace",
                                fontSize: 8,
                                letterSpacing: 2,
                                color,
                            }}
                        >
                            MASTERED
                        </div>
                        <div
                            style={{
                                fontFamily: "Noto Serif JP",
                                fontSize: 9,
                                color: dark
                                    ? "rgba(255,255,255,0.28)"
                                    : "rgba(26,18,8,0.4)",
                                marginTop: 1,
                            }}
                        >
                            Skill fully acquired
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={onClose}
                style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 24,
                    height: 24,
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.3)",
                    fontSize: 11,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = color;
                    el.style.color = color;
                }}
                onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.3)";
                }}
            >
                ✕
            </button>
        </div>
    );
}
