import type { ReactNode } from "react";
import { motion } from "framer-motion";
const ease = [0.16, 1, 0.3, 1] as const;
export function Lines({ lines, delay = 0 }: { lines: string[]; delay?: number }) {
  return (
    <>
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((l, i) => (
        <span key={i} aria-hidden="true" className="block overflow-hidden pb-[0.1em]">
          <motion.span className="block" initial={{ y: "108%" }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 1.3, delay: delay + i * 0.13, ease }}>{l}</motion.span>
        </span>
      ))}
    </>
  );
}
export function Mask({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} initial={{ clipPath: "inset(100% 0 0 0)" }} whileInView={{ clipPath: "inset(0% 0 0 0)" }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1.5, ease }}>
      {children}
    </motion.div>
  );
}
const grounds = [
  "radial-gradient(70% 55% at 30% 25%, #4a4640 0%, transparent 60%), radial-gradient(60% 60% at 80% 90%, #221f1c 0%, transparent 70%), #0b0a09",
  "radial-gradient(50% 40% at 60% 70%, #5a4a3c 0%, transparent 65%), radial-gradient(80% 60% at 10% 10%, #2b2926 0%, transparent 70%), #090908",
  "radial-gradient(60% 50% at 70% 30%, #3f4a3d 0%, transparent 65%), radial-gradient(70% 70% at 20% 90%, #1f211d 0%, transparent 70%), #080908",
];
const noise = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/></filter><rect width='160' height='160' filter='url(%23n)' opacity='.5'/></svg>\")";
/** Placeholder for campaign photography: stone, fabric and liquid light. */
export function Atmos({ v = 0, children, className = "" }: { v?: number; children?: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: grounds[v % 3] }}>
      <div className="absolute inset-0 opacity-[0.16] mix-blend-overlay" style={{ backgroundImage: noise }} />
      {children}
    </div>
  );
}
