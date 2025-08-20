import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";
import SectionIndexChips, { TocSection } from "@/components/SectionIndexChips";
import SectionIndexSidebar from "@/components/SectionIndexSidebar";

export const metadata: Metadata = {
  title: "Tenant Improvements | RN Construction",
  description:
    "Office, retail, and medical buildouts planned around building rules, neighbors, and downtime.",
};

const SECTIONS: TocSection[] = [
  { id: "overview", label: "Overview" },
  { id: "deliverables", label: "What we deliver" },
  { id: "process", label: "Process & timeline" },
  { id: "permits", label: "Permits & compliance" },
  { id: "budget", label: "Budget guidance" },
  { id: "faq", label: "FAQ" },
];

export default function Page() {
  return (
    <>
      <Header active="tenant-improvements" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero
          title="Tenant Improvements"
          sub="Efficient buildouts tailored to your lease"
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
                  Tenant Improvements overview
                </h1>
                <p className="text-lg leading-relaxed">
                  TI projects run best when building rules, neighbor needs, and
                  lease requirements are built into the plan from day one. Clear
                  schedules, protection of common areas, and off-hour work where
                  needed keep operations steady for everyone in the building.
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  Managers, landlords, and tenants get one point of contact and
                  simple updates. Dust and noise are controlled, paths of travel
                  stay clean, and inspections are sequenced so finishes and
                  equipment install without rework.
                </p>
              </section>

              <Divider />

              {/* What we deliver */}
              <ContentSection id="deliverables" title="What we deliver">
                <BulletList
                  items={[
                    "Office, retail, and clinic buildouts",
                    "Selective demo and reconfiguration of walls",
                    "Ceilings, lighting, power, and data rough-ins",
                    "Flooring and coordinated finish packages",
                    "Storefronts, doors, hardware, and signage coordination",
                    "Landlord coordination and required documentation",
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
                            "Review lease and building rules, walk the space, confirm existing systems, access, and staging.",
                        },
                        {
                          step: "2",
                          title: "Design & Permits",
                          desc:
                            "Prepare drawings, ADA and fire/life safety items, coordinate MEP, and track comments and inspection order.",
                        },
                        {
                          step: "3",
                          title: "Construction",
                          desc:
                            "Protect common areas, set barriers, and use negative air if needed. Trades are sequenced to reduce noise and downtime; off-hour work is scheduled when required.",
                        },
                        {
                          step: "4",
                          title: "Closeout",
                          desc:
                            "Complete punch items quickly, deliver O&M documents and warranties, and turn over a clean space.",
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
                  Timelines depend on scope, approvals, building rules, and lead
                  times. A working schedule is shared after permit milestones and
                  updated as work moves forward.
                </p>
              </ContentSection>

              <Divider />

              {/* Permits & compliance */}
              <ContentSection id="permits" title="Permits, compliance, and coordination">
                <p className="mt-3 text-gray-700">
                  TI work must meet ADA and fire/life safety standards and may
                  include acoustical and ventilation requirements. Barriers,
                  protection, and negative air are planned in advance. Related
                  capabilities include{" "}
                  <Link
                    href="/capabilities#ti"
                    className="text-[#B21F24] font-semibold hover:underline"
                  >
                    Tenant Improvements
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/capabilities#remodels"
                    className="text-[#B21F24] font-semibold hover:underline"
                  >
                    Remodels &amp; Additions
                  </Link>
                  .
                </p>
              </ContentSection>

              <Divider />

              {/* Budget guidance */}
              <ContentSection id="budget" title="Budget guidance">
                <p className="mt-3 text-gray-700">
                  Pricing begins with a walkthrough and plan review. Allowances for
                  finishes and lighting are set early so choices are clear. Long-lead
                  items are identified and ordered to protect the schedule.
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
                    q="Can work happen while other tenants occupy the building?"
                    a="Yes. Noisy or disruptive tasks are scheduled off-hours, and clean paths of travel are maintained so others can operate."
                  />
                  <FAQ
                    q="Do you handle after-hours work?"
                    a="We plan evening or weekend work when the building requires it and share the added costs up front."
                  />
                  <FAQ
                    q="What could delay the schedule?"
                    a="Long-lead items and late design decisions are the most common causes. These are flagged early with options to keep on track."
                  />
                  <FAQ
                    q="How are plan changes managed?"
                    a="Changes are priced and approved in writing before work proceeds, with schedule effects shown clearly."
                  />
                  <FAQ
                    q="How do you keep costs under control?"
                    a="Multiple trade bids, value options, and clear allowances help manage cost without surprises."
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
                name: "Can work happen while other tenants occupy the building?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Noisy or disruptive tasks are scheduled off-hours, and clean paths of travel are maintained so others can operate.",
                },
              },
              {
                "@type": "Question",
                name: "Do you handle after-hours work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We plan evening or weekend work when the building requires it and share the added costs up front.",
                },
              },
              {
                "@type": "Question",
                name: "What could delay the schedule?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Long-lead items and late design decisions are the most common causes. These are flagged early with options to keep on track.",
                },
              },
              {
                "@type": "Question",
                name: "How are plan changes managed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Changes are priced and approved in writing before work proceeds, with schedule effects shown clearly.",
                },
              },
              {
                "@type": "Question",
                name: "How do you keep costs under control?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Multiple trade bids, value options, and clear allowances help manage cost without surprises.",
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
