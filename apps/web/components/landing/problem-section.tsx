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
        <div className="landing-stage landing-stage--airy max-sm:justify-start max-sm:gap-4 max-sm:py-4 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="max-w-[44rem] space-y-5 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              O PROBLEMA
            </p>
            <h2 className="max-w-[13ch] font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              A educação ainda entrega conteúdo. Raramente entrega presença.
            </h2>
            <p className="max-w-[38rem] text-[length:var(--text-body-lg)] leading-[1.6] text-text-secondary max-sm:text-[length:var(--text-body)] max-sm:leading-[1.5] [@media(max-height:840px)]:text-[length:var(--text-body)] [@media(max-height:840px)]:leading-[1.45]">
              O problema não é acesso à informação. É a dificuldade de transformar conhecimento em algo vivido, memorável e contínuo.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] xl:items-end xl:[@media(max-height:840px)]:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] [@media(max-height:840px)]:items-start [@media(max-height:840px)]:gap-3">
            <div className="landing-panel p-4 sm:p-6 [@media(max-height:840px)]:p-4">
              <p className="max-w-[34rem] text-[length:var(--text-body-lg)] leading-[1.55] text-text-secondary max-sm:text-[length:var(--text-body)] max-sm:leading-[1.45] [@media(max-height:840px)]:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.4]">
                Instituições seguem com poucas ferramentas para transformar aprendizagem em descoberta, pertencimento e continuidade.
              </p>
            </div>

            <div className="landing-panel p-4 sm:p-5 [@media(max-height:840px)]:p-3">
              <ul className="grid grid-cols-2 gap-2 sm:gap-3 xl:grid-cols-1 [@media(max-height:840px)]:gap-2">
                {problemPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-[18px] border border-white/8 bg-white/[0.03] px-3 py-3 text-[length:var(--text-body-sm)] leading-[1.35] text-text-secondary sm:px-4 sm:py-4 sm:text-[length:var(--text-body)] sm:leading-[1.45] [@media(max-height:840px)]:px-3 [@media(max-height:840px)]:py-2.5 [@media(max-height:840px)]:text-[length:var(--text-caption)] [@media(max-height:840px)]:leading-[1.3]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="max-w-[42rem] text-[length:var(--text-body)] leading-[1.55] text-text-muted max-sm:text-[length:var(--text-body-sm)] max-sm:leading-[1.45] [@media(max-height:840px)]:text-[length:var(--text-caption)] [@media(max-height:840px)]:leading-[1.35]">
            O conhecimento não deveria desaparecer quando a aula termina.
          </p>
        </div>
      </div>
    </section>
  );
}
