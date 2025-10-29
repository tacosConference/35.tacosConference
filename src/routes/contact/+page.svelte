<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import PrivacyLink from '$lib/components/PrivacyLink.svelte';
	import { m } from '$lib/paraglide/messages.js';

</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.contact()} · TaCoS</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.contact()}
					</Headline>
					<p class="lead text-center mb-4">
						{m.contact_lead()}
					</p>
					<p class="lead text-center mb-4">
						{m.contact_mail_text()}
						<!-- Email placeholder that will be populated by JavaScript -->
						<PrivacyLink isMail={true} href=tacos@cl.uni-heidelberg.de />.
						{m.contact_mail_text_2()}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
