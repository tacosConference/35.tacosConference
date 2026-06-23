<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { getContext, onMount } from 'svelte';
	import type { PageProps } from './$types';

	let color = getContext<{ color: string }>('color')?.color;

	let {
		data
	}: PageProps = $props();

	const images = $derived(Object.entries(data.imageModules).map(([path, module]) => ({ path, module })));

	let colorOutline: Record<string, string> = {
		blue: 'tacos-hover-outline-blue',
		green: 'tacos-hover-outline-green',
		pink: 'tacos-hover-outline-pink',
		purple: 'tacos-hover-outline-purple',
		teal: 'tacos-hover-outline-teal'
	};
	let modal: HTMLDialogElement | undefined = $state();
	let imageContainer: HTMLElement | undefined = $state();
	onMount(() => {
		modal = document.getElementById('image-modal') as HTMLDialogElement;
		modal?.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal?.close();
			}
		})
		imageContainer = document.getElementById('image-image') as HTMLElement;
	});

	function showImage(picture: HTMLElement) {
		const newElem: HTMLElement = picture.cloneNode(true);
		newElem.getElementsByTagName('img')[0].classList.remove('gallery-image', 'img-fluid');
		newElem.getElementsByTagName('img')[0].classList.add('fullscreen-image', 'rounded');
		imageContainer.firstChild?.remove();
		imageContainer.appendChild(newElem);
		imageContainer.id = 'image-image'
		console.log(imageContainer);
		modal?.showModal();
		modal?.focus();
	}

</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.gallery()} {m.global_title_short()}</title>
</svelte:head>

<div id="main-container" class="ms-auto me-auto mt-5" style="width: 95vw">
	<div class="row justify-content-center">
		<div class="col-12">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.gallery()}
					</Headline>
					<div class="d-flex flex-wrap justify-content-center gap-3">
						{#each images as image}
						<button tabindex="0" class="border-0 m-0 p-0 rounded {colorOutline[color]}" onclick={(e) => showImage(e.currentTarget.children[0])}>
							<enhanced:img src={image.module.default} sizes="(min-width:1920px) 1920px,(min-width:1080px) 640px" class="rounded gallery-image img-fluid" alt="" loading="lazy" decoding="async" />
							</button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<dialog id="image-modal" class="border-0 rounded" popover>
	<div class="d-flex flex-column rounded gap-2 p-2 card" style="height: 100%">
		<div class="d-flex justify-content-end">
			<button title={m.close()} type="button" class="btn-close" onclick={()=>modal.close()}></button>
		</div>
		<div id="image-image" class="d-flex justify-content-center align-items-center">
		</div>
	</div>
</dialog>

<style lang="scss">
  .gallery-image {
    min-height: 200px;
    height: 30vh;
    width: auto;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }

    &:hover {
      cursor: pointer;
    }
  }

  #image-modal {
    max-width: 95vw;
    max-height: 95vh;
		padding: 0;
  }

  .fullscreen-image {
		width: 100%;
		height: calc(90vh - 40px);
    max-width: 100%;
    max-height: calc(90vh - 40px);
  }
</style>