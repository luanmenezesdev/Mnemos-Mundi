import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="landing-section overflow-hidden py-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(91,192,235,0.16),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(157,125,255,0.14),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(244,201,93,0.08),transparent_22%)]" />
      <div className="landing-shell flex min-h-[100svh] flex-col justify-between gap-10 py-6 sm:py-8 lg:py-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-200/50">
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

        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,52rem)_minmax(0,24rem)]">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[length:var(--text-body-sm)] text-text-secondary">
              Para escolas, cursinhos e universidades
            </div>

            <div className="space-y-6">
              <h1 className="max-w-[12ch] font-alt-heading text-[length:var(--text-mobile-hero)] font-light leading-[0.92] tracking-[-0.05em] text-text-primary lg:text-[length:var(--text-display)]">
                Transformamos conhecimento em mundos exploráveis.
              </h1>
              <p className="max-w-[38rem] text-[length:var(--text-body-lg)] leading-[1.55] text-text-secondary">
                Uma nova infraestrutura para instituições criarem experiências educacionais imersivas, progressivas e memoráveis.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/mnemos-mundi"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#5bc0eb] bg-[#5bc0eb14] px-6 text-[length:var(--text-body)] font-semibold text-text-primary"
              >
                Abrir protótipo
              </Link>
              <a
                href="#como-funciona"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-[length:var(--text-body)] font-medium text-text-secondary"
              >
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="landing-panel min-h-[18rem] p-6 sm:min-h-[22rem] lg:min-h-[28rem]">
            <div className="flex h-full flex-col justify-between">
              <p className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
                Área reservada para background visual
              </p>
              <div className="space-y-3">
                <p className="font-heading text-[length:var(--text-h4)] text-text-primary">
                  Explore. Aprenda. Progrida.
                </p>
                <p className="max-w-[24rem] text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                  Estruture esta área para receber seu vídeo, loop ou composição visual manualmente sem quebrar o layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
