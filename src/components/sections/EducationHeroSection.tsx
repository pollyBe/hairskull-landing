import Container from "@/components/layout/Container";
import BrandWatermark from "@/components/ui/BrandWatermark";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import PhotoFrame from "@/components/ui/PhotoFrame";
import StatCard from "@/components/ui/StatCard";
import { educationHighlights } from "@/data/education";
import { master } from "@/data/master";
import { stats } from "@/data/stats";

export default function EducationHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container>
        <div className="grid min-h-[calc(100svh-var(--spacing-header))] items-center gap-16 py-24 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow className="mb-8">Авторская система обучения</Eyebrow>

            <h1 className="font-serif text-6xl leading-none md:text-7xl lg:text-8xl">
              Hair <span className="text-gold">Skull</span>
            </h1>

            <p className="mt-8 max-w-3xl font-serif text-3xl leading-tight md:text-4xl">
              Обучение для парикмахеров
              <br />и барберов
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              Основано на анализе формы головы, британских техниках стрижки и
              более чем 15-летнем практическом опыте
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              Hair Skull помогает перестать работать по шаблону и научиться
              принимать профессиональные решения осознанно. Методика объединяет
              международный опыт, фундаментальные техники и практический подход
              к современной стрижке
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild>
                <a href="#education">Форматы обучения</a>
              </Button>

              <Button asChild variant="secondary">
                <a href="#contact">Связаться</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-gold)_8%,transparent),transparent_70%)]"
            />

            <PhotoFrame
              photo={master.photo}
              placeholder={<BrandWatermark />}
              sizes="(min-width: 1024px) 50vw, 100vw"
            >
              <div className="absolute bottom-6 left-6 z-10">
                <StatCard {...stats.experience} />
              </div>
            </PhotoFrame>
          </div>
        </div>

        <dl className="grid gap-8 border-t border-border py-10 sm:grid-cols-2 md:grid-cols-4">
          {educationHighlights.map((item) => (
            <div key={item.value} className="flex flex-col-reverse">
              <dt className="mt-2 text-xs tracking-[0.2em] text-muted uppercase">
                {item.label}
              </dt>
              <dd className="font-serif text-4xl text-gold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
