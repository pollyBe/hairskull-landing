"use client";

import Link from "next/link";
import { useState } from "react";

import Container from "./Container";
import MobileMenu from "./MobileMenu";

import { navigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(8,8,8,0.92)] backdrop-blur-md">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className="font-serif text-xl tracking-[0.25em] text-[var(--gold)]"
            >
              HAIRSKULL
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-10 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
                >
                  {item.label}
                </a>
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

            {/* Burger button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Открыть меню"
              className="flex flex-col items-center justify-center gap-[5px] p-2 md:hidden"
            >
              <span className="block h-px w-6 bg-[var(--gold)]" />
              <span className="block h-px w-6 bg-[var(--gold)]" />
              <span className="block h-px w-4 self-end bg-[var(--gold)]" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
