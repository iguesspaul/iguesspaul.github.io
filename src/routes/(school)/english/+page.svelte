<script>
	import links from "./page.json";
</script>

<div class="flex flex-col items-start p-3">
	<h1 class="mb-3 ml-3 text-2xl font-bold">Grade 9</h1>
	{#each links.links as link}
		<a
			id={link.id}
			class="h-auto p-2 m-2 font-semibold bg-teal-100 rounded-lg"
			href={link.href}
		>{link.name}
		</a>
	{/each}
</div>
