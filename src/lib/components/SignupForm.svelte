<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';
	import LanguageMultiSelect from './LanguageMultiSelect.svelte';
	import Link from '$lib/components/Link.svelte';
	import { QRCode } from '@castlenine/svelte-qrcode';
	import { colorMap } from '$lib/utils/theme';

	let color = getContext<{ color: string }>('color').color;
	let outlineButtonColor = `tacos-btn-outline-${color}`;
	let primaryButtonColor = `tacos-btn-${color}`;
	let inputClassName = `tacos-input-${color}`;
	let checkClassName = `tacos-check-${color}`;

	let accommodationNeeded = $state('have');
	let membership: 'not_member_full_fee' | 'already_member' = $state('not_member_full_fee');

	let firstName = $state('');
	let lastName = $state('');

	const beneficiaryName = 'Junge Sprachwissenschaft e.V.';
	const beneficiaryIban = 'DE98 8306 5408 0004 9025 05';
	const beneficiaryBIC = 'GENODEF1SLR';

	let epcCode = $derived(`BCD
002
1
SCT
${beneficiaryBIC}
${beneficiaryName}
${beneficiaryIban}
EUR${membership === 'not_member_full_fee' ? '10' : '5'}

Teilnahmebeitrag TaCoS 2026, ${firstName} ${lastName}
`);
	let qrCodeColor = $derived(colorMap[color]);

	onMount(() => {
		const timer = setTimeout(() => {
			qrCodeColor = colorMap[color] + 'ff';
		}, 1);

		return () => clearTimeout(timer);
	});

</script>

<form action="https://newsletter.fachschaft.cl.uni-heidelberg.de/forms/nfrm_vzLdxLjQ" method="post">
	<h4>{m.signup_legend()}</h4>

	<div class="row g-2">
		<div class="col-md">
			<div class="form-floating mb-3">
				<input
					name="contact[first_name]"
					type="text"
					class="form-control {inputClassName}"
					id="firstName"
					required
					bind:value={firstName}
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
					bind:value={lastName}
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

	<hr />

	<div class="row g-2">
		<div class="col-md">
			<h5>{m.attendance_fee()}</h5>
			<ul>
				<li>{m.attendance_fee_is_10()}</li>
				<li>{m.reduced_attendance_fee_is_5()}</li>
			</ul>
			<p>
				{m.membership_label()}
			</p>
			<div class="d-flex flex-column gap-2 mb-3">
				<div>
					<input
						class="btn-check"
						type="radio"
						name="contact[data][fee]"
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
						name="contact[data][fee]"
						id="membershipAlreadyMember"
						value="already_member"
						bind:group={membership}
					/>
					<label class="btn {outlineButtonColor} w-100 text-start" for="membershipAlreadyMember">
						{m.membership_already_member()}
					</label>
				</div>
			</div>

			<div class="col-md">
				<div class="form-check mt-2 mb-3">
					<input name="contact[data][junge_sprawi_info_requested]" type="hidden" value="false" />
					<input
						id="jungeSprawiInfo"
						name="contact[data][junge_sprawi_info_requested]"
						class="form-check-input {checkClassName}"
						type="checkbox"
						value="true"
					/>
					<label class="form-check-label" for="jungeSprawiInfo">
						{m.interested_in_junge_sprawi()}
					</label>
				</div>
			</div>

			<div class="col-md d-flex flex-row">
				<div class="w-50  flex-grow-1">
					<p>
						{m.please_wire_fee_of()} {membership === "already_member" ? "5" : "10"} € {m.until_deadline_to()}:
					</p>

					<p>
						{m.beneficiary()}: {beneficiaryName}<br />
						{m.iban()}: {beneficiaryIban}<br />
						{m.bank()}: VR-Bank Altenburger Land / Deutsche Skatbank<br />
						{m.remittance_information()}: Teilnahmebetrag TaCoS
						2026, {firstName || lastName ? `${firstName} ${lastName}` : m.your_name()}<br />
					</p>

					<p>
						{m.you_can_scan_this_qr_code_to_pay()}:
					</p>
				</div>

				<div class="m-2 ms-4" style="flex-grow: 2;">
					{#key qrCodeColor}
						{#key epcCode}
							<QRCode isResponsive data={epcCode} color={qrCodeColor} haveBackgroundRoundedEdges
											backgroundColor='#ffffffA0' />
						{/key}
					{/key}
				</div>
			</div>
		</div>
	</div>

	<hr />

	<div class="row g-2">
		<div class="col-md">
			<h5>{m.accommodation_label()}</h5>
			<p>{m.signup_accommodation_info()}</p>
			<div class="d-flex flex-column gap-2 mb-3">
				<input
					class="btn-check"
					type="radio"
					name="contact[data][accommodation]"
					id="accommodationNone"
					value="have"
					bind:group={accommodationNeeded}
				/>
				<label class="btn {outlineButtonColor} w-100 text-start" for="accommodationNone">
					{m.accommodation_none()}
				</label>

				<input
					class="btn-check"
					type="radio"
					name="contact[data][accommodation]"
					id="accommodationNeededCouchsurfing"
					value="needed-couchsurfing-okay"
					bind:group={accommodationNeeded}
				/>
				<label class="btn {outlineButtonColor} w-100 text-start" for="accommodationNeededCouchsurfing">
					{m.accommodation_needed_couchsurfing()}
				</label>

				<input
					class="btn-check"
					type="radio"
					name="contact[data][accommodation]"
					id="accommodationNeededNoCouchsurfing"
					value="needed-no-couchsurfing"
					bind:group={accommodationNeeded}
				/>
				<label class="btn {outlineButtonColor} w-100 text-start" for="accommodationNeededNoCouchsurfing">
					{m.accommodation_needed_no_couchsurfing()}
				</label>
			</div>
		</div>
	</div>

	<hr />

	<div class="row g-2">
		<div class="col-md">
			<h5>{m.signup_accessibility_label()}</h5>
			<p>{m.signup_accessibility_info()}</p>
			<div class="form-floating mb-3">
				<textarea
					name="contact[data][accessibility_needs]"
					class="form-control {inputClassName}"
					id="accessNeeds"
				></textarea>
				<label for="accessNeeds">{m.signup_accessibility_placeholder()}</label>
			</div>
		</div>
	</div>

	<hr />

	<div class="row g-2">
		<div class="col-md">
			<h5>{m.remarks_label()}</h5>
			<div class="form-floating mb-3">
				<textarea
					name="contact[data][remarks]"
					class="form-control {inputClassName}"
					id="remarks"
				></textarea>
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
					required
				/>
				<label class="form-check-label" for="codeOfConduct">
					{m.i_accept()}
					<Link href="https://berlincodeofconduct.org/" text={m.code_of_conduct()}
								target="_blank" /> {m.and_am_aware_i_can_be_excluded()}.
				</label>
			</div>
		</div>
	</div>

	<div class="row g-2 mb-3">
		<input aria-hidden="true" autocomplete="off" name="h[url]" style="display: none" />
		<button class="btn btn-primary {primaryButtonColor}">{m.participate()}</button>
	</div>

	<div class="row g-2">
		{m.you_will_receive_confirmation_mail()}
	</div>
</form>

<style>
    textarea:not(:placeholder-shown) ~ label::after {
        background: none !important;
    }

    .form-floating textarea.form-control {
        height: calc(2 * 3.5rem + calc(var(--bs-border-width) * 2));
    }

    hr {
        margin-top: unset;
    }
</style>