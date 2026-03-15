"use client";

import Image from "next/image";
import { HOMEPAGE_ROOMS, ROOM_TYPES } from "@/utils/constants";
import RevealWrapper from "@/components/reusable/revealWrapper";
import { useState, useEffect, useRef, useCallback } from "react";

//
const PAGE_SIZE = 3;

//
export default function RoomsSection() {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(ROOM_TYPES.length / PAGE_SIZE) - 1;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const visible = ROOM_TYPES.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );

  const goNext = useCallback(
    () => setPage((p) => (p >= maxPage ? 0 : p + 1)),
    [maxPage],
  );
  const goPrev = useCallback(
    () => setPage((p) => (p <= 0 ? maxPage : p - 1)),
    [maxPage],
  );

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goNext, 4000);
  }, [goNext]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetInterval]);

  /* ── Mouse drag ── */
  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true;
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 50) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      diff < 0 ? goNext() : goPrev();
      resetInterval();
    }
    dragStartX.current = null;
    isDragging.current = false;
  };

  /* ── Touch drag ── */
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(diff) > 50) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      diff < 0 ? goNext() : goPrev();
      resetInterval();
    }
    dragStartX.current = null;
  };

  return (
    <section
      id="rooms"
      className="bg-(--mist) py-24 md:py-32 px-6 md:px-[6vw] overflow-hidden"
    >
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
        {/* Sidebar */}
        <div className="pt-2">
          <RevealWrapper>
            <p className="text-[0.65rem] tracking-[0.35em] uppercase mb-3 text-(--gold)">
              {HOMEPAGE_ROOMS.subtitle}
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.1] mb-4 text-(--navy)">
              {HOMEPAGE_ROOMS.title}
            </h2>
            <p className="text-[0.95rem] leading-[1.8] font-light max-w-135 text-(--charcoal)">
              {HOMEPAGE_ROOMS.desc}
            </p>
          </RevealWrapper>
        </div>

        {/* Cards — draggable */}
        <RevealWrapper delay={1} className="relative select-none">
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 cursor-grab active:cursor-grabbing"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={() => {
              dragStartX.current = null;
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {visible.map((room) => (
              <div
                key={room.name}
                className="room-card relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={room.img}
                  alt={room.name}
                  width={600}
                  height={400}
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.08] pointer-events-none"
                />
                <div className="absolute inset-0 bg-linear-to-t from-(--navy)/90 via-transparent to-transparent flex items-end p-4">
                  <span className="font-display text-white text-[0.9rem] font-normal">
                    {room.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxPage + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setPage(i);
                  resetInterval();
                }}
                aria-label={`Go to page ${i + 1}`}
                className={`transition-all duration-300 ${
                  i === page
                    ? "w-6 h-1.5 bg-(--gold)"
                    : "w-1.5 h-1.5 rounded-full bg-(--navy)/25 hover:bg-(--navy)/50"
                }`}
              />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
