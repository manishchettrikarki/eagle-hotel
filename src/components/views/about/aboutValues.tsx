import RevealWrapper from "@/components/reusable/revealWrapper";

const VALUES = [
  {
    icon: "✦",
    title: "Authentic hospitality",
    body: "Every guest is welcomed with a traditional Newar ceremony. Our team speaks your language but thinks in the language of the mountains.",
  },
  {
    icon: "◈",
    title: "Community first",
    body: "100% locally staffed. We source ingredients from Tarap valley farmers, and reinvest in schools, trails and cultural preservation.",
  },
  {
    icon: "◇",
    title: "Responsible wilderness",
    body: "We operate within strict Leave No Trace principles. Our lodge runs on solar energy and filtered glacial water. No roads. No compromise.",
  },
  {
    icon: "○",
    title: "Deep expertise",
    body: "Our guides have walked every trail in Upper Dolpa for decades. Your safety and wonder are in the most experienced hands in the region.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-(--navy) py-24 md:py-32 px-6 md:px-[6vw]">
      <div className="max-w-350 mx-auto">
        <RevealWrapper className="mb-14">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-(--gold) mb-3">
            What we stand for
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white font-normal leading-[1.1]">
            Our values
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {VALUES.map((v, i) => (
            <RevealWrapper
              key={v.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="bg-(--navy) p-8 flex flex-col gap-5"
            >
              <span className="text-(--gold) text-2xl">{v.icon}</span>
              <h3 className="font-display text-white text-[1.1rem] font-normal">
                {v.title}
              </h3>
              <p className="text-white/55 text-[0.85rem] leading-[1.75] font-light">
                {v.body}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
