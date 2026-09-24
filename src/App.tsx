import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { Nav } from "./components/Nav";
import { Hero, Break } from "./sections/Intro";
import { Collection } from "./sections/Collection";
import { ScentMap, House, Ingredients } from "./sections/Atmosphere";
import { Journal, Finale, Footer } from "./sections/Closing";

export default function App() {
  const [bag, setBag] = useState(0);
  return (
    <MotionConfig reducedMotion="user">
      <Nav count={bag} />
      <main>
        <Hero />
        <Collection onAdd={() => setBag((b) => b + 1)} />
        <ScentMap />
        <Break />
        <House />
        <Ingredients />
        <Journal />
        <Finale />
      </main>
      <Footer />
    </MotionConfig>
  );
}
