import { SingleProductData } from "../types";

export const PETKIT_PURA_MAX_PRODUCT: SingleProductData = {
  slug: "petkit-pura-max",
  name: "Petkit Pura Max Smart Self-Cleaning Cat Litter Box",
  category: "Pets",
  image: "https://m.media-amazon.com/images/I/61k8T8+0JSL._AC_SL1500_.jpg",
  price: "$499.00",
  amazonUrl: "https://www.petkit.com/products/pura-max-2",
  rating: 4.6,
  reviewCount: 2000,
  author: "Sarah Mitchell",
  date: "Mar 12, 2024",
  readTime: "7 min read",
  highlight: "Affordable self-cleaning litter box with smart features.",
  intro: "The Petkit Pura Max 2 is a great alternative for cat parents who want the convenience of a self-cleaning litter box without the high price tag.",
  pros: [
    "More affordable than Litter-Robot 4",
    "Triple odor control with air purifier",
    "Excellent companion app with weight tracking",
    "Compact design to save space",
    "Quiet operation (35 dB)"
  ],
  cons: [
    "Smaller opening than Litter-Robot 4",
    "Motor can be noisy during cleaning",
    "Manual cleaning can be a hassle"
  ],
  specs: [
    { label: "Weight", value: "22 lbs" },
    { label: "Cat Size", value: "3.3 to 22 lbs" },
    { label: "Cylinder Capacity", value: "76L" },
    { label: "Sensors", value: "xSecure System" },
    { label: "App", value: "Petkit App" }
  ],
  sections: [
    {
      title: "Triple Odor Control",
      content: "The Pura Max uses a combination of an air purifier, odor eliminator, and a sealed waste bin to keep your home smelling fresh. It's the perfect tool for multi-cat households."
    },
    {
      title: "xSecure System Safety",
      content: "The Pura Max uses multiple infrared sensors and weight sensors to detect cat motion and weight, so you can be sure your feline friend is safe while the Pura Max is cycling."
    }
  ],
  relatedProducts: [
    {
      slug: "litter-robot-4",
      name: "Litter-Robot 4",
      image: "https://m.media-amazon.com/images/I/61F1Nn3S7SL._AC_SL1500_.jpg",
      price: "$699.00"
    }
  ]
};
