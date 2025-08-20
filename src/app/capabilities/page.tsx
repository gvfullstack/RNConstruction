import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";
import Link from "next/link";
import SectionIndexChips from "@/components/SectionIndexChips";
import SectionIndexSidebar from "@/components/SectionIndexSidebar";

export const metadata: Metadata = {
  title: "Construction Capabilities | RN Construction",
  description:
    "From design-build to grading, our team manages the full construction process with accountability.",
};

const CAP_SECTIONS = [
  { id: "design-build", label: "Design-Build" },
  { id: "ground-up", label: "Ground-Up" },
  { id: "remodels", label: "Remodels & Additions" },
  { id: "ti", label: "Tenant Improvements" },
  { id: "public-works", label: "Public Works" },
  { id: "outdoor", label: "Pools & Outdoor Living" },
  { id: "grading", label: "Grading & Earthwork" },
  { id: "faq", label: "FAQ" },
];

export default function Page() {
  return (
    <>
      <Header active="capabilities" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero
          title="Capabilities"
          sub="One accountable team from concept to keys"
        />

        {/* Mobile chips (anchor nav) */}
      
        <SectionIndexChips sections={CAP_SECTIONS} />


        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
            {/* Sticky sidebar (desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
           
              <SectionIndexSidebar sections={CAP_SECTIONS} />

            </aside>

            {/* Main content */}
            <div className="lg:col-span-9">
              {/* Intro card */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
              <p>
                From design-build and ground-up construction to remodels &amp; additions, tenant improvements, public works delivery, pools &amp; outdoor living, and grading &amp; earthwork, the sections below outline what each capability includes, when it fits best, and how it influences budget, schedule, and coordination. Skim the headings to zero in on what matters most right now.
              </p>
              <br />
              <p>
                Choosing an approach early reduces risk, limits change orders, and keeps approvals moving. You&#39;ll see how permits and inspections are handled, what compliance involves (ADA, Title&nbsp;24, health department, fire/life safety, prevailing wage), how work proceeds in occupied spaces, and where key decisions shape cost and time. The result is a clear sense of process, realistic timelines, and the documentation you&#39;ll need to move forward with confidence.
              </p>


              </div>

              {/* Sections */}
              <ContentSection id="design-build" title="Design-Build">
                <p className="mt-3 text-gray-700">
                  With design-build, one team plans and builds your project. You get one point of contact and fewer hand-offs, which means fewer surprises. We check prices early and often so the design fits the budget, and we keep the schedule clear so work moves forward smoothly.
                </p>
                <BulletList
                  items={[
                    "Early budgeting and feasibility",
                    "Value engineering options",
                    "Permit management and agency coordination",
                    "Single contract and point of contact",
                  ]}
                />
              </ContentSection>

              <Divider />

              <ContentSection id="ground-up" title="Ground-Up Construction">
                <p className="mt-3 text-gray-700">
                  We take an empty lot to a finished building. Our team handles soil checks, utilities, foundation, framing, and all inspections. We set a step-by-step schedule so trades don&#39;t overlap in a way that slows things down, and you get steady progress you can see.
                </p>
                <BulletList
                  items={[
                    "Site preparation and utilities",
                    "Foundations and structural framing",
                    "Mechanical, electrical, and plumbing coordination",
                    "Exterior and interior finish work",
                  ]}
                />
              </ContentSection>

              <Divider />

              <ContentSection id="remodels" title="Remodels & Additions">
                <p className="mt-3 text-gray-700">
                  We improve your space while you keep living or working there. Floors and furniture are protected, and we set simple rules for dust and noise. We match new work to old so it looks right. If walls move or structure changes, we explain what that means for time and cost before we start.
                </p>
                <BulletList
                  items={[
                    "Kitchens, baths, and living areas",
                    "Structural modifications and additions",
                    "Finish carpentry and millwork",
                    "Energy and efficiency upgrades",
                  ]}
                />
              </ContentSection>

              <Divider />

              <ContentSection id="ti" title="Tenant Improvements">
                <p className="mt-3 text-gray-700">
                  We fit out offices, shops, and clinics. Work starts with the lease plan and landlord rules, then moves through demo, new walls, ceilings, lighting, and ADA items. We can work nights or weekends to reduce downtime. HVAC, plumbing, and power are coordinated so inspections pass the first time.
                </p>
                <BulletList
                  items={[
                    "Demolition and reconfiguration",
                    "Ceilings, lighting, and mechanical adjustments",
                    "Finish packages and storefronts",
                    "After-hours or phased work for occupied buildings",
                  ]}
                />
              </ContentSection>

              <Divider />

              <ContentSection id="public-works" title="Public Works Delivery">
                <p className="mt-3 text-gray-700">
                  Public work follows strict plans and rules. Our crews meet prevailing wage, and certified payroll is submitted on time. We track paperwork like submittals and RFIs (questions for the design team), keep inspectors on the schedule, and run clear safety plans so the site stays safe for the public.
                </p>
                <BulletList
                  items={[
                    "Prevailing wage compliance",
                    "Certified payroll and submittal tracking",
                    "Site safety and traffic control plans",
                    "Community and stakeholder communication",
                  ]}
                />
              </ContentSection>

              <Divider />

              <ContentSection id="outdoor" title="Pools & Outdoor Living">
                <p className="mt-3 text-gray-700">
                  Outdoor spaces should look great and work year-round. We plan drainage, gas, and electric before any concrete or stone goes in. We build pool shells, decks, shade, outdoor kitchens, and fire features, and help you choose finishes that handle sun, water, and daily use.
                </p>
                <BulletList
                  items={[
                    "Concrete shells and shotcrete pools",
                    "Decking, patios, and shade structures",
                    "Outdoor kitchens and fire features",
                    "Lighting and landscaping coordination",
                  ]}
                />
              </ContentSection>

              <Divider />

              <ContentSection id="grading" title="Grading & Earthwork">
                <p className="mt-3 text-gray-700">
                  Good building starts with solid ground. We shape the site, compact the soil, and test it so it holds. Trenches are cut for utilities, and slopes are set so water flows away from the building. Erosion control protects neighbors and streams during rain.
                </p>
                <BulletList
                  items={[
                    "Rough and fine grading",
                    "Trenching and utilities",
                    "Soil compaction and testing",
                    "Erosion and stormwater control",
                  ]}
                />
              </ContentSection>

              <Divider />

              {/* FAQ */}
              <section
                aria-labelledby="faq"
                className="mt-12 rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm"
              >
                <h2 id="faq" className="text-2xl font-semibold text-[#B21F24]">
                  Frequently asked questions
                </h2>

                <div className="mt-6 space-y-3">
                  <FAQ
                    q="Do you self-perform or manage subcontractors?"
                    a="We self-perform selective scopes and partner with trusted subs, managing them under our supervision."
                  />
                  <FAQ
                    q="Can you take over a project already in progress?"
                    a="Yes, we can step in after evaluating existing work and documentation."
                  />
                  <FAQ
                    q="How do you handle design changes mid-project?"
                    a="We review impacts on cost and schedule, then document approvals before proceeding."
                  />
                  <FAQ
                    q="Why choose design-build?"
                    a="Design-build streamlines communication and aligns budget, schedule, and scope from the start."
                  />
                </div>

                <p className="mt-6 text-gray-700">
                  Explore our sectors like{" "}
                  <Link href="/residential" className="text-[#B21F24] font-semibold hover:underline">
                    Residential
                  </Link>{" "}
                  or{" "}
                  <Link href="/commercial" className="text-[#B21F24] font-semibold hover:underline">
                    Commercial
                  </Link>{" "}
                  to see how these capabilities are applied.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#B21F24] text-white text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4">
              Ready to talk through your project?
            </h3>
            <p className="text-lg mb-8">
              We will align scope, budget, and schedule, then build with care.
            </p>
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

      {/* JSON-LD for FAQ */}
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
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We self-perform selective scopes and partner with trusted subs, managing them under our supervision.",
                },
              },
              {
                "@type": "Question",
                name: "Can you take over a project already in progress?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, we can step in after evaluating existing work and documentation.",
                },
              },
              {
                "@type": "Question",
                name: "How do you handle design changes mid-project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We review impacts on cost and schedule, then document approvals before proceeding.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose design-build?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Design-build streamlines communication and aligns budget, schedule, and scope from the start.",
                },
              },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}

/* ───────────────────────── Helpers ───────────────────────── */

function ContentSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 mt-10"
      aria-labelledby={`${id}-heading`}
    >
      <div className="mb-3">
        <h2
          id={`${id}-heading`}
          className="text-2xl font-semibold text-[#B21F24]"
        >
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc pl-5 space-y-1">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  );
}

function Divider() {
  return <hr className="my-10 border-gray-200" />;
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-lg border border-gray-200 bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-4">
        <span className="font-medium">{q}</span>
        <svg
          className="h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.207l3.71-3.977a.75.75 0 111.08 1.04l-4.243 4.544a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
        </svg>
      </summary>
      <p className="mt-3 text-gray-700">{a}</p>
    </details>
  );
}
