/* ── DARK MODE BACKGROUND — Realistic ink-wash Japanese scene
   Mt. Fuji with detailed snow gullies behind a massive crimson
   sun. Dramatic storm clouds. Black maple trunks with fine
   branching and vivid red leaf clusters with ink drips.
   5-storey pagoda, multi-tier pine silhouettes, mirror lake.
─────────────────────────────────────────────────────────── */
export default function DarkModeBg() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1200 900"
        >
            <defs>
                {/* Deep ink sky */}
                <radialGradient id="dSky" cx="50%" cy="28%" r="75%">
                    <stop offset="0%" stopColor="#180c0c" />
                    <stop offset="38%" stopColor="#0c0608" />
                    <stop offset="100%" stopColor="#030204" />
                </radialGradient>

                {/* Crimson sun */}
                <radialGradient id="dSun" cx="50%" cy="42%" r="56%">
                    <stop offset="0%" stopColor="#e83020" />
                    <stop offset="40%" stopColor="#c21810" />
                    <stop offset="78%" stopColor="#960c06" />
                    <stop offset="100%" stopColor="#6a0602" />
                </radialGradient>

                {/* Sun outer halo */}
                <radialGradient id="dHalo" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c01810" stopOpacity="0.42" />
                    <stop offset="48%" stopColor="#8a0c06" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#640602" stopOpacity="0" />
                </radialGradient>

                {/* Mt. Fuji body */}
                <linearGradient id="dFuji" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f6f2ee" />
                    <stop offset="18%" stopColor="#e4e0dc" />
                    <stop offset="48%" stopColor="#504438" />
                    <stop offset="100%" stopColor="#1e1610" />
                </linearGradient>

                {/* Background ranges */}
                <linearGradient id="dMtn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e1612" />
                    <stop offset="100%" stopColor="#080604" />
                </linearGradient>

                {/* Lake */}
                <linearGradient id="dLake" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a0e0e" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#080404" stopOpacity="0.88" />
                </linearGradient>

                {/* Red maple clusters */}
                <radialGradient id="dR1" cx="50%" cy="34%" r="58%">
                    <stop offset="0%" stopColor="#e83a28" />
                    <stop offset="48%" stopColor="#bc1e0e" />
                    <stop offset="100%" stopColor="#8c0c06" />
                </radialGradient>
                <radialGradient id="dR2" cx="44%" cy="28%" r="58%">
                    <stop offset="0%" stopColor="#d43020" />
                    <stop offset="52%" stopColor="#a41808" />
                    <stop offset="100%" stopColor="#780804" />
                </radialGradient>
                <radialGradient id="dR3" cx="54%" cy="36%" r="56%">
                    <stop offset="0%" stopColor="#cc2c1e" />
                    <stop offset="50%" stopColor="#9c1408" />
                    <stop offset="100%" stopColor="#720804" />
                </radialGradient>
                <radialGradient id="dRH" cx="48%" cy="22%" r="50%">
                    <stop offset="0%" stopColor="#ff5848" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="#dd2c1e" stopOpacity="0" />
                </radialGradient>

                <filter id="d2"><feGaussianBlur stdDeviation="2" /></filter>
                <filter id="d5"><feGaussianBlur stdDeviation="5" /></filter>
                <filter id="d10"><feGaussianBlur stdDeviation="10" /></filter>
                <filter id="d18"><feGaussianBlur stdDeviation="18" /></filter>
                <filter id="dGlow">
                    <feGaussianBlur stdDeviation="22" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>

            {/* ── INK SKY ── */}
            <rect width="1200" height="900" fill="url(#dSky)" />

            {/* ── SUN HALO ── */}
            <circle cx="600" cy="318" r="270" fill="url(#dHalo)" filter="url(#d18)" />
            <circle cx="600" cy="318" r="185" fill="url(#dHalo)" opacity="0.52" filter="url(#d10)" />

            {/* ── RED SUN — perfect disc with glow ── */}
            <circle cx="600" cy="318" r="112" fill="url(#dSun)" filter="url(#dGlow)" />
            {/* Subtle fresnel rim highlight */}
            <circle cx="592" cy="306" r="66" fill="none" stroke="#f04832" strokeWidth="1.2" opacity="0.16" />

            {/* ── STORM CLOUDS — billowing ink-wash masses ── */}
            {/* Left cloud */}
            <ellipse cx="205" cy="182" rx="238" ry="88" fill="#221414" opacity="0.96" filter="url(#d18)" />
            <ellipse cx="152" cy="152" rx="182" ry="74" fill="#1c1010" opacity="0.97" filter="url(#d10)" />
            <ellipse cx="82" cy="198" rx="148" ry="66" fill="#180e0e" opacity="0.93" filter="url(#d10)" />
            <ellipse cx="272" cy="128" rx="126" ry="56" fill="#201212" opacity="0.90" filter="url(#d5)" />
            <ellipse cx="348" cy="222" rx="108" ry="48" fill="#180e0e" opacity="0.85" filter="url(#d5)" />
            <ellipse cx="148" cy="248" rx="128" ry="38" fill="#160e0e" opacity="0.58" filter="url(#d10)" />
            {/* Right cloud */}
            <ellipse cx="995" cy="172" rx="228" ry="84" fill="#221414" opacity="0.96" filter="url(#d18)" />
            <ellipse cx="1065" cy="148" rx="182" ry="72" fill="#1c1010" opacity="0.97" filter="url(#d10)" />
            <ellipse cx="1148" cy="192" rx="152" ry="68" fill="#180e0e" opacity="0.92" filter="url(#d10)" />
            <ellipse cx="928" cy="222" rx="116" ry="52" fill="#201212" opacity="0.88" filter="url(#d5)" />
            <ellipse cx="1055" cy="252" rx="125" ry="36" fill="#160e0e" opacity="0.55" filter="url(#d10)" />
            {/* Central wisps across sun */}
            <ellipse cx="600" cy="165" rx="318" ry="54" fill="#160e0e" opacity="0.70" filter="url(#d18)" />
            <ellipse cx="418" cy="218" rx="198" ry="46" fill="#1c1010" opacity="0.62" filter="url(#d10)" />
            <ellipse cx="792" cy="228" rx="178" ry="44" fill="#1c1010" opacity="0.62" filter="url(#d10)" />

            {/* ── MT. FUJI — realistic cone with detailed snow ── */}
            <polygon points="600,66 382,438 818,438" fill="url(#dFuji)" />
            {/* Main snow cap */}
            <polygon points="600,66 568,182 632,182" fill="#f0ece8" opacity="0.94" />
            <polygon points="600,66 544,232  656,232" fill="#e8e4e0" opacity="0.78" />
            <polygon points="600,66 520,296  680,296" fill="#dcd8d4" opacity="0.58" />
            <polygon points="600,66 500,355  700,355" fill="#ccc8c4" opacity="0.36" />
            {/* Fine snow gully lines */}
            <line x1="600" y1="66" x2="574" y2="258" stroke="#d8d4d0" strokeWidth="2.2" opacity="0.50" />
            <line x1="600" y1="66" x2="626" y2="264" stroke="#d8d4d0" strokeWidth="2.2" opacity="0.46" />
            <line x1="600" y1="66" x2="552" y2="316" stroke="#ccc8c4" strokeWidth="1.6" opacity="0.40" />
            <line x1="600" y1="66" x2="650" y2="322" stroke="#ccc8c4" strokeWidth="1.6" opacity="0.37" />
            <line x1="600" y1="66" x2="532" y2="358" stroke="#c0bcb8" strokeWidth="1.2" opacity="0.30" />
            <line x1="600" y1="66" x2="670" y2="365" stroke="#c0bcb8" strokeWidth="1.2" opacity="0.28" />
            <line x1="600" y1="66" x2="515" y2="392" stroke="#b4b0ac" strokeWidth="0.9" opacity="0.22" />
            <line x1="600" y1="66" x2="688" y2="400" stroke="#b4b0ac" strokeWidth="0.9" opacity="0.20" />
            {/* Rock shadow on lower cone */}
            <polygon points="382,438 600,66 818,438" fill="#1c1610" opacity="0.22" />
            <ellipse cx="600" cy="442" rx="226" ry="18" fill="#080608" opacity="0.58" filter="url(#d5)" />

            {/* ── BACKGROUND MOUNTAIN RANGES ── */}
            <path d="M-20,620 Q80,500 165,350 Q190,310 220,350 Q250,395 280,430 Q310,380 345,308 Q375,370 410,430 Q440,380 480,320 Q520,378 560,420 L580,620Z"
                fill="url(#dMtn)" opacity="0.78" filter="url(#d5)" />
            <path d="M580,620 Q620,420 660,295 Q696,360 730,420 Q762,370 800,308 Q836,368 870,430 Q902,375 940,330 Q972,380 1010,430 Q1042,370 1080,320 Q1118,380 1150,440 L1220,440 L1220,620Z"
                fill="url(#dMtn)" opacity="0.72" filter="url(#d5)" />
            {/* Mist between mountain layers */}
            <rect x="0" y="572" width="1200" height="68" fill="#1a0e0e" opacity="0.60" filter="url(#d10)" />

            {/* ── PAGODA — left, dramatic 5-floor silhouette ── */}
            <g transform="translate(194, 346)" opacity="0.94">
                <rect x="-15" y="60" width="30" height="196" fill="#0c0806" />
                {/* Floor 1 */}
                <polygon points="-40,60  40,60  33,16 -33,16" fill="#181008" />
                <line x1="-40" y1="60" x2="-56" y2="74" stroke="#c0392b" strokeWidth="2" opacity="0.88" />
                <line x1="40" y1="60" x2="56" y2="74" stroke="#c0392b" strokeWidth="2" opacity="0.88" />
                <rect x="-33" y="14" width="66" height="5.5" fill="#c0392b" opacity="0.68" />
                {/* Floor 2 */}
                <polygon points="-36,18  36,18  29,-22 -29,-22" fill="#0e0a06" />
                <line x1="-36" y1="18" x2="-50" y2="32" stroke="#c0392b" strokeWidth="1.9" opacity="0.82" />
                <line x1="36" y1="18" x2="50" y2="32" stroke="#c0392b" strokeWidth="1.9" opacity="0.82" />
                <rect x="-29" y="-24" width="58" height="5" fill="#c0392b" opacity="0.64" />
                {/* Floor 3 */}
                <polygon points="-31,-20 31,-20 24,-58 -24,-58" fill="#181008" />
                <line x1="-31" y1="-20" x2="-44" y2="-6" stroke="#c0392b" strokeWidth="1.7" opacity="0.76" />
                <line x1="31" y1="-20" x2="44" y2="-6" stroke="#c0392b" strokeWidth="1.7" opacity="0.76" />
                <rect x="-24" y="-60" width="48" height="4.5" fill="#c0392b" opacity="0.62" />
                {/* Floor 4 */}
                <polygon points="-25,-56 25,-56 19,-90 -19,-90" fill="#0e0a06" />
                <line x1="-25" y1="-56" x2="-36" y2="-42" stroke="#c0392b" strokeWidth="1.6" opacity="0.70" />
                <line x1="25" y1="-56" x2="36" y2="-42" stroke="#c0392b" strokeWidth="1.6" opacity="0.70" />
                <rect x="-19" y="-92" width="38" height="4" fill="#c0392b" opacity="0.59" />
                {/* Floor 5 */}
                <polygon points="-19,-88 19,-88 14,-120 -14,-120" fill="#181008" />
                <line x1="-19" y1="-88" x2="-28" y2="-74" stroke="#c0392b" strokeWidth="1.5" opacity="0.65" />
                <line x1="19" y1="-88" x2="28" y2="-74" stroke="#c0392b" strokeWidth="1.5" opacity="0.65" />
                {/* Finial */}
                <line x1="0" y1="-120" x2="0" y2="-152" stroke="#0e0a06" strokeWidth="4" />
                <circle cx="0" cy="-152" r="3.5" fill="#c0392b" opacity="0.78" />
                {/* Window details */}
                <rect x="-4" y="-5" width="8" height="11" fill="#050302" opacity="0.85" />
                <rect x="-4" y="-42" width="8" height="9" fill="#050302" opacity="0.75" />
                <rect x="-3" y="-76" width="6" height="7" fill="#050302" opacity="0.65" />
            </g>

            {/* ── RED MAPLE — top right, bare black trunk, fine branch network ── */}
            {/* Main trunk — tapers upward */}
            <path d="M990,-20 Q985,60 975,140 Q970,185 960,225" fill="none" stroke="#140c06" strokeWidth="22" strokeLinecap="round" />
            <path d="M990,-20 Q985,60 975,140 Q970,185 960,225" fill="none" stroke="#1e1008" strokeWidth="12" strokeLinecap="round" opacity="0.35" />
            {/* Primary branches */}
            <path d="M975,60  Q940,80  895,102 Q858,120 820,136" fill="none" stroke="#140c06" strokeWidth="11" strokeLinecap="round" />
            <path d="M975,84  Q1018,68 1060,52 Q1096,40 1128,30" fill="none" stroke="#140c06" strokeWidth="10" strokeLinecap="round" />
            <path d="M972,105 Q934,120 888,140 Q850,158 816,172" fill="none" stroke="#140c06" strokeWidth="8.5" strokeLinecap="round" />
            <path d="M972,122 Q1012,108 1054,96 Q1090,86 1120,78" fill="none" stroke="#140c06" strokeWidth="8" strokeLinecap="round" />
            <path d="M968,142 Q934,154 898,168 Q866,180 836,192" fill="none" stroke="#140c06" strokeWidth="6.5" strokeLinecap="round" />
            <path d="M968,156 Q1004,144 1042,134 Q1074,126 1102,120" fill="none" stroke="#140c06" strokeWidth="6" strokeLinecap="round" />
            {/* Secondary branches */}
            <path d="M895,102 Q864,116 830,130 Q800,142 770,152" fill="none" stroke="#140c06" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M895,102 Q890,74  884,52  Q878,34  875,18" fill="none" stroke="#140c06" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M1060,52 Q1092,34 1124,18 Q1150,6 1172,-4" fill="none" stroke="#140c06" strokeWidth="5" strokeLinecap="round" />
            <path d="M1060,52 Q1062,22 1064,-2 Q1064,-18 1064,-30" fill="none" stroke="#140c06" strokeWidth="4" strokeLinecap="round" />
            <path d="M888,140 Q858,152 826,165 Q796,176 768,186" fill="none" stroke="#140c06" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M1054,96 Q1086,82 1116,70 Q1142,60 1164,52" fill="none" stroke="#140c06" strokeWidth="4.2" strokeLinecap="round" />
            <path d="M836,192 Q808,200 780,208 Q754,214 730,220" fill="none" stroke="#140c06" strokeWidth="3.8" strokeLinecap="round" />
            <path d="M1102,120 Q1130,110 1156,102 Q1178,96 1196,90" fill="none" stroke="#140c06" strokeWidth="3.6" strokeLinecap="round" />
            {/* Tertiary fine twigs */}
            <path d="M770,152 Q750,158 732,163" fill="none" stroke="#140c06" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M770,152 Q762,138 758,126" fill="none" stroke="#140c06" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M875,18  Q868,2  862,-10" fill="none" stroke="#140c06" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M1172,-4 Q1186,-14 1198,-22" fill="none" stroke="#140c06" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M1064,-30 Q1065,-44 1064,-56" fill="none" stroke="#140c06" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M768,186 Q748,192 730,198" fill="none" stroke="#140c06" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M730,220 Q712,226 696,230" fill="none" stroke="#140c06" strokeWidth="2.5" strokeLinecap="round" />
            {/* Leaf clusters — large main + secondary + detail */}
            <ellipse cx="806" cy="128" rx="56" ry="40" fill="url(#dR1)" opacity="0.92" />
            <ellipse cx="762" cy="162" rx="50" ry="35" fill="url(#dR2)" opacity="0.90" />
            <ellipse cx="740" cy="148" rx="44" ry="30" fill="url(#dR3)" opacity="0.88" />
            <ellipse cx="876" cy="96" rx="46" ry="32" fill="url(#dR1)" opacity="0.88" />
            <ellipse cx="878" cy="60" rx="42" ry="28" fill="url(#dR2)" opacity="0.86" />
            <ellipse cx="1060" cy="50" rx="48" ry="33" fill="url(#dR1)" opacity="0.90" />
            <ellipse cx="1126" cy="28" rx="42" ry="28" fill="url(#dR2)" opacity="0.86" />
            <ellipse cx="1064" cy="20" rx="34" ry="24" fill="url(#dR3)" opacity="0.83" />
            <ellipse cx="1172" cy="-4" rx="38" ry="26" fill="url(#dR1)" opacity="0.85" />
            <ellipse cx="1120" cy="80" rx="40" ry="27" fill="url(#dR2)" opacity="0.85" />
            <ellipse cx="1165" cy="58" rx="34" ry="23" fill="url(#dR3)" opacity="0.82" />
            <ellipse cx="822" cy="168" rx="44" ry="30" fill="url(#dR2)" opacity="0.88" />
            <ellipse cx="886" cy="162" rx="42" ry="28" fill="url(#dR1)" opacity="0.87" />
            <ellipse cx="1048" cy="106" rx="40" ry="26" fill="url(#dR3)" opacity="0.85" />
            <ellipse cx="960" cy="220" rx="38" ry="24" fill="url(#dR2)" opacity="0.82" />
            {/* Inner shadow depth */}
            <ellipse cx="838" cy="132" rx="42" ry="26" fill="#8c0c06" opacity="0.32" />
            <ellipse cx="1080" cy="56" rx="36" ry="22" fill="#8c0c06" opacity="0.28" />
            {/* Crown highlights */}
            <ellipse cx="800" cy="112" rx="42" ry="18" fill="url(#dRH)" opacity="0.65" />
            <ellipse cx="1066" cy="36" rx="34" ry="16" fill="url(#dRH)" opacity="0.58" />
            {/* Ink drip effect — characteristic feature */}
            <line x1="750" y1="180" x2="746" y2="232" stroke="#c0392b" strokeWidth="2.4" strokeLinecap="round" opacity="0.74" />
            <line x1="775" y1="175" x2="771" y2="234" stroke="#a01808" strokeWidth="2.0" strokeLinecap="round" opacity="0.70" />
            <line x1="800" y1="170" x2="796" y2="225" stroke="#c0392b" strokeWidth="2.0" strokeLinecap="round" opacity="0.68" />
            <line x1="825" y1="185" x2="821" y2="240" stroke="#a01808" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
            <line x1="1122" y1="96" x2="1118" y2="148" stroke="#c0392b" strokeWidth="2.0" strokeLinecap="round" opacity="0.70" />
            <line x1="1145" y1="80" x2="1141" y2="130" stroke="#a01808" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
            <circle cx="746" cy="234" r="4" fill="#c0392b" opacity="0.74" />
            <circle cx="771" cy="236" r="3.5" fill="#a01808" opacity="0.70" />
            <circle cx="796" cy="227" r="3.5" fill="#c0392b" opacity="0.68" />
            <circle cx="821" cy="242" r="3" fill="#a01808" opacity="0.65" />
            <circle cx="1118" cy="150" r="3.5" fill="#c0392b" opacity="0.70" />
            <circle cx="1141" cy="132" r="3" fill="#a01808" opacity="0.65" />

            {/* ── RED MAPLE — left foreground, rising from bottom ── */}
            <path d="M248,920 Q244,840 242,768 Q240,726 238,688 Q236,652 236,614 Q237,588 238,562" fill="none" stroke="#140c06" strokeWidth="18" strokeLinecap="round" />
            <path d="M248,920 Q244,840 242,768 Q240,726 238,688" fill="none" stroke="#1e1008" strokeWidth="9" strokeLinecap="round" opacity="0.30" />
            {/* Branches */}
            <path d="M240,712 Q212,690 176,664 Q146,642 116,622" fill="none" stroke="#140c06" strokeWidth="9" strokeLinecap="round" />
            <path d="M240,692 Q270,668 308,644 Q340,624 374,606" fill="none" stroke="#140c06" strokeWidth="8.5" strokeLinecap="round" />
            <path d="M239,668 Q215,648 182,626 Q154,608 126,594" fill="none" stroke="#140c06" strokeWidth="7" strokeLinecap="round" />
            <path d="M239,650 Q264,630 298,614 Q326,600 356,590" fill="none" stroke="#140c06" strokeWidth="6.5" strokeLinecap="round" />
            <path d="M238,634 Q220,614 196,596 Q174,582 154,572" fill="none" stroke="#140c06" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M238,618 Q255,599 280,586 Q304,574 328,564" fill="none" stroke="#140c06" strokeWidth="5" strokeLinecap="round" />
            <path d="M238,600 Q222,582 202,568 Q184,558 168,550" fill="none" stroke="#140c06" strokeWidth="4.2" strokeLinecap="round" />
            {/* Secondary */}
            <path d="M176,664 Q148,648 120,634 Q96,622 74,614" fill="none" stroke="#140c06" strokeWidth="4.8" strokeLinecap="round" />
            <path d="M176,664 Q166,640 160,618 Q156,600 155,584" fill="none" stroke="#140c06" strokeWidth="4" strokeLinecap="round" />
            <path d="M308,644 Q340,624 375,608 Q404,594 430,582" fill="none" stroke="#140c06" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M308,644 Q318,618 326,596 Q332,578 334,562" fill="none" stroke="#140c06" strokeWidth="3.8" strokeLinecap="round" />
            <path d="M182,626 Q156,610 130,598 Q106,588 84,580" fill="none" stroke="#140c06" strokeWidth="4" strokeLinecap="round" />
            <path d="M298,614 Q326,598 358,586 Q384,576 406,568" fill="none" stroke="#140c06" strokeWidth="3.8" strokeLinecap="round" />
            {/* Tertiary */}
            <path d="M74,614 Q56,606 40,600" fill="none" stroke="#140c06" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M155,584 Q148,566 145,550" fill="none" stroke="#140c06" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M430,582 Q456,568 478,558" fill="none" stroke="#140c06" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M334,562 Q340,544 344,530" fill="none" stroke="#140c06" strokeWidth="2.5" strokeLinecap="round" />
            {/* Leaf clusters */}
            <ellipse cx="160" cy="648" rx="60" ry="42" fill="url(#dR1)" opacity="0.94" />
            <ellipse cx="102" cy="614" rx="52" ry="36" fill="url(#dR2)" opacity="0.92" />
            <ellipse cx="68" cy="608" rx="44" ry="30" fill="url(#dR3)" opacity="0.90" />
            <ellipse cx="300" cy="636" rx="58" ry="40" fill="url(#dR2)" opacity="0.92" />
            <ellipse cx="362" cy="620" rx="54" ry="37" fill="url(#dR1)" opacity="0.90" />
            <ellipse cx="412" cy="606" rx="48" ry="33" fill="url(#dR3)" opacity="0.88" />
            <ellipse cx="186" cy="616" rx="52" ry="36" fill="url(#dR1)" opacity="0.90" />
            <ellipse cx="196" cy="590" rx="46" ry="30" fill="url(#dR2)" opacity="0.88" />
            <ellipse cx="238" cy="574" rx="50" ry="34" fill="url(#dR3)" opacity="0.90" />
            <ellipse cx="324" cy="602" rx="50" ry="34" fill="url(#dR1)" opacity="0.88" />
            <ellipse cx="330" cy="574" rx="44" ry="29" fill="url(#dR2)" opacity="0.86" />
            <ellipse cx="154" cy="590" rx="44" ry="28" fill="#8c0c06" opacity="0.32" />
            <ellipse cx="310" cy="588" rx="42" ry="26" fill="#8c0c06" opacity="0.28" />
            <ellipse cx="162" cy="628" rx="46" ry="20" fill="url(#dRH)" opacity="0.62" />
            <ellipse cx="302" cy="618" rx="44" ry="20" fill="url(#dRH)" opacity="0.56" />
            {/* Drips */}
            <line x1="108" y1="638" x2="104" y2="688" stroke="#c0392b" strokeWidth="2.4" strokeLinecap="round" opacity="0.74" />
            <line x1="132" y1="646" x2="128" y2="698" stroke="#a01808" strokeWidth="2.0" strokeLinecap="round" opacity="0.70" />
            <line x1="92" y1="634" x2="88" y2="680" stroke="#c0392b" strokeWidth="2.0" strokeLinecap="round" opacity="0.68" />
            <circle cx="104" cy="690" r="4" fill="#c0392b" opacity="0.74" />
            <circle cx="128" cy="700" r="3.5" fill="#a01808" opacity="0.70" />
            <circle cx="88" cy="682" r="3.5" fill="#c0392b" opacity="0.68" />

            {/* ── RED MAPLE — right foreground ── */}
            <path d="M1104,920 Q1102,848 1100,782 Q1098,742 1096,706 Q1094,672 1093,644 Q1094,620 1094,596" fill="none" stroke="#140c06" strokeWidth="16" strokeLinecap="round" />
            <path d="M1096,740 Q1068,716 1032,692 Q1002,672 972,656" fill="none" stroke="#140c06" strokeWidth="8" strokeLinecap="round" />
            <path d="M1096,718 Q1128,692 1164,668 Q1194,648 1220,634" fill="none" stroke="#140c06" strokeWidth="7.8" strokeLinecap="round" />
            <path d="M1095,694 Q1070,672 1038,652 Q1010,636 984,624" fill="none" stroke="#140c06" strokeWidth="6.2" strokeLinecap="round" />
            <path d="M1095,676 Q1120,654 1154,636 Q1182,622 1208,612" fill="none" stroke="#140c06" strokeWidth="6" strokeLinecap="round" />
            <path d="M1094,656 Q1075,636 1050,622 Q1028,610 1006,602" fill="none" stroke="#140c06" strokeWidth="4.8" strokeLinecap="round" />
            <path d="M1094,640 Q1114,620 1142,608 Q1166,598 1188,592" fill="none" stroke="#140c06" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M1032,692 Q1002,672 974,658 Q948,646 924,638" fill="none" stroke="#140c06" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M1164,668 Q1192,648 1220,634" fill="none" stroke="#140c06" strokeWidth="4" strokeLinecap="round" />
            <path d="M1038,652 Q1010,636 985,624" fill="none" stroke="#140c06" strokeWidth="3.8" strokeLinecap="round" />
            <path d="M984,624 Q962,614 942,608 Q922,602 904,598" fill="none" stroke="#140c06" strokeWidth="3.2" strokeLinecap="round" />
            {/* Leaf clusters */}
            <ellipse cx="1036" cy="678" rx="58" ry="40" fill="url(#dR1)" opacity="0.92" />
            <ellipse cx="974" cy="652" rx="52" ry="36" fill="url(#dR2)" opacity="0.90" />
            <ellipse cx="922" cy="632" rx="46" ry="32" fill="url(#dR3)" opacity="0.88" />
            <ellipse cx="1162" cy="662" rx="56" ry="38" fill="url(#dR2)" opacity="0.92" />
            <ellipse cx="1220" cy="640" rx="44" ry="30" fill="url(#dR1)" opacity="0.88" />
            <ellipse cx="1060" cy="636" rx="52" ry="36" fill="url(#dR1)" opacity="0.90" />
            <ellipse cx="1096" cy="616" rx="54" ry="36" fill="url(#dR3)" opacity="0.92" />
            <ellipse cx="1140" cy="618" rx="48" ry="33" fill="url(#dR2)" opacity="0.88" />
            <ellipse cx="1186" cy="606" rx="42" ry="28" fill="url(#dR1)" opacity="0.86" />
            <ellipse cx="1008" cy="608" rx="50" ry="34" fill="url(#dR2)" opacity="0.88" />
            <ellipse cx="1044" cy="648" rx="42" ry="26" fill="#8c0c06" opacity="0.30" />
            <ellipse cx="1148" cy="638" rx="40" ry="24" fill="#8c0c06" opacity="0.28" />
            <ellipse cx="1040" cy="660" rx="46" ry="20" fill="url(#dRH)" opacity="0.60" />
            <ellipse cx="1162" cy="646" rx="42" ry="18" fill="url(#dRH)" opacity="0.54" />
            {/* Drips */}
            <line x1="978" y1="674" x2="974" y2="724" stroke="#c0392b" strokeWidth="2.4" strokeLinecap="round" opacity="0.74" />
            <line x1="1002" y1="668" x2="998" y2="720" stroke="#a01808" strokeWidth="2.0" strokeLinecap="round" opacity="0.70" />
            <line x1="1166" y1="682" x2="1162" y2="732" stroke="#c0392b" strokeWidth="2.2" strokeLinecap="round" opacity="0.72" />
            <circle cx="974" cy="726" r="4" fill="#c0392b" opacity="0.74" />
            <circle cx="998" cy="722" r="3.5" fill="#a01808" opacity="0.70" />
            <circle cx="1162" cy="734" r="4" fill="#c0392b" opacity="0.72" />

            {/* ── PINE SILHOUETTES — centre, many detailed tiers ── */}
            {/* Pine A — left centre */}
            <line x1="506" y1="778" x2="506" y2="552" stroke="#080506" strokeWidth="6.5" />
            <polygon points="506,552 462,640 550,640" fill="#070404" opacity="0.97" />
            <polygon points="506,582 464,668 548,668" fill="#060404" opacity="0.98" />
            <polygon points="506,610 464,696 548,696" fill="#060404" opacity="0.98" />
            <polygon points="506,638 462,726 550,726" fill="#050302" opacity="0.97" />
            <polygon points="506,664 461,754 551,754" fill="#050302" opacity="0.96" />
            {/* Upper tier highlight */}
            <polygon points="506,552 498,578 514,578" fill="#0a0806" opacity="0.95" />

            {/* Pine B — right centre */}
            <line x1="694" y1="790" x2="694" y2="564" stroke="#080506" strokeWidth="6.5" />
            <polygon points="694,564 650,652 738,652" fill="#070404" opacity="0.97" />
            <polygon points="694,594 652,680 736,680" fill="#060404" opacity="0.98" />
            <polygon points="694,622 650,710 738,710" fill="#060404" opacity="0.98" />
            <polygon points="694,650 649,738 739,738" fill="#050302" opacity="0.97" />
            <polygon points="694,676 648,766 740,766" fill="#050302" opacity="0.96" />
            <polygon points="694,564 686,590 702,590" fill="#0a0806" opacity="0.95" />

            {/* Pine C — small left accent */}
            <line x1="432" y1="726" x2="432" y2="556" stroke="#080506" strokeWidth="5" />
            <polygon points="432,556 402,626 462,626" fill="#060404" opacity="0.94" />
            <polygon points="432,586 404,654 460,654" fill="#050402" opacity="0.95" />
            <polygon points="432,612 402,682 462,682" fill="#050302" opacity="0.95" />
            <polygon points="432,636 402,708 462,708" fill="#050302" opacity="0.94" />

            {/* Pine D — small right accent */}
            <line x1="784" y1="742" x2="784" y2="574" stroke="#080506" strokeWidth="5" />
            <polygon points="784,574 754,644 814,644" fill="#060404" opacity="0.94" />
            <polygon points="784,604 756,672 812,672" fill="#050402" opacity="0.95" />
            <polygon points="784,630 754,700 814,700" fill="#050302" opacity="0.95" />
            <polygon points="784,654 754,724 814,724" fill="#050302" opacity="0.94" />

            {/* ── STILL LAKE ── */}
            <path d="M0,736 Q280,715 600,728 Q920,741 1200,720 L1200,900 L0,900Z"
                fill="url(#dLake)" opacity="0.84" />
            {/* Sun reflection column + glow */}
            <ellipse cx="600" cy="812" rx="96" ry="24" fill="#aa1808" opacity="0.40" filter="url(#d10)" />
            <ellipse cx="600" cy="828" rx="58" ry="13" fill="#c01808" opacity="0.28" filter="url(#d5)" />
            <rect x="596" y="740" width="8" height="96" fill="#881008" opacity="0.14" filter="url(#d2)" />
            {/* Pagoda reflection */}
            <ellipse cx="194" cy="812" rx="26" ry="6" fill="#0e0806" opacity="0.55" filter="url(#d2)" />
            <rect x="187" y="764" width="14" height="50" fill="#0e0806" opacity="0.28" filter="url(#d2)" />
            {/* Ripple lines */}
            <path d="M185,755 Q370,747 555,756" stroke="#221212" strokeWidth="1.1" fill="none" opacity="0.55" />
            <path d="M645,758 Q828,750 1015,758" stroke="#221212" strokeWidth="1.1" fill="none" opacity="0.50" />
            <path d="M70,778  Q268,770 466,778" stroke="#1c1010" strokeWidth="0.9" fill="none" opacity="0.45" />
            <path d="M734,782 Q932,774 1130,782" stroke="#1c1010" strokeWidth="0.9" fill="none" opacity="0.42" />
            <path d="M330,800 Q514,793 698,800" stroke="#181010" strokeWidth="0.8" fill="none" opacity="0.38" />
            <path d="M502,820 Q684,812 866,820" stroke="#181010" strokeWidth="0.7" fill="none" opacity="0.32" />

            {/* ── CRANES in flight ── */}
            <path d="M345,228 Q360,218 375,228" stroke="#120a06" strokeWidth="2.4" fill="none" opacity="0.72" />
            <path d="M357,218 Q365,212 373,218" stroke="#120a06" strokeWidth="1.6" fill="none" opacity="0.58" />
            <path d="M440,192 Q455,182 470,192" stroke="#120a06" strokeWidth="2.4" fill="none" opacity="0.70" />
            <path d="M452,183 Q460,177 468,183" stroke="#120a06" strokeWidth="1.6" fill="none" opacity="0.55" />
            <path d="M738,210 Q753,200 768,210" stroke="#120a06" strokeWidth="2.4" fill="none" opacity="0.70" />
            <path d="M750,200 Q758,194 766,200" stroke="#120a06" strokeWidth="1.6" fill="none" opacity="0.55" />
            <path d="M830,184 Q845,174 860,184" stroke="#120a06" strokeWidth="2.2" fill="none" opacity="0.65" />
            <path d="M842,175 Q850,169 858,175" stroke="#120a06" strokeWidth="1.5" fill="none" opacity="0.50" />
            <path d="M513,152 Q527,142 541,152" stroke="#120a06" strokeWidth="2.0" fill="none" opacity="0.58" />
            <path d="M668,138 Q682,128 696,138" stroke="#120a06" strokeWidth="1.8" fill="none" opacity="0.50" />

            {/* ── INK VIGNETTE ── */}
            <rect width="1200" height="900" fill="#030204" opacity="0.20" />
            <rect x="0" y="0" width="215" height="900" fill="url(#dSky)" opacity="0.28" />
            <rect x="985" y="0" width="215" height="900" fill="url(#dSky)" opacity="0.28" />
            <rect x="0" y="688" width="1200" height="212" fill="#030204" opacity="0.52" />
        </svg>
    );
}
