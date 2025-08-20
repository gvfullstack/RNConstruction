// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight, X as CloseIcon } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// /* ─────────────────────────────── DATA ──────────────────────────────── */
// type Project = { title: string; scope: string; images: string[] };
// type Category = { name: string; projects: Project[] };

// const projectCategories: Category[] = [
//   /* —•• Full Rebuilds & Ground-Up Construction ••— */
//   {
//     name: 'Full Rebuilds & Ground-Up Construction',
//     projects: [
//       {
//         title: 'Napa Full Rebuild',
//         scope: 'Complete rebuild and finish work',
//         images: [
//           '/fullRebuilds/napaFullRebuild/E4-25.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-3.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-4.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-5.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-6.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-7.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-8.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-9.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-10.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-11.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-12.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-13.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-14.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-15.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-16.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-17.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-18.jpg',
//         ],
//       },
//       {
//         title: 'Barnes South - New Development',
//         scope: 'Complete rebuild and finish work',
//         images: [
//           '/fullRebuilds/barnes/E4-16.jpg',
//           '/fullRebuilds/barnes/E4-17.jpg',
//           '/fullRebuilds/barnes/E4-18.jpg',
//           '/fullRebuilds/barnes/E5-2.jpg',
//           '/fullRebuilds/barnes/E5-3.jpg',
//           '/fullRebuilds/barnes/E5-4.jpg',
//           '/fullRebuilds/barnes/E5.jpg',
//         ],
//       },
//       {
//         title: 'From Bare Bones',
//         scope: 'Full home rebuild from studs',
//         images: [
//           '/fullRebuilds/fromBareBones/E4.jpg',
//           '/fullRebuilds/fromBareBones/E4-2.jpg',
//           '/fullRebuilds/fromBareBones/E5.jpg',
//           '/fullRebuilds/fromBareBones/E5-2.jpg',
//           '/fullRebuilds/fromBareBones/E5-3.jpg',
//           '/fullRebuilds/fromBareBones/E5-4.jpg',
//         ],
//       },
//     ],
//   },
//   /* —•• Interior Renovations ••— */
//   {
//     name: 'Interior Renovations',
//     projects: [
//       {
//         title: 'Kitchen Remodels',
//         scope: 'Cabinetry · Counters · Layouts',
//         images: [
//           '/interiorRenovations/kitchens/E4-21.jpg',
//           '/interiorRenovations/kitchens/E4-22.jpg',
//           '/interiorRenovations/kitchens/E4-23.jpg',
//           '/interiorRenovations/kitchens/E4-24.jpg',
//           '/interiorRenovations/kitchens/E5-4.1.jpg',
//           '/interiorRenovations/kitchens/E5-6.jpg',
//           '/interiorRenovations/kitchens/E5-9.jpg',
//           '/interiorRenovations/kitchens/E5-10.jpg',
//           '/interiorRenovations/kitchens/E5-12.jpg',
//         ],
//       },
//       {
//         title: 'Living Spaces',
//         scope: 'Family Rooms · Built-ins · Finishes',
//         images: [
//           '/interiorRenovations/livingSpaces/E4-5.jpg',
//           '/interiorRenovations/livingSpaces/E4-6.jpg',
//           '/interiorRenovations/livingSpaces/E4-7.jpg',
//           '/interiorRenovations/livingSpaces/E4-8.jpg',
//           '/interiorRenovations/livingSpaces/E4-19.jpg',
//           '/interiorRenovations/livingSpaces/E4-20.jpg',
//           '/interiorRenovations/livingSpaces/E5-2.jpg',
//           '/interiorRenovations/livingSpaces/E5-3.1.jpg',
//           '/interiorRenovations/livingSpaces/E5-3.jpg',
//           '/interiorRenovations/livingSpaces/E5-4.jpg',
//           '/interiorRenovations/livingSpaces/E5-11.jpg',
//           '/interiorRenovations/livingSpaces/E5.jpg',
//         ],
//       },
//       {
//         title: 'Modern Bathrooms',
//         scope: 'Tilework · Fixtures · Clean Lines',
//         images: [
//           '/interiorRenovations/baths/E4-13.jpg',
//           '/interiorRenovations/baths/E5-2.1.jpg',
//         ],
//       },
//     ],
//   },
//   /* —•• Pools & Outdoor Living ••— (single project) */
//   {
//     name: 'Pools & Outdoor Living',
//     projects: [
//       {
//         title: 'Resort-Style Pool & Patio',
//         scope: 'Excavation · Hardscape · Landscaping',
//         images: [
//           '/PoolsAndOutdoorLiving/E4-11.jpg',
//           '/PoolsAndOutdoorLiving/E4-14.jpg',
//           '/PoolsAndOutdoorLiving/E4-15.jpg',
//           '/PoolsAndOutdoorLiving/E5-3.jpg',
//           '/PoolsAndOutdoorLiving/E5-5.jpg',
//           '/PoolsAndOutdoorLiving/E5-15.jpg',
//           '/PoolsAndOutdoorLiving/E5-16.jpg',
//           '/PoolsAndOutdoorLiving/E5-17.jpg',
//           '/PoolsAndOutdoorLiving/E5-18.jpg',
//         ],
//       },
//     ],
//   },
//   /* —•• Grading & Earthwork ••— (single project) */
//   {
//     name: 'Grading & Earthwork',
//     projects: [
//       {
//         title: 'Grading & Earthwork',
//         scope: 'Mass excavation, soil compaction, retaining prep',
//         images: [
//           '/gradingEarthwork/E5-10.jpg',
//           '/gradingEarthwork/E5-6.jpg',
//           '/gradingEarthwork/E5-7.jpg',
//           '/gradingEarthwork/E5-8.jpg',
//           '/gradingEarthwork/E5-9.jpg',
//           '/gradingEarthwork/E5-10.jpg',
//           '/gradingEarthwork/E5-11.jpg',
//           '/gradingEarthwork/E5-12.jpg',
//           '/gradingEarthwork/E5-13.jpg',
//           '/gradingEarthwork/E5-14.jpg',
//           '/gradingEarthwork/E5-15.jpg',
//           '/gradingEarthwork/E5-16.jpg',
//           '/gradingEarthwork/E5-17.jpg',
//           '/gradingEarthwork/E5-18.jpg',
//         ],
//       },
//     ],
//   },
// ];

