import type { EducationFormat } from "@/types/content";
import { cn } from "@/lib/utils";

import OutlineNumber from "./OutlineNumber";
import TapedPhoto from "./TapedPhoto";

interface EducationCardProps extends Omit<EducationFormat, "id"> {
  index: number;
  className?: string;
}

export default function EducationCard({
  title,
  description,
  photo,
  options,
  index,
  className,
}: EducationCardProps) {
  return (
    <article className={cn("flex flex-col gap-7", className)}>
      <TapedPhoto
        src={photo.src}
        alt={photo.alt}
        caption={photo.caption}
        tilt={photo.tilt}
        tapeLeft={photo.tapeLeft}
        tapeRotate={photo.tapeRotate}
        sizes="(min-width: 1440px) 630px, (min-width: 1024px) 44vw, 100vw"
        imageClassName={cn("h-[360px] md:h-[480px]", photo.position)}
      />

      <div className="flex items-baseline gap-5">
        <span aria-hidden className="shrink-0">
          <OutlineNumber className="text-[72px] leading-[0.8] md:text-[96px]">
            {String(index + 1).padStart(2, "0")}
          </OutlineNumber>
        </span>
        <h3 className="font-display text-[32px] leading-none font-light md:text-[40px]">
          {title}
        </h3>
      </div>

      <p className="text-[15px] leading-[1.8] font-light text-text-muted">
        {description}
      </p>

      {options && options.length > 0 && (
        <ul className="border-t border-line-2">
          {options.map((option) => (
            <li
              key={option.title}
              className="flex flex-col gap-1 border-b border-line-2 py-[18px]"
            >
              <h4 className="font-mono text-[13px] tracking-[0.04em] uppercase">
                {option.link ? (
                  <a
                    href={option.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    {option.title} <span aria-hidden>↗</span>
                  </a>
                ) : (
                  option.title
                )}
              </h4>
              <p className="text-sm font-light text-text-muted">
                {option.description}
              </p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
