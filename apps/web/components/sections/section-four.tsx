"use client";

import React from "react";

const journeyCards = [
  {
    step: "01",
    title: "Lucas entra\nno campus",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#5bc0eb",
    orbColor: "rgba(57,200,255,0.28)",
    orbGlow: "rgba(57,200,255,0.18)",
    borderColor: "rgba(91,192,235,0.25)",
  },
  {
    step: "02",
    title: "Ele escolhe\nAstronomia",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#5bc0eb",
    orbColor: "rgba(57,200,255,0.28)",
    orbGlow: "rgba(57,200,255,0.18)",
    borderColor: "rgba(91,192,235,0.25)",
  },
  {
    step: "03",
    title: "Um quiz aparece\nao lado de Saturno",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#9d7dff",
    orbColor: "rgba(139,107,255,0.28)",
    orbGlow: "rgba(139,107,255,0.18)",
    borderColor: "rgba(157,125,255,0.25)",
  },
  {
    step: "04",
    title: "Ele acerta e ganha\nKnowledge Crystals",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#f4c95d",
    orbColor: "rgba(255,179,71,0.28)",
    orbGlow: "rgba(255,179,71,0.18)",
    borderColor: "rgba(244,201,93,0.25)",
  },
  {
    step: "05",
    title: "Tudo e registrado\nna blockchain",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#5bc0eb",
    orbColor: "rgba(57,200,255,0.28)",
    orbGlow: "rgba(57,200,255,0.18)",
    borderColor: "rgba(91,192,235,0.25)",
  },
  {
    step: "06",
    title: "E o mundo continua\nse expandindo",
    description: "Descricao da etapa em jornada viva de conhecimento.",
    accent: "#7bd389",
    orbColor: "rgba(123,211,137,0.28)",
    orbGlow: "rgba(123,211,137,0.18)",
    borderColor: "rgba(123,211,137,0.25)",
  },
];

type JourneyCardData = (typeof journeyCards)[number];

