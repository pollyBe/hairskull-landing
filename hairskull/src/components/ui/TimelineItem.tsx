interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export default function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <article className="relative pl-8 sm:pl-10">
      <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-[var(--gold)] sm:h-3 sm:w-3" />

      <div className="mb-2 text-xs uppercase tracking-[0.25em] text-[var(--gold)] sm:mb-3">
        {year}
      </div>

      <h3 className="font-serif text-2xl font-light sm:text-3xl">
        {title}
      </h3>

      <p className="mt-3 max-w-2xl leading-7 text-[var(--text-muted)] sm:mt-4 sm:leading-8">
        {description}
      </p>
    </article>
  );
}
