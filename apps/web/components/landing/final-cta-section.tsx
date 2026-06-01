import Link from "next/link";

const stack = ["React", "Unity", "Solidity", "Polygon", "IPFS"];

export function FinalCtaSection() {
  return (
    <section className="landing-section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,192,235,0.14),transparent_24%),radial-gradient(circle_at_68%_75%,rgba(157,125,255,0.16),transparent_22%)]" />
      <div className="landing-shell space-y-8">
        <div className="landing-panel p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(16rem,24rem)] xl:items-end">
            <div className="space-y-6">
              <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
                TECNOLOGIA E PRÓXIMO PASSO
              </p>
              <h2 className="max-w-[14ch] font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
                Educação não precisa ser apenas acessada. Ela pode ser habitada.
              </h2>
              <p className="max-w-[42rem] text-[length:var(--text-body-lg)] leading-[1.6] text-text-secondary">
                Mnemos Mundi combina experiência web, ambientes imersivos e persistência verificável para abrir uma nova camada de valor para instituições educacionais.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/mnemos-mundi"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#5bc0eb] bg-[#5bc0eb14] px-6 text-[length:var(--text-body)] font-semibold text-text-primary"
                >
                  Abrir protótipo
                </Link>
                <a
                  href="#top"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-[length:var(--text-body)] font-medium text-text-secondary"
                >
                  Voltar ao início
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
                Stack
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4 text-center text-[length:var(--text-body)] text-text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
