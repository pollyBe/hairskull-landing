import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import EducationCard from "@/components/ui/EducationCard";
import FadeIn from "@/components/ui/FadeIn";
import SheetLabel from "@/components/ui/SheetLabel";
import { education, educationFormats } from "@/data/education";
import { cn } from "@/lib/utils";

export default function EducationFormatsSection() {
  return (
    <Section id="edu">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <FadeIn className="flex max-w-[700px] flex-col gap-5">
          <SheetLabel>{education.sheetLabel}</SheetLabel>
          <h2 className="font-display text-[clamp(56px,6vw,100px)] leading-[0.9] font-light">
            Форматы <em className="text-gold italic">обучения</em>
          </h2>
          <p className="text-base leading-[1.85] font-light text-text-muted">
            {education.intro}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Button asChild>
            <a href={education.cta.href}>{education.cta.label}</a>
          </Button>
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-16 lg:mt-[72px] lg:grid-cols-2 lg:gap-[72px]">
        {educationFormats.map(({ id, ...format }, index) => (
          <FadeIn
            key={id}
            delay={index * 0.1}
            className={cn(index % 2 === 1 && "lg:pt-16")}
          >
            <EducationCard {...format} index={index} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
