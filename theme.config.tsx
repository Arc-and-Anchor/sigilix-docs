import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { DocsCta, DocsMain } from "@/components/DocsShell";

// Brand mark — traced isometric S-hexagon, inline so it always renders white
// on the dark docs skin (currentColor → the logo text color).
const SigilixMark = () => (
  <span className="sig-docs-logo">
    <svg
      viewBox="0 0 1254 1254"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      aria-hidden="true"
      style={{ color: "#ffffff", flexShrink: 0 }}
    >
      <g
        transform="translate(0.000000,1254.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M5479 9567 c-431 -266 -944 -583 -1139 -704 -195 -121 -435 -268 -532 -328 l-178 -108 0 -759 0 -758 83 -54 c144 -95 1011 -656 1337 -866 173 -111 410 -264 525 -338 116 -75 307 -198 425 -275 179 -116 218 -138 237 -131 32 13 762 498 763 507 0 4 -26 24 -57 44 -32 20 -204 132 -383 248 -179 116 -461 298 -628 405 -166 107 -434 280 -595 384 -290 187 -631 406 -675 433 -37 23 -79 98 -97 174 -13 54 -16 100 -13 202 4 118 7 138 31 189 44 90 -24 44 917 623 639 393 775 475 788 475 21 0 523 -307 1857 -1135 533 -331 766 -475 770 -475 3 0 5 254 5 564 l0 564 -232 145 c-128 80 -321 199 -428 264 -107 66 -316 196 -465 288 -281 175 -1275 785 -1403 861 -41 24 -86 44 -101 44 -19 0 -279 -155 -812 -483z M5840 7870 c-239 -149 -438 -270 -442 -270 -26 0 7 -27 125 -101 72 -45 213 -135 312 -199 99 -64 261 -168 360 -232 452 -289 1181 -759 1493 -962 l102 -66 -1 -278 c0 -196 -4 -287 -13 -312 -11 -30 -46 -57 -252 -195 -131 -88 -462 -311 -734 -495 -272 -184 -501 -334 -510 -334 -17 0 -54 24 -840 544 -669 442 -844 557 -1150 755 -530 343 -643 415 -651 415 -5 0 -9 -253 -9 -563 l0 -563 33 -19 c121 -71 1359 -878 2189 -1427 l436 -289 684 452 c852 564 1803 1192 1885 1244 l63 40 0 725 0 725 -332 210 c-183 116 -405 257 -493 314 -88 57 -293 188 -455 291 -162 103 -533 339 -824 524 -290 185 -531 336 -535 336 -3 -1 -202 -122 -441 -270z" />
      </g>
    </svg>
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
