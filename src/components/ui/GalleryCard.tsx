import Image from "next/image";

import type { Photo } from "@/types/content";

interface GalleryCardProps extends Photo {
  preload?: boolean;
}

export default function GalleryCard({ src, alt, preload }: GalleryCardProps) {
  return (
    <div className="group relative aspect-4/5 overflow-hidden border border-border bg-surface">
      <Image
        src={src}
        alt={alt}
        fill
        preload={preload}
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
      />
    </div>
  );
}
