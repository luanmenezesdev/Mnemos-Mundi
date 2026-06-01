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
      <div className="landing-shell space-y-8">
        <div className="max-w-[52rem] space-y-5">
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
            VALOR PARA INSTITUIÇÕES
          </p>
          <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
            Uma plataforma. Múltiplos modelos educacionais. A mesma lógica de descoberta.
          </h2>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.id} className="landing-panel p-5">
              <h3 className="font-heading text-[length:var(--text-h4)] text-text-primary">
                {audience.title}
              </h3>
              <p className="mt-3 text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                {audience.text}
              </p>
            </article>
          ))}
        </div>

        <div className="landing-panel overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/8">
                <th
                  scope="col"
                  className="px-5 py-4 text-left text-[length:var(--text-body-sm)] uppercase tracking-[0.18em] text-text-muted"
                >
                  Modelo atual
                </th>
                <th
                  scope="col"
                  className="border-l border-white/8 px-5 py-4 text-left text-[length:var(--text-body-sm)] uppercase tracking-[0.18em] text-text-muted"
                >
                  Com Mnemos Mundi
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison) => (
                <tr key={comparison.id} className="border-b border-white/8">
                  <td className="px-5 py-4 text-[length:var(--text-body)] text-text-muted">
                    {comparison.current}
                  </td>
                  <td className="border-l border-white/8 px-5 py-4 text-[length:var(--text-body)] text-text-primary">
                    {comparison.future}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
