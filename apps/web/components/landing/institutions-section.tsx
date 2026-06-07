"use client";

import { useState } from "react";

const audiences = [
  {
    id: "escolas",
    title: "Escolas",
    text: "Transformam disciplinas em experiências memoráveis.",
  },
  {
    id: "cursinhos",
    title: "Cursinhos",
    text: "Transformam revisão em progressão visível.",
  },
  {
    id: "universidades",
    title: "Universidades",
    text: "Transformam competências em identidade acadêmica persistente.",
  },
];

const comparisons = [
  {
    id: "conteudo",
    current: "Conteúdo estático",
    future: "Mundos exploráveis",
    image: "/images/institutions/conteudo.webp",
  },
  {
    id: "presenca",
    current: "Presença temporária",
    future: "Histórico persistente",
    image: "/images/institutions/presenca.webp",
  },
  {
    id: "consumo",
    current: "Consumo passivo",
    future: "Progressão ativa",
    image: "/images/institutions/consumo.webp",
  },
  {
    id: "certificado",
    current: "Certificado isolado",
    future: "Conquista verificável",
    image: "/images/institutions/certificado.webp",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ComparisonAccordion
// Tablet/Desktop: acordeão horizontal (expande à esquerda → direita)
// Mobile: acordeão vertical (expande de cima → baixo)
// ─────────────────────────────────────────────────────────────────────────────
function ComparisonAccordion() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ── HORIZONTAL — sm+ ─────────────────────────────────────────────── */}
      <div className="hidden w-full h-full gap-2 sm:flex">
        {comparisons.map((item, i) => {
          const isActive = active === i;
          const num = String(i + 1).padStart(2, "0");

          return (
            <div
              key={item.id}
              onClick={() => setActive(i)}
              className={[
                "relative overflow-hidden rounded-[18px] cursor-pointer border",
                "transition-[flex,border-color] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isActive
                  ? "border-[#5bc0eb]/30"
                  : "border-white/8 hover:border-white/20",
              ].join(" ")}
              style={{ flex: isActive ? 4 : 1 }}
            >
              {/* ── IMAGEM DE FUNDO ────────────────────────────────────── */}
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />

              {/* Linha superior de acento (ativo) */}
              <div
                className={[
                  "absolute top-0 left-0 right-0 h-px transition-opacity duration-500",
                  "bg-gradient-to-r from-transparent via-[#5bc0eb]/50 to-transparent",
                  isActive ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />

              {/* ── COLAPSADO: número + "current" vertical ─────────────── */}
              <div
                className={[
                  "absolute inset-0 flex flex-col items-center justify-center gap-3",
                  "transition-opacity duration-300",
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100",
                ].join(" ")}
              >
                <span className="text-[9px] tracking-[0.26em] text-[#5bc0eb]/50">
                  {num}
                </span>
                <p
                  className="text-[12px] font-heading text-text-muted whitespace-nowrap leading-none"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {item.current}
                </p>
              </div>

              {/* ── EXPANDIDO: layout editorial ─────────────────────────── */}
              <div
                className={[
                  "absolute inset-0 px-7 pt-7 pb-5 flex flex-col justify-between",
                  "transition-all duration-400",
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none",
                ].join(" ")}
                style={{ transitionDelay: isActive ? "180ms" : "0ms" }}
              >
                <div>
                  <span className="text-[10px] tracking-[0.26em] text-[#5bc0eb]">
                    {num}
                  </span>
                  <div className="mt-5 grid grid-cols-[0.9fr_auto_1.1fr] items-center gap-5">
                    {/* Modelo atual */}
                    <div className="min-w-0 space-y-1.5">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-text-muted">
                        Modelo atual
                      </p>
                      <p className="text-[14px] leading-[1.25] text-text-muted/90">
                        {item.current}
                      </p>
                    </div>

                    {/* Transição */}
                    <div className="flex items-center gap-2">
                      <div className="h-px w-7 bg-[#5bc0eb]/20" />
                      <span className="text-[10px] uppercase tracking-[0.28em] text-[#5bc0eb]">
                        vira
                      </span>
                      <div className="h-px w-7 bg-[#5bc0eb]/20" />
                    </div>

                    {/* Futuro */}
                    <div className="min-w-0 space-y-1.5">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-[#5bc0eb]/70">
                        Novo modelo
                      </p>
                      <p className="text-[15px] leading-[1.2] font-semibold text-text-primary">
                        {item.future}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-px w-full bg-white/[0.1]">
                  <div
                    className="h-full bg-[#5bc0eb] transition-[width] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      width: `${((i + 1) / comparisons.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── VERTICAL — mobile only ───────────────────────────────────────── */}
      <div className="flex flex-col gap-2 sm:hidden">
        {comparisons.map((item, i) => {
          const isActive = active === i;
          const num = String(i + 1).padStart(2, "0");

          return (
            <div
              key={item.id}
              onClick={() => setActive(i)}
              className={[
                "relative overflow-hidden rounded-[16px] border cursor-pointer",
                "transition-[border-color] duration-300",
                isActive ? "border-[#5bc0eb]/30" : "border-white/8",
              ].join(" ")}
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              {/* Cabeçalho */}
              <div
                className={[
                  "relative flex items-center justify-between px-4 transition-[padding] duration-300",
                  isActive ? "py-4" : "py-3",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[9px] tracking-[0.26em] text-[#5bc0eb]/60">
                    {num}
                  </span>
                  <p
                    className={[
                      "text-[13px] leading-none transition-colors duration-300",
                      isActive ? "text-text-primary" : "text-text-muted",
                    ].join(" ")}
                  >
                    {item.current}
                  </p>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={[
                    "shrink-0 transition-transform duration-400",
                    isActive ? "rotate-180" : "rotate-0",
                  ].join(" ")}
                >
                  <path
                    d="M3 5l4 4 4-4"
                    stroke={isActive ? "#5bc0eb" : "rgba(255,255,255,0.3)"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Conteúdo expandido */}
              <div
                className={[
                  "relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive
                    ? "max-h-[220px] h-[190px] opacity-100"
                    : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <div className="px-4 pt-1">
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                    {/* Atual */}
                    <div className="min-w-0 space-y-1">
                      <p className="text-[8px] uppercase tracking-[0.2em] text-text-muted">
                        Atual
                      </p>
                      <p className="text-[12px] leading-[1.2] text-text-muted">
                        {item.current}
                      </p>
                    </div>

                    {/* Vira */}
                    <div className="flex items-center gap-1.5">
                      <div className="h-px w-4 bg-[#5bc0eb]/20" />
                      <span className="text-[8px] uppercase tracking-[0.22em] text-[#5bc0eb]">
                        vira
                      </span>
                      <div className="h-px w-4 bg-[#5bc0eb]/20" />
                    </div>

                    {/* Futuro */}
                    <div className="min-w-0 space-y-1">
                      <p className="text-[8px] uppercase tracking-[0.2em] text-[#5bc0eb]/70">
                        Novo
                      </p>
                      <p className="text-[12px] leading-[1.2] font-medium text-text-primary">
                        {item.future}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Barra de progresso */}
                <div className="absolute left-4 right-4 bottom-5 h-px bg-white/[0.1]">
                  <div
                    className="h-full bg-[#5bc0eb]"
                    style={{
                      width: `${((i + 1) / comparisons.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// InstitutionsSection
// ─────────────────────────────────────────────────────────────────────────────
export function InstitutionsSection() {
  const [activePanel, setActivePanel] = useState<"audiences" | "comparisons">(
    "audiences",
  );

  return (
    <section id="para-instituicoes" className="landing-section relative">
      <img
        src="/images/institutions/institution-value-bg.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/100" />
      <div className="landing-shell">
        <div className="landing-stage landing-stage--dense justify-center gap-7 py-8 max-sm:justify-start max-sm:gap-5 max-sm:px-5 max-sm:py-8 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-4 [@media(max-height:840px)]:py-4">
          {/* ── Cabeçalho da seção ─────────────────────────────────────── */}
          <div className="max-w-[52rem] space-y-4 max-sm:space-y-3 [@media(max-height:840px)]:space-y-3">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              VALOR PARA INSTITUIÇÕES
            </p>
            <h2 className="font-alt-heading text-[30px] font-light leading-[0.92] tracking-[-0.04em] text-text-primary sm:text-[length:var(--text-mobile-section)] lg:text-[length:var(--text-section)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Uma plataforma. Múltiplos modelos educacionais. A mesma lógica de
              descoberta.
            </h2>
            <p className="max-w-[42rem] text-[15px] leading-[1.45] text-text-secondary sm:text-[length:var(--text-body-sm)] lg:text-[length:var(--text-body)] lg:leading-[1.5] [@media(max-height:840px)]:leading-[1.4]">
              A mesma infraestrutura pode ser adaptada para diferentes contextos
              educacionais sem perder continuidade.
            </p>
          </div>

          {/* ── MOBILE: pill toggle + painéis ─────────────────────────── */}
          <div className="sm:hidden space-y-4">
            {/* Pill segmentado com indicador deslizante */}
            <div className="relative flex rounded-full bg-white/[0.05] p-[3px] border border-white/[0.08]">
              {/* Indicador deslizante */}
              <div
                className="absolute top-[3px] bottom-[3px] rounded-full bg-[#5bc0eb]/15 border border-[#5bc0eb]/30 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  left: 3,
                  width: "calc(50% - 3px)",
                  transform:
                    activePanel === "comparisons"
                      ? "translateX(100%)"
                      : "translateX(0)",
                }}
              />
              {(
                [
                  { id: "audiences", label: "Audiências" },
                  { id: "comparisons", label: "Comparações" },
                ] as const
              ).map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActivePanel(id)}
                  className={[
                    "relative z-10 flex-1 py-2 text-[11px] uppercase tracking-[0.2em]",
                    "transition-colors duration-300",
                    activePanel === id ? "text-[#5bc0eb]" : "text-text-muted",
                  ].join(" ")}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Painel: Audiências */}
            {activePanel === "audiences" && (
              <div className="grid grid-cols-1 gap-3">
                {audiences.map((audience) => (
                  <article
                    key={audience.id}
                    className="rounded-[18px] border flex flex-row border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="flex w-[4rem] shrink-0 h-full items-center justify-center rounded-[18px] overflow-hidden">
                      <img
                        src={`/images/institutions/${audience.id}.webp`}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="mx-4 border-l border-white/8" />
                    <div className="mt-3.5 space-y-1.5">
                      <h3 className="font-heading text-[length:var(--text-body)] text-text-primary">
                        {audience.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-[1.35] text-text-secondary">
                        {audience.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Painel: Comparações */}
            {activePanel === "comparisons" && <ComparisonAccordion />}
          </div>

          {/* ── TABLET / DESKTOP: split side-by-side ─────────────────── */}
          <div className="hidden sm:flex sm:flex-row sm:gap-0 [@media(max-height:840px)]:gap-4">
            {/* LEFT — 30% */}
            <div className="sm:w-[30%] sm:shrink-0 sm:pr-6 space-y-3 [@media(max-height:840px)]:space-y-2.5">
              <h3 className="text-[12px] uppercase tracking-[0.22em] text-text-muted">
                Onde a plataforma encaixa
              </h3>
              <div className="grid grid-cols-1 gap-3 [@media(max-height:840px)]:gap-2">
                {audiences.map((audience) => (
                  <article
                    key={audience.id}
                    className="rounded-[18px] border flex flex-row border-white/8 bg-white/[0.03] p-4 sm:p-3"
                  >
                    <div className="flex w-[4rem] sm:w-10 sm:shrink-0 h-full items-center justify-center rounded-[18px] overflow-hidden">
                      <img
                        src={`/images/institutions/${audience.id}.webp`}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="mx-4 sm:mx-2.5 border-l border-white/8 [@media(max-height:840px)]:mx-3.5" />
                    <div className="mt-3.5 sm:mt-2 space-y-1.5 [@media(max-height:840px)]:mt-2.5 [@media(max-height:840px)]:space-y-1">
                      <h3 className="font-heading text-[length:var(--text-body)] text-text-primary sm:text-[length:var(--text-body-lg)]">
                        {audience.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-[1.35] text-text-secondary sm:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:text-[length:var(--text-caption)]">
                        {audience.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="w-px shrink-0 self-stretch bg-white/8" />

            {/* RIGHT — flex-1, preenche altura disponível */}
            <div className="flex-1 space-y-3 sm:pl-6 sm:flex sm:flex-col [@media(max-height:840px)]:space-y-2.5">
              <p className="sm:shrink-0 text-[12px] uppercase tracking-[0.22em] text-text-muted">
                Da plataforma fechada ao mundo persistente
              </p>
              <div className="sm:flex-1 sm:min-h-0">
                <ComparisonAccordion />
              </div>
            </div>
          </div>

          {/* ── Rodapé da seção ──────────────────────────────────────── */}
          <div className="max-w-[44rem] pt-1 [@media(max-height:840px)]:pt-0">
            <p className="mt-6 font-alt-heading text-[18px] font-light leading-[0.95] tracking-[-0.03em] text-text-primary sm:mt-2 sm:text-[length:var(--text-mobile-h2)] sm:leading-[1.02] lg:text-[length:var(--text-h3)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Uma única infraestrutura. Inúmeras jornadas possíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
