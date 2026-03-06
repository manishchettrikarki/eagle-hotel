import Image from "next/image";
import RevealWrapper from "@/components/reusable/revealWrapper";
import SectionHeader from "@/components/reusable/sectionHeader";

/**
 *
 */
export default function AboutStory() {
  return (
    <section className="bg-(--cream) py-24 md:py-32 px-6 md:px-[6vw]">
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <RevealWrapper>
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85"
            alt="Hotel Eagle Mountain lodge"
            width={900}
            height={520}
            className="w-full h-130 object-cover"
          />
        </RevealWrapper>

        <RevealWrapper delay={2} className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Our story"
            title="Born from the mountains"
            body="Hotel Eagle Mountain was founded with a single conviction: that the world's most remote places deserve the world's most considered hospitality."
          />
          <p className="text-[0.92rem] leading-[1.85] font-light text-(--charcoal)">
            Nestled in the sacred Tarap valley of Upper Dolpa at 3,950 metres
            above sea level, our lodge was built entirely by local craftsmen
            using traditional Newar stone-masonry and timber techniques passed
            down through generations. Every room, every hearth, every carved
            doorway tells the story of this ancient land.
          </p>
          <p className="text-[0.92rem] leading-[1.85] font-light text-(--charcoal)">
            Upper Dolpa remains one of the most culturally intact regions of
            Nepal — home to the Bon religion, ancient monasteries, and a way of
            life unchanged for centuries. We built Eagle Mountain to honour that
            heritage, not disturb it. Our team is drawn entirely from the local
            Dolpa community, and a portion of every booking directly funds the
            valley&apos;s education and conservation programmes.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
