import Link from "next/link";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import EducationCard from "@/components/ui/EducationCard";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { educationFormats, educationIntro } from "@/data/education";

interface EducationFormatsSectionProps {
  /** "page" is used on /education, where the link to that page is redundant */
  variant?: "preview" | "page";
}

export default function EducationFormatsSection({
  variant = "preview",
}: EducationFormatsSectionProps) {
  return (
    <section id="education" className="border-b border-border py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn>
            <SectionTitle
              tag="Обучение"
              title={
                <>
                  Форматы <em className="text-gold">обучения</em>
                </>
              }
            />

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {educationIntro}
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="flex flex-wrap gap-4">
            {variant === "preview" && (
              <Button asChild variant="secondary">
                <Link href="/education">О курсе</Link>
              </Button>
            )}
            <Button asChild>
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
                options={format.options}
                index={index}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
