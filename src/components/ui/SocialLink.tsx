import type { ContactLink } from "@/types/content";

const rowClassName =
  "flex items-center justify-between gap-4 border-b border-line-3 py-[22px] font-mono text-sm";

export default function SocialLink({ label, value, href }: ContactLink) {
  const labelNode = <span className="text-text-dim uppercase">{label}</span>;

  if (!href) {
    return (
      <div className={rowClassName}>
        {labelNode}
        <span>{value}</span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${rowClassName}`}
    >
      {labelNode}
      <span className="transition-colors group-hover:text-gold">
        {value} <span aria-hidden>↗</span>
      </span>
    </a>
  );
}
