import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import svelte from '@astrojs/svelte';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://vlad-fedorenko-93.github.io',
  integrations: [react(), markdoc(), keystatic(), svelte()],
  adapter: netlify(),
});