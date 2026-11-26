import Image from "next/image";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import HandNote from "@/components/ui/HandNote";
import SheetLabel from "@/components/ui/SheetLabel";
import { hero } from "@/data/hero";
import heroSkull from "@/assets/images/hero-skull.png";

// Entrance animations are pure CSS (motion-safe:animate-*), so this stays a Server Component
export default function HeroSection() {
  return (
    <section className="relative">
      <Container>
        <div className="grid items-center pt-6 pb-18 min-[620px]:grid-cols-[3fr_2fr] lg:pb-20">
          <div className="relative z-10 flex flex-col items-center gap-7 py-6 text-center min-[620px]:items-start min-[620px]:text-left lg:py-10">
            <SheetLabel className="motion-safe:animate-enter">
              {hero.sheetLabel}
            </SheetLabel>

            <h1 className="font-display text-[clamp(56px,17vw,76px)] leading-[0.86] font-light tracking-[-0.02em] motion-safe:animate-rise motion-safe:[animation-delay:100ms] min-[620px]:text-[clamp(76px,11.5vw,184px)] min-[620px]:whitespace-nowrap">
              {hero.title.line1}
              <br />
              <span className="min-[620px]:pl-[0.6em]">
                {hero.title.line2Lead}
                <em className="text-gold italic">{hero.title.line2Accent}</em>
              </span>
            </h1>

            <HandNote
              arrow
              rotate={-3}
              className="text-[clamp(30px,2.8vw,42px)] motion-safe:animate-enter motion-safe:[animation-delay:220ms] min-[620px]:pl-[12%] [&>span]:max-w-[460px]"
            >
              {hero.note}
            </HandNote>

            <div className="flex flex-wrap justify-center gap-4 pt-3 motion-safe:animate-enter motion-safe:[animation-delay:360ms] min-[620px]:justify-start">
              <Button asChild>
                <a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
              </Button>
              <Button asChild variant="outline">
                <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center motion-safe:animate-enter motion-safe:[animation-delay:150ms]">
            <Image
              src={heroSkull}
              alt={hero.skullAlt}
              preload
              sizes="(min-width: 620px) 444px, 280px"
              className="block h-[480px] w-auto max-w-full object-contain min-[620px]:h-[clamp(480px,70vw,760px)]"
            />

            <HandNote
              as="p"
              tone="text"
              rotate={4}
              className="absolute top-10 right-0 text-[22px] min-[620px]:top-[120px] min-[620px]:text-[26px]"
            >
              {hero.skullNote[0]}
              <br />
              {hero.skullNote[1]}
            </HandNote>

            <p className="absolute bottom-6 left-0 font-mono text-[11px] text-text-dim min-[620px]:bottom-[60px]">
              {hero.skullFig}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
