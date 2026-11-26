import Section from "@/components/layout/Section";
import FadeIn from "@/components/ui/FadeIn";
import HandNote from "@/components/ui/HandNote";
import SheetLabel from "@/components/ui/SheetLabel";
import SocialLink from "@/components/ui/SocialLink";
import { contactSection, contacts } from "@/data/contacts";

function splitHandle(handle: string, accent: string): [string, string] {
  const i = handle.toLowerCase().lastIndexOf(accent.toLowerCase());
  return i > 0 ? [handle.slice(0, i), handle.slice(i)] : [handle, ""];
}

export default function ContactSection() {
  const { telegram } = contacts;
  const [handleLead, handleAccent] = splitHandle(
    telegram.value,
    contactSection.handleAccent,
  );

  return (
    <Section id="contacts" className="lg:pb-20">
      <FadeIn className="flex flex-col gap-12">
        <SheetLabel>{contactSection.sheetLabel}</SheetLabel>

        <a
          href={telegram.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Написать в Telegram ${telegram.value}`}
          className="self-start font-display text-[clamp(64px,12vw,200px)] leading-[0.85] font-light tracking-[-0.03em] text-text transition-colors hover:text-gold-hover"
        >
          {handleLead}
          {handleAccent && <em className="text-gold italic">{handleAccent}</em>}
        </a>
      </FadeIn>

      <FadeIn
        delay={0.1}
        className="mt-12 grid items-start gap-14 lg:grid-cols-2"
      >
        <p className="max-w-[560px] text-base leading-[1.85] font-light text-text-muted">
          {contactSection.text}
        </p>

        <div className="border-t border-line-3">
          <SocialLink {...contacts.telegram} />
          <SocialLink {...contacts.instagram} />
          <SocialLink {...contacts.location} />
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-12">
        <HandNote rotate={-2} className="text-[28px] md:text-[34px]">
          {contactSection.note}
        </HandNote>
      </FadeIn>
    </Section>
  );
}
