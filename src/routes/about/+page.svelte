<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
import NextPageButton from '$lib/components/NextPageButton.svelte';
	import ProgressiveImage from '$lib/components/ProgressiveImage.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Die Fachschaft - TaCoS</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.about_title()}
					</Headline>
					<p class="lead text-center mb-4">
						{m.about_description_lead()}
					</p>
					<p class="text-center mb-4">
						{m.about_description()}
					</p>
					<div class="text-center mb-4">
						<ProgressiveImage
							fullSrc="/media/fachschaft/Fachschaft-Foto.jpeg"
							previewSrc="/media/fachschaft/Fachschaft-Foto-mini.webp"
							alt="Foto Fachschaft"
							class="img-fluid rounded"
						/>
					</div>
					<p class="text-center">
						{m.about_link_to_coli_homepage()}
					</p>
					<p class="text-center mb-2">
						<a
							href="https://fachschaft.cl.uni-heidelberg.de"
							class="text-decoration-none btn btn-outline-secondary btn-sm"
						>
							Fachschaft Computerlinguistik Heidelberg
						</a>
					</p>
					<p class="lead text-center mb-4">
						{m.about_description_2()}
					</p>
					<NextPageButton href="/team" text={m.go_to_team_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
