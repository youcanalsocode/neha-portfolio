import { useState } from "react";
import Section from "./Section";
import Visual from "./Visual";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "../data/content";
export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <Section id="projects" title="Featured projects" intro="Visuals are illustrative graphics, not screenshots of real employer products.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="card flex flex-col transition-colors hover:border-accent/60">
            <Visual kind={p.kind} />
            <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-mute">{p.overview}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-mute">{p.caps.slice(0, 4).map((c) => <li key={c}>{c}</li>)}</ul>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
            <button className="btn btn-ghost mt-6 self-start" onClick={() => setActive(p)} aria-label={`View details: ${p.title}`}>View Details</button>
          </article>
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </Section>
  );
}
