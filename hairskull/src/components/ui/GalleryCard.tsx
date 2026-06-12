import Image from "next/image";

interface GalleryCardProps {
  image: string;
  priority?: boolean;
}

export default function GalleryCard({
  image,
  priority,
}: GalleryCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        border
        border-[var(--border)]
        bg-[var(--surface)]
      "
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>
    </div>
  );
}