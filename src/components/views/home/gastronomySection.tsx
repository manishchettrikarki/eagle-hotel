import Image from "next/image";
import RevealWrapper from "@/components/reusable/revealWrapper";
import SectionHeader from "@/components/reusable/sectionHeader";
import { GASTRO_IMGS } from "@/utils/constants";

export default function GastronomySection() {
  return (
    <section
      id="gastronomy"
      className="bg-(--cream) py-24 md:py-32 px-6 md:px-[6vw]"
    >
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Photo collage */}
        <RevealWrapper className="grid grid-cols-2 gap-3">
          {/* Tall left image */}
          <div
            className="relative col-span-1 row-span-2"
            style={{ minHeight: "340px" }}
          >
            <Image
              src={GASTRO_IMGS[0]}
              alt="Dining at Eagle Mountain"
              fill
              sizes="(max-width:1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          {/* Top right */}
          <div className="relative h-41.25">
            <Image
              src={GASTRO_IMGS[1]}
              alt="Traditional Dolpa cuisine"
              fill
              sizes="(max-width:1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          {/* Bottom right */}
          <div className="relative h-41.25">
            <Image
              src={GASTRO_IMGS[2]}
              alt="Eagle Hearth dining"
              fill
              sizes="(max-width:1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </RevealWrapper>

        {/* Text */}
        <RevealWrapper delay={2} className="flex flex-col gap-5">
          <SectionHeader
            eyebrow="Nourish body & soul"
            title="Dining at the Roof of Dolpa"
            body="Our kitchens celebrate the honest flavours of the Himalayan highlands — fresh buckwheat, yak dairy, foraged herbs and ancient Tibetan recipes passed down through generations of the Tarap valley community."
          />

          {/* <div className="border-l-2 border-(--gold) pl-5 flex flex-col gap-2 my-1">
            {VENUES.map((v) => (
              <span
                key={v}
                className="font-display text-[1.05rem] text-(--navy) font-normal"
              >
                {v}
              </span>
            ))}
          </div> */}

          {/* <div className="flex flex-wrap gap-3 mt-1">
            <Button href="#gastronomy" variant="primary">
              Our dining
            </Button>
            <Button href="#gastronomy" variant="outline-dark">
              Eagle Hearth menu
            </Button>
          </div> */}
        </RevealWrapper>
      </div>
    </section>
  );
}
