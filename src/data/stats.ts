import type { Stat } from "@/types/content";

import { master } from "./master";

const { firstPlaces, secondPlaces, thirdPlaces } = master.competitionResults;

/** Single source of truth for every number shown on the site. */
export const stats = {
  firstPlaces: { value: String(firstPlaces), label: "первых мест" },
  prizePlaces: {
    value: String(firstPlaces + secondPlaces + thirdPlaces),
    label: "призовых мест",
  },
  academies: { value: "5", label: "международных академий" },
} satisfies Record<string, Stat>;
