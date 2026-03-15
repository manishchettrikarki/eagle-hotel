"use client";

import Image from "next/image";
import { useState } from "react";
import type { Event } from "@/lib/supabase/type";
import RevealWrapper from "@/components/reusable/revealWrapper";

const PLACEHOLDER = "/images/village.jpg";

function EventImage({ src, alt }: { src: string | null; alt: string }) {
  const [imgSrc, setImgSrc] = useState<string>(src || PLACEHOLDER);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={800}
      height={220}
      className="w-full h-55 object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      onError={() => setImgSrc(PLACEHOLDER)}
    />
  );
}

export default function EventsList({ events }: { events: Event[] }) {
  return (
    <section className="bg-(--cream) py-24 md:py-32 px-6 md:px-[6vw]">
      <div className="max-w-350 mx-auto">
        <RevealWrapper className="mb-14">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-(--gold) mb-3">
            Curated for the curious
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-(--navy) font-normal leading-[1.1] max-w-125">
            Our Events
          </h2>
        </RevealWrapper>

        {events.length === 0 ? (
          <div className="py-20 text-center border border-(--navy)/10">
            <p className="text-(--navy)/35 font-light text-[0.9rem]">
              No experiences available right now. Please check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <RevealWrapper
                key={e.id}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="bg-white group overflow-hidden flex flex-col"
              >
                <div className="overflow-hidden relative">
                  <EventImage src={e.image_url} alt={e.title} />
                  <span className="absolute top-4 left-4 text-[0.6rem] tracking-[0.2em] uppercase bg-(--gold) text-(--navy) px-3 py-1.5 font-medium">
                    {e.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1">
                  {e.season && (
                    <p className="text-[0.62rem] tracking-[0.15em] uppercase text-(--gold)">
                      {e.season}
                    </p>
                  )}
                  <h3 className="font-display text-(--navy) text-[1.1rem] font-normal">
                    {e.title}
                  </h3>
                  {e.description && (
                    <p className="text-[0.82rem] text-(--charcoal) leading-[1.72] font-light flex-1">
                      {e.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 pt-3 border-t border-(--navy)/8 mt-auto">
                    {e.duration && (
                      <span className="text-[0.68rem] text-(--navy)/50 font-light">
                        ⏱ {e.duration}
                      </span>
                    )}
                    {e.capacity && (
                      <span className="text-[0.68rem] text-(--navy)/50 font-light">
                        👥 {e.capacity}
                      </span>
                    )}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
