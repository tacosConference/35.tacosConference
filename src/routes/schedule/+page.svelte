<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import Timetable from '$lib/components/Timetable.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import NextPageButton from '$lib/components/NextPageButton.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{m.timetable()} {m.global_title_short()}</title>
</svelte:head>

<div id="main-container" class="container mt-5 mb-5">
	<div class="row justify-content-center">
		<div class="col-12">
			<div class="card shadow-lg border-0">
				<div class="card-body p-4 p-md-5">
					<Headline>
						{m.timetable()}
					</Headline>
					<p class="lead text-center mb-5">
						{m.timetable_description_lead()}
					</p>

					<Timetable events={data.schedule.events} />

					<NextPageButton href="/archive/" text={m.go_to_archive_button()} />
				</div>
			</div>
		</div>
	</div>
</div>
