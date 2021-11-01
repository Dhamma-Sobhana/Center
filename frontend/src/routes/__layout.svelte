<script>
    import { each } from "svelte/internal";
    import Nav from "$lib/nav.svelte";
</script>

<Nav />

<slot></slot>

<style>
    :global(body) {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 1.5em;
    }

    :global(a), :global(a:visited) {
        color: black;
        text-decoration: none;
        display: inline-block;
    }
</style>