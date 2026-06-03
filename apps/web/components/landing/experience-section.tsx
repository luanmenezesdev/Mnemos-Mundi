const experienceSteps = [
  {
    id: "atravessa-portal",
    title: "Entrar",
    text: "Atravessa um portal para um ambiente temático.",
  },
  {
    id: "escolhe-trilha",
    title: "Escolher trilha",
    text: "Escolhe por onde começar e define a própria rota.",
  },
  {
    id: "interage-descobre",
    title: "Interagir",
    text: "Desafios e objetos transformam conteúdo em descoberta.",
  },
  {
    id: "progride-desbloqueia",
    title: "Progredir",
    text: "Cada avanço libera caminhos e sinais visíveis de evolução.",
  },
  {
    id: "permanece",
    title: "Permanecer",
    text: "O mundo continua existindo mesmo quando a aula termina.",
  },
];

const institutionExamples = [
  { id: "escolas", text: "Escolas" },
  { id: "cursinhos", text: "Cursinhos" },
  { id: "universidades", text: "Universidades" },
  { id: "treinamentos", text: "Treinamentos corporativos" },
];

export function ExperienceSection() {
  return (
    <section id="como-funciona" className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage justify-center gap-8 py-8 max-sm:justify-start max-sm:gap-5 max-sm:py-5 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-5 [@media(max-height:840px)]:py-5">
          <div className="max-w-[52rem] space-y-3.5 max-sm:space-y-3 [@media(max-height:840px)]:space-y-2.5">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              A EXPERIÊNCIA
            </p>
            <h2 className="max-w-[20ch] font-alt-heading text-[length:var(--text-mobile-section)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-section)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Não é uma aula em 3D. É uma jornada de aprendizagem que pode ser habitada.
            </h2>
            <p className="max-w-[38rem] text-[length:var(--text-body)] leading-[1.5] text-text-secondary max-sm:text-[length:var(--text-body-sm)] max-sm:leading-[1.45] [@media(max-height:840px)]:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.4]">
              Cada disciplina se transforma em um ambiente persistente onde conteúdo, interação e progresso coexistem.
            </p>
          </div>

          <div className="grid gap-4 [@media(max-height:840px)]:gap-3">
            <div className="landing-panel p-4 sm:p-5 [@media(max-height:840px)]:p-3.5">
              <div className="space-y-3 [@media(max-height:840px)]:space-y-2.5">
                <div className="space-y-1.5">
                  <h3 className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
                    Jornada do aluno
                  </h3>
                  <p className="max-w-[28rem] text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:text-[length:var(--text-body-sm)]">
                    Uma trilha contínua de entrada, descoberta, progressão e permanência.
                  </p>
                </div>

                <ol className="grid gap-2.5 [@media(max-height:840px)]:gap-2">
                  {experienceSteps.map((step, index) => (
                    <li key={step.id} className="grid grid-cols-[auto_1fr] gap-2.5 [@media(max-height:840px)]:gap-2">
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#5bc0eb]/40 bg-[#5bc0eb]/8 text-[length:var(--text-caption)] text-[#5bc0eb] sm:h-10 sm:w-10">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        {index !== experienceSteps.length - 1 ? (
                          <div className="mt-1.5 h-full min-h-5 w-px bg-gradient-to-b from-[#5bc0eb]/60 to-white/10" />
                        ) : null}
                      </div>

                      <article className="rounded-[20px] border border-white/8 bg-white/[0.04] px-4 py-3 sm:px-4.5 sm:py-3.5 [@media(max-height:840px)]:rounded-[16px] [@media(max-height:840px)]:px-3.5 [@media(max-height:840px)]:py-3">
                        <h4 className="font-heading text-[length:var(--text-body-sm)] text-text-primary sm:text-[length:var(--text-body)] [@media(max-height:840px)]:text-[length:var(--text-caption)]">
                          {step.title}
                        </h4>
                        <p className="mt-1.5 text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:mt-1 [@media(max-height:840px)]:text-[length:var(--text-caption)] [@media(max-height:840px)]:leading-[1.35]">
                          {step.text}
                        </p>
                      </article>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/8 pt-3 text-[length:var(--text-caption)] text-text-secondary sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:pt-2.5">
              <span className="uppercase tracking-[0.22em] text-text-muted">Funciona para</span>
              {institutionExamples.map((example, index) => (
                <span key={example.id} className="inline-flex items-center gap-3">
                  <span className="text-[#5bc0eb]">•</span>
                  <span>{example.text}</span>
                  {index !== institutionExamples.length - 1 ? null : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
