<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
import LinkButton from '$lib/components/LinkButton.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Archiv - TaCoS</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.archive_title()}
					</Headline>

					<p class="text-center mb-4">
						{m.archive_description()}
					</p>

					<div class="d-grid gap-2">
						<LinkButton href="https://tacosconference.github.io/34.tacosConference/" outline={true}
							>{m.conference_34_bochum()}</LinkButton
						>
						<LinkButton href="https://tacosconference.github.io/33.tacosConference/" outline={true}
							>{m.conference_33_saarbrucken()}</LinkButton
						>
						<LinkButton href="https://tacosconference.github.io/32.tacosConference/" outline={true}
							>{m.conference_32_dusseldorf()}</LinkButton
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
