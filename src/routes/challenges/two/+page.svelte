<script lang="ts">
	import MyWorker from '$lib/one/worker?worker';
	import Challenge from '$lib/components/Challenge.svelte';
</script>

<Challenge currentChallenge="two" nextChallenge="three" WorkerClass={MyWorker}>
	<h1 class="text-xl font-bold">Hello, World from 2!</h1>
</Challenge>
