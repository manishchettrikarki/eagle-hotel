import { makeTitle, SITE, ogImage } from "@/lib/seo";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

import HeroSection from "@/components/views/home/heroSection";
import WelcomeSection from "@/components/views/home/welcomeSection";
import GallerySection from "@/components/views/home/galleryStrip";
import RoomsSection from "@/components/views/home/roomsSection";
import GastronomySection from "@/components/views/home/gastronomySection";
import ServicesSection from "@/components/views/home/servicesSection";
import LocationSection from "@/components/views/home/locationSection";
import TestimonialsSection from "@/components/views/home/testimonial";

export const metadata: Metadata = {
  title: makeTitle(),
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: makeTitle(),
    description: SITE.description,
    images: ogImage("/images/og-home.jpg"),
  },
};

export default async function HomePage() {
  const supabase = await createClient();
  const { data: galleryImages } = await supabase
    .from("gallery_images")
    .select("id, public_url, caption")
    .order("sort_order", { ascending: true })
    .limit(12); // enough for the slider

  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <GallerySection images={galleryImages ?? []} />
      <RoomsSection />
      <GastronomySection />
      <ServicesSection />
      <LocationSection />
      <TestimonialsSection />
    </>
  );
}
