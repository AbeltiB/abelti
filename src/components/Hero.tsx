import { profile } from "@/lib/data";
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import RoleRotator from "./RoleRotator";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid" />
        <div className="animate-float-slow absolute -left-32 top-10 h-80 w-80 rounded-full bg-accent/25 blur-[110px]" />
        <div className="animate-float-slower absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-2/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-3/15 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {profile.availability} &middot; {profile.location}
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
          Hi, I&apos;m {profile.name.split(" ")[0]} {profile.name.split(" ")[1]} —
          <br className="hidden sm:block" /> I build production systems that ship.
        </h1>

        <div className="mt-5 h-8 font-mono text-lg font-medium sm:text-xl">
          <RoleRotator roles={profile.tagline} />
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-2"
          >
            <DownloadIcon className="h-4 w-4" />
            Download resume
          </a>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
