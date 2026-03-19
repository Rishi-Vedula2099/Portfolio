/* ── LIGHT MODE BACKGROUND — Realistic misty gorge ─────────
   Organic karst cliffs with strata, multi-tiered realistic
   green pines, vivid red maples with fine branching and
   dense leaf clusters, river, boulders, waterfalls, pagoda.
─────────────────────────────────────────────────────────── */
export default function LightModeBg() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1200 900"
        >
            <defs>
                {/* Sky */}
                <linearGradient id="lSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ede6dc" />
                    <stop offset="40%" stopColor="#e2d9cc" />
                    <stop offset="75%" stopColor="#d4cabb" />
                    <stop offset="100%" stopColor="#c8bfb0" />
                </linearGradient>

                {/* Cliff faces */}
                <linearGradient id="lCL" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6c6860" />
                    <stop offset="35%" stopColor="#787268" />
                    <stop offset="100%" stopColor="#545048" />
                </linearGradient>
                <linearGradient id="lCR" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#686460" />
                    <stop offset="50%" stopColor="#747068" />
                    <stop offset="100%" stopColor="#524e4a" />
                </linearGradient>
                <linearGradient id="lCM" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7a7870" />
                    <stop offset="100%" stopColor="#5c5a54" />
                </linearGradient>

                {/* River */}
                <linearGradient id="lRiv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9accd8" stopOpacity="0.6" />
                    <stop offset="60%" stopColor="#7ab8cc" stopOpacity="0.68" />
                    <stop offset="100%" stopColor="#64a4bc" stopOpacity="0.55" />
                </linearGradient>

                {/* Waterfall */}
                <linearGradient id="lWf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d8eef8" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#a4cce0" stopOpacity="0.30" />
                </linearGradient>

                {/* Mist */}
                <linearGradient id="lMst" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e6ddd0" stopOpacity="0.88" />
                    <stop offset="100%" stopColor="#d4cab8" stopOpacity="0" />
                </linearGradient>

                {/* Green pine — 3 shades for depth */}
                <radialGradient id="pG1" cx="50%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#5ea040" />
                    <stop offset="55%" stopColor="#3e7828" />
                    <stop offset="100%" stopColor="#285818" />
                </radialGradient>
                <radialGradient id="pG2" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#4e8c34" />
                    <stop offset="60%" stopColor="#346820" />
                    <stop offset="100%" stopColor="#204e10" />
                </radialGradient>
                <radialGradient id="pGS" cx="50%" cy="25%" r="50%">
                    <stop offset="0%" stopColor="#78bc54" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#4a8830" stopOpacity="0" />
                </radialGradient>

                {/* Red maple — vivid crimson with warmth variation */}
                <radialGradient id="mR1" cx="50%" cy="32%" r="58%">
                    <stop offset="0%" stopColor="#f04438" />
                    <stop offset="48%" stopColor="#cc2818" />
                    <stop offset="100%" stopColor="#9e1008" />
                </radialGradient>
                <radialGradient id="mR2" cx="45%" cy="28%" r="58%">
                    <stop offset="0%" stopColor="#e03c2e" />
                    <stop offset="52%" stopColor="#b81e10" />
                    <stop offset="100%" stopColor="#8c0c06" />
                </radialGradient>
                <radialGradient id="mR3" cx="55%" cy="35%" r="56%">
                    <stop offset="0%" stopColor="#d84030" />
                    <stop offset="50%" stopColor="#b02218" />
                    <stop offset="100%" stopColor="#841008" />
                </radialGradient>
                <radialGradient id="mRH" cx="48%" cy="22%" r="50%">
                    <stop offset="0%" stopColor="#ff6050" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#e03028" stopOpacity="0" />
                </radialGradient>

                {/* Moss */}
                <radialGradient id="lMs" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#5a8c3c" stopOpacity="0.68" />
                    <stop offset="100%" stopColor="#386218" stopOpacity="0.38" />
                </radialGradient>

                <filter id="b2"><feGaussianBlur stdDeviation="2" /></filter>
                <filter id="b4"><feGaussianBlur stdDeviation="4" /></filter>
                <filter id="b7"><feGaussianBlur stdDeviation="7" /></filter>
                <filter id="b12"><feGaussianBlur stdDeviation="12" /></filter>
                <filter id="b18"><feGaussianBlur stdDeviation="18" /></filter>
            </defs>

            {/* ── SKY ── */}
            <rect width="1200" height="900" fill="url(#lSky)" />

            {/* ── VERY DISTANT GHOST PEAKS ── */}
            <ellipse cx="600" cy="50" rx="340" ry="680" fill="#ccc6bc" opacity="0.10" filter="url(#b18)" />
            <path d="M340,560 L425,18 L510,560Z" fill="#c0bbb2" opacity="0.15" filter="url(#b18)" />
            <path d="M475,560 L558,-10 L641,560Z" fill="#b8b3aa" opacity="0.13" filter="url(#b18)" />
            <path d="M610,560 L695,30 L780,560Z" fill="#bcb7ae" opacity="0.14" filter="url(#b18)" />
            <path d="M715,560 L800,70 L885,560Z" fill="#b4afa6" opacity="0.12" filter="url(#b18)" />

            {/* ── MID KARST SPIRES — organic, not plain triangles ── */}
            {/* Left spire group */}
            <path d="M260,620 L305,220 Q318,130 332,220 L345,410 Q352,340 360,410 L375,620Z"
                fill="url(#lCM)" opacity="0.52" filter="url(#b4)" />
            <path d="M300,620 L340,270 Q354,175 368,270 L384,620Z"
                fill="#8c8880" opacity="0.42" filter="url(#b4)" />
            {/* Right spire group */}
            <path d="M825,620 L864,200 Q878,105 892,200 L908,380 Q914,310 922,380 L938,620Z"
                fill="url(#lCM)" opacity="0.50" filter="url(#b4)" />
            <path d="M858,620 L896,248 Q910,155 924,248 L940,620Z"
                fill="#8c8880" opacity="0.40" filter="url(#b4)" />
            {/* Centre needle peaks */}
            <path d="M498,620 L520,260 Q530,198 540,260 L555,620Z"
                fill="#988e84" opacity="0.38" filter="url(#b4)" />
            <path d="M648,620 L668,238 Q678,178 688,238 L703,620Z"
                fill="#908880" opacity="0.36" filter="url(#b4)" />

            {/* ── LEFT CLIFF FACE — organic jagged silhouette ── */}
            <path d="M-60,0 L80,0 Q130,80 160,0 L240,0 Q220,60 205,120 L220,280 Q235,380 210,480 L225,620 Q205,720 200,900 L-60,900Z"
                fill="url(#lCL)" />
            {/* Lighter face panel */}
            <path d="M55,0 L230,0 Q215,90 210,180 L220,320 Q230,440 208,560 L215,720 L80,900"
                fill="#908a80" opacity="0.42" filter="url(#b2)" />
            {/* Rock strata — horizontal layering */}
            {[80, 170, 270, 380, 500, 630].map((y, i) => (
                <line key={i} x1="0" y1={y} x2={200 - i * 4} y2={y + 35}
                    stroke="#4e4a44" strokeWidth={1.2 - i * 0.08} opacity={0.30 - i * 0.02} />
            ))}
            {/* Crevice cracks */}
            <path d="M108,0 Q112,120 104,280 Q100,400 115,580" fill="none" stroke="#3e3c38" strokeWidth="2.5" opacity="0.20" />
            <path d="M165,0 Q170,150 160,340 Q155,470 168,640" fill="none" stroke="#3e3c38" strokeWidth="1.8" opacity="0.16" />
            <path d="M82,200 Q90,350 85,500" fill="none" stroke="#3e3c38" strokeWidth="1.2" opacity="0.14" />

            {/* ── LEFT CLIFF TOP — dense layered green pines ── */}
            {/* Canopy base mass */}
            <ellipse cx="-10" cy="2" rx="72" ry="50" fill="#285018" opacity="0.85" />
            <ellipse cx="55" cy="-6" rx="80" ry="54" fill="#326420" opacity="0.82" />
            <ellipse cx="128" cy="0" rx="74" ry="50" fill="#2c5c1c" opacity="0.84" />
            <ellipse cx="196" cy="-4" rx="60" ry="42" fill="#306220" opacity="0.80" />
            {/* Mid foliage layer */}
            <ellipse cx="20" cy="-22" rx="48" ry="30" fill="#3a7028" opacity="0.78" />
            <ellipse cx="75" cy="-28" rx="55" ry="32" fill="#447a2c" opacity="0.75" />
            <ellipse cx="145" cy="-24" rx="52" ry="30" fill="#3e7428" opacity="0.76" />
            {/* Top light layer — fresh tips */}
            <ellipse cx="45" cy="-42" rx="28" ry="16" fill="#58963a" opacity="0.55" />
            <ellipse cx="100" cy="-46" rx="32" ry="18" fill="#5a9a3c" opacity="0.52" />
            <ellipse cx="155" cy="-40" rx="26" ry="15" fill="#549438" opacity="0.50" />
            {/* Sun highlight on top */}
            <ellipse cx="75" cy="-50" rx="40" ry="14" fill="url(#pGS)" opacity="0.60" />
            <ellipse cx="140" cy="-44" rx="32" ry="12" fill="url(#pGS)" opacity="0.50" />

            {/* Waterfall left */}
            <rect x="172" y="115" width="7" height="375" fill="url(#lWf)" filter="url(#b2)" />
            <rect x="174" y="115" width="3" height="375" fill="#e8f4fc" opacity="0.42" filter="url(#b2)" />
            <rect x="170" y="115" width="2" height="375" fill="#c8e4f4" opacity="0.20" />
            <ellipse cx="175" cy="495" rx="20" ry="9" fill="#c0e0f0" opacity="0.48" filter="url(#b4)" />
            <ellipse cx="175" cy="505" rx="30" ry="6" fill="#d0e8f8" opacity="0.25" filter="url(#b7)" />

            {/* ── RIGHT CLIFF FACE ── */}
            <path d="M1260,0 L1080,0 Q1050,70 1020,0 L960,0 Q980,80 995,160 Q985,250 1000,360 Q990,480 1005,620 Q1015,730 1000,900 L1260,900Z"
                fill="url(#lCR)" />
            <path d="M1130,0 Q1100,80 1090,180 Q1080,300 1095,440 Q1105,580 1090,720 L1130,900"
                fill="#908a80" opacity="0.38" filter="url(#b2)" />
            {[75, 168, 275, 392, 515].map((y, i) => (
                <line key={i} x1="1200" y1={y} x2={985 + i * 3} y2={y + 38}
                    stroke="#4e4a44" strokeWidth={1.2 - i * 0.06} opacity={0.28 - i * 0.02} />
            ))}
            <path d="M1082,0 Q1077,155 1086,340 Q1092,480 1080,660" fill="none" stroke="#3e3c38" strokeWidth="2.5" opacity="0.18" />
            <path d="M1022,0 Q1016,170 1025,380 Q1030,510 1018,680" fill="none" stroke="#3e3c38" strokeWidth="1.8" opacity="0.15" />

            {/* ── RIGHT CLIFF TOP — green pines ── */}
            <ellipse cx="1210" cy="2" rx="68" ry="46" fill="#285018" opacity="0.84" />
            <ellipse cx="1148" cy="-4" rx="76" ry="52" fill="#326420" opacity="0.80" />
            <ellipse cx="1075" cy="0" rx="72" ry="48" fill="#2c5c1c" opacity="0.82" />
            <ellipse cx="1008" cy="-4" rx="58" ry="40" fill="#306220" opacity="0.78" />
            <ellipse cx="1178" cy="-20" rx="46" ry="28" fill="#3a7028" opacity="0.75" />
            <ellipse cx="1115" cy="-26" rx="52" ry="30" fill="#447a2c" opacity="0.73" />
            <ellipse cx="1050" cy="-22" rx="48" ry="28" fill="#3e7428" opacity="0.74" />
            <ellipse cx="1150" cy="-40" rx="28" ry="15" fill="#589638" opacity="0.52" />
            <ellipse cx="1085" cy="-44" rx="30" ry="16" fill="#5a9a3c" opacity="0.50" />
            <ellipse cx="1115" cy="-48" rx="36" ry="14" fill="url(#pGS)" opacity="0.55" />

            {/* Waterfall right */}
            <rect x="1010" y="96" width="7" height="345" fill="url(#lWf)" filter="url(#b2)" />
            <rect x="1012" y="96" width="3" height="345" fill="#e8f4fc" opacity="0.38" filter="url(#b2)" />
            <ellipse cx="1013" cy="444" rx="18" ry="8" fill="#c0e0f0" opacity="0.44" filter="url(#b4)" />

            {/* ── MIST BANDS ── */}
            <rect x="0" y="325" width="1200" height="115" fill="url(#lMst)" opacity="0.62" filter="url(#b12)" />
            <ellipse cx="600" cy="412" rx="760" ry="88" fill="#ddd6c8" opacity="0.40" filter="url(#b12)" />
            <rect x="0" y="488" width="1200" height="72" fill="#d6d0c4" opacity="0.24" filter="url(#b12)" />
            <ellipse cx="280" cy="706" rx="360" ry="58" fill="#dcd6ca" opacity="0.30" filter="url(#b12)" />
            <ellipse cx="920" cy="718" rx="340" ry="52" fill="#dcd6ca" opacity="0.26" filter="url(#b12)" />

            {/* ── GREEN PINE TREES — foreground mid, multi-tier realistic ── */}
            {/* Each pine: trunk + 6-7 overlapping tier layers from wide bottom to pointed top */}

            {/* Pine 1 — left bank, tall */}
            <line x1="286" y1="880" x2="286" y2="616" stroke="#1e2e12" strokeWidth="8" />
            {/* Tier 7 bottom wide */}
            <path d="M226,758 Q240,730 256,748 Q268,722 286,738 Q304,722 320,748 Q336,730 350,758Z" fill="url(#pG2)" opacity="0.92" />
            <path d="M232,758 Q248,740 262,752 Q274,728 286,742 Q298,728 312,752 Q326,740 342,758Z" fill="url(#pG1)" opacity="0.55" />
            <path d="M238,726 Q252,700 266,716 Q276,692 286,706 Q296,692 310,716 Q324,700 338,726Z" fill="url(#pG2)" opacity="0.94" />
            <path d="M244,726 Q258,706 270,718 Q278,696 286,710 Q294,696 306,718 Q318,706 332,726Z" fill="url(#pG1)" opacity="0.50" />
            <path d="M248,692 Q260,666 272,682 Q280,660 286,672 Q292,660 304,682 Q316,666 328,692Z" fill="url(#pG2)" opacity="0.94" />
            <path d="M254,692 Q264,672 274,684 Q282,664 286,674 Q290,664 304,684 Q312,672 322,692Z" fill="url(#pG1)" opacity="0.48" />
            <path d="M252,660 Q263,636 274,650 Q281,630 286,640 Q291,630 305,650 Q316,636 326,660Z" fill="url(#pG2)" opacity="0.92" />
            <path d="M256,628 Q266,606 276,618 Q282,600 286,608 Q290,600 302,618 Q312,606 320,628Z" fill="url(#pG2)" opacity="0.90" />
            <path d="M260,596 Q269,578 278,588 Q283,572 286,578 Q289,572 300,588 Q308,578 316,596Z" fill="url(#pG1)" opacity="0.90" />
            <path d="M264,566 Q272,550 280,558 Q284,544 286,549 Q288,544 298,558 Q306,550 312,566Z" fill="url(#pG2)" opacity="0.88" />
            {/* Pine tip */}
            <polygon points="286,616 278,648 294,648" fill="#285018" opacity="0.90" />
            {/* Sunlit highlights */}
            <ellipse cx="272" cy="672" rx="14" ry="10" fill="url(#pGS)" opacity="0.65" />
            <ellipse cx="300" cy="692" rx="12" ry="9" fill="url(#pGS)" opacity="0.55" />
            <ellipse cx="268" cy="636" rx="11" ry="8" fill="url(#pGS)" opacity="0.50" />

            {/* Pine 2 — left bank, slightly shorter */}
            <line x1="418" y1="850" x2="418" y2="626" stroke="#1e2e12" strokeWidth="7" />
            <path d="M358,770 Q373,742 390,758 Q404,732 418,746 Q434,732 452,758 Q466,742 480,770Z" fill="url(#pG2)" opacity="0.90" />
            <path d="M364,770 Q378,752 392,762 Q406,736 418,750 Q432,736 446,762 Q460,752 474,770Z" fill="url(#pG1)" opacity="0.52" />
            <path d="M364,738 Q378,712 392,726 Q406,702 418,714 Q432,702 448,726 Q462,712 476,738Z" fill="url(#pG2)" opacity="0.92" />
            <path d="M368,706 Q380,682 392,696 Q406,674 418,684 Q432,674 450,696 Q462,682 474,706Z" fill="url(#pG2)" opacity="0.92" />
            <path d="M372,676 Q383,654 394,666 Q407,646 418,654 Q430,646 447,666 Q458,654 468,676Z" fill="url(#pG1)" opacity="0.90" />
            <path d="M376,648 Q386,628 396,638 Q407,620 418,626 Q430,620 445,638 Q455,628 464,648Z" fill="url(#pG2)" opacity="0.88" />
            <polygon points="418,626 411,655 425,655" fill="#285018" opacity="0.88" />
            <ellipse cx="406" cy="686" rx="12" ry="9" fill="url(#pGS)" opacity="0.60" />
            <ellipse cx="430" cy="706" rx="11" ry="8" fill="url(#pGS)" opacity="0.52" />

            {/* Pine 3 — right bank */}
            <line x1="772" y1="858" x2="772" y2="630" stroke="#1e2e12" strokeWidth="7" />
            <path d="M712,778 Q727,750 744,764 Q758,738 772,752 Q788,738 806,764 Q820,750 834,778Z" fill="url(#pG2)" opacity="0.90" />
            <path d="M718,778 Q732,758 746,768 Q760,742 772,754 Q786,742 800,768 Q814,758 828,778Z" fill="url(#pG1)" opacity="0.50" />
            <path d="M718,746 Q732,720 746,732 Q760,708 772,720 Q786,708 802,732 Q816,720 830,746Z" fill="url(#pG2)" opacity="0.92" />
            <path d="M722,714 Q734,690 746,702 Q760,680 772,690 Q786,680 800,702 Q812,690 824,714Z" fill="url(#pG2)" opacity="0.92" />
            <path d="M726,682 Q737,660 748,672 Q761,652 772,660 Q785,652 800,672 Q810,660 820,682Z" fill="url(#pG1)" opacity="0.88" />
            <path d="M730,652 Q740,632 750,642 Q762,624 772,630 Q784,624 798,642 Q808,632 816,652Z" fill="url(#pG2)" opacity="0.86" />
            <polygon points="772,630 765,658 779,658" fill="#285018" opacity="0.88" />
            <ellipse cx="760" cy="692" rx="12" ry="9" fill="url(#pGS)" opacity="0.58" />
            <ellipse cx="784" cy="712" rx="11" ry="8" fill="url(#pGS)" opacity="0.50" />

            {/* Pine 4 — right bank, tall */}
            <line x1="908" y1="880" x2="908" y2="616" stroke="#1e2e12" strokeWidth="8" />
            <path d="M848,762 Q862,734 878,750 Q892,724 908,738 Q926,724 942,750 Q956,734 972,762Z" fill="url(#pG2)" opacity="0.92" />
            <path d="M854,762 Q866,742 880,754 Q894,730 908,742 Q924,730 938,754 Q952,742 966,762Z" fill="url(#pG1)" opacity="0.54" />
            <path d="M854,730 Q866,704 880,718 Q894,694 908,706 Q924,694 940,718 Q954,704 968,730Z" fill="url(#pG2)" opacity="0.94" />
            <path d="M858,698 Q868,674 880,686 Q894,664 908,674 Q924,664 940,686 Q952,674 964,698Z" fill="url(#pG2)" opacity="0.94" />
            <path d="M860,666 Q870,644 880,656 Q894,636 908,644 Q924,636 940,656 Q950,644 960,666Z" fill="url(#pG1)" opacity="0.92" />
            <path d="M863,636 Q872,615 882,626 Q895,608 908,614 Q923,608 938,626 Q948,615 957,636Z" fill="url(#pG2)" opacity="0.90" />
            <path d="M866,606 Q874,588 884,596 Q897,580 908,586 Q921,580 934,596 Q942,588 950,606Z" fill="url(#pG1)" opacity="0.88" />
            <polygon points="908,616 900,648 916,648" fill="#285018" opacity="0.90" />
            <ellipse cx="895" cy="676" rx="14" ry="10" fill="url(#pGS)" opacity="0.62" />
            <ellipse cx="922" cy="698" rx="12" ry="9" fill="url(#pGS)" opacity="0.54" />

            {/* ── RED MAPLE — large left foreground ── */}
            {/* Trunk — tapers: thicker at base */}
            <path d="M260,910 Q256,820 258,720 Q260,680 262,620 Q264,578 260,536" fill="none" stroke="#281008" strokeWidth="13" strokeLinecap="round" />
            <path d="M260,890 Q256,820 258,720 Q260,680 262,620 Q264,578 260,536" fill="none" stroke="#361810" strokeWidth="7" strokeLinecap="round" opacity="0.45" />
            {/* Primary branches — realistic tapering lines */}
            <path d="M260,680 Q235,660 188,638 Q158,620 122,608" fill="none" stroke="#28100a" strokeWidth="6" strokeLinecap="round" />
            <path d="M260,650 Q285,628 336,608 Q368,594 404,582" fill="none" stroke="#28100a" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M260,625 Q238,605 198,582 Q170,564 142,548" fill="none" stroke="#28100a" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M260,610 Q282,590 324,572 Q352,558 386,542" fill="none" stroke="#28100a" strokeWidth="4.2" strokeLinecap="round" />
            <path d="M260,596 Q245,574 212,552 Q188,534 165,520" fill="none" stroke="#28100a" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M260,584 Q274,564 306,548 Q328,534 358,522" fill="none" stroke="#28100a" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M260,568 Q250,548 228,530 Q210,516 194,504" fill="none" stroke="#28100a" strokeWidth="2.8" strokeLinecap="round" />
            {/* Secondary branches off primaries */}
            <path d="M188,638 Q162,616 130,604 Q106,592 84,586" fill="none" stroke="#28100a" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M188,638 Q178,612 170,590 Q164,572 162,554" fill="none" stroke="#28100a" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M336,608 Q360,590 394,572 Q418,558 445,548" fill="none" stroke="#28100a" strokeWidth="3" strokeLinecap="round" />
            <path d="M336,608 Q344,584 350,562 Q356,542 358,524" fill="none" stroke="#28100a" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M198,582 Q172,562 148,548 Q126,536 108,530" fill="none" stroke="#28100a" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M324,572 Q348,556 375,544 Q396,534 420,526" fill="none" stroke="#28100a" strokeWidth="2.6" strokeLinecap="round" />
            {/* Tertiary fine twigs */}
            <path d="M84,586  Q68,574 54,568" fill="none" stroke="#28100a" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M84,586  Q76,568 72,552" fill="none" stroke="#28100a" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M445,548 Q462,538 476,530" fill="none" stroke="#28100a" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M445,548 Q452,530 456,516" fill="none" stroke="#28100a" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M162,554 Q152,536 146,520" fill="none" stroke="#28100a" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M358,524 Q366,506 370,492" fill="none" stroke="#28100a" strokeWidth="1.5" strokeLinecap="round" />
            {/* Dense leaf clusters — many overlapping ellipses */}
            {/* Main crown */}
            <ellipse cx="248" cy="516" rx="88" ry="62" fill="url(#mR1)" opacity="0.88" />
            <ellipse cx="178" cy="556" rx="72" ry="52" fill="url(#mR2)" opacity="0.90" />
            <ellipse cx="200" cy="502" rx="62" ry="44" fill="url(#mR3)" opacity="0.86" />
            <ellipse cx="326" cy="542" rx="68" ry="48" fill="url(#mR2)" opacity="0.90" />
            <ellipse cx="344" cy="500" rx="56" ry="40" fill="url(#mR1)" opacity="0.86" />
            <ellipse cx="265" cy="490" rx="66" ry="46" fill="url(#mR3)" opacity="0.92" />
            <ellipse cx="228" cy="468" rx="52" ry="37" fill="url(#mR1)" opacity="0.85" />
            <ellipse cx="295" cy="472" rx="54" ry="38" fill="url(#mR2)" opacity="0.86" />
            {/* Secondary clusters off outer branches */}
            <ellipse cx="110" cy="528" rx="46" ry="32" fill="url(#mR1)" opacity="0.88" />
            <ellipse cx="78" cy="570" rx="38" ry="26" fill="url(#mR2)" opacity="0.86" />
            <ellipse cx="148" cy="504" rx="42" ry="30" fill="url(#mR3)" opacity="0.84" />
            <ellipse cx="438" cy="530" rx="44" ry="30" fill="url(#mR2)" opacity="0.88" />
            <ellipse cx="410" cy="494" rx="38" ry="27" fill="url(#mR1)" opacity="0.85" />
            <ellipse cx="165" cy="542" rx="46" ry="32" fill="url(#mR1)" opacity="0.86" />
            <ellipse cx="358" cy="520" rx="46" ry="32" fill="url(#mR3)" opacity="0.86" />
            {/* Inner depth clusters — slightly darker */}
            <ellipse cx="210" cy="530" rx="50" ry="36" fill="#a01808" opacity="0.35" />
            <ellipse cx="310" cy="516" rx="48" ry="34" fill="#901408" opacity="0.30" />
            {/* Crown highlight — warm light on top */}
            <ellipse cx="250" cy="490" rx="68" ry="28" fill="url(#mRH)" opacity="0.70" />
            <ellipse cx="310" cy="478" rx="46" ry="20" fill="url(#mRH)" opacity="0.55" />

            {/* ── RED MAPLE — mid-left ── */}
            <path d="M370,810 Q366,758 368,706 Q370,672 372,630" fill="none" stroke="#281008" strokeWidth="9" strokeLinecap="round" />
            <path d="M368,714 Q344,694 308,672 Q282,656 256,644" fill="none" stroke="#28100a" strokeWidth="4" strokeLinecap="round" />
            <path d="M368,696 Q394,674 430,654 Q456,638 486,628" fill="none" stroke="#28100a" strokeWidth="3.8" strokeLinecap="round" />
            <path d="M368,680 Q349,660 320,644 Q298,630 278,620" fill="none" stroke="#28100a" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M368,666 Q386,646 414,634 Q436,624 460,616" fill="none" stroke="#28100a" strokeWidth="3.0" strokeLinecap="round" />
            <path d="M308,672 Q282,654 256,644 Q232,634 210,626" fill="none" stroke="#28100a" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M430,654 Q454,638 480,626 Q502,616 524,610" fill="none" stroke="#28100a" strokeWidth="2.6" strokeLinecap="round" />
            <ellipse cx="360" cy="622" rx="68" ry="48" fill="url(#mR1)" opacity="0.90" />
            <ellipse cx="295" cy="640" rx="58" ry="40" fill="url(#mR2)" opacity="0.88" />
            <ellipse cx="428" cy="634" rx="56" ry="40" fill="url(#mR3)" opacity="0.88" />
            <ellipse cx="248" cy="626" rx="46" ry="32" fill="url(#mR1)" opacity="0.86" />
            <ellipse cx="350" cy="606" rx="50" ry="36" fill="url(#mR2)" opacity="0.87" />
            <ellipse cx="318" cy="616" rx="48" ry="33" fill="#a01808" opacity="0.28" />
            <ellipse cx="482" cy="618" rx="44" ry="30" fill="url(#mR1)" opacity="0.85" />
            <ellipse cx="205" cy="622" rx="40" ry="28" fill="url(#mR2)" opacity="0.84" />
            <ellipse cx="524" cy="608" rx="38" ry="26" fill="url(#mR3)" opacity="0.83" />
            <ellipse cx="362" cy="600" rx="54" ry="24" fill="url(#mRH)" opacity="0.65" />

            {/* ── RED MAPLE upper-right cliff ledge ── */}
            <path d="M850,400 Q848,366 848,328 Q848,298 850,268" fill="none" stroke="#281008" strokeWidth="6" strokeLinecap="round" />
            <path d="M848,330 Q824,310 796,294 Q772,280 750,272" fill="none" stroke="#28100a" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M848,316 Q874,296 904,280 Q928,268 954,262" fill="none" stroke="#28100a" strokeWidth="2.6" strokeLinecap="round" />
            <ellipse cx="846" cy="264" rx="60" ry="42" fill="url(#mR1)" opacity="0.90" />
            <ellipse cx="796" cy="278" rx="50" ry="35" fill="url(#mR2)" opacity="0.88" />
            <ellipse cx="902" cy="272" rx="48" ry="33" fill="url(#mR3)" opacity="0.87" />
            <ellipse cx="748" cy="268" rx="38" ry="26" fill="url(#mR1)" opacity="0.85" />
            <ellipse cx="952" cy="258" rx="36" ry="24" fill="url(#mR2)" opacity="0.83" />
            <ellipse cx="848" cy="248" rx="46" ry="20" fill="url(#mRH)" opacity="0.62" />

            {/* ── RED MAPLE — right foreground ── */}
            <path d="M936,910 Q932,820 934,730 Q936,688 938,646 Q940,612 936,578" fill="none" stroke="#281008" strokeWidth="12" strokeLinecap="round" />
            <path d="M934,722 Q908,700 868,676 Q840,656 810,640" fill="none" stroke="#28100a" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M934,700 Q962,678 1004,656 Q1034,640 1068,628" fill="none" stroke="#28100a" strokeWidth="5.2" strokeLinecap="round" />
            <path d="M934,676 Q912,654 876,636 Q850,620 824,608" fill="none" stroke="#28100a" strokeWidth="4.2" strokeLinecap="round" />
            <path d="M934,658 Q958,636 996,620 Q1024,608 1054,598" fill="none" stroke="#28100a" strokeWidth="4.0" strokeLinecap="round" />
            <path d="M934,638 Q918,618 892,602 Q870,590 850,580" fill="none" stroke="#28100a" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M868,676 Q840,658 812,646 Q786,634 762,626" fill="none" stroke="#28100a" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M1004,656 Q1030,638 1060,624 Q1086,614 1110,606" fill="none" stroke="#28100a" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M810,640 Q784,624 760,614" fill="none" stroke="#28100a" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M1068,628 Q1092,614 1116,606" fill="none" stroke="#28100a" strokeWidth="2.5" strokeLinecap="round" />
            {/* Leaf clusters */}
            <ellipse cx="930" cy="578" rx="84" ry="58" fill="url(#mR1)" opacity="0.90" />
            <ellipse cx="862" cy="632" rx="70" ry="50" fill="url(#mR2)" opacity="0.92" />
            <ellipse cx="1000" cy="626" rx="68" ry="48" fill="url(#mR3)" opacity="0.90" />
            <ellipse cx="878" cy="596" rx="58" ry="40" fill="url(#mR1)" opacity="0.86" />
            <ellipse cx="988" cy="592" rx="56" ry="40" fill="url(#mR2)" opacity="0.86" />
            <ellipse cx="930" cy="562" rx="62" ry="42" fill="url(#mR3)" opacity="0.92" />
            <ellipse cx="804" cy="618" rx="52" ry="36" fill="url(#mR2)" opacity="0.88" />
            <ellipse cx="756" cy="608" rx="44" ry="30" fill="url(#mR1)" opacity="0.85" />
            <ellipse cx="1058" cy="614" rx="50" ry="34" fill="url(#mR3)" opacity="0.88" />
            <ellipse cx="1112" cy="602" rx="40" ry="28" fill="url(#mR1)" opacity="0.84" />
            <ellipse cx="845" cy="572" rx="52" ry="36" fill="#a01808" opacity="0.30" />
            <ellipse cx="1010" cy="568" rx="50" ry="34" fill="#901408" opacity="0.28" />
            <ellipse cx="934" cy="554" rx="66" ry="28" fill="url(#mRH)" opacity="0.68" />
            <ellipse cx="876" cy="576" rx="44" ry="22" fill="url(#mRH)" opacity="0.52" />
            <ellipse cx="990" cy="572" rx="42" ry="20" fill="url(#mRH)" opacity="0.50" />

            {/* ── PAGODA — distant misty centre ── */}
            <g transform="translate(601, 448)" opacity="0.60" filter="url(#b2)">
                <rect x="-11" y="30" width="22" height="98" fill="#3c2e1e" />
                <polygon points="-28,30  28,30  22,-10 -22,-10" fill="#4c3e2a" />
                <line x1="-28" y1="30" x2="-38" y2="40" stroke="#4c3e2a" strokeWidth="1.8" />
                <line x1="28" y1="30" x2="38" y2="40" stroke="#4c3e2a" strokeWidth="1.8" />
                <rect x="-22" y="-12" width="44" height="4.5" fill="#c0392b" opacity="0.78" />
                <polygon points="-25,-8  25,-8  19,-46 -19,-46" fill="#3e3020" />
                <line x1="-25" y1="-8" x2="-34" y2="2" stroke="#3e3020" strokeWidth="1.7" />
                <line x1="25" y1="-8" x2="34" y2="2" stroke="#3e3020" strokeWidth="1.7" />
                <rect x="-19" y="-48" width="38" height="4" fill="#c0392b" opacity="0.72" />
                <polygon points="-21,-44 21,-44 16,-78 -16,-78" fill="#4c3e2a" />
                <line x1="-21" y1="-44" x2="-29" y2="-34" stroke="#4c3e2a" strokeWidth="1.6" />
                <line x1="21" y1="-44" x2="29" y2="-34" stroke="#4c3e2a" strokeWidth="1.6" />
                <rect x="-16" y="-80" width="32" height="3.5" fill="#c0392b" opacity="0.68" />
                <polygon points="-17,-76 17,-76 12,-106 -12,-106" fill="#3e3020" />
                <line x1="-17" y1="-76" x2="-24" y2="-66" stroke="#3e3020" strokeWidth="1.5" />
                <line x1="17" y1="-76" x2="24" y2="-66" stroke="#3e3020" strokeWidth="1.5" />
                <rect x="-12" y="-108" width="24" height="3" fill="#c0392b" opacity="0.64" />
                <polygon points="-12,-104 12,-104 8,-130 -8,-130" fill="#4c3e2a" />
                <line x1="-12" y1="-104" x2="-18" y2="-94" stroke="#4c3e2a" strokeWidth="1.4" />
                <line x1="12" y1="-104" x2="18" y2="-94" stroke="#4c3e2a" strokeWidth="1.4" />
                <line x1="0" y1="-130" x2="0" y2="-152" stroke="#2c1e10" strokeWidth="2.8" />
                <circle cx="0" cy="-152" r="2.5" fill="#c0392b" opacity="0.72" />
            </g>

            {/* ── RIVER ── */}
            <path d="M0,822 Q175,795 370,814 Q565,835 760,808 Q960,780 1200,802 L1200,900 L0,900Z"
                fill="url(#lRiv)" />
            <path d="M0,860 Q260,836 530,850 Q800,865 1200,842 L1200,900 L0,900Z"
                fill="#88b8cc" opacity="0.38" />
            {/* Shimmer lines */}
            <path d="M50,840 Q185,832 320,842" stroke="#d4eef8" strokeWidth="1.2" fill="none" opacity="0.58" />
            <path d="M460,848 Q600,840 740,850" stroke="#d4eef8" strokeWidth="1.2" fill="none" opacity="0.52" />
            <path d="M840,836 Q978,828 1110,838" stroke="#d4eef8" strokeWidth="1.1" fill="none" opacity="0.46" />
            <path d="M130,862 Q295,855 460,863" stroke="#c4e2f4" strokeWidth="0.9" fill="none" opacity="0.42" />
            <path d="M690,858 Q860,850 1035,860" stroke="#c4e2f4" strokeWidth="0.9" fill="none" opacity="0.38" />

            {/* ── MOSS-COVERED BOULDERS ── */}
            <ellipse cx="98" cy="875" rx="78" ry="33" fill="#5c5854" />
            <ellipse cx="98" cy="869" rx="62" ry="19" fill="url(#lMs)" />
            <ellipse cx="98" cy="862" rx="42" ry="10" fill="#6a9448" opacity="0.30" />
            <ellipse cx="228" cy="884" rx="56" ry="24" fill="#626058" />
            <ellipse cx="228" cy="878" rx="44" ry="14" fill="url(#lMs)" />
            <ellipse cx="460" cy="892" rx="44" ry="18" fill="#5a5654" />
            <ellipse cx="460" cy="887" rx="32" ry="11" fill="url(#lMs)" />
            <ellipse cx="690" cy="889" rx="38" ry="16" fill="#5c5854" />
            <ellipse cx="870" cy="880" rx="64" ry="27" fill="#626058" />
            <ellipse cx="870" cy="874" rx="50" ry="16" fill="url(#lMs)" />
            <ellipse cx="870" cy="867" rx="34" ry="8" fill="#6a9448" opacity="0.28" />
            <ellipse cx="1022" cy="872" rx="60" ry="25" fill="#5c5854" />
            <ellipse cx="1022" cy="866" rx="48" ry="15" fill="url(#lMs)" />
            <ellipse cx="1152" cy="882" rx="50" ry="21" fill="#626058" />
            {/* Small stones */}
            <ellipse cx="318" cy="896" rx="24" ry="10" fill="#6a6660" />
            <ellipse cx="545" cy="899" rx="20" ry="8" fill="#6a6660" />
            <ellipse cx="778" cy="894" rx="22" ry="9" fill="#6a6660" />
            <ellipse cx="1082" cy="897" rx="20" ry="8" fill="#6a6660" />

            {/* ── BIRDS ── */}
            <path d="M418,145 Q431,136 444,145" stroke="#48403a" strokeWidth="2.0" fill="none" opacity="0.55" />
            <path d="M542,110 Q555,101 568,110" stroke="#48403a" strokeWidth="2.0" fill="none" opacity="0.48" />
            <path d="M632,158 Q645,149 658,158" stroke="#48403a" strokeWidth="1.8" fill="none" opacity="0.50" />
            <path d="M726,86  Q739,77  752,86" stroke="#48403a" strokeWidth="1.8" fill="none" opacity="0.42" />
            <path d="M814,130 Q825,121 836,130" stroke="#48403a" strokeWidth="1.5" fill="none" opacity="0.38" />
            <path d="M488,192 Q499,184 510,192" stroke="#48403a" strokeWidth="1.5" fill="none" opacity="0.36" />

            {/* ── ATMOSPHERE ── */}
            <rect width="1200" height="900" fill="#e8d8be" opacity="0.09" />
        </svg>
    );
}
