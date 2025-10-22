<script lang="ts">
	import { resolve } from '$app/paths';
	import { getLogoPath, getMinLogoPath } from '$lib/utils/theme';
	import ProgressiveImage from './ProgressiveImage.svelte';

	export let withText: boolean = false;
	export let size: string = '30px';

	export let color: string;
	$: logoPath = getLogoPath(color);
	let minLogoPath = getMinLogoPath("transparent");
</script>

<a class="navbar-brand fw-bold d-flex align-items-center" href={resolve('/')}>
	<ProgressiveImage
		alt="Logo"
		class={withText ? 'me-2' : ''}
		fullSrc={logoPath}
		previewSrc={minLogoPath}
		style="width: {size}; height: {size};"
	/>
	{#if withText}
		<span>TaCoS</span>
	{/if}
</a>
