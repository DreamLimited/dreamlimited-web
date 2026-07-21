import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dreamlimited.org',
  output: 'static',
  security: { csp: true },
});
