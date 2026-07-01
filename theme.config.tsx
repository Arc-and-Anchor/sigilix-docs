import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const SigilixMark = () => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
    <img
      src="/logo/sigil-favicon.png"
      alt=""
      aria-hidden="true"
      width={24}
      height={24}
      style={{ borderRadius: 6, display: "block" }}
    />
    <span style={{ fontWeight: 600, fontSize: 18, letterSpacing: "-0.01em" }}>
      Sigilix
    </span>
    <span
      style={{
        fontFamily: "ui-monospace, SFMono-Regular, JetBrains Mono, Menlo, monospace",
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        opacity: 0.6,
        marginLeft: 4,
      }}
    >
      Docs
    </span>
  </span>
);

function DocsHead() {
  const { frontMatter, title: pageTitle } = useConfig();
  const description =
    frontMatter.description ??
    "Documentation for Sigilix — the AI code review, triage, and Slack assistant platform. Setup, configuration, how it works, and troubleshooting.";
  const title =
    pageTitle === "Introduction" ? "Sigilix Docs" : `${pageTitle} - Sigilix Docs`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sigilix Docs" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" type="image/png" href="/logo/sigil-favicon.png" />
      <link rel="apple-touch-icon" href="/logo/sigil-favicon.png" />
      <meta name="theme-color" content="#f1140d" />
    </>
  );
}

const config: DocsThemeConfig = {
  logo: <SigilixMark />,
  project: {
    link: "https://github.com/Sigilix/sigilix-docs",
  },
  docsRepositoryBase: "https://github.com/Sigilix/sigilix-docs/blob/main",
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()} Sigilix ·{" "}
        <a
          href="https://sigilix.ai"
          target="_blank"
          rel="noreferrer"
          style={{ borderBottom: "1px solid currentColor" }}
        >
          sigilix.ai
        </a>
      </span>
    ),
  },
  color: {
    hue: 2,
    saturation: 90,
  },
  search: {
    placeholder: "Search docs…",
  },
  toc: {
    backToTop: true,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  head: DocsHead,
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
};

export default config;
