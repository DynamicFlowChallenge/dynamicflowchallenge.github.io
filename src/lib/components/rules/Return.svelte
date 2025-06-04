<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-Return}
{
\mathcal{C}\vdash\langle e1, m\rangle \rightarrow \langle n^{l}, m'\rangle \qquad
\mathcal{C} = (pc, ec, rc) \qquad
pc \sqsubseteq rc
}
{
\mathcal{C} \vdash \langle \text{return e1}, m \rangle \rightarrow \langle n^{l \sqcup pc}, m' \rangle
}`}
/>
