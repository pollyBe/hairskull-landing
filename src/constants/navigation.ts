import type { NavItem } from "@/types/content";

/** Anchors on the home page. Prefixed with "/" so they work from any route. */
export const navigation: NavItem[] = [
  { label: "Мастер", href: "/#about" },
  { label: "Методика", href: "/#method" },
  { label: "Работы", href: "/#works" },
  { label: "Обучение", href: "/#edu" },
  { label: "Контакты", href: "/#contacts" },
];

export const navNumber = (index: number) => String(index + 1).padStart(2, "0");
