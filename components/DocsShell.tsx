import type { ReactNode } from "react";

export function DocsMain({ children }: { children: ReactNode }) {
  return <div className="sig-docs-main">{children}</div>;
}

export function DocsCta() {
  return (
    <a
      className="sig-docs-nav-cta"
      href="https://app.sigilix.ai/login?intent=trial&plan=pro"
    >
      Start free trial
    </a>
  );
}
