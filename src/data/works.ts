import type { StaticImageData } from "next/image";

import works01 from "@/assets/images/works-01.jpg";
import works02 from "@/assets/images/works-02.jpg";
import works03 from "@/assets/images/works-03.jpg";
import works04 from "@/assets/images/works-04.jpg";
import works05 from "@/assets/images/works-05.jpg";
import works06 from "@/assets/images/works-06.jpg";
import works07 from "@/assets/images/works-07.jpg";
import works08 from "@/assets/images/works-08.jpg";
import works09 from "@/assets/images/works-09.jpg";

export const works = {
  sheetLabel: "ЛИСТ 04 — РАБОТЫ",
  title: "Почерк",
  carouselLabel: "Работы мастера",
  instagramLink: "ещё больше в Instagram",
};

export interface WorkSlide {
  src: StaticImageData;
  alt: string;
}

export const workSlides: WorkSlide[] = [
  { src: works01, alt: "Блонд-каре" },
  { src: works02, alt: "Длинные прямые волосы, профиль" },
  { src: works03, alt: "Короткая стрижка с андеркатом" },
  { src: works04, alt: "Прямое каре в профиль" },
  { src: works05, alt: "Длинные слоистые волосы с чёлкой" },
  { src: works06, alt: "Срез каре у подбородка" },
  { src: works07, alt: "Каре сзади" },
  { src: works08, alt: "Пикси в профиль" },
  { src: works09, alt: "Рука мастера в волосах модели" },
];
