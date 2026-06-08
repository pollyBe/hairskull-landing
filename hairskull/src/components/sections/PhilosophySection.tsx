import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function PhilosophySection() {
  return (
    <section className="border-b border-[var(--border)] py-28">
      <Container>
        <SectionTitle
          tag="Подход"
          title={
            <>
              Философия <em className="text-[var(--gold)]">обучения</em>
            </>
          }
        />

        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="font-serif text-4xl leading-tight font-light md:text-5xl">
              Я не учу повторять стрижки.
              <br />
              Я учу понимать форму.
            </h3>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              Обучение строится вокруг понимания структуры волос,
              формы головы и логики построения стрижки. Цель —
              не запомнить последовательность действий, а научиться
              принимать решения самостоятельно и уверенно работать
              с разными типами клиентов.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l border-[var(--gold)] pl-6">
              <div className="mb-2 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                01
              </div>

              <h4 className="font-serif text-2xl">
                Форма
              </h4>

              <p className="mt-3 text-[var(--text-muted)]">
                Анализ пропорций, направления роста и текстуры волос.
              </p>
            </div>

            <div className="border-l border-[var(--gold)] pl-6">
              <div className="mb-2 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                02
              </div>

              <h4 className="font-serif text-2xl">
                Система
              </h4>

              <p className="mt-3 text-[var(--text-muted)]">
                Понятная методика вместо набора случайных техник.
              </p>
            </div>

            <div className="border-l border-[var(--gold)] pl-6">
              <div className="mb-2 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                03
              </div>

              <h4 className="font-serif text-2xl">
                Практика
              </h4>

              <p className="mt-3 text-[var(--text-muted)]">
                Отработка навыков на моделях и разбор реальных кейсов.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}