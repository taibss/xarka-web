import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../../components/Container";
import { SectionEyebrow } from "../../components/SectionEyebrow";
import { CopperButton } from "../../components/CopperButton";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ScrollReveal } from "../../components/ScrollReveal";

export const Route = createFileRoute("/solutions/legal")({
  head: () => ({
    meta: [
      { title: "Legal Operations | Xarka Solutions" },
      {
        name: "description",
        content:
          "Legal teams spend hours on research, drafting, and document review. LawgicHub turns Indian legal documents into an intelligent, citation-grounded workspace.",
      },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  const useCases = [
    {
      t: "Case law research",
      d: "Query Indian case law with source-linked answers and citation support.",
    },
    {
      t: "Legal drafting",
      d: "Generate petitions, notices, affidavits, contracts, and internal memos with review workflows.",
    },
    {
      t: "Document review",
      d: "Summarize, compare, and extract key clauses from legal files at scale.",
    },
    {
      t: "Translation",
      d: "Translate legal documents between English and Indian languages with legal accuracy.",
    },
    {
      t: "Matter intelligence",
      d: "Organize documents, research, and drafts by matter — with full version history.",
    },
    {
      t: "Court & citation alerts",
      d: "Get notified when cited cases are updated, distinguished, or overruled.",
    },
  ];

  const outcomes = [
    "Faster research",
    "Consistent drafting",
    "Lower review cost",
    "Better document control",
    "Audit-ready workflows",
  ];

  return (
    <div className="min-h-screen bg-[#060d15] text-white">
      <Nav />
      <main>
        <ScrollReveal>
          <section className="border-b border-white/5">
            <Container className="py-16 md:py-24">
              <SectionEyebrow index="01" label="Legal Operations" />
              <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
                Intelligence for legal research, drafting, and review.
              </h1>
              <p className="mt-6 max-w-2xl text-white/50 md:text-lg">
                Legal teams spend hours on research, drafting, and document review. LawgicHub —
                Xarka's flagship product — turns Indian legal documents into an intelligent,
                citation-grounded workspace.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CopperButton href="https://lawgichub.com">Start free on LawgicHub</CopperButton>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-3 text-sm font-medium text-white hover:bg-[#0a1628] hover:text-white transition-colors"
                >
                  Book law firm demo <span aria-hidden>→</span>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Law firms", "Solo practitioners", "Corporate legal", "Prosecutors"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="label-mono rounded-sm border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-white/50"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </Container>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-white/[0.06] bg-white/[0.02]">
            <Container className="py-20 md:py-28">
              <SectionEyebrow index="02" label="Use cases" />
              <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
                What LawgicHub does.
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
              <SectionEyebrow index="04" label="Proof" />
              <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
                LawgicHub is the proof.
              </h2>
              <p className="mt-6 max-w-2xl text-white/50 md:text-lg">
                10,000+ active lawyers. 9L+ judgments. India's first ISO 42001-certified legal AI.
                Launched Feb 2026 and scaling.
              </p>
              <div className="mt-8">
                <a
                  href="/lawgichub"
                  className="label-mono inline-flex items-center gap-2 text-copper hover:text-copper-light"
                >
                  Read the full LawgicHub story <span aria-hidden>→</span>
                </a>
              </div>
            </Container>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-white/[0.06] bg-[#0a1628] text-white">
            <Container className="py-24 md:py-32">
              <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Ready to transform your legal workflow?
              </h2>
              <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
                Start free on LawgicHub, or book a law firm demo to see how Xarka can deploy custom
                legal AI for your practice.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://lawgichub.com"
                  className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-white hover:bg-copper-light transition-colors"
                >
                  Start free <span aria-hidden>→</span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3.5 text-sm font-medium text-white hover:bg-paper hover:text-white transition-colors"
                >
                  Book law firm demo <span aria-hidden>→</span>
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
