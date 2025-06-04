<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-Return}
{
\mathcal{C}\vdash\langle e1, m\rangle \rightarrow \langle n^{l}, m'\rangle
}
{
\mathcal{C} \vdash \langle \text{return e1}, m \rangle \rightarrow \langle n^{l \sqcup pc}, m' \rangle
}`}
/>
