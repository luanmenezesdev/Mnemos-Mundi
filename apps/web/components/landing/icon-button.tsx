import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-label" | "children"
> & {
  ariaLabel: string;

  children: ReactNode;
};

export function IconButton({
  ariaLabel,

  children,

  className,

  type = "button",

  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={[
        "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 text-[20px] text-text-primary shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:border-[#5bc0eb]/70 hover:bg-[#5bc0eb]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5bc0eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050b16] sm:h-12 sm:w-12 sm:text-[24px]",

        className,
      ]

        .filter(Boolean)

        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
