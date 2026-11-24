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
