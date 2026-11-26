import type { EducationFormat, EducationOption } from "@/types/content";
import eduGroup from "@/assets/images/edu-group.jpg";
import eduIndividual from "@/assets/images/edu-individual.jpg";

export const education = {
  sheetLabel: "ЛИСТ 05 — ОБУЧЕНИЕ",
  intro:
    "Практика, понимание формы и системный подход. Формат подбирается под уровень подготовки и задачи мастера.",
  cta: { label: "Записаться", href: "#contacts" },
};

// TODO: get the URL from the client, e.g. { label: "GERA Professional", href: "https://..." }
const geraProfessionalLink: EducationOption["link"] = undefined;

export const educationFormats: EducationFormat[] = [
  {
    id: "individual",
    title: "Индивидуальное обучение",
    description:
      "Персональная работа с мастером: разбор техник, ошибок и построение эффективной системы работы под ваш уровень и задачи.",
    photo: {
      src: eduIndividual,
      alt: "Алексей проверяет длину у модели",
      caption: "один на один",
      tilt: -1.5,
      tapeLeft: "40%",
      tapeRotate: 3,
      position: "object-[center_30%]",
    },
  },
  {
    id: "group",
    title: "Групповое обучение",
    description: "Для мастеров, салонов и студий.",
    photo: {
      src: eduGroup,
      alt: "Групповой мастер-класс",
      caption: "мастер-класс в группе",
      tilt: 1.8,
      tapeLeft: "18%",
      tapeRotate: -4,
    },
    options: [
      {
        title: "На базе GERA Professional",
        description: "Практические демонстрации и отработка техник в группе",
        link: geraProfessionalLink,
      },
      {
        title: "Выезд в ваш город",
        description: "Мастер-классы на площадке организатора в любом городе",
      },
    ],
  },
];
