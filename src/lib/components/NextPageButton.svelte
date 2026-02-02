<script lang="ts">
	import { resolve } from "$app/paths";
	import type { Pathname } from "$app/types";
	//import { colorMap } from "$lib/utils/theme";
	import { getContext } from "svelte";

	export let color: string = getContext<{color: string}>("color").color;
	export let href: Pathname = "/";
	export let text: string = "Weiter";
	let colorClassName = `tacos-btn-${color}`
    //let colorHex = colorMap[color];
</script>

<div class="d-flex justify-content-center pt-4">
	<a type="button" class="btn btn-primary btn-lg w-min-50 px-4 {colorClassName}" href={resolve(href)}
		>{text} <span class="arrow-hover"><i class="bi bi-arrow-right ms-2"></i></span></a
	>
</div>
