<script lang="ts">
	import { getContext } from 'svelte';
	let className: string = '';
	export let iconClass: string | null = null; // CSS class for the icon
	export let iconPosition: 'left' | 'right' = 'left'; // Position of the icon
	export { className as class };
	export let color: string = getContext<{ color: string }>('color').color;
	export let href: string = '/';
	export let outline: boolean = false;
	let colorClassName = `tacos-btn-${outline ? 'outline-' : ''}${color}`;
</script>

<a {href} class="btn btn-outline-primary btn-lg {className} {colorClassName}" target="_blank">
	{#if iconClass && iconPosition === 'left'}
		<i class="icon-left {iconClass}"></i>
	{/if}
	<slot />
	{#if iconClass && iconPosition === 'right'}
		<i class="icon-right {iconClass}"></i>
	{/if}
</a>
