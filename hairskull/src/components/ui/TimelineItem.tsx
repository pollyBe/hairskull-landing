interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export default function TimelineItem({
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <article className="relative pl-10">
      <div
        className="
          absolute
          left-0
          top-2
          h-3
          w-3
          rounded-full
          bg-[var(--gold)]
        "
      />

      <div
        className="
          mb-3
          text-xs
          uppercase
          tracking-[0.25em]
          text-[var(--gold)]
        "
      >
        {year}
      </div>

      <h3 className="font-serif text-3xl font-light">
        {title}
      </h3>

      <p
        className="
          mt-4
          max-w-2xl
          leading-8
          text-[var(--text-muted)]
        "
      >
        {description}
      </p>
    </article>
  );
}