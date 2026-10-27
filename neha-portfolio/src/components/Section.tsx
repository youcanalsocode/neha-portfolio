import type { ReactNode } from "react";
export default function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-mute">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
export function Bold({ text }: { text: string }) {
  return <>{text.split("**").map((p, i) => (i % 2 ? <strong key={i} className="font-semibold text-ink">{p}</strong> : <span key={i}>{p}</span>))}</>;
}
