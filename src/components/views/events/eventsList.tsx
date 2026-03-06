import RevealWrapper from "@/components/reusable/revealWrapper";
import Button from "@/components/reusable/button";
import Image from "next/image";

const EVENTS = [
  {
    season: "Year-round",
    tag: "Trekking",
    title: "Upper Dolpa Expedition",
    desc: "An 8–14 day guided expedition from Juphal through the high passes into the Tarap valley. Cross ancient trade routes, sleep under Himalayan stars, and arrive at Eagle Mountain as a true traveller — not a tourist.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    capacity: "Max 8 guests",
    duration: "8–14 days",
  },
  {
    season: "Oct – Nov · Mar – May",
    tag: "Wildlife",
    title: "Snow Leopard Safari",
    desc: "Led by our expert wildlife trackers, this multi-day expedition ventures into the high ridgelines of Upper Dolpa — one of the last viable habitats of the elusive snow leopard, Himalayan wolf and blue sheep.",
    img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
    capacity: "Max 4 guests",
    duration: "5–7 days",
  },
  {
    season: "June – September",
    tag: "Culture",
    title: "Bon Monastery Immersion",
    desc: "Spend three days living alongside the monks of the ancient Bon monasteries of the Tarap valley. Attend dawn rituals, learn sacred chants, and witness a spiritual tradition that predates Buddhism in Nepal.",
    img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
    capacity: "Max 6 guests",
    duration: "3 days",
  },
  {
    season: "Year-round",
    tag: "Wellness",
    title: "Himalayan Retreat",
    desc: "A 5-day programme combining altitude yoga at dawn, Himalayan hot-stone therapy, guided meditation in the valley silence, and nourishing traditional cuisine. Designed for deep restoration.",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
    capacity: "Max 10 guests",
    duration: "5 days",
  },
  {
    season: "December – February",
    tag: "Photography",
    title: "Winter Light Photography Tour",
    desc: "The Tarap valley in winter is extraordinary — frozen lakes, snow-draped monasteries, crystal skies. Join our resident photographer for a week shooting the most photogenic wilderness in the Himalayas.",
    img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    capacity: "Max 6 guests",
    duration: "7 days",
  },
  {
    season: "August",
    tag: "Festival",
    title: "Tarap Valley Festival Stay",
    desc: "Time your visit with the annual Tarap valley festival — a celebration of Bon culture, masked dances, traditional music and communal feasting that draws families from across the region.",
    img: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=800&q=80",
    capacity: "Max 12 guests",
    duration: "4 days",
  },
];

export default function EventsList() {
  return (
    <section className="bg-(--cream) py-24 md:py-32 px-6 md:px-[6vw]">
      <div className="max-w-350 mx-auto">
        <RevealWrapper className="mb-14">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-(--gold) mb-3">
            Curated for the curious
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-(--navy) font-normal leading-[1.1] max-w-125">
            Experiences in the Tarap valley
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((e, i) => (
            <RevealWrapper
              key={e.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="bg-white group overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden relative">
                <Image
                  src={e.img}
                  alt={e.title}
                  width={400}
                  height={220}
                  className="w-full h-55 object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute top-4 left-4 text-[0.6rem] tracking-[0.2em] uppercase bg-(--gold) text-(--navy) px-3 py-1.5 font-medium">
                  {e.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <p className="text-[0.62rem] tracking-[0.15em] uppercase text-(--gold)">
                  {e.season}
                </p>
                <h3 className="font-display text-(--navy) text-[1.1rem] font-normal">
                  {e.title}
                </h3>
                <p className="text-[0.82rem] text-(--charcoal) leading-[1.72] font-light flex-1">
                  {e.desc}
                </p>

                <div className="flex items-center gap-4 pt-3 border-t border-(--navy)/8 mt-auto">
                  <span className="text-[0.68rem] text-(--navy)/50 font-light">
                    ⏱ {e.duration}
                  </span>
                  <span className="text-[0.68rem] text-(--navy)/50 font-light">
                    👥 {e.capacity}
                  </span>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={1} className="mt-14 flex justify-center">
          <Button href="#contact" variant="primary">
            Enquire about an experience
          </Button>
        </RevealWrapper>
      </div>
    </section>
  );
}
