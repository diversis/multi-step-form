<script lang="ts">
</script>

<div
	id="form"
	class="rounded-lg mx-auto container grid grid-cols-3 h-[80%] shadow-around-lg shadow-light-blue"
>
	<div class="relative rounded-lg p-4">
		<article
			class="relative rounded-lg  w-full h-full bg-[url('/waves.svg')] bg-purplish-blue bg-bottom"
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
	<div class="rounded-lg col-span-2">
		<h1>Personal info</h1>
		<h5>Please provide your name, email address, and phone number.</h5>
		<article />
	</div>
</div>

<style>
	/* #form > * {
		outline: 1px solid red;
	}
	div > * {
		outline: 1px solid green;
	} */
</style>
