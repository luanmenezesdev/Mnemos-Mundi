type SectionFiveProps = {
  className?: string;
};

function SmartContractsCard() {
  return (
    <article
      className="
  relative flex flex-col items-start gap-3 overflow-hidden
  rounded-[28px]
  border border-[#7ecbff80]
  px-4 py-5
  backdrop-blur-[24px]
  before:pointer-events-none before:absolute before:inset-0 before:rounded-[28px]
  lg:flex-row lg:items-center lg:gap-5 lg:px-5
"
    >
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(173,232,255,0.18),transparent_42%),radial-gradient(circle_at_80%_100%,rgba(77,147,255,0.14),transparent_48%)]"
        aria-hidden="true"
      />

      {/* Circle — smaller on mobile/tablet, full size only on lg+ */}
      <div className="relative h-16 w-16 shrink-0 rounded-full border border-[#bfefff8c] bg-[radial-gradient(circle_at_center,rgba(32,75,122,0.8)_0%,rgba(20,49,95,0.72)_55%,rgba(11,24,51,0.9)_100%)] shadow-[0_0_18px_rgba(56,182,255,0.42),0_0_10px_rgba(166,230,255,0.22)] sm:h-20 sm:w-20 lg:h-36 lg:w-36" />

      <div className="relative z-10 w-full min-w-0 space-y-2 lg:flex-1">
        <h4 className="font-heading text-[length:var(--text-body-lg)] font-semibold tracking-[0.035em] text-[#5bc0eb]">
          1. SMART CONTRACTS
        </h4>

        <p className="text-[length:var(--text-body)] leading-[1.4] text-text-secondary">
          Conquistas registradas de forma permanente e verificavel.
        </p>
        <p className="text-[length:var(--text-body)] leading-[1.4] text-text-secondary">
          Emissao automatica e segura de badges e certificados.
        </p>
      </div>
    </article>
  );
}

