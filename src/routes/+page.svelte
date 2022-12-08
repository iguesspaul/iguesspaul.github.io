<script lang="ts">
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    let s1 = 0;
    let result = 0;
    $: {
        result = convolution(a1, a2, a3, s1)
    }
    function degrees(a: number) {
        return a * (Math.PI/180);
    }

    function convolution(a1r:number, a2r:number, a3r:number, s1:number) : number {
        const a1 = degrees(a1r);
        const a2 = degrees(a2r);
        const a3 = degrees(a3r);
        return ((s1*Math.sin(a2))/Math.sin(a1))*Math.sin(a3)*s1*0.5;
    }
</script>
<h1 class="font-bold text-2xl mb-4">R.17 Calculator</h1>
<div class="flex flex-col h-screen justify-start m-5">
    <p>angle opposite the number</p>
    <input class="border-2 border-black rounded-md w-1/6 mb-3 p-1" bind:value={a1}/>
    <p>angle to the left of the number</p>
    <input class="border-2 border-black rounded-md w-1/6 mb-3 p-1" bind:value={a2}/>
    <p>angle to the right of the number</p>
    <input class="border-2 border-black rounded-md w-1/6 mb-3 p-1" bind:value={a3} />
    <p>side</p>
    <input class="border-2 border-black rounded-md w-1/6 mb-3 p-1" bind:value={s1} />
    <p>Area: {result}</p>
</div>

