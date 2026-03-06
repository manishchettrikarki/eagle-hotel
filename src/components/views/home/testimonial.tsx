"use client";

import { useState, useEffect, useRef } from "react";
import RevealWrapper from "@/components/reusable/revealWrapper";
import SectionHeader from "@/components/reusable/sectionHeader";

interface Testimonial {
  name: string;
  location: string;
  date: string;
  rating: number;
  text: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Thomas Hartley",
    location: "London, UK",
    date: "October 2024",
    rating: 5,
    text: "Trekking into Dho Tarap and finding Hotel Eagle Mountain was one of the great surprises of my life. After days on the high trail, the warmth, the food, and the sheer comfort here felt like a miracle. The views of the Dhaulagiri range from my room were simply breathtaking.",
    initials: "TH",
  },
  {
    name: "Priya Nair",
    location: "Mumbai, India",
    date: "September 2024",
    rating: 5,
    text: "Upper Dolpa is one of the most remote and spiritually profound places on earth, and Hotel Eagle Mountain honours that perfectly. The staff are incredibly warm, the traditional Newar cuisine was outstanding, and waking up to the raw Himalayan landscape every morning is something I will never forget.",
    initials: "PN",
  },
  {
    name: "Marcus & Lena Vogel",
    location: "Munich, Germany",
    date: "October 2024",
    rating: 5,
    text: "We have trekked across Nepal many times but Dho Tarap and this lodge are in a class of their own. The Eagle Mountain team knows the Dolpa region intimately and helped us plan an extraordinary route. The rooms are cosy, clean and perfectly suited to the altitude and climate.",
    initials: "MV",
  },
  {
    name: "Claire Fontenot",
    location: "Lyon, France",
    date: "August 2024",
    rating: 5,
    text: "Arriving at Hotel Eagle Mountain after crossing the high passes of Upper Dolpa felt like reaching a true sanctuary. The hospitality is genuinely heartfelt. The traditional stone architecture, the courtyard with mountain views, and the incredible homemade meals made this a deeply memorable stay.",
    initials: "CF",
  },
  {
    name: "David Okonkwo",
    location: "Nairobi, Kenya",
    date: "November 2024",
    rating: 5,
    text: "I came to Upper Dolpa searching for something real, and I found it here. The remoteness of Dho Tarap is humbling — you are truly off the map. Hotel Eagle Mountain is a rare gem in this hidden valley. The guides they connected us with were exceptional and deeply knowledgeable about the land.",
    initials: "DO",
  },
  {
    name: "Yuki Tanaka",
    location: "Kyoto, Japan",
    date: "September 2024",
    rating: 5,
    text: "The Dolpa region carries an ancient, meditative energy unlike anywhere else I have travelled. Hotel Eagle Mountain understood this completely. Every detail — the local stone construction, the butter tea by the fire, the silence of the Tarap valley at night — felt intentional and deeply respectful of the place.",
    initials: "YT",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < rating ? "var(--gold)" : "none"}
          stroke="var(--gold)"
          strokeWidth="1.2"
        >
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (isAnimating || idx === activeIdx) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setIsAnimating(false);
    }, 300);
  };

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handlePrev = () => {
    goTo((activeIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    startInterval();
  };
  const handleNext = () => {
    goTo((activeIdx + 1) % TESTIMONIALS.length);
    startInterval();
  };
  const handleDot = (i: number) => {
    goTo(i);
    startInterval();
  };

  const active = TESTIMONIALS[activeIdx];
  const stripIndices = [
    (activeIdx + 1) % TESTIMONIALS.length,
    (activeIdx + 2) % TESTIMONIALS.length,
    (activeIdx + 3) % TESTIMONIALS.length,
  ];

  return (
    <section
      id="testimonials"
      className="bg-(--mist) py-24 md:py-32 px-6 md:px-[6vw] overflow-hidden"
    >
      <div className="max-w-350 mx-auto">
        {/* Header row */}
        <RevealWrapper className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Voices from the trail"
            title="What our guests say"
          />

          {/* Score badges */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="text-right">
              <span className="font-display text-[3.5rem] text-(--gold) font-normal leading-none block">
                9.8
              </span>
              <span className="text-[0.62rem] tracking-[0.2em] uppercase text-(--navy)/40 block mt-1">
                Average score
              </span>
            </div>
            <div className="w-px h-12 bg-(--navy)/15" />
            <div className="text-right">
              <span className="font-display text-[3.5rem] text-(--navy) font-normal leading-none block">
                500+
              </span>
              <span className="text-[0.62rem] tracking-[0.2em] uppercase text-(--navy)/40 block mt-1">
                Trekker reviews
              </span>
            </div>
          </div>
        </RevealWrapper>

        {/* Main testimonial display */}
        <RevealWrapper
          delay={1}
          className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 mb-8"
        >
          {/* Featured quote card */}
          <div className="bg-white border border-(--navy)/8 p-8 md:p-12 relative overflow-hidden shadow-sm">
            {/* Decorative quote mark */}
            <span
              className="absolute top-4 right-8 font-display font-bold leading-none select-none pointer-events-none"
              style={{ fontSize: "9rem", color: "rgba(201,169,110,0.10)" }}
              aria-hidden
            >
              &quot;
            </span>

            <StarRating rating={active.rating} />

            {/* Quote */}
            <blockquote
              className={`font-display text-[1.2rem] md:text-[1.4rem] text-(--navy) font-normal leading-[1.6] mt-5 mb-8 italic transition-opacity duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              {active.text}
            </blockquote>

            {/* Author row */}
            <div
              className={`flex flex-wrap items-center gap-4 transition-opacity duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-11 h-11 bg-(--gold) flex items-center justify-center shrink-0">
                <span className="text-(--navy) text-[0.72rem] font-medium tracking-wider">
                  {active.initials}
                </span>
              </div>
              <div>
                <p className="text-(--navy) text-[0.9rem] font-medium">
                  {active.name}
                </p>
                <p className="text-(--charcoal)/50 text-[0.72rem] tracking-[0.08em] mt-0.5">
                  {active.location} · {active.date}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <span className="text-[0.6rem] tracking-[0.15em] uppercase text-(--navy)/30 hidden sm:block">
                  Verified on
                </span>
                <span className="text-(--navy)/40 text-[0.72rem] font-medium border border-(--navy)/15 px-2.5 py-1">
                  Booking
                </span>
                <span className="text-(--navy)/40 text-[0.72rem] font-medium border border-(--navy)/15 px-2.5 py-1">
                  Google
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 border border-(--navy)/20 text-(--navy) hover:border-(--gold) hover:text-(--gold) transition-all duration-300 text-lg"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 border border-(--navy)/20 text-(--navy) hover:border-(--gold) hover:text-(--gold) transition-all duration-300 text-lg"
              >
                →
              </button>
              <div className="flex items-center gap-2 ml-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDot(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`transition-all duration-300 ${
                      i === activeIdx
                        ? "w-6 h-1.5 bg-(--gold)"
                        : "w-1.5 h-1.5 rounded-full bg-(--navy)/20 hover:bg-(--navy)/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Side strip — next 3 testimonials */}
          <div className="hidden lg:flex flex-col gap-3">
            {stripIndices.map((idx) => {
              const t = TESTIMONIALS[idx];
              return (
                <button
                  key={idx}
                  onClick={() => handleDot(idx)}
                  className={`text-left border p-5 transition-all duration-300 flex-1 ${
                    idx === activeIdx
                      ? "border-(--gold)/60 bg-(--gold)/8"
                      : "border-(--navy)/10 bg-white hover:border-(--navy)/25 shadow-sm"
                  }`}
                >
                  <StarRating rating={t.rating} />
                  <p className="text-(--charcoal) text-[0.78rem] leading-[1.6] mt-2.5 line-clamp-2 font-light">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-2.5 mt-3">
                    <div className="w-6 h-6 bg-(--gold)/25 flex items-center justify-center shrink-0">
                      <span className="text-(--gold) text-[0.55rem] font-medium">
                        {t.initials}
                      </span>
                    </div>
                    <span className="text-(--navy)/45 text-[0.68rem] tracking-[0.06em]">
                      {t.name} · {t.location}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </RevealWrapper>

        {/* Platform scores strip */}
        <RevealWrapper delay={2}>
          <div className="border-t border-(--navy)/10 pt-8 flex flex-wrap items-center gap-6 md:gap-10">
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-(--navy)/30 shrink-0">
              Recognised on
            </span>
            {[
              { name: "Booking.com", score: "9.8" },
              { name: "TripAdvisor", score: "5.0" },
              { name: "Google", score: "4.9" },
              { name: "Nepal Tourism", score: "★★★★★" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2">
                <span className="text-(--navy)/35 text-[0.78rem] font-medium">
                  {p.name}
                </span>
                <span className="font-display text-(--gold) text-[0.9rem]">
                  {p.score}
                </span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
