<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
import NextPageButton from '$lib/components/NextPageButton.svelte';
	import PrivacyLink from '$lib/components/PrivacyLink.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.sponsors_title()} · TaCoS</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.sponsors_title()}
					</Headline>
					<p class="text-justify mb-4">
						{m.sponsors_description()}
					</p>
					<p class="lead text-center mb-4">
						{m.sponsors_lead()} 
						<PrivacyLink isMail={true} href="tacos@cl.uni-heidelberg.de" />
					</p>
					<p class="text-justify mb-4">
						{m.sponsors_description_costs()}
					</p>
					<NextPageButton href="/timetable" text={m.go_to_timetable_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
