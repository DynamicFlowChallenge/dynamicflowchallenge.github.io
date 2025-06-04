<script lang="ts">
	import { progressStore } from '$lib/progressStore';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import Check from './icons/Check.svelte';

	let { currentChallenge, challenges } = $props();

	const progress = $derived($progressStore);
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
			<Button variant="link" class="text-green-400" href={'/challenges/' + challenge}>
				Challenge {challenge}
				<Check />
			</Button>
		{:else}
			<a class={buttonVariants({ variant: 'link' })} href={'/challenges/' + challenge}
				>Challenge {challenge}</a
			>
		{/if}
	{/each}
	{#if progress.length === challenges.length}
		{#if currentChallenge === 'sandbox'}
			<Button disabled variant="link" class="font-bold"><span class="glow">Sandbox</span></Button>
		{:else}
			<a class={buttonVariants({ variant: 'link' })} href={'/challenges/sandbox'}
				><span class="pulse-glow font-bold">Sandbox</span></a
			>
		{/if}
	{/if}
</div>

<style>
	@keyframes rgbGlow {
		0% {
			text-shadow:
				0 0 10px rgba(255, 0, 0, 0.9),
				0 0 20px rgba(255, 0, 0, 0.7),
				0 0 30px rgba(255, 0, 0, 0.5);
		}
		33% {
			text-shadow:
				0 0 10px rgba(0, 255, 0, 0.9),
				0 0 20px rgba(0, 255, 0, 0.7),
				0 0 30px rgba(0, 255, 0, 0.5);
		}
		66% {
			text-shadow:
				0 0 10px rgba(0, 0, 255, 0.9),
				0 0 20px rgba(0, 0, 255, 0.7),
				0 0 30px rgba(0, 0, 255, 0.5);
		}
		100% {
			text-shadow:
				0 0 10px rgba(255, 0, 0, 0.9),
				0 0 20px rgba(255, 0, 0, 0.7),
				0 0 30px rgba(255, 0, 0, 0.5);
		}
	}

	@keyframes pulse {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.15);
		}
	}

	.glow {
		animation: rgbGlow 4s infinite alternate;
	}
	.pulse-glow {
		animation:
			pulse 0.8s infinite ease-in-out alternate,
			rgbGlow 4s infinite alternate;
	}
</style>
