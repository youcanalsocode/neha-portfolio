import type { Project } from "../data/content";
// Abstract, illustrative visuals (not screenshots of real products).
export default function Visual({ kind }: { kind: Project["kind"] }) {
  const bars = [30, 55, 40, 70, 50, 85, 65];
  return (
    <svg viewBox="0 0 320 150" role="img" aria-label="Illustrative dashboard graphic" className="w-full rounded-xl bg-navy">
      {kind === "agents" && <>{Array.from({ length: 48 }).map((_, i) => <circle key={i} cx={20 + (i % 12) * 24} cy={25 + Math.floor(i / 12) * 26} r="6" fill={i % 7 === 0 ? "#2DD4BF" : i % 11 === 0 ? "#F59E0B" : "#4F8CFF"} opacity=".85" />)}</>}
      {kind === "kpi" && <>{bars.map((h, i) => <rect key={i} x={20 + i * 42} y={140 - h} width="28" height={h} rx="5" fill="#4F8CFF" opacity={0.5 + i * 0.07} />)}<polyline points="34,100 76,80 118,95 160,60 202,70 244,35 286,45" fill="none" stroke="#2DD4BF" strokeWidth="3" /></>}
      {kind === "timeline" && <><line x1="30" y1="75" x2="290" y2="75" stroke="#A7B3C7" strokeOpacity=".4" strokeWidth="3" />{["15", "19", "21"].map((v, i) => <g key={v}><circle cx={50 + i * 110} cy="75" r="14" fill={i === 2 ? "#2DD4BF" : "#4F8CFF"} /><text x={50 + i * 110} y="80" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0B1220">{v}</text></g>)}</>}
      {kind === "shield" && <><path d="M160 20 L220 42 V82 C220 112 192 128 160 138 C128 128 100 112 100 82 V42 Z" fill="none" stroke="#4F8CFF" strokeWidth="3" /><path d="M136 78 L154 96 L186 60" fill="none" stroke="#2DD4BF" strokeWidth="5" strokeLinecap="round" /></>}
      {kind === "hr" && <>{[0, 1, 2].map((r) => <g key={r}><rect x="24" y={24 + r * 36} width="272" height="26" rx="6" fill="#111C30" /><circle cx="42" cy={37 + r * 36} r="8" fill="#4F8CFF" /><rect x="60" y={32 + r * 36} width="90" height="10" rx="4" fill="#A7B3C7" opacity=".5" /><rect x="236" y={31 + r * 36} width="48" height="12" rx="6" fill={r === 1 ? "#F59E0B" : "#2DD4BF"} opacity=".8" /></g>)}</>}
    </svg>
  );
}
