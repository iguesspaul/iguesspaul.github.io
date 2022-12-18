<script lang="ts">
	import {pythagoras, sinesLaw} from '$lib/utils/math';
	//whether or not the widgets should be visible
	let r17 = false;
	let sqr = false;
	//angles for sines law + one side
	let {a1, a2, a3, s1, sinesAnswer}: any = 0;

	//sides for pythagorean theorem + pythaAnswer
	let a:number = 0;
	let b:number = 0;
	let c:number = 0;
	let pythaAnswer:number = 0;
	let {isasqr, isbsqr, iscsqr}: any = false;

	$: {
		sinesAnswer = sinesLaw(a1, a2, a3, s1);
	}

	$: {
		pythaAnswer = pythagoras(isasqr, isbsqr, iscsqr, a, b, c);
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
</div>
