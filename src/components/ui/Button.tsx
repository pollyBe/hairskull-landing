import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({
  asChild,
  variant = "primary",
  className,
  type,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      // type only makes sense on a real <button>
      type={asChild ? undefined : (type ?? "button")}
      className={cn(
        // min-h-11 ensures 44px touch target on mobile
        "inline-flex min-h-11 items-center justify-center px-6 py-3 text-xs tracking-[0.25em] uppercase transition-colors duration-300 active:opacity-80 sm:px-8 sm:py-4",
        variant === "primary" && "bg-gold text-black hover:bg-gold-light",
        variant === "secondary" &&
          "border border-border text-foreground hover:border-gold hover:text-gold",
        className,
      )}
      {...props}
    />
  );
}
