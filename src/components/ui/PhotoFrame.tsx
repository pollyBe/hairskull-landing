import Image from "next/image";

import type { Photo } from "@/types/content";
import { cn } from "@/lib/utils";

interface PhotoFrameProps {
  photo?: Photo;
  /** Shown while there is no photo */
  placeholder: React.ReactNode;
  sizes: string;
  preload?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/** 4:5 bordered frame with a photo, or a placeholder until one is provided */
export default function PhotoFrame({
  photo,
  placeholder,
  sizes,
  preload,
  className,
  children,
}: PhotoFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-4/5 overflow-hidden border border-border bg-surface",
        className,
      )}
    >
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          {placeholder}
        </div>
      )}

      {children}
    </div>
  );
}
