"use client";

import { useState } from "react";

const leftCards = [
  {
    title: "Certificado em papel",
    description: "Um pedaço de papel que pode ser perdido ou esquecido.",
    icon: "📄",
  },
  {
    title: "Plataforma que fecha a janela",
    description: "O acesso termina quando você sai da tela.",
    icon: "🪟",
  },
  {
    title: "Você é apenas aluno",
    description: "Você consome o conteúdo e segue instruções.",
    icon: "🎓",
  },
  {
    title: "Histórico preso na instituição",
    description: "Se a plataforma acabar, seu histórico some com ela.",
    icon: "🔒",
  },
];

const rightCards = [
  {
    title: "Conquista verificável on-chain",
    description:
      "Badges digitais únicas, verificáveis por qualquer instituição.",
    accentColor: "#ff4fd8",
    glowColor: "rgba(255,79,216,0.3)",
  },
  {
    title: "Mundo que continua existindo",
    description:
      "Um universo persistente que evolui com você e com outros exploradores.",
    accentColor: "#7b61ff",
    glowColor: "rgba(123,97,255,0.3)",
  },
  {
    title: "Você também é criador",
    description: "Você cria, constrói, ensina e deixa sua marca no mundo.",
    accentColor: "#00d2ff",
    glowColor: "rgba(0,210,255,0.3)",
  },
  {
    title: "Identidade digital portátil",
    description:
      "Seu histórico é seu. Leve, seguro e reconhecido em qualquer lugar.",
    accentColor: "#58a6ff",
    glowColor: "rgba(88,166,255,0.3)",
  },
];

type LeftCardData = (typeof leftCards)[number];
type RightCardData = (typeof rightCards)[number];

const DimCircleIcon = () => (
  <div
    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2a3a5a] bg-[#0a1026] sm:h-[52px] sm:w-[52px]"
  >
    <div className="h-5 w-5 rounded-full border border-[#3a4a6a] sm:h-[22px] sm:w-[22px]" />
  </div>
);

