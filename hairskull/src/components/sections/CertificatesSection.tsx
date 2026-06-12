import Container from "@/components/layout/Container";

import SectionTitle from "@/components/ui/SectionTitle";
import CertificateCard from "@/components/ui/CertificateCard";

import { certificates } from "@/data/certificates";

export default function CertificatesSection() {
  return (
    <section className="border-b border-[var(--border)] py-28">
      <Container>
        <SectionTitle
          tag="Образование"
          title={
            <>
              Сертификаты и{" "}
              <em className="text-[var(--gold)]">
                обучение
              </em>
            </>
          }
        />

        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-[var(--text-muted)]
          "
        >
          Постоянное профессиональное развитие,
          участие в международных образовательных
          программах и обучение у ведущих специалистов
          индустрии
        </p>

        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              {...certificate}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}