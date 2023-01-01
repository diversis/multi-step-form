<script lang="ts">
</script>

<div
	id="form"
	class="rounded-lg mx-auto container grid grid-cols-3 h-[80%] shadow-around-lg shadow-light-blue"
>
	<div class="relative rounded-lg p-4">
		<div class="relative rounded-lg w-full h-full  bg-purplish-blue overflow-hidden">
			<div
				id="bg-waves"
				class="absolute rounded-lg w-[200rem] h-full bg-[url('/waves-2.svg')] bg-transparent"
			/>
			<article
				class="relative rounded-lg  w-full h-full bg-[url('/polygon.svg')] bg-transparent bg-bottom"
			>
				<ul
					class="flex flex-col justify-start pt-8 text-xl text-left w-[14ch] mx-auto gap-8 uppercase "
				>
					<li id="step-1" class="flex flex-col font-extralight text-cool-gray">
						Step 1<span class="font-bold text-white tracking-wider">Your info</span>
					</li>
					<li id="step-2" class="flex flex-col font-extralight text-cool-gray">
						Step 2<span class="font-bold text-white tracking-wider">Select plan</span>
					</li>
					<li id="step-3" class="flex flex-col font-extralight text-cool-gray">
						Step 3<span class="font-bold text-white tracking-wider">Add-ons</span>
					</li>
					<l id="step-4" class="flex flex-col font-extralight text-cool-gray">
						Step 4<span class="font-bold text-white tracking-wider">Summary</span>
					</l>
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
	#bg-waves {
		outline: 1px solid green;
		background-repeat: repeat-x;
		background-position: bottom;
		background-size: auto;
		animation-name: waves;
		animation-duration: 10s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@keyframes waves {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(24.375rem - 100%));
		}
	}
	/* #form > * {
		outline: 1px solid red;
	}
	div > * {
		outline: 1px solid green;
	} */
</style>
