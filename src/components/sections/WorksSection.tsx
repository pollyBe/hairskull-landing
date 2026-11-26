"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import FigCaption from "@/components/ui/FigCaption";
import OutlineNumber from "@/components/ui/OutlineNumber";
import SheetLabel from "@/components/ui/SheetLabel";
import { contacts } from "@/data/contacts";
import { workSlides, works } from "@/data/works";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

export default function WorksSection() {
  const reducedMotion = useReducedMotion();

  const plugins = useMemo(
    () =>
      reducedMotion
        ? []
        : [
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ],
    [reducedMotion],
  );

  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration: 30,
      active: false,
      breakpoints: { "(min-width: 64rem)": { active: true } },
    },
    plugins,
  );

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  return (
    <Section id="works">
      <FadeIn className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-3">
          <SheetLabel>{works.sheetLabel}</SheetLabel>
          <h2 className="font-display text-[clamp(64px,9vw,150px)] leading-[0.85] font-light tracking-[-0.02em]">
            <em className="text-gold italic">{works.title}</em>
            <OutlineNumber
              tone="pale"
              className="hidden pl-[0.3em] text-[0.5em] font-light lg:inline"
            >
              <span className="sr-only">, работа </span>
              {pad(selected + 1)}/{pad(workSlides.length)}
            </OutlineNumber>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-7">
          <Button asChild variant="hand-link">
            <a
              href={contacts.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {works.instagramLink}
            </a>
          </Button>

          <div className="hidden gap-2 lg:flex">
            <button
              type="button"
              onClick={prev}
              aria-label="Предыдущие работы"
              className="flex size-14 items-center justify-center border border-line-3 text-text transition-colors hover:border-gold"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Следующие работы"
              className="flex size-14 items-center justify-center border border-gold text-gold transition-colors hover:border-gold-hover hover:text-gold-hover"
            >
              <Chevron direction="right" />
            </button>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-12">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={works.carouselLabel}
          onKeyDown={onKeyDown}
        >
          <div
            ref={viewportRef}
            className="snap-x snap-mandatory overflow-x-auto lg:cursor-grab lg:snap-none lg:overflow-hidden lg:active:cursor-grabbing"
          >
            <ul className="flex gap-2 max-lg:transform-none! lg:-ml-2 lg:gap-0">
              {workSlides.map((slide, i) => (
                <li
                  key={slide.alt}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} из ${workSlides.length}`}
                  className="shrink-0 basis-[78%] snap-start max-lg:transform-none! lg:basis-1/3 lg:pl-2"
                >
                  <div className="relative h-[460px] lg:h-[580px]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      draggable={false}
                      placeholder="blur"
                      sizes="(min-width: 1440px) 440px, (min-width: 1024px) 31vw, 78vw"
                      className="object-cover object-[center_25%] select-none"
                    />
                    <FigCaption>ФИГ. 04.{i + 1}</FigCaption>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 hidden justify-center lg:flex">
          {workSlides.map((slide, i) => (
            <button
              key={slide.alt}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Показать работу ${i + 1}`}
              aria-current={i === selected || undefined}
              className="group flex size-11 items-center justify-center"
            >
              <span
                className={cn(
                  "block h-0.5 transition-[width,background-color] duration-300 motion-reduce:transition-none",
                  i === selected
                    ? "w-8 bg-gold"
                    : "w-3 bg-line-3 group-hover:bg-text-dim",
                )}
              />
            </button>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}
