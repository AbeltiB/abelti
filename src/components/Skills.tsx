import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const marqueeItems = skills.flatMap((group) => group.items);

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack toolbox, tuned for production."
        />
      </div>

      <div className="mb-14 border-y border-border bg-surface/40 py-4">
        <div className="flex w-max gap-3 animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 4) * 70}>
            <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-2">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
