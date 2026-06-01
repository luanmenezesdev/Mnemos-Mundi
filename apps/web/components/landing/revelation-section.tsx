const verbs = [
  { title: "Aprender", text: "Conhecimento deixa de ser estático e passa a ter forma." },
  { title: "Explorar", text: "Alunos entram em mundos temáticos e descobrem conexões ativamente." },
  { title: "Criar", text: "Instituições desenham trilhas, ambientes e experiências próprias." },
  { title: "Conquistar", text: "Progressão e reconhecimento tornam-se visíveis, persistentes e verificáveis." },
];

export function RevelationSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="space-y-10">
          <div className="max-w-[56rem] space-y-5">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              A REVELAÇÃO
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              Mnemos Mundi é uma plataforma para instituições criarem mundos educacionais imersivos.
            </h2>
            <p className="max-w-[44rem] text-[length:var(--text-body-lg)] leading-[1.6] text-text-secondary">
              Aqui, aprender deixa rastros, desbloqueia progressão e gera conquistas que podem permanecer com o aluno.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verbs.map((verb) => (
              <article key={verb.title} className="landing-panel p-5">
                <p className="font-heading text-[length:var(--text-h4)] text-text-primary">
                  {verb.title}
                </p>
                <p className="mt-3 text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                  {verb.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
