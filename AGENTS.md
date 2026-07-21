# Agent instructions

## Scope

This repository publishes `dreamlimited.org`, the corporate site for United Dream Limited, parent company of the DreamLimited portfolio.

## Technical constraints

- The deployable output must be static and compatible with GitHub Pages.
- Preserve `CNAME` with the exact value `dreamlimited.org`.
- Never commit credentials, API keys, customer data, or private portfolio information.
- If adopting Astro, use static output and ensure the generated artifact works at the domain root.
- Keep dependencies minimal and pin major toolchain versions.

## Quality bar

- Use semantic HTML and meet WCAG 2.2 AA where practical.
- Test keyboard navigation, responsive layouts, metadata, and broken links.
- Optimize images and avoid unnecessary client-side JavaScript.
- Present United Dream Limited as the parent corporation; product-specific detail belongs on product sites.

## Deployment

GitHub Pages is the production host. Changes to publishing, the custom domain, DNS, or Cloudflare settings require explicit verification after deployment.

## Licensed assets

Do not copy preview assets or commercial template files into the repository without a valid project license. Record the selected item and license evidence in repository documentation when integrated.
