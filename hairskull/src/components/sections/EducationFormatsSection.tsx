import Link from "next/link";

import Container from "@/components/layout/Container";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import EducationCard from "@/components/ui/EducationCard";

import { educationFormats } from "@/data/education";
import { hairSkull } from "@/data/hair-skull";

export default function EducationFormatsSection() {
  return (
    <section className="border-b border-[var(--border)] py-28">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionTitle
              tag="Обучение"
              title={
                <>
                  Форматы{" "}
                  <em className="text-[var(--gold)]">
                    обучения
                  </em>
                </>
              }
            />

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-[var(--text-muted)]
              "
            >
              {hairSkull.intro}
            </p>
          </div>

          <Button
            asChild
            variant="secondary"
          >
            <Link href="/education">
              Подробнее об обучении
            </Link>
          </Button>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {educationFormats.map((format, index) => (
            <EducationCard
              key={format.id}
              title={format.title}
              description={format.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}