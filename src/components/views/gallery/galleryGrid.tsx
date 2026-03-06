"use client";

import { useState } from "react";
import RevealWrapper from "@/components/reusable/revealWrapper";
import Image from "next/image";

const CATEGORIES = [
  "All",
  "Lodge",
  "Landscape",
  "Culture",
  "Dining",
  "Wellness",
];

const IMAGES = [
  {
    src: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1345/welcome-slider-01.jpg",
    cat: "Lodge",
    caption: "Eagle Mountain main lodge, Dho Tarap",
  },
  {
    src: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1345/welcome-slider-02.jpg",
    cat: "Landscape",
    caption: "Tarap valley at dawn",
  },
  {
    src: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1345/welcome-slider-03.jpg",
    cat: "Lodge",
    caption: "Guest room with valley views",
  },
  {
    src: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1345/welcome-slider-04.jpg",
    cat: "Landscape",
    caption: "Himalayan peaks above Dho Tarap",
  },
  {
    src: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1345/welcome-slider-05.jpg",
    cat: "Culture",
    caption: "Ancient Bon monastery, Upper Dolpa",
  },
  {
    src: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1345/welcome-slider-06.jpg",
    cat: "Dining",
    caption: "The Tarap Table — highland cuisine",
  },
  {
    src: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1345/welcome-slider-07.jpg",
    cat: "Wellness",
    caption: "Himalayan hot-stone therapy",
  },
  {
    src: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1345/welcome-slider-08.jpg",
    cat: "Landscape",
    caption: "Snow-covered Tarap valley in winter",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    cat: "Landscape",
    caption: "Trekking to Dho Tarap",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    cat: "Landscape",
    caption: "Upper Dolpa high passes",
  },
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
    cat: "Wellness",
    caption: "Altitude yoga at Eagle Mountain",
  },
  {
    src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
    cat: "Culture",
    caption: "Bon cultural ceremony, Tarap valley",
  },
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    cat: "Dining",
    caption: "Traditional Newar breakfast",
  },
  {
    src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
    cat: "Landscape",
    caption: "Snow leopard habitat, Upper Dolpa",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    cat: "Landscape",
    caption: "Eagle Mountain expedition trail",
  },
  {
    src: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=800&q=80",
    cat: "Landscape",
    caption: "Sunset over the Tarap valley",
  },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  const filtered =
    active === "All" ? IMAGES : IMAGES.filter((img) => img.cat === active);

  return (
    <section className="bg-(--cream) py-20 px-6 md:px-[6vw]">
      <div className="max-w-350 mx-auto">
        {/* Category filter */}
        <RevealWrapper className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[0.68rem] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 ${
                active === cat
                  ? "bg-(--gold) text-(--navy) font-medium"
                  : "border border-(--navy)/20 text-(--navy)/55 hover:border-(--gold) hover:text-(--gold)"
              }`}
            >
              {cat}
            </button>
          ))}
        </RevealWrapper>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <RevealWrapper
              key={img.src}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden"
            >
              <div
                onClick={() =>
                  setLightbox({ src: img.src, caption: img.caption })
                }
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  width={600}
                  height={400}
                  className="w-full object-cover block transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-(--navy)/95 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.caption}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="font-display text-white/70 text-[0.85rem] italic mt-3 text-center">
              {lightbox.caption}
            </p>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-9 h-9 bg-(--gold) text-(--navy) flex items-center justify-center text-lg hover:bg-white transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
