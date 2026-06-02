# Landing Fullscreen Scroll Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the Mnemos Mundi landing page so every section behaves like a full-screen cinematic chapter with free scrolling, stronger viewport occupation, and subtle reveal motion across desktop, tablet, and mobile.

**Architecture:** Keep the existing landing route and section file split, then add a shared chapter-layout layer in `web/app/globals.css` plus per-section structural refactors. The implementation should avoid scroll snap, preserve the current narrative, and add reduced-motion-safe reveal behavior using lightweight client-side section wrappers where needed.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, CSS keyframes/transitions, existing `web/components/landing/*`

---

## File Structure

### Files to create

- `web/components/landing/scroll-reveal-section.tsx`
- `web/docs/superpowers/plans/2026-05-31-landing-fullscreen-scroll-refinement.md`

### Files to modify

- `web/app/globals.css`
- `web/components/landing/landing-page.tsx`
- `web/components/landing/hero-section.tsx`
- `web/components/landing/problem-section.tsx`
- `web/components/landing/revelation-section.tsx`
- `web/components/landing/experience-section.tsx`
- `web/components/landing/web3-section.tsx`
- `web/components/landing/institutions-section.tsx`
- `web/components/landing/impact-section.tsx`
- `web/components/landing/final-cta-section.tsx`

### Responsibilities

- `web/app/globals.css`: define full-screen chapter primitives, motion classes, and reduced-motion fallbacks
- `web/components/landing/scroll-reveal-section.tsx`: own viewport entry detection and toggled CSS states for chapter reveals
- `web/components/landing/landing-page.tsx`: compose sections through the reveal wrapper
- section files: reorganize content into explicit viewport-stage layouts with density tuned per chapter

## Baseline

Before changing the fullscreen behavior, confirm the current landing still passes its existing verification.

- [ ] **Step 1: Confirm working tree**

Run:

```bash
git status --short
```

Expected: either clean or only changes related to this refinement.

- [ ] **Step 2: Confirm baseline lint**

Run:

```bash
npm run lint
```

Expected: PASS.

## Task 1: Add chapter layout primitives and reveal wrapper

