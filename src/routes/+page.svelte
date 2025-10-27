<script lang="ts">
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
	<title>Tagung der Computerlinguistik-Studierenden</title>
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

					<p class="lead text-center mb-4">
						{m.conference_description()}
					</p>

					<div class="card" style="background-color: transparent; backdrop-filter: none">
						<div class="card-body">
							<NewsletterForm />
						</div>
					</div>

					<NextPageButton href="/what-is" text={m.go_to_what_is_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
