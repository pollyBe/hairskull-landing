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
        // min-h-11 ensures 44px touch target on mobile
        "inline-flex min-h-11 items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.25em] transition-all duration-300 sm:px-8 sm:py-4",

        variant === "primary" &&
          "bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] active:opacity-80",

        variant === "secondary" &&
          "border border-[var(--border)] text-white hover:border-[var(--gold)] hover:text-[var(--gold)] active:opacity-80",

        className
      )}
    >
      {children}
    </Comp>
  );
}
