import RevealWrapper from "@/components/reusable/revealWrapper";
import Button from "@/components/reusable/button";

export default function EventsCTA() {
  return (
    <section className="relative py-28 px-6 md:px-[6vw] overflow-hidden flex items-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-(--navy)/80" />

      <RevealWrapper className="relative z-10 max-w-150">
        <p className="text-[0.62rem] tracking-[0.35em] uppercase text-(--gold) mb-4">
          Private & bespoke
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-white font-normal leading-[1.1] mb-5">
          Can&apos;t find what you&apos;re looking for?
        </h2>
        <p className="text-[0.92rem] text-white/65 leading-[1.8] font-light mb-8">
          Every guest arrives with a different dream. We design fully bespoke
          expeditions, private retreats and cultural programmes tailored to your
          interests, fitness level and the season. Tell us what calls to you.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Plan a bespoke experience
          </Button>
          <Button href="/about" variant="outline">
            Learn about us first
          </Button>
        </div>
      </RevealWrapper>
    </section>
  );
}
