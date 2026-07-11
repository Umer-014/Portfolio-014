import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import { certifications } from "../../data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="05 · Credentials"
          title="Certifications & education credentials"
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassPanel className="p-6 h-full">
                <FiAward className="text-amber mb-3" size={20} />
                <h3 className="font-display font-semibold text-ink">{c.title}</h3>
                <p className="text-sm text-cyan mt-1">{c.issuer}</p>
                <p className="text-sm text-ink-muted mt-3 leading-relaxed">{c.note}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
