<script>
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    let s1 = 0;
    let result = 0;
    $: {
        result = convolution(a1, a2, a3, s1)
    }
    function degrees(a) {
        const pi = Math.PI;
        return a * (pi/180);
    }

    function convolution(a1r, a2r, a3r, s1) {
        const a1 = degrees(a1r);
        const a2 = degrees(a2r);
        const a3 = degrees(a3r);
        return ((s1*Math.sin(a2))/Math.sin(a1))*Math.sin(a3)*s1*0.5;
    }
</script>

<p>angle opposite the number</p>
<input bind:value={a1}/>
<p>angle to the left of the number</p>
<input bind:value={a2}/>
<p>angle to the right of the number</p>
<input bind:value={a3} />
<p>side</p>
<input bind:value={s1} />
<p>{result}</p>

