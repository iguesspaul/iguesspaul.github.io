<script lang="ts">
	import {pythagoras, sinesLaw, distance, spheresurface} from '$lib/utils/math';
	import Math from './Math.svelte';
	
	//angles for sines law + one side
	let a1: number;
	let a2: number;
	let a3: number;
	let s1: number;
	let sinesAnswer: number = 0;

	//sides for pythagorean theorem + pythaAnswer
	let a:number = 0;
	let b:number = 0;
	let c:number = 0;
	let pythaAnswer:number = 0;
	let isasqr: boolean = false;
	let isbsqr: boolean = false;
	let iscsqr: boolean = false;

	let x1: number;
	let x2: number;
	let y1: number;
	let y2: number;
	let danswer: number = 0;

	//Surface Area of Sphere
	let radius: number;
	let spheresurfacearea: number = 0;

	$: {
		sinesAnswer = sinesLaw(a1, a2, a3, s1);
	}

	$: {
		pythaAnswer = pythagoras(isasqr, isbsqr, iscsqr, a, b, c);
	}
	$: {
		danswer = distance(x1, x2, y1, y2)
	}
	$: {
		spheresurfacearea = spheresurface(radius); 
	}

	const inputclass = "w-full p-1 mb-3 border-2 border-black rounded-md";
</script>

<div class="flex flex-col items-start p-3">
	<h1 class="mb-3 ml-3 text-2xl font-bold">Grade 9</h1>

	<Math name={"Area of Triangle (using Angles)"}>
		<div class="w-1/6 h-auto ml-2">
			<p>angle opposite the number</p>
			<input class="{inputclass}" bind:value={a1} />
			<p>angle to the left of the number</p>
			<input class="{inputclass}" bind:value={a2} />
			<p>angle to the right of the number</p>
			<input class="{inputclass}" bind:value={a3} />
			<p>side</p>
			<input class="{inputclass}" bind:value={s1} />
			<p class="mb-3 font-medium">Area: {isNaN(sinesAnswer) ? 0 : sinesAnswer}</p>
		</div>
	</Math>

	<Math name={"Pythagorean Theorem"}>
		<p class="ml-2 font-bold uppercase">click the checkbox if the number is a square root</p>
		<p class="ml-2">Side A (shortest side)</p>
		<div class="flex flex-row items-center ml-2">
			<input class="{inputclass}" bind:value={a} />
			<input
				type="checkbox"
				class="w-1/6 mb-2 transition accent-teal-100 checked:accent-teal-500 hover:accent-teal-400"
				bind:checked={isasqr}
			/>
		</div>
		<p class="ml-2">Side B (medium side)</p>
		<div class="flex flex-row items-center ml-2">
			<input class="{inputclass}" bind:value={b} />
			<input
				type="checkbox"
				class="w-1/6 mb-2 transition accent-teal-100 checked:accent-teal-500 hover:accent-teal-400"
				bind:checked={isbsqr}
			/>
		</div>
		<p class="ml-2">Side C (longest side)</p>
		<div class="flex flex-row items-center ml-2">
			<input class="{inputclass}" bind:value={c} />
			<input
				type="checkbox"
				class="w-1/6 mb-2 transition accent-teal-100 checked:accent-teal-500 hover:accent-teal-400"
				bind:checked={iscsqr}
			/>
		</div>
		<p class="mb-3 ml-2 font-medium">Answer: {pythaAnswer}</p>
	</Math>

	<Math name={"Distance Calculator"}>
		<div class="flex gap-4 ml-2">
			<input class="{inputclass}" placeholder="x1" bind:value={x1} />
			<input class="{inputclass}" placeholder="y1" bind:value={y1} />
		</div>
		<div class="flex gap-4 ml-2">
			<input class="{inputclass}" placeholder="x2" bind:value={x2} />
			<input class="{inputclass}" placeholder="y2" bind:value={y2} />
		</div>
		<p class="ml-2">Answer: {danswer}</p>
	</Math>

	<Math name="Surface Area Sphere">
		<div class="flex flex-col w-1/6 h-auto ml-2">
			<input class="{inputclass}" placeholder="radius" bind:value={radius} />
			<p>{spheresurfacearea}</p>
		</div>
	</Math>
</div>
