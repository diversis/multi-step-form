<script lang="ts">
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import {
		userName,
		userPhone,
		userEmail,
		canContinue,
		inputEmail,
		inputPhone,
		inputName,
		currentStep,
		complitedSteps
	} from '$lib/multiform-store';
	import { validateUserName, validateEmail, validatePhoneNumber } from '$lib/scripts/validators';
	import { draw, fade } from 'svelte/transition';
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
		$inputName = $userName;
		$inputEmail = $userEmail;
		$inputPhone = $userPhone;
		nameValid = validateUserName($inputName);
		emailValid = validateEmail($inputEmail);
		phoneValid = validatePhoneNumber($inputPhone);

		if (nameValid && emailValid && phoneValid) {
			$canContinue = true;
		} else {
			$canContinue = false;
		}
		console.log('can continue: ', $canContinue);
	});

	afterUpdate(() => {
		nameValid = validateUserName($inputName);
		emailValid = validateEmail($inputEmail);
		phoneValid = validatePhoneNumber($inputPhone);
		if (nameValid && emailValid && phoneValid) {
			$canContinue = true;
		} else {
			$complitedSteps = 0;
			$canContinue = false;
		}
		console.log('can continue?: ', $canContinue);
	});

	async function handleSubmit() {
		console.log(
			`submit??? \n---------------\n name: ${$inputName.trim()} \n---------------\n email: ${$inputEmail.trim()} \n---------------\n phone: ${$inputPhone.trim()} `
		);
		if (validateUserName($inputName.trim())) {
			userName.set($inputName.trim());
			fields[0].error = ``;
			nameValid = true;
		} else {
			userName.set('');
			fields[0].error = `Please, provide valid name (3-29 symbols, '-', '_' and whitespace allowed)`;
			nameValid = false;
			$canContinue = false;
		}

		if (validateEmail($inputEmail.trim())) {
			userEmail.set($inputEmail.trim());
			fields[1].error = ``;
			emailValid = true;
		} else {
			userEmail.set('');
			fields[1].error = `Please, provide valid email`;
			emailValid = false;
			$canContinue = false;
		}
		if (validatePhoneNumber($inputPhone)) {
			userPhone.set($inputPhone);
			fields[2].error = ``;
			phoneValid = true;
		} else {
			userPhone.set(null);
			fields[1].error = `Please, provide valid phone number (only numbers)`;
			phoneValid = false;
			$canContinue = false;
		}
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
		class="flex flex-col pt-6 xl:pt-12 text-md xl:text-lg gap-2 xl:gap-4"
	>
		<!-- Name -->
		<label class="flex flex-col gap-0 relative"
			><span class=" text-marine-blue pb-2">{fields[0].name}</span>
			<input
				autocomplete="name"
				placeholder={fields[0].placeholder}
				type="text"
				required
				bind:value={$inputName}
				class="{nameValid
					? 'border-cool-gray border-opacity-60'
					: 'border-strawberry-red focus:outline-strawberry-red focus-visible:outline-strawberry-red focus-within:outline-strawberry-red'}
				rounded-md border  px-4 py-2"
			/>
			{#if nameValid}<b
					class="absolute h-12 aspect-square right-0 top-7 xl:top-9
			stroke-green-600 inline-block"><CheckMark /></b
				>{/if}
			<h5 class="text-strawberry-red font-thin text-xs h-[1.8rem] xl:text-sm xl:h-[1.2rem]">
				{fields[0].error}
			</h5>
		</label>
		<!-- Email -->
		<label class="relative flex flex-col gap-0"
			><span class=" text-marine-blue pb-2">{fields[1].name}</span>
			<input
				autocomplete="email"
				placeholder={fields[1].placeholder}
				type="email"
				required
				bind:value={$inputEmail}
				class="{emailValid
					? 'border-cool-gray border-opacity-60'
					: 'border-strawberry-red focus:outline-strawberry-red focus-visible:outline-strawberry-red focus-within:outline-strawberry-red'} rounded-md border-cool-gray border px-4 py-2"
			/>
			{#if emailValid}
				<b
					class="absolute h-12 aspect-square right-0 top-7 xl:top-9
			stroke-green-600 inline-block"><CheckMark /></b
				>
				<!-- <svg
					in:fade={{ delay: 0, duration: 250 }}
					class="absolute h-12 aspect-square right-0 top-9
			 stroke-green-600 inline-block"><use href="#check" /></svg
				> -->
			{/if}
			<h5 class="text-strawberry-red font-thin text-sm h-[1.2rem]">{fields[1].error}</h5>
		</label>
		<!-- Phone -->
		<label class="relative flex flex-col gap-0"
			><span class=" text-marine-blue pb-2">{fields[2].name}</span>
			<input
				autocomplete="tel"
				placeholder={fields[2].placeholder}
				type="tel"
				pattern="\d&lcub;6,15&rcub;"
				required
				bind:value={$inputPhone}
				class="{phoneValid
					? 'border-cool-gray border-opacity-60'
					: 'border-strawberry-red focus:outline-strawberry-red focus-visible:outline-strawberry-red focus-within:outline-strawberry-red'}
					rounded-md  border  px-4 py-2"
			/>
			{#if phoneValid}
				<!-- <svg
					in:fade={{ delay: 0, duration: 250 }}
					class="absolute h-12 aspect-square right-0 top-9
			 stroke-green-600 inline-block"><use href="#check" /></svg
				> -->
				<b
					class="absolute h-12 aspect-square right-0 top-7 xl:top-9
				stroke-green-600 inline-block"><CheckMark /></b
				>{/if}
			<h5 class="text-strawberry-red font-thin text-sm h-[1.2rem]">{fields[2].error}</h5>
		</label>
	</form>
</article>
<slot />

<!-- Icons
<defs class="hidden">
	<svg id="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="mx-auto">
		<g>
			<path
				in:draw={{ duration: 10000 }}
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="32"
				d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
			/>
		</g>
	</svg>
</defs> -->
