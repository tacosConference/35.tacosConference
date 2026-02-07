<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
	import ProgressiveImage from '$lib/components/ProgressiveImage.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import valentinMini from '$lib/assets/portraits/valentin/valentin-mini.webp';
	import valentin from '$lib/assets/portraits/valentin/valentin.webp';
	import valentin500 from '$lib/assets/portraits/valentin/valentin-500.webp';
	import valentin250 from '$lib/assets/portraits/valentin/valentin-250.webp';
	import aaronMini from '$lib/assets/portraits/aaron/aaron-mini.webp';
	import aaron from '$lib/assets/portraits/aaron/aaron.webp';
	import aaron500 from '$lib/assets/portraits/aaron/aaron-500.webp';
	import aaron250 from '$lib/assets/portraits/aaron/aaron-250.webp';
	import jakobMini from '$lib/assets/portraits/jakob/jakob-mini.webp';
	import jakob from '$lib/assets/portraits/jakob/jakob.webp';
	import jakob500 from '$lib/assets/portraits/jakob/jakob-500.webp';
	import jakob250 from '$lib/assets/portraits/jakob/jakob-250.webp';
	import tunaMini from '$lib/assets/portraits/tuna/tuna-mini.webp';
	import tuna from '$lib/assets/portraits/tuna/tuna.webp';
	import tuna500 from '$lib/assets/portraits/tuna/tuna-500.webp';
	import tuna250 from '$lib/assets/portraits/tuna/tuna-250.webp';
	import yiwanMini from '$lib/assets/portraits/yiwan/yiwan-mini.webp';
	import yiwan from '$lib/assets/portraits/yiwan/yiwan.webp';
	import yiwan500 from '$lib/assets/portraits/yiwan/yiwan-500.webp';
	import yiwan250 from '$lib/assets/portraits/yiwan/yiwan-250.webp';
	import lucaMini from '$lib/assets/portraits/luca/luca-mini.webp';
	import luca from '$lib/assets/portraits/luca/luca.webp';
	import luca500 from '$lib/assets/portraits/luca/luca-500.webp';
	import luca250 from '$lib/assets/portraits/luca/luca-250.webp';
	import lisaMini from '$lib/assets/portraits/lisa/lisa-mini.webp';
	import lisa from '$lib/assets/portraits/lisa/lisa.webp';
	import lisa500 from '$lib/assets/portraits/lisa/lisa-500.webp';
	import lisa250 from '$lib/assets/portraits/lisa/lisa-250.webp';
	import valerieMini from '$lib/assets/portraits/valerie/valerie-mini.webp';
	import valerie from '$lib/assets/portraits/valerie/valerie.webp';
	import valerie500 from '$lib/assets/portraits/valerie/valerie-500.webp';
	import valerie250 from '$lib/assets/portraits/valerie/valerie-250.webp';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{m.team()} {m.global_title_short()}</title>
</svelte:head>

<div id="main-container" class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-md-10">
			<div class="card shadow-lg">
				<div class="card-body p-5">
					<Headline>
						{m.team()}
					</Headline>
					<p class="lead text-center mb-4">
						{m.team_organizers_description()}
					</p>
					<div class="row justify-content-center mb-4 gy-4">
						<div class="col-md-6 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc={valentinMini}
								fullSrc={valentin}
								srcset="{valentin} 1000w, {valentin500} 500w, {valentin250} 250w"
								alt="Portrait von Valentin"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Valentin</p>
						</div>
						<div class="col-md-6 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc={aaronMini}
								fullSrc={aaron}
								srcset="{aaron} 1000w, {aaron500} 500w, {aaron250} 250w"
								alt="Portrait von Aaron"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Aaron</p>
						</div>
					</div>
					<p class="lead text-center mb-4">
						{m.team_additional_description()}
					</p>
					<div class="row justify-content-center mb-4 gy-4">
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc={jakobMini}
								fullSrc={jakob}
								srcset="{jakob} 1000w, {jakob500} 500w, {jakob250} 250w"
								alt="Portrait von Jakob"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Jakob</p>
						</div>
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc={tunaMini}
								fullSrc={tuna}
								srcset="{tuna} 1000w, {tuna500} 500w, {tuna250} 250w"
								alt="Portrait von Tuna"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Tuna</p>
						</div>
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc={yiwanMini}
								fullSrc={yiwan}
								srcset="{yiwan} 1000w, {yiwan500} 500w, {yiwan250} 250w"
								alt="Portrait von Yiwan"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Yi Wan</p>
						</div>
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc={lucaMini}
								fullSrc={luca}
								srcset="{luca} 1000w, {luca500} 500w, {luca250} 250w"
								alt="Portrait von Luca"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Luca</p>
						</div>
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc={lisaMini}
								fullSrc={lisa}
								srcset="{lisa} 1000w, {lisa500} 500w, {lisa250} 250w"
								alt="Portrait von Lisa"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Lisa</p>
						</div>
						<div class="col-md-4 text-center d-flex flex-column align-items-center">
							<ProgressiveImage
								previewSrc={valerieMini}
								fullSrc={valerie}
								srcset="{valerie} 1000w, {valerie500} 500w, {valerie250} 250w"
								alt="Portrait von Valerie"
								aspectRatio="1/1"
								class="rounded-circle img-fluid mb-2"
								style="width: 200px; height: 200px; object-fit: cover;"
								loading="lazy"
							/>
							<p class="mb-0">Valerie</p>
						</div>
					</div>
					<NextPageButton href="/sponsors" text={m.go_to_sponsors_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
