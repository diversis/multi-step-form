<script>
	import { draw } from 'svelte/transition';
</script>

<svg id="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="mx-auto">
	<g>
		<path
			in:draw={{ duration: 1000 }}
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="32"
			d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
		/>
	</g>
</svg>
