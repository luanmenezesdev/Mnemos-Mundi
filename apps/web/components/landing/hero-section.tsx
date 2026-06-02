import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="landing-section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(91,192,235,0.16),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(157,125,255,0.14),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(244,201,93,0.08),transparent_22%)]" />
      <div className="landing-shell">
        <div className="landing-stage landing-stage--spread max-sm:justify-start max-sm:gap-5 max-sm:py-4 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          <header className="flex items-center justify-between max-sm:items-start [@media(max-height:840px)]:items-start">
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-cyan-200/50 sm:h-12 sm:w-12">
                <Image
                  src="/images/logo_oficial.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div>
                <p className="font-heading text-[length:var(--text-eyebrow)] tracking-[0.32em] text-text-secondary">
                  MNEMOS MUNDI
                </p>
                <p className="text-[length:var(--text-caption)] tracking-[0.22em] text-text-muted">
                  IMMERSIVE LEARNING INFRASTRUCTURE
                </p>
              </div>
            </div>
          </header>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,52rem)_minmax(0,24rem)] [@media(max-height:840px)]:gap-6">
            <div className="space-y-6 self-center max-sm:space-y-4 [@media(max-height:840px)]:space-y-4">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[length:var(--text-body-sm)] text-text-secondary sm:px-4 sm:py-2 [@media(max-height:840px)]:px-3 [@media(max-height:840px)]:py-1">
                Para escolas, cursinhos e universidades
              </div>

              <div className="space-y-5 max-sm:space-y-4 [@media(max-height:840px)]:space-y-3">
                <h1 className="max-w-[12ch] font-alt-heading text-[length:var(--text-mobile-hero)] font-light leading-[0.9] tracking-[-0.05em] text-text-primary lg:text-[length:var(--text-display)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h1)]">
                  Transformamos conhecimento em mundos exploráveis.
                </h1>
                <p className="max-w-[38rem] text-[length:var(--text-body-lg)] leading-[1.55] text-text-secondary max-sm:text-[length:var(--text-body)] max-sm:leading-[1.45] [@media(max-height:840px)]:text-[length:var(--text-body)] [@media(max-height:840px)]:leading-[1.45]">
                  Uma nova infraestrutura para instituições criarem experiências educacionais imersivas, progressivas e memoráveis.
                </p>
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 [@media(max-height:840px)]:gap-3 [@media(min-width:640px)_and_(max-width:760px)_and_(max-height:840px)]:items-start [@media(min-width:640px)_and_(max-width:760px)_and_(max-height:840px)]:justify-start [@media(min-width:640px)_and_(max-width:760px)_and_(max-height:840px)]:gap-2 [@media(min-width:640px)_and_(max-width:760px)_and_(max-height:840px)]:flex-col">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 [@media(max-height:840px)]:gap-2 [@media(min-width:640px)_and_(max-width:760px)_and_(max-height:840px)]:w-full [@media(min-width:640px)_and_(max-width:760px)_and_(max-height:840px)]:flex-col">
              <Link
                href="/mnemos-mundi"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#5bc0eb] bg-[#5bc0eb14] px-5 text-[length:var(--text-body-sm)] font-semibold text-text-primary sm:min-h-14 sm:px-6 sm:text-[length:var(--text-body)] max-sm:w-full [@media(max-height:840px)]:min-h-11 [@media(max-height:840px)]:px-4 [@media(max-height:840px)]:text-[length:var(--text-caption)] [@media(min-width:640px)_and_(max-width:760px)_and_(max-height:840px)]:w-full"
              >
                Explorar um mundo
              </Link>
              <a
                href="#como-funciona"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 text-[length:var(--text-body-sm)] font-medium text-text-secondary sm:min-h-14 sm:px-6 sm:text-[length:var(--text-body)] max-sm:w-full [@media(max-height:840px)]:min-h-11 [@media(max-height:840px)]:px-4 [@media(max-height:840px)]:text-[length:var(--text-caption)] [@media(min-width:640px)_and_(max-width:760px)_and_(max-height:840px)]:w-full"
              >
                Ver como funciona
              </a>
            </div>

            <p className="text-[length:var(--text-caption)] uppercase tracking-[0.22em] text-text-muted sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:text-[length:var(--text-caption)]">
              Role para a próxima descoberta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
