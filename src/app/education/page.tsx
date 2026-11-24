import ContactSection from "@/components/sections/ContactSection";
import EducationFormatsSection from "@/components/sections/EducationFormatsSection";
import EducationHeroSection from "@/components/sections/EducationHeroSection";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Курс Hair Skull",
  description:
    "Обучение для парикмахеров и барберов по авторской методике Hair Skull: анализ формы головы, британские техники стрижки, индивидуальные и групповые форматы.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <>
      <EducationHeroSection />
      <EducationFormatsSection variant="page" />
      <ContactSection />
    </>
  );
}
