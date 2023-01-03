<script>
	import { currentStep } from '$lib/multiform-store';

	function handleConfirm() {
		$currentStep += 1;
	}
</script>

<div class="flex flex-row justify-between">
	<div>
		{#if $currentStep > 0 && $currentStep < 4}
			<button
				type="button"
				on:click|preventDefault={() => {
					$currentStep -= 1;
				}}
				class="px-0 py-3 bg-transparent text-cool-gray hover:text-marine-blue focus:text-marine-blue"
				>Back</button
			>
		{/if}
	</div>

	<div>
		{#if $currentStep < 3}
			<button
				type="button"
				on:click|preventDefault={() => {
					$currentStep += 1;
				}}
				class="rounded-lg bg-marine-blue w-[14ch] py-3 text-alabaster font-bold
         hover:text-magnolia focus:text-magnolia hover:bg-purplish-blue focus:bg-purplish-blue"
				>Next Step</button
			>{/if}
		{#if $currentStep === 3}
			<button
				type="submit"
				on:click|preventDefault={handleConfirm}
				class="rounded-lg bg-purplish-blue w-[14ch] py-3 text-alabaster font-bold
         hover:text-magnolia focus:text-magnolia hover:bg-opacity-60 focus:bg-opacity-60"
				>Confirm</button
			>
		{/if}
	</div>
</div>
