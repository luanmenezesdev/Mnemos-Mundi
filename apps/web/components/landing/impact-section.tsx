const impactPillars = [
  "Experiências educacionais imersivas mais acessíveis",
  "Aprendizagem mais próxima de descoberta real",
  "Progressão que não desaparece ao fim da aula",
];

export function ImpactSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--spread landing-stage--airy max-sm:justify-start max-sm:gap-6 max-sm:py-5 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-5 [@media(max-height:840px)]:py-4">
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
            IMPACTO
          </p>

          <div className="landing-panel p-4 sm:p-5 [@media(max-height:840px)]:p-4">
            <div className="grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end [@media(max-height:840px)]:gap-3">
              <div className="max-w-[58rem] space-y-4 self-center max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
                <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.94] tracking-[-0.05em] text-text-primary lg:text-[length:var(--text-h1)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
                  Não estamos apenas criando uma plataforma. Estamos propondo uma nova linguagem para a educação.
                </h2>
                <p className="max-w-[42rem] text-[length:var(--text-body)] leading-[1.5] text-text-secondary [@media(max-height:840px)]:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.4]">
                  Uma linguagem em que presença, descoberta e permanência deixam de ser exceção e passam a fazer parte da experiência de aprender.
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-2.5 [@media(max-height:840px)]:gap-2">
                {impactPillars.map((pillar, index) => (
                  <li
                    key={pillar}
                    className={`rounded-[22px] border border-white/8 bg-white/[0.03] px-3 py-3 text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:px-4 sm:py-4 sm:text-[length:var(--text-body-sm)] ${
                      index === impactPillars.length - 1 ? "col-span-2" : ""
                    }`}
                  >
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
