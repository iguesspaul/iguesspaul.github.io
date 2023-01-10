<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	export let data: PageData;
	const date: Date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const quotes = [
		'The greatest glory in living lies not in never falling, but in rising every time we fall.',
		'The way to get started is to quit talking and begin doing.',
		'The only true wisdom is in knowing you know nothing.',
		'Quality is not an act, it is a habit.',
		'Know how to listen and you will profit even from those who talk badly.'
	];
	const append = (n: number) => {
		const lastn = String(n);
		const lastOf = Number(lastn[lastn.length - 1]);
		if (lastOf == 1) return 'st';
		else if (lastOf == 2) return 'nd';
		else if (lastOf == 3) return 'rd';
		return 'th';
	};

	function googleSearch(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			goto(`https://www.google.com/search&q=${search}`);
		}
	}

	const final = `Today is the ${day}${append(day)} of ${months[month]}, ${year}.`;
	const quote = quotes[Math.floor(Math.random() * 5)];
	let search = '';
</script>

<main class="relative w-screen h-screen p-0 m-0">
	<div class="flex w-full h-full">
		<div class="w-1/2 h-full bg-teal-900 ">
			<div class="grid w-full h-full grid-cols-4 grid-rows-4 gap-4 p-4 bg-transparent">
				<div class="flex items-center justify-center col-span-1 row-span-1 bg-teal-50 rounded-2xl">
					<h1 class="mb-2 text-4xl font-bold text-center">Hello Paul.</h1>
				</div>
				<div class="flex items-center justify-center col-span-3 row-span-1 bg-teal-50 rounded-2xl">
					<h1 class="mb-2 text-4xl font-bold">{final}</h1>
				</div>
				<div
					class="flex items-center justify-center col-span-1 row-span-1 transition bg-teal-50 rounded-2xl active:scale-90 hover:cursor-pointer"
				>
					<a
						href="https://www.notion.so/Productivity-Dashboard-School-f3f637c0703b49559cfcdaf170146900"
					>
						<iconify-icon icon="cib:notion" width="84px" height="84px" />
					</a>
				</div>
				<div
					class="flex items-center justify-center col-span-1 row-span-1 transition bg-teal-50 rounded-2xl active:scale-90 hover:cursor-pointer"
				>
					<a href="https://unionschool.schoology.com/home">
						<iconify-icon icon="cib:googles-cholar" width="84" height="84" />
					</a>
				</div>
				<div
					class="flex items-center justify-center col-span-1 row-span-1 transition bg-teal-50 rounded-2xl active:scale-90 hover:cursor-pointer"
				>
					<a href="https://app.daily.dev">
						<iconify-icon icon="cil:keyboard" width="84" height="84" />
					</a>
				</div>
				<div
					class="flex items-center justify-center col-span-1 row-span-1 transition bg-teal-50 rounded-2xl active:scale-90 hover:cursor-pointer"
				>
					<a href="https://gmail.com">
						<iconify-icon icon="cib:gmail" width="84" height="84" />
					</a>
				</div>
				<div
					class="flex flex-col items-center justify-center col-span-1 row-span-2 p-4 bg-teal-50 rounded-2xl"
				>
					<p class="text-3xl italic font-bold">"{quote}"</p>
				</div>
				<div class="flex items-center justify-center col-span-3 row-span-2 bg-teal-50 rounded-2xl">
					<img src="/giphy.gif" alt="animated gif" class="w-full h-full rounded-2xl" />
				</div>
			</div>
		</div>
		<div class="w-1/2 h-full bg-teal-50">
			<div class="grid w-full h-full grid-cols-4 grid-rows-4 gap-4 p-4 bg-transparent">
				<div class="flex-col col-span-2 row-span-2 p-4 text-center bg-teal-900 rounded-2xl">
					<h1 class="my-4 text-4xl font-bold text-white">Tasks</h1>
					{#each data.res as task}
						<h1 class="text-4xl font-medium text-white">- {task.content}</h1>
					{:else}
						<h1 class="text-4xl font-extrabold text-teal-50">tasks done</h1>
					{/each}
				</div>
				<div
					class="flex items-center justify-center col-span-1 row-span-1 row-start-3 transition bg-teal-900 rounded-2xl active:scale-90 hover:cursor-pointer"
				>
					<a href="https://todoist.com/app/today">
						<iconify-icon icon="cib:todoist" width="84" height="84" class="text-white" />
					</a>
				</div>
				<div
					class="flex items-center justify-center col-span-3 row-span-1 row-start-4 bg-teal-900 rounded-2xl"
				>
					<input
						bind:value={search}
						class="w-3/4 p-4 text-4xl font-bold text-black bg-teal-50 rounded-2xl"
						placeholder="Google Search"
						on:keydown={googleSearch}
					/>
					<iconify-icon class="ml-4 text-white " icon="cil:search" width="64" height="64" />
				</div>
			</div>
		</div>
	</div>
</main>
