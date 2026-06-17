import Link from "next/link";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import EducationCard from "@/components/ui/EducationCard";
import FadeIn from "@/components/ui/FadeIn";

import { educationFormats } from "@/data/education";
import { hairSkull } from "@/data/hair-skull";

export default function EducationFormatsSection() {
  return (
    <section id="education" className="border-b border-[var(--border)] py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn>
            <div>
              <SectionTitle
                tag="Обучение"
                title={
                  <>
                    Форматы{" "}
                    <em className="text-[var(--gold)]">обучения</em>
                  </>
                }
              />

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                {hairSkull.intro}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Button asChild variant="secondary">
              <a href="#contact">Записаться</a>
            </Button>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {educationFormats.map((format, index) => (
            <FadeIn key={format.id} delay={index * 0.1}>
              <EducationCard
                title={format.title}
                description={format.description}
                index={index}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
