import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects, categories } from "../../data/projects";

export default function FeaturedProjects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="03 · Featured work"
            title="Projects, deployed and academic"
            description="Eight builds spanning ride-hailing, e-commerce, internal tooling, and applied machine learning — from a solo final year project to a system running across five live stores."
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
                active === c
                  ? "bg-gradient-to-r from-violet to-cyan text-void border-transparent"
                  : "border-glass-border text-ink-muted hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
