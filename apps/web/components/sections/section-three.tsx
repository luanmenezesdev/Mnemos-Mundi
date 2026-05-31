import { FeatureCard } from "../section-three/feature-card";

type SectionThreeProps = {
  className?: string;
};

const featureCards = [
  {
    title: "Aprender",
    description:
      "Descubra novos significados e desenvolva habilidades que ficam com voce.",
    indexLabel: "01",
    indexColorClass: "text-[#5bc0eb]",
    titleColorClass: "text-[#5bc0eb]",
  },
  {
    title: "Explorar",
    description:
      "Navegue por mundos de conhecimento vivos, cheios de misterios e conexoes.",
    indexLabel: "02",
    indexColorClass: "text-[#9d7dff]",
    titleColorClass: "text-[#9d7dff]",
  },
  {
    title: "Criar",
    description:
      "Transforme seu aprendizado em expressao, construindo experiencias unicas.",
    indexLabel: "03",
    indexColorClass: "text-[#f4c95d]",
    titleColorClass: "text-[#f4c95d]",
  },
  {
    title: "Conquistar",
    description:
      "Alcance marcos, receba reconhecimento e construa um legado verificavel.",
    indexLabel: "04",
    indexColorClass: "text-[#7bd389]",
    titleColorClass: "text-[#7bd389]",
  },
] as const;

export function SectionThree({ className }: SectionThreeProps) {
  return (
    <section
      aria-label="Sessao 3 - Estrutural"
      className={[
        "relative h-[100svh] max-h-[100svh] overflow-hidden bg-background text-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="page-shell section-shell h-full">
        <div className="page-shell--wide mx-auto flex h-full w-full flex-col justify-between gap-4 py-0 lg:gap-5 xl:gap-6">
          <div className="grid w-full grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:gap-6">
            <div className="w-full max-w-[48rem]">
              <div className="flex w-full max-w-[40rem] flex-col gap-2.5 sm:gap-3.5">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <span
                    className="h-[18px] w-[18px] rounded-full border border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
                    aria-hidden="true"
                  />
                  <p className="text-[length:var(--text-eyebrow)] font-medium tracking-[0.22em] text-[#5bc0eb] sm:tracking-[0.32em]">
                    REVELACAO
                  </p>
                  <span
                    className="hidden h-px max-w-40 flex-1 bg-gradient-to-r from-[#2ad0ff] via-[#2ad0ff] to-transparent sm:block"
                    aria-hidden="true"
                  />
                </div>

                <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] leading-[0.95] font-light tracking-[-0.04em] text-text-primary sm:text-[length:var(--text-h1)] lg:text-[length:var(--text-h2)]">
                  <span className="block">O conhecimento</span>
                  <span className="block bg-gradient-to-r from-[#5bc0eb] to-[#9d7dff] bg-clip-text text-transparent">
                    ganha forma.
                  </span>
                  <span className="block">E um novo mundo nasce.</span>
                </h2>

                <div className="space-y-2.5">
                  <span className="hidden h-px w-full max-w-72 bg-gradient-to-r from-[#2ad0ff] via-[#2ad0ff] to-transparent sm:block" />
                  <p className="space-y-1 text-[length:var(--text-body)] leading-[1.4] text-text-secondary lg:text-[length:var(--text-body-md)] lg:leading-[1.32]">
                    <span className="text-[#35d6ff]">Mnemos Mundi</span> e um
                    universo educacional onde o conhecimento tem peso, forma e
                    valor -{" "}
                    <span className="text-[#35e7ff]">
                      e fica com voce para sempre.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden xl:block" aria-hidden="true" />
          </div>

          <div className="flex flex-col gap-4 lg:gap-5">
            <div className="flex justify-center px-2 mb-2 lg:mb-3">
              <p className="text-center font-heading text-[length:var(--text-body-sm)] font-light tracking-[0.22em] text-text-secondary sm:text-[length:var(--text-body)] sm:tracking-[0.3em] lg:text-[length:var(--text-body-lg)] lg:tracking-[0.38em]">
                VOCE NÃO APENAS APRENDE. VOCÊ SE TRANSFORMA.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#6fcbff33] bg-gradient-to-b from-[#0b1730c9] to-[#091428b8] p-2 shadow-[0_14px_42px_rgba(10,22,51,0.4)] sm:p-2.5 lg:rounded-[34px] lg:p-3">
              <div className="grid grid-cols-2 gap-2.5 xl:grid-cols-4 xl:gap-3">
                {featureCards.map((card, index) => (
                  <FeatureCard
                    key={card.indexLabel}
                    title={card.title}
                    description={card.description}
                    indexLabel={card.indexLabel}
                    indexColorClass={card.indexColorClass}
                    titleColorClass={card.titleColorClass}
                    showDivider={index < featureCards.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#2b5ea1]/40 bg-gradient-to-r from-[#040c1b]/95 via-[#051228]/92 to-[#030a18]/95 p-2 shadow-[0_10px_34px_rgba(8,20,43,0.48)] sm:p-2.5 lg:px-4 lg:py-3.5">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <div className="inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-[#2b5ea1]/60 bg-[#071126] shadow-[0_0_18px_rgba(43,94,161,0.3)] lg:h-[46px] lg:w-[46px]">
                <span className="h-[16px] w-[16px] rounded-full border border-[#5bc0eb]/70 shadow-[0_0_10px_rgba(91,192,235,0.4)] lg:h-[22px] lg:w-[22px]" />
              </div>

              <p className="w-full text-center text-[length:var(--text-body-sm)] font-light leading-[1.4] text-text-secondary  sm:text-[length:var(--text-body)] lg:text-[length:var(--text-body-lg)]">
                Não é só sobre estudar. É sobre{" "}
                <span className="bg-gradient-to-r from-[#5bc0eb] to-[#9d7dff] bg-clip-text text-transparent">
                  deixar sua marca
                </span>{" "}
                no universo do conhecimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
