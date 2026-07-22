import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Six years of shipping, owning, and operating."
        description="From startup CTO writing every line of code, to senior engineer running production systems at scale."
      />

      <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <li key={`${job.org}-${job.period}`}>
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent-2 ring-4 ring-accent-2/15" />

            <Reveal delay={Math.min(i * 60, 240)}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent-2">
                {job.org}
                {job.context ? <span className="text-muted"> &middot; {job.context}</span> : null}
              </p>
              <p className="text-xs text-muted">{job.location}</p>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
