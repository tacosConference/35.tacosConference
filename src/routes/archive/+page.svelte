<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import Link from '$lib/components/Link.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.archive()} {m.global_title_short()}</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.archive()}
					</Headline>

					<p class="mb-4">
						{m.newsletter_archive_description()}
					</p>

					<ol>
						<li><Link href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_NWgYnLdM" text="Die TaCoS-Website ist da! // TaCoS Website is live!" /></li>
						<li><Link href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_GQL5WVpk" text="Frohes neues Jahr! // Happy new year!" /></li>
					</ol>

					<p class="mb-4">
						{m.archive_description()}
					</p>

					<div class="d-grid gap-2">
						<LinkButton
							href="https://linguistik.computer"
							outline={true}
							iconClass="bi bi-box-arrow-up-right"
							iconPosition="right">{m.archive_link_title()}</LinkButton
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
