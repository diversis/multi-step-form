<script lang="ts">
	import { onMount, beforeUpdate } from 'svelte';
	import {
		userName,
		userPhone,
		userEmail,
		canContinue,
		inputEmail,
		inputPhone,
		inputName,
		currentStep
	} from '$lib/multiform-store';
	import { validateUserName, validateEmail, validatePhoneNumber } from '$lib/scripts/validators';
	import FormNav from './formNav.svelte';

	const fields = [
		{ name: 'Name', placeholder: 'e.g. Stephen King' },
		{ name: 'Email Address', placeholder: 'e.g. stephenking@lorem.com' },
		{ name: 'Phone Number', placeholder: 'e.g. +1 234 567 890' }
	];

	let nameValid: boolean;
	let emailValid: boolean;
	let phoneValid: boolean;

	let hasError = false;
	let isSuccessVisible = false;
	let submitted = false;

	onMount(() => {
		nameValid = validateUserName($inputName);
		emailValid = validateEmail($inputEmail);
		phoneValid = validatePhoneNumber($inputPhone);
		$inputName = $userName;
		$inputEmail = $userEmail;
		$inputPhone = $userPhone;

		if (nameValid && emailValid && phoneValid) {
			$canContinue = true;
		} else {
			$canContinue = false;
		}
		console.log('can continue: ', $canContinue);
	});

	beforeUpdate(() => {
		if (nameValid && emailValid && phoneValid) {
			$canContinue = true;
		} else {
			$canContinue = false;
		}
		console.log('can continue?: ', $canContinue);
	});

	function handleSubmit() {
		if (validateUserName($inputName.trim())) {
			userName.set($inputName.trim());
			nameValid = true;
		}

		if (validateEmail($inputEmail.trim())) {
			userEmail.set($inputEmail.trim());
			emailValid = true;
		}
		if (validatePhoneNumber($inputPhone)) {
			userPhone.set($inputPhone);
			phoneValid = true;
		}
		if ($canContinue) {
			$currentStep += 1;
		}
	}
</script>

<article class="flex flex-col ">
	<h1 id="Step-1 Title" class="text-marine-blue font-bold text-2xl xl:text-4xl">Personal info</h1>
	<h2 id="Step-1 Description" class="text-cool-gray text-lg xl:text-xl">
		Please provide your name, email address, and phone number.
	</h2>
	<form
		on:submit|preventDefault={handleSubmit}
		class="flex flex-col pt-6 xl:pt-12 text-md xl:text-lg gap-4 xl:gap-8"
	>
		<!-- Name -->
		<label class="flex flex-col gap-0"
			><span class=" text-marine-blue pb-2">{fields[0].name}</span>
			<input
				placeholder={fields[0].placeholder}
				type="text"
				bind:value={$userName}
				class="rounded-md border-cool-gray border border-opacity-60 px-4 py-2"
			/></label
		>
		<!-- Email -->
		<label class="flex flex-col gap-0"
			><span class=" text-marine-blue pb-2">{fields[1].name}</span>
			<input
				placeholder={fields[1].placeholder}
				type="email"
				bind:value={$userEmail}
				class="rounded-md border-cool-gray border border-opacity-60 px-4 py-2"
			/></label
		>
		<!-- Phone -->
		<label class="flex flex-col gap-0"
			><span class=" text-marine-blue pb-2">{fields[2].name}</span>
			<input
				placeholder={fields[2].placeholder}
				type="number"
				bind:value={$userPhone}
				class="rounded-md border-cool-gray border border-opacity-60 px-4 py-2"
			/></label
		>
	</form>
</article>
<slot />
