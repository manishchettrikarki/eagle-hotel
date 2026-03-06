"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import RevealWrapper from "@/components/reusable/revealWrapper";

const SLIDER_IMGS = [
  {
    src: "/images/gallery/3.jpg",
    alt: "Hotel Eagle Mountain — Upper Dolpa",
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Tarap Valley landscape",
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Eagle Mountain lodge interior",
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Himalayan views from Dho Tarap",
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Upper Dolpa wilderness",
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Eagle Mountain guest experience",
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Traditional Newar architecture",
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Dho Tarap village, Upper Dolpa",
  },
];

const VISIBLE = 3;

export default function GallerySection() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = SLIDER_IMGS.length;

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
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5000);
  };

  useEffect(() => {
    // Start the auto-slide interval
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5000);

    // Clean up on unmount
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
    (_, i) => SLIDER_IMGS[(index + i) % total],
  );

  return (
    <section id="gallery" className="bg-(--navy) py-20 overflow-hidden px-10">
      {/* ── Section header ── */}
      <RevealWrapper className="max-w-350 mx-auto px-6 md:px-[6vw] mb-10">
        <p className="text-[0.62rem] tracking-[0.35em] uppercase text-(--gold) mb-3">
          A glimpse of life at Eagle Mountain
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white font-normal leading-[1.1]">
          The lodge &amp; <em className="italic text-(--gold)">surroundings</em>
        </h2>
      </RevealWrapper>

      {/* ── Carousel — arrows overlaid on first and last image ── */}
      <div className="relative">
        {/* Images with gaps */}
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
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Dark scrim — always subtle, stronger on hover */}
              <div className="absolute inset-0 bg-(--navy)/10 group-hover:bg-(--navy)/35 transition-all duration-500" />

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-linear-to-t from-(--navy)/80 to-transparent">
                <span className="font-display text-white text-[0.85rem] italic">
                  {img.alt}
                </span>
              </div>

              {/* ── LEFT arrow — overlaid on first image ── */}
              {i === 0 && (
                <button
                  onClick={handlePrev}
                  aria-label="Previous images"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 focus:outline-none drop-shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <path
                      d="M44 4C44 1.79086 42.2091 0 40 0H4C1.79086 0 0 1.79086 0 4V40C0 42.2091 1.79086 44 4 44H40C42.2091 44 44 42.2091 44 40V4Z"
                      fill="white"
                    />
                    <path
                      d="M27.1112 27.5833C27.5557 27.75 28.0557 27.8611 28.5001 27.8611C29.4723 27.8611 30.2779 27.4444 30.2779 26.6944C30.2779 26.3056 30.0001 25.8611 29.389 25.4444C26.139 23.2222 20.5001 22.9444 17.1668 22.9444C16.5279 22.9444 15.9723 22.9722 15.5557 22.9722H15.5279L27.1112 27.5833ZM32.0001 30L14.9723 23.1944L14.9168 23.2222C13.4168 23.8333 12.7501 24.6944 12.7501 26.0278H12.5557V21.7778L32.0001 14V16.3889L16.0834 22.75C16.6668 22.75 17.4168 22.7222 18.2501 22.7222C23.3612 22.7222 32.0001 23.4166 32.0001 29.5555V30Z"
                      fill="#00142E"
                    />
                  </svg>
                </button>
              )}

              {/* ── RIGHT arrow — overlaid on last image ── */}
              {i === VISIBLE - 1 && (
                <button
                  onClick={handleNext}
                  aria-label="Next images"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 focus:outline-none drop-shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <path
                      d="M0 4C0 1.79086 1.79086 0 4 0H40C42.2091 0 44 1.79086 44 4V40C44 42.2091 42.2091 44 40 44H4C1.79086 44 0 42.2091 0 40V4Z"
                      fill="white"
                    />
                    <path
                      d="M16.8888 27.5833C16.4443 27.75 15.9443 27.8611 15.4999 27.8611C14.5277 27.8611 13.7221 27.4444 13.7221 26.6944C13.7221 26.3056 13.9999 25.8611 14.611 25.4444C17.861 23.2222 23.4999 22.9444 26.8332 22.9444C27.4721 22.9444 28.0277 22.9722 28.4443 22.9722H28.4721L16.8888 27.5833ZM11.9999 30L29.0277 23.1944L29.0832 23.2222C30.5832 23.8333 31.2499 24.6944 31.2499 26.0278H31.4443V21.7778L11.9999 14V16.3889L27.9166 22.75C27.3332 22.75 26.5832 22.7222 25.7499 22.7222C20.6388 22.7222 11.9999 23.4166 11.9999 29.5555V30Z"
                      fill="#00142E"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center gap-2 mt-8">
        {SLIDER_IMGS.map((_, i) => (
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
