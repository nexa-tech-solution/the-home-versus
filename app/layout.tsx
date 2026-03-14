import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import GoogleAdSense from "@/components/GoogleAdSense";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    style: ["normal", "italic"],
    display: "swap",
});

import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `${SITE_CONFIG.name} | Real Product Comparisons for Real Homes`,
  description: "Side-by-side product reviews and comparisons for homeowners, parents, and pet owners. Tested in real-world scenarios.",
  verification: {
    google: "lqawrr9tntfqcqkhncueldl7_7kbhdugufgfl5b-slo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = SITE_CONFIG.publisherId;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <GoogleAdSense publisherId={publisherId} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
