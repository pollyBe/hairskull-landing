"use client";

import Image from "next/image";
import { useState } from "react";

import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import FigCaption from "@/components/ui/FigCaption";
import SheetLabel from "@/components/ui/SheetLabel";
import XrayOverlay from "@/components/ui/XrayOverlay";
import { hairSkull, principles, xrayScheme } from "@/data/hair-skull";
import { cn } from "@/lib/utils";
import type { Principle } from "@/types/content";

export default function HairSkullMethodSection() {
  const [pinned, setPinned] = useState(false);
  const [quoteLead, quoteAccent, quoteTail] = hairSkull.quote;
  const [anatomy, adaptation, simplicity] = principles;

  return (
    <Section id="method">
      <FadeIn className="flex flex-wrap items-end justify-between gap-10">
        <div className="flex max-w-[820px] flex-col gap-5">
          <SheetLabel>{hairSkull.sheetLabel}</SheetLabel>
          <h2 className="font-display text-[clamp(44px,4.6vw,76px)] leading-[1.02] font-light italic">
            {quoteLead}
            <span className="text-gold">{quoteAccent}</span>
            {quoteTail}
          </h2>
        </div>

        <Button
          variant="outline-gold"
          aria-pressed={pinned}
          aria-controls="method-xray"
          onClick={() => setPinned((v) => !v)}
          className="aria-pressed:bg-gold/10"
        >
          {pinned ? hairSkull.toggle.hide : hairSkull.toggle.show}
        </Button>
      </FadeIn>

      <FadeIn
        delay={0.1}
        className="mt-14 grid gap-10 lg:grid-cols-[1fr_2fr_1fr]"
      >
        <div className="flex flex-col justify-between gap-10">
          <PrincipleItem item={anatomy} accent />
          <PrincipleItem item={adaptation} />
        </div>

        <figure
          id="method-xray"
          data-xray={pinned || undefined}
          className="group relative order-first h-[520px] min-w-0 overflow-hidden lg:order-none lg:h-[720px]"
        >
          <Image
            src={xrayScheme.photo}
            alt={xrayScheme.photoAlt}
            placeholder="blur"
            sizes="(min-width: 1440px) 660px, (min-width: 1024px) 46vw, 100vw"
            className="size-full object-cover transition-opacity duration-500 group-hover:opacity-25 group-data-xray:opacity-25 motion-reduce:transition-none"
          />

          <XrayOverlay
            scheme={xrayScheme}
            className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-data-xray:opacity-100 motion-reduce:transition-none"
          />

          <FigCaption>{xrayScheme.caption}</FigCaption>
        </figure>

        <div className="flex flex-col justify-between gap-10">
          <PrincipleItem item={simplicity} />
          <p className="text-[15px] leading-[1.8] font-light text-text-muted">
            {hairSkull.description}
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}

function PrincipleItem({
  item,
  accent,
}: {
  item: Principle;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 border-t pt-5",
        accent ? "border-gold" : "border-line-3",
      )}
    >
      <h3 className="font-mono text-xs text-gold uppercase">
        {item.number} / {item.title}
      </h3>
      <p className="font-display text-[30px] leading-[1.15]">
        {item.description}
      </p>
    </div>
  );
}
