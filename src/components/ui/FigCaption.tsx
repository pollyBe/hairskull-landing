import { cn } from "@/lib/utils";

type Corner = "bottom-left" | "bottom-right" | "top-left" | "top-right";

const cornerClassName: Record<Corner, string> = {
  "bottom-left": "bottom-3.5 left-3.5 md:bottom-4 md:left-4",
  "bottom-right": "right-3.5 bottom-3.5 md:right-4 md:bottom-4",
  "top-left": "top-3.5 left-3.5 md:top-4 md:left-4",
  "top-right": "top-3.5 right-3.5 md:top-4 md:right-4",
};

interface FigCaptionProps {
  children: React.ReactNode;
  corner?: Corner;
  className?: string;
}

export default function FigCaption({
  children,
  corner = "bottom-left",
  className,
}: FigCaptionProps) {
  return (
    <span
      className={cn(
        "absolute z-10 bg-black/60 px-2.5 py-1.5 font-mono text-[11px] leading-none text-text",
        cornerClassName[corner],
        className,
      )}
    >
      {children}
    </span>
  );
}
