import Link from "next/link";

import Container from "./Container";
import MobileMenu from "./MobileMenu";

import { navigation } from "@/constants/navigation";
import { contacts } from "@/data/contacts";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-header items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl tracking-[0.25em] text-gold"
          >
            HAIRSKULL
          </Link>

          <nav aria-label="Основная навигация" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={contacts.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs tracking-[0.2em] text-gold uppercase transition-opacity hover:opacity-70 lg:block"
          >
            Telegram
          </a>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
