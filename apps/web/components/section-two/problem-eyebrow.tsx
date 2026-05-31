type ProblemEyebrowProps = {
  label: string;
  className?: string;
};

export function ProblemEyebrow({ label, className }: ProblemEyebrowProps) {
  return (
    <div className={[
      "flex flex-wrap items-center gap-3 sm:gap-4",
      className,
    ].filter(Boolean).join(" ")}>
      <span
        className="h-[18px] w-[18px] rounded-full border border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
        aria-hidden="true"
      />

      <p className="max-w-full text-[length:var(--text-eyebrow)] font-medium tracking-[0.2em] text-[#5bc0eb] sm:tracking-[0.32em]">
        {label}
      </p>

      <span
        className="hidden h-px max-w-32 flex-1 bg-gradient-to-r from-[#2ad0ff] to-transparent sm:block"
        aria-hidden="true"
      />
    </div>
  );
}
