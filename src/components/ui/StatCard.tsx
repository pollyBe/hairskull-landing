import type { Stat } from "@/types/content";

export default function StatCard({ value, label }: Stat) {
  return (
    <div className="h-full border border-border bg-surface p-6 transition-colors duration-300 hover:border-gold sm:p-8">
      <div className="font-serif text-4xl text-gold sm:text-5xl">{value}</div>
      <div className="mt-3 text-xs tracking-[0.18em] text-muted uppercase">
        {label}
      </div>
    </div>
  );
}
