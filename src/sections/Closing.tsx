import { Atmos, Lines, Mask } from "../components/Reveal";
import { Bottle } from "../components/Bottle";
import { stories } from "../data";

const layout = ["md:col-span-7", "md:col-span-4 md:col-start-9 md:mt-40", "md:col-span-8 md:col-start-3"];
const ratio = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[16/9]"];
export function Journal() {
  return (
    <section id="journal" aria-labelledby="j-h" className="px-6 py-28 md:px-14 md:py-44">
      <h2 id="j-h" className="font-serif text-[clamp(2.4rem,7vw,7rem)] leading-[0.92]"><Lines lines={["THE JOURNAL"]} /></h2>
      <div className="mt-16 grid grid-cols-12 gap-x-10 gap-y-20 md:mt-24">
        {stories.map((s, i) => (
          <article key={s.t} className={`group col-span-12 ${layout[i]}`}>
            <a href="#journal" className="block">
              <Mask><Atmos v={i} className={`${ratio[i]} w-full`}><div className="absolute inset-0 scale-100 transition-transform duration-[2500ms] group-hover:scale-110" style={{ background: "radial-gradient(30% 40% at 50% 60%, rgba(236,230,218,.1), transparent)" }} /></Atmos></Mask>
              <h3 className="mt-6 font-serif text-3xl md:text-4xl">{s.t}</h3>
              <p className="mt-2 max-w-xs text-sm font-light text-ash">{s.d}</p>
              <p className="meta mt-4 text-ash/70">{s.m}</p>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Finale() {
  return (
    <section aria-labelledby="f-h" className="relative grid min-h-svh place-items-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0" style={{ background: "radial-gradient(60% 50% at 50% 100%, #2a2622, #050505 70%)" }} />
      <div className="absolute inset-x-0 bottom-0 flex justify-center opacity-70"><Bottle silhouette className="h-[70svh] w-auto translate-y-[12%]" /></div>
      <div className="relative">
        <h2 id="f-h" className="font-serif text-[clamp(3.5rem,14vw,13rem)] leading-[0.86] tracking-[-0.02em]"><Lines lines={["FIND YOUR", "NIGHT."]} /></h2>
        <a href="#collection" className="meta mt-12 inline-block border border-ivory/50 bg-ink/60 px-10 py-4 transition-colors duration-700 hover:bg-ivory hover:text-ink">Explore Nocturne</a>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [["Collection", "#collection"], ["The House", "#house"], ["Journal", "#journal"], ["Contact", "mailto:house@nocturne.example"]];
  return (
    <footer className="flex flex-col gap-10 border-t border-ivory/10 px-6 py-12 md:flex-row md:justify-between md:px-14">
      <div><p className="font-serif text-2xl tracking-[0.3em]">NOCTURNE</p><p className="meta mt-3 text-ash">Independent Fragrance House</p></div>
      <nav aria-label="Footer" className="meta flex flex-wrap gap-x-8 gap-y-3">{cols.map(([l, h]) => <a key={l} href={h} className="hover:text-ash">{l}</a>)}</nav>
      <div className="meta flex flex-col gap-3 text-ash"><span>Instagram</span><span>Pinterest</span><span className="mt-4">© 2026 NOCTURNE</span></div>
    </footer>
  );
}
