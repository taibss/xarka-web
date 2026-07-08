import { Link } from "@tanstack/react-router";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#060D15" }}>
      <Container className="grid gap-10 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-white/[0.06] bg-white/[0.05] p-2">
              <img src="/xarka-icon-logo.png" alt="Xarka" className="h-7 w-7" />
            </span>
            <span className="font-semibold tracking-tight text-white">Xarka</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-white/50">
            A sovereign platform for connecting enterprise knowledge sources to reasoning,
            prediction, and controlled action. Built in India, deployed on your terms.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["ISO 27001", "ISO 42001", "SOC 2", "DPDP", "GDPR"].map((c) => (
              <span
                key={c}
                className="label-mono rounded-sm border border-white/[0.06] px-2 py-1 text-[10px] text-white/50"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="label-mono">Platform</div>
          <ul className="mt-4 space-y-2 text-sm text-white">
            <li>
              <Link to="/platform" className="hover:text-copper transition-colors">
                Intelligence Layer
              </Link>
            </li>
            <li>
              <Link to="/platform" className="hover:text-copper transition-colors">
                Inference
              </Link>
            </li>
            <li>
              <Link to="/platform" className="hover:text-copper transition-colors">
                Managed Workflows
              </Link>
            </li>
            <li>
              <Link to="/platform" className="hover:text-copper transition-colors">
                Build · Operate · Transfer
              </Link>
            </li>
            <li>
              <Link to="/sovereign-ai" className="hover:text-copper transition-colors">
                Sovereign AI
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="label-mono">Solutions</div>
          <ul className="mt-4 space-y-2 text-sm text-white">
            <li>
              <Link to="/solutions" className="hover:text-copper transition-colors">
                Legal Operations
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-copper transition-colors">
                Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-copper transition-colors">
                Manufacturing
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-copper transition-colors">
                Construction
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-copper transition-colors">
                Engineering
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-copper transition-colors">
                Energy / Defence
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="label-mono">Company</div>
          <ul className="mt-4 space-y-2 text-sm text-white">
            <li>
              <Link to="/company" className="hover:text-copper transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/insights" className="hover:text-copper transition-colors">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/lawgichub" className="hover:text-copper transition-colors">
                LawgicHub
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-copper transition-colors">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/trust" className="hover:text-copper transition-colors">
                Trust
              </Link>
            </li>
            <li>
              <Link to="/company" className="hover:text-copper transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-copper transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/[0.06]">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-6 label-mono">
          <span>© {new Date().getFullYear()} Xarka</span>
          <span>Built in India · Deployed on your terms</span>
        </Container>
      </div>
    </footer>
  );
}
