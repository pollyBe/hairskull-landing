"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { navigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
            className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-[var(--border)] bg-[var(--surface)] px-8 py-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Закрыть меню"
              className="self-end text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
            >
              <span className="block h-px w-6 rotate-45 translate-y-px bg-current" />
              <span className="block h-px w-6 -rotate-45 -translate-y-px bg-current" />
            </button>

            {/* Logo */}
            <div className="mt-10 font-serif text-lg tracking-[0.25em] text-[var(--gold)]">
              HAIRSKULL
            </div>

            {/* Nav links */}
            <nav className="mt-12 flex flex-col gap-8">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="text-sm uppercase tracking-[0.25em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Socials */}
            <div className="mt-auto flex flex-col gap-4 border-t border-[var(--border)] pt-8">
              <a
                href={socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] transition-opacity hover:opacity-70"
              >
                Telegram
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors hover:text-[var(--gold)]"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
