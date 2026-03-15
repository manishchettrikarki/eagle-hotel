"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RevealWrapper from "@/components/reusable/revealWrapper";
import SectionHeader from "@/components/reusable/sectionHeader";
import Button from "@/components/reusable/button";
import { GALLERY_IMGS } from "@/utils/constants";

export default function WelcomeSection() {
  const [galleryIdx, setGalleryIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setGalleryIdx((i) => (i + 1) % GALLERY_IMGS.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="welcome"
      className="bg-(--cream) py-24 md:py-32 px-6 md:px-[6vw]"
    >
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Images */}
        <RevealWrapper className="relative">
          {/* Main Image */}
          <div className="relative w-full h-125 lg:h-145">
            <Image
              src="/images/hotel-7.jpg"
              alt="The Mountains Hotel interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Accent badge */}
          <div className="absolute -top-5 -left-5 bg-(--navy) text-(--gold) p-4 text-center leading-snug">
            <strong className="font-display block text-2xl font-semibold">
              ★★★
            </strong>
            <span className="text-[0.65rem] tracking-widest uppercase block mt-0.5">
              Hotel Golden Eagle
              <br />
              Upper Dolpa
            </span>
          </div>

          {/* Auto-cycling inset image */}
          <div className="absolute -bottom-7 -right-7 w-[55%] h-40 border-4 border-(--cream) shadow-2xl">
            <Image
              key={galleryIdx}
              src={GALLERY_IMGS[galleryIdx]}
              alt="Hotel gallery"
              fill
              className="object-cover transition-opacity duration-700"
              sizes="(max-width: 1024px) 50vw, 30vw"
            />
          </div>
        </RevealWrapper>

        {/* Text */}
        <RevealWrapper delay={2} className="lg:pl-6">
          <SectionHeader
            eyebrow="Upper dolpa, nepal"
            title="Hotel Golden Eagle"
            body="Welcome to Hotel Golden Eagle, a luxurious retreat nestled in the heart of the majestic Himalayas. Experience unparalleled comfort, breathtaking views, and warm hospitality in our exquisite mountain sanctuary."
          />

          <p className="text-[0.92rem] leading-[1.8] font-light text-(--charcoal) mt-4 mb-8 max-w-130">
            Hotel Golden Eagle located in upper dolpa of nepal, is a luxurious
            haven nestled amidst the breathtaking Himalayan mountains. With its
            stunning architecture and world-class amenities, it offers an
            unforgettable experience for travelers seeking tranquility and
            adventure in one of the most remote and beautiful regions of the
            world.
          </p>

          <Button href="/about" variant="primary">
            About us
          </Button>
        </RevealWrapper>
      </div>
    </section>
  );
}
