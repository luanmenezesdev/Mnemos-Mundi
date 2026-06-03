const verbs = [
  {
    title: "Aprender",
    before: "Conhecimento preso em páginas.",
    after: "Conhecimento vivido em ambientes exploráveis.",
  },
  {
    title: "Explorar",
    before: "Consumir conteúdo linearmente.",
    after: "Descobrir conexões por conta própria.",
  },
  {
    title: "Criar",
    before: "Receber experiências prontas.",
    after: "Desenhar trilhas, mundos e rituais próprios.",
  },
  {
    title: "Conquistar",
    before: "Notas que desaparecem.",
    after: "Conquistas que permanecem com o aluno.",
  },
];

export function RevelationSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage justify-center gap-6 py-8 max-sm:justify-start max-sm:gap-4 max-sm:px-5 max-sm:py-8 md:gap-8 md:py-7 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="max-w-[58rem] space-y-4 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              A REVELAÇÃO
            </p>
            <h2 className="max-w-[12ch] font-alt-heading text-[32px] font-light leading-[0.92] tracking-[-0.04em] text-text-primary sm:text-[length:var(--text-mobile-section)] lg:text-[length:var(--text-section)]">
              Criamos universos onde aprender deixa rastros.
            </h2>
            <p className="mt-4 max-w-[34rem] text-[13px] uppercase leading-[1.45] tracking-[0.22em] text-text-muted sm:mt-0 sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:text-[13px]">
              Mnemos Mundi é uma plataforma para instituições criarem mundos educacionais imersivos.
            </p>
            <p className="mt-4 max-w-[46rem] text-[14px] leading-[1.45] text-text-secondary sm:mt-0 sm:text-[length:var(--text-body)] sm:leading-[1.5] lg:text-[length:var(--text-body-lg)] lg:leading-[1.6] [@media(max-height:840px)]:text-[length:var(--text-body)] [@media(max-height:840px)]:leading-[1.45]">
              Transformamos disciplinas em mundos persistentes onde alunos exploram, descobrem e constroem significado ao longo do tempo.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4 [@media(max-height:840px)]:gap-3">
            {verbs.map((verb) => (
              <article
                key={verb.title}
                className="landing-panel flex h-full flex-col rounded-[22px] p-4 sm:rounded-[24px] sm:p-5 md:p-6 [@media(max-height:840px)]:rounded-[20px] [@media(max-height:840px)]:p-3.5"
              >
                <h3 className="font-heading text-[18px] text-text-primary sm:text-[length:var(--text-h4)] [@media(max-height:840px)]:text-[length:var(--text-body)]">
                  {verb.title}
                </h3>
                <div className="mt-3 space-y-2.5 sm:hidden">
                  <p className="text-[13px] leading-[1.35] text-text-secondary">
                    <span className="mr-1 uppercase tracking-[0.18em] text-text-muted">Antes:</span>
                    {verb.before}
                  </p>
                  <p className="text-[13px] leading-[1.35] text-text-primary">
                    <span className="mr-1 uppercase tracking-[0.18em] text-[#5bc0eb]">Depois:</span>
                    {verb.after}
                  </p>
                </div>
                <div className="mt-3 hidden space-y-3 sm:block [@media(max-height:840px)]:mt-2.5 [@media(max-height:840px)]:space-y-2">
                  <div className="rounded-[16px] border border-white/8 bg-white/[0.03] p-3 sm:px-4 [@media(max-height:840px)]:px-3 [@media(max-height:840px)]:py-2.5">
                    <p className="text-[length:var(--text-caption)] uppercase tracking-[0.18em] text-text-muted">
                      Antes
                    </p>
                    <p className="mt-1.5 text-[13px] leading-[1.35] text-text-secondary sm:mt-2 sm:text-[length:var(--text-body-sm)] sm:leading-[1.4]">
                      {verb.before}
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-[#5bc0eb]/18 bg-[#5bc0eb]/8 p-3 sm:px-4 [@media(max-height:840px)]:px-3 [@media(max-height:840px)]:py-2.5">
                    <p className="text-[length:var(--text-caption)] uppercase tracking-[0.18em] text-[#5bc0eb]">
                      Depois
                    </p>
                    <p className="mt-1.5 text-[13px] leading-[1.35] text-text-primary sm:mt-2 sm:text-[length:var(--text-body-sm)] sm:leading-[1.4]">
                      {verb.after}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="max-w-[36rem] pt-1 sm:pt-2 [@media(max-height:840px)]:pt-0">
            <p className="mt-8 max-w-[760px] font-alt-heading text-[30px] font-light leading-[0.95] tracking-[-0.03em] text-text-primary sm:mt-2 sm:text-[length:var(--text-mobile-h2)] sm:leading-[1.02] lg:text-[length:var(--text-h2)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Conhecimento deixa de ser consumido. Passa a ser vivido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