// /* ────────────────────────── COMPONENT ─────────────────────────────── */
// export default function Home() {
//   /* Lightbox state */
//   const [lightbox, setLightbox] = useState<{
//     images: string[];
//     index: number;
//   } | null>(null);

//   const openLightbox = (images: string[], startIndex = 0) =>
//     setLightbox({ images, index: startIndex });
//   const closeLightbox = () => setLightbox(null);
//   const prevImg = () =>
//     setLightbox(
//       (l) =>
//         l && {
//           ...l,
//           index: (l.index - 1 + l.images.length) % l.images.length,
//         },
//     );
//   const nextImg = () =>
//     setLightbox(
//       (l) =>
//         l && { ...l, index: (l.index + 1) % l.images.length },
//     );

//   return (
//     <>
//       <Header active="home" />

//       <main className="min-h-screen bg-white text-[#2C2C2C] font-sans">
//         {/* ───────────── HERO ───────────── */}
//         <section
//           id="home"
//           className="relative h-[80vh] flex items-center justify-center overflow-hidden"
//         >
//           <Image
//             src="/hero-modern-home.jpg"
//             alt="Modern custom home"
//             fill
//             priority
//             className="object-cover"
//             sizes="100vw"
//           />
//           <div className="absolute inset-0 bg-black/40" />

//           <div className="relative text-center px-8 py-14 rounded-lg max-w-3xl">
//             <h2 className="text-white text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
//               Building Dreams.
//               <br className="hidden sm:block" /> Restoring Homes.
//             </h2>

//             <p className="text-white text-lg sm:text-2xl mb-8">
//               Full-service design-build expertise for new builds, remodels, and
//               post-disaster recovery across California. <br className="hidden sm:block" />
//               <br />
//               <span className="font-semibold">
//                 We’re currently helping families rebuild after recent wildfires.
//               </span>
//             </p>

//             <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center">
//               {/* Outlook booking link */}
//               <a
//                 href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-8 py-3 rounded-full bg-[#B21F24] text-white font-semibold shadow-md hover:brightness-110 transition"
//               >
//                 Schedule a Consultation
//               </a>

//               {/* Fire-rebuild landing page */}
//               <Link
//                 href="/fire-rebuild"
//                 className="px-8 py-3 rounded-full bg-white/85 text-[#B21F24] font-semibold shadow-md backdrop-blur-sm hover:bg-white transition"
//               >
//                 See How We Rebuild After Fires
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* ───────────── CATEGORISED PROJECTS ───────────── */}
//         {projectCategories.map((cat) => {
//           const single = cat.projects.length === 1;
//           return (
//             <section
//               key={cat.name}
//               className="py-20 px-6 bg-white border-t border-gray-100"
//             >
//               <div className="max-w-7xl mx-auto">
//                 <h3
//                   className={`text-3xl font-semibold text-[#B21F24] mb-8 ${
//                     single ? 'text-center' : ''
//                   }`}
//                 >
//                   {cat.name}
//                 </h3>

//                 {/* grid or centered flex */}
//                 <div
//   className={
//               single
//                   ? 'grid place-items-center'           // ⟵ was flex justify-center
//                   : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
//               }
//             >
//               {cat.projects.map((p) => (
//                 <div
//                   key={p.title}
//                   /* add width constraints when it’s the only card */
//                   className={`group relative cursor-pointer aspect-[3/2] ${
//                     single ? 'w-full max-w-xl' : ''
//                   }`}
//                   onClick={() => openLightbox(p.images)}
//                 >
//                       <Image
//                         src={p.images[0]}
//                         alt={p.title}
//                         fill
//                         sizes="(max-width:768px) 100vw, 33vw"
//                         className="object-cover rounded-lg shadow-lg"
//                       />

