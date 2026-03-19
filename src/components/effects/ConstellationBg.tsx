"use client";

import { useMemo, useState, useEffect } from "react";
import type { ConstellationStar, ConstellationLine } from "@/types";

function generateConstellation(seed: number): {
    stars: ConstellationStar[];
    lines: ConstellationLine[];
} {
    const rng = (n: number) => Math.sin(seed * 9301 + n * 49297 + 233) * 0.5 + 0.5;
    const count = 28 + Math.floor(rng(0) * 18);

    const stars: ConstellationStar[] = Array.from({ length: count }, (_, i) => ({
        x: 15 + rng(i * 3 + 1) * 650,
        y: 8 + rng(i * 3 + 2) * 360,
        r: 0.6 + rng(i * 3 + 3) * 1.8,
    }));

    const lines: ConstellationLine[] = [];
    stars.forEach((s, i) => {
        if (i === 0) return;
        let closest = -1,
            minDist = Infinity;
        stars.slice(0, i).forEach((t, j) => {
            const d = Math.hypot(s.x - t.x, s.y - t.y);
            if (d < minDist && d < 160) {
                minDist = d;
                closest = j;
            }
        });
        if (closest >= 0)
            lines.push({ x1: s.x, y1: s.y, x2: stars[closest].x, y2: stars[closest].y });
        if (rng(i * 7 + 4) > 0.72 && i > 2) {
            const j = Math.floor(rng(i * 7 + 5) * (i - 1));
            const d = Math.hypot(s.x - stars[j].x, s.y - stars[j].y);
            if (d < 200)
                lines.push({ x1: s.x, y1: s.y, x2: stars[j].x, y2: stars[j].y });
        }
    });

    return { stars, lines };
}

export default function ConstellationBg({
    seed,
    color,
    dark,
}: {
    seed: number;
    color: string;
    dark: boolean;
}) {
    const [mounted, setMounted] = useState(false);
    const { stars, lines } = useMemo(() => generateConstellation(seed), [seed]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <g style={{ pointerEvents: "none" }} />;
    }

    return (
        <g style={{ pointerEvents: "none" }}>
            {lines.map((l, i) => {
                const len = Math.hypot(l.x2 - l.x1, l.y2 - l.y1);
                return (
                    <line
                        key={`cl-${seed}-${i}`}
                        x1={l.x1}
                        y1={l.y1}
                        x2={l.x2}
                        y2={l.y2}
                        stroke={color}
                        strokeWidth="0.5"
                        style={
                            {
                                "--clen": len,
                                "--lop": dark ? "0.12" : "0.09",
                                animation: `constellationLineDraw 1.8s ${0.1 + i * 0.04}s ease both`,
                                strokeDasharray: len,
                            } as React.CSSProperties
                        }
                    />
                );
            })}
            {stars.map((s, i) => (
                <circle
                    key={`cs-${seed}-${i}`}
                    cx={s.x}
                    cy={s.y}
                    r={s.r}
                    fill={color}
                    style={
                        {
                            "--op": dark
                                ? s.r > 1.5
                                    ? "0.55"
                                    : "0.25"
                                : s.r > 1.5
                                    ? "0.35"
                                    : "0.15",
                            animation: `constellationFadeIn 1.2s ${i * 0.03}s ease both, constellationTwinkle ${2.8 + (i % 5) * 0.7
                                }s ${i * 0.2}s ease-in-out infinite`,
                            animationDelay: `${0.05 * i}s, ${i * 0.2}s`,
                        } as React.CSSProperties
                    }
                />
            ))}
        </g>
    );
}
