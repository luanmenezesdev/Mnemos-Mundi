type LoadingScreenProps = {
  error?: string | null;
  onRetry?: () => void;
  progress: number;
  status: string;
};

export function LoadingScreen({
  error,
  onRetry,
  progress,
  status,
}: LoadingScreenProps) {
  const normalizedProgress = Math.max(0, Math.min(100, progress));
  const circumference = 2 * Math.PI * 54;
  const dash = (normalizedProgress / 100) * circumference;
  const hasError = Boolean(error);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background">
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

      <div className="relative z-10 flex max-w-[32rem] flex-col items-center gap-8 px-6 text-center">
        <div className="relative">
          <div
            className="absolute inset-0 -m-6 rounded-full blur-2xl opacity-70"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_36px_rgba(91,192,235,0.22)] backdrop-blur-xl">
            <div
              className="h-10 w-10 rounded-full"
              style={{
                background: "var(--gradient-cosmos)",
                boxShadow: "0 0 32px rgba(91,192,235,0.28)",
              }}
            />
          </div>
        </div>

        <div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-[#5bc0eb] to-[#9d7dff] bg-clip-text text-transparent">
              Mnemos Mundi
            </span>
          </h1>
          <p className="mt-3 text-sm text-text-muted">
            {hasError ? "Falha ao abrir o portal" : status}
          </p>
        </div>

        <div className="relative h-32 w-32">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="oklch(1 0 0 / 0.08)"
              strokeWidth="2"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="url(#unity-progress-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference}`}
              style={{ transition: "stroke-dasharray 0.2s ease-out" }}
            />
            <defs>
              <linearGradient id="unity-progress-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5BC0EB" />
                <stop offset="100%" stopColor="#9D7DFF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-2xl font-medium tabular-nums">
              {Math.round(normalizedProgress)}%
            </span>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
          {hasError ? error : "Carregando build WebGL"}
        </p>

        {hasError && onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/8 px-5 text-sm font-medium text-white transition-colors hover:bg-white/12"
          >
            Tentar novamente
          </button>
        ) : null}
      </div>
    </div>
  );
}
