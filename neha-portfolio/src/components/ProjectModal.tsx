import { useEffect, useRef } from "react";
import type { Project } from "../data/content";
export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  const rows: [string, string][] = [["Problem", project.problem], ["Approach", project.approach], ["Architecture", project.architecture], ["Technical decisions", project.decisions], ["Outcomes", project.outcomes]];
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="pm-title" className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-panel p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <h3 id="pm-title" className="text-2xl font-extrabold">{project.title}</h3>
          <button ref={closeRef} className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
        <dl className="mt-6 space-y-5">
          {rows.map(([k, v]) => <div key={k}><dt className="font-semibold text-accent">{k}</dt><dd className="mt-1 text-mute">{v}</dd></div>)}
        </dl>
        <p className="mt-6 text-xs text-mute">General description only. Confidential employer details, code and system specifics are intentionally omitted.</p>
      </div>
    </div>
  );
}
