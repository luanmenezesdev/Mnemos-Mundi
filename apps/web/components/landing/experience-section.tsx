"use client";

import { useState } from "react";
import { IconButton } from "./icon-button";


const experienceSlides = [
  {
    id: "criar-mundo",

    eyebrow: "Etapa 01",

    title: "Criar o mundo",

    description: "Toda jornada começa com uma disciplina.",

    image: "/images/experience/criar-mundo.webp",
  },

  {
    id: "organizar-conteudos",

    eyebrow: "Etapa 02",

    title: "Organizar conteúdos",

    description:
      "O conteúdo deixa de ser uma lista de arquivos. Ele passa a fazer parte do ambiente.",

    image: "/images/experience/organizar-conteudos.webp",
  },

  {
    id: "guiar-exploracao",

    eyebrow: "Etapa 03",

    title: "Guiar a exploração",

    description: "Cada aluno escolhe sua rota.",

    image: "/images/experience/guiar-exploracao.webp",
  },

  {
    id: "medir-progresso",

    eyebrow: "Etapa 04",

    title: "Medir progresso",

    description: "Aprender deixa rastros visíveis.",

    image: "/images/experience/medir-progresso.webp",
  },

  {
    id: "manter-vivo",

    eyebrow: "Etapa 05",

    title: "Manter vivo",

    description: "A aula termina. O conhecimento permanece.",

    image: "/images/experience/manter-vivo.webp",
  },
];

const institutionExamples = [
  { id: "escolas", text: "Escolas" },

  { id: "cursinhos", text: "Cursinhos" },

  { id: "universidades", text: "Universidades" },

  { id: "treinamentos", text: "Treinamentos corporativos" },
];

function ArrowLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[1em] w-[1em]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[1em] w-[1em]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = experienceSlides[activeIndex];

  const goToPreviousSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? experienceSlides.length - 1 : currentIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === experienceSlides.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <section id="como-funciona" className="landing-section relative">
      <img
        src="/images/experience/experience-bg.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

      <div className="landing-shell">
        <div className="landing-stage justify-center gap-8 py-8 pb-14 max-sm:justify-start max-sm:gap-5 max-sm:px-5 max-sm:py-8 max-sm:pb-14 [@media(max-height:840px)]:justify-start [@media(max-height:840px)]:gap-5 [@media(max-height:840px)]:py-5">
          <div className="max-w-[52rem] space-y-3.5 max-sm:space-y-3 [@media(max-height:840px)]:space-y-2.5">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              A EXPERIÊNCIA
            </p>

            <h2 className="max-w-[18ch] font-alt-heading text-[30px] font-light leading-[0.94] tracking-[-0.04em] text-text-primary sm:max-w-[20ch] sm:text-[length:var(--text-mobile-section)] lg:text-[length:var(--text-section)] [@media(max-height:840px)]:text-[length:var(--text-mobile-h2)]">
              Transforme qualquer disciplina em um ambiente vivo de
              aprendizagem.
            </h2>

            <p className="max-w-[38rem] text-[length:var(--text-body)] leading-[1.5] text-text-secondary max-sm:text-[length:var(--text-body-sm)] max-sm:leading-[1.45] [@media(max-height:840px)]:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.4]">
              A instituição transforma uma matéria, curso ou treinamento em um
              ambiente navegável, com missões, conteúdos, interações e progresso
              contínuo.
            </p>
          </div>

          <div className="landing-panel mx-auto mt-4 grid w-full max-w-[88rem] overflow-hidden p-0 sm:mt-0 lg:grid-cols-[2fr_1fr]">
            <div className="relative min-h-[250px] overflow-hidden bg-black/40 sm:min-h-[340px] lg:min-h-[400px] xl:min-h-[520px]">
              {experienceSlides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.title}
                  className={[
                    "absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out",

                    index === activeIndex
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0",
                  ].join(" ")}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/5 to-black/45" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

              <IconButton
                onClick={goToPreviousSlide}
                ariaLabel="Slide anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-5"
              >
                <ArrowLeftIcon />
              </IconButton>

              <IconButton
                onClick={goToNextSlide}
                ariaLabel="Próximo slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 sm:right-5"
              >
                <ArrowRightIcon />
              </IconButton>

              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 text-[length:var(--text-caption)] text-text-secondary backdrop-blur-md sm:bottom-5 sm:left-5">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(experienceSlides.length).padStart(2, "0")}
              </div>
            </div>

            <aside className="flex min-h-[250px] flex-col justify-between border-t border-white/8 bg-[#050b16]/85 p-5 sm:min-h-[300px] sm:p-7 lg:min-h-full lg:border-l lg:border-t-0 xl:p-8 [@media(max-height:840px)]:p-5">
              <div className="space-y-5 [@media(max-height:840px)]:space-y-4">
                <p className="text-[12px] uppercase tracking-[0.24em] text-[#5bc0eb] sm:text-[13px]">
                  {activeSlide.eyebrow}
                </p>

                <div className="space-y-3.5">
                  <h3 className="font-heading text-[28px] leading-[0.98] tracking-[-0.03em] text-text-primary sm:text-[32px] lg:text-[34px] [@media(max-height:840px)]:text-[28px]">
                    {activeSlide.title}
                  </h3>

                  <p className="text-[length:var(--text-body-sm)] leading-[1.55] text-text-secondary sm:text-[length:var(--text-body)] [@media(max-height:840px)]:text-[length:var(--text-body-sm)] [@media(max-height:840px)]:leading-[1.45]">
                    {activeSlide.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4 [@media(max-height:840px)]:mt-6">
                <div className="flex items-center gap-2.5">
                  {experienceSlides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Ir para ${slide.title}`}
                      className={[
                        "h-2 rounded-full transition-all duration-300",

                        index === activeIndex
                          ? "w-10 bg-[#5bc0eb] shadow-[0_0_18px_rgba(91,192,235,0.45)]"
                          : "w-5 bg-white/15 hover:bg-white/35",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* <div className="mx-auto flex w-full max-w-[68rem] flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/8 pt-3 text-[12px] text-text-secondary sm:text-[length:var(--text-body-sm)]">

<span className="uppercase tracking-[0.22em] text-text-muted">

Funciona para

</span>

  

{institutionExamples.map((example) => (

<span key={example.id} className="inline-flex items-center gap-3">

<span className="text-[#5bc0eb]">•</span>

<span>{example.text}</span>

</span>

))}

</div> */}
        </div>
      </div>
    </section>
  );
}
