<script lang="ts">
	import { resolve } from '$app/paths';
	import { getLogoPath } from '$lib/utils/theme';

	export let withText: boolean = false;
	export let size: string = '30px';
	
	export let color: string;
	$: logoPath = getLogoPath(color);
</script>

<a class="navbar-brand fw-bold d-flex align-items-center" href={resolve('/')}>
	<img src={logoPath} alt="" width="{size}" height="{size}" class="{ withText ? 'me-2' : ''}" />
	{#if withText}
		<span>TaCoS</span>
	{/if}
</a>
