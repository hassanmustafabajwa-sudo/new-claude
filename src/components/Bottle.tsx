import { useId } from "react";
interface Props { tint?: string; label?: string; silhouette?: boolean; className?: string }
export function Bottle({ tint = "#6b4a35", label = "", silhouette = false, className = "" }: Props) {
  const id = useId().replace(/:/g, "");
  const f = "Hanken Grotesk, sans-serif";
  return (
    <svg viewBox="0 0 200 360" className={className} aria-hidden="true" style={{ filter: "drop-shadow(0 40px 50px rgba(0,0,0,.85))" }}>
      <defs>
        <linearGradient id={`g${id}`} x1="0" x2="1"><stop offset="0" stopColor="#fff" stopOpacity=".3" /><stop offset=".16" stopColor="#fff" stopOpacity=".04" /><stop offset=".82" stopColor="#fff" stopOpacity=".02" /><stop offset="1" stopColor="#fff" stopOpacity=".18" /></linearGradient>
        <linearGradient id={`l${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={tint} /><stop offset="1" stopColor="#080706" /></linearGradient>
        <linearGradient id={`c${id}`} x1="0" x2="1"><stop offset="0" stopColor="#242321" /><stop offset=".3" stopColor="#7c786f" /><stop offset=".55" stopColor="#1a1918" /><stop offset="1" stopColor="#3a3936" /></linearGradient>
      </defs>
      <rect x="78" y="8" width="44" height="58" fill={silhouette ? "#000" : `url(#c${id})`} />
      <rect x="92" y="66" width="16" height="12" fill="#0d0d0c" stroke="#ece6da" strokeOpacity=".25" />
      <rect x="28" y="78" width="144" height="268" rx="4" fill={silhouette ? "#000" : "rgba(255,255,255,.04)"} stroke="#ece6da" strokeOpacity={silhouette ? 0.18 : 0.38} />
      {!silhouette && <>
        <rect x="36" y="150" width="128" height="188" fill={`url(#l${id})`} />
        <rect x="36" y="318" width="128" height="20" fill="#fff" fillOpacity=".09" />
        <rect x="28" y="78" width="144" height="268" rx="4" fill={`url(#g${id})`} />
        <rect x="70" y="196" width="60" height="86" fill="none" stroke="#ece6da" strokeOpacity=".5" />
        <text x="100" y="228" textAnchor="middle" fontSize="6.5" letterSpacing="2.4" fill="#ece6da" fontFamily={f}>NOCTURNE</text>
        <text x="100" y="262" textAnchor="middle" fontSize="5" letterSpacing="1.6" fill="#ece6da" fillOpacity=".7" fontFamily={f}>{label.toUpperCase()}</text>
      </>}
    </svg>
  );
}
