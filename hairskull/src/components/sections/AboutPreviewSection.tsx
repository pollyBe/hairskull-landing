import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

import { master } from "@/data/master";

export default function AboutPreviewSection() {
  return (
    <section className="border-b border-[var(--border)] py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
            <Image
              src=''
              alt={master.fullName}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionTitle
              tag="О мастере"
              title={
                <>
                  Алексей{" "}
                  <em className="text-[var(--gold)]">
                    Платун
                  </em>
                </>
              }
            />

            <p
              className="
                max-w-xl
                text-lg
                leading-8
                text-[var(--text-muted)]
              "
            >
              {master.shortBio}
            </p>

            <div className="mt-10">
              {/* <Button
                asChild
                variant="secondary"
              >
                <Link href="/about">
                  Подробнее о мастере
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}