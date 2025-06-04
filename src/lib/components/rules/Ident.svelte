<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-Ident}
{
m(x)=n^l
}
{
\mathcal{C} \vdash \langle x, m \rangle \rightarrow \langle n^l, m \rangle
}
`}
/>
