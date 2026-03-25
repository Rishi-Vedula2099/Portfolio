export const INSIGHTS = [
    {
        jp: "剣", en: "LANGUAGES", category: "Full-Stack Mastery",
        color: "#D4A843", glow: "rgba(212,168,67,0.7)",
        scroll: "A warrior's strength lies not in one blade but in mastery of many.",
        insight: "Every language is a weapon with its own weight and reach. C++ forges iron discipline through raw memory management — the training ground that makes all other languages feel like gift. Python grants fluid agility across ML pipelines and APIs. TypeScript brings honour to JavaScript: it eliminates runtime dishonour before battle even begins.",
        tags: ["C++", "Python", "TypeScript", "Java", "SQL", "MongoDB"],
    },
    {
        jp: "雲", en: "CLOUD", category: "Cloud / DevOps Architecture",
        color: "#C4703C", glow: "rgba(196,112,60,0.7)",
        scroll: "Know the terrain before the battle. Infrastructure is geography.",
        insight: "The samurai studies the terrain before drawing a sword. AWS serverless patterns reduce attack surface and operational burden simultaneously. Terraform makes terrain reproducible — the same mountain, every time. CI/CD pipelines are the supply lines that keep armies fed; without them, even the strongest warrior starves.",
        tags: ["AWS", "Terraform", "Docker", "Kubernetes", "Azure", "CI/CD"],
    },
    {
        jp: "知", en: "AI / ML", category: "Artificial Intelligence",
        color: "#9B7FD4", glow: "rgba(155,127,212,0.7)",
        scroll: "Intelligence is earned through pattern and repetition — not raw power alone.",
        insight: "TensorFlow CNNs trained for PattiPal's plant disease detection taught me the cardinal truth: good data beats complex models, every time. A 94% accuracy CNN built from clean leaf patch images outperforms an overwrought transformer on noisy data. NLP for fraud detection reinforced this — signal quality is the real discipline.",
        tags: ["TensorFlow", "scikit-learn", "NLP", "NumPy/Pandas", "CNN", "Fraud Detection"],
    },
    {
        jp: "系", en: "SYSTEMS", category: "System Design & Architecture",
        color: "#5BBF8E", glow: "rgba(91,191,142,0.7)",
        scroll: "A distributed system mirrors a feudal domain — structure prevents collapse.",
        insight: "Distributed systems are feudal domains: redundancy prevents single-point collapse, clear hierarchy (load balancers, workers, caches) prevents chaos, and graceful failure is loyalty, not weakness. CAP theorem is not academic — it is battlefield law I applied designing the ShopMe commerce backend across regions.",
        tags: ["Microservices", "Load Balancing", "CAP Theorem", "Message Queues", "Kafka"],
    },
    {
        jp: "面", en: "FRONTEND", category: "Frontend Craft",
        color: "#6BB8D4", glow: "rgba(107,184,212,0.7)",
        scroll: "The interface is the scroll the lord sees first — it must command respect.",
        insight: "React concurrent rendering and Next.js App Router with Server Components eliminate the gap between engineering intent and felt experience. The user should not perceive rendering — they should perceive only motion and response. Tailwind utility classes are a vocabulary; Redux is grammar. Speak both fluently.",
        tags: ["React", "Next.js", "Tailwind CSS", "Redux", "Streamlit", "Tkinter"],
    },
];

export const APPROACHES = [
    {
        phase: "壱", en: "PHASE I", jp: "観察",
        title: "Observe & Strategise",
        sub: "Planning & Discovery",
        discipline: "武士の観察 · Samurai Observation",
        color: "#5BBF8E", glow: "rgba(91,191,142,0.85)", matrixColor: "#5BBF8E",
        desc: "Before a sword is drawn, the terrain is studied. I begin every engagement by mapping the battlefield — your goals, system constraints, and pain points. Cloud infrastructure, CI/CD pipeline, or full-stack architecture: alignment from day one produces a roadmap with no surprises. The samurai who fights without a plan fights twice.",
        principle: "孫子曰：知彼知己，百戰不殆 · Know yourself, know the enemy — a hundred battles, a hundred victories.",
    },
    {
        phase: "弐", en: "PHASE II", jp: "実践",
        title: "Build & Iterate",
        sub: "Development & Progress",
        discipline: "剣士の修練 · The Swordsman's Practice",
        color: "#C0392B", glow: "rgba(192,57,43,0.85)", matrixColor: "#C0392B",
        desc: "Once strategy is sealed, I architect robust, scalable systems — cloud resource planning, infrastructure-as-code, DevOps pipelines. Regular dispatches keep you informed as implementation progresses. The swordsman trains ten thousand cuts before the duel. Each iteration refines; each deployment is tested in the dojo before the field.",
        principle: "七回転んで八回起き · Fall seven times, rise eight — iteration is the discipline of mastery.",
    },
    {
        phase: "参", en: "PHASE III", jp: "極意",
        title: "Refine & Deliver",
        sub: "Mastery & Deployment",
        discipline: "匠の極意 · The Craftsman's Secret",
        color: "#C4703C", glow: "rgba(196,112,60,0.85)", matrixColor: "#C4703C",
        desc: "The final pass is where ordinary becomes enduring. Comprehensive testing suites, zero-downtime deployments, monitoring dashboards and post-launch refinement cycles. The master swordsmith folds steel a thousand times — not because one fold is insufficient, but because the thousandth fold is the one that decides the blade's fate.",
        principle: "守破離 · Shu Ha Ri — first follow the rules, then bend them, then transcend them.",
    },
];
