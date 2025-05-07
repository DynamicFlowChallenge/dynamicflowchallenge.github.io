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
			strategies: 'generateSW', // You can also use 'injectManifest' if you want more control
			registerType: 'autoUpdate', // Automatically update service worker
			includeAssets: ['favicon.png']
		})
	],
	optimizeDeps: {
		exclude: ['svelte-codemirror-editor', 'codemirror', '@codemirror/language-javascript' /* ... */]
	}
});
