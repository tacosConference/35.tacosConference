<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.map()} {m.global_title_short()}</title>
</svelte:head>

<div id="main-container" class="map-container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.map()}
					</Headline>

					<p class="mb-4">
						{m.map_description()}
					</p>

					<iframe id="map" title="Map"
					        class="w-100 border-0 rounded-2"
					        allowfullscreen allow="geolocation"
					        src="//umap.openstreetmap.de/de/map/35-tacos-2026_136655?scaleControl=true&miniMap=true&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true&homeControl=false">
					</iframe>
					<div class="d-flex justify-content-center mt-3 mb-4">
						<LinkButton
							href="//umap.openstreetmap.de/de/map/35-tacos-2026_136655?scaleControl=true&miniMap=true&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true&homeControl=false"
							external={true}
							target="_blank"
							iconClass="bi bi-box-arrow-up-right"
							iconPosition="right">
							<span class="p-2">{m.map_fullscreen_button()}</span>
						</LinkButton>
					</div>

					<NextPageButton href="/archive/" text={m.go_to_archive_button()} />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
  .map-container {
    margin-right: auto;
    margin-left: auto;
    width: 85vw;
    @media (max-width: 1400px) {
      width: 95vw;
    }
  }

  #map {
    height: 400px;
    @media (min-width: 768px) {
      height: 300px;
    }
    @media (min-width: 1200px) {
      height: 600px;
    }
  }
</style>