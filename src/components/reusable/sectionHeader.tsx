interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  body,
  light = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <p
        className={`text-[0.65rem] tracking-[0.35em] uppercase mb-3 ${
          light ? "text-white/40" : "text-(--gold)"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.1] mb-4 ${
          light ? "text-white" : "text-(--navy)"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`text-[0.95rem] leading-[1.8] font-light max-w-135 ${
            light ? "text-white/65" : "text-(--charcoal)"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
