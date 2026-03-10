export const comparisons = [
  {
    slug: "dyson-v15-vs-shark-stratos",
    title: "Dyson V15 Detect vs. Shark Stratos: Best Cordless Vacuum for Pet Hair",
    category: "Cleaning",
    productA: "Dyson V15 Detect",
    productB: "Shark Stratos",
    imageA: "https://m.media-amazon.com/images/I/61nGFa6cXlL._AC_SL1500_.jpg",
    imageB: "https://m.media-amazon.com/images/I/619jhoAVLjL._AC_SL1500_.jpg",
    snippet: "Two top-tier cordless vacuums go head-to-head. Which one actually picks up more pet hair without waking the baby?",
    winner: "Dyson V15",
  },
  {
    slug: "ninja-foodi-vs-instant-pot",
    title: "Ninja Foodi vs. Instant Pot Duo Crisp: Which Combo Cooker Wins for Family Dinners?",
    category: "Kitchen",
    productA: "Ninja Foodi",
    productB: "Instant Pot Duo Crisp",
    imageA: "https://m.media-amazon.com/images/I/81iiAPD89mL._AC_SL1500_.jpg",
    imageB: "https://m.media-amazon.com/images/I/71V1LuqMz1L._AC_SL1500_.jpg",
    snippet: "Pressure cooker meets air fryer. We tested both for a month of weeknight dinners with picky kids.",
    winner: "Ninja Foodi",
  },
  {
    slug: "uppababy-vista-vs-mockingbird",
    title: "UPPAbaby Vista V2 vs. Mockingbird: Premium Stroller vs. Budget Dupe",
    category: "Baby & Kids",
    productA: "UPPAbaby Vista V2",
    productB: "Mockingbird",
    imageA: "https://m.media-amazon.com/images/I/71IjLZ4FvtL._AC_SL1500_.jpg",
    imageB: "https://m.media-amazon.com/images/I/71cq9cz6XML._AC_SL1500_.jpg",
    snippet: "Is the UPPAbaby really worth 3x the price? We break down fold, push, and real-life usability.",
    winner: "Mockingbird",
  },
  {
    slug: "litter-robot-vs-petsafe",
    title: "Litter-Robot 4 vs. PetSafe ScoopFree: Best Automatic Litter Box?",
    category: "Pets",
    productA: "Litter-Robot 4",
    productB: "PetSafe ScoopFree",
    imageA: "https://m.media-amazon.com/images/I/71J+9c-4K0L._AC_SL1500_.jpg",
    imageB: "https://m.media-amazon.com/images/I/71Ty1PIyJzL._AC_SL1500_.jpg",
    snippet: "No more scooping. But which self-cleaning litter box is actually worth the investment?",
    winner: "Litter-Robot 4",
  },
];

export const searchArticlesByTitle = (query: string) => {
  if (!query) return [];
  const lowercaseQuery = query.toLowerCase();
  return comparisons.filter(
    (comp) =>
      comp.title.toLowerCase().includes(lowercaseQuery) ||
      comp.productA.toLowerCase().includes(lowercaseQuery) ||
      comp.productB.toLowerCase().includes(lowercaseQuery) ||
      comp.category.toLowerCase().includes(lowercaseQuery)
  );
};
