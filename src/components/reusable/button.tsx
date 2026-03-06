import Link from "next/link";

type Variant = "primary" | "outline" | "outline-dark" | "navy" | "gold";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--gold)] text-[var(--navy)] hover:bg-[#b8904f] border-transparent",
  outline:
    "bg-transparent text-white border border-white/50 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10",
  "outline-dark":
    "bg-transparent text-[var(--navy)] border border-[var(--navy)]/30 hover:border-[var(--navy)]",
  navy:
    "bg-[var(--navy)] text-[var(--gold)] hover:bg-[#001f45] border-transparent",
  gold:
    "bg-[var(--gold)] text-[var(--navy)] hover:bg-[#b8904f] border-transparent",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-block px-8 py-4 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:-translate-y-[1px] " +
    variantClasses[variant];

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
}
