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
      <div className="landing-shell space-y-8">
        <div className="max-w-[48rem] space-y-5">
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
            WEB3 NA PRÁTICA
          </p>
          <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
            A tecnologia existe para fazer o aprendizado permanecer.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="landing-panel p-5">
              <h3 className="font-heading text-[length:var(--text-h4)] text-text-primary">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
