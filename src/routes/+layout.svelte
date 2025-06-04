<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(async () => {
		if (!dev && 'serviceWorker' in navigator) {
			try {
				await navigator.serviceWorker.register('/sw.js');
				console.log('Service worker registered');
			} catch (error) {
				console.error('Service worker registration failed:', error);
			}
		}
	});
</script>

<ModeWatcher />
{@render children()}