//                       <div className="absolute inset-0 rounded-lg bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
//                         <h4 className="text-white text-lg font-semibold">
//                           {p.title}
//                         </h4>
//                         <p className="text-white text-sm">{p.scope}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA block */}
//                 <div className="text-center mt-14">
//                   <h4 className="text-2xl font-semibold mb-4">
//                     Inspired by our&nbsp;work?
//                   </h4>
//                   <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
//                     <a
//                       href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-8 py-3 rounded-full bg-[#B21F24] text-white font-semibold shadow-md hover:brightness-110 transition"
//                     >
//                       Schedule a Consultation
//                     </a>
//                     <a
//                       href="tel:+16267609310"
//                       className="px-8 py-3 rounded-full border border-[#B21F24] text-[#B21F24] font-semibold shadow-md hover:bg-[#B21F24]/10 transition"
//                     >
//                       Call&nbsp;(626)&nbsp;760-9310
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           );
//         })}

//         {/* ───────────── TESTIMONIALS ───────────── */}
//         <section
//           id="testimonials"
//           className="py-20 bg-gray-100 px-6 border-t border-gray-200"
//         >
//           <div className="max-w-5xl mx-auto text-center">
//             <h3 className="text-3xl font-semibold text-[#B21F24] mb-10">
//               What Our Clients Say
//             </h3>
//             <div className="grid md:grid-cols-2 gap-8">
//               <blockquote className="bg-white shadow-md p-6 rounded-lg">
//                 <p className="italic">
//                   “RN Construction helped us rebuild after the Tubbs Fire.
//                   Their commitment and professionalism made the process smooth
//                   and reassuring.”
//                 </p>
//                 <footer className="mt-4 text-sm text-gray-600">
//                   — The Martinez Family, Santa&nbsp;Rosa
//                 </footer>
//               </blockquote>

//               <blockquote className="bg-white shadow-md p-6 rounded-lg">
//                 <p className="italic">
//                   “From design to final inspection, RN Construction was
//                   dependable, communicative, and efficient.”
//                 </p>
//                 <footer className="mt-4 text-sm text-gray-600">
//                   — James&nbsp;and&nbsp;Valerie, Altadena
//                 </footer>
//               </blockquote>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />

//       {/* ───────────── LIGHTBOX ───────────── */}
//       {lightbox && (
//         <div
//           className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
//           onClick={closeLightbox}
//         >
//           <button
//             aria-label="Close"
//             className="absolute top-4 right-4 text-white hover:text-gray-300"
//           >
//             <CloseIcon size={32} />
//           </button>

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               prevImg();
//             }}
//             aria-label="Previous image"
//             className="absolute left-4 md:left-10 text-white/70 hover:text-white"
//           >
//             <ChevronLeft size={40} />
//           </button>

//           <Image
//             src={lightbox.images[lightbox.index]}
//             alt="Project image large view"
//             width={1200}
//             height={800}
//             className="max-h-[90vh] w-auto rounded shadow-lg"
//           />

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               nextImg();
//             }}
//             aria-label="Next image"
//             className="absolute right-4 md:right-10 text-white/70 hover:text-white"
//           >
//             <ChevronRight size={40} />
//           </button>
//         </div>
//       )}
//     </>
//   );
// }
// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight, X as CloseIcon } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// /* ─────────────────────────────── DATA ──────────────────────────────── */
// type Project = { title: string; scope: string; images: string[] };
// type Category = { name: string; projects: Project[] };

