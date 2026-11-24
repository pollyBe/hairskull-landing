import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import TimelineSection from "@/components/sections/TimelineSection";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Биография",
  description:
    "Профессиональный путь Алексея Платуна: чемпионаты, международные академии TIGI и TONI&GUY, создание методики Hair Skull.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutSection variant="page" />
      <TimelineSection />
      <ContactSection />
    </>
  );
}
