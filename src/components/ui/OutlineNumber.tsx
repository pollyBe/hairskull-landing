import { cn } from "@/lib/utils";

interface OutlineNumberProps {
  children: React.ReactNode;
  tone?: "gold" | "pale";
  className?: string;
}

export default function OutlineNumber({
  children,
  tone = "gold",
  className,
}: OutlineNumberProps) {
  return (
    <span
      className={cn(
        "font-display leading-none font-medium",
        tone === "gold" ? "text-outline-gold" : "text-outline-pale",
        className,
      )}
    >
      {children}
    </span>
  );
}
