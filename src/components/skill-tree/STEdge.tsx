"use client";

export default function STEdge({
    x1,
    y1,
    x2,
    y2,
    color,
    active,
    ek,
    dark,
}: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color: string;
    active: boolean;
    ek: string;
    dark: boolean;
}) {
    const mx = (x1 + x2) / 2,
        my = (y1 + y2) / 2;
    const dx = x2 - x1,
        dy = y2 - y1,
        len = Math.sqrt(dx * dx + dy * dy) || 1;
    const cpx = mx - (dy / len) * 16,
        cpy = my + (dx / len) * 16;
    const d = `M${x1} ${y1} Q${cpx} ${cpy} ${x2} ${y2}`;
    const pl = Math.round(len * 1.05 + 40);

    if (!active)
        return (
            <path
                d={d}
                fill="none"
                stroke={dark ? "rgba(255,255,255,0.07)" : "rgba(26,18,8,0.1)"}
                strokeWidth="1"
                strokeDasharray="4 8"
                opacity="0.45"
            />
        );

    return (
        <path
            key={`e-${ek}`}
            d={d}
            fill="none"
            stroke={color}
            strokeWidth="2"
            opacity="0.7"
            filter="url(#stGSm)"
            strokeDasharray={pl}
            style={
                {
                    animation: "stLineDraw 1s cubic-bezier(.4,0,.2,1) both",
                    "--dlen": pl,
                } as React.CSSProperties
            }
        />
    );
}
