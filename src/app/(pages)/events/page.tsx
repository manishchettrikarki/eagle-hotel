import EventsList from "@/components/views/events/eventsList";
import EventsCTA from "@/components/views/events/eventsCta";
import PageHero from "@/components/reusable/pageHeroSection";

export const metadata = {
  title: "Events & Expeditions — Hotel Eagle Mountain",
  description:
    "Guided treks, wildlife safaris, cultural immersions and wellness retreats in Upper Dolpa, Nepal.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences & Gatherings"
        titleLine1="Events &"
        titleLine2="Expeditions"
        image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1800&q=90"
        imagePosition="center 30%"
      />
      <EventsList />
      <EventsCTA />
    </>
  );
}
