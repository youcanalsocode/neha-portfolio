import Section from "./Section";
import { bring } from "../data/content";
export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-mute">
          <p>I am a Full Stack Software Engineer experienced in requirement analysis, system architecture, application development, and web performance optimization. My work spans modern frontend engineering, backend API development, database optimization, enterprise application security, and AI-enabled analytics.</p>
          <p>I enjoy solving complex engineering problems, improving existing systems, and building intuitive applications that deliver measurable business value. I have worked with cross-functional teams, collaborated with UX/UI designers, contributed to code reviews, and mentored junior developers.</p>
          <p>I am currently serving my notice period and am open to relocating to Dubai, UAE, for the right opportunity.</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-bold">What I bring</h3>
          <ul className="mt-4 space-y-3">
            {bring.map((b) => <li key={b} className="flex gap-3 text-mute"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />{b}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}
