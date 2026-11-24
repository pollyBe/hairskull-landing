import type { ContactLink } from "@/types/content";

const rowClassName =
  "flex items-center justify-between gap-4 border-b border-border py-5 sm:py-6";

export default function SocialLink({ label, value, href }: ContactLink) {
  const inner = (
    <>
      <span className="text-sm text-muted">{label}</span>
      <span className="transition-colors group-hover:text-gold">{value}</span>
    </>
  );

  if (!href) {
    return <div className={rowClassName}>{inner}</div>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${rowClassName}`}
    >
      {inner}
    </a>
  );
}
