<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
import NextPageButton from '$lib/components/NextPageButton.svelte';
	import ProgressiveImage from '$lib/components/ProgressiveImage.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.team()} · TaCoS</title>
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
					<div class="row justify-content-center mb-4">
						<div class="col-md-6 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc="/media/portraits/valentin-mini.webp"
								fullSrc="/media/portraits/valentin.webp"
								srcset="/media/portraits/valentin.webp 1000w, /media/portraits/valentin-500.webp 500w, /media/portraits/valentin-250.webp 250w"
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
								previewSrc="/media/portraits/aaron-mini.webp"
								fullSrc="/media/portraits/aaron.webp"
								srcset="/media/portraits/aaron.webp 1000w, /media/portraits/aaron-500.webp 500w, /media/portraits/aaron-250.webp 250w"
								alt="Portrait von Aaron"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Aaron</p>
						</div>
					</div>
					<NextPageButton href="/sponsors" text={m.go_to_sponsors_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
