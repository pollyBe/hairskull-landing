"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";

import { master } from "@/data/master";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <Container>
        <div className="grid min-h-[calc(100svh-80px)] items-center gap-10 py-16 sm:py-20 sm:gap-12 lg:grid-cols-2 lg:gap-24 lg:py-24">

          {/* Text — always first */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6 flex items-center gap-4 sm:mb-8"
            >
              <div className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">
                Минск
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-4xl leading-tight font-light sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl xl:text-8xl"
            >
              {master.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-muted)] sm:mt-8 sm:text-base sm:leading-8"
            >
              {master.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
            >
              <Button asChild>
                <a href="#education">Обучение</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#about">О мастере</a>
              </Button>
            </motion.div>
          </div>

          {/* Visual — on mobile shows above text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.12),transparent_70%)] pointer-events-none" />

            <div className="relative aspect-[4/5] max-h-[60svh] overflow-hidden border border-[var(--border)] bg-[var(--surface)] sm:max-h-none lg:aspect-[4/5]">
              <div className="flex h-full items-center justify-center">
                <div className="pointer-events-none text-center">
                  <div className="font-serif text-5xl font-light tracking-[0.15em] text-[rgba(201,168,76,0.10)] sm:text-6xl md:text-8xl">
                    HAIR
                  </div>
                  <div className="-mt-2 font-serif text-5xl font-light tracking-[0.15em] text-[rgba(201,168,76,0.10)] sm:text-6xl md:text-8xl">
                    SKULL
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 z-10 sm:bottom-6 sm:left-6">
                <StatCard value="15+" label="Лет опыта" />
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
