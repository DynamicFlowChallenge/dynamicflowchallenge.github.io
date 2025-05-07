<script lang="ts">
	import MyWorker from '../../../test.worker?worker';
	import Challenge from '$lib/components/Challenge.svelte';
</script>

<Challenge currentChallenge="three" nextChallenge="win" WorkerClass={MyWorker}>
	<h1 class="text-xl font-bold">Hello, World from 3!</h1>
</Challenge>
