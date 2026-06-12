interface SectionTitleProps {
  tag: string;
  title: React.ReactNode;
}

export default function SectionTitle({
  tag,
  title,
}: SectionTitleProps) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-4">
        <div className="h-px w-8 bg-[var(--gold)]" />

        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">
          {tag}
        </span>
      </div>

      <h2 className="font-serif text-4xl font-light leading-none md:text-6xl">
        {title}
      </h2>
    </div>
  );
}