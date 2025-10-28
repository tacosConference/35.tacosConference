<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
import NextPageButton from '$lib/components/NextPageButton.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Über uns · TaCoS</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.what_is_title()}
					</Headline>

					<p class="mb-4 text-justify">
						{m.what_is_description()}
					</p>
					<NextPageButton href="/about" text={m.go_to_about_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
