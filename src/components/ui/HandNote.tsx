import { cn } from "@/lib/utils";

interface HandNoteProps {
  children: React.ReactNode;
  rotate?: number;
  tone?: "gold" | "text";
  arrow?: boolean;
  className?: string;
  as?: "p" | "span" | "div";
  style?: React.CSSProperties;
}

export default function HandNote({
  children,
  rotate = 0,
  tone = "gold",
  arrow,
  className,
  as: Comp = "p",
  style,
}: HandNoteProps) {
  return (
    <Comp
      className={cn(
        "font-hand text-[26px] leading-[1.1] font-normal",
        tone === "gold" ? "text-gold" : "text-text",
        arrow && "flex items-start gap-3",
        className,
      )}
      style={rotate ? { rotate: `${rotate}deg`, ...style } : style}
    >
      {arrow && <HandArrow />}
      {arrow ? <span>{children}</span> : children}
    </Comp>
  );
}

function HandArrow() {
  return (
    <svg
      aria-hidden
      width="72"
      height="48"
      viewBox="0 0 72 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M4 6c10 22 30 32 60 30" />
      <path d="M54 28l10 8-12 4" />
    </svg>
  );
}
