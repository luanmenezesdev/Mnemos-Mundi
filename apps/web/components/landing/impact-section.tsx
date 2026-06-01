const impactPillars = [
  "Experiências educacionais imersivas mais acessíveis",
  "Aprendizagem mais próxima de descoberta real",
  "Progressão que não desaparece ao fim da aula",
];

export function ImpactSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-panel px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="max-w-[56rem] space-y-6">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              IMPACTO
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              Não estamos apenas criando uma plataforma. Estamos propondo uma nova linguagem para a educação.
            </h2>
            <ul className="grid gap-4 md:grid-cols-3">
              {impactPillars.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-5 text-[length:var(--text-body)] leading-[1.55] text-text-secondary"
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
