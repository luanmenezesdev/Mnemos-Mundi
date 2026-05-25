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
        "flex items-center justify-center gap-[18px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="font-[var(--font-space-grotesk)] text-lg font-medium tracking-[0.28em] text-[#9d7dff] lg:text-[22px]">
        {leftText}
      </span>

      <span
        className="h-[54px] w-[54px] rounded-full border border-[#9d7dff80] shadow-[0_0_12px_rgba(157,125,255,0.25)]"
        aria-hidden="true"
      />

      <span className="font-[var(--font-space-grotesk)] text-lg font-medium tracking-[0.28em] text-[#9d7dff] lg:text-[22px]">
        {rightText}
      </span>
    </div>
  );
}
