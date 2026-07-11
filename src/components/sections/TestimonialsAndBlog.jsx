import { FiMessageSquare, FiFileText } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import { testimonials, blogPlaceholder } from "../../data/profile";

export default function TestimonialsAndBlog() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading eyebrow="06 · Word of mouth" title="Testimonials" />
          <div className="mt-8 space-y-4">
            {testimonials.map((t) => (
              <GlassPanel key={t.name} className="p-6" hover={false}>
                <FiMessageSquare className="text-violet-soft mb-3" size={18} />
                <p className="text-ink-muted italic leading-relaxed">"{t.quote}"</p>
                <p className="mt-4 text-sm text-ink font-medium">{t.name}</p>
                <p className="text-xs text-ink-faint">{t.role}</p>
              </GlassPanel>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="07 · Writing" title="Blog" description="Notes on the systems above — coming soon." />
          <div className="mt-8 space-y-3">
            {blogPlaceholder.map((b) => (
              <GlassPanel key={b.title} className="p-5 flex items-center gap-4" hover={false}>
                <FiFileText className="text-cyan shrink-0" size={18} />
                <span className="text-ink text-sm flex-1">{b.title}</span>
                <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wide">
                  {b.status}
                </span>
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
