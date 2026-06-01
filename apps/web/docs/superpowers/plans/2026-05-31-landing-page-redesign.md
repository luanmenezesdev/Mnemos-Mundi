# Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current home page with a brand-new landing page that sells Mnemos Mundi as immersive educational infrastructure for institutions and drives users to open the prototype.

**Architecture:** Build a new landing module under `web/components/landing/` and compose the full page from focused section components. Keep the prototype route unchanged, reuse the global brand tokens already defined in `web/app/globals.css`, and verify each slice with `eslint` plus a final production build.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, `next/font`, existing `/mnemos-mundi` route

---

## File Structure

### Files to create

- `web/components/landing/landing-page.tsx`
- `web/components/landing/hero-section.tsx`
- `web/components/landing/problem-section.tsx`
- `web/components/landing/revelation-section.tsx`
- `web/components/landing/experience-section.tsx`
- `web/components/landing/web3-section.tsx`
- `web/components/landing/institutions-section.tsx`
- `web/components/landing/impact-section.tsx`
- `web/components/landing/final-cta-section.tsx`
- `web/docs/superpowers/plans/2026-05-31-landing-page-redesign.md`

### Files to modify

- `web/app/page.tsx`
- `web/app/globals.css`
- `web/app/layout.tsx`

### Responsibilities

- `web/app/page.tsx`: keep the route thin and render only the new landing entry component
- `web/components/landing/landing-page.tsx`: compose section order and own shared page-level background wrappers
- `web/components/landing/*-section.tsx`: one file per section, one responsibility per file
- `web/app/globals.css`: add landing-specific utility classes and motion rules that are reused across sections
- `web/app/layout.tsx`: tighten metadata copy so the page title and description fit the new positioning

## Baseline

Before making changes, confirm the current branch is clean enough to work and that lint passes on the existing project.

- [ ] **Step 1: Check working tree**

Run:

```bash
git status --short
```

Expected: unrelated user changes may exist, but no surprise modifications to the new landing files yet.

- [ ] **Step 2: Confirm current lint baseline**

Run:

```bash
npm run lint
```

Expected: exit code `0`.

## Task 1: Replace the home route with a new landing entry

**Files:**
- Create: `web/components/landing/landing-page.tsx`
- Modify: `web/app/page.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Write the new landing page composer**

Create `web/components/landing/landing-page.tsx`:

```tsx
import { ExperienceSection } from "./experience-section";
import { FinalCtaSection } from "./final-cta-section";
import { HeroSection } from "./hero-section";
import { ImpactSection } from "./impact-section";
import { InstitutionsSection } from "./institutions-section";
import { ProblemSection } from "./problem-section";
import { RevelationSection } from "./revelation-section";
import { Web3Section } from "./web3-section";

export function LandingPage() {
  return (
    <main className="landing-page bg-background text-foreground">
      <HeroSection />
      <ProblemSection />
      <RevelationSection />
      <ExperienceSection />
      <Web3Section />
      <InstitutionsSection />
      <ImpactSection />
      <FinalCtaSection />
    </main>
  );
}
```

- [ ] **Step 2: Replace the route implementation**

Update `web/app/page.tsx` to:

```tsx
import { LandingPage } from "@/components/landing/landing-page";

export default function Home() {
  return <LandingPage />;
}
```

- [ ] **Step 3: Run lint for the new route surface**

Run:

```bash
npm run lint
```

Expected: fail because the imported section files do not exist yet.

- [ ] **Step 4: Commit the route swap scaffold**

```bash
git add web/app/page.tsx web/components/landing/landing-page.tsx
git commit -m "refactor: replace home entry with landing composer"
```

## Task 2: Build the hero, problem, and revelation sections

**Files:**
- Create: `web/components/landing/hero-section.tsx`
- Create: `web/components/landing/problem-section.tsx`
- Create: `web/components/landing/revelation-section.tsx`
- Modify: `web/app/globals.css`
- Test: `npm run lint`

- [ ] **Step 1: Add reusable landing layout helpers**

Append to `web/app/globals.css`:

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

.landing-section {
  position: relative;
  padding-block: clamp(5rem, 8vw, 8rem);
}

.landing-panel {
  border: 1px solid var(--border-soft);
  background: linear-gradient(180deg, rgba(16, 22, 36, 0.88), rgba(10, 16, 30, 0.72));
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: var(--radius-xl);
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
```

