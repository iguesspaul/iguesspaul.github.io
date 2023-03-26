<script lang="ts">
    export let name: String;
    let show:boolean = false;
    const buttonclass = "h-auto p-2 m-2 font-semibold bg-teal-100 rounded-lg";
</script>

<button on:click={() => (show = !show)} class="{buttonclass}"
    >{name}</button
>
{#if show}
    <slot />
{/if}