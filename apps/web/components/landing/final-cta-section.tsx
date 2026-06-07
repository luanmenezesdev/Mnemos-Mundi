import Link from "next/link";

const stack = ["React", "Unity", "Solidity", "Polygon", "IPFS"];

export function FinalCtaSection() {
  return (
    <section className="landing-section overflow-hidden">
      <img
        src="/images/final/final-bg.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.16)_34%,rgba(0,0,0,0)_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,192,235,0.14),transparent_24%),radial-gradient(circle_at_68%_75%,rgba(157,125,255,0.16),transparent_22%)]" />
      <div className="landing-shell">
        <div className="landing-stage justify-center gap-8 py-10 pb-16 max-sm:justify-start max-sm:gap-5 max-sm:py-10 max-sm:pb-16 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <div className="-translate-y-1 mx-auto max-w-[56rem] space-y-5 text-center sm:-translate-y-2 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              TECNOLOGIA E PRÓXIMO PASSO
            </p>
            <h2 className="mx-auto max-w-[13ch] font-alt-heading text-[length:var(--text-mobile-section)] font-light leading-[0.94] tracking-[-0.05em] text-text-primary lg:text-[length:var(--text-section)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Educação não precisa ser apenas acessada. Ela pode ser habitada.
            </h2>
            <p className="mx-auto max-w-[38rem] text-[length:var(--text-body)] leading-[1.5] text-text-secondary [@media(max-height:840px)]:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.4]">
              Mnemos Mundi combina experiência, persistência e descoberta em uma
              única infraestrutura educacional.
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-[44rem] flex-col items-center gap-3 sm:flex-row sm:justify-center [@media(max-height:840px)]:gap-2.5">
            <Link
              href="/mnemos-mundi"
              className="inline-flex min-h-13 w-full items-center justify-center rounded-full border border-[#5bc0eb] bg-[#5bc0eb24] px-6 text-[length:var(--text-body)] font-semibold text-text-primary shadow-[0_0_32px_rgba(91,192,235,0.16)] transition hover:bg-[#5bc0eb30] sm:min-h-14 sm:w-auto sm:min-w-[16rem]"
            >
              Explorar protótipo
            </Link>
            <a
              href="#para-instituicoes"
              className="inline-flex min-h-13 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 text-[length:var(--text-body)] font-medium text-text-secondary transition hover:border-white/18 hover:bg-white/[0.07] sm:min-h-14 sm:w-auto sm:min-w-[16rem]"
            >
              Ver encaixe institucional
            </a>
          </div>

          <div className="mx-auto flex w-full max-w-[40rem] flex-col items-center gap-3 border-t border-white/[0.06] pt-4 text-center sm:max-w-[46rem] [@media(max-height:840px)]:gap-2.5 [@media(max-height:840px)]:pt-3">
            <p className="text-[length:var(--text-caption)] uppercase tracking-[0.22em] text-text-muted sm:text-[length:var(--text-body-sm)]">
              Construído com
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-2 text-[length:var(--text-caption)] text-text-secondary sm:text-[length:var(--text-body-sm)]">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/[0.07] bg-black/10 px-3 py-1.5 text-text-muted sm:px-3.5 sm:py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="max-w-[30rem] font-alt-heading text-[length:var(--text-body-lg)] font-light leading-[1.3] tracking-[-0.02em] text-text-primary [@media(max-height:840px)]:text-[length:var(--text-body)]">
              Uma nova linguagem para aprender. Uma nova forma de permanecer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
