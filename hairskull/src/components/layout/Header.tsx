"use client";

import Link from "next/link";

import Container from "./Container";

import { navigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(8,8,8,0.92)] backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl tracking-[0.25em] text-[var(--gold)]"
          >
            HAIRSKULL
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs uppercase tracking-[0.2em] text-[var(--gold)] transition-opacity hover:opacity-70 md:block"
          >
            Telegram
          </a>
        </div>
      </Container>
    </header>
  );
}