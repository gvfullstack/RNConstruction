// =============================
// components/HorizontalCarousel.tsx
// Simple, reusable thumbnail carousel (no modal) you can use across pages.
// =============================
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type HorizontalCarouselProps = {
  items: { src: string; alt?: string; onClick?: () => void }[];
  ariaLabel?: string;
};

export function HorizontalCarousel({ items, ariaLabel = 'Image carousel' }: HorizontalCarouselProps) {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (delta: number) => {
    const el = scroller.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({ left: delta * Math.max(240, Math.floor(width * 0.9)), behavior: 'smooth' });
  };

  return (
    <div className="relative" aria-label={ariaLabel}>
      <div
        ref={scroller}
        className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pr-2"
      >
        {items.map((it, i) => (
          <button
            key={i}
            onClick={it.onClick}
            className="relative snap-start shrink-0 w-[78vw] sm:w-[360px] aspect-[3/2] rounded-lg overflow-hidden bg-gray-100"
          >
            <Image
              src={it.src}
              alt={it.alt ?? `Image ${i + 1}`}
              fill
              quality={68}
              className="object-cover"
              sizes="(max-width: 640px) 78vw, 360px"
            />
          </button>
        ))}
      </div>

      {/* Arrows (hide if not scrollable) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-0.5">
        <button
          aria-label="Scroll left"
          className="pointer-events-auto ml-1 rounded-full bg-white/90 hover:bg-white shadow ring-1 ring-black/10 p-2 sm:p-3"
          onClick={() => scrollBy(-1)}
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          aria-label="Scroll right"
          className="pointer-events-auto mr-1 rounded-full bg-white/90 hover:bg-white shadow ring-1 ring-black/10 p-2 sm:p-3"
          onClick={() => scrollBy(1)}
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </div>
  );
}