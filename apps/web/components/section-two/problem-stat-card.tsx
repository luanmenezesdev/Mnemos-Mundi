import type { ReactNode } from "react";

type ProblemStatCardProps = {
  value: ReactNode;
  description: string;
  source: string;
  valueSize?: "xl" | "md";
  className?: string;
};

export function ProblemStatCard({
  value,
  description,
  source,
  valueSize = "xl",
  className,
}: ProblemStatCardProps) {
  return (
    <article
      className={[
        "flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="h-14 w-14 shrink-0 rounded-full border border-[#9d7dff73] shadow-[0_0_16px_rgba(157,125,255,0.12)] sm:h-16 sm:w-16" />

      <div className="flex w-full min-w-0 flex-col gap-2">
        <h3
          className={[
            "font-heading font-bold text-[#9d7dff] [text-shadow:0_0_24px_rgba(185,140,255,0.28)]",
            valueSize === "xl"
              ? "text-[length:var(--text-h3)] leading-[1.02] lg:text-[length:var(--text-h2)]"
              : "text-[length:var(--text-h4)] leading-[1.1] lg:text-[length:var(--text-h3)]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {value}
        </h3>

        <p className="max-w-[24rem] text-[length:var(--text-body-sm)] leading-[1.45] text-text-secondary sm:text-[length:var(--text-body)]">
          {description}
        </p>

        <p className="text-[length:var(--text-caption)] leading-[1.25] font-light text-text-muted">
          {source}
        </p>
      </div>
    </article>
  );
}
