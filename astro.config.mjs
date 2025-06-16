// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// deploy
import vercel from '@astrojs/vercel';
import staticAdapter from '@astrojs/cloudflare';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://imperiopoolsandpatios.com",
  output: 'server',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
  ],
  adapter: staticAdapter(),
  vite: {
    resolve: {
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      }
    }
  }
});