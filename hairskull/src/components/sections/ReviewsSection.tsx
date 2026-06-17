import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

const placeholderReviews = [
  {
    id: 1,
    name: "Имя ученика",
    role: "Мастер, Минск",
    text: "Отзыв появится здесь. Обучение кардинально изменило мой подход к стрижке.",
  },
  {
    id: 2,
    name: "Имя ученика",
    role: "Барбер, Москва",
    text: "Отзыв появится здесь. Теперь вижу форму головы иначе — работаю осознанно.",
  },
  {
    id: 3,
    name: "Имя ученика",
    role: "Мастер, Киев",
    text: "Отзыв появится здесь. Время на стрижку сократилось, качество выросло.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="border-b border-[var(--border)] py-24 lg:py-28">
      <Container>
        <FadeIn>
          <SectionTitle
            tag="Отзывы"
            title={
              <>
                Говорят{" "}
                <em className="text-[var(--gold)]">ученики</em>
              </>
            }
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {placeholderReviews.map((review, i) => (
            <FadeIn key={review.id} delay={i * 0.1}>
              <article className="flex h-full flex-col border border-[var(--border)] bg-[var(--surface)] p-8">
                <p className="flex-1 text-base leading-8 text-[var(--text-muted)]">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="mt-8 border-t border-[var(--border)] pt-6">
                  <div className="font-serif text-lg font-light">
                    {review.name}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                    {review.role}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
