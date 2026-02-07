<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Erfolgreich angemeldet {m.global_title_short()}</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						Erfolgreich angemeldet
					</Headline>

					<p class="mb-4">
						Du hast dich erfolgreich und verbindlich zur 35. TaCoS 2026 in Heidelberg angemeldet. Wir sehen uns im Mai!
					</p>

					<p class="mb-4">
						Spätestens Anfang April erhältst du von uns noch mal eine E-Mail mit weiteren Informationen.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
