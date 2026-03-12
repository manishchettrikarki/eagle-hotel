import HeroSection from "@/components/views/home/heroSection";
import RoomsSection from "@/components/views/home/roomsSection";
import GallerySection from "@/components/views/home/galleryStrip";
import WelcomeSection from "@/components/views/home/welcomeSection";
import ServicesSection from "@/components/views/home/servicesSection";
import LocationSection from "@/components/views/home/locationSection";
import TestimonialsSection from "@/components/views/home/testimonial";
import GastronomySection from "@/components/views/home/gastronomySection";

//
import type { Metadata } from "next";
import { makeTitle, SITE, ogImage } from "@/lib/seo";

//
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

/**
 *
 */
export default function HomePage() {
  //
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <GallerySection />
      <RoomsSection />
      <GastronomySection />
      <ServicesSection />
      <LocationSection />
      <TestimonialsSection />
    </>
  );
}
