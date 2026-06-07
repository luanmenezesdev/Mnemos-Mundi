const impactContrasts = [
  {
    id: "presenca",
    from: "Ausência",
    to: "Presença",
    text: "Aprender deixa de acontecer à distância. Passa a ser vivido com contexto, atmosfera e envolvimento.",
    image: "/images/impact/presenca.webp",
  },
  {
    id: "descoberta",
    from: "Repetição",
    to: "Descoberta",
    text: "O aluno deixa de apenas revisar conteúdo. Passa a construir significado ao explorar e conectar ideias.",
    image: "/images/impact/descoberta.webp",
  },
  {
    id: "persistencia",
    from: "Esquecimento",
    to: "Persistência",
    text: "O aprendizado deixa de desaparecer no fim da aula. Passa a continuar existindo como jornada e identidade.",
    image: "/images/impact/persistencia.webp",
  },
];

export function ImpactSection() {
  return (
    <section className="landing-section relative">
      <img
        src="/images/impact/impact-bg.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/80" />
      <div className="landing-shell">
        <div className="landing-stage justify-center gap-4 px-5 py-6 pb-8 max-sm:justify-start max-sm:gap-3 max-sm:py-5 max-sm:pb-8 sm:[@media(max-height:840px)]:justify-start sm:[@media(max-height:840px)]:gap-4 sm:[@media(max-height:840px)]:py-4">
          <div className="mx-auto flex w-full max-w-[68rem] flex-col items-center gap-2.5 text-center sm:mt-2 sm:gap-5 sm:[@media(max-height:840px)]:gap-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              IMPACTO
            </p>
            <h2 className="font-alt-heading text-center text-[29px] font-light leading-[0.92] tracking-[-0.055em] text-text-primary sm:text-[42px] lg:text-[58px] xl:text-[56px] sm:[@media(max-height:840px)]:text-[42px]">
              Não estamos apenas criando uma plataforma. Estamos propondo uma
              nova linguagem para a educação.
            </h2>
            <p className="mx-auto max-w-[34rem] text-center text-[12.5px] leading-[1.35] text-text-secondary sm:text-[length:var(--text-body-sm)] lg:text-[length:var(--text-body)] lg:leading-[1.5] sm:[@media(max-height:840px)]:leading-[1.4]">
              Uma linguagem em que presença, descoberta e persistência deixam de
              ser exceção e passam a moldar a experiência de aprender.
            </p>
          </div>

          <div className="mx-auto mt-3 flex w-full max-w-[68rem] flex-col items-center gap-3 sm:mt-0 sm:gap-5 max-lg:max-w-full sm:[@media(max-height:840px)]:gap-4">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />

            <ul
              className="
  flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-4
  px-[max(1.25rem,calc((100vw-320px)/2))]
  [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
  lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0
  [@media(max-height:840px)]:gap-3
"
            >
              {impactContrasts.map((contrast, i) => (
                <li
                  key={contrast.id}
                  className="
    group relative flex min-h-[390px] w-[min(82vw,320px)] shrink-0 snap-center flex-col overflow-hidden
    rounded-[22px] border border-[#5bc0eb]/55 bg-[#06101f]/70
    sm:min-h-[430px] sm:w-[330px]
    lg:w-auto lg:min-h-[430px]
    sm:[@media(max-height:840px)]:min-h-[360px]
    sm:[@media(max-height:840px)]:rounded-[20px]
  "
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(91, 192, 235, 0.45), 0 0 22px rgba(91, 192, 235, 0.28), inset 0 0 24px rgba(91, 192, 235, 0.08)",
                  }}
                >
                  {/* Glow externo da borda */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-[22px] opacity-80 [@media(max-height:840px)]:rounded-[20px]"
                    style={{
                      boxShadow:
                        "0 0 18px rgba(91, 192, 235, 0.55), 0 0 42px rgba(91, 192, 235, 0.22)",
                    }}
                  />

                  {/* Borda interna mais premium */}
                  <div className="pointer-events-none absolute inset-0 z-20 rounded-[22px] border border-[#7fe4ff]/50 [@media(max-height:840px)]:rounded-[20px]" />

                  {/* Reflexo fino no topo */}
                  <div className="pointer-events-none absolute left-6 right-6 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#9ff1ff]/80 to-transparent" />

                  {/* Glow no canto superior direito */}
                  <div className="pointer-events-none absolute right-[-40px] top-[-40px] z-10 h-32 w-32 rounded-full bg-[#5bc0eb]/20 blur-3xl" />
                  {/* Fundo base do card */}
                  <div className="absolute inset-0 bg-[#06101f]" />

                  {/* Imagem holográfica no rodapé */}
                  <img
                    src={contrast.image}
                    alt=""
                    className="absolute bottom-0 left-0 h-[56%] z-1 w-full object-cover object-bottom opacity-90"
                  />

                  {/* Faz a imagem desaparecer no topo */}
                  <div className="absolute inset-x-0 bottom-0 h-[70%] z-2  bg-gradient-to-b from-[#06101f] via-[#06101f]/70 to-transparent" />

                  {/* Mantém o topo limpo para o texto */}
                  <div className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-[#06101f] via-[#06101f]/95 to-[#06101f]/55" />

                  {/* Glow sutil vindo da imagem */}
                  <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[radial-gradient(circle_at_bottom,rgba(91,192,235,0.22),transparent_60%)]" />

                  {/* Conteúdo textual */}
                  <div className="relative z-10 px-4 pt-4 sm:px-5 sm:pt-5 sm:[@media(max-height:840px)]:px-4 sm:[@media(max-height:840px)]:pt-4">
                    <p className="font-alt-heading text-[20px] font-light tracking-[-0.02em] text-text-primary sm:text-[22px] sm:[@media(max-height:840px)]:text-[18px]">
                      {String(i + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-0.5 text-[9px] uppercase tracking-[0.24em] text-text-muted">
                      {contrast.from}
                    </p>

                    <div className="my-3 flex items-center [@media(max-height:840px)]:my-2.5">
                      <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-[#5bc0eb]/70 to-[#9ff1ff]" />

                      <div
                        className="relative h-px w-5 bg-[#9ff1ff]"
                        style={{
                          boxShadow:
                            "0 0 8px rgba(91, 192, 235, 0.95), 0 0 18px rgba(91, 192, 235, 0.6)",
                        }}
                      >
                        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#9ff1ff]" />
                      </div>
                    </div>

                    <p className="text-[15px] font-light tracking-[-0.01em] text-text-secondary">
                      {contrast.from} →
                    </p>
                    <p className="mt-0.5 font-alt-heading text-[29px] font-light tracking-[-0.04em] text-[#5bc0eb] sm:text-[32px] sm:[@media(max-height:840px)]:text-[26px]">
                      {contrast.to}
                    </p>

                    <p className="mt-2 text-[12.5px] leading-[1.35] text-text-secondary sm:mt-2.5 sm:text-[13px] sm:leading-[1.4] sm:[@media(max-height:840px)]:mt-2">
                      {contrast.text}
                    </p>
                  </div>

                  {/* Espaçador: reserva área para a imagem aparecer no rodapé */}
                  <div className="h-[150px] flex-shrink-0 sm:h-[190px] sm:[@media(max-height:840px)]:h-[145px]" />
                </li>
              ))}
            </ul>

            <div className="hidden h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent sm:block" />
          </div>

          <div className="mx-auto max-w-[760px] text-center">
            <p className="mt-3 font-alt-heading text-[18px] font-light leading-[1.1] tracking-[-0.025em] text-text-primary/90 sm:mt-2 sm:hidden">
              Quando o aprendizado deixa rastros, ele passa a fazer parte da
              identidade.
            </p>
            <p className="hidden font-alt-heading text-[22px] font-light leading-[1.15] tracking-[-0.025em] text-text-primary/90 sm:mt-2 sm:block lg:text-[25px] xl:text-[28px] [@media(max-height:840px)]:text-[22px]">
              Quando o aprendizado deixa rastros, ele deixa de ser uma
              atividade. E passa a fazer parte da identidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
