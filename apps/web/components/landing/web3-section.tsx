const pillars = [
  {
    id: "reconhecimento-verificavel",
    title: "Reconhecimento verificável",
    technology: "Smart Contracts",
    text: "Conquistas podem ser emitidas, registradas e validadas com confiança institucional.",
  },
  {
    id: "conquistas-permanentes",
    title: "Conquistas permanentes",
    technology: "Soulbound Badges",
    text: "Badges continuam vinculados à trajetória do aluno sem depender de prints, PDFs ou transferências artificiais.",
  },
  {
    id: "progressao-visivel",
    title: "Progressão visível",
    technology: "Knowledge Crystals",
    text: "Aprendizado deixa de ser abstrato e passa a aparecer como progressão tangível dentro do ecossistema.",
  },
  {
    id: "historico-portatil",
    title: "Histórico portátil",
    technology: "IPFS + Polygon",
    text: "A jornada pode continuar existindo além de uma única sessão ou de uma única plataforma institucional.",
  },
];

export function Web3Section() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage justify-center gap-7 py-7 max-sm:justify-start max-sm:gap-5 max-sm:py-5 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="max-w-[48rem] space-y-4 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              WEB3 NA PRÁTICA
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-section)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-section)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              A tecnologia existe para fazer o aprendizado permanecer.
            </h2>
            <p className="max-w-[42rem] text-[length:var(--text-body)] leading-[1.5] text-text-secondary max-sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.4]">
              Para que a jornada continue existindo, ela precisa ser registrada, reconhecida e transportável.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-3.5 [@media(max-height:840px)]:gap-2.5">
            {pillars.map((pillar) => (
              <article key={pillar.id} className="landing-panel rounded-[22px] p-4 sm:p-5 [@media(max-height:840px)]:rounded-[18px] [@media(max-height:840px)]:p-3.5">
                <p className="text-[length:var(--text-caption)] uppercase tracking-[0.18em] text-[#5bc0eb]">
                  {pillar.technology}
                </p>
                <h3 className="mt-2 font-heading text-[length:var(--text-body)] text-text-primary sm:text-[length:var(--text-h4)] [@media(max-height:840px)]:text-[length:var(--text-body)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-caption)] leading-[1.45] text-text-secondary sm:mt-3 sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:mt-2 [@media(max-height:840px)]:text-[length:var(--text-caption)] [@media(max-height:840px)]:leading-[1.4]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>

          <div className="max-w-[40rem] border-t border-white/8 pt-3 [@media(max-height:840px)]:pt-2.5">
            <p className="text-[length:var(--text-body-sm)] leading-[1.45] text-text-muted sm:text-[length:var(--text-body)] [@media(max-height:840px)]:text-[length:var(--text-caption)]">
              A tecnologia é invisível para o aluno. Ela existe apenas para registrar conquistas, preservar progresso e tornar a jornada portátil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
