<script lang="ts">
	import { Math } from 'svelte-math';
	import temml from 'temml';

	let macros = temml.definePreamble('\\newcommand\\inference[3]{\\text{#1:}\\frac{#2}{#3}}');

	let {
		latex,
		displayMode,
		options
	}: {
		latex?: string;
		displayMode?: boolean;
		options?: temml.Options;
	} = $props();

	displayMode = displayMode ?? true;
	options = { ...options, ...{ macros } };
</script>

<Math {latex} {options} {displayMode} />

<style>
	:global(math) {
		font-size: 125%;
	}
</style>
