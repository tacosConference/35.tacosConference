<script lang="ts">
	import Countdown from '$lib/components/Countdown.svelte';
	import Headline from '$lib/components/Headline.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { getContext } from 'svelte';
	let color = getContext<{ color: string }>('color').color;
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>35. Tagung der Computerlinguistik-Studierenden 2026</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.welcome_to_35th_tacos()}
					</Headline>

					<span class="d-flex justify-content-center">
						<Logo withText={false} size="250px" {color} />
					</span>

					<Countdown targetDate={new Date('2026-05-21T00:00:00')} />

					<p class="lead text-center mb-4">
						{m.conference_description_lead()}
					</p>

					<p class="mb-4">
						{m.conference_description()}
					</p>

					<div class="card" style="background-color: transparent; backdrop-filter: none">
						<div class="card-body">
							<NewsletterForm />
						</div>
					</div>

					<NextPageButton href="/about" text={m.go_to_about_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
