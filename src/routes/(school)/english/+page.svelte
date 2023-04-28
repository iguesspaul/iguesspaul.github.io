<script>
	import links from "./page.json";
	const linkclass = "h-auto p-2 m-2 font-semibold bg-teal-100 rounded-lg"
</script>

<div class="flex flex-col items-start p-3">
	<h1 class="mb-3 ml-3 text-2xl font-bold">Grade 9</h1>
	{#each links.links as link}
		<a
			id={link.id}
			class="{linkclass}"
			href={link.href}
		>{link.name}
		</a>
	{/each}

	<h1 class="mb-3 ml-3 text-xl font-bold">Writing a Perfect Paragraph</h1>
	<p>1. Write or rewrite your paragraph</p>
	<p>2. Go to the Grammarly website <a href="https://app.grammarly.com/" class="text-bold text-teal-950">https://app.grammarly.com/</a>and create a new document</p>
	<p>3. Paste your paragraph into Grammarly, and correct all spelling, grammar, and verb mistakes for free</p>
	<p>4. Go to <a href="https://chat.openai.com" class="text-semibold text-teal-950">ChatGPT</a> and paste the following into it: </p>
	<p class="m-4 p-2 rounded-lg bg-teal-100 w-1/6">You are a teacher. I am a student who has submitted a paragraph from their essay for review. Grade my paragraph objectively from a scale of 0-100, pointing out where to improve the essay, and what parts of the paragraph are strong already. Here is the paragraph in question: *add paragraph*</p>
	<p>5. ChatGPT will give you a grade, and give you points on where to improve on. You can ask it more questions on your weak points</p>
	<p>6. Keep repeating this process until your paragraph feels perfect to you</p>
</div>
