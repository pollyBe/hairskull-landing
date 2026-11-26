import Image from "next/image";

import Section from "@/components/layout/Section";
import FadeIn from "@/components/ui/FadeIn";
import OutlineNumber from "@/components/ui/OutlineNumber";
import SheetLabel from "@/components/ui/SheetLabel";
import { master } from "@/data/master";
import { stats } from "@/data/stats";
import portrait from "@/assets/images/about-portrait.jpg";

const aboutStats = [stats.firstPlaces, stats.prizePlaces, stats.academies];

export default function AboutSection() {
  const [leadText, leadAccent, leadTail] = master.about.lead;

  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn direction="left" className="relative min-w-0">
          <Image
            src={portrait}
            alt={`${master.fullName}, портрет`}
            placeholder="blur"
            sizes="(min-width: 1440px) 664px, (min-width: 1024px) 46vw, 100vw"
            className="block h-[520px] w-full object-cover object-right contrast-[1.05] lg:h-[760px]"
          />

          <SheetLabel className="absolute top-6 left-6">
            ЛИСТ 02 — МАСТЕР
          </SheetLabel>

          <h2 className="absolute bottom-8 left-6 font-display text-[clamp(64px,8vw,132px)] leading-[0.85] font-light tracking-[-0.02em]">
            {master.firstName}
            <br />
            <em className="text-gold italic">{master.lastName}</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col gap-8">
          <p className="font-display text-[clamp(28px,2.4vw,38px)] leading-[1.25]">
            {leadText}
            <em className="text-gold italic">{leadAccent}</em>
            {leadTail}
          </p>

          <p className="text-base leading-[1.85] font-light text-text-muted">
            {master.about.text}
          </p>

          <ul className="border-t border-line-2">
            {aboutStats.map((item) => (
              <li
                key={item.label}
                className="flex items-baseline gap-6 border-b border-line-2 py-[18px]"
              >
                <OutlineNumber className="w-[110px] shrink-0 text-[64px]">
                  {item.value.padStart(2, "0")}
                </OutlineNumber>
                <span className="font-mono text-[13px] tracking-[0.06em] uppercase">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}
