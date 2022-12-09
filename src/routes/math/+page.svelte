<script lang="ts">
	let r17 = false;
	let a1 = 0;
	let a2 = 0;
	let a3 = 0;
	let s1 = 0;
	let result = 0;
	$: {
		result = convolution(a1, a2, a3, s1);
	}
	function degrees(a: number) {
		return a * (Math.PI / 180);
	}

	function convolution(a1r: number, a2r: number, a3r: number, s1: number): number {
		const a1 = degrees(a1r);
		const a2 = degrees(a2r);
		const a3 = degrees(a3r);
		return ((s1 * Math.sin(a2)) / Math.sin(a1)) * Math.sin(a3) * s1 * 0.5;
	}
</script>

<div class="flex flex-col items-start p-3">
	<h1 class="mb-2 text-2xl font-bold">Grade 9</h1>
	<!-- svelte-ignore a11y-missing-content -->
	<a id="r17" />
	<button on:click="{() => r17 = !r17}" class="h-auto p-2 font-medium bg-teal-100 rounded-lg">R.17 Calculator</button>
	{#if r17}
		<p>angle opposite the number</p>
		<input class="w-1/6 p-1 mb-3 border-2 border-black rounded-md" bind:value={a1} />
		<p>angle to the left of the number</p>
		<input class="w-1/6 p-1 mb-3 border-2 border-black rounded-md" bind:value={a2} />
		<p>angle to the right of the number</p>
		<input class="w-1/6 p-1 mb-3 border-2 border-black rounded-md" bind:value={a3} />
		<p>side</p>
		<input class="w-1/6 p-1 mb-3 border-2 border-black rounded-md" bind:value={s1} />
		<p>Area: {result}</p>
	{/if}
</div>
