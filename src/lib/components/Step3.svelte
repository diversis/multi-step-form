<script>
	import { fade } from 'svelte/transition';
	import {
		billingTermMonthly,
		canContinue,
		complitedSteps,
		currentStep,
		selectedAddons
	} from '$lib/multiform-store';
	import { onMount } from 'svelte';
	import { addons } from '../scripts/addons';
	import CheckMark from './checkMark.svelte';

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
		<div class="flex flex-col gap-y-6">
			{#each addons as addon, id}
				<input
					id="plan-{id}-input"
					type="checkbox"
					bind:group={$selectedAddons}
					name="addon:  {addon.name}"
					value={addon.name}
					class="hidden"
				/>
				<label
					for="plan-{id}-input"
					id="plan-{id}-label"
					title="choose {addon.name}"
					class=" relative rounded-md w-full flex flex-row items-center
					 border-2 border-solid {$selectedAddons.includes(addon.name)
						? 'border-marine-blue'
						: 'border-cool-gray'} hover:border-marine-blue border-opacity-60 px-4 gap-4"
				>
					<div
						class="relative w-8 aspect-square appearance-none inline-block
						{$selectedAddons.includes(addon.name)
							? 'bg-purplish-blue border-purplish-blue'
							: 'border-cool-gray border-opacity-60 bg-transparent'}
					  border-2 border-solid color-white rounded-md stroke-alabaster stroke-[80] transition-colors duration-300"
					>
						{#if $selectedAddons.includes(addon.name)}<CheckMark /> {/if}
					</div>
					<div
						class=" py-2 xl:py-4 h-full w-full flex flex-row xl:flex-col xl:justify-between gap-x-6"
					>
						<div class="flex flex-col text-left">
							<h3 class="font-bold text-xl text-marine-blue">
								{addon.name.charAt(0).toUpperCase() + addon.name.slice(1)}
							</h3>
							<h5 class="text-cool-gray">
								{addon.description}
							</h5>
						</div>
					</div>
					<h4 class="text-cool-gray ">
						+${$billingTermMonthly ? `${addon.price.monthly}/mo` : `${addon.price.yearly}/yr`}
					</h4></label
				>{/each}
		</div>
	</form>
</article>
<slot />