- [ ] **Step 2: Create the hero section**

Create `web/components/landing/hero-section.tsx`:

```tsx
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="landing-section min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(91,192,235,0.16),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(157,125,255,0.14),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(244,201,93,0.08),transparent_22%)]" />
      <div className="landing-shell flex min-h-[100svh] flex-col justify-between gap-10 py-6 sm:py-8 lg:py-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-200/50">
              <Image
                src="/images/logo_oficial.png"
                alt="Logo Mnemos Mundi"
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
```

- [ ] **Step 3: Create the problem and revelation sections**

Create `web/components/landing/problem-section.tsx`:

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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,44rem)_minmax(0,1fr)] lg:items-end">
          <div className="space-y-6">
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

          <div className="landing-panel p-6">
            <div className="grid gap-4">
              {problemPoints.map((point) => (
                <div key={point} className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-[length:var(--text-body)] leading-[1.5] text-text-secondary">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Create `web/components/landing/revelation-section.tsx`:

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
        <div className="space-y-10">
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

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verbs.map((verb) => (
              <article key={verb.title} className="landing-panel p-5">
                <p className="font-heading text-[length:var(--text-h4)] text-text-primary">
                  {verb.title}
                </p>
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

- [ ] **Step 4: Run lint on the first narrative slice**

Run:

```bash
npm run lint
```

Expected: fail because the remaining section imports still do not exist, but no syntax errors in the files created in this task.

- [ ] **Step 5: Commit the first section set**

```bash
git add web/app/globals.css web/components/landing/hero-section.tsx web/components/landing/problem-section.tsx web/components/landing/revelation-section.tsx
git commit -m "feat: add landing hero and narrative sections"
```

## Task 3: Build experience, Web3, and institutions sections

**Files:**
- Create: `web/components/landing/experience-section.tsx`
- Create: `web/components/landing/web3-section.tsx`
- Create: `web/components/landing/institutions-section.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Create the experience section**

Create `web/components/landing/experience-section.tsx`:

```tsx
const experienceSteps = [
  "A instituição organiza um mundo de aprendizagem.",
  "O aluno entra em um ambiente temático e escolhe uma trilha.",
  "Objetos, quizzes e desafios transformam conteúdo em interação.",
  "Progressão desbloqueia reconhecimento e novos caminhos.",
  "O histórico continua existindo além da sessão.",
];

const institutionExamples = [
  "Escolas podem transformar Astronomia em uma jornada explorável.",
  "Cursinhos podem criar revisões imersivas com retenção mais ativa.",
  "Universidades podem representar competências e progressão acadêmica em ambientes persistentes.",
];

export function ExperienceSection() {
  return (
    <section id="como-funciona" className="landing-section">
      <div className="landing-shell space-y-8">
        <div className="max-w-[52rem] space-y-5">
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
            A EXPERIÊNCIA
          </p>
          <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
            Não é uma aula em 3D. É uma jornada de aprendizagem que pode ser habitada.
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="grid gap-4">
            {experienceSteps.map((step, index) => (
              <article key={step} className="landing-panel flex gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5bc0eb]/40 text-[length:var(--text-body-sm)] text-[#5bc0eb]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                  {step}
                </p>
              </article>
            ))}
          </div>

          <div className="landing-panel p-6">
            <p className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
              Aplicações institucionais
            </p>
            <div className="mt-5 grid gap-4">
              {institutionExamples.map((example) => (
                <div key={example} className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                  {example}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create the Web3 and institutions sections**

Create `web/components/landing/web3-section.tsx`:

```tsx
const pillars = [
  {
    title: "Smart Contracts",
    text: "Automatizam emissão e registro de conquistas com confiança institucional.",
  },
  {
    title: "Soulbound Badges",
    text: "Mantêm reconhecimento vinculado à trajetória do aluno, sem transferência artificial.",
  },
  {
    title: "Knowledge Crystals",
    text: "Transformam progressão em mecânica visível e útil dentro do ecossistema.",
  },
  {
    title: "IPFS + Polygon",
    text: "Reforçam persistência, portabilidade e verificabilidade do histórico.",
  },
];

export function Web3Section() {
  return (
    <section className="landing-section">
      <div className="landing-shell space-y-8">
        <div className="max-w-[48rem] space-y-5">
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
            WEB3 NA PRÁTICA
          </p>
          <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
            A tecnologia existe para fazer o aprendizado permanecer.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="landing-panel p-5">
              <p className="font-heading text-[length:var(--text-h4)] text-text-primary">
                {pillar.title}
              </p>
              <p className="mt-3 text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Create `web/components/landing/institutions-section.tsx`:

```tsx
const audiences = [
  {
    title: "Escolas",
    text: "Aumentam engajamento, pertencimento e curiosidade com experiências imersivas mais memoráveis.",
  },
  {
    title: "Cursinhos",
    text: "Criam trilhas de revisão, prática e retenção que transformam preparação em progressão visível.",
  },
  {
    title: "Universidades",
    text: "Representam competências, jornadas e identidade acadêmica em ambientes persistentes.",
  },
];

const comparisons = [
  ["Conteúdo estático", "Mundos exploráveis"],
  ["Presença temporária", "Histórico persistente"],
  ["Consumo passivo", "Progressão ativa"],
  ["Certificado isolado", "Conquista verificável"],
];

export function InstitutionsSection() {
  return (
    <section className="landing-section">
      <div className="landing-shell space-y-8">
        <div className="max-w-[52rem] space-y-5">
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
            VALOR PARA INSTITUIÇÕES
          </p>
          <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
            Uma plataforma. Múltiplos modelos educacionais. A mesma lógica de descoberta.
          </h2>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="landing-panel p-5">
              <p className="font-heading text-[length:var(--text-h4)] text-text-primary">
                {audience.title}
              </p>
              <p className="mt-3 text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                {audience.text}
              </p>
            </article>
          ))}
        </div>

        <div className="landing-panel overflow-hidden">
          <div className="grid md:grid-cols-2">
            {comparisons.map(([current, future]) => (
              <div key={current} className="grid grid-cols-2 border-b border-white/8 last:border-b-0">
                <div className="px-5 py-4 text-[length:var(--text-body)] text-text-muted">
                  {current}
                </div>
                <div className="border-l border-white/8 px-5 py-4 text-[length:var(--text-body)] text-text-primary">
                  {future}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Run lint on the middle slice**

Run:

```bash
npm run lint
```

Expected: fail because `impact-section.tsx` and `final-cta-section.tsx` still do not exist, but all current files parse successfully.

- [ ] **Step 4: Commit the middle section set**

```bash
git add web/components/landing/experience-section.tsx web/components/landing/web3-section.tsx web/components/landing/institutions-section.tsx
git commit -m "feat: add landing experience and institution sections"
```

## Task 4: Build impact and final CTA, then tighten metadata

**Files:**
- Create: `web/components/landing/impact-section.tsx`
- Create: `web/components/landing/final-cta-section.tsx`
- Modify: `web/app/layout.tsx`
- Test: `npm run lint`

- [ ] **Step 1: Create the impact section**

Create `web/components/landing/impact-section.tsx`:

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
        <div className="landing-panel px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
          <div className="max-w-[56rem] space-y-6">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
              IMPACTO
            </p>
            <h2 className="font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
              Não estamos apenas criando uma plataforma. Estamos propondo uma nova linguagem para a educação.
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {impactPillars.map((pillar) => (
                <div key={pillar} className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-5 text-[length:var(--text-body)] leading-[1.55] text-text-secondary">
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create the final CTA section and update metadata**

Create `web/components/landing/final-cta-section.tsx`:

```tsx
import Link from "next/link";

const stack = ["React", "Unity", "Solidity", "Polygon", "IPFS"];

export function FinalCtaSection() {
  return (
    <section className="landing-section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,192,235,0.14),transparent_24%),radial-gradient(circle_at_68%_75%,rgba(157,125,255,0.16),transparent_22%)]" />
      <div className="landing-shell space-y-8">
        <div className="landing-panel p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(16rem,24rem)] xl:items-end">
            <div className="space-y-6">
              <p className="text-[length:var(--text-eyebrow)] tracking-[0.26em] text-[#5bc0eb]">
                TECNOLOGIA E PRÓXIMO PASSO
              </p>
              <h2 className="max-w-[14ch] font-alt-heading text-[length:var(--text-mobile-h1)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary lg:text-[length:var(--text-h1)]">
                Educação não precisa ser apenas acessada. Ela pode ser habitada.
              </h2>
              <p className="max-w-[42rem] text-[length:var(--text-body-lg)] leading-[1.6] text-text-secondary">
                Mnemos Mundi combina experiência web, ambientes imersivos e persistência verificável para abrir uma nova camada de valor para instituições educacionais.
              </p>
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
            </div>

            <div className="space-y-3">
              <p className="text-[length:var(--text-body-sm)] uppercase tracking-[0.22em] text-text-muted">
                Stack
              </p>
              <div className="grid grid-cols-2 gap-3">
                {stack.map((item) => (
                  <div key={item} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4 text-center text-[length:var(--text-body)] text-text-secondary">
                    {item}
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

Update `web/app/layout.tsx` metadata to:

```tsx
export const metadata: Metadata = {
  title: "Mnemos Mundi | Educação Imersiva em Mundos Exploráveis",
  description:
    "Mnemos Mundi é uma infraestrutura para escolas, cursinhos e universidades criarem experiências educacionais imersivas com progressão e conquistas persistentes.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};
```

- [ ] **Step 3: Run lint after the full component graph exists**

Run:

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 4: Commit the closing slice**

```bash
git add web/components/landing/impact-section.tsx web/components/landing/final-cta-section.tsx web/app/layout.tsx
git commit -m "feat: finish landing impact and conversion flow"
```

## Task 5: Final verification and polish

**Files:**
- Modify: `web/components/landing/*.tsx` as needed
- Modify: `web/app/globals.css` as needed
- Test: `npm run lint`
- Test: `npm run build`

- [ ] **Step 1: Run full production verification**

Run:

```bash
npm run build
```

Expected: PASS with a successful Next.js production build.

- [ ] **Step 2: Fix any responsive or build issues with minimal edits**

If build or layout issues appear, limit the edits to the affected landing files. Typical adjustments should look like:

```tsx
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
  {items.map((item) => (
    <article key={item.title} className="landing-panel min-h-full p-5">
      ...
    </article>
  ))}
</div>
```

or:

```css
@media (prefers-reduced-motion: reduce) {
  .landing-page * {
    scroll-behavior: auto;
    transition: none !important;
    animation: none !important;
  }
}
```

- [ ] **Step 3: Re-run verification after fixes**

Run:

```bash
npm run lint && npm run build
```

Expected: both commands PASS.

- [ ] **Step 4: Commit the verified landing**

```bash
git add web/app/page.tsx web/app/layout.tsx web/app/globals.css web/components/landing
git commit -m "feat: launch new Mnemos Mundi landing page"
```

## Spec Coverage Check

- Hero with institution-first positioning: covered by Task 2 `hero-section.tsx`
- Problem framing as systemic educational failure: covered by Task 2 `problem-section.tsx`
- Category revelation with the four verbs: covered by Task 2 `revelation-section.tsx`
- Demonstration of the navigable experience: covered by Task 3 `experience-section.tsx`
- Web3 as trust and permanence layer: covered by Task 3 `web3-section.tsx`
- Multi-institution value framing: covered by Task 3 `institutions-section.tsx`
- Impact and future-facing vision: covered by Task 4 `impact-section.tsx`
- Compact stack plus final prototype CTA: covered by Task 4 `final-cta-section.tsx`
- No background media added, but layout ready for it: covered by Task 2 `hero-section.tsx` and Task 4 `final-cta-section.tsx`

## Self-Review Notes

- No placeholders remain in task steps
- File paths are explicit
- The plan uses the existing app structure and avoids relying on legacy section components
- Verification matches the actual repo tooling: `eslint` and `next build`
