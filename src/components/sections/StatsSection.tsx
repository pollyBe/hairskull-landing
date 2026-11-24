import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";
import StatCard from "@/components/ui/StatCard";
import { stats } from "@/data/stats";

const homeStats = [
  stats.experience,
  stats.prizePlaces,
  stats.academies,
  stats.methodLaunch,
];

export default function StatsSection() {
  return (
    <section aria-label="Достижения" className="border-b border-border py-24">
      <Container>
        <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
          {homeStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <StatCard {...stat} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
