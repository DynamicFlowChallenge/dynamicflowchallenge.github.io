<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-TryCatchException}
{
\mathcal{C} = (pc, ec, rc) \qquad 
(pc, ec \sqcup pc, rc)\vdash\langle c1, m\rangle \rightarrow \langle (\text{exc n}^{l1})^{l2} , m' \rangle \qquad
(pc, ec, rc) \vdash \langle c2, m'[x \rightarrow n^{l1}] \rangle \rightarrow m''
}
{
\mathcal{C} \vdash \langle \text{try c1 catch (x) c2}, m \rangle \rightarrow m''
}`}
/>
