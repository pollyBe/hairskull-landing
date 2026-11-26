import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-page px-5 md:px-8 lg:px-14",
        className,
      )}
    >
      {children}
    </div>
  );
}
