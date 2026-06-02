import Link from "next/link";

const stack = ["React", "Unity", "Solidity", "Polygon", "IPFS"];

export function FinalCtaSection() {
  return (
    <section className="landing-section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,192,235,0.14),transparent_24%),radial-gradient(circle_at_68%_75%,rgba(157,125,255,0.16),transparent_22%)]" />
      <div className="landing-shell">
        <div className="landing-stage landing-stage--spread max-sm:justify-start max-sm:gap-5 max-sm:py-4 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
            TECNOLOGIA E PRÓXIMO PASSO
          </p>

          <div className="landing-panel p-4 sm:p-5 [@media(max-height:840px)]:p-4">
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(12rem,18rem)] md:items-end [@media(max-height:840px)]:gap-3">
              <div className="space-y-4 self-center max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
                <h2 className="max-w-[14ch] font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.94] tracking-[-0.05em] text-text-primary lg:text-[length:var(--text-h1)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
                  Educação não precisa ser apenas acessada. Ela pode ser habitada.
                </h2>
                <p className="max-w-[42rem] text-[length:var(--text-body)] leading-[1.5] text-text-secondary [@media(max-height:840px)]:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.4]">
                  Mnemos Mundi combina experiência web, ambientes imersivos e persistência verificável para abrir uma nova camada de valor para instituições educacionais.
                </p>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/mnemos-mundi"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#5bc0eb] bg-[#5bc0eb14] px-5 text-[length:var(--text-body-sm)] font-semibold text-text-primary sm:min-h-14 sm:px-6 sm:text-[length:var(--text-body)]"
                  >
                    Abrir protótipo
                  </Link>
                  <a
                    href="#top"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 text-[length:var(--text-body-sm)] font-medium text-text-secondary sm:min-h-14 sm:px-6 sm:text-[length:var(--text-body)]"
                  >
                    Voltar ao início
                  </a>
                </div>
              </div>

              <div className="space-y-2.5 border-t border-white/8 pt-3 md:border-t-0 md:border-l md:pl-4 md:pt-0 [@media(max-height:840px)]:space-y-2">
                <p className="text-[length:var(--text-caption)] uppercase tracking-[0.22em] text-text-muted sm:text-[length:var(--text-body-sm)]">
                  Stack
                </p>
                <ul className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[length:var(--text-caption)] text-text-secondary sm:px-3.5 sm:py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
