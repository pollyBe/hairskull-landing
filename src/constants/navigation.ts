import type { NavItem } from "@/types/content";

import { galleryItems } from "@/data/gallery";

/** Anchors on the home page. Prefixed with "/" so they work from any route. */
export const navigation: NavItem[] = [
  { label: "О мастере", href: "/#about" },
  { label: "Методика", href: "/#method" },
  { label: "Обучение", href: "/#education" },
  { label: "Контакты", href: "/#contact" },
];

export const hasPortfolio = galleryItems.length > 0;

export const pages: NavItem[] = [
  { label: "Биография", href: "/about" },
  { label: "Курс Hair Skull", href: "/education" },
  ...(hasPortfolio ? [{ label: "Портфолио", href: "/portfolio" }] : []),
];
