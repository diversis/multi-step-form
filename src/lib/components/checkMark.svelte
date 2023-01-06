<script>
	import { draw } from 'svelte/transition';
</script>

<svg id="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="mx-auto">
	<title>Check Mark</title>
	<g>
		<path
			in:draw={{ duration: 700 }}
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M416 128L192 384l-96-96"
		/>
	</g>
</svg>
