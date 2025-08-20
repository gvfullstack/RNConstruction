import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";
import SectionIndexChips, { TocSection } from "@/components/SectionIndexChips";
import SectionIndexSidebar from "@/components/SectionIndexSidebar";

export const metadata: Metadata = {
  title: "Restaurant Construction | RN Construction",
  description:
    "Dining rooms and back-of-house spaces built to meet health codes, pass inspections, and hit opening timelines.",
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
      <Header active="restaurants" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero
          title="Restaurant Construction"
          sub="Practical buildouts for kitchens and dining spaces"
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
                  Restaurant overview
                </h1>
                <p className="text-lg leading-relaxed">
                  Restaurant projects move fast. Permits, health approvals, and
                  vendor deliveries need to line up so opening day is smooth.
                  Clear plans, clean rough-ins, and the right inspection order
                  keep work moving and prevent rework.
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  Front-of-house and back-of-house have different needs. Dining
                  rooms focus on finishes and comfort, while kitchens focus on
                  power, plumbing, ventilation, and cleanable surfaces. We
                  coordinate both so equipment sets in cleanly and the space
                  passes health, building, and fire checks.
                </p>
              </section>

              <Divider />

              {/* What we deliver */}
              <ContentSection id="deliverables" title="What we deliver">
                <BulletList
                  items={[
                    "Dining room and bar buildouts with durable, cleanable finishes",
                    "Back-of-house kitchens with correct utilities and ventilation",
                    "Custom millwork, counter systems, and service stations",
                    "Restroom upgrades and ADA paths of travel",
                    "MEP coordination, hood systems, and grease management",
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
                            "Walk the site, confirm existing utilities, check for hood and grease interceptor needs, and review equipment lists with vendors.",
                        },
                        {
                          step: "2",
                          title: "Design & Permits",
                          desc:
                            "Submit hood and fire suppression plans, health department details, ADA items, and MEP drawings. Track comments and inspection order.",
                        },
                        {
                          step: "3",
                          title: "Construction",
                          desc:
                            "Rough-ins are placed to spec. Walls, tile, and washable surfaces go in. Equipment is set and connected after rough and finish inspections pass.",
                        },
                        {
                          step: "4",
                          title: "Closeout",
                          desc:
                            "Final health, fire, and building inspections are scheduled. Punch items are closed and turnover documents are delivered.",
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
                  Timelines depend on scope, approvals, equipment lead times,
                  and finish selections. A working schedule is shared after
                  permit milestones and is updated as work moves forward.
                </p>
              </ContentSection>

              <Divider />

              {/* Permits & compliance */}
              <ContentSection id="permits" title="Permits, compliance, and coordination">
                <p className="mt-3 text-gray-700">
                  Restaurant work involves health department approvals,
                  ventilation and hood systems with fire suppression, grease
                  management, cleanable finishes, and ADA compliance. We
                  coordinate submittals and inspections and align with related
                  capabilities like{" "}
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
                  </Link>{" "}
                  so design and inspections stay in sync.
                </p>
              </ContentSection>

              <Divider />

              {/* Budget guidance */}
              <ContentSection id="budget" title="Budget guidance">
                <p className="mt-3 text-gray-700">
                  A cost range is prepared after plan and equipment review.
                  Final pricing locks in as finishes and vendor quotes are
                  confirmed. Long-lead items like hoods, fire suppression,
                  walk-ins, and millwork are tracked early to protect the
                  schedule.
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
                    q="How are health and building inspections sequenced?"
                    a="We align health, building, and fire inspections in the correct order so approvals land on time and work does not get undone."
                  />
                  <FAQ
                    q="When can we expect to open?"
                    a="After permitting, you get a realistic schedule with allowances for equipment lead times and final finishes."
                  />
                  <FAQ
                    q="Do you coordinate with kitchen equipment vendors?"
                    a="Yes. We verify rough-ins, power, and clearances against shop drawings, then schedule deliveries so equipment sets without delay."
                  />
                  <FAQ
                    q="Can work happen while the restaurant operates?"
                    a="Small upgrades can be phased with night or off-hour work. Full remodels usually require closure for a safe and faster build."
                  />
                  <FAQ
                    q="Will you help with permits?"
                    a="We prepare submissions, respond to comments, and attend inspections to keep approvals moving."
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
                name: "How are health and building inspections sequenced?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We align health, building, and fire inspections in the correct order so approvals land on time and work does not get undone.",
                },
              },
              {
                "@type": "Question",
                name: "When can we expect to open?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "After permitting, you get a realistic schedule with allowances for equipment lead times and final finishes.",
                },
              },
              {
                "@type": "Question",
                name: "Do you coordinate with kitchen equipment vendors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We verify rough-ins, power, and clearances against shop drawings, then schedule deliveries so equipment sets without delay.",
                },
              },
              {
                "@type": "Question",
                name: "Can work happen while the restaurant operates?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Small upgrades can be phased with night or off-hour work. Full remodels usually require closure for a safe and faster build.",
                },
              },
              {
                "@type": "Question",
                name: "Will you help with permits?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We prepare submissions, respond to comments, and attend inspections to keep approvals moving.",
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
