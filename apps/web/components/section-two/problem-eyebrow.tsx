type ProblemEyebrowProps = {
  label: string;
  className?: string;
};

export function ProblemEyebrow({ label, className }: ProblemEyebrowProps) {
  return (
    <div className={[
      "flex items-center gap-4",
      className,
    ].filter(Boolean).join(" ")}>
      <span
        className="h-[18px] w-[18px] rounded-full border border-[#33d1ff] shadow-[0_0_12px_rgba(51,209,255,0.4)]"
        aria-hidden="true"
      />

      <p className="text-[14px] font-medium tracking-[0.32em] text-[#5bc0eb]">
        {label}
      </p>

      <span
        className="h-px w-[120px] bg-gradient-to-r from-[#2ad0ff] to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
