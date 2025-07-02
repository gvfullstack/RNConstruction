'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const projects = [
    { image: '/project-altadena.jpg', title: 'Altadena Hills Custom Rebuild' },
    { image: '/project-pasadena.jpg', title: 'Santa Rosa Tubbs Fire Home' },
    { image: '/project-santa-rosa.jpg', title: 'Pasadena Modern Design-Build' },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent((i) => (i + 1) % projects.length), 5000);
    return () => clearInterval(id);
  }, [projects.length]);

  return (
    <>
      <Header active="home" />

      <main className="min-h-screen bg-white text-[#2C2C2C] font-sans">
        {/* HERO */}
        <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <Image src="/hero-modern-home.jpg" alt="Modern custom home" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative text-center px-8 py-14 rounded-lg max-w-3xl">
            <h2 className="text-white text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              Building Dreams.<br className="hidden sm:block" /> Restoring Homes.
            </h2>
            <p className="text-white text-lg sm:text-2xl mb-8">
              Full-service design-build expertise for new builds, remodels, and post-disaster rebuilds across California&nbsp;&amp;&nbsp;Nevada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center">
              <Link
                href="/about#contact"
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#B21F24] text-white font-semibold
                           shadow-md shadow-gray-200/50 hover:brightness-110 transition"
              >
                Get a Consultation
              </Link>
              <Link
                href="/fire-rebuild"
                className="px-8 py-3 rounded-full bg-white/85 text-[#B21F24] font-semibold shadow-md backdrop-blur-sm
                           hover:bg-white transition"
              >
                See Fire-Rebuild Services
              </Link>
            </div>
          </div>
        </section>

        {/* CAROUSEL */}
        <section id="projects" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-semibold text-[#B21F24] mb-4">Examples of Work We Do</h3>
            <p className="text-lg max-w-2xl mx-auto mb-10">
              Stock imagery below illustrates the kinds of design-build and fire-rebuild projects we specialise in.
            </p>

            <div className="relative max-w-xl mx-auto">
              <img
                key={projects[current].image}
                src={projects[current].image}
                alt={projects[current].title}
                className="h-80 w-full object-cover rounded-lg shadow-lg transition-opacity duration-700 ease-in-out"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      idx === current ? 'bg-[#B21F24]' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-20 bg-gray-100 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-semibold text-[#B21F24] mb-10">What Our Clients Say</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="bg-white shadow-md shadow-gray-200/70 p-6 rounded-lg">
                <p className="italic">
                  “RN Construction helped us rebuild after the Tubbs Fire. Their commitment and professionalism made the process smooth and reassuring.”
                </p>
                <footer className="mt-4 text-sm text-gray-600">— The Martinez Family, Santa Rosa</footer>
              </blockquote>
              <blockquote className="bg-white shadow-md shadow-gray-200/70 p-6 rounded-lg">
                <p className="italic">
                  “From design to final inspection, RN Construction was dependable, communicative, and efficient.”
                </p>
                <footer className="mt-4 text-sm text-gray-600">— James and Valerie, Altadena</footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
