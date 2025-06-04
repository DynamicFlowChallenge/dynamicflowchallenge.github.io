<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-Assign}
{
\mathcal{C}\vdash\langle e, m\rangle \rightarrow \langle n^l, m'\rangle \qquad
}
{
\mathcal{C} \vdash \langle x=e, m \rangle \rightarrow m'[x \rightarrow n^{l \sqcup pc}]
}`}
/>
