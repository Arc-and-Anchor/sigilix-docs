# sigilix-docs

Documentation for **Sigilix** — multi-agent AI code review for GitHub.

> *The mark of merge-ready code.*

**Live at:** [docs.sigilix.ai](https://docs.sigilix.ai)
**Marketing site:** [sigilix.ai](https://sigilix.ai)
**Product repo:** [Arc-and-Anchor/sigilix](https://github.com/Arc-and-Anchor/sigilix)

## Stack

- [Mintlify](https://mintlify.com) — docs platform (free tier; same as CodeRabbit, Greptile)
- MDX content in this repo
- Theme matches the Sigilix marketing site (Seal Crimson `#C6234A` accent on dark canvas)

## Local dev

```bash
npm i -g mintlify
mintlify dev
```

Mintlify reads `docs.json` for site config and walks the MDX files referenced in the `navigation` array.

## Structure

```
docs.json                        # site config + navigation
introduction.mdx                 # /
getting-started/                 # quickstart, installation, first-review
how-it-works/                    # ensemble, specialists, synthesizer, lifecycle, scoring
configuration/                   # sigilix-yaml, ignore-patterns, custom-rules, rate-limits
integrations/                    # github (deep), gitlab + bitbucket (roadmap stubs)
api/                             # authentication, endpoints, webhooks (private beta)
troubleshooting/                 # common-errors, billing
logo/                            # brand assets
```

## Deployment

1. [Sign in to Mintlify](https://dashboard.mintlify.com) with GitHub
2. Connect this repo
3. Mintlify auto-deploys on every push to main
4. Configure the custom domain `docs.sigilix.ai` in Mintlify dashboard → Settings → Custom Domains
5. Add the CNAME record Mintlify provides at your DNS provider (Vercel, since the apex is on Vercel)

## License

All Rights Reserved · Arc and Anchor 2026
