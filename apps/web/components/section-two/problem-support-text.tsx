type ProblemSupportTextProps = {
  text: string;
  className?: string;
};

export function ProblemSupportText({ text, className }: ProblemSupportTextProps) {
  return (
    <p
      className={[
        "max-w-[520px] text-lg leading-[1.32] font-normal text-[#d9e2ec] lg:text-[24px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {text}
    </p>
  );
}
