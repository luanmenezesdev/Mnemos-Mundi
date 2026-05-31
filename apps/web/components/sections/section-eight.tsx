type SectionEightProps = {
  className?: string;
};

export function SectionEight({ className }: SectionEightProps) {
  return (
    <section
      aria-label="Sessao 8"
      className={[
        "relative min-h-[100svh] overflow-x-hidden bg-background text-foreground lg:h-[100svh] lg:overflow-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* MAIN WRAPPER */}
      <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col px-4 py-6 sm:px-8 md:px-12 lg:px-8 lg:py-6">
        {/* CONTENT DISTRIBUTION */}
        <div className="relative mx-auto flex h-full w-full max-w-[1760px] items-center">

          {/* CENTER CONTENT — sem QR card, ocupa largura total */}
          <div className="flex w-full min-w-0 flex-col items-center">
            {/* VERTICAL FLOW */}
            <div className="flex w-full max-w-[1280px] flex-col items-center sm:gap-8 sm:py-12">

              {/* ================================================= */}
              {/* BRANDING                                           */}
              {/* ================================================= */}
              <div className="flex w-fit shrink-0 items-center justify-center gap-3 py-3 sm:gap-4 sm:py-4">
                {/* LEFT LINE — oculta em mobile */}
                <div className="hidden h-px shrink-0 bg-[#2ad0ff]/40 sm:block sm:w-[80px] lg:w-[110px]" />

                {/* LOGO */}
                <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-md border border-[#2ad0ff]/40 bg-[#0b1220]/80">
                  <span className="bg-gradient-to-b from-[#35d6ff] to-[#9d7dff] bg-clip-text text-[length:var(--text-body-lg)] font-bold text-transparent">
                    M
                  </span>
                </div>

                {/* TEXT */}
                <div className="flex items-center">
                  <span className="font-heading text-[length:var(--text-body-lg)] font-medium uppercase tracking-[0.28em] text-text-secondary sm:tracking-[0.32em]">
                    Mnemos Mundi
                  </span>
                </div>

                {/* RIGHT LINE */}
                <div className="hidden h-px shrink-0 bg-[#2ad0ff]/40 sm:block sm:w-[80px] lg:w-[110px]" />
              </div>

              {/* SPACING */}
              <div className="h-5 shrink-0 sm:h-7 lg:h-[42px]" />

              {/* ================================================= */}
              {/* HERO TEXT                                          */}
              {/* ================================================= */}
              <div className="flex w-full max-w-[1180px] shrink-0 flex-col items-center justify-center gap-1.5 text-center sm:gap-2">
                <h1 className="font-heading text-[length:var(--text-mobile-h1)] leading-[0.95] font-light tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-display)]">
                  Não é sobre aprender.
                </h1>
                <h1 className="font-heading text-[length:var(--text-mobile-h1)] leading-[0.95] font-light tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-display)]">
                  É sobre{" "}
                  <span className="bg-gradient-to-r from-[#35d6ff] via-[#3ddcff] to-[#b56cff] bg-clip-text text-transparent">
                    viver o conhecimento.
                  </span>
                </h1>
              </div>

              {/* SPACING */}
              <div className="h-4 shrink-0 sm:h-6 lg:h-[36px]" />

              {/* ================================================= */}
              {/* SUPPORTING TEXT                                    */}
              {/* ================================================= */}
              <div className="flex w-full max-w-[680px] shrink-0 flex-col items-center justify-center gap-1 text-center">
                <p className="text-[length:var(--text-body-lg)] leading-[1.3] font-normal text-text-secondary lg:text-[length:var(--text-h3)]">
                  O futuro da educação está aberto.
                </p>
                <p className="text-[length:var(--text-body-lg)] leading-[1.3] font-normal text-text-secondary lg:text-[length:var(--text-h3)]">
                  E <span className="font-semibold text-[#35d6ff]">você</span>{" "}
                  pode fazer parte.
                </p>
              </div>

              {/* SPACING */}
              <div className="h-6 shrink-0 sm:h-8 lg:h-[52px]" />

              {/* ================================================= */}
              {/* FEATURES ROW                                       */}
              {/* Mobile/Tablet: grid 2×2                            */}
              {/* Desktop: flex row 4 colunas                        */}
              {/* ================================================= */}
              <div className="grid w-full max-w-[1180px] shrink-0 grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-0">

                {/* FEATURE ITEM — Explore */}
                <div className="relative flex flex-col items-center pb-5 lg:h-[170px] lg:w-[220px] lg:shrink-0 lg:pb-0">
                  {/* CONNECTOR — desktop only */}
                  <div className="absolute top-[34px] left-[190px] hidden h-px w-[90px] bg-gradient-to-r from-[#35d6ff]/60 to-transparent lg:block" />

                  {/* ICON */}
                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#35d6ff]/50 bg-[#0d1628]/70 shadow-[0_0_24px_rgba(53,214,255,0.25)] sm:h-[64px] sm:w-[64px] lg:h-[68px] lg:w-[68px]">
                    <div className="h-[27px] w-[27px] rounded-full border border-[#35d6ff]/40 sm:h-[31px] sm:w-[31px] lg:h-[34px] lg:w-[34px]" />
                  </div>

                  <div className="h-3 shrink-0 sm:h-4" />

                  <h3 className="font-heading text-center text-[length:var(--text-h4)] leading-none font-semibold tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h3)]">
                    Explore.
                  </h3>

                  <div className="h-2 shrink-0" />

                  <div className="flex flex-col items-center text-center">
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      Novos mundos
                    </p>
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      do conhecimento.
                    </p>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="absolute bottom-0 h-[3px] w-[90px] rounded-full bg-[#35d6ff]/90 shadow-[0_0_18px_rgba(53,214,255,0.9)] sm:w-[110px] lg:w-[120px]" />
                </div>

                {/* FEATURE ITEM — Conquiste */}
                <div className="relative flex flex-col items-center pb-5 lg:h-[170px] lg:w-[220px] lg:shrink-0 lg:pb-0">
                  {/* CONNECTOR — desktop only */}
                  <div className="absolute top-[34px] left-[190px] hidden h-px w-[90px] bg-gradient-to-r from-[#b56cff]/60 to-transparent lg:block" />

                  {/* ICON */}
                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#b56cff]/50 bg-[#0d1628]/70 shadow-[0_0_24px_rgba(181,108,255,0.25)] sm:h-[64px] sm:w-[64px] lg:h-[68px] lg:w-[68px]">
                    <div className="h-[27px] w-[27px] rounded-full border border-[#b56cff]/40 sm:h-[31px] sm:w-[31px] lg:h-[34px] lg:w-[34px]" />
                  </div>

                  <div className="h-3 shrink-0 sm:h-4" />

                  <h3 className="font-heading text-center text-[length:var(--text-h4)] leading-none font-semibold tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h3)]">
                    Conquiste.
                  </h3>

                  <div className="h-2 shrink-0" />

                  <div className="flex flex-col items-center text-center">
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      Conquistas reais
                    </p>
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      que ficam com você.
                    </p>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="absolute bottom-0 h-[3px] w-[90px] rounded-full bg-[#b56cff]/90 shadow-[0_0_18px_rgba(181,108,255,0.9)] sm:w-[110px] lg:w-[120px]" />
                </div>

                {/* FEATURE ITEM — Crie */}
                <div className="relative flex flex-col items-center pb-5 lg:h-[170px] lg:w-[220px] lg:shrink-0 lg:pb-0">
                  {/* CONNECTOR — desktop only */}
                  <div className="absolute top-[34px] left-[190px] hidden h-px w-[90px] bg-gradient-to-r from-[#ffb347]/60 to-transparent lg:block" />

                  {/* ICON */}
                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#ffb347]/50 bg-[#0d1628]/70 shadow-[0_0_24px_rgba(255,179,71,0.25)] sm:h-[64px] sm:w-[64px] lg:h-[68px] lg:w-[68px]">
                    <div className="h-[27px] w-[27px] rounded-full border border-[#ffb347]/40 sm:h-[31px] sm:w-[31px] lg:h-[34px] lg:w-[34px]" />
                  </div>

                  <div className="h-3 shrink-0 sm:h-4" />

                  <h3 className="font-heading text-center text-[length:var(--text-h4)] leading-none font-semibold tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h3)]">
                    Crie.
                  </h3>

                  <div className="h-2 shrink-0" />

                  <div className="flex flex-col items-center text-center">
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      Construa experiências
                    </p>
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      e deixe sua marca.
                    </p>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="absolute bottom-0 h-[3px] w-[90px] rounded-full bg-[#ffb347]/90 shadow-[0_0_18px_rgba(255,179,71,0.9)] sm:w-[110px] lg:w-[120px]" />
                </div>

                {/* FEATURE ITEM — Transforme */}
                <div className="relative flex flex-col items-center pb-5 lg:h-[170px] lg:w-[220px] lg:shrink-0 lg:pb-0">
                  {/* ICON */}
                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#6f8cff]/50 bg-[#0d1628]/70 shadow-[0_0_24px_rgba(111,140,255,0.25)] sm:h-[64px] sm:w-[64px] lg:h-[68px] lg:w-[68px]">
                    <div className="h-[27px] w-[27px] rounded-full border border-[#6f8cff]/40 sm:h-[31px] sm:w-[31px] lg:h-[34px] lg:w-[34px]" />
                  </div>

                  <div className="h-3 shrink-0 sm:h-4" />

                  <h3 className="font-heading text-center text-[length:var(--text-h4)] leading-none font-semibold tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h3)]">
                    Transforme.
                  </h3>

                  <div className="h-2 shrink-0" />

                  <div className="flex flex-col items-center text-center">
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      Impacte vidas e
                    </p>
                    <p className="text-[length:var(--text-body)] leading-[1.2] font-normal text-text-secondary">
                      construa o futuro.
                    </p>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="absolute bottom-0 h-[3px] w-[90px] rounded-full bg-[#6f8cff]/90 shadow-[0_0_18px_rgba(111,140,255,0.9)] sm:w-[110px] lg:w-[120px]" />
                </div>
              </div>

              {/* SPACING */}
              <div className="h-7 shrink-0 sm:h-9 lg:h-[48px]" />

              {/* ================================================= */}
              {/* CTA ROW                                            */}
              {/* Mobile: coluna, full-width com max-w               */}
              {/* sm+: linha lado a lado                             */}
              {/* ================================================= */}
              <div className="flex w-full max-w-[980px] shrink-0 flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5 lg:gap-6">

                {/* PRIMARY CTA */}
                <button className="group relative flex h-[80px] w-full max-w-[500px] shrink-0 items-center gap-4 overflow-hidden rounded-[22px] border border-[#35d6ff]/50 bg-[#101624]/80 px-5 backdrop-blur-[12px] transition-all duration-300 hover:scale-[1.015] sm:h-[88px] sm:gap-5 sm:rounded-[26px] sm:px-6 lg:h-[92px] lg:rounded-[28px] lg:px-7">
                  {/* GLOW */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,214,255,0.22),transparent_72%)]" />
                  {/* BORDER GLOW */}
                  <div className="absolute inset-0 rounded-[22px] shadow-[0_0_40px_rgba(53,214,255,0.28)] sm:rounded-[26px] lg:rounded-[28px]" />

                  {/* ICON */}
                  <div className="relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-[#35d6ff]/40 bg-[#0c1c30]/80 sm:h-[50px] sm:w-[50px] lg:h-[54px] lg:w-[54px]">
                    <div className="h-[19px] w-[19px] rounded-full border border-[#35d6ff]/50 sm:h-[21px] sm:w-[21px] lg:h-[22px] lg:w-[22px]" />
                  </div>

                  {/* TEXT GROUP */}
                  <div className="relative z-10 flex flex-col items-start">
                    <span className="font-heading text-[length:var(--text-body-lg)] leading-none font-semibold tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h4)]">
                      Entrar no Mnenus
                    </span>
                    <span className="mt-1.5 text-[length:var(--text-body)] leading-none font-normal text-text-secondary sm:mt-2">
                      Ver demonstração do protótipo
                    </span>
                  </div>
                </button>

                {/* SECONDARY CTA */}
                <button className="group relative flex h-[72px] w-full max-w-[360px] shrink-0 items-center gap-4 overflow-hidden rounded-[22px] border border-[#b56cff]/40 bg-[#101624]/80 px-5 backdrop-blur-[12px] transition-all duration-300 hover:scale-[1.015] sm:h-[88px] sm:gap-5 sm:rounded-[26px] sm:px-6 lg:h-[92px] lg:rounded-[28px] lg:px-7">
                  {/* GLOW */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,108,255,0.16),transparent_72%)]" />
                  {/* BORDER GLOW */}
                  <div className="absolute inset-0 rounded-[22px] shadow-[0_0_35px_rgba(181,108,255,0.18)] sm:rounded-[26px] lg:rounded-[28px]" />

                  {/* ICON */}
                  <div className="relative z-10 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[11px] border border-[#b56cff]/35 bg-[#171028]/80 sm:h-[46px] sm:w-[46px] sm:rounded-[13px] lg:h-[50px] lg:w-[50px] lg:rounded-[14px]">
                    <div className="h-[16px] w-[16px] rounded-sm border border-[#b56cff]/50 sm:h-[18px] sm:w-[18px] lg:h-[20px] lg:w-[20px]" />
                  </div>

                  {/* TEXT GROUP */}
                  <div className="relative z-10 flex flex-col items-start">
                    <span className="font-heading text-[length:var(--text-body-lg)] leading-none font-medium tracking-[-0.03em] text-text-primary lg:text-[length:var(--text-h4)]">
                      Pitch Deck
                    </span>
                    <span className="mt-1.5 text-[length:var(--text-body-sm)] leading-none font-normal text-text-secondary sm:mt-2">
                      Baixar apresentação
                    </span>
                  </div>
                </button>
              </div>

              {/* SPACING */}
              <div className="h-5 shrink-0 sm:h-7 lg:h-[34px]" />

              {/* ================================================= */}
              {/* FOOTER PHRASE                                      */}
              {/* ================================================= */}
              <div className="flex w-fit shrink-0 items-center justify-center gap-4 px-4 sm:gap-5 sm:px-5">
                {/* LEFT LINE — oculta em mobile */}
                <div className="hidden h-px shrink-0 bg-gradient-to-r from-transparent to-[#35d6ff]/60 sm:block sm:w-[100px] lg:w-[120px]" />

                {/* TEXT */}
                <p className="text-center text-[length:var(--text-body-lg)] leading-none font-normal tracking-[-0.02em] text-text-secondary lg:text-[length:var(--text-h4)]">
                  Vamos construir o futuro juntos.
                </p>

                {/* RIGHT LINE */}
                <div className="hidden h-px shrink-0 bg-gradient-to-l from-transparent to-[#35d6ff]/60 sm:block sm:w-[100px] lg:w-[120px]" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}