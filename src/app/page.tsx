import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationFormatsSection from "@/components/sections/EducationFormatsSection";
import HairSkullMethodSection from "@/components/sections/HairSkullMethodSection";
import HeroSection from "@/components/sections/HeroSection";
import ToolsSection from "@/components/sections/ToolsSection";
import WorksSection from "@/components/sections/WorksSection";
import { contacts } from "@/data/contacts";
import { master } from "@/data/master";
import { site } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: master.fullName,
  jobTitle: master.profession,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: master.city,
    addressCountry: "BY",
  },
  sameAs: [contacts.telegram.href, contacts.instagram.href],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <HeroSection />
      <AboutSection />
      <HairSkullMethodSection />
      <WorksSection />
      <ToolsSection />
      <EducationFormatsSection />
      <ContactSection />
    </>
  );
}
