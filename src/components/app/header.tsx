"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/utils/constants";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-500 ${
          scrolled
            ? "bg-(--navy)/90 backdrop-blur-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="flex flex-col items-center text-center px-6">
          {/* LOGO */}

          <Link href="/" className="block">
            <div className="leading-tight mb-4 cursor-pointer">
              <span className="text-[0.65rem] tracking-[0.35em] uppercase block">
                HOTEL
              </span>

              <span className="font-display text-2xl md:text-3xl tracking-[0.15em] block">
                GOLDEN
              </span>

              <span className="text-[0.65rem] tracking-[0.35em] uppercase block">
                EAGLE
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:block">
            <ul className="flex gap-10 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white text-[0.8rem] font-bold tracking-[0.18em] uppercase transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden absolute right-6 top-6 flex flex-col gap-1.5"
          >
            <span
              className={`w-7 h-[1.5px] bg-white transition ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`w-7 h-[1.5px] bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-7 h-[1.5px] bg-white transition ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <nav
        className={`fixed inset-0 z-40 bg-(--navy) flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl hover:text-(--gold)"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
