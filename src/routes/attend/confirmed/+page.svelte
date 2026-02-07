<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{ m.registration_successful() } {m.global_title_short()}</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{ m.registration_successful() }
					</Headline>

					<p class="mb-4">
						{ m.registration_successful_details() }
					</p>

					<p class="mb-4">
						{ m.registration_further_info_mail() }
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
