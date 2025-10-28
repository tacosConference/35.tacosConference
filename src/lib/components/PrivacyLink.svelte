<script lang="ts">
	import { getContext, onMount } from 'svelte';

	export let href: string = '';
	export let text: string = '';
	export let color: string = getContext<{ color: string }>('color').color;
	let hrefParts: string[] = [];
	let textParts: string[] = [];
	let className: string = '';
	export { className as class };
	export let isMail: boolean = false;
	
	// Split at every three characters
	hrefParts = href.match(/.{1,3}/g) || [];
	if (text) {
	  textParts = text.match(/.{1,3}/g) || [];
	}
	href = '';
	text = '';
	let linkColorClass = `tacos-link-${color}`;

	onMount(() => {
		href = hrefParts.join('');
		text = textParts.length > 0 ? textParts.join('') : href;

		if (isMail) {
			href = `mailto:${href}`;
		}
	});
</script>

{#if href}
	<a href={href} class="text-decoration-none fw-bold {linkColorClass} {className}">
		{text}
	</a>
{:else}
	<span>[...]</span>
{/if}