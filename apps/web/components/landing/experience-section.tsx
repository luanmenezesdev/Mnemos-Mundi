const experienceSteps = [
  { id: "organiza-mundo", text: "A instituição organiza um mundo de aprendizagem." },
  { id: "entra-trilha", text: "O aluno entra em um ambiente temático e escolhe uma trilha." },
  { id: "objetos-quizzes-desafios", text: "Objetos, quizzes e desafios transformam conteúdo em interação." },
  { id: "progressao-desbloqueia", text: "Progressão desbloqueia reconhecimento e novos caminhos." },
  { id: "historico-permanece", text: "O histórico continua existindo além da sessão." },
];

const institutionExamples = [
  { id: "astronomia", text: "Escolas podem transformar Astronomia em uma jornada explorável." },
  { id: "revisoes-imersivas", text: "Cursinhos podem criar revisões imersivas com retenção mais ativa." },
  { id: "competencias-persistentes", text: "Universidades podem representar competências e progressão acadêmica em ambientes persistentes." },
];

export function ExperienceSection() {
  return (
    <section id="como-funciona" className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--dense max-sm:justify-start max-sm:gap-4 max-sm:py-4 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="max-w-[50rem] space-y-4 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              A EXPERIÊNCIA
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Não é uma aula em 3D. É uma jornada de aprendizagem que pode ser habitada.
            </h2>
          </div>

          <div className="landing-panel p-4 sm:p-5 [@media(max-height:840px)]:p-4">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start [@media(max-height:840px)]:gap-3">
              <div className="space-y-3 [@media(max-height:840px)]:space-y-2.5">
                <div className="space-y-1.5">
                  <h3 className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
                    Jornada do aluno
                  </h3>
                  <p className="max-w-[28rem] text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:text-[length:var(--text-body-sm)]">
                    Cada etapa aproxima conteúdo, interação e progressão em uma única trilha.
                  </p>
                </div>

                <ol className="grid grid-cols-2 gap-2.5 [@media(max-height:840px)]:gap-2">
                  {experienceSteps.map((step, index) => (
                    <li
                      key={step.id}
                      className={`rounded-[20px] border border-white/8 bg-white/[0.03] p-3 [@media(max-height:840px)]:p-2.5 ${
                        index === experienceSteps.length - 1 ? "col-span-2" : ""
                      }`}
                    >
                      <div className="flex gap-2.5 [@media(max-height:840px)]:gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#5bc0eb]/40 text-[length:var(--text-caption)] text-[#5bc0eb] sm:h-9 sm:w-9">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <p className="text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:text-[length:var(--text-body-sm)]">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-3 border-t border-white/8 pt-3 lg:border-t-0 lg:border-l lg:pl-4 lg:pt-0 [@media(max-height:840px)]:space-y-2.5 [@media(max-height:840px)]:pt-2.5">
                <div className="space-y-1.5">
                  <h3 className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
                    Aplicações institucionais
                  </h3>
                  <p className="max-w-[28rem] text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:text-[length:var(--text-body-sm)]">
                    A mesma estrutura pode ser adaptada para jornadas escolares, revisões intensivas e trilhas acadêmicas persistentes.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 [@media(max-height:840px)]:gap-2">
                  {institutionExamples.map((example, index) => (
                    <div
                      key={example.id}
                      className={`rounded-[20px] border border-white/8 bg-white/[0.03] px-3 py-2.5 text-[length:var(--text-caption)] leading-[1.4] text-text-secondary sm:text-[length:var(--text-body-sm)] ${
                        index === institutionExamples.length - 1 ? "col-span-2" : ""
                      }`}
                    >
                      {example.text}
                    </div>
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
