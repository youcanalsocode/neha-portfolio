import Section from "./Section";
import { skills } from "../data/content";
export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Grouped by what I use them for. Highlighted items are the core of my day-to-day work.">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.title} className="card">
            <h3 className="font-bold">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => <li key={i} className={`chip ${g.key?.includes(i) ? "chip-key" : ""}`}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
