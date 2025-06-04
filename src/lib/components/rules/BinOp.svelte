<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-BinOp}
{
\mathcal{C}\vdash\langle e1 , m\rangle \rightarrow \langle {n_1}^{l1}, m'\rangle \qquad \mathcal{C}\vdash\langle e2 , m'\rangle \rightarrow \langle {n_2}^{l2}, m''\rangle
}
{
\mathcal{C} \vdash \langle e1 \otimes e2, m \rangle \rightarrow \langle (n1 \otimes n2)^{l1 \sqcup l2}, m'' \rangle
}
`}
/>
