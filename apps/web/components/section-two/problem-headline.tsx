type ProblemHeadlineProps = {
  lines: [string, string, string];
  highlightedIndex?: number;
  className?: string;
};

export function ProblemHeadline({
  lines,
  highlightedIndex = 2,
  className,
}: ProblemHeadlineProps) {
  return (
    <h2
      className={[
        "font-[var(--font-space-grotesk)] text-5xl leading-[0.95] font-light tracking-[-0.046em] text-[#f8fafc] sm:text-6xl lg:text-[82px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {lines.map((line, index) => (
        <span
          key={line}
          className={[
            "block",
            index === highlightedIndex
              ? "text-[#9d7dff] [text-shadow:0_0_28px_rgba(182,140,255,0.25)]"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {line}
        </span>
      ))}
    </h2>
  );
}
