import { profile } from "@/lib/data";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";
import CopyEmailButton from "./CopyEmailButton";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-2">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s build something that has to work.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
            I&apos;m open to remote senior engineering roles and select freelance
            engagements. If you need someone who can own a system end to end, reach out.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              <MailIcon className="h-4 w-4" />
              Email me
            </a>
            <CopyEmailButton email={profile.email} />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-border pt-8 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-accent-2" />
              {profile.phone}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <GitHubIcon className="h-4 w-4 text-accent-2" />
              github.com/ObsidianBeing
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="h-4 w-4 text-accent-2" />
              linkedin.com/in/abeltibeshana
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