// const projectCategories: Category[] = [
//   /* —•• Full Rebuilds & Ground-Up Construction ••— */
//   {
//     name: 'Full Rebuilds & Ground-Up Construction',
//     projects: [
//       {
//         title: 'Napa Full Rebuild',
//         scope: 'Complete rebuild and finish work',
//         images: [
//           '/fullRebuilds/napaFullRebuild/E4-25.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-3.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-4.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-5.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-6.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-7.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-8.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-9.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-10.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-11.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-12.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-13.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-14.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-15.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-16.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-17.jpg',
//           '/fullRebuilds/napaFullRebuild/E5-18.jpg',
//         ],
//       },
//       {
//         title: 'Barnes South - New Development',
//         scope: 'Complete rebuild and finish work',
//         images: [
//           '/fullRebuilds/barnes/E4-16.jpg',
//           '/fullRebuilds/barnes/E4-17.jpg',
//           '/fullRebuilds/barnes/E4-18.jpg',
//           '/fullRebuilds/barnes/E5-2.jpg',
//           '/fullRebuilds/barnes/E5-3.jpg',
//           '/fullRebuilds/barnes/E5-4.jpg',
//           '/fullRebuilds/barnes/E5.jpg',
//         ],
//       },
//       {
//         title: 'From Bare Bones',
//         scope: 'Full home rebuild from studs',
//         images: [
//           '/fullRebuilds/fromBareBones/E4.jpg',
//           '/fullRebuilds/fromBareBones/E4-2.jpg',
//           '/fullRebuilds/fromBareBones/E5.jpg',
//           '/fullRebuilds/fromBareBones/E5-2.jpg',
//           '/fullRebuilds/fromBareBones/E5-3.jpg',
//           '/fullRebuilds/fromBareBones/E5-4.jpg',
//         ],
//       },
//     ],
//   },
//   /* —•• Interior Renovations ••— */
//   {
//     name: 'Interior Renovations',
//     projects: [
//       {
//         title: 'Kitchen Remodels',
//         scope: 'Cabinetry · Counters · Layouts',
//         images: [
//           '/interiorRenovations/kitchens/E4-21.jpg',
//           '/interiorRenovations/kitchens/E4-22.jpg',
//           '/interiorRenovations/kitchens/E4-23.jpg',
//           '/interiorRenovations/kitchens/E4-24.jpg',
//           '/interiorRenovations/kitchens/E5-4.1.jpg',
//           '/interiorRenovations/kitchens/E5-6.jpg',
//           '/interiorRenovations/kitchens/E5-9.jpg',
//           '/interiorRenovations/kitchens/E5-10.jpg',
//           '/interiorRenovations/kitchens/E5-12.jpg',
//         ],
//       },
//       {
//         title: 'Living Spaces',
//         scope: 'Family Rooms · Built-ins · Finishes',
//         images: [
//           '/interiorRenovations/livingSpaces/E4-5.jpg',
//           '/interiorRenovations/livingSpaces/E4-6.jpg',
//           '/interiorRenovations/livingSpaces/E4-7.jpg',
//           '/interiorRenovations/livingSpaces/E4-8.jpg',
//           '/interiorRenovations/livingSpaces/E4-19.jpg',
//           '/interiorRenovations/livingSpaces/E4-20.jpg',
//           '/interiorRenovations/livingSpaces/E5-2.jpg',
//           '/interiorRenovations/livingSpaces/E5-3.1.jpg',
//           '/interiorRenovations/livingSpaces/E5-3.jpg',
//           '/interiorRenovations/livingSpaces/E5-4.jpg',
//           '/interiorRenovations/livingSpaces/E5-11.jpg',
//           '/interiorRenovations/livingSpaces/E5.jpg',
//         ],
//       },
//       {
//         title: 'Modern Bathrooms',
//         scope: 'Tilework · Fixtures · Clean Lines',
//         images: ['/interiorRenovations/baths/E4-13.jpg', '/interiorRenovations/baths/E5-2.1.jpg'],
//       },
//     ],
//   },
//   /* —•• Pools & Outdoor Living ••— (single project) */
//   {
//     name: 'Pools & Outdoor Living',
//     projects: [
//       {
//         title: 'Resort-Style Pool & Patio',
//         scope: 'Excavation · Hardscape · Landscaping',
//         images: [
//           '/PoolsAndOutdoorLiving/E4-11.jpg',
//           '/PoolsAndOutdoorLiving/E4-14.jpg',
//           '/PoolsAndOutdoorLiving/E4-15.jpg',
//           '/PoolsAndOutdoorLiving/E5-3.jpg',
//           '/PoolsAndOutdoorLiving/E5-5.jpg',
//           '/PoolsAndOutdoorLiving/E5-15.jpg',
//           '/PoolsAndOutdoorLiving/E5-16.jpg',
//           '/PoolsAndOutdoorLiving/E5-17.jpg',
//           '/PoolsAndOutdoorLiving/E5-18.jpg',
//         ],
//       },
//     ],
//   },
//   /* —•• Grading & Earthwork ••— (single project) */
//   {
//     name: 'Grading & Earthwork',
//     projects: [
//       {
//         title: 'Grading & Earthwork',
//         scope: 'Mass excavation, soil compaction, retaining prep',
//         images: [
//           '/gradingEarthwork/E5-10.jpg',
//           '/gradingEarthwork/E5-6.jpg',
//           '/gradingEarthwork/E5-7.jpg',
//           '/gradingEarthwork/E5-8.jpg',
//           '/gradingEarthwork/E5-9.jpg',
//           '/gradingEarthwork/E5-10.jpg',
//           '/gradingEarthwork/E5-11.jpg',
//           '/gradingEarthwork/E5-12.jpg',
//           '/gradingEarthwork/E5-13.jpg',
//           '/gradingEarthwork/E5-14.jpg',
//           '/gradingEarthwork/E5-15.jpg',
//           '/gradingEarthwork/E5-16.jpg',
//           '/gradingEarthwork/E5-17.jpg',
//           '/gradingEarthwork/E5-18.jpg',
//         ],
//       },
//     ],
//   },
// ];

// /* ────────────────────────── COMPONENT ─────────────────────────────── */
// export default function Home() {
//   /* Lightbox state */
//   const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

//   const openLightbox = (images: string[], startIndex = 0) => setLightbox({ images, index: startIndex });
//   const closeLightbox = () => setLightbox(null);
//   const prevImg = () =>
//     setLightbox((l) => (l ? { ...l, index: (l.index - 1 + l.images.length) % l.images.length } : l));
//   const nextImg = () => setLightbox((l) => (l ? { ...l, index: (l.index + 1) % l.images.length } : l));

//   /* Keyboard navigation for lightbox */
//   useEffect(() => {
//     if (!lightbox) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') closeLightbox();
//       if (e.key === 'ArrowLeft') prevImg();
//       if (e.key === 'ArrowRight') nextImg();
//     };
//     window.addEventListener('keydown', onKey);
//     return () => window.removeEventListener('keydown', onKey);
//   }, [lightbox]);

