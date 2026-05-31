type SectionSevenProps = {
  className?: string;
};

const impactMetrics = [
  {
    value: "10.000+",
    description: "alunos explorando\nnos primeiros 12\nmeses",
    accent: "#35d6ff",
  },
  {
    value: "25+",
    description: "mundos educacionais\ne salas imersivas",
    accent: "#9d7dff",
  },
  {
    value: "100+",
    description: "conquistas verificaveis\ne badges unicas",
    accent: "#f4c95d",
  },
  {
    value: "1",
    description: "identidade digital\npara toda a vida.",
    accent: "#35d6ff",
  },
] as const;

const impactPillars = [
  { label: "Progressao verificavel", accent: "#35d6ff" },
  { label: "Pertencimento real", accent: "#35d6ff" },
  { label: "Reputacao portatil", accent: "#9d7dff" },
  { label: "Credibilidade aberta", accent: "#35d6ff" },
  { label: "Legado vivo", accent: "#35d6ff" },
] as const;

export function SectionSeven({ className }: SectionSevenProps) {
  return (
    <section
      aria-label="Sessao 7"
      className={[
        "relative min-h-[100svh] overflow-hidden bg-background text-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="page-shell section-shell mx-auto flex w-full flex-col">
        <div className="page-shell--wide mx-auto flex w-full max-w-[1760px] flex-col items-center gap-6 sm:gap-8 lg:gap-10">
          <div className="flex w-full max-w-[390px] items-center justify-center">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span
                className="h-[18px] w-[18px] rounded-full border border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
                aria-hidden="true"
              />
              <p className="text-[length:var(--text-eyebrow)] font-medium tracking-[0.22em] text-[#5bc0eb] sm:tracking-[0.32em]">
                IMPACTO
              </p>
              <span
                className="hidden h-px max-w-40 flex-1 bg-gradient-to-r from-[#2ad0ff] via-[#2ad0ff] to-transparent sm:block"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <h2 className="max-w-[14ch] text-center font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.94] tracking-[-0.04em] text-text-primary sm:max-w-[18ch] lg:max-w-[22ch] lg:text-[length:var(--text-h1)]">
              O futuro da{" "}
              <span className="bg-gradient-to-r from-[#9d7dff] to-[#35d6ff] bg-clip-text text-transparent">
                educação
              </span>{" "}
              nao cabe em uma{" "}
              <span className="bg-gradient-to-r from-[#f4c95d] to-[#9d7dff] bg-clip-text text-transparent">
                sala.
              </span>
            </h2>
          </div>

          <div className="flex w-full max-w-[810px] items-center justify-center px-2">
            <p className="text-center text-[length:var(--text-body)] font-light leading-[1.5] text-text-secondary sm:text-[length:var(--text-body-lg)] lg:text-[length:var(--text-h4)]">
              Estamos construindo um{" "}
              <span className="text-[#35d6ff]">
                futuro digital de verdade
              </span>{" "}
              para todos.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-4 lg:w-[72%] lg:grid-cols-4 lg:gap-0">
            {impactMetrics.map((metric, index) => (
              <div
                key={metric.value}
                className={[
                  "flex min-h-[132px] items-center gap-4 rounded-[22px] border border-[#2ad0ff]/12 bg-[#101624]/45 px-5 py-5 sm:px-6 lg:min-h-[164px] lg:rounded-none lg:border-y-0 lg:border-l-0 lg:bg-transparent lg:py-0",
                  index < impactMetrics.length - 1
                    ? "lg:border-r lg:border-[#2ad0ff]/15"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span
                  className="h-[44px] w-[44px] shrink-0 rounded-full border shadow-[0_0_14px_currentColor]"
                  style={{ color: metric.accent, borderColor: metric.accent }}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-1.5">
                  <strong className="font-alt-heading text-[length:var(--text-mobile-h2)] font-light leading-none text-text-primary sm:text-[length:var(--text-h2)]">
                    {metric.value}
                  </strong>

                  <p className="whitespace-pre-line text-[length:var(--text-body)] font-light leading-[1.35] text-text-secondary lg:text-[length:var(--text-body-lg)]">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 flex w-full items-center justify-center lg:mt-4">
            <div className="w-full max-w-[90%] rounded-[24px] bg-[#101624]/80 px-5 py-6 sm:px-8 lg:px-10">
              <p className="text-center font-alt-heading text-[length:var(--text-mobile-h2)] font-light leading-[1.05] tracking-[0.02em] text-text-secondary sm:text-[length:var(--text-h3)] lg:text-[length:var(--text-h2)]">
                Deixar um{" "}
                <span className="text-[#9d7dff] drop-shadow-[0_0_12px_rgba(157,125,255,0.65)]">
                  legado
                </span>{" "}
                — o conhecimento{" "}
                <span className="text-[#35d6ff] drop-shadow-[0_0_12px_rgba(53,214,255,0.65)]">
                  pertence ao aluno
                </span>
                .
              </p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="grid w-full max-w-[90%] grid-cols-2 gap-3 rounded-[28px] bg-[#101624]/80 px-5 py-5 sm:px-6 lg:grid-cols-5 lg:gap-0 lg:rounded-full lg:px-10">
              {impactPillars.map((pillar, index) => (
                <div
                  key={pillar.label}
                  className={[
                    "flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-[#d9e2ec]/10 px-4 py-3 lg:min-h-0 lg:rounded-none lg:border-y-0 lg:border-l-0 lg:px-0 lg:py-0",
                    index < impactPillars.length - 1
                      ? "lg:border-r lg:border-[#d9e2ec]/10"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span
                    className="h-[28px] w-[28px] rounded-full border shadow-[0_0_10px_currentColor]"
                    style={{ color: pillar.accent, borderColor: pillar.accent }}
                    aria-hidden="true"
                  />

                  <p className="text-center text-[length:var(--text-body)] font-light leading-[1.2] text-text-secondary lg:text-[length:var(--text-body-lg)]">
                    {pillar.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
