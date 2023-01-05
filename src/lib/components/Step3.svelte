<script>
	import { fade } from 'svelte/transition';
	import {
		billingTermMonthly,
		canContinue,
		complitedSteps,
		currentStep
	} from '$lib/multiform-store';
	import { onMount } from 'svelte';
	import { addons } from '../scripts/addons';

	onMount(() => {
		$canContinue = true;
	});

	function handleSubmit() {
		$complitedSteps = 2;
		$currentStep += 1;
	}
</script>

<article in:fade={{ delay: 0, duration: 250 }} class="flex flex-col gap-y-12">
	<div>
		<h1 id="Step-1 Title" class="text-marine-blue font-bold text-2xl xl:text-4xl">Pick add-ons</h1>
		<h2 id="Step-1 Description" class="text-cool-gray text-lg xl:text-xl">
			Add-ons help enhance your gaming experience.
		</h2>
	</div>
	<form id="multi" on:submit|preventDefault={handleSubmit}>
		Online service Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud save +$2/mo
		Customizable Profile Custom theme on your profile +$2/mo
	</form>
</article>
<slot />
