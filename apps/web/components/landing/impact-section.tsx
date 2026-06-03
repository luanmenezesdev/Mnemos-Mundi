const impactContrasts = [
  {
    id: "presenca",
    from: "Ausência",
    to: "Presença",
    text: "Aprender deixa de acontecer à distância. Passa a ser vivido com contexto, atmosfera e envolvimento.",
  },
  {
    id: "descoberta",
    from: "Repetição",
    to: "Descoberta",
    text: "O aluno deixa de apenas revisar conteúdo. Passa a construir significado ao explorar e conectar ideias.",
  },
  {
    id: "persistencia",
    from: "Esquecimento",
    to: "Persistência",
    text: "O aprendizado deixa de desaparecer no fim da aula. Passa a continuar existindo como jornada e identidade.",
  },
];

export function ImpactSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage justify-center gap-7 px-5 py-8 pb-14 max-sm:justify-start max-sm:gap-5 max-sm:py-8 max-sm:pb-14 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="mx-auto max-w-[56rem] space-y-3 text-center [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              IMPACTO
            </p>
            <h2 className="font-alt-heading text-[28px] font-light leading-[0.94] tracking-[-0.05em] text-text-primary sm:text-[length:var(--text-mobile-section)] lg:text-[length:var(--text-section)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Não estamos apenas criando uma plataforma. Estamos propondo uma nova linguagem para a educação.
            </h2>
            <p className="mx-auto max-w-[36rem] text-[14px] leading-[1.45] text-text-secondary sm:text-[length:var(--text-body-sm)] lg:text-[length:var(--text-body)] lg:leading-[1.5] [@media(max-height:840px)]:leading-[1.4]">
              Uma linguagem em que presença, descoberta e persistência deixam de ser exceção e passam a moldar a experiência de aprender.
            </p>
          </div>

          <div className="mx-auto mt-6 flex w-full max-w-[58rem] flex-col items-center gap-4 sm:mt-0 sm:gap-5 [@media(max-height:840px)]:gap-4">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />

            <ul className="grid w-full gap-3 md:grid-cols-3 [@media(max-height:840px)]:gap-2.5">
              {impactContrasts.map((contrast) => (
                <li
                  key={contrast.id}
                  className="landing-panel rounded-[22px] px-5 py-4 text-center sm:px-5 sm:py-5 [@media(max-height:840px)]:rounded-[20px] [@media(max-height:840px)]:px-4 [@media(max-height:840px)]:py-3.5"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-text-muted">
                    {contrast.from}
                  </p>
                  <p className="mt-1 font-alt-heading text-[28px] font-light tracking-[-0.03em] text-text-primary sm:text-[length:var(--text-mobile-h2)] [@media(max-height:840px)]:text-[length:var(--text-h4)]">
                    {contrast.to}
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.35] text-text-secondary sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:mt-1.5">
                    {contrast.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          </div>

          <div className="mx-auto max-w-[760px] text-center">
            <p className="mt-7 font-alt-heading text-[28px] font-light leading-[0.95] tracking-[-0.03em] text-text-primary sm:mt-2 sm:hidden">
              Quando o aprendizado deixa rastros, ele passa a fazer parte da identidade.
            </p>
            <p className="hidden font-alt-heading text-[length:var(--text-mobile-h2)] font-light leading-[1.02] tracking-[-0.03em] text-text-primary sm:mt-2 sm:block lg:text-[length:var(--text-h2)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Quando o aprendizado deixa rastros, ele deixa de ser uma atividade. E passa a fazer parte da identidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
