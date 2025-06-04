<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-Throw}
{
\mathcal{C}\vdash\langle e1, m\rangle \rightarrow \langle n^{l}, m'\rangle \qquad
\mathcal{C} = (pc, ec, rc) \qquad
pc \sqsubseteq ec
}
{
\mathcal{C} \vdash \langle \text{throw e1}, m \rangle \rightarrow \langle (\text{exc n}^{l \sqcup pc})^{pc}, m' \rangle
}`}
/>
