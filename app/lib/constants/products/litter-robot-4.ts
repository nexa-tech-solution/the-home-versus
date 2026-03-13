import { SingleProductData } from "../types";

export const LITTER_ROBOT_4_PRODUCT: SingleProductData = {
  slug: "litter-robot-4",
  name: "Litter-Robot 4 Automatic Self-Cleaning Litter Box",
  category: "Pets",
  image: "https://m.media-amazon.com/images/I/61F1Nn3S7SL._AC_SL1500_.jpg",
  price: "$699.00",
  amazonUrl: "https://www.litter-robot.com/litter-robot-4.html",
  rating: 4.8,
  reviewCount: 3000,
  author: "Sarah Mitchell",
  date: "Mar 10, 2024",
  readTime: "8 min read",
  highlight: "The quietest, most effective automatic litter box on the market.",
  intro: "The Litter-Robot 4 is the ultimate solution for cat parents. It’s quiet, easy to clean, and it actually works.",
  pros: [
    "Omni-directional sensors for cat safety",
    "Extremely quiet rotation cycle",
    "Superior odor containment system",
    "Whisker App tracking and notifications",
    "Large opening for comfort"
  ],
  cons: [
    "The most expensive model on the market",
    "Requires a fair amount of floor space",
    "Emptying waste drawer every 1-2 weeks"
  ],
  specs: [
    { label: "Weight", value: "24 lbs" },
    { label: "Cat Size", value: "3 to 25 lbs" },
    { label: "Dimensions", value: "27 x 22 x 29.5 in" },
    { label: "Sensors", value: "Infrared + Weight" },
    { label: "App", value: "Whisker App" }
  ],
  sections: [
    {
      title: "QuietClean™ Technology",
      content: "The Litter-Robot 4 uses a new QuietClean™ motor that is virtually silent. You can actually sleep in the same room as the Litter-Robot 4 without hearing the cycle."
    },
    {
      title: "The Ultimate Odor Control",
      content: "With its sealed waste drawer and carbon filtration, the Litter-Robot 4 is the gold standard for odor control. You can skip the daily scooping and spend more time with your feline friend."
    }
  ],
  relatedProducts: [
    {
      slug: "petkit-pura-max",
      name: "Petkit Pura Max",
      image: "https://m.media-amazon.com/images/I/61k8T8+0JSL._AC_SL1500_.jpg",
      price: "$499.00"
    }
  ]
};
