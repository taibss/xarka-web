import * as React from "react";
import { lazy, Suspense } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { CopperButton } from "../components/CopperButton";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollProgress } from "../components/ScrollProgress";
import { ConstellationCanvas } from "../components/ConstellationCanvas";
import { FloatingHex } from "../components/FloatingHex";
import { SystemDiagramAnimated } from "../components/SystemDiagramAnimated";
import { PlatformTimeline } from "../components/PlatformTimeline";
import { HexLoopDiagram } from "../components/HexLoopDiagram";
import { useParallax } from "../hooks/use-parallax";
import {
  ScrollOrchestrator,
  TextReveal,
  ParagraphReveal,
  MagneticButton,
  TiltCard,
  HeroCinematic,
  GlowOrb,
  ParallaxDepth,
} from "../components/motion";

const OperatingLoop3D = lazy(() =>
  import("../components/OperatingLoop3D").then((m) => ({ default: m.OperatingLoop3D })),
);

class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
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
  IconPeople,
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
    <div
      className="relative rounded-sm border border-white/[.08] bg-white/[.035] backdrop-blur-sm p-6 md:p-8"
      style={{
        boxShadow: "0 20px 50px rgba(0,0,0,.28)",
        animation: "fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both",
      }}
    >
      <div className="label-mono mb-6 flex items-center justify-between text-white/50">
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
                className="flex items-center justify-between rounded-sm border border-white/[.08] bg-white/[.03] px-3 py-2 text-xs transition-all duration-220 hover:border-rgba(194,108,52,.35) hover:bg-white/[.05] md:text-sm"
              >
                <span className="flex items-center gap-2 text-white/80">
                  {Icon && <Icon className="h-3.5 w-3.5 text-copper" />}
                  {s}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="relative flex flex-col items-center justify-center self-stretch">
          <div
            className="relative w-[130px] rounded-sm border border-copper bg-ink px-3 py-4 text-center text-paper md:w-[160px]"
            style={{ boxShadow: "0 0 24px rgba(194,108,52,.18)" }}
          >
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
                className="flex items-center justify-between rounded-sm border border-white/[.08] bg-white/[.03] px-3 py-2 text-xs transition-all duration-220 hover:border-rgba(194,108,52,.35) hover:bg-white/[.05] md:text-sm"
              >
                <span className="flex items-center gap-2 text-white/80">
                  {Icon && <Icon className="h-3.5 w-3.5 text-copper" />}
                  {s}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-6 grid grid-cols-5 gap-2 border-t border-white/[.08] pt-4 label-mono text-white/40">
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
  const chips = [
    "On-premise",
    "Air-gapped",
    "Customer-owned IP",
    "Audit-ready",
    "DPDP aligned",
    "Human-in-the-loop",
  ];
  return (
    <section className="hero-dark relative overflow-hidden border-b border-white/10">
      <ConstellationCanvas />
      <GlowOrb x="70%" y="40%" size={400} speed={0.8} />
      <GlowOrb x="20%" y="60%" size={300} color="rgba(192, 103, 43, 0.04)" speed={1.2} />
      <HeroCinematic>
        <Container className="relative z-10 grid gap-18 py-28 md:grid-cols-[1fr_1.1fr] md:gap-20 md:py-36">
          <div>
            <TextReveal as="p" variant="blur" className="label-mono mb-4 text-copper" delay={100}>
              Xarka AI Technologies · India
            </TextReveal>
            <TextReveal
              as="h1"
              variant="words"
              className="mt-6 max-w-[540px] font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl"
              delay={200}
            >
              The intelligence layer for regulated organizations.
            </TextReveal>
            <ParagraphReveal
              className="mt-8 max-w-[620px] text-base leading-[1.8] text-white/65 md:text-lg"
              delay={600}
            >
              Xarka connects documents, cameras, sensors, ERP systems, and workflows into sovereign
              AI systems that observe, reason, predict, and act — with humans in control.
            </ParagraphReveal>
            <div className="mt-10 flex flex-wrap gap-3" style={{ opacity: 1 }}>
              <MagneticButton>
                <CopperButton href="/contact">Book a 30-minute briefing</CopperButton>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#system"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/[.18] px-6 py-3.5 text-sm font-medium text-white/80 hover:bg-white/[.05] hover:text-white transition-all duration-220"
                >
                  See how it works
                </a>
              </MagneticButton>
            </div>
            <ul className="mt-12 flex flex-wrap gap-3">
              {chips.map((c, i) => (
                <li
                  key={c}
                  className="label-mono flex items-center gap-1.5 rounded-sm border border-white/[.06] bg-white/[.03] px-2.5 py-1.5 text-white/60 hover:bg-white/[.05] hover:border-rgba(194,108,52,.25) transition-all duration-220"
                  style={{
                    opacity: 1,
                    animation: `fadeInUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${800 + i * 80}ms both`,
                  }}
                >
                  <IconCheck className="h-3 w-3 text-copper" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <ParallaxDepth depth={0.3} mouseInfluence={1.2} className="md:pl-6">
            <HeroDiagram />
          </ParallaxDepth>
        </Container>
      </HeroCinematic>
    </section>
  );
}

/* ------------------------------- Problem -------------------------------- */

function Problem() {
  const cards = [
    {
      t: "Documents",
      d: "Contracts, PDFs, reports, judgments, specifications.",
      icon: IconDocument,
    },
    {
      t: "Cameras",
      d: "CCTV, site feeds, quality inspection, safety monitoring.",
      icon: IconCamera,
    },
    { t: "Systems", d: "ERP, CRM, case management, asset management.", icon: IconDatabase },
    { t: "Sensors", d: "IoT, equipment telemetry, environmental signals.", icon: IconSensor },
    { t: "Workflows", d: "Approvals, reports, alerts, audits, handovers.", icon: IconWorkflow },
  ];
  return (
    <section className="relative border-b border-white/[0.06] overflow-hidden" style={{ backgroundColor: "#08111B" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(194,108,52,0.04), transparent 70%)",
        }}
      />
      <FloatingHex speed={0.3} size={120} className="top-[8%] right-[4%] text-white/10" />
      <FloatingHex speed={0.2} size={70} className="bottom-[15%] left-[2%] text-white/10" />
      <Container className="py-20 md:py-28">
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
          Your organization already has the knowledge. It just cannot act on it.
        </h2>
        <p className="mt-6 max-w-2xl text-[rgba(255,255,255,0.50)] md:text-lg">
          Critical information sits across files, cameras, machines, databases, emails, drawings,
          and legacy software. Teams spend hours searching, verifying, escalating, and manually
          acting on what the organization already knows.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.06)] md:grid-cols-5">
          {cards.map((c, i) => (
            <div key={c.t} className="bg-[rgba(255,255,255,0.035)] p-6 card-hover transition-all duration-220 hover:bg-[rgba(255,255,255,0.045)]">
              <c.icon className="card-icon h-6 w-6 text-copper" />
              <div className="label-mono mt-3 text-copper">0{i + 1}</div>
              <div className="mt-2 font-serif text-xl text-white">{c.t}</div>
              <p className="mt-2 text-sm text-[rgba(255,255,255,0.50)]">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl font-serif text-xl italic text-[rgba(255,255,255,0.68)] md:text-2xl">
          Xarka connects these sources into one intelligence layer.
        </p>
      </Container>
    </section>
  );
}

/* ------------------------------- Platform ------------------------------- */

function SystemSection() {
  const outcomes = [
    {
      sub: "Before it happens",
      t: "Foresight, not reports",
      d: "A brain that watches infinite data points notices what no team can: the vibration pattern before the breakdown, the invoice drift before the leakage, the footfall shift before the quarter turns. Problems surface weeks early — priced, ranked, and explained.",
    },
    {
      sub: "What could be",
      t: "Your vision, made visible",
      d: "Describe the ambition — the new plant, the merged department, the city corridor. The twin computes it against your real data: feasibility, cost, consequence. What could only be dreamt can now be visualised, implemented — or confidently rejected.",
    },
    {
      sub: "Who decides",
      t: "The human stays in command",
      d: "Xarka computes; you decide. Every recommendation arrives with its evidence and its reasoning, every action waits for a human gate where it matters, and every step is logged for audit. Intelligence without surrender.",
    },
  ];
  return (
    <section id="system" className="border-b border-[rgba(255,255,255,0.06)]" style={{ backgroundColor: "#09121D" }}>
      <Container className="py-20 md:py-28">
        <div className="label-mono flex items-center gap-3 text-copper">
          <span>The system</span>
          <span className="h-px w-8 bg-copper/50" />
        </div>
        <TextReveal
          as="h2"
          variant="words"
          className="mt-6 max-w-3xl font-serif text-3xl leading-tight md:text-5xl"
        >
          One brain. Every data point. The whole picture, thinking.
        </TextReveal>
        <ParagraphReveal className="mt-6 max-w-2xl text-[rgba(255,255,255,0.68)] md:text-lg" delay={200}>
          Xarka fuses your disintegrated data sources into a living digital twin of the entire
          ecosystem — not a dashboard that reports the past, but an intelligence that understands
          the present and computes the future. One system, in place of fifty tools.
        </ParagraphReveal>
        <div className="mt-12">
          <SystemDiagramAnimated />
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {outcomes.map((o, i) => (
            <ScrollReveal key={o.t} delay={i * 120}>
              <TiltCard className="h-full">
                <div className="relative flex h-full flex-col border-t-2 border-t-copper bg-[rgba(255,255,255,0.03)] p-8">
                  <span className="label-mono text-copper">{o.sub}</span>
                  <h3 className="mt-3 font-serif text-xl text-white">{o.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[rgba(255,255,255,0.68)]">{o.d}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Platform() {
  return (
    <section id="platform" className="border-b border-[rgba(255,255,255,0.06)]" style={{ backgroundColor: "#0A1320" }}>
      <Container className="py-20 md:py-28">
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
          Xarka turns scattered knowledge into governed action.
        </h2>
        <p className="mt-6 max-w-2xl text-[rgba(255,255,255,0.50)] md:text-lg">
          A five-layer architecture from raw signal to controlled execution — deployable on your
          servers, in your sovereign cloud, or fully air-gapped.
        </p>
        <div className="mt-12">
          <PlatformTimeline />
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- Operating Loop ----------------------------- */

function OperatingLoop() {
  const steps = [
    {
      n: "01",
      t: "Observe",
      d: "Every feed, one stream — cameras, sensors, ERP, documents, workflows ingested continuously.",
    },
    {
      n: "02",
      t: "Understand",
      d: "Vision models, OCR and knowledge graphs turn feeds into a single queryable picture.",
    },
    {
      n: "03",
      t: "Reason",
      d: "Agentic reasoning finds the pattern in maintenance logs that explains the sales dip — evidence attached.",
    },
    {
      n: "04",
      t: "Predict",
      d: "The digital twin runs scenarios and stress-tests decisions before a rupee is spent.",
    },
    {
      n: "05",
      t: "Act",
      d: "Automations fire where you allow them; people approve where judgment matters. Every step auditable.",
    },
    {
      n: "06",
      t: "Learn",
      d: "Every outcome feeds back in. The system that ran your operations this quarter is smarter next quarter.",
    },
  ];
  return (
    <section className="border-b border-[rgba(255,255,255,0.06)]" style={{ backgroundColor: "#08131A" }}>
      <Container className="py-20 md:py-28">
        <div className="label-mono flex items-center gap-3 text-copper">
          <span>03</span>
          <span className="h-px w-8 bg-copper/50" />
          <span className="text-[rgba(255,255,255,0.50)]">Operating loop</span>
        </div>
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
          One loop, running forever. On your infrastructure.
        </h2>
        <p className="mt-6 max-w-2xl text-[rgba(255,255,255,0.68)] md:text-lg">
          Every Xarka system runs the same six-stage cycle. The sixth stage is the point: the loop
          closes, the system learns, and every pass makes the next one sharper. Intelligence
          compounds — tools don't.
        </p>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
          <HexLoopDiagram />
          <div className="flex flex-col gap-0">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 80}>
                <div className="flex gap-5 border-b border-[rgba(255,255,255,0.06)] py-4 last:border-b-0">
                  <span className="label-mono min-w-[96px] pt-0.5 text-copper">
                    {s.n} {s.t}
                  </span>
                  <div>
                    <h3 className="font-serif text-base text-white">{s.t}</h3>
                    <p className="mt-1 text-sm text-[rgba(255,255,255,0.50)]">{s.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
      u: [
        "PPE compliance",
        "Occupancy & flow",
        "Site safety",
        "Anomaly detection",
        "Progress monitoring",
      ],
    },
    {
      t: "Knowledge & Retrieval",
      s: "Turn scattered files into a reasoning workspace.",
      u: [
        "Enterprise search",
        "Document intelligence",
        "OCR",
        "Semantic retrieval",
        "Knowledge graphs",
        "Legal and technical corpora",
      ],
    },
    {
      t: "Reasoning & Decision",
      s: "Build agentic workflows with auditability and human control.",
      u: [
        "Decision support",
        "Command dashboards",
        "Multi-agent review",
        "Human-in-the-loop approvals",
        "Compliance reasoning",
      ],
    },
    {
      t: "Prediction & Optimisation",
      s: "Forecast risk, load, failure, and operational outcomes.",
      u: [
        "Predictive maintenance",
        "Demand forecasting",
        "Digital twins",
        "Industrial analytics",
        "Plant optimization",
      ],
    },
    {
      t: "Automation & Action",
      s: "Move from recommendations to controlled execution.",
      u: [
        "Workflow automation",
        "API-triggered actions",
        "Reporting",
        "Escalation",
        "Robotics integration",
      ],
    },
    {
      t: "Enterprise Systems Engineering",
      s: "Deploy securely inside the environments that matter.",
      u: [
        "On-prem",
        "Sovereign cloud",
        "ERP/CRM integration",
        "Enterprise security",
        "Private model deployment",
      ],
    },
  ];
  return (
    <section className="border-b border-[rgba(255,255,255,0.06)] section-fade-top" style={{ backgroundColor: "#0B141D" }}>
      <Container className="py-20 md:py-28">
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
          Six capabilities. One production stack.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = capabilityIcons[it.t];
            const isHero = it.t === "Reasoning & Decision";
            return (
              <TiltCard key={it.t} intensity={isHero ? 0.5 : 1}>
                <article
                  className={`group flex h-full flex-col justify-between rounded-sm p-8 card-hover ${
                    isHero
                      ? "border border-[rgba(194,108,52,0.35)] bg-[#17110B] text-paper md:-order-1 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-12 hover:border-copper"
                      : "border border-[rgba(255,255,255,0.06)] border-l-2 border-l-[rgba(194,108,52,0.35)] bg-[rgba(255,255,255,0.03)] card-subtle hover:border-l-copper hover:bg-[rgba(255,255,255,0.045)]"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <Icon
                          className={`card-icon ${isHero ? "h-6 w-6" : "h-5 w-5"} text-copper`}
                        />
                      )}
                      <div className="label-mono text-copper">0{i + 1}</div>
                    </div>
                    <h3
                      className={`mt-4 font-serif ${isHero ? "text-3xl lg:text-4xl" : "text-2xl text-white"}`}
                    >
                      {it.t}
                    </h3>
                    <p
                      className={`mt-2 ${isHero ? "text-paper/70 lg:text-base" : "text-sm text-[rgba(255,255,255,0.50)]"}`}
                    >
                      {it.s}
                    </p>
                    <ul className={`mt-5 space-y-1.5 ${isHero ? "lg:mt-8 lg:space-y-2" : ""}`}>
                      {it.u.map((x) => (
                        <li
                          key={x}
                          className={`flex items-start gap-2 text-sm ${isHero ? "text-white/90" : "text-white"}`}
                        >
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
              </TiltCard>
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
      body: "Secure API access to Xarka's proprietary model stack for production applications requiring low-latency, private, and jurisdiction-aware inference.",
      cta: "Talk to us about API access",
    },
    {
      tag: "PaaS",
      t: "Managed AI Workflows",
      best: "Teams that want business outcomes without managing AI operations.",
      body: "Xarka designs, deploys, monitors, and optimizes agentic workflows for defined business processes — legal drafting, compliance review, site safety, document search, equipment health.",
      cta: "Discuss a managed workflow",
    },
    {
      tag: "BOT",
      t: "Build · Operate · Transfer",
      best: "Enterprises and governments that want long-term ownership of their AI capability.",
      body: "Xarka builds the system, operates it in production, and transfers full ownership — runbooks, workshops, IP assignment, and client-owned deployment.",
      cta: "Plan a BOT deployment",
    },
  ];
  return (
    <section className="border-b border-[rgba(255,255,255,0.06)]" style={{ backgroundColor: "#0A1219" }}>
      <Container className="py-20 md:py-28">
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
          Three ways to deploy Xarka.
        </h2>
        <p className="mt-4 max-w-2xl text-[rgba(255,255,255,0.50)] md:text-lg">
          Increasing depth of engagement — from API access to full ownership.
        </p>
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {models.map((m, i) => (
            <div key={m.tag} className="contents">
              <div className="flex flex-col rounded-sm border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] card-subtle p-6 card-hover transition-all duration-220 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.06)] md:p-8">
                <div className="label-mono flex items-center justify-between">
                  <span>{m.tag}</span>
                  <span className="rounded-sm border border-[rgba(255,255,255,0.06)] px-2 py-0.5 text-[10px] text-[rgba(255,255,255,0.50)]">
                    Model
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl text-white md:text-2xl">{m.t}</h3>
                <div className="mt-3 rounded-sm bg-[rgba(255,255,255,0.045)] p-3">
                  <div className="label-mono">Best for</div>
                  <div className="mt-1 text-sm text-white">{m.best}</div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[rgba(255,255,255,0.50)]">{m.body}</p>
                <a
                  href="/contact"
                  className="label-mono mt-6 inline-flex items-center gap-2 text-copper hover:text-copper-deep"
                >
                  {m.cta} <span aria-hidden>→</span>
                </a>
              </div>
              {i < models.length - 1 && (
                <div className="hidden items-center justify-center md:flex">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-px w-8 bg-[rgba(194,108,52,0.30)]" />
                    <svg
                      className="h-4 w-4 text-copper"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
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
    {
      t: "Draft",
      d: "Generate petitions, notices, affidavits, contracts, and internal memos with review workflows.",
    },
    { t: "Review", d: "Summarize, compare, translate, and extract from legal files." },
  ];
  return (
    <section id="lawgichub" className="border-b border-[rgba(255,255,255,0.06)]" style={{ backgroundColor: "#0C1116" }}>
      <Container className="py-28 md:py-40">
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
          Proof in production: LawgicHub
        </h2>
        <p className="mt-6 max-w-2xl text-[rgba(255,255,255,0.50)] md:text-lg">
          LawgicHub is Xarka's live legal intelligence platform, built for Indian legal research,
          drafting, review, translation, and high-stakes document workflows.
        </p>
        <p className="mt-4 max-w-2xl text-[rgba(255,255,255,0.50)] md:text-lg">
          It proves the same intelligence layer that Xarka deploys for enterprises: document
          ingestion, OCR, retrieval, multi-agent reasoning, citation support, workflow automation,
          and privacy-first deployment.
        </p>
        <div className="mt-16 grid items-stretch gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-between">
            <div
              className="relative flex flex-col gap-8"
            >
              <div
                className="pointer-events-none absolute -inset-8"
                style={{
                  background: "radial-gradient(circle, rgba(194,108,52,0.08), transparent 70%)",
                }}
              />
              <div className="relative">
                <div
                  className="font-serif text-7xl leading-none tracking-tight text-copper md:text-8xl"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  10,000+
                </div>
                <div className="label-mono mt-3 text-[rgba(255,255,255,0.45)]">Active lawyers on LawgicHub</div>
              </div>
              <div className="relative">
                <div
                  className="font-serif text-7xl leading-none tracking-tight text-white md:text-8xl"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  9L+
                </div>
                <div className="label-mono mt-3 text-[rgba(255,255,255,0.45)]">Judgments indexed</div>
              </div>
              <div className="relative">
                <div
                  className="font-serif text-7xl leading-none tracking-tight text-white md:text-8xl"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  ₹99
                </div>
                <div className="label-mono mt-3 text-[rgba(255,255,255,0.45)]">Entry price</div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <CopperButton href="https://lawgichub.com">Visit LawgicHub</CopperButton>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-[rgba(255,255,255,0.18)] px-5 py-3 text-sm font-medium text-[rgba(255,255,255,0.50)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white transition-all duration-220"
              >
                See how Xarka powers LawgicHub <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-sm border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] card-bold p-6">
            <div className="flex-1 w-full rounded-sm bg-[rgba(255,255,255,0.04)] flex items-center justify-center">
              <span className="label-mono text-[rgba(255,255,255,0.45)]">LawgicHub product screenshot</span>
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
    <section id="solutions" className="relative border-b border-[rgba(255,255,255,0.06)] overflow-hidden" style={{ backgroundColor: "#08111A" }}>
      <FloatingHex speed={0.25} size={100} className="top-[10%] right-[3%] text-white/10" />
      <FloatingHex speed={0.35} size={60} className="bottom-[12%] left-[5%] text-white/10" />
      <Container className="py-20 md:py-28">
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
          Built for regulated, operationally complex environments.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rows.map((r, i) => {
            const Icon = industryIcons[r.t];
            const isFeatured = r.t === "Legal Operations";
            return (
              <article
                key={r.t}
                className={`group flex flex-col justify-between rounded-sm p-8 card-hover ${
                  isFeatured
                    ? "border border-[rgba(194,108,52,0.35)] bg-[#17110B] text-paper md:-order-1 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-12 hover:border-copper"
                    : "border border-[rgba(255,255,255,0.06)] border-l-2 border-l-[rgba(194,108,52,0.35)] bg-[rgba(255,255,255,0.03)] card-subtle hover:border-l-copper hover:bg-[rgba(255,255,255,0.045)]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    {Icon && (
                      <Icon
                        className={`card-icon ${isFeatured ? "h-6 w-6" : "h-4 w-4"} text-copper`}
                      />
                    )}
                    <div className={`label-mono ${isFeatured ? "text-copper" : "text-[rgba(255,255,255,0.45)]"}`}>{r.k}</div>
                  </div>
                  <h3
                    className={`mt-3 font-serif ${isFeatured ? "text-3xl lg:text-4xl" : "text-2xl text-white"}`}
                  >
                    {r.t}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${isFeatured ? "text-[rgba(255,255,255,0.68)] lg:text-base" : "text-[rgba(255,255,255,0.50)]"}`}
                  >
                    {r.d}
                  </p>
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
    <section className="border-b border-[rgba(255,255,255,0.06)]" style={{ backgroundColor: "#090E14" }}>
      <Container className="py-24 md:py-36">
        <div className="label-mono flex items-center gap-3 text-copper">
          <span>08</span>
          <span className="h-px w-8 bg-copper/50" />
          <span className="text-[rgba(255,255,255,0.50)]">Why Xarka</span>
        </div>
        <div className="mt-12 grid items-start gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div className="space-y-8 md:pt-2">
            <div>
              <div className="label-mono text-[rgba(255,255,255,0.45)]">Global AI platforms</div>
              <p className="mt-2 text-sm leading-relaxed text-[rgba(255,255,255,0.50)]">
                Cloud-only, expensive, generic — built for Silicon Valley, not Indian regulation.
              </p>
            </div>
            <div>
              <div className="label-mono text-[rgba(255,255,255,0.45)]">Big SIs</div>
              <p className="mt-2 text-sm leading-relaxed text-[rgba(255,255,255,0.50)]">
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
    <section className="border-b border-[rgba(255,255,255,0.06)] section-fade-top" style={{ backgroundColor: "#0A121A" }}>
      <Container className="py-20 md:py-28">
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
          How we engage — 3 steps.
        </h2>
        <div className="mt-12 grid gap-6 items-center md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map((s, i) => (
            <React.Fragment key={s.n}>
              <div className="rounded-sm border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] card-subtle p-6 text-center card-hover transition-all duration-220 hover:border-[rgba(255,255,255,0.12)]">
                <div className="label-mono text-copper">{s.n}</div>
                <h3 className="mt-3 font-serif text-lg text-white">{s.t}</h3>
                <p className="mt-2 text-xs text-[rgba(255,255,255,0.50)]">{s.d}</p>
              </div>
              {i < steps.length - 1 && (
                <svg
                  className="hidden h-5 w-5 md:block"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "rgba(194,108,52,0.30)" }}
                >
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
    <section className="border-b border-[rgba(255,255,255,0.06)]" style={{ backgroundColor: "#11100D" }}>
      <Container className="py-16 md:py-20">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <div className="label-mono text-copper">Government & Public Sector</div>
            <p className="mt-4 font-serif text-xl leading-relaxed text-white/90 md:text-2xl">
              Built for sovereign deployment — in advanced pilot discussions with state government
              agencies across air quality, urban operations, and justice-system efficiency.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-sm border border-[rgba(255,255,255,0.18)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[rgba(255,255,255,0.05)] hover:text-white transition-all duration-220"
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
    {
      t: "Sovereign",
      d: "Air-gapped, self-hosted models, in-country residency, no external calls.",
    },
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
    <section id="resources" className="border-b border-[rgba(255,255,255,0.06)] section-fade-top" style={{ backgroundColor: "#08121B" }}>
      <Container className="py-20 md:py-28">
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
          Deployed on your terms. Governed by design.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {modes.map((m, i) => {
            const isFeatured = m.t === "Sovereign";
            return (
              <div
                key={m.t}
                className={`rounded-sm p-8 card-hover ${
                  isFeatured
                    ? "border border-[rgba(194,108,52,0.35)] bg-[#17110B] text-paper md:col-span-2 md:row-span-1 md:p-10 hover:border-copper"
                    : "border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] card-subtle"
                }`}
              >
                <div className="label-mono text-copper">Mode</div>
                <div
                  className={`mt-3 font-serif ${isFeatured ? "text-3xl" : "text-2xl text-white"}`}
                >
                  {m.t}
                </div>
                <p className={`mt-3 text-sm ${isFeatured ? "text-[rgba(255,255,255,0.68)]" : "text-[rgba(255,255,255,0.50)]"}`}>
                  {m.d}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-sm border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.05)] p-8">
          <div className="label-mono">Trust layer</div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li
                key={c}
                className="label-mono rounded-sm border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-2.5 py-1.5 text-white"
              >
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-[rgba(255,255,255,0.18)] px-5 py-3 text-sm font-medium text-[rgba(255,255,255,0.50)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white transition-all duration-220"
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
    {
      type: "POV",
      t: "Why enterprise AI pilots fail in India",
      d: "The real reasons cost, compliance, and data silos kill AI projects before they start.",
    },
    {
      type: "Build note",
      t: "How we built LawgicHub's multi-agent reasoning stack",
      d: "Engineering-honest walkthrough of citation-grounded AI for Indian legal research.",
    },
    {
      type: "Playbook",
      t: "The infrastructure operator's guide to AI deployment",
      d: "Gated playbook: on-prem architecture, compliance checklists, and pilot frameworks.",
    },
  ];
  return (
    <section className="border-b border-[rgba(255,255,255,0.06)]" style={{ backgroundColor: "#091018" }}>
      <Container className="py-20 md:py-28">
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
          From the front lines.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => {
            const isFeatured = i === 0;
            return (
              <article
                key={p.t}
                className={`rounded-sm border border-[rgba(255,255,255,0.06)] border-t-4 ${topBorderColor[p.type] ?? "border-t-copper"} p-8 card-hover transition-all duration-220 hover:border-[rgba(255,255,255,0.12)] hover:border-t-4 ${isFeatured ? "bg-[rgba(255,255,255,0.055)] md:col-span-2 md:flex md:gap-8 md:p-10" : "bg-[rgba(255,255,255,0.03)]"}`}
              >
                <div className={isFeatured ? "flex-1" : ""}>
                  <div className="label-mono text-copper">{p.type}</div>
                  <h3
                    className={`mt-4 font-serif text-white ${isFeatured ? "text-2xl md:text-3xl" : "text-xl"}`}
                  >
                    {p.t}
                  </h3>
                  <p className={`mt-3 text-[rgba(255,255,255,0.50)] ${isFeatured ? "text-base" : "text-sm"}`}>
                    {p.d}
                  </p>
                  <a
                    href="#"
                    className="label-mono mt-6 inline-flex items-center gap-2 text-copper hover:text-copper-deep"
                  >
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
    { name: "Rajat Gupta", role: "Systems & Product" },
    { name: "Rishi Gupta", role: "Commercial & Partnerships" },
    { name: "Sharad Sankaran", role: "Engineering & Architecture" },
  ];
  return (
    <section className="border-b border-[rgba(255,255,255,0.06)]" style={{ backgroundColor: "#081018" }}>
      <Container className="py-16 md:py-20">
        <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
          Built by engineers who ship.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((t) => (
            <div
              key={t.name}
              className="group rounded-sm border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] card-subtle p-8 text-center card-hover transition-all duration-220 hover:border-[rgba(194,108,52,0.35)]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] transition-colors group-hover:bg-copper">
                <IconPeople className="card-icon h-7 w-7 text-white" />
              </div>
              <div className="mt-5 font-serif text-xl font-semibold text-white">{t.name}</div>
              <div className="label-mono mt-2 text-copper">{t.role}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="/company"
            className="label-mono inline-flex items-center gap-2 text-copper hover:text-copper-deep"
          >
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
    <section className="border-b border-[rgba(255,255,255,0.06)] relative overflow-hidden" style={{ backgroundColor: "#100B08" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(194,108,52,0.10), transparent 70%)",
        }}
      />
      <Container className="relative py-24 md:py-32">
        <TextReveal
          as="h2"
          variant="words"
          className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl"
        >
          See where Xarka fits inside your organization.
        </TextReveal>
        <ParagraphReveal className="mt-6 max-w-2xl text-[rgba(255,255,255,0.68)] md:text-lg" delay={300}>
          Book a 30-minute briefing with our team. We will map your data sources, deployment
          constraints, compliance needs, and the first workflow Xarka can take from knowledge to
          action.
        </ParagraphReveal>
        <div className="mt-10 flex flex-wrap gap-3">
          <MagneticButton>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-white hover:bg-copper-deep transition-colors"
            >
              Book a briefing <span aria-hidden>→</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-sm border border-[rgba(255,255,255,0.18)] px-6 py-3.5 text-sm font-medium text-white hover:bg-[rgba(255,255,255,0.05)] hover:text-white transition-all duration-220"
            >
              Download capability overview <span aria-hidden>→</span>
            </a>
          </MagneticButton>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- Page --------------------------------- */

function Home() {
  return (
    <div className="min-h-screen bg-[#060d15] text-white gridbg">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <ScrollOrchestrator>
          <Problem />
        </ScrollOrchestrator>
        <ScrollOrchestrator intensity={1.2}>
          <SystemSection />
        </ScrollOrchestrator>
        <ScrollOrchestrator>
          <Platform />
        </ScrollOrchestrator>
        <ScrollOrchestrator intensity={0.8}>
          <OperatingLoop />
        </ScrollOrchestrator>
        <ScrollReveal>
          <Capabilities />
        </ScrollReveal>
        <ScrollOrchestrator>
          <Deployment />
        </ScrollOrchestrator>
        <ScrollReveal>
          <Lawgic />
        </ScrollReveal>
        <ScrollOrchestrator>
          <Industries />
        </ScrollOrchestrator>
        <ScrollReveal>
          <WhyXarka />
        </ScrollReveal>
        <ScrollReveal>
          <HowWeEngage />
        </ScrollReveal>
        <ScrollReveal>
          <GovernmentStrip />
        </ScrollReveal>
        <ScrollOrchestrator>
          <Security />
        </ScrollOrchestrator>
        <ScrollReveal>
          <InsightsTeaser />
        </ScrollReveal>
        <ScrollReveal>
          <Leadership />
        </ScrollReveal>
        <ScrollReveal>
          <FinalCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
