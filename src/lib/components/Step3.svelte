<script>
	import { fade } from 'svelte/transition';
</script>

<article in:fade={{ delay: 0, duration: 250 }}>
	<h1 id="Step-1 Title" class="text-marine-blue font-bold text-2xl xl:text-4xl">Pick add-ons</h1>
	<h2 id="Step-1 Description" class="text-cool-gray text-lg xl:text-xl">
		Add-ons help enhance your gaming experience.
	</h2>
	<form>
		Online service Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud save +$2/mo
		Customizable Profile Custom theme on your profile +$2/mo
	</form>
</article>
<slot />
