'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { ChevronRight, ChevronLeft, X as CloseIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* Static imports for cover images (free blur-up) */
import napaCover from '@public/fullRebuilds/napaFullRebuild/E4-25.jpg';
import barnesCover from '@public/fullRebuilds/barnes/E4-16.jpg';
import bareBonesCover from '@public/fullRebuilds/fromBareBones/E4.jpg';
import kitchenCover from '@public/interiorRenovations/kitchens/E4-21.jpg';
import livingCover from '@public/interiorRenovations/livingSpaces/E4-5.jpg';
import bathCover from '@public/interiorRenovations/baths/E4-13.jpg';
import poolCover from '@public/PoolsAndOutdoorLiving/E4-11.jpg';
import gradingCover from '@public/gradingEarthwork/E5-10.jpg';

/* ───────────────────────────── DATA ───────────────────────────── */
type Project = { title: string; scope: string; images: string[] };
type Category = { name: string; projects: Project[] };

const projectCategories: Category[] = [
  {
    name: 'Full Rebuilds & Ground-Up Construction',
    projects: [
      {
        title: 'Napa Full Rebuild',
        scope: 'Complete rebuild and finish work',
        images: [
          '/fullRebuilds/napaFullRebuild/E4-25.jpg',
          '/fullRebuilds/napaFullRebuild/E5-3.jpg',
          '/fullRebuilds/napaFullRebuild/E5-4.jpg',
          '/fullRebuilds/napaFullRebuild/E5-5.jpg',
          '/fullRebuilds/napaFullRebuild/E5-6.jpg',
          '/fullRebuilds/napaFullRebuild/E5-7.jpg',
          '/fullRebuilds/napaFullRebuild/E5-8.jpg',
          '/fullRebuilds/napaFullRebuild/E5-9.jpg',
          '/fullRebuilds/napaFullRebuild/E5-10.jpg',
          '/fullRebuilds/napaFullRebuild/E5-11.jpg',
          '/fullRebuilds/napaFullRebuild/E5-12.jpg',
          '/fullRebuilds/napaFullRebuild/E5-13.jpg',
          '/fullRebuilds/napaFullRebuild/E5-14.jpg',
          '/fullRebuilds/napaFullRebuild/E5-15.jpg',
          '/fullRebuilds/napaFullRebuild/E5-16.jpg',
          '/fullRebuilds/napaFullRebuild/E5-17.jpg',
          '/fullRebuilds/napaFullRebuild/E5-18.jpg',
        ],
      },
      {
        title: 'Barnes South - New Development',
        scope: 'Complete rebuild and finish work',
        images: [
          '/fullRebuilds/barnes/E4-16.jpg',
          '/fullRebuilds/barnes/E4-17.jpg',
          '/fullRebuilds/barnes/E4-18.jpg',
          '/fullRebuilds/barnes/E5-2.jpg',
          '/fullRebuilds/barnes/E5-3.jpg',
          '/fullRebuilds/barnes/E5-4.jpg',
          '/fullRebuilds/barnes/E5.jpg',
        ],
      },
      {
        title: 'From Bare Bones',
        scope: 'Full home rebuild from studs',
        images: [
          '/fullRebuilds/fromBareBones/E4.jpg',
          '/fullRebuilds/fromBareBones/E4-2.jpg',
          '/fullRebuilds/fromBareBones/E5.jpg',
          '/fullRebuilds/fromBareBones/E5-2.jpg',
          '/fullRebuilds/fromBareBones/E5-3.jpg',
          '/fullRebuilds/fromBareBones/E5-4.jpg',
        ],
      },
    ],
  },
  {
    name: 'Interior Renovations',
    projects: [
      {
        title: 'Kitchen Remodels',
        scope: 'Cabinetry · Counters · Layouts',
        images: [
          '/interiorRenovations/kitchens/E4-21.jpg',
          '/interiorRenovations/kitchens/E4-22.jpg',
          '/interiorRenovations/kitchens/E4-23.jpg',
          '/interiorRenovations/kitchens/E4-24.jpg',
          '/interiorRenovations/kitchens/E5-4.1.jpg',
          '/interiorRenovations/kitchens/E5-6.jpg',
          '/interiorRenovations/kitchens/E5-9.jpg',
          '/interiorRenovations/kitchens/E5-10.jpg',
          '/interiorRenovations/kitchens/E5-12.jpg',
        ],
      },
      {
        title: 'Living Spaces',
        scope: 'Family Rooms · Built-ins · Finishes',
        images: [
          '/interiorRenovations/livingSpaces/E4-5.jpg',
          '/interiorRenovations/livingSpaces/E4-6.jpg',
          '/interiorRenovations/livingSpaces/E4-7.jpg',
          '/interiorRenovations/livingSpaces/E4-8.jpg',
          '/interiorRenovations/livingSpaces/E4-19.jpg',
          '/interiorRenovations/livingSpaces/E4-20.jpg',
          '/interiorRenovations/livingSpaces/E5-2.jpg',
          '/interiorRenovations/livingSpaces/E5-3.1.jpg',
          '/interiorRenovations/livingSpaces/E5-3.jpg',
          '/interiorRenovations/livingSpaces/E5-4.jpg',
          '/interiorRenovations/livingSpaces/E5-11.jpg',
          '/interiorRenovations/livingSpaces/E5.jpg',
        ],
      },
      {
        title: 'Modern Bathrooms',
        scope: 'Tilework · Fixtures · Clean Lines',
        images: ['/interiorRenovations/baths/E4-13.jpg', '/interiorRenovations/baths/E5-2.1.jpg'],
      },
    ],
  },
  {
    name: 'Pools & Outdoor Living',
    projects: [
      {
        title: 'Resort-Style Pool & Patio',
        scope: 'Excavation · Hardscape · Landscaping',
        images: [
          '/PoolsAndOutdoorLiving/E4-11.jpg',
          '/PoolsAndOutdoorLiving/E4-14.jpg',
          '/PoolsAndOutdoorLiving/E4-15.jpg',
          '/PoolsAndOutdoorLiving/E5-3.jpg',
          '/PoolsAndOutdoorLiving/E5-5.jpg',
          '/PoolsAndOutdoorLiving/E5-15.jpg',
          '/PoolsAndOutdoorLiving/E5-16.jpg',
          '/PoolsAndOutdoorLiving/E5-17.jpg',
          '/PoolsAndOutdoorLiving/E5-18.jpg',
        ],
      },
    ],
  },
  {
    name: 'Grading & Earthwork',
    projects: [
      {
        title: 'Grading & Earthwork',
        scope: 'Mass excavation, soil compaction, retaining prep',
        images: [
          '/gradingEarthwork/E5-10.jpg',
          '/gradingEarthwork/E5-6.jpg',
          '/gradingEarthwork/E5-7.jpg',
          '/gradingEarthwork/E5-8.jpg',
          '/gradingEarthwork/E5-9.jpg',
          '/gradingEarthwork/E5-10.jpg',
          '/gradingEarthwork/E5-11.jpg',
          '/gradingEarthwork/E5-12.jpg',
          '/gradingEarthwork/E5-13.jpg',
          '/gradingEarthwork/E5-14.jpg',
          '/gradingEarthwork/E5-15.jpg',
          '/gradingEarthwork/E5-16.jpg',
          '/gradingEarthwork/E5-17.jpg',
          '/gradingEarthwork/E5-18.jpg',
        ],
      },
    ],
  },
];

