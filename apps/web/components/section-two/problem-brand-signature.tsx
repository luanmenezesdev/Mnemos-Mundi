type ProblemBrandSignatureProps = {
  leftText?: string;
  rightText?: string;
  className?: string;
};

export function ProblemBrandSignature({
  leftText = "M N E M O S",
  rightText = "M U N D I",
  className,
}: ProblemBrandSignatureProps) {
  return (
    <div
      className={[
        "flex flex-wrap items-center justify-center gap-2 sm:gap-3",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="font-heading text-[length:var(--text-body)] font-medium tracking-[0.12em] text-[#9d7dff] sm:text-[length:var(--text-body-lg)] sm:tracking-[0.18em]">
        {leftText}
      </span>

      <span
        className="h-9 w-9 rounded-full border border-[#9d7dff80] shadow-[0_0_10px_rgba(157,125,255,0.25)] sm:h-11 sm:w-11"
        aria-hidden="true"
      />

      <span className="font-heading text-[length:var(--text-body)] font-medium tracking-[0.12em] text-[#9d7dff] sm:text-[length:var(--text-body-lg)] sm:tracking-[0.18em]">
        {rightText}
      </span>
    </div>
  );
}
