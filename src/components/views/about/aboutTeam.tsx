import Image from "next/image";
import RevealWrapper from "@/components/reusable/revealWrapper";
import { ABOUTPAGE_TEAM } from "@/utils/constants";

export default function AboutTeam() {
  return (
    <section className="bg-(--mist) py-24 md:py-32 px-6 md:px-[6vw]">
      <div className="max-w-350 mx-auto">
        <RevealWrapper className="mb-14">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-(--gold) mb-3">
            The people behind the lodge
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-(--navy) font-normal leading-[1.1]">
            Meet our team
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUTPAGE_TEAM.map((member, i) => (
            <RevealWrapper
              key={member.name}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group"
            >
              <div className="overflow-hidden mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="w-full h-75 object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-(--gold) mb-1">
                {member.role}
              </p>
              <h3 className="font-display text-(--navy) text-[1.05rem] font-normal mb-2">
                {member.name}
              </h3>
              <p className="text-[0.82rem] text-(--charcoal) leading-[1.7] font-light">
                {member.bio}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
