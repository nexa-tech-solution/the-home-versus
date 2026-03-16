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
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `${SITE_CONFIG.name} | Real Product Comparisons for Real Homes`,
  description:
    "Side-by-side product reviews and comparisons for homeowners, parents, and pet owners. Tested in real-world scenarios.",
  verification: {
    google: "lqAwRr9TNtFQCQKhncueLDL7_7kBhduGUfgFl5B-SLo",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://m.media-amazon.com" />
        <link rel="dns-prefetch" href="https://m.media-amazon.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": SITE_CONFIG.name,
              "url": SITE_CONFIG.url,
              "logo": `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
              "contactPoint": {
                "@type": "ContactPoint",
                "email": SITE_CONFIG.contactEmail,
                "contactType": "customer service",
              },
              "sameAs": Object.values(SITE_CONFIG.social),
            }),
          }}
        />
        <GoogleAdSense publisherId={publisherId} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
