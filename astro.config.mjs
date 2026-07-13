import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Placeholder until the Netlify site is created in U6 / a custom domain is chosen (see plan Open Questions)
  site: 'https://itsjwags.netlify.app',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
