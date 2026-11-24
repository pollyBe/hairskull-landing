import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";
import ReviewCard from "@/components/ui/ReviewCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  // Don't show placeholder testimonials on a live site
  if (reviews.length === 0) return null;

  return (
    <section id="reviews" className="border-b border-border py-24 lg:py-28">
      <Container>
        <FadeIn>
          <SectionTitle
            tag="Отзывы"
            title={
              <>
                Говорят <em className="text-gold">ученики</em>
              </>
            }
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, i) => (
            <FadeIn key={review.id} delay={i * 0.1}>
              <ReviewCard
                name={review.name}
                role={review.role}
                text={review.text}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