//   /* Touch swipe for lightbox */
//   const touchStartX = useRef<number | null>(null);
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0]?.clientX ?? null;
//   };
//   const onTouchEnd = (e: React.TouchEvent) => {
//     if (touchStartX.current == null) return;
//     const dx = (e.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
//     const THRESHOLD = 40; // px
//     if (dx > THRESHOLD) prevImg();
//     else if (dx < -THRESHOLD) nextImg();
//     touchStartX.current = null;
//   };

//   return (
//     <>
//       <Header active="home" />

//       <main className="min-h-screen bg-white text-[#2C2C2C] font-sans">
//         {/* ───────────── HERO ───────────── */}
//         <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//           <Image src="/hero-modern-home.jpg" alt="Modern custom home" fill priority className="object-cover" sizes="100vw" />
//           <div className="absolute inset-0 bg-black/40" />

//           <div className="relative text-center px-8 py-14 rounded-lg max-w-3xl">
//             <h2 className="text-white text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
//               Building Dreams.
//               <br className="hidden sm:block" /> Restoring Homes.
//             </h2>

//             <p className="text-white text-lg sm:text-2xl mb-8">
//               Full-service design-build for <span className="font-semibold">residential and commercial</span>{' '}
//               projects—new builds, remodels, and post-disaster recovery across California.
//             </p>

//             <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center">
//               <a
//                 href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-8 py-3 rounded-full bg-[#B21F24] text-white font-semibold shadow-md hover:brightness-110 transition"
//               >
//                 Schedule a Consultation
//               </a>

//               <Link
//                 href="/fire-rebuild"
//                 className="px-8 py-3 rounded-full bg-white/85 text-[#B21F24] font-semibold shadow-md backdrop-blur-sm hover:bg-white transition"
//               >
//                 See How We Rebuild After Fires
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* ───────────── CATEGORISED PROJECTS ───────────── */}
//         {projectCategories.map((cat) => {
//           const single = cat.projects.length === 1;
//           return (
//             <section key={cat.name} className="py-20 px-6 bg-white border-t border-gray-100">
//               <div className="max-w-7xl mx-auto">
//                 <h3 className={`text-3xl font-semibold text-[#B21F24] mb-8 ${single ? 'text-center' : ''}`}>{cat.name}</h3>

//                 {/* grid or centered */}
//                 <div className={single ? 'grid place-items-center' : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
//                   {cat.projects.map((p) => (
//                     <div
//                       key={p.title}
//                       className={`group relative cursor-pointer aspect-[3/2] ${single ? 'w-full max-w-xl' : ''}`}
//                       onClick={() => openLightbox(p.images)}
//                     >
//                       <Image
//                         src={p.images[0]}
//                         alt={p.title}
//                         fill
//                         sizes="(max-width:768px) 100vw, 33vw"
//                         className="object-cover rounded-lg shadow-lg"
//                       />

//                       {/* CAPTION:
//                           - Mobile: always visible (opacity-100)
//                           - Desktop: reveal on hover */}
//                       <div
//                         className="
//                           absolute inset-x-0 bottom-0 rounded-b-lg
//                           bg-gradient-to-t from-black/70 via-black/40 to-transparent
//                           p-4
//                           opacity-100 sm:opacity-0 sm:group-hover:opacity-100
//                           transition
//                           "
//                       >
//                         <h4 className="text-white text-base sm:text-lg font-semibold">{p.title}</h4>
//                         <p className="text-white/90 text-xs sm:text-sm">{p.scope}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA block */}
//                 <div className="text-center mt-14">
//                   <h4 className="text-2xl font-semibold mb-4">Inspired by our&nbsp;work?</h4>
//                   <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
//                     <a
//                       href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-8 py-3 rounded-full bg-[#B21F24] text-white font-semibold shadow-md hover:brightness-110 transition"
//                     >
//                       Schedule a Consultation
//                     </a>
//                     <a
//                       href="tel:+16267609310"
//                       className="px-8 py-3 rounded-full border border-[#B21F24] text-[#B21F24] font-semibold shadow-md hover:bg-[#B21F24]/10 transition"
//                     >
//                       Call&nbsp;(626)&nbsp;760-9310
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           );
//         })}

//         {/* ───────────── TESTIMONIALS ───────────── */}
//         <section id="testimonials" className="py-20 bg-gray-100 px-6 border-t border-gray-200">
//           <div className="max-w-5xl mx-auto text-center">
//             <h3 className="text-3xl font-semibold text-[#B21F24] mb-10">What Our Clients Say</h3>
//             <div className="grid md:grid-cols-2 gap-8">
//               <blockquote className="bg-white shadow-md p-6 rounded-lg">
//                 <p className="italic">
//                   “RN Construction helped us rebuild after the Tubbs Fire. Their commitment and professionalism made the
//                   process smooth and reassuring.”
//                 </p>
//                 <footer className="mt-4 text-sm text-gray-600">— The Martinez Family, Santa&nbsp;Rosa</footer>
//               </blockquote>

//               <blockquote className="bg-white shadow-md p-6 rounded-lg">
//                 <p className="italic">“From design to final inspection, RN Construction was dependable, communicative, and efficient.”</p>
//                 <footer className="mt-4 text-sm text-gray-600">— James&nbsp;and&nbsp;Valerie, Altadena</footer>
//               </blockquote>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />

