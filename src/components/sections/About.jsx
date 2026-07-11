import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import WindowChrome from "../ui/WindowChrome";
import { profile } from "../../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <SectionHeading
          eyebrow="01 · About"
          title="Full stack, cloud, and data science — under one roof."
          description="Not three separate resumes stitched together — one engineering practice that happens to span the browser, the cloud, and the model."
        />

        <div className="space-y-5">
          {profile.bio.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-ink-muted leading-relaxed"
            >
              {para}
            </motion.p>
          ))}

          <GlassPanel className="mt-6 overflow-hidden">
            <WindowChrome label="~/umer/location.json" status="live" />
            <div className="p-5 font-mono text-[13px] text-ink-muted space-y-1">
              <p><span className="text-cyan">"base"</span>: <span className="text-ink">"{profile.location}"</span>,</p>
              <p><span className="text-cyan">"origin"</span>: <span className="text-ink">"COMSATS University Islamabad"</span>,</p>
              <p><span className="text-cyan">"focus"</span>: <span className="text-ink">"Full Stack · Cloud · ML"</span></p>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
