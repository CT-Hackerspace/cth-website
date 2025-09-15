import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import robots from "astro-robots";

import bun from "@nurodev/astro-bun"

// https://astro.build/config
export default defineConfig({
  site: "https://cthacker.space/",
  adapter: bun(),
  output: "server",
  integrations: [
    mdx(),
    react(),
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
    }),
    robots(),
  ],
});
