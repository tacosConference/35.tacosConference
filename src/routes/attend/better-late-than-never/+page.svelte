<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import Link from '$lib/components/Link.svelte';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
	import SignupForm from '$lib/components/SignupForm.svelte';
	import { m } from '$lib/paraglide/messages.js';
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

					<h3>{m.participate_brunch()}</h3>
					<p class="mb-4">
						{m.participate_brunch_description()}
					</p>

					<h3>{m.participate_deadline()}</h3>
					<p class="mb-4">
						{m.participate_deadline_description()}
					</p>

					<h3>{m.participate_presentation_needed()}</h3>
					<p class="mb-4">
						{m.participate_presentation_needed_description()}
					</p>

					<h3>{m.participate_presentation_howto()}</h3>
					<p class="mb-4">
						{m.on_page()}<Link href="/schedule" text="{m.timetable()}"></Link>{m.participate_presentation_howto_description()}
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

					<h3>{m.participate_privacy()}</h3>
					<ul class="mb-4">
						<li><strong>{m.first_name()}</strong> {m.and()} <strong>{m.last_name()}</strong>: {m.privacy_name()}</li>
						<li><strong>{m.pronouns()}</strong>: {m.privacy_pronouns()}</li>
						<li><strong>{m.email()}</strong>: {m.privacy_email()}</li>
						<li><strong>{m.affiliation()}</strong>: {m.privacy_affiliation()}</li>
						<li><strong>{m.study_programme()}</strong>: {m.privacy_study_programme()}</li>
						<li><strong>{m.languages()}</strong>: {m.privacy_languages()}</li>
						<li><strong>{m.quote_left()}{m.previously_at_tacos()}{m.quote_right()}</strong>: {m.privacy_previously_at_tacos()}</li>
						<li><strong>{m.attendance_fee()}</strong>: {m.privacy_attendance_fee()}</li>
						<li><strong>{m.accommodation_label()}</strong>: {m.privacy_accommodation()}</li>
						<li><strong>{m.signup_accessibility_label()}</strong>: {m.privacy_accessibility()}</li>
						<li><strong>{m.remarks()}</strong>: {m.privacy_remarks()}</li>
					</ul>
					
					<p class="mb-4">
						{m.participate_privacy_description()}
					</p>

					<NextPageButton href="/schedule" text={m.go_to_timetable_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
