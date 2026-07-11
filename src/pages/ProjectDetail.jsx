import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiAlertTriangle,
  FiTrendingUp,
  FiCompass,
  FiImage,
} from "react-icons/fi";
import GlassPanel from "../components/ui/GlassPanel";
import WindowChrome from "../components/ui/WindowChrome";
import { getProjectBySlug, projects } from "../data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

function ArchitectureFlow({ architecture }) {
  const steps = architecture.split("→").map((s) => s.trim());
  return (
    <div className="flex flex-wrap items-stretch gap-3">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="glass rounded-xl px-4 py-3 font-mono text-xs text-ink max-w-[220px]">
            {step}
          </div>
          {i < steps.length - 1 && <span className="text-ink-faint">→</span>}
        </div>
      ))}
    </div>
  );
}

function StatusChrome(status) {
  if (status.includes("DEPLOYED")) return "deployed";
  if (status.includes("ACADEMIC")) return "academic";
  return "live";
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors mb-8"
        >
          <FiArrowLeft /> Back to projects
        </Link>

        <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
          <div className="font-mono text-xs text-ink-faint mb-3">
            {project.year} · {project.role}
          </div>
          <h1 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-4">
            {project.name}
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-glass-border text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Screenshot placeholder / window */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }} className="mt-10">
          <GlassPanel className="overflow-hidden" hover={false}>
            <WindowChrome label={`~/${project.slug}/preview`} status={StatusChrome(project.status)} />
            <div className="aspect-video flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-white/[0.02] to-transparent">
              <FiImage size={28} className="text-ink-faint" />
              <span className="font-mono text-xs text-ink-faint">Screenshot placeholder</span>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Overview / Problem / Solution */}
        <div className="mt-14 grid gap-8">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-3">Overview</h2>
            <p className="text-ink-muted leading-relaxed">{project.overview}</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-amber mb-3">
              Problem statement
            </h2>
            <p className="text-ink-muted leading-relaxed">{project.problem}</p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-mint mb-3">Solution</h2>
            <p className="text-ink-muted leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Architecture */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-violet-soft mb-4 flex items-center gap-2">
            <FiCompass /> Architecture
          </h2>
          <GlassPanel className="p-6 overflow-x-auto" hover={false}>
            <ArchitectureFlow architecture={project.architecture} />
          </GlassPanel>
        </motion.div>

        {/* Features */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan mb-4">Features</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.features.map((f) => (
              <div key={f} className="glass rounded-xl px-4 py-3 flex gap-3 text-sm text-ink">
                <FiCheckCircle className="text-mint shrink-0 mt-0.5" />
                {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-rose mb-4">
            Challenges &amp; how I solved them
          </h2>
          <div className="space-y-3">
            {project.challenges.map((c) => (
              <div key={c} className="glass rounded-xl px-4 py-3 flex gap-3 text-sm text-ink-muted">
                <FiAlertTriangle className="text-amber shrink-0 mt-0.5" />
                {c}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-mint mb-4">Results</h2>
          <div className="space-y-3">
            {project.results.map((r) => (
              <div key={r} className="glass rounded-xl px-4 py-3 flex gap-3 text-sm text-ink">
                <FiTrendingUp className="text-cyan shrink-0 mt-0.5" />
                {r}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Future improvements */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-4">
            Future improvements
          </h2>
          <ul className="space-y-2">
            {project.future.map((f) => (
              <li key={f} className="text-sm text-ink-muted flex gap-2">
                <span className="text-violet-soft mt-1">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Next project */}
        <div className="mt-20 pt-8 border-t border-glass-border flex items-center justify-between">
          <Link to="/#projects" className="text-sm text-ink-muted hover:text-ink transition-colors">
            ← All projects
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="text-sm text-ink hover:text-cyan transition-colors text-right"
          >
            Next: {next.name} →
          </Link>
        </div>
      </div>
    </article>
  );
}
