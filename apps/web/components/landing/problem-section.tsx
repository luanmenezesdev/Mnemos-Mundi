const problemPoints = [
  {
    id: "content",
    icon: "/images/problem/content-icon.webp",
    label: "01",
    text: "Conteúdo demais. Experiência de menos.",
    mobileText: "Conteúdo demais. Experiência de menos.",
  },
  {
    id: "disappear",
    icon: "/images/problem/disappear-icon.webp",
    label: "02",
    text: "O aluno fecha a aula e o conhecimento some com ela.",
    mobileText: "A aula termina. O conhecimento some.",
  },
  {
    id: "discovery",
    icon: "/images/problem/discovery-icon.webp",
    label: "03",
    text: "Pouco senso de descoberta. Pouco senso de pertencimento.",
    mobileText: "Pouca descoberta. Pouco pertencimento.",
  },
  {
    id: "obligation",
    icon: "/images/problem/obligation-icon.webp",
    label: "04",
    text: "A jornada vira obrigação antes de virar curiosidade.",
    mobileText: "A jornada vira obrigação antes de curiosidade.",
  },
];

export function ProblemSection() {
  return (
    <section className="landing-section relative">
      <img
        src="/images/problem/the_problem.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(91,192,235,0.16),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(157,125,255,0.14),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(244,201,93,0.08),transparent_22%)]" />
      <div className="landing-shell">
        <div className="landing-stage justify-center gap-5 py-5 max-sm:justify-start max-sm:gap-4 max-sm:py-4 sm:gap-8 sm:py-6 lg:gap-12 lg:py-8 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="grid items-center gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(22rem,26rem)] sm:gap-5 xl:gap-8 [@media(max-height:840px)]:gap-4">
            <div className="space-y-4 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
              <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
                O PROBLEMA
              </p>
              <div className="max-w-[46rem] space-y-4 max-sm:space-y-2.5 [@media(max-height:840px)]:space-y-2.5">
                <h2 className="max-w-[13ch] font-alt-heading text-[34px] font-light leading-[0.9] tracking-[-0.04em] text-text-primary sm:text-[length:var(--text-mobile-section)] sm:leading-[0.95] lg:text-[length:var(--text-section)]">
                  A educação ainda entrega conteúdo. Raramente entrega presença.
                </h2>
                <p className="mt-4 max-w-[39rem] text-[15px] leading-[1.45] text-text-secondary sm:mt-0 sm:text-[length:var(--text-body)] sm:leading-[1.5] lg:text-[length:var(--text-body-lg)] lg:leading-[1.6] [@media(max-height:840px)]:text-[length:var(--text-body)] [@media(max-height:840px)]:leading-[1.45]">
                  O problema não é acesso à informação. É transformar
                  conhecimento em algo vivo, memorável e contínuo para quem
                  aprende.
                </p>
              </div>

              <div className="landing-panel relative mt-5 max-w-[40rem] overflow-hidden p-4 sm:mt-0 sm:p-5 md:p-6 [@media(max-height:840px)]:p-3.5">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#5bc0eb]/[0.08] via-transparent to-transparent" />
                <div className="pointer-events-none absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#5bc0eb]/10 blur-3xl" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="mt-1 hidden size-10 shrink-0 items-center justify-center rounded-xl border border-[#5bc0eb]/20 bg-[#5bc0eb]/10 text-[11px] font-medium tracking-[0.18em] text-[#5bc0eb] sm:flex">
                    !
                  </div>

                  <div>
                    <p className="mb-2.5 text-[length:var(--text-caption)] uppercase tracking-[0.22em] text-[#5bc0eb]/80 sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:mb-2 [@media(max-height:840px)]:text-[length:var(--text-caption)]">
                      Diagnóstico central
                    </p>

                    <p className="max-w-[34rem] text-[length:var(--text-body)] leading-[1.45] text-text-secondary sm:text-[length:var(--text-body-lg)] sm:leading-[1.55] [@media(max-height:840px)]:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.4]">
                      <span className="sm:hidden">
                        Instituições ainda têm poucas ferramentas para
                        transformar conteúdo em jornadas exploráveis, memoráveis
                        e contínuas.
                      </span>

                      <span className="hidden sm:inline">
                        Instituições ainda têm poucas ferramentas para
                        transformar conteúdo em jornadas onde o aluno explora,
                        pertence e continua aprendendo além da aula.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="landing-panel p-3 sm:p-4.5 md:p-5 [@media(max-height:840px)]:p-3">
              <p className="mb-3 px-1 text-[length:var(--text-caption)] uppercase tracking-[0.24em] text-[#5bc0eb]/80">
                Sinais do problema
              </p>

              <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-1 p-0 [@media(max-height:840px)]:gap-2">
                {problemPoints.map((point) => (
                  <li
                    key={point.id}
                    className="group relative overflow-hidden rounded-[22px] border border-white/8 bg-white/[0.04] p-3.5 text-text-secondary transition duration-300 hover:border-[#5bc0eb]/35 hover:bg-[#5bc0eb]/[0.06] sm:p-4 md:p-4.5 [@media(max-height:840px)]:rounded-[18px] [@media(max-height:840px)]:p-3"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#5bc0eb]/0 via-[#5bc0eb]/[0.05] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#5bc0eb]/15 bg-black/30 sm:size-12 xl:size-16">
                        <img
                          src={point.icon}
                          alt=""
                          className="h-full w-full object-cover opacity-85"
                        />
                      </div>

                      <div>
                        <p className="mb-1 text-[9px] font-medium tracking-[0.24em] text-[#5bc0eb]/70">
                          {point.label}
                        </p>

                        <p className="text-[12px] leading-[1.35] text-text-secondary sm:hidden">
                          {point.mobileText}
                        </p>

                        <p className="hidden text-[13px] leading-[1.35] text-text-secondary sm:block md:text-[13px] xl:text-[length:var(--text-body)]">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[52rem] flex-col items-center gap-3 pt-1 text-center sm:gap-4 sm:pt-2 md:gap-5 [@media(max-height:840px)]:gap-3">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
            <p className="mt-3 max-w-[20ch] font-alt-heading text-center text-[24px] font-light leading-[0.95] tracking-[-0.03em] text-text-primary sm:mt-4 sm:max-w-[28ch] sm:text-[30px] md:text-[36px] xl:text-[56px]">
              O conhecimento não deveria desaparecer quando a aula termina.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
