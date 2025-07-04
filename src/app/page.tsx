'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X as CloseIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ─────────────────────────────── DATA ──────────────────────────────── */
type Project = { title: string; scope: string; images: string[] };
type Category = { name: string; projects: Project[] };

const projectCategories: Category[] = [
  /* —•• Full Rebuilds & Ground-Up Construction ••— */
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
  /* —•• Interior Renovations ••— */
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
        images: [
          '/interiorRenovations/baths/E4-13.jpg',
          '/interiorRenovations/baths/E5-2.1.jpg',
        ],
      },
    ],
  },
  /* —•• Pools & Outdoor Living ••— (single project) */
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
  /* —•• Grading & Earthwork ••— (single project) */
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

/* ────────────────────────── COMPONENT ─────────────────────────────── */
export default function Home() {
  /* Lightbox state */
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const openLightbox = (images: string[], startIndex = 0) =>
    setLightbox({ images, index: startIndex });
  const closeLightbox = () => setLightbox(null);
  const prevImg = () =>
    setLightbox(
      (l) =>
        l && {
          ...l,
          index: (l.index - 1 + l.images.length) % l.images.length,
        },
    );
  const nextImg = () =>
    setLightbox(
      (l) =>
        l && { ...l, index: (l.index + 1) % l.images.length },
    );

  return (
    <>
      <Header active="home" />

      <main className="min-h-screen bg-white text-[#2C2C2C] font-sans">
        {/* ───────────── HERO ───────────── */}
        <section
          id="home"
          className="relative h-[80vh] flex items-center justify-center overflow-hidden"
        >
          <Image
            src="/hero-modern-home.jpg"
            alt="Modern custom home"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative text-center px-8 py-14 rounded-lg max-w-3xl">
            <h2 className="text-white text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              Building Dreams.
              <br className="hidden sm:block" /> Restoring Homes.
            </h2>

            <p className="text-white text-lg sm:text-2xl mb-8">
              Full-service design-build expertise for new builds, remodels, and
              post-disaster recovery across California. <br className="hidden sm:block" />
              <br />
              <span className="font-semibold">
                We’re currently helping families rebuild after recent wildfires.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center">
              {/* Outlook booking link */}
              <a
                href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-[#B21F24] text-white font-semibold shadow-md hover:brightness-110 transition"
              >
                Schedule a Consultation
              </a>

              {/* Fire-rebuild landing page */}
              <Link
                href="/fire-rebuild"
                className="px-8 py-3 rounded-full bg-white/85 text-[#B21F24] font-semibold shadow-md backdrop-blur-sm hover:bg-white transition"
              >
                See How We Rebuild After Fires
              </Link>
            </div>
          </div>
        </section>

        {/* ───────────── CATEGORISED PROJECTS ───────────── */}
        {projectCategories.map((cat) => {
          const single = cat.projects.length === 1;
          return (
            <section
              key={cat.name}
              className="py-20 px-6 bg-white border-t border-gray-100"
            >
              <div className="max-w-7xl mx-auto">
                <h3
                  className={`text-3xl font-semibold text-[#B21F24] mb-8 ${
                    single ? 'text-center' : ''
                  }`}
                >
                  {cat.name}
                </h3>

                {/* grid or centered flex */}
                <div
  className={
              single
                  ? 'grid place-items-center'           // ⟵ was flex justify-center
                  : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
              }
            >
              {cat.projects.map((p) => (
                <div
                  key={p.title}
                  /* add width constraints when it’s the only card */
                  className={`group relative cursor-pointer aspect-[3/2] ${
                    single ? 'w-full max-w-xl' : ''
                  }`}
                  onClick={() => openLightbox(p.images)}
                >
                      <Image
                        src={p.images[0]}
                        alt={p.title}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover rounded-lg shadow-lg"
                      />

                      <div className="absolute inset-0 rounded-lg bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                        <h4 className="text-white text-lg font-semibold">
                          {p.title}
                        </h4>
                        <p className="text-white text-sm">{p.scope}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA block */}
                <div className="text-center mt-14">
                  <h4 className="text-2xl font-semibold mb-4">
                    Inspired by our&nbsp;work?
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
                    <a
                      href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 rounded-full bg-[#B21F24] text-white font-semibold shadow-md hover:brightness-110 transition"
                    >
                      Schedule a Consultation
                    </a>
                    <a
                      href="tel:+16267609310"
                      className="px-8 py-3 rounded-full border border-[#B21F24] text-[#B21F24] font-semibold shadow-md hover:bg-[#B21F24]/10 transition"
                    >
                      Call&nbsp;(626)&nbsp;760-9310
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ───────────── TESTIMONIALS ───────────── */}
        <section
          id="testimonials"
          className="py-20 bg-gray-100 px-6 border-t border-gray-200"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-semibold text-[#B21F24] mb-10">
              What Our Clients Say
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="bg-white shadow-md p-6 rounded-lg">
                <p className="italic">
                  “RN Construction helped us rebuild after the Tubbs Fire.
                  Their commitment and professionalism made the process smooth
                  and reassuring.”
                </p>
                <footer className="mt-4 text-sm text-gray-600">
                  — The Martinez Family, Santa&nbsp;Rosa
                </footer>
              </blockquote>

              <blockquote className="bg-white shadow-md p-6 rounded-lg">
                <p className="italic">
                  “From design to final inspection, RN Construction was
                  dependable, communicative, and efficient.”
                </p>
                <footer className="mt-4 text-sm text-gray-600">
                  — James&nbsp;and&nbsp;Valerie, Altadena
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ───────────── LIGHTBOX ───────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            aria-label="Close"
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <CloseIcon size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImg();
            }}
            aria-label="Previous image"
            className="absolute left-4 md:left-10 text-white/70 hover:text-white"
          >
            <ChevronLeft size={40} />
          </button>

          <Image
            src={lightbox.images[lightbox.index]}
            alt="Project image large view"
            width={1200}
            height={800}
            className="max-h-[90vh] w-auto rounded shadow-lg"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImg();
            }}
            aria-label="Next image"
            className="absolute right-4 md:right-10 text-white/70 hover:text-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
