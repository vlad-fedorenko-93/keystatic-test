import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://vlad-fedorenko-93.github.io',
  trainlingStash: 'ignore',
  integrations: [react(), markdoc(), svelte(), process.env.NODE_ENV !== 'production' ? keystatic() : []].flat(),
  vite: {
    plugins: [tailwindcss()],
  },
});