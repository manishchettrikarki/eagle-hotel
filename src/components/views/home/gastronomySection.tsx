import RevealWrapper from "@/components/reusable/revealWrapper";
import SectionHeader from "@/components/reusable/sectionHeader";
import Button from "@/components/reusable/button";
import { GASTRO_IMGS } from "@/utils/constants";

const VENUES = [
  "The Tarap Table — Nepali & Tibetan highland cuisine",
  "Eagle Hearth — Open-fire trekker's dining hall",
  "Butter Tea Lounge — Traditional Bon hospitality",
];

export default function GastronomySection() {
  return (
    <section
      id="gastronomy"
      className="bg-[var(--cream)] py-24 md:py-32 px-6 md:px-[6vw]"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Photo collage */}
        <RevealWrapper className="grid grid-cols-2 gap-3">
          <img
            src={GASTRO_IMGS[0]}
            alt="Dining at Eagle Mountain"
            loading="lazy"
            className="col-span-1 row-span-2 w-full h-full object-cover"
            style={{ minHeight: "340px" }}
          />
          <img
            src={GASTRO_IMGS[1]}
            alt="Traditional Dolpa cuisine"
            loading="lazy"
            className="w-full h-[165px] object-cover"
          />
          <img
            src={GASTRO_IMGS[2]}
            alt="Eagle Hearth dining"
            loading="lazy"
            className="w-full h-[165px] object-cover"
          />
        </RevealWrapper>

        {/* Text */}
        <RevealWrapper delay={2} className="flex flex-col gap-5">
          <SectionHeader
            eyebrow="Nourish body & soul"
            title="Dining at the Roof of Dolpa"
            body="Our kitchens celebrate the honest flavours of the Himalayan highlands — fresh buckwheat, yak dairy, foraged herbs and ancient Tibetan recipes passed down through generations of the Tarap valley community."
          />

          {/* Venues list */}
          <div className="border-l-2 border-[var(--gold)] pl-5 flex flex-col gap-2 my-1">
            {VENUES.map((v) => (
              <span
                key={v}
                className="font-display text-[1.05rem] text-[var(--navy)] font-normal"
              >
                {v}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-1">
            <Button href="#gastronomy" variant="primary">
              Our dining
            </Button>
            <Button href="#gastronomy" variant="outline-dark">
              Eagle Hearth menu
            </Button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
