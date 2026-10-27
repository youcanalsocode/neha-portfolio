import Section from "./Section";
export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="card max-w-xl">
        <h3 className="text-lg font-bold">Bachelor of Engineering in Computer Engineering</h3>
        <p className="mt-1 text-mute">Padmabhushan Vasantdada Patil Pratishthan’s College of Engineering</p>
        <p className="mt-1 text-sm text-mute">Graduated January 2021</p>
      </div>
      {/* Optional: fill in only once details are confirmed. Leave hidden until then. */}
      <div className="mt-6 max-w-xl rounded-2xl border border-dashed border-white/15 p-5 text-sm text-mute" hidden>
        <p>Additional credentials: [IoT and Game Development certification: add title, issuer, date]</p>
        <p>[Microsoft Technical Consultant Trainee: add dates and summary]</p>
      </div>
    </Section>
  );
}
