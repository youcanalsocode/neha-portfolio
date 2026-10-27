import { useState, type FormEvent } from "react";
import Section from "./Section";
import { profile } from "../data/content";
type Status = "idle" | "sending" | "sent" | "error" | "fallback";
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = Object.fromEntries(["name", "email", "subject", "message"].map((k) => [k, String(f.get(k) ?? "").trim()]));
    const err: Record<string, string> = {};
    if (!v.name) err.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) err.email = "Enter a valid email address.";
    if (!v.subject) err.subject = "Enter a subject.";
    if (v.message.length < 10) err.message = "Write at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    if (!ENDPOINT) {
      setStatus("fallback");
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(`${v.message}\n\n${v.name} (${v.email})`)}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(v) });
      if (!res.ok) throw new Error();
      setStatus("sent"); e.currentTarget.reset();
    } catch { setStatus("error"); }
  }
  const field = (id: string, label: string, type = "text") => (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">{label}</label>
      <input id={id} name={id} type={type} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined} className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3" />
      {errors[id] && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-red-400">{errors[id]}</p>}
    </div>
  );
  return (
    <Section id="contact" title="Let’s Build Something Impactful.">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-mute">Interested in discussing full-stack engineering opportunities, enterprise application development, or AI-powered products? I’m currently serving my notice period and open to relocation to Dubai, UAE.</p>
          <ul className="mt-6 space-y-3">
            <li>Email: <a className="text-accent underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li>Phone: <a className="text-accent underline" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
            <li>LinkedIn: <a className="text-accent underline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">neha-n-gupta</a></li>
            <li>GitHub: <a className="text-accent underline" href={profile.github} target="_blank" rel="noopener noreferrer">youcanalsocode</a></li>
            <li>Availability: Serving notice period</li>
            <li>Relocation preference: Open to Relocation to Dubai, UAE (visa sponsorship preferred)</li>
          </ul>
          <a href={profile.resume} download className="btn btn-primary mt-6">Download Resume</a>
        </div>
        <form onSubmit={onSubmit} noValidate className="card space-y-4">
          {field("name", "Name")}{field("email", "Email", "email")}{field("subject", "Subject")}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3" />
            {errors.message && <p id="message-err" role="alert" className="mt-1 text-sm text-red-400">{errors.message}</p>}
          </div>
          <button className="btn btn-primary w-full" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
          <p role="status" aria-live="polite" className="text-sm text-mute">
            {status === "sent" && "Message sent. I’ll reply by email."}
            {status === "error" && "Message not sent. Try again or email me directly."}
            {status === "fallback" && "Your email app should open with the message ready to send."}
          </p>
        </form>
      </div>
    </Section>
  );
}
