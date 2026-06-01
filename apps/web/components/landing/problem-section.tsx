const problemPoints = [
  "Conteúdo demais, experiência de menos.",
  "Aprendizado que termina quando a aula acaba.",
  "Baixo senso de descoberta e pertencimento.",
  "Instituições sem linguagem nativa para educação imersiva.",
];

export function ProblemSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,44rem)_minmax(0,1fr)] lg:items-end">
          <div className="space-y-6">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              O PROBLEMA
            </p>
            <h2 className="max-w-[13ch] font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              A educação ainda entrega conteúdo. Raramente entrega presença.
            </h2>
            <p className="max-w-[38rem] text-[length:var(--text-body-lg)] leading-[1.6] text-text-secondary">
              O problema não é acesso à informação. É a dificuldade de transformar conhecimento em algo vivido, memorável e contínuo.
            </p>
          </div>

          <div className="landing-panel p-6">
            <ul className="grid gap-4">
              {problemPoints.map((point) => (
                <li key={point} className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-[length:var(--text-body)] leading-[1.5] text-text-secondary">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
