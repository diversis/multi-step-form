<script>
	import { onMount, beforeUpdate } from 'svelte';
	import { userName, userPhone, userEmail, canContinue } from '$lib/multiform-store';

	const fields = [
		{ name: 'Name', placeholder: 'e.g. Stephen King' },
		{ name: 'Email Address', placeholder: 'e.g. stephenking@lorem.com' },
		{ name: 'Phone Number', placeholder: 'e.g. +1 234 567 890' }
	];
	onMount(() => {
		if ($userName && $userPhone && $userEmail) {
			$canContinue = true;
		} else {
			$canContinue = false;
		}
	});

	beforeUpdate(() => {
		if ($userName && $userPhone && $userEmail) {
			$canContinue = true;
		} else {
			$canContinue = false;
		}
		console.log('can continue?: ', $canContinue);
	});
</script>

<article class="flex flex-col ">
	<h1 id="Step-1 Title" class="text-marine-blue font-bold text-2xl xl:text-4xl">Personal info</h1>
	<h2 id="Step-1 Description" class="text-cool-gray text-lg xl:text-xl">
		Please provide your name, email address, and phone number.
	</h2>
	<div class="flex flex-col pt-6 xl:pt-12 text-md xl:text-lg gap-4 xl:gap-8">
		<!-- Name -->
		<label class="flex flex-col gap-0"
			><span class=" text-marine-blue pb-2">{fields[0].name}</span>
			<input
				placeholder={fields[0].placeholder}
				bind:value={$userName}
				class="rounded-md border-cool-gray border border-opacity-60 px-4 py-2"
			/></label
		>
		<!-- Email -->
		<label class="flex flex-col gap-0"
			><span class=" text-marine-blue pb-2">{fields[1].name}</span>
			<input
				placeholder={fields[1].placeholder}
				bind:value={$userEmail}
				class="rounded-md border-cool-gray border border-opacity-60 px-4 py-2"
			/></label
		>
		<!-- Phone -->
		<label class="flex flex-col gap-0"
			><span class=" text-marine-blue pb-2">{fields[2].name}</span>
			<input
				placeholder={fields[2].placeholder}
				bind:value={$userPhone}
				class="rounded-md border-cool-gray border border-opacity-60 px-4 py-2"
			/></label
		>
	</div>
</article>
