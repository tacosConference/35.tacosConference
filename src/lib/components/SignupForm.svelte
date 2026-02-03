<script lang="ts">
	import { getContext } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';
	import LanguageMultiSelect from './LanguageMultiSelect.svelte';

	export let color: string = getContext<{ color: string }>('color').color;
	let colorClassName = `tacos-btn-outline-${color}`;
	let inputClassName = `tacos-input-${color}`;
	let checkClassName = `tacos-check-${color}`;
</script>

<form action="https://newsletter.fachschaft.cl.uni-heidelberg.de/forms/nfrm_vzLdxLjQ" method="post">
	<h4>{m.signup_legend()}</h4>
	<p>{m.signup_description()}</p>

	<div class="row g-2">
		<div class="col-md">
			<div class="form-floating mb-3">
				<input
					name="contact[first_name]"
					type="text"
					class="form-control {inputClassName}"
					id="firstName"
					required
				/>
				<label for="firstName">{m.first_name()}</label>
			</div>
		</div>
		<div class="col-md">
			<div class="form-floating mb-3">
				<input
					name="contact[last_name]"
					type="text"
					class="form-control {inputClassName}"
					id="lastName"
				/>
				<label for="lastName">{m.last_name()}</label>
			</div>
		</div>
	</div>

	<div class="row g-2">
		<div class="col-md">
			<div class="form-floating mb-3">
				<input
					name="contact[email]"
					type="email"
					class="form-control {inputClassName}"
					id="email"
					required
				/>
				<label for="email">{m.email()}</label>
			</div>
		</div>
	</div>

	<div class="row g-2">
		<div class="col-md">
			<div class="form-floating mb-3">
				<input
					name="contact[data][affiliation]"
					type="text"
					class="form-control {inputClassName}"
					id="affiliation"
					required
				/>
				<label for="affiliation">{m.affiliation()}</label>
			</div>
		</div>
	</div>

	<div class="row g-2">
		<div class="col-md">
			<div class="form-floating mb-3">
				<input
					name="contact[data][study]"
					type="text"
					class="form-control {inputClassName}"
					id="study"
				/>
				<label for="study">{m.study_programme()}</label>
			</div>
		</div>
	</div>

	<div class="row g-2">
		<div class="col-md">
			<LanguageMultiSelect
				name="contact[data][languages]"
				label={m.languages()}
				{color}
				required
			/>
		</div>
	</div>

	<div class="row g-2">
		<div class="col-md">
			<div class="form-check mb-3">
				<input name="contact[data][previously_at_tacos]" type="hidden" value="false" />
				<input
					id="previouslyAtTacos"
					name="contact[data][previously_at_tacos]"
					class="form-check-input {checkClassName}"
					type="checkbox"
					value="true"
				/>
				<label class="form-check-label" for="previouslyAtTacos">
					{m.previously_at_tacos()}
				</label>
			</div>
		</div>
	</div>

	<div class="row g-2">
		<input aria-hidden="true" autocomplete="off" name="h[url]" style="display: none" />
		<button class="btn btn-primary {colorClassName}">{m.register()}</button>
	</div>
</form>
