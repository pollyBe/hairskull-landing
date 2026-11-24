import Link from "next/link";

import Container from "@/components/layout/Container";
import BrandWatermark from "@/components/ui/BrandWatermark";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import PhotoFrame from "@/components/ui/PhotoFrame";
import StatCard from "@/components/ui/StatCard";
import { master } from "@/data/master";
import { stats } from "@/data/stats";

// Entrance animations are pure CSS (motion-safe:animate-*), so this stays a Server Component
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container>
        <div className="grid min-h-[calc(100svh-var(--spacing-header))] items-center gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:gap-24 lg:py-24">
          {/* Text — below the photo on mobile, left column on desktop */}
          <div className="order-2 lg:order-1">
            <Eyebrow className="mb-6 motion-safe:animate-enter sm:mb-8">
              {master.city}
            </Eyebrow>

            <h1 className="font-serif text-4xl leading-tight motion-safe:animate-rise motion-safe:[animation-delay:100ms] sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl xl:text-8xl">
              {master.heroTitle}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted motion-safe:animate-enter motion-safe:[animation-delay:220ms] sm:mt-8 sm:leading-8">
              {master.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 motion-safe:animate-enter motion-safe:[animation-delay:360ms] sm:mt-10 sm:gap-4">
              <Button asChild>
                <Link href="/#education">Обучение</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/#about">О мастере</Link>
              </Button>
            </div>
          </div>

          {/* Visual — above the text on mobile */}
          <div className="relative order-1 motion-safe:animate-enter motion-safe:[animation-delay:150ms] lg:order-2">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-gold)_12%,transparent),transparent_70%)]"
            />

            <PhotoFrame
              photo={master.photo}
              placeholder={<BrandWatermark />}
              sizes="(min-width: 1024px) 50vw, 100vw"
              preload
              className="max-h-[60svh] sm:max-h-none"
            >
              <div className="absolute bottom-4 left-4 z-10 sm:bottom-6 sm:left-6">
                <StatCard {...stats.experience} />
              </div>
            </PhotoFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
