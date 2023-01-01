<script lang="ts">
	const steps: string[] = ['Your info', 'Select plan', 'Add-ons', 'Summary'];
</script>

<div
	id="form"
	class="rounded-lg mx-auto container grid grid-cols-3 h-[80%] shadow-around-lg shadow-light-blue"
>
	<div class="relative rounded-lg p-4">
		<div class="relative rounded-lg w-full h-full  bg-purplish-blue overflow-hidden">
			<div
				id="bg-waves-2"
				class="absolute rounded-lg w-[200rem] h-full bg-[url('/aniwave-2.svg')] bg-transparent"
			/>
			<div
				id="bg-waves"
				class="absolute rounded-lg w-[200rem] h-full bg-[url('/aniwave.svg')] bg-transparent"
			/>
			<div id="bg-polygon" class="absolute rounded-lg w-full h-full" />
			<article class="relative rounded-lg  w-full h-full bg-transparent">
				<ul
					id="steps"
					class="flex flex-col justify-start pt-8 text-xl text-left w-[18ch] px-[2em] my-[2em] gap-8 uppercase "
				>
					{#each steps as step, id}
						<li id="step-{id + 1}" class="grid grid-cols-2 items-center gap-0">
							<button
								type="button"
								class="bg-transparent border-2 border-white text-white font-bold rounded-full w-[2em] h-[2em]"
								>{id + 1}</button
							>
							<span class="flex flex-col  font-extralight text-cool-gray  w-[14ch] "
								>Step {id + 1}<b class="font-bold text-white tracking-wider">{step}</b></span
							>
						</li>
					{/each}
				</ul>
			</article>
		</div>
	</div>
	<div class="rounded-lg col-span-2">
		<h1>Personal info</h1>
		<h5>Please provide your name, email address, and phone number.</h5>
		<article />
	</div>
</div>

<style>
	@supports (-webkit-mask-image: url('/polygon.svg')) or (mask-image: url('/polygon.svg')) {
		#bg-polygon {
			background-color: rgb(133, 243, 250);
			background: linear-gradient(
				144deg,
				rgba(133, 243, 250, 0.6194852941176471) 0%,
				rgba(250, 255, 170, 0.8127626050420168) 35%,
				rgba(130, 57, 226, 0.5158438375350141) 100%
			);
			-webkit-mask-image: url('/polygon.svg');
			mask-image: url('/polygon.svg');
		}
	}
	#steps > *::before {
		background: white;
		/* position: absolute; */
		border-radius: 50%;
		width: 2em;
		height: 2em;
		aspect-ratio: 1/1;
	}
</style>
