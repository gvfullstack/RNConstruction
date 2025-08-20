import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";
import SectionIndexChips from "@/components/SectionIndexChips";
import SectionIndexSidebar from "@/components/SectionIndexSidebar";

export const metadata: Metadata = {
  title: "Commercial Construction | RN Construction",
  description:
    "Award-winning commercial construction: tenant buildouts and ground-up shells delivered with careful coordination and minimal downtime.",
};

const SECTIONS = [
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
      <Header active="commercial" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero
          title="Commercial Construction"
          sub="Award-winning buildouts that keep your business moving."
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
                  Commercial overview
                </h1>
                <p className="text-lg leading-relaxed">
                  Commercial projects work best when plans, permits, trades, and business needs
                  move together. The aim is simple: open on time, with a clean handoff and no
                  last-minute surprises. Clear schedules, dependable crews, and early checks on
                  code items keep things steady.
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  Whether it is an office buildout, a retail refresh, or a shell and core,
                  coordination happens in the open. You see the plan, the order of work, and
                  what each inspection will confirm. When risks show up, they are named early and
                  solved before they slow the job.
                </p>
              </section>

              <Divider />

              {/* What we deliver */}
              <ContentSection id="deliverables" title="What we deliver">
                <BulletList
                  items={[
                    "Office, retail, and clinic interiors (walls, ceilings, lighting, finishes)",
                    "Lobby and common-area upgrades with clean phasing and protection",
                    "Shell and core spaces ready for future tenants",
                    "Phased work so active areas can stay open",
                    "Night or weekend shifts to reduce downtime",
                  ]}
                />
              </ContentSection>

              <Divider />

              {/* Process & timeline */}
              <ContentSection id="process" title="Process and timeline">
                <ol className="mt-3 list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Assessment.</strong> Review lease drawings, existing conditions, and
                    business needs. Walk the space and confirm utilities, access, and staging.
                  </li>
                  <li>
                    <strong>Design and permits.</strong> Coordinate drawings and ADA checks,
                    track comments, and schedule inspections in the right order.
                  </li>
                  <li>
                    <strong>Construction.</strong> Sequence trades so work does not clash with
                    daily operations. Keep dust, noise, and pathways managed in occupied buildings.
                  </li>
                  <li>
                    <strong>Closeout.</strong> Finish punch items quickly, deliver O&amp;M docs
                    and warranties, and confirm final sign-offs.
                  </li>
                </ol>
                <p className="mt-3 text-gray-600">
                  Timelines vary by jurisdiction, scope, and lead times. The schedule is confirmed
                  after design and permit milestones and is updated as work moves forward.
                </p>
              </ContentSection>

              <Divider />

              {/* Permits & compliance */}
              <ContentSection id="permits" title="Permits, compliance, and coordination">
                <p className="mt-3 text-gray-700">
                  Commercial work must meet ADA, fire/life safety, and tenant-improvement rules.
                  We coordinate MEP engineers, handle inspections, and keep the paperwork straight.
                  For deeper detail, see{" "}
                  <Link href="/capabilities#design-build" className="text-[#B21F24] font-semibold hover:underline">
                    Design-Build
                  </Link>
                  ,{" "}
                  <Link href="/capabilities#ti" className="text-[#B21F24] font-semibold hover:underline">
                    Tenant Improvements
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
                  Preliminary pricing follows a site walk and plan review. Detailed budgets lock in
                  as finish selections and vendor quotes are confirmed. If scope changes, we explain
                  cost and time effects before work shifts.
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
                    q="How do you minimize downtime for our business?"
                    a="We schedule noisy or disruptive tasks after hours and phase work so active areas can keep operating where possible."
                  />
                  <FAQ
                    q="Can you coordinate mechanical, electrical, and plumbing trades?"
                    a="Yes. We lead MEP coordination, hold clash reviews, and confirm pathways and penetrations before crews mobilize."
                  />
                  <FAQ
                    q="Do you help with permitting?"
                    a="We submit plans, track comments, attend inspections, and keep required paperwork ready so permits do not hold up the schedule."
                  />
                  <FAQ
                    q="Will we see the project schedule?"
                    a="Yes. You get a clear timeline with key milestones, and we update it as work progresses."
                  />
                  <FAQ
                    q="How is jobsite safety handled?"
                    a="Daily checklists, barriers, and safety meetings protect crews and occupants. We post signage and maintain clean paths of travel."
                  />
                </div>

                <p className="mt-6 text-gray-700">
                  For related methods and standards, visit our{" "}
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
                name: "How do you minimize downtime for our business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We schedule noisy or disruptive tasks after hours and phase work so active areas can keep operating where possible.",
                },
              },
              {
                "@type": "Question",
                name: "Can you coordinate mechanical, electrical, and plumbing trades?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We lead MEP coordination, hold clash reviews, and confirm pathways and penetrations before crews mobilize.",
                },
              },
              {
                "@type": "Question",
                name: "Do you help with permitting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We submit plans, track comments, attend inspections, and keep required paperwork ready so permits do not hold up the schedule.",
                },
              },
              {
                "@type": "Question",
                name: "Will we see the project schedule?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. You get a clear timeline with key milestones, and we update it as work progresses.",
                },
              },
              {
                "@type": "Question",
                name: "How is jobsite safety handled?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Daily checklists, barriers, and safety meetings protect crews and occupants. We post signage and maintain clean paths of travel.",
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
