import Section from "./Section";
import { services } from "../data/content";
export default function Services() {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <div key={s.t} className="card"><h3 className="font-bold">{s.t}</h3><p className="mt-3 text-sm text-mute">{s.d}</p></div>)}
      </div>
    </Section>
  );
}
