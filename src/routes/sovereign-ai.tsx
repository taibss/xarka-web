import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { CopperButton } from "../components/CopperButton";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";
import { IconSignal, IconServer, IconLock } from "../components/Icons";

export const Route = createFileRoute("/sovereign-ai")({
  head: () => ({
    meta: [
      { title: "Sovereign AI | Xarka" },
      {
        name: "description",
        content:
          "AI infrastructure you can own, audit, and control. Sovereign AI systems for organizations that cannot send sensitive data to external models.",
      },
    ],
  }),
  component: SovereignAIPage,
});

function SovereignAIPage() {
  const reasons = [
    "Regulated data (DPDP, GDPR, sector-specific)",
    "Government and public-sector information",
    "Legal files and matter intelligence",
    "Industrial telemetry and equipment data",
    "Proprietary engineering documents",
    "Defence-adjacent workflows",
    "Confidential enterprise knowledge",
  ];

  const deploymentModes = [
    {
      t: "Cloud",
      d: "Managed, elastic, integrated with your stack. Xarka handles infrastructure while you retain data control.",
      icon: IconSignal,
    },
    {
      t: "On-premise",
      d: "Runs inside your network with private data handling. Your servers, your policies, your audit trails.",
      icon: IconServer,
    },
    {
      t: "Air-gapped",
      d: "Fully isolated deployment for the most sensitive environments. No external calls, no data leaving your facility.",
      icon: IconLock,
    },
  ];

  const governance = [
    "RBAC (role-based access control)",
    "Audit trails",
    "Explainability",
    "Human review",
    "Data residency",
    "No external calls",
    "Model monitoring",
    "Incident logs",
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Hero */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="Sovereign AI" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              AI infrastructure you can own, audit, and control.
            </h1>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Xarka builds sovereign AI systems for organizations that cannot send sensitive data
              to external models, foreign clouds, or uncontrolled third-party APIs.
            </p>
            <div className="mt-8">
              <CopperButton href="/contact">Discuss secure deployment</CopperButton>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Why sovereignty matters */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="02" label="Why sovereignty" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Why sovereignty matters
            </h2>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Some data cannot leave your network. Some decisions cannot be outsourced.
              Some environments cannot be connected to the internet.
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {reasons.map((r) => (
                 <div key={r} className="flex items-start gap-3 rounded-sm border border-hairline bg-card card-subtle p-5 card-hover">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />
                  <span className="text-sm text-ink">{r}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Deployment modes */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="03" label="Deployment" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Three deployment modes
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {deploymentModes.map((m) => {
                const isFeatured = m.t === "Air-gapped";
                return (
                   <div
                     key={m.t}
                     className={`rounded-sm p-8 card-hover ${
                       isFeatured
                         ? "border border-copper/30 bg-ink text-paper md:col-span-2 md:p-10 hover:border-copper"
                         : "border border-hairline bg-card card-subtle"
                     }`}
                   >
                     <m.icon className={`card-icon ${isFeatured ? "h-10 w-10" : "h-8 w-8"} text-copper`} />
                    <h3 className={`mt-4 font-serif ${isFeatured ? "text-3xl" : "text-2xl text-ink"}`}>{m.t}</h3>
                    <p className={`mt-3 text-sm ${isFeatured ? "text-paper/70 lg:text-base" : "text-steel"}`}>{m.d}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* BOT ownership model */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-ink text-paper">
          <Container className="py-20 md:py-28">
            <div className="label-mono flex items-center gap-3 text-copper">
              <span>04</span>
              <span className="h-px w-8 bg-copper/50" />
              <span className="text-paper/60">Ownership model</span>
            </div>
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
              Build · Operate · Transfer
            </h2>
            <p className="mt-6 max-w-2xl text-paper/70 md:text-lg">
              With Build · Operate · Transfer, your organization can own the models, datasets,
              workflows, infrastructure, and runbooks after handover.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
               <div className="rounded-sm border border-paper/15 p-6 card-hover">
                 <div className="label-mono text-copper">Build</div>
                <p className="mt-2 text-sm text-paper/70">Architecture · Models · Workflows · Integrations</p>
              </div>
               <div className="rounded-sm border border-paper/15 p-6 card-hover">
                 <div className="label-mono text-copper">Operate</div>
                <p className="mt-2 text-sm text-paper/70">Monitoring · Drift checks · Retraining · Support</p>
              </div>
               <div className="rounded-sm border border-paper/15 p-6 card-hover">
                 <div className="label-mono text-copper">Transfer</div>
                <p className="mt-2 text-sm text-paper/70">Runbooks · Workshops · IP assignment · Client ownership</p>
              </div>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Governance controls */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="05" label="Governance" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Governance controls
            </h2>
            <div className="mt-12 flex flex-wrap gap-3">
              {governance.map((g) => (
                 <div key={g} className="rounded-sm border border-hairline bg-card card-subtle px-5 py-3 font-mono text-sm text-ink card-hover">
                  {g}
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-ink text-paper">
          <Container className="py-24 md:py-32">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Ready to own your AI infrastructure?
            </h2>
            <p className="mt-6 max-w-2xl text-paper/70 md:text-lg">
              Request a security and deployment brief. We will walk through your requirements,
              compliance constraints, and the deployment model that fits your environment.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-paper hover:bg-copper-deep transition-colors"
              >
                Request security brief <span aria-hidden>→</span>
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
