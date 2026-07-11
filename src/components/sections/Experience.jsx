import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import { experience, education } from "../../data/profile";

function TimelineItem({ icon: Icon, title, subtitle, period, location, summary, highlights, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-10"
    >
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full glass flex items-center justify-center text-cyan">
        <Icon size={12} />
      </div>
      <GlassPanel className="p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-ink text-lg">{title}</h3>
          <span className="font-mono text-xs text-ink-faint">{period}</span>
        </div>
        <div className="text-sm text-ink-muted mb-3">
          {subtitle}
          {location ? ` · ${location}` : ""}
        </div>
        {summary && <p className="text-ink-muted text-sm leading-relaxed mb-3">{summary}</p>}
        {highlights && (
          <ul className="space-y-1.5">
            {highlights.map((h) => (
              <li key={h} className="text-sm text-ink flex gap-2">
                <span className="text-mint mt-1">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </GlassPanel>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="02 · Track record"
          title="Experience & education"
          description="Contract work and internship experience, running in parallel with an MSc built to sharpen the data science side of the same practice."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">Experience</h3>
            <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-glass-border">
              {experience.map((e, i) => (
                <TimelineItem
                  key={e.id}
                  icon={FiBriefcase}
                  title={e.role}
                  subtitle={e.company}
                  period={e.period}
                  location={e.type}
                  summary={e.summary}
                  highlights={e.highlights}
                  index={i}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">Education</h3>
            <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-glass-border">
              {education.map((e, i) => (
                <TimelineItem
                  key={e.id}
                  icon={FiBookOpen}
                  title={e.degree}
                  subtitle={e.institution}
                  period={e.period}
                  summary={e.detail}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
