import Container from "./Container";

import { navigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-serif text-xl tracking-[0.2em] text-[var(--gold)]">
              HAIRSKULL
            </div>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              Алексей Платун · Парикмахер-стилист · Преподаватель
            </p>
          </div>

          {/* Nav — anchor links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
            >
              Instagram
            </a>
            <a
              href={socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
            >
              Telegram
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Алексей Платун. Все права защищены.
        </div>
      </Container>
    </footer>
  );
}
