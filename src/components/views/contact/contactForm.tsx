"use client";

import { useState } from "react";
import RevealWrapper from "@/components/reusable/revealWrapper";

const INTERESTS = [
  "Rooms & Accommodation",
  "Trekking Expeditions",
  "Snow Leopard Safari",
  "Cultural Immersion",
  "Himalayan Wellness Retreat",
  "Photography Tour",
  "Bespoke Experience",
  "General Enquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-(--cream) py-24 md:py-32 px-6 md:px-[6vw]"
    >
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-24">
        {/* Form */}
        <RevealWrapper>
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-(--gold) mb-3">
            We&apos;d love to hear from you
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-(--navy) font-normal leading-[1.1] mb-10">
            Send us a message
          </h2>

          {submitted ? (
            <div className="bg-(--gold)/10 border border-(--gold)/30 p-8 text-center">
              <span className="text-(--gold) text-2xl block mb-3">✦</span>
              <h3 className="font-display text-(--navy) text-[1.3rem] mb-2">
                Message received
              </h3>
              <p className="text-(--charcoal) text-[0.88rem] font-light">
                Thank you for reaching out. Our team will respond within 48
                hours. The mountains are waiting.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.15em] uppercase text-(--navy)/60">
                    Full name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="bg-white border border-(--navy)/15 px-4 py-3 text-[0.88rem] text-(--navy) placeholder-(--navy)/30 outline-none focus:border-(--gold) transition-colors font-(--font-body)"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.15em] uppercase text-(--navy)/60">
                    Email address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white border border-(--navy)/15 px-4 py-3 text-[0.88rem] text-(--navy) placeholder-(--navy)/30 outline-none focus:border-(--gold) transition-colors font-(--font-body)"
                  />
                </div>
              </div>

              {/* Dates + guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.15em] uppercase text-(--navy)/60">
                    Arrival date
                  </label>
                  <input
                    type="date"
                    className="bg-white border border-(--navy)/15 px-4 py-3 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors font-(--font-body) scheme-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.15em] uppercase text-(--navy)/60">
                    Departure date
                  </label>
                  <input
                    type="date"
                    className="bg-white border border-(--navy)/15 px-4 py-3 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors font-(--font-body) scheme-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.15em] uppercase text-(--navy)/60">
                    No. of guests
                  </label>
                  <input
                    type="number"
                    min={1}
                    defaultValue={2}
                    className="bg-white border border-(--navy)/15 px-4 py-3 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors font-(--font-body)"
                  />
                </div>
              </div>

              {/* Interest tags */}
              <div className="flex flex-col gap-3">
                <label className="text-[0.65rem] tracking-[0.15em] uppercase text-(--navy)/60">
                  I&apos;m interested in
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggle(item)}
                      className={`text-[0.68rem] tracking-widest uppercase px-3 py-2 transition-all duration-200 ${
                        selected.includes(item)
                          ? "bg-(--gold) text-(--navy) font-medium"
                          : "border border-(--navy)/20 text-(--navy)/55 hover:border-(--gold)"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] tracking-[0.15em] uppercase text-(--navy)/60">
                  Your message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your dream journey to Upper Dolpa..."
                  className="bg-white border border-(--navy)/15 px-4 py-3 text-[0.88rem] text-(--navy) placeholder-(--navy)/30 outline-none focus:border-(--gold) transition-colors resize-none font-(--font-body)"
                />
              </div>

              <button
                type="submit"
                className="self-start bg-(--gold) text-(--navy) px-8 py-4 text-[0.72rem] font-medium tracking-[0.18em] uppercase hover:bg-[#b8904f] hover:-translate-y-px transition-all duration-300"
              >
                Send message
              </button>
            </form>
          )}
        </RevealWrapper>

        {/* Info panel */}
        <RevealWrapper delay={2} className="flex flex-col gap-8">
          {/* Contact details */}
          <div className="bg-(--navy) p-8 flex flex-col gap-6">
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-(--gold)">
              Contact details
            </p>

            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                ),
                label: "Address",
                value:
                  "Tarap Valley, Dho Tarap Village\nUpper Dolpa District\nKarnali Province, Nepal — 3,950m",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                ),
                label: "Email",
                value: "info@eaglemountain-dolpa.com",
                href: "mailto:info@eaglemountain-dolpa.com",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: "Phone / WhatsApp",
                value: "+977 9745216366",
                href: "tel:+977000000000",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-(--gold) mt-0.5 shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[0.62rem] tracking-[0.15em] uppercase text-white/35 mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[0.85rem] text-white/70 font-light hover:text-(--gold) transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[0.85rem] text-white/70 font-light whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* How to reach us */}
          <div className="border border-(--navy)/15 p-8 flex flex-col gap-4">
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-(--gold)">
              How to reach us
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  step: "1",
                  text: "Fly to Kathmandu (KTM) — international connections",
                },
                {
                  step: "2",
                  text: "Domestic flight Kathmandu → Juphal (JUL), Upper Dolpa",
                },
                {
                  step: "3",
                  text: "8-day guided trek from Juphal to Dho Tarap via high passes",
                },
                {
                  step: "4",
                  text: "Arrive at Hotel Eagle Mountain — your sanctuary awaits",
                },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-(--gold) text-(--navy) flex items-center justify-center text-[0.68rem] font-medium shrink-0 mt-0.5">
                    {s.step}
                  </span>
                  <p className="text-[0.85rem] text-(--charcoal) font-light leading-snug">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[0.75rem] text-(--navy)/40 font-light italic mt-1">
              A special restricted area permit is required for Upper Dolpa. We
              handle all permit arrangements for our guests.
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
