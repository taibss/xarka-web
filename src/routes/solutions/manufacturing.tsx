import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../../components/Container";
import { SectionEyebrow } from "../../components/SectionEyebrow";
import { CopperButton } from "../../components/CopperButton";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ScrollReveal } from "../../components/ScrollReveal";

export const Route = createFileRoute("/solutions/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing & Plants | Xarka Solutions" },
      {
        name: "description",
        content:
          "Production intelligence for manufacturing and plants. Turn machine data, camera feeds, and maintenance logs into real-time decisions.",
      },
    ],
  }),
  component: ManufacturingPage,
});

function ManufacturingPage() {
  const useCases = [
    { t: "Vision QA", d: "Automated defect detection on production lines using existing camera infrastructure." },
    { t: "Predictive maintenance", d: "Forecast equipment failure before it happens — reduce unplanned downtime." },
    { t: "Equipment health", d: "Real-time monitoring of machine performance, vibration, temperature, and wear." },
    { t: "Shift intelligence", d: "Track output, efficiency, and bottlenecks across shifts and lines." },
    { t: "Safety compliance", d: "PPE detection, zone monitoring, and automated safety incident reporting." },
    { t: "Maintenance planning", d: "AI-optimised maintenance schedules based on actual equipment condition, not calendar intervals." },
  ];

  const outcomes = [
    "Less downtime",
    "Lower maintenance cost",
    "Better throughput",
    "Improved quality",
    "Fewer safety incidents",
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Hero */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="Manufacturing" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Production intelligence for manufacturing and plants.
            </h1>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Plant teams already generate machine data, camera feeds, maintenance logs, quality
              reports, and ERP records. The challenge is turning them into real-time decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CopperButton href="/contact">Book industry briefing</CopperButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Automotive", "Process manufacturing", "Discrete manufacturing", "Heavy industry"].map((tag) => (
                <span key={tag} className="label-mono rounded-sm border border-hairline bg-paper-soft px-2.5 py-1.5 text-steel">
                  {tag}
                </span>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Use cases */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="02" label="Use cases" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              What Xarka builds for manufacturing.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                 <div key={uc.t} className="rounded-sm border border-hairline bg-card card-subtle p-8 card-hover">
                   <h3 className="font-serif text-xl text-ink">{uc.t}</h3>
                  <p className="mt-3 text-sm text-steel">{uc.d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Outcomes */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="03" label="Outcomes" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              What improves.
            </h2>
            <div className="mt-12 flex flex-wrap gap-3">
              {outcomes.map((o) => (
                 <div key={o} className="rounded-sm border border-hairline bg-card card-subtle px-6 py-4 font-serif text-lg text-ink card-hover">
                  {o}
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Deployment */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="04" label="Deployment" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Runs where your data lives.
            </h2>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Xarka deploys on-prem, in your sovereign cloud, or air-gapped — depending on your
              security requirements. Edge inference on existing cameras. No new hardware required.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-ink text-paper">
          <Container className="py-24 md:py-32">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Ready to see Xarka in your plant?
            </h2>
            <p className="mt-6 max-w-2xl text-paper/70 md:text-lg">
              Book a 30-minute briefing. We will map your data sources, deployment constraints,
              and the first workflow Xarka can take from knowledge to action.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CopperButton href="/contact">Book industry briefing</CopperButton>
              <a
                href="/platform"
                className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3.5 text-sm font-medium text-paper hover:bg-paper hover:text-ink transition-colors"
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
