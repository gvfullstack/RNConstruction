import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";

export const metadata: Metadata = {
  title: "Commercial Construction | RN Construction",
  description: "Tenant buildouts and ground-up shells delivered with minimal downtime for your business.",
};

export default function Page() {
  return (
    <>
      <Header active="commercial" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero title="Commercial Construction" sub="Flexible buildouts that keep your business moving" />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto prose prose-neutral prose-lg max-w-none">
            <p>
              I’m <strong>Russell Nobles</strong>. Our commercial work focuses on clear coordination with owners and tenants so
              offices and retail spaces open on time. We communicate schedule impacts early and manage subcontractors closely.
            </p>

            <h2>What we deliver</h2>
            <ul>
              <li>Office and retail interiors</li>
              <li>Lobby and common area upgrades</li>
              <li>Ground-up shells and core spaces</li>
              <li>Phased buildouts while areas stay open</li>
              <li>Night or weekend work to reduce downtime</li>
            </ul>

            <h2>Process and timeline</h2>
            <ol>
              <li><strong>Assessment.</strong> We review the lease, existing conditions, and business needs.</li>
              <li><strong>Design and permits.</strong> Drawings, ADA checks, and permit tracking keep the project moving.</li>
              <li><strong>Construction.</strong> Trades are sequenced to minimize interference with operations.</li>
              <li><strong>Closeout.</strong> Final inspections, punch lists, and turnover documents are completed quickly.</li>
            </ol>
            <p className="text-gray-600">
              Timelines vary by jurisdiction, scope, and lead times. We confirm the schedule after design and permitting
              milestones and keep you updated throughout.
            </p>

            <h2>Permits, compliance, and coordination</h2>
            <p>
              Commercial work must meet ADA, fire and life safety, and tenant improvement requirements. We coordinate MEP
              engineers, handle inspections, and link the effort with our
              <a href="/capabilities#design-build">Design-Build</a>,
              <a href="/capabilities#ti">Tenant Improvements</a>, and
              <a href="/capabilities#ground-up">Ground-Up</a> services.
            </p>

            <h2>Budget guidance</h2>
            <p>
              We offer preliminary pricing after reviewing plans and walking the space. Detailed budgets follow once finishes and
              vendor quotes are finalized.
            </p>

            <h2>Frequently asked questions</h2>
            <div className="space-y-4">
              <details>
                <summary><strong>How do you minimize downtime for our business?</strong></summary>
                <p>We schedule noisy or disruptive work off-hours and phase tasks so you can keep operating where possible.</p>
              </details>
              <details>
                <summary><strong>Can you coordinate mechanical, electrical, and plumbing trades?</strong></summary>
                <p>Yes, we manage all trades and hold coordination meetings to prevent clashes in the field.</p>
              </details>
              <details>
                <summary><strong>Do you help with permitting?</strong></summary>
                <p>We submit plans, track comments, and attend inspections so permits do not hold up the schedule.</p>
              </details>
              <details>
                <summary><strong>Will we see the project schedule?</strong></summary>
                <p>We share a detailed timeline and update it as milestones are met or adjusted.</p>
              </details>
              <details>
                <summary><strong>How is jobsite safety handled?</strong></summary>
                <p>Daily checklists, clear barriers, and safety meetings keep crews and occupants protected.</p>
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
                name: "How do you minimize downtime for our business?",
                acceptedAnswer: { "@type": "Answer", text: "We schedule noisy or disruptive work off-hours and phase tasks so you can keep operating where possible." },
              },
              {
                "@type": "Question",
                name: "Can you coordinate mechanical, electrical, and plumbing trades?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, we manage all trades and hold coordination meetings to prevent clashes in the field." },
              },
              {
                "@type": "Question",
                name: "Do you help with permitting?",
                acceptedAnswer: { "@type": "Answer", text: "We submit plans, track comments, and attend inspections so permits do not hold up the schedule." },
              },
              {
                "@type": "Question",
                name: "Will we see the project schedule?",
                acceptedAnswer: { "@type": "Answer", text: "We share a detailed timeline and update it as milestones are met or adjusted." },
              },
              {
                "@type": "Question",
                name: "How is jobsite safety handled?",
                acceptedAnswer: { "@type": "Answer", text: "Daily checklists, clear barriers, and safety meetings keep crews and occupants protected." },
              },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}
