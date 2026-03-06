import { LEGAL_LINKS, NAV_COLS, SOCIAL_LINKS } from "@/utils/constants";
import Link from "next/link";

/**
 *
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ── Background image with deep overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/village.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Multi-layer overlay: deep navy bottom, semi-transparent top */}
      <div className="absolute inset-0 bg-linear-to-b from-(--navy)/85 via-(--navy)/80 to-[#000D1F]/98" />

      {/* ── Content ── */}
      <div className="relative z-10">
        {/* ── UPPER SECTION: hero-like intro ── */}
        <div className="px-6 md:px-[6vw] pt-24 pb-16 border-b border-white/8">
          <div className="max-w-350 mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            {/* Brand block */}
            <div className="max-w-120">
              <p className="text-[0.62rem] tracking-[0.35em] uppercase text-(--gold) mb-3">
                ✦ Dho Tarap · Upper Dolpa · Nepal
              </p>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] text-white font-normal leading-[1.1] mb-5">
                Hotel Eagle
                <br />
                <em className="italic text-(--gold)">Mountain</em>
              </h2>
              <p className="text-[0.88rem] text-white/55 leading-[1.8] font-light">
                A sanctuary of warmth and Newar culture at 3,950m in the hidden
                Tarap valley — one of Nepal&apos;s last great Himalayan
                frontiers, surrounded by ancient Bon monasteries, snow leopards,
                and skies untouched by light pollution.
              </p>
            </div>

            {/* Contact block */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-(--gold) mt-0.5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="text-[0.8rem] text-white/55 font-light leading-snug">
                  Tarap Valley, Dho Tarap Village
                  <br />
                  Upper Dolpa District, Karnali Province
                  <br />
                  Nepal — 3,950m
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-(--gold) shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a
                  href="mailto:info@eaglemountain-dolpa.com"
                  className="text-[0.8rem] text-white/55 font-light hover:text-(--gold) transition-colors"
                >
                  info@eaglemountain-dolpa.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-(--gold) shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a
                  href="tel:+977-1-0000000"
                  className="text-[0.8rem] text-white/55 font-light hover:text-(--gold) transition-colors"
                >
                  +977 (0) 000 000 000
                </a>
              </div>

              {/* Social icons */}
              <div className="flex gap-3 mt-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-(--gold) hover:text-(--gold) transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MID SECTION: nav columns ── */}
        <div className="px-6 md:px-[6vw] py-14 border-b border-white/8">
          <div className="max-w-350 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
            {NAV_COLS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[0.6rem] tracking-[0.28em] uppercase text-(--gold) mb-5">
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[0.82rem] font-light text-white/45 hover:text-(--gold) transition-colors duration-300"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── STATS STRIP ── */}
        <div className="px-6 md:px-[6vw] py-10 border-b border-white/8">
          <div className="max-w-350 mx-auto flex flex-wrap justify-center sm:justify-between gap-8">
            {[
              { value: "3,950m", label: "Altitude" },
              { value: "8 days", label: "Trek from Juphal" },
              { value: "2,000+", label: "Years of Bon heritage" },
              { value: "9.8", label: "Guest rating" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <strong className="font-display block text-[2rem] text-(--gold) font-normal leading-none">
                  {s.value}
                </strong>
                <span className="text-[0.62rem] tracking-[0.15em] uppercase text-white/35 block mt-1.5">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="px-6 md:px-[6vw] py-6">
          <div className="max-w-350 mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Legal links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2">
              {LEGAL_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[0.65rem] text-white/25 hover:text-(--gold) transition-colors duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[0.65rem] text-white/20 shrink-0 text-center">
              © {new Date().getFullYear()} Hotel Eagle Mountain · Upper Dolpa,
              Nepal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