function JourneyCard({ card, index }: { card: JourneyCardData; index: number }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        borderRadius: "20px",
        border: `1px solid ${hovered ? card.accent + "50" : card.borderColor}`,
        background: hovered ? "rgba(20,30,60,0.75)" : "rgba(14,20,50,0.55)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: "20px 16px",
        textAlign: "center",
        transition: "border-color 0.25s ease, background 0.25s ease, transform 0.2s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Step badge */}
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: `1px solid ${card.accent}55`,
          background: "rgba(27,47,85,0.85)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: card.accent,
            letterSpacing: "0.04em",
          }}
        >
          {card.step}
        </span>
      </div>

      {/* Orb visual */}
      <div
        style={{
          width: "100%",
          maxWidth: "110px",
          aspectRatio: "1 / 1",
          borderRadius: "16px",
          border: "1px solid rgba(125,220,255,0.2)",
          background: "rgba(16,28,68,0.7)",
          position: "relative",
          overflow: "hidden",
          boxShadow: hovered ? `0 0 24px ${card.orbGlow}` : "none",
          transition: "box-shadow 0.25s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "55%",
              height: "55%",
              borderRadius: "50%",
              background: card.orbColor,
              transition: "transform 0.3s ease",
              transform: hovered ? "scale(1.15)" : "scale(1)",
            }}
          />
        </div>
      </div>

      {/* Title */}
      <p
        style={{
          whiteSpace: "pre-line",
          color: card.accent,
          fontWeight: 600,
          fontSize: "clamp(12px, 1.8vw, 14px)",
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {card.title}
      </p>

      {/* Description */}
      <p
        style={{
          color: "rgba(160,185,230,0.75)",
          fontSize: "clamp(11px, 1.5vw, 12px)",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {card.description}
      </p>
    </article>
  );
}

export function SectionFour({ className }: { className?: string }) {
  const sectionClassName = ["relative min-h-[100svh] overflow-hidden bg-background text-foreground", className]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .section-four-header { animation: fadeUp 0.6s ease both; }
        .section-four-card   { animation: fadeUp 0.5s ease both; }

        .section-four-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 640px) {
          .section-four-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (min-width: 900px) {
          .section-four-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }

        .section-four-heading {
          font-size: clamp(2rem, 5vw, 3.5rem);
        }
        @media (min-width: 1280px) {
          .section-four-heading { font-size: clamp(3rem, 4.5vw, 4.5rem); }
        }
      `}</style>

      <section
        aria-labelledby="section-four-heading"
        className={sectionClassName}
      >
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-15%",
            left: "-10%",
            width: "60%",
            height: "60%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(42,130,220,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="page-shell relative z-10 flex min-h-[100svh] flex-col px-4 py-6 sm:px-6 sm:py-8 md:px-10 lg:px-16 lg:py-12">
          <div className="flex flex-1 flex-col justify-center">
            <div
              style={{
                width: "100%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "32px",}}
            >
              {/* ── Header ── */}
              <header
                className="section-four-header"
                style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}
              >
                {/* Eyebrow */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      border: "1px solid #33d1ff",
                      boxShadow: "0 0 10px rgba(51,209,255,0.45)",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    className="text-[length:var(--text-eyebrow)] font-medium tracking-[0.22em] text-[#5bc0eb] sm:tracking-[0.32em]"
                  >
                    EXPERIÊNCIA
                  </p>
                </div>

                {/* Heading */}
                <h2
                  id="section-four-heading"
                  className="text-[length:var(--text-mobile-h1)]"
                  style={{
                    fontWeight: 300,
                    lineHeight: 0.96,
                    letterSpacing: "-0.04em",
                    margin: 0,
                    color: "#e8f0ff",
                  }}
                >
                  <span style={{ display: "block" }}>Aprender aqui e</span>
                  <span style={{ display: "block" }}>
                    <span
                      style={{
                        background: "linear-gradient(90deg, #5bc0eb, #9d7dff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      viver
                    </span>
                    <span> o conhecimento.</span>
                  </span>
                </h2>

                {/* Separator */}
                <div
                  aria-hidden="true"
                  style={{
                    height: "1px",
                    width: "min(320px, 100%)",
                    background: "linear-gradient(to right, #2ad0ff, transparent)",
                  }}
                />

                {/* Body copy */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <p
                    style={{
                      fontSize: "space-y-1 text-[length:var(--text-body)] leading-[1.4] text-text-secondary lg:text-[length:var(--text-body-md)] lg:leading-[1.32]",
                      lineHeight: 1.6,
                      color: "rgba(190,215,255,0.7)",
                      margin: 0,
                      maxWidth: "480px",
                    }}
                  >
                    Lucas entra no Mnemos Mundi. Escolhe Astronomia. Responde,
                    conquista e deixa seu legado registrado na blockchain.
                  </p>
                  <p
                    style={{
                      fontSize: "space-y-1 text-[length:var(--text-body)] leading-[1.4] text-text-secondary lg:text-[length:var(--text-body-md)] lg:leading-[1.32]",
                      lineHeight: 1.6,
                      fontWeight: 600,
                      color: "#5bc0eb",
                      margin: 0,
                      textShadow: "0 0 8px rgba(91,192,235,0.4)",
                    }}
                  >
                    Para sempre.
                  </p>
                </div>
              </header>

              {/* ── Connector line (lg+) ── */}
              <div aria-hidden="true" style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "44px",
                    left: "8%",
                    right: "8%",
                    height: "1px",
                    background: "linear-gradient(to right, transparent, rgba(42,208,255,0.25), transparent)",
                    pointerEvents: "none",
                  }}
                />

                {/* ── Cards grid ── */}
                <div className="section-four-grid">
                  {journeyCards.map((card, i) => (
                    <div
                      key={card.step}
                      className="section-four-card"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <JourneyCard card={card} index={i} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
