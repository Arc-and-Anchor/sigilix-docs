import type { ReactNode } from "react";

/**
 * Non-navigational card grid. Mirrors the look of Nextra's <Cards> but renders
 * plain <div>s (not <Link>s) — used for feature/summary cards that have no
 * destination, avoiding dead `href="#"` anchors.
 */
export function FeatureCards({ children }: { children: ReactNode }) {
  return <div className="sig-feature-cards _not-prose">{children}</div>;
}

export function FeatureCard({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="sig-feature-card">
      <p className="sig-feature-card-title">{title}</p>
      {children ? <div className="sig-feature-card-body">{children}</div> : null}
    </div>
  );
}
