"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useRef, useState } from "react";

export function HeroSection() {
  const scrollCueRef = useRef<HTMLButtonElement | null>(null);
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);

  const syncScrollState = useEffectEvent(() => {
    setHasStartedScrolling(window.scrollY > 24);
  });

  useEffect(() => {
    window.addEventListener("scroll", syncScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncScrollState);
    };
  }, []);

  const handleScrollCueClick = () => {
    const currentSection = scrollCueRef.current?.closest("section");
    const nextSection = currentSection?.nextElementSibling;

    if (nextSection instanceof HTMLElement) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="landing-section relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/100" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(91,192,235,0.16),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(157,125,255,0.14),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(244,201,93,0.08),transparent_22%)]" />
      <div className="landing-shell">
        <div className="landing-stage relative justify-center gap-8 py-8 max-sm:gap-6 max-sm:py-6 [@media(max-height:840px)]:gap-5 [@media(max-height:840px)]:py-5">
          <header className="flex items-center justify-between max-sm:items-start [@media(max-height:840px)]:items-start">
            {/* <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-cyan-200/50 sm:h-12 sm:w-12">
                <Image
                  src="/images/logo_oficial.webp"
                  alt=""
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div>
                <p className="font-heading text-[length:var(--text-eyebrow)] tracking-[0.32em] text-text-secondary">
                  MNEMOS MUNDI
                </p>
                <p className="text-[length:var(--text-caption)] tracking-[0.22em] text-text-muted">
                  IMMERSIVE LEARNING INFRASTRUCTURE
                </p>
              </div>
            </div> */}
          </header>

          <div className="mx-auto flex w-full max-w-[58rem] flex-1 items-center justify-center">
            <div className="-translate-y-6 pt-[18vh] text-center sm:-translate-y-8 sm:pt-0 lg:-translate-y-10 [@media(max-height:840px)]:-translate-y-4">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[length:var(--text-body-sm)] text-text-secondary sm:mb-5 sm:px-4 sm:py-2 [@media(max-height:840px)]:mb-3 [@media(max-height:840px)]:px-3 [@media(max-height:840px)]:py-1">
                Para escolas, cursinhos e universidades
              </div>

              <div className="mb-6 space-y-5 max-sm:space-y-4 sm:mb-5 [@media(max-height:840px)]:mb-4 [@media(max-height:840px)]:space-y-3">
                <h1 className="mx-auto max-w-[12ch] font-alt-heading text-[length:var(--text-mobile-hero)] font-light leading-[0.96] tracking-[-0.05em] text-text-primary lg:text-[length:var(--text-display)] lg:leading-[0.9] [@media(max-height:840px)]:text-[length:var(--text-mobile-h1)]">
                  Transformamos conhecimento em mundos exploráveis.
                </h1>
                <p className="mx-auto max-w-[42rem] text-[length:var(--text-body-lg)] leading-[1.55] text-text-secondary max-sm:text-[length:var(--text-body)] max-sm:leading-[1.45] [@media(max-height:840px)]:text-[length:var(--text-body)] [@media(max-height:840px)]:leading-[1.45]">
                  Uma nova infraestrutura para instituições criarem experiências
                  educacionais imersivas, progressivas e memoráveis.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-2.5 sm:flex-row sm:gap-3 [@media(max-height:840px)]:gap-2">
                <Link
                  href="/mnemos-mundi"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#5bc0eb] bg-[#5bc0eb14] px-5 text-[length:var(--text-body-sm)] font-semibold text-text-primary sm:min-h-14 sm:px-6 sm:text-[length:var(--text-body)] max-sm:w-full [@media(max-height:840px)]:min-h-11 [@media(max-height:840px)]:px-4 [@media(max-height:840px)]:text-[length:var(--text-caption)]"
                >
                  Explorar um mundo
                </Link>
                <a
                  href="#como-funciona"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 text-[length:var(--text-body-sm)] font-medium text-text-secondary sm:min-h-14 sm:px-6 sm:text-[length:var(--text-body)] max-sm:w-full [@media(max-height:840px)]:min-h-11 [@media(max-height:840px)]:px-4 [@media(max-height:840px)]:text-[length:var(--text-caption)]"
                >
                  Ver como funciona
                </a>
              </div>
            </div>
          </div>

          <button
            ref={scrollCueRef}
            type="button"
            aria-label="Rolar para a próxima descoberta"
            onClick={handleScrollCueClick}
            data-scrolled={hasStartedScrolling}
            className="scroll-indicator absolute bottom-6 left-1/2 inline-flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-text-secondary transition-colors duration-300 hover:border-[#5bc0eb]/60 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5bc0eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] max-sm:bottom-4 max-sm:h-14 max-sm:w-14 [@media(max-height:840px)]:bottom-3"
          >
            <span className="sr-only">Role para a próxima descoberta</span>
            <span className="relative flex h-10 w-6 items-start justify-center rounded-full border-2 border-current">
              <span className="scroll-indicator__wheel mt-1.5 h-2.5 w-1 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
