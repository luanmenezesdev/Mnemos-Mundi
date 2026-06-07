const pillars = [
  {
    id: "reconhecimento-verificavel",
    title: "Reconhecimento verificável",
    technology: "Smart Contracts",
    text: "Conquistas registradas e validadas com confiança institucional.",
    mobileText: "Conquistas registradas e validadas com confiança.",
  },
  {
    id: "conquistas-permanentes",
    title: "Conquistas permanentes",
    technology: "Soulbound Badges",
    text: "Badges continuam vinculados à trajetória do aluno sem depender de prints, PDFs ou transferências artificiais.",
    mobileText: "Badges vinculados à trajetória do aluno.",
  },
  {
    id: "progressao-visivel",
    title: "Progressão visível",
    technology: "Knowledge Crystals",
    text: "Aprendizado deixa de ser abstrato e passa a aparecer como progressão tangível dentro do ecossistema.",
    mobileText: "O progresso deixa de ser abstrato e passa a ser visível.",
  },
  {
    id: "historico-portatil",
    title: "Histórico portátil",
    technology: "IPFS + Polygon",
    text: "A jornada pode continuar existindo além de uma única sessão ou de uma única plataforma institucional.",
    mobileText: "A jornada continua além de uma única plataforma.",
  },
];

export function Web3Section() {
  return (
    <section className="landing-section">
      <img
        src="/images/web-3/web3-bg.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-black/30 max-sm:bg-black/45" />
      <div className="absolute inset-0 max-sm:bg-gradient-to-b max-sm:from-black/70 max-sm:via-black/45 max-sm:to-black/80" />

      <div className="landing-shell">
        <div className="landing-stage justify-between py-8 pb-14 max-sm:h-auto max-sm:min-h-screen max-sm:justify-start max-sm:gap-6 max-sm:px-5 max-sm:py-8 max-sm:pb-10">
          <div className="mx-auto flex h-full w-full flex-col justify-between gap-7 max-sm:justify-start max-sm:gap-6 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4">
            <div className="max-w-[52rem] space-y-3.5 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
              <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
                WEB3 NA PRÁTICA
              </p>
              <h2
                className="
    font-alt-heading
    text-[32px]
    font-light
    leading-[0.95]
    tracking-[-0.04em]
    text-text-primary

    max-sm:text-[28px]
    max-sm:leading-[0.98]

    sm:text-[length:var(--text-mobile-section)]
    lg:text-[length:var(--text-section)]

    [@media(max-height:840px)]:text-[26px]
  "
              >
                A tecnologia existe para fazer o aprendizado permanecer.
              </h2>
              <p className="max-w-[42rem] text-[length:var(--text-body)] leading-[1.5] text-text-secondary max-sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.4]">
                Para que a jornada continue existindo, ela precisa ser
                registrada, reconhecida e transportável.
              </p>
            </div>

            <div
              className="
    grid grid-cols-2 gap-3 sm:gap-3.5

    max-sm:flex
    max-sm:snap-x
    max-sm:snap-mandatory
    max-sm:overflow-x-auto
    max-sm:overflow-y-hidden
    max-sm:pb-3
    max-sm:[scrollbar-width:none]
    max-sm:[&::-webkit-scrollbar]:hidden

    [@media(max-height:840px)]:gap-2.5
  "
            >
              {pillars.map((pillar) => (
                <article
                  key={pillar.id}
                  className="
        landing-panel
        flex
        rounded-[22px]
        p-4
        sm:p-4.5
        md:p-5

        max-sm:min-w-[78%]
        max-sm:snap-start
        max-sm:flex-col
        max-sm:rounded-[24px]
        max-sm:p-5

        [@media(max-height:840px)]:rounded-[18px]
        [@media(max-height:840px)]:p-3.5
      "
                >
                  <div
                    className="
          flex
          h-full
          w-[12rem]
          items-center
          justify-center

          max-sm:mb-4
          max-sm:size-20
          max-sm:h-20
          max-sm:w-20
          max-sm:items-start
          max-sm:justify-start

          sm:w-[7rem]
          md:w-[9rem]
          lg:w-[12rem]
        "
                  >
                    <img
                      src={`/images/web-3/${pillar.id}.webp`}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="mx-4 border-l border-white/8 max-sm:hidden [@media(max-height:840px)]:mx-3.5" />

                  <div className="space-y-1.5 max-sm:mt-0 [@media(max-height:840px)]:space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#5bc0eb] sm:text-[11px]">
                      {pillar.technology}
                    </p>

                    <h3 className="mt-1.5 font-heading text-[20px] leading-tight text-text-primary sm:mt-2 sm:text-[length:var(--text-h4)] [@media(max-height:840px)]:text-[length:var(--text-body)]">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-[1.4] text-text-secondary sm:mt-2.5 sm:text-[length:var(--text-body-sm)] sm:leading-[1.4] [@media(max-height:840px)]:mt-2 [@media(max-height:840px)]:text-[length:var(--text-caption)] [@media(max-height:840px)]:leading-[1.35]">
                      <span className="sm:hidden">{pillar.mobileText}</span>
                      <span className="hidden sm:inline">{pillar.text}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="max-w-[40rem] border-t border-white/8 pt-3 [@media(max-height:840px)]:pt-2.5">
              <p className="text-[length:var(--text-body-sm)] leading-[1.45] text-text-muted sm:text-[length:var(--text-body)] [@media(max-height:840px)]:text-[length:var(--text-caption)]">
                <span className="sm:hidden">
                  A tecnologia fica nos bastidores: registra conquistas,
                  preserva progresso e mantém a jornada portátil.
                </span>
                <span className="hidden sm:inline">
                  A tecnologia é invisível para o aluno. Ela existe apenas para
                  registrar conquistas, preservar progresso e tornar a jornada
                  portátil.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
