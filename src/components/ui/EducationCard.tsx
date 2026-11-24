import type { EducationFormat } from "@/types/content";

interface EducationCardProps extends Omit<EducationFormat, "id"> {
  index: number;
}

export default function EducationCard({
  title,
  description,
  options,
  index,
}: EducationCardProps) {
  return (
    <article className="flex h-full flex-col border border-t-2 border-border border-t-gold bg-surface p-6 sm:p-8 lg:p-10">
      <div
        aria-hidden
        className="mb-6 font-serif text-4xl text-gold sm:mb-8 sm:text-5xl"
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3 className="font-serif text-3xl leading-tight font-medium sm:text-4xl">
        {title}
      </h3>

      <p className="mt-4 text-base leading-7 text-muted sm:mt-5 sm:leading-8">
        {description}
      </p>

      {options && options.length > 0 && (
        <ul className="mt-8 space-y-4">
          {options.map((option) => (
            <li
              key={option.title}
              className="border-l-2 border-gold bg-surface-secondary p-5 sm:p-6"
            >
              <h4 className="font-serif text-2xl leading-tight font-medium">
                {option.title}
              </h4>
              <p className="mt-2 text-base leading-7 text-muted">
                {option.description}
              </p>
              {option.link && (
                <a
                  href={option.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs tracking-[0.2em] text-gold uppercase underline-offset-4 hover:underline"
                >
                  {option.link.label} ↗
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
