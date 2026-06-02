const pillars = [
  {
    id: "smart-contracts",
    title: "Smart Contracts",
    text: "Automatizam emissão e registro de conquistas com confiança institucional.",
  },
  {
    id: "soulbound-badges",
    title: "Soulbound Badges",
    text: "Mantêm reconhecimento vinculado à trajetória do aluno, sem transferência artificial.",
  },
  {
    id: "knowledge-crystals",
    title: "Knowledge Crystals",
    text: "Transformam progressão em mecânica visível e útil dentro do ecossistema.",
  },
  {
    id: "ipfs-polygon",
    title: "IPFS + Polygon",
    text: "Reforçam persistência, portabilidade e verificabilidade do histórico.",
  },
];

export function Web3Section() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--dense max-sm:justify-start max-sm:gap-4 max-sm:py-4 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="max-w-[48rem] space-y-4 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              WEB3 NA PRÁTICA
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              A tecnologia existe para fazer o aprendizado permanecer.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 [@media(max-height:840px)]:gap-2">
            {pillars.map((pillar) => (
              <article key={pillar.id} className="landing-panel p-3 sm:p-5 [@media(max-height:840px)]:p-3">
                <h3 className="font-heading text-[length:var(--text-body-sm)] text-text-primary sm:text-[length:var(--text-h4)] [@media(max-height:840px)]:text-[length:var(--text-body)]">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:mt-3 sm:text-[length:var(--text-body)] [@media(max-height:840px)]:mt-2 [@media(max-height:840px)]:text-[length:var(--text-caption)] [@media(max-height:840px)]:leading-[1.4]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>

          <p className="max-w-[38rem] text-[length:var(--text-caption)] leading-[1.4] text-text-muted sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:text-[length:var(--text-caption)]">
            A camada técnica não aparece como jargão: ela existe para registrar conquistas, sustentar progressão e deixar o histórico do aluno portátil.
          </p>
        </div>
      </div>
    </section>
  );
}
