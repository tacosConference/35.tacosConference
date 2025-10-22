<script lang="ts">
	import { getContext } from 'svelte';

	export let color: string = getContext<{ color: string }>('color').color;
	import { m } from '$lib/paraglide/messages.js';
	let colorClassName = `tacos-btn-outline-${color}`;
	let inputClassName = `tacos-input-${color}`;
	let checkClassName = `tacos-check-${color}`;
</script>

<form action="https://newsletter.fachschaft.cl.uni-heidelberg.de/forms/nfrm_BzLMaLXv" method="post">
    <legend>TaCoS Newsletter</legend>
	<div class="row g-2">
		<div class="col-md">
			<div class="form-floating mb-3">
				<input
					name="contact[first_name]"
					type="text"
					class="form-control {inputClassName}"
					id="firstName"
					placeholder="name@example.com"
				/>
				<label for="firstName">First name</label>
			</div>
		</div>
		<div class="col-md">
			<div class="form-floating">
				<input
					name="contact[email]"
					type="email"
					class="form-control {inputClassName}"
					id="email"
					placeholder="Password"
				/>
				<label for="email">E-Mail</label>
			</div>
		</div>
	</div>
	<div class="row g-2 mb-3">
		<div class="form-check">
			<input
				type="checkbox"
				class="form-check-input {checkClassName}"
				id="consent"
				name="contact[consent]"
				required
			/>
			<label class="form-check-label" for="consent">
				{m ? m.newsletter_consent() : 'I agree to receive the newsletter'}
			</label>
		</div>
	</div>
	<div class="row g-2">
			<input aria-hidden="true" autocomplete="off" name="h[url]" style="display: none" />
			<button class="btn btn-primary {colorClassName}"> Subscribe </button>
		</div>
</form>
