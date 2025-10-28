<script lang="ts">
	import { getContext, onMount } from 'svelte';

	export let href: string = '';
	export let text: string = '';
	export let color: string = getContext<{ color: string }>('color').color;
	let className: string = '';
	export { className as class };
	export let isMail: boolean = false;
	let linkColorClass = `tacos-link-${color}`;

	onMount(() => {
		if (isMail) {
			href = `mailto:${href}`;
		}
	});
</script>

<a {href} class="text-decoration-none fw-bold {linkColorClass} {className}">
	{text}
</a>
