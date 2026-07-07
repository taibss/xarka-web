import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { CopperButton } from "../components/CopperButton";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ScrollReveal } from "../components/ScrollReveal";
import {
  IconDocument,
  IconDrawing,
  IconCamera,
  IconDatabase,
  IconSensor,
  IconWorkflow,
  IconAlert,
  IconDraft,
  IconPrediction,
  IconDecision,
  IconDashboard,
  IconAutomation,
  IconCheck,
  IconServer,
  IconScale,
  IconBuilding,
  IconFactory,
  IconWrench,
  IconZap,
} from "../components/Icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xarka | The Intelligence Layer for Regulated Organizations" },
      {
        name: "description",
        content:
          "Xarka connects documents, cameras, sensors, ERP systems, and workflows into sovereign AI systems that observe, reason, predict, and act — with humans in control.",
      },
    ],
  }),
  component: Home,
});

/* -------------------------------- Hero ---------------------------------- */

const sourceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Documents: IconDocument,
  Drawings: IconDrawing,
  CCTV: IconCamera,
  ERP: IconDatabase,
  Sensors: IconSensor,
  Workflows: IconWorkflow,
};

const outputIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Alerts: IconAlert,
  Drafts: IconDraft,
  Predictions: IconPrediction,
  Decisions: IconDecision,
  Dashboards: IconDashboard,
  Automation: IconAutomation,
};

