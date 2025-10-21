<script>
	import { fly } from 'svelte/transition';
	import { quadIn, quadOut } from 'svelte/easing';
	export let key, duration = 300;
	$: halfDuration = duration / 2;
</script>

{#key key}
	<div
		in:fly={{ y: '50vh', duration: halfDuration, delay: halfDuration, easing: quadOut }}
		out:fly={{ y: '-50vh', duration: halfDuration, easing: quadIn }}
	>
		<slot />
	</div>
{/key}