//       {/* ───────────── LIGHTBOX ───────────── */}
//       {lightbox && (
//         <div
//           className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
//           onClick={closeLightbox}
//           onTouchStart={onTouchStart}
//           onTouchEnd={onTouchEnd}
//           role="dialog"
//           aria-label="Image viewer"
//         >
//           {/* Close */}
//           <button
//             aria-label="Close"
//             className="absolute top-3 right-3 md:top-5 md:right-5 text-white hover:text-gray-200
//                        bg-white/15 hover:bg-white/25 backdrop-blur rounded-full p-3 md:p-3.5
//                        shadow-lg ring-1 ring-white/20"
//             onClick={(e) => {
//               e.stopPropagation();
//               closeLightbox();
//             }}
//           >
//             <CloseIcon className="h-6 w-6 md:h-7 md:w-7" />
//           </button>

//           {/* Prev */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               prevImg();
//             }}
//             aria-label="Previous image"
//             className="
//               absolute left-3 md:left-6
//               text-white
//               bg-white/20 hover:bg-white/30 backdrop-blur
//               rounded-full p-3 md:p-4
//               shadow-xl ring-1 ring-white/30
//               "
//           >
//             <ChevronLeft className="h-7 w-7 md:h-9 md:w-9" />
//           </button>

//           {/* Image */}
//           <Image
//             src={lightbox.images[lightbox.index]}
//             alt="Project image large view"
//             width={1400}
//             height={933}
//             className="max-h-[88vh] w-auto rounded-lg shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//             priority
//           />

//           {/* Next */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               nextImg();
//             }}
//             aria-label="Next image"
//             className="
//               absolute right-3 md:right-6
//               text-white
//               bg-white/20 hover:bg-white/30 backdrop-blur
//               rounded-full p-3 md:p-4
//               shadow-xl ring-1 ring-white/30
//               "
//           >
//             <ChevronRight className="h-7 w-7 md:h-9 md:w-9" />
//           </button>

//           {/* Index dots (optional but helpful on mobile) */}
//           <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 px-4">
//             {lightbox.images.map((_, i) => (
//               <span
//                 key={i}
//                 className={`h-2.5 w-2.5 rounded-full transition ${
//                   i === lightbox.index ? 'bg-white' : 'bg-white/40'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ChevronLeft, X as CloseIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ────────────────── Static covers for blur-up (requires @public/* alias) ────────────────── */
import napaFeat from '@public/optimized/fullRebuilds/napaFullRebuild/E4-25-1200.webp';
import kitchenFeat from '@public/optimized/interiorRenovations/kitchens/E4-24-1200.webp';
import poolFeat from '@public/optimized/PoolsAndOutdoorLiving/E4-11-1200.webp';
import gradingFeat from '@public/optimized/gradingEarthwork/E5-12-1200.webp';
import livingFeat from '@public/optimized/interiorRenovations/livingSpaces/E4-6-1200.webp';
import barnesFeat from '@public/optimized/fullRebuilds/barnes/E4-16-1200.webp';

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

/** Curated images for the collage and feature cards:
 *  - cover: statically imported 1200.webp (fast blur-up)
 *  - raw: original public path for lightbox fallback
 */
const featured = [
  { cover: napaFeat, raw: '/fullRebuilds/napaFullRebuild/E4-25.jpg', alt: 'Napa Full Rebuild exterior' },
  { cover: kitchenFeat, raw: '/interiorRenovations/kitchens/E4-24.jpg', alt: 'Kitchen remodel detail' },
  { cover: poolFeat, raw: '/PoolsAndOutdoorLiving/E4-11.jpg', alt: 'Pool & patio' },
  { cover: gradingFeat, raw: '/gradingEarthwork/E5-12.jpg', alt: 'Grading & earthwork' },
  { cover: livingFeat, raw: '/interiorRenovations/livingSpaces/E4-6.jpg', alt: 'Living space built-ins' },
  { cover: barnesFeat, raw: '/fullRebuilds/barnes/E4-16.jpg', alt: 'Ground-up development' },
];

/* Convert a public path to its optimized 1600.webp copy for the modal */
const toOptimized = (src: string, w = 1600, ext = 'webp') =>
  src.replace(
    /^\/(.*)\/([^/]+)\.(jpe?g|png|webp|avif)$/i,
    (_m, dir, name) => `/optimized/${dir}/${name}-${w}.${ext}`
  );

/* Modal image with skeleton + fallback to original */
function ModalImage({ src, fallbackSrc, alt }: { src: string; fallbackSrc?: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error && fallbackSrc) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        style={{ maxHeight: '88vh', width: 'auto', borderRadius: 12, boxShadow: '0 25px 60px rgba(0,0,0,.5)' }}
      />
    );
  }

  return (
    <div className="relative rounded-lg shadow-2xl" style={{ width: 'min(96vw, 1200px)', height: 'min(88vh, 80vh)' }}>
      {!loaded && <div className="absolute inset-0 rounded-lg bg-white/5 animate-pulse" />}
      <Image
        src={src}
        alt={alt}
        fill
        quality={68}
        className="object-contain rounded-lg"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
        onLoadingComplete={() => setLoaded(true)}
        onError={() => setError(true)}
        fetchPriority="high"
        priority
      />
    </div>
  );
}

