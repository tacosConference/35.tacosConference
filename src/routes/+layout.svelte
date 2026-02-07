<script lang="ts">
	import { hasContext, onMount, setContext } from 'svelte';
	import '$lib/fonts.css';
	import '../app.scss';
	import HeaderBar from '$lib/components/HeaderBar.svelte';
	import Transition from '$lib/components/Transition.svelte';
	import ProgressiveImage from '$lib/components/ProgressiveImage.svelte';
	import appleTouchIcon from '$lib/assets/favicon/apple-touch-icon.png';
	import favicon32 from '$lib/assets/favicon/favicon-32x32.png';
	import favicon16 from '$lib/assets/favicon/favicon-16x16.png';
	import manifest from '$lib/assets/favicon/site.webmanifest';
	import theoretikumFull from '$lib/assets/theoretikum/Theoretikum-upscale-3888.webp';
	import theoretikumMini from '$lib/assets/theoretikum/Theoretikum-mini.webp';
	import theoretikum1920 from '$lib/assets/theoretikum/Theoretikum-upscale-1920.webp';
	import theoretikum1280 from '$lib/assets/theoretikum/Theoretikum-upscale-1280.webp';
	let { children, data } = $props();
	let color = $state({ color: data.color });
	if (!hasContext('color')) setContext('color', color);

	onMount(() => {
		// @ts-expect-error - Bootstrap JS bundle doesn't have proper type declarations
		import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
			window.bootstrap = bootstrap;
		});
	});
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
	<link rel="manifest" href={manifest} />
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
	fullSrc={theoretikumFull}
	previewSrc={theoretikumMini}
	srcset="{theoretikumFull} 2x, {theoretikumFull} 3888w, {theoretikum1920} 1920w, {theoretikum1280} 1280w"
	alt="Hauptgebäude der Universität Heidelberg (Theoretikum) bei Sonnenuntergang"
	loading="lazy"
	sizes="(max-width: 1279px) 1280px, (max-width: 1919px) 1920px, 3888px"
></ProgressiveImage>

<Transition key={data.url} duration={400}>
	{@render children?.()}
</Transition>
