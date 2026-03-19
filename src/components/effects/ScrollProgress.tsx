"use client";

import { useState, useEffect } from "react";

export default function ScrollProgress() {
    const [pct, setPct] = useState(0);

    useEffect(() => {
        const fn = () => {
            const d = document.documentElement;
            setPct((d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100 || 0);
        };
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    zIndex: 900,
                    background: "rgba(201,168,76,0.05)",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: `${pct}%`,
                        background: "linear-gradient(90deg,#c0392b,#c9a84c)",
                        boxShadow: "0 0 10px rgba(192,57,43,0.5)",
                        transition: "width 0.1s",
                    }}
                />
            </div>
            <div
                style={{
                    position: "fixed",
                    right: 20,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 1,
                    height: 100,
                    zIndex: 100,
                    overflow: "hidden",
                    background: "linear-gradient(to bottom,transparent,rgba(201,168,76,0.18),transparent)",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "22%",
                        background: "linear-gradient(to bottom,transparent,#c0392b,transparent)",
                        animation: "scrollDot 2.4s ease-in-out infinite",
                    }}
                />
            </div>
        </>
    );
}
