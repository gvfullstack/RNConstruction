import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";
import SectionIndexChips, { TocSection } from "@/components/SectionIndexChips";
import SectionIndexSidebar from "@/components/SectionIndexSidebar";

export const metadata: Metadata = {
  title: "Multifamily and HOA Construction | RN Construction",
  description:
    "Unit turns, common areas, and exterior repairs completed with clear communication, safety, and steady scheduling.",
};

const SECTIONS: TocSection[] = [
  { id: "overview", label: "Overview" },
  { id: "deliverables", label: "What we deliver" },
  { id: "process", label: "Process & timeline" },
  { id: "permits", label: "Permits & coordination" },
  { id: "budget", label: "Budget guidance" },
  { id: "faq", label: "FAQ" },
];

export default function Page() {
  return (
    <>
      <Header active="multi-family" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero
          title="Multifamily / HOA"
          sub="Reliable work around occupied homes"
        />

        {/* Mobile chips */}
        <SectionIndexChips sections={SECTIONS} />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
            {/* Desktop sidebar */}
            <SectionIndexSidebar sections={SECTIONS} />

            {/* Main content */}
            <div className="lg:col-span-9">
              {/* Overview */}
              <section
                id="overview"
                aria-labelledby="overview-heading"
                className="scroll-mt-28 rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm"
              >
                <h1 id="overview-heading" className="sr-only">
                  Multifamily / HOA overview
                </h1>
                <p className="text-lg leading-relaxed">
                  Communities run best when work is planned, posted, and clean.
                  Projects in apartments, condos, and HOAs need clear notices,
                  safe paths, and steady schedules. The goal is simple: finish
                  quality work while daily life continues for residents.
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  Managers and boards get one point of contact. Residents get
                  plain updates about when crews will be on site, which areas are
                  closed, and how long work will take. Staging, parking, and quiet
                  hours are set up front so there are no surprises.
                </p>
              </section>

              <Divider />

              {/* What we deliver */}
              <ContentSection id="deliverables" title="What we deliver">
                <BulletList
                  items={[
                    "Unit turns and refreshes (paint, flooring, fixtures, minor repair)",
                    "Common-area improvements (lobbies, mail rooms, laundry, corridors)",
                    "Exterior repairs and waterproofing (siding, trim, sealants)",
                    "Balcony, stair, and landing repairs, with safety barriers as needed",
                    "Site items: lighting, fencing, small grading and drainage fixes",
                  ]}
                />
              </ContentSection>

              <Divider />

              {/* Process & timeline */}
              <ContentSection id="process" title="Process and timeline">
                <div className="bg-gray-100 rounded-xl p-6 sm:p-8">
                  <div className="max-w-5xl mx-auto">
                    <h3 className="text-xl font-semibold text-[#B21F24] text-center mb-8">
                      Our Build Process
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                      {[
                        {
                          step: "1",
                          title: "Assessment",
                          desc:
                            "Walk the property with management, confirm priorities, and map phasing by building or stack. Identify access, parking, and staging spots.",
                        },
                        {
                          step: "2",
                          title: "Design & Approvals",
                          desc:
                            "Prepare drawings and scopes, coordinate any engineering, confirm finishes, and set notice templates and posting schedule.",
                        },
                        {
                          step: "3",
                          title: "Construction",
                          desc:
                            "Work moves in clear phases with signage and protection. Dust, noise, and debris are controlled. Crews follow quiet hours and keep paths open where possible.",
                        },
                        {
                          step: "4",
                          title: "Closeout",
                          desc:
                            "Punch items are closed quickly. Warranties and documentation are delivered to management or the board with photos as needed.",
                        },
                      ].map(({ step, title, desc }) => (
                        <div
                          key={step}
                          className="bg-white p-6 rounded-lg shadow-md shadow-gray-200/70"
                        >
                          <div className="h-12 w-12 mx-auto rounded-full bg-[#B21F24] text-white flex items-center justify-center text-xl font-bold mb-4">
                            {step}
                          </div>
                          <h4 className="text-lg font-semibold mb-2">{title}</h4>
                          <p className="text-sm leading-relaxed">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-gray-600">
                  Timelines depend on scope, approvals, and lead times. A firm
                  schedule is shared after the walkthrough and planning steps, then
                  updated as work moves forward.
                </p>
              </ContentSection>

              <Divider />

              {/* Permits & coordination */}
              <ContentSection
                id="permits"
                title="Permits, safety, and coordination"
              >
                <p className="mt-3 text-gray-700">
                  Occupied properties require safe access and clear communication.
                  Work is posted in advance, access routes are kept clean, and
                  temporary barriers stay in place until areas are ready. When
                  inspections are needed, windows are set so they do not cause long
                  delays. We coordinate with management and inspectors, and tie the
                  effort to related capabilities like{" "}
                  <Link
                    href="/capabilities#remodels"
                    className="text-[#B21F24] font-semibold hover:underline"
                  >
                    Remodels
                  </Link>
                  ,{" "}
                  <Link
                    href="/capabilities#outdoor"
                    className="text-[#B21F24] font-semibold hover:underline"
                  >
                    Pools &amp; Outdoor
                  </Link>
                  , and{" "}
                  <Link
                    href="/capabilities#grading"
                    className="text-[#B21F24] font-semibold hover:underline"
                  >
                    Grading &amp; Earthwork
                  </Link>
                  .
                </p>
              </ContentSection>

              <Divider />

              {/* Budget guidance */}
              <ContentSection id="budget" title="Budget guidance">
                <p className="mt-3 text-gray-700">
                  Estimates follow a property walk and scope review. Boards and
                  managers see line items, allowances, and any alternates. If scope
                  changes, we explain schedule and cost effects before work shifts.
                </p>
              </ContentSection>

              <Divider />

              {/* FAQ */}
              <section
                id="faq"
                aria-labelledby="faq-heading"
                className="scroll-mt-28 rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm"
              >
                <h2 id="faq-heading" className="text-2xl font-semibold text-[#B21F24]">
                  Frequently asked questions
                </h2>

                <div className="mt-6 space-y-3">
                  <FAQ
                    q="How do you communicate with residents and boards?"
                    a="Managers and boards get a single point of contact. We provide notice templates, attend meetings when needed, and post clear updates in common areas."
                  />
                  <FAQ
                    q="How do you minimize disruption?"
                    a="Work is phased by building or stack. We set quiet hours, maintain clean paths, and keep barriers and signage in place until areas are complete."
                  />
                  <FAQ
                    q="Can you sequence units for turnover deadlines?"
                    a="Yes. Batches are scheduled to match leasing timelines so move-ins and renewals stay on track."
                  />
                  <FAQ
                    q="Who handles resident questions during construction?"
                    a="Questions flow through management to our site lead. We also post contact info so urgent issues get quick responses."
                  />
                  <FAQ
                    q="Do you offer emergency repair services?"
                    a="We can respond to urgent issues and coordinate with insurance when needed. Scope and safety are confirmed before work begins."
                  />
                </div>

                <p className="mt-6 text-gray-700">
                  For related methods and standards, visit our{" "}
                  <Link
                    href="/capabilities"
                    className="text-[#B21F24] font-semibold hover:underline"
                  >
                    Capabilities
                  </Link>{" "}
                  page.
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
                name: "How do you communicate with residents and boards?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Managers and boards get a single point of contact. We provide notice templates, attend meetings when needed, and post clear updates in common areas.",
                },
              },
              {
                "@type": "Question",
                name: "How do you minimize disruption?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Work is phased by building or stack. We set quiet hours, maintain clean paths, and keep barriers and signage in place until areas are complete.",
                },
              },
              {
                "@type": "Question",
                name: "Can you sequence units for turnover deadlines?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Batches are scheduled to match leasing timelines so move-ins and renewals stay on track.",
                },
              },
              {
                "@type": "Question",
                name: "Who handles resident questions during construction?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Questions flow through management to our site lead. We also post contact info so urgent issues get quick responses.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer emergency repair services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We can respond to urgent issues and coordinate with insurance when needed. Scope and safety are confirmed before work begins.",
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
    <section id={id} className="scroll-mt-28" aria-labelledby={`${id}-heading`}>
      <div className="mb-3">
        <h2
          id={`${id}-heading`}
          className="text-2xl font-semibold text-[#B21F24]"
        >
          {title}
        </h2>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 list-disc pl-5 space-y-1">
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
