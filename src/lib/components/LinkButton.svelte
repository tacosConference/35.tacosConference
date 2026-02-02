<script lang="ts">
	import { getContext } from 'svelte';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	interface BaseProps {
		children?: () => any;
		class?: string;
		iconClass?: string | null;
		iconPosition?: 'left' | 'right';
		color?: string;
		outline?: boolean;
		variant?: 'button' | 'link';
		target?: '_blank' | '_self' | null;
	}

	interface ExternalProps extends BaseProps {
		external: true;
		href: string;
	}

	interface InternalProps extends BaseProps {
		external?: false;
		href?: Pathname;
	}

	type Props = ExternalProps | InternalProps;

	let {
		children,
		class: className = '',
		iconClass = null,
		iconPosition = 'left',
		color = getContext<{ color: string }>('color').color,
		external = false,
		href = '/',
		outline = false,
		variant = 'button',
		target = null
	}: Props = $props();

	let colorClassName =
		variant === 'button'
			? `tacos-btn-${outline ? 'outline-' : ''}${color}`
			: `tacos-link-${color}`;
	const internalHref = $derived(!external ? resolve(href as Pathname) : '');
</script>

<a
	href={external ? href : internalHref}
	class="{variant === 'button' ? 'btn btn-outline-primary btn-lg' : ''} {className} {colorClassName}"
	target="{target}"
>
	{#if iconClass && iconPosition === 'left'}
		<i class="icon-left {iconClass}"></i>
	{/if}
	{@render children?.()}
	{#if variant === 'link'}
		<span class="arrow-hover"><i class="bi bi-arrow-right ms-2"></i></span>
	{:else if iconClass && iconPosition === 'right'}
		<i class="icon-right {iconClass}"></i>
	{/if}
</a>
