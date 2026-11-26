import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

interface TapedPhotoProps {
  src: StaticImageData;
  alt: string;
  caption: string;
  tilt?: number;
  tapeLeft?: string;
  tapeRotate?: number;
  sizes: string;
  imageClassName?: string;
  className?: string;
}

export default function TapedPhoto({
  src,
  alt,
  caption,
  tilt = -1.5,
  tapeLeft = "40%",
  tapeRotate = 3,
  sizes,
  imageClassName,
  className,
}: TapedPhotoProps) {
  const mobileTilt = Math.sign(tilt) * Math.min(Math.abs(tilt), 0.8);

  return (
    <figure
      className={cn(
        "relative rotate-(--tilt-sm) bg-polaroid px-3.5 pt-3.5 pb-14 md:rotate-(--tilt)",
        className,
      )}
      style={
        {
          "--tilt": `${tilt}deg`,
          "--tilt-sm": `${mobileTilt}deg`,
        } as React.CSSProperties
      }
    >
      <span
        aria-hidden
        className="absolute -top-3.5 h-7 w-[110px] bg-gold/55"
        style={{ left: tapeLeft, rotate: `${tapeRotate}deg` }}
      />

      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        className={cn("block w-full object-cover", imageClassName)}
      />

      <figcaption className="absolute bottom-3 left-[18px] font-hand text-[28px] leading-none text-[#111]">
        {caption}
      </figcaption>
    </figure>
  );
}
