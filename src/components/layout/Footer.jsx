import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-glass-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Umer Riaz — built with React, Tailwind &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-5 text-ink-muted">
          <a
            href="https://github.com/Umer-014"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="mailto:umer.riaz2810@gmail.com"
            className="hover:text-ink transition-colors"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
