import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";

export const metadata: Metadata = {
  title: "Tenant Improvements | RN Construction",
  description: "Office, retail, and medical buildouts managed with care for occupied buildings.",
};

export default function Page() {
  return (
    <>
      <Header active="tenant-improvements" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero title="Tenant Improvements" sub="Efficient buildouts tailored to your lease" />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto prose prose-neutral prose-lg max-w-none">
            <p>
              I’m <strong>Russell Nobles</strong>. We build tenant spaces with respect for neighbors and building rules.
              Our team coordinates with property managers and keeps dust and noise under control.
            </p>

            <h2>What we deliver</h2>
            <ul>
              <li>Office, retail, and medical buildouts</li>
              <li>Demolition and partitions</li>
              <li>Ceilings and lighting</li>
              <li>Flooring and finish packages</li>
              <li>Landlord coordination and documentation</li>
            </ul>

            <h2>Process and timeline</h2>
            <ol>
              <li><strong>Assessment.</strong> We review the lease and existing systems and confirm building rules.</li>
              <li><strong>Design and permits.</strong> Plans, ADA checks, and fire/life safety reviews move forward.</li>
              <li><strong>Construction.</strong> We schedule trades, protect common areas, and keep a clean site.</li>
              <li><strong>Closeout.</strong> Inspections, punch lists, and tenant manuals are wrapped up for turnover.</li>
            </ol>
            <p className="text-gray-600">
              Timelines vary by jurisdiction, scope, and lead times. We confirm the schedule after design and permitting
              milestones and keep you updated throughout.
            </p>

            <h2>Permits, compliance, and coordination</h2>
            <p>
              Tenant work must meet ADA, fire and life safety, and often acoustical requirements. We manage permits and set up
              barriers and negative air if needed. This work draws on our <a href="/capabilities#ti">Tenant Improvements</a>
              and <a href="/capabilities#remodels">Remodels</a> capabilities.
            </p>

            <h2>Budget guidance</h2>
            <p>
              We assemble pricing after a walkthrough and review of plans. Allowances for finishes are clarified early so you
              know where choices can affect cost.
            </p>

            <h2>Frequently asked questions</h2>
            <div className="space-y-4">
              <details>
                <summary><strong>Can work happen while other tenants occupy the building?</strong></summary>
                <p>Yes, we schedule noisy tasks off-hours and maintain clean paths so others can operate.</p>
              </details>
              <details>
                <summary><strong>Do you handle after-hours work?</strong></summary>
                <p>We plan evening or weekend work when building rules require it and communicate costs upfront.</p>
              </details>
              <details>
                <summary><strong>What could delay the schedule?</strong></summary>
                <p>Lead times for long items and late design decisions are the most common causes; we flag these early.</p>
              </details>
              <details>
                <summary><strong>How are plan changes managed?</strong></summary>
                <p>Changes are priced, approved, and documented before work proceeds.</p>
              </details>
              <details>
                <summary><strong>How do you keep costs under control?</strong></summary>
                <p>We secure multiple trade bids and review options with you before committing.</p>
              </details>
            </div>

            <p>
              See how these methods come together on our <a href="/capabilities">Capabilities</a> page. When you are ready, you can also
              browse our <a href="/projects">Projects</a> later.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#B21F24] text-white text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4">Ready to talk through your project?</h3>
            <p className="text-lg mb-8">We will align scope, budget, and schedule, then build with care.</p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can work happen while other tenants occupy the building?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, we schedule noisy tasks off-hours and maintain clean paths so others can operate." },
              },
              {
                "@type": "Question",
                name: "Do you handle after-hours work?",
                acceptedAnswer: { "@type": "Answer", text: "We plan evening or weekend work when building rules require it and communicate costs upfront." },
              },
              {
                "@type": "Question",
                name: "What could delay the schedule?",
                acceptedAnswer: { "@type": "Answer", text: "Lead times for long items and late design decisions are the most common causes; we flag these early." },
              },
              {
                "@type": "Question",
                name: "How are plan changes managed?",
                acceptedAnswer: { "@type": "Answer", text: "Changes are priced, approved, and documented before work proceeds." },
              },
              {
                "@type": "Question",
                name: "How do you keep costs under control?",
                acceptedAnswer: { "@type": "Answer", text: "We secure multiple trade bids and review options with you before committing." },
              },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}