const GlowCircleIcon = ({ color, glow }: { color: string; glow: string }) => (
  <div
    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-[#0a1833] sm:h-[52px] sm:w-[52px]"
    style={{ borderColor: color, boxShadow: `0 0 22px ${glow}` }}
  >
    <div
      className="h-5 w-5 rounded-full border sm:h-[22px] sm:w-[22px]"
      style={{ borderColor: color, boxShadow: `0 0 10px ${glow}` }}
    />
  </div>
);

const LeftCard = ({ card }: { card: LeftCardData }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex min-w-0 flex-1 items-start gap-4 overflow-hidden rounded-[18px] px-4 py-5 transition-all duration-200 sm:items-center sm:gap-5 sm:px-5 md:px-6 lg:min-h-[124px]"
      style={{
        border: `1px solid ${hovered ? "#2a3f6f" : "#172554"}`,
        background: hovered ? "#06102a" : "#040b1d",
        cursor: "default",
      }}
    >
      <div
        className="absolute bottom-[18%] left-0 top-[18%] w-[3px] rounded"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #2a3f6f, transparent)",
          opacity: hovered ? 0.8 : 0.3,
          transition: "opacity 0.25s ease",
        }}
      />

      <DimCircleIcon />

      <div className="min-w-0 flex-1">
        <h3
          className="mb-1.5 font-semibold leading-[1.2] text-[length:var(--text-body)]"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {card.title}
        </h3>
        <p
          className="text-[length:var(--text-caption)] leading-[1.5]"
          style={{
            color: "var(--text-muted)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

const RightCard = ({ card }: { card: RightCardData }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex min-w-0 flex-1 items-start gap-4 overflow-hidden rounded-[18px] px-4 py-5 transition-all duration-200 sm:items-center sm:gap-5 sm:px-5 md:px-6 lg:min-h-[124px]"
      style={{
        border: `1px solid ${hovered ? `${card.accentColor}60` : "#17325f"}`,
        background: "#081126",
        cursor: "default",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at left center, ${card.glowColor} 0%, transparent 65%)`,
          opacity: hovered ? 0.6 : 0.3,
          transition: "opacity 0.25s ease",
        }}
      />

      <div
        className="absolute bottom-[18%] right-0 top-[18%] w-[3px] rounded"
        style={{
          background: `linear-gradient(to bottom, transparent, ${card.accentColor}, transparent)`,
          opacity: hovered ? 0.9 : 0.35,
          transition: "opacity 0.25s ease",
        }}
      />

      <div className="relative z-[1]">
        <GlowCircleIcon color={card.accentColor} glow={card.glowColor} />
      </div>

      <div className="relative z-[1] min-w-0 flex-1">
        <h3
          className="mb-1.5 font-semibold leading-[1.2] text-[length:var(--text-body)]"
          style={{
            color: "var(--text-primary)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {card.title}
        </h3>
        <p
          className="text-[length:var(--text-caption)] leading-[1.5]"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default function SectionSix({ className }: { className?: string }) {
  return (
    <section
      aria-label="Sessao 6"
      className={[
        "relative min-h-[100svh] overflow-hidden bg-background text-text-primary",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {[...Array(28)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: i % 5 === 0 ? 2 : 1,
            height: i % 5 === 0 ? 2 : 1,
            opacity: 0.08 + (i % 4) * 0.04,
            top: `${(i * 37 + 11) % 100}%`,
            left: `${(i * 53 + 7) % 100}%`,
          }}
        />
      ))}

      <div className="mx-auto flex w-full max-w-[1760px] flex-col gap-6 px-4 py-6 sm:px-8 sm:py-8 lg:px-12 xl:px-16">
        <div className="flex shrink-0 flex-col items-center gap-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span
              className="h-[18px] w-[18px] rounded-full border-[1.5px] border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
              aria-hidden="true"
            />

            <p className="text-[length:var(--text-eyebrow)] font-medium tracking-[0.22em] text-[#5bc0eb] sm:tracking-[0.32em]">
              O QUE TORNA ÚNICO
            </p>

            <span
              className="hidden h-px max-w-32 flex-1 bg-gradient-to-r from-[#2ad0ff] to-transparent shadow-[0_0_6px_rgba(42,208,255,0.4)] sm:block"
              aria-hidden="true"
            />
          </div>

          <h2
            className="m-0 text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.05em] sm:text-[length:var(--text-h1)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: "var(--text-primary)" }}>Dois mundos. </span>
            <span
              style={{
                background: "linear-gradient(to right, #5bc0eb, #58a6ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 18px rgba(91,192,235,0.45))",
              }}
            >
              Dois futuros.
            </span>
          </h2>

          <p
            className="m-0 max-w-[38rem] text-[length:var(--text-body)] font-light tracking-[-0.02em]"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Não é evolução. É uma nova forma de aprender.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          <div className="flex min-w-0 flex-col gap-3 rounded-[24px] border border-[#172554] bg-[rgba(4,11,29,0.7)] p-4 backdrop-blur-[12px] sm:p-5 lg:gap-2">
            <div className="flex shrink-0 items-center justify-center gap-3 border-b border-[#172554] pb-3 text-center">
              <div className="h-4 w-4 rounded-full border-[1.5px] border-[#5a6e8e]" />
              <span
                className="text-[length:var(--text-body-sm)] font-medium tracking-[0.18em] text-text-muted sm:tracking-[0.28em]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                EDUCAÇÃO HOJE
              </span>
            </div>

            {leftCards.map((card, i) => (
              <LeftCard key={i} card={card} />
            ))}
          </div>

          <div className="relative flex min-w-0 flex-col gap-3 overflow-hidden rounded-[24px] border border-[#17325f] bg-[rgba(8,17,38,0.7)] p-4 backdrop-blur-[12px] sm:p-5 lg:gap-2">
            <div
              className="absolute left-[10%] right-[10%] top-0 h-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, #33d1ff80, #7b61ff80, transparent)",
              }}
            />

            <div className="flex shrink-0 items-center justify-center gap-3 border-b border-[#1a3a5f] pb-3 text-center">
              <div
                className="h-4 w-4 rounded-full border-[1.5px] border-[#33d1ff]"
                style={{ boxShadow: "0 0 12px rgba(51,209,255,0.5)" }}
              />
              <span
                className="text-[length:var(--text-body-sm)] font-medium tracking-[0.18em] text-cyan-400 sm:tracking-[0.28em]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  textShadow: "0 0 12px rgba(91,192,235,0.4)",
                }}
              >
                MNEMOS-MUNDI
              </span>
            </div>

            {rightCards.map((card, i) => (
              <RightCard key={i} card={card} />
            ))}
          </div>
        </div>

        <div className="flex shrink-0 justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[28px] border border-[#1a3050] bg-[rgba(6,14,36,0.85)] px-4 py-4 text-center backdrop-blur-[16px] sm:px-6 sm:py-5 lg:flex-row lg:gap-5 lg:rounded-full lg:text-left">
            <div
              className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#33d1ff] bg-[rgba(51,209,255,0.06)]"
              style={{ boxShadow: "0 0 16px rgba(51,209,255,0.35)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
                  stroke="#5bc0eb"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="rgba(91,192,235,0.15)"
                />
              </svg>
            </div>

            <span
              className="text-[length:var(--text-body-sm)]"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              O futuro da educação não é assistir conteúdo.
            </span>

            <div className="hidden h-[22px] w-px shrink-0 bg-gradient-to-b from-transparent via-[#2a4a6a] to-transparent lg:block" />

            <span
              className="text-[length:var(--text-body-sm)]"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              É construir uma{" "}
              <span
                style={{
                  color: "#5bc0eb",
                  textShadow: "0 0 12px rgba(91,192,235,0.5)",
                }}
              >
                identidade
              </span>{" "}
              através do{" "}
              <span
                style={{
                  color: "#5bc0eb",
                  textShadow: "0 0 12px rgba(91,192,235,0.5)",
                }}
              >
                conhecimento.
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
