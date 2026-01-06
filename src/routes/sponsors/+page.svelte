<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
	import PrivacyLink from '$lib/components/PrivacyLink.svelte';
	import Sponsor from '$lib/components/Sponsor.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import aristech from '$lib/assets/sponsors/aristech.svg';
	import dgfs from '$lib/assets/sponsors/dgfs.svg';
	import hwl from '$lib/assets/sponsors/hwl.svg';
	import eacl from '$lib/assets/sponsors/eacl.png';
	import blc from '$lib/assets/sponsors/berns-language-consulting.png';
	import gal from '$lib/assets/sponsors/gal.png';
	import psv from '$lib/assets/sponsors/python-software-verband.png';

	const sponsors = [
		{ src: aristech, alt: 'Aristech GmbH', description: m.sponsor_aristech_description() }, //500€
		{ src: blc, alt: 'berns language consulting GmbH', description: m.sponsor_blc_description() }, // 500€
		{ src: dgfs, alt: 'Deutsche Gesellschaft für Sprachwissenschaft', description: m.sponsor_dgfs_description() }, // 300€
		{ src: gal, alt: 'Gesellschaft für Angewandte Linguistik e.V.', description: m.sponsor_gal_description() }, // 250€
		{ src: hwl, alt: 'HWL GmbH', description: m.sponsor_hwl_description() }, // 100€
		//{ src: eacl, alt: 'EACL' }, // bisher noch nix
		//{ src: psv, alt: 'Python Software Verband' } // bisher noch nix
	];
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.sponsors()} {m.global_title_short()}</title>
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
						<PrivacyLink isMail={true} href="tacos@cl.uni-heidelberg.de" />.
					</p>
					<p class="text-justify mb-4">
						{m.sponsors_description_costs()}
					</p>

					<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center mb-5">
						{#each sponsors as sponsor}
							<div class="col d-flex justify-content-center">
								<Sponsor src={sponsor.src} alt={sponsor.alt} description={sponsor.description} />
							</div>
						{/each}
					</div>

					<NextPageButton href="/timetable" text={m.go_to_timetable_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
