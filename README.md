# sigilix-docs

Documentation for **Sigilix** — multi-agent AI code review for GitHub.

> *The mark of merge-ready code.*

**Live at:** [docs.sigilix.ai](https://docs.sigilix.ai)
**Marketing site:** [sigilix.ai](https://sigilix.ai)
**App:** [app.sigilix.ai](https://app.sigilix.ai)

## Stack

- [Nextra v3](https://nextra.site) + `nextra-theme-docs` — a Next.js 14 (pages router) docs framework (MIT, self-hosted)
- MDX content in `pages/`
- `_meta.js` files define section navigation + ordering
- Theme: `theme.config.tsx` — Sigilix "S" mark, brand-red accent (`#f1140d`), dark by default

We migrated off Mintlify (whose free tier limits us to one hosted site, and which mis-attributed the project) to a self-hosted Nextra app on Vercel — the same Next.js stack as the rest of the Sigilix ecosystem.

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also the CI gate)
```

## Structure

```
next.config.mjs                  # Nextra wiring + legacy redirects
theme.config.tsx                 # logo, colors, nav, footer, SEO head
styles/globals.css               # theme tweaks layered on nextra-theme-docs
pages/
  _app.tsx                       # imports theme + global styles
  _meta.js                       # top-level nav (sections + separators)
  index.mdx                      # / (Introduction)
  getting-started/               # quickstart, installation, first-review
  how-it-works/                  # ensemble, dispatcher, specialists, pipeline, ...
  triage/                        # overview, issue, ci-failure, how-triage-works
  evidence-and-provenance/       # secrets, deps, SARIF, provenance
  integrations/                  # github, gitlab, bitbucket
  cli-and-chat/                  # CLI & Deep-Research Chat
  slack-assistant/               # Slack assistant
  configuration/                 # sigilix.json reference, rules, filters, ...
  operations-and-releases/       # release notes, known issues, durable objects
  troubleshooting/               # common errors, billing
  api-reference/                 # authentication, endpoints, webhooks
public/logo/                     # served brand assets (favicon + glyphs)
logo/                            # source brand assets
```

> `pages/api-reference/` is served instead of `pages/api/` because `pages/api` is
> a reserved Next.js directory. `next.config.mjs` redirects the old `/api/*` URLs.

## Adding a page

1. Create `pages/<section>/<slug>.mdx` with frontmatter:
   ```mdx
   ---
   title: "My new page"
   description: "One-line description used for SEO."
   ---

   # My new page
   ```
2. Add the slug to the section's `_meta.js` (order = nav order):
   ```js
   export default {
     existing: "Existing page",
     "my-slug": "My new page",
   }
   ```
3. Build to verify: `npm run build`

Available MDX components (import from `nextra/components`): `Callout`, `Steps`,
`Tabs` (`<Tabs items={[...]}><Tabs.Tab>…</Tabs.Tab></Tabs>`), `Cards`
(`<Cards><Cards.Card title href>…</Cards.Card></Cards>`). Accordions are plain
`<details><summary>…</summary></details>`.

## Deployment (Vercel)

This is a standard Next.js app — deploy on Vercel:

1. Import `Sigilix/sigilix-docs` as a new Vercel project (framework preset: **Next.js**; build `next build`, output handled automatically).
2. Add the custom domain `docs.sigilix.ai` to the project and point DNS at Vercel (repoint the `docs` CNAME away from Mintlify).
3. Vercel auto-deploys on every push to the default branch.
4. Delete the old Mintlify project once the domain has cut over.

## License

All Rights Reserved · Sigilix 2026
