<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-TryCatchNoException}
{
\mathcal{C} = (pc, ec, rc) \qquad 
(pc, ec \sqcup pc, rc)\vdash\langle c1, m\rangle \rightarrow m'
}
{
\mathcal{C} \vdash \langle \text{try c1 catch (x) c2}, m \rangle \rightarrow m'
}`}
/>
