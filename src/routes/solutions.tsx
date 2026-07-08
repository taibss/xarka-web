import { createFileRoute, Link } from "@tanstack/react-router";
import { ConstellationCanvas } from "../components/ConstellationCanvas";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { CopperButton } from "../components/CopperButton";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";
import { IconScale, IconBuilding, IconFactory, IconDrawing, IconWrench, IconZap } from "../components/Icons";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Xarka" },
      {
        name: "description",
        content:
          "Xarka deploys sovereign AI systems for organizations that need production-grade intelligence with full compliance and data control.",
      },
    ],
  }),
  component: SolutionsPage,
});

const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Legal Operations": IconScale,
  "Infrastructure & Public Sector": IconBuilding,
  "Manufacturing & Plants": IconFactory,
  "Construction & Projects": IconDrawing,
  "Engineering & ER&D": IconWrench,
  "Energy / Hydrocarbon / Defence": IconZap,
};

function SolutionsPage() {
  const industries = [
    {
      t: "Legal Operations",
      d: "Research, drafting, review, translation, matter intelligence, court workflows.",
      use: ["Case law research", "Contract drafting", "Document review", "Translation", "Matter management"],
      cta: "Explore LawgicHub",
      href: "/lawgichub",
    },
    {
      t: "Infrastructure & Public Sector",
      d: "CCTV intelligence, asset monitoring, citizen-service workflows, incident response, document automation.",
      use: ["Traffic/road monitoring", "CCTV analytics", "Asset maintenance", "Incident detection", "Public grievance workflows", "Project progress monitoring", "Document automation"],
      cta: "Explore infrastructure AI",
      href: "/contact",
    },
    {
      t: "Manufacturing & Plants",
      d: "Vision QA, predictive maintenance, production intelligence, equipment health, safety monitoring.",
      use: ["Vision QA", "Predictive maintenance", "Equipment health", "Shift intelligence", "Safety compliance", "Maintenance planning"],
      cta: "Explore manufacturing AI",
      href: "/contact",
    },
    {
      t: "Construction & Projects",
      d: "Progress tracking, PPE compliance, site visibility, schedule risk, document intelligence over drawings and reports.",
      use: ["PPE detection", "Site progress monitoring", "Occupancy and flow", "Delay risk", "Drawing/spec search", "Contractor documentation", "Safety reporting"],
      cta: "Explore construction AI",
      href: "/contact",
    },
    {
      t: "Engineering & ER&D",
      d: "Document intelligence over drawings, P&IDs, specifications, test reports, and design history.",
      use: ["Drawing intelligence", "P&ID search", "Specification extraction", "Test report analysis", "Design history review"],
      cta: "Explore engineering AI",
      href: "/contact",
    },
    {
      t: "Energy / Hydrocarbon / Defence",
      d: "Sovereign, private, air-gapped intelligence systems for sensitive operating environments.",
      use: ["Sovereign deployment", "Air-gapped systems", "Private models", "No external calls", "Full audit trails"],
      cta: "Discuss secure deployment",
      href: "/sovereign-ai",
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
            <SectionEyebrow index="01" label="Solutions" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              Intelligence systems for regulated industries.
            </h1>
            <p className="mt-6 max-w-2xl text-white/60 md:text-lg">
              Xarka deploys sovereign AI systems for organizations that need production-grade
              intelligence with full compliance and data control.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* Industry cards */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-white/5">
          <Container className="py-20 md:py-28">
            <div className="space-y-12">
              {industries.map((ind, i) => {
                const Icon = industryIcons[ind.t];
                return (
                   <article key={ind.t} className="rounded-sm border border-l-2 border-l-copper/30 border-white/10 bg-white/5 card-subtle p-8 card-hover transition-all hover:border-l-copper hover:border-copper">
                     <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                       <div>
                         <div className="flex items-center gap-3">
                           {Icon && <Icon className="card-icon h-5 w-5 text-copper" />}
                          <div className="label-mono text-copper">0{i + 1}</div>
                        </div>
                         <h2 className="mt-3 font-serif text-2xl text-white md:text-3xl">{ind.t}</h2>
                         <p className="mt-3 text-sm text-white/60">{ind.d}</p>
                        <div className="mt-6">
                          <div className="label-mono">Use cases</div>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {ind.use.map((u) => (
                              <li key={u} className="rounded-sm border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white">
                                {u}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-start">
                        {ind.href.startsWith("/") ? (
                          <Link
                            to={ind.href}
                            className="label-mono inline-flex items-center gap-2 text-copper hover:text-copper-deep"
                          >
                            {ind.cta} <span aria-hidden>→</span>
                          </Link>
                        ) : (
                          <a
                            href={ind.href}
                            className="label-mono inline-flex items-center gap-2 text-copper hover:text-copper-deep"
                          >
                            {ind.cta} <span aria-hidden>→</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-ink text-white">
          <Container className="py-24 md:py-32">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Book an industry briefing.
            </h2>
            <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
              A 30-minute working session where we map your data sources, compliance requirements,
              and the first workflow Xarka can take from knowledge to action.
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
