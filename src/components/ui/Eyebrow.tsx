import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/** Small gold label with a leading line, used above headings */
export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span aria-hidden className="h-px w-8 bg-gold sm:w-10" />
      <span className="text-xs tracking-[0.3em] text-gold uppercase">
        {children}
      </span>
    </div>
  );
}
