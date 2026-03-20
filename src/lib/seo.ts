export const SITE = {
  name: "Hotel Eagle Mountain",
  tagline: "A sanctuary at 3,950 metres",
  url: "https://www.hotelgoldeneagle.com",
  description:
    "Hotel Eagle Mountain is a luxury wilderness lodge in Dho Tarap, Upper Dolpa, Nepal — at 3,950 metres. Offering guided Himalayan treks, snow leopard safaris, cultural immersions and mountain wellness retreats in one of the world's most remote and sacred valleys.",
  locale: "en_US",
  ogImage: "https://www.hotelgoldeneagle.com/images/og-default.jpg",
  twitter: "@eaglemtndolpa",
};

export function makeTitle(page?: string) {
  return page ? `${page} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
}

export function ogImage(path?: string) {
  const url = path ? `${SITE.url}${path}` : SITE.ogImage;
  return [{ url, width: 1200, height: 630, alt: SITE.name }];
}
