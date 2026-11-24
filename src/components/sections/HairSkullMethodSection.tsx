import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import { hairSkull, principles } from "@/data/hair-skull";

export default function HairSkullMethodSection() {
  return (
    <section
      id="method"
      className="border-b border-border py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="max-w-4xl">
          <FadeIn>
            <SectionTitle
              tag="Hair Skull"
              title={
                <>
                  Авторская <em className="text-gold">методика</em>
                </>
              }
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <blockquote className="font-serif text-lg leading-snug text-gold italic sm:text-2xl md:text-3xl lg:text-4xl">
              <p>
                &ldquo;{hairSkull.quote[0]}
                <br />
                {hairSkull.quote[1]}&rdquo;
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-3xl text-base leading-7 text-muted sm:mt-10 sm:text-lg sm:leading-8">
              {hairSkull.description}
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-3">
          {principles.map((item, i) => (
            <FadeIn key={item.number} delay={i * 0.1}>
              <article className="h-full border border-t-2 border-border border-t-gold bg-surface-secondary p-6 transition-colors duration-300 hover:border-gold sm:p-8 lg:p-10">
                <div aria-hidden className="font-serif text-5xl text-gold">
                  {item.number}
                </div>

                <h3 className="mt-6 font-serif text-3xl leading-tight font-medium sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-foreground/90">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
