import Image from "next/image";

import Section from "@/components/layout/Section";
import FigCaption from "@/components/ui/FigCaption";
import HandNote from "@/components/ui/HandNote";
import { toolPhotos, tools } from "@/data/tools";
import { cn } from "@/lib/utils";

export default function ToolsSection() {
  const lastIndex = toolPhotos.length - 1;

  return (
    <Section contained={false} aria-label={tools.label}>
      <ul className="grid grid-cols-2 lg:grid-cols-3">
        {toolPhotos.map((photo, i) => (
          <li
            key={photo.alt}
            className={cn(
              "relative h-[280px] min-w-0 lg:h-[420px]",
              i === 0 && "col-span-2 lg:col-span-1",
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              placeholder="blur"
              sizes={
                i === 0
                  ? "(min-width: 1024px) 34vw, 100vw"
                  : "(min-width: 1024px) 34vw, 50vw"
              }
              className="object-cover"
            />

            {i === 0 && (
              <HandNote
                as="span"
                tone="text"
                rotate={-3}
                className="absolute top-5 left-5 text-[30px]"
              >
                {tools.note}
              </HandNote>
            )}

            {i === lastIndex && (
              <FigCaption corner="bottom-right">{tools.caption}</FigCaption>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
