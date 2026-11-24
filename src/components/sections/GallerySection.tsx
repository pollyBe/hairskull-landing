import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import GalleryCard from "@/components/ui/GalleryCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { contacts } from "@/data/contacts";
import { galleryItems } from "@/data/gallery";

export default function GallerySection() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionTitle
              as="h1"
              tag="Галерея"
              title={
                <>
                  Работа и <em className="text-gold">обучение</em>
                </>
              }
            />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Стрижки, образовательные программы, мастер-классы и
              профессиональные мероприятия.
            </p>
          </div>

          <Button asChild variant="secondary">
            <a
              href={contacts.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </Button>
        </div>

        {galleryItems.length > 0 ? (
          <ul className="mt-16 gap-6 sm:columns-2 xl:columns-3">
            {galleryItems.map((item, index) => (
              <li key={item.id} className="mb-6 break-inside-avoid">
                <GalleryCard
                  src={item.src}
                  alt={item.alt}
                  preload={index < 2}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-16 border border-border bg-surface p-10 text-center text-muted">
            Скоро здесь появятся работы. А пока — загляните в Instagram.
          </p>
        )}
      </Container>
    </section>
  );
}
