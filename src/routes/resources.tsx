import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { CopperButton } from "../components/CopperButton";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";
import { ConstellationCanvas } from "../components/ConstellationCanvas";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | Xarka" },
      {
        name: "description",
        content:
          "Capability overviews, deployment guides, security documentation, and industry playbooks.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const resources = [
    {
      t: "Xarka Capability Overview",
      d: "A complete overview of Xarka's intelligence layer, capabilities, and deployment models.",
      type: "PDF",
      gated: false,
    },
    {
      t: "Sovereign AI Infrastructure Brief",
      d: "Technical brief on on-prem, air-gapped, and sovereign cloud deployment architectures.",
      type: "PDF",
      gated: true,
    },
    {
      t: "LawgicHub Product Brief",
      d: "Product overview of India's first ISO 42001-certified legal AI platform.",
      type: "PDF",
      gated: false,
    },
    {
      t: "Deployment Models: Cloud vs On-Prem vs BOT",
      d: "Comparison guide for choosing the right deployment model for your organization.",
      type: "PDF",
      gated: false,
    },
    {
      t: "Legal AI for Indian Law Firms",
      d: "How Indian law firms are using AI for research, drafting, and document review.",
      type: "Playbook",
      gated: true,
    },
    {
      t: "AI for Infrastructure and Public-Sector Operations",
      d: "Use cases and architecture for deploying AI in government and infrastructure environments.",
      type: "Playbook",
      gated: true,
    },
    {
      t: "Security & Governance Overview",
      d: "Xarka's approach to security, compliance, audit trails, and enterprise governance.",
      type: "PDF",
      gated: true,
    },
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
            <SectionEyebrow index="01" label="Resources" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              Resources
            </h1>
            <p className="mt-6 max-w-2xl text-white/60 md:text-lg">
              Capability overviews, deployment guides, security documentation, and industry playbooks.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* Resource list */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-white/5">
          <Container className="py-20 md:py-28">
            <div className="space-y-4">
              {resources.map((r) => (
                 <div key={r.t} className="flex items-start justify-between gap-6 rounded-sm border border-white/10 bg-white/5 card-subtle p-6 card-hover transition-colors hover:border-copper md:p-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-lg text-white">{r.t}</h3>
                      <span className="label-mono rounded-sm border border-white/10 px-2 py-0.5 text-[10px] text-white/60">
                        {r.type}
                      </span>
                      {r.gated && (
                        <span className="label-mono rounded-sm border border-copper/30 bg-copper-soft px-2 py-0.5 text-[10px] text-copper-deep">
                          Gated
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-white/60">{r.d}</p>
                  </div>
                  <a
                    href={r.gated ? "/contact" : "#"}
                    className="label-mono shrink-0 inline-flex items-center gap-2 text-copper hover:text-copper-deep"
                  >
                    {r.gated ? "Request access" : "Download"} <span aria-hidden>→</span>
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-ink text-white">
          <Container className="py-24 md:py-32">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Need more detail?
            </h2>
            <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
              Book a briefing to discuss your specific requirements, deployment constraints,
              and the resources most relevant to your organization.
            </p>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-white hover:bg-copper-deep transition-colors"
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
