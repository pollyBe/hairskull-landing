import Container from "@/components/layout/Container";

import SectionTitle from "@/components/ui/SectionTitle";
import SocialLink from "@/components/ui/SocialLink";

import { contacts } from "@/data/contacts";

export default function ContactSection() {
  return (
    <section className="py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionTitle
              tag="Контакты"
              title={
                <>
                  Обучение и{" "}
                  <em className="text-[var(--gold)]">
                    сотрудничество
                  </em>
                </>
              }
            />

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-[var(--text-muted)]
              "
            >
              Если вы хотите пройти обучение,
              организовать мастер-класс,
              провести образовательное мероприятие
              или обсудить сотрудничество —
              свяжитесь удобным способом
            </p>
          </div>

          <div>
            <SocialLink
              label={contacts.telegram.label}
              value={contacts.telegram.value}
              href={contacts.telegram.href}
            />

            <SocialLink
              label={contacts.instagram.label}
              value={contacts.instagram.value}
              href={contacts.instagram.href}
            />

            <SocialLink
              label={contacts.location.label}
              value={contacts.location.value}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}