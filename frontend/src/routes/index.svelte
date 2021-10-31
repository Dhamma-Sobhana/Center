<script>
    import { pages } from '$lib/stores';
</script>

<svelte:head>
    <title>Sobhana Center</title>
</svelte:head>

<main>
    <h1>Sobhana Center</h1>

    <div class="pages">
        {#each pages as page}
        <div class="page">
            <a href="{page.path}">{page.text}</a>
        </div>
        {/each}
    </div>
</main>

<style>
    .pages {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }

    .page {
        width: 200px;
        border: 1px solid black;
        border-radius: 1em;
        padding: 2em;
        margin-top: 1em;
        text-align: center;
        font-weight: bold;
    }
</style>