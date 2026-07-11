import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import GlassPanel from "../ui/GlassPanel";
import WindowChrome from "../ui/WindowChrome";
import { profile } from "../../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          align="center"
          eyebrow="08 · Contact"
          title="Let's build something that ships"
          description="Open to data science placements, combined software/data roles, and contract engineering work."
        />

        <div className="mt-12">
          <GlassPanel className="overflow-hidden" hover={false}>
            <WindowChrome label="~/umer/contact.sh" status="live" />
            <div className="p-8 grid sm:grid-cols-3 gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="glass glass-hover rounded-xl p-5 flex flex-col items-center gap-2 text-center"
              >
                <FiMail size={22} className="text-cyan" />
                <span className="text-sm text-ink">Email</span>
                <span className="text-xs text-ink-faint font-mono break-all">{profile.email}</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover rounded-xl p-5 flex flex-col items-center gap-2 text-center"
              >
                <FiGithub size={22} className="text-violet-soft" />
                <span className="text-sm text-ink">GitHub</span>
                <span className="text-xs text-ink-faint font-mono">Umer-014</span>
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="glass glass-hover rounded-xl p-5 flex flex-col items-center gap-2 text-center"
              >
                <FiDownload size={22} className="text-amber" />
                <span className="text-sm text-ink">Resume</span>
                <span className="text-xs text-ink-faint font-mono">PDF download</span>
              </a>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
