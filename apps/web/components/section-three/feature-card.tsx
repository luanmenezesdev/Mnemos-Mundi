type FeatureCardProps = {
  title: string;
  description: string;
  indexLabel: string;
  indexColorClass: string;
  titleColorClass: string;
  showDivider?: boolean;
};

export function FeatureCard({
  title,
  description,
  indexLabel,
  indexColorClass,
  titleColorClass,
  showDivider = false,
}: FeatureCardProps) {
  return (
    <div
      className={[
        "flex flex-col justify-between gap-3.5 rounded-2xl border border-white/10 p-2.5 sm:p-3",
        showDivider ? "xl:border-r xl:border-white/10" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="space-y-2.5 text-center sm:space-y-3">
        <div className="mx-auto h-9 w-9 rounded-full border border-white/20 bg-white/5 lg:h-[48px] lg:w-[48px]" />

        <div className="space-y-2">
          <h3
            className={[
              "font-alt-heading text-[length:var(--text-body)] font-semibold leading-none lg:text-[length:var(--text-body-lg)]",
              titleColorClass,
            ].join(" ")}
          >
            {title}
          </h3>

          <p className="text-center text-[length:var(--text-caption)] leading-[1.35] text-text-secondary sm:text-[length:var(--text-caption)] lg:text-[length:var(--text-body-sm)]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5">
        <span className="h-px w-7 bg-white/35 lg:w-10" />
        <p className={["text-[length:var(--text-caption)] sm:text-[length:var(--text-body-sm)]", indexColorClass].join(" ")}>
          {indexLabel}
        </p>
        <span className="h-px w-7 bg-white/35 lg:w-10" />
      </div>
    </div>
  );
}
