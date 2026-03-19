"use client";

import { useState, useEffect } from "react";
import type { Petal } from "@/types";

function generatePetals(): Petal[] {
    return Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${3 + Math.random() * 94}%`,
        size: 5 + Math.random() * 8,
        dur: `${7 + Math.random() * 10}s`,
        delay: `${Math.random() * 18}s`,
        drift: `${(Math.random() - 0.5) * 140}px`,
        spin: `${(Math.random() - 0.5) * 600}deg`,
        sway: `${(Math.random() - 0.5) * 36}px`,
        color: Math.random() > 0.5 ? "#f4aab8" : "#f0c4cc",
    }));
}

export default function CherryBlossoms() {
    const [petals, setPetals] = useState<Petal[]>([]);

    useEffect(() => {
        setPetals(generatePetals());
    }, []);

    if (petals.length === 0) return null;

    return (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 6, overflow: "hidden" }}>
            {petals.map((p) => (
                <div
                    key={p.id}
                    style={{
                        position: "absolute",
                        top: -22,
                        left: p.left,
                        width: p.size,
                        height: p.size * 1.35,
                        background: `radial-gradient(ellipse at 40% 30%,${p.color},#c4607a)`,
                        borderRadius: "50% 0 50% 0",
                        opacity: 0,
                        "--drift": p.drift,
                        "--spin": p.spin,
                        "--sway": p.sway,
                        filter: "blur(0.3px)",
                        animation: `petalFall ${p.dur} ${p.delay} ease-in infinite,petalSway ${p.dur} ${p.delay} ease-in-out infinite`,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
}
