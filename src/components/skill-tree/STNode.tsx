"use client";

import type { TreeNode } from "@/types";

export default function STNode({
    node,
    state,
    color,
    glow,
    onClick,
    ak,
    dark,
}: {
    node: TreeNode;
    state: string;
    color: string;
    glow: string;
    onClick: () => void;
    ak: number;
    dark: boolean;
}) {
    const R = 24;
    const locked = state === "locked",
        sel = state === "selected",
        mastered = state === "mastered";
    const fill = sel
        ? "#FFFFFF"
        : mastered
            ? color
            : dark
                ? "#090A16"
                : "rgba(220,210,196,0.6)";
    const stroke = locked
        ? dark
            ? "rgba(255,255,255,0.08)"
            : "rgba(26,18,8,0.15)"
        : sel
            ? "#FFFFFF"
            : color;
    const textC =
        sel || mastered
            ? "#050609"
            : dark
                ? "rgba(255,255,255,0.18)"
                : "rgba(26,18,8,0.2)";

    return (
        <g
            transform={`translate(${node.x},${node.y})`}
            onClick={onClick}
            style={{ cursor: locked ? "default" : "pointer" }}
        >
            {!locked &&
                node.tier >= 2 &&
                [45, 135, 225, 315].map((a) => {
                    const r2 = R + 13,
                        rad = (a * Math.PI) / 180;
                    return (
                        <polygon
                            key={a}
                            points={`${r2 * Math.cos(rad)},${r2 * Math.sin(rad) - 3} ${r2 * Math.cos(rad) + 3
                                },${r2 * Math.sin(rad)} ${r2 * Math.cos(rad)},${r2 * Math.sin(rad) + 3
                                } ${r2 * Math.cos(rad) - 3},${r2 * Math.sin(rad)}`}
                            fill={color}
                            opacity="0.55"
                        />
                    );
                })}
            {mastered && !sel && (
                <circle
                    r={R + 7}
                    fill="none"
                    stroke={color}
                    strokeWidth="0.7"
                    strokeDasharray="5 7"
                    opacity="0.35"
                    style={
                        {
                            animation: "stGoldPulse 2.8s ease-in-out infinite",
                            "--gc": glow,
                        } as React.CSSProperties
                    }
                />
            )}
            {sel && (
                <>
                    <circle
                        r={R + 8}
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="1.3"
                        strokeDasharray="7 5"
                        opacity="0.8"
                        style={{ animation: "stRotate 2.5s linear infinite" }}
                    />
                    <circle
                        r={R + 15}
                        fill="none"
                        stroke={color}
                        strokeWidth="0.6"
                        strokeDasharray="3 7"
                        opacity="0.45"
                        style={{
                            animation: "stRotate 5s linear infinite reverse",
                        }}
                    />
                </>
            )}
            <circle
                key={`n-${ak}-${node.id}`}
                r={R}
                fill={fill}
                stroke={stroke}
                strokeWidth={sel ? 2.5 : 1.6}
                style={{
                    animation:
                        mastered || sel
                            ? "stUnlock 0.6s cubic-bezier(.34,1.56,.64,1) both"
                            : "none",
                    filter: !locked
                        ? `drop-shadow(0 0 ${sel ? 12 : 4}px ${color})`
                        : "none",
                    transition: "fill 0.5s,stroke 0.4s",
                }}
            />
            {!locked && (
                <circle
                    r={R - 7}
                    fill="none"
                    stroke={sel ? "rgba(0,0,0,0.18)" : `${color}44`}
                    strokeWidth="0.7"
                />
            )}
            <text
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={node.jp.length > 1 ? 9 : 13}
                fontFamily="Noto Serif JP"
                fontWeight="700"
                fill={textC}
                style={{ transition: "fill 0.4s", pointerEvents: "none" }}
            >
                {node.jp}
            </text>
            <text
                textAnchor="middle"
                y={R + 14}
                fontSize="7.5"
                fontFamily="Cinzel,DM Mono,monospace"
                fontWeight="600"
                letterSpacing="0.8"
                fill={
                    locked
                        ? dark
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(26,18,8,0.15)"
                        : sel
                            ? "#FFFFFF"
                            : color
                }
                style={{ transition: "fill 0.4s", pointerEvents: "none" }}
            >
                {node.label}
            </text>
            {!locked && (
                <g transform={`translate(0,${R + 26})`}>
                    {[0, 1, 2, 3].map((t) => (
                        <circle
                            key={t}
                            cx={(t - 1.5) * 7}
                            cy="0"
                            r="1.7"
                            fill={
                                t <= node.tier
                                    ? color
                                    : dark
                                        ? "rgba(255,255,255,0.09)"
                                        : "rgba(26,18,8,0.12)"
                            }
                            opacity={t <= node.tier ? 0.85 : 0.3}
                        />
                    ))}
                </g>
            )}
        </g>
    );
}
