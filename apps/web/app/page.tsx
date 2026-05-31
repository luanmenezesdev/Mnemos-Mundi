import Image from "next/image";
import { SectionFive } from "../components/sections/section-five";
import { SectionFour } from "../components/sections/section-four";
import { SectionThree } from "../components/sections/section-three";
import { SectionTwo } from "../components/sections/section-two";
import SectionSix from "@/components/sections/section-six";
import { SectionSeven } from "@/components/sections/section-seven";
import { SectionEight } from "@/components/sections/section-eight";

export default function Home() {
  return (
    <main>
      <section
        aria-label="Hero"
        className="relative min-h-[100svh] overflow-hidden bg-background text-foreground"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #040812 0%, #050a16 35%, #071327 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[min(980px,62vw)] sm:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,5,13,0.85) 0%, rgba(2,5,13,0.67) 52%, rgba(2,5,13,0) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute left-[-140px] top-[120px] h-[420px] w-[420px] rounded-full blur-[48px] sm:left-[-220px] sm:top-[160px] sm:h-[780px] sm:w-[780px] sm:blur-[54px]"
          style={{
            background:
              "radial-gradient(circle, rgba(87,200,255,0.10) 0%, rgba(32,74,143,0.08) 50%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute right-[-140px] top-[-90px] h-[360px] w-[360px] rounded-full blur-[44px] sm:right-[-160px] sm:top-[-120px] sm:h-[820px] sm:w-[820px] sm:blur-[62px]"
          style={{
            background:
              "radial-gradient(circle, rgba(111,231,255,0.12) 0%, rgba(45,111,255,0.09) 54%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute bottom-[-140px] right-[-220px] hidden h-[760px] w-[980px] rounded-full blur-[70px] md:block"
          style={{
            background:
              "radial-gradient(circle, rgba(45,111,255,0.18) 0%, rgba(29,79,155,0.12) 55%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute right-[50px] top-[130px] hidden h-[760px] w-[760px] rounded-full blur-[54px] lg:block"
          style={{
            background:
              "radial-gradient(circle, rgba(122,215,255,0.15) 0%, rgba(62,132,214,0.10) 62%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="page-shell relative z-10 flex min-h-[100svh] flex-col px-4 py-6 sm:px-6 sm:py-8 md:px-10 lg:px-16 lg:py-12">
          <header className="flex items-start">
            <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-4 lg:gap-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-200/50 shadow-[0_0_24px_rgba(91,192,235,0.25)] lg:h-16 lg:w-16">
                <Image
                  src="/images/logo_oficial.png"
                  alt="Logo Mnemos Mundi"
                  fill
                  className="scale-[1.22] object-cover object-center"
                  priority
                />
              </div>

              <div className="min-w-0 space-y-1.5">
                <p className="font-heading text-[length:var(--text-eyebrow)] font-medium tracking-[0.28em] text-text-secondary sm:tracking-[0.38em] lg:text-[length:var(--text-body-lg)] lg:tracking-[0.45em]">
                  MNEMOS MUNDI
                </p>
                <p className="text-[length:var(--text-caption)] tracking-[0.18em] text-text-muted sm:tracking-[0.24em] lg:tracking-[0.4em]">
                  EXPLORE. APRENDA. TRANSFORME.
                </p>
              </div>
            </div>
          </header>

          <div className="flex flex-1 flex-col justify-center gap-10 sm:gap-12">
            <div className="grid w-full flex-1 items-center gap-10 lg:grid-cols-[minmax(0,48rem)_minmax(0,1fr)] lg:gap-16">
              <article className="flex min-h-0 flex-col justify-center py-4 lg:py-8">
                <div className="max-w-[48rem]">
                  <h1 className="max-w-[14ch] text-left font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.94] tracking-[-0.04em] text-text-primary sm:max-w-[18ch] lg:max-w-[22ch] lg:text-[length:var(--text-h1)]">
                    E se aprender fosse uma
                    <span className=" bg-gradient-to-r from-[#5bc0eb] to-[#9d7dff] bg-clip-text text-transparent [text-shadow:0_0_20px_rgba(91,192,235,0.18)]"> aventura </span>
                    que nunca termina?
                  </h1>

                  <p className="mt-6 max-w-[34rem] text-[length:var(--text-body)] leading-[1.5] text-text-secondary sm:mt-8 sm:text-[length:var(--text-body-lg)]">
                    Explore mundos. Conquiste conhecimento.
                    <br className="hidden sm:block" />
                    Deixe seu legado no Mnemos Mundi.
                  </p>
                </div>

                <div className="mt-8 sm:mt-10 lg:mt-14">
                  <button
                    type="button"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-[#50b4ff] bg-white/[0.08] px-5 py-3 text-[length:var(--text-body)] font-semibold text-text-primary shadow-[0_0_40px_rgba(80,180,255,0.22)] backdrop-blur-xl transition-colors hover:bg-white/[0.12] sm:min-h-[60px] sm:w-auto"
                  >
                    <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#69e6ff] bg-[#071421] shadow-[0_0_20px_rgba(105,230,255,0.35)]" />
                    <span className="font-heading text-[length:var(--text-body)] sm:text-[length:var(--text-body-lg)]">
                      Entrar no Mnemos Mundi
                    </span>
                  </button>
                </div>
              </article>
            </div>

            <div className="mt-8 flex w-full justify-center lg:mt-0">
              <div className="scroll-indicator flex w-fit self-center flex-col items-center justify-center gap-2 text-text-secondary lg:self-end">
                <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/70 p-1">
                  <span className="scroll-indicator__wheel h-2 w-2 rounded-full bg-white/80" />
                </div>
                <span className="text-[length:var(--text-body-sm)] font-medium lg:text-[length:var(--text-body)]">
                  Role para descobrir
                </span>
                <span
                  className="scroll-indicator__arrow h-2 w-2 border-b border-r border-white/70"
                  style={{ transform: "rotate(45deg)" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background:
              "radial-gradient(120% 110% at 50% 40%, rgba(0,0,0,0) 56%, rgba(2,6,17,0.32) 100%)",
          }}
          aria-hidden="true"
        />
      </section>

      <SectionTwo />
      <SectionThree />
      <SectionFour className="section-four" />
      <SectionFive />
      <SectionSix className="section-six" />
      <SectionSeven />
      <SectionEight />
    </main>
  );
}
