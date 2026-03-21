"use client";

import { useState } from "react";
import HangingLampToggle from "@/components/ui/HangingLampToggle";

interface NavbarProps {
    dark: boolean;
    loaded: boolean;
    scrolled: boolean;
    onToggleAction: () => void;
}

export default function Navbar({ dark, loaded, scrolled, onToggleAction }: NavbarProps) {
    const [hankoHov, setHankoHov] = useState(false);

    const c = {
        muted: dark ? "rgba(240,232,218,0.82)" : "rgba(180,35,10,0.9)",
        paper: dark ? "#e8e0d0" : "#1a1208",
        border: dark ? "rgba(201,168,76,0.07)" : "rgba(26,18,8,0.09)",
    };

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 500,
                display: "flex",
                alignItems: "center",
                padding: "16px 48px",
                background: scrolled
                    ? dark
                        ? "rgba(7,6,12,0.92)"
                        : "rgba(240,232,216,0.4)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(18px)" : "none",
                borderBottom: scrolled
                    ? `1px solid ${c.border}`
                    : "1px solid transparent",
                transition: "all 0.5s",
                animation: loaded ? "inkDrop 0.8s ease both" : "none",
            }}
        >
            <div
                onMouseEnter={() => setHankoHov(true)}
                onMouseLeave={() => setHankoHov(false)}
                onClick={() => scrollTo("hero")}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "2px solid #c0392b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Cormorant Garamond'",
                    fontStyle: "italic",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#c0392b",
                    marginRight: "auto",
                    transition:
                        "box-shadow 0.4s,transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
                    boxShadow: hankoHov
                        ? "0 0 0 7px rgba(192,57,43,0.1),0 0 20px rgba(192,57,43,0.2)"
                        : "none",
                    transform: hankoHov
                        ? "rotate(15deg) scale(1.12)"
                        : "rotate(0) scale(1)",
                    cursor: "none",
                }}
            >
                R
            </div>
            <div
                style={{
                    fontFamily: "'Shippori Mincho B1','Zen Old Mincho',serif",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    color: c.muted,
                    marginRight: 40,
                }}
            >
                RISHI VEDULA
            </div>
            {["Works", "Skills", "About", "Contact"].map((n) => (
                <a
                    key={n}
                    href="#"
                    className="nlink2"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollTo(n.toLowerCase());
                    }}
                >
                    {n}
                </a>
            ))}
            <div style={{ marginLeft: 30 }}>
                <HangingLampToggle dark={dark} onToggleAction={onToggleAction} />
            </div>
        </nav>
    );
}
