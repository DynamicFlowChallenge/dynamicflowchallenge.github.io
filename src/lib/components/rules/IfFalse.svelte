<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-IfFalse}
{
\mathcal{C}\vdash\langle e, m\rangle \rightarrow \langle {false}^l, m'\rangle \qquad  
\mathcal{C} = (pc, ec, rc) \qquad 
(l \sqcup pc, ec, rc) \vdash \langle c2, m'\rangle \rightarrow m''
}
{
\mathcal{C} \vdash \langle \text{if (x) c1 else c2}, m \rangle \rightarrow m''
}`}
/>
