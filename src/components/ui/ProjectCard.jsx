import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import WindowChrome from "./WindowChrome";
import GlassPanel from "./GlassPanel";

const statusToChrome = (status) => {
  if (status.includes("DEPLOYED")) return "deployed";
  if (status.includes("ACADEMIC")) return "academic";
  return "live";
};

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Link to={`/projects/${project.slug}`} className="block h-full group">
        <GlassPanel className="h-full flex flex-col overflow-hidden">
          <WindowChrome label={`~/${project.slug}`} status={statusToChrome(project.status)} />
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display font-semibold text-lg text-ink group-hover:text-gradient transition-colors">
                {project.name}
              </h3>
              <FiArrowUpRight className="text-ink-faint group-hover:text-cyan transition-colors shrink-0 mt-1" />
            </div>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-1 rounded-md bg-white/5 border border-glass-border text-ink-muted"
                >
                  {t}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="font-mono text-[10px] px-2 py-1 text-ink-faint">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            <div className="mt-4 font-mono text-[10px] tracking-wide text-ink-faint">
              {project.status}
            </div>
          </div>
        </GlassPanel>
      </Link>
    </motion.div>
  );
}
