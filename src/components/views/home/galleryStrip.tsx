"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import RevealWrapper from "@/components/reusable/revealWrapper";
import { HOMEPAGE_GALLERY } from "@/utils/constants";
import { IconArrowLeft, IconArrowRight } from "@/icons";

interface SliderImage {
  id?: string;
  src?: string; // static fallback
  public_url?: string; // from Supabase
  alt?: string;
  caption?: string | null;
}

// ── Static fallback (shown if Supabase has no images yet) ──
const FALLBACK_IMGS: SliderImage[] = [
  { src: "/images/gallery/1.jpg", alt: "Hotel Eagle Mountain — Upper Dolpa" },
  { src: "/images/gallery/2.jpg", alt: "Tarap Valley landscape" },
  { src: "/images/gallery/3.jpg", alt: "Eagle Mountain lodge interior" },
  { src: "/images/gallery/4.jpg", alt: "Himalayan views from Dho Tarap" },
  { src: "/images/gallery/5.jpg", alt: "Upper Dolpa wilderness" },
];

const VISIBLE = 3;

interface Props {
  images?: { id: string; public_url: string; caption: string | null }[];
}

export default function GallerySection({ images }: Props) {
  // Normalise Supabase images into the same shape, fall back to static
  const slides: SliderImage[] =
    images && images.length > 0
      ? images.map((img) => ({
          id: img.id,
          src: img.public_url,
          alt: img.caption ?? "Hotel Eagle Mountain",
        }))
      : FALLBACK_IMGS;

  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = slides.length;

  const goTo = (next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(next);
      setAnimating(false);
    }, 400);
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(
      () => setIndex((p) => (p + 1) % total),
      5000,
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setIndex((p) => (p + 1) % total),
      5000,
    );
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  const handlePrev = () => {
    goTo((index - 1 + total) % total);
    resetInterval();
  };
  const handleNext = () => {
    goTo((index + 1) % total);
    resetInterval();
  };

  const visibleImgs = Array.from(
    { length: VISIBLE },
    (_, i) => slides[(index + i) % total],
  );

  return (
    <section id="gallery" className="bg-(--navy) py-20 overflow-hidden px-10">
      {/* Section header */}
      <RevealWrapper className="max-w-350 mx-auto px-6 md:px-[6vw] mb-10">
        <p className="text-[0.62rem] tracking-[0.35em] uppercase text-(--gold) mb-3">
          {HOMEPAGE_GALLERY.shortTitle}
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white font-normal leading-[1.1]">
          {HOMEPAGE_GALLERY.title}
        </h2>
      </RevealWrapper>

      {/* Carousel */}
      <div className="relative">
        <div
          className={`grid grid-cols-3 gap-4 transition-opacity duration-400 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          {visibleImgs.map((img, i) => (
            <div
              key={`${index}-${i}`}
              className="relative overflow-hidden group"
              style={{ height: "clamp(280px, 30vw, 520px)" }}
            >
              <Image
                src={img.src!}
                alt={img.alt ?? "Gallery"}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-(--navy)/10 group-hover:bg-(--navy)/35 transition-all duration-500" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-linear-to-t from-(--navy)/80 to-transparent">
                <span className="font-display text-white text-[0.85rem] italic">
                  {img.alt}
                </span>
              </div>

              {/* Left arrow on first image */}
              {i === 0 && (
                <button
                  onClick={handlePrev}
                  aria-label="Previous images"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 focus:outline-none drop-shadow-lg"
                >
                  <IconArrowLeft />
                </button>
              )}

              {/* Right arrow on last image */}
              {i === VISIBLE - 1 && (
                <button
                  onClick={handleNext}
                  aria-label="Next images"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 focus:outline-none drop-shadow-lg"
                >
                  <IconArrowRight />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              goTo(i);
              resetInterval();
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 ${
              i === index
                ? "w-6 h-1.5 bg-(--gold)"
                : "w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
