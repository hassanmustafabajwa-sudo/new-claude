import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Bottle } from "../components/Bottle";
import { Lines } from "../components/Reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const rm = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(p, [0, 1], rm ? [1, 1] : [1.3, 0.6]);
  const y = useTransform(p, [0, 1], rm ? ["0%", "0%"] : ["0%", "16%"]);
  const tx = useTransform(p, [0, 1], rm ? ["0%", "0%"] : ["0%", "-12%"]);
  const light = useTransform(p, [0, 0.8], [1, 0.12]);
  const cue = useTransform(p, [0, 0.15], [1, 0]);
  const next = useTransform(p, [0.6, 0.9], [0, 1]);
  return (
    <section id="top" ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div style={{ opacity: light, background: "radial-gradient(45% 55% at 50% 42%, rgba(236,230,218,.22), transparent 70%)" }} className="absolute inset-0 md:[background-position:20%_0]" />
        <div className="absolute left-1/2 top-[9svh] -translate-x-1/2 md:left-[68%] md:top-1/2 md:-translate-y-1/2">
          <motion.div style={{ scale, y }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.2, delay: 0.2 }}>
            <Bottle tint="#6b4a35" label="After Dark" className="h-[36svh] w-auto md:h-[68svh]" />
          </motion.div>
        </div>
        <motion.div style={{ x: tx }} className="absolute inset-x-0 bottom-0 px-6 pb-8 md:px-14 md:pb-14">
          <h1 className="font-serif text-[clamp(3.1rem,11.5vw,10.5rem)] leading-[0.88] tracking-[-0.02em]"><Lines lines={["SCENTS", "FOR THE", "UNSEEN."]} delay={0.6} /></h1>
          <div className="mt-6 flex flex-col gap-5 md:mt-10 md:max-w-xl">
            <p className="max-w-sm text-sm font-light leading-relaxed text-ivory/75">Independent fragrance compositions created for the hours between midnight and morning.</p>
            <a href="#collection" className="meta group inline-flex w-fit items-center gap-4 border-b border-ivory/40 pb-2 transition-colors duration-700 hover:border-ivory">Discover the collection<span className="transition-transform duration-700 group-hover:translate-x-2">→</span></a>
          </div>
        </motion.div>
        <motion.p style={{ opacity: cue }} className="meta absolute bottom-14 right-14 hidden origin-bottom-right rotate-90 text-ash md:block">Scroll to enter</motion.p>
        <motion.p style={{ opacity: next }} className="meta absolute right-6 top-24 max-w-[9rem] text-right text-ash md:right-14 md:top-1/3">Small batches. Worn after dark.</motion.p>
      </div>
    </section>
  );
}

export function Break() {
  const ref = useRef<HTMLElement>(null);
  const rm = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(p, [0, 1], rm ? [1.1, 1.1] : [0.95, 1.5]);
  const sweep = useTransform(p, [0, 1], rm ? ["40%", "40%"] : ["-70%", "170%"]);
  const ty = useTransform(p, [0, 1], rm ? ["0%", "0%"] : ["30%", "-30%"]);
  return (
    <section ref={ref} aria-label="Made after dark" className="relative h-[130svh] overflow-hidden bg-black">
      <div className="sticky top-0 grid h-svh place-items-center">
        <motion.div style={{ scale }} className="opacity-60 brightness-75"><Bottle tint="#3b2b22" label="After Dark" className="h-[62svh] w-auto" /></motion.div>
        <motion.div style={{ x: sweep }} className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-ivory/[0.07] to-transparent" />
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, transparent 15%, #000 78%)" }} />
        <motion.h2 style={{ y: ty }} className="absolute bottom-[12svh] left-6 font-serif text-[clamp(2.4rem,8vw,7rem)] leading-[0.92] md:left-14">MADE<br />AFTER DARK.</motion.h2>
      </div>
    </section>
  );
}
