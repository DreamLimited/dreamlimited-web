import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dreamlimited.net',
  output: 'static',
  security: { csp: true },
});
