<script lang="ts">
	import {pythagoras, sinesLaw, distance} from '$lib/utils/math';
	//whether or not the widgets should be visible
	let r17 = false;
	let sqr = false;
	let distanceixl = false;
	//angles for sines law + one side
	let a1: number = 0;
	let a2: number = 0;
	let a3: number = 0;
	let s1: number = 0;
	let sinesAnswer: number = 0;

	//sides for pythagorean theorem + pythaAnswer
	let a:number = 0;
	let b:number = 0;
	let c:number = 0;
	let pythaAnswer:number = 0;
	let isasqr: boolean = false;
	let isbsqr: boolean = false;
	let iscsqr: boolean = false;

	let x1: number = 0;
	let x2: number = 0;
	let y1: number = 0;
	let y2: number = 0;
	let danswer: number = 0;

	$: {
		sinesAnswer = sinesLaw(a1, a2, a3, s1);
	}

	$: {
		pythaAnswer = pythagoras(isasqr, isbsqr, iscsqr, a, b, c);
	}
	$: {
		danswer = distance(x1, x2, y1, y2)
	}

</script>

<div class="flex flex-col items-start p-3">
	<h1 class="mb-3 text-2xl font-bold">Grade 9</h1>
	<!-- svelte-ignore a11y-missing-content -->
	<a class="hidden" id="r17" />
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
		<p class="mb-3 font-medium">Area: {isNaN(sinesAnswer) ? 0 : sinesAnswer}</p>
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
				class=" accent-teal-100 checked:accent-teal-500 hover:accent-teal-400 w-1/6 mb-2 transition"
				bind:checked={isasqr}
			/>
		</div>
		<p>Side B (medium side)</p>
		<div class="flex flex-row items-center">
			<input class="w-full p-1 mb-3 border-2 border-black rounded-md" bind:value={b} />
			<input
				type="checkbox"
				class=" accent-teal-100 checked:accent-teal-500 hover:accent-teal-400 w-1/6 mb-2 transition"
				bind:checked={isbsqr}
			/>
		</div>
		<p>Side C (longest side)</p>
		<div class="flex flex-row items-center">
			<input class="w-full p-1 mb-3 border-2 border-black rounded-md" bind:value={c} />
			<input
				type="checkbox"
				class="accent-teal-100 checked:accent-teal-500 hover:accent-teal-400 w-1/6 mb-2 transition"
				bind:checked={iscsqr}
			/>
		</div>
		<p class="font-medium mb-3">Answer: {pythaAnswer}</p>
	{/if}
	<button on:click={() => (distanceixl = !distanceixl)} class="h-auto p-2 font-medium bg-teal-100 rounded-lg mb-3"
		>Distance</button
	>
	{#if distanceixl}
		<div class="flex gap-4">
			<input class="w-full p-1 mb-3 border-2 border-black rounded-md" placeholder="x1" bind:value={x1} />
			<input class="w-full p-1 mb-3 border-2 border-black rounded-md" placeholder="y1" bind:value={y1} />
		</div>
		<div class="flex gap-4">
			<input class="w-full p-1 mb-3 border-2 border-black rounded-md" placeholder="x2" bind:value={x2} />
			<input class="w-full p-1 mb-3 border-2 border-black rounded-md" placeholder="y2" bind:value={y2} />
		</div>
		<p>Answer: {danswer}</p>
	{/if}
</div>
