<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-Literal}
{
\qquad
}
{
\mathcal{C} \vdash \langle n, m \rangle \rightarrow \langle n^{low}, m \rangle
}
`}
/>
