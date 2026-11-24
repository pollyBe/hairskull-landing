import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import SocialLink from "@/components/ui/SocialLink";
import { contacts } from "@/data/contacts";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <SectionTitle
              tag="Контакты"
              title={
                <>
                  Обучение и <em className="text-gold">сотрудничество</em>
                </>
              }
            />

            <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Если вы хотите пройти обучение, организовать мастер-класс,
              провести образовательное мероприятие или обсудить сотрудничество —
              свяжитесь удобным способом
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <SocialLink {...contacts.telegram} />
            <SocialLink {...contacts.instagram} />
            <SocialLink {...contacts.location} />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
