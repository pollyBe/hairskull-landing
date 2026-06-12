import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import EducationFormatsSection from "@/components/sections/EducationFormatsSection";
import ContactSection from "@/components/sections/ContactSection";
import HairSkullMethodSection from "@/components/sections/HairSkullMethodSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";


export default function HomePage() {
  return (
    <>
      <Header/>
      <main>
        <HeroSection />

        <AboutPreviewSection />

        <HairSkullMethodSection />

        <StatsSection />

        <EducationFormatsSection />

        <ContactSection />
      </main>
      <Footer/>
    </>
  );
}