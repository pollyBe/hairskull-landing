import Link from "next/link";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function EducationHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <Container>
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-16 py-24 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-10 bg-[var(--gold)]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">
                Авторская система обучения
              </span>
            </div>

            <h1 className="font-serif text-6xl leading-none font-light md:text-7xl lg:text-8xl">
              Hair <em className="text-[var(--gold)] not-italic">Skull</em>
            </h1>

            <h2 className="mt-8 max-w-3xl font-serif text-3xl leading-tight font-light md:text-4xl">
              Обучение для парикмахеров
              <br />
              и барберов
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              Основано на анализе формы головы, британских техниках
              стрижки и более чем 15-летнем практическом опыте
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-dim)]">
              Hair Skull помогает перестать работать по шаблону
              и научиться принимать профессиональные решения
              осознанно. Методика объединяет международный опыт,
              фундаментальные техники и практический подход
              к современной стрижке
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#formats">
                  Форматы обучения
                </Link>
              </Button>

              <Button
                asChild
                variant="secondary"
              >
                <Link href="#contact">
                  Связаться
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08),transparent_70%)]" />

            <div
              className="
                relative
                flex
                aspect-[4/5]
                items-center
                justify-center
                overflow-hidden
                border
                border-[var(--border)]
                bg-[var(--surface)]
              "
            >
              {/* Здесь позже появится фото мастера */}

              <div className="pointer-events-none text-center">
                <div
                  className="
                    font-serif
                    text-6xl
                    font-light
                    tracking-[0.15em]
                    text-[rgba(201,168,76,0.12)]
                    md:text-8xl
                  "
                >
                  HAIR
                </div>

                <div
                  className="
                    -mt-2
                    font-serif
                    text-6xl
                    font-light
                    tracking-[0.15em]
                    text-[rgba(201,168,76,0.12)]
                    md:text-8xl
                  "
                >
                  SKULL
                </div>
              </div>

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  border
                  border-[var(--gold)]
                  bg-black/80
                  px-5
                  py-4
                  backdrop-blur
                "
              >
                <div className="font-serif text-3xl text-[var(--gold)]">
                  15+
                </div>

                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  лет опыта
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Facts */}
        <div className="border-t border-[var(--border)] py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="font-serif text-4xl text-[var(--gold)]">
                15+
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                лет практики
              </div>
            </div>

            <div>
              <div className="font-serif text-4xl text-[var(--gold)]">
                11
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                призовых мест
              </div>
            </div>

            <div>
              <div className="font-serif text-4xl text-[var(--gold)]">
                TIGI
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                educator
              </div>
            </div>

            <div>
              <div className="font-serif text-4xl text-[var(--gold)]">
                TONI&GUY
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                academy
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}