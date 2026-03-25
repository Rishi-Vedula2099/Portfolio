"use client";

import Wipe from "./Wipe";

export default function ToriiDivider({
    label,
    dark,
}: {
    label: string;
    dark: boolean;
}) {
    const line = dark ? "rgba(201,168,76,0.07)" : "rgba(26,18,8,0.07)";
    const txt = dark ? "rgba(240,232,218,0.75)" : "rgba(165,30,8,0.82)";

    const ToriiSvg = ({ flip }: { flip?: boolean }) => (
        <svg
            viewBox="0 0 56 28"
            width="44"
            height="22"
            fill="none"
            style={{
                opacity: 0.2,
                flexShrink: 0,
                transform: flip ? "scaleX(-1)" : undefined,
            }}
        >
            <rect x="4" y="0" width="5" height="28" fill={dark ? "#e8e0d0" : "#1a1208"} />
            <rect x="47" y="0" width="5" height="28" fill={dark ? "#e8e0d0" : "#1a1208"} />
            <rect x="0" y="6" width="56" height="5" rx="1" fill="#c0392b" />
            <rect x="4" y="13" width="48" height="3" rx="1" fill={dark ? "#e8e0d0" : "#1a1208"} />
        </svg>
    );

    return (
        <Wipe
            style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginBottom: 52,
            }}
        >
            <ToriiSvg />
            <div style={{ flex: 1, height: 1, background: line }} />
            <div
                style={{
                    fontFamily: "'Noto Serif JP'",
                    fontWeight: 200,
                    fontSize: 11,
                    color: txt,
                    letterSpacing: 7,
                    whiteSpace: "nowrap",
                }}
            >
                {label}
            </div>
            <div style={{ flex: 1, height: 1, background: line }} />
            <ToriiSvg flip />
        </Wipe>
    );
}
