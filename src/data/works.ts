import type { Work } from "@/types";

export const WORKS: Work[] = [
    {
        no: "壱", en: "01", title: "Hyoshi", sub: "Cover · Identity", kanji: "表", year: "二〇二四",
        tags: ["Design Systems", "Next.js", "Figma"],
        desc: "Type-first design system for editorial publishing. Obsessive typographic hierarchy meets modular component logic.",
    },
    {
        no: "弐", en: "02", title: "Kasumi", sub: "Mist · Infrastructure", kanji: "霞", year: "二〇二四",
        tags: ["Go", "Kubernetes", "gRPC"],
        desc: "Zero-downtime deployment orchestration across distributed clusters. Built for 99.99% uptime SLA.",
    },
    {
        no: "参", en: "03", title: "Sora", sub: "Sky · Real-time", kanji: "空", year: "二〇二三",
        tags: ["Rust", "WebRTC", "CRDT"],
        desc: "WebSocket-native collaborative whiteboarding at 60fps with conflict-free replicated data structures.",
    },
    {
        no: "肆", en: "04", title: "Kage", sub: "Shadow · Security", kanji: "影", year: "二〇二三",
        tags: ["Cryptography", "Rust", "WASM"],
        desc: "Zero-knowledge authentication layer with hardware key attestation and post-quantum cryptography.",
    },
];
