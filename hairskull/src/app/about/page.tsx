import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ContactSection from "@/components/sections/ContactSection";
import TimelineSection from "@/components/sections/TimelineSection";

export default function AboutPage() {
  return (
    <>
      <Header/>
      <AboutPreviewSection />
      <TimelineSection />
      <ContactSection />
      <Footer/>
    </>
  )
}