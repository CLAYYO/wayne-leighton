import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: cloudflare(),
  site: 'https://wayne-leighton.pages.dev'
});