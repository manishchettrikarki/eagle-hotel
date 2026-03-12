import PageHero from "@/components/reusable/pageHeroSection";
import GalleryGrid from "@/components/views/gallery/galleryGrid";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import { makeTitle, SITE, ogImage } from "@/lib/seo";

/**
 *
 */
export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of Hotel Eagle Mountain, Dho Tarap village, the Tarap valley, Himalayan landscapes, Bon culture, and mountain dining in Upper Dolpa, Nepal.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    url: `${SITE.url}/gallery`,
    title: makeTitle("Gallery"),
    images: ogImage("/images/og-gallery.jpg"),
  },
};

export default async function GalleryPage() {
  const supabase = await createClient();
  const { data: images } = await supabase
    .from("gallery_images")
    .select("*")
    .order("sort_order", { ascending: true });

  //
  return (
    <>
      <PageHero
        eyebrow="The lodge, the valley, the people"
        titleLine1="Our"
        titleLine2="Gallery"
        image="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1800&q=90"
        imagePosition="center 40%"
        height="h-[60vh] min-h-[420px]"
      />
      <GalleryGrid images={images ?? []} />
    </>
  );
}
