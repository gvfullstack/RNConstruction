import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";
import SectionIndexChips from "@/components/SectionIndexChips";
import SectionIndexSidebar from "@/components/SectionIndexSidebar";

export const metadata: Metadata = {
  title: "Residential Construction | RN Construction",
  description:
    "Custom remodels, additions, and new homes delivered with clear coordination, clean jobsites, and steady communication.",
};

const SECTIONS = [
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
      <Header active="residential" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero
          title="Residential Construction"
          sub="Remodels, additions, and new builds—planned and delivered with care."
        />

        {/* Mobile chip nav */}
        <SectionIndexChips sections={SECTIONS} />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
            {/* Desktop sticky sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <SectionIndexSidebar sections={SECTIONS} />
            </aside>

            {/* Main content */}
            <div className="lg:col-span-9">
              {/* Overview */}
              <section
                id="overview"
                aria-labelledby="overview-heading"
                className="scroll-mt-28 rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm"
              >
                <h1 id="overview-heading" className="sr-only">
                  Residential overview
                </h1>
                <p className="text-lg leading-relaxed">
                  Home projects work best when plans, permits, and trades move in a clear order. Our team keeps the
                  schedule realistic, the jobsite clean, and the communication steady. You always know what is next.
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  Whether it is a kitchen, a new bath, a room addition, or a ground-up home, we line up decisions early, set
                  inspection milestones, and track long-lead items. That way the build stays calm and your home turns out the
                  way you expected.
                </p>
              </section>

              <Divider />

              {/* What we deliver */}
              <ContentSection id="deliverables" title="What we deliver">
                <BulletList
                  items={[
                    "Custom kitchens and bathrooms (layout, cabinetry, counters, tile, lighting)",
                    "Room additions and ADUs planned for comfort, storage, and energy use",
                    "Whole-home remodels with phased work to reduce disruption",
                    "Ground-up new homes with clear drawings and inspections",
                    "Finish carpentry, trim details, and built-ins that last",
                    "Energy upgrades and Title 24 items coordinated with inspectors",
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
                            "Walk the home, review goals and budget, and note utilities, access, and any safety or staging needs.",
                        },
                        {
                          step: "2",
                          title: "Design & Permits",
                          desc:
                            "Finalize drawings and selections. Handle permit submittals, plan reviews, and the inspection order.",
                        },
                        {
                          step: "3",
                          title: "Construction",
                          desc:
                            "Sequence trades in a logical path. Protect lived-in areas, manage dust and noise, and keep paths clear.",
                        },
                        {
                          step: "4",
                          title: "Closeout",
                          desc:
                            "Complete punch items, share warranty and O&M info, and confirm final sign-offs.",
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
                  Timelines depend on jurisdiction, scope, and lead times. We confirm the schedule after design and permit
                  milestones and update you as work moves forward.
                </p>
              </ContentSection>

              <Divider />

              {/* Permits & coordination */}
              <ContentSection id="permits" title="Permits, compliance, and coordination">
                <p className="mt-3 text-gray-700">
                  Residential work requires local permits, Title 24 energy calcs, and inspections at set points. We manage the
                  paperwork and coordinate with building officials so each phase is approved before the next begins. For
                  related approaches, see{" "}
                  <Link href="/capabilities#design-build" className="text-[#B21F24] font-semibold hover:underline">
                    Design-Build
                  </Link>
                  ,{" "}
                  <Link href="/capabilities#remodels" className="text-[#B21F24] font-semibold hover:underline">
                    Remodels &amp; Additions
                  </Link>
                  , and{" "}
                  <Link href="/capabilities#ground-up" className="text-[#B21F24] font-semibold hover:underline">
                    Ground-Up Construction
                  </Link>
                  .
                </p>
              </ContentSection>

              <Divider />

              {/* Budget guidance */}
              <ContentSection id="budget" title="Budget guidance">
                <p className="mt-3 text-gray-700">
                  We share a realistic range after a site walk and plan review. As selections and quotes come in, we lock the
                  numbers and show how choices affect cost and time. If scope changes, we explain the impact before we shift.
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
                    q="Can we live in the home during construction?"
                    a="For smaller scopes, yes. We phase work, protect lived-in rooms, and keep paths clean. Large remodels are smoother when the house is vacant."
                  />
                  <FAQ
                    q="How do you keep the schedule on track?"
                    a="We set milestones, order long-lead items early, and review progress with you each week. If something shifts, you hear about it right away."
                  />
                  <FAQ
                    q="How are finish selections handled?"
                    a="We plan selections early—cabinets, tile, fixtures, lighting—so ordering does not slow the job. You see where choices affect cost and time."
                  />
                  <FAQ
                    q="What happens if we need a change?"
                    a="We price the change, confirm time impacts, and document it before moving forward so everything stays clear."
                  />
                  <FAQ
                    q="Is there a warranty?"
                    a="Yes. Our workmanship is warranted for one year, and manufacturer warranties are passed through."
                  />
                </div>

                <p className="mt-6 text-gray-700">
                  For a one-page overview of methods and standards, see our{" "}
                  <Link href="/capabilities" className="text-[#B21F24] font-semibold hover:underline">
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
                name: "Can we live in the home during construction?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "For smaller scopes, yes. We phase work, protect lived-in rooms, and keep paths clean. Large remodels are smoother when the house is vacant.",
                },
              },
              {
                "@type": "Question",
                name: "How do you keep the schedule on track?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We set milestones, order long-lead items early, and review progress each week. If something shifts, you hear about it right away.",
                },
              },
              {
                "@type": "Question",
                name: "How are finish selections handled?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We plan selections early—cabinets, tile, fixtures, lighting—so ordering does not slow the job. You see where choices affect cost and time.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if we need a change?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We price the change, confirm time impacts, and document it before moving forward so everything stays clear.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a warranty?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Our workmanship is warranted for one year, and manufacturer warranties are passed through.",
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
        <h2 id={`${id}-heading`} className="text-2xl font-semibold text-[#B21F24]">
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
