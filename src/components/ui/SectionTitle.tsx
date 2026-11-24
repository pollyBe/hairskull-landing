import Eyebrow from "./Eyebrow";

interface SectionTitleProps {
  tag: string;
  title: React.ReactNode;
  /** h1 when the section opens a page, h2 otherwise */
  as?: "h1" | "h2";
}

export default function SectionTitle({
  tag,
  title,
  as: Heading = "h2",
}: SectionTitleProps) {
  return (
    <div className="mb-8 sm:mb-10">
      <Eyebrow className="mb-4">{tag}</Eyebrow>

      <Heading className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </Heading>
    </div>
  );
}
