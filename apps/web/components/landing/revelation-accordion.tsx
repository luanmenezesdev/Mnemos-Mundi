"use client";

import { useState } from "react";

const verbs = [
  {
    title: "Sala de Aula",
    icon: "01",
    content: "A aprendizagem acontece durante a aula.",
    // after: "Conhecimento vivido em ambientes exploráveis.",
    image: "/images/revelation/classroom.webp",
  },
  {
    title: "Portal",
    icon: "02",
    content: "O conhecimento deixa de ser um conteúdo e passa a ser um lugar.",
    // after: "Descobrir conexões por conta própria.",
    image: "/images/revelation/portal.webp",
  },
  {
    title: "Mundo",
    icon: "03",
    content: "O aluno não assiste. Ele explora.",
    // after: "Desenhar trilhas, mundos e rituais próprios.",
    image: "/images/revelation/world.webp",
  },
  {
    title: "Conquistar",
    icon: "04",
    content: "Notas que desaparecem.",
    // after: "Conquistas que permanecem com o aluno.",
    image: "/images/revelation/legacy.webp",
  },
];

export function VerbAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex h-[500px] w-full gap-3 max-sm:h-[420px]">
      {verbs.map((verb, i) => {
        const isActive = active === i;

        return (
          <div
            key={verb.title}
            onClick={() => setActive(i)}
            className={[
              "relative overflow-hidden rounded-[28px] cursor-pointer border",
              "transition-[flex,border-color] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
              isActive
                ? "border-[#5bc0eb]/30"
                : "border-white/[0.08] hover:border-white/20",
            ].join(" ")}
            style={{ flex: isActive ? 5 : 1 }}
          >
            {/* ── IMAGEM DE FUNDO ──────────────────────────────────────── */}
            <img
              src={verb.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            {/* placeholder: grade sutil */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(91,192,235,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(91,192,235,0.4) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* placeholder: label central — remova quando tiver a imagem */}
            <div
              className={[
                "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                isActive ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/20 select-none">
                Imagem
              </p>
            </div>

            {/* ── OVERLAY GRADIENTE ────────────────────────────────────── */}
            {/* esquerda escura (texto) → direita transparente (imagem respira) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />

            {/* ── LINHA SUPERIOR (ativo) ───────────────────────────────── */}
            <div
              className={[
                "absolute top-0 left-0 right-0 h-px transition-opacity duration-500",
                "bg-gradient-to-r from-transparent via-[#5bc0eb]/50 to-transparent",
                isActive ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />

            {/* ── ESTADO COLAPSADO: título vertical ────────────────────── */}
            <div
              className={[
                "absolute inset-0 flex flex-col items-center justify-center gap-5",
                "transition-opacity duration-300",
                isActive ? "opacity-0 pointer-events-none" : "opacity-100",
              ].join(" ")}
            >
              <span className="text-[10px] tracking-[0.26em] text-[#5bc0eb]/50">
                {verb.icon}
              </span>
              <p
                className="font-heading text-[15px] text-text-primary whitespace-nowrap"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {verb.title}
              </p>
            </div>

            {/* ── ESTADO EXPANDIDO: layout editorial ───────────────────── */}
            <div
              className={[
                "absolute inset-0 p-7 flex flex-col justify-between transition-all duration-400",
                isActive
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 pointer-events-none",
              ].join(" ")}
              style={{ transitionDelay: isActive ? "220ms" : "0ms" }}
            >
              {/* TOPO: ícone + título + linha + textos */}
              <div className="max-w-[55%]">
                <span className="text-[11px] tracking-[0.26em] text-[#5bc0eb]">
                  {verb.icon}
                </span>

                <h3 className="mt-2 font-heading text-[30px] leading-[1] text-text-primary">
                  {verb.title}
                </h3>

                {/* linha de acento */}
                <div className="mt-3 h-px w-10 bg-[#5bc0eb]" />

                <div className="mt-5 space-y-3">
                  <div>
                    {/* <p className="mb-1 text-[10px] uppercase tracking-[0.26em] text-text-muted">
                      Antes
                    </p> */}
                    <p className="mb-1 w-[20ch] text-[16px] leading-[1.6] text-text-primary">
                      {verb.content}
                    </p>
                  </div>
                </div>
              </div>

              {/* FUNDO: contador + barra de progresso */}
              <div>
                <p className="mb-2 text-[11px] tracking-[0.22em]">
                  <span className="text-[#5bc0eb]">{verb.icon}</span>
                  <span className="text-white/30">
                    {" "}
                    / {String(verbs.length).padStart(2, "0")}
                  </span>
                </p>
                <div className="h-px w-full bg-white/[0.12]">
                  <div
                    className="h-full bg-[#5bc0eb] transition-[width] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{ width: `${((i + 1) / verbs.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
