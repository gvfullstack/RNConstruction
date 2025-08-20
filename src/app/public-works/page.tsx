import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";
import SectionIndexChips, { TocSection } from "@/components/SectionIndexChips";
import SectionIndexSidebar from "@/components/SectionIndexSidebar";

export const metadata: Metadata = {
  title: "Public Works Construction | RN Construction",
  description:
    "Spec-driven municipal projects delivered with clear documentation, safety oversight, and steady scheduling.",
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
      <Header active="public-works" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero
          title="Public Works"
          sub="Reliable delivery for agencies and districts"
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
                  Public Works overview
                </h1>
                <p className="text-lg leading-relaxed">
                  Public projects succeed when the plan, the paperwork, and the
                  site all stay in sync. Specs are followed, records are kept up
                  to date, and safety is visible every day. The goal is simple:
                  meet the contract requirements and turn over a clean, safe
                  project on time.
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  Teams, inspectors, and stakeholders get the information they
                  need without chasing it. Submittals and RFIs move through the
                  approval chain, certified payroll is posted on schedule, and
                  work is coordinated around school hours or public access when
                  needed.
                </p>
              </section>

              <Divider />

              {/* What we deliver */}
              <ContentSection id="deliverables" title="What we deliver">
                <BulletList
                  items={[
                    "Specification-driven execution with clear documentation",
                    "Classrooms, admin areas, restrooms, and common spaces",
                    "Minor site and utility work, paths of travel, and ADA items",
                    "Accessibility and life-safety upgrades",
                    "Responsive punch and warranty service",
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
                            "Review bid documents, walk the site, confirm scope and phasing, and identify access and protection needs.",
                        },
                        {
                          step: "2",
                          title: "Submittals & Approvals",
                          desc:
                            "Prepare submittals, track comments, and move RFIs through the approval chain before work starts.",
                        },
                        {
                          step: "3",
                          title: "Construction",
                          desc:
                            "Follow the specs, hold pre-install meetings, schedule inspections in order, and keep daily reports current.",
                        },
                        {
                          step: "4",
                          title: "Closeout",
                          desc:
                            "Deliver O&M manuals, as-builts, warranties, and training as required by the contract.",
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
                  Timelines depend on scope, approvals, and lead times. The
                  schedule is confirmed after the approval steps and is updated
                  as work moves forward.
                </p>
              </ContentSection>

              <Divider />

              {/* Permits & compliance */}
              <ContentSection id="permits" title="Permits, compliance, and coordination">
                <p className="mt-3 text-gray-700">
                  Public work requires prevailing wage, certified payroll,
                  submittal logs, safety plans, and often community notices and
                  traffic control. Background checks or badging may be needed at
                  schools or secure sites. We handle these requirements and tie
                  related work into{" "}
                  <Link
                    href="/capabilities#public-works"
                    className="text-[#B21F24] font-semibold hover:underline"
                  >
                    Public Works Delivery
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/capabilities#grading"
                    className="text-[#B21F24] font-semibold hover:underline"
                  >
                    Grading &amp; Earthwork
                  </Link>{" "}
                  when site work is included.
                </p>
              </ContentSection>

              <Divider />

              {/* Budget guidance */}
              <ContentSection id="budget" title="Budget guidance">
                <p className="mt-3 text-gray-700">
                  Most public projects are fixed-bid. For negotiated or job order
                  work, we provide line-item estimates supported by quotes and
                  historical costs. If scope changes, we explain cost and time
                  effects before work shifts.
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
                    q="What documentation do you expect from subs?"
                    a="Timely submittals, certified payroll, and daily reports so the record is complete and inspections stay on track."
                  />
                  <FAQ
                    q="Can you work around school or public hours?"
                    a="Yes. We phase work, secure areas, and schedule noisy tasks off-hours to keep students and the public safe."
                  />
                  <FAQ
                    q="Who approves changes?"
                    a="Change orders follow the agency chain of command. Scope, cost, and time effects are documented before work proceeds."
                  />
                  <FAQ
                    q="How do you ensure quality?"
                    a="Pre-install meetings, inspections, and punch lists verify each stage. We follow the specs and record key checks."
                  />
                  <FAQ
                    q="Do you take on small projects?"
                    a="Yes. We handle classroom refreshes, restroom upgrades, small site improvements, and similar scopes."
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
                name: "What documentation do you expect from subs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Timely submittals, certified payroll, and daily reports so the record is complete and inspections stay on track.",
                },
              },
              {
                "@type": "Question",
                name: "Can you work around school or public hours?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We phase work, secure areas, and schedule noisy tasks off-hours to keep students and the public safe.",
                },
              },
              {
                "@type": "Question",
                name: "Who approves changes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Change orders follow the agency chain of command. Scope, cost, and time effects are documented before work proceeds.",
                },
              },
              {
                "@type": "Question",
                name: "How do you ensure quality?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Pre-install meetings, inspections, and punch lists verify each stage. We follow the specs and record key checks.",
                },
              },
              {
                "@type": "Question",
                name: "Do you take on small projects?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We handle classroom refreshes, restroom upgrades, small site improvements, and similar scopes.",
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
