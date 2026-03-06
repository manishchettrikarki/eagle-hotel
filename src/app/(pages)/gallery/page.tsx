import PageHero from "@/components/reusable/pageHeroSection";
import GalleryGrid from "@/components/views/gallery/galleryGrid";

/**
 *
 */
export const metadata = {
  title: "Gallery — Hotel Eagle Mountain",
  description:
    "Photos of the lodge, Tarap valley landscapes, culture, dining and wellness at Hotel Eagle Mountain, Upper Dolpa.",
};

export default function GalleryPage() {
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
      <GalleryGrid />
    </>
  );
}
