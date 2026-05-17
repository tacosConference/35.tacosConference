<script lang="ts">
	import { onMount, getContext } from 'svelte';
	import type { Event } from '$lib/event';

	let { events }: { events: Event[] } = $props<{ events: Event[] }>();
	const { color } = getContext<{ color: string }>('color');
	let selectedEvent = $state<Event | null>(null);
	let activeDate = $state<string>('');

	const minStepSize: number = 5;
	const displayStepSize: number = 15;
	if (displayStepSize % minStepSize !== 0.0) {
		throw new Error('displayStepSize must be a multiple of minStepSize');
	}
	const stepSizeRatio = displayStepSize / minStepSize;

	const toMinutes = (timeStr: string) => {
		const [h, m] = timeStr.split(':').map(Number);
		return h * 60 + m;
	};

	const days = $derived([...new Set(events.map((e: Event) => e.date))].sort());

	$effect(() => {
		if (!activeDate && days.length > 0) {
			const today = new Date();
			const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
			if (days.includes(todayStr)) {
				activeDate = todayStr;
			} else {
				activeDate = days[0] as string;
			}
		}
	});

	/**
	 * Events on the active/selected day. Sorted by start time
	 */
	const activeDayEvents: Event[] = $derived(events.filter((e: Event) => e.date === activeDate).sort((a, b) => toMinutes(a.time) - toMinutes(b.time)));

	// Earliest
	const minMinute = $derived(Math.min(...activeDayEvents.map((e: Event) => toMinutes(e.time)), 9 * 60)); // Start at least at 09:00
	const maxMinute = $derived(Math.max(...activeDayEvents.map((e: Event) => toMinutes(e.end)), 20 * 60)); // End at least at 20:00
	const startHour = $derived(Math.floor(minMinute / 60));
	const endHour = $derived(Math.ceil(maxMinute / 60));

	/**
	 * A list of all time-slots in the timetable in {minStepSize}-minute increments.
	 */
	const slots = $derived.by(() => {
		const result: string[] = [];
		for (let h = startHour; h <= endHour; h++) {
			for (let m = 0; m < 60; m += minStepSize) {
				if (h === endHour && m > 0) break;
				result.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
			}
		}
		return result;
	});

	// Current time, updated every ten seconds
	let now = $state(new Date());
	onMount(() => {
		const interval = setInterval(() => {
			now = new Date();
		}, 10000);
		return () => clearInterval(interval);
	});

	// Returns true if the event is currently happening
	const isCurrent = (event: Event) => {
		const [y, mon, d] = event.date.split('-').map(Number);
		const [sh, sm] = event.time.split(':').map(Number);
		const [eh, em] = event.end.split(':').map(Number);

		const startTime = new Date(y, mon - 1, d, sh, sm);
		const endTime = new Date(y, mon - 1, d, eh, em);

		return now >= startTime && now < endTime;
	};

	// If an event is only 15 minutes long, it's displayed as a single line
	const isShortEvent = (event: Event) => toMinutes(event.end) - toMinutes(event.time) <= 15;

	/**
	 * Returns the grid row for a given time.
	 * @param timeStr The time in HH:MM format.
	 */
	const getGridRow = (timeStr: string) => {
		const mins = toMinutes(timeStr);
		return (mins - startHour * 60) / minStepSize + 2; // +2 because row 1 is header
	};

	// Calculate overlaps for the active day
	const enrichedActiveEvents = $derived.by(() => {
		if (!activeDate) return [];

		// 1. Assign columns using a greedy approach
		const columns: Event[][] = [];
		const eventToCol = new Map<Event, number>();

		activeDayEvents.forEach((event) => {
			let placed = false;
			for (let i = 0; i < columns.length; i++) {
				const lastEventInColumn = columns[i][columns[i].length - 1];
				if (toMinutes(event.time) >= toMinutes(lastEventInColumn.end)) {
					columns[i].push(event);
					eventToCol.set(event, i);
					placed = true;
					break;
				}
			}
			if (!placed) {
				eventToCol.set(event, columns.length);
				columns.push([event]);
			}
		});

		// 2. Calculate spans to fill empty space to the right
		return activeDayEvents.map((event) => {
			const col = eventToCol.get(event)!;
			let span = 1;

			// Check how many columns to the right this event can span
			for (let i = col + 1; i < columns.length; i++) {
				const hasOverlapInCol = columns[i].some(
					(other) => toMinutes(event.time) < toMinutes(other.end) && toMinutes(event.end) > toMinutes(other.time)
				);
				if (!hasOverlapInCol) {
					span++;
				} else {
					break;
				}
			}

			return {
				...event,
				col,
				span
			};
		});
	});

	const groupedEvents = $derived.by(() => {
		const groups: Event[][] = [];
		if (activeDayEvents.length === 0) return groups;

		let currentGroup: Event[] = [activeDayEvents[0]];
		let currentMaxEnd = toMinutes(activeDayEvents[0].end);

		for (let i = 1; i < activeDayEvents.length; i++) {
			const event = activeDayEvents[i];
			const eventStart = toMinutes(event.time);

			if (eventStart < currentMaxEnd) {
				currentGroup.push(event);
				currentMaxEnd = Math.max(currentMaxEnd, toMinutes(event.end));
			} else {
				groups.push(currentGroup);
				currentGroup = [event];
				currentMaxEnd = toMinutes(event.end);
			}
		}
		groups.push(currentGroup);
		return groups;
	});

	const maxCols = $derived.by(() => {
		if (!activeDate) return 1;
		return Math.max(...enrichedActiveEvents.map(e => e.col)) + 1;
	});

	const columnMin = 320;
	const gridMinWidth = $derived(80 + maxCols * columnMin);

	const dayLabel = $derived(events.find((e: Event) => e.date === activeDate)?.day || activeDate);

	function portal(node: HTMLElement) {
		document.body.appendChild(node);
		return {
			destroy() {
				document.body.removeChild(node);
			}
		};
	}

	let colorButton = `tacos-btn-${color}`;
	let colorButtonOutline = `tacos-btn-outline-${color}`;

