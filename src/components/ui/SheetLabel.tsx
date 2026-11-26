import { cn } from "@/lib/utils";

interface SheetLabelProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
}

export default function SheetLabel({
  children,
  className,
  as: Comp = "p",
}: SheetLabelProps) {
  return (
    <Comp
      className={cn(
        "font-mono text-xs tracking-[0.08em] text-text-dim uppercase",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
