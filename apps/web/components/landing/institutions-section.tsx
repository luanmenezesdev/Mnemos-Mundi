const audiences = [
  {
    id: "escolas",
    title: "Escolas",
    text: "Aumentam engajamento, pertencimento e curiosidade com experiências imersivas mais memoráveis.",
  },
  {
    id: "cursinhos",
    title: "Cursinhos",
    text: "Criam trilhas de revisão, prática e retenção que transformam preparação em progressão visível.",
  },
  {
    id: "universidades",
    title: "Universidades",
    text: "Representam competências, jornadas e identidade acadêmica em ambientes persistentes.",
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
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--dense max-sm:justify-start max-sm:gap-4 max-sm:py-4 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="max-w-[52rem] space-y-4 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              VALOR PARA INSTITUIÇÕES
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Uma plataforma. Múltiplos modelos educacionais. A mesma lógica de descoberta.
            </h2>
          </div>

          <div className="landing-panel p-3 sm:p-5 [@media(max-height:840px)]:p-3">
            <div className="grid gap-4 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-start [@media(max-height:840px)]:gap-3">
              <div className="space-y-3 [@media(max-height:840px)]:space-y-2.5">
                <div className="space-y-1.5">
                  <h3 className="text-[length:var(--text-body-sm)] uppercase tracking-[0.18em] text-text-muted">
                    Onde a plataforma encaixa
                  </h3>
                  <p className="text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:text-[length:var(--text-body-sm)]">
                    A mesma lógica serve para escolas, cursinhos e universidades sem mudar o eixo de descoberta.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-1 [@media(max-height:840px)]:gap-2">
                  {audiences.map((audience, index) => (
                    <article
                      key={audience.id}
                      className={`rounded-[20px] border border-white/8 bg-white/[0.03] p-3 sm:p-4 ${
                        index === audiences.length - 1 ? "col-span-2 md:col-span-1" : ""
                      }`}
                    >
                      <h3 className="font-heading text-[length:var(--text-body-sm)] text-text-primary sm:text-[length:var(--text-body)]">
                        {audience.title}
                      </h3>
                      <p className="mt-1.5 text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:text-[length:var(--text-body-sm)]">
                        {audience.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-3 border-t border-white/8 pt-3 md:border-t-0 md:border-l md:pl-4 md:pt-0 [@media(max-height:840px)]:space-y-2.5 [@media(max-height:840px)]:pt-2.5">
                <div>
                  <p className="text-[length:var(--text-caption)] uppercase tracking-[0.18em] text-text-muted sm:text-[length:var(--text-body-sm)]">
                    Da plataforma fechada ao mundo persistente
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 [@media(max-height:840px)]:gap-2">
                  {comparisons.map((comparison) => (
                    <article
                      key={comparison.id}
                      className="rounded-[20px] border border-white/8 bg-white/[0.03] px-3 py-2.5 sm:px-4 sm:py-3"
                    >
                      <div className="space-y-1.5">
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
        </div>
      </div>
    </section>
  );
}
