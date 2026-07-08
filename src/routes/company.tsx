import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";
import { IconPeople } from "../components/Icons";
import { ConstellationCanvas } from "../components/ConstellationCanvas";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company | Xarka" },
      {
        name: "description",
        content:
          "Xarka builds sovereign intelligence systems for organizations operating in regulated, high-stakes environments. Built in India, deployed on your terms.",
      },
    ],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  const team = [
    {
      name: "Rajat Gupta",
      title: "Founder / Co-founder, Systems & Product",
      bio: "Leads product strategy, systems architecture, and the translation of Xarka's AI capabilities into deployable platforms across legal, infrastructure, and regulated enterprise environments.",
    },
    {
      name: "Rishi Gupta",
      title: "Founder / Director, Commercial & Partnerships",
      bio: "Leads enterprise partnerships, legal-market strategy, government relationships, and commercial deployment.",
    },
    {
      name: "Sharad Sankaran",
      title: "Director, Engineering & Architecture",
      bio: "Leads product architecture, engineering execution, and production delivery across Xarka systems.",
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
            <SectionEyebrow index="01" label="Company" />
            <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              Xarka
            </h1>
            <p className="mt-6 max-w-2xl text-white/60 md:text-lg">
              Xarka builds sovereign intelligence systems for organizations operating in
              regulated, high-stakes environments. Built in India, deployed on your terms.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* Mission */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-white/5">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="02" label="Mission" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
              Why we exist
            </h2>
            <p className="mt-6 max-w-2xl text-white/60 md:text-lg">
              India needs AI infrastructure that is private, deployable, auditable, and built for local
              legal, industrial, and public-sector realities. Xarka builds sovereign intelligence
              systems for organizations operating in regulated, high-stakes environments.
            </p>
          </Container>
        </section>
        </ScrollReveal>

        {/* Leadership */}
        <ScrollReveal>
        <section className="border-b border-white/10">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="03" label="Leadership" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
              Leadership
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {team.map((t) => (
               <div key={t.name} className="rounded-sm border border-white/10 bg-white/5 card-subtle p-8 card-hover">
                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
                     <IconPeople className="card-icon h-6 w-6 text-white" />
                 </div>
                  <h3 className="mt-4 font-serif text-xl text-white">{t.name}</h3>
                  <div className="label-mono mt-2 text-copper">{t.title}</div>
                  <p className="mt-4 text-sm text-white/60">{t.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Details */}
        <ScrollReveal>
        <section className="border-b border-white/10 bg-white/5">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="04" label="Details" />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <div className="label-mono">Headquarters</div>
                <p className="mt-2 text-white">Mumbai, India</p>
              </div>
              <div>
                <div className="label-mono">Focus</div>
                <p className="mt-2 text-white">Sovereign AI systems for regulated enterprises</p>
              </div>
              <div>
                <div className="label-mono">Flagship product</div>
                <p className="mt-2 text-white">LawgicHub — India's first ISO 42001-certified legal AI</p>
              </div>
              <div>
                <div className="label-mono">Contact</div>
                <p className="mt-2 text-white">
                  <a href="mailto:hello@xarka.in" className="hover:text-copper transition-colors">hello@xarka.in</a>
                </p>
              </div>
            </div>
          </Container>
        </section>
        </ScrollReveal>

        {/* Careers */}
        <ScrollReveal>
        <section className="border-b border-white/10">
          <Container className="py-20 md:py-28">
            <SectionEyebrow index="05" label="Careers" />
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-white md:text-5xl">
              Careers
            </h2>
            <p className="mt-6 max-w-2xl text-white/60 md:text-lg">
              We are building sovereign AI infrastructure for India's most important sectors.
              If you want to work on production AI systems that ship, not slide decks, get in touch.
            </p>
            <div className="mt-8">
              <a
                href="mailto:careers@xarka.in"
                className="inline-flex items-center gap-2 rounded-sm bg-copper px-5 py-3 text-sm font-medium text-white hover:bg-copper-deep transition-colors"
              >
                Get in touch <span aria-hidden>→</span>
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
