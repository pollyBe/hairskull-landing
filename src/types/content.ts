import type { StaticImageData } from "next/image";

export interface Stat {
  value: string;
  label: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
}

export interface EducationOption {
  title: string;
  description: string;
  link?: { label: string; href: string };
}

export interface EducationFormat {
  id: string;
  title: string;
  description: string;
  photo: {
    src: StaticImageData;
    alt: string;
    caption: string;
    tilt: number;
    tapeLeft: string;
    tapeRotate: number;
    position?: string;
  };
  options?: EducationOption[];
}

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
}
