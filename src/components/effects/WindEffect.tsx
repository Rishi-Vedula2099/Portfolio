"use client";

import { useState, useEffect } from "react";
import type { Streak } from "@/types";

function generateStreaks(): Streak[] {
    return Array.from({ length: 32 }, (_, i) => ({
        id: i,
        top: `${1 + Math.random() * 98}%`,
        w: 28 + Math.random() * 110,
        h: 0.55 + Math.random() * 1.9,
        dur: `${3.8 + Math.random() * 8}s`,
        delay: `${Math.random() * 16}s`,
        driftY: (Math.random() - 0.5) * 55,
        angle: (Math.random() - 0.5) * 10,
        opMax: 0.06 + Math.random() * 0.19,
        warm: Math.random() > 0.35,
    }));
}

export default function WindEffect({ dark }: { dark: boolean }) {
    const [scrollY, setScrollY] = useState(0);
    const [streaks, setStreaks] = useState<Streak[]>([]);

    useEffect(() => {
        setStreaks(generateStreaks());
    }, []);

    useEffect(() => {
        const fn = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const atTop = scrollY < 120;

    if (streaks.length === 0) return null;

    return (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 4, overflow: "hidden" }}>
            {streaks.map((p) => (
                <div key={p.id} style={{ position: "absolute", top: p.top, left: 0, opacity: p.opMax }}>
                    <div
                        style={{
                            width: p.w,
                            height: p.h,
                            background: `linear-gradient(90deg,transparent 0%,${dark
                                    ? p.warm
                                        ? "#d4a843"
                                        : "#e8d090"
                                    : p.warm
                                        ? "#8b5e0a"
                                        : "#c9a84c"
                                } 35%,${dark
                                    ? p.warm
                                        ? "#f0dc7a"
                                        : "#c9a84c"
                                    : p.warm
                                        ? "#c9a84c"
                                        : "#7a4e0a"
                                } 65%,transparent 100%)`,
                            borderRadius: 2,
                            transform: `rotate(${p.angle}deg)`,
                            "--drift": `${p.driftY}px`,
                            animation: `windFlow ${p.dur} ${p.delay} ease-in-out infinite`,
                        } as React.CSSProperties}
                    />
                </div>
            ))}
            {atTop &&
                [0, 1, 2, 3].map((i) => (
                    <div
                        key={`wd-${i}`}
                        style={{
                            position: "absolute",
                            left: `${18 + i * 22}%`,
                            top: `${52 + i * 9}%`,
                            width: 1.2,
                            height: 30 + i * 6,
                            background: `linear-gradient(to bottom,transparent,${dark ? "#c9a84c" : "#8b5e0a"},transparent)`,
                            opacity: 0.28,
                            borderRadius: 2,
                            animation: `windDown 3s ${i * 0.65}s ease-in-out infinite`,
                        }}
                    />
                ))}
        </div>
    );
}
