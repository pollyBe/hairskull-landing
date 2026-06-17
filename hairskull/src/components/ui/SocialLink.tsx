interface SocialLinkProps {
  label: string;
  value: string;
  href?: string;
}

export default function SocialLink({ label, value, href }: SocialLinkProps) {
  const inner = (
    <>
      <span className="text-sm text-[var(--text-muted)]">{label}</span>
      <span className="transition-colors group-hover:text-[var(--gold)]">
        {value}
      </span>
    </>
  );

  if (!href) {
    return (
      <div className="flex items-center justify-between border-b border-[var(--border)] py-5 sm:py-6">
        {inner}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border-b border-[var(--border)] py-5 transition-colors sm:py-6"
    >
      {inner}
    </a>
  );
}
