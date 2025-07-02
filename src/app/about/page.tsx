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
            <div>
              <h1 className="text-4xl font-extrabold text-[#B21F24] mb-6">About RN Construction</h1>
              <p className="text-lg leading-relaxed mb-6">
                With decades of combined experience, we specialize in helping families recover from disaster with dignity and confidence.
                Licensed in California (#1015528) &amp; Nevada (#0043620), we’ve rebuilt homes from Sonoma County’s Tubbs Fire to the hills
                of Altadena.
              </p>
              <ul className="text-gray-700 space-y-2 mb-8">
                <li>📍 PO Box 1712, Santa Rosa, CA 95402</li>
                <li>📞 <a href="tel:7075410160" className="text-[#B21F24]">707-541-0160</a></li>
                <li>📠 Fax 707-541-0163</li>
                <li>📱 <a href="tel:7079753857" className="text-[#B21F24]">707-975-3857</a></li>
                <li>✉️ <a href="mailto:rnobles@rnconstruction.com" className="text-[#B21F24]">rnobles@rnconstruction.com</a></li>
              </ul>
            </div>

            {/* CONTACT FORM */}
            <form id="contact" className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md shadow-gray-200/70">
              <h2 className="text-2xl font-semibold text-[#B21F24] mb-4">Request a Consultation</h2>
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded" />
              <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded" />
              <textarea placeholder="Your Message" rows={5} className="w-full p-3 border border-gray-300 rounded" />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-[#B21F24] text-white font-semibold shadow-md shadow-gray-200/50
                           hover:brightness-110 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
