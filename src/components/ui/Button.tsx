import { Slot, Slottable } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "outline-gold" | "hand-link";

interface ButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
  variant?: ButtonVariant;
}

const boxed =
  // min-h-11 ensures 44px touch target on mobile
  "inline-flex min-h-11 items-center justify-center px-[30px] text-center font-mono text-[13px] tracking-[0.06em] uppercase transition-colors duration-300 active:opacity-80";

const variantClassName: Record<ButtonVariant, string> = {
  primary: cn(
    boxed,
    "bg-gold py-[18px] font-medium text-black hover:bg-gold-hover",
  ),
  outline: cn(
    boxed,
    "border border-line-3 py-[17px] text-text hover:border-gold",
  ),
  "outline-gold": cn(
    boxed,
    "border border-gold py-[17px] text-gold hover:border-gold-hover hover:text-gold-hover",
  ),
  "hand-link":
    "inline-flex items-baseline gap-2 font-hand text-[28px] leading-tight text-gold transition-colors duration-300 hover:text-gold-hover",
};

export default function Button({
  asChild,
  variant = "primary",
  className,
  type,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      // type only makes sense on a real <button>
      type={asChild ? undefined : (type ?? "button")}
      className={cn(variantClassName[variant], className)}
      {...props}
    >
      <Slottable>{children}</Slottable>
      {variant === "hand-link" && <span aria-hidden>→</span>}
    </Comp>
  );
}
