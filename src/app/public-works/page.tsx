import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleHero from "@/components/SimpleHero";

export const metadata: Metadata = {
  title: "Public Works Construction | RN Construction",
  description: "Spec-driven municipal projects delivered with clear documentation and safety oversight.",
};

export default function Page() {
  return (
    <>
      <Header active="public-works" />

      <main className="overflow-x-hidden bg-white text-[#2C2C2C]">
        <SimpleHero title="Public Works" sub="Reliable delivery for agencies and districts" />

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto prose prose-neutral prose-lg max-w-none">
            <p>
              Welcome, I’m <strong>Russell Nobles</strong>, owner of <strong>RN Construction</strong>. Our team understands the
              paperwork and oversight that public agencies require. We keep submittals and certified payroll organized so
              inspectors and stakeholders stay informed.
            </p>

            <h2>What we deliver</h2>
            <ul>
              <li>Specification-driven execution</li>
              <li>Classrooms and administrative areas</li>
              <li>Minor site and utility work</li>
              <li>Accessibility and safety upgrades</li>
              <li>Responsive punch and warranty service</li>
            </ul>

            <h2>Process and timeline</h2>
            <ol>
              <li><strong>Assessment.</strong> We review bid documents and visit the site to clarify scope.</li>
              <li><strong>Design and permits.</strong> Submittals and RFIs move through the approval chain before work starts.</li>
              <li><strong>Construction.</strong> Crews follow plans closely and document progress for inspectors.</li>
              <li><strong>Closeout.</strong> O&M manuals, as-builts, and warranties are delivered per contract.</li>
            </ol>
            <p className="text-gray-600">
              Timelines vary by jurisdiction, scope, and lead times. We confirm the schedule after design and permitting
              milestones and keep you updated throughout.
            </p>

            <h2>Permits, compliance, and coordination</h2>
            <p>
              Public projects require prevailing wage, certified payroll, submittal logs, safety plans, and often community
              notices. We handle these requirements and connect them to our
              <a href="/capabilities#public-works">Public Works Delivery</a> and
              <a href="/capabilities#grading">Grading</a> capabilities when site work is included.
            </p>

            <h2>Budget guidance</h2>
            <p>
              Most public projects are awarded on a fixed bid. For negotiated work we provide detailed estimates backed by
              subcontractor quotes and historical costs.
            </p>

            <h2>Frequently asked questions</h2>
            <div className="space-y-4">
              <details>
                <summary><strong>What documentation do you expect from subs?</strong></summary>
                <p>We require timely submittals, certified payroll, and daily reports so records are complete.</p>
              </details>
              <details>
                <summary><strong>Can you work around school or public hours?</strong></summary>
                <p>Yes, we adapt schedules and secure areas to keep students and the public safe.</p>
              </details>
              <details>
                <summary><strong>Who approves changes?</strong></summary>
                <p>Change orders follow the agency’s chain of command and are documented before work proceeds.</p>
              </details>
              <details>
                <summary><strong>How do you ensure quality?</strong></summary>
                <p>Pre-install meetings, inspections, and punch lists verify each phase before we move on.</p>
              </details>
              <details>
                <summary><strong>Do you take on small projects?</strong></summary>
                <p>We handle projects of various sizes, from classroom refreshes to small site improvements.</p>
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
                name: "What documentation do you expect from subs?",
                acceptedAnswer: { "@type": "Answer", text: "We require timely submittals, certified payroll, and daily reports so records are complete." },
              },
              {
                "@type": "Question",
                name: "Can you work around school or public hours?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, we adapt schedules and secure areas to keep students and the public safe." },
              },
              {
                "@type": "Question",
                name: "Who approves changes?",
                acceptedAnswer: { "@type": "Answer", text: "Change orders follow the agency’s chain of command and are documented before work proceeds." },
              },
              {
                "@type": "Question",
                name: "How do you ensure quality?",
                acceptedAnswer: { "@type": "Answer", text: "Pre-install meetings, inspections, and punch lists verify each phase before we move on." },
              },
              {
                "@type": "Question",
                name: "Do you take on small projects?",
                acceptedAnswer: { "@type": "Answer", text: "We handle projects of various sizes, from classroom refreshes to small site improvements." },
              },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}
