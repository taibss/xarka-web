import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../../components/Container";
import { SectionEyebrow } from "../../components/SectionEyebrow";
import { CopperButton } from "../../components/CopperButton";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ScrollReveal } from "../../components/ScrollReveal";

export const Route = createFileRoute("/solutions/energy")({
  head: () => ({
    meta: [
      { title: "Energy & Defence | Xarka Solutions" },
      {
        name: "description",
        content:
          "Sovereign intelligence for sensitive environments. AI systems that run entirely within your control for energy, hydrocarbon, and defence.",
      },
    ],
  }),
  component: EnergyPage,
});

function EnergyPage() {
  const useCases = [
    { t: "Sovereign intelligence systems", d: "Air-gapped, self-hosted AI for sensitive operating environments." },
    { t: "Private model deployment", d: "Run inference and reasoning on your infrastructure with no external calls." },
    { t: "Asset monitoring", d: "Real-time monitoring of critical energy infrastructure — pipelines, grids, refineries." },
    { t: "Incident response", d: "Automated detection and escalation of safety and operational incidents." },
    { t: "Compliance automation", d: "Automated regulatory reporting and audit trail generation for defence and energy sectors." },
  ];

  const outcomes = [
    "Full data sovereignty",
    "No external data calls",
    "Customer-owned IP",
    "Audit-ready compliance",
    "Operational resilience",
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="Energy & Defence" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Sovereign intelligence for sensitive environments.
            </h1>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Energy, hydrocarbon, and defence organisations cannot send sensitive data to external
              models, foreign clouds, or uncontrolled third-party APIs. Xarka builds AI systems that
              run entirely within your control.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CopperButton href="/contact">Discuss secure deployment</CopperButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Energy", "Hydrocarbon", "Defence", "Sovereign"].map((tag) => (
                <span key={tag} className="label-mono rounded-sm border border-hairline bg-paper-soft px-2.5 py-1.5 text-steel">
                  {tag}
                </span>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="02" label="Use cases" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              What Xarka builds for sovereign environments.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div key={uc.t} className="rounded-sm border border-hairline bg-card card-subtle p-8">
                  <h3 className="font-serif text-xl text-ink">{uc.t}</h3>
                  <p className="mt-3 text-sm text-steel">{uc.d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="03" label="Outcomes" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              What sovereignty means.
            </h2>
            <div className="mt-12 flex flex-wrap gap-3">
              {outcomes.map((o) => (
                <div key={o} className="rounded-sm border border-hairline bg-card card-subtle px-6 py-4 font-serif text-lg text-ink">
                  {o}
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="04" label="Deployment" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Air-gapped. Self-hosted. Your rules.
            </h2>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Xarka deploys fully air-gapped on your infrastructure. No external calls. No data
              leaving your network. Models, workflows, and IP remain in your control.
            </p>
            <div className="mt-8">
              <a
                href="/sovereign-ai"
                className="label-mono inline-flex items-center gap-2 text-copper hover:text-copper-deep"
              >
                Learn more about sovereign deployment <span aria-hidden>→</span>
              </a>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        <ScrollReveal>
        <section className="border-b border-hairline bg-ink text-paper">
          <Container className="py-24 md:py-32">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Ready to discuss secure deployment?
            </h2>
            <p className="mt-6 max-w-2xl text-paper/70 md:text-lg">
              Book a capability briefing. We will map your security requirements, deployment
              constraints, and the first workflow Xarka can deploy in your environment.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CopperButton href="/contact">Request a capability briefing</CopperButton>
              <a
                href="/sovereign-ai"
                className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3.5 text-sm font-medium text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                See sovereign AI <span aria-hidden>→</span>
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
