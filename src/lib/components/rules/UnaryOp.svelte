<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-UnaryOp}
{
\mathcal{C}\vdash\langle e1 , m\rangle \rightarrow \langle {n}^{l}, m'\rangle
}
{
\mathcal{C} \vdash \langle * e, m \rangle \rightarrow \langle (*n)^{l}, m' \rangle
}
`}
/>
