import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiMail } from "react-icons/fi";
import WindowChrome from "../ui/WindowChrome";
import StatCounter from "../ui/StatCounter";
import { profile, stats } from "../../data/profile";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="status-pill mb-6"
          >
            <span className="pulse" />
            open to placement &amp; contract work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink"
          >
            I ship systems, <br />
            not just <span className="text-gradient">demos.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-ink-muted text-lg leading-relaxed max-w-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-violet to-cyan px-6 py-3 font-medium text-void hover:opacity-90 transition-opacity"
            >
              View deployed work
            </a>
            <a
              href="#contact"
              className="glass glass-hover rounded-full px-6 py-3 font-medium text-ink flex items-center gap-2"
            >
              <FiMail /> Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted hover:text-ink transition-colors p-3"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
          >
            {stats.map((s, i) => (
              <StatCounter key={s.label} {...s} index={i} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden shadow-2xl shadow-violet/10"
        >
          <WindowChrome label="~/umer/status" status="deployed" />
          <div className="p-5 font-mono text-[13px] leading-relaxed">
            <p className="text-ink-muted">$ whoami</p>
            <p className="text-ink mb-3">{profile.name} — {profile.role}</p>

            <p className="text-ink-muted">$ cat currently.txt</p>
            <p className="text-ink mb-3">
              MSc Data Science @ Brunel · Consulting @ EcoVoltex
            </p>

            <p className="text-ink-muted">$ uptime --systems</p>
            <div className="mt-2 space-y-1.5">
              {["EcoVoltex Internal Suite", "Haji Saab E-Commerce", "AI Inventory (5 stores)"].map(
                (s) => (
                  <div key={s} className="flex items-center gap-2 text-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                    {s}
                    <span className="text-ink-faint ml-auto">online</span>
                  </div>
                )
              )}
            </div>

            <p className="text-ink-muted mt-3">$ _</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-faint text-xs font-mono"
      >
        scroll
        <FiArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  );
}
