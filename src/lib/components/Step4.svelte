<script>
	import { fade } from 'svelte/transition';
	import {
		selectedAddons,
		billingTermMonthly,
		canContinue,
		complitedSteps,
		currentStep,
		paymentPlan,
		clientEmail,
		clientName,
		clientPhone
	} from '$lib/multiform-store';
	import { onMount } from 'svelte';
	import { addons } from '$lib/scripts/addons';
	import { paymentPlans } from '$lib/scripts/paymentPlans';

	$: sum = () => {
		let summ = 0;
		if ($billingTermMonthly) {
			summ = paymentPlans[$paymentPlan].price.monthly;
			$selectedAddons.map((id) => {
				summ += addons[id].price.monthly;
			});
			return summ;
		}
		summ = paymentPlans[$paymentPlan].price.yearly;
		$selectedAddons.map((id) => {
			summ += addons[id].price.yearly;
		});
		return summ;
	};

	onMount(() => {
		$canContinue = true;
	});

	async function handleSubmit() {
		let result = null;
		const res = await fetch('https://httpbin.org/post', {
			method: 'POST',
			body: JSON.stringify({
				client: {
					name: $clientName,
					email: $clientEmail,
					phone: $clientPhone
				},
				paymentPlan: {
					name: paymentPlans[$paymentPlan].name,
					price: $billingTermMonthly
						? paymentPlans[$paymentPlan].price.monthly
						: paymentPlans[$paymentPlan].price.yearly
				},
				billingTerm: $billingTermMonthly ? 'monthly' : 'yearly',
				addons: $selectedAddons.map((id) => ({
					name: addons[id].name,
					price: $billingTermMonthly ? addons[id].price.monthly : addons[id].price.yearly
				})),
				total: sum()
			})
		});
		const json = await res.json();
		result = JSON.stringify(json.json);
		if (result) {
			console.log(`\n---------------\n Recieved api answer: ${result} \n---------------\n`);
			$complitedSteps = 4;
			$currentStep += 1;
		}
	}
</script>

<article in:fade={{ delay: 0, duration: 250 }} class="flex flex-col gap-y-12">
	<div>
		<h1 id="Step-1 Title" class="text-marine-blue font-bold text-2xl xl:text-4xl">Finishing up</h1>
		<h2 id="Step-1 Description" class="text-cool-gray text-lg xl:text-xl">
			Double-check everything looks OK before confirming.
		</h2>
	</div>
	<form id="multi-complete" on:submit|preventDefault={handleSubmit}>
		<div class="flex flex-col w-full pl-8 pr-4 gap-y-6">
			<div class="relative flex flex-row justify-between gap-4 items-baseline">
				<div class="flex flex-col font-bold text-xl text-marine-blue">
					{paymentPlans[$paymentPlan].name} ({$billingTermMonthly ? 'Monthly' : 'Yearly'})
					<button
						type="button"
						title="Change Payment Plan"
						on:click|preventDefault={() => ($currentStep = 1)}
						class="text-cool-gray text-base font-normal underline text-left hover:text-purplish-blue focus:text-purplish-blue"
						>Change</button
					>
				</div>
				<div class="align-bottom self-end font-bold text-xl text-marine-blue">
					${$billingTermMonthly
						? paymentPlans[$paymentPlan].price.monthly + '/mo'
						: paymentPlans[$paymentPlan].price.yearly + '/yr'}
				</div>
			</div>
			<div />
			{#each $selectedAddons as addon}
				<div class="flex flex-row justify-between gap-4">
					<div class="text-cool-gray">
						{addons[addon].name.charAt(0).toUpperCase() + addons[addon].name.slice(1)}
					</div>
					<div class="align-bottom self-end text-marine-blue">
						+${$billingTermMonthly
							? addons[addon].price.monthly + '/mo'
							: addons[addon].price.yearly + '/yr'}
					</div>
				</div>
			{/each}
			<div class="inline-block" />
			<div class="flex flex-row justify-between gap-4">
				<div class="text-cool-gray">Total (per {billingTermMonthly ? 'month' : 'year'})</div>
				<div class="align-bottom self-end text-purplish-blue font-bold text-2xl">
					${sum()}{$billingTermMonthly ? '/mo' : '/yr'}
				</div>
			</div>
		</div>
	</form>
</article>
<slot />
