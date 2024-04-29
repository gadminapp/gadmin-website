import { defineConfig } from "astro/config"
import cloudflare from "@astrojs/cloudflare"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: cloudflare({
		imageService: "passthrough",
	}),
	site: "https://gadmin.app",
	integrations: [sitemap()],
})
