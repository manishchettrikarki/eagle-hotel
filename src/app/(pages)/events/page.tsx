import EventsList from "@/components/views/events/eventsList";
// import EventsCTA from "@/components/views/events/eventsCta";
import PageHero from "@/components/reusable/pageHeroSection";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import { makeTitle, SITE, ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Events & Expeditions",
  description:
    "Guided Himalayan treks, snow leopard safaris, Bon monastery immersions, winter photography tours and wellness retreats in Upper Dolpa, Nepal.",
  alternates: { canonical: "/events" },
  openGraph: {
    url: `${SITE.url}/events`,
    title: makeTitle("Events & Expeditions"),
    images: ogImage("/images/og-events.jpg"),
  },
};

export default async function EventsPage() {
  const supabase = await createClient();
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  console.log(events);

  //
  return (
    <>
      <PageHero
        eyebrow="Experiences & Gatherings"
        titleLine1="Events &"
        titleLine2="Expeditions"
        image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1800&q=90"
        imagePosition="center 30%"
      />
      <EventsList events={events ?? []} />
      {/* <EventsCTA /> */}
    </>
  );
}
