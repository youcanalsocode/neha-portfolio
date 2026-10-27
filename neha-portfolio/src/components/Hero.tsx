import { useState } from "react";
import { profile, stats } from "../data/content";
export default function Hero() {
  const [noPhoto, setNoPhoto] = useState(false);
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="hero-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal/40 px-3 py-1 text-sm text-teal">
            <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />{profile.availability}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Building Scalable Web Applications &amp; AI-Powered Digital Experiences.</h1>
          <p className="mt-6 max-w-2xl text-lg text-mute">I’m Neha Nadlal Gupta, a Full Stack Software Engineer with 5+ years of experience designing, developing, optimizing, and securing enterprise-grade web applications. I specialize in React, Angular, Node.js, REST APIs, and AI-powered dashboards, transforming business requirements into reliable, scalable software solutions.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href={profile.resume} download className="btn btn-ghost">Download Resume</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
          <a href="#experience" className="mt-5 inline-block text-sm text-mute underline underline-offset-4 hover:text-accent">Explore My Experience</a>
        </div>
        <div className="mx-auto w-56 sm:w-72 md:w-full md:max-w-xs">
          <div className="aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-panel shadow-[0_0_80px_-20px_#4F8CFF66]">
            {noPhoto ? (
              <div className="grid h-full place-items-center text-6xl font-extrabold text-accent" role="img" aria-label="Neha Nadlal Gupta monogram">NG</div>
            ) : (
              <img src={profile.photo} alt="Portrait of Neha Nadlal Gupta" width={600} height={600} className="h-full w-full object-cover" onError={() => setNoPhoto(true)} />
            )}
          </div>
        </div>
      </div>
      <dl className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card">
            <dt className="order-2 mt-1 text-sm text-mute">{s.label}</dt>
            <dd className="text-3xl font-extrabold text-accent">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
