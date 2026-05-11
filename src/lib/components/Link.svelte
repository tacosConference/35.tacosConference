<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	interface BaseProps {
		class?: string;
		href?: string;
		text: string;
		target?: string;
		color?: string;
		isMail?: boolean;
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
		class: className = '',
		href = '/',
		text = '',
		target = '',
		color = getContext<{ color: string }>('color')?.color,
		isMail = false,
		external = false
	}: Props = $props();

	//export let href: Pathname | string = '';
	//export let text: string = '';
	//export let target: string = '';
	//export let color: string = getContext<{ color: string }>('color').color;
	//let className: string = '';
	//export { className as class };
	//export let isMail: boolean = false;
	let linkColorClass = $derived(`tacos-link-${color}`);

	let internalHref = $derived(!isMail && !external ? resolve(href as Pathname) : href);

	onMount(() => {
		if (isMail) {
			href = `mailto:${href}`;
		}
	});
</script>

<a href={!isMail && !external ? href : internalHref} class="text-decoration-none fw-bold {linkColorClass} {className}" target="{target}">
	{text}
</a>
