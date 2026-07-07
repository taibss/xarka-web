import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { CopperButton } from "../components/CopperButton";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";
import { IconDocument, IconDrawing, IconCamera, IconGrid, IconPeople, IconSignal, IconDatabase, IconLink, IconWrench, IconDecision, IconPrediction, IconAutomation, IconServer } from "../components/Icons";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform | Xarka" },
      {
        name: "description",
        content:
          "A sovereign platform for connecting enterprise knowledge sources to reasoning, prediction, and controlled action.",
      },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  const sources = [
    { icon: IconDocument, name: "Documents" },
    { icon: IconDrawing, name: "Drawings" },
    { icon: IconCamera, name: "CCTV" },
    { icon: IconGrid, name: "ERP" },
    { icon: IconPeople, name: "CRM" },
    { icon: IconSignal, name: "IoT sensors" },
    { icon: IconDatabase, name: "Data lakes" },
    { icon: IconLink, name: "APIs" },
    { icon: IconWrench, name: "Internal tools" },
  ];

  const loop = [
    { stage: "Observe", output: "Reads files, cameras, sensors, systems" },
    { stage: "Understand", output: "Extracts entities, events, objects, relationships" },
    { stage: "Reason", output: "Produces drafts, recommendations, decisions" },
    { stage: "Predict", output: "Forecasts risk, failure, demand, delay" },
    { stage: "Act", output: "Triggers workflows, alerts, dashboards, APIs" },
  ];

  const capabilities = [
    {
      t: "Perception & Vision",
      icon: IconCamera,
      what: "Turn cameras and sensors into live operational awareness.",
      where: "Manufacturing, construction, infrastructure, retail.",
      outputs: "PPE compliance alerts, occupancy dashboards, anomaly detection, progress monitoring.",
      deploy: "Edge inference on existing cameras. No new hardware required.",
    },
    {
      t: "Knowledge & Retrieval",
      icon: IconDocument,
      what: "Turn scattered files into a reasoning workspace.",
      where: "Legal, engineering, compliance, any document-heavy operation.",
      outputs: "Enterprise search, document intelligence, semantic retrieval, knowledge graphs.",
      deploy: "On-prem ingestion pipeline. Supports OCR, PDF, drawings, and APIs.",
    },
    {
      t: "Reasoning & Decision",
      icon: IconDecision,
      what: "Build agentic workflows with auditability and human control.",
      where: "Compliance review, legal drafting, operational decision support.",
      outputs: "Decision support dashboards, multi-agent review, human-in-the-loop approvals.",
      deploy: "Configurable rules engine with LLM backbone. Full audit trail.",
    },
    {
      t: "Prediction & Optimisation",
      icon: IconPrediction,
      what: "Forecast risk, load, failure, and operational outcomes.",
      where: "Manufacturing, energy, infrastructure, supply chain.",
      outputs: "Predictive maintenance alerts, demand forecasts, digital twins, risk models.",
      deploy: "Integrates with ERP, SCADA, IoT. Runs on-prem or sovereign cloud.",
    },
    {
      t: "Automation & Action",
      icon: IconAutomation,
      what: "Move from recommendations to controlled execution.",
      where: "Any workflow that currently requires manual escalation.",
      outputs: "Automated workflows, API-triggered actions, reports, escalations.",
      deploy: "API-first. Connects to existing tools, no rip-and-replace.",
    },
    {
      t: "Enterprise Systems Engineering",
      icon: IconServer,
      what: "Deploy securely inside the environments that matter.",
      where: "Government, defence, regulated enterprises.",
      outputs: "Private deployment, sovereign cloud, ERP/CRM integration, enterprise security.",
      deploy: "On-prem, air-gapped, or sovereign cloud. Full handover available.",
    },
  ];

  const deploymentModels = [
    {
      model: "Inference",
      best: "Product teams",
      ownership: "Shared / client app-owned",
      operations: "Xarka-managed",
    },
    {
      model: "Managed Workflows",
      best: "Business teams",
      ownership: "Workflow-level ownership",
      operations: "Xarka-managed",
    },
    {
      model: "Build · Operate · Transfer",
      best: "Enterprises requiring control",
      ownership: "Client-owned",
      operations: "Transferred after operating phase",
    },
  ];

  const governance = [
    "Access control",
    "Audit logs",
    "Human review",
    "Data residency",
    "Deployment boundaries",
    "Model monitoring",
    "Handover documentation",
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Hero */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="Platform" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              The Xarka Intelligence Layer
            </h1>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              A sovereign platform for connecting enterprise knowledge sources to reasoning,
              prediction, and controlled action.
            </p>
            <div className="mt-8">
              <CopperButton href="/contact">Book a platform walkthrough</CopperButton>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* What it connects to */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="02" label="Integrations" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              What it connects to
            </h2>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Xarka does not replace your existing systems. It reads across them.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-4 md:grid-cols-5">
              {sources.map((s) => (
                <div key={s.name} className="rounded-sm border border-hairline bg-card card-subtle p-6 text-center">
                  <s.icon className="mx-auto h-8 w-8 text-copper" />
                  <div className="mt-3 font-serif text-sm text-ink">{s.name}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* What it does - Operating Loop */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="03" label="Operating loop" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              What it does
            </h2>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              The five-stage loop that turns scattered knowledge into governed action.
            </p>
            <div className="mt-12 space-y-4">
              {loop.map((l, i) => (
                <div key={l.stage} className="flex items-start gap-6 rounded-sm border border-hairline bg-card card-subtle p-6 transition-colors hover:border-copper">
                  <div className="label-mono w-8 text-copper">0{i + 1}</div>
                  <div className="flex-1">
                    <div className="font-serif text-xl text-ink">{l.stage}</div>
                    <p className="mt-1 text-sm text-steel">{l.output}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Capability modules */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="04" label="Capabilities" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Capability modules
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {capabilities.map((c, i) => (
                <article key={c.t} className="rounded-sm border border-l-2 border-l-copper/30 border-hairline bg-card card-subtle p-8 transition-all hover:border-l-copper">
                  <div className="flex items-center gap-3">
                    <c.icon className="h-5 w-5 text-copper" />
                    <div className="label-mono text-copper">0{i + 1}</div>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl text-ink">{c.t}</h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="label-mono">What it does</div>
                      <p className="mt-1 text-sm text-ink">{c.what}</p>
                    </div>
                    <div>
                      <div className="label-mono">Where it applies</div>
                      <p className="mt-1 text-sm text-ink">{c.where}</p>
                    </div>
                    <div>
                      <div className="label-mono">Example outputs</div>
                      <p className="mt-1 text-sm text-ink">{c.outputs}</p>
                    </div>
                    <div>
                      <div className="label-mono">Deployment</div>
                      <p className="mt-1 text-sm text-steel">{c.deploy}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Deployment models comparison */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="05" label="Deployment" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Deployment models
            </h2>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="pb-4 font-mono text-xs uppercase tracking-wider text-steel">Model</th>
                    <th className="pb-4 font-mono text-xs uppercase tracking-wider text-steel">Best for</th>
                    <th className="pb-4 font-mono text-xs uppercase tracking-wider text-steel">Ownership</th>
                    <th className="pb-4 font-mono text-xs uppercase tracking-wider text-steel">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {deploymentModels.map((m) => (
                    <tr key={m.model} className="border-b border-hairline">
                      <td className="py-4 font-serif text-ink">{m.model}</td>
                      <td className="py-4 text-steel">{m.best}</td>
                      <td className="py-4 text-steel">{m.ownership}</td>
                      <td className="py-4 text-steel">{m.operations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Integrations */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="06" label="Integrations" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Built for your existing stack
            </h2>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Xarka integrates with document stores, ERPs, CRMs, databases, CCTV systems,
              cloud storage, internal APIs, and custom line-of-business software.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CopperButton href="/contact">Request integration assessment</CopperButton>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Governance */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="07" label="Governance" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Enterprise-grade governance
            </h2>
            <div className="mt-12 flex flex-wrap gap-3">
              {governance.map((g) => (
                <div key={g} className="rounded-sm border border-hairline bg-card card-subtle px-4 py-3 font-mono text-sm text-ink">
                  {g}
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CopperButton href="/contact">Request deployment architecture</CopperButton>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-ink text-paper">
          <Container className="py-24 md:py-32">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              See how Xarka fits inside your organization.
            </h2>
            <p className="mt-6 max-w-2xl text-paper/70 md:text-lg">
              Book a 30-minute platform walkthrough. We will map your data sources,
              deployment constraints, and the first workflow Xarka can take from knowledge to action.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-paper hover:bg-copper-deep transition-colors"
              >
                Book a briefing <span aria-hidden>→</span>
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
