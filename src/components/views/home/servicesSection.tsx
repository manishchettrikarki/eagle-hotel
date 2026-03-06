import RevealWrapper from "@/components/reusable/revealWrapper";
import SectionHeader from "@/components/reusable/sectionHeader";
import Button from "@/components/reusable/button";
import { SERVICES } from "@/utils/constants";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-(--mist) py-24 md:py-32 px-6 md:px-[6vw]"
    >
      <div className="max-w-350 mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
          <RevealWrapper>
            <SectionHeader
              eyebrow="Experiences & Amenities"
              title="Our services"
            />
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <Button
              href="https://www.themountainshotel.es/servicios/"
              variant="primary"
              external
            >
              To dos & amenities
            </Button>
          </RevealWrapper>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {SERVICES.map((s, i) => (
            <RevealWrapper
              key={s.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="bg-white overflow-hidden group"
            >
              <div className="overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={400}
                  height={200}
                  className="w-full h-50 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-(--navy) text-[1rem] font-normal mb-2">
                  {s.title}
                </h3>
                <p className="text-[0.82rem] leading-[1.65] font-light text-(--charcoal)">
                  {s.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
