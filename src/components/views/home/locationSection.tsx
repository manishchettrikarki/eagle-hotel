import RevealWrapper from "@/components/reusable/revealWrapper";
import SectionHeader from "@/components/reusable/sectionHeader";
import Button from "@/components/reusable/button";
import { LOCATION_STATS } from "@/utils/constants";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="bg-(--navy) grid grid-cols-1 lg:grid-cols-2 min-h-120"
    >
      {/* Text side */}
      <RevealWrapper className="px-6 md:px-[5vw] py-24 flex flex-col justify-center">
        <SectionHeader
          eyebrow="Dho Tarap, Upper Dolpa, Nepal"
          title="A valley apart from the world"
          body="Reachable by an 8-day trek from Juphal airstrip through the high passes of the Himalayas, Dho Tarap sits deep within the restricted zone of Upper Dolpa — one of the last great wilderness frontiers on earth, untouched by roads or modernity."
          light
        />

        {/* Stats */}
        <div className="flex flex-wrap gap-8 md:gap-12 mt-6 mb-8">
          {LOCATION_STATS.map((s) => (
            <div key={s.label}>
              <strong className="font-display block text-[2.2rem] text-(--gold) font-normal leading-none">
                {s.value}
              </strong>
              <span className="text-[0.68rem] tracking-widest uppercase text-white/45 block mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Two buttons */}
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            How to reach us
          </Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </RevealWrapper>

      {/* Map / landscape image */}
      <div
        className="hidden lg:block"
        style={{
          backgroundImage: "url('/images/gallery/2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
        }}
      />
    </section>
  );
}
