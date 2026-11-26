import type { Review } from "@/types/content";

type ReviewCardProps = Omit<Review, "id">;

export default function ReviewCard({ name, role, text }: ReviewCardProps) {
  return (
    <figure className="flex h-full flex-col border-t border-line-3 pt-6">
      <blockquote className="flex-1 font-display text-[26px] leading-[1.25] font-light italic">
        <p>«{text}»</p>
      </blockquote>

      <figcaption className="mt-6 flex flex-col gap-1">
        <span className="font-mono text-[13px] tracking-[0.06em] uppercase">
          {name}
        </span>
        <span className="text-sm font-light text-text-muted">{role}</span>
      </figcaption>
    </figure>
  );
}
