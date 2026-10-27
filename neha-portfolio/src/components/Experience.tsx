import Section, { Bold } from "./Section";
import { experience } from "../data/content";
export default function Experience() {
  return (
    <Section id="experience" title="Professional experience">
      <ol className="space-y-8 border-l border-white/10 pl-6 sm:pl-8">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-accent sm:-left-[39px]" aria-hidden="true" />
            <div className="card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold">{e.company}</h3>
                <span className="text-sm text-mute">{e.dates}</span>
              </div>
              <p className="mt-1 flex flex-wrap items-center gap-3 text-accent">{e.title}
                {e.status && <span className="rounded-full border border-teal/40 px-2.5 py-0.5 text-xs text-teal">{e.status}</span>}
              </p>
              <ul className="mt-5 space-y-3 text-mute">
                {e.bullets.map((b) => <li key={b} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" /><span><Bold text={b} /></span></li>)}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">{e.stack.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
