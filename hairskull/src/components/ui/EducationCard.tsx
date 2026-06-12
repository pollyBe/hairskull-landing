interface EducationCardProps {
  title: string;
  description: string;
  index: number;
}

export default function EducationCard({
  title,
  description,
  index,
}: EducationCardProps) {
  return (
    <article
      className="
        group
        bg-[var(--surface)]
        p-8
        border
        border-[var(--border)]
        transition-all
        duration-300
        hover:border-[var(--gold-dim)]
      "
    >
      <div
        className="
          mb-8
          text-xs
          tracking-[0.3em]
          text-[var(--gold)]
        "
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3
        className="
          font-serif
          text-3xl
          font-light
          leading-tight
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-5
          text-[var(--text-muted)]
          leading-7
        "
      >
        {description}
      </p>
    </article>
  );
}