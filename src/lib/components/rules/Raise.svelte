<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-Raise}
{
\mathcal{C} \vdash \langle e, m \rangle \rightarrow \langle n^l, m' \rangle
}
{
\mathcal{C} \vdash \langle raise(e), m \rangle \rightarrow \langle n^{high}, m' \rangle
}
`}
/>
