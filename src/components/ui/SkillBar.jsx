import { motion } from "framer-motion";

export default function SkillBar({ name, level, index = 0 }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm text-ink">{name}</span>
        <span className="font-mono text-xs text-ink-muted">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: index * 0.06, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
        />
      </div>
    </div>
  );
}
