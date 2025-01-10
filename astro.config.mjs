import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://caliaheadspa.com",
  integrations: [sitemap()],
});
