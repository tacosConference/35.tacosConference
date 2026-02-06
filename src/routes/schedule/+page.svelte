<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import Link from '$lib/components/Link.svelte';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import LinkButton from '$lib/components/LinkButton.svelte';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.timetable()} {m.global_title_short()}</title>
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
						{m.timetable_description()}
					</p>
					<div class="d-grid gap-2 mb-4">
						<LinkButton
							href="https://stage.tacos.cl.uni-heidelberg.de"
							external={true}
							outline={true}
							iconClass="bi bi-box-arrow-up-right"
							iconPosition="right">{m.tacostage_link_title()}</LinkButton
						>
					</div>
					<NextPageButton href="/archive" text={m.go_to_archive_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
