import Link from "next/link";

import Container from "@/components/layout/Container";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import GalleryCard from "@/components/ui/GalleryCard";

import { galleryItems } from "@/data/gallery";

export default function GallerySection() {
  return (
    <section className="border-b border-[var(--border)] py-28">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionTitle
              tag="Галерея"
              title={
                <>
                  Работа и{" "}
                  <em className="text-[var(--gold)]">
                    обучение
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
              Стрижки, образовательные программы,
              мастер-классы и профессиональные мероприятия.
            </p>
          </div>

          <Button
            asChild
            variant="secondary"
          >
            <Link
              href="https://instagram.com"
              target="_blank"
            >
              Instagram
            </Link>
          </Button>
        </div>

        <div
          className="
            mt-16
            columns-1
            gap-6
            md:columns-2
            xl:columns-3
          "
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="mb-6 break-inside-avoid"
            >
              <GalleryCard
                image={item.image}
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}