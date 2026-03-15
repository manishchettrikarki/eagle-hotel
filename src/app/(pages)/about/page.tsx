import PageHero from "@/components/reusable/pageHeroSection";
import AboutStats from "@/components/views/about/aboutStats";
import AboutStory from "@/components/views/about/aboutStory";
import AboutTeam from "@/components/views/about/aboutTeam";
import AboutValues from "@/components/views/about/aboutValues";

//
import type { Metadata } from "next";
import { makeTitle, SITE, ogImage } from "@/lib/seo";

// Page metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about the founding of Hotel Golden Eagle — a wilderness lodge built on Newar craftsmanship, Bon heritage and 100% local community employment in Dho Tarap, Upper Dolpa, Nepal.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: `${SITE.url}/about`,
    title: makeTitle("Our Story"),
    images: ogImage("/images/og-about.jpg"),
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        titleLine1="About Hotel"
        titleLine2="Golden Eagle"
        image="/images/village.jpg"
        imagePosition="center"
      />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
    </>
  );
}
