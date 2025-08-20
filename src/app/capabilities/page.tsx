import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";

export const metadata: Metadata = {
  title: "Construction Capabilities | RN Construction",
  description: "From design-build to grading, our team manages the full construction process with accountability.",
};

export default function Page() {
  return (
    <>
      <Header active="capabilities" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero title="Capabilities" sub="One accountable team from concept to keys" />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto prose prose-neutral prose-lg max-w-none">
            <p>
              I’m <strong>Russell Nobles</strong>. Our capabilities cover the full project life cycle. Whether you need plans,
              a complete build, or targeted improvements, we manage the work so you have a single point of accountability.
            </p>

            <h2 id="design-build">Design-Build</h2>
            <p>Integrated design and construction keeps projects efficient and aligned with budget.</p>
            <ul>
              <li>Early budgeting and feasibility</li>
              <li>Value engineering options</li>
              <li>Permit management and agency coordination</li>
              <li>Single contract and point of contact</li>
            </ul>

            <h2 id="ground-up">Ground-Up Construction</h2>
            <p>From bare site to finished building, we coordinate every trade.</p>
            <ul>
              <li>Site preparation and utilities</li>
              <li>Foundations and structural framing</li>
              <li>Mechanical, electrical, and plumbing coordination</li>
              <li>Exterior and interior finish work</li>
            </ul>

            <h2 id="remodels">Remodels & Additions</h2>
            <p>Updates and expansions that respect existing structures and occupants.</p>
            <ul>
              <li>Kitchens, baths, and living areas</li>
              <li>Structural modifications and additions</li>
              <li>Finish carpentry and millwork</li>
              <li>Energy and efficiency upgrades</li>
            </ul>

            <h2 id="ti">Tenant Improvements</h2>
            <p>Buildouts tailored to leases and landlord requirements.</p>
            <ul>
              <li>Demolition and reconfiguration</li>
              <li>Ceilings, lighting, and mechanical adjustments</li>
              <li>Finish packages and storefronts</li>
              <li>After-hours or phased work for occupied buildings</li>
            </ul>

            <h2 id="public-works">Public Works Delivery</h2>
            <p>Spec-driven projects for agencies and districts.</p>
            <ul>
              <li>Prevailing wage compliance</li>
              <li>Certified payroll and submittal tracking</li>
              <li>Site safety and traffic control plans</li>
              <li>Community and stakeholder communication</li>
            </ul>

            <h2 id="outdoor">Pools & Outdoor Living</h2>
            <p>Exterior spaces built for California living.</p>
            <ul>
              <li>Concrete shells and shotcrete pools</li>
              <li>Decking, patios, and shade structures</li>
              <li>Outdoor kitchens and fire features</li>
              <li>Lighting and landscaping coordination</li>
            </ul>

            <h2 id="grading">Grading & Earthwork</h2>
            <p>Site preparation for stable foundations and drainage.</p>
            <ul>
              <li>Rough and fine grading</li>
              <li>Trenching and utilities</li>
              <li>Soil compaction and testing</li>
              <li>Erosion and stormwater control</li>
            </ul>

            <h2>Frequently asked questions</h2>
            <div className="space-y-4">
              <details>
                <summary><strong>Do you self-perform or manage subcontractors?</strong></summary>
                <p>We self-perform selective scopes and partner with trusted subs, managing them under our supervision.</p>
              </details>
              <details>
                <summary><strong>Can you take over a project already in progress?</strong></summary>
                <p>Yes, we can step in after evaluating existing work and documentation.</p>
              </details>
              <details>
                <summary><strong>How do you handle design changes mid-project?</strong></summary>
                <p>We review impacts on cost and schedule, then document approvals before proceeding.</p>
              </details>
              <details>
                <summary><strong>Why choose design-build?</strong></summary>
                <p>Design-build streamlines communication and aligns budget, schedule, and scope from the start.</p>
              </details>
            </div>

            <p>
              Explore our sectors like <a href="/residential">Residential</a> or <a href="/commercial">Commercial</a> to see how
              these capabilities are applied.
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
                name: "Do you self-perform or manage subcontractors?",
                acceptedAnswer: { "@type": "Answer", text: "We self-perform selective scopes and partner with trusted subs, managing them under our supervision." },
              },
              {
                "@type": "Question",
                name: "Can you take over a project already in progress?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, we can step in after evaluating existing work and documentation." },
              },
              {
                "@type": "Question",
                name: "How do you handle design changes mid-project?",
                acceptedAnswer: { "@type": "Answer", text: "We review impacts on cost and schedule, then document approvals before proceeding." },
              },
              {
                "@type": "Question",
                name: "Why choose design-build?",
                acceptedAnswer: { "@type": "Answer", text: "Design-build streamlines communication and aligns budget, schedule, and scope from the start." },
              },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}
