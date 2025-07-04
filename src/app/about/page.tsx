'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header active="about" />

      <main className="min-h-screen bg-white text-[#2C2C2C] font-sans">
        {/* ABOUT CONTENT */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Left column — company + owner */}
            <div>
              <h1 className="text-4xl font-extrabold text-[#B21F24] mb-6">
                About RN Construction
              </h1>

              <p className="text-lg leading-relaxed mb-4">
                With decades of combined experience, we specialize in helping families
                recover from disaster with dignity and confidence. Licensed in California
                (#1015528), we’ve rebuilt homes from Sonoma County’s Tubbs Fire to the hills
                of Altadena.
              </p>

              {/* Owner & placeholder bio */}
              <h2 className="text-2xl font-semibold text-[#B21F24] mt-8 mb-2">
                Russell&nbsp;Nobles · Owner
              </h2>
              <p className="leading-relaxed mb-6">
                Russell has spent his career orchestrating complex builds and remodels,
                bringing together skilled craftsmen, trusted suppliers, and cutting-edge
                building science to deliver projects on time and on budget. His philosophy
                is simple: clear communication, meticulous planning, and workmanship that
                stands the test of time.
              </p>

              <ul className="text-gray-700 space-y-2 mb-8">
                <li>📍 PO&nbsp;Box&nbsp;1712, Santa&nbsp;Rosa, CA 95402</li>
                <li>
                  📱{' '}
                  <a href="tel:6267609310" className="text-[#B21F24]">
                    626-760-9310
                  </a>
                </li>
                <li>
                  ✉️{' '}
                  <a
                    href="mailto:rnobles@rnconstruction.com"
                    className="text-[#B21F24]"
                  >
                    rnobles@rnconstruction.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Right column — schedule CTA */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md shadow-gray-200/70 flex flex-col justify-center">
              <p className="text-lg leading-relaxed mb-6">
                Ready to discuss your project? Pick a time on our calendar and we’ll meet
                (virtually) to understand your goals, timeline, and budget.
                It’s quick, easy, and saves the back-and-forth.
              </p>

              <a
                href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-[#B21F24] text-white text-center
                           font-semibold shadow-md hover:brightness-110 transition"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
