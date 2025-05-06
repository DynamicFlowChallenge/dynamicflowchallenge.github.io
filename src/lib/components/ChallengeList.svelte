<script lang="ts">
	import { progressStore } from '$lib/progressStore';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import Check from './icons/Check.svelte';

	let { currentChallenge, challenges } = $props();

	const progress = $progressStore;
</script>

<div class="flex flex-col items-start gap-2 px-2 py-5">
	{#each challenges as challenge}
		{#if challenge === currentChallenge}
			<Button disabled variant="link" class="font-bold">
				Challenge {challenge}
				{#if progress.includes(challenge)}
					<Check />
				{/if}
			</Button>
		{:else if progress.includes(challenge)}
			<Button variant="link" class="text-green-400" href={"/challenges/"+challenge}>
				Challenge {challenge}
				<Check />
			</Button>
		{:else}
			<a class={buttonVariants({ variant: 'link' })} href={"/challenges/"+challenge}>Challenge {challenge}</a>
		{/if}
	{/each}
</div>
