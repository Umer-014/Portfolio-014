import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import SkillBar from "../ui/SkillBar";
import { skillGroups } from "../../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="04 · Toolkit"
          title="Technical skills"
          description="Grounded in daily use across contract and academic work, not a checklist."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <GlassPanel key={group.label} className="p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-5">
                {group.label}
              </h3>
              <div className="space-y-4">
                {group.skills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
                ))}
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
