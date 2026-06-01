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
      <div className="landing-shell space-y-8">
        <div className="max-w-[52rem] space-y-5">
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
            A EXPERIÊNCIA
          </p>
          <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
            Não é uma aula em 3D. É uma jornada de aprendizagem que pode ser habitada.
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <ol className="grid gap-4">
            {experienceSteps.map((step, index) => (
              <li key={step.id} className="landing-panel flex gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5bc0eb]/40 text-[length:var(--text-body-sm)] text-[#5bc0eb]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="landing-panel p-6">
            <h3 className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
              Aplicações institucionais
            </h3>
            <div className="mt-5 grid gap-4">
              {institutionExamples.map((example) => (
                <div key={example.id} className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                  {example.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
