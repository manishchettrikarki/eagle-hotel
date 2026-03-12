"use client";

import { forwardRef, JSX, useEffect, useState } from "react";

// Delay classes for animation
const delayClass: Record<number, string> = {
  0: "",
  1: "reveal-delay-1",
  2: "reveal-delay-2",
  3: "reveal-delay-3",
};

// Props type for RevealWrapper
export interface RevealWrapperProps<
  T extends keyof JSX.IntrinsicElements = "div",
> extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3;
  as?: T;
}

// Production-ready RevealWrapper with forwardRef
const RevealWrapper = forwardRef<HTMLElement, RevealWrapperProps>(
  ({ children, delay = 0, className = "", as: Tag = "div", ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const el = ref && "current" in ref ? (ref as any).current : null;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.12 },
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [ref]);

    // Build classes as string without clsx
    const classes = [
      "reveal",
      visible ? "visible" : "",
      delayClass[delay],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Tag ref={ref as any} className={classes} {...props}>
        {children}
      </Tag>
    );
  },
);

RevealWrapper.displayName = "RevealWrapper";

export default RevealWrapper;
