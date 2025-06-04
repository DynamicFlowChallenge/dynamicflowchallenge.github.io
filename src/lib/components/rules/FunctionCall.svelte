<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-FunctionCall}
{
\mathcal{C}\vdash\langle e1, m\rangle \rightarrow \langle f^{l1}, m'\rangle \qquad 
\mathcal{C}\vdash\langle e2, m'\rangle \rightarrow \langle n^{l2}, m''\rangle \qquad 
\mathcal{C} = (pc, ec, rc) \qquad
(pc \sqcup l1, ec, rc \sqcup pc) \vdash \langle f(n), m''\rangle \rightarrow \langle v^{l3}, m''' \rangle
}
{
\mathcal{C} \vdash \langle \text{e1(e2)}, m \rangle \rightarrow \langle v^{l3}, m''' \rangle
}
`}
/>
