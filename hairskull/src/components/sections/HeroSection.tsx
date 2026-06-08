import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

import { master } from "@/data/master";
import StatCard from "../ui/StatCard";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <Container>
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-12 py-24 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-10 bg-[var(--gold)]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">
                {master.city}
              </span>
            </div>

            <h1 className="font-serif text-6xl leading-none font-light md:text-7xl lg:text-8xl">
              Алексей
              <br />
              <span className="italic text-[var(--gold)]">
                Платун
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-[var(--text-muted)]">
              {master.role}
            </p>

            <p className="mt-6 max-w-xl leading-8 text-[var(--text-muted)]">
              {master.shortBio}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/education">
                  Обучение
                </Link>
              </Button>

              <Button
                asChild
                variant="secondary"
              >
                <Link href="/about">
                  О мастере
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.12),transparent_70%)]" />

            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
            <div className="absolute -left-6 bottom-6 z-10 hidden max-w-[240px] md:block">
  <StatCard
    value="12+"
    label="Лет опыта"
  />
</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}