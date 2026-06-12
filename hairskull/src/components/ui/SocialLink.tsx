import Link from "next/link";

interface SocialLinkProps {
  label: string;
  value: string;
  href?: string;
}

export default function SocialLink({
  label,
  value,
  href,
}: SocialLinkProps) {
  if (!href) {
    return (
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-[var(--border)]
          py-6
        "
      >
        <span className="text-sm text-[var(--text-muted)]">
          {label}
        </span>

        <span>{value}</span>
      </div>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      className="
        group
        flex
        items-center
        justify-between
        border-b
        border-[var(--border)]
        py-6
        transition-colors
      "
    >
      <span className="text-sm text-[var(--text-muted)]">
        {label}
      </span>

      <span
        className="
          transition-colors
          group-hover:text-[var(--gold)]
        "
      >
        {value}
      </span>
    </Link>
  );
}