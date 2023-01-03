<script>
	import { createEventDispatcher } from 'svelte';

	export let checked = false;

	const dispatch = createEventDispatcher();

	function handleCheck() {
		dispatch('checked', checked);
	}
</script>

<label title="Change Billing Term" class="switch relative inline-block w-12 h-6">
	<input on:change={handleCheck} type="checkbox" bind:checked class="w-0 h-0" />
	<span
		class="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-marine-blue transition-all rounded-3xl duration-500
       "
	/>
</label>

<style>
	.slider:before {
		position: absolute;
		content: '';
		height: 70%;
		aspect-ratio: 1/1;
		left: 0.3rem;
		bottom: 15%;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		border-radius: 50%;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(calc(200% - 0.7rem));
		-ms-transform: translateX(calc(200% - 0.7rem));
		transform: translateX(calc(200% - 0.7rem));
	}
</style>
