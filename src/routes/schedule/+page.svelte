<script lang="ts">
	import Headline from '$lib/components/Headline.svelte';
	import Timetable from '$lib/components/Timetable.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import NextPageButton from '$lib/components/NextPageButton.svelte';
	import { getLocale, baseLocale } from '$lib/paraglide/runtime.js';
	import type { Event } from '$lib/event';

	let { data } = $props();

	const locale = getLocale();
	const resolveLocalized = (value: unknown) => {
		if (typeof value === 'string') return value;
		if (!value || typeof value !== 'object') return '';
		const localized = value as Record<string, string>;
		return localized[locale] ?? localized[baseLocale] ?? Object.values(localized)[0] ?? '';
	};

	let localizedEvents = $derived(
		(data.schedule.events ?? []).map((raw: Record<string, unknown>) => ({
			date: String(raw.date ?? ''),
			time: String(raw.time ?? ''),
			end: String(raw.end ?? ''),
			color: String(raw.color ?? ''),
			day: resolveLocalized(raw.day),
			title: resolveLocalized(raw.title),
			short_title: resolveLocalized(raw.short_title),
			person: resolveLocalized(raw.person),
			description: resolveLocalized(raw.description),
			location: resolveLocalized(raw.location)
		}))
	);
</script>

<svelte:head>
	<title>{m.timetable()} {m.global_title_short()}</title>
</svelte:head>

<div id="main-container" class="mt-5 mb-5 program-container">
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

					<Timetable events={localizedEvents as Event[]} />

					<NextPageButton href="/archive/" text={m.go_to_archive_button()} />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
  .program-container {
    margin-right: auto;
    margin-left: auto;
    width: 85vw;
    @media (max-width: 1400px) {
      width: 95vw;
    }
  }
</style>