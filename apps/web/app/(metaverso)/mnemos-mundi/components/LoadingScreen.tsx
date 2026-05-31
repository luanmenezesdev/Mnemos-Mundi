import { useEffect, useState } from "react";

const STEPS = [
  "Inicializando núcleo...",
  "Carregando texturas estelares...",
  "Sincronizando portais...",
  "Abrindo portal...",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 8 + 2;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setProgress(100);
        setStepIdx(STEPS.length - 1);
        setTimeout(onDone, 600);
        return;
      }
      setProgress(p);
      setStepIdx(Math.min(STEPS.length - 1, Math.floor((p / 100) * STEPS.length)));
    }, 220);
    return () => clearInterval(id);
  }, [onDone]);

  const circumference = 2 * Math.PI * 54;
  const dash = (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Atmospheric gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-portal)" }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(91,192,235,0.18), transparent 60%), radial-gradient(ellipse at 50% 40%, rgba(157,125,255,0.14), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center animate-fade-in">
        {/* Logo mark */}
        <div className="relative">
          <div className="absolute inset-0 -m-6 rounded-full blur-2xl opacity-70"
               style={{ background: "var(--gradient-aurora)" }} />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full glass-strong animate-portal-pulse">
            <div className="h-10 w-10 rounded-full"
                 style={{ background: "var(--gradient-cosmos)", boxShadow: "var(--shadow-glow-cyan)" }} />
          </div>
        </div>

        <div>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            <span className="text-gradient-aurora">Mnemos Mundi</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Preparando seu universo</p>
        </div>

        {/* Circular progress */}
        <div className="relative h-32 w-32">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="2" />
            <circle
              cx="60" cy="60" r="54" fill="none"
              stroke="url(#grad)" strokeWidth="3" strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference}`}
              style={{ transition: "stroke-dasharray 0.25s ease-out" }}
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5BC0EB" />
                <stop offset="100%" stopColor="#9D7DFF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl font-medium tabular-nums">{Math.round(progress)}%</span>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {STEPS[stepIdx]}
        </p>
      </div>
    </div>
  );
}
