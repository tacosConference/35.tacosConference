<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	interface BaseProps {
		class?: string;
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

	let linkColorClass = $derived(`tacos-link-${color}`);

	let internalHref = $derived(!isMail && !external ? resolve(href as Pathname) : '');

	onMount(() => {
		if (isMail) {
			href = `mailto:${href}`;
		}
	});
</script>

<a href={isMail || external ? href : internalHref} class="text-decoration-none fw-bold {linkColorClass} {className}" target="{target}">
	{text}
</a>
