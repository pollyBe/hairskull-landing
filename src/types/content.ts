export interface Stat {
  value: string;
  label: string;
}

export interface Photo {
  src: string;
  alt: string;
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
  options?: EducationOption[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
}

export interface GalleryItem extends Photo {
  id: number;
  category: "work" | "education" | "event";
}
