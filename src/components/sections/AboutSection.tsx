import Link from "next/link";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import PhotoFrame from "@/components/ui/PhotoFrame";
import SectionTitle from "@/components/ui/SectionTitle";
import { master } from "@/data/master";
import { stats } from "@/data/stats";

const aboutStats = [
  stats.firstPlaces,
  stats.experience,
  stats.prizePlaces,
  stats.academies,
];

interface AboutSectionProps {
  /** "preview" on the home page (h2 + link to /about), "page" opens /about (h1) */
  variant?: "preview" | "page";
}

export default function AboutSection({
  variant = "preview",
}: AboutSectionProps) {
  const isPage = variant === "page";

  return (
    <section
      id="about"
      className="border-b border-border py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          <FadeIn direction="left">
            <PhotoFrame
              photo={master.photo}
              sizes="(min-width: 768px) 50vw, 100vw"
              placeholder={
                <span className="text-xs tracking-[0.2em] text-muted/40 uppercase">
                  Фото
                </span>
              }
            />
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <SectionTitle
                as={isPage ? "h1" : "h2"}
                tag="О мастере"
                title={
                  <>
                    {master.firstName}{" "}
                    <em className="text-gold">{master.lastName}</em>
                  </>
                }
              />
            </FadeIn>

            <FadeIn delay={0.2} className="space-y-4">
              {master.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-7 text-muted sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </FadeIn>

            <FadeIn delay={0.3}>
              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:mt-10 sm:pt-10">
                {aboutStats.map((item) => (
                  <div key={item.label} className="flex flex-col-reverse">
                    <dt className="mt-1 text-xs tracking-[0.18em] text-muted uppercase">
                      {item.label}
                    </dt>
                    <dd className="font-serif text-3xl text-gold sm:text-4xl">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {!isPage && (
                <Button asChild variant="secondary" className="mt-10">
                  <Link href="/about">Подробнее о пути мастера</Link>
                </Button>
              )}
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
