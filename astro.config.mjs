// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: "/aion-es",
  site: "https://www.gacmotor.cl/aion-es",
});
