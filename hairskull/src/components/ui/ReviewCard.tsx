interface ReviewCardProps {
  name: string;
  role: string;
  text: string;
}

export default function ReviewCard({ name, role, text }: ReviewCardProps) {
  return (
    <article className="flex h-full flex-col border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <p className="flex-1 text-sm leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
        &ldquo;{text}&rdquo;
      </p>

      <div className="mt-6 border-t border-[var(--border)] pt-5 sm:mt-8 sm:pt-6">
        <div className="font-serif text-lg font-light">{name}</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] sm:text-xs">
          {role}
        </div>
      </div>
    </article>
  );
}
