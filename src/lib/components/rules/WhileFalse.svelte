<script lang="ts">
	import MonitorRule from '$lib/components/MonitorRule.svelte';
</script>

<MonitorRule
	latex={String.raw`\inference{M-WhileFalse}
{
\mathcal{C}\vdash\langle e, m\rangle \rightarrow \langle {false}^l, m'\rangle  
}
{
\mathcal{C} \vdash \langle \text{while(e) c}, m \rangle \rightarrow m'
}`}
/>
