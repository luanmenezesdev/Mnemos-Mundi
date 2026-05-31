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
        "font-heading text-[length:var(--text-mobile-h2)] leading-[0.92] font-light tracking-[-0.046em] text-text-primary sm:text-[length:var(--text-mobile-h1)] lg:text-[length:var(--text-h1)]",
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
