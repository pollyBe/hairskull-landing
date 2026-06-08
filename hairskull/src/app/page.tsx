import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <PhilosophySection/>
      </main>

      <Footer />
    </>
  );
}