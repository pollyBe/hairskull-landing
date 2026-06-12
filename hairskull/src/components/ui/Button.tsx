import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  asChild,
  variant = "primary",
  className,
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.25em] transition-all duration-300",

        variant === "primary" &&
          "bg-[var(--gold)] text-black hover:bg-[var(--gold-light)]",

        variant === "secondary" &&
          "border border-[var(--border)] text-white hover:border-[var(--gold)] hover:text-[var(--gold)]",

        className
      )}
    >
      {children}
    </Comp>
  );
}