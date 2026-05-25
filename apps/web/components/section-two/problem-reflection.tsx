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
        "flex w-full max-w-[760px] flex-col items-center gap-[14px] text-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="w-full text-xl leading-[1.22] text-[#d9e2ec] lg:text-[26px]">{text}</p>

      <p className="w-full text-lg font-medium leading-[1.22] text-[#9d7dff] [text-shadow:0_0_8px_rgba(157,125,255,0.35)] lg:text-[24px]">
        {highlight}
      </p>

      <ProblemBrandSignature />
    </div>
  );
}