</script>

<div class="timetable-wrapper">
	<!-- Day Selector -->
	<div class="d-flex justify-content-center mb-4">
		<div class="nav nav-pills p-1 rounded shadow-sm border bg-white gap-1">
			{#each days as date}
				{@const label = events.find((e: Event) => e.date === date)?.day || date}
				<button
					class="nav-link btn {activeDate === date ? colorButton : colorButtonOutline}"
					class:active={activeDate === date}
					onclick={() => (activeDate = date as string)}
					type="button"
				>
					{label}
				</button>
			{/each}
		</div>
	</div>

	<!-- Desktop View -->
	<div class="timetable-scroll d-none d-md-block">
		<div
			class="timetable-grid d-grid bg-light border rounded overflow-hidden shadow-sm"
			style="
        --slots: {slots.length};
        grid-template-columns: 80px repeat({maxCols}, minmax({columnMin}px, 1fr));
        grid-template-rows: auto repeat({slots.length}, {45/stepSizeRatio}px);
        min-width: {gridMinWidth}px;
    "
		>
			<!-- Headers -->
			<div class="bg-dark text-white p-2 text-center fw-bold sticky-top z-3">Zeit</div>
			<div
				class="bg-dark text-white p-2 text-center fw-bold sticky-top z-3"
				style="grid-column: 2 / span {maxCols}"
			>
				{dayLabel}
			</div>

			<!-- Time column -->
			{#each slots as slot, i}
				{#if i % stepSizeRatio === 0}
					<div
						class="border-end border-bottom pe-2 text-end small text-muted bg-white"
						style="grid-row: {i + 2} / {i + 2 + stepSizeRatio}; grid-column: 1;"
					>
						{slot}
					</div>
				{/if}
			{/each}

			<!-- Background Grid Lines -->
			{#each slots as _, r}
				{#if r % stepSizeRatio === 0}
				<div
					class="border-end border-bottom bg-white"
					style="grid-row: {r + 2} / {r + 2 + stepSizeRatio}; grid-column: 2 / span {maxCols};"
				></div>
				{/if}
			{/each}

			<!-- Desktop View -->
			{#each enrichedActiveEvents as event}
				{@const short = isShortEvent(event)}
				<button
					type="button"
					class="event-item m-1 {short ? 'ps-sm-2' : 'p-1 p-sm-2'} rounded text-white small position-relative shadow-sm border-0 text-start d-flex flex-column"
					class:current={isCurrent(event)}
					onclick={() => (selectedEvent = event)}
					data-bs-toggle="modal"
					data-bs-target="#eventModal"
					style="
                    grid-column: {event.col + 2} / span {event.span};
                    grid-row: {getGridRow(event.time)} / {getGridRow(event.end)};
                    border-left: 4px solid rgba(0,0,0,0.2) !important;
                    background-color: {event.color};
                "
				>
					<span class="w-100 overflow-hidden">
						<span class="fw-bold lh-sm {short ? '' : 'mb-1'}"
						      style="font-size: 0.85rem;"
						      title={event.title}>
							{event.short_title ? event.short_title : event.title}
							{#if isCurrent(event)}
							<span class="badge bg-danger pulse-badge ms-2">JETZT</span>
							{/if}
						</span>
						<br />
						<span class="d-inline-flex align-items-center small">
						{#if !short}
							{#if event.person}
								<span class="fw-semibold lh-tight text-truncate" style="max-width: 14em; letter-spacing: -0.02em;"
								      title={event.person}>
									{event.person}
								</span>
								<span class="text-white-50">&nbsp;•&nbsp;</span>
							{/if}
							<span class="fw-semibold text-truncate me-1">
								{event.time} - {event.end}<span class="text-white-50">&nbsp;•&nbsp;</span>{event.location}
							</span>
						{/if}
						</span>
					</span>
				</button>
			{/each}
		</div>
	</div>

	<!-- Mobile View -->
	<div class="d-md-none">
		<h4 class="border-bottom border-dark-subtle pb-2 mb-3 mt-4">{dayLabel}</h4>
		<div class="d-flex flex-column gap-3">
			{#each groupedEvents as group}
				{#if group.length > 1}
					<div class="p-2 rounded bg-body-tertiary border-start border-4 border-secondary shadow-sm">
						<div class="small fw-bold text-secondary mb-2 ps-1">
							<i class="bi bi-layers-half me-1"></i> Parallel
						</div>
						<div class="d-flex flex-column gap-2">
							{#each group as event}
								{@render eventCard(event)}
							{/each}
						</div>
					</div>
				{:else}
					{#each group as event}
						{@render eventCard(event)}
					{/each}
				{/if}
			{/each}
		</div>
	</div>
</div>

{#snippet eventCard(event: Event)}
	<button
		type="button"
		class="card shadow-sm border-start border-5 text-start w-100 p-0 overflow-hidden"
		class:border-danger={isCurrent(event)}
		class:bg-danger-subtle={isCurrent(event)}
		onclick={() => (selectedEvent = event)}
		data-bs-toggle="modal"
		data-bs-target="#eventModal"
		style="border-left-color: {event.color} !important;"
	>
		<span class="card-body d-block">
			<span class="d-flex justify-content-between align-items-start mb-2">
				<span class="d-flex gap-1 flex-wrap align-items-center">
					<span class="badge rounded-pill text-dark" style="background-color: {event.color}44">
						{event.time} - {event.end}
					</span>
					{#if isCurrent(event)}
						<span class="badge bg-danger pulse-badge">JETZT</span>
					{/if}
				</span>
				<small class="text-muted"><i class="bi bi-geo-alt"></i> {event.location}</small>
			</span>
			<span class="card-title d-block mb-3 fw-bold fs-5" style="line-height: 1.15">{event.title}</span>
			{#if event.person}
				<span class="card-subtitle d-block mb-1 text-muted fw-bold small">{event.person}</span>
			{/if}
		</span>
	</button>
{/snippet}

<!-- Modal -->
<div use:portal class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content shadow">
			{#if selectedEvent}
				<div class="modal-header" style="background-color: {selectedEvent.color}22">
					<h5 class="modal-title fw-bold" id="eventModalLabel">{selectedEvent.title}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="mb-3 d-flex flex-wrap gap-2">
						{#if selectedEvent.person}
							<span class="badge bg-light text-dark border">
								<i class="bi bi-person me-1"></i> {selectedEvent.person}
							</span>
						{/if}
						<span class="badge bg-light text-dark border">
							<i class="bi bi-calendar3 me-1"></i> {selectedEvent.day}, {selectedEvent.date}
						</span>
						<span class="badge bg-light text-dark border">
							<i class="bi bi-clock me-1"></i> {selectedEvent.time} - {selectedEvent.end}
						</span>
						<span class="badge bg-light text-dark border">
							<i class="bi bi-geo-alt me-1"></i> {selectedEvent.location}
						</span>
					</div>
					<hr class="my-3 opacity-10" />
					<p class="text-justify mb-0">{selectedEvent.description}</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Schließen</button>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
    .event-item {
        cursor: pointer;
        z-index: 2;
        transition: transform 0.1s,
        box-shadow 0.1s;
    }

    .event-item:hover {
        transform: scale(1.02);
        z-index: 100;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
    }

    .event-item.current {
        box-shadow: 0 0 0 3px #dc3545 !important;
        z-index: 5;
    }

    .pulse-badge {
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7);
        }
        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(220, 53, 69, 0);
        }
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(220, 53, 69, 0);
        }
    }

    .timetable-scroll {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .timetable-grid {
        width: 100%;
    }
</style>
