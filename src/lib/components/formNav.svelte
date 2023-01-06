<script>
	import { currentStep } from '$lib/multiform-store';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="flex flex-row justify-between">
	<div>
		{#if $currentStep > 0 && $currentStep < 4}
			<button
				type="button"
				title="Go Back"
				on:click|preventDefault={() => {
					$currentStep -= 1;
				}}
				class="px-0 py-3 bg-transparent text-cool-gray hover:text-marine-blue focus:text-marine-blue"
				>Go Back</button
			>
		{/if}
	</div>

	<div>
		{#if $currentStep < 3}
			<button
				type="submit"
				title="Next Step"
				form="multi"
				class="rounded-lg bg-marine-blue w-[14ch] py-3 text-alabaster font-bold
         hover:text-magnolia focus:text-magnolia hover:bg-purplish-blue focus:bg-purplish-blue"
				>Next Step</button
			>{/if}
		{#if $currentStep === 3}
			<button
				type="submit"
				title="Submit Form"
				form="multi-complete"
				class="rounded-lg bg-purplish-blue w-[14ch] py-3 text-alabaster font-bold
         hover:text-magnolia focus:text-magnolia hover:bg-opacity-60 focus:bg-opacity-60"
				>Confirm</button
			>
		{/if}
	</div>
</div>
