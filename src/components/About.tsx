import { education, certifications, languages, profile } from "@/lib/data";
import { MapPinIcon, MailIcon, PhoneIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Hands-on engineer, not a manager who used to code."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              I held COO and CTO titles at two early-stage startups (under 12 people each) —
              but the roles were hands-on rather than executive. I wrote and shipped the code
              myself, and deliberately returned to a full-time individual-contributor
              engineering track to keep building.
            </p>
            <p>
              Today I own backend and full-stack development at{" "}
              <span className="text-foreground">BS Technologies</span>, an intercity
              transport operator, where I architect scheduling systems, constraint-based
              optimization engines, and payment integrations that run in production every
              day. Alongside that, I teach software engineering at{" "}
              <span className="text-foreground">HiLCoE School of Computer Science</span>,
              mentoring the next generation of engineers through full development
              lifecycles.
            </p>
            <p>
              Fully remote for the past year across distributed teams — comfortable with
              async communication, written specs, and self-directed delivery.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-2">
          <div className="space-y-4 rounded-2xl border border-border bg-surface/60 p-6">
            <div className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-2" />
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-sm text-muted">{profile.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-2" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-sm text-muted">{profile.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-2" />
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <p className="text-sm text-muted">{profile.phone}</p>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-sm font-medium text-foreground">{education.degree}</p>
              <p className="text-sm text-muted">
                {education.school} &middot; {education.period}
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-sm font-medium text-foreground">Languages</p>
              <p className="text-sm text-muted">
                {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-sm font-medium text-foreground">Certifications</p>
              <p className="text-sm text-muted">{certifications[0]}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
