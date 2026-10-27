import { useState } from "react";
import { nav, profile } from "../data/content";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const href = (n: string) => (n === "Home" ? "#home" : `#${n.toLowerCase()}`);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="text-xl font-extrabold">NG<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-6 text-sm text-mute lg:flex">
          {nav.map((n) => <li key={n}><a className="hover:text-ink" href={href(n)}>{n}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <a href={profile.resume} download className="btn btn-primary hidden sm:inline-flex">Download Resume</a>
          <button className="btn btn-ghost lg:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-white/10 px-5 pb-4 lg:hidden">
          {nav.map((n) => <li key={n}><a className="block py-3 text-mute hover:text-ink" href={href(n)} onClick={() => setOpen(false)}>{n}</a></li>)}
          <li><a href={profile.resume} download className="btn btn-primary mt-2 w-full">Download Resume</a></li>
        </ul>
      )}
    </header>
  );
}