/** Map project title -> static cover image for blur-up */
const coverByTitle: Record<string, StaticImageData> = {
  'Napa Full Rebuild': napaCover,
  'Barnes South - New Development': barnesCover,
  'From Bare Bones': bareBonesCover,
  'Kitchen Remodels': kitchenCover,
  'Living Spaces': livingCover,
  'Modern Bathrooms': bathCover,
  'Resort-Style Pool & Patio': poolCover,
  'Grading & Earthwork': gradingCover,
};

/* Minimal fallback for modal image load errors */
function SafeModalImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <img
        src={src}
        alt={alt}
        style={{ maxHeight: '88vh', width: 'auto', borderRadius: 12, boxShadow: '0 25px 60px rgba(0,0,0,.5)' }}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={1400}
      height={933}
      quality={68}
      className="max-h-[88vh] w-auto rounded-lg shadow-2xl"
      onError={() => setError(true)}
      priority
    />
  );
}

export default function ProjectsClient() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const openLightbox = (images: string[], startIndex = 0) => setLightbox({ images, index: startIndex });
  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox((l) => (l ? { ...l, index: (l.index - 1 + l.images.length) % l.images.length } : l));
  const nextImg = () => setLightbox((l) => (l ? { ...l, index: (l.index + 1) % l.images.length } : l));

  // keyboard nav
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  // touch swipe
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0]?.clientX ?? null);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = (e.changedTouches[0]?.clientX ?? startX.current) - startX.current;
    if (dx > 40) prevImg();
    else if (dx < -40) nextImg();
    startX.current = null;
  };

  return (
    <>
      <Header active="projects" />

      <main className="min-h-screen bg-white text-[#2C2C2C] font-sans overflow-x-hidden">
        {/* Hero / Title */}
        <section className="px-4 sm:px-6 lg:px-8 pt-10 pb-8 border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#B21F24]">Projects</h1>
            <p className="mt-2 text-gray-600 max-w-3xl">
              Selected work across residential and commercial sectors. Click any project to view a larger gallery.
            </p>
          </div>
        </section>

        {/* Categories */}
        {projectCategories.map((cat) => {
          const single = cat.projects.length === 1;
          return (
            <section key={cat.name} className="px-4 sm:px-6 lg:px-8 py-14 bg-white border-b border-gray-100">
              <div className="mx-auto max-w-7xl">
                <div className="flex items-end justify-between gap-4 mb-6">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#B21F24]">{cat.name}</h2>
                </div>

                <div className={single ? 'grid place-items-center' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
                  {cat.projects.map((p) => {
                    const cover = coverByTitle[p.title] as StaticImageData | undefined;
                    const coverSrc = cover ?? p.images[0];

                    return (
                      <article
                        key={p.title}
                        className={`group relative rounded-xl overflow-hidden border border-gray-200 bg-white ${
                          single ? 'w-full max-w-xl' : ''
                        }`}
                      >
                        <button
                          onClick={() => openLightbox(p.images, 0)}
                          className="w-full text-left"
                          aria-label={`Open gallery: ${p.title}`}
                        >
                          <div className="relative aspect-[3/2]">
                            <Image
                              src={coverSrc}
                              alt={p.title}
                              fill
                              quality={68}
                              placeholder={cover ? 'blur' : 'empty'}
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {/* caption gradient (always-on mobile, hover on desktop) */}
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
                              <h3 className="text-white text-base sm:text-lg font-semibold">{p.title}</h3>
                              <p className="text-white/90 text-xs sm:text-sm">{p.scope}</p>
                            </div>
                          </div>
                        </button>

                        <div className="p-4 flex items-center justify-between">
                          <div>
                            <div className="font-semibold">{p.title}</div>
                            <div className="text-sm text-gray-600">{p.scope}</div>
                          </div>
                          <button
                            onClick={() => openLightbox(p.images, 0)}
                            className="inline-flex items-center text-[#B21F24] font-semibold hover:underline"
                          >
                            View gallery <ChevronRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="py-16 bg-[#B21F24] text-white text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4">Ready to talk through your project?</h3>
            <p className="text-lg mb-8">We&apos;ll align scope, budget, and schedule, then build with care.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full border border-white text-white font-semibold shadow-md hover:bg-white/10 transition"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+16267609310"
                className="px-7 py-3 rounded-full bg-white text-[#B21F24] font-semibold shadow-md hover:brightness-110 transition"
              >
                Call (626) 760-9310
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-label="Image viewer"
        >
          {/* Close */}
          <button
            aria-label="Close"
            className="absolute top-3 right-3 text-white bg-white/15 hover:bg-white/25 backdrop-blur rounded-full p-3 shadow-lg ring-1 ring-white/20"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImg();
            }}
            aria-label="Previous image"
            className="absolute left-3 text-white bg-white/25 hover:bg-white/35 backdrop-blur-md rounded-full p-4 shadow-2xl ring-1 ring-white/40"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>

          {/* Image (with fallback) */}
          {lightbox.images[lightbox.index] ? (
            <SafeModalImage src={lightbox.images[lightbox.index]} alt="Project image large view" />
          ) : null}

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImg();
            }}
            aria-label="Next image"
            className="absolute right-3 text-white bg-white/25 hover:bg-white/35 backdrop-blur-md rounded-full p-4 shadow-2xl ring-1 ring-white/40"
          >
            <ChevronRight className="h-9 w-9" />
          </button>

          {/* Index dots */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 px-4">
            {lightbox.images.map((_, i) => (
              <span key={i} className={`h-2.5 w-2.5 rounded-full ${i === lightbox.index ? 'bg-white' : 'bg-white/40'}`} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
