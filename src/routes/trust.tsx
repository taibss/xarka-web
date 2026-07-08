import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";
import { ConstellationCanvas } from "../components/ConstellationCanvas";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & Security | Xarka" },
      {
        name: "description",
        content:
          "Compliance is our default, not an add-on. Security, auditability, and data sovereignty are foundational to every Xarka deployment.",
      },
    ],
  }),
  component: TrustPage,
});

function TrustPage() {
  const certifications = [
    { name: "ISO 27001", desc: "Information security management" },
    { name: "ISO 42001", desc: "AI management system" },
    { name: "SOC 2", desc: "Security, availability, processing integrity" },
    { name: "GDPR", desc: "EU data protection compliance" },
    { name: "DPDP", desc: "India Digital Personal Data Protection" },
  ];

  const deploymentModes = [
    {
      t: "Full on-prem",
      d: "Xarka runs entirely inside your data center. No data leaves your network. Full control over models, data, and infrastructure.",
    },
    {
      t: "Private cloud",
      d: "Dedicated infrastructure in a sovereign cloud environment. Data residency in India. No shared tenancy.",
    },
    {
      t: "Hybrid",
      d: "Sensitive workloads on-prem, less sensitive workloads in managed cloud. Flexible scaling with compliance boundaries.",
    },
  ];

  const governance = [
    "Role-based access control",
    "Audit trails on every action",
    "Human-in-the-loop review",
    "Data residency options",
    "Deployment boundaries",
    "Model monitoring",
    "Incident logs",
    "No client-data training",
  ];

  return (
    <div className="min-h-screen bg-[#060d15] text-white">
      <Nav />
      <main>
        {/* Hero */}
        <ScrollReveal>
        <section className="hero-dark relative overflow-hidden border-b border-white/10">
          <ConstellationCanvas sparse />
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="Trust" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              Compliance is our default, not an add-on.
            </h1>
            <p className="mt-6 max-w-2xl text-white/60 md:text-lg">
              Xarka is built for regulated environments. Security, auditability, and data sovereignty
              are foundational to every deployment.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-white/5">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="02" label="Certifications" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
              Certifications
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              {certifications.map((c) => (
                 <div key={c.name} className="rounded-sm border border-white/10 bg-white/5 card-subtle p-6 text-center card-hover">
                  <div className="font-serif text-xl text-white">{c.name}</div>
                  <p className="mt-2 text-xs text-white/60">{c.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Data handling policy */}
        <ScrollReveal>
        <section className="border-b border-white/10">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="03" label="Data policy" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
              Data handling policy
            </h2>
            <div className="mt-12 max-w-2xl space-y-4 text-white/60 md:text-lg">
              <p>
                <strong className="text-white">No client-data training.</strong> Your data is never used to train or fine-tune Xarka's models.
              </p>
              <p>
                <strong className="text-white">Residency options.</strong> Choose where your data lives — on-prem, sovereign cloud, or specific Indian data centers.
              </p>
              <p>
                <strong className="text-white">Retention control.</strong> You define how long data is retained and when it is deleted.
              </p>
              <p>
                <strong className="text-white">Audit trails.</strong> Every action is logged and traceable for compliance review.
              </p>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Deployment models */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-white/5">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="04" label="Deployment" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
              Deployment architectures
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {deploymentModes.map((m) => (
                 <div key={m.t} className="rounded-sm border border-white/10 bg-white/5 card-subtle p-8 card-hover">
                   <h3 className="font-serif text-xl text-white">{m.t}</h3>
                  <p className="mt-3 text-sm text-white/60">{m.d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Governance controls */}
        <ScrollReveal>
        <section className="border-b border-white/10">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="05" label="Governance" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
              Governance controls
            </h2>
            <div className="mt-12 flex flex-wrap gap-3">
              {governance.map((g) => (
                 <div key={g} className="rounded-sm border border-white/10 bg-white/5 card-subtle px-5 py-3 font-mono text-sm text-white card-hover">
                  {g}
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Security brief CTA */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-ink text-white">
          <Container className="py-24 md:py-32">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Request our security overview
            </h2>
            <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
              Download our security one-pager or talk to our security team about your specific
              requirements, compliance constraints, and deployment architecture.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-white hover:bg-copper-deep transition-colors"
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
