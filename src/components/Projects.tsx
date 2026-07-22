import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Selected Work"
        title="Systems built to run in production, not just demo well."
        description="A mix of fintech, scheduling, payments, and platform engineering — each shipped end to end."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 90}>
            <article
              className={`card-glow group relative flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-white/15 ${
                project.featured ? "sm:p-8" : ""
              }`}
            >
              {project.featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-accent-2">
                  Featured
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