**Files:**
- Create: `web/components/landing/scroll-reveal-section.tsx`
- Modify: `web/app/globals.css`
- Modify: `web/components/landing/landing-page.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Create the reveal wrapper component**

Create `web/components/landing/scroll-reveal-section.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollRevealSection({
  children,
  className,
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={[
        "landing-reveal-section",
        isVisible ? "landing-reveal-section--visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
```

- [ ] **Step 2: Replace current landing layout primitives**

Update the landing-related block in `web/app/globals.css` to:

```css
.landing-page {
  background:
    radial-gradient(circle at top, rgba(91, 192, 235, 0.12), transparent 28%),
    linear-gradient(180deg, #050816 0%, #07101f 38%, #081425 100%);
}

.landing-shell {
  position: relative;
  width: 100%;
  max-width: var(--content-max-width);
  margin-inline: auto;
  padding-inline: var(--section-padding-x);
}

.landing-reveal-section {
  position: relative;
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 720ms ease,
    transform 900ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.landing-reveal-section--visible {
  opacity: 1;
  transform: translateY(0);
}

.landing-section {
  position: relative;
  min-height: 100svh;
}

.landing-stage {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1.5rem, 2vw, 2.5rem);
  padding-block: clamp(1.25rem, 2.5vw, 2.5rem);
}

.landing-stage--spread {
  justify-content: space-between;
}

.landing-stage--airy {
  gap: clamp(2rem, 3vw, 3.5rem);
}

.landing-stage--dense {
  gap: clamp(1rem, 1.5vw, 1.75rem);
}

.landing-panel {
  border: 1px solid var(--border-soft);
  background: linear-gradient(180deg, rgba(16, 22, 36, 0.88), rgba(10, 16, 30, 0.72));
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: var(--radius-xl);
}

.landing-card-grid {
  display: grid;
  gap: clamp(0.75rem, 1vw, 1rem);
}

@media (min-width: 640px) {
  .landing-shell {
    padding-inline: var(--section-padding-x-sm);
  }
}

@media (min-width: 1024px) {
  .landing-shell {
    padding-inline: var(--section-padding-x-lg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .landing-reveal-section,
  .landing-reveal-section--visible {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

- [ ] **Step 3: Wrap the landing sections in reveal containers**

Update `web/components/landing/landing-page.tsx` to:

```tsx
import { ExperienceSection } from "./experience-section";
import { FinalCtaSection } from "./final-cta-section";
import { HeroSection } from "./hero-section";
import { ImpactSection } from "./impact-section";
import { InstitutionsSection } from "./institutions-section";
import { ProblemSection } from "./problem-section";
import { RevelationSection } from "./revelation-section";
import { ScrollRevealSection } from "./scroll-reveal-section";
import { Web3Section } from "./web3-section";

export function LandingPage() {
  return (
    <main className="landing-page bg-background text-foreground">
      <HeroSection />
      <ScrollRevealSection>
        <ProblemSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <RevelationSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <ExperienceSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <Web3Section />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <InstitutionsSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <ImpactSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <FinalCtaSection />
      </ScrollRevealSection>
    </main>
  );
}
```

- [ ] **Step 4: Run lint after the new infrastructure lands**

Run:

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 5: Commit the chapter infrastructure**

```bash
git add web/app/globals.css web/components/landing/landing-page.tsx web/components/landing/scroll-reveal-section.tsx
git commit -m "feat: add fullscreen chapter layout infrastructure"
```

## Task 2: Refactor hero, problem, and revelation into full-screen chapters

**Files:**
- Modify: `web/components/landing/hero-section.tsx`
- Modify: `web/components/landing/problem-section.tsx`
- Modify: `web/components/landing/revelation-section.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Convert the hero to an explicit viewport stage**

Update `web/components/landing/hero-section.tsx` to:

```tsx
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="landing-section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(91,192,235,0.16),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(157,125,255,0.14),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(244,201,93,0.08),transparent_22%)]" />
      <div className="landing-shell">
        <div className="landing-stage landing-stage--spread">
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

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,52rem)_minmax(0,24rem)]">
            <div className="space-y-8 self-center">
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
            </div>

            <div className="landing-panel min-h-[18rem] self-stretch p-6 sm:min-h-[22rem] lg:min-h-[32rem]">
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

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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

            <p className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
              Role para a próxima descoberta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Recompose problem and revelation as framed scenes**

Update `web/components/landing/problem-section.tsx` to:

```tsx
const problemPoints = [
  "Conteúdo demais, experiência de menos.",
  "Aprendizado que termina quando a aula acaba.",
  "Baixo senso de descoberta e pertencimento.",
  "Instituições sem linguagem nativa para educação imersiva.",
];

export function ProblemSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--airy">
          <div className="max-w-[44rem] space-y-6">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              O PROBLEMA
            </p>
            <h2 className="max-w-[13ch] font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              A educação ainda entrega conteúdo. Raramente entrega presença.
            </h2>
            <p className="max-w-[38rem] text-[length:var(--text-body-lg)] leading-[1.6] text-text-secondary">
              O problema não é acesso à informação. É a dificuldade de transformar conhecimento em algo vivido, memorável e contínuo.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] xl:items-end">
            <div className="landing-panel p-6">
              <p className="max-w-[34rem] text-[length:var(--text-body-lg)] leading-[1.55] text-text-secondary">
                Instituições seguem com poucas ferramentas para transformar aprendizagem em descoberta, pertencimento e continuidade.
              </p>
            </div>

            <div className="landing-panel p-5">
              <ul className="landing-card-grid">
                {problemPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4 text-[length:var(--text-body)] leading-[1.45] text-text-secondary"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="max-w-[42rem] text-[length:var(--text-body)] leading-[1.55] text-text-muted">
            O conhecimento não deveria desaparecer quando a aula termina.
          </p>
        </div>
      </div>
    </section>
  );
}
```

Update `web/components/landing/revelation-section.tsx` to:

```tsx
const verbs = [
  { title: "Aprender", text: "Conhecimento deixa de ser estático e passa a ter forma." },
  { title: "Explorar", text: "Alunos entram em mundos temáticos e descobrem conexões ativamente." },
  { title: "Criar", text: "Instituições desenham trilhas, ambientes e experiências próprias." },
  { title: "Conquistar", text: "Progressão e reconhecimento tornam-se visíveis, persistentes e verificáveis." },
];

export function RevelationSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--airy">
          <div className="max-w-[56rem] space-y-5">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              A REVELAÇÃO
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              Mnemos Mundi é uma plataforma para instituições criarem mundos educacionais imersivos.
            </h2>
            <p className="max-w-[44rem] text-[length:var(--text-body-lg)] leading-[1.6] text-text-secondary">
              Aqui, aprender deixa rastros, desbloqueia progressão e gera conquistas que podem permanecer com o aluno.
            </p>
          </div>

          <div className="landing-card-grid md:grid-cols-2 xl:grid-cols-4">
            {verbs.map((verb) => (
              <article key={verb.title} className="landing-panel p-5">
                <h3 className="font-heading text-[length:var(--text-h4)] text-text-primary">
                  {verb.title}
                </h3>
                <p className="mt-3 text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                  {verb.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Run lint after the first chapter refactor**

Run:

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 4: Commit the opening chapters**

```bash
git add web/components/landing/hero-section.tsx web/components/landing/problem-section.tsx web/components/landing/revelation-section.tsx
git commit -m "feat: convert opening landing sections to fullscreen chapters"
```

## Task 3: Refactor experience, Web3, and institutions for chapter density

**Files:**
- Modify: `web/components/landing/experience-section.tsx`
- Modify: `web/components/landing/web3-section.tsx`
- Modify: `web/components/landing/institutions-section.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Compact the experience chapter**

Update `web/components/landing/experience-section.tsx` to:

```tsx
const experienceSteps = [
  { id: "organiza-mundo", text: "A instituição organiza um mundo de aprendizagem." },
  { id: "entra-trilha", text: "O aluno entra em um ambiente temático e escolhe uma trilha." },
  { id: "objetos-quizzes-desafios", text: "Objetos, quizzes e desafios transformam conteúdo em interação." },
  { id: "progressao-desbloqueia", text: "Progressão desbloqueia reconhecimento e novos caminhos." },
  { id: "historico-permanece", text: "O histórico continua existindo além da sessão." },
];

const institutionExamples = [
  { id: "astronomia", text: "Escolas podem transformar Astronomia em uma jornada explorável." },
  { id: "revisoes-imersivas", text: "Cursinhos podem criar revisões imersivas com retenção mais ativa." },
  { id: "competencias-persistentes", text: "Universidades podem representar competências e progressão acadêmica em ambientes persistentes." },
];

export function ExperienceSection() {
  return (
    <section id="como-funciona" className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--dense">
          <div className="max-w-[52rem] space-y-5">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              A EXPERIÊNCIA
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              Não é uma aula em 3D. É uma jornada de aprendizagem que pode ser habitada.
            </h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:items-center">
            <ol className="landing-card-grid">
              {experienceSteps.map((step, index) => (
                <li key={step.id} className="landing-panel flex gap-4 p-4 sm:p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5bc0eb]/40 text-[length:var(--text-body-sm)] text-[#5bc0eb]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-[length:var(--text-body)] leading-[1.5] text-text-secondary">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="landing-panel p-6">
              <h3 className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
                Aplicações institucionais
              </h3>
              <div className="mt-5 landing-card-grid">
                {institutionExamples.map((example) => (
                  <div
                    key={example.id}
                    className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4 text-[length:var(--text-body)] leading-[1.5] text-text-secondary"
                  >
                    {example.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Tighten Web3 and institutions into viewport chapters**

Update `web/components/landing/web3-section.tsx` to:

```tsx
const pillars = [
  {
    id: "smart-contracts",
    title: "Smart Contracts",
    text: "Automatizam emissão e registro de conquistas com confiança institucional.",
  },
  {
    id: "soulbound-badges",
    title: "Soulbound Badges",
    text: "Mantêm reconhecimento vinculado à trajetória do aluno, sem transferência artificial.",
  },
  {
    id: "knowledge-crystals",
    title: "Knowledge Crystals",
    text: "Transformam progressão em mecânica visível e útil dentro do ecossistema.",
  },
  {
    id: "ipfs-polygon",
    title: "IPFS + Polygon",
    text: "Reforçam persistência, portabilidade e verificabilidade do histórico.",
  },
];

export function Web3Section() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--dense">
          <div className="max-w-[48rem] space-y-5">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              WEB3 NA PRÁTICA
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              A tecnologia existe para fazer o aprendizado permanecer.
            </h2>
          </div>

          <div className="landing-card-grid md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <article key={pillar.id} className="landing-panel p-5">
                <h3 className="font-heading text-[length:var(--text-h4)] text-text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[length:var(--text-body)] leading-[1.5] text-text-secondary">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

Update `web/components/landing/institutions-section.tsx` to:

```tsx
const audiences = [
  {
    id: "escolas",
    title: "Escolas",
    text: "Aumentam engajamento, pertencimento e curiosidade com experiências imersivas mais memoráveis.",
  },
  {
    id: "cursinhos",
    title: "Cursinhos",
    text: "Criam trilhas de revisão, prática e retenção que transformam preparação em progressão visível.",
  },
  {
    id: "universidades",
    title: "Universidades",
    text: "Representam competências, jornadas e identidade acadêmica em ambientes persistentes.",
  },
];

const comparisons = [
  { id: "conteudo", current: "Conteúdo estático", future: "Mundos exploráveis" },
  { id: "presenca", current: "Presença temporária", future: "Histórico persistente" },
  { id: "consumo", current: "Consumo passivo", future: "Progressão ativa" },
  { id: "certificado", current: "Certificado isolado", future: "Conquista verificável" },
];

export function InstitutionsSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--dense">
          <div className="max-w-[52rem] space-y-5">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              VALOR PARA INSTITUIÇÕES
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              Uma plataforma. Múltiplos modelos educacionais. A mesma lógica de descoberta.
            </h2>
          </div>

          <div className="landing-card-grid xl:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience.id} className="landing-panel p-5">
                <h3 className="font-heading text-[length:var(--text-h4)] text-text-primary">
                  {audience.title}
                </h3>
                <p className="mt-3 text-[length:var(--text-body)] leading-[1.5] text-text-secondary">
                  {audience.text}
                </p>
              </article>
            ))}
          </div>

          <div className="landing-panel overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/8">
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-[length:var(--text-caption)] uppercase tracking-[0.18em] text-text-muted sm:px-5 sm:py-4"
                  >
                    Modelo atual
                  </th>
                  <th
                    scope="col"
                    className="border-l border-white/8 px-4 py-3 text-left text-[length:var(--text-caption)] uppercase tracking-[0.18em] text-text-muted sm:px-5 sm:py-4"
                  >
                    Com Mnemos Mundi
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison) => (
                  <tr key={comparison.id} className="border-b border-white/8 last:border-b-0">
                    <td className="px-4 py-3 text-[length:var(--text-body-sm)] text-text-muted sm:px-5 sm:py-4 sm:text-[length:var(--text-body)]">
                      {comparison.current}
                    </td>
                    <td className="border-l border-white/8 px-4 py-3 text-[length:var(--text-body-sm)] text-text-primary sm:px-5 sm:py-4 sm:text-[length:var(--text-body)]">
                      {comparison.future}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Run lint after the dense chapter refactor**

Run:

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 4: Commit the middle chapters**

```bash
git add web/components/landing/experience-section.tsx web/components/landing/web3-section.tsx web/components/landing/institutions-section.tsx
git commit -m "feat: tighten landing mid-sections into fullscreen chapters"
```

## Task 4: Refactor impact and final CTA into cinematic closing scenes

**Files:**
- Modify: `web/components/landing/impact-section.tsx`
- Modify: `web/components/landing/final-cta-section.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Open up the impact chapter**

Update `web/components/landing/impact-section.tsx` to:

```tsx
const impactPillars = [
  "Experiências educacionais imersivas mais acessíveis",
  "Aprendizagem mais próxima de descoberta real",
  "Progressão que não desaparece ao fim da aula",
];

export function ImpactSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell">
        <div className="landing-stage landing-stage--airy">
          <div className="landing-panel px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
            <div className="max-w-[56rem] space-y-6">
              <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
                IMPACTO
              </p>
              <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
                Não estamos apenas criando uma plataforma. Estamos propondo uma nova linguagem para a educação.
              </h2>
              <ul className="landing-card-grid md:grid-cols-3">
                {impactPillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-5 text-[length:var(--text-body)] leading-[1.55] text-text-secondary"
                  >
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Make the final CTA the second hero**

Update `web/components/landing/final-cta-section.tsx` to:

```tsx
import Link from "next/link";

const stack = ["React", "Unity", "Solidity", "Polygon", "IPFS"];

export function FinalCtaSection() {
  return (
    <section className="landing-section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,192,235,0.14),transparent_24%),radial-gradient(circle_at_68%_75%,rgba(157,125,255,0.16),transparent_22%)]" />
      <div className="landing-shell">
        <div className="landing-stage landing-stage--spread">
          <div className="max-w-[58rem] space-y-6 self-center">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              TECNOLOGIA E PRÓXIMO PASSO
            </p>
            <h2 className="max-w-[14ch] font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              Educação não precisa ser apenas acessada. Ela pode ser habitada.
            </h2>
            <p className="max-w-[42rem] text-[length:var(--text-body-lg)] leading-[1.6] text-text-secondary">
              Mnemos Mundi combina experiência web, ambientes imersivos e persistência verificável para abrir uma nova camada de valor para instituições educacionais.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] xl:items-end">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/mnemos-mundi"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#5bc0eb] bg-[#5bc0eb14] px-6 text-[length:var(--text-body)] font-semibold text-text-primary"
              >
                Abrir protótipo
              </Link>
              <a
                href="#top"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-[length:var(--text-body)] font-medium text-text-secondary"
              >
                Voltar ao início
              </a>
            </div>

            <div className="landing-panel p-5">
              <p className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
                Stack
              </p>
              <ul className="mt-4 landing-card-grid grid-cols-2">
                {stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4 text-center text-[length:var(--text-body)] text-text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Run lint after the closing chapters**

Run:

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 4: Commit the closing chapters**

```bash
git add web/components/landing/impact-section.tsx web/components/landing/final-cta-section.tsx
git commit -m "feat: refine landing closing chapters"
```

## Task 5: Full verification and polish

**Files:**
- Modify: `web/app/globals.css` as needed
- Modify: `web/components/landing/*.tsx` as needed
- Test: `npm run lint`
- Test: `npm run build`

- [ ] **Step 1: Run production verification**

Run:

```bash
npm run build
```

Expected: PASS. If the sandbox blocks Google Fonts, rerun outside the sandbox and confirm the real build result.

- [ ] **Step 2: Apply only minimal fixes if verification reveals concrete issues**

Examples of acceptable fixes:

```css
.landing-stage {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1.25rem, 2vw, 2rem);
  padding-block: clamp(1rem, 2vw, 2rem);
}
```

or:

```tsx
<div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] xl:items-end">
  ...
</div>
```

- [ ] **Step 3: Re-run verification**

Run:

```bash
npm run lint && npm run build
```

Expected: both commands PASS.

- [ ] **Step 4: Commit the verified fullscreen refinement**

```bash
git add web/app/globals.css web/components/landing
git commit -m "feat: refine landing fullscreen scroll behavior"
```

## Spec Coverage Check

- Full-screen chapter behavior for all sections: covered by Task 1 global primitives and Tasks 2-4 section refactors
- Scroll remains free, not snap-based: covered by Task 1 reveal wrapper and absence of scroll-snap primitives
- Subtle cinematic motion: covered by Task 1 reveal classes and reduced-motion handling
- Hero, revelation, and impact as airy chapters: covered by Tasks 2 and 4
- Dense sections compacted to fit viewport chapters: covered by Task 3
- Mobile support for fullscreen behavior: covered by Tasks 1-4 and final verification in Task 5
- No change to `/mnemos-mundi` prototype route behavior: preserved by scope, only landing files touched

## Self-Review Notes

- The plan stays focused on one refinement and does not reopen the landing narrative
- No placeholders remain in tasks
- File paths match the current codebase
- The only new file is the reveal wrapper; the rest is a controlled refactor of existing landing files
