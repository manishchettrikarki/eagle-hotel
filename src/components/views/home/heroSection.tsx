import { ABOUT_CONTENT, HOTEL_NAME } from "@/utils/constants";

//
export default function HeroSection() {
  return (
    <section className="relative h-svh min-h-150 overflow-hidden flex items-end">
      {/* Background image with zoom animation */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/video-2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-(--navy)/85 via-(--navy)/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-[6vw] pb-[10vh] max-w-175">
        <p className="animate-fade-up-1 text-[0.68rem] tracking-[0.35em] uppercase text-(--gold) mb-5">
          {HOTEL_NAME.full}
        </p>

        <h1 className="animate-fade-up-2 font-display text-[clamp(3rem,7vw,6rem)] font-normal text-white leading-[1.05] mb-5">
          {HOTEL_NAME.heroFirst}{" "}
          <em className="italic text-(--gold)">{HOTEL_NAME.heroSecond}</em>
        </h1>

        <p className="animate-fade-up-3 text-[0.95rem] text-white/72 leading-[1.75] mb-8 max-w-120 font-light">
          {ABOUT_CONTENT.desc}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in absolute bottom-10 right-[6vw] z-10 flex flex-col items-center gap-2">
        <span
          className="text-[0.58rem] tracking-[0.25em] uppercase text-white/40"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div
          className="animate-line-grow w-px h-12.5"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--gold))",
          }}
        />
      </div>
    </section>
  );
}
