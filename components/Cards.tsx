import NextLink from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * Navigational card grid.
 *
 * Replaces Nextra's <Cards> because Nextra 3's Cards.Card renders `children`
 * *before* the title span — its `children` slot is designed to hold a preview
 * image, not a description. Our docs use `children` as descriptive text, so the
 * upstream order puts the description above the title and leaves the
 * description unpadded (only the title span carries Nextra's padding).
 *
 * This renders title first, then the description body, with a single padding
 * box on the card itself. Visual style intentionally mirrors <FeatureCards>.
 */
export function Cards({ children }: { children: ReactNode }) {
  return <div className="sig-cards _not-prose">{children}</div>;
}

type CardProps = {
  title: string;
  href: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof NextLink>, "href" | "title">;

function Card({ title, href, children, ...props }: CardProps) {
  return (
    <NextLink href={href} className="nextra-focus sig-card" {...props}>
      <span className="sig-card-title">{title}</span>
      {children ? <div className="sig-card-body">{children}</div> : null}
    </NextLink>
  );
}

Cards.displayName = "Cards";
Cards.Card = Card;
