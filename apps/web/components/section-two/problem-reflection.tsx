import { ProblemBrandSignature } from "./problem-brand-signature";

type ProblemReflectionProps = {
  text: string;
  highlight: string;
  className?: string;
};

export function ProblemReflection({
  text,
  highlight,
  className,
}: ProblemReflectionProps) {
  return (
    <div
      className={[
        "flex w-full max-w-[40rem] flex-col items-center gap-3 px-2 text-center sm:gap-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="w-full text-[length:var(--text-body)] leading-[1.4] text-text-secondary sm:text-[length:var(--text-body-lg)]">
        {text}
      </p>

      <p className="w-full text-[length:var(--text-body)] font-medium leading-[1.4] text-[#9d7dff] [text-shadow:0_0_8px_rgba(157,125,255,0.35)] sm:text-[length:var(--text-body-lg)]">
        {highlight}
      </p>

      <ProblemBrandSignature className="pt-1" />
    </div>
  );
}
