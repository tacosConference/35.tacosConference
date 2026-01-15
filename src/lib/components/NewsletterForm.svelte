<script lang="ts">
	import { getContext } from 'svelte';
	import Link from '$lib/components/Link.svelte';

	export let color: string = getContext<{ color: string }>('color').color;
	import { m } from '$lib/paraglide/messages.js';
	let colorClassName = `tacos-btn-outline-${color}`;
	let inputClassName = `tacos-input-${color}`;
	let checkClassName = `tacos-check-${color}`;
</script>

<form action="{m.newsletter_form_url()}" method="post">
    <legend>{m.newsletter_legend()}</legend>
	<p>{m.newsletter_description()} <Link href="/archive" text="{m.archive()}" />.</p>

	<div class="row g-2">
		<div class="col-md">
			<div class="form-floating">
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
		<div class="col-md">
			<div class="form-floating mb-3">
				<input
					name="contact[first_name]"
					type="text"
					class="form-control {inputClassName}"
					id="firstName"
				/>
				<label for="firstName">{m.first_name()}</label>
			</div>
		</div>
	</div>
	<div class="row g-2">
		<input aria-hidden="true" autocomplete="off" name="h[url]" style="display: none" />
		<button class="btn btn-primary {colorClassName}">{m.subscribe()}</button>
	</div>
</form>
