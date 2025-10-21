<script lang="ts">
	import { getContext } from "svelte";

    export let color: string = getContext<{ color: string }>("color").color;
</script>

<h1 class="card-title text-center mb-4 text-primary" style="color: var(--tacos-{color}-main)!important">
	<slot />
</h1>
