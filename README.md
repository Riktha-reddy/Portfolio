# Portfolio

Personal portfolio — UI/UX case studies and code projects. Built with TanStack Start (React, SSR), Tailwind CSS v4, shadcn/radix components, and deployed to Cloudflare Workers.

## Stack

- **Framework:** TanStack Start (React + Vite + SSR)
- **Styling:** Tailwind CSS v4, shadcn/ui components
- **Animation:** Motion (Framer Motion)
- **Backend (scaffolded, currently unused):** Supabase — see "About the Supabase setup" below
- **Hosting:** Cloudflare Workers

## Setup

```bash
npm install
```

Copy `.env.example`-style values into a `.env` file in the project root (see `.env` — the keys are already there, just don't commit changes to it; it's gitignored now):

```
SUPABASE_PUBLISHABLE_KEY=...
SUPABASE_URL=...
VITE_SUPABASE_PROJECT_ID=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_URL=...
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (Cloudflare Workers, free tier)

1. `npx wrangler login` — opens a browser tab to authorize the CLI against your (free) Cloudflare account.
2. Set secrets Cloudflare needs at runtime:
   ```bash
   npx wrangler secret put SUPABASE_URL
   npx wrangler secret put SUPABASE_PUBLISHABLE_KEY
   ```
3. `npm run deploy` — builds and pushes to a `your-project.workers.dev` URL, free.

Alternatively, skip the CLI: in the Cloudflare dashboard go to **Workers & Pages → Create → Import a repository**, connect this GitHub repo, and set the env vars in the dashboard's Settings → Variables tab. Cloudflare then rebuilds automatically on every push.

To attach a custom domain later: **Workers & Pages → your project → Settings → Domains & Routes**. (Hosting stays free; you just pay for the domain itself if you don't already own one.)

## About the Supabase setup

`src/integrations/supabase/` (client, server client, auth middleware) is fully wired but **not currently called from any page or component** — the database has no tables yet. It's safe to ignore. If you want to use it later (e.g. storing contact-form submissions instead of relying on Formspree, or a simple blog), the client is ready to import.

## Known TODOs left in the code

These are marked with `// TODO:` comments at each spot — search for `TODO` to find them all:

- **`src/components/sections/Contact.tsx`** — `FORMSPREE_ENDPOINT` still has a placeholder form ID. Create a form at [formspree.io](https://formspree.io) (free, 50 submissions/month) and paste the real endpoint in.
- **`src/routes/__root.tsx`** — `twitter:site` has a placeholder handle (`@your_handle`). Replace with your real handle or delete the line.
- **`public/robots.txt`** and **`public/sitemap.xml`** — both have a placeholder domain (`your-domain.example.com`). Update once you know your final URL (your `*.workers.dev` URL, or a custom domain).
- **`src/data/projects.ts`** — the "Ventao" project's wireframe entries had `image` paths pointing at files that were never added to the repo (`public/images/projects/ventao-*.png`), so they were removed to avoid broken images. Add the real screenshots to `public/images/projects/` and re-add the `image:` field on those entries if you want them.

## Notes on this pass

- Images in `src/assets/` were re-compressed (quality ~80, no resizing) — visually the same, ~400KB smaller total.
- Added `public/favicon.svg` — a simple placeholder monogram in the site's ink/blue/cream palette. Swap it for a real logo/photo whenever you want.
- `.env` was previously tracked by git (not in `.gitignore`). It's gitignored now, but since it was already committed, it's still in your git history. If you push this to a public GitHub repo, run `git rm --cached .env` before committing so it stops being tracked going forward. The key involved is a Supabase *anon/publishable* key (meant to be public-safe) and there are no tables yet, so risk is low — but worth cleaning up before you add real data.
