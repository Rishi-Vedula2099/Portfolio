"use client";

import Wipe from "@/components/ui/Wipe";
import ToriiDivider from "@/components/ui/ToriiDivider";
import SkillTreeWidget from "@/components/skill-tree/SkillTreeWidget";

export default function Skills({ dark }: { dark: boolean }) {
    const border = dark ? "rgba(255,255,255,0.05)" : "rgba(26,18,8,0.09)";

    return (
        <section
            id="skills"
            style={{
                borderTop: `1px solid ${border}`,
                borderBottom: `1px solid ${border}`,
                padding: "80px 0",
            }}
        >
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>
                <ToriiDivider label="技芸 · DISCIPLINES" dark={dark} />
                <Wipe>
                    <SkillTreeWidget dark={dark} />
                </Wipe>
            </div>
        </section>
    );
}
