import PageHero from "@/components/reusable/pageHeroSection";
import AboutStats from "@/components/views/about/aboutStats";
import AboutStory from "@/components/views/about/aboutStory";
import AboutTeam from "@/components/views/about/aboutTeam";
import AboutValues from "@/components/views/about/aboutValues";

export const metadata = {
  title: "About — Hotel Eagle Mountain",
  description:
    "The story, values and team behind Hotel Eagle Mountain in Dho Tarap, Upper Dolpa, Nepal.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        titleLine1="About Hotel"
        titleLine2="Eagle Mountain"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=90"
        imagePosition="center"
      />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
    </>
  );
}
