"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0f",
        color: "#e8e0d0",
        fontFamily: "'DM Mono', monospace",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(201, 168, 76, 0.4)",
          background: "rgba(18, 18, 24, 0.9)",
          borderRadius: 12,
          padding: "32px",
          maxWidth: 480,
          boxShadow: "0 0 30px rgba(0, 0, 0, 0.8)",
        }}
      >
        <h2 style={{ fontFamily: "'Shippori Mincho B1', serif", color: "#C9A84C", marginBottom: 12, fontSize: 22 }}>
          System Event
        </h2>
        <p style={{ fontSize: 13, color: "rgba(232, 224, 208, 0.8)", marginBottom: 24, lineHeight: 1.6 }}>
          A temporary client error was encountered. Click below to resume your session.
        </p>
        <button
          onClick={() => reset()}
          style={{
            background: "linear-gradient(135deg, #c0392b, #962d22)",
            color: "#ffffff",
            border: "none",
            borderRadius: 6,
            padding: "10px 20px",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          Reload Session
        </button>
      </div>
    </div>
  );
}
