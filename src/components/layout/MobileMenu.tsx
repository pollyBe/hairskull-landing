"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigation, navNumber } from "@/constants/navigation";
import { contacts } from "@/data/contacts";
import logo from "@/assets/images/logo-hairskull-light.png";

const MENU_ID = "mobile-menu";

/**
 * Built on the native <dialog>: showModal() gives focus trapping, Escape to
 * close, an inert background and focus restoration out of the box.
 * Slide/backdrop animation and scroll lock are in globals.css.
 */
export default function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const close = () => dialogRef.current?.close();

  // Close if the viewport grows to desktop while the menu is open
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) dialogRef.current?.close();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Открыть меню"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={MENU_ID}
        className="-mr-2 flex size-11 items-center justify-center lg:hidden"
      >
        {/* Inner 24px box so the short line aligns to the lines' edge, not the button's */}
        <span aria-hidden className="flex w-6 flex-col items-end gap-[5px]">
          <span className="block h-px w-6 bg-gold" />
          <span className="block h-px w-6 bg-gold" />
          <span className="block h-px w-4 bg-gold" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        id={MENU_ID}
        aria-label="Меню"
        onClose={() => setIsOpen(false)}
        // A click on the dialog element itself means a click on the backdrop
        onClick={(e) => e.target === e.currentTarget && close()}
        className="mobile-menu border-l border-line bg-paper p-0 text-text"
      >
        <div className="flex h-full flex-col px-8 py-10">
          <div className="flex items-center justify-between">
            <Image
              src={logo}
              alt="Hair Skull"
              sizes="44px"
              className="h-11 w-auto"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Закрыть меню"
              className="-mr-3 flex size-11 flex-col items-center justify-center text-text-dim transition-colors hover:text-gold"
            >
              <span className="block h-px w-6 translate-y-px rotate-45 bg-current" />
              <span className="block h-px w-6 -translate-y-px -rotate-45 bg-current" />
            </button>
          </div>

          <nav aria-label="Мобильная навигация" className="mt-12">
            <ul className="flex flex-col gap-4">
              {navigation.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex min-h-11 items-center gap-3 font-mono text-sm tracking-[0.08em] text-text uppercase transition-colors hover:text-gold"
                  >
                    <span className="text-text-dim">{navNumber(i)}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-4 border-t border-line-3 pt-8">
            <a
              href={contacts.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.08em] text-gold uppercase transition-colors hover:text-gold-hover"
            >
              Telegram <span aria-hidden>↗</span>
            </a>
            <a
              href={contacts.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.08em] text-text-dim uppercase transition-colors hover:text-gold"
            >
              Instagram <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
