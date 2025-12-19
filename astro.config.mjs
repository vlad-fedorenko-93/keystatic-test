import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://vlad-fedorenko-93.github.io',
  base: '/keystatic-test',
  integrations: [react(), markdoc(), keystatic(), svelte()],
});