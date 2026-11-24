function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  // Provided by Vercel at build and runtime
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export const site = {
  name: "HAIRSKULL",
  url: resolveSiteUrl(),
  locale: "ru_RU",
  title: "Алексей Платун | Парикмахер-стилист и преподаватель",
  description:
    "Персональный сайт Алексея Платуна — парикмахера-стилиста, преподавателя и автора методики Hair Skull. Обучение мастеров в Минске.",
};
