interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="border border-[var(--border)] bg-[rgba(8,8,8,0.85)] px-6 py-5 backdrop-blur-md">
      <div className="font-serif text-4xl leading-none text-[var(--gold)]">
        {value}
      </div>

      <div className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
        {label}
      </div>
    </div>
  );
}