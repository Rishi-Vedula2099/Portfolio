"use client";

export default function STSpark({
    x,
    y,
    color,
}: {
    x: number;
    y: number;
    color: string;
}) {
    const sparks = Array.from({ length: 10 }, (_, i) => {
        const a = (i / 10) * Math.PI * 2 + Math.random() * 0.5,
            d = 28 + Math.random() * 22;
        return {
            tx: `${Math.cos(a) * d}px`,
            ty: `${Math.sin(a) * d}px`,
            r: 1.2 + Math.random() * 2,
            dl: `${i * 30}ms`,
        };
    });

    return (
        <g
            transform={`translate(${x},${y})`}
            style={{ pointerEvents: "none" }}
        >
            <circle
                cx="0"
                cy="0"
                fill="none"
                stroke={color}
                strokeWidth="1.2"
                opacity="0.6"
                style={{ animation: "stRingExp 0.55s ease-out forwards" }}
            />
            {sparks.map((s, i) => (
                <circle
                    key={i}
                    cx="0"
                    cy="0"
                    r={s.r}
                    fill={color}
                    style={
                        {
                            "--tx": s.tx,
                            "--ty": s.ty,
                            animation: `stSpark 0.5s ${s.dl} ease-out forwards`,
                        } as React.CSSProperties
                    }
                />
            ))}
        </g>
    );
}
