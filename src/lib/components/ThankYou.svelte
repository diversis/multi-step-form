<script>
	import { fade } from 'svelte/transition';
</script>

<article in:fade={{ delay: 0, duration: 250 }} class="grid items-center w-full h-full">
	<div>
		<div
			class="w-20 h-20 bg-strawberry-red border-1 bg-opacity-60 border-strawberry-red rounded-full mx-auto mb-10 grid items-center"
		>
			<div class="w-10 h-10 bg-magnolia mx-auto rounded-full grid items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					class="mx-auto stroke-strawberry-red fill-strawberry-red"
				>
					<g>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
							d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
						/>
					</g>
				</svg>
			</div>
		</div>
		<h1 id="Step-1 Title" class="text-marine-blue font-bold text-2xl xl:text-4xl text-center">
			Thank you!
		</h1>

		<h2
			id="Step-1 Description"
			class="text-cool-gray text-lg xl:text-xl text-center max-w-[40ch] mx-auto"
		>
			Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
			need support, please feel free to email us at support@loremgaming.com.
		</h2>
	</div>
</article>
