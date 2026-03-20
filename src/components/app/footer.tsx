// import Link from "next/link";
import { IconEmail, IconLocation, IconPhone } from "@/icons";
import {
  ABOUT_CONTENT,
  CONTACT_INFO,
  HOTEL_NAME,
  SOCIAL_LINKS,
} from "@/utils/constants";

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
                {CONTACT_INFO.location}
              </p>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] text-white font-normal leading-[1.1] mb-5">
                {HOTEL_NAME.first} {HOTEL_NAME.second}
                <br />
                <em className="italic text-(--gold)">{HOTEL_NAME.third}</em>
              </h2>
              <p className="text-[0.88rem] text-white/55 leading-[1.8] font-light">
                {ABOUT_CONTENT.desc}
              </p>
            </div>

            {/* Contact block */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-(--gold) mt-0.5 shrink-0">
                  <IconLocation />
                </span>
                <span className="text-[0.8rem] text-white/55 font-light leading-snug">
                  {CONTACT_INFO.address}
                  <br />
                  {CONTACT_INFO.city}
                  <br />
                  {CONTACT_INFO.height}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-(--gold) shrink-0">
                  <IconEmail />
                </span>
                <a
                  href="mailto:hotelgoldeneagle1@gmail.com"
                  className="text-[0.8rem] text-white/55 font-light hover:text-(--gold) transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-(--gold) shrink-0">
                  <IconPhone />
                </span>
                <a
                  href="tel:+977-1-0000000"
                  className="text-[0.8rem] text-white/55 font-light hover:text-(--gold) transition-colors"
                >
                  {CONTACT_INFO.phone}
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
        {/* <div className="px-6 md:px-[6vw] py-14 border-b border-white/8">
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
        </div> */}

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
          <div className="max-w-350 mx-auto items-center gap-5">
            {/* Copyright */}
            <p className="text-[0.65rem] text-white/20 shrink-0 text-center">
              © {new Date().getFullYear()} {HOTEL_NAME.full}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
