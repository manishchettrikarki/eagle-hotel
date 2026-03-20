import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`, // inner pages just export title: "About"
  },
  description: SITE.description,
  keywords: [
    "Hotel Eagle Mountain",
    "Dho Tarap hotel",
    "Upper Dolpa lodge",
    "Nepal luxury trekking lodge",
    "snow leopard safari Nepal",
    "Himalayan wellness retreat",
    "Bon monastery Nepal",
    "remote Nepal hotel",
    "high altitude hotel Nepal",
    "Upper Dolpa trekking",
    "Tarap valley accommodation",
    "Karnali Province Nepal hotel",
  ],

  // ── Canonical & robots ────────────────────────────────────
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── OpenGraph (Facebook, LinkedIn, WhatsApp previews) ─────
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Dho Tarap, Upper Dolpa, Nepal`,
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [SITE.ogImage],
  },

  // ── Verification (add your tokens when ready) ─────────────
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // yandex: "...",
    // bing:   "...",
  },

  // ── Icons ─────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD — Hotel structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Hotel Eagle Mountain",
              url: SITE.url,
              logo: `${SITE.url}/images/logo.png`,
              image: `${SITE.url}${SITE.ogImage}`,
              description: SITE.description,
              telephone: "+977 9745216366",
              email: "hotelgoldeneagle1@gmail.com",
              priceRange: "$$$",
              starRating: { "@type": "Rating", ratingValue: "4" },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tarap Valley, Dho Tarap Village",
                addressLocality: "Dho Tarap",
                addressRegion: "Karnali Province",
                addressCountry: "NP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.15, // ← update with exact coords
                longitude: 82.9667,
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "High-Altitude Trekking",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Snow Leopard Safari",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Cultural Immersion Programs",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Mountain Wellness Retreat",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Restaurant",
                  value: true,
                },
              ],
              sameAs: [
                "https://www.tripadvisor.com", // ← add real URLs
                "https://www.instagram.com",
                "https://www.facebook.com",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
