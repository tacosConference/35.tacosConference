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
	import gal from '$lib/assets/sponsors/gal.svg';
	import psv from '$lib/assets/sponsors/python-software-verband.png';

	const sponsors = [
		{ src: psv, alt: 'Python Software Verband e.V.', link: "https://python-verband.org/" }, // 1000€
		{ src: aristech, alt: 'Aristech GmbH', link: "https://www.aristech.de"}, //500€
		{ src: blc, alt: 'berns language consulting GmbH', link: "https://berns-language-consulting.de"}, // 500€
		{ src: eacl, alt: 'The European Chapter of the ACL', link: "https://eacl.org/" }, // 400 €
		{ src: dgfs, alt: 'Deutsche Gesellschaft für Sprachwissenschaft', link: "https://dgfs.de"}, // 300€
		{ src: gal, alt: 'Gesellschaft für Angewandte Linguistik e.V.', link: "https://gal-ev.de"}, // 250€
		{ src: hwl, alt: 'HWL GmbH', link: "https://hwl.gmbh"}, // 100€
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

					<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center mb-5">
						{#each sponsors as sponsor}
								<Sponsor link={sponsor.link} src={sponsor.src} alt={sponsor.alt} />
						{/each}
					</div>

					<p class="text-justify mb-4">
						{m.sponsors_description_costs()}
					</p>

					<p class="lead text-center mb-4">
						{m.sponsors_lead()}
						<PrivacyLink isMail={true} href="tacos@cl.uni-heidelberg.de" />.
					</p>

					<NextPageButton href="/timetable" text={m.go_to_timetable_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
