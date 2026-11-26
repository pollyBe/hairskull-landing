import type { StaticImageData } from "next/image";

import type { Principle } from "@/types/content";
import xrayPhoto from "@/assets/images/method-xray-photo.jpg";
import xrayIllustration from "@/assets/images/method-xray-scheme.png";

export const hairSkull = {
  sheetLabel: "ЛИСТ 03 — МЕТОДИКА",
  quote: [
    "«Стрижка начинается не с волос — она начинается с ",
    "формы головы",
    "»",
  ],
  description:
    "Hair Skull — система построения стрижек на основе костной структуры головы, формы лица и распределения объёма. Осознанные решения в каждой зоне, а не работа по шаблону.",
  toggle: { show: "Показать насквозь", hide: "Скрыть схему" },
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "Анатомия",
    description: "Научитесь видеть форму до начала стрижки",
  },
  {
    number: "02",
    title: "Адаптация",
    description:
      "Надевать стрижку как дорогой костюм — индивидуально на каждого клиента",
  },
  {
    number: "03",
    title: "Простота",
    description:
      "Я за вас объединил все базовые техники и донесу всё просто и без воды",
  },
];

export interface XrayScheme {
  photo: StaticImageData;
  photoAlt: string;
  caption: string;
  scheme: StaticImageData;
  lines: { d: string; dashed?: string }[];
  points: { cx: number; cy: number; r: number }[];
  notes: { text: string; left: string; top: string }[];
}

export const xrayScheme: XrayScheme = {
  photo: xrayPhoto,
  photoAlt: "Геометричная стрижка на манекене",
  caption: "ФИГ. 03 · ПОСМОТРИ НАСКВОЗЬ",
  scheme: xrayIllustration,
  lines: [],
  points: [],
  notes: [
    { text: "45°", left: "77%", top: "40%" },
    { text: "затылочный бугор", left: "57%", top: "50.5%" },
    { text: "линия среза", left: "60%", top: "64.5%" },
  ],
};
