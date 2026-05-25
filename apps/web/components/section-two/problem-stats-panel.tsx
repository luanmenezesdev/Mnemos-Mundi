import { ProblemStatCard } from "./problem-stat-card";

type ProblemStatsPanelProps = {
  className?: string;
};

export function ProblemStatsPanel({ className }: ProblemStatsPanelProps) {
  return (
    <div
      className={[
        "w-full max-w-[520px] bg-[#050816]",
        "flex min-h-[720px] flex-col",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ProblemStatCard
        value="9,6M"
        description="de jovens abandonam a escola por ano no Brasil."
        source="Fonte: IBGE (2023)"
        showDivider
        className="min-h-[204px] pt-12 pb-9"
      />

      <ProblemStatCard
        value="75%"
        description="nao aplicam o que aprendem porque o conteudo nao se conecta com a vida real."
        source="Fonte: McKinsey (2023)"
        showDivider
        className="min-h-[204px] pt-10 pb-9"
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
        className="min-h-[220px] pt-11 pb-10"
      />
    </div>
  );
}
