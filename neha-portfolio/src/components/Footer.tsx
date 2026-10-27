import { nav, profile } from "../data/content";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold">{profile.name}</p>
          <p className="text-sm text-mute">{profile.role}</p>
          <p className="mt-2 text-sm text-mute">Designed with purpose. Built with code.</p>
        </div>
        <ul className="flex flex-wrap gap-4 text-sm text-mute">
          {nav.map((n) => <li key={n}><a className="hover:text-ink" href={n === "Home" ? "#home" : `#${n.toLowerCase()}`}>{n}</a></li>)}
        </ul>
        <ul className="flex gap-4 text-sm">
          <li><a className="text-accent" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="text-accent" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="text-accent" href={`mailto:${profile.email}`}>Email</a></li>
        </ul>
      </div>
      <p className="mt-8 text-center text-xs text-mute">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}
