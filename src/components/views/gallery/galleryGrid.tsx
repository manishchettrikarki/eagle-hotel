"use client";

import { useState } from "react";
import Image from "next/image";
import RevealWrapper from "@/components/reusable/revealWrapper";
import type { GalleryImage } from "@/lib/supabase/type";

const CATEGORIES = [
  "All",
  "Lodge",
  "Landscape",
  "Culture",
  "Dining",
  "Wellness",
];

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

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

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center border border-(--navy)/10">
            <p className="text-(--navy)/35 font-light text-[0.9rem]">
              No images in this category yet.
            </p>
          </div>
        ) : (
          /* Masonry grid */
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <RevealWrapper
                key={img.id}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden"
              >
                <div
                  className="group cursor-pointer relative overflow-hidden"
                  onClick={() => setLightbox(img)}
                >
                  <Image
                    src={img.public_url}
                    alt={img.caption ?? "Gallery image"}
                    width={800}
                    height={600}
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, (max-width:1280px) 33vw, 25vw"
                    className="w-full object-cover block transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-(--navy)/0 group-hover:bg-(--navy)/45 transition-all duration-500 flex items-end p-4 opacity-0 group-hover:opacity-100">
                    {img.caption && (
                      <span className="font-display text-white text-[0.82rem] italic">
                        {img.caption}
                      </span>
                    )}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        )}
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
              src={lightbox.public_url}
              alt={lightbox.caption ?? "Gallery image"}
              width={1400}
              height={900}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {lightbox.caption && (
              <p className="font-display text-white/70 text-[0.85rem] italic mt-3 text-center">
                {lightbox.caption}
              </p>
            )}

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
