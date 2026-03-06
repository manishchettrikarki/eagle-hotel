"use client";

import { useEffect, useRef, useState } from "react";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const delayClass: Record<number, string> = {
  0: "",
  1: "reveal-delay-1",
  2: "reveal-delay-2",
  3: "reveal-delay-3",
};

export default function RevealWrapper({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [
    "reveal",
    visible ? "visible" : "",
    delayClass[delay],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // @ts-expect-error – dynamic tag
  return <Tag ref={ref} className={classes}>{children}</Tag>;
}
