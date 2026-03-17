"use client";

import { BG_KANJI } from "@/data";

export default function BgKanji({ dark }: { dark: boolean }) {
    return (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
            {BG_KANJI.map((k, i) => (
                <div
                    key={k}
                    style={{
                        position: "absolute",
                        left: `${(i * 6.3) % 98}%`,
                        top: `${(i * 11.7 + 4) % 97}%`,
                        fontFamily: "'Noto Serif JP'",
                        fontSize: 48 + (i % 4) * 30,
                        color: dark ? "#e8e0d0" : "#1a1208",
                        opacity: 0.03,
                        userSelect: "none",
                        animation: `kanjiFloat ${9 + i * 1.1}s ${i * 0.6}s ease-in-out infinite`,
                    }}
                >
                    {k}
                </div>
            ))}
        </div>
    );
}
