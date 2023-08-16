import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://bi-mesken-deneme-6q0ujhpre-koltukutsu.vercel.app/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), react()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});