import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../../components/Container";
import { SectionEyebrow } from "../../components/SectionEyebrow";
import { CopperButton } from "../../components/CopperButton";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ScrollReveal } from "../../components/ScrollReveal";

export const Route = createFileRoute("/solutions/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure & Public Sector | Xarka Solutions" },
      {
        name: "description",
        content:
          "Sovereign intelligence for public infrastructure. Xarka turns CCTV feeds, sensor networks, and maintenance logs into actionable intelligence.",
      },
    ],
  }),
  component: InfrastructurePage,
});

function InfrastructurePage() {
  const useCases = [
    { t: "Traffic & road monitoring", d: "Real-time traffic flow analysis, incident detection, and congestion prediction." },
    { t: "CCTV analytics", d: "Intelligent surveillance — anomaly detection, crowd monitoring, perimeter security." },
    { t: "Asset maintenance", d: "Predictive maintenance for bridges, roads, water systems, and public utilities." },
    { t: "Incident detection", d: "Automated detection of accidents, hazards, and unusual activity from live feeds." },
    { t: "Public grievance workflows", d: "AI-triaged citizen complaint routing, status tracking, and resolution tracking." },
    { t: "Project progress monitoring", d: "Track infrastructure project milestones against timelines using site data." },
    { t: "Document automation", d: "Automate generation of compliance reports, project updates, and regulatory filings." },
  ];

  const outcomes = [
    "Faster incident response",
    "Lower maintenance costs",
    "Better citizen services",
    "Reduced project delays",
    "Improved safety",
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Hero */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="Infrastructure" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Sovereign intelligence for public infrastructure.
            </h1>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Public infrastructure generates massive data — CCTV feeds, sensor networks, maintenance
              logs, citizen requests, and project reports. Xarka turns this into actionable intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CopperButton href="/contact">Book industry briefing</CopperButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Smart cities", "Utilities", "Government", "Public works"].map((tag) => (
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
              What Xarka builds for infrastructure.
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
              Sovereign by default.
            </h2>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Government and public-sector infrastructure demands sovereign deployment. Xarka
              runs on-prem or in air-gapped environments — your data never leaves your control.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-ink text-paper">
          <Container className="py-24 md:py-32">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Ready to discuss infrastructure intelligence?
            </h2>
            <p className="mt-6 max-w-2xl text-paper/70 md:text-lg">
              Book a capability briefing. We will map your data sources, deployment constraints,
              and the first workflow Xarka can take from knowledge to action.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CopperButton href="/contact">Request a capability briefing</CopperButton>
              <a
                href="/sovereign-ai"
                className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3.5 text-sm font-medium text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                See sovereign deployment <span aria-hidden>→</span>
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
