import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { timeline } from "@/data/timeline";

export default function TimelineSection() {
  return (
    <section id="timeline" className="border-b border-border py-20 sm:py-28">
      <Container>
        <FadeIn className="max-w-4xl">
          <SectionTitle
            tag="Путь мастера"
            title={
              <>
                Профессиональная <em className="text-gold">история</em>
              </>
            }
          />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Более 15 лет профессионального развития — от побед на международных
            чемпионатах до создания собственной образовательной системы Hair
            Skull
          </p>
        </FadeIn>

        <div className="relative mt-16 sm:mt-20">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[5px] w-px bg-gold/40"
          />

          <ol className="space-y-16 sm:space-y-20">
            {timeline.map((item) => (
              <TimelineItem key={`${item.year}-${item.title}`} {...item} />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
