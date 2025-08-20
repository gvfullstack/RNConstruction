import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionIndexChips, { TocSection } from "@/components/SectionIndexChips";
import SectionIndexSidebar from "@/components/SectionIndexSidebar";

export const metadata: Metadata = {
  title: "Disaster Recovery Construction | RN Construction",
  description:
    "Fire-loss rebuilding with steady communication between owners, adjusters, and inspectors. Stabilize, plan, and rebuild with care.",
};

const SECTIONS: TocSection[] = [
  { id: "overview", label: "Overview" },
  { id: "fire", label: "Fire Rebuild" },
  { id: "claims", label: "Insurance & coordination" },
  { id: "budget", label: "Budget guidance" },
  { id: "faq", label: "FAQ" },
];

export default function Page() {
  return (
    <>
      <Header active="disaster-recovery" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        {/* HERO — keep your full-bleed image + CTAs */}
        <section className="relative h-[70vh] sm:h-[75vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/fire-rebuild-hero.png"
            alt="Fire-damaged home and rebuild in progress"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative text-center px-6 py-10 rounded-lg max-w-3xl">
            <h1 className="text-white text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              Disaster Recovery
            </h1>
            <p className="text-white text-lg sm:text-2xl mb-8">
              From first assessment to final inspection, we stabilize, plan, and rebuild with precision and care.
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center">
              <a
                href="tel:6267609310"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full
                           bg-[#B21F24] text-white font-semibold shadow-md shadow-gray-200/50
                           hover:brightness-110 transition whitespace-nowrap"
              >
                Call&nbsp;(626)&nbsp;760-9310
              </a>
              <a
                href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full
                           border border-white text-white font-semibold shadow-md hover:bg-white/10 transition whitespace-nowrap"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Mobile chips (wrap, no side-scroll) */}
        <SectionIndexChips sections={SECTIONS} />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
            {/* Desktop sticky sidebar */}
            <SectionIndexSidebar sections={SECTIONS} />

            {/* Main column */}
            <div className="lg:col-span-9">
              {/* Overview */}
              <section
                id="overview"
                aria-labelledby="overview-heading"
                className="scroll-mt-28 rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm"
              >
                <h2 id="overview-heading" className="text-2xl font-semibold text-[#B21F24]">
                  Overview
                </h2>
                <p className="mt-3 text-lg leading-relaxed">
                  After a loss, the right order of steps matters: make the site safe, document the damage, align the scope,
                  and rebuild in clean phases. Owners, adjusters, and inspectors should have the same picture of the work
                  so decisions are quick and the schedule stays steady.
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  Our team handles notices, inspections, and daily coordination so you are never guessing what comes next.
                  Structural repairs, utilities, and finishes are sequenced to reduce rework and to get families and
                  businesses back on their feet.
                </p>
              </section>

              <Divider />

              {/* Fire Rebuild (your existing cards + before/after) */}
              <section id="fire" className="scroll-mt-28" aria-labelledby="fire-heading">
                <div className="mb-3">
                  <h2 id="fire-heading" className="text-2xl font-semibold text-[#B21F24]">
                    Fire Rebuild
                  </h2>
                  <p className="mt-2 text-gray-700">
                    Fire projects typically begin with safety and scope: shoring where needed, selective demo, and a verified plan.
                    From there, framing, utilities, and finishes are restored in clear phases with regular inspections.
                  </p>
                </div>

                {/* Process cards (kept from your original) */}
                <div className="bg-gray-100 rounded-xl p-6 sm:p-8">
                  <div className="max-w-5xl mx-auto">
                    <h3 className="text-xl font-semibold text-[#B21F24] text-center mb-8">
                      Our Rebuild Process
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      {[
                        {
                          step: "1",
                          title: "Assessment",
                          desc:
                            "Work with adjusters and engineers to evaluate structural integrity, document loss, and plan the rebuild.",
                        },
                        {
                          step: "2",
                          title: "Design & Permits",
                          desc:
                            "Draft plans, secure permits, and coordinate approvals to keep the project moving without surprises.",
                        },
                        {
                          step: "3",
                          title: "Reconstruction",
                          desc:
                            "Rebuild with quality materials and steady sequencing. Inspections are scheduled and tracked.",
                        },
                      ].map(({ step, title, desc }) => (
                        <div key={step} className="bg-white p-6 rounded-lg shadow-md shadow-gray-200/70">
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

                {/* Before / After from your original */}
                <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <Image
                      src="/before-after-fire.png"
                      alt="Before and after rebuild transformation"
                      width={1200}
                      height={800}
                      className="w-full rounded-lg shadow-lg"
                    />
                    <div>
                      {/* <h3 className="text-xl font-semibold text-[#B21F24] mb-3">
                        See the Transformation
                      </h3> */}
                      <p className="text-gray-700 leading-relaxed">
                        We turn devastation into new beginnings. The sequence is clean and predictable: stabilize, plan,
                        rebuild, and close out. Crews protect finished areas as work advances and keep the site safe for
                        inspectors and neighbors.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <Divider />

              {/* Insurance & coordination */}
              <ContentSection id="claims" title="Insurance, documentation, and coordination">
                <p className="mt-3 text-gray-700">
                  Recovery work often includes engineering reports, environmental testing, and detailed claim records.
                  We align scopes with adjusters, track submittals and inspections, and provide photos and daily notes so
                  the file stays current. Owners know what is covered and which items are upgrades before work begins.
                </p>
              </ContentSection>

              <Divider />

              {/* Budget guidance */}
              <ContentSection id="budget" title="Budget guidance">
                <p className="mt-3 text-gray-700">
                  Budgets start with the adjuster&rsquo;s estimate and our own takeoffs. We separate insurance scope from
                  owner selections and document changes with clear schedule and cost effects. Long-lead items are identified
                  early and tracked.
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
                    q="Do you work directly with insurance adjusters?"
                    a="Yes. We review scopes, provide estimates, and document progress so the claim file stays aligned with the work on site."
                  />
                  <FAQ
                    q="What parts of the rebuild are typically covered?"
                    a="Policies usually cover returning the structure to pre-loss condition. Upgrades are listed separately for owner approval."
                  />
                  <FAQ
                    q="How long does a rebuild take?"
                    a="It depends on approvals and lead times. A working schedule is shared after plans and permits are in place and is updated as work moves forward."
                  />
                  <FAQ
                    q="Can you help with temporary housing coordination?"
                    a="We can share resources and prioritize phases so you can return sooner. Safety and critical repairs come first."
                  />
                  <FAQ
                    q="What documentation do you provide for claims?"
                    a="Photos, schedules, daily notes, and cost breakdowns are provided as needed to support the claim record."
                  />
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#B21F24] text-white text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4">Ready to rebuild?</h3>
            <p className="text-lg mb-8">
              Schedule a free consultation to discuss your loss and the best path to a clean, safe rebuild.
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

      {/* JSON-LD FAQ */}
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
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We review scopes, provide estimates, and document progress so the claim file stays aligned with the work on site.",
                },
              },
              {
                "@type": "Question",
                name: "What parts of the rebuild are typically covered?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Policies usually cover returning the structure to pre-loss condition. Upgrades are listed separately for owner approval.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a rebuild take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "It depends on approvals and lead times. A working schedule is shared after plans and permits are in place and is updated as work moves forward.",
                },
              },
              {
                "@type": "Question",
                name: "Can you help with temporary housing coordination?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We can share resources and prioritize phases so you can return sooner. Safety and critical repairs come first.",
                },
              },
              {
                "@type": "Question",
                name: "What documentation do you provide for claims?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Photos, schedules, daily notes, and cost breakdowns are provided as needed to support the claim record.",
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
