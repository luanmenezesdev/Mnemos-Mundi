import Image from "next/image";
import { SectionTwo } from "../components/sections/section-two";

export default function Home() {
  return (
    <main>
      <section
        aria-label="Hero"
        className="relative min-h-[100svh] overflow-hidden bg-[#0e1116] text-white"
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
          className="pointer-events-none absolute inset-y-0 left-0 w-[min(980px,62vw)]"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,5,13,0.85) 0%, rgba(2,5,13,0.67) 52%, rgba(2,5,13,0) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute left-[-220px] top-[160px] h-[780px] w-[780px] rounded-full blur-[54px]"
          style={{
            background:
              "radial-gradient(circle, rgba(87,200,255,0.10) 0%, rgba(32,74,143,0.08) 50%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute right-[-160px] top-[-120px] h-[820px] w-[820px] rounded-full blur-[62px]"
          style={{
            background:
              "radial-gradient(circle, rgba(111,231,255,0.12) 0%, rgba(45,111,255,0.09) 54%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute right-[-280px] bottom-[-60px] h-[760px] w-[980px] rounded-full blur-[70px]"
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

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1920px] flex-col px-6 py-8 sm:px-10 md:px-16 lg:px-[100px] lg:py-[70px]">
          <header className="flex min-h-[100px] items-start">
            <div className="flex items-center gap-4 pt-4 lg:gap-[26px]">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-200/50 shadow-[0_0_24px_rgba(91,192,235,0.25)] lg:h-14 lg:w-14">
                <Image
                  src="/images/logo_oficial.png"
                  alt="Logo Mnemos Mundi"
                  fill
                  className="scale-[1.28] object-cover object-center"
                  priority
                />
              </div>

              <div className="space-y-1.5">
                <p className="font-[var(--font-space-grotesk)] text-sm tracking-[0.45em] text-slate-100 lg:text-[18px]">
                  MNEMOS MUNDI
                </p>
                <p className="text-[11px] tracking-[0.3em] text-slate-300 lg:text-xs lg:tracking-[0.4em]">
                  EXPLORE. APRENDA. TRANSFORME.
                </p>
              </div>
            </div>
          </header>

          <div className="flex flex-1 flex-col justify-between gap-12 lg:gap-0">
            <div className="flex flex-1 items-center">
              <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[800px_minmax(0,1fr)] lg:gap-[72px]">
                <article className="flex min-h-[420px] flex-col justify-start lg:pt-[40px]">
                  <div className="max-w-[800px]">
                    <h1 className="font-[var(--font-space-grotesk)] text-5xl leading-[0.92] font-light tracking-[-0.035em] text-[#f8fafc] sm:text-6xl lg:text-[76px]">
                      <span className="block">E se aprender</span>
                      <span className="block">fosse uma</span>
                      <span className="block bg-gradient-to-r from-[#5bc0eb] to-[#9d7dff] bg-clip-text text-transparent [text-shadow:0_0_20px_rgba(91,192,235,0.18)]">
                        aventura
                      </span>
                      <span className="block">que nunca termina?</span>
                    </h1>

                    <p className="mt-8 max-w-[550px] text-base leading-[1.24] text-[#d9e2ec] sm:text-lg lg:text-[21px]">
                      Explore mundos. Conquiste conhecimento.
                      <br className="hidden sm:block" />
                      Deixe seu legado no Mnemos Mundi.
                    </p>
                  </div>

                  <div className="mt-10 lg:mt-[174px]">
                    <button
                      type="button"
                      className="inline-flex h-[60px] items-center gap-3 rounded-full border border-[#50b4ff] bg-white/[0.08] px-5 text-lg font-semibold text-slate-50 shadow-[0_0_40px_rgba(80,180,255,0.22)] backdrop-blur-xl transition-colors hover:bg-white/[0.12]"
                    >
                      <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#69e6ff] bg-[#071421] shadow-[0_0_20px_rgba(105,230,255,0.35)]" />
                      <span className="font-[var(--font-space-grotesk)] text-base sm:text-lg lg:text-[20px]">
                        Entrar no Mnemos Mundi
                      </span>
                    </button>
                  </div>
                </article>

                <div className="relative hidden min-h-[420px] lg:block">
                  <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/[0.02]" />
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center lg:justify-end">
              <div className="scroll-indicator flex w-fit flex-col items-center justify-center gap-2 text-[#d9e2ec] lg:mr-[742px] lg:min-h-[104px] lg:w-[236px]">
                <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/70 p-1">
                  <span className="scroll-indicator__wheel h-2 w-2 rounded-full bg-white/80" />
                </div>
                <span className="text-sm font-medium lg:text-base">Role para descobrir</span>
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
    </main>
  );
}
