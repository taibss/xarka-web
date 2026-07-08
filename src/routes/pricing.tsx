import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { CopperButton } from "../components/CopperButton";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Xarka" },
      {
        name: "description",
        content:
          "Transparent, fixed-fee pricing. No hidden costs, no usage-based surprises. Engagements scoped after a 30-minute briefing.",
      },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Sandbox",
    deploy: "Cloud-managed",
    tagline: "Evaluate Xarka on your own data, zero commitment.",
    includes: [
      "Single workflow module",
      "Up to 100 pages / 10 GB data",
      "Cloud-managed deployment",
      "Community support",
      "7-day trial",
    ],
    cta: "Start free on LawgicHub",
    ctaHref: "https://lawgichub.com",
    highlight: false,
  },
  {
    name: "Production",
    deploy: "Cloud or VPC",
    tagline: "Ship your first AI workflow with full compliance.",
    includes: [
      "Up to 3 workflow modules",
      "10,000 pages / 100 GB data",
      "Cloud or VPC deployment",
      "Dedicated support + SLA",
      "SOC 2 / ISO 42001 audit trail",
      "Custom integrations",
    ],
    cta: "Request pricing",
    ctaHref: "/contact",
    highlight: true,
  },
  {
    name: "Sovereign",
    deploy: "On-premise / private VPC",
    tagline: "Full air-gapped deployment with zero data egress.",
    includes: [
      "Unlimited workflow modules",
      "Unlimited data",
      "On-premise / private VPC",
      "Dedicated engineering support",
      "Full compliance suite",
      "Custom model fine-tuning",
      "White-glove onboarding",
    ],
    cta: "Discuss sovereign deployment",
    ctaHref: "/contact",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Do you publish pricing publicly?",
    a: "No. Every deployment is different — data volume, compliance requirements, integration complexity, and support needs vary. We scope a fixed-fee engagement after a 30-minute briefing.",
  },
  {
    q: "What is the minimum engagement?",
    a: "Sandbox is free. Production engagements start with a 90-day pilot. Sovereign deployments are scoped as 6–12 month programs.",
  },
  {
    q: "Can I start on cloud and move to sovereign later?",
    a: "Yes. Our architecture is designed for portability. You can start cloud-managed and migrate to on-premise or private VPC when your compliance posture requires it.",
  },
  {
    q: "What about support and SLAs?",
    a: "Production includes a 99.5% uptime SLA with 24-hour response. Sovereign includes dedicated engineering support with 4-hour response and quarterly architecture reviews.",
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Hero */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="Pricing" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Transparent. Fixed-fee. No surprises.
            </h1>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Xarka engagements are scoped after a 30-minute briefing. We map your data,
              compliance requirements, and deployment constraints — then deliver a fixed-fee
              proposal. No hidden costs, no usage-based surprises.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* Tiers */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="02" label="Deployment models" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Three ways to deploy.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {tiers.map((t, i) => (
                <div
                  key={t.name}
                  className={`flex flex-col rounded-sm border bg-card card-subtle p-8 card-hover ${
                    t.highlight
                      ? "border-copper ring-1 ring-copper/20"
                      : "border-hairline"
                  }`}
                >
                  {t.highlight && (
                    <div className="label-mono mb-4 text-copper">Most common</div>
                  )}
                  <h3 className="font-serif text-2xl text-ink">{t.name}</h3>
                  <p className="label-mono mt-2 text-steel">{t.deploy}</p>
                  <p className="mt-4 text-sm text-steel">{t.tagline}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {t.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink">
                        <span className="mt-0.5 text-copper">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <CopperButton href={t.ctaHref}>
                      {t.cta}
                    </CopperButton>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Process */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="03" label="How we scope" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              From briefing to proposal in 48 hours.
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "30-minute briefing",
                  desc: "We map your data sources, compliance requirements, deployment constraints, and the first workflow to tackle.",
                },
                {
                  step: "02",
                  title: "Architecture review",
                  desc: "Our engineering team reviews your infrastructure and designs a deployment plan — cloud, VPC, or on-premise.",
                },
                {
                  step: "03",
                  title: "Fixed-fee proposal",
                  desc: "You receive a detailed proposal with scope, timeline, deliverables, and a fixed price. No surprises.",
                },
              ].map((s) => (
                 <div key={s.step} className="rounded-sm border border-hairline bg-card card-subtle p-8 card-hover">
                  <div className="label-mono text-copper">{s.step}</div>
                  <h3 className="mt-4 font-serif text-xl text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm text-steel">{s.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* FAQs */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="04" label="Questions" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Frequently asked.
            </h2>
            <div className="mt-12 space-y-6">
              {faqs.map((f) => (
                 <div key={f.q} className="rounded-sm border border-hairline bg-card card-subtle p-6 card-hover md:p-8">
                  <h3 className="font-serif text-lg text-ink">{f.q}</h3>
                  <p className="mt-3 text-sm text-steel">{f.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
        <section className="bg-ink text-paper">
          <Container className="py-20 md:py-28">
            <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
              Ready to scope your deployment?
            </h2>
            <p className="mt-6 max-w-xl text-paper/70 md:text-lg">
              Book a 30-minute briefing. We will map your constraints and deliver
              a fixed-fee proposal within 48 hours.
            </p>
            <div className="mt-8">
              <CopperButton href="/contact">
                Book a briefing
              </CopperButton>
            </div>
          </Container>
        </section>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
