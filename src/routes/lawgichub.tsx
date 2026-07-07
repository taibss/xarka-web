import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { CopperButton } from "../components/CopperButton";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";

export const Route = createFileRoute("/lawgichub")({
  head: () => ({
    meta: [
      { title: "LawgicHub | Xarka" },
      {
        name: "description",
        content:
          "Legal intelligence for Indian lawyers and legal teams. Research, draft, review, translate, and manage legal documents with citation-grounded AI.",
      },
    ],
  }),
  component: LawgicHubPage,
});

function LawgicHubPage() {
  const features = [
    { t: "Case law research", d: "Query Indian case law with source-linked answers and citation support." },
    { t: "Drafting", d: "Generate petitions, notices, affidavits, contracts, and internal memos." },
    { t: "Document review", d: "Summarize, compare, and extract key clauses from legal files." },
    { t: "Translation", d: "Translate legal documents between English and Indian languages." },
    { t: "OCR", d: "Extract text from scanned judgments, orders, and handwritten notes." },
    { t: "Matter workspace", d: "Organize documents, research, and drafts by matter or case." },
    { t: "Court/citation alerts", d: "Get notified when cited cases are updated or overruled." },
  ];

  const trustPoints = [
    "Source-linked answers",
    "Indian case law corpus",
    "Legal drafting workflows",
    "Multi-agent review",
    "Document-level context",
    "Privacy controls",
  ];

  const personas = [
    {
      title: "Solo practitioners",
      desc: "Draft faster, research faster, translate documents, prepare matter notes.",
    },
    {
      title: "Law firms",
      desc: "Matter knowledge, document review, research memos, internal drafting consistency.",
    },
    {
      title: "Enterprises",
      desc: "Contract review, compliance notes, legal operations, audit trails.",
    },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Hero */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="LawgicHub" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              Legal intelligence for Indian lawyers and legal teams.
            </h1>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Research, draft, review, translate, and manage legal documents with
              citation-grounded AI built for Indian legal workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CopperButton href="https://lawgichub.com">Start free</CopperButton>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-3 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                Book law firm demo <span aria-hidden>→</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["citation-grounded", "source-linked", "review-first", "auditable", "context-aware"].map((tag) => (
                <span key={tag} className="label-mono rounded-sm border border-hairline bg-paper-soft px-2.5 py-1.5 text-steel">
                  {tag}
                </span>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Built for Indian legal work */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="02" label="Capabilities" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Built for Indian legal work
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.t} className="rounded-sm border border-hairline bg-card card-subtle p-6">
                  <h3 className="font-serif text-lg text-ink">{f.t}</h3>
                  <p className="mt-2 text-sm text-steel">{f.d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Why lawyers trust it */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="03" label="Trust" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Why lawyers trust it
            </h2>
            <div className="mt-12 flex flex-wrap gap-3">
              {trustPoints.map((t) => (
                <div key={t} className="rounded-sm border border-hairline bg-card card-subtle px-5 py-3 font-serif text-ink">
                  {t}
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Use cases by persona */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="04" label="Use cases" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              For every legal practice size
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {personas.map((p) => (
                <div key={p.title} className="rounded-sm border border-hairline bg-card card-subtle p-8">
                  <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm text-steel">{p.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Product proof */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="05" label="Proof" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Proof in production
            </h2>
            <div className="mt-8 rounded-sm border border-hairline bg-paper-soft p-6">
              <div className="aspect-[16/10] w-full rounded-sm bg-ink/5 flex items-center justify-center">
                <span className="label-mono text-steel/50">LawgicHub product screenshot</span>
              </div>
            </div>
            <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
              <div className="flex flex-col rounded-sm border border-hairline bg-card card-subtle p-8">
                <div className="label-mono text-copper">Live metrics</div>
                <div className="mt-6 flex-1 grid grid-cols-2 gap-6 content-start">
                  <div>
                    <div className="tabular font-serif text-3xl text-ink">10,000+</div>
                    <div className="label-mono mt-1">Active lawyers</div>
                  </div>
                  <div>
                    <div className="tabular font-serif text-3xl text-ink">9L+</div>
                    <div className="label-mono mt-1">Judgments</div>
                  </div>
                  <div>
                    <div className="tabular font-serif text-3xl text-ink">₹99</div>
                    <div className="label-mono mt-1">Entry price</div>
                  </div>
                  <div>
                    <div className="tabular font-serif text-3xl text-ink">Feb '26</div>
                    <div className="label-mono mt-1">Launch date</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-sm border border-hairline bg-card card-subtle p-8">
                <div className="label-mono text-copper">Certifications</div>
                <div className="mt-4 font-mono text-sm text-ink">
                  ISO 27001 · ISO 42001 · SOC 2 · DPDP · GDPR
                </div>
                <p className="mt-4 flex-1 text-sm text-steel">
                  India's first ISO 42001-certified legal AI platform.
                </p>
              </div>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-ink text-paper">
          <Container className="py-24 md:py-32">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Start using LawgicHub today.
            </h2>
            <p className="mt-6 max-w-2xl text-paper/70 md:text-lg">
              Start free, view pricing, or book a law firm demo. LawgicHub is built for
              Indian legal professionals who need citation-grounded AI they can trust.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://lawgichub.com"
                className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-paper hover:bg-copper-deep transition-colors"
              >
                Start free <span aria-hidden>→</span>
              </a>
              <a
                href="https://lawgichub.com/pricing"
                className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3.5 text-sm font-medium text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                View pricing <span aria-hidden>→</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3.5 text-sm font-medium text-paper hover:bg-paper hover:text-ink transition-colors"
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
