import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
  async redirects() {
    return [
      // Nextra serves the introduction at "/"; keep the old path working.
      { source: "/introduction", destination: "/", permanent: true },
      // "api" is a reserved Next.js pages dir, so API docs live under
      // /api-reference — keep the old /api/* URLs working.
      {
        source: "/api/:slug",
        destination: "/api-reference/:slug",
        permanent: true,
      },
      // Legacy config page slugs (carried over from the Mintlify docs.json).
      {
        source: "/configuration/sigilix-yaml",
        destination: "/configuration/configuration-reference",
        permanent: true,
      },
      {
        source: "/configuration/custom-rules",
        destination: "/configuration/rules-and-guidance",
        permanent: true,
      },
      {
        source: "/configuration/ignore-patterns",
        destination: "/configuration/path-filters-and-profile",
        permanent: true,
      },
      // Models moved out of Configuration into its own section.
      {
        source: "/configuration/models-and-usage",
        destination: "/models",
        permanent: true,
      },
      // Rate limits moved under the new Usage & Limits section.
      {
        source: "/configuration/rate-limits",
        destination: "/usage-and-limits/pr-review-rate-limits",
        permanent: true,
      },
    ];
  },
});
