import Section from "@/components/layout/Section";
import FadeIn from "@/components/ui/FadeIn";
import ReviewCard from "@/components/ui/ReviewCard";
import SheetLabel from "@/components/ui/SheetLabel";
import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  // Don't show placeholder testimonials on a live site
  if (reviews.length === 0) return null;

  return (
    <Section id="reviews">
      <FadeIn className="flex flex-col gap-5">
        <SheetLabel>ОТЗЫВЫ</SheetLabel>
        <h2 className="font-display text-[clamp(56px,6vw,100px)] leading-[0.9] font-light">
          Говорят <em className="text-gold italic">ученики</em>
        </h2>
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
    </Section>
  );
}
