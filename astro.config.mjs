// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://romaingh.github.io',
  base: '/clic-et-zen',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    format: ['avif', 'webp']
  }
});