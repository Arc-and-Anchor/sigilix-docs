import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { DocsCta, DocsMain } from "@/components/DocsShell";

const SigilixMark = () => (
  <span className="sig-docs-logo">
    <img
      src="/logo/sigil-favicon.png"
      alt=""
      aria-hidden="true"
      width={24}
      height={24}
    />
    <span className="sig-docs-logo-word">Sigilix</span>
    <span className="sig-docs-logo-kicker">Docs</span>
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
      <meta name="theme-color" content="#000000" />
    </>
  );
}

const config: DocsThemeConfig = {
  logo: <SigilixMark />,
  project: {
    link: "https://github.com/Sigilix/sigilix-docs",
  },
  docsRepositoryBase: "https://github.com/Sigilix/sigilix-docs/blob/main",
  backgroundColor: {
    dark: "0,0,0",
    light: "0,0,0",
  },
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
    hue: {
      dark: 2,
      light: 2,
    },
    saturation: {
      dark: 88,
      light: 88,
    },
    lightness: {
      dark: 58,
      light: 58,
    },
  },
  navbar: {
    extraContent: <DocsCta />,
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
  main: DocsMain,
  head: DocsHead,
  // Hide the theme toggle while next-themes forces the dark docs skin.
  darkMode: false,
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark",
  },
};

export default config;
