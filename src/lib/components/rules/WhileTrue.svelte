<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-WhileTrue}
{
\mathcal{C}\vdash\langle e, m\rangle \rightarrow \langle {true}^l, m'\rangle \qquad  \mathcal{C} = (pc, ec, rc) \qquad 
(l \sqcup pc, ec, rc) \vdash \langle \text{c; while(e) c}, m'\rangle \rightarrow m''
}
{
\mathcal{C} \vdash \langle \text{while(e) c}, m \rangle \rightarrow m''
}`}
/>
