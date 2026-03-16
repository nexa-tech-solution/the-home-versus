export const SITE_CONFIG = {
  name: "TheHomeVersus",
  tagline: "Expert Home Product Comparisons & Real-World Reviews",
  description: "Honest, side-by-side product comparisons for North American families. Tested by real moms in real US & Canadian homes — from Dyson vs Shark to baby essentials.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thehomeversus.com",
  ogImage: "/og-image.jpg",
  keywords: [
    "product comparison US Canada", 
    "home product reviews for moms", 
    "Dyson vs Shark reviews", 
    "best vacuum for pet hair Canada", 
    "kitchen appliance comparisons USA", 
    "baby gear reviews 2024",
    "real home testing North America"
  ],
  publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "ca-pub-3012411444875177",
  amazonAffiliateDisclosure: "As an Amazon Associate, we earn from qualifying purchases.",
  copyright: `© ${new Date().getFullYear()} TheHomeVersus.com`,
  contactEmail: "cs.nexatech@gmail.com",
  social: {
    facebook: "https://facebook.com/thehomeversus",
    instagram: "https://instagram.com/thehomeversus",
    twitter: "https://twitter.com/thehomeversus",
    youtube: "https://youtube.com/@thehomeversus",
  }
};
