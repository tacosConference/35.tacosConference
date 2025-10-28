<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.timetable()} · TaCoS</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.timetable()}
					</Headline>
					<p class="lead text-center mb-4">
						{m.timetable_description_lead()}
					</p>
					<NextPageButton href="/archive" text={m.go_to_archive_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
