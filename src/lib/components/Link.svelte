<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { resolve } from '$app/paths';

	export let href: string = '';
	export let text: string = '';
	export let color: string = getContext<{ color: string }>('color').color;
	let className: string = '';
	export { className as class };
	export let isMail: boolean = false;
	let linkColorClass = `tacos-link-${color}`;

	if(!isMail && !href.startsWith("https://")) {
		// This is so that a base, as set in svelte.config.js, is respected.
		href = resolve(href);
	}

	onMount(() => {
		if (isMail) {
			href = `mailto:${href}`;
		}
	});
</script>

<a {href} class="text-decoration-none fw-bold {linkColorClass} {className}">
	{text}
</a>
