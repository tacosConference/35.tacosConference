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
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_NWgYnLdM" text="Die TaCoS-Website ist da! // TaCoS Website is live!" /></li>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_GQL5WVpk" text="Frohes neues Jahr! // Happy new year!" /></li>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_G4LyxgjB" text="Anmeldung zur 35. TaCoS 2026 geöffnet // Registration for 35th TaCoS 2026 open"/></li>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_E3Lp4Ln6" text="35. TaCoS 2026: Call for Participation" /></li>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_9xLeJrBv" text="35. TaCoS 2026: Anmeldung und Call for Participation" /> (an Fachschaften)</li>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_EvVXpVBD" text="35. TaCoS 2026: Anmeldung bestätigt. Wir brauchen deinen Vortrag! // Registration confirmed. We need your talk!" /></li>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_pyrzyLMx" text="35. TaCoS 2026: Teilnahmebestätigung und weitere Details. // Participation confirmation and more details." /></li>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_bdLxogkG" text="35. TaCoS 2026: Kostenlose Übernachtungsplätze zu verlosen // Raffle for free accommodation spots" /></li>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_j7r42g5N" text="35. TaCoS 2026: Vorläufiges Programm, Brunch // Preliminary Schedule and Brunch" /></li>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_vmLAxgZ5" text="TaCoS in T-3 Tagen – freust du dich euch auch schon so? // TaCoS in T-3 days – are you as excited as we are?" /></li>
					</ol>

					<p>
						{m.newsletter_transactional()}
					</p>

					<ul>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_WdLQmLR3" text="35. TaCoS 2026: Du hast noch nicht bezahlt. // You haven't paid yet."/></li>
						<li><Link external href="https://newsletter.fachschaft.cl.uni-heidelberg.de/archive/nmc_PBrk6LGY" text="35. TaCoS 2026: Deine Anmeldung wurde storniert. // You're registration has been cancelled."/></li>
					</ul>

					<p class="mb-4">
						{m.archive_description()}
					</p>

					<div class="d-grid gap-2">
						<LinkButton
							href="https://linguistik.computer"
							external={true}
							outline={true}
							target="_blank"
							iconClass="bi bi-box-arrow-up-right"
							iconPosition="right">{m.archive_link_title()}</LinkButton
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
