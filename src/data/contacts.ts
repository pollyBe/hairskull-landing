import type { ContactLink } from "@/types/content";

import { master } from "./master";

// TODO: confirm real handles with the client
export const contacts = {
  telegram: {
    label: "Telegram",
    value: "@hairskull",
    href: "https://t.me/hairskull",
  },
  instagram: {
    label: "Instagram",
    value: "@hairskull",
    href: "https://instagram.com/hairskull",
  },
  location: {
    label: "Локация",
    value: `${master.city}, ${master.country}`,
  },
} satisfies Record<string, ContactLink>;

export const contactSection = {
  sheetLabel: "ЛИСТ 06 — ОБУЧЕНИЕ И СОТРУДНИЧЕСТВО",
  text: "Пройти обучение, организовать мастер-класс, провести образовательное мероприятие или обсудить сотрудничество — напишите удобным способом.",
  handleAccent: "skull",
  note: "пиши — разберём твою стрижку по косточкам",
};
