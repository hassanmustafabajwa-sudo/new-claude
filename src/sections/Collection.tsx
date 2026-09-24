import { useState } from "react";
import { motion } from "framer-motion";
import { Bottle } from "../components/Bottle";
import { Lines } from "../components/Reveal";
import { products, type Product } from "../data";

function Item({ p, i, onAdd }: { p: Product; i: number; onAdd: () => void }) {
  const [added, setAdded] = useState(false);
  const flip = i === 1;
  const tilt = flip ? 2 : -2;
  const add = () => { onAdd(); setAdded(true); window.setTimeout(() => setAdded(false), 1800); };
  return (
    <motion.article initial="rest" whileHover="h" className={`group relative grid grid-cols-12 items-end gap-y-10 px-6 py-20 md:px-14 md:py-36 ${i === 2 ? "md:pl-[18%]" : ""}`}>
      <span aria-hidden="true" className={`outline-num pointer-events-none absolute top-6 select-none font-serif text-[46vw] leading-none md:top-10 md:text-[24vw] ${flip ? "right-2" : "left-2"}`}>{p.n}</span>
      <div className={`relative col-span-12 grid place-items-center py-10 md:col-span-6 md:py-20 ${flip ? "md:order-2 md:col-start-7" : ""}`}>
        <motion.div variants={{ rest: { opacity: 0 }, h: { opacity: 1 } }} transition={{ duration: 1.2 }} className="absolute inset-0" style={{ background: `radial-gradient(50% 55% at 50% 40%, ${p.tint}66, transparent 70%)` }} />
        <motion.div variants={{ rest: { y: 0, rotate: 0 }, h: { y: -16, rotate: tilt } }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} className={i === 2 ? "md:translate-y-12" : ""}>
          <Bottle tint={p.tint} label={p.name} className="h-[46svh] w-auto md:h-[60svh]" />
        </motion.div>
      </div>
      <div className={`relative col-span-12 md:col-span-5 ${flip ? "md:order-1 md:col-start-1 md:pb-24" : "md:col-start-8"}`}>
        <span className="meta text-ash [writing-mode:vertical-rl] absolute -left-5 top-0 hidden rotate-180 md:block">Eau de Parfum</span>
        <p className="meta text-ash md:hidden">{p.n} — Eau de Parfum</p>
        <h3 className="mt-3 font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.92] md:mt-0">{p.name.toUpperCase()}</h3>
        <ul className="mt-8 font-serif text-xl italic leading-snug text-ivory/85">{p.notes.map((n) => <li key={n}>{n}</li>)}</ul>
        <p className="mt-6 text-sm font-light text-ash">{p.mood}</p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <span className="font-serif text-2xl">${p.price}</span>
          <button onClick={add} aria-live="polite" className="meta border border-ivory/40 px-6 py-3 transition-colors duration-700 hover:bg-ivory hover:text-ink">{added ? "Added to bag" : "Add to bag"}</button>
          <a href="#scents" className="meta text-ivory/50 transition-opacity duration-700 group-hover:text-ivory group-focus-within:text-ivory">Discover →</a>
        </div>
      </div>
    </motion.article>
  );
}

export function Collection({ onAdd }: { onAdd: () => void }) {
  return (
    <section id="collection" aria-labelledby="col-h" className="pt-32 md:pt-48">
      <h2 id="col-h" className="px-6 font-serif text-[clamp(2.4rem,7.2vw,7rem)] leading-[0.92] tracking-[-0.01em] md:px-14">
        <Lines lines={["THREE FRAGRANCES.", "THREE STATES OF NIGHT."]} />
      </h2>
      {products.map((p, i) => <Item key={p.n} p={p} i={i} onAdd={onAdd} />)}
    </section>
  );
}
