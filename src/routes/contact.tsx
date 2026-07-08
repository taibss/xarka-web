import { createFileRoute } from "@tanstack/react-router";
import { ConstellationCanvas } from "../components/ConstellationCanvas";
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
    <div className="min-h-screen bg-[#060d15] text-white">
      <Nav />
      <main>
        {/* Hero */}
        <ScrollReveal>
        <section className="hero-dark relative overflow-hidden border-b border-white/10">
          <ConstellationCanvas sparse />
          <Container className="py-16 md:py-24">
            <SectionEyebrow index="01" label="Contact" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              See where Xarka fits inside your organization.
            </h1>
            <p className="mt-6 max-w-2xl text-white/60 md:text-lg">
              Book a 30-minute briefing with our team. We will map your data sources,
              deployment constraints, compliance needs, and the first workflow Xarka can take
              from knowledge to action.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* Scheduler embed placeholder */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-white/5">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="02" label="Schedule" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
              Book a briefing
            </h2>
             <div className="mt-12 rounded-sm border-2 border-dashed border-white/10 bg-white/5 p-12 card-hover md:p-20">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="label-mono text-copper">Scheduler</div>
                <p className="mt-4 max-w-md font-serif text-xl text-white">
                  [Calendly / Cal.com embed goes here]
                </p>
                <p className="mt-2 text-sm text-white/60">
                  30-minute working session — your scenario, your data sources, your deployment constraints.
                </p>
              </div>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Secondary CTA */}
        <ScrollReveal>
        <section className="border-b border-white/10">
          <Container className="py-16 md:py-20">
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-3 text-sm font-medium text-white hover:bg-ink hover:text-paper transition-colors"
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
