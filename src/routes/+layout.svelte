<script lang="ts">
	import { hasContext, onMount, setContext } from 'svelte';
	import '$lib/fonts.css';
	import { base } from '$app/paths';
	import '../app.scss';
	import HeaderBar from '$lib/components/HeaderBar.svelte';
	import Transition from '$lib/components/Transition.svelte';
	import ProgressiveImage from '$lib/components/ProgressiveImage.svelte';
	let { children, data } = $props();
	let color = $state({ color: data.color });
	if (!hasContext('color')) setContext('color', color);

	onMount(() => {
		// @ts-expect-error - Bootstrap JS bundle doesn't have proper type declarations
		import('bootstrap/dist/js/bootstrap.bundle.min.js');
	});
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="{base}/media/favicon/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="{base}/media/favicon/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="{base}/media/favicon/favicon-16x16.png" />
	<link rel="manifest" href="{base}/media/favicon/site.webmanifest" />
</svelte:head>

<HeaderBar color={color.color} />
<ProgressiveImage
	style="
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 1;
 "
	fullSrc="{base}/media/theoretikum/Theoretikum-upscale-3888.webp"
	previewSrc="{base}/media/theoretikum/Theoretikum-mini.webp"
	srcset="{base}/media/theoretikum/Theoretikum-upscale-3888.webp 2x, {base}/media/theoretikum/Theoretikum-upscale-3888.webp 3888w, {base}/media/theoretikum/Theoretikum-upscale-1920.webp 1920w, {base}/media/theoretikum/Theoretikum-upscale-1280.webp 1280w"
	alt="Hauptgebäude der Universität Heidelberg (Theoretikum) bei Sonnenuntergang"
	loading="lazy"
	sizes="(max-width: 1279px) 1280px, (max-width: 1919px) 1920px, 3888px"
></ProgressiveImage>

<Transition key={data.url} duration={400}>
	{@render children?.()}
</Transition>