function HeroDiagram() {
  const sources = ["Documents", "Drawings", "CCTV", "ERP", "Sensors", "Workflows"];
  const outputs = ["Alerts", "Drafts", "Predictions", "Decisions", "Dashboards", "Automation"];
  return (
    <div className="relative rounded-sm border border-hairline bg-card card-bold p-6 md:p-8">
      <div className="label-mono mb-6 flex items-center justify-between">
        <span>Architecture</span>
        <span className="text-copper animate-breathe">Live</span>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
        <ul className="space-y-2">
          {sources.map((s) => {
            const Icon = sourceIcons[s];
            return (
              <li
                key={s}
                className="flex items-center justify-between rounded-sm border border-hairline bg-paper px-3 py-2 text-xs md:text-sm"
              >
                <span className="flex items-center gap-2 text-ink">
                  {Icon && <Icon className="h-3.5 w-3.5 text-copper" />}
                  {s}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="relative flex flex-col items-center justify-center self-stretch">
          <div className="relative w-[130px] rounded-sm border border-copper bg-ink px-3 py-4 text-center text-paper md:w-[160px]">
            <div className="label-mono text-copper">Layer</div>
            <div className="mt-1 font-serif text-base md:text-lg leading-tight">
              Xarka Intelligence
            </div>
            <div className="mt-3 flex justify-center gap-1">
              <span className="h-1 w-1 animate-breathe rounded-full bg-copper" />
              <span className="h-1 w-1 animate-breathe rounded-full bg-copper [animation-delay:1s]" />
              <span className="h-1 w-1 animate-breathe rounded-full bg-copper [animation-delay:2s]" />
            </div>
          </div>
        </div>
        <ul className="space-y-2">
          {outputs.map((s) => {
            const Icon = outputIcons[s];
            return (
              <li
                key={s}
                className="flex items-center justify-between rounded-sm border border-hairline bg-paper px-3 py-2 text-xs md:text-sm"
              >
                <span className="flex items-center gap-2 text-ink">
                  {Icon && <Icon className="h-3.5 w-3.5 text-ink/60" />}
                  {s}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-6 grid grid-cols-5 gap-2 border-t border-hairline pt-4 label-mono">
        <span>Observe</span>
        <span className="text-center">Understand</span>
        <span className="text-center">Reason</span>
        <span className="text-center">Predict</span>
        <span className="text-right">Act</span>
      </div>
    </div>
  );
}

function Hero() {
  const chips = ["On-premise", "Air-gapped", "Customer-owned IP", "Audit-ready", "DPDP aligned", "Human-in-the-loop"];
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <SectionEyebrow index="00" label="Xarka" />
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            The intelligence layer for regulated organizations.
          </h1>
          <p className="mt-6 max-w-xl text-base text-steel md:text-lg">
            Xarka connects documents, cameras, sensors, ERP systems, and workflows into sovereign AI
            systems that observe, reason, predict, and act — with humans in control.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CopperButton href="/contact">Book a 30-minute briefing</CopperButton>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li
                key={c}
                className="label-mono flex items-center gap-1.5 rounded-sm border border-hairline bg-paper-soft px-2.5 py-1.5 text-steel"
              >
                <IconCheck className="h-3 w-3 text-copper" />
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-hairline pt-6">
            <div>
              <AnimatedCounter target={10000} suffix="+" />
              <div className="label-mono mt-1">Active lawyers</div>
            </div>
            <div>
              <div className="tabular font-serif text-3xl text-ink md:text-4xl">9L+</div>
              <div className="label-mono mt-1">Judgments</div>
            </div>
            <div>
              <div className="tabular font-serif text-3xl text-ink md:text-4xl">Feb '26</div>
              <div className="label-mono mt-1">LawgicHub live</div>
            </div>
          </div>
        </div>
        <div className="md:pl-6">
          <HeroDiagram />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- Problem -------------------------------- */

function Problem() {
  const cards = [
    { t: "Documents", d: "Contracts, PDFs, reports, judgments, specifications." },
    { t: "Cameras", d: "CCTV, site feeds, quality inspection, safety monitoring." },
    { t: "Systems", d: "ERP, CRM, case management, asset management." },
    { t: "Sensors", d: "IoT, equipment telemetry, environmental signals." },
    { t: "Workflows", d: "Approvals, reports, alerts, audits, handovers." },
  ];
  return (
    <section className="border-b border-hairline bg-paper-soft">
      <Container className="py-20 md:py-28">
        <SectionEyebrow index="01" label="Problem" />
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          Your organization already has the knowledge. It just cannot act on it.
        </h2>
        <p className="mt-6 max-w-2xl text-steel md:text-lg">
          Critical information sits across files, cameras, machines, databases, emails, drawings,
          and legacy software. Teams spend hours searching, verifying, escalating, and manually
          acting on what the organization already knows.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline md:grid-cols-5">
          {cards.map((c, i) => (
            <div key={c.t} className="bg-card p-6">
              <div className="label-mono text-copper">0{i + 1}</div>
              <div className="mt-3 font-serif text-xl text-ink">{c.t}</div>
              <p className="mt-2 text-sm text-steel">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl font-serif text-xl italic text-ink md:text-2xl">
          Xarka connects these sources into one intelligence layer.
        </p>
      </Container>
    </section>
  );
}

/* ------------------------------- Platform ------------------------------- */

function PlatformStack() {
  const layers = [
    {
      name: "Data Sources",
      items: "Documents · CCTV · ERP · Sensors · Drawings · APIs",
    },
    {
      name: "Understanding",
      items: "OCR · Vision · Retrieval · Knowledge Graphs · Semantic Search",
    },
    {
      name: "Reasoning",
      items: "LLMs · Agents · Rules · Decision Support · Human Review",
    },
    {
      name: "Prediction",
      items: "Forecasting · Optimization · Digital Twins · Risk Models",
    },
    {
      name: "Action",
      items: "Dashboards · Alerts · Reports · Workflows · APIs · Automation",
    },
  ];
  return (
    <div className="rounded-sm border border-hairline bg-card p-6 md:p-10">
      <div className="space-y-3">
        {layers.map((l, i) => (
          <div key={l.name} className="group">
            <div className="grid grid-cols-[1fr_2fr] items-center gap-4 rounded-sm border border-hairline bg-paper px-4 py-4 transition-colors hover:border-copper md:gap-8 md:px-6">
              <div className="flex items-center gap-3">
                <span className="label-mono w-6 text-copper">0{i + 1}</span>
                <span className="font-serif text-lg text-ink md:text-xl">{l.name}</span>
              </div>
              <div className="text-xs text-steel md:text-sm font-mono">{l.items}</div>
            </div>
            {i < layers.length - 1 && (
              <div className="my-1 flex justify-start pl-6">
                <span className="text-copper" aria-hidden>↓</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Platform() {
  return (
    <section id="platform" className="border-b border-hairline">
      <Container className="py-20 md:py-28">
        <SectionEyebrow index="02" label="Platform" />
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          Xarka turns scattered knowledge into governed action.
        </h2>
        <p className="mt-6 max-w-2xl text-steel md:text-lg">
          A five-layer architecture from raw signal to controlled execution — deployable on your
          servers, in your sovereign cloud, or fully air-gapped.
        </p>
        <div className="mt-12">
          <PlatformStack />
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- Operating Loop ----------------------------- */

function OperatingLoop() {
  const steps = [
    { n: "01", t: "Observe", d: "Read documents, drawings, cameras, sensors, and enterprise systems." },
    { n: "02", t: "Understand", d: "Convert raw inputs into structured, searchable, contextual meaning." },
    { n: "03", t: "Reason", d: "Use domain logic, agents, rules, and human review to produce decisions." },
    { n: "04", t: "Predict", d: "Forecast failures, risks, delays, demand, and operational outcomes." },
    { n: "05", t: "Act", d: "Trigger workflows, alerts, drafts, dashboards, reports, or integrations." },
  ];
  return (
    <section className="border-b border-hairline bg-ink text-paper">
      <Container className="py-20 md:py-28">
        <div className="label-mono flex items-center gap-3 text-copper">
          <span>03</span>
          <span className="h-px w-8 bg-copper/50" />
          <span className="text-paper/60">Operating loop</span>
        </div>
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
          One loop. Configured for every high-stakes workflow.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 120}>
              <div
                className="relative h-full rounded-sm border border-paper/15 bg-ink p-5 transition-colors hover:border-copper"
              >
                <div className="label-mono text-copper">{s.n}</div>
                <div className="mt-3 font-serif text-xl">{s.t}</div>
                <p className="mt-2 text-sm text-paper/70">{s.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------- Capabilities ------------------------------ */

const capabilityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Perception & Vision": IconCamera,
  "Knowledge & Retrieval": IconDocument,
  "Reasoning & Decision": IconDecision,
  "Prediction & Optimisation": IconPrediction,
  "Automation & Action": IconAutomation,
  "Enterprise Systems Engineering": IconServer,
};

function Capabilities() {
  const items = [
    {
      t: "Perception & Vision",
      s: "Turn cameras and sensors into live operational awareness.",
      u: ["PPE compliance", "Occupancy & flow", "Site safety", "Anomaly detection", "Progress monitoring"],
    },
    {
      t: "Knowledge & Retrieval",
      s: "Turn scattered files into a reasoning workspace.",
      u: ["Enterprise search", "Document intelligence", "OCR", "Semantic retrieval", "Knowledge graphs", "Legal and technical corpora"],
    },
    {
      t: "Reasoning & Decision",
      s: "Build agentic workflows with auditability and human control.",
      u: ["Decision support", "Command dashboards", "Multi-agent review", "Human-in-the-loop approvals", "Compliance reasoning"],
    },
    {
      t: "Prediction & Optimisation",
      s: "Forecast risk, load, failure, and operational outcomes.",
      u: ["Predictive maintenance", "Demand forecasting", "Digital twins", "Industrial analytics", "Plant optimization"],
    },
    {
      t: "Automation & Action",
      s: "Move from recommendations to controlled execution.",
      u: ["Workflow automation", "API-triggered actions", "Reporting", "Escalation", "Robotics integration"],
    },
    {
      t: "Enterprise Systems Engineering",
      s: "Deploy securely inside the environments that matter.",
      u: ["On-prem", "Sovereign cloud", "ERP/CRM integration", "Enterprise security", "Private model deployment"],
    },
  ];
  return (
    <section className="border-b border-hairline">
      <Container className="py-20 md:py-28">
        <SectionEyebrow index="04" label="Capabilities" />
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          Six capabilities. One production stack.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = capabilityIcons[it.t];
            const isHero = it.t === "Reasoning & Decision";
            return (
              <article
                key={it.t}
                className={`group flex flex-col justify-between rounded-sm p-8 transition-all ${
                  isHero
                    ? "border border-copper/30 bg-ink text-paper md:-order-1 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-12 hover:border-copper"
                    : "border border-hairline border-l-2 border-l-copper/30 bg-card card-subtle hover:border-l-copper hover:bg-paper-soft"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    {Icon && <Icon className={`${isHero ? "h-6 w-6" : "h-5 w-5"} text-copper`} />}
                    <div className="label-mono text-copper">0{i + 1}</div>
                  </div>
                  <h3 className={`mt-4 font-serif ${isHero ? "text-3xl lg:text-4xl" : "text-2xl text-ink"}`}>{it.t}</h3>
                  <p className={`mt-2 ${isHero ? "text-paper/70 lg:text-base" : "text-sm text-steel"}`}>{it.s}</p>
                  <ul className={`mt-5 space-y-1.5 ${isHero ? "lg:mt-8 lg:space-y-2" : ""}`}>
                    {it.u.map((x) => (
                      <li key={x} className={`flex items-start gap-2 text-sm ${isHero ? "text-paper/90" : "text-ink"}`}>
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/contact"
                  className={`label-mono mt-8 inline-flex items-center gap-2 text-copper transition-colors ${isHero ? "hover:text-copper-soft" : "hover:text-copper-deep"}`}
                >
                  Explore capability <span aria-hidden>→</span>
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- Deployment models -------------------------- */

function Deployment() {
  const models = [
    {
      tag: "Inference",
      t: "Inference",
      best: "Teams building their own products on Xarka's model stack.",
      body:
        "Secure API access to Xarka's proprietary model stack for production applications requiring low-latency, private, and jurisdiction-aware inference.",
      cta: "Talk to us about API access",
    },
    {
      tag: "PaaS",
      t: "Managed AI Workflows",
      best: "Teams that want business outcomes without managing AI operations.",
      body:
        "Xarka designs, deploys, monitors, and optimizes agentic workflows for defined business processes — legal drafting, compliance review, site safety, document search, equipment health.",
      cta: "Discuss a managed workflow",
    },
    {
      tag: "BOT",
      t: "Build · Operate · Transfer",
      best: "Enterprises and governments that want long-term ownership of their AI capability.",
      body:
        "Xarka builds the system, operates it in production, and transfers full ownership — runbooks, workshops, IP assignment, and client-owned deployment.",
      cta: "Plan a BOT deployment",
    },
  ];
  return (
    <section className="border-b border-hairline bg-paper-soft">
      <Container className="py-20 md:py-28">
        <SectionEyebrow index="05" label="How to deploy" />
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          Three ways to deploy Xarka.
        </h2>
        <p className="mt-4 max-w-2xl text-steel md:text-lg">
          Increasing depth of engagement — from API access to full ownership.
        </p>
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {models.map((m, i) => (
            <div key={m.tag} className="contents">
              <div className="flex flex-col rounded-sm border border-hairline bg-card card-subtle p-6 transition-colors hover:border-copper md:p-8">
                <div className="label-mono flex items-center justify-between">
                  <span>{m.tag}</span>
                  <span className="rounded-sm border border-hairline px-2 py-0.5 text-[10px] text-steel">
                    Model
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl text-ink md:text-2xl">{m.t}</h3>
                <div className="mt-3 rounded-sm bg-paper-soft p-3">
                  <div className="label-mono">Best for</div>
                  <div className="mt-1 text-sm text-ink">{m.best}</div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-steel">{m.body}</p>
                <a href="/contact" className="label-mono mt-6 inline-flex items-center gap-2 text-copper hover:text-copper-deep">
                  {m.cta} <span aria-hidden>→</span>
                </a>
              </div>
              {i < models.length - 1 && (
                <div className="hidden items-center justify-center md:flex">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-px w-8 bg-copper/40" />
                    <svg className="h-4 w-4 text-copper" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- Proof ---------------------------------- */

function Lawgic() {
  const cards = [
    { t: "Research", d: "Query Indian case law and documents with source-linked answers." },
    { t: "Draft", d: "Generate petitions, notices, affidavits, contracts, and internal memos with review workflows." },
    { t: "Review", d: "Summarize, compare, translate, and extract from legal files." },
  ];
  return (
    <section id="lawgichub" className="border-b border-hairline">
      <Container className="py-28 md:py-40">
        <SectionEyebrow index="06" label="Proof in production" />
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          Proof in production: LawgicHub
        </h2>
        <p className="mt-6 max-w-2xl text-steel md:text-lg">
          LawgicHub is Xarka's live legal intelligence platform, built for Indian legal research,
          drafting, review, translation, and high-stakes document workflows.
        </p>
        <p className="mt-4 max-w-2xl text-steel md:text-lg">
          It proves the same intelligence layer that Xarka deploys for enterprises: document
          ingestion, OCR, retrieval, multi-agent reasoning, citation support, workflow
          automation, and privacy-first deployment.
        </p>
        <div className="mt-16 grid items-stretch gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              <div>
                <div className="font-serif text-7xl leading-none tracking-tight text-copper md:text-8xl" style={{ fontVariantNumeric: "tabular-nums" }}>10,000+</div>
                <div className="label-mono mt-3">Active lawyers on LawgicHub</div>
              </div>
              <div>
                <div className="font-serif text-7xl leading-none tracking-tight text-ink md:text-8xl" style={{ fontVariantNumeric: "tabular-nums" }}>9L+</div>
                <div className="label-mono mt-3">Judgments indexed</div>
              </div>
              <div>
                <div className="font-serif text-7xl leading-none tracking-tight text-ink md:text-8xl" style={{ fontVariantNumeric: "tabular-nums" }}>₹99</div>
                <div className="label-mono mt-3">Entry price</div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <CopperButton href="https://lawgichub.com">Visit LawgicHub</CopperButton>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-3 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                See how Xarka powers LawgicHub <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-sm border border-hairline bg-paper-soft card-bold p-6">
            <div className="flex-1 w-full rounded-sm bg-ink/5 flex items-center justify-center">
              <span className="label-mono text-steel/50">LawgicHub product screenshot</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- Industries ------------------------------- */

const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Legal Operations": IconScale,
  "Infrastructure & Public Sector": IconBuilding,
  "Manufacturing & Plants": IconFactory,
  "Construction & Projects": IconDrawing,
  "Engineering & ER&D": IconWrench,
  "Energy / Hydrocarbon / Defence": IconZap,
};

function Industries() {
  const rows = [
    {
      t: "Legal Operations",
      d: "Research, drafting, review, translation, matter intelligence, court workflows.",
      k: "Law firms · GCs · Prosecutors",
      cta: "Explore LawgicHub",
    },
    {
      t: "Infrastructure & Public Sector",
      d: "CCTV intelligence, asset monitoring, citizen-service workflows, incident response, document automation.",
      k: "Smart cities · Utilities · Government",
      cta: "Explore infrastructure AI",
    },
    {
      t: "Manufacturing & Plants",
      d: "Vision QA, predictive maintenance, production intelligence, equipment health, safety monitoring.",
      k: "Automotive · Process · Discrete",
      cta: "Explore manufacturing AI",
    },
    {
      t: "Construction & Projects",
      d: "Progress tracking, PPE compliance, site visibility, schedule risk, document intelligence over drawings and reports.",
      k: "Real estate · EPC · Public works",
      cta: "Explore construction AI",
    },
    {
      t: "Engineering & ER&D",
      d: "Document intelligence over drawings, P&IDs, specifications, test reports, and design history.",
      k: "ER&D · Design · Testing",
      cta: "Explore engineering AI",
    },
    {
      t: "Energy / Hydrocarbon / Defence",
      d: "Sovereign, private, air-gapped intelligence systems for sensitive operating environments.",
      k: "Sovereign · Defence · Energy",
      cta: "Discuss secure deployment",
    },
  ];
  return (
    <section id="solutions" className="border-b border-hairline bg-paper-soft">
      <Container className="py-20 md:py-28">
        <SectionEyebrow index="07" label="Industries" />
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          Built for regulated, operationally complex environments.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rows.map((r, i) => {
            const Icon = industryIcons[r.t];
            const isFeatured = r.t === "Legal Operations";
            return (
              <article
                key={r.t}
                className={`group flex flex-col justify-between rounded-sm p-8 transition-all ${
                  isFeatured
                    ? "border border-copper/30 bg-ink text-paper md:-order-1 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-12 hover:border-copper"
                    : "border border-hairline border-l-2 border-l-copper/30 bg-card card-subtle hover:border-l-copper hover:bg-paper"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    {Icon && <Icon className={`${isFeatured ? "h-6 w-6" : "h-4 w-4"} text-copper`} />}
                    <div className={`label-mono ${isFeatured ? "text-copper" : ""}`}>{r.k}</div>
                  </div>
                  <h3 className={`mt-3 font-serif ${isFeatured ? "text-3xl lg:text-4xl" : "text-2xl text-ink"}`}>{r.t}</h3>
                  <p className={`mt-2 text-sm ${isFeatured ? "text-paper/70 lg:text-base" : "text-steel"}`}>{r.d}</p>
                </div>
                <a
                  href={isFeatured ? "/lawgichub" : "/contact"}
                  className={`label-mono mt-6 inline-flex items-center gap-2 text-copper transition-colors ${isFeatured ? "hover:text-copper-soft" : "hover:text-copper-deep"}`}
                >
                  {r.cta} <span aria-hidden>→</span>
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- Why Xarka -------------------------------- */

function WhyXarka() {
  return (
    <section className="border-b border-hairline bg-ink text-paper">
      <Container className="py-24 md:py-36">
        <div className="label-mono flex items-center gap-3 text-copper">
          <span>08</span>
          <span className="h-px w-8 bg-copper/50" />
          <span className="text-paper/60">Why Xarka</span>
        </div>
        <div className="mt-12 grid items-start gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div className="space-y-8 md:pt-2">
            <div>
              <div className="label-mono text-paper/40">Global AI platforms</div>
              <p className="mt-2 text-sm leading-relaxed text-paper/50">
                Cloud-only, expensive, generic — built for Silicon Valley, not Indian regulation.
              </p>
            </div>
            <div>
              <div className="label-mono text-paper/40">Big SIs</div>
              <p className="mt-2 text-sm leading-relaxed text-paper/50">
                18-month roadmaps, bench economics, subcontracted delivery — no production in sight.
              </p>
            </div>
          </div>
          <blockquote className="font-serif text-3xl leading-snug tracking-tight md:text-4xl lg:text-5xl">
            Production in weeks, sovereign deployment, India pricing, proof at scale
            <span className="text-copper"> — LawgicHub is the evidence.</span>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- How we engage ------------------------------ */

function HowWeEngage() {
  const steps = [
    {
      n: "1",
      t: "Working session",
      d: "45 minutes, your scenario. We map your data sources, constraints, and the first workflow Xarka can take from knowledge to action.",
    },
    {
      n: "2",
      t: "6-week pilot",
      d: "Fixed scope, agreed metrics. We build a production-grade proof against your real data and real workflows.",
    },
    {
      n: "3",
      t: "Scale",
      d: "Production deployment on your infrastructure. Full ownership, runbooks, and team training included.",
    },
  ];
  return (
    <section className="border-b border-hairline bg-paper-soft">
      <Container className="py-20 md:py-28">
        <SectionEyebrow index="09" label="Engagement" />
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          How we engage — 3 steps.
        </h2>
        <div className="mt-12 grid gap-6 items-center md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map((s, i) => (
            <React.Fragment key={s.n}>
              <div className="rounded-sm border border-hairline bg-card card-subtle p-6 text-center">
                <div className="label-mono text-copper">{s.n}</div>
                <h3 className="mt-3 font-serif text-lg text-ink">{s.t}</h3>
                <p className="mt-2 text-xs text-steel">{s.d}</p>
              </div>
              {i < steps.length - 1 && (
                <svg className="hidden h-5 w-5 text-copper md:block" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------- Government strip ----------------------------- */

function GovernmentStrip() {
  return (
    <section className="border-b border-hairline bg-ink text-paper">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <div className="label-mono text-copper">Government & Public Sector</div>
            <p className="mt-4 font-serif text-xl leading-relaxed text-paper/90 md:text-2xl">
              Built for sovereign deployment — in advanced pilot discussions with state government
              agencies across air quality, urban operations, and justice-system efficiency.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3.5 text-sm font-medium text-paper hover:bg-paper hover:text-ink transition-colors"
          >
            Request a capability briefing <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- Security & Sovereignty --------------------- */

function Security() {
  const modes = [
    { t: "Cloud", d: "Managed, elastic, integrated with your stack." },
    { t: "On-premise", d: "Runs inside your network with private data handling." },
    { t: "Sovereign", d: "Air-gapped, self-hosted models, in-country residency, no external calls." },
  ];
  const chips = [
    "Customer-owned IP",
    "Human-in-the-loop",
    "Audit trails",
    "Explainability",
    "Role-based access",
    "Enterprise security",
    "DPDP aligned",
    "ISO 27001 / SOC 2",
  ];
  return (
    <section id="resources" className="border-b border-hairline">
      <Container className="py-20 md:py-28">
        <SectionEyebrow index="10" label="Security & Sovereignty" />
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          Deployed on your terms. Governed by design.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {modes.map((m, i) => {
            const isFeatured = m.t === "Sovereign";
            return (
              <div
                key={m.t}
                className={`rounded-sm p-8 transition-all ${
                  isFeatured
                    ? "border border-copper/30 bg-ink text-paper md:col-span-2 md:row-span-1 md:p-10 hover:border-copper"
                    : "border border-hairline bg-card card-subtle"
                }`}
              >
                <div className="label-mono text-copper">Mode</div>
                <div className={`mt-3 font-serif ${isFeatured ? "text-3xl" : "text-2xl text-ink"}`}>{m.t}</div>
                <p className={`mt-3 text-sm ${isFeatured ? "text-paper/70" : "text-steel"}`}>{m.d}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-sm border border-hairline bg-paper-soft p-8">
          <div className="label-mono">Trust layer</div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li
                key={c}
                className="label-mono rounded-sm border border-hairline bg-card px-2.5 py-1.5 text-ink"
              >
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-3 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              Request security &amp; deployment brief <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- Insights --------------------------------- */

function InsightsTeaser() {
  const topBorderColor: Record<string, string> = {
    POV: "border-t-copper",
    "Build note": "border-t-steel",
    Playbook: "border-t-ink",
  };
  const posts = [
    { type: "POV", t: "Why enterprise AI pilots fail in India", d: "The real reasons cost, compliance, and data silos kill AI projects before they start." },
    { type: "Build note", t: "How we built LawgicHub's multi-agent reasoning stack", d: "Engineering-honest walkthrough of citation-grounded AI for Indian legal research." },
    { type: "Playbook", t: "The infrastructure operator's guide to AI deployment", d: "Gated playbook: on-prem architecture, compliance checklists, and pilot frameworks." },
  ];
  return (
    <section className="border-b border-hairline bg-paper-soft">
      <Container className="py-20 md:py-28">
        <SectionEyebrow index="11" label="Insights" />
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          From the front lines.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => {
            const isFeatured = i === 0;
            return (
              <article
                key={p.t}
                className={`rounded-sm border border-hairline border-t-4 ${topBorderColor[p.type] ?? "border-t-copper"} bg-card card-subtle p-8 transition-colors hover:border-copper hover:border-t-4 ${isFeatured ? "md:col-span-2 md:flex md:gap-8 md:p-10" : ""}`}
              >
                <div className={isFeatured ? "flex-1" : ""}>
                  <div className="label-mono text-copper">{p.type}</div>
                  <h3 className={`mt-4 font-serif text-ink ${isFeatured ? "text-2xl md:text-3xl" : "text-xl"}`}>{p.t}</h3>
                  <p className={`mt-3 text-steel ${isFeatured ? "text-base" : "text-sm"}`}>{p.d}</p>
                  <a href="#" className="label-mono mt-6 inline-flex items-center gap-2 text-copper hover:text-copper-deep">
                    Read <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- Leadership ------------------------------- */

function Leadership() {
  const team = [
    { name: "Rajat Gupta", initials: "RG", role: "Systems & Product" },
    { name: "Rishi Gupta", initials: "RG", role: "Commercial & Partnerships" },
    { name: "Sharad Sankaran", initials: "SS", role: "Engineering & Architecture" },
  ];
  return (
    <section className="border-b border-hairline">
      <Container className="py-16 md:py-20">
        <SectionEyebrow index="12" label="Team" />
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
          Built by engineers who ship.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="group rounded-sm border border-hairline bg-card card-subtle p-8 text-center transition-all hover:border-copper">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink font-mono text-lg font-semibold text-paper transition-colors group-hover:bg-copper">
                {t.initials}
              </div>
              <div className="mt-5 font-serif text-xl font-semibold text-ink">{t.name}</div>
              <div className="label-mono mt-2 text-copper">{t.role}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href="/company" className="label-mono inline-flex items-center gap-2 text-copper hover:text-copper-deep">
            Full leadership <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Final --------------------------------- */

function FinalCTA() {
  return (
    <section className="border-b border-hairline bg-ink text-paper">
      <Container className="py-24 md:py-32">
        <SectionEyebrow index="13" label="Book" />
        <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
          See where Xarka fits inside your organization.
        </h2>
        <p className="mt-6 max-w-2xl text-paper/70 md:text-lg">
          Book a 30-minute briefing with our team. We will map your data sources,
          deployment constraints, compliance needs, and the first workflow Xarka can take
          from knowledge to action.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-paper hover:bg-copper-deep transition-colors"
          >
            Book a briefing <span aria-hidden>→</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3.5 text-sm font-medium text-paper hover:bg-paper hover:text-ink transition-colors"
          >
            Download capability overview <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- Page --------------------------------- */

function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal><Problem /></ScrollReveal>
        <ScrollReveal><Platform /></ScrollReveal>
        <ScrollReveal><OperatingLoop /></ScrollReveal>
        <ScrollReveal><Capabilities /></ScrollReveal>
        <ScrollReveal><Deployment /></ScrollReveal>
        <ScrollReveal><Lawgic /></ScrollReveal>
        <ScrollReveal><Industries /></ScrollReveal>
        <ScrollReveal><WhyXarka /></ScrollReveal>
        <ScrollReveal><HowWeEngage /></ScrollReveal>
        <ScrollReveal><GovernmentStrip /></ScrollReveal>
        <ScrollReveal><Security /></ScrollReveal>
        <ScrollReveal><InsightsTeaser /></ScrollReveal>
        <ScrollReveal><Leadership /></ScrollReveal>
        <ScrollReveal><FinalCTA /></ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
