import { VerbAccordion } from "./revelation-accordion";

const verbs = [
  {
    title: "Aprender",
    icon: "01",
    before: "Conhecimento preso em páginas.",
    after: "Conhecimento vivido em ambientes exploráveis.",
  },
  {
    title: "Explorar",
    icon: "02",
    before: "Consumir conteúdo linearmente.",
    after: "Descobrir conexões por conta própria.",
  },
  {
    title: "Criar",
    icon: "03",
    before: "Receber experiências prontas.",
    after: "Desenhar trilhas, mundos e rituais próprios.",
  },
  {
    title: "Conquistar",
    icon: "04",
    before: "Notas que desaparecem.",
    after: "Conquistas que permanecem com o aluno.",
  },
];

export function RevelationSection() {
  return (
    <section className="landing-section">
       <img
        src="/images/revelation/the_revelations.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent" />
      <div className="landing-shell">
        <div className="landing-stage justify-center gap-6 py-8 max-sm:justify-start max-sm:gap-4 max-sm:px-5 max-sm:py-8 md:gap-8 md:py-7 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="max-w-[58rem] space-y-4 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              A REVELAÇÃO
            </p>
            <h2 className="max-w-[20ch] font-alt-heading text-[32px] font-light leading-[0.92] tracking-[-0.04em] text-text-primary sm:text-[length:var(--text-mobile-section)] lg:text-[length:var(--text-section)]">
              O problema nunca foi ensinar. 
              Foi fazer o conhecimento continuar vivo.
            </h2>
            {/* <p className="mt-4 max-w-[34rem] text-[13px] uppercase leading-[1.45] tracking-[0.22em] text-text-muted sm:mt-0 sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:text-[13px]">
              Mnemos Mundi é uma plataforma para instituições criarem mundos
              educacionais imersivos.
            </p> */}
            <p className="mt-4 max-w-[46rem] text-[14px] leading-[1.45] text-text-secondary sm:mt-0 sm:text-[length:var(--text-body)] sm:leading-[1.5] lg:text-[length:var(--text-body-lg)] lg:leading-[1.6] [@media(max-height:840px)]:text-[length:var(--text-body)] [@media(max-height:840px)]:leading-[1.45]">
              Enquanto uma aula tradicional termina quando o sinal toca, um mundo educacional continua existindo.
            </p>
          </div>

          {/* <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4 [@media(max-height:840px)]:gap-3">
            {verbs.map((verb) => (
              <article
                key={verb.title}
                className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md transition duration-300 hover:border-[#5bc0eb]/30 hover:bg-white/[0.055] sm:p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-heading text-[22px] text-text-primary">
                    {verb.title}
                  </h3>

                  <span className="text-[12px] tracking-[0.22em] text-[#5bc0eb]/70">
                    {verb.icon}
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-text-muted">
                      Antes
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.45] text-text-secondary">
                      {verb.before}
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#5bc0eb]">
                      Depois
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.45] text-text-primary">
                      {verb.after}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div> */}
          <VerbAccordion />

          {/* <div className="max-w-[36rem] pt-1 sm:pt-2 [@media(max-height:840px)]:pt-0">
            <p className="mt-8 max-w-[760px] font-alt-heading text-[30px] font-light leading-[0.95] tracking-[-0.03em] text-text-primary sm:mt-2 sm:text-[length:var(--text-mobile-h2)] sm:leading-[1.02] lg:text-[length:var(--text-h2)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Conhecimento deixa de ser consumido. Passa a ser vivido.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
