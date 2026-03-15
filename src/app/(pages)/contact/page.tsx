import PageHero from "@/components/reusable/pageHeroSection";
import ContactForm from "@/components/views/contact/contactForm";
import type { Metadata } from "next";
import { makeTitle, SITE, ogImage } from "@/lib/seo";

/**
 *
 */
export const metadata: Metadata = {
  title: "Contact & Plan Your Journey",
  description:
    "Contact Hotel Eagle Mountain to plan your trip to Dho Tarap. Ask about trekking permits, room availability, guided expeditions and bespoke experiences in Upper Dolpa, Nepal.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: `${SITE.url}/contact`,
    title: makeTitle("Contact & Plan Your Journey"),
    images: ogImage("/images/og-contact.jpg"),
  },
};

/**
 *
 */
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        titleLine1="Plan your"
        titleLine2="journey"
        image="/images/village.jpg"
        imagePosition="center 35%"
        height="h-[60vh] min-h-[420px]"
      />

      <ContactForm />
    </>
  );
}
