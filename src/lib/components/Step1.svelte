<script lang="ts">
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import {
		clientName,
		clientPhone,
		clientEmail,
		canContinue,
		inputEmail,
		inputPhone,
		inputName,
		currentStep,
		complitedSteps
	} from '$lib/multiform-store';
	import { validateUserName, validateEmail, validatePhoneNumber } from '$lib/scripts/validators';
	import { fade } from 'svelte/transition';
	import { tick } from 'svelte';
	import CheckMark from './checkMark.svelte';

	const fields = [
		{ name: 'Name', placeholder: 'e.g. Stephen King', error: '' },
		{ name: 'Email Address', placeholder: 'e.g. stephenking@lorem.com', error: '' },
		{ name: 'Phone Number', placeholder: 'e.g. +1 234 567 890', error: '' }
	];

	let nameValid: boolean;
	let emailValid: boolean;
	let phoneValid: boolean;

	let hasError = false;
	let isSuccessVisible = false;
	let submitted = false;

	const nameRegExp = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.\s{1}]{0,29}$/i;

	onMount(() => {
		$inputName = $clientName;
		$inputEmail = $clientEmail;
		$inputPhone = $clientPhone;
		nameValid = validateUserName($inputName);
		emailValid = validateEmail($inputEmail);
		phoneValid = validatePhoneNumber($inputPhone);
	});

	afterUpdate(() => {
		if (nameValid && emailValid && phoneValid) {
			$canContinue = true;
		} else {
			$complitedSteps = 0;
			$canContinue = false;
		}
	});

	function handleInputName() {
		if (validateUserName($inputName.trim())) {
			clientName.set($inputName.trim());
			fields[0].error = ``;
			nameValid = true;
			// e.target.placeholder = '';
		} else {
			clientName.set('');
			fields[0].error = `Please, provide valid name (3-29 symbols, '-', '_' and whitespace allowed)`;
			nameValid = false;
			$canContinue = false;
		}
	}

	function handleInputEmail() {
		if (validateEmail($inputEmail.trim())) {
			clientEmail.set($inputEmail.trim());
			fields[1].error = ``;
			emailValid = true;
			// try {
			// 	e.target.placeholder = '';
			// } catch (err) {
			// 	console.log('target has no placeholder');
			// }
		} else {
			clientEmail.set('');
			fields[1].error = `Please, provide valid email`;
			emailValid = false;
			$canContinue = false;
		}
	}

	function handleInputPhone() {
		if (validatePhoneNumber($inputPhone)) {
			clientPhone.set($inputPhone);
			fields[2].error = ``;
			phoneValid = true;
		} else {
			clientPhone.set(null);
			fields[2].error = `Please, provide valid phone number (only numbers)`;
			phoneValid = false;
			$canContinue = false;
		}
	}

	async function handleSubmit() {
		await tick();
		if ($canContinue) {
			$complitedSteps = 1;
			$currentStep += 1;
		}
	}
</script>

<article in:fade={{ delay: 0, duration: 250 }} class="flex flex-col ">
	<h1 id="Step-1 Title" class="text-marine-blue font-bold text-2xl xl:text-4xl">Personal info</h1>
	<h2 id="Step-1 Description" class="text-cool-gray text-lg xl:text-xl">
		Please provide your name, email address, and phone number.
	</h2>
	<form
		id="multi"
		on:submit|preventDefault={handleSubmit}
		class="flex flex-col pt-6 xl:pt-12 text-md xl:text-lg gap-6 xl:gap-10"
	>
		<!-- Name -->
		<label class="flex flex-col gap-0 relative"
			><span class="flex flex-row justify-between text-marine-blue pb-2"
				>{fields[0].name}
				<h5
					class="text-strawberry-red font-thin text-xs h-[1.8rem] xl:text-sm xl:h-[1.2rem]  place-self-end"
				>
					{fields[0].error}
				</h5></span
			>
			<input
				autocomplete="name"
				placeholder={fields[0].placeholder}
				type="text"
				required
				bind:value={$inputName}
				on:input={handleInputName}
				on:invalid={handleInputName}
				on:error={handleInputName}
				class="{nameValid
					? 'border-cool-gray border-opacity-60'
					: 'border-strawberry-red focus:outline-strawberry-red focus-visible:outline-strawberry-red focus-within:outline-strawberry-red'}
				rounded-md border  px-4 py-2"
			/>
			{#if nameValid}<b
					class="absolute h-12 aspect-square right-0 top-7 xl:top-9
			stroke-green-600 inline-block"><CheckMark /></b
				>{/if}
		</label>
		<!-- Email -->
		<label class="relative flex flex-col gap-0"
			><span class="flex flex-row justify-between text-marine-blue pb-2"
				>{fields[1].name}
				<h5 class="text-strawberry-red font-thin text-sm h-[1.2rem] place-self-end">
					{fields[1].error}
				</h5></span
			>
			<input
				autocomplete="email"
				placeholder={fields[1].placeholder}
				type="email"
				required
				bind:value={$inputEmail}
				on:input={handleInputEmail}
				on:invalid={handleInputEmail}
				on:error={handleInputEmail}
				class="{emailValid
					? 'border-cool-gray border-opacity-60'
					: 'border-strawberry-red focus:outline-strawberry-red focus-visible:outline-strawberry-red focus-within:outline-strawberry-red'} rounded-md border-cool-gray border px-4 py-2"
			/>
			{#if emailValid}
				<b
					class="absolute h-12 aspect-square right-0 top-7 xl:top-9
			stroke-green-600 inline-block"><CheckMark /></b
				>
			{/if}
		</label>
		<!-- Phone -->
		<label class="relative flex flex-col gap-0"
			><span class="flex flex-row justify-between text-marine-blue pb-2"
				>{fields[2].name}
				<h5 class="text-strawberry-red font-thin text-sm h-[1.2rem] place-self-end">
					{fields[2].error}
				</h5></span
			>
			<input
				autocomplete="tel"
				placeholder={fields[2].placeholder}
				type="tel"
				pattern="\d&lcub;6,15&rcub;"
				required
				bind:value={$inputPhone}
				on:input={handleInputPhone}
				on:invalid={handleInputPhone}
				on:error={handleInputPhone}
				class="{phoneValid
					? 'border-cool-gray border-opacity-60'
					: 'border-strawberry-red focus:outline-strawberry-red focus-visible:outline-strawberry-red focus-within:outline-strawberry-red'}
					rounded-md  border  px-4 py-2"
			/>
			{#if phoneValid}
				<b
					class="absolute h-12 aspect-square right-0 top-7 xl:top-9
				stroke-green-600 inline-block"><CheckMark /></b
				>{/if}
		</label>
	</form>
</article>
<slot />
