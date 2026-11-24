import type { TimelineEntry } from "@/types/content";

export default function TimelineItem({
  year,
  title,
  description,
}: TimelineEntry) {
  return (
    <li className="relative pl-8 sm:pl-10">
      <span
        aria-hidden
        className="absolute top-2 left-0 size-2.5 rounded-full bg-gold sm:size-3"
      />

      <div className="mb-2 text-xs tracking-[0.25em] text-gold uppercase sm:mb-3">
        {year}
      </div>

      <h3 className="font-serif text-2xl font-medium sm:text-3xl">{title}</h3>

      <p className="mt-3 max-w-2xl leading-7 text-muted sm:mt-4 sm:leading-8">
        {description}
      </p>
    </li>
  );
}
