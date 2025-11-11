<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
	import ProgressiveImage from '$lib/components/ProgressiveImage.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.team()} {m.global_title_short()}</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.team()}
					</Headline>
					<p class="lead text-center mb-4">
						{m.team_organizers_description()}
					</p>
					<div class="row justify-content-center mb-4 gy-4">
						<div class="col-md-6 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc="/media/portraits/valentin/valentin-mini.webp"
								fullSrc="/media/portraits/valentin/valentin.webp"
								srcset="/media/portraits/valentin/valentin.webp 1000w, /media/portraits/valentin/valentin-500.webp 500w, /media/portraits/valentin/valentin-250.webp 250w"
								alt="Portrait von Valentin"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Valentin</p>
						</div>
						<div class="col-md-6 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc="/media/portraits/aaron/aaron-mini.webp"
								fullSrc="/media/portraits/aaron/aaron.webp"
								srcset="/media/portraits/aaron/aaron.webp 1000w, /media/portraits/aaron/aaron-500.webp 500w, /media/portraits/aaron/aaron-250.webp 250w"
								alt="Portrait von Aaron"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Aaron</p>
						</div>
					</div>
					<p class="lead text-center mb-4">
						{m.team_additional_description()}
					</p>
					<div class="row justify-content-center mb-4 gy-4">
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc="/media/portraits/jakob/jakob-mini.webp"
								fullSrc="/media/portraits/jakob/jakob.webp"
								srcset="/media/portraits/jakob/jakob.webp 1000w, /media/portraits/jakob/jakob-500.webp 500w, /media/portraits/jakob/jakob-250.webp 250w"
								alt="Portrait von Jakob"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Jakob</p>
						</div>
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc="/media/portraits/tuna/tuna-mini.webp"
								fullSrc="/media/portraits/tuna/tuna.webp"
								srcset="/media/portraits/tuna/tuna.webp 1000w, /media/portraits/tuna/tuna-500.webp 500w, /media/portraits/tuna/tuna-250.webp 250w"
								alt="Portrait von Tuna"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Tuna</p>
						</div>
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc="/media/portraits/yiwan/yiwan-mini.webp"
								fullSrc="/media/portraits/yiwan/yiwan.webp"
								srcset="/media/portraits/yiwan/yiwan.webp 1000w, /media/portraits/yiwan/yiwan-500.webp 500w, /media/portraits/yiwan/yiwan-250.webp 250w"
								alt="Portrait von Yiwan"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Yi Wan</p>
						</div>
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc="/media/portraits/luca/luca-mini.webp"
								fullSrc="/media/portraits/luca/luca.webp"
								srcset="/media/portraits/luca/luca.webp 1000w, /media/portraits/luca/luca-500.webp 500w, /media/portraits/luca/luca-250.webp 250w"
								alt="Portrait von Luca"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Luca</p>
						</div>
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc="/media/portraits/lisa/lisa-mini.webp"
								fullSrc="/media/portraits/lisa/lisa.webp"
								srcset="/media/portraits/lisa/lisa.webp 1000w, /media/portraits/lisa/lisa-500.webp 500w, /media/portraits/lisa/lisa-250.webp 250w"
								alt="Portrait von Lisa"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Lisa</p>
						</div>
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc="/media/portraits/valerie/valerie-mini.webp"
								fullSrc="/media/portraits/valerie/valerie.webp"
								srcset="/media/portraits/valerie/valerie.webp 1000w, /media/portraits/valerie/valerie-500.webp 500w, /media/portraits/valerie/valerie-250.webp 250w"
								alt="Portrait von Valerie"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Valerie</p>
						</div>
					</div>
					<NextPageButton href="/sponsors" text={m.go_to_sponsors_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
