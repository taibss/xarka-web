import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../../components/Container";
import { SectionEyebrow } from "../../components/SectionEyebrow";
import { CopperButton } from "../../components/CopperButton";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ScrollReveal } from "../../components/ScrollReveal";

export const Route = createFileRoute("/solutions/construction")({
  head: () => ({
    meta: [
      { title: "Construction & Projects | Xarka Solutions" },
      {
        name: "description",
        content:
          "Site intelligence for construction and project teams. Turn camera feeds, progress photos, and safety reports into timely decisions.",
      },
    ],
  }),
  component: ConstructionPage,
});

function ConstructionPage() {
  const useCases = [
    {
      t: "PPE detection",
      d: "Real-time monitoring of helmet, vest, and safety gear compliance across sites.",
    },
    {
      t: "Site progress monitoring",
      d: "Track construction progress against BIM models and project schedules.",
    },
    {
      t: "Occupancy & flow",
      d: "Monitor worker density, traffic patterns, and zone utilisation for safety and efficiency.",
    },
    {
      t: "Delay risk",
      d: "Predict schedule slippage from site data, weather, and supply chain signals.",
    },
    {
      t: "Drawing & spec search",
      d: "Instant retrieval of relevant drawings, specifications, and change orders.",
    },
    {
      t: "Contractor documentation",
      d: "Automate compliance reports, daily logs, and material tracking.",
    },
    {
      t: "Safety reporting",
      d: "Automated incident detection, near-miss logging, and safety audit preparation.",
    },
  ];

  const outcomes = [
    "Fewer safety incidents",
    "Better schedule adherence",
    "Reduced rework",
    "Improved site visibility",
    "Faster document retrieval",
  ];

  return (
    <div className="min-h-screen bg-[#060d15] text-white">
      <Nav />
      <main>
        <ScrollReveal>
          <section className="border-b border-white/5">
            <Container className="py-16 md:py-24">
              <SectionEyebrow index="01" label="Construction" />
              <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
                Site intelligence for construction and project teams.
              </h1>
              <p className="mt-6 max-w-2xl text-white/50 md:text-lg">
                Construction sites generate enormous data — camera feeds, progress photos, safety
                reports, drawings, RFIs, and daily logs. Most of it never reaches a decision-maker
                in time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CopperButton href="/contact">Book industry briefing</CopperButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Real estate", "EPC", "Public works", "Infrastructure"].map((tag) => (
                  <span
                    key={tag}
                    className="label-mono rounded-sm border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-white/[0.06] bg-white/[0.02]">
            <Container className="py-20 md:py-28">
              <SectionEyebrow index="02" label="Use cases" />
              <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
                What Xarka builds for construction.
              </h2>
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {useCases.map((uc) => (
                  <div
                    key={uc.t}
                    className="rounded-sm border border-white/[0.06] bg-white/[0.03] card-subtle p-8 card-hover"
                  >
                    <h3 className="font-serif text-xl text-white">{uc.t}</h3>
                    <p className="mt-3 text-sm text-white/50">{uc.d}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-white/[0.06]">
            <Container className="py-20 md:py-28">
              <SectionEyebrow index="03" label="Outcomes" />
              <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
                What improves.
              </h2>
              <div className="mt-12 flex flex-wrap gap-3">
                {outcomes.map((o) => (
                  <div
                    key={o}
                    className="rounded-sm border border-white/[0.06] bg-white/[0.03] card-subtle px-6 py-4 font-serif text-lg text-white card-hover"
                  >
                    {o}
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-white/[0.06] bg-white/[0.02]">
            <Container className="py-20 md:py-28">
              <SectionEyebrow index="04" label="Deployment" />
              <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
                Edge-first, on your site.
              </h2>
              <p className="mt-6 max-w-2xl text-white/50 md:text-lg">
                Xarka deploys edge inference on existing site cameras and sensors. No new hardware.
                No cloud dependency. Works on remote sites with limited connectivity.
              </p>
            </Container>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-white/[0.06] bg-[#0a1628] text-white">
            <Container className="py-24 md:py-32">
              <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Ready to see Xarka on your site?
              </h2>
              <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
                Book a 30-minute briefing. We will map your data sources, deployment constraints,
                and the first workflow Xarka can take from knowledge to action.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CopperButton href="/contact">Book industry briefing</CopperButton>
                <a
                  href="/platform"
                  className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3.5 text-sm font-medium text-white hover:bg-paper hover:text-white transition-colors"
                >
                  See the platform <span aria-hidden>→</span>
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
