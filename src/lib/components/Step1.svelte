<script>
	const fields = [
		{ name: 'Name', placeholder: 'e.g. Stephen King' },
		{ name: 'Email Address', placeholder: 'e.g. stephenking@lorem.com' },
		{ name: 'Phone Number', placeholder: 'e.g. +1 234 567 890' }
	];
</script>

<article class="flex flex-col">
	<h1 id="Step-1 Title" class="text-marine-blue font-bold text-4xl">Personal info</h1>
	<h5 id="Step-1 Description" class="text-cool-gray text-xl">
		Please provide your name, email address, and phone number.
	</h5>
	<form class="flex flex-col pt-12 text-lg gap-8">
		{#each fields as field}
			<label class="flex flex-col"
				><span class=" text-purplish-blue pb-2">{field.name}</span>
				<input
					placeholder={field.placeholder}
					class="rounded-md border-cool-gray border border-opacity-60 px-4 py-2"
				/></label
			>
		{/each}
	</form>
</article>
