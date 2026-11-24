import type { Review } from "@/types/content";

type ReviewCardProps = Omit<Review, "id">;

export default function ReviewCard({ name, role, text }: ReviewCardProps) {
  return (
    <figure className="flex h-full flex-col border border-border bg-surface p-6 sm:p-8">
      <blockquote className="flex-1 text-base leading-7 text-muted sm:leading-8">
        <p>&ldquo;{text}&rdquo;</p>
      </blockquote>

      <figcaption className="mt-6 border-t border-border pt-5 sm:mt-8 sm:pt-6">
        <div className="font-serif text-lg">{name}</div>
        <div className="mt-1 text-xs tracking-[0.2em] text-gold uppercase">
          {role}
        </div>
      </figcaption>
    </figure>
  );
}
