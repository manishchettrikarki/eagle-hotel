import PageHero from "@/components/reusable/pageHeroSection";
import ContactForm from "@/components/views/contact/contactForm";

/**
 *
 */
export const metadata = {
  title: "Contact — Hotel Eagle Mountain",
  description:
    "Get in touch with Hotel Eagle Mountain to plan your journey to Dho Tarap, Upper Dolpa, Nepal.",
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
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=90"
        imagePosition="center 35%"
        height="h-[60vh] min-h-[420px]"
      />

      <ContactForm />
    </>
  );
}