/* ───────────────────────── COMPONENT ───────────────────────── */
export default function Home() {
  const [lightbox, setLightbox] = useState<{ images: string[]; fallbacks?: string[]; index: number } | null>(null);

  const openLightbox = (images: string[], index = 0) =>
    setLightbox({
      images: images.map((s) => toOptimized(s, 1600, 'webp')),
      fallbacks: images,
      index,
    });

  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox((l) => (l ? { ...l, index: (l.index - 1 + l.images.length) % l.images.length } : l));
  const nextImg = () => setLightbox((l) => (l ? { ...l, index: (l.index + 1) % l.images.length } : l));

  // keyboard
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

  // swipe
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0]?.clientX ?? null);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = (e.changedTouches[0]?.clientX ?? startX.current) - startX.current;
    if (dx > 40) prevImg();
    else if (dx < -40) nextImg();
    startX.current = null;
  };

  // prefetch neighbors while modal is open
  useEffect(() => {
    if (!lightbox) return;
    const { images, index } = lightbox;
    const n = images.length;
    const preload = (url: string) => {
      const img = new window.Image();
      img.decoding = 'async';
      img.src = url;
    };
    preload(images[(index + 1) % n]);
    preload(images[(index - 1 + n) % n]);
  }, [lightbox?.index]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header active="home" />

      <main className="min-h-screen bg-white text-[#2C2C2C] font-sans overflow-x-hidden">
        {/* ───────── HERO ───────── */}
        <section className="relative h-[78vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/hero-modern-home.jpg"
            alt="Modern custom home"
            fill
            priority
            quality={68}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative text-center px-6 sm:px-8 py-12 max-w-5xl">
            <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-tight">
              Building Homes. <br className="hidden sm:block" /> Rebuilding Communities.
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/projects"
                className="px-7 py-3 rounded-full bg-white/90 text-[#B21F24] font-semibold shadow-md hover:bg-white transition"
              >
                See Selected Work
              </Link>
              <a
                href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-[#B21F24] text-white font-semibold shadow-md hover:brightness-110 transition"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>

        {/* ——— Owner Welcome ——— */}
        <section aria-labelledby="welcome" className="px-4 sm:px-6 lg:px-8 py-10 bg-white">
          <h2 id="welcome" className="sr-only">Welcome</h2>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-gray-800 text-lg leading-relaxed">
              Welcome, I’m <span className="font-semibold text-[#B21F24]">Russell Nobles</span>, owner of
              <span className="font-semibold"> RN Construction</span>. My team helps families and businesses plan, permit, and
              build with clear communication and craftsmanship. We handle residential work like kitchens, baths, additions, and
              complete rebuilds, and we also deliver award-winning commercial projects including restaurants, tenant
              improvements, public works, and multi-family repairs. From early budgeting and scheduling to permits, inspections,
              and punch lists, you get one accountable partner who keeps things moving and keeps you informed.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mt-4">
              If you are exploring a project or rebuilding after a loss, I would be glad to talk through your options and outline
              a practical path forward. <span className="font-semibold">Reach out anytime</span> to schedule a consultation or give us a call.
              We are here to help.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-[#B21F24] text-white font-semibold shadow-md hover:brightness-110 transition"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+16267609310"
                className="px-7 py-3 rounded-full border border-[#B21F24] text-[#B21F24] font-semibold shadow-md hover:bg-[#B21F24]/10 transition"
              >
                Call (626) 760-9310
              </a>
            </div>
          </div>
        </section>

        {/* ───────── SECTORS & CAPABILITIES ───────── */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Sectors */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#B21F24] mb-3">Sectors We Serve</h2>
                <p className="text-gray-600 mb-6">
                  We deliver residential and commercial projects with the same focus on clarity, schedule, and craftsmanship.
                </p>
                <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
                  {[
                    { label: 'Residential', sub: 'Custom homes, remodels, additions, rebuilds', href: '/residential' },
                    { label: 'Commercial', sub: 'Award-winning interiors and ground-up', href: '/commercial' },
                    { label: 'Public Works', sub: 'Schools, municipal, spec-driven delivery', href: '/public-works' },
                    { label: 'Restaurants', sub: 'Health-dept compliance, ventilation, finishes', href: '/restaurants' },
                    { label: 'Tenant Improvements', sub: 'Office, retail, medical/dental buildouts', href: '/tenant-improvements' },
                    { label: 'Multi-Family / HOA', sub: 'Unit turns, common areas, exterior repairs', href: '/multi-family' },
                    { label: 'Disaster Recovery', sub: 'Fire/flood rebuild specialists', href: '/disaster-recovery' },
                  ].map(({ label, sub, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="flex items-start justify-between gap-4 p-4 hover:bg-gray-50 transition"
                      >
                        <div>
                          <div className="font-semibold">{label}</div>
                          <div className="text-sm text-gray-600">{sub}</div>
                        </div>
                        <ChevronRight className="mt-1 h-5 w-5 text-gray-400 group-hover:translate-x-0.5 transition" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capabilities */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#B21F24] mb-3">Capabilities</h2>
                <p className="text-gray-600 mb-6">
                  One accountable team from concept to keys. Explore our delivery methods and specialties.
                </p>
                <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
                  {[
                    { id: 'design-build', label: 'Design-Build', sub: 'Scope, cost, schedule, and quality under one team' },
                    { id: 'ground-up', label: 'Ground-Up Construction', sub: 'New builds and complex phasing' },
                    { id: 'remodels', label: 'Remodels & Additions', sub: 'Kitchens, baths, whole-home, structural repairs' },
                    { id: 'ti', label: 'Tenant Improvements', sub: 'Demo, MEP coordination, ADA, millwork, finishes' },
                    { id: 'public-works', label: 'Public Works Delivery', sub: 'Prevailing wage, submittals, inspections, safety' },
                    { id: 'outdoor', label: 'Pools & Outdoor Living', sub: 'Hardscape, water features, landscaping' },
                    { id: 'grading', label: 'Grading & Earthwork', sub: 'Excavation, compaction, retaining wall prep' },
                  ].map(({ id, label, sub }) => (
                    <li key={id}>
                      <Link
                        href={`/capabilities#${id}`}
                        className="flex items-start justify-between gap-4 p-4 hover:bg-gray-50 transition"
                      >
                        <div>
                          <div className="font-semibold">{label}</div>
                          <div className="text-sm text-gray-600">{sub}</div>
                        </div>
                        <ChevronRight className="mt-1 h-5 w-5 text-gray-400 group-hover:translate-x-0.5 transition" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-sm text-gray-600">
                  Prefer a single page overview? Read our{' '}
                  <Link href="/capabilities" className="text-[#B21F24] font-semibold hover:underline">
                    Capabilities
                  </Link>.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── FEATURED STORIES ───────── */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#B21F24] mb-8">Featured Stories</h2>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Story 1 */}
              <article className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                <div className="relative aspect-[3/2]">
                  <Image src={featured[0].cover} alt={featured[0].alt} fill quality={68} placeholder="blur" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">From Loss to Move-In: Napa Full Rebuild</h3>
                  <p className="text-gray-600 mt-2">
                    A ground-up rebuild coordinated with engineers, adjusters, and inspectors—delivered on schedule with finish work that lasts.
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => openLightbox(projectCategories[0].projects[0].images, 0)}
                      className="inline-flex items-center text-[#B21F24] font-semibold hover:underline"
                    >
                      View photos <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>

              {/* Story 2 */}
              <article className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                <div className="relative aspect-[3/2]">
                  <Image src={featured[2].cover} alt={featured[2].alt} fill quality={68} placeholder="blur" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Outdoor Living that Works Year-Round</h3>
                  <p className="text-gray-600 mt-2">
                    Integrated hardscape, water features, and planting—planned with drainage and grading in mind so beauty meets durability.
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => openLightbox(projectCategories[2].projects[0].images, 0)}
                      className="inline-flex items-center text-[#B21F24] font-semibold hover:underline"
                    >
                      View photos <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ───────── SELECTED WORK (collage) ───────── */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#B21F24] mb-6">Selected Work</h2>
            <p className="text-gray-600 mb-8">A few highlights. Explore more on the sector pages or the projects index.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {featured.map((f, i) => (
                <button
                  key={i}
                  className="relative aspect-[3/2] cursor-pointer group rounded-lg overflow-hidden"
                  onClick={() => openLightbox(featured.map((x) => x.raw), i)}
                  aria-label={`Open image ${i + 1}`}
                >
                  <Image
                    src={f.cover}
                    alt={f.alt}
                    fill
                    quality={68}
                    placeholder="blur"
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  />
                  <span className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 sm:group-hover:opacity-100 transition text-white text-xs md:text-sm">
                    {f.alt}
                  </span>
                </button>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/projects" className="inline-flex items-center text-[#B21F24] font-semibold hover:underline">
                Browse all projects <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section id="testimonials" className="py-20 bg-gray-100 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-semibold text-[#B21F24] mb-10">What Our Clients Say</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="bg-white shadow-md p-6 rounded-lg">
                <p className="italic">
                  “RN Construction helped us rebuild after the Tubbs Fire. Their commitment and professionalism made the
                  process smooth and reassuring.”
                </p>
                <footer className="mt-4 text-sm text-gray-600">— The Martinez Family, Santa&nbsp;Rosa</footer>
              </blockquote>

              <blockquote className="bg-white shadow-md p-6 rounded-lg">
                <p className="italic">“From design to final inspection, RN Construction was dependable, communicative, and efficient.”</p>
                <footer className="mt-4 text-sm text-gray-600">— James&nbsp;and&nbsp;Valerie, Altadena</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ───────── CTA ───────── */}
        <section className="py-16 bg-[#B21F24] text-white text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4">Ready to talk through your project?</h3>
            <p className="text-lg mb-8">We’ll align scope, budget, and schedule—then build with care.</p>
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

      {/* ───────── LIGHTBOX ───────── */}
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

          {/* Image (optimized + fallback) */}
          <ModalImage
            src={lightbox.images[lightbox.index]}
            fallbackSrc={lightbox.fallbacks?.[lightbox.index]}
            alt="Project image large view"
          />

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
