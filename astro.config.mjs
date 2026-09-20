import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ВАЖНО: после покупки домена замените значение site на свой домен.
// От него строятся sitemap.xml, canonical и Open Graph.
export default defineConfig({
  site: 'https://visonatravel.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
  compressHTML: true,
});
