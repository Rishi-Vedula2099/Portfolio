"use client";

import { useState, useEffect, useRef } from "react";

const KANJI_POOL = ["斬", "武", "勝", "刀", "炎", "雷", "鬼", "龍", "風", "虎", "侍", "魂"];

export default function SamuraiCursor({ dark }: { dark: boolean }) {
    const mouse = useRef({ x: -200, y: -200 });
    const reticlePos = useRef({ x: -200, y: -200 });
    const dotRef = useRef<HTMLDivElement>(null);
    const reticleRef = useRef<HTMLDivElement>(null);

    // 3 Wisps
    const wispsRef = useRef<(HTMLDivElement | null)[]>([]);
    const wispAngles = useRef([0, (2 * Math.PI) / 3, (4 * Math.PI) / 3]);

    // Physics for wisps
    const speedRef = useRef(0);
    const lastTimeRef = useRef(performance.now());
    const lastMouseRef = useRef({ x: -200, y: -200 });

    const rafRef = useRef<number>(0);
    const activeRef = useRef(false);
    const [active, setActive] = useState(false);

    // Kanji bursts
    const [bursts, setBursts] = useState<{ id: number, x: number, y: number, char: string }[]>([]);
    const burstIdRef = useRef(0);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };
        const onOver = (e: MouseEvent) => {
            if ((e.target as Element)?.closest?.("a,button,[role='button']")) {
                activeRef.current = true;
                setActive(true);
                // Trigger kanji burst
                const char = KANJI_POOL[Math.floor(Math.random() * KANJI_POOL.length)];
                const newBurst = {
                    id: burstIdRef.current++,
                    x: mouse.current.x,
                    y: mouse.current.y,
                    char
                };
                setBursts(prev => [...prev, newBurst]);
                setTimeout(() => {
                    setBursts(prev => prev.filter(b => b.id !== newBurst.id));
                }, 1000);
            }
        };
        const onOut = (e: MouseEvent) => {
            if ((e.target as Element)?.closest?.("a,button,[role='button']")) {
                activeRef.current = false;
                setActive(false);
            }
        };

        const tick = (time: number) => {
            const dt = Math.max(1, time - lastTimeRef.current);
            lastTimeRef.current = time;

            const { x: mx, y: my } = mouse.current;

            // Calculate velocity
            const dx = mx - lastMouseRef.current.x;
            const dy = my - lastMouseRef.current.y;
            lastMouseRef.current = { x: mx, y: my };

            const instSpeed = Math.sqrt(dx * dx + dy * dy) / dt;
            // Smooth speed
            speedRef.current += (instSpeed - speedRef.current) * 0.1;

            if (dotRef.current)
                dotRef.current.style.transform = `translate(${mx}px,${my}px)`;

            const rp = reticlePos.current;
            rp.x += (mx - rp.x) * 0.28;
            rp.y += (my - rp.y) * 0.28;
            if (reticleRef.current)
                reticleRef.current.style.transform = `translate(${rp.x}px,${rp.y}px)`;

            // Update wisps
            const isHover = activeRef.current;
            const targetRadius = isHover ? 25 : 12 + Math.min(speedRef.current * 15, 30);
            const baseRotSpeed = isHover ? 0.05 : 0.02 + speedRef.current * 0.01;

            wispsRef.current.forEach((el, i) => {
                if (!el) return;
                wispAngles.current[i] += baseRotSpeed;
                const angle = wispAngles.current[i];

                // Add some organic wobble
                const wobble = Math.sin(time * 0.005 + i) * 3;

                const wx = rp.x + Math.cos(angle) * (targetRadius + wobble);
                const wy = rp.y + Math.sin(angle) * (targetRadius + wobble);

                el.style.transform = `translate(${wx}px,${wy}px) scale(${isHover ? 1.5 : 1})`;
                if (isHover) {
                    el.style.background = "#c9a84c"; // Gold
                    el.style.boxShadow = "0 0 10px #c9a84c";
                } else {
                    el.style.background = "#1abc9c"; // Blue-green
                    el.style.boxShadow = "0 0 8px #1abc9c";
                }
            });

            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        window.addEventListener("mousemove", onMove, { passive: true });
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);
        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
        };
    }, []);

    const gold = "#c9a84c",
        red = "#c0392b";
    const sz = active ? 48 : 34; // Precise reticle

    return (
        <div style={{ pointerEvents: 'none', zIndex: 9999, position: 'fixed', inset: 0 }}>
            {/* Ink Bursts */}
            {bursts.map(b => (
                <div
                    key={b.id}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        transform: `translate(${b.x}px, ${b.y}px)`,
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        left: '-20px',
                        top: '-20px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: `2px solid ${dark ? '#fff' : '#000'}`,
                        opacity: 0,
                        animation: 'inkRipple 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards'
                    }} />
                    <div style={{
                        position: 'absolute',
                        left: '-20px',
                        top: '-20px',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'Noto Serif JP', serif",
                        fontSize: '28px',
                        color: gold,
                        textShadow: `0 0 10px ${gold}`,
                        opacity: 0,
                        animation: 'kanjiErupt 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards'
                    }}>
                        {b.char}
                    </div>
                </div>
            ))}
            <style>{`
                @keyframes inkRipple {
                    0% { transform: scale(0.2); opacity: 0.8; }
                    100% { transform: scale(2.5); opacity: 0; }
                }
                @keyframes kanjiErupt {
                    0% { transform: scale(0.5) translateY(10px); opacity: 0; }
                    20% { opacity: 1; filter: blur(0); }
                    100% { transform: scale(1.5) translateY(-20px); opacity: 0; filter: blur(2px); }
                }
            `}</style>

            {/* Wisps */}
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    ref={(el) => { wispsRef.current[i] = el; }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#1abc9c",
                        marginLeft: "-3px",
                        marginTop: "-3px",
                        willChange: "transform",
                        transition: "background 0.3s, box-shadow 0.3s",
                        mixBlendMode: dark ? "screen" : "multiply",
                        filter: "blur(1px)",
                    }}
                />
            ))}

            {/* Precise Dot */}
            <div
                ref={dotRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 4,
                    height: 4,
                    background: red,
                    borderRadius: "50%",
                    marginLeft: "-2px",
                    marginTop: "-2px",
                    willChange: "transform",
                    boxShadow: `0 0 8px ${red}`,
                }}
            />

            {/* Precise Reticle */}
            <div
                ref={reticleRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    marginLeft: `${-sz / 2}px`,
                    marginTop: `${-sz / 2}px`,
                    willChange: "transform",
                }}
            >
                <svg
                    viewBox="0 0 54 54"
                    width={sz}
                    height={sz}
                    overflow="visible"
                    style={{
                        transition:
                            "width 0.3s cubic-bezier(0.34,1.56,0.64,1),height 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                >
                    <circle
                        cx="27"
                        cy="27"
                        r="22"
                        fill="none"
                        stroke={active ? red : gold}
                        strokeWidth="0.85"
                        strokeDasharray="4 8"
                        opacity={active ? 0.95 : 0.65}
                        style={{
                            animation: "reticleRotate 7s linear infinite",
                            transformOrigin: "27px 27px",
                            transition: "stroke 0.25s",
                        }}
                    />
                    <circle
                        cx="27"
                        cy="27"
                        r="12"
                        fill="none"
                        stroke={gold}
                        strokeWidth="0.5"
                        strokeDasharray="2 6"
                        opacity="0.35"
                        style={{
                            animation: "reticleRotate 10s linear infinite reverse",
                            transformOrigin: "27px 27px",
                        }}
                    />
                    {/* Add corner tracking marks for precision feel */}
                    {[45, 135, 225, 315].map((a) => {
                        const rad = ((a - 90) * Math.PI) / 180, r2 = 22;
                        const cx = 27 + r2 * Math.cos(rad), cy = 27 + r2 * Math.sin(rad);
                        return (
                            <polygon
                                key={a}
                                points={`${cx},${cy - 2} ${cx + 2},${cy} ${cx},${cy + 2} ${cx - 2},${cy}`}
                                fill={gold}
                                opacity={active ? 1 : 0.5}
                                style={{ transition: "opacity 0.25s" }}
                            />
                        );
                    })}
                    {/* Crosshairs */}
                    <line x1="14" y1="27" x2="20" y2="27" stroke={active ? red : gold} strokeWidth="1" opacity={active ? 1 : 0.5} />
                    <line x1="34" y1="27" x2="40" y2="27" stroke={active ? red : gold} strokeWidth="1" opacity={active ? 1 : 0.5} />
                    <line x1="27" y1="14" x2="27" y2="20" stroke={active ? red : gold} strokeWidth="1" opacity={active ? 1 : 0.5} />
                    <line x1="27" y1="34" x2="27" y2="40" stroke={active ? red : gold} strokeWidth="1" opacity={active ? 1 : 0.5} />

                    <circle
                        cx="27"
                        cy="27"
                        r="2.5"
                        fill="none"
                        stroke={active ? red : gold}
                        strokeWidth="1.2"
                        opacity={active ? 1 : 0.6}
                        style={{ transition: "stroke 0.25s" }}
                    />
                </svg>
            </div>
        </div>
    );
}
