import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

import { master } from "@/data/master";

export default function AboutPreviewSection() {
  return (
    <section id="about" className="border-b border-[var(--border)] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">

          {/* Photo */}
          <FadeIn direction="left">
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
              <div className="flex h-full items-center justify-center">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--border)]">
                  Фото
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn delay={0.1}>
              <SectionTitle
                tag="О мастере"
                title={
                  <>
                    Алексей{" "}
                    <em className="text-[var(--gold)]">Платун</em>
                  </>
                }
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
                {master.shortBio}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-8 sm:mt-10 sm:pt-10">
                {[
                  { value: "7", label: "Первых мест" },
                  { value: "15+", label: "Лет в профессии" },
                  { value: "11", label: "Призовых мест" },
                  { value: "5", label: "Международных академий" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-serif text-3xl font-light text-[var(--gold)] sm:text-4xl">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)] sm:text-xs">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </Container>
    </section>
  );
}
