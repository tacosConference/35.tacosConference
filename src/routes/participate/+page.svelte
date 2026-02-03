<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import Link from '$lib/components/Link.svelte';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import SignupForm from '$lib/components/SignupForm.svelte';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.participate()} {m.global_title_short()}</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.participate()}
					</Headline>

					<div class="card mb-4" style="background-color: transparent; backdrop-filter: none">
						<div class="card-body">
							<SignupForm />
						</div>
					</div>

					<p class="mb-4">
						{m.participate_description()} <Link href="/" text="{m.subscribe_to_the_newsletter()}" />.
					</p>

					<h3>{m.participate_price()}</h3>
					<p class="mb-4">
						{m.participate_price_description()}
					</p>

					<h3>{m.participate_presentation_needed()}</h3>
					<p class="mb-4">
						{m.participate_presentation_needed_description()}
					</p>

					<h3>{m.participate_presentation_howto()}</h3>
					<p class="mb-4">
						{m.on_page()}<Link href="/timetable" text="{m.timetable()}"></Link>{m.participate_presentation_howto_description()}
					</p>

					<h3>{m.participate_certificate()}</h3>
					<p class="mb-4">
						{m.participate_certificate_description()}
					</p>

					<h3>{m.participate_is_for_me()}</h3>
					<p class="mb-4">
						{m.participate_is_for_me_description()}
					</p>

					<h3>{m.participate_language()}</h3>
					<p class="mb-4">
						{m.participate_language_description()}
					</p>

					<h3>{m.participate_accommodation()}</h3>
					<p class="mb-4">
						{m.participate_accommodation_description()}
					</p>

					<NextPageButton href="/timetable" text={m.go_to_timetable_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
