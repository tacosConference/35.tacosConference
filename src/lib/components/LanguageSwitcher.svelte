<script lang="ts">
	import { setLocale, getLocale } from '$lib/paraglide/runtime.js';

	let currentLocale = getLocale();

	function switchLanguage(locale: 'de' | 'en') {
		setLocale(locale);
		currentLocale = locale;
	}
</script>

<!-- Language Switcher -->
<div class="d-flex">
	<button
		class="btn btn-sm {currentLocale === 'de' ? 'btn-light' : 'btn-outline-light'} me-1"
		on:click={() => switchLanguage('de')}
	>
		🇩🇪 DE
	</button>
	<button
		class="btn btn-sm {currentLocale === 'en' ? 'btn-light' : 'btn-outline-light'}"
		on:click={() => switchLanguage('en')}
	>
		🇺🇸 EN
	</button>
</div>
