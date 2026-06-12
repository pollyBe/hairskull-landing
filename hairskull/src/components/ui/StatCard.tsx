interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <article
      className="
        group
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-8
        transition-all
        duration-300
        hover:border-[var(--gold-dim)]
      "
    >
      <div
        className="
          font-serif
          text-5xl
          font-light
          text-[var(--gold)]
        "
      >
        {value}
      </div>

      <div
        className="
          mt-3
          text-xs
          uppercase
          tracking-[0.18em]
          text-[var(--text-muted)]
        "
      >
        {label}
      </div>
    </article>
  );
}