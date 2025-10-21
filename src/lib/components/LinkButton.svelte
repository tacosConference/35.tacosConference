<script lang="ts">
	import { getContext } from 'svelte';
	let className: string = '';
	export { className as class };
	export let color: string = getContext<{ color: string }>('color').color;
	export let href: string = '/';
	export let outline: boolean = false;
	let colorClassName = `tacos-btn-${outline ? 'outline-' : ''}${color}`;
</script>

<a href={href} class="btn btn-outline-primary btn-lg {className} {colorClassName}"><slot /></a>
