import type { StaticImageData } from "next/image";

import toolsBlade from "@/assets/images/tools-blade.jpg";
import toolsClippers from "@/assets/images/tools-clippers.jpg";
import toolsScissors from "@/assets/images/tools-scissors.jpg";

export const tools = {
  label: "Инструменты мастера",
  note: "мои инструменты",
  caption: "ФИГ. 05 · ДЕТАЛИ",
};

export const toolPhotos: { src: StaticImageData; alt: string }[] = [
  { src: toolsClippers, alt: "Машинки для стрижки" },
  { src: toolsScissors, alt: "Ножницы на ткани в полоску" },
  { src: toolsBlade, alt: "Нож машинки крупным планом" },
];
