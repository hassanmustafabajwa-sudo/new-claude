import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Atmos, Lines, Mask } from "../components/Reveal";
import { families, ingredients } from "../data";

export function ScentMap() {
  const [a, setA] = useState<number | null>(null);
  const cur = a === null ? null : families[a];
  const pos = ["md:ml-0", "md:ml-[38%]", "md:ml-[8%]", "md:ml-[52%]", "md:ml-[18%]", "md:ml-[40%]"];
  return (
    <section id="scents" aria-labelledby="sc-h" className="relative min-h-svh overflow-hidden px-6 py-28 md:px-14 md:py-40" onMouseLeave={() => setA(null)}>
      <AnimatePresence>{cur && <motion.div key={cur.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.4 }} className="absolute inset-0" style={{ background: `radial-gradient(70% 60% at 50% 55%, ${cur.color}80, transparent 75%)` }} />}</AnimatePresence>
      <h2 id="sc-h" className="meta relative text-ash">What does night smell like?</h2>
      <ul className="relative mt-12 grid grid-cols-2 gap-x-6 gap-y-6 md:mt-16 md:block">
        {families.map((f, i) => (
          <li key={f.id} className={pos[i]}>
            <button onMouseEnter={() => setA(i)} onFocus={() => setA(i)} onClick={() => setA(i)} aria-pressed={a === i}
              className={`font-serif text-[clamp(2.2rem,9.5vw,8.5rem)] leading-[1.02] transition-all duration-1000 ${a === null || a === i ? "opacity-100" : "opacity-20 blur-[1px]"}`}>{f.id}</button>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="relative mt-14 min-h-12 max-w-sm font-serif text-lg italic text-ivory/85">{cur ? cur.line : "Choose a note. See the room change."}</p>
    </section>
  );
}

export function House() {
  return (
    <section id="house" aria-labelledby="h-h" className="bg-ivory px-6 py-28 text-ink md:px-14 md:py-44">
      <div className="grid grid-cols-12 gap-y-14 md:gap-x-10">
        <div className="col-span-12 md:col-span-7">
          <h2 id="h-h" className="font-serif text-[clamp(2.5rem,7vw,7rem)] leading-[0.92] tracking-[-0.01em]"><Lines lines={["WE DON’T MAKE", "PERFUME FOR", "EVERYONE."]} /></h2>
          <p className="mt-12 max-w-md font-serif text-xl leading-relaxed md:mt-20">NOCTURNE is an independent fragrance house built around contrast — light and shadow, warmth and distance, presence and absence.</p>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-32">
          <Mask><Atmos v={1} className="aspect-[3/4] w-full"><div className="absolute -bottom-10 left-1/2 h-2/3 w-1/3 -translate-x-1/2 bg-gradient-to-t from-black to-transparent" /></Atmos></Mask>
          <dl className="meta mt-5 flex justify-between text-ink/60"><div><dt className="sr-only">Origin</dt><dd>Independent</dd></div><div><dt className="sr-only">Production</dt><dd>Batches of 300</dd></div></dl>
        </div>
      </div>
    </section>
  );
}

function Word({ t, x, y, d, mx, my, i }: { t: string; x: number; y: number; d: number; mx: MotionValue<number>; my: MotionValue<number>; i: number }) {
  const rm = useReducedMotion();
  const px = useTransform(mx, (v) => (rm ? 0 : v * d * 70));
  const py = useTransform(my, (v) => (rm ? 0 : v * d * 50));
  return (
    <motion.li style={{ left: `${x}%`, top: `${y}%`, x: px, y: py }} className="md:absolute">
      <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }} style={{ opacity: 0.35 + d * 0.6 }} className="block font-serif text-[clamp(1.8rem,5.2vw,5rem)] italic">{t}</motion.span>
    </motion.li>
  );
}
export function Ingredients() {
  const mx = useSpring(useMotionValue(0), { stiffness: 40, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 40, damping: 20 });
  return (
    <section aria-label="Ingredients" className="relative px-6 py-28 md:min-h-[110svh] md:px-14"
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); }}>
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:block">
        {ingredients.map(([t, x, y, d], i) => <Word key={t} t={t.toUpperCase().replace(/^(.)(.*)$/, (_, a, b) => a + b.toLowerCase())} x={x} y={y} d={d} mx={mx} my={my} i={i} />)}
      </ul>
    </section>
  );
}
