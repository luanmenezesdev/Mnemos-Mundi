"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollRevealSection({
  children,
  className,
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasRevealSupport, setHasRevealSupport] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      return;
    }

    const viewportHeight = window.innerHeight || 0;
    const revealTrigger = viewportHeight * 0.9;
    const { top } = node.getBoundingClientRect();

    if (top <= revealTrigger) {
      setIsVisible(true);
      return;
    }

    setHasRevealSupport(true);
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          setHasRevealSupport(false);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "landing-reveal-section",
        hasRevealSupport ? "landing-reveal-section--pending" : "",
        isVisible ? "landing-reveal-section--visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
