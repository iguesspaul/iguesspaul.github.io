<script lang="ts">
	let r17 = false;
	let sqr = false;
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

	let a = 0;
	let asqr = false;
	let b = 0;
	let bsqr = false;
	let c = 0;
	let csqr = false;
	let answer = 0;
	function find() {
		if (asqr) {
			a = Math.sqrt(a);
		}
		if (bsqr) {
			b = Math.sqrt(b);
		}
		if (csqr) {
			c = Math.sqrt(c);
		}
		if (c == 0) {
			answer = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
			a = 0;
			b = 0;
			c = 0;
		} else if (b == 0) {
			answer = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
			a = 0;
			b = 0;
			c = 0;
		} else if (a == 0) {
			answer = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
			a = 0;
			b = 0;
			c = 0;
		}
	}
</script>

<div class="flex flex-col items-start p-3">
	<h1 class="mb-2 text-2xl font-bold">Grade 9</h1>
	<!-- svelte-ignore a11y-missing-content -->
	<a id="r17" />
	<button on:click={() => (r17 = !r17)} class="h-auto p-2 font-medium bg-teal-100 rounded-lg mb-3"
		>R.17 Calculator</button
	>
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
	<button on:click={() => (sqr = !sqr)} class="h-auto p-2 font-medium bg-teal-100 rounded-lg mb-3"
		>Pythagorean Theorem</button
	>
	{#if sqr}
		<p class="font-bold uppercase">click the checkbox if the number is a square root</p>
		<p>Side A (shortest side)</p>
		<div class="flex flex-row items-center">
			<input class="w-full p-1 mb-3 border-2 border-black rounded-md" bind:value={a} />
			<input
				type="checkbox"
				class=" accent-teal-100 checked:accent-teal-500 hover:accent-teal-400 w-1/6 transition"
				bind:checked={asqr}
			/>
		</div>
		<p>Side B (medium side)</p>
		<div class="flex flex-row items-center">
			<input class="w-full p-1 mb-3 border-2 border-black rounded-md" bind:value={b} />
			<input
				type="checkbox"
				class=" accent-teal-100 checked:accent-teal-500 hover:accent-teal-400 w-1/6 transition"
				bind:checked={bsqr}
			/>
		</div>
		<p>Side C (longest side)</p>
		<div class="flex flex-row items-center">
			<input class="w-full p-1 mb-3 border-2 border-black rounded-md" bind:value={c} />
			<input
				type="checkbox"
				class="accent-teal-100 checked:accent-teal-500 hover:accent-teal-400 w-1/6 transition"
				bind:checked={csqr}
			/>
		</div>
		<button class="h-auto p-2 font-medium bg-teal-100 rounded-lg" on:click={find}>Find</button>
		<p>Answer: {answer}</p>
	{/if}
</div>
