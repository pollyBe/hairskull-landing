import Image from "next/image";

interface CertificateCardProps {
  title: string;
  location: string;
  year: string;
  image: string;
}

export default function CertificateCard({
  title,
  location,
  year,
  image,
}: CertificateCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        border
        border-[var(--border)]
        bg-[var(--surface)]
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-6">
        <h3
          className="
            font-serif
            text-2xl
            font-light
          "
        >
          {title}
        </h3>

        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            text-sm
            text-[var(--text-muted)]
          "
        >
          <span>{location}</span>

          <span>{year}</span>
        </div>
      </div>
    </article>
  );
}