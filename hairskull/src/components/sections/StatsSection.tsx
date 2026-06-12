import Container from "@/components/layout/Container";

import StatCard from "@/components/ui/StatCard";

import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="border-b border-[var(--border)] py-24">
      <Container>
        <div className="grid gap-px bg-[var(--border)] md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}