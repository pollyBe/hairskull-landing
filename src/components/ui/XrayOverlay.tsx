import Image from "next/image";

import type { XrayScheme } from "@/data/hair-skull";
import { cn } from "@/lib/utils";

import HandNote from "./HandNote";

interface XrayOverlayProps {
  scheme: XrayScheme;
  className?: string;
}

export default function XrayOverlay({ scheme, className }: XrayOverlayProps) {
  const { width, height } = scheme.scheme;
  const ratio = width / height;

  return (
    <div
      aria-hidden
      className={cn(
        "[container-type:size] pointer-events-none absolute inset-0 overflow-hidden bg-black",
        className,
      )}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `max(100cqw, calc(100cqh * ${ratio}))`,
          height: `max(100cqh, calc(100cqw / ${ratio}))`,
        }}
      >
        <Image
          src={scheme.scheme}
          alt=""
          fill
          sizes="(min-width: 1440px) 660px, (min-width: 1024px) 46vw, 100vw"
          className="object-cover"
        />

        {(scheme.lines.length > 0 || scheme.points.length > 0) && (
          <svg
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="absolute inset-0 size-full text-gold"
          >
            {scheme.lines.map((line) => (
              <path
                key={line.d}
                d={line.d}
                strokeDasharray={line.dashed}
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {scheme.points.map((point) => (
              <circle
                key={`${point.cx}-${point.cy}`}
                {...point}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
        )}

        {scheme.notes.map((note) => (
          <HandNote
            key={note.text}
            as="span"
            className="absolute text-[22px] whitespace-nowrap md:text-[28px]"
            style={{ left: note.left, top: note.top }}
          >
            {note.text}
          </HandNote>
        ))}
      </div>
    </div>
  );
}
