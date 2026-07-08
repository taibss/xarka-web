import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Briefing | Xarka" },
      {
        name: "description",
        content:
          "Book a 30-minute briefing with our team. We will map your data sources, deployment constraints, compliance needs, and the first workflow Xarka can take from knowledge to action.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        {/* Hero */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="Contact" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              See where Xarka fits inside your organization.
            </h1>
            <p className="mt-6 max-w-2xl text-steel md:text-lg">
              Book a 30-minute briefing with our team. We will map your data sources,
              deployment constraints, compliance needs, and the first workflow Xarka can take
              from knowledge to action.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* Scheduler embed placeholder */}
        <ScrollReveal>
        <section className="border-b border-hairline bg-paper-soft">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="02" label="Schedule" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-ink md:text-5xl">
              Book a briefing
            </h2>
             <div className="mt-12 rounded-sm border-2 border-dashed border-hairline bg-card p-12 card-hover md:p-20">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="label-mono text-copper">Scheduler</div>
                <p className="mt-4 max-w-md font-serif text-xl text-ink">
                  [Calendly / Cal.com embed goes here]
                </p>
                <p className="mt-2 text-sm text-steel">
                  30-minute working session — your scenario, your data sources, your deployment constraints.
                </p>
              </div>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Secondary CTA */}
        <ScrollReveal>
        <section className="border-b border-hairline">
          <Container className="py-16 md:py-20">
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-3 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                Download capability overview <span aria-hidden>→</span>
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
