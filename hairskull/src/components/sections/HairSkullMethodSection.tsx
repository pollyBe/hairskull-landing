import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

import { principles } from "@/data/hair-skull";

export default function HairSkullMethodSection() {
  return (
    <section id="method" className="border-b border-[var(--border)] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-4xl">
          <FadeIn>
            <SectionTitle
              tag="HAIR SKULL"
              title={
                <>
                  Авторская{" "}
                  <em className="text-[var(--gold)]">методика</em>
                </>
              }
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="font-serif text-lg font-light leading-snug text-[var(--gold)] sm:text-2xl md:text-3xl lg:text-4xl">
              <em>
                &ldquo;Стрижка начинается не с волос —<br />
                она начинается с формы головы&rdquo;
              </em>
            </h3>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-3xl text-sm leading-7 text-[var(--text-muted)] sm:mt-10 sm:text-base sm:leading-8">
              Hair Skull — авторская система построения стрижек,
              основанная на анализе костной структуры головы,
              формы лица и распределения объёма. Методика помогает
              создавать индивидуальные формы, корректировать
              пропорции внешности и принимать осознанные решения
              в каждой зоне стрижки, а не работать по шаблону
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {principles.map((item, i) => (
            <FadeIn key={item.number} delay={i * 0.1}>
              <article className="group h-full border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--gold)] sm:p-8">
                <div className="text-xs tracking-[0.3em] text-[var(--gold)]">
                  {item.number}
                </div>

                <h4 className="mt-4 font-serif text-2xl font-light sm:text-3xl">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:mt-4 sm:text-base sm:leading-8">
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
