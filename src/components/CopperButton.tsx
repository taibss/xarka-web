import { Link } from "@tanstack/react-router";

export function CopperButton({
  children,
  href = "#book",
  variant = "solid",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-copper text-paper hover:bg-copper-deep"
      : "border border-white/20 text-white/70 hover:bg-white/10 hover:text-white";

  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link to={href} className={`${base} ${styles}`}>
        {children}
        <span aria-hidden>→</span>
      </Link>
    );
  }

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}
