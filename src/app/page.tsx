"use client";

import { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@/styles/makeStyles";
import { NoiseSVG, WashiSVG } from "@/styles/textures";

/* Effects */
import SamuraiCursor from "@/components/effects/SamuraiCursor";
import BgKanji from "@/components/effects/BgKanji";
import CherryBlossoms from "@/components/effects/CherryBlossoms";
import WindEffect from "@/components/effects/WindEffect";
import ScrollProgress from "@/components/effects/ScrollProgress";
import SnowEffect from "@/components/effects/SnowEffect";

/* Loader / Outro */
import MegaLoader from "@/components/loader/MegaLoader";
import ScrollCloseOutro from "@/components/loader/ScrollCloseOutro";

/* Sections */
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

import InsightsSection from "@/components/sections/InsightsSection";
import ApproachSection from "@/components/sections/ApproachSection";

export default function SamuraiPortfolio() {
  const [loaded, setLoaded] = useState(false);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [closingScroll, setClosingScroll] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const c = dark
    ? {
      line: "rgba(201,168,76,0.07)",
      border: "rgba(201,168,76,0.07)",
    }
    : {
      line: "rgba(26,18,8,0.07)",
      border: "rgba(26,18,8,0.09)",
    };

  const handleCloseScroll = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setTimeout(() => setClosingScroll(true), 60);
  }, []);

  return (
    <div className="sjp2">
      <style>{makeStyles(dark)}</style>

      <SamuraiCursor dark={dark} />

      {/* ── JAPANESE LANDSCAPE BACKGROUNDS ── */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "filter 1.2s ease, transform 1.2s ease",
          filter: dark
            ? "brightness(0.4) contrast(1.1) blur(6px)"
            : "brightness(0.9) contrast(1.05) blur(6px)",
          transform: "scale(1.05)", // Slightly reduced scale as blur is smaller
        }} />
        {/* Subtle overlay to ensure component legibility */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: dark ? "rgba(10, 5, 0, 0.4)" : "rgba(255, 250, 240, 0.2)",
          transition: "background 1.2s ease",
        }} />
      </div>

      {/* Noise overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
          opacity: dark ? 0.04 : 0.025,
          backgroundImage: NoiseSVG,
          backgroundSize: "300px",
          transition: "opacity 0.7s",
        }}
      />

      {/* Washi overlay (light mode only) */}
      {!dark && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.07,
            backgroundImage: WashiSVG,
            backgroundSize: "500px",
          }}
        />
      )}

      <BgKanji dark={dark} />
      {/* Cherry blossoms — light mode only */}
      {loaded && !dark && <CherryBlossoms />}
      {/* Snowfall — dark mode only */}
      {loaded && dark && <SnowEffect />}
      {loaded && <WindEffect dark={dark} />}

      {/* Grid lines */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "70%",
            top: 0,
            bottom: 0,
            width: 1,
            background: c.line,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "63%",
            height: 1,
            background: c.line,
          }}
        />
      </div>

      {!loaded && <MegaLoader onDone={() => setLoaded(true)} />}
      {closingScroll && (
        <ScrollCloseOutro onDone={() => setClosingScroll(false)} />
      )}
      <ScrollProgress />

      <Navbar
        dark={dark}
        loaded={loaded}
        scrolled={scrolled}
        onToggleAction={() => setDark((d) => !d)}
      />
      <Hero dark={dark} loaded={loaded} />
      <Works dark={dark} />
      <Skills dark={dark} />
      <InsightsSection dark={dark} />
      <ApproachSection dark={dark} />
      <About dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} onCloseScrollAction={handleCloseScroll} />
    </div>
  );
}
