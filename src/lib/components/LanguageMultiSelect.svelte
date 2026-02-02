<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime.js';
	import languageCodes from '$lib/language_codes.json';
	import * as m from '$lib/paraglide/messages';

	interface Props {
		name: string;
		label: string;
		color: string;
		required?: boolean;
	}

	let { name, label, color, required = false }: Props = $props();

	let inputClassName = `tacos-input-${color}`;
	let badgeClassName = `tacos-bg-${color}`;
	let buttonClassName = `tacos-btn-${color}`;

	let locale = getLocale();
	let displayNames = new Intl.DisplayNames([locale], { type: 'language' });

	let languages = languageCodes.map((code) => ({
		code,
		name: displayNames.of(code) || code
	})).sort((a, b) => a.name.localeCompare(b.name, locale));

	let searchQuery = $state('');
	let selectedCodes = $state<string[]>([]);
	let isOpen = $state(false);

	let filteredLanguages = $derived(
		languages.filter((lang) =>
			lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			lang.code.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	let selectedLanguages = $derived(
		selectedCodes.map(code => languages.find(l => l.code === code)).filter(Boolean) as { code: string, name: string }[]
	);

	function toggleLanguage(code: string) {
		if (selectedCodes.includes(code)) {
			selectedCodes = selectedCodes.filter((c) => c !== code);
		} else {
			selectedCodes = [...selectedCodes, code];
		}
	}

	function removeLanguage(code: string) {
		selectedCodes = selectedCodes.filter((c) => c !== code);
	}

	let value = $derived(selectedLanguages.map(l => l.name).join(', '));
</script>

<div class="mb-3 position-relative" style="--active-bg: var(--tacos-{color}-main)">
	<div class="form-floating">
		<div
			class="form-control {inputClassName} d-flex flex-wrap gap-1 align-items-center h-auto min-vh-50"
			id="language-select-trigger"
			role="combobox"
			aria-controls="language-select-listbox"
			aria-expanded={isOpen}
			aria-haspopup="listbox"
			tabindex="0"
			onclick={() => isOpen = !isOpen}
			onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); isOpen = !isOpen; } }}
			style="min-height: 58px; padding-top: 1.625rem; padding-bottom: 0.625rem;"
		>
			{#if selectedLanguages.length === 0}
				<span class="text-muted opacity-50">{searchQuery ? '' : '...'}</span>
			{/if}
			{#each selectedLanguages as lang}
				<span class="badge {badgeClassName} d-flex align-items-center gap-1">
					{lang.name}
					<button
						type="button"
						class="btn-close btn-close-white"
						style="font-size: 0.5rem; padding: 0.25rem;"
						aria-label="Remove {lang.name}"
						onclick={(e) => { e.stopPropagation(); removeLanguage(lang.code); }}
					></button>
				</span>
			{/each}
		</div>
		<label for="language-select-trigger">{label}</label>
	</div>

	{#if isOpen}
		<div class="card position-absolute w-100 mt-1 shadow-lg z-3"
				 style="max-height: 300px; overflow: hidden; display: flex; flex-direction: column;">
			<div class="p-2 border-bottom">
				<input
					type="text"
					class="form-control form-control-sm {inputClassName}"
					placeholder="Search languages..."
					bind:value={searchQuery}
					onclick={(e) => e.stopPropagation()}
					onkeydown={(e) => { if (e.key === 'Escape') isOpen = false; }}
				/>
			</div>
			<div class="list-group list-group-flush overflow-auto flex-grow-1" role="listbox">
				{#each filteredLanguages as lang}
					<button
						type="button"
						class="list-group-item list-group-item-action d-flex justify-content-between align-items-center {selectedCodes.includes(lang.code) ? 'active' : ''}"
						onclick={() => toggleLanguage(lang.code)}
					>
						{lang.name}
						{#if selectedCodes.includes(lang.code)}
							<i class="bi bi-check"></i>
						{/if}
					</button>
				{/each}
				{#if filteredLanguages.length === 0}
					<div class="list-group-item disabled">{m.no_language_found()}</div>
				{/if}
			</div>
			<div class="p-2 border-top text-end">
				<button type="button" class="btn btn-sm btn-secondary {buttonClassName}"
								onclick={() => isOpen = false}>{m.close()}</button>
			</div>
		</div>
	{/if}

	<input type="hidden" {name} {value} {required} />
</div>

<style>
    .min-vh-50 {
        min-height: 58px;
    }

    /* Ensure labels work with our custom div-based floating label */
    .form-floating > .form-control:focus ~ label,
    .form-floating > .form-control:not(:empty) ~ label {
        opacity: .65;
        transform: scale(.85) translateY(-.5rem) translateX(.15rem);
    }

    .badge {
        transition: none; /* Disable global 2s transition for badges to feel snappy */
    }
</style>
