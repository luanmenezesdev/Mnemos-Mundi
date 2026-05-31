type ProblemSupportTextProps = {
  text: string;
  className?: string;
};

export function ProblemSupportText({ text, className }: ProblemSupportTextProps) {
  return (
    <p
      className={[
        "max-w-[32rem] text-[length:var(--text-body-sm)] leading-[1.45] font-normal text-text-secondary sm:text-[length:var(--text-body)] lg:max-w-[34rem]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {text}
    </p>
  );
}
