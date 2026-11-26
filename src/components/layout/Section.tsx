import { cn } from "@/lib/utils";

import Container from "./Container";

interface SectionProps extends React.ComponentProps<"section"> {
  contained?: boolean;
  containerClassName?: string;
}

export default function Section({
  contained = true,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "border-t border-line",
        contained && "py-18 lg:py-30",
        className,
      )}
      {...props}
    >
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
