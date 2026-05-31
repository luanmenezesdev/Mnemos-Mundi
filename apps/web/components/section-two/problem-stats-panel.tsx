import { ProblemStatCard } from "./problem-stat-card";

type ProblemStatsPanelProps = {
  className?: string;
};

export function ProblemStatsPanel({ className }: ProblemStatsPanelProps) {
  return (
    <div
      className={[
        "flex w-full max-w-[28rem] flex-col gap-4 bg-background",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ProblemStatCard
        value="9,6M"
        description="de jovens abandonam a escola por ano no Brasil."
        source="Fonte: IBGE (2023)"
        className="rounded-xl border border-white/10 p-4 sm:p-5"
      />

      <ProblemStatCard
        value="75%"
        description="nao aplicam o que aprendem porque o conteudo nao se conecta com a vida real."
        source="Fonte: McKinsey (2023)"
        className="rounded-xl border border-white/10 p-4 sm:p-5"
      />

      <ProblemStatCard
        value={
          <>
            Mais informacao.
            <br />
            Menos engajamento.
          </>
        }
        description="Nunca tivemos tanto acesso ao conhecimento e nunca estivemos tao desconectados dele."
        source="Fonte: World Economic Forum (2024)"
        valueSize="md"
        className="rounded-xl border border-white/10 p-4 sm:p-5"
      />
    </div>
  );
}
