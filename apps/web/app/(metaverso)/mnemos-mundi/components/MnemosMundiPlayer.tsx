import Image from "next/image";
import Link from "next/link";

type MnemosMundiPlayerProps = {
  className?: string;
};

export function MnemosMundiPlayer({ className }: MnemosMundiPlayerProps) {
  return (
    <main
      className={[
        "flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background text-foreground pt-6 pb-15",
        "bg-[radial-gradient(circle_at_50%_20%,var(--surface-blue-glass),transparent_45%),linear-gradient(180deg,var(--color-soft-blue)_0%,var(--background)_100%)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* HEADER */}
      <header className="h-[70px] max-w-full w-[96vw] rounded-[var(--radius-lg)] border border-[var(--border-soft)] bg-surface-glass shadow-[0_0_40px_var(--surface-blue-glass)] backdrop-blur-xl">
        <div className="flex h-full w-full items-center px-5">
          {/* HEADER LEFT */}

          <Link
            href="/"
            className="flex h-full min-w-[340px] items-center gap-4 pr-8"
          >
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--border-soft)] bg-[var(--surface-blue-glass)]">
              <Image
                src="/images/logo_oficial.png"
                alt="Mnemos Mundi Logo"
                fill
                className="object-contain scale-115"
              />
            </div>

            <div className="flex flex-col gap-0">
              <span className="text-[var(--text-eyebrow)] font-medium uppercase tracking-[0.28em] text-text-primary">
                MNEMOS MUNDI
              </span>
              <span className="text-[var(--text-caption)] uppercase tracking-[0.16em] text-text-muted">
                Explore. Aprenda. Transforme
              </span>
            </div>
          </Link>

          <div className="h-9 w-px bg-[var(--border-soft)]" />

          {/* HEADER CENTER */}
          <div className="flex h-full flex-1 items-center px-8">
            {/* EMPTY CENTER CONTENT */}
          </div>

          <div className="h-9 w-px bg-[var(--border-soft)]" />

          {/* HEADER RIGHT */}
          <div className="flex h-full min-w-[210px] items-center justify-end gap-5 pl-8">
            <button
              type="button"
              aria-label="Notificações"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-[var(--surface-blue-glass)]"
            >
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-accent" />
              🔔
            </button>

            <button
              type="button"
              aria-label="Configurações"
              className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-[var(--surface-blue-glass)]"
            >
              ⚙️
            </button>

            <div className="relative h-12 w-12 rounded-full border border-[var(--border-glow)] bg-surface-soft shadow-[0_0_22px_var(--surface-blue-glass)]">
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[var(--surface-glass)] bg-[var(--color-mint-400)]" />
            </div>
          </div>
        </div>
      </header>

      {/* MAIN WEBGL FRAME */}
      <section className="relative h-[calc(100vh-200px)] w-[86.5vw] rounded-[var(--radius-xl)] border border-[var(--border-glow)] bg-[var(--surface-blue-glass)] shadow-[inset_0_0_80px_var(--surface-blue-glass),0_0_45px_var(--surface-blue-glass)] backdrop-blur-[2px]">
        {/* FRAME CONTROLS - BOTTOM RIGHT */}
        <div className="absolute bottom-4 right-5 flex h-[54px] items-center gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] text-text-secondary hover:bg-[var(--surface-blue-glass)]">
            ⛶
          </button>
        </div>
      </section>
    </main>
  );
}
