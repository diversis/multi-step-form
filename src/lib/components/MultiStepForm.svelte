<script lang="ts">
	import { currentStep } from '$lib/multiform-store';
	import FormNav from './formNav.svelte';
	import Step1 from './Step1.svelte';
	import Step2 from './Step2.svelte';
	import Step3 from './Step3.svelte';
	import Step4 from './Step4.svelte';
	import ThankYou from './ThankYou.svelte';
	import StepsNav from './stepsNav.svelte';
	export const steps = [
		{ name: 'Your info', component: Step1 },
		{ name: 'Select plan', component: Step2 },
		{ name: 'Add-ons', component: Step3 },
		{ name: 'Summary', component: Step4 },
		{ name: 'Thank You', component: ThankYou }
	];
	let stepId = 0;
</script>

<div
	id="form"
	class="xl:rounded-xl xl:mx-auto xl:container grid grid-cols-1 grid-rows-form-mobile gap-y-0 xl:grid-rows-1 
	xl:grid-cols-3 xl:h-[80%] min-h-screen xl:min-h-fit w-screen shadow-2xl shadow-light-blue "
>
	<div id="col-1" class="relative xl:rounded-xl xl:p-4 h-full xl:h-full xl:overflow-hidden">
		<div
			id="bg-anim"
			class="-z-10 absolute xl:rounded-xl w-full  h-[12em] xl:h-bg-anim xl:w-bg-anim
			 overflow-x-hidden overflow-y-visible xl:overflow-hidden
			 bg-purplish-blue"
		>
			<div
				id="bg-waves-2"
				class="absolute xl:rounded-xl w-[200rem] h-full bg-[url('/aniwave-2.svg')] bg-transparent"
			/>
			<div
				id="bg-waves"
				class="absolute xl:rounded-xl w-[200rem] h-full bg-[url('/aniwave.svg')] bg-transparent"
			/>
			<div id="mask-polygon" class="absolute xl:rounded-xl  w-full h-full ">
				<div id="bg-polygon" class="relative xl:rounded-xl w-full h-full " />
			</div>
		</div>

		<div
			id="steps-wrapper"
			class="relative xl:rounded-xl w-full h-32 xl:h-full py-10 xl:py-16  overflow-hidden "
		>
			<StepsNav {steps} />
		</div>
	</div>
	<div
		id="col-2"
		class="rounded-xl col-span-2 px-3 mx-auto w-bg-anim xl:w-4/5 pt-6 xl:pt-20 pb-12 flex flex-col justify-between h-full bg-white"
	>
		<svelte:component this={steps[$currentStep].component} />
		<FormNav />
	</div>
</div>

<style>
	#mask-polygon {
		background: rgb(218, 250, 133);
		background-image: url('/polygon.svg');
	}
	@supports (-webkit-mask-image: url('/polygon.svg')) or (mask-image: url('/polygon.svg')) {
		#mask-polygon {
			-webkit-mask-image: url('/polygon.svg');
			mask-image: url('/polygon.svg');
		}
		#bg-polygon {
			z-index: -2;

			background: rgb(218, 250, 133);
			background: linear-gradient(
				144deg,
				rgba(255, 135, 6, 0.8) 0%,
				rgba(240, 110, 160, 0.9) 50%,
				rgba(118, 14, 255, 0.9) 100%
			);
			animation: gradient 5s linear infinite alternate;
			background-size: 800% 800%;
		}
	}
	@keyframes gradient {
		0% {
			background-position: 50% 0%;
		}
		50% {
			background-position: 50% 100%;
		}
		100% {
			background-position: 50% 0%;
		}
	}
</style>
