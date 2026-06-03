const audiences = [
  {
    id: "escolas",
    title: "Escolas",
    text: "Transformam disciplinas em experiências memoráveis.",
  },
  {
    id: "cursinhos",
    title: "Cursinhos",
    text: "Transformam revisão em progressão visível.",
  },
  {
    id: "universidades",
    title: "Universidades",
    text: "Transformam competências em identidade acadêmica persistente.",
  },
];

const comparisons = [
  { id: "conteudo", current: "Conteúdo estático", future: "Mundos exploráveis" },
  { id: "presenca", current: "Presença temporária", future: "Histórico persistente" },
  { id: "consumo", current: "Consumo passivo", future: "Progressão ativa" },
  { id: "certificado", current: "Certificado isolado", future: "Conquista verificável" },
];

export function InstitutionsSection() {
  return (
    <section id="para-instituicoes" className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--dense justify-center gap-7 py-8 max-sm:justify-start max-sm:gap-5 max-sm:px-5 max-sm:py-8 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="max-w-[52rem] space-y-4 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              VALOR PARA INSTITUIÇÕES
            </p>
            <h2 className="font-alt-heading text-[30px] font-light leading-[0.92] tracking-[-0.04em] text-text-primary sm:text-[length:var(--text-mobile-section)] lg:text-[length:var(--text-section)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Uma plataforma. Múltiplos modelos educacionais. A mesma lógica de descoberta.
            </h2>
            <p className="max-w-[42rem] text-[15px] leading-[1.45] text-text-secondary sm:text-[length:var(--text-body-sm)] lg:text-[length:var(--text-body)] lg:leading-[1.5] [@media(max-height:840px)]:leading-[1.4]">
              A mesma infraestrutura pode ser adaptada para diferentes contextos educacionais sem perder continuidade.
            </p>
          </div>

          <div className="landing-panel mt-6 rounded-[24px] p-4 sm:mt-0 sm:p-5 [@media(max-height:840px)]:p-3">
            <div className="grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start [@media(max-height:840px)]:gap-3">
              <div className="space-y-3 [@media(max-height:840px)]:space-y-2.5">
                <div className="space-y-1.5">
                  <h3 className="text-[12px] uppercase tracking-[0.22em] text-text-muted">
                    Onde a plataforma encaixa
                  </h3>
                  <p className="text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:text-[length:var(--text-body-sm)]">
                    A mesma lógica serve para escolas, cursinhos e universidades sem mudar o eixo de descoberta.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-3 md:grid-cols-1 [@media(max-height:840px)]:gap-2">
                  {audiences.map((audience, index) => (
                    <article
                      key={audience.id}
                      className={`rounded-[18px] border border-white/8 bg-white/[0.03] p-4 sm:p-4 ${
                        index === audiences.length - 1 ? "col-span-2 md:col-span-1" : ""
                      }`}
                    >
                      <h3 className="font-heading text-[length:var(--text-body)] text-text-primary sm:text-[length:var(--text-body-lg)]">
                        {audience.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-[1.35] text-text-secondary sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:text-[length:var(--text-caption)]">
                        {audience.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-3 border-t border-white/8 pt-3 md:border-t-0 md:border-l md:pl-4 md:pt-0 [@media(max-height:840px)]:space-y-2.5 [@media(max-height:840px)]:pt-2.5">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.22em] text-text-muted sm:text-[length:var(--text-body-sm)]">
                    Da plataforma fechada ao mundo persistente
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 sm:gap-2 lg:grid-cols-2 [@media(max-height:840px)]:gap-2">
                  {comparisons.map((comparison) => (
                    <article
                      key={comparison.id}
                      className="rounded-[18px] border border-white/8 bg-white/[0.04] p-4 sm:rounded-[20px] sm:px-4 sm:py-3"
                    >
                      <div className="sm:hidden">
                        <p className="text-sm leading-[1.35]">
                          <span className="text-text-muted">{comparison.current}</span>
                          <span className="mx-2 text-[#5bc0eb]">→</span>
                          <span className="font-semibold text-text-primary">{comparison.future}</span>
                        </p>
                      </div>
                      <div className="hidden space-y-1.5 sm:block">
                        <p className="text-[length:var(--text-caption)] uppercase tracking-[0.16em] text-text-muted">
                          Modelo atual
                        </p>
                        <p className="text-[length:var(--text-caption)] leading-[1.35] text-text-muted sm:text-[length:var(--text-body-sm)]">
                          {comparison.current}
                        </p>
                        <p className="text-[length:var(--text-caption)] uppercase tracking-[0.22em] text-[#5bc0eb]">
                          vira
                        </p>
                        <p className="text-[length:var(--text-caption)] leading-[1.35] text-text-primary sm:text-[length:var(--text-body-sm)]">
                          {comparison.future}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[34rem] pt-1 [@media(max-height:840px)]:pt-0">
            <p className="mt-6 font-alt-heading text-[28px] font-light leading-[0.95] tracking-[-0.03em] text-text-primary sm:mt-2 sm:text-[length:var(--text-mobile-h2)] sm:leading-[1.02] lg:text-[length:var(--text-h2)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Uma única infraestrutura. Inúmeras jornadas possíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
