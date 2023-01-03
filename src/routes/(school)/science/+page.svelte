<script lang="ts">
	//kinetic energy
	let kmass: number = 0;
	let velocity: number = 0;
	let kineticEnergy: number = 0;

	$: {
		//every time kmass and velocity changes this runs
		kineticEnergy = kmass * 0.5 * Math.pow(velocity, 2);
	}
	//potential energy
	let height: number = 0;
	let mass: number = 0;
	let gravity: number = 0;
	let potentialEnergy: number = 0;
	$: {
		//every time height, mass, or gravity changes, it updates
		potentialEnergy = height * mass * gravity;
	}
</script>

<div class="p-3 flex flex-col items-start">
	<h1 class="text-2xl font-bold mb-2">Kinetic Energy Calculator</h1>
	<input
		class="w-1/6 p-1 mb-3 border-2 border-black rounded-md"
		type="text"
		placeholder="Mass"
		bind:value={kmass}
	/>
	<input
		class="w-1/6 p-1 mb-3 border-2 border-black rounded-md"
		type="text"
		placeholder="Velocity"
		bind:value={velocity}
	/>
	<p class="mb-5">Kinetic Energy: {kineticEnergy}</p>

	<h1 class="text-2xl font-bold mb-2">Potential Energy Calculator</h1>
	<input
		class="w-1/6 p-1 mb-3 border-2 border-black rounded-md"
		type="text"
		placeholder="Height"
		bind:value={height}
	/>
	<input
		class="w-1/6 p-1 mb-3 border-2 border-black rounded-md"
		type="text"
		placeholder="Mass"
		bind:value={mass}
	/>
	<input
		class="w-1/6 p-1 mb-3 border-2 border-black rounded-md"
		type="text"
		placeholder="Gravity"
		bind:value={gravity}
	/>
	<p>Potential Energy: {potentialEnergy}</p>
</div>
