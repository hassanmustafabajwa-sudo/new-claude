import { motion } from "framer-motion";
const links = [["Collection", "#collection"], ["The House", "#house"], ["Journal", "#journal"]];
export function Nav({ count }: { count: number }) {
  return (
    <motion.header initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 1.2 }}
      className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
      <nav aria-label="Primary" className="meta flex items-center justify-between px-6 py-6 md:px-14">
        <a href="#top" className="font-serif text-base tracking-[0.3em]">NOCTURNE</a>
        <ul className="hidden gap-10 md:flex">{links.map(([l, h]) => <li key={h}><a href={h} className="opacity-70 transition-opacity duration-700 hover:opacity-100">{l}</a></li>)}</ul>
        <button aria-label={`Bag, ${count} items`}>Bag ({count})</button>
      </nav>
    </motion.header>
  );
}
