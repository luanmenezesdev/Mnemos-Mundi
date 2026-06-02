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
        <div className="landing-stage landing-stage--airy max-sm:justify-start max-sm:gap-4 max-sm:py-4 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="max-w-[56rem] space-y-4 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              A REVELAÇÃO
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              Mnemos Mundi é uma plataforma para instituições criarem mundos educacionais imersivos.
            </h2>
            <p className="max-w-[44rem] text-[length:var(--text-body-lg)] leading-[1.6] text-text-secondary max-sm:text-[length:var(--text-body)] max-sm:leading-[1.5] [@media(max-height:840px)]:text-[length:var(--text-body)] [@media(max-height:840px)]:leading-[1.45]">
              Aqui, aprender deixa rastros, desbloqueia progressão e gera conquistas que podem permanecer com o aluno.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 xl:grid-cols-4 xl:[@media(max-height:840px)]:grid-cols-4 [@media(max-height:840px)]:gap-2">
            {verbs.map((verb) => (
              <article key={verb.title} className="landing-panel p-4 sm:p-5 [@media(max-height:840px)]:p-3">
                <h3 className="font-heading text-[length:var(--text-body-lg)] text-text-primary sm:text-[length:var(--text-h4)] [@media(max-height:840px)]:text-[length:var(--text-body-sm)]">
                  {verb.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-body-sm)] leading-[1.45] text-text-secondary sm:mt-3 sm:text-[length:var(--text-body)] sm:leading-[1.55] [@media(max-height:840px)]:mt-1.5 [@media(max-height:840px)]:text-[length:var(--text-caption)] [@media(max-height:840px)]:leading-[1.3]">
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
