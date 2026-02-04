<script lang="ts">
	import { getContext } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';
	import LanguageMultiSelect from './LanguageMultiSelect.svelte';

	export let color: string = getContext<{ color: string }>('color').color;
	let outlineButtonColor = `tacos-btn-outline-${color}`;
	let primaryButtonColor = `tacos-btn-${color}`;
	let inputClassName = `tacos-input-${color}`;
	let checkClassName = `tacos-check-${color}`;

	let accommodationNeeded = 'false';
	let membership = 'not_member_full_fee';
	export let iban;
</script>

<form action="https://newsletter.fachschaft.cl.uni-heidelberg.de/forms/nfrm_vzLdxLjQ" method="post">
	<h4>{m.signup_legend()}</h4>
	<p>{m.signup_description() + " " + iban}</p>

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
		<div class="col-md">
			<div class="form-floating mb-3">
				<input
					name="contact[data][pronouns]"
					type="text"
					class="form-control {inputClassName}"
					id="pronouns"
				/>
				<label for="pronouns">{m.pronouns()}</label>
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
			<div class="form-check mt-2 mb-3">
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

	<hr class="my-4" />

	<div class="row g-2">
		<div class="col-md">
			<h5>{m.membership_label()}</h5>
			<div class="d-flex flex-column gap-2 mb-3">
				<div>
					<input
						class="btn-check"
						type="radio"
						name="contact[data][membership]"
						id="membershipAlreadyMember"
						value="already_member"
						bind:group={membership}
					/>
					<label class="btn {outlineButtonColor} w-100 text-start" for="membershipAlreadyMember">
						{m.membership_already_member()}
					</label>
				</div>

				<div>
					<input
						class="btn-check"
						type="radio"
						name="contact[data][membership]"
						id="membershipNotMemberFullFee"
						value="not_member_full_fee"
						bind:group={membership}
					/>
					<label class="btn {outlineButtonColor} w-100 text-start" for="membershipNotMemberFullFee">
						{m.membership_not_member_full_fee()}
					</label>
				</div>

				<div>
					<input
						class="btn-check"
						type="radio"
						name="contact[data][membership]"
						id="membershipInfoRequested"
						value="info_requested"
						bind:group={membership}
					/>
					<label class="btn {outlineButtonColor} w-100 text-start" for="membershipInfoRequested">
						{m.membership_not_member_info_requested()}
					</label>
				</div>
			</div>

			{#if membership === 'info_requested'}
				<div class="card border-{color} bg-light mb-3">
					<div class="card-body py-2">
						<p class="mb-0 small">{m.membership_disclaimer()}</p>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<hr class="my-4" />

	<div class="row g-2">
		<div class="col-md">
			<h5>{m.accommodation_label()}</h5>
			<p>{m.signup_accommodation_info()}</p>
			<div class="d-flex flex-column gap-2 mb-3">
				<input
					class="btn-check"
					type="radio"
					name="contact[data][accommodation_needed]"
					id="accommodationNone"
					value="false"
					bind:group={accommodationNeeded}
				/>
				<label class="btn {outlineButtonColor} flex-fill" for="accommodationNone">
					{m.accommodation_none()}
				</label>

				<input
					class="btn-check"
					type="radio"
					name="contact[data][accommodation_needed]"
					id="accommodationNeeded"
					value="true"
					bind:group={accommodationNeeded}
				/>
				<label class="btn {outlineButtonColor} flex-fill" for="accommodationNeeded">
					{m.accommodation_needed()}
				</label>
			</div>

			{#if accommodationNeeded === 'true'}
				<div class="card border-{color} bg-light mb-3">
					<div class="card-body py-2">
						<div class="form-check">
							<input name="contact[data][couchsurfing_ok]" type="hidden" value="false" />
							<input
								id="couchsurfingOk"
								name="contact[data][couchsurfing_ok]"
								class="form-check-input {checkClassName}"
								type="checkbox"
								value="true"
							/>
							<label class="form-check-label fw-bold" for="couchsurfingOk">
								{m.couchsurfing()}
							</label>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<hr class="my-4" />

	<div class="row g-2">
		<div class="col-md">
			<h5>{m.signup_accessibility_label()}</h5>
			<p>{m.signup_accessibility_info()}</p>
			<div class="form-floating mb-3">
				<textarea
					name="contact[data][access_needs]"
					class="form-control {inputClassName}"
					id="accessNeeds"
					style="height: 100px"
				></textarea>
				<label for="accessNeeds">{m.signup_accessibility_placeholder()}</label>
				<div class="form-text">
					{m.signup_accessibility_help()}
				</div>
			</div>
		</div>
	</div>

	<div class="row g-2">
		<div class="col-md">
			<div class="form-floating mb-3">
				<textarea
					name="contact[data][remarks]"
					type="text"
					class="form-control {inputClassName}"
					id="remarks"
				/>
				<label for="remarks">{m.remarks()}</label>
			</div>
		</div>
	</div>

	<div class="row g-2">
		<div class="col-md">
			<div class="form-check mb-3">
				<input name="contact[data][code_of_conduct]" type="hidden" value="false" />
				<input
					id="codeOfConduct"
					name="contact[data][code_of_conduct]"
					class="form-check-input {checkClassName}"
					type="checkbox"
					value="true"
				/>
				<label class="form-check-label" for="codeOfConduct">
					{m.code_of_conduct()}
				</label>
			</div>
		</div>
	</div>

	<div class="row g-2">
		<input aria-hidden="true" autocomplete="off" name="h[url]" style="display: none" />
		<button class="btn btn-primary {primaryButtonColor}">{m.register()}</button>
	</div>
</form>

<style>
textarea:not(:placeholder-shown) ~ label::after {
	background: none !important;
}

.form-floating textarea.form-control {
	height: calc(2 * 3.5rem + calc(var(--bs-border-width) * 2));
}
</style>