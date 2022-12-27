<script lang="ts">
</script>

<div
	id="form"
	class="rounded-lg mx-auto container grid grid-cols-3 h-[80%] shadow-around-lg shadow-light-blue"
>
	<div class="relative rounded-lg p-4">
		<article
			class="relative rounded-lg  z-20  w-full h-full bg-[url('/waves.svg')] bg-purplish-blue bg-bottom"
		>
			<ul class="flex flex-col justify-start ">
				<li><span />Your info</li>
				<li><span />Select plan</li>
				<li><span />Add-ons</li>
				<li><span />Summary</li>
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
	#form > * {
		outline: 1px solid red;
	}
	div > * {
		outline: 1px solid green;
	}
</style>
