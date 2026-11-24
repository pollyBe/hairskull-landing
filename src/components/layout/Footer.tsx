import Link from "next/link";

import Container from "./Container";

import { navigation, pages } from "@/constants/navigation";
import { contacts } from "@/data/contacts";
import { master } from "@/data/master";

const linkClassName =
  "text-sm whitespace-nowrap text-muted transition-colors hover:text-gold";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="font-serif text-xl tracking-[0.2em] text-gold">
              HAIRSKULL
            </div>
            <p className="mt-3 text-sm text-muted">
              {master.fullName} · Парикмахер-стилист · Преподаватель
            </p>
          </div>

          <nav aria-label="Навигация в подвале" className="flex gap-12">
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {pages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-col gap-3">
            {[contacts.instagram, contacts.telegram].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {master.fullName}. Все права защищены.
        </div>
      </Container>
    </footer>
  );
}
