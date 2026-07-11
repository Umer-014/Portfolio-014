import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "About", hash: "about" },
  { label: "Experience", hash: "experience" },
  { label: "Projects", hash: "projects" },
  { label: "Skills", hash: "skills" },
  { label: "Certifications", hash: "certifications" },
  { label: "Contact", hash: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (hash) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/#" + hash);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/80 backdrop-blur-xl border-b border-glass-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-semibold text-ink tracking-tight">
          umer<span className="text-gradient">.dev</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <button
              key={l.hash}
              onClick={() => goTo(l.hash)}
              className="font-mono text-[13px] text-ink-muted hover:text-ink transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="glass glass-hover rounded-full px-4 py-1.5 font-mono text-[13px] text-ink"
          >
            Resume ↓
          </a>
        </div>

        <button
          className="md:hidden text-ink text-xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-void/95 backdrop-blur-xl border-b border-glass-border px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l.hash}
              onClick={() => goTo(l.hash)}
              className="font-mono text-sm text-ink-muted text-left"
            >
              {l.label}
            </button>
          ))}
          <a href="/resume.pdf" download className="font-mono text-sm text-cyan">
            Resume ↓
          </a>
        </div>
      )}
    </header>
  );
}
