import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";

export const metadata: Metadata = {
  title: "Residential Construction | RN Construction",
  description: "Custom remodels, additions, and new homes with clear communication throughout.",
};

export default function Page() {
  return (
    <>
      <Header active="residential" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero title="Residential Construction" sub="Personalized building and remodeling for your home" />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto prose prose-neutral prose-lg max-w-none">
            <p>
              Welcome, I’m <strong>Russell Nobles</strong>, owner of <strong>RN Construction</strong>. We plan every residential
              project with you, coordinate trusted trades, and keep communication straightforward so your home improves
              without surprises.
            </p>

            <h2>What we deliver</h2>
            <ul>
              <li>Custom kitchens and baths</li>
              <li>Room additions and ADUs</li>
              <li>Whole-home remodels</li>
              <li>Ground-up new builds</li>
              <li>Finish carpentry and trim</li>
              <li>Energy and efficiency updates</li>
            </ul>

            <h2>Process and timeline</h2>
            <ol>
              <li><strong>Assessment.</strong> We start with a site visit to review goals and existing conditions.</li>
              <li><strong>Design and permits.</strong> Plans are refined and permits are handled so work is approved before we begin.</li>
              <li><strong>Construction.</strong> Trades are scheduled in a logical sequence and inspected for quality.</li>
              <li><strong>Closeout.</strong> We walk the project with you, address punch items, and deliver warranties.</li>
            </ol>
            <p className="text-gray-600">
              Timelines vary by jurisdiction, scope, and lead times. We confirm the schedule after design and permitting
              milestones and keep you updated throughout.
            </p>

            <h2>Permits, compliance, and coordination</h2>
            <p>
              Residential work requires local permits, energy calculations under Title 24, and a sequence of inspections.
              Our team coordinates each step and ties it to our <a href="/capabilities#design-build">Design-Build</a> and
              <a href="/capabilities#remodels">Remodels</a> capabilities. For new structures we also connect you to our
              <a href="/capabilities#ground-up">Ground-Up</a> resources.
            </p>

            <h2>Budget guidance</h2>
            <p>
              After a walkthrough and a look at any plans, we provide a range that reflects current pricing. Final budgets
              come together once selections are made and subcontractor numbers are confirmed.
            </p>

            <h2>Frequently asked questions</h2>
            <div className="space-y-4">
              <details>
                <summary><strong>Can we live in the home during construction?</strong></summary>
                <p>For smaller scopes we can phase work so you stay put. Large remodels are smoother when the home is vacant.</p>
              </details>
              <details>
                <summary><strong>How do you keep the schedule on track?</strong></summary>
                <p>We set realistic milestones, monitor material lead times, and adjust quickly if something shifts.</p>
              </details>
              <details>
                <summary><strong>How are finish selections handled?</strong></summary>
                <p>We review options with you early and lock choices before ordering to avoid delays.</p>
              </details>
              <details>
                <summary><strong>What happens if we need a change?</strong></summary>
                <p>Change orders are priced and approved before work continues so costs stay transparent.</p>
              </details>
              <details>
                <summary><strong>Is there a warranty?</strong></summary>
                <p>Yes, our workmanship is warranted for one year and manufacturer warranties are passed through.</p>
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
                name: "Can we live in the home during construction?",
                acceptedAnswer: { "@type": "Answer", text: "For smaller scopes we can phase work so you stay put. Large remodels are smoother when the home is vacant." },
              },
              {
                "@type": "Question",
                name: "How do you keep the schedule on track?",
                acceptedAnswer: { "@type": "Answer", text: "We set realistic milestones, monitor material lead times, and adjust quickly if something shifts." },
              },
              {
                "@type": "Question",
                name: "How are finish selections handled?",
                acceptedAnswer: { "@type": "Answer", text: "We review options with you early and lock choices before ordering to avoid delays." },
              },
              {
                "@type": "Question",
                name: "What happens if we need a change?",
                acceptedAnswer: { "@type": "Answer", text: "Change orders are priced and approved before work continues so costs stay transparent." },
              },
              {
                "@type": "Question",
                name: "Is there a warranty?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, our workmanship is warranted for one year and manufacturer warranties are passed through." },
              },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}
