'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FireRebuild() {
  return (
    <>
      <Header active="fire-rebuild" />

      <main className="min-h-screen bg-white text-[#2C2C2C] font-sans">
        {/* HERO SECTION – with Image fill */}
        <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
          {/* full-bleed background image */}
          <Image
            src="/fire-rebuild-hero.png"
            alt="Fire-damaged home and rebuild in progress"
            fill
            priority
            className="object-cover"
          />

          {/* dark overlay for legibility */}
          <div className="absolute inset-0 bg-black/40" />

          {/* headline + CTAs */}
          <div className="relative text-center px-8 py-14 rounded-lg max-w-3xl">
            <h2 className="text-white text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              Fire Rebuild Specialists
            </h2>
            <p className="text-white text-lg sm:text-2xl mb-8">
              From first assessment to final inspection, we restore fire-damaged homes with precision, care,
              and craftsmanship.
            </p>

           <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center">
  {/* Call button */}
  <a
    href="tel:6267609310"
    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full
               bg-[#B21F24] text-white font-semibold shadow-md shadow-gray-200/50
               hover:brightness-110 transition whitespace-nowrap"
  >
    Call&nbsp;Us
  </a>

  {/* Schedule button – outlined for contrast, width matches */}
<a
  href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full
             border border-white text-white font-semibold shadow-md
             hover:bg-white/10 transition whitespace-nowrap"
>
  Schedule&nbsp;a&nbsp;Consultation
</a>
</div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process" className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-semibold text-[#B21F24]">Our Rebuild Process</h3>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                step: '1',
                title: 'Assessment',
                desc: 'We work with adjusters and engineers to evaluate structural integrity and plan the rebuild.',
              },
              {
                step: '2',
                title: 'Design & Permits',
                desc: 'Our team drafts plans, secures permits, and coordinates approvals to keep things moving.',
              },
              {
                step: '3',
                title: 'Reconstruction',
                desc: 'Skilled crews rebuild your home with quality materials, on schedule and on budget.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white p-6 rounded-lg shadow-md shadow-gray-200/70">
                <div className="h-12 w-12 mx-auto rounded-full bg-[#B21F24] text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BEFORE / AFTER SHOWCASE */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/before-after-fire.png"
              alt="Before and after rebuild transformation"
              width={1200}
              height={800}
              className="w-full rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-3xl font-semibold text-[#B21F24] mb-4">See the Transformation</h3>
              <p className="text-lg leading-relaxed">
                We turn devastation into new beginnings. Let us help you rebuild with care, craftsmanship, and confidence.
 
              </p>
              {/* <a href="#consult" className="inline-block mt-6 text-[#B21F24] font-semibold hover:underline">
                View more examples &raquo;
              </a> */}
            </div>
          </div>
        </section>

        {/* CONSULT CTA */}
        <section id="consult" className="py-20 bg-[#B21F24] text-white text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4">Ready to Rebuild?</h3>
            <p className="text-lg mb-8">
              Schedule a free, no-obligation consultation to discuss your fire-loss project and see how we can help you restore
              your home.
            </p>
           <a
  href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full
             border border-white text-white font-semibold shadow-md
             hover:bg-white/10 transition whitespace-nowrap"
>
  Schedule&nbsp;a&nbsp;Consultation
</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
