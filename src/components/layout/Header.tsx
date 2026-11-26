import Image from "next/image";
import Link from "next/link";

import { navigation, navNumber } from "@/constants/navigation";
import { contacts } from "@/data/contacts";
import logo from "@/assets/images/logo-hairskull-light.png";

import Container from "./Container";
import HeaderShell from "./HeaderShell";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <HeaderShell>
      <Container>
        <div className="flex h-header items-center justify-between gap-6">
          <Link href="/#top" className="shrink-0">
            <Image
              src={logo}
              alt="Hair Skull"
              preload
              sizes="58px"
              className="h-11 w-auto lg:h-[58px]"
            />
          </Link>

          <nav aria-label="Основная навигация" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navigation.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-xs tracking-[0.08em] text-text uppercase transition-colors hover:text-gold"
                  >
                    {navNumber(i)} {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contacts.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden border border-gold px-[18px] py-3 font-mono text-xs tracking-[0.08em] text-gold uppercase transition-colors hover:border-gold-hover hover:text-gold-hover md:inline-block"
            >
              Telegram <span aria-hidden>↗</span>
            </a>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </HeaderShell>
  );
}
