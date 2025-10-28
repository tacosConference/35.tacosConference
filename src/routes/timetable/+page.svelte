<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import Link from '$lib/components/Link.svelte';
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
					<p class="mb-4">
						{m.timetable_description()} <Link href="/" text="{m.subscribe_to_the_newsletter()}" />
					</p>
					<NextPageButton href="/participate" text={m.go_to_participate_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
