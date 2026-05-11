<script lang="ts">
	import { getContext } from "svelte";

    //export let color: string = getContext<{ color: string }>("color").color;

		let {
			children = undefined,
			color = getContext<{ color: string }>("color")?.color
		}: {
			children?: () => any
			color?: string
		} = $props();

</script>

<h1 class="card-title text-center mb-4 text-primary" style="color: var(--tacos-{color}-main)!important">
	{@render children?.()}
</h1>
