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
        // altura limitada à viewport
        "relative h-[100svh] max-h-[100svh] overflow-hidden bg-background text-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="page-shell section-shell h-full">
        <div className="page-shell--wide mx-auto flex h-full w-full flex-col justify-center gap-8 lg:gap-10">
          <div className="grid w-full grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(18rem,28rem)] xl:items-start xl:gap-12">
            <div className="flex w-full items-start ">
              <div className="flex w-full max-w-[42rem] flex-col gap-4 sm:gap-5">
                <ProblemEyebrow label="PROBLEMA - O MUNDO REAL FALHOU" />

                <ProblemHeadline
                  lines={["O conhecimento", "deveria", "permanecer."]}
                  highlightedIndex={2}
                />

                <div className="pt-1 sm:pt-2">
                  <ProblemSupportText text="Mas a maior parte das experiencias educacionais desaparece assim que a aula termina." />
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center xl:justify-end">
              <ProblemStatsPanel />
            </div>
          </div>

          <div className="flex justify-center pt-1 sm:pt-2">
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