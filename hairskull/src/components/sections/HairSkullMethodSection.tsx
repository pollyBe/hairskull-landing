import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { principles } from "@/data/hair-skull";

export default function HairSkullMethodSection() {

  return (
    <section className="border-b border-[var(--border)] py-28">
      <Container>
        <div className="max-w-4xl">
          <SectionTitle
            tag="HAIR SKULL"
            title={
              <>
                Авторская{" "}
                <em className="text-[var(--gold)]">
                  методика
                </em>
              </>
            }
          />

          <h3
            className="
              font-serif
              text-xl
              leading-tight
              font-light
              md:text-4xl
              text-[var(--gold)]
            "
          >
            <em> "Стрижка начинается не с волос
            <br />
            Она начинается с формы головы"</em>
          </h3>

          <p
            className="
              mt-10
              max-w-3xl
              text-lg
              leading-8
              text-[var(--text-muted)]
            "
          >
            Hair Skull — авторская система построения стрижек,
            основанная на анализе костной структуры головы,
            формы лица и распределения объёма. Методика помогает
            создавать индивидуальные формы, корректировать
            пропорции внешности и принимать осознанные решения
            в каждой зоне стрижки, а не работать по шаблону
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {principles.map((item) => (
            <article
              key={item.number}
              className="
                group
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-8
                transition-all
                duration-300
                hover:border-[var(--gold)]
              "
            >
              <div
                className="
                  text-xs
                  tracking-[0.3em]
                  text-[var(--gold)]
                "
              >
                {item.number}
              </div>

              <h4
                className="
                  mt-4
                  font-serif
                  text-3xl
                  font-light
                "
              >
                {item.title}
              </h4>

              <p
                className="
                  mt-4
                  leading-8
                  text-[var(--text-muted)]
                "
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}