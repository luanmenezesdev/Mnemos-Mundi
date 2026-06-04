const problemPoints = [
  "Conteúdo demais. Experiência de menos.",
  "O aluno fecha a aula e o conhecimento some com ela.",
  "Pouco senso de descoberta. Pouco senso de pertencimento.",
  "A jornada vira obrigação antes de virar curiosidade.",
];

export function ProblemSection() {
  return (
    <section className="landing-section relative">
      <img
        src="/images/the_problem.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent" />
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
                  O problema não é acesso à informação. É transformar conhecimento em algo vivo, memorável e contínuo para quem aprende.
                </p>
              </div>

              <div className="landing-panel mt-5 max-w-[40rem] p-4 sm:mt-0 sm:p-5 md:p-6 [@media(max-height:840px)]:p-3.5">
                <p className="mb-2.5 text-[length:var(--text-caption)] uppercase tracking-[0.22em] text-text-muted sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:mb-2 [@media(max-height:840px)]:text-[length:var(--text-caption)]">
                  Consequência
                </p>
                <p className="max-w-[34rem] text-[length:var(--text-body-lg)] leading-[1.55] text-text-secondary max-sm:text-[length:var(--text-body)] max-sm:leading-[1.45] [@media(max-height:840px)]:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.4]">
                  Instituições continuam com poucas ferramentas para criar jornadas em que o aluno explora, pertence e carrega o aprendizado para além da aula.
                </p>
              </div>
            </div>

            <div className="landing-panel p-3 sm:p-4.5 md:p-5 [@media(max-height:840px)]:p-3">
              <ul className="grid gap-3 p-0 [@media(max-height:840px)]:gap-2">
                {problemPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-[22px] border border-white/8 bg-white/[0.04] px-4 py-4 text-[length:var(--text-body-sm)] leading-[1.4] text-text-secondary sm:px-4 sm:py-4 md:px-5 md:py-5 sm:text-[length:var(--text-body)] sm:leading-[1.5] [@media(max-height:840px)]:rounded-[18px] [@media(max-height:840px)]:px-3.5 [@media(max-height:840px)]:py-3 [@media(max-height:840px)]:text-[length:var(--text-caption)] [@media(max-height:840px)]:leading-[1.35]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[52rem] flex-col items-center gap-3 pt-1 text-center sm:gap-4 sm:pt-2 md:gap-5 [@media(max-height:840px)]:gap-3">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
            <p className="mt-6 max-w-[340px] font-alt-heading text-center text-[28px] font-light leading-[0.95] tracking-[-0.03em] text-text-primary sm:mt-2 sm:max-w-[24ch] sm:text-[42px] md:text-[44px] lg:max-w-[26ch] lg:text-[56px] [@media(max-height:840px)]:mt-4 [@media(max-height:840px)]:text-[30px]">
              O conhecimento não deveria desaparecer quando a aula termina.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
