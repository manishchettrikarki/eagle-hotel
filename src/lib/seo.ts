// ── Central SEO config for Hotel Eagle Mountain ──────────────
// Import and use these in every page's metadata export

export const SITE = {
  name: "Hotel Eagle Mountain",
  tagline: "A sanctuary at 3,950 metres",
  url: "https://www.eaglemountain-dolpa.com", // ← update to your real domain
  description:
    "Hotel Eagle Mountain is a luxury wilderness lodge in Dho Tarap, Upper Dolpa, Nepal — at 3,950 metres. Offering guided Himalayan treks, snow leopard safaris, cultural immersions and mountain wellness retreats in one of the world's most remote and sacred valleys.",
  locale: "en_US",
  ogImage: "/images/og-default.jpg",
  twitter: "@eaglemtndolpa",
};

// Generates a consistent title with site name
export function makeTitle(page?: string) {
  return page ? `${page} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
}

// Generates full OpenGraph image object
export function ogImage(path?: string) {
  return [
    { url: path ?? SITE.ogImage, width: 1200, height: 630, alt: SITE.name },
  ];
}
