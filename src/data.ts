export interface Product { n: string; name: string; notes: string[]; mood: string; price: number; tint: string }
export const products: Product[] = [
  { n: "01", name: "After Dark", notes: ["Black Pepper", "Iris", "Cedar"], mood: "Warm. Smoky. Magnetic.", price: 185, tint: "#6b4a35" },
  { n: "02", name: "Velvet Static", notes: ["Saffron", "Suede", "Amber"], mood: "Electric. Dark. Addictive.", price: 195, tint: "#7d4a22" },
  { n: "03", name: "Silent Fig", notes: ["Fig Leaf", "Moss", "Sandalwood"], mood: "Green. Quiet. Intimate.", price: 185, tint: "#3e4a38" },
];
export const families = [
  { id: "SPICY", color: "#8a3f22", line: "Black pepper, saffron. A pulse under the skin." },
  { id: "WOODY", color: "#5f4529", line: "Cedar, sandalwood. Warmth that stays in the room." },
  { id: "AMBER", color: "#94733a", line: "Resin and heat. The last light in a glass." },
  { id: "GREEN", color: "#41573a", line: "Fig leaf, moss. Cool air through an open window." },
  { id: "SMOKY", color: "#55555f", line: "Cold embers. What remains after the conversation." },
  { id: "MUSKY", color: "#735f5a", line: "Suede and skin. Close enough to be private." },
];
export const ingredients = [
  ["Black Pepper", 6, 12, 0.5], ["Iris", 62, 6, 0.9], ["Cedar", 30, 30, 0.3], ["Saffron", 74, 34, 0.7],
  ["Suede", 8, 52, 0.8], ["Amber", 46, 50, 0.4], ["Fig", 80, 62, 1], ["Moss", 22, 76, 0.6], ["Sandalwood", 56, 82, 0.35],
] as const;
export const stories = [
  { t: "The Art of Distance", d: "Why some fragrances should be discovered slowly.", m: "6 min" },
  { t: "Inside the Bottle", d: "Material, glass and the architecture of scent.", m: "9 min" },
  { t: "After Midnight", d: "A study of fragrance and memory.", m: "7 min" },
];
