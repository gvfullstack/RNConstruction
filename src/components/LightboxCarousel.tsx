// =============================
// components/LightboxCarousel.tsx
// A11y-friendly, phone-safe lightbox with swipe + keyboard + responsive arrows
// =============================
'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X as CloseIcon } from 'lucide-react';

export type LightboxCarouselProps = {
  open: boolean;
  images: string[]; // public paths (we'll try optimized first, then fallback)
  initialIndex?: number;
  onClose: () => void;
};

// Convert a public JPG/PNG path to an optimized 1600.webp copy under /optimized
// e.g. "/foo/bar/E4.jpg" -> "/optimized/foo/bar/E4-1600.webp"
const toOptimized = (src: string, w = 1600, ext = 'webp') =>
  src.replace(/^\/(.*)\/([^/]+)\.(jpe?g|png|webp|avif)$/i, (_m, dir, name) => `/optimized/${dir}/${name}-${w}.${ext}`);

export default function LightboxCarousel({ open, images, initialIndex = 0, onClose }: LightboxCarouselProps) {
  const [idx, setIdx] = useState(initialIndex);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const startX = useRef<number | null>(null);

  const optimized = useMemo(() => images.map((s) => toOptimized(s)), [images]);

  // Keep index in range when image set changes
  useEffect(() => {
    if (!open) return;
    setIdx((i) => Math.min(Math.max(0, i), images.length - 1));
  }, [open, images.length]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, images.length, onClose]);

  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0]?.clientX ?? null);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = (e.changedTouches[0]?.clientX ?? startX.current) - startX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    startX.current = null;
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-[1px] flex items-center justify-center"
      role="dialog"
      aria-label="Image viewer"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Close */}
      <button
        aria-label="Close"
        className="absolute top-[max(0.5rem,env(safe-area-inset-top))] right-[max(0.5rem,env(safe-area-inset-right))] text-white/90 bg-white/15 hover:bg-white/25 backdrop-blur rounded-full p-2.5 shadow-lg ring-1 ring-white/30"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <CloseIcon className="h-6 w-6" />
      </button>

      {/* Prev */}
      <button
        aria-label="Previous image"
        className="absolute left-[max(0.25rem,env(safe-area-inset-left))] top-1/2 -translate-y-1/2 z-20 text-white bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2.5 sm:p-3.5 shadow-2xl ring-1 ring-white/40"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>

      {/* Next */}
      <button
        aria-label="Next image"
        className="absolute right-[max(0.25rem,env(safe-area-inset-right))] top-1/2 -translate-y-1/2 z-20 text-white bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2.5 sm:p-3.5 shadow-2xl ring-1 ring-white/40"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>

      {/* Image wrapper */}
      <div
        className="relative z-10 w-[min(100vw-1.5rem,1200px)] h-[min(86dvh,86vh)] sm:h-[min(90dvh,90vh)]"
        onClick={(e) => e.stopPropagation()}
      >
        {!loaded && (
          <div className="absolute inset-0 rounded-lg bg-white/5 animate-pulse" />
        )}
        {/* Try optimized first; if it errors, fall back to original */}
        {(errored ? images[idx] : optimized[idx]) ? (
          <Image
            key={idx}
            src={errored ? images[idx] : optimized[idx]}
            alt="Project image"
            fill
            quality={68}
            className="object-contain rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
            onLoadingComplete={() => setLoaded(true)}
            onError={() => setErrored(true)}
            priority
            fetchPriority="high"
          />
        ) : null}
      </div>

       
      {/* Dots */}
      <div className="absolute bottom-[max(0.5rem,env(safe-area-inset-bottom))] inset-x-0 flex justify-center gap-1.5 px-3">
        <div className="flex max-w-[92vw] overflow-x-auto no-scrollbar gap-1.5 p-1 rounded-full bg-white/10">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${i === idx ? 'bg-white' : 'bg-white/40'}`}
              onClick={(e) => {
                e.stopPropagation();
                setIdx(i);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
