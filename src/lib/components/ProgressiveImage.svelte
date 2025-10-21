<script lang="ts">
	export let previewSrc: string;
	export let fullSrc: string;
	export let srcset: string = '';
	export let sizes: string = '100vw';
	export let alt: string = '';
	export let aspectRatio: string = '16/9';
	let className: string = '';
	export { className as class };
	export let style: string = '';
	export let loading: 'lazy' | 'eager' = 'lazy';
	export let blur: boolean = false;

	let imageLoaded = false;
	let fullImageElement: HTMLImageElement;

	function onImageLoad() {
		imageLoaded = true;
	}

	// Check if image is already loaded (e.g., from cache)
	function checkIfImageLoaded(element: HTMLImageElement) {
		if (element && element.complete && element.naturalWidth > 0) {
			imageLoaded = true;
		}
	}
	let applyFilter = blur ? 'filter: blur(5px);' : '';
</script>

<div
	class="image-container {className}"
	style="aspect-ratio: {aspectRatio}; position: relative; overflow: hidden; {style}"
>
	<!-- Instant preview image -->
	<img
		src={previewSrc}
		{alt}
		class="placeholder-img"
		loading="eager"
		style={!imageLoaded ? applyFilter : 'opacity: 0;'}
	/>

	<!-- Original image loading in background -->
	<img
		bind:this={fullImageElement}
		src={fullSrc}
		{srcset}
		{sizes}
		{alt}
		class="full-image"
		{loading}
		on:load={onImageLoad}
		use:checkIfImageLoaded
		style={imageLoaded ? 'opacity: 1;' : 'opacity: 0;'}
	/>
</div>

<style>
	.image-container {
		width: auto;
	}
	.placeholder-img,
	.full-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.placeholder-img {
		transition: opacity 0.7s ease 0.7s;
	}
	.full-image {
		opacity: 0;
		transition: opacity 0.7s ease;
	}
</style>
