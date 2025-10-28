<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { getContext, onMount } from 'svelte';

	let color = getContext<{ color: string }>('color').color;
	let tacosLinkClass = `tacos-link-${color}`;
	let emailContainer: HTMLElement;

	// Create email link dynamically on component mount
	onMount(() => {
		if (emailContainer) {
			const username = 'tacos';
			const domain = 'cl.uni-heidelberg.de';
			const emailAddress = username + '@' + domain;

			emailContainer.innerHTML = `<a href="mailto:${emailAddress}" class="text-decoration-none fw-bold ${tacosLinkClass}">${emailAddress}</a>`;
		}
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Kontakt - TaCoS</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.contact_title()}
					</Headline>
					<p class="lead text-center mb-4">
						{m.contact_lead()}
					</p>
					<p class="lead text-center mb-4">
						{m.contact_mail_text()}
						<!-- Email placeholder that will be populated by JavaScript -->
						<span bind:this={emailContainer}>[...]</span>
						{m.contact_mail_text_2()}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
