<script>
	import { fade } from 'svelte/transition';
	import {
		billingTermMonthly,
		canContinue,
		complitedSteps,
		currentStep
	} from '$lib/multiform-store';
	import { onMount } from 'svelte';

	onMount(() => {
		$canContinue = true;
	});

	function handleSubmit() {
		$complitedSteps = 3;
		$currentStep += 1;
	}
</script>

<article in:fade={{ delay: 0, duration: 250 }}>
	<h1 id="Step-1 Title" class="text-marine-blue font-bold text-2xl xl:text-4xl">Finishing up</h1>
	<h2 id="Step-1 Description" class="text-cool-gray text-lg xl:text-xl">
		Double-check everything looks OK before confirming.
	</h2>
	<form id="multi-complete" on:submit|preventDefault={handleSubmit}>Total (per month/year)</form>
</article>
<slot />
