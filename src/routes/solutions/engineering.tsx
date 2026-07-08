import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../../components/Container";
import { SectionEyebrow } from "../../components/SectionEyebrow";
import { CopperButton } from "../../components/CopperButton";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ScrollReveal } from "../../components/ScrollReveal";

export const Route = createFileRoute("/solutions/engineering")({
  head: () => ({
    meta: [
      { title: "Engineering & ER&D | Xarka Solutions" },
      {
        name: "description",
        content:
          "Document intelligence for engineering and ER&D. Make drawings, P&IDs, and specifications instantly searchable and reasoning-ready.",
      },
    ],
  }),
  component: EngineeringPage,
});

function EngineeringPage() {
  const useCases = [
    {
      t: "Drawing intelligence",
      d: "Search, retrieve, and reason over P&IDs, schematics, and engineering drawings.",
    },
    {
      t: "Specification search",
      d: "Instant lookup of material specs, tolerances, and design standards across projects.",
    },
    {
      t: "Test report analysis",
      d: "Automated extraction of key findings, non-conformances, and trends from test data.",
    },
    {
      t: "Design history review",
      d: "Trace design decisions, revisions, and approvals across the full project lifecycle.",
    },
    {
      t: "Compliance verification",
      d: "Cross-check designs and reports against regulatory standards and internal requirements.",
    },
  ];

  const outcomes = [
    "Faster design review",
    "Fewer compliance gaps",
    "Better knowledge reuse",
    "Reduced rework",
    "Improved traceability",
  ];

  return (
    <div className="min-h-screen bg-[#060d15] text-white">
      <Nav />
      <main>
        <ScrollReveal>
          <section className="border-b border-white/5">
            <Container className="py-16 md:py-24">
              <SectionEyebrow index="01" label="Engineering" />
              <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
                Document intelligence for engineering and ER&D.
              </h1>
              <p className="mt-6 max-w-2xl text-white/50 md:text-lg">
                Engineering teams work with drawings, P&IDs, specifications, test reports, and
                design histories that span years and thousands of documents. Xarka makes them
                instantly searchable and reasoning-ready.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CopperButton href="/contact">Book industry briefing</CopperButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["ER&D", "Design", "Testing", "Capital projects"].map((tag) => (
                  <span
                    key={tag}
                    className="label-mono rounded-sm border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-white/[0.06] bg-white/[0.02]">
            <Container className="py-20 md:py-28">
              <SectionEyebrow index="02" label="Use cases" />
              <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
                What Xarka builds for engineering.
              </h2>
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {useCases.map((uc) => (
                  <div
                    key={uc.t}
                    className="rounded-sm border border-white/[0.06] bg-white/[0.03] card-subtle p-8 card-hover"
                  >
                    <h3 className="font-serif text-xl text-white">{uc.t}</h3>
                    <p className="mt-3 text-sm text-white/50">{uc.d}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-white/[0.06]">
            <Container className="py-20 md:py-28">
              <SectionEyebrow index="03" label="Outcomes" />
              <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
                What improves.
              </h2>
              <div className="mt-12 flex flex-wrap gap-3">
                {outcomes.map((o) => (
                  <div
                    key={o}
                    className="rounded-sm border border-white/[0.06] bg-white/[0.03] card-subtle px-6 py-4 font-serif text-lg text-white card-hover"
                  >
                    {o}
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-white/[0.06] bg-white/[0.02]">
            <Container className="py-20 md:py-28">
              <SectionEyebrow index="04" label="Deployment" />
              <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
                Your data, your servers.
              </h2>
              <p className="mt-6 max-w-2xl text-white/50 md:text-lg">
                Engineering documents are proprietary and sensitive. Xarka deploys on-prem or in
                your private cloud — your design data never leaves your infrastructure.
              </p>
            </Container>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-white/[0.06] bg-[#0a1628] text-white">
            <Container className="py-24 md:py-32">
              <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Ready to make your engineering documents intelligent?
              </h2>
              <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
                Book a 30-minute briefing. We will map your data sources, deployment constraints,
                and the first workflow Xarka can take from knowledge to action.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CopperButton href="/contact">Book industry briefing</CopperButton>
                <a
                  href="/platform"
                  className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3.5 text-sm font-medium text-white hover:bg-paper hover:text-white transition-colors"
                >
                  See the platform <span aria-hidden>→</span>
                </a>
              </div>
            </Container>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