export function SectionFive({ className }: SectionFiveProps) {
  return (
    <section
      aria-label="Sessao 5"
      className={[
        "relative min-h-[100svh] bg-background text-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="page-shell section-shell">
        <div className="page-shell--wide mx-auto flex w-full flex-col gap-8 lg:gap-10">
          {/* Header row */}
          <div className="w-full">
            <div className="flex w-full max-w-[1080px] flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span
                  className="h-[18px] w-[18px] rounded-full border-[1.5px] border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
                  aria-hidden="true"
                />

                <p className="text-[length:var(--text-eyebrow)] font-medium tracking-[0.22em] text-[#5bc0eb] sm:tracking-[0.32em]">
                  WEB3 NA PRÁTICA
                </p>

                <span
                  className="hidden h-px max-w-32 flex-1 bg-gradient-to-r from-[#2ad0ff] to-transparent shadow-[0_0_6px_rgba(42,208,255,0.4)] sm:block"
                  aria-hidden="true"
                />
              </div>

              <div className="space-y-1 font-heading text-text-primary">
                <h2 className="text-[length:var(--text-mobile-h2)] font-light leading-[0.94] tracking-[-0.04em] sm:text-[length:var(--text-h2)] lg:text-[length:var(--text-h2)]">
                  Tecnologia que transforma
                </h2>

                <h3 className="text-[length:var(--text-mobile-h2)] font-light leading-[0.94] tracking-[-0.04em] sm:text-[length:var(--text-h2)] lg:text-[length:var(--text-h2)]">
                  <span>aprendizado em </span>
                  <span className="bg-gradient-to-r from-[#ffb84d] to-[#ffd978] bg-clip-text text-transparent">
                    legado.
                  </span>
                </h3>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <span
                  className=" h-16 w-[2px] shrink-0 bg-gradient-to-b from-[#31c8ff00] via-[#31c8ff] to-[#31c8ff00] shadow-[0_0_10px_rgba(49,200,255,0.4)] sm:h-[50px]"
                  aria-hidden="true"
                />

                <div className="space-y-1 text-[length:var(--text-body)] leading-[1.4] text-text-secondary lg:text-[length:var(--text-body-md)] lg:leading-[1.32]">
                  <p className="max-w-[520px]">
                    Uma experiencia imersiva para que suas conquistas digitais e
                    seu conhecimento
                    <span className="font-semibold text-[#5bc0eb]">
                      {" "}
                      permanecam com voce.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards row */}
          <div className="w-full overflow-hidden rounded-[28px]">
            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,28rem)_minmax(0,1fr)_minmax(0,28rem)] xl:gap-10">
              {/* Left column */}
              <div className="flex flex-col gap-5">
                <SmartContractsCard />
                <SmartContractsCard />
              </div>

              {/* Center column */}
              <div className="hidden md:flex min-h-[10rem] flex-col items-center justify-center gap-4 rounded-[24px] border border-white/8 bg-white/[0.02] px-5 py-6">
                <div className="flex items-center justify-center px-2 py-2">
                  <div className="space-y-1 text-center text-[length:var(--text-body-sm)] font-medium tracking-[0.28em] text-text-secondary lg:tracking-[0.28em]">
                    <p>
                      <span className="text-[#f4c95d]">CONHECIMENTO</span>
                      <span> COM</span>
                    </p>
                    <p>MEMORIA. IDENTIDADE.</p>
                    <p className="text-[#f4c95d]">E PERMANENCIA.</p>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-5">
                <SmartContractsCard />
                <SmartContractsCard />
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex w-full items-center justify-center rounded-[20px]">
            <div
              className="relative
                          flex w-full max-w-[72rem] flex-col gap-4
                          overflow-hidden
                          rounded-[28px]
                          border border-[#f4c95d30]
                          px-5 py-4
                          backdrop-blur-[24px]
                          before:pointer-events-none
                          before:absolute
                          before:inset-0
                          before:rounded-[28px]
                          before:p-px
                          sm:flex-row sm:items-center sm:gap-5 sm:py-3
                          lg:justify-between"
            >
              {/* Glow decorativo */}
              <span
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="relative flex h-[64px] w-[64px] shrink-0 items-center justify-center self-center rounded-full border border-[#f4c95d80] bg-[radial-gradient(circle_at_center,rgba(255,217,120,0.16)_0%,rgba(255,217,120,0.05)_65%,transparent_100%)] shadow-[0_0_26px_rgba(244,201,93,0.34)] sm:h-[76px] sm:w-[76px]">
                <span className="text-[length:var(--text-h3)] text-[#f4c95d]">
                  🛡
                </span>
              </div>

              {/* Title text */}
              <div className="relative w-full min-w-0 flex-1 space-y-0 text-center sm:text-left">
                <p className="font-heading text-[length:var(--text-body-lg)] font-medium text-text-primary lg:text-[length:var(--text-h4)]">
                  O conhecimento so tem valor real
                </p>

                <p className="font-heading text-[length:var(--text-body-lg)] font-medium text-text-primary lg:text-[length:var(--text-h4)]">
                  <span>quando pode </span>
                  <span className="bg-gradient-to-r from-[#f4c95d] to-[#ffd978] bg-clip-text text-transparent">
                    permanecer.
                  </span>
                </p>
              </div>

              {/* Divider — only at lg+ */}
              <div className="relative hidden h-[64px] w-px shrink-0 bg-gradient-to-b from-transparent via-[#ffffff30] to-transparent lg:block" />

              {/* Description */}
              <p className="relative w-full min-w-0 text-center text-[length:var(--text-body-sm)] leading-[1.45] text-text-secondary sm:w-auto sm:max-w-[220px] sm:text-left lg:w-[34%] lg:min-w-[180px] lg:text-[length:var(--text-body-lg)]">
                Web3 nao e sobre moda.
                <br />
                E sobre construir confianca,
                <br />
                transparencia e legado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}