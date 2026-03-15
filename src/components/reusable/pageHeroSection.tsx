interface PageHeroProps {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleLine2Gold?: boolean;
  image: string;
  imagePosition?: string;
  height?: string;
}

export default function PageHero({
  eyebrow,
  titleLine1,
  titleLine2,
  titleLine2Gold = true,
  image,
  imagePosition = "center",
  height = "h-[70vh] min-h-[500px]",
}: PageHeroProps) {
  return (
    <section className={`relative ${height} flex items-end overflow-hidden`}>
      {/* Background */}
      <div
        className="absolute inset-0 animate-hero-zoom"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: imagePosition,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-brightness-75" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-[6vw] pb-16 max-w-175">
        <p className="text-[0.68rem] tracking-[0.35em] uppercase text-(--gold) mb-4 animate-fade-up-1">
          ✦ {eyebrow}
        </p>
        <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-normal text-white leading-[1.05] animate-fade-up-2">
          {titleLine1}
          {titleLine2 && (
            <>
              <br />
              {titleLine2Gold ? (
                <em className="italic text-(--gold)">{titleLine2}</em>
              ) : (
                titleLine2
              )}
            </>
          )}
        </h1>
      </div>
    </section>
  );
}
