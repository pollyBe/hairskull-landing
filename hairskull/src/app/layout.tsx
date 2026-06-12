import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
});

const sans = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Алексей Платун | Парикмахер-стилист и преподаватель",
  description:
    "Персональный сайт Алексея Платуна. Обучение мастеров, профессиональный путь, достижения и портфолио.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${sans.variable} ${serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}