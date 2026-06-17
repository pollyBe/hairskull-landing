import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";

import { timeline } from "@/data/timeline";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="border-b border-[var(--border)] py-28"
    >
      <Container>
        <div className="max-w-4xl">
          <SectionTitle
            tag="Путь мастера"
            title={
              <>
                Профессиональная{" "}
                <em className="text-[var(--gold)]">
                  история
                </em>
              </>
            }
          />

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-[var(--text-muted)]
            "
          >
            Более 15 лет профессионального развития —
            от побед на международных чемпионатах
            до создания собственной образовательной системы Hair Skull
          </p>
        </div>

        <div className="relative mt-20">
          <div
            className="
              absolute
              left-[5px]
              top-0
              bottom-0
              w-px
              bg-[var(--gold)]
              opacity-40
            "
          />

          <div className="space-y-20">
            {timeline.map((item) => (
              <TimelineItem
                key={`${item.year}-${item.title}`}
                year={item.year}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}