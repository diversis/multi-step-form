<script lang="ts">
	import {
		billingTermMonthly,
		canContinue,
		complitedSteps,
		currentStep,
		paymentPlan
	} from '$lib/multiform-store';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Switch from './Switch.svelte';
	import { paymentPlans } from '../scripts/paymentPlans';

	function handleSwitch(e: CustomEvent) {
		$billingTermMonthly = e.detail;
	}
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
		<h1 id="Step-1 Title" class="text-marine-blue font-bold text-2xl xl:text-4xl">
			Select your plan
		</h1>
		<h2 id="Step-1 Description" class="text-cool-gray text-lg xl:text-xl">
			You have the option of monthly or yearly billing.
		</h2>
	</div>
	<form id="multi" on:submit|preventDefault={handleSubmit}>
		<div class="flex flex-col gap-y-6 xl:grid xl:grid-cols-3 xl:gap-x-8 ">
			{#each paymentPlans as plan, id}
				<label
					id="plan-{id}"
					title="choose {plan.name} plan"
					class="overflow-hidden relative rounded-md w-full xl:h-60
			 border border-solid {$paymentPlan === id
						? 'border-purplish-blue xl:border-marine-blue'
						: 'border-cool-gray border-opacity-60'} hover:border-purplish-blue xl:hover:border-marine-blue"
				>
					<input
						type="radio"
						bind:group={$paymentPlan}
						name="payment plan"
						value={id}
						class="absolute bottom-0 w-full h-0 opacity-0 bg-transparent border-transparent outline-none focus:opacity-100 text-transparent"
					/>
					<div
						class=" px-4 py-2 xl:py-6 h-full w-full flex flex-row xl:flex-col xl:justify-between gap-x-6"
					>
						<div
							class="overflow-hidden my-auto xl:my-0 grid items-center rounded-full w-12 xl:w-16 aspect-square
					{id === 0 ? 'bg-amber-400' : id === 1 ? 'bg-strawberry-red bg-opacity-70' : 'bg-purplish-blue'}"
						>
							<svg class="h-full aspect-square p-2 xl:p-3 fill-white "
								><use href="#{plan.name.toLowerCase()}" /></svg
							>
						</div>
						<div class="flex flex-col text-left">
							<h3 class="font-bold text-xl text-marine-blue">
								{plan.name}
							</h3>
							<h4 class="text-cool-gray">
								${$billingTermMonthly ? `${plan.price.monthly}/mo` : `${plan.price.yearly}/yr`}
							</h4>
							{#if !$billingTermMonthly}<span class="text-marine-blue">2 month free</span>{/if}
						</div>
					</div></label
				>
			{/each}
		</div>
	</form>
	<div class="mx-auto flex flex-row gap-x-8 w-min">
		<span class={$billingTermMonthly ? 'text-marine-blue' : 'text-cool-gray'}>Monthly</span><Switch
			checked={!$billingTermMonthly}
			on:checked={handleSwitch}
		/>
		<span class={$billingTermMonthly ? 'text-cool-gray' : 'text-marine-blue'}>Yearly</span>
	</div>
</article>
<slot />
<!-- Icons -->
<defs class="hidden">
	<svg id="pro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
		<title>Pro</title>
		<path
			d="M19.444 9.361c-.882-4.926-2.854-6.379-3.903-6.379-1.637 0-2.057 1.217-5.541 1.258-3.484-.041-3.904-1.258-5.541-1.258-1.049 0-3.022 1.453-3.904 6.379-.503 2.812-1.049 7.01.252 7.514 1.619.627 2.168-.941 3.946-2.266C6.558 13.266 7.424 12.95 10 12.95s3.442.316 5.247 1.659c1.778 1.324 2.327 2.893 3.946 2.266 1.301-.504.755-4.701.251-7.514zM6 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2-2a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"
			stroke="none"
		/>
	</svg>

	<svg id="arcade" viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg">
		<title>Arcade</title>
		<g>
			<path
				d="m14.5 0c4.418278 0 8 3.581722 8 8 0 4.0806722-3.0552673 7.4477484-7.0030603 7.9384873.002398.0191839.0030603.040271.0030603.0615127v10h10c1.6568542 0 3 1.3431458 3 3s-1.3431458 3-3 3h-22c-1.65685425 0-3-1.3431458-3-3s1.34314575-3 3-3h10v-10l.0030603-.0615127c-3.94779302-.4907389-7.0030603-3.8578151-7.0030603-7.9384873 0-4.418278 3.581722-8 8-8z"
			/>
		</g>
	</svg>

	<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
	<svg id="advanced" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
		<title>Advanced</title>
		<g>
			<path
				d="m16 3c.5522847 0 1 .44771525 1 1v6h6c4.9705627 0 9 4.0294373 9 9s-4.0294373 9-9 9h-14c-4.97056275 0-9-4.0294373-9-9s4.02943725-9 9-9h6v-6c0-.55228475.4477153-1 1-1zm-7 12c-.55228475 0-1 .4477153-1 1v2h-2c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1h2v2c0 .5522847.44771525 1 1 1s1-.4477153 1-1v-2h2c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-2v-2c0-.5522847-.44771525-1-1-1zm16.5 5c-.8284271 0-1.5.6715729-1.5 1.5s.6715729 1.5 1.5 1.5 1.5-.6715729 1.5-1.5-.6715729-1.5-1.5-1.5zm-2-5c-.8284271 0-1.5.6715729-1.5 1.5s.6715729 1.5 1.5 1.5 1.5-.6715729 1.5-1.5-.6715729-1.5-1.5-1.5z"
			/>
		</g>
	</svg>
</defs>
