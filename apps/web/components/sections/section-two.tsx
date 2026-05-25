import { ProblemEyebrow } from "../section-two/problem-eyebrow";
import { ProblemHeadline } from "../section-two/problem-headline";
import { ProblemReflection } from "../section-two/problem-reflection";
import { ProblemStatsPanel } from "../section-two/problem-stats-panel";
import { ProblemSupportText } from "../section-two/problem-support-text";

type SectionTwoProps = {
  className?: string;
};

export function SectionTwo({ className }: SectionTwoProps) {
  return (
    <section
      aria-label="Sessao 2 - Problema"
      className={[
        "relative h-[100svh] min-h-0 overflow-hidden bg-[#050816] text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col px-6 py-6 sm:px-10 md:px-16 lg:px-20 lg:py-8">
        <div className="mx-auto flex h-full w-full max-w-[1760px] flex-col">
          <div className="grid flex-1 min-h-0 w-full grid-cols-1 gap-8 lg:grid-cols-[1008px_672px] lg:items-start lg:gap-[80px]">
            <div className="flex w-full items-start lg:pl-4 lg:pt-1">
              <div className="flex w-full max-w-[760px] flex-col gap-5">
                  <ProblemEyebrow label="PROBLEMA - O MUNDO REAL FALHOU" />

                  <ProblemHeadline
                    lines={["O conhecimento", "deveria", "permanecer."]}
                    highlightedIndex={2}
                  />

                  <div className="pt-[18px]">
                    <ProblemSupportText text="Mas a maior parte das experiencias educacionais desaparece assim que a aula termina." />
                  </div>
              </div>
            </div>

            <div className="flex w-full items-start justify-center pt-6 lg:justify-center lg:pt-2">
              <ProblemStatsPanel />
            </div>
          </div>

          <div className="flex shrink-0 justify-center pt-4 lg:pt-3">
            <ProblemReflection
              text="Talvez o problema nunca tenha sido o acesso a informacao."
              highlight="Talvez o problema seja que aprender deixou de ser significativo."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
