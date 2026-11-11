# United Dream Limited website

_Last verified: 2026-11-10._

Corporate website for [United Dream Limited](https://dreamlimited.org), the parent company of the DreamLimited portfolio.

## Status

The production site uses Astro 7 with static output for GitHub Pages.

## Local preview

Install dependencies and run Astro (`npm run dev`, `npm run preview` for the built site; builds for release run in CI and on GitHub Actions):

```sh
npm install
npm run dev
```

## Deployment

GitHub Pages is the only hosting plane (no container, no Kubernetes). The GitHub mirror runs `.github/workflows/pages.yml` on every push to `main`: `npm ci`, `npm run build`, upload `dist/`, deploy with `actions/deploy-pages`. The custom domain `dreamlimited.org` is declared in `public/CNAME` (and `CNAME` at the repo root).

On GitLab, `.gitlab-ci.yml` runs the launch-sequence validate-only pipeline (lint/SAST) plus a `build` job that proves `npm run build` compiles, so a broken page fails CI before it is mirrored.

## Ownership

Owner: the dream seat (DreamLimited). Copyright United Dream Limited. All rights reserved.
