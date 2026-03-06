import RevealWrapper from "@/components/reusable/revealWrapper";

const STATS = [
  { value: "3,950m", label: "Altitude — among the highest lodges in Nepal" },
  { value: "100%", label: "Local staff from the Dolpa community" },
  { value: "25+", label: "Years of combined guiding experience" },
  { value: "2,000+", label: "Years of Bon heritage in the Tarap valley" },
  { value: "8 days", label: "Trek from Juphal — the reward is the journey" },
  { value: "Zero", label: "Roads. No vehicles. Pure wilderness." },
];

export default function AboutStats() {
  return (
    <section className="bg-(--cream) py-20 px-6 md:px-[6vw]">
      <div className="max-w-350 mx-auto grid grid-cols-2 md:grid-cols-3 gap-px bg-(--navy)/10">
        {STATS.map((s, i) => (
          <RevealWrapper
            key={s.label}
            delay={((i % 3) + 1) as 1 | 2 | 3}
            className="bg-(--cream) p-8 md:p-10"
          >
            <strong className="font-display block text-[2.8rem] text-(--gold) font-normal leading-none mb-2">
              {s.value}
            </strong>
            <span className="text-[0.78rem] text-(--charcoal) leading-[1.6] font-light">
              {s.label}
            </span>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
