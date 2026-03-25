"use client";

import { useRef, useEffect } from "react";

export default function Wipe({
    children,
    delay = 0,
    style = {},
}: {
    children: React.ReactNode;
    delay?: number;
    style?: React.CSSProperties;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    el.style.transitionDelay = `${delay}s`;
                    el.classList.add("vis");
                    obs.unobserve(el);
                }
            },
            { threshold: 0.07 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className="wipe2" style={style}>
            {children}
        </div>
    );
}
