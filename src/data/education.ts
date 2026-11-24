import type { EducationFormat, EducationOption, Stat } from "@/types/content";

import { stats } from "./stats";

export const educationIntro =
  "Обучение строится вокруг практики, понимания формы и системного подхода к работе. Формат подбирается под уровень подготовки и задачи мастера";

// TODO: get the URL from the client, e.g. { label: "GERA Professional", href: "https://..." }
const geraProfessionalLink: EducationOption["link"] = undefined;

export const educationFormats: EducationFormat[] = [
  {
    id: "individual",
    title: "Индивидуальное обучение",
    description:
      "Персональная работа с мастером один на один: разбор техник, ошибок и построение эффективной системы работы под ваш уровень и задачи",
  },
  {
    id: "group",
    title: "Групповое обучение",
    description: "Мастер-классы в группе для мастеров, салонов и студий",
    options: [
      {
        title: "Мастер-классы на базе GERA Professional",
        description: "Практические демонстрации и отработка техник в группе",
        link: geraProfessionalLink,
      },
      {
        title: "Выездные мастер-классы в ваш город",
        description:
          "Проведение мастер-классов на площадке организатора в любом городе",
      },
    ],
  },
];

export const educationHighlights: Stat[] = [
  stats.experience,
  stats.prizePlaces,
  { value: "TIGI", label: "educator" },
  { value: "TONI&GUY", label: "academy" },
];
