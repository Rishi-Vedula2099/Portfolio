/* ── CSS FACTORY ───────────────────────────────────────────── */
export const makeStyles = (dark: boolean): string => `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=Noto+Serif+JP:wght@200;300;400&family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Zen+Old+Mincho:wght@400;700;900&family=Shippori+Mincho+B1:wght@400;500;700;800&family=Cinzel:wght@400;600;700&display=swap');

.sjp2*,.sjp2*::before,.sjp2*::after{box-sizing:border-box;margin:0;padding:0}
.sjp2{font-family:'Cormorant Garamond',Georgia,serif;background:${dark ? "#07060c" : "#f0e8d8"};min-height:100vh;color:${dark ? "#e8e0d0" : "#1a1208"};overflow-x:hidden;position:relative;cursor:none;transition:background 0.8s,color 0.8s;scroll-behavior:smooth;}

@keyframes rodInL{0%{transform:translateX(-120%) scaleY(0.2) rotate(-3deg);opacity:0}60%{transform:translateX(0) scaleY(1) rotate(0deg);opacity:1}100%{transform:translateX(0) scaleY(1) rotate(0deg);opacity:1}}
@keyframes rodInR{0%{transform:translateX(120%) scaleY(0.2) rotate(3deg);opacity:0}60%{transform:translateX(0) scaleY(1) rotate(0deg);opacity:1}100%{transform:translateX(0) scaleY(1) rotate(0deg);opacity:1}}
@keyframes rodOutL{0%{transform:translateX(0) scaleY(1);opacity:1}100%{transform:translateX(-130%) scaleY(0.15);opacity:0}}
@keyframes rodOutR{0%{transform:translateX(0) scaleY(1);opacity:1}100%{transform:translateX(130%) scaleY(0.15);opacity:0}}
@keyframes scrollUnroll{0%{max-width:0px;opacity:0.2}100%{max-width:420px;opacity:1}}
@keyframes scrollFadeIn{from{opacity:0;letter-spacing:18px}to{opacity:1;letter-spacing:0.22em}}
@keyframes subFadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@keyframes slashDiag1{0%{transform:scaleX(0) translateY(-50%) rotate(-3deg);transform-origin:left;opacity:1}55%{transform:scaleX(1) translateY(-50%) rotate(-3deg);opacity:1}100%{opacity:0}}
@keyframes slashDiag2{0%{transform:scaleX(0) translateY(-50%) rotate(2deg);transform-origin:right;opacity:1}55%{transform:scaleX(1) translateY(-50%) rotate(2deg);opacity:1}100%{opacity:0}}
@keyframes slashCenter{0%{transform:scaleX(0) translateY(-50%);transform-origin:center;opacity:1}40%{transform:scaleX(1) translateY(-50%);opacity:1}100%{opacity:0}}
@keyframes slashVert{0%{transform:scaleY(0);transform-origin:top;opacity:1}40%{transform:scaleY(1);opacity:1}100%{opacity:0}}
@keyframes screenSplit{0%{clip-path:polygon(0 0,100% 0,100% 50%,0 50%)}100%{clip-path:polygon(0 0,100% 0,100% 0%,0 0%)}}
@keyframes screenSplitB{0%{clip-path:polygon(0 50%,100% 50%,100% 100%,0 100%)}100%{clip-path:polygon(0 100%,100% 100%,100% 100%,0 100%)}}
@keyframes loaderOut{0%{opacity:1;visibility:visible}100%{opacity:0;visibility:hidden;pointer-events:none}}
@keyframes inkBleed{0%{clip-path:circle(0% at 50% 50%)}100%{clip-path:circle(150% at 50% 50%)}}
@keyframes inkSeal{0%{clip-path:circle(0% at 50% 50%);opacity:1}100%{clip-path:circle(160% at 50% 50%);opacity:1}}
@keyframes closeFadeIn{0%{opacity:0}100%{opacity:1}}
@keyframes toriiRise{from{opacity:0;transform:translateY(22px)}to{opacity:0.28;transform:translateY(0)}}
@keyframes inkDrop{0%{opacity:0;transform:translateY(24px);filter:blur(4px)}100%{opacity:1;transform:translateY(0);filter:blur(0)}}
@keyframes slideR{from{opacity:0;transform:translateX(-22px)}to{opacity:1;transform:translateX(0)}}
@keyframes brushIn{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0% 0 0)}}
@keyframes brushLine{from{transform:scaleX(0);transform-origin:left}to{transform:scaleX(1)}}
@keyframes shimmer{from{background-position:-200% center}to{background-position:200% center}}
@keyframes katanaDraw{from{width:0;opacity:0}to{width:200px;opacity:1}}
@keyframes petalFall{0%{transform:translateY(-20px) rotate(0deg) scale(1);opacity:0}7%{opacity:0.7}90%{opacity:0.35}100%{transform:translateY(105vh) translateX(var(--drift)) rotate(var(--spin)) scale(0.5);opacity:0}}
@keyframes petalSway{0%,100%{margin-left:0}50%{margin-left:var(--sway)}}
@keyframes kanjiFloat{0%,100%{opacity:${dark ? 0.022 : 0.038};transform:translateY(0) rotate(0deg)}40%{opacity:${dark ? 0.048 : 0.07};transform:translateY(-14px) rotate(1.5deg)}70%{opacity:${dark ? 0.03 : 0.05};transform:translateY(9px) rotate(-1deg)}}
@keyframes scrollDot{0%{transform:translateY(-100%);opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateY(450%);opacity:0}}
@keyframes pulseDot{0%,100%{box-shadow:0 0 0 0 rgba(192,57,43,0.6)}50%{box-shadow:0 0 0 8px rgba(192,57,43,0)}}
@keyframes formPulse{0%,100%{box-shadow:none}50%{box-shadow:0 0 22px rgba(192,57,43,0.18)}}
@keyframes inkSplash{0%{transform:scale(0) rotate(-10deg);opacity:0}60%{transform:scale(1.08) rotate(3deg);opacity:1}100%{transform:scale(1) rotate(0deg);opacity:1}}
@keyframes rowSlash{0%{transform:scaleX(0) translateY(-50%);transform-origin:left;opacity:1}50%{transform:scaleX(1) translateY(-50%);opacity:1}100%{opacity:0}}
@keyframes stUnlock{0%{transform:scale(0.2) rotate(-20deg);opacity:0}50%{transform:scale(1.2) rotate(4deg);opacity:1}80%{transform:scale(0.95) rotate(-1deg)}100%{transform:scale(1) rotate(0deg);opacity:1}}
@keyframes stLineDraw{from{stroke-dashoffset:var(--dlen,600);opacity:0}to{stroke-dashoffset:0;opacity:1}}
@keyframes stGoldPulse{0%,100%{filter:drop-shadow(0 0 3px var(--gc)) drop-shadow(0 0 6px var(--gc))}50%{filter:drop-shadow(0 0 9px var(--gc)) drop-shadow(0 0 22px var(--gc))}}
@keyframes stRotate{from{stroke-dashoffset:0}to{stroke-dashoffset:-220}}
@keyframes stSpark{0%{opacity:1;transform:translate(0,0) scale(1)}100%{opacity:0;transform:translate(var(--tx),var(--ty)) scale(0)}}
@keyframes stPanelIn{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
@keyframes stRingExp{from{r:22;opacity:0.9}to{r:52;opacity:0}}
@keyframes stTreeIn{from{opacity:0;transform:scale(0.97)}to{opacity:1;transform:scale(1)}}
@keyframes stScanline{0%{top:-4px}100%{top:100%}}
@keyframes stShimmerNode{0%{background-position:200% center}100%{background-position:-200% center}}
@keyframes windFlow{0%{transform:translateX(-90px) translateY(0px);opacity:0}7%{opacity:1}88%{opacity:0.75}100%{transform:translateX(110vw) translateY(var(--drift,0px));opacity:0}}
@keyframes windDown{0%{transform:translateY(-10px) scaleY(0.4);opacity:0}35%{opacity:1;transform:translateY(0px) scaleY(1)}100%{transform:translateY(22px) scaleY(0.6);opacity:0}}
@keyframes reticleRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes reticlePulse{0%{transform:scale(0.5);opacity:0.55}100%{transform:scale(2.2);opacity:0}}
@keyframes constellationTwinkle{0%,100%{opacity:0.15}50%{opacity:0.55}}
@keyframes constellationFadeIn{0%{opacity:0;transform:scale(0)}40%{opacity:0.8}100%{opacity:var(--op,0.22)}}
@keyframes constellationLineDraw{from{stroke-dashoffset:var(--clen,200);opacity:0}to{stroke-dashoffset:0;opacity:var(--lop,0.12)}}
@keyframes lampSwing{0%{transform:rotate(0deg)}15%{transform:rotate(18deg)}30%{transform:rotate(-14deg)}45%{transform:rotate(10deg)}60%{transform:rotate(-6deg)}75%{transform:rotate(3deg)}90%{transform:rotate(-1deg)}100%{transform:rotate(0deg)}}
@keyframes candleFlicker{0%{opacity:0.85;transform:scale(0.98)}100%{opacity:1;transform:scale(1.02)}}

.gold-dark{font-family:'Zen Old Mincho','Shippori Mincho B1','Noto Serif JP',serif;font-style:normal;font-weight:900;display:inline-block;letter-spacing:0.04em;background:linear-gradient(160deg,#c8a84b 0%,#f0d080 30%,#fff8d0 50%,#e0bb55 70%,#c8a84b 100%);background-size:300% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent;animation:shimmer 4s 1.5s linear infinite;filter:drop-shadow(0 2px 18px rgba(201,168,76,0.35));}
.gold-light{font-family:'Zen Old Mincho','Shippori Mincho B1','Noto Serif JP',serif;font-style:normal;font-weight:900;display:inline-block;letter-spacing:0.04em;background:linear-gradient(160deg,#7a4e0a 0%,#c9a84c 30%,#f5d47a 50%,#9a6a18 70%,#7a4e0a 100%);background-size:300% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent;animation:shimmer 4s 1.5s linear infinite;filter:drop-shadow(0 2px 14px rgba(160,100,20,0.3));}
.wipe2{opacity:0;transform:translateY(28px);transition:opacity 0.9s cubic-bezier(0.22,1,0.36,1),transform 0.9s cubic-bezier(0.22,1,0.36,1);}
.wipe2.vis{opacity:1;transform:translateY(0);}
.nlink2{font-family:'DM Mono';font-size:11px;letter-spacing:3px;color:${dark ? "rgba(240,232,218,0.72)" : "rgba(160,30,10,0.75)"};text-decoration:none;position:relative;transition:color 0.3s,text-shadow 0.3s;margin-left:28px;cursor:none;text-shadow:${dark ? "0 0 12px rgba(240,232,218,0.25)" : "0 0 10px rgba(192,57,43,0.2)"};}
.nlink2::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1px;background:#c0392b;transition:width 0.4s cubic-bezier(0.22,1,0.36,1);}
.nlink2:hover{color:${dark ? "#e8e0d0" : "#1a1208"};}
.nlink2:hover::after{width:100%;}
.wrow{display:grid;grid-template-columns:80px 1fr 110px;align-items:stretch;position:relative;overflow:hidden;border-bottom:1px solid ${dark ? "rgba(201,168,76,0.07)" : "rgba(26,18,8,0.07)"};transition:background 0.38s;cursor:none;}
.wrow:first-child{border-top:1px solid ${dark ? "rgba(201,168,76,0.07)" : "rgba(26,18,8,0.07)"};}
.wrow:hover{background:${dark ? "rgba(192,57,43,0.04)" : "rgba(192,57,43,0.025)"};}
.stag{font-family:'DM Mono';font-size:9px;letter-spacing:2px;padding:3px 9px;border:1px solid ${dark ? "rgba(240,230,210,0.28)" : "rgba(192,57,43,0.35)"};color:${dark ? "rgba(240,230,210,0.75)" : "rgba(160,30,10,0.75)"};transition:border-color 0.3s,color 0.3s;}
.fcard{padding:22px 24px;border:1px solid ${dark ? "rgba(201,168,76,0.1)" : "rgba(26,18,8,0.09)"};background:${dark ? "rgba(20, 15, 10, 0.3)" : "rgba(255,255,255,0.4)"};backdrop-filter:blur(12px);transition:border-color 0.35s,background 0.35s,box-shadow 0.35s;cursor:none;position:relative;overflow:hidden;}
.fcard:hover{border-color:rgba(192,57,43,0.35);background:${dark ? "rgba(192,57,43,0.06)" : "rgba(192,57,43,0.04)"};animation:formPulse 2s ease infinite;}
.jinput{background:${dark ? "rgba(255,255,255,0.03)" : "rgba(26,18,8,0.04)"};backdrop-filter:blur(8px);border:0;border-bottom:1px solid ${dark ? "rgba(255,255,255,0.15)" : "rgba(26,18,8,0.18)"};padding:13px 4px;color:${dark ? "#e8e0d0" : "#1a1208"};font-family:'Cormorant Garamond',serif;font-size:16px;font-style:italic;outline:none;width:100%;transition:border-color 0.3s;}
.jinput:focus{border-bottom-color:#c0392b;}
.jinput::placeholder{color:${dark ? "rgba(255,255,255,0.25)" : "rgba(26,18,8,0.25)"};}
textarea.jinput{border:1px solid ${dark ? "rgba(255,255,255,0.15)" : "rgba(26,18,8,0.18)"};padding:12px;resize:vertical;}
textarea.jinput:focus{border-color:#c0392b;}
@keyframes inkReveal{0%{clip-path:inset(0 100% 0 0);opacity:0}60%{clip-path:inset(0 0% 0 0);opacity:1}100%{clip-path:inset(0 0% 0 0);opacity:1}}
@keyframes cardLift{from{transform:translateY(28px) scale(0.97);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}
@keyframes vaultScroll{from{transform:translateX(60px);opacity:0}to{transform:translateX(0);opacity:1}}
@keyframes insightGlow{0%,100%{box-shadow:0 0 0 1px var(--ic) inset,0 8px 40px rgba(0,0,0,0.3)}50%{box-shadow:0 0 0 1px var(--ic) inset,0 8px 60px rgba(0,0,0,0.5),0 0 30px var(--ig)}}
@keyframes brushStroke{from{width:0;opacity:0}to{width:100%;opacity:1}}
@keyframes matrixRain{0%{transform:translateY(-100%);opacity:0}5%{opacity:1}90%{opacity:0.6}100%{transform:translateY(100%);opacity:0}}
@keyframes phaseReveal{0%{opacity:0;transform:translateY(40px) scale(0.95)}100%{opacity:1;transform:translateY(0) scale(1)}}
@keyframes cornerPulse{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:0.7;transform:scale(1.15)}}
@keyframes principleSlide{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes inkWash{0%{opacity:0;transform:scale(1.04)}100%{opacity:1;transform:scale(1)}}
@keyframes sealSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes tagFadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}

/* ── INSIGHT CARD STYLES ──────────────────────────────────── */
.insight-card {
  position:relative;overflow:hidden;flex-shrink:0;
  width:340px;border-radius:2px;
  background:${dark ? "rgba(13,12,24,0.4)" : "rgba(245,237,216,0.4)"};
  backdrop-filter:blur(12px);
  transition:all 0.5s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.5s;
  cursor:none;
}
.insight-card:hover { transform:translateY(-10px) scale(1.02); }

/* ── APPROACH CARD STYLES ─────────────────────────────────── */
.approach-card {
  position:relative;overflow:hidden;flex:1;min-width:0;
  transition:flex 0.7s cubic-bezier(0.34,1.2,0.64,1),transform 0.4s ease,box-shadow 0.4s;
  cursor:none;
}
.approach-card.expanded { flex:2.2; }
.approach-card .corner-mark {
  position:absolute;width:14px;height:14px;opacity:0.4;
  transition:opacity 0.3s,transform 0.3s;
}
.approach-card:hover .corner-mark { opacity:0.8;transform:scale(1.2); }
.approach-card .corner-mark.tl { top:10px;left:10px;border-top:1.5px solid;border-left:1.5px solid; }
.approach-card .corner-mark.tr { top:10px;right:10px;border-top:1.5px solid;border-right:1.5px solid; }
.approach-card .corner-mark.bl { bottom:10px;left:10px;border-bottom:1.5px solid;border-left:1.5px solid; }
.approach-card .corner-mark.br { bottom:10px;right:10px;border-bottom:1.5px solid;border-right:1.5px solid; }

::-webkit-scrollbar{width:3px;}
::-webkit-scrollbar-track{background:${dark ? "#07060c" : "#f0e8d8"};}
::-webkit-scrollbar-thumb{background:#c0392b;border-radius:2px;}

/* ── LIGHT MODE ADJUSTMENTS ── */
${!dark ? "" : ""}
`;
