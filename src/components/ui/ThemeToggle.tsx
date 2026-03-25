"use client";

export default function ThemeToggle({
    dark,
    onToggle,
}: {
    dark: boolean;
    onToggle: () => void;
}) {
    return (
        <button
            onClick={onToggle}
            style={{
                position: "relative",
                width: 56,
                height: 28,
                borderRadius: 14,
                background: dark ? "rgba(201,168,76,0.14)" : "rgba(26,18,8,0.07)",
                border: `1px solid ${dark ? "rgba(201,168,76,0.28)" : "rgba(26,18,8,0.14)"}`,
                cursor: "none",
                transition: "all 0.4s",
                display: "flex",
                alignItems: "center",
                padding: "0 4px",
                flexShrink: 0,
            }}
        >
            <span
                style={{
                    position: "absolute",
                    left: 7,
                    fontSize: 11,
                    opacity: dark ? 0.3 : 0.9,
                    transition: "opacity 0.4s",
                }}
            >
                ☀
            </span>
            <span
                style={{
                    position: "absolute",
                    right: 6,
                    fontSize: 11,
                    opacity: dark ? 0.9 : 0.3,
                    transition: "opacity 0.4s",
                }}
            >
                月
            </span>
            <div
                style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: dark ? "#c9a84c" : "#c0392b",
                    transform: dark ? "translateX(28px)" : "translateX(0)",
                    transition:
                        "transform 0.4s cubic-bezier(0.34,1.56,0.64,1),background 0.4s",
                    boxShadow: dark
                        ? "0 0 10px rgba(201,168,76,0.5)"
                        : "0 0 10px rgba(192,57,43,0.4)",
                    flexShrink: 0,
                }}
            />
        </button>
    );
}
