import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";

export const metadata: Metadata = {
  title: "Restaurant Construction | RN Construction",
  description: "Dining rooms and back-of-house spaces built to meet health codes and opening timelines.",
};

export default function Page() {
  return (
    <>
      <Header active="restaurants" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero title="Restaurant Construction" sub="Practical buildouts for kitchens and dining spaces" />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto prose prose-neutral prose-lg max-w-none">
            <p>
              Welcome, I’m <strong>Russell Nobles</strong>, owner of <strong>RN Construction</strong>. Restaurants move fast,
              so we coordinate with your design team and equipment vendors to keep approvals and installation aligned. Our goal
              is a smooth opening day.
            </p>

            <h2>What we deliver</h2>
            <ul>
              <li>Dining room and bar buildouts</li>
              <li>Back-of-house kitchen spaces</li>
              <li>Custom finishes and millwork</li>
              <li>Restroom and accessibility upgrades</li>
              <li>Mechanical, electrical, and plumbing coordination</li>
            </ul>

            <h2>Process and timeline</h2>
            <ol>
              <li><strong>Assessment.</strong> We walk the site, review health requirements, and map vendor responsibilities.</li>
              <li><strong>Design and permits.</strong> Hood plans, grease systems, and ADA details are submitted for approval.</li>
              <li><strong>Construction.</strong> Trades work in sequence so equipment and finishes install without conflict.</li>
              <li><strong>Closeout.</strong> Final inspections are scheduled and we assist with punch work before opening.</li>
            </ol>
            <p className="text-gray-600">
              Timelines vary by jurisdiction, scope, and lead times. We confirm the schedule after design and permitting
              milestones and keep you updated throughout.
            </p>

            <h2>Permits, compliance, and coordination</h2>
            <p>
              Restaurant projects involve health department approvals, ventilation and hood requirements, grease management,
              and ADA compliance. We coordinate these tasks alongside our <a href="/capabilities#ti">Tenant Improvements</a> and
              <a href="/capabilities#remodels">Remodels</a> services so design and inspections stay in sync.
            </p>

            <h2>Budget guidance</h2>
            <p>
              We provide a cost range after reviewing plans and equipment lists. Final pricing depends on finishes and vendor
              selections, which we confirm before buildout starts.
            </p>

            <h2>Frequently asked questions</h2>
            <div className="space-y-4">
              <details>
                <summary><strong>How are health and building inspections sequenced?</strong></summary>
                <p>We align health department, building, and fire inspections so approvals land in the right order.</p>
              </details>
              <details>
                <summary><strong>When can we expect to open?</strong></summary>
                <p>After permitting we provide a realistic timeline with contingencies for equipment lead times.</p>
              </details>
              <details>
                <summary><strong>Do you coordinate with kitchen equipment vendors?</strong></summary>
                <p>Yes, we verify rough-ins and schedule deliveries so equipment installs without delay.</p>
              </details>
              <details>
                <summary><strong>Can work happen while the restaurant operates?</strong></summary>
                <p>We can phase smaller upgrades and perform off-hour work, but full remodels usually require closure.</p>
              </details>
              <details>
                <summary><strong>Will you help with permits?</strong></summary>
                <p>We prepare submissions, respond to comments, and attend inspections so permits keep moving.</p>
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
                name: "How are health and building inspections sequenced?",
                acceptedAnswer: { "@type": "Answer", text: "We align health department, building, and fire inspections so approvals land in the right order." },
              },
              {
                "@type": "Question",
                name: "When can we expect to open?",
                acceptedAnswer: { "@type": "Answer", text: "After permitting we provide a realistic timeline with contingencies for equipment lead times." },
              },
              {
                "@type": "Question",
                name: "Do you coordinate with kitchen equipment vendors?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, we verify rough-ins and schedule deliveries so equipment installs without delay." },
              },
              {
                "@type": "Question",
                name: "Can work happen while the restaurant operates?",
                acceptedAnswer: { "@type": "Answer", text: "We can phase smaller upgrades and perform off-hour work, but full remodels usually require closure." },
              },
              {
                "@type": "Question",
                name: "Will you help with permits?",
                acceptedAnswer: { "@type": "Answer", text: "We prepare submissions, respond to comments, and attend inspections so permits keep moving." },
              },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}
