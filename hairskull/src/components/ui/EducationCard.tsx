interface EducationCardProps {
  title: string;
  description: string;
  index: number;
}

export default function EducationCard({ title, description, index }: EducationCardProps) {
  return (
    <article className="group h-full border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--gold)] sm:p-8">
      <div className="mb-6 text-xs tracking-[0.3em] text-[var(--gold)] sm:mb-8">
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3 className="font-serif text-2xl font-light leading-tight sm:text-3xl">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-[var(--text-muted)] sm:mt-5">
        {description}
      </p>
    </article>
  );
}
