import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";
import { ConstellationCanvas } from "../components/ConstellationCanvas";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Xarka" },
      {
        name: "description",
        content:
          "POV essays, build notes, and benchmarks from the team building sovereign AI systems for Indian enterprise.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const posts = [
    {
      type: "POV",
      t: "Why enterprise AI pilots fail in India",
      d: "The real reasons cost, compliance, and data silos kill AI projects before they start — and what to do instead.",
      date: "July 2026",
      readTime: "8 min read",
    },
    {
      type: "Build note",
      t: "How we built LawgicHub's multi-agent reasoning stack",
      d: "Engineering-honest walkthrough of citation-grounded AI for Indian legal research — from corpus ingestion to multi-agent validation.",
      date: "June 2026",
      readTime: "12 min read",
    },
    {
      type: "POV",
      t: "Sovereign AI is not a feature — it's a deployment model",
      d: "Why on-prem and air-gapped deployment must be architectural decisions, not marketing checkboxes.",
      date: "June 2026",
      readTime: "6 min read",
    },
    {
      type: "Benchmark",
      t: "What on-prem LLM inference really costs in India",
      d: "Real numbers: hardware, ops, and total cost of ownership for running private LLMs at Indian enterprise scale.",
      date: "May 2026",
      readTime: "10 min read",
    },
    {
      type: "Build note",
      t: "Edge inference on existing CCTV — no new hardware",
      d: "How we deploy vision AI on legacy camera infrastructure without rip-and-replace.",
      date: "May 2026",
      readTime: "7 min read",
    },
    {
      type: "POV",
      t: "The case for India-built AI infrastructure",
      d: "Why Indian enterprises and government need AI systems built for local regulation, pricing, and operational realities.",
      date: "April 2026",
      readTime: "5 min read",
    },
  ];

  const typeColors: Record<string, string> = {
    POV: "text-copper",
    "Build note": "text-white/60",
    Benchmark: "text-copper-deep",
  };

  return (
    <div className="min-h-screen bg-[#060d15] text-white">
      <Nav />
      <main>
        {/* Hero */}
        <ScrollReveal>
        <section className="hero-dark relative overflow-hidden border-b border-white/10">
          <ConstellationCanvas sparse />
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="Insights" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              From the front lines.
            </h1>
            <p className="mt-6 max-w-2xl text-white/60 md:text-lg">
              POV essays, build notes, and benchmarks from the team building sovereign AI
              systems for Indian enterprise. No marketing fluff — just what we're learning.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* Posts */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-white/5">
          <Container className="py-20 md:py-28">
            <div className="space-y-4">
              {posts.map((p) => (
                <article
                  key={p.t}
                  className={`group flex flex-col gap-4 rounded-sm border border-white/10 bg-white/5 card-subtle p-6 card-hover transition-colors hover:border-copper md:flex-row md:items-start md:p-8 ${
                    p.type === "POV" ? "border-t-2 border-t-copper" : p.type === "Build note" ? "border-t-2 border-t-white/60" : "border-t-2 border-t-ink"
                  }`}
                >
                  <div className="md:w-48 shrink-0">
                    <div className={`label-mono ${typeColors[p.type] || "text-white/60"}`}>
                      {p.type}
                    </div>
                    <div className="label-mono mt-2 text-white/60">{p.date}</div>
                    <div className="label-mono text-white/60">{p.readTime}</div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-xl text-white group-hover:text-copper transition-colors md:text-2xl">
                      {p.t}
                    </h2>
                    <p className="mt-2 text-sm text-white/60 md:text-base">{p.d}</p>
                    <a
                      href="#"
                      className="label-mono mt-4 inline-flex items-center gap-2 text-copper hover:text-copper-deep"
                    >
                      Read <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
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
              Want to discuss what you read?
            </h2>
            <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
              Book a 30-minute briefing. We will map your data sources, deployment constraints,
              compliance needs, and the first workflow Xarka can take from knowledge to action.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
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
