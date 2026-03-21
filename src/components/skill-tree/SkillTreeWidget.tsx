"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { SparkItem } from "@/types";
import { TREES } from "@/data";
import ConstellationBg from "@/components/effects/ConstellationBg";
import STEdge from "./STEdge";
import STNode from "./STNode";
import STSpark from "./STSpark";
import STDetail from "./STDetail";

export default function SkillTreeWidget({ dark }: { dark: boolean }) {
    const [activeIdx, setActiveIdx] = useState(0);
    const [unlocked, setUnlocked] = useState<Set<string>>(new Set());
    const [selected, setSelected] = useState<string | null>(null);
    const [sparks, setSparks] = useState<SparkItem[]>([]);
    const [ak, setAk] = useState(0);
    const [isAnim, setIsAnim] = useState(false);
    const [constSeed, setConstSeed] = useState(1);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    const tree = TREES[activeIdx];

    const playSequence = useCallback(
        (treeData: typeof tree, newAk: number) => {
            timers.current.forEach(clearTimeout);
            timers.current = [];
            setUnlocked(new Set());
            setSelected(null);
            setSparks([]);
            setIsAnim(true);
            const sorted = [...treeData.nodes].sort((a, b) => a.tier - b.tier);
            let delay = 300;
            sorted.forEach((node, i) => {
                if (i > 0 && sorted[i].tier !== sorted[i - 1].tier) delay += 100;
                const t = setTimeout(() => {
                    setUnlocked((prev) => new Set([...prev, node.id]));
                    const sid = `${node.id}-${Date.now()}`;
                    setSparks((prev) => [...prev, { id: sid, x: node.x, y: node.y }]);
                    const ct = setTimeout(
                        () => setSparks((prev) => prev.filter((s) => s.id !== sid)),
                        750
                    );
                    timers.current.push(ct);
                }, delay);
                timers.current.push(t);
                delay += 200 + node.tier * 20;
            });
            const dt = setTimeout(() => setIsAnim(false), delay + 200);
            timers.current.push(dt);
        },
        []
    );

    useEffect(() => {
        const newAk = ak + 1;
        setAk(newAk);
        setConstSeed((s) => s + Math.floor(Math.random() * 1000) + 1);
        playSequence(TREES[activeIdx], newAk);
        return () => timers.current.forEach(clearTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIdx]);

    const replay = () => {
        const newAk = ak + 1;
        setAk(newAk);
        setConstSeed((s) => s + Math.floor(Math.random() * 1000) + 1);
        playSequence(tree, newAk);
    };

    const switchTree = (idx: number) => {
        if (idx === activeIdx) {
            replay();
            return;
        }
        setActiveIdx(idx);
    };

    const getState = (node: { id: string }): string => {
        if (!unlocked.has(node.id)) return "locked";
        if (selected === node.id) return "selected";
        return "mastered";
    };

    const masterCount = tree.nodes.filter((n) => unlocked.has(n.id)).length;
    const pct = Math.round((masterCount / tree.nodes.length) * 100);
    const bg = dark ? "rgba(7,6,12,0.4)" : "rgba(240,232,216,0.4)";
    const catBg = dark ? "rgba(0,0,0,0.18)" : "rgba(200,188,168,0.25)";

    return (
        <div
            style={{
                width: "100%",
                height: "560px",
                background: bg,
                backdropFilter: "blur(12px)",
                border: `1px solid ${tree.color}22`,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Noto Serif JP',serif",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: 2,
                    background:
                        "linear-gradient(transparent,rgba(255,255,255,0.012),transparent)",
                    animation: "stScanline 8s linear infinite",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background: `radial-gradient(ellipse at 30% 40%,${tree.color}0A 0%,transparent 65%)`,
                    transition: "background 0.8s",
                }}
            />

            {/* Header */}
            <div
                style={{
                    height: 52,
                    flexShrink: 0,
                    zIndex: 5,
                    position: "relative",
                    borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(26,18,8,0.08)"
                        }`,
                    background: dark
                        ? "rgba(0,0,0,0.2)"
                        : "rgba(230,220,204,0.35)",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            border: `1.5px solid ${tree.color}66`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: `${tree.color}12`,
                            boxShadow: `0 0 14px ${tree.glow}`,
                            transition: "all 0.5s",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "Noto Serif JP",
                                fontSize: 15,
                                color: tree.color,
                            }}
                        >
                            侍
                        </span>
                    </div>
                    <div>
                        <div
                            style={{
                                fontFamily: "'DM Mono',monospace",
                                fontSize: 8,
                                letterSpacing: 4,
                                color: tree.color,
                                textShadow: `0 0 16px ${tree.glow}`,
                            }}
                        >
                            武道の技術樹
                        </div>
                        <div
                            style={{
                                fontFamily: "'DM Mono',monospace",
                                fontSize: 6.5,
                                letterSpacing: 3,
                                color: dark
                                    ? "rgba(255,255,255,0.2)"
                                    : "rgba(26,18,8,0.35)",
                                marginTop: 1,
                            }}
                        >
                            BUSHIDO SKILL TREE · CS PORTFOLIO
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            fontFamily: "Noto Serif JP",
                            fontSize: 20,
                            fontWeight: 700,
                            color: tree.color,
                            lineHeight: 1,
                            textShadow: `0 0 22px ${tree.glow}`,
                            transition: "color 0.5s",
                        }}
                    >
                        {tree.jp}
                    </div>
                    <div
                        style={{
                            fontFamily: "'DM Mono',monospace",
                            fontSize: 6.5,
                            letterSpacing: 2.5,
                            color: dark
                                ? "rgba(255,255,255,0.28)"
                                : "rgba(26,18,8,0.38)",
                            marginTop: 2,
                        }}
                    >
                        {tree.en} · {tree.sub}
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                    }}
                >
                    <div style={{ textAlign: "right" }}>
                        <div
                            style={{
                                fontFamily: "'DM Mono',monospace",
                                fontSize: 7,
                                letterSpacing: 2,
                                color: dark
                                    ? "rgba(255,255,255,0.22)"
                                    : "rgba(26,18,8,0.35)",
                            }}
                        >
                            MASTERED
                        </div>
                        <div
                            style={{
                                fontFamily: "'Cormorant Garamond',serif",
                                fontSize: 18,
                                fontWeight: 700,
                                color: tree.color,
                                lineHeight: 1,
                            }}
                        >
                            {masterCount}
                            <span
                                style={{
                                    fontSize: 9,
                                    color: dark
                                        ? "rgba(255,255,255,0.28)"
                                        : "rgba(26,18,8,0.35)",
                                }}
                            >
                                /{tree.nodes.length}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={replay}
                        disabled={isAnim}
                        style={{
                            background: "transparent",
                            border: `1px solid ${isAnim ? "rgba(255,255,255,0.08)" : tree.color + "77"
                                }`,
                            padding: "5px 12px",
                            cursor: isAnim ? "default" : "pointer",
                            fontFamily: "'DM Mono',monospace",
                            fontSize: 7,
                            letterSpacing: 2,
                            color: isAnim ? "rgba(255,255,255,0.18)" : tree.color,
                            transition: "all 0.3s",
                        }}
                    >
                        {isAnim ? "TRAINING…" : "↻ REPLAY"}
                    </button>
                </div>
            </div>

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {/* Segment tabs */}
                <div
                    style={{
                        width: 76,
                        flexShrink: 0,
                        borderRight: "1px solid rgba(255,255,255,0.05)",
                        background: catBg,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                        padding: "8px 0",
                    }}
                >
                    {TREES.map((t, i) => {
                        const isA = i === activeIdx;
                        return (
                            <button
                                key={t.id}
                                onClick={() => switchTree(i)}
                                style={{
                                    width: 62,
                                    padding: "9px 4px",
                                    position: "relative",
                                    background: isA ? `${t.color}18` : "transparent",
                                    border: `1px solid ${isA
                                        ? t.color
                                        : dark
                                            ? "rgba(255,255,255,0.06)"
                                            : "rgba(26,18,8,0.1)"
                                        }`,
                                    cursor: "pointer",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 3,
                                    transition: "all 0.3s",
                                    boxShadow: isA ? `0 0 16px ${t.glow}` : "none",
                                }}
                                onMouseEnter={(e) => {
                                    if (!isA) e.currentTarget.style.borderColor = `${t.color}44`;
                                }}
                                onMouseLeave={(e) => {
                                    if (!isA)
                                        e.currentTarget.style.borderColor = dark
                                            ? "rgba(255,255,255,0.06)"
                                            : "rgba(26,18,8,0.1)";
                                }}
                            >
                                {isA && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: -1,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: 2,
                                            height: 36,
                                            background: t.color,
                                            boxShadow: `0 0 8px ${t.color}`,
                                        }}
                                    />
                                )}
                                <span
                                    style={{
                                        fontFamily: "Noto Serif JP",
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: isA
                                            ? t.color
                                            : dark
                                                ? "rgba(255,255,255,0.2)"
                                                : "rgba(26,18,8,0.3)",
                                        textShadow: isA ? `0 0 14px ${t.glow}` : "none",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    {t.jp}
                                </span>
                                <span
                                    style={{
                                        fontFamily: "'DM Mono',monospace",
                                        fontSize: 5,
                                        letterSpacing: 1,
                                        color: isA
                                            ? dark
                                                ? "rgba(255,255,255,0.5)"
                                                : "rgba(26,18,8,0.55)"
                                            : dark
                                                ? "rgba(255,255,255,0.15)"
                                                : "rgba(26,18,8,0.3)",
                                        textAlign: "center",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    {t.en}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            padding: "7px 22px 6px",
                            fontFamily: "'Cormorant Garamond',serif",
                            fontSize: 11,
                            fontStyle: "italic",
                            color: dark
                                ? "rgba(220,205,185,0.5)"
                                : "rgba(60,30,10,0.55)",
                            letterSpacing: 0.5,
                            borderBottom: "1px solid rgba(255,255,255,0.04)",
                            flexShrink: 0,
                        }}
                    >
                        {tree.lore}
                    </div>

                    {/* SVG Canvas */}
                    <div
                        key={`tree-${activeIdx}`}
                        style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "6px 10px",
                            animation: "stTreeIn 0.5s ease both",
                        }}
                    >
                        <svg
                            viewBox="-10 0 700 380"
                            style={{
                                width: "100%",
                                height: "100%",
                                maxWidth: "740px",
                                maxHeight: "390px",
                                overflow: "visible",
                            }}
                        >
                            <defs>
                                <filter
                                    id="stGSm"
                                    x="-50%"
                                    y="-50%"
                                    width="200%"
                                    height="200%"
                                >
                                    <feGaussianBlur
                                        stdDeviation="2.2"
                                        result="b"
                                    />
                                    <feMerge>
                                        <feMergeNode in="b" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                <pattern
                                    id="stDots"
                                    width="55"
                                    height="55"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <circle
                                        cx="27.5"
                                        cy="27.5"
                                        r="0.7"
                                        fill="rgba(255,255,255,0.06)"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="680"
                                height="380"
                                fill="url(#stDots)"
                                opacity={dark ? 1 : 0.4}
                            />

                            <ConstellationBg
                                key={`const-${constSeed}`}
                                seed={constSeed}
                                color={tree.color}
                                dark={dark}
                            />

                            {/* Tier grid lines */}
                            {[80, 250, 430, 610].map((cx, i) => (
                                <g key={i}>
                                    <line
                                        x1={cx}
                                        y1="8"
                                        x2={cx}
                                        y2="370"
                                        stroke={
                                            dark
                                                ? "rgba(255,255,255,0.02)"
                                                : "rgba(26,18,8,0.04)"
                                        }
                                        strokeWidth="1"
                                        strokeDasharray="2 8"
                                    />
                                    <text
                                        x={cx}
                                        y="365"
                                        textAnchor="middle"
                                        fontSize="6.5"
                                        fontFamily="'DM Mono',monospace"
                                        fill={
                                            dark
                                                ? "rgba(255,255,255,0.1)"
                                                : "rgba(26,18,8,0.25)"
                                        }
                                        letterSpacing="1"
                                    >
                                        {["TIER 0", "TIER 1", "TIER 2", "TIER 3"][i]}
                                    </text>
                                </g>
                            ))}

                            {tree.edges.map(([a, b]) => {
                                const na = tree.nodes.find((n) => n.id === a),
                                    nb = tree.nodes.find((n) => n.id === b);
                                if (!na || !nb) return null;
                                return (
                                    <STEdge
                                        key={`${a}-${b}-${ak}`}
                                        x1={na.x}
                                        y1={na.y}
                                        x2={nb.x}
                                        y2={nb.y}
                                        color={tree.color}
                                        active={unlocked.has(a) && unlocked.has(b)}
                                        ek={`${ak}-${unlocked.has(a)}-${unlocked.has(b)}`}
                                        dark={dark}
                                    />
                                );
                            })}
                            {tree.nodes.map((node) => (
                                <STNode
                                    key={`${node.id}-${ak}`}
                                    node={node}
                                    state={getState(node)}
                                    color={tree.color}
                                    glow={tree.glow}
                                    ak={ak}
                                    dark={dark}
                                    onClick={() => {
                                        if (unlocked.has(node.id))
                                            setSelected((s) =>
                                                s === node.id ? null : node.id
                                            );
                                    }}
                                />
                            ))}
                            {sparks.map((s) => (
                                <STSpark
                                    key={s.id}
                                    x={s.x}
                                    y={s.y}
                                    color={tree.color}
                                />
                            ))}
                        </svg>
                    </div>

                    {/* Footer bar */}
                    <div
                        style={{
                            height: 38,
                            flexShrink: 0,
                            borderTop: `1px solid ${dark
                                ? "rgba(255,255,255,0.05)"
                                : "rgba(26,18,8,0.07)"
                                }`,
                            background: dark
                                ? "rgba(0,0,0,0.28)"
                                : "rgba(230,220,204,0.45)",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 18px",
                            gap: 12,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'DM Mono',monospace",
                                fontSize: 6.5,
                                letterSpacing: 2,
                                color: dark
                                    ? "rgba(255,255,255,0.22)"
                                    : "rgba(26,18,8,0.4)",
                                flexShrink: 0,
                            }}
                        >
                            PATH PROGRESS
                        </span>
                        <div
                            style={{
                                flex: 1,
                                height: 2.5,
                                background: dark
                                    ? "rgba(255,255,255,0.06)"
                                    : "rgba(26,18,8,0.1)",
                                borderRadius: 2,
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    background: `linear-gradient(90deg,${tree.color}77,${tree.color})`,
                                    boxShadow: `0 0 7px ${tree.color}`,
                                    width: `${pct}%`,
                                    transition:
                                        "width 0.6s cubic-bezier(.4,0,.2,1)",
                                }}
                            />
                        </div>
                        <span
                            style={{
                                fontFamily: "'DM Mono',monospace",
                                fontSize: 8,
                                letterSpacing: 1,
                                color: tree.color,
                                flexShrink: 0,
                            }}
                        >
                            {pct}%
                        </span>
                        <span
                            style={{
                                fontFamily: "Noto Serif JP",
                                fontSize: 8,
                                color: dark
                                    ? "rgba(255,255,255,0.16)"
                                    : "rgba(26,18,8,0.3)",
                                flexShrink: 0,
                                marginLeft: 4,
                            }}
                        >
                            {selected
                                ? "Click node again or ✕ to close"
                                : "Click a mastered node to inspect"}
                        </span>
                    </div>
                </div>

                {/* Detail panel */}
                {selected && tree.nodes.find((n) => n.id === selected) && (
                    <STDetail
                        node={tree.nodes.find((n) => n.id === selected)!}
                        tree={tree}
                        onClose={() => setSelected(null)}
                        dark={dark}
                    />
                )}
            </div>
        </div>
    );
}
