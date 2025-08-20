import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";

export const metadata: Metadata = {
  title: "Disaster Recovery Construction | RN Construction",
  description: "Fire and flood rebuilding with clear communication between owners, adjusters, and inspectors.",
};

export default function Page() {
  return (
    <>
      <Header active="disaster-recovery" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero title="Disaster Recovery" sub="Rebuilding homes and businesses after loss" />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto prose prose-neutral prose-lg max-w-none">
            <p>
              I’m <strong>Russell Nobles</strong>. When disaster strikes, we step in early to stabilize the site, document the
              damage, and guide you through each decision. We coordinate with adjusters and keep you informed as we rebuild.
            </p>

            <h2>What we deliver</h2>
            <ul>
              <li>Damage assessment and scope of loss review</li>
              <li>Selective demolition and debris removal</li>
              <li>Structural framing and mechanical rebuilds</li>
              <li>Interior finishes and restoration</li>
              <li>Coordination with insurers and inspectors</li>
            </ul>

            <h2>Process and timeline</h2>
            <ol>
              <li><strong>Assessment.</strong> We document damage, meet adjusters, and secure the site.</li>
              <li><strong>Design and permits.</strong> Plans and engineering are completed and permits secured.</li>
              <li><strong>Construction.</strong> Framing, utilities, and finishes are restored with regular inspections.</li>
              <li><strong>Closeout.</strong> Final walkthroughs, documentation, and warranties are provided.</li>
            </ol>
            <p className="text-gray-600">
              Timelines vary by jurisdiction, scope, and lead times. We confirm the schedule after design and permitting
              milestones and keep you updated throughout.
            </p>

            <h2>Permits, compliance, and coordination</h2>
            <p>
              Recovery work often involves engineers, environmental testing, and insurer approvals. We manage these steps and
              draw on our <a href="/capabilities#ground-up">Ground-Up</a> and
              <a href="/capabilities#design-build">Design-Build</a> capabilities to bring structures back to life.
            </p>

            <h2>Budget guidance</h2>
            <p>
              Budgets are based on adjuster estimates and our own takeoffs. We clarify what insurance covers and what is an
              owner upgrade before work begins.
            </p>

            <h2>Frequently asked questions</h2>
            <div className="space-y-4">
              <details>
                <summary><strong>Do you work directly with insurance adjusters?</strong></summary>
                <p>Yes, we review scopes, provide estimates, and document progress to align with the claim.</p>
              </details>
              <details>
                <summary><strong>What parts of the rebuild are typically covered?</strong></summary>
                <p>Policies usually cover returning the structure to pre-loss condition. Upgrades are priced separately.</p>
              </details>
              <details>
                <summary><strong>How long does a rebuild take?</strong></summary>
                <p>It depends on permitting and material lead times. We share a timeline once plans are approved.</p>
              </details>
              <details>
                <summary><strong>Can you help with temporary housing coordination?</strong></summary>
                <p>We can refer resources and prioritize phases so you return as soon as possible.</p>
              </details>
              <details>
                <summary><strong>What documentation do you provide for claims?</strong></summary>
                <p>We supply photos, schedules, and cost breakdowns to support your claim file.</p>
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
                name: "Do you work directly with insurance adjusters?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, we review scopes, provide estimates, and document progress to align with the claim." },
              },
              {
                "@type": "Question",
                name: "What parts of the rebuild are typically covered?",
                acceptedAnswer: { "@type": "Answer", text: "Policies usually cover returning the structure to pre-loss condition. Upgrades are priced separately." },
              },
              {
                "@type": "Question",
                name: "How long does a rebuild take?",
                acceptedAnswer: { "@type": "Answer", text: "It depends on permitting and material lead times. We share a timeline once plans are approved." },
              },
              {
                "@type": "Question",
                name: "Can you help with temporary housing coordination?",
                acceptedAnswer: { "@type": "Answer", text: "We can refer resources and prioritize phases so you return as soon as possible." },
              },
              {
                "@type": "Question",
                name: "What documentation do you provide for claims?",
                acceptedAnswer: { "@type": "Answer", text: "We supply photos, schedules, and cost breakdowns to support your claim file." },
              },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}
