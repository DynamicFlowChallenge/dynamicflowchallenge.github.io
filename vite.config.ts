import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		nodePolyfills(),
		SvelteKitPWA({
			strategies: 'generateSW',
			registerType: 'autoUpdate',
			includeAssets: ['favicon.png'],
			kit: {
				trailingSlash: 'always'
			}
		})
	],
	optimizeDeps: {
		exclude: ['svelte-codemirror-editor', 'codemirror', '@codemirror/language-javascript' /* ... */]
	}
});
