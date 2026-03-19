"use client";

import { useState, useEffect, useRef } from "react";

interface Snowflake {
    id: number;
    left: string;
    size: number;
    dur: string;
    delay: string;
    drift: string;
    spin: string;
    opacity: number;
}

function generateFlakes(): Snowflake[] {
    return Array.from({ length: 55 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 5,
        dur: `${8 + Math.random() * 14}s`,
        delay: `${Math.random() * 22}s`,
        drift: `${(Math.random() - 0.5) * 90}px`,
        spin: `${(Math.random() - 0.5) * 360}deg`,
        opacity: 0.25 + Math.random() * 0.55,
    }));
}

export default function SnowEffect() {
    const [flakes, setFlakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        setFlakes(generateFlakes());
    }, []);

    if (flakes.length === 0) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 6,
                overflow: "hidden",
            }}
        >
            {flakes.map((f) => (
                <div
                    key={f.id}
                    style={{
                        position: "absolute",
                        top: -12,
                        left: f.left,
                        width: f.size,
                        height: f.size,
                        borderRadius: "50%",
                        background: `radial-gradient(circle at 35% 35%, #ffffff, #c8dff0)`,
                        opacity: 0,
                        boxShadow: f.size > 5
                            ? `0 0 ${f.size * 1.5}px rgba(200,225,255,0.6)`
                            : `0 0 ${f.size}px rgba(200,223,255,0.45)`,
                        "--drift": f.drift,
                        "--spin": f.spin,
                        animation: `snowFall ${f.dur} ${f.delay} linear infinite`,
                    } as React.CSSProperties}
                />
            ))}

            {/* Snowfall keyframe — injected once via a style tag */}
            <style>{`
                @keyframes snowFall {
                    0%   { transform: translateY(-12px) translateX(0)      rotate(0deg);   opacity: 0; }
                    5%   { opacity: var(--flake-op, 0.6); }
                    92%  { opacity: 0.35; }
                    100% { transform: translateY(105vh) translateX(var(--drift)) rotate(var(--spin)); opacity: 0; }
                }
            `}</style>
        </div>
    );
}
