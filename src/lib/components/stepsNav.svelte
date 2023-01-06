<script lang="ts">
	import { complitedSteps, currentStep } from '$lib/multiform-store';
	import type { Step } from '$lib/scripts/types';
	export let steps: Step[];
</script>

<article class="relative xl:rounded-xl w-full h-full bg-transparent grid items-center">
	<ul
		id="steps"
		class="relative flex flex-row align-middle xl:flex-col mx-auto xl:mx-0 justify-center 
         xl:justify-start text-xl text-left xl:w-[18ch] px-[2rem] gap-8 uppercase h-min xl:h-full"
	>
		{#each steps as step, id}
			{#if id < 4}
				<li id="step-{id + 1}" class="xl:grid xl:grid-cols-2 items-center xl:gap-0">
					<button
						type="button"
						title="Go to Step {id + 1}"
						on:click|preventDefault={() => {
							if (id < $complitedSteps + 1) {
								$currentStep = id;
							}
						}}
						class="{$currentStep === id
							? 'bg-light-blue'
							: 'bg-transparent'} border-2 {$currentStep === id
							? 'border-light-blue'
							: 'border-alabaster'} 
                        {$currentStep === id ? 'text-marine-blue' : 'text-magnolia'} 
                        font-bold rounded-full w-[2em] h-[2em] 
                    hover:text-marine-blue hover:bg-light-blue hover:border-light-blue
                    focus:text-marine-blue focus:bg-light-blue focus:border-light-blue
                    active:scale-95 transition-colors duration-300 ease-button
                    ">{id + 1}</button
					>
					<span class="xl:flex xl:flex-col  font-extralight text-cool-gray  w-[14ch] hidden"
						>Step {id + 1}<b class="font-bold text-magnolia tracking-wider">{step.name}</b></span
					>
				</li>
			{/if}
		{/each}
	</ul>
</article>
