<script lang="ts">
	import MyWorker from '../../../test.worker?worker';
	import Challenge from '$lib/components/Challenge.svelte';
</script>

<Challenge currentChallenge="one" challenges={['one', 'two', 'three']} WorkerClass={MyWorker}>
	<h1 class="text-xl font-bold">Hello, World!</h1>
</Challenge>
