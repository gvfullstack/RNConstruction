import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";

export const metadata: Metadata = {
  title: "Multifamily and HOA Construction | RN Construction",
  description: "Unit turns, common areas, and exterior repairs completed with resident communication and safety in mind.",
};

export default function Page() {
  return (
    <>
      <Header active="multi-family" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero title="Multifamily / HOA" sub="Reliable work around occupied homes" />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto prose prose-neutral prose-lg max-w-none">
            <p>
              Welcome, I’m <strong>Russell Nobles</strong>, owner of <strong>RN Construction</strong>. In multifamily and HOA
              communities, we work with managers and boards to plan schedules, communicate clearly, and keep residents safe
              while improvements take place.
            </p>

            <h2>What we deliver</h2>
            <ul>
              <li>Unit turns and refreshes</li>
              <li>Common area improvements</li>
              <li>Exterior repairs and waterproofing</li>
              <li>Safety fencing and lighting</li>
              <li>Small site and grading repairs</li>
            </ul>

            <h2>Process and timeline</h2>
            <ol>
              <li><strong>Assessment.</strong> We meet with management, walk the property, and note resident impacts.</li>
              <li><strong>Design and permits.</strong> Plans, notices, and approvals are prepared before work begins.</li>
              <li><strong>Construction.</strong> Crews work building by building with clear signage and staging.</li>
              <li><strong>Closeout.</strong> Punch items and warranties are documented and delivered to the board.</li>
            </ol>
            <p className="text-gray-600">
              Timelines vary by jurisdiction, scope, and lead times. We confirm the schedule after design and permitting
              milestones and keep you updated throughout.
            </p>

            <h2>Permits, compliance, and coordination</h2>
            <p>
              Occupied properties require clear notices, safe access, and coordination with inspectors. We plan staging areas
              and inspection windows and tie this work to our
              <a href="/capabilities#remodels">Remodels</a>,
              <a href="/capabilities#outdoor">Outdoor</a>, and
              <a href="/capabilities#grading">Grading</a> capabilities as needed.
            </p>

            <h2>Budget guidance</h2>
            <p>
              We prepare estimates after a property walk and review of scope. Boards see line items and allowances so decisions
              are made with full cost visibility.
            </p>

            <h2>Frequently asked questions</h2>
            <div className="space-y-4">
              <details>
                <summary><strong>How do you communicate with residents and boards?</strong></summary>
                <p>We provide notice templates, attend meetings, and keep a single point of contact for updates.</p>
              </details>
              <details>
                <summary><strong>How do you minimize disruption?</strong></summary>
                <p>Work is phased by building or stack, and we maintain clean paths and quiet hours when required.</p>
              </details>
              <details>
                <summary><strong>Can you sequence units for turnover deadlines?</strong></summary>
                <p>Yes, we plan unit batches so leasing schedules stay on track.</p>
              </details>
              <details>
                <summary><strong>Who handles resident questions during construction?</strong></summary>
                <p>We coordinate through management and provide on-site contacts for quick responses.</p>
              </details>
              <details>
                <summary><strong>Do you offer emergency repair services?</strong></summary>
                <p>We can respond to urgent issues and coordinate insurance if needed.</p>
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
                name: "How do you communicate with residents and boards?",
                acceptedAnswer: { "@type": "Answer", text: "We provide notice templates, attend meetings, and keep a single point of contact for updates." },
              },
              {
                "@type": "Question",
                name: "How do you minimize disruption?",
                acceptedAnswer: { "@type": "Answer", text: "Work is phased by building or stack, and we maintain clean paths and quiet hours when required." },
              },
              {
                "@type": "Question",
                name: "Can you sequence units for turnover deadlines?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, we plan unit batches so leasing schedules stay on track." },
              },
              {
                "@type": "Question",
                name: "Who handles resident questions during construction?",
                acceptedAnswer: { "@type": "Answer", text: "We coordinate through management and provide on-site contacts for quick responses." },
              },
              {
                "@type": "Question",
                name: "Do you offer emergency repair services?",
                acceptedAnswer: { "@type": "Answer", text: "We can respond to urgent issues and coordinate insurance if needed." },
              },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}
