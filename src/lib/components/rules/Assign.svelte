<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-Assign}
{
\mathcal{C}\vdash\langle e, m\rangle \rightarrow \langle n^l, m'\rangle \qquad
\mathcal{C} = (pc, ec, rc) \qquad 
m(x)={n_0}^{l_0} \qquad 
pc \sqsubseteq l_0
}
{
\mathcal{C} \vdash \langle x=e, m \rangle \rightarrow m'[x \rightarrow n^{l \sqcup pc}]
}`}
/>
