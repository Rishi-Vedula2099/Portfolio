"use client";

import { useEffect, useRef } from "react";
import { KaiMascotState } from "@/lib/kai/contextManager";

interface KaiMascotCanvasProps {
  mascotState: KaiMascotState;
  audioAmplitude?: number;
  width?: number;
  height?: number;
}

function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }
}

export default function KaiMascotCanvas({
  mascotState,
  audioAmplitude = 0,
  width = 160,
  height = 180,
}: KaiMascotCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    // Particle system for hovering energy base
    const particles = Array.from({ length: 18 }, () => ({
      x: (Math.random() - 0.5) * 80,
      y: Math.random() * 30 + 120,
      size: Math.random() * 2 + 1,
      speedY: Math.random() * 0.4 + 0.2,
      opacity: Math.random() * 0.8 + 0.2,
    }));

    const render = () => {
      try {
        time += 0.04;
        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        // Gentle floating physics offset
        const floatY = Math.sin(time * 1.5) * 4;
        const baseHeadY = 52 + floatY;
        const baseBodyY = 100 + floatY;

        // ── 1. AMBIENT AURA & ENERGY BASE ──
        const energyGlow = ctx.createRadialGradient(
          centerX,
          145,
          5,
          centerX,
          145,
          55
        );

        let primaryColor = "#00F0FF"; // Default Cyan
        let coreColor = "#E63946"; // Crimson Crystal Core

        if (mascotState === "listening") {
          primaryColor = "#00FF88"; // Green
        } else if (mascotState === "thinking") {
          primaryColor = "#FF9900"; // Orange
        } else if (mascotState === "talking") {
          primaryColor = "#00F0FF"; // Electric Blue/Cyan
        } else if (mascotState === "sleeping") {
          primaryColor = "rgba(200, 200, 220, 0.3)";
        } else if (mascotState === "celebrating") {
          primaryColor = "#C9A84C"; // Gold
        }

        energyGlow.addColorStop(0, `${primaryColor}44`);
        energyGlow.addColorStop(1, "transparent");
        ctx.fillStyle = energyGlow;
        ctx.beginPath();
        ctx.ellipse(centerX, 145, 45, 12, 0, 0, Math.PI * 2);
        ctx.fill();

        // Energy Ring Base
        ctx.strokeStyle = `${primaryColor}aa`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.ellipse(centerX, 145, 34 + Math.sin(time * 2) * 2, 8, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Floating Particles
        particles.forEach((p) => {
          p.y -= p.speedY;
          if (p.y < 90) {
            p.y = 145;
            p.x = (Math.random() - 0.5) * 70;
          }
          ctx.fillStyle = primaryColor;
          ctx.globalAlpha = p.opacity * (1 - (145 - p.y) / 55);
          ctx.beginPath();
          ctx.arc(centerX + p.x, p.y + floatY * 0.5, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        });

        // ── 2. ARMS (Mini Floating Articulated Arms) ──
        const leftArmWave = mascotState === "wave" || mascotState === "celebrating"
          ? Math.sin(time * 6) * 14
          : Math.sin(time * 1.5) * 3;

        const rightArmWave = mascotState === "celebrating"
          ? Math.cos(time * 6) * 14
          : -Math.sin(time * 1.5) * 3;

        // Left Arm
        ctx.fillStyle = "#1e1e24";
        ctx.strokeStyle = "rgba(201,168,76,0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        drawRoundRect(ctx, centerX - 36, baseBodyY - 4 + leftArmWave, 8, 22, 4);
        ctx.fill();
        ctx.stroke();

        // Right Arm
        ctx.beginPath();
        drawRoundRect(ctx, centerX + 28, baseBodyY - 4 + rightArmWave, 8, 22, 4);
        ctx.fill();
        ctx.stroke();

        // ── 3. ROBOT BODY (Matte Graphite + Crimson Core) ──
        ctx.fillStyle = "#16161a";
        ctx.strokeStyle = "rgba(201,168,76,0.25)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        drawRoundRect(ctx, centerX - 24, baseBodyY - 12, 48, 44, 12);
        ctx.fill();
        ctx.stroke();

        // Glowing Crimson Core Crystal at center
        const corePulse = Math.sin(time * 3) * 0.2 + 0.8;
        const crystalGlow = ctx.createRadialGradient(
          centerX,
          baseBodyY + 10,
          1,
          centerX,
          baseBodyY + 10,
          14
        );
        crystalGlow.addColorStop(0, coreColor);
        crystalGlow.addColorStop(1, "transparent");
        ctx.fillStyle = crystalGlow;
        ctx.beginPath();
        ctx.arc(centerX, baseBodyY + 10, 12 * corePulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = coreColor;
        ctx.beginPath();
        ctx.arc(centerX, baseBodyY + 10, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Floating Neck Connector
        ctx.fillStyle = "#2a2a32";
        ctx.beginPath();
        drawRoundRect(ctx, centerX - 6, baseHeadY + 20, 12, 8, 3);
        ctx.fill();

        // ── 4. ROBOT HEAD (Rounded Square with Smooth Corners) ──
        ctx.fillStyle = "#1a1a20";
        ctx.strokeStyle = "rgba(201,168,76,0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        drawRoundRect(ctx, centerX - 30, baseHeadY - 24, 60, 46, 14);
        ctx.fill();
        ctx.stroke();

        // Digital Screen Backdrop
        ctx.fillStyle = "#0a0a0d";
        ctx.beginPath();
        drawRoundRect(ctx, centerX - 24, baseHeadY - 18, 48, 34, 8);
        ctx.fill();

        // ── 5. EXPRESSIVE LED EYES ──
        ctx.fillStyle = primaryColor;
        ctx.shadowColor = primaryColor;
        ctx.shadowBlur = mascotState === "sleeping" ? 2 : 8;

        const isBlinking = Math.sin(time * 0.8) > 0.96 && mascotState !== "sleeping";
        const eyeHeight = isBlinking || mascotState === "sleeping" ? 2 : 8;
        const eyeY = baseHeadY - 6 + (isBlinking || mascotState === "sleeping" ? 3 : 0);

        // Eye Wink for 'wave'
        if (mascotState === "wave") {
          // Left Eye open, Right Eye winking arc
          ctx.beginPath();
          ctx.arc(centerX - 11, eyeY, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = primaryColor;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(centerX + 11, eyeY, 4, Math.PI, 0);
          ctx.stroke();
        } else {
          // Left Eye
          ctx.beginPath();
          ctx.ellipse(centerX - 11, eyeY, 4.5, eyeHeight / 2, 0, 0, Math.PI * 2);
          ctx.fill();

          // Right Eye
          ctx.beginPath();
          ctx.ellipse(centerX + 11, eyeY, 4.5, eyeHeight / 2, 0, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.shadowBlur = 0; // Reset shadow blur

        // ── 6. ANIMATED MOUTH & EQUALIZER BARS (WHEN TALKING) ──
        if (mascotState === "talking" || audioAmplitude > 0) {
          const bars = 5;
          const barWidth = 3;
          const startX = centerX - ((bars * (barWidth + 2)) / 2) + 1;
          ctx.fillStyle = primaryColor;

          for (let i = 0; i < bars; i++) {
            const h = Math.max(2, Math.random() * (10 * (audioAmplitude || 0.7)) + 3);
            ctx.beginPath();
            drawRoundRect(ctx, startX + i * (barWidth + 2), baseHeadY + 6 - h / 2, barWidth, h, 1);
            ctx.fill();
          }
        } else if (mascotState === "listening") {
          // Pulsing listening wave dot
          ctx.fillStyle = "#00FF88";
          ctx.beginPath();
          ctx.arc(centerX, baseHeadY + 6, 2.5 + Math.sin(time * 8) * 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (mascotState === "sleeping") {
          // Subtle sleep Z line
          ctx.strokeStyle = "rgba(200,200,220,0.4)";
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(centerX - 4, baseHeadY + 6);
          ctx.lineTo(centerX + 4, baseHeadY + 6);
          ctx.stroke();
        } else {
          // Subtle smile line
          ctx.strokeStyle = `${primaryColor}88`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(centerX, baseHeadY + 4, 4, 0.2, Math.PI - 0.2);
          ctx.stroke();
        }
      } catch (err) {
        console.warn("KaiMascotCanvas render error:", err);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [mascotState, audioAmplitude, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
